/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const CommentCompilationWarning = require("../CommentCompilationWarning");
const RuntimeGlobals = require("../RuntimeGlobals");
const UnsupportedFeatureWarning = require("../UnsupportedFeatureWarning");
const {
	evaluateToIdentifier,
	evaluateToString,
	expressionIsUnsupported,
	toConstantDependency
} = require("../javascript/JavascriptParserHelpers");
const traverseDestructuringAssignmentProperties = require("../util/traverseDestructuringAssignmentProperties");
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
/** @typedef {import("../Dependency").RawReferencedExports} RawReferencedExports */
/** @typedef {import("../javascript/JavascriptParser")} JavascriptParser */
/** @typedef {import("../javascript/BasicEvaluatedExpression")} BasicEvaluatedExpression */
/** @typedef {import("../javascript/JavascriptParser").ImportSource} ImportSource */
/** @typedef {import("../javascript/JavascriptParser").Range} Range */
/** @typedef {import("../javascript/JavascriptParser").Members} Members */
/** @typedef {import("../javascript/JavascriptParser").CalleeMembers} CalleeMembers */
/** @typedef {import("./LocalModule")} LocalModule */

/**
 * Defines the common js import settings type used by this module.
 * @typedef {object} CommonJsImportSettings
 * @property {string=} name
 * @property {string} context
 */

const PLUGIN_NAME = "CommonJsImportsParserPlugin";

/**
 * Checks whether this object is require call expression.
 * @param {Expression} expression expression
 * @returns {boolean} true, when expression is `require(...)` or `module.require(...)`
 */
const isRequireCallExpression = (expression) => {
	if (expression.type !== "CallExpression") return false;
	const { callee } = expression;
	if (callee.type === "Identifier") {
		return callee.name === "require";
	}
	if (callee.type === "MemberExpression" && !callee.computed) {
		const object = callee.object;
		const property = callee.property;
		return (
			object.type === "Identifier" &&
			object.name === "module" &&
			property.type === "Identifier" &&
			property.name === "require"
		);
	}
	return false;
};

/**
 * Gets require referenced exports from destructuring.
 * @param {JavascriptParser} parser parser
 * @param {CallExpression | NewExpression} expr expression
 * @returns {RawReferencedExports | null} referenced exports from destructuring
 */
const getRequireReferencedExportsFromDestructuring = (parser, expr) => {
	const referencedPropertiesInDestructuring =
		parser.destructuringAssignmentPropertiesFor(expr);
	if (!referencedPropertiesInDestructuring) return null;

	/** @type {RawReferencedExports} */
	const referencedExports = [];
	traverseDestructuringAssignmentProperties(
		referencedPropertiesInDestructuring,
		(stack) => referencedExports.push(stack.map((p) => p.id))
	);
	return referencedExports;
};

/**
 * Creates a require cache dependency.
 * @param {JavascriptParser} parser parser
 * @returns {(expr: Expression) => boolean} handler
 */
const createRequireCacheDependency = (parser) =>
	toConstantDependency(parser, RuntimeGlobals.moduleCache, [
		RuntimeGlobals.moduleCache,
		RuntimeGlobals.moduleId,
		RuntimeGlobals.moduleLoaded
	]);

/**
 * Creates a require as expression handler.
 * @param {JavascriptParser} parser parser
 * @param {JavascriptParserOptions} options options
 * @param {() => undefined | string} getContext context accessor
 * @returns {(expr: Expression) => boolean} handler
 */
const createRequireAsExpressionHandler =
	(parser, options, getContext) => (expr) => {
		const dep = new CommonJsRequireContextDependency(
			{
				request: /** @type {string} */ (options.unknownContextRequest),
				recursive: /** @type {boolean} */ (options.unknownContextRecursive),
				regExp: /** @type {RegExp} */ (options.unknownContextRegExp),
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

/**
 * Creates a require call handler.
 * @param {JavascriptParser} parser parser
 * @param {JavascriptParserOptions} options options
 * @param {() => undefined | string} getContext context accessor
 * @returns {(callNew: boolean) => (expr: CallExpression | NewExpression) => (boolean | void)} handler factory
 */
const createRequireCallHandler = (parser, options, getContext) => {
	/**
	 * Process require item.
	 * @param {CallExpression | NewExpression} expr expression
	 * @param {BasicEvaluatedExpression} param param
	 * @returns {boolean | void} true when handled
	 */
	const processRequireItem = (expr, param) => {
		if (param.isString()) {
			const referencedExports = getRequireReferencedExportsFromDestructuring(
				parser,
				expr
			);
			const dep = new CommonJsRequireDependency(
				/** @type {string} */ (param.string),
				/** @type {Range} */ (param.range),
				getContext(),
				referencedExports
			);
			dep.loc = /** @type {DependencyLocation} */ (expr.loc);
			dep.optional = Boolean(parser.scope.inTry);
			parser.state.current.addDependency(dep);
			return true;
		}
	};
	/**
	 * Process require context.
	 * @param {CallExpression | NewExpression} expr expression
	 * @param {BasicEvaluatedExpression} param param
	 * @returns {boolean | void} true when handled
	 */
	const processRequireContext = (expr, param) => {
		const referencedExports = getRequireReferencedExportsFromDestructuring(
			parser,
			expr
		);
		const dep = ContextDependencyHelpers.create(
			CommonJsRequireContextDependency,
			/** @type {Range} */ (expr.range),
			param,
			expr,
			options,
			{
				category: "commonjs",
				referencedExports
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

	return (callNew) => (expr) => {
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
		/** @type {null | LocalModule} */
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
};

/**
 * Creates a process resolve handler.
 * @param {JavascriptParser} parser parser
 * @param {JavascriptParserOptions} options options
 * @param {() => undefined | string} getContext context accessor
 * @returns {(expr: CallExpression, weak: boolean) => (boolean | void)} resolver
 */
const createProcessResolveHandler = (parser, options, getContext) => {
	/**
	 * Process resolve item.
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
	 * Process resolve context.
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

	return (expr, weak) => {
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
};

class CommonJsImportsParserPlugin {
	/**
	 * Creates an instance of CommonJsImportsParserPlugin.
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
		parser.hooks.collectDestructuringAssignmentProperties.tap(
			PLUGIN_NAME,
			(expr) => {
				if (isRequireCallExpression(expr)) return true;
			}
		);

		const getContext = () => {
			if (parser.currentTagData) {
				const { context } =
					/** @type {CommonJsImportSettings} */
					(parser.currentTagData);
				return context;
			}
		};

		// #region metadata
		/**
		 * Tap require expression.
		 * @param {string} expression expression
		 * @param {() => Members} getMembers get members
		 */
		const tapRequireExpression = (expression, getMembers) => {
			parser.hooks.typeof
				.for(expression)
				.tap(
					PLUGIN_NAME,
					toConstantDependency(parser, JSON.stringify("function"))
				);
			parser.hooks.evaluateTypeof
				.for(expression)
				.tap(PLUGIN_NAME, evaluateToString("function"));
			parser.hooks.evaluateIdentifier
				.for(expression)
				.tap(
					PLUGIN_NAME,
					evaluateToIdentifier(expression, "require", getMembers, true)
				);
		};
		tapRequireExpression("require", () => []);
		tapRequireExpression("require.resolve", () => ["resolve"]);
		tapRequireExpression("require.resolveWeak", () => ["resolveWeak"]);
		// #endregion

		// Weird stuff //
		parser.hooks.assign.for("require").tap(PLUGIN_NAME, (expr) => {
			// to not leak to global "require", we need to define a local require here.
			const dep = new ConstDependency("var require;", 0);
			dep.loc = /** @type {DependencyLocation} */ (expr.loc);
			parser.state.module.addPresentationalDependency(dep);
			return true;
		});

		// #region Unsupported
		parser.hooks.call
			.for("require.main.require")
			.tap(
				PLUGIN_NAME,
				expressionIsUnsupported(
					parser,
					"require.main.require is not supported by webpack."
				)
			);
		parser.hooks.expression
			.for("module.parent.require")
			.tap(
				PLUGIN_NAME,
				expressionIsUnsupported(
					parser,
					"module.parent.require is not supported by webpack."
				)
			);
		parser.hooks.call
			.for("module.parent.require")
			.tap(
				PLUGIN_NAME,
				expressionIsUnsupported(
					parser,
					"module.parent.require is not supported by webpack."
				)
			);
		// #endregion

		// #region Renaming
		/**
		 * Returns true when set undefined.
		 * @param {Expression} expr expression
		 * @returns {boolean} true when set undefined
		 */
		const defineUndefined = (expr) => {
			// To avoid "not defined" error, replace the value with undefined
			const dep = new ConstDependency(
				"undefined",
				/** @type {Range} */ (expr.range)
			);
			dep.loc = /** @type {DependencyLocation} */ (expr.loc);
			parser.state.module.addPresentationalDependency(dep);
			return false;
		};
		parser.hooks.canRename.for("require").tap(PLUGIN_NAME, () => true);
		parser.hooks.rename.for("require").tap(PLUGIN_NAME, defineUndefined);
		// #endregion

		// #region Inspection
		const requireCache = createRequireCacheDependency(parser);

		parser.hooks.expression.for("require.cache").tap(PLUGIN_NAME, requireCache);
		// #endregion

		// #region Require as expression
		/**
		 * Require as expression handler.
		 * @param {Expression} expr expression
		 * @returns {boolean} true when handled
		 */
		const requireAsExpressionHandler = createRequireAsExpressionHandler(
			parser,
			options,
			getContext
		);
		parser.hooks.expression
			.for("require")
			.tap(PLUGIN_NAME, requireAsExpressionHandler);
		// #endregion

		// #region Require
		/**
		 * Creates a require handler.
		 * @param {boolean} callNew true, when require is called with new
		 * @returns {(expr: CallExpression | NewExpression) => (boolean | void)} handler
		 */
		const createRequireHandler = createRequireCallHandler(
			parser,
			options,
			getContext
		);
		parser.hooks.call
			.for("require")
			.tap(PLUGIN_NAME, createRequireHandler(false));
		parser.hooks.new
			.for("require")
			.tap(PLUGIN_NAME, createRequireHandler(true));
		parser.hooks.call
			.for("module.require")
			.tap(PLUGIN_NAME, createRequireHandler(false));
		parser.hooks.new
			.for("module.require")
			.tap(PLUGIN_NAME, createRequireHandler(true));
		// #endregion

		// #region Require with property access
		/**
		 * Returns true when handled.
		 * @param {Expression} expr expression
		 * @param {CalleeMembers} calleeMembers callee members
		 * @param {CallExpression} callExpr call expression
		 * @param {Members} members members
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
		 * Call chain handler.
		 * @param {CallExpression} expr expression
		 * @param {CalleeMembers} calleeMembers callee members
		 * @param {CallExpression} callExpr call expression
		 * @param {Members} members members
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
			.tap(PLUGIN_NAME, chainHandler);
		parser.hooks.memberChainOfCallMemberChain
			.for("module.require")
			.tap(PLUGIN_NAME, chainHandler);
		parser.hooks.callMemberChainOfCallMemberChain
			.for("require")
			.tap(PLUGIN_NAME, callChainHandler);
		parser.hooks.callMemberChainOfCallMemberChain
			.for("module.require")
			.tap(PLUGIN_NAME, callChainHandler);
		// #endregion

		// #region Require.resolve
		/**
		 * Processes the provided expr.
		 * @param {CallExpression} expr call expression
		 * @param {boolean} weak weak
		 * @returns {boolean | void} true when handled
		 */
		const processResolve = createProcessResolveHandler(
			parser,
			options,
			getContext
		);

		parser.hooks.call
			.for("require.resolve")
			.tap(PLUGIN_NAME, (expr) => processResolve(expr, false));
		parser.hooks.call
			.for("require.resolveWeak")
			.tap(PLUGIN_NAME, (expr) => processResolve(expr, true));
		// #endregion
	}
}

module.exports = CommonJsImportsParserPlugin;
module.exports.createProcessResolveHandler = createProcessResolveHandler;
module.exports.createRequireAsExpressionHandler =
	createRequireAsExpressionHandler;
module.exports.createRequireCacheDependency = createRequireCacheDependency;
module.exports.createRequireHandler = createRequireCallHandler;
