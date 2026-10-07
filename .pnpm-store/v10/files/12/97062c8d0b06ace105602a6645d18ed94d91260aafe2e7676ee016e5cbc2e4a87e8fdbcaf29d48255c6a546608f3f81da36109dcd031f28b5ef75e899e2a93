'use strict'

const { parentPort, workerData } = require('worker_threads')
const { Writable } = require('node:stream')

module.exports = (options) => {
  const myTransportStream = new Writable({
    autoDestroy: true,
    write (chunk, enc, cb) {
      parentPort.postMessage({
        code: 'EVENT',
        name: 'workerData',
        args: [workerData]
      })
      cb()
    }
  })
  return myTransportStream
}
