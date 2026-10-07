# find-cache-dir [![Build Status](https://travis-ci.org/avajs/find-cache-dir.svg?branch=master)](https://travis-ci.org/avajs/find-cache-dir) [![Coverage Status](https://coveralls.io/repos/github/avajs/find-cache-dir/badge.svg?branch=master)](https://coveralls.io/github/avajs/find-cache-dir?branch=master)

> Finds the common standard cache directory

The [`nyc`](https://github.com/istanbuljs/nyc) and [`AVA`](https://ava.li) projects decided to standardize on a common directory structure for storing cache information:

```sh
# nyc
./node_modules/.cache/nyc

# ava
./node_modules/.cache/ava

# your-module
./node_modules/.cache/your-module
```

This module makes it easy to correctly locate the cache directory according to this shared spec. If this pattern becomes ubiquitous, clearing the cache for multiple dependencies becomes easy and consistent:

```
rm -rf ./node_modules/.cache
```

If you decide to adopt this pattern, please file a PR adding your name to the list of adopters below.


## Install

```
$ npm install find-cache-dir
```


## Usage

```js
const findCacheDir = require('find-cache-dir');

findCacheDir({name: 'unicorns'});
//=> '/user/path/node-modules/.cache/unicorns'
```


## API

### findCacheDir([options])

Finds the cache directory using the supplied options. The algorithm tries to find a `package.json` file, searching every parent directory of the `cwd` specified (or implied from other options). It returns a `string` containing the absolute path to the cache directory, or `null` if `package.json` was never found.

#### options

Type: `Object`

##### name

*Required*<br>
Type: `string`

Should be the same as your project name in `package.json`.

##### files

Type: `string[]` `string`

An array of files that will be searched for a common parent directory. This common parent directory will be used in lieu of the `cwd` option below.

##### cwd

Type: `string`<br>
Default `process.cwd()`

Directory to start searching for a `package.json` from.

##### create

Type: `boolean`<br>
Default `false`

If `true`, the directory will be created synchronously before returning.

##### thunk

Type: `boolean`<br>
Default `false`

If `true`, this modifies the return type to be a function that is a thunk for `path.join(theFoundCacheDirectory)`.

```js
const thunk = findCacheDir({name: 'foo', thunk: true});

thunk();
//=> '/some/path/node_modules/.cache/foo'

thunk('bar.js')
//=> '/some/path/node_modules/.cache/foo/bar.js'

thunk('baz', 'quz.js')
//=> '/some/path/node_modules/.cache/foo/baz/quz.js'
```

This is helpful for actually putting actual files in the cache!


## Adopters

- [`AVA`](https://ava.li)
- [`nyc`](https://github.com/istanbuljs/nyc)
- [`babel-loader`](https://github.com/babel/babel-loader)
- [`eslint-loader`](https://github.com/MoOx/eslint-loader)
- [`Phenomic`](https://phenomic.io)
- [`javascripthon-loader`](https://github.com/Beg-in/javascripthon-loader)


## License

MIT
