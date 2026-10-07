'use strict';
var getBuiltIn = require('../internals/get-built-in');
var caller = require('../internals/caller');

module.exports = {
  WeakMap: getBuiltIn('WeakMap'),
  set: caller('set', 2),
  get: caller('get', 1),
  has: caller('has', 1),
  remove: caller('delete', 1)
};
