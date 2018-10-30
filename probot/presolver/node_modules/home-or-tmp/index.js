'use strict';
var osHomedir = require('os-homedir');
var osTmpdir = require('os-tmpdir');

module.exports = osHomedir() || osTmpdir();
