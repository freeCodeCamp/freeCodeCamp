/*
	MIT License http://www.opensource.org/licenses/mit-license.php
*/

"use strict";

const RuntimeGlobals = require("../RuntimeGlobals");
const Template = require("../Template");
const HelperRuntimeModule = require("./HelperRuntimeModule");

/** @typedef {import("../Module").RuntimeRequirements} RuntimeRequirements */
/** @typedef {import("../Module").ExportsType} ExportsType */
/** @typedef {import("../ChunkGraph").ModuleId} ModuleId */

/**
 * @param {ExportsType} exportsType exports type
 * @returns {string} mode
 */
function getMakeDeferredNamespaceModeFromExportsType(exportsType) {
	// number is from createFakeNamespaceObject mode ^ 1
	if (exportsType === "namespace") return `/* ${exportsType} */ 8`;
	if (exportsType === "default-only") return `/* ${exportsType} */ 0`;
	if (exportsType === "default-with-named") return `/* ${exportsType} */ 2`;
	if (exportsType === "dynamic") return `/* ${exportsType} */ 6`;
	throw new Error(`Unknown exports type: ${exportsType}`);
}

/**
 * @param {string} moduleId moduleId
 * @param {ExportsType} exportsType exportsType
 * @param {(ModuleId | null)[]} asyncDepsIds asyncDepsIds
 * @param {RuntimeRequirements} runtimeRequirements runtime requirements
 * @returns {string} call make optimized deferred namespace object
 */
function getOptimizedDeferredModule(
	moduleId,
	exportsType,
	asyncDepsIds,
	runtimeRequirements
) {
	runtimeRequirements.add(RuntimeGlobals.makeOptimizedDeferredNamespaceObject);
	const mode = getMakeDeferredNamespaceModeFromExportsType(exportsType);
	return `${RuntimeGlobals.makeOptimizedDeferredNamespaceObject}(${moduleId}, ${mode}${
		asyncDepsIds.length > 0
			? `, ${JSON.stringify(asyncDepsIds.filter((x) => x !== null))}`
			: ""
	})`;
}

class MakeOptimizedDeferredNamespaceObjectRuntimeModule extends HelperRuntimeModule {
	/**
	 * @param {boolean} hasAsyncRuntime if async module is used.
	 */
	constructor(hasAsyncRuntime) {
		super("make optimized deferred namespace object");
		/** @type {boolean} */
		this.hasAsyncRuntime = hasAsyncRuntime;
	}

	/**
	 * Generates runtime code for this runtime module.
	 * @returns {string | null} runtime code
	 */
	generate() {
		if (!this.compilation) return null;
		const fn = RuntimeGlobals.makeOptimizedDeferredNamespaceObject;
		const hasAsync = this.hasAsyncRuntime;
		return Template.asString([
			// Note: must be a function (not arrow), because this is used in body!
			`${fn} = function(moduleId, mode${hasAsync ? ", asyncDeps" : ""}) {`,
			Template.indent([
				"var r = this;",
				hasAsync ? "var isAsync = asyncDeps && asyncDeps.length;" : "",
				"var obj = {",
				Template.indent([
					"get a() {",
					Template.indent([
						"var exports = r(moduleId);",
						hasAsync
							? `if(isAsync) exports = exports[${RuntimeGlobals.asyncModuleExportSymbol}];`
							: "",
						// if exportsType is "namespace" we can generate the most optimized code,
						// on the second access, we can avoid trigger the getter.
						// we can also do this if exportsType is "dynamic" and there is a "__esModule" property on it.
						'if(mode & 8 || (mode & 4 && exports.__esModule)) Object.defineProperty(this, "a", { value: exports });',
						"return exports;"
					]),
					"}"
				]),
				"};",
				hasAsync
					? `if(isAsync) obj[${RuntimeGlobals.deferredModuleAsyncTransitiveDependenciesSymbol}] = asyncDeps;`
					: "",
				"return obj;"
			]),
			"};"
		]);
	}
}

class MakeDeferredNamespaceObjectRuntimeModule extends HelperRuntimeModule {
	/**
	 * @param {boolean} hasAsyncRuntime if async module is used.
	 */
	constructor(hasAsyncRuntime) {
		super("make deferred namespace object");
		/** @type {boolean} */
		this.hasAsyncRuntime = hasAsyncRuntime;
	}

	/**
	 * Generates runtime code for this runtime module.
	 * @returns {string | null} runtime code
	 */
	generate() {
		if (!this.compilation) return null;
		const { runtimeTemplate } = this.compilation;
		const fn = RuntimeGlobals.makeDeferredNamespaceObject;
		const hasAsync = this.hasAsyncRuntime;
		const init = runtimeTemplate.supportsOptionalChaining()
			? "init?.();"
			: "if (init) init();";
		return `${fn} = ${runtimeTemplate.basicFunction("moduleId, mode", [
			"var cachedModule = __webpack_module_cache__[moduleId];",
			"if (cachedModule && cachedModule.error === undefined) {",
			Template.indent([
				"var exports = cachedModule.exports;",
				hasAsync
					? `if (${RuntimeGlobals.asyncModuleExportSymbol} in exports) exports = exports[${RuntimeGlobals.asyncModuleExportSymbol}];`
					: "",
				"if (mode & 8) return exports;",
				`return ${RuntimeGlobals.createFakeNamespaceObject}(exports, mode);`
			]),
			"}",
			"",
			`var init = ${runtimeTemplate.basicFunction("", [
				`ns = ${RuntimeGlobals.require}(moduleId);`,
				hasAsync
					? `if (${RuntimeGlobals.asyncModuleExportSymbol} in ns) ns = ns[${RuntimeGlobals.asyncModuleExportSymbol}];`
					: "",
				"init = null;",
				"if (mode & 8 || mode & 4 && ns.__esModule && typeof ns === 'object') {",
				Template.indent([
					"delete handler.defineProperty;",
					"delete handler.deleteProperty;",
					"delete handler.set;",
					"delete handler.get;",
					"delete handler.has;",
					"delete handler.ownKeys;",
					"delete handler.getOwnPropertyDescriptor;"
				]),
				"} else {",
				Template.indent([
					`ns = ${RuntimeGlobals.createFakeNamespaceObject}(ns, mode);`
				]),
				"}"
			])};`,
			"",
			"var ns = __webpack_module_deferred_exports__[moduleId] || (__webpack_module_deferred_exports__[moduleId] = { __proto__: null });",
			"var handler = {",
			Template.indent([
				"__proto__: null,",
				`get: ${runtimeTemplate.basicFunction("_, name", [
					"switch (name) {",
					Template.indent([
						'case "__esModule": return true;',
						'case Symbol.toStringTag: return "Deferred Module";',
						'case "then": return undefined;'
					]),
					"}",
					init,
					"return ns[name];"
				])},`,
				`has: ${runtimeTemplate.basicFunction("_, name", [
					"switch (name) {",
					Template.indent(
						[
							'case "__esModule":',
							"case Symbol.toStringTag:",
							hasAsync
								? `case ${RuntimeGlobals.deferredModuleAsyncTransitiveDependenciesSymbol}:`
								: "",
							Template.indent("return true;"),
							'case "then":',
							Template.indent("return false;")
						].filter(Boolean)
					),
					"}",
					init,
					"return name in ns;"
				])},`,
				`ownKeys: ${runtimeTemplate.basicFunction("", [
					init,
					`var keys = Reflect.ownKeys(ns).filter(${runtimeTemplate.expressionFunction('x !== "then" && x !== Symbol.toStringTag', "x")}).concat([Symbol.toStringTag]);`,
					"return keys;"
				])},`,
				`getOwnPropertyDescriptor: ${runtimeTemplate.basicFunction("_, name", [
					"switch (name) {",
					Template.indent([
						'case "__esModule": return { value: true, configurable: !(mode & 8) };',
						'case Symbol.toStringTag: return { value: "Deferred Module", configurable: !(mode & 8) };',
						'case "then": return undefined;'
					]),
					"}",
					init,
					"var desc = Reflect.getOwnPropertyDescriptor(ns, name);",
					'if (mode & 2 && name == "default" && !desc) {',
					Template.indent("desc = { value: ns, configurable: true };"),
					"}",
					"return desc;"
				])},`,
				`defineProperty: ${runtimeTemplate.basicFunction("_, name", [
					init,
					// Note: This behavior does not match the spec one, but since webpack does not do it either
					// for a normal Module Namespace object (in MakeNamespaceObjectRuntimeModule), let's keep it simple.
					"return false;"
				])},`,
				`deleteProperty: ${runtimeTemplate.returningFunction("false")},`,
				`set: ${runtimeTemplate.returningFunction("false")},`
			]),
			"}",
			// we don't fully emulate ES Module semantics in this Proxy to align with normal webpack esm namespace object.
			"return new Proxy(ns, handler);"
		])};`;
	}
}

module.exports.MakeDeferredNamespaceObjectRuntimeModule =
	MakeDeferredNamespaceObjectRuntimeModule;
module.exports.MakeOptimizedDeferredNamespaceObjectRuntimeModule =
	MakeOptimizedDeferredNamespaceObjectRuntimeModule;
module.exports.getMakeDeferredNamespaceModeFromExportsType =
	getMakeDeferredNamespaceModeFromExportsType;
module.exports.getOptimizedDeferredModule = getOptimizedDeferredModule;
