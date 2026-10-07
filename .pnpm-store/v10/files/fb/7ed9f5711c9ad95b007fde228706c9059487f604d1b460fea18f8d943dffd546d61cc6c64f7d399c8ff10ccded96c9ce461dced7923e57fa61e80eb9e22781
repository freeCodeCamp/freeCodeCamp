import { RouteGenericInterface } from './route'
import { FastifySchema } from './schema'
import { HttpKeys, RecordKeysToLowercase } from './utils'

// -----------------------------------------------------------------------------------------------
// TypeProvider
// -----------------------------------------------------------------------------------------------

export interface FastifyTypeProvider {
  readonly schema: unknown,
  readonly validator: unknown,
  readonly serializer: unknown,
}

export interface FastifyTypeProviderDefault extends FastifyTypeProvider {}

export type CallValidatorTypeProvider<F extends FastifyTypeProvider, S> = (F & { schema: S })['validator']
export type CallSerializerTypeProvider<F extends FastifyTypeProvider, S> = (F & { schema: S })['serializer']

// -----------------------------------------------------------------------------------------------
// FastifyRequestType
// -----------------------------------------------------------------------------------------------

// Used to map undefined SchemaCompiler properties to unknown
//   Without brackets, UndefinedToUnknown<undefined | null> => unknown
type UndefinedToUnknown<T> = [T] extends [undefined] ? unknown : T

// union-aware keyof operator
//    keyof ({ a: number} | { b: number}) => never
//    KeysOf<{a: number} | {b: number}>   => "a" | "b"
// this exists to allow users to override faulty type-provider logic.
type KeysOf<T> = T extends any ? keyof T : never

// Resolves Request types either from generic argument or Type Provider.
type ResolveRequestParams<TypeProvider extends FastifyTypeProvider, SchemaCompiler extends FastifySchema, RouteGeneric extends RouteGenericInterface> =
  UndefinedToUnknown<KeysOf<RouteGeneric['Params']> extends never ? CallValidatorTypeProvider<TypeProvider, SchemaCompiler['params']> : RouteGeneric['Params']>
type ResolveRequestQuerystring<TypeProvider extends FastifyTypeProvider, SchemaCompiler extends FastifySchema, RouteGeneric extends RouteGenericInterface> =
  UndefinedToUnknown<KeysOf<RouteGeneric['Querystring']> extends never ? CallValidatorTypeProvider<TypeProvider, SchemaCompiler['querystring']> : RouteGeneric['Querystring']>
type ResolveRequestHeaders<TypeProvider extends FastifyTypeProvider, SchemaCompiler extends FastifySchema, RouteGeneric extends RouteGenericInterface> =
  UndefinedToUnknown<KeysOf<RouteGeneric['Headers']> extends never ? CallValidatorTypeProvider<TypeProvider, SchemaCompiler['headers']> : RouteGeneric['Headers']>
type ResolveRequestBody<TypeProvider extends FastifyTypeProvider, SchemaCompiler extends FastifySchema, RouteGeneric extends RouteGenericInterface> =
  UndefinedToUnknown<KeysOf<RouteGeneric['Body']> extends never ? CallValidatorTypeProvider<TypeProvider, SchemaCompiler['body']> : RouteGeneric['Body']>

// The target request type. This type is inferenced on fastify 'requests' via generic argument assignment
export interface FastifyRequestType<Params = unknown, Querystring = unknown, Headers = unknown, Body = unknown> {
  params: Params,
  query: Querystring,
  headers: Headers,
  body: Body
}

// Resolves the FastifyRequest generic parameters
export interface ResolveFastifyRequestType<TypeProvider extends FastifyTypeProvider, SchemaCompiler extends FastifySchema, RouteGeneric extends RouteGenericInterface> extends FastifyRequestType {
  params: ResolveRequestParams<TypeProvider, SchemaCompiler, RouteGeneric>,
  query: ResolveRequestQuerystring<TypeProvider, SchemaCompiler, RouteGeneric>,
  headers: RecordKeysToLowercase<ResolveRequestHeaders<TypeProvider, SchemaCompiler, RouteGeneric>>,
  body: ResolveRequestBody<TypeProvider, SchemaCompiler, RouteGeneric>
}

// -----------------------------------------------------------------------------------------------
// FastifyReplyType
// -----------------------------------------------------------------------------------------------

// Resolves the Reply type by taking a union of response status codes and content-types
type ResolveReplyFromSchemaCompiler<TypeProvider extends FastifyTypeProvider, SchemaCompiler extends FastifySchema> = {
  [K1 in keyof SchemaCompiler['response']]: SchemaCompiler['response'][K1] extends { content: { [keyof: string]: { schema: unknown } } } ? ({
    [K2 in keyof SchemaCompiler['response'][K1]['content']]: CallSerializerTypeProvider<TypeProvider, SchemaCompiler['response'][K1]['content'][K2]['schema']>
  } extends infer Result ? Result[keyof Result] : unknown) : CallSerializerTypeProvider<TypeProvider, SchemaCompiler['response'][K1]>
} extends infer Result ? Result[keyof Result] : unknown

// The target reply type. This type is inferenced on fastify 'replies' via generic argument assignment
export type FastifyReplyType<Reply = unknown> = Reply

// Resolves the Reply type either via generic argument or from response schema. This type uses a different
// resolution strategy to Requests where the Reply will infer a union of each status code type specified
// by the user. The Reply can be explicitly overridden by users providing a generic Reply type on the route.
export type ResolveFastifyReplyType<TypeProvider extends FastifyTypeProvider, SchemaCompiler extends FastifySchema, RouteGeneric extends RouteGenericInterface> = UndefinedToUnknown<KeysOf<RouteGeneric['Reply']> extends never ? ResolveReplyFromSchemaCompiler<TypeProvider, SchemaCompiler> : RouteGeneric['Reply']>

// -----------------------------------------------------------------------------------------------
// FastifyReplyReturnType
// -----------------------------------------------------------------------------------------------

// Resolves the Reply return type by taking a union of response status codes in the generic argument
type ResolveReplyReturnTypeFromRouteGeneric<RouteGeneric extends RouteGenericInterface> = RouteGeneric extends { Reply: infer Return }
  ? keyof Return extends HttpKeys ? Return[keyof Return] | Return : Return
  : unknown

// The target reply return type. This type is inferenced on fastify 'routes' via generic argument assignment
export type ResolveFastifyReplyReturnType<
  TypeProvider extends FastifyTypeProvider,
  SchemaCompiler extends FastifySchema,
  RouteGeneric extends RouteGenericInterface
> = ResolveFastifyReplyType<
TypeProvider,
SchemaCompiler,
RouteGeneric
> extends infer ReplyType
  ? RouteGeneric['Reply'] extends ReplyType
    ? ResolveReplyReturnTypeFromRouteGeneric<RouteGeneric> extends infer Return
      ? Return | void | Promise<Return | void>
      : unknown
    : ReplyType | void | Promise<ReplyType | void>
// review: support both async and sync return types
// (Promise<Return> | Return | Promise<void> | void)
  : unknown

/**
 * This branded type is needed to indicate APIs that return Promise-likes which can
 * safely "float" (not have rejections handled by calling code).
 *
 * Please refer to the following Github issue for more info:
 * https://github.com/fastify/fastify/issues/5498
 */
export type SafePromiseLike<T> = PromiseLike<T> & { __linterBrands: 'SafePromiseLike' }

// -----------------------------------------------------------------------------------------------
// SendArgs
// -----------------------------------------------------------------------------------------------

/**
 * Determines whether the send() payload parameter should be required or optional.
 * - When ReplyType is unknown (default/unspecified), payload is optional
 * - When ReplyType is undefined or void, payload is optional (returning undefined is valid)
 * - Otherwise, payload is required
 */
export type SendArgs<ReplyType> = unknown extends ReplyType
  ? [payload?: ReplyType]
  : [ReplyType] extends [undefined | void]
      ? [payload?: ReplyType]
      : [payload: ReplyType]
