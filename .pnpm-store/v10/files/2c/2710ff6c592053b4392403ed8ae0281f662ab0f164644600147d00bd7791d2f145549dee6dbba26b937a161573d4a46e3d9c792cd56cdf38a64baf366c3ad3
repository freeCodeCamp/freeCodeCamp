# V4 Migration Guide

This guide is intended to help with migration from Fastify v3 to v4.

Before migrating to v4, please ensure that you have fixed all deprecation
warnings from v3. All v3 deprecations have been removed and they will no longer
work after upgrading.

## Codemods
### Fastify v4 Codemods

To help with the upgrade, we’ve worked with the team at
[Codemod](https://github.com/codemod-com/codemod) to
publish codemods that will automatically update your code to many of
the new APIs and patterns in Fastify v4.


```bash
npx codemod@latest fastify/4/migration-recipe
```
This applies the following codemods:

- fastify/4/remove-app-use
- fastify/4/reply-raw-access
- fastify/4/wrap-routes-plugin
- fastify/4/await-register-calls

For information on the migration recipe, see
https://app.codemod.com/registry/fastify/4/migration-recipe.


## Breaking Changes

### Error handling composition ([#3261](https://github.com/fastify/fastify/pull/3261))

When an error is thrown in an async error handler function, the upper-level
error handler is executed if set. If there is no upper-level error handler,
the default will be executed as it was previously:

```js
import Fastify from 'fastify'

const fastify = Fastify()

fastify.register(async fastify => {
  fastify.setErrorHandler(async err => {
    console.log(err.message) // 'kaboom'
    throw new Error('caught')
  })

  fastify.get('/encapsulated', async () => {
    throw new Error('kaboom')
  })
})

fastify.setErrorHandler(async err => {
  console.log(err.message) // 'caught'
  throw new Error('wrapped')
})

const res = await fastify.inject('/encapsulated')
console.log(res.json().message) // 'wrapped'
```

>The root error handler is Fastify’s generic error handler.
>This error handler will use the headers and status code in the Error object,
>if they exist. **The headers and status code will not be automatically set if
>a custom error handler is provided**.

### Removed `app.use()` ([#3506](https://github.com/fastify/fastify/pull/3506))

With v4 of Fastify, `app.use()` has been removed and the use of middleware is
no longer supported.

If you need to use middleware, use
[`@fastify/middie`](https://github.com/fastify/middie) or
[`@fastify/express`](https://github.com/fastify/fastify-express), which will
continue to be maintained.
However, it is strongly recommended that you migrate to Fastify's [hooks](../Reference/Hooks.md).

> ℹ️ Note:
> Codemod remove `app.use()` with:
> ```bash
> npx codemod@latest fastify/4/remove-app-use
> ```

### `reply.res` moved to `reply.raw`

If you previously used the `reply.res` attribute to access the underlying Request
object you will now need to use `reply.raw`.

> ℹ️ Note:
> Codemod `reply.res` to `reply.raw` with:
> ```bash
> npx codemod@latest fastify/4/reply-raw-access
> ```

### Need to `return reply` to signal a "fork" of the promise chain

In some situations, like when a response is sent asynchronously or when you are
not explicitly returning a response, you will now need to return the `reply`
argument from your router handler.

### `exposeHeadRoutes` true by default

Starting with v4, every `GET` route will create a sibling `HEAD` route.
You can revert this behavior by setting `exposeHeadRoutes: false` in the server
options.

### Synchronous route definitions ([#2954](https://github.com/fastify/fastify/pull/2954))

To improve error reporting in route definitions, route registration is now synchronous.
As a result, if you specify an `onRoute` hook in a plugin you should now either:
* wrap your routes in a plugin (recommended)

  For example, refactor this:
  ```js
  fastify.register((instance, opts, done) => {
    instance.addHook('onRoute', (routeOptions) => {
      const { path, method } = routeOptions;
      console.log({ path, method });
      done();
    });
  });

  fastify.get('/', (request, reply) => { reply.send('hello') });
  ```

  Into this:
  ```js
  fastify.register((instance, opts, done) => {
    instance.addHook('onRoute', (routeOptions) => {
      const { path, method } = routeOptions;
      console.log({ path, method });
      done();
    });
  });

  fastify.register((instance, opts, done) => {
    instance.get('/', (request, reply) => { reply.send('hello') });
    done();
  });
  ```

> ℹ️ Note:
> Codemod synchronous route definitions with:
> ```bash
> npx codemod@latest fastify/4/wrap-routes-plugin
> ```

* use `await register(...)`

  For example, refactor this:
  ```js
  fastify.register((instance, opts, done) => {
    instance.addHook('onRoute', (routeOptions) => {
      const { path, method } = routeOptions;
      console.log({ path, method });
    });
    done();
  });
  ```

  Into this:
  ```js
  await fastify.register((instance, opts, done) => {
    instance.addHook('onRoute', (routeOptions) => {
      const { path, method } = routeOptions;
      console.log({ path, method });
    });
    done();
  });
  ```

> ℹ️ Note:
> Codemod 'await register(...)' with:
> ```bash
> npx codemod@latest fastify/4/await-register-calls
> ```


### Optional URL parameters

If you've already used any implicitly optional parameters, you'll get a 404
error when trying to access the route. You will now need to declare the
optional parameters explicitly.

For example, if you have the same route for listing and showing a post,
refactor this:
```js
fastify.get('/posts/:id', (request, reply) => {
  const { id } = request.params;
});
```

Into this:
```js
fastify.get('/posts/:id?', (request, reply) => {
  const { id } = request.params;
});
```

## Non-Breaking Changes

### Deprecation of variadic `.listen()` signature

The [variadic signature](https://en.wikipedia.org/wiki/Variadic_function) of the
`fastify.listen()` method is now deprecated.

Before this release, the following invocations of this method were valid:

  - `fastify.listen(8000)`
  - `fastify.listen(8000, ‘127.0.0.1’)`
  - `fastify.listen(8000, ‘127.0.0.1’, 511)`
  - `fastify.listen(8000, (err) => { if (err) throw err })`
  - `fastify.listen({ port: 8000 }, (err) => { if (err) throw err })`

With Fastify v4, only the following invocations are valid:

  - `fastify.listen()`
  - `fastify.listen({ port: 8000 })`
  - `fastify.listen({ port: 8000 }, (err) => { if (err) throw err })`

### Change of schema for multiple types

Ajv has been upgraded to v8 in Fastify v4, meaning "type" keywords with multiple
types other than "null"
[are now prohibited](https://ajv.js.org/strict-mode.html#strict-types).

You may encounter a console warning such as:
```sh
strict mode: use allowUnionTypes to allow union type keyword at "#/properties/image" (strictTypes)
```

As such, schemas like below will need to be changed from:
```js
{
  type: 'object',
  properties: {
    api_key: { type: 'string' },
    image: { type: ['object', 'array'] }
  }
}
```

Into:
```js
{
  type: 'object',
  properties: {
    api_key: { type: 'string' },
    image: {
      anyOf: [
        { type: 'array' },
        { type: 'object' }
      ]
    }
  }
}
```

### Add `reply.trailers` methods ([#3794](https://github.com/fastify/fastify/pull/3794))

Fastify now supports the [HTTP Trailer] response headers.


[HTTP Trailer]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Trailer
