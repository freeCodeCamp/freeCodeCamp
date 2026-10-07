/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Florent Cailhol @ooflorent
*/

"use strict";

const {
	compareModulesByPreOrderIndexOrIdentifier
} = require("../util/comparators");
const {
	getUsedModuleIdsAndModules,
	getFullModuleName,
	assignDeterministicIds
} = require("./IdHelpers");

/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("../Module")} Module */

/**
 * @typedef {object} DeterministicModuleIdsPluginOptions
 * @property {string=} context context relative to which module identifiers are computed
 * @property {function(Module): boolean=} test selector function for modules
 * @property {number=} maxLength maximum id length in digits (used as starting point)
 * @property {number=} salt hash salt for ids
 * @property {boolean=} fixedLength do not increase the maxLength to find an optimal id space size
 * @property {boolean=} failOnConflict throw an error when id conflicts occur (instead of rehashing)
 */

class DeterministicModuleIdsPlugin {
	/**
	 * @param {DeterministicModuleIdsPluginOptions} [options] options
	 */
	constructor(options = {}) {
		this.options = options;
	}

	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.compilation.tap(
			"DeterministicModuleIdsPlugin",
			compilation => {
				compilation.hooks.moduleIds.tap("DeterministicModuleIdsPlugin", () => {
					const chunkGraph = compilation.chunkGraph;
					const context = this.options.context
						? this.options.context
						: compiler.context;
					const maxLength = this.options.maxLength || 3;
					const failOnConflict = this.options.failOnConflict || false;
					const fixedLength = this.options.fixedLength || false;
					const salt = this.options.salt || 0;
					let conflicts = 0;

					const [usedIds, modules] = getUsedModuleIdsAndModules(
						compilation,
						this.options.test
					);
					assignDeterministicIds(
						modules,
						module => getFullModuleName(module, context, compiler.root),
						failOnConflict
							? () => 0
							: compareModulesByPreOrderIndexOrIdentifier(
									compilation.moduleGraph
								),
						(module, id) => {
							const size = usedIds.size;
							usedIds.add(`${id}`);
							if (size === usedIds.size) {
								conflicts++;
								return false;
							}
							chunkGraph.setModuleId(module, id);
							return true;
						},
						[10 ** maxLength],
						fixedLength ? 0 : 10,
						usedIds.size,
						salt
					);
					if (failOnConflict && conflicts)
						throw new Error(
							`Assigning deterministic module ids has lead to ${conflicts} conflict${
								conflicts > 1 ? "s" : ""
							}.\nIncrease the 'maxLength' to increase the id space and make conflicts less likely (recommended when there are many conflicts or application is expected to grow), or add an 'salt' number to try another hash starting value in the same id space (recommended when there is only a single conflict).`
						);
				});
			}
		);
	}
}

module.exports = DeterministicModuleIdsPlugin;
