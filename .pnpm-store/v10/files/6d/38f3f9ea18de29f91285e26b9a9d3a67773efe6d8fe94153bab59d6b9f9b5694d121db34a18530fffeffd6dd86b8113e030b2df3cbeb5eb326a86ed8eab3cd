'use strict'

const { join } = require('path')
const { fork } = require('child_process')
const fs = require('fs')
const SonicBoom = require('../')
const { file, runTests } = require('./helper')

runTests(buildTests)

function buildTests (test, sync) {
  // Reset the umask for testing
  process.umask(0o000)

  test('end after reopen', (t) => {
    t.plan(4)

    const dest = file()
    const stream = new SonicBoom({ dest, minLength: 4096, sync })

    stream.once('ready', () => {
      t.pass('ready emitted')
      const after = dest + '-moved'
      stream.reopen(after)
      stream.write('after reopen\n')
      stream.on('finish', () => {
        t.pass('finish emitted')
        fs.readFile(after, 'utf8', (err, data) => {
          t.error(err)
          t.equal(data, 'after reopen\n')
        })
      })
      stream.end()
    })
  })

  test('end after 2x reopen', (t) => {
    t.plan(4)

    const dest = file()
    const stream = new SonicBoom({ dest, minLength: 4096, sync })

    stream.once('ready', () => {
      t.pass('ready emitted')
      stream.reopen(dest + '-moved')
      const after = dest + '-moved-moved'
      stream.reopen(after)
      stream.write('after reopen\n')
      stream.on('finish', () => {
        t.pass('finish emitted')
        fs.readFile(after, 'utf8', (err, data) => {
          t.error(err)
          t.equal(data, 'after reopen\n')
        })
      })
      stream.end()
    })
  })

  test('end if not ready', (t) => {
    t.plan(3)

    const dest = file()
    const stream = new SonicBoom({ dest, minLength: 4096, sync })
    const after = dest + '-moved'
    stream.reopen(after)
    stream.write('after reopen\n')
    stream.on('finish', () => {
      t.pass('finish emitted')
      fs.readFile(after, 'utf8', (err, data) => {
        t.error(err)
        t.equal(data, 'after reopen\n')
      })
    })
    stream.end()
  })

  test('chunk data accordingly', (t) => {
    t.plan(2)

    const child = fork(join(__dirname, '..', 'fixtures', 'firehose.js'), { silent: true })
    const str = Buffer.alloc(10000).fill('a').toString()

    let data = ''

    child.stdout.on('data', function (chunk) {
      data += chunk.toString()
    })

    child.stdout.on('end', function () {
      t.equal(data, str)
    })

    child.on('close', function (code) {
      t.equal(code, 0)
    })
  })
}
