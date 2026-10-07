import { createRequire as __cjs_createRequire } from "node:module";
const __cjs_require = __cjs_createRequire(import.meta.url);
import { createDebug } from "obug";
import path from "node:path";
const ts = __cjs_require("typescript");
//#region src/tsc/resolver.ts
const debug = createDebug("rolldown-plugin-dts:tsc-resolver");
function tscResolve(id, importer, cwd, tsconfig, tsconfigRaw, reference) {
	const baseDir = tsconfig ? path.dirname(tsconfig) : cwd;
	const parsedConfig = ts.parseJsonConfigFileContent(tsconfigRaw, ts.sys, baseDir);
	const resolved = ts.bundlerModuleNameResolver(id, importer, {
		moduleResolution: ts.ModuleResolutionKind.Bundler,
		...parsedConfig.options
	}, ts.sys, void 0, reference);
	debug(`tsc resolving id "%s" from "%s" -> %O`, id, importer, resolved.resolvedModule);
	return resolved.resolvedModule?.resolvedFileName;
}
//#endregion
export { tscResolve };
