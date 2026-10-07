'use strict';
// TODO: Remove this line from `core-js@4`
require('../modules/es.string.trim-right');
var $ = require('../internals/export');
var trimEnd = require('../internals/string-trim-end');

// `String.prototype.trimEnd` method
// https://tc39.es/ecma262/#sec-string.prototype.trimend
// eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
$({ target: 'String', proto: true, name: 'trimEnd', forced: ''.trimEnd !== trimEnd }, {
  trimEnd: trimEnd
});
