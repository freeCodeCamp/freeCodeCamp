import { Type, FastifyPluginAsyncTypebox, FastifyPluginCallbackTypebox } from '../index.mjs'
import { expectType } from 'tsd'
import Fastify, { FastifyPluginAsync, FastifyPluginCallback } from 'fastify'
import fp from 'fastify-plugin'
import { Http2Server } from 'node:http2'

// Ensure the defaults of FastifyPluginAsyncTypebox are the same as FastifyPluginAsync
export const pluginAsyncDefaults: FastifyPluginAsync = async (fastify, options) => {
  const pluginAsyncTypeboxDefaults: FastifyPluginAsyncTypebox = async (fastifyWithTypebox, optionsTypebox) => {
    expectType<typeof fastifyWithTypebox['server']>(fastify.server)
    expectType<typeof optionsTypebox>(options)
  }
  fastify.register(pluginAsyncTypeboxDefaults)
}

// Ensure the defaults of FastifyPluginCallbackTypebox are the same as FastifyPluginCallback
export const pluginCallbackDefaults: FastifyPluginCallback = async (fastify, options, done) => {
  const pluginCallbackTypeboxDefaults: FastifyPluginCallbackTypebox = async (fastifyWithTypebox, optionsTypebox, doneTypebox) => {
    expectType<typeof fastifyWithTypebox['server']>(fastify.server)
    expectType<typeof optionsTypebox>(options)
  }

  fastify.register(pluginCallbackTypeboxDefaults)
}

const asyncPlugin: FastifyPluginAsyncTypebox<{ optionA: string }, Http2Server> = async (fastify, options) => {
  expectType<Http2Server>(fastify.server)

  expectType<string>(options.optionA)

  fastify.get('/', {
    schema: {
      body: Type.Object({
        x: Type.String(),
        y: Type.Number(),
        z: Type.Boolean()
      })
    }
  }, (req) => {
    expectType<boolean>(req.body.z)
    expectType<number>(req.body.y)
    expectType<string>(req.body.x)
  })
}

const callbackPlugin: FastifyPluginCallbackTypebox<{ optionA: string }, Http2Server> = (fastify, options, done) => {
  expectType<Http2Server>(fastify.server)

  expectType<string>(options.optionA)

  fastify.get('/', {
    schema: {
      body: Type.Object({
        x: Type.String(),
        y: Type.Number(),
        z: Type.Boolean()
      })
    }
  }, (req) => {
    expectType<boolean>(req.body.z)
    expectType<number>(req.body.y)
    expectType<string>(req.body.x)
  })
  done()
}

const fastify = Fastify()

fastify.register(asyncPlugin, {optionA: 'a'})
fastify.register(callbackPlugin, {optionA: 'a'})

const asyncPluginHttpDefault: FastifyPluginAsyncTypebox<{ optionA: string }> = async () => {
}

fp(asyncPlugin)
fp(callbackPlugin)
fp(asyncPluginHttpDefault)
