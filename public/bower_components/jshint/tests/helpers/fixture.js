/*jshint node:true */

'use strict';

var fs = require('fs');

exports.fixture = function (name) {
  return fs.readFileSync(__dirname + '/../unit/fixtures/' + name).toString();
};
