import { fileURLToPath, pathToFileURL } from 'node:url';
import vm, { isContext } from 'node:vm';
import { dirname, basename, extname, normalize, join, resolve } from 'pathe';
import { distDir } from '../path.js';
import { createCustomConsole } from './console.CtFJOzRO.js';
import { g as getDefaultRequestStubs, s as startVitestExecutor } from './execute.B7h3T_Hc.js';
import fs from 'node:fs';
import { dirname as dirname$1 } from 'node:path';
import { isPrimitive, isNodeBuiltin, toArray, getCachedData, setCacheData, isBareImport } from 'vite-node/utils';
import { createRequire, Module } from 'node:module';
import { CSS_LANGS_RE, KNOWN_ASSET_RE } from 'vite-node/constants';
import { p as provideWorkerState } from './utils.XdZDrNZV.js';

function interopCommonJsModule(interopDefault, mod) {
	if (isPrimitive(mod) || Array.isArray(mod) || mod instanceof Promise) return {
		keys: [],
		moduleExports: {},
		defaultExport: mod
	};
	if (interopDefault !== false && "__esModule" in mod && !isPrimitive(mod.default)) {
		const defaultKets = Object.keys(mod.default);
		const moduleKeys = Object.keys(mod);
		const allKeys = new Set([...defaultKets, ...moduleKeys]);
		allKeys.delete("default");
		return {
			keys: Array.from(allKeys),
			moduleExports: new Proxy(mod, { get(mod, prop) {
				return mod[prop] ?? mod.default?.[prop];
			} }),
			defaultExport: mod
		};
	}
	return {
		keys: Object.keys(mod).filter((key) => key !== "default"),
		moduleExports: mod,
		defaultExport: mod
	};
}
const SyntheticModule = vm.SyntheticModule;
const SourceTextModule = vm.SourceTextModule;

const _require = createRequire(import.meta.url);
const requiresCache = /* @__PURE__ */ new WeakMap();
class CommonjsExecutor {
	context;
	requireCache = /* @__PURE__ */ new Map();
	publicRequireCache = this.createProxyCache();
	moduleCache = /* @__PURE__ */ new Map();
	builtinCache = Object.create(null);
	extensions = Object.create(null);
	fs;
	Module;
	interopDefault;
	constructor(options) {
		this.context = options.context;
		this.fs = options.fileMap;
		this.interopDefault = options.interopDefault;
		const primitives = vm.runInContext("({ Object, Array, Error })", this.context);
		// eslint-disable-next-line ts/no-this-alias
		const executor = this;
		this.Module = class Module$1 {
			exports;
			isPreloading = false;
			id;
			filename;
			loaded;
			parent;
			children = [];
			path;
			paths = [];
			constructor(id = "", parent) {
				this.exports = primitives.Object.create(Object.prototype);
				// in our case the path should always be resolved already
				this.path = dirname(id);
				this.id = id;
				this.filename = id;
				this.loaded = false;
				this.parent = parent;
			}
			get require() {
				const require = requiresCache.get(this);
				if (require) return require;
				const _require = Module$1.createRequire(this.id);
				requiresCache.set(this, _require);
				return _require;
			}
			static register = () => {
				throw new Error(`[vitest] "register" is not available when running in Vitest.`);
			};
			static registerHooks = () => {
				throw new Error(`[vitest] "registerHooks" is not available when running in Vitest.`);
			};
			_compile(code, filename) {
				const cjsModule = Module$1.wrap(code);
				const script = new vm.Script(cjsModule, {
					filename,
					importModuleDynamically: options.importModuleDynamically
				});
				// @ts-expect-error mark script with current identifier
				script.identifier = filename;
				const fn = script.runInContext(executor.context);
				const __dirname = dirname(filename);
				executor.requireCache.set(filename, this);
				try {
					fn(this.exports, this.require, this, filename, __dirname);
					return this.exports;
				} finally {
					this.loaded = true;
				}
			}
			// exposed for external use, Node.js does the opposite
			static _load = (request, parent, _isMain) => {
				const require = Module$1.createRequire(parent?.filename ?? request);
				return require(request);
			};
			static wrap = (script) => {
				return Module$1.wrapper[0] + script + Module$1.wrapper[1];
			};
			static wrapper = new primitives.Array("(function (exports, require, module, __filename, __dirname) { ", "\n});");
			static builtinModules = Module.builtinModules;
			static findSourceMap = Module.findSourceMap;
			static SourceMap = Module.SourceMap;
			static syncBuiltinESMExports = Module.syncBuiltinESMExports;
			static _cache = executor.publicRequireCache;
			static _extensions = executor.extensions;
			static createRequire = (filename) => {
				return executor.createRequire(filename);
			};
			static runMain = () => {
				throw new primitives.Error("[vitest] \"runMain\" is not implemented.");
			};
			// @ts-expect-error not typed
			static _resolveFilename = Module._resolveFilename;
			// @ts-expect-error not typed
			static _findPath = Module._findPath;
			// @ts-expect-error not typed
			static _initPaths = Module._initPaths;
			// @ts-expect-error not typed
			static _preloadModules = Module._preloadModules;
			// @ts-expect-error not typed
			static _resolveLookupPaths = Module._resolveLookupPaths;
			// @ts-expect-error not typed
			static globalPaths = Module.globalPaths;
			static isBuiltin = Module.isBuiltin;
			static constants = Module.constants;
			static enableCompileCache = Module.enableCompileCache;
			static getCompileCacheDir = Module.getCompileCacheDir;
			static flushCompileCache = Module.flushCompileCache;
			static stripTypeScriptTypes = Module.stripTypeScriptTypes;
			static findPackageJSON = Module.findPackageJSON;
			static Module = Module$1;
		};
		this.extensions[".js"] = this.requireJs;
		this.extensions[".json"] = this.requireJson;
	}
	requireJs = (m, filename) => {
		const content = this.fs.readFile(filename);
		m._compile(content, filename);
	};
	requireJson = (m, filename) => {
		const code = this.fs.readFile(filename);
		m.exports = JSON.parse(code);
	};
	createRequire = (filename) => {
		const _require = createRequire(filename);
		const require = (id) => {
			const resolved = _require.resolve(id);
			const ext = extname(resolved);
			if (ext === ".node" || isNodeBuiltin(resolved)) return this.requireCoreModule(resolved);
			const module = new this.Module(resolved);
			return this.loadCommonJSModule(module, resolved);
		};
		require.resolve = _require.resolve;
		Object.defineProperty(require, "extensions", {
			get: () => this.extensions,
			set: () => {},
			configurable: true
		});
		require.main = void 0;
		require.cache = this.publicRequireCache;
		return require;
	};
	createProxyCache() {
		return new Proxy(Object.create(null), {
			defineProperty: () => true,
			deleteProperty: () => true,
			set: () => true,
			get: (_, key) => this.requireCache.get(key),
			has: (_, key) => this.requireCache.has(key),
			ownKeys: () => Array.from(this.requireCache.keys()),
			getOwnPropertyDescriptor() {
				return {
					configurable: true,
					enumerable: true
				};
			}
		});
	}
	// very naive implementation for Node.js require
	loadCommonJSModule(module, filename) {
		const cached = this.requireCache.get(filename);
		if (cached) return cached.exports;
		const extension = this.findLongestRegisteredExtension(filename);
		const loader = this.extensions[extension] || this.extensions[".js"];
		loader(module, filename);
		return module.exports;
	}
	findLongestRegisteredExtension(filename) {
		const name = basename(filename);
		let currentExtension;
		let index;
		let startIndex = 0;
		// eslint-disable-next-line no-cond-assign
		while ((index = name.indexOf(".", startIndex)) !== -1) {
			startIndex = index + 1;
			if (index === 0) continue;
			currentExtension = name.slice(index);
			if (this.extensions[currentExtension]) return currentExtension;
		}
		return ".js";
	}
	getCoreSyntheticModule(identifier) {
		if (this.moduleCache.has(identifier)) return this.moduleCache.get(identifier);
		const exports = this.require(identifier);
		const keys = Object.keys(exports);
		const module = new SyntheticModule([...keys, "default"], () => {
			for (const key of keys) module.setExport(key, exports[key]);
			module.setExport("default", exports);
		}, {
			context: this.context,
			identifier
		});
		this.moduleCache.set(identifier, module);
		return module;
	}
	getCjsSyntheticModule(path, identifier) {
		if (this.moduleCache.has(identifier)) return this.moduleCache.get(identifier);
		const exports = this.require(path);
		// TODO: technically module should be parsed to find static exports, implement for strict mode in #2854
		const { keys, moduleExports, defaultExport } = interopCommonJsModule(this.interopDefault, exports);
		const module = new SyntheticModule([...keys, "default"], function() {
			for (const key of keys) this.setExport(key, moduleExports[key]);
			this.setExport("default", defaultExport);
		}, {
			context: this.context,
			identifier
		});
		this.moduleCache.set(identifier, module);
		return module;
	}
	// TODO: use this in strict mode, when available in #2854
	// private _getNamedCjsExports(path: string): Set<string> {
	//   const cachedNamedExports = this.cjsNamedExportsMap.get(path)
	//   if (cachedNamedExports) {
	//     return cachedNamedExports
	//   }
	//   if (extname(path) === '.node') {
	//     const moduleExports = this.require(path)
	//     const namedExports = new Set(Object.keys(moduleExports))
	//     this.cjsNamedExportsMap.set(path, namedExports)
	//     return namedExports
	//   }
	//   const code = this.fs.readFile(path)
	//   const { exports, reexports } = parseCjs(code, path)
	//   const namedExports = new Set(exports)
	//   this.cjsNamedExportsMap.set(path, namedExports)
	//   for (const reexport of reexports) {
	//     if (isNodeBuiltin(reexport)) {
	//       const exports = this.require(reexport)
	//       if (exports !== null && typeof exports === 'object') {
	//         for (const e of Object.keys(exports)) {
	//           namedExports.add(e)
	//         }
	//       }
	//     }
	//     else {
	//       const require = this.createRequire(path)
	//       const resolved = require.resolve(reexport)
	//       const exports = this._getNamedCjsExports(resolved)
	//       for (const e of exports) {
	//         namedExports.add(e)
	//       }
	//     }
	//   }
	//   return namedExports
	// }
	require(identifier) {
		const ext = extname(identifier);
		if (ext === ".node" || isNodeBuiltin(identifier)) return this.requireCoreModule(identifier);
		const module = new this.Module(identifier);
		return this.loadCommonJSModule(module, identifier);
	}
	requireCoreModule(identifier) {
		const normalized = identifier.replace(/^node:/, "");
		if (this.builtinCache[normalized]) return this.builtinCache[normalized].exports;
		const moduleExports = _require(identifier);
		if (identifier === "node:module" || identifier === "module") {
			const module = new this.Module("/module.js");
			module.exports = this.Module;
			this.builtinCache[normalized] = module;
			return module.exports;
		}
		this.builtinCache[normalized] = _require.cache[normalized];
		// TODO: should we wrap module to rethrow context errors?
		return moduleExports;
	}
}

const dataURIRegex = /^data:(?<mime>text\/javascript|application\/json|application\/wasm)(?:;(?<encoding>charset=utf-8|base64))?,(?<code>.*)$/;
class EsmExecutor {
	moduleCache = /* @__PURE__ */ new Map();
	esmLinkMap = /* @__PURE__ */ new WeakMap();
	context;
	#httpIp = IPnumber("127.0.0.0");
	constructor(executor, options) {
		this.executor = executor;
		this.context = options.context;
	}
	async evaluateModule(m) {
		if (m.status === "unlinked") this.esmLinkMap.set(m, m.link((identifier, referencer) => this.executor.resolveModule(identifier, referencer.identifier)));
		await this.esmLinkMap.get(m);
		if (m.status === "linked") await m.evaluate();
		return m;
	}
	async createEsModule(fileURL, getCode) {
		const cached = this.moduleCache.get(fileURL);
		if (cached) return cached;
		const promise = this.loadEsModule(fileURL, getCode);
		this.moduleCache.set(fileURL, promise);
		return promise;
	}
	async loadEsModule(fileURL, getCode) {
		const code = await getCode();
		// TODO: should not be allowed in strict mode, implement in #2854
		if (fileURL.endsWith(".json")) {
			const m = new SyntheticModule(["default"], function() {
				const result = JSON.parse(code);
				this.setExport("default", result);
			});
			this.moduleCache.set(fileURL, m);
			return m;
		}
		const m = new SourceTextModule(code, {
			identifier: fileURL,
			context: this.context,
			importModuleDynamically: this.executor.importModuleDynamically,
			initializeImportMeta: (meta, mod) => {
				meta.url = mod.identifier;
				if (mod.identifier.startsWith("file:")) {
					const filename = fileURLToPath(mod.identifier);
					meta.filename = filename;
					meta.dirname = dirname$1(filename);
				}
				meta.resolve = (specifier, importer) => {
					return this.executor.resolve(specifier, importer != null ? importer.toString() : mod.identifier);
				};
			}
		});
		this.moduleCache.set(fileURL, m);
		return m;
	}
	async createWebAssemblyModule(fileUrl, getCode) {
		const cached = this.moduleCache.get(fileUrl);
		if (cached) return cached;
		const m = this.loadWebAssemblyModule(getCode(), fileUrl);
		this.moduleCache.set(fileUrl, m);
		return m;
	}
	async createNetworkModule(fileUrl) {
		// https://nodejs.org/api/esm.html#https-and-http-imports
		if (fileUrl.startsWith("http:")) {
			const url = new URL(fileUrl);
			if (url.hostname !== "localhost" && url.hostname !== "::1" && (IPnumber(url.hostname) & IPmask(8)) !== this.#httpIp) throw new Error(
				// we don't know the importer, so it's undefined (the same happens in --pool=threads)
				`import of '${fileUrl}' by undefined is not supported: http can only be used to load local resources (use https instead).`
			);
		}
		return this.createEsModule(fileUrl, () => fetch(fileUrl).then((r) => r.text()));
	}
	async loadWebAssemblyModule(source, identifier) {
		const cached = this.moduleCache.get(identifier);
		if (cached) return cached;
		const wasmModule = await WebAssembly.compile(source);
		const exports = WebAssembly.Module.exports(wasmModule);
		const imports = WebAssembly.Module.imports(wasmModule);
		const moduleLookup = {};
		for (const { module } of imports) if (moduleLookup[module] === void 0) moduleLookup[module] = await this.executor.resolveModule(module, identifier);
		const evaluateModule = (module) => this.evaluateModule(module);
		const syntheticModule = new SyntheticModule(exports.map(({ name }) => name), async function() {
			const importsObject = {};
			for (const { module, name } of imports) {
				if (!importsObject[module]) importsObject[module] = {};
				await evaluateModule(moduleLookup[module]);
				importsObject[module][name] = moduleLookup[module].namespace[name];
			}
			const wasmInstance = new WebAssembly.Instance(wasmModule, importsObject);
			for (const { name } of exports) this.setExport(name, wasmInstance.exports[name]);
		}, {
			context: this.context,
			identifier
		});
		return syntheticModule;
	}
	cacheModule(identifier, module) {
		this.moduleCache.set(identifier, module);
	}
	resolveCachedModule(identifier) {
		return this.moduleCache.get(identifier);
	}
	async createDataModule(identifier) {
		const cached = this.moduleCache.get(identifier);
		if (cached) return cached;
		const match = identifier.match(dataURIRegex);
		if (!match || !match.groups) throw new Error("Invalid data URI");
		const mime = match.groups.mime;
		const encoding = match.groups.encoding;
		if (mime === "application/wasm") {
			if (!encoding) throw new Error("Missing data URI encoding");
			if (encoding !== "base64") throw new Error(`Invalid data URI encoding: ${encoding}`);
			const module = this.loadWebAssemblyModule(Buffer.from(match.groups.code, "base64"), identifier);
			this.moduleCache.set(identifier, module);
			return module;
		}
		let code = match.groups.code;
		if (!encoding || encoding === "charset=utf-8") code = decodeURIComponent(code);
		else if (encoding === "base64") code = Buffer.from(code, "base64").toString();
		else throw new Error(`Invalid data URI encoding: ${encoding}`);
		if (mime === "application/json") {
			const module = new SyntheticModule(["default"], function() {
				const obj = JSON.parse(code);
				this.setExport("default", obj);
			}, {
				context: this.context,
				identifier
			});
			this.moduleCache.set(identifier, module);
			return module;
		}
		return this.createEsModule(identifier, () => code);
	}
}
function IPnumber(address) {
	const ip = address.match(/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/);
	if (ip) return (+ip[1] << 24) + (+ip[2] << 16) + (+ip[3] << 8) + +ip[4];
	throw new Error(`Expected IP address, received ${address}`);
}
function IPmask(maskSize) {
	return -1 << 32 - maskSize;
}

const CLIENT_ID = "/@vite/client";
const CLIENT_FILE = pathToFileURL(CLIENT_ID).href;
class ViteExecutor {
	esm;
	constructor(options) {
		this.options = options;
		this.esm = options.esmExecutor;
	}
	resolve = (identifier, parent) => {
		if (identifier === CLIENT_ID) {
			if (this.workerState.environment.transformMode === "web") return identifier;
			const packageName = this.getPackageName(parent);
			throw new Error(`[vitest] Vitest cannot handle ${CLIENT_ID} imported in ${parent} when running in SSR environment. Add "${packageName}" to "ssr.noExternal" if you are using Vite SSR, or to "server.deps.inline" if you are using Vite Node.`);
		}
	};
	get workerState() {
		return this.options.context.__vitest_worker__;
	}
	getPackageName(modulePath) {
		const path = normalize(modulePath);
		let name = path.split("/node_modules/").pop() || "";
		if (name?.startsWith("@")) name = name.split("/").slice(0, 2).join("/");
		else name = name.split("/")[0];
		return name;
	}
	async createViteModule(fileUrl) {
		if (fileUrl === CLIENT_FILE) return this.createViteClientModule();
		const cached = this.esm.resolveCachedModule(fileUrl);
		if (cached) return cached;
		return this.esm.createEsModule(fileUrl, async () => {
			try {
				const result = await this.options.transform(fileUrl, "web");
				if (result.code) return result.code;
			} catch (cause) {
				// rethrow vite error if it cannot load the module because it's not resolved
				if (typeof cause === "object" && cause.code === "ERR_LOAD_URL" || typeof cause?.message === "string" && cause.message.includes("Failed to load url")) {
					const error = new Error(`Cannot find module '${fileUrl}'`, { cause });
					error.code = "ERR_MODULE_NOT_FOUND";
					throw error;
				}
			}
			throw new Error(`[vitest] Failed to transform ${fileUrl}. Does the file exist?`);
		});
	}
	createViteClientModule() {
		const identifier = CLIENT_ID;
		const cached = this.esm.resolveCachedModule(identifier);
		if (cached) return cached;
		const stub = this.options.viteClientModule;
		const moduleKeys = Object.keys(stub);
		const module = new SyntheticModule(moduleKeys, function() {
			moduleKeys.forEach((key) => {
				this.setExport(key, stub[key]);
			});
		}, {
			context: this.options.context,
			identifier
		});
		this.esm.cacheModule(identifier, module);
		return module;
	}
	canResolve = (fileUrl) => {
		const transformMode = this.workerState.environment.transformMode;
		if (transformMode !== "web") return false;
		if (fileUrl === CLIENT_FILE) return true;
		const config = this.workerState.config.deps?.web || {};
		const [modulePath] = fileUrl.split("?");
		if (config.transformCss && CSS_LANGS_RE.test(modulePath)) return true;
		if (config.transformAssets && KNOWN_ASSET_RE.test(modulePath)) return true;
		if (toArray(config.transformGlobPattern).some((pattern) => pattern.test(modulePath))) return true;
		return false;
	};
}

const { existsSync, statSync } = fs;
// always defined when we use vm pool
const nativeResolve = import.meta.resolve;
// TODO: improve Node.js strict mode support in #2854
class ExternalModulesExecutor {
	cjs;
	esm;
	vite;
	context;
	fs;
	resolvers = [];
	#networkSupported = null;
	constructor(options) {
		this.options = options;
		this.context = options.context;
		this.fs = options.fileMap;
		this.esm = new EsmExecutor(this, { context: this.context });
		this.cjs = new CommonjsExecutor({
			context: this.context,
			importModuleDynamically: this.importModuleDynamically,
			fileMap: options.fileMap,
			interopDefault: options.interopDefault
		});
		this.vite = new ViteExecutor({
			esmExecutor: this.esm,
			context: this.context,
			transform: options.transform,
			viteClientModule: options.viteClientModule
		});
		this.resolvers = [this.vite.resolve];
	}
	async import(identifier) {
		const module = await this.createModule(identifier);
		await this.esm.evaluateModule(module);
		return module.namespace;
	}
	require(identifier) {
		return this.cjs.require(identifier);
	}
	createRequire(identifier) {
		return this.cjs.createRequire(identifier);
	}
	// dynamic import can be used in both ESM and CJS, so we have it in the executor
	importModuleDynamically = async (specifier, referencer) => {
		const module = await this.resolveModule(specifier, referencer.identifier);
		return await this.esm.evaluateModule(module);
	};
	resolveModule = async (specifier, referencer) => {
		let identifier = this.resolve(specifier, referencer);
		if (identifier instanceof Promise) identifier = await identifier;
		return await this.createModule(identifier);
	};
	resolve(specifier, parent) {
		for (const resolver of this.resolvers) {
			const id = resolver(specifier, parent);
			if (id) return id;
		}
		// import.meta.resolve can be asynchronous in older +18 Node versions
		return nativeResolve(specifier, parent);
	}
	findNearestPackageData(basedir) {
		const originalBasedir = basedir;
		const packageCache = this.options.packageCache;
		while (basedir) {
			const cached = getCachedData(packageCache, basedir, originalBasedir);
			if (cached) return cached;
			const pkgPath = join(basedir, "package.json");
			try {
				if (statSync(pkgPath, { throwIfNoEntry: false })?.isFile()) {
					const pkgData = JSON.parse(this.fs.readFile(pkgPath));
					if (packageCache) setCacheData(packageCache, pkgData, basedir, originalBasedir);
					return pkgData;
				}
			} catch {}
			const nextBasedir = dirname$1(basedir);
			if (nextBasedir === basedir) break;
			basedir = nextBasedir;
		}
		return {};
	}
	getModuleInformation(identifier) {
		if (identifier.startsWith("data:")) return {
			type: "data",
			url: identifier,
			path: identifier
		};
		const extension = extname(identifier);
		if (extension === ".node" || isNodeBuiltin(identifier)) return {
			type: "builtin",
			url: identifier,
			path: identifier
		};
		if (this.isNetworkSupported && (identifier.startsWith("http:") || identifier.startsWith("https:"))) return {
			type: "network",
			url: identifier,
			path: identifier
		};
		const isFileUrl = identifier.startsWith("file://");
		const pathUrl = isFileUrl ? fileURLToPath(identifier.split("?")[0]) : identifier;
		const fileUrl = isFileUrl ? identifier : pathToFileURL(pathUrl).toString();
		let type;
		if (this.vite.canResolve(fileUrl)) type = "vite";
		else if (extension === ".mjs") type = "module";
		else if (extension === ".cjs") type = "commonjs";
		else if (extension === ".wasm")
 // still experimental on NodeJS --experimental-wasm-modules
		// cf. ESM_FILE_FORMAT(url) in https://nodejs.org/docs/latest-v20.x/api/esm.html#resolution-algorithm
		type = "wasm";
		else {
			const pkgData = this.findNearestPackageData(normalize(pathUrl));
			type = pkgData.type === "module" ? "module" : "commonjs";
		}
		return {
			type,
			path: pathUrl,
			url: fileUrl
		};
	}
	createModule(identifier) {
		const { type, url, path } = this.getModuleInformation(identifier);
		// create ERR_MODULE_NOT_FOUND on our own since latest NodeJS's import.meta.resolve doesn't throw on non-existing namespace or path
		// https://github.com/nodejs/node/pull/49038
		if ((type === "module" || type === "commonjs" || type === "wasm") && !existsSync(path)) {
			const error = new Error(`Cannot find ${isBareImport(path) ? "package" : "module"} '${path}'`);
			error.code = "ERR_MODULE_NOT_FOUND";
			throw error;
		}
		switch (type) {
			case "data": return this.esm.createDataModule(identifier);
			case "builtin": return this.cjs.getCoreSyntheticModule(identifier);
			case "vite": return this.vite.createViteModule(url);
			case "wasm": return this.esm.createWebAssemblyModule(url, () => this.fs.readBuffer(path));
			case "module": return this.esm.createEsModule(url, () => this.fs.readFileAsync(path));
			case "commonjs": return this.cjs.getCjsSyntheticModule(path, identifier);
			case "network": return this.esm.createNetworkModule(url);
			default: {
				const _deadend = type;
				return _deadend;
			}
		}
	}
	get isNetworkSupported() {
		if (this.#networkSupported == null) if (process.execArgv.includes("--experimental-network-imports")) this.#networkSupported = true;
		else if (process.env.NODE_OPTIONS?.includes("--experimental-network-imports")) this.#networkSupported = true;
		else this.#networkSupported = false;
		return this.#networkSupported;
	}
}

const { promises, readFileSync } = fs;
class FileMap {
	fsCache = /* @__PURE__ */ new Map();
	fsBufferCache = /* @__PURE__ */ new Map();
	async readFileAsync(path) {
		const cached = this.fsCache.get(path);
		if (cached != null) return cached;
		const source = await promises.readFile(path, "utf-8");
		this.fsCache.set(path, source);
		return source;
	}
	readFile(path) {
		const cached = this.fsCache.get(path);
		if (cached != null) return cached;
		const source = readFileSync(path, "utf-8");
		this.fsCache.set(path, source);
		return source;
	}
	readBuffer(path) {
		const cached = this.fsBufferCache.get(path);
		if (cached != null) return cached;
		const buffer = readFileSync(path);
		this.fsBufferCache.set(path, buffer);
		return buffer;
	}
}

const entryFile = pathToFileURL(resolve(distDir, "workers/runVmTests.js")).href;
const fileMap = new FileMap();
const packageCache = /* @__PURE__ */ new Map();
async function runVmTests(method, state) {
	const { environment, ctx, rpc } = state;
	if (!environment.setupVM) {
		const envName = ctx.environment.name;
		const packageId = envName[0] === "." ? envName : `vitest-environment-${envName}`;
		throw new TypeError(`Environment "${ctx.environment.name}" is not a valid environment. Path "${packageId}" doesn't support vm environment because it doesn't provide "setupVM" method.`);
	}
	const vm = await environment.setupVM(ctx.environment.options || ctx.config.environmentOptions || {});
	state.durations.environment = performance.now() - state.durations.environment;
	process.env.VITEST_VM_POOL = "1";
	if (!vm.getVmContext) throw new TypeError(`Environment ${environment.name} doesn't provide "getVmContext" method. It should return a context created by "vm.createContext" method.`);
	const context = vm.getVmContext();
	if (!isContext(context)) throw new TypeError(`Environment ${environment.name} doesn't provide a valid context. It should be created by "vm.createContext" method.`);
	provideWorkerState(context, state);
	// this is unfortunately needed for our own dependencies
	// we need to find a way to not rely on this by default
	// because browser doesn't provide these globals
	context.process = process;
	context.global = context;
	context.console = state.config.disableConsoleIntercept ? console : createCustomConsole(state);
	// TODO: don't hardcode setImmediate in fake timers defaults
	context.setImmediate = setImmediate;
	context.clearImmediate = clearImmediate;
	const stubs = getDefaultRequestStubs(context);
	const externalModulesExecutor = new ExternalModulesExecutor({
		context,
		fileMap,
		packageCache,
		transform: rpc.transform,
		viteClientModule: stubs["/@vite/client"]
	});
	const executor = await startVitestExecutor({
		context,
		moduleCache: state.moduleCache,
		state,
		externalModulesExecutor,
		requestStubs: stubs
	});
	context.__vitest_mocker__ = executor.mocker;
	const { run } = await executor.importExternalModule(entryFile);
	const fileSpecs = ctx.files.map((f) => typeof f === "string" ? {
		filepath: f,
		testLocations: void 0
	} : f);
	try {
		await run(method, fileSpecs, ctx.config, executor);
	} finally {
		await vm.teardown?.();
		state.environmentTeardownRun = true;
	}
}

export { runVmTests as r };
