import pino from '../../..'

const transport = pino.transport({
  target: 'pino/file',
  options: { destination: '1' }
})
const logger = pino(transport)
logger.info('Hello')
