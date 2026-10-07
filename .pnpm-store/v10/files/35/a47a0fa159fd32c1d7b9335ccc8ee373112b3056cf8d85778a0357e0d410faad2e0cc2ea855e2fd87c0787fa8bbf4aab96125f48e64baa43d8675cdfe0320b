# universalify

[![Travis branch](https://img.shields.io/travis/RyanZim/universalify/master.svg)](https://travis-ci.org/RyanZim/universalify)
![Coveralls github branch](https://img.shields.io/coveralls/github/RyanZim/universalify/master.svg)
![npm](https://img.shields.io/npm/dm/universalify.svg)
![npm](https://img.shields.io/npm/l/universalify.svg)

Make a callback- or promise-based function support both promises and callbacks.

Uses the native promise implementation.

## Installation

```bash
npm install universalify
```

## API

### `universalify.fromCallback(fn)`

Takes a callback-based function to universalify, and returns the universalified  function.

Function must take a callback as the last parameter that will be called with the signature `(error, result)`. `universalify` does not support calling the callback with three or more arguments, and does not ensure that the callback is only called once.

```js
function callbackFn (n, cb) {
  setTimeout(() => cb(null, n), 15)
}

const fn = universalify.fromCallback(callbackFn)

// Works with Promises:
fn('Hello World!')
.then(result => console.log(result)) // -> Hello World!
.catch(error => console.error(error))

// Works with Callbacks:
fn('Hi!', (error, result) => {
  if (error) return console.error(error)
  console.log(result)
  // -> Hi!
})
```

### `universalify.fromPromise(fn)`

Takes a promise-based function to universalify, and returns the universalified  function.

Function must return a valid JS promise. `universalify` does not ensure that a valid promise is returned.

```js
function promiseFn (n) {
  return new Promise(resolve => {
    setTimeout(() => resolve(n), 15)
  })
}

const fn = universalify.fromPromise(promiseFn)

// Works with Promises:
fn('Hello World!')
.then(result => console.log(result)) // -> Hello World!
.catch(error => console.error(error))

// Works with Callbacks:
fn('Hi!', (error, result) => {
  if (error) return console.error(error)
  console.log(result)
  // -> Hi!
})
```

## License

MIT
