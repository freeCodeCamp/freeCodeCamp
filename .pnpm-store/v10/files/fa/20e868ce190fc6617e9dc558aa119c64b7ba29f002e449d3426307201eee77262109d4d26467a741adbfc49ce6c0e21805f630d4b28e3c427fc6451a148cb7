'use strict'

const max = 1000000
const fastqueue = require('./')(worker, 1)
const { promisify } = require('util')
const immediate = promisify(setImmediate)
const qPromise = require('./').promise(immediate, 1)
const async = require('async')
const neo = require('neo-async')
const asyncqueue = async.queue(worker, 1)
const neoqueue = neo.queue(worker, 1)

function bench (func, done) {
  const key = max + '*' + func.name
  let count = -1

  console.time(key)
  end()

  function end () {
    if (++count < max) {
      func(end)
    } else {
      console.timeEnd(key)
      if (done) {
        done()
      }
    }
  }
}

function benchFastQ (done) {
  fastqueue.push(42, done)
}

function benchAsyncQueue (done) {
  asyncqueue.push(42, done)
}

function benchNeoQueue (done) {
  neoqueue.push(42, done)
}

function worker (arg, cb) {
  setImmediate(cb)
}

function benchSetImmediate (cb) {
  worker(42, cb)
}

function benchFastQPromise (done) {
  qPromise.push(42).then(function () { done() }, done)
}

function runBench (done) {
  async.eachSeries([
    benchSetImmediate,
    benchFastQ,
    benchNeoQueue,
    benchAsyncQueue,
    benchFastQPromise
  ], bench, done)
}

runBench(runBench)
