'use strict';
var $ = require('../internals/export');
var globalThis = require('../internals/global-this');
var arrayBufferModule = require('../internals/array-buffer');
var setSpecies = require('../internals/set-species');

var ARRAY_BUFFER = 'ArrayBuffer';
var ArrayBuffer = arrayBufferModule[ARRAY_BUFFER];
var NativeArrayBuffer = globalThis[ARRAY_BUFFER];

// `ArrayBuffer` constructor
// https://tc39.es/ecma262/#sec-arraybuffer-constructor
$({ global: true, constructor: true, forced: NativeArrayBuffer !== ArrayBuffer }, {
  ArrayBuffer: ArrayBuffer
});

setSpecies(ARRAY_BUFFER);
