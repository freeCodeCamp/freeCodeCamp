'use strict';

var assert = require('assert')
  , colors = require('..');

console.log('Foreground colors ..');

assert.equal(colors.white('printed in white'), '\u001b[37mprinted in white\u001b[39m');

assert.equal(colors.black('printed in black'), '\u001b[30mprinted in black\u001b[39m');
assert.equal(colors.brightBlack('printed in bright black'), '\u001b[90mprinted in bright black\u001b[39m');

assert.equal(colors.green('printed in green'), '\u001b[32mprinted in green\u001b[39m');
assert.equal(colors.brightGreen('printed in bright green'), '\u001b[92mprinted in bright green\u001b[39m');

assert.equal(colors.red('printed in red'), '\u001b[31mprinted in red\u001b[39m');
assert.equal(colors.brightRed('printed in bright red'), '\u001b[91mprinted in bright red\u001b[39m');

console.log('OK');

console.log('Background colors ..');

assert.equal(
    colors.bgBlack('printed with black background')
  , '\u001b[40mprinted with black background\u001b[49m'
);

assert.equal(
    colors.bgYellow('printed with yellow background')
  , '\u001b[43mprinted with yellow background\u001b[49m'
);
assert.equal(
    colors.bgBrightYellow('printed with bright yellow background')
  , '\u001b[103mprinted with bright yellow background\u001b[49m'
);

assert.equal(
    colors.bgWhite('printed with white background')
  , '\u001b[47mprinted with white background\u001b[49m'
);

console.log('OK');

console.log('Mixing background and foreground colors ..');

assert.equal(
    colors.blue(colors.bgYellow('printed in blue with yellow background'))
  , '\u001b[34m\u001b[43mprinted in blue with yellow background\u001b[49m\u001b[39m'
);
assert.equal(
    colors.bgYellow(colors.blue('printed in blue with yellow background again'))
  , '\u001b[43m\u001b[34mprinted in blue with yellow background again\u001b[39m\u001b[49m'
);

console.log('OK');
