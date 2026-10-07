# Set

_Set_ instance

## `set/is`

Confirms if given object is a native set\_

```javascript
const isSet = require("type/set/is");

isSet(new Set()); // true
isSet(new Map()); // false
isSet({}); // false
```

## `Set/ensure`

If given argument is a _set_, it is returned back. Otherwise `TypeError` is thrown.

```javascript
const ensureSet = require("type/set/ensure");

const set = new Set();
ensureSet(set); // set
eensureSet({}); // Thrown TypeError: [object Object] is not a set
```
