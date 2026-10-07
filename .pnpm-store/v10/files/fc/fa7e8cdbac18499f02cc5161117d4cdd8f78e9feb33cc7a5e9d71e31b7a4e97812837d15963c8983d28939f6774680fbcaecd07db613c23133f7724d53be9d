import { join } from 'node:path'
import pino from '../../..'

const transport = pino.transport({
  target: join(__dirname, 'transport-worker.ts')
})
const logger = pino(transport)
logger.info('Hello')
