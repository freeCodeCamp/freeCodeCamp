import fs from 'node:fs';
import { pathToFileURL } from 'node:url';
import vm from 'node:vm';
import { processError } from '@vitest/utils/error';
import { normalize as normalize$1 } from 'pathe';
import { ViteNodeRunner, DEFAULT_REQUEST_STUBS } from 'vite-node/client';
import { isInternalRequest, isNodeBuiltin as isNodeBuiltin$1, isPrimitive, toFilePath } from 'vite-node/utils';
import { distDir } from '../path.js';
import { resolve as resolve$1, isAbsolute as isAbsolute$1 } from 'node:path';
import { MockerRegistry, mockObject, RedirectedModule, AutomockedModule } from '@vitest/mocker';
import { builtinModules } from 'node:module';
import { highlight } from '@vitest/utils';

const _DRIVE_LETTER_START_RE = /^[A-Za-z]:\//;
function normalizeWindowsPath(input = "") {
	if (!input) return input;
	return input.replace(/\\/g, "/").replace(_DRIVE_LETTER_START_RE, (r) => r.toUpperCase());
}
const _UNC_REGEX = /^[/\\]{2}/;
const _IS_ABSOLUTE_RE = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
const _DRIVE_LETTER_RE = /^[A-Za-z]:$/;
const _EXTNAME_RE = /.(\.[^./]+|\.)$/;
const normalize = function(path) {
	if (path.length === 0) return ".";
	path = normalizeWindowsPath(path);
	const isUNCPath = path.match(_UNC_REGEX);
	const isPathAbsolute = isAbsolute(path);
	const trailingSeparator = path[path.length - 1] === "/";
	path = normalizeString(path, !isPathAbsolute);
	if (path.length === 0) {
		if (isPathAbsolute) return "/";
		return trailingSeparator ? "./" : ".";
	}
	if (trailingSeparator) path += "/";
	if (_DRIVE_LETTER_RE.test(path)) path += "/";
	if (isUNCPath) {
		if (!isPathAbsolute) return `//./${path}`;
		return `//${path}`;
	}
	return isPathAbsolute && !isAbsolute(path) ? `/${path}` : path;
};
const join = function(...segments) {
	let path = "";
	for (const seg of segments) {
		if (!seg) continue;
		if (path.length > 0) {
			const pathTrailing = path[path.length - 1] === "/";
			const segLeading = seg[0] === "/";
			const both = pathTrailing && segLeading;
			if (both) path += seg.slice(1);
			else path += pathTrailing || segLeading ? seg : `/${seg}`;
		} else path += seg;
	}
	return normalize(path);
};
function cwd() {
	if (typeof process !== "undefined" && typeof process.cwd === "function") return process.cwd().replace(/\\/g, "/");
	return "/";
}
const resolve = function(...arguments_) {
	arguments_ = arguments_.map((argument) => normalizeWindowsPath(argument));
	let resolvedPath = "";
	let resolvedAbsolute = false;
	for (let index = arguments_.length - 1; index >= -1 && !resolvedAbsolute; index--) {
		const path = index >= 0 ? arguments_[index] : cwd();
		if (!path || path.length === 0) continue;
		resolvedPath = `${path}/${resolvedPath}`;
		resolvedAbsolute = isAbsolute(path);
	}
	resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute);
	if (resolvedAbsolute && !isAbsolute(resolvedPath)) return `/${resolvedPath}`;
	return resolvedPath.length > 0 ? resolvedPath : ".";
};
function normalizeString(path, allowAboveRoot) {
	let res = "";
	let lastSegmentLength = 0;
	let lastSlash = -1;
	let dots = 0;
	let char = null;
	for (let index = 0; index <= path.length; ++index) {
		if (index < path.length) char = path[index];
		else if (char === "/") break;
		else char = "/";
		if (char === "/") {
			if (lastSlash === index - 1 || dots === 1);
			else if (dots === 2) {
				if (res.length < 2 || lastSegmentLength !== 2 || res[res.length - 1] !== "." || res[res.length - 2] !== ".") {
					if (res.length > 2) {
						const lastSlashIndex = res.lastIndexOf("/");
						if (lastSlashIndex === -1) {
							res = "";
							lastSegmentLength = 0;
						} else {
							res = res.slice(0, lastSlashIndex);
							lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
						}
						lastSlash = index;
						dots = 0;
						continue;
					} else if (res.length > 0) {
						res = "";
						lastSegmentLength = 0;
						lastSlash = index;
						dots = 0;
						continue;
					}
				}
				if (allowAboveRoot) {
					res += res.length > 0 ? "/.." : "..";
					lastSegmentLength = 2;
				}
			} else {
				if (res.length > 0) res += `/${path.slice(lastSlash + 1, index)}`;
				else res = path.slice(lastSlash + 1, index);
				lastSegmentLength = index - lastSlash - 1;
			}
			lastSlash = index;
			dots = 0;
		} else if (char === "." && dots !== -1) ++dots;
		else dots = -1;
	}
	return res;
}
const isAbsolute = function(p) {
	return _IS_ABSOLUTE_RE.test(p);
};
const extname = function(p) {
	if (p === "..") return "";
	const match = _EXTNAME_RE.exec(normalizeWindowsPath(p));
	return match && match[1] || "";
};
const dirname = function(p) {
	const segments = normalizeWindowsPath(p).replace(/\/$/, "").split("/").slice(0, -1);
	if (segments.length === 1 && _DRIVE_LETTER_RE.test(segments[0])) segments[0] += "/";
	return segments.join("/") || (isAbsolute(p) ? "/" : ".");
};
const basename = function(p, extension) {
	const segments = normalizeWindowsPath(p).split("/");
	let lastSegment = "";
	for (let i = segments.length - 1; i >= 0; i--) {
		const val = segments[i];
		if (val) {
			lastSegment = val;
			break;
		}
	}
	return extension && lastSegment.endsWith(extension) ? lastSegment.slice(0, -extension.length) : lastSegment;
};

const { existsSync, readdirSync, statSync } = fs;
function findMockRedirect(root, mockPath, external) {
	const path = external || mockPath;
	// it's a node_module alias
	// all mocks should be inside <root>/__mocks__
	if (external || isNodeBuiltin(mockPath) || !existsSync(mockPath)) {
		const mockDirname = dirname(path);
		const mockFolder = join(root, "__mocks__", mockDirname);
		if (!existsSync(mockFolder)) return null;
		const baseOriginal = basename(path);
		function findFile(mockFolder, baseOriginal) {
			const files = readdirSync(mockFolder);
			for (const file of files) {
				const baseFile = basename(file, extname(file));
				if (baseFile === baseOriginal) {
					const path = resolve(mockFolder, file);
					// if the same name, return the file
					if (statSync(path).isFile()) return path;
					else {
						// find folder/index.{js,ts}
						const indexFile = findFile(path, "index");
						if (indexFile) return indexFile;
					}
				}
			}
			return null;
		}
		return findFile(mockFolder, baseOriginal);
	}
	const dir = dirname(path);
	const baseId = basename(path);
	const fullPath = resolve(dir, "__mocks__", baseId);
	return existsSync(fullPath) ? fullPath : null;
}
const builtins = new Set([
	...builtinModules,
	"assert/strict",
	"diagnostics_channel",
	"dns/promises",
	"fs/promises",
	"path/posix",
	"path/win32",
	"readline/promises",
	"stream/consumers",
	"stream/promises",
	"stream/web",
	"timers/promises",
	"util/types",
	"wasi"
]);
// https://nodejs.org/api/modules.html#built-in-modules-with-mandatory-node-prefix
const prefixedBuiltins = new Set([
	"node:sea",
	"node:sqlite",
	"node:test",
	"node:test/reporters"
]);
const NODE_BUILTIN_NAMESPACE = "node:";
function isNodeBuiltin(id) {
	if (prefixedBuiltins.has(id)) return true;
	return builtins.has(id.startsWith(NODE_BUILTIN_NAMESPACE) ? id.slice(NODE_BUILTIN_NAMESPACE.length) : id);
}

const spyModulePath = resolve$1(distDir, "spy.js");
class VitestMocker {
	static pendingIds = [];
	spyModule;
	primitives;
	filterPublicKeys;
	registries = /* @__PURE__ */ new Map();
	mockContext = { callstack: null };
	constructor(executor) {
		this.executor = executor;
		const context = this.executor.options.context;
		if (context) this.primitives = vm.runInContext("({ Object, Error, Function, RegExp, Symbol, Array, Map })", context);
		else this.primitives = {
			Object,
			Error,
			Function,
			RegExp,
			Symbol: globalThis.Symbol,
			Array,
			Map
		};
		const Symbol = this.primitives.Symbol;
		this.filterPublicKeys = [
			"__esModule",
			Symbol.asyncIterator,
			Symbol.hasInstance,
			Symbol.isConcatSpreadable,
			Symbol.iterator,
			Symbol.match,
			Symbol.matchAll,
			Symbol.replace,
			Symbol.search,
			Symbol.split,
			Symbol.species,
			Symbol.toPrimitive,
			Symbol.toStringTag,
			Symbol.unscopables
		];
	}
	get root() {
		return this.executor.options.root;
	}
	get moduleCache() {
		return this.executor.moduleCache;
	}
	get moduleDirectories() {
		return this.executor.options.moduleDirectories || [];
	}
	async initializeSpyModule() {
		this.spyModule = await this.executor.executeId(spyModulePath);
	}
	getMockerRegistry() {
		const suite = this.getSuiteFilepath();
		if (!this.registries.has(suite)) this.registries.set(suite, new MockerRegistry());
		return this.registries.get(suite);
	}
	reset() {
		this.registries.clear();
	}
	deleteCachedItem(id) {
		const mockId = this.getMockPath(id);
		if (this.moduleCache.has(mockId)) this.moduleCache.delete(mockId);
	}
	isModuleDirectory(path) {
		return this.moduleDirectories.some((dir) => path.includes(dir));
	}
	getSuiteFilepath() {
		return this.executor.state.filepath || "global";
	}
	createError(message, codeFrame) {
		const Error = this.primitives.Error;
		const error = new Error(message);
		Object.assign(error, { codeFrame });
		return error;
	}
	async resolvePath(rawId, importer) {
		let id;
		let fsPath;
		try {
			[id, fsPath] = await this.executor.originalResolveUrl(rawId, importer);
		} catch (error) {
			// it's allowed to mock unresolved modules
			if (error.code === "ERR_MODULE_NOT_FOUND") {
				const { id: unresolvedId } = error[Symbol.for("vitest.error.not_found.data")];
				id = unresolvedId;
				fsPath = unresolvedId;
			} else throw error;
		}
		// external is node_module or unresolved module
		// for example, some people mock "vscode" and don't have it installed
		const external = !isAbsolute$1(fsPath) || this.isModuleDirectory(fsPath) ? rawId : null;
		return {
			id,
			fsPath,
			external: external ? this.normalizePath(external) : external
		};
	}
	async resolveMocks() {
		if (!VitestMocker.pendingIds.length) return;
		await Promise.all(VitestMocker.pendingIds.map(async (mock) => {
			const { fsPath, external } = await this.resolvePath(mock.id, mock.importer);
			if (mock.action === "unmock") this.unmockPath(fsPath);
			if (mock.action === "mock") this.mockPath(mock.id, fsPath, external, mock.type, mock.factory);
		}));
		VitestMocker.pendingIds = [];
	}
	async callFunctionMock(dep, mock) {
		const cached = this.moduleCache.get(dep)?.exports;
		if (cached) return cached;
		const exports = await mock.resolve();
		const moduleExports = new Proxy(exports, { get: (target, prop) => {
			const val = target[prop];
			// 'then' can exist on non-Promise objects, need nested instanceof check for logic to work
			if (prop === "then") {
				if (target instanceof Promise) return target.then.bind(target);
			} else if (!(prop in target)) {
				if (this.filterPublicKeys.includes(prop)) return void 0;
				throw this.createError(`[vitest] No "${String(prop)}" export is defined on the "${mock.raw}" mock. Did you forget to return it from "vi.mock"?
If you need to partially mock a module, you can use "importOriginal" helper inside:
`, highlight(`vi.mock(import("${mock.raw}"), async (importOriginal) => {
  const actual = await importOriginal()
  return {
    ...actual,
    // your mocked methods
  }
})`));
			}
			return val;
		} });
		this.moduleCache.set(dep, { exports: moduleExports });
		return moduleExports;
	}
	// public method to avoid circular dependency
	getMockContext() {
		return this.mockContext;
	}
	// path used to store mocked dependencies
	getMockPath(dep) {
		return `mock:${dep}`;
	}
	getDependencyMock(id) {
		const registry = this.getMockerRegistry();
		return registry.get(id);
	}
	normalizePath(path) {
		return this.moduleCache.normalizePath(path);
	}
	resolveMockPath(mockPath, external) {
		return findMockRedirect(this.root, mockPath, external);
	}
	mockObject(object, mockExports = {}, behavior = "automock") {
		const spyOn = this.spyModule?.spyOn;
		if (!spyOn) throw this.createError("[vitest] `spyModule` is not defined. This is a Vitest error. Please open a new issue with reproduction.");
		return mockObject({
			globalConstructors: this.primitives,
			spyOn,
			type: behavior
		}, object, mockExports);
	}
	unmockPath(path) {
		const registry = this.getMockerRegistry();
		const id = this.normalizePath(path);
		registry.delete(id);
		this.deleteCachedItem(id);
	}
	mockPath(originalId, path, external, mockType, factory) {
		const registry = this.getMockerRegistry();
		const id = this.normalizePath(path);
		if (mockType === "manual") registry.register("manual", originalId, id, id, factory);
		else if (mockType === "autospy") registry.register("autospy", originalId, id, id);
		else {
			const redirect = this.resolveMockPath(id, external);
			if (redirect) registry.register("redirect", originalId, id, id, redirect);
			else registry.register("automock", originalId, id, id);
		}
		// every time the mock is registered, we remove the previous one from the cache
		this.deleteCachedItem(id);
	}
	async importActual(rawId, importer, callstack) {
		const { id, fsPath } = await this.resolvePath(rawId, importer);
		const result = await this.executor.cachedRequest(id, fsPath, callstack || [importer]);
		return result;
	}
	async importMock(rawId, importee) {
		const { id, fsPath, external } = await this.resolvePath(rawId, importee);
		const normalizedId = this.normalizePath(fsPath);
		let mock = this.getDependencyMock(normalizedId);
		if (!mock) {
			const redirect = this.resolveMockPath(normalizedId, external);
			if (redirect) mock = new RedirectedModule(rawId, normalizedId, normalizedId, redirect);
			else mock = new AutomockedModule(rawId, normalizedId, normalizedId);
		}
		if (mock.type === "automock" || mock.type === "autospy") {
			const mod = await this.executor.cachedRequest(id, fsPath, [importee]);
			return this.mockObject(mod, {}, mock.type);
		}
		if (mock.type === "manual") return this.callFunctionMock(fsPath, mock);
		return this.executor.dependencyRequest(mock.redirect, mock.redirect, [importee]);
	}
	async requestWithMock(url, callstack) {
		const id = this.normalizePath(url);
		const mock = this.getDependencyMock(id);
		if (!mock) return;
		const mockPath = this.getMockPath(id);
		if (mock.type === "automock" || mock.type === "autospy") {
			const cache = this.moduleCache.get(mockPath);
			if (cache.exports) return cache.exports;
			const exports = {};
			// Assign the empty exports object early to allow for cycles to work. The object will be filled by mockObject()
			this.moduleCache.set(mockPath, { exports });
			const mod = await this.executor.directRequest(url, url, callstack);
			this.mockObject(mod, exports, mock.type);
			return exports;
		}
		if (mock.type === "manual" && !callstack.includes(mockPath) && !callstack.includes(url)) try {
			callstack.push(mockPath);
			// this will not work if user does Promise.all(import(), import())
			// we can also use AsyncLocalStorage to store callstack, but this won't work in the browser
			// maybe we should improve mock API in the future?
			this.mockContext.callstack = callstack;
			return await this.callFunctionMock(mockPath, mock);
		} finally {
			this.mockContext.callstack = null;
			const indexMock = callstack.indexOf(mockPath);
			callstack.splice(indexMock, 1);
		}
		else if (mock.type === "redirect" && !callstack.includes(mock.redirect)) return mock.redirect;
	}
	queueMock(id, importer, factoryOrOptions) {
		const mockType = getMockType(factoryOrOptions);
		VitestMocker.pendingIds.push({
			action: "mock",
			id,
			importer,
			factory: typeof factoryOrOptions === "function" ? factoryOrOptions : void 0,
			type: mockType
		});
	}
	queueUnmock(id, importer) {
		VitestMocker.pendingIds.push({
			action: "unmock",
			id,
			importer
		});
	}
}
function getMockType(factoryOrOptions) {
	if (!factoryOrOptions) return "automock";
	if (typeof factoryOrOptions === "function") return "manual";
	return factoryOrOptions.spy ? "autospy" : "automock";
}

const normalizedDistDir = normalize$1(distDir);
const { readFileSync } = fs;
async function createVitestExecutor(options) {
	const runner = new VitestExecutor(options);
	await runner.executeId("/@vite/env");
	await runner.mocker.initializeSpyModule();
	return runner;
}
const externalizeMap = /* @__PURE__ */ new Map();
const bareVitestRegexp = /^@?vitest(?:\/|$)/;
const dispose = [];
function listenForErrors(state) {
	dispose.forEach((fn) => fn());
	dispose.length = 0;
	function catchError(err, type, event) {
		const worker = state();
		const listeners = process.listeners(event);
		// if there is another listener, assume that it's handled by user code
		// one is Vitest's own listener
		if (listeners.length > 1) return;
		const error = processError(err);
		if (!isPrimitive(error)) {
			error.VITEST_TEST_NAME = worker.current?.type === "test" ? worker.current.name : void 0;
			if (worker.filepath) error.VITEST_TEST_PATH = worker.filepath;
			error.VITEST_AFTER_ENV_TEARDOWN = worker.environmentTeardownRun;
		}
		state().rpc.onUnhandledError(error, type);
	}
	const uncaughtException = (e) => catchError(e, "Uncaught Exception", "uncaughtException");
	const unhandledRejection = (e) => catchError(e, "Unhandled Rejection", "unhandledRejection");
	process.on("uncaughtException", uncaughtException);
	process.on("unhandledRejection", unhandledRejection);
	dispose.push(() => {
		process.off("uncaughtException", uncaughtException);
		process.off("unhandledRejection", unhandledRejection);
	});
}
const relativeIds = {};
function getVitestImport(id, state) {
	if (externalizeMap.has(id)) return { externalize: externalizeMap.get(id) };
	// always externalize Vitest because we import from there before running tests
	// so we already have it cached by Node.js
	const root = state().config.root;
	const relativeRoot = relativeIds[root] ?? (relativeIds[root] = normalizedDistDir.slice(root.length));
	if (id.includes(distDir) || id.includes(normalizedDistDir) || relativeRoot && relativeRoot !== "/" && id.startsWith(relativeRoot)) {
		const { path } = toFilePath(id, root);
		const externalize = pathToFileURL(path).toString();
		externalizeMap.set(id, externalize);
		return { externalize };
	}
	if (bareVitestRegexp.test(id)) {
		externalizeMap.set(id, id);
		return { externalize: id };
	}
	return null;
}
async function startVitestExecutor(options) {
	const state = () => globalThis.__vitest_worker__ || options.state;
	const rpc = () => state().rpc;
	process.exit = (code = process.exitCode || 0) => {
		throw new Error(`process.exit unexpectedly called with "${code}"`);
	};
	listenForErrors(state);
	const getTransformMode = () => {
		return state().environment.transformMode ?? "ssr";
	};
	return await createVitestExecutor({
		async fetchModule(id) {
			const vitest = getVitestImport(id, state);
			if (vitest) return vitest;
			const result = await rpc().fetch(id, getTransformMode());
			if (result.id && !result.externalize) {
				const code = readFileSync(result.id, "utf-8");
				return { code };
			}
			return result;
		},
		resolveId(id, importer) {
			return rpc().resolveId(id, importer, getTransformMode());
		},
		get moduleCache() {
			return state().moduleCache;
		},
		get moduleExecutionInfo() {
			return state().moduleExecutionInfo;
		},
		get interopDefault() {
			return state().config.deps.interopDefault;
		},
		get moduleDirectories() {
			return state().config.deps.moduleDirectories;
		},
		get root() {
			return state().config.root;
		},
		get base() {
			return state().config.base;
		},
		...options
	});
}
function updateStyle(id, css) {
	if (typeof document === "undefined") return;
	const element = document.querySelector(`[data-vite-dev-id="${id}"]`);
	if (element) {
		element.textContent = css;
		return;
	}
	const head = document.querySelector("head");
	const style = document.createElement("style");
	style.setAttribute("type", "text/css");
	style.setAttribute("data-vite-dev-id", id);
	style.textContent = css;
	head?.appendChild(style);
}
function removeStyle(id) {
	if (typeof document === "undefined") return;
	const sheet = document.querySelector(`[data-vite-dev-id="${id}"]`);
	if (sheet) document.head.removeChild(sheet);
}
function getDefaultRequestStubs(context) {
	if (!context) {
		const clientStub = {
			...DEFAULT_REQUEST_STUBS["@vite/client"],
			updateStyle,
			removeStyle
		};
		return {
			"/@vite/client": clientStub,
			"@vite/client": clientStub
		};
	}
	const clientStub = vm.runInContext(`(defaultClient) => ({ ...defaultClient, updateStyle: ${updateStyle.toString()}, removeStyle: ${removeStyle.toString()} })`, context)(DEFAULT_REQUEST_STUBS["@vite/client"]);
	return {
		"/@vite/client": clientStub,
		"@vite/client": clientStub
	};
}
class VitestExecutor extends ViteNodeRunner {
	mocker;
	externalModules;
	primitives;
	constructor(options) {
		super({
			...options,
			interopDefault: options.context ? false : options.interopDefault
		});
		this.options = options;
		this.mocker = new VitestMocker(this);
		if (!options.context) {
			Object.defineProperty(globalThis, "__vitest_mocker__", {
				value: this.mocker,
				writable: true,
				configurable: true
			});
			this.primitives = {
				Object,
				Reflect,
				Symbol
			};
		} else if (options.externalModulesExecutor) {
			this.primitives = vm.runInContext("({ Object, Reflect, Symbol })", options.context);
			this.externalModules = options.externalModulesExecutor;
		} else throw new Error("When context is provided, externalModulesExecutor must be provided as well.");
	}
	getContextPrimitives() {
		return this.primitives;
	}
	get state() {
		// @ts-expect-error injected untyped global
		return globalThis.__vitest_worker__ || this.options.state;
	}
	get moduleExecutionInfo() {
		return this.options.moduleExecutionInfo;
	}
	shouldResolveId(id, _importee) {
		if (isInternalRequest(id) || id.startsWith("data:")) return false;
		const transformMode = this.state.environment?.transformMode ?? "ssr";
		// do not try and resolve node builtins in Node
		// import('url') returns Node internal even if 'url' package is installed
		return transformMode === "ssr" ? !isNodeBuiltin$1(id) : !id.startsWith("node:");
	}
	async originalResolveUrl(id, importer) {
		return super.resolveUrl(id, importer);
	}
	async resolveUrl(id, importer) {
		if (VitestMocker.pendingIds.length) await this.mocker.resolveMocks();
		if (importer && importer.startsWith("mock:")) importer = importer.slice(5);
		try {
			return await super.resolveUrl(id, importer);
		} catch (error) {
			if (error.code === "ERR_MODULE_NOT_FOUND") {
				const { id } = error[Symbol.for("vitest.error.not_found.data")];
				const path = this.mocker.normalizePath(id);
				const mock = this.mocker.getDependencyMock(path);
				if (mock !== void 0) return [id, id];
			}
			throw error;
		}
	}
	async runModule(context, transformed) {
		const vmContext = this.options.context;
		if (!vmContext || !this.externalModules) return super.runModule(context, transformed);
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
			const fn = vm.runInContext(code, vmContext, {
				...options,
				importModuleDynamically: this.externalModules.importModuleDynamically
			});
			await fn(...Object.values(context));
		} finally {
			this.options.moduleExecutionInfo?.set(options.filename, finishModuleExecutionInfo());
		}
	}
	async importExternalModule(path) {
		if (this.externalModules) return this.externalModules.import(path);
		return super.importExternalModule(path);
	}
	async dependencyRequest(id, fsPath, callstack) {
		const mocked = await this.mocker.requestWithMock(fsPath, callstack);
		if (typeof mocked === "string") return super.dependencyRequest(mocked, mocked, callstack);
		if (mocked && typeof mocked === "object") return mocked;
		return super.dependencyRequest(id, fsPath, callstack);
	}
	prepareContext(context) {
		// support `import.meta.vitest` for test entry
		if (this.state.filepath && normalize$1(this.state.filepath) === normalize$1(context.__filename)) {
			const globalNamespace = this.options.context || globalThis;
			Object.defineProperty(context.__vite_ssr_import_meta__, "vitest", { get: () => globalNamespace.__vitest_index__ });
		}
		if (this.options.context && this.externalModules) context.require = this.externalModules.createRequire(context.__filename);
		return context;
	}
}

export { VitestExecutor as V, getDefaultRequestStubs as g, startVitestExecutor as s };
