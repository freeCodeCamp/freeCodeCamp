'use strict';
// TODO: Remove this line from `core-js@4`
require('../modules/es.string.trim-left');
var $ = require('../internals/export');
var trimStart = require('../internals/string-trim-start');

// `String.prototype.trimStart` method
// https://tc39.es/ecma262/#sec-string.prototype.trimstart
// eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
$({ target: 'String', proto: true, name: 'trimStart', forced: ''.trimStart !== trimStart }, {
  trimStart: trimStart
});
