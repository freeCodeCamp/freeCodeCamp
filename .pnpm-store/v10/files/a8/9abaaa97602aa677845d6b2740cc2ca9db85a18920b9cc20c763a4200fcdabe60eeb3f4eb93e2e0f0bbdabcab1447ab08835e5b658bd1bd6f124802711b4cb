/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const util = require("util");
const ExternalModule = require("./ExternalModule");
const ContextElementDependency = require("./dependencies/ContextElementDependency");
const CssImportDependency = require("./dependencies/CssImportDependency");
const CssUrlDependency = require("./dependencies/CssUrlDependency");
const HarmonyImportDependency = require("./dependencies/HarmonyImportDependency");
const ImportDependency = require("./dependencies/ImportDependency");
const { cachedSetProperty, resolveByProperty } = require("./util/cleverMerge");

/** @typedef {import("enhanced-resolve").ResolveContext} ResolveContext */
/** @typedef {import("../declarations/WebpackOptions").ResolveOptions} ResolveOptions */
/** @typedef {import("../declarations/WebpackOptions").ExternalsType} ExternalsType */
/** @typedef {import("../declarations/WebpackOptions").ExternalItem} ExternalItem */
/** @typedef {import("../declarations/WebpackOptions").ExternalItemValue} ExternalItemValue */
/** @typedef {import("../declarations/WebpackOptions").ExternalItemObjectKnown} ExternalItemObjectKnown */
/** @typedef {import("../declarations/WebpackOptions").ExternalItemObjectUnknown} ExternalItemObjectUnknown */
/** @typedef {import("../declarations/WebpackOptions").Externals} Externals */
/** @typedef {import("./Dependency")} Dependency */
/** @typedef {import("./ExternalModule").DependencyMeta} DependencyMeta */
/** @typedef {import("./ModuleFactory").IssuerLayer} IssuerLayer */
/** @typedef {import("./ModuleFactory").ModuleFactoryCreateDataContextInfo} ModuleFactoryCreateDataContextInfo */
/** @typedef {import("./NormalModuleFactory")} NormalModuleFactory */

/** @typedef {((context: string, request: string, callback: (err?: Error | null, result?: string | false, resolveRequest?: import("enhanced-resolve").ResolveRequest) => void) => void)} ExternalItemFunctionDataGetResolveCallbackResult */
/** @typedef {((context: string, request: string) => Promise<string>)} ExternalItemFunctionDataGetResolveResult */
/** @typedef {(options?: ResolveOptions) => ExternalItemFunctionDataGetResolveCallbackResult | ExternalItemFunctionDataGetResolveResult} ExternalItemFunctionDataGetResolve */

/**
 * Defines the external item function data type used by this module.
 * @typedef {object} ExternalItemFunctionData
 * @property {string} context the directory in which the request is placed
 * @property {ModuleFactoryCreateDataContextInfo} contextInfo contextual information
 * @property {string} dependencyType the category of the referencing dependency
 * @property {ExternalItemFunctionDataGetResolve} getResolve get a resolve function with the current resolver options
 * @property {string} request the request as written by the user in the require/import expression/statement
 */

/** @typedef {((data: ExternalItemFunctionData, callback: (err?: (Error | null), result?: ExternalItemValue) => void) => void)} ExternalItemFunctionCallback */
/** @typedef {((data: import("../lib/ExternalModuleFactoryPlugin").ExternalItemFunctionData) => Promise<ExternalItemValue>)} ExternalItemFunctionPromise */

const UNSPECIFIED_EXTERNAL_TYPE_REGEXP = /^[a-z0-9-]+ /;
const EMPTY_RESOLVE_OPTIONS = {};

// TODO webpack 6 remove this
const callDeprecatedExternals = util.deprecate(
	/**
	 * Handles the callback logic for this hook.
	 * @param {EXPECTED_FUNCTION} externalsFunction externals function
	 * @param {string} context context
	 * @param {string} request request
	 * @param {(err: Error | null | undefined, value: ExternalValue | undefined, ty: ExternalsType | undefined) => void} cb cb
	 */
	(externalsFunction, context, request, cb) => {
		// eslint-disable-next-line no-useless-call
		externalsFunction.call(null, context, request, cb);
	},
	"The externals-function should be defined like ({context, request}, cb) => { ... }",
	"DEP_WEBPACK_EXTERNALS_FUNCTION_PARAMETERS"
);

/** @typedef {(layer: string | null) => ExternalItem} ExternalItemByLayerFn */
/** @typedef {ExternalItemObjectKnown & ExternalItemObjectUnknown} ExternalItemObject */

/**
 * Defines the external weak cache type used by this module.
 * @template {ExternalItemObject} T
 * @typedef {WeakMap<T, Map<IssuerLayer, Omit<T, "byLayer">>>} ExternalWeakCache
 */

/** @type {ExternalWeakCache<ExternalItemObject>} */
const cache = new WeakMap();

/**
 * Returns result.
 * @param {ExternalItemObject} obj obj
 * @param {IssuerLayer} layer layer
 * @returns {Omit<ExternalItemObject, "byLayer">} result
 */
const resolveLayer = (obj, layer) => {
	let map = cache.get(obj);
	if (map === undefined) {
		map = new Map();
		cache.set(obj, map);
	} else {
		const cacheEntry = map.get(layer);
		if (cacheEntry !== undefined) return cacheEntry;
	}
	const result = resolveByProperty(obj, "byLayer", layer);
	map.set(layer, result);
	return result;
};

/** @typedef {string | string[] | boolean | Record<string, string | string[]>} ExternalValue */

const PLUGIN_NAME = "ExternalModuleFactoryPlugin";

class ExternalModuleFactoryPlugin {
	/**
	 * Creates an instance of ExternalModuleFactoryPlugin.
	 * @param {ExternalsType | ((dependency: Dependency) => ExternalsType)} type default external type
	 * @param {Externals} externals externals config
	 */
	constructor(type, externals) {
		this.type = type;
		this.externals = externals;
	}

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {NormalModuleFactory} normalModuleFactory the normal module factory
	 * @returns {void}
	 */
	apply(normalModuleFactory) {
		const globalType = this.type;
		normalModuleFactory.hooks.factorize.tapAsync(
			PLUGIN_NAME,
			(data, callback) => {
				const context = data.context;
				const contextInfo = data.contextInfo;
				const dependency = data.dependencies[0];
				const dependencyType = data.dependencyType;

				/** @typedef {(err?: Error | null, externalModule?: ExternalModule) => void} HandleExternalCallback */

				/**
				 * Processes the provided value.
				 * @param {ExternalValue} value the external config
				 * @param {ExternalsType | undefined} type type of external
				 * @param {HandleExternalCallback} callback callback
				 * @returns {void}
				 */
				const handleExternal = (value, type, callback) => {
					if (value === false) {
						// Not externals, fallback to original factory
						return callback();
					}
					/** @type {ExternalValue} */
					let externalConfig = value === true ? dependency.request : value;
					// When no explicit type is specified, extract it from the externalConfig
					if (type === undefined) {
						if (
							typeof externalConfig === "string" &&
							UNSPECIFIED_EXTERNAL_TYPE_REGEXP.test(externalConfig)
						) {
							const idx = externalConfig.indexOf(" ");
							type =
								/** @type {ExternalsType} */
								(externalConfig.slice(0, idx));
							externalConfig = externalConfig.slice(idx + 1);
						} else if (
							Array.isArray(externalConfig) &&
							externalConfig.length > 0 &&
							UNSPECIFIED_EXTERNAL_TYPE_REGEXP.test(externalConfig[0])
						) {
							const firstItem = externalConfig[0];
							const idx = firstItem.indexOf(" ");
							type = /** @type {ExternalsType} */ (firstItem.slice(0, idx));
							externalConfig = [
								firstItem.slice(idx + 1),
								...externalConfig.slice(1)
							];
						}
					}

					const defaultType =
						typeof globalType === "function"
							? globalType(dependency)
							: globalType;
					const resolvedType = type || defaultType;

					// TODO make it pluggable/add hooks to `ExternalModule` to allow output modules own externals?
					/** @type {DependencyMeta | undefined} */
					let dependencyMeta;

					if (
						dependency instanceof HarmonyImportDependency ||
						dependency instanceof ImportDependency ||
						dependency instanceof ContextElementDependency
					) {
						const externalType =
							dependency instanceof HarmonyImportDependency
								? "module"
								: dependency instanceof ImportDependency
									? "import"
									: undefined;

						dependencyMeta = {
							attributes: dependency.attributes,
							externalType
						};
					} else if (dependency instanceof CssImportDependency) {
						dependencyMeta = {
							layer: dependency.layer,
							supports: dependency.supports,
							media: dependency.media
						};
					}

					if (
						resolvedType === "asset" &&
						dependency instanceof CssUrlDependency
					) {
						dependencyMeta = { sourceType: "css-url" };
					}

					callback(
						null,
						new ExternalModule(
							externalConfig,
							resolvedType,
							dependency.request,
							dependencyMeta
						)
					);
				};

				/**
				 * Processes the provided external.
				 * @param {Externals} externals externals config
				 * @param {HandleExternalCallback} callback callback
				 * @returns {void}
				 */
				const handleExternals = (externals, callback) => {
					if (typeof externals === "string") {
						if (externals === dependency.request) {
							return handleExternal(dependency.request, undefined, callback);
						}
					} else if (Array.isArray(externals)) {
						let i = 0;
						const next = () => {
							/** @type {boolean | undefined} */
							let asyncFlag;
							/**
							 * Handle externals and callback.
							 * @param {(Error | null)=} err err
							 * @param {ExternalModule=} module module
							 * @returns {void}
							 */
							const handleExternalsAndCallback = (err, module) => {
								if (err) return callback(err);
								if (!module) {
									if (asyncFlag) {
										asyncFlag = false;
										return;
									}
									return next();
								}
								callback(null, module);
							};

							do {
								asyncFlag = true;
								if (i >= externals.length) return callback();
								handleExternals(externals[i++], handleExternalsAndCallback);
							} while (!asyncFlag);
							asyncFlag = false;
						};

						next();
						return;
					} else if (externals instanceof RegExp) {
						if (externals.test(dependency.request)) {
							return handleExternal(dependency.request, undefined, callback);
						}
					} else if (typeof externals === "function") {
						/**
						 * Processes the provided err.
						 * @param {Error | null | undefined} err err
						 * @param {ExternalValue=} value value
						 * @param {ExternalsType=} type type
						 * @returns {void}
						 */
						const cb = (err, value, type) => {
							if (err) return callback(err);
							if (value !== undefined) {
								handleExternal(value, type, callback);
							} else {
								callback();
							}
						};
						if (externals.length === 3) {
							// TODO webpack 6 remove this
							callDeprecatedExternals(
								externals,
								context,
								dependency.request,
								cb
							);
						} else {
							const promise = externals(
								{
									context,
									request: dependency.request,
									dependencyType,
									contextInfo,
									getResolve: (options) => (context, request, callback) => {
										/** @type {ResolveContext} */
										const resolveContext = {
											fileDependencies: data.fileDependencies,
											missingDependencies: data.missingDependencies,
											contextDependencies: data.contextDependencies
										};
										let resolver = normalModuleFactory.getResolver(
											"normal",
											dependencyType
												? cachedSetProperty(
														data.resolveOptions || EMPTY_RESOLVE_OPTIONS,
														"dependencyType",
														dependencyType
													)
												: data.resolveOptions
										);
										if (options) resolver = resolver.withOptions(options);
										if (callback) {
											resolver.resolve(
												{},
												context,
												request,
												resolveContext,
												callback
											);
										} else {
											return new Promise((resolve, reject) => {
												resolver.resolve(
													{},
													context,
													request,
													resolveContext,
													(err, result) => {
														if (err) reject(err);
														else resolve(result);
													}
												);
											});
										}
									}
								},
								cb
							);
							if (promise && promise.then) {
								promise.then((r) => cb(null, r), cb);
							}
						}
						return;
					} else if (typeof externals === "object") {
						const resolvedExternals = resolveLayer(
							externals,
							/** @type {IssuerLayer} */
							(contextInfo.issuerLayer)
						);
						if (
							Object.prototype.hasOwnProperty.call(
								resolvedExternals,
								dependency.request
							)
						) {
							return handleExternal(
								resolvedExternals[dependency.request],
								undefined,
								callback
							);
						}
					}
					callback();
				};

				handleExternals(this.externals, callback);
			}
		);
	}
}

module.exports = ExternalModuleFactoryPlugin;
