'use strict';
require('../../modules/es6.map');
require('../../modules/es7.map.from');
var $Map = require('../../modules/_core').Map;
var $from = $Map.from;
module.exports = function from(source, mapFn, thisArg) {
  return $from.call(typeof this === 'function' ? this : $Map, source, mapFn, thisArg);
};
