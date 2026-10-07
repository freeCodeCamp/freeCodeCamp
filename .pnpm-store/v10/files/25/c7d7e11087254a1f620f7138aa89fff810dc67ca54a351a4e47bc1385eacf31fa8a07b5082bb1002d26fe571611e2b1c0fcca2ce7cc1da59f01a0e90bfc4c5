import { n as __toESM, t as require_binding } from "./binding-BeU_1iEk.mjs";
import { a as bindingifySourcemap, n as normalizeBindingError } from "./error-DL-e8-oE.mjs";
//#region src/utils/minify.ts
var import_binding = /* @__PURE__ */ __toESM(require_binding(), 1);
/**
* Minify asynchronously.
*
* Note: This function can be slower than {@linkcode minifySync} due to the overhead of spawning a thread.
*
* @category Utilities
* @experimental
*/
async function minify(filename, sourceText, options) {
	const inputMap = bindingifySourcemap(options?.inputMap);
	const result = await (0, import_binding.minify)(filename, sourceText, options);
	if (result.map && inputMap) result.map = {
		version: 3,
		...(0, import_binding.collapseSourcemaps)([inputMap, bindingifySourcemap(result.map)])
	};
	return result;
}
/**
* Minify synchronously.
*
* @category Utilities
* @experimental
*/
function minifySync(filename, sourceText, options) {
	const inputMap = bindingifySourcemap(options?.inputMap);
	const result = (0, import_binding.minifySync)(filename, sourceText, options);
	if (result.map && inputMap) result.map = {
		version: 3,
		...(0, import_binding.collapseSourcemaps)([inputMap, bindingifySourcemap(result.map)])
	};
	return result;
}
//#endregion
//#region src/utils/transform.ts
const yarnPnp$1 = typeof process === "object" && !!process.versions?.pnp;
/**
* Transpile a JavaScript or TypeScript into a target ECMAScript version, asynchronously.
*
* Note: This function can be slower than `transformSync` due to the overhead of spawning a thread.
*
* @param filename The name of the file being transformed. If this is a
* relative path, consider setting the {@linkcode TransformOptions#cwd} option.
* @param sourceText The source code to transform.
* @param options The transform options including tsconfig and inputMap. See {@linkcode TransformOptions} for more information.
* @param cache Optional tsconfig cache for reusing resolved tsconfig across multiple transforms.
* Only used when `options.tsconfig` is `true`.
*
* @returns a promise that resolves to an object containing the transformed code,
* source maps, and any errors that occurred during parsing or transformation.
*
* @category Utilities
* @experimental
*/
async function transform(filename, sourceText, options, cache) {
	const result = await (0, import_binding.enhancedTransform)(filename, sourceText, options, cache, yarnPnp$1);
	return {
		...result,
		errors: result.errors.map(normalizeBindingError),
		warnings: result.warnings.map((w) => w.field0)
	};
}
/**
* Transpile a JavaScript or TypeScript into a target ECMAScript version.
*
* @param filename The name of the file being transformed. If this is a
* relative path, consider setting the {@linkcode TransformOptions#cwd} option.
* @param sourceText The source code to transform.
* @param options The transform options including tsconfig and inputMap. See {@linkcode TransformOptions} for more information.
* @param cache Optional tsconfig cache for reusing resolved tsconfig across multiple transforms.
* Only used when `options.tsconfig` is `true`.
*
* @returns an object containing the transformed code, source maps, and any errors
* that occurred during parsing or transformation.
*
* @category Utilities
* @experimental
*/
function transformSync(filename, sourceText, options, cache) {
	const result = (0, import_binding.enhancedTransformSync)(filename, sourceText, options, cache, yarnPnp$1);
	return {
		...result,
		errors: result.errors.map(normalizeBindingError),
		warnings: result.warnings.map((w) => w.field0)
	};
}
//#endregion
//#region src/utils/resolve-tsconfig.ts
const yarnPnp = typeof process === "object" && !!process.versions?.pnp;
/**
* Cache for tsconfig resolution to avoid redundant file system operations.
*
* The cache stores resolved tsconfig configurations keyed by their file paths.
* When transforming multiple files in the same project, tsconfig lookups are
* deduplicated, improving performance.
*
* @category Utilities
* @experimental
*/
var TsconfigCache = class extends import_binding.TsconfigCache {
	constructor() {
		super(yarnPnp);
	}
};
/** @hidden This is only expected to be used by Vite */
function resolveTsconfig(filename, cache) {
	return (0, import_binding.resolveTsconfig)(filename, cache, yarnPnp);
}
//#endregion
export { minify as a, transformSync as i, resolveTsconfig as n, minifySync as o, transform as r, TsconfigCache as t };
