# import-fresh

> Import a module while bypassing the [cache](https://nodejs.org/api/modules.html#modules_caching)

Useful for testing purposes when you need to freshly import a module.

## ESM

For ESM, you can use this snippet:

```js
const importFresh = moduleName => import(`${moduleName}?${Date.now()}`);

const {default: foo} = await importFresh('foo');
```

**This snippet causes a memory leak, so only use it for short-lived tests.**

## Install

```sh
npm install import-fresh
```

## Usage

```js
// foo.js
let i = 0;
module.exports = () => ++i;
```

```js
const importFresh = require('import-fresh');

require('./foo')();
//=> 1

require('./foo')();
//=> 2

importFresh('./foo')();
//=> 1

importFresh('./foo')();
//=> 1
```

## Related

- [clear-module](https://github.com/sindresorhus/clear-module) - Clear a module from the import cache
- [import-from](https://github.com/sindresorhus/import-from) - Import a module from a given path
- [import-cwd](https://github.com/sindresorhus/import-cwd) - Import a module from the current working directory
- [import-lazy](https://github.com/sindresorhus/import-lazy) - Import modules lazily
