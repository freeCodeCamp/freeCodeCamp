# Deferred Promise

The `DeferredPromise` class is a Promise-compatible abstraction that defers resolving/rejecting promises to another closure. This class is primarily useful when one part of your system establishes as promise but another part of your system fulfills it.

> This class is conceptually inspired by the [`createDeferredPromise()`](https://github.com/nodejs/node/blob/696fd4b14fc34cc2d01497a3abd9bb441b89be50/lib/internal/util.js#L468-L477) internal utility in Node.js. Unlike the Node.js implementation, however, `DeferredProimse` _extends_ a native `Promise`, allowing the consumer to handle deferred promises like regular promises (no `.promise` instance nesting).

## Getting started

```sh
npm install @open-draft/deferred-promise
```

## Documentation

- [**`createDeferredExecutor()`**](#createdeferredexecutor)
  - [`DeferredExecutor.state`](#deferredexecutorstate)
  - [`DeferredExecutor.resolve()`](#deferredexecutorresolve)
  - [`DeferredExecutor.reject()`](#deferredexecutorreject)
  - [`DeferredExecutor.rejectionReason`](#deferredexecutorrejectionreason)
- [**Class: `DeferredPromise`**](#class-deferredpromise)
  - [`new DeferredPromise()`](#new-defferedpromise)
  - [`deferredPromise.state`](#deferredpromisestate)
  - [`deferredPromise.resolve()`](#deferredpromiseresolve)
  - [`deferredPromise.reject()`](#deferredpromisereject)
  - [`deferredPromise.rejectionReason`](#deferredpromiserejectionreason)

---

## `createDeferredExecutor()`

Creates a Promise executor function that delegates its resolution to the current scope.

```js
import { createDeferredExecutor } from '@open-draft/deferred-promise'

const executor = createDeferredExecutor()
const promise = new Promise(executor)

executor.resolve('hello')
// executor.reject(new Error('Reason'))
```

Deferred executor allows you to control any promise remotely and doesn't affect the Promise instance in any way. Similar to the [`DeferredPromise`](#class-deferredpromise) instance, the deferred executor exposes additional promise properties like `state`, `rejectionReason`, `resolve`, and `reject`. In fact, the `DeferredPromise` class is implemented on top of the deferred executor.

```js
const executor = createDeferredExecutor()
const promise = new Promise(executor)

executor.reject('reason')

nextTick(() => {
  console.log(executor.rejectionReason) // "reason"
})
```

### `DeferredExecutor.state`

- `<"pending" | "fulfilled" | "rejected">` **Default:** `"pending"`

```js
const executor = createDeferredExecutor()
const promise = new Promise(executor)

console.log(executor.state) // "pending"
```

Calling [`resolve()`](#deferredexecutorresolve) and [`reject()`](#deferredexecutorreject) methods of the executor transitions the state to "fulfilled" and "rejected" respectively.

### `DeferredExecutor.resolve()`

Resolves the promise with a given value.

```js
const executor = createDeferredExecutor()
const promise = new Promise(executor)

console.log(executor.state) // "pending"

executor.resolve()

// The promise state is still "pending"
// because promises are settled in the next microtask.
console.log(executor.state) // "pending"

nextTick(() => {
  // In the next microtask, the promise's state is resolved.
  console.log(executor.state) // "fulfilled"
})
```

### `DeferredExecutor.reject()`

Rejects the promise with a given reason.

```js
const executor = createDeferredExecutor()
const promise = new Promise(executor)

executor.reject(new Error('Failed to fetch'))

nextTick(() => {
  console.log(executor.state) // "rejected"
  console.log(executor.rejectionReason) // Error("Failed to fetch")
})
```

You can access the rejection reason of the promise at any time by the [`rejectionReason`](#deferredexecutorrejectionreason) property of the deferred executor.

### `DeferredExecutor.rejectionReason`

Returns the reason of the promise rejection. If no reason has been provided to the `reject()` call, `undefined` is returned instead.

```js
const executor = createDeferredExecutor()
const promise = new Promise(executor)

promise.reject(new Error('Internal Server Error'))

nextTick(() => {
  console.log(promise.rejectionReason) // Error("Internal Server Error")
})
```

---

## Class: `DeferredPromise`

### `new DefferedPromise()`

Creates a new instance of a deferred promise.

```js
import { DeferredPromise } from '@open-draft/deferred-promise'

const promise = new DeferredPromise()
```

A deferred promise is a Promise-compatible class that constructs a regular Promise instance under the hood, controlling it via the [deferred executor](#createdeferredexecutor).

A deferred promise is fully compatible with the regular Promise, both type- and runtime-wise, e.g. a deferred promise can be chained and awaited normally.

```js
const promise = new DefferredPromise()
  .then((value) => value.toUpperCase())
  .then((value) => value.substring(0, 2))
  .catch((error) => console.error(error))

await promise
```

Unlike the regular Promise, however, a deferred promise doesn't accept the `executor` function as the constructor argument. Instead, the resolution of the deferred promise is deferred to the current scope (thus the name).

```js
function getPort() {
  // Notice that you don't provide any executor function
  // when constructing a deferred promise.
  const portPromise = new DeferredPromise()

  port.on('open', (port) => {
    // Resolve the deferred promise whenever necessary.
    portPromise.resolve(port)
  })

  // Return the deferred promise immediately.
  return portPromise
}
```

Use the [`resolve()`](#deferredpromiseresolve) and [`reject()`](#deferredpromisereject) methods of the deferred promise instance to resolve and reject that promise respectively.

### `deferredPromise.state`

See [`DeferredExecutor.state`](#deferredexecutorstate)

### `deferredPromise.resolve()`

See [`DeferredExecutor.resolve()`](#deferredexecutorresolve)

### `deferredPromise.reject()`

See [`DeferredExecutor.reject()`](#deferredexecutorreject)

### `deferredPromise.rejectionReason`

See [`DeferredExecutor.rejectionReason`](#deferredexecutorrejectionreason)

---

## Mentions

- [Jonas Kuske](https://github.com/jonaskuske) for the phenomenal work around improving Promise-compliance.
