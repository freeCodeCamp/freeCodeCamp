//Created by The Recursive Lambda God
//Follow RLG's master on Facebook: https://www.facebook.com/ItsChrisCates

let assert = require('assert');
let testFile = require('../redirectHttps.js');

/*
** Evaluating line #12 as a lambda
** module.exports = function(loopbackApp) {
*/

assert.deepEqual(typeof testFile, 'function');
console.log('Test for line #12 passed')

console.log('All tests passed.')