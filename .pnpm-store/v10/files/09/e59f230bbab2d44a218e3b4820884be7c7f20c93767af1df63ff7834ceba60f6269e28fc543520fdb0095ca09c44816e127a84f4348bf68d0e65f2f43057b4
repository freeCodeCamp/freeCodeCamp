'use strict';
var globalThis = require('../internals/global-this');
var uncurryThis = require('../internals/function-uncurry-this');
var uncurryThisAccessor = require('../internals/function-uncurry-this-accessor');
var toIndex = require('../internals/to-index');
var notDetached = require('../internals/array-buffer-not-detached');
var arrayBufferByteLength = require('../internals/array-buffer-byte-length');
var detachTransferable = require('../internals/detach-transferable');
var PROPER_STRUCTURED_CLONE_TRANSFER = require('../internals/structured-clone-proper-transfer');

var structuredClone = globalThis.structuredClone;
var ArrayBuffer = globalThis.ArrayBuffer;
var DataView = globalThis.DataView;
var max = Math.max;
var min = Math.min;
var ArrayBufferPrototype = ArrayBuffer.prototype;
var DataViewPrototype = DataView.prototype;
var slice = uncurryThis(ArrayBufferPrototype.slice);
var isResizable = uncurryThisAccessor(ArrayBufferPrototype, 'resizable', 'get');
var maxByteLength = uncurryThisAccessor(ArrayBufferPrototype, 'maxByteLength', 'get');
var getInt8 = uncurryThis(DataViewPrototype.getInt8);
var setInt8 = uncurryThis(DataViewPrototype.setInt8);

module.exports = (PROPER_STRUCTURED_CLONE_TRANSFER || detachTransferable) && function (arrayBuffer, newLength, preserveResizability) {
  var byteLength = arrayBufferByteLength(arrayBuffer);
  var newByteLength = newLength === undefined ? byteLength : toIndex(newLength);
  var fixedLength = !isResizable || !isResizable(arrayBuffer);
  var newBuffer;
  notDetached(arrayBuffer);
  if (PROPER_STRUCTURED_CLONE_TRANSFER) {
    arrayBuffer = structuredClone(arrayBuffer, { transfer: [arrayBuffer] });
    if (byteLength === newByteLength && (preserveResizability || fixedLength)) return arrayBuffer;
  }
  if (byteLength >= newByteLength && (!preserveResizability || fixedLength)) {
    newBuffer = slice(arrayBuffer, 0, newByteLength);
  } else {
    var options = preserveResizability && !fixedLength && maxByteLength
      ? { maxByteLength: max(newByteLength, maxByteLength(arrayBuffer)) }
      : undefined;
    newBuffer = new ArrayBuffer(newByteLength, options);
    var a = new DataView(arrayBuffer);
    var b = new DataView(newBuffer);
    var copyLength = min(newByteLength, byteLength);
    for (var i = 0; i < copyLength; i++) setInt8(b, i, getInt8(a, i));
  }
  if (!PROPER_STRUCTURED_CLONE_TRANSFER) detachTransferable(arrayBuffer);
  return newBuffer;
};
