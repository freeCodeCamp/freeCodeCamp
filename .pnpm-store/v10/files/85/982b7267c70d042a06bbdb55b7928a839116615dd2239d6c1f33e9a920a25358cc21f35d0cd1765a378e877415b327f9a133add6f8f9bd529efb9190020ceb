import { B as ResolveResult, C as BindingViteManifestPluginConfig, G as isolatedDeclaration, I as NapiResolveOptions, K as isolatedDeclarationSync, M as IsolatedDeclarationsResult, O as BindingViteTransformPluginConfig, V as ResolverFactory, _ as BindingTsconfigRawOptions, f as BindingRebuildStrategy, g as BindingTsconfigCompilerOptions, i as BindingClientHmrUpdate, j as IsolatedDeclarationsOptions, n as BindingBundleAnalyzerPluginConfig, q as moduleRunnerTransform, r as BindingBundleState } from "./shared/binding-zH1vcmbM.mjs";
import { Jt as freeExternalMemory, Kt as RolldownOutput, Lt as OutputOptions, N as BuiltinPlugin, X as defineParallelPlugin, c as InputOptions, st as NormalizedOutputOptions } from "./shared/define-config-5HJ1b9vG.mjs";
import { a as MinifyOptions$1, c as minifySync$1, d as parse$1, f as parseSync$1, i as transformSync$1, l as ParseResult$1, m as resolveTsconfig, n as TransformResult$1, o as MinifyResult$1, p as TsconfigCache$1, r as transform$1, s as minify$1, t as TransformOptions$1, u as ParserOptions$1 } from "./shared/transform-DgZ3paSD.mjs";
import { a as viteDynamicImportVarsPlugin, c as viteLoadFallbackPlugin, d as viteReporterPlugin, f as viteResolvePlugin, i as viteBuildImportAnalysisPlugin, l as viteModulePreloadPolyfillPlugin, m as viteWebWorkerPostPlugin, n as isolatedDeclarationPlugin, o as viteImportGlobPlugin, p as viteWasmFallbackPlugin, r as oxcRuntimePlugin, s as viteJsonPlugin, u as viteReactRefreshWrapperPlugin } from "./shared/constructors-D0W3rNfA.mjs";

//#region src/api/dev/dev-options.d.ts
type DevOnHmrUpdates = (result: Error | {
  updates: BindingClientHmrUpdate[];
  changedFiles: string[];
}) => void | Promise<void>;
type DevOnOutput = (result: Error | RolldownOutput) => void | Promise<void>;
interface DevWatchOptions {
  /**
  * If `true`, files are not written to disk.
  * @default false
  */
  skipWrite?: boolean;
  /**
  * If `true`, use polling instead of native file system events for watching.
  * @default false
  */
  usePolling?: boolean;
  /**
  * Poll interval in milliseconds (only used when usePolling is true).
  * @default 100
  */
  pollInterval?: number;
  /**
  * If `true`, use debounced watcher. If `false`, use non-debounced watcher for immediate responses.
  * @default true
  */
  useDebounce?: boolean;
  /**
  * Debounce duration in milliseconds (only used when useDebounce is true).
  * @default 10
  */
  debounceDuration?: number;
  /**
  * Whether to compare file contents for poll-based watchers (only used when usePolling is true).
  * When enabled, poll watchers will check file contents to determine if they actually changed.
  * @default false
  */
  compareContentsForPolling?: boolean;
  /**
  * Tick rate in milliseconds for debounced watchers (only used when useDebounce is true).
  * Controls how frequently the debouncer checks for events to process.
  * When not specified, the debouncer will auto-select an appropriate tick rate (1/4 of the debounce duration).
  * @default undefined (auto-select)
  */
  debounceTickRate?: number;
}
interface DevOptions {
  onHmrUpdates?: DevOnHmrUpdates;
  onOutput?: DevOnOutput;
  /**
  * Strategy for triggering rebuilds after HMR updates.
  * - `'always'`: Always trigger a rebuild after HMR updates
  * - `'auto'`: Trigger rebuild only if HMR updates contain full reload updates
  * - `'never'`: Never trigger rebuild after HMR updates (default)
  * @default 'auto'
  */
  rebuildStrategy?: "always" | "auto" | "never";
  watch?: DevWatchOptions;
}
//#endregion
//#region src/api/dev/dev-engine.d.ts
declare class DevEngine {
  #private;
  static create(inputOptions: InputOptions, outputOptions?: OutputOptions, devOptions?: DevOptions): Promise<DevEngine>;
  private constructor();
  run(): Promise<void>;
  ensureCurrentBuildFinish(): Promise<void>;
  getBundleState(): Promise<BindingBundleState>;
  ensureLatestBuildOutput(): Promise<void>;
  invalidate(file: string, firstInvalidatedBy?: string): Promise<BindingClientHmrUpdate[]>;
  registerModules(clientId: string, modules: string[]): Promise<void>;
  removeClient(clientId: string): Promise<void>;
  close(): Promise<void>;
  /**
  * Compile a lazy entry module and return HMR-style patch code.
  *
  * This is called when a dynamically imported module is first requested at runtime.
  * The module was previously stubbed with a proxy, and now we need to compile the
  * actual module and its dependencies.
  *
  * @param moduleId - The absolute file path of the module to compile
  * @param clientId - The client ID requesting this compilation
  * @returns The compiled JavaScript code as a string (HMR patch format)
  */
  compileEntry(moduleId: string, clientId: string): Promise<string>;
}
//#endregion
//#region src/api/dev/index.d.ts
declare const dev: typeof DevEngine.create;
//#endregion
//#region src/api/experimental.d.ts
/**
* This is an experimental API. Its behavior may change in the future.
*
* - Calling this API will only execute the `scan/build` stage of rolldown.
* - `scan` will clean up all resources automatically, but if you want to ensure timely cleanup, you need to wait for the returned promise to resolve.
*
* @example To ensure cleanup of resources, use the returned promise to wait for the scan to complete.
* ```ts
* import { scan } from 'rolldown/api/experimental';
*
* const cleanupPromise = await scan(...);
* await cleanupPromise;
* // Now all resources have been cleaned up.
* ```
*/
declare const scan: (rawInputOptions: InputOptions, rawOutputOptions?: {}) => Promise<Promise<void>>;
//#endregion
//#region src/builtin-plugin/alias-plugin.d.ts
type ViteAliasPluginConfig = {
  entries: {
    find: string | RegExp;
    replacement: string;
  }[];
};
declare function viteAliasPlugin(config: ViteAliasPluginConfig): BuiltinPlugin;
//#endregion
//#region src/builtin-plugin/bundle-analyzer-plugin.d.ts
/**
* A plugin that analyzes bundle composition and generates detailed reports.
*
* The plugin outputs a file containing detailed information about:
* - All chunks and their relationships
* - Modules bundled in each chunk
* - Import dependencies between chunks
* - Reachable modules from each entry point
*
* @example
* ```js
* import { bundleAnalyzerPlugin } from 'rolldown/experimental';
*
* export default {
*   plugins: [
*     bundleAnalyzerPlugin()
*   ]
* }
* ```
*
* @example
* **Custom filename**
* ```js
* import { bundleAnalyzerPlugin } from 'rolldown/experimental';
*
* export default {
*   plugins: [
*     bundleAnalyzerPlugin({
*       fileName: 'bundle-analysis.json'
*     })
*   ]
* }
* ```
*
* @example
* **LLM-friendly markdown output**
* ```js
* import { bundleAnalyzerPlugin } from 'rolldown/experimental';
*
* export default {
*   plugins: [
*     bundleAnalyzerPlugin({
*       format: 'md'
*     })
*   ]
* }
* ```
*/
declare function bundleAnalyzerPlugin(config?: BindingBundleAnalyzerPluginConfig): BuiltinPlugin;
//#endregion
//#region src/builtin-plugin/transform-plugin.d.ts
type TransformPattern = string | RegExp | readonly (RegExp | string)[];
type TransformPluginConfig = Omit<BindingViteTransformPluginConfig, "include" | "exclude" | "jsxRefreshInclude" | "jsxRefreshExclude" | "yarnPnp"> & {
  include?: TransformPattern;
  exclude?: TransformPattern;
  jsxRefreshInclude?: TransformPattern;
  jsxRefreshExclude?: TransformPattern;
};
declare function viteTransformPlugin(config: TransformPluginConfig): BuiltinPlugin;
//#endregion
//#region src/builtin-plugin/vite-manifest-plugin.d.ts
type ViteManifestPluginConfig = Omit<BindingViteManifestPluginConfig, "isLegacy"> & {
  isOutputOptionsForLegacyChunks?: (outputOptions: NormalizedOutputOptions) => boolean;
};
declare function viteManifestPlugin(config: ViteManifestPluginConfig): BuiltinPlugin;
//#endregion
//#region src/experimental-index.d.ts
/**
* In-memory file system for browser builds.
*
* This is a re-export of the {@link https://github.com/streamich/memfs | memfs} package used by the WASI runtime.
* It allows you to read and write files to a virtual filesystem when using rolldown in browser environments.
*
* - `fs`: A Node.js-compatible filesystem API (`IFs` from memfs)
* - `volume`: The underlying `Volume` instance that stores the filesystem state
*
* Returns `undefined` in Node.js builds (only available in browser builds via `@rolldown/browser`).
*
* @example
* ```typescript
* import { memfs } from 'rolldown/experimental';
*
* // Write files to virtual filesystem before bundling
* memfs?.volume.fromJSON({
*   '/src/index.js': 'export const foo = 42;',
*   '/package.json': '{"name": "my-app"}'
* });
*
* // Read files from the virtual filesystem
* const content = memfs?.fs.readFileSync('/src/index.js', 'utf8');
* ```
*
* @see {@link https://github.com/streamich/memfs} for more information on the memfs API.
*/
declare const memfs: {
  fs: any;
  volume: any;
} | undefined;
/** @deprecated Use from `rolldown/utils` instead. */
declare const parse: typeof parse$1;
/** @deprecated Use from `rolldown/utils` instead. */
declare const parseSync: typeof parseSync$1;
/** @deprecated Use from `rolldown/utils` instead. */
type ParseResult = ParseResult$1;
/** @deprecated Use from `rolldown/utils` instead. */
type ParserOptions = ParserOptions$1;
/** @deprecated Use from `rolldown/utils` instead. */
declare const minify: typeof minify$1;
/** @deprecated Use from `rolldown/utils` instead. */
declare const minifySync: typeof minifySync$1;
/** @deprecated Use from `rolldown/utils` instead. */
type MinifyOptions = MinifyOptions$1;
/** @deprecated Use from `rolldown/utils` instead. */
type MinifyResult = MinifyResult$1;
/** @deprecated Use from `rolldown/utils` instead. */
declare const transform: typeof transform$1;
/** @deprecated Use from `rolldown/utils` instead. */
declare const transformSync: typeof transformSync$1;
/** @deprecated Use from `rolldown/utils` instead. */
type TransformOptions = TransformOptions$1;
/** @deprecated Use from `rolldown/utils` instead. */
type TransformResult = TransformResult$1;
/** @deprecated Use from `rolldown/utils` instead. */
declare const TsconfigCache: typeof TsconfigCache$1;
/** @deprecated Use from `rolldown/utils` instead. */
type TsconfigRawOptions = BindingTsconfigRawOptions;
/** @deprecated Use from `rolldown/utils` instead. */
type TsconfigCompilerOptions = BindingTsconfigCompilerOptions;
//#endregion
export { type BindingClientHmrUpdate, BindingRebuildStrategy, DevEngine, type DevOptions, type DevWatchOptions, type IsolatedDeclarationsOptions, type IsolatedDeclarationsResult, MinifyOptions, MinifyResult, ParseResult, ParserOptions, type NapiResolveOptions as ResolveOptions, type ResolveResult, ResolverFactory, TransformOptions, TransformResult, TsconfigCache, TsconfigCompilerOptions, TsconfigRawOptions, bundleAnalyzerPlugin, defineParallelPlugin, dev, viteDynamicImportVarsPlugin as dynamicImportVarsPlugin, viteDynamicImportVarsPlugin, freeExternalMemory, viteImportGlobPlugin as importGlobPlugin, viteImportGlobPlugin, isolatedDeclaration, isolatedDeclarationPlugin, isolatedDeclarationSync, memfs, minify, minifySync, moduleRunnerTransform, oxcRuntimePlugin, parse, parseSync, resolveTsconfig, scan, transform, transformSync, viteAliasPlugin, viteBuildImportAnalysisPlugin, viteJsonPlugin, viteLoadFallbackPlugin, viteManifestPlugin, viteModulePreloadPolyfillPlugin, viteReactRefreshWrapperPlugin, viteReporterPlugin, viteResolvePlugin, viteTransformPlugin, viteWasmFallbackPlugin, viteWebWorkerPostPlugin };