import { createRequire as __cjs_createRequire } from "node:module";
const picomatch = __cjs_createRequire(import.meta.url)("picomatch");
//#region src/utils/general.ts
function toArray(val, defaultValue) {
	if (Array.isArray(val)) return val;
	else if (val == null) {
		if (defaultValue) return [defaultValue];
		return [];
	} else return [val];
}
function resolveComma(arr) {
	return arr.flatMap((format) => format.split(","));
}
function resolveRegex(str) {
	if (typeof str === "string" && str.length > 2 && str[0] === "/" && str.at(-1) === "/") return new RegExp(str.slice(1, -1));
	return str;
}
function slash(string) {
	return string.replaceAll("\\", "/");
}
const noop = (v) => v;
function matchPattern(id, patterns) {
	return patterns.some((pattern) => {
		if (pattern instanceof RegExp) {
			pattern.lastIndex = 0;
			return pattern.test(id);
		}
		return id === pattern || picomatch(pattern)(id);
	});
}
function pkgExists(moduleName) {
	try {
		import.meta.resolve(moduleName);
		return true;
	} catch {}
	return false;
}
async function importWithError(moduleName) {
	try {
		return await import(moduleName);
	} catch (error) {
		throw new Error(`Failed to import module "${moduleName}". Please ensure it is installed.`, { cause: error });
	}
}
function promiseWithResolvers() {
	let resolve;
	return {
		promise: new Promise((res) => {
			resolve = res;
		}),
		resolve
	};
}
function debounce(fn, delay) {
	let timer;
	const debounced = (...args) => {
		clearTimeout(timer);
		timer = setTimeout(() => fn(...args), delay);
	};
	debounced.cancel = () => clearTimeout(timer);
	return debounced;
}
//#endregion
export { pkgExists as a, resolveRegex as c, noop as i, slash as l, importWithError as n, promiseWithResolvers as o, matchPattern as r, resolveComma as s, debounce as t, toArray as u };
