'use strict'

const benchmark = require('benchmark')
const { normalizeList } = require('../lib/normalizeList')

const validSingle = 'a'
const validArray = ['a', 'b', 'c']

new benchmark.Suite()
  .add('false', function () { normalizeList(false) }, { minSamples: 100 })
  .add('valid single', function () { normalizeList(validSingle) }, { minSamples: 100 })
  .add('valid array', function () { normalizeList(validArray) }, { minSamples: 100 })
  .on('cycle', function onCycle (event) { console.log(String(event.target)) })
  .run({ async: false })
