# find-root
recursively find the closest package.json

[![Build Status](https://travis-ci.org/js-n/find-root.svg?branch=master)](https://travis-ci.org/js-n/find-root)

## usage
Say you want to check if the directory name of a project matches its
module name in package.json:

```js
const path = require('path')
const findRoot = require('find-root')

// from a starting directory, recursively search for the nearest
// directory containing package.json
const root = findRoot('/Users/jsdnxx/Code/find-root/tests')
// => '/Users/jsdnxx/Code/find-root'

const dirname = path.basename(root)
console.log('is it the same?')
console.log(dirname === require(path.join(root, 'package.json')).name)
```

You can also pass in a custom check function (by default, it checks for the
existence of `package.json` in a directory). In this example, we traverse up
to find the root of a git repo:
```js
const fs = require('fs')

const gitRoot = findRoot('/Users/jsdnxx/Code/find-root/tests', function (dir) {
  return fs.existsSync(path.resolve(dir, '.git'))
})
```


## api

### `findRoot: (startingPath : string, check?: (dir: string) => boolean) => string`

Returns the path for the nearest directory to `startingPath` containing
a `package.json` file, eg `/foo/module`.

If `check` is provided, returns the path for the closest parent directory
where `check` returns true.

Throws an error if no `package.json` is found at any level in the
`startingPath`.


## installation
```sh
> npm install find-root
```

## running the tests

From package root:
```sh
> npm install
> npm test
```

## contributors

- jsdnxx


## license
MIT. (c) 2017 jsdnxx
