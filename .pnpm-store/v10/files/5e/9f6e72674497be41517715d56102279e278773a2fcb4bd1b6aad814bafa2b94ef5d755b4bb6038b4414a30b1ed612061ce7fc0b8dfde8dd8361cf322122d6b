'use strict'

const fs = require('fs')
const proxyquire = require('proxyquire')
const SonicBoom = require('../')
const { file, runTests } = require('./helper')

runTests(buildTests)

function buildTests (test, sync) {
  // Reset the umask for testing
  process.umask(0o000)

  test('reopen', (t) => {
    t.plan(9)

    const dest = file()
    const stream = new SonicBoom({ dest, sync })

    t.ok(stream.write('hello world\n'))
    t.ok(stream.write('something else\n'))

    const after = dest + '-moved'

    stream.once('drain', () => {
      t.pass('drain emitted')

      fs.renameSync(dest, after)
      stream.reopen()

      stream.once('ready', () => {
        t.pass('ready emitted')
        t.ok(stream.write('after reopen\n'))

        stream.once('drain', () => {
          fs.readFile(after, 'utf8', (err, data) => {
            t.error(err)
            t.equal(data, 'hello world\nsomething else\n')
            fs.readFile(dest, 'utf8', (err, data) => {
              t.error(err)
              t.equal(data, 'after reopen\n')
              stream.end()
            })
          })
        })
      })
    })
  })

  test('reopen with buffer', (t) => {
    t.plan(9)

    const dest = file()
    const stream = new SonicBoom({ dest, minLength: 4096, sync })

    t.ok(stream.write('hello world\n'))
    t.ok(stream.write('something else\n'))

    const after = dest + '-moved'

    stream.once('ready', () => {
      t.pass('drain emitted')

      stream.flush()
      fs.renameSync(dest, after)
      stream.reopen()

      stream.once('ready', () => {
        t.pass('ready emitted')
        t.ok(stream.write('after reopen\n'))
        stream.flush()

        stream.once('drain', () => {
          fs.readFile(after, 'utf8', (err, data) => {
            t.error(err)
            t.equal(data, 'hello world\nsomething else\n')
            fs.readFile(dest, 'utf8', (err, data) => {
              t.error(err)
              t.equal(data, 'after reopen\n')
              stream.end()
            })
          })
        })
      })
    })
  })

  test('reopen if not open', (t) => {
    t.plan(3)

    const dest = file()
    const stream = new SonicBoom({ dest, sync })

    t.ok(stream.write('hello world\n'))
    t.ok(stream.write('something else\n'))

    stream.reopen()

    stream.end()
    stream.on('close', function () {
      t.pass('ended')
    })
  })

  test('reopen with file', (t) => {
    t.plan(10)

    const dest = file()
    const stream = new SonicBoom({ dest, minLength: 0, sync })

    t.ok(stream.write('hello world\n'))
    t.ok(stream.write('something else\n'))

    const after = dest + '-new'

    stream.once('drain', () => {
      t.pass('drain emitted')

      stream.reopen(after)
      t.equal(stream.file, after)

      stream.once('ready', () => {
        t.pass('ready emitted')
        t.ok(stream.write('after reopen\n'))

        stream.once('drain', () => {
          fs.readFile(dest, 'utf8', (err, data) => {
            t.error(err)
            t.equal(data, 'hello world\nsomething else\n')
            fs.readFile(after, 'utf8', (err, data) => {
              t.error(err)
              t.equal(data, 'after reopen\n')
              stream.end()
            })
          })
        })
      })
    })
  })

  test('reopen throws an error', (t) => {
    t.plan(sync ? 10 : 9)

    const fakeFs = Object.create(fs)
    const SonicBoom = proxyquire('../', {
      fs: fakeFs
    })

    const dest = file()
    const stream = new SonicBoom({ dest, sync })

    t.ok(stream.write('hello world\n'))
    t.ok(stream.write('something else\n'))

    const after = dest + '-moved'

    stream.on('error', () => {
      t.pass('error emitted')
    })

    stream.once('drain', () => {
      t.pass('drain emitted')

      fs.renameSync(dest, after)
      if (sync) {
        fakeFs.openSync = function (file, flags) {
          t.pass('fake fs.openSync called')
          throw new Error('open error')
        }
      } else {
        fakeFs.open = function (file, flags, mode, cb) {
          t.pass('fake fs.open called')
          setTimeout(() => cb(new Error('open error')), 0)
        }
      }

      if (sync) {
        try {
          stream.reopen()
        } catch (err) {
          t.pass('reopen throwed')
        }
      } else {
        stream.reopen()
      }

      setTimeout(() => {
        t.ok(stream.write('after reopen\n'))

        stream.end()
        stream.on('finish', () => {
          fs.readFile(after, 'utf8', (err, data) => {
            t.error(err)
            t.equal(data, 'hello world\nsomething else\nafter reopen\n')
          })
        })
        stream.on('close', () => {
          t.pass('close emitted')
        })
      }, 0)
    })
  })

  test('reopen emits drain', (t) => {
    t.plan(9)

    const dest = file()
    const stream = new SonicBoom({ dest, sync })

    t.ok(stream.write('hello world\n'))
    t.ok(stream.write('something else\n'))

    const after = dest + '-moved'

    stream.once('drain', () => {
      t.pass('drain emitted')

      fs.renameSync(dest, after)
      stream.reopen()

      stream.once('drain', () => {
        t.pass('drain emitted')
        t.ok(stream.write('after reopen\n'))

        stream.once('drain', () => {
          fs.readFile(after, 'utf8', (err, data) => {
            t.error(err)
            t.equal(data, 'hello world\nsomething else\n')
            fs.readFile(dest, 'utf8', (err, data) => {
              t.error(err)
              t.equal(data, 'after reopen\n')
              stream.end()
            })
          })
        })
      })
    })
  })
}
