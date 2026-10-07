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
  name: 'ipv4',
  minSamples: 100,
  fn: 'proxyaddr(req, trust)',
  setup: 'req = createReq("127.0.0.1", "10.0.0.1"); trust = proxyaddr.compile("127.0.0.1")'
})

suite.add({
  name: 'ipv4-mapped',
  minSamples: 100,
  fn: 'proxyaddr(req, trust)',
  setup: 'req = createReq("::ffff:7f00:1", "10.0.0.1"); trust = proxyaddr.compile("127.0.0.1")'
})

suite.add({
  name: 'ipv6',
  minSamples: 100,
  fn: 'proxyaddr(req, trust)',
  setup: 'req = createReq("::1", "10.0.0.1"); trust = proxyaddr.compile("::1")'
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
