/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { HookMap, SyncBailHook, SyncWaterfallHook } = require("tapable");
const { concatComparators, keepOriginalOrder } = require("../util/comparators");
const smartGrouping = require("../util/smartGrouping");

/** @typedef {import("../Chunk")} Chunk */
/** @typedef {import("../Compilation")} Compilation */
/** @typedef {import("../Compilation").NormalizedStatsOptions} NormalizedStatsOptions */
/** @typedef {import("../Module")} Module */
/** @typedef {import("../WebpackError")} WebpackError */
/** @typedef {import("../util/comparators").Comparator<any>} Comparator */
/** @typedef {import("../util/runtime").RuntimeSpec} RuntimeSpec */
/** @typedef {import("../util/smartGrouping").GroupConfig<any, object>} GroupConfig */

/**
 * @typedef {object} KnownStatsFactoryContext
 * @property {string} type
 * @property {function(string): string} makePathsRelative
 * @property {Compilation} compilation
 * @property {Set<Module>} rootModules
 * @property {Map<string,Chunk[]>} compilationFileToChunks
 * @property {Map<string,Chunk[]>} compilationAuxiliaryFileToChunks
 * @property {RuntimeSpec} runtime
 * @property {function(Compilation): WebpackError[]} cachedGetErrors
 * @property {function(Compilation): WebpackError[]} cachedGetWarnings
 */

/** @typedef {Record<string, any> & KnownStatsFactoryContext} StatsFactoryContext */

/** @typedef {any} CreatedObject */
/** @typedef {any} FactoryData */
/** @typedef {any} FactoryDataItem */
/** @typedef {any} Result */
/** @typedef {Record<string, any>} ObjectForExtract */

/**
 * @typedef {object} StatsFactoryHooks
 * @property {HookMap<SyncBailHook<[ObjectForExtract, FactoryData, StatsFactoryContext], void>>} extract
 * @property {HookMap<SyncBailHook<[FactoryDataItem, StatsFactoryContext, number, number], boolean | void>>} filter
 * @property {HookMap<SyncBailHook<[Comparator[], StatsFactoryContext], void>>} sort
 * @property {HookMap<SyncBailHook<[FactoryDataItem, StatsFactoryContext, number, number], boolean | void>>} filterSorted
 * @property {HookMap<SyncBailHook<[GroupConfig[], StatsFactoryContext], void>>} groupResults
 * @property {HookMap<SyncBailHook<[Comparator[], StatsFactoryContext], void>>} sortResults
 * @property {HookMap<SyncBailHook<[FactoryDataItem, StatsFactoryContext, number, number], boolean | void>>} filterResults
 * @property {HookMap<SyncBailHook<[FactoryDataItem[], StatsFactoryContext], Result | void>>} merge
 * @property {HookMap<SyncBailHook<[Result, StatsFactoryContext], Result>>} result
 * @property {HookMap<SyncBailHook<[FactoryDataItem, StatsFactoryContext], string | void>>} getItemName
 * @property {HookMap<SyncBailHook<[FactoryDataItem, StatsFactoryContext], StatsFactory | void>>} getItemFactory
 */

/**
 * @template T
 * @typedef {Map<string, T[]>} Caches
 */

class StatsFactory {
	constructor() {
		/** @type {StatsFactoryHooks} */
		this.hooks = Object.freeze({
			extract: new HookMap(
				() => new SyncBailHook(["object", "data", "context"])
			),
			filter: new HookMap(
				() => new SyncBailHook(["item", "context", "index", "unfilteredIndex"])
			),
			sort: new HookMap(() => new SyncBailHook(["comparators", "context"])),
			filterSorted: new HookMap(
				() => new SyncBailHook(["item", "context", "index", "unfilteredIndex"])
			),
			groupResults: new HookMap(
				() => new SyncBailHook(["groupConfigs", "context"])
			),
			sortResults: new HookMap(
				() => new SyncBailHook(["comparators", "context"])
			),
			filterResults: new HookMap(
				() => new SyncBailHook(["item", "context", "index", "unfilteredIndex"])
			),
			merge: new HookMap(() => new SyncBailHook(["items", "context"])),
			result: new HookMap(() => new SyncWaterfallHook(["result", "context"])),
			getItemName: new HookMap(() => new SyncBailHook(["item", "context"])),
			getItemFactory: new HookMap(() => new SyncBailHook(["item", "context"]))
		});
		const hooks = this.hooks;
		this._caches = /** @type {TODO} */ ({});
		for (const key of Object.keys(hooks)) {
			this._caches[/** @type {keyof StatsFactoryHooks} */ (key)] = new Map();
		}
		this._inCreate = false;
	}

	/**
	 * @template {StatsFactoryHooks[keyof StatsFactoryHooks]} HM
	 * @template {HM extends HookMap<infer H> ? H : never} H
	 * @param {HM} hookMap hook map
	 * @param {Caches<H>} cache cache
	 * @param {string} type type
	 * @returns {H[]} hooks
	 * @private
	 */
	_getAllLevelHooks(hookMap, cache, type) {
		const cacheEntry = cache.get(type);
		if (cacheEntry !== undefined) {
			return cacheEntry;
		}
		const hooks = /** @type {H[]} */ ([]);
		const typeParts = type.split(".");
		for (let i = 0; i < typeParts.length; i++) {
			const hook = /** @type {H} */ (hookMap.get(typeParts.slice(i).join(".")));
			if (hook) {
				hooks.push(hook);
			}
		}
		cache.set(type, hooks);
		return hooks;
	}

	/**
	 * @template {StatsFactoryHooks[keyof StatsFactoryHooks]} HM
	 * @template {HM extends HookMap<infer H> ? H : never} H
	 * @template {H extends import("tapable").Hook<any, infer R> ? R : never} R
	 * @param {HM} hookMap hook map
	 * @param {Caches<H>} cache cache
	 * @param {string} type type
	 * @param {function(H): R | void} fn fn
	 * @returns {R | void} hook
	 * @private
	 */
	_forEachLevel(hookMap, cache, type, fn) {
		for (const hook of this._getAllLevelHooks(hookMap, cache, type)) {
			const result = fn(/** @type {H} */ (hook));
			if (result !== undefined) return result;
		}
	}

	/**
	 * @template {StatsFactoryHooks[keyof StatsFactoryHooks]} HM
	 * @template {HM extends HookMap<infer H> ? H : never} H
	 * @param {HM} hookMap hook map
	 * @param {Caches<H>} cache cache
	 * @param {string} type type
	 * @param {FactoryData} data data
	 * @param {function(H, FactoryData): FactoryData} fn fn
	 * @returns {FactoryData} data
	 * @private
	 */
	_forEachLevelWaterfall(hookMap, cache, type, data, fn) {
		for (const hook of this._getAllLevelHooks(hookMap, cache, type)) {
			data = fn(/** @type {H} */ (hook), data);
		}
		return data;
	}

	/**
	 * @template {StatsFactoryHooks[keyof StatsFactoryHooks]} T
	 * @template {T extends HookMap<infer H> ? H : never} H
	 * @template {H extends import("tapable").Hook<any, infer R> ? R : never} R
	 * @param {T} hookMap hook map
	 * @param {Caches<H>} cache cache
	 * @param {string} type type
	 * @param {Array<FactoryData>} items items
	 * @param {function(H, R, number, number): R | undefined} fn fn
	 * @param {boolean} forceClone force clone
	 * @returns {R[]} result for each level
	 * @private
	 */
	_forEachLevelFilter(hookMap, cache, type, items, fn, forceClone) {
		const hooks = this._getAllLevelHooks(hookMap, cache, type);
		if (hooks.length === 0) return forceClone ? items.slice() : items;
		let i = 0;
		return items.filter((item, idx) => {
			for (const hook of hooks) {
				const r = fn(/** @type {H} */ (hook), item, idx, i);
				if (r !== undefined) {
					if (r) i++;
					return r;
				}
			}
			i++;
			return true;
		});
	}

	/**
	 * @param {string} type type
	 * @param {FactoryData} data factory data
	 * @param {Omit<StatsFactoryContext, "type">} baseContext context used as base
	 * @returns {CreatedObject} created object
	 */
	create(type, data, baseContext) {
		if (this._inCreate) {
			return this._create(type, data, baseContext);
		}
		try {
			this._inCreate = true;
			return this._create(type, data, baseContext);
		} finally {
			for (const key of Object.keys(this._caches))
				this._caches[/** @type {keyof StatsFactoryHooks} */ (key)].clear();
			this._inCreate = false;
		}
	}

	/**
	 * @param {string} type type
	 * @param {FactoryData} data factory data
	 * @param {Omit<StatsFactoryContext, "type">} baseContext context used as base
	 * @returns {CreatedObject} created object
	 * @private
	 */
	_create(type, data, baseContext) {
		const context = /** @type {StatsFactoryContext} */ ({
			...baseContext,
			type,
			[type]: data
		});
		if (Array.isArray(data)) {
			// run filter on unsorted items
			const items = this._forEachLevelFilter(
				this.hooks.filter,
				this._caches.filter,
				type,
				data,
				(h, r, idx, i) => h.call(r, context, idx, i),
				true
			);

			// sort items
			/** @type {Comparator[]} */
			const comparators = [];
			this._forEachLevel(this.hooks.sort, this._caches.sort, type, h =>
				h.call(comparators, context)
			);
			if (comparators.length > 0) {
				items.sort(
					// @ts-expect-error number of arguments is correct
					concatComparators(...comparators, keepOriginalOrder(items))
				);
			}

			// run filter on sorted items
			const items2 = this._forEachLevelFilter(
				this.hooks.filterSorted,
				this._caches.filterSorted,
				type,
				items,
				(h, r, idx, i) => h.call(r, context, idx, i),
				false
			);

			// for each item
			let resultItems = items2.map((item, i) => {
				/** @type {StatsFactoryContext} */
				const itemContext = {
					...context,
					_index: i
				};

				// run getItemName
				const itemName = this._forEachLevel(
					this.hooks.getItemName,
					this._caches.getItemName,
					`${type}[]`,
					h => h.call(item, itemContext)
				);
				if (itemName) itemContext[itemName] = item;
				const innerType = itemName ? `${type}[].${itemName}` : `${type}[]`;

				// run getItemFactory
				const itemFactory =
					this._forEachLevel(
						this.hooks.getItemFactory,
						this._caches.getItemFactory,
						innerType,
						h => h.call(item, itemContext)
					) || this;

				// run item factory
				return itemFactory.create(innerType, item, itemContext);
			});

			// sort result items
			/** @type {Comparator[]} */
			const comparators2 = [];
			this._forEachLevel(
				this.hooks.sortResults,
				this._caches.sortResults,
				type,
				h => h.call(comparators2, context)
			);
			if (comparators2.length > 0) {
				resultItems.sort(
					// @ts-expect-error number of arguments is correct
					concatComparators(...comparators2, keepOriginalOrder(resultItems))
				);
			}

			// group result items
			/** @type {GroupConfig[]} */
			const groupConfigs = [];
			this._forEachLevel(
				this.hooks.groupResults,
				this._caches.groupResults,
				type,
				h => h.call(groupConfigs, context)
			);
			if (groupConfigs.length > 0) {
				resultItems = smartGrouping(resultItems, groupConfigs);
			}

			// run filter on sorted result items
			const finalResultItems = this._forEachLevelFilter(
				this.hooks.filterResults,
				this._caches.filterResults,
				type,
				resultItems,
				(h, r, idx, i) => h.call(r, context, idx, i),
				false
			);

			// run merge on mapped items
			let result = this._forEachLevel(
				this.hooks.merge,
				this._caches.merge,
				type,
				h => h.call(finalResultItems, context)
			);
			if (result === undefined) result = finalResultItems;

			// run result on merged items
			return this._forEachLevelWaterfall(
				this.hooks.result,
				this._caches.result,
				type,
				result,
				(h, r) => h.call(r, context)
			);
		}
		/** @type {ObjectForExtract} */
		const object = {};

		// run extract on value
		this._forEachLevel(this.hooks.extract, this._caches.extract, type, h =>
			h.call(object, data, context)
		);

		// run result on extracted object
		return this._forEachLevelWaterfall(
			this.hooks.result,
			this._caches.result,
			type,
			object,
			(h, r) => h.call(r, context)
		);
	}
}
module.exports = StatsFactory;
