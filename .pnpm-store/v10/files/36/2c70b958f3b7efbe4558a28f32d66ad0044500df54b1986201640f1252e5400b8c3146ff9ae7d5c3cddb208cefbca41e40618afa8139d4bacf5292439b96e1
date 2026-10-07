Node.js - jsonfile
================

Easily read/write JSON files in Node.js. _Note: this module cannot be used in the browser._

[![npm Package](https://img.shields.io/npm/v/jsonfile.svg?style=flat-square)](https://www.npmjs.org/package/jsonfile)
[![build status](https://secure.travis-ci.org/jprichardson/node-jsonfile.svg)](http://travis-ci.org/jprichardson/node-jsonfile)
[![windows Build status](https://img.shields.io/appveyor/ci/jprichardson/node-jsonfile/master.svg?label=windows%20build)](https://ci.appveyor.com/project/jprichardson/node-jsonfile/branch/master)

<a href="https://github.com/feross/standard"><img src="https://cdn.rawgit.com/feross/standard/master/sticker.svg" alt="Standard JavaScript" width="100"></a>

Why?
----

Writing `JSON.stringify()` and then `fs.writeFile()` and `JSON.parse()` with `fs.readFile()` enclosed in `try/catch` blocks became annoying.



Installation
------------

    npm install --save jsonfile



API
---

* [`readFile(filename, [options], callback)`](#readfilefilename-options-callback)
* [`readFileSync(filename, [options])`](#readfilesyncfilename-options)
* [`writeFile(filename, obj, [options], callback)`](#writefilefilename-obj-options-callback)
* [`writeFileSync(filename, obj, [options])`](#writefilesyncfilename-obj-options)

----

### readFile(filename, [options], callback)

`options` (`object`, default `undefined`): Pass in any [`fs.readFile`](https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback) options or set `reviver` for a [JSON reviver](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse).
  - `throws` (`boolean`, default: `true`). If `JSON.parse` throws an error, pass this error to the callback.
  If `false`, returns `null` for the object.


```js
const jsonfile = require('jsonfile')
const file = '/tmp/data.json'
jsonfile.readFile(file, function (err, obj) {
  if (err) console.error(err)
  console.dir(obj)
})
```

You can also use this method with promises. The `readFile` method will return a promise if you do not pass a callback function.

```js
const jsonfile = require('jsonfile')
const file = '/tmp/data.json'
jsonfile.readFile(file)
  .then(obj => console.dir(obj))
  .catch(error => console.error(error))
```

----

### readFileSync(filename, [options])

`options` (`object`, default `undefined`): Pass in any [`fs.readFileSync`](https://nodejs.org/api/fs.html#fs_fs_readfilesync_path_options) options or set `reviver` for a [JSON reviver](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse).
- `throws` (`boolean`, default: `true`). If an error is encountered reading or parsing the file, throw the error. If `false`, returns `null` for the object.

```js
const jsonfile = require('jsonfile')
const file = '/tmp/data.json'

console.dir(jsonfile.readFileSync(file))
```

----

### writeFile(filename, obj, [options], callback)

`options`: Pass in any [`fs.writeFile`](https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback) options or set `replacer` for a [JSON replacer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify). Can also pass in `spaces`, or override `EOL` string or set `finalEOL` flag as `false` to not save the file with `EOL` at the end.


```js
const jsonfile = require('jsonfile')

const file = '/tmp/data.json'
const obj = { name: 'JP' }

jsonfile.writeFile(file, obj, function (err) {
  if (err) console.error(err)
})
```
Or use with promises as follows:

```js
const jsonfile = require('jsonfile')

const file = '/tmp/data.json'
const obj = { name: 'JP' }

jsonfile.writeFile(file, obj)
  .then(res => {
    console.log('Write complete')
  })
  .catch(error => console.error(error))
```


**formatting with spaces:**

```js
const jsonfile = require('jsonfile')

const file = '/tmp/data.json'
const obj = { name: 'JP' }

jsonfile.writeFile(file, obj, { spaces: 2 }, function (err) {
  if (err) console.error(err)
})
```

**overriding EOL:**

```js
const jsonfile = require('jsonfile')

const file = '/tmp/data.json'
const obj = { name: 'JP' }

jsonfile.writeFile(file, obj, { spaces: 2, EOL: '\r\n' }, function (err) {
  if (err) console.error(err)
})
```


**disabling the EOL at the end of file:**

```js
const jsonfile = require('jsonfile')

const file = '/tmp/data.json'
const obj = { name: 'JP' }

jsonfile.writeFile(file, obj, { spaces: 2, finalEOL: false }, function (err) {
  if (err) console.log(err)
})
```

**appending to an existing JSON file:**

You can use `fs.writeFile` option `{ flag: 'a' }` to achieve this.

```js
const jsonfile = require('jsonfile')

const file = '/tmp/mayAlreadyExistedData.json'
const obj = { name: 'JP' }

jsonfile.writeFile(file, obj, { flag: 'a' }, function (err) {
  if (err) console.error(err)
})
```

----

### writeFileSync(filename, obj, [options])

`options`: Pass in any [`fs.writeFileSync`](https://nodejs.org/api/fs.html#fs_fs_writefilesync_file_data_options) options or set `replacer` for a [JSON replacer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify). Can also pass in `spaces`, or override `EOL` string or set `finalEOL` flag as `false` to not save the file with `EOL` at the end.

```js
const jsonfile = require('jsonfile')

const file = '/tmp/data.json'
const obj = { name: 'JP' }

jsonfile.writeFileSync(file, obj)
```

**formatting with spaces:**

```js
const jsonfile = require('jsonfile')

const file = '/tmp/data.json'
const obj = { name: 'JP' }

jsonfile.writeFileSync(file, obj, { spaces: 2 })
```

**overriding EOL:**

```js
const jsonfile = require('jsonfile')

const file = '/tmp/data.json'
const obj = { name: 'JP' }

jsonfile.writeFileSync(file, obj, { spaces: 2, EOL: '\r\n' })
```

**disabling the EOL at the end of file:**

```js
const jsonfile = require('jsonfile')

const file = '/tmp/data.json'
const obj = { name: 'JP' }

jsonfile.writeFileSync(file, obj, { spaces: 2, finalEOL: false })
```

**appending to an existing JSON file:**

You can use `fs.writeFileSync` option `{ flag: 'a' }` to achieve this.

```js
const jsonfile = require('jsonfile')

const file = '/tmp/mayAlreadyExistedData.json'
const obj = { name: 'JP' }

jsonfile.writeFileSync(file, obj, { flag: 'a' })
```

License
-------

(MIT License)

Copyright 2012-2016, JP Richardson  <jprichardson@gmail.com>
