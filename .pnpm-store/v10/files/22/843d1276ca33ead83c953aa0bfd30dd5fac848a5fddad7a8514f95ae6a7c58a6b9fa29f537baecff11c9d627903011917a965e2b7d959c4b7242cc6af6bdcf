/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const RuntimeGlobals = require("../RuntimeGlobals");
const UnsupportedFeatureWarning = require("../UnsupportedFeatureWarning");
const AMDRequireArrayDependency = require("./AMDRequireArrayDependency");
const AMDRequireContextDependency = require("./AMDRequireContextDependency");
const AMDRequireDependenciesBlock = require("./AMDRequireDependenciesBlock");
const AMDRequireDependency = require("./AMDRequireDependency");
const AMDRequireItemDependency = require("./AMDRequireItemDependency");
const ConstDependency = require("./ConstDependency");
const ContextDependencyHelpers = require("./ContextDependencyHelpers");
const LocalModuleDependency = require("./LocalModuleDependency");
const { getLocalModule } = require("./LocalModulesHelpers");
const UnsupportedDependency = require("./UnsupportedDependency");
const getFunctionExpression = require("./getFunctionExpression");

/** @typedef {import("estree").CallExpression} CallExpression */
/** @typedef {import("estree").Expression} Expression */
/** @typedef {import("estree").Identifier} Identifier */
/** @typedef {import("estree").SourceLocation} SourceLocation */
/** @typedef {import("estree").SpreadElement} SpreadElement */
/** @typedef {import("../../declarations/WebpackOptions").JavascriptParserOptions} JavascriptParserOptions */
/** @typedef {import("../Dependency").DependencyLocation} DependencyLocation */
/** @typedef {import("../Module").BuildInfo} BuildInfo */
/** @typedef {import("../javascript/BasicEvaluatedExpression")} BasicEvaluatedExpression */
/** @typedef {import("../javascript/JavascriptParser")} JavascriptParser */
/** @typedef {import("../javascript/JavascriptParser").Range} Range */

class AMDRequireDependenciesBlockParserPlugin {
	/**
	 * @param {JavascriptParserOptions} options parserOptions
	 */
	constructor(options) {
		this.options = options;
	}

	/**
	 * @param {JavascriptParser} parser the parser
	 * @param {Expression | SpreadElement} expression expression
	 * @returns {boolean} need bind this
	 */
	processFunctionArgument(parser, expression) {
		let bindThis = true;
		const fnData = getFunctionExpression(expression);
		if (fnData) {
			parser.inScope(
				fnData.fn.params.filter(
					i =>
						!["require", "module", "exports"].includes(
							/** @type {Identifier} */ (i).name
						)
				),
				() => {
					if (fnData.fn.body.type === "BlockStatement") {
						parser.walkStatement(fnData.fn.body);
					} else {
						parser.walkExpression(fnData.fn.body);
					}
				}
			);
			parser.walkExpressions(fnData.expressions);
			if (fnData.needThis === false) {
				bindThis = false;
			}
		} else {
			parser.walkExpression(expression);
		}
		return bindThis;
	}

	/**
	 * @param {JavascriptParser} parser the parser
	 * @returns {void}
	 */
	apply(parser) {
		parser.hooks.call
			.for("require")
			.tap(
				"AMDRequireDependenciesBlockParserPlugin",
				this.processCallRequire.bind(this, parser)
			);
	}

	/**
	 * @param {JavascriptParser} parser the parser
	 * @param {CallExpression} expr call expression
	 * @param {BasicEvaluatedExpression} param param
	 * @returns {boolean | undefined} result
	 */
	processArray(parser, expr, param) {
		if (param.isArray()) {
			for (const p of /** @type {BasicEvaluatedExpression[]} */ (param.items)) {
				const result = this.processItem(parser, expr, p);
				if (result === undefined) {
					this.processContext(parser, expr, p);
				}
			}
			return true;
		} else if (param.isConstArray()) {
			/** @type {(string | LocalModuleDependency | AMDRequireItemDependency)[]} */
			const deps = [];
			for (const request of /** @type {any[]} */ (param.array)) {
				let dep;
				let localModule;
				if (request === "require") {
					dep = RuntimeGlobals.require;
				} else if (["exports", "module"].includes(request)) {
					dep = request;
				} else if ((localModule = getLocalModule(parser.state, request))) {
					localModule.flagUsed();
					dep = new LocalModuleDependency(localModule, undefined, false);
					dep.loc = /** @type {DependencyLocation} */ (expr.loc);
					parser.state.module.addPresentationalDependency(dep);
				} else {
					dep = this.newRequireItemDependency(request);
					dep.loc = /** @type {DependencyLocation} */ (expr.loc);
					dep.optional = Boolean(parser.scope.inTry);
					parser.state.current.addDependency(dep);
				}
				deps.push(dep);
			}
			const dep = this.newRequireArrayDependency(
				deps,
				/** @type {Range} */ (param.range)
			);
			dep.loc = /** @type {DependencyLocation} */ (expr.loc);
			dep.optional = Boolean(parser.scope.inTry);
			parser.state.module.addPresentationalDependency(dep);
			return true;
		}
	}

	/**
	 * @param {JavascriptParser} parser the parser
	 * @param {CallExpression} expr call expression
	 * @param {BasicEvaluatedExpression} param param
	 * @returns {boolean | undefined} result
	 */
	processItem(parser, expr, param) {
		if (param.isConditional()) {
			for (const p of /** @type {BasicEvaluatedExpression[]} */ (
				param.options
			)) {
				const result = this.processItem(parser, expr, p);
				if (result === undefined) {
					this.processContext(parser, expr, p);
				}
			}
			return true;
		} else if (param.isString()) {
			let dep;
			let localModule;
			if (param.string === "require") {
				dep = new ConstDependency(
					RuntimeGlobals.require,
					/** @type {TODO} */ (param.string),
					[RuntimeGlobals.require]
				);
			} else if (param.string === "module") {
				dep = new ConstDependency(
					/** @type {BuildInfo} */
					(parser.state.module.buildInfo).moduleArgument,
					/** @type {Range} */ (param.range),
					[RuntimeGlobals.module]
				);
			} else if (param.string === "exports") {
				dep = new ConstDependency(
					/** @type {BuildInfo} */
					(parser.state.module.buildInfo).exportsArgument,
					/** @type {Range} */ (param.range),
					[RuntimeGlobals.exports]
				);
			} else if (
				(localModule = getLocalModule(
					parser.state,
					/** @type {string} */ (param.string)
				))
			) {
				localModule.flagUsed();
				dep = new LocalModuleDependency(localModule, param.range, false);
			} else {
				dep = this.newRequireItemDependency(
					/** @type {string} */ (param.string),
					param.range
				);
				dep.loc = /** @type {DependencyLocation} */ (expr.loc);
				dep.optional = Boolean(parser.scope.inTry);
				parser.state.current.addDependency(dep);
				return true;
			}
			dep.loc = /** @type {DependencyLocation} */ (expr.loc);
			parser.state.module.addPresentationalDependency(dep);
			return true;
		}
	}

	/**
	 * @param {JavascriptParser} parser the parser
	 * @param {CallExpression} expr call expression
	 * @param {BasicEvaluatedExpression} param param
	 * @returns {boolean | undefined} result
	 */
	processContext(parser, expr, param) {
		const dep = ContextDependencyHelpers.create(
			AMDRequireContextDependency,
			/** @type {Range} */ (param.range),
			param,
			expr,
			this.options,
			{
				category: "amd"
			},
			parser
		);
		if (!dep) return;
		dep.loc = /** @type {DependencyLocation} */ (expr.loc);
		dep.optional = Boolean(parser.scope.inTry);
		parser.state.current.addDependency(dep);
		return true;
	}

	/**
	 * @param {BasicEvaluatedExpression} param param
	 * @returns {string | undefined} result
	 */
	processArrayForRequestString(param) {
		if (param.isArray()) {
			const result =
				/** @type {BasicEvaluatedExpression[]} */
				(param.items).map(item => this.processItemForRequestString(item));
			if (result.every(Boolean)) return result.join(" ");
		} else if (param.isConstArray()) {
			return /** @type {string[]} */ (param.array).join(" ");
		}
	}

	/**
	 * @param {BasicEvaluatedExpression} param param
	 * @returns {string | undefined} result
	 */
	processItemForRequestString(param) {
		if (param.isConditional()) {
			const result =
				/** @type {BasicEvaluatedExpression[]} */
				(param.options).map(item => this.processItemForRequestString(item));
			if (result.every(Boolean)) return result.join("|");
		} else if (param.isString()) {
			return param.string;
		}
	}

	/**
	 * @param {JavascriptParser} parser the parser
	 * @param {CallExpression} expr call expression
	 * @returns {boolean | undefined} result
	 */
	processCallRequire(parser, expr) {
		/** @type {BasicEvaluatedExpression | undefined} */
		let param;
		/** @type {AMDRequireDependenciesBlock | undefined | null} */
		let depBlock;
		/** @type {AMDRequireDependency | undefined} */
		let dep;
		/** @type {boolean | undefined} */
		let result;

		const old = parser.state.current;

		if (expr.arguments.length >= 1) {
			param = parser.evaluateExpression(
				/** @type {Expression} */ (expr.arguments[0])
			);
			depBlock = this.newRequireDependenciesBlock(
				/** @type {DependencyLocation} */ (expr.loc),
				this.processArrayForRequestString(param)
			);
			dep = this.newRequireDependency(
				/** @type {Range} */ (expr.range),
				/** @type {Range} */ (param.range),
				expr.arguments.length > 1
					? /** @type {Range} */ (expr.arguments[1].range)
					: null,
				expr.arguments.length > 2
					? /** @type {Range} */ (expr.arguments[2].range)
					: null
			);
			dep.loc = /** @type {DependencyLocation} */ (expr.loc);
			depBlock.addDependency(dep);

			parser.state.current = /** @type {TODO} */ (depBlock);
		}

		if (expr.arguments.length === 1) {
			parser.inScope([], () => {
				result = this.processArray(
					parser,
					expr,
					/** @type {BasicEvaluatedExpression} */ (param)
				);
			});
			parser.state.current = old;
			if (!result) return;
			parser.state.current.addBlock(
				/** @type {AMDRequireDependenciesBlock} */ (depBlock)
			);
			return true;
		}

		if (expr.arguments.length === 2 || expr.arguments.length === 3) {
			try {
				parser.inScope([], () => {
					result = this.processArray(
						parser,
						expr,
						/** @type {BasicEvaluatedExpression} */ (param)
					);
				});
				if (!result) {
					const dep = new UnsupportedDependency(
						"unsupported",
						/** @type {Range} */ (expr.range)
					);
					old.addPresentationalDependency(dep);
					if (parser.state.module) {
						parser.state.module.addError(
							new UnsupportedFeatureWarning(
								`Cannot statically analyse 'require(…, …)' in line ${
									/** @type {SourceLocation} */ (expr.loc).start.line
								}`,
								/** @type {DependencyLocation} */ (expr.loc)
							)
						);
					}
					depBlock = null;
					return true;
				}
				/** @type {AMDRequireDependency} */
				(dep).functionBindThis = this.processFunctionArgument(
					parser,
					expr.arguments[1]
				);
				if (expr.arguments.length === 3) {
					/** @type {AMDRequireDependency} */
					(dep).errorCallbackBindThis = this.processFunctionArgument(
						parser,
						expr.arguments[2]
					);
				}
			} finally {
				parser.state.current = old;
				if (depBlock) parser.state.current.addBlock(depBlock);
			}
			return true;
		}
	}

	/**
	 * @param {DependencyLocation} loc location
	 * @param {string=} request request
	 * @returns {AMDRequireDependenciesBlock} AMDRequireDependenciesBlock
	 */
	newRequireDependenciesBlock(loc, request) {
		return new AMDRequireDependenciesBlock(loc, request);
	}

	/**
	 * @param {Range} outerRange outer range
	 * @param {Range} arrayRange array range
	 * @param {Range | null} functionRange function range
	 * @param {Range | null} errorCallbackRange error callback range
	 * @returns {AMDRequireDependency} dependency
	 */
	newRequireDependency(
		outerRange,
		arrayRange,
		functionRange,
		errorCallbackRange
	) {
		return new AMDRequireDependency(
			outerRange,
			arrayRange,
			functionRange,
			errorCallbackRange
		);
	}

	/**
	 * @param {string} request request
	 * @param {Range=} range range
	 * @returns {AMDRequireItemDependency} AMDRequireItemDependency
	 */
	newRequireItemDependency(request, range) {
		return new AMDRequireItemDependency(request, range);
	}

	/**
	 * @param {(string | LocalModuleDependency | AMDRequireItemDependency)[]} depsArray deps array
	 * @param {Range} range range
	 * @returns {AMDRequireArrayDependency} AMDRequireArrayDependency
	 */
	newRequireArrayDependency(depsArray, range) {
		return new AMDRequireArrayDependency(depsArray, range);
	}
}
module.exports = AMDRequireDependenciesBlockParserPlugin;
