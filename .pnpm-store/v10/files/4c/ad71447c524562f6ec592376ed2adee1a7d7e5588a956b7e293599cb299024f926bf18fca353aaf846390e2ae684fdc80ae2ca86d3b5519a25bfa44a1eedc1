import fastify from 'fastify'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '..'

const app = fastify({
  http2: true
})

app.register(fastifySwagger)
app.register(fastifySwaggerUi)
app.register(fastifySwaggerUi, {})
app.register(fastifySwaggerUi, {
  routePrefix: '/documentation',
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
  .register(fastifySwaggerUi, {
    routePrefix: '/documentation',
  })
