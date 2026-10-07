'use strict'

const { test } = require('tap')
const { join } = require('path')
const ThreadStream = require('..')
const { version } = require('../package.json')
require('why-is-node-running')

test('get context', (t) => {
  const stream = new ThreadStream({
    filename: join(__dirname, 'get-context.js'),
    workerData: {},
    sync: true
  })
  t.on('end', () => stream.end())
  stream.on('context', (ctx) => {
    t.same(ctx.threadStreamVersion, version)
    t.end()
  })
  stream.write('hello')
})
