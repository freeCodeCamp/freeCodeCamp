'use strict';

var os = require('node:os');
var stdEnv = require('std-env');
var vite = require('vite');

const isNode = typeof process < "u" && typeof process.stdout < "u" && !process.versions?.deno && !globalThis.window;
const isDeno = typeof process < "u" && typeof process.stdout < "u" && process.versions?.deno !== void 0;
(isNode || isDeno) && process.platform === "win32";
(isNode || isDeno) && process.stdout?.isTTY && !stdEnv.isCI;

// if changed, update also jsdocs and docs
const defaultBrowserPort = 63315;

const defaultInclude = ["**/*.{test,spec}.?(c|m)[jt]s?(x)"];
const defaultExclude = ["**/node_modules/**", "**/.git/**"];
// These are the generic defaults for coverage. Providers may also set some provider specific defaults.
const coverageConfigDefaults = {
	provider: "v8",
	enabled: false,
	clean: true,
	cleanOnRerun: true,
	reportsDirectory: "./coverage",
	exclude: [],
	reportOnFailure: false,
	reporter: [
		"text",
		"html",
		"clover",
		"json"
	],
	allowExternal: false,
	excludeAfterRemap: false,
	processingConcurrency: Math.min(20, os.availableParallelism?.() ?? os.cpus().length),
	ignoreClassMethods: [],
	skipFull: false,
	watermarks: {
		statements: [50, 80],
		functions: [50, 80],
		branches: [50, 80],
		lines: [50, 80]
	}
};
const fakeTimersDefaults = {
	loopLimit: 1e4,
	shouldClearNativeTimers: true
};
const configDefaults = Object.freeze({
	allowOnly: !stdEnv.isCI,
	isolate: true,
	watch: !stdEnv.isCI && process.stdin.isTTY && !stdEnv.isAgent,
	globals: false,
	environment: "node",
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
	disableConsoleIntercept: false,
	detectAsyncLeaks: false
});

function defineConfig(config) {
	return config;
}
function defineProject(config) {
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
