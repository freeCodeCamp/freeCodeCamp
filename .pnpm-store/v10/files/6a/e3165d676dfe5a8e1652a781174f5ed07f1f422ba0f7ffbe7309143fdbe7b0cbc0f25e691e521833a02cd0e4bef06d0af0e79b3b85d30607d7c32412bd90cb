import { builtinModules, createRequire } from "node:module";
import path from "node:path";
import fs, { existsSync } from "node:fs";
import process from "node:process";
import { fileURLToPath, pathToFileURL } from "node:url";
import { rolldown } from "rolldown";
import { Buffer as Buffer$1 } from "node:buffer";
import { spawn } from "node:child_process";
import crypto from "node:crypto";
import { tmpdir } from "node:os";
//#region \0rolldown/runtime.js
var __require = /* @__PURE__ */ createRequire(import.meta.url);
//#endregion
//#region src/features/preset.ts
/**
* Applies preset-specific handling to the loaded module.
*/
function preset(options, module) {
	if (options.preset === "bundle-require") return module;
	if (options.preset === "jiti") {
		const ext = path.extname(options.path);
		if (module && typeof module === "object" && module[Symbol.toStringTag] === "Module" && Object.keys(module).length === 0) return ext === ".mjs" ? module : {};
	}
	if (module && typeof module === "object" && "default" in module) return module.default;
	return module;
}
//#endregion
//#region src/utils/normalize-path.ts
/**
* Normalize a path-like input to a string path.
* @param pathLike The path-like input (string or URL).
* @returns The normalized string path.
*/
function normalizePath(pathLike) {
	if (!pathLike) return "index.ts";
	if (pathLike instanceof URL) {
		if (pathLike.protocol === "file:") return fileURLToPath(pathLike);
		return pathLike.href;
	}
	if (typeof pathLike === "string") {
		if (!pathLike.startsWith("file:")) return pathLike;
		try {
			return fileURLToPath(pathLike);
		} catch {
			try {
				return fileURLToPath(new URL(pathLike));
			} catch {
				return pathLike;
			}
		}
	}
	return String(pathLike);
}
//#endregion
//#region src/options.ts
function resolveOptions(options = {}) {
	const resolvedOptions = {
		path: path.resolve(process.cwd(), normalizePath(options.path)),
		debug: options.debug || false,
		preset: options.preset || "none",
		inputOptions: options.inputOptions,
		outputOptions: options.outputOptions
	};
	if (!fs.existsSync(resolvedOptions.path)) throw new Error(`[unrun] File not found: ${resolvedOptions.path}`);
	if (!new Set([
		"none",
		"jiti",
		"bundle-require"
	]).has(resolvedOptions.preset)) throw new Error(`[unrun] Invalid preset "${resolvedOptions.preset}" (expected: none | jiti | bundle-require)`);
	return resolvedOptions;
}
//#endregion
//#region src/utils/module-resolution.ts
/**
* Precomputed set of Node.js builtin module specifiers, including both plain and `node:` prefixed forms.
*/
const BUILTIN_MODULE_SPECIFIERS = new Set([...builtinModules, ...builtinModules.map((name) => `node:${name}`)]);
/**
* Returns true when `id` refers to a Node.js builtin module, accepting both plain and `node:` specifiers.
*/
function isBuiltinModuleSpecifier(id) {
	if (!id) return false;
	return BUILTIN_MODULE_SPECIFIERS.has(id) || id.startsWith("node:");
}
//#endregion
//#region src/features/external.ts
/**
* Builds the rolldown external resolver used to decide which imports remain external.
* Treat bare imports from the primary node_modules as external, but inline
* nested node_modules so they keep working once executed from .unrun.
*/
function createExternalResolver(options) {
	const entryDir = path.dirname(options.path);
	const canResolveFromEntry = (specifier) => {
		const packageName = getPackageName(specifier);
		if (!packageName) return false;
		let currentDir = entryDir;
		while (true) {
			if (existsSync(path.join(currentDir, "node_modules", packageName))) return true;
			const parentDir = path.dirname(currentDir);
			if (parentDir === currentDir) break;
			currentDir = parentDir;
		}
		return false;
	};
	return function external(id) {
		if (!id || id.startsWith("\0")) return false;
		if (id.startsWith(".") || id.startsWith("#") || path.isAbsolute(id)) return false;
		if (isBuiltinModuleSpecifier(id)) return true;
		if (!canResolveFromEntry(id)) return false;
		return true;
	};
}
function getPackageName(specifier) {
	if (!specifier) return void 0;
	if (specifier.startsWith("@")) {
		const segments = specifier.split("/");
		if (segments.length >= 2) return `${segments[0]}/${segments[1]}`;
		return;
	}
	const [name] = specifier.split("/");
	return name || void 0;
}
//#endregion
//#region src/plugins/console-output-customizer.ts
const INSPECT_HELPER_SNIPPET = `(function(){
  function __unrun__fmt(names, getter, np){
    var onlyDefault = names.length === 1 && names[0] === "default";
    var o = np ? Object.create(null) : {};
    for (var i = 0; i < names.length; i++) {
      var n = names[i];
      try { o[n] = getter(n) } catch {}
    }
    if (onlyDefault) {
      try {
          var s = JSON.stringify(o.default);
        if (s !== undefined) {
            s = s.replace(/"([^"]+)":/g, "$1: ").replace(/,/g, ", ").replace(/{/g, "{ ").replace(/}/g, " }");
          return "[Module: null prototype] { default: " + s + " }";
        }
      } catch {}
      return "[Module: null prototype] { default: " + String(o.default) + " }";
    }
    return o;
  }
  function __unrun__setInspect(obj, names, getter, np){
    try {
      var __insp = Symbol.for('nodejs.util.inspect.custom');
      Object.defineProperty(obj, __insp, {
        value: function(){ return __unrun__fmt(names, getter, np) },
        enumerable: false, configurable: true
      });
    } catch {}
    return obj;
  }
  try {
    Object.defineProperty(globalThis, "__unrun__setInspect", {
      value: __unrun__setInspect,
      enumerable: false,
    });
  } catch {}
})();`;
const WRAPPER_SNIPPET = `(function __unrun__wrapRolldownHelpers(){
  if (typeof __unrun__setInspect !== "function") return;
  if (typeof __export === "function" && !__export.__unrunPatched) {
    var __unrun__origExport = __export;
    var __unrun__patchedExport = (...__unrun__args) => {
      var __unrun__target = __unrun__origExport(...__unrun__args);
      if (__unrun__target && typeof __unrun__target === "object") {
        try {
          var __unrun__map = (__unrun__args[0] && typeof __unrun__args[0] === "object") ? __unrun__args[0] : {};
          var __unrun__names = Object.keys(__unrun__map).filter(function(n){ return n !== "__esModule" });
          __unrun__setInspect(
            __unrun__target,
            __unrun__names,
            function(n){
              var getter = __unrun__map[n];
              return typeof getter === "function" ? getter() : getter;
            },
            false,
          );
        } catch {}
      }
      return __unrun__target;
    };
    __unrun__patchedExport.__unrunPatched = true;
    __export = __unrun__patchedExport;
  }
  if (typeof __exportAll === "function" && !__exportAll.__unrunPatched) {
    var __unrun__origExportAll = __exportAll;
    var __unrun__patchedExportAll = (...__unrun__args) => {
      var __unrun__target = __unrun__origExportAll(...__unrun__args);
      if (__unrun__target && typeof __unrun__target === "object") {
        try {
          var __unrun__map = (__unrun__args[0] && typeof __unrun__args[0] === "object") ? __unrun__args[0] : {};
          var __unrun__names = Object.keys(__unrun__map).filter(function(n){ return n !== "__esModule" });
          __unrun__setInspect(
            __unrun__target,
            __unrun__names,
            function(n){
              var getter = __unrun__map[n];
              return typeof getter === "function" ? getter() : getter;
            },
            false,
          );
        } catch {}
      }
      return __unrun__target;
    };
    __unrun__patchedExportAll.__unrunPatched = true;
    __exportAll = __unrun__patchedExportAll;
  }
  if (typeof __copyProps === "function" && !__copyProps.__unrunPatched) {
    var __unrun__origCopyProps = __copyProps;
    var __unrun__patchedCopyProps = (...__unrun__args) => {
      var __unrun__result = __unrun__origCopyProps(...__unrun__args);
      if (__unrun__result && typeof __unrun__result === "object") {
        try {
          var __unrun__names = Object.keys(__unrun__result).filter(function(n){ return n !== "__esModule" });
          __unrun__setInspect(__unrun__result, __unrun__names, function(n){ return __unrun__result[n] }, true);
        } catch {}
      }
      return __unrun__result;
    };
    __unrun__patchedCopyProps.__unrunPatched = true;
    __copyProps = __unrun__patchedCopyProps;
  }
})();`;
const HELPER_DECLARATION_PATTERN = /__unrun__setInspect\b/;
const WRAPPER_MARKER = "__unrun__wrapRolldownHelpers";
function createConsoleOutputCustomizer() {
	return {
		name: "unrun-console-output-customizer",
		generateBundle: { handler(_, bundle) {
			for (const chunk of Object.values(bundle)) {
				if (chunk.type !== "chunk") continue;
				injectInspectHelper(chunk);
				injectHelperWrappers(chunk);
			}
		} }
	};
}
function injectInspectHelper(chunk) {
	if (HELPER_DECLARATION_PATTERN.test(chunk.code)) return;
	chunk.code = chunk.code.startsWith("#!") ? insertAfterShebang(chunk.code, `${INSPECT_HELPER_SNIPPET}\n`) : `${INSPECT_HELPER_SNIPPET}\n${chunk.code}`;
}
function injectHelperWrappers(chunk) {
	if (chunk.code.includes(WRAPPER_MARKER)) return;
	const insertIndex = findRuntimeBoundary(chunk.code);
	const snippet = `${WRAPPER_SNIPPET}\n`;
	if (insertIndex === -1) {
		chunk.code = `${chunk.code}\n${snippet}`;
		return;
	}
	chunk.code = `${chunk.code.slice(0, insertIndex)}${snippet}${chunk.code.slice(insertIndex)}`;
}
function findRuntimeBoundary(code) {
	const markerIndex = code.indexOf("//#endregion");
	if (markerIndex === -1) return -1;
	const newlineIndex = code.indexOf("\n", markerIndex);
	return newlineIndex === -1 ? code.length : newlineIndex + 1;
}
function insertAfterShebang(code, insertion) {
	const nl = code.indexOf("\n");
	if (nl === -1) return `${code}\n${insertion}`;
	return `${code.slice(0, nl + 1)}${insertion}${code.slice(nl + 1)}`;
}
//#endregion
//#region src/plugins/json-loader.ts
/**
* Minimal JSON loader to mimic jiti/Node behavior expected by tests:
* - Default export is the parsed JSON object
* - Also add a self-reference `default` property on the object (so obj.default === obj)
* - Provide named exports for top-level properties
*/
function createJsonLoader() {
	return {
		name: "unrun-json-loader",
		resolveId: { handler(source, importer) {
			if (!source.endsWith(".json")) return null;
			const basedir = importer ? path.dirname(importer) : process.cwd();
			const resolved = path.resolve(basedir, source);
			let isRequire = false;
			try {
				if (importer) {
					const src = fs.readFileSync(importer, "utf8");
					const escaped = source.replaceAll(/[.*+?^${}()|[\]\\]/g, (m) => `\\${m}`);
					const pattern = String.raw`\brequire\s*\(\s*['"]${escaped}['"]\s*\)`;
					isRequire = new RegExp(pattern).test(src);
				}
			} catch {}
			return { id: `${resolved}?unrun-json.${isRequire ? "cjs" : "mjs"}` };
		} },
		load: {
			filter: { id: /\?unrun-json\.(?:mjs|cjs)$/ },
			handler(id) {
				try {
					const realId = id.replace(/\?unrun-json\.(?:mjs|cjs)$/, "");
					const src = fs.readFileSync(realId, "utf8");
					const data = JSON.parse(src);
					const jsonLiteral = JSON.stringify(data);
					if (id.endsWith("?unrun-json.cjs")) return { code: `const __data = ${jsonLiteral}\ntry { Object.defineProperty(__data, 'default', { value: __data, enumerable: false, configurable: true }) } catch {}\nmodule.exports = __data\n` };
					const named = Object.keys(data).filter((k) => /^[$A-Z_]\w*$/i.test(k)).map((k) => `export const ${k} = __data[${JSON.stringify(k)}]`).join("\n");
					return { code: [
						`const __data = ${jsonLiteral}`,
						`try { Object.defineProperty(__data, 'default', { value: __data, enumerable: false, configurable: true }) } catch {}`,
						named,
						`export default __data`
					].filter(Boolean).join("\n") };
				} catch {
					return null;
				}
			}
		}
	};
}
//#endregion
//#region src/plugins/make-cjs-wrapper-async-friendly.ts
/**
* Transforms code strings containing CommonJS wrappers to be async-friendly.
*
* Rolldown may wrap CommonJS modules in a `__commonJS` function that uses
* arrow functions. If the wrapped code contains top-level `await`, this can lead
* to syntax errors since the callback function won't be marked as `async`.
* This function scans for such patterns and modifies the arrow functions to
* be `async` if they contain `await` expressions.
*/
function createMakeCjsWrapperAsyncFriendlyPlugin() {
	return {
		name: "unrun-make-cjs-wrapper-async-friendly",
		generateBundle: { handler(_outputOptions, bundle) {
			for (const chunk of Object.values(bundle)) {
				if (chunk.type !== "chunk") continue;
				let code = chunk.code;
				const wrapperMarkers = ["__commonJS({", "__commonJSMin("];
				if (!wrapperMarkers.some((marker) => code.includes(marker))) continue;
				const arrowToken = "(() => {";
				const asyncArrowToken = "(async () => {";
				const patchMarker = (marker) => {
					let pos = 0;
					while (true) {
						const markerIdx = code.indexOf(marker, pos);
						if (markerIdx === -1) break;
						const fnStart = code.indexOf(arrowToken, markerIdx);
						if (fnStart === -1) {
							pos = markerIdx + marker.length;
							continue;
						}
						const bodyStart = fnStart + 8;
						let i = bodyStart;
						let depth = 1;
						while (i < code.length && depth > 0) {
							const ch = code[i++];
							if (ch === "{") depth++;
							else if (ch === "}") depth--;
						}
						if (depth !== 0) break;
						const bodyEnd = i - 1;
						const body = code.slice(bodyStart, bodyEnd);
						if (/\bawait\b/.test(body) && code.slice(fnStart, fnStart + 14) !== asyncArrowToken) {
							code = `${code.slice(0, fnStart + 1)}async ${code.slice(fnStart + 1)}`;
							pos = fnStart + 1 + 6;
							continue;
						}
						pos = bodyEnd;
					}
				};
				for (const marker of wrapperMarkers) patchMarker(marker);
				if (code !== chunk.code) chunk.code = code;
			}
		} }
	};
}
//#endregion
//#region src/plugins/require-resolve-fix.ts
/**
* Fix require.resolve calls to use the correct base path.
* Replace __require.resolve("./relative") with proper resolution from original file location.
*/
function createRequireResolveFix(options) {
	return {
		name: "unrun-require-resolve-fix",
		generateBundle: { handler(_, bundle) {
			for (const chunk of Object.values(bundle)) if (chunk.type === "chunk") chunk.code = chunk.code.replaceAll(/__require\.resolve\(["']([^"']+)["']\)/g, (match, id) => {
				if (id.startsWith("./") || id.startsWith("../")) try {
					const baseDir = path.dirname(options.path);
					for (const ext of [
						"",
						".ts",
						".js",
						".mts",
						".mjs",
						".cts",
						".cjs"
					]) {
						const testPath = path.resolve(baseDir, id + ext);
						if (fs.existsSync(testPath)) return JSON.stringify(testPath);
					}
					const resolvedPath = path.resolve(baseDir, id);
					return JSON.stringify(resolvedPath);
				} catch {
					return match;
				}
				return match;
			});
		} }
	};
}
//#endregion
//#region src/plugins/require-typeof-fix.ts
/**
* Ensure typeof require in ESM stays undefined to match jiti behavior.
* Replaces typeof __require with typeof require to maintain compatibility.
*/
function createRequireTypeofFix() {
	return {
		name: "unrun-require-typeof-fix",
		generateBundle: { handler(_, bundle) {
			for (const chunk of Object.values(bundle)) if (chunk.type === "chunk") chunk.code = chunk.code.replaceAll(/\btypeof\s+__require\b/g, "typeof require");
		} }
	};
}
//#endregion
//#region src/plugins/source-context-shims.ts
/**
* A rolldown plugin that injects source context shims:
* - Replaces import.meta.resolve calls with resolved file URLs
* - Injects per-module __filename/__dirname
* - Replaces import.meta.url with the source file URL
* - Replaces import.meta.dirname/import.meta.filename with source paths
*/
function createSourceContextShimsPlugin() {
	return {
		name: "unrun-source-context-shims",
		load: {
			filter: { id: /\.(?:m?[jt]s|c?tsx?)(?:$|\?)/ },
			handler(id) {
				const physicalId = id.split("?")[0].split("#")[0];
				const normalizedPhysicalId = path.normalize(physicalId);
				let code;
				try {
					code = fs.readFileSync(normalizedPhysicalId, "utf8");
				} catch {
					return null;
				}
				if (normalizedPhysicalId.replaceAll("\\", "/").includes("/node_modules/")) return null;
				const file = normalizedPhysicalId;
				const dir = path.dirname(normalizedPhysicalId);
				const url = pathToFileURL(normalizedPhysicalId).href;
				const hasImportMeta = code.includes("import.meta");
				const usesFilename = /\b__filename\b/.test(code);
				const declaresFilename = /\b(?:const|let|var)\s+__filename\b/.test(code);
				const usesDirname = /\b__dirname\b/.test(code);
				const declaresDirname = /\b(?:const|let|var)\s+__dirname\b/.test(code);
				const needsFilenameShim = usesFilename && !declaresFilename;
				const needsDirnameShim = usesDirname && !declaresDirname;
				if (needsFilenameShim || needsDirnameShim || hasImportMeta) {
					const prologueLines = [];
					if (needsFilenameShim) prologueLines.push(`const __filename = ${JSON.stringify(file)}`);
					if (needsDirnameShim) prologueLines.push(`const __dirname = ${JSON.stringify(dir)}`);
					let transformedCode = code;
					let replacedImportMeta = false;
					if (hasImportMeta) {
						const resolveRe = /import\s*\.\s*meta\s*\.\s*resolve!?\s*\(\s*(["'])([^"']+)\1\s*\)/y;
						const urlRe = /import\s*\.\s*meta\s*\.\s*url\b/y;
						const dirnameRe = /import\s*\.\s*meta\s*\.\s*dirname\b/y;
						const filenameRe = /import\s*\.\s*meta\s*\.\s*filename\b/y;
						let out = "";
						let mode = "normal";
						const modeStack = [];
						let templateExprBraceDepth = 0;
						const popMode = () => {
							mode = modeStack.pop() ?? "normal";
						};
						for (let i = 0; i < transformedCode.length;) {
							const ch = transformedCode[i];
							const next = transformedCode[i + 1];
							if (mode === "lineComment") {
								out += ch;
								i += 1;
								if (ch === "\n") popMode();
								continue;
							}
							if (mode === "blockComment") {
								out += ch;
								i += 1;
								if (ch === "*" && next === "/") {
									out += "/";
									i += 1;
									popMode();
								}
								continue;
							}
							if (mode === "single") {
								out += ch;
								i += 1;
								if (ch === "\\") {
									out += transformedCode[i] ?? "";
									i += 1;
									continue;
								}
								if (ch === "'") popMode();
								continue;
							}
							if (mode === "double") {
								out += ch;
								i += 1;
								if (ch === "\\") {
									out += transformedCode[i] ?? "";
									i += 1;
									continue;
								}
								if (ch === "\"") popMode();
								continue;
							}
							if (mode === "template") {
								out += ch;
								i += 1;
								if (ch === "\\") {
									out += transformedCode[i] ?? "";
									i += 1;
									continue;
								}
								if (ch === "`") {
									popMode();
									continue;
								}
								if (ch === "$" && next === "{") {
									out += "{";
									i += 1;
									modeStack.push(mode);
									mode = "templateExpr";
									templateExprBraceDepth = 1;
								}
								continue;
							}
							if (mode === "templateExpr") {
								if (ch === "{") templateExprBraceDepth += 1;
								else if (ch === "}") {
									templateExprBraceDepth -= 1;
									if (templateExprBraceDepth === 0) {
										out += ch;
										i += 1;
										popMode();
										continue;
									}
								}
							}
							if (ch === "/" && next === "/") {
								out += "//";
								i += 2;
								modeStack.push(mode);
								mode = "lineComment";
								continue;
							}
							if (ch === "/" && next === "*") {
								out += "/*";
								i += 2;
								modeStack.push(mode);
								mode = "blockComment";
								continue;
							}
							if (ch === "'") {
								out += ch;
								i += 1;
								modeStack.push(mode);
								mode = "single";
								continue;
							}
							if (ch === "\"") {
								out += ch;
								i += 1;
								modeStack.push(mode);
								mode = "double";
								continue;
							}
							if (ch === "`") {
								out += ch;
								i += 1;
								modeStack.push(mode);
								mode = "template";
								continue;
							}
							resolveRe.lastIndex = i;
							const resolveMatch = resolveRe.exec(transformedCode);
							if (resolveMatch) {
								const spec = resolveMatch[2];
								const resolvedUrl = pathToFileURL(path.resolve(path.dirname(normalizedPhysicalId), spec)).href;
								out += JSON.stringify(resolvedUrl);
								i = resolveRe.lastIndex;
								replacedImportMeta = true;
								continue;
							}
							urlRe.lastIndex = i;
							if (urlRe.test(transformedCode)) {
								out += JSON.stringify(url);
								i = urlRe.lastIndex;
								replacedImportMeta = true;
								continue;
							}
							dirnameRe.lastIndex = i;
							if (dirnameRe.test(transformedCode)) {
								out += JSON.stringify(dir);
								i = dirnameRe.lastIndex;
								replacedImportMeta = true;
								continue;
							}
							filenameRe.lastIndex = i;
							if (filenameRe.test(transformedCode)) {
								out += JSON.stringify(file);
								i = filenameRe.lastIndex;
								replacedImportMeta = true;
								continue;
							}
							out += ch;
							i += 1;
						}
						if (replacedImportMeta) transformedCode = out;
					}
					if (prologueLines.length > 0) transformedCode = `${prologueLines.join("\n")}\n${transformedCode}`;
					if (transformedCode !== code) return { code: transformedCode };
				}
				return null;
			}
		}
	};
}
//#endregion
//#region src/utils/bundle.ts
async function bundle(options) {
	const resolvedTsconfigPath = path.resolve(process.cwd(), "tsconfig.json");
	const tsconfig = existsSync(resolvedTsconfigPath) ? resolvedTsconfigPath : void 0;
	const inputOptions = {
		input: options.path,
		platform: "node",
		external: createExternalResolver(options),
		plugins: [
			createMakeCjsWrapperAsyncFriendlyPlugin(),
			createRequireResolveFix(options),
			createSourceContextShimsPlugin(),
			...options.preset === "jiti" ? [
				createConsoleOutputCustomizer(),
				createJsonLoader(),
				createRequireTypeofFix()
			] : []
		],
		transform: { define: {
			__dirname: JSON.stringify(path.dirname(options.path)),
			__filename: JSON.stringify(options.path),
			"import.meta.url": JSON.stringify(pathToFileURL(options.path).href),
			"import.meta.filename": JSON.stringify(options.path),
			"import.meta.dirname": JSON.stringify(path.dirname(options.path)),
			"import.meta.env": "process.env"
		} },
		logLevel: "silent",
		...options.inputOptions
	};
	if (tsconfig) inputOptions.tsconfig = tsconfig;
	const bundle = await rolldown(inputOptions);
	const outputOptions = {
		format: "esm",
		codeSplitting: false,
		keepNames: true,
		...options.preset === "bundle-require" ? { generatedCode: { symbols: false } } : {},
		...options.outputOptions
	};
	const rolldownOutput = await bundle.generate(outputOptions);
	if (!rolldownOutput.output[0]) throw new Error("[unrun] No output chunk found");
	const files = await bundle.watchFiles;
	return {
		chunk: rolldownOutput.output[0],
		dependencies: files
	};
}
//#endregion
//#region src/utils/module/clean-module.ts
/**
* Clean the module file at the given URL.
* Deletes the file if it exists.
* @param moduleUrl - The URL of the module file to be cleaned.
* @param options - Resolved options.
*/
function cleanModule(moduleUrl, options) {
	if (options.debug) return;
	try {
		if (moduleUrl.startsWith("file://")) {
			const filePath = new URL(moduleUrl);
			fs.unlinkSync(filePath);
		}
	} catch (error) {
		if (error.code !== "ENOENT") throw error;
	}
}
//#endregion
//#region src/utils/module/exec-module.ts
/**
* Execute the module at the given URL, in a separate Node.js process.
* @param moduleUrl - The URL of the module to execute.
* @param args - Additional command-line arguments to pass to the Node.js process.
* @returns A promise that resolves when the module execution is complete.
*/
function execModule(moduleUrl, args = []) {
	return new Promise((resolve, reject) => {
		const nodePath = process.execPath;
		const spawnArgs = [];
		if (moduleUrl.startsWith("data:")) {
			const commaIndex = moduleUrl.indexOf(",");
			if (commaIndex === -1) {
				reject(/* @__PURE__ */ new Error("[unrun]: Invalid data URL for module execution"));
				return;
			}
			const metadata = moduleUrl.slice(5, commaIndex);
			const payload = moduleUrl.slice(commaIndex + 1);
			const code = metadata.endsWith(";base64") ? Buffer$1.from(payload, "base64").toString("utf8") : decodeURIComponent(payload);
			spawnArgs.push("--input-type=module", "--eval", code);
		} else {
			let modulePath = moduleUrl;
			if (moduleUrl.startsWith("file://")) try {
				modulePath = fileURLToPath(moduleUrl);
			} catch (error) {
				reject(/* @__PURE__ */ new Error(`[unrun]: Failed to resolve module URL ${moduleUrl}: ${error.message}`));
				return;
			}
			spawnArgs.push(modulePath);
		}
		const childProcess = spawn(nodePath, [...spawnArgs, ...args], { stdio: [
			"inherit",
			"inherit",
			"inherit"
		] });
		const lifecycleSignals = [
			"SIGINT",
			"SIGTERM",
			"SIGQUIT"
		];
		const signalListeners = /* @__PURE__ */ new Map();
		let exitListener;
		const cleanupChildProcess = (signal) => {
			if (childProcess.killed || childProcess.exitCode !== null) return;
			try {
				childProcess.kill(signal);
			} catch {}
		};
		const removeLifecycleListeners = () => {
			if (exitListener) {
				process.removeListener("exit", exitListener);
				exitListener = void 0;
			}
			for (const [signal, listener] of signalListeners) process.removeListener(signal, listener);
			signalListeners.clear();
		};
		exitListener = () => {
			cleanupChildProcess();
		};
		process.on("exit", exitListener);
		for (const signal of lifecycleSignals) {
			const listener = () => {
				cleanupChildProcess(signal);
				removeLifecycleListeners();
				process.nextTick(() => {
					process.kill(process.pid, signal);
				});
			};
			signalListeners.set(signal, listener);
			process.on(signal, listener);
		}
		childProcess.on("close", (exitCode) => {
			removeLifecycleListeners();
			resolve({ exitCode: exitCode ?? 0 });
		});
		childProcess.on("error", (error) => {
			removeLifecycleListeners();
			reject(/* @__PURE__ */ new Error(`[unrun]: Failed to start child process: ${error.message}`));
		});
	});
}
//#endregion
//#region src/utils/module/write-module.ts
function sanitize(name) {
	return name.replaceAll(/[^\w.-]/g, "_");
}
/**
* Writes a module to the filesystem.
* @param code - The JavaScript code to be written as a module.
* @param options - Resolved options.
* @returns The file URL of the written module.
*/
function writeModule(code, options) {
	const filenameHint = path.basename(options.path);
	let moduleUrl = "";
	try {
		const randomKey = crypto.randomBytes(16).toString("hex");
		const fname = `${filenameHint ? `${sanitize(filenameHint)}.` : ""}${randomKey}.mjs`;
		const projectNodeModules = path.join(process.cwd(), "node_modules");
		const outDir = path.join(projectNodeModules, ".unrun");
		const outFile = path.join(outDir, fname);
		if (!fs.existsSync(outFile)) try {
			fs.mkdirSync(outDir, { recursive: true });
			fs.writeFileSync(outFile, code, "utf8");
		} catch {
			const fallbackDir = path.join(tmpdir(), "unrun-cache");
			const fallbackFile = path.join(fallbackDir, fname);
			fs.mkdirSync(fallbackDir, { recursive: true });
			fs.writeFileSync(fallbackFile, code, "utf8");
			moduleUrl = pathToFileURL(fallbackFile).href;
		}
		moduleUrl = moduleUrl || pathToFileURL(outFile).href;
	} catch {
		moduleUrl = `data:text/javascript;base64,${Buffer$1.from(code).toString("base64")}`;
	}
	return moduleUrl;
}
//#endregion
//#region src/utils/module/load-module.ts
/**
* Import a JS module from code string.
* Write ESM code to a temp file (prefer project-local node_modules/.unrun) and import it.
* @param code - The JavaScript code to be imported as a module.
* @param options - Resolved options.
* @returns The imported module.
*/
async function loadModule(code, options) {
	const moduleUrl = writeModule(code, options);
	let _module;
	try {
		_module = await import(moduleUrl);
	} finally {
		cleanModule(moduleUrl, options);
	}
	return _module;
}
//#endregion
//#region src/index.ts
/**
* Loads a module with JIT transpilation based on the provided options.
*
* @param options - The options for loading the module.
* @returns A promise that resolves to the loaded module.
*/
async function unrun(options) {
	const resolvedOptions = resolveOptions(options);
	const output = await bundle(resolvedOptions);
	let module;
	try {
		module = await loadModule(output.chunk.code, resolvedOptions);
	} catch (error) {
		throw new Error(`[unrun] Import failed (code length: ${output.chunk.code.length}): ${error.message}`, { cause: error });
	}
	return {
		module: preset(resolvedOptions, module),
		dependencies: output.dependencies
	};
}
/**
* Loads a module with JIT transpilation based on the provided options.
* This function runs synchronously using a worker thread.
*
* @param options - The options for loading the module.
* @returns The loaded module.
*/
function unrunSync(options) {
	const { createSyncFn } = __require("synckit");
	return createSyncFn(__require.resolve("./sync/worker.mjs"), { tsRunner: "node" })(options);
}
/**
* Runs a given module with JIT transpilation based on the provided options.
* This function does not return the module, as it simply executes it.
* Corresponds to the CLI behavior.
*
* @param options - The options for running the module.
* @param args - Additional command-line arguments to pass to the module.
*/
async function unrunCli(options, args = []) {
	const resolvedOptions = resolveOptions(options);
	const output = await bundle(resolvedOptions);
	const moduleUrl = writeModule(output.chunk.code, resolvedOptions);
	let cliResult;
	try {
		cliResult = await execModule(moduleUrl, args);
	} catch (error) {
		throw new Error(`[unrun] Run failed (code length: ${output.chunk.code.length}): ${error.message}`, { cause: error });
	}
	cleanModule(moduleUrl, resolvedOptions);
	return cliResult;
}
//#endregion
export { unrunCli as n, unrunSync as r, unrun as t };
