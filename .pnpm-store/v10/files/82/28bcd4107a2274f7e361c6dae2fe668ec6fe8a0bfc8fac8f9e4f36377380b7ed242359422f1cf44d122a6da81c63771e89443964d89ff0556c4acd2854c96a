'use strict'

const t = require('tap')

if (process.env.CI) {
  t.skip('skip on CI')
  process.exit(0)
}

const { join } = require('path')
const { file } = require('./helper')
const { createReadStream } = require('fs')
const ThreadStream = require('..')
const buffer = require('buffer')

const MAX_STRING = buffer.constants.MAX_STRING_LENGTH

t.plan(1)

const dest = file()
const stream = new ThreadStream({
  filename: join(__dirname, 'to-file.js'),
  workerData: { dest },
  sync: false
})

stream.on('close', async () => {
  t.comment('close emitted')
  let buf
  for await (const chunk of createReadStream(dest)) {
    buf = chunk
  }
  t.equal('asd', buf.toString().slice(-3))
})

stream.on('ready', () => {
  t.comment('open emitted')
  stream.write('a'.repeat(MAX_STRING - 2))
  stream.write('asd')
  stream.end()
})
