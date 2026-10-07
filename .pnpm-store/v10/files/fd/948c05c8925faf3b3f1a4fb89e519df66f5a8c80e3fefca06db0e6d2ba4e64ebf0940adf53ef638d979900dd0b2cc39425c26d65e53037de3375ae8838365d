# String

_string_ primitive

## `string/coerce`

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

## `string/ensure`

If given argument is a string coercible value (via [`string/coerce`](#stringcoerce)) returns result string.
Otherwise `TypeError` is thrown.

```javascript
const ensureString = require("type/string/ensure");

ensureString(12); // "12"
ensureString(null); // Thrown TypeError: null is not a string
```
