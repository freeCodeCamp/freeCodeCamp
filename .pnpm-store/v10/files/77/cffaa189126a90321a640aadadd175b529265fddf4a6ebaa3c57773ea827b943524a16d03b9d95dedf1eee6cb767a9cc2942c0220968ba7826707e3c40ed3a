'use strict'

const fs = require('fs')
const path = require('path')
const SonicBoom = require('../')
const { file, runTests } = require('./helper')

runTests(buildTests)

function buildTests (test, sync) {
  // Reset the unmask for testing
  process.umask(0o000)

  test('append', (t) => {
    t.plan(4)

    const dest = file()
    fs.writeFileSync(dest, 'hello world\n')
    const stream = new SonicBoom({ dest, append: false, sync })

    stream.on('ready', () => {
      t.pass('ready emitted')
    })

    t.ok(stream.write('something else\n'))

    stream.flush()

    stream.on('drain', () => {
      fs.readFile(dest, 'utf8', (err, data) => {
        t.error(err)
        t.equal(data, 'something else\n')
        stream.end()
      })
    })
  })

  test('mkdir', (t) => {
    t.plan(4)

    const dest = path.join(file(), 'out.log')
    const stream = new SonicBoom({ dest, mkdir: true, sync })

    stream.on('ready', () => {
      t.pass('ready emitted')
    })

    t.ok(stream.write('hello world\n'))

    stream.flush()

    stream.on('drain', () => {
      fs.readFile(dest, 'utf8', (err, data) => {
        t.error(err)
        t.equal(data, 'hello world\n')
        stream.end()
      })
    })
  })

  test('flush', (t) => {
    t.plan(5)

    const dest = file()
    const fd = fs.openSync(dest, 'w')
    const stream = new SonicBoom({ fd, minLength: 4096, sync })

    stream.on('ready', () => {
      t.pass('ready emitted')
    })

    t.ok(stream.write('hello world\n'))
    t.ok(stream.write('something else\n'))

    stream.flush()

    stream.on('drain', () => {
      fs.readFile(dest, 'utf8', (err, data) => {
        t.error(err)
        t.equal(data, 'hello world\nsomething else\n')
        stream.end()
      })
    })
  })

  test('flush with no data', (t) => {
    t.plan(2)

    const dest = file()
    const fd = fs.openSync(dest, 'w')
    const stream = new SonicBoom({ fd, minLength: 4096, sync })

    stream.on('ready', () => {
      t.pass('ready emitted')
    })

    stream.flush()

    stream.on('drain', () => {
      t.pass('drain emitted')
    })
  })
}
