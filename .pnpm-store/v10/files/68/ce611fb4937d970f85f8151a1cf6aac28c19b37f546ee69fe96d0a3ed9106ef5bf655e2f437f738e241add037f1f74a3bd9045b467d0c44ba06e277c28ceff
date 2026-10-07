# import-from

> Import a module like with [`require()`](https://nodejs.org/api/modules.html#modules_require_id) but from a given path

## Install

```
$ npm install import-from
```

## Usage

```js
const importFrom = require('import-from');

// There is a file at `./foo/bar.js`

importFrom('foo', './bar');
```

## API

### importFrom(fromDirectory, moduleId)

Like `require()`, throws when the module can't be found.

### importFrom.silent(fromDirectory, moduleId)

Returns `undefined` instead of throwing when the module can't be found.

#### fromDirectory

Type: `string`

Directory to import from.

#### moduleId

Type: `string`

What you would use in `require()`.

## Tip

Create a partial using a bound function if you want to import from the same `fromDir` multiple times:

```js
const importFromFoo = importFrom.bind(null, 'foo');

importFromFoo('./bar');
importFromFoo('./baz');
```

## Related

- [import-cwd](https://github.com/sindresorhus/import-cwd) - Import a module from the current working directory
- [resolve-from](https://github.com/sindresorhus/resolve-from) - Resolve the path of a module from a given path
- [resolve-cwd](https://github.com/sindresorhus/resolve-cwd) - Resolve the path of a module from the current working directory
- [resolve-pkg](https://github.com/sindresorhus/resolve-pkg) - Resolve the path of a package regardless of it having an entry point
- [import-lazy](https://github.com/sindresorhus/import-lazy) - Import modules lazily
- [import-global](https://github.com/sindresorhus/import-global) - Import a globally installed module
