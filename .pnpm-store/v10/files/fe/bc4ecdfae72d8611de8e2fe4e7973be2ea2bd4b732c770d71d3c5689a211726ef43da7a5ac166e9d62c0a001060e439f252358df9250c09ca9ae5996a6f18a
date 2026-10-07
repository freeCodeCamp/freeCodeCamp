<h1 align="center">Fastify</h1>

## Type Providers

Type Providers are a TypeScript feature that enables Fastify to infer type
information from inline JSON Schema. They are an alternative to specifying
generic arguments on routes and can reduce the need to keep associated types for
each schema in a project.

### Providers

Official Type Provider packages follow the
`@fastify/type-provider-{provider-name}` naming convention.
Several community providers are also available.

The following inference packages are supported:

- [`json-schema-to-ts`](https://github.com/ThomasAribart/json-schema-to-ts)
- [`typebox`](https://github.com/sinclairzx81/typebox)
- [`zod`](https://github.com/colinhacks/zod)

See also the Type Provider wrapper packages for each of the packages respectively:

- [`@fastify/type-provider-json-schema-to-ts`](https://github.com/fastify/fastify-type-provider-json-schema-to-ts)
- [`@fastify/type-provider-typebox`](https://github.com/fastify/fastify-type-provider-typebox)
- [`fastify-type-provider-zod`](https://github.com/turkerdev/fastify-type-provider-zod)
 (3rd party)

### Json Schema to Ts

The following sets up a `json-schema-to-ts` Type Provider:

```bash
$ npm i @fastify/type-provider-json-schema-to-ts
```

```typescript
import fastify from 'fastify'
import { JsonSchemaToTsProvider } from '@fastify/type-provider-json-schema-to-ts'

const server = fastify().withTypeProvider<JsonSchemaToTsProvider>()

server.get('/route', {
  schema: {
    querystring: {
      type: 'object',
      properties: {
        foo: { type: 'number' },
        bar: { type: 'string' },
      },
      required: ['foo', 'bar']
    }
  }
}, (request, reply) => {

  // type Query = { foo: number, bar: string }
  const { foo, bar } = request.query // type safe!
})
```

### TypeBox

The following sets up a TypeBox Type Provider:

```bash
$ npm i typebox @fastify/type-provider-typebox
```

```typescript
import fastify from 'fastify'
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'
import { Type } from 'typebox'

const server = fastify().withTypeProvider<TypeBoxTypeProvider>()

server.get('/route', {
  schema: {
    querystring: Type.Object({
      foo: Type.Number(),
      bar: Type.String()
    })
  }
}, (request, reply) => {

  // type Query = { foo: number, bar: string }
  const { foo, bar } = request.query // type safe!
})
```

See the [TypeBox
documentation](https://sinclairzx81.github.io/typebox/#/docs/overview/2_setup)
for setting-up AJV to work with TypeBox.

### Zod

See [official documentation](https://github.com/turkerdev/fastify-type-provider-zod)
for Zod Type Provider instructions.


### Scoped Type-Provider

The provider types don't propagate globally. In encapsulated usage, one can
remap the context to use one or more providers (for example, `typebox` and
`json-schema-to-ts` can be used in the same application).

Example:

```ts
import Fastify from 'fastify'
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'
import { JsonSchemaToTsProvider } from '@fastify/type-provider-json-schema-to-ts'
import { Type } from 'typebox'

const fastify = Fastify()

function pluginWithTypebox(fastify: FastifyInstance, _opts, done): void {
  fastify.withTypeProvider<TypeBoxTypeProvider>()
    .get('/', {
      schema: {
        body: Type.Object({
          x: Type.String(),
          y: Type.Number(),
          z: Type.Boolean()
        })
      }
    }, (req) => {
        const { x, y, z } = req.body // type safe
    });
  done()
}

function pluginWithJsonSchema(fastify: FastifyInstance, _opts, done): void {
  fastify.withTypeProvider<JsonSchemaToTsProvider>()
    .get('/', {
      schema: {
        body: {
          type: 'object',
          properties: {
            x: { type: 'string' },
            y: { type: 'number' },
            z: { type: 'boolean' }
          },
        }
      }
    }, (req) => {
      const { x, y, z } = req.body // type safe
    });
  done()
}

fastify.register(pluginWithJsonSchema)
fastify.register(pluginWithTypebox)
```

It is important to note that since the types do not propagate globally, it is
currently not possible to avoid multiple registrations on routes when dealing
with several scopes, as shown below:

```ts
import Fastify from 'fastify'
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'
import { Type } from 'typebox'

const server = Fastify().withTypeProvider<TypeBoxTypeProvider>()

server.register(plugin1) // wrong
server.register(plugin2) // correct

function plugin1(fastify: FastifyInstance, _opts, done): void {
  fastify.get('/', {
    schema: {
      body: Type.Object({
        x: Type.String(),
        y: Type.Number(),
        z: Type.Boolean()
      })
    }
  }, (req) => {
    // In a new scope, call `withTypeProvider` again to ensure it works
    const { x, y, z } = req.body
  });
  done()
}

function plugin2(fastify: FastifyInstance, _opts, done): void {
  const server = fastify.withTypeProvider<TypeBoxTypeProvider>()

  server.get('/', {
    schema: {
      body: Type.Object({
        x: Type.String(),
        y: Type.Number(),
        z: Type.Boolean()
      })
    }
  }, (req) => {
    // works
    const { x, y, z } = req.body
  });
  done()
}
```

### Type Definition of FastifyInstance + TypeProvider

When working with modules, use `FastifyInstance` with Type Provider generics.
See the example below:

```ts
// index.ts
import Fastify from 'fastify'
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'
import { registerRoutes } from './routes'

const server = Fastify().withTypeProvider<TypeBoxTypeProvider>()

registerRoutes(server)

server.listen({ port: 3000 })
```

```ts
// routes.ts
import { Type } from 'typebox'
import {
  FastifyInstance,
  FastifyBaseLogger,
  RawReplyDefaultExpression,
  RawRequestDefaultExpression,
  RawServerDefault
} from 'fastify'
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'

type FastifyTypebox = FastifyInstance<
  RawServerDefault,
  RawRequestDefaultExpression<RawServerDefault>,
  RawReplyDefaultExpression<RawServerDefault>,
  FastifyBaseLogger,
  TypeBoxTypeProvider
>;

export function registerRoutes(fastify: FastifyTypebox): void {
  fastify.get('/', {
    schema: {
      body: Type.Object({
        x: Type.String(),
        y: Type.Number(),
        z: Type.Boolean()
      })
    }
  }, (req) => {
    // works
    const { x, y, z } = req.body
  });
}
```
