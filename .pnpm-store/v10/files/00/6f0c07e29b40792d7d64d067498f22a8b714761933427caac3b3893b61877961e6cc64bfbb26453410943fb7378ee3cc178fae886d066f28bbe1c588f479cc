'use strict'

const { parentPort } = require('worker_threads')

parentPort.postMessage({
  code: 'CUSTOM-WORKER-CALLED'
})

require('../lib/worker')
