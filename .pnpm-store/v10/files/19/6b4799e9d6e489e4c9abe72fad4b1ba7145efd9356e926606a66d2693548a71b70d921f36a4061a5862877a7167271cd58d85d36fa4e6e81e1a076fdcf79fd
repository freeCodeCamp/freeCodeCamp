/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Sergey Melyukov @smelukov
*/

"use strict";

const browserslist = require("browserslist");
const path = require("path");

/** @typedef {import("./target").ApiTargetProperties} ApiTargetProperties */
/** @typedef {import("./target").EcmaTargetProperties} EcmaTargetProperties */
/** @typedef {import("./target").PlatformTargetProperties} PlatformTargetProperties */

// [[C:]/path/to/config][:env]
const inputRx = /^(?:((?:[A-Z]:)?[/\\].*?))?(?::(.+?))?$/i;

/**
 * @typedef {object} BrowserslistHandlerConfig
 * @property {string=} configPath
 * @property {string=} env
 * @property {string=} query
 */

/**
 * @param {string | null | undefined} input input string
 * @param {string} context the context directory
 * @returns {BrowserslistHandlerConfig} config
 */
const parse = (input, context) => {
	if (!input) {
		return {};
	}

	if (path.isAbsolute(input)) {
		const [, configPath, env] = inputRx.exec(input) || [];
		return { configPath, env };
	}

	const config = browserslist.findConfig(context);

	if (config && Object.keys(config).includes(input)) {
		return { env: input };
	}

	return { query: input };
};

/**
 * @param {string | null | undefined} input input string
 * @param {string} context the context directory
 * @returns {string[] | undefined} selected browsers
 */
const load = (input, context) => {
	const { configPath, env, query } = parse(input, context);

	// if a query is specified, then use it, else
	// if a path to a config is specified then load it, else
	// find a nearest config
	const config =
		query ||
		(configPath
			? browserslist.loadConfig({
					config: configPath,
					env
				})
			: browserslist.loadConfig({ path: context, env }));

	if (!config) return;
	return browserslist(config);
};

/**
 * @param {string[]} browsers supported browsers list
 * @returns {EcmaTargetProperties & PlatformTargetProperties & ApiTargetProperties} target properties
 */
const resolve = browsers => {
	/**
	 * Checks all against a version number
	 * @param {Record<string, number | [number, number]>} versions first supported version
	 * @returns {boolean} true if supports
	 */
	const rawChecker = versions =>
		browsers.every(v => {
			const [name, parsedVersion] = v.split(" ");
			if (!name) return false;
			const requiredVersion = versions[name];
			if (!requiredVersion) return false;
			const [parsedMajor, parserMinor] =
				// safari TP supports all features for normal safari
				parsedVersion === "TP"
					? [Infinity, Infinity]
					: parsedVersion.includes("-")
						? parsedVersion.split("-")[0].split(".")
						: parsedVersion.split(".");
			if (typeof requiredVersion === "number") {
				return Number(parsedMajor) >= requiredVersion;
			}
			return requiredVersion[0] === Number(parsedMajor)
				? Number(parserMinor) >= requiredVersion[1]
				: Number(parsedMajor) > requiredVersion[0];
		});
	const anyNode = browsers.some(b => b.startsWith("node "));
	const anyBrowser = browsers.some(b => /^(?!node)/.test(b));
	const browserProperty = !anyBrowser ? false : anyNode ? null : true;
	const nodeProperty = !anyNode ? false : anyBrowser ? null : true;
	// Internet Explorer Mobile, Blackberry browser and Opera Mini are very old browsers, they do not support new features
	const es6DynamicImport = rawChecker({
		/* eslint-disable camelcase */
		chrome: 63,
		and_chr: 63,
		edge: 79,
		firefox: 67,
		and_ff: 67,
		// ie: Not supported
		opera: 50,
		op_mob: 46,
		safari: [11, 1],
		ios_saf: [11, 3],
		samsung: [8, 2],
		android: 63,
		and_qq: [10, 4],
		baidu: [13, 18],
		and_uc: [15, 5],
		kaios: [3, 0],
		node: [12, 17]
		/* eslint-enable camelcase */
	});

	return {
		/* eslint-disable camelcase */
		const: rawChecker({
			chrome: 49,
			and_chr: 49,
			edge: 12,
			// Prior to Firefox 13, <code>const</code> is implemented, but re-assignment is not failing.
			// Prior to Firefox 46, a <code>TypeError</code> was thrown on redeclaration instead of a <code>SyntaxError</code>.
			firefox: 36,
			and_ff: 36,
			// Not supported in for-in and for-of loops
			// ie: Not supported
			opera: 36,
			op_mob: 36,
			safari: [10, 0],
			ios_saf: [10, 0],
			// Before 5.0 supported correctly in strict mode, otherwise supported without block scope
			samsung: [5, 0],
			android: 37,
			and_qq: [10, 4],
			// Supported correctly in strict mode, otherwise supported without block scope
			baidu: [13, 18],
			and_uc: [12, 12],
			kaios: [2, 5],
			node: [6, 0]
		}),
		arrowFunction: rawChecker({
			chrome: 45,
			and_chr: 45,
			edge: 12,
			// The initial implementation of arrow functions in Firefox made them automatically strict. This has been changed as of Firefox 24. The use of <code>'use strict';</code> is now required.
			// Prior to Firefox 39, a line terminator (<code>\\n</code>) was incorrectly allowed after arrow function arguments. This has been fixed to conform to the ES2015 specification and code like <code>() \\n => {}</code> will now throw a <code>SyntaxError</code> in this and later versions.
			firefox: 39,
			and_ff: 39,
			// ie: Not supported,
			opera: 32,
			op_mob: 32,
			safari: 10,
			ios_saf: 10,
			samsung: [5, 0],
			android: 45,
			and_qq: [10, 4],
			baidu: [7, 12],
			and_uc: [12, 12],
			kaios: [2, 5],
			node: [6, 0]
		}),
		forOf: rawChecker({
			chrome: 38,
			and_chr: 38,
			edge: 12,
			// Prior to Firefox 51, using the for...of loop construct with the const keyword threw a SyntaxError ("missing = in const declaration").
			firefox: 51,
			and_ff: 51,
			// ie: Not supported,
			opera: 25,
			op_mob: 25,
			safari: 7,
			ios_saf: 7,
			samsung: [3, 0],
			android: 38,
			// and_qq: Unknown support
			// baidu: Unknown support
			// and_uc: Unknown support
			kaios: [3, 0],
			node: [0, 12]
		}),
		destructuring: rawChecker({
			chrome: 49,
			and_chr: 49,
			edge: 14,
			firefox: 41,
			and_ff: 41,
			// ie: Not supported,
			opera: 36,
			op_mob: 36,
			safari: 8,
			ios_saf: 8,
			samsung: [5, 0],
			android: 49,
			// and_qq: Unknown support
			// baidu: Unknown support
			// and_uc: Unknown support
			kaios: [2, 5],
			node: [6, 0]
		}),
		bigIntLiteral: rawChecker({
			chrome: 67,
			and_chr: 67,
			edge: 79,
			firefox: 68,
			and_ff: 68,
			// ie: Not supported,
			opera: 54,
			op_mob: 48,
			safari: 14,
			ios_saf: 14,
			samsung: [9, 2],
			android: 67,
			and_qq: [13, 1],
			baidu: [13, 18],
			and_uc: [15, 5],
			kaios: [3, 0],
			node: [10, 4]
		}),
		// Support syntax `import` and `export` and no limitations and bugs on Node.js
		// Not include `export * as namespace`
		module: rawChecker({
			chrome: 61,
			and_chr: 61,
			edge: 16,
			firefox: 60,
			and_ff: 60,
			// ie: Not supported,
			opera: 48,
			op_mob: 45,
			safari: [10, 1],
			ios_saf: [10, 3],
			samsung: [8, 0],
			android: 61,
			and_qq: [10, 4],
			baidu: [13, 18],
			and_uc: [15, 5],
			kaios: [3, 0],
			node: [12, 17]
		}),
		dynamicImport: es6DynamicImport,
		dynamicImportInWorker: es6DynamicImport && !anyNode,
		// browserslist does not have info about globalThis
		// so this is based on mdn-browser-compat-data
		globalThis: rawChecker({
			chrome: 71,
			and_chr: 71,
			edge: 79,
			firefox: 65,
			and_ff: 65,
			// ie: Not supported,
			opera: 58,
			op_mob: 50,
			safari: [12, 1],
			ios_saf: [12, 2],
			samsung: [10, 1],
			android: 71,
			// and_qq: Unknown support
			// baidu: Unknown support
			// and_uc: Unknown support
			kaios: [3, 0],
			node: 12
		}),
		optionalChaining: rawChecker({
			chrome: 80,
			and_chr: 80,
			edge: 80,
			firefox: 74,
			and_ff: 79,
			// ie: Not supported,
			opera: 67,
			op_mob: 64,
			safari: [13, 1],
			ios_saf: [13, 4],
			samsung: 13,
			android: 80,
			// and_qq: Not supported
			// baidu: Not supported
			// and_uc: Not supported
			kaios: [3, 0],
			node: 14
		}),
		templateLiteral: rawChecker({
			chrome: 41,
			and_chr: 41,
			edge: 13,
			firefox: 34,
			and_ff: 34,
			// ie: Not supported,
			opera: 29,
			op_mob: 64,
			safari: [9, 1],
			ios_saf: 9,
			samsung: 4,
			android: 41,
			and_qq: [10, 4],
			baidu: [7, 12],
			and_uc: [12, 12],
			kaios: [2, 5],
			node: 4
		}),
		asyncFunction: rawChecker({
			chrome: 55,
			and_chr: 55,
			edge: 15,
			firefox: 52,
			and_ff: 52,
			// ie: Not supported,
			opera: 42,
			op_mob: 42,
			safari: 11,
			ios_saf: 11,
			samsung: [6, 2],
			android: 55,
			and_qq: [13, 1],
			baidu: [13, 18],
			and_uc: [15, 5],
			kaios: 3,
			node: [7, 6]
		}),
		/* eslint-enable camelcase */
		browser: browserProperty,
		electron: false,
		node: nodeProperty,
		nwjs: false,
		web: browserProperty,
		webworker: false,

		document: browserProperty,
		fetchWasm: browserProperty,
		global: nodeProperty,
		importScripts: false,
		importScriptsInWorker: true,
		nodeBuiltins: nodeProperty,
		nodePrefixForCoreModules:
			nodeProperty &&
			!browsers.some(b => b.startsWith("node 15")) &&
			rawChecker({
				node: [14, 18]
			}),
		require: nodeProperty
	};
};

module.exports = {
	resolve,
	load
};
