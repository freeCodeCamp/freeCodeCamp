import fastify, { FastifyInstance, FastifyPluginOptions, SafePromiseLike } from '../../fastify'
import * as http from 'node:http'
import * as https from 'node:https'
import { expectType, expectError, expectAssignable } from 'tsd'
import { FastifyPluginCallback, FastifyPluginAsync } from '../../types/plugin'
import { FastifyError } from '@fastify/error'

// FastifyPlugin & FastifyRegister
interface TestOptions extends FastifyPluginOptions {
  option1: string;
  option2: boolean;
}
const testOptions: TestOptions = {
  option1: 'a',
  option2: false
}
const testPluginOpts: FastifyPluginCallback<TestOptions> = function (instance, opts, done) {
  expectType<TestOptions>(opts)
}
const testPluginOptsAsync: FastifyPluginAsync<TestOptions> = async function (instance, opts) {
  expectType<TestOptions>(opts)
}

const testPluginOptsWithType = (
  instance: FastifyInstance,
  opts: FastifyPluginOptions,
  done: (error?: FastifyError) => void
) => { }
const testPluginOptsWithTypeAsync = async (
  instance: FastifyInstance,
  opts: FastifyPluginOptions
) => { }

expectError(fastify().register(testPluginOpts, {})) // error because missing required options from generic declaration
expectError(fastify().register(testPluginOptsAsync, {})) // error because missing required options from generic declaration

expectAssignable<FastifyInstance>(fastify().register(testPluginOpts, { option1: '', option2: true }))
expectAssignable<FastifyInstance>(fastify().register(testPluginOptsAsync, { option1: '', option2: true }))

expectAssignable<FastifyInstance>(fastify().register(function (instance, opts, done) { }))
expectAssignable<FastifyInstance>(fastify().register(function (instance, opts, done) { }, () => { }))
expectAssignable<FastifyInstance>(fastify().register(function (instance, opts, done) { }, { logLevel: 'info', prefix: 'foobar' }))

expectAssignable<FastifyInstance>(fastify().register(import('./dummy-plugin')))
expectAssignable<FastifyInstance>(fastify().register(import('./dummy-plugin'), { foo: 1 }))

const testPluginCallback: FastifyPluginCallback = function (instance, opts, done) { }
expectAssignable<FastifyInstance>(fastify().register(testPluginCallback, {}))

const testPluginAsync: FastifyPluginAsync = async function (instance, opts) { }
expectAssignable<FastifyInstance>(fastify().register(testPluginAsync, {}))

expectAssignable<FastifyInstance>(
  fastify().register(function (instance, opts): Promise<void> { return Promise.resolve() })
)
expectAssignable<FastifyInstance>(fastify().register(async function (instance, opts) { }, () => { }))
expectAssignable<FastifyInstance>(fastify().register(async function (instance, opts) { }, { logLevel: 'info', prefix: 'foobar' }))

expectError(fastify().register(function (instance, opts, done) { }, { ...testOptions, logLevel: '' })) // must use a valid logLevel

const httpsServer = fastify({ https: {} })
expectError<
  FastifyInstance<https.Server, http.IncomingMessage, http.ServerResponse> &
  Promise<FastifyInstance<https.Server, http.IncomingMessage, http.ServerResponse>>
>(httpsServer)
expectAssignable<
  FastifyInstance<https.Server, http.IncomingMessage, http.ServerResponse> &
  PromiseLike<FastifyInstance<https.Server, http.IncomingMessage, http.ServerResponse>>
>(httpsServer)
expectType<
  FastifyInstance<https.Server, http.IncomingMessage, http.ServerResponse> &
  SafePromiseLike<FastifyInstance<https.Server, http.IncomingMessage, http.ServerResponse>>
>(httpsServer)

// Chainable
httpsServer
  .register(testPluginOpts, testOptions)
  .after((_error) => { })
  .ready((_error) => { })
  .close(() => { })

// Thenable
expectAssignable<PromiseLike<undefined>>(httpsServer.after())
expectAssignable<PromiseLike<undefined>>(httpsServer.close())
expectAssignable<PromiseLike<undefined>>(httpsServer.ready())
expectAssignable<PromiseLike<undefined>>(httpsServer.register(testPluginOpts, testOptions))
expectAssignable<PromiseLike<undefined>>(httpsServer.register(testPluginOptsWithType))
expectAssignable<PromiseLike<undefined>>(httpsServer.register(testPluginOptsWithTypeAsync))
expectAssignable<PromiseLike<undefined>>(httpsServer.register(testPluginOptsWithType, { prefix: '/test' }))
expectAssignable<PromiseLike<undefined>>(httpsServer.register(testPluginOptsWithTypeAsync, { prefix: '/test' }))

/* eslint-disable @typescript-eslint/no-unused-vars */
async function testAsync (): Promise<void> {
  await httpsServer
    .register(testPluginOpts, testOptions)
    .register(testPluginOpts, testOptions)
}
