'use strict'

const { test } = require('node:test')
const FindMyWay = require('../..')

test('A route supports host constraints under http2 protocol', t => {
  t.plan(3)

  const findMyWay = FindMyWay()

  findMyWay.on('GET', '/', {}, (req, res) => {
    t.assert.assert.fail()
  })
  findMyWay.on('GET', '/', { constraints: { host: 'fastify.io' } }, (req, res) => {
    t.assert.equal(req.headers[':authority'], 'fastify.io')
  })
  findMyWay.on('GET', '/', { constraints: { host: /.+\.de/ } }, (req, res) => {
    t.assert.ok(req.headers[':authority'].endsWith('.de'))
  })

  findMyWay.lookup({
    method: 'GET',
    url: '/',
    headers: {
      ':authority': 'fastify.io'
    }
  })

  findMyWay.lookup({
    method: 'GET',
    url: '/',
    headers: {
      ':authority': 'fastify.de'
    }
  })

  findMyWay.lookup({
    method: 'GET',
    url: '/',
    headers: {
      ':authority': 'find-my-way.de'
    }
  })
})
