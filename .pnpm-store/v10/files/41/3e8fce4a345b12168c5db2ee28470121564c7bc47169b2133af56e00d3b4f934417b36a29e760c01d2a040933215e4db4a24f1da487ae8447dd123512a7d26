'use strict'

const { test } = require('tap')
const { join } = require('path')
const { readFile } = require('fs')
const { file } = require('./helper')
const ThreadStream = require('..')

test('destroy support', function (t) {
  t.plan(7)

  const dest = file()
  const stream = new ThreadStream({
    filename: join(__dirname, 'to-file-on-destroy.js'),
    workerData: { dest },
    sync: true
  })

  stream.on('close', () => {
    t.notOk(stream.writable)
    t.pass('close emitted')
  })

  t.ok(stream.write('hello world\n'))
  t.ok(stream.write('something else\n'))
  t.ok(stream.writable)

  stream.end()

  readFile(dest, 'utf8', (err, data) => {
    t.error(err)
    t.equal(data, 'hello world\nsomething else\n')
  })
})

test('synchronous _final support', function (t) {
  t.plan(7)

  const dest = file()
  const stream = new ThreadStream({
    filename: join(__dirname, 'to-file-on-final.js'),
    workerData: { dest },
    sync: true
  })

  stream.on('close', () => {
    t.notOk(stream.writable)
    t.pass('close emitted')
  })

  t.ok(stream.write('hello world\n'))
  t.ok(stream.write('something else\n'))
  t.ok(stream.writable)

  stream.end()

  readFile(dest, 'utf8', (err, data) => {
    t.error(err)
    t.equal(data, 'hello world\nsomething else\n')
  })
})
