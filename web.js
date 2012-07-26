(function() {
  var app, express, http, path, port, pub, routes;

  require("coffee-script");

  express = require("express");

  routes = require("./routes");

  http = require("http");

  path = require("path");

  pub = __dirname + "/public";

  port = process.env.PORT || 5000;

  app = express.createServer(express.logger());

  app.configure(function() {
    app.set("port", port);
    app.use(express.logger());
    app.use(express.static(pub));
    app.set("views", __dirname + "/views");
    app.set("view engine", "jade");
    app.use(app.router);
    return app.use(express.compiler({
      src: pub,
      enable: ["less"]
    }));
  });

  app.configure("development", function() {
    return app.use(express.errorHandler());
  });

  app.get("/", routes.index);

  app.listen(port, function() {
    return console.log("Listening on " + port);
  });

}).call(this);
