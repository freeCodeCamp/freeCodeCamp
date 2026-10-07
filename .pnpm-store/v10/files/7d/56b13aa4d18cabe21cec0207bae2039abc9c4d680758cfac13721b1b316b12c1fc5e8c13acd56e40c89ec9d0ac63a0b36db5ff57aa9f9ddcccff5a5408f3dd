import { Buffer } from 'node:buffer'
import { expectAssignable, expectError, expectType } from 'tsd'
import fastify, { FastifyContextConfig, FastifyReply, FastifyRequest, FastifySchema, FastifyTypeProviderDefault, RawRequestDefaultExpression, RouteHandler, RouteHandlerMethod } from '../../fastify'
import { FastifyInstance } from '../../types/instance'
import { FastifyBaseLogger } from '../../types/logger'
import { ResolveReplyTypeWithRouteGeneric } from '../../types/reply'
import { FastifyRouteConfig, RouteGenericInterface } from '../../types/route'
import { ContextConfigDefault, RawReplyDefaultExpression, RawServerDefault } from '../../types/utils'

type DefaultSerializationFunction = (payload: { [key: string]: unknown }) => string
type DefaultFastifyReplyWithCode<Code extends number> = FastifyReply<RouteGenericInterface, RawServerDefault, RawRequestDefaultExpression, RawReplyDefaultExpression, ContextConfigDefault, FastifySchema, FastifyTypeProviderDefault, ResolveReplyTypeWithRouteGeneric<RouteGenericInterface['Reply'], Code, FastifySchema, FastifyTypeProviderDefault>>

const getHandler: RouteHandlerMethod = function (_request, reply) {
  expectType<RawReplyDefaultExpression>(reply.raw)
  expectType<FastifyBaseLogger>(reply.log)
  expectType<FastifyRequest<RouteGenericInterface, RawServerDefault, RawRequestDefaultExpression>>(reply.request)
  expectType<<Code extends number>(statusCode: Code) => DefaultFastifyReplyWithCode<Code>>(reply.code)
  expectType<<Code extends number>(statusCode: Code) => DefaultFastifyReplyWithCode<Code>>(reply.status)
  expectType<(...args: [payload?: unknown]) => FastifyReply>(reply.code(100 as number).send)
  expectType<number>(reply.elapsedTime)
  expectType<number>(reply.statusCode)
  expectType<boolean>(reply.sent)
  expectType<
          (hints: Record<string, string | string[]>, callback?: (() => void) | undefined) => void
            >(reply.writeEarlyHints)
  expectType<((...args: [payload?: unknown]) => FastifyReply)>(reply.send)
  expectAssignable<(key: string, value: any) => FastifyReply>(reply.header)
  expectAssignable<(values: { [key: string]: any }) => FastifyReply>(reply.headers)
  expectAssignable<(key: string) => number | string | string[] | undefined>(reply.getHeader)
  expectAssignable<() => { [key: string]: number | string | string[] | undefined }>(reply.getHeaders)
  expectAssignable<(key: string) => FastifyReply>(reply.removeHeader)
  expectAssignable<(key: string) => boolean>(reply.hasHeader)
  expectType<(url: string, statusCode?: number) => FastifyReply>(reply.redirect)
  expectType<() => FastifyReply>(reply.hijack)
  expectType<() => void>(reply.callNotFound)
  expectType<(contentType: string) => FastifyReply>(reply.type)
  expectType<(fn: (payload: any) => string) => FastifyReply>(reply.serializer)
  expectType<(payload: any) => string | ArrayBuffer | Buffer>(reply.serialize)
  expectType<(fulfilled: () => void, rejected: (err: Error) => void) => void>(reply.then)
  expectType<
      (
      key: string,
      fn: ((reply: FastifyReply, payload: string | Buffer | null) => Promise<string>) |
        ((reply: FastifyReply, payload: string | Buffer | null,
          done: (err: Error | null, value?: string) => void) => void)
      ) => FastifyReply
        >(reply.trailer)
  expectType<(key: string) => boolean>(reply.hasTrailer)
  expectType<(key: string) => FastifyReply>(reply.removeTrailer)
  expectType<FastifyInstance>(reply.server)
  expectAssignable<
          ((httpStatus: string) => DefaultSerializationFunction | undefined)
            >(reply.getSerializationFunction)
  expectAssignable<
          ((schema: { [key: string]: unknown }) => DefaultSerializationFunction | undefined)
            >(reply.getSerializationFunction)
  expectAssignable<
          ((schema: { [key: string]: unknown }, httpStatus?: string) => DefaultSerializationFunction)
            >(reply.compileSerializationSchema)
  expectAssignable<
          ((input: { [key: string]: unknown }, schema: { [key: string]: unknown }, httpStatus?: string) => unknown)
            >(reply.serializeInput)
  expectAssignable<((input: { [key: string]: unknown }, httpStatus: string) => unknown)>(reply.serializeInput)
  expectType<ContextConfigDefault & FastifyRouteConfig & FastifyContextConfig>(reply.routeOptions.config)
  expectType<string>(reply.getDecorator<string>('foo'))
}

interface ReplyPayload {
  Reply: {
    test: boolean;
  };
}

interface ReplyArrayPayload {
  Reply: string[]
}

interface ReplyUnion {
  Reply: {
    success: boolean;
  } | {
    error: string;
  }
}

interface ReplyHttpCodes {
  Reply: {
    '1xx': number,
    200: 'abc',
    201: boolean,
    300: { foo: string },
  }
}

interface InvalidReplyHttpCodes {
  Reply: {
    '1xx': number,
    200: string,
    999: boolean,
  }
}

interface ReplyVoid {
  Reply: void;
}

interface ReplyUndefined {
  Reply: undefined;
}

// Issue #5534 scenario: 204 No Content should allow empty send(), 201 Created should require payload
// Note: `204: undefined` gets converted to `unknown` via UndefinedToUnknown in type-provider.d.ts,
// meaning send() is optional but send({}) is also allowed. Use `void` instead of `undefined`
// if you want stricter "no payload allowed" semantics.
interface ReplyHttpCodesWithNoContent {
  Reply: {
    201: { id: string };
    204: undefined;
  }
}

const typedHandler: RouteHandler<ReplyPayload> = async (request, reply) => {
  // When Reply type is specified, send() requires a payload argument
  expectType<((...args: [payload: ReplyPayload['Reply']]) => FastifyReply<ReplyPayload, RawServerDefault, RawRequestDefaultExpression<RawServerDefault>, RawReplyDefaultExpression<RawServerDefault>>)>(reply.send)
  expectType<((...args: [payload: ReplyPayload['Reply']]) => FastifyReply<ReplyPayload, RawServerDefault, RawRequestDefaultExpression<RawServerDefault>, RawReplyDefaultExpression<RawServerDefault>>)>(reply.code(100).send)
}

const server = fastify()
server.get('/get', getHandler)
server.get('/typed', typedHandler)
server.get<ReplyPayload>('/get-generic-send', async function handler (request, reply) {
  reply.send({ test: true })
})
// When Reply type is specified, send() requires a payload - calling without arguments should error
expectError(server.get<ReplyPayload>('/get-generic-send-missing-payload', async function handler (request, reply) {
  reply.send()
}))
server.get<ReplyPayload>('/get-generic-return', async function handler (request, reply) {
  return { test: false }
})
expectError(server.get<ReplyPayload>('/get-generic-send-error', async function handler (request, reply) {
  reply.send({ foo: 'bar' })
}))
expectError(server.get<ReplyPayload>('/get-generic-return-error', async function handler (request, reply) {
  return { foo: 'bar' }
}))
server.get<ReplyUnion>('/get-generic-union-send', async function handler (request, reply) {
  if (0 as number === 0) {
    reply.send({ success: true })
  } else {
    reply.send({ error: 'error' })
  }
})
server.get<ReplyUnion>('/get-generic-union-return', async function handler (request, reply) {
  if (0 as number === 0) {
    return { success: true }
  } else {
    return { error: 'error' }
  }
})
expectError(server.get<ReplyUnion>('/get-generic-union-send-error-1', async function handler (request, reply) {
  reply.send({ successes: true })
}))
expectError(server.get<ReplyUnion>('/get-generic-union-send-error-2', async function handler (request, reply) {
  reply.send({ error: 500 })
}))
expectError(server.get<ReplyUnion>('/get-generic-union-return-error-1', async function handler (request, reply) {
  return { successes: true }
}))
expectError(server.get<ReplyUnion>('/get-generic-union-return-error-2', async function handler (request, reply) {
  return { error: 500 }
}))
server.get<ReplyHttpCodes>('/get-generic-http-codes-send', async function handler (request, reply) {
  reply.code(200).send('abc')
  reply.code(201).send(true)
  reply.code(300).send({ foo: 'bar' })
  reply.code(101).send(123)
})
expectError(server.get<ReplyHttpCodes>('/get-generic-http-codes-send-error-1', async function handler (request, reply) {
  reply.code(200).send('def')
}))
expectError(server.get<ReplyHttpCodes>('/get-generic-http-codes-send-error-2', async function handler (request, reply) {
  reply.code(201).send(0)
}))
expectError(server.get<ReplyHttpCodes>('/get-generic-http-codes-send-error-3', async function handler (request, reply) {
  reply.code(300).send({ foo: 123 })
}))
expectError(server.get<ReplyHttpCodes>('/get-generic-http-codes-send-error-4', async function handler (request, reply) {
  reply.code(100).send('asdasd')
}))
expectError(server.get<ReplyHttpCodes>('/get-generic-http-codes-send-error-5', async function handler (request, reply) {
  reply.code(401).send({ foo: 123 })
}))
server.get<ReplyArrayPayload>('/get-generic-array-send', async function handler (request, reply) {
  reply.code(200).send([''])
})
expectError(server.get<InvalidReplyHttpCodes>('get-invalid-http-codes-reply-error', async function handler (request, reply) {
  reply.code(200).send('')
}))
server.get<InvalidReplyHttpCodes>('get-invalid-http-codes-reply-error', async function handler (request, reply) {
  reply.code(200).send({
    '1xx': 0,
    200: '',
    999: false
  })
})

/* eslint-disable @typescript-eslint/no-unused-vars */
const httpHeaderHandler: RouteHandlerMethod = function (_request, reply) {
  // accept is a header provided by @types/node
  reply.getHeader('accept')
  /* eslint-disable @typescript-eslint/no-unused-expressions */
  reply.getHeaders().accept
  reply.hasHeader('accept')
  reply.header('accept', 'test')
  reply.headers({ accept: 'test' })
  reply.removeHeader('accept')

  // x-fastify-test is not a header provided by @types/node
  // and should not result in a typing error
  reply.getHeader('x-fastify-test')
  reply.getHeaders()['x-fastify-test']
  reply.hasHeader('x-fastify-test')
  reply.header('x-fastify-test', 'test')
  reply.headers({ 'x-fastify-test': 'test' })
  reply.removeHeader('x-fastify-test')
}

// Test: send() without arguments is valid when no Reply type is specified (default unknown)
server.get('/get-no-type-send-empty', async function handler (request, reply) {
  reply.send()
})

// Test: send() without arguments is valid when Reply type is void
server.get<ReplyVoid>('/get-void-send-empty', async function handler (request, reply) {
  reply.send()
})

// Test: send() without arguments is valid when Reply type is undefined
server.get<ReplyUndefined>('/get-undefined-send-empty', async function handler (request, reply) {
  reply.send()
})

// Issue #5534 scenario: HTTP status codes with 204 No Content
server.get<ReplyHttpCodesWithNoContent>('/get-http-codes-no-content', async function handler (request, reply) {
  // 204 No Content - send() without payload is valid because Reply is undefined
  reply.code(204).send()
  // 201 Created - send() requires payload
  reply.code(201).send({ id: '123' })
})
// 201 Created without payload should error
expectError(server.get<ReplyHttpCodesWithNoContent>('/get-http-codes-201-missing-payload', async function handler (request, reply) {
  reply.code(201).send()
}))
