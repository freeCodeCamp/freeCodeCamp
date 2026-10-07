'use strict'

const { workerData: benchmark, parentPort } = require('worker_threads')

const Benchmark = require('benchmark')
Benchmark.options.minSamples = 100

const suite = Benchmark.Suite()

const FJS = require('..')
const stringify = FJS(benchmark.schema)

suite
  .add(benchmark.name, () => {
    stringify(benchmark.input)
  })
  .on('cycle', (event) => {
    parentPort.postMessage(String(event.target))
  })
  .on('complete', () => {})
  .run()
