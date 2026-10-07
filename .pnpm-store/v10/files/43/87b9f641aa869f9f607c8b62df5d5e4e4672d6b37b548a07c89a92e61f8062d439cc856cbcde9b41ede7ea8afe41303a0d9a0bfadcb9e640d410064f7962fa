import { FastifyError } from '@fastify/error'
import { ConstraintStrategy, FindResult, HTTPVersion } from 'find-my-way'
import * as http from 'node:http'
import { InjectOptions, CallbackFunc as LightMyRequestCallback, Chain as LightMyRequestChain, Response as LightMyRequestResponse } from 'light-my-request'
import { AddressInfo } from 'node:net'
import { AddContentTypeParser, ConstructorAction, FastifyBodyParser, ProtoAction, getDefaultJsonParser, hasContentTypeParser, removeAllContentTypeParsers, removeContentTypeParser } from './content-type-parser'
import { ApplicationHook, HookAsyncLookup, HookLookup, LifecycleHook, onCloseAsyncHookHandler, onCloseHookHandler, onErrorAsyncHookHandler, onErrorHookHandler, onListenAsyncHookHandler, onListenHookHandler, onReadyAsyncHookHandler, onReadyHookHandler, onRegisterHookHandler, onRequestAbortAsyncHookHandler, onRequestAbortHookHandler, onRequestAsyncHookHandler, onRequestHookHandler, onResponseAsyncHookHandler, onResponseHookHandler, onRouteHookHandler, onSendAsyncHookHandler, onSendHookHandler, onTimeoutAsyncHookHandler, onTimeoutHookHandler, preCloseAsyncHookHandler, preCloseHookHandler, preHandlerAsyncHookHandler, preHandlerHookHandler, preParsingAsyncHookHandler, preParsingHookHandler, preSerializationAsyncHookHandler, preSerializationHookHandler, preValidationAsyncHookHandler, preValidationHookHandler } from './hooks'
import { FastifyBaseLogger, FastifyChildLoggerFactory } from './logger'
import { FastifyRegister } from './register'
import { FastifyReply } from './reply'
import { FastifyRequest } from './request'
import { RouteGenericInterface, RouteHandlerMethod, RouteOptions, RouteShorthandMethod } from './route'
import {
  FastifySchema,
  FastifySchemaCompiler,
  FastifySchemaControllerOptions,
  FastifySerializerCompiler,
  SchemaErrorFormatter
} from './schema'
import {
  FastifyTypeProvider,
  FastifyTypeProviderDefault,
  SafePromiseLike
} from './type-provider'
import { ContextConfigDefault, HTTPMethods, RawReplyDefaultExpression, RawRequestDefaultExpression, RawServerBase, RawServerDefault } from './utils'
import { FastifyRouterOptions } from '../fastify'

export interface PrintRoutesOptions {
  method?: HTTPMethods;
  includeMeta?: boolean | (string | symbol)[]
  commonPrefix?: boolean
  includeHooks?: boolean
}

type AsyncFunction = (...args: any) => Promise<any>

export interface FastifyListenOptions {
  /**
   * Default to `0` (picks the first available open port).
   */
  port?: number;
  /**
   * Default to `localhost`.
   */
  host?: string;
  /**
   * Will be ignored if `port` is specified.
   * @see [Identifying paths for IPC connections](https://nodejs.org/api/net.html#identifying-paths-for-ipc-connections).
   */
  path?: string;
  /**
   * Specify the maximum length of the queue of pending connections.
   * The actual length will be determined by the OS through sysctl settings such as `tcp_max_syn_backlog` and `somaxconn` on Linux.
   * Default to `511`.
   */
  backlog?: number;
  /**
   * Default to `false`.
   */
  exclusive?: boolean;
  /**
   * For IPC servers makes the pipe readable for all users.
   * Default to `false`.
   */
  readableAll?: boolean;
  /**
   * For IPC servers makes the pipe writable for all users.
   * Default to `false`.
   */
  writableAll?: boolean;
  /**
   * For TCP servers, setting `ipv6Only` to `true` will disable dual-stack support, i.e., binding to host `::` won't make `0.0.0.0` be bound.
   * Default to `false`.
   */
  ipv6Only?: boolean;
  /**
   * An AbortSignal that may be used to close a listening server.
   * @since This option is available only in Node.js v15.6.0 and greater
   */
  signal?: AbortSignal;

  /**
   * Function that resolves text to log after server has been successfully started
   * @param address
   */
  listenTextResolver?: (address: string) => string;
}

type NotInInterface<Key, _Interface> = Key extends keyof _Interface ? never : Key
type FindMyWayVersion<RawServer extends RawServerBase> = RawServer extends http.Server ? HTTPVersion.V1 : HTTPVersion.V2
type FindMyWayFindResult<RawServer extends RawServerBase> = FindResult<FindMyWayVersion<RawServer>>

type GetterSetter<This, T> = T | {
  getter: (this: This) => T,
  setter?: (this: This, value: T) => void
}

type DecorationMethod<This, Return = This> = {
  <
    // Need to disable "no-use-before-define" to maintain backwards compatibility, as else decorate<Foo> would suddenly mean something new

    T extends (P extends keyof This ? This[P] : unknown),
    P extends string | symbol = string | symbol
  >(property: P,
    value: GetterSetter<This, T extends (...args: any[]) => any
      ? (this: This, ...args: Parameters<T>) => ReturnType<T>
      : T
    >,
    dependencies?: string[]
  ): Return;

  (property: string | symbol): Return;

  (property: string | symbol, value: null | undefined, dependencies: string[]): Return;
}

/**
 * Fastify server instance. Returned by the core `fastify()` method.
 */
export interface FastifyInstance<
  RawServer extends RawServerBase = RawServerDefault,
  RawRequest extends RawRequestDefaultExpression<RawServer> = RawRequestDefaultExpression<RawServer>,
  RawReply extends RawReplyDefaultExpression<RawServer> = RawReplyDefaultExpression<RawServer>,
  Logger extends FastifyBaseLogger = FastifyBaseLogger,
  TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault
> {
  server: RawServer;
  pluginName: string;
  prefix: string;
  version: string;
  log: Logger;
  listeningOrigin: string;
  addresses(): AddressInfo[]
  withTypeProvider<Provider extends FastifyTypeProvider>(): FastifyInstance<RawServer, RawRequest, RawReply, Logger, Provider>;

  addSchema(schema: unknown): FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>;
  getSchema(schemaId: string): unknown;
  getSchemas(): Record<string, unknown>;

  after(): FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider> & SafePromiseLike<undefined>;
  after(afterListener: (err: Error | null) => void): FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>;

  close(): Promise<undefined>;
  close(closeListener: () => void): undefined;

  /** Alias for {@linkcode FastifyInstance.close()} */

  // @ts-ignore - type only available for @types/node >=17 or typescript >= 5.2
  [Symbol.asyncDispose](): Promise<undefined>;

  // should be able to define something useful with the decorator getter/setter pattern using Generics to enforce the users function returns what they expect it to
  decorate: DecorationMethod<FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>>;
  decorateRequest: DecorationMethod<FastifyRequest, FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>>;
  decorateReply: DecorationMethod<FastifyReply, FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>>;

  getDecorator<T>(name: string | symbol): T;

  hasDecorator(decorator: string | symbol): boolean;
  hasRequestDecorator(decorator: string | symbol): boolean;
  hasReplyDecorator(decorator: string | symbol): boolean;
  hasPlugin(name: string): boolean;

  addConstraintStrategy(strategy: ConstraintStrategy<FindMyWayVersion<RawServer>, unknown>): void;
  hasConstraintStrategy(strategyName: string): boolean;

  inject(opts: InjectOptions | string, cb: LightMyRequestCallback): void;
  inject(opts: InjectOptions | string): Promise<LightMyRequestResponse>;
  inject(): LightMyRequestChain;

  listen(opts: FastifyListenOptions, callback: (err: Error | null, address: string) => void): void;
  listen(opts?: FastifyListenOptions): Promise<string>;
  listen(callback: (err: Error | null, address: string) => void): void;

  ready(): FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider> & SafePromiseLike<undefined>;
  ready(readyListener: (err: Error | null) => void | Promise<void>): FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>;

  register: FastifyRegister<FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider> & SafePromiseLike<undefined>>;

  routing(req: RawRequest, res: RawReply): void;

  route<
    RouteGeneric extends RouteGenericInterface = RouteGenericInterface,
    ContextConfig = ContextConfigDefault,
    const SchemaCompiler extends FastifySchema = FastifySchema
  >(opts: RouteOptions<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>): FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>;

  delete: RouteShorthandMethod<RawServer, RawRequest, RawReply, TypeProvider, Logger>;
  get: RouteShorthandMethod<RawServer, RawRequest, RawReply, TypeProvider, Logger>;
  head: RouteShorthandMethod<RawServer, RawRequest, RawReply, TypeProvider, Logger>;
  patch: RouteShorthandMethod<RawServer, RawRequest, RawReply, TypeProvider, Logger>;
  post: RouteShorthandMethod<RawServer, RawRequest, RawReply, TypeProvider, Logger>;
  put: RouteShorthandMethod<RawServer, RawRequest, RawReply, TypeProvider, Logger>;
  options: RouteShorthandMethod<RawServer, RawRequest, RawReply, TypeProvider, Logger>;
  propfind: RouteShorthandMethod<RawServer, RawRequest, RawReply, TypeProvider, Logger>;
  proppatch: RouteShorthandMethod<RawServer, RawRequest, RawReply, TypeProvider, Logger>;
  mkcalendar: RouteShorthandMethod<RawServer, RawRequest, RawReply, TypeProvider, Logger>;
  mkcol: RouteShorthandMethod<RawServer, RawRequest, RawReply, TypeProvider, Logger>;
  copy: RouteShorthandMethod<RawServer, RawRequest, RawReply, TypeProvider, Logger>;
  move: RouteShorthandMethod<RawServer, RawRequest, RawReply, TypeProvider, Logger>;
  lock: RouteShorthandMethod<RawServer, RawRequest, RawReply, TypeProvider, Logger>;
  unlock: RouteShorthandMethod<RawServer, RawRequest, RawReply, TypeProvider, Logger>;
  trace: RouteShorthandMethod<RawServer, RawRequest, RawReply, TypeProvider, Logger>;
  report: RouteShorthandMethod<RawServer, RawRequest, RawReply, TypeProvider, Logger>;
  search: RouteShorthandMethod<RawServer, RawRequest, RawReply, TypeProvider, Logger>;
  all: RouteShorthandMethod<RawServer, RawRequest, RawReply, TypeProvider, Logger>;

  hasRoute<
    RouteGeneric extends RouteGenericInterface = RouteGenericInterface,
    ContextConfig = ContextConfigDefault,
    SchemaCompiler extends FastifySchema = FastifySchema
  >(opts: Pick<RouteOptions<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider>, 'method' | 'url' | 'constraints'>): boolean;

  findRoute<
    RouteGeneric extends RouteGenericInterface = RouteGenericInterface,
    ContextConfig = ContextConfigDefault,
    SchemaCompiler extends FastifySchema = FastifySchema
  >(opts: Pick<RouteOptions<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider>, 'method' | 'url' | 'constraints'>): Omit<FindMyWayFindResult<RawServer>, 'store'>;

  // addHook: overloads

  // Lifecycle addHooks

  /**
   * `onRequest` is the first hook to be executed in the request lifecycle. There was no previous hook, the next hook will be `preParsing`.
   *  Notice: in the `onRequest` hook, request.body will always be null, because the body parsing happens before the `preHandler` hook.
   */
  addHook<
    RouteGeneric extends RouteGenericInterface = RouteGenericInterface,
    ContextConfig = ContextConfigDefault,
    SchemaCompiler extends FastifySchema = FastifySchema,
    Logger extends FastifyBaseLogger = FastifyBaseLogger,
    Fn extends onRequestHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger> | onRequestAsyncHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger> = onRequestHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>
  >(
    name: 'onRequest',
    hook: Fn extends unknown ? Fn extends AsyncFunction ? onRequestAsyncHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger> : onRequestHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger> : Fn,
  ): FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>;

  /**
   * `preParsing` is the second hook to be executed in the request lifecycle. The previous hook was `onRequest`, the next hook will be `preValidation`.
   * Notice: in the `preParsing` hook, request.body will always be null, because the body parsing happens before the `preHandler` hook.
   */
  addHook<
    RouteGeneric extends RouteGenericInterface = RouteGenericInterface,
    ContextConfig = ContextConfigDefault,
    SchemaCompiler extends FastifySchema = FastifySchema,
    Logger extends FastifyBaseLogger = FastifyBaseLogger,
    Fn extends preParsingHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger> | preParsingAsyncHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger> = preParsingHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>
  >(
    name: 'preParsing',
    hook: Fn extends unknown ? Fn extends AsyncFunction ? preParsingAsyncHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger> : preParsingHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger> : Fn,
  ): FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>;

  /**
   * `preValidation` is the third hook to be executed in the request lifecycle. The previous hook was `preParsing`, the next hook will be `preHandler`.
   */
  addHook<
    RouteGeneric extends RouteGenericInterface = RouteGenericInterface,
    ContextConfig = ContextConfigDefault,
    SchemaCompiler extends FastifySchema = FastifySchema,
    Logger extends FastifyBaseLogger = FastifyBaseLogger,
    Fn extends preValidationHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger> | preValidationAsyncHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger> = preValidationHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>
  >(
    name: 'preValidation',
    hook: Fn extends unknown ? Fn extends AsyncFunction ? preValidationAsyncHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger> : preValidationHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger> : Fn,
  ): FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>;

  /**
   * `preHandler` is the fourth hook to be executed in the request lifecycle. The previous hook was `preValidation`, the next hook will be `preSerialization`.
   */
  addHook<
    RouteGeneric extends RouteGenericInterface = RouteGenericInterface,
    ContextConfig = ContextConfigDefault,
    SchemaCompiler extends FastifySchema = FastifySchema,
    Logger extends FastifyBaseLogger = FastifyBaseLogger,
    Fn extends preHandlerHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger> | preHandlerAsyncHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger> = preHandlerHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>
  >(
    name: 'preHandler',
    hook: Fn extends unknown ? Fn extends AsyncFunction ? preHandlerAsyncHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger> : preHandlerHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger> : Fn,
  ): FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>;

  /**
   * `preSerialization` is the fifth hook to be executed in the request lifecycle. The previous hook was `preHandler`, the next hook will be `onSend`.
   *  Note: the hook is NOT called if the payload is a string, a Buffer, a stream or null.
   */
  addHook<
    PreSerializationPayload = unknown,
    RouteGeneric extends RouteGenericInterface = RouteGenericInterface,
    ContextConfig = ContextConfigDefault,
    SchemaCompiler extends FastifySchema = FastifySchema,
    Logger extends FastifyBaseLogger = FastifyBaseLogger,
    Fn extends preSerializationHookHandler<PreSerializationPayload, RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger> | preSerializationAsyncHookHandler<PreSerializationPayload, RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger> = preSerializationHookHandler<PreSerializationPayload, RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>
  >(
    name: 'preSerialization',
    hook: Fn extends unknown ? Fn extends AsyncFunction ? preSerializationAsyncHookHandler<PreSerializationPayload, RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger> : preSerializationHookHandler<PreSerializationPayload, RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger> : Fn,
  ): FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>;

  /**
   * You can change the payload with the `onSend` hook. It is the sixth hook to be executed in the request lifecycle. The previous hook was `preSerialization`, the next hook will be `onResponse`.
   * Note: If you change the payload, you may only change it to a string, a Buffer, a stream, or null.
   */
  addHook<
    OnSendPayload = unknown,
    RouteGeneric extends RouteGenericInterface = RouteGenericInterface,
    ContextConfig = ContextConfigDefault,
    SchemaCompiler extends FastifySchema = FastifySchema,
    Logger extends FastifyBaseLogger = FastifyBaseLogger,
    Fn extends onSendHookHandler<OnSendPayload, RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger> | onSendAsyncHookHandler<OnSendPayload, RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger> = onSendHookHandler<OnSendPayload, RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>
  >(
    name: 'onSend',
    hook: Fn extends unknown ? Fn extends AsyncFunction ? onSendAsyncHookHandler<OnSendPayload, RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger> : onSendHookHandler<OnSendPayload, RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger> : Fn,
  ): FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>;

  /**
   * `onResponse` is the seventh and last hook in the request hook lifecycle. The previous hook was `onSend`, there is no next hook.
   * The onResponse hook is executed when a response has been sent, so you will not be able to send more data to the client. It can however be useful for sending data to external services, for example to gather statistics.
   */
  addHook<
    RouteGeneric extends RouteGenericInterface = RouteGenericInterface,
    ContextConfig = ContextConfigDefault,
    SchemaCompiler extends FastifySchema = FastifySchema,
    Logger extends FastifyBaseLogger = FastifyBaseLogger,
    Fn extends onResponseHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger> | onResponseAsyncHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger> = onResponseHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>
  >(
    name: 'onResponse',
    hook: Fn extends unknown ? Fn extends AsyncFunction ? onResponseAsyncHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger> : onResponseHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger> : Fn,
  ): FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>;

  /**
   * `onTimeout` is useful if you need to monitor the request timed out in your service. (if the `connectionTimeout` property is set on the fastify instance)
   * The onTimeout hook is executed when a request is timed out and the http socket has been hanged up. Therefore you will not be able to send data to the client.
   */
  addHook<
    RouteGeneric extends RouteGenericInterface = RouteGenericInterface,
    ContextConfig = ContextConfigDefault,
    SchemaCompiler extends FastifySchema = FastifySchema,
    Logger extends FastifyBaseLogger = FastifyBaseLogger,
    Fn extends onTimeoutHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger> | onTimeoutAsyncHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger> = onTimeoutHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>
  >(
    name: 'onTimeout',
    hook: Fn extends unknown ? Fn extends AsyncFunction ? onTimeoutAsyncHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger> : onTimeoutHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger> : Fn,
  ): FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>;

  /**
   * `onRequestAbort` is useful if you need to monitor the if the client aborts the request (if the `request.raw.aborted` property is set to `true`).
   * The `onRequestAbort` hook is executed when a client closes the connection before the entire request has been received. Therefore, you will not be able to send data to the client.
   * Notice: client abort detection is not completely reliable. See: https://github.com/fastify/fastify/blob/main/docs/Guides/Detecting-When-Clients-Abort.md
  */
  addHook<
    RouteGeneric extends RouteGenericInterface = RouteGenericInterface,
    ContextConfig = ContextConfigDefault,
    SchemaCompiler extends FastifySchema = FastifySchema,
    Logger extends FastifyBaseLogger = FastifyBaseLogger,
    Fn extends onRequestAbortHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger> | onRequestAbortAsyncHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger> = onRequestAbortHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>
  >(
    name: 'onRequestAbort',
    hook: Fn extends unknown ? Fn extends AsyncFunction ? onRequestAbortAsyncHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger> : onRequestAbortHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger> : Fn,
  ): FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>;

  /**
   * This hook is useful if you need to do some custom error logging or add some specific header in case of error.
   * It is not intended for changing the error, and calling reply.send will throw an exception.
   * This hook will be executed only after the customErrorHandler has been executed, and only if the customErrorHandler sends an error back to the user (Note that the default customErrorHandler always sends the error back to the user).
   * Notice: unlike the other hooks, pass an error to the done function is not supported.
   */
  addHook<
    RouteGeneric extends RouteGenericInterface = RouteGenericInterface,
    ContextConfig = ContextConfigDefault,
    SchemaCompiler extends FastifySchema = FastifySchema,
    Logger extends FastifyBaseLogger = FastifyBaseLogger,
    Fn extends onErrorHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, FastifyError, SchemaCompiler, TypeProvider, Logger> | onErrorAsyncHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, FastifyError, SchemaCompiler, TypeProvider, Logger> = onErrorHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, FastifyError, SchemaCompiler, TypeProvider, Logger>
  >(
    name: 'onError',
    hook: Fn extends unknown ? Fn extends AsyncFunction ? onErrorAsyncHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, FastifyError, SchemaCompiler, TypeProvider, Logger> : onErrorHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, FastifyError, SchemaCompiler, TypeProvider, Logger> : Fn,
  ): FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>;

  // Application addHooks

  /**
   * Triggered when a new route is registered. Listeners are passed a routeOptions object as the sole parameter. The interface is synchronous, and, as such, the listener does not get passed a callback
   */
  addHook<
    RouteGeneric extends RouteGenericInterface = RouteGenericInterface,
    ContextConfig = ContextConfigDefault,
    SchemaCompiler extends FastifySchema = FastifySchema,
    Logger extends FastifyBaseLogger = FastifyBaseLogger
  >(
    name: 'onRoute',
    hook: onRouteHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>
  ): FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>;

  /**
  * Triggered when a new plugin is registered and a new encapsulation context is created. The hook will be executed before the registered code.
  * This hook can be useful if you are developing a plugin that needs to know when a plugin context is formed, and you want to operate in that specific context.
  * Note: This hook will not be called if a plugin is wrapped inside fastify-plugin.
  */
  addHook(
    name: 'onRegister',
    hook: onRegisterHookHandler<RawServer, RawRequest, RawReply, Logger, TypeProvider>
  ): FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>;

  /**
  * Triggered when fastify.listen() or fastify.ready() is invoked to start the server. It is useful when plugins need a "ready" event, for example to load data before the server start listening for requests.
  */
  addHook<
    Fn extends onReadyHookHandler | onReadyAsyncHookHandler = onReadyHookHandler
  >(
    name: 'onReady',
    hook: Fn extends unknown ? Fn extends AsyncFunction ? onReadyAsyncHookHandler : onReadyHookHandler : Fn,
  ): FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>;

  /**
  * Triggered when fastify.listen() is invoked to start the server. It is useful when plugins need a "onListen" event, for example to run logics after the server start listening for requests.
  */
  addHook<
    Fn extends onListenHookHandler<RawServer, RawRequest, RawReply, Logger, TypeProvider> | onListenAsyncHookHandler<RawServer, RawRequest, RawReply, Logger, TypeProvider> = onListenHookHandler<RawServer, RawRequest, RawReply, Logger, TypeProvider>
  >(
    name: 'onListen',
    hook: Fn extends unknown ? Fn extends AsyncFunction ? onListenAsyncHookHandler : onListenHookHandler : Fn,
  ): FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>;

  /**
  * Triggered when fastify.close() is invoked to stop the server. It is useful when plugins need a "shutdown" event, for example to close an open connection to a database.
  */
  addHook<
    Fn extends onCloseHookHandler | onCloseAsyncHookHandler = onCloseHookHandler
  >(
    name: 'onClose',
    hook: Fn extends unknown ? Fn extends AsyncFunction ? onCloseAsyncHookHandler : onCloseHookHandler : Fn,
  ): FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>;

  /**
  * Triggered when fastify.close() is invoked to stop the server. It is useful when plugins need to cancel some state to allow the server to close successfully.
  */
  addHook<
    Fn extends preCloseHookHandler | preCloseAsyncHookHandler = preCloseHookHandler
  >(
    name: 'preClose',
    hook: Fn extends unknown ? Fn extends AsyncFunction ? preCloseAsyncHookHandler : preCloseHookHandler : Fn,
  ): FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>;

  addHook<
    K extends ApplicationHook | LifecycleHook,
    Fn extends (...args: any) => Promise<any> | any
  > (
    name: K,
    hook: Fn extends unknown ? Fn extends AsyncFunction ? HookAsyncLookup<K> : HookLookup<K> : Fn
  ): FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>;

  /**
     * Set the 404 handler
     */
  setNotFoundHandler<RouteGeneric extends RouteGenericInterface = RouteGenericInterface, ContextConfig extends ContextConfigDefault = ContextConfigDefault, TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault, SchemaCompiler extends FastifySchema = FastifySchema> (
    handler: RouteHandlerMethod<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>
  ): FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>;

  setNotFoundHandler<RouteGeneric extends RouteGenericInterface = RouteGenericInterface, ContextConfig extends ContextConfigDefault = ContextConfigDefault, TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault, SchemaCompiler extends FastifySchema = FastifySchema> (
    opts: {
      preValidation?: preValidationHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider> | preValidationAsyncHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider> | preValidationHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider>[] | preValidationAsyncHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider>[];
      preHandler?: preHandlerHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider> | preHandlerAsyncHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider> | preHandlerHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider>[] | preHandlerAsyncHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider>[];
    },
    handler: RouteHandlerMethod<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>
  ): FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>

  /**
   * Fastify default error handler
   */
  errorHandler: <TError = unknown>(error: TError, request: FastifyRequest, reply: FastifyReply) => void;

  /**
   * Set a function that will be invoked whenever an exception is thrown during the request lifecycle.
   */
  setErrorHandler<TError = unknown, RouteGeneric extends RouteGenericInterface = RouteGenericInterface, SchemaCompiler extends FastifySchema = FastifySchema, TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault>(
    handler: (this: FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>, error: TError, request: FastifyRequest<RouteGeneric, RawServer, RawRequest, SchemaCompiler, TypeProvider>, reply: FastifyReply<RouteGeneric, RawServer, RawRequest, RawReply, ContextConfigDefault, SchemaCompiler, TypeProvider>) => any | Promise<any>
  ): FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>;

  /**
   * Set a function that will generate a request-ids
   */
  setGenReqId(fn: (req: RawRequestDefaultExpression<RawServer>) => string): FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>;

  /**
   * Hook function that is called when creating a child logger instance for each request
   * which allows for modifying or adding child logger bindings and logger options, or
   * returning a completely custom child logger implementation.
   */
  childLoggerFactory: FastifyChildLoggerFactory<RawServer, RawRequest, RawReply, Logger, TypeProvider>;

  /**
   * Hook function that is called when creating a child logger instance for each request
   * which allows for modifying or adding child logger bindings and logger options, or
   * returning a completely custom child logger implementation.
   *
   * Child logger bindings have a performance advantage over per-log bindings, because
   * they are pre-serialised by Pino when the child logger is created.
   *
   * For example:
   * ```
   * function childLoggerFactory(logger, bindings, opts, rawReq) {
   *   // Calculate additional bindings from the request
   *   bindings.traceContext = rawReq.headers['x-cloud-trace-context']
   *   return logger.child(bindings, opts);
   * }
   * ```
   */
  setChildLoggerFactory(factory: FastifyChildLoggerFactory<RawServer, RawRequest, RawReply, Logger, TypeProvider>): FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>;

  /**
   * Fastify schema validator for all routes.
   */
  validatorCompiler: FastifySchemaCompiler<any> | undefined;

  /**
   * Set the schema validator for all routes.
   */
  setValidatorCompiler<T = FastifySchema>(schemaCompiler: FastifySchemaCompiler<T>): FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>;

  /**
   * Fastify schema serializer for all routes.
   */
  serializerCompiler: FastifySerializerCompiler<any> | undefined;

  /**
   * Set the schema serializer for all routes.
   */
  setSerializerCompiler<T = FastifySchema>(schemaCompiler: FastifySerializerCompiler<T>): FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>;

  /**
   * Set the schema controller for all routes.
   */
  setSchemaController(schemaControllerOpts: FastifySchemaControllerOptions): FastifyInstance<RawServer, RawRequest, RawReply, Logger>;

  /**
  * Set the reply serializer for all routes.
  */
  setReplySerializer(replySerializer: (payload: unknown, statusCode: number) => string): FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>;

  /*
  * Set the schema error formatter for all routes.
  */
  setSchemaErrorFormatter(errorFormatter: SchemaErrorFormatter): FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>;
  /**
   * Add a content type parser
   */
  addContentTypeParser: AddContentTypeParser<RawServer, RawRequest, RouteGenericInterface, FastifySchema, TypeProvider>;
  hasContentTypeParser: hasContentTypeParser;
  /**
   * Remove an existing content type parser
   */
  removeContentTypeParser: removeContentTypeParser
  /**
   * Remove all content type parsers, including the default ones
   */
  removeAllContentTypeParsers: removeAllContentTypeParsers
  /**
   * Returns an array of strings containing the list of supported HTTP methods
   */
  supportedMethods: string[]
  /**
   * Add a non-standard HTTP method
   *
   * Methods defined by default include `GET`, `HEAD`, `TRACE`, `DELETE`,
   * `OPTIONS`, `PATCH`, `PUT` and `POST`
   */
  addHttpMethod(method: string, methodOptions?: { hasBody: boolean }): FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>;
  /**
   * Fastify default JSON parser
   */
  getDefaultJsonParser: getDefaultJsonParser;
  /**
   * Fastify default plain text parser
   */
  defaultTextParser: FastifyBodyParser<string>;

  /**
   * Prints the representation of the internal radix tree used by the router
   */
  printRoutes(opts?: PrintRoutesOptions): string;

  /**
   * Prints the representation of the plugin tree used by avvio, the plugin registration system
   */
  printPlugins(): string;

  /**
   *  Frozen read-only object registering the initial options passed down by the user to the fastify instance
   */
  initialConfig: Readonly<{
    connectionTimeout?: number,
    keepAliveTimeout?: number,
    forceCloseConnections?: boolean,
    bodyLimit?: number,
    caseSensitive?: boolean,
    allowUnsafeRegex?: boolean,
    http2?: boolean,
    https?: boolean | Readonly<{ allowHTTP1: boolean }>,
    ignoreTrailingSlash?: boolean,
    ignoreDuplicateSlashes?: boolean,
    disableRequestLogging?: boolean | ((req: FastifyRequest) => boolean),
    maxParamLength?: number,
    onProtoPoisoning?: ProtoAction,
    onConstructorPoisoning?: ConstructorAction,
    pluginTimeout?: number,
    requestIdHeader?: string | false,
    requestIdLogLabel?: string,
    http2SessionTimeout?: number,
    useSemicolonDelimiter?: boolean,
    routerOptions?: FastifyRouterOptions<RawServer>
  }>
}
