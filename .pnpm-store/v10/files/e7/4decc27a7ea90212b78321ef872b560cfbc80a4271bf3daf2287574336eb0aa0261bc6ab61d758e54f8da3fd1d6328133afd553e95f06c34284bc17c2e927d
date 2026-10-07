'use strict';
var globalThis = require('../internals/global-this');
var uncurryThisAccessor = require('../internals/function-uncurry-this-accessor');
var classof = require('../internals/classof-raw');

var ArrayBuffer = globalThis.ArrayBuffer;
var TypeError = globalThis.TypeError;

// Includes
// - Perform ? RequireInternalSlot(O, [[ArrayBufferData]]).
// - If IsSharedArrayBuffer(O) is true, throw a TypeError exception.
module.exports = ArrayBuffer && uncurryThisAccessor(ArrayBuffer.prototype, 'byteLength', 'get') || function (O) {
  if (classof(O) !== 'ArrayBuffer') throw new TypeError('ArrayBuffer expected');
  return O.byteLength;
};
