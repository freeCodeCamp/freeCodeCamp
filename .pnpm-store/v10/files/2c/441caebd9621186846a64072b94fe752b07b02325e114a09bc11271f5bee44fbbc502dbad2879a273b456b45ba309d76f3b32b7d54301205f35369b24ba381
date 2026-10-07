'use strict'

const benchmark = require('benchmark')
const { containsDotFile } = require('../lib/containsDotFile')

const hasDotFileSimple = '.github'.split('/')
const hasDotFile = './.github'.split('/')
const noDotFile = './index.html'.split('/')

new benchmark.Suite()
  .add(hasDotFileSimple.join('/'), function () { containsDotFile(hasDotFileSimple) }, { minSamples: 100 })
  .add(noDotFile.join('/'), function () { containsDotFile(noDotFile) }, { minSamples: 100 })
  .add(hasDotFile.join('/'), function () { containsDotFile(hasDotFile) }, { minSamples: 100 })
  .on('cycle', function onCycle (event) { console.log(String(event.target)) })
  .run({ async: false })
