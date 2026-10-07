import Fastify from 'fastify'
import FastifyCookie from '@fastify/cookie'
import FastifyCsrfProtection, { FastifyCsrfOptions } from '..'
import { expectError, expectDeprecated, expectType } from 'tsd'
import FastifySession from '@fastify/session'

const fastify = Fastify()

declare module 'fastify' {
  interface Session {
    username: string
  }
}

async function run () {
  await fastify.register(FastifyCookie)
  await fastify.register(FastifyCsrfProtection)

  fastify.route({
    method: 'GET',
    url: '/',
    handler: async (_req, reply) => {
      const token = reply.generateCsrf()
      const tokenWithOpts = reply.generateCsrf({ userInfo: 'any-string' })
      expectType<string>(token)
      expectType<string>(tokenWithOpts)
      return token
    }
  })

  fastify.route({
    method: 'POST',
    url: '/',
    onRequest: fastify.csrfProtection,
    handler: async (req) => {
      return req.body
    }
  })

  fastify.addHook('onRequest', fastify.csrfProtection)
}
await run()

fastify.register(FastifyCsrfProtection, { csrfOpts: { algorithm: 'sha1', hmacKey: 'hmac' } })
expectError(fastify.register(FastifyCsrfProtection, { csrfOpts: { algorithm: 1 } }))

fastify.register(FastifySession, { secret: 'a secret with minimum length of 32 characters' })
fastify.register(FastifyCsrfProtection, {
  csrfOpts: {
    hmacKey: '123'
  },
  getUserInfo (req) {
    const info = req.session.get('username')
    if (info) {
      return info
    } else {
      throw new Error('No user info')
    }
  }
})
expectError(fastify.register(FastifyCsrfProtection, { getUserInfo: 'invalid' }))

fastify.register(FastifyCsrfProtection, { csrfOpts: { hmacKey: 'hmac' }, sessionPlugin: '@fastify/cookie' })
fastify.register(FastifyCsrfProtection, { csrfOpts: { hmacKey: 'hmac' } })
fastify.register(FastifyCsrfProtection, { })
fastify.register(FastifyCsrfProtection, { csrfOpts: { } })
expectError(fastify.register(FastifyCsrfProtection, { sessionPlugin: '@fastify/cookie', csrfOpts: { userInfo: true } }))
fastify.register(FastifyCsrfProtection, { sessionPlugin: '@fastify/cookie', csrfOpts: { userInfo: true, hmacKey: 'key' } })
fastify.register(FastifyCsrfProtection, { sessionPlugin: '@fastify/cookie' })
fastify.register(FastifyCsrfProtection, { csrfOpts: { }, sessionPlugin: '@fastify/session' })
fastify.register(FastifyCsrfProtection, { csrfOpts: { }, sessionPlugin: '@fastify/secure-session' })
fastify.register(FastifyCsrfProtection, { sessionPlugin: '@fastify/session' })
fastify.register(FastifyCsrfProtection, { sessionPlugin: '@fastify/secure-session' })
fastify.register(FastifyCsrfProtection, { logLevel: 'info' })

expectDeprecated({} as FastifyCsrfOptions)
