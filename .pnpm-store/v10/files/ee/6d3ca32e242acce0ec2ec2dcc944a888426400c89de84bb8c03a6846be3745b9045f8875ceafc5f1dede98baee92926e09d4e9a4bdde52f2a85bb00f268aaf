/**
 * Most type annotations in this file are not strictly necessary but are
 * included for this example.
 *
 * To run this example execute the following commands to install typescript,
 * transpile the code, and start the server:
 *
 * npm i -g typescript
 * tsc examples/typescript-server.ts --target es6 --module commonjs
 * node examples/typescript-server.js
 */

import fastify, { FastifyInstance, RouteShorthandOptions } from '../fastify'
import { Server, IncomingMessage, ServerResponse } from 'node:http'

// Create an http server. We pass the relevant typings for our http version used.
// By passing types we get correctly typed access to the underlying http objects in routes.
// If using http2 we'd pass <http2.Http2Server, http2.Http2ServerRequest, http2.Http2ServerResponse>
const server: FastifyInstance<
  Server,
  IncomingMessage,
  ServerResponse
> = fastify({ logger: true })

// Define interfaces for our request. We can create these automatically
// off our JSON Schema files (See TypeScript.md) but for the purpose of this
// example we manually define them.
interface PingQuerystring {
  foo?: number;
}

interface PingParams {
  bar?: string;
}

interface PingHeaders {
  a?: string;
}

interface PingBody {
  baz?: string;
}

// Define our route options with schema validation
const opts: RouteShorthandOptions = {
  schema: {
    body: {
      type: 'object',
      properties: {
        pong: {
          type: 'string'
        }
      }
    }
  }
}

// Add our route handler with correct types
server.post<{
  Querystring: PingQuerystring;
  Params: PingParams;
  Headers: PingHeaders;
  Body: PingBody;
}>('/ping/:bar', opts, (request, reply) => {
  console.log(request.query) // this is of type `PingQuerystring`
  console.log(request.params) // this is of type `PingParams`
  console.log(request.headers) // this is of type `PingHeaders`
  console.log(request.body) // this is of type `PingBody`
  reply.code(200).send({ pong: 'it worked!' })
})

// Start your server
server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`server listening on ${address}`)
})
