import { c as resolveRegex, l as slash, r as matchPattern, u as toArray } from "./general-D3muxt2f.mjs";
import { isBuiltin } from "node:module";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { blue, underline, yellow } from "ansis";
import { createDebug } from "obug";
import { RE_DTS, RE_NODE_MODULES } from "rolldown-plugin-dts/internal";
import { and, id, importerId, include } from "rolldown/filter";
//#region src/features/shims.ts
const shimFile = path.resolve(import.meta.dirname, "..", "esm-shims.js");
function getShimsInject(format, platform) {
	if (format === "es" && platform === "node") return {
		__dirname: [shimFile, "__dirname"],
		__filename: [shimFile, "__filename"]
	};
}
//#endregion
//#region src/features/deps.ts
const debug = createDebug("tsdown:deps");
function resolveDepsConfig(config, logger) {
	let { neverBundle, alwaysBundle, onlyBundle, skipNodeModulesBundle = false } = config.deps || {};
	if (config.external != null) {
		if (neverBundle != null) throw new TypeError("`external` is deprecated. Cannot be used with `deps.neverBundle`.");
		logger?.warn("`external` is deprecated. Use `deps.neverBundle` instead.");
		neverBundle = config.external;
	}
	if (config.noExternal != null) {
		if (alwaysBundle != null) throw new TypeError("`noExternal` is deprecated. Cannot be used with `deps.alwaysBundle`.");
		logger?.warn("`noExternal` is deprecated. Use `deps.alwaysBundle` instead.");
		alwaysBundle = config.noExternal;
	}
	if (config.deps?.onlyAllowBundle != null) {
		if (onlyBundle != null) throw new TypeError("`deps.onlyAllowBundle` is deprecated. Cannot be used with `deps.onlyBundle`.");
		logger?.warn("`deps.onlyAllowBundle` is deprecated. Use `deps.onlyBundle` instead.");
		onlyBundle = config.deps.onlyAllowBundle;
	}
	if (config.inlineOnly != null) {
		if (onlyBundle != null) throw new TypeError("`inlineOnly` is deprecated. Cannot be used with `deps.onlyBundle`.");
		logger?.warn("`inlineOnly` is deprecated. Use `deps.onlyBundle` instead.");
		onlyBundle = config.inlineOnly;
	}
	if (config.skipNodeModulesBundle != null) {
		if (config.deps?.skipNodeModulesBundle != null) throw new TypeError("`skipNodeModulesBundle` is deprecated. Cannot be used with `deps.skipNodeModulesBundle`.");
		logger?.warn("`skipNodeModulesBundle` is deprecated. Use `deps.skipNodeModulesBundle` instead.");
		skipNodeModulesBundle = config.skipNodeModulesBundle;
	}
	if (typeof neverBundle === "string") neverBundle = resolveRegex(neverBundle);
	if (typeof alwaysBundle === "string") alwaysBundle = resolveRegex(alwaysBundle);
	if (alwaysBundle != null && typeof alwaysBundle !== "function") {
		const alwaysBundlePatterns = toArray(alwaysBundle);
		alwaysBundle = (id) => matchPattern(id, alwaysBundlePatterns);
	}
	if (skipNodeModulesBundle && alwaysBundle != null) throw new TypeError("`deps.skipNodeModulesBundle` and `deps.alwaysBundle` are mutually exclusive options and cannot be used together.");
	if (onlyBundle != null && onlyBundle !== false) onlyBundle = toArray(onlyBundle);
	return {
		neverBundle,
		alwaysBundle,
		onlyBundle,
		skipNodeModulesBundle
	};
}
function DepsPlugin({ pkg, deps: { alwaysBundle, onlyBundle, skipNodeModulesBundle }, logger, nameLabel }, tsdownBundle) {
	const deps = pkg && Array.from(getProductionDeps(pkg));
	return {
		name: "tsdown:deps",
		resolveId: {
			filter: [include(and(id(/^[^.]/), importerId(/./)))],
			async handler(id, importer, extraOptions) {
				if (extraOptions.isEntry) return;
				const resolved = await this.resolve(id, importer, {
					...extraOptions,
					skipSelf: true
				});
				let shouldExternal = await externalStrategy(id, importer, resolved);
				if (Array.isArray(shouldExternal)) {
					debug("custom resolved id for %o -> %o", id, shouldExternal[1]);
					id = shouldExternal[1];
					shouldExternal = shouldExternal[0];
				}
				const moduleSideEffects = isBuiltin(id) ? false : void 0;
				debug("shouldExternal: %o = %o", id, shouldExternal);
				if (shouldExternal === true || shouldExternal === "absolute") return {
					id,
					external: shouldExternal,
					moduleSideEffects
				};
				if (resolved) return {
					...resolved,
					moduleSideEffects
				};
			}
		},
		generateBundle: {
			order: "post",
			async handler(options, bundle) {
				const deps = /* @__PURE__ */ new Set();
				const importers = /* @__PURE__ */ new Map();
				for (const chunk of Object.values(bundle)) {
					if (chunk.type === "asset") continue;
					for (const id of chunk.moduleIds) {
						if (id === shimFile) continue;
						const parsed = await readBundledDepInfo(id);
						if (!parsed) continue;
						deps.add(parsed.name);
						if (!tsdownBundle.inlinedDeps.has(parsed.pkgName)) tsdownBundle.inlinedDeps.set(parsed.pkgName, /* @__PURE__ */ new Set());
						tsdownBundle.inlinedDeps.get(parsed.pkgName).add(parsed.version);
						const module = this.getModuleInfo(id);
						if (module) importers.set(parsed.name, new Set([...module.importers, ...importers.get(parsed.name) || []]));
					}
				}
				debug("found deps in bundle: %o", deps);
				if (onlyBundle) {
					const errors = Array.from(deps).filter((dep) => !matchPattern(dep, onlyBundle)).map((dep) => `${yellow(dep)} is located in ${blue`node_modules`} but is not included in ${blue`deps.onlyBundle`} option.\nTo fix this, either add it to ${blue`deps.onlyBundle`}, declare it as a production or peer dependency in your package.json, or externalize it manually.\nImported by\n${[...importers.get(dep) || []].map((s) => `- ${underline(s)}`).join("\n")}`);
					if (errors.length) this.error(errors.join("\n\n"));
					const unusedPatterns = onlyBundle.filter((pattern) => !Array.from(deps).some((dep) => matchPattern(dep, [pattern])));
					if (unusedPatterns.length) logger.info(nameLabel, `The following entries in ${blue`deps.onlyBundle`} are not used in the bundle:\n${unusedPatterns.map((pattern) => `- ${yellow(pattern)}`).join("\n")}\nConsider removing them to keep your configuration clean.`);
				} else if (onlyBundle == null && deps.size) logger.info(nameLabel, `Hint: consider adding ${blue`deps.onlyBundle`} option to avoid unintended bundling of dependencies, or set ${blue`deps.onlyBundle: false`} to disable this hint.\nSee more at ${underline`https://tsdown.dev/options/dependencies#deps-onlybundle`}\nDetected dependencies in bundle:\n${Array.from(deps).map((dep) => `- ${blue(dep)}`).join("\n")}`);
			}
		}
	};
	/**
	* - `true`: always external
	* - `[true, resolvedId]`: external with custom resolved ID
	* - `false`: skip, let other plugins handle it
	* - `'absolute'`: external as absolute path
	* - `'no-external'`: skip, but mark as non-external for inlineOnly check
	*/
	async function externalStrategy(id, importer, resolved) {
		if (id === shimFile) return false;
		if (alwaysBundle?.(id, importer)) return "no-external";
		if (skipNodeModulesBundle && resolved && (resolved.external || RE_NODE_MODULES.test(resolved.id))) {
			const resolvedDep = await resolveDepSubpath(id, resolved);
			return resolvedDep ? [true, resolvedDep] : true;
		}
		if (deps) {
			if (deps.includes(id) || deps.some((dep) => id.startsWith(`${dep}/`))) {
				const resolvedDep = await resolveDepSubpath(id, resolved);
				return resolvedDep ? [true, resolvedDep] : true;
			}
			if (importer && RE_DTS.test(importer) && !id.startsWith("@types/")) {
				const typesName = getTypesPackageName(id);
				if (typesName && deps.includes(typesName)) return true;
			}
		}
		return false;
	}
}
function parsePackageSpecifier(id) {
	const [first, second] = id.split("/", 3);
	const name = first[0] === "@" && second ? `${first}/${second}` : first;
	return [name, id.slice(name.length)];
}
const NODE_MODULES = "/node_modules/";
function parseNodeModulesPath(id) {
	const slashed = slash(id);
	const lastNmIdx = slashed.lastIndexOf(NODE_MODULES);
	if (lastNmIdx === -1) return;
	const [name, subpath] = parsePackageSpecifier(slashed.slice(lastNmIdx + 14));
	return [
		name,
		subpath,
		slashed.slice(0, lastNmIdx + 14 + name.length)
	];
}
async function readBundledDepInfo(moduleId) {
	const parsed = parseNodeModulesPath(moduleId);
	if (!parsed) return;
	const [name, , root] = parsed;
	try {
		const json = JSON.parse(await readFile(path.join(root, "package.json"), "utf8"));
		return {
			name,
			pkgName: json.name,
			version: json.version
		};
	} catch {}
}
function getTypesPackageName(id) {
	const name = parsePackageSpecifier(id)[0];
	if (!name) return;
	return `@types/${name.replace(/^@/, "").replace("/", "__")}`;
}
async function resolveDepSubpath(id, resolved) {
	if (!resolved?.packageJsonPath) return;
	const parts = id.split("/");
	if (parts[0][0] === "@") parts.shift();
	if (parts.length === 1 || parts.at(-1).includes(".")) return;
	let pkgJson;
	try {
		pkgJson = JSON.parse(await readFile(resolved.packageJsonPath, "utf8"));
	} catch {
		return;
	}
	if (pkgJson.exports) return;
	const parsed = parseNodeModulesPath(resolved.id);
	if (!parsed) return;
	const result = parsed[0] + parsed[1];
	if (result === id) return;
	return result;
}
function getProductionDeps(pkg) {
	return new Set([
		...Object.keys(pkg.dependencies || {}),
		...Object.keys(pkg.peerDependencies || {}),
		...Object.keys(pkg.optionalDependencies || {})
	]);
}
//#endregion
//#region src/utils/format.ts
function formatBytes(bytes) {
	if (bytes === Infinity) return void 0;
	if (bytes > 1e6) return `${(bytes / 1e6).toFixed(2)} MB`;
	return `${(bytes / 1e3).toFixed(2)} kB`;
}
//#endregion
export { getShimsInject as i, DepsPlugin as n, resolveDepsConfig as r, formatBytes as t };
