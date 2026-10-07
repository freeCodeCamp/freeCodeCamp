'use strict'

const pino = require('../..')
const transport = pino.transport({
  targets: [{
    level: 'info',
    target: 'pino/file',
    options: {
      destination: process.argv[2]
    }
  }]
})
const logger = pino(transport)

const toWrite = 1000000
transport.on('ready', run)

let total = 0

function run () {
  if (total++ === 8) {
    return
  }

  for (let i = 0; i < toWrite; i++) {
    logger.info(`hello ${i}`)
  }
  transport.once('drain', run)
}
