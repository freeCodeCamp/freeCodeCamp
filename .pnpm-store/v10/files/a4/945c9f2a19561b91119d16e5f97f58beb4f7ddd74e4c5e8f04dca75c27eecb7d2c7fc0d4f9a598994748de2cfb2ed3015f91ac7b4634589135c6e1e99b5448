'use strict'

const { test } = require('node:test')
const FindMyWay = require('..')

test('should return result in the done callback', t => {
  t.plan(2)

  const router = FindMyWay()
  router.on('GET', '/', () => 'asyncHandlerResult')

  router.lookup({ method: 'GET', url: '/' }, null, (err, result) => {
    t.assert.equal(err, null)
    t.assert.equal(result, 'asyncHandlerResult')
  })
})

test('should return an error in the done callback', t => {
  t.plan(2)

  const router = FindMyWay()
  const error = new Error('ASYNC_HANDLER_ERROR')
  router.on('GET', '/', () => { throw error })

  router.lookup({ method: 'GET', url: '/' }, null, (err, result) => {
    t.assert.equal(err, error)
    t.assert.equal(result, undefined)
  })
})
