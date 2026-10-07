import fastify from 'fastify'
import fastifySwagger from '..'
import { minimalOpenApiV3Document } from './minimal-openapiV3-document'

const app = fastify({
  http2: true
})

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

app.put('/some-route/:id', {
  schema: {
    description: 'put me some data',
    tags: ['user', 'code'],
    summary: 'qwerty',
    security: [{ apiKey: [] }]
  }
}, () => {})

app.get('/public/route', {
  schema: {
    description: 'returns 200 OK',
    summary: 'qwerty',
    security: []
  }
}, () => {})

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
