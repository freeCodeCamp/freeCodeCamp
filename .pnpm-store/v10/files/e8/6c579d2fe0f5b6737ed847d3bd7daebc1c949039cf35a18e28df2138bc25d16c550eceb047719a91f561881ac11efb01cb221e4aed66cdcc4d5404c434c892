'use strict'

const fs = require('fs')
const { Writable } = require('stream')

function run (opts) {
  let data = ''
  return new Writable({
    autoDestroy: true,
    write (chunk, enc, cb) {
      data += chunk.toString()
      cb()
    },
    final (cb) {
      setTimeout(function () {
        fs.writeFile(opts.dest, data, function (err) {
          cb(err)
        })
      }, 100)
    }
  })
}

module.exports = run
