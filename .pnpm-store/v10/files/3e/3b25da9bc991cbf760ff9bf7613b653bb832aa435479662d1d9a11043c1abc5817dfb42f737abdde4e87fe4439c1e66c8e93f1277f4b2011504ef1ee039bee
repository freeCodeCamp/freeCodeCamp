<h1 align="center">Fastify</h1>

## Plugins
Fastify can be extended with plugins, which can be a set of routes, a server
[decorator](./Decorators.md), or other functionality. Use the `register` API to
add one or more plugins.

By default, `register` creates a *new scope*, meaning changes to the Fastify
instance (via `decorate`) will not affect the current context ancestors, only
its descendants. This feature enables plugin *encapsulation* and *inheritance*,
creating a *directed acyclic graph* (DAG) and avoiding cross-dependency issues.

The [Getting Started](../Guides/Getting-Started.md#your-first-plugin) guide
includes an example of using this API:
```js
fastify.register(plugin, [options])
```

### Plugin Options
<a id="plugin-options"></a>

The optional `options` parameter for `fastify.register` supports a predefined
set of options that Fastify itself will use, except when the plugin has been
wrapped with [fastify-plugin](https://github.com/fastify/fastify-plugin). This
options object will also be passed to the plugin upon invocation, regardless of
whether or not the plugin has been wrapped. The currently supported list of
Fastify specific options is:

+ [`logLevel`](./Routes.md#custom-log-level)
+ [`logSerializers`](./Routes.md#custom-log-serializer)
+ [`prefix`](#route-prefixing-option)

These options will be ignored when used with fastify-plugin.

To avoid collisions, a plugin should consider namespacing its options. For
example, a plugin `foo` might be registered like so:

```js
fastify.register(require('fastify-foo'), {
  prefix: '/foo',
  foo: {
    fooOption1: 'value',
    fooOption2: 'value'
  }
})
```

If collisions are not a concern, the plugin may accept the options object as-is:

```js
fastify.register(require('fastify-foo'), {
  prefix: '/foo',
  fooOption1: 'value',
  fooOption2: 'value'
})
```

The `options` parameter can also be a `Function` evaluated at plugin registration,
providing access to the Fastify instance via the first argument:

```js
const fp = require('fastify-plugin')

fastify.register(fp((fastify, opts, done) => {
  fastify.decorate('foo_bar', { hello: 'world' })

  done()
}))

// The opts argument of fastify-foo will be { hello: 'world' }
fastify.register(require('fastify-foo'), parent => parent.foo_bar)
```

The Fastify instance passed to the function is the latest state of the **external
Fastify instance** the plugin was declared on, allowing access to variables
injected via [`decorate`](./Decorators.md) by preceding plugins according to the
**order of registration**. This is useful if a plugin depends on changes made to
the Fastify instance by a preceding plugin, such as utilizing an existing database
connection.

Keep in mind that the Fastify instance passed to the function is the same as the
one passed into the plugin, a copy of the external Fastify instance rather than
a reference. Any usage of the instance will behave the same as it would if called
within the plugin's function. For example, if `decorate` is called, the decorated
variables will be available within the plugin's function unless it was wrapped
with [`fastify-plugin`](https://github.com/fastify/fastify-plugin).

#### Route Prefixing option
<a id="route-prefixing-option"></a>

If an option with the key `prefix` and a `string` value is passed, Fastify will
use it to prefix all the routes inside the register. For more info, check
[here](./Routes.md#route-prefixing).

Be aware that if routes are wrapped with
[`fastify-plugin`](https://github.com/fastify/fastify-plugin), this option will
not work (see the [workaround](./Routes.md#fastify-plugin)).

#### Error handling
<a id="error-handling"></a>

Error handling is done by [avvio](https://github.com/mcollina/avvio#error-handling).

As a general rule, handle errors in the next `after` or `ready` block, otherwise
they will be caught inside the `listen` callback.

```js
fastify.register(require('my-plugin'))

// `after` will be executed once
// the previous declared `register` has finished
fastify.after(err => console.log(err))

// `ready` will be executed once all the registers declared
// have finished their execution
fastify.ready(err => console.log(err))

// `listen` is a special ready,
// so it behaves in the same way
fastify.listen({ port: 3000 }, (err, address) => {
  if (err) console.log(err)
})
```

### async/await
<a id="async-await"></a>

*async/await* is supported by `after`, `ready`, and `listen`, as well as
`fastify` being a Thenable.

```js
await fastify.register(require('my-plugin'))

await fastify.after()

await fastify.ready()

await fastify.listen({ port: 3000 })
```
Using `await` when registering a plugin loads the plugin and its dependencies,
"finalizing" the encapsulation process. Any mutations to the plugin after it and
its dependencies have been loaded will not be reflected in the parent instance.

#### ESM support
<a id="esm-support"></a>

ESM is supported from [Node.js `v13.3.0`](https://nodejs.org/api/esm.html)
and above.

```js
// main.mjs
import Fastify from 'fastify'
const fastify = Fastify()

fastify.register(import('./plugin.mjs'))

fastify.listen({ port: 3000 }, console.log)


// plugin.mjs
async function plugin (fastify, opts) {
  fastify.get('/', async (req, reply) => {
    return { hello: 'world' }
  })
}

export default plugin
```

### Create a plugin
<a id="create-plugin"></a>

Creating a plugin is easy. Create a function that takes three parameters: the
`fastify` instance, an `options` object, and the `done` callback. Alternatively,
use an `async` function and omit the `done` callback.

Example:
```js
module.exports = function callbackPlugin (fastify, opts, done) {
  fastify.decorate('utility', function () {})

  fastify.get('/', handler)

  done()
}

// Or using async
module.exports = async function asyncPlugin (fastify, opts) {
  fastify.decorate('utility', function () {})

  fastify.get('/', handler)
}
```

`register` can also be used inside another `register`:
```js
module.exports = function (fastify, opts, done) {
  fastify.decorate('utility', function () {})

  fastify.get('/', handler)

  fastify.register(require('./other-plugin'))

  done()
}
```

Remember, `register` always creates a new Fastify scope. If this is not needed,
read the following section.

### Handle the scope
<a id="handle-scope"></a>

If `register` is used only to extend server functionality with
[`decorate`](./Decorators.md), tell Fastify not to create a new scope. Otherwise,
changes will not be accessible in the upper scope.

There are two ways to avoid creating a new context:
- Use the [`fastify-plugin`](https://github.com/fastify/fastify-plugin) module
- Use the `'skip-override'` hidden property

Using the `fastify-plugin` module is recommended, as it solves this problem and
allows passing a version range of Fastify that the plugin will support:
```js
const fp = require('fastify-plugin')

module.exports = fp(function (fastify, opts, done) {
  fastify.decorate('utility', function () {})
  done()
}, '0.x')
```
Check the [`fastify-plugin`](https://github.com/fastify/fastify-plugin)
documentation to learn more about how to use this module.

If not using `fastify-plugin`, the `'skip-override'` hidden property can be used,
but it is not recommended. Future Fastify API changes will be your responsibility
to update, whilst `fastify-plugin` ensures backward compatibility.
```js
function yourPlugin (fastify, opts, done) {
  fastify.decorate('utility', function () {})
  done()
}
yourPlugin[Symbol.for('skip-override')] = true
module.exports = yourPlugin
```
