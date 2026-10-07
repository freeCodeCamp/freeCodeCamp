'use strict';
var $ = require('../internals/export');
var iteratorWindow = require('../internals/iterator-window');

// `Iterator.prototype.sliding` method
// https://github.com/tc39/proposal-iterator-chunking
$({ target: 'Iterator', proto: true, real: true, forced: true }, {
  sliding: function sliding(windowSize) {
    return iteratorWindow(this, windowSize, 'allow-partial');
  }
});
