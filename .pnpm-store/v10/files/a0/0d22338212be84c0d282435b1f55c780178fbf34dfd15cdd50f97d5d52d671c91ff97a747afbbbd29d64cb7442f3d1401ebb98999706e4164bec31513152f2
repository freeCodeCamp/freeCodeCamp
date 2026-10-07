/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { HookMap, SyncBailHook, SyncWaterfallHook } = require("tapable");

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
 * Defines the printed element type used by this module.
 * @typedef {object} PrintedElement
 * @property {string} element
 * @property {string | undefined} content
 */

/**
 * Defines the known stats printer context type used by this module.
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

/** @typedef {(value: string | number) => string} ColorFunction */

/**
 * Defines the known stats printer color functions type used by this module.
 * @typedef {object} KnownStatsPrinterColorFunctions
 * @property {ColorFunction=} bold
 * @property {ColorFunction=} yellow
 * @property {ColorFunction=} red
 * @property {ColorFunction=} green
 * @property {ColorFunction=} magenta
 * @property {ColorFunction=} cyan
 */

/**
 * Defines the known stats printer formatters type used by this module.
 * @typedef {object} KnownStatsPrinterFormatters
 * @property {(file: string, oversize?: boolean) => string=} formatFilename
 * @property {(id: string | number) => string=} formatModuleId
 * @property {(id: string | number, direction?: "parent" | "child" | "sibling") => string=} formatChunkId
 * @property {(size: number) => string=} formatSize
 * @property {(size: string) => string=} formatLayer
 * @property {(dateTime: number) => string=} formatDateTime
 * @property {(flag: string) => string=} formatFlag
 * @property {(time: number, boldQuantity?: boolean) => string=} formatTime
 * @property {(message: string) => string=} formatError
 */

/** @typedef {KnownStatsPrinterColorFunctions & KnownStatsPrinterFormatters & KnownStatsPrinterContext & Record<string, EXPECTED_ANY>} StatsPrinterContext */
/** @typedef {StatsPrinterContext & Required<KnownStatsPrinterColorFunctions> & Required<KnownStatsPrinterFormatters> & { type: string }} StatsPrinterContextWithExtra */
/** @typedef {EXPECTED_ANY} PrintObject */

/**
 * Represents the stats printer runtime component.
 * @typedef {object} StatsPrintHooks
 * @property {HookMap<SyncBailHook<[string[], StatsPrinterContext], void>>} sortElements
 * @property {HookMap<SyncBailHook<[PrintedElement[], StatsPrinterContext], string | undefined | void>>} printElements
 * @property {HookMap<SyncBailHook<[PrintObject[], StatsPrinterContext], boolean | void>>} sortItems
 * @property {HookMap<SyncBailHook<[PrintObject, StatsPrinterContext], string | void>>} getItemName
 * @property {HookMap<SyncBailHook<[string[], StatsPrinterContext], string | undefined>>} printItems
 * @property {HookMap<SyncBailHook<[PrintObject, StatsPrinterContext], string | undefined | void>>} print
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
			result: new HookMap(() => new SyncWaterfallHook(["result", "context"]))
		});
		/** @type {Map<StatsPrintHooks[keyof StatsPrintHooks], Map<string, import("tapable").Hook<EXPECTED_ANY, EXPECTED_ANY>[]>>} */
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
			return /** @type {H[]} */ (cacheEntry);
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
	 * @template {H extends import("tapable").Hook<EXPECTED_ANY, infer R> ? R : never} R
	 * @param {HM} hookMap hook map
	 * @param {string} type type
	 * @param {(hooK: H) => R | undefined | void} fn fn
	 * @returns {R | undefined} hook
	 */
	_forEachLevel(hookMap, type, fn) {
		for (const hook of this._getAllLevelHooks(hookMap, type)) {
			const result = fn(/** @type {H} */ (hook));
			if (result !== undefined) return /** @type {R} */ (result);
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
	 * @param {(hook: H, data: string) => string} fn fn
	 * @returns {string | undefined} result of `fn`
	 */
	_forEachLevelWaterfall(hookMap, type, data, fn) {
		for (const hook of this._getAllLevelHooks(hookMap, type)) {
			data = fn(/** @type {H} */ (hook), data);
		}
		return data;
	}

	/**
	 * Returns printed result.
	 * @param {string} type The type
	 * @param {PrintObject} object Object to print
	 * @param {StatsPrinterContext=} baseContext The base context
	 * @returns {string | undefined} printed result
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
	 * Returns printed result.
	 * @private
	 * @param {string} type type
	 * @param {PrintObject} object object
	 * @param {StatsPrinterContext=} baseContext context
	 * @returns {string | undefined} printed result
	 */
	_print(type, object, baseContext) {
		/** @type {StatsPrinterContext} */
		const context = {
			...baseContext,
			type,
			[type]: object
		};

		/** @type {string | undefined} */
		let printResult = this._forEachLevel(this.hooks.print, type, (hook) =>
			hook.call(object, context)
		);
		if (printResult === undefined) {
			if (Array.isArray(object)) {
				const sortedItems = [...object];
				this._forEachLevel(this.hooks.sortItems, type, (h) =>
					h.call(
						sortedItems,
						/** @type {StatsPrinterContextWithExtra} */
						(context)
					)
				);
				const printedItems = sortedItems.map((item, i) => {
					const itemContext =
						/** @type {StatsPrinterContextWithExtra} */
						({
							...context,
							_index: i
						});
					const itemName = this._forEachLevel(
						this.hooks.getItemName,
						`${type}[]`,
						(h) => h.call(item, itemContext)
					);
					if (itemName) itemContext[itemName] = item;
					return this.print(
						itemName ? `${type}[].${itemName}` : `${type}[]`,
						item,
						itemContext
					);
				});
				printResult = this._forEachLevel(this.hooks.printItems, type, (h) =>
					h.call(
						/** @type {string[]} */ (printedItems),
						/** @type {StatsPrinterContextWithExtra} */
						(context)
					)
				);
				if (printResult === undefined) {
					const result = printedItems.filter(Boolean);
					if (result.length > 0) printResult = result.join("\n");
				}
			} else if (object !== null && typeof object === "object") {
				const elements = Object.keys(object).filter(
					(key) => object[key] !== undefined
				);
				this._forEachLevel(this.hooks.sortElements, type, (h) =>
					h.call(
						elements,
						/** @type {StatsPrinterContextWithExtra} */
						(context)
					)
				);
				const printedElements = elements.map((element) => {
					const content = this.print(`${type}.${element}`, object[element], {
						...context,
						_parent: object,
						_element: element,
						[element]: object[element]
					});
					return { element, content };
				});
				printResult = this._forEachLevel(this.hooks.printElements, type, (h) =>
					h.call(
						printedElements,
						/** @type {StatsPrinterContextWithExtra} */
						(context)
					)
				);
				if (printResult === undefined) {
					const result = printedElements.map((e) => e.content).filter(Boolean);
					if (result.length > 0) printResult = result.join("\n");
				}
			}
		}

		return this._forEachLevelWaterfall(
			this.hooks.result,
			type,
			/** @type {string} */
			(printResult),
			(h, r) => h.call(r, /** @type {StatsPrinterContextWithExtra} */ (context))
		);
	}
}

module.exports = StatsPrinter;
