# Constructor

A _Function_ instance that's a _constructor_ (either regular function or _class_)

## `constructor/is`

Confirms if given object is a constructor function\_

```javascript
const isConstructor = require("type/constructor/is");

isConstructor(function () {}); // true
isConstructor(() => {}); // false
isConstructor(class {}); // true
isConstructor("foo"); // false
```

## `constructor/ensure`

If given argument is a _constructor function_, it is returned back. Otherwise `TypeError` is thrown.

```javascript
const ensureConstructor = require("type/constructor/ensure");

const fn = function () {};
ensureConstructor(fn); // fn
ensureConstructor(() => {}); // Thrown TypeError: () => {} is not a constructor function
```
