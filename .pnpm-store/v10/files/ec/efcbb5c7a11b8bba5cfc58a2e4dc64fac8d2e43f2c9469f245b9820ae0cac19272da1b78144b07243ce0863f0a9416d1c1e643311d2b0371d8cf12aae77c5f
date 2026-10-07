'use strict'

const { test } = require('node:test')
const FindMyWay = require('../')

test('Parametric and static with shared prefix / 1', t => {
  t.plan(1)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('Should not be defaultRoute')
    }
  })

  findMyWay.on('GET', '/woo', (req, res, params) => {
    t.assert.fail('we should not be here')
  })

  findMyWay.on('GET', '/:param', (req, res, params) => {
    t.assert.equal(params.param, 'winter')
  })

  findMyWay.lookup({ method: 'GET', url: '/winter', headers: {} }, null)
})

test('Parametric and static with shared prefix / 2', t => {
  t.plan(1)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('Should not be defaultRoute')
    }
  })

  findMyWay.on('GET', '/woo', (req, res, params) => {
    t.assert.ok('we should be here')
  })

  findMyWay.on('GET', '/:param', (req, res, params) => {
    t.assert.fail('we should not be here')
  })

  findMyWay.lookup({ method: 'GET', url: '/woo', headers: {} }, null)
})

test('Parametric and static with shared prefix (nested)', t => {
  t.plan(1)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.ok('We should be here')
    }
  })

  findMyWay.on('GET', '/woo', (req, res, params) => {
    t.assert.fail('we should not be here')
  })

  findMyWay.on('GET', '/:param', (req, res, params) => {
    t.assert.fail('we should not be here')
  })

  findMyWay.lookup({ method: 'GET', url: '/winter/coming', headers: {} }, null)
})

test('Parametric and static with shared prefix and different suffix', t => {
  t.plan(1)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('We should not be here')
    }
  })

  findMyWay.on('GET', '/example/shared/nested/test', (req, res, params) => {
    t.assert.fail('We should not be here')
  })

  findMyWay.on('GET', '/example/:param/nested/other', (req, res, params) => {
    t.assert.ok('We should be here')
  })

  findMyWay.lookup({ method: 'GET', url: '/example/shared/nested/other', headers: {} }, null)
})

test('Parametric and static with shared prefix (with wildcard)', t => {
  t.plan(1)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('Should not be defaultRoute')
    }
  })

  findMyWay.on('GET', '/woo', (req, res, params) => {
    t.assert.fail('we should not be here')
  })

  findMyWay.on('GET', '/:param', (req, res, params) => {
    t.assert.equal(params.param, 'winter')
  })

  findMyWay.on('GET', '/*', (req, res, params) => {
    t.assert.fail('we should not be here')
  })

  findMyWay.lookup({ method: 'GET', url: '/winter', headers: {} }, null)
})

test('Parametric and static with shared prefix (nested with wildcard)', t => {
  t.plan(1)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('Should not be defaultRoute')
    }
  })

  findMyWay.on('GET', '/woo', (req, res, params) => {
    t.assert.fail('we should not be here')
  })

  findMyWay.on('GET', '/:param', (req, res, params) => {
    t.assert.fail('we should not be here')
  })

  findMyWay.on('GET', '/*', (req, res, params) => {
    t.assert.equal(params['*'], 'winter/coming')
  })

  findMyWay.lookup({ method: 'GET', url: '/winter/coming', headers: {} }, null)
})

test('Parametric and static with shared prefix (nested with split)', t => {
  t.plan(1)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('we should not be here')
    }
  })

  findMyWay.on('GET', '/woo', (req, res, params) => {
    t.assert.fail('we should not be here')
  })

  findMyWay.on('GET', '/:param', (req, res, params) => {
    t.assert.equal(params.param, 'winter')
  })

  findMyWay.on('GET', '/wo', (req, res, params) => {
    t.assert.fail('we should not be here')
  })

  findMyWay.lookup({ method: 'GET', url: '/winter', headers: {} }, null)
})
