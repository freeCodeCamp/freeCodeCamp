'use strict'

const { join } = require('path')
const { tmpdir } = require('os')
const { unlinkSync } = require('fs')
const t = require('tap')

const files = []
let count = 0

function file () {
  const file = join(tmpdir(), `thread-stream-${process.pid}-${count++}`)
  files.push(file)
  return file
}

process.on('beforeExit', () => {
  t.comment('unlink files')
  for (const file of files) {
    try {
      t.comment(`unliking ${file}`)
      unlinkSync(file)
    } catch (e) {
      console.log(e)
    }
  }
  t.comment('unlink completed')
})

module.exports.file = file

if (process.env.SKIP_PROCESS_EXIT_CHECK !== 'true') {
  const why = require('why-is-node-running')
  setInterval(why, 10000).unref()
}
