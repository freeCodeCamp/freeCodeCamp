# Integer Number

Integer _number_ primitive

## `integer/coerce`

Follows [`finite/coerce`](finite.md#finitecoerce) additionally stripping decimal part from the number

```javascript
const coerceToInteger = require("type/integer/coerce");

coerceToInteger("12.95"); // 12
coerceToInteger(Infinity); // null
coerceToInteger(null); // null
```

## `integer/ensure`

If given argument is an integer coercible value (via [`integer/coerce`](#integercoerce)) returns result number.
Otherwise `TypeError` is thrown.

```javascript
const ensureInteger = require("type/integer/ensure");

ensureInteger(12.93); // "12"
ensureInteger(null); // Thrown TypeError: null is not an integer
```
