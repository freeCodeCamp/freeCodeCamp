'use strict';
var $ = require('../internals/export');
var $padEnd = require('../internals/string-pad').end;
var WEBKIT_BUG = require('../internals/string-pad-webkit-bug');

// `String.prototype.padEnd` method
// https://tc39.es/ecma262/#sec-string.prototype.padend
$({ target: 'String', proto: true, forced: WEBKIT_BUG }, {
  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
    return $padEnd(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
  }
});
