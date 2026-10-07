/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { fileURLToPath } = require("url");
const CommentCompilationWarning = require("../CommentCompilationWarning");
const RuntimeGlobals = require("../RuntimeGlobals");
const UnsupportedFeatureWarning = require("../UnsupportedFeatureWarning");
const WebpackError = require("../WebpackError");
const BasicEvaluatedExpression = require("../javascript/BasicEvaluatedExpression");
const {
	evaluateToIdentifier,
	evaluateToString,
	expressionIsUnsupported,
	toConstantDependency
} = require("../javascript/JavascriptParserHelpers");
const CommonJsFullRequireDependency = require("./CommonJsFullRequireDependency");
const CommonJsRequireContextDependency = require("./CommonJsRequireContextDependency");
const CommonJsRequireDependency = require("./CommonJsRequireDependency");
const ConstDependency = require("./ConstDependency");
const ContextDependencyHelpers = require("./ContextDependencyHelpers");
const LocalModuleDependency = require("./LocalModuleDependency");
const { getLocalModule } = require("./LocalModulesHelpers");
const RequireHeaderDependency = require("./RequireHeaderDependency");
const RequireResolveContextDependency = require("./RequireResolveContextDependency");
const RequireResolveDependency = require("./RequireResolveDependency");
const RequireResolveHeaderDependency = require("./RequireResolveHeaderDependency");

/** @typedef {import("estree").CallExpression} CallExpression */
/** @typedef {import("estree").Expression} Expression */
/** @typedef {import("estree").NewExpression} NewExpression */
/** @typedef {import("../../declarations/WebpackOptions").JavascriptParserOptions} JavascriptParserOptions */
/** @typedef {import("../Dependency").DependencyLocation} DependencyLocation */
/** @typedef {import("../javascript/JavascriptParser")} JavascriptParser */
/** @typedef {import("../javascript/JavascriptParser").ImportSource} ImportSource */
/** @typedef {import("../javascript/JavascriptParser").Range} Range */

const createRequireSpecifierTag = Symbol("createRequire");
const createdRequireIdentifierTag = Symbol("createRequire()");

class CommonJsImportsParserPlugin {
	/**
	 * @param {JavascriptParserOptions} options parser options
	 */
	constructor(options) {
		this.options = options;
	}

	/**
	 * @param {JavascriptParser} parser the parser
	 * @returns {void}
	 */
	apply(parser) {
		const options = this.options;

		const getContext = () => {
			if (parser.currentTagData) {
				const { context } = parser.currentTagData;
				return context;
			}
		};

		// #region metadata
		/**
		 * @param {string} expression expression
		 * @param {() => string[]} getMembers get members
		 */
		const tapRequireExpression = (expression, getMembers) => {
			parser.hooks.typeof
				.for(expression)
				.tap(
					"CommonJsImportsParserPlugin",
					toConstantDependency(parser, JSON.stringify("function"))
				);
			parser.hooks.evaluateTypeof
				.for(expression)
				.tap("CommonJsImportsParserPlugin", evaluateToString("function"));
			parser.hooks.evaluateIdentifier
				.for(expression)
				.tap(
					"CommonJsImportsParserPlugin",
					evaluateToIdentifier(expression, "require", getMembers, true)
				);
		};
		/**
		 * @param {string | symbol} tag tag
		 */
		const tapRequireExpressionTag = tag => {
			parser.hooks.typeof
				.for(tag)
				.tap(
					"CommonJsImportsParserPlugin",
					toConstantDependency(parser, JSON.stringify("function"))
				);
			parser.hooks.evaluateTypeof
				.for(tag)
				.tap("CommonJsImportsParserPlugin", evaluateToString("function"));
		};
		tapRequireExpression("require", () => []);
		tapRequireExpression("require.resolve", () => ["resolve"]);
		tapRequireExpression("require.resolveWeak", () => ["resolveWeak"]);
		// #endregion

		// Weird stuff //
		parser.hooks.assign
			.for("require")
			.tap("CommonJsImportsParserPlugin", expr => {
				// to not leak to global "require", we need to define a local require here.
				const dep = new ConstDependency("var require;", 0);
				dep.loc = /** @type {DependencyLocation} */ (expr.loc);
				parser.state.module.addPresentationalDependency(dep);
				return true;
			});

		// #region Unsupported
		parser.hooks.expression
			.for("require.main")
			.tap(
				"CommonJsImportsParserPlugin",
				expressionIsUnsupported(
					parser,
					"require.main is not supported by webpack."
				)
			);
		parser.hooks.call
			.for("require.main.require")
			.tap(
				"CommonJsImportsParserPlugin",
				expressionIsUnsupported(
					parser,
					"require.main.require is not supported by webpack."
				)
			);
		parser.hooks.expression
			.for("module.parent.require")
			.tap(
				"CommonJsImportsParserPlugin",
				expressionIsUnsupported(
					parser,
					"module.parent.require is not supported by webpack."
				)
			);
		parser.hooks.call
			.for("module.parent.require")
			.tap(
				"CommonJsImportsParserPlugin",
				expressionIsUnsupported(
					parser,
					"module.parent.require is not supported by webpack."
				)
			);
		// #endregion

		// #region Renaming
		/**
		 * @param {Expression} expr expression
		 * @returns {boolean} true when set undefined
		 */
		const defineUndefined = expr => {
			// To avoid "not defined" error, replace the value with undefined
			const dep = new ConstDependency(
				"undefined",
				/** @type {Range} */ (expr.range)
			);
			dep.loc = /** @type {DependencyLocation} */ (expr.loc);
			parser.state.module.addPresentationalDependency(dep);
			return false;
		};
		parser.hooks.canRename
			.for("require")
			.tap("CommonJsImportsParserPlugin", () => true);
		parser.hooks.rename
			.for("require")
			.tap("CommonJsImportsParserPlugin", defineUndefined);
		// #endregion

		// #region Inspection
		const requireCache = toConstantDependency(
			parser,
			RuntimeGlobals.moduleCache,
			[
				RuntimeGlobals.moduleCache,
				RuntimeGlobals.moduleId,
				RuntimeGlobals.moduleLoaded
			]
		);

		parser.hooks.expression
			.for("require.cache")
			.tap("CommonJsImportsParserPlugin", requireCache);
		// #endregion

		// #region Require as expression
		/**
		 * @param {Expression} expr expression
		 * @returns {boolean} true when handled
		 */
		const requireAsExpressionHandler = expr => {
			const dep = new CommonJsRequireContextDependency(
				{
					request: options.unknownContextRequest,
					recursive: options.unknownContextRecursive,
					regExp: options.unknownContextRegExp,
					mode: "sync"
				},
				/** @type {Range} */ (expr.range),
				undefined,
				parser.scope.inShorthand,
				getContext()
			);
			dep.critical =
				options.unknownContextCritical &&
				"require function is used in a way in which dependencies cannot be statically extracted";
			dep.loc = /** @type {DependencyLocation} */ (expr.loc);
			dep.optional = Boolean(parser.scope.inTry);
			parser.state.current.addDependency(dep);
			return true;
		};
		parser.hooks.expression
			.for("require")
			.tap("CommonJsImportsParserPlugin", requireAsExpressionHandler);
		// #endregion

		// #region Require
		/**
		 * @param {CallExpression | NewExpression} expr expression
		 * @param {BasicEvaluatedExpression} param param
		 * @returns {boolean | void} true when handled
		 */
		const processRequireItem = (expr, param) => {
			if (param.isString()) {
				const dep = new CommonJsRequireDependency(
					/** @type {string} */ (param.string),
					/** @type {Range} */ (param.range),
					getContext()
				);
				dep.loc = /** @type {DependencyLocation} */ (expr.loc);
				dep.optional = Boolean(parser.scope.inTry);
				parser.state.current.addDependency(dep);
				return true;
			}
		};
		/**
		 * @param {CallExpression | NewExpression} expr expression
		 * @param {BasicEvaluatedExpression} param param
		 * @returns {boolean | void} true when handled
		 */
		const processRequireContext = (expr, param) => {
			const dep = ContextDependencyHelpers.create(
				CommonJsRequireContextDependency,
				/** @type {Range} */ (expr.range),
				param,
				expr,
				options,
				{
					category: "commonjs"
				},
				parser,
				undefined,
				getContext()
			);
			if (!dep) return;
			dep.loc = /** @type {DependencyLocation} */ (expr.loc);
			dep.optional = Boolean(parser.scope.inTry);
			parser.state.current.addDependency(dep);
			return true;
		};
		/**
		 * @param {boolean} callNew true, when require is called with new
		 * @returns {(expr: CallExpression | NewExpression) => (boolean | void)} handler
		 */
		const createRequireHandler = callNew => expr => {
			if (options.commonjsMagicComments) {
				const { options: requireOptions, errors: commentErrors } =
					parser.parseCommentOptions(/** @type {Range} */ (expr.range));

				if (commentErrors) {
					for (const e of commentErrors) {
						const { comment } = e;
						parser.state.module.addWarning(
							new CommentCompilationWarning(
								`Compilation error while processing magic comment(-s): /*${comment.value}*/: ${e.message}`,
								/** @type {DependencyLocation} */ (comment.loc)
							)
						);
					}
				}
				if (requireOptions && requireOptions.webpackIgnore !== undefined) {
					if (typeof requireOptions.webpackIgnore !== "boolean") {
						parser.state.module.addWarning(
							new UnsupportedFeatureWarning(
								`\`webpackIgnore\` expected a boolean, but received: ${requireOptions.webpackIgnore}.`,
								/** @type {DependencyLocation} */ (expr.loc)
							)
						);
					} else if (requireOptions.webpackIgnore) {
						// Do not instrument `require()` if `webpackIgnore` is `true`
						return true;
					}
				}
			}

			if (expr.arguments.length !== 1) return;
			let localModule;
			const param = parser.evaluateExpression(expr.arguments[0]);
			if (param.isConditional()) {
				let isExpression = false;
				for (const p of /** @type {BasicEvaluatedExpression[]} */ (
					param.options
				)) {
					const result = processRequireItem(expr, p);
					if (result === undefined) {
						isExpression = true;
					}
				}
				if (!isExpression) {
					const dep = new RequireHeaderDependency(
						/** @type {Range} */ (expr.callee.range)
					);
					dep.loc = /** @type {DependencyLocation} */ (expr.loc);
					parser.state.module.addPresentationalDependency(dep);
					return true;
				}
			}
			if (
				param.isString() &&
				(localModule = getLocalModule(
					parser.state,
					/** @type {string} */ (param.string)
				))
			) {
				localModule.flagUsed();
				const dep = new LocalModuleDependency(
					localModule,
					/** @type {Range} */ (expr.range),
					callNew
				);
				dep.loc = /** @type {DependencyLocation} */ (expr.loc);
				parser.state.module.addPresentationalDependency(dep);
			} else {
				const result = processRequireItem(expr, param);
				if (result === undefined) {
					processRequireContext(expr, param);
				} else {
					const dep = new RequireHeaderDependency(
						/** @type {Range} */ (expr.callee.range)
					);
					dep.loc = /** @type {DependencyLocation} */ (expr.loc);
					parser.state.module.addPresentationalDependency(dep);
				}
			}
			return true;
		};
		parser.hooks.call
			.for("require")
			.tap("CommonJsImportsParserPlugin", createRequireHandler(false));
		parser.hooks.new
			.for("require")
			.tap("CommonJsImportsParserPlugin", createRequireHandler(true));
		parser.hooks.call
			.for("module.require")
			.tap("CommonJsImportsParserPlugin", createRequireHandler(false));
		parser.hooks.new
			.for("module.require")
			.tap("CommonJsImportsParserPlugin", createRequireHandler(true));
		// #endregion

		// #region Require with property access
		/**
		 * @param {Expression} expr expression
		 * @param {string[]} calleeMembers callee members
		 * @param {CallExpression} callExpr call expression
		 * @param {string[]} members members
		 * @param {Range[]} memberRanges member ranges
		 * @returns {boolean | void} true when handled
		 */
		const chainHandler = (
			expr,
			calleeMembers,
			callExpr,
			members,
			memberRanges
		) => {
			if (callExpr.arguments.length !== 1) return;
			const param = parser.evaluateExpression(callExpr.arguments[0]);
			if (
				param.isString() &&
				!getLocalModule(parser.state, /** @type {string} */ (param.string))
			) {
				const dep = new CommonJsFullRequireDependency(
					/** @type {string} */ (param.string),
					/** @type {Range} */ (expr.range),
					members,
					/** @type {Range[]} */ memberRanges
				);
				dep.asiSafe = !parser.isAsiPosition(
					/** @type {Range} */ (expr.range)[0]
				);
				dep.optional = Boolean(parser.scope.inTry);
				dep.loc = /** @type {DependencyLocation} */ (expr.loc);
				parser.state.current.addDependency(dep);
				return true;
			}
		};
		/**
		 * @param {CallExpression} expr expression
		 * @param {string[]} calleeMembers callee members
		 * @param {CallExpression} callExpr call expression
		 * @param {string[]} members members
		 * @param {Range[]} memberRanges member ranges
		 * @returns {boolean | void} true when handled
		 */
		const callChainHandler = (
			expr,
			calleeMembers,
			callExpr,
			members,
			memberRanges
		) => {
			if (callExpr.arguments.length !== 1) return;
			const param = parser.evaluateExpression(callExpr.arguments[0]);
			if (
				param.isString() &&
				!getLocalModule(parser.state, /** @type {string} */ (param.string))
			) {
				const dep = new CommonJsFullRequireDependency(
					/** @type {string} */ (param.string),
					/** @type {Range} */ (expr.callee.range),
					members,
					/** @type {Range[]} */ memberRanges
				);
				dep.call = true;
				dep.asiSafe = !parser.isAsiPosition(
					/** @type {Range} */ (expr.range)[0]
				);
				dep.optional = Boolean(parser.scope.inTry);
				dep.loc = /** @type {DependencyLocation} */ (expr.callee.loc);
				parser.state.current.addDependency(dep);
				parser.walkExpressions(expr.arguments);
				return true;
			}
		};
		parser.hooks.memberChainOfCallMemberChain
			.for("require")
			.tap("CommonJsImportsParserPlugin", chainHandler);
		parser.hooks.memberChainOfCallMemberChain
			.for("module.require")
			.tap("CommonJsImportsParserPlugin", chainHandler);
		parser.hooks.callMemberChainOfCallMemberChain
			.for("require")
			.tap("CommonJsImportsParserPlugin", callChainHandler);
		parser.hooks.callMemberChainOfCallMemberChain
			.for("module.require")
			.tap("CommonJsImportsParserPlugin", callChainHandler);
		// #endregion

		// #region Require.resolve
		/**
		 * @param {CallExpression} expr call expression
		 * @param {boolean} weak weak
		 * @returns {boolean | void} true when handled
		 */
		const processResolve = (expr, weak) => {
			if (!weak && options.commonjsMagicComments) {
				const { options: requireOptions, errors: commentErrors } =
					parser.parseCommentOptions(/** @type {Range} */ (expr.range));

				if (commentErrors) {
					for (const e of commentErrors) {
						const { comment } = e;
						parser.state.module.addWarning(
							new CommentCompilationWarning(
								`Compilation error while processing magic comment(-s): /*${comment.value}*/: ${e.message}`,
								/** @type {DependencyLocation} */ (comment.loc)
							)
						);
					}
				}
				if (requireOptions && requireOptions.webpackIgnore !== undefined) {
					if (typeof requireOptions.webpackIgnore !== "boolean") {
						parser.state.module.addWarning(
							new UnsupportedFeatureWarning(
								`\`webpackIgnore\` expected a boolean, but received: ${requireOptions.webpackIgnore}.`,
								/** @type {DependencyLocation} */ (expr.loc)
							)
						);
					} else if (requireOptions.webpackIgnore) {
						// Do not instrument `require()` if `webpackIgnore` is `true`
						return true;
					}
				}
			}

			if (expr.arguments.length !== 1) return;
			const param = parser.evaluateExpression(expr.arguments[0]);
			if (param.isConditional()) {
				for (const option of /** @type {BasicEvaluatedExpression[]} */ (
					param.options
				)) {
					const result = processResolveItem(expr, option, weak);
					if (result === undefined) {
						processResolveContext(expr, option, weak);
					}
				}
				const dep = new RequireResolveHeaderDependency(
					/** @type {Range} */ (expr.callee.range)
				);
				dep.loc = /** @type {DependencyLocation} */ (expr.loc);
				parser.state.module.addPresentationalDependency(dep);
				return true;
			}
			const result = processResolveItem(expr, param, weak);
			if (result === undefined) {
				processResolveContext(expr, param, weak);
			}
			const dep = new RequireResolveHeaderDependency(
				/** @type {Range} */ (expr.callee.range)
			);
			dep.loc = /** @type {DependencyLocation} */ (expr.loc);
			parser.state.module.addPresentationalDependency(dep);
			return true;
		};
		/**
		 * @param {CallExpression} expr call expression
		 * @param {BasicEvaluatedExpression} param param
		 * @param {boolean} weak weak
		 * @returns {boolean | void} true when handled
		 */
		const processResolveItem = (expr, param, weak) => {
			if (param.isString()) {
				const dep = new RequireResolveDependency(
					/** @type {string} */ (param.string),
					/** @type {Range} */ (param.range),
					getContext()
				);
				dep.loc = /** @type {DependencyLocation} */ (expr.loc);
				dep.optional = Boolean(parser.scope.inTry);
				dep.weak = weak;
				parser.state.current.addDependency(dep);
				return true;
			}
		};
		/**
		 * @param {CallExpression} expr call expression
		 * @param {BasicEvaluatedExpression} param param
		 * @param {boolean} weak weak
		 * @returns {boolean | void} true when handled
		 */
		const processResolveContext = (expr, param, weak) => {
			const dep = ContextDependencyHelpers.create(
				RequireResolveContextDependency,
				/** @type {Range} */ (param.range),
				param,
				expr,
				options,
				{
					category: "commonjs",
					mode: weak ? "weak" : "sync"
				},
				parser,
				getContext()
			);
			if (!dep) return;
			dep.loc = /** @type {DependencyLocation} */ (expr.loc);
			dep.optional = Boolean(parser.scope.inTry);
			parser.state.current.addDependency(dep);
			return true;
		};

		parser.hooks.call
			.for("require.resolve")
			.tap("CommonJsImportsParserPlugin", expr => processResolve(expr, false));
		parser.hooks.call
			.for("require.resolveWeak")
			.tap("CommonJsImportsParserPlugin", expr => processResolve(expr, true));
		// #endregion

		// #region Create require

		if (!options.createRequire) return;

		/** @type {ImportSource[]} */
		let moduleName = [];
		/** @type {string | undefined} */
		let specifierName;

		if (options.createRequire === true) {
			moduleName = ["module", "node:module"];
			specifierName = "createRequire";
		} else {
			let moduleName;
			const match = /^(.*) from (.*)$/.exec(options.createRequire);
			if (match) {
				[, specifierName, moduleName] = match;
			}
			if (!specifierName || !moduleName) {
				const err = new WebpackError(
					`Parsing javascript parser option "createRequire" failed, got ${JSON.stringify(
						options.createRequire
					)}`
				);
				err.details =
					'Expected string in format "createRequire from module", where "createRequire" is specifier name and "module" name of the module';
				throw err;
			}
		}

		tapRequireExpressionTag(createdRequireIdentifierTag);
		tapRequireExpressionTag(createRequireSpecifierTag);
		parser.hooks.evaluateCallExpression
			.for(createRequireSpecifierTag)
			.tap("CommonJsImportsParserPlugin", expr => {
				const context = parseCreateRequireArguments(expr);
				if (context === undefined) return;
				const ident = parser.evaluatedVariable({
					tag: createdRequireIdentifierTag,
					data: { context },
					next: undefined
				});

				return new BasicEvaluatedExpression()
					.setIdentifier(ident, ident, () => [])
					.setSideEffects(false)
					.setRange(/** @type {Range} */ (expr.range));
			});
		parser.hooks.unhandledExpressionMemberChain
			.for(createdRequireIdentifierTag)
			.tap("CommonJsImportsParserPlugin", (expr, members) =>
				expressionIsUnsupported(
					parser,
					`createRequire().${members.join(".")} is not supported by webpack.`
				)(expr)
			);
		parser.hooks.canRename
			.for(createdRequireIdentifierTag)
			.tap("CommonJsImportsParserPlugin", () => true);
		parser.hooks.canRename
			.for(createRequireSpecifierTag)
			.tap("CommonJsImportsParserPlugin", () => true);
		parser.hooks.rename
			.for(createRequireSpecifierTag)
			.tap("CommonJsImportsParserPlugin", defineUndefined);
		parser.hooks.expression
			.for(createdRequireIdentifierTag)
			.tap("CommonJsImportsParserPlugin", requireAsExpressionHandler);
		parser.hooks.call
			.for(createdRequireIdentifierTag)
			.tap("CommonJsImportsParserPlugin", createRequireHandler(false));
		/**
		 * @param {CallExpression} expr call expression
		 * @returns {string | void} context
		 */
		const parseCreateRequireArguments = expr => {
			const args = expr.arguments;
			if (args.length !== 1) {
				const err = new WebpackError(
					"module.createRequire supports only one argument."
				);
				err.loc = /** @type {DependencyLocation} */ (expr.loc);
				parser.state.module.addWarning(err);
				return;
			}
			const arg = args[0];
			const evaluated = parser.evaluateExpression(arg);
			if (!evaluated.isString()) {
				const err = new WebpackError(
					"module.createRequire failed parsing argument."
				);
				err.loc = /** @type {DependencyLocation} */ (arg.loc);
				parser.state.module.addWarning(err);
				return;
			}
			const ctx = /** @type {string} */ (evaluated.string).startsWith("file://")
				? fileURLToPath(/** @type {string} */ (evaluated.string))
				: /** @type {string} */ (evaluated.string);
			// argument always should be a filename
			return ctx.slice(0, ctx.lastIndexOf(ctx.startsWith("/") ? "/" : "\\"));
		};

		parser.hooks.import.tap(
			{
				name: "CommonJsImportsParserPlugin",
				stage: -10
			},
			(statement, source) => {
				if (
					!moduleName.includes(source) ||
					statement.specifiers.length !== 1 ||
					statement.specifiers[0].type !== "ImportSpecifier" ||
					statement.specifiers[0].imported.type !== "Identifier" ||
					statement.specifiers[0].imported.name !== specifierName
				)
					return;
				// clear for 'import { createRequire as x } from "module"'
				// if any other specifier was used import module
				const clearDep = new ConstDependency(
					parser.isAsiPosition(/** @type {Range} */ (statement.range)[0])
						? ";"
						: "",
					/** @type {Range} */ (statement.range)
				);
				clearDep.loc = /** @type {DependencyLocation} */ (statement.loc);
				parser.state.module.addPresentationalDependency(clearDep);
				parser.unsetAsiPosition(/** @type {Range} */ (statement.range)[1]);
				return true;
			}
		);
		parser.hooks.importSpecifier.tap(
			{
				name: "CommonJsImportsParserPlugin",
				stage: -10
			},
			(statement, source, id, name) => {
				if (!moduleName.includes(source) || id !== specifierName) return;
				parser.tagVariable(name, createRequireSpecifierTag);
				return true;
			}
		);
		parser.hooks.preDeclarator.tap(
			"CommonJsImportsParserPlugin",
			declarator => {
				if (
					declarator.id.type !== "Identifier" ||
					!declarator.init ||
					declarator.init.type !== "CallExpression" ||
					declarator.init.callee.type !== "Identifier"
				)
					return;
				const variableInfo =
					/** @type {TODO} */
					(parser.getVariableInfo(declarator.init.callee.name));
				if (
					variableInfo &&
					variableInfo.tagInfo &&
					variableInfo.tagInfo.tag === createRequireSpecifierTag
				) {
					const context = parseCreateRequireArguments(declarator.init);
					if (context === undefined) return;
					parser.tagVariable(declarator.id.name, createdRequireIdentifierTag, {
						name: declarator.id.name,
						context
					});
					return true;
				}
			}
		);

		parser.hooks.memberChainOfCallMemberChain
			.for(createRequireSpecifierTag)
			.tap(
				"CommonJsImportsParserPlugin",
				(expr, calleeMembers, callExpr, members) => {
					if (
						calleeMembers.length !== 0 ||
						members.length !== 1 ||
						members[0] !== "cache"
					)
						return;
					// createRequire().cache
					const context = parseCreateRequireArguments(callExpr);
					if (context === undefined) return;
					return requireCache(expr);
				}
			);
		parser.hooks.callMemberChainOfCallMemberChain
			.for(createRequireSpecifierTag)
			.tap(
				"CommonJsImportsParserPlugin",
				(expr, calleeMembers, innerCallExpression, members) => {
					if (
						calleeMembers.length !== 0 ||
						members.length !== 1 ||
						members[0] !== "resolve"
					)
						return;
					// createRequire().resolve()
					return processResolve(expr, false);
				}
			);
		parser.hooks.expressionMemberChain
			.for(createdRequireIdentifierTag)
			.tap("CommonJsImportsParserPlugin", (expr, members) => {
				// require.cache
				if (members.length === 1 && members[0] === "cache") {
					return requireCache(expr);
				}
			});
		parser.hooks.callMemberChain
			.for(createdRequireIdentifierTag)
			.tap("CommonJsImportsParserPlugin", (expr, members) => {
				// require.resolve()
				if (members.length === 1 && members[0] === "resolve") {
					return processResolve(expr, false);
				}
			});
		parser.hooks.call
			.for(createRequireSpecifierTag)
			.tap("CommonJsImportsParserPlugin", expr => {
				const clearDep = new ConstDependency(
					"/* createRequire() */ undefined",
					/** @type {Range} */ (expr.range)
				);
				clearDep.loc = /** @type {DependencyLocation} */ (expr.loc);
				parser.state.module.addPresentationalDependency(clearDep);
				return true;
			});
		// #endregion
	}
}
module.exports = CommonJsImportsParserPlugin;
