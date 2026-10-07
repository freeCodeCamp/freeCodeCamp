'use strict';
var getBuiltIn = require('../internals/get-built-in');
var caller = require('../internals/caller');

module.exports = {
  WeakSet: getBuiltIn('WeakSet'),
  add: caller('add', 1),
  has: caller('has', 1),
  remove: caller('delete', 1)
};
