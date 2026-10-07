import { n as __toESM, t as require_binding } from "./binding-BeU_1iEk.mjs";
import { a as logInvalidLogPosition, c as logPluginError, n as error, r as logCycleLoading, t as augmentCodeLocation } from "./logs-D80CXhvg.mjs";
import { i as bindingifyManifestPlugin, n as BuiltinPlugin, r as bindingifyBuiltInPlugin, t as normalizedStringOrRegex } from "./normalize-string-or-regex-CbQQ69gT.mjs";
import { a as unreachable, o as unsupported, r as noop, t as arraify } from "./misc-DJYbNKZX.mjs";
import { a as bindingifySourcemap, i as unwrapBindingResult, t as aggregateBindingErrorsIntoJsError } from "./error-DL-e8-oE.mjs";
import { parseAst } from "../parse-ast-index.mjs";
import path from "node:path";
import * as filter from "@rolldown/pluginutils";
import fsp from "node:fs/promises";
//#region package.json
var version = "1.0.0-rc.17";
var description = "Fast JavaScript/TypeScript bundler in Rust with Rollup-compatible API.";
//#endregion
//#region src/constants/version.ts
/**
* The version of Rolldown.
* @example `'1.0.0'`
*
* @category Plugin APIs
*/
const VERSION = version;
//#endregion
//#region src/constants/index.ts
/**
* Runtime helper module ID
*/
const RUNTIME_MODULE_ID = "\0rolldown/runtime.js";
//#endregion
//#region src/log/logging.ts
const LOG_LEVEL_SILENT = "silent";
const LOG_LEVEL_ERROR = "error";
const LOG_LEVEL_WARN = "warn";
const LOG_LEVEL_INFO = "info";
const LOG_LEVEL_DEBUG = "debug";
const logLevelPriority = {
	[LOG_LEVEL_DEBUG]: 0,
	[LOG_LEVEL_INFO]: 1,
	[LOG_LEVEL_WARN]: 2,
	[LOG_LEVEL_SILENT]: 3
};
//#endregion
//#region src/log/log-handler.ts
const normalizeLog = (log) => typeof log === "string" ? { message: log } : typeof log === "function" ? normalizeLog(log()) : log;
function getLogHandler(level, code, logger, pluginName, logLevel) {
	if (logLevelPriority[level] < logLevelPriority[logLevel]) return noop;
	return (log, pos) => {
		if (pos != null) logger(LOG_LEVEL_WARN, logInvalidLogPosition(pluginName));
		log = normalizeLog(log);
		if (log.code && !log.pluginCode) log.pluginCode = log.code;
		log.code = code;
		log.plugin = pluginName;
		logger(level, log);
	};
}
//#endregion
//#region src/utils/normalize-hook.ts
function normalizeHook(hook) {
	if (typeof hook === "function" || typeof hook === "string") return {
		handler: hook,
		options: {},
		meta: {}
	};
	if (typeof hook === "object" && hook !== null) {
		const { handler, order, ...options } = hook;
		return {
			handler,
			options,
			meta: { order }
		};
	}
	unreachable("Invalid hook type");
}
//#endregion
//#region src/plugin/minimal-plugin-context.ts
var MinimalPluginContextImpl = class {
	info;
	warn;
	debug;
	meta;
	constructor(onLog, logLevel, pluginName, watchMode, hookName) {
		this.pluginName = pluginName;
		this.hookName = hookName;
		this.debug = getLogHandler(LOG_LEVEL_DEBUG, "PLUGIN_LOG", onLog, pluginName, logLevel);
		this.info = getLogHandler(LOG_LEVEL_INFO, "PLUGIN_LOG", onLog, pluginName, logLevel);
		this.warn = getLogHandler(LOG_LEVEL_WARN, "PLUGIN_WARNING", onLog, pluginName, logLevel);
		this.meta = {
			rollupVersion: "4.23.0",
			rolldownVersion: VERSION,
			watchMode
		};
	}
	error(e) {
		return error(logPluginError(normalizeLog(e), this.pluginName, { hook: this.hookName }));
	}
};
//#endregion
//#region src/types/plain-object-like.ts
const LAZY_FIELDS_KEY = Symbol("__lazy_fields__");
/**
* Base class for classes that use `@lazyProp` decorated properties.
*
* **Design Pattern in Rolldown:**
* This is a common pattern in Rolldown due to its three-layer architecture:
* TypeScript API → NAPI Bindings → Rust Core
*
* **Why we use getters:**
* For performance - to lazily fetch data from Rust bindings only when needed,
* rather than eagerly fetching all data during object construction.
*
* **The problem:**
* Getters defined on class prototypes are non-enumerable by default, which breaks:
* - Object spread operators ({...obj})
* - Object.keys() and similar methods
* - Standard JavaScript object semantics
*
* **The solution:**
* This base class automatically converts `@lazyProp` decorated getters into
* own enumerable getters on each instance during construction.
*
* **Result:**
* Objects get both lazy-loading performance benefits AND plain JavaScript object behavior.
*
* @example
* ```typescript
* class MyClass extends PlainObjectLike {
*   @lazyProp
*   get myProp() {
*     return fetchFromRustBinding();
*   }
* }
* ```
*/
var PlainObjectLike = class {
	constructor() {
		setupLazyProperties(this);
	}
};
/**
* Set up lazy properties as own getters on an instance.
* This is called automatically by the `PlainObjectLike` base class constructor.
*
* @param instance - The instance to set up lazy properties on
* @internal
*/
function setupLazyProperties(instance) {
	const lazyFields = instance.constructor[LAZY_FIELDS_KEY];
	if (!lazyFields) return;
	for (const [propertyKey, originalGetter] of lazyFields.entries()) {
		let cachedValue;
		let hasValue = false;
		Object.defineProperty(instance, propertyKey, {
			get() {
				if (!hasValue) {
					cachedValue = originalGetter.call(this);
					hasValue = true;
				}
				return cachedValue;
			},
			enumerable: true,
			configurable: true
		});
	}
}
/**
* Get all lazy field names from a class instance.
*
* @param instance - Instance to inspect
* @returns Set of lazy property names
*/
function getLazyFields(instance) {
	const lazyFields = instance.constructor[LAZY_FIELDS_KEY];
	return lazyFields ? new Set(lazyFields.keys()) : /* @__PURE__ */ new Set();
}
//#endregion
//#region src/decorators/lazy.ts
/**
* Decorator that marks a getter as lazy-evaluated and cached.
*
* **What "lazy" means here:**
* 1. Data is lazily fetched from Rust bindings only when the property is accessed (not eagerly on construction)
* 2. Once fetched, the data is cached for subsequent accesses (performance optimization)
* 3. Despite being a getter, it behaves like a plain object property (enumerable, appears in Object.keys())
*
* **Important**: Properties decorated with `@lazyProp` are defined as own enumerable
* properties on each instance (not on the prototype). This ensures they:
* - Appear in Object.keys() and Object.getOwnPropertyNames()
* - Are included in object spreads ({...obj})
* - Are enumerable in for...in loops
*
* Classes using this decorator must extend `PlainObjectLike` base class.
*
* @example
* ```typescript
* class MyClass extends PlainObjectLike {
*   @lazyProp
*   get expensiveValue() {
*     return someExpensiveComputation();
*   }
* }
* ```
*/
function lazyProp(target, propertyKey, descriptor) {
	if (!target.constructor[LAZY_FIELDS_KEY]) target.constructor[LAZY_FIELDS_KEY] = /* @__PURE__ */ new Map();
	const originalGetter = descriptor.get;
	target.constructor[LAZY_FIELDS_KEY].set(propertyKey, originalGetter);
	return {
		enumerable: false,
		configurable: true
	};
}
//#endregion
//#region src/utils/asset-source.ts
function transformAssetSource(bindingAssetSource) {
	return bindingAssetSource.inner;
}
function bindingAssetSource(source) {
	return { inner: source };
}
//#endregion
//#region \0@oxc-project+runtime@0.127.0/helpers/decorate.js
function __decorate(decorators, target, key, desc) {
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
}
//#endregion
//#region src/types/output-asset-impl.ts
var OutputAssetImpl = class extends PlainObjectLike {
	type = "asset";
	constructor(bindingAsset) {
		super();
		this.bindingAsset = bindingAsset;
	}
	get fileName() {
		return this.bindingAsset.getFileName();
	}
	get originalFileName() {
		return this.bindingAsset.getOriginalFileName() || null;
	}
	get originalFileNames() {
		return this.bindingAsset.getOriginalFileNames();
	}
	get name() {
		return this.bindingAsset.getName() ?? void 0;
	}
	get names() {
		return this.bindingAsset.getNames();
	}
	get source() {
		return transformAssetSource(this.bindingAsset.getSource());
	}
	__rolldown_external_memory_handle__(keepDataAlive) {
		if (keepDataAlive) this.#evaluateAllLazyFields();
		return this.bindingAsset.dropInner();
	}
	#evaluateAllLazyFields() {
		for (const field of getLazyFields(this)) this[field];
	}
};
__decorate([lazyProp], OutputAssetImpl.prototype, "fileName", null);
__decorate([lazyProp], OutputAssetImpl.prototype, "originalFileName", null);
__decorate([lazyProp], OutputAssetImpl.prototype, "originalFileNames", null);
__decorate([lazyProp], OutputAssetImpl.prototype, "name", null);
__decorate([lazyProp], OutputAssetImpl.prototype, "names", null);
__decorate([lazyProp], OutputAssetImpl.prototype, "source", null);
//#endregion
//#region src/utils/transform-rendered-module.ts
function transformToRenderedModule(bindingRenderedModule) {
	return {
		get code() {
			return bindingRenderedModule.code;
		},
		get renderedLength() {
			return bindingRenderedModule.code?.length || 0;
		},
		get renderedExports() {
			return bindingRenderedModule.renderedExports;
		}
	};
}
//#endregion
//#region src/utils/transform-rendered-chunk.ts
function transformRenderedChunk(chunk) {
	let modules = null;
	return {
		type: "chunk",
		get name() {
			return chunk.name;
		},
		get isEntry() {
			return chunk.isEntry;
		},
		get isDynamicEntry() {
			return chunk.isDynamicEntry;
		},
		get facadeModuleId() {
			return chunk.facadeModuleId;
		},
		get moduleIds() {
			return chunk.moduleIds;
		},
		get exports() {
			return chunk.exports;
		},
		get fileName() {
			return chunk.fileName;
		},
		get imports() {
			return chunk.imports;
		},
		get dynamicImports() {
			return chunk.dynamicImports;
		},
		get modules() {
			if (!modules) modules = transformChunkModules(chunk.modules);
			return modules;
		}
	};
}
function transformChunkModules(modules) {
	const result = {};
	for (let i = 0; i < modules.values.length; i++) {
		let key = modules.keys[i];
		const mod = modules.values[i];
		result[key] = transformToRenderedModule(mod);
	}
	return result;
}
//#endregion
//#region src/types/output-chunk-impl.ts
var OutputChunkImpl = class extends PlainObjectLike {
	type = "chunk";
	constructor(bindingChunk) {
		super();
		this.bindingChunk = bindingChunk;
	}
	get fileName() {
		return this.bindingChunk.getFileName();
	}
	get name() {
		return this.bindingChunk.getName();
	}
	get exports() {
		return this.bindingChunk.getExports();
	}
	get isEntry() {
		return this.bindingChunk.getIsEntry();
	}
	get facadeModuleId() {
		return this.bindingChunk.getFacadeModuleId() || null;
	}
	get isDynamicEntry() {
		return this.bindingChunk.getIsDynamicEntry();
	}
	get sourcemapFileName() {
		return this.bindingChunk.getSourcemapFileName() || null;
	}
	get preliminaryFileName() {
		return this.bindingChunk.getPreliminaryFileName();
	}
	get code() {
		return this.bindingChunk.getCode();
	}
	get modules() {
		return transformChunkModules(this.bindingChunk.getModules());
	}
	get imports() {
		return this.bindingChunk.getImports();
	}
	get dynamicImports() {
		return this.bindingChunk.getDynamicImports();
	}
	get moduleIds() {
		return this.bindingChunk.getModuleIds();
	}
	get map() {
		const mapString = this.bindingChunk.getMap();
		return mapString ? transformToRollupSourceMap(mapString) : null;
	}
	__rolldown_external_memory_handle__(keepDataAlive) {
		if (keepDataAlive) this.#evaluateAllLazyFields();
		return this.bindingChunk.dropInner();
	}
	#evaluateAllLazyFields() {
		for (const field of getLazyFields(this)) this[field];
	}
};
__decorate([lazyProp], OutputChunkImpl.prototype, "fileName", null);
__decorate([lazyProp], OutputChunkImpl.prototype, "name", null);
__decorate([lazyProp], OutputChunkImpl.prototype, "exports", null);
__decorate([lazyProp], OutputChunkImpl.prototype, "isEntry", null);
__decorate([lazyProp], OutputChunkImpl.prototype, "facadeModuleId", null);
__decorate([lazyProp], OutputChunkImpl.prototype, "isDynamicEntry", null);
__decorate([lazyProp], OutputChunkImpl.prototype, "sourcemapFileName", null);
__decorate([lazyProp], OutputChunkImpl.prototype, "preliminaryFileName", null);
__decorate([lazyProp], OutputChunkImpl.prototype, "code", null);
__decorate([lazyProp], OutputChunkImpl.prototype, "modules", null);
__decorate([lazyProp], OutputChunkImpl.prototype, "imports", null);
__decorate([lazyProp], OutputChunkImpl.prototype, "dynamicImports", null);
__decorate([lazyProp], OutputChunkImpl.prototype, "moduleIds", null);
__decorate([lazyProp], OutputChunkImpl.prototype, "map", null);
//#endregion
//#region src/utils/transform-to-rollup-output.ts
function transformToRollupSourceMap(map) {
	const obj = {
		...JSON.parse(map),
		toString() {
			return JSON.stringify(obj);
		},
		toUrl() {
			return `data:application/json;charset=utf-8;base64,${Buffer.from(obj.toString(), "utf-8").toString("base64")}`;
		}
	};
	return obj;
}
function transformToRollupOutputChunk(bindingChunk) {
	return new OutputChunkImpl(bindingChunk);
}
function transformToMutableRollupOutputChunk(bindingChunk, changed) {
	const chunk = {
		type: "chunk",
		get code() {
			return bindingChunk.getCode();
		},
		fileName: bindingChunk.getFileName(),
		name: bindingChunk.getName(),
		get modules() {
			return transformChunkModules(bindingChunk.getModules());
		},
		get imports() {
			return bindingChunk.getImports();
		},
		get dynamicImports() {
			return bindingChunk.getDynamicImports();
		},
		exports: bindingChunk.getExports(),
		isEntry: bindingChunk.getIsEntry(),
		facadeModuleId: bindingChunk.getFacadeModuleId() || null,
		isDynamicEntry: bindingChunk.getIsDynamicEntry(),
		get moduleIds() {
			return bindingChunk.getModuleIds();
		},
		get map() {
			const map = bindingChunk.getMap();
			return map ? transformToRollupSourceMap(map) : null;
		},
		sourcemapFileName: bindingChunk.getSourcemapFileName() || null,
		preliminaryFileName: bindingChunk.getPreliminaryFileName()
	};
	const cache = {};
	return new Proxy(chunk, {
		get(target, p) {
			if (p in cache) return cache[p];
			const value = target[p];
			cache[p] = value;
			return value;
		},
		set(_target, p, newValue) {
			cache[p] = newValue;
			changed.updated.add(bindingChunk.getFileName());
			return true;
		},
		has(target, p) {
			if (p in cache) return true;
			return p in target;
		}
	});
}
function transformToRollupOutputAsset(bindingAsset) {
	return new OutputAssetImpl(bindingAsset);
}
function transformToMutableRollupOutputAsset(bindingAsset, changed) {
	const asset = {
		type: "asset",
		fileName: bindingAsset.getFileName(),
		originalFileName: bindingAsset.getOriginalFileName() || null,
		originalFileNames: bindingAsset.getOriginalFileNames(),
		get source() {
			return transformAssetSource(bindingAsset.getSource());
		},
		name: bindingAsset.getName() ?? void 0,
		names: bindingAsset.getNames()
	};
	const cache = {};
	return new Proxy(asset, {
		get(target, p) {
			if (p in cache) return cache[p];
			const value = target[p];
			cache[p] = value;
			return value;
		},
		set(_target, p, newValue) {
			cache[p] = newValue;
			changed.updated.add(bindingAsset.getFileName());
			return true;
		}
	});
}
function transformToRollupOutput(output) {
	const { chunks, assets } = output;
	return { output: [...chunks.map((chunk) => transformToRollupOutputChunk(chunk)), ...assets.map((asset) => transformToRollupOutputAsset(asset))] };
}
function transformToMutableRollupOutput(output, changed) {
	const { chunks, assets } = output;
	return { output: [...chunks.map((chunk) => transformToMutableRollupOutputChunk(chunk, changed)), ...assets.map((asset) => transformToMutableRollupOutputAsset(asset, changed))] };
}
function transformToOutputBundle(context, output, changed) {
	const bundle = Object.fromEntries(transformToMutableRollupOutput(output, changed).output.map((item) => [item.fileName, item]));
	return new Proxy(bundle, {
		set(_target, _p, _newValue, _receiver) {
			const originalStackTraceLimit = Error.stackTraceLimit;
			Error.stackTraceLimit = 2;
			const message = "This plugin assigns to bundle variable. This is discouraged by Rollup and is not supported by Rolldown. This will be ignored. https://rollupjs.org/plugin-development/#generatebundle:~:text=DANGER,this.emitFile.";
			const stack = new Error(message).stack ?? message;
			Error.stackTraceLimit = originalStackTraceLimit;
			context.warn({
				message: stack,
				code: "UNSUPPORTED_BUNDLE_ASSIGNMENT"
			});
			return true;
		},
		deleteProperty(target, property) {
			if (typeof property === "string") changed.deleted.add(property);
			return true;
		}
	});
}
function collectChangedBundle(changed, bundle) {
	const changes = {};
	for (const key in bundle) {
		if (changed.deleted.has(key) || !changed.updated.has(key)) continue;
		const item = bundle[key];
		if (item.type === "asset") changes[key] = {
			filename: item.fileName,
			originalFileNames: item.originalFileNames,
			source: bindingAssetSource(item.source),
			names: item.names
		};
		else changes[key] = {
			code: item.code,
			filename: item.fileName,
			name: item.name,
			isEntry: item.isEntry,
			exports: item.exports,
			modules: {},
			imports: item.imports,
			dynamicImports: item.dynamicImports,
			facadeModuleId: item.facadeModuleId || void 0,
			isDynamicEntry: item.isDynamicEntry,
			moduleIds: item.moduleIds,
			map: bindingifySourcemap(item.map),
			sourcemapFilename: item.sourcemapFileName || void 0,
			preliminaryFilename: item.preliminaryFileName
		};
	}
	return {
		changes,
		deleted: changed.deleted
	};
}
//#endregion
//#region src/binding-magic-string.ts
var import_binding = /* @__PURE__ */ __toESM(require_binding(), 1);
Object.defineProperty(import_binding.BindingMagicString.prototype, "isRolldownMagicString", {
	value: true,
	writable: false,
	configurable: false
});
function assertString(content, msg) {
	if (typeof content !== "string") throw new TypeError(msg);
}
const nativeAppend = import_binding.BindingMagicString.prototype.append;
const nativePrepend = import_binding.BindingMagicString.prototype.prepend;
const nativeAppendLeft = import_binding.BindingMagicString.prototype.appendLeft;
const nativeAppendRight = import_binding.BindingMagicString.prototype.appendRight;
const nativePrependLeft = import_binding.BindingMagicString.prototype.prependLeft;
const nativePrependRight = import_binding.BindingMagicString.prototype.prependRight;
const nativeOverwrite = import_binding.BindingMagicString.prototype.overwrite;
const nativeUpdate = import_binding.BindingMagicString.prototype.update;
import_binding.BindingMagicString.prototype.append = function(content) {
	assertString(content, "outro content must be a string");
	return nativeAppend.call(this, content);
};
import_binding.BindingMagicString.prototype.prepend = function(content) {
	assertString(content, "outro content must be a string");
	return nativePrepend.call(this, content);
};
import_binding.BindingMagicString.prototype.appendLeft = function(index, content) {
	assertString(content, "inserted content must be a string");
	return nativeAppendLeft.call(this, index, content);
};
import_binding.BindingMagicString.prototype.appendRight = function(index, content) {
	assertString(content, "inserted content must be a string");
	return nativeAppendRight.call(this, index, content);
};
import_binding.BindingMagicString.prototype.prependLeft = function(index, content) {
	assertString(content, "inserted content must be a string");
	return nativePrependLeft.call(this, index, content);
};
import_binding.BindingMagicString.prototype.prependRight = function(index, content) {
	assertString(content, "inserted content must be a string");
	return nativePrependRight.call(this, index, content);
};
import_binding.BindingMagicString.prototype.overwrite = function(start, end, content, options) {
	assertString(content, "replacement content must be a string");
	return nativeOverwrite.call(this, start, end, content, options);
};
import_binding.BindingMagicString.prototype.update = function(start, end, content, options) {
	assertString(content, "replacement content must be a string");
	return nativeUpdate.call(this, start, end, content, options);
};
const nativeReplace = import_binding.BindingMagicString.prototype.replace;
const nativeReplaceAll = import_binding.BindingMagicString.prototype.replaceAll;
import_binding.BindingMagicString.prototype.replace = function(searchValue, replacement) {
	if (typeof searchValue === "string") return nativeReplace.call(this, searchValue, replacement);
	if (searchValue.global) searchValue.lastIndex = 0;
	const lastMatchEnd = this.replaceRegex(searchValue, replacement);
	if (searchValue.global) searchValue.lastIndex = 0;
	else if (searchValue.sticky) searchValue.lastIndex = lastMatchEnd === -1 ? 0 : lastMatchEnd;
	return this;
};
import_binding.BindingMagicString.prototype.replaceAll = function(searchValue, replacement) {
	if (typeof searchValue === "string") return nativeReplaceAll.call(this, searchValue, replacement);
	if (!searchValue.global) throw new TypeError("MagicString.prototype.replaceAll called with a non-global RegExp argument");
	searchValue.lastIndex = 0;
	this.replaceRegex(searchValue, replacement);
	searchValue.lastIndex = 0;
	return this;
};
/**
* A native MagicString implementation powered by Rust.
*
* @experimental
*/
const RolldownMagicString = import_binding.BindingMagicString;
//#endregion
//#region src/utils/transform-module-info.ts
function transformModuleInfo(info, option) {
	return {
		get ast() {
			return unsupported("ModuleInfo#ast");
		},
		get code() {
			return info.code;
		},
		id: info.id,
		importers: info.importers,
		dynamicImporters: info.dynamicImporters,
		importedIds: info.importedIds,
		dynamicallyImportedIds: info.dynamicallyImportedIds,
		exports: info.exports,
		isEntry: info.isEntry,
		inputFormat: info.inputFormat,
		...option
	};
}
//#endregion
//#region src/utils/transform-sourcemap.ts
function isEmptySourcemapFiled(array) {
	if (!array) return true;
	if (array.length === 0 || !array[0]) return true;
	return false;
}
function normalizeTransformHookSourcemap(id, originalCode, rawMap) {
	if (!rawMap) return;
	let map = typeof rawMap === "object" ? rawMap : JSON.parse(rawMap);
	if (isEmptySourcemapFiled(map.sourcesContent)) map.sourcesContent = [originalCode];
	if (isEmptySourcemapFiled(map.sources) || map.sources && map.sources.length === 1 && map.sources[0] !== id) map.sources = [id];
	return map;
}
//#endregion
//#region ../../node_modules/.pnpm/remeda@2.33.7/node_modules/remeda/dist/lazyDataLastImpl-DtF3cihj.js
function e(e, t, n) {
	let r = (n) => e(n, ...t);
	return n === void 0 ? r : Object.assign(r, {
		lazy: n,
		lazyArgs: t
	});
}
//#endregion
//#region ../../node_modules/.pnpm/remeda@2.33.7/node_modules/remeda/dist/purry.js
function t$1(t, n, r) {
	let i = t.length - n.length;
	if (i === 0) return t(...n);
	if (i === 1) return e(t, n, r);
	throw Error(`Wrong number of arguments`);
}
//#endregion
//#region ../../node_modules/.pnpm/remeda@2.33.7/node_modules/remeda/dist/partition.js
function t(...t) {
	return t$1(n, t);
}
const n = (e, t) => {
	let n = [[], []];
	for (let [r, i] of e.entries()) t(i, r, e) ? n[0].push(i) : n[1].push(i);
	return n;
};
//#endregion
//#region src/plugin/bindingify-hook-filter.ts
function generalHookFilterMatcherToFilterExprs(matcher, stringKind) {
	if (typeof matcher === "string" || matcher instanceof RegExp) return [filter.include(generateAtomMatcher(stringKind, matcher))];
	if (Array.isArray(matcher)) return matcher.map((m) => filter.include(generateAtomMatcher(stringKind, m)));
	let ret = [];
	if (matcher.exclude) ret.push(...arraify(matcher.exclude).map((m) => filter.exclude(generateAtomMatcher(stringKind, m))));
	if (matcher.include) ret.push(...arraify(matcher.include).map((m) => filter.include(generateAtomMatcher(stringKind, m))));
	return ret;
}
function generateAtomMatcher(kind, matcher) {
	return kind === "code" ? filter.code(matcher) : filter.id(matcher);
}
function transformFilterMatcherToFilterExprs(filterOption) {
	if (!filterOption) return;
	if (Array.isArray(filterOption)) return filterOption;
	const { id, code, moduleType } = filterOption;
	let ret = [];
	let idIncludes = [];
	let idExcludes = [];
	let codeIncludes = [];
	let codeExcludes = [];
	if (id) [idIncludes, idExcludes] = t(generalHookFilterMatcherToFilterExprs(id, "id") ?? [], (m) => m.kind === "include");
	if (code) [codeIncludes, codeExcludes] = t(generalHookFilterMatcherToFilterExprs(code, "code") ?? [], (m) => m.kind === "include");
	ret.push(...idExcludes);
	ret.push(...codeExcludes);
	let andExprList = [];
	if (moduleType) {
		let moduleTypes = Array.isArray(moduleType) ? moduleType : moduleType.include ?? [];
		andExprList.push(filter.or(...moduleTypes.map((m) => filter.moduleType(m))));
	}
	if (idIncludes.length) andExprList.push(filter.or(...idIncludes.map((item) => item.expr)));
	if (codeIncludes.length) andExprList.push(filter.or(...codeIncludes.map((item) => item.expr)));
	if (andExprList.length) ret.push(filter.include(filter.and(...andExprList)));
	return ret;
}
function bindingifyGeneralHookFilter(stringKind, pattern) {
	let filterExprs = generalHookFilterMatcherToFilterExprs(pattern, stringKind);
	let ret = [];
	if (filterExprs) ret = filterExprs.map(bindingifyFilterExpr);
	return ret.length > 0 ? { value: ret } : void 0;
}
function bindingifyFilterExpr(expr) {
	let list = [];
	bindingifyFilterExprImpl(expr, list);
	return list;
}
function containsImporterId(expr) {
	switch (expr.kind) {
		case "and":
		case "or": return expr.args.some(containsImporterId);
		case "not":
		case "include":
		case "exclude": return containsImporterId(expr.expr);
		case "importerId": return true;
		default: return false;
	}
}
function assertNoImporterId(filterExprs, hookName) {
	if (filterExprs?.some(containsImporterId)) throw new Error(`The \`importerId\` filter can only be used with the \`resolveId\` hook, but it was used with the \`${hookName}\` hook.`);
}
function bindingifyFilterExprImpl(expr, list) {
	switch (expr.kind) {
		case "and": {
			let args = expr.args;
			for (let i = args.length - 1; i >= 0; i--) bindingifyFilterExprImpl(args[i], list);
			list.push({
				kind: "And",
				payload: args.length
			});
			break;
		}
		case "or": {
			let args = expr.args;
			for (let i = args.length - 1; i >= 0; i--) bindingifyFilterExprImpl(args[i], list);
			list.push({
				kind: "Or",
				payload: args.length
			});
			break;
		}
		case "not":
			bindingifyFilterExprImpl(expr.expr, list);
			list.push({ kind: "Not" });
			break;
		case "id":
			list.push({
				kind: "Id",
				payload: expr.pattern
			});
			if (expr.params.cleanUrl) list.push({ kind: "CleanUrl" });
			break;
		case "importerId":
			list.push({
				kind: "ImporterId",
				payload: expr.pattern
			});
			if (expr.params.cleanUrl) list.push({ kind: "CleanUrl" });
			break;
		case "moduleType":
			list.push({
				kind: "ModuleType",
				payload: expr.pattern
			});
			break;
		case "code":
			list.push({
				kind: "Code",
				payload: expr.pattern
			});
			break;
		case "include":
			bindingifyFilterExprImpl(expr.expr, list);
			list.push({ kind: "Include" });
			break;
		case "exclude":
			bindingifyFilterExprImpl(expr.expr, list);
			list.push({ kind: "Exclude" });
			break;
		case "query":
			list.push({
				kind: "QueryKey",
				payload: expr.key
			});
			list.push({
				kind: "QueryValue",
				payload: expr.pattern
			});
			break;
		default: throw new Error(`Unknown filter expression: ${expr}`);
	}
}
function bindingifyResolveIdFilter(filterOption) {
	if (!filterOption) return;
	if (Array.isArray(filterOption)) return { value: filterOption.map(bindingifyFilterExpr) };
	return filterOption.id ? bindingifyGeneralHookFilter("id", filterOption.id) : void 0;
}
function bindingifyLoadFilter(filterOption) {
	if (!filterOption) return;
	if (Array.isArray(filterOption)) {
		assertNoImporterId(filterOption, "load");
		return { value: filterOption.map(bindingifyFilterExpr) };
	}
	return filterOption.id ? bindingifyGeneralHookFilter("id", filterOption.id) : void 0;
}
function bindingifyTransformFilter(filterOption) {
	if (!filterOption) return;
	let filterExprs = transformFilterMatcherToFilterExprs(filterOption);
	assertNoImporterId(filterExprs, "transform");
	let ret = [];
	if (filterExprs) ret = filterExprs.map(bindingifyFilterExpr);
	return { value: ret.length > 0 ? ret : void 0 };
}
function bindingifyRenderChunkFilter(filterOption) {
	if (!filterOption) return;
	if (Array.isArray(filterOption)) {
		assertNoImporterId(filterOption, "renderChunk");
		return { value: filterOption.map(bindingifyFilterExpr) };
	}
	return filterOption.code ? bindingifyGeneralHookFilter("code", filterOption.code) : void 0;
}
//#endregion
//#region src/plugin/bindingify-plugin-hook-meta.ts
function bindingifyPluginHookMeta(options) {
	return { order: bindingPluginOrder(options.order) };
}
function bindingPluginOrder(order) {
	switch (order) {
		case "post": return import_binding.BindingPluginOrder.Post;
		case "pre": return import_binding.BindingPluginOrder.Pre;
		case null:
		case void 0: return;
		default: throw new Error(`Unknown plugin order: ${order}`);
	}
}
//#endregion
//#region src/plugin/fs.ts
const fsModule = {
	appendFile: fsp.appendFile,
	copyFile: fsp.copyFile,
	mkdir: fsp.mkdir,
	mkdtemp: fsp.mkdtemp,
	readdir: fsp.readdir,
	readFile: fsp.readFile,
	realpath: fsp.realpath,
	rename: fsp.rename,
	rmdir: fsp.rmdir,
	stat: fsp.stat,
	lstat: fsp.lstat,
	unlink: fsp.unlink,
	writeFile: fsp.writeFile
};
//#endregion
//#region src/plugin/plugin-context.ts
var PluginContextImpl = class extends MinimalPluginContextImpl {
	fs = fsModule;
	getModuleInfo;
	constructor(outputOptions, context, plugin, data, onLog, logLevel, watchMode, currentLoadingModule) {
		super(onLog, logLevel, plugin.name, watchMode);
		this.outputOptions = outputOptions;
		this.context = context;
		this.data = data;
		this.onLog = onLog;
		this.currentLoadingModule = currentLoadingModule;
		this.getModuleInfo = (id) => this.data.getModuleInfo(id, context);
	}
	async load(options) {
		const id = options.id;
		if (id === this.currentLoadingModule) this.onLog(LOG_LEVEL_WARN, logCycleLoading(this.pluginName, this.currentLoadingModule));
		const moduleInfo = this.data.getModuleInfo(id, this.context);
		if (moduleInfo && moduleInfo.code !== null) return moduleInfo;
		const rawOptions = {
			meta: options.meta || {},
			moduleSideEffects: options.moduleSideEffects || null,
			invalidate: false
		};
		this.data.updateModuleOption(id, rawOptions);
		let loadPromise = this.data.loadModulePromiseMap.get(id);
		if (!loadPromise) {
			loadPromise = this.context.load(id, options.moduleSideEffects ?? void 0, options.packageJsonPath ?? void 0).catch(() => {
				this.data.loadModulePromiseMap.delete(id);
			});
			this.data.loadModulePromiseMap.set(id, loadPromise);
		}
		await loadPromise;
		return this.data.getModuleInfo(id, this.context);
	}
	async resolve(source, importer, options) {
		let receipt = void 0;
		if (options != null) receipt = this.data.saveResolveOptions(options);
		const vitePluginCustom = Object.entries(options?.custom ?? {}).reduce((acc, [key, value]) => {
			if (key.startsWith("vite:")) (acc ??= {})[key] = value;
			return acc;
		}, void 0);
		const res = await this.context.resolve(source, importer, {
			importKind: options?.kind,
			custom: receipt,
			isEntry: options?.isEntry,
			skipSelf: options?.skipSelf,
			vitePluginCustom
		});
		if (receipt != null) this.data.removeSavedResolveOptions(receipt);
		if (res == null) return null;
		const info = this.data.getModuleOption(res.id) || {};
		return {
			...res,
			external: res.external === "relative" ? unreachable(`The PluginContext resolve result external couldn't be 'relative'`) : res.external,
			...info,
			moduleSideEffects: info.moduleSideEffects ?? res.moduleSideEffects ?? null,
			packageJsonPath: res.packageJsonPath
		};
	}
	emitFile = (file) => {
		if (file.type === "prebuilt-chunk") return this.context.emitPrebuiltChunk({
			fileName: file.fileName,
			name: file.name,
			code: file.code,
			exports: file.exports,
			map: bindingifySourcemap(file.map),
			sourcemapFileName: file.sourcemapFileName,
			facadeModuleId: file.facadeModuleId,
			isEntry: file.isEntry,
			isDynamicEntry: file.isDynamicEntry
		});
		if (file.type === "chunk") return this.context.emitChunk({
			preserveEntrySignatures: bindingifyPreserveEntrySignatures(file.preserveSignature),
			...file
		});
		const fnSanitizedFileName = file.fileName || typeof this.outputOptions.sanitizeFileName !== "function" ? void 0 : this.outputOptions.sanitizeFileName(file.name || "asset");
		const filename = file.fileName ? void 0 : this.getAssetFileNames(file);
		return this.context.emitFile({
			...file,
			originalFileName: file.originalFileName || void 0,
			source: bindingAssetSource(file.source)
		}, filename, fnSanitizedFileName);
	};
	getAssetFileNames(file) {
		if (typeof this.outputOptions.assetFileNames === "function") return this.outputOptions.assetFileNames({
			type: "asset",
			name: file.name,
			names: file.name ? [file.name] : [],
			originalFileName: file.originalFileName,
			originalFileNames: file.originalFileName ? [file.originalFileName] : [],
			source: file.source
		});
	}
	getFileName(referenceId) {
		return this.context.getFileName(referenceId);
	}
	getModuleIds() {
		return this.data.getModuleIds(this.context);
	}
	addWatchFile(id) {
		this.context.addWatchFile(id);
	}
	parse(input, options) {
		return parseAst(input, options);
	}
};
//#endregion
//#region src/plugin/load-plugin-context.ts
var LoadPluginContextImpl = class extends PluginContextImpl {
	constructor(outputOptions, context, plugin, data, inner, moduleId, onLog, logLevelOption, watchMode) {
		super(outputOptions, context, plugin, data, onLog, logLevelOption, watchMode, moduleId);
		this.inner = inner;
	}
	addWatchFile(id) {
		this.inner.addWatchFile(id);
	}
};
//#endregion
//#region src/plugin/transform-plugin-context.ts
var TransformPluginContextImpl = class extends PluginContextImpl {
	constructor(outputOptions, context, plugin, data, inner, moduleId, moduleSource, onLog, LogLevelOption, watchMode) {
		super(outputOptions, context, plugin, data, onLog, LogLevelOption, watchMode, moduleId);
		this.inner = inner;
		this.moduleId = moduleId;
		this.moduleSource = moduleSource;
		const getLogHandler = (handler) => (log, pos) => {
			log = normalizeLog(log);
			if (pos) augmentCodeLocation(log, pos, moduleSource, moduleId);
			log.id = moduleId;
			log.hook = "transform";
			handler(log);
		};
		this.debug = getLogHandler(this.debug);
		this.warn = getLogHandler(this.warn);
		this.info = getLogHandler(this.info);
	}
	error(e, pos) {
		if (typeof e === "string") e = { message: e };
		if (pos) augmentCodeLocation(e, pos, this.moduleSource, this.moduleId);
		e.id = this.moduleId;
		e.hook = "transform";
		return error(logPluginError(normalizeLog(e), this.pluginName));
	}
	getCombinedSourcemap() {
		return JSON.parse(this.inner.getCombinedSourcemap());
	}
	addWatchFile(id) {
		this.inner.addWatchFile(id);
	}
	sendMagicString(s) {
		this.inner.sendMagicString(s);
	}
};
//#endregion
//#region src/plugin/bindingify-build-hooks.ts
function createPluginContext(args, ctx) {
	return new PluginContextImpl(args.outputOptions, ctx, args.plugin, args.pluginContextData, args.onLog, args.logLevel, args.watchMode);
}
function bindingifyBuildStart(args) {
	const hook = args.plugin.buildStart;
	if (!hook) return {};
	const { handler, meta } = normalizeHook(hook);
	return {
		plugin: async (ctx, opts) => {
			await handler.call(createPluginContext(args, ctx), args.pluginContextData.getInputOptions(opts));
		},
		meta: bindingifyPluginHookMeta(meta)
	};
}
function bindingifyBuildEnd(args) {
	const hook = args.plugin.buildEnd;
	if (!hook) return {};
	const { handler, meta } = normalizeHook(hook);
	return {
		plugin: async (ctx, err) => {
			await handler.call(createPluginContext(args, ctx), err ? aggregateBindingErrorsIntoJsError(err) : void 0);
		},
		meta: bindingifyPluginHookMeta(meta)
	};
}
function bindingifyResolveId(args) {
	const hook = args.plugin.resolveId;
	if (!hook) return {};
	const { handler, meta, options } = normalizeHook(hook);
	return {
		plugin: async (ctx, specifier, importer, extraOptions) => {
			const contextResolveOptions = extraOptions.custom != null ? args.pluginContextData.getSavedResolveOptions(extraOptions.custom) : void 0;
			const ret = await handler.call(createPluginContext(args, ctx), specifier, importer ?? void 0, {
				...extraOptions,
				custom: contextResolveOptions?.custom
			});
			if (ret == null) return;
			if (ret === false) return {
				id: specifier,
				external: true,
				normalizeExternalId: true
			};
			if (typeof ret === "string") return {
				id: ret,
				normalizeExternalId: false
			};
			let exist = args.pluginContextData.updateModuleOption(ret.id, {
				meta: ret.meta || {},
				moduleSideEffects: ret.moduleSideEffects ?? null,
				invalidate: false
			});
			return {
				id: ret.id,
				external: ret.external,
				normalizeExternalId: false,
				moduleSideEffects: exist.moduleSideEffects ?? void 0,
				packageJsonPath: ret.packageJsonPath
			};
		},
		meta: bindingifyPluginHookMeta(meta),
		filter: bindingifyResolveIdFilter(options.filter)
	};
}
function bindingifyResolveDynamicImport(args) {
	const hook = args.plugin.resolveDynamicImport;
	if (!hook) return {};
	const { handler, meta } = normalizeHook(hook);
	return {
		plugin: async (ctx, specifier, importer) => {
			const ret = await handler.call(createPluginContext(args, ctx), specifier, importer ?? void 0);
			if (ret == null) return;
			if (ret === false) return {
				id: specifier,
				external: true
			};
			if (typeof ret === "string") return { id: ret };
			const result = {
				id: ret.id,
				external: ret.external,
				packageJsonPath: ret.packageJsonPath
			};
			if (ret.moduleSideEffects !== null) result.moduleSideEffects = ret.moduleSideEffects;
			args.pluginContextData.updateModuleOption(ret.id, {
				meta: ret.meta || {},
				moduleSideEffects: ret.moduleSideEffects || null,
				invalidate: false
			});
			return result;
		},
		meta: bindingifyPluginHookMeta(meta)
	};
}
function bindingifyTransform(args) {
	const hook = args.plugin.transform;
	if (!hook) return {};
	const { handler, meta, options } = normalizeHook(hook);
	return {
		plugin: async (ctx, code, id, meta) => {
			let magicStringInstance, astInstance;
			Object.defineProperties(meta, {
				magicString: { get() {
					if (magicStringInstance) return magicStringInstance;
					magicStringInstance = new RolldownMagicString(code);
					return magicStringInstance;
				} },
				ast: { get() {
					if (astInstance) return astInstance;
					let lang = "js";
					switch (meta.moduleType) {
						case "js":
						case "jsx":
						case "ts":
						case "tsx":
							lang = meta.moduleType;
							break;
						default: break;
					}
					astInstance = parseAst(code, {
						astType: meta.moduleType.includes("ts") ? "ts" : "js",
						lang
					});
					return astInstance;
				} }
			});
			const transformCtx = new TransformPluginContextImpl(args.outputOptions, ctx.inner(), args.plugin, args.pluginContextData, ctx, id, code, args.onLog, args.logLevel, args.watchMode);
			const ret = await handler.call(transformCtx, code, id, meta);
			if (ret == null) return;
			if (typeof ret === "string") return { code: ret };
			let moduleOption = args.pluginContextData.updateModuleOption(id, {
				meta: ret.meta ?? {},
				moduleSideEffects: ret.moduleSideEffects ?? null,
				invalidate: false
			});
			let normalizedCode = void 0;
			let map = ret.map;
			if (typeof ret.code === "string") normalizedCode = ret.code;
			else if (ret.code instanceof RolldownMagicString) {
				let magicString = ret.code;
				normalizedCode = magicString.toString();
				let fallbackSourcemap = ctx.sendMagicString(magicString);
				if (fallbackSourcemap != void 0) map = fallbackSourcemap;
			}
			return {
				code: normalizedCode,
				map: bindingifySourcemap(normalizeTransformHookSourcemap(id, code, map)),
				moduleSideEffects: moduleOption.moduleSideEffects ?? void 0,
				moduleType: ret.moduleType
			};
		},
		meta: bindingifyPluginHookMeta(meta),
		filter: bindingifyTransformFilter(options.filter)
	};
}
function bindingifyLoad(args) {
	const hook = args.plugin.load;
	if (!hook) return {};
	const { handler, meta, options } = normalizeHook(hook);
	return {
		plugin: async (ctx, id) => {
			const ret = await handler.call(new LoadPluginContextImpl(args.outputOptions, ctx.inner(), args.plugin, args.pluginContextData, ctx, id, args.onLog, args.logLevel, args.watchMode), id);
			if (ret == null) return;
			if (typeof ret === "string") return { code: ret };
			let moduleOption = args.pluginContextData.updateModuleOption(id, {
				meta: ret.meta || {},
				moduleSideEffects: ret.moduleSideEffects ?? null,
				invalidate: false
			});
			let map = preProcessSourceMap(ret, id);
			return {
				code: ret.code,
				map: bindingifySourcemap(map),
				moduleType: ret.moduleType,
				moduleSideEffects: moduleOption.moduleSideEffects ?? void 0
			};
		},
		meta: bindingifyPluginHookMeta(meta),
		filter: bindingifyLoadFilter(options.filter)
	};
}
function preProcessSourceMap(ret, id) {
	if (!ret.map) return;
	let map = typeof ret.map === "object" ? ret.map : JSON.parse(ret.map);
	if (!isEmptySourcemapFiled(map.sources)) {
		const directory = path.dirname(id) || ".";
		const sourceRoot = map.sourceRoot || ".";
		map.sources = map.sources.map((source) => path.resolve(directory, sourceRoot, source));
	}
	return map;
}
function bindingifyModuleParsed(args) {
	const hook = args.plugin.moduleParsed;
	if (!hook) return {};
	const { handler, meta } = normalizeHook(hook);
	return {
		plugin: async (ctx, moduleInfo) => {
			await handler.call(createPluginContext(args, ctx), transformModuleInfo(moduleInfo, args.pluginContextData.getModuleOption(moduleInfo.id)));
		},
		meta: bindingifyPluginHookMeta(meta)
	};
}
//#endregion
//#region src/plugin/bindingify-output-hooks.ts
function bindingifyRenderStart(args) {
	const hook = args.plugin.renderStart;
	if (!hook) return {};
	const { handler, meta } = normalizeHook(hook);
	return {
		plugin: async (ctx, opts) => {
			handler.call(new PluginContextImpl(args.outputOptions, ctx, args.plugin, args.pluginContextData, args.onLog, args.logLevel, args.watchMode), args.pluginContextData.getOutputOptions(opts), args.pluginContextData.getInputOptions(opts));
		},
		meta: bindingifyPluginHookMeta(meta)
	};
}
function bindingifyRenderChunk(args) {
	const hook = args.plugin.renderChunk;
	if (!hook) return {};
	const { handler, meta, options } = normalizeHook(hook);
	return {
		plugin: async (ctx, code, chunk, opts, meta) => {
			if (args.pluginContextData.getRenderChunkMeta() == null) args.pluginContextData.setRenderChunkMeta({ chunks: Object.fromEntries(Object.entries(meta.chunks).map(([key, value]) => [key, transformRenderedChunk(value)])) });
			const renderChunkMeta = args.pluginContextData.getRenderChunkMeta();
			let magicStringInstance;
			if (args.options.experimental?.nativeMagicString) Object.defineProperty(renderChunkMeta, "magicString", {
				get() {
					if (magicStringInstance) return magicStringInstance;
					magicStringInstance = new RolldownMagicString(code);
					return magicStringInstance;
				},
				configurable: true
			});
			const ret = await handler.call(new PluginContextImpl(args.outputOptions, ctx, args.plugin, args.pluginContextData, args.onLog, args.logLevel, args.watchMode), code, transformRenderedChunk(chunk), args.pluginContextData.getOutputOptions(opts), renderChunkMeta);
			if (ret == null) return;
			if (ret instanceof RolldownMagicString) {
				const normalizedCode = ret.toString();
				const generatedMap = ret.generateMap();
				return {
					code: normalizedCode,
					map: bindingifySourcemap({
						file: generatedMap.file,
						mappings: generatedMap.mappings,
						names: generatedMap.names,
						sources: generatedMap.sources,
						sourcesContent: generatedMap.sourcesContent.map((s) => s ?? null)
					})
				};
			}
			if (typeof ret === "string") return { code: ret };
			if (ret.code instanceof RolldownMagicString) {
				const magicString = ret.code;
				const normalizedCode = magicString.toString();
				if (ret.map === null) return { code: normalizedCode };
				if (ret.map === void 0) {
					const generatedMap = magicString.generateMap();
					return {
						code: normalizedCode,
						map: bindingifySourcemap({
							file: generatedMap.file,
							mappings: generatedMap.mappings,
							names: generatedMap.names,
							sources: generatedMap.sources,
							sourcesContent: generatedMap.sourcesContent.map((s) => s ?? null)
						})
					};
				}
				return {
					code: normalizedCode,
					map: bindingifySourcemap(ret.map)
				};
			}
			if (!ret.map) return { code: ret.code };
			return {
				code: ret.code,
				map: bindingifySourcemap(ret.map)
			};
		},
		meta: bindingifyPluginHookMeta(meta),
		filter: bindingifyRenderChunkFilter(options.filter)
	};
}
function bindingifyAugmentChunkHash(args) {
	const hook = args.plugin.augmentChunkHash;
	if (!hook) return {};
	const { handler, meta } = normalizeHook(hook);
	return {
		plugin: async (ctx, chunk) => {
			return handler.call(new PluginContextImpl(args.outputOptions, ctx, args.plugin, args.pluginContextData, args.onLog, args.logLevel, args.watchMode), transformRenderedChunk(chunk));
		},
		meta: bindingifyPluginHookMeta(meta)
	};
}
function bindingifyRenderError(args) {
	const hook = args.plugin.renderError;
	if (!hook) return {};
	const { handler, meta } = normalizeHook(hook);
	return {
		plugin: async (ctx, err) => {
			handler.call(new PluginContextImpl(args.outputOptions, ctx, args.plugin, args.pluginContextData, args.onLog, args.logLevel, args.watchMode), aggregateBindingErrorsIntoJsError(err));
		},
		meta: bindingifyPluginHookMeta(meta)
	};
}
function bindingifyGenerateBundle(args) {
	const hook = args.plugin.generateBundle;
	if (!hook) return {};
	const { handler, meta } = normalizeHook(hook);
	return {
		plugin: async (ctx, bundle, isWrite, opts) => {
			const changed = {
				updated: /* @__PURE__ */ new Set(),
				deleted: /* @__PURE__ */ new Set()
			};
			const context = new PluginContextImpl(args.outputOptions, ctx, args.plugin, args.pluginContextData, args.onLog, args.logLevel, args.watchMode);
			const output = transformToOutputBundle(context, unwrapBindingResult(bundle), changed);
			await handler.call(context, args.pluginContextData.getOutputOptions(opts), output, isWrite);
			return collectChangedBundle(changed, output);
		},
		meta: bindingifyPluginHookMeta(meta)
	};
}
function bindingifyWriteBundle(args) {
	const hook = args.plugin.writeBundle;
	if (!hook) return {};
	const { handler, meta } = normalizeHook(hook);
	return {
		plugin: async (ctx, bundle, opts) => {
			const changed = {
				updated: /* @__PURE__ */ new Set(),
				deleted: /* @__PURE__ */ new Set()
			};
			const context = new PluginContextImpl(args.outputOptions, ctx, args.plugin, args.pluginContextData, args.onLog, args.logLevel, args.watchMode);
			const output = transformToOutputBundle(context, unwrapBindingResult(bundle), changed);
			await handler.call(context, args.pluginContextData.getOutputOptions(opts), output);
			return collectChangedBundle(changed, output);
		},
		meta: bindingifyPluginHookMeta(meta)
	};
}
function bindingifyCloseBundle(args) {
	const hook = args.plugin.closeBundle;
	if (!hook) return {};
	const { handler, meta } = normalizeHook(hook);
	return {
		plugin: async (ctx, err) => {
			await handler.call(new PluginContextImpl(args.outputOptions, ctx, args.plugin, args.pluginContextData, args.onLog, args.logLevel, args.watchMode), err ? aggregateBindingErrorsIntoJsError(err) : void 0);
		},
		meta: bindingifyPluginHookMeta(meta)
	};
}
function bindingifyBanner(args) {
	const hook = args.plugin.banner;
	if (!hook) return {};
	const { handler, meta } = normalizeHook(hook);
	return {
		plugin: async (ctx, chunk) => {
			if (typeof handler === "string") return handler;
			return handler.call(new PluginContextImpl(args.outputOptions, ctx, args.plugin, args.pluginContextData, args.onLog, args.logLevel, args.watchMode), transformRenderedChunk(chunk));
		},
		meta: bindingifyPluginHookMeta(meta)
	};
}
function bindingifyFooter(args) {
	const hook = args.plugin.footer;
	if (!hook) return {};
	const { handler, meta } = normalizeHook(hook);
	return {
		plugin: async (ctx, chunk) => {
			if (typeof handler === "string") return handler;
			return handler.call(new PluginContextImpl(args.outputOptions, ctx, args.plugin, args.pluginContextData, args.onLog, args.logLevel, args.watchMode), transformRenderedChunk(chunk));
		},
		meta: bindingifyPluginHookMeta(meta)
	};
}
function bindingifyIntro(args) {
	const hook = args.plugin.intro;
	if (!hook) return {};
	const { handler, meta } = normalizeHook(hook);
	return {
		plugin: async (ctx, chunk) => {
			if (typeof handler === "string") return handler;
			return handler.call(new PluginContextImpl(args.outputOptions, ctx, args.plugin, args.pluginContextData, args.onLog, args.logLevel, args.watchMode), transformRenderedChunk(chunk));
		},
		meta: bindingifyPluginHookMeta(meta)
	};
}
function bindingifyOutro(args) {
	const hook = args.plugin.outro;
	if (!hook) return {};
	const { handler, meta } = normalizeHook(hook);
	return {
		plugin: async (ctx, chunk) => {
			if (typeof handler === "string") return handler;
			return handler.call(new PluginContextImpl(args.outputOptions, ctx, args.plugin, args.pluginContextData, args.onLog, args.logLevel, args.watchMode), transformRenderedChunk(chunk));
		},
		meta: bindingifyPluginHookMeta(meta)
	};
}
//#endregion
//#region src/plugin/bindingify-watch-hooks.ts
function bindingifyWatchChange(args) {
	const hook = args.plugin.watchChange;
	if (!hook) return {};
	const { handler, meta } = normalizeHook(hook);
	return {
		plugin: async (ctx, id, event) => {
			await handler.call(new PluginContextImpl(args.outputOptions, ctx, args.plugin, args.pluginContextData, args.onLog, args.logLevel, args.watchMode), id, { event });
		},
		meta: bindingifyPluginHookMeta(meta)
	};
}
function bindingifyCloseWatcher(args) {
	const hook = args.plugin.closeWatcher;
	if (!hook) return {};
	const { handler, meta } = normalizeHook(hook);
	return {
		plugin: async (ctx) => {
			await handler.call(new PluginContextImpl(args.outputOptions, ctx, args.plugin, args.pluginContextData, args.onLog, args.logLevel, args.watchMode));
		},
		meta: bindingifyPluginHookMeta(meta)
	};
}
//#endregion
//#region src/plugin/generated/hook-usage.ts
var HookUsage = class {
	bitflag = BigInt(0);
	constructor() {}
	union(kind) {
		this.bitflag |= BigInt(kind);
	}
	inner() {
		return Number(this.bitflag);
	}
};
function extractHookUsage(plugin) {
	let hookUsage = new HookUsage();
	if (plugin.buildStart) hookUsage.union(1);
	if (plugin.resolveId) hookUsage.union(2);
	if (plugin.resolveDynamicImport) hookUsage.union(4);
	if (plugin.load) hookUsage.union(8);
	if (plugin.transform) hookUsage.union(16);
	if (plugin.moduleParsed) hookUsage.union(32);
	if (plugin.buildEnd) hookUsage.union(64);
	if (plugin.renderStart) hookUsage.union(128);
	if (plugin.renderError) hookUsage.union(256);
	if (plugin.renderChunk) hookUsage.union(512);
	if (plugin.augmentChunkHash) hookUsage.union(1024);
	if (plugin.generateBundle) hookUsage.union(2048);
	if (plugin.writeBundle) hookUsage.union(4096);
	if (plugin.closeBundle) hookUsage.union(8192);
	if (plugin.watchChange) hookUsage.union(16384);
	if (plugin.closeWatcher) hookUsage.union(32768);
	if (plugin.banner) hookUsage.union(131072);
	if (plugin.footer) hookUsage.union(262144);
	if (plugin.intro) hookUsage.union(524288);
	if (plugin.outro) hookUsage.union(1048576);
	return hookUsage;
}
//#endregion
//#region src/plugin/bindingify-plugin.ts
function bindingifyPlugin(plugin, options, outputOptions, pluginContextData, normalizedOutputPlugins, onLog, logLevel, watchMode) {
	const args = {
		plugin,
		options,
		outputOptions,
		pluginContextData,
		onLog,
		logLevel,
		watchMode,
		normalizedOutputPlugins
	};
	const { plugin: buildStart, meta: buildStartMeta } = bindingifyBuildStart(args);
	const { plugin: resolveId, meta: resolveIdMeta, filter: resolveIdFilter } = bindingifyResolveId(args);
	const { plugin: resolveDynamicImport, meta: resolveDynamicImportMeta } = bindingifyResolveDynamicImport(args);
	const { plugin: buildEnd, meta: buildEndMeta } = bindingifyBuildEnd(args);
	const { plugin: transform, meta: transformMeta, filter: transformFilter } = bindingifyTransform(args);
	const { plugin: moduleParsed, meta: moduleParsedMeta } = bindingifyModuleParsed(args);
	const { plugin: load, meta: loadMeta, filter: loadFilter } = bindingifyLoad(args);
	const { plugin: renderChunk, meta: renderChunkMeta, filter: renderChunkFilter } = bindingifyRenderChunk(args);
	const { plugin: augmentChunkHash, meta: augmentChunkHashMeta } = bindingifyAugmentChunkHash(args);
	const { plugin: renderStart, meta: renderStartMeta } = bindingifyRenderStart(args);
	const { plugin: renderError, meta: renderErrorMeta } = bindingifyRenderError(args);
	const { plugin: generateBundle, meta: generateBundleMeta } = bindingifyGenerateBundle(args);
	const { plugin: writeBundle, meta: writeBundleMeta } = bindingifyWriteBundle(args);
	const { plugin: closeBundle, meta: closeBundleMeta } = bindingifyCloseBundle(args);
	const { plugin: banner, meta: bannerMeta } = bindingifyBanner(args);
	const { plugin: footer, meta: footerMeta } = bindingifyFooter(args);
	const { plugin: intro, meta: introMeta } = bindingifyIntro(args);
	const { plugin: outro, meta: outroMeta } = bindingifyOutro(args);
	const { plugin: watchChange, meta: watchChangeMeta } = bindingifyWatchChange(args);
	const { plugin: closeWatcher, meta: closeWatcherMeta } = bindingifyCloseWatcher(args);
	let hookUsage = extractHookUsage(plugin).inner();
	return wrapHandlers({
		name: plugin.name,
		buildStart,
		buildStartMeta,
		resolveId,
		resolveIdMeta,
		resolveIdFilter,
		resolveDynamicImport,
		resolveDynamicImportMeta,
		buildEnd,
		buildEndMeta,
		transform,
		transformMeta,
		transformFilter,
		moduleParsed,
		moduleParsedMeta,
		load,
		loadMeta,
		loadFilter,
		renderChunk,
		renderChunkMeta,
		renderChunkFilter,
		augmentChunkHash,
		augmentChunkHashMeta,
		renderStart,
		renderStartMeta,
		renderError,
		renderErrorMeta,
		generateBundle,
		generateBundleMeta,
		writeBundle,
		writeBundleMeta,
		closeBundle,
		closeBundleMeta,
		banner,
		bannerMeta,
		footer,
		footerMeta,
		intro,
		introMeta,
		outro,
		outroMeta,
		watchChange,
		watchChangeMeta,
		closeWatcher,
		closeWatcherMeta,
		hookUsage
	});
}
function wrapHandlers(plugin) {
	for (const hookName of [
		"buildStart",
		"resolveId",
		"resolveDynamicImport",
		"buildEnd",
		"transform",
		"moduleParsed",
		"load",
		"renderChunk",
		"augmentChunkHash",
		"renderStart",
		"renderError",
		"generateBundle",
		"writeBundle",
		"closeBundle",
		"banner",
		"footer",
		"intro",
		"outro",
		"watchChange",
		"closeWatcher"
	]) {
		const handler = plugin[hookName];
		if (handler) plugin[hookName] = async (...args) => {
			try {
				return await handler(...args);
			} catch (e) {
				return error(logPluginError(e, plugin.name, {
					hook: hookName,
					id: hookName === "transform" ? args[2] : void 0
				}));
			}
		};
	}
	return plugin;
}
//#endregion
//#region src/options/normalized-input-options.ts
var NormalizedInputOptionsImpl = class extends PlainObjectLike {
	inner;
	constructor(inner, onLog, inputPlugins) {
		super();
		this.onLog = onLog;
		this.inputPlugins = inputPlugins;
		this.inner = inner;
	}
	get shimMissingExports() {
		return this.inner.shimMissingExports;
	}
	get input() {
		return this.inner.input;
	}
	get cwd() {
		return this.inner.cwd;
	}
	get platform() {
		return this.inner.platform;
	}
	get context() {
		return this.inner.context;
	}
	get plugins() {
		return this.inputPlugins;
	}
};
__decorate([lazyProp], NormalizedInputOptionsImpl.prototype, "shimMissingExports", null);
__decorate([lazyProp], NormalizedInputOptionsImpl.prototype, "input", null);
__decorate([lazyProp], NormalizedInputOptionsImpl.prototype, "cwd", null);
__decorate([lazyProp], NormalizedInputOptionsImpl.prototype, "platform", null);
__decorate([lazyProp], NormalizedInputOptionsImpl.prototype, "context", null);
//#endregion
//#region src/options/normalized-output-options.ts
var NormalizedOutputOptionsImpl = class extends PlainObjectLike {
	constructor(inner, outputOptions, normalizedOutputPlugins) {
		super();
		this.inner = inner;
		this.outputOptions = outputOptions;
		this.normalizedOutputPlugins = normalizedOutputPlugins;
	}
	get dir() {
		return this.inner.dir ?? void 0;
	}
	get entryFileNames() {
		return this.inner.entryFilenames || this.outputOptions.entryFileNames;
	}
	get chunkFileNames() {
		return this.inner.chunkFilenames || this.outputOptions.chunkFileNames;
	}
	get assetFileNames() {
		return this.inner.assetFilenames || this.outputOptions.assetFileNames;
	}
	get format() {
		return this.inner.format;
	}
	get exports() {
		return this.inner.exports;
	}
	get sourcemap() {
		return this.inner.sourcemap;
	}
	get sourcemapBaseUrl() {
		return this.inner.sourcemapBaseUrl ?? void 0;
	}
	get shimMissingExports() {
		return this.inner.shimMissingExports;
	}
	get name() {
		return this.inner.name ?? void 0;
	}
	get file() {
		return this.inner.file ?? void 0;
	}
	get codeSplitting() {
		return this.inner.codeSplitting;
	}
	/**
	* @deprecated Use `codeSplitting` instead.
	*/
	get inlineDynamicImports() {
		return !this.inner.codeSplitting;
	}
	get dynamicImportInCjs() {
		return this.inner.dynamicImportInCjs;
	}
	get externalLiveBindings() {
		return this.inner.externalLiveBindings;
	}
	get banner() {
		return normalizeAddon(this.outputOptions.banner);
	}
	get footer() {
		return normalizeAddon(this.outputOptions.footer);
	}
	get postBanner() {
		return normalizeAddon(this.outputOptions.postBanner);
	}
	get postFooter() {
		return normalizeAddon(this.outputOptions.postFooter);
	}
	get intro() {
		return normalizeAddon(this.outputOptions.intro);
	}
	get outro() {
		return normalizeAddon(this.outputOptions.outro);
	}
	get esModule() {
		return this.inner.esModule;
	}
	get extend() {
		return this.inner.extend;
	}
	get globals() {
		return this.inner.globals || this.outputOptions.globals;
	}
	get paths() {
		return this.outputOptions.paths;
	}
	get hashCharacters() {
		return this.inner.hashCharacters;
	}
	get sourcemapDebugIds() {
		return this.inner.sourcemapDebugIds;
	}
	get sourcemapExcludeSources() {
		return this.inner.sourcemapExcludeSources;
	}
	get sourcemapIgnoreList() {
		return this.outputOptions.sourcemapIgnoreList;
	}
	get sourcemapPathTransform() {
		return this.outputOptions.sourcemapPathTransform;
	}
	get minify() {
		let ret = this.inner.minify;
		if (typeof ret === "object" && ret !== null) {
			delete ret["codegen"];
			delete ret["module"];
			delete ret["sourcemap"];
		}
		return ret;
	}
	get legalComments() {
		return this.inner.legalComments;
	}
	get comments() {
		const c = this.inner.comments;
		return {
			legal: c.legal ?? true,
			annotation: c.annotation ?? true,
			jsdoc: c.jsdoc ?? true
		};
	}
	get polyfillRequire() {
		return this.inner.polyfillRequire;
	}
	get plugins() {
		return this.normalizedOutputPlugins;
	}
	get preserveModules() {
		return this.inner.preserveModules;
	}
	get preserveModulesRoot() {
		return this.inner.preserveModulesRoot;
	}
	get virtualDirname() {
		return this.inner.virtualDirname;
	}
	get topLevelVar() {
		return this.inner.topLevelVar ?? false;
	}
	get minifyInternalExports() {
		return this.inner.minifyInternalExports ?? false;
	}
};
__decorate([lazyProp], NormalizedOutputOptionsImpl.prototype, "dir", null);
__decorate([lazyProp], NormalizedOutputOptionsImpl.prototype, "entryFileNames", null);
__decorate([lazyProp], NormalizedOutputOptionsImpl.prototype, "chunkFileNames", null);
__decorate([lazyProp], NormalizedOutputOptionsImpl.prototype, "assetFileNames", null);
__decorate([lazyProp], NormalizedOutputOptionsImpl.prototype, "format", null);
__decorate([lazyProp], NormalizedOutputOptionsImpl.prototype, "exports", null);
__decorate([lazyProp], NormalizedOutputOptionsImpl.prototype, "sourcemap", null);
__decorate([lazyProp], NormalizedOutputOptionsImpl.prototype, "sourcemapBaseUrl", null);
__decorate([lazyProp], NormalizedOutputOptionsImpl.prototype, "shimMissingExports", null);
__decorate([lazyProp], NormalizedOutputOptionsImpl.prototype, "name", null);
__decorate([lazyProp], NormalizedOutputOptionsImpl.prototype, "file", null);
__decorate([lazyProp], NormalizedOutputOptionsImpl.prototype, "codeSplitting", null);
__decorate([lazyProp], NormalizedOutputOptionsImpl.prototype, "inlineDynamicImports", null);
__decorate([lazyProp], NormalizedOutputOptionsImpl.prototype, "dynamicImportInCjs", null);
__decorate([lazyProp], NormalizedOutputOptionsImpl.prototype, "externalLiveBindings", null);
__decorate([lazyProp], NormalizedOutputOptionsImpl.prototype, "banner", null);
__decorate([lazyProp], NormalizedOutputOptionsImpl.prototype, "footer", null);
__decorate([lazyProp], NormalizedOutputOptionsImpl.prototype, "postBanner", null);
__decorate([lazyProp], NormalizedOutputOptionsImpl.prototype, "postFooter", null);
__decorate([lazyProp], NormalizedOutputOptionsImpl.prototype, "intro", null);
__decorate([lazyProp], NormalizedOutputOptionsImpl.prototype, "outro", null);
__decorate([lazyProp], NormalizedOutputOptionsImpl.prototype, "esModule", null);
__decorate([lazyProp], NormalizedOutputOptionsImpl.prototype, "extend", null);
__decorate([lazyProp], NormalizedOutputOptionsImpl.prototype, "globals", null);
__decorate([lazyProp], NormalizedOutputOptionsImpl.prototype, "paths", null);
__decorate([lazyProp], NormalizedOutputOptionsImpl.prototype, "hashCharacters", null);
__decorate([lazyProp], NormalizedOutputOptionsImpl.prototype, "sourcemapDebugIds", null);
__decorate([lazyProp], NormalizedOutputOptionsImpl.prototype, "sourcemapExcludeSources", null);
__decorate([lazyProp], NormalizedOutputOptionsImpl.prototype, "sourcemapIgnoreList", null);
__decorate([lazyProp], NormalizedOutputOptionsImpl.prototype, "sourcemapPathTransform", null);
__decorate([lazyProp], NormalizedOutputOptionsImpl.prototype, "minify", null);
__decorate([lazyProp], NormalizedOutputOptionsImpl.prototype, "legalComments", null);
__decorate([lazyProp], NormalizedOutputOptionsImpl.prototype, "comments", null);
__decorate([lazyProp], NormalizedOutputOptionsImpl.prototype, "polyfillRequire", null);
__decorate([lazyProp], NormalizedOutputOptionsImpl.prototype, "plugins", null);
__decorate([lazyProp], NormalizedOutputOptionsImpl.prototype, "preserveModules", null);
__decorate([lazyProp], NormalizedOutputOptionsImpl.prototype, "preserveModulesRoot", null);
__decorate([lazyProp], NormalizedOutputOptionsImpl.prototype, "virtualDirname", null);
__decorate([lazyProp], NormalizedOutputOptionsImpl.prototype, "topLevelVar", null);
__decorate([lazyProp], NormalizedOutputOptionsImpl.prototype, "minifyInternalExports", null);
function normalizeAddon(value) {
	if (typeof value === "function") return value;
	return () => value || "";
}
//#endregion
//#region src/plugin/plugin-context-data.ts
var PluginContextData = class {
	moduleOptionMap = /* @__PURE__ */ new Map();
	resolveOptionsMap = /* @__PURE__ */ new Map();
	loadModulePromiseMap = /* @__PURE__ */ new Map();
	renderedChunkMeta = null;
	normalizedInputOptions = null;
	normalizedOutputOptions = null;
	constructor(onLog, outputOptions, normalizedInputPlugins, normalizedOutputPlugins) {
		this.onLog = onLog;
		this.outputOptions = outputOptions;
		this.normalizedInputPlugins = normalizedInputPlugins;
		this.normalizedOutputPlugins = normalizedOutputPlugins;
	}
	updateModuleOption(id, option) {
		const existing = this.moduleOptionMap.get(id);
		if (existing) {
			if (option.moduleSideEffects != null) existing.moduleSideEffects = option.moduleSideEffects;
			if (option.meta != null) Object.assign(existing.meta, option.meta);
			if (option.invalidate != null) existing.invalidate = option.invalidate;
		} else {
			this.moduleOptionMap.set(id, option);
			return option;
		}
		return existing;
	}
	getModuleOption(id) {
		const option = this.moduleOptionMap.get(id);
		if (!option) {
			const raw = {
				moduleSideEffects: null,
				meta: {}
			};
			this.moduleOptionMap.set(id, raw);
			return raw;
		}
		return option;
	}
	getModuleInfo(id, context) {
		const bindingInfo = context.getModuleInfo(id);
		if (bindingInfo) {
			const info = transformModuleInfo(bindingInfo, this.getModuleOption(id));
			return this.proxyModuleInfo(id, info);
		}
		return null;
	}
	proxyModuleInfo(id, info) {
		let moduleSideEffects = info.moduleSideEffects;
		Object.defineProperty(info, "moduleSideEffects", {
			get() {
				return moduleSideEffects;
			},
			set: (v) => {
				this.updateModuleOption(id, {
					moduleSideEffects: v,
					meta: info.meta,
					invalidate: true
				});
				moduleSideEffects = v;
			}
		});
		return info;
	}
	getModuleIds(context) {
		return context.getModuleIds().values();
	}
	saveResolveOptions(options) {
		const index = this.resolveOptionsMap.size;
		this.resolveOptionsMap.set(index, options);
		return index;
	}
	getSavedResolveOptions(receipt) {
		return this.resolveOptionsMap.get(receipt);
	}
	removeSavedResolveOptions(receipt) {
		this.resolveOptionsMap.delete(receipt);
	}
	setRenderChunkMeta(meta) {
		this.renderedChunkMeta = meta;
	}
	getRenderChunkMeta() {
		return this.renderedChunkMeta;
	}
	getInputOptions(opts) {
		this.normalizedInputOptions ??= new NormalizedInputOptionsImpl(opts, this.onLog, this.normalizedInputPlugins);
		return this.normalizedInputOptions;
	}
	getOutputOptions(opts) {
		this.normalizedOutputOptions ??= new NormalizedOutputOptionsImpl(opts, this.outputOptions, this.normalizedOutputPlugins);
		return this.normalizedOutputOptions;
	}
	clear() {
		this.renderedChunkMeta = null;
		this.loadModulePromiseMap.clear();
	}
};
//#endregion
//#region src/utils/normalize-transform-options.ts
/**
* Normalizes transform options by extracting `define`, `inject`, and `dropLabels` separately from OXC transform options.
*
* Prioritizes values from `transform.define`, `transform.inject`, and `transform.dropLabels` over deprecated top-level options.
*/
function normalizeTransformOptions(inputOptions) {
	const transform = inputOptions.transform;
	const define = transform?.define ? Object.entries(transform.define) : void 0;
	const inject = transform?.inject;
	const dropLabels = transform?.dropLabels;
	let oxcTransformOptions;
	if (transform) {
		const { define: _define, inject: _inject, dropLabels: _dropLabels, ...rest } = transform;
		if (Object.keys(rest).length > 0) {
			if (rest.jsx === false) rest.jsx = "disable";
			oxcTransformOptions = rest;
		}
	}
	return {
		define,
		inject,
		dropLabels,
		oxcTransformOptions
	};
}
//#endregion
//#region src/utils/bindingify-input-options.ts
function bindingifyInputOptions(rawPlugins, inputOptions, outputOptions, normalizedInputPlugins, normalizedOutputPlugins, onLog, logLevel, watchMode) {
	const pluginContextData = new PluginContextData(onLog, outputOptions, normalizedInputPlugins, normalizedOutputPlugins);
	const plugins = rawPlugins.map((plugin) => {
		if ("_parallel" in plugin) return;
		if (plugin instanceof BuiltinPlugin) switch (plugin.name) {
			case "builtin:vite-manifest": return bindingifyManifestPlugin(plugin, pluginContextData);
			default: return bindingifyBuiltInPlugin(plugin);
		}
		return bindingifyPlugin(plugin, inputOptions, outputOptions, pluginContextData, normalizedOutputPlugins, onLog, logLevel, watchMode);
	});
	const normalizedTransform = normalizeTransformOptions(inputOptions);
	return {
		input: bindingifyInput(inputOptions.input),
		plugins,
		cwd: inputOptions.cwd ?? process.cwd(),
		external: bindingifyExternal(inputOptions.external),
		resolve: bindingifyResolve(inputOptions.resolve),
		platform: inputOptions.platform,
		shimMissingExports: inputOptions.shimMissingExports,
		logLevel: bindingifyLogLevel(logLevel),
		onLog: async (level, log) => onLog(level, log),
		treeshake: bindingifyTreeshakeOptions(inputOptions.treeshake),
		moduleTypes: inputOptions.moduleTypes,
		define: normalizedTransform.define,
		inject: bindingifyInject(normalizedTransform.inject),
		experimental: bindingifyExperimental(inputOptions.experimental),
		profilerNames: outputOptions.generatedCode?.profilerNames,
		transform: normalizedTransform.oxcTransformOptions,
		watch: bindingifyWatch(inputOptions.watch),
		dropLabels: normalizedTransform.dropLabels,
		keepNames: outputOptions.keepNames,
		checks: inputOptions.checks,
		deferSyncScanData: () => {
			let ret = [];
			pluginContextData.moduleOptionMap.forEach((value, key) => {
				if (value.invalidate) ret.push({
					id: key,
					sideEffects: value.moduleSideEffects ?? void 0
				});
			});
			return ret;
		},
		makeAbsoluteExternalsRelative: bindingifyMakeAbsoluteExternalsRelative(inputOptions.makeAbsoluteExternalsRelative),
		devtools: inputOptions.devtools,
		invalidateJsSideCache: pluginContextData.clear.bind(pluginContextData),
		preserveEntrySignatures: bindingifyPreserveEntrySignatures(inputOptions.preserveEntrySignatures),
		optimization: inputOptions.optimization,
		context: inputOptions.context,
		tsconfig: inputOptions.resolve?.tsconfigFilename ?? inputOptions.tsconfig
	};
}
function bindingifyDevMode(devMode) {
	if (devMode) {
		if (typeof devMode === "boolean") return devMode ? {} : void 0;
		return devMode;
	}
}
function bindingifyAttachDebugInfo(attachDebugInfo) {
	switch (attachDebugInfo) {
		case void 0: return;
		case "full": return import_binding.BindingAttachDebugInfo.Full;
		case "simple": return import_binding.BindingAttachDebugInfo.Simple;
		case "none": return import_binding.BindingAttachDebugInfo.None;
	}
}
function bindingifyExternal(external) {
	if (external) {
		if (typeof external === "function") return (id, importer, isResolved) => {
			if (id.startsWith("\0")) return false;
			return external(id, importer, isResolved) ?? false;
		};
		return arraify(external);
	}
}
function bindingifyExperimental(experimental) {
	let chunkModulesOrder = import_binding.BindingChunkModuleOrderBy.ExecOrder;
	if (experimental?.chunkModulesOrder) switch (experimental.chunkModulesOrder) {
		case "exec-order":
			chunkModulesOrder = import_binding.BindingChunkModuleOrderBy.ExecOrder;
			break;
		case "module-id":
			chunkModulesOrder = import_binding.BindingChunkModuleOrderBy.ModuleId;
			break;
		default: throw new Error(`Unexpected chunkModulesOrder: ${experimental.chunkModulesOrder}`);
	}
	return {
		viteMode: experimental?.viteMode,
		resolveNewUrlToAsset: experimental?.resolveNewUrlToAsset,
		devMode: bindingifyDevMode(experimental?.devMode),
		attachDebugInfo: bindingifyAttachDebugInfo(experimental?.attachDebugInfo),
		chunkModulesOrder,
		chunkImportMap: experimental?.chunkImportMap,
		onDemandWrapping: experimental?.onDemandWrapping,
		incrementalBuild: experimental?.incrementalBuild,
		nativeMagicString: experimental?.nativeMagicString,
		chunkOptimization: experimental?.chunkOptimization,
		lazyBarrel: experimental?.lazyBarrel
	};
}
function bindingifyResolve(resolve) {
	const yarnPnp = typeof process === "object" && !!process.versions?.pnp;
	if (resolve) {
		const { alias, extensionAlias, ...rest } = resolve;
		return {
			alias: alias ? Object.entries(alias).map(([name, replacement]) => ({
				find: name,
				replacements: replacement === false ? [void 0] : arraify(replacement)
			})) : void 0,
			extensionAlias: extensionAlias ? Object.entries(extensionAlias).map(([name, value]) => ({
				target: name,
				replacements: value
			})) : void 0,
			yarnPnp,
			...rest
		};
	} else return { yarnPnp };
}
function bindingifyInject(inject) {
	if (inject) return Object.entries(inject).map(([alias, item]) => {
		if (Array.isArray(item)) {
			if (item[1] === "*") return {
				tagNamespace: true,
				alias,
				from: item[0]
			};
			return {
				tagNamed: true,
				alias,
				from: item[0],
				imported: item[1]
			};
		} else return {
			tagNamed: true,
			imported: "default",
			alias,
			from: item
		};
	});
}
function bindingifyLogLevel(logLevel) {
	switch (logLevel) {
		case "silent": return import_binding.BindingLogLevel.Silent;
		case "debug": return import_binding.BindingLogLevel.Debug;
		case "warn": return import_binding.BindingLogLevel.Warn;
		case "info": return import_binding.BindingLogLevel.Info;
		default: throw new Error(`Unexpected log level: ${logLevel}`);
	}
}
function bindingifyInput(input) {
	if (input === void 0) return [];
	if (typeof input === "string") return [{ import: input }];
	if (Array.isArray(input)) return input.map((src) => ({ import: src }));
	return Object.entries(input).map(([name, import_path]) => {
		return {
			name,
			import: import_path
		};
	});
}
function bindingifyWatch(watch) {
	if (watch) {
		if (watch.notify) console.warn("The \"watch.notify\" option is deprecated. Please use \"watch.watcher\" instead.");
		const watcher = {
			...watch.notify,
			...watch.watcher
		};
		return {
			buildDelay: watch.buildDelay,
			skipWrite: watch.skipWrite,
			usePolling: watcher.usePolling,
			pollInterval: watcher.pollInterval,
			compareContentsForPolling: watcher.compareContentsForPolling,
			useDebounce: watcher.useDebounce,
			debounceDelay: watcher.debounceDelay,
			debounceTickRate: watcher.debounceTickRate,
			include: normalizedStringOrRegex(watch.include),
			exclude: normalizedStringOrRegex(watch.exclude),
			onInvalidate: (...args) => watch.onInvalidate?.(...args)
		};
	}
}
function bindingifyTreeshakeOptions(config) {
	if (config === false) return;
	if (config === true || config === void 0) return { moduleSideEffects: true };
	let normalizedConfig = {
		moduleSideEffects: true,
		annotations: config.annotations,
		manualPureFunctions: config.manualPureFunctions,
		unknownGlobalSideEffects: config.unknownGlobalSideEffects,
		invalidImportSideEffects: config.invalidImportSideEffects,
		commonjs: config.commonjs
	};
	switch (config.propertyReadSideEffects) {
		case "always":
			normalizedConfig.propertyReadSideEffects = import_binding.BindingPropertyReadSideEffects.Always;
			break;
		case false:
			normalizedConfig.propertyReadSideEffects = import_binding.BindingPropertyReadSideEffects.False;
			break;
		default:
	}
	switch (config.propertyWriteSideEffects) {
		case "always":
			normalizedConfig.propertyWriteSideEffects = import_binding.BindingPropertyWriteSideEffects.Always;
			break;
		case false:
			normalizedConfig.propertyWriteSideEffects = import_binding.BindingPropertyWriteSideEffects.False;
			break;
		default:
	}
	if (config.moduleSideEffects === void 0) normalizedConfig.moduleSideEffects = true;
	else if (config.moduleSideEffects === "no-external") normalizedConfig.moduleSideEffects = [{
		external: true,
		sideEffects: false
	}, {
		external: false,
		sideEffects: true
	}];
	else normalizedConfig.moduleSideEffects = config.moduleSideEffects;
	return normalizedConfig;
}
function bindingifyMakeAbsoluteExternalsRelative(makeAbsoluteExternalsRelative) {
	if (makeAbsoluteExternalsRelative === "ifRelativeSource") return { type: "IfRelativeSource" };
	if (typeof makeAbsoluteExternalsRelative === "boolean") return {
		type: "Bool",
		field0: makeAbsoluteExternalsRelative
	};
}
function bindingifyPreserveEntrySignatures(preserveEntrySignatures) {
	if (preserveEntrySignatures == void 0) return;
	else if (typeof preserveEntrySignatures === "string") return {
		type: "String",
		field0: preserveEntrySignatures
	};
	else return {
		type: "Bool",
		field0: preserveEntrySignatures
	};
}
//#endregion
export { version as C, description as S, LOG_LEVEL_INFO as _, RolldownMagicString as a, RUNTIME_MODULE_ID as b, __decorate as c, PlainObjectLike as d, MinimalPluginContextImpl as f, LOG_LEVEL_ERROR as g, LOG_LEVEL_DEBUG as h, transformModuleInfo as i, transformAssetSource as l, normalizeLog as m, PluginContextData as n, transformToRollupOutput as o, normalizeHook as p, bindingifyPlugin as r, transformRenderedChunk as s, bindingifyInputOptions as t, lazyProp as u, LOG_LEVEL_WARN as v, VERSION as x, logLevelPriority as y };
