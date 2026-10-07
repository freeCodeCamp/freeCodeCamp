'use strict'

const { test } = require('tap')
const { join } = require('path')
const { file } = require('./helper')
const ThreadStream = require('..')

test('bundlers support with .js file', function (t) {
  t.plan(1)

  globalThis.__bundlerPathsOverrides = {
    'thread-stream-worker': join(__dirname, 'custom-worker.js')
  }

  const dest = file()

  process.on('uncaughtException', error => {
    console.log(error)
  })

  const stream = new ThreadStream({
    filename: join(__dirname, 'to-file.js'),
    workerData: { dest },
    sync: true
  })

  stream.worker.removeAllListeners('message')
  stream.worker.once('message', message => {
    t.equal(message.code, 'CUSTOM-WORKER-CALLED')
  })

  stream.end()
})

test('bundlers support with .mjs file', function (t) {
  t.plan(1)

  globalThis.__bundlerPathsOverrides = {
    'thread-stream-worker': join(__dirname, 'custom-worker.js')
  }

  const dest = file()

  process.on('uncaughtException', error => {
    console.log(error)
  })

  const stream = new ThreadStream({
    filename: join(__dirname, 'to-file.mjs'),
    workerData: { dest },
    sync: true
  })

  stream.worker.removeAllListeners('message')
  stream.worker.once('message', message => {
    t.equal(message.code, 'CUSTOM-WORKER-CALLED')
  })

  stream.end()
})
