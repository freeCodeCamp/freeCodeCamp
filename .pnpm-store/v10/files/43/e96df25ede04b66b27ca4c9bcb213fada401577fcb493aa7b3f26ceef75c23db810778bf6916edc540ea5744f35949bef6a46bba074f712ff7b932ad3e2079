import Ajv, { ErrorObject as AjvErrorObject } from 'ajv'
import * as http from 'node:http'
import * as http2 from 'node:http2'
import * as https from 'node:https'
import { Socket } from 'node:net'
import { expectAssignable, expectError, expectNotAssignable, expectType } from 'tsd'
import fastify, {
  ConnectionError,
  FastifyBaseLogger,
  FastifyError,
  FastifyErrorCodes,
  FastifyInstance,
  FastifyPlugin,
  FastifyPluginAsync,
  FastifyPluginCallback,
  InjectOptions,
  LightMyRequestCallback,
  LightMyRequestChain,
  LightMyRequestResponse,
  RawRequestDefaultExpression,
  RouteGenericInterface,
  SafePromiseLike
} from '../../fastify'
import { Bindings, ChildLoggerOptions } from '../../types/logger'

// FastifyInstance
// http server
expectError<
  FastifyInstance<http.Server, http.IncomingMessage, http.ServerResponse> &
  Promise<FastifyInstance<http.Server, http.IncomingMessage, http.ServerResponse>>
>(fastify())
expectAssignable<
  FastifyInstance<http.Server, http.IncomingMessage, http.ServerResponse> &
  PromiseLike<FastifyInstance<http.Server, http.IncomingMessage, http.ServerResponse>>
>(fastify())
expectType<
  FastifyInstance<http.Server, http.IncomingMessage, http.ServerResponse> &
  SafePromiseLike<FastifyInstance<http.Server, http.IncomingMessage, http.ServerResponse>>
>(fastify())
expectType<
  FastifyInstance<http.Server, http.IncomingMessage, http.ServerResponse> &
  SafePromiseLike<FastifyInstance<http.Server, http.IncomingMessage, http.ServerResponse>>
>(fastify({}))
expectType<
  FastifyInstance<http.Server, http.IncomingMessage, http.ServerResponse> &
  SafePromiseLike<FastifyInstance<http.Server, http.IncomingMessage, http.ServerResponse>>
>(fastify({ http: {} }))
// https server
expectType<
  FastifyInstance<https.Server, http.IncomingMessage, http.ServerResponse> &
  SafePromiseLike<FastifyInstance<https.Server, http.IncomingMessage, http.ServerResponse>>
>(fastify({ https: {} }))
expectType<
  FastifyInstance<https.Server, http.IncomingMessage, http.ServerResponse> &
  SafePromiseLike<FastifyInstance<https.Server, http.IncomingMessage, http.ServerResponse>>
>(fastify({ https: null }))
// http2 server
expectType<
  FastifyInstance<http2.Http2Server, http2.Http2ServerRequest, http2.Http2ServerResponse> &
  SafePromiseLike<FastifyInstance<http2.Http2Server, http2.Http2ServerRequest, http2.Http2ServerResponse>>
>(fastify({ http2: true, http2SessionTimeout: 1000 }))
expectType<
  FastifyInstance<http2.Http2SecureServer, http2.Http2ServerRequest, http2.Http2ServerResponse> &
  SafePromiseLike<FastifyInstance<http2.Http2SecureServer, http2.Http2ServerRequest, http2.Http2ServerResponse>>
>(fastify({ http2: true, https: {}, http2SessionTimeout: 1000 }))
expectType<LightMyRequestChain>(fastify({ http2: true, https: {} }).inject())
expectType<
  FastifyInstance<http.Server, http.IncomingMessage, http.ServerResponse> &
  SafePromiseLike<FastifyInstance<http.Server, http.IncomingMessage, http.ServerResponse>>
>(fastify({ schemaController: {} }))
expectType<
  FastifyInstance<http.Server, http.IncomingMessage, http.ServerResponse> &
  SafePromiseLike<FastifyInstance<http.Server, http.IncomingMessage, http.ServerResponse>>
>(
  fastify({
    schemaController: {
      compilersFactory: {}
    }
  })
)

expectError(fastify<http2.Http2Server>({ http2: false })) // http2 option must be true
expectError(fastify<http2.Http2SecureServer>({ http2: false })) // http2 option must be true
expectError(
  fastify({
    schemaController: {
      bucket: () => ({}) // cannot be empty
    }
  })
)

// light-my-request
expectAssignable<InjectOptions>({ query: '' })
fastify({ http2: true, https: {} }).inject().then((resp) => {
  expectAssignable<LightMyRequestResponse>(resp)
})
const lightMyRequestCallback: LightMyRequestCallback = (
  err: Error | undefined,
  response: LightMyRequestResponse | undefined
) => {
  if (err) throw err
}
fastify({ http2: true, https: {} }).inject({}, lightMyRequestCallback)

// server options
expectAssignable<
  FastifyInstance<http2.Http2Server, http2.Http2ServerRequest, http2.Http2ServerResponse>
>(fastify({ http2: true }))
expectAssignable<FastifyInstance>(fastify({ ignoreTrailingSlash: true }))
expectAssignable<FastifyInstance>(fastify({ ignoreDuplicateSlashes: true }))
expectAssignable<FastifyInstance>(fastify({ connectionTimeout: 1000 }))
expectAssignable<FastifyInstance>(fastify({ forceCloseConnections: true }))
expectAssignable<FastifyInstance>(fastify({ keepAliveTimeout: 1000 }))
expectAssignable<FastifyInstance>(fastify({ pluginTimeout: 1000 }))
expectAssignable<FastifyInstance>(fastify({ bodyLimit: 100 }))
expectAssignable<FastifyInstance>(fastify({ handlerTimeout: 5000 }))
expectAssignable<FastifyInstance>(fastify({ maxParamLength: 100 }))
expectAssignable<FastifyInstance>(fastify({ disableRequestLogging: true }))
expectAssignable<FastifyInstance>(fastify({ disableRequestLogging: (req) => req.url?.includes('/health') ?? false }))
expectAssignable<FastifyInstance>(fastify({ requestIdLogLabel: 'request-id' }))
expectAssignable<FastifyInstance>(fastify({ onProtoPoisoning: 'error' }))
expectAssignable<FastifyInstance>(fastify({ onConstructorPoisoning: 'error' }))
expectAssignable<FastifyInstance>(fastify({ serializerOpts: { rounding: 'ceil' } }))
expectAssignable<FastifyInstance>(
  fastify({ serializerOpts: { ajv: { missingRefs: 'ignore' } } })
)
expectAssignable<FastifyInstance>(fastify({ serializerOpts: { schema: {} } }))
expectAssignable<FastifyInstance>(fastify({ serializerOpts: { otherProp: {} } }))
expectAssignable<
  FastifyInstance<http.Server, http.IncomingMessage, http.ServerResponse, FastifyBaseLogger>
>(fastify({ logger: true }))
expectAssignable<
  FastifyInstance<http.Server, http.IncomingMessage, http.ServerResponse, FastifyBaseLogger>
>(fastify({ logger: true }))
expectAssignable<FastifyInstance<http.Server, http.IncomingMessage, http.ServerResponse, FastifyBaseLogger>>(fastify({
  logger: {
    level: 'info',
    genReqId: () => 'request-id',
    serializers: {
      req: () => {
        return {
          method: 'GET',
          url: '/',
          version: '1.0.0',
          host: 'localhost',
          remoteAddress: '127.0.0.1',
          remotePort: 3000
        }
      },
      res: () => {
        return {
          statusCode: 200
        }
      },
      err: () => {
        return {
          type: 'Error',
          message: 'foo',
          stack: ''
        }
      }
    }
  }
}))
const customLogger = {
  level: 'info',
  info: () => { },
  warn: () => { },
  error: () => { },
  fatal: () => { },
  trace: () => { },
  debug: () => { },
  child: () => customLogger
}
expectAssignable<
  FastifyInstance<http.Server, http.IncomingMessage, http.ServerResponse, FastifyBaseLogger>
>(fastify({ logger: customLogger }))
expectAssignable<FastifyInstance>(fastify({ serverFactory: () => http.createServer() }))
expectAssignable<FastifyInstance>(fastify({ caseSensitive: true }))
expectAssignable<FastifyInstance>(fastify({ requestIdHeader: 'request-id' }))
expectAssignable<FastifyInstance>(fastify({ requestIdHeader: false }))
expectAssignable<FastifyInstance>(fastify({
  genReqId: (req) => {
    expectType<RawRequestDefaultExpression>(req)
    return 'foo'
  }
}))
expectAssignable<FastifyInstance>(fastify({ trustProxy: true }))
expectAssignable<FastifyInstance>(fastify({ querystringParser: () => ({ foo: 'bar' }) }))
expectAssignable<FastifyInstance>(fastify({ querystringParser: () => ({ foo: { bar: 'fuzz' } }) }))
expectAssignable<FastifyInstance>(fastify({ querystringParser: () => ({ foo: ['bar', 'fuzz'] }) }))
expectAssignable<FastifyInstance>(fastify({ constraints: {} }))
expectAssignable<FastifyInstance>(fastify({
  constraints: {
    version: {
      name: 'version',
      storage: () => ({
        get: () => () => { },
        set: () => { },
        del: () => { },
        empty: () => { }
      }),
      validate () { },
      deriveConstraint: () => 'foo'
    },
    host: {
      name: 'host',
      storage: () => ({
        get: () => () => { },
        set: () => { },
        del: () => { },
        empty: () => { }
      }),
      validate () { },
      deriveConstraint: () => 'foo'
    },
    withObjectValue: {
      name: 'withObjectValue',
      storage: () => ({
        get: () => () => { },
        set: () => { },
        del: () => { },
        empty: () => { }
      }),
      validate () { },
      deriveConstraint: () => { }

    }
  }
}))
expectAssignable<FastifyInstance>(fastify({ return503OnClosing: true }))
expectAssignable<FastifyInstance>(fastify({
  ajv: {
    customOptions: {
      removeAdditional: 'all'
    },
    plugins: [(ajv: Ajv): Ajv => ajv]
  }
}))
expectAssignable<FastifyInstance>(fastify({
  ajv: {
    plugins: [[(ajv: Ajv): Ajv => ajv, ['keyword1', 'keyword2']]]
  }
}))
expectError(fastify({
  ajv: {
    customOptions: {
      removeAdditional: 'all'
    },
    plugins: [
      () => {
        // error, plugins always return the Ajv instance fluently
      }
    ]
  }
}))
expectAssignable<FastifyInstance>(fastify({
  ajv: {
    onCreate: (ajvInstance) => {
      expectType<Ajv>(ajvInstance)
      return ajvInstance
    }
  }
}))
expectAssignable<FastifyInstance>(fastify({ frameworkErrors: () => { } }))
expectAssignable<FastifyInstance>(fastify({
  rewriteUrl: function (req) {
    this.log.debug('rewrite url')
    return req.url === '/hi' ? '/hello' : req.url!
  }
}))
expectAssignable<FastifyInstance>(fastify({
  schemaErrorFormatter: (errors, dataVar) => {
    console.log(
      errors[0].keyword.toLowerCase(),
      errors[0].message?.toLowerCase(),
      errors[0].params,
      errors[0].instancePath.toLowerCase(),
      errors[0].schemaPath.toLowerCase()
    )
    return new Error()
  }
}))
expectAssignable<FastifyInstance>(fastify({
  clientErrorHandler: (err, socket) => {
    expectType<ConnectionError>(err)
    expectType<Socket>(socket)
  }
}))

expectAssignable<FastifyInstance>(fastify({
  childLoggerFactory: function (
    this: FastifyInstance,
    logger: FastifyBaseLogger,
    bindings: Bindings,
    opts: ChildLoggerOptions,
    req: RawRequestDefaultExpression
  ) {
    expectType<FastifyBaseLogger>(logger)
    expectType<Bindings>(bindings)
    expectType<ChildLoggerOptions>(opts)
    expectType<RawRequestDefaultExpression>(req)
    expectAssignable<FastifyInstance>(this)
    return logger.child(bindings, opts)
  }
}))

// Thenable
expectAssignable<PromiseLike<FastifyInstance>>(fastify({ return503OnClosing: true }))
fastify().then(fastifyInstance => expectAssignable<FastifyInstance>(fastifyInstance))

expectAssignable<FastifyPluginAsync>(async () => { })
expectAssignable<FastifyPluginCallback>(() => { })
expectAssignable<FastifyPlugin>(() => { })

const ajvErrorObject: AjvErrorObject = {
  keyword: '',
  instancePath: '',
  schemaPath: '',
  params: {},
  message: ''
}
expectNotAssignable<AjvErrorObject>({
  keyword: '',
  instancePath: '',
  schemaPath: '',
  params: '',
  message: ''
})

expectAssignable<FastifyError['validation']>([ajvErrorObject])
expectAssignable<FastifyError['validationContext']>('body')
expectAssignable<FastifyError['validationContext']>('headers')
expectAssignable<FastifyError['validationContext']>('params')
expectAssignable<FastifyError['validationContext']>('querystring')

const routeGeneric: RouteGenericInterface = {}
expectType<unknown>(routeGeneric.Body)
expectType<unknown>(routeGeneric.Headers)
expectType<unknown>(routeGeneric.Params)
expectType<unknown>(routeGeneric.Querystring)
expectType<unknown>(routeGeneric.Reply)

// ErrorCodes
expectType<FastifyErrorCodes>(fastify.errorCodes)

fastify({ allowUnsafeRegex: true })
fastify({ allowUnsafeRegex: false })
expectError(fastify({ allowUnsafeRegex: 'invalid' }))

expectAssignable<FastifyInstance>(fastify({ allowErrorHandlerOverride: true }))
expectAssignable<FastifyInstance>(fastify({ allowErrorHandlerOverride: false }))
