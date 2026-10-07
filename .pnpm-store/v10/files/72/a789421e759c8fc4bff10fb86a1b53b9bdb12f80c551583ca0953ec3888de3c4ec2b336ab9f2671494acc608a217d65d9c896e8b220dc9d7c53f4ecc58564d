'use strict';
require('../../modules/es.promise');
require('../../modules/es.promise.with-resolvers');
var call = require('../../internals/function-call');
var isCallable = require('../../internals/is-callable');
var path = require('../../internals/path');

var Promise = path.Promise;
var promiseWithResolvers = Promise.withResolvers;

module.exports = function withResolvers() {
  return call(promiseWithResolvers, isCallable(this) ? this : Promise);
};
