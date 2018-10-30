'use strict'

// Buffer in node 4.x < 4.5.0 doesn't have working Buffer.from
// or Buffer.alloc, and Buffer in node 10 deprecated the ctor.
// .M, this is fine .\^/M..
let B = Buffer
/* istanbul ignore next */
if (!B.alloc) {
  B = require('safe-buffer').Buffer
}
module.exports = B
