//Created by The Recursive Lambda God
//Follow RLG's master on Facebook: https://www.facebook.com/ItsChrisCates

let assert = require('assert');
let testFile = require('../explorer.js');

/*
** Evaluating line #1 as a lambda
** module.exports = function mountLoopBackExplorer(app) {
*/

assert.deepEqual(typeof testFile, 'function');
console.log('Test for line #1 passed')

console.log('All tests passed.')