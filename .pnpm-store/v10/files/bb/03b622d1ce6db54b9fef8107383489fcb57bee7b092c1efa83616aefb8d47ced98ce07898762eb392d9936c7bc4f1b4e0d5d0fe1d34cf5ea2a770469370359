/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Sergey Melyukov @smelukov
*/

"use strict";

const { UsageState } = require("../ExportsInfo");

/** @typedef {import("estree").Node} AnyNode */
/** @typedef {import("../Dependency")} Dependency */
/** @typedef {import("../Module")} Module */
/** @typedef {import("../ModuleGraph")} ModuleGraph */
/** @typedef {import("../ModuleGraphConnection")} ModuleGraphConnection */
/** @typedef {import("../ModuleGraphConnection").ConnectionState} ConnectionState */
/** @typedef {import("../Parser").ParserState} ParserState */
/** @typedef {import("../javascript/JavascriptParser")} JavascriptParser */
/** @typedef {import("../util/runtime").RuntimeSpec} RuntimeSpec */

/** @typedef {Map<TopLevelSymbol | null, Set<string | TopLevelSymbol> | true | undefined>} InnerGraph */
/** @typedef {function(boolean | Set<string> | undefined): void} UsageCallback */

/**
 * @typedef {object} StateObject
 * @property {InnerGraph} innerGraph
 * @property {TopLevelSymbol=} currentTopLevelSymbol
 * @property {Map<TopLevelSymbol, Set<UsageCallback>>} usageCallbackMap
 */

/** @typedef {false|StateObject} State */

/** @type {WeakMap<ParserState, State>} */
const parserStateMap = new WeakMap();
const topLevelSymbolTag = Symbol("top level symbol");

/**
 * @param {ParserState} parserState parser state
 * @returns {State | undefined} state
 */
function getState(parserState) {
	return parserStateMap.get(parserState);
}

/**
 * @param {ParserState} parserState parser state
 * @returns {void}
 */
module.exports.bailout = parserState => {
	parserStateMap.set(parserState, false);
};

/**
 * @param {ParserState} parserState parser state
 * @returns {void}
 */
module.exports.enable = parserState => {
	const state = parserStateMap.get(parserState);
	if (state === false) {
		return;
	}
	parserStateMap.set(parserState, {
		innerGraph: new Map(),
		currentTopLevelSymbol: undefined,
		usageCallbackMap: new Map()
	});
};

/**
 * @param {ParserState} parserState parser state
 * @returns {boolean} true, when enabled
 */
module.exports.isEnabled = parserState => {
	const state = parserStateMap.get(parserState);
	return Boolean(state);
};

/**
 * @param {ParserState} state parser state
 * @param {TopLevelSymbol | null} symbol the symbol, or null for all symbols
 * @param {string | TopLevelSymbol | true} usage usage data
 * @returns {void}
 */
module.exports.addUsage = (state, symbol, usage) => {
	const innerGraphState = getState(state);

	if (innerGraphState) {
		const { innerGraph } = innerGraphState;
		const info = innerGraph.get(symbol);
		if (usage === true) {
			innerGraph.set(symbol, true);
		} else if (info === undefined) {
			innerGraph.set(symbol, new Set([usage]));
		} else if (info !== true) {
			info.add(usage);
		}
	}
};

/**
 * @param {JavascriptParser} parser the parser
 * @param {string} name name of variable
 * @param {string | TopLevelSymbol | true} usage usage data
 * @returns {void}
 */
module.exports.addVariableUsage = (parser, name, usage) => {
	const symbol =
		/** @type {TopLevelSymbol} */ (
			parser.getTagData(name, topLevelSymbolTag)
		) || module.exports.tagTopLevelSymbol(parser, name);
	if (symbol) {
		module.exports.addUsage(parser.state, symbol, usage);
	}
};

/**
 * @param {ParserState} state parser state
 * @returns {void}
 */
module.exports.inferDependencyUsage = state => {
	const innerGraphState = getState(state);

	if (!innerGraphState) {
		return;
	}

	const { innerGraph, usageCallbackMap } = innerGraphState;
	const processed = new Map();
	// flatten graph to terminal nodes (string, undefined or true)
	const nonTerminal = new Set(innerGraph.keys());
	while (nonTerminal.size > 0) {
		for (const key of nonTerminal) {
			/** @type {Set<string|TopLevelSymbol> | true} */
			let newSet = new Set();
			let isTerminal = true;
			const value = innerGraph.get(key);
			let alreadyProcessed = processed.get(key);
			if (alreadyProcessed === undefined) {
				alreadyProcessed = new Set();
				processed.set(key, alreadyProcessed);
			}
			if (value !== true && value !== undefined) {
				for (const item of value) {
					alreadyProcessed.add(item);
				}
				for (const item of value) {
					if (typeof item === "string") {
						newSet.add(item);
					} else {
						const itemValue = innerGraph.get(item);
						if (itemValue === true) {
							newSet = true;
							break;
						}
						if (itemValue !== undefined) {
							for (const i of itemValue) {
								if (i === key) continue;
								if (alreadyProcessed.has(i)) continue;
								newSet.add(i);
								if (typeof i !== "string") {
									isTerminal = false;
								}
							}
						}
					}
				}
				if (newSet === true) {
					innerGraph.set(key, true);
				} else if (newSet.size === 0) {
					innerGraph.set(key, undefined);
				} else {
					innerGraph.set(key, newSet);
				}
			}
			if (isTerminal) {
				nonTerminal.delete(key);

				// For the global key, merge with all other keys
				if (key === null) {
					const globalValue = innerGraph.get(null);
					if (globalValue) {
						for (const [key, value] of innerGraph) {
							if (key !== null && value !== true) {
								if (globalValue === true) {
									innerGraph.set(key, true);
								} else {
									const newSet = new Set(value);
									for (const item of globalValue) {
										newSet.add(item);
									}
									innerGraph.set(key, newSet);
								}
							}
						}
					}
				}
			}
		}
	}

	/** @type {Map<Dependency, true | Set<string>>} */
	for (const [symbol, callbacks] of usageCallbackMap) {
		const usage = /** @type {true | Set<string> | undefined} */ (
			innerGraph.get(symbol)
		);
		for (const callback of callbacks) {
			callback(usage === undefined ? false : usage);
		}
	}
};

/**
 * @param {ParserState} state parser state
 * @param {UsageCallback} onUsageCallback on usage callback
 */
module.exports.onUsage = (state, onUsageCallback) => {
	const innerGraphState = getState(state);

	if (innerGraphState) {
		const { usageCallbackMap, currentTopLevelSymbol } = innerGraphState;
		if (currentTopLevelSymbol) {
			let callbacks = usageCallbackMap.get(currentTopLevelSymbol);

			if (callbacks === undefined) {
				callbacks = new Set();
				usageCallbackMap.set(currentTopLevelSymbol, callbacks);
			}

			callbacks.add(onUsageCallback);
		} else {
			onUsageCallback(true);
		}
	} else {
		onUsageCallback(undefined);
	}
};

/**
 * @param {ParserState} state parser state
 * @param {TopLevelSymbol | undefined} symbol the symbol
 */
module.exports.setTopLevelSymbol = (state, symbol) => {
	const innerGraphState = getState(state);

	if (innerGraphState) {
		innerGraphState.currentTopLevelSymbol = symbol;
	}
};

/**
 * @param {ParserState} state parser state
 * @returns {TopLevelSymbol|void} usage data
 */
module.exports.getTopLevelSymbol = state => {
	const innerGraphState = getState(state);

	if (innerGraphState) {
		return innerGraphState.currentTopLevelSymbol;
	}
};

/**
 * @param {JavascriptParser} parser parser
 * @param {string} name name of variable
 * @returns {TopLevelSymbol | undefined} symbol
 */
module.exports.tagTopLevelSymbol = (parser, name) => {
	const innerGraphState = getState(parser.state);
	if (!innerGraphState) return;

	parser.defineVariable(name);

	const existingTag = /** @type {TopLevelSymbol} */ (
		parser.getTagData(name, topLevelSymbolTag)
	);
	if (existingTag) {
		return existingTag;
	}

	const fn = new TopLevelSymbol(name);
	parser.tagVariable(name, topLevelSymbolTag, fn);
	return fn;
};

/**
 * @param {Dependency} dependency the dependency
 * @param {Set<string> | boolean} usedByExports usedByExports info
 * @param {ModuleGraph} moduleGraph moduleGraph
 * @param {RuntimeSpec} runtime runtime
 * @returns {boolean} false, when unused. Otherwise true
 */
module.exports.isDependencyUsedByExports = (
	dependency,
	usedByExports,
	moduleGraph,
	runtime
) => {
	if (usedByExports === false) return false;
	if (usedByExports !== true && usedByExports !== undefined) {
		const selfModule =
			/** @type {Module} */
			(moduleGraph.getParentModule(dependency));
		const exportsInfo = moduleGraph.getExportsInfo(selfModule);
		let used = false;
		for (const exportName of usedByExports) {
			if (exportsInfo.getUsed(exportName, runtime) !== UsageState.Unused)
				used = true;
		}
		if (!used) return false;
	}
	return true;
};

/**
 * @param {Dependency} dependency the dependency
 * @param {Set<string> | boolean | undefined} usedByExports usedByExports info
 * @param {ModuleGraph} moduleGraph moduleGraph
 * @returns {null | false | function(ModuleGraphConnection, RuntimeSpec): ConnectionState} function to determine if the connection is active
 */
module.exports.getDependencyUsedByExportsCondition = (
	dependency,
	usedByExports,
	moduleGraph
) => {
	if (usedByExports === false) return false;
	if (usedByExports !== true && usedByExports !== undefined) {
		const selfModule =
			/** @type {Module} */
			(moduleGraph.getParentModule(dependency));
		const exportsInfo = moduleGraph.getExportsInfo(selfModule);
		return (connections, runtime) => {
			for (const exportName of usedByExports) {
				if (exportsInfo.getUsed(exportName, runtime) !== UsageState.Unused)
					return true;
			}
			return false;
		};
	}
	return null;
};

class TopLevelSymbol {
	/**
	 * @param {string} name name of the variable
	 */
	constructor(name) {
		this.name = name;
	}
}

module.exports.TopLevelSymbol = TopLevelSymbol;
module.exports.topLevelSymbolTag = topLevelSymbolTag;
