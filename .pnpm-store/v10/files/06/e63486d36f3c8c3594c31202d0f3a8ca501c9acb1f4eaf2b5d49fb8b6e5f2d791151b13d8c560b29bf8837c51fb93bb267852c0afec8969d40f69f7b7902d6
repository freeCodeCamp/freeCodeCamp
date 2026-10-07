'use strict'

const pino = require('../..')
const transport = pino.transport({
  target: 'pino/file'
})
const logger = pino(transport)

transport.on('ready', function () {
  logger.info('Hello')
  process.exit(0)
})
