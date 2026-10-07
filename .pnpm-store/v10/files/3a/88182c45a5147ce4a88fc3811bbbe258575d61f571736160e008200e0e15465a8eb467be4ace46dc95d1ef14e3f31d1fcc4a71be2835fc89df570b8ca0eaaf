# fast-copy

<img src="https://img.shields.io/badge/build-passing-brightgreen.svg"/>
<img src="https://img.shields.io/badge/coverage-100%25-brightgreen.svg"/>
<img src="https://img.shields.io/badge/license-MIT-blue.svg"/>

A [blazing fast](#benchmarks) deep object copier

## Table of contents

- [fast-copy](#fast-copy)
  - [Table of contents](#table-of-contents)
  - [Usage](#usage)
  - [API](#api)
    - [`copy`](#copy)
    - [`copyStrict`](#copystrict)
    - [`createCopier`](#createcopier)
      - [Copier methods](#copier-methods)
      - [Copier state](#copier-state)
        - [`cache`](#cache)
        - [`copier`](#copier)
        - [`Constructor` / `prototype`](#constructor--prototype)
    - [`createStrictCopier`](#createstrictcopier)
  - [Types supported](#types-supported)
  - [Aspects of default copiers](#aspects-of-default-copiers)
    - [Error references are copied directly, instead of creating a new `*Error` object](#error-references-are-copied-directly-instead-of-creating-a-new-error-object)
    - [The constructor of the original object is used, instead of using known globals](#the-constructor-of-the-original-object-is-used-instead-of-using-known-globals)
    - [Generator objects are copied, but still reference the original generator's state](#generator-objects-are-copied-but-still-reference-the-original-generators-state)
  - [Benchmarks](#benchmarks)
      - [Simple objects](#simple-objects)
      - [Complex objects](#complex-objects)
      - [Big data](#big-data)
      - [Circular objects](#circular-objects)
      - [Special objects](#special-objects)
  - [Development](#development)

## Usage

```js
import copy from 'fast-copy';
import { deepEqual } from 'fast-equals';

const object = {
  array: [123, { deep: 'value' }],
  map: new Map([
    ['foo', {}],
    [{ bar: 'baz' }, 'quz'],
  ]),
};

const copiedObject = copy(object);

console.log(copiedObject === object); // false
console.log(deepEqual(copiedObject, object)); // true
```

## API

### `copy`

Deeply copy the object passed.

```js
import copy from 'fast-copy';

const copied = copy({ foo: 'bar' });
```

### `copyStrict`

Deeply copy the object passed, but with additional strictness when replicating the original object:

- Properties retain their original property descriptor
- Non-enumerable keys are copied
- Non-standard properties (e.g., keys on arrays / maps / sets) are copied

```js
import { copyStrict } from 'fast-copy';

const object = { foo: 'bar' };
object.nonEnumerable = Object.defineProperty(object, 'bar', {
  enumerable: false,
  value: 'baz',
});

const copied = copy(object);
```

**NOTE**: This method is significantly slower than [`copy`](#copy), so it is recommended to only use this when you have specific use-cases that require it.

### `createCopier`

Create a custom copier based on the type-specific methods passed. This is useful if you want to squeeze out maximum performance, or perform something other than a standard deep copy.

```js
import { createCopier } from 'fast-copy';

const copyShallow = createCopier({
  array: (array) => [...array],
  map: (map) => new Map(map.entries()),
  object: (object) => ({ ...object }),
  set: (set) => new Set(set.values()),
});
```

Each internal copier method has the following contract:

```js
type InternalCopier<Value> = (value: Value, state: State) => Value;

interface State {
  Constructor: any;
  cache: WeakMap;
  copier: InternalCopier<any>;
  prototype: any;
}
```

Any method overriding the defaults must maintain this contract.

#### Copier methods

- `array` => `Array`
- `arrayBuffer`=> `ArrayBuffer`, `Float32Array`, `Float64Array`, `Int8Array`, `Int16Array`, `Int32Array`, `Uint8Array`, `Uint8ClampedArray`, `Uint16Array`, `Uint32Array`, `Uint64Array`
- `blob` => `Blob`
- `dataView` => `DataView`
- `date` => `Date`
- `error` => `Error`, `AggregateError`, `EvalError`, `RangeError`, `ReferenceError`, `SyntaxError`, `TypeError`, `URIError`
- `map` => `Map`
- `object` => `Object`, or any custom constructor
- `regExp` => `RegExp`
- `set` => `Set`

#### Copier state

##### `cache`

If you want to maintain circular reference handling, then you'll need the methods to handle cache population for future lookups:

```js
function shallowlyCloneArray<Value extends any[]>(
  value: Value,
  state: State
): Value {
  const clone = [...value];

  state.cache.set(value, clone);

  return clone;
}
```

##### `copier`

`copier` is provided for recursive calls with deeply-nested objects.

```js
function deeplyCloneArray<Value extends any[]>(
  value: Value,
  state: State
): Value {
  const clone = [];

  state.cache.set(value, clone);

  value.forEach((item) => state.copier(item, state));

  return clone;
}
```

Note above I am using `forEach` instead of a simple `map`. This is because it is highly recommended to store the clone in [`cache`](#cache) eagerly when deeply copying, so that nested circular references are handled correctly.

##### `Constructor` / `prototype`

Both `Constructor` and `prototype` properties are only populated with complex objects that are not standard objects or arrays. This is mainly useful for custom subclasses of these globals, or maintaining custom prototypes of objects.

```js
function deeplyCloneSubclassArray<Value extends CustomArray>(
  value: Value,
  state: State
): Value {
  const clone = new state.Constructor();

  state.cache.set(value, clone);

  value.forEach((item) => clone.push(item));

  return clone;
}

function deeplyCloneCustomObject<Value extends CustomObject>(
  value: Value,
  state: State
): Value {
  const clone = Object.create(state.prototype);

  state.cache.set(value, clone);

  Object.entries(value).forEach(([k, v]) => (clone[k] = v));

  return clone;
}
```

### `createStrictCopier`

Create a custom copier based on the type-specific methods passed, but defaulting to the same functions normally used for `copyStrict`. This is useful if you want to squeeze out better performance while maintaining strict requirements, or perform something other than a strict deep copy.

```js
const createStrictClone = (value, clone) =>
  Object.getOwnPropertyNames(value).reduce(
    (clone, property) =>
      Object.defineProperty(
        clone,
        property,
        Object.getOwnPropertyDescriptor(value, property) || {
          configurable: true,
          enumerable: true,
          value: clone[property],
          writable: true,
        }
      ),
    clone
  );

const copyStrictShallow = createStrictCopier({
  array: (array) => createStrictClone(array, []),
  map: (map) => createStrictClone(map, new Map(map.entries())),
  object: (object) => createStrictClone(object, {}),
  set: (set) => createStrictClone(set, new Set(set.values())),
});
```

**NOTE**: This method creates a copier that is significantly slower than [`copy`](#copy), as well as likely a copier created by [`createCopier`](#createcopier), so it is recommended to only use this when you have specific use-cases that require it.

## Types supported

The following object types are deeply cloned when they are either properties on the object passed, or the object itself:

- `Array`
- `ArrayBuffer`
- `Boolean` primitive wrappers (e.g., `new Boolean(true)`)
- `Blob`
- `Buffer`
- `DataView`
- `Date`
- `Float32Array`
- `Float64Array`
- `Int8Array`
- `Int16Array`
- `Int32Array`
- `Map`
- `Number` primitive wrappers (e.g., `new Number(123)`)
- `Object`
- `RegExp`
- `Set`
- `String` primitive wrappers (e.g., `new String('foo')`)
- `Uint8Array`
- `Uint8ClampedArray`
- `Uint16Array`
- `Uint32Array`
- `React` components
- Custom constructors

The following object types are copied directly, as they are either primitives, cannot be cloned, or the common use-case implementation does not expect cloning:

- `AsyncFunction`
- `Boolean` primitives
- `Error`
- `Function`
- `GeneratorFunction`
- `Number` primitives
- `Null`
- `Promise`
- `String` primitives
- `Symbol`
- `Undefined`
- `WeakMap`
- `WeakSet`

Circular objects are supported out of the box. By default, a cache based on `WeakSet` is used, but if `WeakSet` is not available then a fallback is used. The benchmarks quoted below are based on use of `WeakSet`.

## Aspects of default copiers

Inherently, what is considered a valid copy is subjective because of different requirements and use-cases. For this library, some decisions were explicitly made for the default copiers of specific object types, and those decisions are detailed below. If your use-cases require different handling, you can always create your own custom copier with [`createCopier`](#createcopier) or [`createStrictCopier`](#createstrictcopier).

### Error references are copied directly, instead of creating a new `*Error` object

While it would be relatively trivial to copy over the message and stack to a new object of the same `Error` subclass, it is a common practice to "override" the message or stack, and copies would not retain this mutation. As such, the original reference is copied.

### The constructor of the original object is used, instead of using known globals

Starting in ES2015, native globals can be subclassed like any custom class. When copying, we explicitly reuse the constructor of the original object. However, the expectation is that these subclasses would have the same constructur signature as their native base class. This is a common community practice, but there is the possibility of inaccuracy if the contract differs.

### Generator objects are copied, but still reference the original generator's state

[Generator objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator) are specific types of iterators, but appear like standard objects that just have a few methods (`next`, `throw`, `return`). These methods are bound to the internal state of the generator, which cannot be copied effectively. Normally this would be treated like other "uncopiable" objects and simply pass the reference through, however the "validation" of whether it is a generator object or a standard object is not guaranteed (duck-typing) and there is a runtime cost associated with. Therefore, the simplest path of treating it like a standard object (copying methods to a new object) was taken.

## Benchmarks

#### Simple objects

_Small number of properties, all values are primitives_

|                    | Operations / second |
| ------------------ | ------------------- |
| **fast-copy**      | **5,880,312**       |
| lodash.cloneDeep   | 2,706,261           |
| clone              | 2,207,231           |
| deepclone          | 1,274,810           |
| fast-clone         | 1,239,952           |
| ramda              | 1,146,152           |
| fast-copy (strict) | 852,382             |

#### Complex objects

_Large number of properties, values are a combination of primitives and complex objects_

|                    | Operations / second |
| ------------------ | ------------------- |
| **fast-copy**      | **162,858**         |
| ramda              | 142,104             |
| deepclone          | 133,607             |
| fast-clone         | 101,143             |
| clone              | 70,872              |
| fast-copy (strict) | 62,961              |
| lodash.cloneDeep   | 62,060              |

#### Big data

_Very large number of properties with high amount of nesting, mainly objects and arrays_

|                    | Operations / second |
| ------------------ | ------------------- |
| **fast-copy**      | **303**             |
| fast-clone         | 245                 |
| deepclone          | 151                 |
| lodash.cloneDeep   | 150                 |
| clone              | 93                  |
| fast-copy (strict) | 90                  |
| ramda              | 42                  |

#### Circular objects

_Objects that deeply reference themselves_

|                    | Operations / second |
| ------------------ | ------------------- |
| **fast-copy**      | **2,420,466**       |
| deepclone          | 1,386,896           |
| ramda              | 1,024,108           |
| lodash.cloneDeep   | 989,796             |
| clone              | 987,721             |
| fast-copy (strict) | 617,602             |
| fast-clone         | 0 (not supported)   |

#### Special objects

_Custom constructors, React components, etc_

|                    | Operations / second |
| ------------------ | ------------------- |
| **fast-copy**      | **152,792**         |
| clone              | 74,347              |
| fast-clone         | 66,576              |
| lodash.cloneDeep   | 64,760              |
| ramda              | 53,542              |
| deepclone          | 28,823              |
| fast-copy (strict) | 21,362              |

## Development

Standard practice, clone the repo and `yarn` (or `npm i`) to get the dependencies. The following npm scripts are available:

- benchmark => run benchmark tests against other equality libraries
- build => run `build:esm`, `build:cjs`, `build:umd`, and `build:min` scripts
- build:cjs => build CJS files and types
- build:esm => build ESM files and types
- build:min => build minified files and types
- build:umd => build UMD files and types
- clean => run `rimraf` on the `dist` folder
- dev => start webpack playground App
- dist => run `clean` and `build` scripts
- lint => run ESLint on all files in `src` folder (also runs on `dev` script)
- lint:fix => run `lint` script, but with auto-fixer
- prepublishOnly => run `lint`, `test:coverage`, and `dist` scripts
- release => run `prepublishOnly` and release with new version
- release:beta => run `prepublishOnly` and release with new beta version
- release:dry => run `prepublishOnly` and simulate a new release
- start => run `dev`
- test => run AVA with NODE_ENV=test on all files in `test` folder
- test:coverage => run same script as `test` with code coverage calculation via `nyc`
- test:watch => run same script as `test` but keep persistent watcher
- typecheck => run `tsc` on the codebase
