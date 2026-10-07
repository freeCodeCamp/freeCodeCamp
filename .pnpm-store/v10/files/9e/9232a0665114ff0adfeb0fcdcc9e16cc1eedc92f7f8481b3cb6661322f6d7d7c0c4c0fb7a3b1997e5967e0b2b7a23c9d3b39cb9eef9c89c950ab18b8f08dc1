'use strict'

const { join } = require('node:path')
const pino = require('../..')
const transport = pino.transport({
  target: join(__dirname, 'transport-worker.js')
})
const logger = pino(transport)
logger.info('Hello')
