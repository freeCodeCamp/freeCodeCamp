import Fastify from 'fastify'
import fastifyCookie from '@fastify/cookie'
import fastifyCsrfProtection from '../index.js'

const fastify = Fastify({
  logger: true
})

fastify.register(fastifyCookie)
await fastify.register(fastifyCsrfProtection)

fastify.post(
  '/',
  {
    preHandler: fastify.csrfProtection
  },
  async (req) => {
    return req.body
  }
)

// generate a token
fastify.route({
  method: 'GET',
  url: '/',
  handler: async (_req, reply) => {
    const token = reply.generateCsrf()
    reply.type('text/html')

    return `
      <html>
        <script type='text/javascript'>
          async function test(event) {
            event.preventDefault()
            const rawResponse = await fetch('/', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ _csrf: '${token}'})
            });
            const content = await rawResponse.json();

            alert(JSON.stringify(content));
          }
        </script>
        <body>
          <form action="/" method='POST' id='form' onsubmit={test(event)}>
            <input type='submit' value='submit' />
          </form>
        </body>
      </html>

    `
  }
})

// Run the server!
fastify.listen({ port: 3001 }, function (err) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
