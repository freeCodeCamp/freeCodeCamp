'use strict'

const { test } = require('tap')
const fs = require('fs')
const SonicBoom = require('../')
const { file } = require('./helper')

const MAX_WRITE = 16 * 1024

test('drain deadlock', (t) => {
  t.plan(4)

  const dest = file()
  const stream = new SonicBoom({ dest, sync: false, minLength: 9999 })

  t.ok(stream.write(Buffer.alloc(1500).fill('x').toString()))
  t.ok(stream.write(Buffer.alloc(1500).fill('x').toString()))
  t.ok(!stream.write(Buffer.alloc(MAX_WRITE).fill('x').toString()))
  stream.on('drain', () => {
    t.pass()
  })
})

test('should throw if minLength >= maxWrite', (t) => {
  t.plan(1)
  t.throws(() => {
    const dest = file()
    const fd = fs.openSync(dest, 'w')

    SonicBoom({
      fd,
      minLength: MAX_WRITE
    })
  })
})
