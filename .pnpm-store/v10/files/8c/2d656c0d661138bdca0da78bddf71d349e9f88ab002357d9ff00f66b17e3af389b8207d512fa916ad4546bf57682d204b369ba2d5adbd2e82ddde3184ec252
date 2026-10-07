# std-env

[![npm](https://img.shields.io/npm/dm/std-env.svg?style=flat-square)](http://npmjs.com/package/std-env)
[![npm](https://img.shields.io/npm/v/std-env.svg?style=flat-square)](http://npmjs.com/package/std-env)
[![bundlephobia](https://img.shields.io/bundlephobia/min/std-env/latest.svg?style=flat-square)](https://bundlephobia.com/result?p=std-env)

> Runtime agnostic JS utils

## Installation

```sh
# Using npm
npm i std-env

# Using pnpm
pnpm i std-env

# Using yarn
yarn add std-env
```

## Usage

```js
// ESM
import { env, isDevelopment, isProduction } from "std-env";

// CommonJS
const { env, isDevelopment, isProduction } = require("std-env");
```

## Flags

- `hasTTY`
- `hasWindow`
- `isDebug`
- `isDevelopment`
- `isLinux`
- `isMacOS`
- `isMinimal`
- `isProduction`
- `isTest`
- `isWindows`
- `platform`
- `isColorSupported`
- `nodeVersion`
- `nodeMajorVersion`

You can read more about how each flag works from [./src/flags.ts](./src/flags.ts).

## Provider Detection

`std-env` can automatically detect the current runtime provider based on environment variables.

You can use `isCI` and `platform` exports to detect it:

```ts
import { isCI, provider, providerInfo } from "std-env";

console.log({
  isCI, // true
  provider, // "github_actions"
  providerInfo, // { name: "github_actions", isCI: true }
});
```

List of well known providers can be found from [./src/providers.ts](./src/providers.ts).

## Runtime Detection

`std-env` can automatically detect the current JavaScript runtime based on global variables, following the [WinterCG Runtime Keys proposal](https://runtime-keys.proposal.wintercg.org/):

```ts
import { runtime, runtimeInfo } from "std-env";

// "" | "node" | "deno" | "bun" | "workerd" ...
console.log(runtime);

// { name: "node" }
console.log(runtimeInfo);
```

You can also use individual named exports for each runtime detection:

> [!NOTE]
> When running code in Bun and Deno with Node.js compatibility mode, `isNode` flag will be also `true`, indicating running in a Node.js compatible runtime.
>
> Use `runtime === "node"` if you need strict check for Node.js runtime.

- `isNode`
- `isBun`
- `isDeno`
- `isNetlify`
- `isEdgeLight`
- `isWorkerd`
- `isFastly`

List of well known providers can be found from [./src/runtimes.ts](./src/runtimes.ts).

## Platform-Agnostic `env`

`std-env` provides a lightweight proxy to access environment variables in a platform agnostic way.

```ts
import { env } from "std-env";
```

## Platform-Agnostic `process`

`std-env` provides a lightweight proxy to access [`process`](https://nodejs.org/api/process.html) object in a platform agnostic way.

```ts
import { process } from "std-env";
```

## License

MIT
