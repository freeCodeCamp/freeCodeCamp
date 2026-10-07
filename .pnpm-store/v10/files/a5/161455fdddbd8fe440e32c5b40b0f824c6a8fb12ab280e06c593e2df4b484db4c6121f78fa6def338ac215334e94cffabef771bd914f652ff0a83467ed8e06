'use strict'

const path = require('path')
const { Worker } = require('worker_threads')

const BENCH_THREAD_PATH = path.join(__dirname, 'bench-thread.js')

const benchmarks = [
  {
    name: 'lookup root "/" route',
    setupURLs: [{ method: 'GET', url: '/' }],
    arguments: [{ method: 'GET', url: '/' }]
  },
  {
    name: 'lookup short static route',
    setupURLs: [{ method: 'GET', url: '/static' }],
    arguments: [{ method: 'GET', url: '/static' }]
  },
  {
    name: 'lookup long static route',
    setupURLs: [{ method: 'GET', url: '/static/static/static/static/static' }],
    arguments: [{ method: 'GET', url: '/static/static/static/static/static' }]
  },
  {
    name: 'lookup long static route (common prefix)',
    setupURLs: [
      { method: 'GET', url: '/static' },
      { method: 'GET', url: '/static/static' },
      { method: 'GET', url: '/static/static/static' },
      { method: 'GET', url: '/static/static/static/static' },
      { method: 'GET', url: '/static/static/static/static/static' }
    ],
    arguments: [{ method: 'GET', url: '/static/static/static/static/static' }]
  },
  {
    name: 'lookup short parametric route',
    setupURLs: [{ method: 'GET', url: '/:param' }],
    arguments: [{ method: 'GET', url: '/param1' }]
  },
  {
    name: 'lookup long parametric route',
    setupURLs: [{ method: 'GET', url: '/:param' }],
    arguments: [{ method: 'GET', url: '/longParamParamParamParamParamParam' }]
  },
  {
    name: 'lookup short parametric route (encoded unoptimized)',
    setupURLs: [{ method: 'GET', url: '/:param' }],
    arguments: [{ method: 'GET', url: '/param%2B' }]
  },
  {
    name: 'lookup short parametric route (encoded optimized)',
    setupURLs: [{ method: 'GET', url: '/:param' }],
    arguments: [{ method: 'GET', url: '/param%20' }]
  },
  {
    name: 'lookup parametric route with two short params',
    setupURLs: [{ method: 'GET', url: '/:param1/:param2' }],
    arguments: [{ method: 'GET', url: '/param1/param2' }]
  },
  {
    name: 'lookup multi-parametric route with two short params',
    setupURLs: [{ method: 'GET', url: '/:param1-:param2' }],
    arguments: [{ method: 'GET', url: '/param1-param2' }]
  },
  {
    name: 'lookup multi-parametric route with two short regex params',
    setupURLs: [{ method: 'GET', url: '/:param1([a-z]*)1:param2([a-z]*)2' }],
    arguments: [{ method: 'GET', url: '/param1param2' }]
  },
  {
    name: 'lookup long static + parametric route',
    setupURLs: [{ method: 'GET', url: '/static/:param1/static/:param2/static' }],
    arguments: [{ method: 'GET', url: '/static/param1/static/param2/static' }]
  },
  {
    name: 'lookup short wildcard route',
    setupURLs: [{ method: 'GET', url: '/*' }],
    arguments: [{ method: 'GET', url: '/static' }]
  },
  {
    name: 'lookup long wildcard route',
    setupURLs: [{ method: 'GET', url: '/*' }],
    arguments: [{ method: 'GET', url: '/static/static/static/static/static' }]
  },
  {
    name: 'lookup root route on constrained router',
    setupURLs: [
      { method: 'GET', url: '/' },
      { method: 'GET', url: '/static', opts: { constraints: { version: '1.2.0' } } },
      { method: 'GET', url: '/static', opts: { constraints: { version: '2.0.0', host: 'example.com' } } },
      { method: 'GET', url: '/static', opts: { constraints: { version: '2.0.0', host: 'fastify.io' } } }
    ],
    arguments: [{ method: 'GET', url: '/', headers: { host: 'fastify.io' } }]
  },
  {
    name: 'lookup short static unconstraint route',
    setupURLs: [
      { method: 'GET', url: '/static', opts: {} },
      { method: 'GET', url: '/static', opts: { constraints: { version: '2.0.0', host: 'example.com' } } },
      { method: 'GET', url: '/static', opts: { constraints: { version: '2.0.0', host: 'fastify.io' } } }
    ],
    arguments: [{ method: 'GET', url: '/static', headers: {} }]
  },
  {
    name: 'lookup short static versioned route',
    setupURLs: [
      { method: 'GET', url: '/static', opts: { constraints: { version: '1.2.0' } } },
      { method: 'GET', url: '/static', opts: { constraints: { version: '2.0.0', host: 'example.com' } } },
      { method: 'GET', url: '/static', opts: { constraints: { version: '2.0.0', host: 'fastify.io' } } }
    ],
    arguments: [{ method: 'GET', url: '/static', headers: { 'accept-version': '1.x', host: 'fastify.io' } }]
  },
  {
    name: 'lookup short static constrained (version & host) route',
    setupURLs: [
      { method: 'GET', url: '/static', opts: { constraints: { version: '1.2.0' } } },
      { method: 'GET', url: '/static', opts: { constraints: { version: '2.0.0', host: 'example.com' } } },
      { method: 'GET', url: '/static', opts: { constraints: { version: '2.0.0', host: 'fastify.io' } } }
    ],
    arguments: [{ method: 'GET', url: '/static', headers: { 'accept-version': '2.x', host: 'fastify.io' } }]
  }
]

async function runBenchmark (benchmark) {
  const worker = new Worker(BENCH_THREAD_PATH, { workerData: benchmark })

  return new Promise((resolve, reject) => {
    let result = null
    worker.on('error', reject)
    worker.on('message', (benchResult) => {
      result = benchResult
    })
    worker.on('exit', (code) => {
      if (code === 0) {
        resolve(result)
      } else {
        reject(new Error(`Worker stopped with exit code ${code}`))
      }
    })
  })
}

async function runBenchmarks () {
  let maxNameLength = 0
  for (const benchmark of benchmarks) {
    maxNameLength = Math.max(benchmark.name.length, maxNameLength)
  }

  for (const benchmark of benchmarks) {
    benchmark.name = benchmark.name.padEnd(maxNameLength, '.')
    const resultMessage = await runBenchmark(benchmark)
    console.log(resultMessage)
  }
}

runBenchmarks()
