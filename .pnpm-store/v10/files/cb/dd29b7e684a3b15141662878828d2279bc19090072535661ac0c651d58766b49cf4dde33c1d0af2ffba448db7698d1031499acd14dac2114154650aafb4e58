import pino from '../../..'

const transport = pino.transport({
  target: 'pino/file'
})
const logger = pino(transport)

logger.info('Hello')

process.exit(0)
