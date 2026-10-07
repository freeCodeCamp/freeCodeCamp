'use strict'

const { test } = require('node:test')
const FindMyWay = require('../')

test('Standard case', t => {
  t.plan(1)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('Should not be here')
    }
  })

  findMyWay.on('GET', '/a/:param', (req, res, params) => {
    t.assert.equal(params.param, 'perfectly-fine-route')
  })

  findMyWay.lookup({ method: 'GET', url: '/a/perfectly-fine-route', headers: {} }, null)
})

test('Should be 404 / 1', t => {
  t.plan(1)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.ok('Everything good')
    }
  })

  findMyWay.on('GET', '/a/:param', (req, res, params) => {
    t.assert.fail('We should not be here')
  })

  findMyWay.lookup({ method: 'GET', url: '/a', headers: {} }, null)
})

test('Should be 404 / 2', t => {
  t.plan(1)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.ok('Everything good')
    }
  })

  findMyWay.on('GET', '/a/:param', (req, res, params) => {
    t.assert.fail('We should not be here')
  })

  findMyWay.lookup({ method: 'GET', url: '/a-non-existing-route', headers: {} }, null)
})

test('Should be 404 / 3', t => {
  t.plan(1)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.ok('Everything good')
    }
  })

  findMyWay.on('GET', '/a/:param', (req, res, params) => {
    t.assert.fail('We should not be here')
  })

  findMyWay.lookup({ method: 'GET', url: '/a//', headers: {} }, null)
})

test('Should get an empty parameter', t => {
  t.plan(1)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('We should not be here')
    }
  })

  findMyWay.on('GET', '/a/:param', (req, res, params) => {
    t.assert.equal(params.param, '')
  })

  findMyWay.lookup({ method: 'GET', url: '/a/', headers: {} }, null)
})
