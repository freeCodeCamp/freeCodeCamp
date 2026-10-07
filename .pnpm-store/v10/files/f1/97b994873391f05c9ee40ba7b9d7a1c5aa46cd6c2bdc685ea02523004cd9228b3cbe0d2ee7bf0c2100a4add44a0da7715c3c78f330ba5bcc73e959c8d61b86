# Safe Integer Number

Safe integer _number_ primitive

## `safe-integer/coerce`

Follows [`integer/coerce`](integer.md#integercoerce) but returns `null` in place of values which are beyond `Number.MIN_SAFE_INTEGER` and `Number.MAX_SAFE_INTEGER` range.

```javascript
const coerceToSafeInteger = require("type/safe-integer/coerce");

coerceToInteger("12.95"); // 12
coerceToInteger(9007199254740992); // null
coerceToInteger(null); // null
```

## `safe-integer/ensure`

If given argument is a safe integer coercible value (via [`safe-integer/coerce`](#safe-integercoerce)) returns result number.
Otherwise `TypeError` is thrown.

```javascript
const ensureSafeInteger = require("type/safe-integer/ensure");

ensureSafeInteger(12.93); // "12"
ensureSafeInteger(9007199254740992); // Thrown TypeError: null is not a safe integer
```
