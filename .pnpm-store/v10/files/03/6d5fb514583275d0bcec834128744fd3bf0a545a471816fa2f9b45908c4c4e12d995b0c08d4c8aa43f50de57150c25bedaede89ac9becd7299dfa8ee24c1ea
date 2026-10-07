/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

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

/** @typedef {import("../Dependency").DependencyLocation} DependencyLocation */
/** @typedef {import("../javascript/JavascriptParser")} JavascriptParser */
/** @typedef {import("../javascript/JavascriptParser").FunctionDeclaration} FunctionDeclaration */
/** @typedef {import("../javascript/JavascriptParser").Range} Range */

const { HarmonyStarExportsList } = HarmonyExportImportedSpecifierDependency;

module.exports = class HarmonyExportDependencyParserPlugin {
	/**
	 * @param {import("../../declarations/WebpackOptions").JavascriptParserOptions} options options
	 */
	constructor(options) {
		this.exportPresenceMode =
			options.reexportExportsPresence !== undefined
				? ExportPresenceModes.fromUserOption(options.reexportExportsPresence)
				: options.exportsPresence !== undefined
					? ExportPresenceModes.fromUserOption(options.exportsPresence)
					: options.strictExportPresence
						? ExportPresenceModes.ERROR
						: ExportPresenceModes.AUTO;
	}

	/**
	 * @param {JavascriptParser} parser the parser
	 * @returns {void}
	 */
	apply(parser) {
		const { exportPresenceMode } = this;
		parser.hooks.export.tap(
			"HarmonyExportDependencyParserPlugin",
			statement => {
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
			}
		);
		parser.hooks.exportImport.tap(
			"HarmonyExportDependencyParserPlugin",
			(statement, source) => {
				parser.state.lastHarmonyImportOrder =
					(parser.state.lastHarmonyImportOrder || 0) + 1;
				const clearDep = new ConstDependency(
					"",
					/** @type {Range} */ (statement.range)
				);
				clearDep.loc = /** @type {DependencyLocation} */ (statement.loc);
				clearDep.loc.index = -1;
				parser.state.module.addPresentationalDependency(clearDep);
				const sideEffectDep = new HarmonyImportSideEffectDependency(
					/** @type {string} */ (source),
					parser.state.lastHarmonyImportOrder,
					getImportAttributes(statement)
				);
				sideEffectDep.loc = Object.create(
					/** @type {DependencyLocation} */ (statement.loc)
				);
				sideEffectDep.loc.index = -1;
				parser.state.current.addDependency(sideEffectDep);
				return true;
			}
		);
		parser.hooks.exportExpression.tap(
			"HarmonyExportDependencyParserPlugin",
			(statement, expr) => {
				const isFunctionDeclaration = expr.type === "FunctionDeclaration";
				const exprRange = /** @type {Range} */ (expr.range);
				const statementRange = /** @type {Range} */ (statement.range);
				const comments = parser.getComments([statementRange[0], exprRange[0]]);
				const dep = new HarmonyExportExpressionDependency(
					exprRange,
					statementRange,
					comments
						.map(c => {
							switch (c.type) {
								case "Block":
									return `/*${c.value}*/`;
								case "Line":
									return `//${c.value}\n`;
							}
							return "";
						})
						.join(""),
					expr.type.endsWith("Declaration") && expr.id
						? expr.id.name
						: isFunctionDeclaration
							? {
									range: [
										exprRange[0],
										expr.params.length > 0
											? /** @type {Range} */ (expr.params[0].range)[0]
											: /** @type {Range} */ (expr.body.range)[0]
									],
									prefix: `${expr.async ? "async " : ""}function${
										expr.generator ? "*" : ""
									} `,
									suffix: `(${expr.params.length > 0 ? "" : ") "}`
								}
							: undefined
				);
				dep.loc = Object.create(
					/** @type {DependencyLocation} */ (statement.loc)
				);
				dep.loc.index = -1;
				parser.state.current.addDependency(dep);
				InnerGraph.addVariableUsage(
					parser,
					expr.type.endsWith("Declaration") && expr.id
						? expr.id.name
						: "*default*",
					"default"
				);
				return true;
			}
		);
		parser.hooks.exportSpecifier.tap(
			"HarmonyExportDependencyParserPlugin",
			(statement, id, name, idx) => {
				const settings = parser.getTagData(id, harmonySpecifierTag);
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
							settings.assertions
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
			"HarmonyExportDependencyParserPlugin",
			(statement, source, id, name, idx) => {
				const harmonyNamedExports = (parser.state.harmonyNamedExports =
					parser.state.harmonyNamedExports || new Set());
				let harmonyStarExports = null;
				if (name) {
					harmonyNamedExports.add(name);
				} else {
					harmonyStarExports = parser.state.harmonyStarExports =
						parser.state.harmonyStarExports || new HarmonyStarExportsList();
				}
				const dep = new HarmonyExportImportedSpecifierDependency(
					/** @type {string} */ (source),
					parser.state.lastHarmonyImportOrder,
					id ? [id] : [],
					name,
					harmonyNamedExports,
					harmonyStarExports && harmonyStarExports.slice(),
					exportPresenceMode,
					harmonyStarExports
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
