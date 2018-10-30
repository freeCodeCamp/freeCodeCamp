'use strict';
require('../../modules/es6.map');
require('../../modules/es7.map.of');
var $Map = require('../../modules/_core').Map;
var $of = $Map.of;
module.exports = function of() {
  return $of.apply(typeof this === 'function' ? this : $Map, arguments);
};
