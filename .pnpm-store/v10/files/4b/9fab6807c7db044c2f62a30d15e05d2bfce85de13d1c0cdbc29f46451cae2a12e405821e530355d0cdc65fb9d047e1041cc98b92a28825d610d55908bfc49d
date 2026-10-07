'use strict'

const httpMethods = require('../lib/http-methods')
const { describe, test } = require('node:test')
const FindMyWay = require('../')

describe('should support shorthand', t => {
  for (const i in httpMethods) {
    const m = httpMethods[i]
    const methodName = m.toLowerCase()

    test('`.' + methodName + '`', t => {
      t.plan(1)
      const findMyWay = FindMyWay()

      findMyWay[methodName]('/test', () => {
        t.assert.ok('inside the handler')
      })

      findMyWay.lookup({ method: m, url: '/test', headers: {} }, null)
    })
  }
})

test('should support `.all` shorthand', t => {
  t.plan(11)
  const findMyWay = FindMyWay()

  findMyWay.all('/test', () => {
    t.assert.ok('inside the handler')
  })

  findMyWay.lookup({ method: 'GET', url: '/test', headers: {} }, null)
  findMyWay.lookup({ method: 'DELETE', url: '/test', headers: {} }, null)
  findMyWay.lookup({ method: 'HEAD', url: '/test', headers: {} }, null)
  findMyWay.lookup({ method: 'PATCH', url: '/test', headers: {} }, null)
  findMyWay.lookup({ method: 'POST', url: '/test', headers: {} }, null)
  findMyWay.lookup({ method: 'PUT', url: '/test', headers: {} }, null)
  findMyWay.lookup({ method: 'OPTIONS', url: '/test', headers: {} }, null)
  findMyWay.lookup({ method: 'TRACE', url: '/test', headers: {} }, null)
  findMyWay.lookup({ method: 'CONNECT', url: '/test', headers: {} }, null)
  findMyWay.lookup({ method: 'COPY', url: '/test', headers: {} }, null)
  findMyWay.lookup({ method: 'SUBSCRIBE', url: '/test', headers: {} }, null)
})
