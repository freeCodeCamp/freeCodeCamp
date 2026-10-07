# `outvariant`

Type-safe implementation of invariant with positionals.

## Motivation

### Type-safely

This implementation asserts the given predicate expression so it's treated as non-nullable after the `invariant` call:

```ts
// Regular invariant:
invariant(user, 'Failed to fetch')
user?.firstName // "user" is possibly undefined

// Outvariant:
invariant(user, 'Failed to fetch')
user.firstName // OK, "invariant" ensured the "user" exists
```

### Positionals support

This implementation uses [rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters) to support dynamic number of positionals:

```js
invariant(predicate, 'Expected %s but got %s', 'one', false)
```

## What is this for?

Invariant is a shorthand function that asserts a given predicate and throws an error if that predicate is false.

Compare these two pieces of code identical in behavior:

```js
if (!token) {
  throw new Error(`Expected a token to be set but got ${typeof token}`)
}
```

```js
import { invariant } from 'outvariant'

invariant(token, 'Expected a token to be set but got %s', typeof token)
```

Using `invariant` reduces the visual nesting of the code and leads to cleaner error messages thanks to formatted positionals (i.e. the `%s` (string) positional above).

## Usage

### Install

```sh
npm install outvariant
# or
yarn add outvariant
```

> You may want to install this library as a dev dependency (`-D`) based on your usage.

### Write an assertion

```js
import { invariant } from 'outvariant'

invariant(user, 'Failed to load: expected user, but got %o', user)
```

## Positionals

The following positional tokens are supported:

| Token     | Expected value type                                     |
| --------- | ------------------------------------------------------- |
| `%s`      | String                                                  |
| `%d`/`%i` | Number                                                  |
| `%j`      | JSON (non-stringified)                                  |
| `%o`      | Arbitrary object or object-like (i.e. a class instance) |

Whenever present in the error message, a positional token will look up the value to insert in its place from the arguments given to `invariant`.

```js
invariant(
  false,
  'Expected the "%s" property but got %j',
  // Note that positionals are sensitive to order:
  // - "firstName" replaces "%s" because it's first.
  // - {"id":1} replaces "%j" because it's second.
  'firstName',
  {
    id: 1,
  }
)
```

## Polymorphic errors

It is possible to throw a custom `Error` instance using `invariant.as`:

```js
import { invariant } from 'outvariant'

class NetworkError extends Error {
  constructor(message) {
    super(message)
  }
}

invariant.as(NetworkError, res.fulfilled, 'Failed to handle response')
```

Note that providing a custom error constructor as the argument to `invariant.as` requires the custom constructor's signature to be compatible with the `Error` class constructor.

If your error constructor has a different signature, you can pass a function as the first argument to `invariant.as` that creates a new custom error instance.

```js
import { invariant } from 'outvariant'

class NetworkError extends Error {
  constructor(statusCode, message) {
    super(message)
    this.statusCode = statusCode
  }
}

invariant.as(
  (message) => new NetworkError(500, message),
  res.fulfilled,
  'Failed to handle response'
)
```

Abstract the error into helper functions for flexibility:

```js
function toNetworkError(statusCode) {
  return (message) => new NetworkError(statusCode, message)
}

invariant.as(toNetworkError(404), res?.user?.id, 'User Not Found')
invariant.as(toNetworkError(500), res.fulfilled, 'Internal Server Error')
```

## Contributing

Please [open an issue](https://github.com/open-draft/outvariant/issues) or [submit a pull request](https://github.com/open-draft/outvariant/pulls) if you wish to contribute. Thank you.
