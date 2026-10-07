'use strict'

const t = require('tap')

if (process.env.CI) {
  t.skip('skip on CI')
  process.exit(0)
}

const { join } = require('path')
const { file } = require('./helper')
const { stat } = require('fs')
const ThreadStream = require('..')

t.setTimeout(30000)

const dest = file()
const stream = new ThreadStream({
  filename: join(__dirname, 'to-file.js'),
  workerData: { dest },
  sync: false
})

let length = 0

stream.on('close', () => {
  stat(dest, (err, f) => {
    t.error(err)
    t.equal(f.size, length)
    t.end()
  })
})

const buf = Buffer.alloc(1024).fill('x').toString() // 1 KB

// This writes 1 GB of data
for (let i = 0; i < 1024 * 1024; i++) {
  length += buf.length
  stream.write(buf)
}

stream.end()
