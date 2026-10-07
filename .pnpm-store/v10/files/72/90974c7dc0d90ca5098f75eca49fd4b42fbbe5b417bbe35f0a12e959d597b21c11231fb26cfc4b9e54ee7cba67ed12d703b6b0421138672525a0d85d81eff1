import { n as __toESM, t as require_binding } from "./shared/binding-BeU_1iEk.mjs";
import { n as BuiltinPlugin, t as normalizedStringOrRegex } from "./shared/normalize-string-or-regex-CbQQ69gT.mjs";
import { o as transformToRollupOutput } from "./shared/bindingify-input-options-DbbBhzky.mjs";
import { c as validateOption, n as createBundlerOptions, t as RolldownBuild, u as PluginDriver } from "./shared/rolldown-build-DSxL8qiP.mjs";
import { i as unwrapBindingResult, r as normalizeBindingResult } from "./shared/error-DL-e8-oE.mjs";
import { n as parseSync$1, t as parse$1 } from "./shared/parse-B_ZnWxLZ.mjs";
import { a as viteDynamicImportVarsPlugin, c as viteLoadFallbackPlugin, d as viteReporterPlugin, f as viteResolvePlugin, i as viteBuildImportAnalysisPlugin, l as viteModulePreloadPolyfillPlugin, m as viteWebWorkerPostPlugin, n as isolatedDeclarationPlugin, o as viteImportGlobPlugin, p as viteWasmFallbackPlugin, r as oxcRuntimePlugin, s as viteJsonPlugin, u as viteReactRefreshWrapperPlugin } from "./shared/constructors-C2EWPKW3.mjs";
import { a as minify$1, i as transformSync$1, n as resolveTsconfig, o as minifySync$1, r as transform$1, t as TsconfigCache$1 } from "./shared/resolve-tsconfig-CfYpGzid.mjs";
import { pathToFileURL } from "node:url";
//#region src/api/dev/dev-engine.ts
var import_binding = /* @__PURE__ */ __toESM(require_binding(), 1);
var DevEngine = class DevEngine {
	#inner;
	#cachedBuildFinishPromise = null;
	static async create(inputOptions, outputOptions = {}, devOptions = {}) {
		inputOptions = await PluginDriver.callOptionsHook(inputOptions);
		const options = await createBundlerOptions(inputOptions, outputOptions, false);
		const userOnHmrUpdates = devOptions.onHmrUpdates;
		const bindingOnHmrUpdates = userOnHmrUpdates ? function(rawResult) {
			const result = normalizeBindingResult(rawResult);
			if (result instanceof Error) {
				userOnHmrUpdates(result);
				return;
			}
			const [updates, changedFiles] = result;
			userOnHmrUpdates({
				updates,
				changedFiles
			});
		} : void 0;
		const userOnOutput = devOptions.onOutput;
		const bindingDevOptions = {
			onHmrUpdates: bindingOnHmrUpdates,
			onOutput: userOnOutput ? function(rawResult) {
				const result = normalizeBindingResult(rawResult);
				if (result instanceof Error) {
					userOnOutput(result);
					return;
				}
				userOnOutput(transformToRollupOutput(result));
			} : void 0,
			rebuildStrategy: devOptions.rebuildStrategy ? devOptions.rebuildStrategy === "always" ? import_binding.BindingRebuildStrategy.Always : devOptions.rebuildStrategy === "auto" ? import_binding.BindingRebuildStrategy.Auto : import_binding.BindingRebuildStrategy.Never : void 0,
			watch: devOptions.watch && {
				skipWrite: devOptions.watch.skipWrite,
				usePolling: devOptions.watch.usePolling,
				pollInterval: devOptions.watch.pollInterval,
				useDebounce: devOptions.watch.useDebounce,
				debounceDuration: devOptions.watch.debounceDuration,
				compareContentsForPolling: devOptions.watch.compareContentsForPolling,
				debounceTickRate: devOptions.watch.debounceTickRate
			}
		};
		return new DevEngine(new import_binding.BindingDevEngine(options.bundlerOptions, bindingDevOptions));
	}
	constructor(inner) {
		this.#inner = inner;
	}
	async run() {
		await this.#inner.run();
	}
	async ensureCurrentBuildFinish() {
		if (this.#cachedBuildFinishPromise) return this.#cachedBuildFinishPromise;
		const promise = this.#inner.ensureCurrentBuildFinish().then(() => {
			this.#cachedBuildFinishPromise = null;
		});
		this.#cachedBuildFinishPromise = promise;
		return promise;
	}
	async getBundleState() {
		return this.#inner.getBundleState();
	}
	async ensureLatestBuildOutput() {
		await this.#inner.ensureLatestBuildOutput();
	}
	async invalidate(file, firstInvalidatedBy) {
		return this.#inner.invalidate(file, firstInvalidatedBy);
	}
	async registerModules(clientId, modules) {
		await this.#inner.registerModules(clientId, modules);
	}
	async removeClient(clientId) {
		await this.#inner.removeClient(clientId);
	}
	async close() {
		await this.#inner.close();
	}
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
	async compileEntry(moduleId, clientId) {
		return this.#inner.compileEntry(moduleId, clientId);
	}
};
//#endregion
//#region src/api/dev/index.ts
const dev = (...args) => DevEngine.create(...args);
//#endregion
//#region src/types/external-memory-handle.ts
const symbolForExternalMemoryHandle = "__rolldown_external_memory_handle__";
/**
* Frees the external memory held by the given handle.
*
* This is useful when you want to manually release memory held by Rust objects
* (like `OutputChunk` or `OutputAsset`) before they are garbage collected.
*
* @param handle - The object with external memory to free
* @param keepDataAlive - If true, evaluates all lazy fields before freeing memory (default: false).
*   This will take time to copy data from Rust to JavaScript, but prevents errors
*   when accessing properties after the memory is freed.
* @returns Status object with `freed` boolean and optional `reason` string.
*   - `{ freed: true }` if memory was successfully freed
*   - `{ freed: false, reason: "..." }` if memory couldn't be freed (e.g., already freed or other references exist)
*
* @example
* ```typescript
* import { freeExternalMemory } from 'rolldown/experimental';
*
* const output = await bundle.generate();
* const chunk = output.output[0];
*
* // Use the chunk...
*
* // Manually free the memory (fast, but accessing properties after will throw)
* const status = freeExternalMemory(chunk); // { freed: true }
* const statusAgain = freeExternalMemory(chunk); // { freed: false, reason: "Memory has already been freed" }
*
* // Keep data alive before freeing (slower, but data remains accessible)
* freeExternalMemory(chunk, true); // Evaluates all lazy fields first
* console.log(chunk.code); // OK - data was copied to JavaScript before freeing
*
* // Without keepDataAlive, accessing chunk properties after freeing will throw an error
* ```
*/
function freeExternalMemory(handle, keepDataAlive = false) {
	return handle[symbolForExternalMemoryHandle](keepDataAlive);
}
//#endregion
//#region src/api/experimental.ts
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
const scan = async (rawInputOptions, rawOutputOptions = {}) => {
	validateOption("input", rawInputOptions);
	validateOption("output", rawOutputOptions);
	const ret = await createBundlerOptions(await PluginDriver.callOptionsHook(rawInputOptions), rawOutputOptions, false);
	const bundler = new import_binding.BindingBundler();
	if (RolldownBuild.asyncRuntimeShutdown) (0, import_binding.startAsyncRuntime)();
	async function cleanup() {
		await bundler.close();
		await ret.stopWorkers?.();
		(0, import_binding.shutdownAsyncRuntime)();
		RolldownBuild.asyncRuntimeShutdown = true;
	}
	let cleanupPromise = Promise.resolve();
	try {
		unwrapBindingResult(await bundler.scan(ret.bundlerOptions));
	} catch (err) {
		await cleanup();
		throw err;
	} finally {
		cleanupPromise = cleanup();
	}
	return cleanupPromise;
};
//#endregion
//#region src/plugin/parallel-plugin.ts
function defineParallelPlugin(pluginPath) {
	return (options) => {
		return { _parallel: {
			fileUrl: pathToFileURL(pluginPath).href,
			options
		} };
	};
}
//#endregion
//#region src/builtin-plugin/alias-plugin.ts
function viteAliasPlugin(config) {
	return new BuiltinPlugin("builtin:vite-alias", config);
}
//#endregion
//#region src/builtin-plugin/bundle-analyzer-plugin.ts
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
function bundleAnalyzerPlugin(config) {
	return new BuiltinPlugin("builtin:bundle-analyzer", config);
}
//#endregion
//#region src/builtin-plugin/transform-plugin.ts
function viteTransformPlugin(config) {
	return new BuiltinPlugin("builtin:vite-transform", {
		...config,
		include: normalizedStringOrRegex(config.include),
		exclude: normalizedStringOrRegex(config.exclude),
		jsxRefreshInclude: normalizedStringOrRegex(config.jsxRefreshInclude),
		jsxRefreshExclude: normalizedStringOrRegex(config.jsxRefreshExclude),
		yarnPnp: typeof process === "object" && !!process.versions?.pnp
	});
}
//#endregion
//#region src/builtin-plugin/vite-manifest-plugin.ts
function viteManifestPlugin(config) {
	return new BuiltinPlugin("builtin:vite-manifest", config);
}
//#endregion
//#region src/experimental-index.ts
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
const memfs = void 0;
/** @deprecated Use from `rolldown/utils` instead. */
const parse = parse$1;
/** @deprecated Use from `rolldown/utils` instead. */
const parseSync = parseSync$1;
/** @deprecated Use from `rolldown/utils` instead. */
const minify = minify$1;
/** @deprecated Use from `rolldown/utils` instead. */
const minifySync = minifySync$1;
/** @deprecated Use from `rolldown/utils` instead. */
const transform = transform$1;
/** @deprecated Use from `rolldown/utils` instead. */
const transformSync = transformSync$1;
/** @deprecated Use from `rolldown/utils` instead. */
const TsconfigCache = TsconfigCache$1;
//#endregion
var BindingRebuildStrategy = import_binding.BindingRebuildStrategy;
var ResolverFactory = import_binding.ResolverFactory;
var isolatedDeclaration = import_binding.isolatedDeclaration;
var isolatedDeclarationSync = import_binding.isolatedDeclarationSync;
var moduleRunnerTransform = import_binding.moduleRunnerTransform;
export { BindingRebuildStrategy, DevEngine, ResolverFactory, TsconfigCache, bundleAnalyzerPlugin, defineParallelPlugin, dev, viteDynamicImportVarsPlugin as dynamicImportVarsPlugin, viteDynamicImportVarsPlugin, freeExternalMemory, viteImportGlobPlugin as importGlobPlugin, viteImportGlobPlugin, isolatedDeclaration, isolatedDeclarationPlugin, isolatedDeclarationSync, memfs, minify, minifySync, moduleRunnerTransform, oxcRuntimePlugin, parse, parseSync, resolveTsconfig, scan, transform, transformSync, viteAliasPlugin, viteBuildImportAnalysisPlugin, viteJsonPlugin, viteLoadFallbackPlugin, viteManifestPlugin, viteModulePreloadPolyfillPlugin, viteReactRefreshWrapperPlugin, viteReporterPlugin, viteResolvePlugin, viteTransformPlugin, viteWasmFallbackPlugin, viteWebWorkerPostPlugin };
