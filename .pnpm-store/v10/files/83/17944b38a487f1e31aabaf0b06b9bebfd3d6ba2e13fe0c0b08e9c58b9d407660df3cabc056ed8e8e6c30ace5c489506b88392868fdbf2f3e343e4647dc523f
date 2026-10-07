# on-exit-leak-free

This module helps dispose of an object gracefully when the Node.js process exits.
It executes a function with a given parameter
on [`'exit'`](https://nodejs.org/api/process.html#event-exit) without leaking memory,
cleaning things up appropriately if the object is garbage collected.

Requires `WeakRef` and `FinalizationRegistry`, i.e. use Node v14+.

## Install

```bash
npm i on-exit-leak-free
```

## Example

```js
'use strict'

const { register, unregister } = require('on-exit-leak-free')
const assert = require('assert')

function setup () {
  // This object can be safely garbage collected,
  // and the resulting shutdown function will not be called.
  // There are no leaks.
  const obj = { foo: 'bar' }
  register(obj, shutdown)
  // use registerBeforeExit(obj, shutdown) to execute the function only
  // on beforeExit
  // call unregister(obj) to remove
}

let shutdownCalled = false

// Please make sure that the function passed to register()
// does not create a closure around unnecessary objects.
function shutdown (obj, eventName) {
  console.log(eventName) // beforeExit
  shutdownCalled = true
  assert.strictEqual(obj.foo, 'bar')
}

setup()

process.on('exit', function () {
  assert.strictEqual(shutdownCalled, true)
})
```

## License

MIT
