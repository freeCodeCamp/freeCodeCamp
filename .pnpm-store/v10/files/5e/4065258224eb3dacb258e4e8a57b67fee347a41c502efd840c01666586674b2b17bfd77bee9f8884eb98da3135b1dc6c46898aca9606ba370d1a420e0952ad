import { FastifyError } from '@fastify/error'
import { ConstraintStrategy } from 'find-my-way'
import { FastifyContextConfig } from './context'
import {
  onErrorHookHandler,
  onRequestAbortHookHandler,
  onRequestHookHandler,
  onResponseHookHandler,
  onSendHookHandler,
  onTimeoutHookHandler,
  preHandlerHookHandler,
  preParsingHookHandler,
  preSerializationHookHandler,
  preValidationHookHandler
} from './hooks'
import { FastifyInstance } from './instance'
import { FastifyBaseLogger, FastifyChildLoggerFactory, LogLevel } from './logger'
import { FastifyReply, ReplyGenericInterface } from './reply'
import { FastifyRequest, RequestGenericInterface } from './request'
import { FastifySchema, FastifySchemaCompiler, FastifySerializerCompiler, SchemaErrorFormatter } from './schema'
import {
  FastifyTypeProvider,
  FastifyTypeProviderDefault,
  ResolveFastifyReplyReturnType
} from './type-provider'
import { ContextConfigDefault, HTTPMethods, RawReplyDefaultExpression, RawRequestDefaultExpression, RawServerBase, RawServerDefault } from './utils'

export interface FastifyRouteConfig {
  url: string;
  method: HTTPMethods | HTTPMethods[];
}

export interface RouteGenericInterface extends RequestGenericInterface, ReplyGenericInterface { }

export type RouteConstraintType = Omit<ConstraintStrategy<any>, 'deriveConstraint'> & {
  deriveConstraint<Context>(req: RawRequestDefaultExpression<RawServerDefault>, ctx?: Context, done?: (err: Error, ...args: any) => any): any,
}

export interface RouteConstraint {
  version?: string
  host?: RegExp | string
  [name: string]: unknown
}

/**
 * Route shorthand options for the various shorthand methods
 */
type RouteShorthandHook<T extends (...args: any) => any> = (...args: Parameters<T>) => void | Promise<unknown>

export interface RouteShorthandOptions<
  RawServer extends RawServerBase = RawServerDefault,
  RawRequest extends RawRequestDefaultExpression<RawServer> = RawRequestDefaultExpression<RawServer>,
  RawReply extends RawReplyDefaultExpression<RawServer> = RawReplyDefaultExpression<RawServer>,
  RouteGeneric extends RouteGenericInterface = RouteGenericInterface,
  ContextConfig = ContextConfigDefault,
  SchemaCompiler extends FastifySchema = FastifySchema,
  TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault,
  Logger extends FastifyBaseLogger = FastifyBaseLogger
> {
  schema?: SchemaCompiler, // originally FastifySchema
  attachValidation?: boolean;
  exposeHeadRoute?: boolean;

  validatorCompiler?: FastifySchemaCompiler<NoInfer<SchemaCompiler>>;
  serializerCompiler?: FastifySerializerCompiler<NoInfer<SchemaCompiler>>;
  bodyLimit?: number;
  handlerTimeout?: number;
  logLevel?: LogLevel;
  config?: FastifyContextConfig & ContextConfig;
  constraints?: RouteConstraint,
  prefixTrailingSlash?: 'slash' | 'no-slash' | 'both';
  errorHandler?: (
    this: FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>,
    error: FastifyError,
    request: FastifyRequest<RouteGeneric, RawServer, RawRequest, NoInfer<SchemaCompiler>, TypeProvider, ContextConfig, Logger>,
    reply: FastifyReply<RouteGeneric, RawServer, RawRequest, RawReply, ContextConfig, NoInfer<SchemaCompiler>, TypeProvider>
  ) => void;
  childLoggerFactory?: FastifyChildLoggerFactory<RawServer, RawRequest, RawReply, Logger, TypeProvider>;
  schemaErrorFormatter?: SchemaErrorFormatter;

  // hooks
  onRequest?: RouteShorthandHook<onRequestHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, NoInfer<SchemaCompiler>, TypeProvider, Logger>>
  | RouteShorthandHook<onRequestHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, NoInfer<SchemaCompiler>, TypeProvider, Logger>>[];
  preParsing?: RouteShorthandHook<preParsingHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, NoInfer<SchemaCompiler>, TypeProvider, Logger>>
  | RouteShorthandHook<preParsingHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, NoInfer<SchemaCompiler>, TypeProvider, Logger>>[];
  preValidation?: RouteShorthandHook<preValidationHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, NoInfer<SchemaCompiler>, TypeProvider, Logger>>
  | RouteShorthandHook<preValidationHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, NoInfer<SchemaCompiler>, TypeProvider, Logger>>[];
  preHandler?: RouteShorthandHook<preHandlerHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, NoInfer<SchemaCompiler>, TypeProvider, Logger>>
  | RouteShorthandHook<preHandlerHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, NoInfer<SchemaCompiler>, TypeProvider, Logger>>[];
  preSerialization?: RouteShorthandHook<preSerializationHookHandler<unknown, RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, NoInfer<SchemaCompiler>, TypeProvider, Logger>>
  | RouteShorthandHook<preSerializationHookHandler<unknown, RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, NoInfer<SchemaCompiler>, TypeProvider, Logger>>[];
  onSend?: RouteShorthandHook<onSendHookHandler<unknown, RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, NoInfer<SchemaCompiler>, TypeProvider, Logger>>
  | RouteShorthandHook<onSendHookHandler<unknown, RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, NoInfer<SchemaCompiler>, TypeProvider, Logger>>[];
  onResponse?: RouteShorthandHook<onResponseHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, NoInfer<SchemaCompiler>, TypeProvider, Logger>>
  | RouteShorthandHook<onResponseHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, NoInfer<SchemaCompiler>, TypeProvider, Logger>>[];
  onTimeout?: RouteShorthandHook<onTimeoutHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, NoInfer<SchemaCompiler>, TypeProvider, Logger>>
  | RouteShorthandHook<onTimeoutHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, NoInfer<SchemaCompiler>, TypeProvider, Logger>>[];
  onError?: RouteShorthandHook<onErrorHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, FastifyError, NoInfer<SchemaCompiler>, TypeProvider, Logger>>
  | RouteShorthandHook<onErrorHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, FastifyError, NoInfer<SchemaCompiler>, TypeProvider, Logger>>[];
  onRequestAbort?: RouteShorthandHook<onRequestAbortHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, NoInfer<SchemaCompiler>, TypeProvider, Logger>>
  | RouteShorthandHook<onRequestAbortHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, NoInfer<SchemaCompiler>, TypeProvider, Logger>>[];
}
/**
 * Route handler method declaration.
 */
export type RouteHandlerMethod<
  RawServer extends RawServerBase = RawServerDefault,
  RawRequest extends RawRequestDefaultExpression<RawServer> = RawRequestDefaultExpression<RawServer>,
  RawReply extends RawReplyDefaultExpression<RawServer> = RawReplyDefaultExpression<RawServer>,
  RouteGeneric extends RouteGenericInterface = RouteGenericInterface,
  ContextConfig = ContextConfigDefault,
  SchemaCompiler extends FastifySchema = FastifySchema,
  TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault,
  Logger extends FastifyBaseLogger = FastifyBaseLogger
> = (
  this: FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>,
  request: FastifyRequest<RouteGeneric, RawServer, RawRequest, SchemaCompiler, TypeProvider, ContextConfig, Logger>,
  reply: FastifyReply<RouteGeneric, RawServer, RawRequest, RawReply, ContextConfig, SchemaCompiler, TypeProvider>
  // This return type used to be a generic type argument. Due to TypeScript's inference of return types, this rendered returns unchecked.
) => ResolveFastifyReplyReturnType<TypeProvider, SchemaCompiler, RouteGeneric>

/**
 * Shorthand options including the handler function property
 */
export interface RouteShorthandOptionsWithHandler<
  RawServer extends RawServerBase = RawServerDefault,
  RawRequest extends RawRequestDefaultExpression<RawServer> = RawRequestDefaultExpression<RawServer>,
  RawReply extends RawReplyDefaultExpression<RawServer> = RawReplyDefaultExpression<RawServer>,
  RouteGeneric extends RouteGenericInterface = RouteGenericInterface,
  ContextConfig = ContextConfigDefault,
  SchemaCompiler extends FastifySchema = FastifySchema,
  TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault,
  Logger extends FastifyBaseLogger = FastifyBaseLogger
> extends RouteShorthandOptions<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger> {
  handler: RouteHandlerMethod<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, NoInfer<SchemaCompiler>, TypeProvider, Logger>;
}

/**
 * Fastify Router Shorthand method type that is similar to the Express/Restify approach
 */
export interface RouteShorthandMethod<
  RawServer extends RawServerBase = RawServerDefault,
  RawRequest extends RawRequestDefaultExpression<RawServer> = RawRequestDefaultExpression<RawServer>,
  RawReply extends RawReplyDefaultExpression<RawServer> = RawReplyDefaultExpression<RawServer>,
  TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault,
  Logger extends FastifyBaseLogger = FastifyBaseLogger
> {
  <RouteGeneric extends RouteGenericInterface = RouteGenericInterface, ContextConfig = ContextConfigDefault, const SchemaCompiler extends FastifySchema = FastifySchema>(
    path: string,
    opts: RouteShorthandOptions<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>,
    handler: RouteHandlerMethod<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>
  ): FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>;
  <RouteGeneric extends RouteGenericInterface = RouteGenericInterface, ContextConfig = ContextConfigDefault, const SchemaCompiler extends FastifySchema = FastifySchema>(
    path: string,
    handler: RouteHandlerMethod<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>
  ): FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>;
  <RouteGeneric extends RouteGenericInterface = RouteGenericInterface, ContextConfig = ContextConfigDefault, const SchemaCompiler extends FastifySchema = FastifySchema>(
    path: string,
    opts: RouteShorthandOptionsWithHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>
  ): FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>;
}

/**
 * Fastify route method options.
 */
export interface RouteOptions<
  RawServer extends RawServerBase = RawServerDefault,
  RawRequest extends RawRequestDefaultExpression<RawServer> = RawRequestDefaultExpression<RawServer>,
  RawReply extends RawReplyDefaultExpression<RawServer> = RawReplyDefaultExpression<RawServer>,
  RouteGeneric extends RouteGenericInterface = RouteGenericInterface,
  ContextConfig = ContextConfigDefault,
  SchemaCompiler extends FastifySchema = FastifySchema,
  TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault,
  Logger extends FastifyBaseLogger = FastifyBaseLogger
> extends RouteShorthandOptions<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger> {
  method: HTTPMethods | HTTPMethods[];
  url: string;
  handler: RouteHandlerMethod<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>;
}

export type RouteHandler<
  RouteGeneric extends RouteGenericInterface = RouteGenericInterface,
  RawServer extends RawServerBase = RawServerDefault,
  RawRequest extends RawRequestDefaultExpression<RawServer> = RawRequestDefaultExpression<RawServer>,
  RawReply extends RawReplyDefaultExpression<RawServer> = RawReplyDefaultExpression<RawServer>,
  ContextConfig = ContextConfigDefault,
  SchemaCompiler extends FastifySchema = FastifySchema,
  TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault,
  Logger extends FastifyBaseLogger = FastifyBaseLogger
> = (
  this: FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>,
  request: FastifyRequest<RouteGeneric, RawServer, RawRequest, SchemaCompiler, TypeProvider, ContextConfig, Logger>,
  reply: FastifyReply<RouteGeneric, RawServer, RawRequest, RawReply, ContextConfig, SchemaCompiler, TypeProvider>
) => RouteGeneric['Reply'] | void | Promise<RouteGeneric['Reply'] | void>

export type DefaultRoute<Request, Reply> = (
  req: Request,
  res: Reply,
) => void
