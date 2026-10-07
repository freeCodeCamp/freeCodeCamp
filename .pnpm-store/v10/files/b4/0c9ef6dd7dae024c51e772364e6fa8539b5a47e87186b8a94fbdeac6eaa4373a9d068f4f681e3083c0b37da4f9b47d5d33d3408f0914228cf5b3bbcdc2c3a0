/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { UsageState } = require("../ExportsInfo");

/** @typedef {import("../ExportsInfo").ExportInfo} ExportInfo */
/** @typedef {import("../util/runtime").RuntimeSpec} RuntimeSpec */

/** @typedef {string[][]} ReferencedExports */

/**
 * @param {RuntimeSpec} runtime the runtime
 * @param {ReferencedExports} referencedExports list of referenced exports, will be added to
 * @param {string[]} prefix export prefix
 * @param {ExportInfo=} exportInfo the export info
 * @param {boolean} defaultPointsToSelf when true, using default will reference itself
 * @param {Set<ExportInfo>} alreadyVisited already visited export info (to handle circular reexports)
 */
const processExportInfo = (
	runtime,
	referencedExports,
	prefix,
	exportInfo,
	defaultPointsToSelf = false,
	alreadyVisited = new Set()
) => {
	if (!exportInfo) {
		referencedExports.push(prefix);
		return;
	}
	const used = exportInfo.getUsed(runtime);
	if (used === UsageState.Unused) return;
	if (alreadyVisited.has(exportInfo)) {
		referencedExports.push(prefix);
		return;
	}
	alreadyVisited.add(exportInfo);
	if (
		used !== UsageState.OnlyPropertiesUsed ||
		!exportInfo.exportsInfo ||
		exportInfo.exportsInfo.otherExportsInfo.getUsed(runtime) !==
			UsageState.Unused
	) {
		alreadyVisited.delete(exportInfo);
		referencedExports.push(prefix);
		return;
	}
	const exportsInfo = exportInfo.exportsInfo;
	for (const exportInfo of exportsInfo.orderedExports) {
		processExportInfo(
			runtime,
			referencedExports,
			defaultPointsToSelf && exportInfo.name === "default"
				? prefix
				: prefix.concat(exportInfo.name),
			exportInfo,
			false,
			alreadyVisited
		);
	}
	alreadyVisited.delete(exportInfo);
};
module.exports = processExportInfo;
