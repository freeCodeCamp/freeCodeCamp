/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const glob2regexp = require("glob-to-regexp");
const {
	JAVASCRIPT_MODULE_TYPE_AUTO,
	JAVASCRIPT_MODULE_TYPE_ESM,
	JAVASCRIPT_MODULE_TYPE_DYNAMIC
} = require("../ModuleTypeConstants");
const { STAGE_DEFAULT } = require("../OptimizationStages");
const HarmonyExportImportedSpecifierDependency = require("../dependencies/HarmonyExportImportedSpecifierDependency");
const HarmonyImportSpecifierDependency = require("../dependencies/HarmonyImportSpecifierDependency");
const formatLocation = require("../formatLocation");

/** @typedef {import("estree").ModuleDeclaration} ModuleDeclaration */
/** @typedef {import("estree").Statement} Statement */
/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("../Dependency")} Dependency */
/** @typedef {import("../Dependency").DependencyLocation} DependencyLocation */
/** @typedef {import("../Module")} Module */
/** @typedef {import("../Module").BuildMeta} BuildMeta */
/** @typedef {import("../ModuleGraphConnection")} ModuleGraphConnection */
/** @typedef {import("../NormalModuleFactory").ModuleSettings} ModuleSettings */
/** @typedef {import("../javascript/JavascriptParser")} JavascriptParser */
/** @typedef {import("../javascript/JavascriptParser").Range} Range */

/**
 * @typedef {object} ExportInModule
 * @property {Module} module the module
 * @property {string} exportName the name of the export
 * @property {boolean} checked if the export is conditional
 */

/**
 * @typedef {object} ReexportInfo
 * @property {Map<string, ExportInModule[]>} static
 * @property {Map<Module, Set<string>>} dynamic
 */

/** @typedef {Map<string, RegExp>} CacheItem */

/** @type {WeakMap<any, CacheItem>} */
const globToRegexpCache = new WeakMap();

/**
 * @param {string} glob the pattern
 * @param {Map<string, RegExp>} cache the glob to RegExp cache
 * @returns {RegExp} a regular expression
 */
const globToRegexp = (glob, cache) => {
	const cacheEntry = cache.get(glob);
	if (cacheEntry !== undefined) return cacheEntry;
	if (!glob.includes("/")) {
		glob = `**/${glob}`;
	}
	const baseRegexp = glob2regexp(glob, { globstar: true, extended: true });
	const regexpSource = baseRegexp.source;
	const regexp = new RegExp(`^(\\./)?${regexpSource.slice(1)}`);
	cache.set(glob, regexp);
	return regexp;
};

const PLUGIN_NAME = "SideEffectsFlagPlugin";

class SideEffectsFlagPlugin {
	/**
	 * @param {boolean} analyseSource analyse source code for side effects
	 */
	constructor(analyseSource = true) {
		this._analyseSource = analyseSource;
	}

	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		let cache = globToRegexpCache.get(compiler.root);
		if (cache === undefined) {
			cache = new Map();
			globToRegexpCache.set(compiler.root, cache);
		}
		compiler.hooks.compilation.tap(
			PLUGIN_NAME,
			(compilation, { normalModuleFactory }) => {
				const moduleGraph = compilation.moduleGraph;
				normalModuleFactory.hooks.module.tap(PLUGIN_NAME, (module, data) => {
					const resolveData = data.resourceResolveData;
					if (
						resolveData &&
						resolveData.descriptionFileData &&
						resolveData.relativePath
					) {
						const sideEffects = resolveData.descriptionFileData.sideEffects;
						if (sideEffects !== undefined) {
							if (module.factoryMeta === undefined) {
								module.factoryMeta = {};
							}
							const hasSideEffects = SideEffectsFlagPlugin.moduleHasSideEffects(
								resolveData.relativePath,
								sideEffects,
								/** @type {CacheItem} */ (cache)
							);
							module.factoryMeta.sideEffectFree = !hasSideEffects;
						}
					}

					return module;
				});
				normalModuleFactory.hooks.module.tap(PLUGIN_NAME, (module, data) => {
					const settings = /** @type {ModuleSettings} */ (data.settings);
					if (typeof settings.sideEffects === "boolean") {
						if (module.factoryMeta === undefined) {
							module.factoryMeta = {};
						}
						module.factoryMeta.sideEffectFree = !settings.sideEffects;
					}
					return module;
				});
				if (this._analyseSource) {
					/**
					 * @param {JavascriptParser} parser the parser
					 * @returns {void}
					 */
					const parserHandler = parser => {
						/** @type {undefined | Statement | ModuleDeclaration} */
						let sideEffectsStatement;
						parser.hooks.program.tap(PLUGIN_NAME, () => {
							sideEffectsStatement = undefined;
						});
						parser.hooks.statement.tap(
							{ name: PLUGIN_NAME, stage: -100 },
							statement => {
								if (sideEffectsStatement) return;
								if (parser.scope.topLevelScope !== true) return;
								switch (statement.type) {
									case "ExpressionStatement":
										if (
											!parser.isPure(
												statement.expression,
												/** @type {Range} */ (statement.range)[0]
											)
										) {
											sideEffectsStatement = statement;
										}
										break;
									case "IfStatement":
									case "WhileStatement":
									case "DoWhileStatement":
										if (
											!parser.isPure(
												statement.test,
												/** @type {Range} */ (statement.range)[0]
											)
										) {
											sideEffectsStatement = statement;
										}
										// statement hook will be called for child statements too
										break;
									case "ForStatement":
										if (
											!parser.isPure(
												statement.init,
												/** @type {Range} */ (statement.range)[0]
											) ||
											!parser.isPure(
												statement.test,
												statement.init
													? /** @type {Range} */ (statement.init.range)[1]
													: /** @type {Range} */ (statement.range)[0]
											) ||
											!parser.isPure(
												statement.update,
												statement.test
													? /** @type {Range} */ (statement.test.range)[1]
													: statement.init
														? /** @type {Range} */ (statement.init.range)[1]
														: /** @type {Range} */ (statement.range)[0]
											)
										) {
											sideEffectsStatement = statement;
										}
										// statement hook will be called for child statements too
										break;
									case "SwitchStatement":
										if (
											!parser.isPure(
												statement.discriminant,
												/** @type {Range} */ (statement.range)[0]
											)
										) {
											sideEffectsStatement = statement;
										}
										// statement hook will be called for child statements too
										break;
									case "VariableDeclaration":
									case "ClassDeclaration":
									case "FunctionDeclaration":
										if (
											!parser.isPure(
												statement,
												/** @type {Range} */ (statement.range)[0]
											)
										) {
											sideEffectsStatement = statement;
										}
										break;
									case "ExportNamedDeclaration":
									case "ExportDefaultDeclaration":
										if (
											!parser.isPure(
												/** @type {TODO} */
												(statement.declaration),
												/** @type {Range} */ (statement.range)[0]
											)
										) {
											sideEffectsStatement = statement;
										}
										break;
									case "LabeledStatement":
									case "BlockStatement":
										// statement hook will be called for child statements too
										break;
									case "EmptyStatement":
										break;
									case "ExportAllDeclaration":
									case "ImportDeclaration":
										// imports will be handled by the dependencies
										break;
									default:
										sideEffectsStatement = statement;
										break;
								}
							}
						);
						parser.hooks.finish.tap(PLUGIN_NAME, () => {
							if (sideEffectsStatement === undefined) {
								/** @type {BuildMeta} */
								(parser.state.module.buildMeta).sideEffectFree = true;
							} else {
								const { loc, type } = sideEffectsStatement;
								moduleGraph
									.getOptimizationBailout(parser.state.module)
									.push(
										() =>
											`Statement (${type}) with side effects in source code at ${formatLocation(
												/** @type {DependencyLocation} */ (loc)
											)}`
									);
							}
						});
					};
					for (const key of [
						JAVASCRIPT_MODULE_TYPE_AUTO,
						JAVASCRIPT_MODULE_TYPE_ESM,
						JAVASCRIPT_MODULE_TYPE_DYNAMIC
					]) {
						normalModuleFactory.hooks.parser
							.for(key)
							.tap(PLUGIN_NAME, parserHandler);
					}
				}
				compilation.hooks.optimizeDependencies.tap(
					{
						name: PLUGIN_NAME,
						stage: STAGE_DEFAULT
					},
					modules => {
						const logger = compilation.getLogger(
							"webpack.SideEffectsFlagPlugin"
						);

						logger.time("update dependencies");

						const optimizedModules = new Set();

						/**
						 * @param {Module} module module
						 */
						const optimizeIncomingConnections = module => {
							if (optimizedModules.has(module)) return;
							optimizedModules.add(module);
							if (module.getSideEffectsConnectionState(moduleGraph) === false) {
								const exportsInfo = moduleGraph.getExportsInfo(module);
								for (const connection of moduleGraph.getIncomingConnections(
									module
								)) {
									const dep = connection.dependency;
									let isReexport;
									if (
										(isReexport =
											dep instanceof
											HarmonyExportImportedSpecifierDependency) ||
										(dep instanceof HarmonyImportSpecifierDependency &&
											!dep.namespaceObjectAsContext)
									) {
										if (connection.originModule !== null) {
											optimizeIncomingConnections(connection.originModule);
										}
										// TODO improve for export *
										if (isReexport && dep.name) {
											const exportInfo = moduleGraph.getExportInfo(
												/** @type {Module} */ (connection.originModule),
												dep.name
											);
											exportInfo.moveTarget(
												moduleGraph,
												({ module }) =>
													module.getSideEffectsConnectionState(moduleGraph) ===
													false,
												({ module: newModule, export: exportName }) => {
													moduleGraph.updateModule(dep, newModule);
													moduleGraph.addExplanation(
														dep,
														"(skipped side-effect-free modules)"
													);
													const ids = dep.getIds(moduleGraph);
													dep.setIds(
														moduleGraph,
														exportName
															? [...exportName, ...ids.slice(1)]
															: ids.slice(1)
													);
													return /** @type {ModuleGraphConnection} */ (
														moduleGraph.getConnection(dep)
													);
												}
											);
											continue;
										}
										// TODO improve for nested imports
										const ids = dep.getIds(moduleGraph);
										if (ids.length > 0) {
											const exportInfo = exportsInfo.getExportInfo(ids[0]);
											const target = exportInfo.getTarget(
												moduleGraph,
												({ module }) =>
													module.getSideEffectsConnectionState(moduleGraph) ===
													false
											);
											if (!target) continue;

											moduleGraph.updateModule(dep, target.module);
											moduleGraph.addExplanation(
												dep,
												"(skipped side-effect-free modules)"
											);
											dep.setIds(
												moduleGraph,
												target.export
													? [...target.export, ...ids.slice(1)]
													: ids.slice(1)
											);
										}
									}
								}
							}
						};

						for (const module of modules) {
							optimizeIncomingConnections(module);
						}
						logger.timeEnd("update dependencies");
					}
				);
			}
		);
	}

	/**
	 * @param {string} moduleName the module name
	 * @param {undefined | boolean | string | string[]} flagValue the flag value
	 * @param {Map<string, RegExp>} cache cache for glob to regexp
	 * @returns {boolean | undefined} true, when the module has side effects, undefined or false when not
	 */
	static moduleHasSideEffects(moduleName, flagValue, cache) {
		switch (typeof flagValue) {
			case "undefined":
				return true;
			case "boolean":
				return flagValue;
			case "string":
				return globToRegexp(flagValue, cache).test(moduleName);
			case "object":
				return flagValue.some(glob =>
					SideEffectsFlagPlugin.moduleHasSideEffects(moduleName, glob, cache)
				);
		}
	}
}
module.exports = SideEffectsFlagPlugin;
