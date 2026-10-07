# Finite Number

Finite _number_ primitive

## `finite/coerce`

Follows [`number/coerce`](number.md#numbercoerce) additionally rejecting `Infinity` and `-Infinity` values (`null` is returned if given values coerces to them)

```javascript
const coerceToFinite = require("type/finite/coerce");

coerceToFinite("12"); // 12
coerceToFinite(Infinity); // null
coerceToFinite(null); // null
```

## `finite/ensure`

If given argument is a finite number coercible value (via [`finite/coerce`](#finitecoerce)) returns result number.
Otherwise `TypeError` is thrown.

```javascript
const ensureFinite = require("type/finite/ensure");

ensureFinite(12); // "12"
ensureFinite(null); // Thrown TypeError: null is not a finite number
```
