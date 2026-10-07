'use strict';
require('../../modules/es.aggregate-error');
require('../../modules/es.array.iterator');
require('../../modules/es.object.to-string');
require('../../modules/es.promise');
require('../../modules/es.promise.any');
require('../../modules/es.string.iterator');
var call = require('../../internals/function-call');
var isCallable = require('../../internals/is-callable');
var path = require('../../internals/path');

var Promise = path.Promise;
var $any = Promise.any;

module.exports = function any(iterable) {
  return call($any, isCallable(this) ? this : Promise, iterable);
};
