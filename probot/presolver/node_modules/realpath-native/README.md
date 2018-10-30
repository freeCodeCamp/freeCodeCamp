# realpath-native

> Use the system's native `realpath`

[![NPM Version][npm-image]][npm-url]
[![Linux & Mac Build Status][travis-image]][travis-url]

[![Greenkeeper Dependency Status][greenkeeper-image]][greenkeeper-url]

Node 9.3 added `fs.realpath(Sync).native`. On older Nodes you have to use
`process.binding` to access the same function. This module does that check for
you.

The advantage of the native `realpath` over `fs.realpath` is that the native one
better supports paths on Windows.

On node 4 the function uses the old `fs.realpath` function.

## Install

Install the module with `npm`:

```sh
$ npm install realpath-native
```

## Usage

```js
const realpath = require('realpath-native');

realpath('some-path'); // returns a promise

realpath.sync('some-path');
```

## API

### realpath(path)

Returns a promise for the resolved path of the input.

#### path

Type: `string`

### realpath.sync(path)

Returns the resolved path of the input synchronously.

#### path

Type: `string`

[npm-url]: https://npmjs.org/package/realpath-native
[npm-image]: https://img.shields.io/npm/v/realpath-native.svg
[travis-url]: https://travis-ci.org/SimenB/realpath-native
[travis-image]: https://img.shields.io/travis/SimenB/realpath-native/master.svg
[greenkeeper-url]: https://greenkeeper.io/
[greenkeeper-image]: https://badges.greenkeeper.io/SimenB/realpath-native.svg
