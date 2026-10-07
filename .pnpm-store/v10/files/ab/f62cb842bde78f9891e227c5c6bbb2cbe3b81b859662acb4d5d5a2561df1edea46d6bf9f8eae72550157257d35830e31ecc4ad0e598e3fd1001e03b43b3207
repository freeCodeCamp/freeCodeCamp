'use strict'

const { ArrayPrototypePop, Promise } = require('../ours/primordials')
const { isIterable, isNodeStream, isWebStream } = require('../internal/streams/utils')
const { pipelineImpl: pl } = require('../internal/streams/pipeline')
const { finished } = require('../internal/streams/end-of-stream')
require('../../lib/stream.js')
function pipeline(...streams) {
  return new Promise((resolve, reject) => {
    let signal
    let end
    const lastArg = streams[streams.length - 1]
    if (
      lastArg &&
      typeof lastArg === 'object' &&
      !isNodeStream(lastArg) &&
      !isIterable(lastArg) &&
      !isWebStream(lastArg)
    ) {
      const options = ArrayPrototypePop(streams)
      signal = options.signal
      end = options.end
    }
    pl(
      streams,
      (err, value) => {
        if (err) {
          reject(err)
        } else {
          resolve(value)
        }
      },
      {
        signal,
        end
      }
    )
  })
}
module.exports = {
  finished,
  pipeline
}
