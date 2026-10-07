import fastify, {
  FastifyTypeProvider,
  HookHandlerDoneFunction,
  FastifyRequest,
  FastifyReply,
  FastifyInstance,
  FastifyError,
  SafePromiseLike
} from '../../fastify'
import { expectAssignable, expectError, expectType } from 'tsd'
import { IncomingHttpHeaders } from 'node:http'
import { Type, TSchema, Static } from 'typebox'
import { FromSchema, JSONSchema } from 'json-schema-to-ts'

const server = fastify()

// -------------------------------------------------------------------
// Default (unknown)
// -------------------------------------------------------------------

expectAssignable(server.get('/', (req) => expectType<unknown>(req.body)))

// -------------------------------------------------------------------
// Remapping
// -------------------------------------------------------------------

interface NumberProvider extends FastifyTypeProvider {
  validator: number
  serializer: number
} // remap all schemas to numbers

expectAssignable(server.withTypeProvider<NumberProvider>().get(
  '/',
  {
    schema: {
      body: { type: 'string' },
      querystring: { type: 'string' },
      headers: { type: 'string' },
      params: { type: 'string' }
    }
  },
  (req) => {
    expectType<number & IncomingHttpHeaders>(req.headers)
    expectType<number>(req.body)
    expectType<number>(req.query)
    expectType<number>(req.params)
  }
))

// -------------------------------------------------------------------
// Override
// -------------------------------------------------------------------

interface OverriddenProvider extends FastifyTypeProvider { validator: 'inferenced' }

expectAssignable(server.withTypeProvider<OverriddenProvider>().get<{ Body: 'override' }>(
  '/',
  {
    schema: {
      body: Type.Object({
        x: Type.Number(),
        y: Type.Number(),
        z: Type.Number()
      })
    }
  },
  (req) => {
    expectType<'override'>(req.body)
  }
))

// -------------------------------------------------------------------
// TypeBox
// -------------------------------------------------------------------

interface TypeBoxProvider extends FastifyTypeProvider {
  validator: this['schema'] extends TSchema ? Static<this['schema']> : unknown
  serializer: this['schema'] extends TSchema ? Static<this['schema']> : unknown
}

expectAssignable(server.withTypeProvider<TypeBoxProvider>().get(
  '/',
  {
    schema: {
      body: Type.Object({
        x: Type.Number(),
        y: Type.Number(),
        z: Type.Number()
      })
    },
    errorHandler: (error, request, reply) => {
      expectType<FastifyError>(error)
      expectAssignable<FastifyRequest>(request)
      expectType<number>(request.body.x)
      expectType<number>(request.body.y)
      expectType<number>(request.body.z)
      expectAssignable<FastifyReply>(reply)
    }
  },
  (req) => {
    expectType<number>(req.body.x)
    expectType<number>(req.body.y)
    expectType<number>(req.body.z)
  }
))

expectAssignable<FastifyInstance>(server.withTypeProvider<TypeBoxProvider>())

// -------------------------------------------------------------------
// JsonSchemaToTs
// -------------------------------------------------------------------

interface JsonSchemaToTsProvider extends FastifyTypeProvider {
  validator: this['schema'] extends JSONSchema ? FromSchema<this['schema']> : unknown
  serializer: this['schema'] extends JSONSchema ? FromSchema<this['schema']> : unknown
}

// explicitly setting schema `as const`

expectAssignable(server.withTypeProvider<JsonSchemaToTsProvider>().get(
  '/',
  {
    schema: {
      body: {
        type: 'object',
        properties: {
          x: { type: 'number' },
          y: { type: 'string' },
          z: { type: 'boolean' }
        }
      } as const
    },
    errorHandler: (error, request, reply) => {
      expectType<FastifyError>(error)
      expectAssignable<FastifyRequest>(request)
      expectType<number | undefined>(request.body.x)
      expectType<string | undefined>(request.body.y)
      expectType<boolean | undefined>(request.body.z)
      expectAssignable<FastifyReply>(reply)
    }
  },
  (req) => {
    expectType<number | undefined>(req.body.x)
    expectType<string | undefined>(req.body.y)
    expectType<boolean | undefined>(req.body.z)
  }
))

expectAssignable(server.withTypeProvider<JsonSchemaToTsProvider>().route({
  url: '/',
  method: 'POST',
  schema: {
    body: {
      type: 'object',
      properties: {
        x: { type: 'number' },
        y: { type: 'string' },
        z: { type: 'boolean' }
      }
    }
  } as const,
  errorHandler: (error, request, reply) => {
    expectType<FastifyError>(error)
    expectAssignable<FastifyRequest>(request)
    expectType<number | undefined>(request.body.x)
    expectType<string | undefined>(request.body.y)
    expectType<boolean | undefined>(request.body.z)
    expectAssignable<FastifyReply>(reply)
  },
  handler: (req) => {
    expectType<number | undefined>(req.body.x)
    expectType<string | undefined>(req.body.y)
    expectType<boolean | undefined>(req.body.z)
  }
}))

// inferring schema `as const`

expectAssignable(server.withTypeProvider<JsonSchemaToTsProvider>().get(
  '/',
  {
    schema: {
      body: {
        type: 'object',
        properties: {
          x: { type: 'number' },
          y: { type: 'string' },
          z: { type: 'boolean' }
        }
      }
    },
    errorHandler: (error, request, reply) => {
      expectType<FastifyError>(error)
      expectAssignable<FastifyRequest>(request)
      expectType<number | undefined>(request.body.x)
      expectType<string | undefined>(request.body.y)
      expectType<boolean | undefined>(request.body.z)
      expectAssignable<FastifyReply>(reply)
    }
  },
  (req) => {
    expectType<number | undefined>(req.body.x)
    expectType<string | undefined>(req.body.y)
    expectType<boolean | undefined>(req.body.z)
  }
))

expectAssignable(server.withTypeProvider<JsonSchemaToTsProvider>().route({
  url: '/',
  method: 'POST',
  schema: {
    body: {
      type: 'object',
      properties: {
        x: { type: 'number' },
        y: { type: 'string' },
        z: { type: 'boolean' }
      }
    }
  },
  errorHandler: (error, request, reply) => {
    expectType<FastifyError>(error)
    expectAssignable<FastifyRequest>(request)
    expectType<number | undefined>(request.body.x)
    expectType<string | undefined>(request.body.y)
    expectType<boolean | undefined>(request.body.z)
    expectAssignable<FastifyReply>(reply)
  },
  handler: (req) => {
    expectType<number | undefined>(req.body.x)
    expectType<string | undefined>(req.body.y)
    expectType<boolean | undefined>(req.body.z)
  }
}))

expectAssignable<FastifyInstance>(server.withTypeProvider<JsonSchemaToTsProvider>())

// -------------------------------------------------------------------
// Instance Type Remappable
// -------------------------------------------------------------------

expectAssignable(server.withTypeProvider<TypeBoxProvider>().withTypeProvider<JsonSchemaToTsProvider>().get(
  '/',
  {
    schema: {
      body: {
        type: 'object',
        properties: {
          x: { type: 'number' },
          y: { type: 'string' },
          z: { type: 'boolean' }
        }
      } as const
    },
    errorHandler: (error, request, reply) => {
      expectType<FastifyError>(error)
      expectAssignable<FastifyRequest>(request)
      expectType<number | undefined>(request.body.x)
      expectType<string | undefined>(request.body.y)
      expectType<boolean | undefined>(request.body.z)
      expectAssignable<FastifyReply>(reply)
    }
  },
  (req) => {
    expectType<number | undefined>(req.body.x)
    expectType<string | undefined>(req.body.y)
    expectType<boolean | undefined>(req.body.z)
  }
))

// -------------------------------------------------------------------
// Request Hooks
// -------------------------------------------------------------------

// Sync handlers

expectAssignable(server.withTypeProvider<TypeBoxProvider>().get(
  '/',
  {
    schema: {
      body: Type.Object({
        x: Type.Number(),
        y: Type.String(),
        z: Type.Boolean()
      })
    },
    preHandler: (req, reply, done) => {
      expectType<number>(req.body.x)
      expectType<string>(req.body.y)
      expectType<boolean>(req.body.z)
    },
    preParsing: (req, reply, payload, done) => {
      expectType<number>(req.body.x)
      expectType<string>(req.body.y)
      expectType<boolean>(req.body.z)
    },
    preSerialization: (req, reply, payload, done) => {
      expectType<number>(req.body.x)
      expectType<string>(req.body.y)
      expectType<boolean>(req.body.z)
    },
    preValidation: (req, reply, done) => {
      expectType<number>(req.body.x)
      expectType<string>(req.body.y)
      expectType<boolean>(req.body.z)
    },
    onError: (req, reply, error, done) => {
      expectType<number>(req.body.x)
      expectType<string>(req.body.y)
      expectType<boolean>(req.body.z)
    },
    onRequest: (req, reply, done) => {
      expectType<number>(req.body.x)
      expectType<string>(req.body.y)
      expectType<boolean>(req.body.z)
    },
    onResponse: (req, reply, done) => {
      expectType<number>(req.body.x)
      expectType<string>(req.body.y)
      expectType<boolean>(req.body.z)
    },
    onTimeout: (req, reply, done) => {
      expectType<number>(req.body.x)
      expectType<string>(req.body.y)
      expectType<boolean>(req.body.z)
    },
    onSend: (req, reply, payload, done) => {
      expectType<number>(req.body.x)
      expectType<string>(req.body.y)
      expectType<boolean>(req.body.z)
    }
  },
  req => {
    expectType<number>(req.body.x)
    expectType<string>(req.body.y)
    expectType<boolean>(req.body.z)
  }
))

// Async handlers

expectAssignable(server.withTypeProvider<TypeBoxProvider>().get(
  '/',
  {
    schema: {
      body: Type.Object({
        x: Type.Number(),
        y: Type.String(),
        z: Type.Boolean()
      })
    },
    preHandler: async (req, reply, done) => {
      expectType<number>(req.body.x)
      expectType<string>(req.body.y)
      expectType<boolean>(req.body.z)
    },
    preParsing: async (req, reply, payload, done) => {
      expectType<number>(req.body.x)
      expectType<string>(req.body.y)
      expectType<boolean>(req.body.z)
    },
    preSerialization: async (req, reply, payload, done) => {
      expectType<number>(req.body.x)
      expectType<string>(req.body.y)
      expectType<boolean>(req.body.z)
    },
    preValidation: async (req, reply, done) => {
      expectType<number>(req.body.x)
      expectType<string>(req.body.y)
      expectType<boolean>(req.body.z)
    },
    onError: async (req, reply, error, done) => {
      expectType<number>(req.body.x)
      expectType<string>(req.body.y)
      expectType<boolean>(req.body.z)
    },
    onRequest: async (req, reply, done) => {
      expectType<number>(req.body.x)
      expectType<string>(req.body.y)
      expectType<boolean>(req.body.z)
    },
    onResponse: async (req, reply, done) => {
      expectType<number>(req.body.x)
      expectType<string>(req.body.y)
      expectType<boolean>(req.body.z)
    },
    onTimeout: async (req, reply, done) => {
      expectType<number>(req.body.x)
      expectType<string>(req.body.y)
      expectType<boolean>(req.body.z)
    },
    onSend: async (req, reply, payload, done) => {
      expectType<number>(req.body.x)
      expectType<string>(req.body.y)
      expectType<boolean>(req.body.z)
    }
  },
  req => {
    expectType<number>(req.body.x)
    expectType<string>(req.body.y)
    expectType<boolean>(req.body.z)
  }
))

// -------------------------------------------------------------------
// Request headers
// -------------------------------------------------------------------

// JsonSchemaToTsProvider
expectAssignable(server.withTypeProvider<JsonSchemaToTsProvider>().get(
  '/',
  {
    schema: {
      headers: {
        type: 'object',
        properties: {
          lowercase: { type: 'string' },
          UPPERCASE: { type: 'number' },
          camelCase: { type: 'boolean' },
          'KEBAB-case': { type: 'boolean' },
          PRESERVE_OPTIONAL: { type: 'number' }
        },
        required: ['lowercase', 'UPPERCASE', 'camelCase', 'KEBAB-case']
      } as const
    }
  },
  (req) => {
    expectType<string>(req.headers.lowercase)
    expectType<string | string[] | undefined>(req.headers.UPPERCASE)
    expectType<number>(req.headers.uppercase)
    expectType<boolean>(req.headers.camelcase)
    expectType<boolean>(req.headers['kebab-case'])
    expectType<number | undefined>(req.headers.preserve_optional)
  }
))

// TypeBoxProvider
expectAssignable(server.withTypeProvider<TypeBoxProvider>().get(
  '/',
  {
    schema: {
      headers: Type.Object({
        lowercase: Type.String(),
        UPPERCASE: Type.Number(),
        camelCase: Type.Boolean(),
        'KEBAB-case': Type.Boolean(),
        PRESERVE_OPTIONAL: Type.Optional(Type.Number())
      })
    }
  },
  (req) => {
    expectType<string>(req.headers.lowercase)
    expectType<string | string[] | undefined>(req.headers.UPPERCASE)
    expectType<number>(req.headers.uppercase)
    expectType<boolean>(req.headers.camelcase)
    expectType<boolean>(req.headers['kebab-case'])
    expectType<number | undefined>(req.headers.preserve_optional)
  }
))

// -------------------------------------------------------------------
// TypeBox Reply Type
// -------------------------------------------------------------------

expectAssignable(server.withTypeProvider<TypeBoxProvider>().get(
  '/',
  {
    schema: {
      response: {
        200: Type.String(),
        400: Type.Number(),
        500: Type.Object({
          error: Type.String()
        })
      }
    }
  },
  async (_, res) => {
    res.send('hello')
    res.send(42)
    res.send({ error: 'error' })
    expectType<((...args: [payload: string]) => typeof res)>(res.code(200).send)
    expectType<((...args: [payload: number]) => typeof res)>(res.code(400).send)
    expectType<((...args: [payload: { error: string }]) => typeof res)>(res.code(500).send)
    expectError<(payload?: unknown) => typeof res>(res.code(200).send)
  }
))

// -------------------------------------------------------------------
// TypeBox Reply Type (Different Content-types)
// -------------------------------------------------------------------

expectAssignable(server.withTypeProvider<TypeBoxProvider>().get(
  '/',
  {
    schema: {
      response: {
        200: {
          content: {
            'text/string': {
              schema: Type.String()
            },
            'application/json': {
              schema: Type.Object({
                msg: Type.String()
              })
            }
          }
        },
        500: Type.Object({
          error: Type.String()
        })
      }
    }
  },
  async (_, res) => {
    res.send('hello')
    res.send({ msg: 'hello' })
    res.send({ error: 'error' })
  }
))

// -------------------------------------------------------------------
// TypeBox Reply Type: Non Assignable
// -------------------------------------------------------------------

expectError(server.withTypeProvider<TypeBoxProvider>().get(
  '/',
  {
    schema: {
      response: {
        200: Type.String(),
        400: Type.Number(),
        500: Type.Object({
          error: Type.String()
        })
      }
    }
  },
  async (_, res) => {
    res.send(false)
  }
))

// -------------------------------------------------------------------
// TypeBox Reply Type: Non Assignable (Different Content-types)
// -------------------------------------------------------------------

expectError(server.withTypeProvider<TypeBoxProvider>().get(
  '/',
  {
    schema: {
      response: {
        200: {
          content: {
            'text/string': {
              schema: Type.String()
            },
            'application/json': {
              schema: Type.Object({
                msg: Type.String()
              })
            }
          }
        },
        500: Type.Object({
          error: Type.String()
        })
      }
    }
  },
  async (_, res) => {
    res.send(false)
  }
))

// -------------------------------------------------------------------
// TypeBox Reply Return Type
// -------------------------------------------------------------------

expectAssignable(server.withTypeProvider<TypeBoxProvider>().get(
  '/',
  {
    schema: {
      response: {
        200: Type.String(),
        400: Type.Number(),
        500: Type.Object({
          error: Type.String()
        })
      }
    }
  },
  async (_, res) => {
    const option = 1 as 1 | 2 | 3
    switch (option) {
      case 1: return 'hello'
      case 2: return 42
      case 3: return { error: 'error' }
    }
  }
))

// -------------------------------------------------------------------
// TypeBox Reply Return Type (Different Content-types)
// -------------------------------------------------------------------

expectAssignable(server.withTypeProvider<TypeBoxProvider>().get(
  '/',
  {
    schema: {
      response: {
        200: {
          content: {
            'text/string': {
              schema: Type.String()
            },
            'application/json': {
              schema: Type.Object({
                msg: Type.String()
              })
            }
          }
        },
        500: Type.Object({
          error: Type.String()
        })
      }
    }
  },
  async (_, res) => {
    const option = 1 as 1 | 2 | 3
    switch (option) {
      case 1: return 'hello'
      case 2: return { msg: 'hello' }
      case 3: return { error: 'error' }
    }
  }
))

// -------------------------------------------------------------------
// TypeBox Reply Return Type: Non Assignable
// -------------------------------------------------------------------

expectError(server.withTypeProvider<TypeBoxProvider>().get(
  '/',
  {
    schema: {
      response: {
        200: Type.String(),
        400: Type.Number(),
        500: Type.Object({
          error: Type.String()
        })
      }
    }
  },
  async (_, res) => {
    return false
  }
))

// -------------------------------------------------------------------
// TypeBox Reply Return Type: Non Assignable (Different Content-types)
// -------------------------------------------------------------------

expectError(server.withTypeProvider<TypeBoxProvider>().get(
  '/',
  {
    schema: {
      response: {
        200: {
          content: {
            'text/string': {
              schema: Type.String()
            },
            'application/json': {
              schema: Type.Object({
                msg: Type.String()
              })
            }
          }
        },
        500: Type.Object({
          error: Type.String()
        })
      }
    }
  },
  async (_, res) => {
    return false
  }
))

// -------------------------------------------------------------------
// JsonSchemaToTs Reply Type
// -------------------------------------------------------------------

expectAssignable(server.withTypeProvider<JsonSchemaToTsProvider>().get(
  '/',
  {
    schema: {
      response: {
        200: { type: 'string' },
        400: { type: 'number' },
        500: { type: 'object', properties: { error: { type: 'string' } } }
      } as const
    }
  },
  (_, res) => {
    res.send('hello')
    res.send(42)
    res.send({ error: 'error' })
    expectType<((...args: [payload: string]) => typeof res)>(res.code(200).send)
    expectType<((...args: [payload: number]) => typeof res)>(res.code(400).send)
    expectType<((...args: [payload: { [x: string]: unknown; error?: string }]) => typeof res)>(res.code(500).send)
    expectError<(payload?: unknown) => typeof res>(res.code(200).send)
  }
))

// -------------------------------------------------------------------
// JsonSchemaToTs Reply Type (Different Content-types)
// -------------------------------------------------------------------

expectAssignable(server.withTypeProvider<JsonSchemaToTsProvider>().get(
  '/',
  {
    schema: {
      response: {
        200: {
          content: {
            'text/string': {
              schema: { type: 'string' }
            },
            'application/json': {
              schema: { type: 'object', properties: { msg: { type: 'string' } } }
            }
          }
        },
        500: { type: 'object', properties: { error: { type: 'string' } } }
      } as const
    }
  },
  (_, res) => {
    res.send('hello')
    res.send({ msg: 'hello' })
    res.send({ error: 'error' })
  }
))

// -------------------------------------------------------------------
// JsonSchemaToTs Reply Type: Non Assignable
// -------------------------------------------------------------------

expectError(server.withTypeProvider<JsonSchemaToTsProvider>().get(
  '/',
  {
    schema: {
      response: {
        200: { type: 'string' },
        400: { type: 'number' },
        500: { type: 'object', properties: { error: { type: 'string' } } }
      } as const
    }
  },
  async (_, res) => {
    res.send(false)
  }
))

// -------------------------------------------------------------------
// JsonSchemaToTs Reply Type: Non Assignable (Different Content-types)
// -------------------------------------------------------------------

expectError(server.withTypeProvider<JsonSchemaToTsProvider>().get(
  '/',
  {
    schema: {
      response: {
        200: {
          content: {
            'text/string': {
              schema: { type: 'string' }
            },
            'application/json': {
              schema: { type: 'object', properties: { msg: { type: 'string' } } }
            }
          }
        },
        500: { type: 'object', properties: { error: { type: 'string' } } }
      } as const
    }
  },
  async (_, res) => {
    res.send(false)
  }
))

// -------------------------------------------------------------------
// JsonSchemaToTs Reply Type Return
// -------------------------------------------------------------------

expectAssignable(server.withTypeProvider<JsonSchemaToTsProvider>().get(
  '/',
  {
    schema: {
      response: {
        200: { type: 'string' },
        400: { type: 'number' },
        500: { type: 'object', properties: { error: { type: 'string' } } }
      } as const
    }
  },
  async (_, res) => {
    const option = 1 as 1 | 2 | 3
    switch (option) {
      case 1: return 'hello'
      case 2: return 42
      case 3: return { error: 'error' }
    }
  }
))

// -------------------------------------------------------------------
// JsonSchemaToTs Reply Type Return (Different Content-types)
// -------------------------------------------------------------------

expectAssignable(server.withTypeProvider<JsonSchemaToTsProvider>().get(
  '/',
  {
    schema: {
      response: {
        200: {
          content: {
            'text/string': {
              schema: { type: 'string' }
            },
            'application/json': {
              schema: { type: 'object', properties: { msg: { type: 'string' } } }
            }
          }
        },
        500: { type: 'object', properties: { error: { type: 'string' } } }
      } as const
    }
  },
  async (_, res) => {
    const option = 1 as 1 | 2 | 3
    switch (option) {
      case 1: return 'hello'
      case 2: return { msg: 'hello' }
      case 3: return { error: 'error' }
    }
  }
))

// -------------------------------------------------------------------
// JsonSchemaToTs Reply Type Return: Non Assignable
// -------------------------------------------------------------------

expectError(server.withTypeProvider<JsonSchemaToTsProvider>().get(
  '/',
  {
    schema: {
      response: {
        200: { type: 'string' },
        400: { type: 'number' },
        500: { type: 'object', properties: { error: { type: 'string' } } }
      } as const
    }
  },
  async (_, res) => {
    return false
  }
))

// https://github.com/fastify/fastify/issues/4088
expectError(server.withTypeProvider<JsonSchemaToTsProvider>().get('/', {
  schema: {
    response: {
      200: { type: 'string' }
    }
  } as const
}, (_, res) => {
  return { foo: 555 }
}))

// -------------------------------------------------------------------
// JsonSchemaToTs Reply Type Return: Non Assignable (Different Content-types)
// -------------------------------------------------------------------

expectError(server.withTypeProvider<JsonSchemaToTsProvider>().get(
  '/',
  {
    schema: {
      response: {
        200: {
          content: {
            'text/string': {
              schema: { type: 'string' }
            },
            'application/json': {
              schema: { type: 'object', properties: { msg: { type: 'string' } } }
            }
          }
        },
        500: { type: 'object', properties: { error: { type: 'string' } } }
      } as const
    }
  },
  async (_, res) => {
    return false
  }
))

// -------------------------------------------------------------------
// Reply Type Override
// -------------------------------------------------------------------

expectAssignable(server.withTypeProvider<JsonSchemaToTsProvider>().get<{ Reply: boolean }>(
  '/',
  {
    schema: {
      response: {
        200: { type: 'string' },
        400: { type: 'number' },
        500: { type: 'object', properties: { error: { type: 'string' } } }
      } as const
    }
  },
  async (_, res) => {
    res.send(true)
  }
))

// -------------------------------------------------------------------
// Reply Type Override (Different Content-types)
// -------------------------------------------------------------------

expectAssignable(server.withTypeProvider<JsonSchemaToTsProvider>().get<{ Reply: boolean }>(
  '/',
  {
    schema: {
      response: {
        200: {
          content: {
            'text/string': {
              schema: { type: 'string' }
            },
            'application/json': {
              schema: { type: 'object', properties: { msg: { type: 'string' } } }
            }
          }
        },
        500: { type: 'object', properties: { error: { type: 'string' } } }
      } as const
    }
  },
  async (_, res) => {
    res.send(true)
  }
))

// -------------------------------------------------------------------
// Reply Type Return Override
// -------------------------------------------------------------------

expectAssignable(server.withTypeProvider<JsonSchemaToTsProvider>().get<{ Reply: boolean }>(
  '/',
  {
    schema: {
      response: {
        200: { type: 'string' },
        400: { type: 'number' },
        500: { type: 'object', properties: { error: { type: 'string' } } }
      } as const
    }
  },
  async (_, res) => {
    return true
  }
))

// -------------------------------------------------------------------
// Reply Type Return Override (Different Content-types)
// -------------------------------------------------------------------

expectAssignable(server.withTypeProvider<JsonSchemaToTsProvider>().get<{ Reply: boolean }>(
  '/',
  {
    schema: {
      response: {
        200: {
          content: {
            'text/string': {
              schema: { type: 'string' }
            },
            'application/json': {
              schema: { type: 'object', properties: { msg: { type: 'string' } } }
            }
          }
        },
        500: { type: 'object', properties: { error: { type: 'string' } } }
      } as const
    }
  },
  async (_, res) => {
    return true
  }
))

// -------------------------------------------------------------------
// Reply Status Code (Different Status Codes)
// -------------------------------------------------------------------

expectAssignable(server.withTypeProvider<JsonSchemaToTsProvider>().get(
  '/',
  {
    schema: {
      response: {
        200: {
          content: {
            'text/string': {
              schema: { type: 'string' }
            },
            'application/json': {
              schema: { type: 'object', properties: { msg: { type: 'string' } } }
            }
          }
        },
        500: { type: 'object', properties: { error: { type: 'string' } } }
      } as const
    }
  },
  async (_, res) => {
    res.code(200)
    res.code(500)
    expectError(() => res.code(201))
    expectError(() => res.code(400))
  }
))

// -------------------------------------------------------------------
// RouteGeneric Reply Type Return (Different Status Codes)
// -------------------------------------------------------------------

expectAssignable(server.get<{
  Reply: {
    200: string | { msg: string }
    400: number
    '5xx': { error: string }
  }
}>(
  '/',
  async (_, res) => {
    const option = 1 as 1 | 2 | 3 | 4
    switch (option) {
      case 1: return 'hello'
      case 2: return { msg: 'hello' }
      case 3: return 400
      case 4: return { error: 'error' }
    }
  }
))

// -------------------------------------------------------------------
// RouteGeneric Status Code (Different Status Codes)
// -------------------------------------------------------------------

expectAssignable(server.get<{
  Reply: {
    200: string | { msg: string }
    400: number
    '5xx': { error: string }
  }
}>(
  '/',
  async (_, res) => {
    res.code(200)
    res.code(400)
    res.code(500)
    res.code(502)
    expectError(() => res.code(201))
    expectError(() => res.code(300))
    expectError(() => res.code(404))
    return 'hello'
  }
))

// -------------------------------------------------------------------
// RouteGeneric Reply Type Return: Non Assignable (Different Status Codes)
// -------------------------------------------------------------------

expectError(server.get<{
  Reply: {
    200: string | { msg: string }
    400: number
    '5xx': { error: string }
  }
}>(
  '/',
  async (_, res) => {
    return true
  }
))

// -------------------------------------------------------------------
// FastifyPlugin: Auxiliary
// -------------------------------------------------------------------

interface AuxiliaryPluginProvider extends FastifyTypeProvider { validator: 'plugin-auxiliary' }

// Auxiliary plugins may have varying server types per application. Recommendation would be to explicitly remap instance provider context within plugin if required.
function plugin<T extends FastifyInstance> (instance: T) {
  expectAssignable(instance.withTypeProvider<AuxiliaryPluginProvider>().get(
    '/',
    {
      schema: { body: null }
    },
    (req) => {
      expectType<'plugin-auxiliary'>(req.body)
    }
  ))
}

expectAssignable(server.withTypeProvider<AuxiliaryPluginProvider>().register(plugin).get(
  '/',
  {
    schema: { body: null }
  },
  (req) => {
    expectType<'plugin-auxiliary'>(req.body)
  }
))

// -------------------------------------------------------------------
// Handlers: Inline
// -------------------------------------------------------------------

interface InlineHandlerProvider extends FastifyTypeProvider { validator: 'handler-inline' }

// Inline handlers should infer for the request parameters (non-shared)
expectAssignable(server.withTypeProvider<InlineHandlerProvider>().get(
  '/',
  {
    onRequest: (req, res, done) => {
      expectType<'handler-inline'>(req.body)
    },
    schema: { body: null }
  },
  (req) => {
    expectType<'handler-inline'>(req.body)
  }
))

// -------------------------------------------------------------------
// Handlers: Auxiliary
// -------------------------------------------------------------------

interface AuxiliaryHandlerProvider extends FastifyTypeProvider { validator: 'handler-auxiliary' }

// Auxiliary handlers are likely shared for multiple routes and thus should infer as unknown due to potential varying parameters
function auxiliaryHandler (request: FastifyRequest, reply: FastifyReply, done: HookHandlerDoneFunction): void {
  expectType<unknown>(request.body)
}

expectAssignable(server.withTypeProvider<AuxiliaryHandlerProvider>().get(
  '/',
  {
    onRequest: auxiliaryHandler,
    schema: { body: 'handler-auxiliary' }
  },
  (req) => {
    expectType<'handler-auxiliary'>(req.body)
  }
))

// -------------------------------------------------------------------
// SafePromiseLike
// -------------------------------------------------------------------
const safePromiseLike = {
  then: new Promise<string>(resolve => resolve('')).then,
  __linterBrands: 'SafePromiseLike' as const
}
expectAssignable<SafePromiseLike<string>>(safePromiseLike)
expectAssignable<PromiseLike<string>>(safePromiseLike)
expectError<Promise<string>>(safePromiseLike)

// -------------------------------------------------------------------
// Separate Providers
// -------------------------------------------------------------------

interface SeparateProvider extends FastifyTypeProvider {
  validator: string
  serializer: Date
}

expectAssignable(server.withTypeProvider<SeparateProvider>().get(
  '/',
  {
    schema: {
      body: null,
      response: {
        200: { type: 'string' }
      }
    }
  },
  (req, res) => {
    expectType<string>(req.body)

    res.send(new Date())
  }
))
