'use strict'

/**
 * Globals for benchmark.js
 */
global.proxyaddr = require('..')
global.createReq = createReq

/**
 * Module dependencies.
 */
const benchmark = require('benchmark')
const benchmarks = require('beautify-benchmark')

const suite = new benchmark.Suite()

suite.add({
  name: 'trust none',
  minSamples: 100,
  fn: 'proxyaddr(req, trust)',
  setup: 'req = createReq("127.0.0.1", "10.0.0.1"); trust = proxyaddr.compile([])'
})

suite.add({
  name: 'trust all',
  minSamples: 100,
  fn: 'proxyaddr(req, trust)',
  setup: 'req = createReq("127.0.0.1", "10.0.0.1"); trust = function() {return true}'
})

suite.add({
  name: 'trust single',
  minSamples: 100,
  fn: 'proxyaddr(req, trust)',
  setup: 'req = createReq("127.0.0.1", "10.0.0.1"); trust = proxyaddr.compile("127.0.0.1")'
})

suite.add({
  name: 'trust first',
  minSamples: 100,
  fn: 'proxyaddr(req, trust)',
  setup: 'req = createReq("127.0.0.1", "10.0.0.1"); trust = function(a, i) {return i<1}'
})

suite.add({
  name: 'trust subnet',
  minSamples: 100,
  fn: 'proxyaddr(req, trust)',
  setup: 'req = createReq("127.0.0.1", "10.0.0.1"); trust = proxyaddr.compile("127.0.0.1/8")'
})

suite.add({
  name: 'trust multiple',
  minSamples: 100,
  fn: 'proxyaddr(req, trust)',
  setup: 'req = createReq("127.0.0.1", "10.0.0.1"); trust = proxyaddr.compile(["127.0.0.1", "10.0.0.1"])'
})

suite.on('cycle', function onCycle (event) {
  benchmarks.add(event.target)
})

suite.on('complete', function onComplete () {
  benchmarks.log()
})

suite.run({ async: false })

function createReq (socketAddr, forwardedFor) {
  return {
    socket: {
      remoteAddress: socketAddr
    },
    headers: {
      'x-forwarded-for': (forwardedFor || '')
    }
  }
}
