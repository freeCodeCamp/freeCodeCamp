'use strict'

const { type, platform, arch, release, cpus } = require('node:os')
const { resolve, join } = require('node:path')
const spawn = require('node:child_process').spawn
const pump = require('pump')
const split = require('split2')
const through = require('through2')
const steed = require('steed')

function usage () {
  console.log(`
    Pino Benchmarks

    To run a benchmark, specify which to run:

    ・all        ⁃ run all benchmarks (takes a while)
    ・basic      ⁃ log a simple string
    ・object     ⁃ logging a basic object
    ・deep-object ⁃ logging a large object
    ・multi-arg   ⁃ multiple log method arguments
    ・child      ⁃ child from a parent
    ・child-child ⁃ child from a child
    ・child-creation ⁃ child constructor
    ・formatters ⁃ difference between with or without formatters

    Example:

      node runbench basic
  `)
}

if (!process.argv[2]) {
  usage()
  process.exit()
}

const quiet = process.argv[3] === '-q'

const selectedBenchmark = process.argv[2].toLowerCase()
const benchmarkDir = resolve(__dirname, '..')
const benchmarks = {
  basic: 'basic.bench.js',
  object: 'object.bench.js',
  'deep-object': 'deep-object.bench.js',
  'multi-arg': 'multi-arg.bench.js',
  'long-string': 'long-string.bench.js',
  child: 'child.bench.js',
  'child-child': 'child-child.bench.js',
  'child-creation': 'child-creation.bench.js',
  formatters: 'formatters.bench.js'
}

function runBenchmark (name, done) {
  const benchmarkResults = {}
  benchmarkResults[name] = {}

  const processor = through(function (line, enc, cb) {
    const [label, time] = ('' + line).split(': ')
    const [target, iterations] = label.split('*')
    const logger = target.replace('bench', '')

    if (!benchmarkResults[name][logger]) benchmarkResults[name][logger] = []

    benchmarkResults[name][logger].push({
      time: time.replace('ms', ''),
      iterations: iterations.replace(':', '')
    })

    cb()
  })

  if (quiet === false) console.log(`Running ${name.toUpperCase()} benchmark\n`)

  const benchmark = spawn(
    process.argv[0],
    [join(benchmarkDir, benchmarks[name])]
  )

  if (quiet === false) {
    benchmark.stdout.pipe(process.stdout)
  }

  pump(benchmark.stdout, split(), processor)

  benchmark.on('exit', () => {
    console.log()
    if (done && typeof done === 'function') done(null, benchmarkResults)
  })
}

function sum (arr) {
  let result = 0
  for (var i = 0; i < arr.length; i += 1) {
    result += Number.parseFloat(arr[i].time)
  }
  return result
}

function displayResults (results) {
  if (quiet === false) console.log('==========')
  const benchNames = Object.keys(results)
  for (var i = 0; i < benchNames.length; i += 1) {
    console.log(`${benchNames[i].toUpperCase()} benchmark averages`)
    const benchmark = results[benchNames[i]]
    const loggers = Object.keys(benchmark)
    for (var j = 0; j < loggers.length; j += 1) {
      const logger = benchmark[loggers[j]]
      const average = sum(logger) / logger.length
      console.log(`${loggers[j]} average: ${average.toFixed(3)}ms`)
    }
  }
  if (quiet === false) {
    console.log('==========')
    console.log(
      `System: ${type()}/${platform()} ${arch()} ${release()}`,
      `~ ${cpus()[0].model} (cores/threads: ${cpus().length})`
    )
  }
}

function toBench (done) {
  runBenchmark(this.name, done)
}

const benchQueue = []
if (selectedBenchmark !== 'all') {
  benchQueue.push(toBench.bind({ name: selectedBenchmark }))
} else {
  const keys = Object.keys(benchmarks)
  for (var i = 0; i < keys.length; i += 1) {
    benchQueue.push(toBench.bind({ name: keys[i] }))
  }
}
steed.series(benchQueue, function (err, results) {
  if (err) return console.error(err.message)
  results.forEach(displayResults)
})
