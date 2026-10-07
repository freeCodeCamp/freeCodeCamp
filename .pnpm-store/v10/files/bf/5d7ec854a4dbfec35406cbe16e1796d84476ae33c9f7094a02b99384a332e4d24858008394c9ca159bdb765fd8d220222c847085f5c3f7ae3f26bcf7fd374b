# exsolve

[![npm version](https://img.shields.io/npm/v/exsolve?color=yellow)](https://npmjs.com/package/exsolve)
[![npm downloads](https://img.shields.io/npm/dm/exsolve?color=yellow)](https://npm.chart.dev/exsolve)
[![pkg size](https://img.shields.io/npm/unpacked-size/exsolve?color=yellow)](https://packagephobia.com/result?p=exsolve)

> Module resolution utilities for Node.js (based on previous work in [unjs/mlly](https://github.com/unjs/mlly), [wooorm/import-meta-resolve](https://github.com/wooorm/import-meta-resolve), and the upstream [Node.js](https://github.com/nodejs/node) implementation).

This library exposes an API similar to [`import.meta.resolve`](https://nodejs.org/api/esm.html#importmetaresolvespecifier) based on Node.js's upstream implementation and [resolution algorithm](https://nodejs.org/api/esm.html#esm_resolution_algorithm). It supports all built-in functionalities—import maps, export maps, CJS, and ESM—with some additions:

- Pure JS with no native dependencies (only Node.js is required).
- Built-in resolve [cache](#resolve-cache).
- Throws an error (or [try](#try)) if the resolved path does not exist in the filesystem.
- Can override the default [conditions](#conditions).
- Can resolve [from](#from) one or more parent URLs.
- Can resolve with custom [suffixes](#suffixes).
- Can resolve with custom [extensions](#extensions).

## Usage

Install the package:

```sh
# ✨ Auto-detect (npm, yarn, pnpm, bun, deno)
npx nypm install exsolve
```

Import:

```ts
// ESM import
import {
  resolveModuleURL,
  resolveModulePath,
  createResolver,
  clearResolveCache,
} from "exsolve";

// Or using dynamic import
const { resolveModulePath } = await import("exsolve");
```

```ts
resolveModuleURL(id, {
  /* options */
});

resolveModulePath(id, {
  /* options */
});
```

Differences between `resolveModuleURL` and `resolveModulePath`:

- `resolveModuleURL` returns a URL string like `file:///app/dep.mjs`.
- `resolveModulePath` returns an absolute path like `/app/dep.mjs`.
  - If the resolved URL does not use the `file://` scheme (e.g., `data:` or `node:`), it will throw an error.

## Resolver with Options

You can create a custom resolver instance with default [options](#resolve-options) using `createResolver`.

**Example:**

```ts
import { createResolver } from "exsolve";

const { resolveModuleURL, resolveModulePath } = createResolver({
  suffixes: ["", "/index"],
  extensions: [".mjs", ".cjs", ".js", ".mts", ".cts", ".ts", ".json"],
  conditions: ["node", "import", "production"],
});
```

## Resolve Cache

To speed up resolution, resolved values (and errors) are globally cached with a unique key based on id and options.

**Example:** Invalidate all (global) cache entries (to support file-system changes).

```ts
import { clearResolveCache } from "exsolve";

clearResolveCache();
```

**Example:** Custom resolver with custom cache object.

```ts
import { createResolver } from "exsolve";

const { clearResolveCache, resolveModulePath } = createResolver({
  cache: new Map(),
});
```

**Example:** Resolve without cache.

```ts
import { resolveModulePath } from "exsolve";

resolveModulePath("id", { cache: false });
```

## Resolve Options

### `try`

If set to `true` and the module cannot be resolved, the resolver returns `undefined` instead of throwing an error.

**Example:**

```ts
// undefined
const resolved = resolveModuleURL("non-existing-package", { try: true });
```

### `from`

A URL, path, or array of URLs/paths from which to resolve the module.

If not provided, resolution starts from the current working directory. Setting this option is recommended.

You can use `import.meta.url` for `from` to mimic the behavior of `import.meta.resolve()`.

> [!TIP]
> For better performance, ensure the value is a `file://` URL or at least ends with `/`.
>
> If it is set to an absolute path, the resolver must first check the filesystem to see if it is a file or directory.
> If the input is a `file://` URL or ends with `/`, the resolver can skip this check.

### `conditions`

Conditions to apply when resolving package exports (default: `["node", "import"]`).

**Example:**

```ts
// "/app/src/index.ts"
const src = resolveModuleURL("pkg-name", {
  conditions: ["deno", "node", "import", "production"],
});
```

> [!NOTE]
> Conditions are applied **without order**. The order is determined by the `exports` field in `package.json`.

### `extensions`

Additional file extensions to check as fallbacks.

**Example:**

```ts
// "/app/src/index.ts"
const src = resolveModulePath("./src/index", {
  extensions: [".mjs", ".cjs", ".js", ".mts", ".cts", ".ts", ".json"],
});
```

> [!TIP]
> For better performance, use explicit extensions and avoid this option.

### `suffixes`

Path suffixes to check.

**Example:**

```ts
// "/app/src/utils/index.ts"
const src = resolveModulePath("./src/utils", {
  suffixes: ["", "/index"],
  extensions: [".mjs", ".cjs", ".js"],
});
```

> [!TIP]
> For better performance, use explicit `/index` when needed and avoid this option.

### `cache`

Resolve cache (enabled by default with a shared global object).

Can be set to `false` to disable or a custom `Map` to bring your own cache object.

See [cache](#resolve-cache) for more info.

## Other Performance Tips

**Use explicit module extensions `.mjs` or `.cjs` instead of `.js`:**

This allows the resolution fast path to skip reading the closest `package.json` for the [`type`](https://nodejs.org/api/packages.html#type).

## Development

<details>

<summary>local development</summary>

- Clone this repository
- Install the latest LTS version of [Node.js](https://nodejs.org/en/)
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable`
- Install dependencies using `pnpm install`
- Run interactive tests using `pnpm dev`

</details>

## License

Published under the [MIT](https://github.com/unjs/exsolve/blob/main/LICENSE) license.

Based on previous work in [unjs/mlly](https://github.com/unjs/mlly), [wooorm/import-meta-resolve](https://github.com/wooorm/import-meta-resolve) and [Node.js](https://github.com/nodejs/node) original implementation.
