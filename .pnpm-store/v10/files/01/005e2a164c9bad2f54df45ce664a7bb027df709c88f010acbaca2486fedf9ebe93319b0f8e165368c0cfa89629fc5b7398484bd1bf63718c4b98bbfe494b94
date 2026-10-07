'use strict'

const build = require('pino-abstract-transport')
const { pipeline, Transform } = require('node:stream')
module.exports = () => {
  return build(function (source) {
    const myTransportStream = new Transform({
      autoDestroy: true,
      objectMode: true,
      transform (chunk, enc, cb) {
        const {
          time,
          level,
          [source.messageKey]: body,
          [source.errorKey]: error,
          ...attributes
        } = chunk
        this.push(JSON.stringify({
          severityText: source.levels.labels[level],
          body,
          attributes,
          ...(error && { error })
        }))
        cb()
      }
    })
    pipeline(source, myTransportStream, () => {})
    return myTransportStream
  }, {
    enablePipelining: true,
    expectPinoConfig: true
  })
}
