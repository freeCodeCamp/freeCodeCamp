global.process = { __proto__: process, pid: 123456 }
Date.now = function () { return 1459875739796 }
require('node:os').hostname = function () { return 'abcdefghijklmnopqr' }
const pino = require(require.resolve('./../../'))
const asyncLogger = pino(pino.destination({ sync: false })).child({ hello: 'world' })
asyncLogger.info('h')
