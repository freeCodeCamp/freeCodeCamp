/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { HookMap, SyncWaterfallHook, SyncBailHook } = require("tapable");

/** @typedef {import("./DefaultStatsFactoryPlugin").StatsAsset} StatsAsset */
/** @typedef {import("./DefaultStatsFactoryPlugin").StatsChunk} StatsChunk */
/** @typedef {import("./DefaultStatsFactoryPlugin").StatsChunkGroup} StatsChunkGroup */
/** @typedef {import("./DefaultStatsFactoryPlugin").StatsCompilation} StatsCompilation */
/** @typedef {import("./DefaultStatsFactoryPlugin").StatsError} StatsError */
/** @typedef {import("./DefaultStatsFactoryPlugin").StatsLogging} StatsLogging */
/** @typedef {import("./DefaultStatsFactoryPlugin").StatsModule} StatsModule */
/** @typedef {import("./DefaultStatsFactoryPlugin").StatsModuleIssuer} StatsModuleIssuer */
/** @typedef {import("./DefaultStatsFactoryPlugin").StatsModuleReason} StatsModuleReason */
/** @typedef {import("./DefaultStatsFactoryPlugin").StatsModuleTraceDependency} StatsModuleTraceDependency */
/** @typedef {import("./DefaultStatsFactoryPlugin").StatsModuleTraceItem} StatsModuleTraceItem */
/** @typedef {import("./DefaultStatsFactoryPlugin").StatsProfile} StatsProfile */

/**
 * @typedef {object} PrintedElement
 * @property {string} element
 * @property {string} content
 */

/**
 * @typedef {object} KnownStatsPrinterContext
 * @property {string=} type
 * @property {StatsCompilation=} compilation
 * @property {StatsChunkGroup=} chunkGroup
 * @property {string=} chunkGroupKind
 * @property {StatsAsset=} asset
 * @property {StatsModule=} module
 * @property {StatsChunk=} chunk
 * @property {StatsModuleReason=} moduleReason
 * @property {StatsModuleIssuer=} moduleIssuer
 * @property {StatsError=} error
 * @property {StatsProfile=} profile
 * @property {StatsLogging=} logging
 * @property {StatsModuleTraceItem=} moduleTraceItem
 * @property {StatsModuleTraceDependency=} moduleTraceDependency
 */

/**
 * @typedef {object} KnownStatsPrinterColorFn
 * @property {(str: string) => string=} bold
 * @property {(str: string) => string=} yellow
 * @property {(str: string) => string=} red
 * @property {(str: string) => string=} green
 * @property {(str: string) => string=} magenta
 * @property {(str: string) => string=} cyan
 */

/**
 * @typedef {object} KnownStatsPrinterFormaters
 * @property {(file: string, oversize?: boolean) => string=} formatFilename
 * @property {(id: string) => string=} formatModuleId
 * @property {(id: string, direction?: "parent"|"child"|"sibling") => string=} formatChunkId
 * @property {(size: number) => string=} formatSize
 * @property {(size: string) => string=} formatLayer
 * @property {(dateTime: number) => string=} formatDateTime
 * @property {(flag: string) => string=} formatFlag
 * @property {(time: number, boldQuantity?: boolean) => string=} formatTime
 * @property {(message: string) => string=} formatError
 */

/** @typedef {Record<string, EXPECTED_ANY> & KnownStatsPrinterColorFn & KnownStatsPrinterFormaters & KnownStatsPrinterContext} StatsPrinterContext */
/** @typedef {any} PrintObject */

/**
 * @typedef {object} StatsPrintHooks
 * @property {HookMap<SyncBailHook<[string[], StatsPrinterContext], void>>} sortElements
 * @property {HookMap<SyncBailHook<[PrintedElement[], StatsPrinterContext], string | void>>} printElements
 * @property {HookMap<SyncBailHook<[PrintObject[], StatsPrinterContext], boolean | void>>} sortItems
 * @property {HookMap<SyncBailHook<[PrintObject, StatsPrinterContext], string | void>>} getItemName
 * @property {HookMap<SyncBailHook<[string[], StatsPrinterContext], string | void>>} printItems
 * @property {HookMap<SyncBailHook<[PrintObject, StatsPrinterContext], string | void>>} print
 * @property {HookMap<SyncWaterfallHook<[string, StatsPrinterContext]>>} result
 */

class StatsPrinter {
	constructor() {
		/** @type {StatsPrintHooks} */
		this.hooks = Object.freeze({
			sortElements: new HookMap(
				() => new SyncBailHook(["elements", "context"])
			),
			printElements: new HookMap(
				() => new SyncBailHook(["printedElements", "context"])
			),
			sortItems: new HookMap(() => new SyncBailHook(["items", "context"])),
			getItemName: new HookMap(() => new SyncBailHook(["item", "context"])),
			printItems: new HookMap(
				() => new SyncBailHook(["printedItems", "context"])
			),
			print: new HookMap(() => new SyncBailHook(["object", "context"])),
			/** @type {HookMap<SyncWaterfallHook<[string, StatsPrinterContext]>>} */
			result: new HookMap(() => new SyncWaterfallHook(["result", "context"]))
		});
		/**
		 * @type {TODO}
		 */
		this._levelHookCache = new Map();
		this._inPrint = false;
	}

	/**
	 * get all level hooks
	 * @private
	 * @template {StatsPrintHooks[keyof StatsPrintHooks]} HM
	 * @template {HM extends HookMap<infer H> ? H : never} H
	 * @param {HM} hookMap hook map
	 * @param {string} type type
	 * @returns {H[]} hooks
	 */
	_getAllLevelHooks(hookMap, type) {
		let cache = this._levelHookCache.get(hookMap);
		if (cache === undefined) {
			cache = new Map();
			this._levelHookCache.set(hookMap, cache);
		}
		const cacheEntry = cache.get(type);
		if (cacheEntry !== undefined) {
			return cacheEntry;
		}
		/** @type {H[]} */
		const hooks = [];
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
	 * Run `fn` for each level
	 * @private
	 * @template {StatsPrintHooks[keyof StatsPrintHooks]} HM
	 * @template {HM extends HookMap<infer H> ? H : never} H
	 * @template {H extends import("tapable").Hook<any, infer R> ? R : never} R
	 * @param {HM} hookMap hook map
	 * @param {string} type type
	 * @param {function(H): R | void} fn fn
	 * @returns {R | void} hook
	 */
	_forEachLevel(hookMap, type, fn) {
		for (const hook of this._getAllLevelHooks(hookMap, type)) {
			const result = fn(/** @type {H} */ (hook));
			if (result !== undefined) return result;
		}
	}

	/**
	 * Run `fn` for each level
	 * @private
	 * @template {StatsPrintHooks[keyof StatsPrintHooks]} HM
	 * @template {HM extends HookMap<infer H> ? H : never} H
	 * @param {HM} hookMap hook map
	 * @param {string} type type
	 * @param {string} data data
	 * @param {function(H, string): string} fn fn
	 * @returns {string} result of `fn`
	 */
	_forEachLevelWaterfall(hookMap, type, data, fn) {
		for (const hook of this._getAllLevelHooks(hookMap, type)) {
			data = fn(/** @type {H} */ (hook), data);
		}
		return data;
	}

	/**
	 * @param {string} type The type
	 * @param {PrintObject} object Object to print
	 * @param {StatsPrinterContext=} baseContext The base context
	 * @returns {string} printed result
	 */
	print(type, object, baseContext) {
		if (this._inPrint) {
			return this._print(type, object, baseContext);
		}
		try {
			this._inPrint = true;
			return this._print(type, object, baseContext);
		} finally {
			this._levelHookCache.clear();
			this._inPrint = false;
		}
	}

	/**
	 * @private
	 * @param {string} type type
	 * @param {PrintObject} object object
	 * @param {StatsPrinterContext=} baseContext context
	 * @returns {string} printed result
	 */
	_print(type, object, baseContext) {
		/** @type {StatsPrinterContext} */
		const context = {
			...baseContext,
			type,
			[type]: object
		};

		let printResult = this._forEachLevel(this.hooks.print, type, hook =>
			hook.call(object, context)
		);
		if (printResult === undefined) {
			if (Array.isArray(object)) {
				const sortedItems = object.slice();
				this._forEachLevel(this.hooks.sortItems, type, h =>
					h.call(sortedItems, context)
				);
				const printedItems = sortedItems.map((item, i) => {
					/** @type {StatsPrinterContext} */
					const itemContext = {
						...context,
						_index: i
					};
					const itemName = this._forEachLevel(
						this.hooks.getItemName,
						`${type}[]`,
						h => h.call(item, itemContext)
					);
					if (itemName) itemContext[itemName] = item;
					return this.print(
						itemName ? `${type}[].${itemName}` : `${type}[]`,
						item,
						itemContext
					);
				});
				printResult = this._forEachLevel(this.hooks.printItems, type, h =>
					h.call(printedItems, context)
				);
				if (printResult === undefined) {
					const result = printedItems.filter(Boolean);
					if (result.length > 0) printResult = result.join("\n");
				}
			} else if (object !== null && typeof object === "object") {
				const elements = Object.keys(object).filter(
					key => object[key] !== undefined
				);
				this._forEachLevel(this.hooks.sortElements, type, h =>
					h.call(elements, context)
				);
				const printedElements = elements.map(element => {
					const content = this.print(`${type}.${element}`, object[element], {
						...context,
						_parent: object,
						_element: element,
						[element]: object[element]
					});
					return { element, content };
				});
				printResult = this._forEachLevel(this.hooks.printElements, type, h =>
					h.call(printedElements, context)
				);
				if (printResult === undefined) {
					const result = printedElements.map(e => e.content).filter(Boolean);
					if (result.length > 0) printResult = result.join("\n");
				}
			}
		}

		return this._forEachLevelWaterfall(
			this.hooks.result,
			type,
			/** @type {string} */ (printResult),
			(h, r) => h.call(r, context)
		);
	}
}
module.exports = StatsPrinter;
