/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const InitFragment = require("./InitFragment");
const {
	JAVASCRIPT_MODULE_TYPE_AUTO,
	JAVASCRIPT_MODULE_TYPE_DYNAMIC,
	JAVASCRIPT_MODULE_TYPE_ESM
} = require("./ModuleTypeConstants");
const RuntimeGlobals = require("./RuntimeGlobals");
const WebpackError = require("./WebpackError");
const ConstDependency = require("./dependencies/ConstDependency");
const BasicEvaluatedExpression = require("./javascript/BasicEvaluatedExpression");
const JavascriptModulesPlugin = require("./javascript/JavascriptModulesPlugin");
const {
	toConstantDependency,
	evaluateToString
} = require("./javascript/JavascriptParserHelpers");
const ChunkNameRuntimeModule = require("./runtime/ChunkNameRuntimeModule");
const GetFullHashRuntimeModule = require("./runtime/GetFullHashRuntimeModule");

/** @typedef {import("./Compiler")} Compiler */
/** @typedef {import("./Dependency").DependencyLocation} DependencyLocation */
/** @typedef {import("./Module").BuildInfo} BuildInfo */
/** @typedef {import("./javascript/JavascriptParser")} JavascriptParser */
/** @typedef {import("./javascript/JavascriptParser").Range} Range */

/**
 * @param {boolean | undefined} module true if ES module
 * @param {string} importMetaName `import.meta` name
 * @returns {Record<string, {expr: string, req: string[] | null, type?: string, assign: boolean}>} replacements
 */
function getReplacements(module, importMetaName) {
	return {
		__webpack_require__: {
			expr: RuntimeGlobals.require,
			req: [RuntimeGlobals.require],
			type: "function",
			assign: false
		},
		__webpack_public_path__: {
			expr: RuntimeGlobals.publicPath,
			req: [RuntimeGlobals.publicPath],
			type: "string",
			assign: true
		},
		__webpack_base_uri__: {
			expr: RuntimeGlobals.baseURI,
			req: [RuntimeGlobals.baseURI],
			type: "string",
			assign: true
		},
		__webpack_modules__: {
			expr: RuntimeGlobals.moduleFactories,
			req: [RuntimeGlobals.moduleFactories],
			type: "object",
			assign: false
		},
		__webpack_chunk_load__: {
			expr: RuntimeGlobals.ensureChunk,
			req: [RuntimeGlobals.ensureChunk],
			type: "function",
			assign: true
		},
		__non_webpack_require__: {
			expr: module
				? `__WEBPACK_EXTERNAL_createRequire(${importMetaName}.url)`
				: "require",
			req: null,
			type: undefined, // type is not known, depends on environment
			assign: true
		},
		__webpack_nonce__: {
			expr: RuntimeGlobals.scriptNonce,
			req: [RuntimeGlobals.scriptNonce],
			type: "string",
			assign: true
		},
		__webpack_hash__: {
			expr: `${RuntimeGlobals.getFullHash}()`,
			req: [RuntimeGlobals.getFullHash],
			type: "string",
			assign: false
		},
		__webpack_chunkname__: {
			expr: RuntimeGlobals.chunkName,
			req: [RuntimeGlobals.chunkName],
			type: "string",
			assign: false
		},
		__webpack_get_script_filename__: {
			expr: RuntimeGlobals.getChunkScriptFilename,
			req: [RuntimeGlobals.getChunkScriptFilename],
			type: "function",
			assign: true
		},
		__webpack_runtime_id__: {
			expr: RuntimeGlobals.runtimeId,
			req: [RuntimeGlobals.runtimeId],
			assign: false
		},
		"require.onError": {
			expr: RuntimeGlobals.uncaughtErrorHandler,
			req: [RuntimeGlobals.uncaughtErrorHandler],
			type: undefined, // type is not known, could be function or undefined
			assign: true // is never a pattern
		},
		__system_context__: {
			expr: RuntimeGlobals.systemContext,
			req: [RuntimeGlobals.systemContext],
			type: "object",
			assign: false
		},
		__webpack_share_scopes__: {
			expr: RuntimeGlobals.shareScopeMap,
			req: [RuntimeGlobals.shareScopeMap],
			type: "object",
			assign: false
		},
		__webpack_init_sharing__: {
			expr: RuntimeGlobals.initializeSharing,
			req: [RuntimeGlobals.initializeSharing],
			type: "function",
			assign: true
		}
	};
}

const PLUGIN_NAME = "APIPlugin";

/**
 * @typedef {object} APIPluginOptions
 * @property {boolean} [module] the output filename
 */

class APIPlugin {
	/**
	 * @param {APIPluginOptions} [options] options
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
			PLUGIN_NAME,
			(compilation, { normalModuleFactory }) => {
				const importMetaName = /** @type {string} */ (
					compilation.outputOptions.importMetaName
				);
				const REPLACEMENTS = getReplacements(
					this.options.module,
					importMetaName
				);

				compilation.dependencyTemplates.set(
					ConstDependency,
					new ConstDependency.Template()
				);

				compilation.hooks.runtimeRequirementInTree
					.for(RuntimeGlobals.chunkName)
					.tap(PLUGIN_NAME, chunk => {
						compilation.addRuntimeModule(
							chunk,
							new ChunkNameRuntimeModule(/** @type {string} */ (chunk.name))
						);
						return true;
					});

				compilation.hooks.runtimeRequirementInTree
					.for(RuntimeGlobals.getFullHash)
					.tap(PLUGIN_NAME, (chunk, set) => {
						compilation.addRuntimeModule(chunk, new GetFullHashRuntimeModule());
						return true;
					});

				const hooks = JavascriptModulesPlugin.getCompilationHooks(compilation);

				hooks.renderModuleContent.tap(
					PLUGIN_NAME,
					(source, module, renderContext) => {
						if (/** @type {BuildInfo} */ (module.buildInfo).needCreateRequire) {
							const needPrefix =
								renderContext.runtimeTemplate.supportNodePrefixForCoreModules();
							const chunkInitFragments = [
								new InitFragment(
									`import { createRequire as __WEBPACK_EXTERNAL_createRequire } from "${
										needPrefix ? "node:" : ""
									}module";\n`,
									InitFragment.STAGE_HARMONY_IMPORTS,
									0,
									"external module node-commonjs"
								)
							];

							renderContext.chunkInitFragments.push(...chunkInitFragments);
						}

						return source;
					}
				);

				/**
				 * @param {JavascriptParser} parser the parser
				 */
				const handler = parser => {
					for (const key of Object.keys(REPLACEMENTS)) {
						const info = REPLACEMENTS[key];
						parser.hooks.expression.for(key).tap(PLUGIN_NAME, expression => {
							const dep = toConstantDependency(parser, info.expr, info.req);

							if (key === "__non_webpack_require__" && this.options.module) {
								/** @type {BuildInfo} */
								(parser.state.module.buildInfo).needCreateRequire = true;
							}

							return dep(expression);
						});
						if (info.assign === false) {
							parser.hooks.assign.for(key).tap(PLUGIN_NAME, expr => {
								const err = new WebpackError(`${key} must not be assigned`);
								err.loc = /** @type {DependencyLocation} */ (expr.loc);
								throw err;
							});
						}
						if (info.type) {
							parser.hooks.evaluateTypeof
								.for(key)
								.tap(PLUGIN_NAME, evaluateToString(info.type));
						}
					}

					parser.hooks.expression
						.for("__webpack_layer__")
						.tap(PLUGIN_NAME, expr => {
							const dep = new ConstDependency(
								JSON.stringify(parser.state.module.layer),
								/** @type {Range} */ (expr.range)
							);
							dep.loc = /** @type {DependencyLocation} */ (expr.loc);
							parser.state.module.addPresentationalDependency(dep);
							return true;
						});
					parser.hooks.evaluateIdentifier
						.for("__webpack_layer__")
						.tap(PLUGIN_NAME, expr =>
							(parser.state.module.layer === null
								? new BasicEvaluatedExpression().setNull()
								: new BasicEvaluatedExpression().setString(
										parser.state.module.layer
									)
							).setRange(/** @type {Range} */ (expr.range))
						);
					parser.hooks.evaluateTypeof
						.for("__webpack_layer__")
						.tap(PLUGIN_NAME, expr =>
							new BasicEvaluatedExpression()
								.setString(
									parser.state.module.layer === null ? "object" : "string"
								)
								.setRange(/** @type {Range} */ (expr.range))
						);

					parser.hooks.expression
						.for("__webpack_module__.id")
						.tap(PLUGIN_NAME, expr => {
							/** @type {BuildInfo} */
							(parser.state.module.buildInfo).moduleConcatenationBailout =
								"__webpack_module__.id";
							const dep = new ConstDependency(
								`${parser.state.module.moduleArgument}.id`,
								/** @type {Range} */ (expr.range),
								[RuntimeGlobals.moduleId]
							);
							dep.loc = /** @type {DependencyLocation} */ (expr.loc);
							parser.state.module.addPresentationalDependency(dep);
							return true;
						});

					parser.hooks.expression
						.for("__webpack_module__")
						.tap(PLUGIN_NAME, expr => {
							/** @type {BuildInfo} */
							(parser.state.module.buildInfo).moduleConcatenationBailout =
								"__webpack_module__";
							const dep = new ConstDependency(
								parser.state.module.moduleArgument,
								/** @type {Range} */ (expr.range),
								[RuntimeGlobals.module]
							);
							dep.loc = /** @type {DependencyLocation} */ (expr.loc);
							parser.state.module.addPresentationalDependency(dep);
							return true;
						});
					parser.hooks.evaluateTypeof
						.for("__webpack_module__")
						.tap(PLUGIN_NAME, evaluateToString("object"));
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

module.exports = APIPlugin;
