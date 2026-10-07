global.process = { __proto__: process, pid: 123456 }

const write = process.stdout.write.bind(process.stdout)
process.stdout.write = function (chunk) {
  write('hack ' + chunk)
}

Date.now = function () { return 1459875739796 }
require('node:os').hostname = function () { return 'abcdefghijklmnopqr' }
const pino = require(require.resolve('../../'))()
pino.info('me')
