'use strict';
var $ = require('../internals/export');
var iteratorWindow = require('../internals/iterator-window');

// `Iterator.prototype.windows` method
// https://github.com/tc39/proposal-iterator-chunking
$({ target: 'Iterator', proto: true, real: true, forced: true }, {
  windows: function windows(windowSize /* , undersized */) {
    return iteratorWindow(this, windowSize, arguments.length < 2 ? undefined : arguments[1]);
  }
});
