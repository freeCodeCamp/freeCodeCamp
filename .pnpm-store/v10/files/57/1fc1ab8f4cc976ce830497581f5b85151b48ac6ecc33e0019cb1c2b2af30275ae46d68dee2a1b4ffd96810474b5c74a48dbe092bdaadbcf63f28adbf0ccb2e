'use strict';
var $ = require('../internals/export');
var $parseFloat = require('../internals/number-parse-float');

// `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string
$({ global: true, forced: parseFloat !== $parseFloat }, {
  parseFloat: $parseFloat
});
