import { Plugin } from "rolldown";
import { IsolatedDeclarationsOptions } from "rolldown/experimental";
import { TsConfigJson } from "get-tsconfig";

//#region src/options.d.ts
interface GeneralOptions {
  /**
  * Glob pattern(s) to filter which entry files get `.d.ts` generation.
  *
  * When specified, only entry files matching these patterns will emit `.d.ts` chunks.
  * When not specified, all entries get `.d.ts` generation.
  *
  * Supports negation patterns (e.g., `['**', '!src/icons/**']`) for exclusion.
  * Patterns are matched against file paths relative to `cwd`.
  *
  * @example
  * entry: 'src/index.ts'
  * entry: ['src/*.ts', '!src/internal/**']
  */
  entry?: string | string[];
  /**
  * The directory in which the plugin will search for the `tsconfig.json` file.
  */
  cwd?: string;
  /**
  * Set to `true` if your entry files are `.d.ts` files instead of `.ts` files.
  *
  * When enabled, the plugin will skip generating a `.d.ts` file for the entry point.
  */
  dtsInput?: boolean;
  /**
  * If `true`, the plugin will emit only `.d.ts` files and remove all other output chunks.
  *
  * This is especially useful when generating `.d.ts` files for the CommonJS format as part of a separate build step.
  */
  emitDtsOnly?: boolean;
  /**
  * The path to the `tsconfig.json` file.
  *
  * If set to `false`, the plugin will ignore any `tsconfig.json` file.
  * You can still specify `compilerOptions` directly in the options.
  *
  * @default 'tsconfig.json'
  */
  tsconfig?: string | boolean;
  /**
  * Pass a raw `tsconfig.json` object directly to the plugin.
  *
  * @see https://www.typescriptlang.org/tsconfig
  */
  tsconfigRaw?: Omit<TsConfigJson, "compilerOptions">;
  /**
  * Override the `compilerOptions` specified in `tsconfig.json`.
  *
  * @see https://www.typescriptlang.org/tsconfig/#compilerOptions
  */
  compilerOptions?: TsConfigJson.CompilerOptions;
  /**
  * If `true`, the plugin will generate declaration maps (`.d.ts.map`) for `.d.ts` files.
  */
  sourcemap?: boolean;
  /**
  * Specifies a resolver to resolve type definitions, especially for `node_modules`.
  *
  * - `'oxc'`: Uses Oxc's module resolution, which is faster and more efficient.
  * - `'tsc'`: Uses TypeScript's native module resolution, which may be more compatible with complex setups, but slower.
  *
  * @default 'oxc'
  */
  resolver?: "oxc" | "tsc";
  /**
  * Determines how the default export is emitted.
  *
  * If set to `true`, and you are only exporting a single item using `export default ...`,
  * the output will use `export = ...` instead of the standard ES module syntax.
  * This is useful for compatibility with CommonJS.
  */
  cjsDefault?: boolean;
  /**
  * Indicates whether the generated `.d.ts` files have side effects.
  * - If set to `true`, Rolldown will treat the `.d.ts` files as having side effects during tree-shaking.
  * - If set to `false`, Rolldown may consider the `.d.ts` files as side-effect-free, potentially removing them if they are not imported.
  *
  * @default false
  */
  sideEffects?: boolean;
}
interface TscOptions {
  /**
  * Build mode for the TypeScript compiler:
  *
  * - If `true`, the plugin will use [`tsc -b`](https://www.typescriptlang.org/docs/handbook/project-references.html#build-mode-for-typescript) to build the project and all referenced projects before emitting `.d.ts` files.
  * - If `false`, the plugin will use [`tsc`](https://www.typescriptlang.org/docs/handbook/compiler-options.html) to emit `.d.ts` files without building referenced projects.
  *
  * @default false
  */
  build?: boolean;
  /**
  * If your tsconfig.json has
  * [`references`](https://www.typescriptlang.org/tsconfig/#references) option,
  * `rolldown-plugin-dts` will use [`tsc
  * -b`](https://www.typescriptlang.org/docs/handbook/project-references.html#build-mode-for-typescript)
  * to build the project and all referenced projects before emitting `.d.ts`
  * files.
  *
  * In such case, if this option is `true`, `rolldown-plugin-dts` will write
  * down all built files into your disk, including
  * [`.tsbuildinfo`](https://www.typescriptlang.org/tsconfig/#tsBuildInfoFile)
  * and other built files. This is equivalent to running `tsc -b` in your
  * project.
  *
  * Otherwise, if this option is `false`, `rolldown-plugin-dts` will write
  * built files only into memory and leave a small footprint in your disk.
  *
  * Enabling this option will decrease the build time by caching previous build
  * results. This is helpful when you have a large project with multiple
  * referenced projects.
  *
  * By default, `incremental` is `true` if your tsconfig has
  * [`incremental`](https://www.typescriptlang.org/tsconfig/#incremental) or
  * [`tsBuildInfoFile`](https://www.typescriptlang.org/tsconfig/#tsBuildInfoFile)
  * enabled.
  *
  * This option is only used when {@link Options.oxc} is
  * `false`.
  */
  incremental?: boolean;
  /**
  * If `true`, the plugin will generate `.d.ts` files using `vue-tsc`.
  */
  vue?: boolean;
  /**
  * If `true`, the plugin will generate `.d.ts` files using `@ts-macro/tsc`.
  */
  tsMacro?: boolean;
  /**
  * If `true`, the plugin will launch a separate process for `tsc` or `vue-tsc`.
  * This enables processing multiple projects in parallel.
  */
  parallel?: boolean;
  /**
  * If `true`, the plugin will prepare all files listed in `tsconfig.json` for `tsc` or `vue-tsc`.
  *
  * This is especially useful when you have a single `tsconfig.json` for multiple projects in a monorepo.
  */
  eager?: boolean;
  /**
  * If `true`, the plugin will create a new isolated context for each build,
  * ensuring that previously generated `.d.ts` code and caches are not reused.
  *
  * By default, the plugin may reuse internal caches or incremental build artifacts
  * to speed up repeated builds. Enabling this option forces a clean context,
  * guaranteeing that all type definitions are generated from scratch.
  *
  * @default false
  */
  newContext?: boolean;
  /**
  * If `true`, the plugin will emit `.d.ts` files for `.js` files as well.
  * This is useful when you want to generate type definitions for JavaScript files with JSDoc comments.
  *
  * Enabled by default when `allowJs` in compilerOptions is `true`.
  * This option is only used when {@link Options.oxc} is
  * `false`.
  */
  emitJs?: boolean;
}
interface Options extends GeneralOptions, TscOptions {
  /**
  * If `true`, the plugin will generate `.d.ts` files using Oxc,
  * which is significantly faster than the TypeScript compiler.
  *
  * This option is automatically enabled when `isolatedDeclarations` in `compilerOptions` is set to `true`.
  */
  oxc?: boolean | Omit<IsolatedDeclarationsOptions, "sourcemap">;
  /**
  * **[Experimental]** Enables DTS generation using `tsgo`.
  *
  * To use this option, make sure `@typescript/native-preview` is installed as a dependency,
  * or provide a custom path to the `tsgo` binary using the `path` option.
  *
  * **Note:** This option is not yet recommended for production environments.
  * `tsconfigRaw` and `isolatedDeclarations` options will be ignored when this option is enabled.
  *
  *
  * ```ts
  * // Use tsgo from `@typescript/native-preview` dependency
  * tsgo: true
  *
  * // Use custom tsgo path (e.g., managed by Nix)
  * tsgo: { path: '/path/to/tsgo' }
  * ```
  */
  tsgo?: boolean | TsgoOptions;
}
interface TsgoOptions {
  enabled?: boolean;
  /**
  * Custom path to the `tsgo` binary.
  */
  path?: string;
}
type Overwrite<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U;
type OptionsResolved = Overwrite<Required<Omit<Options, "compilerOptions">>, {
  entry?: string[];
  tsconfig?: string;
  oxc: IsolatedDeclarationsOptions | false;
  tsconfigRaw: TsConfigJson;
  tsgo: Omit<TsgoOptions, "enabled"> | false;
}>;
declare function resolveOptions({
  entry,
  cwd,
  dtsInput,
  emitDtsOnly,
  tsconfig,
  tsconfigRaw: overriddenTsconfigRaw,
  compilerOptions,
  sourcemap,
  resolver,
  cjsDefault,
  sideEffects,
  build,
  incremental,
  vue,
  tsMacro,
  parallel,
  eager,
  newContext,
  emitJs,
  oxc,
  tsgo
}: Options): OptionsResolved;
//#endregion
//#region src/fake-js.d.ts
declare function createFakeJsPlugin({
  sourcemap,
  cjsDefault,
  sideEffects
}: Pick<OptionsResolved, "sourcemap" | "cjsDefault" | "sideEffects">): Plugin;
//#endregion
//#region src/generate.d.ts
declare function createGeneratePlugin({
  entry,
  tsconfig,
  tsconfigRaw,
  build,
  incremental,
  cwd,
  oxc,
  emitDtsOnly,
  vue,
  tsMacro,
  parallel,
  eager,
  tsgo,
  newContext,
  emitJs,
  sourcemap
}: Pick<OptionsResolved, "entry" | "cwd" | "tsconfig" | "tsconfigRaw" | "build" | "incremental" | "oxc" | "emitDtsOnly" | "vue" | "tsMacro" | "parallel" | "eager" | "tsgo" | "newContext" | "emitJs" | "sourcemap">): Plugin;
//#endregion
//#region src/index.d.ts
declare function dts(options?: Options): Plugin[];
//#endregion
export { type Options, createFakeJsPlugin, createGeneratePlugin, dts, resolveOptions };