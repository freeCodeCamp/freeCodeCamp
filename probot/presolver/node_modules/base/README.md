<p align="center">
  <a href="https://github.com/node-base/base">
    <img height="250" width="250" src="https://raw.githubusercontent.com/node-base/base/master/docs/logo.png">
  </a>
</p>

# base [![NPM version](https://img.shields.io/npm/v/base.svg?style=flat)](https://www.npmjs.com/package/base) [![NPM monthly downloads](https://img.shields.io/npm/dm/base.svg?style=flat)](https://npmjs.org/package/base)  [![NPM total downloads](https://img.shields.io/npm/dt/base.svg?style=flat)](https://npmjs.org/package/base) [![Linux Build Status](https://img.shields.io/travis/node-base/base.svg?style=flat&label=Travis)](https://travis-ci.org/node-base/base)

> base is the foundation for creating modular, unit testable and highly pluggable node.js applications, starting with a handful of common methods, like `set`, `get`, `del` and `use`.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save base
```

## What is Base?

Base is a framework for rapidly creating high quality node.js applications, using plugins like building blocks.

### Guiding principles

The core team follows these principles to help guide API decisions:

* **Compact API surface**: The smaller the API surface, the easier the library will be to learn and use.
* **Easy to extend**: Implementors can use any npm package, and write plugins in pure JavaScript. If you're building complex apps, Base simplifies inheritance.
* **Easy to test**: No special setup should be required to unit test `Base` or base plugins

### Minimal API surface

[The API](#api) was designed to provide only the minimum necessary functionality for creating a useful application, with or without [plugins](#plugins).

**Base core**

Base itself ships with only a handful of [useful methods](#api), such as:

* `.set`: for setting values on the instance
* `.get`: for getting values from the instance
* `.has`: to check if a property exists on the instance
* `.define`: for setting non-enumerable values on the instance
* `.use`: for adding plugins

**Be generic**

When deciding on method to add or remove, we try to answer these questions:

1. Will all or most Base applications need this method?
2. Will this method encourage practices or enforce conventions that are beneficial to implementors?
3. Can or should this be done in a plugin instead?

### Composability

**Plugin system**

It couldn't be easier to extend Base with any features or custom functionality you can think of.

Base plugins are just functions that take an instance of `Base`:

```js
var base = new Base();

function plugin(base) {
  // do plugin stuff, in pure JavaScript
}
// use the plugin
base.use(plugin);
```

**Inheritance**

Easily inherit Base using `.extend`:

```js
var Base = require('base');

function MyApp() {
  Base.call(this);
}
Base.extend(MyApp);

var app = new MyApp();
app.set('a', 'b');
app.get('a');
//=> 'b';
```

**Inherit or instantiate with a namespace**

By default, the `.get`, `.set` and `.has` methods set and get values from the root of the `base` instance. You can customize this using the `.namespace` method exposed on the exported function. For example:

```js
var Base = require('base');
// get and set values on the `base.cache` object
var base = Base.namespace('cache');

var app = base();
app.set('foo', 'bar');
console.log(app.cache.foo);
//=> 'bar'
```

## API

**Usage**

```js
var Base = require('base');
var app = new Base();
app.set('foo', 'bar');
console.log(app.foo);
//=> 'bar'
```

### [Base](index.js#L44)

Create an instance of `Base` with the given `config` and `options`.

**Params**

* `config` **{Object}**: If supplied, this object is passed to [cache-base](https://github.com/jonschlinkert/cache-base) to merge onto the the instance upon instantiation.
* `options` **{Object}**: If supplied, this object is used to initialize the `base.options` object.

**Example**

```js
// initialize with `config` and `options`
var app = new Base({isApp: true}, {abc: true});
app.set('foo', 'bar');

// values defined with the given `config` object will be on the root of the instance
console.log(app.baz); //=> undefined
console.log(app.foo); //=> 'bar'
// or use `.get`
console.log(app.get('isApp')); //=> true
console.log(app.get('foo')); //=> 'bar'

// values defined with the given `options` object will be on `app.options
console.log(app.options.abc); //=> true
```

### [.is](index.js#L107)

Set the given `name` on `app._name` and `app.is*` properties. Used for doing lookups in plugins.

**Params**

* `name` **{String}**
* `returns` **{Boolean}**

**Example**

```js
app.is('foo');
console.log(app._name);
//=> 'foo'
console.log(app.isFoo);
//=> true
app.is('bar');
console.log(app.isFoo);
//=> true
console.log(app.isBar);
//=> true
console.log(app._name);
//=> 'bar'
```

### [.isRegistered](index.js#L145)

Returns true if a plugin has already been registered on an instance.

Plugin implementors are encouraged to use this first thing in a plugin
to prevent the plugin from being called more than once on the same
instance.

**Params**

* `name` **{String}**: The plugin name.
* `register` **{Boolean}**: If the plugin if not already registered, to record it as being registered pass `true` as the second argument.
* `returns` **{Boolean}**: Returns true if a plugin is already registered.

**Events**

* `emits`: `plugin` Emits the name of the plugin being registered. Useful for unit tests, to ensure plugins are only registered once.

**Example**

```js
var base = new Base();
base.use(function(app) {
  if (app.isRegistered('myPlugin')) return;
  // do stuff to `app`
});

// to also record the plugin as being registered
base.use(function(app) {
  if (app.isRegistered('myPlugin', true)) return;
  // do stuff to `app`
});
```

### [.use](index.js#L175)

Define a plugin function to be called immediately upon init. Plugins are chainable and expose the following arguments to the plugin function:

* `app`: the current instance of `Base`
* `base`: the [first ancestor instance](#base) of `Base`

**Params**

* `fn` **{Function}**: plugin function to call
* `returns` **{Object}**: Returns the item instance for chaining.

**Example**

```js
var app = new Base()
  .use(foo)
  .use(bar)
  .use(baz)
```

### [.define](index.js#L197)

The `.define` method is used for adding non-enumerable property on the instance. Dot-notation is **not supported** with `define`.

**Params**

* `key` **{String}**: The name of the property to define.
* `value` **{any}**
* `returns` **{Object}**: Returns the instance for chaining.

**Example**

```js
// arbitrary `render` function using lodash `template`
app.define('render', function(str, locals) {
  return _.template(str)(locals);
});
```

### [.mixin](index.js#L222)

Mix property `key` onto the Base prototype. If base is inherited using `Base.extend` this method will be overridden by a new `mixin` method that will only add properties to the prototype of the inheriting application.

**Params**

* `key` **{String}**
* `val` **{Object|Array}**
* `returns` **{Object}**: Returns the `base` instance for chaining.

**Example**

```js
app.mixin('foo', function() {
  // do stuff
});
```

### [.base](index.js#L268)

Getter/setter used when creating nested instances of `Base`, for storing a reference to the first ancestor instance. This works by setting an instance of `Base` on the `parent` property of a "child" instance. The `base` property defaults to the current instance if no `parent` property is defined.

**Example**

```js
// create an instance of `Base`, this is our first ("base") instance
var first = new Base();
first.foo = 'bar'; // arbitrary property, to make it easier to see what's happening later

// create another instance
var second = new Base();
// create a reference to the first instance (`first`)
second.parent = first;

// create another instance
var third = new Base();
// create a reference to the previous instance (`second`)
// repeat this pattern every time a "child" instance is created
third.parent = second;

// we can always access the first instance using the `base` property
console.log(first.base.foo);
//=> 'bar'
console.log(second.base.foo);
//=> 'bar'
console.log(third.base.foo);
//=> 'bar'
// and now you know how to get to third base ;)
```

### [#use](index.js#L293)

Static method for adding global plugin functions that will be added to an instance when created.

**Params**

* `fn` **{Function}**: Plugin function to use on each instance.
* `returns` **{Object}**: Returns the `Base` constructor for chaining

**Example**

```js
Base.use(function(app) {
  app.foo = 'bar';
});
var app = new Base();
console.log(app.foo);
//=> 'bar'
```

### [#extend](index.js#L337)

Static method for inheriting the prototype and static methods of the `Base` class. This method greatly simplifies the process of creating inheritance-based applications. See [static-extend](https://github.com/jonschlinkert/static-extend) for more details.

**Params**

* `Ctor` **{Function}**: constructor to extend
* `methods` **{Object}**: Optional prototype properties to mix in.
* `returns` **{Object}**: Returns the `Base` constructor for chaining

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

### [#mixin](index.js#L379)

Used for adding methods to the `Base` prototype, and/or to the prototype of child instances. When a mixin function returns a function, the returned function is pushed onto the `.mixins` array, making it available to be used on inheriting classes whenever `Base.mixins()` is called (e.g. `Base.mixins(Child)`).

**Params**

* `fn` **{Function}**: Function to call
* `returns` **{Object}**: Returns the `Base` constructor for chaining

**Example**

```js
Base.mixin(function(proto) {
  proto.foo = function(msg) {
    return 'foo ' + msg;
  };
});
```

### [#mixins](index.js#L401)

Static method for running global mixin functions against a child constructor. Mixins must be registered before calling this method.

**Params**

* `Child` **{Function}**: Constructor function of a child class
* `returns` **{Object}**: Returns the `Base` constructor for chaining

**Example**

```js
Base.extend(Child);
Base.mixins(Child);
```

### [#inherit](index.js#L420)

Similar to `util.inherit`, but copies all static properties, prototype properties, and getters/setters from `Provider` to `Receiver`. See [class-utils](https://github.com/jonschlinkert/class-utils#inherit) for more details.

**Params**

* `Receiver` **{Function}**: Receiving (child) constructor
* `Provider` **{Function}**: Providing (parent) constructor
* `returns` **{Object}**: Returns the `Base` constructor for chaining

**Example**

```js
Base.inherit(Foo, Bar);
```

## In the wild

The following node.js applications were built with `Base`:

* [assemble](https://github.com/assemble/assemble)
* [verb](https://github.com/verbose/verb)
* [generate](https://github.com/generate/generate)
* [scaffold](https://github.com/jonschlinkert/scaffold)
* [boilerplate](https://github.com/jonschlinkert/boilerplate)

## Test coverage

```
Statements   : 98.91% ( 91/92 )
Branches     : 92.86% ( 26/28 )
Functions    : 100% ( 17/17 )
Lines        : 98.9% ( 90/91 )
```

## History

### v0.11.2

* fixes https://github.com/micromatch/micromatch/issues/99

### v0.11.0

**Breaking changes**

* Static `.use` and `.run` methods are now non-enumerable

### v0.9.0

**Breaking changes**

* `.is` no longer takes a function, a string must be passed
* all remaining `.debug` code has been removed
* `app._namespace` was removed (related to `debug`)
* `.plugin`, `.use`, and `.define` no longer emit events
* `.assertPlugin` was removed
* `.lazy` was removed

## About

### Related projects

* [base-cwd](https://www.npmjs.com/package/base-cwd): Base plugin that adds a getter/setter for the current working directory. | [homepage](https://github.com/node-base/base-cwd "Base plugin that adds a getter/setter for the current working directory.")
* [base-data](https://www.npmjs.com/package/base-data): adds a `data` method to base-methods. | [homepage](https://github.com/node-base/base-data "adds a `data` method to base-methods.")
* [base-fs](https://www.npmjs.com/package/base-fs): base-methods plugin that adds vinyl-fs methods to your 'base' application for working with the file… [more](https://github.com/node-base/base-fs) | [homepage](https://github.com/node-base/base-fs "base-methods plugin that adds vinyl-fs methods to your 'base' application for working with the file system, like src, dest, copy and symlink.")
* [base-generators](https://www.npmjs.com/package/base-generators): Adds project-generator support to your `base` application. | [homepage](https://github.com/node-base/base-generators "Adds project-generator support to your `base` application.")
* [base-option](https://www.npmjs.com/package/base-option): Adds a few options methods to base, like `option`, `enable` and `disable`. See the readme… [more](https://github.com/node-base/base-option) | [homepage](https://github.com/node-base/base-option "Adds a few options methods to base, like `option`, `enable` and `disable`. See the readme for the full API.")
* [base-pipeline](https://www.npmjs.com/package/base-pipeline): base-methods plugin that adds pipeline and plugin methods for dynamically composing streaming plugin pipelines. | [homepage](https://github.com/node-base/base-pipeline "base-methods plugin that adds pipeline and plugin methods for dynamically composing streaming plugin pipelines.")
* [base-pkg](https://www.npmjs.com/package/base-pkg): Plugin for adding a `pkg` method that exposes pkg-store to your base application. | [homepage](https://github.com/node-base/base-pkg "Plugin for adding a `pkg` method that exposes pkg-store to your base application.")
* [base-plugins](https://www.npmjs.com/package/base-plugins): Adds 'smart plugin' support to your base application. | [homepage](https://github.com/node-base/base-plugins "Adds 'smart plugin' support to your base application.")
* [base-questions](https://www.npmjs.com/package/base-questions): Plugin for base-methods that adds methods for prompting the user and storing the answers on… [more](https://github.com/node-base/base-questions) | [homepage](https://github.com/node-base/base-questions "Plugin for base-methods that adds methods for prompting the user and storing the answers on a project-by-project basis.")
* [base-store](https://www.npmjs.com/package/base-store): Plugin for getting and persisting config values with your base-methods application. Adds a 'store' object… [more](https://github.com/node-base/base-store) | [homepage](https://github.com/node-base/base-store "Plugin for getting and persisting config values with your base-methods application. Adds a 'store' object that exposes all of the methods from the data-store library. Also now supports sub-stores!")
* [base-task](https://www.npmjs.com/package/base-task): base plugin that provides a very thin wrapper around [https://github.com/doowb/composer](https://github.com/doowb/composer) for adding task methods to… [more](https://github.com/node-base/base-task) | [homepage](https://github.com/node-base/base-task "base plugin that provides a very thin wrapper around <https://github.com/doowb/composer> for adding task methods to your application.")

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

### Contributors

| **Commits** | **Contributor** |  
| --- | --- |  
| 141 | [jonschlinkert](https://github.com/jonschlinkert) |  
| 30  | [doowb](https://github.com/doowb) |  
| 3   | [charlike](https://github.com/charlike) |  
| 1   | [criticalmash](https://github.com/criticalmash) |  
| 1   | [wtgtybhertgeghgtwtg](https://github.com/wtgtybhertgeghgtwtg) |  

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

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.6.0, on September 07, 2017._