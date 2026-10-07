# queue-microtask [![ci][ci-image]][ci-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url] [![javascript style guide][standard-image]][standard-url]

[ci-image]: https://img.shields.io/github/workflow/status/feross/queue-microtask/ci/master
[ci-url]: https://github.com/feross/queue-microtask/actions
[npm-image]: https://img.shields.io/npm/v/queue-microtask.svg
[npm-url]: https://npmjs.org/package/queue-microtask
[downloads-image]: https://img.shields.io/npm/dm/queue-microtask.svg
[downloads-url]: https://npmjs.org/package/queue-microtask
[standard-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[standard-url]: https://standardjs.com

### fast, tiny [`queueMicrotask`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/queueMicrotask) shim for modern engines

- Use [`queueMicrotask`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/queueMicrotask) in all modern JS engines.
- No dependencies. Less than 10 lines. No shims or complicated fallbacks.
- Optimal performance in all modern environments
  - Uses `queueMicrotask` in modern environments
  - Fallback to `Promise.resolve().then(fn)` in Node.js 10 and earlier, and old browsers (same performance as `queueMicrotask`)

## install

```
npm install queue-microtask
```

## usage

```js
const queueMicrotask = require('queue-microtask')

queueMicrotask(() => { /* this will run soon */ })
```

## What is `queueMicrotask` and why would one use it?

The `queueMicrotask` function is a WHATWG standard. It queues a microtask to be executed prior to control returning to the event loop.

A microtask is a short function which will run after the current task has completed its work and when there is no other code waiting to be run before control of the execution context is returned to the event loop.

The code `queueMicrotask(fn)` is equivalent to the code `Promise.resolve().then(fn)`. It is also very similar to [`process.nextTick(fn)`](https://nodejs.org/api/process.html#process_process_nexttick_callback_args) in Node.

Using microtasks lets code run without interfering with any other, potentially higher priority, code that is pending, but before the JS engine regains control over the execution context.

See the [spec](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#microtask-queuing) or [Node documentation](https://nodejs.org/api/globals.html#globals_queuemicrotask_callback) for more information.

## Who is this package for?

This package allows you to use `queueMicrotask` safely in all modern JS engines. Use it if you prioritize small JS bundle size over support for old browsers.

If you just need to support Node 12 and later, use `queueMicrotask` directly. If you need to support all versions of Node, use this package.

## Why not use `process.nextTick`?

In Node, `queueMicrotask` and `process.nextTick` are [essentially equivalent](https://nodejs.org/api/globals.html#globals_queuemicrotask_callback), though there are [subtle differences](https://github.com/YuzuJS/setImmediate#macrotasks-and-microtasks) that don't matter in most situations.

You can think of `queueMicrotask` as a standardized version of `process.nextTick` that works in the browser. No need to rely on your browser bundler to shim `process` for the browser environment.

## Why not use `setTimeout(fn, 0)`?

This approach is the most compatible, but it has problems. Modern browsers throttle timers severely, so `setTimeout(…, 0)` usually takes at least 4ms to run. Furthermore, the throttling gets even worse if the page is backgrounded. If you have many `setTimeout` calls, then this can severely limit the performance of your program.

## Why not use a microtask library like [`immediate`](https://www.npmjs.com/package/immediate) or [`asap`](https://www.npmjs.com/package/asap)?

These packages are great! However, if you prioritize small JS bundle size over optimal performance in old browsers then you may want to consider this package.

This package (`queue-microtask`) is four times smaller than `immediate`, twice as small as `asap`, and twice as small as using `process.nextTick` and letting the browser bundler shim it automatically.

Note: This package throws an exception in JS environments which lack `Promise` support -- which are usually very old browsers and Node.js versions.

Since the `queueMicrotask` API is supported in Node.js, Chrome, Firefox, Safari, Opera, and Edge, **the vast majority of users will get optimal performance**. Any JS environment with `Promise`, which is almost all of them, also get optimal performance. If you need support for JS environments which lack `Promise` support, use one of the alternative packages.

## What is a shim?

> In computer programming, a shim is a library that transparently intercepts API calls and changes the arguments passed, handles the operation itself or redirects the operation elsewhere. – [Wikipedia](https://en.wikipedia.org/wiki/Shim_(computing))

This package could also be described as a "ponyfill".

> A ponyfill is almost the same as a polyfill, but not quite. Instead of patching functionality for older browsers, a ponyfill provides that functionality as a standalone module you can use. – [PonyFoo](https://ponyfoo.com/articles/polyfills-or-ponyfills)

## API

### `queueMicrotask(fn)`

The `queueMicrotask()` method queues a microtask.

The `fn` argument is a function to be executed after all pending tasks have completed but before yielding control to the browser's event loop.

## license

MIT. Copyright (c) [Feross Aboukhadijeh](https://feross.org).
