import { createRequire as __cjs_createRequire } from "node:module";
const __cjs_require = __cjs_createRequire(import.meta.url);
import { a as getPackageType, c as isGlobEntry, d as cleanOutDir, i as loadConfigFile, l as toObjectEntry, n as mergeUserOptions, o as writeExports, r as resolveUserConfig, s as buildExe, t as mergeConfig, u as cleanChunks } from "./options-8hmVMssn.mjs";
import { r as fsRemove } from "./fs-Dd6Htx2P.mjs";
import { a as pkgExists, l as slash, n as importWithError, o as promiseWithResolvers, t as debounce } from "./general-D3muxt2f.mjs";
import { a as globalLogger, t as LogLevels } from "./logger-uV8l1UFa.mjs";
import { i as getShimsInject, n as DepsPlugin } from "./format-CajNSstg.mjs";
import { a as ReportPlugin, i as ShebangPlugin, n as endsWithConfig, o as NodeProtocolPlugin, r as addOutDirToChunks, s as copy, t as WatchPlugin } from "./watch-D6EGzM6P.mjs";
import { t as version } from "./package-GYPjxY9U.mjs";
import { mkdtemp, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { bold, dim, green } from "ansis";
import { createDebug } from "obug";
import { glob } from "tinyglobby";
import readline from "node:readline";
import { RE_CSS, RE_DTS, RE_JS, filename_js_to_dts } from "rolldown-plugin-dts/internal";
import { tmpdir } from "node:os";
const satisfies = __cjs_require("semver/functions/satisfies.js");
import { exec, x } from "tinyexec";
import { formatWithOptions, inspect } from "node:util";
import { clearRequireCache } from "import-without-cache";
import { VERSION, build, watch } from "rolldown";
const coerce = __cjs_require("semver/functions/coerce.js");
import { Hookable } from "hookable";
const treeKill = __cjs_require("tree-kill");
import { importGlobPlugin } from "rolldown/experimental";
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region src/config/workspace.ts
const debug$4 = createDebug("tsdown:config:workspace");
const DEFAULT_EXCLUDE_WORKSPACE = [
	"**/node_modules/**",
	"**/dist/**",
	"**/test?(s)/**",
	"**/t?(e)mp/**"
];
async function resolveWorkspace(config, inlineConfig, rootDeps) {
	const normalized = mergeConfig(config, inlineConfig);
	const rootCwd = normalized.cwd || process.cwd();
	const deps = new Set(rootDeps);
	let { workspace } = normalized;
	if (!workspace) return {
		configs: [normalized],
		deps
	};
	if (workspace === true) workspace = {};
	else if (typeof workspace === "string" || Array.isArray(workspace)) workspace = { include: workspace };
	let { include: packages = "auto", exclude = DEFAULT_EXCLUDE_WORKSPACE, config: workspaceConfig } = workspace;
	if (packages === "auto") packages = (await glob("**/package.json", {
		ignore: exclude,
		cwd: rootCwd,
		expandDirectories: false
	})).filter((file) => file !== "package.json").map((file) => slash(path.resolve(rootCwd, file, "..")));
	else packages = (await glob(packages, {
		ignore: exclude,
		cwd: rootCwd,
		onlyDirectories: true,
		absolute: true,
		expandDirectories: false
	})).map((file) => slash(path.resolve(file)));
	if (packages.length === 0) throw new Error("No workspace packages found, please check your config");
	return {
		configs: (await Promise.all(packages.map(async (cwd) => {
			debug$4("loading workspace config %s", cwd);
			const { configs, deps: workspaceDeps } = await loadConfigFile({
				...inlineConfig,
				config: workspaceConfig,
				cwd
			}, cwd, normalized);
			workspaceDeps?.forEach((dep) => deps.add(dep));
			return configs.map((config) => mergeConfig(normalized, config));
		}))).flat(),
		deps
	};
}
//#endregion
//#region src/config/index.ts
const debug$3 = createDebug("tsdown:config");
async function resolveConfig(inlineConfig) {
	debug$3("inline config %O", inlineConfig);
	if (inlineConfig.cwd) inlineConfig.cwd = path.resolve(inlineConfig.cwd);
	const { configs: rootConfigs, deps: rootDeps } = await loadConfigFile(inlineConfig);
	const globalDeps = new Set(rootDeps);
	const configs = (await Promise.all(rootConfigs.map(async (rootConfig) => {
		const { configs: workspaceConfigs, deps: workspaceDeps } = await resolveWorkspace(rootConfig, inlineConfig, rootDeps);
		debug$3("workspace configs %O", workspaceConfigs);
		const configs = (await Promise.all(workspaceConfigs.filter((config) => !config.workspace || config.entry).map((config) => resolveUserConfig(config, inlineConfig, workspaceDeps)))).flat().filter((config) => !!config);
		workspaceDeps.forEach((dep) => globalDeps.add(dep));
		return configs;
	}))).flat();
	debug$3("resolved configs %O", configs);
	if (configs.length === 0) throw new Error("No valid configuration found.");
	return {
		configs,
		deps: globalDeps
	};
}
//#endregion
//#region src/features/cjs.ts
function warnLegacyCJS(config) {
	if (config.exe || !config.target || !(config.checks?.legacyCjs ?? true) || !config.format.includes("cjs")) return;
	if (config.target.some((t) => {
		const version = coerce(t.split("node")[1]);
		return version && satisfies(version, "^20.19.0 || >=22.12.0");
	})) config.logger.warnOnce("We recommend using the ESM format instead of CommonJS.\nThe ESM format is compatible with modern platforms and runtimes, and most new libraries are now distributed only in ESM format.\nLearn more at https://nodejs.org/en/learn/modules/publishing-a-package#how-did-we-get-here");
}
function CjsDtsReexportPlugin() {
	return {
		name: "tsdown:cjs-dts-reexport",
		generateBundle(_options, bundle) {
			for (const chunk of Object.values(bundle)) {
				if (chunk.type !== "chunk" || !chunk.isEntry) continue;
				if (!chunk.fileName.endsWith(".cjs") && !chunk.fileName.endsWith(".js")) continue;
				const content = `export type * from './${path.basename(chunk.fileName.replace(RE_JS, ".d.mts"))}'\n`;
				this.emitFile({
					type: "prebuilt-chunk",
					fileName: filename_js_to_dts(chunk.fileName),
					code: content
				});
			}
		}
	};
}
//#endregion
//#region src/features/devtools.ts
async function startDevtoolsUI(config) {
	const { start } = await importWithError("@vitejs/devtools/cli-commands");
	await start({
		host: "127.0.0.1",
		open: true,
		...typeof config.ui === "object" ? config.ui : {}
	});
}
//#endregion
//#region src/features/hooks.ts
async function createHooks(options) {
	const hooks = new Hookable();
	if (typeof options.hooks === "object") hooks.addHooks(options.hooks);
	else if (typeof options.hooks === "function") await options.hooks(hooks);
	return {
		hooks,
		context: {
			options,
			hooks
		}
	};
}
function executeOnSuccess(config) {
	if (!config.onSuccess) return;
	const ab = new AbortController();
	if (typeof config.onSuccess === "string") {
		const p = exec(config.onSuccess, [], { nodeOptions: {
			shell: true,
			stdio: "inherit",
			cwd: config.cwd
		} });
		p.then(({ exitCode }) => {
			if (exitCode) process.exitCode = exitCode;
		});
		ab.signal.addEventListener("abort", () => {
			if (typeof p.pid === "number") treeKill(p.pid);
		});
	} else config.onSuccess(config, ab.signal);
	return ab;
}
//#endregion
//#region src/features/pkg/attw.ts
const debug$2 = createDebug("tsdown:attw");
const label$1 = dim`[attw]`;
const problemFlags = {
	NoResolution: "no-resolution",
	UntypedResolution: "untyped-resolution",
	FalseCJS: "false-cjs",
	FalseESM: "false-esm",
	CJSResolvesToESM: "cjs-resolves-to-esm",
	FallbackCondition: "fallback-condition",
	CJSOnlyExportsDefault: "cjs-only-exports-default",
	NamedExports: "named-exports",
	FalseExportDefault: "false-export-default",
	MissingExportEquals: "missing-export-equals",
	UnexpectedModuleSyntax: "unexpected-module-syntax",
	InternalResolutionError: "internal-resolution-error"
};
/**
* ATTW profiles.
* Defines the resolution modes to ignore for each profile.
*
* @see https://github.com/arethetypeswrong/arethetypeswrong.github.io/blob/main/packages/cli/README.md#profiles
*/
const profiles = {
	strict: [],
	node16: ["node10"],
	"esm-only": ["node10", "node16-cjs"]
};
async function attw(options, tarball) {
	if (!options.attw) return;
	if (!options.pkg) {
		options.logger.warn("attw is enabled but package.json is not found");
		return;
	}
	const { profile = "strict", level = "warn", ignoreRules = [], ...attwOptions } = options.attw;
	const invalidRules = ignoreRules.filter((rule) => !Object.values(problemFlags).includes(rule));
	if (invalidRules.length) options.logger.warn(`attw config option 'ignoreRules' contains invalid value '${invalidRules.join(", ")}'.`);
	const t = performance.now();
	debug$2("Running attw check");
	const attwCore = options.attw.module || await importWithError("@arethetypeswrong/core");
	const pkg = attwCore.createPackageFromTarballData(tarball);
	const checkResult = await attwCore.checkPackage(pkg, attwOptions);
	let errorMessage;
	if (checkResult.types) {
		const problems = checkResult.problems.filter((problem) => {
			if (ignoreRules.includes(problemFlags[problem.kind])) return false;
			if ("resolutionKind" in problem) return !profiles[profile]?.includes(problem.resolutionKind);
			return true;
		});
		if (problems.length) errorMessage = `problems found:\n${problems.map((problem) => formatProblem(checkResult.packageName, problem)).join("\n")}`;
	} else errorMessage = `Package has no types`;
	if (errorMessage) options.logger[level](options.nameLabel, label$1, errorMessage);
	else options.logger.success(options.nameLabel, label$1, "No problems found", dim`(${Math.round(performance.now() - t)}ms)`);
}
/**
* Format an ATTW problem for display
*/
function formatProblem(packageName, problem) {
	const resolutionKind = "resolutionKind" in problem ? ` (${problem.resolutionKind})` : "";
	const entrypoint = "entrypoint" in problem ? ` at ${slash(path.join(packageName, problem.entrypoint))}` : "";
	switch (problem.kind) {
		case "NoResolution": return `  ❌ No resolution${resolutionKind}${entrypoint}`;
		case "UntypedResolution": return `  ⚠️  Untyped resolution${resolutionKind}${entrypoint}`;
		case "FalseESM": return `  🔄 False ESM: Types indicate ESM (${problem.typesModuleKind}) but implementation is CJS (${problem.implementationModuleKind})\n     Types: ${problem.typesFileName} | Implementation: ${problem.implementationFileName}`;
		case "FalseCJS": return `  🔄 False CJS: Types indicate CJS (${problem.typesModuleKind}) but implementation is ESM (${problem.implementationModuleKind})\n     Types: ${problem.typesFileName} | Implementation: ${problem.implementationFileName}`;
		case "CJSResolvesToESM": return `  ⚡ CJS resolves to ESM${resolutionKind}${entrypoint}`;
		case "NamedExports": {
			const missingExports = problem.missing?.length > 0 ? ` Missing: ${problem.missing.join(", ")}` : "";
			return `  📤 Named exports problem${problem.isMissingAllNamed ? " (all named exports missing)" : ""}${missingExports}\n     Types: ${problem.typesFileName} | Implementation: ${problem.implementationFileName}`;
		}
		case "FallbackCondition": return `  🎯 Fallback condition used${resolutionKind}${entrypoint}`;
		case "FalseExportDefault": return `  🎭 False export default\n     Types: ${problem.typesFileName} | Implementation: ${problem.implementationFileName}`;
		case "MissingExportEquals": return `  📝 Missing export equals\n     Types: ${problem.typesFileName} | Implementation: ${problem.implementationFileName}`;
		case "InternalResolutionError": return `  💥 Internal resolution error in ${problem.fileName} (${problem.resolutionOption})\n     Module: ${problem.moduleSpecifier} | Mode: ${problem.resolutionMode}`;
		case "UnexpectedModuleSyntax": return `  📋 Unexpected module syntax in ${problem.fileName}\n     Expected: ${problem.moduleKind} | Found: ${problem.syntax === 99 ? "ESM" : "CJS"}`;
		case "CJSOnlyExportsDefault": return `  🏷️  CJS only exports default in ${problem.fileName}`;
		default: return `  ❓ Unknown problem: ${JSON.stringify(problem)}`;
	}
}
//#endregion
//#region src/features/pkg/publint.ts
const debug$1 = createDebug("tsdown:publint");
const label = dim`[publint]`;
async function publint(options, tarball) {
	if (!options.publint) return;
	if (!options.pkg) {
		options.logger.warn(options.nameLabel, "publint is enabled but package.json is not found");
		return;
	}
	const t = performance.now();
	debug$1("Running publint");
	const { publint } = options.publint.module?.[0] || await importWithError("publint");
	const { formatMessage } = options.publint.module?.[1] || await importWithError("publint/utils");
	const { messages } = await publint({
		...options.publint,
		pack: { tarball: tarball.buffer }
	});
	debug$1("Found %d issues", messages.length);
	if (!messages.length) {
		options.logger.success(options.nameLabel, label, "No issues found", dim`(${Math.round(performance.now() - t)}ms)`);
		return;
	}
	for (const message of messages) {
		const formattedMessage = formatMessage(message, options.pkg);
		const logType = {
			error: "error",
			warning: "warn",
			suggestion: "info"
		}[message.type];
		options.logger[logType](options.nameLabel, label, formattedMessage);
	}
}
//#endregion
//#region src/features/pkg/index.ts
function initBundleByPkg(configs) {
	const map = {};
	for (const config of configs) {
		const pkgJson = config.pkg?.packageJsonPath;
		if (!pkgJson) continue;
		if (!map[pkgJson]) {
			const { promise, resolve } = promiseWithResolvers();
			map[pkgJson] = {
				promise,
				resolve,
				count: 0,
				formats: /* @__PURE__ */ new Set(),
				bundles: []
			};
		}
		map[pkgJson].count++;
		map[pkgJson].formats.add(config.format);
	}
	return map;
}
async function bundleDone(bundleByPkg, bundle) {
	const pkg = bundle.config.pkg;
	if (!pkg) return;
	const ctx = bundleByPkg[pkg.packageJsonPath];
	ctx.bundles.push(bundle);
	if (ctx.bundles.length < ctx.count) return ctx.promise;
	const configs = ctx.bundles.map(({ config }) => config);
	const exportsConfigs = dedupeConfigs(configs, "exports");
	if (exportsConfigs.length) {
		if (exportsConfigs.length > 1) throw new Error(`Conflicting exports options for package at ${pkg.packageJsonPath}. Please merge them:\n${exportsConfigs.map((config) => `- ${formatWithOptions({ colors: true }, config.exports)}`).join("\n")}`);
		const chunks = {};
		const inlinedDeps = mergeInlinedDeps(ctx.bundles);
		for (const bundle of ctx.bundles) {
			if (!bundle.config.exports) continue;
			chunks[bundle.config.format] ||= [];
			chunks[bundle.config.format].push(...bundle.chunks);
		}
		await writeExports(exportsConfigs[0], chunks, inlinedDeps);
	}
	const publintConfigs = dedupeConfigs(configs, "publint");
	const attwConfigs = dedupeConfigs(configs, "attw");
	if (publintConfigs.length > 1 || attwConfigs.length > 1) publintConfigs[1].logger.warn(`Multiple publint or attw configurations found for package at ${pkg.packageJsonPath}. Consider merging them for better consistency and performance.`);
	try {
		if (publintConfigs.length || attwConfigs.length) {
			const tarball = await packTarball(pkg.packageJsonPath);
			await Promise.all([...publintConfigs.map((config) => publint(config, tarball)), ...attwConfigs.map((config) => attw(config, tarball))]);
		}
	} catch (error) {
		configs[0].logger.error("Pack failed:", error);
	}
	ctx.resolve();
}
async function packTarball(packageJsonPath) {
	const pkgDir = path.dirname(packageJsonPath);
	const destination = await mkdtemp(path.join(tmpdir(), "tsdown-pack-"));
	const { detect } = await import("./detect-DN3DXXYt.mjs");
	try {
		const detected = await detect({ cwd: pkgDir });
		if (detected?.name === "deno") throw new Error(`Cannot pack tarball for Deno projects at ${pkgDir}`);
		return readFile(await pack(pkgDir, detected, destination, true));
	} finally {
		await fsRemove(destination);
	}
}
function dedupeConfigs(configs, key) {
	const filtered = configs.filter((config) => config[key]);
	if (!filtered.length) return [];
	const seen = /* @__PURE__ */ new Set();
	const results = filtered.filter((config) => {
		if (!Object.keys(config[key]).length) return false;
		if (seen.has(config[key])) return false;
		seen.add(config[key]);
		return true;
	});
	if (results.length === 0) return [filtered[0]];
	return results;
}
function mergeInlinedDeps(bundles) {
	const merged = /* @__PURE__ */ new Map();
	for (const bundle of bundles) for (const [pkgName, versions] of bundle.inlinedDeps) {
		if (!merged.has(pkgName)) merged.set(pkgName, /* @__PURE__ */ new Set());
		for (const v of versions) merged.get(pkgName).add(v);
	}
	if (!merged.size) return;
	const sorted = [...merged.entries()].toSorted(([a], [b]) => a.localeCompare(b));
	const result = {};
	for (const [pkgName, versions] of sorted) result[pkgName] = versions.size === 1 ? [...versions][0] : [...versions].toSorted();
	return result;
}
async function pack(dir, pm, destination, ignoreScripts) {
	pm ||= {
		name: "npm",
		agent: "npm"
	};
	if (pm.name === "deno") throw new Error(`Cannot pack tarball for Deno projects at ${dir}`);
	const command = pm.name;
	const args = ["pack"];
	if (pm.name === "bun") args.unshift("pm");
	const outFile = path.join(destination, "package.tgz");
	if (destination) switch (pm.agent) {
		case "yarn":
			args.push("-f", outFile);
			break;
		case "yarn@berry":
			args.push("-o", outFile);
			break;
		case "bun":
			args.push("--destination", destination);
			break;
		default:
			args.push("--pack-destination", destination);
			break;
	}
	if (ignoreScripts) switch (pm.agent) {
		case "pnpm":
			args.push("--config.ignore-scripts=true");
			break;
		case "yarn@berry": break;
		default:
			args.push("--ignore-scripts");
			break;
	}
	const output = await x(command, args, { nodeOptions: { cwd: dir } });
	const tarballFile = await readdir(destination).then((files) => files.find((file) => file.endsWith(".tgz")));
	if (!tarballFile) throw new Error(`Failed to find packed tarball file in ${destination}. Command output:\n${JSON.stringify(output, null, 2)}`);
	return path.join(destination, tarballFile);
}
//#endregion
//#region src/features/output.ts
function resolveJsOutputExtension(packageType, format, fixedExtension) {
	switch (format) {
		case "es": return !fixedExtension && packageType === "module" ? "js" : "mjs";
		case "cjs": return fixedExtension || packageType === "module" ? "cjs" : "js";
		default: return "js";
	}
}
function resolveChunkFilename({ outExtensions, fixedExtension, pkg, hash }, inputOptions, format) {
	const packageType = getPackageType(pkg);
	let jsExtension;
	let dtsExtension;
	if (outExtensions) {
		const { js, dts } = outExtensions({
			options: inputOptions,
			format,
			pkgType: packageType
		}) || {};
		jsExtension = js;
		dtsExtension = dts;
	}
	jsExtension ??= `.${resolveJsOutputExtension(packageType, format, fixedExtension)}`;
	const suffix = format === "iife" || format === "umd" ? `.${format}` : "";
	return [createChunkFilename(`[name]${suffix}`, jsExtension, dtsExtension), createChunkFilename(`[name]${suffix}${hash ? "-[hash]" : ""}`, jsExtension, dtsExtension)];
}
function createChunkFilename(basename, jsExtension, dtsExtension) {
	if (dtsExtension === void 0) return `${basename}${jsExtension}`;
	return (chunk) => {
		return `${basename}${chunk.name.endsWith(".d") ? dtsExtension : jsExtension}`;
	};
}
function resolveChunkAddon(chunkAddon, format) {
	if (!chunkAddon) return;
	return (chunk) => {
		if (typeof chunkAddon === "function") chunkAddon = chunkAddon({
			format,
			fileName: chunk.fileName
		});
		if (typeof chunkAddon === "string") return chunkAddon;
		switch (true) {
			case RE_JS.test(chunk.fileName): return chunkAddon?.js || "";
			case RE_CSS.test(chunk.fileName): return chunkAddon?.css || "";
			case RE_DTS.test(chunk.fileName): return chunkAddon?.dts || "";
			default: return "";
		}
	};
}
//#endregion
//#region src/features/rolldown.ts
const debug = createDebug("tsdown:rolldown");
async function getBuildOptions(config, format, configDeps, bundle, cjsDts = false, isDualFormat) {
	const inputOptions = await resolveInputOptions(config, format, configDeps, bundle, cjsDts, isDualFormat);
	const outputOptions = await resolveOutputOptions(inputOptions, config, format, cjsDts);
	const rolldownConfig = {
		...inputOptions,
		output: outputOptions,
		write: config.write
	};
	debug("rolldown config with format \"%s\" %O", cjsDts ? "cjs dts" : format, rolldownConfig);
	return rolldownConfig;
}
async function resolveInputOptions(config, format, configDeps, bundle, cjsDts, isDualFormat) {
	const { alias, checks: { legacyCjs, ...checks } = {}, cjsDefault, cwd, deps: { neverBundle }, devtools, dts, entry, env, globImport, loader, logger, nameLabel, nodeProtocol, platform, plugins: userPlugins, report, shims, target, treeshake, tsconfig, unused, watch } = config;
	const plugins = [];
	if (nodeProtocol) plugins.push(NodeProtocolPlugin(nodeProtocol));
	if (config.pkg || config.deps.skipNodeModulesBundle) plugins.push(DepsPlugin(config, bundle));
	if (dts) {
		const { dts: dtsPlugin } = await import("rolldown-plugin-dts");
		const { cjsReexport: _, ...dtsPluginOptions } = dts;
		const options = {
			tsconfig,
			...dtsPluginOptions
		};
		if (format === "es") plugins.push(dtsPlugin(options));
		else if (cjsDts) plugins.push(dtsPlugin({
			...options,
			emitDtsOnly: true,
			cjsDefault
		}));
		else if (dts.cjsReexport && isDualFormat) plugins.push(CjsDtsReexportPlugin());
	}
	let cssPostPlugins;
	if (!cjsDts) {
		if (unused) {
			const { Unused } = await importWithError("unplugin-unused");
			plugins.push(Unused.rolldown({
				root: cwd,
				...unused
			}));
		}
		if (pkgExists("@tsdown/css")) {
			const { CssPlugin } = await import("@tsdown/css");
			const cssPlugins = CssPlugin(config, { logger });
			plugins.push(...cssPlugins.pre);
			cssPostPlugins = cssPlugins.post;
		} else plugins.push(CssGuardPlugin());
		plugins.push(ShebangPlugin(logger, cwd, nameLabel, isDualFormat));
		if (globImport) plugins.push(importGlobPlugin({ root: cwd }));
	}
	if (report && LogLevels[logger.level] >= 3) plugins.push(ReportPlugin(config, cjsDts, isDualFormat));
	if (watch) plugins.push(WatchPlugin(configDeps, bundle));
	if (!cjsDts) plugins.push(userPlugins);
	if (cssPostPlugins) plugins.push(...cssPostPlugins);
	const define = {
		...config.define,
		...Object.keys(env).reduce((acc, key) => {
			const value = JSON.stringify(env[key]);
			acc[`process.env.${key}`] = value;
			acc[`import.meta.env.${key}`] = value;
			return acc;
		}, Object.create(null))
	};
	const inject = shims && !cjsDts ? getShimsInject(format, platform) : void 0;
	return await mergeUserOptions({
		input: entry,
		cwd,
		external: neverBundle,
		resolve: { alias },
		tsconfig: tsconfig || void 0,
		treeshake,
		platform: cjsDts || format === "cjs" ? "node" : platform,
		transform: {
			target,
			define,
			inject
		},
		plugins,
		moduleTypes: {
			".node": "copy",
			...loader
		},
		logLevel: logger.level === "error" ? "silent" : logger.level,
		onLog(level, log, defaultHandler) {
			if (cjsDefault && log.code === "MIXED_EXPORT") return;
			if (logger.options?.failOnWarn && level === "warn" && log.code !== "PLUGIN_TIMINGS") defaultHandler("error", log);
			defaultHandler(level, log);
		},
		devtools: devtools || void 0,
		checks
	}, config.inputOptions, [format, { cjsDts }]);
}
async function resolveOutputOptions(inputOptions, config, format, cjsDts) {
	const { banner, cjsDefault, footer, minify, outDir, sourcemap, unbundle } = config;
	const [entryFileNames, chunkFileNames] = resolveChunkFilename(config, inputOptions, format);
	return await mergeUserOptions({
		format: cjsDts ? "es" : format,
		name: config.globalName,
		sourcemap,
		dir: outDir,
		exports: cjsDefault ? "auto" : "named",
		minify: !cjsDts && minify,
		entryFileNames,
		chunkFileNames,
		preserveModules: unbundle,
		preserveModulesRoot: unbundle ? config.root : void 0,
		postBanner: resolveChunkAddon(banner, format),
		postFooter: resolveChunkAddon(footer, format),
		codeSplitting: config.exe ? false : void 0
	}, config.outputOptions, [format, { cjsDts }]);
}
async function getDebugRolldownDir() {
	if (!debug.enabled) return;
	return await mkdtemp(path.join(tmpdir(), "tsdown-config-"));
}
async function debugBuildOptions(dir, name, format, buildOptions) {
	const outFile = path.join(dir, `rolldown.config.${format}.js`);
	handlePluginInspect(buildOptions.plugins);
	const serialized = formatWithOptions({
		depth: null,
		maxArrayLength: null,
		maxStringLength: null
	}, buildOptions);
	await writeFile(outFile, `/*
Auto-generated rolldown config for tsdown debug purposes
tsdown v${version}, rolldown v${VERSION}
Generated on ${(/* @__PURE__ */ new Date()).toISOString()}
Package name: ${name || "not specified"}
*/

export default ${serialized}\n`);
	debug("Wrote debug rolldown config for \"%s\" (%s) -> %s", name || "default name", format, outFile);
}
function handlePluginInspect(plugins) {
	if (Array.isArray(plugins)) for (const plugin of plugins) handlePluginInspect(plugin);
	else if (typeof plugins === "object" && plugins !== null && "name" in plugins) plugins[inspect.custom] = function(depth, options, inspect) {
		if ("_options" in plugins) return inspect({
			name: plugins.name,
			options: plugins._options
		}, options);
		else return `"rolldown plugin: ${plugins.name}"`;
	};
}
function CssGuardPlugin() {
	return {
		name: "tsdown:css-guard",
		transform: {
			order: "post",
			filter: { id: /\.(?:css|less|sass|scss|styl|stylus)$/ },
			handler(_code, id) {
				throw new Error(`CSS file "${id}" was encountered but \`@tsdown/css\` is not installed. Please install it: \`npm install @tsdown/css\``);
			}
		}
	};
}
//#endregion
//#region src/features/shortcuts.ts
function shortcuts(restart) {
	let actionRunning = false;
	async function onInput(input) {
		if (actionRunning) return;
		input = input.trim().toLowerCase();
		const SHORTCUTS = [
			{
				key: "r",
				description: "reload config and rebuild",
				action() {
					restart();
				}
			},
			{
				key: "c",
				description: "clear console",
				action() {
					console.clear();
				}
			},
			{
				key: "q",
				description: "quit",
				action() {
					process.exit(0);
				}
			}
		];
		if (input === "h") {
			const loggedKeys = /* @__PURE__ */ new Set();
			globalLogger.info("  Shortcuts");
			for (const shortcut of SHORTCUTS) {
				if (loggedKeys.has(shortcut.key)) continue;
				loggedKeys.add(shortcut.key);
				if (shortcut.action == null) continue;
				globalLogger.info(dim`  press ` + bold`${shortcut.key} + enter` + dim` to ${shortcut.description}`);
			}
			return;
		}
		const shortcut = SHORTCUTS.find((shortcut) => shortcut.key === input);
		if (!shortcut) return;
		actionRunning = true;
		await shortcut.action();
		actionRunning = false;
	}
	const rl = readline.createInterface({ input: process.stdin });
	rl.on("line", onInput);
	return () => rl.close();
}
//#endregion
//#region src/build.ts
var build_exports = /* @__PURE__ */ __exportAll({
	build: () => build$1,
	buildWithConfigs: () => buildWithConfigs
});
const asyncDispose = Symbol.asyncDispose || Symbol.for("Symbol.asyncDispose");
/**
* Build with tsdown.
*/
async function build$1(inlineConfig = {}) {
	globalLogger.level = inlineConfig.logLevel || "info";
	const { configs, deps: configDeps } = await resolveConfig(inlineConfig);
	return buildWithConfigs(configs, configDeps, () => build$1(inlineConfig));
}
/**
* Build with `ResolvedConfigs`.
*
* **Internal API, not for public use**
* @private
*/
async function buildWithConfigs(configs, configDeps, _restart) {
	let cleanPromise;
	const clean = () => {
		if (cleanPromise) return cleanPromise;
		return cleanPromise = cleanOutDir(configs);
	};
	const disposeCbs = [];
	let restarting = false;
	async function restart() {
		if (restarting) return;
		restarting = true;
		await Promise.all(disposeCbs.map((cb) => cb()));
		clearRequireCache();
		_restart();
	}
	const configChunksByPkg = initBundleByPkg(configs);
	function done(bundle) {
		return bundleDone(configChunksByPkg, bundle);
	}
	globalLogger.info("Build start");
	const bundles = await Promise.all(configs.map((options) => {
		return buildSingle(options, configDeps, options.pkg ? configChunksByPkg[options.pkg.packageJsonPath].formats.size > 1 : true, clean, restart, done);
	}));
	const firstDevtoolsConfig = configs.find((config) => config.devtools && config.devtools.ui);
	if (configs.some((config) => config.watch)) {
		disposeCbs.push(shortcuts(restart));
		for (const bundle of bundles) disposeCbs.push(bundle[asyncDispose]);
	} else if (firstDevtoolsConfig) startDevtoolsUI(firstDevtoolsConfig.devtools);
	return bundles;
}
/**
* Build a single configuration, without watch and shortcuts features.
* @param config Resolved options
*/
async function buildSingle(config, configDeps, isDualFormat, clean, restart, done) {
	const { format, dts, watch: watch$1, logger, outDir } = config;
	const { hooks, context } = await createHooks(config);
	warnLegacyCJS(config);
	const startTime = performance.now();
	await hooks.callHook("build:prepare", context);
	await clean();
	const debugRolldownConfigDir = await getDebugRolldownDir();
	const chunks = [];
	let watcher;
	let ab;
	const debouncedPostBuild = debounce(() => {
		postBuild().catch((error) => logger.error(error));
	}, 100);
	let hasBuilt = false;
	const bundle = {
		chunks,
		config,
		inlinedDeps: /* @__PURE__ */ new Map(),
		async [asyncDispose]() {
			debouncedPostBuild.cancel();
			ab?.abort();
			await watcher?.close();
		}
	};
	const configs = await initBuildOptions();
	if (watch$1) {
		watcher = watch(configs);
		handleWatcher(watcher);
	} else {
		const outputs = await build(configs);
		for (const { output } of outputs) chunks.push(...addOutDirToChunks(output, outDir));
	}
	if (!watch$1) {
		logger.success(config.nameLabel, `Build complete in ${green(`${Math.round(performance.now() - startTime)}ms`)}`);
		await postBuild();
	}
	return bundle;
	function handleWatcher(watcher) {
		const changedFile = [];
		let hasError = false;
		watcher.on("change", async (id, event) => {
			if (event.event === "update") {
				changedFile.push(id);
				debouncedPostBuild.cancel();
				ab?.abort();
			}
			if (configDeps.has(id) || endsWithConfig.test(id)) {
				globalLogger.info(`Reload config: ${id}, restarting...`);
				restart();
			}
			if ((event.event === "create" || event.event === "delete") && config.rawEntry && isGlobEntry(config.rawEntry)) {
				const [newEntry] = await toObjectEntry(config.rawEntry, config.cwd);
				if (Object.keys(config.entry).toSorted().join("\0") !== Object.keys(newEntry).toSorted().join("\0")) {
					globalLogger.info("Entry files changed, restarting...");
					restart();
				}
			}
		});
		watcher.on("event", async (event) => {
			switch (event.code) {
				case "START":
					debouncedPostBuild.cancel();
					if (config.clean.length) await cleanChunks(config.outDir, chunks);
					chunks.length = 0;
					hasError = false;
					break;
				case "END":
					if (!hasError) debouncedPostBuild();
					break;
				case "BUNDLE_START":
					if (changedFile.length) {
						logger.clearScreen("info");
						logger.info(`Found ${bold(changedFile.join(", "))} changed, rebuilding...`);
					}
					changedFile.length = 0;
					break;
				case "BUNDLE_END":
					await event.result.close();
					logger.success(config.nameLabel, `Rebuilt in ${event.duration}ms.`);
					break;
				case "ERROR":
					await event.result.close();
					logger.error(event.error);
					hasError = true;
					break;
			}
		});
	}
	async function initBuildOptions() {
		const buildOptions = await getBuildOptions(config, format, configDeps, bundle, false, isDualFormat);
		await hooks.callHook("build:before", {
			...context,
			buildOptions
		});
		if (debugRolldownConfigDir) await debugBuildOptions(debugRolldownConfigDir, config.name, format, buildOptions);
		const configs = [buildOptions];
		if (format === "cjs" && dts && (!isDualFormat || !dts.cjsReexport)) configs.push(await getBuildOptions(config, format, configDeps, bundle, true, isDualFormat));
		return configs;
	}
	async function postBuild() {
		await copy(config);
		await buildExe(config, chunks);
		if (!hasBuilt) await done(bundle);
		await hooks.callHook("build:done", {
			...context,
			chunks
		});
		hasBuilt = true;
		ab?.abort();
		ab = executeOnSuccess(config);
	}
}
//#endregion
export { buildWithConfigs as n, build_exports as r, build$1 as t };
