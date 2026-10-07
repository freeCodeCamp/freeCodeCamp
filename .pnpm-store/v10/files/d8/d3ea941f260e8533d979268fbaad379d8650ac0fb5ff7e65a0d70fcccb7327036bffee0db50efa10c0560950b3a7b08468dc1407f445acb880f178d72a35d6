# BigInt

_bigint_ primitive

## `big-int/coerce`

BigInt coercion. If value can be coerced by `BigInt` its result is returned.
For all other values `null` is returned

```javascript
const coerceToBigInt = require("type/big-int/coerce");

coerceToBigInt(12); // 12n
coerceToBigInt(undefined); // null
```

## `big-int/ensure`

If given argument is a _bigint_ coercible value (via [`big-int/coerce`](#big-intcoerce)) returns result bigint.
Otherwise `TypeError` is thrown.

```javascript
const ensureBigInt = require("type/big-int/ensure");

ensureBigInt(12); // 12n
ensureBigInt(null); // Thrown TypeError: null is not a bigint
```
