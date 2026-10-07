'use strict';
// TODO: Remove from `core-js@4`
var $ = require('../internals/export');
var bind = require('../internals/function-bind');

// `Function.prototype.bind` method
// https://tc39.es/ecma262/#sec-function.prototype.bind
// eslint-disable-next-line es/no-function-prototype-bind -- detection
$({ target: 'Function', proto: true, forced: Function.bind !== bind }, {
  bind: bind
});
