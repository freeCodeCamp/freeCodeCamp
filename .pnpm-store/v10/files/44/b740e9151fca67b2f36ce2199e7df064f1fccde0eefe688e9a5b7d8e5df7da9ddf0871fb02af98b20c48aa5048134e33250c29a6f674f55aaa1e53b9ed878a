/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Haijie Xie @hai-x
*/

"use strict";

const RuntimeGlobals = require("../RuntimeGlobals");

const Template = require("../Template");

/**
 * Generates javascript hmr.
 * @param {string} type unique identifier used for HMR runtime properties
 * @returns {string} HMR runtime code
 */
const generateJavascriptHMR = (type) =>
	Template.getFunctionContent(
		require("../hmr/JavascriptHotModuleReplacement.runtime")
	)
		.replace(/\$key\$/g, type)
		.replace(/\$installedChunks\$/g, "installedChunks")
		.replace(/\$loadUpdateChunk\$/g, "loadUpdateChunk")
		.replace(/\$moduleCache\$/g, RuntimeGlobals.moduleCache)
		.replace(/\$moduleFactories\$/g, RuntimeGlobals.moduleFactories)
		.replace(/\$ensureChunkHandlers\$/g, RuntimeGlobals.ensureChunkHandlers)
		.replace(/\$hasOwnProperty\$/g, RuntimeGlobals.hasOwnProperty)
		.replace(/\$hmrModuleData\$/g, RuntimeGlobals.hmrModuleData)
		.replace(
			/\$hmrDownloadUpdateHandlers\$/g,
			RuntimeGlobals.hmrDownloadUpdateHandlers
		)
		.replace(
			/\$hmrInvalidateModuleHandlers\$/g,
			RuntimeGlobals.hmrInvalidateModuleHandlers
		);

module.exports.generateJavascriptHMR = generateJavascriptHMR;
