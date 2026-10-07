'use strict';

var node_module = require('node:module');
var path = require('node:path');
var node_url = require('node:url');
var vm = require('node:vm');
var createDebug = require('debug');
var sourceMap = require('./source-map.cjs');
var utils = require('./utils.cjs');
require('pathe');
require('node:fs');

const { setTimeout, clearTimeout } = globalThis;
const debugExecute = createDebug("vite-node:client:execute");
const debugNative = createDebug("vite-node:client:native");
const clientStub = {
	injectQuery: (id) => id,
	createHotContext: () => {
		return {
			accept: () => {},
			prune: () => {},
			dispose: () => {},
			decline: () => {},
			invalidate: () => {},
			on: () => {},
			send: () => {}
		};
	},
	updateStyle: () => {},
	removeStyle: () => {}
};
const env = utils.createImportMetaEnvProxy();
const DEFAULT_REQUEST_STUBS = {
	"/@vite/client": clientStub,
	"@vite/client": clientStub
};
class ModuleCacheMap extends Map {
	normalizePath(fsPath) {
		return utils.normalizeModuleId(fsPath);
	}
	/**
	* Assign partial data to the map
	*/
	update(fsPath, mod) {
		fsPath = this.normalizePath(fsPath);
		if (!super.has(fsPath)) this.setByModuleId(fsPath, mod);
		else Object.assign(super.get(fsPath), mod);
		return this;
	}
	setByModuleId(modulePath, mod) {
		return super.set(modulePath, mod);
	}
	set(fsPath, mod) {
		return this.setByModuleId(this.normalizePath(fsPath), mod);
	}
	getByModuleId(modulePath) {
		if (!super.has(modulePath)) this.setByModuleId(modulePath, {});
		const mod = super.get(modulePath);
		if (!mod.imports) Object.assign(mod, {
			imports: /* @__PURE__ */ new Set(),
			importers: /* @__PURE__ */ new Set()
		});
		return mod;
	}
	get(fsPath) {
		return this.getByModuleId(this.normalizePath(fsPath));
	}
	deleteByModuleId(modulePath) {
		return super.delete(modulePath);
	}
	delete(fsPath) {
		return this.deleteByModuleId(this.normalizePath(fsPath));
	}
	invalidateModule(mod) {
		var _mod$importers, _mod$imports;
		delete mod.evaluated;
		delete mod.resolving;
		delete mod.promise;
		delete mod.exports;
		(_mod$importers = mod.importers) === null || _mod$importers === void 0 || _mod$importers.clear();
		(_mod$imports = mod.imports) === null || _mod$imports === void 0 || _mod$imports.clear();
		return true;
	}
	/**
	* Invalidate modules that dependent on the given modules, up to the main entry
	*/
	invalidateDepTree(ids, invalidated = /* @__PURE__ */ new Set()) {
		for (const _id of ids) {
			const id = this.normalizePath(_id);
			if (invalidated.has(id)) continue;
			invalidated.add(id);
			const mod = super.get(id);
			if (mod === null || mod === void 0 ? void 0 : mod.importers) this.invalidateDepTree(mod.importers, invalidated);
			super.delete(id);
		}
		return invalidated;
	}
	/**
	* Invalidate dependency modules of the given modules, down to the bottom-level dependencies
	*/
	invalidateSubDepTree(ids, invalidated = /* @__PURE__ */ new Set()) {
		for (const _id of ids) {
			const id = this.normalizePath(_id);
			if (invalidated.has(id)) continue;
			invalidated.add(id);
			const subIds = Array.from(super.entries()).filter(([, mod]) => {
				var _mod$importers2;
				return (_mod$importers2 = mod.importers) === null || _mod$importers2 === void 0 ? void 0 : _mod$importers2.has(id);
			}).map(([key]) => key);
			if (subIds.length) this.invalidateSubDepTree(subIds, invalidated);
			super.delete(id);
		}
		return invalidated;
	}
	/**
	* Return parsed source map based on inlined source map of the module
	*/
	getSourceMap(id) {
		const cache = this.get(id);
		if (cache.map) return cache.map;
		const map = cache.code && sourceMap.extractSourceMap(cache.code);
		if (map) {
			cache.map = map;
			return map;
		}
		return null;
	}
}
class ViteNodeRunner {
	root;
	debug;
	/**
	* Holds the cache of modules
	* Keys of the map are filepaths, or plain package names
	*/
	moduleCache;
	/**
	* Tracks the stack of modules being executed for the purpose of calculating import self-time.
	*
	* Note that while in most cases, imports are a linear stack of modules,
	* this is occasionally not the case, for example when you have parallel top-level dynamic imports like so:
	*
	* ```ts
	* await Promise.all([
	*  import('./module1'),
	*  import('./module2'),
	* ]);
	* ```
	*
	* In this case, the self time will be reported incorrectly for one of the modules (could go negative).
	* As top-level awaits with dynamic imports like this are uncommon, we don't handle this case specifically.
	*/
	executionStack = [];
	// `performance` can be mocked, so make sure we're using the original function
	performanceNow = performance.now.bind(performance);
	constructor(options) {
		this.options = options;
		this.root = options.root ?? process.cwd();
		this.moduleCache = options.moduleCache ?? new ModuleCacheMap();
		this.debug = options.debug ?? (typeof process !== "undefined" ? !!process.env.VITE_NODE_DEBUG_RUNNER : false);
	}
	async executeFile(file) {
		const url = `/@fs/${utils.slash(path.resolve(file))}`;
		return await this.cachedRequest(url, url, []);
	}
	async executeId(rawId) {
		const [id, url] = await this.resolveUrl(rawId);
		return await this.cachedRequest(id, url, []);
	}
	/** @internal */
	async cachedRequest(id, fsPath, callstack) {
		const importee = callstack[callstack.length - 1];
		const mod = this.moduleCache.get(fsPath);
		const { imports, importers } = mod;
		if (importee) importers.add(importee);
		const getStack = () => `stack:\n${[...callstack, fsPath].reverse().map((p) => `  - ${p}`).join("\n")}`;
		// check circular dependency
		if (callstack.includes(fsPath) || Array.from(imports.values()).some((i) => importers.has(i))) {
			if (mod.exports) return mod.exports;
		}
		let debugTimer;
		if (this.debug) debugTimer = setTimeout(() => console.warn(`[vite-node] module ${fsPath} takes over 2s to load.\n${getStack()}`), 2e3);
		try {
			// cached module
			if (mod.promise) return await mod.promise;
			const promise = this.directRequest(id, fsPath, callstack);
			Object.assign(mod, {
				promise,
				evaluated: false
			});
			return await promise;
		} finally {
			mod.evaluated = true;
			if (debugTimer) clearTimeout(debugTimer);
		}
	}
	shouldResolveId(id, _importee) {
		return !utils.isInternalRequest(id) && !utils.isNodeBuiltin(id) && !id.startsWith("data:");
	}
	async _resolveUrl(id, importer) {
		var _resolved$meta;
		const dep = utils.normalizeRequestId(id, this.options.base);
		if (!this.shouldResolveId(dep)) return [dep, dep];
		const { path, exists } = utils.toFilePath(dep, this.root);
		if (!this.options.resolveId || exists) return [dep, path];
		const resolved = await this.options.resolveId(dep, importer);
		// supported since Vite 5-beta.19
		if (resolved === null || resolved === void 0 || (_resolved$meta = resolved.meta) === null || _resolved$meta === void 0 || (_resolved$meta = _resolved$meta["vite:alias"]) === null || _resolved$meta === void 0 ? void 0 : _resolved$meta.noResolved) {
			const error = new Error(`Cannot find module '${id}'${importer ? ` imported from '${importer}'` : ""}.

- If you rely on tsconfig.json's "paths" to resolve modules, please install "vite-tsconfig-paths" plugin to handle module resolution.
- Make sure you don't have relative aliases in your Vitest config. Use absolute paths instead. Read more: https://vitest.dev/guide/common-errors`);
			Object.defineProperty(error, "code", {
				value: "ERR_MODULE_NOT_FOUND",
				enumerable: true
			});
			Object.defineProperty(error, Symbol.for("vitest.error.not_found.data"), {
				value: {
					id: dep,
					importer
				},
				enumerable: false
			});
			throw error;
		}
		const resolvedId = resolved ? utils.normalizeRequestId(resolved.id, this.options.base) : dep;
		return [resolvedId, resolvedId];
	}
	async resolveUrl(id, importee) {
		const resolveKey = `resolve:${id}`;
		// put info about new import as soon as possible, so we can start tracking it
		this.moduleCache.setByModuleId(resolveKey, { resolving: true });
		try {
			return await this._resolveUrl(id, importee);
		} finally {
			this.moduleCache.deleteByModuleId(resolveKey);
		}
	}
	/** @internal */
	async dependencyRequest(id, fsPath, callstack) {
		return await this.cachedRequest(id, fsPath, callstack);
	}
	async _fetchModule(id, importer) {
		try {
			return await this.options.fetchModule(id);
		} catch (cause) {
			// rethrow vite error if it cannot load the module because it's not resolved
			if (typeof cause === "object" && cause.code === "ERR_LOAD_URL" || typeof (cause === null || cause === void 0 ? void 0 : cause.message) === "string" && cause.message.includes("Failed to load url")) {
				const error = new Error(`Cannot find ${utils.isBareImport(id) ? "package" : "module"} '${id}'${importer ? ` imported from '${importer}'` : ""}`, { cause });
				error.code = "ERR_MODULE_NOT_FOUND";
				throw error;
			}
			throw cause;
		}
	}
	/** @internal */
	async directRequest(id, fsPath, _callstack) {
		const moduleId = utils.normalizeModuleId(fsPath);
		const callstack = [..._callstack, moduleId];
		const mod = this.moduleCache.getByModuleId(moduleId);
		const request = async (dep) => {
			const [id, depFsPath] = await this.resolveUrl(String(dep), fsPath);
			const depMod = this.moduleCache.getByModuleId(depFsPath);
			depMod.importers.add(moduleId);
			mod.imports.add(depFsPath);
			return this.dependencyRequest(id, depFsPath, callstack);
		};
		const requestStubs = this.options.requestStubs || DEFAULT_REQUEST_STUBS;
		if (id in requestStubs) return requestStubs[id];
		let { code: transformed, externalize } = await this._fetchModule(id, callstack[callstack.length - 2]);
		if (externalize) {
			debugNative(externalize);
			const exports = await this.interopedImport(externalize);
			mod.exports = exports;
			return exports;
		}
		if (transformed == null) throw new Error(`[vite-node] Failed to load "${id}" imported from ${callstack[callstack.length - 2]}`);
		const { Object, Reflect, Symbol } = this.getContextPrimitives();
		const modulePath = utils.cleanUrl(moduleId);
		// disambiguate the `<UNIT>:/` on windows: see nodejs/node#31710
		const href = node_url.pathToFileURL(modulePath).href;
		const __filename = node_url.fileURLToPath(href);
		const __dirname = path.dirname(__filename);
		const meta = {
			url: href,
			env,
			filename: __filename,
			dirname: __dirname
		};
		const exports = Object.create(null);
		Object.defineProperty(exports, Symbol.toStringTag, {
			value: "Module",
			enumerable: false,
			configurable: false
		});
		const SYMBOL_NOT_DEFINED = Symbol("not defined");
		let moduleExports = SYMBOL_NOT_DEFINED;
		// this proxy is triggered only on exports.{name} and module.exports access
		// inside the module itself. imported module is always "exports"
		const cjsExports = new Proxy(exports, {
			get: (target, p, receiver) => {
				if (Reflect.has(target, p)) return Reflect.get(target, p, receiver);
				return Reflect.get(Object.prototype, p, receiver);
			},
			getPrototypeOf: () => Object.prototype,
			set: (_, p, value) => {
				// treat "module.exports =" the same as "exports.default =" to not have nested "default.default",
				// so "exports.default" becomes the actual module
				if (p === "default" && this.shouldInterop(modulePath, { default: value }) && cjsExports !== value) {
					exportAll(cjsExports, value);
					exports.default = value;
					return true;
				}
				if (!Reflect.has(exports, "default")) exports.default = {};
				// returns undefined, when accessing named exports, if default is not an object
				// but is still present inside hasOwnKeys, this is Node behaviour for CJS
				if (moduleExports !== SYMBOL_NOT_DEFINED && utils.isPrimitive(moduleExports)) {
					defineExport(exports, p, () => void 0);
					return true;
				}
				if (!utils.isPrimitive(exports.default)) exports.default[p] = value;
				if (p !== "default") defineExport(exports, p, () => value);
				return true;
			}
		});
		Object.assign(mod, {
			code: transformed,
			exports
		});
		const moduleProxy = {
			set exports(value) {
				exportAll(cjsExports, value);
				exports.default = value;
				moduleExports = value;
			},
			get exports() {
				return cjsExports;
			}
		};
		// Vite hot context
		let hotContext;
		if (this.options.createHotContext) Object.defineProperty(meta, "hot", {
			enumerable: true,
			get: () => {
				var _this$options$createH, _this$options;
				hotContext || (hotContext = (_this$options$createH = (_this$options = this.options).createHotContext) === null || _this$options$createH === void 0 ? void 0 : _this$options$createH.call(_this$options, this, moduleId));
				return hotContext;
			},
			set: (value) => {
				hotContext = value;
			}
		});
		// Be careful when changing this
		// changing context will change amount of code added on line :114 (vm.runInThisContext)
		// this messes up sourcemaps for coverage
		// adjust `WRAPPER_LENGTH` variable in packages/coverage-v8/src/provider.ts if you do change this
		const context = this.prepareContext({
			__vite_ssr_import__: request,
			__vite_ssr_dynamic_import__: request,
			__vite_ssr_exports__: exports,
			__vite_ssr_exportAll__: (obj) => exportAll(exports, obj),
			__vite_ssr_exportName__: (name, getter) => Object.defineProperty(exports, name, {
				enumerable: true,
				configurable: true,
				get: getter
			}),
			__vite_ssr_import_meta__: meta,
			require: node_module.createRequire(href),
			exports: cjsExports,
			module: moduleProxy,
			__filename,
			__dirname
		});
		debugExecute(__filename);
		// remove shebang
		if (transformed[0] === "#") transformed = transformed.replace(/^#!.*/, (s) => " ".repeat(s.length));
		await this.runModule(context, transformed);
		return exports;
	}
	getContextPrimitives() {
		return {
			Object,
			Reflect,
			Symbol
		};
	}
	async runModule(context, transformed) {
		// add 'use strict' since ESM enables it by default
		const codeDefinition = `'use strict';async (${Object.keys(context).join(",")})=>{{`;
		const code = `${codeDefinition}${transformed}\n}}`;
		const options = {
			filename: context.__filename,
			lineOffset: 0,
			columnOffset: -codeDefinition.length
		};
		const finishModuleExecutionInfo = this.startCalculateModuleExecutionInfo(options.filename, codeDefinition.length);
		try {
			const fn = vm.runInThisContext(code, options);
			await fn(...Object.values(context));
		} finally {
			var _this$options$moduleE;
			(_this$options$moduleE = this.options.moduleExecutionInfo) === null || _this$options$moduleE === void 0 || _this$options$moduleE.set(options.filename, finishModuleExecutionInfo());
		}
	}
	/**
	* Starts calculating the module execution info such as the total duration and self time spent on executing the module.
	* Returns a function to call once the module has finished executing.
	*/
	startCalculateModuleExecutionInfo(filename, startOffset) {
		const startTime = this.performanceNow();
		this.executionStack.push({
			filename,
			startTime,
			subImportTime: 0
		});
		return () => {
			const duration = this.performanceNow() - startTime;
			const currentExecution = this.executionStack.pop();
			if (currentExecution == null) throw new Error("Execution stack is empty, this should never happen");
			const selfTime = duration - currentExecution.subImportTime;
			if (this.executionStack.length > 0) this.executionStack.at(-1).subImportTime += duration;
			return {
				startOffset,
				duration,
				selfTime
			};
		};
	}
	prepareContext(context) {
		return context;
	}
	/**
	* Define if a module should be interop-ed
	* This function mostly for the ability to override by subclass
	*/
	shouldInterop(path, mod) {
		if (this.options.interopDefault === false) return false;
		// never interop ESM modules
		// TODO: should also skip for `.js` with `type="module"`
		return !path.endsWith(".mjs") && "default" in mod;
	}
	importExternalModule(path) {
		return import(
			/* @vite-ignore */
			path
);
	}
	/**
	* Import a module and interop it
	*/
	async interopedImport(path) {
		const importedModule = await this.importExternalModule(path);
		if (!this.shouldInterop(path, importedModule)) return importedModule;
		const { mod, defaultExport } = interopModule(importedModule);
		return new Proxy(mod, {
			get(mod, prop) {
				if (prop === "default") return defaultExport;
				return mod[prop] ?? (defaultExport === null || defaultExport === void 0 ? void 0 : defaultExport[prop]);
			},
			has(mod, prop) {
				if (prop === "default") return defaultExport !== void 0;
				return prop in mod || defaultExport && prop in defaultExport;
			},
			getOwnPropertyDescriptor(mod, prop) {
				const descriptor = Reflect.getOwnPropertyDescriptor(mod, prop);
				if (descriptor) return descriptor;
				if (prop === "default" && defaultExport !== void 0) return {
					value: defaultExport,
					enumerable: true,
					configurable: true
				};
			}
		});
	}
}
function interopModule(mod) {
	if (utils.isPrimitive(mod)) return {
		mod: { default: mod },
		defaultExport: mod
	};
	let defaultExport = "default" in mod ? mod.default : mod;
	if (!utils.isPrimitive(defaultExport) && "__esModule" in defaultExport) {
		mod = defaultExport;
		if ("default" in defaultExport) defaultExport = defaultExport.default;
	}
	return {
		mod,
		defaultExport
	};
}
// keep consistency with Vite on how exports are defined
function defineExport(exports, key, value) {
	Object.defineProperty(exports, key, {
		enumerable: true,
		configurable: true,
		get: value
	});
}
function exportAll(exports, sourceModule) {
	// #1120 when a module exports itself it causes
	// call stack error
	if (exports === sourceModule) return;
	if (utils.isPrimitive(sourceModule) || Array.isArray(sourceModule) || sourceModule instanceof Promise) return;
	for (const key in sourceModule) if (key !== "default" && !(key in exports)) try {
		defineExport(exports, key, () => sourceModule[key]);
	} catch {}
}

exports.DEFAULT_REQUEST_STUBS = DEFAULT_REQUEST_STUBS;
exports.ModuleCacheMap = ModuleCacheMap;
exports.ViteNodeRunner = ViteNodeRunner;
