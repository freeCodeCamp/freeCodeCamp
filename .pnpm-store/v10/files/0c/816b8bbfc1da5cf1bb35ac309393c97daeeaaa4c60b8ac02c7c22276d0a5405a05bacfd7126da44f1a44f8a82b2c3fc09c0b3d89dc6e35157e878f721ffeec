'use strict'

const benchmark = require('benchmark')
const { parseBytesRange } = require('../lib/parseBytesRange')

const size150 = 150

const rangeSingle = 'bytes=0-100'
const rangeMultiple = 'bytes=0-4,90-99,5-75,100-199,101-102'

new benchmark.Suite()
  .add('size: 150, bytes=0-100', function () { parseBytesRange(size150, rangeSingle) }, { minSamples: 100 })
  .add('size: 150, bytes=0-4,90-99,5-75,100-199,101-102', function () { parseBytesRange(size150, rangeMultiple) }, { minSamples: 100 })
  .on('cycle', function onCycle (event) { console.log(String(event.target)) })
  .run({ async: false })
