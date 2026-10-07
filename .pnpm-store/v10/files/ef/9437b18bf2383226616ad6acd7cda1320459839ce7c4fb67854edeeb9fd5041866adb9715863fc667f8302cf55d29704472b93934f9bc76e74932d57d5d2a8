import fastify from 'fastify'

import swaggerDefault, { fastifySwaggerUi, FastifySwaggerUiOptions } from '..'
import * as fastifySwaggerStar from '..'

const app = fastify()
const fastifySwaggerOptions: FastifySwaggerUiOptions = {
  routePrefix: '/documentation',
}

app.register(swaggerDefault, fastifySwaggerOptions)
app.register(fastifySwaggerUi, fastifySwaggerOptions)
app.register(fastifySwaggerStar.default, fastifySwaggerOptions)
app.register(fastifySwaggerStar.fastifySwaggerUi, fastifySwaggerOptions)
