# flat-cache
> A stupidly simple key/value storage using files to persist the data

[![NPM Version](https://img.shields.io/npm/v/flat-cache.svg?style=flat)](https://npmjs.org/package/flat-cache)
[![tests](https://github.com/jaredwray/flat-cache/actions/workflows/tests.yaml/badge.svg?branch=master)](https://github.com/jaredwray/flat-cache/actions/workflows/tests.yaml)
[![codecov](https://codecov.io/github/jaredwray/flat-cache/branch/master/graph/badge.svg?token=KxR95XT3NF)](https://codecov.io/github/jaredwray/flat-cache)
[![npm](https://img.shields.io/npm/dm/flat-cache)](https://npmjs.com/package/flat-cache)

## install

```bash
npm i --save flat-cache
```

## Usage

```js
var flatCache = require('flat-cache')
// loads the cache, if one does not exists for the given
// Id a new one will be prepared to be created
var cache = flatCache.load('cacheId');

// sets a key on the cache
cache.setKey('key', { foo: 'var' });

// get a key from the cache
cache.getKey('key') // { foo: 'var' }

// fetch the entire persisted object
cache.all() // { 'key': { foo: 'var' } }

// remove a key
cache.removeKey('key'); // removes a key from the cache

// save it to disk
cache.save(); // very important, if you don't save no changes will be persisted.
// cache.save( true /* noPrune */) // can be used to prevent the removal of non visited keys

// loads the cache from a given directory, if one does
// not exists for the given Id a new one will be prepared to be created
var cache = flatCache.load('cacheId', path.resolve('./path/to/folder'));

// The following methods are useful to clear the cache
// delete a given cache
flatCache.clearCacheById('cacheId') // removes the cacheId document if one exists.

// delete all cache
flatCache.clearAll(); // remove the cache directory
```

## Motivation for this module

I needed a super simple and dumb **in-memory cache** with optional disk persistance in order to make
a script that will beutify files with `esformatter` only execute on the files that were changed since the last run.
To make that possible we need to store the `fileSize` and `modificationTime` of the files. So a simple `key/value`
storage was needed and Bam! this module was born.

## Important notes
- If no directory is especified when the `load` method is called, a folder named `.cache` will be created
  inside the module directory when `cache.save` is called. If you're committing your `node_modules` to any vcs, you
  might want to ignore the default `.cache` folder, or specify a custom directory.
- The values set on the keys of the cache should be `stringify-able` ones, meaning no circular references
- All the changes to the cache state are done to memory
- I could have used a timer or `Object.observe` to deliver the changes to disk, but I wanted to keep this module
  intentionally dumb and simple
- Non visited keys are removed when `cache.save()` is called. If this is not desired, you can pass `true` to the save call
  like: `cache.save( true /* noPrune */ )`.

## License

MIT

## Changelog

[changelog](./changelog.md)
