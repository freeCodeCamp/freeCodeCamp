/*
	MIT License http://www.opensource.org/licenses/mit-license.php
*/

"use strict";

const RuntimeGlobals = require("../RuntimeGlobals");
const RuntimeModule = require("../RuntimeModule");
const Template = require("../Template");
const JavascriptModulesPlugin = require("../javascript/JavascriptModulesPlugin");
const { getUndoPath } = require("../util/identifier");

/** @typedef {import("../Chunk")} Chunk */
/** @typedef {import("../Compilation")} Compilation */

class AutoPublicPathRuntimeModule extends RuntimeModule {
	constructor() {
		super("publicPath", RuntimeModule.STAGE_BASIC);
	}

	/**
	 * @returns {string | null} runtime code
	 */
	generate() {
		const compilation = /** @type {Compilation} */ (this.compilation);
		const { scriptType, importMetaName, path } = compilation.outputOptions;
		const chunkName = compilation.getPath(
			JavascriptModulesPlugin.getChunkFilenameTemplate(
				/** @type {Chunk} */
				(this.chunk),
				compilation.outputOptions
			),
			{
				chunk: this.chunk,
				contentHashType: "javascript"
			}
		);
		const undoPath = getUndoPath(
			chunkName,
			/** @type {string} */ (path),
			false
		);

		return Template.asString([
			"var scriptUrl;",
			scriptType === "module"
				? `if (typeof ${importMetaName}.url === "string") scriptUrl = ${importMetaName}.url`
				: Template.asString([
						`if (${RuntimeGlobals.global}.importScripts) scriptUrl = ${RuntimeGlobals.global}.location + "";`,
						`var document = ${RuntimeGlobals.global}.document;`,
						"if (!scriptUrl && document) {",
						Template.indent([
							// Technically we could use `document.currentScript instanceof window.HTMLScriptElement`,
							// but an attacker could try to inject `<script>HTMLScriptElement = HTMLImageElement</script>`
							// and use `<img name="currentScript" src="https://attacker.controlled.server/"></img>`
							"if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')",
							Template.indent("scriptUrl = document.currentScript.src;"),
							"if (!scriptUrl) {",
							Template.indent([
								'var scripts = document.getElementsByTagName("script");',
								"if(scripts.length) {",
								Template.indent([
									"var i = scripts.length - 1;",
									"while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;"
								]),
								"}"
							]),
							"}"
						]),
						"}"
					]),
			"// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration",
			'// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.',
			'if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");',
			'scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\\?.*$/, "").replace(/\\/[^\\/]+$/, "/");',
			!undoPath
				? `${RuntimeGlobals.publicPath} = scriptUrl;`
				: `${RuntimeGlobals.publicPath} = scriptUrl + ${JSON.stringify(
						undoPath
					)};`
		]);
	}
}

module.exports = AutoPublicPathRuntimeModule;
