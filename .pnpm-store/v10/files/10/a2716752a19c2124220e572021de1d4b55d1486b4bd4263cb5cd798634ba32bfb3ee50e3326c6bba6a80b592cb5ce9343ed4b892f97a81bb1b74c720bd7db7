import { expectAssignable } from 'tsd'
import fastify, { FastifyInstance } from '../../fastify'

async function hasSymbolDisposeWithUsing () {
  await using app = fastify()
  expectAssignable<FastifyInstance>(app)
  expectAssignable<FastifyInstance[typeof Symbol.asyncDispose]>(app.close)
}

async function hasSymbolDispose () {
  const app = fastify()
  expectAssignable<FastifyInstance>(app)
  expectAssignable<FastifyInstance[typeof Symbol.asyncDispose]>(app.close)
}

hasSymbolDisposeWithUsing()
hasSymbolDispose()
