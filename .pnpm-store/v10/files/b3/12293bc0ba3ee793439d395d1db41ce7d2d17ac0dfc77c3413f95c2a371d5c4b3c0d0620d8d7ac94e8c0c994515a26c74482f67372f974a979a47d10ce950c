import { ErrorObject } from '@fastify/ajv-compiler'
import { FastifyContextConfig } from './context'
import { FastifyInstance } from './instance'
import { FastifyBaseLogger } from './logger'
import { FastifyRouteConfig, RouteGenericInterface, RouteHandlerMethod } from './route'
import { FastifySchema } from './schema'
import { FastifyRequestType, FastifyTypeProvider, FastifyTypeProviderDefault, ResolveFastifyRequestType } from './type-provider'
import { ContextConfigDefault, HTTPMethods, RawRequestDefaultExpression, RawServerBase, RawServerDefault, RequestBodyDefault, RequestHeadersDefault, RequestParamsDefault, RequestQuerystringDefault } from './utils'

type HTTPRequestPart = 'body' | 'query' | 'querystring' | 'params' | 'headers'
export interface RequestGenericInterface {
  Body?: RequestBodyDefault;
  Querystring?: RequestQuerystringDefault;
  Params?: RequestParamsDefault;
  Headers?: RequestHeadersDefault;
}

export interface ValidationFunction {
  (input: any): boolean
  errors?: null | ErrorObject[];
}

export interface RequestRouteOptions<ContextConfig = ContextConfigDefault, SchemaCompiler = FastifySchema> {
  method: HTTPMethods | HTTPMethods[];
  // `url` can be `undefined` for instance when `request.is404` is true
  url: string | undefined;
  bodyLimit: number;
  handlerTimeout: number;
  attachValidation: boolean;
  logLevel: string;
  exposeHeadRoute: boolean;
  prefixTrailingSlash: string;
  config: FastifyContextConfig & FastifyRouteConfig & ContextConfig;
  schema?: SchemaCompiler; // it is empty for 404 requests
  handler: RouteHandlerMethod;
  version?: string;
}

/**
 * FastifyRequest is an instance of the standard http or http2 request objects.
 * It defaults to http.IncomingMessage, and it also extends the relative request object.
 */
export interface FastifyRequest<RouteGeneric extends RouteGenericInterface = RouteGenericInterface,
  RawServer extends RawServerBase = RawServerDefault,
  RawRequest extends RawRequestDefaultExpression<RawServer> = RawRequestDefaultExpression<RawServer>,
  SchemaCompiler extends FastifySchema = FastifySchema,
  TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault,
  ContextConfig = ContextConfigDefault,
  Logger extends FastifyBaseLogger = FastifyBaseLogger,
  RequestType extends FastifyRequestType = ResolveFastifyRequestType<TypeProvider, SchemaCompiler, RouteGeneric>
// ^ Temporary Note: RequestType has been re-ordered to be the last argument in
//   generic list. This generic argument is now considered optional as it can be
//   automatically inferred from the SchemaCompiler, RouteGeneric and TypeProvider
//   arguments. Implementations that already pass this argument can either omit
//   the RequestType (preferred) or swap Logger and RequestType arguments when
//   creating custom types of FastifyRequest. Related issue #4123
> {
  id: string;
  params: RequestType['params']; // deferred inference
  raw: RawRequest;
  query: RequestType['query'];
  headers: RawRequest['headers'] & RequestType['headers']; // this enables the developer to extend the existing http(s|2) headers list
  log: Logger;
  server: FastifyInstance;
  body: RequestType['body'];

  /** in order for this to be used the user should ensure they have set the attachValidation option. */
  validationError?: Error & { validation: any; validationContext: string };

  /**
   * @deprecated Use `raw` property
   */
  readonly req: RawRequest & RouteGeneric['Headers']; // this enables the developer to extend the existing http(s|2) headers list
  readonly ip: string;
  readonly ips?: string[];
  readonly host: string;
  readonly port: number | null;
  readonly hostname: string;
  readonly url: string;
  readonly originalUrl: string;
  readonly protocol: 'http' | 'https';
  readonly method: string;
  readonly routeOptions: Readonly<RequestRouteOptions<ContextConfig, SchemaCompiler>>
  readonly is404: boolean;
  readonly socket: RawRequest['socket'];
  readonly signal: AbortSignal;

  getValidationFunction(httpPart: HTTPRequestPart): ValidationFunction
  getValidationFunction(schema: { [key: string]: any }): ValidationFunction
  compileValidationSchema(schema: { [key: string]: any }, httpPart?: HTTPRequestPart): ValidationFunction
  validateInput(input: any, schema: { [key: string]: any }, httpPart?: HTTPRequestPart): boolean
  validateInput(input: any, httpPart?: HTTPRequestPart): boolean
  getDecorator<T>(name: string | symbol): T;
  setDecorator<T = unknown>(name: string | symbol, value: T): void;
}
