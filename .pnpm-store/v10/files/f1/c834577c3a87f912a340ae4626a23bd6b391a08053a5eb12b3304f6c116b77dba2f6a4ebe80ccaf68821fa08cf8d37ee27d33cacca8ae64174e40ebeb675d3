/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const LazySet = require("../util/LazySet");
const makeSerializable = require("../util/makeSerializable");

/** @typedef {import("enhanced-resolve").ResolveContext} ResolveContext */
/** @typedef {import("enhanced-resolve").ResolveOptions} ResolveOptions */
/** @typedef {import("enhanced-resolve").ResolveRequest} ResolveRequest */
/** @typedef {import("enhanced-resolve").Resolver} Resolver */
/** @typedef {import("../CacheFacade").ItemCacheFacade} ItemCacheFacade */
/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("../FileSystemInfo")} FileSystemInfo */
/** @typedef {import("../FileSystemInfo").Snapshot} Snapshot */
/** @typedef {import("../FileSystemInfo").SnapshotOptions} SnapshotOptions */
/** @typedef {import("../ResolverFactory").ResolveOptionsWithDependencyType} ResolveOptionsWithDependencyType */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */

/**
 * @template T
 * @typedef {import("tapable").SyncHook<T>} SyncHook
 */

class CacheEntry {
	/**
	 * @param {ResolveRequest} result result
	 * @param {Snapshot} snapshot snapshot
	 */
	constructor(result, snapshot) {
		this.result = result;
		this.snapshot = snapshot;
	}

	/**
	 * @param {ObjectSerializerContext} context context
	 */
	serialize({ write }) {
		write(this.result);
		write(this.snapshot);
	}

	/**
	 * @param {ObjectDeserializerContext} context context
	 */
	deserialize({ read }) {
		this.result = read();
		this.snapshot = read();
	}
}

makeSerializable(CacheEntry, "webpack/lib/cache/ResolverCachePlugin");

/**
 * @template T
 * @param {Set<T> | LazySet<T>} set set to add items to
 * @param {Set<T> | LazySet<T> | Iterable<T>} otherSet set to add items from
 * @returns {void}
 */
const addAllToSet = (set, otherSet) => {
	if (set instanceof LazySet) {
		set.addAll(otherSet);
	} else {
		for (const item of otherSet) {
			set.add(item);
		}
	}
};

/**
 * @template {object} T
 * @param {T} object an object
 * @param {boolean} excludeContext if true, context is not included in string
 * @returns {string} stringified version
 */
const objectToString = (object, excludeContext) => {
	let str = "";
	for (const key in object) {
		if (excludeContext && key === "context") continue;
		const value = object[key];
		str +=
			typeof value === "object" && value !== null
				? `|${key}=[${objectToString(value, false)}|]`
				: `|${key}=|${value}`;
	}
	return str;
};

class ResolverCachePlugin {
	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		const cache = compiler.getCache("ResolverCachePlugin");
		/** @type {FileSystemInfo} */
		let fileSystemInfo;
		/** @type {SnapshotOptions | undefined} */
		let snapshotOptions;
		let realResolves = 0;
		let cachedResolves = 0;
		let cacheInvalidResolves = 0;
		let concurrentResolves = 0;
		compiler.hooks.thisCompilation.tap("ResolverCachePlugin", compilation => {
			snapshotOptions = compilation.options.snapshot.resolve;
			fileSystemInfo = compilation.fileSystemInfo;
			compilation.hooks.finishModules.tap("ResolverCachePlugin", () => {
				if (realResolves + cachedResolves > 0) {
					const logger = compilation.getLogger("webpack.ResolverCachePlugin");
					logger.log(
						`${Math.round(
							(100 * realResolves) / (realResolves + cachedResolves)
						)}% really resolved (${realResolves} real resolves with ${cacheInvalidResolves} cached but invalid, ${cachedResolves} cached valid, ${concurrentResolves} concurrent)`
					);
					realResolves = 0;
					cachedResolves = 0;
					cacheInvalidResolves = 0;
					concurrentResolves = 0;
				}
			});
		});

		/** @typedef {function((Error | null)=, ResolveRequest=): void} Callback */
		/** @typedef {ResolveRequest & { _ResolverCachePluginCacheMiss: true }} ResolveRequestWithCacheMiss */

		/**
		 * @param {ItemCacheFacade} itemCache cache
		 * @param {Resolver} resolver the resolver
		 * @param {ResolveContext} resolveContext context for resolving meta info
		 * @param {ResolveRequest} request the request info object
		 * @param {Callback} callback callback function
		 * @returns {void}
		 */
		const doRealResolve = (
			itemCache,
			resolver,
			resolveContext,
			request,
			callback
		) => {
			realResolves++;
			const newRequest =
				/** @type {ResolveRequestWithCacheMiss} */
				({
					_ResolverCachePluginCacheMiss: true,
					...request
				});
			/** @type {ResolveContext} */
			const newResolveContext = {
				...resolveContext,
				stack: new Set(),
				/** @type {LazySet<string>} */
				missingDependencies: new LazySet(),
				/** @type {LazySet<string>} */
				fileDependencies: new LazySet(),
				/** @type {LazySet<string>} */
				contextDependencies: new LazySet()
			};
			/** @type {ResolveRequest[] | undefined} */
			let yieldResult;
			let withYield = false;
			if (typeof newResolveContext.yield === "function") {
				yieldResult = [];
				withYield = true;
				newResolveContext.yield = obj =>
					/** @type {ResolveRequest[]} */
					(yieldResult).push(obj);
			}
			/**
			 * @param {"fileDependencies" | "contextDependencies" | "missingDependencies"} key key
			 */
			const propagate = key => {
				if (resolveContext[key]) {
					addAllToSet(
						/** @type {Set<string>} */ (resolveContext[key]),
						/** @type {Set<string>} */ (newResolveContext[key])
					);
				}
			};
			const resolveTime = Date.now();
			resolver.doResolve(
				resolver.hooks.resolve,
				newRequest,
				"Cache miss",
				newResolveContext,
				(err, result) => {
					propagate("fileDependencies");
					propagate("contextDependencies");
					propagate("missingDependencies");
					if (err) return callback(err);
					const fileDependencies = newResolveContext.fileDependencies;
					const contextDependencies = newResolveContext.contextDependencies;
					const missingDependencies = newResolveContext.missingDependencies;
					fileSystemInfo.createSnapshot(
						resolveTime,
						/** @type {Set<string>} */
						(fileDependencies),
						/** @type {Set<string>} */
						(contextDependencies),
						/** @type {Set<string>} */
						(missingDependencies),
						snapshotOptions,
						(err, snapshot) => {
							if (err) return callback(err);
							const resolveResult = withYield ? yieldResult : result;
							// since we intercept resolve hook
							// we still can get result in callback
							if (withYield && result)
								/** @type {ResolveRequest[]} */ (yieldResult).push(result);
							if (!snapshot) {
								if (resolveResult)
									return callback(
										null,
										/** @type {ResolveRequest} */
										(resolveResult)
									);
								return callback();
							}
							itemCache.store(
								new CacheEntry(
									/** @type {ResolveRequest} */
									(resolveResult),
									snapshot
								),
								storeErr => {
									if (storeErr) return callback(storeErr);
									if (resolveResult)
										return callback(
											null,
											/** @type {ResolveRequest} */
											(resolveResult)
										);
									callback();
								}
							);
						}
					);
				}
			);
		};
		compiler.resolverFactory.hooks.resolver.intercept({
			factory(type, hook) {
				/** @type {Map<string, (function(Error=, ResolveRequest=): void)[]>} */
				const activeRequests = new Map();
				/** @type {Map<string, [function(Error=, ResolveRequest=): void, NonNullable<ResolveContext["yield"]>][]>} */
				const activeRequestsWithYield = new Map();
				/** @type {SyncHook<[Resolver, ResolveOptions, ResolveOptionsWithDependencyType]>} */
				(hook).tap("ResolverCachePlugin", (resolver, options, userOptions) => {
					if (/** @type {TODO} */ (options).cache !== true) return;
					const optionsIdent = objectToString(userOptions, false);
					const cacheWithContext =
						options.cacheWithContext !== undefined
							? options.cacheWithContext
							: false;
					resolver.hooks.resolve.tapAsync(
						{
							name: "ResolverCachePlugin",
							stage: -100
						},
						(request, resolveContext, callback) => {
							if (
								/** @type {ResolveRequestWithCacheMiss} */
								(request)._ResolverCachePluginCacheMiss ||
								!fileSystemInfo
							) {
								return callback();
							}
							const withYield = typeof resolveContext.yield === "function";
							const identifier = `${type}${
								withYield ? "|yield" : "|default"
							}${optionsIdent}${objectToString(request, !cacheWithContext)}`;

							if (withYield) {
								const activeRequest = activeRequestsWithYield.get(identifier);
								if (activeRequest) {
									activeRequest[0].push(callback);
									activeRequest[1].push(
										/** @type {NonNullable<ResolveContext["yield"]>} */
										(resolveContext.yield)
									);
									return;
								}
							} else {
								const activeRequest = activeRequests.get(identifier);
								if (activeRequest) {
									activeRequest.push(callback);
									return;
								}
							}
							const itemCache = cache.getItemCache(identifier, null);
							/** @type {Callback[] | false | undefined} */
							let callbacks;
							/** @type {NonNullable<ResolveContext["yield"]>[] | undefined} */
							let yields;

							/**
							 * @type {function((Error | null)=, ResolveRequest | ResolveRequest[]=): void}
							 */
							const done = withYield
								? (err, result) => {
										if (callbacks === undefined) {
											if (err) {
												callback(err);
											} else {
												if (result)
													for (const r of /** @type {ResolveRequest[]} */ (
														result
													)) {
														/** @type {NonNullable<ResolveContext["yield"]>} */
														(resolveContext.yield)(r);
													}
												callback(null, null);
											}
											yields = undefined;
											callbacks = false;
										} else {
											const definedCallbacks =
												/** @type {Callback[]} */
												(callbacks);

											if (err) {
												for (const cb of definedCallbacks) cb(err);
											} else {
												for (let i = 0; i < definedCallbacks.length; i++) {
													const cb = definedCallbacks[i];
													const yield_ =
														/** @type {NonNullable<ResolveContext["yield"]>[]} */
														(yields)[i];
													if (result)
														for (const r of /** @type {ResolveRequest[]} */ (
															result
														))
															yield_(r);
													cb(null, null);
												}
											}
											activeRequestsWithYield.delete(identifier);
											yields = undefined;
											callbacks = false;
										}
									}
								: (err, result) => {
										if (callbacks === undefined) {
											callback(err, /** @type {ResolveRequest} */ (result));
											callbacks = false;
										} else {
											for (const callback of /** @type {Callback[]} */ (
												callbacks
											)) {
												callback(err, /** @type {ResolveRequest} */ (result));
											}
											activeRequests.delete(identifier);
											callbacks = false;
										}
									};
							/**
							 * @param {(Error | null)=} err error if any
							 * @param {(CacheEntry | null)=} cacheEntry cache entry
							 * @returns {void}
							 */
							const processCacheResult = (err, cacheEntry) => {
								if (err) return done(err);

								if (cacheEntry) {
									const { snapshot, result } = cacheEntry;
									fileSystemInfo.checkSnapshotValid(snapshot, (err, valid) => {
										if (err || !valid) {
											cacheInvalidResolves++;
											return doRealResolve(
												itemCache,
												resolver,
												resolveContext,
												request,
												done
											);
										}
										cachedResolves++;
										if (resolveContext.missingDependencies) {
											addAllToSet(
												/** @type {Set<string>} */
												(resolveContext.missingDependencies),
												snapshot.getMissingIterable()
											);
										}
										if (resolveContext.fileDependencies) {
											addAllToSet(
												/** @type {Set<string>} */
												(resolveContext.fileDependencies),
												snapshot.getFileIterable()
											);
										}
										if (resolveContext.contextDependencies) {
											addAllToSet(
												/** @type {Set<string>} */
												(resolveContext.contextDependencies),
												snapshot.getContextIterable()
											);
										}
										done(null, result);
									});
								} else {
									doRealResolve(
										itemCache,
										resolver,
										resolveContext,
										request,
										done
									);
								}
							};
							itemCache.get(processCacheResult);
							if (withYield && callbacks === undefined) {
								callbacks = [callback];
								yields = [
									/** @type {NonNullable<ResolveContext["yield"]>} */
									(resolveContext.yield)
								];
								activeRequestsWithYield.set(
									identifier,
									/** @type {[any, any]} */ ([callbacks, yields])
								);
							} else if (callbacks === undefined) {
								callbacks = [callback];
								activeRequests.set(identifier, callbacks);
							}
						}
					);
				});
				return hook;
			}
		});
	}
}

module.exports = ResolverCachePlugin;
