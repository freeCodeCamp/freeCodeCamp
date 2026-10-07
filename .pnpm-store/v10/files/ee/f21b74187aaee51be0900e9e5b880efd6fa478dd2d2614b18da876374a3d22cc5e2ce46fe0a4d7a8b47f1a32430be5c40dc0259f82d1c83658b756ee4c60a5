import pino from '../../..'
import { join } from 'node:path'

const transport = pino.transport({
  target: join(__dirname, 'to-file-transport-with-transform.ts'),
  options: {
    destination: process.argv[2]
  }
})
const logger = pino(transport)

logger.info('Hello')
logger.info('World')

process.exit(0)
