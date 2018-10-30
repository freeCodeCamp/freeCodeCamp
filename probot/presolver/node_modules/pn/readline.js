var readline = require("readline");
var promisify = require("./_promisify.js");
var bind = function(c, f) { return f && f.bind(c); };
Object.defineProperties(module.exports, {
  Interface: { enumerable: true, value: readline.Interface },
  clearLine: { enumerable: true, value: bind(readline, readline.clearLine) },
  clearScreenDown: { enumerable: true, value: bind(readline, readline.clearScreenDown) },
  codePointAt: { enumerable: true, value: bind(readline, readline.codePointAt) },
  createInterface: { enumerable: true, value: bind(readline, readline.createInterface) },
  cursorTo: { enumerable: true, value: bind(readline, readline.cursorTo) },
  emitKeypressEvents: { enumerable: true, value: bind(readline, readline.emitKeypressEvents) },
  getStringWidth: { enumerable: true, value: bind(readline, readline.getStringWidth) },
  isFullWidthCodePoint: { enumerable: true, value: bind(readline, readline.isFullWidthCodePoint) },
  moveCursor: { enumerable: true, value: bind(readline, readline.moveCursor) },
  stripVTControlCharacters: { enumerable: true, value: bind(readline, readline.stripVTControlCharacters) },
});