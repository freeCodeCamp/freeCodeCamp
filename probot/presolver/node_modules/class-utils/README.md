# class-utils [![NPM version](https://img.shields.io/npm/v/class-utils.svg?style=flat)](https://www.npmjs.com/package/class-utils) [![NPM monthly downloads](https://img.shields.io/npm/dm/class-utils.svg?style=flat)](https://npmjs.org/package/class-utils) [![NPM total downloads](https://img.shields.io/npm/dt/class-utils.svg?style=flat)](https://npmjs.org/package/class-utils) [![Linux Build Status](https://img.shields.io/travis/jonschlinkert/class-utils.svg?style=flat&label=Travis)](https://travis-ci.org/jonschlinkert/class-utils)

> Utils for working with JavaScript classes and prototype methods.

Please consider following this project's author, [Jon Schlinkert](https://github.com/jonschlinkert), and consider starring the project to show your :heart: and support.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save class-utils
```

## Usage

```js
var cu = require('class-utils');
```

## API

### [.has](index.js#L43)

Returns true if an array has any of the given elements, or an object has any of the give keys.

**Params**

* `obj` **{Object}**
* `val` **{String|Array}**
* `returns` **{Boolean}**

**Example**

```js
cu.has(['a', 'b', 'c'], 'c');
//=> true

cu.has(['a', 'b', 'c'], ['c', 'z']);
//=> true

cu.has({a: 'b', c: 'd'}, ['c', 'z']);
//=> true
```

### [.hasAll](index.js#L90)

Returns true if an array or object has all of the given values.

**Params**

* `val` **{Object|Array}**
* `values` **{String|Array}**
* `returns` **{Boolean}**

**Example**

```js
cu.hasAll(['a', 'b', 'c'], 'c');
//=> true

cu.hasAll(['a', 'b', 'c'], ['c', 'z']);
//=> false

cu.hasAll({a: 'b', c: 'd'}, ['c', 'z']);
//=> false
```

### [.arrayify](index.js#L117)

Cast the given value to an array.

**Params**

* `val` **{String|Array}**
* `returns` **{Array}**

**Example**

```js
cu.arrayify('foo');
//=> ['foo']

cu.arrayify(['foo']);
//=> ['foo']
```

### [.hasConstructor](index.js#L152)

Returns true if a value has a `contructor`

**Params**

* `value` **{Object}**
* `returns` **{Boolean}**

**Example**

```js
cu.hasConstructor({});
//=> true

cu.hasConstructor(Object.create(null));
//=> false
```

### [.nativeKeys](index.js#L174)

Get the native `ownPropertyNames` from the constructor of the given `object`. An empty array is returned if the object does not have a constructor.

**Params**

* `obj` **{Object}**: Object that has a `constructor`.
* `returns` **{Array}**: Array of keys.

**Example**

```js
cu.nativeKeys({a: 'b', b: 'c', c: 'd'})
//=> ['a', 'b', 'c']

cu.nativeKeys(function(){})
//=> ['length', 'caller']
```

### [.getDescriptor](index.js#L208)

Returns property descriptor `key` if it's an "own" property of the given object.

**Params**

* `obj` **{Object}**
* `key` **{String}**
* `returns` **{Object}**: Returns descriptor `key`

**Example**

```js
function App() {}
Object.defineProperty(App.prototype, 'count', {
  get: function() {
    return Object.keys(this).length;
  }
});
cu.getDescriptor(App.prototype, 'count');
// returns:
// {
//   get: [Function],
//   set: undefined,
//   enumerable: false,
//   configurable: false
// }
```

### [.copyDescriptor](index.js#L238)

Copy a descriptor from one object to another.

**Params**

* `receiver` **{Object}**
* `provider` **{Object}**
* `name` **{String}**
* `returns` **{Object}**

**Example**

```js
function App() {}
Object.defineProperty(App.prototype, 'count', {
  get: function() {
    return Object.keys(this).length;
  }
});
var obj = {};
cu.copyDescriptor(obj, App.prototype, 'count');
```

### [.copy](index.js#L264)

Copy static properties, prototype properties, and descriptors
from one object to another.

**Params**

* `receiver` **{Object}**
* `provider` **{Object}**
* `omit` **{String|Array}**: One or more properties to omit
* `returns` **{Object}**

### [.inherit](index.js#L299)

Inherit the static properties, prototype properties, and descriptors
from of an object.

**Params**

* `receiver` **{Object}**
* `provider` **{Object}**
* `omit` **{String|Array}**: One or more properties to omit
* `returns` **{Object}**

### [.extend](index.js#L343)

Returns a function for extending the static properties, prototype properties, and descriptors from the `Parent` constructor onto `Child` constructors.

**Params**

* `Parent` **{Function}**: Parent ctor
* `extend` **{Function}**: Optional extend function to handle custom extensions. Useful when updating methods that require a specific prototype.
* `Child` **{Function}**: Child ctor
* `proto` **{Object}**: Optionally pass additional prototype properties to inherit.
* `returns` **{Object}**

**Example**

```js
var extend = cu.extend(Parent);
Parent.extend(Child);

// optional methods
Parent.extend(Child, {
  foo: function() {},
  bar: function() {}
});
```

### [.bubble](index.js#L356)

Bubble up events emitted from static methods on the Parent ctor.

**Params**

* `Parent` **{Object}**
* `events` **{Array}**: Event names to bubble up

## About

<details>
<summary><strong>Contributing</strong></summary>

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

</details>

<details>
<summary><strong>Running Tests</strong></summary>

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

</details>
<details>
<summary><strong>Building docs</strong></summary>

_(This project's readme.md is generated by [verb](https://github.com/verbose/verb-generate-readme), please don't edit the readme directly. Any changes to the readme must be made in the [.verb.md](.verb.md) readme template.)_

To generate the readme, run the following command:

```sh
$ npm install -g verbose/verb#dev verb-generate-readme && verb
```

</details>

### Related projects

You might also be interested in these projects:

* [define-property](https://www.npmjs.com/package/define-property): Define a non-enumerable property on an object. Uses Reflect.defineProperty when available, otherwise Object.defineProperty. | [homepage](https://github.com/jonschlinkert/define-property "Define a non-enumerable property on an object. Uses Reflect.defineProperty when available, otherwise Object.defineProperty.")
* [delegate-properties](https://www.npmjs.com/package/delegate-properties): Deep-clone properties from one object to another and make them non-enumerable, or make existing properties… [more](https://github.com/jonschlinkert/delegate-properties) | [homepage](https://github.com/jonschlinkert/delegate-properties "Deep-clone properties from one object to another and make them non-enumerable, or make existing properties on an object non-enumerable.")
* [is-descriptor](https://www.npmjs.com/package/is-descriptor): Returns true if a value has the characteristics of a valid JavaScript descriptor. Works for… [more](https://github.com/jonschlinkert/is-descriptor) | [homepage](https://github.com/jonschlinkert/is-descriptor "Returns true if a value has the characteristics of a valid JavaScript descriptor. Works for data descriptors and accessor descriptors.")

### Contributors

| **Commits** | **Contributor** | 
| --- | --- |
| 34 | [jonschlinkert](https://github.com/jonschlinkert) |
| 8 | [doowb](https://github.com/doowb) |
| 2 | [wtgtybhertgeghgtwtg](https://github.com/wtgtybhertgeghgtwtg) |

### Author

**Jon Schlinkert**

* [linkedin/in/jonschlinkert](https://linkedin.com/in/jonschlinkert)
* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](https://twitter.com/jonschlinkert)

### License

Copyright © 2018, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT License](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.6.0, on January 11, 2018._