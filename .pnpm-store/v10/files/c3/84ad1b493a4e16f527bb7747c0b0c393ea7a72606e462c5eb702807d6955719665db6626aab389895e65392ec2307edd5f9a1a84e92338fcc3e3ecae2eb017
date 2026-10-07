'use strict'

const pino = require('./pino')
const { once } = require('node:events')

module.exports = async function (opts = {}) {
  const destOpts = Object.assign({}, opts, { dest: opts.destination || 1, sync: false })
  delete destOpts.destination
  const destination = pino.destination(destOpts)
  await once(destination, 'ready')
  return destination
}
