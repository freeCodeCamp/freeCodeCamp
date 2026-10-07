'use strict';
require('../../modules/es.object.to-string');
require('../../modules/es.map');
require('../../modules/esnext.map.key-by');
require('../../modules/esnext.map.delete-all');
require('../../modules/esnext.map.emplace');
require('../../modules/esnext.map.every');
require('../../modules/esnext.map.filter');
require('../../modules/esnext.map.find');
require('../../modules/esnext.map.find-key');
require('../../modules/esnext.map.get-or-insert');
require('../../modules/esnext.map.get-or-insert-computed');
require('../../modules/esnext.map.includes');
require('../../modules/esnext.map.key-of');
require('../../modules/esnext.map.map-keys');
require('../../modules/esnext.map.map-values');
require('../../modules/esnext.map.merge');
require('../../modules/esnext.map.reduce');
require('../../modules/esnext.map.some');
require('../../modules/esnext.map.update');
var call = require('../../internals/function-call');
var isCallable = require('../../internals/is-callable');
var path = require('../../internals/path');

var Map = path.Map;
var mapKeyBy = Map.keyBy;

module.exports = function keyBy(source, iterable, keyDerivative) {
  return call(mapKeyBy, isCallable(this) ? this : Map, source, iterable, keyDerivative);
};
