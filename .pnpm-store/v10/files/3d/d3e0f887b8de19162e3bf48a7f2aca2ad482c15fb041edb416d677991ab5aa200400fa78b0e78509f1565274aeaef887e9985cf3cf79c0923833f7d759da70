import { Buffer } from 'node:buffer'
import { FastifyInstance } from './instance'
import { FastifyBaseLogger } from './logger'
import { FastifyRequest, RequestRouteOptions } from './request'
import { RouteGenericInterface } from './route'
import { FastifySchema } from './schema'
import { CallSerializerTypeProvider, FastifyReplyType, FastifyTypeProvider, FastifyTypeProviderDefault, ResolveFastifyReplyType, SendArgs } from './type-provider'
import { CodeToReplyKey, ContextConfigDefault, HttpHeader, HttpKeys, RawReplyDefaultExpression, RawRequestDefaultExpression, RawServerBase, RawServerDefault, ReplyDefault, ReplyKeysToCodes } from './utils'

export interface ReplyGenericInterface {
  Reply?: ReplyDefault;
}

type HttpCodesReplyType = Partial<Record<HttpKeys, unknown>>

type ReplyTypeConstrainer<RouteGenericReply, Code extends ReplyKeysToCodes<keyof RouteGenericReply>> =
  RouteGenericReply extends HttpCodesReplyType & Record<Exclude<keyof RouteGenericReply, keyof HttpCodesReplyType>, never> ?
    Code extends keyof RouteGenericReply ? RouteGenericReply[Code] :
      CodeToReplyKey<Code> extends keyof RouteGenericReply ? RouteGenericReply[CodeToReplyKey<Code>] : unknown :
    RouteGenericReply

export type ResolveReplyTypeWithRouteGeneric<RouteGenericReply, Code extends ReplyKeysToCodes<keyof RouteGenericReply>,
  SchemaCompiler extends FastifySchema = FastifySchema,
  TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault> =
  Code extends keyof SchemaCompiler['response'] ?
    CallSerializerTypeProvider<TypeProvider, SchemaCompiler['response'][Code]> :
    ResolveFastifyReplyType<TypeProvider, SchemaCompiler, { Reply: ReplyTypeConstrainer<RouteGenericReply, Code> }>
/**
 * FastifyReply is an instance of the standard http or http2 reply types.
 * It defaults to http.ServerResponse, and it also extends the relative reply object.
 */
export interface FastifyReply<
  RouteGeneric extends RouteGenericInterface = RouteGenericInterface,
  RawServer extends RawServerBase = RawServerDefault,
  RawRequest extends RawRequestDefaultExpression<RawServer> = RawRequestDefaultExpression<RawServer>,
  RawReply extends RawReplyDefaultExpression<RawServer> = RawReplyDefaultExpression<RawServer>,
  ContextConfig = ContextConfigDefault,
  SchemaCompiler extends FastifySchema = FastifySchema,
  TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault,
  ReplyType extends FastifyReplyType = ResolveFastifyReplyType<TypeProvider, SchemaCompiler, RouteGeneric>
> {
  readonly routeOptions: Readonly<RequestRouteOptions<ContextConfig, SchemaCompiler>>

  raw: RawReply;
  elapsedTime: number;
  log: FastifyBaseLogger;
  request: FastifyRequest<RouteGeneric, RawServer, RawRequest, SchemaCompiler, TypeProvider>;
  server: FastifyInstance;
  code<Code extends keyof SchemaCompiler['response'] extends never ? ReplyKeysToCodes<keyof RouteGeneric['Reply']> : keyof SchemaCompiler['response'] extends ReplyKeysToCodes<keyof RouteGeneric['Reply']> ? keyof SchemaCompiler['response'] : ReplyKeysToCodes<keyof RouteGeneric['Reply']>>(statusCode: Code): FastifyReply<RouteGeneric, RawServer, RawRequest, RawReply, ContextConfig, SchemaCompiler, TypeProvider, ResolveReplyTypeWithRouteGeneric<RouteGeneric['Reply'], Code, SchemaCompiler, TypeProvider>>;
  status<Code extends keyof SchemaCompiler['response'] extends never ? ReplyKeysToCodes<keyof RouteGeneric['Reply']> : keyof SchemaCompiler['response'] extends ReplyKeysToCodes<keyof RouteGeneric['Reply']> ? keyof SchemaCompiler['response'] : ReplyKeysToCodes<keyof RouteGeneric['Reply']>>(statusCode: Code): FastifyReply<RouteGeneric, RawServer, RawRequest, RawReply, ContextConfig, SchemaCompiler, TypeProvider, ResolveReplyTypeWithRouteGeneric<RouteGeneric['Reply'], Code, SchemaCompiler, TypeProvider>>;
  statusCode: number;
  sent: boolean;
  send(...args: SendArgs<ReplyType>): FastifyReply<RouteGeneric, RawServer, RawRequest, RawReply, ContextConfig, SchemaCompiler, TypeProvider>;
  header(key: HttpHeader, value: any): FastifyReply<RouteGeneric, RawServer, RawRequest, RawReply, ContextConfig, SchemaCompiler, TypeProvider>;
  headers(values: Partial<Record<HttpHeader, number | string | string[] | undefined>>): FastifyReply<RouteGeneric, RawServer, RawRequest, RawReply, ContextConfig, SchemaCompiler, TypeProvider>;
  getHeader(key: HttpHeader): number | string | string[] | undefined;
  getHeaders(): Record<HttpHeader, number | string | string[] | undefined>;
  removeHeader(key: HttpHeader): FastifyReply<RouteGeneric, RawServer, RawRequest, RawReply, ContextConfig, SchemaCompiler, TypeProvider>;
  hasHeader(key: HttpHeader): boolean;
  redirect(url: string, statusCode?: number): FastifyReply<RouteGeneric, RawServer, RawRequest, RawReply, ContextConfig, SchemaCompiler, TypeProvider>;
  writeEarlyHints(hints: Record<string, string | string[]>, callback?: () => void): void;
  hijack(): FastifyReply<RouteGeneric, RawServer, RawRequest, RawReply, ContextConfig, SchemaCompiler, TypeProvider>;
  callNotFound(): void;
  type(contentType: string): FastifyReply<RouteGeneric, RawServer, RawRequest, RawReply, ContextConfig, SchemaCompiler, TypeProvider>;
  serializer(fn: (payload: any) => string): FastifyReply<RouteGeneric, RawServer, RawRequest, RawReply, ContextConfig, SchemaCompiler, TypeProvider>;
  serialize(payload: any): string | ArrayBuffer | Buffer;
  // Serialization Methods
  getSerializationFunction(httpStatus: string, contentType?: string): ((payload: { [key: string]: unknown }) => string) | undefined;
  getSerializationFunction(schema: { [key: string]: unknown }): ((payload: { [key: string]: unknown }) => string) | undefined;
  compileSerializationSchema(schema: { [key: string]: unknown }, httpStatus?: string, contentType?: string): (payload: { [key: string]: unknown }) => string;
  serializeInput(input: { [key: string]: unknown }, schema: { [key: string]: unknown }, httpStatus?: string, contentType?: string): string;
  serializeInput(input: { [key: string]: unknown }, httpStatus: string, contentType?: string): unknown;
  then(fulfilled: () => void, rejected: (err: Error) => void): void;
  trailer: (
    key: string,
    fn: ((reply: FastifyReply<RouteGeneric, RawServer, RawRequest, RawReply, ContextConfig, SchemaCompiler, TypeProvider>, payload: string | Buffer | null) => Promise<string>) | ((reply: FastifyReply<RouteGeneric, RawServer, RawRequest, RawReply, ContextConfig, SchemaCompiler, TypeProvider>, payload: string | Buffer | null, done: (err: Error | null, value?: string) => void) => void)
  ) => FastifyReply<RouteGeneric, RawServer, RawRequest, RawReply, ContextConfig, SchemaCompiler, TypeProvider>;
  hasTrailer(key: string): boolean;
  removeTrailer(key: string): FastifyReply<RouteGeneric, RawServer, RawRequest, RawReply, ContextConfig, SchemaCompiler, TypeProvider>;
  getDecorator<T>(name: string | symbol): T;
}
