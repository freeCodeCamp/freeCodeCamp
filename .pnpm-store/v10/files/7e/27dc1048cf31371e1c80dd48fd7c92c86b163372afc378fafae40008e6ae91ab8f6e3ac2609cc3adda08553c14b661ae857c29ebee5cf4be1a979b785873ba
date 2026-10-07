# jiti

<!-- automd:badges color=F0DB4F bundlephobia -->

[![npm version](https://img.shields.io/npm/v/jiti?color=F0DB4F)](https://npmjs.com/package/jiti)
[![npm downloads](https://img.shields.io/npm/dm/jiti?color=F0DB4F)](https://npmjs.com/package/jiti)
[![bundle size](https://img.shields.io/bundlephobia/minzip/jiti?color=F0DB4F)](https://bundlephobia.com/package/jiti)

<!-- /automd -->

> This is the active development branch. Check out [jiti/v1](https://github.com/unjs/jiti/tree/v1) for legacy v1 docs and code.

## 🌟 Used in

[Docusaurus](https://docusaurus.io/), [ESLint](https://github.com/eslint/eslint), [FormKit](https://formkit.com/), [Histoire](https://histoire.dev/), [Knip](https://knip.dev/), [Nitro](https://nitro.unjs.io/), [Nuxt](https://nuxt.com/), [PostCSS loader](https://github.com/webpack-contrib/postcss-loader), [Rsbuild](https://rsbuild.dev/), [Size Limit](https://github.com/ai/size-limit), [Slidev](https://sli.dev/), [Tailwindcss](https://tailwindcss.com/), [Tokenami](https://github.com/tokenami/tokenami), [UnoCSS](https://unocss.dev/), [WXT](https://wxt.dev/), [Winglang](https://www.winglang.io/), [Graphql code generator](https://the-guild.dev/graphql/codegen), [Lingui](https://lingui.dev/), [Scaffdog](https://scaff.dog/), [Storybook](https://storybook.js.org), [...UnJS ecosystem](https://unjs.io/), [...60M+ npm monthly downloads](https://npm.chart.dev/jiti), [...6M+ public repositories](https://github.com/unjs/jiti/network/dependents).

## ✅ Features

- Seamless TypeScript and ESM syntax support for Node.js
- Seamless interoperability between ESM and CommonJS
- Asynchronous API to replace `import()`
- Synchronous API to replace `require()` (deprecated)
- Super slim and zero dependency
- Custom resolve aliases
- Smart syntax detection to avoid extra transforms
- Node.js native `require.cache` integration
- Filesystem transpile with hard disk caches
- ESM Loader support
- JSX support (opt-in)

> [!IMPORTANT]
> To enhance compatibility, jiti `>=2.1` enabled [`interopDefault`](#interopdefault) using a new Proxy method. If you migrated to `2.0.0` earlier, this might have caused behavior changes. In case of any issues during the upgrade, please [report](https://github.com/unjs/jiti/issues) so we can investigate to solve them. 🙏🏼

## 💡 Usage

### CLI

You can use `jiti` CLI to quickly run any script with TypeScript and native ESM support!

```bash
npx jiti ./index.ts
```

### Programmatic

Initialize a jiti instance:

```js
// ESM
import { createJiti } from "jiti";
const jiti = createJiti(import.meta.url);

// CommonJS (deprecated)
const { createJiti } = require("jiti");
const jiti = createJiti(__filename);
```

Import (async) and resolve with ESM compatibility:

```js
// jiti.import(id) is similar to import(id)
const mod = await jiti.import("./path/to/file.ts");

// jiti.esmResolve(id) is similar to import.meta.resolve(id)
const resolvedPath = jiti.esmResolve("./src");
```

If you need the default export of module, you can use `jiti.import(id, { default: true })` as shortcut to `mod?.default ?? mod`.

```js
// shortcut to mod?.default ?? mod
const modDefault = await jiti.import("./path/to/file.ts", { default: true });
```

CommonJS (sync & deprecated):

```js
// jiti() is similar to require(id)
const mod = jiti("./path/to/file.ts");

// jiti.resolve() is similar to require.resolve(id)
const resolvedPath = jiti.resolve("./src");
```

You can also pass options as the second argument:

```js
const jiti = createJiti(import.meta.url, { debug: true });
```

### Register global ESM loader

You can globally register jiti using [global hooks](https://nodejs.org/api/module.html#initialize). (Important: Requires Node.js > 20)

```js
import "jiti/register";
```

Or:

```bash
node --import jiti/register index.ts
```

## 🎈 `jiti/native`

You can alias `jiti` to `jiti/native` to directly depend on runtime's [`import.meta.resolve`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import.meta/resolve) and dynamic [`import()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import) support. This allows easing up the ecosystem transition to runtime native support by giving the same API of jiti.

## ⚙️ Options

### `debug`

- Type: Boolean
- Default: `false`
- Environment variable: `JITI_DEBUG`

Enable verbose logging. You can use `JITI_DEBUG=1 <your command>` to enable it.

### `fsCache`

- Type: Boolean | String
- Default: `true`
- Environment variable: `JITI_FS_CACHE`

Filesystem source cache (enabled by default)

By default (when is `true`), jiti uses `node_modules/.cache/jiti` (if exists) or `{TMP_DIR}/jiti`.

**Note:** It is recommended that this option be enabled for better performance.

### `rebuildFsCache`

- Type: Boolean
- Default: `false`
- Environment variable: `JITI_REBUILD_FS_CACHE`

Rebuild filesystem source cache created by `fsCache`.

### `moduleCache`

- Type: String
- Default: `true`
- Environment variable: `JITI_MODULE_CACHE`

Runtime module cache (enabled by default).

Disabling allows editing code and importing the same module multiple times.

When enabled, jiti integrates with Node.js native CommonJS cache-store.

### `transform`

- Type: Function
- Default: Babel (lazy loaded)

Transform function. See [src/babel](./src/babel.ts) for more details

### `sourceMaps`

- Type: Boolean
- Default `false`
- Environment variable: `JITI_SOURCE_MAPS`

Add inline source map to transformed source for better debugging.

### `interopDefault`

- Type: Boolean
- Default: `true`
- Environment variable: `JITI_INTEROP_DEFAULT`

Jiti combines module exports with the `default` export using an internal Proxy to improve compatibility with mixed CJS/ESM usage. You can check the current implementation [here](https://github.com/unjs/jiti/blob/main/src/utils.ts#L105).

### `alias`

- Type: Object
- Default: -
- Environment variable: `JITI_ALIAS`

You can also pass an object to the environment variable for inline config. Example: `JITI_ALIAS='{"~/*": "./src/*"}' jiti ...`.

Custom alias map used to resolve IDs.

### `nativeModules`

- Type: Array
- Default: ['typescript']
- Environment variable: `JITI_NATIVE_MODULES`

List of modules (within `node_modules`) to always use native `require()` for them.

### `transformModules`

- Type: Array
- Default: []
- Environment variable: `JITI_TRANSFORM_MODULES`

List of modules (within `node_modules`) to transform them regardless of syntax.

### `importMeta`

Parent module's [`import.meta`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import.meta) context to use for ESM resolution. (only used for `jiti/native` import).

### `tryNative`

- Type: Boolean
- Default: Enabled if bun is detected
- Environment variable: `JITI_TRY_NATIVE`

Try to use native require and import without jiti transformations first.

### `jsx`

- Type: Boolean | {options}
- Default: `false`
- Environment Variable: `JITI_JSX`

Enable JSX support using [`@babel/plugin-transform-react-jsx`](https://babeljs.io/docs/babel-plugin-transform-react-jsx).

See [`test/fixtures/jsx`](./test/fixtures/jsx) for framework integration examples.

## Development

- Clone this repository
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable`
- Install dependencies using `pnpm install`
- Run `pnpm dev`
- Run `pnpm jiti ./test/path/to/file.ts`

## License

<!-- automd:contributors license=MIT author="pi0" -->

Published under the [MIT](https://github.com/unjs/jiti/blob/main/LICENSE) license.
Made by [@pi0](https://github.com/pi0) and [community](https://github.com/unjs/jiti/graphs/contributors) 💛
<br><br>
<a href="https://github.com/unjs/jiti/graphs/contributors">
<img src="https://contrib.rocks/image?repo=unjs/jiti" />
</a>

<!-- /automd -->

<!-- automd:with-automd -->
