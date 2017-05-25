//Created by The Recursive Lambda God
//Follow RLG's master on Facebook: https://www.facebook.com/ItsChrisCates

let assert = require('assert');
let testFile = require('../webpack.config.js');

/*
** Evaluating line #8 as an object
** module.exports = {
*/

assert.deepEqual(typeof testFile, 'object');
console.log('Test for line #8 passed')

console.log('All tests passed.')