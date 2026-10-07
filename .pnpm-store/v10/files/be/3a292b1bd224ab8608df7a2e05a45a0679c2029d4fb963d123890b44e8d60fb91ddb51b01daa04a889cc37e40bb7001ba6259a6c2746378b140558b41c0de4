import module$1, { isBuiltin } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { automockModule, createManualModuleSource, collectModuleExports } from '@vitest/mocker/transforms';
import { cleanUrl, createDefer } from '@vitest/utils/helpers';
import { p as parse } from './acorn.B2iPLyUM.js';
import { isAbsolute } from 'pathe';
import { t as toBuiltin } from './modules.BJuCwlRJ.js';
import { B as BareModuleMocker, n as normalizeModuleId } from './startVitestModuleRunner.bRl2_oI_.js';
import 'node:fs';
import './utils.BX5Fg8C4.js';
import '@vitest/utils/timers';
import '../path.js';
import 'node:path';
import '../module-evaluator.js';
import 'node:vm';
import 'vite/module-runner';
import './traces.DT5aQ62U.js';
import '@vitest/mocker';
import '@vitest/mocker/redirect';

class NativeModuleMocker extends BareModuleMocker {
	wrapDynamicImport(moduleFactory) {
		if (typeof moduleFactory === "function") return new Promise((resolve, reject) => {
			this.resolveMocks().finally(() => {
				moduleFactory().then(resolve, reject);
			});
		});
		return moduleFactory;
	}
	resolveMockedModule(url, parentURL) {
		// don't mock modules inside of packages because there is
		// a high chance that it uses `require` which is not mockable
		// because we use top-level await in "manual" mocks.
		// for the sake of consistency we don't support mocking anything at all
		if (parentURL.includes("/node_modules/")) return;
		const moduleId = normalizeModuleId(url.startsWith("file://") ? fileURLToPath(url) : url);
		const mockedModule = this.getDependencyMock(moduleId);
		if (!mockedModule) return;
		if (mockedModule.type === "redirect") return {
			url: pathToFileURL(mockedModule.redirect).toString(),
			shortCircuit: true
		};
		if (mockedModule.type === "automock" || mockedModule.type === "autospy") return {
			url: injectQuery(url, parentURL, `mock=${mockedModule.type}`),
			shortCircuit: true
		};
		if (mockedModule.type === "manual") return {
			url: injectQuery(url, parentURL, "mock=manual"),
			shortCircuit: true
		};
	}
	loadAutomock(url, result) {
		const moduleId = cleanUrl(normalizeModuleId(url.startsWith("file://") ? fileURLToPath(url) : url));
		let source;
		if (isBuiltin(moduleId)) {
			const builtinModule = getBuiltinModule(moduleId);
			const exports$1 = Object.keys(builtinModule);
			source = `
import * as builtinModule from '${toBuiltin(moduleId)}?mock=actual'

${exports$1.map((key, index) => {
				return `
const __${index} = builtinModule["${key}"]
export { __${index} as "${key}" }
`;
			}).join("")}`;
		} else source = result.source?.toString();
		if (source == null) return;
		const mockType = url.includes("mock=automock") ? "automock" : "autospy";
		const transformedCode = transformCode(source, result.format || "module", moduleId);
		try {
			const ms = automockModule(transformedCode, mockType, (code) => parse(code, {
				sourceType: "module",
				ecmaVersion: "latest"
			}), { id: moduleId });
			return {
				format: "module",
				source: `${ms.toString()}\n//# sourceMappingURL=${genSourceMapUrl(ms.generateMap({
					hires: "boundary",
					source: moduleId
				}))}`,
				shortCircuit: true
			};
		} catch (cause) {
			throw new Error(`Cannot automock '${url}' because it failed to parse.`, { cause });
		}
	}
	loadManualMock(url, result) {
		const moduleId = cleanUrl(normalizeModuleId(url.startsWith("file://") ? fileURLToPath(url) : url));
		// should not be possible
		if (this.getDependencyMock(moduleId)?.type !== "manual") {
			console.warn(`Vitest detected unregistered manual mock ${moduleId}. This is a bug in Vitest. Please, open a new issue with reproduction.`);
			return;
		}
		if (isBuiltin(moduleId)) {
			const builtinModule = getBuiltinModule(toBuiltin(moduleId));
			return {
				format: "module",
				source: createManualModuleSource(moduleId, Object.keys(builtinModule)),
				shortCircuit: true
			};
		}
		if (!result.source) return;
		const transformedCode = transformCode(result.source.toString(), result.format || "module", moduleId);
		if (transformedCode == null) return;
		const format = result.format?.startsWith("module") ? "module" : "commonjs";
		try {
			return {
				format: "module",
				source: createManualModuleSource(moduleId, collectModuleExports(moduleId, transformedCode, format)),
				shortCircuit: true
			};
		} catch (cause) {
			throw new Error(`Failed to mock '${url}'. See the cause for more information.`, { cause });
		}
	}
	processedModules = /* @__PURE__ */ new Map();
	checkCircularManualMock(url) {
		const id = cleanUrl(normalizeModuleId(url.startsWith("file://") ? fileURLToPath(url) : url));
		this.processedModules.set(id, (this.processedModules.get(id) ?? 0) + 1);
		// the module is mocked and requested a second time, let's resolve
		// the factory function that will redefine the exports later
		if (this.originalModulePromises.has(id)) {
			const factoryPromise = this.factoryPromises.get(id);
			this.originalModulePromises.get(id)?.resolve({ __factoryPromise: factoryPromise });
		}
	}
	originalModulePromises = /* @__PURE__ */ new Map();
	factoryPromises = /* @__PURE__ */ new Map();
	// potential performance improvement:
	// store by URL, not ids, no need to call url.*to* methods and normalizeModuleId
	getFactoryModule(id) {
		const mock = this.getMockerRegistry().getById(id);
		if (!mock || mock.type !== "manual") throw new Error(`Mock ${id} wasn't registered. This is probably a Vitest error. Please, open a new issue with reproduction.`);
		const mockResult = mock.resolve();
		if (mockResult instanceof Promise) {
			// to avoid circular dependency, we resolve this function as {__factoryPromise} in `checkCircularManualMock`
			// when it's requested the second time. then the exports are exposed as `undefined`,
			// but later redefined when the promise is actually resolved
			const promise = createDefer();
			promise.finally(() => {
				this.originalModulePromises.delete(id);
			});
			mockResult.then(promise.resolve, promise.reject).finally(() => {
				this.factoryPromises.delete(id);
			});
			this.factoryPromises.set(id, mockResult);
			this.originalModulePromises.set(id, promise);
			// Node.js on windows processes all the files first, and then runs them
			// unlike Node.js logic on Mac and Unix where it also runs the code while evaluating
			// So on Linux/Mac this `if` won't be hit because `checkCircularManualMock` will resolve it
			// And on Windows, the `checkCircularManualMock` will never have `originalModulePromises`
			// because `getFactoryModule` is not called until the evaluation phase
			// But if we track how many times the module was transformed,
			// we can deduce when to return `__factoryPromise` to support circular modules
			if ((this.processedModules.get(id) ?? 0) > 1) {
				this.processedModules.set(id, (this.processedModules.get(id) ?? 1) - 1);
				promise.resolve({ __factoryPromise: mockResult });
			}
			return promise;
		}
		return mockResult;
	}
	importActual(rawId, importer) {
		const resolvedId = import.meta.resolve(rawId, pathToFileURL(importer).toString());
		const url = new URL(resolvedId);
		url.searchParams.set("mock", "actual");
		return import(url.toString());
	}
	importMock(rawId, importer) {
		const resolvedId = import.meta.resolve(rawId, pathToFileURL(importer).toString());
		// file is already mocked
		if (resolvedId.includes("mock=")) return import(resolvedId);
		const filename = fileURLToPath(resolvedId);
		const external = !isAbsolute(filename) || this.isModuleDirectory(resolvedId) ? normalizeModuleId(rawId) : null;
		// file is not mocked, automock or redirect it
		const redirect = this.findMockRedirect(filename, external);
		if (redirect) return import(pathToFileURL(redirect).toString());
		const url = new URL(resolvedId);
		url.searchParams.set("mock", "automock");
		return import(url.toString());
	}
}
const replacePercentageRE = /%/g;
function injectQuery(url, importer, queryToInject) {
	const { search, hash } = new URL(url.replace(replacePercentageRE, "%25"), importer);
	return `${cleanUrl(url)}?${queryToInject}${search ? `&${search.slice(1)}` : ""}${hash ?? ""}`;
}
let __require;
function getBuiltinModule(moduleId) {
	__require ??= module$1.createRequire(import.meta.url);
	return __require(`${moduleId}?mock=actual`);
}
function genSourceMapUrl(map) {
	if (typeof map !== "string") map = JSON.stringify(map);
	return `data:application/json;base64,${Buffer.from(map).toString("base64")}`;
}
function transformCode(code, format, filename) {
	if (format.includes("typescript")) {
		if (!module$1.stripTypeScriptTypes) throw new Error(`Cannot parse '${filename}' because "module.stripTypeScriptTypes" is not supported. Module mocking requires Node.js 22.15 or higher. This is NOT a bug of Vitest.`);
		return module$1.stripTypeScriptTypes(code);
	}
	return code;
}

export { NativeModuleMocker };
