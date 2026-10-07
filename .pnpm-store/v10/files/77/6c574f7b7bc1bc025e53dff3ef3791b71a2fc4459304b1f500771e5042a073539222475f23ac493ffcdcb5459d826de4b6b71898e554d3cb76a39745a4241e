'use strict'

const benchmark = require('benchmark')
const createError = require('..')

const FastifyError = createError('CODE', 'Not available')
Error.stackTraceLimit = 0

new benchmark.Suite()
  .add('no-stack instantiate Error', function () { new Error() }, { minSamples: 100 }) // eslint-disable-line no-new
  .add('no-stack instantiate FastifyError', function () { new FastifyError() }, { minSamples: 100 }) // eslint-disable-line no-new
  .on('cycle', function onCycle (event) { console.log(String(event.target)) })
  .run({ async: false })
