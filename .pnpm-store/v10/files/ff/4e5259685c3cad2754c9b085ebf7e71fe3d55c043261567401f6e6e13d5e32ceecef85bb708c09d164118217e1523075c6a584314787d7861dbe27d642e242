# Time value

_number_ primitive which is a valid _time value_ (as used internally in _Date_ instances)

## `time-value/coerce`

Follows [`integer/coerce`](integer.md#integercoerce) but returns `null` in place of values which go beyond 100 000 0000 days from unix epoch

```javascript
const coerceToTimeValue = require("type/time-value/coerce");

coerceToTimeValue(12312312); // true
coerceToTimeValue(Number.MAX_SAFE_INTEGER); // false
coerceToTimeValue("foo"); // false
```

## `time-value/ensure`

If given argument is a _time value_ coercible value (via [`time-value/coerce`](#time-valuecoerce)) returns result number.
Otherwise `TypeError` is thrown.

```javascript
const ensureTimeValue = require("type/time-value/ensure");

ensureTimeValue(12.93); // "12"
ensureTimeValue(Number.MAX_SAFE_INTEGER); // Thrown TypeError: null is not a natural number
```
