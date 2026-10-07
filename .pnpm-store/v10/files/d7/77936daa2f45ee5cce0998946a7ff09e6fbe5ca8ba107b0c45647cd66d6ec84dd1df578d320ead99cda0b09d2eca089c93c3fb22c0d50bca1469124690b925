# quansync

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

Create sync/async APIs with usable logic.

**Quan**tum + **Sync** - "_Superposition_" between `sync` and `async`.

- Typesafe
- ESM, modern JavaScript
- Zero dependencies

Heavily inspired by [`genasync`](https://github.com/loganfsmyth/gensync) by [@loganfsmyth](https://github.com/loganfsmyth).

## Why & How

Please refer to Anthony's blog post: [**Async, Sync, in Between**](https://antfu.me/posts/async-sync-in-between).

## Usage

```bash
pnpm i quansync
```

```ts
import fs from 'node:fs'
import { quansync } from 'quansync'

// Create a quansync function by providing `sync` and `async` implementations
const readFile = quansync({
  sync: (path: string) => fs.readFileSync(path),
  async: (path: string) => fs.promises.readFile(path),
})

// Create a quansync function by providing a generator function
const myFunction = quansync(function* (filename) {
  // Use `yield*` to call another quansync function
  const code = yield* readFile(filename, 'utf8')

  return `// some custom prefix\n${code}`
})

// Use it as a sync function
const result = myFunction.sync('./some-file.js')

// Use it as an async function
const asyncResult = await myFunction.async('./some-file.js')
```

### `getIsAsync`

Returns a boolean indicating whether the current execution is in async mode.

```ts
import { getIsAsync, quansync } from 'quansync'

const fn = quansync(function* () {
  const isAsync: boolean = yield* getIsAsync()
  console.log(isAsync)
})

fn.sync() // false
await fn() // true
await fn.async() // true
```

## Build-time Macro

If you don't like the `function*` and `yield*` syntax, we also provide a build-time macro via [unplugin-quansync](https://github.com/quansync-dev/unplugin-quansync#usage) allowing you use quansync with async/await syntax, while still able to get the sync version out of that.

Here is an example:

```ts
import fs from 'node:fs'
import { quansync } from 'quansync/macro'

// Create a quansync function by providing `sync` and `async` implementations
const readFile = quansync({
  sync: (path: string) => fs.readFileSync(path),
  async: (path: string) => fs.promises.readFile(path),
})

// Create a quansync function by providing an **async** function
const myFunction = quansync(async (filename) => {
  // Use `await` to call another quansync function
  const code = await readFile(filename, 'utf8')

  return `// some custom prefix\n${code}`
})

// Use it as a sync function
const result = myFunction.sync('./some-file.js')

// Use it as an async function
const asyncResult = await myFunction.async('./some-file.js')
```

For more details on usage, refer to [unplugin-quansync's docs](https://github.com/unplugin/unplugin-quansync#usage).

## Benchmark

Run the following command to benchmark the performance of `quansync`:

```bash
pnpm run build && pnpm run benchmark
```

Benchmark results indicate that each `yield` incurs an overhead of
approximately 150 ns, comparable to that of `await sync()`. (On Apple M1 Max)

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/antfu/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/antfu/static/sponsors.svg'/>
  </a>
</p>

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/sxzz/sponsors/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/sxzz/sponsors/sponsors.svg'/>
  </a>
</p>

## License

[MIT](./LICENSE) License © [Anthony Fu](https://github.com/antfu) and [Kevin Deng](https://github.com/sxzz)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/quansync?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/quansync
[npm-downloads-src]: https://img.shields.io/npm/dm/quansync?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/quansync
[bundle-src]: https://img.shields.io/bundlephobia/minzip/quansync?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=quansync
[license-src]: https://img.shields.io/github/license/antfu/quansync.svg?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/antfu/quansync/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/quansync
