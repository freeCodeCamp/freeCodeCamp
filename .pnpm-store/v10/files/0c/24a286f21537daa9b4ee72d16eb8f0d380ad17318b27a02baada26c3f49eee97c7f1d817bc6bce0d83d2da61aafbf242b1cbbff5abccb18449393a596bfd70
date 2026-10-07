/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const {
	JAVASCRIPT_MODULE_TYPE_AUTO,
	JAVASCRIPT_MODULE_TYPE_DYNAMIC,
	JAVASCRIPT_MODULE_TYPE_ESM
} = require("./ModuleTypeConstants");
const ConstDependency = require("./dependencies/ConstDependency");

/** @typedef {import("../declarations/WebpackOptions").JavascriptParserOptions} JavascriptParserOptions */
/** @typedef {import("./Compiler")} Compiler */
/** @typedef {import("./Dependency").DependencyLocation} DependencyLocation */
/** @typedef {import("./Module").BuildInfo} BuildInfo */
/** @typedef {import("./javascript/JavascriptParser")} JavascriptParser */
/** @typedef {import("./javascript/JavascriptParser").Range} Range */

const PLUGIN_NAME = "UseStrictPlugin";

class UseStrictPlugin {
	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.compilation.tap(
			PLUGIN_NAME,
			(compilation, { normalModuleFactory }) => {
				/**
				 * @param {JavascriptParser} parser the parser
				 * @param {JavascriptParserOptions} parserOptions the javascript parser options
				 */
				const handler = (parser, parserOptions) => {
					parser.hooks.program.tap(PLUGIN_NAME, ast => {
						const firstNode = ast.body[0];
						if (
							firstNode &&
							firstNode.type === "ExpressionStatement" &&
							firstNode.expression.type === "Literal" &&
							firstNode.expression.value === "use strict"
						) {
							// Remove "use strict" expression. It will be added later by the renderer again.
							// This is necessary in order to not break the strict mode when webpack prepends code.
							// @see https://github.com/webpack/webpack/issues/1970
							const dep = new ConstDependency(
								"",
								/** @type {Range} */ (firstNode.range)
							);
							dep.loc = /** @type {DependencyLocation} */ (firstNode.loc);
							parser.state.module.addPresentationalDependency(dep);
							/** @type {BuildInfo} */
							(parser.state.module.buildInfo).strict = true;
						}
						if (parserOptions.overrideStrict) {
							/** @type {BuildInfo} */
							(parser.state.module.buildInfo).strict =
								parserOptions.overrideStrict === "strict";
						}
					});
				};

				normalModuleFactory.hooks.parser
					.for(JAVASCRIPT_MODULE_TYPE_AUTO)
					.tap(PLUGIN_NAME, handler);
				normalModuleFactory.hooks.parser
					.for(JAVASCRIPT_MODULE_TYPE_DYNAMIC)
					.tap(PLUGIN_NAME, handler);
				normalModuleFactory.hooks.parser
					.for(JAVASCRIPT_MODULE_TYPE_ESM)
					.tap(PLUGIN_NAME, handler);
			}
		);
	}
}

module.exports = UseStrictPlugin;
