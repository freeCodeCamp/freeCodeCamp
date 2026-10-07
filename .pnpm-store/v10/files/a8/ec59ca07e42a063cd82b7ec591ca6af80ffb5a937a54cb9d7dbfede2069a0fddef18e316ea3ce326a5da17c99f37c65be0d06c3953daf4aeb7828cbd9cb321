'use strict'

const { Writable } = require('node:stream')
const fs = require('node:fs')
module.exports = (options) => {
  const myTransportStream = new Writable({
    autoDestroy: true,
    write (chunk, enc, cb) {
      // Bypass console.log() to avoid flakiness
      fs.writeSync(1, chunk.toString())
      cb()
    }
  })
  return myTransportStream
}
