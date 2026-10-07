'use strict'

const { test } = require('tap')
const fs = require('fs')
const proxyquire = require('proxyquire')
const SonicBoom = require('../')
const { file, runTests } = require('./helper')

runTests(buildTests)

function buildTests (test, sync) {
  // Reset the umask for testing
  process.umask(0o000)

  test('write things to a file descriptor', (t) => {
    t.plan(6)

    const dest = file()
    const fd = fs.openSync(dest, 'w')
    const stream = new SonicBoom({ fd, sync })

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
      })
    })
    stream.on('close', () => {
      t.pass('close emitted')
    })
  })

  test('write things in a streaming fashion', (t) => {
    t.plan(8)

    const dest = file()
    const fd = fs.openSync(dest, 'w')
    const stream = new SonicBoom({ fd, sync })

    stream.once('drain', () => {
      fs.readFile(dest, 'utf8', (err, data) => {
        t.error(err)
        t.equal(data, 'hello world\n')
        t.ok(stream.write('something else\n'))
      })

      stream.once('drain', () => {
        fs.readFile(dest, 'utf8', (err, data) => {
          t.error(err)
          t.equal(data, 'hello world\nsomething else\n')
          stream.end()
        })
      })
    })

    t.ok(stream.write('hello world\n'))

    stream.on('finish', () => {
      t.pass('finish emitted')
    })
    stream.on('close', () => {
      t.pass('close emitted')
    })
  })

  test('can be piped into', (t) => {
    t.plan(4)

    const dest = file()
    const fd = fs.openSync(dest, 'w')
    const stream = new SonicBoom({ fd, sync })
    const source = fs.createReadStream(__filename, { encoding: 'utf8' })

    source.pipe(stream)

    stream.on('finish', () => {
      fs.readFile(__filename, 'utf8', (err, expected) => {
        t.error(err)
        fs.readFile(dest, 'utf8', (err, data) => {
          t.error(err)
          t.equal(data, expected)
        })
      })
    })
    stream.on('close', () => {
      t.pass('close emitted')
    })
  })

  test('write things to a file', (t) => {
    t.plan(6)

    const dest = file()
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
      })
    })
    stream.on('close', () => {
      t.pass('close emitted')
    })
  })

  test('minLength', (t) => {
    t.plan(8)

    const dest = file()
    const stream = new SonicBoom({ dest, minLength: 4096, sync })

    stream.on('ready', () => {
      t.pass('ready emitted')
    })

    t.ok(stream.write('hello world\n'))
    t.ok(stream.write('something else\n'))

    const fail = t.fail
    stream.on('drain', fail)

    // bad use of timer
    // TODO refactor
    setTimeout(function () {
      fs.readFile(dest, 'utf8', (err, data) => {
        t.error(err)
        t.equal(data, '')

        stream.end()

        stream.on('finish', () => {
          fs.readFile(dest, 'utf8', (err, data) => {
            t.error(err)
            t.equal(data, 'hello world\nsomething else\n')
          })
        })
      })
    }, 100)

    stream.on('close', () => {
      t.pass('close emitted')
    })
  })

  test('write later on recoverable error', (t) => {
    t.plan(8)

    const fakeFs = Object.create(fs)
    const SonicBoom = proxyquire('../', {
      fs: fakeFs
    })

    const dest = file()
    const fd = fs.openSync(dest, 'w')
    const stream = new SonicBoom({ fd, minLength: 0, sync })

    stream.on('ready', () => {
      t.pass('ready emitted')
    })
    stream.on('error', () => {
      t.pass('error emitted')
    })

    if (sync) {
      fakeFs.writeSync = function (fd, buf, enc) {
        t.pass('fake fs.writeSync called')
        throw new Error('recoverable error')
      }
    } else {
      fakeFs.write = function (fd, buf, ...args) {
        t.pass('fake fs.write called')
        setTimeout(() => args.pop()(new Error('recoverable error')), 0)
      }
    }

    t.ok(stream.write('hello world\n'))

    setTimeout(() => {
      if (sync) {
        fakeFs.writeSync = fs.writeSync
      } else {
        fakeFs.write = fs.write
      }

      t.ok(stream.write('something else\n'))

      stream.end()
      stream.on('finish', () => {
        fs.readFile(dest, 'utf8', (err, data) => {
          t.error(err)
          t.equal(data, 'hello world\nsomething else\n')
        })
      })
      stream.on('close', () => {
        t.pass('close emitted')
      })
    }, 0)
  })

  test('emit write events', (t) => {
    t.plan(7)

    const dest = file()
    const stream = new SonicBoom({ dest, sync })

    stream.on('ready', () => {
      t.pass('ready emitted')
    })

    let length = 0
    stream.on('write', (bytes) => {
      length += bytes
    })

    t.ok(stream.write('hello world\n'))
    t.ok(stream.write('something else\n'))

    stream.end()

    stream.on('finish', () => {
      fs.readFile(dest, 'utf8', (err, data) => {
        t.error(err)
        t.equal(data, 'hello world\nsomething else\n')
        t.equal(length, 27)
      })
    })
    stream.on('close', () => {
      t.pass('close emitted')
    })
  })

  test('write multi-byte characters string over than maxWrite', (t) => {
    const fakeFs = Object.create(fs)
    const MAX_WRITE = 65535
    fakeFs.write = function (fd, buf, ...args) {
      // only write byteLength === MAX_WRITE
      const _buf = Buffer.from(buf).subarray(0, MAX_WRITE).toString()
      fs.write(fd, _buf, ...args)
      setImmediate(args[args.length - 1], null, MAX_WRITE)
      fakeFs.write = function (fd, buf, ...args) {
        fs.write(fd, buf, ...args)
      }
    }
    const SonicBoom = proxyquire('../', {
      fs: fakeFs
    })
    const dest = file()
    const fd = fs.openSync(dest, 'w')
    const stream = new SonicBoom({ fd, minLength: 0, sync, maxWrite: MAX_WRITE })
    let buf = Buffer.alloc(MAX_WRITE).fill('x')
    buf = '🌲' + buf.toString()
    stream.write(buf)
    stream.end()

    stream.on('finish', () => {
      fs.readFile(dest, 'utf8', (err, data) => {
        t.error(err)
        t.equal(data, buf)
        t.end()
      })
    })
    stream.on('close', () => {
      t.pass('close emitted')
    })
    stream.on('error', () => {
      t.pass('error emitted')
    })
  })
}

test('write buffers that are not totally written', (t) => {
  t.plan(9)

  const fakeFs = Object.create(fs)
  fakeFs.write = function (fd, buf, ...args) {
    t.pass('fake fs.write called')
    fakeFs.write = function (fd, buf, ...args) {
      t.pass('calling real fs.write, ' + buf)
      fs.write(fd, buf, ...args)
    }
    process.nextTick(args[args.length - 1], null, 0)
  }
  const SonicBoom = proxyquire('../', {
    fs: fakeFs
  })

  const dest = file()
  const fd = fs.openSync(dest, 'w')
  const stream = new SonicBoom({ fd, minLength: 0, sync: false })

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
    })
  })
  stream.on('close', () => {
    t.pass('close emitted')
  })
})

test('write enormously large buffers async', (t) => {
  t.plan(3)

  const dest = file()
  const fd = fs.openSync(dest, 'w')
  const stream = new SonicBoom({ fd, minLength: 0, sync: false })

  const buf = Buffer.alloc(1024).fill('x').toString() // 1 MB
  let length = 0

  for (let i = 0; i < 1024 * 512; i++) {
    length += buf.length
    stream.write(buf)
  }

  stream.end()

  stream.on('finish', () => {
    fs.stat(dest, (err, stat) => {
      t.error(err)
      t.equal(stat.size, length)
    })
  })
  stream.on('close', () => {
    t.pass('close emitted')
  })
})

test('make sure `maxWrite` is passed', (t) => {
  t.plan(1)
  const dest = file()
  const stream = new SonicBoom({ dest, maxLength: 65536 })
  t.equal(stream.maxLength, 65536)
})

test('write enormously large buffers async atomicly', (t) => {
  const fakeFs = Object.create(fs)
  const SonicBoom = proxyquire('../', {
    fs: fakeFs
  })

  const dest = file()
  const fd = fs.openSync(dest, 'w')
  const stream = new SonicBoom({ fd, minLength: 0, sync: false })

  const buf = Buffer.alloc(1023).fill('x').toString()

  fakeFs.write = function (fd, _buf, ...args) {
    if (_buf.length % buf.length !== 0) {
      t.fail('write called with wrong buffer size')
    }

    setImmediate(args[args.length - 1], null, _buf.length)
  }

  for (let i = 0; i < 1024 * 512; i++) {
    stream.write(buf)
  }

  setImmediate(() => {
    for (let i = 0; i < 1024 * 512; i++) {
      stream.write(buf)
    }

    stream.end()
  })

  stream.on('close', () => {
    t.pass('close emitted')
    t.end()
  })
})

test('write should not drop new data if buffer is not full', (t) => {
  t.plan(2)
  const fakeFs = Object.create(fs)
  const SonicBoom = proxyquire('../', {
    fs: fakeFs
  })

  const dest = file()
  const fd = fs.openSync(dest, 'w')
  const stream = new SonicBoom({ fd, minLength: 101, maxLength: 102, sync: false })

  const buf = Buffer.alloc(100).fill('x').toString()

  fakeFs.write = function (fd, _buf, ...args) {
    t.equal(_buf.length, buf.length + 2)
    setImmediate(args[args.length - 1], null, _buf.length)
    fakeFs.write = () => t.error('shouldnt call write again')
    stream.end()
  }

  stream.on('drop', (data) => {
    t.error('should not drop')
  })

  stream.write(buf)
  stream.write('aa')

  stream.on('close', () => {
    t.pass('close emitted')
  })
})

test('write should drop new data if buffer is full', (t) => {
  t.plan(3)
  const fakeFs = Object.create(fs)
  const SonicBoom = proxyquire('../', {
    fs: fakeFs
  })

  const dest = file()
  const fd = fs.openSync(dest, 'w')
  const stream = new SonicBoom({ fd, minLength: 101, maxLength: 102, sync: false })

  const buf = Buffer.alloc(100).fill('x').toString()

  fakeFs.write = function (fd, _buf, ...args) {
    t.equal(_buf.length, buf.length)
    setImmediate(args[args.length - 1], null, _buf.length)
    fakeFs.write = () => t.error('shouldnt call write more than once')
  }

  stream.on('drop', (data) => {
    t.equal(data.length, 3)
    stream.end()
  })

  stream.write(buf)
  stream.write('aaa')

  stream.on('close', () => {
    t.pass('close emitted')
  })
})
