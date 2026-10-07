'use strict'

const { Writable } = require('stream')

async function run (opts) {
  const stream = new Writable({
    write (chunk, enc, cb) {
      process.exit(1)
    }
  })
  return stream
}

module.exports = run
