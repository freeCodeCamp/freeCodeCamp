# `Promise.limit` _(ext/promise/limit)_

Helps to limit concurrency of asynchronous operations.

```javascript
const limit = require("ext/promise/limit").bind(Promise);

const limittedAsyncFunction = limit(2, asyncFunction);

imittedAsyncFunction(); // Async operation started
imittedAsyncFunction(); // Async operation started
imittedAsyncFunction(); // On hold until one of previously started finalizes
```
