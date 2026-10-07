'use strict'

const http = require('http')

const stringify = require('fast-json-stringify')({
  type: 'object',
  properties: {
    hello: {
      type: 'string'
    },
    data: {
      type: 'number'
    },
    nested: {
      type: 'object',
      properties: {
        more: {
          type: 'string'
        }
      }
    }
  }
})

const server = http.createServer(handle)

function handle (req, res) {
  const data = {
    hello: 'world',
    data: 42,
    nested: {
      more: 'data'
    }
  }
  if (req.url === '/JSON') {
    res.end(JSON.stringify(data))
  } else {
    res.end(stringify(data))
  }
}

server.listen(3000)
