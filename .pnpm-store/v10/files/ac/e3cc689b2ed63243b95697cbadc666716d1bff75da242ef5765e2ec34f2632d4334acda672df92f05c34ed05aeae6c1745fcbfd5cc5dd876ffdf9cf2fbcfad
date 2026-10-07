'use strict';
var aCallable = require('../internals/a-callable');
var isNullOrUndefined = require('../internals/is-null-or-undefined');
var lengthOfArrayLike = require('../internals/length-of-array-like');
var toObject = require('../internals/to-object');
var createProperty = require('../internals/create-property');
var MapHelpers = require('../internals/map-helpers');
var iterate = require('../internals/map-iterate');

var Map = MapHelpers.Map;
var mapHas = MapHelpers.has;
var mapSet = MapHelpers.set;

// `Array.prototype.uniqueBy` method
// https://github.com/tc39/proposal-array-unique
module.exports = function uniqueBy(resolver) {
  var that = toObject(this);
  var length = lengthOfArrayLike(that);
  var result = [];
  var map = new Map();
  var resolverFunction = !isNullOrUndefined(resolver) ? aCallable(resolver) : function (value) {
    return value;
  };
  var index, item, key;
  for (index = 0; index < length; index++) {
    item = that[index];
    key = resolverFunction(item);
    if (!mapHas(map, key)) mapSet(map, key, item);
  }
  index = 0;
  iterate(map, function (value) {
    createProperty(result, index++, value);
  });
  return result;
};
