'use strict';
var ArrayBufferViewCore = require('../internals/array-buffer-view-core');
var $filterReject = require('../internals/array-iteration').filterReject;
var fromSameTypeAndList = require('../internals/typed-array-from-same-type-and-list');

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.filterReject` method
// https://github.com/tc39/proposal-array-filtering
exportTypedArrayMethod('filterReject', function filterReject(callbackfn /* , thisArg */) {
  var list = $filterReject(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  return fromSameTypeAndList(this, list);
}, true);
