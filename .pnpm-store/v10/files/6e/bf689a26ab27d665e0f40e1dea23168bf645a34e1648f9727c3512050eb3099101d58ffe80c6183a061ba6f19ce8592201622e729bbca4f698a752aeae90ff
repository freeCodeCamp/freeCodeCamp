'use strict'

const { Transform, pipeline } = require('stream')
const build = require('../..')

module.exports = function (threadStreamOpts) {
  const { opts = {} } = threadStreamOpts
  return build(function (source) {
    const transform = new Transform({
      objectMode: true,
      autoDestroy: true,
      transform (chunk, enc, cb) {
        chunk.service = 'from transform'
        chunk.level = `${source.levels.labels[chunk.level]}(${chunk.level})`
        chunk[source.messageKey] = chunk[source.messageKey].toUpperCase()
        cb(null, JSON.stringify(chunk) + '\n')
      }
    })

    pipeline(source, transform, () => {})

    return transform
  }, { ...opts, enablePipelining: true })
}
