<p align=center>
  AssertionError and AssertionResult classes.
</p>

<p align=center>
  <a href="https://github.com/chaijs/assertion-error/actions">
    <img
      alt="build:?"
      src="https://github.com/chaijs/assertion-error/actions/workflows/nodejs.yml/badge.svg"
    />
  </a><a href="https://www.npmjs.com/package/assertion-error">
    <img
      alt="downloads:?"
      src="https://img.shields.io/npm/dm/assertion-error.svg"
    />
  </a><a href="">
    <img
      alt="devDependencies:none"
      src="https://img.shields.io/badge/dependencies-none-brightgreen"
    />
  </a>
</p>

## What is AssertionError?

Assertion Error is a module that contains two classes: `AssertionError`, which
is an instance of an `Error`, and `AssertionResult` which is not an instance of
Error.

These can be useful for returning from a function - if the function "succeeds"
return an `AssertionResult` and if the function fails return (or throw) an
`AssertionError`.

Both `AssertionError` and `AssertionResult` implement the `Result` interface:

```typescript
interface Result {
  name: "AssertionError" | "AssertionResult";
  ok: boolean;
  toJSON(...args: unknown[]): Record<string, unknown>;
}
```

So if a function returns `AssertionResult | AssertionError` it is easy to check
_which_ one is returned by checking either `.name` or `.ok`, or check
`instanceof Error`.

## Installation

### Node.js

`assertion-error` is available on [npm](http://npmjs.org).

```
$ npm install --save assertion-error
```

### Deno

`assertion_error` is available on
[Deno.land](https://deno.land/x/assertion_error)

```typescript
import {
  AssertionError,
  AssertionResult,
} from "https://deno.land/x/assertion_error@2.0.0/mod.ts";
```
