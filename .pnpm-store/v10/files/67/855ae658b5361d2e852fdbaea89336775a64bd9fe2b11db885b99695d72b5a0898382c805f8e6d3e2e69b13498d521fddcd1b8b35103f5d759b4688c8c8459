# rfdc

Really Fast Deep Clone


[![build status](https://img.shields.io/travis/davidmarkclements/rfdc.svg)](https://travis-ci.org/davidmarkclements/rfdc)
[![coverage](https://img.shields.io/codecov/c/github/davidmarkclements/rfdc.svg)](https://codecov.io/gh/davidmarkclements/rfdc)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)


## Usage

```js
const clone = require('rfdc')()
clone({a: 1, b: {c: 2}}) // => {a: 1, b: {c: 2}}
```

## API

### `require('rfdc')(opts = { proto: false, circles: false, constructorHandlers: [] }) => clone(obj) => obj2`

#### `proto` option

Copy prototype properties as well as own properties into the new object.

It's marginally faster to allow enumerable properties on the prototype
to be copied into the cloned object (not onto it's prototype, directly onto the object).

To explain by way of code:

```js
require('rfdc')({ proto: false })(Object.create({a: 1})) // => {}
require('rfdc')({ proto: true })(Object.create({a: 1})) // => {a: 1}
```

Setting `proto` to `true` will provide an additional 2% performance boost.

#### `circles` option

Keeping track of circular references will slow down performance with an
additional 25% overhead. Even if an object doesn't have any circular references,
the tracking overhead is the cost. By default if an object with a circular
reference is passed to `rfdc`, it will throw (similar to how `JSON.stringify` \
would throw).

Use the `circles` option to detect and preserve circular references in the
object. If performance is important, try removing the circular reference from
the object (set to `undefined`) and then add it back manually after cloning
instead of using this option.

#### `constructorHandlers` option

Sometimes consumers may want to add custom clone behaviour for particular classes
(for example `RegExp` or `ObjectId`, which aren't supported out-of-the-box).

This can be done by passing `constructorHandlers`, which takes an array of tuples,
where the first item is the class to match, and the second item is a function that
takes the input and returns a cloned output:

```js
const clone = require('rfdc')({
  constructorHandlers: [
    [RegExp, (o) => new RegExp(o)],
  ]
})

clone({r: /foo/}) // => {r: /foo/}
```

**NOTE**: For performance reasons, the handlers will only match an instance of the
*exact* class (not a subclass). Subclasses will need to be added separately if they
also need special clone behaviour.

### `default` import
It is also possible to directly import the clone function with all options set
to their default:

```js
const clone = require("rfdc/default")
clone({a: 1, b: {c: 2}}) // => {a: 1, b: {c: 2}}
```

### Types

`rfdc` clones all JSON types:

* `Object`
* `Array`
* `Number`
* `String`
* `null`

With additional support for:

* `Date` (copied)
* `undefined` (copied)
* `Buffer` (copied)
* `TypedArray` (copied)
* `Map` (copied)
* `Set` (copied)
* `Function` (referenced)
* `AsyncFunction` (referenced)
* `GeneratorFunction` (referenced)
* `arguments` (copied to a normal object)

All other types have output values that match the output
of `JSON.parse(JSON.stringify(o))`.

For instance:

```js
const rfdc = require('rfdc')()
const err = Error()
err.code = 1
JSON.parse(JSON.stringify(e)) // {code: 1}
rfdc(e) // {code: 1}

JSON.parse(JSON.stringify({rx: /foo/})) // {rx: {}}
rfdc({rx: /foo/}) // {rx: {}}
```

## Benchmarks

```sh
npm run bench
```

```
benchDeepCopy*100: 671.675ms
benchLodashCloneDeep*100: 1.574s
benchCloneDeep*100: 936.792ms
benchFastCopy*100: 822.668ms
benchFastestJsonCopy*100: 363.898ms // See note below
benchPlainObjectClone*100: 556.635ms
benchNanoCopy*100: 770.234ms
benchRamdaClone*100: 2.695s
benchJsonParseJsonStringify*100: 2.290s // JSON.parse(JSON.stringify(obj))
benchRfdc*100: 412.818ms
benchRfdcProto*100: 424.076ms
benchRfdcCircles*100: 443.357ms
benchRfdcCirclesProto*100: 465.053ms
```

It is true that [fastest-json-copy](https://www.npmjs.com/package/fastest-json-copy) may be faster, BUT it has such huge limitations that it is rarely useful. For example, it treats things like `Date` and `Map` instances the same as empty `{}`. It can't handle circular references. [plain-object-clone](https://www.npmjs.com/package/plain-object-clone) is also really limited in capability.

## Tests

```sh
npm test
```

```
169 passing (342.514ms)
```

### Coverage

```sh
npm run cov
```

```
----------|----------|----------|----------|----------|-------------------|
File      |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------|----------|----------|----------|----------|-------------------|
All files |      100 |      100 |      100 |      100 |                   |
 index.js |      100 |      100 |      100 |      100 |                   |
----------|----------|----------|----------|----------|-------------------|
```

### `__proto__` own property copying

`rfdc` works the same way as `Object.assign` when it comes to copying `['__proto__']` (e.g. when
an object has an own property key called '__proto__'). It results in the target object 
prototype object being set per the value of the `['__proto__']` own property.

For detailed write-up on how a way to handle this security-wise see https://www.fastify.io/docs/latest/Guides/Prototype-Poisoning/.

## License

MIT
