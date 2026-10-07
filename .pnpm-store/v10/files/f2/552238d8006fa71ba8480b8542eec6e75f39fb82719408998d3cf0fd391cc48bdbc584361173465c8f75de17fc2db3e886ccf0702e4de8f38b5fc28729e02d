import { Readable } from 'node:stream'
import { FastifyInstance } from './instance'
import { RouteOptions, RouteGenericInterface } from './route'
import { RawServerBase, RawServerDefault, RawRequestDefaultExpression, RawReplyDefaultExpression, ContextConfigDefault } from './utils'
import { FastifyRequest } from './request'
import { FastifyReply } from './reply'
import { FastifyError } from '@fastify/error'
import { FastifyBaseLogger } from './logger'
import {
  FastifyTypeProvider,
  FastifyTypeProviderDefault
} from './type-provider'
import { RegisterOptions } from './register'
import { FastifySchema } from './schema'
import { FastifyPluginOptions } from './plugin'

type HookHandlerDoneFunction = <TError extends Error = FastifyError>(err?: TError) => void

interface RequestPayload extends Readable {
  receivedEncodedLength?: number;
}

// Lifecycle Hooks

/**
 * `onRequest` is the first hook to be executed in the request lifecycle. There was no previous hook, the next hook will be `preParsing`.
 *  Notice: in the `onRequest` hook, request.body will always be null, because the body parsing happens before the `preHandler` hook.
 */
export interface onRequestHookHandler<
  RawServer extends RawServerBase = RawServerDefault,
  RawRequest extends RawRequestDefaultExpression<RawServer> = RawRequestDefaultExpression<RawServer>,
  RawReply extends RawReplyDefaultExpression<RawServer> = RawReplyDefaultExpression<RawServer>,
  RouteGeneric extends RouteGenericInterface = RouteGenericInterface,
  ContextConfig = ContextConfigDefault,
  SchemaCompiler extends FastifySchema = FastifySchema,
  TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault,
  Logger extends FastifyBaseLogger = FastifyBaseLogger
> {
  (
    this: FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>,
    request: FastifyRequest<RouteGeneric, RawServer, RawRequest, SchemaCompiler, TypeProvider, ContextConfig, Logger>,
    reply: FastifyReply<RouteGeneric, RawServer, RawRequest, RawReply, ContextConfig, SchemaCompiler, TypeProvider>,
    done: HookHandlerDoneFunction
  ): void;
}

export interface onRequestAsyncHookHandler<
  RawServer extends RawServerBase = RawServerDefault,
  RawRequest extends RawRequestDefaultExpression<RawServer> = RawRequestDefaultExpression<RawServer>,
  RawReply extends RawReplyDefaultExpression<RawServer> = RawReplyDefaultExpression<RawServer>,
  RouteGeneric extends RouteGenericInterface = RouteGenericInterface,
  ContextConfig = ContextConfigDefault,
  SchemaCompiler extends FastifySchema = FastifySchema,
  TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault,
  Logger extends FastifyBaseLogger = FastifyBaseLogger
> {
  (
    this: FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>,
    request: FastifyRequest<RouteGeneric, RawServer, RawRequest, SchemaCompiler, TypeProvider, ContextConfig, Logger>,
    reply: FastifyReply<RouteGeneric, RawServer, RawRequest, RawReply, ContextConfig, SchemaCompiler, TypeProvider>,
  ): Promise<unknown>;
}

// helper type which infers whether onRequestHookHandler or onRequestAsyncHookHandler are
// applicable based on the specified return type.
export type onRequestMetaHookHandler<
  RawServer extends RawServerBase = RawServerDefault,
  RawRequest extends RawRequestDefaultExpression<RawServer> = RawRequestDefaultExpression<RawServer>,
  RawReply extends RawReplyDefaultExpression<RawServer> = RawReplyDefaultExpression<RawServer>,
  RouteGeneric extends RouteGenericInterface = RouteGenericInterface,
  ContextConfig = ContextConfigDefault,
  SchemaCompiler extends FastifySchema = FastifySchema,
  TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault,
  Logger extends FastifyBaseLogger = FastifyBaseLogger,
  Return extends ReturnType<onRequestHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>>
  | ReturnType<onRequestAsyncHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>>
  = ReturnType<onRequestHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>>
> = Return extends ReturnType<onRequestHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>>
  ? onRequestHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>
  : onRequestAsyncHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>

/**
 * `preParsing` is the second hook to be executed in the request lifecycle. The previous hook was `onRequest`, the next hook will be `preValidation`.
 * Notice: in the `preParsing` hook, request.body will always be null, because the body parsing happens before the `preHandler` hook.
 */
export interface preParsingHookHandler<
  RawServer extends RawServerBase = RawServerDefault,
  RawRequest extends RawRequestDefaultExpression<RawServer> = RawRequestDefaultExpression<RawServer>,
  RawReply extends RawReplyDefaultExpression<RawServer> = RawReplyDefaultExpression<RawServer>,
  RouteGeneric extends RouteGenericInterface = RouteGenericInterface,
  ContextConfig = ContextConfigDefault,
  SchemaCompiler extends FastifySchema = FastifySchema,
  TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault,
  Logger extends FastifyBaseLogger = FastifyBaseLogger
> {
  (
    this: FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>,
    request: FastifyRequest<RouteGeneric, RawServer, RawRequest, SchemaCompiler, TypeProvider, ContextConfig, Logger>,
    reply: FastifyReply<RouteGeneric, RawServer, RawRequest, RawReply, ContextConfig, SchemaCompiler, TypeProvider>,
    payload: RequestPayload,
    done: <TError extends Error = FastifyError>(err?: TError | null, res?: RequestPayload) => void
  ): void;
}

export interface preParsingAsyncHookHandler<
  RawServer extends RawServerBase = RawServerDefault,
  RawRequest extends RawRequestDefaultExpression<RawServer> = RawRequestDefaultExpression<RawServer>,
  RawReply extends RawReplyDefaultExpression<RawServer> = RawReplyDefaultExpression<RawServer>,
  RouteGeneric extends RouteGenericInterface = RouteGenericInterface,
  ContextConfig = ContextConfigDefault,
  SchemaCompiler extends FastifySchema = FastifySchema,
  TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault,
  Logger extends FastifyBaseLogger = FastifyBaseLogger
> {
  (
    this: FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>,
    request: FastifyRequest<RouteGeneric, RawServer, RawRequest, SchemaCompiler, TypeProvider, ContextConfig, Logger>,
    reply: FastifyReply<RouteGeneric, RawServer, RawRequest, RawReply, ContextConfig, SchemaCompiler, TypeProvider>,
    payload: RequestPayload,
  ): Promise<RequestPayload | unknown>;
}

// helper type which infers whether preParsingHookHandler or preParsingAsyncHookHandler are
// applicable based on the specified return type.
export type preParsingMetaHookHandler<
  RawServer extends RawServerBase = RawServerDefault,
  RawRequest extends RawRequestDefaultExpression<RawServer> = RawRequestDefaultExpression<RawServer>,
  RawReply extends RawReplyDefaultExpression<RawServer> = RawReplyDefaultExpression<RawServer>,
  RouteGeneric extends RouteGenericInterface = RouteGenericInterface,
  ContextConfig = ContextConfigDefault,
  SchemaCompiler extends FastifySchema = FastifySchema,
  TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault,
  Logger extends FastifyBaseLogger = FastifyBaseLogger,
  Return extends ReturnType<preParsingHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>>
  | ReturnType<preParsingAsyncHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>>
  = ReturnType<preParsingHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>>
> = Return extends ReturnType<preParsingHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>>
  ? preParsingHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>
  : preParsingAsyncHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>

/**
 * `preValidation` is the third hook to be executed in the request lifecycle. The previous hook was `preParsing`, the next hook will be `preHandler`.
 */
export interface preValidationHookHandler<
  RawServer extends RawServerBase = RawServerDefault,
  RawRequest extends RawRequestDefaultExpression<RawServer> = RawRequestDefaultExpression<RawServer>,
  RawReply extends RawReplyDefaultExpression<RawServer> = RawReplyDefaultExpression<RawServer>,
  RouteGeneric extends RouteGenericInterface = RouteGenericInterface,
  ContextConfig = ContextConfigDefault,
  SchemaCompiler extends FastifySchema = FastifySchema,
  TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault,
  Logger extends FastifyBaseLogger = FastifyBaseLogger
> {
  (
    this: FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>,
    request: FastifyRequest<RouteGeneric, RawServer, RawRequest, SchemaCompiler, TypeProvider, ContextConfig, Logger>,
    reply: FastifyReply<RouteGeneric, RawServer, RawRequest, RawReply, ContextConfig, SchemaCompiler, TypeProvider>,
    done: HookHandlerDoneFunction
  ): void;
}

export interface preValidationAsyncHookHandler<
  RawServer extends RawServerBase = RawServerDefault,
  RawRequest extends RawRequestDefaultExpression<RawServer> = RawRequestDefaultExpression<RawServer>,
  RawReply extends RawReplyDefaultExpression<RawServer> = RawReplyDefaultExpression<RawServer>,
  RouteGeneric extends RouteGenericInterface = RouteGenericInterface,
  ContextConfig = ContextConfigDefault,
  SchemaCompiler extends FastifySchema = FastifySchema,
  TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault,
  Logger extends FastifyBaseLogger = FastifyBaseLogger
> {
  (
    this: FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>,
    request: FastifyRequest<RouteGeneric, RawServer, RawRequest, SchemaCompiler, TypeProvider, ContextConfig, Logger>,
    reply: FastifyReply<RouteGeneric, RawServer, RawRequest, RawReply, ContextConfig, SchemaCompiler, TypeProvider>,
  ): Promise<unknown>;
}

// helper type which infers whether preValidationHookHandler or preValidationAsyncHookHandler are
// applicable based on the specified return type.
export type preValidationMetaHookHandler<
  RawServer extends RawServerBase = RawServerDefault,
  RawRequest extends RawRequestDefaultExpression<RawServer> = RawRequestDefaultExpression<RawServer>,
  RawReply extends RawReplyDefaultExpression<RawServer> = RawReplyDefaultExpression<RawServer>,
  RouteGeneric extends RouteGenericInterface = RouteGenericInterface,
  ContextConfig = ContextConfigDefault,
  SchemaCompiler extends FastifySchema = FastifySchema,
  TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault,
  Logger extends FastifyBaseLogger = FastifyBaseLogger,
  Return extends ReturnType<preValidationHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>>
  | ReturnType<preValidationAsyncHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>>
  = ReturnType<preValidationHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>>
> = Return extends ReturnType<preValidationHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>>
  ? preValidationHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>
  : preValidationAsyncHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>

/**
 * `preHandler` is the fourth hook to be executed in the request lifecycle. The previous hook was `preValidation`, the next hook will be `preSerialization`.
 */
export interface preHandlerHookHandler<
  RawServer extends RawServerBase = RawServerDefault,
  RawRequest extends RawRequestDefaultExpression<RawServer> = RawRequestDefaultExpression<RawServer>,
  RawReply extends RawReplyDefaultExpression<RawServer> = RawReplyDefaultExpression<RawServer>,
  RouteGeneric extends RouteGenericInterface = RouteGenericInterface,
  ContextConfig = ContextConfigDefault,
  SchemaCompiler extends FastifySchema = FastifySchema,
  TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault,
  Logger extends FastifyBaseLogger = FastifyBaseLogger
> {
  (
    this: FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>,
    request: FastifyRequest<RouteGeneric, RawServer, RawRequest, SchemaCompiler, TypeProvider, ContextConfig, Logger>,
    reply: FastifyReply<RouteGeneric, RawServer, RawRequest, RawReply, ContextConfig, SchemaCompiler, TypeProvider>,
    done: HookHandlerDoneFunction
  ): void;
}

export interface preHandlerAsyncHookHandler<
  RawServer extends RawServerBase = RawServerDefault,
  RawRequest extends RawRequestDefaultExpression<RawServer> = RawRequestDefaultExpression<RawServer>,
  RawReply extends RawReplyDefaultExpression<RawServer> = RawReplyDefaultExpression<RawServer>,
  RouteGeneric extends RouteGenericInterface = RouteGenericInterface,
  ContextConfig = ContextConfigDefault,
  SchemaCompiler extends FastifySchema = FastifySchema,
  TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault,
  Logger extends FastifyBaseLogger = FastifyBaseLogger
> {
  (
    this: FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>,
    request: FastifyRequest<RouteGeneric, RawServer, RawRequest, SchemaCompiler, TypeProvider, ContextConfig, Logger>,
    reply: FastifyReply<RouteGeneric, RawServer, RawRequest, RawReply, ContextConfig, SchemaCompiler, TypeProvider>,
  ): Promise<unknown>;
}

// helper type which infers whether preHandlerHookHandler or preHandlerAsyncHookHandler are
// applicable based on the specified return type.
export type preHandlerMetaHookHandler<
  RawServer extends RawServerBase = RawServerDefault,
  RawRequest extends RawRequestDefaultExpression<RawServer> = RawRequestDefaultExpression<RawServer>,
  RawReply extends RawReplyDefaultExpression<RawServer> = RawReplyDefaultExpression<RawServer>,
  RouteGeneric extends RouteGenericInterface = RouteGenericInterface,
  ContextConfig = ContextConfigDefault,
  SchemaCompiler extends FastifySchema = FastifySchema,
  TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault,
  Logger extends FastifyBaseLogger = FastifyBaseLogger,
  Return extends ReturnType<preHandlerHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>>
  | ReturnType<preHandlerAsyncHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>>
  = ReturnType<preHandlerHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>>
> = Return extends ReturnType<preHandlerHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>>
  ? preHandlerHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>
  : preHandlerAsyncHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>

// This is used within the `preSerialization` and `onSend` hook handlers
interface DoneFuncWithErrOrRes {
  (): void;
  <TError extends Error = FastifyError>(err: TError): void;
  (err: null, res: unknown): void;
}

/**
 * `preSerialization` is the fifth hook to be executed in the request lifecycle. The previous hook was `preHandler`, the next hook will be `onSend`.
 *  Note: the hook is NOT called if the payload is a string, a Buffer, a stream or null.
 */
export interface preSerializationHookHandler<
  PreSerializationPayload = unknown,
  RawServer extends RawServerBase = RawServerDefault,
  RawRequest extends RawRequestDefaultExpression<RawServer> = RawRequestDefaultExpression<RawServer>,
  RawReply extends RawReplyDefaultExpression<RawServer> = RawReplyDefaultExpression<RawServer>,
  RouteGeneric extends RouteGenericInterface = RouteGenericInterface,
  ContextConfig = ContextConfigDefault,
  SchemaCompiler extends FastifySchema = FastifySchema,
  TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault,
  Logger extends FastifyBaseLogger = FastifyBaseLogger
> {
  (
    this: FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>,
    request: FastifyRequest<RouteGeneric, RawServer, RawRequest, SchemaCompiler, TypeProvider, ContextConfig, Logger>,
    reply: FastifyReply<RouteGeneric, RawServer, RawRequest, RawReply, ContextConfig, SchemaCompiler, TypeProvider>,
    payload: PreSerializationPayload,
    done: DoneFuncWithErrOrRes
  ): void;
}

export interface preSerializationAsyncHookHandler<
  PreSerializationPayload = unknown,
  RawServer extends RawServerBase = RawServerDefault,
  RawRequest extends RawRequestDefaultExpression<RawServer> = RawRequestDefaultExpression<RawServer>,
  RawReply extends RawReplyDefaultExpression<RawServer> = RawReplyDefaultExpression<RawServer>,
  RouteGeneric extends RouteGenericInterface = RouteGenericInterface,
  ContextConfig = ContextConfigDefault,
  SchemaCompiler extends FastifySchema = FastifySchema,
  TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault,
  Logger extends FastifyBaseLogger = FastifyBaseLogger
> {
  (
    this: FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>,
    request: FastifyRequest<RouteGeneric, RawServer, RawRequest, SchemaCompiler, TypeProvider, ContextConfig, Logger>,
    reply: FastifyReply<RouteGeneric, RawServer, RawRequest, RawReply, ContextConfig, SchemaCompiler, TypeProvider>,
    payload: PreSerializationPayload
  ): Promise<unknown>;
}

// helper type which infers whether preSerializationHookHandler or preSerializationAsyncHookHandler are
// applicable based on the specified return type.
export type preSerializationMetaHookHandler<
  PreSerializationPayload = unknown,
  RawServer extends RawServerBase = RawServerDefault,
  RawRequest extends RawRequestDefaultExpression<RawServer> = RawRequestDefaultExpression<RawServer>,
  RawReply extends RawReplyDefaultExpression<RawServer> = RawReplyDefaultExpression<RawServer>,
  RouteGeneric extends RouteGenericInterface = RouteGenericInterface,
  ContextConfig = ContextConfigDefault,
  SchemaCompiler extends FastifySchema = FastifySchema,
  TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault,
  Logger extends FastifyBaseLogger = FastifyBaseLogger,
  Return extends ReturnType<preSerializationHookHandler<PreSerializationPayload, RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>>
  | ReturnType<preSerializationAsyncHookHandler<PreSerializationPayload, RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>>
  = ReturnType<preSerializationHookHandler<PreSerializationPayload, RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>>
> = Return extends ReturnType<preSerializationHookHandler<PreSerializationPayload, RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>>
  ? preSerializationHookHandler<PreSerializationPayload, RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>
  : preSerializationAsyncHookHandler<PreSerializationPayload, RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>

/**
 * You can change the payload with the `onSend` hook. It is the sixth hook to be executed in the request lifecycle. The previous hook was `preSerialization`, the next hook will be `onResponse`.
 * Note: If you change the payload, you may only change it to a string, a Buffer, a stream, or null.
 */
export interface onSendHookHandler<
  OnSendPayload = unknown,
  RawServer extends RawServerBase = RawServerDefault,
  RawRequest extends RawRequestDefaultExpression<RawServer> = RawRequestDefaultExpression<RawServer>,
  RawReply extends RawReplyDefaultExpression<RawServer> = RawReplyDefaultExpression<RawServer>,
  RouteGeneric extends RouteGenericInterface = RouteGenericInterface,
  ContextConfig = ContextConfigDefault,
  SchemaCompiler extends FastifySchema = FastifySchema,
  TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault,
  Logger extends FastifyBaseLogger = FastifyBaseLogger
> {
  (
    this: FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>,
    request: FastifyRequest<RouteGeneric, RawServer, RawRequest, SchemaCompiler, TypeProvider, ContextConfig, Logger>,
    reply: FastifyReply<RouteGeneric, RawServer, RawRequest, RawReply, ContextConfig, SchemaCompiler, TypeProvider>,
    payload: OnSendPayload,
    done: DoneFuncWithErrOrRes
  ): void;
}

export interface onSendAsyncHookHandler<
  OnSendPayload = unknown,
  RawServer extends RawServerBase = RawServerDefault,
  RawRequest extends RawRequestDefaultExpression<RawServer> = RawRequestDefaultExpression<RawServer>,
  RawReply extends RawReplyDefaultExpression<RawServer> = RawReplyDefaultExpression<RawServer>,
  RouteGeneric extends RouteGenericInterface = RouteGenericInterface,
  ContextConfig = ContextConfigDefault,
  SchemaCompiler extends FastifySchema = FastifySchema,
  TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault,
  Logger extends FastifyBaseLogger = FastifyBaseLogger
> {
  (
    this: FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>,
    request: FastifyRequest<RouteGeneric, RawServer, RawRequest, SchemaCompiler, TypeProvider, ContextConfig, Logger>,
    reply: FastifyReply<RouteGeneric, RawServer, RawRequest, RawReply, ContextConfig, SchemaCompiler, TypeProvider>,
    payload: OnSendPayload,
  ): Promise<unknown>;
}

// helper type which infers whether onSendHookHandler or onSendAsyncHookHandler are
// applicable based on the specified return type.
export type onSendMetaHookHandler<
  OnSendPayload = unknown,
  RawServer extends RawServerBase = RawServerDefault,
  RawRequest extends RawRequestDefaultExpression<RawServer> = RawRequestDefaultExpression<RawServer>,
  RawReply extends RawReplyDefaultExpression<RawServer> = RawReplyDefaultExpression<RawServer>,
  RouteGeneric extends RouteGenericInterface = RouteGenericInterface,
  ContextConfig = ContextConfigDefault,
  SchemaCompiler extends FastifySchema = FastifySchema,
  TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault,
  Logger extends FastifyBaseLogger = FastifyBaseLogger,
  Return extends ReturnType<onSendHookHandler<OnSendPayload, RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>>
  | ReturnType<onSendAsyncHookHandler<OnSendPayload, RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>>
  = ReturnType<onSendHookHandler<OnSendPayload, RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>>
> = Return extends ReturnType<onSendHookHandler<OnSendPayload, RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>>
  ? onSendHookHandler<OnSendPayload, RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>
  : onSendAsyncHookHandler<OnSendPayload, RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>

/**
 * `onResponse` is the seventh and last hook in the request hook lifecycle. The previous hook was `onSend`, there is no next hook.
 * The onResponse hook is executed when a response has been sent, so you will not be able to send more data to the client. It can however be useful for sending data to external services, for example to gather statistics.
 */
export interface onResponseHookHandler<
  RawServer extends RawServerBase = RawServerDefault,
  RawRequest extends RawRequestDefaultExpression<RawServer> = RawRequestDefaultExpression<RawServer>,
  RawReply extends RawReplyDefaultExpression<RawServer> = RawReplyDefaultExpression<RawServer>,
  RouteGeneric extends RouteGenericInterface = RouteGenericInterface,
  ContextConfig = ContextConfigDefault,
  SchemaCompiler extends FastifySchema = FastifySchema,
  TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault,
  Logger extends FastifyBaseLogger = FastifyBaseLogger
> {
  (
    this: FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>,
    request: FastifyRequest<RouteGeneric, RawServer, RawRequest, SchemaCompiler, TypeProvider, ContextConfig, Logger>,
    reply: FastifyReply<RouteGeneric, RawServer, RawRequest, RawReply, ContextConfig, SchemaCompiler, TypeProvider>,
    done: HookHandlerDoneFunction
  ): void;
}

export interface onResponseAsyncHookHandler<
  RawServer extends RawServerBase = RawServerDefault,
  RawRequest extends RawRequestDefaultExpression<RawServer> = RawRequestDefaultExpression<RawServer>,
  RawReply extends RawReplyDefaultExpression<RawServer> = RawReplyDefaultExpression<RawServer>,
  RouteGeneric extends RouteGenericInterface = RouteGenericInterface,
  ContextConfig = ContextConfigDefault,
  SchemaCompiler extends FastifySchema = FastifySchema,
  TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault,
  Logger extends FastifyBaseLogger = FastifyBaseLogger
> {
  (
    this: FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>,
    request: FastifyRequest<RouteGeneric, RawServer, RawRequest, SchemaCompiler, TypeProvider, ContextConfig, Logger>,
    reply: FastifyReply<RouteGeneric, RawServer, RawRequest, RawReply, ContextConfig, SchemaCompiler, TypeProvider>
  ): Promise<unknown>;
}

// helper type which infers whether onResponseHookHandler or onResponseAsyncHookHandler are
// applicable based on the specified return type.
export type onResponseMetaHookHandler<
  RawServer extends RawServerBase = RawServerDefault,
  RawRequest extends RawRequestDefaultExpression<RawServer> = RawRequestDefaultExpression<RawServer>,
  RawReply extends RawReplyDefaultExpression<RawServer> = RawReplyDefaultExpression<RawServer>,
  RouteGeneric extends RouteGenericInterface = RouteGenericInterface,
  ContextConfig = ContextConfigDefault,
  SchemaCompiler extends FastifySchema = FastifySchema,
  TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault,
  Logger extends FastifyBaseLogger = FastifyBaseLogger,
  Return extends ReturnType<onResponseHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>>
  | ReturnType<onResponseAsyncHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>>
  = ReturnType<onResponseHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>>
> = Return extends ReturnType<onResponseHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>>
  ? onResponseHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>
  : onResponseAsyncHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>

/**
 * `onTimeout` is useful if you need to monitor the request timed out in your service. (if the `connectionTimeout` property is set on the fastify instance)
 * The onTimeout hook is executed when a request is timed out and the http socket has been hanged up. Therefore you will not be able to send data to the client.
 */
export interface onTimeoutHookHandler<
  RawServer extends RawServerBase = RawServerDefault,
  RawRequest extends RawRequestDefaultExpression<RawServer> = RawRequestDefaultExpression<RawServer>,
  RawReply extends RawReplyDefaultExpression<RawServer> = RawReplyDefaultExpression<RawServer>,
  RouteGeneric extends RouteGenericInterface = RouteGenericInterface,
  ContextConfig = ContextConfigDefault,
  SchemaCompiler extends FastifySchema = FastifySchema,
  TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault,
  Logger extends FastifyBaseLogger = FastifyBaseLogger
> {
  (
    this: FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>,
    request: FastifyRequest<RouteGeneric, RawServer, RawRequest, SchemaCompiler, TypeProvider, ContextConfig, Logger>,
    reply: FastifyReply<RouteGeneric, RawServer, RawRequest, RawReply, ContextConfig, SchemaCompiler, TypeProvider>,
    done: HookHandlerDoneFunction
  ): void;
}

export interface onTimeoutAsyncHookHandler<
  RawServer extends RawServerBase = RawServerDefault,
  RawRequest extends RawRequestDefaultExpression<RawServer> = RawRequestDefaultExpression<RawServer>,
  RawReply extends RawReplyDefaultExpression<RawServer> = RawReplyDefaultExpression<RawServer>,
  RouteGeneric extends RouteGenericInterface = RouteGenericInterface,
  ContextConfig = ContextConfigDefault,
  SchemaCompiler extends FastifySchema = FastifySchema,
  TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault,
  Logger extends FastifyBaseLogger = FastifyBaseLogger
> {
  (
    this: FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>,
    request: FastifyRequest<RouteGeneric, RawServer, RawRequest, SchemaCompiler, TypeProvider, ContextConfig, Logger>,
    reply: FastifyReply<RouteGeneric, RawServer, RawRequest, RawReply, ContextConfig, SchemaCompiler, TypeProvider>
  ): Promise<unknown>;
}

// helper type which infers whether onTimeoutHookHandler or onTimeoutAsyncHookHandler are
// applicable based on the specified return type.
export type onTimeoutMetaHookHandler<
  RawServer extends RawServerBase = RawServerDefault,
  RawRequest extends RawRequestDefaultExpression<RawServer> = RawRequestDefaultExpression<RawServer>,
  RawReply extends RawReplyDefaultExpression<RawServer> = RawReplyDefaultExpression<RawServer>,
  RouteGeneric extends RouteGenericInterface = RouteGenericInterface,
  ContextConfig = ContextConfigDefault,
  SchemaCompiler extends FastifySchema = FastifySchema,
  TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault,
  Logger extends FastifyBaseLogger = FastifyBaseLogger,
  Return extends ReturnType<onTimeoutHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>>
  | ReturnType<onTimeoutAsyncHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>>
  = ReturnType<onTimeoutHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>>
> = Return extends ReturnType<onTimeoutHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>>
  ? onTimeoutHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>
  : onTimeoutAsyncHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>

/**
 * This hook is useful if you need to do some custom error logging or add some specific header in case of error.
 * It is not intended for changing the error, and calling reply.send will throw an exception.
 * This hook will be executed before the customErrorHandler.
 * Notice: unlike the other hooks, pass an error to the done function is not supported.
 */
export interface onErrorHookHandler<
  RawServer extends RawServerBase = RawServerDefault,
  RawRequest extends RawRequestDefaultExpression<RawServer> = RawRequestDefaultExpression<RawServer>,
  RawReply extends RawReplyDefaultExpression<RawServer> = RawReplyDefaultExpression<RawServer>,
  RouteGeneric extends RouteGenericInterface = RouteGenericInterface,
  ContextConfig = ContextConfigDefault,
  TError extends Error = FastifyError,
  SchemaCompiler extends FastifySchema = FastifySchema,
  TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault,
  Logger extends FastifyBaseLogger = FastifyBaseLogger
> {
  (
    this: FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>,
    request: FastifyRequest<RouteGeneric, RawServer, RawRequest, SchemaCompiler, TypeProvider, ContextConfig, Logger>,
    reply: FastifyReply<RouteGeneric, RawServer, RawRequest, RawReply, ContextConfig, SchemaCompiler, TypeProvider>,
    error: TError,
    done: () => void
  ): void;
}

export interface onErrorAsyncHookHandler<
  RawServer extends RawServerBase = RawServerDefault,
  RawRequest extends RawRequestDefaultExpression<RawServer> = RawRequestDefaultExpression<RawServer>,
  RawReply extends RawReplyDefaultExpression<RawServer> = RawReplyDefaultExpression<RawServer>,
  RouteGeneric extends RouteGenericInterface = RouteGenericInterface,
  ContextConfig = ContextConfigDefault,
  TError extends Error = FastifyError,
  SchemaCompiler extends FastifySchema = FastifySchema,
  TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault,
  Logger extends FastifyBaseLogger = FastifyBaseLogger
> {
  (
    this: FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>,
    request: FastifyRequest<RouteGeneric, RawServer, RawRequest, SchemaCompiler, TypeProvider, ContextConfig, Logger>,
    reply: FastifyReply<RouteGeneric, RawServer, RawRequest, RawReply, ContextConfig, SchemaCompiler, TypeProvider>,
    error: TError
  ): Promise<unknown>;
}

// helper type which infers whether onErrorHookHandler or onErrorAsyncHookHandler are
// applicable based on the specified return type.
export type onErrorMetaHookHandler<
  RawServer extends RawServerBase = RawServerDefault,
  RawRequest extends RawRequestDefaultExpression<RawServer> = RawRequestDefaultExpression<RawServer>,
  RawReply extends RawReplyDefaultExpression<RawServer> = RawReplyDefaultExpression<RawServer>,
  RouteGeneric extends RouteGenericInterface = RouteGenericInterface,
  ContextConfig = ContextConfigDefault,
  TError extends Error = FastifyError,
  SchemaCompiler extends FastifySchema = FastifySchema,
  TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault,
  Logger extends FastifyBaseLogger = FastifyBaseLogger,
  Return extends ReturnType<onErrorHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, TError, SchemaCompiler, TypeProvider, Logger>>
  | ReturnType<onErrorAsyncHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, TError, SchemaCompiler, TypeProvider, Logger>>
  = ReturnType<onErrorHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, TError, SchemaCompiler, TypeProvider, Logger>>
> = Return extends ReturnType<onErrorHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, TError, SchemaCompiler, TypeProvider, Logger>>
  ? onErrorHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, TError, SchemaCompiler, TypeProvider, Logger>
  : onErrorAsyncHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, TError, SchemaCompiler, TypeProvider, Logger>

/**
 * `onRequestAbort` is useful if you need to monitor the if the client aborts the request (if the `request.raw.aborted` property is set to `true`).
 * The `onRequestAbort` hook is executed when a client closes the connection before the entire request has been received. Therefore, you will not be able to send data to the client.
 * Notice: client abort detection is not completely reliable. See: https://github.com/fastify/fastify/blob/main/docs/Guides/Detecting-When-Clients-Abort.md
 */
export interface onRequestAbortHookHandler<
  RawServer extends RawServerBase = RawServerDefault,
  RawRequest extends RawRequestDefaultExpression<RawServer> = RawRequestDefaultExpression<RawServer>,
  RawReply extends RawReplyDefaultExpression<RawServer> = RawReplyDefaultExpression<RawServer>,
  RouteGeneric extends RouteGenericInterface = RouteGenericInterface,
  ContextConfig = ContextConfigDefault,
  SchemaCompiler extends FastifySchema = FastifySchema,
  TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault,
  Logger extends FastifyBaseLogger = FastifyBaseLogger
> {
  (
    this: FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>,
    request: FastifyRequest<RouteGeneric, RawServer, RawRequest, SchemaCompiler, TypeProvider, ContextConfig, Logger>,
    done: HookHandlerDoneFunction
  ): void;
}

export interface onRequestAbortAsyncHookHandler<
  RawServer extends RawServerBase = RawServerDefault,
  RawRequest extends RawRequestDefaultExpression<RawServer> = RawRequestDefaultExpression<RawServer>,
  RawReply extends RawReplyDefaultExpression<RawServer> = RawReplyDefaultExpression<RawServer>,
  RouteGeneric extends RouteGenericInterface = RouteGenericInterface,
  ContextConfig = ContextConfigDefault,
  SchemaCompiler extends FastifySchema = FastifySchema,
  TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault,
  Logger extends FastifyBaseLogger = FastifyBaseLogger
> {
  (
    this: FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>,
    request: FastifyRequest<RouteGeneric, RawServer, RawRequest, SchemaCompiler, TypeProvider, ContextConfig, Logger>,
  ): Promise<unknown>;
}

// helper type which infers whether onRequestAbortHookHandler or onRequestAbortHookHandler are
// applicable based on the specified return type.
export type onRequestAbortMetaHookHandler<
  RawServer extends RawServerBase = RawServerDefault,
  RawRequest extends RawRequestDefaultExpression<RawServer> = RawRequestDefaultExpression<RawServer>,
  RawReply extends RawReplyDefaultExpression<RawServer> = RawReplyDefaultExpression<RawServer>,
  RouteGeneric extends RouteGenericInterface = RouteGenericInterface,
  ContextConfig = ContextConfigDefault,
  SchemaCompiler extends FastifySchema = FastifySchema,
  TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault,
  Logger extends FastifyBaseLogger = FastifyBaseLogger,
  Return extends ReturnType<onRequestAbortHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>>
  | ReturnType<onRequestAbortAsyncHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>>
  = ReturnType<onRequestAbortHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>>
> = Return extends ReturnType<onRequestAbortHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>>
  ? onRequestAbortHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>
  : onRequestAbortAsyncHookHandler<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>

export type LifecycleHook = 'onRequest'
| 'preParsing'
| 'preValidation'
| 'preHandler'
| 'preSerialization'
| 'onSend'
| 'onResponse'
| 'onRequest'
| 'onError'
| 'onTimeout'
| 'onRequestAbort'

export type LifecycleHookLookup<K extends LifecycleHook> = K extends 'onRequest'
  ? onRequestHookHandler
  : K extends 'preParsing'
    ? preParsingHookHandler
    : K extends 'preValidation'
      ? preValidationHookHandler
      : K extends 'preHandler'
        ? preHandlerHookHandler
        : K extends 'preSerialization'
          ? preSerializationHookHandler
          : K extends 'onSend'
            ? onSendHookHandler
            : K extends 'onResponse'
              ? onResponseHookHandler
              : K extends 'onRequest'
                ? onRequestHookHandler
                : K extends 'onError'
                  ? onErrorHookHandler
                  : K extends 'onTimeout'
                    ? onTimeoutHookHandler
                    : K extends 'onRequestAbort'
                      ? onRequestAbortHookHandler
                      : never

export type LifecycleHookAsyncLookup<K extends LifecycleHook> = K extends 'onRequest'
  ? onRequestAsyncHookHandler
  : K extends 'preParsing'
    ? preParsingAsyncHookHandler
    : K extends 'preValidation'
      ? preValidationAsyncHookHandler
      : K extends 'preHandler'
        ? preHandlerAsyncHookHandler
        : K extends 'preSerialization'
          ? preSerializationAsyncHookHandler
          : K extends 'onSend'
            ? onSendAsyncHookHandler
            : K extends 'onResponse'
              ? onResponseAsyncHookHandler
              : K extends 'onRequest'
                ? onRequestAsyncHookHandler
                : K extends 'onError'
                  ? onErrorAsyncHookHandler
                  : K extends 'onTimeout'
                    ? onTimeoutAsyncHookHandler
                    : K extends 'onRequestAbort'
                      ? onRequestAbortAsyncHookHandler
                      : never

// Application Hooks

/**
 * Triggered when a new route is registered. Listeners are passed a routeOptions object as the sole parameter. The interface is synchronous, and, as such, the listener does not get passed a callback
 */
export interface onRouteHookHandler<
  RawServer extends RawServerBase = RawServerDefault,
  RawRequest extends RawRequestDefaultExpression<RawServer> = RawRequestDefaultExpression<RawServer>,
  RawReply extends RawReplyDefaultExpression<RawServer> = RawReplyDefaultExpression<RawServer>,
  RouteGeneric extends RouteGenericInterface = RouteGenericInterface,
  ContextConfig = ContextConfigDefault,
  SchemaCompiler extends FastifySchema = FastifySchema,
  TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault,
  Logger extends FastifyBaseLogger = FastifyBaseLogger
> {
  (
    this: FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>,
    opts: RouteOptions<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider> & { routePath: string; path: string; prefix: string }
  ): Promise<unknown> | void;
}

/**
 * Triggered when a new plugin is registered and a new encapsulation context is created. The hook will be executed before the registered code.
 * This hook can be useful if you are developing a plugin that needs to know when a plugin context is formed, and you want to operate in that specific context.
 * Note: This hook will not be called if a plugin is wrapped inside fastify-plugin.
 */
export interface onRegisterHookHandler<
  RawServer extends RawServerBase = RawServerDefault,
  RawRequest extends RawRequestDefaultExpression<RawServer> = RawRequestDefaultExpression<RawServer>,
  RawReply extends RawReplyDefaultExpression<RawServer> = RawReplyDefaultExpression<RawServer>,
  Logger extends FastifyBaseLogger = FastifyBaseLogger,
  TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault,
  Options extends FastifyPluginOptions = FastifyPluginOptions
> {
  (
    this: FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>,
    instance: FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>,
    opts: RegisterOptions & Options
  ): Promise<unknown> | void;
}

/**
 * Triggered when fastify.listen() or fastify.ready() is invoked to start the server. It is useful when plugins need a "ready" event, for example to load data before the server start listening for requests.
 */
export interface onReadyHookHandler<
  RawServer extends RawServerBase = RawServerDefault,
  RawRequest extends RawRequestDefaultExpression<RawServer> = RawRequestDefaultExpression<RawServer>,
  RawReply extends RawReplyDefaultExpression<RawServer> = RawReplyDefaultExpression<RawServer>,
  Logger extends FastifyBaseLogger = FastifyBaseLogger,
  TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault
> {
  (
    this: FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>,
    done: HookHandlerDoneFunction
  ): void;
}

export interface onReadyAsyncHookHandler<
  RawServer extends RawServerBase = RawServerDefault,
  RawRequest extends RawRequestDefaultExpression<RawServer> = RawRequestDefaultExpression<RawServer>,
  RawReply extends RawReplyDefaultExpression<RawServer> = RawReplyDefaultExpression<RawServer>,
  Logger extends FastifyBaseLogger = FastifyBaseLogger,
  TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault
> {
  (
    this: FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>,
  ): Promise<unknown>;
}

/**
 * Triggered when fastify.listen() is invoked to start the server. It is useful when plugins need a "onListen" event, for example to run logics after the server start listening for requests.
 */
export interface onListenHookHandler<
  RawServer extends RawServerBase = RawServerDefault,
  RawRequest extends RawRequestDefaultExpression<RawServer> = RawRequestDefaultExpression<RawServer>,
  RawReply extends RawReplyDefaultExpression<RawServer> = RawReplyDefaultExpression<RawServer>,
  Logger extends FastifyBaseLogger = FastifyBaseLogger,
  TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault
> {
  (
    this: FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>,
    done: HookHandlerDoneFunction
  ): void;
}

export interface onListenAsyncHookHandler<
  RawServer extends RawServerBase = RawServerDefault,
  RawRequest extends RawRequestDefaultExpression<RawServer> = RawRequestDefaultExpression<RawServer>,
  RawReply extends RawReplyDefaultExpression<RawServer> = RawReplyDefaultExpression<RawServer>,
  Logger extends FastifyBaseLogger = FastifyBaseLogger,
  TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault
> {
  (
    this: FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>,
  ): Promise<unknown>;
}
/**
 * Triggered when fastify.close() is invoked to stop the server. It is useful when plugins need a "shutdown" event, for example to close an open connection to a database.
 */
export interface onCloseHookHandler<
  RawServer extends RawServerBase = RawServerDefault,
  RawRequest extends RawRequestDefaultExpression<RawServer> = RawRequestDefaultExpression<RawServer>,
  RawReply extends RawReplyDefaultExpression<RawServer> = RawReplyDefaultExpression<RawServer>,
  Logger extends FastifyBaseLogger = FastifyBaseLogger,
  TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault
> {
  (
    this: FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>,
    instance: FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>,
    done: HookHandlerDoneFunction
  ): void;
}

export interface onCloseAsyncHookHandler<
  RawServer extends RawServerBase = RawServerDefault,
  RawRequest extends RawRequestDefaultExpression<RawServer> = RawRequestDefaultExpression<RawServer>,
  RawReply extends RawReplyDefaultExpression<RawServer> = RawReplyDefaultExpression<RawServer>,
  Logger extends FastifyBaseLogger = FastifyBaseLogger,
  TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault
> {
  (
    this: FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>,
    instance: FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>
  ): Promise<unknown>;
}

/**
 * Triggered when fastify.close() is invoked to stop the server. It is useful when plugins need to cancel some state to allow the server to close successfully.
 */
export interface preCloseHookHandler<
  RawServer extends RawServerBase = RawServerDefault,
  RawRequest extends RawRequestDefaultExpression<RawServer> = RawRequestDefaultExpression<RawServer>,
  RawReply extends RawReplyDefaultExpression<RawServer> = RawReplyDefaultExpression<RawServer>,
  Logger extends FastifyBaseLogger = FastifyBaseLogger,
  TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault
> {
  (
    this: FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>,
    done: HookHandlerDoneFunction
  ): void;
}

export interface preCloseAsyncHookHandler<
  RawServer extends RawServerBase = RawServerDefault,
  RawRequest extends RawRequestDefaultExpression<RawServer> = RawRequestDefaultExpression<RawServer>,
  RawReply extends RawReplyDefaultExpression<RawServer> = RawReplyDefaultExpression<RawServer>,
  Logger extends FastifyBaseLogger = FastifyBaseLogger,
  TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault
> {
  (
    this: FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>,
  ): Promise<unknown>;
}

export type ApplicationHook = 'onRoute'
| 'onRegister'
| 'onReady'
| 'onListen'
| 'onClose'
| 'preClose'

export type ApplicationHookLookup<K extends ApplicationHook> = K extends 'onRegister'
  ? onRegisterHookHandler
  : K extends 'onReady'
    ? onReadyHookHandler
    : K extends 'onListen'
      ? onListenHookHandler
      : K extends 'onClose'
        ? onCloseHookHandler
        : K extends 'preClose'
          ? preCloseHookHandler
          : K extends 'onRoute'
            ? onRouteHookHandler
            : never

export type ApplicationHookAsyncLookup<K extends ApplicationHook> = K extends 'onRegister'
  ? onRegisterHookHandler
  : K extends 'onReady'
    ? onReadyAsyncHookHandler
    : K extends 'onListen'
      ? onListenAsyncHookHandler
      : K extends 'onClose'
        ? onCloseAsyncHookHandler
        : K extends 'preClose'
          ? preCloseAsyncHookHandler
          : never

export type HookLookup <K extends ApplicationHook | LifecycleHook> = K extends ApplicationHook
  ? ApplicationHookLookup<K>
  : K extends LifecycleHook
    ? LifecycleHookLookup<K>
    : never

export type HookAsyncLookup <K extends ApplicationHook | LifecycleHook> = K extends ApplicationHook
  ? ApplicationHookAsyncLookup<K>
  : K extends LifecycleHook
    ? LifecycleHookAsyncLookup<K>
    : never
