# @fastify/ajv-compiler

[![CI](https://github.com/fastify/ajv-compiler/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/fastify/ajv-compiler/actions/workflows/ci.yml)
[![NPM version](https://img.shields.io/npm/v/@fastify/ajv-compiler.svg?style=flat)](https://www.npmjs.com/package/@fastify/ajv-compiler)
[![neostandard javascript style](https://img.shields.io/badge/code_style-neostandard-brightgreen?style=flat)](https://github.com/neostandard/neostandard)

This module manages the [`ajv`](https://www.npmjs.com/package/ajv) instances for the Fastify framework.
It isolates the `ajv` dependency so that the AJV version is not tightly coupled to the Fastify version.
This allows the user to decide which version of AJV to use in their Fastify-based application.


## Versions

| `@fastify/ajv-compiler` | `ajv` | Default in `fastify` |
|------------------------:|------:|---------------------:|
|                    v4.x |  v8.x |                 ^5.x |
|                    v3.x |  v8.x |                 ^4.x |
|                    v2.x |  v8.x |                    - |
|                    v1.x |  v6.x |                ^3.14 |

### AJV Configuration

The Fastify's default [`ajv` options](https://github.com/ajv-validator/ajv/tree/v6#options) are:

```js
{
  coerceTypes: 'array',
  useDefaults: true,
  removeAdditional: true,
  uriResolver: require('fast-uri'),
  addUsedSchema: false,
  // Explicitly set allErrors to `false`.
  // When set to `true`, a DoS attack is possible.
  allErrors: false
}
```

Moreover, the [`ajv-formats`](https://www.npmjs.com/package/ajv-formats) module is included by default.
If you need to customize it, check the _usage_ section below.

To customize the `ajv` options, see how in the [Fastify documentation](https://fastify.dev/docs/latest/Reference/Server/#ajv).


## Usage

This module is already used as default by Fastify.
If you need to provide your server instance with a different version, refer to [the Fastify docs](https://fastify.dev/docs/latest/Reference/Server/#schemacontroller).

### Customize the `ajv-formats` plugin

The `format` keyword is not part of the official `ajv` module since v7. To use it, you need to install the `ajv-formats` module and this module
does it for you with the default configuration.

If you need to configure the `ajv-formats` plugin you can do it using the standard Fastify configuration:

```js
const app = fastify({
  ajv: {
    plugins: [[require('ajv-formats'), { mode: 'fast' }]]
  }
})
```

In this way, your setup will have precedence over the `@fastify/ajv-compiler` default configuration.

### Customize the `ajv` instance

If you need to customize the `ajv` instance and take full control of its configuration, you can do it by
using the `onCreate` option in the Fastify configuration that accepts a synchronous function that receives the `ajv` instance:

```js
const app = fastify({
  ajv: {
    onCreate: (ajv) => {
      // Modify the ajv instance as you need.
      ajv.addFormat('myFormat', (data) => typeof data === 'string')
    }
  }
})
```

### Fastify with JTD

The [JSON Type Definition](https://jsontypedef.com/) feature is supported by AJV v8.x and you can benefit from it in your Fastify application.

With Fastify v3.20.x and higher, you can use the `@fastify/ajv-compiler` module to load JSON Type Definitions like so:

```js
const factory = require('@fastify/ajv-compiler')()

const app = fastify({
  jsonShorthand: false,
  ajv: {
    customOptions: { }, // additional JTD options
    mode: 'JTD'
  },
  schemaController: {
    compilersFactory: {
      buildValidator: factory
    }
  }
})
```

The default AJV JTD options are the same as [Fastify's default options](#AJV-Configuration).

#### Fastify with JTD and serialization

You can use JTD Schemas to serialize your response object too:

```js
const factoryValidator = require('@fastify/ajv-compiler')()
const factorySerializer = require('@fastify/ajv-compiler')({ jtdSerializer: true })

const app = fastify({
  jsonShorthand: false,
  ajv: {
    customOptions: { }, // additional JTD options
    mode: 'JTD'
  },
  schemaController: {
    compilersFactory: {
      buildValidator: factoryValidator,
      buildSerializer: factorySerializer
    }
  }
})
```


### AJV Standalone

AJV v8 introduced a [standalone feature](https://ajv.js.org/standalone.html) that lets you pre-compile your schemas and use them in your application for a faster startup.

To use this feature, you must be aware of the following:

1. You must generate and save the application's compiled schemas.
2. Read the compiled schemas from the file and provide them back to your Fastify application.


#### Generate and save the compiled schemas

Fastify helps you to generate the validation schemas functions and it is your choice to save them where you want.
To accomplish this, you must use a new compiler: `StandaloneValidator`.

You must provide 2 parameters to this compiler:

- `readMode: false`: a boolean to indicate that you want to generate the schemas functions string.
- `storeFunction`" a sync function that must store the source code of the schemas functions. You may provide an async function too, but you must manage errors.

When `readMode: false`, **the compiler is meant to be used in development ONLY**.


```js
const { StandaloneValidator } = require('@fastify/ajv-compiler')
const factory = StandaloneValidator({
  readMode: false,
  storeFunction (routeOpts, schemaValidationCode) {
    // routeOpts is like: { schema, method, url, httpPart }
    // schemaValidationCode is a string source code that is the compiled schema function
    const fileName = generateFileName(routeOpts)
    fs.writeFileSync(path.join(__dirname, fileName), schemaValidationCode)
  }
})

const app = fastify({
  jsonShorthand: false,
  schemaController: {
    compilersFactory: {
      buildValidator: factory
    }
  }
})

// ... add all your routes with schemas ...

app.ready().then(() => {
  // at this stage all your schemas are compiled and stored in the file system
  // now it is important to turn off the readMode
})
```

#### Read the compiled schemas functions

At this stage, you should have a file for every route's schema.
To use them, you must use the `StandaloneValidator` with the parameters:

- `readMode: true`: a boolean to indicate that you want to read and use the schemas functions string.
- `restoreFunction`" a sync function that must return a function to validate the route.

Important keep away before you continue reading the documentation:

- when you use the `readMode: true`, the application schemas are not compiled (they are ignored). So, if you change your schemas, you must recompile them!
- as you can see, you must relate the route's schema to the file name using the `routeOpts` object. You may use the `routeOpts.schema.$id` field to do so, it is up to you to define a unique schema identifier.

```js
const { StandaloneValidator } = require('@fastify/ajv-compiler')
const factory = StandaloneValidator({
  readMode: true,
  restoreFunction (routeOpts) {
    // routeOpts is like: { schema, method, url, httpPart }
    const fileName = generateFileName(routeOpts)
    return require(path.join(__dirname, fileName))
  }
})

const app = fastify({
  jsonShorthand: false,
  schemaController: {
    compilersFactory: {
      buildValidator: factory
    }
  }
})

// ... add all your routes with schemas as before...

app.listen({ port: 3000 })
```

### How it works

This module provides a factory function to produce [Validator Compilers](https://fastify.dev/docs/latest/Reference/Server/#validatorcompiler) functions.

The Fastify factory function is just one per server instance and it is called for every encapsulated context created by the application through the `fastify.register()` call.

Every Validator Compiler produced has a dedicated AJV instance, so this factory will try to produce as less as possible AJV instances to reduce the memory footprint and the startup time.

The variables involved to choose if a Validator Compiler can be reused are:

- the AJV configuration: it is [one per server](https://fastify.dev/docs/latest/Reference/Server/#ajv)
- the external JSON schemas: once a new schema is added to a fastify's context, calling `fastify.addSchema()`, it will cause a new AJV initialization


## License

Licensed under [MIT](./LICENSE).
