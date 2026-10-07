'use strict'

const fs = require('fs')
const path = require('path')
const SonicBoom = require('../')
const { file, runTests } = require('./helper')

const isWindows = process.platform === 'win32'

runTests(buildTests)

function buildTests (test, sync) {
  // Reset the umask for testing
  process.umask(0o000)

  test('mode', { skip: isWindows }, (t) => {
    t.plan(6)

    const dest = file()
    const mode = 0o666
    const stream = new SonicBoom({ dest, sync, mode })

    stream.on('ready', () => {
      t.pass('ready emitted')
    })

    t.ok(stream.write('hello world\n'))
    t.ok(stream.write('something else\n'))

    stream.end()

    stream.on('finish', () => {
      fs.readFile(dest, 'utf8', (err, data) => {
        t.error(err)
        t.equal(data, 'hello world\nsomething else\n')
        t.equal(fs.statSync(dest).mode & 0o777, stream.mode)
      })
    })
  })

  test('mode default', { skip: isWindows }, (t) => {
    t.plan(6)

    const dest = file()
    const defaultMode = 0o666
    const stream = new SonicBoom({ dest, sync })

    stream.on('ready', () => {
      t.pass('ready emitted')
    })

    t.ok(stream.write('hello world\n'))
    t.ok(stream.write('something else\n'))

    stream.end()

    stream.on('finish', () => {
      fs.readFile(dest, 'utf8', (err, data) => {
        t.error(err)
        t.equal(data, 'hello world\nsomething else\n')
        t.equal(fs.statSync(dest).mode & 0o777, defaultMode)
      })
    })
  })

  test('mode on mkdir', { skip: isWindows }, (t) => {
    t.plan(5)

    const dest = path.join(file(), 'out.log')
    const mode = 0o666
    const stream = new SonicBoom({ dest, mkdir: true, mode, sync })

    stream.on('ready', () => {
      t.pass('ready emitted')
    })

    t.ok(stream.write('hello world\n'))

    stream.flush()

    stream.on('drain', () => {
      fs.readFile(dest, 'utf8', (err, data) => {
        t.error(err)
        t.equal(data, 'hello world\n')
        t.equal(fs.statSync(dest).mode & 0o777, stream.mode)
        stream.end()
      })
    })
  })

  test('mode on append', { skip: isWindows }, (t) => {
    t.plan(5)

    const dest = file()
    fs.writeFileSync(dest, 'hello world\n', 'utf8', 0o422)
    const mode = isWindows ? 0o444 : 0o666
    const stream = new SonicBoom({ dest, append: false, mode, sync })

    stream.on('ready', () => {
      t.pass('ready emitted')
    })

    t.ok(stream.write('something else\n'))

    stream.flush()

    stream.on('drain', () => {
      fs.readFile(dest, 'utf8', (err, data) => {
        t.error(err)
        t.equal(data, 'something else\n')
        t.equal(fs.statSync(dest).mode & 0o777, stream.mode)
        stream.end()
      })
    })
  })
}
