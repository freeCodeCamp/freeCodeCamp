/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const {
	JAVASCRIPT_MODULE_TYPE_AUTO,
	JAVASCRIPT_MODULE_TYPE_DYNAMIC
} = require("../ModuleTypeConstants");
const RuntimeGlobals = require("../RuntimeGlobals");
const WebpackError = require("../WebpackError");
const {
	evaluateToString,
	expressionIsUnsupported,
	toConstantDependency
} = require("../javascript/JavascriptParserHelpers");
const makeSerializable = require("../util/makeSerializable");
const ConstDependency = require("./ConstDependency");
const SystemRuntimeModule = require("./SystemRuntimeModule");

/** @typedef {import("../../declarations/WebpackOptions").JavascriptParserOptions} JavascriptParserOptions */
/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("../Dependency").DependencyLocation} DependencyLocation */
/** @typedef {import("../javascript/JavascriptParser")} Parser */
/** @typedef {import("../javascript/JavascriptParser").Range} Range */

const PLUGIN_NAME = "SystemPlugin";

class SystemPlugin {
	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.compilation.tap(
			PLUGIN_NAME,
			(compilation, { normalModuleFactory }) => {
				compilation.hooks.runtimeRequirementInModule
					.for(RuntimeGlobals.system)
					.tap(PLUGIN_NAME, (module, set) => {
						set.add(RuntimeGlobals.requireScope);
					});

				compilation.hooks.runtimeRequirementInTree
					.for(RuntimeGlobals.system)
					.tap(PLUGIN_NAME, (chunk, set) => {
						compilation.addRuntimeModule(chunk, new SystemRuntimeModule());
					});

				/**
				 * @param {Parser} parser parser parser
				 * @param {JavascriptParserOptions} parserOptions parserOptions
				 * @returns {void}
				 */
				const handler = (parser, parserOptions) => {
					if (parserOptions.system === undefined || !parserOptions.system) {
						return;
					}

					/**
					 * @param {string} name name
					 */
					const setNotSupported = name => {
						parser.hooks.evaluateTypeof
							.for(name)
							.tap(PLUGIN_NAME, evaluateToString("undefined"));
						parser.hooks.expression
							.for(name)
							.tap(
								PLUGIN_NAME,
								expressionIsUnsupported(
									parser,
									`${name} is not supported by webpack.`
								)
							);
					};

					parser.hooks.typeof
						.for("System.import")
						.tap(
							PLUGIN_NAME,
							toConstantDependency(parser, JSON.stringify("function"))
						);
					parser.hooks.evaluateTypeof
						.for("System.import")
						.tap(PLUGIN_NAME, evaluateToString("function"));
					parser.hooks.typeof
						.for("System")
						.tap(
							PLUGIN_NAME,
							toConstantDependency(parser, JSON.stringify("object"))
						);
					parser.hooks.evaluateTypeof
						.for("System")
						.tap(PLUGIN_NAME, evaluateToString("object"));

					setNotSupported("System.set");
					setNotSupported("System.get");
					setNotSupported("System.register");

					parser.hooks.expression.for("System").tap(PLUGIN_NAME, expr => {
						const dep = new ConstDependency(
							RuntimeGlobals.system,
							/** @type {Range} */ (expr.range),
							[RuntimeGlobals.system]
						);
						dep.loc = /** @type {DependencyLocation} */ (expr.loc);
						parser.state.module.addPresentationalDependency(dep);
						return true;
					});

					parser.hooks.call.for("System.import").tap(PLUGIN_NAME, expr => {
						parser.state.module.addWarning(
							new SystemImportDeprecationWarning(
								/** @type {DependencyLocation} */ (expr.loc)
							)
						);

						return parser.hooks.importCall.call({
							type: "ImportExpression",
							source:
								/** @type {import("estree").Literal} */
								(expr.arguments[0]),
							loc: expr.loc,
							range: expr.range,
							options: null
						});
					});
				};

				normalModuleFactory.hooks.parser
					.for(JAVASCRIPT_MODULE_TYPE_AUTO)
					.tap(PLUGIN_NAME, handler);
				normalModuleFactory.hooks.parser
					.for(JAVASCRIPT_MODULE_TYPE_DYNAMIC)
					.tap(PLUGIN_NAME, handler);
			}
		);
	}
}

class SystemImportDeprecationWarning extends WebpackError {
	/**
	 * @param {DependencyLocation} loc location
	 */
	constructor(loc) {
		super(
			"System.import() is deprecated and will be removed soon. Use import() instead.\n" +
				"For more info visit https://webpack.js.org/guides/code-splitting/"
		);

		this.name = "SystemImportDeprecationWarning";

		this.loc = loc;
	}
}

makeSerializable(
	SystemImportDeprecationWarning,
	"webpack/lib/dependencies/SystemPlugin",
	"SystemImportDeprecationWarning"
);

module.exports = SystemPlugin;
module.exports.SystemImportDeprecationWarning = SystemImportDeprecationWarning;
