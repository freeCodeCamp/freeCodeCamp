'use strict'

const { test } = require('node:test')
const FindMyWay = require('../')

test('full-url', t => {
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('Should not be defaultRoute')
    }
  })

  findMyWay.on('GET', '/a', (req, res) => {
    res.end('{"message":"hello world"}')
  })

  findMyWay.on('GET', '/a/:id', (req, res) => {
    res.end('{"message":"hello world"}')
  })

  t.assert.deepEqual(findMyWay.find('GET', 'http://localhost/a', { host: 'localhost' }), findMyWay.find('GET', '/a', { host: 'localhost' }))
  t.assert.deepEqual(findMyWay.find('GET', 'http://localhost:8080/a', { host: 'localhost' }), findMyWay.find('GET', '/a', { host: 'localhost' }))
  t.assert.deepEqual(findMyWay.find('GET', 'http://123.123.123.123/a', {}), findMyWay.find('GET', '/a', {}))
  t.assert.deepEqual(findMyWay.find('GET', 'https://localhost/a', { host: 'localhost' }), findMyWay.find('GET', '/a', { host: 'localhost' }))

  t.assert.deepEqual(findMyWay.find('GET', 'http://localhost/a/100', { host: 'localhost' }), findMyWay.find('GET', '/a/100', { host: 'localhost' }))
  t.assert.deepEqual(findMyWay.find('GET', 'http://localhost:8080/a/100', { host: 'localhost' }), findMyWay.find('GET', '/a/100', { host: 'localhost' }))
  t.assert.deepEqual(findMyWay.find('GET', 'http://123.123.123.123/a/100', {}), findMyWay.find('GET', '/a/100', {}))
  t.assert.deepEqual(findMyWay.find('GET', 'https://localhost/a/100', { host: 'localhost' }), findMyWay.find('GET', '/a/100', { host: 'localhost' }))
})
