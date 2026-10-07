global.process = { __proto__: process, pid: 123456 }
Date.now = function () { return 1459875739796 }
require('node:os').hostname = function () { return 'abcdefghijklmnopqr' }
const pino = require(require.resolve('./../../'))
const dest = pino.destination({ dest: 1, minLength: 4096, sync: false })
const logger = pino({}, dest)
logger.info('hello')
logger.info('world')
process.exit(0)
