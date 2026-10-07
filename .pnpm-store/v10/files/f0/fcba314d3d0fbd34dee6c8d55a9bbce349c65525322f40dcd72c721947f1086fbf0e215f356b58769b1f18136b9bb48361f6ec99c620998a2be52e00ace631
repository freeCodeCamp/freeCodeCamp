/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const CompatibilityPlugin = require("../CompatibilityPlugin");
const WebpackError = require("../WebpackError");
const { getImportAttributes } = require("../javascript/JavascriptParser");
const InnerGraph = require("../optimize/InnerGraph");
const ConstDependency = require("./ConstDependency");
const HarmonyExportExpressionDependency = require("./HarmonyExportExpressionDependency");
const HarmonyExportHeaderDependency = require("./HarmonyExportHeaderDependency");
const HarmonyExportImportedSpecifierDependency = require("./HarmonyExportImportedSpecifierDependency");
const HarmonyExportSpecifierDependency = require("./HarmonyExportSpecifierDependency");
const { ExportPresenceModes } = require("./HarmonyImportDependency");
const {
	harmonySpecifierTag
} = require("./HarmonyImportDependencyParserPlugin");
const HarmonyImportSideEffectDependency = require("./HarmonyImportSideEffectDependency");
const { ImportPhaseUtils, createGetImportPhase } = require("./ImportPhase");

/** @typedef {import("../../declarations/WebpackOptions").JavascriptParserOptions} JavascriptParserOptions */
/** @typedef {import("../Dependency").DependencyLocation} DependencyLocation */
/** @typedef {import("../javascript/JavascriptParser")} JavascriptParser */
/** @typedef {import("../javascript/JavascriptParser").ClassDeclaration} ClassDeclaration */
/** @typedef {import("../javascript/JavascriptParser").FunctionDeclaration} FunctionDeclaration */
/** @typedef {import("../javascript/JavascriptParser").Range} Range */
/** @typedef {import("./HarmonyImportDependencyParserPlugin").HarmonySettings} HarmonySettings */
/** @typedef {import("../CompatibilityPlugin").CompatibilitySettings} CompatibilitySettings */

const { HarmonyStarExportsList } = HarmonyExportImportedSpecifierDependency;

const PLUGIN_NAME = "HarmonyExportDependencyParserPlugin";

module.exports = class HarmonyExportDependencyParserPlugin {
	/**
	 * Creates an instance of HarmonyExportDependencyParserPlugin.
	 * @param {JavascriptParserOptions} options options
	 */
	constructor(options) {
		this.options = options;
		this.exportPresenceMode = ExportPresenceModes.resolveFromOptions(
			options.reexportExportsPresence,
			options
		);
	}

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {JavascriptParser} parser the parser
	 * @returns {void}
	 */
	apply(parser) {
		const { exportPresenceMode } = this;
		const getImportPhase = createGetImportPhase(
			this.options.deferImport,
			false
		);

		parser.hooks.export.tap(PLUGIN_NAME, (statement) => {
			const dep = new HarmonyExportHeaderDependency(
				/** @type {Range | false} */ (
					statement.declaration && statement.declaration.range
				),
				/** @type {Range} */ (statement.range)
			);
			dep.loc = Object.create(
				/** @type {DependencyLocation} */ (statement.loc)
			);
			dep.loc.index = -1;
			parser.state.module.addPresentationalDependency(dep);
			return true;
		});
		parser.hooks.exportImport.tap(PLUGIN_NAME, (statement, source) => {
			parser.state.lastHarmonyImportOrder =
				(parser.state.lastHarmonyImportOrder || 0) + 1;
			const clearDep = new ConstDependency(
				"",
				/** @type {Range} */ (statement.range)
			);
			clearDep.loc = /** @type {DependencyLocation} */ (statement.loc);
			clearDep.loc.index = -1;
			parser.state.module.addPresentationalDependency(clearDep);

			const phase = getImportPhase(parser, statement);
			if (phase && ImportPhaseUtils.isDefer(phase)) {
				const error = new WebpackError(
					"Deferred re-export (`export defer * as namespace from '...'`) is not a part of the Import Defer proposal.\nUse the following code instead:\n    import defer * as namespace from '...';\n    export { namespace };"
				);
				error.loc = statement.loc || undefined;
				parser.state.current.addError(error);
			}
			const sideEffectDep = new HarmonyImportSideEffectDependency(
				/** @type {string} */ (source),
				parser.state.lastHarmonyImportOrder,
				phase,
				getImportAttributes(statement)
			);
			sideEffectDep.loc = Object.create(
				/** @type {DependencyLocation} */ (statement.loc)
			);
			sideEffectDep.loc.index = -1;
			parser.state.current.addDependency(sideEffectDep);
			return true;
		});
		parser.hooks.exportExpression.tap(PLUGIN_NAME, (statement, node) => {
			const isFunctionDeclaration = node.type === "FunctionDeclaration";
			const exprRange = /** @type {Range} */ (node.range);
			const statementRange = /** @type {Range} */ (statement.range);
			const comments = parser.getComments([statementRange[0], exprRange[0]]);
			const dep = new HarmonyExportExpressionDependency(
				exprRange,
				statementRange,
				comments
					.map((c) => {
						switch (c.type) {
							case "Block":
								return `/*${c.value}*/`;
							case "Line":
								return `//${c.value}\n`;
						}
						return "";
					})
					.join(""),
				node.type.endsWith("Declaration") &&
					/** @type {FunctionDeclaration | ClassDeclaration} */ (node).id
					? /** @type {FunctionDeclaration | ClassDeclaration} */
						(node).id.name
					: isFunctionDeclaration
						? {
								range: [
									exprRange[0],
									node.params.length > 0
										? /** @type {Range} */ (node.params[0].range)[0]
										: /** @type {Range} */ (node.body.range)[0]
								],
								prefix: `${node.async ? "async " : ""}function${
									node.generator ? "*" : ""
								} `,
								suffix: `(${node.params.length > 0 ? "" : ") "}`
							}
						: undefined
			);
			dep.isAnonymousDefault =
				node.type === "ArrowFunctionExpression" ||
				((node.type === "FunctionDeclaration" ||
					node.type === "FunctionExpression" ||
					node.type === "ClassDeclaration" ||
					node.type === "ClassExpression") &&
					!node.id);
			dep.loc = Object.create(
				/** @type {DependencyLocation} */ (statement.loc)
			);
			dep.loc.index = -1;
			parser.state.current.addDependency(dep);
			InnerGraph.addVariableUsage(
				parser,
				node.type.endsWith("Declaration") &&
					/** @type {FunctionDeclaration | ClassDeclaration} */ (node).id
					? /** @type {FunctionDeclaration | ClassDeclaration} */ (node).id.name
					: "*default*",
				"default"
			);
			return true;
		});
		parser.hooks.exportSpecifier.tap(
			PLUGIN_NAME,
			(statement, id, name, idx) => {
				// CompatibilityPlugin may change exports name
				// not handle re-export or import then export situation as current CompatibilityPlugin only
				// rename symbol in declaration module, not change exported symbol
				const variable = parser.getTagData(
					id,
					CompatibilityPlugin.nestedWebpackIdentifierTag
				);
				if (variable && /** @type {CompatibilitySettings} */ (variable).name) {
					// CompatibilityPlugin changes exports to a new name, should updates exports name
					id = /** @type {CompatibilitySettings} */ (variable).name;
				}

				const settings =
					/** @type {HarmonySettings} */
					(parser.getTagData(id, harmonySpecifierTag));
				const harmonyNamedExports = (parser.state.harmonyNamedExports =
					parser.state.harmonyNamedExports || new Set());
				harmonyNamedExports.add(name);
				InnerGraph.addVariableUsage(parser, id, name);
				const dep = settings
					? new HarmonyExportImportedSpecifierDependency(
							settings.source,
							settings.sourceOrder,
							settings.ids,
							name,
							harmonyNamedExports,
							null,
							exportPresenceMode,
							null,
							settings.phase,
							settings.attributes
						)
					: new HarmonyExportSpecifierDependency(id, name);
				dep.loc = Object.create(
					/** @type {DependencyLocation} */ (statement.loc)
				);
				dep.loc.index = idx;
				const isAsiSafe = !parser.isAsiPosition(
					/** @type {Range} */
					(statement.range)[0]
				);
				if (!isAsiSafe) {
					parser.setAsiPosition(/** @type {Range} */ (statement.range)[1]);
				}
				parser.state.current.addDependency(dep);
				return true;
			}
		);
		parser.hooks.exportImportSpecifier.tap(
			PLUGIN_NAME,
			(statement, source, id, name, idx) => {
				const harmonyNamedExports = (parser.state.harmonyNamedExports =
					parser.state.harmonyNamedExports || new Set());
				/** @type {InstanceType<HarmonyStarExportsList> | null} */
				let harmonyStarExports = null;
				if (name) {
					harmonyNamedExports.add(name);
				} else {
					harmonyStarExports = parser.state.harmonyStarExports =
						parser.state.harmonyStarExports || new HarmonyStarExportsList();
				}
				const attributes = getImportAttributes(statement);
				const dep = new HarmonyExportImportedSpecifierDependency(
					/** @type {string} */
					(source),
					/** @type {number} */
					(parser.state.lastHarmonyImportOrder),
					id ? [id] : [],
					name,
					harmonyNamedExports,
					// eslint-disable-next-line unicorn/prefer-spread
					harmonyStarExports && harmonyStarExports.slice(),
					exportPresenceMode,
					harmonyStarExports,
					getImportPhase(parser, statement),
					attributes
				);
				if (harmonyStarExports) {
					harmonyStarExports.push(dep);
				}
				dep.loc = Object.create(
					/** @type {DependencyLocation} */ (statement.loc)
				);
				dep.loc.index = idx;
				const isAsiSafe = !parser.isAsiPosition(
					/** @type {Range} */
					(statement.range)[0]
				);
				if (!isAsiSafe) {
					parser.setAsiPosition(/** @type {Range} */ (statement.range)[1]);
				}
				parser.state.current.addDependency(dep);
				return true;
			}
		);
	}
};
