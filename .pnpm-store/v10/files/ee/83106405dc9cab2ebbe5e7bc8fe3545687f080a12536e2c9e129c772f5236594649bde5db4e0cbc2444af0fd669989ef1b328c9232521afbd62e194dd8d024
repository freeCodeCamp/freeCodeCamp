# @fastify/fast-json-stringify-compiler

[![CI](https://github.com/fastify/fast-json-stringify-compiler/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/fastify/fast-json-stringify-compiler/actions/workflows/ci.yml)
[![NPM version](https://img.shields.io/npm/v/@fastify/fast-json-stringify-compiler.svg?style=flat)](https://www.npmjs.com/package/@fastify/fast-json-stringify-compiler)
[![neostandard javascript style](https://img.shields.io/badge/code_style-neostandard-brightgreen?style=flat)](https://github.com/neostandard/neostandard)

Build and manage the [`fast-json-stringify`](https://www.npmjs.com/package/fast-json-stringify) instances for the Fastify framework.
This package is responsible for compiling the application's `response` JSON schemas into optimized functions to speed up the response time.

## Versions

| `@fastify/fast-json-stringify-compiler` | `fast-json-stringify` | Supported `fastify` |
|----------------------------------------:|----------------------:|--------------------:|
|                                    v1.x |                  v3.x |                ^3.x |
|                                    v2.x |                  v3.x |                ^4.x |
|                                    v3.x |                  v4.x |                ^4.x |
|                                    v4.x |                  v5.x |                ^5.x |

### fast-json-stringify Configuration

The `fast-json-stringify` configuration is the default one. You can check the default settings in the [`fast-json-stringify` option](https://github.com/fastify/fast-json-stringify/#options) documentation.

You can also override the default configuration by passing the [`serializerOpts`](https://fastify.dev/docs/latest/Reference/Server/#serializeropts) configuration to the Fastify instance.

## Usage

This module is already used as default by Fastify.
If you need to provide to your server instance a different version, refer to [the official doc](https://fastify.dev/docs/latest/Reference/Server/#schemacontroller).

### fast-json-stringify Standalone

`fast-json-stringify@v4.1.0` introduces the [standalone feature](https://github.com/fastify/fast-json-stringify#standalone) that lets you pre-compile your schemas and use them in your application for a faster startup.

To use this feature, you must be aware of the following:

1. You must generate and save the application's compiled schemas.
2. Read the compiled schemas from the file and provide them back to your Fastify application.


#### Generate and save the compiled schemas

Fastify helps you to generate the serialization schemas functions and it is your choice to save them where you want.
To accomplish this, you must use a new compiler: `@fastify/fast-json-stringify-compiler/standalone`.

You must provide 2 parameters to this compiler:

- `readMode: false`: a boolean to indicate that you want to generate the schemas functions string.
- `storeFunction`" a sync function that must store the source code of the schemas functions. You may provide an async function too, but you must manage errors.

When `readMode: false`, **the compiler is meant to be used in development ONLY**.


```js
const { StandaloneSerializer } = require('@fastify/fast-json-stringify-compiler')

const factory = StandaloneSerializer({
  readMode: false,
  storeFunction (routeOpts, schemaSerializationCode) {
    // routeOpts is like: { schema, method, url, httpStatus }
    // schemaSerializationCode is a string source code that is the compiled schema function
    const fileName = generateFileName(routeOpts)
    fs.writeFileSync(path.join(__dirname, fileName), schemaSerializationCode)
  }
})

const app = fastify({
  jsonShorthand: false,
  schemaController: {
    compilersFactory: {
      buildSerializer: factory
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
To use them, you must use the `@fastify/fast-json-stringify-compiler/standalone` with the parameters:

- `readMode: true`: a boolean to indicate that you want to read and use the schemas functions string.
- `restoreFunction`" a sync function that must return a function to serialize the route's payload.

Important keep away before you continue reading the documentation:

- when you use the `readMode: true`, the application schemas are not compiled (they are ignored). So, if you change your schemas, you must recompile them!
- as you can see, you must relate the route's schema to the file name using the `routeOpts` object. You may use the `routeOpts.schema.$id` field to do so, it is up to you to define a unique schema identifier.

```js
const { StandaloneSerializer } = require('@fastify/fast-json-stringify-compiler')

const factory = StandaloneSerializer({
  readMode: true,
  restoreFunction (routeOpts) {
    // routeOpts is like: { schema, method, url, httpStatus }
    const fileName = generateFileName(routeOpts)
    return require(path.join(__dirname, fileName))
  }
})

const app = fastify({
  jsonShorthand: false,
  schemaController: {
    compilersFactory: {
      buildSerializer: factory
    }
  }
})

// ... add all your routes with schemas as before...

app.listen({ port: 3000 })
```

### How it works

This module provides a factory function to produce [Serializer Compilers](https://fastify.dev/docs/latest/Reference/Server/#serializercompiler) functions.

## License

Licensed under [MIT](./LICENSE).
