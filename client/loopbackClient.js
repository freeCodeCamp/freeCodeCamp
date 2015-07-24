var loopback = require('loopback'),
    boot = require('loopback-boot');

var app = loopback();

boot(app, __dirname);

module.exports = app;
