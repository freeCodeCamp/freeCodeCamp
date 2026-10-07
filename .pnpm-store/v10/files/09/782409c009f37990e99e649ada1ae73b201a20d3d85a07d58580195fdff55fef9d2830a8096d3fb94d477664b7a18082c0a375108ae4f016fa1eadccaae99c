'use strict';
var $ = require('../internals/export');

var DEG_PER_RAD = Math.PI / 180;

// `Math.radians` method
// https://rwaldron.github.io/proposal-math-extensions/
$({ target: 'Math', stat: true, forced: true }, {
  radians: function radians(degrees) {
    return degrees * DEG_PER_RAD;
  }
});
