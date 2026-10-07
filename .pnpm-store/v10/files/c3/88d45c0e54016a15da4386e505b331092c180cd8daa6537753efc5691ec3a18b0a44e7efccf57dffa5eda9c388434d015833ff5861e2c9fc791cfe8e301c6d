# real-require

[![Package Version](https://img.shields.io/npm/v/real-require.svg)](https://npm.im/real-require)
[![Dependency Status](https://img.shields.io/librariesio/release/npm/real-require)](https://libraries.io/npm/real-require)
[![Build](https://github.com/pinojs/real-require/workflows/CI/badge.svg)](https://github.com/pinojs/real-require/actions?query=workflow%3ACI)

Keep require and import consistent after bundling or transpiling.

## Installation

Just run:

```bash
npm install real-require
```

## Usage

The package provides two drop-ins functions, `realRequire` and `realImport`, which can be used in scenarios where tools like transpilers or bundlers change the native `require` or `await import` calls.

The current `realRequire` functions only handles webpack at the moment, wrapping the `__non_webpack__require__` implementation that webpack provides for the final bundle.

### Example

```js
// After bundling, real-require will be embedded in the bundle
const { realImport, realRequire } = require('real-require')

/*
  By using realRequire, at build time the module will not be embedded and at runtime it will try to load path from the local filesytem.
  This is useful in situations where the build tool does not support skipping modules to embed.
*/
const { join } = realRequire('path')

async function main() {
  // Similarly, this make sure the import call is not modified by the build tools
  const localFunction = await realImport('./source.js')

  localFunction()
}

main().catch(console.error)
```

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md)

## License

Copyright Paolo Insogna and real-require contributors 2021. Licensed under the [MIT License](http://www.apache.org/licenses/MIT).
