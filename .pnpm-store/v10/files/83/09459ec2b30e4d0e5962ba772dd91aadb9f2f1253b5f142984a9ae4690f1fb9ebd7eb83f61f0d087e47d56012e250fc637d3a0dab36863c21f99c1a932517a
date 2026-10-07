/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const memoize = require("../util/memoize");

const getBrowserslistTargetHandler = memoize(() =>
	require("./browserslistTargetHandler")
);

/**
 * @param {string} context the context directory
 * @returns {string} default target
 */
const getDefaultTarget = context => {
	const browsers = getBrowserslistTargetHandler().load(null, context);
	return browsers ? "browserslist" : "web";
};

/**
 * @typedef {object} PlatformTargetProperties
 * @property {boolean | null} web web platform, importing of http(s) and std: is available
 * @property {boolean | null} browser browser platform, running in a normal web browser
 * @property {boolean | null} webworker (Web)Worker platform, running in a web/shared/service worker
 * @property {boolean | null} node node platform, require of node built-in modules is available
 * @property {boolean | null} nwjs nwjs platform, require of legacy nw.gui is available
 * @property {boolean | null} electron electron platform, require of some electron built-in modules is available
 */

/**
 * @typedef {object} ElectronContextTargetProperties
 * @property {boolean | null} electronMain in main context
 * @property {boolean | null} electronPreload in preload context
 * @property {boolean | null} electronRenderer in renderer context with node integration
 */

/**
 * @typedef {object} ApiTargetProperties
 * @property {boolean | null} require has require function available
 * @property {boolean | null} nodeBuiltins has node.js built-in modules available
 * @property {boolean | null} nodePrefixForCoreModules node.js allows to use `node:` prefix for core modules
 * @property {boolean | null} document has document available (allows script tags)
 * @property {boolean | null} importScripts has importScripts available
 * @property {boolean | null} importScriptsInWorker has importScripts available when creating a worker
 * @property {boolean | null} fetchWasm has fetch function available for WebAssembly
 * @property {boolean | null} global has global variable available
 */

/**
 * @typedef {object} EcmaTargetProperties
 * @property {boolean | null} globalThis has globalThis variable available
 * @property {boolean | null} bigIntLiteral big int literal syntax is available
 * @property {boolean | null} const const and let variable declarations are available
 * @property {boolean | null} arrowFunction arrow functions are available
 * @property {boolean | null} forOf for of iteration is available
 * @property {boolean | null} destructuring destructuring is available
 * @property {boolean | null} dynamicImport async import() is available
 * @property {boolean | null} dynamicImportInWorker async import() is available when creating a worker
 * @property {boolean | null} module ESM syntax is available (when in module)
 * @property {boolean | null} optionalChaining optional chaining is available
 * @property {boolean | null} templateLiteral template literal is available
 * @property {boolean | null} asyncFunction async functions and await are available
 */

/**
 * @template T
 * @typedef {{ [P in keyof T]?: never }} Never<T>
 */

/**
 * @template A
 * @template B
 * @typedef {(A & Never<B>) | (Never<A> & B) | (A & B)} Mix<A, B>
 */

/** @typedef {Mix<Mix<PlatformTargetProperties, ElectronContextTargetProperties>, Mix<ApiTargetProperties, EcmaTargetProperties>>} TargetProperties */

/**
 * @param {string} major major version
 * @param {string | undefined} minor minor version
 * @returns {(vMajor: number, vMinor?: number) => boolean | undefined} check if version is greater or equal
 */
const versionDependent = (major, minor) => {
	if (!major) {
		return () => /** @type {undefined} */ (undefined);
	}
	/** @type {number} */
	const nMajor = Number(major);
	/** @type {number} */
	const nMinor = minor ? Number(minor) : 0;
	return (vMajor, vMinor = 0) =>
		nMajor > vMajor || (nMajor === vMajor && nMinor >= vMinor);
};

/** @type {[string, string, RegExp, (...args: string[]) => Partial<TargetProperties>][]} */
const TARGETS = [
	[
		"browserslist / browserslist:env / browserslist:query / browserslist:path-to-config / browserslist:path-to-config:env",
		"Resolve features from browserslist. Will resolve browserslist config automatically. Only browser or node queries are supported (electron is not supported). Examples: 'browserslist:modern' to use 'modern' environment from browserslist config",
		/^browserslist(?::(.+))?$/,
		(rest, context) => {
			const browserslistTargetHandler = getBrowserslistTargetHandler();
			const browsers = browserslistTargetHandler.load(
				rest ? rest.trim() : null,
				context
			);
			if (!browsers) {
				throw new Error(`No browserslist config found to handle the 'browserslist' target.
See https://github.com/browserslist/browserslist#queries for possible ways to provide a config.
The recommended way is to add a 'browserslist' key to your package.json and list supported browsers (resp. node.js versions).
You can also more options via the 'target' option: 'browserslist' / 'browserslist:env' / 'browserslist:query' / 'browserslist:path-to-config' / 'browserslist:path-to-config:env'`);
			}

			return browserslistTargetHandler.resolve(browsers);
		}
	],
	[
		"web",
		"Web browser.",
		/^web$/,
		() => ({
			node: false,
			web: true,
			webworker: null,
			browser: true,
			electron: false,
			nwjs: false,

			document: true,
			importScriptsInWorker: true,
			fetchWasm: true,
			nodeBuiltins: false,
			importScripts: false,
			require: false,
			global: false
		})
	],
	[
		"webworker",
		"Web Worker, SharedWorker or Service Worker.",
		/^webworker$/,
		() => ({
			node: false,
			web: true,
			webworker: true,
			browser: true,
			electron: false,
			nwjs: false,

			importScripts: true,
			importScriptsInWorker: true,
			fetchWasm: true,
			nodeBuiltins: false,
			require: false,
			document: false,
			global: false
		})
	],
	[
		"[async-]node[X[.Y]]",
		"Node.js in version X.Y. The 'async-' prefix will load chunks asynchronously via 'fs' and 'vm' instead of 'require()'. Examples: node14.5, async-node10.",
		/^(async-)?node((\d+)(?:\.(\d+))?)?$/,
		(asyncFlag, _, major, minor) => {
			const v = versionDependent(major, minor);
			// see https://node.green/
			return {
				node: true,
				web: false,
				webworker: false,
				browser: false,
				electron: false,
				nwjs: false,

				require: !asyncFlag,
				nodeBuiltins: true,
				// v16.0.0, v14.18.0
				nodePrefixForCoreModules: Number(major) < 15 ? v(14, 18) : v(16),
				global: true,
				document: false,
				fetchWasm: false,
				importScripts: false,
				importScriptsInWorker: false,

				globalThis: v(12),
				const: v(6),
				templateLiteral: v(4),
				optionalChaining: v(14),
				arrowFunction: v(6),
				asyncFunction: v(7, 6),
				forOf: v(5),
				destructuring: v(6),
				bigIntLiteral: v(10, 4),
				dynamicImport: v(12, 17),
				dynamicImportInWorker: major ? false : undefined,
				module: v(12, 17)
			};
		}
	],
	[
		"electron[X[.Y]]-main/preload/renderer",
		"Electron in version X.Y. Script is running in main, preload resp. renderer context.",
		/^electron((\d+)(?:\.(\d+))?)?-(main|preload|renderer)$/,
		(_, major, minor, context) => {
			const v = versionDependent(major, minor);
			// see https://node.green/ + https://github.com/electron/releases
			return {
				node: true,
				web: context !== "main",
				webworker: false,
				browser: false,
				electron: true,
				nwjs: false,

				electronMain: context === "main",
				electronPreload: context === "preload",
				electronRenderer: context === "renderer",

				global: true,
				nodeBuiltins: true,
				// 15.0.0	- Node.js	v16.5
				// 14.0.0 - Mode.js v14.17, but prefixes only since v14.18
				nodePrefixForCoreModules: v(15),

				require: true,
				document: context === "renderer",
				fetchWasm: context === "renderer",
				importScripts: false,
				importScriptsInWorker: true,

				globalThis: v(5),
				const: v(1, 1),
				templateLiteral: v(1, 1),
				optionalChaining: v(8),
				arrowFunction: v(1, 1),
				asyncFunction: v(1, 7),
				forOf: v(0, 36),
				destructuring: v(1, 1),
				bigIntLiteral: v(4),
				dynamicImport: v(11),
				dynamicImportInWorker: major ? false : undefined,
				module: v(11)
			};
		}
	],
	[
		"nwjs[X[.Y]] / node-webkit[X[.Y]]",
		"NW.js in version X.Y.",
		/^(?:nwjs|node-webkit)((\d+)(?:\.(\d+))?)?$/,
		(_, major, minor) => {
			const v = versionDependent(major, minor);
			// see https://node.green/ + https://github.com/nwjs/nw.js/blob/nw48/CHANGELOG.md
			return {
				node: true,
				web: true,
				webworker: null,
				browser: false,
				electron: false,
				nwjs: true,

				global: true,
				nodeBuiltins: true,
				document: false,
				importScriptsInWorker: false,
				fetchWasm: false,
				importScripts: false,
				require: false,

				globalThis: v(0, 43),
				const: v(0, 15),
				templateLiteral: v(0, 13),
				optionalChaining: v(0, 44),
				arrowFunction: v(0, 15),
				asyncFunction: v(0, 21),
				forOf: v(0, 13),
				destructuring: v(0, 15),
				bigIntLiteral: v(0, 32),
				dynamicImport: v(0, 43),
				dynamicImportInWorker: major ? false : undefined,
				module: v(0, 43)
			};
		}
	],
	[
		"esX",
		"EcmaScript in this version. Examples: es2020, es5.",
		/^es(\d+)$/,
		version => {
			let v = Number(version);
			if (v < 1000) v = v + 2009;
			return {
				const: v >= 2015,
				templateLiteral: v >= 2015,
				optionalChaining: v >= 2020,
				arrowFunction: v >= 2015,
				forOf: v >= 2015,
				destructuring: v >= 2015,
				module: v >= 2015,
				asyncFunction: v >= 2017,
				globalThis: v >= 2020,
				bigIntLiteral: v >= 2020,
				dynamicImport: v >= 2020,
				dynamicImportInWorker: v >= 2020
			};
		}
	]
];

/**
 * @param {string} target the target
 * @param {string} context the context directory
 * @returns {TargetProperties} target properties
 */
const getTargetProperties = (target, context) => {
	for (const [, , regExp, handler] of TARGETS) {
		const match = regExp.exec(target);
		if (match) {
			const [, ...args] = match;
			const result = handler(...args, context);
			if (result) return /** @type {TargetProperties} */ (result);
		}
	}
	throw new Error(
		`Unknown target '${target}'. The following targets are supported:\n${TARGETS.map(
			([name, description]) => `* ${name}: ${description}`
		).join("\n")}`
	);
};

/**
 * @param {TargetProperties[]} targetProperties array of target properties
 * @returns {TargetProperties} merged target properties
 */
const mergeTargetProperties = targetProperties => {
	/** @type {Set<keyof TargetProperties>} */
	const keys = new Set();
	for (const tp of targetProperties) {
		for (const key of Object.keys(tp)) {
			keys.add(/** @type {keyof TargetProperties} */ (key));
		}
	}
	/** @type {object} */
	const result = {};
	for (const key of keys) {
		let hasTrue = false;
		let hasFalse = false;
		for (const tp of targetProperties) {
			const value = tp[key];
			switch (value) {
				case true:
					hasTrue = true;
					break;
				case false:
					hasFalse = true;
					break;
			}
		}
		if (hasTrue || hasFalse)
			/** @type {TargetProperties} */
			(result)[key] = hasFalse && hasTrue ? null : Boolean(hasTrue);
	}
	return /** @type {TargetProperties} */ (result);
};

/**
 * @param {string[]} targets the targets
 * @param {string} context the context directory
 * @returns {TargetProperties} target properties
 */
const getTargetsProperties = (targets, context) =>
	mergeTargetProperties(targets.map(t => getTargetProperties(t, context)));

module.exports.getDefaultTarget = getDefaultTarget;
module.exports.getTargetProperties = getTargetProperties;
module.exports.getTargetsProperties = getTargetsProperties;
