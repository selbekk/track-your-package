var express = require("express");
var logfmt = require("logfmt");

var config = require('./config');
var router = require('./router');
var server = express();

server.use(logfmt.requestLogger());

router(server);

var port = Number(process.env.PORT || config.defaultPort);

server.listen(port, function() {
    console.log('Track your package at localhost:' + port + '...');
});