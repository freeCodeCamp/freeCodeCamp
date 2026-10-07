import { Type, TypeBoxTypeProvider } from '../index.mjs'
import { expectAssignable, expectType } from 'tsd'
import Fastify, { FastifyInstance, FastifyBaseLogger, RawReplyDefaultExpression, RawRequestDefaultExpression, RawServerDefault } from 'fastify'

const fastify = Fastify().withTypeProvider<TypeBoxTypeProvider>()
expectAssignable<FastifyInstance<RawServerDefault, RawRequestDefaultExpression, RawReplyDefaultExpression, FastifyBaseLogger, TypeBoxTypeProvider>>(fastify)
expectAssignable<FastifyInstance>(fastify)

fastify.get('/', {
  schema: {
    body: Type.Object({
      x: Type.String(),
      y: Type.Number(),
      z: Type.Boolean()
    })
  }
}, (req) => {
  expectType<boolean>(req.body.z)
  expectType<number>(req.body.y)
  expectType<string>(req.body.x)
})

expectAssignable<FastifyInstance>(Fastify())
