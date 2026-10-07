'use strict'

const { Writable } = require('stream')

// Nop console.error to avoid printing things out
console.error = () => {}

setImmediate(function () {
  Promise.reject(new Error('kaboom'))
})

async function run (opts) {
  const stream = new Writable({
    write (chunk, enc, cb) {
      cb()
    }
  })
  return stream
}

module.exports = run
