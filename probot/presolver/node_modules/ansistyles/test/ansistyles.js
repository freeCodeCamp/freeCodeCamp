'use strict';
/*jshint asi: true */
var assert = require('assert')
  , styles = require('../')

function inspect(obj, depth) {
  console.log(require('util').inspect(obj, false, depth || 5, true));
}

assert.equal(styles.reset('reset'), '\u001b[0mreset\u001b[22m', 'reset')
assert.equal(styles.underline('underlined'), '\u001b[4munderlined\u001b[24m', 'underline')
assert.equal(styles.bright('bright'), '\u001b[1mbright\u001b[22m', 'bright')
assert.equal(styles.inverse('inversed'), '\u001b[7minversed\u001b[27m', 'inverse')

console.log('OK');
