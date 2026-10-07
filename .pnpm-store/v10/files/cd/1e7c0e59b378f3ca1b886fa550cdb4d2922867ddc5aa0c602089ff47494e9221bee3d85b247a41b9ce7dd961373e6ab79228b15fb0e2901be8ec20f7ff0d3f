// works on Node v14.13.0+
import { fastify } from '../fastify.js'

const app = fastify({
  logger: true
})

const schema = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          hello: {
            type: 'string'
          }
        }
      }
    }
  }
}

app.get('/', schema, async function (req, reply) {
  return { hello: 'world' }
})

app.listen({ port: 3000 }).catch(console.error)
