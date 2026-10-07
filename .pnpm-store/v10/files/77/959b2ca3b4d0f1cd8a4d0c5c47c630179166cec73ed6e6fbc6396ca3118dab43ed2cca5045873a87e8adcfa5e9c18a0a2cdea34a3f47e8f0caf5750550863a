# Retry utility

by [Nicholas C. Zakas](https://humanwhocodes.com)

If you find this useful, please consider supporting my work with a [donation](https://humanwhocodes.com/donate) or [nominate me](https://stars.github.com/nominate/) for a GitHub Star.

## Description

A utility for retrying failed async JavaScript calls based on the error returned.

## Usage

### Node.js

Install using [npm][npm] or [yarn][yarn]:

```
npm install @humanwhocodes/retry

# or

yarn add @humanwhocodes/retry
```

Import into your Node.js project:

```js
// CommonJS
const { Retrier } = require("@humanwhocodes/retry");

// ESM
import { Retrier } from "@humanwhocodes/retry";
```

### Deno

Install using [JSR](https://jsr.io):

```shell
deno add @humanwhocodes/retry

#or

jsr add @humanwhocodes/retry
```

Then import into your Deno project:

```js
import { Retrier } from "@humanwhocodes/retry";
```

### Bun

Install using this command:

```
bun add @humanwhocodes/retry
```

Import into your Bun project:

```js
import { Retrier } from "@humanwhocodes/retry";
```

### Browser

It's recommended to import the minified version to save bandwidth:

```js
import { Retrier } from "https://cdn.skypack.dev/@humanwhocodes/retry?min";
```

However, you can also import the unminified version for debugging purposes:

```js
import { Retrier } from "https://cdn.skypack.dev/@humanwhocodes/retry";
```

## API

After importing, create a new instance of `Retrier` and specify the function to run on the error. This function should return `true` if you want the call retried and `false` if not.

```js
// this instance will retry if the specific error code is found
const retrier = new Retrier(error => {
    return error.code === "ENFILE" || error.code === "EMFILE";
});
```

Then, call the `retry()` method around the function you'd like to retry, such as:

```js
import fs from "fs/promises";

const retrier = new Retrier(error => {
    return error.code === "ENFILE" || error.code === "EMFILE";
});

const text = await retrier.retry(() => fs.readFile("README.md", "utf8"));
```

The `retry()` method will either pass through the result on success or wait and retry on failure. Any error that isn't caught by the retrier is automatically rejected so the end result is a transparent passing through of both success and failure.

### Setting a Timeout

You can control how long a task will attempt to retry before giving up by passing the `timeout` option to the `Retrier` constructor. By default, the timeout is one minute.

```js
import fs from "fs/promises";

const retrier = new Retrier(error => {
    return error.code === "ENFILE" || error.code === "EMFILE";
}, { timeout: 100_000 });

const text = await retrier.retry(() => fs.readFile("README.md", "utf8"));
```

When a call times out, it rejects the first error that was received from calling the function.

### Setting a Concurrency Limit

When processing a large number of function calls, you can limit the number of concurrent function calls by passing the `concurrency` option to the `Retrier` constructor. By default, `concurrency` is 1000.

```js
import fs from "fs/promises";

const retrier = new Retrier(error => {
    return error.code === "ENFILE" || error.code === "EMFILE";
}, { concurrency: 100 });

const filenames = getFilenames();
const contents = await Promise.all(
    filenames.map(filename => retrier.retry(() => fs.readFile(filename, "utf8"))
);
```

### Aborting with `AbortSignal`

You can also pass an `AbortSignal` to cancel a retry:

```js
import fs from "fs/promises";

const controller = new AbortController();
const retrier = new Retrier(error => {
    return error.code === "ENFILE" || error.code === "EMFILE";
});

const text = await retrier.retry(
    () => fs.readFile("README.md", "utf8"),
    { signal: controller.signal }
);
```

## Developer Setup

1. Fork the repository
2. Clone your fork
3. Run `npm install` to setup dependencies
4. Run `npm test` to run tests

### Debug Output

Enable debugging output by setting the `DEBUG` environment variable to `"@hwc/retry"` before running.

## License

Apache 2.0

## Prior Art

This utility is inspired by, and contains code from [`graceful-fs`](https://github.com/isaacs/node-graceful-fs).

[npm]: https://npmjs.com/
[yarn]: https://yarnpkg.com/
