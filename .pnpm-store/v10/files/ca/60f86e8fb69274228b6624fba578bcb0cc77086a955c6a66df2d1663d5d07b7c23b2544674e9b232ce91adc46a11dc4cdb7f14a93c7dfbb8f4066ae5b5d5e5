'use strict'

const build = require('../..')

module.exports = async function (threadStreamOpts) {
  const { port, opts = {} } = threadStreamOpts
  return build(
    async function (source) {
      for await (const obj of source) {
        port.postMessage({
          data: obj,
          pinoConfig: {
            levels: source.levels,
            messageKey: source.messageKey,
            errorKey: source.errorKey
          }
        })
      }
    },
    opts
  )
}
