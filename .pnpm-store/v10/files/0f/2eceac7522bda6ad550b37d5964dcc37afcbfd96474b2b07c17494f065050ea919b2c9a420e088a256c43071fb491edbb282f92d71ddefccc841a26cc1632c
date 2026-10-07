# Function

_Function_ instance

## `function/is`

Confirms if given object is a native function

```javascript
const isFunction = require("type/function/is");

isFunction(function () {}); // true
isFunction(() => {}); // true
isFunction(class {}); // true
isFunction("foo"); // false
```

## `function/ensure`

If given argument is a function object, it is returned back. Otherwise `TypeError` is thrown.

```javascript
const ensureFunction = require("type/function/ensure");

const fn = function () {};
ensureFunction(fn); // fn
ensureFunction(/foo/); // Thrown TypeError: /foo/ is not a function
```
