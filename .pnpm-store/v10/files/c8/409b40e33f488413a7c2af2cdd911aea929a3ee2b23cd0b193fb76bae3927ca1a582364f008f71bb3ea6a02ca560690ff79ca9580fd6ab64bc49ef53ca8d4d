'use strict'

const http = require('http')
const router = require('./')({
  defaultRoute: (req, res) => {
    res.end('not found')
  }
})

router.on('GET', '/test', (req, res, params) => {
  res.end('{"hello":"world"}')
})

router.on('GET', '/:test', (req, res, params) => {
  res.end(JSON.stringify(params))
})

router.on('GET', '/text/hello', (req, res, params) => {
  res.end('{"winter":"is here"}')
})

const server = http.createServer((req, res) => {
  router.lookup(req, res)
})

server.listen(3000, err => {
  if (err) throw err
  console.log('Server listening on: http://localhost:3000')
})
