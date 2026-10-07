'use strict';

var regex = require('unc-path-regex')();

module.exports = function(filepath) {
  if (typeof filepath !== 'string') {
    throw new TypeError('expected a string');
  }
  return regex.test(filepath);
};
