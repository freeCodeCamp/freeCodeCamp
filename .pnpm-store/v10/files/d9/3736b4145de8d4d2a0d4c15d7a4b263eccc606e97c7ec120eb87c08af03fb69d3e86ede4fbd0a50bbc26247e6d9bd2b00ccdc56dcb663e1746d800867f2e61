[![*nix build status][nix-build-image]][nix-build-url]
[![Windows build status][win-build-image]][win-build-url]
[![Tests coverage][cov-image]][cov-url]
[![npm version][npm-image]][npm-url]

# type

## Runtime validation and processing of JavaScript types

- Respects language nature and acknowledges its quirks
- Allows coercion in restricted forms (rejects clearly invalid input, normalizes permissible type deviations)
- No transpilation implied, written to work in all ECMAScript 3+ engines

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

Serves following kind of utilities:

##### `*/coerce`

Restricted coercion into primitive type. Returns coerced value or `null` if value is not coercible per rules.

##### `*/is`

Object type/kind confirmation, returns either `true` or `false`.

##### `*/ensure`

Value validation. Returns input value (in primitive cases possibly coerced) or if value doesn't meet the constraints throws `TypeError` .

Each `*/ensure` utility, accepts following options (eventually passed with second argument):

- `isOptional` - Makes `null` or `undefined` accepted as valid value. In such case instead of `TypeError` being thrown, `null` is returned.
- `default` - A value to be returned if `null` or `undefined` is passed as an input value.
- `errorMessage` - Custom error message (`%v` can be used as a placeholder for input value)

---

### Value

_Value_, any value that's neither `null` nor `undefined` .

#### `value/is`

Confirms whether passed argument is a _value_

```javascript
const isValue = require("type/value/is");

isValue({}); // true
isValue(null); // false
```

#### `value/ensure`

Ensures if given argument is a _value_. If it's a value it is returned back, if not `TypeError` is thrown

```javascript
const ensureValue = require("type/value/ensure");

const obj = {};

ensureValue(obj); // obj
ensureValue(null); // Thrown TypeError: Cannot use null
```

---

### Object

_Object_, any non-primitive value

#### `object/is`

Confirms if passed value is an object

```javascript
const isObject = require("type/object/is");

isObject({}); // true
isObject(true); // false
isObject(null); // false
```

#### `object/ensure`

If given argument is an object, it is returned back. Otherwise `TypeError` is thrown.

```javascript
const ensureObject = require("type/object/ensure");

const obj = {};

ensureObject(obj); // obj
ensureString(null); // Thrown TypeError: null is not an object
```

---

### String

_string_ primitive

#### `string/coerce`

Restricted string coercion. Returns string presentation for every value that follows below constraints

- is implicitly coercible to string
- is neither`null` nor `undefined`
- its `toString` method is not `Object.prototype.toString`

For all other values `null` is returned

```javascript
const coerceToString = require("type/string/coerce");

coerceToString(12); // "12"
coerceToString(undefined); // null
```

#### `string/ensure`

If given argument is a string coercible value (via [`string/coerce`](#stringcoerce)) returns result string.
Otherwise `TypeError` is thrown.

```javascript
const ensureString = require("type/string/ensure");

ensureString(12); // "12"
ensureString(null); // Thrown TypeError: null is not a string
```

---

### Number

_number_ primitive

#### `number/coerce`

Restricted number coercion. Returns number presentation for every value that follows below constraints

- is implicitly coercible to number
- is neither `null` nor `undefined`
- is not `NaN` and doesn't coerce to `NaN`

For all other values `null` is returned

```javascript
const coerceToNumber = require("type/number/coerce");

coerceToNumber("12"); // 12
coerceToNumber({}); // null
coerceToNumber(null); // null
```

#### `number/ensure`

If given argument is a number coercible value (via [`number/coerce`](#numbercoerce)) returns result number.
Otherwise `TypeError` is thrown.

```javascript
const ensureNumber = require("type/number/ensure");

ensureNumber(12); // "12"
ensureNumber(null); // Thrown TypeError: null is not a number
```

---

#### Finite Number

Finite _number_ primitive

##### `finite/coerce`

Follows [`number/coerce`](#numbercoerce) additionally rejecting `Infinity` and `-Infinity` values (`null` is returned if given values coerces to them)

```javascript
const coerceToFinite = require("type/finite/coerce");

coerceToFinite("12"); // 12
coerceToFinite(Infinity); // null
coerceToFinite(null); // null
```

##### `finite/ensure`

If given argument is a finite number coercible value (via [`finite/coerce`](#finitecoerce)) returns result number.
Otherwise `TypeError` is thrown.

```javascript
const ensureFinite = require("type/finite/ensure");

ensureFinite(12); // "12"
ensureFinite(null); // Thrown TypeError: null is not a finite number
```

---

#### Integer Number

Integer _number_ primitive

##### `integer/coerce`

Follows [`finite/coerce`](#finitecoerce) additionally stripping decimal part from the number

```javascript
const coerceToInteger = require("type/integer/coerce");

coerceToInteger("12.95"); // 12
coerceToInteger(Infinity); // null
coerceToInteger(null); // null
```

##### `integer/ensure`

If given argument is an integer coercible value (via [`integer/coerce`](#integercoerce)) returns result number.
Otherwise `TypeError` is thrown.

```javascript
const ensureInteger = require("type/integer/ensure");

ensureInteger(12.93); // "12"
ensureInteger(null); // Thrown TypeError: null is not an integer
```

---

#### Safe Integer Number

Safe integer _number_ primitive

##### `safe-integer/coerce`

Follows [`integer/coerce`](#integercoerce) but returns `null` in place of values which are beyond `Number.MIN_SAFE_INTEGER` and `Number.MAX_SAFE_INTEGER` range.

```javascript
const coerceToSafeInteger = require("type/safe-integer/coerce");

coerceToInteger("12.95"); // 12
coerceToInteger(9007199254740992); // null
coerceToInteger(null); // null
```

##### `safe-integer/ensure`

If given argument is a safe integer coercible value (via [`safe-integer/coerce`](#safe-integercoerce)) returns result number.
Otherwise `TypeError` is thrown.

```javascript
const ensureSafeInteger = require("type/safe-integer/ensure");

ensureSafeInteger(12.93); // "12"
ensureSafeInteger(9007199254740992); // Thrown TypeError: null is not a safe integer
```

---

#### Natural Number

Natural _number_ primitive

##### `natural-number/coerce`

Follows [`integer/coerce`](#integercoerce) but returns `null` for values below `0`

```javascript
const coerceToNaturalNumber = require("type/natural-number/coerce");

coerceToNaturalNumber("12.95"); // 12
coerceToNaturalNumber(-120); // null
coerceToNaturalNumber(null); // null
```

##### `natural-number/ensure`

If given argument is a natural number coercible value (via [`natural-number/coerce`](#natural-numbercoerce)) returns result number.
Otherwise `TypeError` is thrown.

```javascript
const ensureNaturalNumber = require("type/natural-number/ensure");

ensureNaturalNumber(12.93); // "12"
ensureNaturalNumber(-230); // Thrown TypeError: null is not a natural number
```

---

### Plain Object

A _plain object_

- Inherits directly from `Object.prototype` or `null`
- Is not a constructor's `prototype` property

#### `plain-object/is`

Confirms if given object is a _plain object_

```javascript
const isPlainObject = require("type/plain-object/is");

isPlainObject({}); // true
isPlainObject(Object.create(null)); // true
isPlainObject([]); // false
```

#### `plain-object/ensure`

If given argument is a plain object it is returned back. Otherwise `TypeError` is thrown.

```javascript
const ensurePlainObject = require("type/plain-object/ensure");

ensurePlainObject({}); // {}
ensureArray("foo"); // Thrown TypeError: foo is not a plain object
```

---

### Array

_Array_ instance

#### `array/is`

Confirms if given object is a native array

```javascript
const isArray = require("type/array/is");

isArray([]); // true
isArray({}); // false
isArray("foo"); // false
```

#### `array/ensure`

If given argument is an array, it is returned back. Otherwise `TypeError` is thrown.

```javascript
const ensureArray = require("type/array/ensure");

ensureArray(["foo"]); // ["foo"]
ensureArray("foo"); // Thrown TypeError: foo is not an array
```

---

#### Array Like

_Array-like_ value (any value with `length` property)

#### `array-like/is`

Restricted _array-like_ confirmation. Returns true for every value that meets following contraints

- is an _object_ (or with `allowString` option, a _string_)
- is not a _function_
- Exposes `length` that meets [`array-length`](#array-lengthcoerce) constraints

```javascript
const isArrayLike = require("type/array-like/is");

isArrayLike([]); // true
isArrayLike({}); // false
isArrayLike({ length: 0 }); // true
isArrayLike("foo"); // false
isArrayLike("foo", { allowString: true }); // true
```

#### `array-like/ensure`

If given argument is an _array-like_, it is returned back. Otherwise `TypeError` is thrown.

```javascript
const ensureArrayLike = require("type/array-like/ensure");

ensureArrayLike({ length: 0 }); // { length: 0 }
ensureArrayLike("foo", { allowString: true }); // "foo"
ensureArrayLike({}); // Thrown TypeError: null is not an iterable
```

---

#### Array length

_number_ primitive that conforms as valid _array length_

##### `array-length/coerce`

Follows [`safe-integer/coerce`](#safe-integercoerce) but returns `null` in place of values which are below `0`

```javascript
const coerceToArrayLength = require("type/safe-integer/coerce");

coerceToArrayLength("12.95"); // 12
coerceToArrayLength(9007199254740992); // null
coerceToArrayLength(null); // null
```

##### `array-length/ensure`

If given argument is an _array length_ coercible value (via [`array-length/coerce`](#array-lengthcoerce)) returns result number.
Otherwise `TypeError` is thrown.

```javascript
const ensureArrayLength = require("type/array-length/ensure");

ensureArrayLength(12.93); // "12"
ensureArrayLength(9007199254740992); // Thrown TypeError: null is not a valid array length
```

---

### Iterable

Value which implements _iterable_ protocol

#### `iterable/is`

Confirms if given object is an _iterable_ and is not a _string_ (unless `allowString` option is passed)

```javascript
const isIterable = require("type/iterable/is");

isIterable([]); // true
isIterable({}); // false
isIterable("foo"); // false
isIterable("foo", { allowString: true }); // true
```

Supports also `denyEmpty` option

```javascript
isIterable([], { denyEmpty: true }); // false
isIterable(["foo"], { denyEmpty: true }); // true
```

#### `iterable/ensure`

If given argument is an _iterable_, it is returned back. Otherwise `TypeError` is thrown.

```javascript
const ensureIterable = require("type/iterable/ensure");

ensureIterable([]); // []
ensureIterable("foo", { allowString: true }); // "foo"
ensureIterable({}); // Thrown TypeError: null is not expected iterable
```

Additionally items can be coreced with `coerceItem` option. Note that in this case:

- A newly created array with coerced values is returned
- Validation crashes if any of the items is not coercible

```javascript
ensureIterable(new Set(["foo", 12])); // ["foo", "12"]

ensureIterable(new Set(["foo", {}])); // Thrown TypeError: Set({ "foo", {} }) is not expected iterable
```

---

### Date

_Date_ instance

#### `date/is`

Confirms if given object is a native date, and is not an _Invalid Date_

```javascript
const isDate = require("type/date/is");

isDate(new Date()); // true
isDate(new Date("Invalid date")); // false
isDate(Date.now()); // false
isDate("foo"); // false
```

#### `date/ensure`

If given argument is a date object, it is returned back. Otherwise `TypeError` is thrown.

```javascript
const ensureDate = require("type/date/ensure");

const date = new Date();
ensureDate(date); // date
ensureDate(123123); // Thrown TypeError: 123123 is not a date object
```

---

### Time value

_number_ primitive which is a valid _time value_ (as used internally in _Date_ instances)

#### `time-value/coerce`

Follows [`integer/coerce`](#integercoerce) but returns `null` in place of values which go beyond 100 000 0000 days from unix epoch

```javascript
const coerceToTimeValue = require("type/time-value/coerce");

coerceToTimeValue(12312312); // true
coerceToTimeValue(Number.MAX_SAFE_INTEGER); // false
coerceToTimeValue("foo"); // false
```

##### `time-value/ensure`

If given argument is a _time value_ coercible value (via [`time-value/coerce`](#time-valuecoerce)) returns result number.
Otherwise `TypeError` is thrown.

```javascript
const ensureTimeValue = require("type/time-value/ensure");

ensureTimeValue(12.93); // "12"
ensureTimeValue(Number.MAX_SAFE_INTEGER); // Thrown TypeError: null is not a natural number
```

---

### Function

_Function_ instance

#### `function/is`

Confirms if given object is a native function

```javascript
const isFunction = require("type/function/is");

isFunction(function () {}); // true
isFunction(() => {}); // true
isFunction(class {}); // true
isFunction("foo"); // false
```

#### `function/ensure`

If given argument is a function object, it is returned back. Otherwise `TypeError` is thrown.

```javascript
const ensureFunction = require("type/function/ensure");

const fn = function () {};
ensureFunction(fn); // fn
ensureFunction(/foo/); // Thrown TypeError: /foo/ is not a function
```

---

#### Plain Function

A _Function_ instance that is not a _Class_

##### `plain-function/is`

Confirms if given object is a _plain function_

```javascript
const isPlainFunction = require("type/plain-function/is");

isPlainFunction(function () {}); // true
isPlainFunction(() => {}); // true
isPlainFunction(class {}); // false
isPlainFunction("foo"); // false
```

##### `plain-function/ensure`

If given argument is a _plain function_ object, it is returned back. Otherwise `TypeError` is thrown.

```javascript
const ensurePlainFunction = require("type/function/ensure");

const fn = function () {};
ensurePlainFunction(fn); // fn
ensurePlainFunction(class {}); // Thrown TypeError: class is not a plain function
```

---

### RegExp

_RegExp_ instance

#### `reg-exp/is`

Confirms if given object is a native regular expression object

```javascript
const isRegExp = require("type/reg-exp/is");

isRegExp(/foo/);
isRegExp({}); // false
isRegExp("foo"); // false
```

#### `reg-exp/ensure`

If given argument is a regular expression object, it is returned back. Otherwise `TypeError` is thrown.

```javascript
const ensureRegExp = require("type/reg-exp/ensure");

ensureRegExp(/foo/); // /foo/
ensureRegExp("foo"); // Thrown TypeError: null is not a regular expression object
```

---

### Promise

_Promise_ instance

#### `promise/is`

Confirms if given object is a native _promise_

```javascript
const isPromise = require("type/promise/is");

isPromise(Promise.resolve()); // true
isPromise({ then: () => {} }); // false
isPromise({}); // false
```

##### `promise/ensure`

If given argument is a promise, it is returned back. Otherwise `TypeError` is thrown.

```javascript
const ensurePromise = require("type/promise/ensure");

const promise = Promise.resolve();
ensurePromise(promise); // promise
eensurePromise({}); // Thrown TypeError: [object Object] is not a promise
```

---

#### Thenable

_Thenable_ object (an object with `then` method)

##### `thenable/is`

Confirms if given object is a _thenable_

```javascript
const isThenable = require("type/thenable/is");

isThenable(Promise.resolve()); // true
isThenable({ then: () => {} }); // true
isThenable({}); // false
```

##### `thenable/ensure`

If given argument is a _thenable_ object, it is returned back. Otherwise `TypeError` is thrown.

```javascript
const ensureThenable = require("type/thenable/ensure");

const promise = Promise.resolve();
ensureThenable(promise); // promise
ensureThenable({}); // Thrown TypeError: [object Object] is not a thenable object
```

---

### Error

_Error_ instance

#### `error/is`

Confirms if given object is a native error object

```javascript
const isError = require("type/error/is");

isError(new Error()); // true
isError({ message: "Fake error" }); // false
```

#### `error/ensure`

If given argument is an error object, it is returned back. Otherwise `TypeError` is thrown.

```javascript
const ensureError = require("type/error/ensure");

const someError = new Error("Some error");
ensureError(someError); // someError
ensureError({ message: "Fake error" }); // Thrown TypeError: [object Object] is not an error object
```

---

### Prototype

Some constructor's `prototype` property

#### `prototype/is`

Confirms if given object serves as a _prototype_ property

```javascript
const isPrototype = require("type/prototype/is");

isPrototype({}); // false
isPrototype(Object.prototype); // true
isPrototype(Array.prototype); // true
```

### Tests

    $ npm test

[nix-build-image]: https://semaphoreci.com/api/v1/medikoo-org/type/branches/master/shields_badge.svg
[nix-build-url]: https://semaphoreci.com/medikoo-org/type
[win-build-image]: https://ci.appveyor.com/api/projects/status/8nrtluuwsb5k9l8d?svg=true
[win-build-url]: https://ci.appveyor.com/api/project/medikoo/type
[cov-image]: https://img.shields.io/codecov/c/github/medikoo/type.svg
[cov-url]: https://codecov.io/gh/medikoo/type
[npm-image]: https://img.shields.io/npm/v/type.svg
[npm-url]: https://www.npmjs.com/package/type
