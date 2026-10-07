# Map

_Map_ instance

## `map/is`

Confirms if given object is a native _map_

```javascript
const isMap = require("type/map/is");

isMap(new Map()); // true
isMap(new Set()); // false
isMap({}); // false
```

## `map/ensure`

If given argument is a _map_, it is returned back. Otherwise `TypeError` is thrown.

```javascript
const ensureMap = require("type/map/ensure");

const map = new Map();
ensureMap(map); // map
eensureMap({}); // Thrown TypeError: [object Object] is not a map
```
