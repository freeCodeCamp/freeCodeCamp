'use strict'

const { test } = require('tap')
const { join } = require('path')
const { readFile } = require('fs')
const { file } = require('./helper')
const ThreadStream = require('..')
const { MessageChannel } = require('worker_threads')
const { once } = require('events')

test('base sync=true', function (t) {
  t.plan(15)

  const dest = file()
  const stream = new ThreadStream({
    filename: join(__dirname, 'to-file.js'),
    workerData: { dest },
    sync: true
  })

  t.same(stream.writableObjectMode, false)

  t.same(stream.writableFinished, false)
  stream.on('finish', () => {
    t.same(stream.writableFinished, true)
    readFile(dest, 'utf8', (err, data) => {
      t.error(err)
      t.equal(data, 'hello world\nsomething else\n')
    })
  })

  t.same(stream.closed, false)
  stream.on('close', () => {
    t.same(stream.closed, true)
    t.notOk(stream.writable)
    t.pass('close emitted')
  })

  t.same(stream.writableNeedDrain, false)
  t.ok(stream.write('hello world\n'))
  t.ok(stream.write('something else\n'))
  t.ok(stream.writable)

  t.same(stream.writableEnded, false)
  stream.end()
  t.same(stream.writableEnded, true)
})

test('overflow sync=true', function (t) {
  t.plan(3)

  const dest = file()
  const stream = new ThreadStream({
    bufferSize: 128,
    filename: join(__dirname, 'to-file.js'),
    workerData: { dest },
    sync: true
  })

  let count = 0

  // Write 10 chars, 20 times
  function write () {
    if (count++ === 20) {
      stream.end()
      return
    }

    stream.write('aaaaaaaaaa')
    // do not wait for drain event
    setImmediate(write)
  }

  write()

  stream.on('finish', () => {
    t.pass('finish emitted')
  })

  stream.on('close', () => {
    readFile(dest, 'utf8', (err, data) => {
      t.error(err)
      t.equal(data.length, 200)
    })
  })
})

test('overflow sync=false', function (t) {
  const dest = file()
  const stream = new ThreadStream({
    bufferSize: 128,
    filename: join(__dirname, 'to-file.js'),
    workerData: { dest },
    sync: false
  })

  let count = 0

  t.same(stream.writableNeedDrain, false)

  // Write 10 chars, 20 times
  function write () {
    if (count++ === 20) {
      t.pass('end sent')
      stream.end()
      return
    }

    if (!stream.write('aaaaaaaaaa')) {
      t.same(stream.writableNeedDrain, true)
    }
    // do not wait for drain event
    setImmediate(write)
  }

  write()

  stream.on('drain', () => {
    t.same(stream.writableNeedDrain, false)
    t.pass('drain')
  })

  stream.on('finish', () => {
    t.pass('finish emitted')
  })

  stream.on('close', () => {
    readFile(dest, 'utf8', (err, data) => {
      t.error(err)
      t.equal(data.length, 200)
      t.end()
    })
  })
})

test('over the bufferSize at startup', function (t) {
  t.plan(6)

  const dest = file()
  const stream = new ThreadStream({
    bufferSize: 10,
    filename: join(__dirname, 'to-file.js'),
    workerData: { dest },
    sync: true
  })

  stream.on('finish', () => {
    readFile(dest, 'utf8', (err, data) => {
      t.error(err)
      t.equal(data, 'hello world\nsomething else\n')
    })
  })

  stream.on('close', () => {
    t.pass('close emitted')
  })

  t.ok(stream.write('hello'))
  t.ok(stream.write(' world\n'))
  t.ok(stream.write('something else\n'))

  stream.end()
})

test('over the bufferSize at startup (async)', function (t) {
  t.plan(6)

  const dest = file()
  const stream = new ThreadStream({
    bufferSize: 10,
    filename: join(__dirname, 'to-file.js'),
    workerData: { dest },
    sync: false
  })

  t.ok(stream.write('hello'))
  t.notOk(stream.write(' world\n'))
  t.notOk(stream.write('something else\n'))

  stream.end()

  stream.on('finish', () => {
    readFile(dest, 'utf8', (err, data) => {
      t.error(err)
      t.equal(data, 'hello world\nsomething else\n')
    })
  })

  stream.on('close', () => {
    t.pass('close emitted')
  })
})

test('flushSync sync=false', function (t) {
  const dest = file()
  const stream = new ThreadStream({
    bufferSize: 128,
    filename: join(__dirname, 'to-file.js'),
    workerData: { dest },
    sync: false
  })

  stream.on('drain', () => {
    t.pass('drain')
    stream.end()
  })

  stream.on('finish', () => {
    t.pass('finish emitted')
  })

  stream.on('close', () => {
    readFile(dest, 'utf8', (err, data) => {
      t.error(err)
      t.equal(data.length, 200)
      t.end()
    })
  })

  for (let count = 0; count < 20; count++) {
    stream.write('aaaaaaaaaa')
  }
  stream.flushSync()
})

test('pass down MessagePorts', async function (t) {
  t.plan(3)

  const { port1, port2 } = new MessageChannel()
  const stream = new ThreadStream({
    filename: join(__dirname, 'port.js'),
    workerData: { port: port1 },
    workerOpts: {
      transferList: [port1]
    },
    sync: false
  })
  t.teardown(() => {
    stream.end()
  })

  t.ok(stream.write('hello world\n'))
  t.ok(stream.write('something else\n'))

  const [strings] = await once(port2, 'message')

  t.equal(strings, 'hello world\nsomething else\n')
})

test('destroy does not error', function (t) {
  t.plan(5)

  const dest = file()
  const stream = new ThreadStream({
    filename: join(__dirname, 'to-file.js'),
    workerData: { dest },
    sync: false
  })

  stream.on('ready', () => {
    t.pass('ready emitted')
    stream.worker.terminate()
  })

  stream.on('error', (err) => {
    t.equal(err.message, 'the worker thread exited')
    stream.flush((err) => {
      t.equal(err.message, 'the worker has exited')
    })
    t.doesNotThrow(() => stream.flushSync())
    t.doesNotThrow(() => stream.end())
  })
})

test('syntax error', function (t) {
  t.plan(1)

  const stream = new ThreadStream({
    filename: join(__dirname, 'syntax-error.mjs')
  })

  stream.on('error', (err) => {
    t.equal(err.message, 'Unexpected end of input')
  })
})
