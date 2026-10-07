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
const { resolveByProperty, cachedSetProperty } = require("./util/cleverMerge");

/** @typedef {import("../declarations/WebpackOptions").ExternalItemFunctionData} ExternalItemFunctionData */
/** @typedef {import("../declarations/WebpackOptions").Externals} Externals */
/** @typedef {import("./Compilation").DepConstructor} DepConstructor */
/** @typedef {import("./ExternalModule").DependencyMeta} DependencyMeta */
/** @typedef {import("./Module")} Module */
/** @typedef {import("./NormalModuleFactory")} NormalModuleFactory */

const UNSPECIFIED_EXTERNAL_TYPE_REGEXP = /^[a-z0-9-]+ /;
const EMPTY_RESOLVE_OPTIONS = {};

// TODO webpack 6 remove this
const callDeprecatedExternals = util.deprecate(
	/**
	 * @param {TODO} externalsFunction externals function
	 * @param {string} context context
	 * @param {string} request request
	 * @param {(err: Error | null | undefined, value: ExternalValue | undefined, ty: ExternalType | undefined) => void} cb cb
	 */
	(externalsFunction, context, request, cb) => {
		// eslint-disable-next-line no-useless-call
		externalsFunction.call(null, context, request, cb);
	},
	"The externals-function should be defined like ({context, request}, cb) => { ... }",
	"DEP_WEBPACK_EXTERNALS_FUNCTION_PARAMETERS"
);

const cache = new WeakMap();

/**
 * @template {object} T
 * @param {T} obj obj
 * @param {TODO} layer layer
 * @returns {Omit<T, "byLayer">} result
 */
const resolveLayer = (obj, layer) => {
	let map = cache.get(/** @type {object} */ (obj));
	if (map === undefined) {
		map = new Map();
		cache.set(/** @type {object} */ (obj), map);
	} else {
		const cacheEntry = map.get(layer);
		if (cacheEntry !== undefined) return cacheEntry;
	}
	const result = resolveByProperty(obj, "byLayer", layer);
	map.set(layer, result);
	return result;
};

/** @typedef {string | string[] | boolean | Record<string, string | string[]>} ExternalValue */
/** @typedef {string | undefined} ExternalType */

class ExternalModuleFactoryPlugin {
	/**
	 * @param {string | undefined} type default external type
	 * @param {Externals} externals externals config
	 */
	constructor(type, externals) {
		this.type = type;
		this.externals = externals;
	}

	/**
	 * @param {NormalModuleFactory} normalModuleFactory the normal module factory
	 * @returns {void}
	 */
	apply(normalModuleFactory) {
		const globalType = this.type;
		normalModuleFactory.hooks.factorize.tapAsync(
			"ExternalModuleFactoryPlugin",
			(data, callback) => {
				const context = data.context;
				const contextInfo = data.contextInfo;
				const dependency = data.dependencies[0];
				const dependencyType = data.dependencyType;

				/**
				 * @param {ExternalValue} value the external config
				 * @param {ExternalType | undefined} type type of external
				 * @param {function((Error | null)=, ExternalModule=): void} callback callback
				 * @returns {void}
				 */
				const handleExternal = (value, type, callback) => {
					if (value === false) {
						// Not externals, fallback to original factory
						return callback();
					}
					/** @type {string | string[] | Record<string, string|string[]>} */
					let externalConfig = value === true ? dependency.request : value;
					// When no explicit type is specified, extract it from the externalConfig
					if (type === undefined) {
						if (
							typeof externalConfig === "string" &&
							UNSPECIFIED_EXTERNAL_TYPE_REGEXP.test(externalConfig)
						) {
							const idx = externalConfig.indexOf(" ");
							type = externalConfig.slice(0, idx);
							externalConfig = externalConfig.slice(idx + 1);
						} else if (
							Array.isArray(externalConfig) &&
							externalConfig.length > 0 &&
							UNSPECIFIED_EXTERNAL_TYPE_REGEXP.test(externalConfig[0])
						) {
							const firstItem = externalConfig[0];
							const idx = firstItem.indexOf(" ");
							type = firstItem.slice(0, idx);
							externalConfig = [
								firstItem.slice(idx + 1),
								...externalConfig.slice(1)
							];
						}
					}

					const resolvedType = /** @type {string} */ (type || globalType);

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
							attributes: dependency.assertions,
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
				 * @param {Externals} externals externals config
				 * @param {function((Error | null)=, ExternalModule=): void} callback callback
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
						 * @param {Error | null | undefined} err err
						 * @param {ExternalValue=} value value
						 * @param {ExternalType=} type type
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
									getResolve: options => (context, request, callback) => {
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
												/** @type {TODO} */
												(callback)
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
							if (promise && promise.then) promise.then(r => cb(null, r), cb);
						}
						return;
					} else if (typeof externals === "object") {
						const resolvedExternals = resolveLayer(
							externals,
							contextInfo.issuerLayer
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
