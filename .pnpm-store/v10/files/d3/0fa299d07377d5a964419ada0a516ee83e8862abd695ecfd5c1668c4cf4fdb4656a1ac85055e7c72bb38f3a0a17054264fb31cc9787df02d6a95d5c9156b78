/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const {
	JAVASCRIPT_MODULE_TYPE_AUTO,
	JAVASCRIPT_MODULE_TYPE_DYNAMIC
} = require("./ModuleTypeConstants");
const NodeStuffInWebError = require("./NodeStuffInWebError");
const RuntimeGlobals = require("./RuntimeGlobals");
const CachedConstDependency = require("./dependencies/CachedConstDependency");
const ConstDependency = require("./dependencies/ConstDependency");
const ExternalModuleDependency = require("./dependencies/ExternalModuleDependency");
const {
	evaluateToString,
	expressionIsUnsupported
} = require("./javascript/JavascriptParserHelpers");
const { relative } = require("./util/fs");
const { parseResource } = require("./util/identifier");

/** @typedef {import("webpack-sources").ReplaceSource} ReplaceSource */
/** @typedef {import("../declarations/WebpackOptions").JavascriptParserOptions} JavascriptParserOptions */
/** @typedef {import("../declarations/WebpackOptions").NodeOptions} NodeOptions */
/** @typedef {import("./Compiler")} Compiler */
/** @typedef {import("./Dependency")} Dependency */
/** @typedef {import("./Dependency").DependencyLocation} DependencyLocation */
/** @typedef {import("./DependencyTemplates")} DependencyTemplates */
/** @typedef {import("./NormalModule")} NormalModule */
/** @typedef {import("./RuntimeTemplate")} RuntimeTemplate */
/** @typedef {import("./javascript/JavascriptParser")} JavascriptParser */
/** @typedef {import("./javascript/JavascriptParser").Range} Range */
/** @typedef {import("./util/fs").InputFileSystem} InputFileSystem */

const PLUGIN_NAME = "NodeStuffPlugin";

class NodeStuffPlugin {
	/**
	 * @param {NodeOptions} options options
	 */
	constructor(options) {
		this.options = options;
	}

	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		const options = this.options;
		compiler.hooks.compilation.tap(
			PLUGIN_NAME,
			(compilation, { normalModuleFactory }) => {
				compilation.dependencyTemplates.set(
					ExternalModuleDependency,
					new ExternalModuleDependency.Template()
				);

				/**
				 * @param {JavascriptParser} parser the parser
				 * @param {JavascriptParserOptions} parserOptions options
				 * @returns {void}
				 */
				const handler = (parser, parserOptions) => {
					if (parserOptions.node === false) return;

					let localOptions = options;
					if (parserOptions.node) {
						localOptions = { ...localOptions, ...parserOptions.node };
					}

					if (localOptions.global !== false) {
						const withWarning = localOptions.global === "warn";
						parser.hooks.expression.for("global").tap(PLUGIN_NAME, expr => {
							const dep = new ConstDependency(
								RuntimeGlobals.global,
								/** @type {Range} */ (expr.range),
								[RuntimeGlobals.global]
							);
							dep.loc = /** @type {DependencyLocation} */ (expr.loc);
							parser.state.module.addPresentationalDependency(dep);

							// TODO webpack 6 remove
							if (withWarning) {
								parser.state.module.addWarning(
									new NodeStuffInWebError(
										dep.loc,
										"global",
										"The global namespace object is a Node.js feature and isn't available in browsers."
									)
								);
							}
						});
						parser.hooks.rename.for("global").tap(PLUGIN_NAME, expr => {
							const dep = new ConstDependency(
								RuntimeGlobals.global,
								/** @type {Range} */ (expr.range),
								[RuntimeGlobals.global]
							);
							dep.loc = /** @type {DependencyLocation} */ (expr.loc);
							parser.state.module.addPresentationalDependency(dep);
							return false;
						});
					}

					/**
					 * @param {string} expressionName expression name
					 * @param {(module: NormalModule) => string} fn function
					 * @param {string=} warning warning
					 * @returns {void}
					 */
					const setModuleConstant = (expressionName, fn, warning) => {
						parser.hooks.expression
							.for(expressionName)
							.tap(PLUGIN_NAME, expr => {
								const dep = new CachedConstDependency(
									JSON.stringify(fn(parser.state.module)),
									/** @type {Range} */ (expr.range),
									expressionName
								);
								dep.loc = /** @type {DependencyLocation} */ (expr.loc);
								parser.state.module.addPresentationalDependency(dep);

								// TODO webpack 6 remove
								if (warning) {
									parser.state.module.addWarning(
										new NodeStuffInWebError(dep.loc, expressionName, warning)
									);
								}

								return true;
							});
					};

					/**
					 * @param {string} expressionName expression name
					 * @param {(value: string) => string} fn function
					 * @returns {void}
					 */
					const setUrlModuleConstant = (expressionName, fn) => {
						parser.hooks.expression
							.for(expressionName)
							.tap(PLUGIN_NAME, expr => {
								const dep = new ExternalModuleDependency(
									"url",
									[
										{
											name: "fileURLToPath",
											value: "__webpack_fileURLToPath__"
										}
									],
									undefined,
									fn("__webpack_fileURLToPath__"),
									/** @type {Range} */ (expr.range),
									expressionName
								);
								dep.loc = /** @type {DependencyLocation} */ (expr.loc);
								parser.state.module.addPresentationalDependency(dep);

								return true;
							});
					};

					/**
					 * @param {string} expressionName expression name
					 * @param {string} value value
					 * @param {string=} warning warning
					 * @returns {void}
					 */
					const setConstant = (expressionName, value, warning) =>
						setModuleConstant(expressionName, () => value, warning);

					const context = compiler.context;
					if (localOptions.__filename) {
						switch (localOptions.__filename) {
							case "mock":
								setConstant("__filename", "/index.js");
								break;
							case "warn-mock":
								setConstant(
									"__filename",
									"/index.js",
									"__filename is a Node.js feature and isn't available in browsers."
								);
								break;
							case "node-module":
								setUrlModuleConstant(
									"__filename",
									functionName => `${functionName}(import.meta.url)`
								);
								break;
							case true:
								setModuleConstant("__filename", module =>
									relative(
										/** @type {InputFileSystem} */ (compiler.inputFileSystem),
										context,
										module.resource
									)
								);
								break;
						}

						parser.hooks.evaluateIdentifier
							.for("__filename")
							.tap(PLUGIN_NAME, expr => {
								if (!parser.state.module) return;
								const resource = parseResource(parser.state.module.resource);
								return evaluateToString(resource.path)(expr);
							});
					}
					if (localOptions.__dirname) {
						switch (localOptions.__dirname) {
							case "mock":
								setConstant("__dirname", "/");
								break;
							case "warn-mock":
								setConstant(
									"__dirname",
									"/",
									"__dirname is a Node.js feature and isn't available in browsers."
								);
								break;
							case "node-module":
								setUrlModuleConstant(
									"__dirname",
									functionName =>
										`${functionName}(import.meta.url + "/..").slice(0, -1)`
								);
								break;
							case true:
								setModuleConstant("__dirname", module =>
									relative(
										/** @type {InputFileSystem} */ (compiler.inputFileSystem),
										context,
										/** @type {string} */ (module.context)
									)
								);
								break;
						}

						parser.hooks.evaluateIdentifier
							.for("__dirname")
							.tap(PLUGIN_NAME, expr => {
								if (!parser.state.module) return;
								return evaluateToString(
									/** @type {string} */ (parser.state.module.context)
								)(expr);
							});
					}
					parser.hooks.expression
						.for("require.extensions")
						.tap(
							PLUGIN_NAME,
							expressionIsUnsupported(
								parser,
								"require.extensions is not supported by webpack. Use a loader instead."
							)
						);
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

module.exports = NodeStuffPlugin;
