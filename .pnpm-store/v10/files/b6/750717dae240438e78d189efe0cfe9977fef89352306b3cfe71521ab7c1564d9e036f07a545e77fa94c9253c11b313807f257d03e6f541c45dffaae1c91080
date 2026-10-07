'use strict';
var globalThis = require('../internals/global-this');
var uncurryThis = require('../internals/function-uncurry-this');

var Uint8Array = globalThis.Uint8Array;
var SyntaxError = globalThis.SyntaxError;
var parseInt = globalThis.parseInt;
var min = Math.min;
var NOT_HEX = /[^\da-f]/i;
var exec = uncurryThis(NOT_HEX.exec);
var stringSlice = uncurryThis(''.slice);

module.exports = function (string, into) {
  var stringLength = string.length;
  if (stringLength % 2 !== 0) throw new SyntaxError('String should be an even number of characters');
  var maxLength = into ? min(into.length, stringLength / 2) : stringLength / 2;
  var bytes = into || new Uint8Array(maxLength);
  var read = 0;
  var written = 0;
  while (written < maxLength) {
    var hexits = stringSlice(string, read, read += 2);
    if (exec(NOT_HEX, hexits)) throw new SyntaxError('String should only contain hex characters');
    bytes[written++] = parseInt(hexits, 16);
  }
  return { bytes: bytes, read: read };
};
