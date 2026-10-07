# Hookable

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

Awaitable hooks system.

## Install

```bash
npx nypm i hookable
```

## Usage

**Method A: Create a hookable instance:**

```js
import { Hookable } from "hookable";

// Create a hookable instance
const hooks = new Hookable();

// Hook on 'hello'
hooks.hook("hello", () => {
  console.log("Hello World");
});

// Call 'hello' hook
hooks.callHook("hello");
```

> [!TIP]
> You can use `HookableCore` alternatively for less bundle and runtime footprint if simple `hook`/`callHook` functionality is only needed.

**Method B: Extend your base class from Hookable:**

```js
import { Hookable } from "hookable";

export default class FooLib extends Hookable {
  constructor() {
    // Call to parent to initialize
    super();
    // Initialize Hookable with custom logger
    // super(consola)
  }

  async someFunction() {
    // Call and wait for `hook1` hooks (if any) sequential
    await this.callHook("hook1");
  }
}
```

**Inside plugins, register for any hook:**

```js
const lib = new FooLib();

// Register a handler for `hook2`
lib.hook("hook2", async () => {
  /* ... */
});

// Register multiply handlers at once
lib.addHooks({
  hook1: async () => {
    /* ... */
  },
  hook2: [
    /* can be also an array */
  ],
});
```

**Unregistering hooks:**

```js
const lib = new FooLib();

const hook0 = async () => {
  /* ... */
};
const hook1 = async () => {
  /* ... */
};
const hook2 = async () => {
  /* ... */
};

// The hook() method returns an "unregister" function
const unregisterHook0 = lib.hook("hook0", hook0);
const unregisterHooks1and2 = lib.addHooks({ hook1, hook2 });

/* ... */

unregisterHook0();
unregisterHooks1and2();

// or

lib.removeHooks({ hook0, hook1 });
lib.removeHook("hook2", hook2);
```

**Triggering a hook handler once:**

```js
const lib = new FooLib();

const unregister = lib.hook("hook0", async () => {
  // Unregister as soon as the hook is executed
  unregister();

  /* ... */
});
```

## Hookable class

### `constructor()`

### `hook (name, fn)`

Register a handler for a specific hook. `fn` must be a function.

Returns an `unregister` function that, when called, will remove the registered handler.

### `hookOnce (name, fn)`

Similar to `hook` but unregisters hook once called.

Returns an `unregister` function that, when called, will remove the registered handler before first call.

### `addHooks(configHooks)`

Flatten and register hooks object.

Example:

```js
hookable.addHooks({
  test: {
    before: () => {},
    after: () => {},
  },
});
```

This registers `test:before` and `test:after` hooks at bulk.

Returns an `unregister` function that, when called, will remove all the registered handlers.

### `async callHook (name, ...args)`

Used by class itself to **sequentially** call handlers of a specific hook.

### `callHookWith (name, callerFn)`

If you need custom control over how hooks are called, you can provide a custom function that will receive an array of handlers of a specific hook.

`callerFn` if a callback function that accepts 3 arguments, `hooks`, `args` and `name`:

- `hooks`: Array of user hooks to be called
- `args`: Array of arguments that should be passed each time calling a hook
- `name`: Name of the hook

### `deprecateHook (old, name)`

Deprecate hook called `old` in favor of `name` hook.

### `deprecateHooks (deprecatedHooks)`

Deprecate all hooks from an object (keys are old and values or newer ones).

### `removeHook (name, fn)`

Remove a particular hook handler, if the `fn` handler is present.

### `removeHooks (configHooks)`

Remove multiple hook handlers.

Example:

```js
const handler = async () => {
  /* ... */
};

hookable.hook("test:before", handler);
hookable.addHooks({ test: { after: handler } });

// ...

hookable.removeHooks({
  test: {
    before: handler,
    after: handler,
  },
});
```

### `removeAllHooks`

Remove all hook handlers.

### `beforeEach (syncCallback)`

Registers a (sync) callback to be called before each hook is being called.

```js
hookable.beforeEach((event) => {
  console.log(`${event.name} hook is being called with ${event.args}`);
});
hookable.hook("test", () => {
  console.log("running test hook");
});

// test hook is being called with []
// running test hook
await hookable.callHook("test");
```

### `afterEach (syncCallback)`

Registers a (sync) callback to be called after each hook is being called.

```js
hookable.afterEach((event) => {
  console.log(`${event.name} hook called with ${event.args}`);
});
hookable.hook("test", () => {
  console.log("running test hook");
});

// running test hook
// test hook called with []
await hookable.callHook("test");
```

### `createDebugger`

Automatically logs each hook that is called and how long it takes to run.

```js
const debug = hookable.createDebugger(hooks, { tag: "something" });

hooks.callHook("some-hook", "some-arg");
// [something] some-hook: 0.21ms

debug.close();
```

## Migration

### From `4.x` to `5.x`

- Type checking improved. You can use `Hookable<T>` or `createHooks<T>()` to provide types interface **([c2e1e22](https://github.com/unjs/hookable/commit/c2e1e223d16e7bf87117cd8d72ad3ba211a333d8))**
- We no longer provide an IE11 compatible umd build. Instead, you should use an ESM-aware bundler such as webpack or rollup to transpile if needed.
- Logger param is dropped. We use `console.warn` by default for deprecated hooks.
- Package now uses named exports. You should import `{ Hookable }` instead of `Hookable` or use new `createHooks` util
- `mergeHooks` util is exported standalone. You should replace `Hookable.mergeHooks` and `this.mergeHooks` with new `{ mergeHooks }` export
- In versions < 5.0.0 when using `callHook` if an error happened by one of the hook callbacks, we was handling errors globally and call global `error` hook + `console.error` instead and resolve `callHook` promise! This sometimes makes confusing behavior when we think code worked but it didn't. v5 introduced a breaking change that when a hook throws an error, `callHook` also rejects instead of a global `error` event. This means you should be careful to handle all errors when using `callHook` now.

## Credits

Extracted from [Nuxt](https://github.com/nuxt/nuxt.js) hooks system originally introduced by [Sébastien Chopin](https://github.com/Atinux)

Thanks to [Joe Paice](https://github.com/RGBboy) for donating [hookable](https://www.npmjs.com/package/hookable) package name.

## License

MIT - Made with 💖

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/hookable?style=flat&colorA=18181B&colorB=F0DB4F
[npm-version-href]: https://npmjs.com/package/hookable
[npm-downloads-src]: https://img.shields.io/npm/dm/hookable?style=flat&colorA=18181B&colorB=F0DB4F
[npm-downloads-href]: https://npmjs.com/package/hookable
[codecov-src]: https://img.shields.io/codecov/c/gh/unjs/hookable/main?style=flat&colorA=18181B&colorB=F0DB4F
[codecov-href]: https://codecov.io/gh/unjs/h3
[bundle-src]: https://img.shields.io/bundlephobia/minzip/hookable?style=flat&colorA=18181B&colorB=F0DB4F
[bundle-href]: https://bundlephobia.com/result?p=hookable
[license-src]: https://img.shields.io/github/license/unjs/hookable.svg?style=flat&colorA=18181B&colorB=F0DB4F
[license-href]: https://github.com/unjs/hookable/blob/main/LICENSE
