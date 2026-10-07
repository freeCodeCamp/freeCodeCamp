'use strict'

/* eslint-disable no-var */

var queue = require('./')(worker, 1)

queue.push(42, function (err, result) {
  if (err) { throw err }
  console.log('the result is', result)
})

function worker (arg, cb) {
  cb(null, 42 * 2)
}
