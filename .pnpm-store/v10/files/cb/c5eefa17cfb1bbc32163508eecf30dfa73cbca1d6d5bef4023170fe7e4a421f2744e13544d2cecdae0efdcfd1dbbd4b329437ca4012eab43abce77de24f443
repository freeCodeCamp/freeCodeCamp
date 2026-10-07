'use strict'

const bench = require('fastbench')
const SonicBoom = require('sonic-boom')
const ThreadStream = require('.')
const Console = require('console').Console
const fs = require('fs')
const { join } = require('path')

const core = fs.createWriteStream('/dev/null')
const fd = fs.openSync('/dev/null', 'w')
const sonic = new SonicBoom({ fd })
const sonicSync = new SonicBoom({ fd, sync: true })
const out = fs.createWriteStream('/dev/null')
const dummyConsole = new Console(out)
const threadStreamSync = new ThreadStream({
  filename: join(__dirname, 'test', 'to-file.js'),
  workerData: { dest: '/dev/null' },
  bufferSize: 4 * 1024 * 1024,
  sync: true
})
const threadStreamAsync = new ThreadStream({
  filename: join(__dirname, 'test', 'to-file.js'),
  workerData: { dest: '/dev/null' },
  bufferSize: 4 * 1024 * 1024,
  sync: false
})

const MAX = 10000

let str = ''

for (let i = 0; i < 100; i++) {
  str += 'hello'
}

setTimeout(doBench, 100)

const run = bench([
  function benchThreadStreamSync (cb) {
    for (let i = 0; i < MAX; i++) {
      threadStreamSync.write(str)
    }
    setImmediate(cb)
  },
  function benchThreadStreamAsync (cb) {
    threadStreamAsync.once('drain', cb)
    for (let i = 0; i < MAX; i++) {
      threadStreamAsync.write(str)
    }
  },
  function benchSonic (cb) {
    sonic.once('drain', cb)
    for (let i = 0; i < MAX; i++) {
      sonic.write(str)
    }
  },
  function benchSonicSync (cb) {
    sonicSync.once('drain', cb)
    for (let i = 0; i < MAX; i++) {
      sonicSync.write(str)
    }
  },
  function benchCore (cb) {
    core.once('drain', cb)
    for (let i = 0; i < MAX; i++) {
      core.write(str)
    }
  },
  function benchConsole (cb) {
    for (let i = 0; i < MAX; i++) {
      dummyConsole.log(str)
    }
    setImmediate(cb)
  }
], 1000)

function doBench () {
  run(function () {
    run(function () {
      // TODO figure out why it does not shut down
      process.exit(0)
    })
  })
}
