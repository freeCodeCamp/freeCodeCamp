'use strict'

const { test } = require('node:test')
const FindMyWay = require('../')

test('Wildcard mixed with dynamic and common prefix / 1', t => {
  t.plan(5)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('Should not be defaultRoute')
    }
  })

  findMyWay.on('OPTIONS', '/*', (req, res, params) => {
    t.assert.equal(req.method, 'OPTIONS')
  })

  findMyWay.on('GET', '/obj/params/*', (req, res, params) => {
    t.assert.equal(req.method, 'GET')
  })

  findMyWay.on('GET', '/obj/:id', (req, res, params) => {
    t.assert.equal(req.method, 'GET')
  })

  findMyWay.on('GET', '/obj_params/*', (req, res, params) => {
    t.assert.equal(req.method, 'GET')
  })

  findMyWay.lookup({ method: 'OPTIONS', url: '/obj/params', headers: {} }, null)

  findMyWay.lookup({ method: 'OPTIONS', url: '/obj/params/12', headers: {} }, null)

  findMyWay.lookup({ method: 'GET', url: '/obj/params/12', headers: {} }, null)

  findMyWay.lookup({ method: 'OPTIONS', url: '/obj_params/12', headers: {} }, null)

  findMyWay.lookup({ method: 'GET', url: '/obj_params/12', headers: {} }, null)
})

test('Wildcard mixed with dynamic and common prefix / 2', t => {
  t.plan(6)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('Should not be defaultRoute')
    }
  })

  findMyWay.on('OPTIONS', '/*', (req, res, params) => {
    t.assert.equal(req.method, 'OPTIONS')
  })

  findMyWay.on('OPTIONS', '/obj/*', (req, res, params) => {
    t.assert.equal(req.method, 'OPTIONS')
  })

  findMyWay.on('GET', '/obj/params/*', (req, res, params) => {
    t.assert.equal(req.method, 'GET')
  })

  findMyWay.on('GET', '/obj/:id', (req, res, params) => {
    t.assert.equal(req.method, 'GET')
  })

  findMyWay.on('GET', '/obj_params/*', (req, res, params) => {
    t.assert.equal(req.method, 'GET')
  })

  findMyWay.lookup({ method: 'OPTIONS', url: '/obj_params/params', headers: {} }, null)

  findMyWay.lookup({ method: 'OPTIONS', url: '/obj/params', headers: {} }, null)

  findMyWay.lookup({ method: 'OPTIONS', url: '/obj/params/12', headers: {} }, null)

  findMyWay.lookup({ method: 'GET', url: '/obj/params/12', headers: {} }, null)

  findMyWay.lookup({ method: 'OPTIONS', url: '/obj_params/12', headers: {} }, null)

  findMyWay.lookup({ method: 'GET', url: '/obj_params/12', headers: {} }, null)
})
