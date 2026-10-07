'use strict'

const { test } = require('node:test')
const FindMyWay = require('..')

test('Should return correct param after switching from static route', t => {
  t.plan(1)
  const findMyWay = FindMyWay()

  findMyWay.on('GET', '/prefix-:id', () => {})
  findMyWay.on('GET', '/prefix-111', () => {})

  t.assert.deepEqual(findMyWay.find('GET', '/prefix-1111').params, { id: '1111' })
})

test('Should return correct param after switching from static route', t => {
  t.plan(1)
  const findMyWay = FindMyWay()

  findMyWay.on('GET', '/prefix-111', () => {})
  findMyWay.on('GET', '/prefix-:id/hello', () => {})

  t.assert.deepEqual(findMyWay.find('GET', '/prefix-1111/hello').params, { id: '1111' })
})

test('Should return correct param after switching from parametric route', t => {
  t.plan(1)
  const findMyWay = FindMyWay()

  findMyWay.on('GET', '/prefix-111', () => {})
  findMyWay.on('GET', '/prefix-:id/hello', () => {})
  findMyWay.on('GET', '/:id', () => {})

  t.assert.deepEqual(findMyWay.find('GET', '/prefix-1111-hello').params, { id: 'prefix-1111-hello' })
})

test('Should return correct params after switching from parametric route', t => {
  t.plan(1)
  const findMyWay = FindMyWay()

  findMyWay.on('GET', '/test/:param1/test/:param2/prefix-111', () => {})
  findMyWay.on('GET', '/test/:param1/test/:param2/prefix-:id/hello', () => {})
  findMyWay.on('GET', '/test/:param1/test/:param2/:id', () => {})

  t.assert.deepEqual(findMyWay.find('GET', '/test/value1/test/value2/prefix-1111-hello').params, {
    param1: 'value1',
    param2: 'value2',
    id: 'prefix-1111-hello'
  })
})
