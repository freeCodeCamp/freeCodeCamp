/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Florent Cailhol @ooflorent
*/

"use strict";

const {
	compareModulesByPreOrderIndexOrIdentifier
} = require("../util/comparators");
const {
	assignAscendingModuleIds,
	getUsedModuleIdsAndModules
} = require("./IdHelpers");

/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("../Module")} Module */

class NaturalModuleIdsPlugin {
	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.compilation.tap("NaturalModuleIdsPlugin", compilation => {
			compilation.hooks.moduleIds.tap("NaturalModuleIdsPlugin", modules => {
				const [usedIds, modulesInNaturalOrder] =
					getUsedModuleIdsAndModules(compilation);
				modulesInNaturalOrder.sort(
					compareModulesByPreOrderIndexOrIdentifier(compilation.moduleGraph)
				);
				assignAscendingModuleIds(usedIds, modulesInNaturalOrder, compilation);
			});
		});
	}
}

module.exports = NaturalModuleIdsPlugin;
