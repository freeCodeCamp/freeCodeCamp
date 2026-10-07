'use strict'

const { test } = require('node:test')
const FindMyWay = require('..')

test('should setup parametric and regexp node', t => {
  t.plan(2)

  const findMyWay = FindMyWay()

  const paramHandler = () => {}
  const regexpHandler = () => {}

  findMyWay.on('GET', '/foo/:bar', paramHandler)
  findMyWay.on('GET', '/foo/:bar(123)', regexpHandler)

  t.assert.equal(findMyWay.find('GET', '/foo/value').handler, paramHandler)
  t.assert.equal(findMyWay.find('GET', '/foo/123').handler, regexpHandler)
})

test('should setup parametric and multi-parametric node', t => {
  t.plan(2)

  const findMyWay = FindMyWay()

  const paramHandler = () => {}
  const regexpHandler = () => {}

  findMyWay.on('GET', '/foo/:bar', paramHandler)
  findMyWay.on('GET', '/foo/:bar.png', regexpHandler)

  t.assert.equal(findMyWay.find('GET', '/foo/value').handler, paramHandler)
  t.assert.equal(findMyWay.find('GET', '/foo/value.png').handler, regexpHandler)
})

test('should throw when set upping two parametric nodes', t => {
  t.plan(1)

  const findMyWay = FindMyWay()
  findMyWay.on('GET', '/foo/:bar', () => {})

  t.assert.throws(() => findMyWay.on('GET', '/foo/:baz', () => {}))
})

test('should throw when set upping two regexp nodes', t => {
  t.plan(1)

  const findMyWay = FindMyWay()
  findMyWay.on('GET', '/foo/:bar(123)', () => {})

  t.assert.throws(() => findMyWay.on('GET', '/foo/:bar(456)', () => {}))
})

test('should set up two parametric nodes with static ending', t => {
  t.plan(2)

  const findMyWay = FindMyWay()

  const paramHandler1 = () => {}
  const paramHandler2 = () => {}

  findMyWay.on('GET', '/foo/:bar.png', paramHandler1)
  findMyWay.on('GET', '/foo/:bar.jpeg', paramHandler2)

  t.assert.equal(findMyWay.find('GET', '/foo/value.png').handler, paramHandler1)
  t.assert.equal(findMyWay.find('GET', '/foo/value.jpeg').handler, paramHandler2)
})

test('should set up two regexp nodes with static ending', t => {
  t.plan(2)

  const findMyWay = FindMyWay()

  const paramHandler1 = () => {}
  const paramHandler2 = () => {}

  findMyWay.on('GET', '/foo/:bar(123).png', paramHandler1)
  findMyWay.on('GET', '/foo/:bar(456).jpeg', paramHandler2)

  t.assert.equal(findMyWay.find('GET', '/foo/123.png').handler, paramHandler1)
  t.assert.equal(findMyWay.find('GET', '/foo/456.jpeg').handler, paramHandler2)
})

test('node with longer static suffix should have higher priority', t => {
  t.plan(2)

  const findMyWay = FindMyWay()

  const paramHandler1 = () => {}
  const paramHandler2 = () => {}

  findMyWay.on('GET', '/foo/:bar.png', paramHandler1)
  findMyWay.on('GET', '/foo/:bar.png.png', paramHandler2)

  t.assert.equal(findMyWay.find('GET', '/foo/value.png').handler, paramHandler1)
  t.assert.equal(findMyWay.find('GET', '/foo/value.png.png').handler, paramHandler2)
})

test('node with longer static suffix should have higher priority', t => {
  t.plan(2)

  const findMyWay = FindMyWay()

  const paramHandler1 = () => {}
  const paramHandler2 = () => {}

  findMyWay.on('GET', '/foo/:bar.png.png', paramHandler2)
  findMyWay.on('GET', '/foo/:bar.png', paramHandler1)

  t.assert.equal(findMyWay.find('GET', '/foo/value.png').handler, paramHandler1)
  t.assert.equal(findMyWay.find('GET', '/foo/value.png.png').handler, paramHandler2)
})

test('should set up regexp node and node with static ending', t => {
  t.plan(2)

  const regexHandler = () => {}
  const multiParamHandler = () => {}

  const findMyWay = FindMyWay()
  findMyWay.on('GET', '/foo/:bar(123)', regexHandler)
  findMyWay.on('GET', '/foo/:bar(123).jpeg', multiParamHandler)

  t.assert.equal(findMyWay.find('GET', '/foo/123.jpeg').handler, multiParamHandler)
  t.assert.equal(findMyWay.find('GET', '/foo/123').handler, regexHandler)
})
