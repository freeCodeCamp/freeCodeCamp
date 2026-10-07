'use strict'

const benchmark = require('benchmark')
const collapseLeadingSlashes = require('../lib/collapseLeadingSlashes').collapseLeadingSlashes

const nonLeading = 'bla.json'
const hasLeading = '///./json'

new benchmark.Suite()
  .add(nonLeading, function () { collapseLeadingSlashes(nonLeading) }, { minSamples: 100 })
  .add(hasLeading, function () { collapseLeadingSlashes(hasLeading) }, { minSamples: 100 })
  .on('cycle', function onCycle (event) { console.log(String(event.target)) })
  .run({ async: false })
