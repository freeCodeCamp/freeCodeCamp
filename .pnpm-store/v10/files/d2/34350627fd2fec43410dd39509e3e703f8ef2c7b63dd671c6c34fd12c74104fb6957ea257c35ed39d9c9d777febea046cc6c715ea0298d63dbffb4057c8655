# Migration

## Migrating from version 7 to 8

As of version 8 `@fastify/swagger` is only responsible for generating valid
swagger/openapi-specifications. The new `@fastify/swagger-ui` plugin is
responsible for serving the swagger-ui frontend.

Options in version 7 of `@fastify/swagger` related to the configuration
of the swagger-ui frontend are now options of `@fastify/swagger-ui`.

The `exposeRoute` option is removed.

Following are the `@fastify/swagger-ui` options:

| Option             | Default          | Description                                                                                                               |
| ------------------ | ---------------- | ------------------------------------------------------------------------------------------------------------------------- |
| baseDir            | undefined        | Only relevant if `@fastify/swagger` used in static-mode and additional schema-files contain referenced schemas. Specify the directory where all spec files that are included in the main one using $ref will be located. By default, this is the directory where the main spec file is located. Provided value should be an absolute path without trailing slash.     |
| initOAuth          | {}               | Configuration options for [Swagger UI initOAuth](https://swagger.io/docs/open-source-tools/swagger-ui/usage/oauth2/).     |
| routePrefix        | '/documentation' | Overwrite the default Swagger UI route prefix.                                                                            |
| staticCSP          | false            | Enable CSP header for static resources.                                                                                   |
| transformStaticCSP | undefined        | Synchronous function to transform CSP header for static resources if the header has been previously set.                  |
| uiConfig           | {}               | Configuration options for [Swagger UI](https://github.com/swagger-api/swagger-ui/blob/master/docs/usage/configuration.md). Must be literal values, see [#5710](https://github.com/swagger-api/swagger-ui/issues/5710).|
| uiHooks            | {}               | Additional hooks for the documentation's routes. You can provide the `onRequest` and `preHandler` hooks with the same [route's options](https://fastify.dev/docs/latest/Reference/Routes/#options) interface.|

The `baseDir` option is new and is only needed if external spec files should be
exposed. `baseDir` option of `@fastify/swagger-ui` should be set to the same
value as the `specification.baseDir` option of `@fastify/swagger`.

### Example (static-mode):

before:
```js
import Fastify from 'fastify'
import fastifySwagger from '@fastify/swagger'

const fastify = new Fastify()

await fastify.register(fastifySwagger, {
  mode: 'static',
  specification: {
    path: './examples/example-static-specification.yaml',
    postProcessor: function(swaggerObject) {
      return swaggerObject
    },
    baseDir: '/path/to/external/spec/files/location',
  },
  exposeRoute: true,
  routePrefix: '/documentation',
  initOAuth: { },
  uiConfig: {
    docExpansion: 'full',
    deepLinking: false
  },
  uiHooks: {
    onRequest: function (request, reply, next) { next() },
    preHandler: function (request, reply, next) { next() }
  },
  staticCSP: true,
  transformStaticCSP: (header) => header
})
```

after:
```js
import Fastify from 'fastify'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'

const fastify = new Fastify()

await fastify.register(fastifySwagger, {
  mode: 'static',
  specification: {
    path: './examples/example-static-specification.yaml',
    postProcessor: function(swaggerObject) {
      return swaggerObject
    },
    baseDir: '/path/to/external/spec/files/location'
  }
})

await fastify.register(fastifySwaggerUi, {
  baseDir: '/path/to/external/spec/files/location',
  routePrefix: '/documentation',
  initOAuth: { },
  uiConfig: {
    docExpansion: 'full',
    deepLinking: false
  },
  uiHooks: {
    onRequest: function (request, reply, next) { next() },
    preHandler: function (request, reply, next) { next() }
  },
  staticCSP: true,
  transformStaticCSP: (header) => header
})
```

### Example (dynamic-mode):

before:
```js
import Fastify from 'fastify'
import fastifySwagger from '@fastify/swagger'

const fastify = new Fastify()

await fastify.register(fastifySwagger, {
  mode: 'dynamic',
  openapi: {
    info: {
      title: String,
      description: String,
      version: String,
    },
    externalDocs: Object,
    servers: [ Object ],
    components: Object,
    security: [ Object ],
    tags: [ Object ]
  },
  exposeRoute: true,
  routePrefix: '/documentation',
  initOAuth: { },
  uiConfig: {
    docExpansion: 'full',
    deepLinking: false
  },
  uiHooks: {
    onRequest: function (request, reply, next) { next() },
    preHandler: function (request, reply, next) { next() }
  },
  staticCSP: true,
  transformStaticCSP: (header) => header
})
```

after:
```js
import Fastify from 'fastify'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'

const fastify = new Fastify()

await fastify.register(fastifySwagger, {
  mode: 'dynamic',
  openapi: {
    info: {
      title: String,
      description: String,
      version: String,
    },
    externalDocs: Object,
    servers: [ Object ],
    components: Object,
    security: [ Object ],
    tags: [ Object ]
  }
})

await fastify.register(fastifySwaggerUi, {
  routePrefix: '/documentation',
  initOAuth: { },
  uiConfig: {
    docExpansion: 'full',
    deepLinking: false
  },
  uiHooks: {
    onRequest: function (request, reply, next) { next() },
    preHandler: function (request, reply, next) { next() }
  },
  staticCSP: true,
  transformStaticCSP: (header) => header
})
```
