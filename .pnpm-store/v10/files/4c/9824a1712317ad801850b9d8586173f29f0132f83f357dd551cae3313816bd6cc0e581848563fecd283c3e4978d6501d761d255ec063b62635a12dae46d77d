# Array Like

_Array-like_ value (any value with `length` property)

## `array-like/is`

Restricted _array-like_ confirmation. Returns true for every value that meets following contraints

- is an _object_ (or with `allowString` option, a _string_)
- is not a _function_
- Exposes `length` that meets [`array-length`](array-length.md#array-lengthcoerce) constraints

```javascript
const isArrayLike = require("type/array-like/is");

isArrayLike([]); // true
isArrayLike({}); // false
isArrayLike({ length: 0 }); // true
isArrayLike("foo"); // false
isArrayLike("foo", { allowString: true }); // true
```

## `array-like/ensure`

If given argument is an _array-like_, it is returned back. Otherwise `TypeError` is thrown.

```javascript
const ensureArrayLike = require("type/array-like/ensure");

ensureArrayLike({ length: 0 }); // { length: 0 }
ensureArrayLike("foo", { allowString: true }); // "foo"
ensureArrayLike({}); // Thrown TypeError: null is not an iterable
```
