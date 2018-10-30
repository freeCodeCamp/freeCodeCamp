# cache-base [![NPM version](https://img.shields.io/npm/v/cache-base.svg?style=flat)](https://www.npmjs.com/package/cache-base) [![NPM monthly downloads](https://img.shields.io/npm/dm/cache-base.svg?style=flat)](https://npmjs.org/package/cache-base) [![NPM total downloads](https://img.shields.io/npm/dt/cache-base.svg?style=flat)](https://npmjs.org/package/cache-base) [![Linux Build Status](https://img.shields.io/travis/jonschlinkert/cache-base.svg?style=flat&label=Travis)](https://travis-ci.org/jonschlinkert/cache-base)

> Basic object cache with `get`, `set`, `del`, and `has` methods for node.js/javascript projects.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save cache-base
```

## Usage

```js
var Cache = require('cache-base');

// instantiate
var app = new Cache();

// set values
app.set('a', 'b');
app.set('c.d', 'e');

// get values
app.get('a');
//=> 'b'
app.get('c');
//=> {d: 'e'}

console.log(app.cache);
//=> {a: 'b'}
```

**Inherit**

```js
var util = require('util');
var Cache = require('cache-base');

function MyApp() {
  Cache.call(this);
}
util.inherits(MyApp, Cache);

var app = new MyApp();
app.set('a', 'b');
app.get('a');
//=> 'b'
```

**Namespace**

Define a custom property for storing values.

```js
var Cache = require('cache-base').namespace('data');
var app = new Cache();
app.set('a', 'b');
console.log(app.data);
//=> {a: 'b'}
```

## API

### [namespace](index.js#L29)

Create a `Cache` constructor that when instantiated will store values on the given `prop`.

**Params**

* `prop` **{String}**: The property name to use for storing values.
* `returns` **{Function}**: Returns a custom `Cache` constructor

**Example**

```js
var Cache = require('cache-base').namespace('data');
var cache = new Cache();

cache.set('foo', 'bar');
//=> {data: {foo: 'bar'}}
```

### [Cache](index.js#L43)

Create a new `Cache`. Internally the `Cache` constructor is created using the `namespace` function, with `cache` defined as the storage object.

**Params**

* `cache` **{Object}**: Optionally pass an object to initialize with.

**Example**

```js
var app = new Cache();
```

### [.set](index.js#L84)

Assign `value` to `key`. Also emits `set` with the key and value.

**Params**

* `key` **{String}**
* `value` **{any}**
* `returns` **{Object}**: Returns the instance for chaining.

**Events**

* `emits`: `set` with `key` and `value` as arguments.

**Example**

```js
app.on('set', function(key, val) {
  // do something when `set` is emitted
});

app.set(key, value);

// also takes an object or array
app.set({name: 'Halle'});
app.set([{foo: 'bar'}, {baz: 'quux'}]);
console.log(app);
//=> {name: 'Halle', foo: 'bar', baz: 'quux'}
```

### [.union](index.js#L114)

Union `array` to `key`. Also emits `set` with the key and value.

**Params**

* `key` **{String}**
* `value` **{any}**
* `returns` **{Object}**: Returns the instance for chaining.

**Example**

```js
app.union('a.b', ['foo']);
app.union('a.b', ['bar']);
console.log(app.get('a'));
//=> {b: ['foo', 'bar']}
```

### [.get](index.js#L144)

Return the value of `key`. Dot notation may be used to get [nested property values](https://github.com/jonschlinkert/get-value).

**Params**

* `key` **{String}**: The name of the property to get. Dot-notation may be used.
* `returns` **{any}**: Returns the value of `key`

**Events**

* `emits`: `get` with `key` and `value` as arguments.

**Example**

```js
app.set('a.b.c', 'd');
app.get('a.b');
//=> {c: 'd'}

app.get(['a', 'b']);
//=> {c: 'd'}
```

### [.has](index.js#L171)

Return true if app has a stored value for `key`, false only if value is `undefined`.

**Params**

* `key` **{String}**
* `returns` **{Boolean}**

**Events**

* `emits`: `has` with `key` and true or false as arguments.

**Example**

```js
app.set('foo', 'bar');
app.has('foo');
//=> true
```

### [.del](index.js#L199)

Delete one or more properties from the instance.

**Params**

* `key` **{String|Array}**: Property name or array of property names.
* `returns` **{Object}**: Returns the instance for chaining.

**Events**

* `emits`: `del` with the `key` as the only argument.

**Example**

```js
app.del(); // delete all
// or
app.del('foo');
// or
app.del(['foo', 'bar']);
```

### [.clear](index.js#L218)

Reset the entire cache to an empty object.

**Example**

```js
app.clear();
```

### [.visit](index.js#L235)

Visit `method` over the properties in the given object, or map
visit over the object-elements in an array.

**Params**

* `method` **{String}**: The name of the `base` method to call.
* `val` **{Object|Array}**: The object or array to iterate over.
* `returns` **{Object}**: Returns the instance for chaining.

## About

### Related projects

* [base-methods](https://www.npmjs.com/package/base-methods): base-methods is the foundation for creating modular, unit testable and highly pluggable node.js applications, starting… [more](https://github.com/jonschlinkert/base-methods) | [homepage](https://github.com/jonschlinkert/base-methods "base-methods is the foundation for creating modular, unit testable and highly pluggable node.js applications, starting with a handful of common methods, like `set`, `get`, `del` and `use`.")
* [get-value](https://www.npmjs.com/package/get-value): Use property paths (`a.b.c`) to get a nested value from an object. | [homepage](https://github.com/jonschlinkert/get-value "Use property paths (`a.b.c`) to get a nested value from an object.")
* [has-value](https://www.npmjs.com/package/has-value): Returns true if a value exists, false if empty. Works with deeply nested values using… [more](https://github.com/jonschlinkert/has-value) | [homepage](https://github.com/jonschlinkert/has-value "Returns true if a value exists, false if empty. Works with deeply nested values using object paths.")
* [option-cache](https://www.npmjs.com/package/option-cache): Simple API for managing options in JavaScript applications. | [homepage](https://github.com/jonschlinkert/option-cache "Simple API for managing options in JavaScript applications.")
* [set-value](https://www.npmjs.com/package/set-value): Create nested values and any intermediaries using dot notation (`'a.b.c'`) paths. | [homepage](https://github.com/jonschlinkert/set-value "Create nested values and any intermediaries using dot notation (`'a.b.c'`) paths.")
* [unset-value](https://www.npmjs.com/package/unset-value): Delete nested properties from an object using dot notation. | [homepage](https://github.com/jonschlinkert/unset-value "Delete nested properties from an object using dot notation.")

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

### Contributors

| **Commits** | **Contributor** | 
| --- | --- |
| 54 | [jonschlinkert](https://github.com/jonschlinkert) |
| 2 | [wtgtybhertgeghgtwtg](https://github.com/wtgtybhertgeghgtwtg) |

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

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.6.0, on July 22, 2017._