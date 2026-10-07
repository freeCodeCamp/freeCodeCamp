import { test } from 'node:test'
import Fastify from '../../fastify.js'

test('esm support', async t => {
  const fastify = Fastify()

  fastify.register(import('./plugin.mjs'), { foo: 'bar' })
  fastify.register(import('./other.mjs'))

  await fastify.ready()

  t.assert.strictEqual(fastify.foo, 'bar')
})
