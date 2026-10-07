'use strict'

const { Writable } = require('stream')

function run (opts) {
  const { port } = opts
  return new Writable({
    autoDestroy: true,
    write (chunk, enc, cb) {
      port.postMessage(chunk.toString())
      cb()
    }
  })
}

module.exports = run
