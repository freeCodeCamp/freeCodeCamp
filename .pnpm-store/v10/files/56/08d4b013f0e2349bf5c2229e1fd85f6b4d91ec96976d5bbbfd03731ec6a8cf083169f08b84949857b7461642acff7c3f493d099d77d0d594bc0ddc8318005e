/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { RawSource } = require("webpack-sources");
const AsyncDependenciesBlock = require("../AsyncDependenciesBlock");
const Dependency = require("../Dependency");
const Module = require("../Module");
const ModuleFactory = require("../ModuleFactory");
const { JS_TYPES } = require("../ModuleSourceTypesConstants");
const {
	WEBPACK_MODULE_TYPE_LAZY_COMPILATION_PROXY
} = require("../ModuleTypeConstants");
const RuntimeGlobals = require("../RuntimeGlobals");
const Template = require("../Template");
const CommonJsRequireDependency = require("../dependencies/CommonJsRequireDependency");
const { registerNotSerializable } = require("../util/serialization");

/** @typedef {import("../../declarations/WebpackOptions")} WebpackOptions */
/** @typedef {import("../Compilation")} Compilation */
/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("../Dependency").UpdateHashContext} UpdateHashContext */
/** @typedef {import("../Module").BuildMeta} BuildMeta */
/** @typedef {import("../Module").CodeGenerationContext} CodeGenerationContext */
/** @typedef {import("../Module").CodeGenerationResult} CodeGenerationResult */
/** @typedef {import("../Module").LibIdentOptions} LibIdentOptions */
/** @typedef {import("../Module").NeedBuildContext} NeedBuildContext */
/** @typedef {import("../Module").SourceTypes} SourceTypes */
/** @typedef {import("../ModuleFactory").ModuleFactoryCreateData} ModuleFactoryCreateData */
/** @typedef {import("../ModuleFactory").ModuleFactoryResult} ModuleFactoryResult */
/** @typedef {import("../RequestShortener")} RequestShortener */
/** @typedef {import("../ResolverFactory").ResolverWithOptions} ResolverWithOptions */
/** @typedef {import("../WebpackError")} WebpackError */
/** @typedef {import("../dependencies/HarmonyImportDependency")} HarmonyImportDependency */
/** @typedef {import("../util/Hash")} Hash */
/** @typedef {import("../util/fs").InputFileSystem} InputFileSystem */

/** @typedef {{ client: string, data: string, active: boolean }} ModuleResult */

/**
 * @typedef {object} BackendApi
 * @property {function(function((Error | null)=) : void): void} dispose
 * @property {function(Module): ModuleResult} module
 */

const HMR_DEPENDENCY_TYPES = new Set([
	"import.meta.webpackHot.accept",
	"import.meta.webpackHot.decline",
	"module.hot.accept",
	"module.hot.decline"
]);

/**
 * @param {undefined|string|RegExp|Function} test test option
 * @param {Module} module the module
 * @returns {boolean | null | string} true, if the module should be selected
 */
const checkTest = (test, module) => {
	if (test === undefined) return true;
	if (typeof test === "function") {
		return test(module);
	}
	if (typeof test === "string") {
		const name = module.nameForCondition();
		return name && name.startsWith(test);
	}
	if (test instanceof RegExp) {
		const name = module.nameForCondition();
		return name && test.test(name);
	}
	return false;
};

class LazyCompilationDependency extends Dependency {
	/**
	 * @param {LazyCompilationProxyModule} proxyModule proxy module
	 */
	constructor(proxyModule) {
		super();
		this.proxyModule = proxyModule;
	}

	get category() {
		return "esm";
	}

	get type() {
		return "lazy import()";
	}

	/**
	 * @returns {string | null} an identifier to merge equal requests
	 */
	getResourceIdentifier() {
		return this.proxyModule.originalModule.identifier();
	}
}

registerNotSerializable(LazyCompilationDependency);

class LazyCompilationProxyModule extends Module {
	/**
	 * @param {string} context context
	 * @param {Module} originalModule an original module
	 * @param {string} request request
	 * @param {ModuleResult["client"]} client client
	 * @param {ModuleResult["data"]} data data
	 * @param {ModuleResult["active"]} active true when active, otherwise false
	 */
	constructor(context, originalModule, request, client, data, active) {
		super(
			WEBPACK_MODULE_TYPE_LAZY_COMPILATION_PROXY,
			context,
			originalModule.layer
		);
		this.originalModule = originalModule;
		this.request = request;
		this.client = client;
		this.data = data;
		this.active = active;
	}

	/**
	 * @returns {string} a unique identifier of the module
	 */
	identifier() {
		return `${WEBPACK_MODULE_TYPE_LAZY_COMPILATION_PROXY}|${this.originalModule.identifier()}`;
	}

	/**
	 * @param {RequestShortener} requestShortener the request shortener
	 * @returns {string} a user readable identifier of the module
	 */
	readableIdentifier(requestShortener) {
		return `${WEBPACK_MODULE_TYPE_LAZY_COMPILATION_PROXY} ${this.originalModule.readableIdentifier(
			requestShortener
		)}`;
	}

	/**
	 * Assuming this module is in the cache. Update the (cached) module with
	 * the fresh module from the factory. Usually updates internal references
	 * and properties.
	 * @param {Module} module fresh module
	 * @returns {void}
	 */
	updateCacheModule(module) {
		super.updateCacheModule(module);
		const m = /** @type {LazyCompilationProxyModule} */ (module);
		this.originalModule = m.originalModule;
		this.request = m.request;
		this.client = m.client;
		this.data = m.data;
		this.active = m.active;
	}

	/**
	 * @param {LibIdentOptions} options options
	 * @returns {string | null} an identifier for library inclusion
	 */
	libIdent(options) {
		return `${this.originalModule.libIdent(
			options
		)}!${WEBPACK_MODULE_TYPE_LAZY_COMPILATION_PROXY}`;
	}

	/**
	 * @param {NeedBuildContext} context context info
	 * @param {function((WebpackError | null)=, boolean=): void} callback callback function, returns true, if the module needs a rebuild
	 * @returns {void}
	 */
	needBuild(context, callback) {
		callback(null, !this.buildInfo || this.buildInfo.active !== this.active);
	}

	/**
	 * @param {WebpackOptions} options webpack options
	 * @param {Compilation} compilation the compilation
	 * @param {ResolverWithOptions} resolver the resolver
	 * @param {InputFileSystem} fs the file system
	 * @param {function(WebpackError=): void} callback callback function
	 * @returns {void}
	 */
	build(options, compilation, resolver, fs, callback) {
		this.buildInfo = {
			active: this.active
		};
		/** @type {BuildMeta} */
		this.buildMeta = {};
		this.clearDependenciesAndBlocks();
		const dep = new CommonJsRequireDependency(this.client);
		this.addDependency(dep);
		if (this.active) {
			const dep = new LazyCompilationDependency(this);
			const block = new AsyncDependenciesBlock({});
			block.addDependency(dep);
			this.addBlock(block);
		}
		callback();
	}

	/**
	 * @returns {SourceTypes} types available (do not mutate)
	 */
	getSourceTypes() {
		return JS_TYPES;
	}

	/**
	 * @param {string=} type the source type for which the size should be estimated
	 * @returns {number} the estimated size of the module (must be non-zero)
	 */
	size(type) {
		return 200;
	}

	/**
	 * @param {CodeGenerationContext} context context for code generation
	 * @returns {CodeGenerationResult} result
	 */
	codeGeneration({ runtimeTemplate, chunkGraph, moduleGraph }) {
		const sources = new Map();
		const runtimeRequirements = new Set();
		runtimeRequirements.add(RuntimeGlobals.module);
		const clientDep = /** @type {CommonJsRequireDependency} */ (
			this.dependencies[0]
		);
		const clientModule = moduleGraph.getModule(clientDep);
		const block = this.blocks[0];
		const client = Template.asString([
			`var client = ${runtimeTemplate.moduleExports({
				module: clientModule,
				chunkGraph,
				request: clientDep.userRequest,
				runtimeRequirements
			})}`,
			`var data = ${JSON.stringify(this.data)};`
		]);
		const keepActive = Template.asString([
			`var dispose = client.keepAlive({ data: data, active: ${JSON.stringify(
				Boolean(block)
			)}, module: module, onError: onError });`
		]);
		let source;
		if (block) {
			const dep = block.dependencies[0];
			const module = /** @type {Module} */ (moduleGraph.getModule(dep));
			source = Template.asString([
				client,
				`module.exports = ${runtimeTemplate.moduleNamespacePromise({
					chunkGraph,
					block,
					module,
					request: this.request,
					strict: false, // TODO this should be inherited from the original module
					message: "import()",
					runtimeRequirements
				})};`,
				"if (module.hot) {",
				Template.indent([
					"module.hot.accept();",
					`module.hot.accept(${JSON.stringify(
						chunkGraph.getModuleId(module)
					)}, function() { module.hot.invalidate(); });`,
					"module.hot.dispose(function(data) { delete data.resolveSelf; dispose(data); });",
					"if (module.hot.data && module.hot.data.resolveSelf) module.hot.data.resolveSelf(module.exports);"
				]),
				"}",
				"function onError() { /* ignore */ }",
				keepActive
			]);
		} else {
			source = Template.asString([
				client,
				"var resolveSelf, onError;",
				"module.exports = new Promise(function(resolve, reject) { resolveSelf = resolve; onError = reject; });",
				"if (module.hot) {",
				Template.indent([
					"module.hot.accept();",
					"if (module.hot.data && module.hot.data.resolveSelf) module.hot.data.resolveSelf(module.exports);",
					"module.hot.dispose(function(data) { data.resolveSelf = resolveSelf; dispose(data); });"
				]),
				"}",
				keepActive
			]);
		}
		sources.set("javascript", new RawSource(source));
		return {
			sources,
			runtimeRequirements
		};
	}

	/**
	 * @param {Hash} hash the hash used to track dependencies
	 * @param {UpdateHashContext} context context
	 * @returns {void}
	 */
	updateHash(hash, context) {
		super.updateHash(hash, context);
		hash.update(this.active ? "active" : "");
		hash.update(JSON.stringify(this.data));
	}
}

registerNotSerializable(LazyCompilationProxyModule);

class LazyCompilationDependencyFactory extends ModuleFactory {
	constructor() {
		super();
	}

	/**
	 * @param {ModuleFactoryCreateData} data data object
	 * @param {function((Error | null)=, ModuleFactoryResult=): void} callback callback
	 * @returns {void}
	 */
	create(data, callback) {
		const dependency = /** @type {LazyCompilationDependency} */ (
			data.dependencies[0]
		);
		callback(null, {
			module: dependency.proxyModule.originalModule
		});
	}
}

/**
 * @callback BackendHandler
 * @param {Compiler} compiler compiler
 * @param {function(Error | null, BackendApi=): void} callback callback
 * @returns {void}
 */

/**
 * @callback PromiseBackendHandler
 * @param {Compiler} compiler compiler
 * @returns {Promise<BackendApi>} backend
 */

class LazyCompilationPlugin {
	/**
	 * @param {object} options options
	 * @param {BackendHandler | PromiseBackendHandler} options.backend the backend
	 * @param {boolean} options.entries true, when entries are lazy compiled
	 * @param {boolean} options.imports true, when import() modules are lazy compiled
	 * @param {RegExp | string | (function(Module): boolean) | undefined} options.test additional filter for lazy compiled entrypoint modules
	 */
	constructor({ backend, entries, imports, test }) {
		this.backend = backend;
		this.entries = entries;
		this.imports = imports;
		this.test = test;
	}

	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		/** @type {BackendApi} */
		let backend;
		compiler.hooks.beforeCompile.tapAsync(
			"LazyCompilationPlugin",
			(params, callback) => {
				if (backend !== undefined) return callback();
				const promise = this.backend(compiler, (err, result) => {
					if (err) return callback(err);
					backend = /** @type {BackendApi} */ (result);
					callback();
				});
				if (promise && promise.then) {
					promise.then(b => {
						backend = b;
						callback();
					}, callback);
				}
			}
		);
		compiler.hooks.thisCompilation.tap(
			"LazyCompilationPlugin",
			(compilation, { normalModuleFactory }) => {
				normalModuleFactory.hooks.module.tap(
					"LazyCompilationPlugin",
					(originalModule, createData, resolveData) => {
						if (
							resolveData.dependencies.every(dep =>
								HMR_DEPENDENCY_TYPES.has(dep.type)
							)
						) {
							// for HMR only resolving, try to determine if the HMR accept/decline refers to
							// an import() or not
							const hmrDep = resolveData.dependencies[0];
							const originModule =
								/** @type {Module} */
								(compilation.moduleGraph.getParentModule(hmrDep));
							const isReferringToDynamicImport = originModule.blocks.some(
								block =>
									block.dependencies.some(
										dep =>
											dep.type === "import()" &&
											/** @type {HarmonyImportDependency} */ (dep).request ===
												hmrDep.request
									)
							);
							if (!isReferringToDynamicImport) return;
						} else if (
							!resolveData.dependencies.every(
								dep =>
									HMR_DEPENDENCY_TYPES.has(dep.type) ||
									(this.imports &&
										(dep.type === "import()" ||
											dep.type === "import() context element")) ||
									(this.entries && dep.type === "entry")
							)
						)
							return;
						if (
							/webpack[/\\]hot[/\\]|webpack-dev-server[/\\]client|webpack-hot-middleware[/\\]client/.test(
								resolveData.request
							) ||
							!checkTest(this.test, originalModule)
						)
							return;
						const moduleInfo = backend.module(originalModule);
						if (!moduleInfo) return;
						const { client, data, active } = moduleInfo;

						return new LazyCompilationProxyModule(
							compiler.context,
							originalModule,
							resolveData.request,
							client,
							data,
							active
						);
					}
				);
				compilation.dependencyFactories.set(
					LazyCompilationDependency,
					new LazyCompilationDependencyFactory()
				);
			}
		);
		compiler.hooks.shutdown.tapAsync("LazyCompilationPlugin", callback => {
			backend.dispose(callback);
		});
	}
}

module.exports = LazyCompilationPlugin;
