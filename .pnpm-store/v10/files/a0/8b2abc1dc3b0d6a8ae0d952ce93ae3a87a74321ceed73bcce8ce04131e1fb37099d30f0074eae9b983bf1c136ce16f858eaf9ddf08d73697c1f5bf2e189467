'use strict'

const { test } = require('node:test')
const FindMyWay = require('../')
const noop = () => {}

test('single-character prefix', t => {
  t.plan(1)
  const findMyWay = FindMyWay()

  findMyWay.on('GET', '/b/', noop)
  findMyWay.on('GET', '/b/bulk', noop)

  t.assert.equal(findMyWay.find('GET', '/bulk'), null)
})

test('multi-character prefix', t => {
  t.plan(1)
  const findMyWay = FindMyWay()

  findMyWay.on('GET', '/bu/', noop)
  findMyWay.on('GET', '/bu/bulk', noop)

  t.assert.equal(findMyWay.find('GET', '/bulk'), null)
})

test('static / 1', t => {
  t.plan(1)
  const findMyWay = FindMyWay()

  findMyWay.on('GET', '/bb/', noop)
  findMyWay.on('GET', '/bb/bulk', noop)

  t.assert.equal(findMyWay.find('GET', '/bulk'), null)
})

test('static / 2', t => {
  t.plan(2)
  const findMyWay = FindMyWay()

  findMyWay.on('GET', '/bb/ff/', noop)
  findMyWay.on('GET', '/bb/ff/bulk', noop)

  t.assert.equal(findMyWay.find('GET', '/bulk'), null)
  t.assert.equal(findMyWay.find('GET', '/ff/bulk'), null)
})

test('static / 3', t => {
  t.plan(1)
  const findMyWay = FindMyWay()

  findMyWay.on('GET', '/bb/ff/', noop)
  findMyWay.on('GET', '/bb/ff/bulk', noop)
  findMyWay.on('GET', '/bb/ff/gg/bulk', noop)
  findMyWay.on('GET', '/bb/ff/bulk/bulk', noop)

  t.assert.equal(findMyWay.find('GET', '/bulk'), null)
})

test('with parameter / 1', t => {
  t.plan(1)
  const findMyWay = FindMyWay()

  findMyWay.on('GET', '/:foo/', noop)
  findMyWay.on('GET', '/:foo/bulk', noop)

  t.assert.equal(findMyWay.find('GET', '/bulk'), null)
})

test('with parameter / 2', t => {
  t.plan(1)
  const findMyWay = FindMyWay()

  findMyWay.on('GET', '/bb/', noop)
  findMyWay.on('GET', '/bb/:foo', noop)

  t.assert.equal(findMyWay.find('GET', '/bulk'), null)
})

test('with parameter / 3', t => {
  t.plan(1)
  const findMyWay = FindMyWay()

  findMyWay.on('GET', '/bb/ff/', noop)
  findMyWay.on('GET', '/bb/ff/:foo', noop)

  t.assert.equal(findMyWay.find('GET', '/bulk'), null)
})

test('with parameter / 4', t => {
  t.plan(1)
  const findMyWay = FindMyWay()

  findMyWay.on('GET', '/bb/:foo/', noop)
  findMyWay.on('GET', '/bb/:foo/bulk', noop)

  t.assert.equal(findMyWay.find('GET', '/bulk'), null)
})

test('with parameter / 5', t => {
  t.plan(2)
  const findMyWay = FindMyWay()

  findMyWay.on('GET', '/bb/:foo/aa/', noop)
  findMyWay.on('GET', '/bb/:foo/aa/bulk', noop)

  t.assert.equal(findMyWay.find('GET', '/bulk'), null)
  t.assert.equal(findMyWay.find('GET', '/bb/foo/bulk'), null)
})

test('with parameter / 6', t => {
  t.plan(3)
  const findMyWay = FindMyWay()

  findMyWay.on('GET', '/static/:parametric/static/:parametric', noop)
  findMyWay.on('GET', '/static/:parametric/static/:parametric/bulk', noop)

  t.assert.equal(findMyWay.find('GET', '/bulk'), null)
  t.assert.equal(findMyWay.find('GET', '/static/foo/bulk'), null)
  t.assert.notEqual(findMyWay.find('GET', '/static/foo/static/bulk'), null)
})

test('wildcard / 1', t => {
  t.plan(1)
  const findMyWay = FindMyWay()

  findMyWay.on('GET', '/bb/', noop)
  findMyWay.on('GET', '/bb/*', noop)

  t.assert.equal(findMyWay.find('GET', '/bulk'), null)
})
