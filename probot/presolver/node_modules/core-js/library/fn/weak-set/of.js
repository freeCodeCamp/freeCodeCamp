'use strict';
require('../../modules/es6.weak-set');
require('../../modules/es7.weak-set.of');
var $WeakSet = require('../../modules/_core').WeakSet;
var $of = $WeakSet.of;
module.exports = function of() {
  return $of.apply(typeof this === 'function' ? this : $WeakSet, arguments);
};
