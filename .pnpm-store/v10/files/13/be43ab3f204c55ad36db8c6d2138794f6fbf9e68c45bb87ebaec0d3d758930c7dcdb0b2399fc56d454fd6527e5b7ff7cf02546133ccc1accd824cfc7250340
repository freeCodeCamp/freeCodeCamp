/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Natsu @xiaoxiaojx
*/

"use strict";

const { getContext } = require("loader-runner");

const ModuleNotFoundError = require("../ModuleNotFoundError");
const NormalModule = require("../NormalModule");
const { isAbsolute, join } = require("../util/fs");
const { parseResourceWithoutFragment } = require("../util/identifier");

const DEFAULT_SCHEME = "virtual";

const PLUGIN_NAME = "VirtualUrlPlugin";

/**
 * Defines the compiler type used by this module.
 * @typedef {import("../Compiler")} Compiler
 * @typedef {import("../../declarations/plugins/schemes/VirtualUrlPlugin").VirtualModule} VirtualModuleConfig
 * @typedef {import("../../declarations/plugins/schemes/VirtualUrlPlugin").VirtualModuleContent} VirtualModuleInput
 * @typedef {import("../../declarations/plugins/schemes/VirtualUrlPlugin").VirtualUrlOptions} VirtualUrlOptions
 */

/** @typedef {(loaderContext: LoaderContext<EXPECTED_ANY>) => Promise<string | Buffer> | string | Buffer} SourceFn */
/** @typedef {() => string} VersionFn */
/** @typedef {{ [key: string]: VirtualModuleInput }} VirtualModules */

/**
 * Defines the loader context type used by this module.
 * @template T
 * @typedef {import("../../declarations/LoaderContext").LoaderContext<T>} LoaderContext
 */

/**
 * Normalizes a virtual module definition into a standard format
 * @param {VirtualModuleInput} virtualConfig The virtual module to normalize
 * @returns {VirtualModuleConfig} The normalized virtual module
 */
function normalizeModule(virtualConfig) {
	if (typeof virtualConfig === "string") {
		return {
			type: "",
			source() {
				return virtualConfig;
			}
		};
	} else if (typeof virtualConfig === "function") {
		return {
			type: "",
			source: virtualConfig
		};
	}
	return virtualConfig;
}

/** @typedef {{ [key: string]: VirtualModuleConfig }} NormalizedModules */

/**
 * Normalizes all virtual modules with the given scheme
 * @param {VirtualModules} virtualConfigs The virtual modules to normalize
 * @param {string} scheme The URL scheme to use
 * @returns {NormalizedModules} The normalized virtual modules
 */
function normalizeModules(virtualConfigs, scheme) {
	return Object.keys(virtualConfigs).reduce((pre, id) => {
		pre[toVid(id, scheme)] = normalizeModule(virtualConfigs[id]);
		return pre;
	}, /** @type {NormalizedModules} */ ({}));
}

/**
 * Converts a module id and scheme to a virtual module id
 * @param {string} id The module id
 * @param {string} scheme The URL scheme
 * @returns {string} The virtual module id
 */
function toVid(id, scheme) {
	return `${scheme}:${id}`;
}

/**
 * Converts a virtual module id to a module id
 * @param {string} vid The virtual module id
 * @param {string} scheme The URL scheme
 * @returns {string} The module id
 */
function fromVid(vid, scheme) {
	return vid.replace(`${scheme}:`, "");
}

const VALUE_DEP_VERSION = `webpack/${PLUGIN_NAME}/version`;

/**
 * Converts a module id and scheme to a cache key
 * @param {string} id The module id
 * @param {string} scheme The URL scheme
 * @returns {string} The cache key
 */
function toCacheKey(id, scheme) {
	return `${VALUE_DEP_VERSION}/${toVid(id, scheme)}`;
}

class VirtualUrlPlugin {
	/**
	 * Creates an instance of VirtualUrlPlugin.
	 * @param {VirtualModules} modules The virtual modules
	 * @param {Omit<VirtualUrlOptions, "modules"> | string=} schemeOrOptions The URL scheme to use
	 */
	constructor(modules, schemeOrOptions) {
		/** @type {VirtualUrlOptions} */
		this.options = {
			modules,
			...(typeof schemeOrOptions === "string"
				? { scheme: schemeOrOptions }
				: schemeOrOptions || {})
		};

		/** @type {string} */
		this.scheme = this.options.scheme || DEFAULT_SCHEME;
		/** @type {VirtualUrlOptions["context"]} */
		this.context = this.options.context || "auto";
		/** @type {NormalizedModules} */
		this.modules = normalizeModules(this.options.modules, this.scheme);
	}

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.validate.tap(PLUGIN_NAME, () => {
			compiler.validate(
				() => require("../../schemas/plugins/schemes/VirtualUrlPlugin.json"),
				this.options,
				{
					name: "Virtual Url Plugin",
					baseDataPath: "options"
				},
				(options) =>
					require("../../schemas/plugins/schemes/VirtualUrlPlugin.check")(
						options
					)
			);
		});

		const scheme = this.scheme;
		const cachedParseResourceWithoutFragment =
			parseResourceWithoutFragment.bindCache(compiler.root);

		compiler.hooks.compilation.tap(
			PLUGIN_NAME,
			(compilation, { normalModuleFactory }) => {
				compilation.hooks.assetPath.tap(
					{ name: PLUGIN_NAME, before: "TemplatedPathPlugin" },
					(path, data) => {
						if (data.filename && this.modules[data.filename]) {
							/**
							 * Returns safe path.
							 * @param {string} str path
							 * @returns {string} safe path
							 */
							const toSafePath = (str) =>
								`__${str
									.replace(/:/g, "__")
									.replace(/^[^a-z0-9]+|[^a-z0-9]+$/gi, "")
									.replace(/[^a-z0-9._-]+/gi, "_")}`;

							// filename: virtual:logo.svg -> __virtual__logo.svg
							data.filename = toSafePath(data.filename);
						}
						return path;
					}
				);

				normalModuleFactory.hooks.resolveForScheme
					.for(scheme)
					.tap(PLUGIN_NAME, (resourceData) => {
						const virtualConfig = this.findVirtualModuleConfigById(
							resourceData.resource
						);
						const url = cachedParseResourceWithoutFragment(
							resourceData.resource
						);
						const path = url.path;
						const type = virtualConfig.type || "";
						const context = virtualConfig.context || this.context;

						resourceData.path = path + type;
						resourceData.resource = path;

						if (context === "auto") {
							const context = getContext(path);
							if (context === path) {
								resourceData.context = compiler.context;
							} else {
								const resolvedContext = fromVid(context, scheme);
								resourceData.context = isAbsolute(resolvedContext)
									? resolvedContext
									: join(
											/** @type {import("..").InputFileSystem} */
											(compiler.inputFileSystem),
											compiler.context,
											resolvedContext
										);
							}
						} else if (context && typeof context === "string") {
							resourceData.context = context;
						} else {
							resourceData.context = compiler.context;
						}

						if (virtualConfig.version) {
							const cacheKey = toCacheKey(resourceData.resource, scheme);
							const cacheVersion = this.getCacheVersion(virtualConfig.version);
							compilation.valueCacheVersions.set(
								cacheKey,
								/** @type {string} */ (cacheVersion)
							);
						}

						return true;
					});

				const hooks = NormalModule.getCompilationHooks(compilation);
				hooks.readResource
					.for(scheme)
					.tapAsync(PLUGIN_NAME, async (loaderContext, callback) => {
						const { resourcePath } = loaderContext;
						const module = /** @type {NormalModule} */ (loaderContext._module);
						const cacheKey = toCacheKey(resourcePath, scheme);

						const addVersionValueDependency = () => {
							if (!module || !module.buildInfo) return;

							const buildInfo = module.buildInfo;
							if (!buildInfo.valueDependencies) {
								buildInfo.valueDependencies = new Map();
							}

							const cacheVersion = compilation.valueCacheVersions.get(cacheKey);
							if (compilation.valueCacheVersions.has(cacheKey)) {
								buildInfo.valueDependencies.set(
									cacheKey,
									/** @type {string} */ (cacheVersion)
								);
							}
						};

						try {
							const virtualConfig =
								this.findVirtualModuleConfigById(resourcePath);
							const content = await virtualConfig.source(loaderContext);
							addVersionValueDependency();
							callback(null, content);
						} catch (err) {
							callback(/** @type {Error} */ (err));
						}
					});
			}
		);
	}

	/**
	 * Finds virtual module config by id.
	 * @param {string} id The module id
	 * @returns {VirtualModuleConfig} The virtual module config
	 */
	findVirtualModuleConfigById(id) {
		const config = this.modules[id];
		if (!config) {
			throw new ModuleNotFoundError(
				null,
				new Error(`Can't resolve virtual module ${id}`),
				{
					name: `virtual module ${id}`
				}
			);
		}
		return config;
	}

	/**
	 * Get the cache version for a given version value
	 * @param {VersionFn | true | string} version The version value or function
	 * @returns {string | undefined} The cache version
	 */
	getCacheVersion(version) {
		return version === true
			? undefined
			: (typeof version === "function" ? version() : version) || "unset";
	}
}

VirtualUrlPlugin.DEFAULT_SCHEME = DEFAULT_SCHEME;

module.exports = VirtualUrlPlugin;
