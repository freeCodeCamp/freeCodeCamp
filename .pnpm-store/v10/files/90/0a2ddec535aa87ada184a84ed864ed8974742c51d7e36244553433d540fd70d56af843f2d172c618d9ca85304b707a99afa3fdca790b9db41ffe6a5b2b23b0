# avvio

![CI](https://github.com/fastify/avvio/workflows/CI/badge.svg)
[![NPM version](https://img.shields.io/npm/v/avvio.svg?style=flat)](https://www.npmjs.com/package/avvio)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://standardjs.com/)

Asynchronous bootstrapping is hard, different things can go wrong, *error handling* and *load order* just to name a few. The aim of this module is to make it simple.

`avvio` is fully *reentrant* and *graph-based*. You can load
components/plugins *within* plugins, and be still sure that things will
happen in the right order. At the end of the loading, your application will start.

* [Install](#install)
* [Example](#example)
* [API](#api)
* [Acknowledgements](#acknowledgements)
* [License](#license)

<a name="install"></a>
## Install

To install `avvio`, simply use npm:

```
npm i avvio
```

<a name="example"></a>
## Example

The example below can be found [here][example] and run using `node example.js`.
It demonstrates how to use `avvio` to load functions / plugins in order.


```js
'use strict'

const app = require('avvio')()

app
  .use(first, { hello: 'world' })
  .after((err, cb) => {
    console.log('after first and second')
    cb()
  })

app.use(third)

app.ready(function (err) {
  // the error must be handled somehow
  if (err) {
    throw err
  }
  console.log('application booted!')
})

function first (instance, opts, cb) {
  console.log('first loaded', opts)
  instance.use(second)
  cb()
}

function second (instance, opts, cb) {
  console.log('second loaded')
  process.nextTick(cb)
}

// async/await or Promise support
async function third (instance, opts) {
  console.log('third loaded')
}
```

<a name="api"></a>
## API

  * <a href="#constructor"><code><b>avvio()</b></code></a>
  * <a href="#use"><code>instance.<b>use()</b></code></a>
  * <a href="#after"><code>instance.<b>after()</b></code></a>
  * <a href="#await-after"><code>await instance.<b>after()</b></code></a>
  * <a href="#ready"><code>instance.<b>ready()</b></code></a>
  * <a href="#start"><code>instance.<b>start()</b></code></a>
  * <a href="#override"><code>instance.<b>override()</b></code></a>
  * <a href="#onClose"><code>instance.<b>onClose()</b></code></a>
  * <a href="#close"><code>instance.<b>close()</b></code></a>
  * <a href="#toJSON"><code>avvio.<b>toJSON()</b></code></a>
  * <a href="#prettyPrint"><code>avvio.<b>prettyPrint()</b></code></a>

-------------------------------------------------------
<a name="constructor"></a>

### avvio([instance], [options], [started])

Starts the avvio sequence.
As the name suggests, `instance` is the object representing your application.
Avvio will add the functions `use`, `after` and `ready` to the instance.

```js
const server = {}

require('avvio')(server)

server.use(function first (s, opts, cb) {
  // s is the same of server
  s.use(function second (s, opts, cb) {
    cb()
  })
  cb()
}).after(function (err, cb) {
  // after first and second are finished
  cb()
})
```

Options:

* `expose`: a key/value property to change how `use`, `after` and `ready` are exposed.
* `autostart`: do not start loading plugins automatically, but wait for
  a call to [`.start()`](#start)  or [`.ready()`](#ready).
* `timeout`: the number of millis to wait for a plugin to load after which
  it will error with code `ERR_AVVIO_PLUGIN_TIMEOUT`. Default
  `0` (disabled).

Events:

* `'start'`  when the application starts
* `'preReady'` fired before the ready queue is run

The `avvio` function can also be used as a
constructor to inherit from.
```js
function Server () {}
const app = require('avvio')(new Server())

app.use(function (s, opts, done) {
  // your code
  done()
})

app.on('start', () => {
  // you app can start
})
```

-------------------------------------------------------
<a name="use"></a>

### app.use(func, [optsOrFunc]) => Thenable

Loads one or more functions asynchronously.

The function **must** have the signature: `instance, options, done`

Plugin example:
```js
function plugin (server, opts, done) {
  done()
}

app.use(plugin)
```
`done` should be called only once, when your plugin is ready to go.  Additional calls to `done` are ignored.

If your plugin is ready to go immediately after the function is evaluated, you can omit `done` from the signature.

If the function returns a `Promise` (i.e. `async`), the above function signature is not required.

`use` returns a thenable wrapped instance on which `use` is called, to support a chainable API that can also be awaited.

This way, async/await is also supported and `use` can be awaited instead of using `after`.

Example using `after`:

```js
async function main () {
  console.log('begin')
  app.use(async function (server, opts) {
    await sleep(10)
    console.log('this first')
  })
  app.after(async (err) => {
    if (err) throw err
    console.log('then this')
  })
  await app.ready()
  console.log('ready')
}
main().catch((err) => console.error(err))
```

Example using `await after`:


```js
async function main () {
  console.log('begin')
  app.use(async function (server, opts) {
    await sleep(10)
    console.log('this first')
  })
  await app.after()
  console.log('then this')
  await app.ready()
  console.log('ready')
}
main().catch((err) => console.error(err))
```

Example using `await use`:

```js
async function main () {
  console.log('begin')
  await app.use(async function (server, opts) {
    await sleep(10)
    console.log('this first')
  })
  console.log('then this')
  await app.ready()
  console.log('ready')
}
main().catch((err) => console.error(err))
```

A function that returns the options argument instead of an object is supported as well:

```js
function first (server, opts, done) {
  server.foo = 'bar'
  done()
}

function second (server, opts, done) {
  console.log(opts.foo === 'bar') // Evaluates to true
  done()
}

/**
 * If the options argument is a function, it has access to the parent
 * instance via the first positional variable
 */
const func = parent => {
  return {
    foo: parent.foo
  }
}

app.use(first)
app.use(second, func)
```

This is useful in cases where an injected variable from a plugin needs to be made available to another.

It is also possible to use [esm](https://nodejs.org/api/esm.html) with `import('./file.mjs')`:

```js
import boot from 'avvio'

const app = boot()
app.use(import('./fixtures/esm.mjs'))
```

-------------------------------------------------------
<a name="error-handling"></a>
#### Error handling

In order to handle errors in the loading plugins, you must use the
`.ready()` method, like so:

```js
app.use(function (instance, opts, done) {
  done(new Error('error'))
}, opts)

app.ready(function (err) {
  if (err) throw err
})
```

When an error happens, the loading of plugins will stop until there is
an [`after`](#after) callback specified. Otherwise, it will be handled
in [`ready`](#ready).

-------------------------------------------------------
<a name="after"></a>

### app.after(func(error, [context], [done]))

Calls a function after all the previously defined plugins are loaded, including
all their dependencies. The `'start'` event is not emitted yet.

Note: `await after` can be used as an awaitable alternative to `after(func)`, or `await use` can be also as a shorthand for `use(plugin); await after()`.

The callback changes based on the parameters you give:
1. If no parameter is given to the callback and there is an error, that error will be passed to the next error handler.
2. If one parameter is given to the callback, that parameter will be the `error` object.
3. If two parameters are given to the callback, the first will be the `error` object, the second will be the `done` callback.
4. If three parameters are given to the callback, the first will be the `error` object, the second will be the top level `context` and the third the `done` callback.

In the "no parameter" and "one parameter" variants, the callback can return a `Promise`.

```js
const server = {}
const app = require('avvio')(server)

...
// after with one parameter
app.after(function (err) {
  if (err) throw err
})

// after with two parameter
app.after(function (err, done) {
  if (err) throw err
  done()
})

// after with three parameters
app.after(function (err, context, done) {
  if (err) throw err
  assert.equal(context, server)
  done()
})

// async after with one parameter
app.after(async function (err) {
  await sleep(10)
  if (err) {
    throw err
  }
})

// async after with no parameter
app.after(async function () {
  await sleep(10)
})
```

`done` must be called only once.

If called with a function, it returns the instance on which `after` is called, to support a chainable API.

-------------------------------------------------------
<a name="await-after"></a>

### await app.after() | app.after() => Promise

Calling after with no function argument loads any plugins previously registered via `use` and returns a promise, which resolves when all plugins registered so far have loaded.

```js
async function main () {
  app.use(async function (server, opts) {
    await sleep(10)
    console.log('this first')
  })
  app.use(async function (server, opts) {
    await sleep(10)
    console.log('this second')
  })
  console.log('before after')
  await app.after()
  console.log('after after')
  app.use(async function (server, opts) {
    await sleep(10)
    console.log('this third')
  })
  await app.ready()
  console.log('ready')
}
main().catch((err) => console.error(err))
```

Unlike `after` and `use`, `await after` is *not* chainable.

-------------------------------------------------------
<a name="ready"></a>

### app.ready([func(error, [context], [done])])

Calls a function after all the plugins and `after` call are completed, but before `'start'` is emitted. `ready` callbacks are executed one at a time.

The callback changes based on the parameters you give:
1. If no parameter is given to the callback and there is an error, that error will be passed to the next error handler.
2. If one parameter is given to the callback, that parameter will be the `error` object.
3. If two parameters are given to the callback, the first will be the `error` object, the second will be the `done` callback.
4. If three parameters are given to the callback, the first will be the `error` object, the second will be the top level `context` unless you have specified both server and override, in that case the `context` will be what the override returns, and the third the `done` callback.

If no callback is provided `ready` will return a Promise that is resolved or rejected once plugins and `after` calls are completed.  On success `context` is provided to the `.then` callback, if an error occurs it is provided to the `.catch` callback.

```js
const server = {}
const app = require('avvio')(server)
...
// ready with one parameter
app.ready(function (err) {
  if (err) throw err
})

// ready with two parameter
app.ready(function (err, done) {
  if (err) throw err
  done()
})

// ready with three parameters
app.ready(function (err, context, done) {
  if (err) throw err
  assert.equal(context, server)
  done()
})

// ready with Promise
app.ready()
  .then(() => console.log('Ready'))
  .catch(err => {
    console.error(err)
    process.exit(1)
  })

// await ready from an async function.
async function main () [
  try {
    await app.ready()
    console.log('Ready')
  } catch(err) {
    console.error(err)
    process.exit(1)
  }
}
```

`done` must be called only once.

The callback form of this function has no return value.

If `autostart: false` is passed as an option, calling `.ready()`  will
also start the boot sequence.

-------------------------------------------------------
<a name="start"></a>

### app.start()

Start the boot sequence, if it was not started yet.
Returns the `app` instance.

-------------------------------------------------------
<a name="override"></a>

### app.override(server, plugin, options)

Allows overriding the instance of the server for each loading plugin.
It allows the creation of an inheritance chain for the server instances.
The first parameter is the server instance and the second is the plugin function while the third is the options object that you give to use.

```js
const assert = require('node:assert')
const server = { count: 0 }
const app = require('avvio')(server)

console.log(app !== server, 'override must be set on the Avvio instance')

app.override = function (s, fn, opts) {
  // create a new instance with the
  // server as the prototype
  const res = Object.create(s)
  res.count = res.count + 1

  return res
}

app.use(function first (s1, opts, cb) {
  assert(s1 !== server)
  assert(Object.prototype.isPrototypeOf.call(server, s1))
  assert(s1.count === 1)
  s1.use(second)
  cb()

  function second (s2, opts, cb) {
    assert(s2 !== s1)
    assert(Object.prototype.isPrototypeOf.isPrototypeOf.call(s1, s2))
    assert(s2.count === 2)
    cb()
  }
})
```
-------------------------------------------------------

<a name="onClose"></a>
### app.onClose(func([context], [done]))

Registers a new callback that will be fired once then `close` api is called.

The callback changes basing on the parameters you give:
1. If one parameter is given to the callback, that parameter will be the `context`.
2. If zero or one parameter is given, the callback may return a promise
3. If two parameters are given to the callback, the first will be the top level `context` unless you have specified both server and override, in that case the `context` will be what the override returns, the second will be the `done` callback.

```js
const server = {}
const app = require('avvio')(server)
...
// onClose with one parameter
app.onClose(function (context) {
  // ...
})

// onClose with one parameter, returning a promise
app.onClose(function (context) {
  return new Promise((resolve, reject) => {
    // ...
  })
})

// async onClose with one parameter
app.onClose(async function (context) {
  // ...
  await ...
})


// onClose with two parameter
app.onClose(function (context, done) {
  // ...
  done()
})
```

If the callback returns a promise, the next onClose callback and the close callback will not run until the promise is either resolved or rejected.

`done` must be called only once.
Returns the instance on which `onClose` is called, to support a chainable API.

-------------------------------------------------------

<a name="close"></a>
### app.close(func(error, [context], [done]))

Starts the shutdown procedure, the callback is called once all the registered callbacks with `onClose` has been executed.

The callback changes based on the parameters you give:
1. If one parameter is given to the callback, that parameter will be the `error` object.
2. If two parameters are given to the callback, the first will be the `error` object, the second will be the `done` callback.
3. If three parameters are given to the callback, the first will be the `error` object, the second will be the top level `context` unless you have specified both server and override, in that case the `context` will be what the override returns, and the third the `done` callback.

If no callback is provided `close` will return a Promise.

```js
const server = {}
const app = require('avvio')(server)
...
// close with one parameter
app.close(function (err) {
  if (err) throw err
})

// close with two parameter
app.close(function (err, done) {
  if (err) throw err
  done()
})

// close with three parameters
app.close(function (err, context, done) {
  if (err) throw err
  assert.equal(context, server)
  done()
})

// close with Promise
app.close()
  .then(() => console.log('Closed'))
  .catch(err => {
    console.error(err)
    process.exit(1)
  })

```

`done` must be called only once.

-------------------------------------------------------

<a name="toJSON"></a>

### avvio.toJSON()

Return a JSON tree representing the state of the plugins and the loading time.
Call it on `preReady` to get the complete tree.

```js
const avvio = require('avvio')()
avvio.on('preReady', () => {
  avvio.toJSON()
})
```

The output is like this:
```json
{
  "label": "root",
  "start": 1550245184665,
  "nodes": [
    {
      "parent": "root",
      "start": 1550245184665,
      "label": "first",
      "nodes": [
        {
          "parent": "first",
          "start": 1550245184708,
          "label": "second",
          "nodes": [],
          "stop": 1550245184709,
          "diff": 1
        }
      ],
      "stop": 1550245184709,
      "diff": 44
    },
    {
      "parent": "root",
      "start": 1550245184709,
      "label": "third",
      "nodes": [],
      "stop": 1550245184709,
      "diff": 0
    }
  ],
  "stop": 1550245184709,
  "diff": 44
}
```

-------------------------------------------------------

<a name="prettyPrint"></a>

### avvio.prettyPrint()

This method will return a printable string with the tree returned by the `toJSON()` method.

```js
const avvio = require('avvio')()
avvio.on('preReady', () => {
  console.log(avvio.prettyPrint())
})
```

The output will be like:

```
avvio 56 ms
├── first 52 ms
├── second 1 ms
└── third 2 ms
```

-------------------------------------------------------

## Acknowledgements

This project was kindly sponsored by [nearForm](https://nearform.com).

## License

Copyright Matteo Collina 2016-2020, Licensed under [MIT][].

[MIT]: ./LICENSE
[example]: ./examples/example.js
