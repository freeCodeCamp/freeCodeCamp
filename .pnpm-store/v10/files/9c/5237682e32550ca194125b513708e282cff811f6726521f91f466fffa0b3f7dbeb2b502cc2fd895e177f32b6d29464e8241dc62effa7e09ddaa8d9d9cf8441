'use strict'

const pino = require('../..')
const transport = pino.transport({
  target: './to-file-transport-with-transform.js',
  options: {
    destination: process.argv[2]
  }
})
const logger = pino(transport)

logger.info('Hello')

logger.info('World')

process.exit(0)
