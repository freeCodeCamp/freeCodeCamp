'use strict'

const build = require('pino-abstract-transport')
const { pipeline, Transform } = require('node:stream')
module.exports = (options) => {
  return build(function (source) {
    const myTransportStream = new Transform({
      autoDestroy: true,
      objectMode: true,
      transform (chunk, enc, cb) {
        chunk.service = 'pino'
        this.push(JSON.stringify(chunk))
        cb()
      }
    })
    pipeline(source, myTransportStream, () => {})
    return myTransportStream
  }, {
    enablePipelining: true
  })
}
