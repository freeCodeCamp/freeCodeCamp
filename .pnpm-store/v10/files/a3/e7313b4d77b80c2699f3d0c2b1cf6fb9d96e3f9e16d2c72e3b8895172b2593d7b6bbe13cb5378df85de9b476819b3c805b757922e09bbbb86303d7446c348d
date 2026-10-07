'use strict'

const http = require('node:http')
const send = require('..')
const path = require('node:path')

const indexPath = path.join(__dirname, 'index.html')

const server = http.createServer(async function onRequest (req, res) {
  const { statusCode, headers, stream } = await send(req, indexPath)
  res.writeHead(statusCode, headers)
  stream.pipe(res)
})

server.listen(3000)
