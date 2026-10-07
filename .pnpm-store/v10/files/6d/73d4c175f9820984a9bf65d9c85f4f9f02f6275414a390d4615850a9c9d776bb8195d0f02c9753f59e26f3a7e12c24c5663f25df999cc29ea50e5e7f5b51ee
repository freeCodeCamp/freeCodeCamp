[![Latest release](https://img.shields.io/npm/v/@open-draft/until.svg)](https://www.npmjs.com/package/@open-draft/until)

# `until`

Gracefully handle a Promise using `async`/`await`.

## Why?

With the addition of `async`/`await` keywords in ECMAScript 2017 the handling of Promises became much easier. However, one must keep in mind that the `await` keyword provides no standard error handling API. Consider this usage:

```js
function getUser(id) {
  const data = await fetchUser(id)
  // Work with "data"...
}
```

In case `fetchUser()` throws an error, the entire `getUser()` function's scope will terminate. Because of this, it's recommended to implement error handling using `try`/`catch` block wrapping `await` expressions:

```js
function getUser(id)
  let data = null

  try {
    data = await asyncAction()
  } catch (error) {
    console.error(error)
  }

  // Work with "data"...
}
```

While this is a semantically valid approach, constructing `try`/`catch` around each awaited operation may be tedious and get overlooked at times. Such error handling also introduces separate closures for execution and error scenarios of an asynchronous operation.

This library encapsulates the `try`/`catch` error handling in a utility function that does not create a separate closure and exposes a NodeJS-friendly API to work with errors and resolved data.

## Getting started

### Install

```bash
npm install @open-draft/until
```

### Usage

```js
import { until } from '@open-draft/until'

async function(id) {
  const { error, data } = await until(() => fetchUser(id))

  if (error) {
    return handleError(error)
  }

  return data
}
```

### Usage with TypeScript

```ts
import { until } from '@open-draft/until'

interface User {
  firstName: string
  age: number
}

interface UserFetchError {
  type: 'FORBIDDEN' | 'NOT_FOUND'
  message?: string
}

async function(id: string) {
  const { error, data } = await until<UserFetchError, User>(() => fetchUser(id))

  if (error) {
    handleError(error.type, error.message)
  }

  return data.firstName
}
```

## Frequently asked questions

### Why does `until` accept a function and not a `Promise` directly?

This has been intentionally introduced to await a single logical unit as opposed to a single `Promise`.

```js
// Notice how a single "until" invocation can handle
// a rather complex piece of logic. This way any rejections
// or exceptions happening within the given function
// can be handled via the same "error".
const { error, data } = until(async () => {
  const user = await fetchUser()
  const nextUser = normalizeUser(user)
  const transaction = await saveModel('user', user)

  invariant(transaction.status === 'OK', 'Saving user failed')

  return transaction.result
})

if (error) {
  // Handle any exceptions happened within the function.
}
```

### Why does `until` return an object and not an array?

The `until` function used to return an array of shape `[error, data]` prior to `2.0.0`. That has been changed, however, to get proper type-safety using discriminated union type.

Compare these two examples:

```ts
const [error, data] = await until(() => action())

if (error) {
  return null
}

// Data still has ambiguous "DataType | null" type here
// even after you've checked and handled the "error" above.
console.log(data)
```

```ts
const result = await until(() => action())

// At this point, "data" is ambiguous "DataType | null"
// which is correct, as you haven't checked nor handled the "error".

if (result.error) {
  return null
}

// Data is strict "DataType" since you've handled the "error" above.
console.log(result.data)
```

> It's crucial to keep the entire result of the `Promise` in a single variable and not destructure it. TypeScript will always keep the type of `error` and `data` as it was upon destructuring, ignoring any type guards you may perform later on.

## Special thanks

- [giuseppegurgone](https://twitter.com/giuseppegurgone) for the discussion about the original `until` API.
