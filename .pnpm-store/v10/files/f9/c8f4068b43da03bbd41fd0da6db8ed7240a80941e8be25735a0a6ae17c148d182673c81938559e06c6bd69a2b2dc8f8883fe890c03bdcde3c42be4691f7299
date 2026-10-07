'use strict'

const { test } = require('node:test')
const FindMyWay = require('../')

test('wildcard should not limit by maxParamLength', t => {
  t.plan(1)

  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('we should not be here, the url is: ' + req.url)
    }
  })

  findMyWay.on('GET', '*', (req, res, params) => {
    t.assert.deepEqual(params['*'], '/portfolios/b5859fb9-6c76-4db8-b3d1-337c5be3fd8b/instruments/2a694406-b43f-439d-aa11-0c814805c930/positions')
  })

  findMyWay.lookup(
    { method: 'GET', url: '/portfolios/b5859fb9-6c76-4db8-b3d1-337c5be3fd8b/instruments/2a694406-b43f-439d-aa11-0c814805c930/positions', headers: {} },
    null
  )
})
