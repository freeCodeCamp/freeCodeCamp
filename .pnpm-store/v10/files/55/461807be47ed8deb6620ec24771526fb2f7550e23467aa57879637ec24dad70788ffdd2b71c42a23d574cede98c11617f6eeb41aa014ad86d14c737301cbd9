'use strict'

const bench = require('fastbench')
const SonicBoom = require('./')
const Console = require('console').Console
const fs = require('fs')

const core = fs.createWriteStream('/dev/null')
const fd = fs.openSync('/dev/null', 'w')
const sonic = new SonicBoom({ fd })
const sonic4k = new SonicBoom({ fd, minLength: 4096 })
const sonicSync = new SonicBoom({ fd, sync: true })
const sonicSync4k = new SonicBoom({ fd, minLength: 4096, sync: true })
const dummyConsole = new Console(fs.createWriteStream('/dev/null'))

const MAX = 10000

let str = ''

for (let i = 0; i < 10; i++) {
  str += 'hello'
}

setTimeout(doBench, 100)

const run = bench([
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
  function benchSonic4k (cb) {
    sonic4k.once('drain', cb)
    for (let i = 0; i < MAX; i++) {
      sonic4k.write(str)
    }
  },
  function benchSonicSync4k (cb) {
    sonicSync4k.once('drain', cb)
    for (let i = 0; i < MAX; i++) {
      sonicSync4k.write(str)
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
  run(run)
}
