# assert

> The [`assert`](https://nodejs.org/api/assert.html) module from Node.js, for the browser.

[![Build Status](https://travis-ci.org/browserify/commonjs-assert.svg?branch=master)](https://travis-ci.org/browserify/commonjs-assert)
[![npm](https://img.shields.io/npm/dm/assert.svg)](https://www.npmjs.com/package/assert)
[![npm](https://img.shields.io/npm/v/assert.svg)](https://www.npmjs.com/package/assert)

With browserify, simply `require('assert')` or use the `assert` global and you will get this module.

The goal is to provide an API that is as functionally identical to the [Node.js `assert` API](https://nodejs.org/api/assert.html) as possible. Read the [official docs](https://nodejs.org/api/assert.html) for API documentation.

## Install

To use this module directly (without browserify), install it as a dependency:

```
npm install assert
```

## Usage

The goal is to provide an API that is as functionally identical to the [Node.js `assert` API](https://nodejs.org/api/assert.html) as possible. Read the [official docs](https://nodejs.org/api/assert.html) for API documentation.

### Inconsistencies with Node.js `assert`

Due to differences between browsers, some error properties such as `message` and `stack` will be inconsistent. However the assertion behaviour is as close as possible to Node.js and the same error `code` will always be used.

## Contributing

To contribute, work on the source files. Then build and run the tests against the built files. Be careful to not introduce syntax that will be transpiled down to unsupported syntax. For example, `for...of` loops will be transpiled to use `Symbol.iterator` which is unavailable in IE.

### Build scripts

#### `npm run build`

Builds the project into the `build` dir.

#### `npm run dev`

Watches source files for changes and rebuilds them into the `build` dir.

#### `npm run test`

Builds the source files into the `build` dir and then runs the tests against the built project.

#### `npm run test:nobuild`

Runs the tests against the built project without rebuilding first.

This is useful if you're debugging in the transpiled code and want to re-run the tests without overwriting any changes you may have made.

#### `npm run test:source`

Runs the tests against the unbuilt source files.

This will only work on modern Node.js versions.

#### `npm run test:browsers`

Run browser tests against the all targets in the cloud.

Requires airtap credentials to be configured on your machine.

#### `npm run test:browsers:local`

Run a local browser test server. No airtap configuration required.

When paired with `npm run dev` any changes you make to the source files will be automatically transpiled and served on the next request to the test server.

## License

MIT © Joyent, Inc. and other Node contributors
