'use strict'

const { join } = require('path')
const ThreadStream = require('..')
const assert = require('assert')

let worker = null

function setup () {
  const stream = new ThreadStream({
    filename: join(__dirname, 'to-file.js'),
    workerData: { dest: process.argv[2] },
    sync: true
  })

  worker = stream.worker

  stream.write('hello')
  stream.write(' ')
  stream.write('world\n')
  stream.flushSync()
  stream.unref()

  // the stream object goes out of scope here
  setImmediate(gc) // eslint-disable-line
}

setup()

let exitEmitted = false
worker.on('exit', function () {
  exitEmitted = true
})

process.on('exit', function () {
  assert.strictEqual(exitEmitted, true)
})
