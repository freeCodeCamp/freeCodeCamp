# Thenable

_Thenable_ object (an object with `then` method)

## `thenable/is`

Confirms if given object is a _thenable_

```javascript
const isThenable = require("type/thenable/is");

isThenable(Promise.resolve()); // true
isThenable({ then: () => {} }); // true
isThenable({}); // false
```

## `thenable/ensure`

If given argument is a _thenable_ object, it is returned back. Otherwise `TypeError` is thrown.

```javascript
const ensureThenable = require("type/thenable/ensure");

const promise = Promise.resolve();
ensureThenable(promise); // promise
ensureThenable({}); // Thrown TypeError: [object Object] is not a thenable object
```
