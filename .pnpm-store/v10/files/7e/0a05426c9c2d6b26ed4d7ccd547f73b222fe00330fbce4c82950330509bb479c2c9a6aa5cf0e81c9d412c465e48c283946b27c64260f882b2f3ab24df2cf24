/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/** @typedef {import("../Dependency")} Dependency */
/** @typedef {import("../Module")} Module */
/** @typedef {import("../ModuleGraph")} ModuleGraph */
/** @typedef {import("../javascript/JavascriptParser").Range} Range */

/** @typedef {Range[]} IdRanges */

/**
 * @summary Get the subset of ids and their corresponding range in an id chain that should be re-rendered by webpack.
 * Only those in the chain that are actually referring to namespaces or imports should be re-rendered.
 * Deeper member accessors on the imported object should not be re-rendered.  If deeper member accessors are re-rendered,
 * there is a potential loss of meaning with rendering a quoted accessor as an unquoted accessor, or vice versa,
 * because minifiers treat quoted accessors differently.  e.g. import { a } from "./module"; a["b"] vs a.b
 * @param {string[]} untrimmedIds chained ids
 * @param {Range} untrimmedRange range encompassing allIds
 * @param {IdRanges | undefined} ranges cumulative range of ids for each of allIds
 * @param {ModuleGraph} moduleGraph moduleGraph
 * @param {Dependency} dependency dependency
 * @returns {{ trimmedIds: string[], trimmedRange: Range }} computed trimmed ids and cumulative range of those ids
 */
module.exports.getTrimmedIdsAndRange = (
	untrimmedIds,
	untrimmedRange,
	ranges,
	moduleGraph,
	dependency
) => {
	let trimmedIds = trimIdsToThoseImported(
		untrimmedIds,
		moduleGraph,
		dependency
	);
	let trimmedRange = untrimmedRange;
	if (trimmedIds.length !== untrimmedIds.length) {
		// The array returned from dep.idRanges is right-aligned with the array returned from dep.names.
		// Meaning, the two arrays may not always have the same number of elements, but the last element of
		// dep.idRanges corresponds to [the expression fragment to the left of] the last element of dep.names.
		// Use this to find the correct replacement range based on the number of ids that were trimmed.
		const idx =
			ranges === undefined
				? -1 /* trigger failure case below */
				: ranges.length + (trimmedIds.length - untrimmedIds.length);
		if (idx < 0 || idx >= /** @type {Range[]} */ (ranges).length) {
			// cspell:ignore minifiers
			// Should not happen but we can't throw an error here because of backward compatibility with
			// external plugins in wp5.  Instead, we just disable trimming for now.  This may break some minifiers.
			trimmedIds = untrimmedIds;
			// TODO webpack 6 remove the "trimmedIds = ids" above and uncomment the following line instead.
			// throw new Error("Missing range starts data for id replacement trimming.");
		} else {
			trimmedRange = /** @type {Range[]} */ (ranges)[idx];
		}
	}

	return { trimmedIds, trimmedRange };
};

/**
 * @summary Determine which IDs in the id chain are actually referring to namespaces or imports,
 * and which are deeper member accessors on the imported object.
 * @param {string[]} ids untrimmed ids
 * @param {ModuleGraph} moduleGraph moduleGraph
 * @param {Dependency} dependency dependency
 * @returns {string[]} trimmed ids
 */
function trimIdsToThoseImported(ids, moduleGraph, dependency) {
	/** @type {string[]} */
	let trimmedIds = [];
	let currentExportsInfo = moduleGraph.getExportsInfo(
		/** @type {Module} */ (moduleGraph.getModule(dependency))
	);
	for (let i = 0; i < ids.length; i++) {
		if (i === 0 && ids[i] === "default") {
			continue; // ExportInfo for the next level under default is still at the root ExportsInfo, so don't advance currentExportsInfo
		}
		const exportInfo = currentExportsInfo.getExportInfo(ids[i]);
		if (exportInfo.provided === false) {
			// json imports have nested ExportInfo for elements that things that are not actually exported, so check .provided
			trimmedIds = ids.slice(0, i);
			break;
		}
		const nestedInfo = exportInfo.getNestedExportsInfo();
		if (!nestedInfo) {
			// once all nested exports are traversed, the next item is the actual import so stop there
			trimmedIds = ids.slice(0, i + 1);
			break;
		}
		currentExportsInfo = nestedInfo;
	}
	// Never trim to nothing.  This can happen for invalid imports (e.g. import { notThere } from "./module", or import { anything } from "./missingModule")
	return trimmedIds.length ? trimmedIds : ids;
}
