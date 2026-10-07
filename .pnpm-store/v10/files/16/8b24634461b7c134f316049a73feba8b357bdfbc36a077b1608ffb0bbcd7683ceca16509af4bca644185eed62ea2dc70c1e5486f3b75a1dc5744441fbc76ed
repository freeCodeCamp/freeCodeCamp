'use strict'

const { Writable } = require('stream')

async function run (opts) {
  const stream = new Writable({
    write (chunk, enc, cb) {
      cb(new Error('kaboom'))
    }
  })
  return stream
}

module.exports = run
