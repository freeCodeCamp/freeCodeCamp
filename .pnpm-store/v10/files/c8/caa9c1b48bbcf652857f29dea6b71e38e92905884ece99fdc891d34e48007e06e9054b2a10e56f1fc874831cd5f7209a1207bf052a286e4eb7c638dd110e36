import { a as makeBuiltinPluginCallable, n as BuiltinPlugin, t as normalizedStringOrRegex } from "./normalize-string-or-regex-CbQQ69gT.mjs";
//#region src/builtin-plugin/constructors.ts
function viteModulePreloadPolyfillPlugin(config) {
	return new BuiltinPlugin("builtin:vite-module-preload-polyfill", config);
}
function viteDynamicImportVarsPlugin(config) {
	if (config) {
		config.include = normalizedStringOrRegex(config.include);
		config.exclude = normalizedStringOrRegex(config.exclude);
	}
	return new BuiltinPlugin("builtin:vite-dynamic-import-vars", config);
}
function viteImportGlobPlugin(config) {
	return new BuiltinPlugin("builtin:vite-import-glob", config);
}
function viteReporterPlugin(config) {
	return new BuiltinPlugin("builtin:vite-reporter", config);
}
function viteWasmFallbackPlugin() {
	return makeBuiltinPluginCallable(new BuiltinPlugin("builtin:vite-wasm-fallback"));
}
function viteLoadFallbackPlugin() {
	return new BuiltinPlugin("builtin:vite-load-fallback");
}
function viteJsonPlugin(config) {
	return makeBuiltinPluginCallable(new BuiltinPlugin("builtin:vite-json", config));
}
function viteBuildImportAnalysisPlugin(config) {
	return new BuiltinPlugin("builtin:vite-build-import-analysis", config);
}
function viteResolvePlugin(config) {
	return makeBuiltinPluginCallable(new BuiltinPlugin("builtin:vite-resolve", {
		...config,
		yarnPnp: typeof process === "object" && !!process.versions?.pnp
	}));
}
function isolatedDeclarationPlugin(config) {
	return new BuiltinPlugin("builtin:isolated-declaration", config);
}
function viteWebWorkerPostPlugin() {
	return new BuiltinPlugin("builtin:vite-web-worker-post");
}
/**
* A plugin that converts CommonJS require() calls for external dependencies into ESM import statements.
*
* @see https://rolldown.rs/builtin-plugins/esm-external-require
* @category Builtin Plugins
*/
function esmExternalRequirePlugin(config) {
	const plugin = new BuiltinPlugin("builtin:esm-external-require", config);
	plugin.enforce = "pre";
	return plugin;
}
/**
* This plugin should not be used for Rolldown.
*/
function oxcRuntimePlugin() {
	return makeBuiltinPluginCallable(new BuiltinPlugin("builtin:oxc-runtime"));
}
function viteReactRefreshWrapperPlugin(config) {
	if (config) {
		config.include = normalizedStringOrRegex(config.include);
		config.exclude = normalizedStringOrRegex(config.exclude);
	}
	return makeBuiltinPluginCallable(new BuiltinPlugin("builtin:vite-react-refresh-wrapper", config));
}
//#endregion
export { viteDynamicImportVarsPlugin as a, viteLoadFallbackPlugin as c, viteReporterPlugin as d, viteResolvePlugin as f, viteBuildImportAnalysisPlugin as i, viteModulePreloadPolyfillPlugin as l, viteWebWorkerPostPlugin as m, isolatedDeclarationPlugin as n, viteImportGlobPlugin as o, viteWasmFallbackPlugin as p, oxcRuntimePlugin as r, viteJsonPlugin as s, esmExternalRequirePlugin as t, viteReactRefreshWrapperPlugin as u };
