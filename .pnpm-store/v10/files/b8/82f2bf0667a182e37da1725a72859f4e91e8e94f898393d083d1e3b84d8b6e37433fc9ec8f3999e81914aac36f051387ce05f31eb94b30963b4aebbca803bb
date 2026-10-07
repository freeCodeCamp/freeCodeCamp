/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Florent Cailhol @ooflorent
*/

"use strict";

const ConstDependency = require("./ConstDependency");
const HarmonyExports = require("./HarmonyExports");

/** @typedef {import("../Dependency").DependencyLocation} DependencyLocation */
/** @typedef {import("../javascript/JavascriptParser")} JavascriptParser */
/** @typedef {import("../javascript/JavascriptParser").Range} Range */

class HarmonyTopLevelThisParserPlugin {
	/**
	 * @param {JavascriptParser} parser the parser
	 * @returns {void}
	 */
	apply(parser) {
		parser.hooks.expression
			.for("this")
			.tap("HarmonyTopLevelThisParserPlugin", node => {
				if (!parser.scope.topLevelScope) return;
				if (HarmonyExports.isEnabled(parser.state)) {
					const dep = new ConstDependency(
						"undefined",
						/** @type {Range} */ (node.range),
						null
					);
					dep.loc = /** @type {DependencyLocation} */ (node.loc);
					parser.state.module.addPresentationalDependency(dep);
					return true;
				}
			});
	}
}

module.exports = HarmonyTopLevelThisParserPlugin;
