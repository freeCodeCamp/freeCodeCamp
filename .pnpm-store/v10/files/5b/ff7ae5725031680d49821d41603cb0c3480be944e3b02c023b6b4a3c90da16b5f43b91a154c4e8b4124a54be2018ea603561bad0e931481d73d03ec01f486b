'use strict';
var iterateSimple = require('../internals/iterate-simple');

module.exports = function (set, fn, interruptible) {
  return interruptible ? iterateSimple(set.keys(), fn, true) : set.forEach(fn);
};
