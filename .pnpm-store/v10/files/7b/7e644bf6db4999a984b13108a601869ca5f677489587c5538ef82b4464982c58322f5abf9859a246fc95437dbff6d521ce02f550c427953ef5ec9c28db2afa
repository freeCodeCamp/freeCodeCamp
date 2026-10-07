import nodeos__default from 'node:os';
import './env.D4Lgay0q.js';
import { isCI } from 'std-env';

const defaultInclude = ["**/*.{test,spec}.?(c|m)[jt]s?(x)"];
const defaultExclude = [
	"**/node_modules/**",
	"**/dist/**",
	"**/cypress/**",
	"**/.{idea,git,cache,output,temp}/**",
	"**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,eslint,prettier}.config.*"
];
const benchmarkConfigDefaults = {
	include: ["**/*.{bench,benchmark}.?(c|m)[jt]s?(x)"],
	exclude: defaultExclude,
	includeSource: [],
	reporters: ["default"],
	includeSamples: false
};
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
	processingConcurrency: Math.min(20, nodeos__default.availableParallelism?.() ?? nodeos__default.cpus().length)
};
const fakeTimersDefaults = {
	loopLimit: 1e4,
	shouldClearNativeTimers: true
};
const configDefaults = Object.freeze({
	allowOnly: !isCI,
	isolate: true,
	watch: !isCI && process.stdin.isTTY,
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
	disableConsoleIntercept: false
});

export { coverageConfigDefaults as a, defaultInclude as b, configDefaults as c, defaultExclude as d, benchmarkConfigDefaults as e };
