/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { fileURLToPath } = require("url");
const WebpackError = require("../WebpackError");
const BasicEvaluatedExpression = require("../javascript/BasicEvaluatedExpression");
const { VariableInfo } = require("../javascript/JavascriptParser");
const {
	evaluateToString,
	expressionIsUnsupported,
	toConstantDependency
} = require("../javascript/JavascriptParserHelpers");
const CommonJsImportsParserPlugin = require("./CommonJsImportsParserPlugin");
const ConstDependency = require("./ConstDependency");

/** @typedef {import("estree").CallExpression} CallExpression */
/** @typedef {import("estree").Expression} Expression */
/** @typedef {import("../../declarations/WebpackOptions").JavascriptParserOptions} JavascriptParserOptions */
/** @typedef {import("../Dependency").DependencyLocation} DependencyLocation */
/** @typedef {import("../javascript/JavascriptParser")} JavascriptParser */
/** @typedef {import("../javascript/JavascriptParser").ImportSource} ImportSource */
/** @typedef {import("../javascript/JavascriptParser").Range} Range */

/**
 * Defines the common js import settings type used by this module.
 * @typedef {object} CommonJsImportSettings
 * @property {string=} name
 * @property {string} context
 */

const createRequireSpecifierTag = Symbol("createRequire");
const createdRequireIdentifierTag = Symbol("createRequire()");

const PLUGIN_NAME = "CreateRequireParserPlugin";

const {
	createProcessResolveHandler,
	createRequireAsExpressionHandler,
	createRequireCacheDependency,
	createRequireHandler
} = CommonJsImportsParserPlugin;

class CreateRequireParserPlugin {
	/**
	 * Creates an instance of CreateRequireParserPlugin.
	 * @param {JavascriptParserOptions} options parser options
	 */
	constructor(options) {
		this.options = options;
	}

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {JavascriptParser} parser the parser
	 * @returns {void}
	 */
	apply(parser) {
		const options = this.options;
		if (!options.createRequire) return;

		const getContext = () => {
			if (parser.currentTagData) {
				const { context } =
					/** @type {CommonJsImportSettings} */
					(parser.currentTagData);
				return context;
			}
		};

		/**
		 * Tap require expression tag.
		 * @param {string | symbol} tag tag
		 */
		const tapRequireExpressionTag = (tag) => {
			parser.hooks.typeof
				.for(tag)
				.tap(
					PLUGIN_NAME,
					toConstantDependency(parser, JSON.stringify("function"))
				);
			parser.hooks.evaluateTypeof
				.for(tag)
				.tap(PLUGIN_NAME, evaluateToString("function"));
		};

		/**
		 * Returns true when set undefined.
		 * @param {Expression} expr expression
		 * @returns {boolean} true when set undefined
		 */
		const defineUndefined = (expr) => {
			const dep = new ConstDependency(
				"undefined",
				/** @type {Range} */ (expr.range)
			);
			dep.loc = /** @type {DependencyLocation} */ (expr.loc);
			parser.state.module.addPresentationalDependency(dep);
			return false;
		};

		const requireCache = createRequireCacheDependency(parser);
		const requireAsExpressionHandler = createRequireAsExpressionHandler(
			parser,
			options,
			getContext
		);
		const createRequireCallHandler = createRequireHandler(
			parser,
			options,
			getContext
		);
		const processResolve = createProcessResolveHandler(
			parser,
			options,
			getContext
		);

		/** @type {ImportSource[]} */
		let moduleNames = [];
		/** @type {string | undefined} */
		let specifierName;

		if (options.createRequire === true) {
			moduleNames = ["module", "node:module"];
			specifierName = "createRequire";
		} else if (typeof options.createRequire === "string") {
			/** @type {undefined | string} */
			let parsedModuleName;
			const match = /^(.*) from (.*)$/.exec(options.createRequire);
			if (match) {
				[, specifierName, parsedModuleName] = match;
			}
			if (!specifierName || !parsedModuleName) {
				const err = new WebpackError(
					`Parsing javascript parser option "createRequire" failed, got ${JSON.stringify(
						options.createRequire
					)}`
				);
				err.details =
					'Expected string in format "createRequire from module", where "createRequire" is specifier name and "module" name of the module';
				throw err;
			}
			moduleNames = [parsedModuleName];
		} else {
			return;
		}

		/**
		 * Parses create require arguments.
		 * @param {CallExpression} expr call expression
		 * @returns {string | void} context
		 */
		const parseCreateRequireArguments = (expr) => {
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

		tapRequireExpressionTag(createdRequireIdentifierTag);
		tapRequireExpressionTag(createRequireSpecifierTag);

		parser.hooks.evaluateCallExpression
			.for(createRequireSpecifierTag)
			.tap(PLUGIN_NAME, (expr) => {
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
			.tap(PLUGIN_NAME, (expr, members) =>
				expressionIsUnsupported(
					parser,
					`createRequire().${members.join(".")} is not supported by webpack.`
				)(expr)
			);
		parser.hooks.canRename
			.for(createdRequireIdentifierTag)
			.tap(PLUGIN_NAME, () => true);
		parser.hooks.canRename
			.for(createRequireSpecifierTag)
			.tap(PLUGIN_NAME, () => true);
		parser.hooks.rename
			.for(createRequireSpecifierTag)
			.tap(PLUGIN_NAME, defineUndefined);
		parser.hooks.expression
			.for(createdRequireIdentifierTag)
			.tap(PLUGIN_NAME, requireAsExpressionHandler);
		parser.hooks.call
			.for(createdRequireIdentifierTag)
			.tap(PLUGIN_NAME, createRequireCallHandler(false));

		parser.hooks.import.tap(
			{
				name: PLUGIN_NAME,
				stage: -10
			},
			(statement, source) => {
				if (
					!moduleNames.includes(source) ||
					statement.specifiers.length !== 1 ||
					statement.specifiers[0].type !== "ImportSpecifier" ||
					statement.specifiers[0].imported.type !== "Identifier" ||
					statement.specifiers[0].imported.name !== specifierName
				) {
					return;
				}
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
				name: PLUGIN_NAME,
				stage: -10
			},
			(statement, source, id, name) => {
				if (!moduleNames.includes(source) || id !== specifierName) return;
				parser.tagVariable(name, createRequireSpecifierTag);
				return true;
			}
		);
		parser.hooks.preDeclarator.tap(PLUGIN_NAME, (declarator) => {
			if (
				declarator.id.type !== "Identifier" ||
				!declarator.init ||
				declarator.init.type !== "CallExpression" ||
				declarator.init.callee.type !== "Identifier"
			) {
				return;
			}
			const variableInfo = parser.getVariableInfo(declarator.init.callee.name);
			if (
				variableInfo instanceof VariableInfo &&
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
		});

		parser.hooks.memberChainOfCallMemberChain
			.for(createRequireSpecifierTag)
			.tap(PLUGIN_NAME, (expr, calleeMembers, callExpr, members) => {
				if (
					calleeMembers.length !== 0 ||
					members.length !== 1 ||
					members[0] !== "cache"
				) {
					return;
				}
				// createRequire().cache
				const context = parseCreateRequireArguments(callExpr);
				if (context === undefined) return;
				return requireCache(expr);
			});
		parser.hooks.callMemberChainOfCallMemberChain
			.for(createRequireSpecifierTag)
			.tap(PLUGIN_NAME, (expr, calleeMembers, innerCallExpression, members) => {
				if (
					calleeMembers.length !== 0 ||
					members.length !== 1 ||
					members[0] !== "resolve"
				) {
					return;
				}
				// createRequire().resolve()
				return processResolve(expr, false);
			});
		parser.hooks.expressionMemberChain
			.for(createdRequireIdentifierTag)
			.tap(PLUGIN_NAME, (expr, members) => {
				// require.cache
				if (members.length === 1 && members[0] === "cache") {
					return requireCache(expr);
				}
			});
		parser.hooks.callMemberChain
			.for(createdRequireIdentifierTag)
			.tap(PLUGIN_NAME, (expr, members) => {
				// require.resolve()
				if (members.length === 1 && members[0] === "resolve") {
					return processResolve(expr, false);
				}
			});
		parser.hooks.expression
			.for(createRequireSpecifierTag)
			.tap(PLUGIN_NAME, (expr) => {
				const clearDep = new ConstDependency(
					"/* createRequire */ undefined",
					/** @type {Range} */ (expr.range)
				);
				clearDep.loc = /** @type {DependencyLocation} */ (expr.loc);
				parser.state.module.addPresentationalDependency(clearDep);
				return true;
			});
		parser.hooks.call
			.for(createRequireSpecifierTag)
			.tap(PLUGIN_NAME, (expr) => {
				const clearDep = new ConstDependency(
					"/* createRequire() */ undefined",
					/** @type {Range} */ (expr.range)
				);
				clearDep.loc = /** @type {DependencyLocation} */ (expr.loc);
				parser.state.module.addPresentationalDependency(clearDep);
				return true;
			});
	}
}

module.exports = CreateRequireParserPlugin;
