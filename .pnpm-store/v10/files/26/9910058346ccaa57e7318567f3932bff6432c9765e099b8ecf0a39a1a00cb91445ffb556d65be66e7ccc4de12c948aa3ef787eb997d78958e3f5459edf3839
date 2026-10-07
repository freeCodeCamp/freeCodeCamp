# RegExp

_RegExp_ instance

## `reg-exp/is`

Confirms if given object is a native regular expression object

```javascript
const isRegExp = require("type/reg-exp/is");

isRegExp(/foo/);
isRegExp({}); // false
isRegExp("foo"); // false
```

## `reg-exp/ensure`

If given argument is a regular expression object, it is returned back. Otherwise `TypeError` is thrown.

```javascript
const ensureRegExp = require("type/reg-exp/ensure");

ensureRegExp(/foo/); // /foo/
ensureRegExp("foo"); // Thrown TypeError: null is not a regular expression object
```
