#!/usr/bin/env node
import { createRequire as __cjs_createRequire } from "node:module";
const __cjs_require = __cjs_createRequire(import.meta.url);
import { a as globalLogger } from "./logger-uV8l1UFa.mjs";
import { t as version } from "./package-GYPjxY9U.mjs";
import { t as enableDebug } from "./debug-CLlnG64L.mjs";
import module from "node:module";
import process from "node:process";
import { blue, hex, yellow } from "ansis";
import { x } from "tinyexec";
import { VERSION } from "rolldown";
const lt = __cjs_require("semver/functions/lt.js");
import { cac } from "cac";
//#region src/cli.ts
const cli = cac("tsdown");
cli.help().version(version);
cli.command("[...files]", "Bundle files", {
	ignoreOptionDefaultValue: true,
	allowUnknownOptions: true
}).option("-c, --config <filename>", "Use a custom config file").option("--config-loader <loader>", "Config loader to use: auto, native, unrun", { default: "auto" }).option("--no-config", "Disable config file").option("-f, --format <format>", "Bundle format: esm, cjs, iife, umd", { default: "esm" }).option("--clean", "Clean output directory, --no-clean to disable").option("--deps.never-bundle <module>", "Mark dependencies as external").option("--minify", "Minify output").option("--devtools", "Enable devtools integration").option("--debug [feat]", "Show debug logs").option("--target <target>", "Bundle target, e.g \"es2015\", \"esnext\"").option("-l, --logLevel <level>", "Set log level: info, warn, error, silent").option("--fail-on-warn", "Fail on warnings", { default: true }).option("--no-write", "Disable writing files to disk, incompatible with watch mode").option("-d, --out-dir <dir>", "Output directory", { default: "dist" }).option("--treeshake", "Tree-shake bundle", { default: true }).option("--sourcemap", "Generate source map", { default: false }).option("--shims", "Enable cjs and esm shims ", { default: false }).option("--platform <platform>", "Target platform", { default: "node" }).option("--dts", "Generate dts files").option("--publint", "Enable publint", { default: false }).option("--attw", "Enable Are the types wrong integration", { default: false }).option("--unused", "Enable unused dependencies check", { default: false }).option("-w, --watch [path]", "Watch mode").option("--ignore-watch <path>", "Ignore custom paths in watch mode").option("--from-vite [vitest]", "Reuse config from Vite or Vitest").option("--report", "Size report", { default: true }).option("--env.* <value>", "Define compile-time env variables").option("--env-file <file>", "Load environment variables from a file, when used together with --env, variables in --env take precedence").option("--env-prefix <prefix>", "Prefix for env variables to inject into the bundle", { default: "TSDOWN_" }).option("--on-success <command>", "Command to run on success").option("--copy <dir>", "Copy files to output dir").option("--public-dir <dir>", "Alias for --copy, deprecated").option("--tsconfig <tsconfig>", "Set tsconfig path").option("--unbundle", "Unbundle mode").option("--root <dir>", "Root directory of input files").option("--exe", "Bundle as executable").option("-W, --workspace [dir]", "Enable workspace mode").option("-F, --filter <pattern>", "Filter configs (cwd or name), e.g. /pkg-name$/ or pkg-name").option("--exports", "Generate export-related metadata for package.json (experimental)").action(async (input, flags) => {
	globalLogger.level = flags.logLevel || "info";
	globalLogger.info(`${blue`tsdown v${version}`} powered by ${hex("#ff7e17")`rolldown v${VERSION}`}`);
	const { build } = await import("./build-CgGnBlCD.mjs").then((n) => n.r);
	if (input.length > 0) flags.entry = input;
	await build(flags);
});
cli.command("create", "[deprecated] Create a tsdown project. Use \"npx create-tsdown\" instead.", { allowUnknownOptions: true }).action(async () => {
	globalLogger.warn(`"tsdown create" is deprecated. Please use "npx create-tsdown" instead.`);
	const { exitCode } = await x("npx", [
		"-y",
		"create-tsdown@latest",
		...process.argv.slice(3)
	], { nodeOptions: { stdio: "inherit" } });
	process.exitCode = exitCode;
});
cli.command("migrate", "[deprecated] Migrate from tsup to tsdown. Use \"npx tsdown-migrate\" instead.", { allowUnknownOptions: true }).action(async () => {
	globalLogger.warn(`"tsdown migrate" is deprecated. Please use "npx tsdown-migrate" instead.`);
	const { exitCode } = await x("npx", [
		"-y",
		"tsdown-migrate@latest",
		...process.argv.slice(3)
	], { nodeOptions: { stdio: "inherit" } });
	process.exitCode = exitCode;
});
async function runCLI() {
	cli.parse(process.argv, { run: false });
	enableDebug(cli.options.debug);
	try {
		await cli.runMatchedCommand();
	} catch (error) {
		globalLogger.error(String(error.stack || error.message));
		process.exit(1);
	}
}
//#endregion
//#region src/run.ts
if (!process.versions.bun && lt(process.version, "22.18.0")) console.warn(yellow`[tsdown] Node.js ${process.version} is deprecated. Support will be removed in the next minor release. Please upgrade to Node.js v22.18.0 or later.`);
try {
	module.enableCompileCache?.();
} catch {}
runCLI();
//#endregion
export {};
