# resolve-from [![Build Status](https://travis-ci.org/sindresorhus/resolve-from.svg?branch=master)](https://travis-ci.org/sindresorhus/resolve-from)

> Resolve the path of a module like [`require.resolve()`](https://nodejs.org/api/globals.html#globals_require_resolve) but from a given path


## Install

```
$ npm install --save resolve-from
```


## Usage

```js
const resolveFrom = require('resolve-from');

// There is a file at `./foo/bar.js`

resolveFrom('foo', './bar');
//=> '/Users/sindresorhus/dev/test/foo/bar.js'
```


## API

### resolveFrom(fromDir, moduleId)

Like `require()`, throws when the module can't be found.

### resolveFrom.silent(fromDir, moduleId)

Returns `null` instead of throwing when the module can't be found.

#### fromDir

Type: `string`

Directory to resolve from.

#### moduleId

Type: `string`

What you would use in `require()`.


## Tip

Create a partial using a bound function if you want to resolve from the same `fromDir` multiple times:

```js
const resolveFromFoo = resolveFrom.bind(null, 'foo');

resolveFromFoo('./bar');
resolveFromFoo('./baz');
```


## Related

- [resolve-cwd](https://github.com/sindresorhus/resolve-cwd) - Resolve the path of a module from the current working directory
- [req-from](https://github.com/sindresorhus/req-from) - Require a module from a given path
- [req-cwd](https://github.com/sindresorhus/req-cwd) - Require a module from the current working directory
- [resolve-pkg](https://github.com/sindresorhus/resolve-pkg) - Resolve the path of a package regardless of it having an entry point
- [lazy-req](https://github.com/sindresorhus/lazy-req) - Require modules lazily


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
