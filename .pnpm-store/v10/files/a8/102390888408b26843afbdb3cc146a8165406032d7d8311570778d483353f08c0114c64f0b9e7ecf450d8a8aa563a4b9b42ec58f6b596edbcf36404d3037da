'use strict'

const { Writable } = require('stream')
const parentPort = require('worker_threads').parentPort

async function run (opts) {
  return new Writable({
    autoDestroy: true,
    write (chunk, enc, cb) {
      if (parentPort) {
        parentPort.postMessage({
          code: 'EVENT',
          name: 'context',
          args: opts.$context
        })
      }
      cb()
    }
  })
}

module.exports = run
