'use strict'

const { test } = require('node:test')
const FindMyWay = require('../')

test('issue-190', (t) => {
  t.plan(6)

  const findMyWay = FindMyWay()

  let staticCounter = 0
  let paramCounter = 0
  const staticPath = function staticPath () { staticCounter++ }
  const paramPath = function paramPath () { paramCounter++ }
  const extraPath = function extraPath () { }
  findMyWay.on('GET', '/api/users/award_winners', staticPath)
  findMyWay.on('GET', '/api/users/admins', staticPath)
  findMyWay.on('GET', '/api/users/:id', paramPath)
  findMyWay.on('GET', '/api/:resourceType/foo', extraPath)

  t.assert.equal(findMyWay.find('GET', '/api/users/admins').handler, staticPath)
  t.assert.equal(findMyWay.find('GET', '/api/users/award_winners').handler, staticPath)
  t.assert.equal(findMyWay.find('GET', '/api/users/a766c023-34ec-40d2-923c-e8259a28d2c5').handler, paramPath)
  t.assert.equal(findMyWay.find('GET', '/api/users/b766c023-34ec-40d2-923c-e8259a28d2c5').handler, paramPath)

  findMyWay.lookup({
    method: 'GET',
    url: '/api/users/admins',
    headers: { }
  })
  findMyWay.lookup({
    method: 'GET',
    url: '/api/users/award_winners',
    headers: { }
  })
  findMyWay.lookup({
    method: 'GET',
    url: '/api/users/a766c023-34ec-40d2-923c-e8259a28d2c5',
    headers: { }
  })

  t.assert.equal(staticCounter, 2)
  t.assert.equal(paramCounter, 1)
})
