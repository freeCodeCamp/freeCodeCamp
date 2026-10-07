'use strict';
var $ = require('../internals/export');
var call = require('../internals/function-call');
var iterate = require('../internals/iterate');
var isCallable = require('../internals/is-callable');
var aCallable = require('../internals/a-callable');
var Map = require('../internals/map-helpers').Map;

// `Map.keyBy` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', stat: true, forced: true }, {
  keyBy: function keyBy(iterable, keyDerivative) {
    var C = isCallable(this) ? this : Map;
    var newMap = new C();
    aCallable(keyDerivative);
    var setter = aCallable(newMap.set);
    iterate(iterable, function (element) {
      call(setter, newMap, keyDerivative(element), element);
    });
    return newMap;
  }
});
