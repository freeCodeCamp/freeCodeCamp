'use strict'

const { test } = require('tap')
const { join } = require('path')
const { MessageChannel } = require('worker_threads')
const { once } = require('events')
const ThreadStream = require('..')

const isYarnPnp = process.versions.pnp !== undefined

test('yarn module resolution', { skip: !isYarnPnp }, t => {
  t.plan(6)

  const modulePath = require.resolve('pino-elasticsearch')
  t.match(modulePath, /.*\.zip.*/)

  const stream = new ThreadStream({
    filename: modulePath,
    workerData: { node: null },
    sync: true
  })

  t.same(stream.writableErrored, null)
  stream.on('error', (err) => {
    t.same(stream.writableErrored, err)
    t.pass('error emitted')
  })

  t.ok(stream.write('hello world\n'))
  t.ok(stream.writable)
  stream.end()
})

test('yarn module resolution for directories with special characters', { skip: !isYarnPnp }, async t => {
  t.plan(3)

  const { port1, port2 } = new MessageChannel()
  const stream = new ThreadStream({
    filename: join(__dirname, 'dir with spaces', 'test-package.zip', 'worker.js'),
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

test('yarn module resolution for typescript commonjs modules', { skip: !isYarnPnp }, async t => {
  t.plan(3)

  const { port1, port2 } = new MessageChannel()
  const stream = new ThreadStream({
    filename: join(__dirname, 'ts-commonjs-default-export.zip', 'worker.js'),
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
