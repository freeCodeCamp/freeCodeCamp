'use strict';
var $ = require('../internals/export');
var ArrayBufferModule = require('../internals/array-buffer');
var NATIVE_ARRAY_BUFFER = require('../internals/array-buffer-basic-detection');

// `DataView` constructor
// https://tc39.es/ecma262/#sec-dataview-constructor
$({ global: true, constructor: true, forced: !NATIVE_ARRAY_BUFFER }, {
  DataView: ArrayBufferModule.DataView
});
