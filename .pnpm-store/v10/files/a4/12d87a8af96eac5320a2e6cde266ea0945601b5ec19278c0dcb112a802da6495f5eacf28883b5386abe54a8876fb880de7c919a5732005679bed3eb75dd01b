import fs from 'node:fs';
import { isBareImport } from '@vitest/utils/helpers';
import { i as isBuiltin, a as isBrowserExternal, t as toBuiltin } from './modules.BJuCwlRJ.js';
import { E as EnvironmentTeardownError, a as getSafeWorkerState } from './utils.BX5Fg8C4.js';
import { pathToFileURL } from 'node:url';
import { normalize, join } from 'pathe';
import { distDir } from '../path.js';
import { VitestModuleEvaluator, unwrapId } from '../module-evaluator.js';
import { isAbsolute, resolve } from 'node:path';
import vm from 'node:vm';
import { MockerRegistry, mockObject, RedirectedModule, AutomockedModule } from '@vitest/mocker';
import { findMockRedirect } from '@vitest/mocker/redirect';
import * as viteModuleRunner from 'vite/module-runner';
import { T as Traces } from './traces.DT5aQ62U.js';

class BareModuleMocker {
	static pendingIds = [];
	spyModule;
	primitives;
	registries = /* @__PURE__ */ new Map();
	mockContext = { callstack: null };
	_otel;
	constructor(options) {
		this.options = options;
		this._otel = options.traces;
		this.primitives = {
			Object,
			Error,
			Function,
			RegExp,
			Symbol: globalThis.Symbol,
			Array,
			Map
		};
		if (options.spyModule) this.spyModule = options.spyModule;
	}
	get root() {
		return this.options.root;
	}
	get moduleDirectories() {
		return this.options.moduleDirectories || [];
	}
	getMockerRegistry() {
		const suite = this.getSuiteFilepath();
		if (!this.registries.has(suite)) this.registries.set(suite, new MockerRegistry());
		return this.registries.get(suite);
	}
	reset() {
		this.registries.clear();
	}
	invalidateModuleById(_id) {
		// implemented by mockers that control the module runner
	}
	isModuleDirectory(path) {
		return this.moduleDirectories.some((dir) => path.includes(dir));
	}
	getSuiteFilepath() {
		return this.options.getCurrentTestFilepath() || "global";
	}
	createError(message, codeFrame) {
		const Error = this.primitives.Error;
		const error = new Error(message);
		Object.assign(error, { codeFrame });
		return error;
	}
	async resolveId(rawId, importer) {
		return this._otel.$("vitest.mocker.resolve_id", { attributes: {
			"vitest.module.raw_id": rawId,
			"vitest.module.importer": rawId
		} }, async (span) => {
			const result = await this.options.resolveId(rawId, importer);
			if (!result) {
				span.addEvent("could not resolve id, fallback to unresolved values");
				const id = normalizeModuleId(rawId);
				span.setAttributes({
					"vitest.module.id": id,
					"vitest.module.url": rawId,
					"vitest.module.external": id,
					"vitest.module.fallback": true
				});
				return {
					id,
					url: rawId,
					external: id
				};
			}
			// external is node_module or unresolved module
			// for example, some people mock "vscode" and don't have it installed
			const external = !isAbsolute(result.file) || this.isModuleDirectory(result.file) ? normalizeModuleId(rawId) : null;
			const id = normalizeModuleId(result.id);
			span.setAttributes({
				"vitest.module.id": id,
				"vitest.module.url": result.url,
				"vitest.module.external": external ?? false
			});
			return {
				...result,
				id,
				external
			};
		});
	}
	async resolveMocks() {
		if (!BareModuleMocker.pendingIds.length) return;
		const resolveMock = async (mock) => {
			const { id, url, external } = await this.resolveId(mock.id, mock.importer);
			if (mock.action === "unmock") this.unmockPath(id);
			if (mock.action === "mock") this.mockPath(mock.id, id, url, external, mock.type, mock.factory);
		};
		// group consecutive mocks of the same action type together,
		// resolve in parallel inside each group, but run groups sequentially
		// to preserve mock/unmock ordering
		const groups = groupByConsecutiveAction(BareModuleMocker.pendingIds);
		for (const group of groups) await Promise.all(group.map(resolveMock));
		BareModuleMocker.pendingIds = [];
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
		return this.getMockerRegistry().getById(fixLeadingSlashes(id));
	}
	getDependencyMockByUrl(url) {
		return this.getMockerRegistry().get(url);
	}
	findMockRedirect(mockPath, external) {
		return findMockRedirect(this.root, mockPath, external);
	}
	mockObject(object, mockExportsOrModuleType, moduleType) {
		let mockExports;
		if (mockExportsOrModuleType === "automock" || mockExportsOrModuleType === "autospy") {
			moduleType = mockExportsOrModuleType;
			mockExports = void 0;
		} else mockExports = mockExportsOrModuleType;
		moduleType ??= "automock";
		const createMockInstance = this.spyModule?.createMockInstance;
		if (!createMockInstance) throw this.createError("[vitest] `spyModule` is not defined. This is a Vitest error. Please open a new issue with reproduction.");
		return mockObject({
			globalConstructors: this.primitives,
			createMockInstance,
			type: moduleType
		}, object, mockExports);
	}
	unmockPath(id) {
		this.getMockerRegistry().deleteById(id);
		this.invalidateModuleById(id);
	}
	mockPath(originalId, id, url, external, mockType, factory) {
		const registry = this.getMockerRegistry();
		if (mockType === "manual") registry.register("manual", originalId, id, url, factory);
		else if (mockType === "autospy") registry.register("autospy", originalId, id, url);
		else {
			const redirect = this.findMockRedirect(id, external);
			if (redirect) registry.register("redirect", originalId, id, url, redirect);
			else registry.register("automock", originalId, id, url);
		}
		// every time the mock is registered, we remove the previous one from the cache
		this.invalidateModuleById(id);
	}
	async importActual(_rawId, _importer, _callstack) {
		throw new Error(`importActual is not implemented`);
	}
	async importMock(_rawId, _importer, _callstack) {
		throw new Error(`importMock is not implemented`);
	}
	queueMock(id, importer, factoryOrOptions) {
		const mockType = getMockType(factoryOrOptions);
		BareModuleMocker.pendingIds.push({
			action: "mock",
			id,
			importer,
			factory: typeof factoryOrOptions === "function" ? factoryOrOptions : void 0,
			type: mockType
		});
	}
	queueUnmock(id, importer) {
		BareModuleMocker.pendingIds.push({
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
// unique id that is not available as "$bare_import" like "test"
// https://nodejs.org/api/modules.html#built-in-modules-with-mandatory-node-prefix
const prefixedBuiltins = new Set([
	"node:sea",
	"node:sqlite",
	"node:test",
	"node:test/reporters"
]);
const isWindows$1 = process.platform === "win32";
// transform file url to id
// virtual:custom -> virtual:custom
// \0custom -> \0custom
// /root/id -> /id
// /root/id.js -> /id.js
// C:/root/id.js -> /id.js
// C:\root\id.js -> /id.js
// TODO: expose this in vite/module-runner
function normalizeModuleId(file) {
	if (prefixedBuiltins.has(file)) return file;
	// if it's not in the root, keep it as a path, not a URL
	return slash(file).replace(/^\/@fs\//, isWindows$1 ? "" : "/").replace(/^node:/, "").replace(/^\/+/, "/").replace(/^file:\//, "/");
}
const windowsSlashRE = /\\/g;
function slash(p) {
	return p.replace(windowsSlashRE, "/");
}
function groupByConsecutiveAction(mocks) {
	const groups = [];
	for (const mock of mocks) {
		const last = groups.at(-1);
		if (last?.[0].action === mock.action) last.push(mock);
		else groups.push([mock]);
	}
	return groups;
}
const multipleSlashRe = /^\/+/;
// module-runner incorrectly replaces file:///path with `///path`
function fixLeadingSlashes(id) {
	if (id.startsWith("//")) return id.replace(multipleSlashRe, "/");
	return id;
}

// copied from vite/src/shared/utils.ts
const postfixRE = /[?#].*$/;
function cleanUrl(url) {
	return url.replace(postfixRE, "");
}
function splitFileAndPostfix(path) {
	const file = cleanUrl(path);
	return {
		file,
		postfix: path.slice(file.length)
	};
}
function injectQuery(url, queryToInject) {
	const { file, postfix } = splitFileAndPostfix(url);
	return `${file}?${queryToInject}${postfix[0] === "?" ? `&${postfix.slice(1)}` : postfix}`;
}
function removeQuery(url, queryToRemove) {
	return url.replace(new RegExp(`[?&]${queryToRemove}(?=[&#]|$)`), "").replace(/\?$/, "");
}

const spyModulePath = resolve(distDir, "spy.js");
class VitestMocker extends BareModuleMocker {
	filterPublicKeys;
	constructor(moduleRunner, options) {
		super(options);
		this.moduleRunner = moduleRunner;
		this.options = options;
		const context = this.options.context;
		if (context) this.primitives = vm.runInContext("({ Object, Error, Function, RegExp, Symbol, Array, Map })", context);
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
	get evaluatedModules() {
		return this.moduleRunner.evaluatedModules;
	}
	async initializeSpyModule() {
		if (this.spyModule) return;
		this.spyModule = await this.moduleRunner.import(spyModulePath);
	}
	reset() {
		this.registries.clear();
	}
	invalidateModuleById(id) {
		const mockId = this.getMockPath(id);
		const node = this.evaluatedModules.getModuleById(mockId);
		if (node) {
			this.evaluatedModules.invalidateModule(node);
			node.mockedExports = void 0;
		}
	}
	ensureModule(id, url) {
		const node = this.evaluatedModules.ensureModule(id, url);
		// TODO
		node.meta = {
			id,
			url,
			code: "",
			file: null,
			invalidate: false
		};
		return node;
	}
	async callFunctionMock(id, url, mock) {
		const node = this.ensureModule(id, url);
		if (node.exports) return node.exports;
		const exports$1 = await mock.resolve();
		const moduleExports = new Proxy(exports$1, { get: (target, prop) => {
			const val = target[prop];
			// 'then' can exist on non-Promise objects, need nested instanceof check for logic to work
			if (prop === "then") {
				if (target instanceof Promise) return target.then.bind(target);
			} else if (!(prop in target)) {
				if (this.filterPublicKeys.includes(prop)) return;
				throw this.createError(`[vitest] No "${String(prop)}" export is defined on the "${mock.raw}" mock. Did you forget to return it from "vi.mock"?
If you need to partially mock a module, you can use "importOriginal" helper inside:
`, `vi.mock(import("${mock.raw}"), async (importOriginal) => {
  const actual = await importOriginal()
  return {
    ...actual,
    // your mocked methods
  }
})`);
			}
			return val;
		} });
		node.exports = moduleExports;
		return moduleExports;
	}
	async importActual(rawId, importer, callstack) {
		const { url } = await this.resolveId(rawId, importer);
		const actualUrl = injectQuery(url, "_vitest_original");
		const node = await this.moduleRunner.fetchModule(actualUrl, importer);
		return await this.moduleRunner.cachedRequest(node.url, node, callstack || [importer], void 0, true);
	}
	async importMock(rawId, importer) {
		const { id, url, external } = await this.resolveId(rawId, importer);
		let mock = this.getDependencyMock(id);
		if (!mock) {
			const redirect = this.findMockRedirect(id, external);
			if (redirect) mock = new RedirectedModule(rawId, id, rawId, redirect);
			else mock = new AutomockedModule(rawId, id, rawId);
		}
		if (mock.type === "automock" || mock.type === "autospy") {
			const node = await this.moduleRunner.fetchModule(url, importer);
			const mod = await this.moduleRunner.cachedRequest(url, node, [importer], void 0, true);
			const Object = this.primitives.Object;
			return this.mockObject(mod, Object.create(Object.prototype), mock.type);
		}
		if (mock.type === "manual") return this.callFunctionMock(id, url, mock);
		const node = await this.moduleRunner.fetchModule(mock.redirect);
		return this.moduleRunner.cachedRequest(mock.redirect, node, [importer], void 0, true);
	}
	async requestWithMockedModule(url, evaluatedNode, callstack, mock) {
		return this._otel.$("vitest.mocker.evaluate", async (span) => {
			const mockId = this.getMockPath(evaluatedNode.id);
			span.setAttributes({
				"vitest.module.id": mockId,
				"vitest.mock.type": mock.type,
				"vitest.mock.id": mock.id,
				"vitest.mock.url": mock.url,
				"vitest.mock.raw": mock.raw
			});
			if (mock.type === "automock" || mock.type === "autospy") {
				const cache = this.evaluatedModules.getModuleById(mockId);
				if (cache && cache.mockedExports) return cache.mockedExports;
				const Object = this.primitives.Object;
				// we have to define a separate object that will copy all properties into itself
				// and can't just use the same `exports` define automatically by Vite before the evaluator
				const exports$1 = Object.create(null);
				Object.defineProperty(exports$1, Symbol.toStringTag, {
					value: "Module",
					configurable: true,
					writable: true
				});
				const node = this.ensureModule(mockId, this.getMockPath(evaluatedNode.url));
				node.meta = evaluatedNode.meta;
				node.file = evaluatedNode.file;
				node.mockedExports = exports$1;
				const mod = await this.moduleRunner.cachedRequest(url, node, callstack, void 0, true);
				this.mockObject(mod, exports$1, mock.type);
				return exports$1;
			}
			if (mock.type === "manual" && !callstack.includes(mockId) && !callstack.includes(url)) try {
				callstack.push(mockId);
				// this will not work if user does Promise.all(import(), import())
				// we can also use AsyncLocalStorage to store callstack, but this won't work in the browser
				// maybe we should improve mock API in the future?
				this.mockContext.callstack = callstack;
				return await this.callFunctionMock(mockId, this.getMockPath(url), mock);
			} finally {
				this.mockContext.callstack = null;
				const indexMock = callstack.indexOf(mockId);
				callstack.splice(indexMock, 1);
			}
			else if (mock.type === "redirect" && !callstack.includes(mock.redirect)) {
				span.setAttribute("vitest.mock.redirect", mock.redirect);
				return mock.redirect;
			}
		});
	}
	async mockedRequest(url, evaluatedNode, callstack) {
		const mock = this.getDependencyMock(evaluatedNode.id);
		if (!mock) return;
		return this.requestWithMockedModule(url, evaluatedNode, callstack, mock);
	}
}

class VitestTransport {
	constructor(options, evaluatedModules, callstacks) {
		this.options = options;
		this.evaluatedModules = evaluatedModules;
		this.callstacks = callstacks;
	}
	async invoke(event) {
		if (event.type !== "custom") return { error: /* @__PURE__ */ new Error(`Vitest Module Runner doesn't support Vite HMR events.`) };
		if (event.event !== "vite:invoke") return { error: /* @__PURE__ */ new Error(`Vitest Module Runner doesn't support ${event.event} event.`) };
		const { name, data } = event.data;
		if (name === "getBuiltins")
 // we return an empty array here to avoid client-side builtin check,
		// as we need builtins to go through `fetchModule`
		return { result: [] };
		if (name !== "fetchModule") return { error: /* @__PURE__ */ new Error(`Unknown method: ${name}. Expected "fetchModule".`) };
		try {
			return { result: await this.options.fetchModule(...data) };
		} catch (cause) {
			if (cause instanceof EnvironmentTeardownError) {
				const [id, importer] = data;
				let message = `Cannot load '${id}'${importer ? ` imported from ${importer}` : ""} after the environment was torn down. This is not a bug in Vitest.`;
				const moduleNode = importer ? this.evaluatedModules.getModuleById(importer) : void 0;
				const callstack = moduleNode ? this.callstacks.get(moduleNode) : void 0;
				if (callstack) message += ` The last recorded callstack:\n- ${[
					...callstack,
					importer,
					id
				].reverse().join("\n- ")}`;
				const error = new EnvironmentTeardownError(message);
				if (cause.stack) error.stack = cause.stack.replace(cause.message, error.message);
				return { error };
			}
			return { error: cause };
		}
	}
}

const createNodeImportMeta = (modulePath) => {
	if (!viteModuleRunner.createDefaultImportMeta) throw new Error(`createNodeImportMeta is not supported in this version of Vite.`);
	const defaultMeta = viteModuleRunner.createDefaultImportMeta(modulePath);
	const href = defaultMeta.url;
	const importMetaResolver = createImportMetaResolver();
	return {
		...defaultMeta,
		main: false,
		resolve(id, parent) {
			return (importMetaResolver ?? defaultMeta.resolve)(id, parent ?? href);
		}
	};
};
function createImportMetaResolver() {
	if (!import.meta.resolve) return;
	return (specifier, importer) => import.meta.resolve(specifier, importer);
}
// @ts-expect-error overriding private method
class VitestModuleRunner extends viteModuleRunner.ModuleRunner {
	mocker;
	moduleExecutionInfo;
	_otel;
	_callstacks;
	constructor(vitestOptions) {
		const options = vitestOptions;
		const evaluatedModules = options.evaluatedModules;
		const callstacks = /* @__PURE__ */ new WeakMap();
		const transport = new VitestTransport(options.transport, evaluatedModules, callstacks);
		super({
			transport,
			hmr: false,
			evaluatedModules,
			sourcemapInterceptor: "prepareStackTrace",
			createImportMeta: vitestOptions.createImportMeta
		}, options.evaluator);
		this.vitestOptions = vitestOptions;
		this._callstacks = callstacks;
		this._otel = vitestOptions.traces || new Traces({ enabled: false });
		this.moduleExecutionInfo = options.getWorkerState().moduleExecutionInfo;
		this.mocker = options.mocker || new VitestMocker(this, {
			spyModule: options.spyModule,
			context: options.vm?.context,
			traces: this._otel,
			resolveId: options.transport.resolveId,
			get root() {
				return options.getWorkerState().config.root;
			},
			get moduleDirectories() {
				return options.getWorkerState().config.deps.moduleDirectories || [];
			},
			getCurrentTestFilepath() {
				return options.getWorkerState().filepath;
			}
		});
		if (options.vm) options.vm.context.__vitest_mocker__ = this.mocker;
		else Object.defineProperty(globalThis, "__vitest_mocker__", {
			configurable: true,
			writable: true,
			value: this.mocker
		});
	}
	/**
	* Vite checks that the module has exports emulating the Node.js behaviour,
	* but Vitest is more relaxed.
	*
	* We should keep the Vite behavior when there is a `strict` flag.
	* @internal
	*/
	processImport(exports$1) {
		return exports$1;
	}
	async import(rawId) {
		const resolved = await this._otel.$("vitest.module.resolve_id", { attributes: { "vitest.module.raw_id": rawId } }, async (span) => {
			const result = await this.vitestOptions.transport.resolveId(rawId);
			if (result) span.setAttributes({
				"vitest.module.url": result.url,
				"vitest.module.file": result.file,
				"vitest.module.id": result.id
			});
			return result;
		});
		return super.import(resolved ? resolved.url : rawId);
	}
	async fetchModule(url, importer) {
		return await this.cachedModule(url, importer);
	}
	_cachedRequest(url, module, callstack = [], metadata) {
		// @ts-expect-error "cachedRequest" is private
		return super.cachedRequest(url, module, callstack, metadata);
	}
	/**
	* @internal
	*/
	async cachedRequest(url, mod, callstack = [], metadata, ignoreMock = false) {
		// Track for a better error message if dynamic import is not resolved properly
		this._callstacks.set(mod, callstack);
		if (ignoreMock) return this._cachedRequest(url, mod, callstack, metadata);
		let mocked;
		if (mod.meta && "mockedModule" in mod.meta) {
			const mockedModule = mod.meta.mockedModule;
			const mockId = this.mocker.getMockPath(mod.id);
			// bypass mock and force "importActual" behavior when:
			// - mock was removed by doUnmock (stale mockedModule in meta)
			// - self-import: mock factory/file is importing the module it's mocking
			const isStale = !this.mocker.getDependencyMock(mod.id);
			const isSelfImport = callstack.includes(mockId) || callstack.includes(url) || "redirect" in mockedModule && callstack.includes(mockedModule.redirect);
			if (isStale || isSelfImport) {
				const node = await this.fetchModule(injectQuery(url, "_vitest_original"));
				return this._cachedRequest(node.url, node, callstack, metadata);
			}
			mocked = await this.mocker.requestWithMockedModule(url, mod, callstack, mockedModule);
		} else mocked = await this.mocker.mockedRequest(url, mod, callstack);
		if (typeof mocked === "string") {
			const node = await this.fetchModule(mocked);
			return this._cachedRequest(mocked, node, callstack, metadata);
		}
		if (mocked != null && typeof mocked === "object") return mocked;
		return this._cachedRequest(url, mod, callstack, metadata);
	}
	/** @internal */
	_invalidateSubTreeById(ids, invalidated = /* @__PURE__ */ new Set()) {
		for (const id of ids) {
			if (invalidated.has(id)) continue;
			const node = this.evaluatedModules.getModuleById(id);
			if (!node) continue;
			invalidated.add(id);
			const subIds = Array.from(this.evaluatedModules.idToModuleMap).filter(([, mod]) => mod.importers.has(id)).map(([key]) => key);
			if (subIds.length) this._invalidateSubTreeById(subIds, invalidated);
			this.evaluatedModules.invalidateModule(node);
		}
	}
}

const bareVitestRegexp = /^@?vitest(?:\/|$)/;
const normalizedDistDir = normalize(distDir);
const relativeIds = {};
const externalizeMap = /* @__PURE__ */ new Map();
// all Vitest imports always need to be externalized
function getCachedVitestImport(id, state) {
	if (id.startsWith("/@fs/") || id.startsWith("\\@fs\\")) id = id.slice(process.platform === "win32" ? 5 : 4);
	if (externalizeMap.has(id)) return {
		externalize: externalizeMap.get(id),
		type: "module"
	};
	// always externalize Vitest because we import from there before running tests
	// so we already have it cached by Node.js
	const root = state().config.root;
	const relativeRoot = relativeIds[root] ?? (relativeIds[root] = normalizedDistDir.slice(root.length));
	if (id.includes(distDir) || id.includes(normalizedDistDir)) {
		const externalize = id.startsWith("file://") ? id : pathToFileURL(id).toString();
		externalizeMap.set(id, externalize);
		return {
			externalize,
			type: "module"
		};
	}
	if (relativeRoot && relativeRoot !== "/" && id.startsWith(relativeRoot)) {
		const externalize = pathToFileURL(join(root, id)).toString();
		externalizeMap.set(id, externalize);
		return {
			externalize,
			type: "module"
		};
	}
	if (bareVitestRegexp.test(id)) {
		externalizeMap.set(id, id);
		return {
			externalize: id,
			type: "module"
		};
	}
	return null;
}

const { readFileSync } = fs;
const VITEST_VM_CONTEXT_SYMBOL = "__vitest_vm_context__";
const cwd = process.cwd();
const isWindows = process.platform === "win32";
function startVitestModuleRunner(options) {
	const traces = options.traces;
	const state = () => getSafeWorkerState() || options.state;
	const rpc = () => state().rpc;
	const environment = () => {
		const environment = state().environment;
		return environment.viteEnvironment || environment.name;
	};
	const vm = options.context && options.externalModulesExecutor ? {
		context: options.context,
		externalModulesExecutor: options.externalModulesExecutor
	} : void 0;
	const evaluator = options.evaluator || new VitestModuleEvaluator(vm, {
		traces,
		evaluatedModules: options.evaluatedModules,
		get moduleExecutionInfo() {
			return state().moduleExecutionInfo;
		},
		get interopDefault() {
			return state().config.deps.interopDefault;
		},
		getCurrentTestFilepath: () => state().filepath
	});
	const moduleRunner = new VitestModuleRunner({
		spyModule: options.spyModule,
		evaluatedModules: options.evaluatedModules,
		evaluator,
		traces,
		mocker: options.mocker,
		transport: {
			async fetchModule(id, importer, options) {
				const resolvingModules = state().resolvingModules;
				if (isWindows) {
					if (id[1] === ":") {
						// The drive letter is different for whatever reason, we need to normalize it to CWD
						if (id[0] !== cwd[0] && id[0].toUpperCase() === cwd[0].toUpperCase()) id = (cwd[0].toUpperCase() === cwd[0] ? id[0].toUpperCase() : id[0].toLowerCase()) + id.slice(1);
						// always mark absolute windows paths, otherwise Vite will externalize it
						id = `/@id/${id}`;
					}
				}
				const vitest = getCachedVitestImport(id, state);
				if (vitest) return vitest;
				// strip _vitest_original query added by importActual so that
				// the plugin pipeline sees the original import id (e.g. virtual modules's load hook)
				const isImportActual = id.includes("_vitest_original");
				if (isImportActual) id = removeQuery(id, "_vitest_original");
				const rawId = unwrapId(id);
				resolvingModules.add(rawId);
				try {
					if (VitestMocker.pendingIds.length) await moduleRunner.mocker.resolveMocks();
					if (!isImportActual) {
						const resolvedMock = moduleRunner.mocker.getDependencyMockByUrl(id);
						if (resolvedMock?.type === "manual" || resolvedMock?.type === "redirect") return {
							code: "",
							file: null,
							id: resolvedMock.id,
							url: resolvedMock.url,
							invalidate: false,
							mockedModule: resolvedMock
						};
					}
					if (isBuiltin(rawId)) return {
						externalize: rawId,
						type: "builtin"
					};
					if (isBrowserExternal(rawId)) return {
						externalize: toBuiltin(rawId),
						type: "builtin"
					};
					// if module is invalidated, the worker will be recreated,
					// so cached is always true in a single worker
					if (!isImportActual && options?.cached) return { cache: true };
					const otelCarrier = traces?.getContextCarrier();
					const result = await rpc().fetch(id, importer, environment(), options, otelCarrier);
					if ("cached" in result) return {
						code: readFileSync(result.tmp, "utf-8"),
						...result
					};
					return result;
				} catch (cause) {
					// rethrow vite error if it cannot load the module because it's not resolved
					if (typeof cause === "object" && cause != null && cause.code === "ERR_LOAD_URL" || typeof cause?.message === "string" && cause.message.includes("Failed to load url") || typeof cause?.message === "string" && cause.message.startsWith("Cannot find module '")) {
						const error = new Error(`Cannot find ${isBareImport(id) ? "package" : "module"} '${id}'${importer ? ` imported from ${importer}` : ""}`, { cause });
						error.code = "ERR_MODULE_NOT_FOUND";
						throw error;
					}
					throw cause;
				} finally {
					resolvingModules.delete(rawId);
				}
			},
			resolveId(id, importer) {
				return rpc().resolve(id, importer, environment());
			}
		},
		getWorkerState: state,
		vm,
		createImportMeta: options.createImportMeta
	});
	return moduleRunner;
}

export { BareModuleMocker as B, VITEST_VM_CONTEXT_SYMBOL as V, VitestModuleRunner as a, VitestTransport as b, createNodeImportMeta as c, normalizeModuleId as n, startVitestModuleRunner as s };
