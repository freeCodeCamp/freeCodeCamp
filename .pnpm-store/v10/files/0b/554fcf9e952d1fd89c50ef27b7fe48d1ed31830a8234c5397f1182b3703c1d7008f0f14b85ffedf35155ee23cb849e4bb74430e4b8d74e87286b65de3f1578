'use strict';
var uncurryThis = require('../internals/function-uncurry-this');
var ArrayBufferViewCore = require('../internals/array-buffer-view-core');
var arrayFromConstructorAndList = require('../internals/array-from-constructor-and-list');
var $arrayUniqueBy = require('../internals/array-unique-by');

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var arrayUniqueBy = uncurryThis($arrayUniqueBy);

// `%TypedArray%.prototype.uniqueBy` method
// https://github.com/tc39/proposal-array-unique
exportTypedArrayMethod('uniqueBy', function uniqueBy(resolver) {
  aTypedArray(this);
  return arrayFromConstructorAndList(getTypedArrayConstructor(this), arrayUniqueBy(this, resolver));
}, true);
