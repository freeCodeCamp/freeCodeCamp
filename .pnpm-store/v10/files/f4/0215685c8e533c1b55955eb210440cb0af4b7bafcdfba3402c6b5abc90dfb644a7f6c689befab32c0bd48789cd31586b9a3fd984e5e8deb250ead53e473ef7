/*
	MIT License http://www.opensource.org/licenses/mit-license.php
*/

"use strict";

const { SyncWaterfallHook } = require("tapable");
const Compilation = require("../Compilation");
const RuntimeGlobals = require("../RuntimeGlobals");
const Template = require("../Template");
const HelperRuntimeModule = require("./HelperRuntimeModule");

/** @typedef {import("../Chunk")} Chunk */
/** @typedef {import("../Compiler")} Compiler */

/**
 * @typedef {object} LoadScriptCompilationHooks
 * @property {SyncWaterfallHook<[string, Chunk]>} createScript
 */

/** @type {WeakMap<Compilation, LoadScriptCompilationHooks>} */
const compilationHooksMap = new WeakMap();

class LoadScriptRuntimeModule extends HelperRuntimeModule {
	/**
	 * @param {Compilation} compilation the compilation
	 * @returns {LoadScriptCompilationHooks} hooks
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
				createScript: new SyncWaterfallHook(["source", "chunk"])
			};
			compilationHooksMap.set(compilation, hooks);
		}
		return hooks;
	}

	/**
	 * @param {boolean=} withCreateScriptUrl use create script url for trusted types
	 * @param {boolean=} withFetchPriority use `fetchPriority` attribute
	 */
	constructor(withCreateScriptUrl, withFetchPriority) {
		super("load script");
		this._withCreateScriptUrl = withCreateScriptUrl;
		this._withFetchPriority = withFetchPriority;
	}

	/**
	 * @returns {string | null} runtime code
	 */
	generate() {
		const compilation = /** @type {Compilation} */ (this.compilation);
		const { runtimeTemplate, outputOptions } = compilation;
		const {
			scriptType,
			chunkLoadTimeout: loadTimeout,
			crossOriginLoading,
			uniqueName,
			charset
		} = outputOptions;
		const fn = RuntimeGlobals.loadScript;

		const { createScript } =
			LoadScriptRuntimeModule.getCompilationHooks(compilation);

		const code = Template.asString([
			"script = document.createElement('script');",
			scriptType ? `script.type = ${JSON.stringify(scriptType)};` : "",
			charset ? "script.charset = 'utf-8';" : "",
			`script.timeout = ${/** @type {number} */ (loadTimeout) / 1000};`,
			`if (${RuntimeGlobals.scriptNonce}) {`,
			Template.indent(
				`script.setAttribute("nonce", ${RuntimeGlobals.scriptNonce});`
			),
			"}",
			uniqueName
				? 'script.setAttribute("data-webpack", dataWebpackPrefix + key);'
				: "",
			this._withFetchPriority
				? Template.asString([
						"if(fetchPriority) {",
						Template.indent(
							'script.setAttribute("fetchpriority", fetchPriority);'
						),
						"}"
					])
				: "",
			`script.src = ${
				this._withCreateScriptUrl
					? `${RuntimeGlobals.createScriptUrl}(url)`
					: "url"
			};`,
			crossOriginLoading
				? crossOriginLoading === "use-credentials"
					? 'script.crossOrigin = "use-credentials";'
					: Template.asString([
							"if (script.src.indexOf(window.location.origin + '/') !== 0) {",
							Template.indent(
								`script.crossOrigin = ${JSON.stringify(crossOriginLoading)};`
							),
							"}"
						])
				: ""
		]);

		return Template.asString([
			"var inProgress = {};",
			uniqueName
				? `var dataWebpackPrefix = ${JSON.stringify(`${uniqueName}:`)};`
				: "// data-webpack is not used as build has no uniqueName",
			"// loadScript function to load a script via script tag",
			`${fn} = ${runtimeTemplate.basicFunction(
				`url, done, key, chunkId${
					this._withFetchPriority ? ", fetchPriority" : ""
				}`,
				[
					"if(inProgress[url]) { inProgress[url].push(done); return; }",
					"var script, needAttach;",
					"if(key !== undefined) {",
					Template.indent([
						'var scripts = document.getElementsByTagName("script");',
						"for(var i = 0; i < scripts.length; i++) {",
						Template.indent([
							"var s = scripts[i];",
							`if(s.getAttribute("src") == url${
								uniqueName
									? ' || s.getAttribute("data-webpack") == dataWebpackPrefix + key'
									: ""
							}) { script = s; break; }`
						]),
						"}"
					]),
					"}",
					"if(!script) {",
					Template.indent([
						"needAttach = true;",
						createScript.call(code, /** @type {Chunk} */ (this.chunk))
					]),
					"}",
					"inProgress[url] = [done];",
					`var onScriptComplete = ${runtimeTemplate.basicFunction(
						"prev, event",
						Template.asString([
							"// avoid mem leaks in IE.",
							"script.onerror = script.onload = null;",
							"clearTimeout(timeout);",
							"var doneFns = inProgress[url];",
							"delete inProgress[url];",
							"script.parentNode && script.parentNode.removeChild(script);",
							`doneFns && doneFns.forEach(${runtimeTemplate.returningFunction(
								"fn(event)",
								"fn"
							)});`,
							"if(prev) return prev(event);"
						])
					)}`,
					`var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), ${loadTimeout});`,
					"script.onerror = onScriptComplete.bind(null, script.onerror);",
					"script.onload = onScriptComplete.bind(null, script.onload);",
					"needAttach && document.head.appendChild(script);"
				]
			)};`
		]);
	}
}

module.exports = LoadScriptRuntimeModule;
