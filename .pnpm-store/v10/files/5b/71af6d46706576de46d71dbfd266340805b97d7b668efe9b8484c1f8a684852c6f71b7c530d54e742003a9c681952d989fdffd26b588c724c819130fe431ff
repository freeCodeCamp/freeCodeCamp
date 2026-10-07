'use strict'

const { join } = require('path')
const ThreadStream = require('..')

const stream = new ThreadStream({
  filename: join(__dirname, 'to-file.js'),
  workerData: { dest: process.argv[2] },
  sync: true
})

stream.write('hello')
stream.write(' ')
stream.write('world\n')
stream.flushSync()
stream.unref()
