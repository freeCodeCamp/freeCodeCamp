'use strict';
var DESCRIPTORS = require('../internals/descriptors');
var defineBuiltInAccessor = require('../internals/define-built-in-accessor');
var isDetached = require('../internals/array-buffer-is-detached');

var ArrayBufferPrototype = ArrayBuffer.prototype;

// `ArrayBuffer.prototype.detached` getter
// https://tc39.es/ecma262/#sec-get-arraybuffer.prototype.detached
if (DESCRIPTORS && !('detached' in ArrayBufferPrototype)) {
  defineBuiltInAccessor(ArrayBufferPrototype, 'detached', {
    configurable: true,
    get: function detached() {
      return isDetached(this);
    }
  });
}
