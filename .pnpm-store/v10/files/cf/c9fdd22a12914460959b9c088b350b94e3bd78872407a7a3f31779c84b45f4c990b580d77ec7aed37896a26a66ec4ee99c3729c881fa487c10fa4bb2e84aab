# Promise

_Promise_ instance

## `promise/is`

Confirms if given object is a native _promise_

```javascript
const isPromise = require("type/promise/is");

isPromise(Promise.resolve()); // true
isPromise({ then: () => {} }); // false
isPromise({}); // false
```

## `promise/ensure`

If given argument is a promise, it is returned back. Otherwise `TypeError` is thrown.

```javascript
const ensurePromise = require("type/promise/ensure");

const promise = Promise.resolve();
ensurePromise(promise); // promise
eensurePromise({}); // Thrown TypeError: [object Object] is not a promise
```
