# `String.random(options = { ... })` _(ext/string/random)_

Returns generated random string, contained only of ascii cars `a-z` and `0-1`.
By default returns string of length `10`.

```javascript
const random = require("ext/string/random");

random(); // "upcfns0i4t"
random({ length: 3 }); // "5tw"
```

## Supported options:

### `isUnique: false`

Ensures generated string is unique among ones already returned.

_Note: When not applying this setting, accidental generation of same string is still highly unlikely. Provided option is just to provide a mean to eliminate possibility of an edge case of duplicate string being returned_

### `length: 10`

Desired length of result string

### `charset: null`

Fixed list of possible characters

```javascript
random({ charset: "abc" }); // "bacbccbbac"
```
