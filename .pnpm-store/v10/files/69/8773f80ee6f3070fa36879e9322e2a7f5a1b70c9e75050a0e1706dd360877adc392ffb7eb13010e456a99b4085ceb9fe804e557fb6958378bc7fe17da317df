import proxyaddr from '..'
import { createServer } from 'node:http'
import { expectType } from 'tsd'

createServer(req => {
  expectType<string>(proxyaddr(req, addr => addr === '127.0.0.1'))
  expectType<string>(proxyaddr(req, (_addr, i) => i < 1))

  expectType<string>(proxyaddr(req, '127.0.0.1'))
  expectType<string>(proxyaddr(req, ['127.0.0.0/8', '10.0.0.0/8']))
  expectType<string>(proxyaddr(req, ['127.0.0.0/255.0.0.0', '192.168.0.0/255.255.0.0']))

  expectType<string>(proxyaddr(req, '::1'))
  expectType<string>(proxyaddr(req, ['::1/128', 'fe80::/10']))

  expectType<string>(proxyaddr(req, 'loopback'))
  expectType<string>(proxyaddr(req, ['loopback', 'fc00:ac:1ab5:fff::1/64']))

  expectType<string[]>(proxyaddr.all(req))
  expectType<string[]>(proxyaddr.all(req, 'loopback'))

  proxyaddr.compile(['localhost'])

  const trust = proxyaddr.compile('localhost')
  expectType<(addr: string, i: number) => boolean>(trust)
  proxyaddr(req, trust)
})
