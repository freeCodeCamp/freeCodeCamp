import { expectAssignable, expectError, expectType } from 'tsd'
import fastify, {
  ContextConfigDefault,
  FastifyContextConfig,
  FastifyLogFn,
  FastifySchema,
  FastifyTypeProviderDefault,
  RawReplyDefaultExpression,
  RawRequestDefaultExpression,
  RawServerDefault,
  RequestBodyDefault,
  RequestGenericInterface,
  RouteHandler,
  RouteHandlerMethod,
  SafePromiseLike
} from '../../fastify'
import { FastifyInstance } from '../../types/instance'
import { FastifyBaseLogger } from '../../types/logger'
import { FastifyReply } from '../../types/reply'
import { FastifyRequest, RequestRouteOptions } from '../../types/request'
import { FastifyRouteConfig, RouteGenericInterface } from '../../types/route'
import { RequestHeadersDefault, RequestParamsDefault, RequestQuerystringDefault } from '../../types/utils'

interface RequestBody {
  content: string;
}

interface RequestQuerystring {
  from: string;
}

interface RequestParams {
  id: number;
}

interface RequestHeaders {
  'x-foobar': string;
}

interface RequestData extends RequestGenericInterface {
  Body: RequestBody;
  Querystring: RequestQuerystring;
  Params: RequestParams;
  Headers: RequestHeaders;
}

type Handler = RouteHandler<RequestData>

type CustomRequest = FastifyRequest<{
  Body: RequestBody | undefined;
  Querystring: RequestQuerystring;
  Params: RequestParams;
  Headers: RequestHeaders;
}>

type HTTPRequestPart = 'body' | 'query' | 'querystring' | 'params' | 'headers'
type ExpectedGetValidationFunction = (input: { [key: string]: unknown }) => boolean

interface CustomLoggerInterface extends FastifyBaseLogger {
  foo: FastifyLogFn; // custom severity logger method
}

const getHandler: RouteHandler = function (request, _reply) {
  expectType<string>(request.url)
  expectType<string>(request.originalUrl)
  expectType<string>(request.method)
  expectType<Readonly<RequestRouteOptions>>(request.routeOptions)
  expectType<boolean>(request.is404)
  expectType<string>(request.hostname)
  expectType<string>(request.host)
  expectType<number | null>(request.port)
  expectType<string>(request.ip)
  expectType<string[] | undefined>(request.ips)
  expectType<RawRequestDefaultExpression>(request.raw)
  expectType<RequestBodyDefault>(request.body)
  expectType<RequestParamsDefault>(request.params)
  expectType<ContextConfigDefault & FastifyRouteConfig & FastifyContextConfig>(request.routeOptions.config)
  expectType<FastifySchema | undefined>(request.routeOptions.schema)
  expectType<RouteHandlerMethod>(request.routeOptions.handler)
  expectType<string | undefined>(request.routeOptions.url)
  expectType<string | undefined>(request.routeOptions.version)

  expectType<RequestHeadersDefault & RawRequestDefaultExpression['headers']>(request.headers)
  request.headers = {}

  expectType<RequestQuerystringDefault>(request.query)
  expectType<string>(request.id)
  expectType<FastifyBaseLogger>(request.log)
  expectType<RawRequestDefaultExpression['socket']>(request.socket)
  expectType<AbortSignal>(request.signal)
  expectType<Error & { validation: any; validationContext: string } | undefined>(request.validationError)
  expectType<FastifyInstance>(request.server)
  expectAssignable<(httpPart: HTTPRequestPart) => ExpectedGetValidationFunction>(request.getValidationFunction)
  expectAssignable<(schema: { [key: string]: unknown }) => ExpectedGetValidationFunction>(request.getValidationFunction)
  expectAssignable<
          (input: { [key: string]: unknown }, schema: { [key: string]: unknown }, httpPart?: HTTPRequestPart) => boolean
            >(request.validateInput)
  expectAssignable<(input: { [key: string]: unknown }, httpPart?: HTTPRequestPart) => boolean>(request.validateInput)
  expectType<string>(request.getDecorator<string>('foo'))
  expectType<void>(request.setDecorator('foo', 'hello'))
  expectType<void>(request.setDecorator<string>('foo', 'hello'))
  expectError(request.setDecorator<string>('foo', true))
}

const getHandlerWithCustomLogger: RouteHandlerMethod<
  RawServerDefault,
  RawRequestDefaultExpression,
  RawReplyDefaultExpression,
  RouteGenericInterface,
  ContextConfigDefault,
  FastifySchema,
  FastifyTypeProviderDefault,
  CustomLoggerInterface
> = function (request, _reply) {
  expectType<CustomLoggerInterface>(request.log)
}

const postHandler: Handler = function (request) {
  expectType<RequestBody>(request.body)
  expectType<RequestParams>(request.params)
  expectType<RequestHeaders & RawRequestDefaultExpression['headers']>(
    request.headers
  )
  expectType<RequestQuerystring>(request.query)
  expectType<string>(request.body.content)
  expectType<string>(request.query.from)
  expectType<number>(request.params.id)
  expectType<string>(request.headers['x-foobar'])
  expectType<FastifyInstance>(request.server)
  expectType<FastifyContextConfig & FastifyRouteConfig>(request.routeOptions.config)
}

function putHandler (request: CustomRequest, reply: FastifyReply) {
  expectType<RequestBody | undefined>(request.body)
  expectType<RequestParams>(request.params)
  expectType<RequestHeaders & RawRequestDefaultExpression['headers']>(request.headers)
  expectType<RequestQuerystring>(request.query)
  if (request.body === undefined) {
    expectType<undefined>(request.body)
  } else {
    expectType<string>(request.body.content)
  }
  expectType<string>(request.query.from)
  expectType<number>(request.params.id)
  expectType<string>(request.headers['x-foobar'])
  expectType<FastifyInstance>(request.server)
  expectType<ContextConfigDefault & FastifyRouteConfig & FastifyContextConfig>(request.routeOptions.config)
}

const server = fastify()
server.get('/get', getHandler)
server.post('/post', postHandler)
server.put('/put', putHandler)

const customLogger: CustomLoggerInterface = {
  level: 'info',
  silent: () => { },
  info: () => { },
  warn: () => { },
  error: () => { },
  fatal: () => { },
  trace: () => { },
  debug: () => { },
  foo: () => { }, // custom severity logger method
  child: () => customLogger
}

const serverWithCustomLogger = fastify({ loggerInstance: customLogger })
expectError<
FastifyInstance<RawServerDefault, RawRequestDefaultExpression, RawReplyDefaultExpression, CustomLoggerInterface>
& Promise<
  FastifyInstance<RawServerDefault, RawRequestDefaultExpression, RawReplyDefaultExpression, CustomLoggerInterface>
>
>(serverWithCustomLogger)
expectAssignable<
FastifyInstance<RawServerDefault, RawRequestDefaultExpression, RawReplyDefaultExpression, CustomLoggerInterface>
& PromiseLike<
  FastifyInstance<RawServerDefault, RawRequestDefaultExpression, RawReplyDefaultExpression, CustomLoggerInterface>
>
>(serverWithCustomLogger)
expectType<
FastifyInstance<RawServerDefault, RawRequestDefaultExpression, RawReplyDefaultExpression, CustomLoggerInterface>
& SafePromiseLike<
  FastifyInstance<RawServerDefault, RawRequestDefaultExpression, RawReplyDefaultExpression, CustomLoggerInterface>
>
>(serverWithCustomLogger)

serverWithCustomLogger.get('/get', getHandlerWithCustomLogger)
