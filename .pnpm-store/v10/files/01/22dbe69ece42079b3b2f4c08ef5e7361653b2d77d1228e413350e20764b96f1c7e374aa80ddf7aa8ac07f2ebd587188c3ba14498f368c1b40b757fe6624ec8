'use strict'

const { test } = require('tap')
const fs = require('fs')
const proxyquire = require('proxyquire')
const { file } = require('./helper')

test('fsync with sync', (t) => {
  t.plan(5)

  const fakeFs = Object.create(fs)
  fakeFs.fsyncSync = function (fd) {
    t.pass('fake fs.fsyncSync called')
    return fs.fsyncSync(fd)
  }
  const SonicBoom = proxyquire('../', {
    fs: fakeFs
  })

  const dest = file()
  const fd = fs.openSync(dest, 'w')
  const stream = new SonicBoom({ fd, sync: true, fsync: true })

  t.ok(stream.write('hello world\n'))
  t.ok(stream.write('something else\n'))

  stream.end()

  const data = fs.readFileSync(dest, 'utf8')
  t.equal(data, 'hello world\nsomething else\n')
})

test('fsync with async', (t) => {
  t.plan(7)

  const fakeFs = Object.create(fs)
  fakeFs.fsyncSync = function (fd) {
    t.pass('fake fs.fsyncSync called')
    return fs.fsyncSync(fd)
  }
  const SonicBoom = proxyquire('../', {
    fs: fakeFs
  })

  const dest = file()
  const fd = fs.openSync(dest, 'w')
  const stream = new SonicBoom({ fd, fsync: true })

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
