'use strict';
var iterateSimple = require('../internals/iterate-simple');

module.exports = function (map, fn, interruptible) {
  return interruptible ? iterateSimple(map.entries(), function (entry) {
    return fn(entry[1], entry[0]);
  }, true) : map.forEach(fn);
};
