# Array

_Array_ instance

## `array/is`

Confirms if given object is a native array

```javascript
const isArray = require("type/array/is");

isArray([]); // true
isArray({}); // false
isArray("foo"); // false
```

## `array/ensure`

If given argument is an array, it is returned back. Otherwise `TypeError` is thrown.

```javascript
const ensureArray = require("type/array/ensure");

ensureArray(["foo"]); // ["foo"]
ensureArray("foo"); // Thrown TypeError: foo is not an array
```

### Confirming on items

Items can be validated by passing `ensureItem` option. Note that in this case:

- A newly created instance of an array with coerced item values is returned
- Error message lists up to three items which are invalid

```javascript
const ensureString = require("type/string/ensure");

ensureArray([12], { ensureItem: ensureString }); // ["12"]

/*
 Below invocation with crash with:
 TypeError: 23, [object Object], [object Object] is not a valid array.
            Following items are invalid: [object Object], [object Object]
*/
ensureArray([23, {}, {}], { ensureItem: ensureString });
```
