import { FastifyError } from '@fastify/error'
import * as http from 'node:http'
import { expectAssignable, expectError, expectType } from 'tsd'
import fastify, { FastifyInstance, FastifyReply, FastifyRequest, RouteHandlerMethod } from '../../fastify'
import { RequestPayload } from '../../types/hooks'
import { FindMyWayFindResult } from '../../types/instance'
import { HTTPMethods, RawServerDefault } from '../../types/utils'

/*
 * Testing Fastify HTTP Routes and Route Shorthands.
 * Verifies Request and Reply types as well.
 * For the route shorthand tests the argument orders are:
 * - `(path, handler)`
 * - `(path, options, handler)`
 * - `(path, options)`
 */

declare module '../../fastify' {
  interface FastifyContextConfig {
    foo: string;
    bar: number;
    includeMessage?: boolean;
  }

  /* eslint-disable @typescript-eslint/no-unused-vars */
  interface FastifyRequest<
    RouteGeneric,
    RawServer,
    RawRequest,
    SchemaCompiler,
    TypeProvider,
    ContextConfig,
    Logger,
    RequestType
  > {
    message: ContextConfig extends { includeMessage: true }
      ? string
      : null;
  }
}

const routeHandler: RouteHandlerMethod = function (request, reply) {
  expectType<FastifyInstance>(this)
  expectType<FastifyRequest>(request)
  expectType<FastifyReply>(reply)
}

const routeHandlerWithReturnValue: RouteHandlerMethod = function (request, reply) {
  expectType<FastifyInstance>(this)
  expectType<FastifyRequest>(request)
  expectType<FastifyReply>(reply)

  return reply.send()
}

const asyncPreHandler = async (request: FastifyRequest) => {
  expectType<FastifyRequest>(request)
}

fastify().get('/', { preHandler: asyncPreHandler }, async () => 'this is an example')

fastify().get(
  '/',
  { config: { foo: 'bar', bar: 100, includeMessage: true } },
  (req) => {
    expectType<string>(req.message)
  }
)

fastify().get(
  '/',
  { config: { foo: 'bar', bar: 100, includeMessage: false } },
  (req) => {
    expectType<null>(req.message)
  }
)

type LowerCaseHTTPMethods = 'delete' | 'get' | 'head' | 'patch' | 'post' | 'put' |
  'options' | 'propfind' | 'proppatch' | 'mkcol' | 'copy' | 'move' | 'lock' |
  'unlock' | 'trace' | 'search' | 'mkcalendar' | 'report'

  ;['DELETE', 'GET', 'HEAD', 'PATCH', 'POST', 'PUT', 'OPTIONS', 'PROPFIND',
  'PROPPATCH', 'MKCOL', 'COPY', 'MOVE', 'LOCK', 'UNLOCK', 'TRACE', 'SEARCH', 'MKCALENDAR', 'REPORT'
].forEach(method => {
  // route method
  expectType<FastifyInstance>(fastify().route({
    method: method as HTTPMethods,
    url: '/',
    handler: routeHandler
  }))

  const lowerCaseMethod: LowerCaseHTTPMethods = method.toLowerCase() as LowerCaseHTTPMethods

  // method as method
  expectType<FastifyInstance>(fastify()[lowerCaseMethod]('/', routeHandler))
  expectType<FastifyInstance>(fastify()[lowerCaseMethod]('/', {}, routeHandler))
  expectType<FastifyInstance>(fastify()[lowerCaseMethod]('/', { handler: routeHandler }))

  expectType<FastifyInstance>(fastify()[lowerCaseMethod]('/', {
    handler: routeHandler,
    errorHandler: (error, request, reply) => {
      expectType<FastifyError>(error)
      reply.send('error')
    },
    childLoggerFactory: function (logger, bindings, opts) {
      return logger.child(bindings, opts)
    }
  }))

  interface BodyInterface { prop: string }
  interface QuerystringInterface { prop: number }
  interface ParamsInterface { prop: boolean }
  interface HeadersInterface { prop: string }
  interface RouteSpecificContextConfigType {
    extra: boolean
  }
  interface RouteGeneric {
    Body: BodyInterface;
    Querystring: QuerystringInterface;
    Params: ParamsInterface;
    Headers: HeadersInterface;
  }

  fastify()[lowerCaseMethod]<RouteGeneric, RouteSpecificContextConfigType>('/', { config: { foo: 'bar', bar: 100, extra: true } }, (req, res) => {
    expectType<BodyInterface>(req.body)
    expectType<QuerystringInterface>(req.query)
    expectType<ParamsInterface>(req.params)
    expectType<http.IncomingHttpHeaders & HeadersInterface>(req.headers)
    expectType<string>(req.routeOptions.config.foo)
    expectType<number>(req.routeOptions.config.bar)
    expectType<boolean>(req.routeOptions.config.extra)
    expectType<string>(req.routeOptions.config.url)
    expectType<HTTPMethods | HTTPMethods[]>(req.routeOptions.config.method)
    expectType<string>(res.routeOptions.config.foo)
    expectType<number>(res.routeOptions.config.bar)
    expectType<boolean>(res.routeOptions.config.extra)
    expectType<string>(req.routeOptions.config.url)
    expectType<HTTPMethods | HTTPMethods[]>(req.routeOptions.config.method)
  })

  fastify().route<RouteGeneric>({
    url: '/',
    method: method as HTTPMethods,
    config: { foo: 'bar', bar: 100 },
    prefixTrailingSlash: 'slash',
    onRequest: (req, res, done) => { // these handlers are tested in `hooks.test-d.ts`
      expectType<BodyInterface>(req.body)
      expectType<QuerystringInterface>(req.query)
      expectType<ParamsInterface>(req.params)
      expectType<http.IncomingHttpHeaders & HeadersInterface>(req.headers)
      expectType<string>(req.routeOptions.config.foo)
      expectType<number>(req.routeOptions.config.bar)
      expectType<string>(req.routeOptions.config.url)
      expectType<HTTPMethods | HTTPMethods[]>(req.routeOptions.config.method)
      expectType<string>(res.routeOptions.config.foo)
      expectType<number>(res.routeOptions.config.bar)
      expectType<string>(req.routeOptions.config.url)
      expectType<HTTPMethods | HTTPMethods[]>(req.routeOptions.config.method)
    },
    preParsing: (req, res, payload, done) => {
      expectType<BodyInterface>(req.body)
      expectType<QuerystringInterface>(req.query)
      expectType<ParamsInterface>(req.params)
      expectType<http.IncomingHttpHeaders & HeadersInterface>(req.headers)
      expectType<string>(req.routeOptions.config.foo)
      expectType<number>(req.routeOptions.config.bar)
      expectType<string>(req.routeOptions.config.url)
      expectType<HTTPMethods | HTTPMethods[]>(req.routeOptions.config.method)
      expectType<string>(res.routeOptions.config.foo)
      expectType<number>(res.routeOptions.config.bar)
      expectType<string>(req.routeOptions.config.url)
      expectType<HTTPMethods | HTTPMethods[]>(req.routeOptions.config.method)
      expectType<RequestPayload>(payload)
      expectAssignable<(err?: FastifyError | null, res?: RequestPayload) => void>(done)
      expectAssignable<(err?: NodeJS.ErrnoException) => void>(done)
    },
    preValidation: (req, res, done) => {
      expectType<BodyInterface>(req.body)
      expectType<QuerystringInterface>(req.query)
      expectType<ParamsInterface>(req.params)
      expectType<http.IncomingHttpHeaders & HeadersInterface>(req.headers)
      expectType<string>(req.routeOptions.config.foo)
      expectType<number>(req.routeOptions.config.bar)
      expectType<string>(req.routeOptions.config.url)
      expectType<HTTPMethods | HTTPMethods[]>(req.routeOptions.config.method)
      expectType<string>(res.routeOptions.config.foo)
      expectType<number>(res.routeOptions.config.bar)
      expectType<string>(req.routeOptions.config.url)
      expectType<HTTPMethods | HTTPMethods[]>(req.routeOptions.config.method)
    },
    preHandler: (req, res, done) => {
      expectType<BodyInterface>(req.body)
      expectType<QuerystringInterface>(req.query)
      expectType<ParamsInterface>(req.params)
      expectType<http.IncomingHttpHeaders & HeadersInterface>(req.headers)
      expectType<string>(req.routeOptions.config.foo)
      expectType<number>(req.routeOptions.config.bar)
      expectType<string>(req.routeOptions.config.url)
      expectType<HTTPMethods | HTTPMethods[]>(req.routeOptions.config.method)
      expectType<string>(res.routeOptions.config.foo)
      expectType<number>(res.routeOptions.config.bar)
      expectType<string>(req.routeOptions.config.url)
      expectType<HTTPMethods | HTTPMethods[]>(req.routeOptions.config.method)
    },
    onResponse: (req, res, done) => {
      expectType<BodyInterface>(req.body)
      expectType<QuerystringInterface>(req.query)
      expectType<ParamsInterface>(req.params)
      expectType<http.IncomingHttpHeaders & HeadersInterface>(req.headers)
      expectType<string>(req.routeOptions.config.foo)
      expectType<number>(req.routeOptions.config.bar)
      expectType<string>(req.routeOptions.config.url)
      expectType<HTTPMethods | HTTPMethods[]>(req.routeOptions.config.method)
      expectType<string>(res.routeOptions.config.foo)
      expectType<number>(res.routeOptions.config.bar)
      expectType<string>(req.routeOptions.config.url)
      expectType<HTTPMethods | HTTPMethods[]>(req.routeOptions.config.method)
      expectType<number>(res.statusCode)
    },
    onError: (req, res, error, done) => {
      expectType<BodyInterface>(req.body)
      expectType<QuerystringInterface>(req.query)
      expectType<ParamsInterface>(req.params)
      expectType<http.IncomingHttpHeaders & HeadersInterface>(req.headers)
      expectType<string>(req.routeOptions.config.foo)
      expectType<number>(req.routeOptions.config.bar)
      expectType<string>(req.routeOptions.config.url)
      expectType<HTTPMethods | HTTPMethods[]>(req.routeOptions.config.method)
      expectType<string>(res.routeOptions.config.foo)
      expectType<number>(res.routeOptions.config.bar)
      expectType<string>(req.routeOptions.config.url)
      expectType<HTTPMethods | HTTPMethods[]>(req.routeOptions.config.method)
    },
    preSerialization: (req, res, payload, done) => {
      expectType<BodyInterface>(req.body)
      expectType<QuerystringInterface>(req.query)
      expectType<ParamsInterface>(req.params)
      expectType<http.IncomingHttpHeaders & HeadersInterface>(req.headers)
      expectType<string>(req.routeOptions.config.foo)
      expectType<number>(req.routeOptions.config.bar)
      expectType<string>(req.routeOptions.config.url)
      expectType<HTTPMethods | HTTPMethods[]>(req.routeOptions.config.method)
      expectType<string>(res.routeOptions.config.foo)
      expectType<number>(res.routeOptions.config.bar)
      expectType<string>(req.routeOptions.config.url)
      expectType<HTTPMethods | HTTPMethods[]>(req.routeOptions.config.method)
    },
    onSend: (req, res, payload, done) => {
      expectType<BodyInterface>(req.body)
      expectType<QuerystringInterface>(req.query)
      expectType<ParamsInterface>(req.params)
      expectType<http.IncomingHttpHeaders & HeadersInterface>(req.headers)
      expectType<string>(req.routeOptions.config.foo)
      expectType<number>(req.routeOptions.config.bar)
      expectType<string>(req.routeOptions.config.url)
      expectType<HTTPMethods | HTTPMethods[]>(req.routeOptions.config.method)
      expectType<string>(res.routeOptions.config.foo)
      expectType<number>(res.routeOptions.config.bar)
      expectType<string>(req.routeOptions.config.url)
      expectType<HTTPMethods | HTTPMethods[]>(req.routeOptions.config.method)
    },
    handler: (req, res) => {
      expectType<BodyInterface>(req.body)
      expectType<QuerystringInterface>(req.query)
      expectType<ParamsInterface>(req.params)
      expectType<http.IncomingHttpHeaders & HeadersInterface>(req.headers)
      expectType<string>(req.routeOptions.config.foo)
      expectType<number>(req.routeOptions.config.bar)
      expectType<string>(req.routeOptions.config.url)
      expectType<HTTPMethods | HTTPMethods[]>(req.routeOptions.config.method)
      expectType<string>(res.routeOptions.config.foo)
      expectType<number>(res.routeOptions.config.bar)
      expectType<string>(req.routeOptions.config.url)
      expectType<HTTPMethods | HTTPMethods[]>(req.routeOptions.config.method)
    }
  })

  fastify().route<RouteGeneric>({
    url: '/',
    method: method as HTTPMethods,
    config: { foo: 'bar', bar: 100 },
    prefixTrailingSlash: 'slash',
    onRequest: async (req, res, done) => { // these handlers are tested in `hooks.test-d.ts`
      expectType<BodyInterface>(req.body)
      expectType<QuerystringInterface>(req.query)
      expectType<ParamsInterface>(req.params)
      expectType<http.IncomingHttpHeaders & HeadersInterface>(req.headers)
      expectType<string>(req.routeOptions.config.foo)
      expectType<number>(req.routeOptions.config.bar)
      expectType<string>(req.routeOptions.config.url)
      expectType<HTTPMethods | HTTPMethods[]>(req.routeOptions.config.method)
      expectType<string>(res.routeOptions.config.foo)
      expectType<number>(res.routeOptions.config.bar)
      expectType<string>(req.routeOptions.config.url)
      expectType<HTTPMethods | HTTPMethods[]>(req.routeOptions.config.method)
    },
    preParsing: async (req, res, payload, done) => {
      expectType<BodyInterface>(req.body)
      expectType<QuerystringInterface>(req.query)
      expectType<ParamsInterface>(req.params)
      expectType<http.IncomingHttpHeaders & HeadersInterface>(req.headers)
      expectType<string>(req.routeOptions.config.foo)
      expectType<number>(req.routeOptions.config.bar)
      expectType<string>(req.routeOptions.config.url)
      expectType<HTTPMethods | HTTPMethods[]>(req.routeOptions.config.method)
      expectType<string>(res.routeOptions.config.foo)
      expectType<number>(res.routeOptions.config.bar)
      expectType<string>(req.routeOptions.config.url)
      expectType<HTTPMethods | HTTPMethods[]>(req.routeOptions.config.method)
      expectType<RequestPayload>(payload)
      expectAssignable<(err?: FastifyError | null, res?: RequestPayload) => void>(done)
      expectAssignable<(err?: NodeJS.ErrnoException) => void>(done)
    },
    preValidation: async (req, res, done) => {
      expectType<BodyInterface>(req.body)
      expectType<QuerystringInterface>(req.query)
      expectType<ParamsInterface>(req.params)
      expectType<http.IncomingHttpHeaders & HeadersInterface>(req.headers)
      expectType<string>(req.routeOptions.config.foo)
      expectType<number>(req.routeOptions.config.bar)
      expectType<string>(req.routeOptions.config.url)
      expectType<HTTPMethods | HTTPMethods[]>(req.routeOptions.config.method)
      expectType<string>(res.routeOptions.config.foo)
      expectType<number>(res.routeOptions.config.bar)
      expectType<string>(req.routeOptions.config.url)
      expectType<HTTPMethods | HTTPMethods[]>(req.routeOptions.config.method)
    },
    preHandler: async (req, res, done) => {
      expectType<BodyInterface>(req.body)
      expectType<QuerystringInterface>(req.query)
      expectType<ParamsInterface>(req.params)
      expectType<http.IncomingHttpHeaders & HeadersInterface>(req.headers)
      expectType<string>(req.routeOptions.config.foo)
      expectType<number>(req.routeOptions.config.bar)
      expectType<string>(req.routeOptions.config.url)
      expectType<HTTPMethods | HTTPMethods[]>(req.routeOptions.config.method)
      expectType<string>(res.routeOptions.config.foo)
      expectType<number>(res.routeOptions.config.bar)
      expectType<string>(req.routeOptions.config.url)
      expectType<HTTPMethods | HTTPMethods[]>(req.routeOptions.config.method)
    },
    onResponse: async (req, res, done) => {
      expectType<BodyInterface>(req.body)
      expectType<QuerystringInterface>(req.query)
      expectType<ParamsInterface>(req.params)
      expectType<http.IncomingHttpHeaders & HeadersInterface>(req.headers)
      expectType<string>(req.routeOptions.config.foo)
      expectType<number>(req.routeOptions.config.bar)
      expectType<string>(req.routeOptions.config.url)
      expectType<HTTPMethods | HTTPMethods[]>(req.routeOptions.config.method)
      expectType<string>(res.routeOptions.config.foo)
      expectType<number>(res.routeOptions.config.bar)
      expectType<string>(req.routeOptions.config.url)
      expectType<HTTPMethods | HTTPMethods[]>(req.routeOptions.config.method)
      expectType<number>(res.statusCode)
    },
    onError: async (req, res, error, done) => {
      expectType<BodyInterface>(req.body)
      expectType<QuerystringInterface>(req.query)
      expectType<ParamsInterface>(req.params)
      expectType<http.IncomingHttpHeaders & HeadersInterface>(req.headers)
      expectType<string>(req.routeOptions.config.foo)
      expectType<number>(req.routeOptions.config.bar)
      expectType<string>(req.routeOptions.config.url)
      expectType<HTTPMethods | HTTPMethods[]>(req.routeOptions.config.method)
      expectType<string>(res.routeOptions.config.foo)
      expectType<number>(res.routeOptions.config.bar)
      expectType<string>(req.routeOptions.config.url)
      expectType<HTTPMethods | HTTPMethods[]>(req.routeOptions.config.method)
    },
    preSerialization: async (req, res, payload, done) => {
      expectType<BodyInterface>(req.body)
      expectType<QuerystringInterface>(req.query)
      expectType<ParamsInterface>(req.params)
      expectType<http.IncomingHttpHeaders & HeadersInterface>(req.headers)
      expectType<string>(req.routeOptions.config.foo)
      expectType<number>(req.routeOptions.config.bar)
      expectType<string>(req.routeOptions.config.url)
      expectType<HTTPMethods | HTTPMethods[]>(req.routeOptions.config.method)
      expectType<string>(res.routeOptions.config.foo)
      expectType<number>(res.routeOptions.config.bar)
      expectType<string>(req.routeOptions.config.url)
      expectType<HTTPMethods | HTTPMethods[]>(req.routeOptions.config.method)
    },
    onSend: async (req, res, payload, done) => {
      expectType<BodyInterface>(req.body)
      expectType<QuerystringInterface>(req.query)
      expectType<ParamsInterface>(req.params)
      expectType<http.IncomingHttpHeaders & HeadersInterface>(req.headers)
      expectType<string>(req.routeOptions.config.foo)
      expectType<number>(req.routeOptions.config.bar)
      expectType<string>(req.routeOptions.config.url)
      expectType<HTTPMethods | HTTPMethods[]>(req.routeOptions.config.method)
      expectType<string>(res.routeOptions.config.foo)
      expectType<number>(res.routeOptions.config.bar)
      expectType<string>(req.routeOptions.config.url)
      expectType<HTTPMethods | HTTPMethods[]>(req.routeOptions.config.method)
    },
    handler: (req, res) => {
      expectType<BodyInterface>(req.body)
      expectType<QuerystringInterface>(req.query)
      expectType<ParamsInterface>(req.params)
      expectType<http.IncomingHttpHeaders & HeadersInterface>(req.headers)
      expectType<string>(req.routeOptions.config.foo)
      expectType<number>(req.routeOptions.config.bar)
      expectType<string>(req.routeOptions.config.url)
      expectType<HTTPMethods | HTTPMethods[]>(req.routeOptions.config.method)
      expectType<string>(res.routeOptions.config.foo)
      expectType<number>(res.routeOptions.config.bar)
      expectType<string>(req.routeOptions.config.url)
      expectType<HTTPMethods | HTTPMethods[]>(req.routeOptions.config.method)
    }
  })
})

expectType<FastifyInstance>(fastify().route({
  url: '/',
  method: 'CONNECT', // not a valid method but could be implemented by the user
  handler: routeHandler
}))

expectType<FastifyInstance>(fastify().route({
  url: '/',
  method: 'OPTIONS',
  handler: routeHandler
}))

expectType<FastifyInstance>(fastify().route({
  url: '/',
  method: 'OPTION', // OPTION is a typo for OPTIONS
  handler: routeHandler
}))

expectType<FastifyInstance>(fastify().route({
  url: '/',
  method: ['GET', 'POST'],
  handler: routeHandler
}))

expectType<FastifyInstance>(fastify().route({
  url: '/',
  method: ['GET', 'POST', 'OPTION'], // OPTION is a typo for OPTIONS
  handler: routeHandler
}))

expectError(fastify().route({
  url: '/',
  method: 'GET',
  handler: routeHandler,
  schemaErrorFormatter: 500 // Not a valid formatter
}))

expectType<FastifyInstance>(fastify().route({
  url: '/',
  method: 'GET',
  handler: routeHandler,
  schemaErrorFormatter: (errors, dataVar) => new Error('')
}))

expectError(fastify().route({
  prefixTrailingSlash: true // Not a valid value
}))

expectType<FastifyInstance>(fastify().route({
  url: '/',
  method: 'GET',
  handler: routeHandlerWithReturnValue
}))

expectType<boolean>(fastify().hasRoute({
  url: '/',
  method: 'GET'
}))

expectType<boolean>(fastify().hasRoute({
  url: '/',
  method: 'GET',
  constraints: { version: '1.2.0' }
}))

expectType<boolean>(fastify().hasRoute({
  url: '/',
  method: 'GET',
  constraints: { host: 'auth.fastify.test' }
}))

expectType<boolean>(fastify().hasRoute({
  url: '/',
  method: 'GET',
  constraints: { host: /.*\.fastify\.test$/ }
}))

expectType<boolean>(fastify().hasRoute({
  url: '/',
  method: 'GET',
  constraints: { host: /.*\.fastify\.test$/, version: '1.2.3' }
}))

expectType<boolean>(fastify().hasRoute({
  url: '/',
  method: 'GET',
  constraints: {
    // constraints value should accept any value
    number: 12,
    date: new Date(),
    boolean: true,
    function: () => { },
    object: { foo: 'bar' }
  }
}))

expectType<Omit<FindMyWayFindResult<RawServerDefault>, 'store'>>(
  fastify().findRoute({
    url: '/',
    method: 'get'
  })
)

// we should not expose store
expectError(fastify().findRoute({
  url: '/',
  method: 'get'
}).store)

expectType<FastifyInstance>(fastify().route({
  url: '/',
  method: 'get',
  handler: routeHandlerWithReturnValue
}))

expectType<FastifyInstance>(fastify().route({
  url: '/',
  method: ['put', 'patch'],
  handler: routeHandlerWithReturnValue
}))

expectType<FastifyInstance>(fastify().route({
  url: '/',
  method: 'GET',
  handler: (req) => {
    expectType<HTTPMethods | HTTPMethods[]>(req.routeOptions.method)
    expectAssignable<string | Array<string>>(req.routeOptions.method)
  }
}))

expectType<FastifyInstance>(fastify().route({
  url: '/',
  method: ['HEAD', 'GET'],
  handler: (req) => {
    expectType<HTTPMethods | HTTPMethods[]>(req.routeOptions.method)
    expectAssignable<string | Array<string>>(req.routeOptions.method)
  }
}))
