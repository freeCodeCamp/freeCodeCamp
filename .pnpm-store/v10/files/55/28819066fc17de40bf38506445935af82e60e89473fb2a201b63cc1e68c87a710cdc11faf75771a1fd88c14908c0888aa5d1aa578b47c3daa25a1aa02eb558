/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const RuntimeGlobals = require("../RuntimeGlobals");
const RuntimeModule = require("../RuntimeModule");
const SelfModuleFactory = require("../SelfModuleFactory");
const Template = require("../Template");
const CommonJsExportsDependency = require("./CommonJsExportsDependency");
const CommonJsFullRequireDependency = require("./CommonJsFullRequireDependency");
const CommonJsRequireContextDependency = require("./CommonJsRequireContextDependency");
const CommonJsRequireDependency = require("./CommonJsRequireDependency");
const CommonJsSelfReferenceDependency = require("./CommonJsSelfReferenceDependency");
const ModuleDecoratorDependency = require("./ModuleDecoratorDependency");
const RequireHeaderDependency = require("./RequireHeaderDependency");
const RequireResolveContextDependency = require("./RequireResolveContextDependency");
const RequireResolveDependency = require("./RequireResolveDependency");
const RequireResolveHeaderDependency = require("./RequireResolveHeaderDependency");
const RuntimeRequirementsDependency = require("./RuntimeRequirementsDependency");

const CommonJsExportsParserPlugin = require("./CommonJsExportsParserPlugin");
const CommonJsImportsParserPlugin = require("./CommonJsImportsParserPlugin");

const {
	JAVASCRIPT_MODULE_TYPE_AUTO,
	JAVASCRIPT_MODULE_TYPE_DYNAMIC
} = require("../ModuleTypeConstants");
const {
	evaluateToIdentifier,
	toConstantDependency
} = require("../javascript/JavascriptParserHelpers");
const CommonJsExportRequireDependency = require("./CommonJsExportRequireDependency");

/** @typedef {import("../../declarations/WebpackOptions").JavascriptParserOptions} JavascriptParserOptions */
/** @typedef {import("../Compilation")} Compilation */
/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("../Dependency").DependencyLocation} DependencyLocation */
/** @typedef {import("../Module").BuildInfo} BuildInfo */
/** @typedef {import("../javascript/JavascriptParser")} Parser */

const PLUGIN_NAME = "CommonJsPlugin";

class CommonJsPlugin {
	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.compilation.tap(
			PLUGIN_NAME,
			(compilation, { contextModuleFactory, normalModuleFactory }) => {
				compilation.dependencyFactories.set(
					CommonJsRequireDependency,
					normalModuleFactory
				);
				compilation.dependencyTemplates.set(
					CommonJsRequireDependency,
					new CommonJsRequireDependency.Template()
				);

				compilation.dependencyFactories.set(
					CommonJsFullRequireDependency,
					normalModuleFactory
				);
				compilation.dependencyTemplates.set(
					CommonJsFullRequireDependency,
					new CommonJsFullRequireDependency.Template()
				);

				compilation.dependencyFactories.set(
					CommonJsRequireContextDependency,
					contextModuleFactory
				);
				compilation.dependencyTemplates.set(
					CommonJsRequireContextDependency,
					new CommonJsRequireContextDependency.Template()
				);

				compilation.dependencyFactories.set(
					RequireResolveDependency,
					normalModuleFactory
				);
				compilation.dependencyTemplates.set(
					RequireResolveDependency,
					new RequireResolveDependency.Template()
				);

				compilation.dependencyFactories.set(
					RequireResolveContextDependency,
					contextModuleFactory
				);
				compilation.dependencyTemplates.set(
					RequireResolveContextDependency,
					new RequireResolveContextDependency.Template()
				);

				compilation.dependencyTemplates.set(
					RequireResolveHeaderDependency,
					new RequireResolveHeaderDependency.Template()
				);

				compilation.dependencyTemplates.set(
					RequireHeaderDependency,
					new RequireHeaderDependency.Template()
				);

				compilation.dependencyTemplates.set(
					CommonJsExportsDependency,
					new CommonJsExportsDependency.Template()
				);

				compilation.dependencyFactories.set(
					CommonJsExportRequireDependency,
					normalModuleFactory
				);
				compilation.dependencyTemplates.set(
					CommonJsExportRequireDependency,
					new CommonJsExportRequireDependency.Template()
				);

				const selfFactory = new SelfModuleFactory(compilation.moduleGraph);

				compilation.dependencyFactories.set(
					CommonJsSelfReferenceDependency,
					selfFactory
				);
				compilation.dependencyTemplates.set(
					CommonJsSelfReferenceDependency,
					new CommonJsSelfReferenceDependency.Template()
				);

				compilation.dependencyFactories.set(
					ModuleDecoratorDependency,
					selfFactory
				);
				compilation.dependencyTemplates.set(
					ModuleDecoratorDependency,
					new ModuleDecoratorDependency.Template()
				);

				compilation.hooks.runtimeRequirementInModule
					.for(RuntimeGlobals.harmonyModuleDecorator)
					.tap(PLUGIN_NAME, (module, set) => {
						set.add(RuntimeGlobals.module);
						set.add(RuntimeGlobals.requireScope);
					});

				compilation.hooks.runtimeRequirementInModule
					.for(RuntimeGlobals.nodeModuleDecorator)
					.tap(PLUGIN_NAME, (module, set) => {
						set.add(RuntimeGlobals.module);
						set.add(RuntimeGlobals.requireScope);
					});

				compilation.hooks.runtimeRequirementInTree
					.for(RuntimeGlobals.harmonyModuleDecorator)
					.tap(PLUGIN_NAME, (chunk, set) => {
						compilation.addRuntimeModule(
							chunk,
							new HarmonyModuleDecoratorRuntimeModule()
						);
					});

				compilation.hooks.runtimeRequirementInTree
					.for(RuntimeGlobals.nodeModuleDecorator)
					.tap(PLUGIN_NAME, (chunk, set) => {
						compilation.addRuntimeModule(
							chunk,
							new NodeModuleDecoratorRuntimeModule()
						);
					});

				/**
				 * @param {Parser} parser parser parser
				 * @param {JavascriptParserOptions} parserOptions parserOptions
				 * @returns {void}
				 */
				const handler = (parser, parserOptions) => {
					if (parserOptions.commonjs !== undefined && !parserOptions.commonjs)
						return;
					parser.hooks.typeof
						.for("module")
						.tap(
							PLUGIN_NAME,
							toConstantDependency(parser, JSON.stringify("object"))
						);

					parser.hooks.expression
						.for("require.main")
						.tap(
							PLUGIN_NAME,
							toConstantDependency(
								parser,
								`${RuntimeGlobals.moduleCache}[${RuntimeGlobals.entryModuleId}]`,
								[RuntimeGlobals.moduleCache, RuntimeGlobals.entryModuleId]
							)
						);
					parser.hooks.expression
						.for(RuntimeGlobals.moduleLoaded)
						.tap(PLUGIN_NAME, expr => {
							/** @type {BuildInfo} */
							(parser.state.module.buildInfo).moduleConcatenationBailout =
								RuntimeGlobals.moduleLoaded;
							const dep = new RuntimeRequirementsDependency([
								RuntimeGlobals.moduleLoaded
							]);
							dep.loc = /** @type {DependencyLocation} */ (expr.loc);
							parser.state.module.addPresentationalDependency(dep);
							return true;
						});

					parser.hooks.expression
						.for(RuntimeGlobals.moduleId)
						.tap(PLUGIN_NAME, expr => {
							/** @type {BuildInfo} */
							(parser.state.module.buildInfo).moduleConcatenationBailout =
								RuntimeGlobals.moduleId;
							const dep = new RuntimeRequirementsDependency([
								RuntimeGlobals.moduleId
							]);
							dep.loc = /** @type {DependencyLocation} */ (expr.loc);
							parser.state.module.addPresentationalDependency(dep);
							return true;
						});

					parser.hooks.evaluateIdentifier.for("module.hot").tap(
						PLUGIN_NAME,
						evaluateToIdentifier("module.hot", "module", () => ["hot"], null)
					);

					new CommonJsImportsParserPlugin(parserOptions).apply(parser);
					new CommonJsExportsParserPlugin(compilation.moduleGraph).apply(
						parser
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

class HarmonyModuleDecoratorRuntimeModule extends RuntimeModule {
	constructor() {
		super("harmony module decorator");
	}

	/**
	 * @returns {string | null} runtime code
	 */
	generate() {
		const { runtimeTemplate } = /** @type {Compilation} */ (this.compilation);
		return Template.asString([
			`${
				RuntimeGlobals.harmonyModuleDecorator
			} = ${runtimeTemplate.basicFunction("module", [
				"module = Object.create(module);",
				"if (!module.children) module.children = [];",
				"Object.defineProperty(module, 'exports', {",
				Template.indent([
					"enumerable: true,",
					`set: ${runtimeTemplate.basicFunction("", [
						"throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);"
					])}`
				]),
				"});",
				"return module;"
			])};`
		]);
	}
}

class NodeModuleDecoratorRuntimeModule extends RuntimeModule {
	constructor() {
		super("node module decorator");
	}

	/**
	 * @returns {string | null} runtime code
	 */
	generate() {
		const { runtimeTemplate } = /** @type {Compilation} */ (this.compilation);
		return Template.asString([
			`${RuntimeGlobals.nodeModuleDecorator} = ${runtimeTemplate.basicFunction(
				"module",
				[
					"module.paths = [];",
					"if (!module.children) module.children = [];",
					"return module;"
				]
			)};`
		]);
	}
}

module.exports = CommonJsPlugin;
