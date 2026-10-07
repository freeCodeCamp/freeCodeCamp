import * as http from 'node:http'
import * as http2 from 'node:http2'
import * as https from 'node:https'
import { Socket } from 'node:net'

import { BuildCompilerFromPool, ValidatorFactory } from '@fastify/ajv-compiler'
import { FastifyError } from '@fastify/error'
import { Options as FJSOptions, SerializerFactory } from '@fastify/fast-json-stringify-compiler'
import { Config as FindMyWayConfig, ConstraintStrategy, HTTPVersion } from 'find-my-way'
import { InjectOptions, CallbackFunc as LightMyRequestCallback, Chain as LightMyRequestChain, Response as LightMyRequestResponse } from 'light-my-request'

import { AddContentTypeParser, ConstructorAction, FastifyBodyParser, FastifyContentTypeParser, getDefaultJsonParser, hasContentTypeParser, ProtoAction } from './types/content-type-parser'
import { FastifyContextConfig, FastifyReplyContext, FastifyRequestContext } from './types/context'
import { FastifyErrorCodes } from './types/errors'
import { DoneFuncWithErrOrRes, HookHandlerDoneFunction, onCloseAsyncHookHandler, onCloseHookHandler, onErrorAsyncHookHandler, onErrorHookHandler, onListenAsyncHookHandler, onListenHookHandler, onReadyAsyncHookHandler, onReadyHookHandler, onRegisterHookHandler, onRequestAbortAsyncHookHandler, onRequestAbortHookHandler, onRequestAsyncHookHandler, onRequestHookHandler, onResponseAsyncHookHandler, onResponseHookHandler, onRouteHookHandler, onSendAsyncHookHandler, onSendHookHandler, onTimeoutAsyncHookHandler, onTimeoutHookHandler, preCloseAsyncHookHandler, preCloseHookHandler, preHandlerAsyncHookHandler, preHandlerHookHandler, preParsingAsyncHookHandler, preParsingHookHandler, preSerializationAsyncHookHandler, preSerializationHookHandler, preValidationAsyncHookHandler, preValidationHookHandler, RequestPayload } from './types/hooks'
import { FastifyInstance, FastifyListenOptions, PrintRoutesOptions } from './types/instance'
import {
  FastifyBaseLogger,
  FastifyChildLoggerFactory,
  FastifyLogFn,
  FastifyLoggerInstance,
  FastifyLoggerOptions,
  LogLevel,
  PinoLoggerOptions
} from './types/logger'
import { FastifyPlugin, FastifyPluginAsync, FastifyPluginCallback, FastifyPluginOptions } from './types/plugin'
import { FastifyRegister, FastifyRegisterOptions, RegisterOptions } from './types/register'
import { FastifyReply } from './types/reply'
import { FastifyRequest, RequestGenericInterface } from './types/request'
import { RouteGenericInterface, RouteHandler, RouteHandlerMethod, RouteOptions, RouteShorthandMethod, RouteShorthandOptions, RouteShorthandOptionsWithHandler } from './types/route'
import { FastifySchema, FastifySchemaValidationError, FastifySchemaCompiler, FastifySerializerCompiler, SchemaErrorDataVar, SchemaErrorFormatter } from './types/schema'
import { FastifyServerFactory, FastifyServerFactoryHandler } from './types/server-factory'
import { FastifyTypeProvider, FastifyTypeProviderDefault, SafePromiseLike } from './types/type-provider'
import { ContextConfigDefault, HTTPMethods, RawReplyDefaultExpression, RawRequestDefaultExpression, RawServerBase, RawServerDefault, RequestBodyDefault, RequestHeadersDefault, RequestParamsDefault, RequestQuerystringDefault } from './types/utils'

declare module '@fastify/error' {
  interface FastifyError {
    validationContext?: SchemaErrorDataVar;
    validation?: FastifySchemaValidationError[];
  }
}

type Fastify = typeof fastify

declare namespace fastify {
  export const errorCodes: FastifyErrorCodes

  export type FastifyHttp2SecureOptions<
    Server extends http2.Http2SecureServer,
    Logger extends FastifyBaseLogger = FastifyBaseLogger
  > = FastifyServerOptions<Server, Logger> & {
    http2: true,
    https: http2.SecureServerOptions,
    http2SessionTimeout?: number
  }

  export type FastifyHttp2Options<
    Server extends http2.Http2Server,
    Logger extends FastifyBaseLogger = FastifyBaseLogger
  > = FastifyServerOptions<Server, Logger> & {
    http2: true,
    http2SessionTimeout?: number
  }

  export type FastifyHttpsOptions<
    Server extends https.Server,
    Logger extends FastifyBaseLogger = FastifyBaseLogger
  > = FastifyServerOptions<Server, Logger> & {
    https: https.ServerOptions | null
  }

  export type FastifyHttpOptions<
    Server extends http.Server,
    Logger extends FastifyBaseLogger = FastifyBaseLogger
  > = FastifyServerOptions<Server, Logger> & {
    http?: http.ServerOptions | null
  }

  type FindMyWayVersion<RawServer extends RawServerBase> = RawServer extends http.Server ? HTTPVersion.V1 : HTTPVersion.V2
  type FindMyWayConfigForServer<RawServer extends RawServerBase> = FindMyWayConfig<FindMyWayVersion<RawServer>>

  export interface ConnectionError extends Error {
    code: string,
    bytesParsed: number,
    rawPacket: {
      type: string,
      data: number[]
    }
  }

  type TrustProxyFunction = (address: string, hop: number) => boolean

  export type FastifyRouterOptions<RawServer extends RawServerBase> = Omit<FindMyWayConfigForServer<RawServer>, 'defaultRoute' | 'onBadUrl' | 'querystringParser'> & {
    defaultRoute?: (
      req: RawRequestDefaultExpression<RawServer>,
      res: RawReplyDefaultExpression<RawServer>
    ) => void,
    onBadUrl?: (
      path: string,
      req: RawRequestDefaultExpression<RawServer>,
      res: RawReplyDefaultExpression<RawServer>
    ) => void,
    querystringParser?: (str: string) => { [key: string]: unknown }
  }

  /**
   * Options for a fastify server instance. Utilizes conditional logic on the generic server parameter to enforce certain https and http2
   */
  export type FastifyServerOptions<
    RawServer extends RawServerBase = RawServerDefault,
    Logger extends FastifyBaseLogger = FastifyBaseLogger
  > = {
    ignoreTrailingSlash?: boolean,
    ignoreDuplicateSlashes?: boolean,
    connectionTimeout?: number,
    keepAliveTimeout?: number,
    maxRequestsPerSocket?: number,
    forceCloseConnections?: boolean | 'idle',
    requestTimeout?: number,
    pluginTimeout?: number,
    bodyLimit?: number,
    handlerTimeout?: number,
    maxParamLength?: number,
    disableRequestLogging?: boolean | ((req: FastifyRequest) => boolean),
    exposeHeadRoutes?: boolean,
    onProtoPoisoning?: ProtoAction,
    onConstructorPoisoning?: ConstructorAction,
    logger?: boolean | FastifyLoggerOptions<RawServer> & PinoLoggerOptions,
    loggerInstance?: Logger
    serializerOpts?: FJSOptions | Record<string, unknown>,
    serverFactory?: FastifyServerFactory<RawServer>,
    caseSensitive?: boolean,
    allowUnsafeRegex?: boolean,
    requestIdHeader?: string | false,
    requestIdLogLabel?: string;
    useSemicolonDelimiter?: boolean,
    genReqId?: (req: RawRequestDefaultExpression<RawServer>) => string,
    trustProxy?: boolean | string | string[] | number | TrustProxyFunction,
    querystringParser?: (str: string) => { [key: string]: unknown },
    constraints?: {
      [name: string]: ConstraintStrategy<FindMyWayVersion<RawServer>, unknown>,
    },
    schemaController?: {
      bucket?: (parentSchemas?: unknown) => {
        add(schema: unknown): FastifyInstance;
        getSchema(schemaId: string): unknown;
        getSchemas(): Record<string, unknown>;
      };
      compilersFactory?: {
        buildValidator?: ValidatorFactory;
        buildSerializer?: SerializerFactory;
      };
    };
    return503OnClosing?: boolean,
    ajv?: Parameters<BuildCompilerFromPool>[1],
    frameworkErrors?: <RequestGeneric extends RequestGenericInterface = RequestGenericInterface, TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault, SchemaCompiler extends FastifySchema = FastifySchema>(
      error: FastifyError,
      req: FastifyRequest<RequestGeneric, RawServer, RawRequestDefaultExpression<RawServer>, FastifySchema, TypeProvider>,
      res: FastifyReply<RequestGeneric, RawServer, RawRequestDefaultExpression<RawServer>, RawReplyDefaultExpression<RawServer>, FastifyContextConfig, SchemaCompiler, TypeProvider>
    ) => void,
    rewriteUrl?: (
      // The RawRequestDefaultExpression, RawReplyDefaultExpression, and FastifyTypeProviderDefault parameters
      // should be narrowed further but those generic parameters are not passed to this FastifyServerOptions type
      this: FastifyInstance<RawServer, RawRequestDefaultExpression<RawServer>, RawReplyDefaultExpression<RawServer>, Logger, FastifyTypeProviderDefault>,
      req: RawRequestDefaultExpression<RawServer>
    ) => string,
    schemaErrorFormatter?: SchemaErrorFormatter,
    /**
     * listener to error events emitted by client connections
     */
    clientErrorHandler?: (error: ConnectionError, socket: Socket) => void,
    childLoggerFactory?: FastifyChildLoggerFactory,
    allowErrorHandlerOverride?: boolean
    routerOptions?: FastifyRouterOptions<RawServer>,
  }

  /**
   * @deprecated use {@link FastifySchemaValidationError}
   */
  export type ValidationResult = FastifySchemaValidationError

  /* Export additional types */
  export type {
    LightMyRequestChain, InjectOptions, LightMyRequestResponse, LightMyRequestCallback, // 'light-my-request'
    FastifyRequest, RequestGenericInterface, // './types/request'
    FastifyReply, // './types/reply'
    FastifyPluginCallback, FastifyPluginAsync, FastifyPluginOptions, FastifyPlugin, // './types/plugin'
    FastifyListenOptions, FastifyInstance, PrintRoutesOptions, // './types/instance'
    FastifyLoggerOptions, FastifyBaseLogger, FastifyLoggerInstance, FastifyLogFn, LogLevel, // './types/logger'
    FastifyRequestContext, FastifyContextConfig, FastifyReplyContext, // './types/context'
    RouteHandler, RouteHandlerMethod, RouteOptions, RouteShorthandMethod, RouteShorthandOptions, RouteShorthandOptionsWithHandler, RouteGenericInterface, // './types/route'
    FastifyRegister, FastifyRegisterOptions, RegisterOptions, // './types/register'
    FastifyBodyParser, FastifyContentTypeParser, AddContentTypeParser, hasContentTypeParser, getDefaultJsonParser, ProtoAction, ConstructorAction, // './types/content-type-parser'
    FastifyError, // '@fastify/error'
    FastifySchema, FastifySchemaValidationError, FastifySchemaCompiler, FastifySerializerCompiler, // './types/schema'
    HTTPMethods, RawServerBase, RawRequestDefaultExpression, RawReplyDefaultExpression, RawServerDefault, ContextConfigDefault, RequestBodyDefault, RequestQuerystringDefault, RequestParamsDefault, RequestHeadersDefault, // './types/utils'
    DoneFuncWithErrOrRes, HookHandlerDoneFunction, RequestPayload, onCloseAsyncHookHandler, onCloseHookHandler, onErrorAsyncHookHandler, onErrorHookHandler, onReadyAsyncHookHandler, onReadyHookHandler, onListenAsyncHookHandler, onListenHookHandler, onRegisterHookHandler, onRequestAsyncHookHandler, onRequestHookHandler, onResponseAsyncHookHandler, onResponseHookHandler, onRouteHookHandler, onSendAsyncHookHandler, onSendHookHandler, onTimeoutAsyncHookHandler, onTimeoutHookHandler, preHandlerAsyncHookHandler, preHandlerHookHandler, preParsingAsyncHookHandler, preParsingHookHandler, preSerializationAsyncHookHandler, preSerializationHookHandler, preValidationAsyncHookHandler, preValidationHookHandler, onRequestAbortHookHandler, onRequestAbortAsyncHookHandler, preCloseAsyncHookHandler, preCloseHookHandler, // './types/hooks'
    FastifyServerFactory, FastifyServerFactoryHandler, // './types/serverFactory'
    FastifyTypeProvider, FastifyTypeProviderDefault, SafePromiseLike, // './types/type-provider'
    FastifyErrorCodes // './types/errors'
  }
  // named export
  // import { plugin } from 'plugin'
  // const { plugin } = require('plugin')
  export const fastify: Fastify
  // default export
  // import plugin from 'plugin'
  export { fastify as default }
}

/**
 * Fastify factory function for the standard fastify http, https, or http2 server instance.
 *
 * The default function utilizes http
 *
 * @param opts Fastify server options
 * @returns Fastify server instance
 */
declare function fastify<
  Server extends http2.Http2SecureServer,
  Request extends RawRequestDefaultExpression<Server> = RawRequestDefaultExpression<Server>,
  Reply extends RawReplyDefaultExpression<Server> = RawReplyDefaultExpression<Server>,
  Logger extends FastifyBaseLogger = FastifyBaseLogger,
  TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault
> (opts: fastify.FastifyHttp2SecureOptions<Server, Logger>): FastifyInstance<Server, Request, Reply, Logger, TypeProvider> & SafePromiseLike<FastifyInstance<Server, Request, Reply, Logger, TypeProvider>>

declare function fastify<
  Server extends http2.Http2Server,
  Request extends RawRequestDefaultExpression<Server> = RawRequestDefaultExpression<Server>,
  Reply extends RawReplyDefaultExpression<Server> = RawReplyDefaultExpression<Server>,
  Logger extends FastifyBaseLogger = FastifyBaseLogger,
  TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault
> (opts: fastify.FastifyHttp2Options<Server, Logger>): FastifyInstance<Server, Request, Reply, Logger, TypeProvider> & SafePromiseLike<FastifyInstance<Server, Request, Reply, Logger, TypeProvider>>

declare function fastify<
  Server extends https.Server,
  Request extends RawRequestDefaultExpression<Server> = RawRequestDefaultExpression<Server>,
  Reply extends RawReplyDefaultExpression<Server> = RawReplyDefaultExpression<Server>,
  Logger extends FastifyBaseLogger = FastifyBaseLogger,
  TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault
> (opts: fastify.FastifyHttpsOptions<Server, Logger>): FastifyInstance<Server, Request, Reply, Logger, TypeProvider> & SafePromiseLike<FastifyInstance<Server, Request, Reply, Logger, TypeProvider>>

declare function fastify<
  Server extends http.Server,
  Request extends RawRequestDefaultExpression<Server> = RawRequestDefaultExpression<Server>,
  Reply extends RawReplyDefaultExpression<Server> = RawReplyDefaultExpression<Server>,
  Logger extends FastifyBaseLogger = FastifyBaseLogger,
  TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault
> (opts?: fastify.FastifyHttpOptions<Server, Logger>): FastifyInstance<Server, Request, Reply, Logger, TypeProvider> & SafePromiseLike<FastifyInstance<Server, Request, Reply, Logger, TypeProvider>>

// CJS export
// const fastify = require('fastify')
export = fastify
