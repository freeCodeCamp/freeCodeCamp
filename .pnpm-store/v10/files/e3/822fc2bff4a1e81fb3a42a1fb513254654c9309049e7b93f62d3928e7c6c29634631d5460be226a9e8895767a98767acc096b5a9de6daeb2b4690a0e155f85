'use strict';

var assert = require('node:assert');
var fs = require('node:fs');
var node_perf_hooks = require('node:perf_hooks');
var node_url = require('node:url');
var createDebug = require('debug');
var pathe = require('pathe');
var vite = require('vite');
var browser = require('./chunk-browser.cjs');
var esModuleLexer = require('es-module-lexer');
var constants = require('./constants.cjs');
var utils = require('./utils.cjs');
var sourceMap = require('./source-map.cjs');
require('node:module');
require('node:path');

function _interopNamespaceDefault(e) {
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var esModuleLexer__namespace = /*#__PURE__*/_interopNamespaceDefault(esModuleLexer);

/* eslint-disable no-console */
function hashCode(s) {
	return s.split("").reduce((a, b) => {
		a = (a << 5) - a + b.charCodeAt(0);
		return a & a;
	}, 0);
}
class Debugger {
	dumpDir;
	initPromise;
	externalizeMap = /* @__PURE__ */ new Map();
	constructor(root, options) {
		this.options = options;
		if (options.dumpModules) this.dumpDir = pathe.resolve(root, options.dumpModules === true ? ".vite-node/dump" : options.dumpModules);
		if (this.dumpDir) if (options.loadDumppedModules) console.info(browser.s.gray(`[vite-node] [debug] load modules from ${this.dumpDir}`));
		else console.info(browser.s.gray(`[vite-node] [debug] dump modules to ${this.dumpDir}`));
		this.initPromise = this.clearDump();
	}
	async clearDump() {
		if (!this.dumpDir) return;
		if (!this.options.loadDumppedModules && fs.existsSync(this.dumpDir)) await fs.promises.rm(this.dumpDir, {
			recursive: true,
			force: true
		});
		await fs.promises.mkdir(this.dumpDir, { recursive: true });
	}
	encodeId(id) {
		return `${id.replace(/[^\w@\-]/g, "_").replace(/_+/g, "_")}-${hashCode(id)}.js`;
	}
	async recordExternalize(id, path) {
		if (!this.dumpDir) return;
		this.externalizeMap.set(id, path);
		await this.writeInfo();
	}
	async dumpFile(id, result) {
		if (!result || !this.dumpDir) return;
		await this.initPromise;
		const name = this.encodeId(id);
		return await fs.promises.writeFile(pathe.join(this.dumpDir, name), `// ${id.replace(/\0/g, "\\0")}\n${result.code}`, "utf-8");
	}
	async loadDump(id) {
		if (!this.dumpDir) return null;
		await this.initPromise;
		const name = this.encodeId(id);
		const path = pathe.join(this.dumpDir, name);
		if (!fs.existsSync(path)) return null;
		const code = await fs.promises.readFile(path, "utf-8");
		return {
			code: code.replace(/^\/\/.*\n/, ""),
			map: void 0
		};
	}
	async writeInfo() {
		if (!this.dumpDir) return;
		const info = JSON.stringify({
			time: (/* @__PURE__ */ new Date()).toLocaleString(),
			externalize: Object.fromEntries(this.externalizeMap.entries())
		}, null, 2);
		return fs.promises.writeFile(pathe.join(this.dumpDir, "info.json"), info, "utf-8");
	}
}

const BUILTIN_EXTENSIONS = new Set([
	".mjs",
	".cjs",
	".node",
	".wasm"
]);
const ESM_EXT_RE = /\.(es|esm|esm-browser|esm-bundler|es6|module)\.js$/;
const ESM_FOLDER_RE = /\/(es|esm)\/(.*\.js)$/;
const defaultInline = [
	/virtual:/,
	/\.[mc]?ts$/,
	/[?&](init|raw|url|inline)\b/,
	constants.KNOWN_ASSET_RE
];
const depsExternal = [/\/node_modules\/.*\.cjs\.js$/, /\/node_modules\/.*\.mjs$/];
function guessCJSversion(id) {
	if (id.match(ESM_EXT_RE)) {
		for (const i of [
			id.replace(ESM_EXT_RE, ".mjs"),
			id.replace(ESM_EXT_RE, ".umd.js"),
			id.replace(ESM_EXT_RE, ".cjs.js"),
			id.replace(ESM_EXT_RE, ".js")
		]) if (fs.existsSync(i)) return i;
	}
	if (id.match(ESM_FOLDER_RE)) {
		for (const i of [
			id.replace(ESM_FOLDER_RE, "/umd/$1"),
			id.replace(ESM_FOLDER_RE, "/cjs/$1"),
			id.replace(ESM_FOLDER_RE, "/lib/$1"),
			id.replace(ESM_FOLDER_RE, "/$1")
		]) if (fs.existsSync(i)) return i;
	}
}
// The code from https://github.com/unjs/mlly/blob/c5bcca0cda175921344fd6de1bc0c499e73e5dac/src/syntax.ts#L51-L98
async function isValidNodeImport(id) {
	const extension = pathe.extname(id);
	if (BUILTIN_EXTENSIONS.has(extension)) return true;
	if (extension !== ".js") return false;
	id = id.replace("file:///", "");
	const package_ = await utils.findNearestPackageData(pathe.dirname(id));
	if (package_.type === "module") return true;
	if (/\.(?:\w+-)?esm?(?:-\w+)?\.js$|\/esm?\//.test(id)) return false;
	try {
		await esModuleLexer__namespace.init;
		const code = await fs.promises.readFile(id, "utf8");
		const [, , , hasModuleSyntax] = esModuleLexer__namespace.parse(code);
		return !hasModuleSyntax;
	} catch {
		return false;
	}
}
const _defaultExternalizeCache = /* @__PURE__ */ new Map();
async function shouldExternalize(id, options, cache = _defaultExternalizeCache) {
	if (!cache.has(id)) cache.set(id, _shouldExternalize(id, options));
	return cache.get(id);
}
async function _shouldExternalize(id, options) {
	if (utils.isNodeBuiltin(id)) return id;
	// data: should be processed by native import,
	// since it is a feature of ESM.
	// also externalize network imports since nodejs allows it when --experimental-network-imports
	if (id.startsWith("data:") || /^(?:https?:)?\/\//.test(id)) return id;
	id = patchWindowsImportPath(id);
	const moduleDirectories = (options === null || options === void 0 ? void 0 : options.moduleDirectories) || ["/node_modules/"];
	if (matchExternalizePattern(id, moduleDirectories, options === null || options === void 0 ? void 0 : options.inline)) return false;
	if ((options === null || options === void 0 ? void 0 : options.inlineFiles) && (options === null || options === void 0 ? void 0 : options.inlineFiles.includes(id))) return false;
	if (matchExternalizePattern(id, moduleDirectories, options === null || options === void 0 ? void 0 : options.external)) return id;
	// Unless the user explicitly opted to inline them, externalize Vite deps.
	// They are too big to inline by default.
	if ((options === null || options === void 0 ? void 0 : options.cacheDir) && id.includes(options.cacheDir)) return id;
	const isLibraryModule = moduleDirectories.some((dir) => id.includes(dir));
	const guessCJS = isLibraryModule && (options === null || options === void 0 ? void 0 : options.fallbackCJS);
	id = guessCJS ? guessCJSversion(id) || id : id;
	if (matchExternalizePattern(id, moduleDirectories, defaultInline)) return false;
	if (matchExternalizePattern(id, moduleDirectories, depsExternal)) return id;
	if (isLibraryModule && await isValidNodeImport(id)) return id;
	return false;
}
function matchExternalizePattern(id, moduleDirectories, patterns) {
	if (patterns == null) return false;
	if (patterns === true) return true;
	for (const ex of patterns) if (typeof ex === "string") {
		if (moduleDirectories.some((dir) => id.includes(pathe.join(dir, ex)))) return true;
	} else if (ex.test(id)) return true;
	return false;
}
function patchWindowsImportPath(path) {
	if (path.match(/^\w:\\/)) return `file:///${utils.slash(path)}`;
	else if (path.match(/^\w:\//)) return `file:///${path}`;
	else return path;
}

const debugRequest = createDebug("vite-node:server:request");
class ViteNodeServer {
	fetchPromiseMap = {
		ssr: /* @__PURE__ */ new Map(),
		web: /* @__PURE__ */ new Map()
	};
	transformPromiseMap = {
		ssr: /* @__PURE__ */ new Map(),
		web: /* @__PURE__ */ new Map()
	};
	durations = {
		ssr: /* @__PURE__ */ new Map(),
		web: /* @__PURE__ */ new Map()
	};
	existingOptimizedDeps = /* @__PURE__ */ new Set();
	fetchCaches = {
		ssr: /* @__PURE__ */ new Map(),
		web: /* @__PURE__ */ new Map()
	};
	fetchCache = /* @__PURE__ */ new Map();
	externalizeCache = /* @__PURE__ */ new Map();
	debugger;
	constructor(server, options = {}) {
		var _options$deps3;
		this.server = server;
		this.options = options;
		const ssrOptions = server.config.ssr;
		options.deps ?? (options.deps = {});
		options.deps.cacheDir = pathe.relative(server.config.root, options.deps.cacheDir || server.config.cacheDir);
		if (ssrOptions) {
			// we don't externalize ssr, because it has different semantics in Vite
			// if (ssrOptions.external) {
			//   options.deps.external ??= []
			//   options.deps.external.push(...ssrOptions.external)
			// }
			if (ssrOptions.noExternal === true) {
				var _options$deps;
				(_options$deps = options.deps).inline ?? (_options$deps.inline = true);
			} else if (options.deps.inline !== true) {
				var _options$deps2;
				(_options$deps2 = options.deps).inline ?? (_options$deps2.inline = []);
				const inline = options.deps.inline;
				options.deps.inline.push(...utils.toArray(ssrOptions.noExternal).filter((dep) => !inline.includes(dep)));
			}
		}
		if (process.env.VITE_NODE_DEBUG_DUMP) options.debug = Object.assign({
			dumpModules: !!process.env.VITE_NODE_DEBUG_DUMP,
			loadDumppedModules: process.env.VITE_NODE_DEBUG_DUMP === "load"
		}, options.debug ?? {});
		if (options.debug) this.debugger = new Debugger(server.config.root, options.debug);
		if (options.deps.inlineFiles) options.deps.inlineFiles = options.deps.inlineFiles.flatMap((file) => {
			if (file.startsWith("file://")) return file;
			const resolvedId = pathe.resolve(file);
			return [resolvedId, node_url.pathToFileURL(resolvedId).href];
		});
		(_options$deps3 = options.deps).moduleDirectories ?? (_options$deps3.moduleDirectories = []);
		const envValue = process.env.VITE_NODE_DEPS_MODULE_DIRECTORIES || process.env.npm_config_VITE_NODE_DEPS_MODULE_DIRECTORIES;
		const customModuleDirectories = envValue === null || envValue === void 0 ? void 0 : envValue.split(",");
		if (customModuleDirectories) options.deps.moduleDirectories.push(...customModuleDirectories);
		options.deps.moduleDirectories = options.deps.moduleDirectories.map((dir) => {
			if (!dir.startsWith("/")) dir = `/${dir}`;
			if (!dir.endsWith("/")) dir += "/";
			return pathe.normalize(dir);
		});
		// always add node_modules as a module directory
		if (!options.deps.moduleDirectories.includes("/node_modules/")) options.deps.moduleDirectories.push("/node_modules/");
	}
	shouldExternalize(id) {
		return shouldExternalize(id, this.options.deps, this.externalizeCache);
	}
	getTotalDuration() {
		const ssrDurations = [...this.durations.ssr.values()].flat();
		const webDurations = [...this.durations.web.values()].flat();
		return [...ssrDurations, ...webDurations].reduce((a, b) => a + b, 0);
	}
	async ensureExists(id) {
		if (this.existingOptimizedDeps.has(id)) return true;
		if (fs.existsSync(id)) {
			this.existingOptimizedDeps.add(id);
			return true;
		}
		return new Promise((resolve) => {
			setTimeout(() => {
				this.ensureExists(id).then(() => {
					resolve(true);
				});
			});
		});
	}
	async resolveId(id, importer, transformMode) {
		if (importer && !importer.startsWith(utils.withTrailingSlash(this.server.config.root))) importer = pathe.resolve(this.server.config.root, importer);
		const mode = transformMode ?? (importer && this.getTransformMode(importer) || "ssr");
		return this.server.pluginContainer.resolveId(id, importer, { ssr: mode === "ssr" });
	}
	getSourceMap(source) {
		var _this$fetchCache$get, _this$server$moduleGr;
		source = utils.normalizeModuleId(source);
		const fetchResult = (_this$fetchCache$get = this.fetchCache.get(source)) === null || _this$fetchCache$get === void 0 ? void 0 : _this$fetchCache$get.result;
		if (fetchResult === null || fetchResult === void 0 ? void 0 : fetchResult.map) return fetchResult.map;
		const ssrTransformResult = (_this$server$moduleGr = this.server.moduleGraph.getModuleById(source)) === null || _this$server$moduleGr === void 0 ? void 0 : _this$server$moduleGr.ssrTransformResult;
		return (ssrTransformResult === null || ssrTransformResult === void 0 ? void 0 : ssrTransformResult.map) || null;
	}
	assertMode(mode) {
		assert(mode === "web" || mode === "ssr", `"transformMode" can only be "web" or "ssr", received "${mode}".`);
	}
	async fetchModule(id, transformMode) {
		const mode = transformMode || this.getTransformMode(id);
		return this.fetchResult(id, mode).then((r) => {
			return this.options.sourcemap !== true ? {
				...r,
				map: void 0
			} : r;
		});
	}
	async fetchResult(id, mode) {
		const moduleId = utils.normalizeModuleId(id);
		this.assertMode(mode);
		const promiseMap = this.fetchPromiseMap[mode];
		// reuse transform for concurrent requests
		if (!promiseMap.has(moduleId)) promiseMap.set(moduleId, this._fetchModule(moduleId, mode).finally(() => {
			promiseMap.delete(moduleId);
		}));
		return promiseMap.get(moduleId);
	}
	async transformRequest(id, filepath = id, transformMode) {
		const mode = transformMode || this.getTransformMode(id);
		this.assertMode(mode);
		const promiseMap = this.transformPromiseMap[mode];
		// reuse transform for concurrent requests
		if (!promiseMap.has(id)) promiseMap.set(id, this._transformRequest(id, filepath, mode).finally(() => {
			promiseMap.delete(id);
		}));
		return promiseMap.get(id);
	}
	async transformModule(id, transformMode) {
		if (transformMode !== "web") throw new Error("`transformModule` only supports `transformMode: \"web\"`.");
		const normalizedId = utils.normalizeModuleId(id);
		const mod = this.server.moduleGraph.getModuleById(normalizedId);
		const result = (mod === null || mod === void 0 ? void 0 : mod.transformResult) || await this.server.transformRequest(normalizedId);
		return { code: result === null || result === void 0 ? void 0 : result.code };
	}
	getTransformMode(id) {
		var _this$options$transfo, _this$options$transfo2;
		const withoutQuery = id.split("?")[0];
		if ((_this$options$transfo = this.options.transformMode) === null || _this$options$transfo === void 0 || (_this$options$transfo = _this$options$transfo.web) === null || _this$options$transfo === void 0 ? void 0 : _this$options$transfo.some((r) => withoutQuery.match(r))) return "web";
		if ((_this$options$transfo2 = this.options.transformMode) === null || _this$options$transfo2 === void 0 || (_this$options$transfo2 = _this$options$transfo2.ssr) === null || _this$options$transfo2 === void 0 ? void 0 : _this$options$transfo2.some((r) => withoutQuery.match(r))) return "ssr";
		if (withoutQuery.match(/\.([cm]?[jt]sx?|json)$/)) return "ssr";
		return "web";
	}
	getChangedModule(id, file) {
		const module = this.server.moduleGraph.getModuleById(id) || this.server.moduleGraph.getModuleById(file);
		if (module) return module;
		const _modules = this.server.moduleGraph.getModulesByFile(file);
		if (!_modules || !_modules.size) return null;
		// find the latest changed module
		const modules = [..._modules];
		let mod = modules[0];
		let latestMax = -1;
		for (const m of _modules) {
			const timestamp = Math.max(m.lastHMRTimestamp, m.lastInvalidationTimestamp);
			if (timestamp > latestMax) {
				latestMax = timestamp;
				mod = m;
			}
		}
		return mod;
	}
	async _fetchModule(id, transformMode) {
		var _this$options$deps;
		let result;
		const cacheDir = (_this$options$deps = this.options.deps) === null || _this$options$deps === void 0 ? void 0 : _this$options$deps.cacheDir;
		if (cacheDir && id.includes(cacheDir)) {
			if (!id.startsWith(utils.withTrailingSlash(this.server.config.root))) id = pathe.join(this.server.config.root, id);
			const timeout = setTimeout(() => {
				throw new Error(`ViteNodeServer: ${id} not found. This is a bug, please report it.`);
			}, 5e3);
			await this.ensureExists(id);
			clearTimeout(timeout);
		}
		const { path: filePath } = utils.toFilePath(id, this.server.config.root);
		const moduleNode = this.getChangedModule(id, filePath);
		const cache = this.fetchCaches[transformMode].get(filePath);
		// lastUpdateTimestamp is the timestamp that marks the last time the module was changed
		// if lastUpdateTimestamp is 0, then the module was not changed since the server started
		// we test "timestamp === 0" for expressiveness, but it's not necessary
		const timestamp = moduleNode ? Math.max(moduleNode.lastHMRTimestamp, moduleNode.lastInvalidationTimestamp) : 0;
		if (cache && (timestamp === 0 || cache.timestamp >= timestamp)) return cache.result;
		const time = Date.now();
		const externalize = await this.shouldExternalize(filePath);
		let duration;
		if (externalize) {
			var _this$debugger;
			result = { externalize };
			(_this$debugger = this.debugger) === null || _this$debugger === void 0 || _this$debugger.recordExternalize(id, externalize);
		} else {
			const start = node_perf_hooks.performance.now();
			const r = await this._transformRequest(id, filePath, transformMode);
			duration = node_perf_hooks.performance.now() - start;
			result = {
				code: r === null || r === void 0 ? void 0 : r.code,
				map: r === null || r === void 0 ? void 0 : r.map
			};
		}
		const cacheEntry = {
			duration,
			timestamp: time,
			result
		};
		const durations = this.durations[transformMode].get(filePath) || [];
		this.durations[transformMode].set(filePath, [...durations, duration ?? 0]);
		this.fetchCaches[transformMode].set(filePath, cacheEntry);
		this.fetchCache.set(filePath, cacheEntry);
		return result;
	}
	async processTransformResult(filepath, result) {
		const mod = this.server.moduleGraph.getModuleById(filepath);
		return sourceMap.withInlineSourcemap(result, {
			filepath: (mod === null || mod === void 0 ? void 0 : mod.file) || filepath,
			root: this.server.config.root,
			noFirstLineMapping: Number(vite.version.split(".")[0]) >= 6
		});
	}
	async _transformRequest(id, filepath, transformMode) {
		var _this$options$debug, _this$options$debug2;
		debugRequest(id);
		let result = null;
		if ((_this$options$debug = this.options.debug) === null || _this$options$debug === void 0 ? void 0 : _this$options$debug.loadDumppedModules) {
			var _this$debugger2;
			result = await ((_this$debugger2 = this.debugger) === null || _this$debugger2 === void 0 ? void 0 : _this$debugger2.loadDump(id)) ?? null;
			if (result) return result;
		}
		if (transformMode === "web") {
			// for components like Vue, we want to use the client side
			// plugins but then convert the code to be consumed by the server
			result = await this.server.transformRequest(id);
			if (result) result = await this.server.ssrTransform(result.code, result.map, id);
		} else result = await this.server.transformRequest(id, { ssr: true });
		const sourcemap = this.options.sourcemap ?? "inline";
		if (sourcemap === "inline" && result) result = await this.processTransformResult(filepath, result);
		if ((_this$options$debug2 = this.options.debug) === null || _this$options$debug2 === void 0 ? void 0 : _this$options$debug2.dumpModules) {
			var _this$debugger3;
			await ((_this$debugger3 = this.debugger) === null || _this$debugger3 === void 0 ? void 0 : _this$debugger3.dumpFile(id, result));
		}
		return result;
	}
}

exports.ViteNodeServer = ViteNodeServer;
exports.guessCJSversion = guessCJSversion;
exports.shouldExternalize = shouldExternalize;
