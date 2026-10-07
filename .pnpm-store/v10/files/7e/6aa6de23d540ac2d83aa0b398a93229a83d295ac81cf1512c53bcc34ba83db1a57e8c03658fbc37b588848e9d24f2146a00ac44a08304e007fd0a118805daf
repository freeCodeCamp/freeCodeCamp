import module, { createRequire } from "node:module";
import { AsyncLocalStorage } from "node:async_hooks";
import process from "node:process";
import { fileURLToPath } from "node:url";
//#region \0rolldown/runtime.js
var __require = /* @__PURE__ */ createRequire(import.meta.url);
//#endregion
//#region src/index.ts
const namespace = "no-cache://";
const namespaceLength = 11;
const isSupported = !!module.registerHooks;
const RE_NODE_MODULES = /[/\\]node_modules[/\\]/;
const depsStore = new AsyncLocalStorage();
let deregister;
function init({ skipNodeModules } = {}) {
	if (process.versions.bun) throw new Error("init is unnecessary in Bun, use clearRequireCache() instead.");
	if (!isSupported) throw new Error("import-without-cache requires Node.js v22.15.0 or higher.");
	if (deregister) return deregister;
	const hooks = module.registerHooks({
		resolve(specifier, context, nextResolve) {
			let noCache = context.importAttributes?.cache === "no";
			if (specifier.startsWith(namespace)) {
				specifier = specifier.slice(namespaceLength);
				noCache = true;
			}
			const resolved = nextResolve(specifier, context);
			if (skipNodeModules && RE_NODE_MODULES.test(resolved.url)) return resolved;
			if (!resolved.url.startsWith("file://")) return resolved;
			const parentUUID = getParentUUID(context.parentURL);
			if (!noCache && !parentUUID) return resolved;
			const deps = depsStore.getStore();
			if (deps) deps.add(fileURLToPath(resolved.url));
			resolved.url = appendUUID(resolved.url, parentUUID || crypto.randomUUID());
			return resolved;
		},
		load(url, context, nextLoad) {
			cleanupImportAttributes(context);
			return nextLoad(url, context);
		}
	});
	return deregister = () => {
		hooks.deregister();
		deregister = void 0;
	};
}
function unregister() {
	deregister?.();
}
function clearRequireCache() {
	for (const key of Object.keys(__require.cache)) delete __require.cache[key];
}
function getParentUUID(parentURL) {
	if (!parentURL) return;
	return new URL(parentURL).searchParams.get("no-cache") ?? void 0;
}
function appendUUID(url, uuid) {
	const parsed = new URL(url);
	parsed.searchParams.set("no-cache", uuid);
	return parsed.toString();
}
function cleanupImportAttributes(context) {
	if (!context.importAttributes?.cache) return;
	const attrs = Object.assign(Object.create(null), context.importAttributes);
	delete attrs.cache;
	context.importAttributes = attrs;
	Object.freeze(context.importAttributes);
}
//#endregion
export { clearRequireCache, depsStore, init, isSupported, unregister };
