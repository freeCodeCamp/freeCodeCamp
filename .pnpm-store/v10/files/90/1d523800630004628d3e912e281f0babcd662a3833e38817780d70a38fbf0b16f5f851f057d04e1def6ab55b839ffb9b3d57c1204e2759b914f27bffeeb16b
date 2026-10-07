# Plain Function

A _Function_ instance that is not a _Class_

## `plain-function/is`

Confirms if given object is a _plain function_

```javascript
const isPlainFunction = require("type/plain-function/is");

isPlainFunction(function () {}); // true
isPlainFunction(() => {}); // true
isPlainFunction(class {}); // false
isPlainFunction("foo"); // false
```

## `plain-function/ensure`

If given argument is a _plain function_ object, it is returned back. Otherwise `TypeError` is thrown.

```javascript
const ensurePlainFunction = require("type/function/ensure");

const fn = function () {};
ensurePlainFunction(fn); // fn
ensurePlainFunction(class {}); // Thrown TypeError: class is not a plain function
```
