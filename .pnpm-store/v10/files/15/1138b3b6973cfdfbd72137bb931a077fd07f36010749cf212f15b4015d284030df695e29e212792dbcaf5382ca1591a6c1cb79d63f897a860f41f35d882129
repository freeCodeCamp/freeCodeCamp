import fastify, { FastifySchema, RouteOptions } from 'fastify'
import fastifySwagger, {
  formatParamUrl,
  SwaggerOptions,
} from '..'
import { minimalOpenApiV3Document } from './minimal-openapiV3-document'
import { expectType } from 'tsd'

import {
  OpenAPI,
  OpenAPIV2,
  OpenAPIV3,
  // eslint-disable-next-line camelcase
  OpenAPIV3_1
} from 'openapi-types'

const app = fastify()

app.register(fastifySwagger)
app.register(fastifySwagger, {})
app.register(fastifySwagger, {
  transform: ({ schema, url }) => ({
    schema,
    url,
  })
})
app.register(fastifySwagger, {
  mode: 'static',
  specification: {
    document: minimalOpenApiV3Document
  }
})
app.register(fastifySwagger, { convertConstToEnum: false })

const fastifySwaggerOptions: SwaggerOptions = {
  mode: 'static',
  specification: {
    document: minimalOpenApiV3Document
  }
}
app.register(fastifySwagger, fastifySwaggerOptions)

const fastifyDynamicSwaggerOptions: SwaggerOptions = {
  mode: 'dynamic',
  hiddenTag: 'X-HIDDEN',
  hideUntagged: true,
  stripBasePath: true,
  refResolver: {
    buildLocalReference: (_json, _baseUri, fragment, i) => `${fragment}-${i}`
  }
}
app.register(fastifySwagger, fastifyDynamicSwaggerOptions)

app.get('/deprecated', {
  schema: {
    deprecated: true,
    hide: true
  }
}, () => {})

app.put('/some-route/:id', {
  schema: {
    description: 'put me some data',
    tags: ['user', 'code'],
    summary: 'qwerty',
    consumes: ['application/json', 'multipart/form-data'],
    security: [{ apiKey: [] }],
    operationId: 'opeId',
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find more info here'
    },
  }
}, () => {})

app.put('/image.png', {
  schema: {
    description: 'returns an image',
    summary: 'qwerty',
    consumes: ['application/json', 'multipart/form-data'],
    produces: ['image/png'],
    response: {
      200: {
        type: 'string',
        format: 'binary'
      }
    }
  }
}, async (_req, reply) => {
  reply
    .type('image/png')
    .send(Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAIAAAACDbGyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAAgSURBVBhXY/iPCkB8BgYkEiSIBICiCCEoB0SBwf///wGHRzXLSklJLQAAAABJRU5ErkJggg==', 'base64'))
})

app.get('/public/route', {
  schema: {
    description: 'returns 200 OK',
    summary: 'qwerty',
    security: [],
    response: { 200: {} }
  },
  links: {
    200: { 'some-route': { operationId: 'opeId' } }
  }
}, () => {})

app.get('/public/readonly-schema-route', {
  schema: {
    description: 'returns 200 OK',
    tags: ['foo'],
    summary: 'qwerty',
    security: [],
    response: { 200: {} }
  },
  links: {
    200: { 'some-route': { operationId: 'opeId' } }
  }
} as const, () => {})

app
  .register(fastifySwagger, {
    swagger: {
      info: {
        title: 'Test swagger',
        description: 'testing the fastify swagger api',
        version: '0.1.0'
      },
      externalDocs: {
        url: 'https://swagger.io',
        description: 'Find more info here'
      },
      host: 'localhost',
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json'],
      tags: [
        { name: 'user', description: 'User related end-points' },
        { name: 'code', description: 'Code related end-points' }
      ],
      securityDefinitions: {
        apiKey: {
          type: 'apiKey',
          name: 'apiKey',
          in: 'header'
        }
      }
    }
  })
  .ready(() => {
    app.swagger()
  })

app
  .register(fastifySwagger, {
    openapi: {
      info: {
        title: 'Test openapi',
        description: 'testing the fastify swagger api',
        version: '0.1.0',
      },
      servers: [{ url: 'http://localhost' }],
      externalDocs: {
        url: 'https://swagger.io',
        description: 'Find more info here',
      },
      components: {
        schemas: {},
        securitySchemes: {
          apiKey: {
            type: 'apiKey',
            name: 'apiKey',
            in: 'header',
          },
        },
      },
    }
  })
  .ready(() => {
    app.swagger()
  })

app.register(fastifySwagger, {
  openapi: {
    components: {
      schemas: {
        Model: {
          type: 'object',
          properties: {
            name: { type: 'null' },
          },
          required: ['name']
        }
      }
    }
  },
})
  .ready(() => {
    app.swagger()
  })

app.register(fastifySwagger, {
})
  .ready(() => {
    app.swagger()
  })

app.get(
  '/endpoint-transform-function',
  {
    config: {
      swaggerTransform: ({
        schema,
        url,
        route,
        ...documentObject
      }) => {
        schema satisfies FastifySchema
        url satisfies string
        route satisfies RouteOptions
        // eslint-disable-next-line camelcase
        documentObject satisfies { swaggerObject: Partial<OpenAPIV2.Document> } | { openapiObject: Partial<OpenAPIV3.Document | OpenAPIV3_1.Document> }
        return { schema, url }
      },
    },
  },
  () => {}
)

app.get(
  '/endpoint-transform-false',
  {
    config: {
      swaggerTransform: false,
    },
  },
  () => {}
)

expectType<OpenAPI.Document>(app.swagger())
expectType<OpenAPI.Document>(app.swagger({ yaml: false }))
expectType<string>(app.swagger({ yaml: true }))
expectType<OpenAPI.Document | string>(app.swagger({ yaml: Boolean(process.env.YAML) }))

expectType<(arg: string)=>string>(formatParamUrl)

app.register(fastifySwagger, {
  decorator: 'swagger'
})

app.register(fastifySwagger, {
  decorator: 'customSwagger'
})

app.register(fastifySwagger, {
  exposeHeadRoutes: true
})

app.register(fastifySwagger, {
  exposeHeadRoutes: false
})

app.get(
  '/endpoint-expose-head-route',
  {
    config: {
      swagger: {
        exposeHeadRoute: true
      }
    },
  },
  () => {}
)
