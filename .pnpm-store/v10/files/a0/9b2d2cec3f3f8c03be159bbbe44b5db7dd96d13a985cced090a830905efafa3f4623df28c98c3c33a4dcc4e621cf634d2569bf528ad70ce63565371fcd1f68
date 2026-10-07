'use strict'

const { test } = require('node:test')
const FindMyWay = require('../')

test('If the prefixLen is higher than the pathLen we should not save the wildcard child', t => {
  t.plan(3)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('Should not be defaultRoute')
    }
  })

  findMyWay.get('/static/*', () => {})

  t.assert.deepEqual(findMyWay.find('GET', '/static/').params, { '*': '' })
  t.assert.deepEqual(findMyWay.find('GET', '/static/hello').params, { '*': 'hello' })
  t.assert.deepEqual(findMyWay.find('GET', '/static'), null)
})

test('If the prefixLen is higher than the pathLen we should not save the wildcard child (mixed routes)', t => {
  t.plan(3)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('Should not be defaultRoute')
    }
  })

  findMyWay.get('/static/*', () => {})
  findMyWay.get('/simple', () => {})
  findMyWay.get('/simple/:bar', () => {})
  findMyWay.get('/hello', () => {})

  t.assert.deepEqual(findMyWay.find('GET', '/static/').params, { '*': '' })
  t.assert.deepEqual(findMyWay.find('GET', '/static/hello').params, { '*': 'hello' })
  t.assert.deepEqual(findMyWay.find('GET', '/static'), null)
})

test('If the prefixLen is higher than the pathLen we should not save the wildcard child (with a root wildcard)', t => {
  t.plan(3)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('Should not be defaultRoute')
    }
  })

  findMyWay.get('*', () => {})
  findMyWay.get('/static/*', () => {})
  findMyWay.get('/simple', () => {})
  findMyWay.get('/simple/:bar', () => {})
  findMyWay.get('/hello', () => {})

  t.assert.deepEqual(findMyWay.find('GET', '/static/').params, { '*': '' })
  t.assert.deepEqual(findMyWay.find('GET', '/static/hello').params, { '*': 'hello' })
  t.assert.deepEqual(findMyWay.find('GET', '/static').params, { '*': '/static' })
})

test('If the prefixLen is higher than the pathLen we should not save the wildcard child (404)', t => {
  t.plan(4)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('Should not be defaultRoute')
    }
  })

  findMyWay.get('/static/*', () => {})
  findMyWay.get('/simple', () => {})
  findMyWay.get('/simple/:bar', () => {})
  findMyWay.get('/hello', () => {})

  t.assert.deepEqual(findMyWay.find('GET', '/stati'), null)
  t.assert.deepEqual(findMyWay.find('GET', '/staticc'), null)
  t.assert.deepEqual(findMyWay.find('GET', '/stati/hello'), null)
  t.assert.deepEqual(findMyWay.find('GET', '/staticc/hello'), null)
})
