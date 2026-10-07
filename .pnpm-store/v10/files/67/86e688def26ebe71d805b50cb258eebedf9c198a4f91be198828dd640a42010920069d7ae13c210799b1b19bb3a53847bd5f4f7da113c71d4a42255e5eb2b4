'use strict';
var $ = require('../internals/export');

// `Math.signbit` method
// https://github.com/tc39/proposal-Math.signbit
$({ target: 'Math', stat: true, forced: true }, {
  signbit: function signbit(x) {
    var n = +x;
    // eslint-disable-next-line no-self-compare -- NaN check
    return n === n && n === 0 ? 1 / n === -Infinity : n < 0;
  }
});
