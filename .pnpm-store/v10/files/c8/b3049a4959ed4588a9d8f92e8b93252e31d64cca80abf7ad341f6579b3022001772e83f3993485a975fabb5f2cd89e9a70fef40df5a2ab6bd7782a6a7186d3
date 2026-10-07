'use strict'

const { test } = require('tap')
const fs = require('fs')
const proxyquire = require('proxyquire')
const { file, runTests } = require('./helper')

const MAX_WRITE = 16 * 1024

runTests(buildTests)

function buildTests (test, sync) {
  // Reset the umask for testing
  process.umask(0o000)
  test('retry on EAGAIN', (t) => {
    t.plan(7)

    const fakeFs = Object.create(fs)
    fakeFs.write = function (fd, buf, ...args) {
      t.pass('fake fs.write called')
      fakeFs.write = fs.write
      const err = new Error('EAGAIN')
      err.code = 'EAGAIN'
      process.nextTick(args.pop(), err)
    }
    const SonicBoom = proxyquire('../', {
      fs: fakeFs
    })

    const dest = file()
    const fd = fs.openSync(dest, 'w')
    const stream = new SonicBoom({ fd, sync: false, minLength: 0 })

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
}

test('emit error on async EAGAIN', (t) => {
  t.plan(11)

  const fakeFs = Object.create(fs)
  fakeFs.write = function (fd, buf, ...args) {
    t.pass('fake fs.write called')
    fakeFs.write = fs.write
    const err = new Error('EAGAIN')
    err.code = 'EAGAIN'
    process.nextTick(args[args.length - 1], err)
  }
  const SonicBoom = proxyquire('../', {
    fs: fakeFs
  })

  const dest = file()
  const fd = fs.openSync(dest, 'w')
  const stream = new SonicBoom({
    fd,
    sync: false,
    minLength: 12,
    retryEAGAIN: (err, writeBufferLen, remainingBufferLen) => {
      t.equal(err.code, 'EAGAIN')
      t.equal(writeBufferLen, 12)
      t.equal(remainingBufferLen, 0)
      return false
    }
  })

  stream.on('ready', () => {
    t.pass('ready emitted')
  })

  stream.once('error', err => {
    t.equal(err.code, 'EAGAIN')
    t.ok(stream.write('something else\n'))
  })

  t.ok(stream.write('hello world\n'))

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

test('retry on EAGAIN (sync)', (t) => {
  t.plan(7)

  const fakeFs = Object.create(fs)
  fakeFs.writeSync = function (fd, buf, enc) {
    t.pass('fake fs.writeSync called')
    fakeFs.writeSync = fs.writeSync
    const err = new Error('EAGAIN')
    err.code = 'EAGAIN'
    throw err
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

test('emit error on EAGAIN (sync)', (t) => {
  t.plan(11)

  const fakeFs = Object.create(fs)
  fakeFs.writeSync = function (fd, buf, enc) {
    t.pass('fake fs.writeSync called')
    fakeFs.writeSync = fs.writeSync
    const err = new Error('EAGAIN')
    err.code = 'EAGAIN'
    throw err
  }
  const SonicBoom = proxyquire('../', {
    fs: fakeFs
  })

  const dest = file()
  const fd = fs.openSync(dest, 'w')
  const stream = new SonicBoom({
    fd,
    minLength: 0,
    sync: true,
    retryEAGAIN: (err, writeBufferLen, remainingBufferLen) => {
      t.equal(err.code, 'EAGAIN')
      t.equal(writeBufferLen, 12)
      t.equal(remainingBufferLen, 0)
      return false
    }
  })

  stream.on('ready', () => {
    t.pass('ready emitted')
  })

  stream.once('error', err => {
    t.equal(err.code, 'EAGAIN')
    t.ok(stream.write('something else\n'))
  })

  t.ok(stream.write('hello world\n'))

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

test('retryEAGAIN receives remaining buffer on async if write fails', (t) => {
  t.plan(12)

  const fakeFs = Object.create(fs)
  const SonicBoom = proxyquire('../', {
    fs: fakeFs
  })

  const dest = file()
  const fd = fs.openSync(dest, 'w')
  const stream = new SonicBoom({
    fd,
    sync: false,
    minLength: 12,
    retryEAGAIN: (err, writeBufferLen, remainingBufferLen) => {
      t.equal(err.code, 'EAGAIN')
      t.equal(writeBufferLen, 12)
      t.equal(remainingBufferLen, 11)
      return false
    }
  })

  stream.on('ready', () => {
    t.pass('ready emitted')
  })

  stream.once('error', err => {
    t.equal(err.code, 'EAGAIN')
    t.ok(stream.write('done'))
  })

  fakeFs.write = function (fd, buf, ...args) {
    t.pass('fake fs.write called')
    fakeFs.write = fs.write
    const err = new Error('EAGAIN')
    err.code = 'EAGAIN'
    t.ok(stream.write('sonic boom\n'))
    process.nextTick(args[args.length - 1], err)
  }

  t.ok(stream.write('hello world\n'))

  stream.end()

  stream.on('finish', () => {
    fs.readFile(dest, 'utf8', (err, data) => {
      t.error(err)
      t.equal(data, 'hello world\nsonic boom\ndone')
    })
  })
  stream.on('close', () => {
    t.pass('close emitted')
  })
})

test('retryEAGAIN receives remaining buffer if exceeds maxWrite', (t) => {
  t.plan(17)

  const fakeFs = Object.create(fs)
  const SonicBoom = proxyquire('../', {
    fs: fakeFs
  })

  const dest = file()
  const fd = fs.openSync(dest, 'w')
  const buf = Buffer.alloc(MAX_WRITE - 2).fill('x').toString() // 1 MB
  const stream = new SonicBoom({
    fd,
    sync: false,
    minLength: MAX_WRITE - 1,
    retryEAGAIN: (err, writeBufferLen, remainingBufferLen) => {
      t.equal(err.code, 'EAGAIN', 'retryEAGAIN received EAGAIN error')
      t.equal(writeBufferLen, buf.length, 'writeBufferLen === buf.length')
      t.equal(remainingBufferLen, 23, 'remainingBufferLen === 23')
      return false
    }
  })

  stream.on('ready', () => {
    t.pass('ready emitted')
  })

  fakeFs.write = function (fd, buf, ...args) {
    t.pass('fake fs.write called')
    const err = new Error('EAGAIN')
    err.code = 'EAGAIN'
    process.nextTick(args.pop(), err)
  }

  fakeFs.writeSync = function (fd, buf, enc) {
    t.pass('fake fs.write called')
    const err = new Error('EAGAIN')
    err.code = 'EAGAIN'
    throw err
  }

  t.ok(stream.write(buf), 'write buf')
  t.notOk(stream.write('hello world\nsonic boom\n'), 'write hello world sonic boom')

  stream.once('error', err => {
    t.equal(err.code, 'EAGAIN', 'bubbled error should be EAGAIN')

    try {
      stream.flushSync()
    } catch (err) {
      t.equal(err.code, 'EAGAIN', 'thrown error should be EAGAIN')
      fakeFs.write = fs.write
      fakeFs.writeSync = fs.writeSync
      stream.end()
    }
  })

  stream.on('finish', () => {
    t.pass('finish emitted')
    fs.readFile(dest, 'utf8', (err, data) => {
      t.error(err)
      t.equal(data, `${buf}hello world\nsonic boom\n`, 'data on file should match written')
    })
  })
  stream.on('close', () => {
    t.pass('close emitted')
  })
})

test('retry on EBUSY', (t) => {
  t.plan(7)

  const fakeFs = Object.create(fs)
  fakeFs.write = function (fd, buf, ...args) {
    t.pass('fake fs.write called')
    fakeFs.write = fs.write
    const err = new Error('EBUSY')
    err.code = 'EBUSY'
    process.nextTick(args.pop(), err)
  }
  const SonicBoom = proxyquire('..', {
    fs: fakeFs
  })

  const dest = file()
  const fd = fs.openSync(dest, 'w')
  const stream = new SonicBoom({ fd, sync: false, minLength: 0 })

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

test('emit error on async EBUSY', (t) => {
  t.plan(11)

  const fakeFs = Object.create(fs)
  fakeFs.write = function (fd, buf, ...args) {
    t.pass('fake fs.write called')
    fakeFs.write = fs.write
    const err = new Error('EBUSY')
    err.code = 'EBUSY'
    process.nextTick(args.pop(), err)
  }
  const SonicBoom = proxyquire('..', {
    fs: fakeFs
  })

  const dest = file()
  const fd = fs.openSync(dest, 'w')
  const stream = new SonicBoom({
    fd,
    sync: false,
    minLength: 12,
    retryEAGAIN: (err, writeBufferLen, remainingBufferLen) => {
      t.equal(err.code, 'EBUSY')
      t.equal(writeBufferLen, 12)
      t.equal(remainingBufferLen, 0)
      return false
    }
  })

  stream.on('ready', () => {
    t.pass('ready emitted')
  })

  stream.once('error', err => {
    t.equal(err.code, 'EBUSY')
    t.ok(stream.write('something else\n'))
  })

  t.ok(stream.write('hello world\n'))

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
