# `gatsby-core-utils`

Utilities used in multiple Gatsby packages.

## Usage

```shell
npm install gatsby-core-utils
```

### createContentDigest

Encrypts an input using md5 hash of hexadecimal digest.

```js
const { createContentDigest } = require("gatsby-core-utils")

const options = {
  key: "value",
  foo: "bar",
}

const digest = createContentDigest(options)
// ...
```

### cpuCoreCount

Calculate the number of CPU cores on the current machine

This function can be controlled by an env variable `GATSBY_CPU_COUNT` setting the first argument to true.

| value           | description                                            |
| --------------- | ------------------------------------------------------ |
|                 | Counts amount of real cores by running a shell command |
| `logical_cores` | `require("os").cpus()` to count all virtual cores      |
| any number      | Sets cpu count to that specific number                 |

```js
const { cpuCoreCount } = require("gatsby-core-utils")

const coreCount = cpuCoreCount(false)
// ...
```

```js
const { cpuCoreCount } = require("gatsby-core-utils")
process.env.GATSBY_CPU_COUNT = "logical_cores"

const coreCount = cpuCoreCount()
// ...
```

### joinPath

A utility that joins paths with a `/` on windows and unix-type platforms. This can also be used for URL concatenation.

```js
const { joinPath } = require("gatsby-core-utils")

const BASEPATH = "/mybase/"
const pathname = "./gatsby/is/awesome"
const url = joinPath(BASEPATH, pathname)
// ...
```

### isCI

A utility that enhances `isCI` from 'ci-info` with support for Vercel and Heroku detection

```js
const { isCI } = require("gatsby-core-utils")

if (isCI()) {
  // execute CI-specific code
}
// ...
```

### getCIName

A utility that returns the name of the current CI environment if available, `null` otherwise

```js
const { getCIName } = require("gatsby-core-utils")

const CI_NAME = getCIName()
console.log({ CI_NAME })
// {CI_NAME: null}, or
// {CI_NAME: "Vercel"}
// ...
```

### createRequireFromPath

A cross-version polyfill for Node's [`Module.createRequire`](https://nodejs.org/api/modules.html#modules_module_createrequire_filename).

```js
const { createRequireFromPath } = require("gatsby-core-utils")

const requireUtil = createRequireFromPath("../src/utils/")

// Require `../src/utils/some-tool`
requireUtil("./some-tool")
// ...
```

### Mutex

When working inside workers or async operations you want some kind of concurrency control that a specific work load can only concurrent one at a time. This is what a [Mutex](https://en.wikipedia.org/wiki/Mutual_exclusion) does.

By implementing the following code, the code is only executed one at a time and the other threads/async workloads are awaited until the current one is done. This is handy when writing to the same file to disk.

```js
const { createMutex } = require("gatsby-core-utils/mutex")

const mutex = createMutex("my-custom-mutex-key")
await mutex.acquire()

await fs.writeFile("pathToFile", "my custom content")

await mutex.release()
```

### Hashing

Parts of [`hash-wasm`](https://github.com/Daninet/hash-wasm) are re-exported from `gatsby-core-utils` or used in custom functions. When working on hashing where you'd normally use `crypto` from Node.js, you can use these functions instead. They especially show their advantage on large inputs so don't feel obliged to _always_ use them. Refer to `hash-wasm`'s documentation for more details on usage for the re-exported functions.

```js
const { md5File, md5, createMD5, sha256, sha1 } = require("gatsby-core-utils")

// For md5, createMD5, sha256, sha1 refer to hash-wasm
await md5(`some-string`)

// md5File gives you the MD5 hex hash for a given filepath
await md5File(`package.json`)
```
