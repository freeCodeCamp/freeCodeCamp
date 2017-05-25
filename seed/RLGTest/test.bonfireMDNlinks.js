//Created by The Recursive Lambda God
//Follow RLG's master on Facebook: https://www.facebook.com/ItsChrisCates

let assert = require('assert');
let testFile = require('../bonfireMDNlinks.js');

/*
** Evaluating line #102 as as a reference to value  links
** module.exports = links
*/

assert.deepEqual(typeof testFile, 'object');
console.log('Test for line #102 passed')

console.log('All tests passed.')