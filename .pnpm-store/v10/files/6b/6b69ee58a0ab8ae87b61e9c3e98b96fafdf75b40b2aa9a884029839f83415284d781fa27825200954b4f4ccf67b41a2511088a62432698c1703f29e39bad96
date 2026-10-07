'use strict'

const tape = require('tape')
const { BufferList, BufferListStream } = require('../')
const { Buffer } = require('buffer')

tape('isBufferList positives', (t) => {
  t.ok(BufferList.isBufferList(new BufferList()))
  t.ok(BufferList.isBufferList(new BufferListStream()))

  t.end()
})

tape('isBufferList negatives', (t) => {
  const types = [
    null,
    undefined,
    NaN,
    true,
    false,
    {},
    [],
    Buffer.alloc(0),
    [Buffer.alloc(0)]
  ]

  for (const obj of types) {
    t.notOk(BufferList.isBufferList(obj))
  }

  t.end()
})
