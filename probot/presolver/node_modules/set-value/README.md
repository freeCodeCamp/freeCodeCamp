# set-value [![NPM version](https://img.shields.io/npm/v/set-value.svg?style=flat)](https://www.npmjs.com/package/set-value) [![NPM monthly downloads](https://img.shields.io/npm/dm/set-value.svg?style=flat)](https://npmjs.org/package/set-value) [![NPM total downloads](https://img.shields.io/npm/dt/set-value.svg?style=flat)](https://npmjs.org/package/set-value) [![Linux Build Status](https://img.shields.io/travis/jonschlinkert/set-value.svg?style=flat&label=Travis)](https://travis-ci.org/jonschlinkert/set-value)

> Create nested values and any intermediaries using dot notation (`'a.b.c'`) paths.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save set-value
```

## Usage

```js
var set = require('set-value');
set(object, prop, value);
```

### Params

* `object` **{object}**: The object to set `value` on
* `prop` **{string}**: The property to set. Dot-notation may be used.
* `value` **{any}**: The value to set on `object[prop]`

## Examples

Updates and returns the given object:

```js
var obj = {};
set(obj, 'a.b.c', 'd');
console.log(obj);
//=> { a: { b: { c: 'd' } } }
```

### Escaping

**Escaping with backslashes**

Prevent set-value from splitting on a dot by prefixing it with backslashes:

```js
console.log(set({}, 'a\\.b.c', 'd'));
//=> { 'a.b': { c: 'd' } }

console.log(set({}, 'a\\.b\\.c', 'd'));
//=> { 'a.b.c': 'd' }
```

**Escaping with double-quotes or single-quotes**

Wrap double or single quotes around the string, or part of the string, that should not be split by set-value:

```js
console.log(set({}, '"a.b".c', 'd'));
//=> { 'a.b': { c: 'd' } }

console.log(set({}, "'a.b'.c", "d"));
//=> { 'a.b': { c: 'd' } }

console.log(set({}, '"this/is/a/.file.path"', 'd'));
//=> { 'this/is/a/file.path': 'd' }
```

### Bracket support

set-value does not split inside brackets or braces:

```js
console.log(set({}, '[a.b].c', 'd'));
//=> { '[a.b]': { c: 'd' } }

console.log(set({}, "(a.b).c", "d"));
//=> { '(a.b)': { c: 'd' } }

console.log(set({}, "<a.b>.c", "d"));
//=> { '<a.b>': { c: 'd' } }

console.log(set({}, "{a..b}.c", "d"));
//=> { '{a..b}': { c: 'd' } }
```

## History

### v2.0.0

* Adds support for escaping with double or single quotes. See [escaping](#escaping) for examples.
* Will no longer split inside brackets or braces. See [bracket support](#bracket-support) for examples.

If there are any regressions please create a [bug report](../../issues/new). Thanks!

## About

### Related projects

* [assign-value](https://www.npmjs.com/package/assign-value): Assign a value or extend a deeply nested property of an object using object path… [more](https://github.com/jonschlinkert/assign-value) | [homepage](https://github.com/jonschlinkert/assign-value "Assign a value or extend a deeply nested property of an object using object path notation.")
* [get-value](https://www.npmjs.com/package/get-value): Use property paths (`a.b.c`) to get a nested value from an object. | [homepage](https://github.com/jonschlinkert/get-value "Use property paths (`a.b.c`) to get a nested value from an object.")
* [has-value](https://www.npmjs.com/package/has-value): Returns true if a value exists, false if empty. Works with deeply nested values using… [more](https://github.com/jonschlinkert/has-value) | [homepage](https://github.com/jonschlinkert/has-value "Returns true if a value exists, false if empty. Works with deeply nested values using object paths.")
* [merge-value](https://www.npmjs.com/package/merge-value): Similar to assign-value but deeply merges object values or nested values using object path/dot notation. | [homepage](https://github.com/jonschlinkert/merge-value "Similar to assign-value but deeply merges object values or nested values using object path/dot notation.")
* [omit-value](https://www.npmjs.com/package/omit-value): Omit properties from an object or deeply nested property of an object using object path… [more](https://github.com/jonschlinkert/omit-value) | [homepage](https://github.com/jonschlinkert/omit-value "Omit properties from an object or deeply nested property of an object using object path notation.")
* [set-value](https://www.npmjs.com/package/set-value): Create nested values and any intermediaries using dot notation (`'a.b.c'`) paths. | [homepage](https://github.com/jonschlinkert/set-value "Create nested values and any intermediaries using dot notation (`'a.b.c'`) paths.")
* [union-value](https://www.npmjs.com/package/union-value): Set an array of unique values as the property of an object. Supports setting deeply… [more](https://github.com/jonschlinkert/union-value) | [homepage](https://github.com/jonschlinkert/union-value "Set an array of unique values as the property of an object. Supports setting deeply nested properties using using object-paths/dot notation.")
* [unset-value](https://www.npmjs.com/package/unset-value): Delete nested properties from an object using dot notation. | [homepage](https://github.com/jonschlinkert/unset-value "Delete nested properties from an object using dot notation.")

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

### Contributors

| **Commits** | **Contributor** | 
| --- | --- |
| 59 | [jonschlinkert](https://github.com/jonschlinkert) |
| 1 | [vadimdemedes](https://github.com/vadimdemedes) |
| 1 | [wtgtybhertgeghgtwtg](https://github.com/wtgtybhertgeghgtwtg) |

### Building docs

_(This project's readme.md is generated by [verb](https://github.com/verbose/verb-generate-readme), please don't edit the readme directly. Any changes to the readme must be made in the [.verb.md](.verb.md) readme template.)_

To generate the readme, run the following command:

```sh
$ npm install -g verbose/verb#dev verb-generate-readme && verb
```

### Running tests

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

### Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](https://twitter.com/jonschlinkert)

### License

Copyright © 2017, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT License](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.6.0, on June 21, 2017._