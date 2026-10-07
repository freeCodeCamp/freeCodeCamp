'use strict'

const http = require('node:http')
const Request = require('../lib/request')
const Response = require('../lib/response')
const inject = require('..')
const parseURL = require('../lib/parse-url')
const { Readable } = require('node:stream')
const { assert } = require('node:console')
const { Bench } = require('tinybench')

const suite = new Bench()

const mockReq = {
  url: 'http://localhost',
  method: 'GET',
  headers: {
    foo: 'bar',
    'content-type': 'html',
    accepts: 'json',
    authorization: 'granted'
  }
}
const mockCustomReq = {
  url: 'http://localhost',
  method: 'GET',
  headers: {
    foo: 'bar',
    'content-type': 'html',
    accepts: 'json',
    authorization: 'granted'
  },
  Request: http.IncomingMessage
}
const mockReqCookies = {
  url: 'http://localhost',
  method: 'GET',
  cookies: { foo: 'bar', grass: 'àìùòlé' },
  headers: {
    foo: 'bar',
    'content-type': 'html',
    accepts: 'json',
    authorization: 'granted'
  }
}
const mockReqCookiesPayload = {
  url: 'http://localhost',
  method: 'GET',
  headers: {
    foo: 'bar',
    'content-type': 'html',
    accepts: 'json',
    authorization: 'granted'
  },
  payload: {
    foo: { bar: 'fiz' },
    bim: { bar: { boom: 'paf' } }
  }
}
const mockReqCookiesPayloadBuffer = {
  url: 'http://localhost',
  method: 'GET',
  headers: {
    foo: 'bar',
    'content-type': 'html',
    accepts: 'json',
    authorization: 'granted'
  },
  payload: Buffer.from('foo')
}
const mockReqCookiesPayloadReadable = () => ({
  url: 'http://localhost',
  method: 'GET',
  headers: {
    foo: 'bar',
    'content-type': 'html',
    accepts: 'json',
    authorization: 'granted'
  },
  payload: Readable.from(['foo', 'bar', 'baz'])
})

suite
  .add('Request', function () {
    new Request(mockReq) // eslint-disable-line no-new
  })
  .add('Custom Request', function () {
    new Request.CustomRequest(mockCustomReq) // eslint-disable-line no-new
  })
  .add('Request With Cookies', function () {
    new Request(mockReqCookies) // eslint-disable-line no-new
  })
  .add('Request With Cookies n payload', function () {
    new Request(mockReqCookiesPayload) // eslint-disable-line no-new
  })
  .add('ParseUrl', function () {
    parseURL('http://example.com:8080/hello')
  })
  .add('ParseUrl and query', function () {
    parseURL('http://example.com:8080/hello', {
      foo: 'bar',
      message: 'OK',
      xs: ['foo', 'bar']
    })
  })
  .add('read request body JSON', function () {
    return new Promise((resolve) => {
      const req = new Request(mockReqCookiesPayload)
      req.prepare(() => {
        req.on('data', () => {})
        req.on('end', resolve)
      })
    })
  })
  .add('read request body buffer', function () {
    return new Promise((resolve) => {
      const req = new Request(mockReqCookiesPayloadBuffer)
      req.prepare(() => {
        req.on('data', () => {})
        req.on('end', resolve)
      })
    })
  })
  .add('read request body readable', function () {
    return new Promise((resolve) => {
      const req = new Request(mockReqCookiesPayloadReadable())
      req.prepare(() => {
        req.on('data', () => {})
        req.on('end', resolve)
      })
    })
  })
  .add('Response write end', function () {
    const req = new Request(mockReq)
    return new Promise((resolve) => {
      const res = new Response(req, resolve)
      res.write('foo')
      res.end()
    })
  })
  .add('Response writeHead end', function () {
    const req = new Request(mockReq)
    return new Promise((resolve) => {
      const res = new Response(req, resolve)
      res.writeHead(400, { 'content-length': 200 })
      res.end()
    })
  })
  .add('base inject', async function () {
    const d = await inject((req, res) => {
      req.on('data', () => {})
      req.on('end', () => { res.end('1') })
    }, mockReqCookiesPayload)
    assert(d.payload === '1')
  })
  .run()
  .then((tasks) => {
    const errors = tasks.map(t => t.result?.error).filter((t) => t)
    if (errors.length) {
      errors.map((e) => console.error(e))
    } else {
      console.table(suite.table())
    }
  })
