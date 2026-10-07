'use strict';
var ArrayBufferViewCore = require('../internals/array-buffer-view-core');
var $map = require('../internals/array-iteration').map;
var fromSameTypeAndList = require('../internals/typed-array-from-same-type-and-list');

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.map` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.map
exportTypedArrayMethod('map', function map(mapfn /* , thisArg */) {
  var list = $map(aTypedArray(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
  return fromSameTypeAndList(this, list);
});
