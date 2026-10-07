'use strict'

const { test } = require('node:test')
const FindMyWay = require('../')

test('contain param and wildcard together', t => {
  t.plan(4)

  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('we should not be here, the url is: ' + req.url)
    }
  })

  findMyWay.on('GET', '/:lang/item/:id', (req, res, params) => {
    t.assert.deepEqual(params.lang, 'fr')
    t.assert.deepEqual(params.id, '12345')
  })

  findMyWay.on('GET', '/:lang/item/*', (req, res, params) => {
    t.assert.deepEqual(params.lang, 'fr')
    t.assert.deepEqual(params['*'], '12345/edit')
  })

  findMyWay.lookup(
    { method: 'GET', url: '/fr/item/12345', headers: {} },
    null
  )

  findMyWay.lookup(
    { method: 'GET', url: '/fr/item/12345/edit', headers: {} },
    null
  )
})
