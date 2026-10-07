'use strict';

var isUncPath = require('is-unc-path');

module.exports = function isRelative(filepath) {
  if (typeof filepath !== 'string') {
    throw new TypeError('expected filepath to be a string');
  }

  // Windows UNC paths are always considered to be absolute.
  return !isUncPath(filepath) && !/^([a-z]:)?[\\\/]/i.test(filepath);
};
