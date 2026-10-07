# `until-async`

Gracefully handle a Promise using `async`/`await`.

## Why?

With the addition of `async`/`await` keywords in ECMAScript 2017 the handling of Promises became much easier. However, one must keep in mind that the `await` keyword provides no standard error handling API. Consider this usage:

```js
async function getUser(id) {
  const data = await fetchUser(id)
  // Work with "data"...
}
```

In case `fetchUser()` throws an error, the entire `getUser()` function's scope will terminate. Because of this, it's recommended to implement error handling using `try`/`catch` block wrapping `await` expressions:

```js
async function getUser(id) {
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
npm install until-async
```

### Usage

```js
import { until } from 'until-async'

async function getUserById(id) {
  const [error, data] = await until(() => fetchUser(id))

  if (error) {
    return handleError(error)
  }

  return data
}
```

### Usage with TypeScript

```ts
import { until } from 'until-async'

interface User {
  firstName: string
  age: number
}

interface UserFetchError {
  type: 'FORBIDDEN' | 'NOT_FOUND'
  message?: string
}

async function getUserById(id: string) {
  const [error, data] = await until<UserFetchError, User>(() => fetchUser(id))

  if (error) {
    return handleError(error.type, error.message)
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
const [error, data] = until(async () => {
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

## Special thanks

- [giuseppegurgone](https://twitter.com/giuseppegurgone) for the discussion about the original `until` API.
