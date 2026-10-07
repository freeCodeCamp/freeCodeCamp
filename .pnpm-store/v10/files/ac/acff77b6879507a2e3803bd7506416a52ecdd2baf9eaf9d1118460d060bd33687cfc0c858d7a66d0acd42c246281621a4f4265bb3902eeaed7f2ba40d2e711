<h1 align="center">Fastify</h1>

## TypeScript

The Fastify framework is written in vanilla JavaScript, and as such type
definitions are not as easy to maintain; however, since version 2 and beyond,
maintainers and contributors have put in a great effort to improve the types.

The type system was changed in Fastify version 3. The new type system introduces
generic constraining and defaulting, plus a new way to define schema types such
as a request body, querystring, and more! As the team works on improving
framework and type definition synergy, sometimes parts of the API will not be
typed or may be typed incorrectly. We encourage you to **contribute** to help us
fill in the gaps. Just make sure to read our
[`CONTRIBUTING.md`](https://github.com/fastify/fastify/blob/main/CONTRIBUTING.md)
file before getting started to make sure things go smoothly!

> The documentation in this section covers Fastify version 3.x typings

> Plugins may or may not include typings. See [Plugins](#plugins) for more
> information. We encourage users to send pull requests to improve typings
> support.

🚨 Don't forget to install `@types/node`

## Learn By Example

The best way to learn the Fastify type system is by example! The following four
examples should cover the most common Fastify development cases. After the
examples there is further, more detailed documentation for the type system.

### Getting Started

This example will get you up and running with Fastify and TypeScript. It results
in a blank http Fastify server.

1. Create a new npm project, install Fastify, and install typescript & Node.js
   types as peer dependencies:
  ```bash
  npm init -y
  npm i fastify
  npm i -D typescript @types/node
  ```
2. Add the following lines to the `"scripts"` section of the `package.json`:
  ```json
  {
    "scripts": {
      "build": "tsc -p tsconfig.json",
      "start": "node index.js"
    }
  }
  ```

3. Initialize a TypeScript configuration file:
  ```bash
  npx tsc --init
  ```
  or use one of the [recommended
  ones](https://github.com/tsconfig/bases#node-14-tsconfigjson).

> ℹ️ Note:
> Set `target` property in `tsconfig.json` to `es2017` or greater to avoid
> [FastifyDeprecation](https://github.com/fastify/fastify/issues/3284) warning.

4. Create an `index.ts` file - this will contain the server code
5. Add the following code block to your file:
   ```typescript
   import fastify from 'fastify'

   const server = fastify()

   server.get('/ping', async (request, reply) => {
     return 'pong\n'
   })

   server.listen({ port: 8080 }, (err, address) => {
     if (err) {
       console.error(err)
       process.exit(1)
     }
     console.log(`Server listening at ${address}`)
   })
   ```
6. Run `npm run build` - this will compile `index.ts` into `index.js` which can
   be executed using Node.js. If you run into any errors please open an issue in
   [fastify/help](https://github.com/fastify/help/)
7. Run `npm run start` to run the Fastify server
8. You should see `Server listening at http://127.0.0.1:8080` in your console
9. Try out your server using `curl localhost:8080/ping`, it should return `pong`
   🏓

🎉 You now have a working Typescript Fastify server! This example demonstrates
the simplicity of the version 3.x type system. By default, the type system
assumes you are using an `http` server. The later examples will demonstrate how
to create more complex servers such as `https` and `http2`, how to specify route
schemas, and more!

> For more examples on initializing Fastify with TypeScript (such as enabling
> HTTP2) check out the detailed API section [here][Fastify]

### Using Generics

The type system heavily relies on generic properties to provide the most
accurate development experience. While some may find the overhead a bit
cumbersome, the tradeoff is worth it! This example will dive into implementing
generic types for route schemas and the dynamic properties located on the
route-level `request` object.

1. If you did not complete the previous example, follow steps 1-4 to get set up.
2. Inside `index.ts`, define three interfaces `IQuerystring`,`IHeaders` and `IReply`:
   ```typescript
   interface IQuerystring {
     username: string;
     password: string;
   }

   interface IHeaders {
     'h-Custom': string;
   }

   interface IReply {
     200: { success: boolean };
     302: { url: string };
     '4xx': { error: string };
   }
   ```
3. Using the three interfaces, define a new API route and pass them as generics.
   The shorthand route methods (i.e. `.get`) accept a generic object
   `RouteGenericInterface` containing five named properties: `Body`,
   `Querystring`, `Params`, `Headers` and `Reply`. The interfaces `Body`,
   `Querystring`, `Params` and `Headers` will be passed down through the route
   method into the route method handler `request` instance and the `Reply`
   interface to the `reply` instance.
   ```typescript
   server.get<{
     Querystring: IQuerystring,
     Headers: IHeaders,
     Reply: IReply
   }>('/auth', async (request, reply) => {
     const { username, password } = request.query
     const customerHeader = request.headers['h-Custom']
     // do something with request data

     // chaining .statusCode/.code calls with .send allows type narrowing. For example:
     // this works
     reply.code(200).send({ success: true });
     // but this gives a type error
     reply.code(200).send('uh-oh');
     // it even works for wildcards
     reply.code(404).send({ error: 'Not found' });
     return { success: true }
   })
   ```

4. Build and run the server code with `npm run build` and `npm run start`
5. Query the API
   ```bash
   curl localhost:8080/auth?username=admin&password=Password123!
   ```
   And it should return back `logged in!`
6. But wait there's more! The generic interfaces are also available inside route
   level hook methods. Modify the previous route by adding a `preValidation`
   hook:
   ```typescript
   server.get<{
     Querystring: IQuerystring,
     Headers: IHeaders,
     Reply: IReply
   }>('/auth', {
     preValidation: (request, reply, done) => {
       const { username, password } = request.query
       done(username !== 'admin' ? new Error('Must be admin') : undefined) // only validate `admin` account
     }
   }, async (request, reply) => {
     const customerHeader = request.headers['h-Custom']
     // do something with request data
     return { success: true }
   })
   ```
7. Build and run and query with the `username` query string option set to
   anything other than `admin`. The API should now return a HTTP 500 error
   `{"statusCode":500,"error":"Internal Server Error","message":"Must be
   admin"}`

🎉 Good work, now you can define interfaces for each route and have strictly
typed request and reply instances. Other parts of the Fastify type system rely
on generic properties. Make sure to reference the detailed type system
documentation below to learn more about what is available.

### JSON Schema

To validate your requests and responses you can use JSON Schema files. If you
didn't know already, defining schemas for your Fastify routes can increase their
throughput! Check out the [Validation and
Serialization](./Validation-and-Serialization.md) documentation for more info.

Also it has the advantage to use the defined type within your handlers
(including pre-validation, etc.).

Here are some options on how to achieve this.

#### Fastify Type Providers

Fastify offers two packages wrapping `json-schema-to-ts` and `typebox`:

- [`@fastify/type-provider-json-schema-to-ts`](https://github.com/fastify/fastify-type-provider-json-schema-to-ts)
- [`@fastify/type-provider-typebox`](https://github.com/fastify/fastify-type-provider-typebox)

And a `zod` wrapper by a third party called [`fastify-type-provider-zod`](https://github.com/turkerdev/fastify-type-provider-zod)

They simplify schema validation setup and you can read more about them in [Type
Providers](./Type-Providers.md) page.

Below is how to setup schema validation using the `typebox`,
`json-schema-to-typescript`, and `json-schema-to-ts` packages without type
providers.

#### TypeBox

A useful library for building types and a schema at once is [TypeBox](https://www.npmjs.com/package/typebox).
With TypeBox you define your schema within your code and use them directly as
types or schemas as you need them.

When you want to use it for validation of some payload in a fastify route you
can do it as follows:

1. Install `typebox` in your project.

    ```bash
    npm i typebox
    ```

2. Define the schema you need with `Type` and create the respective type  with
   `Static`.

    ```typescript
    import { Static, Type } from 'typebox'

    export const User = Type.Object({
      name: Type.String(),
      mail: Type.Optional(Type.String({ format: 'email' })),
    })

    export type UserType = Static<typeof User>
    ```

3. Use the defined type and schema during the definition of your route

    ```typescript
    import Fastify from 'fastify'
    // ...

    const fastify = Fastify()

    fastify.post<{ Body: UserType, Reply: UserType }>(
      '/',
      {
        schema: {
          body: User,
          response: {
            200: User
          },
        },
      },
      (request, reply) => {
        // The `name` and `mail` types are automatically inferred
        const { name, mail } = request.body;
        reply.status(200).send({ name, mail });
      }
    )
    ```

#### json-schema-to-typescript

In the last example we used Typebox to define the types and schemas for our
route. Many users will already be using JSON Schemas to define these properties,
and luckily there is a way to transform existing JSON Schemas into TypeScript
interfaces!

1. If you did not complete the 'Getting Started' example, go back and follow
   steps 1-4 first.
2. Install the `json-schema-to-typescript` module:

   ```bash
   npm i -D json-schema-to-typescript
   ```

3. Create a new folder called `schemas` and add two files `headers.json` and
   `querystring.json`. Copy and paste the following schema definitions into the
   respective files:

   ```json
   {
     "title": "Headers Schema",
     "type": "object",
     "properties": {
       "h-Custom": { "type": "string" }
     },
     "additionalProperties": false,
     "required": ["h-Custom"]
   }
   ```

   ```json
   {
     "title": "Querystring Schema",
     "type": "object",
     "properties": {
       "username": { "type": "string" },
       "password": { "type": "string" }
     },
     "additionalProperties": false,
     "required": ["username", "password"]
   }
   ```

4. Add a `compile-schemas` script to the package.json:

```json
   {
     "scripts": {
       "compile-schemas": "json2ts -i schemas -o types"
     }
   }
```

   `json2ts` is a CLI utility included in `json-schema-to-typescript`. `schemas`
   is the input path, and `types` is the output path.
5. Run `npm run compile-schemas`. Two new files should have been created in the
   `types` directory.
6. Update `index.ts` to have the following code:

```typescript
   import fastify from 'fastify'

   // import json schemas as normal
   import QuerystringSchema from './schemas/querystring.json'
   import HeadersSchema from './schemas/headers.json'

   // import the generated interfaces
   import { QuerystringSchema as QuerystringSchemaInterface } from './types/querystring'
   import { HeadersSchema as HeadersSchemaInterface } from './types/headers'

   const server = fastify()

   server.get<{
     Querystring: QuerystringSchemaInterface,
     Headers: HeadersSchemaInterface
   }>('/auth', {
     schema: {
       querystring: QuerystringSchema,
       headers: HeadersSchema
     },
     preValidation: (request, reply, done) => {
       const { username, password } = request.query
       done(username !== 'admin' ? new Error('Must be admin') : undefined)
     }
     //  or if using async
     //  preValidation: async (request, reply) => {
     //    const { username, password } = request.query
     //    if (username !== "admin") throw new Error("Must be admin");
     //  }
   }, async (request, reply) => {
     const customerHeader = request.headers['h-Custom']
     // do something with request data
     return `logged in!`
   })

   server.route<{
     Querystring: QuerystringSchemaInterface,
     Headers: HeadersSchemaInterface
   }>({
     method: 'GET',
     url: '/auth2',
     schema: {
       querystring: QuerystringSchema,
       headers: HeadersSchema
     },
     preHandler: (request, reply, done) => {
       const { username, password } = request.query
       const customerHeader = request.headers['h-Custom']
       done()
     },
     handler: (request, reply) => {
       const { username, password } = request.query
       const customerHeader = request.headers['h-Custom']
       reply.status(200).send({username});
     }
   })

   server.listen({ port: 8080 }, (err, address) => {
     if (err) {
       console.error(err)
       process.exit(0)
     }
     console.log(`Server listening at ${address}`)
   })
   ```
   Pay special attention to the imports at the top of this file. It might seem
   redundant, but you need to import both the schema files and the generated
   interfaces.

Great work! Now you can make use of both JSON Schemas and TypeScript
definitions.

#### json-schema-to-ts

If you do not want to generate types from your schemas, but want to use them
directly from your code, you can use the package
[json-schema-to-ts](https://www.npmjs.com/package/json-schema-to-ts).

You can install it as dev-dependency.

```bash
npm i -D json-schema-to-ts
```

In your code you can define your schema like a normal object. But be aware of
making it *const* like explained in the docs of the module.

```typescript
const todo = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    description: { type: 'string' },
    done: { type: 'boolean' },
  },
  required: ['name'],
} as const; // don't forget to use const !
```

With the provided type `FromSchema` you can build a type from your schema and
use it in your handler.

```typescript
import { FromSchema } from "json-schema-to-ts";
fastify.post<{ Body: FromSchema<typeof todo> }>(
  '/todo',
  {
    schema: {
      body: todo,
      response: {
        201: {
          type: 'string',
        },
      },
    }
  },
  async (request, reply): Promise<void> => {

    /*
    request.body has type
    {
      [x: string]: unknown;
      description?: string;
      done?: boolean;
      name: string;
    }
    */

    request.body.name // will not throw type error
    request.body.notthere // will throw type error

    reply.status(201).send();
  },
);
```

### Plugins

One of Fastify's most distinguishable features is its extensive plugin
ecosystem. Plugin types are fully supported, and take advantage of the
[declaration
merging](https://www.typescriptlang.org/docs/handbook/declaration-merging.html)
pattern. This example is broken up into three parts: Creating a TypeScript
Fastify Plugin, Creating Type Definitions for a Fastify Plugin, and Using a
Fastify Plugin in a TypeScript Project.

#### Creating a TypeScript Fastify Plugin

1. Initialize a new npm project and install required dependencies
   ```bash
   npm init -y
   npm i fastify fastify-plugin
   npm i -D typescript @types/node
   ```
2. Add a `build` script to the `"scripts"` section and `'index.d.ts'` to the
   `"types"` section of the `package.json` file:
   ```json
   {
     "types": "index.d.ts",
     "scripts": {
       "build": "tsc -p tsconfig.json"
     }
   }
   ```
3. Initialize a TypeScript configuration file:
   ```bash
   npx typescript --init
   ```
   Once the file is generated, enable the `"declaration"` option in the
   `"compilerOptions"` object.
   ```json
   {
     "compilerOptions": {
       "declaration": true
     }
   }
   ```
4. Create an `index.ts` file - this will contain the plugin code
5. Add the following code to `index.ts`
   ```typescript
   import { FastifyPluginCallback, FastifyPluginAsync } from 'fastify'
   import fp from 'fastify-plugin'

   // using declaration merging, add your plugin props to the appropriate fastify interfaces
   // if prop type is defined here, the value will be typechecked when you call decorate{,Request,Reply}
   declare module 'fastify' {
     interface FastifyRequest {
       myPluginProp: string
     }
     interface FastifyReply {
       myPluginProp: number
     }
   }

   // define options
   export interface MyPluginOptions {
     myPluginOption: string
   }

   // define plugin using callbacks
   const myPluginCallback: FastifyPluginCallback<MyPluginOptions> = (fastify, options, done) => {
     fastify.decorateRequest('myPluginProp', 'super_secret_value')
     fastify.decorateReply('myPluginProp', options.myPluginOption)

     done()
   }

   // define plugin using promises
   const myPluginAsync: FastifyPluginAsync<MyPluginOptions> = async (fastify, options) => {
     fastify.decorateRequest('myPluginProp', 'super_secret_value')
     fastify.decorateReply('myPluginProp', options.myPluginOption)
   }

   // export plugin using fastify-plugin
   export default fp(myPluginCallback, '3.x')
   // or
   // export default fp(myPluginAsync, '3.x')
   ```
6. Run `npm run build` to compile the plugin code and produce both a JavaScript
   source file and a type definition file.
7. With the plugin now complete you can [publish to npm] or use it locally.
   > You do not _need_ to publish your plugin to npm to use it. You can include
   > it in a Fastify project and reference it as you would any piece of code! As
   > a TypeScript user, make sure the declaration override exists somewhere that
   > will be included in your project compilation so the TypeScript interpreter
   > can process it.

#### Creating Type Definitions for a Fastify Plugin

This plugin guide is for Fastify plugins written in JavaScript. The steps
outlined in this example are for adding TypeScript support for users consuming
your plugin.

1. Initialize a new npm project and install required dependencies
   ```bash
   npm init -y
   npm i fastify-plugin
   ```
2. Create two files `index.js` and `index.d.ts`
3. Modify the package json to include these files under the `main` and `types`
   properties (the name does not have to be `index` explicitly, but it is
   recommended the files have the same name):
   ```json
   {
     "main": "index.js",
     "types": "index.d.ts"
   }
   ```
4. Open `index.js` and add the following code:
   ```javascript
   // fastify-plugin is highly recommended for any plugin you write
   const fp = require('fastify-plugin')

   function myPlugin (instance, options, done) {

     // decorate the fastify instance with a custom function called myPluginFunc
     instance.decorate('myPluginFunc', (input) => {
       return input.toUpperCase()
     })

     done()
   }

   module.exports = fp(myPlugin, {
     fastify: '5.x',
     name: 'my-plugin' // this is used by fastify-plugin to derive the property name
   })
   ```
5. Open `index.d.ts` and add the following code:
   ```typescript
   import { FastifyPluginCallback } from 'fastify'

   interface PluginOptions {
     //...
   }

   // Optionally, you can add any additional exports.
   // Here we are exporting the decorator we added.
   export interface myPluginFunc {
     (input: string): string
   }

   // Most importantly, use declaration merging to add the custom property to the Fastify type system
   declare module 'fastify' {
     interface FastifyInstance {
       myPluginFunc: myPluginFunc
     }
   }

   // fastify-plugin automatically adds named export, so be sure to add also this type
   // the variable name is derived from `options.name` property if `module.exports.myPlugin` is missing
   export const myPlugin: FastifyPluginCallback<PluginOptions>

   // fastify-plugin automatically adds `.default` property to the exported plugin. See the note below
   export default myPlugin
   ```

__Note__: [fastify-plugin](https://github.com/fastify/fastify-plugin) v2.3.0 and
newer, automatically adds `.default` property and a named export to the exported
plugin. Be sure to `export default` and `export const myPlugin` in your typings
to provide the best developer experience. For a complete example you can check
out
[@fastify/swagger](https://github.com/fastify/fastify-swagger/blob/main/index.d.ts).

With those files completed, the plugin is now ready to be consumed by any
TypeScript project!

The Fastify plugin system enables developers to decorate the Fastify instance,
and the request/reply instances. For more information check out this blog post
on [Declaration Merging and Generic
Inheritance](https://dev.to/ethanarrowood/is-declaration-merging-and-generic-inheritance-at-the-same-time-impossible-53cp).

#### Using a Plugin

Using a Fastify plugin in TypeScript is just as easy as using one in JavaScript.
Import the plugin with `import/from` and you're all set -- except there is one
exception users should be aware of.

Fastify plugins use declaration merging to modify existing Fastify type
interfaces (check out the previous two examples for more details). Declaration
merging is not very _smart_, meaning if the plugin type definition for a plugin
is within the scope of the TypeScript interpreter, then the plugin types will be
included **regardless** of if the plugin is being used or not. This is an
unfortunate limitation of using TypeScript and is unavoidable as of right now.

However, there are a couple of suggestions to help improve this experience:
- Make sure the `no-unused-vars` rule is enabled in
  [ESLint](https://eslint.org/docs/rules/no-unused-vars) and any imported plugin
  are actually being loaded.
- Use a module such as [depcheck](https://www.npmjs.com/package/depcheck) or
  [npm-check](https://www.npmjs.com/package/npm-check) to verify plugin
  dependencies are being used somewhere in your project.

Note that using `require` will not load the type definitions properly and may
cause type errors.
TypeScript can only identify the types that are directly imported into code,
which means that you can use require inline with import on top. For example:

```typescript
import 'plugin' // here will trigger the type augmentation.

fastify.register(require('plugin'))
```

```typescript
import plugin from 'plugin' //  here will trigger the type augmentation.

fastify.register(plugin)
```

Or even explicit config on tsconfig
```jsonc
{
  "types": ["plugin"] // we force TypeScript to import the types
}
```

#### `getDecorator<T>`

Fastify's `getDecorator<T>` method retrieves decorators with enhanced type safety.

The `getDecorator<T>` method supports generic type parameters for enhanced type
safety:

```typescript
// Type-safe decorator retrieval
const usersRepository = fastify.getDecorator<IUsersRepository>('usersRepository')
const session = request.getDecorator<ISession>('session')
const sendSuccess = reply.getDecorator<SendSuccessFn>('sendSuccess')
```

**Alternative to Module Augmentation**

Decorators are typically typed via module augmentation:

```typescript
declare module 'fastify' {
  interface FastifyInstance {
    usersRepository: IUsersRepository
  }
  interface FastifyRequest {
    session: ISession
  }
  interface FastifyReply {
    sendSuccess: SendSuccessFn
  }
}
```

This approach modifies the Fastify instance globally, which may lead to conflicts
and inconsistent behavior in multi-server setups or with plugin encapsulation.

Using `getDecorator<T>` allows limiting types scope:

```typescript
serverOne.register(async function (fastify) {
  const usersRepository = fastify.getDecorator<PostgreUsersRepository>(
    'usersRepository'
  )

  fastify.decorateRequest('session', null)
  fastify.addHook('onRequest', async (req, reply) => {
    req.setDecorator('session', { user: 'Jean' })
  })

  fastify.get('/me', (request, reply) => {
    const session = request.getDecorator<ISession>('session')
    reply.send(session)
  })
})

serverTwo.register(async function (fastify) {
  const usersRepository = fastify.getDecorator<SqlLiteUsersRepository>(
    'usersRepository'
  )

  fastify.decorateReply('sendSuccess', function (data) {
    return this.send({ success: true })
  })

  fastify.get('/success', async (request, reply) => {
    const sendSuccess = reply.getDecorator<SendSuccessFn>('sendSuccess')
    await sendSuccess()
  })
})
```

**Bound Functions Inference**

To save time, it is common to infer function types instead of writing them manually:

```typescript
function sendSuccess (this: FastifyReply) {
  return this.send({ success: true })
}

export type SendSuccess = typeof sendSuccess
```

However, `getDecorator` returns functions with the `this` context already **bound**,
meaning the `this` parameter disappears from the function signature.

To correctly type it, use the `OmitThisParameter` utility:

```typescript
function sendSuccess (this: FastifyReply) {
  return this.send({ success: true })
}

type BoundSendSuccess = OmitThisParameter<typeof sendSuccess>

fastify.decorateReply('sendSuccess', sendSuccess)
fastify.get('/success', async (request, reply) => {
  const sendSuccess = reply.getDecorator<BoundSendSuccess>('sendSuccess')
  await sendSuccess()
})
```

#### `setDecorator<T>`

Fastify's `setDecorator<T>` method provides enhanced type safety for updating request
decorators.

The `setDecorator<T>` method provides enhanced type safety for updating request
decorators:

```typescript
fastify.decorateRequest('user', '')
fastify.addHook('preHandler', async (req, reply) => {
  // Type-safe decorator setting
  req.setDecorator<string>('user', 'Bob Dylan')
})
```

**Type Safety Benefits**

If the `FastifyRequest` interface does not declare the decorator, type assertions
are typically needed:

```typescript
fastify.addHook('preHandler', async (req, reply) => {
  (req as typeof req & { user: string }).user = 'Bob Dylan'
})
```

The `setDecorator<T>` method eliminates the need for explicit type assertions
while providing type safety:

```typescript
fastify.addHook('preHandler', async (req, reply) => {
  req.setDecorator<string>('user', 'Bob Dylan')
})
```

## Code Completion In Vanilla JavaScript

Vanilla JavaScript can use the published types to provide code completion (e.g.
[Intellisense](https://code.visualstudio.com/docs/editor/intellisense)) by
following the [TypeScript JSDoc
Reference](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html).

For example:

```js
/**  @type {import('fastify').FastifyPluginAsync<{ optionA: boolean, optionB: string }>} */
module.exports = async function (fastify, { optionA, optionB }) {
  fastify.get('/look', () => 'at me');
}
```

## API Type System Documentation

This section is a detailed account of all the types available to you in Fastify
version 3.x

All `http`, `https`, and `http2` types are inferred from `@types/node`

[Generics](#generics) are documented by their default value as well as their
constraint value(s). Read these articles for more information on TypeScript
generics.
- [Generic Parameter
  Default](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-3.html#generic-parameter-defaults)
- [Generic Constraints](https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints)


#### How to import

The Fastify API is powered by the `fastify()` method. In JavaScript you would
import it using `const fastify = require('fastify')`. In TypeScript it is
recommended to use the `import/from` syntax instead so types can be resolved.
There are a couple supported import methods with the Fastify type system.

1. `import fastify from 'fastify'`
   - Types are resolved but not accessible using dot notation
   - Example:
     ```typescript
     import fastify from 'fastify'

     const f = fastify()
     f.listen({ port: 8080 }, () => { console.log('running') })
     ```
   - Gain access to types with destructuring:
     ```typescript
     import fastify, { FastifyInstance } from 'fastify'

     const f: FastifyInstance = fastify()
     f.listen({ port: 8080 }, () => { console.log('running') })
     ```
   - Destructuring also works for the main API method:
     ```typescript
     import { fastify, FastifyInstance } from 'fastify'

     const f: FastifyInstance = fastify()
     f.listen({ port: 8080 }, () => { console.log('running') })
     ```
2. `import * as Fastify from 'fastify'`
   - Types are resolved and accessible using dot notation
   - Calling the main Fastify API method requires a slightly different syntax
     (see example)
   - Example:
     ```typescript
     import * as Fastify from 'fastify'

     const f: Fastify.FastifyInstance = Fastify.fastify()
     f.listen({ port: 8080 }, () => { console.log('running') })
     ```
3. `const fastify = require('fastify')`
   - This syntax is valid and will import fastify as expected; however, types
     will **not** be resolved
   - Example:
     ```typescript
     const fastify = require('fastify')

     const f = fastify()
     f.listen({ port: 8080 }, () => { console.log('running') })
     ```
   - Destructuring is supported and will resolve types properly
     ```typescript
     const { fastify } = require('fastify')

     const f = fastify()
     f.listen({ port: 8080 }, () => { console.log('running') })
     ```

#### Generics

Many type definitions share the same generic parameters; they are all
documented, in detail, within this section.

Most definitions depend on `@types/node` modules `http`, `https`, and `http2`

##### RawServer
Underlying Node.js server type

Default: `http.Server`

Constraints: `http.Server`, `https.Server`, `http2.Http2Server`,
`http2.Http2SecureServer`

Enforces generic parameters: [`RawRequest`][RawRequestGeneric],
[`RawReply`][RawReplyGeneric]

##### RawRequest
Underlying Node.js request type

Default: [`RawRequestDefaultExpression`][RawRequestDefaultExpression]

Constraints: `http.IncomingMessage`, `http2.Http2ServerRequest`

Enforced by: [`RawServer`][RawServerGeneric]

##### RawReply
Underlying Node.js response type

Default: [`RawReplyDefaultExpression`][RawReplyDefaultExpression]

Constraints: `http.ServerResponse`, `http2.Http2ServerResponse`

Enforced by: [`RawServer`][RawServerGeneric]

##### Logger
Fastify logging utility

Default: [`FastifyLoggerOptions`][FastifyLoggerOptions]

Enforced by: [`RawServer`][RawServerGeneric]

##### RawBody
A generic parameter for the content-type-parser methods.

Constraints: `string | Buffer`

---

#### Fastify

##### fastify< [RawRequest][RawRequestGeneric], [RawReply][RawReplyGeneric], [Logger][LoggerGeneric]>(opts?: [FastifyServerOptions][FastifyServerOptions]): [FastifyInstance][FastifyInstance]
[src](https://github.com/fastify/fastify/blob/main/fastify.d.ts#L19)

The main Fastify API method. By default creates an HTTP server. Utilizing
discriminant unions and overload methods, the type system will automatically
infer which type of server (http, https, or http2) is being created purely based
on the options based to the method (see the examples below for more
information). It also supports an extensive generic type system to allow the
user to extend the underlying Node.js Server, Request, and Reply objects.
Additionally, the `Logger` generic exists for custom log types. See the examples
and generic breakdown below for more information.

###### Example 1: Standard HTTP server

No need to specify the `Server` generic as the type system defaults to HTTP.
```typescript
import fastify from 'fastify'

const server = fastify()
```
Check out the Learn By Example - [Getting Started](#getting-started) example for
a more detailed http server walkthrough.

###### Example 2: HTTPS server

1. Create the following imports from `@types/node` and `fastify`
   ```typescript
   import fs from 'node:fs'
   import path from 'node:path'
   import fastify from 'fastify'
   ```
2. Perform the following steps before setting up a Fastify HTTPS server
to create the `key.pem` and `cert.pem` files:
```sh
openssl genrsa -out key.pem
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
rm csr.pem
```
3. Instantiate a Fastify https server and add a route:
   ```typescript
   const server = fastify({
     https: {
       key: fs.readFileSync(path.join(__dirname, 'key.pem')),
       cert: fs.readFileSync(path.join(__dirname, 'cert.pem'))
     }
   })

   server.get('/', async function (request, reply) {
     return { hello: 'world' }
   })

   server.listen({ port: 8080 }, (err, address) => {
     if (err) {
       console.error(err)
       process.exit(0)
     }
     console.log(`Server listening at ${address}`)
   })
   ```
4. Build and run! Test your server out by querying with: `curl -k
   https://localhost:8080`

###### Example 3: HTTP2 server

There are two types of HTTP2 server types, insecure and secure. Both require
specifying the `http2` property as `true` in the `options` object. The `https`
property is used for creating a secure http2 server; omitting the `https`
property will create an insecure http2 server.

```typescript
const insecureServer = fastify({ http2: true })
const secureServer = fastify({
  http2: true,
  https: {} // use the `key.pem` and `cert.pem` files from the https section
})
```

For more details on using HTTP2 check out the Fastify [HTTP2](./HTTP2.md)
documentation page.

###### Example 4: Extended HTTP server

Not only can you specify the server type, but also the request and reply types.
Thus, allowing you to specify special properties, methods, and more! When
specified at server instantiation, the custom type becomes available on all
further instances of the custom type.
```typescript
import fastify from 'fastify'
import http from 'node:http'

interface customRequest extends http.IncomingMessage {
  mySpecialProp: string
}

const server = fastify<http.Server, customRequest>()

server.get('/', async (request, reply) => {
  const someValue = request.raw.mySpecialProp // TS knows this is a string, because of the `customRequest` interface
  return someValue.toUpperCase()
})
```

###### Example 5: Specifying logger types

Fastify uses [Pino](https://getpino.io/#/) logging library under the hood. Since
`pino@7`, all of it's properties can be configured via `logger` field when
constructing Fastify's instance. If properties you need aren't exposed, please
open an Issue to [`Pino`](https://github.com/pinojs/pino/issues) or pass a
preconfigured external instance of Pino (or any other compatible logger) as
temporary fix to Fastify via the same field. This allows creating custom
serializers as well, see the [Logging](Logging.md) documentation for more info.

```typescript
import fastify from 'fastify'

const server = fastify({
  logger: {
    level: 'info',
    redact: ['x-userinfo'],
    messageKey: 'message'
  }
})

server.get('/', async (request, reply) => {
  server.log.info('log message')
  return 'another message'
})
```

---

##### fastify.HTTPMethods
[src](https://github.com/fastify/fastify/blob/main/types/utils.d.ts#L8)

Union type of: `'DELETE' | 'GET' | 'HEAD' | 'PATCH' | 'POST' | 'PUT' |
'OPTIONS'`

##### fastify.RawServerBase
[src](https://github.com/fastify/fastify/blob/main/types/utils.d.ts#L13)

Dependent on `@types/node` modules `http`, `https`, `http2`

Union type of: `http.Server | https.Server | http2.Http2Server |
http2.Http2SecureServer`

##### fastify.RawServerDefault
[src](https://github.com/fastify/fastify/blob/main/types/utils.d.ts#L18)

Dependent on `@types/node` modules `http`

Type alias for `http.Server`

---

##### fastify.FastifyServerOptions< [RawServer][RawServerGeneric], [Logger][LoggerGeneric]>

[src](https://github.com/fastify/fastify/blob/main/fastify.d.ts#L29)

An interface of properties used in the instantiation of the Fastify server. Is
used in the main [`fastify()`][Fastify] method. The `RawServer` and `Logger`
generic parameters are passed down through that method.

See the main [fastify][Fastify] method type definition section for examples on
instantiating a Fastify server with TypeScript.

##### fastify.FastifyInstance< [RawServer][RawServerGeneric], [RawRequest][RawRequestGeneric], [RequestGeneric][FastifyRequestGenericInterface], [Logger][LoggerGeneric]>

[src](https://github.com/fastify/fastify/blob/main/types/instance.d.ts#L16)

Interface that represents the Fastify server object. This is the returned server
instance from the [`fastify()`][Fastify] method. This type is an interface so it
can be extended via [declaration
merging](https://www.typescriptlang.org/docs/handbook/declaration-merging.html)
if your code makes use of the `decorate` method.

Through the use of generic cascading, all methods attached to the instance
inherit the generic properties from instantiation. This means that by specifying
the server, request, or reply types, all methods will know how to type those
objects.

Check out the main [Learn by Example](#learn-by-example) section for detailed
guides, or the more simplified [fastify][Fastify] method examples for additional
details on this interface.

---

#### Request

##### fastify.FastifyRequest< [RequestGeneric][FastifyRequestGenericInterface], [RawServer][RawServerGeneric], [RawRequest][RawRequestGeneric]>
[src](https://github.com/fastify/fastify/blob/main/types/request.d.ts#L15)

This interface contains properties of Fastify request object. The properties
added here disregard what kind of request object (http vs http2) and disregard
what route level it is serving; thus calling `request.body` inside a GET request
will not throw an error (but good luck sending a GET request with a body 😉).

If you need to add custom properties to the `FastifyRequest` object (such as
when using the [`decorateRequest`][DecorateRequest] method) you need to use
declaration merging on this interface.

A basic example is provided in the [`FastifyRequest`][FastifyRequest] section.
For a more detailed example check out the Learn By Example section:
[Plugins](#plugins)

###### Example
```typescript
import fastify from 'fastify'

const server = fastify()

server.decorateRequest('someProp', 'hello!')

server.get('/', async (request, reply) => {
  const { someProp } = request // need to use declaration merging to add this prop to the request interface
  return someProp
})

// this declaration must be in scope of the typescript interpreter to work
declare module 'fastify' {
  interface FastifyRequest { // you must reference the interface and not the type
    someProp: string
  }
}

// Or you can type your request using
type CustomRequest = FastifyRequest<{
  Body: { test: boolean };
}>

server.get('/typedRequest', async (request: CustomRequest, reply: FastifyReply) => {
  return request.body.test
})
```

##### fastify.RequestGenericInterface
[src](https://github.com/fastify/fastify/blob/main/types/request.d.ts#L4)

Fastify request objects have four dynamic properties: `body`, `params`, `query`,
and `headers`. Their respective types are assignable through this interface. It
is a named property interface enabling the developer to ignore the properties
they do not want to specify. All omitted properties are defaulted to `unknown`.
The corresponding property names are: `Body`, `Querystring`, `Params`,
`Headers`.

```typescript
import fastify, { RequestGenericInterface } from 'fastify'

const server = fastify()

interface requestGeneric extends RequestGenericInterface {
  Querystring: {
    name: string
  }
}

server.get<requestGeneric>('/', async (request, reply) => {
  const { name } = request.query // the name prop now exists on the query prop
  return name.toUpperCase()
})
```

If you want to see a detailed example of using this interface check out the
Learn by Example section: [JSON Schema](#json-schema).

##### fastify.RawRequestDefaultExpression\<[RawServer][RawServerGeneric]\>
[src](https://github.com/fastify/fastify/blob/main/types/utils.d.ts#L23)

Dependent on `@types/node` modules `http`, `https`, `http2`

Generic parameter `RawServer` defaults to [`RawServerDefault`][RawServerDefault]

If `RawServer` is of type `http.Server` or `https.Server`, then this expression
returns `http.IncomingMessage`, otherwise, it returns
`http2.Http2ServerRequest`.

```typescript
import http from 'node:http'
import http2 from 'node:http2'
import { RawRequestDefaultExpression } from 'fastify'

RawRequestDefaultExpression<http.Server> // -> http.IncomingMessage
RawRequestDefaultExpression<http2.Http2Server> // -> http2.Http2ServerRequest
```

---

#### Reply

##### fastify.FastifyReply<[RequestGeneric][FastifyRequestGenericInterface], [RawServer][RawServerGeneric], [RawRequest][RawRequestGeneric], [RawReply][RawReplyGeneric], [ContextConfig][ContextConfigGeneric]>
[src](https://github.com/fastify/fastify/blob/main/types/reply.d.ts#L32)

This interface contains the custom properties that Fastify adds to the standard
Node.js reply object. The properties added here disregard what kind of reply
object (http vs http2).

If you need to add custom properties to the FastifyReply object (such as when
using the `decorateReply` method) you need to use declaration merging on this
interface.

A basic example is provided in the [`FastifyReply`][FastifyReply] section. For a
more detailed example check out the Learn By Example section:
[Plugins](#plugins)

###### Example
```typescript
import fastify from 'fastify'

const server = fastify()

server.decorateReply('someProp', 'world')

server.get('/', async (request, reply) => {
  const { someProp } = reply // need to use declaration merging to add this prop to the reply interface
  return someProp
})

// this declaration must be in scope of the typescript interpreter to work
declare module 'fastify' {
  interface FastifyReply { // you must reference the interface and not the type
    someProp: string
  }
}
```

##### fastify.RawReplyDefaultExpression< [RawServer][RawServerGeneric]>
[src](https://github.com/fastify/fastify/blob/main/types/utils.d.ts#L27)

Dependent on `@types/node` modules `http`, `https`, `http2`

Generic parameter `RawServer` defaults to [`RawServerDefault`][RawServerDefault]

If `RawServer` is of type `http.Server` or `https.Server`, then this expression
returns `http.ServerResponse`, otherwise, it returns
`http2.Http2ServerResponse`.

```typescript
import http from 'node:http'
import http2 from 'node:http2'
import { RawReplyDefaultExpression } from 'fastify'

RawReplyDefaultExpression<http.Server> // -> http.ServerResponse
RawReplyDefaultExpression<http2.Http2Server> // -> http2.Http2ServerResponse
```

---

#### Plugin

Fastify allows the user to extend its functionalities with plugins. A plugin can
be a set of routes, a server decorator or whatever. To activate plugins, use the
[`fastify.register()`][FastifyRegister] method.

When creating plugins for Fastify, it is recommended to use the `fastify-plugin`
module. Additionally, there is a guide to creating plugins with TypeScript and
Fastify available in the Learn by Example, [Plugins](#plugins) section.

##### fastify.FastifyPluginCallback< [Options][FastifyPluginOptions]>
[src](https://github.com/fastify/fastify/blob/main/types/plugin.d.ts#L9)

Interface method definition used within the
[`fastify.register()`][FastifyRegister] method.

##### fastify.FastifyPluginAsync< [Options][FastifyPluginOptions]>
[src](https://github.com/fastify/fastify/blob/main/types/plugin.d.ts#L20)

Interface method definition used within the
[`fastify.register()`][FastifyRegister] method.

##### fastify.FastifyPlugin< [Options][FastifyPluginOptions]>
[src](https://github.com/fastify/fastify/blob/main/types/plugin.d.ts#L29)

Interface method definition used within the
[`fastify.register()`][FastifyRegister] method. Document deprecated in favor of
`FastifyPluginCallback` and `FastifyPluginAsync` since general `FastifyPlugin`
doesn't properly infer types for async functions.

##### fastify.FastifyPluginOptions
[src](https://github.com/fastify/fastify/blob/main/types/plugin.d.ts#L31)

A loosely typed object used to constrain the `options` parameter of
[`fastify.register()`][FastifyRegister] to an object. When creating a plugin,
define its options as an extension of this interface (`interface MyPluginOptions
extends FastifyPluginOptions`) so they can be passed to the register method.

---

#### Register

##### fastify.FastifyRegister(plugin: [FastifyPluginCallback][FastifyPluginCallback], opts: [FastifyRegisterOptions][FastifyRegisterOptions])
[src](https://github.com/fastify/fastify/blob/main/types/register.d.ts#L9)
##### fastify.FastifyRegister(plugin: [FastifyPluginAsync][FastifyPluginAsync], opts: [FastifyRegisterOptions][FastifyRegisterOptions])
[src](https://github.com/fastify/fastify/blob/main/types/register.d.ts#L9)
##### fastify.FastifyRegister(plugin: [FastifyPlugin][FastifyPlugin], opts: [FastifyRegisterOptions][FastifyRegisterOptions])
[src](https://github.com/fastify/fastify/blob/main/types/register.d.ts#L9)

This type interface specifies the type for the
[`fastify.register()`](./Server.md#register) method. The type interface returns
a function signature with an underlying generic `Options` which is defaulted to
[FastifyPluginOptions][FastifyPluginOptions]. It infers this generic from the
FastifyPlugin parameter when calling this function so there is no need to
specify the underlying generic. The options parameter is the intersection of the
plugin's options and two additional optional properties: `prefix: string` and
`logLevel`: [LogLevel][LogLevel]. `FastifyPlugin` is deprecated use
`FastifyPluginCallback` and `FastifyPluginAsync` instead.

Below is an example of the options inference in action:

```typescript
const server = fastify()

const plugin: FastifyPluginCallback<{
  option1: string;
  option2: boolean;
}> = function (instance, opts, done) { }

server().register(plugin, {}) // Error - options object is missing required properties
server().register(plugin, { option1: '', option2: true }) // OK - options object contains required properties
```

See the Learn By Example, [Plugins](#plugins) section for more detailed examples
of creating TypeScript plugins in Fastify.

##### fastify.FastifyRegisterOptions
[src](https://github.com/fastify/fastify/blob/main/types/register.d.ts#L16)

This type is the intersection of the `Options` generic and a non-exported
interface `RegisterOptions` that specifies two optional properties: `prefix:
string` and `logLevel`: [LogLevel][LogLevel]. This type can also be specified as
a function that returns the previously described intersection.

---

#### Logger

Check out the [Specifying Logger Types](#example-5-specifying-logger-types)
example for more details on specifying a custom logger.

##### fastify.FastifyLoggerOptions< [RawServer][RawServerGeneric], [RawRequest][RawRequestGeneric], [RawReply][RawReplyGeneric]>

[src](https://github.com/fastify/fastify/blob/main/types/logger.d.ts#L17)

An interface definition for the internal Fastify logger. It is emulative of the
[Pino.js](https://getpino.io/#/) logger. When enabled through server options,
use it following the general [logger](./Logging.md) documentation.

##### fastify.FastifyLogFn

[src](https://github.com/fastify/fastify/blob/main/types/logger.d.ts#L7)

An overload function interface that implements the two ways Fastify calls log
methods. This interface is passed to all associated log level properties on the
FastifyLoggerOptions object.

##### fastify.LogLevel

[src](https://github.com/fastify/fastify/blob/main/types/logger.d.ts#L12)

Union type of: `'info' | 'error' | 'debug' | 'fatal' | 'warn' | 'trace'`

---

#### Context

The context type definition is similar to the other highly dynamic pieces of the
type system. Route context is available in the route handler method.

##### fastify.FastifyRequestContext

[src](https://github.com/fastify/fastify/blob/main/types/context.d.ts#L11)

An interface with a single required property `config` that is set by default to
`unknown`. Can be specified either using a generic or an overload.

This type definition is potentially incomplete. If you are using it and can
provide more details on how to improve the definition, we strongly encourage you
to open an issue in the main
[fastify/fastify](https://github.com/fastify/fastify) repository. Thank you in
advanced!

##### fastify.FastifyReplyContext

[src](https://github.com/fastify/fastify/blob/main/types/context.d.ts#L11)

An interface with a single required property `config` that is set by default to
`unknown`. Can be specified either using a generic or an overload.

This type definition is potentially incomplete. If you are using it and can
provide more details on how to improve the definition, we strongly encourage you
to open an issue in the main
[fastify/fastify](https://github.com/fastify/fastify) repository. Thank you in
advanced!

---

#### Routing

One of the core principles in Fastify is its routing capabilities. Most of the
types defined in this section are used under-the-hood by the Fastify instance
`.route` and `.get/.post/.etc` methods.

##### fastify.RouteHandlerMethod< [RawServer][RawServerGeneric], [RawRequest][RawRequestGeneric], [RawReply][RawReplyGeneric], [RequestGeneric][FastifyRequestGenericInterface], [ContextConfig][ContextConfigGeneric]>

[src](https://github.com/fastify/fastify/blob/main/types/route.d.ts#L105)

A type declaration for the route handler methods. Has two arguments, `request`
and `reply` which are typed by `FastifyRequest` and `FastifyReply` respectively.
The generics parameters are passed through to these arguments. The method
returns either `void` or `Promise<any>` for synchronous and asynchronous
handlers respectively.

##### fastify.RouteOptions< [RawServer][RawServerGeneric], [RawRequest][RawRequestGeneric], [RawReply][RawReplyGeneric], [RequestGeneric][FastifyRequestGenericInterface], [ContextConfig][ContextConfigGeneric]>

[src](https://github.com/fastify/fastify/blob/main/types/route.d.ts#L78)

An interface that extends RouteShorthandOptions and adds the following three
required properties:
1. `method` which corresponds to a singular [HTTPMethod][HTTPMethods] or a list
   of [HTTPMethods][HTTPMethods]
2. `url` a string for the route
3. `handler` the route handler method, see [RouteHandlerMethod][] for more
   details

##### fastify.RouteShorthandMethod< [RawServer][RawServerGeneric], [RawRequest][RawRequestGeneric], [RawReply][RawReplyGeneric]>

[src](https://github.com/fastify/fastify/blob/main/types/route.d.ts#12)

An overloaded function interface for three kinds of shorthand route methods to
be used in conjunction with the `.get/.post/.etc` methods.

##### fastify.RouteShorthandOptions< [RawServer][RawServerGeneric], [RawRequest][RawRequestGeneric], [RawReply][RawReplyGeneric], [RequestGeneric][FastifyRequestGenericInterface], [ContextConfig][ContextConfigGeneric]>

[src](https://github.com/fastify/fastify/blob/main/types/route.d.ts#55)

An interface that covers all of the base options for a route. Each property on
this interface is optional, and it serves as the base for the RouteOptions and
RouteShorthandOptionsWithHandler interfaces.

##### fastify.RouteShorthandOptionsWithHandler< [RawServer][RawServerGeneric], [RawRequest][RawRequestGeneric], [RawReply][RawReplyGeneric], [RequestGeneric][FastifyRequestGenericInterface], [ContextConfig][ContextConfigGeneric]>

[src](https://github.com/fastify/fastify/blob/main/types/route.d.ts#93)

This interface adds a single, required property to the RouteShorthandOptions
interface `handler` which is of type RouteHandlerMethod

---

#### Parsers

##### RawBody

A generic type that is either a `string` or `Buffer`

##### fastify.FastifyBodyParser< [RawBody][RawBodyGeneric], [RawServer][RawServerGeneric], [RawRequest][RawRequestGeneric]>

[src](https://github.com/fastify/fastify/blob/main/types/content-type-parser.d.ts#L7)

A function type definition for specifying a body parser method. Use the
`RawBody` generic to specify the type of the body being parsed.

##### fastify.FastifyContentTypeParser< [RawServer][RawServerGeneric], [RawRequest][RawRequestGeneric]>

[src](https://github.com/fastify/fastify/blob/main/types/content-type-parser.d.ts#L17)

A function type definition for specifying a body parser method. Content is typed
via the `RawRequest` generic.

##### fastify.AddContentTypeParser< [RawServer][RawServerGeneric], [RawRequest][RawRequestGeneric]>

[src](https://github.com/fastify/fastify/blob/main/types/content-type-parser.d.ts#L46)

An overloaded interface function definition for the `addContentTypeParser`
method. If `parseAs` is passed to the `opts` parameter, the definition uses
[FastifyBodyParser][] for the `parser` parameter; otherwise, it uses
[FastifyContentTypeParser][].

##### fastify.hasContentTypeParser

[src](https://github.com/fastify/fastify/blob/main/types/content-type-parser.d.ts#L63)

A method for checking the existence of a type parser of a certain content type

---

#### Errors

##### fastify.FastifyError

[src](https://github.com/fastify/fastify/blob/main/fastify.d.ts#L179)

FastifyError is a custom error object that includes status code and validation
results.

It extends the Node.js `Error` type, and adds two additional, optional
properties: `statusCode: number` and `validation: ValidationResult[]`.

##### fastify.ValidationResult

[src](https://github.com/fastify/fastify/blob/main/fastify.d.ts#L184)

The route validation internally relies upon Ajv, which is a high-performance
JSON schema validator.

This interface is passed to instance of FastifyError.

---

#### Hooks

##### fastify.onRequestHookHandler< [RawServer][RawServerGeneric], [RawRequest][RawRequestGeneric], [RawReply][RawReplyGeneric], [RequestGeneric][FastifyRequestGenericInterface], [ContextConfig][ContextConfigGeneric]>(request: [FastifyRequest][FastifyRequest], reply: [FastifyReply][FastifyReply], done: (err?: [FastifyError][FastifyError]) => void): Promise\<unknown\> | void

[src](https://github.com/fastify/fastify/blob/main/types/hooks.d.ts#L17)

`onRequest` is the first hook to be executed in the request lifecycle. There was
no previous hook, the next hook will be `preParsing`.

Notice: in the `onRequest` hook, request.body will always be null, because the
body parsing happens before the `preHandler` hook.

##### fastify.preParsingHookHandler< [RawServer][RawServerGeneric], [RawRequest][RawRequestGeneric], [RawReply][RawReplyGeneric], [RequestGeneric][FastifyRequestGenericInterface], [ContextConfig][ContextConfigGeneric]>(request: [FastifyRequest][FastifyRequest], reply: [FastifyReply][FastifyReply], done: (err?: [FastifyError][FastifyError]) => void): Promise\<unknown\> | void

[src](https://github.com/fastify/fastify/blob/main/types/hooks.d.ts#L35)

`preParsing` is the second hook to be executed in the request lifecycle. The
previous hook was `onRequest`, the next hook will be `preValidation`.

Notice: in the `preParsing` hook, request.body will always be null, because the
body parsing happens before the `preValidation` hook.

Notice: you should also add `receivedEncodedLength` property to the returned
stream. This property is used to correctly match the request payload with the
`Content-Length` header value. Ideally, this property should be updated on each
received chunk.

##### fastify.preValidationHookHandler< [RawServer][RawServerGeneric], [RawRequest][RawRequestGeneric], [RawReply][RawReplyGeneric], [RequestGeneric][FastifyRequestGenericInterface], [ContextConfig][ContextConfigGeneric]>(request: [FastifyRequest][FastifyRequest], reply: [FastifyReply][FastifyReply], done: (err?: [FastifyError][FastifyError]) => void): Promise\<unknown\> | void

[src](https://github.com/fastify/fastify/blob/main/types/hooks.d.ts#L53)

`preValidation` is the third hook to be executed in the request lifecycle. The
previous hook was `preParsing`, the next hook will be `preHandler`.

##### fastify.preHandlerHookHandler< [RawServer][RawServerGeneric], [RawRequest][RawRequestGeneric], [RawReply][RawReplyGeneric], [RequestGeneric][FastifyRequestGenericInterface], [ContextConfig][ContextConfigGeneric]>(request: [FastifyRequest][FastifyRequest], reply: [FastifyReply][FastifyReply], done: (err?: [FastifyError][FastifyError]) => void): Promise\<unknown\> | void

[src](https://github.com/fastify/fastify/blob/main/types/hooks.d.ts#L70)

`preHandler` is the fourth hook to be executed in the request lifecycle. The
previous hook was `preValidation`, the next hook will be `preSerialization`.

##### fastify.preSerializationHookHandler< PreSerializationPayload, [RawServer][RawServerGeneric], [RawRequest][RawRequestGeneric], [RawReply][RawReplyGeneric], [RequestGeneric][FastifyRequestGenericInterface], [ContextConfig][ContextConfigGeneric]>(request: [FastifyRequest][FastifyRequest], reply: [FastifyReply][FastifyReply], payload: PreSerializationPayload, done: (err: [FastifyError][FastifyError] | null, res?: unknown) => void): Promise\<unknown\> | void

[src](https://github.com/fastify/fastify/blob/main/types/hooks.d.ts#L94)

`preSerialization` is the fifth hook to be executed in the request lifecycle.
The previous hook was `preHandler`, the next hook will be `onSend`.

> ℹ️ Note:
> The hook is NOT called if the payload is a string, a Buffer,
> a stream, or null.

##### fastify.onSendHookHandler< OnSendPayload, [RawServer][RawServerGeneric], [RawRequest][RawRequestGeneric], [RawReply][RawReplyGeneric], [RequestGeneric][FastifyRequestGenericInterface], [ContextConfig][ContextConfigGeneric]>(request: [FastifyRequest][FastifyRequest], reply: [FastifyReply][FastifyReply], payload: OnSendPayload, done: (err: [FastifyError][FastifyError] | null, res?: unknown) => void): Promise\<unknown\> | void

[src](https://github.com/fastify/fastify/blob/main/types/hooks.d.ts#L114)

You can change the payload with the `onSend` hook. It is the sixth hook to be
executed in the request lifecycle. The previous hook was `preSerialization`, the
next hook will be `onResponse`.

> ℹ️ Note:
>  If you change the payload, you may only change it to a string,
> a Buffer, a stream, or null.

##### fastify.onResponseHookHandler< [RawServer][RawServerGeneric], [RawRequest][RawRequestGeneric], [RawReply][RawReplyGeneric], [RequestGeneric][FastifyRequestGenericInterface], [ContextConfig][ContextConfigGeneric]>(request: [FastifyRequest][FastifyRequest], reply: [FastifyReply][FastifyReply], done: (err?: [FastifyError][FastifyError]) => void): Promise\<unknown\> | void

[src](https://github.com/fastify/fastify/blob/main/types/hooks.d.ts#L134)

`onResponse` is the seventh and last hook in the request hook lifecycle. The
previous hook was `onSend`, there is no next hook.

The onResponse hook is executed when a response has been sent, so you will not
be able to send more data to the client. It can however be useful for sending
data to external services, for example to gather statistics.

##### fastify.onErrorHookHandler< [RawServer][RawServerGeneric], [RawRequest][RawRequestGeneric], [RawReply][RawReplyGeneric], [RequestGeneric][FastifyRequestGenericInterface], [ContextConfig][ContextConfigGeneric]>(request: [FastifyRequest][FastifyRequest], reply: [FastifyReply][FastifyReply], error: [FastifyError][FastifyError], done: () => void): Promise\<unknown\> | void

[src](https://github.com/fastify/fastify/blob/main/types/hooks.d.ts#L154)

This hook is useful if you need to do some custom error logging or add some
specific header in case of error.

It is not intended for changing the error, and calling reply.send will throw an
exception.

This hook will be executed before the customErrorHandler.

Notice: unlike the other hooks, pass an error to the done function is not
supported.

##### fastify.onRouteHookHandler< [RawServer][RawServerGeneric], [RawRequest][RawRequestGeneric], [RawReply][RawReplyGeneric], [RequestGeneric][FastifyRequestGenericInterface], [ContextConfig][ContextConfigGeneric]>(opts: [RouteOptions][RouteOptions] & \{ path: string; prefix: string }): Promise\<unknown\> | void

[src](https://github.com/fastify/fastify/blob/main/types/hooks.d.ts#L174)

Triggered when a new route is registered. Listeners are passed a routeOptions
object as the sole parameter. The interface is synchronous, and, as such, the
listener does not get passed a callback

##### fastify.onRegisterHookHandler< [RawServer][RawServerGeneric], [RawRequest][RawRequestGeneric], [RawReply][RawReplyGeneric], [Logger][LoggerGeneric]>(instance: [FastifyInstance][FastifyInstance], done: (err?: [FastifyError][FastifyError]) => void): Promise\<unknown\> | void

[src](https://github.com/fastify/fastify/blob/main/types/hooks.d.ts#L191)

Triggered when a new plugin is registered and a new encapsulation context is
created. The hook will be executed before the registered code.

This hook can be useful if you are developing a plugin that needs to know when a
plugin context is formed, and you want to operate in that specific context.

> ℹ️ Note:
> This hook will not be called if a plugin is wrapped inside fastify-plugin.

##### fastify.onCloseHookHandler< [RawServer][RawServerGeneric], [RawRequest][RawRequestGeneric], [RawReply][RawReplyGeneric], [Logger][LoggerGeneric]>(instance: [FastifyInstance][FastifyInstance], done: (err?: [FastifyError][FastifyError]) => void): Promise\<unknown\> | void

[src](https://github.com/fastify/fastify/blob/main/types/hooks.d.ts#L206)

Triggered when fastify.close() is invoked to stop the server. It is useful when
plugins need a "shutdown" event, for example to close an open connection to a
database.


<!-- Links -->

[Fastify]:
    #fastifyrawserver-rawrequest-rawreply-loggeropts-fastifyserveroptions-fastifyinstance
[RawServerGeneric]: #rawserver
[RawRequestGeneric]: #rawrequest
[RawReplyGeneric]: #rawreply
[LoggerGeneric]: #logger
[RawBodyGeneric]: #rawbody
[HTTPMethods]: #fastifyhttpmethods
[RawServerBase]: #fastifyrawserverbase
[RawServerDefault]: #fastifyrawserverdefault
[FastifyRequest]: #fastifyfastifyrequestrawserver-rawrequest-requestgeneric
[FastifyRequestGenericInterface]: #fastifyrequestgenericinterface
[RawRequestDefaultExpression]: #fastifyrawrequestdefaultexpressionrawserver
[FastifyReply]: #fastifyfastifyreplyrawserver-rawreply-contextconfig
[RawReplyDefaultExpression]: #fastifyrawreplydefaultexpression
[FastifyServerOptions]: #fastifyfastifyserveroptions-rawserver-logger
[FastifyInstance]: #fastifyfastifyinstance
[FastifyLoggerOptions]: #fastifyfastifyloggeroptions
[ContextConfigGeneric]: #ContextConfigGeneric
[FastifyPlugin]:
    #fastifyfastifypluginoptions-rawserver-rawrequest-requestgeneric
[FastifyPluginCallback]: #fastifyfastifyplugincallbackoptions
[FastifyPluginAsync]: #fastifyfastifypluginasyncoptions
[FastifyPluginOptions]: #fastifyfastifypluginoptions
[FastifyRegister]:
    #fastifyfastifyregisterrawserver-rawrequest-requestgenericplugin-fastifyplugin-opts-fastifyregisteroptions
[FastifyRegisterOptions]: #fastifyfastifytregisteroptions
[LogLevel]: #fastifyloglevel
[FastifyError]: #fastifyfastifyerror
[RouteOptions]:
    #fastifyrouteoptionsrawserver-rawrequest-rawreply-requestgeneric-contextconfig
