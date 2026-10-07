import fastify, { FastifyBodyParser } from '../../fastify'
import { expectError, expectType } from 'tsd'
import { IncomingMessage } from 'node:http'
import { FastifyRequest } from '../../types/request'

expectType<void>(fastify().addContentTypeParser('contentType', function (request, payload, done) {
  expectType<FastifyRequest>(request)
  expectType<IncomingMessage>(payload)
  done(null)
}))

// Body limit options

expectType<void>(fastify().addContentTypeParser('contentType', { bodyLimit: 99 }, function (request, payload, done) {
  expectType<FastifyRequest>(request)
  expectType<IncomingMessage>(payload)
  done(null)
}))

// Array for contentType

expectType<void>(fastify().addContentTypeParser(['contentType'], function (request, payload, done) {
  expectType<FastifyRequest>(request)
  expectType<IncomingMessage>(payload)
  done(null)
}))

// Body Parser - the generic after addContentTypeParser enforces the type of the `body` parameter as well as the value of the `parseAs` property

expectType<void>(fastify().addContentTypeParser<string>('bodyContentType', { parseAs: 'string' }, function (request, body, done) {
  expectType<FastifyRequest>(request)
  expectType<string>(body)
  done(null)
}))

expectType<void>(fastify().addContentTypeParser<Buffer>('bodyContentType', { parseAs: 'buffer' }, function (request, body, done) {
  expectType<FastifyRequest>(request)
  expectType<Buffer>(body)
  done(null)
}))

expectType<void>(fastify().addContentTypeParser('contentType', async function (request: FastifyRequest, payload: IncomingMessage) {
  expectType<FastifyRequest>(request)
  expectType<IncomingMessage>(payload)
  return null
}))

expectType<void>(fastify().addContentTypeParser<string>('bodyContentType', { parseAs: 'string' }, async function (request: FastifyRequest, body: string) {
  expectType<FastifyRequest>(request)
  expectType<string>(body)
  return null
}))

expectType<void>(fastify().addContentTypeParser<Buffer>('bodyContentType', { parseAs: 'buffer' }, async function (request: FastifyRequest, body: Buffer) {
  expectType<FastifyRequest>(request)
  expectType<Buffer>(body)
  return null
}))

expectType<FastifyBodyParser<string>>(fastify().getDefaultJsonParser('error', 'ignore'))

expectError(fastify().getDefaultJsonParser('error', 'skip'))

expectError(fastify().getDefaultJsonParser('nothing', 'ignore'))

expectType<void>(fastify().removeAllContentTypeParsers())
expectError(fastify().removeAllContentTypeParsers('contentType'))

expectType<void>(fastify().removeContentTypeParser('contentType'))
expectType<void>(fastify().removeContentTypeParser(/contentType+.*/))
expectType<void>(fastify().removeContentTypeParser(['contentType', /contentType+.*/]))
expectError(fastify().removeContentTypeParser({}))
