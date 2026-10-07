# node-fetch-native

[![][npm-version-src]][npm-version-href]
[![][github-actions-src]][github-actions-href]
[![][packagephobia-src]][packagephobia-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]

<!-- [![Codecov][codecov-src]][codecov-href] -->

A redistribution of [node-fetch v3](https://github.com/node-fetch/node-fetch) (+ more!) for better backward and forward compatibility.

**Why this package?**

- We can no longer `require('node-fetch')` with the latest version. This stopped popular libraries from upgrading and dependency conflicts between `node-fetch@2` and `node-fetch@3`.
- With upcoming versions of Node.js, native `fetch` is being supported. We are prepared for native fetch support using this package yet keep supporting older Node versions.
- With the introduction of native fetch to Node.js via [undici](https://github.com/nodejs/undici) there is no easy way to support http proxies!

**Features:**

✅ Prefer to **native globals** when available (See Node.js [experimental fetch](https://nodejs.org/dist/latest-v17.x/docs/api/cli.html#--experimental-fetch)).

✅ Compact build and less install size with **zero dependencies** [![][packagephobia-s-src]][packagephobia-s-href] <sup>vs</sup> [![][packagephobia-s-alt-src]][packagephobia-s-alt-href]

✅ Support both **CommonJS** (`require`) and **ESM** (`import`) usage

✅ Use native version if imported without `node` condition using [conditional exports](https://nodejs.org/api/packages.html#packages_conditional_exports) with **zero bundle overhead**

✅ Polyfill support for Node.js

✅ Compact and simple proxy supporting both Node.js versions without native fetch using [HTTP Agent](https://github.com/TooTallNate/proxy-agents/tree/main/packages/proxy-agent) and versions with native fetch using [Undici Proxy Agent](https://undici.nodejs.org/#/docs/api/ProxyAgent)

## Usage

Install `node-fetch-native` dependency:

```sh
# npm
npm i node-fetch-native

# yarn
yarn add node-fetch-native

# pnpm
pnpm i node-fetch-native
```

You can now either import or require the dependency:

```js
// ESM
import fetch from "node-fetch-native";

// CommonJS
const fetch = require("node-fetch-native");
```

More named exports:

```js
// ESM
import {
  fetch,
  Blob,
  FormData,
  Headers,
  Request,
  Response,
  AbortController,
} from "node-fetch-native";

// CommonJS
const {
  fetch,
  Blob,
  FormData,
  Headers,
  Request,
  Response,
  AbortController,
} = require("node-fetch-native");
```

## Force using non-native version

Sometimes you want to explicitly use none native (`node-fetch`) implementation of `fetch` in case of issues with the native/polyfill version of `globalThis.fetch` with Node.js or runtime environment.

You have two ways to do this:

- Set the `FORCE_NODE_FETCH` environment variable before starting the application.
- Import from `node-fetch-native/node`

## Disable runtime check

Once the `node-fetch-native/node` module is loaded, it pushes a log warning if the current runtime differs from the Node.js. Set the `DISABLE_NODE_FETCH_NATIVE_WARN` environment variable to turn this check off.

## Polyfill support

Using the polyfill method, we can ensure global fetch is available in the environment and all files. Natives are always preferred.

**Note:** I don't recommend this if you are authoring a library! Please prefer the explicit methods.

```js
// ESM
import "node-fetch-native/polyfill";

// CJS
require("node-fetch-native/polyfill");

// You can now use fetch() without any import!
```

## Proxy Support

Node.js has no built-in support for HTTP Proxies for fetch (see [nodejs/undici#1650](https://github.com/nodejs/undici/issues/1650) and [nodejs/node#8381](https://github.com/nodejs/node/issues/8381))

This package bundles a compact and simple proxy-supported solution for both Node.js versions without native fetch using [HTTP Agent](https://github.com/TooTallNate/proxy-agents/tree/main/packages/proxy-agent) and versions with native fetch using [Undici Proxy Agent](https://undici.nodejs.org/#/docs/api/ProxyAgent).

By default, `https_proxy`, `http_proxy`, `HTTPS_PROXY`, and `HTTP_PROXY` environment variables will be checked and used (in order) for the proxy and if not any of them are set, the proxy will be disabled. You can override it using the `url` option passed to `createFetch` and `createProxy` utils.

By default, `no_proxy` and `NO_PROXY` environment variables will be checked and used for the (comma-separated) list of hosts to ignore the proxy for. You can override it using the `noProxy` option passed to `createFetch` and `createProxy` utils. The entries starting with a dot will be used to check the domain and also any subdomain.

> [!NOTE]
> Using export conditions, this utility adds proxy support for Node.js and for other runtimes, it will simply return native fetch.

### `fetch` with proxy support

You can simply import `{ fetch }` from `node-fetch-native/proxy` with a preconfigured `fetch` function that has proxy support.

```ts
import { fetch } from "node-fetch-native/proxy";

console.log(await fetch("https://icanhazip.com").then((r) => r.text()));
```

### `createFetch` utility

You can use the `createFetch` utility to instantiate a `fetch` instance with custom proxy options.

```ts
import { createFetch } from "node-fetch-native/proxy";

const fetch = createFetch({ url: "http://localhost:9080" });

console.log(await fetch("https://icanhazip.com").then((r) => r.text()));
```

### `createProxy` utility

`createProxy` returns an object with `agent` and `dispatcher` keys that can be passed as fetch options.

```ts
import { fetch } from "node-fetch-native";
import { createProxy } from "node-fetch-native/proxy";

const proxy = createProxy();
// const proxy = createProxy({ url: "http://localhost:8080" });

console.log(
  await fetch("https://icanhazip.com", { ...proxy }).then((r) => r.text()),
);
```

## Alias to `node-fetch`

Using this method, you can ensure all project dependencies and usages of `node-fetch` can benefit from improved `node-fetch-native` and won't conflict between `node-fetch@2` and `node-fetch@3`.

### npm

Using npm [overrides](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#overrides):

```jsonc
// package.json
{
  "overrides": {
    "node-fetch": "npm:node-fetch-native@latest",
  },
}
```

### yarn

Using yarn [selective dependency resolutions](https://classic.yarnpkg.com/lang/en/docs/selective-version-resolutions/):

```jsonc
// package.json
{
  "resolutions": {
    "node-fetch": "npm:node-fetch-native@latest",
  },
}
```

### pnpm

Using [pnpm.overrides](https://pnpm.io/package_json#pnpmoverrides):

```jsonc
// package.json
{
  "pnpm": {
    "overrides": {
      "node-fetch": "npm:node-fetch-native@latest",
    },
  },
}
```

## License

Made with 💛 Published under the [MIT](./LICENSE) license.

<!-- Badges -->

[npm-version-src]: https://flat.badgen.net/npm/v/node-fetch-native
[npm-version-href]: https://npmjs.com/package/node-fetch-native
[npm-downloads-src]: https://flat.badgen.net/npm/dm/node-fetch-native
[npm-downloads-href]: https://npmjs.com/package/node-fetch-native
[github-actions-src]: https://flat.badgen.net/github/checks/unjs/node-fetch-native
[github-actions-href]: https://github.com/unjs/node-fetch-native/actions?query=workflow%3Aci
[packagephobia-src]: https://flat.badgen.net/packagephobia/install/node-fetch-native
[packagephobia-href]: https://packagephobia.com/result?p=node-fetch-native
[packagephobia-s-src]: https://flat.badgen.net/packagephobia/install/node-fetch-native?label=node-fetch-native&scale=.9
[packagephobia-s-href]: https://packagephobia.com/result?p=node-fetch-native
[packagephobia-s-alt-src]: https://flat.badgen.net/packagephobia/install/node-fetch?label=node-fetch&scale=.9
[packagephobia-s-alt-href]: https://packagephobia.com/result?p=node-fetch
