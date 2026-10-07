import { n as isPromiseLike, t as arraify } from "./shared/misc-DJYbNKZX.mjs";
//#region ../pluginutils/dist/utils.js
const postfixRE = /[?#].*$/;
function cleanUrl(url) {
	return url.replace(postfixRE, "");
}
function extractQueryWithoutFragment(url) {
	const questionMarkIndex = url.indexOf("?");
	if (questionMarkIndex === -1) return "";
	const fragmentIndex = url.indexOf("#", questionMarkIndex);
	if (fragmentIndex === -1) return url.substring(questionMarkIndex);
	else return url.substring(questionMarkIndex, fragmentIndex);
}
//#endregion
//#region ../pluginutils/dist/filter/composable-filters.js
var And = class {
	kind;
	args;
	constructor(...args) {
		if (args.length === 0) throw new Error("`And` expects at least one operand");
		this.args = args;
		this.kind = "and";
	}
};
var Or = class {
	kind;
	args;
	constructor(...args) {
		if (args.length === 0) throw new Error("`Or` expects at least one operand");
		this.args = args;
		this.kind = "or";
	}
};
var Not = class {
	kind;
	expr;
	constructor(expr) {
		this.expr = expr;
		this.kind = "not";
	}
};
var Id = class {
	kind;
	pattern;
	params;
	constructor(pattern, params) {
		this.pattern = pattern;
		this.kind = "id";
		this.params = params ?? { cleanUrl: false };
	}
};
var ImporterId = class {
	kind;
	pattern;
	params;
	constructor(pattern, params) {
		this.pattern = pattern;
		this.kind = "importerId";
		this.params = params ?? { cleanUrl: false };
	}
};
var ModuleType = class {
	kind;
	pattern;
	constructor(pattern) {
		this.pattern = pattern;
		this.kind = "moduleType";
	}
};
var Code = class {
	kind;
	pattern;
	constructor(expr) {
		this.pattern = expr;
		this.kind = "code";
	}
};
var Query = class {
	kind;
	key;
	pattern;
	constructor(key, pattern) {
		this.pattern = pattern;
		this.key = key;
		this.kind = "query";
	}
};
var Include = class {
	kind;
	expr;
	constructor(expr) {
		this.expr = expr;
		this.kind = "include";
	}
};
var Exclude = class {
	kind;
	expr;
	constructor(expr) {
		this.expr = expr;
		this.kind = "exclude";
	}
};
function and(...args) {
	return new And(...args);
}
function or(...args) {
	return new Or(...args);
}
function not(expr) {
	return new Not(expr);
}
function id(pattern, params) {
	return new Id(pattern, params);
}
function importerId(pattern, params) {
	return new ImporterId(pattern, params);
}
function moduleType(pattern) {
	return new ModuleType(pattern);
}
function code(pattern) {
	return new Code(pattern);
}
function query(key, pattern) {
	return new Query(key, pattern);
}
function include(expr) {
	return new Include(expr);
}
function exclude(expr) {
	return new Exclude(expr);
}
/**
* convert a queryObject to FilterExpression like
* ```js
*   and(query(k1, v1), query(k2, v2))
* ```
* @param queryFilterObject The query filter object needs to be matched.
* @returns a `And` FilterExpression
*/
function queries(queryFilter) {
	return and(...Object.entries(queryFilter).map(([key, value]) => {
		return new Query(key, value);
	}));
}
function interpreter(exprs, code, id, moduleType, importerId) {
	let arr = [];
	if (Array.isArray(exprs)) arr = exprs;
	else arr = [exprs];
	return interpreterImpl(arr, code, id, moduleType, importerId);
}
function interpreterImpl(expr, code, id, moduleType, importerId, ctx = {}) {
	let hasInclude = false;
	for (const e of expr) switch (e.kind) {
		case "include":
			hasInclude = true;
			if (exprInterpreter(e.expr, code, id, moduleType, importerId, ctx)) return true;
			break;
		case "exclude":
			if (exprInterpreter(e.expr, code, id, moduleType, importerId, ctx)) return false;
			break;
	}
	return !hasInclude;
}
function exprInterpreter(expr, code, id, moduleType, importerId, ctx = {}) {
	switch (expr.kind) {
		case "and": return expr.args.every((e) => exprInterpreter(e, code, id, moduleType, importerId, ctx));
		case "or": return expr.args.some((e) => exprInterpreter(e, code, id, moduleType, importerId, ctx));
		case "not": return !exprInterpreter(expr.expr, code, id, moduleType, importerId, ctx);
		case "id": {
			if (id === void 0) throw new Error("`id` is required for `id` expression");
			let idToMatch = id;
			if (expr.params.cleanUrl) idToMatch = cleanUrl(idToMatch);
			return typeof expr.pattern === "string" ? idToMatch === expr.pattern : expr.pattern.test(idToMatch);
		}
		case "importerId": {
			if (importerId === void 0) return false;
			let importerIdToMatch = importerId;
			if (expr.params.cleanUrl) importerIdToMatch = cleanUrl(importerIdToMatch);
			return typeof expr.pattern === "string" ? importerIdToMatch === expr.pattern : expr.pattern.test(importerIdToMatch);
		}
		case "moduleType":
			if (moduleType === void 0) throw new Error("`moduleType` is required for `moduleType` expression");
			return moduleType === expr.pattern;
		case "code":
			if (code === void 0) throw new Error("`code` is required for `code` expression");
			return typeof expr.pattern === "string" ? code.includes(expr.pattern) : expr.pattern.test(code);
		case "query": {
			if (id === void 0) throw new Error("`id` is required for `Query` expression");
			if (!ctx.urlSearchParamsCache) {
				let queryString = extractQueryWithoutFragment(id);
				ctx.urlSearchParamsCache = new URLSearchParams(queryString);
			}
			let urlParams = ctx.urlSearchParamsCache;
			if (typeof expr.pattern === "boolean") if (expr.pattern) return urlParams.has(expr.key);
			else return !urlParams.has(expr.key);
			else if (typeof expr.pattern === "string") return urlParams.get(expr.key) === expr.pattern;
			else return expr.pattern.test(urlParams.get(expr.key) ?? "");
		}
		default: throw new Error(`Expression ${JSON.stringify(expr)} is not expected.`);
	}
}
//#endregion
//#region ../pluginutils/dist/filter/filter-vite-plugins.js
/**
* Filters out Vite plugins that have `apply: 'serve'` set.
*
* Since Rolldown operates in build mode, plugins marked with `apply: 'serve'`
* are intended only for Vite's dev server and should be excluded from the build process.
*
* @param plugins - Array of plugins (can include nested arrays)
* @returns Filtered array with serve-only plugins removed
*
* @example
* ```ts
* import { defineConfig } from 'rolldown';
* import { filterVitePlugins } from '@rolldown/pluginutils';
* import viteReact from '@vitejs/plugin-react';
*
* export default defineConfig({
*   plugins: filterVitePlugins([
*     viteReact(),
*     {
*       name: 'dev-only',
*       apply: 'serve', // This will be filtered out
*       // ...
*     }
*   ])
* });
* ```
*/
function filterVitePlugins(plugins) {
	if (!plugins) return [];
	const pluginArray = Array.isArray(plugins) ? plugins : [plugins];
	const result = [];
	for (const plugin of pluginArray) {
		if (!plugin) continue;
		if (Array.isArray(plugin)) {
			result.push(...filterVitePlugins(plugin));
			continue;
		}
		const pluginWithApply = plugin;
		if ("apply" in pluginWithApply) {
			const applyValue = pluginWithApply.apply;
			if (typeof applyValue === "function") try {
				if (applyValue({}, {
					command: "build",
					mode: "production"
				})) result.push(plugin);
			} catch {
				result.push(plugin);
			}
			else if (applyValue === "serve") continue;
			else result.push(plugin);
		} else result.push(plugin);
	}
	return result;
}
//#endregion
//#region ../pluginutils/dist/filter/simple-filters.js
/**
* Constructs a RegExp that matches the exact string specified.
*
* This is useful for plugin hook filters.
*
* @param str the string to match.
* @param flags flags for the RegExp.
*
* @example
* ```ts
* import { exactRegex } from '@rolldown/pluginutils';
* const plugin = {
*   name: 'plugin',
*   resolveId: {
*     filter: { id: exactRegex('foo') },
*     handler(id) {} // will only be called for `foo`
*   }
* }
* ```
*/
function exactRegex(str, flags) {
	return new RegExp(`^${escapeRegex(str)}$`, flags);
}
/**
* Constructs a RegExp that matches a value that has the specified prefix.
*
* This is useful for plugin hook filters.
*
* @param str the string to match.
* @param flags flags for the RegExp.
*
* @example
* ```ts
* import { prefixRegex } from '@rolldown/pluginutils';
* const plugin = {
*   name: 'plugin',
*   resolveId: {
*     filter: { id: prefixRegex('foo') },
*     handler(id) {} // will only be called for IDs starting with `foo`
*   }
* }
* ```
*/
function prefixRegex(str, flags) {
	return new RegExp(`^${escapeRegex(str)}`, flags);
}
const escapeRegexRE = /[-/\\^$*+?.()|[\]{}]/g;
function escapeRegex(str) {
	return str.replace(escapeRegexRE, "\\$&");
}
function makeIdFiltersToMatchWithQuery(input) {
	if (!Array.isArray(input)) return makeIdFilterToMatchWithQuery(input);
	return input.map((i) => makeIdFilterToMatchWithQuery(i));
}
function makeIdFilterToMatchWithQuery(input) {
	if (typeof input === "string") return `${input}{?*,}`;
	return makeRegexIdFilterToMatchWithQuery(input);
}
function makeRegexIdFilterToMatchWithQuery(input) {
	return new RegExp(input.source.replace(/(?<!\\)\$/g, "(?:\\?.*)?$"), input.flags);
}
//#endregion
//#region src/plugin/with-filter.ts
function withFilterImpl(pluginOption, filterObjectList) {
	if (isPromiseLike(pluginOption)) return pluginOption.then((p) => withFilter(p, filterObjectList));
	if (pluginOption == false || pluginOption == null) return pluginOption;
	if (Array.isArray(pluginOption)) return pluginOption.map((p) => withFilter(p, filterObjectList));
	let plugin = pluginOption;
	let filterObjectIndex = findMatchedFilterObject(plugin.name, filterObjectList);
	if (filterObjectIndex === -1) return plugin;
	let filterObject = filterObjectList[filterObjectIndex];
	Object.keys(plugin).forEach((key) => {
		switch (key) {
			case "transform":
			case "resolveId":
			case "load":
				if (!plugin[key]) return;
				if (typeof plugin[key] === "object") plugin[key].filter = filterObject[key] ?? plugin[key].filter;
				else plugin[key] = {
					handler: plugin[key],
					filter: filterObject[key]
				};
				break;
			default: break;
		}
	});
	return plugin;
}
/**
* A helper function to add plugin hook filters to a plugin or an array of plugins.
*
* @example
* ```ts
* import yaml from '@rollup/plugin-yaml';
* import { defineConfig } from 'rolldown';
* import { withFilter } from 'rolldown/filter';
*
* export default defineConfig({
*   plugins: [
*     // Run the transform hook of the `yaml` plugin
*     // only for modules which end in `.yaml`
*     withFilter(
*       yaml({}),
*       { transform: { id: /\.yaml$/ } },
*     ),
*   ],
* });
* ```
*
* @category Config
*/
function withFilter(pluginOption, filterObject) {
	return withFilterImpl(pluginOption, arraify(filterObject));
}
function findMatchedFilterObject(pluginName, overrideFilterObjectList) {
	if (overrideFilterObjectList.length === 1 && overrideFilterObjectList[0].pluginNamePattern === void 0) return 0;
	for (let i = 0; i < overrideFilterObjectList.length; i++) for (let j = 0; j < (overrideFilterObjectList[i].pluginNamePattern ?? []).length; j++) {
		let pattern = overrideFilterObjectList[i].pluginNamePattern[j];
		if (typeof pattern === "string" && pattern === pluginName) return i;
		else if (pattern instanceof RegExp && pattern.test(pluginName)) return i;
	}
	return -1;
}
//#endregion
export { and, code, exactRegex, exclude, exprInterpreter, filterVitePlugins, id, importerId, include, interpreter, interpreterImpl, makeIdFiltersToMatchWithQuery, moduleType, not, or, prefixRegex, queries, query, withFilter };
