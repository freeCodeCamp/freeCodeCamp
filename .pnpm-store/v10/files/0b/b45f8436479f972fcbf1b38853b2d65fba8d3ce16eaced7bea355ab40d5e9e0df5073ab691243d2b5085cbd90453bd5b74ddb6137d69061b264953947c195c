import { FastifyError } from '@fastify/error'
import { expectAssignable, expectError, expectType } from 'tsd'
import fastify, {
  ContextConfigDefault, FastifyContextConfig,
  FastifyInstance,
  FastifyPluginOptions,
  FastifyReply,
  FastifyRequest,
  FastifySchema,
  FastifyTypeProviderDefault,
  RawReplyDefaultExpression,
  RawRequestDefaultExpression,
  RawServerDefault,
  RegisterOptions,
  RouteOptions,
  // preClose hook types should be exported correctly https://github.com/fastify/fastify/pull/5335
  /* eslint-disable @typescript-eslint/no-unused-vars */
  preCloseAsyncHookHandler,
  preCloseHookHandler
} from '../../fastify'
import { DoneFuncWithErrOrRes, HookHandlerDoneFunction, RequestPayload, preHandlerAsyncHookHandler } from '../../types/hooks'
import { FastifyRouteConfig, RouteGenericInterface } from '../../types/route'

const server = fastify()

// Test payload generic pass through for preSerialization and onSend

type TestPayloadType = {
  foo: string;
  bar: number;
}

// Synchronous Tests

server.addHook('onRequest', function (request, reply, done) {
  expectType<FastifyInstance>(this)
  expectType<FastifyRequest>(request)
  expectType<FastifyReply>(reply)
  expectAssignable<(err?: FastifyError) => void>(done)
  expectAssignable<(err?: NodeJS.ErrnoException) => void>(done)
  expectType<void>(done(new Error()))
})

server.addHook('preParsing', function (request, reply, payload, done) {
  expectType<FastifyInstance>(this)
  expectType<FastifyRequest>(request)
  expectType<FastifyReply>(reply)
  expectType<RequestPayload>(payload)
  expectAssignable<(err?: FastifyError | null, res?: RequestPayload) => void>(done)
  expectAssignable<(err?: NodeJS.ErrnoException) => void>(done)
  expectType<void>(done(new Error()))
})

server.addHook('preValidation', function (request, reply, done) {
  expectType<FastifyInstance>(this)
  expectType<FastifyRequest>(request)
  expectType<FastifyReply>(reply)
  expectAssignable<(err?: FastifyError) => void>(done)
  expectAssignable<(err?: NodeJS.ErrnoException) => void>(done)
  expectType<void>(done(new Error()))
})

server.addHook('preHandler', function (request, reply, done) {
  expectType<FastifyInstance>(this)
  expectType<FastifyRequest>(request)
  expectType<FastifyReply>(reply)
  expectAssignable<(err?: FastifyError) => void>(done)
  expectAssignable<(err?: NodeJS.ErrnoException) => void>(done)
  expectType<void>(done(new Error()))
})

server.addHook<TestPayloadType>('preSerialization', function (request, reply, payload, done) {
  expectType<FastifyInstance>(this)
  expectType<FastifyRequest>(request)
  expectType<FastifyReply>(reply)
  expectType<TestPayloadType>(payload) // we expect this to be unknown when not specified like in the previous test
  expectType<void>(done(new Error()))
  expectType<void>(done(null, 'foobar'))
  expectType<void>(done())
  expectError<void>(done(new Error(), 'foobar'))
})

server.addHook<TestPayloadType>('onSend', function (request, reply, payload, done) {
  expectType<FastifyInstance>(this)
  expectType<FastifyRequest>(request)
  expectType<FastifyReply>(reply)
  expectType<TestPayloadType>(payload)
  expectType<void>(done(new Error()))
  expectType<void>(done(null, 'foobar'))
  expectType<void>(done())
  expectError<void>(done(new Error(), 'foobar'))
})

server.addHook('onResponse', function (request, reply, done) {
  expectType<FastifyInstance>(this)
  expectType<FastifyRequest>(request)
  expectType<FastifyReply>(reply)
  expectAssignable<(err?: FastifyError) => void>(done)
  expectAssignable<(err?: NodeJS.ErrnoException) => void>(done)
  expectType<void>(done(new Error()))
})

server.addHook('onTimeout', function (request, reply, done) {
  expectType<FastifyInstance>(this)
  expectType<FastifyRequest>(request)
  expectType<FastifyReply>(reply)
  expectAssignable<(err?: FastifyError) => void>(done)
  expectAssignable<(err?: NodeJS.ErrnoException) => void>(done)
  expectType<void>(done(new Error()))
})

server.addHook('onError', function (request, reply, error, done) {
  expectType<FastifyInstance>(this)
  expectType<FastifyRequest>(request)
  expectType<FastifyReply>(reply)
  expectType<FastifyError>(error)
  expectType<() => void>(done)
  expectType<void>(done())
})

server.addHook('onRequestAbort', function (request, done) {
  expectType<FastifyInstance>(this)
  expectType<FastifyRequest>(request)
  expectAssignable<(err?: FastifyError) => void>(done)
  expectAssignable<(err?: NodeJS.ErrnoException) => void>(done)
  expectType<void>(done(new Error()))
})

server.addHook('onRoute', function (opts) {
  expectType<FastifyInstance>(this)
  expectType<RouteOptions & { routePath: string; path: string; prefix: string }>(opts)
})

server.addHook('onRegister', function (instance, opts) {
  expectType<FastifyInstance>(this)
  expectType<FastifyInstance>(instance)
  expectType<RegisterOptions & FastifyPluginOptions>(opts)
})

server.addHook('onReady', function (done) {
  expectType<FastifyInstance>(this)
  expectAssignable<(err?: FastifyError) => void>(done)
  expectAssignable<(err?: NodeJS.ErrnoException) => void>(done)
  expectType<void>(done(new Error()))
})

server.addHook('onListen', function (done) {
  expectType<FastifyInstance>(this)
  expectAssignable<(err?: FastifyError) => void>(done)
  expectAssignable<(err?: NodeJS.ErrnoException) => void>(done)
})

server.addHook('onClose', function (instance, done) {
  expectType<FastifyInstance>(this)
  expectType<FastifyInstance>(instance)
  expectAssignable<(err?: FastifyError) => void>(done)
  expectAssignable<(err?: NodeJS.ErrnoException) => void>(done)
  expectType<void>(done(new Error()))
})

// Asynchronous

server.addHook('onRequest', async function (request, reply) {
  expectType<FastifyInstance>(this)
  expectType<FastifyRequest>(request)
  expectType<FastifyReply>(reply)
})

server.addHook('preParsing', async function (request, reply, payload) {
  expectType<FastifyInstance>(this)
  expectType<FastifyRequest>(request)
  expectType<FastifyReply>(reply)
  expectType<RequestPayload>(payload)
})

server.addHook('preValidation', async function (request, reply) {
  expectType<FastifyInstance>(this)
  expectType<FastifyRequest>(request)
  expectType<FastifyReply>(reply)
})

server.addHook('preHandler', async function (request, reply) {
  expectType<FastifyInstance>(this)
  expectType<FastifyRequest>(request)
  expectType<FastifyReply>(reply)
})

server.addHook<TestPayloadType>('preSerialization', async function (request, reply, payload) {
  expectType<FastifyInstance>(this)
  expectType<FastifyRequest>(request)
  expectType<FastifyReply>(reply)
  expectType<TestPayloadType>(payload) // we expect this to be unknown when not specified like in the previous test
})

server.addHook<TestPayloadType>('onSend', async function (request, reply, payload) {
  expectType<FastifyInstance>(this)
  expectType<FastifyRequest>(request)
  expectType<FastifyReply>(reply)
  expectType<TestPayloadType>(payload)
})

server.addHook('onResponse', async function (request, reply) {
  expectType<FastifyInstance>(this)
  expectType<FastifyRequest>(request)
  expectType<FastifyReply>(reply)
})

server.addHook('onTimeout', async function (request, reply) {
  expectType<FastifyInstance>(this)
  expectType<FastifyRequest>(request)
  expectType<FastifyReply>(reply)
})

server.addHook('onError', async function (request, reply, error) {
  expectType<FastifyInstance>(this)
  expectType<FastifyRequest>(request)
  expectType<FastifyReply>(reply)
  expectType<FastifyError>(error)
})

server.addHook('onRequestAbort', async function (request) {
  expectType<FastifyInstance>(this)
  expectType<FastifyRequest>(request)
})

server.addHook('onRegister', async (instance, opts) => {
  expectType<FastifyInstance>(instance)
  expectType<RegisterOptions & FastifyPluginOptions>(opts)
})

server.addHook('onReady', async function () {
  expectType<FastifyInstance>(this)
})

server.addHook('onListen', async function () {
  expectType<FastifyInstance>(this)
})

server.addHook('onClose', async function (instance) {
  expectType<FastifyInstance>(this)
  expectType<FastifyInstance>(instance)
})

// Use case to monitor any regression on issue #3620
// ref.: https://github.com/fastify/fastify/issues/3620
const customTypedHook: preHandlerAsyncHookHandler<
RawServerDefault,
RawRequestDefaultExpression,
RawReplyDefaultExpression,
RouteGenericInterface,
ContextConfigDefault,
FastifySchema,
FastifyTypeProviderDefault
> = async function (request, reply): Promise<void> {
  expectType<FastifyInstance>(this)
  expectAssignable<FastifyRequest>(request)
  expectAssignable<FastifyReply>(reply)
}

server.register(async (instance) => {
  instance.addHook('preHandler', customTypedHook)
})

// Test custom Context Config types for hooks
type CustomContextConfig = FastifyContextConfig & {
  foo: string;
  bar: number;
}
type CustomContextConfigWithDefault = CustomContextConfig & FastifyRouteConfig

server.route<RouteGenericInterface, CustomContextConfig>({
  method: 'GET',
  url: '/',
  handler: () => { },
  onRequest: (request, reply, done) => {
    expectType<CustomContextConfigWithDefault>(request.routeOptions.config)
    expectType<CustomContextConfigWithDefault>(reply.routeOptions.config)
  },
  preParsing: (request, reply, payload, done) => {
    expectType<CustomContextConfigWithDefault>(request.routeOptions.config)
    expectType<CustomContextConfigWithDefault>(reply.routeOptions.config)
  },
  preValidation: (request, reply, done) => {
    expectType<CustomContextConfigWithDefault>(request.routeOptions.config)
    expectType<CustomContextConfigWithDefault>(reply.routeOptions.config)
  },
  preHandler: (request, reply, done) => {
    expectType<CustomContextConfigWithDefault>(request.routeOptions.config)
    expectType<CustomContextConfigWithDefault>(reply.routeOptions.config)
  },
  preSerialization: (request, reply, payload, done) => {
    expectType<CustomContextConfigWithDefault>(request.routeOptions.config)
    expectType<CustomContextConfigWithDefault>(reply.routeOptions.config)
  },
  onSend: (request, reply, payload, done) => {
    expectType<CustomContextConfigWithDefault>(request.routeOptions.config)
    expectType<CustomContextConfigWithDefault>(reply.routeOptions.config)
  },
  onResponse: (request, reply, done) => {
    expectType<CustomContextConfigWithDefault>(request.routeOptions.config)
    expectType<CustomContextConfigWithDefault>(reply.routeOptions.config)
  },
  onTimeout: (request, reply, done) => {
    expectType<CustomContextConfigWithDefault>(request.routeOptions.config)
    expectType<CustomContextConfigWithDefault>(reply.routeOptions.config)
  },
  onError: (request, reply, error, done) => {
    expectType<CustomContextConfigWithDefault>(request.routeOptions.config)
    expectType<CustomContextConfigWithDefault>(reply.routeOptions.config)
  }
})

server.get<RouteGenericInterface, CustomContextConfig>('/', {
  onRequest: async (request, reply) => {
    expectType<CustomContextConfigWithDefault>(request.routeOptions.config)
    expectType<CustomContextConfigWithDefault>(reply.routeOptions.config)
  },
  preParsing: async (request, reply) => {
    expectType<CustomContextConfigWithDefault>(request.routeOptions.config)
    expectType<CustomContextConfigWithDefault>(reply.routeOptions.config)
  },
  preValidation: async (request, reply) => {
    expectType<CustomContextConfigWithDefault>(request.routeOptions.config)
    expectType<CustomContextConfigWithDefault>(reply.routeOptions.config)
  },
  preHandler: async (request, reply) => {
    expectType<CustomContextConfigWithDefault>(request.routeOptions.config)
    expectType<CustomContextConfigWithDefault>(reply.routeOptions.config)
  },
  preSerialization: async (request, reply) => {
    expectType<CustomContextConfigWithDefault>(request.routeOptions.config)
    expectType<CustomContextConfigWithDefault>(reply.routeOptions.config)
  },
  onSend: async (request, reply) => {
    expectType<CustomContextConfigWithDefault>(request.routeOptions.config)
    expectType<CustomContextConfigWithDefault>(reply.routeOptions.config)
  },
  onResponse: async (request, reply) => {
    expectType<CustomContextConfigWithDefault>(request.routeOptions.config)
    expectType<CustomContextConfigWithDefault>(reply.routeOptions.config)
  },
  onTimeout: async (request, reply) => {
    expectType<CustomContextConfigWithDefault>(request.routeOptions.config)
    expectType<CustomContextConfigWithDefault>(reply.routeOptions.config)
  },
  onError: async (request, reply) => {
    expectType<CustomContextConfigWithDefault>(request.routeOptions.config)
    expectType<CustomContextConfigWithDefault>(reply.routeOptions.config)
  }
}, async (request, reply) => {
  expectType<CustomContextConfigWithDefault>(request.routeOptions.config)
  expectType<CustomContextConfigWithDefault>(reply.routeOptions.config)
})

type CustomContextRequest = FastifyRequest<any, any, any, any, any, CustomContextConfig, any>
type CustomContextReply = FastifyReply<any, any, any, any, CustomContextConfig, any, any>
server.route<RouteGenericInterface, CustomContextConfig>({
  method: 'GET',
  url: '/',
  handler: () => { },
  onRequest: async (request: CustomContextRequest, reply: CustomContextReply) => {
    expectType<CustomContextConfigWithDefault>(request.routeOptions.config)
    expectType<CustomContextConfigWithDefault>(reply.routeOptions.config)
  },
  preParsing: async (request: CustomContextRequest, reply: CustomContextReply, payload: RequestPayload) => {
    expectType<CustomContextConfigWithDefault>(request.routeOptions.config)
    expectType<CustomContextConfigWithDefault>(reply.routeOptions.config)
  },
  preValidation: async (request: CustomContextRequest, reply: CustomContextReply) => {
    expectType<CustomContextConfigWithDefault>(request.routeOptions.config)
    expectType<CustomContextConfigWithDefault>(reply.routeOptions.config)
  },
  preHandler: async (request: CustomContextRequest, reply: CustomContextReply) => {
    expectType<CustomContextConfigWithDefault>(request.routeOptions.config)
    expectType<CustomContextConfigWithDefault>(reply.routeOptions.config)
  },
  preSerialization: async (request: CustomContextRequest, reply: CustomContextReply, payload: any) => {
    expectType<CustomContextConfigWithDefault>(request.routeOptions.config)
    expectType<CustomContextConfigWithDefault>(reply.routeOptions.config)
  },
  onSend: async (request: CustomContextRequest, reply: CustomContextReply, payload: any) => {
    expectType<CustomContextConfigWithDefault>(request.routeOptions.config)
    expectType<CustomContextConfigWithDefault>(reply.routeOptions.config)
  },
  onResponse: async (request: CustomContextRequest, reply: CustomContextReply) => {
    expectType<CustomContextConfigWithDefault>(request.routeOptions.config)
    expectType<CustomContextConfigWithDefault>(reply.routeOptions.config)
  },
  onTimeout: async (request: CustomContextRequest, reply: CustomContextReply) => {
    expectType<CustomContextConfigWithDefault>(request.routeOptions.config)
    expectType<CustomContextConfigWithDefault>(reply.routeOptions.config)
  },
  onError: async (request: CustomContextRequest, reply: CustomContextReply, error: FastifyError) => {
    expectType<CustomContextConfigWithDefault>(request.routeOptions.config)
    expectType<CustomContextConfigWithDefault>(reply.routeOptions.config)
  }
})

server.route({
  method: 'GET',
  url: '/',
  handler: (request, reply) => {
    expectType<FastifyRequest>(request)
    expectType<FastifyReply>(reply)
  },
  onRequest: (request, reply, done) => {
    expectType<FastifyRequest>(request)
    expectType<FastifyReply>(reply)
    expectType<HookHandlerDoneFunction>(done)
  },
  onRequestAbort: (request, done) => {
    expectType<FastifyRequest>(request)
    expectType<HookHandlerDoneFunction>(done)
  },
  preParsing: (request, reply, payload, done) => {
    expectType<FastifyRequest>(request)
    expectType<FastifyReply>(reply)
    expectType<RequestPayload>(payload)
    expectType<
      <TError extends Error = FastifyError>(
        err?: TError | null | undefined,
        res?: RequestPayload | undefined
      ) => void
        >(done)
  },
  preValidation: (request, reply, done) => {
    expectType<FastifyRequest>(request)
    expectType<FastifyReply>(reply)
    expectType<HookHandlerDoneFunction>(done)
  },
  preHandler: (request, reply, done) => {
    expectType<FastifyRequest>(request)
    expectType<FastifyReply>(reply)
    expectType<HookHandlerDoneFunction>(done)
  },
  preSerialization: (request, reply, payload, done) => {
    expectType<FastifyRequest>(request)
    expectType<FastifyReply>(reply)
    expectType<unknown>(payload)
    expectType<DoneFuncWithErrOrRes>(done)
  },
  onSend: (request, reply, payload, done) => {
    expectType<FastifyRequest>(request)
    expectType<FastifyReply>(reply)
    expectType<unknown>(payload)
    expectType<DoneFuncWithErrOrRes>(done)
  },
  onResponse: (request, reply, done) => {
    expectType<FastifyRequest>(request)
    expectType<FastifyReply>(reply)
    expectType<HookHandlerDoneFunction>(done)
  },
  onTimeout: (request, reply, done) => {
    expectType<FastifyRequest>(request)
    expectType<FastifyReply>(reply)
    expectType<HookHandlerDoneFunction>(done)
  },
  onError: (request, reply, error, done) => {
    expectType<FastifyRequest>(request)
    expectType<FastifyReply>(reply)
    expectType<FastifyError>(error)
    expectType<() => void>(done)
  }
})

server.get('/', {
  onRequest: async (request, reply) => {
    expectType<FastifyRequest>(request)
    expectType<FastifyReply>(reply)
  },
  onRequestAbort: async (request, reply) => {
    expectType<FastifyRequest>(request)
  },
  preParsing: async (request, reply, payload) => {
    expectType<FastifyRequest>(request)
    expectType<FastifyReply>(reply)
    expectType<RequestPayload>(payload)
  },
  preValidation: async (request, reply) => {
    expectType<FastifyRequest>(request)
    expectType<FastifyReply>(reply)
  },
  preHandler: async (request, reply) => {
    expectType<FastifyRequest>(request)
    expectType<FastifyReply>(reply)
  },
  preSerialization: async (request, reply, payload) => {
    expectType<FastifyRequest>(request)
    expectType<FastifyReply>(reply)
    expectType<unknown>(payload)
  },
  onSend: async (request, reply, payload) => {
    expectType<FastifyRequest>(request)
    expectType<FastifyReply>(reply)
    expectType<unknown>(payload)
  },
  onResponse: async (request, reply) => {
    expectType<FastifyRequest>(request)
    expectType<FastifyReply>(reply)
  },
  onTimeout: async (request, reply) => {
    expectType<FastifyRequest>(request)
    expectType<FastifyReply>(reply)
  },
  onError: async (request, reply, error) => {
    expectType<FastifyRequest>(request)
    expectType<FastifyReply>(reply)
    expectType<FastifyError>(error)
  }
}, async (request, reply) => {
  expectType<FastifyRequest>(request)
  expectType<FastifyReply>(reply)
})

// TODO: Should throw errors
// expectError(server.get('/', { onRequest: async (request, reply, done) => {} }, async (request, reply) => {}))
// expectError(server.get('/', { onRequestAbort: async (request, done) => {} }, async (request, reply) => {}))
// expectError(server.get('/', { preParsing: async (request, reply, payload, done) => {} }, async (request, reply) => {}))
// expectError(server.get('/', { preValidation: async (request, reply, done) => {} }, async (request, reply) => {}))
// expectError(server.get('/', { preHandler: async (request, reply, done) => {} }, async (request, reply) => {}))
// expectError(server.get('/', { preSerialization: async (request, reply, payload, done) => {} }, async (request, reply) => {}))
// expectError(server.get('/', { onSend: async (request, reply, payload, done) => {} }, async (request, reply) => {}))
// expectError(server.get('/', { onResponse: async (request, reply, done) => {} }, async (request, reply) => {}))
// expectError(server.get('/', { onTimeout: async (request, reply, done) => {} }, async (request, reply) => {}))
// expectError(server.get('/', { onError: async (request, reply, error, done) => {} }, async (request, reply) => {}))

server.addHook('preClose', function (done) {
  expectType<FastifyInstance>(this)
  expectAssignable<(err?: FastifyError) => void>(done)
  expectAssignable<(err?: NodeJS.ErrnoException) => void>(done)
  expectType<void>(done(new Error()))
})

server.addHook('preClose', async function () {
  expectType<FastifyInstance>(this)
})

expectError(server.addHook('onClose', async function (instance, done) {}))
expectError(server.addHook('onError', async function (request, reply, error, done) {}))
expectError(server.addHook('onReady', async function (done) {}))
expectError(server.addHook('onListen', async function (done) {}))
expectError(server.addHook('onRequest', async function (request, reply, done) {}))
expectError(server.addHook('onRequestAbort', async function (request, done) {}))
expectError(server.addHook('onResponse', async function (request, reply, done) {}))
expectError(server.addHook('onSend', async function (request, reply, payload, done) {}))
expectError(server.addHook('onTimeout', async function (request, reply, done) {}))
expectError(server.addHook('preClose', async function (done) {}))
expectError(server.addHook('preHandler', async function (request, reply, done) {}))
expectError(server.addHook('preSerialization', async function (request, reply, payload, done) {}))
expectError(server.addHook('preValidation', async function (request, reply, done) {}))
