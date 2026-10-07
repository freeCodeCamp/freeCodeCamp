# Immutable collections for JavaScript

[![Build Status](https://github.com/immutable-js/immutable-js/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/immutable-js/immutable-js/actions/workflows/ci.yml?query=branch%3Amain) [Chat on slack](https://immutable-js.slack.com)

[Read the docs](https://immutable-js.com/docs/) and eat your vegetables.

Docs are automatically generated from [README.md][] and [immutable.d.ts][].
Please contribute! Also, don't miss the [wiki][] which contains articles on
additional specific topics. Can't find something? Open an [issue][].

**Table of contents:**

- [Introduction](#introduction)
- [Getting started](#getting-started)
- [The case for Immutability](#the-case-for-immutability)
- [JavaScript-first API](#javascript-first-api)
- [Nested Structures](#nested-structures)
- [Equality treats Collections as Values](#equality-treats-collections-as-values)
- [Batching Mutations](#batching-mutations)
- [Lazy Seq](#lazy-seq)
- [Additional Tools and Resources](#additional-tools-and-resources)
- [Contributing](#contributing)

## Introduction

[Immutable][] data cannot be changed once created, leading to much simpler
application development, no defensive copying, and enabling advanced memoization
and change detection techniques with simple logic. [Persistent][] data presents
a mutative API which does not update the data in-place, but instead always
yields new updated data.

Immutable.js provides many Persistent Immutable data structures including:
`List`, `Stack`, `Map`, `OrderedMap`, `Set`, `OrderedSet` and `Record`.

These data structures are highly efficient on modern JavaScript VMs by using
structural sharing via [hash maps tries][] and [vector tries][] as popularized
by Clojure and Scala, minimizing the need to copy or cache data.

Immutable.js also provides a lazy `Seq`, allowing efficient
chaining of collection methods like `map` and `filter` without creating
intermediate representations. Create some `Seq` with `Range` and `Repeat`.

Want to hear more? Watch the presentation about Immutable.js:

[![Immutable Data and React](website/public/Immutable-Data-and-React-YouTube.png)](https://youtu.be/I7IdS-PbEgI)

[README.md]: https://github.com/immutable-js/immutable-js/blob/main/README.md
[immutable.d.ts]: https://github.com/immutable-js/immutable-js/blob/main/type-definitions/immutable.d.ts
[wiki]: https://github.com/immutable-js/immutable-js/wiki
[issue]: https://github.com/immutable-js/immutable-js/issues
[Persistent]: https://en.wikipedia.org/wiki/Persistent_data_structure
[Immutable]: https://en.wikipedia.org/wiki/Immutable_object
[hash maps tries]: https://en.wikipedia.org/wiki/Hash_array_mapped_trie
[vector tries]: https://hypirion.com/musings/understanding-persistent-vector-pt-1

## Getting started

Install `immutable` using npm.

```shell
# using npm
npm install immutable

# using Yarn
yarn add immutable

# using pnpm
pnpm add immutable

# using Bun
bun add immutable
```

Then require it into any module.

<!-- runkit:activate -->

```js
const { Map } = require('immutable');
const map1 = Map({ a: 1, b: 2, c: 3 });
const map2 = map1.set('b', 50);
map1.get('b') + ' vs. ' + map2.get('b'); // 2 vs. 50
```

### Browser

Immutable.js has no dependencies, which makes it predictable to include in a Browser.

It's highly recommended to use a module bundler like [webpack](https://webpack.github.io/),
[rollup](https://rollupjs.org/), or
[browserify](https://browserify.org/). The `immutable` npm module works
without any additional consideration. All examples throughout the documentation
will assume use of this kind of tool.

Alternatively, Immutable.js may be directly included as a script tag. Download
or link to a CDN such as [CDNJS](https://cdnjs.com/libraries/immutable)
or [jsDelivr](https://www.jsdelivr.com/package/npm/immutable).

Use a script tag to directly add `Immutable` to the global scope:

```html
<script src="immutable.min.js"></script>
<script>
  var map1 = Immutable.Map({ a: 1, b: 2, c: 3 });
  var map2 = map1.set('b', 50);
  map1.get('b'); // 2
  map2.get('b'); // 50
</script>
```

Or use an AMD-style loader (such as [RequireJS](https://requirejs.org/)):

```js
require(['./immutable.min.js'], function (Immutable) {
  var map1 = Immutable.Map({ a: 1, b: 2, c: 3 });
  var map2 = map1.set('b', 50);
  map1.get('b'); // 2
  map2.get('b'); // 50
});
```

### Flow & TypeScript

Use these Immutable collections and sequences as you would use native
collections in your [Flowtype](https://flowtype.org/) or [TypeScript](https://typescriptlang.org) programs while still taking
advantage of type generics, error detection, and auto-complete in your IDE.

Installing `immutable` via npm brings with it type definitions for Flow (v0.55.0 or higher)
and TypeScript (v2.1.0 or higher), so you shouldn't need to do anything at all!

#### Using TypeScript with Immutable.js v4

Immutable.js type definitions embrace ES2015. While Immutable.js itself supports
legacy browsers and environments, its type definitions require TypeScript's 2015
lib. Include either `"target": "es2015"` or `"lib": "es2015"` in your
`tsconfig.json`, or provide `--target es2015` or `--lib es2015` to the
`tsc` command.

<!-- runkit:activate -->

```js
const { Map } = require('immutable');
const map1 = Map({ a: 1, b: 2, c: 3 });
const map2 = map1.set('b', 50);
map1.get('b') + ' vs. ' + map2.get('b'); // 2 vs. 50
```

#### Using TypeScript with Immutable.js v3 and earlier:

Previous versions of Immutable.js include a reference file which you can include
via relative path to the type definitions at the top of your file.

```js
///<reference path='./node_modules/immutable/dist/immutable.d.ts'/>
import Immutable from 'immutable';
var map1: Immutable.Map<string, number>;
map1 = Immutable.Map({ a: 1, b: 2, c: 3 });
var map2 = map1.set('b', 50);
map1.get('b'); // 2
map2.get('b'); // 50
```

## The case for Immutability

Much of what makes application development difficult is tracking mutation and
maintaining state. Developing with immutable data encourages you to think
differently about how data flows through your application.

Subscribing to data events throughout your application creates a huge overhead of
book-keeping which can hurt performance, sometimes dramatically, and creates
opportunities for areas of your application to get out of sync with each other
due to easy to make programmer error. Since immutable data never changes,
subscribing to changes throughout the model is a dead-end and new data can only
ever be passed from above.

This model of data flow aligns well with the architecture of [React][]
and especially well with an application designed using the ideas of [Flux][].

When data is passed from above rather than being subscribed to, and you're only
interested in doing work when something has changed, you can use equality.

Immutable collections should be treated as _values_ rather than _objects_. While
objects represent some thing which could change over time, a value represents
the state of that thing at a particular instance of time. This principle is most
important to understanding the appropriate use of immutable data. In order to
treat Immutable.js collections as values, it's important to use the
`Immutable.is()` function or `.equals()` method to determine _value equality_
instead of the `===` operator which determines object _reference identity_.

<!-- runkit:activate -->

```js
const { Map } = require('immutable');
const map1 = Map({ a: 1, b: 2, c: 3 });
const map2 = Map({ a: 1, b: 2, c: 3 });
map1.equals(map2); // true
map1 === map2; // false
```

Note: As a performance optimization Immutable.js attempts to return the existing
collection when an operation would result in an identical collection, allowing
for using `===` reference equality to determine if something definitely has not
changed. This can be extremely useful when used within a memoization function
which would prefer to re-run the function if a deeper equality check could
potentially be more costly. The `===` equality check is also used internally by
`Immutable.is` and `.equals()` as a performance optimization.

<!-- runkit:activate -->

```js
const { Map } = require('immutable');
const map1 = Map({ a: 1, b: 2, c: 3 });
const map2 = map1.set('b', 2); // Set to same value
map1 === map2; // true
```

If an object is immutable, it can be "copied" simply by making another reference
to it instead of copying the entire object. Because a reference is much smaller
than the object itself, this results in memory savings and a potential boost in
execution speed for programs which rely on copies (such as an undo-stack).

<!-- runkit:activate -->

```js
const { Map } = require('immutable');
const map = Map({ a: 1, b: 2, c: 3 });
const mapCopy = map; // Look, "copies" are free!
```

[React]: https://reactjs.org/
[Flux]: https://facebook.github.io/flux/docs/in-depth-overview/


## JavaScript-first API

While Immutable.js is inspired by Clojure, Scala, Haskell and other functional
programming environments, it's designed to bring these powerful concepts to
JavaScript, and therefore has an Object-Oriented API that closely mirrors that
of [ES2015][] [Array][], [Map][], and [Set][].

[es2015]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_6_support_in_Mozilla
[array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
[set]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

The difference for the immutable collections is that methods which would mutate
the collection, like `push`, `set`, `unshift` or `splice`, instead return a new
immutable collection. Methods which return new arrays, like `slice` or `concat`,
instead return new immutable collections.

<!-- runkit:activate -->

```js
const { List } = require('immutable');
const list1 = List([1, 2]);
const list2 = list1.push(3, 4, 5);
const list3 = list2.unshift(0);
const list4 = list1.concat(list2, list3);
assert.equal(list1.size, 2);
assert.equal(list2.size, 5);
assert.equal(list3.size, 6);
assert.equal(list4.size, 13);
assert.equal(list4.get(0), 1);
```

Almost all of the methods on [Array][] will be found in similar form on
`Immutable.List`, those of [Map][] found on `Immutable.Map`, and those of [Set][]
found on `Immutable.Set`, including collection operations like `forEach()`
and `map()`.

<!-- runkit:activate -->

```js
const { Map } = require('immutable');
const alpha = Map({ a: 1, b: 2, c: 3, d: 4 });
alpha.map((v, k) => k.toUpperCase()).join();
// 'A,B,C,D'
```

### Convert from raw JavaScript objects and arrays.

Designed to inter-operate with your existing JavaScript, Immutable.js
accepts plain JavaScript Arrays and Objects anywhere a method expects a
`Collection`.

<!-- runkit:activate -->

```js
const { Map, List } = require('immutable');
const map1 = Map({ a: 1, b: 2, c: 3, d: 4 });
const map2 = Map({ c: 10, a: 20, t: 30 });
const obj = { d: 100, o: 200, g: 300 };
const map3 = map1.merge(map2, obj);
// Map { a: 20, b: 2, c: 10, d: 100, t: 30, o: 200, g: 300 }
const list1 = List([1, 2, 3]);
const list2 = List([4, 5, 6]);
const array = [7, 8, 9];
const list3 = list1.concat(list2, array);
// List [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
```

This is possible because Immutable.js can treat any JavaScript Array or Object
as a Collection. You can take advantage of this in order to get sophisticated
collection methods on JavaScript Objects, which otherwise have a very sparse
native API. Because Seq evaluates lazily and does not cache intermediate
results, these operations can be extremely efficient.

<!-- runkit:activate -->

```js
const { Seq } = require('immutable');
const myObject = { a: 1, b: 2, c: 3 };
Seq(myObject)
  .map(x => x * x)
  .toObject();
// { a: 1, b: 4, c: 9 }
```

Keep in mind, when using JS objects to construct Immutable Maps, that
JavaScript Object properties are always strings, even if written in a quote-less
shorthand, while Immutable Maps accept keys of any type.

<!-- runkit:activate -->

```js
const { fromJS } = require('immutable');

const obj = { 1: 'one' };
console.log(Object.keys(obj)); // [ "1" ]
console.log(obj['1'], obj[1]); // "one", "one"

const map = fromJS(obj);
console.log(map.get('1'), map.get(1)); // "one", undefined
```

Property access for JavaScript Objects first converts the key to a string, but
since Immutable Map keys can be of any type the argument to `get()` is
not altered.

### Converts back to raw JavaScript objects.

All Immutable.js Collections can be converted to plain JavaScript Arrays and
Objects shallowly with `toArray()` and `toObject()` or deeply with `toJS()`.
All Immutable Collections also implement `toJSON()` allowing them to be passed
to `JSON.stringify` directly. They also respect the custom `toJSON()` methods of
nested objects.

<!-- runkit:activate -->

```js
const { Map, List } = require('immutable');
const deep = Map({ a: 1, b: 2, c: List([3, 4, 5]) });
console.log(deep.toObject()); // { a: 1, b: 2, c: List [ 3, 4, 5 ] }
console.log(deep.toArray()); // [ 1, 2, List [ 3, 4, 5 ] ]
console.log(deep.toJS()); // { a: 1, b: 2, c: [ 3, 4, 5 ] }
JSON.stringify(deep); // '{"a":1,"b":2,"c":[3,4,5]}'
```

### Embraces ES2015

Immutable.js supports all JavaScript environments, including legacy
browsers (even IE11). However it also takes advantage of features added to
JavaScript in [ES2015][], the latest standard version of JavaScript, including
[Iterators][], [Arrow Functions][], [Classes][], and [Modules][]. It's inspired
by the native [Map][] and [Set][] collections added to ES2015.

All examples in the Documentation are presented in ES2015. To run in all
browsers, they need to be translated to ES5.

```js
// ES2015
const mapped = foo.map(x => x * x);
// ES5
var mapped = foo.map(function (x) {
  return x * x;
});
```

All Immutable.js collections are [Iterable][iterators], which allows them to be
used anywhere an Iterable is expected, such as when spreading into an Array.

<!-- runkit:activate -->

```js
const { List } = require('immutable');
const aList = List([1, 2, 3]);
const anArray = [0, ...aList, 4, 5]; // [ 0, 1, 2, 3, 4, 5 ]
```

Note: A Collection is always iterated in the same order, however that order may
not always be well defined, as is the case for the `Map` and `Set`.

[Iterators]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/The_Iterator_protocol
[Arrow Functions]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
[Classes]: https://wiki.ecmascript.org/doku.php?id=strawman:maximally_minimal_classes
[Modules]: https://www.2ality.com/2014/09/es6-modules-final.html


## Nested Structures

The collections in Immutable.js are intended to be nested, allowing for deep
trees of data, similar to JSON.

<!-- runkit:activate -->

```js
const { fromJS } = require('immutable');
const nested = fromJS({ a: { b: { c: [3, 4, 5] } } });
// Map { a: Map { b: Map { c: List [ 3, 4, 5 ] } } }
```

A few power-tools allow for reading and operating on nested data. The
most useful are `mergeDeep`, `getIn`, `setIn`, and `updateIn`, found on `List`,
`Map` and `OrderedMap`.

<!-- runkit:activate -->

```js
const { fromJS } = require('immutable');
const nested = fromJS({ a: { b: { c: [3, 4, 5] } } });

const nested2 = nested.mergeDeep({ a: { b: { d: 6 } } });
// Map { a: Map { b: Map { c: List [ 3, 4, 5 ], d: 6 } } }

console.log(nested2.getIn(['a', 'b', 'd'])); // 6

const nested3 = nested2.updateIn(['a', 'b', 'd'], value => value + 1);
console.log(nested3);
// Map { a: Map { b: Map { c: List [ 3, 4, 5 ], d: 7 } } }

const nested4 = nested3.updateIn(['a', 'b', 'c'], list => list.push(6));
// Map { a: Map { b: Map { c: List [ 3, 4, 5, 6 ], d: 7 } } }
```

## Equality treats Collections as Values

Immutable.js collections are treated as pure data _values_. Two immutable
collections are considered _value equal_ (via `.equals()` or `is()`) if they
represent the same collection of values. This differs from JavaScript's typical
_reference equal_ (via `===` or `==`) for Objects and Arrays which only
determines if two variables represent references to the same object instance.

Consider the example below where two identical `Map` instances are not
_reference equal_ but are _value equal_.

<!-- runkit:activate -->

```js
// First consider:
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { a: 1, b: 2, c: 3 };
obj1 !== obj2; // two different instances are always not equal with ===

const { Map, is } = require('immutable');
const map1 = Map({ a: 1, b: 2, c: 3 });
const map2 = Map({ a: 1, b: 2, c: 3 });
map1 !== map2; // two different instances are not reference-equal
map1.equals(map2); // but are value-equal if they have the same values
is(map1, map2); // alternatively can use the is() function
```

Value equality allows Immutable.js collections to be used as keys in Maps or
values in Sets, and retrieved with different but equivalent collections:

<!-- runkit:activate -->

```js
const { Map, Set } = require('immutable');
const map1 = Map({ a: 1, b: 2, c: 3 });
const map2 = Map({ a: 1, b: 2, c: 3 });
const set = Set().add(map1);
set.has(map2); // true because these are value-equal
```

Note: `is()` uses the same measure of equality as [Object.is][] for scalar
strings and numbers, but uses value equality for Immutable collections,
determining if both are immutable and all keys and values are equal
using the same measure of equality.

[object.is]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is

#### Performance tradeoffs

While value equality is useful in many circumstances, it has different
performance characteristics than reference equality. Understanding these
tradeoffs may help you decide which to use in each case, especially when used
to memoize some operation.

When comparing two collections, value equality may require considering every
item in each collection, on an `O(N)` time complexity. For large collections of
values, this could become a costly operation. Though if the two are not equal
and hardly similar, the inequality is determined very quickly. In contrast, when
comparing two collections with reference equality, only the initial references
to memory need to be compared which is not based on the size of the collections,
which has an `O(1)` time complexity. Checking reference equality is always very
fast, however just because two collections are not reference-equal does not rule
out the possibility that they may be value-equal.

#### Return self on no-op optimization

When possible, Immutable.js avoids creating new objects for updates where no
change in _value_ occurred, to allow for efficient _reference equality_ checking
to quickly determine if no change occurred.

<!-- runkit:activate -->

```js
const { Map } = require('immutable');
const originalMap = Map({ a: 1, b: 2, c: 3 });
const updatedMap = originalMap.set('b', 2);
updatedMap === originalMap; // No-op .set() returned the original reference.
```

However updates which do result in a change will return a new reference. Each
of these operations occur independently, so two similar updates will not return
the same reference:

<!-- runkit:activate -->

```js
const { Map } = require('immutable');
const originalMap = Map({ a: 1, b: 2, c: 3 });
const updatedMap = originalMap.set('b', 1000);
// New instance, leaving the original immutable.
updatedMap !== originalMap;
const anotherUpdatedMap = originalMap.set('b', 1000);
// Despite both the results of the same operation, each created a new reference.
anotherUpdatedMap !== updatedMap;
// However the two are value equal.
anotherUpdatedMap.equals(updatedMap);
```

## Batching Mutations

> If a tree falls in the woods, does it make a sound?
>
> If a pure function mutates some local data in order to produce an immutable
> return value, is that ok?
>
> — Rich Hickey, Clojure

Applying a mutation to create a new immutable object results in some overhead,
which can add up to a minor performance penalty. If you need to apply a series
of mutations locally before returning, Immutable.js gives you the ability to
create a temporary mutable (transient) copy of a collection and apply a batch of
mutations in a performant manner by using `withMutations`. In fact, this is
exactly how Immutable.js applies complex mutations itself.

As an example, building `list2` results in the creation of 1, not 3, new
immutable Lists.

<!-- runkit:activate -->

```js
const { List } = require('immutable');
const list1 = List([1, 2, 3]);
const list2 = list1.withMutations(function (list) {
  list.push(4).push(5).push(6);
});
assert.equal(list1.size, 3);
assert.equal(list2.size, 6);
```

Note: Immutable.js also provides `asMutable` and `asImmutable`, but only
encourages their use when `withMutations` will not suffice. Use caution to not
return a mutable copy, which could result in undesired behavior.

_Important!_: Only a select few methods can be used in `withMutations` including
`set`, `push` and `pop`. These methods can be applied directly against a
persistent data-structure where other methods like `map`, `filter`, `sort`,
and `splice` will always return new immutable data-structures and never mutate
a mutable collection.

## Lazy Seq

`Seq` describes a lazy operation, allowing them to efficiently chain
use of all the higher-order collection methods (such as `map` and `filter`)
by not creating intermediate collections.

**Seq is immutable** — Once a Seq is created, it cannot be
changed, appended to, rearranged or otherwise modified. Instead, any mutative
method called on a `Seq` will return a new `Seq`.

**Seq is lazy** — `Seq` does as little work as necessary to respond to any
method call. Values are often created during iteration, including implicit
iteration when reducing or converting to a concrete data structure such as
a `List` or JavaScript `Array`.

For example, the following performs no work, because the resulting
`Seq`'s values are never iterated:

```js
const { Seq } = require('immutable');
const oddSquares = Seq([1, 2, 3, 4, 5, 6, 7, 8])
  .filter(x => x % 2 !== 0)
  .map(x => x * x);
```

Once the `Seq` is used, it performs only the work necessary. In this
example, no intermediate arrays are ever created, filter is called three
times, and map is only called once:

```js
oddSquares.get(1); // 9
```

Any collection can be converted to a lazy Seq with `Seq()`.

<!-- runkit:activate -->

```js
const { Map, Seq } = require('immutable');
const map = Map({ a: 1, b: 2, c: 3 });
const lazySeq = Seq(map);
```

`Seq` allows for the efficient chaining of operations, allowing for the
expression of logic that can otherwise be very tedious:

```js
lazySeq
  .flip()
  .map(key => key.toUpperCase())
  .flip();
// Seq { A: 1, B: 2, C: 3 }
```

As well as expressing logic that would otherwise seem memory or time
limited, for example `Range` is a special kind of Lazy sequence.

<!-- runkit:activate -->

```js
const { Range } = require('immutable');
Range(1, Infinity)
  .skip(1000)
  .map(n => -n)
  .filter(n => n % 2 === 0)
  .take(2)
  .reduce((r, n) => r * n, 1);
// 1006008
```

## Comparison of filter(), groupBy(), and partition()

The `filter()`, `groupBy()`, and `partition()` methods are similar in that they
all divide a collection into parts based on applying a function to each element.
All three call the predicate or grouping function once for each item in the
input collection.  All three return zero or more collections of the same type as
their input.  The returned collections are always distinct from the input
(according to `===`), even if the contents are identical.

Of these methods, `filter()` is the only one that is lazy and the only one which
discards items from the input collection. It is the simplest to use, and the
fact that it returns exactly one collection makes it easy to combine with other
methods to form a pipeline of operations.

The `partition()` method is similar to an eager version of `filter()`, but it
returns two collections; the first contains the items that would have been
discarded by `filter()`, and the second contains the items that would have been
kept.  It always returns an array of exactly two collections, which can make it
easier to use than `groupBy()`.  Compared to making two separate calls to
`filter()`, `partition()` makes half as many calls it the predicate passed to
it.

The `groupBy()` method is a more generalized version of `partition()` that can
group by an arbitrary function rather than just a predicate.  It returns a map
with zero or more entries, where the keys are the values returned by the
grouping function, and the values are nonempty collections of the corresponding
arguments.  Although `groupBy()` is more powerful than `partition()`, it can be
harder to use because it is not always possible predict in advance how many
entries the returned map will have and what their keys will be.

| Summary                       | `filter` | `partition` | `groupBy`      |
|:------------------------------|:---------|:------------|:---------------|
| ease of use                   | easiest  | moderate    | hardest        |
| generality                    | least    | moderate    | most           |
| laziness                      | lazy     | eager       | eager          |
| # of returned sub-collections | 1        | 2           | 0 or more      |
| sub-collections may be empty  | yes      | yes         | no             |
| can discard items             | yes      | no          | no             |
| wrapping container            | none     | array       | Map/OrderedMap |

## Additional Tools and Resources

- [Atom-store](https://github.com/jameshopkins/atom-store/)
  - A Clojure-inspired atom implementation in Javascript with configurability
    for external persistance.

- [Chai Immutable](https://github.com/astorije/chai-immutable)
  - If you are using the [Chai Assertion Library](https://chaijs.com/), this
    provides a set of assertions to use against Immutable.js collections.

- [Fantasy-land](https://github.com/fantasyland/fantasy-land)
  - Specification for interoperability of common algebraic structures in JavaScript.

- [Immutagen](https://github.com/pelotom/immutagen)
  - A library for simulating immutable generators in JavaScript.

- [Immutable-cursor](https://github.com/redbadger/immutable-cursor)
  - Immutable cursors incorporating the Immutable.js interface over
  Clojure-inspired atom.

- [Immutable-ext](https://github.com/DrBoolean/immutable-ext)
  - Fantasyland extensions for immutablejs

- [Immutable-js-tools](https://github.com/madeinfree/immutable-js-tools)
  - Util tools for immutable.js

- [Immutable-Redux](https://github.com/gajus/redux-immutable)
  - redux-immutable is used to create an equivalent function of Redux
  combineReducers that works with Immutable.js state.

- [Immutable-Treeutils](https://github.com/lukasbuenger/immutable-treeutils)
  - Functional tree traversal helpers for ImmutableJS data structures.

- [Irecord](https://github.com/ericelliott/irecord)
  - An immutable store that exposes an RxJS observable. Great for React.

- [Mudash](https://github.com/brianneisler/mudash)
  - Lodash wrapper providing Immutable.JS support.

- [React-Immutable-PropTypes](https://github.com/HurricaneJames/react-immutable-proptypes)
  - PropType validators that work with Immutable.js.

- [Redux-Immutablejs](https://github.com/indexiatech/redux-immutablejs)
  - Redux Immutable facilities.

- [Rxstate](https://github.com/yamalight/rxstate)
  - Simple opinionated state management library based on RxJS and Immutable.js.

- [Transit-Immutable-js](https://github.com/glenjamin/transit-immutable-js)
  - Transit serialisation for Immutable.js.
  - See also: [Transit-js](https://github.com/cognitect/transit-js)

Have an additional tool designed to work with Immutable.js?
Submit a PR to add it to this list in alphabetical order.

## Contributing

Use [Github issues](https://github.com/immutable-js/immutable-js/issues) for requests.

We actively welcome pull requests, learn how to [contribute](https://github.com/immutable-js/immutable-js/blob/main/.github/CONTRIBUTING.md).

Immutable.js is maintained within the [Contributor Covenant's Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/).

### Changelog

Changes are tracked as [Github releases](https://github.com/immutable-js/immutable-js/releases).

### License

Immutable.js is [MIT-licensed](./LICENSE).

### Thanks

[Phil Bagwell](https://www.youtube.com/watch?v=K2NYwP90bNs), for his inspiration
and research in persistent data structures.

[Hugh Jackson](https://github.com/hughfdjackson/), for providing the npm package
name. If you're looking for his unsupported package, see [this repository](https://github.com/hughfdjackson/immutable).
