import { createRequire as __cjs_createRequire } from "node:module";
const __cjs_require = __cjs_createRequire(import.meta.url);
import { n as RE_DTS, r as RE_DTS_MAP } from "./filename-DQnUJlio.mjs";
import { globalContext } from "./tsc-context.mjs";
import { createRequire } from "node:module";
import { createDebug } from "obug";
import path from "node:path";
const ts = __cjs_require("typescript");
import { pathToFileURL } from "node:url";
//#region \0rolldown/runtime.js
var __require = /* @__PURE__ */ createRequire(import.meta.url);
//#endregion
//#region src/tsc/system.ts
const debug$4 = createDebug("rolldown-plugin-dts:tsc-system");
/**
* A system that writes files to both memory and disk. It will try read files
* from memory firstly and fallback to disk if not found.
*/
function createFsSystem(files) {
	return {
		...ts.sys,
		write(message) {
			debug$4(message);
		},
		resolvePath(path) {
			if (files.has(path)) return path;
			return ts.sys.resolvePath(path);
		},
		directoryExists(directory) {
			if (Array.from(files.keys()).some((path) => path.startsWith(directory))) return true;
			return ts.sys.directoryExists(directory);
		},
		fileExists(fileName) {
			if (files.has(fileName)) return true;
			return ts.sys.fileExists(fileName);
		},
		readFile(fileName, ...args) {
			if (files.has(fileName)) return files.get(fileName);
			return ts.sys.readFile(fileName, ...args);
		},
		writeFile(path, data, ...args) {
			files.set(path, data);
			ts.sys.writeFile(path, data, ...args);
		},
		deleteFile(fileName, ...args) {
			files.delete(fileName);
			ts.sys.deleteFile?.(fileName, ...args);
		}
	};
}
function createMemorySystem(files) {
	return {
		...createFsSystem(files),
		writeFile(path, data) {
			files.set(path, data);
		},
		deleteFile(fileName) {
			files.delete(fileName);
		}
	};
}
//#endregion
//#region src/tsc/utils.ts
const formatHost = {
	getCurrentDirectory: () => ts.sys.getCurrentDirectory(),
	getNewLine: () => ts.sys.newLine,
	getCanonicalFileName: ts.sys.useCaseSensitiveFileNames ? (f) => f : (f) => f.toLowerCase()
};
const stripPrivateFields = (ctx) => {
	const visitor = (node) => {
		if (ts.isPropertySignature(node) && ts.isPrivateIdentifier(node.name)) return ctx.factory.updatePropertySignature(node, node.modifiers, ctx.factory.createStringLiteral(node.name.text), node.questionToken, node.type);
		return ts.visitEachChild(node, visitor, ctx);
	};
	return (sourceFile) => ts.visitNode(sourceFile, visitor, ts.isSourceFile) ?? sourceFile;
};
const customTransformers = { afterDeclarations: [stripPrivateFields] };
function setSourceMapRoot(map, originalFilePath, finalFilePath) {
	if (!map) return;
	if (map.sourceRoot) return;
	const originalDir = path.posix.dirname(pathToFileURL(originalFilePath).pathname);
	const finalDir = path.posix.dirname(pathToFileURL(finalFilePath).pathname);
	if (originalDir !== finalDir) map.sourceRoot = path.posix.relative(finalDir, originalDir);
}
//#endregion
//#region src/tsc/emit-build.ts
const debug$3 = createDebug("rolldown-plugin-dts:tsc-build");
function tscEmitBuild(tscOptions) {
	const { id, tsconfig, incremental, context = globalContext, sourcemap } = tscOptions;
	debug$3(`running tscEmitBuild id: ${id}, tsconfig: ${tsconfig}, incremental: ${incremental}`);
	if (!tsconfig) return { error: "[rolldown-plugin-dts] build mode requires a tsconfig path" };
	const fsSystem = (incremental ? createFsSystem : createMemorySystem)(context.files);
	const resolvedId = fsSystem.resolvePath(id);
	if (resolvedId !== id) debug$3(`resolved id from ${id} to ${resolvedId}`);
	const project = getOrBuildProjects(context, fsSystem, tsconfig, !incremental, sourcemap).get(resolvedId);
	if (!project) {
		debug$3(`unable to locate a project containing ${resolvedId}`);
		return { error: `Unable to locate ${id} from the given tsconfig file ${tsconfig}` };
	}
	debug$3(`loaded project ${project.tsconfigPath} for ${id}`);
	const ignoreCase = !fsSystem.useCaseSensitiveFileNames;
	const outputFiles = ts.getOutputFileNames(project.parsedConfig, resolvedId, ignoreCase);
	let code;
	let map;
	for (const outputFile of outputFiles) {
		if (RE_DTS.test(outputFile)) {
			if (!fsSystem.fileExists(outputFile)) {
				console.warn(`[rolldown-plugin-dts] Unable to read file ${outputFile}`);
				continue;
			}
			code = fsSystem.readFile(outputFile);
			continue;
		}
		if (RE_DTS_MAP.test(outputFile)) {
			if (!fsSystem.fileExists(outputFile)) continue;
			const text = fsSystem.readFile(outputFile);
			if (!text) {
				console.warn(`[rolldown-plugin-dts] Unexpected sourcemap ${outputFile}`);
				continue;
			}
			map = JSON.parse(text);
			setSourceMapRoot(map, outputFile, resolvedId);
		}
	}
	if (code) return {
		code,
		map
	};
	if (incremental) {
		debug$3(`incremental build failed`);
		return tscEmitBuild({
			...tscOptions,
			incremental: false
		});
	}
	debug$3(`unable to build .d.ts file for ${id}`);
	if (project.parsedConfig.options.declaration !== true) return { error: `Unable to build .d.ts file for ${id}; Make sure the "declaration" option is set to true in ${project.tsconfigPath}` };
	return { error: `Unable to build .d.ts file for ${id}; This seems like a bug of rolldown-plugin-dts. Please report this issue to https://github.com/sxzz/rolldown-plugin-dts/issues` };
}
function getOrBuildProjects(context, fsSystem, tsconfig, force, sourcemap) {
	let projectMap = context.projects.get(tsconfig);
	if (projectMap) {
		debug$3(`skip building projects for ${tsconfig}`);
		return projectMap;
	}
	projectMap = buildProjects(fsSystem, tsconfig, force, sourcemap);
	context.projects.set(tsconfig, projectMap);
	return projectMap;
}
/**
* Use TypeScript compiler to build all projects referenced
*/
function buildProjects(fsSystem, tsconfig, force, sourcemap) {
	debug$3(`start building projects for ${tsconfig}`);
	const projects = collectProjectGraph(tsconfig, fsSystem, force, sourcemap);
	debug$3("collected %d projects: %j", projects.length, projects.map((project) => project.tsconfigPath));
	const host = ts.createSolutionBuilderHost(fsSystem, createProgramWithPatchedCompilerOptions);
	debug$3(`built solution for ${tsconfig} with exit status ${ts.createSolutionBuilder(host, [tsconfig], {
		force,
		verbose: true
	}).build(void 0, void 0, void 0, (project) => {
		debug$3(`transforming project ${project}`);
		return customTransformers;
	})}`);
	const sourceFileToProjectMap = /* @__PURE__ */ new Map();
	for (const project of projects) for (const fileName of project.parsedConfig.fileNames) sourceFileToProjectMap.set(fsSystem.resolvePath(fileName), project);
	return sourceFileToProjectMap;
}
/**
* Collects all referenced projects from the given entry tsconfig file.
*/
function collectProjectGraph(rootTsconfigPath, fsSystem, force, sourcemap) {
	const seen = /* @__PURE__ */ new Set();
	const projects = [];
	const stack = [fsSystem.resolvePath(rootTsconfigPath)];
	while (true) {
		const tsconfigPath = stack.pop();
		if (!tsconfigPath) break;
		if (seen.has(tsconfigPath)) continue;
		seen.add(tsconfigPath);
		const parsedConfig = parseTsconfig(tsconfigPath, fsSystem);
		if (!parsedConfig) continue;
		parsedConfig.options = patchCompilerOptions(parsedConfig.options, {
			tsconfigPath,
			force,
			sourcemap
		});
		projects.push({
			tsconfigPath,
			parsedConfig
		});
		for (const ref of parsedConfig.projectReferences ?? []) stack.push(ts.resolveProjectReferencePath(ref));
	}
	return projects;
}
function parseTsconfig(tsconfigPath, fsSystem) {
	const diagnostics = [];
	const parsedConfig = ts.getParsedCommandLineOfConfigFile(tsconfigPath, void 0, {
		...fsSystem,
		onUnRecoverableConfigFileDiagnostic: (diagnostic) => {
			diagnostics.push(diagnostic);
		}
	});
	if (diagnostics.length) throw new Error(`[rolldown-plugin-dts] Unable to read ${tsconfigPath}: ${ts.formatDiagnostics(diagnostics, formatHost)}`);
	return parsedConfig;
}
function patchCompilerOptions(options, extraOptions) {
	const noEmit = options.noEmit ?? false;
	const declaration = options.declaration ?? (options.composite ? true : false);
	const declarationMap = options.declarationMap ?? false;
	const shouldPrintWarning = extraOptions?.tsconfigPath && !extraOptions.force;
	if (noEmit === true) {
		options = {
			...options,
			noEmit: false
		};
		if (shouldPrintWarning) console.warn(`[rolldown-plugin-dts] ${extraOptions.tsconfigPath} has "noEmit" set to true. Please set it to false to generate declaration files.`);
	}
	if (declaration === false) {
		options = {
			...options,
			declaration: true
		};
		if (shouldPrintWarning) console.warn(`[rolldown-plugin-dts] ${extraOptions.tsconfigPath} has "declaration" set to false. Please set it to true to generate declaration files.`);
	}
	if (declarationMap === false && extraOptions?.sourcemap) {
		options = {
			...options,
			declarationMap: true
		};
		if (shouldPrintWarning) console.warn(`[rolldown-plugin-dts] ${extraOptions.tsconfigPath} has "declarationMap" set to false. Please set it to true if you want to generate source maps for declaration files.`);
	}
	return options;
}
const createProgramWithPatchedCompilerOptions = (rootNames, options, ...args) => {
	return ts.createEmitAndSemanticDiagnosticsBuilderProgram(rootNames, patchCompilerOptions(options ?? {}, null), ...args);
};
//#endregion
//#region src/tsc/volar.ts
const debug$2 = createDebug("rolldown-plugin-dts:volar");
function loadVueLanguageTools() {
	debug$2("loading vue language tools");
	try {
		const vueTscPath = __require.resolve("vue-tsc");
		return {
			volarTs: __require(__require.resolve("@volar/typescript", { paths: [vueTscPath] })),
			vue: __require(__require.resolve("@vue/language-core", { paths: [vueTscPath] }))
		};
	} catch (error) {
		debug$2("vue language tools not found", error);
		throw new Error("Failed to load vue language tools. Please manually install vue-tsc.", { cause: error });
	}
}
function initVueLanguageTools() {
	const { vue, volarTs: { proxyCreateProgram } } = loadVueLanguageTools();
	const getLanguagePlugin = (ts, options) => {
		const $rootDir = options.options.$rootDir;
		const $configRaw = options.options.$configRaw;
		const resolver = new vue.CompilerOptionsResolver(ts, ts.sys.readFile);
		resolver.addConfig($configRaw?.vueCompilerOptions ?? {}, $rootDir);
		const vueOptions = resolver.build();
		return vue.createVueLanguagePlugin(ts, options.options, vueOptions, (id) => id);
	};
	return {
		proxyCreateProgram,
		getLanguagePlugin
	};
}
function initTsMacro() {
	const debug = createDebug("rolldown-plugin-dts:ts-macro");
	debug("loading ts-macro language tools");
	try {
		const tsMacroPath = __require.resolve("@ts-macro/tsc");
		const { proxyCreateProgram } = __require(__require.resolve("@volar/typescript", { paths: [tsMacroPath] }));
		const tsMacro = __require(__require.resolve("@ts-macro/language-plugin", { paths: [tsMacroPath] }));
		const { getOptions } = __require(__require.resolve("@ts-macro/language-plugin/options", { paths: [tsMacroPath] }));
		const getLanguagePlugin = (ts, options) => {
			const $rootDir = options.options.$rootDir;
			return tsMacro.getLanguagePlugins(ts, options.options, getOptions(ts, $rootDir))[0];
		};
		return {
			proxyCreateProgram,
			getLanguagePlugin
		};
	} catch (error) {
		debug("ts-macro language tools not found", error);
		throw new Error("Failed to load ts-macro language tools. Please manually install @ts-macro/tsc.", { cause: error });
	}
}
function createProgramFactory(ts, options) {
	const vueLanguageTools = options.vue ? initVueLanguageTools() : void 0;
	const tsMacroLanguageTools = options.tsMacro ? initTsMacro() : void 0;
	const proxyCreateProgram = vueLanguageTools?.proxyCreateProgram || tsMacroLanguageTools?.proxyCreateProgram;
	if (!proxyCreateProgram) return ts.createProgram;
	return proxyCreateProgram(ts, ts.createProgram, (ts, options) => {
		const languagePlugins = [];
		if (vueLanguageTools) languagePlugins.push(vueLanguageTools.getLanguagePlugin(ts, options));
		if (tsMacroLanguageTools) languagePlugins.push(tsMacroLanguageTools.getLanguagePlugin(ts, options));
		return { languagePlugins };
	});
}
//#endregion
//#region src/tsc/emit-compiler.ts
const debug$1 = createDebug("rolldown-plugin-dts:tsc-compiler");
const defaultCompilerOptions = {
	declaration: true,
	noEmit: false,
	emitDeclarationOnly: true,
	noEmitOnError: true,
	checkJs: false,
	declarationMap: false,
	skipLibCheck: true,
	target: 99,
	resolveJsonModule: true,
	moduleResolution: ts.ModuleResolutionKind.Bundler
};
function createOrGetTsModule(options) {
	const { id, entries, context = globalContext } = options;
	const program = context.programs.find((program) => {
		const roots = program.getRootFileNames();
		if (entries) return entries.every((entry) => roots.includes(entry));
		return roots.includes(id);
	});
	if (program) {
		const sourceFile = program.getSourceFile(id);
		if (sourceFile) return {
			program,
			file: sourceFile
		};
	}
	debug$1(`create program for module: ${id}`);
	const module = createTsProgram(options);
	debug$1(`created program for module: ${id}`);
	context.programs.push(module.program);
	return module;
}
function createTsProgram({ entries, id, tsconfig, tsconfigRaw, vue, tsMacro, cwd, context = globalContext }) {
	const fsSystem = createFsSystem(context.files);
	const baseDir = tsconfig ? path.dirname(tsconfig) : cwd;
	const parsedConfig = ts.parseJsonConfigFileContent(tsconfigRaw, fsSystem, baseDir, void 0, void 0, void 0, vue ? [{
		extension: "vue",
		isMixedContent: true,
		scriptKind: ts.ScriptKind.Deferred
	}] : void 0);
	debug$1(`creating program for root project: ${baseDir}`);
	return createTsProgramFromParsedConfig({
		parsedConfig,
		fsSystem,
		baseDir,
		id,
		entries,
		vue,
		tsMacro
	});
}
function createTsProgramFromParsedConfig({ parsedConfig, fsSystem, baseDir, id, entries, vue, tsMacro }) {
	const compilerOptions = {
		...defaultCompilerOptions,
		...parsedConfig.options,
		$configRaw: parsedConfig.raw,
		$rootDir: baseDir
	};
	const rootNames = [...new Set([id, ...entries || parsedConfig.fileNames].map((f) => fsSystem.resolvePath(f)))];
	const host = ts.createCompilerHost(compilerOptions, true);
	const program = createProgramFactory(ts, {
		vue,
		tsMacro
	})({
		rootNames,
		options: compilerOptions,
		host,
		projectReferences: parsedConfig.projectReferences
	});
	const sourceFile = program.getSourceFile(id);
	if (!sourceFile) {
		debug$1(`source file not found in program: ${id}`);
		if (!!parsedConfig.projectReferences?.length) throw new Error(`[rolldown-plugin-dts] Unable to load ${id}; You have "references" in your tsconfig file. Perhaps you want to add \`dts: { build: true }\` in your config?`);
		if (fsSystem.fileExists(id)) {
			debug$1(`File ${id} exists on disk.`);
			throw new Error(`Unable to load file ${id} from the program. This seems like a bug of rolldown-plugin-dts. Please report this issue to https://github.com/sxzz/rolldown-plugin-dts/issues`);
		} else {
			debug$1(`File ${id} does not exist on disk.`);
			throw new Error(`Source file not found: ${id}`);
		}
	}
	return {
		program,
		file: sourceFile
	};
}
function tscEmitCompiler(tscOptions) {
	debug$1(`running tscEmitCompiler ${tscOptions.id}`);
	const { program, file } = createOrGetTsModule(tscOptions);
	debug$1(`got source file: ${file.fileName}`);
	let dtsCode;
	let map;
	const { emitSkipped, diagnostics } = program.emit(file, (fileName, code) => {
		if (fileName.endsWith(".map")) {
			debug$1(`emit dts sourcemap: ${fileName}`);
			map = JSON.parse(code);
			setSourceMapRoot(map, fileName, tscOptions.id);
		} else {
			debug$1(`emit dts: ${fileName}`);
			dtsCode = code;
		}
	}, void 0, true, customTransformers, true);
	if (emitSkipped && diagnostics.length) return { error: ts.formatDiagnostics(diagnostics, formatHost) };
	if (!dtsCode) {
		debug$1("nothing was emitted.");
		if (file.isDeclarationFile) {
			debug$1("source file is a declaration file.");
			dtsCode = file.getFullText();
		} else console.warn("[rolldown-plugin-dts] Warning: Failed to emit declaration file. Please try to enable `eager` option (`dts.eager` for tsdown).");
	}
	return {
		code: dtsCode,
		map
	};
}
//#endregion
//#region src/tsc/index.ts
const debug = createDebug("rolldown-plugin-dts:tsc");
debug(`loaded typescript: ${ts.version}`);
function tscEmit(tscOptions) {
	debug(`running tscEmit ${tscOptions.id}`);
	if (tscOptions.build) return tscEmitBuild(tscOptions);
	else return tscEmitCompiler(tscOptions);
}
//#endregion
export { tscEmit as t };
