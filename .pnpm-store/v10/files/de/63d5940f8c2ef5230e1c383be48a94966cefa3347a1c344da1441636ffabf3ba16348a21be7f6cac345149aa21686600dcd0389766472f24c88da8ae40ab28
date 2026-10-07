import { existsSync, promises, readdirSync, writeFileSync } from 'node:fs';
import module$1 from 'node:module';
import path from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { slash, shuffle, toArray, cleanUrl } from '@vitest/utils/helpers';
import { resolve, relative, normalize, join } from 'pathe';
import pm from 'picomatch';
import { glob } from 'tinyglobby';
import c from 'tinyrainbow';
import { c as configDefaults, e as benchmarkConfigDefaults, a as coverageConfigDefaults } from './defaults.9aQKnqFk.js';
import crypto from 'node:crypto';
import { r as resolveModule } from './index.BCY_7LL2.js';
import { mergeConfig } from 'vite';
import { c as configFiles, d as defaultBrowserPort, a as defaultInspectPort, b as defaultPort } from './constants.CPYnjOGj.js';
import './env.D4Lgay0q.js';
import nodeos__default from 'node:os';
import { w as withLabel } from './utils.BS4fH3nR.js';
import { isAgent, isCI, provider } from 'std-env';
import { r as resolveCoverageProviderModule } from './coverage.CTzCuANN.js';

const hash = crypto.hash ?? ((algorithm, data, outputEncoding) => crypto.createHash(algorithm).update(data).digest(outputEncoding));

function getWorkersCountByPercentage(percent) {
	const maxWorkersCount = nodeos__default.availableParallelism?.() ?? nodeos__default.cpus().length;
	const workersCountByPercentage = Math.round(Number.parseInt(percent) / 100 * maxWorkersCount);
	return Math.max(1, Math.min(maxWorkersCount, workersCountByPercentage));
}

class BaseSequencer {
	ctx;
	constructor(ctx) {
		this.ctx = ctx;
	}
	// async so it can be extended by other sequencers
	async shard(files) {
		const { config } = this.ctx;
		const { index, count } = config.shard;
		const [shardStart, shardEnd] = this.calculateShardRange(files.length, index, count);
		return [...files].map((spec) => {
			const specPath = resolve(slash(config.root), slash(spec.moduleId))?.slice(config.root.length);
			return {
				spec,
				hash: hash("sha1", specPath, "hex")
			};
		}).sort((a, b) => a.hash < b.hash ? -1 : a.hash > b.hash ? 1 : 0).slice(shardStart, shardEnd).map(({ spec }) => spec);
	}
	// async so it can be extended by other sequencers
	async sort(files) {
		const cache = this.ctx.cache;
		return [...files].sort((a, b) => {
			// "sequence.groupOrder" is higher priority
			const groupOrderDiff = a.project.config.sequence.groupOrder - b.project.config.sequence.groupOrder;
			if (groupOrderDiff !== 0) return groupOrderDiff;
			// Projects run sequential
			if (a.project.name !== b.project.name) return a.project.name < b.project.name ? -1 : 1;
			// Isolated run first
			if (a.project.config.isolate && !b.project.config.isolate) return -1;
			if (!a.project.config.isolate && b.project.config.isolate) return 1;
			const keyA = `${a.project.name}:${relative(this.ctx.config.root, a.moduleId)}`;
			const keyB = `${b.project.name}:${relative(this.ctx.config.root, b.moduleId)}`;
			const aState = cache.getFileTestResults(keyA);
			const bState = cache.getFileTestResults(keyB);
			if (!aState || !bState) {
				const statsA = cache.getFileStats(keyA);
				const statsB = cache.getFileStats(keyB);
				// run unknown first
				if (!statsA || !statsB) return !statsA && statsB ? -1 : !statsB && statsA ? 1 : 0;
				// run larger files first
				return statsB.size - statsA.size;
			}
			// run failed first
			if (aState.failed && !bState.failed) return -1;
			if (!aState.failed && bState.failed) return 1;
			// run longer first
			return bState.duration - aState.duration;
		});
	}
	// Calculate distributed shard range [start, end] distributed equally
	calculateShardRange(filesCount, index, count) {
		const baseShardSize = Math.floor(filesCount / count);
		const remainderTestFilesCount = filesCount % count;
		if (remainderTestFilesCount >= index) {
			const shardSize = baseShardSize + 1;
			return [shardSize * (index - 1), shardSize * index];
		}
		const shardStart = remainderTestFilesCount * (baseShardSize + 1) + (index - remainderTestFilesCount - 1) * baseShardSize;
		return [shardStart, shardStart + baseShardSize];
	}
}

class RandomSequencer extends BaseSequencer {
	async sort(files) {
		const { sequence } = this.ctx.config;
		return shuffle(files, sequence.seed);
	}
}

function resolvePath(path, root) {
	// local-pkg (mlly)'s resolveModule("./file", { paths: ["/some/root"] }) tries
	// /some/file
	// /some/file.js
	// /some/root/file
	// /some/root/file.js
	// etc.
	// but we don't want to resolve files from parent directories,
	// so we ensure passing "/" suffix such as "/some/root/"
	// https://github.com/unjs/mlly/blob/401d42983f6f3a9112658d67b0a92ba4fb1d7efa/src/resolve.ts#L104-L110
	return normalize(/* @__PURE__ */ resolveModule(path, { paths: [join(root, "/")] }) ?? resolve(root, path));
}
function parseInspector(inspect) {
	if (typeof inspect === "boolean" || inspect === void 0) return {};
	if (typeof inspect === "number") return { port: inspect };
	if (inspect.match(/https?:\//)) throw new Error(`Inspector host cannot be a URL. Use "host:port" instead of "${inspect}"`);
	const [host, port] = inspect.split(":");
	if (!port) return { host };
	return {
		host,
		port: Number(port) || defaultInspectPort
	};
}
/**
* @deprecated Internal function
*/
function resolveApiServerConfig(options, defaultPort, parentApi, logger) {
	let api;
	if (options.ui && !options.api) api = { port: defaultPort };
	else if (options.api === true) api = { port: defaultPort };
	else if (typeof options.api === "number") api = { port: options.api };
	if (typeof options.api === "object") if (api) {
		if (options.api.port) api.port = options.api.port;
		if (options.api.strictPort) api.strictPort = options.api.strictPort;
		if (options.api.host) api.host = options.api.host;
	} else api = { ...options.api };
	if (api) {
		if (!api.port && !api.middlewareMode) api.port = defaultPort;
	} else api = { middlewareMode: true };
	// if the API server is exposed to network, disable write operations by default
	if (!api.middlewareMode && api.host && api.host !== "localhost" && api.host !== "127.0.0.1") {
		// assigned to browser
		if (parentApi) {
			if (api.allowWrite == null && api.allowExec == null) logger?.error(c.yellow(`${c.yellowBright(" WARNING ")} API server is exposed to network, disabling write and exec operations by default for security reasons. This can cause some APIs to not work as expected. Set \`browser.api.allowExec\` manually to hide this warning. See https://vitest.dev/config/browser/api for more details.`));
		}
		api.allowWrite ??= parentApi?.allowWrite ?? false;
		api.allowExec ??= parentApi?.allowExec ?? false;
	} else {
		api.allowWrite ??= parentApi?.allowWrite ?? true;
		api.allowExec ??= parentApi?.allowExec ?? true;
	}
	return api;
}
function resolveInlineWorkerOption(value) {
	if (typeof value === "string" && value.trim().endsWith("%")) return getWorkersCountByPercentage(value);
	else return Number(value);
}
function resolveConfig$1(vitest, options, viteConfig) {
	const mode = vitest.mode;
	const logger = vitest.logger;
	if (options.dom) {
		if (viteConfig.test?.environment != null && viteConfig.test.environment !== "happy-dom") logger.console.warn(withLabel("yellow", "Vitest", `Your config.test.environment ("${viteConfig.test.environment}") conflicts with --dom flag ("happy-dom"), ignoring "${viteConfig.test.environment}"`));
		options.environment = "happy-dom";
	}
	const resolved = {
		...configDefaults,
		...options,
		root: viteConfig.root,
		mode
	};
	if (resolved.retry && typeof resolved.retry === "object" && typeof resolved.retry.condition === "function") {
		logger.console.warn(c.yellow("Warning: retry.condition function cannot be used inside a config file. Use a RegExp pattern instead, or define the function in your test file."));
		resolved.retry = {
			...resolved.retry,
			condition: void 0
		};
	}
	if (options.pool && typeof options.pool !== "string") {
		resolved.pool = options.pool.name;
		resolved.poolRunner = options.pool;
	}
	if ("poolOptions" in resolved) logger.deprecate("`test.poolOptions` was removed in Vitest 4. All previous `poolOptions` are now top-level options. Please, refer to the migration guide: https://vitest.dev/guide/migration#pool-rework");
	resolved.pool ??= "forks";
	resolved.project = toArray(resolved.project);
	resolved.provide ??= {};
	// shallow copy tags array to avoid mutating user config
	resolved.tags = [...resolved.tags || []];
	const definedTags = /* @__PURE__ */ new Set();
	resolved.tags.forEach((tag) => {
		if (!tag.name || typeof tag.name !== "string") throw new Error(`Each tag defined in "test.tags" must have a "name" property, received: ${JSON.stringify(tag)}`);
		if (definedTags.has(tag.name)) throw new Error(`Tag name "${tag.name}" is already defined in "test.tags". Tag names must be unique.`);
		if (tag.name.match(/\s/)) throw new Error(`Tag name "${tag.name}" is invalid. Tag names cannot contain spaces.`);
		if (tag.name.match(/([!()*|&])/)) throw new Error(`Tag name "${tag.name}" is invalid. Tag names cannot contain "!", "*", "&", "|", "(", or ")".`);
		if (tag.name.match(/^\s*(and|or|not)\s*$/i)) throw new Error(`Tag name "${tag.name}" is invalid. Tag names cannot be a logical operator like "and", "or", "not".`);
		if (typeof tag.retry === "object" && typeof tag.retry.condition === "function") throw new TypeError(`Tag "${tag.name}": retry.condition function cannot be used inside a config file. Use a RegExp pattern instead, or define the function in your test file.`);
		if (tag.priority != null && (typeof tag.priority !== "number" || tag.priority < 0)) throw new TypeError(`Tag "${tag.name}": priority must be a non-negative number.`);
		definedTags.add(tag.name);
	});
	resolved.name = typeof options.name === "string" ? options.name : options.name?.label || "";
	resolved.color = typeof options.name !== "string" ? options.name?.color : void 0;
	if (resolved.environment === "browser") throw new Error(`Looks like you set "test.environment" to "browser". To enable Browser Mode, use "test.browser.enabled" instead.`);
	const inspector = resolved.inspect || resolved.inspectBrk;
	resolved.inspector = {
		...resolved.inspector,
		...parseInspector(inspector),
		enabled: !!inspector,
		waitForDebugger: options.inspector?.waitForDebugger ?? !!resolved.inspectBrk
	};
	if (viteConfig.base !== "/") resolved.base = viteConfig.base;
	resolved.clearScreen = resolved.clearScreen ?? viteConfig.clearScreen ?? true;
	if (options.shard) {
		if (resolved.watch) throw new Error("You cannot use --shard option with enabled watch");
		const [indexString, countString] = options.shard.split("/");
		const index = Math.abs(Number.parseInt(indexString, 10));
		const count = Math.abs(Number.parseInt(countString, 10));
		if (Number.isNaN(count) || count <= 0) throw new Error("--shard <count> must be a positive number");
		if (Number.isNaN(index) || index <= 0 || index > count) throw new Error("--shard <index> must be a positive number less then <count>");
		resolved.shard = {
			index,
			count
		};
	}
	if (resolved.standalone && !resolved.watch) throw new Error(`Vitest standalone mode requires --watch`);
	if (resolved.mergeReports && resolved.watch) throw new Error(`Cannot merge reports with --watch enabled`);
	if (resolved.maxWorkers) resolved.maxWorkers = resolveInlineWorkerOption(resolved.maxWorkers);
	if (!(options.fileParallelism ?? mode !== "benchmark"))
 // ignore user config, parallelism cannot be implemented without limiting workers
	resolved.maxWorkers = 1;
	if (resolved.maxConcurrency === 0) {
		logger.console.warn(c.yellow(`The option "maxConcurrency" cannot be set to 0. Using default value ${configDefaults.maxConcurrency} instead.`));
		resolved.maxConcurrency = configDefaults.maxConcurrency;
	}
	if (resolved.inspect || resolved.inspectBrk) {
		if (resolved.maxWorkers !== 1) {
			const inspectOption = `--inspect${resolved.inspectBrk ? "-brk" : ""}`;
			throw new Error(`You cannot use ${inspectOption} without "--no-file-parallelism"`);
		}
	}
	// apply browser CLI options only if the config already has the browser config and not disabled manually
	if (vitest._cliOptions.browser && resolved.browser && (resolved.browser.enabled !== false || vitest._cliOptions.browser.enabled)) resolved.browser = mergeConfig(resolved.browser, vitest._cliOptions.browser);
	resolved.browser ??= {};
	const browser = resolved.browser;
	if (browser.enabled) {
		const instances = browser.instances;
		if (!browser.instances) browser.instances = [];
		// use `chromium` by default when the preview provider is specified
		// for a smoother experience. if chromium is not available, it will
		// open the default browser anyway
		if (!browser.instances.length && browser.provider?.name === "preview") browser.instances = [{ browser: "chromium" }];
		if (browser.name && instances?.length) {
			// --browser=chromium filters configs to a single one
			browser.instances = browser.instances.filter((instance) => instance.browser === browser.name);
			// if `instances` were defined, but now they are empty,
			// let's throw an error because the filter is invalid
			if (!browser.instances.length) throw new Error([`"browser.instances" was set in the config, but the array is empty. Define at least one browser config.`, ` The "browser.name" was set to "${browser.name}" which filtered all configs (${instances.map((c) => c.browser).join(", ")}). Did you mean to use another name?`].join(""));
		}
	}
	if (resolved.coverage.enabled && resolved.coverage.provider === "istanbul" && resolved.experimental?.viteModuleRunner === false) throw new Error(`"Istanbul" coverage provider is not compatible with "experimental.viteModuleRunner: false". Please, enable "viteModuleRunner" or switch to "v8" coverage provider.`);
	if (browser.enabled && resolved.detectAsyncLeaks) logger.console.warn(c.yellow("The option \"detectAsyncLeaks\" is not supported in browser mode and will be ignored."));
	const containsChromium = hasBrowserChromium(vitest, resolved);
	const hasOnlyChromium = hasOnlyBrowserChromium(vitest, resolved);
	// Browser-mode "Chromium" only features:
	if (browser.enabled && (!containsChromium || !hasOnlyChromium)) {
		const browserConfig = `
{
  browser: {
    provider: ${browser.provider?.name || "preview"}(),
    instances: [
      ${(browser.instances || []).map((i) => `{ browser: '${i.browser}' }`).join(",\n      ")}
    ],
  },
}
    `.trim();
		const preferredProvider = !browser.provider?.name || browser.provider.name === "preview" ? "playwright" : browser.provider.name;
		const correctExample = `
{
  browser: {
    provider: ${preferredProvider}(),
    instances: [
      { browser: '${preferredProvider === "playwright" ? "chromium" : "chrome"}' }
    ],
  },
}
    `.trim();
		// requires all projects to be chromium
		if (!hasOnlyChromium && resolved.coverage.enabled && resolved.coverage.provider === "v8") {
			const coverageExample = `
{
  coverage: {
    provider: 'istanbul',
  },
}
      `.trim();
			throw new Error(`@vitest/coverage-v8 does not work with\n${browserConfig}\n\nUse either:\n${correctExample}\n\n...or change your coverage provider to:\n${coverageExample}\n`);
		}
		// ignores non-chromium browsers when there is at least one chromium project
		if (!containsChromium && (resolved.inspect || resolved.inspectBrk)) {
			const inspectOption = `--inspect${resolved.inspectBrk ? "-brk" : ""}`;
			throw new Error(`${inspectOption} does not work with\n${browserConfig}\n\nUse either:\n${correctExample}\n\n...or disable ${inspectOption}\n`);
		}
	}
	resolved.coverage.reporter = resolveCoverageReporters(resolved.coverage.reporter);
	if (isAgent) {
		// default to `skipFull` and add `text-summary` reporter when `text` reporter is used on agents
		const text = resolved.coverage.reporter.find(([name]) => name === "text");
		const textSummary = resolved.coverage.reporter.find(([name]) => name === "text-summary");
		if (text) {
			text[1] = {
				skipFull: true,
				...text[1]
			};
			if (!textSummary) resolved.coverage.reporter.push(["text-summary", {}]);
		}
	}
	if (resolved.coverage.changed === void 0 && resolved.changed !== void 0) resolved.coverage.changed = resolved.changed;
	if (resolved.coverage.enabled && resolved.coverage.reportsDirectory) {
		const reportsDirectory = resolve(resolved.root, resolved.coverage.reportsDirectory);
		if (reportsDirectory === resolved.root || reportsDirectory === process.cwd()) throw new Error(`You cannot set "coverage.reportsDirectory" as ${reportsDirectory}. Vitest needs to be able to remove this directory before test run`);
		if (resolved.coverage.htmlDir) resolved.coverage.htmlDir = resolve(resolved.root, resolved.coverage.htmlDir);
		// infer default htmlDir based on builtin reporter's html output location
		if (!resolved.coverage.htmlDir) {
			const htmlReporter = resolved.coverage.reporter.find(([name]) => name === "html" || name === "html-spa");
			if (htmlReporter) {
				const [, options] = htmlReporter;
				const subdir = options && typeof options === "object" && "subdir" in options && typeof options.subdir === "string" ? options.subdir : void 0;
				resolved.coverage.htmlDir = resolve(reportsDirectory, subdir || ".");
			} else if (resolved.coverage.reporter.find(([name]) => name === "lcov")) resolved.coverage.htmlDir = resolve(reportsDirectory, "lcov-report");
		}
	}
	if (resolved.coverage.enabled && resolved.coverage.provider === "custom" && resolved.coverage.customProviderModule) resolved.coverage.customProviderModule = resolvePath(resolved.coverage.customProviderModule, resolved.root);
	resolved.expect ??= {};
	resolved.deps ??= {};
	resolved.deps.moduleDirectories ??= [];
	resolved.deps.optimizer ??= {};
	resolved.deps.optimizer.ssr ??= {};
	resolved.deps.optimizer.ssr.enabled ??= false;
	resolved.deps.optimizer.client ??= {};
	resolved.deps.optimizer.client.enabled ??= false;
	resolved.deps.web ??= {};
	resolved.deps.web.transformAssets ??= true;
	resolved.deps.web.transformCss ??= true;
	resolved.deps.web.transformGlobPattern ??= [];
	resolved.setupFiles = toArray(resolved.setupFiles || []).map((file) => resolvePath(file, resolved.root));
	resolved.globalSetup = toArray(resolved.globalSetup || []).map((file) => resolvePath(file, resolved.root));
	// Add hard-coded default coverage exclusions. These cannot be overridden by user config.
	// Override original exclude array for cases where user re-uses same object in test.exclude.
	resolved.coverage.exclude = [
		...resolved.coverage.exclude,
		...resolved.setupFiles.map((file) => `${resolved.coverage.allowExternal ? "**/" : ""}${relative(resolved.root, file)}`),
		...resolved.include,
		resolved.config && slash(resolved.config),
		...configFiles,
		"**/virtual:*",
		"**/__x00__*",
		"**/node_modules/**"
	].filter((pattern) => typeof pattern === "string");
	resolved.forceRerunTriggers = [...resolved.forceRerunTriggers, ...resolved.setupFiles];
	if (resolved.cliExclude) resolved.exclude.push(...resolved.cliExclude);
	if (resolved.runner) resolved.runner = resolvePath(resolved.runner, resolved.root);
	resolved.attachmentsDir = resolve(resolved.root, resolved.attachmentsDir ?? ".vitest-attachments");
	if (resolved.snapshotEnvironment) resolved.snapshotEnvironment = resolvePath(resolved.snapshotEnvironment, resolved.root);
	resolved.testNamePattern = resolved.testNamePattern ? resolved.testNamePattern instanceof RegExp ? resolved.testNamePattern : new RegExp(resolved.testNamePattern) : void 0;
	if (resolved.snapshotFormat && "plugins" in resolved.snapshotFormat) {
		resolved.snapshotFormat.plugins = [];
		// TODO: support it via separate config (like DiffOptions) or via `Function.toString()`
		if (typeof resolved.snapshotFormat.compareKeys === "function") throw new TypeError(`"snapshotFormat.compareKeys" function is not supported.`);
	}
	const UPDATE_SNAPSHOT = resolved.update || process.env.UPDATE_SNAPSHOT;
	resolved.snapshotOptions = {
		expand: resolved.expandSnapshotDiff ?? false,
		snapshotFormat: resolved.snapshotFormat || {},
		updateSnapshot: UPDATE_SNAPSHOT === "all" || UPDATE_SNAPSHOT === "new" || UPDATE_SNAPSHOT === "none" ? UPDATE_SNAPSHOT : isCI && !UPDATE_SNAPSHOT ? "none" : UPDATE_SNAPSHOT ? "all" : "new",
		resolveSnapshotPath: options.resolveSnapshotPath,
		snapshotEnvironment: null
	};
	resolved.snapshotSerializers ??= [];
	resolved.snapshotSerializers = resolved.snapshotSerializers.map((file) => resolvePath(file, resolved.root));
	resolved.forceRerunTriggers.push(...resolved.snapshotSerializers);
	if (options.resolveSnapshotPath) delete resolved.resolveSnapshotPath;
	resolved.execArgv ??= [];
	resolved.pool ??= "threads";
	if (resolved.pool === "vmForks" || resolved.pool === "vmThreads" || resolved.pool === "typescript") resolved.isolate = false;
	if (process.env.VITEST_MAX_WORKERS) resolved.maxWorkers = Number.parseInt(process.env.VITEST_MAX_WORKERS);
	if (mode === "benchmark") {
		resolved.benchmark = {
			...benchmarkConfigDefaults,
			...resolved.benchmark
		};
		// override test config
		resolved.coverage.enabled = false;
		resolved.typecheck.enabled = false;
		resolved.include = resolved.benchmark.include;
		resolved.exclude = resolved.benchmark.exclude;
		resolved.includeSource = resolved.benchmark.includeSource;
		const reporters = Array.from(new Set([...toArray(resolved.benchmark.reporters), ...toArray(options.reporter)])).filter(Boolean);
		if (reporters.length) resolved.benchmark.reporters = reporters;
		else resolved.benchmark.reporters = ["default"];
		if (options.outputFile) resolved.benchmark.outputFile = options.outputFile;
		// --compare from cli
		if (options.compare) resolved.benchmark.compare = options.compare;
		if (options.outputJson) resolved.benchmark.outputJson = options.outputJson;
	}
	if (typeof resolved.diff === "string") {
		resolved.diff = resolvePath(resolved.diff, resolved.root);
		resolved.forceRerunTriggers.push(resolved.diff);
	}
	resolved.api = {
		...resolveApiServerConfig(options, defaultPort),
		token: crypto.randomUUID()
	};
	if (options.related) resolved.related = toArray(options.related).map((file) => resolve(resolved.root, file));
	/*
	* Reporters can be defined in many different ways:
	* { reporter: 'json' }
	* { reporter: { onFinish() { method() } } }
	* { reporter: ['json', { onFinish() { method() } }] }
	* { reporter: [[ 'json' ]] }
	* { reporter: [[ 'json' ], 'html'] }
	* { reporter: [[ 'json', { outputFile: 'test.json' } ], 'html'] }
	*/
	if (options.reporters) if (!Array.isArray(options.reporters))
 // Reporter name, e.g. { reporters: 'json' }
	if (typeof options.reporters === "string") resolved.reporters = [[options.reporters, {}]];
	else resolved.reporters = [options.reporters];
	else {
		resolved.reporters = [];
		for (const reporter of options.reporters) if (Array.isArray(reporter))
 // Reporter with options, e.g. { reporters: [ [ 'json', { outputFile: 'test.json' } ] ] }
		resolved.reporters.push([reporter[0], reporter[1] || {}]);
		else if (typeof reporter === "string")
 // Reporter name in array, e.g. { reporters: ["html", "json"]}
		resolved.reporters.push([reporter, {}]);
		else
 // Inline reporter, e.g. { reporter: [{ onFinish() { method() } }] }
		resolved.reporters.push(reporter);
	}
	if (mode !== "benchmark") {
		// @ts-expect-error "reporter" is from CLI, should be absolute to the running directory
		// it is passed down as "vitest --reporter ../reporter.js"
		const reportersFromCLI = resolved.reporter;
		const cliReporters = toArray(reportersFromCLI || []).map((reporter) => {
			// ./reporter.js || ../reporter.js, but not .reporters/reporter.js
			if (/^\.\.?\//.test(reporter)) return resolve(process.cwd(), reporter);
			return reporter;
		});
		if (cliReporters.length) {
			// When CLI reporters are specified, preserve options from config file
			const configReportersMap = /* @__PURE__ */ new Map();
			// Build a map of reporter names to their options from the config
			for (const reporter of resolved.reporters) if (Array.isArray(reporter)) {
				const [reporterName, reporterOptions] = reporter;
				if (typeof reporterName === "string") configReportersMap.set(reporterName, reporterOptions);
			}
			resolved.reporters = Array.from(new Set(toArray(cliReporters))).filter(Boolean).map((reporter) => [reporter, configReportersMap.get(reporter) || {}]);
		}
	}
	if (!resolved.reporters.length) {
		resolved.reporters.push([isAgent ? "agent" : "default", {}]);
		// also enable github-actions reporter as a default
		if (process.env.GITHUB_ACTIONS === "true") resolved.reporters.push(["github-actions", {}]);
	}
	if (resolved.changed) resolved.passWithNoTests ??= true;
	resolved.css ??= {};
	if (typeof resolved.css === "object") {
		resolved.css.modules ??= {};
		resolved.css.modules.classNameStrategy ??= "stable";
	}
	if (resolved.cache !== false) {
		if (resolved.cache && typeof resolved.cache.dir === "string") vitest.logger.deprecate(`"cache.dir" is deprecated, use Vite's "cacheDir" instead if you want to change the cache director. Note caches will be written to "cacheDir\/vitest"`);
		resolved.cache = { dir: viteConfig.cacheDir };
	}
	resolved.sequence ??= {};
	if (resolved.sequence.shuffle && typeof resolved.sequence.shuffle === "object") {
		const { files, tests } = resolved.sequence.shuffle;
		resolved.sequence.sequencer ??= files ? RandomSequencer : BaseSequencer;
		resolved.sequence.shuffle = tests;
	}
	if (!resolved.sequence?.sequencer)
 // CLI flag has higher priority
	resolved.sequence.sequencer = resolved.sequence.shuffle ? RandomSequencer : BaseSequencer;
	resolved.sequence.groupOrder ??= 0;
	resolved.sequence.hooks ??= "stack";
	// Set seed if either files or tests are shuffled
	if (resolved.sequence.sequencer === RandomSequencer || resolved.sequence.shuffle) resolved.sequence.seed ??= Date.now();
	resolved.typecheck = {
		...configDefaults.typecheck,
		...resolved.typecheck
	};
	resolved.typecheck ??= {};
	resolved.typecheck.enabled ??= false;
	if (resolved.typecheck.enabled) logger.console.warn(c.yellow("Testing types with tsc and vue-tsc is an experimental feature.\nBreaking changes might not follow SemVer, please pin Vitest's version when using it."));
	resolved.browser.enabled ??= false;
	resolved.browser.headless ??= isCI;
	if (resolved.browser.isolate) logger.console.warn(c.yellow("`browser.isolate` is deprecated. Use top-level `isolate` instead."));
	resolved.browser.isolate ??= resolved.isolate ?? true;
	resolved.browser.fileParallelism ??= options.fileParallelism ?? mode !== "benchmark";
	// disable in headless mode by default, and if CI is detected
	resolved.browser.ui ??= resolved.browser.headless === true ? false : !isCI;
	resolved.browser.commands ??= {};
	resolved.browser.detailsPanelPosition ??= "right";
	if (resolved.browser.screenshotDirectory) resolved.browser.screenshotDirectory = resolve(resolved.root, resolved.browser.screenshotDirectory);
	if (resolved.inspector.enabled) resolved.browser.trackUnhandledErrors ??= false;
	resolved.browser.viewport ??= {};
	resolved.browser.viewport.width ??= 414;
	resolved.browser.viewport.height ??= 896;
	resolved.browser.locators ??= {};
	resolved.browser.locators.testIdAttribute ??= "data-testid";
	resolved.browser.locators.exact ??= false;
	if (typeof resolved.browser.provider === "string") {
		const source = `@vitest/browser-${resolved.browser.provider}`;
		throw new TypeError(`The \`browser.provider\` configuration was changed to accept a factory instead of a string. Add an import of "${resolved.browser.provider}" from "${source}" instead. See: https://vitest.dev/config/browser/provider`);
	}
	const isPreview = resolved.browser.provider?.name === "preview";
	if (!isPreview && resolved.browser.enabled && provider === "stackblitz") throw new Error(`stackblitz environment does not support the ${resolved.browser.provider?.name} provider. Please, use "@vitest/browser-preview" instead.`);
	if (isPreview && resolved.browser.screenshotFailures === true) {
		console.warn(c.yellow([
			`Browser provider "preview" doesn't support screenshots, `,
			`so "browser.screenshotFailures" option is forcefully disabled. `,
			`Set "browser.screenshotFailures" to false or remove it from the config to suppress this warning.`
		].join("")));
		resolved.browser.screenshotFailures = false;
	} else resolved.browser.screenshotFailures ??= !isPreview && !resolved.browser.ui;
	if (resolved.browser.provider && resolved.browser.provider.options == null) resolved.browser.provider.options = {};
	resolved.browser.api = resolveApiServerConfig(resolved.browser, defaultBrowserPort, resolved.api, logger) || { port: defaultBrowserPort };
	// enable includeTaskLocation by default in UI mode
	if (resolved.browser.enabled) {
		if (resolved.browser.ui) resolved.includeTaskLocation ??= true;
	} else if (resolved.ui) resolved.includeTaskLocation ??= true;
	if (typeof resolved.browser.trace === "string" || !resolved.browser.trace) resolved.browser.trace = { mode: resolved.browser.trace || "off" };
	if (resolved.browser.trace.tracesDir != null) resolved.browser.trace.tracesDir = resolvePath(resolved.browser.trace.tracesDir, resolved.root);
	if (toArray(resolved.reporters).some((reporter) => {
		if (Array.isArray(reporter)) return reporter[0] === "html";
		return false;
	})) resolved.includeTaskLocation ??= true;
	resolved.server ??= {};
	resolved.server.deps ??= {};
	if (resolved.server.debug?.dump || process.env.VITEST_DEBUG_DUMP) {
		const userFolder = resolved.server.debug?.dump || process.env.VITEST_DEBUG_DUMP;
		resolved.dumpDir = resolve(resolved.root, typeof userFolder === "string" && userFolder !== "true" ? userFolder : ".vitest-dump", resolved.name || "root");
	}
	resolved.testTimeout ??= resolved.browser.enabled ? 15e3 : 5e3;
	resolved.hookTimeout ??= resolved.browser.enabled ? 3e4 : 1e4;
	resolved.experimental ??= {};
	if (resolved.experimental.openTelemetry?.sdkPath) {
		const sdkPath = resolve(resolved.root, resolved.experimental.openTelemetry.sdkPath);
		resolved.experimental.openTelemetry.sdkPath = pathToFileURL(sdkPath).toString();
	}
	if (resolved.experimental.openTelemetry?.browserSdkPath) {
		const browserSdkPath = resolve(resolved.root, resolved.experimental.openTelemetry.browserSdkPath);
		resolved.experimental.openTelemetry.browserSdkPath = browserSdkPath;
	}
	if (resolved.experimental.fsModuleCachePath) resolved.experimental.fsModuleCachePath = resolve(resolved.root, resolved.experimental.fsModuleCachePath);
	resolved.experimental.importDurations ??= {};
	resolved.experimental.importDurations.print ??= false;
	resolved.experimental.importDurations.failOnDanger ??= false;
	if (resolved.experimental.importDurations.limit == null) {
		const shouldCollect = resolved.experimental.importDurations.print || resolved.experimental.importDurations.failOnDanger || resolved.ui;
		resolved.experimental.importDurations.limit = shouldCollect ? 10 : 0;
	}
	resolved.experimental.importDurations.thresholds ??= {};
	resolved.experimental.importDurations.thresholds.warn ??= 100;
	resolved.experimental.importDurations.thresholds.danger ??= 500;
	if (typeof resolved.experimental.vcsProvider === "string" && resolved.experimental.vcsProvider !== "git") resolved.experimental.vcsProvider = resolvePath(resolved.experimental.vcsProvider, resolved.root);
	return resolved;
}
function isBrowserEnabled(config) {
	return Boolean(config.browser?.enabled);
}
function resolveCoverageReporters(configReporters) {
	// E.g. { reporter: "html" }
	if (!Array.isArray(configReporters)) return [[configReporters, {}]];
	const resolvedReporters = [];
	for (const reporter of configReporters) if (Array.isArray(reporter))
 // E.g. { reporter: [ ["html", { skipEmpty: true }], ["lcov"], ["json", { file: "map.json" }] ]}
	resolvedReporters.push([reporter[0], reporter[1] || {}]);
	else
 // E.g. { reporter: ["html", "json"]}
	resolvedReporters.push([reporter, {}]);
	return resolvedReporters;
}
function isChromiumName(provider, name) {
	if (provider === "playwright") return name === "chromium";
	return name === "chrome" || name === "edge";
}
function hasBrowserChromium(vitest, config) {
	const browser = config.browser;
	if (!browser || !browser.provider || browser.provider.name === "preview" || !browser.enabled) return false;
	if (browser.name) return isChromiumName(browser.provider.name, browser.name);
	if (!browser.instances) return false;
	return browser.instances.some((instance) => {
		const name = instance.name || (config.name ? `${config.name} (${instance.browser})` : instance.browser);
		// browser config is filtered out
		if (!vitest.matchesProjectFilter(name)) return false;
		return isChromiumName(browser.provider.name, instance.browser);
	});
}
function hasOnlyBrowserChromium(vitest, config) {
	const browser = config.browser;
	if (!browser || !browser.provider || browser.provider.name === "preview" || !browser.enabled) return false;
	if (browser.name) return isChromiumName(browser.provider.name, browser.name);
	if (!browser.instances) return false;
	return browser.instances.every((instance) => {
		const name = instance.name || (config.name ? `${config.name} (${instance.browser})` : instance.browser);
		// browser config is filtered out
		if (!vitest.matchesProjectFilter(name)) return true;
		return isChromiumName(browser.provider.name, instance.browser);
	});
}

const THRESHOLD_KEYS = [
	"lines",
	"functions",
	"statements",
	"branches"
];
const GLOBAL_THRESHOLDS_KEY = "global";
const DEFAULT_PROJECT = Symbol.for("default-project");
let uniqueId = 0;
async function getCoverageProvider(options, loader) {
	const coverageModule = await resolveCoverageProviderModule(options, loader);
	if (coverageModule) return coverageModule.getProvider();
	return null;
}
class BaseCoverageProvider {
	ctx;
	name;
	version;
	options;
	globCache = /* @__PURE__ */ new Map();
	autoUpdateMarker = "\n// __VITEST_COVERAGE_MARKER__";
	coverageFiles = /* @__PURE__ */ new Map();
	pendingPromises = [];
	coverageFilesDirectory;
	roots = [];
	changedFiles;
	_initialize(ctx) {
		this.ctx = ctx;
		if (ctx.version !== this.version) ctx.logger.warn(c.yellow(`Loaded ${c.inverse(c.yellow(` vitest@${ctx.version} `))} and ${c.inverse(c.yellow(` @vitest/coverage-${this.name}@${this.version} `))}.
Running mixed versions is not supported and may lead into bugs
Update your dependencies and make sure the versions match.`));
		const config = ctx._coverageOptions;
		this.options = {
			...coverageConfigDefaults,
			...config,
			provider: this.name,
			reportsDirectory: resolve(ctx.config.root, config.reportsDirectory || coverageConfigDefaults.reportsDirectory),
			reporter: resolveCoverageReporters(config.reporter || coverageConfigDefaults.reporter),
			thresholds: config.thresholds && {
				...config.thresholds,
				lines: config.thresholds["100"] ? 100 : config.thresholds.lines,
				branches: config.thresholds["100"] ? 100 : config.thresholds.branches,
				functions: config.thresholds["100"] ? 100 : config.thresholds.functions,
				statements: config.thresholds["100"] ? 100 : config.thresholds.statements
			}
		};
		const shard = this.ctx.config.shard;
		const tempDirectory = `.tmp${shard ? `-${shard.index}-${shard.count}` : ""}`;
		this.coverageFilesDirectory = resolve(this.options.reportsDirectory, tempDirectory);
		// If --project filter is set pick only roots of resolved projects
		this.roots = ctx.config.project?.length ? [...new Set(ctx.projects.map((project) => project.config.root))] : [ctx.config.root];
	}
	/**
	* Check if file matches `coverage.include` but not `coverage.exclude`
	*/
	isIncluded(_filename, root) {
		const roots = root ? [root] : this.roots;
		const filename = slash(cleanUrl(_filename));
		const cacheHit = this.globCache.get(filename);
		if (cacheHit !== void 0) return cacheHit;
		// File outside project root with default allowExternal
		if (this.options.allowExternal === false && roots.every((root) => !filename.startsWith(root))) {
			this.globCache.set(filename, false);
			return false;
		}
		// By default `coverage.include` matches all files, except "coverage.exclude"
		const glob = this.options.include || "**";
		let included = pm.isMatch(filename, glob, {
			contains: true,
			dot: true,
			ignore: this.options.exclude
		});
		if (included && this.changedFiles) included = this.changedFiles.includes(filename);
		this.globCache.set(filename, included);
		return included;
	}
	async getUntestedFilesByRoot(testedFiles, include, root) {
		let includedFiles = await glob(include, {
			cwd: root,
			ignore: [...this.options.exclude, ...testedFiles.map((file) => slash(file))],
			absolute: true,
			dot: true,
			onlyFiles: true
		});
		// Run again through picomatch as tinyglobby's exclude pattern is different ({ "exclude": ["math"] } should ignore "src/math.ts")
		includedFiles = includedFiles.filter((file) => this.isIncluded(file, root));
		if (this.changedFiles) includedFiles = this.changedFiles.filter((file) => includedFiles.includes(file));
		return includedFiles.map((file) => slash(path.resolve(root, file)));
	}
	async getUntestedFiles(testedFiles) {
		if (this.options.include == null) return [];
		const rootMapper = this.getUntestedFilesByRoot.bind(this, testedFiles, this.options.include);
		return (await Promise.all(this.roots.map(rootMapper))).flatMap((files) => files);
	}
	createCoverageMap() {
		throw new Error("BaseReporter's createCoverageMap was not overwritten");
	}
	async generateReports(_, __) {
		throw new Error("BaseReporter's generateReports was not overwritten");
	}
	async parseConfigModule(_) {
		throw new Error("BaseReporter's parseConfigModule was not overwritten");
	}
	resolveOptions() {
		return this.options;
	}
	async clean(clean = true) {
		if (clean && existsSync(this.options.reportsDirectory)) await promises.rm(this.options.reportsDirectory, {
			recursive: true,
			force: true,
			maxRetries: 10
		});
		if (existsSync(this.coverageFilesDirectory)) await promises.rm(this.coverageFilesDirectory, {
			recursive: true,
			force: true,
			maxRetries: 10
		});
		await promises.mkdir(this.coverageFilesDirectory, { recursive: true });
		this.coverageFiles = /* @__PURE__ */ new Map();
		this.pendingPromises = [];
	}
	normalizeCoverageFileError(error) {
		if (error instanceof Error && "code" in error && error.code === "ENOENT" && !existsSync(this.coverageFilesDirectory)) return new Error(`Something removed the coverage directory "${this.coverageFilesDirectory}" Vitest created earlier. Make sure you are not running multiple Vitests with the same "coverage.reportsDirectory" at the same time.`, { cause: error });
		return error;
	}
	onAfterSuiteRun({ coverage, environment, projectName, testFiles }) {
		if (!coverage) return;
		let entry = this.coverageFiles.get(projectName || DEFAULT_PROJECT);
		if (!entry) {
			entry = {};
			this.coverageFiles.set(projectName || DEFAULT_PROJECT, entry);
		}
		const testFilenames = testFiles.join();
		const filename = resolve(this.coverageFilesDirectory, `coverage-${uniqueId++}.json`);
		entry[environment] ??= {};
		// If there's a result from previous run, overwrite it
		entry[environment][testFilenames] = filename;
		const promise = promises.writeFile(filename, JSON.stringify(coverage), "utf-8").catch((error) => {
			throw this.normalizeCoverageFileError(error);
		});
		this.pendingPromises.push(promise);
	}
	async readCoverageFiles({ onFileRead, onFinished, onDebug }) {
		let index = 0;
		const total = this.pendingPromises.length;
		await Promise.all(this.pendingPromises);
		this.pendingPromises = [];
		for (const [projectName, coveragePerProject] of this.coverageFiles.entries()) for (const [environment, coverageByTestfiles] of Object.entries(coveragePerProject)) {
			const filenames = Object.values(coverageByTestfiles);
			const project = this.ctx.getProjectByName(projectName);
			for (const chunk of this.toSlices(filenames, this.options.processingConcurrency)) {
				if (onDebug.enabled) {
					index += chunk.length;
					onDebug(`Reading coverage results ${index}/${total}`);
				}
				await Promise.all(chunk.map(async (filename) => {
					const contents = await promises.readFile(filename, "utf-8").catch((error) => {
						throw this.normalizeCoverageFileError(error);
					});
					onFileRead(JSON.parse(contents));
				}));
			}
			await onFinished(project, environment);
		}
	}
	async cleanAfterRun() {
		this.coverageFiles = /* @__PURE__ */ new Map();
		await promises.rm(this.coverageFilesDirectory, { recursive: true });
		// Remove empty reports directory, e.g. when only text-reporter is used
		if (readdirSync(this.options.reportsDirectory).length === 0) await promises.rm(this.options.reportsDirectory, { recursive: true });
	}
	async onTestRunStart() {
		if (this.options.changed) try {
			this.changedFiles = await this.ctx.vcs.findChangedFiles({
				root: this.ctx.config.root,
				changedSince: this.options.changed
			});
		} catch {
			this.changedFiles = void 0;
		}
		else if (this.ctx.config.changed) this.changedFiles = this.ctx.config.related;
		if (this.changedFiles) this.globCache.clear();
	}
	async onTestFailure() {
		if (!this.options.reportOnFailure) await this.cleanAfterRun();
	}
	async reportCoverage(coverageMap, { allTestsRun }) {
		await this.generateReports(coverageMap || this.createCoverageMap(), allTestsRun);
		if (!(!this.options.cleanOnRerun && this.ctx.config.watch)) await this.cleanAfterRun();
	}
	async reportThresholds(coverageMap, allTestsRun) {
		const resolvedThresholds = this.resolveThresholds(coverageMap);
		this.checkThresholds(resolvedThresholds);
		if (this.options.thresholds?.autoUpdate && allTestsRun) {
			if (!this.ctx.vite.config.configFile) throw new Error("Missing configurationFile. The \"coverage.thresholds.autoUpdate\" can only be enabled when configuration file is used.");
			const configFilePath = this.ctx.vite.config.configFile;
			const configModule = await this.parseConfigModule(configFilePath);
			await this.updateThresholds({
				thresholds: resolvedThresholds,
				configurationFile: configModule,
				onUpdate: () => writeFileSync(configFilePath, configModule.generate().code.replace(this.autoUpdateMarker, ""), "utf-8")
			});
		}
	}
	/**
	* Constructs collected coverage and users' threshold options into separate sets
	* where each threshold set holds their own coverage maps. Threshold set is either
	* for specific files defined by glob pattern or global for all other files.
	*/
	resolveThresholds(coverageMap) {
		const resolvedThresholds = [];
		const files = coverageMap.files();
		const globalCoverageMap = this.createCoverageMap();
		for (const key of Object.keys(this.options.thresholds)) {
			if (key === "perFile" || key === "autoUpdate" || key === "100" || THRESHOLD_KEYS.includes(key)) continue;
			const glob = key;
			const globThresholds = resolveGlobThresholds(this.options.thresholds[glob]);
			const globCoverageMap = this.createCoverageMap();
			const matcher = pm(glob);
			const matchingFiles = files.filter((file) => matcher(relative(this.ctx.config.root, file)));
			for (const file of matchingFiles) {
				const fileCoverage = coverageMap.fileCoverageFor(file);
				globCoverageMap.addFileCoverage(fileCoverage);
			}
			resolvedThresholds.push({
				name: glob,
				coverageMap: globCoverageMap,
				thresholds: globThresholds
			});
		}
		// Global threshold is for all files, even if they are included by glob patterns
		for (const file of files) {
			const fileCoverage = coverageMap.fileCoverageFor(file);
			globalCoverageMap.addFileCoverage(fileCoverage);
		}
		resolvedThresholds.unshift({
			name: GLOBAL_THRESHOLDS_KEY,
			coverageMap: globalCoverageMap,
			thresholds: {
				branches: this.options.thresholds?.branches,
				functions: this.options.thresholds?.functions,
				lines: this.options.thresholds?.lines,
				statements: this.options.thresholds?.statements
			}
		});
		return resolvedThresholds;
	}
	/**
	* Check collected coverage against configured thresholds. Sets exit code to 1 when thresholds not reached.
	*/
	checkThresholds(allThresholds) {
		for (const { coverageMap, thresholds, name } of allThresholds) {
			if (thresholds.branches === void 0 && thresholds.functions === void 0 && thresholds.lines === void 0 && thresholds.statements === void 0) continue;
			// Construct list of coverage summaries where thresholds are compared against
			const summaries = this.options.thresholds?.perFile ? coverageMap.files().map((file) => ({
				file,
				summary: coverageMap.fileCoverageFor(file).toSummary()
			})) : [{
				file: null,
				summary: coverageMap.getCoverageSummary()
			}];
			// Check thresholds of each summary
			for (const { summary, file } of summaries) for (const thresholdKey of THRESHOLD_KEYS) {
				const threshold = thresholds[thresholdKey];
				if (threshold === void 0) continue;
				/**
				* Positive thresholds are treated as minimum coverage percentages (X means: X% of lines must be covered),
				* while negative thresholds are treated as maximum uncovered counts (-X means: X lines may be uncovered).
				*/
				if (threshold >= 0) {
					const coverage = summary.data[thresholdKey].pct;
					if (coverage < threshold) {
						process.exitCode = 1;
						/**
						* Generate error message based on perFile flag:
						* - ERROR: Coverage for statements (33.33%) does not meet threshold (85%) for src/math.ts
						* - ERROR: Coverage for statements (50%) does not meet global threshold (85%)
						*/
						let errorMessage = `ERROR: Coverage for ${thresholdKey} (${coverage}%) does not meet ${name === GLOBAL_THRESHOLDS_KEY ? name : `"${name}"`} threshold (${threshold}%)`;
						if (this.options.thresholds?.perFile && file) errorMessage += ` for ${relative("./", file).replace(/\\/g, "/")}`;
						this.ctx.logger.error(errorMessage);
					}
				} else {
					const uncovered = summary.data[thresholdKey].total - summary.data[thresholdKey].covered;
					const absoluteThreshold = threshold * -1;
					if (uncovered > absoluteThreshold) {
						process.exitCode = 1;
						/**
						* Generate error message based on perFile flag:
						* - ERROR: Uncovered statements (33) exceed threshold (30) for src/math.ts
						* - ERROR: Uncovered statements (33) exceed global threshold (30)
						*/
						let errorMessage = `ERROR: Uncovered ${thresholdKey} (${uncovered}) exceed ${name === GLOBAL_THRESHOLDS_KEY ? name : `"${name}"`} threshold (${absoluteThreshold})`;
						if (this.options.thresholds?.perFile && file) errorMessage += ` for ${relative("./", file).replace(/\\/g, "/")}`;
						this.ctx.logger.error(errorMessage);
					}
				}
			}
		}
	}
	/**
	* Check if current coverage is above configured thresholds and bump the thresholds if needed
	*/
	async updateThresholds({ thresholds: allThresholds, onUpdate, configurationFile }) {
		let updatedThresholds = false;
		const config = resolveConfig(configurationFile);
		assertConfigurationModule(config);
		for (const { coverageMap, thresholds, name } of allThresholds) {
			const summaries = this.options.thresholds?.perFile ? coverageMap.files().map((file) => coverageMap.fileCoverageFor(file).toSummary()) : [coverageMap.getCoverageSummary()];
			const thresholdsToUpdate = [];
			for (const key of THRESHOLD_KEYS) {
				const threshold = thresholds[key] ?? 100;
				/**
				* Positive thresholds are treated as minimum coverage percentages (X means: X% of lines must be covered),
				* while negative thresholds are treated as maximum uncovered counts (-X means: X lines may be uncovered).
				*/
				if (threshold >= 0) {
					const actual = Math.min(...summaries.map((summary) => summary[key].pct));
					if (actual > threshold) thresholdsToUpdate.push([key, actual]);
				} else {
					const absoluteThreshold = threshold * -1;
					const actual = Math.max(...summaries.map((summary) => summary[key].total - summary[key].covered));
					if (actual < absoluteThreshold) {
						// If everything was covered, set new threshold to 100% (since a threshold of 0 would be considered as 0%)
						const updatedThreshold = actual === 0 ? 100 : actual * -1;
						thresholdsToUpdate.push([key, updatedThreshold]);
					}
				}
			}
			if (thresholdsToUpdate.length === 0) continue;
			updatedThresholds = true;
			const thresholdFormatter = typeof this.options.thresholds?.autoUpdate === "function" ? this.options.thresholds?.autoUpdate : (value) => value;
			for (const [threshold, newValue] of thresholdsToUpdate) {
				const formattedValue = thresholdFormatter(newValue);
				if (name === GLOBAL_THRESHOLDS_KEY) config.test.coverage.thresholds[threshold] = formattedValue;
				else {
					const glob = config.test.coverage.thresholds[name];
					glob[threshold] = formattedValue;
				}
			}
		}
		if (updatedThresholds) {
			this.ctx.logger.log("Updating thresholds to configuration file. You may want to push with updated coverage thresholds.");
			onUpdate();
		}
	}
	async mergeReports(coverageMaps) {
		const coverageMap = this.createCoverageMap();
		for (const coverage of coverageMaps) coverageMap.merge(coverage);
		await this.generateReports(coverageMap, true);
	}
	hasTerminalReporter(reporters) {
		return reporters.some(([reporter]) => reporter === "text" || reporter === "text-summary" || reporter === "text-lcov" || reporter === "teamcity");
	}
	toSlices(array, size) {
		return array.reduce((chunks, item) => {
			const index = Math.max(0, chunks.length - 1);
			const lastChunk = chunks[index] || [];
			chunks[index] = lastChunk;
			if (lastChunk.length >= size) chunks.push([item]);
			else lastChunk.push(item);
			return chunks;
		}, []);
	}
	// TODO: should this be abstracted in `project`/`vitest` instead?
	// if we decide to keep `viteModuleRunner: false`, we will need to abstract transformation in both main thread and tests
	// custom --import=module.registerHooks need to be transformed as well somehow
	async transformFile(url, project, viteEnvironment) {
		const config = project.config;
		// vite is disabled, should transform manually if possible
		if (config.experimental.viteModuleRunner === false) {
			const pathname = url.split("?")[0];
			const filename = pathname.startsWith("file://") ? fileURLToPath(pathname) : pathname;
			const extension = path.extname(filename);
			if (!(extension === ".ts" || extension === ".mts" || extension === ".cts")) return {
				code: await promises.readFile(filename, "utf-8"),
				map: null
			};
			if (!module$1.stripTypeScriptTypes) throw new Error(`Cannot parse '${url}' because "module.stripTypeScriptTypes" is not supported. TypeScript coverage requires Node.js 22.15 or higher. This is NOT a bug of Vitest.`);
			const isTransform = process.execArgv.includes("--experimental-transform-types") || config.execArgv.includes("--experimental-transform-types") || process.env.NODE_OPTIONS?.includes("--experimental-transform-types") || config.env?.NODE_OPTIONS?.includes("--experimental-transform-types");
			const code = await promises.readFile(filename, "utf-8");
			return {
				code: module$1.stripTypeScriptTypes(code, { mode: isTransform ? "transform" : "strip" }),
				map: null
			};
		}
		if (project.isBrowserEnabled() || viteEnvironment === "__browser__") {
			const result = await (project.browser?.vite.environments.client || project.vite.environments.client).transformRequest(url);
			if (result) return result;
		}
		return project.vite.environments[viteEnvironment].transformRequest(url);
	}
	createUncoveredFileTransformer(ctx) {
		const projects = new Set([...ctx.projects, ctx.getRootProject()]);
		return async (filename) => {
			let lastError;
			for (const project of projects) {
				const root = project.config.root;
				// On Windows root doesn't start with "/" while filenames do
				if (!filename.startsWith(root) && !filename.startsWith(`/${root}`)) continue;
				try {
					const environment = project.config.environment;
					const viteEnvironment = environment === "jsdom" || environment === "happy-dom" ? "client" : "ssr";
					return await this.transformFile(filename, project, viteEnvironment);
				} catch (err) {
					lastError = err;
				}
			}
			// All vite servers failed to transform the file
			throw lastError;
		};
	}
}
/**
* Narrow down `unknown` glob thresholds to resolved ones
*/
function resolveGlobThresholds(thresholds) {
	if (!thresholds || typeof thresholds !== "object") return {};
	if (100 in thresholds && thresholds[100] === true) return {
		lines: 100,
		branches: 100,
		functions: 100,
		statements: 100
	};
	return {
		lines: "lines" in thresholds && typeof thresholds.lines === "number" ? thresholds.lines : void 0,
		branches: "branches" in thresholds && typeof thresholds.branches === "number" ? thresholds.branches : void 0,
		functions: "functions" in thresholds && typeof thresholds.functions === "number" ? thresholds.functions : void 0,
		statements: "statements" in thresholds && typeof thresholds.statements === "number" ? thresholds.statements : void 0
	};
}
function assertConfigurationModule(config) {
	try {
		// @ts-expect-error -- Intentional unsafe null pointer check as wrapped in try-catch
		if (typeof config.test.coverage.thresholds !== "object") throw new TypeError("Expected config.test.coverage.thresholds to be an object");
	} catch (error) {
		const message = error instanceof Error ? error.message : String(error);
		throw new Error(`Unable to parse thresholds from configuration file: ${message}`);
	}
}
function resolveConfig(configModule) {
	const mod = configModule.exports.default;
	try {
		// Check for "export default { test: {...} }"
		if (mod.$type === "object") return mod;
		// "export default defineConfig(...)"
		let config = resolveDefineConfig(mod);
		if (config) return config;
		// "export default mergeConfig(..., defineConfig(...))"
		if (mod.$type === "function-call" && mod.$callee === "mergeConfig") {
			config = resolveMergeConfig(mod);
			if (config) return config;
		}
	} catch (error) {
		// Reduce magicast's verbose errors to readable ones
		throw new Error(error instanceof Error ? error.message : String(error));
	}
	throw new Error("Failed to update coverage thresholds. Configuration file is too complex.");
}
function resolveDefineConfig(mod) {
	if (mod.$type === "function-call" && mod.$callee === "defineConfig") {
		// "export default defineConfig({ test: {...} })"
		if (mod.$args[0].$type === "object") return mod.$args[0];
		if (mod.$args[0].$type === "arrow-function-expression") {
			if (mod.$args[0].$body.$type === "object")
 // "export default defineConfig(() => ({ test: {...} }))"
			return mod.$args[0].$body;
			// "export default defineConfig(() => mergeConfig({...}, ...))"
			const config = resolveMergeConfig(mod.$args[0].$body);
			if (config) return config;
		}
	}
}
function resolveMergeConfig(mod) {
	if (mod.$type === "function-call" && mod.$callee === "mergeConfig") for (const arg of mod.$args) {
		const config = resolveDefineConfig(arg);
		if (config) return config;
	}
}

export { BaseCoverageProvider as B, RandomSequencer as R, BaseSequencer as a, resolveApiServerConfig as b, getCoverageProvider as g, hash as h, isBrowserEnabled as i, resolveConfig$1 as r };
