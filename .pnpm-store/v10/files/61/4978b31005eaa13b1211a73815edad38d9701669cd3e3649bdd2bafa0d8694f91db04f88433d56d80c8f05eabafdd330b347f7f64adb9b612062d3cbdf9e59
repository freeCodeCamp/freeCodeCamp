/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const Factory = require("enhanced-resolve").ResolverFactory;
const { HookMap, SyncHook, SyncWaterfallHook } = require("tapable");
const {
	cachedCleverMerge,
	removeOperations,
	resolveByProperty
} = require("./util/cleverMerge");

/** @typedef {import("enhanced-resolve").ResolveContext} ResolveContext */
/** @typedef {import("enhanced-resolve").ResolveOptions} ResolveOptions */
/** @typedef {import("enhanced-resolve").ResolveRequest} ResolveRequest */
/** @typedef {import("enhanced-resolve").Resolver} Resolver */
/** @typedef {import("../declarations/WebpackOptions").ResolveOptions} WebpackResolveOptions */
/** @typedef {import("../declarations/WebpackOptions").ResolvePluginInstance} ResolvePluginInstance */

/** @typedef {WebpackResolveOptions & {dependencyType?: string, resolveToContext?: boolean }} ResolveOptionsWithDependencyType */
/**
 * @typedef {object} WithOptions
 * @property {function(Partial<ResolveOptionsWithDependencyType>): ResolverWithOptions} withOptions create a resolver with additional/different options
 */

/** @typedef {Resolver & WithOptions} ResolverWithOptions */

// need to be hoisted on module level for caching identity
const EMPTY_RESOLVE_OPTIONS = {};

/**
 * @param {ResolveOptionsWithDependencyType} resolveOptionsWithDepType enhanced options
 * @returns {ResolveOptions} merged options
 */
const convertToResolveOptions = resolveOptionsWithDepType => {
	const { dependencyType, plugins, ...remaining } = resolveOptionsWithDepType;

	// check type compat
	/** @type {Partial<ResolveOptions>} */
	const partialOptions = {
		...remaining,
		plugins:
			plugins &&
			/** @type {ResolvePluginInstance[]} */ (
				plugins.filter(item => item !== "...")
			)
	};

	if (!partialOptions.fileSystem) {
		throw new Error(
			"fileSystem is missing in resolveOptions, but it's required for enhanced-resolve"
		);
	}
	// These weird types validate that we checked all non-optional properties
	const options =
		/** @type {Partial<ResolveOptions> & Pick<ResolveOptions, "fileSystem">} */ (
			partialOptions
		);

	return removeOperations(
		resolveByProperty(options, "byDependency", dependencyType),
		// Keep the `unsafeCache` because it can be a `Proxy`
		["unsafeCache"]
	);
};

/**
 * @typedef {object} ResolverCache
 * @property {WeakMap<object, ResolverWithOptions>} direct
 * @property {Map<string, ResolverWithOptions>} stringified
 */

module.exports = class ResolverFactory {
	constructor() {
		this.hooks = Object.freeze({
			/** @type {HookMap<SyncWaterfallHook<[ResolveOptionsWithDependencyType]>>} */
			resolveOptions: new HookMap(
				() => new SyncWaterfallHook(["resolveOptions"])
			),
			/** @type {HookMap<SyncHook<[Resolver, ResolveOptions, ResolveOptionsWithDependencyType]>>} */
			resolver: new HookMap(
				() => new SyncHook(["resolver", "resolveOptions", "userResolveOptions"])
			)
		});
		/** @type {Map<string, ResolverCache>} */
		this.cache = new Map();
	}

	/**
	 * @param {string} type type of resolver
	 * @param {ResolveOptionsWithDependencyType=} resolveOptions options
	 * @returns {ResolverWithOptions} the resolver
	 */
	get(type, resolveOptions = EMPTY_RESOLVE_OPTIONS) {
		let typedCaches = this.cache.get(type);
		if (!typedCaches) {
			typedCaches = {
				direct: new WeakMap(),
				stringified: new Map()
			};
			this.cache.set(type, typedCaches);
		}
		const cachedResolver = typedCaches.direct.get(resolveOptions);
		if (cachedResolver) {
			return cachedResolver;
		}
		const ident = JSON.stringify(resolveOptions);
		const resolver = typedCaches.stringified.get(ident);
		if (resolver) {
			typedCaches.direct.set(resolveOptions, resolver);
			return resolver;
		}
		const newResolver = this._create(type, resolveOptions);
		typedCaches.direct.set(resolveOptions, newResolver);
		typedCaches.stringified.set(ident, newResolver);
		return newResolver;
	}

	/**
	 * @param {string} type type of resolver
	 * @param {ResolveOptionsWithDependencyType} resolveOptionsWithDepType options
	 * @returns {ResolverWithOptions} the resolver
	 */
	_create(type, resolveOptionsWithDepType) {
		/** @type {ResolveOptionsWithDependencyType} */
		const originalResolveOptions = { ...resolveOptionsWithDepType };

		const resolveOptions = convertToResolveOptions(
			this.hooks.resolveOptions.for(type).call(resolveOptionsWithDepType)
		);
		const resolver = /** @type {ResolverWithOptions} */ (
			Factory.createResolver(resolveOptions)
		);
		if (!resolver) {
			throw new Error("No resolver created");
		}
		/** @type {WeakMap<Partial<ResolveOptionsWithDependencyType>, ResolverWithOptions>} */
		const childCache = new WeakMap();
		resolver.withOptions = options => {
			const cacheEntry = childCache.get(options);
			if (cacheEntry !== undefined) return cacheEntry;
			const mergedOptions = cachedCleverMerge(originalResolveOptions, options);
			const resolver = this.get(type, mergedOptions);
			childCache.set(options, resolver);
			return resolver;
		};
		this.hooks.resolver
			.for(type)
			.call(resolver, resolveOptions, originalResolveOptions);
		return resolver;
	}
};
