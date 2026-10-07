'use strict'

const { test } = require('tap')
const { join } = require('path')
const ThreadStream = require('..')

test('event propagate', t => {
  const stream = new ThreadStream({
    filename: join(__dirname, 'emit-event.js'),
    workerData: {},
    sync: true
  })
  t.on('end', () => stream.end())
  stream.on('socketError', function (a, b, c, n, error) {
    t.same(a, 'list')
    t.same(b, 'of')
    t.same(c, 'args')
    t.same(n, 123)
    t.same(error, new Error('unable to write data to the TCP socket'))
    t.end()
  })
  stream.write('hello')
})
