# Array length

_number_ primitive that conforms as valid _array length_

## `array-length/coerce`

Follows [`safe-integer/coerce`](safe-integer.md#safe-integercoerce) but returns `null` in place of values which are below `0`

```javascript
const coerceToArrayLength = require("type/safe-integer/coerce");

coerceToArrayLength("12.95"); // 12
coerceToArrayLength(9007199254740992); // null
coerceToArrayLength(null); // null
```

## `array-length/ensure`

If given argument is an _array length_ coercible value (via [`array-length/coerce`](#array-lengthcoerce)) returns result number.
Otherwise `TypeError` is thrown.

```javascript
const ensureArrayLength = require("type/array-length/ensure");

ensureArrayLength(12.93); // "12"
ensureArrayLength(9007199254740992); // Thrown TypeError: 9007199254740992 is not a valid array length
```
