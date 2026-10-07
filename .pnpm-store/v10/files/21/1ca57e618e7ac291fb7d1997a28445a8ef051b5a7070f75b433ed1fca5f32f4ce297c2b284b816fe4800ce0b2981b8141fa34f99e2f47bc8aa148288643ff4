'use strict'

const { test } = require('tap')
const { fork } = require('child_process')
const { join } = require('path')
const { readFile } = require('fs').promises
const { file } = require('./helper')
const { once } = require('events')
const ThreadStream = require('..')

test('exits with 0', async function (t) {
  const dest = file()
  const child = fork(join(__dirname, 'create-and-exit.js'), [dest])

  const [code] = await once(child, 'exit')
  t.equal(code, 0)

  const data = await readFile(dest, 'utf8')
  t.equal(data, 'hello world\n')
})

test('emit error if thread exits', async function (t) {
  const stream = new ThreadStream({
    filename: join(__dirname, 'exit.js'),
    sync: true
  })

  stream.on('ready', () => {
    stream.write('hello world\n')
  })

  let [err] = await once(stream, 'error')
  t.equal(err.message, 'the worker thread exited')

  stream.write('noop');
  [err] = await once(stream, 'error')
  t.equal(err.message, 'the worker has exited')

  stream.write('noop');
  [err] = await once(stream, 'error')
  t.equal(err.message, 'the worker has exited')
})

test('emit error if thread have unhandledRejection', async function (t) {
  const stream = new ThreadStream({
    filename: join(__dirname, 'unhandledRejection.js'),
    sync: true
  })

  stream.on('ready', () => {
    stream.write('hello world\n')
  })

  let [err] = await once(stream, 'error')
  t.equal(err.message, 'kaboom')

  stream.write('noop');
  [err] = await once(stream, 'error')
  t.equal(err.message, 'the worker has exited')

  stream.write('noop');
  [err] = await once(stream, 'error')
  t.equal(err.message, 'the worker has exited')
})

test('emit error if worker stream emit error', async function (t) {
  const stream = new ThreadStream({
    filename: join(__dirname, 'error.js'),
    sync: true
  })

  stream.on('ready', () => {
    stream.write('hello world\n')
  })

  let [err] = await once(stream, 'error')
  t.equal(err.message, 'kaboom')

  stream.write('noop');
  [err] = await once(stream, 'error')
  t.equal(err.message, 'the worker has exited')

  stream.write('noop');
  [err] = await once(stream, 'error')
  t.equal(err.message, 'the worker has exited')
})

test('emit error if thread have uncaughtException', async function (t) {
  const stream = new ThreadStream({
    filename: join(__dirname, 'uncaughtException.js'),
    sync: true
  })

  stream.on('ready', () => {
    stream.write('hello world\n')
  })

  let [err] = await once(stream, 'error')
  t.equal(err.message, 'kaboom')

  stream.write('noop');
  [err] = await once(stream, 'error')
  t.equal(err.message, 'the worker has exited')

  stream.write('noop');
  [err] = await once(stream, 'error')
  t.equal(err.message, 'the worker has exited')
})

test('close the work if out of scope on gc', { skip: !global.WeakRef }, async function (t) {
  const dest = file()
  const child = fork(join(__dirname, 'close-on-gc.js'), [dest], {
    execArgv: ['--expose-gc']
  })

  const [code] = await once(child, 'exit')
  t.equal(code, 0)

  const data = await readFile(dest, 'utf8')
  t.equal(data, 'hello world\n')
})
