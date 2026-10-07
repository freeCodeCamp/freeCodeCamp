'use strict'

const benchmark = require('benchmark')
const createError = require('..')

new benchmark.Suite()
  .add('create FastifyError', function () { createError('CODE', 'Not available') }, { minSamples: 100 })
  .on('cycle', function onCycle (event) { console.log(String(event.target)) })
  .run({ async: false })
