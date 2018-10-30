# snapdragon-node [![NPM version](https://img.shields.io/npm/v/snapdragon-node.svg?style=flat)](https://www.npmjs.com/package/snapdragon-node) [![NPM monthly downloads](https://img.shields.io/npm/dm/snapdragon-node.svg?style=flat)](https://npmjs.org/package/snapdragon-node) [![NPM total downloads](https://img.shields.io/npm/dt/snapdragon-node.svg?style=flat)](https://npmjs.org/package/snapdragon-node) [![Linux Build Status](https://img.shields.io/travis/jonschlinkert/snapdragon-node.svg?style=flat&label=Travis)](https://travis-ci.org/jonschlinkert/snapdragon-node)

> Snapdragon utility for creating a new AST node in custom code, such as plugins.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save snapdragon-node
```

## Usage

With [snapdragon](https://github.com/jonschlinkert/snapdragon) v0.9.0 and higher you can use `this.node()` to create a new `Node`, whenever it makes sense.

```js
var Node = require('snapdragon-node');
var Snapdragon = require('snapdragon');
var snapdragon = new Snapdragon();

// example usage inside a parser visitor function
snapdragon.parser.set('foo', function() {
  // get the current "start" position
  var pos = this.position();

  // returns the match if regex matches the substring 
  // at the current position on `parser.input`
  var match = this.match(/foo/);
  if (match) {
    // call "pos" on the node, to set the start and end 
    // positions, and return the node to push it onto the AST
    // (snapdragon will push the node onto the correct
    // nodes array, based on the stack)
    return pos(new Node({type: 'bar', val: match[0]}));
  }
});
```

## API

### [Node](index.js#L22)

Create a new AST `Node` with the given `val` and `type`.

**Params**

* `val` **{String|Object}**: Pass a matched substring, or an object to merge onto the node.
* `type` **{String}**: The node type to use when `val` is a string.
* `returns` **{Object}**: node instance

**Example**

```js
var node = new Node('*', 'Star');
var node = new Node({type: 'star', val: '*'});
```

### [.isNode](index.js#L61)

Returns true if the given value is a node.

**Params**

* `node` **{Object}**
* `returns` **{Boolean}**

**Example**

```js
var Node = require('snapdragon-node');
var node = new Node({type: 'foo'});
console.log(Node.isNode(node)); //=> true
console.log(Node.isNode({})); //=> false
```

### [.define](index.js#L80)

Define a non-enumberable property on the node instance. Useful for adding properties that shouldn't be extended or visible during debugging.

**Params**

* `name` **{String}**
* `val` **{any}**
* `returns` **{Object}**: returns the node instance

**Example**

```js
var node = new Node();
node.define('foo', 'something non-enumerable');
```

### [.isEmpty](index.js#L100)

Returns true if `node.val` is an empty string, or `node.nodes` does not contain any non-empty text nodes.

**Params**

* `fn` **{Function}**: (optional) Filter function that is called on `node` and/or child nodes. `isEmpty` will return false immediately when the filter function returns false on any nodes.
* `returns` **{Boolean}**

**Example**

```js
var node = new Node({type: 'text'});
node.isEmpty(); //=> true
node.val = 'foo';
node.isEmpty(); //=> false
```

### [.push](index.js#L118)

Given node `foo` and node `bar`, push node `bar` onto `foo.nodes`, and set `foo` as `bar.parent`.

**Params**

* `node` **{Object}**
* `returns` **{Number}**: Returns the length of `node.nodes`

**Example**

```js
var foo = new Node({type: 'foo'});
var bar = new Node({type: 'bar'});
foo.push(bar);
```

### [.unshift](index.js#L140)

Given node `foo` and node `bar`, unshift node `bar` onto `foo.nodes`, and set `foo` as `bar.parent`.

**Params**

* `node` **{Object}**
* `returns` **{Number}**: Returns the length of `node.nodes`

**Example**

```js
var foo = new Node({type: 'foo'});
var bar = new Node({type: 'bar'});
foo.unshift(bar);
```

### [.pop](index.js#L167)

Pop a node from `node.nodes`.

* `returns` **{Number}**: Returns the popped `node`

**Example**

```js
var node = new Node({type: 'foo'});
node.push(new Node({type: 'a'}));
node.push(new Node({type: 'b'}));
node.push(new Node({type: 'c'}));
node.push(new Node({type: 'd'}));
console.log(node.nodes.length);
//=> 4
node.pop();
console.log(node.nodes.length);
//=> 3
```

### [.shift](index.js#L190)

Shift a node from `node.nodes`.

* `returns` **{Object}**: Returns the shifted `node`

**Example**

```js
var node = new Node({type: 'foo'});
node.push(new Node({type: 'a'}));
node.push(new Node({type: 'b'}));
node.push(new Node({type: 'c'}));
node.push(new Node({type: 'd'}));
console.log(node.nodes.length);
//=> 4
node.shift();
console.log(node.nodes.length);
//=> 3
```

### [.remove](index.js#L205)

Remove `node` from `node.nodes`.

**Params**

* `node` **{Object}**
* `returns` **{Object}**: Returns the removed node.

**Example**

```js
node.remove(childNode);
```

### [.find](index.js#L231)

Get the first child node from `node.nodes` that matches the given `type`. If `type` is a number, the child node at that index is returned.

**Params**

* `type` **{String}**
* `returns` **{Object}**: Returns a child node or undefined.

**Example**

```js
var child = node.find(1); //<= index of the node to get
var child = node.find('foo'); //<= node.type of a child node
var child = node.find(/^(foo|bar)$/); //<= regex to match node.type
var child = node.find(['foo', 'bar']); //<= array of node.type(s)
```

### [.isType](index.js#L249)

Return true if the node is the given `type`.

**Params**

* `type` **{String}**
* `returns` **{Boolean}**

**Example**

```js
var node = new Node({type: 'bar'});
cosole.log(node.isType('foo'));          // false
cosole.log(node.isType(/^(foo|bar)$/));  // true
cosole.log(node.isType(['foo', 'bar'])); // true
```

### [.hasType](index.js#L270)

Return true if the `node.nodes` has the given `type`.

**Params**

* `type` **{String}**
* `returns` **{Boolean}**

**Example**

```js
var foo = new Node({type: 'foo'});
var bar = new Node({type: 'bar'});
foo.push(bar);

cosole.log(foo.hasType('qux'));          // false
cosole.log(foo.hasType(/^(qux|bar)$/));  // true
cosole.log(foo.hasType(['qux', 'bar'])); // true
```

* `returns` **{Array}**

**Example**

```js
var foo = new Node({type: 'foo'});
var bar = new Node({type: 'bar'});
var baz = new Node({type: 'baz'});
foo.push(bar);
foo.push(baz);

console.log(bar.siblings.length) // 2
console.log(baz.siblings.length) // 2
```

* `returns` **{Number}**

**Example**

```js
var foo = new Node({type: 'foo'});
var bar = new Node({type: 'bar'});
var baz = new Node({type: 'baz'});
var qux = new Node({type: 'qux'});
foo.push(bar);
foo.push(baz);
foo.unshift(qux);

console.log(bar.index) // 1
console.log(baz.index) // 2
console.log(qux.index) // 0
```

* `returns` **{Object}**

**Example**

```js
var foo = new Node({type: 'foo'});
var bar = new Node({type: 'bar'});
var baz = new Node({type: 'baz'});
foo.push(bar);
foo.push(baz);

console.log(baz.prev.type) // 'bar'
```

* `returns` **{Object}**

**Example**

```js
var foo = new Node({type: 'foo'});
var bar = new Node({type: 'bar'});
var baz = new Node({type: 'baz'});
foo.push(bar);
foo.push(baz);

console.log(bar.siblings.length) // 2
console.log(baz.siblings.length) // 2
```

* `returns` **{Object}**: The first node, or undefiend

**Example**

```js
var foo = new Node({type: 'foo'});
var bar = new Node({type: 'bar'});
var baz = new Node({type: 'baz'});
var qux = new Node({type: 'qux'});
foo.push(bar);
foo.push(baz);
foo.push(qux);

console.log(foo.first.type) // 'bar'
```

* `returns` **{Object}**: The last node, or undefiend

**Example**

```js
var foo = new Node({type: 'foo'});
var bar = new Node({type: 'bar'});
var baz = new Node({type: 'baz'});
var qux = new Node({type: 'qux'});
foo.push(bar);
foo.push(baz);
foo.push(qux);

console.log(foo.last.type) // 'qux'
```

* `returns` **{Object}**: The last node, or undefiend

**Example**

```js
var foo = new Node({type: 'foo'});
var bar = new Node({type: 'bar'});
var baz = new Node({type: 'baz'});
var qux = new Node({type: 'qux'});
foo.push(bar);
foo.push(baz);
foo.push(qux);

console.log(foo.last.type) // 'qux'
```

## Release history

Changelog entries are classified using the following labels from [keep-a-changelog](https://github.com/olivierlacan/keep-a-changelog):

* `added`: for new features
* `changed`: for changes in existing functionality
* `deprecated`: for once-stable features removed in upcoming releases
* `removed`: for deprecated features removed in this release
* `fixed`: for any bug fixes

Custom labels used in this changelog:

* `dependencies`: bumps dependencies
* `housekeeping`: code re-organization, minor edits, or other changes that don't fit in one of the other categories.

### [2.0.0] - 2017-05-01

**Changed**

* `.unshiftNode` was renamed to [.unshift](#unshift)
* `.pushNode` was renamed to [.push](#push)
* `.getNode` was renamed to [.find](#find)

**Added**

* [.isNode](#isNode)
* [.isEmpty](#isEmpty)
* [.pop](#pop)
* [.shift](#shift)
* [.remove](#remove)

### [0.1.0]

First release.

## About

### Related projects

* [breakdance](https://www.npmjs.com/package/breakdance): Breakdance is a node.js library for converting HTML to markdown. Highly pluggable, flexible and easy… [more](http://breakdance.io) | [homepage](http://breakdance.io "Breakdance is a node.js library for converting HTML to markdown. Highly pluggable, flexible and easy to use. It's time for your markup to get down.")
* [snapdragon-capture](https://www.npmjs.com/package/snapdragon-capture): Snapdragon plugin that adds a capture method to the parser instance. | [homepage](https://github.com/jonschlinkert/snapdragon-capture "Snapdragon plugin that adds a capture method to the parser instance.")
* [snapdragon-cheerio](https://www.npmjs.com/package/snapdragon-cheerio): Snapdragon plugin for converting a cheerio AST to a snapdragon AST. | [homepage](https://github.com/jonschlinkert/snapdragon-cheerio "Snapdragon plugin for converting a cheerio AST to a snapdragon AST.")
* [snapdragon-util](https://www.npmjs.com/package/snapdragon-util): Utilities for the snapdragon parser/compiler. | [homepage](https://github.com/jonschlinkert/snapdragon-util "Utilities for the snapdragon parser/compiler.")
* [snapdragon](https://www.npmjs.com/package/snapdragon): Easy-to-use plugin system for creating powerful, fast and versatile parsers and compilers, with built-in source-map… [more](https://github.com/jonschlinkert/snapdragon) | [homepage](https://github.com/jonschlinkert/snapdragon "Easy-to-use plugin system for creating powerful, fast and versatile parsers and compilers, with built-in source-map support.")

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

Please read the [contributing guide](.github/contributing.md) for advice on opening issues, pull requests, and coding standards.

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

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.6.0, on June 25, 2017._