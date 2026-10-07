'use strict';
var $ = require('../internals/export');
var log1p = require('../internals/math-log1p');

// eslint-disable-next-line es/no-math-atanh -- required for testing
var $atanh = Math.atanh;

var FORCED = !($atanh && 1 / $atanh(-0) < 0);

// `Math.atanh` method
// https://tc39.es/ecma262/#sec-math.atanh
// Tor Browser bug: Math.atanh(-0) -> 0
$({ target: 'Math', stat: true, forced: FORCED }, {
  atanh: function atanh(x) {
    var n = +x;
    return n === 0 ? n : log1p(2 * n / (1 - n)) / 2;
  }
});
