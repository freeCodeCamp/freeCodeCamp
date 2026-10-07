global.process = { __proto__: process, pid: 123456 }
Date.now = function () { return 1459875739796 }
require('node:os').hostname = function () { return 'abcdefghijklmnopqr' }
const pino = require(require.resolve('./../../'))
const logger = pino({}, pino.destination(1))
logger.info('hello')
logger.info('world')
process.exit(0)
