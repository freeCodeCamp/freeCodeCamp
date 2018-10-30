'use strict';
require('../../modules/es6.promise');
require('../../modules/es7.promise.try');
var $Promise = require('../../modules/_core').Promise;
var $try = $Promise['try'];
module.exports = { 'try': function (callbackfn) {
  return $try.call(typeof this === 'function' ? this : $Promise, callbackfn);
} }['try'];
