// use this file with runners like node-debug
// or mocha.
require('babel-register');
var app = require('./server');
app.start();
