/* eslint no-extend-native: 0 */
var shell = require('./shell.js');
var common = require('./src/common');
Object.keys(shell).forEach(function (cmd) {
  global[cmd] = shell[cmd];
});

var _to = require('./src/to');
String.prototype.to = common.wrap('to', _to);

var _toEnd = require('./src/toEnd');
String.prototype.toEnd = common.wrap('toEnd', _toEnd);
