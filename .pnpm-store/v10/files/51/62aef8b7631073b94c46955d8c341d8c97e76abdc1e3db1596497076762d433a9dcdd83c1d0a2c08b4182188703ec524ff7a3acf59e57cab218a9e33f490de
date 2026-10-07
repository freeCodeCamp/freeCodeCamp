import { AnySchemaObject, ValidateFunction } from 'ajv'
import { AnyValidateFunction } from 'ajv/dist/core'
import { expectAssignable, expectType } from 'tsd'
import AjvCompiler, { AjvReference, ValidatorFactory, StandaloneValidator, RouteDefinition, ErrorObject, BuildCompilerFromPool, BuildSerializerFromPool, ValidatorCompiler } from '..'
import type Ajv from 'ajv'

{
  const compiler = AjvCompiler({})
  expectType<BuildCompilerFromPool>(compiler)
}
{
  const compiler = AjvCompiler()
  expectType<BuildCompilerFromPool>(compiler)
}
{
  const compiler = AjvCompiler({ jtdSerializer: false })
  expectType<BuildCompilerFromPool>(compiler)
}

{
  const factory = AjvCompiler({ jtdSerializer: false })
  expectType<BuildCompilerFromPool>(factory)
  factory({}, {
    onCreate (ajv) {
      expectType<import('ajv').default>(ajv)
    }
  })
}

{
  const compiler = AjvCompiler({ jtdSerializer: true })
  expectType<BuildSerializerFromPool>(compiler)
}
const reader = StandaloneValidator({
  readMode: true,
  restoreFunction: (route: RouteDefinition) => {
    expectAssignable<RouteDefinition>(route)
    return {} as ValidateFunction
  },
})
expectAssignable<ValidatorFactory>(reader)

const writer = StandaloneValidator({
  readMode: false,
  storeFunction: (route: RouteDefinition, code: string) => {
    expectAssignable<RouteDefinition>(route)
    expectAssignable<string>(code)
  },
})
expectAssignable<ValidatorFactory>(writer)

expectType<unknown>(({} as ErrorObject).data)
expectType<string>(({} as ErrorObject).instancePath)
expectType<string>(({} as ErrorObject).keyword)
expectType<string | undefined>(({} as ErrorObject).message)
expectType<Record<string, any>>(({} as ErrorObject).params)
expectType<AnySchemaObject | undefined>(({} as ErrorObject).parentSchema)
expectType<string | undefined>(({} as ErrorObject).propertyName)
expectType<unknown>(({} as ErrorObject).schema)
expectType<string>(({} as ErrorObject).schemaPath)

expectType<Symbol>(AjvReference)

{
  const jtdSchema = {
    discriminator: 'version',
    mapping: {
      1: {
        properties: {
          foo: { type: 'uint8' }
        }
      },
      2: {
        properties: {
          foo: { type: 'string' }
        }
      }
    }
  }

  const externalSchemas1 = {
    foo: {
      definitions: {
        coordinates: {
          properties: {
            lat: { type: 'float32' },
            lng: { type: 'float32' }
          }
        }
      }
    }
  }

  const factory = AjvCompiler({ jtdSerializer: true })
  expectType<BuildSerializerFromPool>(factory)
  const compiler = factory(externalSchemas1, {})
  expectAssignable<Function>(compiler)
  const serializeFunc = compiler({ schema: jtdSchema })
  expectType<(data: unknown) => string>(serializeFunc)
  expectType<string>(serializeFunc({ version: '1', foo: 42 }))
}
// JTD
{
  const factory = AjvCompiler()
  expectType<BuildCompilerFromPool>(factory)

  const jtdSchema = {
    discriminator: 'version',
    mapping: {
      1: {
        properties: {
          foo: { type: 'uint8' }
        }
      },
      2: {
        properties: {
          foo: { type: 'string' }
        }
      }
    }
  }

  const compiler = factory({}, {
    customOptions: {},
    mode: 'JTD'
  })
  expectAssignable<ValidatorCompiler>(compiler)
  const validatorFunc = compiler({ schema: jtdSchema })
  expectAssignable<ValidateFunction>(validatorFunc)

  expectType<boolean | Promise<any>>(validatorFunc({
    version: '2',
    foo: []
  }))
}

// generate standalone code
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
    schema: {
      $id: 'urn:schema:endpoint',
      $ref: 'urn:schema:ref'
    }
  }

  const schemaMap = {
    [base.$id]: base,
    [refSchema.$id]: refSchema
  }

  const factory = StandaloneValidator({
    readMode: false,
    storeFunction (routeOpts, schemaValidationCode) {
      expectType<RouteDefinition>(routeOpts)
      expectType<string>(schemaValidationCode)
    }
  })
  expectAssignable<ValidatorFactory>(factory)

  const compiler = factory(schemaMap)
  expectAssignable<ValidatorCompiler>(compiler)
  expectAssignable<Function>(compiler(endpointSchema))
}

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
    schema: {
      $id: 'urn:schema:endpoint',
      $ref: 'urn:schema:ref'
    }
  }

  const schemaMap = {
    [base.$id]: base,
    [refSchema.$id]: refSchema
  }
  const factory = StandaloneValidator({
    readMode: true,
    restoreFunction (routeOpts) {
      expectType<RouteDefinition>(routeOpts)
      return {} as ValidateFunction
    }
  })
  expectAssignable<ValidatorFactory>(factory)

  const compiler = factory(schemaMap)
  expectAssignable<ValidatorCompiler>(compiler)
  expectType<AnyValidateFunction<any>>(compiler(endpointSchema))
}

// Plugins
{
  const factory = AjvCompiler()
  const compilerFactoryParams = {
    customOptions: {},
    plugins: [
      (ajv: Ajv) => {
        expectType<Ajv>(ajv)
        return ajv
      },
      (ajv: Ajv, options: unknown) => {
        expectType<Ajv>(ajv)
        expectType<unknown>(options)
        return ajv
      }
    ]
  }
  expectAssignable<Parameters<BuildCompilerFromPool>>([{}, compilerFactoryParams])

  const compiler = factory({}, {
    customOptions: {},
    plugins: [
      (ajv) => {
        expectType<Ajv>(ajv)
        return ajv
      },
      (ajv, options) => {
        expectType<Ajv>(ajv)
        expectType<unknown>(options)
        return ajv
      }
    ]
  })
  expectAssignable<ValidatorCompiler>(compiler)
}
// Compiler factory should allow both signatures (mode: JTD and mode omitted)
{
  expectAssignable<Parameters<BuildCompilerFromPool>>([{}, {}])

  const ajvPlugin = (ajv: Ajv): Ajv => {
    expectType<Ajv>(ajv)
    return ajv
  }
  expectAssignable<Parameters<BuildCompilerFromPool>>([{}, { plugins: [ajvPlugin] }])

  expectAssignable<Parameters<BuildCompilerFromPool>>([{}, {
    mode: 'JTD',
    customOptions: {
      removeAdditional: 'all'
    },
    plugins: [ajvPlugin]
  }])

  expectAssignable<Parameters<BuildCompilerFromPool>>([{}, {
    mode: 'JTD',
    customOptions: {
      removeAdditional: 'all'
    },
    plugins: [[ajvPlugin, ['string1', 'string2']]]
  }])

  expectAssignable<Parameters<BuildCompilerFromPool>>([{}, {
    plugins: [
      ajvPlugin,
      (ajv: Ajv, options: unknown): Ajv => {
        expectType<Ajv>(ajv)
        expectType<unknown>(options)
        return ajv
      },
      [ajvPlugin, ['keyword1', 'keyword2']],
      [ajvPlugin, [{ key: 'value' }]],
    ]
  }])
}
