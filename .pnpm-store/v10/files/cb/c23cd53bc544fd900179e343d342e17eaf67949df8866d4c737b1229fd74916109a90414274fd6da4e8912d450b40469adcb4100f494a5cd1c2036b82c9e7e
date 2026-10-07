# is-ci

Returns `true` if the current environment is a Continuous Integration
server.

Please [open an issue](https://github.com/watson/is-ci/issues) if your
CI server isn't properly detected :)

[![npm](https://img.shields.io/npm/v/is-ci.svg)](https://www.npmjs.com/package/is-ci)
[![Build status](https://travis-ci.org/watson/is-ci.svg?branch=master)](https://travis-ci.org/watson/is-ci)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

## Installation

```bash
npm install is-ci --save
```

## Programmatic Usage

```js
const isCI = require('is-ci')

if (isCI) {
  console.log('The code is running on a CI server')
}
```

## CLI Usage

For CLI usage you need to have the `is-ci` executable in your `PATH`.
There's a few ways to do that:

- Either install the module globally using `npm install is-ci -g`
- Or add the module as a dependency to your app in which case it can be
  used inside your package.json scripts as is
- Or provide the full path to the executable, e.g.
  `./node_modules/.bin/is-ci`

```bash
is-ci && echo "This is a CI server"
```

## Supported CI tools

Refer to [ci-info](https://github.com/watson/ci-info#supported-ci-tools) docs for all supported CI's

## License

[MIT](LICENSE)
