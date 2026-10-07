'use strict'
const test = require('tape')
const sleep = require('.')

test('blocks event loop for given amount of milliseconds', ({ is, end }) => {
  const now = Date.now()
  setTimeout(() => {
    const delta = Date.now() - now
    const fuzzyDelta = Math.floor(delta / 10) * 10 // allow up to 10ms of execution lag
    is(fuzzyDelta, 1000)
    end()
  }, 100)
  sleep(1000)
})

if (typeof BigInt !== 'undefined') {

  test('allows ms to be supplied as a BigInt number', ({ is, end }) => {
    const now = Date.now()
    setTimeout(() => {
      const delta = Date.now() - now
      const fuzzyDelta = Math.floor(delta / 10) * 10 // allow up to 10ms of execution lag
      is(fuzzyDelta, 1000)
      end()
    }, 100)
    sleep(BigInt(1000)) // avoiding n notation as this will error on legacy node/browsers
  })

}

test('throws range error if ms less than 0', ({ throws, end }) => {
  throws(() => sleep(-1), RangeError('sleep: ms must be a number that is greater than 0 but less than Infinity'))
  end()
})

test('throws range error if ms is Infinity', ({ throws, end }) => {
  throws(() => sleep(Infinity), RangeError('sleep: ms must be a number that is greater than 0 but less than Infinity'))
  end()
})

test('throws range error if ms is not a number or bigint', ({ throws, end }) => {
  throws(() => sleep('Infinity'), TypeError('sleep: ms must be a number'))
  throws(() => sleep('foo'), TypeError('sleep: ms must be a number'))
  throws(() => sleep({a: 1}), TypeError('sleep: ms must be a number'))
  throws(() => sleep([1,2,3]), TypeError('sleep: ms must be a number'))
  end()
})