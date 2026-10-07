import t from 'node:test'
import Fastify from 'fastify'
import swaggerDefault from '../../index.js'

t.test('esm support', async t => {
  const fastify = Fastify()

  await fastify.register(swaggerDefault)

  await fastify.ready()

  const swaggerObject = fastify.swagger()
  t.assert.strictEqual(swaggerObject.swagger, '2.0')
})
