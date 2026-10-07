'use strict'

const { test } = require('node:test')
const FindMyWay = require('../')

test('Wildcard route should not be blocked by Parametric with different method / 1', t => {
  t.plan(1)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('Should not be defaultRoute')
    }
  })

  findMyWay.on('OPTIONS', '/*', (req, res, params) => {
    t.assert.fail('Should not be here')
  })

  findMyWay.on('OPTIONS', '/obj/*', (req, res, params) => {
    t.assert.equal(req.method, 'OPTIONS')
  })

  findMyWay.on('GET', '/obj/:id', (req, res, params) => {
    t.assert.fail('Should not be GET')
  })

  findMyWay.lookup({ method: 'OPTIONS', url: '/obj/params', headers: {} }, null)
})

test('Wildcard route should not be blocked by Parametric with different method / 2', t => {
  t.plan(1)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('Should not be defaultRoute')
    }
  })

  findMyWay.on('OPTIONS', '/*', { version: '1.2.3' }, (req, res, params) => {
    t.assert.fail('Should not be here')
  })

  findMyWay.on('OPTIONS', '/obj/*', { version: '1.2.3' }, (req, res, params) => {
    t.assert.equal(req.method, 'OPTIONS')
  })

  findMyWay.on('GET', '/obj/:id', { version: '1.2.3' }, (req, res, params) => {
    t.assert.fail('Should not be GET')
  })

  findMyWay.lookup({
    method: 'OPTIONS',
    url: '/obj/params',
    headers: { 'accept-version': '1.2.3' }
  }, null)
})
