'use strict';
require('../../modules/es6.weak-map');
require('../../modules/es7.weak-map.of');
var $WeakMap = require('../../modules/_core').WeakMap;
var $of = $WeakMap.of;
module.exports = function of() {
  return $of.apply(typeof this === 'function' ? this : $WeakMap, arguments);
};
