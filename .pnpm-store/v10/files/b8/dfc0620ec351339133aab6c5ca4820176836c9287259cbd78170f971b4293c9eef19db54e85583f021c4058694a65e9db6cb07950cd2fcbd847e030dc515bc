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
const {
	approve,
	evaluateToIdentifier,
	evaluateToString,
	toConstantDependency
} = require("../javascript/JavascriptParserHelpers");

const AMDDefineDependency = require("./AMDDefineDependency");
const AMDDefineDependencyParserPlugin = require("./AMDDefineDependencyParserPlugin");
const AMDRequireArrayDependency = require("./AMDRequireArrayDependency");
const AMDRequireContextDependency = require("./AMDRequireContextDependency");
const AMDRequireDependenciesBlockParserPlugin = require("./AMDRequireDependenciesBlockParserPlugin");
const AMDRequireDependency = require("./AMDRequireDependency");
const AMDRequireItemDependency = require("./AMDRequireItemDependency");
const {
	AMDDefineRuntimeModule,
	AMDOptionsRuntimeModule
} = require("./AMDRuntimeModules");
const ConstDependency = require("./ConstDependency");
const LocalModuleDependency = require("./LocalModuleDependency");
const UnsupportedDependency = require("./UnsupportedDependency");

/** @typedef {import("../../declarations/WebpackOptions").JavascriptParserOptions} JavascriptParserOptions */
/** @typedef {import("../../declarations/WebpackOptions").ModuleOptionsNormalized} ModuleOptions */
/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("../Dependency").DependencyLocation} DependencyLocation */
/** @typedef {import("../javascript/JavascriptParser")} Parser */
/** @typedef {import("../javascript/JavascriptParser").Range} Range */

const PLUGIN_NAME = "AMDPlugin";

class AMDPlugin {
	/**
	 * @param {Record<string, any>} amdOptions the AMD options
	 */
	constructor(amdOptions) {
		this.amdOptions = amdOptions;
	}

	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		const amdOptions = this.amdOptions;
		compiler.hooks.compilation.tap(
			PLUGIN_NAME,
			(compilation, { contextModuleFactory, normalModuleFactory }) => {
				compilation.dependencyTemplates.set(
					AMDRequireDependency,
					new AMDRequireDependency.Template()
				);

				compilation.dependencyFactories.set(
					AMDRequireItemDependency,
					normalModuleFactory
				);
				compilation.dependencyTemplates.set(
					AMDRequireItemDependency,
					new AMDRequireItemDependency.Template()
				);

				compilation.dependencyTemplates.set(
					AMDRequireArrayDependency,
					new AMDRequireArrayDependency.Template()
				);

				compilation.dependencyFactories.set(
					AMDRequireContextDependency,
					contextModuleFactory
				);
				compilation.dependencyTemplates.set(
					AMDRequireContextDependency,
					new AMDRequireContextDependency.Template()
				);

				compilation.dependencyTemplates.set(
					AMDDefineDependency,
					new AMDDefineDependency.Template()
				);

				compilation.dependencyTemplates.set(
					UnsupportedDependency,
					new UnsupportedDependency.Template()
				);

				compilation.dependencyTemplates.set(
					LocalModuleDependency,
					new LocalModuleDependency.Template()
				);

				compilation.hooks.runtimeRequirementInModule
					.for(RuntimeGlobals.amdDefine)
					.tap(PLUGIN_NAME, (module, set) => {
						set.add(RuntimeGlobals.require);
					});

				compilation.hooks.runtimeRequirementInModule
					.for(RuntimeGlobals.amdOptions)
					.tap(PLUGIN_NAME, (module, set) => {
						set.add(RuntimeGlobals.requireScope);
					});

				compilation.hooks.runtimeRequirementInTree
					.for(RuntimeGlobals.amdDefine)
					.tap(PLUGIN_NAME, (chunk, set) => {
						compilation.addRuntimeModule(chunk, new AMDDefineRuntimeModule());
					});

				compilation.hooks.runtimeRequirementInTree
					.for(RuntimeGlobals.amdOptions)
					.tap(PLUGIN_NAME, (chunk, set) => {
						compilation.addRuntimeModule(
							chunk,
							new AMDOptionsRuntimeModule(amdOptions)
						);
					});

				/**
				 * @param {Parser} parser parser parser
				 * @param {JavascriptParserOptions} parserOptions parserOptions
				 * @returns {void}
				 */
				const handler = (parser, parserOptions) => {
					if (parserOptions.amd !== undefined && !parserOptions.amd) return;

					/**
					 * @param {string} optionExpr option expression
					 * @param {string} rootName root name
					 * @param {function(): TODO} getMembers callback
					 */
					const tapOptionsHooks = (optionExpr, rootName, getMembers) => {
						parser.hooks.expression
							.for(optionExpr)
							.tap(
								PLUGIN_NAME,
								toConstantDependency(parser, RuntimeGlobals.amdOptions, [
									RuntimeGlobals.amdOptions
								])
							);
						parser.hooks.evaluateIdentifier
							.for(optionExpr)
							.tap(
								PLUGIN_NAME,
								evaluateToIdentifier(optionExpr, rootName, getMembers, true)
							);
						parser.hooks.evaluateTypeof
							.for(optionExpr)
							.tap(PLUGIN_NAME, evaluateToString("object"));
						parser.hooks.typeof
							.for(optionExpr)
							.tap(
								PLUGIN_NAME,
								toConstantDependency(parser, JSON.stringify("object"))
							);
					};

					new AMDRequireDependenciesBlockParserPlugin(parserOptions).apply(
						parser
					);
					new AMDDefineDependencyParserPlugin(parserOptions).apply(parser);

					tapOptionsHooks("define.amd", "define", () => "amd");
					tapOptionsHooks("require.amd", "require", () => ["amd"]);
					tapOptionsHooks(
						"__webpack_amd_options__",
						"__webpack_amd_options__",
						() => []
					);

					parser.hooks.expression.for("define").tap(PLUGIN_NAME, expr => {
						const dep = new ConstDependency(
							RuntimeGlobals.amdDefine,
							/** @type {Range} */ (expr.range),
							[RuntimeGlobals.amdDefine]
						);
						dep.loc = /** @type {DependencyLocation} */ (expr.loc);
						parser.state.module.addPresentationalDependency(dep);
						return true;
					});
					parser.hooks.typeof
						.for("define")
						.tap(
							PLUGIN_NAME,
							toConstantDependency(parser, JSON.stringify("function"))
						);
					parser.hooks.evaluateTypeof
						.for("define")
						.tap(PLUGIN_NAME, evaluateToString("function"));
					parser.hooks.canRename.for("define").tap(PLUGIN_NAME, approve);
					parser.hooks.rename.for("define").tap(PLUGIN_NAME, expr => {
						const dep = new ConstDependency(
							RuntimeGlobals.amdDefine,
							/** @type {Range} */ (expr.range),
							[RuntimeGlobals.amdDefine]
						);
						dep.loc = /** @type {DependencyLocation} */ (expr.loc);
						parser.state.module.addPresentationalDependency(dep);
						return false;
					});
					parser.hooks.typeof
						.for("require")
						.tap(
							PLUGIN_NAME,
							toConstantDependency(parser, JSON.stringify("function"))
						);
					parser.hooks.evaluateTypeof
						.for("require")
						.tap(PLUGIN_NAME, evaluateToString("function"));
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

module.exports = AMDPlugin;
