//Created by The Recursive Lambda God
//Follow RLG's master on Facebook: https://www.facebook.com/ItsChrisCates

let assert = require('assert');
let testFile = require('../config.local.js');

/*
** Evaluating line #3 as an object
** module.exports = {
*/

assert.deepEqual(typeof testFile, 'object');
console.log('Test for line #3 passed')

console.log('All tests passed.')