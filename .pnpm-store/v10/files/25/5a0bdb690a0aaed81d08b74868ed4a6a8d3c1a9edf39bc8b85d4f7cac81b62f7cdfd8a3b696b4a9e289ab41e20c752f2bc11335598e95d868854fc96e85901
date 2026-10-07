# rolldown-plugin-dts

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Unit Test][unit-test-src]][unit-test-href]

A Rolldown plugin to generate and bundle dts files.

## Install

Requires **`rolldown@1.0.0-rc.12`** or later.

```bash
npm i -D rolldown-plugin-dts

npm i -D typescript # install TypeScript if isolatedDeclarations is not enabled
npm i -D @typescript/native-preview # install TypeScript Go if tsgo is enabled
```

## Usage

Add the plugin to your `rolldown.config.js`:

```js
// rolldown.config.js
import { dts } from 'rolldown-plugin-dts'

export default {
  input: './src/index.ts',
  plugins: [dts()],
  output: [{ dir: 'dist', format: 'es' }],
}
```

You can find an example in [here](./rolldown.config.ts).

## Options

Configuration options for the plugin.

### General Options

#### `cwd`

The directory in which the plugin will search for the `tsconfig.json` file.

#### `dtsInput`

Set to `true` if your entry files are `.d.ts` files instead of `.ts` files.

When enabled, the plugin will skip generating a `.d.ts` file for the entry point.

#### `emitDtsOnly`

If `true`, the plugin will emit only `.d.ts` files and remove all other output chunks.

This is especially useful when generating `.d.ts` files for the CommonJS format as part of a separate build step.

#### `tsconfig`

The path to the `tsconfig.json` file.

- If set to `false`, the plugin will ignore any `tsconfig.json` file.
- You can still specify `compilerOptions` directly in the options.

**Default:** `'tsconfig.json'`

#### `tsconfigRaw`

Pass a raw `tsconfig.json` object directly to the plugin.

See: [TypeScript tsconfig documentation](https://www.typescriptlang.org/tsconfig)

#### `compilerOptions`

Override the `compilerOptions` specified in `tsconfig.json`.

See: [TypeScript compilerOptions documentation](https://www.typescriptlang.org/tsconfig/#compilerOptions)

#### `sourcemap`

If `true`, the plugin will generate declaration maps (`.d.ts.map`) for `.d.ts` files.

#### `resolver`

Specifies a resolver to resolve type definitions, especially for `node_modules`.

- `'oxc'`: Uses Oxc's module resolution, which is faster and more efficient.
- `'tsc'`: Uses TypeScript's native module resolution, which may be more compatible with complex setups, but slower.

Defaults to `'oxc'`.

#### `cjsDefault`

Determines how the default export is emitted.

If set to `true`, and you are only exporting a single item using `export default ...`,
the output will use `export = ...` instead of the standard ES module syntax.
This is useful for compatibility with CommonJS.

#### `sideEffects`

Indicates whether the generated `.d.ts` files have side effects.

- If set to `true`, Rolldown will treat the `.d.ts` files as having side effects during tree-shaking.
- If set to `false`, Rolldown may consider the `.d.ts` files as side-effect-free, potentially removing them if they are not imported.

**Default:** false

### `tsc` Options

> [!NOTE]
> These options are only applicable when `oxc` and `tsgo` are not enabled.

#### `build`

Build mode for the TypeScript compiler:

- If `true`, the plugin will use [`tsc -b`](https://www.typescriptlang.org/docs/handbook/project-references.html#build-mode-for-typescript) to build the project and all referenced projects before emitting `.d.ts` files.
- If `false`, the plugin will use [`tsc`](https://www.typescriptlang.org/docs/handbook/compiler-options.html) to emit `.d.ts` files without building referenced projects.

**Default:** `false`

#### `incremental`

Controls how project references and incremental builds are handled:

- If `incremental` is `true`, all built files (including [`.tsbuildinfo`](https://www.typescriptlang.org/tsconfig/#tsBuildInfoFile)) will be written to disk, similar to running `tsc -b` in your project.
- If `incremental` is `false`, built files are kept in memory, minimizing disk usage.

Enabling this option can speed up builds by caching previous results, which is helpful for large projects with multiple references.

**Default:** `true` if your `tsconfig` has [`incremental`](https://www.typescriptlang.org/tsconfig/#incremental) or [`tsBuildInfoFile`](https://www.typescriptlang.org/tsconfig/#tsBuildInfoFile) enabled.

#### `vue`

If `true`, the plugin will generate `.d.ts` files using `vue-tsc`.

#### `parallel`

If `true`, the plugin will launch a separate process for `tsc` or `vue-tsc`, enabling parallel processing of multiple projects.

#### `eager`

If `true`, the plugin will prepare all files listed in `tsconfig.json` for `tsc` or `vue-tsc`.

This is especially useful when you have a single `tsconfig.json` for multiple projects in a monorepo.

#### `newContext`

If `true`, the plugin will create a new isolated context for each build,
ensuring that previously generated `.d.ts` code and caches are not reused.

By default, the plugin may reuse internal caches or incremental build artifacts
to speed up repeated builds. Enabling this option forces a clean context,
guaranteeing that all type definitions are generated from scratch.

`invalidateContextFile` API can be used to clear invalidated files from the context.

```ts
import { globalContext, invalidateContextFile } from 'rolldown-plugin-dts/tsc'
invalidateContextFile(globalContext, 'src/foo.ts')
```

#### `emitJs`

If `true`, the plugin will emit `.d.ts` files for `.js` files as well.
This is useful when you want to generate type definitions for JavaScript files with JSDoc comments.

Enabled by default when `allowJs` in compilerOptions is `true`.

### Oxc

#### `oxc`

If `true`, the plugin will generate `.d.ts` files using [Oxc](https://oxc.rs/docs/guide/usage/transformer.html), which is significantly faster than the TypeScript compiler.

This option is automatically enabled when `isolatedDeclarations` in `compilerOptions` is set to `true`.

### TypeScript Go

> [!WARNING]
> This feature is experimental and not yet recommended for production environments.

#### `tsgo`

**[Experimental]** Enables DTS generation using [`tsgo`](https://github.com/microsoft/typescript-go).

To use this option, ensure that `@typescript/native-preview` is installed as a dependency.

`tsconfigRaw` and `compilerOptions` options will be ignored when this option is enabled.

## Code Splitting Support

When using Rolldown's code splitting features `codeSplitting`, you should pay special attention to handling `.d.ts` files. The chunk names for `.d.ts` files must end with `.d`.

```ts
export default {
  codeSplitting: {
    groups: [
      // handle .d.ts files
      { test: /foo.*\.d\.[cm]?ts$/, name: 'shared.d' },
      // handle source files
      { test: /foo/, name: 'shared' },
    ],
  },
}
```

## Differences from `rollup-plugin-dts`

### Isolated Declarations

The plugin leverages Oxc's `isolatedDeclarations` to generate `.d.ts` files when `isolatedDeclarations` is enabled,
offering significantly faster performance compared to the `typescript` compiler.

### Single Build for ESM

`rolldown-plugin-dts` generates separate chunks for `.d.ts` files, enabling both source code (`.js`)
and type definition files (`.d.ts`) to be produced in a single build process.

However, this functionality is limited to ESM output format. Consequently,
**two** distinct build processes are required for CommonJS source code (`.cjs`)
and its corresponding type definition files (`.d.cts`).
In such cases, the `emitDtsOnly` option can be particularly helpful.

## Credits

The project is inspired by [rollup-plugin-dts](https://github.com/Swatinem/rollup-plugin-dts)
but has been independently implemented.
We extend our gratitude to the original creators for their contributions.
Furthermore, the test suite is authorized by them and distributed under the MIT license.

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/sxzz/sponsors/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/sxzz/sponsors/sponsors.svg'/>
  </a>
</p>

## License

[MIT](./LICENSE) License © 2025-PRESENT [Kevin Deng](https://github.com/sxzz)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/rolldown-plugin-dts.svg
[npm-version-href]: https://npmjs.com/package/rolldown-plugin-dts
[npm-downloads-src]: https://img.shields.io/npm/dm/rolldown-plugin-dts
[npm-downloads-href]: https://www.npmcharts.com/compare/rolldown-plugin-dts?interval=30
[unit-test-src]: https://github.com/sxzz/rolldown-plugin-dts/actions/workflows/unit-test.yml/badge.svg
[unit-test-href]: https://github.com/sxzz/rolldown-plugin-dts/actions/workflows/unit-test.yml
