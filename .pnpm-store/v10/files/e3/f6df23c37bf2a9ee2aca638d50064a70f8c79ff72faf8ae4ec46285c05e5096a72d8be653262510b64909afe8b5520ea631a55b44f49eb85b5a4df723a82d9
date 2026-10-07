import fastify from '../../fastify'
import { expectType } from 'tsd'

type TestType = void

declare module '../../fastify' {
  interface FastifyRequest {
    testProp: TestType;
  }
  interface FastifyReply {
    testProp: TestType;
  }
}

fastify().get('/', (req, res) => {
  expectType<TestType>(req.testProp)
  expectType<TestType>(res.testProp)
})
