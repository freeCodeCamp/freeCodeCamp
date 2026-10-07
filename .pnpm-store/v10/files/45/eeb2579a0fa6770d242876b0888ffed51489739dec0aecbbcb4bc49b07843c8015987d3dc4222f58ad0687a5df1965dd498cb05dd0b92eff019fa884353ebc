'use strict';
var ArrayBufferViewCore = require('../internals/array-buffer-view-core');
var $filter = require('../internals/array-iteration').filter;
var fromSameTypeAndList = require('../internals/typed-array-from-same-type-and-list');

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.filter` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.filter
exportTypedArrayMethod('filter', function filter(callbackfn /* , thisArg */) {
  var list = $filter(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  return fromSameTypeAndList(this, list);
});
