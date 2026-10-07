import { c as createSimpleStackTrace } from './chunk-helpers.js';
import { mockObject } from './index.js';
import { M as MockerRegistry, R as RedirectedModule, A as AutomockedModule } from './chunk-registry.js';
import { e as extname, j as join } from './chunk-pathe.M-eThtNZ.js';

const _DRIVE_LETTER_START_RE = /^[A-Za-z]:\//;
function normalizeWindowsPath(input = "") {
	if (!input) {
		return input;
	}
	return input.replace(/\\/g, "/").replace(_DRIVE_LETTER_START_RE, (r) => r.toUpperCase());
}
const _IS_ABSOLUTE_RE = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
function cwd() {
	if (typeof process !== "undefined" && typeof process.cwd === "function") {
		return process.cwd().replace(/\\/g, "/");
	}
	return "/";
}
const resolve = function(...arguments_) {
	arguments_ = arguments_.map((argument) => normalizeWindowsPath(argument));
	let resolvedPath = "";
	let resolvedAbsolute = false;
	for (let index = arguments_.length - 1; index >= -1 && !resolvedAbsolute; index--) {
		const path = index >= 0 ? arguments_[index] : cwd();
		if (!path || path.length === 0) {
			continue;
		}
		resolvedPath = `${path}/${resolvedPath}`;
		resolvedAbsolute = isAbsolute(path);
	}
	resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute);
	if (resolvedAbsolute && !isAbsolute(resolvedPath)) {
		return `/${resolvedPath}`;
	}
	return resolvedPath.length > 0 ? resolvedPath : ".";
};
function normalizeString(path, allowAboveRoot) {
	let res = "";
	let lastSegmentLength = 0;
	let lastSlash = -1;
	let dots = 0;
	let char = null;
	for (let index = 0; index <= path.length; ++index) {
		if (index < path.length) {
			char = path[index];
		} else if (char === "/") {
			break;
		} else {
			char = "/";
		}
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
				if (res.length > 0) {
					res += `/${path.slice(lastSlash + 1, index)}`;
				} else {
					res = path.slice(lastSlash + 1, index);
				}
				lastSegmentLength = index - lastSlash - 1;
			}
			lastSlash = index;
			dots = 0;
		} else if (char === "." && dots !== -1) {
			++dots;
		} else {
			dots = -1;
		}
	}
	return res;
}
const isAbsolute = function(p) {
	return _IS_ABSOLUTE_RE.test(p);
};

var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var intToChar = new Uint8Array(64);
var charToInt = new Uint8Array(128);
for (let i = 0; i < chars.length; i++) {
	const c = chars.charCodeAt(i);
	intToChar[i] = c;
	charToInt[c] = i;
}
const CHROME_IE_STACK_REGEXP = /^\s*at .*(?:\S:\d+|\(native\))/m;
const SAFARI_NATIVE_CODE_REGEXP = /^(?:eval@)?(?:\[native code\])?$/;
const NOW_LENGTH = Date.now().toString().length;
const REGEXP_VITEST = new RegExp(`vitest=\\d{${NOW_LENGTH}}`);
function extractLocation(urlLike) {
	// Fail-fast but return locations like "(native)"
	if (!urlLike.includes(":")) {
		return [urlLike];
	}
	const regExp = /(.+?)(?::(\d+))?(?::(\d+))?$/;
	const parts = regExp.exec(urlLike.replace(/^\(|\)$/g, ""));
	if (!parts) {
		return [urlLike];
	}
	let url = parts[1];
	if (url.startsWith("async ")) {
		url = url.slice(6);
	}
	if (url.startsWith("http:") || url.startsWith("https:")) {
		const urlObj = new URL(url);
		urlObj.searchParams.delete("import");
		urlObj.searchParams.delete("browserv");
		url = urlObj.pathname + urlObj.hash + urlObj.search;
	}
	if (url.startsWith("/@fs/")) {
		const isWindows = /^\/@fs\/[a-zA-Z]:\//.test(url);
		url = url.slice(isWindows ? 5 : 4);
	}
	if (url.includes("vitest=")) {
		url = url.replace(REGEXP_VITEST, "").replace(/[?&]$/, "");
	}
	return [
		url,
		parts[2] || undefined,
		parts[3] || undefined
	];
}
function parseSingleFFOrSafariStack(raw) {
	let line = raw.trim();
	if (SAFARI_NATIVE_CODE_REGEXP.test(line)) {
		return null;
	}
	if (line.includes(" > eval")) {
		line = line.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1");
	}
	// Early return for lines that don't look like Firefox/Safari stack traces
	// Firefox/Safari stack traces must contain '@' and should have location info after it
	if (!line.includes("@")) {
		return null;
	}
	// Find the correct @ that separates function name from location
	// For cases like '@https://@fs/path' or 'functionName@https://@fs/path'
	// we need to find the first @ that precedes a valid location (containing :)
	let atIndex = -1;
	let locationPart = "";
	let functionName;
	// Try each @ from left to right to find the one that gives us a valid location
	for (let i = 0; i < line.length; i++) {
		if (line[i] === "@") {
			const candidateLocation = line.slice(i + 1);
			// Minimum length 3 for valid location: 1 for filename + 1 for colon + 1 for line number (e.g., "a:1")
			if (candidateLocation.includes(":") && candidateLocation.length >= 3) {
				atIndex = i;
				locationPart = candidateLocation;
				functionName = i > 0 ? line.slice(0, i) : undefined;
				break;
			}
		}
	}
	// Validate we found a valid location with minimum length (filename:line format)
	if (atIndex === -1 || !locationPart.includes(":") || locationPart.length < 3) {
		return null;
	}
	const [url, lineNumber, columnNumber] = extractLocation(locationPart);
	if (!url || !lineNumber || !columnNumber) {
		return null;
	}
	return {
		file: url,
		method: functionName || "",
		line: Number.parseInt(lineNumber),
		column: Number.parseInt(columnNumber)
	};
}
function parseSingleStack(raw) {
	const line = raw.trim();
	if (!CHROME_IE_STACK_REGEXP.test(line)) {
		return parseSingleFFOrSafariStack(line);
	}
	return parseSingleV8Stack(line);
}
// Based on https://github.com/stacktracejs/error-stack-parser
// Credit to stacktracejs
function parseSingleV8Stack(raw) {
	let line = raw.trim();
	if (!CHROME_IE_STACK_REGEXP.test(line)) {
		return null;
	}
	if (line.includes("(eval ")) {
		line = line.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(,.*$)/g, "");
	}
	let sanitizedLine = line.replace(/^\s+/, "").replace(/\(eval code/g, "(").replace(/^.*?\s+/, "");
	// capture and preserve the parenthesized location "(/foo/my bar.js:12:87)" in
	// case it has spaces in it, as the string is split on \s+ later on
	const location = sanitizedLine.match(/ (\(.+\)$)/);
	// remove the parenthesized location from the line, if it was matched
	sanitizedLine = location ? sanitizedLine.replace(location[0], "") : sanitizedLine;
	// if a location was matched, pass it to extractLocation() otherwise pass all sanitizedLine
	// because this line doesn't have function name
	const [url, lineNumber, columnNumber] = extractLocation(location ? location[1] : sanitizedLine);
	let method = location && sanitizedLine || "";
	let file = url && ["eval", "<anonymous>"].includes(url) ? undefined : url;
	if (!file || !lineNumber || !columnNumber) {
		return null;
	}
	if (method.startsWith("async ")) {
		method = method.slice(6);
	}
	if (file.startsWith("file://")) {
		file = file.slice(7);
	}
	// normalize Windows path (\ -> /)
	file = file.startsWith("node:") || file.startsWith("internal:") ? file : resolve(file);
	if (method) {
		method = method.replace(/\(0\s?,\s?__vite_ssr_import_\d+__.(\w+)\)/g, "$1").replace(/__(vite_ssr_import|vi_import)_\d+__\./g, "").replace(/(Object\.)?__vite_ssr_export_default__\s?/g, "");
	}
	return {
		method,
		file,
		line: Number.parseInt(lineNumber),
		column: Number.parseInt(columnNumber)
	};
}

function createCompilerHints(options) {
	const globalThisAccessor = options?.globalThisKey || "__vitest_mocker__";
	function _mocker() {
		// @ts-expect-error injected by the plugin
		return typeof globalThis[globalThisAccessor] !== "undefined" ? globalThis[globalThisAccessor] : new Proxy({}, { get(_, name) {
			throw new Error("Vitest mocker was not initialized in this environment. " + `vi.${String(name)}() is forbidden.`);
		} });
	}
	return {
		hoisted(factory) {
			if (typeof factory !== "function") {
				throw new TypeError(`vi.hoisted() expects a function, but received a ${typeof factory}`);
			}
			return factory();
		},
		mock(path, factory) {
			if (typeof path !== "string") {
				throw new TypeError(`vi.mock() expects a string path, but received a ${typeof path}`);
			}
			const importer = getImporter("mock");
			_mocker().queueMock(path, importer, typeof factory === "function" ? () => factory(() => _mocker().importActual(path, importer)) : factory);
		},
		unmock(path) {
			if (typeof path !== "string") {
				throw new TypeError(`vi.unmock() expects a string path, but received a ${typeof path}`);
			}
			_mocker().queueUnmock(path, getImporter("unmock"));
		},
		doMock(path, factory) {
			if (typeof path !== "string") {
				throw new TypeError(`vi.doMock() expects a string path, but received a ${typeof path}`);
			}
			const importer = getImporter("doMock");
			_mocker().queueMock(path, importer, typeof factory === "function" ? () => factory(() => _mocker().importActual(path, importer)) : factory);
		},
		doUnmock(path) {
			if (typeof path !== "string") {
				throw new TypeError(`vi.doUnmock() expects a string path, but received a ${typeof path}`);
			}
			_mocker().queueUnmock(path, getImporter("doUnmock"));
		},
		async importActual(path) {
			return _mocker().importActual(path, getImporter("importActual"));
		},
		async importMock(path) {
			return _mocker().importMock(path, getImporter("importMock"));
		}
	};
}
function getImporter(name) {
	const stackTrace = /* @__PURE__ */ createSimpleStackTrace({ stackTraceLimit: 5 });
	const stackArray = stackTrace.split("\n");
	// if there is no message in a stack trace, use the item - 1
	const importerStackIndex = stackArray.findIndex((stack) => {
		return stack.includes(` at Object.${name}`) || stack.includes(`${name}@`);
	});
	const stack = /* @__PURE__ */ parseSingleStack(stackArray[importerStackIndex + 1]);
	return stack?.file || "";
}

const hot = import.meta.hot || {
	on: warn,
	off: warn,
	send: warn
};
function warn() {
	console.warn("Vitest mocker cannot work if Vite didn't establish WS connection.");
}
function rpc(event, data) {
	hot.send(event, data);
	return new Promise((resolve, reject) => {
		const timeout = setTimeout(() => {
			reject(new Error(`Failed to resolve ${event} in time`));
		}, 5e3);
		hot.on(`${event}:result`, function r(data) {
			resolve(data);
			clearTimeout(timeout);
			hot.off(`${event}:result`, r);
		});
	});
}

const { now } = Date;
class ModuleMocker {
	registry = new MockerRegistry();
	queue = new Set();
	mockedIds = new Set();
	constructor(interceptor, rpc, createMockInstance, config) {
		this.interceptor = interceptor;
		this.rpc = rpc;
		this.createMockInstance = createMockInstance;
		this.config = config;
	}
	async prepare() {
		if (!this.queue.size) {
			return;
		}
		await Promise.all([...this.queue.values()]);
	}
	async resolveFactoryModule(id) {
		const mock = this.registry.get(id);
		if (!mock || mock.type !== "manual") {
			throw new Error(`Mock ${id} wasn't registered. This is probably a Vitest error. Please, open a new issue with reproduction.`);
		}
		const result = await mock.resolve();
		return result;
	}
	getFactoryModule(id) {
		const mock = this.registry.get(id);
		if (!mock || mock.type !== "manual") {
			throw new Error(`Mock ${id} wasn't registered. This is probably a Vitest error. Please, open a new issue with reproduction.`);
		}
		if (!mock.cache) {
			throw new Error(`Mock ${id} wasn't resolved. This is probably a Vitest error. Please, open a new issue with reproduction.`);
		}
		return mock.cache;
	}
	async invalidate() {
		const ids = Array.from(this.mockedIds);
		if (!ids.length) {
			return;
		}
		await this.rpc.invalidate(ids);
		await this.interceptor.invalidate();
		this.registry.clear();
	}
	async importActual(id, importer) {
		const resolved = await this.rpc.resolveId(id, importer);
		if (resolved == null) {
			throw new Error(`[vitest] Cannot resolve "${id}" imported from "${importer}"`);
		}
		const ext = extname(resolved.id);
		const url = new URL(resolved.url, this.getBaseUrl());
		const query = `_vitest_original&ext${ext}`;
		const actualUrl = `${url.pathname}${url.search ? `${url.search}&${query}` : `?${query}`}${url.hash}`;
		return this.wrapDynamicImport(() => import(
			/* @vite-ignore */
			actualUrl
)).then((mod) => {
			if (!resolved.optimized || typeof mod.default === "undefined") {
				return mod;
			}
			// vite injects this helper for optimized modules, so we try to follow the same behavior
			const m = mod.default;
			return m?.__esModule ? m : {
				...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {},
				default: m
			};
		});
	}
	getBaseUrl() {
		return location.href;
	}
	async importMock(rawId, importer) {
		await this.prepare();
		const { resolvedId, resolvedUrl, redirectUrl } = await this.rpc.resolveMock(rawId, importer, { mock: "auto" });
		const mockUrl = this.resolveMockPath(cleanVersion(resolvedUrl));
		let mock = this.registry.get(mockUrl);
		if (!mock) {
			if (redirectUrl) {
				const resolvedRedirect = new URL(this.resolveMockPath(cleanVersion(redirectUrl)), this.getBaseUrl()).toString();
				mock = new RedirectedModule(rawId, resolvedId, mockUrl, resolvedRedirect);
			} else {
				mock = new AutomockedModule(rawId, resolvedId, mockUrl);
			}
		}
		if (mock.type === "manual") {
			return await mock.resolve();
		}
		if (mock.type === "automock" || mock.type === "autospy") {
			const url = new URL(`/@id/${resolvedId}`, this.getBaseUrl());
			const query = url.search ? `${url.search}&t=${now()}` : `?t=${now()}`;
			const moduleObject = await import(
				/* @vite-ignore */
				`${url.pathname}${query}&mock=${mock.type}${url.hash}`
);
			return this.mockObject(moduleObject, mock.type);
		}
		return import(
			/* @vite-ignore */
			mock.redirect
);
	}
	mockObject(object, mockExportsOrModuleType, moduleType) {
		let mockExports;
		if (mockExportsOrModuleType === "automock" || mockExportsOrModuleType === "autospy") {
			moduleType = mockExportsOrModuleType;
			mockExports = undefined;
		} else {
			mockExports = mockExportsOrModuleType;
		}
		moduleType ??= "automock";
		const result = mockObject({
			globalConstructors: {
				Object,
				Function,
				Array,
				Map,
				RegExp
			},
			createMockInstance: this.createMockInstance,
			type: moduleType
		}, object, mockExports);
		return result;
	}
	getMockContext() {
		return { callstack: null };
	}
	queueMock(rawId, importer, factoryOrOptions) {
		const promise = this.rpc.resolveMock(rawId, importer, { mock: typeof factoryOrOptions === "function" ? "factory" : factoryOrOptions?.spy ? "spy" : "auto" }).then(async ({ redirectUrl, resolvedId, resolvedUrl, needsInterop, mockType }) => {
			const mockUrl = this.resolveMockPath(cleanVersion(resolvedUrl));
			this.mockedIds.add(resolvedId);
			const factory = typeof factoryOrOptions === "function" ? async () => {
				const data = await factoryOrOptions();
				// vite wraps all external modules that have "needsInterop" in a function that
				// merges all exports from default into the module object
				return needsInterop ? { default: data } : data;
			} : undefined;
			const mockRedirect = typeof redirectUrl === "string" ? new URL(this.resolveMockPath(cleanVersion(redirectUrl)), this.getBaseUrl()).toString() : null;
			let module;
			if (mockType === "manual") {
				module = this.registry.register("manual", rawId, resolvedId, mockUrl, factory);
			} else if (mockType === "autospy") {
				module = this.registry.register("autospy", rawId, resolvedId, mockUrl);
			} else if (mockType === "redirect") {
				module = this.registry.register("redirect", rawId, resolvedId, mockUrl, mockRedirect);
			} else {
				module = this.registry.register("automock", rawId, resolvedId, mockUrl);
			}
			await this.interceptor.register(module);
		}).finally(() => {
			this.queue.delete(promise);
		});
		this.queue.add(promise);
	}
	queueUnmock(id, importer) {
		const promise = this.rpc.resolveId(id, importer).then(async (resolved) => {
			if (!resolved) {
				return;
			}
			const mockUrl = this.resolveMockPath(cleanVersion(resolved.url));
			this.mockedIds.add(resolved.id);
			this.registry.delete(mockUrl);
			await this.interceptor.delete(mockUrl);
		}).finally(() => {
			this.queue.delete(promise);
		});
		this.queue.add(promise);
	}
	// We need to await mock registration before importing the actual module
	// In case there is a mocked module in the import chain
	wrapDynamicImport(moduleFactory) {
		if (typeof moduleFactory === "function") {
			const promise = new Promise((resolve, reject) => {
				this.prepare().finally(() => {
					moduleFactory().then(resolve, reject);
				});
			});
			return promise;
		}
		return moduleFactory;
	}
	getMockedModuleById(id) {
		return this.registry.getById(id);
	}
	reset() {
		this.registry.clear();
		this.mockedIds.clear();
		this.queue.clear();
	}
	resolveMockPath(path) {
		const config = this.config;
		const fsRoot = join("/@fs/", config.root);
		// URL can be /file/path.js, but path is resolved to /file/path
		if (path.startsWith(config.root)) {
			return path.slice(config.root.length);
		}
		if (path.startsWith(fsRoot)) {
			return path.slice(fsRoot.length);
		}
		return path;
	}
}
const versionRegexp = /(\?|&)v=\w{8}/;
function cleanVersion(url) {
	return url.replace(versionRegexp, "");
}

export { ModuleMocker as M, createCompilerHints as c, hot as h, rpc as r };
