import nodeos__default from 'node:os';
import './env.D4Lgay0q.js';
import { isCI, isAgent } from 'std-env';

const defaultInclude = ["**/*.{test,spec}.?(c|m)[jt]s?(x)"];
const defaultExclude = ["**/node_modules/**", "**/.git/**"];
const benchmarkConfigDefaults = {
	include: ["**/*.{bench,benchmark}.?(c|m)[jt]s?(x)"],
	exclude: defaultExclude,
	includeSource: [],
	reporters: ["default"],
	includeSamples: false
};
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
	processingConcurrency: Math.min(20, nodeos__default.availableParallelism?.() ?? nodeos__default.cpus().length),
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
	allowOnly: !isCI,
	isolate: true,
	watch: !isCI && process.stdin.isTTY && !isAgent,
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
	open: !isCI,
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

export { coverageConfigDefaults as a, defaultInclude as b, configDefaults as c, defaultExclude as d, benchmarkConfigDefaults as e };
