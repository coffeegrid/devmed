require "coffee-script"

express = require("express")
routes = require("./routes")
http = require("http")
path = require("path")

# Path to public directory
pub = __dirname + "/public"
port = process.env.PORT or 5000
app = express.createServer(express.logger())
app.configure ->
  app.set "port", port
  app.use express.logger()
  app.use express.static(pub)
  app.set "views", __dirname + "/views"
  app.set "view engine", "jade"
  app.use app.router
  app.use express.compiler(
    src: pub
    enable: ["less"]
  )

app.configure "development", ->
  app.use express.errorHandler()

app.get "/", routes.index

app.listen port, ->
  console.log "Listening on " + port