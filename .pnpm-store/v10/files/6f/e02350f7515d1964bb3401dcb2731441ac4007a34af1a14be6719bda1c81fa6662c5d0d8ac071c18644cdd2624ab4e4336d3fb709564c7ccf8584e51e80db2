'use strict'

const benchmark = require('benchmark')
const createError = require('..')

const FastifyError = createError('CODE', 'Not available')
const FastifyError1 = createError('CODE', 'Not %s available')
const FastifyError2 = createError('CODE', 'Not %s available %s')

const cause = new Error('cause')
new benchmark.Suite()
  .add('instantiate Error', function () { new Error() }, { minSamples: 100 }) // eslint-disable-line no-new
  .add('instantiate FastifyError', function () { new FastifyError() }, { minSamples: 100 }) // eslint-disable-line no-new
  .add('instantiate FastifyError arg 1', function () { new FastifyError1('q') }, { minSamples: 100 }) // eslint-disable-line no-new
  .add('instantiate FastifyError arg 2', function () { new FastifyError2('qq', 'ss') }, { minSamples: 100 }) // eslint-disable-line no-new
  .add('instantiate FastifyError cause', function () { new FastifyError2({ cause }) }, { minSamples: 100 }) // eslint-disable-line no-new
  .on('cycle', function onCycle (event) { console.log(String(event.target)) })
  .run({ async: false })
