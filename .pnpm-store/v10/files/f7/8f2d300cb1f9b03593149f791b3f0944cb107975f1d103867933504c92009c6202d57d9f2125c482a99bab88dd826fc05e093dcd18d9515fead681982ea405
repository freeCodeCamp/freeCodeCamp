'use strict'

const build = require('../..')

module.exports = async function (threadStreamOpts) {
  const { port, opts = {} } = threadStreamOpts
  return build(
    function (source) {
      source.on('data', function (line) {
        port.postMessage({
          data: line,
          pinoConfig: {
            levels: source.levels,
            messageKey: source.messageKey,
            errorKey: source.errorKey
          }
        })
      })
    },
    opts
  )
}
