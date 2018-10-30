'use strict';
var ansiEscapes = require('ansi-escapes');

/**
 * Move cursor left by `x`
 * @param  {Readline} rl - Readline instance
 * @param  {Number}   x  - How far to go left (default to 1)
 */

exports.left = function(rl, x) {
  rl.output.write(ansiEscapes.cursorBackward(x));
};

/**
 * Move cursor right by `x`
 * @param  {Readline} rl - Readline instance
 * @param  {Number}   x  - How far to go left (default to 1)
 */

exports.right = function(rl, x) {
  rl.output.write(ansiEscapes.cursorForward(x));
};

/**
 * Move cursor up by `x`
 * @param  {Readline} rl - Readline instance
 * @param  {Number}   x  - How far to go up (default to 1)
 */

exports.up = function (rl, x) {
  rl.output.write(ansiEscapes.cursorUp(x));
};

/**
 * Move cursor down by `x`
 * @param  {Readline} rl - Readline instance
 * @param  {Number}   x  - How far to go down (default to 1)
 */

exports.down = function (rl, x) {
  rl.output.write(ansiEscapes.cursorDown(x));
};

/**
 * Clear current line
 * @param  {Readline} rl  - Readline instance
 * @param  {Number}   len - number of line to delete
 */
exports.clearLine = function (rl, len) {
  rl.output.write(ansiEscapes.eraseLines(len));
};
