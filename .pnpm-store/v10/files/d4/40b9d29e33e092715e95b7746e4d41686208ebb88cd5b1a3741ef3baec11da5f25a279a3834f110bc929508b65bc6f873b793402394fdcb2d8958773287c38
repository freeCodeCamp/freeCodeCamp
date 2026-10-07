# synckit

[![GitHub Actions](https://github.com/un-ts/synckit/workflows/CI/badge.svg)](https://github.com/un-ts/synckit/actions/workflows/ci.yml)
[![Codecov](https://img.shields.io/codecov/c/github/un-ts/synckit.svg)](https://codecov.io/gh/un-ts/synckit)
[![type-coverage](https://img.shields.io/badge/dynamic/json.svg?label=type-coverage&prefix=%E2%89%A5&suffix=%&query=$.typeCoverage.atLeast&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fun-ts%2Fsynckit%2Fmain%2Fpackage.json)](https://github.com/plantain-00/type-coverage)
[![npm](https://img.shields.io/npm/v/synckit.svg)](https://www.npmjs.com/package/synckit)
[![GitHub Release](https://img.shields.io/github/release/un-ts/synckit)](https://github.com/un-ts/synckit/releases)

[![Conventional Commits](https://img.shields.io/badge/conventional%20commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

Perform async work synchronously in Node.js using `worker_threads` with first-class TypeScript and Yarn P'n'P support.

## TOC <!-- omit in toc -->

- [Usage](#usage)
  - [Install](#install)
  - [API](#api)
  - [Types](#types)
  - [Options](#options)
  - [Envs](#envs)
  - [TypeScript](#typescript)
    - [`ts-node`](#ts-node)
    - [`esbuild-register`](#esbuild-register)
    - [`esbuild-runner`](#esbuild-runner)
    - [`swc`](#swc)
    - [`tsx`](#tsx)
- [Benchmark](#benchmark)
- [Sponsors](#sponsors)
- [Backers](#backers)
- [Changelog](#changelog)
- [License](#license)

## Usage

### Install

```sh
# yarn
yarn add synckit

# npm
npm i synckit
```

### API

```js
// runner.js
import { createSyncFn } from 'synckit'

// the worker path must be absolute
const syncFn = createSyncFn(require.resolve('./worker'), {
  tsRunner: 'tsx', // optional, can be `'ts-node' | 'esbuild-register' | 'esbuild-runner' | 'tsx'`
})

// do whatever you want, you will get the result synchronously!
const result = syncFn(...args)
```

```js
// worker.js
import { runAsWorker } from 'synckit'

runAsWorker(async (...args) => {
  // do expensive work
  return result
})
```

You must make sure, the `result` is serializable by [`Structured Clone Algorithm`](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)

### Types

````ts
export interface GlobalShim {
  moduleName: string
  /**
   * `undefined` means side effect only
   */
  globalName?: string
  /**
   * 1. `undefined` or empty string means `default`, for example:
   * ```js
   * import globalName from 'module-name'
   * ```
   *
   * 2. `null` means namespaced, for example:
   * ```js
   * import * as globalName from 'module-name'
   * ```
   *
   */
  named?: string | null
  /**
   * If not `false`, the shim will only be applied when the original `globalName` unavailable,
   * for example you may only want polyfill `globalThis.fetch` when it's unavailable natively:
   * ```js
   * import fetch from 'node-fetch'
   *
   * if (!globalThis.fetch) {
   *   globalThis.fetch = fetch
   * }
   * ```
   */
  conditional?: boolean
}
````

### Options

1. `execArgv` same as env `SYNCKIT_EXEC_ARGV`
2. `globalShims`: Similar like env `SYNCKIT_GLOBAL_SHIMS` but much more flexible which can be a `GlobalShim` `Array`, see `GlobalShim`'s [definition](#types) for more details
3. `timeout` same as env `SYNCKIT_TIMEOUT`
4. `transferList`: Please refer Node.js [`worker_threads`](https://nodejs.org/api/worker_threads.html#:~:text=Default%3A%20true.-,transferList,-%3CObject%5B%5D%3E%20If) documentation
5. `tsRunner` same as env `SYNCKIT_TS_RUNNER`

### Envs

1. `SYNCKIT_EXEC_ARGV`: List of node CLI options passed to the worker, split with comma `,`. (default as `[]`), see also [`node` docs](https://nodejs.org/api/worker_threads.html)
2. `SYNCKIT_GLOBAL_SHIMS`: Whether to enable the default `DEFAULT_GLOBAL_SHIMS_PRESET` as `globalShims`
3. `SYNCKIT_TIMEOUT`: `timeout` for performing the async job (no default)
4. `SYNCKIT_TS_RUNNER`: Which TypeScript runner to be used, it could be very useful for development, could be `'ts-node' | 'esbuild-register' | 'esbuild-runner' | 'swc' | 'tsx'`, `'ts-node'` is used by default, make sure you have installed them already

### TypeScript

#### `ts-node`

If you want to use `ts-node` for worker file (a `.ts` file), it is supported out of box!

If you want to use a custom tsconfig as project instead of default `tsconfig.json`, use `TS_NODE_PROJECT` env. Please view [ts-node](https://github.com/TypeStrong/ts-node#tsconfig) for more details.

If you want to integrate with [tsconfig-paths](https://www.npmjs.com/package/tsconfig-paths), please view [ts-node](https://github.com/TypeStrong/ts-node#paths-and-baseurl) for more details.

#### `esbuild-register`

Please view [`esbuild-register`][] for its document

#### `esbuild-runner`

Please view [`esbuild-runner`][] for its document

#### `swc`

Please view [`@swc-node/register`][] for its document

#### `tsx`

Please view [`tsx`][] for its document

## Benchmark

It is about 50x faster than [`sync-threads`](https://github.com/lambci/sync-threads) but 10x slower than native for reading the file content itself 1000 times during runtime, and 40x faster than `sync-threads` but 10x slower than native for total time on my personal MacBook Pro with 64G M1 Max.

And it's almost 5x faster than [`deasync`](https://github.com/abbr/deasync) but requires no native bindings or `node-gyp`.

See [benchmark.cjs](./benchmarks/benchmark.cjs.txt) and [benchmark.esm](./benchmarks/benchmark.esm.txt) for more details.

You can try it with running `yarn benchmark` by yourself. [Here](./benchmarks/benchmark.js) is the benchmark source code.

## Sponsors

| 1stG                                                                                                                               | RxTS                                                                                                                               | UnTS                                                                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| [![1stG Open Collective backers and sponsors](https://opencollective.com/1stG/organizations.svg)](https://opencollective.com/1stG) | [![RxTS Open Collective backers and sponsors](https://opencollective.com/rxts/organizations.svg)](https://opencollective.com/rxts) | [![UnTS Open Collective backers and sponsors](https://opencollective.com/unts/organizations.svg)](https://opencollective.com/unts) |

## Backers

[![Backers](https://raw.githubusercontent.com/1stG/static/master/sponsors.svg)](https://github.com/sponsors/JounQin)

| 1stG                                                                                                                             | RxTS                                                                                                                             | UnTS                                                                                                                             |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| [![1stG Open Collective backers and sponsors](https://opencollective.com/1stG/individuals.svg)](https://opencollective.com/1stG) | [![RxTS Open Collective backers and sponsors](https://opencollective.com/rxts/individuals.svg)](https://opencollective.com/rxts) | [![UnTS Open Collective backers and sponsors](https://opencollective.com/unts/individuals.svg)](https://opencollective.com/unts) |

## Changelog

Detailed changes for each release are documented in [CHANGELOG.md](./CHANGELOG.md).

## License

[MIT][] © [JounQin][]@[1stG.me][]

[`esbuild-register`]: https://github.com/egoist/esbuild-register
[`esbuild-runner`]: https://github.com/folke/esbuild-runner
[`@swc-node/register`]: https://github.com/swc-project/swc-node/tree/master/packages/register
[`tsx`]: https://github.com/esbuild-kit/tsx
[1stg.me]: https://www.1stg.me
[jounqin]: https://GitHub.com/JounQin
[mit]: http://opensource.org/licenses/MIT
