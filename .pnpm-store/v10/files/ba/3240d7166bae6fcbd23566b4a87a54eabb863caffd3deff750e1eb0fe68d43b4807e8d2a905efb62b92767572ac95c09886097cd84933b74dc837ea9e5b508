'use strict'

const { test } = require('tap')
const fs = require('fs')
const proxyquire = require('proxyquire')
const SonicBoom = require('../')
const { file } = require('./helper')

test('write buffers that are not totally written with sync mode', (t) => {
  t.plan(9)

  const fakeFs = Object.create(fs)
  fakeFs.writeSync = function (fd, buf, enc) {
    t.pass('fake fs.write called')
    fakeFs.writeSync = (fd, buf, enc) => {
      t.pass('calling real fs.writeSync, ' + buf)
      return fs.writeSync(fd, buf, enc)
    }
    return 0
  }
  const SonicBoom = proxyquire('../', {
    fs: fakeFs
  })

  const dest = file()
  const fd = fs.openSync(dest, 'w')
  const stream = new SonicBoom({ fd, minLength: 0, sync: true })

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

test('write buffers that are not totally written with flush sync', (t) => {
  t.plan(7)

  const fakeFs = Object.create(fs)
  fakeFs.writeSync = function (fd, buf, enc) {
    t.pass('fake fs.write called')
    fakeFs.writeSync = fs.writeSync
    return 0
  }
  const SonicBoom = proxyquire('../', {
    fs: fakeFs
  })

  const dest = file()
  const fd = fs.openSync(dest, 'w')
  const stream = new SonicBoom({ fd, minLength: 100, sync: false })

  stream.on('ready', () => {
    t.pass('ready emitted')
  })

  t.ok(stream.write('hello world\n'))
  t.ok(stream.write('something else\n'))

  stream.flushSync()

  stream.on('write', (n) => {
    if (n === 0) {
      t.fail('throwing to avoid infinite loop')
      throw Error('shouldn\'t call write handler after flushing with n === 0')
    }
  })

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

test('sync writing is fully sync', (t) => {
  t.plan(6)

  const fakeFs = Object.create(fs)
  fakeFs.writeSync = function (fd, buf, enc, cb) {
    t.pass('fake fs.write called')
    return fs.writeSync(fd, buf, enc)
  }
  const SonicBoom = proxyquire('../', {
    fs: fakeFs
  })

  const dest = file()
  const fd = fs.openSync(dest, 'w')
  const stream = new SonicBoom({ fd, minLength: 0, sync: true })
  t.ok(stream.write('hello world\n'))
  t.ok(stream.write('something else\n'))

  // 'drain' will be only emitted once,
  // the number of assertions at the top check this.
  stream.on('drain', () => {
    t.pass('drain emitted')
  })

  const data = fs.readFileSync(dest, 'utf8')
  t.equal(data, 'hello world\nsomething else\n')
})

test('write enormously large buffers sync', (t) => {
  t.plan(3)

  const dest = file()
  const fd = fs.openSync(dest, 'w')
  const stream = new SonicBoom({ fd, minLength: 0, sync: true })

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

test('write enormously large buffers sync with utf8 multi-byte split', (t) => {
  t.plan(4)

  const dest = file()
  const fd = fs.openSync(dest, 'w')
  const stream = new SonicBoom({ fd, minLength: 0, sync: true })

  let buf = Buffer.alloc((1024 * 16) - 2).fill('x') // 16MB - 3B
  const length = buf.length + 4
  buf = buf.toString() + '🌲' // 16 MB + 1B

  stream.write(buf)

  stream.end()

  stream.on('finish', () => {
    fs.stat(dest, (err, stat) => {
      t.error(err)
      t.equal(stat.size, length)
      const char = Buffer.alloc(4)
      const fd = fs.openSync(dest, 'r')
      fs.readSync(fd, char, 0, 4, length - 4)
      t.equal(char.toString(), '🌲')
    })
  })
  stream.on('close', () => {
    t.pass('close emitted')
  })
})

// for context see this issue https://github.com/pinojs/pino/issues/871
test('file specified by dest path available immediately when options.sync is true', (t) => {
  t.plan(3)
  const dest = file()
  const stream = new SonicBoom({ dest, sync: true })
  t.ok(stream.write('hello world\n'))
  t.ok(stream.write('something else\n'))
  stream.flushSync()
  t.pass('file opened and written to without error')
})

test('sync error handling', (t) => {
  t.plan(1)
  try {
    /* eslint no-new: off */
    new SonicBoom({ dest: '/path/to/nowwhere', sync: true })
    t.fail('must throw synchronously')
  } catch (err) {
    t.pass('an error happened')
  }
})

for (const fd of [1, 2]) {
  test(`fd ${fd}`, (t) => {
    t.plan(1)

    const fakeFs = Object.create(fs)
    const SonicBoom = proxyquire('../', {
      fs: fakeFs
    })

    const stream = new SonicBoom({ fd })

    fakeFs.close = function (fd, cb) {
      t.fail(`should not close fd ${fd}`)
    }

    stream.end()

    stream.on('close', () => {
      t.pass('close emitted')
    })
  })
}

test('._len must always be equal or greater than 0', (t) => {
  t.plan(3)

  const dest = file()
  const fd = fs.openSync(dest, 'w')
  const stream = new SonicBoom({ fd, sync: true })

  t.ok(stream.write('hello world 👀\n'))
  t.ok(stream.write('another line 👀\n'))

  t.equal(stream._len, 0)

  stream.end()
})

test('._len must always be equal or greater than 0', (t) => {
  const n = 20
  t.plan(n + 3)

  const dest = file()
  const fd = fs.openSync(dest, 'w')
  const stream = new SonicBoom({ fd, sync: true, minLength: 20 })

  let str = ''
  for (let i = 0; i < 20; i++) {
    t.ok(stream.write('👀'))
    str += '👀'
  }

  t.equal(stream._len, 0)

  fs.readFile(dest, 'utf8', (err, data) => {
    t.error(err)
    t.equal(data, str)
  })
})
