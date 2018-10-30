'use strict';

var implementation = require('./implementation');

module.exports = Function.prototype.bind || implementation;
