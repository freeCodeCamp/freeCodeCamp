/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const HotModuleReplacementPlugin = require("../HotModuleReplacementPlugin");
const WebpackError = require("../WebpackError");
const {
	VariableInfo,
	getImportAttributes
} = require("../javascript/JavascriptParser");
const InnerGraph = require("../optimize/InnerGraph");
const AppendOnlyStackedSet = require("../util/AppendOnlyStackedSet");
const ConstDependency = require("./ConstDependency");
const HarmonyAcceptDependency = require("./HarmonyAcceptDependency");
const HarmonyAcceptImportDependency = require("./HarmonyAcceptImportDependency");
const HarmonyEvaluatedImportSpecifierDependency = require("./HarmonyEvaluatedImportSpecifierDependency");
const HarmonyExports = require("./HarmonyExports");
const {
	ExportPresenceModes,
	getNonOptionalPart
} = require("./HarmonyImportDependency");
const HarmonyImportSideEffectDependency = require("./HarmonyImportSideEffectDependency");
const HarmonyImportSpecifierDependency = require("./HarmonyImportSpecifierDependency");
const { ImportPhaseUtils, createGetImportPhase } = require("./ImportPhase");

/** @typedef {import("estree").Expression} Expression */
/** @typedef {import("estree").PrivateIdentifier} PrivateIdentifier */
/** @typedef {import("estree").Identifier} Identifier */
/** @typedef {import("estree").MemberExpression} MemberExpression */
/** @typedef {import("../../declarations/WebpackOptions").JavascriptParserOptions} JavascriptParserOptions */
/** @typedef {import("../Dependency").DependencyLocation} DependencyLocation */
/** @typedef {import("../javascript/JavascriptParser")} JavascriptParser */
/** @typedef {import("../javascript/JavascriptParser").ExportAllDeclaration} ExportAllDeclaration */
/** @typedef {import("../javascript/JavascriptParser").ExportNamedDeclaration} ExportNamedDeclaration */
/** @typedef {import("../javascript/JavascriptParser").ImportAttributes} ImportAttributes */
/** @typedef {import("../javascript/JavascriptParser").ImportDeclaration} ImportDeclaration */
/** @typedef {import("../javascript/JavascriptParser").Range} Range */
/** @typedef {import("../javascript/JavascriptParser").Members} Members */
/** @typedef {import("../javascript/JavascriptParser").MembersOptionals} MembersOptionals */
/** @typedef {import("./HarmonyImportDependency").Ids} Ids */
/** @typedef {import("./HarmonyImportDependency").ExportPresenceMode} ExportPresenceMode */
/** @typedef {import("./ImportPhase").ImportPhaseType} ImportPhaseType */

/**
 * Defines the harmony specifier guards type used by this module.
 * @typedef {object} HarmonySpecifierGuards
 * @property {AppendOnlyStackedSet<string> | undefined} guards
 */

/** @typedef {Map<string, Set<string>>} Guards Map of import root to guarded member keys */

const harmonySpecifierTag = Symbol("harmony import");
const harmonySpecifierGuardTag = Symbol("harmony import guard");

/**
 * Defines the harmony settings type used by this module.
 * @typedef {object} HarmonySettings
 * @property {Ids} ids
 * @property {string} source
 * @property {number} sourceOrder
 * @property {string} name
 * @property {boolean} await
 * @property {ImportAttributes=} attributes
 * @property {ImportPhaseType} phase
 */

const PLUGIN_NAME = "HarmonyImportDependencyParserPlugin";

/**
 * Gets in operator harmony import info.
 * @param {JavascriptParser} parser the parser
 * @param {PrivateIdentifier | Expression} left left expression
 * @param {Expression} right right expression
 * @returns {{ leftPart: string, members: Members, settings: HarmonySettings } | undefined} info
 */
const getInOperatorHarmonyImportInfo = (parser, left, right) => {
	const leftPartEvaluated = parser.evaluateExpression(left);
	if (leftPartEvaluated.couldHaveSideEffects()) return;
	/** @type {string | undefined} */
	const leftPart = leftPartEvaluated.asString();
	if (!leftPart) return;

	const rightPart = parser.evaluateExpression(right);
	if (!rightPart.isIdentifier()) return;

	const rootInfo = rightPart.rootInfo;
	const root =
		typeof rootInfo === "string"
			? rootInfo
			: rootInfo instanceof VariableInfo
				? rootInfo.name
				: undefined;
	if (!root) return;

	const settings = /** @type {HarmonySettings | undefined} */ (
		parser.getTagData(root, harmonySpecifierTag)
	);
	if (!settings) {
		return;
	}

	return {
		leftPart,
		members: /** @type {(() => Members)} */ (rightPart.getMembers)(),
		settings
	};
};

module.exports = class HarmonyImportDependencyParserPlugin {
	/**
	 * Creates an instance of HarmonyImportDependencyParserPlugin.
	 * @param {JavascriptParserOptions} options options
	 */
	constructor(options) {
		this.options = options;
		/** @type {ExportPresenceMode} */
		this.exportPresenceMode = ExportPresenceModes.resolveFromOptions(
			options.importExportsPresence,
			options
		);
		this.strictThisContextOnImports = options.strictThisContextOnImports;
	}

	/**
	 * Gets export presence mode.
	 * @param {JavascriptParser} parser the parser
	 * @param {HarmonySettings} settings settings
	 * @param {Ids} ids ids
	 * @returns {ExportPresenceMode} exportPresenceMode
	 */
	getExportPresenceMode(parser, settings, ids) {
		// Guards only apply to namespace imports
		if (settings.ids.length) return this.exportPresenceMode;

		const harmonySettings = /** @type {HarmonySettings=} */ (
			parser.currentTagData
		);
		if (!harmonySettings) return this.exportPresenceMode;

		const data = /** @type {HarmonySpecifierGuards=} */ (
			parser.getTagData(harmonySettings.name, harmonySpecifierGuardTag)
		);

		if (data && data.guards && data.guards.has(ids[0])) {
			return ExportPresenceModes.NONE;
		}

		return this.exportPresenceMode;
	}

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {JavascriptParser} parser the parser
	 * @returns {void}
	 */
	apply(parser) {
		const getImportPhase = createGetImportPhase(
			this.options.deferImport,
			this.options.sourceImport
		);

		/**
		 * Gets non optional member chain.
		 * @param {MemberExpression} node member expression
		 * @param {number} count count
		 * @returns {Expression} member expression
		 */
		function getNonOptionalMemberChain(node, count) {
			while (count--) node = /** @type {MemberExpression} */ (node.object);
			return node;
		}

		parser.hooks.isPure.for("Identifier").tap(PLUGIN_NAME, (expression) => {
			const expr = /** @type {Identifier} */ (expression);
			if (
				parser.isVariableDefined(expr.name) ||
				parser.getTagData(expr.name, harmonySpecifierTag)
			) {
				return true;
			}
		});
		parser.hooks.import.tap(PLUGIN_NAME, (statement, source) => {
			parser.state.lastHarmonyImportOrder =
				(parser.state.lastHarmonyImportOrder || 0) + 1;
			const clearDep = new ConstDependency(
				parser.isAsiPosition(/** @type {Range} */ (statement.range)[0])
					? ";"
					: "",
				/** @type {Range} */ (statement.range)
			);
			clearDep.loc = /** @type {DependencyLocation} */ (statement.loc);
			parser.state.module.addPresentationalDependency(clearDep);
			parser.unsetAsiPosition(/** @type {Range} */ (statement.range)[1]);
			const attributes = getImportAttributes(statement);
			const phase = getImportPhase(parser, statement);
			if (
				ImportPhaseUtils.isDefer(phase) &&
				(statement.specifiers.length !== 1 ||
					statement.specifiers[0].type !== "ImportNamespaceSpecifier")
			) {
				const error = new WebpackError(
					"Deferred import can only be used with `import * as namespace from '...'` syntax."
				);
				error.loc = statement.loc || undefined;
				parser.state.current.addError(error);
			}

			const sideEffectDep = new HarmonyImportSideEffectDependency(
				/** @type {string} */ (source),
				parser.state.lastHarmonyImportOrder,
				phase,
				attributes
			);
			sideEffectDep.loc = /** @type {DependencyLocation} */ (statement.loc);
			parser.state.module.addDependency(sideEffectDep);
			return true;
		});
		parser.hooks.importSpecifier.tap(
			PLUGIN_NAME,
			(statement, source, id, name) => {
				const ids = id === null ? [] : [id];
				const phase = getImportPhase(parser, statement);
				parser.tagVariable(
					name,
					harmonySpecifierTag,
					/** @type {HarmonySettings} */ ({
						name,
						source,
						ids,
						sourceOrder: parser.state.lastHarmonyImportOrder,
						attributes: getImportAttributes(statement),
						phase
					})
				);
				return true;
			}
		);
		parser.hooks.binaryExpression.tap(PLUGIN_NAME, (expression) => {
			if (expression.operator !== "in") return;
			const info = getInOperatorHarmonyImportInfo(
				parser,
				expression.left,
				expression.right
			);
			if (!info) return;

			const { leftPart, members, settings } = info;
			const dep = new HarmonyEvaluatedImportSpecifierDependency(
				settings.source,
				settings.sourceOrder,
				[...settings.ids, ...members, leftPart],
				settings.name,
				/** @type {Range} */ (expression.range),
				settings.attributes,
				"in"
			);
			dep.directImport = members.length === 0;
			dep.asiSafe = !parser.isAsiPosition(
				/** @type {Range} */ (expression.range)[0]
			);
			dep.loc = /** @type {DependencyLocation} */ (expression.loc);
			parser.state.module.addDependency(dep);
			InnerGraph.onUsage(parser.state, (e) => (dep.usedByExports = e));
			return true;
		});
		parser.hooks.collectDestructuringAssignmentProperties.tap(
			PLUGIN_NAME,
			(expr) => {
				const nameInfo = parser.getNameForExpression(expr);
				if (
					nameInfo &&
					nameInfo.rootInfo instanceof VariableInfo &&
					nameInfo.rootInfo.name &&
					parser.getTagData(nameInfo.rootInfo.name, harmonySpecifierTag)
				) {
					return true;
				}
			}
		);
		parser.hooks.expression
			.for(harmonySpecifierTag)
			.tap(PLUGIN_NAME, (expr) => {
				const settings = /** @type {HarmonySettings} */ (parser.currentTagData);

				const dep = new HarmonyImportSpecifierDependency(
					settings.source,
					settings.sourceOrder,
					settings.ids,
					settings.name,
					/** @type {Range} */
					(expr.range),
					this.exportPresenceMode,
					settings.phase,
					settings.attributes,
					[]
				);
				dep.referencedPropertiesInDestructuring =
					parser.destructuringAssignmentPropertiesFor(expr);
				dep.shorthand = parser.scope.inShorthand;
				dep.directImport = true;
				dep.asiSafe = !parser.isAsiPosition(
					/** @type {Range} */ (expr.range)[0]
				);
				dep.loc = /** @type {DependencyLocation} */ (expr.loc);
				dep.call = parser.scope.inTaggedTemplateTag;
				parser.state.module.addDependency(dep);
				InnerGraph.onUsage(parser.state, (e) => (dep.usedByExports = e));
				return true;
			});
		parser.hooks.expressionMemberChain
			.for(harmonySpecifierTag)
			.tap(
				PLUGIN_NAME,
				(expression, members, membersOptionals, memberRanges) => {
					const settings =
						/** @type {HarmonySettings} */
						(parser.currentTagData);
					const nonOptionalMembers = getNonOptionalPart(
						members,
						membersOptionals
					);
					/** @type {Range[]} */
					const ranges = memberRanges.slice(
						0,
						memberRanges.length - (members.length - nonOptionalMembers.length)
					);
					const expr =
						nonOptionalMembers !== members
							? getNonOptionalMemberChain(
									expression,
									members.length - nonOptionalMembers.length
								)
							: expression;
					const ids = [...settings.ids, ...nonOptionalMembers];
					const dep = new HarmonyImportSpecifierDependency(
						settings.source,
						settings.sourceOrder,
						ids,
						settings.name,
						/** @type {Range} */
						(expr.range),
						this.getExportPresenceMode(parser, settings, ids),
						settings.phase,
						settings.attributes,
						ranges
					);
					dep.referencedPropertiesInDestructuring =
						parser.destructuringAssignmentPropertiesFor(expr);
					dep.asiSafe = !parser.isAsiPosition(
						/** @type {Range} */
						(expr.range)[0]
					);
					dep.loc = /** @type {DependencyLocation} */ (expr.loc);
					parser.state.module.addDependency(dep);
					InnerGraph.onUsage(parser.state, (e) => (dep.usedByExports = e));
					return true;
				}
			);
		parser.hooks.callMemberChain
			.for(harmonySpecifierTag)
			.tap(
				PLUGIN_NAME,
				(expression, members, membersOptionals, memberRanges) => {
					const { arguments: args } = expression;
					const callee = /** @type {MemberExpression} */ (expression.callee);
					const settings = /** @type {HarmonySettings} */ (
						parser.currentTagData
					);
					const nonOptionalMembers = getNonOptionalPart(
						members,
						membersOptionals
					);
					/** @type {Range[]} */
					const ranges = memberRanges.slice(
						0,
						memberRanges.length - (members.length - nonOptionalMembers.length)
					);
					const expr =
						nonOptionalMembers !== members
							? getNonOptionalMemberChain(
									callee,
									members.length - nonOptionalMembers.length
								)
							: callee;
					const ids = [...settings.ids, ...nonOptionalMembers];
					const dep = new HarmonyImportSpecifierDependency(
						settings.source,
						settings.sourceOrder,
						ids,
						settings.name,
						/** @type {Range} */ (expr.range),
						this.getExportPresenceMode(parser, settings, ids),
						settings.phase,
						settings.attributes,
						ranges
					);
					dep.directImport = members.length === 0;
					dep.call = true;
					dep.asiSafe = !parser.isAsiPosition(
						/** @type {Range} */ (expr.range)[0]
					);
					// only in case when we strictly follow the spec we need a special case here
					dep.namespaceObjectAsContext =
						members.length > 0 &&
						/** @type {boolean} */ (this.strictThisContextOnImports);
					dep.loc = /** @type {DependencyLocation} */ (expr.loc);
					parser.state.module.addDependency(dep);
					if (args) parser.walkExpressions(args);
					InnerGraph.onUsage(parser.state, (e) => (dep.usedByExports = e));
					return true;
				}
			);
		const { hotAcceptCallback, hotAcceptWithoutCallback } =
			HotModuleReplacementPlugin.getParserHooks(parser);
		hotAcceptCallback.tap(PLUGIN_NAME, (expr, requests) => {
			if (!HarmonyExports.isEnabled(parser.state)) {
				// This is not a harmony module, skip it
				return;
			}
			const dependencies = requests.map((request) => {
				const dep = new HarmonyAcceptImportDependency(request);
				dep.loc = /** @type {DependencyLocation} */ (expr.loc);
				parser.state.module.addDependency(dep);
				return dep;
			});
			if (dependencies.length > 0) {
				const dep = new HarmonyAcceptDependency(
					/** @type {Range} */
					(expr.range),
					dependencies,
					true
				);
				dep.loc = /** @type {DependencyLocation} */ (expr.loc);
				parser.state.module.addDependency(dep);
			}
		});
		hotAcceptWithoutCallback.tap(PLUGIN_NAME, (expr, requests) => {
			if (!HarmonyExports.isEnabled(parser.state)) {
				// This is not a harmony module, skip it
				return;
			}
			const dependencies = requests.map((request) => {
				const dep = new HarmonyAcceptImportDependency(request);
				dep.loc = /** @type {DependencyLocation} */ (expr.loc);
				parser.state.module.addDependency(dep);
				return dep;
			});
			if (dependencies.length > 0) {
				const dep = new HarmonyAcceptDependency(
					/** @type {Range} */
					(expr.range),
					dependencies,
					false
				);
				dep.loc = /** @type {DependencyLocation} */ (expr.loc);
				parser.state.module.addDependency(dep);
			}
		});

		/**
		 * Processes the provided guard.
		 * @param {Guards} guards guards
		 * @param {() => void} walk walk callback
		 * @returns {void}
		 */
		const withGuards = (guards, walk) => {
			const applyGuards = () => {
				/** @type {(() => void)[]} */
				const restoreFns = [];

				for (const [rootName, members] of guards) {
					const previous = parser.getVariableInfo(rootName);
					const exist = /** @type {HarmonySpecifierGuards=} */ (
						parser.getTagData(rootName, harmonySpecifierGuardTag)
					);

					const mergedGuards =
						exist && exist.guards
							? exist.guards.createChild()
							: new AppendOnlyStackedSet();

					for (const memberKey of members) mergedGuards.add(memberKey);
					parser.tagVariable(rootName, harmonySpecifierGuardTag, {
						guards: mergedGuards
					});
					restoreFns.push(() => {
						parser.setVariable(rootName, previous);
					});
				}

				return () => {
					for (const restore of restoreFns) {
						restore();
					}
				};
			};

			const restore = applyGuards();
			try {
				walk();
			} finally {
				restore();
			}
		};

		if (this.exportPresenceMode !== ExportPresenceModes.NONE) {
			parser.hooks.collectGuards.tap(PLUGIN_NAME, (expression) => {
				if (parser.scope.isAsmJs) return;
				/** @type {Guards} */
				const guards = new Map();

				/**
				 * Processes the provided expression.
				 * @param {Expression} expression expression
				 * @param {boolean} needTruthy need to be truthy
				 */
				const collect = (expression, needTruthy) => {
					if (
						expression.type === "UnaryExpression" &&
						expression.operator === "!"
					) {
						collect(expression.argument, !needTruthy);
						return;
					} else if (expression.type === "LogicalExpression" && needTruthy) {
						if (expression.operator === "&&") {
							collect(expression.left, true);
							collect(expression.right, true);
						} else if (expression.operator === "||") {
							const leftEvaluation = parser.evaluateExpression(expression.left);
							const leftBool = leftEvaluation.asBool();
							if (leftBool === false) {
								collect(expression.right, true);
							}
						} else if (expression.operator === "??") {
							const leftEvaluation = parser.evaluateExpression(expression.left);
							const leftNullish = leftEvaluation.asNullish();
							if (leftNullish === true) {
								collect(expression.right, true);
							}
						}
						return;
					}
					if (!needTruthy) return;

					// Direct `"x" in ns` guards
					if (
						expression.type === "BinaryExpression" &&
						expression.operator === "in"
					) {
						if (expression.right.type !== "Identifier") {
							return;
						}
						const info = getInOperatorHarmonyImportInfo(
							parser,
							expression.left,
							expression.right
						);
						if (!info) return;

						const { settings, leftPart, members } = info;
						// Only direct namespace guards
						if (members.length > 0) return;
						const guarded = guards.get(settings.name);
						if (guarded) {
							guarded.add(leftPart);
							return;
						}

						guards.set(settings.name, new Set([leftPart]));
					}
				};

				collect(expression, true);

				if (guards.size === 0) return;
				return (walk) => {
					withGuards(guards, walk);
				};
			});
		}
	}
};

module.exports.harmonySpecifierGuardTag = harmonySpecifierGuardTag;
module.exports.harmonySpecifierTag = harmonySpecifierTag;
