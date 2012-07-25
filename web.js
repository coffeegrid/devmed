var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');

// Path to public directory
var pub = __dirname + '/public';
var port = process.env.PORT || 5000;

var app = express.createServer(express.logger());
app.configure(function(){
    app.set('port', port);
    app.use(express.logger());

    app.use(express.static(pub));
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');

    app.use(app.router);
    app.use(express.compiler({ src: pub, enable: ['less'] }));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);

app.listen(port, function() {
    console.log("Listening on " + port);
});