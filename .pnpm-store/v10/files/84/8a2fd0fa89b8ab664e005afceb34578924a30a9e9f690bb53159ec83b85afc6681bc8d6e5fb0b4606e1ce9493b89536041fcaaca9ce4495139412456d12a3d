'use strict'

const { describe, test } = require('node:test')
const Fastify = require('..')
const { connect } = require('node:net')
const { once } = require('node:events')
const dns = require('node:dns').promises

describe('upgrade to both servers', async () => {
  const localAddresses = await dns.lookup('localhost', { all: true })
  const skip = localAddresses.length === 1 && 'requires both IPv4 and IPv6'

  await test('upgrade IPv4 and IPv6', { skip }, async t => {
    t.plan(2)

    const fastify = Fastify()
    fastify.server.on('upgrade', (req, socket, head) => {
      t.assert.ok(`upgrade event ${JSON.stringify(socket.address())}`)
      socket.end()
    })

    fastify.get('/', (req, res) => {
      res.send()
    })

    await fastify.listen()
    t.after(() => fastify.close())

    {
      const clientIPv4 = connect(fastify.server.address().port, '127.0.0.1')
      clientIPv4.write('GET / HTTP/1.1\r\n')
      clientIPv4.write('Upgrade: websocket\r\n')
      clientIPv4.write('Connection: Upgrade\r\n')
      clientIPv4.write('Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==\r\n')
      clientIPv4.write('Sec-WebSocket-Protocol: com.xxx.service.v1\r\n')
      clientIPv4.write('Sec-WebSocket-Version: 13\r\n\r\n')
      clientIPv4.write('\r\n\r\n')
      await once(clientIPv4, 'close')
    }

    {
      const clientIPv6 = connect(fastify.server.address().port, '::1')
      clientIPv6.write('GET / HTTP/1.1\r\n')
      clientIPv6.write('Upgrade: websocket\r\n')
      clientIPv6.write('Connection: Upgrade\r\n')
      clientIPv6.write('Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==\r\n')
      clientIPv6.write('Sec-WebSocket-Protocol: com.xxx.service.v1\r\n')
      clientIPv6.write('Sec-WebSocket-Version: 13\r\n\r\n')
      await once(clientIPv6, 'close')
    }
  })
})
