import { expectAssignable, expectError, expectType } from 'tsd'
import SerializerSelector, {
  RouteDefinition,
  Serializer,
  SerializerCompiler,
  SerializerFactory,
  SerializerSelector as SerializerSelectorNamed,
  StandaloneSerializer,
} from '..'

/**
 * SerializerSelector
 */

{
  const compiler = SerializerSelector()
  expectType<SerializerFactory>(compiler)
}

{
  const compiler = SerializerSelectorNamed()
  expectType<SerializerFactory>(compiler)
}

{
  const sampleSchema = {
    $id: 'example1',
    type: 'object',
    properties: {
      name: { type: 'string' }
    }
  }

  const externalSchemas1 = {}

  const factory = SerializerSelector()
  expectType<SerializerFactory>(factory)
  const compiler = factory(externalSchemas1, {})
  expectType<SerializerCompiler>(compiler)
  const serializeFunc = compiler({ schema: sampleSchema, method: '', url: '', httpStatus: '' })
  expectType<Serializer>(serializeFunc)

  expectType<string>(serializeFunc({ name: 'hello' }))
}

/**
 * StandaloneSerializer
 */

const reader = StandaloneSerializer({
  readMode: true,
  restoreFunction: (route: RouteDefinition) => {
    expectAssignable<RouteDefinition>(route)
    return {} as Serializer
  },
})
expectType<SerializerFactory>(reader)

const writer = StandaloneSerializer({
  readMode: false,
  storeFunction: (route: RouteDefinition, code: string) => {
    expectAssignable<RouteDefinition>(route)
    expectAssignable<string>(code)
  },
})
expectType<SerializerFactory>(writer)

{
  const base = {
    $id: 'urn:schema:base',
    definitions: {
      hello: { type: 'string' }
    },
    type: 'object',
    properties: {
      hello: { $ref: '#/definitions/hello' }
    }
  }

  const refSchema = {
    $id: 'urn:schema:ref',
    type: 'object',
    properties: {
      hello: { $ref: 'urn:schema:base#/definitions/hello' }
    }
  }

  const endpointSchema = {
    method: '',
    url: '',
    httpStatus: '',
    schema: {
      $id: 'urn:schema:endpoint',
      $ref: 'urn:schema:ref'
    }
  }

  const schemaMap = {
    [base.$id]: base,
    [refSchema.$id]: refSchema
  }

  expectError(StandaloneSerializer({
    readMode: true,
    storeFunction () { }
  }))
  expectError(StandaloneSerializer({
    readMode: false,
    restoreFunction () {}
  }))
  expectError(StandaloneSerializer({
    restoreFunction () {}
  }))

  expectType<SerializerFactory>(StandaloneSerializer({
    storeFunction (routeOpts, schemaSerializerCode) {
      expectType<RouteDefinition>(routeOpts)
      expectType<string>(schemaSerializerCode)
    }
  }))

  expectType<SerializerFactory>(StandaloneSerializer({
    readMode: true,
    restoreFunction (routeOpts) {
      expectType<RouteDefinition>(routeOpts)
      return {} as Serializer
    }
  }))

  const factory = StandaloneSerializer({
    readMode: false,
    storeFunction (routeOpts, schemaSerializerCode) {
      expectType<RouteDefinition>(routeOpts)
      expectType<string>(schemaSerializerCode)
    }
  })
  expectType<SerializerFactory>(factory)

  const compiler = factory(schemaMap)
  expectType<SerializerCompiler>(compiler)
  expectType<Serializer>(compiler(endpointSchema))
}
