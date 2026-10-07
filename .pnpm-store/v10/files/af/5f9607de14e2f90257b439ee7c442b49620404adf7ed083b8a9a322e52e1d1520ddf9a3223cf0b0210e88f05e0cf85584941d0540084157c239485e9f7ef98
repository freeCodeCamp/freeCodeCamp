/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Natsu @xiaoxiaojx
*/

"use strict";

const { SyncWaterfallHook } = require("tapable");
const Compilation = require("../Compilation");
const RuntimeGlobals = require("../RuntimeGlobals");
const RuntimeModule = require("../RuntimeModule");
const Template = require("../Template");

/** @typedef {import("../Chunk")} Chunk */
/** @typedef {import("../Module").ReadOnlyRuntimeRequirements} ReadOnlyRuntimeRequirements */

/**
 * @typedef {object} CssInjectCompilationHooks
 * @property {SyncWaterfallHook<[string, Chunk]>} createStyle
 */

/** @type {WeakMap<Compilation, CssInjectCompilationHooks>} */
const compilationHooksMap = new WeakMap();

class CssInjectStyleRuntimeModule extends RuntimeModule {
	/**
	 * @param {Compilation} compilation the compilation
	 * @returns {CssInjectCompilationHooks} hooks
	 */
	static getCompilationHooks(compilation) {
		if (!(compilation instanceof Compilation)) {
			throw new TypeError(
				"The 'compilation' argument must be an instance of Compilation"
			);
		}
		let hooks = compilationHooksMap.get(compilation);
		if (hooks === undefined) {
			hooks = {
				createStyle: new SyncWaterfallHook(["source", "chunk"])
			};
			compilationHooksMap.set(compilation, hooks);
		}
		return hooks;
	}

	/**
	 * @param {ReadOnlyRuntimeRequirements} runtimeRequirements runtime requirements
	 */
	constructor(runtimeRequirements) {
		super("css inject style", RuntimeModule.STAGE_ATTACH);
		/** @type {ReadOnlyRuntimeRequirements} */
		this._runtimeRequirements = runtimeRequirements;
	}

	/**
	 * Generates runtime code for this runtime module.
	 * @returns {string | null} runtime code
	 */
	generate() {
		const compilation = /** @type {Compilation} */ (this.compilation);
		const { runtimeTemplate, outputOptions } = compilation;
		const { uniqueName } = outputOptions;
		const { _runtimeRequirements } = this;

		/** @type {boolean} */
		const withHmr =
			_runtimeRequirements &&
			_runtimeRequirements.has(RuntimeGlobals.hmrDownloadUpdateHandlers);

		const { createStyle } =
			CssInjectStyleRuntimeModule.getCompilationHooks(compilation);

		const createStyleElementCode = Template.asString([
			"var style = document.createElement('style');",
			"",
			`if (${RuntimeGlobals.scriptNonce}) {`,
			Template.indent(
				`style.setAttribute("nonce", ${RuntimeGlobals.scriptNonce});`
			),
			"}",
			'style.setAttribute("data-webpack", getDataWebpackId(key));'
		]);

		return Template.asString([
			`var dataWebpackPrefix = ${uniqueName ? JSON.stringify(`${uniqueName}:`) : '"webpack:"'};`,
			"",
			"function getDataWebpackId(identifier) {",
			Template.indent("return dataWebpackPrefix + identifier;"),
			"}",
			"",
			"function applyStyle(styleElement, css) {",
			Template.indent("styleElement.textContent = css;"),
			"}",
			"",
			"function removeStyleElement(styleElement) {",
			Template.indent([
				"if (styleElement.parentNode) {",
				Template.indent("styleElement.parentNode.removeChild(styleElement);"),
				"}"
			]),
			"}",
			"",
			"function findStyleElement(identifier) {",
			Template.indent([
				"var elements = document.getElementsByTagName('style');",
				"for (var i = 0; i < elements.length; i++) {",
				Template.indent([
					"var el = elements[i];",
					"if (el.getAttribute('data-webpack') === getDataWebpackId(identifier)) {",
					Template.indent("return el;"),
					"}"
				]),
				"}",
				"return null;"
			]),
			"}",
			"",
			"function insertStyleElement(key) {",
			Template.indent([
				createStyle.call(
					createStyleElementCode,
					/** @type {Chunk} */ (this.chunk)
				),
				"",
				"document.head.appendChild(style);",
				"",
				"return style;"
			]),
			"}",
			"",
			`${RuntimeGlobals.cssInjectStyle} = ${runtimeTemplate.basicFunction(
				"identifier, css",
				[
					"var element = findStyleElement(identifier);",
					"if (element) {",
					Template.indent("applyStyle(element, css);"),
					"} else {",
					Template.indent([
						"var element = insertStyleElement(identifier);",
						"applyStyle(element, css);"
					]),
					"}"
				]
			)};`,
			"",
			`${RuntimeGlobals.cssInjectStyle}.removeModules = ${runtimeTemplate.basicFunction(
				"removedModules",
				[
					"if (!removedModules) return;",
					"var identifiers = Array.isArray(removedModules) ? removedModules : [removedModules];",
					"for (var i = 0; i < identifiers.length; i++) {",
					Template.indent([
						"var identifier = identifiers[i];",
						"var element = findStyleElement(identifier);",
						"if (element) {",
						Template.indent("removeStyleElement(element);"),
						"}"
					]),
					"}"
				]
			)};`,
			withHmr
				? Template.asString([
						`${RuntimeGlobals.hmrDownloadUpdateHandlers}.cssInjectStyle = ${runtimeTemplate.basicFunction(
							"chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList, css",
							[
								"if (removedModules) {",
								Template.indent(
									`${RuntimeGlobals.cssInjectStyle}.removeModules(removedModules);`
								),
								"}"
							]
						)};`
					])
				: "// no css inject style HMR download handler"
		]);
	}
}

module.exports = CssInjectStyleRuntimeModule;
