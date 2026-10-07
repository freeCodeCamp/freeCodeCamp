'use strict'

const http = require('node:http')
const send = require('..')

module.exports.shouldNotHaveHeader = function shouldNotHaveHeader (header, t) {
  return function (res) {
    t.assert.ok(!(header.toLowerCase() in res.headers), 'should not have header ' + header)
  }
}

module.exports.shouldHaveHeader = function shouldHaveHeader (header, t) {
  return function (res) {
    t.assert.ok((header.toLowerCase() in res.headers), 'should have header ' + header)
  }
}

module.exports.createServer = function createServer (opts, fn) {
  return http.createServer(async function onRequest (req, res) {
    try {
      fn?.(req, res)
      const { statusCode, headers, stream } = await send(req, req.url, opts)
      res.writeHead(statusCode, headers)
      stream.pipe(res)
    } catch (err) {
      res.statusCode = 500
      res.end(String(err))
    }
  })
}

module.exports.shouldNotHaveBody = function shouldNotHaveBody (t) {
  return function (res) {
    t.assert.ok(res.text === '' || res.text === undefined)
  }
}
