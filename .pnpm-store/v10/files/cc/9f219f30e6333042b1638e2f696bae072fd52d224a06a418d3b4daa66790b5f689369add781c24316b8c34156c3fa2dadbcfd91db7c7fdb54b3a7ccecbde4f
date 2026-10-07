import { createRequire } from "node:module";
import { dirname, extname } from "node:path";
import process from "node:process";

//#region rolldown:runtime
var __require = /* @__PURE__ */ createRequire(import.meta.url);

//#endregion
//#region src/index.ts
function createResolver({ tsconfig, cwd = process.cwd(), resolveNodeModules = false, ResolverFactory } = {}) {
	ResolverFactory ||= __require("oxc-resolver").ResolverFactory;
	const resolver = new ResolverFactory({
		mainFields: [
			"types",
			"typings",
			"module",
			"main"
		],
		conditionNames: [
			"types",
			"typings",
			"import",
			"require"
		],
		extensions: [
			".d.ts",
			".d.mts",
			".d.cts",
			".ts",
			".mts",
			".cts",
			".tsx",
			".js",
			".mjs",
			".cjs",
			".jsx"
		],
		extensionAlias: {
			".js": [
				".d.ts",
				".ts",
				".tsx",
				".js",
				".jsx"
			],
			".jsx": [
				".d.ts",
				".ts",
				".tsx",
				".jsx",
				".js"
			],
			".mjs": [
				".d.mts",
				".mts",
				".mjs"
			],
			".cjs": [
				".d.cts",
				".cts",
				".cjs"
			],
			".ts": [
				".d.ts",
				".ts",
				".tsx",
				".js",
				".jsx"
			],
			".tsx": [
				".d.ts",
				".tsx",
				".ts",
				".js",
				".jsx"
			],
			".mts": [
				".d.mts",
				".mts",
				".mjs"
			],
			".cts": [
				".d.cts",
				".cts",
				".cjs"
			]
		},
		modules: resolveNodeModules ? ["node_modules", "node_modules/@types"] : [],
		tsconfig: tsconfig ? {
			configFile: tsconfig,
			references: "auto"
		} : void 0
	});
	return (id, importer) => {
		const directory = importer ? dirname(importer) : cwd;
		const resolution = resolver.sync(directory, id);
		if (!resolution.path) return null;
		const resolved = resolution.path;
		return ensureValue(resolved);
	};
}
const ALLOW_EXTENSIONS = new Set([
	".js",
	".cjs",
	".mjs",
	".jsx",
	".ts",
	".cts",
	".mts",
	".tsx",
	".json",
	".vue",
	".svelte",
	".astro"
]);
function ensureValue(value) {
	return value && ALLOW_EXTENSIONS.has(extname(value)) ? value.replaceAll("\\", "/") : null;
}

//#endregion
export { createResolver };