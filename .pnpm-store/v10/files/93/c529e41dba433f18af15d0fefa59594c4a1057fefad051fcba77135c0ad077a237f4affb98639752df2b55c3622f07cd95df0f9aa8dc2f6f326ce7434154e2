'use strict'

const fs = require('node:fs')
const { once } = require('node:events')
const { Transform } = require('node:stream')

async function run (opts) {
  if (!opts.destination) throw new Error('kaboom')
  const stream = fs.createWriteStream(opts.destination)
  await once(stream, 'open')
  const t = new Transform({
    transform (chunk, enc, cb) {
      setImmediate(cb, null, chunk.toString().toUpperCase())
    }
  })
  t.pipe(stream)
  return t
}

module.exports = run
