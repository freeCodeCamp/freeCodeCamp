# Number

_number_ primitive

## `number/coerce`

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

## `number/ensure`

If given argument is a number coercible value (via [`number/coerce`](#numbercoerce)) returns result number.
Otherwise `TypeError` is thrown.

```javascript
const ensureNumber = require("type/number/ensure");

ensureNumber(12); // "12"
ensureNumber(null); // Thrown TypeError: null is not a number
```
