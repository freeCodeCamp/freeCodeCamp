/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const InitFragment = require("../InitFragment");
const RuntimeGlobals = require("../RuntimeGlobals");
const { first } = require("../util/SetHelpers");
const { propertyName } = require("../util/propertyName");

/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("../Generator").GenerateContext} GenerateContext */

/**
 * @param {Iterable<string>} iterable iterable strings
 * @returns {string} result
 */
const joinIterableWithComma = iterable => {
	// This is more performant than Array.from().join(", ")
	// as it doesn't create an array
	let str = "";
	let first = true;
	for (const item of iterable) {
		if (first) {
			first = false;
		} else {
			str += ", ";
		}
		str += item;
	}
	return str;
};

const EMPTY_MAP = new Map();
const EMPTY_SET = new Set();

/**
 * @extends {InitFragment<GenerateContext>} Context
 */
class HarmonyExportInitFragment extends InitFragment {
	/**
	 * @param {string} exportsArgument the exports identifier
	 * @param {Map<string, string>} exportMap mapping from used name to exposed variable name
	 * @param {Set<string>} unusedExports list of unused export names
	 */
	constructor(
		exportsArgument,
		exportMap = EMPTY_MAP,
		unusedExports = EMPTY_SET
	) {
		super(undefined, InitFragment.STAGE_HARMONY_EXPORTS, 1, "harmony-exports");
		this.exportsArgument = exportsArgument;
		this.exportMap = exportMap;
		this.unusedExports = unusedExports;
	}

	/**
	 * @param {HarmonyExportInitFragment[]} fragments all fragments to merge
	 * @returns {HarmonyExportInitFragment} merged fragment
	 */
	mergeAll(fragments) {
		let exportMap;
		let exportMapOwned = false;
		let unusedExports;
		let unusedExportsOwned = false;

		for (const fragment of fragments) {
			if (fragment.exportMap.size !== 0) {
				if (exportMap === undefined) {
					exportMap = fragment.exportMap;
					exportMapOwned = false;
				} else {
					if (!exportMapOwned) {
						exportMap = new Map(exportMap);
						exportMapOwned = true;
					}
					for (const [key, value] of fragment.exportMap) {
						if (!exportMap.has(key)) exportMap.set(key, value);
					}
				}
			}
			if (fragment.unusedExports.size !== 0) {
				if (unusedExports === undefined) {
					unusedExports = fragment.unusedExports;
					unusedExportsOwned = false;
				} else {
					if (!unusedExportsOwned) {
						unusedExports = new Set(unusedExports);
						unusedExportsOwned = true;
					}
					for (const value of fragment.unusedExports) {
						unusedExports.add(value);
					}
				}
			}
		}
		return new HarmonyExportInitFragment(
			this.exportsArgument,
			exportMap,
			unusedExports
		);
	}

	/**
	 * @param {HarmonyExportInitFragment} other other
	 * @returns {HarmonyExportInitFragment} merged result
	 */
	merge(other) {
		let exportMap;
		if (this.exportMap.size === 0) {
			exportMap = other.exportMap;
		} else if (other.exportMap.size === 0) {
			exportMap = this.exportMap;
		} else {
			exportMap = new Map(other.exportMap);
			for (const [key, value] of this.exportMap) {
				if (!exportMap.has(key)) exportMap.set(key, value);
			}
		}
		let unusedExports;
		if (this.unusedExports.size === 0) {
			unusedExports = other.unusedExports;
		} else if (other.unusedExports.size === 0) {
			unusedExports = this.unusedExports;
		} else {
			unusedExports = new Set(other.unusedExports);
			for (const value of this.unusedExports) {
				unusedExports.add(value);
			}
		}
		return new HarmonyExportInitFragment(
			this.exportsArgument,
			exportMap,
			unusedExports
		);
	}

	/**
	 * @param {GenerateContext} context context
	 * @returns {string | Source | undefined} the source code that will be included as initialization code
	 */
	getContent({ runtimeTemplate, runtimeRequirements }) {
		runtimeRequirements.add(RuntimeGlobals.exports);
		runtimeRequirements.add(RuntimeGlobals.definePropertyGetters);

		const unusedPart =
			this.unusedExports.size > 1
				? `/* unused harmony exports ${joinIterableWithComma(
						this.unusedExports
					)} */\n`
				: this.unusedExports.size > 0
					? `/* unused harmony export ${first(this.unusedExports)} */\n`
					: "";
		const definitions = [];
		const orderedExportMap = Array.from(this.exportMap).sort(([a], [b]) =>
			a < b ? -1 : 1
		);
		for (const [key, value] of orderedExportMap) {
			definitions.push(
				`\n/* harmony export */   ${propertyName(
					key
				)}: ${runtimeTemplate.returningFunction(value)}`
			);
		}
		const definePart =
			this.exportMap.size > 0
				? `/* harmony export */ ${RuntimeGlobals.definePropertyGetters}(${
						this.exportsArgument
					}, {${definitions.join(",")}\n/* harmony export */ });\n`
				: "";
		return `${definePart}${unusedPart}`;
	}
}

module.exports = HarmonyExportInitFragment;
