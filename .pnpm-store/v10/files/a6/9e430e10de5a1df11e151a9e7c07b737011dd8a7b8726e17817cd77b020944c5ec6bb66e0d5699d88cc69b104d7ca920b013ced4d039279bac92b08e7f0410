# Error

_Error_ instance

## `error/is`

Confirms if given object is a native error object

```javascript
const isError = require("type/error/is");

isError(new Error()); // true
isError({ message: "Fake error" }); // false
```

## `error/ensure`

If given argument is an error object, it is returned back. Otherwise `TypeError` is thrown.

```javascript
const ensureError = require("type/error/ensure");

const someError = new Error("Some error");
ensureError(someError); // someError
ensureError({ message: "Fake error" }); // Thrown TypeError: [object Object] is not an error object
```
