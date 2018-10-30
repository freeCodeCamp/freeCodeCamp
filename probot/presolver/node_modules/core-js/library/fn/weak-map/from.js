'use strict';
require('../../modules/es6.weak-map');
require('../../modules/es7.weak-map.from');
var $WeakMap = require('../../modules/_core').WeakMap;
var $from = $WeakMap.from;
module.exports = function from(source, mapFn, thisArg) {
  return $from.call(typeof this === 'function' ? this : $WeakMap, source, mapFn, thisArg);
};
