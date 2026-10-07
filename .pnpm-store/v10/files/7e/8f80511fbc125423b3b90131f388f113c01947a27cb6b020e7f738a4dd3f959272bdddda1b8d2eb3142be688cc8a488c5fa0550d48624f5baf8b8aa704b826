# Natural Number

Natural _number_ primitive

## `natural-number/coerce`

Follows [`integer/coerce`](integer.md#integercoerce) but returns `null` for values below `0`

```javascript
const coerceToNaturalNumber = require("type/natural-number/coerce");

coerceToNaturalNumber("12.95"); // 12
coerceToNaturalNumber(-120); // null
coerceToNaturalNumber(null); // null
```

## `natural-number/ensure`

If given argument is a natural number coercible value (via [`natural-number/coerce`](#natural-numbercoerce)) returns result number.
Otherwise `TypeError` is thrown.

```javascript
const ensureNaturalNumber = require("type/natural-number/ensure");

ensureNaturalNumber(12.93); // "12"
ensureNaturalNumber(-230); // Thrown TypeError: null is not a natural number
```
