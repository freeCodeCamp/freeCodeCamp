'use strict'

const { pipeline, PassThrough } = require('stream')

module.exports = async function ({ targets }) {
  const streams = await Promise.all(targets.map(async (t) => {
    const fn = require(t.target)
    const stream = await fn(t.options)
    return stream
  }))

  const stream = new PassThrough()
  pipeline(stream, ...streams, () => {})
  return stream
}
