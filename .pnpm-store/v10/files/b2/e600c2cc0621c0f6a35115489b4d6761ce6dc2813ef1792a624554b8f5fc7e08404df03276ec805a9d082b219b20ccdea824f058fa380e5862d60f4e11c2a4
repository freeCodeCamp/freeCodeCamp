'use strict';
var $ = require('../internals/export');
var $clamp = require('../internals/math-clamp');
var thisNumberValue = require('../internals/this-number-value');

// `Number.prototype.clamp` method
// https://github.com/tc39/proposal-math-clamp
$({ target: 'Number', proto: true, forced: true }, {
  clamp: function clamp(min, max) {
    return $clamp(thisNumberValue(this), min, max);
  }
});
