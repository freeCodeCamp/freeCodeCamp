var Uint8Array = require('../').Uint8Array;
var ua = new Uint8Array(5);
ua[1] = 256 + 55;
console.log(ua[1]);
