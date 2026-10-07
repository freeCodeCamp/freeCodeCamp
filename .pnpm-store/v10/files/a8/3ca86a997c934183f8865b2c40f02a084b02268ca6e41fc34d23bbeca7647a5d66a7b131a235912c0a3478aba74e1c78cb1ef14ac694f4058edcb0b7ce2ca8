[![Build status][build-image]][build-url]
[![Tests coverage][cov-image]][cov-url]
[![npm version][npm-image]][npm-url]

# type

## Runtime validation and processing of JavaScript types

- Respects language nature and acknowledges its quirks
- Allows coercion in restricted forms (rejects clearly invalid input, normalizes permissible type deviations)
- No transpilation implied, written to work in all ECMAScript 3+ engines

## Use case

Validate arguments input in public API endpoints.

_For validation of more sophisticated input structures (as deeply nested configuration objects) it's recommended to consider more powerful schema based utlities (as [AJV](https://ajv.js.org/) or [@hapi/joi](https://hapi.dev/family/joi/))_

### Example usage

Bulletproof input arguments normalization and validation:

```javascript
const ensureString        = require('type/string/ensure')
    , ensureDate          = require('type/date/ensure')
    , ensureNaturalNumber = require('type/natural-number/ensure')
    , isObject            = require('type/object/is');

module.exports = (path, options = { min: 0 }) {
  path = ensureString(path, { errorMessage: "%v is not a path" });
  if (!isObject(options)) options = {};
  const min = ensureNaturalNumber(options.min, { default: 0 })
      , max = ensureNaturalNumber(options.max, { isOptional: true })
      , startTime = ensureDate(options.startTime, { isOptional: true });

  // ...logic
};
```

### Installation

```bash
npm install type
```

## Utilities

Aside of general [`ensure`](docs/ensure.md) validation util, following kind of utilities for recognized JavaScript types are provided:

##### `*/coerce`

Restricted coercion into primitive type. Returns coerced value or `null` if value is not coercible per rules.

##### `*/is`

Object type/kind confirmation, returns either `true` or `false`.

##### `*/ensure`

Value validation. Returns input value (in primitive cases possibly coerced) or if value doesn't meet the constraints throws `TypeError` .

Each `*/ensure` utility, accepts following options (eventually passed with second argument):

- `isOptional` - Makes `null` or `undefined` accepted as valid value. In such case instead of `TypeError` being thrown, `null` is returned.
- `default` - A value to be returned if `null` or `undefined` is passed as an input value.
- `errorMessage` - Custom error message. Following placeholders can be used:
  - `%v` - To be replaced with short string representation of invalid value
  - `%n` - To be replaced with meaninfgul name (to be passed with `name` option) of validated value. Not effective if `name` option is not present
- `errorCode` - Eventual error code to be exposed on `.code` error property
- `name` - Meaningful name for validated value, to be used in error message, assuming it contains `%n` placeholder
- `Error` - Alternative error constructor to be used (defaults to `TypeError`)

### Index

#### General utils:

- [`ensure`](docs/ensure.md)

#### Type specific utils:

- **Value**
  - [`value/is`](docs/value.md#valueis)
  - [`value/ensure`](docs/value.md#valueensure)
- **Object**
  - [`object/is`](docs/object.md#objectis)
  - [`object/ensure`](docs/object.md#objectensure)
  - **Plain Object**
    - [`plain-object/is`](docs/plain-object.md#plain-objectis)
    - [`plain-object/ensure`](docs/plain-object.md#plain-objectensure)
- **String**
  - [`string/coerce`](docs/string.md#stringcoerce)
  - [`string/ensure`](docs/string.md#stringensure)
- **Number**
  - [`number/coerce`](docs/number.md#numbercoerce)
  - [`number/ensure`](docs/number.md#numberensure)
  - **Finite Number**
    - [`finite/coerce`](docs/finite.md#finitecoerce)
    - [`finite/ensure`](docs/finite.md#finiteensure)
  - **Integer Number**
    - [`integer/coerce`](docs/integer.md#integercoerce)
    - [`integer/ensure`](docs/integer.md#integerensure)
  - **Safe Integer Number**
    - [`safe-integer/coerce`](docs/safe-integer.md#safe-integercoerce)
    - [`safe-integer/ensure`](docs/.md#safe-integerensure)
  - **Natural Number**
    - [`natural-number/coerce`](docs/natural-number.md#natural-numbercoerce)
    - [`natural-number/ensure`](docs/natural-number.md#natural-numberensure)
  - **Array Length**
    - [`array-length/coerce`](docs/array-length.md#array-lengthcoerce)
    - [`array-length/ensure`](docs/array-length.md#array-lengthensure)
  - **Time Value**
    - [`time-value/coerce`](docs/time-value.md#time-valuecoerce)
    - [`time-value/ensure`](docs/time-value.md#time-valueensure)
- **BigInt**
  - [`big-int/coerce`](docs/big-int.md#big-intcoerce)
  - [`big-int/ensure`](docs/big-int.md#big-intensure)
- **Array Like**
  - [`array-like/is`](docs/array-like.md#array-likeis)
  - [`array-like/ensure`](docs/array-like.md#array-likeensure)
  - **Array**
    - [`array/is`](docs/array.md#arrayis)
    - [`array/ensure`](docs/array.md#arrayensure)
- **Iterable**
  - [`iterable/is`](docs/iterable.md#iterableis)
  - [`iterable/ensure`](docs/iterable.md#iterableensure)
- **Set**
  - [`set/is`](docs/set.md#setis)
  - [`set/ensure`](docs/set.md#setensure)
- **Map**
  - [`map/is`](docs/map.md#mapis)
  - [`map/ensure`](docs/map.md#mapensure)
- **Date**
  - [`date/is`](docs/date.md#dateis)
  - [`date/ensure`](docs/date.md#dateensure)
- **Function**
  - [`function/is`](docs/function.md#functionis)
  - [`function/ensure`](docs/function.md#functionensure)
  - **Constructor**
    - [`constructor/is`](docs/constructor.md#plain-functionis)
    - [`constructor/ensure`](docs/constructor.md#plain-functionensure)
  - **Plain Function**
    - [`plain-function/is`](docs/plain-function.md#plain-functionis)
    - [`plain-function/ensure`](docs/plain-function.md#plain-functionensure)
- **Reg Exp**
  - [`reg-exp/is`](docs/reg-exp.md#reg-expis)
  - [`reg-exp/ensure`](docs/.md#reg-expensure)
- **Thenable**
  - [`thenable/is`](docs/thenable.md#thenableis)
  - [`thenable/ensure`](docs/thenable.md#thenableensure)
  - **Promise**
    - [`promise/is`](docs/promise.md#promiseis)
    - [`promise/ensure`](docs/promise.md#promiseensure)
- **Error**
  - [`error/is`](docs/error.md#erroris)
  - [`error/ensure`](docs/error.md#errorensure)
- **Prototype**
  - [`prototype/is`](docs/prototype.md#prototypeis)

### Tests

    $ npm test

[build-image]: https://github.com/medikoo/type/workflows/Integrate/badge.svg
[build-url]: https://github.com/medikoo/type/actions?query=workflow%3AIntegrate
[cov-image]: https://img.shields.io/codecov/c/github/medikoo/type.svg
[cov-url]: https://codecov.io/gh/medikoo/type
[npm-image]: https://img.shields.io/npm/v/type.svg
[npm-url]: https://www.npmjs.com/package/type
