'use strict';

var os = require('node:os');
var stdEnv = require('std-env');
var vite = require('vite');

// if changed, update also jsdocs and docs
const defaultBrowserPort = 63315;
const extraInlineDeps = [
	/^(?!.*node_modules).*\.mjs$/,
	/^(?!.*node_modules).*\.cjs\.js$/,
	/vite\w*\/dist\/client\/env.mjs/
];

const isNode = typeof process < "u" && typeof process.stdout < "u" && !process.versions?.deno && !globalThis.window;
const isDeno = typeof process < "u" && typeof process.stdout < "u" && process.versions?.deno !== void 0;
(isNode || isDeno) && process.platform === "win32";
(isNode || isDeno) && process.stdout?.isTTY && !stdEnv.isCI;

const defaultInclude = ["**/*.{test,spec}.?(c|m)[jt]s?(x)"];
const defaultExclude = [
	"**/node_modules/**",
	"**/dist/**",
	"**/cypress/**",
	"**/.{idea,git,cache,output,temp}/**",
	"**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,eslint,prettier}.config.*"
];
const defaultCoverageExcludes = [
	"coverage/**",
	"dist/**",
	"**/node_modules/**",
	"**/[.]**",
	"packages/*/test?(s)/**",
	"**/*.d.ts",
	"**/virtual:*",
	"**/__x00__*",
	"**/\0*",
	"cypress/**",
	"test?(s)/**",
	"test?(-*).?(c|m)[jt]s?(x)",
	"**/*{.,-}{test,spec,bench,benchmark}?(-d).?(c|m)[jt]s?(x)",
	"**/__tests__/**",
	"**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,eslint,prettier}.config.*",
	"**/vitest.{workspace,projects}.[jt]s?(on)",
	"**/.{eslint,mocha,prettier}rc.{?(c|m)js,yml}"
];
// These are the generic defaults for coverage. Providers may also set some provider specific defaults.
const coverageConfigDefaults = {
	provider: "v8",
	enabled: false,
	all: true,
	clean: true,
	cleanOnRerun: true,
	reportsDirectory: "./coverage",
	exclude: defaultCoverageExcludes,
	reportOnFailure: false,
	reporter: [
		["text", {}],
		["html", {}],
		["clover", {}],
		["json", {}]
	],
	extension: [
		".js",
		".cjs",
		".mjs",
		".ts",
		".mts",
		".tsx",
		".jsx",
		".vue",
		".svelte",
		".marko",
		".astro"
	],
	allowExternal: false,
	excludeAfterRemap: false,
	ignoreEmptyLines: true,
	processingConcurrency: Math.min(20, os.availableParallelism?.() ?? os.cpus().length)
};
const fakeTimersDefaults = {
	loopLimit: 1e4,
	shouldClearNativeTimers: true
};
const configDefaults = Object.freeze({
	allowOnly: !stdEnv.isCI,
	isolate: true,
	watch: !stdEnv.isCI && process.stdin.isTTY,
	globals: false,
	environment: "node",
	pool: "forks",
	clearMocks: false,
	restoreMocks: false,
	mockReset: false,
	unstubGlobals: false,
	unstubEnvs: false,
	include: defaultInclude,
	exclude: defaultExclude,
	teardownTimeout: 1e4,
	forceRerunTriggers: ["**/package.json/**", "**/{vitest,vite}.config.*/**"],
	update: false,
	reporters: [],
	silent: false,
	hideSkippedTests: false,
	api: false,
	ui: false,
	uiBase: "/__vitest__/",
	open: !stdEnv.isCI,
	css: { include: [] },
	coverage: coverageConfigDefaults,
	fakeTimers: fakeTimersDefaults,
	maxConcurrency: 5,
	dangerouslyIgnoreUnhandledErrors: false,
	typecheck: {
		checker: "tsc",
		include: ["**/*.{test,spec}-d.?(c|m)[jt]s?(x)"],
		exclude: defaultExclude
	},
	slowTestThreshold: 300,
	disableConsoleIntercept: false
});

function defineConfig(config) {
	return config;
}
function defineProject(config) {
	return config;
}
/**
* @deprecated use the `projects` field in the root config instead
*/
function defineWorkspace(config) {
	return config;
}

Object.defineProperty(exports, "mergeConfig", {
  enumerable: true,
  get: function () { return vite.mergeConfig; }
});
exports.configDefaults = configDefaults;
exports.coverageConfigDefaults = coverageConfigDefaults;
exports.defaultBrowserPort = defaultBrowserPort;
exports.defaultExclude = defaultExclude;
exports.defaultInclude = defaultInclude;
exports.defineConfig = defineConfig;
exports.defineProject = defineProject;
exports.defineWorkspace = defineWorkspace;
exports.extraInlineDeps = extraInlineDeps;
