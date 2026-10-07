import fs, { promises, existsSync, mkdirSync, readFileSync, statSync, readdirSync, writeFileSync } from 'node:fs';
import { relative, resolve, dirname, join, extname, normalize, basename, isAbsolute } from 'pathe';
import { C as CoverageProviderMap } from './coverage.CTzCuANN.js';
import path, { resolve as resolve$1 } from 'node:path';
import { unique, createDefer, slash, withTrailingSlash, cleanUrl, wrapId, isExternalUrl, unwrapId, toArray, noop, deepMerge, nanoid, deepClone, isPrimitive, notNullish } from '@vitest/utils/helpers';
import { a as any, p as prompt } from './index.og1WyBLx.js';
import { i as isPackageExists, r as resolveModule } from './index.BCY_7LL2.js';
import * as vite from 'vite';
import { parseAst, searchForWorkspaceRoot, fetchModule, version, createServer, isFileLoadingAllowed, normalizePath, isRunnableDevEnvironment, mergeConfig } from 'vite';
import { A as API_PATH, c as configFiles, d as defaultBrowserPort, b as defaultPort } from './constants.CPYnjOGj.js';
import * as nodeos from 'node:os';
import nodeos__default, { tmpdir } from 'node:os';
import { generateHash as generateHash$1, createTaskName, validateTags, calculateSuiteHash, hasFailed, generateFileHash, limitConcurrency, createFileTask as createFileTask$1, createTagsFilter, someTasksAreOnly, interpretTaskModes, getTasks, isTestCase } from '@vitest/runner/utils';
import { SnapshotManager } from '@vitest/snapshot/manager';
import { serializeValue } from '@vitest/utils/serialize';
import { v as version$1 } from './cac.DJJmV0dT.js';
import { rootDir, distDir } from '../path.js';
import { f as createIndexLocationsMap, g as TraceMap, o as originalPositionFor, h as ancestor, s as stringify, p as parse, i as printError, j as Typechecker, k as generateCodeFrame, l as escapeRegExp, m as createDefinesScript, a as BenchmarkReportsMap, R as ReportersMap, n as groupBy, q as BlobReporter, r as readBlobs, t as convertTasksToEvents, H as HangingProcessReporter, w as wildcardPatternToRegExp, u as stdout } from './index.UpGiHP7g.js';
import { N as NativeModuleRunner } from './nativeModuleRunner.BIakptoF.js';
import { T as Traces } from './traces.DT5aQ62U.js';
import { createDebug } from 'obug';
import { h as hash, R as RandomSequencer, i as isBrowserEnabled, r as resolveConfig, g as getCoverageProvider, b as resolveApiServerConfig } from './coverage.DM_a_rWm.js';
import { rm, readFile, writeFile, rename, stat, unlink, mkdir, copyFile } from 'node:fs/promises';
import c from 'tinyrainbow';
import { VitestModuleEvaluator } from '#module-evaluator';
import { ModuleRunner } from 'vite/module-runner';
import { Console } from 'node:console';
import { g as getDefaultExportFromCjs } from './_commonjsHelpers.D26ty3Ew.js';
import { g as formatProjectName, w as withLabel, e as errorBanner, d as divider } from './utils.BS4fH3nR.js';
import { createRequire, builtinModules, isBuiltin as isBuiltin$1 } from 'node:module';
import url, { fileURLToPath, pathToFileURL } from 'node:url';
import { i as isTTY, a as isWindows } from './env.D4Lgay0q.js';
import { isatty } from 'node:tty';
import crypto, { createHash } from 'node:crypto';
import EventEmitter$1, { EventEmitter } from 'node:events';
import { c as createBirpc } from './index.Chj8NDwU.js';
import { i as isBuiltin, t as toBuiltin } from './modules.BJuCwlRJ.js';
import { fork } from 'node:child_process';
import { Worker } from 'node:worker_threads';
import pm from 'picomatch';
import { glob, isDynamicPattern } from 'tinyglobby';
import { performance as performance$1 } from 'node:perf_hooks';
import require$$0$3 from 'events';
import require$$1$1 from 'https';
import require$$2 from 'http';
import require$$3 from 'net';
import require$$4 from 'tls';
import require$$1 from 'crypto';
import require$$0$2 from 'stream';
import require$$7 from 'url';
import require$$0 from 'zlib';
import require$$0$1 from 'buffer';
import { c as configDefaults } from './defaults.9aQKnqFk.js';
import { isAgent } from 'std-env';
import MagicString from 'magic-string';
import { hoistMocksPlugin, automockPlugin } from '@vitest/mocker/node';
import { KNOWN_ASSET_RE } from '@vitest/utils/constants';
import { findNearestPackageData } from '@vitest/utils/resolver';
import * as esModuleLexer from 'es-module-lexer';
import assert$1 from 'node:assert';
import { parseErrorStacktrace } from '@vitest/utils/source-map';
import { extractSourcemapFromFile } from '@vitest/utils/source-map/node';
import { x } from 'tinyexec';
import readline from 'node:readline';
import { stripVTControlCharacters } from 'node:util';

function createDebugger(namespace) {
	const debug = createDebug(namespace);
	if (debug.enabled) return debug;
}

async function getSpecificationsOptions(specifications) {
	const environments = /* @__PURE__ */ new WeakMap();
	const cache = /* @__PURE__ */ new Map();
	const tags = /* @__PURE__ */ new WeakMap();
	await Promise.all(specifications.map(async (spec) => {
		const { moduleId: filepath, project, pool } = spec;
		// browser pool handles its own environment
		if (pool === "browser") return;
		// reuse if projects have the same test files
		let code = cache.get(filepath);
		if (!code) {
			code = await promises.readFile(filepath, "utf-8").catch(() => "");
			cache.set(filepath, code);
		}
		const { env = project.config.environment || "node", envOptions, tags: specTags = [] } = detectCodeBlock(code);
		tags.set(spec, specTags);
		const environment = {
			name: env,
			options: envOptions ? { [env === "happy-dom" ? "happyDOM" : env]: envOptions } : null
		};
		environments.set(spec, environment);
	}));
	return {
		environments,
		tags
	};
}
function detectCodeBlock(content) {
	const env = content.match(/@(?:vitest|jest)-environment\s+([\w-]+)\b/)?.[1];
	let envOptionsJson = content.match(/@(?:vitest|jest)-environment-options\s+(.+)/)?.[1];
	if (envOptionsJson?.endsWith("*/"))
 // Trim closing Docblock characters the above regex might have captured
	envOptionsJson = envOptionsJson.slice(0, -2);
	const envOptions = JSON.parse(envOptionsJson || "null");
	const tags = [];
	let tagMatch;
	// eslint-disable-next-line no-cond-assign
	while (tagMatch = content.match(/(\/\/|\*)\s*@module-tag\s+([\w\-/]+)\b/)) {
		tags.push(tagMatch[2]);
		content = content.slice(tagMatch.index + tagMatch[0].length);
	}
	return {
		env,
		envOptions,
		tags
	};
}

const debug$1 = createDebugger("vitest:ast-collect-info");
const verbose = createDebugger("vitest:ast-collect-verbose");
function isTestFunctionName(name) {
	return name === "it" || name === "test" || name.startsWith("test") || name.endsWith("Test");
}
function isVitestFunctionName(name) {
	return name === "describe" || name === "suite" || isTestFunctionName(name);
}
function astParseFile(filepath, code) {
	const ast = parseAst(code);
	if (verbose) verbose("Collecting", filepath, code);
	else debug$1?.("Collecting", filepath);
	const definitions = [];
	const getName = (callee) => {
		if (!callee) return null;
		if (callee.type === "Identifier") return callee.name;
		if (callee.type === "CallExpression") return getName(callee.callee);
		if (callee.type === "TaggedTemplateExpression") return getName(callee.tag);
		if (callee.type === "MemberExpression") {
			if (callee.object?.type === "Identifier" && isVitestFunctionName(callee.object.name)) return callee.object?.name;
			if (callee.object?.name?.startsWith("__vite_ssr_") || callee.object?.name?.startsWith("__vi_import_") || callee.object?.object?.name?.startsWith("__vite_ssr_") && callee.object?.property?.name === "Vitest") return getName(callee.property);
			// call as `__vite_ssr__.test.skip()` or `describe.concurrent.each()`
			return getName(callee.object);
		}
		// unwrap (0, ...)
		if (callee.type === "SequenceExpression" && callee.expressions.length === 2) {
			const [e0, e1] = callee.expressions;
			if (e0.type === "Literal" && e0.value === 0) return getName(e1);
		}
		return null;
	};
	const getProperties = (callee) => {
		if (!callee) return [];
		if (callee.type === "Identifier") return [];
		if (callee.type === "CallExpression") return getProperties(callee.callee);
		if (callee.type === "TaggedTemplateExpression") return getProperties(callee.tag);
		if (callee.type === "MemberExpression") {
			const props = getProperties(callee.object);
			if (callee.property?.name) props.push(callee.property.name);
			return props;
		}
		return [];
	};
	ancestor(ast, { CallExpression(node) {
		const { callee } = node;
		const name = getName(callee);
		if (!name) return;
		if (!isVitestFunctionName(name)) {
			verbose?.(`Skipping ${name} (unknown call)`);
			return;
		}
		const properties = getProperties(callee);
		const property = callee?.property?.name;
		// intermediate calls like .each(), .for() will be picked up in the next iteration
		if (property && [
			"each",
			"for",
			"skipIf",
			"runIf",
			"extend",
			"scoped",
			"override"
		].includes(property)) return;
		// skip properties on return values of calls - e.g., test('name', fn).skip()
		if (callee.type === "MemberExpression" && callee.object?.type === "CallExpression") return;
		// derive mode from the full chain (handles any order like .skip.concurrent or .concurrent.skip)
		let mode = "run";
		for (const prop of properties) if (prop === "skip" || prop === "only" || prop === "todo") mode = prop;
		else if (prop === "skipIf" || prop === "runIf") mode = "skip";
		let isConcurrent = properties.includes("concurrent");
		let isSequential = properties.includes("sequential");
		let start;
		const end = node.end;
		// .each or (0, __vite_ssr_exports_0__.test)()
		if (callee.type === "CallExpression" || callee.type === "SequenceExpression" || callee.type === "TaggedTemplateExpression") start = callee.end;
		else start = node.start;
		const messageNode = node.arguments?.[0];
		if (messageNode == null) {
			verbose?.(`Skipping node at ${node.start} because it doesn't have a name`);
			return;
		}
		let message;
		if (messageNode?.type === "Literal" || messageNode?.type === "TemplateLiteral") message = code.slice(messageNode.start + 1, messageNode.end - 1);
		else {
			message = code.slice(messageNode.start, messageNode.end);
			if (message.endsWith(".name")) message = message.slice(0, -5);
		}
		if (message.startsWith("0,")) message = message.slice(2);
		message = message.replace(/\(0\s?,\s?__vite_ssr_import_\d+__.(\w+)\)/g, "$1").replace(/__(vite_ssr_import|vi_import)_\d+__\./g, "").replace(/__vi_import_\d+__\./g, "");
		const parentCalleeName = typeof callee?.callee === "object" && callee?.callee.type === "MemberExpression" && callee?.callee.property?.name;
		let isDynamicEach = parentCalleeName === "each" || parentCalleeName === "for";
		if (!isDynamicEach && callee.type === "TaggedTemplateExpression") {
			const property = callee.tag?.property?.name;
			isDynamicEach = property === "each" || property === "for";
		}
		// Extract options from the second argument if it's an options object
		const tags = [];
		const secondArg = node.arguments?.[1];
		if (secondArg?.type === "ObjectExpression") for (const prop of secondArg.properties || []) {
			if (prop.type !== "Property" || prop.key?.type !== "Identifier") continue;
			const keyName = prop.key.name;
			if (keyName === "tags") {
				const tagsValue = prop.value;
				if (tagsValue?.type === "Literal" && typeof tagsValue.value === "string") tags.push(tagsValue.value);
				else if (tagsValue?.type === "ArrayExpression") {
					for (const element of tagsValue.elements || []) if (element?.type === "Literal" && typeof element.value === "string") tags.push(element.value);
				}
			} else if (prop.value?.type === "Literal" && prop.value.value === true) {
				if (keyName === "skip" || keyName === "only" || keyName === "todo") mode = keyName;
				else if (keyName === "concurrent") isConcurrent = true;
				else if (keyName === "sequential") isSequential = true;
			}
		}
		debug$1?.("Found", name, message, `(${mode})`, tags.length ? `[${tags.join(", ")}]` : "");
		definitions.push({
			start,
			end,
			name: message,
			type: isTestFunctionName(name) ? "test" : "suite",
			mode,
			task: null,
			dynamic: isDynamicEach,
			concurrent: isConcurrent,
			sequential: isSequential,
			tags
		});
	} });
	return {
		ast,
		definitions
	};
}
function createFailedFileTask(project, filepath, error) {
	const testFilepath = relative(project.config.root, filepath);
	const file = {
		filepath,
		type: "suite",
		id: /* @__PURE__ */ generateHash$1(`${testFilepath}${project.config.name || ""}`),
		name: testFilepath,
		fullName: testFilepath,
		mode: "run",
		tasks: [],
		start: 0,
		end: 0,
		projectName: project.name,
		meta: {},
		pool: project.browser ? "browser" : project.config.pool,
		file: null,
		result: {
			state: "fail",
			errors: serializeError(project, error)
		}
	};
	file.file = file;
	return file;
}
function serializeError(ctx, error) {
	if ("errors" in error && "pluginCode" in error) return error.errors.map((e) => {
		return {
			name: error.name,
			message: e.text,
			stack: e.location ? `${error.name}: ${e.text}\n  at ${relative(ctx.config.root, e.location.file)}:${e.location.line}:${e.location.column}` : ""
		};
	});
	return [{
		name: error.name,
		stack: error.stack,
		message: error.message
	}];
}
function createFileTask(testFilepath, code, requestMap, config, filepath, fileTags) {
	const { definitions, ast } = astParseFile(testFilepath, code);
	const file = {
		filepath,
		type: "suite",
		id: /* @__PURE__ */ generateHash$1(`${testFilepath}${config.name || ""}`),
		name: testFilepath,
		fullName: testFilepath,
		mode: "run",
		tasks: [],
		start: ast.start,
		end: ast.end,
		projectName: config.name,
		meta: {},
		pool: "browser",
		file: null,
		tags: fileTags || []
	};
	file.file = file;
	const indexMap = createIndexLocationsMap(code);
	const map = requestMap && new TraceMap(requestMap);
	let lastSuite = file;
	const updateLatestSuite = (index) => {
		while (lastSuite.suite && lastSuite.end < index) lastSuite = lastSuite.suite;
		return lastSuite;
	};
	definitions.sort((a, b) => a.start - b.start).forEach((definition) => {
		const latestSuite = updateLatestSuite(definition.start);
		let mode = definition.mode;
		if (latestSuite.mode !== "run")
 // inherit suite mode, if it's set
		mode = latestSuite.mode;
		const processedLocation = indexMap.get(definition.start);
		let location;
		if (map && processedLocation) {
			const originalLocation = originalPositionFor(map, {
				line: processedLocation.line,
				column: processedLocation.column
			});
			if (originalLocation.column != null) {
				verbose?.(`Found location for`, definition.type, definition.name, `${processedLocation.line}:${processedLocation.column}`, "->", `${originalLocation.line}:${originalLocation.column}`);
				location = {
					line: originalLocation.line,
					column: originalLocation.column
				};
			} else debug$1?.("Cannot find original location for", definition.type, definition.name, `${processedLocation.column}:${processedLocation.line}`);
		} else debug$1?.("Cannot find original location for", definition.type, definition.name, `${definition.start}`);
		const taskTags = unique([...latestSuite.tags || [], ...definition.tags]);
		// resolve concurrent/sequential: sequential cancels inherited concurrent
		const concurrent = definition.sequential ? void 0 : definition.concurrent || latestSuite.concurrent || void 0;
		if (definition.type === "suite") {
			const task = {
				type: definition.type,
				id: "",
				suite: latestSuite,
				file,
				tasks: [],
				mode,
				each: definition.dynamic,
				concurrent,
				name: definition.name,
				fullName: createTaskName([latestSuite.fullName, definition.name]),
				fullTestName: createTaskName([latestSuite.fullTestName, definition.name]),
				end: definition.end,
				start: definition.start,
				location,
				dynamic: definition.dynamic,
				meta: {},
				tags: taskTags
			};
			definition.task = task;
			latestSuite.tasks.push(task);
			lastSuite = task;
			return;
		}
		validateTags(config, taskTags);
		const task = {
			type: definition.type,
			id: "",
			suite: latestSuite,
			file,
			each: definition.dynamic,
			concurrent,
			mode,
			context: {},
			name: definition.name,
			fullName: createTaskName([latestSuite.fullName, definition.name]),
			fullTestName: createTaskName([latestSuite.fullTestName, definition.name]),
			end: definition.end,
			start: definition.start,
			location,
			dynamic: definition.dynamic,
			meta: {},
			timeout: 0,
			annotations: [],
			artifacts: [],
			tags: taskTags
		};
		definition.task = task;
		latestSuite.tasks.push(task);
	});
	calculateSuiteHash(file);
	markDynamicTests(file.tasks);
	if (!file.tasks.length) file.result = {
		state: "fail",
		errors: [{
			name: "Error",
			message: `No test suite found in file ${filepath}`
		}]
	};
	return file;
}
async function astCollectTests(project, filepath) {
	const request = await transformSSR(project, filepath);
	const testFilepath = relative(project.config.root, filepath);
	if (!request) {
		debug$1?.("Cannot parse", testFilepath, "(vite didn't return anything)");
		return createFailedFileTask(project, filepath, /* @__PURE__ */ new Error(`Failed to parse ${testFilepath}. Vite didn't return anything.`));
	}
	return createFileTask(testFilepath, request.code, request.map, project.serializedConfig, filepath, request.fileTags);
}
async function transformSSR(project, filepath) {
	const { env: pragmaEnv, tags: fileTags } = detectCodeBlock(await promises.readFile(filepath, "utf-8").catch(() => ""));
	// Use environment from pragma if defined, otherwise fall back to config
	const environment = pragmaEnv || project.config.environment;
	const transformResult = await (environment === "jsdom" || environment === "happy-dom" ? project.vite.environments.client : project.vite.environments.ssr).transformRequest(filepath);
	return transformResult ? {
		...transformResult,
		fileTags
	} : null;
}
function markDynamicTests(tasks) {
	for (const task of tasks) {
		if (task.dynamic) task.id += "-dynamic";
		if ("tasks" in task) markDynamicTests(task.tasks);
	}
}
function escapeRegex(str) {
	return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
const kReplacers = new Map([
	["%i", "\\d+?"],
	["%#", "\\d+?"],
	["%d", "[\\d.eE+-]+?"],
	["%f", "[\\d.eE+-]+?"],
	["%s", ".+?"],
	["%j", ".+?"],
	["%o", ".+?"],
	["%%", "%"]
]);
function escapeTestName(label, dynamic) {
	if (!dynamic) return escapeRegex(label);
	// Replace object access patterns ($value, $obj.a) with %s first
	let pattern = label.replace(/\$[a-z_.]+/gi, "%s");
	pattern = escapeRegex(pattern);
	// Replace percent placeholders with their respective regex
	pattern = pattern.replace(/%[i#dfsjo%]/g, (m) => kReplacers.get(m) || m);
	return pattern;
}

class BrowserSessions {
	sessions = /* @__PURE__ */ new Map();
	sessionIds = /* @__PURE__ */ new Set();
	getSession(sessionId) {
		return this.sessions.get(sessionId);
	}
	destroySession(sessionId) {
		this.sessions.delete(sessionId);
	}
	createSession(sessionId, project, pool) {
		// this promise only waits for the WS connection with the orchestrator to be established
		const defer = createDefer();
		const timeout = setTimeout(() => {
			defer.reject(/* @__PURE__ */ new Error(`Failed to connect to the browser session "${sessionId}" [${project.name}] within the timeout.`));
		}, project.vitest.config.browser.connectTimeout ?? 6e4).unref();
		this.sessions.set(sessionId, {
			project,
			connected: () => {
				defer.resolve();
				clearTimeout(timeout);
			},
			fail: (error) => {
				defer.resolve();
				clearTimeout(timeout);
				pool.reject(error);
			}
		});
		return defer;
	}
}

class FilesStatsCache {
	cache = /* @__PURE__ */ new Map();
	getStats(key) {
		return this.cache.get(key);
	}
	async populateStats(root, specs) {
		const promises = specs.map((spec) => {
			const key = `${spec.project.name}:${relative(root, spec.moduleId)}`;
			return this.updateStats(spec.moduleId, key);
		});
		await Promise.all(promises);
	}
	async updateStats(fsPath, key) {
		if (!fs.existsSync(fsPath)) return;
		const stats = await fs.promises.stat(fsPath);
		this.cache.set(key, { size: stats.size });
	}
	removeStats(fsPath) {
		this.cache.forEach((_, key) => {
			if (key.endsWith(fsPath)) this.cache.delete(key);
		});
	}
}

class ResultsCache {
	cache = /* @__PURE__ */ new Map();
	workspacesKeyMap = /* @__PURE__ */ new Map();
	cachePath = null;
	version;
	root = "/";
	constructor(logger) {
		this.logger = logger;
		this.version = Vitest.version;
	}
	getCachePath() {
		return this.cachePath;
	}
	setConfig(root, config) {
		this.root = root;
		if (config) this.cachePath = resolve(config.dir, "results.json");
	}
	getResults(key) {
		return this.cache.get(key);
	}
	async clearCache() {
		if (this.cachePath && existsSync(this.cachePath)) {
			await rm(this.cachePath, {
				force: true,
				recursive: true
			});
			this.logger.log("[cache] cleared results cache at", this.cachePath);
		}
	}
	async readFromCache() {
		if (!this.cachePath) return;
		if (!fs.existsSync(this.cachePath)) return;
		const resultsCache = await fs.promises.readFile(this.cachePath, "utf8");
		const { results, version } = JSON.parse(resultsCache || "[]");
		const [major, minor] = version.split(".");
		// handling changed in 0.30.0
		if (major > 0 || Number(minor) >= 30) {
			this.cache = new Map(results);
			this.version = version;
			results.forEach(([spec]) => {
				const [projectName, relativePath] = spec.split(":");
				const keyMap = this.workspacesKeyMap.get(relativePath) || [];
				keyMap.push(projectName);
				this.workspacesKeyMap.set(relativePath, keyMap);
			});
		}
	}
	updateResults(files) {
		files.forEach((file) => {
			const result = file.result;
			if (!result) return;
			const duration = result.duration || 0;
			// store as relative, so cache would be the same in CI and locally
			const relativePath = relative(this.root, file.filepath);
			this.cache.set(`${file.projectName || ""}:${relativePath}`, {
				duration: duration >= 0 ? duration : 0,
				failed: result.state === "fail"
			});
		});
	}
	removeFromCache(filepath) {
		this.cache.forEach((_, key) => {
			if (key.endsWith(filepath)) this.cache.delete(key);
		});
	}
	async writeToCache() {
		if (!this.cachePath) return;
		const results = Array.from(this.cache.entries());
		const cacheDirname = dirname(this.cachePath);
		if (!fs.existsSync(cacheDirname)) await fs.promises.mkdir(cacheDirname, { recursive: true });
		const cache = JSON.stringify({
			version: this.version,
			results
		});
		await fs.promises.writeFile(this.cachePath, cache);
	}
}

class VitestCache {
	results;
	stats = new FilesStatsCache();
	constructor(logger) {
		this.results = new ResultsCache(logger);
	}
	getFileTestResults(key) {
		return this.results.getResults(key);
	}
	getFileStats(key) {
		return this.stats.getStats(key);
	}
	static resolveCacheDir(root, dir, projectName) {
		return resolve(root, slash(dir || "node_modules/.vite"), "vitest", hash("sha1", projectName || "", "hex"));
	}
}

const debugFs = createDebugger("vitest:cache:fs");
const debugMemory = createDebugger("vitest:cache:memory");
const cacheComment = "\n//# vitestCache=";
const cacheCommentLength = 17;
const METADATA_FILE = "_metadata.json";
const parallelFsCacheRead = /* @__PURE__ */ new Map();
/**
* @experimental
*/
class FileSystemModuleCache {
	/**
	* Even though it's possible to override the folder of project's caches
	* We still keep a single metadata file for all projects because
	* - they can reference files between each other
	* - lockfile changes are reflected for the whole workspace, not just for a single project
	*/
	rootCache;
	metadataFilePath;
	version = "1.0.0-beta.4";
	fsCacheRoots = /* @__PURE__ */ new WeakMap();
	fsEnvironmentHashMap = /* @__PURE__ */ new WeakMap();
	fsCacheKeyGenerators = /* @__PURE__ */ new Set();
	// this exists only to avoid the perf. cost of reading a file and generating a hash again
	// surprisingly, on some machines this has negligible effect
	fsCacheKeys = /* @__PURE__ */ new WeakMap();
	constructor(vitest) {
		this.vitest = vitest;
		const workspaceRoot = searchForWorkspaceRoot(vitest.vite.config.root);
		this.rootCache = vitest.config.experimental.fsModuleCachePath || join(workspaceRoot, "node_modules", ".experimental-vitest-cache");
		this.metadataFilePath = join(this.rootCache, METADATA_FILE);
	}
	defineCacheKeyGenerator(callback) {
		this.fsCacheKeyGenerators.add(callback);
	}
	async clearCache(log = true) {
		const fsCachePaths = this.vitest.projects.map((r) => {
			return r.config.experimental.fsModuleCachePath || this.rootCache;
		});
		const uniquePaths = Array.from(new Set(fsCachePaths));
		await Promise.all(uniquePaths.map((directory) => rm(directory, {
			force: true,
			recursive: true
		})));
		if (log) this.vitest.logger.log(`[cache] cleared fs module cache at ${uniquePaths.join(", ")}`);
	}
	readCachedFileConcurrently(cachedFilePath) {
		if (!parallelFsCacheRead.has(cachedFilePath)) parallelFsCacheRead.set(cachedFilePath, readFile(cachedFilePath, "utf-8").then((code) => {
			const matchIndex = code.lastIndexOf(cacheComment);
			if (matchIndex === -1) {
				debugFs?.(`${c.red("[empty]")} ${cachedFilePath} exists, but doesn't have a ${cacheComment} comment, transforming by vite instead`);
				return;
			}
			return {
				code,
				meta: this.fromBase64(code.slice(matchIndex + cacheCommentLength))
			};
		}).finally(() => {
			parallelFsCacheRead.delete(cachedFilePath);
		}));
		return parallelFsCacheRead.get(cachedFilePath);
	}
	async getCachedModule(cachedFilePath) {
		if (!existsSync(cachedFilePath)) {
			debugFs?.(`${c.red("[empty]")} ${cachedFilePath} doesn't exist, transforming by vite first`);
			return;
		}
		const fileResult = await this.readCachedFileConcurrently(cachedFilePath);
		if (!fileResult) return;
		const { code, meta } = fileResult;
		debugFs?.(`${c.green("[read]")} ${meta.id} is cached in ${cachedFilePath}`);
		return {
			id: meta.id,
			url: meta.url,
			file: meta.file,
			code,
			importedUrls: meta.importedUrls,
			mappings: meta.mappings
		};
	}
	async saveCachedModule(cachedFilePath, fetchResult, importedUrls = [], mappings = false) {
		if ("code" in fetchResult) {
			const result = {
				file: fetchResult.file,
				id: fetchResult.id,
				url: fetchResult.url,
				importedUrls,
				mappings
			};
			debugFs?.(`${c.yellow("[write]")} ${fetchResult.id} is cached in ${cachedFilePath}`);
			await atomicWriteFile(cachedFilePath, `${fetchResult.code}${cacheComment}${this.toBase64(result)}`);
		}
	}
	toBase64(obj) {
		const json = stringify(obj);
		return Buffer.from(json).toString("base64");
	}
	fromBase64(obj) {
		return parse(Buffer.from(obj, "base64").toString("utf-8"));
	}
	invalidateCachePath(environment, id) {
		debugFs?.(`cache for ${id} in ${environment.name} environment is invalidated`);
		this.fsCacheKeys.get(environment)?.delete(id);
	}
	invalidateAllCachePaths(environment) {
		debugFs?.(`the ${environment.name} environment cache is invalidated`);
		this.fsCacheKeys.get(environment)?.clear();
	}
	getMemoryCachePath(environment, id) {
		const result = this.fsCacheKeys.get(environment)?.get(id);
		if (result != null) debugMemory?.(`${c.green("[read]")} ${id} was cached in ${result}`);
		else if (result === null) debugMemory?.(`${c.green("[read]")} ${id} was bailed out`);
		return result;
	}
	generateCachePath(vitestConfig, environment, id, fileContent) {
		// bail out if file has import.meta.glob because it depends on other files
		// TODO: figure out a way to still support it
		if (fileContent.includes("import.meta.glob(")) {
			this.saveMemoryCache(environment, id, null);
			debugMemory?.(`${c.yellow("[write]")} ${id} was bailed out because it has "import.meta.glob"`);
			return null;
		}
		let hashString = "";
		for (const generator of this.fsCacheKeyGenerators) {
			const result = generator({
				environment,
				id,
				sourceCode: fileContent
			});
			if (typeof result === "string") hashString += result;
			if (result === false) {
				this.saveMemoryCache(environment, id, null);
				debugMemory?.(`${c.yellow("[write]")} ${id} was bailed out by a custom generator`);
				return null;
			}
		}
		const config = environment.config;
		// coverage provider is dynamic, so we also clear the whole cache if
		// vitest.enableCoverage/vitest.disableCoverage is called
		const coverageAffectsCache = String(this.vitest.config.coverage.enabled && this.vitest.coverageProvider?.requiresTransform?.(id));
		let cacheConfig = this.fsEnvironmentHashMap.get(environment);
		if (!cacheConfig) {
			cacheConfig = JSON.stringify({
				root: config.root,
				base: config.base,
				mode: config.mode,
				consumer: config.consumer,
				resolve: config.resolve,
				plugins: config.plugins.filter((p) => p.api?.vitest?.experimental?.ignoreFsModuleCache !== true).map((p) => p.name),
				configFileDependencies: config.configFileDependencies.map((file) => tryReadFileSync(file)),
				environment: environment.name,
				css: vitestConfig.css
			}, (_, value) => {
				if (typeof value === "function" || value instanceof RegExp) return value.toString();
				return value;
			});
			this.fsEnvironmentHashMap.set(environment, cacheConfig);
		}
		hashString += id + fileContent + (process.env.NODE_ENV ?? "") + this.version + cacheConfig + coverageAffectsCache;
		const cacheKey = hash("sha1", hashString, "hex");
		let cacheRoot = this.fsCacheRoots.get(vitestConfig);
		if (cacheRoot == null) {
			cacheRoot = vitestConfig.experimental.fsModuleCachePath || this.rootCache;
			this.fsCacheRoots.set(vitestConfig, cacheRoot);
			if (!existsSync(cacheRoot)) mkdirSync(cacheRoot, { recursive: true });
		}
		const fsResultPath = join(cacheRoot, cacheKey);
		debugMemory?.(`${c.yellow("[write]")} ${id} generated a cache in ${fsResultPath}`);
		this.saveMemoryCache(environment, id, fsResultPath);
		return fsResultPath;
	}
	saveMemoryCache(environment, id, cache) {
		let environmentKeys = this.fsCacheKeys.get(environment);
		if (!environmentKeys) {
			environmentKeys = /* @__PURE__ */ new Map();
			this.fsCacheKeys.set(environment, environmentKeys);
		}
		environmentKeys.set(id, cache);
	}
	async readMetadata() {
		// metadata is shared between every projects in the workspace, so we ignore project's fsModuleCachePath
		if (!existsSync(this.metadataFilePath)) return;
		try {
			const content = await readFile(this.metadataFilePath, "utf-8");
			return JSON.parse(content);
		} catch {}
	}
	// before vitest starts running tests, we check that the lockfile wasn't updated
	// if it was, we nuke the previous cache in case a custom plugin was updated
	// or a new version of vite/vitest is installed
	// for the same reason we also cache config file content, but that won't catch changes made in external plugins
	async ensureCacheIntegrity() {
		if (![this.vitest.getRootProject(), ...this.vitest.projects].some((p) => p.config.experimental.fsModuleCache)) return;
		const metadata = await this.readMetadata();
		const currentLockfileHash = getLockfileHash(this.vitest.vite.config.root);
		// no metadata found, just store a new one, don't reset the cache
		if (!metadata) {
			if (!existsSync(this.rootCache)) mkdirSync(this.rootCache, { recursive: true });
			debugFs?.(`fs metadata file was created with hash ${currentLockfileHash}`);
			await writeFile(this.metadataFilePath, JSON.stringify({ lockfileHash: currentLockfileHash }, null, 2), "utf-8");
			return;
		}
		// if lockfile didn't change, don't do anything
		if (metadata.lockfileHash === currentLockfileHash) return;
		// lockfile changed, let's clear all caches
		await this.clearCache(false);
		this.vitest.vite.config.logger.info(`fs cache was cleared because lockfile has changed`, {
			timestamp: true,
			environment: c.yellow("[vitest]")
		});
		debugFs?.(`fs cache was cleared because lockfile has changed`);
	}
}
/**
* Performs an atomic write operation using the write-then-rename pattern.
*
* Why we need this:
* - Ensures file integrity by never leaving partially written files on disk
* - Prevents other processes from reading incomplete data during writes
* - Particularly important for test files where incomplete writes could cause test failures
*
* The implementation writes to a temporary file first, then renames it to the target path.
* This rename operation is atomic on most filesystems (including POSIX-compliant ones),
* guaranteeing that other processes will only ever see the complete file.
*
* Added in https://github.com/vitest-dev/vitest/pull/7531
*/
async function atomicWriteFile(realFilePath, data) {
	const tmpFilePath = join(dirname(realFilePath), `.tmp-${Date.now()}-${Math.random().toString(36).slice(2)}`);
	try {
		await writeFile(tmpFilePath, data, "utf-8");
		await rename(tmpFilePath, realFilePath);
	} finally {
		try {
			if (await stat(tmpFilePath)) await unlink(tmpFilePath);
		} catch {}
	}
}
// lockfile hash resolution taken from vite
// since this is experimental, we don't ask to expose it
const lockfileFormats = [
	{
		path: "node_modules/.package-lock.json",
		checkPatchesDir: "patches",
		manager: "npm"
	},
	{
		path: "node_modules/.yarn-state.yml",
		checkPatchesDir: false,
		manager: "yarn"
	},
	{
		path: ".pnp.cjs",
		checkPatchesDir: ".yarn/patches",
		manager: "yarn"
	},
	{
		path: ".pnp.js",
		checkPatchesDir: ".yarn/patches",
		manager: "yarn"
	},
	{
		path: "node_modules/.yarn-integrity",
		checkPatchesDir: "patches",
		manager: "yarn"
	},
	{
		path: "node_modules/.pnpm/lock.yaml",
		checkPatchesDir: false,
		manager: "pnpm"
	},
	{
		path: ".rush/temp/shrinkwrap-deps.json",
		checkPatchesDir: false,
		manager: "pnpm"
	},
	{
		path: "bun.lock",
		checkPatchesDir: "patches",
		manager: "bun"
	},
	{
		path: "bun.lockb",
		checkPatchesDir: "patches",
		manager: "bun"
	}
].sort((_, { manager }) => {
	return process.env.npm_config_user_agent?.startsWith(manager) ? 1 : -1;
});
const lockfilePaths = lockfileFormats.map((l) => l.path);
function getLockfileHash(root) {
	const lockfilePath = lookupFile(root, lockfilePaths);
	let content = lockfilePath ? fs.readFileSync(lockfilePath, "utf-8") : "";
	if (lockfilePath) {
		const normalizedLockfilePath = lockfilePath.replaceAll("\\", "/");
		const lockfileFormat = lockfileFormats.find((f) => normalizedLockfilePath.endsWith(f.path));
		if (lockfileFormat.checkPatchesDir) {
			const stat = tryStatSync(join(lockfilePath.slice(0, -lockfileFormat.path.length), lockfileFormat.checkPatchesDir));
			if (stat?.isDirectory()) content += stat.mtimeMs.toString();
		}
	}
	return hash("sha256", content, "hex").substring(0, 8).padEnd(8, "_");
}
function lookupFile(dir, fileNames) {
	while (dir) {
		for (const fileName of fileNames) {
			const fullPath = join(dir, fileName);
			if (tryStatSync(fullPath)?.isFile()) return fullPath;
		}
		const parentDir = dirname(dir);
		if (parentDir === dir) return;
		dir = parentDir;
	}
}
function tryReadFileSync(file) {
	try {
		return readFileSync(file, "utf-8");
	} catch {
		return "";
	}
}
function tryStatSync(file) {
	try {
		// The "throwIfNoEntry" is a performance optimization for cases where the file does not exist
		return fs.statSync(file, { throwIfNoEntry: false });
	} catch {}
}

// this is copy pasted from vite
function normalizeResolvedIdToUrl(environment, resolvedId) {
	const root = environment.config.root;
	const depsOptimizer = environment.depsOptimizer;
	let url;
	// normalize all imports into resolved URLs
	// e.g. `import 'foo'` -> `import '/@fs/.../node_modules/foo/index.js'`
	if (resolvedId.startsWith(withTrailingSlash(root)))
 // in root: infer short absolute path from root
	url = resolvedId.slice(root.length);
	else if (depsOptimizer?.isOptimizedDepFile(resolvedId) || resolvedId !== "/@react-refresh" && path.isAbsolute(resolvedId) && existsSync(cleanUrl(resolvedId)))
 // an optimized deps may not yet exists in the filesystem, or
	// a regular file exists but is out of root: rewrite to absolute /@fs/ paths
	url = path.posix.join("/@fs/", resolvedId);
	else url = resolvedId;
	// if the resolved id is not a valid browser import specifier,
	// prefix it to make it valid. We will strip this before feeding it
	// back into the transform pipeline
	if (url[0] !== "." && url[0] !== "/") url = wrapId(resolvedId);
	return url;
}

const saveCachePromises = /* @__PURE__ */ new Map();
const readFilePromises = /* @__PURE__ */ new Map();
class ModuleFetcher {
	tmpDirectories = /* @__PURE__ */ new Set();
	fsCacheEnabled;
	constructor(resolver, config, fsCache, tmpProjectDir) {
		this.resolver = resolver;
		this.config = config;
		this.fsCache = fsCache;
		this.tmpProjectDir = tmpProjectDir;
		this.fsCacheEnabled = config.experimental?.fsModuleCache === true;
	}
	async fetch(trace, url, importer, environment, makeTmpCopies, options) {
		if (url.startsWith("data:")) {
			trace.setAttribute("vitest.module.external", url);
			return {
				externalize: url,
				type: "builtin"
			};
		}
		if (url === "/@vite/client" || url === "@vite/client") {
			trace.setAttribute("vitest.module.external", url);
			return {
				externalize: "/@vite/client",
				type: "module"
			};
		}
		const isFileUrl = url.startsWith("file://");
		if (isExternalUrl(url) && !isFileUrl) {
			trace.setAttribute("vitest.module.external", url);
			return {
				externalize: url,
				type: "network"
			};
		}
		// handle unresolved id of dynamic import skipped by Vite import analysis
		if (url[0] !== "/") {
			const resolved = await environment.pluginContainer.resolveId(url, importer);
			if (resolved) url = normalizeResolvedIdToUrl(environment, resolved.id);
		}
		const moduleGraphModule = await environment.moduleGraph.ensureEntryFromUrl(unwrapId(url));
		const cached = !!moduleGraphModule.transformResult;
		if (moduleGraphModule.file) trace.setAttribute("code.file.path", moduleGraphModule.file);
		if (options?.cached && cached) return { cache: true };
		const externalize = await this.resolver.shouldExternalize(moduleGraphModule.id);
		if (externalize) return {
			externalize,
			type: "module"
		};
		const cachePath = await this.getCachePath(environment, moduleGraphModule);
		// full fs caching is disabled, but we still want to keep tmp files if makeTmpCopies is enabled
		// this is primarily used by the forks pool to avoid using process.send(bigBuffer)
		if (cachePath == null) {
			const result = await this.fetchAndProcess(environment, url, importer, moduleGraphModule, options);
			this.recordResult(trace, result);
			if (!makeTmpCopies || !("code" in result)) return result;
			const transformResult = moduleGraphModule.transformResult;
			const tmpPath = transformResult && Reflect.get(transformResult, "_vitest_tmp");
			if (typeof tmpPath === "string") return getCachedResult(result, tmpPath);
			const tmpDir = join(this.tmpProjectDir, environment.name);
			if (!this.tmpDirectories.has(tmpDir)) {
				if (!existsSync(tmpDir)) mkdirSync(tmpDir, { recursive: true });
				this.tmpDirectories.add(tmpDir);
			}
			const tmpFile = join(tmpDir, hash("sha1", result.id, "hex"));
			return this.cacheResult(result, tmpFile).then((result) => {
				if (transformResult) Reflect.set(transformResult, "_vitest_tmp", tmpFile);
				return result;
			});
		}
		if (saveCachePromises.has(cachePath)) return saveCachePromises.get(cachePath).then((result) => {
			this.recordResult(trace, result);
			return result;
		});
		const cachedModule = await this.getCachedModule(cachePath, environment, moduleGraphModule, importer);
		if (cachedModule) {
			this.recordResult(trace, cachedModule);
			return cachedModule;
		}
		const result = await this.fetchAndProcess(environment, url, importer, moduleGraphModule, options);
		const importedUrls = this.getSerializedImports(moduleGraphModule);
		const map = moduleGraphModule.transformResult?.map;
		const mappings = map && !("version" in map) && map.mappings === "";
		return this.cacheResult(result, cachePath, importedUrls, !!mappings);
	}
	// we need this for UI to be able to show a module graph
	getSerializedImports(node) {
		const imports = [];
		node.importedModules.forEach((importer) => {
			imports.push(importer.url);
		});
		return imports;
	}
	recordResult(trace, result) {
		if ("externalize" in result) trace.setAttributes({
			"vitest.fetched_module.external": result.externalize,
			"vitest.fetched_module.type": result.type
		});
		if ("id" in result) {
			trace.setAttributes({
				"vitest.fetched_module.invalidate": result.invalidate,
				"vitest.fetched_module.id": result.id,
				"vitest.fetched_module.url": result.url,
				"vitest.fetched_module.cache": false
			});
			if (result.file) trace.setAttribute("code.file.path", result.file);
		}
		if ("code" in result) trace.setAttribute("vitest.fetched_module.code_length", result.code.length);
	}
	async getCachePath(environment, moduleGraphModule) {
		if (!this.fsCacheEnabled) return null;
		const moduleId = moduleGraphModule.id;
		const memoryCacheKey = this.fsCache.getMemoryCachePath(environment, moduleId);
		// undefined means there is no key in memory
		// null means the file should not be cached
		if (memoryCacheKey !== void 0) return memoryCacheKey;
		const fileContent = await this.readFileContentToCache(environment, moduleGraphModule);
		return this.fsCache.generateCachePath(this.config, environment, moduleGraphModule.id, fileContent);
	}
	async readFileContentToCache(environment, moduleGraphModule) {
		if (moduleGraphModule.file && !moduleGraphModule.file.startsWith("\0") && !moduleGraphModule.file.startsWith("virtual:")) {
			const result = await this.readFileConcurrently(moduleGraphModule.file);
			if (result != null) return result;
		}
		const loadResult = await environment.pluginContainer.load(moduleGraphModule.id);
		if (typeof loadResult === "string") return loadResult;
		if (loadResult != null) return loadResult.code;
		return "";
	}
	async getCachedModule(cachePath, environment, moduleGraphModule, importer) {
		if (moduleGraphModule.transformResult?.__vitestTmp) return {
			cached: true,
			file: moduleGraphModule.file,
			id: moduleGraphModule.id,
			tmp: moduleGraphModule.transformResult.__vitestTmp,
			url: moduleGraphModule.url,
			invalidate: false
		};
		const cachedModule = await this.fsCache.getCachedModule(cachePath);
		if (!cachedModule) return;
		// keep the module graph in sync
		let map = extractSourceMap(cachedModule.code);
		if (map && cachedModule.file) map.file = cachedModule.file;
		// mappings is a special source map identifier in rollup
		if (!map && cachedModule.mappings) map = { mappings: "" };
		moduleGraphModule.transformResult = {
			code: cachedModule.code,
			map,
			ssr: true,
			__vitestTmp: cachePath
		};
		// we populate the module graph to make the watch mode work because it relies on importers
		if (importer) {
			const environmentNode = environment.moduleGraph.getModuleById(importer);
			if (environmentNode) moduleGraphModule.importers.add(environmentNode);
		}
		await Promise.all(cachedModule.importedUrls.map(async (url) => {
			const moduleNode = await environment.moduleGraph.ensureEntryFromUrl(url).catch(() => null);
			if (moduleNode) {
				moduleNode.importers.add(moduleGraphModule);
				moduleGraphModule.importedModules.add(moduleNode);
			}
		}));
		return {
			cached: true,
			file: cachedModule.file,
			id: cachedModule.id,
			tmp: cachePath,
			url: cachedModule.url,
			invalidate: false
		};
	}
	async fetchAndProcess(environment, url, importer, moduleGraphModule, options) {
		return processResultSource(environment, await fetchModule(environment, url, importer, {
			...options,
			inlineSourceMap: false
		}).catch(handleRollupError));
	}
	async cacheResult(result, cachePath, importedUrls = [], mappings = false) {
		const returnResult = "code" in result ? getCachedResult(result, cachePath) : result;
		if (saveCachePromises.has(cachePath)) {
			await saveCachePromises.get(cachePath);
			return returnResult;
		}
		const savePromise = this.fsCache.saveCachedModule(cachePath, result, importedUrls, mappings).then(() => result).finally(() => {
			saveCachePromises.delete(cachePath);
		});
		saveCachePromises.set(cachePath, savePromise);
		await savePromise;
		return returnResult;
	}
	readFileConcurrently(file) {
		if (!readFilePromises.has(file)) readFilePromises.set(
			file,
			// virtual file can have a "file" property
			readFile(file, "utf-8").catch(() => null).finally(() => {
				readFilePromises.delete(file);
			})
		);
		return readFilePromises.get(file);
	}
}
function createFetchModuleFunction(resolver, config, fsCache, traces, tmpProjectDir) {
	const fetcher = new ModuleFetcher(resolver, config, fsCache, tmpProjectDir);
	return async (url, importer, environment, cacheFs, options, otelCarrier) => {
		await traces.waitInit();
		const context = otelCarrier ? traces.getContextFromCarrier(otelCarrier) : void 0;
		return traces.$("vitest.module.transform", context ? { context } : {}, (span) => fetcher.fetch(span, url, importer, environment, cacheFs, options));
	};
}
let SOURCEMAPPING_URL = "sourceMa";
SOURCEMAPPING_URL += "ppingURL";
const MODULE_RUNNER_SOURCEMAPPING_SOURCE = "//# sourceMappingSource=vite-generated";
function processResultSource(environment, result) {
	if (!("code" in result)) return result;
	const node = environment.moduleGraph.getModuleById(result.id);
	if (node?.transformResult)
 // this also overrides node.transformResult.code which is also what the module
	// runner does under the hood by default (we disable source maps inlining)
	inlineSourceMap(node.transformResult);
	return {
		...result,
		code: node?.transformResult?.code || result.code
	};
}
const OTHER_SOURCE_MAP_REGEXP = new RegExp(`//# ${SOURCEMAPPING_URL}=data:application/json[^,]+base64,([A-Za-z0-9+/=]+)$`, "gm");
// we have to inline the source map ourselves, because
// - we don't need //# sourceURL since we are running code in VM
//   - important in stack traces and the V8 coverage
// - we need to inject an empty line for --inspect-brk
function inlineSourceMap(result) {
	const map = result.map;
	let code = result.code;
	if (!map || !("version" in map) || code.includes(MODULE_RUNNER_SOURCEMAPPING_SOURCE)) return result;
	// to reduce the payload size, we only inline vite node source map, because it's also the only one we use
	OTHER_SOURCE_MAP_REGEXP.lastIndex = 0;
	if (OTHER_SOURCE_MAP_REGEXP.test(code)) code = code.replace(OTHER_SOURCE_MAP_REGEXP, "");
	const sourceMap = { ...map };
	// If the first line is not present on source maps, add simple 1:1 mapping ([0,0,0,0], [1,0,0,0])
	// so that debuggers can be set to break on first line
	if (sourceMap.mappings[0] === ";") sourceMap.mappings = `AAAA,CAAA${sourceMap.mappings}`;
	result.code = `${code.trimEnd()}\n${MODULE_RUNNER_SOURCEMAPPING_SOURCE}\n//# ${SOURCEMAPPING_URL}=${genSourceMapUrl(sourceMap)}\n`;
	return result;
}
function genSourceMapUrl(map) {
	if (typeof map !== "string") map = JSON.stringify(map);
	return `data:application/json;base64,${Buffer.from(map).toString("base64")}`;
}
function getCachedResult(result, tmp) {
	return {
		cached: true,
		file: result.file,
		id: result.id,
		tmp,
		url: result.url,
		invalidate: result.invalidate
	};
}
const MODULE_RUNNER_SOURCEMAPPING_REGEXP = new RegExp(`//# ${SOURCEMAPPING_URL}=data:application/json;base64,(.+)`);
function extractSourceMap(code) {
	const pattern = `//# ${SOURCEMAPPING_URL}=data:application/json;base64,`;
	const lastIndex = code.lastIndexOf(pattern);
	if (lastIndex === -1) return null;
	const mapString = MODULE_RUNNER_SOURCEMAPPING_REGEXP.exec(code.slice(lastIndex))?.[1];
	if (!mapString) return null;
	const sourceMap = JSON.parse(Buffer.from(mapString, "base64").toString("utf-8"));
	// remove source map mapping added by "inlineSourceMap" to keep the original behaviour of transformRequest
	if (sourceMap.mappings.startsWith("AAAA,CAAA;"))
 // 9 because we want to only remove "AAAA,CAAA", but keep ; at the start
	sourceMap.mappings = sourceMap.mappings.slice(9);
	return sourceMap;
}
// serialize rollup error on server to preserve details as a test error
function handleRollupError(e) {
	if (e instanceof Error && ("plugin" in e || "frame" in e || "id" in e))
 // eslint-disable-next-line no-throw-literal
	throw {
		name: e.name,
		message: e.message,
		stack: e.stack,
		cause: e.cause,
		__vitest_rollup_error__: {
			plugin: e.plugin,
			id: e.id,
			loc: e.loc,
			frame: e.frame
		}
	};
	throw e;
}

class ServerModuleRunner extends ModuleRunner {
	constructor(environment, fetcher, config) {
		super({
			hmr: false,
			transport: { async invoke(event) {
				if (event.type !== "custom") throw new Error(`Vitest Module Runner doesn't support Vite HMR events.`);
				const { name, data } = event.data;
				if (name === "getBuiltins") return await environment.hot.handleInvoke(event);
				if (name !== "fetchModule") return { error: /* @__PURE__ */ new Error(`Unknown method: ${name}. Expected "fetchModule".`) };
				try {
					const result = await fetcher(data[0], data[1], environment, false, data[2]);
					if ("tmp" in result) {
						const code = await readFile(result.tmp);
						return { result: {
							...result,
							code
						} };
					}
					return { result };
				} catch (error) {
					return { error };
				}
			} }
		}, new VitestModuleEvaluator());
		this.environment = environment;
		this.config = config;
	}
	async import(rawId) {
		const resolved = await this.environment.pluginContainer.resolveId(rawId, this.config.root);
		if (!resolved) return super.import(rawId);
		// Vite will make "@vitest/coverage-v8" into "@vitest/coverage-v8.js" url
		// instead of using an actual file path-like URL, so we resolve it here first
		const url = normalizeResolvedIdToUrl(this.environment, resolved.id);
		return super.import(url);
	}
}

class FilesNotFoundError extends Error {
	code = "VITEST_FILES_NOT_FOUND";
	constructor(mode) {
		super(`No ${mode} files found`);
	}
}
class GitNotFoundError extends Error {
	code = "VITEST_GIT_NOT_FOUND";
	constructor() {
		super("Could not find Git root. Have you initialized git with `git init`?");
	}
}
class LocationFilterFileNotFoundError extends Error {
	code = "VITEST_LOCATION_FILTER_FILE_NOT_FOUND";
	constructor(filename) {
		super(`Couldn\'t find file ${filename}. Note when specifying the test location you have to specify the full test filename.`);
	}
}
class IncludeTaskLocationDisabledError extends Error {
	code = "VITEST_INCLUDE_TASK_LOCATION_DISABLED";
	constructor() {
		super("Received line number filters while `includeTaskLocation` option is disabled");
	}
}
class RangeLocationFilterProvidedError extends Error {
	code = "VITEST_RANGE_LOCATION_FILTER_PROVIDED";
	constructor(filter) {
		super(`Found "-" in location filter ${filter}.  Note that range location filters are not supported.  Consider specifying the exact line numbers of your tests.`);
	}
}
class VitestFilteredOutProjectError extends Error {
	code = "VITEST_FILTERED_OUT_PROJECT";
	constructor() {
		super("VITEST_FILTERED_OUT_PROJECT");
	}
}

var jsTokens_1$1;
var hasRequiredJsTokens$1;

function requireJsTokens$1 () {
	if (hasRequiredJsTokens$1) return jsTokens_1$1;
	hasRequiredJsTokens$1 = 1;
	// Copyright 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023 Simon Lydell
	// License: MIT.
	var Identifier, JSXIdentifier, JSXPunctuator, JSXString, JSXText, KeywordsWithExpressionAfter, KeywordsWithNoLineTerminatorAfter, LineTerminatorSequence, MultiLineComment, Newline, NumericLiteral, Punctuator, RegularExpressionLiteral, SingleLineComment, StringLiteral, Template, TokensNotPrecedingObjectLiteral, TokensPrecedingExpression, WhiteSpace;
	RegularExpressionLiteral = /\/(?![*\/])(?:\[(?:(?![\]\\]).|\\.)*\]|(?![\/\\]).|\\.)*(\/[$_\u200C\u200D\p{ID_Continue}]*|\\)?/yu;
	Punctuator = /--|\+\+|=>|\.{3}|\??\.(?!\d)|(?:&&|\|\||\?\?|[+\-%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2}|\/(?![\/*]))=?|[?~,:;[\](){}]/y;
	Identifier = /(\x23?)(?=[$_\p{ID_Start}\\])(?:[$_\u200C\u200D\p{ID_Continue}]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+/yu;
	StringLiteral = /(['"])(?:(?!\1)[^\\\n\r]|\\(?:\r\n|[^]))*(\1)?/y;
	NumericLiteral = /(?:0[xX][\da-fA-F](?:_?[\da-fA-F])*|0[oO][0-7](?:_?[0-7])*|0[bB][01](?:_?[01])*)n?|0n|[1-9](?:_?\d)*n|(?:(?:0(?!\d)|0\d*[89]\d*|[1-9](?:_?\d)*)(?:\.(?:\d(?:_?\d)*)?)?|\.\d(?:_?\d)*)(?:[eE][+-]?\d(?:_?\d)*)?|0[0-7]+/y;
	Template = /[`}](?:[^`\\$]|\\[^]|\$(?!\{))*(`|\$\{)?/y;
	WhiteSpace = /[\t\v\f\ufeff\p{Zs}]+/yu;
	LineTerminatorSequence = /\r?\n|[\r\u2028\u2029]/y;
	MultiLineComment = /\/\*(?:[^*]|\*(?!\/))*(\*\/)?/y;
	SingleLineComment = /\/\/.*/y;
	JSXPunctuator = /[<>.:={}]|\/(?![\/*])/y;
	JSXIdentifier = /[$_\p{ID_Start}][$_\u200C\u200D\p{ID_Continue}-]*/yu;
	JSXString = /(['"])(?:(?!\1)[^])*(\1)?/y;
	JSXText = /[^<>{}]+/y;
	TokensPrecedingExpression = /^(?:[\/+-]|\.{3}|\?(?:InterpolationIn(?:JSX|Template)|NoLineTerminatorHere|NonExpressionParenEnd|UnaryIncDec))?$|[{}([,;<>=*%&|^!~?:]$/;
	TokensNotPrecedingObjectLiteral = /^(?:=>|[;\]){}]|else|\?(?:NoLineTerminatorHere|NonExpressionParenEnd))?$/;
	KeywordsWithExpressionAfter = /^(?:await|case|default|delete|do|else|instanceof|new|return|throw|typeof|void|yield)$/;
	KeywordsWithNoLineTerminatorAfter = /^(?:return|throw|yield)$/;
	Newline = RegExp(LineTerminatorSequence.source);
	jsTokens_1$1 = function*(input, {jsx = false} = {}) {
		var braces, firstCodePoint, isExpression, lastIndex, lastSignificantToken, length, match, mode, nextLastIndex, nextLastSignificantToken, parenNesting, postfixIncDec, punctuator, stack;
		({length} = input);
		lastIndex = 0;
		lastSignificantToken = "";
		stack = [
			{tag: "JS"}
		];
		braces = [];
		parenNesting = 0;
		postfixIncDec = false;
		while (lastIndex < length) {
			mode = stack[stack.length - 1];
			switch (mode.tag) {
				case "JS":
				case "JSNonExpressionParen":
				case "InterpolationInTemplate":
				case "InterpolationInJSX":
					if (input[lastIndex] === "/" && (TokensPrecedingExpression.test(lastSignificantToken) || KeywordsWithExpressionAfter.test(lastSignificantToken))) {
						RegularExpressionLiteral.lastIndex = lastIndex;
						if (match = RegularExpressionLiteral.exec(input)) {
							lastIndex = RegularExpressionLiteral.lastIndex;
							lastSignificantToken = match[0];
							postfixIncDec = true;
							yield ({
								type: "RegularExpressionLiteral",
								value: match[0],
								closed: match[1] !== void 0 && match[1] !== "\\"
							});
							continue;
						}
					}
					Punctuator.lastIndex = lastIndex;
					if (match = Punctuator.exec(input)) {
						punctuator = match[0];
						nextLastIndex = Punctuator.lastIndex;
						nextLastSignificantToken = punctuator;
						switch (punctuator) {
							case "(":
								if (lastSignificantToken === "?NonExpressionParenKeyword") {
									stack.push({
										tag: "JSNonExpressionParen",
										nesting: parenNesting
									});
								}
								parenNesting++;
								postfixIncDec = false;
								break;
							case ")":
								parenNesting--;
								postfixIncDec = true;
								if (mode.tag === "JSNonExpressionParen" && parenNesting === mode.nesting) {
									stack.pop();
									nextLastSignificantToken = "?NonExpressionParenEnd";
									postfixIncDec = false;
								}
								break;
							case "{":
								Punctuator.lastIndex = 0;
								isExpression = !TokensNotPrecedingObjectLiteral.test(lastSignificantToken) && (TokensPrecedingExpression.test(lastSignificantToken) || KeywordsWithExpressionAfter.test(lastSignificantToken));
								braces.push(isExpression);
								postfixIncDec = false;
								break;
							case "}":
								switch (mode.tag) {
									case "InterpolationInTemplate":
										if (braces.length === mode.nesting) {
											Template.lastIndex = lastIndex;
											match = Template.exec(input);
											lastIndex = Template.lastIndex;
											lastSignificantToken = match[0];
											if (match[1] === "${") {
												lastSignificantToken = "?InterpolationInTemplate";
												postfixIncDec = false;
												yield ({
													type: "TemplateMiddle",
													value: match[0]
												});
											} else {
												stack.pop();
												postfixIncDec = true;
												yield ({
													type: "TemplateTail",
													value: match[0],
													closed: match[1] === "`"
												});
											}
											continue;
										}
										break;
									case "InterpolationInJSX":
										if (braces.length === mode.nesting) {
											stack.pop();
											lastIndex += 1;
											lastSignificantToken = "}";
											yield ({
												type: "JSXPunctuator",
												value: "}"
											});
											continue;
										}
								}
								postfixIncDec = braces.pop();
								nextLastSignificantToken = postfixIncDec ? "?ExpressionBraceEnd" : "}";
								break;
							case "]":
								postfixIncDec = true;
								break;
							case "++":
							case "--":
								nextLastSignificantToken = postfixIncDec ? "?PostfixIncDec" : "?UnaryIncDec";
								break;
							case "<":
								if (jsx && (TokensPrecedingExpression.test(lastSignificantToken) || KeywordsWithExpressionAfter.test(lastSignificantToken))) {
									stack.push({tag: "JSXTag"});
									lastIndex += 1;
									lastSignificantToken = "<";
									yield ({
										type: "JSXPunctuator",
										value: punctuator
									});
									continue;
								}
								postfixIncDec = false;
								break;
							default:
								postfixIncDec = false;
						}
						lastIndex = nextLastIndex;
						lastSignificantToken = nextLastSignificantToken;
						yield ({
							type: "Punctuator",
							value: punctuator
						});
						continue;
					}
					Identifier.lastIndex = lastIndex;
					if (match = Identifier.exec(input)) {
						lastIndex = Identifier.lastIndex;
						nextLastSignificantToken = match[0];
						switch (match[0]) {
							case "for":
							case "if":
							case "while":
							case "with":
								if (lastSignificantToken !== "." && lastSignificantToken !== "?.") {
									nextLastSignificantToken = "?NonExpressionParenKeyword";
								}
						}
						lastSignificantToken = nextLastSignificantToken;
						postfixIncDec = !KeywordsWithExpressionAfter.test(match[0]);
						yield ({
							type: match[1] === "#" ? "PrivateIdentifier" : "IdentifierName",
							value: match[0]
						});
						continue;
					}
					StringLiteral.lastIndex = lastIndex;
					if (match = StringLiteral.exec(input)) {
						lastIndex = StringLiteral.lastIndex;
						lastSignificantToken = match[0];
						postfixIncDec = true;
						yield ({
							type: "StringLiteral",
							value: match[0],
							closed: match[2] !== void 0
						});
						continue;
					}
					NumericLiteral.lastIndex = lastIndex;
					if (match = NumericLiteral.exec(input)) {
						lastIndex = NumericLiteral.lastIndex;
						lastSignificantToken = match[0];
						postfixIncDec = true;
						yield ({
							type: "NumericLiteral",
							value: match[0]
						});
						continue;
					}
					Template.lastIndex = lastIndex;
					if (match = Template.exec(input)) {
						lastIndex = Template.lastIndex;
						lastSignificantToken = match[0];
						if (match[1] === "${") {
							lastSignificantToken = "?InterpolationInTemplate";
							stack.push({
								tag: "InterpolationInTemplate",
								nesting: braces.length
							});
							postfixIncDec = false;
							yield ({
								type: "TemplateHead",
								value: match[0]
							});
						} else {
							postfixIncDec = true;
							yield ({
								type: "NoSubstitutionTemplate",
								value: match[0],
								closed: match[1] === "`"
							});
						}
						continue;
					}
					break;
				case "JSXTag":
				case "JSXTagEnd":
					JSXPunctuator.lastIndex = lastIndex;
					if (match = JSXPunctuator.exec(input)) {
						lastIndex = JSXPunctuator.lastIndex;
						nextLastSignificantToken = match[0];
						switch (match[0]) {
							case "<":
								stack.push({tag: "JSXTag"});
								break;
							case ">":
								stack.pop();
								if (lastSignificantToken === "/" || mode.tag === "JSXTagEnd") {
									nextLastSignificantToken = "?JSX";
									postfixIncDec = true;
								} else {
									stack.push({tag: "JSXChildren"});
								}
								break;
							case "{":
								stack.push({
									tag: "InterpolationInJSX",
									nesting: braces.length
								});
								nextLastSignificantToken = "?InterpolationInJSX";
								postfixIncDec = false;
								break;
							case "/":
								if (lastSignificantToken === "<") {
									stack.pop();
									if (stack[stack.length - 1].tag === "JSXChildren") {
										stack.pop();
									}
									stack.push({tag: "JSXTagEnd"});
								}
						}
						lastSignificantToken = nextLastSignificantToken;
						yield ({
							type: "JSXPunctuator",
							value: match[0]
						});
						continue;
					}
					JSXIdentifier.lastIndex = lastIndex;
					if (match = JSXIdentifier.exec(input)) {
						lastIndex = JSXIdentifier.lastIndex;
						lastSignificantToken = match[0];
						yield ({
							type: "JSXIdentifier",
							value: match[0]
						});
						continue;
					}
					JSXString.lastIndex = lastIndex;
					if (match = JSXString.exec(input)) {
						lastIndex = JSXString.lastIndex;
						lastSignificantToken = match[0];
						yield ({
							type: "JSXString",
							value: match[0],
							closed: match[2] !== void 0
						});
						continue;
					}
					break;
				case "JSXChildren":
					JSXText.lastIndex = lastIndex;
					if (match = JSXText.exec(input)) {
						lastIndex = JSXText.lastIndex;
						lastSignificantToken = match[0];
						yield ({
							type: "JSXText",
							value: match[0]
						});
						continue;
					}
					switch (input[lastIndex]) {
						case "<":
							stack.push({tag: "JSXTag"});
							lastIndex++;
							lastSignificantToken = "<";
							yield ({
								type: "JSXPunctuator",
								value: "<"
							});
							continue;
						case "{":
							stack.push({
								tag: "InterpolationInJSX",
								nesting: braces.length
							});
							lastIndex++;
							lastSignificantToken = "?InterpolationInJSX";
							postfixIncDec = false;
							yield ({
								type: "JSXPunctuator",
								value: "{"
							});
							continue;
					}
			}
			WhiteSpace.lastIndex = lastIndex;
			if (match = WhiteSpace.exec(input)) {
				lastIndex = WhiteSpace.lastIndex;
				yield ({
					type: "WhiteSpace",
					value: match[0]
				});
				continue;
			}
			LineTerminatorSequence.lastIndex = lastIndex;
			if (match = LineTerminatorSequence.exec(input)) {
				lastIndex = LineTerminatorSequence.lastIndex;
				postfixIncDec = false;
				if (KeywordsWithNoLineTerminatorAfter.test(lastSignificantToken)) {
					lastSignificantToken = "?NoLineTerminatorHere";
				}
				yield ({
					type: "LineTerminatorSequence",
					value: match[0]
				});
				continue;
			}
			MultiLineComment.lastIndex = lastIndex;
			if (match = MultiLineComment.exec(input)) {
				lastIndex = MultiLineComment.lastIndex;
				if (Newline.test(match[0])) {
					postfixIncDec = false;
					if (KeywordsWithNoLineTerminatorAfter.test(lastSignificantToken)) {
						lastSignificantToken = "?NoLineTerminatorHere";
					}
				}
				yield ({
					type: "MultiLineComment",
					value: match[0],
					closed: match[1] !== void 0
				});
				continue;
			}
			SingleLineComment.lastIndex = lastIndex;
			if (match = SingleLineComment.exec(input)) {
				lastIndex = SingleLineComment.lastIndex;
				postfixIncDec = false;
				yield ({
					type: "SingleLineComment",
					value: match[0]
				});
				continue;
			}
			firstCodePoint = String.fromCodePoint(input.codePointAt(lastIndex));
			lastIndex += firstCodePoint.length;
			lastSignificantToken = firstCodePoint;
			postfixIncDec = false;
			yield ({
				type: mode.tag.startsWith("JSX") ? "JSXInvalid" : "Invalid",
				value: firstCodePoint
			});
		}
		return void 0;
	};
	return jsTokens_1$1;
}

var jsTokensExports$1 = requireJsTokens$1();
var jsTokens$1 = /*@__PURE__*/getDefaultExportFromCjs(jsTokensExports$1);

// src/index.ts
var reservedWords = {
  keyword: [
    "break",
    "case",
    "catch",
    "continue",
    "debugger",
    "default",
    "do",
    "else",
    "finally",
    "for",
    "function",
    "if",
    "return",
    "switch",
    "throw",
    "try",
    "var",
    "const",
    "while",
    "with",
    "new",
    "this",
    "super",
    "class",
    "extends",
    "export",
    "import",
    "null",
    "true",
    "false",
    "in",
    "instanceof",
    "typeof",
    "void",
    "delete"
  ],
  strict: [
    "implements",
    "interface",
    "let",
    "package",
    "private",
    "protected",
    "public",
    "static",
    "yield"
  ]
}, keywords = new Set(reservedWords.keyword), reservedWordsStrictSet = new Set(reservedWords.strict), sometimesKeywords = /* @__PURE__ */ new Set(["as", "async", "from", "get", "of", "set"]);
function isReservedWord(word) {
  return word === "await" || word === "enum";
}
function isStrictReservedWord(word) {
  return isReservedWord(word) || reservedWordsStrictSet.has(word);
}
function isKeyword(word) {
  return keywords.has(word);
}
var BRACKET = /^[()[\]{}]$/, getTokenType = function(token) {
  if (token.type === "IdentifierName") {
    if (isKeyword(token.value) || isStrictReservedWord(token.value) || sometimesKeywords.has(token.value))
      return "Keyword";
    if (token.value[0] && token.value[0] !== token.value[0].toLowerCase())
      return "IdentifierCapitalized";
  }
  return token.type === "Punctuator" && BRACKET.test(token.value) ? "Bracket" : token.type === "Invalid" && (token.value === "@" || token.value === "#") ? "Punctuator" : token.type;
};
function getCallableType(token) {
  if (token.type === "IdentifierName")
    return "IdentifierCallable";
  if (token.type === "PrivateIdentifier")
    return "PrivateIdentifierCallable";
  throw new Error("Not a callable token");
}
var colorize = (defs, type, value) => {
  let colorize2 = defs[type];
  return colorize2 ? colorize2(value) : value;
}, highlightTokens = (defs, text, jsx) => {
  let highlighted = "", lastPotentialCallable = null, stackedHighlight = "";
  for (let token of jsTokens$1(text, { jsx })) {
    let type = getTokenType(token);
    if (type === "IdentifierName" || type === "PrivateIdentifier") {
      lastPotentialCallable && (highlighted += colorize(defs, getTokenType(lastPotentialCallable), lastPotentialCallable.value) + stackedHighlight, stackedHighlight = ""), lastPotentialCallable = token;
      continue;
    }
    if (lastPotentialCallable && (token.type === "WhiteSpace" || token.type === "LineTerminatorSequence" || token.type === "Punctuator" && (token.value === "?." || token.value === "!"))) {
      stackedHighlight += colorize(defs, type, token.value);
      continue;
    }
    if (stackedHighlight && !lastPotentialCallable && (highlighted += stackedHighlight, stackedHighlight = ""), lastPotentialCallable) {
      let type2 = token.type === "Punctuator" && token.value === "(" ? getCallableType(lastPotentialCallable) : getTokenType(lastPotentialCallable);
      highlighted += colorize(defs, type2, lastPotentialCallable.value) + stackedHighlight, stackedHighlight = "", lastPotentialCallable = null;
    }
    highlighted += colorize(defs, type, token.value);
  }
  return highlighted;
};
function highlight(code, options = { jsx: false, colors: {} }) {
  return code && highlightTokens(options.colors || {}, code, options.jsx);
}

const HIGHLIGHT_SUPPORTED_EXTS = new Set(["js", "ts"].flatMap((lang) => [
	`.${lang}`,
	`.m${lang}`,
	`.c${lang}`,
	`.${lang}x`,
	`.m${lang}x`,
	`.c${lang}x`
]));
function highlightCode(id, source) {
	const ext = extname(id);
	if (!HIGHLIGHT_SUPPORTED_EXTS.has(ext)) return source;
	return highlight(source, {
		jsx: ext.endsWith("x"),
		colors: getDefs(c)
	});
}
function getDefs(c) {
	const Invalid = (text) => c.white(c.bgRed(c.bold(text)));
	return {
		Keyword: c.magenta,
		IdentifierCapitalized: c.yellow,
		Punctuator: c.yellow,
		StringLiteral: c.green,
		NoSubstitutionTemplate: c.green,
		MultiLineComment: c.gray,
		SingleLineComment: c.gray,
		RegularExpressionLiteral: c.cyan,
		NumericLiteral: c.blue,
		TemplateHead: (text) => c.green(text.slice(0, text.length - 2)) + c.cyan(text.slice(-2)),
		TemplateTail: (text) => c.cyan(text.slice(0, 1)) + c.green(text.slice(1)),
		TemplateMiddle: (text) => c.cyan(text.slice(0, 1)) + c.green(text.slice(1, text.length - 2)) + c.cyan(text.slice(-2)),
		IdentifierCallable: c.blue,
		PrivateIdentifierCallable: (text) => `#${c.blue(text.slice(1))}`,
		Invalid,
		JSXString: c.green,
		JSXIdentifier: c.yellow,
		JSXInvalid: Invalid,
		JSXPunctuator: c.yellow
	};
}

const PAD = "      ";
const ESC$1 = "\x1B[";
const ERASE_DOWN = `${ESC$1}J`;
const ERASE_SCROLLBACK = `${ESC$1}3J`;
const CURSOR_TO_START = `${ESC$1}1;1H`;
const HIDE_CURSOR = `${ESC$1}?25l`;
const SHOW_CURSOR = `${ESC$1}?25h`;
const CLEAR_SCREEN = "\x1Bc";
class Logger {
	_clearScreenPending;
	_highlights = /* @__PURE__ */ new Map();
	cleanupListeners = [];
	console;
	constructor(ctx, outputStream = process.stdout, errorStream = process.stderr) {
		this.ctx = ctx;
		this.outputStream = outputStream;
		this.errorStream = errorStream;
		this.console = new Console({
			stdout: outputStream,
			stderr: errorStream
		});
		this._highlights.clear();
		this.addCleanupListeners();
		this.registerUnhandledRejection();
		if (this.outputStream.isTTY) this.outputStream.write(HIDE_CURSOR);
	}
	log(...args) {
		this._clearScreen();
		this.console.log(...args);
	}
	error(...args) {
		this._clearScreen();
		this.console.error(...args);
	}
	warn(...args) {
		this._clearScreen();
		this.console.warn(...args);
	}
	clearFullScreen(message = "") {
		if (!this.ctx.config.clearScreen) {
			this.console.log(message);
			return;
		}
		if (message) this.console.log(`${CLEAR_SCREEN}${ERASE_SCROLLBACK}${message}`);
		else this.outputStream.write(`${CLEAR_SCREEN}${ERASE_SCROLLBACK}`);
	}
	clearScreen(message, force = false) {
		if (!this.ctx.config.clearScreen) {
			this.console.log(message);
			return;
		}
		this._clearScreenPending = message;
		if (force) this._clearScreen();
	}
	_clearScreen() {
		if (this._clearScreenPending == null) return;
		const log = this._clearScreenPending;
		this._clearScreenPending = void 0;
		this.console.log(`${CURSOR_TO_START}${ERASE_DOWN}${log}`);
	}
	printError(err, options = {}) {
		printError(err, this.ctx, this, options);
	}
	deprecate(message) {
		this.error(c.bold(c.bgYellow(" DEPRECATED ")), c.yellow(message));
	}
	clearHighlightCache(filename) {
		if (filename) this._highlights.delete(filename);
		else this._highlights.clear();
	}
	highlight(filename, source) {
		if (this._highlights.has(filename)) return this._highlights.get(filename);
		const code = highlightCode(filename, source);
		this._highlights.set(filename, code);
		return code;
	}
	printNoTestTagsFound() {
		this.error(c.bgRed(" ERROR "), c.red("No test tags found in any project. Exiting with code 1."));
	}
	printTags() {
		const vitest = this.ctx;
		const rootProject = vitest.getRootProject();
		const projects = [rootProject, ...vitest.projects.filter((p) => p !== rootProject)];
		if (!projects.some((p) => p.config.tags && p.config.tags.length > 0)) {
			process.exitCode = 1;
			return this.printNoTestTagsFound();
		}
		for (const project of projects) {
			if (project.name) this.log(formatProjectName(project, ""));
			project.config.tags.forEach((tag) => {
				const tagLog = `${tag.name}${tag.description ? `: ${tag.description}` : ""}`;
				this.log(`  ${tagLog}`);
			});
		}
	}
	printNoTestFound(filters) {
		const config = this.ctx.config;
		if (config.watch && (config.changed || config.related?.length)) this.log(`No affected ${config.mode} files found\n`);
		else if (config.watch) this.log(c.red(`No ${config.mode} files found. You can change the file name pattern by pressing "p"\n`));
		else if (config.passWithNoTests) this.log(`No ${config.mode} files found, exiting with code 0\n`);
		else this.error(c.red(`No ${config.mode} files found, exiting with code 1\n`));
		const comma = c.dim(", ");
		if (filters?.length) this.console.error(c.dim("filter: ") + c.yellow(filters.join(comma)));
		const projectsFilter = toArray(config.project);
		if (projectsFilter.length) this.console.error(c.dim("projects: ") + c.yellow(projectsFilter.join(comma)));
		this.ctx.projects.forEach((project) => {
			const config = project.config;
			if (!project.isRootProject() && project.name) this.console.error(`\n${formatProjectName(project)}\n`);
			if (config.include) this.console.error(c.dim("include: ") + c.yellow(config.include.join(comma)));
			if (config.exclude) this.console.error(c.dim("exclude:  ") + c.yellow(config.exclude.join(comma)));
			if (config.typecheck.enabled) {
				this.console.error(c.dim("typecheck include: ") + c.yellow(config.typecheck.include.join(comma)));
				this.console.error(c.dim("typecheck exclude: ") + c.yellow(config.typecheck.exclude.join(comma)));
			}
		});
		this.console.error();
	}
	printBanner() {
		this.log();
		const color = this.ctx.config.watch ? "blue" : "cyan";
		const mode = this.ctx.config.watch ? "DEV" : "RUN";
		this.log(withLabel(color, mode, `v${this.ctx.version} `) + c.gray(this.ctx.config.root));
		// Log seed if either files (RandomSequencer) or tests are shuffled
		if (this.ctx.config.sequence.sequencer === RandomSequencer || this.ctx.config.sequence.shuffle) this.log(PAD + c.gray(`Running tests with seed "${this.ctx.config.sequence.seed}"`));
		if (this.ctx.config.ui) {
			const host = this.ctx.config.api?.host || "localhost";
			const port = this.ctx.vite.config.server.port;
			const base = this.ctx.config.uiBase;
			this.log(PAD + c.dim(c.green(`UI started at http://${host}:${c.bold(port)}${base}`)));
		} else if (this.ctx.config.api?.port) {
			const resolvedUrls = this.ctx.vite.resolvedUrls;
			// workaround for https://github.com/vitejs/vite/issues/15438, it was fixed in vite 5.1
			const fallbackUrl = `http://${this.ctx.config.api.host || "localhost"}:${this.ctx.config.api.port}`;
			const origin = resolvedUrls?.local[0] ?? resolvedUrls?.network[0] ?? fallbackUrl;
			this.log(PAD + c.dim(c.green(`API started at ${new URL("/", origin)}`)));
		}
		if (this.ctx.coverageProvider) this.log(PAD + c.dim("Coverage enabled with ") + c.yellow(this.ctx.coverageProvider.name));
		if (this.ctx.config.standalone) this.log(c.yellow(`\nVitest is running in standalone mode. Edit a test file to rerun tests.\n`));
		else this.log();
	}
	printBrowserBanner(project) {
		if (!project.browser) return;
		const resolvedUrls = project.browser.vite.resolvedUrls;
		const origin = resolvedUrls?.local[0] ?? resolvedUrls?.network[0];
		if (!origin) return;
		const output = project.isRootProject() ? "" : formatProjectName(project);
		const provider = project.browser.provider?.name;
		const providerString = provider === "preview" ? "" : ` by ${c.reset(c.bold(provider))}`;
		this.log(c.dim(`${output}Browser runner started${providerString} ${c.dim("at")} ${c.blue(new URL("/__vitest_test__/", origin))}\n`));
	}
	printUnhandledErrors(errors) {
		const errorMessage = c.red(c.bold(`\nVitest caught ${errors.length} unhandled error${errors.length > 1 ? "s" : ""} during the test run.
This might cause false positive tests. Resolve unhandled errors to make sure your tests are not affected.`));
		this.error(errorBanner("Unhandled Errors"));
		this.error(errorMessage);
		errors.forEach((err) => {
			this.printError(err, {
				fullStack: err.name !== "EnvironmentTeardownError",
				type: err.type || "Unhandled Error"
			});
		});
		this.error(c.red(divider()));
	}
	printSourceTypeErrors(errors) {
		const errorMessage = c.red(c.bold(`\nVitest found ${errors.length} error${errors.length > 1 ? "s" : ""} not related to your test files.`));
		this.log(errorBanner("Source Errors"));
		this.log(errorMessage);
		errors.forEach((err) => {
			this.printError(err, { fullStack: true });
		});
		this.log(c.red(divider()));
	}
	getColumns() {
		return "columns" in this.outputStream ? this.outputStream.columns : 80;
	}
	onTerminalCleanup(listener) {
		this.cleanupListeners.push(listener);
	}
	addCleanupListeners() {
		const cleanup = () => {
			this.cleanupListeners.forEach((fn) => fn());
			if (this.outputStream.isTTY) this.outputStream.write(SHOW_CURSOR);
		};
		const onExit = (signal, exitCode) => {
			cleanup();
			// Interrupted signals don't set exit code automatically.
			// Use same exit code as node: https://nodejs.org/api/process.html#signal-events
			if (process.exitCode === void 0) process.exitCode = exitCode !== void 0 ? 128 + exitCode : Number(signal);
			// Timeout to flush stderr
			setTimeout(() => process.exit(), 1);
		};
		process.once("SIGINT", onExit);
		process.once("SIGTERM", onExit);
		process.once("exit", onExit);
		this.ctx.onClose(() => {
			process.off("SIGINT", onExit);
			process.off("SIGTERM", onExit);
			process.off("exit", onExit);
			cleanup();
		});
	}
	registerUnhandledRejection() {
		const onUnhandledRejection = (err) => {
			process.exitCode = 1;
			this.printError(err, {
				fullStack: true,
				type: "Unhandled Rejection"
			});
			this.error("\n\n");
			process.exit();
		};
		process.on("unhandledRejection", onUnhandledRejection);
		this.ctx.onClose(() => {
			process.off("unhandledRejection", onUnhandledRejection);
		});
	}
}

// this function receives the module diagnostic with the location of imports
// and populates it with collected import durations; the duration is injected
// only if the current module is the one that imported the module
// if testModule is not defined, then Vitest aggregates durations of ALL collected test modules
function collectModuleDurationsDiagnostic(moduleId, state, moduleDiagnostic, testModule) {
	if (!moduleDiagnostic) return {
		modules: [],
		untrackedModules: []
	};
	const modules = [];
	const modulesById = {};
	const allModules = [...moduleDiagnostic.modules, ...moduleDiagnostic.untracked];
	const visitedByFiles = {};
	// this aggregates the times for _ALL_ tests if testModule is not passed
	// so if the module was imported in separate tests, the time will be accumulated
	for (const files of testModule ? [[testModule.task]] : state.filesMap.values()) for (const file of files) {
		const importDurations = file.importDurations;
		if (!importDurations) continue;
		const currentModule = state.getReportedEntity(file);
		if (!currentModule) continue;
		const visitedKey = currentModule.project.config.isolate === false ? "non-isolate" : file.id;
		if (!visitedByFiles[visitedKey]) visitedByFiles[visitedKey] = /* @__PURE__ */ new Set();
		const visited = visitedByFiles[visitedKey];
		allModules.forEach(({ resolvedId, resolvedUrl }) => {
			const durations = importDurations[resolvedId];
			// do not accumulate if module was already visited by suite (or suites in non-isolate mode)
			if (!durations || visited.has(resolvedId)) return;
			const importer = getModuleImporter(moduleId, durations, currentModule);
			modulesById[resolvedId] ??= {
				selfTime: 0,
				totalTime: 0,
				transformTime: 0,
				external: durations.external,
				importer
			};
			// only track if the current module imported this module,
			// otherwise it was imported instantly because it's cached
			if (importer === moduleId) {
				visited.add(resolvedId);
				modulesById[resolvedId].selfTime += durations.selfTime;
				modulesById[resolvedId].totalTime += durations.totalTime;
				// don't aggregate
				modulesById[resolvedId].transformTime = state.metadata[currentModule.project.name]?.duration[resolvedUrl]?.[0];
			}
		});
	}
	// if module was imported twice in the same file,
	// show only one time - the second should be shown as 0
	const visitedInFile = /* @__PURE__ */ new Set();
	moduleDiagnostic.modules.forEach((diagnostic) => {
		const durations = modulesById[diagnostic.resolvedId];
		if (!durations) return;
		if (visitedInFile.has(diagnostic.resolvedId)) modules.push({
			...diagnostic,
			selfTime: 0,
			totalTime: 0,
			transformTime: 0,
			external: durations.external,
			importer: durations.importer
		});
		else {
			visitedInFile.add(diagnostic.resolvedId);
			modules.push({
				...diagnostic,
				...durations
			});
		}
	});
	const untracked = [];
	moduleDiagnostic.untracked.forEach((diagnostic) => {
		const durations = modulesById[diagnostic.resolvedId];
		if (!durations) return;
		if (visitedInFile.has(diagnostic.resolvedId)) untracked.push({
			selfTime: 0,
			totalTime: 0,
			transformTime: 0,
			external: durations.external,
			importer: durations.importer,
			resolvedId: diagnostic.resolvedId,
			resolvedUrl: diagnostic.resolvedUrl,
			url: diagnostic.rawUrl
		});
		else {
			visitedInFile.add(diagnostic.resolvedId);
			untracked.push({
				...durations,
				resolvedId: diagnostic.resolvedId,
				resolvedUrl: diagnostic.resolvedUrl,
				url: diagnostic.rawUrl
			});
		}
	});
	return {
		modules,
		untrackedModules: untracked
	};
}
function getModuleImporter(moduleId, durations, testModule) {
	if (durations.importer === moduleId) return moduleId;
	if (!durations.importer) {
		if (moduleId === testModule.moduleId) return testModule.moduleId;
		return testModule.project.config.setupFiles.includes(moduleId) ? moduleId : durations.importer;
	}
	return durations.importer;
}
// the idea of this is very simple
// it parses the source code to extract import/export statements
// it parses SSR transformed file to extract __vite_ssr_import__ and __vite_ssr_dynamic_import__
// it combines the two by looking at the original positions of SSR primitives
// in the end, we are able to return a list of modules that were imported by this module
// mapped to their IDs in Vite's module graph
async function collectSourceModulesLocations(moduleId, moduleGraph) {
	const transformResult = moduleGraph.getModuleById(moduleId)?.transformResult;
	if (!transformResult || !transformResult.ssr) return;
	const map = transformResult.map;
	if (!map || !("version" in map) || !map.sources.length) return;
	const sourceImports = map.sources.reduce((acc, sourceId, index) => {
		const source = map.sourcesContent?.[index];
		if (source != null) acc[sourceId] = parseSourceImportsAndExports(source);
		return acc;
	}, {});
	const transformImports = await parseTransformResult(moduleGraph, transformResult);
	const traceMap = map && "version" in map && new TraceMap(map);
	const modules = {};
	const untracked = [];
	transformImports.forEach((row) => {
		const original = traceMap && originalPositionFor(traceMap, row.start);
		if (original && original.source != null) {
			// if there are several at the same position, this is a bug
			// probably caused by import.meta.glob imports returning incorrect positions
			// all the new import.meta.glob imports come first, so only the last module on this line is correct
			const sourceImport = sourceImports[original.source].get(`${original.line}:${original.column}`);
			if (sourceImport) {
				if (modules[sourceImport.rawUrl]) {
					// remove imports with a different resolvedId
					const differentImports = modules[sourceImport.rawUrl].filter((d) => d.resolvedId !== row.resolvedId);
					untracked.push(...differentImports);
					modules[sourceImport.rawUrl] = modules[sourceImport.rawUrl].filter((d) => d.resolvedId === row.resolvedId);
				}
				modules[sourceImport.rawUrl] ??= [];
				modules[sourceImport.rawUrl].push({
					start: sourceImport.start,
					end: sourceImport.end,
					startIndex: sourceImport.startIndex,
					endIndex: sourceImport.endIndex,
					rawUrl: sourceImport.rawUrl,
					resolvedId: row.resolvedId,
					resolvedUrl: row.resolvedUrl
				});
			}
		}
	});
	return {
		modules: Object.values(modules).flat(),
		untracked
	};
}
function fillSourcesMap(syntax, sourcesMap, source, indexMap) {
	const splitSeparator = `${syntax} `;
	const splitSources = source.split(splitSeparator);
	const chunks = [];
	let index = 0;
	for (const chunk of splitSources) {
		chunks.push({
			chunk,
			startIndex: index
		});
		index += chunk.length + splitSeparator.length;
	}
	chunks.forEach(({ chunk, startIndex }) => {
		const normalized = chunk.replace(/'/g, "\"");
		const startQuoteIdx = normalized.indexOf("\"");
		if (startQuoteIdx === -1) return;
		const endQuoteIdx = normalized.indexOf("\"", startQuoteIdx + 1);
		if (endQuoteIdx === -1) return;
		const staticSyntax = {
			startIndex: startIndex + startQuoteIdx,
			endIndex: startIndex + endQuoteIdx + 1,
			start: indexMap.get(startIndex + startQuoteIdx),
			end: indexMap.get(startIndex + endQuoteIdx + 1),
			rawUrl: normalized.slice(startQuoteIdx + 1, endQuoteIdx)
		};
		// -7 to include "import "
		for (let i = startIndex - 7; i < staticSyntax.endIndex; i++) {
			const location = indexMap.get(i);
			if (location) sourcesMap.set(`${location.line}:${location.column}`, staticSyntax);
		}
	});
}
// this function tries to parse ESM static import and export statements from
// the source. if the source is not JS/TS, but supports static ESM syntax,
// then this will also find them because it' only checks the strings, it doesn't parse the AST
function parseSourceImportsAndExports(source) {
	if (!source.includes("import ") && !source.includes("export ")) return /* @__PURE__ */ new Map();
	const sourcesMap = /* @__PURE__ */ new Map();
	const indexMap = createIndexLocationsMap(source);
	fillSourcesMap("import", sourcesMap, source, indexMap);
	fillSourcesMap("export", sourcesMap, source, indexMap);
	return sourcesMap;
}
async function parseTransformResult(moduleGraph, transformResult) {
	const code = transformResult.code;
	const regexp = /(?:__vite_ssr_import__|__vite_ssr_dynamic_import__)\("([^"]+)"/g;
	const lineColumnMap = createIndexLocationsMap(code);
	const importPositions = [];
	let match;
	// eslint-disable-next-line no-cond-assign
	while (match = regexp.exec(code)) {
		const startIndex = match.index;
		const endIndex = match.index + match[0].length - 1;
		importPositions.push({
			raw: match[1],
			startIndex,
			endIndex
		});
	}
	return (await Promise.all(importPositions.map(async ({ startIndex, endIndex, raw }) => {
		const position = lineColumnMap.get(startIndex);
		const endPosition = lineColumnMap.get(endIndex);
		const moduleNode = await moduleGraph.getModuleByUrl(raw);
		if (!position || !endPosition || !moduleNode || !moduleNode.id) return;
		return {
			resolvedId: moduleNode.id,
			resolvedUrl: moduleNode.url,
			start: position,
			end: endPosition,
			startIndex,
			endIndex
		};
	}))).filter((n) => n != null);
}

const __dirname$1 = url.fileURLToPath(new URL(".", import.meta.url));
class VitestPackageInstaller {
	isPackageExists(name, options) {
		return isPackageExists(name, options);
	}
	async ensureInstalled(dependency, root, version) {
		if (process.env.VITEST_SKIP_INSTALL_CHECKS) return true;
		if (process.versions.pnp) {
			const targetRequire = createRequire(__dirname$1);
			try {
				targetRequire.resolve(dependency, { paths: [root, __dirname$1] });
				return true;
			} catch {}
		}
		if (/* @__PURE__ */ isPackageExists(dependency, { paths: [root, __dirname$1] })) return true;
		process.stderr.write(withLabel("red", "MISSING DEPENDENCY", `Cannot find dependency '${dependency}'\n\n`));
		if (!isTTY) return false;
		const { install } = await (await import('./index.og1WyBLx.js').then(function (n) { return n.i; })).default({
			type: "confirm",
			name: "install",
			message: c.reset(`Do you want to install ${c.green(dependency)}?`)
		});
		if (install) {
			const packageName = version ? `${dependency}@${version}` : dependency;
			await (await import('./index.CMESou6r.js')).installPackage(packageName, { dev: true });
			// TODO: somehow it fails to load the package after installation, remove this when it's fixed
			process.stderr.write(c.yellow(`\nPackage ${packageName} installed, re-run the command to start.\n`));
			process.exit();
			return true;
		}
		return false;
	}
}

function getDefaultThreadsCount(config) {
	const numCpus = typeof nodeos.availableParallelism === "function" ? nodeos.availableParallelism() : nodeos.cpus().length;
	return config.watch ? Math.max(Math.floor(numCpus / 2), 1) : Math.max(numCpus - 1, 1);
}
function getWorkerMemoryLimit(config) {
	if (config.vmMemoryLimit) return config.vmMemoryLimit;
	return 1 / (config.maxWorkers ?? getDefaultThreadsCount(config));
}
/**
* Converts a string representing an amount of memory to bytes.
*
* @param input The value to convert to bytes.
* @param percentageReference The reference value to use when a '%' value is supplied.
*/
function stringToBytes(input, percentageReference) {
	if (input === null || input === void 0) return input;
	if (typeof input === "string") if (Number.isNaN(Number.parseFloat(input.slice(-1)))) {
		let [, numericString, trailingChars] = input.match(/(.*?)([^0-9.-]+)$/) || [];
		if (trailingChars && numericString) {
			const numericValue = Number.parseFloat(numericString);
			trailingChars = trailingChars.toLowerCase();
			switch (trailingChars) {
				case "%":
					input = numericValue / 100;
					break;
				case "kb":
				case "k": return numericValue * 1e3;
				case "kib": return numericValue * 1024;
				case "mb":
				case "m": return numericValue * 1e3 * 1e3;
				case "mib": return numericValue * 1024 * 1024;
				case "gb":
				case "g": return numericValue * 1e3 * 1e3 * 1e3;
				case "gib": return numericValue * 1024 * 1024 * 1024;
			}
		}
	} else input = Number.parseFloat(input);
	if (typeof input === "number") if (input <= 1 && input > 0) if (percentageReference) return Math.floor(input * percentageReference);
	else throw new Error("For a percentage based memory limit a percentageReference must be supplied");
	else if (input > 1) return Math.floor(input);
	else throw new Error("Unexpected numerical input for \"memoryLimit\"");
	return null;
}

const debug = createDebugger("vitest:browser:pool");
function createBrowserPool(vitest) {
	const providers = /* @__PURE__ */ new Set();
	const numCpus = typeof nodeos.availableParallelism === "function" ? nodeos.availableParallelism() : nodeos.cpus().length;
	// if there are more than ~12 threads (optimistically), the main thread chokes
	// https://github.com/vitest-dev/vitest/issues/7871
	const maxThreadsCount = Math.min(12, numCpus - 1);
	const threadsCount = vitest.config.watch ? Math.max(Math.floor(maxThreadsCount / 2), 1) : Math.max(maxThreadsCount, 1);
	const projectPools = /* @__PURE__ */ new WeakMap();
	const ensurePool = (project) => {
		if (projectPools.has(project)) return projectPools.get(project);
		debug?.("creating pool for project %s", project.name);
		const pool = new BrowserPool(project, { maxWorkers: getThreadsCount(project) });
		projectPools.set(project, pool);
		vitest.onCancel(() => {
			pool.cancel();
		});
		return pool;
	};
	const runWorkspaceTests = async (method, specs) => {
		const groupedFiles = /* @__PURE__ */ new Map();
		const testFilesCode = /* @__PURE__ */ new Map();
		const testFileTags = /* @__PURE__ */ new WeakMap();
		await Promise.all(specs.map(async (spec) => {
			let code = testFilesCode.get(spec.moduleId);
			// TODO: this really should be done only once when collecting specifications
			if (code == null) {
				code = await readFile(spec.moduleId, "utf-8").catch(() => "");
				testFilesCode.set(spec.moduleId, code);
			}
			const { tags } = detectCodeBlock(code);
			testFileTags.set(spec, tags);
		}));
		// to keep the sorting, we need to iterate over specs separately
		for (const spec of specs) {
			const { project, moduleId, testLines, testIds, testNamePattern, testTagsFilter } = spec;
			const files = groupedFiles.get(project) || [];
			files.push({
				filepath: moduleId,
				testLocations: testLines,
				testIds,
				testNamePattern,
				testTagsFilter,
				fileTags: testFileTags.get(spec)
			});
			groupedFiles.set(project, files);
		}
		let isCancelled = false;
		vitest.onCancel(() => {
			isCancelled = true;
		});
		const initialisedPools = await Promise.all([...groupedFiles.entries()].map(async ([project, files]) => {
			await project._initBrowserProvider();
			if (!project.browser) throw new TypeError(`The browser server was not initialized${project.name ? ` for the "${project.name}" project` : ""}. This is a bug in Vitest. Please, open a new issue with reproduction.`);
			if (isCancelled) return;
			debug?.("provider is ready for %s project", project.name);
			const pool = ensurePool(project);
			vitest.state.clearFiles(project, files.map((f) => f.filepath));
			providers.add(project.browser.provider);
			return {
				pool,
				provider: project.browser.provider,
				runTests: () => pool.runTests(method, files)
			};
		}));
		if (isCancelled) return;
		const parallelPools = [];
		const nonParallelPools = [];
		for (const pool of initialisedPools) {
			if (!pool)
 // this means it was cancelled
			return;
			if (pool.provider.mocker && pool.provider.supportsParallelism) parallelPools.push(pool.runTests);
			else nonParallelPools.push(pool.runTests);
		}
		await Promise.all(parallelPools.map((runTests) => runTests()));
		for (const runTests of nonParallelPools) {
			if (isCancelled) return;
			await runTests();
		}
	};
	function getThreadsCount(project) {
		const config = project.config.browser;
		if (!config.headless || !config.fileParallelism || !project.browser.provider.supportsParallelism) return 1;
		if (project.config.maxWorkers) return project.config.maxWorkers;
		return threadsCount;
	}
	return {
		name: "browser",
		async close() {
			await Promise.all([...providers].map((provider) => provider.close()));
			vitest._browserSessions.sessionIds.clear();
			providers.clear();
			vitest.projects.forEach((project) => {
				project.browser?.state.orchestrators.forEach((orchestrator) => {
					orchestrator.$close();
				});
			});
			debug?.("browser pool closed all providers");
		},
		runTests: (files) => runWorkspaceTests("run", files),
		collectTests: (files) => runWorkspaceTests("collect", files)
	};
}
function escapePathToRegexp(path) {
	return path.replace(/[/\\.?*()^${}|[\]+]/g, "\\$&");
}
class BrowserPool {
	_queue = [];
	_promise;
	_providedContext;
	readySessions;
	_traces;
	_otel;
	constructor(project, options) {
		this.project = project;
		this.options = options;
		this._traces = project.vitest._traces;
		this._otel = this._traces.startContextSpan("vitest.browser");
		this._otel.span.setAttributes({
			"vitest.project": project.name,
			"vitest.browser.provider": this.project.browser.provider.name
		});
		this.readySessions = project._browserReadySessions;
	}
	cancel() {
		this._queue = [];
		this._otel.span.end();
	}
	reject(error) {
		this._promise?.reject(error);
		this._promise = void 0;
		this.cancel();
	}
	get orchestrators() {
		return this.project.browser.state.orchestrators;
	}
	async runTests(method, files) {
		this._promise ??= createDefer();
		if (!files.length) {
			debug?.("no tests found, finishing test run immediately");
			this._promise.resolve();
			return this._promise;
		}
		this._providedContext = stringify(this.project.getProvidedContext());
		this._queue.push(...files);
		this.readySessions.forEach((sessionId) => {
			if (this._queue.length) {
				this.readySessions.delete(sessionId);
				this.runNextTest(method, sessionId);
			}
		});
		if (this.orchestrators.size >= this.options.maxWorkers) {
			debug?.("all orchestrators are ready, not creating more");
			return this._promise;
		}
		// open the minimum amount of tabs
		// if there is only 1 file running, we don't need 8 tabs running
		const workerCount = Math.min(this.options.maxWorkers - this.orchestrators.size, files.length);
		const promises = [];
		for (let i = 0; i < workerCount; i++) {
			const sessionId = crypto.randomUUID();
			this.project.vitest._browserSessions.sessionIds.add(sessionId);
			const project = this.project.name;
			debug?.("[%s] creating session for %s", sessionId, project);
			let page = this._traces.$(`vitest.browser.open`, {
				context: this._otel.context,
				attributes: { "vitest.browser.session_id": sessionId }
			}, () => this.openPage(sessionId, { parallel: workerCount > 1 }));
			page = page.then(() => {
				// start running tests on the page when it's ready
				this.runNextTest(method, sessionId);
			});
			promises.push(page);
		}
		await Promise.all(promises);
		debug?.("all sessions are created");
		return this._promise;
	}
	async openPage(sessionId, options) {
		await this.project._openBrowserPage(sessionId, {
			reject: (error) => this.reject(error),
			parallel: options.parallel
		});
	}
	getOrchestrator(sessionId) {
		const orchestrator = this.orchestrators.get(sessionId);
		if (!orchestrator) throw new Error(`Orchestrator not found for session ${sessionId}. This is a bug in Vitest. Please, open a new issue with reproduction.`);
		return orchestrator;
	}
	finishSession(sessionId) {
		this.readySessions.add(sessionId);
		// the last worker finished running tests
		if (this.readySessions.size === this.orchestrators.size) {
			this._otel.span.end();
			this._promise?.resolve();
			this._promise = void 0;
			debug?.("[%s] all tests finished running", sessionId);
		} else debug?.(`did not finish sessions for ${sessionId}: |ready - %s| |overall - %s|`, [...this.readySessions].join(", "), [...this.orchestrators.keys()].join(", "));
	}
	runNextTest(method, sessionId) {
		const file = this._queue.shift();
		if (!file) {
			debug?.("[%s] no more tests to run", sessionId);
			// we don't need to cleanup testers if isolation is enabled,
			// because cleanup is done at the end of every test
			if (this.project.config.browser.isolate) {
				this.finishSession(sessionId);
				return;
			}
			this.getOrchestrator(sessionId).cleanupTesters().catch((error) => this.reject(error)).finally(() => this.finishSession(sessionId));
			return;
		}
		if (!this._promise) throw new Error(`Unexpected empty queue`);
		const orchestrator = this.getOrchestrator(sessionId);
		debug?.("[%s] run test %s", sessionId, file);
		this.setBreakpoint(sessionId, file.filepath).then(() => {
			this._traces.$(`vitest.browser.run`, {
				context: this._otel.context,
				attributes: { "code.file.path": file.filepath }
			}, async () => {
				return orchestrator.createTesters({
					method,
					files: [file],
					providedContext: this._providedContext || "[{}]",
					otelCarrier: this._traces.getContextCarrier()
				});
			}).then(() => {
				debug?.("[%s] test %s finished running", sessionId, file);
				this.runNextTest(method, sessionId);
			}).catch((error) => {
				// if user cancels the test run manually, ignore the error and exit gracefully
				if (this.project.vitest.isCancelling && error instanceof Error && error.message.startsWith("Browser connection was closed while running tests")) {
					this.cancel();
					this._promise?.resolve();
					this._promise = void 0;
					debug?.("[%s] browser connection was closed", sessionId);
					return;
				}
				debug?.("[%s] error during %s test run: %s", sessionId, file, error);
				this.reject(new Error(`Failed to run the test ${file.filepath}.`, { cause: error }));
			});
		}).catch((err) => this.reject(err));
	}
	async setBreakpoint(sessionId, file) {
		if (!this.project.config.inspector.waitForDebugger) return;
		const provider = this.project.browser.provider;
		const browser = this.project.config.browser.name;
		if (shouldIgnoreDebugger(provider.name, browser)) {
			debug?.("[$s] ignoring debugger in %s browser because it is not supported", sessionId, browser);
			return;
		}
		if (!provider.getCDPSession) throw new Error("Unable to set breakpoint, CDP not supported");
		debug?.("[%s] set breakpoint for %s", sessionId, file);
		const session = await provider.getCDPSession(sessionId);
		await session.send("Debugger.enable", {});
		await session.send("Debugger.setBreakpointByUrl", {
			lineNumber: 0,
			urlRegex: escapePathToRegexp(file)
		});
	}
}
function shouldIgnoreDebugger(provider, browser) {
	if (provider === "webdriverio") return browser !== "chrome" && browser !== "edge";
	return browser !== "chromium";
}

function createMethodsRPC(project, methodsOptions = {}) {
	const vitest = project.vitest;
	const cacheFs = methodsOptions.cacheFs ?? false;
	project.vitest.state.metadata[project.name] ??= {
		externalized: {},
		duration: {},
		tmps: {}
	};
	if (project.config.dumpDir && !existsSync(project.config.dumpDir)) mkdirSync(project.config.dumpDir, { recursive: true });
	project.vitest.state.metadata[project.name].dumpDir = project.config.dumpDir;
	return {
		async fetch(url, importer, environmentName, options, otelCarrier) {
			const environment = project.vite.environments[environmentName];
			if (!environment) throw new Error(`The environment ${environmentName} was not defined in the Vite config.`);
			const start = performance.now();
			return await project._fetcher(url, importer, environment, cacheFs, options, otelCarrier).then((result) => {
				const duration = performance.now() - start;
				project.vitest.state.transformTime += duration;
				const metadata = project.vitest.state.metadata[project.name];
				if ("externalize" in result) metadata.externalized[url] = result.externalize;
				if ("tmp" in result) metadata.tmps[url] = result.tmp;
				metadata.duration[url] ??= [];
				metadata.duration[url].push(duration);
				return result;
			});
		},
		async resolve(id, importer, environmentName) {
			const environment = project.vite.environments[environmentName];
			if (!environment) throw new Error(`The environment ${environmentName} was not defined in the Vite config.`);
			const resolved = await environment.pluginContainer.resolveId(id, importer);
			if (!resolved) return null;
			const file = cleanUrl(resolved.id);
			if (resolved.external) return {
				file,
				url: isBuiltin(resolved.id) ? toBuiltin(resolved.id) : resolved.id,
				id: resolved.id
			};
			return {
				file: cleanUrl(resolved.id),
				url: normalizeResolvedIdToUrl(environment, resolved.id),
				id: resolved.id
			};
		},
		snapshotSaved(snapshot) {
			vitest.snapshot.add(snapshot);
		},
		resolveSnapshotPath(testPath) {
			return vitest.snapshot.resolvePath(testPath, { config: project.serializedConfig });
		},
		async transform(id) {
			const environment = project.vite.environments.__vitest_vm__;
			if (!environment) throw new Error(`The VM environment was not defined in the Vite config. This is a bug in Vitest. Please, open a new issue with reproduction.`);
			const url = normalizeResolvedIdToUrl(environment, fileURLToPath(id));
			return { code: (await environment.transformRequest(url).catch(handleRollupError))?.code };
		},
		async onQueued(file) {
			if (methodsOptions.collect) vitest.state.collectFiles(project, [file]);
			else await vitest._testRun.enqueued(project, file);
		},
		async onCollected(files) {
			if (methodsOptions.collect) vitest.state.collectFiles(project, files);
			else await vitest._testRun.collected(project, files);
		},
		onAfterSuiteRun(meta) {
			vitest.coverageProvider?.onAfterSuiteRun(meta);
		},
		async onTaskArtifactRecord(testId, artifact) {
			return vitest._testRun.recordArtifact(testId, artifact);
		},
		async onTaskUpdate(packs, events) {
			if (methodsOptions.collect) vitest.state.updateTasks(packs);
			else await vitest._testRun.updated(packs, events);
		},
		async onUserConsoleLog(log) {
			if (methodsOptions.collect) vitest.state.updateUserLog(log);
			else await vitest._testRun.log(log);
		},
		onUnhandledError(err, type) {
			vitest.state.catchError(err, type);
		},
		onAsyncLeaks(leaks) {
			vitest.state.catchLeaks(leaks);
		},
		onCancel(reason) {
			vitest.cancelCurrentRun(reason);
		},
		getCountOfFailedTests() {
			return vitest.state.getCountOfFailedTests();
		},
		ensureModuleGraphEntry(id, importer) {
			const filepath = id.startsWith("file:") ? fileURLToPath(id) : id;
			const importerPath = importer.startsWith("file:") ? fileURLToPath(importer) : importer;
			// environment itself doesn't matter
			const moduleGraph = project.vite.environments.__vitest__?.moduleGraph;
			if (!moduleGraph) {
				// TODO: is it possible?
				console.error("no module graph for", id);
				return;
			}
			const importerNode = moduleGraph.getModuleById(importerPath) || moduleGraph.createFileOnlyEntry(importerPath);
			const moduleNode = moduleGraph.getModuleById(filepath) || moduleGraph.createFileOnlyEntry(filepath);
			if (!moduleGraph.idToModuleMap.has(importerPath)) {
				importerNode.id = importerPath;
				moduleGraph.idToModuleMap.set(importerPath, importerNode);
			}
			if (!moduleGraph.idToModuleMap.has(filepath)) {
				moduleNode.id = filepath;
				moduleGraph.idToModuleMap.set(filepath, moduleNode);
			}
			// this is checked by the "printError" function - TODO: is there a better way?
			moduleNode.transformResult = {
				code: " ",
				map: null
			};
			importerNode.importedModules.add(moduleNode);
			moduleNode.importers.add(importerNode);
		}
	};
}

var RunnerState = /* @__PURE__ */ function(RunnerState) {
	RunnerState["IDLE"] = "idle";
	RunnerState["STARTING"] = "starting";
	RunnerState["STARTED"] = "started";
	RunnerState["START_FAILURE"] = "start_failure";
	RunnerState["STOPPING"] = "stopping";
	RunnerState["STOPPED"] = "stopped";
	return RunnerState;
}(RunnerState || {});
const START_TIMEOUT = 6e4;
const STOP_TIMEOUT = 6e4;
/** @experimental */
class PoolRunner {
	/** Exposed to test runner as `VITEST_POOL_ID`. Value is between 1-`maxWorkers`. */
	poolId = void 0;
	project;
	environment;
	_state = RunnerState.IDLE;
	_operationLock = null;
	_terminatePromise = createDefer();
	_eventEmitter = new EventEmitter();
	_offCancel;
	_rpc;
	_otel = null;
	_traces;
	get isTerminated() {
		return this._state === RunnerState.STOPPED;
	}
	waitForTerminated() {
		return this._terminatePromise;
	}
	get isStarted() {
		return this._state === RunnerState.STARTED;
	}
	constructor(options, worker) {
		this.worker = worker;
		this.project = options.project;
		this.environment = options.environment;
		const vitest = this.project.vitest;
		this._traces = vitest._traces;
		if (this._traces.isEnabled()) {
			const { span: workerSpan, context } = this._traces.startContextSpan("vitest.worker");
			this._otel = {
				span: workerSpan,
				workerContext: context,
				files: []
			};
			this._otel.span.setAttributes({
				"vitest.worker.name": this.worker.name,
				"vitest.project": this.project.name,
				"vitest.environment": this.environment.name
			});
		}
		this._rpc = createBirpc(createMethodsRPC(this.project, {
			collect: options.method === "collect",
			cacheFs: worker.cacheFs
		}), {
			eventNames: ["onCancel"],
			post: (request) => {
				if (this._state !== RunnerState.STOPPING && this._state !== RunnerState.STOPPED) this.postMessage(request);
			},
			on: (callback) => this._eventEmitter.on("rpc", callback),
			timeout: -1
		});
		this._offCancel = vitest.onCancel((reason) => this._rpc.onCancel(reason));
	}
	/**
	* "reconfigure" can only be called if `environment` is different, since different project always
	* requires a new PoolRunner instance.
	*/
	reconfigure(task) {
		this.environment = task.context.environment;
		this._otel?.span.setAttribute("vitest.environment", this.environment.name);
	}
	postMessage(message) {
		// Only send messages when runner is active (not fully stopped)
		// Allow sending during STOPPING state for the 'stop' message itself
		if (this._state !== RunnerState.STOPPED) return this.worker.send(message);
	}
	startTracesSpan(name) {
		const traces = this._traces;
		if (!this._otel) return traces.startSpan(name);
		const { span, context } = traces.startContextSpan(name, this._otel.workerContext);
		this._otel.currentContext = context;
		const end = span.end.bind(span);
		span.end = (endTime) => {
			this._otel.currentContext = void 0;
			return end(endTime);
		};
		return span;
	}
	request(method, context) {
		this._otel?.files.push(...context.files.map((f) => f.filepath));
		return this.postMessage({
			__vitest_worker_request__: true,
			type: method,
			context,
			otelCarrier: this.getOTELCarrier()
		});
	}
	getOTELCarrier() {
		const activeContext = this._otel?.currentContext || this._otel?.workerContext;
		return activeContext ? this._traces.getContextCarrier(activeContext) : void 0;
	}
	async start(options) {
		// Wait for any ongoing operation to complete
		if (this._operationLock) await this._operationLock;
		if (this._state === RunnerState.STARTED || this._state === RunnerState.STARTING) return;
		if (this._state === RunnerState.STOPPED) throw new Error("[vitest-pool-runner]: Cannot start a stopped runner");
		// Create operation lock to prevent concurrent start/stop
		this._operationLock = createDefer();
		let startSpan;
		try {
			this._state = RunnerState.STARTING;
			await this._traces.$(`vitest.${this.worker.name}.start`, { context: this._otel?.workerContext }, () => this.worker.start());
			// Attach event listeners AFTER starting worker to avoid issues
			// if worker.start() fails
			this.worker.on("error", this.emitWorkerError);
			this.worker.on("exit", this.emitUnexpectedExit);
			this.worker.on("message", this.emitWorkerMessage);
			startSpan = this.startTracesSpan("vitest.worker.start");
			const startPromise = this.withTimeout(this.waitForStart(), START_TIMEOUT);
			const globalConfig = this.project.vitest.config.experimental.openTelemetry;
			const projectConfig = this.project.config.experimental.openTelemetry;
			const tracesEnabled = projectConfig?.enabled ?? globalConfig?.enabled === true;
			const tracesSdk = projectConfig?.sdkPath ?? globalConfig?.sdkPath;
			this.postMessage({
				type: "start",
				poolId: this.poolId,
				workerId: options.workerId,
				__vitest_worker_request__: true,
				options: { reportMemory: this.worker.reportMemory ?? false },
				context: {
					environment: {
						name: this.environment.name,
						options: this.environment.options
					},
					config: this.project.serializedConfig,
					pool: this.worker.name
				},
				traces: {
					enabled: tracesEnabled,
					sdkPath: tracesSdk,
					otelCarrier: this.getOTELCarrier()
				}
			});
			await startPromise;
			this._state = RunnerState.STARTED;
		} catch (error) {
			this._state = RunnerState.START_FAILURE;
			startSpan?.recordException(error);
			throw error;
		} finally {
			startSpan?.end();
			this._operationLock.resolve();
			this._operationLock = null;
		}
	}
	async stop(options) {
		// Wait for any ongoing operation to complete
		if (this._operationLock) await this._operationLock;
		if (this._state === RunnerState.STOPPED || this._state === RunnerState.STOPPING) return;
		this._otel?.span.setAttribute("vitest.worker.files", this._otel.files);
		if (this._state === RunnerState.IDLE) {
			this._otel?.span.end();
			this._state = RunnerState.STOPPED;
			return;
		}
		// Create operation lock to prevent concurrent start/stop
		this._operationLock = createDefer();
		try {
			this._state = RunnerState.STOPPING;
			// Remove exit listener early to avoid "unexpected exit" errors during shutdown
			this.worker.off("exit", this.emitUnexpectedExit);
			const stopSpan = this.startTracesSpan("vitest.worker.stop");
			await this.withTimeout(new Promise((resolve) => {
				const onStop = (response) => {
					if (response.type === "stopped") {
						if (response.error) {
							stopSpan.recordException(response.error);
							this.project.vitest.state.catchError(response.error, "Teardown Error");
						}
						resolve();
						this.off("message", onStop);
					}
				};
				// Don't wait for graceful exit's response when force exiting
				if (options?.force) return onStop({
					type: "stopped",
					__vitest_worker_response__: true
				});
				this.on("message", onStop);
				this.postMessage({
					type: "stop",
					__vitest_worker_request__: true,
					otelCarrier: this.getOTELCarrier()
				});
			}), STOP_TIMEOUT).finally(() => {
				stopSpan.end();
			});
			this._eventEmitter.removeAllListeners();
			this._offCancel();
			this._rpc.$close(/* @__PURE__ */ new Error("[vitest-pool-runner]: Pending methods while closing rpc"));
			// Stop the worker process (this sets _fork/_thread to undefined)
			// Worker's event listeners (error, message) are implicitly removed when worker terminates
			await this._traces.$(`vitest.${this.worker.name}.stop`, { context: this._otel?.workerContext }, () => this.worker.stop());
			this._state = RunnerState.STOPPED;
		} catch (error) {
			// Ensure we transition to stopped state even on error
			this._state = RunnerState.STOPPED;
			throw error;
		} finally {
			this._operationLock.resolve();
			this._operationLock = null;
			this._otel?.span.end();
			this._terminatePromise.resolve();
		}
	}
	on(event, callback) {
		this._eventEmitter.on(event, callback);
	}
	off(event, callback) {
		this._eventEmitter.off(event, callback);
	}
	emitWorkerError = (maybeError) => {
		const error = maybeError instanceof Error ? maybeError : new Error(String(maybeError));
		this._eventEmitter.emit("error", error);
	};
	emitWorkerMessage = (response) => {
		try {
			const message = this.worker.deserialize(response);
			if (typeof message === "object" && message != null && message.__vitest_worker_response__) this._eventEmitter.emit("message", message);
			else this._eventEmitter.emit("rpc", message);
		} catch (error) {
			this._eventEmitter.emit("error", error);
		}
	};
	emitUnexpectedExit = () => {
		const error = /* @__PURE__ */ new Error("Worker exited unexpectedly");
		this._eventEmitter.emit("error", error);
	};
	waitForStart() {
		return new Promise((resolve, reject) => {
			const onStart = (message) => {
				if (message.type === "started") {
					this.off("message", onStart);
					if (message.error) reject(message.error);
					else resolve();
				}
			};
			this.on("message", onStart);
		});
	}
	withTimeout(promise, timeout) {
		return new Promise((resolve_, reject_) => {
			const timer = setTimeout(() => reject(/* @__PURE__ */ new Error("[vitest-pool-runner]: Timeout waiting for worker to respond")), timeout);
			function resolve(value) {
				clearTimeout(timer);
				resolve_(value);
			}
			function reject(error) {
				clearTimeout(timer);
				reject_(error);
			}
			promise.then(resolve, reject);
		});
	}
}

const SIGKILL_TIMEOUT = 500;
/** @experimental */
class ForksPoolWorker {
	name = "forks";
	cacheFs = true;
	entrypoint;
	execArgv;
	env;
	_fork;
	stdout;
	stderr;
	constructor(options) {
		this.execArgv = options.execArgv;
		this.env = options.env;
		this.stdout = options.project.vitest.logger.outputStream;
		this.stderr = options.project.vitest.logger.errorStream;
		/** Loads {@link file://./../../../runtime/workers/forks.ts} */
		this.entrypoint = resolve$1(options.distPath, "workers/forks.js");
	}
	on(event, callback) {
		this.fork.on(event, callback);
	}
	off(event, callback) {
		this.fork.off(event, callback);
	}
	send(message) {
		this.fork.send(message);
	}
	async start() {
		this._fork ||= fork(this.entrypoint, [], {
			env: this.env,
			execArgv: this.execArgv,
			stdio: "pipe",
			serialization: "advanced"
		});
		if (this._fork.stdout) {
			this.stdout.setMaxListeners(1 + this.stdout.getMaxListeners());
			this._fork.stdout.pipe(this.stdout);
		}
		if (this._fork.stderr) {
			this.stderr.setMaxListeners(1 + this.stderr.getMaxListeners());
			this._fork.stderr.pipe(this.stderr);
		}
	}
	async stop() {
		const fork = this.fork;
		const waitForExit = new Promise((resolve) => {
			if (fork.exitCode != null) resolve();
			else fork.once("exit", resolve);
		});
		/*
		* If process running user's code does not stop on SIGTERM, send SIGKILL.
		* This is similar to
		* - https://github.com/jestjs/jest/blob/25a8785584c9d54a05887001ee7f498d489a5441/packages/jest-worker/src/workers/ChildProcessWorker.ts#L463-L477
		* - https://github.com/tinylibs/tinypool/blob/40b4b3eb926dabfbfd3d0a7e3d1222d4dd1c0d2d/src/runtime/process-worker.ts#L56
		*/
		const sigkillTimeout = setTimeout(() => fork.kill("SIGKILL"), SIGKILL_TIMEOUT);
		fork.kill();
		await waitForExit;
		clearTimeout(sigkillTimeout);
		if (fork.stdout) {
			fork.stdout?.unpipe(this.stdout);
			this.stdout.setMaxListeners(this.stdout.getMaxListeners() - 1);
		}
		if (fork.stderr) {
			fork.stderr?.unpipe(this.stderr);
			this.stderr.setMaxListeners(this.stderr.getMaxListeners() - 1);
		}
		this._fork = void 0;
	}
	deserialize(data) {
		return data;
	}
	get fork() {
		if (!this._fork) throw new Error(`The child process was torn down or never initialized. This is a bug in Vitest.`);
		return this._fork;
	}
}

/** @experimental */
class ThreadsPoolWorker {
	name = "threads";
	entrypoint;
	execArgv;
	env;
	_thread;
	stdout;
	stderr;
	constructor(options) {
		this.execArgv = options.execArgv;
		this.env = options.env;
		this.stdout = options.project.vitest.logger.outputStream;
		this.stderr = options.project.vitest.logger.errorStream;
		/** Loads {@link file://./../../../runtime/workers/threads.ts} */
		this.entrypoint = resolve$1(options.distPath, "workers/threads.js");
	}
	on(event, callback) {
		this.thread.on(event, callback);
	}
	off(event, callback) {
		this.thread.off(event, callback);
	}
	send(message) {
		this.thread.postMessage(message);
	}
	async start() {
		// This can be called multiple times if the runtime is shared.
		this._thread ||= new Worker(this.entrypoint, {
			env: this.env,
			execArgv: this.execArgv,
			stdout: true,
			stderr: true
		});
		this.stdout.setMaxListeners(1 + this.stdout.getMaxListeners());
		this._thread.stdout.pipe(this.stdout);
		this.stderr.setMaxListeners(1 + this.stderr.getMaxListeners());
		this._thread.stderr.pipe(this.stderr);
	}
	async stop() {
		await this.thread.terminate();
		this._thread?.stdout?.unpipe(this.stdout);
		this.stdout.setMaxListeners(this.stdout.getMaxListeners() - 1);
		this._thread?.stderr?.unpipe(this.stderr);
		this.stderr.setMaxListeners(this.stderr.getMaxListeners() - 1);
		this._thread = void 0;
	}
	deserialize(data) {
		return data;
	}
	get thread() {
		if (!this._thread) throw new Error(`The worker thread was torn down or never initialized. This is a bug in Vitest.`);
		return this._thread;
	}
}

/** @experimental */
class TypecheckPoolWorker {
	name = "typecheck";
	project;
	_eventEmitter = new EventEmitter$1();
	constructor(options) {
		this.project = options.project;
	}
	async start() {
		// noop, onMessage handles it
	}
	async stop() {
		// noop, onMessage handles it
	}
	canReuse() {
		return true;
	}
	send(message) {
		onMessage(message, this.project).then((response) => {
			if (response) this._eventEmitter.emit("message", response);
		});
	}
	on(event, callback) {
		this._eventEmitter.on(event, callback);
	}
	off(event, callback) {
		this._eventEmitter.on(event, callback);
	}
	deserialize(data) {
		return data;
	}
}
const __vitest_worker_response__ = true;
const runners = /* @__PURE__ */ new WeakMap();
async function onMessage(message, project) {
	if (message?.__vitest_worker_request__ !== true) return;
	let runner = runners.get(project.vitest);
	if (!runner) {
		runner = createRunner(project.vitest);
		runners.set(project.vitest, runner);
	}
	let runPromise;
	switch (message.type) {
		case "start": return {
			type: "started",
			__vitest_worker_response__
		};
		case "run":
			runPromise = runner.runTests(message.context.files, project).catch((error) => error);
			return {
				type: "testfileFinished",
				error: await runPromise,
				__vitest_worker_response__
			};
		case "collect":
			runPromise = runner.collectTests(message.context.files, project).catch((error) => error);
			return {
				type: "testfileFinished",
				error: await runPromise,
				__vitest_worker_response__
			};
		case "stop":
			await runPromise;
			return {
				type: "stopped",
				__vitest_worker_response__
			};
	}
	throw new Error(`Unexpected message ${JSON.stringify(message, null, 2)}`);
}
function createRunner(vitest) {
	const promisesMap = /* @__PURE__ */ new WeakMap();
	const rerunTriggered = /* @__PURE__ */ new WeakSet();
	async function onParseEnd(project, { files, sourceErrors }) {
		const checker = project.typechecker;
		const { packs, events } = checker.getTestPacksAndEvents();
		await vitest._testRun.updated(packs, events);
		if (!project.config.typecheck.ignoreSourceErrors) sourceErrors.forEach((error) => vitest.state.catchError(error, "Unhandled Source Error"));
		if (!hasFailed(files) && !sourceErrors.length && checker.getExitCode()) {
			const error = new Error(checker.getOutput());
			error.stack = "";
			vitest.state.catchError(error, "Typecheck Error");
		}
		promisesMap.get(project)?.resolve();
		rerunTriggered.delete(project);
		// triggered by TSC watcher, not Vitest watcher, so we need to emulate what Vitest does in this case
		if (vitest.config.watch && !vitest.runningPromise) {
			const modules = files.map((file) => vitest.state.getReportedEntity(file)).filter((e) => e?.type === "module");
			const state = vitest.isCancelling ? "interrupted" : modules.some((m) => !m.ok()) ? "failed" : "passed";
			await vitest.report("onTestRunEnd", modules, [], state);
			await vitest.report("onWatcherStart", files, [...project.config.typecheck.ignoreSourceErrors ? [] : sourceErrors, ...vitest.state.getUnhandledErrors()]);
		}
	}
	async function createWorkspaceTypechecker(project, files) {
		const checker = project.typechecker ?? new Typechecker(project);
		if (project.typechecker) return checker;
		project.typechecker = checker;
		checker.setFiles(files);
		checker.onParseStart(async () => {
			const files = checker.getTestFiles();
			for (const file of files) await vitest._testRun.enqueued(project, file);
			await vitest._testRun.collected(project, files);
		});
		checker.onParseEnd((result) => onParseEnd(project, result));
		checker.onWatcherRerun(async () => {
			rerunTriggered.add(project);
			if (!vitest.runningPromise) {
				vitest.state.clearErrors();
				await vitest.report("onWatcherRerun", files, "File change detected. Triggering rerun.");
			}
			await checker.collectTests();
			const testFiles = checker.getTestFiles();
			for (const file of testFiles) await vitest._testRun.enqueued(project, file);
			await vitest._testRun.collected(project, testFiles);
			const { packs, events } = checker.getTestPacksAndEvents();
			await vitest._testRun.updated(packs, events);
		});
		return checker;
	}
	async function startTypechecker(project, files) {
		if (project.typechecker) return;
		const checker = await createWorkspaceTypechecker(project, files);
		await checker.collectTests();
		await checker.start();
	}
	async function collectTests(specs, project) {
		const files = specs.map((spec) => spec.filepath);
		const checker = await createWorkspaceTypechecker(project, files);
		checker.setFiles(files);
		await checker.collectTests();
		const testFiles = checker.getTestFiles();
		vitest.state.collectFiles(project, testFiles);
	}
	async function runTests(specs, project) {
		const promises = [];
		const files = specs.map((spec) => spec.filepath);
		const promise = createDefer();
		// check that watcher actually triggered rerun
		const triggered = await new Promise((resolve) => {
			const _i = setInterval(() => {
				if (!project.typechecker || rerunTriggered.has(project)) {
					resolve(true);
					clearInterval(_i);
				}
			});
			setTimeout(() => {
				resolve(false);
				clearInterval(_i);
			}, 500).unref();
		});
		// Re-run but wasn't triggered by tsc
		if (promisesMap.has(project) && !triggered) return promisesMap.get(project);
		if (project.typechecker && !triggered) {
			const testFiles = project.typechecker.getTestFiles();
			for (const file of testFiles) await vitest._testRun.enqueued(project, file);
			await vitest._testRun.collected(project, testFiles);
			await onParseEnd(project, project.typechecker.getResult());
		}
		promises.push(promise);
		promisesMap.set(project, promise);
		promises.push(startTypechecker(project, files));
		await Promise.all(promises);
	}
	return {
		runTests,
		collectTests
	};
}

/** @experimental */
class VmForksPoolWorker extends ForksPoolWorker {
	name = "vmForks";
	reportMemory = true;
	entrypoint;
	constructor(options) {
		super({
			...options,
			execArgv: [...options.execArgv, "--experimental-vm-modules"]
		});
		/** Loads {@link file://./../../../runtime/workers/vmForks.ts} */
		this.entrypoint = resolve$1(options.distPath, "workers/vmForks.js");
	}
	canReuse() {
		return true;
	}
}

/** @experimental */
class VmThreadsPoolWorker extends ThreadsPoolWorker {
	name = "vmThreads";
	reportMemory = true;
	entrypoint;
	constructor(options) {
		super({
			...options,
			execArgv: [...options.execArgv, "--experimental-vm-modules"]
		});
		/** Loads {@link file://./../../../runtime/workers/vmThreads.ts} */
		this.entrypoint = resolve$1(options.distPath, "workers/vmThreads.js");
	}
	canReuse() {
		return true;
	}
}

const WORKER_START_TIMEOUT = 9e4;
class Pool {
	maxWorkers = 0;
	workerIds = /* @__PURE__ */ new Map();
	queue = [];
	activeTasks = [];
	sharedRunners = [];
	exitPromises = [];
	_isCancelling = false;
	constructor(options, logger) {
		this.options = options;
		this.logger = logger;
	}
	setMaxWorkers(maxWorkers) {
		this.maxWorkers = maxWorkers;
		this.workerIds = new Map(Array.from({ length: maxWorkers }).fill(0).map((_, i) => [i + 1, true]));
	}
	async run(task, method) {
		// Prevent new tasks from being queued during cancellation
		if (this._isCancelling) throw new Error("[vitest-pool]: Cannot run tasks while pool is cancelling");
		// Every runner related failure should make this promise reject so that it's picked by pool.
		// This resolver is used to make the error handling in recursive queue easier.
		const testFinish = withResolvers();
		this.queue.push({
			task,
			resolver: testFinish,
			method
		});
		this.schedule();
		await testFinish.promise;
	}
	async schedule() {
		if (this.queue.length === 0 || this.activeTasks.length >= this.maxWorkers) return;
		const { task, resolver, method } = this.queue.shift();
		try {
			let isMemoryLimitReached = false;
			const runner = this.getPoolRunner(task, method);
			const poolId = runner.poolId ?? this.getWorkerId();
			runner.poolId = poolId;
			const activeTask = {
				task,
				resolver,
				method,
				cancelTask
			};
			this.activeTasks.push(activeTask);
			// active tasks receive cancel signal and shut down gracefully
			async function cancelTask(options) {
				if (options?.force) await runner.stop({ force: true });
				await runner.waitForTerminated();
				resolver.reject(/* @__PURE__ */ new Error("Cancelled"));
			}
			const onFinished = (message) => {
				if (message?.__vitest_worker_response__ && message.type === "testfileFinished") {
					if (task.memoryLimit && message.usedMemory) isMemoryLimitReached = message.usedMemory >= task.memoryLimit;
					if (message.error) this.options.state.catchError(message.error, "Test Run Error");
					runner.off("message", onFinished);
					resolver.resolve();
				}
			};
			runner.on("message", onFinished);
			if (!runner.isStarted) {
				runner.on("error", (error) => {
					resolver.reject(new Error(`[vitest-pool]: Worker ${task.worker} emitted error.`, { cause: error }));
				});
				const id = setTimeout(() => resolver.reject(/* @__PURE__ */ new Error(`[vitest-pool]: Timeout starting ${task.worker} runner.`)), WORKER_START_TIMEOUT);
				await runner.start({ workerId: task.context.workerId }).catch((error) => resolver.reject(new Error(`[vitest-pool]: Failed to start ${task.worker} worker for test files ${formatFiles(task)}.`, { cause: error }))).finally(() => clearTimeout(id));
			}
			let span;
			if (!resolver.isRejected) {
				span = runner.startTracesSpan(`vitest.worker.${method}`);
				// Start running the test in the worker
				runner.request(method, task.context);
			}
			await resolver.promise.catch((error) => span?.recordException(error)).finally(() => span?.end());
			const index = this.activeTasks.indexOf(activeTask);
			if (index !== -1) this.activeTasks.splice(index, 1);
			if (!task.isolate && !isMemoryLimitReached && this.queue[0]?.task.isolate === false && isEqualRunner(runner, this.queue[0].task)) {
				this.sharedRunners.push(runner);
				return this.schedule();
			}
			// Runner terminations are started but not awaited until the end of full run.
			// Runner termination can also already start from task cancellation.
			if (!runner.isTerminated) {
				const id = setTimeout(() => this.logger.error(`[vitest-pool]: Timeout terminating ${task.worker} worker for test files ${formatFiles(task)}.`), this.options.teardownTimeout);
				this.exitPromises.push(runner.stop({ force: resolver.isRejected }).then(() => clearTimeout(id)).catch((error) => this.logger.error(`[vitest-pool]: Failed to terminate ${task.worker} worker for test files ${formatFiles(task)}.`, error)));
			}
			this.freeWorkerId(poolId);
		} 
		// This is mostly to avoid zombie workers when/if Vitest internals run into errors
catch (error) {
			return resolver.reject(error);
		}
		return this.schedule();
	}
	async cancel() {
		// Force exit if previous cancel is still on-going
		// for example when user does 'CTRL+c' twice in row
		const force = this._isCancelling;
		// Set flag to prevent new tasks from being queued
		this._isCancelling = true;
		const pendingTasks = this.queue.splice(0);
		if (pendingTasks.length) {
			const error = /* @__PURE__ */ new Error("Cancelled");
			pendingTasks.forEach((task) => task.resolver.reject(error));
		}
		await Promise.all(this.activeTasks.map((task) => task.cancelTask({ force })));
		this.activeTasks = [];
		await Promise.all(this.sharedRunners.map((runner) => runner.stop()));
		this.sharedRunners = [];
		await Promise.all(this.exitPromises);
		this.exitPromises = [];
		this.workerIds.forEach((_, id) => this.freeWorkerId(id));
		// Reset flag after cancellation completes
		this._isCancelling = false;
	}
	async close() {
		await this.cancel();
	}
	getPoolRunner(task, method) {
		if (task.isolate === false) {
			const index = this.sharedRunners.findIndex((runner) => isEqualRunner(runner, task));
			if (index !== -1) {
				const runner = this.sharedRunners.splice(index, 1)[0];
				runner.reconfigure(task);
				return runner;
			}
		}
		const options = {
			distPath: this.options.distPath,
			project: task.project,
			method,
			environment: task.context.environment,
			env: task.env,
			execArgv: task.execArgv
		};
		switch (task.worker) {
			case "forks": return new PoolRunner(options, new ForksPoolWorker(options));
			case "vmForks": return new PoolRunner(options, new VmForksPoolWorker(options));
			case "threads": return new PoolRunner(options, new ThreadsPoolWorker(options));
			case "vmThreads": return new PoolRunner(options, new VmThreadsPoolWorker(options));
			case "typescript": return new PoolRunner(options, new TypecheckPoolWorker(options));
		}
		const customPool = task.project.config.poolRunner;
		if (customPool != null && customPool.name === task.worker) return new PoolRunner(options, customPool.createPoolWorker(options));
		throw new Error(`Runner ${task.worker} is not supported. Test files: ${formatFiles(task)}.`);
	}
	getWorkerId() {
		let workerId = 0;
		this.workerIds.forEach((state, id) => {
			if (state && !workerId) {
				workerId = id;
				this.workerIds.set(id, false);
			}
		});
		return workerId;
	}
	freeWorkerId(id) {
		this.workerIds.set(id, true);
	}
}
function withResolvers() {
	let resolve = () => {};
	let reject = (_error) => {};
	const resolver = {
		promise: new Promise((res, rej) => {
			resolve = res;
			reject = rej;
		}),
		resolve,
		reject: (reason) => {
			resolver.isRejected = true;
			reject(reason);
		},
		isRejected: false
	};
	return resolver;
}
function formatFiles(task) {
	return task.context.files.map((file) => file.filepath).join(", ");
}
function isEqualRunner(runner, task) {
	if (task.isolate) throw new Error("Isolated tasks should not share runners");
	if (runner.worker.name !== task.worker || runner.project !== task.project) return false;
	// by default, check that the environments are the same
	// some workers (like vmThreads/vmForks) do not need this check
	if (!runner.worker.canReuse) return isEnvironmentEqual(task.context.environment, runner.environment);
	return runner.worker.canReuse(task);
}
function isEnvironmentEqual(env1, env2) {
	if (env1.name !== env2.name) return false;
	return deepEqual(env1.options, env2.options);
}
function deepEqual(obj1, obj2) {
	if (obj1 === obj2) return true;
	if (obj1 == null || obj2 == null) return obj1 === obj2;
	if (typeof obj1 !== "object" || typeof obj2 !== "object") return false;
	const keys1 = Object.keys(obj1);
	const keys2 = Object.keys(obj2);
	if (keys1.length !== keys2.length) return false;
	for (const key of keys1) if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) return false;
	return true;
}

const suppressWarningsPath = resolve(rootDir, "./suppress-warnings.cjs");
function getFilePoolName(project) {
	if (project.config.browser.enabled) return "browser";
	return project.config.pool;
}
function createPool(ctx) {
	const pool = new Pool({
		distPath: ctx.distPath,
		teardownTimeout: ctx.config.teardownTimeout,
		state: ctx.state
	}, ctx.logger);
	const options = resolveOptions(ctx);
	const Sequencer = ctx.config.sequence.sequencer;
	const sequencer = new Sequencer(ctx);
	let browserPool;
	async function executeTests(method, specs, invalidates) {
		ctx.onCancel(() => pool.cancel());
		if (ctx.config.shard) {
			if (!ctx.config.passWithNoTests && ctx.config.shard.count > specs.length) throw new Error(`--shard <count> must be a smaller than count of test files. Resolved ${specs.length} test files for --shard=${ctx.config.shard.index}/${ctx.config.shard.count}.`);
			specs = await sequencer.shard(Array.from(specs));
		}
		const taskGroups = [];
		let workerId = 0;
		const sorted = await sequencer.sort(specs);
		const { environments, tags } = await getSpecificationsOptions(specs);
		const groups = groupSpecs(sorted, environments);
		const projectEnvs = /* @__PURE__ */ new WeakMap();
		const projectExecArgvs = /* @__PURE__ */ new WeakMap();
		for (const group of groups) {
			if (!group) continue;
			const taskGroup = [];
			const browserSpecs = [];
			taskGroups.push({
				tasks: taskGroup,
				maxWorkers: group.maxWorkers,
				browserSpecs
			});
			for (const specs of group.specs) {
				const { project, pool } = specs[0];
				if (pool === "browser") {
					browserSpecs.push(...specs);
					continue;
				}
				const environment = environments.get(specs[0]);
				if (!environment) throw new Error(`Cannot find the environment. This is a bug in Vitest.`);
				let env = projectEnvs.get(project);
				if (!env) {
					env = {
						...process.env,
						...options.env,
						...ctx.config.env,
						...project.config.env
					};
					// env are case-insensitive on Windows, but spawned processes don't support it
					if (isWindows) for (const name in env) env[name.toUpperCase()] = env[name];
					projectEnvs.set(project, env);
				}
				let execArgv = projectExecArgvs.get(project);
				if (!execArgv) {
					const conditions = resolveConditions(project);
					execArgv = [
						...options.execArgv,
						...conditions,
						...project.config.execArgv
					];
					projectExecArgvs.set(project, execArgv);
				}
				taskGroup.push({
					context: {
						files: specs.map((spec) => ({
							filepath: spec.moduleId,
							fileTags: tags.get(spec),
							testLocations: spec.testLines,
							testNamePattern: spec.testNamePattern,
							testIds: spec.testIds,
							testTagsFilter: spec.testTagsFilter
						})),
						invalidates,
						providedContext: project.getProvidedContext(),
						workerId: workerId++,
						environment
					},
					project,
					env,
					execArgv,
					worker: pool,
					isolate: project.config.isolate,
					memoryLimit: getMemoryLimit(ctx.config, pool) ?? null
				});
			}
		}
		const results = [];
		for (const { tasks, browserSpecs, maxWorkers } of taskGroups) {
			pool.setMaxWorkers(maxWorkers);
			const promises = tasks.map(async (task) => {
				if (ctx.isCancelling) return ctx.state.cancelFiles(task.context.files, task.project);
				try {
					await pool.run(task, method);
				} catch (error) {
					// Intentionally cancelled
					if (ctx.isCancelling && error instanceof Error && error.message === "Cancelled") ctx.state.cancelFiles(task.context.files, task.project);
					else throw error;
				}
			});
			if (browserSpecs.length) {
				browserPool ??= createBrowserPool(ctx);
				if (method === "collect") promises.push(browserPool.collectTests(browserSpecs));
				else promises.push(browserPool.runTests(browserSpecs));
			}
			const groupResults = await Promise.allSettled(promises);
			results.push(...groupResults);
		}
		const errors = results.filter((result) => result.status === "rejected").map((result) => result.reason);
		if (errors.length > 0) throw new AggregateError(errors, "Errors occurred while running tests. For more information, see serialized error.");
	}
	return {
		name: "default",
		runTests: (files, invalidates) => executeTests("run", files, invalidates),
		collectTests: (files, invalidates) => executeTests("collect", files, invalidates),
		async close() {
			await Promise.all([
				pool.close(),
				browserPool?.close?.(),
				...ctx.projects.map((project) => project.typechecker?.stop())
			]);
		}
	};
}
function resolveOptions(ctx) {
	return {
		execArgv: [
			...process.execArgv.filter((execArg) => execArg.startsWith("--cpu-prof") || execArg.startsWith("--heap-prof") || execArg.startsWith("--diagnostic-dir")),
			"--experimental-import-meta-resolve",
			...globalThis.Deno || process.versions.pnp ? [] : ["--require", suppressWarningsPath]
		],
		env: {
			TEST: "true",
			VITEST: "true",
			NODE_ENV: process.env.NODE_ENV || "test",
			VITEST_MODE: ctx.config.watch ? "WATCH" : "RUN",
			FORCE_TTY: isatty(1) ? "true" : ""
		}
	};
}
function resolveConditions(project) {
	// in addition to resolve.conditions Vite also adds production/development,
	// see: https://github.com/vitejs/vite/blob/af2aa09575229462635b7cbb6d248ca853057ba2/packages/vite/src/node/plugins/resolve.ts#L1056-L1080
	const viteMajor = Number(version.split(".")[0]);
	const viteConfig = project.vite.config;
	return [...new Set(viteMajor >= 6 ? viteConfig.ssr.resolve?.conditions ?? [] : [
		"production",
		"development",
		...viteConfig.resolve.conditions ?? []
	])].filter((condition) => {
		if (condition === "production") return viteConfig.isProduction;
		if (condition === "development") return !viteConfig.isProduction;
		return true;
	}).map((condition) => {
		if (viteMajor >= 6 && condition === "development|production") return viteConfig.isProduction ? "production" : "development";
		return condition;
	}).flatMap((c) => ["--conditions", c]);
}
function resolveMaxWorkers(project) {
	if (project.config.maxWorkers) return project.config.maxWorkers;
	if (project.vitest.config.maxWorkers) return project.vitest.config.maxWorkers;
	const numCpus = typeof nodeos.availableParallelism === "function" ? nodeos.availableParallelism() : nodeos.cpus().length;
	if (project.vitest.config.watch) return Math.max(Math.floor(numCpus / 2), 1);
	return Math.max(numCpus - 1, 1);
}
function getMemoryLimit(config, pool) {
	if (pool !== "vmForks" && pool !== "vmThreads") return null;
	const memory = nodeos.totalmem();
	const limit = getWorkerMemoryLimit(config);
	if (typeof memory === "number") return stringToBytes(limit, config.watch ? memory / 2 : memory);
	// If totalmem is not supported we cannot resolve percentage based values like 0.5, "50%"
	if (typeof limit === "number" && limit > 1 || typeof limit === "string" && limit.at(-1) !== "%") return stringToBytes(limit);
	// just ignore "memoryLimit" value because we cannot detect memory limit
	return null;
}
function groupSpecs(specs, environments) {
	const groups = [];
	// Files without file parallelism but without explicit sequence.groupOrder
	const sequential = {
		specs: [],
		maxWorkers: 1
	};
	// Type tests are run in a single group, per project
	const typechecks = {};
	const serializedEnvironmentOptions = /* @__PURE__ */ new Map();
	function getSerializedOptions(env) {
		const options = serializedEnvironmentOptions.get(env);
		if (options) return options;
		const serialized = JSON.stringify(env.options);
		serializedEnvironmentOptions.set(env, serialized);
		return serialized;
	}
	function isEqualEnvironments(a, b) {
		const aEnv = environments.get(a);
		const bEnv = environments.get(b);
		if (!aEnv && !bEnv) return true;
		if (!aEnv || !bEnv || aEnv.name !== bEnv.name) return false;
		if (!aEnv.options && !bEnv.options) return true;
		if (!aEnv.options || !bEnv.options) return false;
		return getSerializedOptions(aEnv) === getSerializedOptions(bEnv);
	}
	specs.forEach((spec) => {
		if (spec.pool === "typescript") {
			typechecks[spec.project.name] ||= [];
			typechecks[spec.project.name].push(spec);
			return;
		}
		const order = spec.project.config.sequence.groupOrder;
		const isolate = spec.project.config.isolate;
		// Files that have disabled parallelism and default groupOrder are set into their own group
		if (isolate === true && order === 0 && spec.project.config.maxWorkers === 1) return sequential.specs.push([spec]);
		const maxWorkers = resolveMaxWorkers(spec.project);
		groups[order] ||= {
			specs: [],
			maxWorkers
		};
		// Multiple projects with different maxWorkers but same groupOrder
		if (groups[order].maxWorkers !== maxWorkers) {
			const last = groups[order].specs.at(-1)?.at(-1)?.project.name;
			throw new Error(`Projects "${last}" and "${spec.project.name}" have different 'maxWorkers' but same 'sequence.groupOrder'.\nProvide unique 'sequence.groupOrder' for them.`);
		}
		// Non-isolated single worker can receive all files at once
		if (isolate === false && maxWorkers === 1) {
			const previous = groups[order].specs[0]?.[0];
			if (previous && previous.project.name === spec.project.name && isEqualEnvironments(spec, previous)) return groups[order].specs[0].push(spec);
		}
		groups[order].specs.push([spec]);
	});
	let order = Math.max(0, ...groups.keys()) + 1;
	for (const projectName in typechecks) {
		const maxWorkers = resolveMaxWorkers(typechecks[projectName][0].project);
		const previous = groups[order - 1];
		if (previous && previous.typecheck && maxWorkers !== previous.maxWorkers) order += 1;
		groups[order] ||= {
			specs: [],
			maxWorkers,
			typecheck: true
		};
		groups[order].specs.push(typechecks[projectName]);
	}
	if (sequential.specs.length) groups.push(sequential);
	return groups;
}

var bufferUtil = {exports: {}};

var constants;
var hasRequiredConstants;

function requireConstants () {
	if (hasRequiredConstants) return constants;
	hasRequiredConstants = 1;

	const BINARY_TYPES = ['nodebuffer', 'arraybuffer', 'fragments'];
	const hasBlob = typeof Blob !== 'undefined';

	if (hasBlob) BINARY_TYPES.push('blob');

	constants = {
	  BINARY_TYPES,
	  CLOSE_TIMEOUT: 30000,
	  EMPTY_BUFFER: Buffer.alloc(0),
	  GUID: '258EAFA5-E914-47DA-95CA-C5AB0DC85B11',
	  hasBlob,
	  kForOnEventAttribute: Symbol('kIsForOnEventAttribute'),
	  kListener: Symbol('kListener'),
	  kStatusCode: Symbol('status-code'),
	  kWebSocket: Symbol('websocket'),
	  NOOP: () => {}
	};
	return constants;
}

var hasRequiredBufferUtil;

function requireBufferUtil () {
	if (hasRequiredBufferUtil) return bufferUtil.exports;
	hasRequiredBufferUtil = 1;

	const { EMPTY_BUFFER } = requireConstants();

	const FastBuffer = Buffer[Symbol.species];

	/**
	 * Merges an array of buffers into a new buffer.
	 *
	 * @param {Buffer[]} list The array of buffers to concat
	 * @param {Number} totalLength The total length of buffers in the list
	 * @return {Buffer} The resulting buffer
	 * @public
	 */
	function concat(list, totalLength) {
	  if (list.length === 0) return EMPTY_BUFFER;
	  if (list.length === 1) return list[0];

	  const target = Buffer.allocUnsafe(totalLength);
	  let offset = 0;

	  for (let i = 0; i < list.length; i++) {
	    const buf = list[i];
	    target.set(buf, offset);
	    offset += buf.length;
	  }

	  if (offset < totalLength) {
	    return new FastBuffer(target.buffer, target.byteOffset, offset);
	  }

	  return target;
	}

	/**
	 * Masks a buffer using the given mask.
	 *
	 * @param {Buffer} source The buffer to mask
	 * @param {Buffer} mask The mask to use
	 * @param {Buffer} output The buffer where to store the result
	 * @param {Number} offset The offset at which to start writing
	 * @param {Number} length The number of bytes to mask.
	 * @public
	 */
	function _mask(source, mask, output, offset, length) {
	  for (let i = 0; i < length; i++) {
	    output[offset + i] = source[i] ^ mask[i & 3];
	  }
	}

	/**
	 * Unmasks a buffer using the given mask.
	 *
	 * @param {Buffer} buffer The buffer to unmask
	 * @param {Buffer} mask The mask to use
	 * @public
	 */
	function _unmask(buffer, mask) {
	  for (let i = 0; i < buffer.length; i++) {
	    buffer[i] ^= mask[i & 3];
	  }
	}

	/**
	 * Converts a buffer to an `ArrayBuffer`.
	 *
	 * @param {Buffer} buf The buffer to convert
	 * @return {ArrayBuffer} Converted buffer
	 * @public
	 */
	function toArrayBuffer(buf) {
	  if (buf.length === buf.buffer.byteLength) {
	    return buf.buffer;
	  }

	  return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.length);
	}

	/**
	 * Converts `data` to a `Buffer`.
	 *
	 * @param {*} data The data to convert
	 * @return {Buffer} The buffer
	 * @throws {TypeError}
	 * @public
	 */
	function toBuffer(data) {
	  toBuffer.readOnly = true;

	  if (Buffer.isBuffer(data)) return data;

	  let buf;

	  if (data instanceof ArrayBuffer) {
	    buf = new FastBuffer(data);
	  } else if (ArrayBuffer.isView(data)) {
	    buf = new FastBuffer(data.buffer, data.byteOffset, data.byteLength);
	  } else {
	    buf = Buffer.from(data);
	    toBuffer.readOnly = false;
	  }

	  return buf;
	}

	bufferUtil.exports = {
	  concat,
	  mask: _mask,
	  toArrayBuffer,
	  toBuffer,
	  unmask: _unmask
	};

	/* istanbul ignore else  */
	if (!process.env.WS_NO_BUFFER_UTIL) {
	  try {
	    const bufferUtil$1 = require('bufferutil');

	    bufferUtil.exports.mask = function (source, mask, output, offset, length) {
	      if (length < 48) _mask(source, mask, output, offset, length);
	      else bufferUtil$1.mask(source, mask, output, offset, length);
	    };

	    bufferUtil.exports.unmask = function (buffer, mask) {
	      if (buffer.length < 32) _unmask(buffer, mask);
	      else bufferUtil$1.unmask(buffer, mask);
	    };
	  } catch (e) {
	    // Continue regardless of the error.
	  }
	}
	return bufferUtil.exports;
}

var limiter;
var hasRequiredLimiter;

function requireLimiter () {
	if (hasRequiredLimiter) return limiter;
	hasRequiredLimiter = 1;

	const kDone = Symbol('kDone');
	const kRun = Symbol('kRun');

	/**
	 * A very simple job queue with adjustable concurrency. Adapted from
	 * https://github.com/STRML/async-limiter
	 */
	class Limiter {
	  /**
	   * Creates a new `Limiter`.
	   *
	   * @param {Number} [concurrency=Infinity] The maximum number of jobs allowed
	   *     to run concurrently
	   */
	  constructor(concurrency) {
	    this[kDone] = () => {
	      this.pending--;
	      this[kRun]();
	    };
	    this.concurrency = concurrency || Infinity;
	    this.jobs = [];
	    this.pending = 0;
	  }

	  /**
	   * Adds a job to the queue.
	   *
	   * @param {Function} job The job to run
	   * @public
	   */
	  add(job) {
	    this.jobs.push(job);
	    this[kRun]();
	  }

	  /**
	   * Removes a job from the queue and runs it if possible.
	   *
	   * @private
	   */
	  [kRun]() {
	    if (this.pending === this.concurrency) return;

	    if (this.jobs.length) {
	      const job = this.jobs.shift();

	      this.pending++;
	      job(this[kDone]);
	    }
	  }
	}

	limiter = Limiter;
	return limiter;
}

var permessageDeflate;
var hasRequiredPermessageDeflate;

function requirePermessageDeflate () {
	if (hasRequiredPermessageDeflate) return permessageDeflate;
	hasRequiredPermessageDeflate = 1;

	const zlib = require$$0;

	const bufferUtil = requireBufferUtil();
	const Limiter = requireLimiter();
	const { kStatusCode } = requireConstants();

	const FastBuffer = Buffer[Symbol.species];
	const TRAILER = Buffer.from([0x00, 0x00, 0xff, 0xff]);
	const kPerMessageDeflate = Symbol('permessage-deflate');
	const kTotalLength = Symbol('total-length');
	const kCallback = Symbol('callback');
	const kBuffers = Symbol('buffers');
	const kError = Symbol('error');

	//
	// We limit zlib concurrency, which prevents severe memory fragmentation
	// as documented in https://github.com/nodejs/node/issues/8871#issuecomment-250915913
	// and https://github.com/websockets/ws/issues/1202
	//
	// Intentionally global; it's the global thread pool that's an issue.
	//
	let zlibLimiter;

	/**
	 * permessage-deflate implementation.
	 */
	class PerMessageDeflate {
	  /**
	   * Creates a PerMessageDeflate instance.
	   *
	   * @param {Object} [options] Configuration options
	   * @param {(Boolean|Number)} [options.clientMaxWindowBits] Advertise support
	   *     for, or request, a custom client window size
	   * @param {Boolean} [options.clientNoContextTakeover=false] Advertise/
	   *     acknowledge disabling of client context takeover
	   * @param {Number} [options.concurrencyLimit=10] The number of concurrent
	   *     calls to zlib
	   * @param {(Boolean|Number)} [options.serverMaxWindowBits] Request/confirm the
	   *     use of a custom server window size
	   * @param {Boolean} [options.serverNoContextTakeover=false] Request/accept
	   *     disabling of server context takeover
	   * @param {Number} [options.threshold=1024] Size (in bytes) below which
	   *     messages should not be compressed if context takeover is disabled
	   * @param {Object} [options.zlibDeflateOptions] Options to pass to zlib on
	   *     deflate
	   * @param {Object} [options.zlibInflateOptions] Options to pass to zlib on
	   *     inflate
	   * @param {Boolean} [isServer=false] Create the instance in either server or
	   *     client mode
	   * @param {Number} [maxPayload=0] The maximum allowed message length
	   */
	  constructor(options, isServer, maxPayload) {
	    this._maxPayload = maxPayload | 0;
	    this._options = options || {};
	    this._threshold =
	      this._options.threshold !== undefined ? this._options.threshold : 1024;
	    this._isServer = !!isServer;
	    this._deflate = null;
	    this._inflate = null;

	    this.params = null;

	    if (!zlibLimiter) {
	      const concurrency =
	        this._options.concurrencyLimit !== undefined
	          ? this._options.concurrencyLimit
	          : 10;
	      zlibLimiter = new Limiter(concurrency);
	    }
	  }

	  /**
	   * @type {String}
	   */
	  static get extensionName() {
	    return 'permessage-deflate';
	  }

	  /**
	   * Create an extension negotiation offer.
	   *
	   * @return {Object} Extension parameters
	   * @public
	   */
	  offer() {
	    const params = {};

	    if (this._options.serverNoContextTakeover) {
	      params.server_no_context_takeover = true;
	    }
	    if (this._options.clientNoContextTakeover) {
	      params.client_no_context_takeover = true;
	    }
	    if (this._options.serverMaxWindowBits) {
	      params.server_max_window_bits = this._options.serverMaxWindowBits;
	    }
	    if (this._options.clientMaxWindowBits) {
	      params.client_max_window_bits = this._options.clientMaxWindowBits;
	    } else if (this._options.clientMaxWindowBits == null) {
	      params.client_max_window_bits = true;
	    }

	    return params;
	  }

	  /**
	   * Accept an extension negotiation offer/response.
	   *
	   * @param {Array} configurations The extension negotiation offers/reponse
	   * @return {Object} Accepted configuration
	   * @public
	   */
	  accept(configurations) {
	    configurations = this.normalizeParams(configurations);

	    this.params = this._isServer
	      ? this.acceptAsServer(configurations)
	      : this.acceptAsClient(configurations);

	    return this.params;
	  }

	  /**
	   * Releases all resources used by the extension.
	   *
	   * @public
	   */
	  cleanup() {
	    if (this._inflate) {
	      this._inflate.close();
	      this._inflate = null;
	    }

	    if (this._deflate) {
	      const callback = this._deflate[kCallback];

	      this._deflate.close();
	      this._deflate = null;

	      if (callback) {
	        callback(
	          new Error(
	            'The deflate stream was closed while data was being processed'
	          )
	        );
	      }
	    }
	  }

	  /**
	   *  Accept an extension negotiation offer.
	   *
	   * @param {Array} offers The extension negotiation offers
	   * @return {Object} Accepted configuration
	   * @private
	   */
	  acceptAsServer(offers) {
	    const opts = this._options;
	    const accepted = offers.find((params) => {
	      if (
	        (opts.serverNoContextTakeover === false &&
	          params.server_no_context_takeover) ||
	        (params.server_max_window_bits &&
	          (opts.serverMaxWindowBits === false ||
	            (typeof opts.serverMaxWindowBits === 'number' &&
	              opts.serverMaxWindowBits > params.server_max_window_bits))) ||
	        (typeof opts.clientMaxWindowBits === 'number' &&
	          !params.client_max_window_bits)
	      ) {
	        return false;
	      }

	      return true;
	    });

	    if (!accepted) {
	      throw new Error('None of the extension offers can be accepted');
	    }

	    if (opts.serverNoContextTakeover) {
	      accepted.server_no_context_takeover = true;
	    }
	    if (opts.clientNoContextTakeover) {
	      accepted.client_no_context_takeover = true;
	    }
	    if (typeof opts.serverMaxWindowBits === 'number') {
	      accepted.server_max_window_bits = opts.serverMaxWindowBits;
	    }
	    if (typeof opts.clientMaxWindowBits === 'number') {
	      accepted.client_max_window_bits = opts.clientMaxWindowBits;
	    } else if (
	      accepted.client_max_window_bits === true ||
	      opts.clientMaxWindowBits === false
	    ) {
	      delete accepted.client_max_window_bits;
	    }

	    return accepted;
	  }

	  /**
	   * Accept the extension negotiation response.
	   *
	   * @param {Array} response The extension negotiation response
	   * @return {Object} Accepted configuration
	   * @private
	   */
	  acceptAsClient(response) {
	    const params = response[0];

	    if (
	      this._options.clientNoContextTakeover === false &&
	      params.client_no_context_takeover
	    ) {
	      throw new Error('Unexpected parameter "client_no_context_takeover"');
	    }

	    if (!params.client_max_window_bits) {
	      if (typeof this._options.clientMaxWindowBits === 'number') {
	        params.client_max_window_bits = this._options.clientMaxWindowBits;
	      }
	    } else if (
	      this._options.clientMaxWindowBits === false ||
	      (typeof this._options.clientMaxWindowBits === 'number' &&
	        params.client_max_window_bits > this._options.clientMaxWindowBits)
	    ) {
	      throw new Error(
	        'Unexpected or invalid parameter "client_max_window_bits"'
	      );
	    }

	    return params;
	  }

	  /**
	   * Normalize parameters.
	   *
	   * @param {Array} configurations The extension negotiation offers/reponse
	   * @return {Array} The offers/response with normalized parameters
	   * @private
	   */
	  normalizeParams(configurations) {
	    configurations.forEach((params) => {
	      Object.keys(params).forEach((key) => {
	        let value = params[key];

	        if (value.length > 1) {
	          throw new Error(`Parameter "${key}" must have only a single value`);
	        }

	        value = value[0];

	        if (key === 'client_max_window_bits') {
	          if (value !== true) {
	            const num = +value;
	            if (!Number.isInteger(num) || num < 8 || num > 15) {
	              throw new TypeError(
	                `Invalid value for parameter "${key}": ${value}`
	              );
	            }
	            value = num;
	          } else if (!this._isServer) {
	            throw new TypeError(
	              `Invalid value for parameter "${key}": ${value}`
	            );
	          }
	        } else if (key === 'server_max_window_bits') {
	          const num = +value;
	          if (!Number.isInteger(num) || num < 8 || num > 15) {
	            throw new TypeError(
	              `Invalid value for parameter "${key}": ${value}`
	            );
	          }
	          value = num;
	        } else if (
	          key === 'client_no_context_takeover' ||
	          key === 'server_no_context_takeover'
	        ) {
	          if (value !== true) {
	            throw new TypeError(
	              `Invalid value for parameter "${key}": ${value}`
	            );
	          }
	        } else {
	          throw new Error(`Unknown parameter "${key}"`);
	        }

	        params[key] = value;
	      });
	    });

	    return configurations;
	  }

	  /**
	   * Decompress data. Concurrency limited.
	   *
	   * @param {Buffer} data Compressed data
	   * @param {Boolean} fin Specifies whether or not this is the last fragment
	   * @param {Function} callback Callback
	   * @public
	   */
	  decompress(data, fin, callback) {
	    zlibLimiter.add((done) => {
	      this._decompress(data, fin, (err, result) => {
	        done();
	        callback(err, result);
	      });
	    });
	  }

	  /**
	   * Compress data. Concurrency limited.
	   *
	   * @param {(Buffer|String)} data Data to compress
	   * @param {Boolean} fin Specifies whether or not this is the last fragment
	   * @param {Function} callback Callback
	   * @public
	   */
	  compress(data, fin, callback) {
	    zlibLimiter.add((done) => {
	      this._compress(data, fin, (err, result) => {
	        done();
	        callback(err, result);
	      });
	    });
	  }

	  /**
	   * Decompress data.
	   *
	   * @param {Buffer} data Compressed data
	   * @param {Boolean} fin Specifies whether or not this is the last fragment
	   * @param {Function} callback Callback
	   * @private
	   */
	  _decompress(data, fin, callback) {
	    const endpoint = this._isServer ? 'client' : 'server';

	    if (!this._inflate) {
	      const key = `${endpoint}_max_window_bits`;
	      const windowBits =
	        typeof this.params[key] !== 'number'
	          ? zlib.Z_DEFAULT_WINDOWBITS
	          : this.params[key];

	      this._inflate = zlib.createInflateRaw({
	        ...this._options.zlibInflateOptions,
	        windowBits
	      });
	      this._inflate[kPerMessageDeflate] = this;
	      this._inflate[kTotalLength] = 0;
	      this._inflate[kBuffers] = [];
	      this._inflate.on('error', inflateOnError);
	      this._inflate.on('data', inflateOnData);
	    }

	    this._inflate[kCallback] = callback;

	    this._inflate.write(data);
	    if (fin) this._inflate.write(TRAILER);

	    this._inflate.flush(() => {
	      const err = this._inflate[kError];

	      if (err) {
	        this._inflate.close();
	        this._inflate = null;
	        callback(err);
	        return;
	      }

	      const data = bufferUtil.concat(
	        this._inflate[kBuffers],
	        this._inflate[kTotalLength]
	      );

	      if (this._inflate._readableState.endEmitted) {
	        this._inflate.close();
	        this._inflate = null;
	      } else {
	        this._inflate[kTotalLength] = 0;
	        this._inflate[kBuffers] = [];

	        if (fin && this.params[`${endpoint}_no_context_takeover`]) {
	          this._inflate.reset();
	        }
	      }

	      callback(null, data);
	    });
	  }

	  /**
	   * Compress data.
	   *
	   * @param {(Buffer|String)} data Data to compress
	   * @param {Boolean} fin Specifies whether or not this is the last fragment
	   * @param {Function} callback Callback
	   * @private
	   */
	  _compress(data, fin, callback) {
	    const endpoint = this._isServer ? 'server' : 'client';

	    if (!this._deflate) {
	      const key = `${endpoint}_max_window_bits`;
	      const windowBits =
	        typeof this.params[key] !== 'number'
	          ? zlib.Z_DEFAULT_WINDOWBITS
	          : this.params[key];

	      this._deflate = zlib.createDeflateRaw({
	        ...this._options.zlibDeflateOptions,
	        windowBits
	      });

	      this._deflate[kTotalLength] = 0;
	      this._deflate[kBuffers] = [];

	      this._deflate.on('data', deflateOnData);
	    }

	    this._deflate[kCallback] = callback;

	    this._deflate.write(data);
	    this._deflate.flush(zlib.Z_SYNC_FLUSH, () => {
	      if (!this._deflate) {
	        //
	        // The deflate stream was closed while data was being processed.
	        //
	        return;
	      }

	      let data = bufferUtil.concat(
	        this._deflate[kBuffers],
	        this._deflate[kTotalLength]
	      );

	      if (fin) {
	        data = new FastBuffer(data.buffer, data.byteOffset, data.length - 4);
	      }

	      //
	      // Ensure that the callback will not be called again in
	      // `PerMessageDeflate#cleanup()`.
	      //
	      this._deflate[kCallback] = null;

	      this._deflate[kTotalLength] = 0;
	      this._deflate[kBuffers] = [];

	      if (fin && this.params[`${endpoint}_no_context_takeover`]) {
	        this._deflate.reset();
	      }

	      callback(null, data);
	    });
	  }
	}

	permessageDeflate = PerMessageDeflate;

	/**
	 * The listener of the `zlib.DeflateRaw` stream `'data'` event.
	 *
	 * @param {Buffer} chunk A chunk of data
	 * @private
	 */
	function deflateOnData(chunk) {
	  this[kBuffers].push(chunk);
	  this[kTotalLength] += chunk.length;
	}

	/**
	 * The listener of the `zlib.InflateRaw` stream `'data'` event.
	 *
	 * @param {Buffer} chunk A chunk of data
	 * @private
	 */
	function inflateOnData(chunk) {
	  this[kTotalLength] += chunk.length;

	  if (
	    this[kPerMessageDeflate]._maxPayload < 1 ||
	    this[kTotalLength] <= this[kPerMessageDeflate]._maxPayload
	  ) {
	    this[kBuffers].push(chunk);
	    return;
	  }

	  this[kError] = new RangeError('Max payload size exceeded');
	  this[kError].code = 'WS_ERR_UNSUPPORTED_MESSAGE_LENGTH';
	  this[kError][kStatusCode] = 1009;
	  this.removeListener('data', inflateOnData);

	  //
	  // The choice to employ `zlib.reset()` over `zlib.close()` is dictated by the
	  // fact that in Node.js versions prior to 13.10.0, the callback for
	  // `zlib.flush()` is not called if `zlib.close()` is used. Utilizing
	  // `zlib.reset()` ensures that either the callback is invoked or an error is
	  // emitted.
	  //
	  this.reset();
	}

	/**
	 * The listener of the `zlib.InflateRaw` stream `'error'` event.
	 *
	 * @param {Error} err The emitted error
	 * @private
	 */
	function inflateOnError(err) {
	  //
	  // There is no need to call `Zlib#close()` as the handle is automatically
	  // closed when an error is emitted.
	  //
	  this[kPerMessageDeflate]._inflate = null;

	  if (this[kError]) {
	    this[kCallback](this[kError]);
	    return;
	  }

	  err[kStatusCode] = 1007;
	  this[kCallback](err);
	}
	return permessageDeflate;
}

var validation = {exports: {}};

var hasRequiredValidation;

function requireValidation () {
	if (hasRequiredValidation) return validation.exports;
	hasRequiredValidation = 1;

	const { isUtf8 } = require$$0$1;

	const { hasBlob } = requireConstants();

	//
	// Allowed token characters:
	//
	// '!', '#', '$', '%', '&', ''', '*', '+', '-',
	// '.', 0-9, A-Z, '^', '_', '`', a-z, '|', '~'
	//
	// tokenChars[32] === 0 // ' '
	// tokenChars[33] === 1 // '!'
	// tokenChars[34] === 0 // '"'
	// ...
	//
	// prettier-ignore
	const tokenChars = [
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, // 0 - 15
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, // 16 - 31
	  0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, // 32 - 47
	  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, // 48 - 63
	  0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, // 64 - 79
	  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, // 80 - 95
	  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, // 96 - 111
	  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0 // 112 - 127
	];

	/**
	 * Checks if a status code is allowed in a close frame.
	 *
	 * @param {Number} code The status code
	 * @return {Boolean} `true` if the status code is valid, else `false`
	 * @public
	 */
	function isValidStatusCode(code) {
	  return (
	    (code >= 1000 &&
	      code <= 1014 &&
	      code !== 1004 &&
	      code !== 1005 &&
	      code !== 1006) ||
	    (code >= 3000 && code <= 4999)
	  );
	}

	/**
	 * Checks if a given buffer contains only correct UTF-8.
	 * Ported from https://www.cl.cam.ac.uk/%7Emgk25/ucs/utf8_check.c by
	 * Markus Kuhn.
	 *
	 * @param {Buffer} buf The buffer to check
	 * @return {Boolean} `true` if `buf` contains only correct UTF-8, else `false`
	 * @public
	 */
	function _isValidUTF8(buf) {
	  const len = buf.length;
	  let i = 0;

	  while (i < len) {
	    if ((buf[i] & 0x80) === 0) {
	      // 0xxxxxxx
	      i++;
	    } else if ((buf[i] & 0xe0) === 0xc0) {
	      // 110xxxxx 10xxxxxx
	      if (
	        i + 1 === len ||
	        (buf[i + 1] & 0xc0) !== 0x80 ||
	        (buf[i] & 0xfe) === 0xc0 // Overlong
	      ) {
	        return false;
	      }

	      i += 2;
	    } else if ((buf[i] & 0xf0) === 0xe0) {
	      // 1110xxxx 10xxxxxx 10xxxxxx
	      if (
	        i + 2 >= len ||
	        (buf[i + 1] & 0xc0) !== 0x80 ||
	        (buf[i + 2] & 0xc0) !== 0x80 ||
	        (buf[i] === 0xe0 && (buf[i + 1] & 0xe0) === 0x80) || // Overlong
	        (buf[i] === 0xed && (buf[i + 1] & 0xe0) === 0xa0) // Surrogate (U+D800 - U+DFFF)
	      ) {
	        return false;
	      }

	      i += 3;
	    } else if ((buf[i] & 0xf8) === 0xf0) {
	      // 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
	      if (
	        i + 3 >= len ||
	        (buf[i + 1] & 0xc0) !== 0x80 ||
	        (buf[i + 2] & 0xc0) !== 0x80 ||
	        (buf[i + 3] & 0xc0) !== 0x80 ||
	        (buf[i] === 0xf0 && (buf[i + 1] & 0xf0) === 0x80) || // Overlong
	        (buf[i] === 0xf4 && buf[i + 1] > 0x8f) ||
	        buf[i] > 0xf4 // > U+10FFFF
	      ) {
	        return false;
	      }

	      i += 4;
	    } else {
	      return false;
	    }
	  }

	  return true;
	}

	/**
	 * Determines whether a value is a `Blob`.
	 *
	 * @param {*} value The value to be tested
	 * @return {Boolean} `true` if `value` is a `Blob`, else `false`
	 * @private
	 */
	function isBlob(value) {
	  return (
	    hasBlob &&
	    typeof value === 'object' &&
	    typeof value.arrayBuffer === 'function' &&
	    typeof value.type === 'string' &&
	    typeof value.stream === 'function' &&
	    (value[Symbol.toStringTag] === 'Blob' ||
	      value[Symbol.toStringTag] === 'File')
	  );
	}

	validation.exports = {
	  isBlob,
	  isValidStatusCode,
	  isValidUTF8: _isValidUTF8,
	  tokenChars
	};

	if (isUtf8) {
	  validation.exports.isValidUTF8 = function (buf) {
	    return buf.length < 24 ? _isValidUTF8(buf) : isUtf8(buf);
	  };
	} /* istanbul ignore else  */ else if (!process.env.WS_NO_UTF_8_VALIDATE) {
	  try {
	    const isValidUTF8 = require('utf-8-validate');

	    validation.exports.isValidUTF8 = function (buf) {
	      return buf.length < 32 ? _isValidUTF8(buf) : isValidUTF8(buf);
	    };
	  } catch (e) {
	    // Continue regardless of the error.
	  }
	}
	return validation.exports;
}

var receiver;
var hasRequiredReceiver;

function requireReceiver () {
	if (hasRequiredReceiver) return receiver;
	hasRequiredReceiver = 1;

	const { Writable } = require$$0$2;

	const PerMessageDeflate = requirePermessageDeflate();
	const {
	  BINARY_TYPES,
	  EMPTY_BUFFER,
	  kStatusCode,
	  kWebSocket
	} = requireConstants();
	const { concat, toArrayBuffer, unmask } = requireBufferUtil();
	const { isValidStatusCode, isValidUTF8 } = requireValidation();

	const FastBuffer = Buffer[Symbol.species];

	const GET_INFO = 0;
	const GET_PAYLOAD_LENGTH_16 = 1;
	const GET_PAYLOAD_LENGTH_64 = 2;
	const GET_MASK = 3;
	const GET_DATA = 4;
	const INFLATING = 5;
	const DEFER_EVENT = 6;

	/**
	 * HyBi Receiver implementation.
	 *
	 * @extends Writable
	 */
	class Receiver extends Writable {
	  /**
	   * Creates a Receiver instance.
	   *
	   * @param {Object} [options] Options object
	   * @param {Boolean} [options.allowSynchronousEvents=true] Specifies whether
	   *     any of the `'message'`, `'ping'`, and `'pong'` events can be emitted
	   *     multiple times in the same tick
	   * @param {String} [options.binaryType=nodebuffer] The type for binary data
	   * @param {Object} [options.extensions] An object containing the negotiated
	   *     extensions
	   * @param {Boolean} [options.isServer=false] Specifies whether to operate in
	   *     client or server mode
	   * @param {Number} [options.maxPayload=0] The maximum allowed message length
	   * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
	   *     not to skip UTF-8 validation for text and close messages
	   */
	  constructor(options = {}) {
	    super();

	    this._allowSynchronousEvents =
	      options.allowSynchronousEvents !== undefined
	        ? options.allowSynchronousEvents
	        : true;
	    this._binaryType = options.binaryType || BINARY_TYPES[0];
	    this._extensions = options.extensions || {};
	    this._isServer = !!options.isServer;
	    this._maxPayload = options.maxPayload | 0;
	    this._skipUTF8Validation = !!options.skipUTF8Validation;
	    this[kWebSocket] = undefined;

	    this._bufferedBytes = 0;
	    this._buffers = [];

	    this._compressed = false;
	    this._payloadLength = 0;
	    this._mask = undefined;
	    this._fragmented = 0;
	    this._masked = false;
	    this._fin = false;
	    this._opcode = 0;

	    this._totalPayloadLength = 0;
	    this._messageLength = 0;
	    this._fragments = [];

	    this._errored = false;
	    this._loop = false;
	    this._state = GET_INFO;
	  }

	  /**
	   * Implements `Writable.prototype._write()`.
	   *
	   * @param {Buffer} chunk The chunk of data to write
	   * @param {String} encoding The character encoding of `chunk`
	   * @param {Function} cb Callback
	   * @private
	   */
	  _write(chunk, encoding, cb) {
	    if (this._opcode === 0x08 && this._state == GET_INFO) return cb();

	    this._bufferedBytes += chunk.length;
	    this._buffers.push(chunk);
	    this.startLoop(cb);
	  }

	  /**
	   * Consumes `n` bytes from the buffered data.
	   *
	   * @param {Number} n The number of bytes to consume
	   * @return {Buffer} The consumed bytes
	   * @private
	   */
	  consume(n) {
	    this._bufferedBytes -= n;

	    if (n === this._buffers[0].length) return this._buffers.shift();

	    if (n < this._buffers[0].length) {
	      const buf = this._buffers[0];
	      this._buffers[0] = new FastBuffer(
	        buf.buffer,
	        buf.byteOffset + n,
	        buf.length - n
	      );

	      return new FastBuffer(buf.buffer, buf.byteOffset, n);
	    }

	    const dst = Buffer.allocUnsafe(n);

	    do {
	      const buf = this._buffers[0];
	      const offset = dst.length - n;

	      if (n >= buf.length) {
	        dst.set(this._buffers.shift(), offset);
	      } else {
	        dst.set(new Uint8Array(buf.buffer, buf.byteOffset, n), offset);
	        this._buffers[0] = new FastBuffer(
	          buf.buffer,
	          buf.byteOffset + n,
	          buf.length - n
	        );
	      }

	      n -= buf.length;
	    } while (n > 0);

	    return dst;
	  }

	  /**
	   * Starts the parsing loop.
	   *
	   * @param {Function} cb Callback
	   * @private
	   */
	  startLoop(cb) {
	    this._loop = true;

	    do {
	      switch (this._state) {
	        case GET_INFO:
	          this.getInfo(cb);
	          break;
	        case GET_PAYLOAD_LENGTH_16:
	          this.getPayloadLength16(cb);
	          break;
	        case GET_PAYLOAD_LENGTH_64:
	          this.getPayloadLength64(cb);
	          break;
	        case GET_MASK:
	          this.getMask();
	          break;
	        case GET_DATA:
	          this.getData(cb);
	          break;
	        case INFLATING:
	        case DEFER_EVENT:
	          this._loop = false;
	          return;
	      }
	    } while (this._loop);

	    if (!this._errored) cb();
	  }

	  /**
	   * Reads the first two bytes of a frame.
	   *
	   * @param {Function} cb Callback
	   * @private
	   */
	  getInfo(cb) {
	    if (this._bufferedBytes < 2) {
	      this._loop = false;
	      return;
	    }

	    const buf = this.consume(2);

	    if ((buf[0] & 0x30) !== 0x00) {
	      const error = this.createError(
	        RangeError,
	        'RSV2 and RSV3 must be clear',
	        true,
	        1002,
	        'WS_ERR_UNEXPECTED_RSV_2_3'
	      );

	      cb(error);
	      return;
	    }

	    const compressed = (buf[0] & 0x40) === 0x40;

	    if (compressed && !this._extensions[PerMessageDeflate.extensionName]) {
	      const error = this.createError(
	        RangeError,
	        'RSV1 must be clear',
	        true,
	        1002,
	        'WS_ERR_UNEXPECTED_RSV_1'
	      );

	      cb(error);
	      return;
	    }

	    this._fin = (buf[0] & 0x80) === 0x80;
	    this._opcode = buf[0] & 0x0f;
	    this._payloadLength = buf[1] & 0x7f;

	    if (this._opcode === 0x00) {
	      if (compressed) {
	        const error = this.createError(
	          RangeError,
	          'RSV1 must be clear',
	          true,
	          1002,
	          'WS_ERR_UNEXPECTED_RSV_1'
	        );

	        cb(error);
	        return;
	      }

	      if (!this._fragmented) {
	        const error = this.createError(
	          RangeError,
	          'invalid opcode 0',
	          true,
	          1002,
	          'WS_ERR_INVALID_OPCODE'
	        );

	        cb(error);
	        return;
	      }

	      this._opcode = this._fragmented;
	    } else if (this._opcode === 0x01 || this._opcode === 0x02) {
	      if (this._fragmented) {
	        const error = this.createError(
	          RangeError,
	          `invalid opcode ${this._opcode}`,
	          true,
	          1002,
	          'WS_ERR_INVALID_OPCODE'
	        );

	        cb(error);
	        return;
	      }

	      this._compressed = compressed;
	    } else if (this._opcode > 0x07 && this._opcode < 0x0b) {
	      if (!this._fin) {
	        const error = this.createError(
	          RangeError,
	          'FIN must be set',
	          true,
	          1002,
	          'WS_ERR_EXPECTED_FIN'
	        );

	        cb(error);
	        return;
	      }

	      if (compressed) {
	        const error = this.createError(
	          RangeError,
	          'RSV1 must be clear',
	          true,
	          1002,
	          'WS_ERR_UNEXPECTED_RSV_1'
	        );

	        cb(error);
	        return;
	      }

	      if (
	        this._payloadLength > 0x7d ||
	        (this._opcode === 0x08 && this._payloadLength === 1)
	      ) {
	        const error = this.createError(
	          RangeError,
	          `invalid payload length ${this._payloadLength}`,
	          true,
	          1002,
	          'WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH'
	        );

	        cb(error);
	        return;
	      }
	    } else {
	      const error = this.createError(
	        RangeError,
	        `invalid opcode ${this._opcode}`,
	        true,
	        1002,
	        'WS_ERR_INVALID_OPCODE'
	      );

	      cb(error);
	      return;
	    }

	    if (!this._fin && !this._fragmented) this._fragmented = this._opcode;
	    this._masked = (buf[1] & 0x80) === 0x80;

	    if (this._isServer) {
	      if (!this._masked) {
	        const error = this.createError(
	          RangeError,
	          'MASK must be set',
	          true,
	          1002,
	          'WS_ERR_EXPECTED_MASK'
	        );

	        cb(error);
	        return;
	      }
	    } else if (this._masked) {
	      const error = this.createError(
	        RangeError,
	        'MASK must be clear',
	        true,
	        1002,
	        'WS_ERR_UNEXPECTED_MASK'
	      );

	      cb(error);
	      return;
	    }

	    if (this._payloadLength === 126) this._state = GET_PAYLOAD_LENGTH_16;
	    else if (this._payloadLength === 127) this._state = GET_PAYLOAD_LENGTH_64;
	    else this.haveLength(cb);
	  }

	  /**
	   * Gets extended payload length (7+16).
	   *
	   * @param {Function} cb Callback
	   * @private
	   */
	  getPayloadLength16(cb) {
	    if (this._bufferedBytes < 2) {
	      this._loop = false;
	      return;
	    }

	    this._payloadLength = this.consume(2).readUInt16BE(0);
	    this.haveLength(cb);
	  }

	  /**
	   * Gets extended payload length (7+64).
	   *
	   * @param {Function} cb Callback
	   * @private
	   */
	  getPayloadLength64(cb) {
	    if (this._bufferedBytes < 8) {
	      this._loop = false;
	      return;
	    }

	    const buf = this.consume(8);
	    const num = buf.readUInt32BE(0);

	    //
	    // The maximum safe integer in JavaScript is 2^53 - 1. An error is returned
	    // if payload length is greater than this number.
	    //
	    if (num > Math.pow(2, 53 - 32) - 1) {
	      const error = this.createError(
	        RangeError,
	        'Unsupported WebSocket frame: payload length > 2^53 - 1',
	        false,
	        1009,
	        'WS_ERR_UNSUPPORTED_DATA_PAYLOAD_LENGTH'
	      );

	      cb(error);
	      return;
	    }

	    this._payloadLength = num * Math.pow(2, 32) + buf.readUInt32BE(4);
	    this.haveLength(cb);
	  }

	  /**
	   * Payload length has been read.
	   *
	   * @param {Function} cb Callback
	   * @private
	   */
	  haveLength(cb) {
	    if (this._payloadLength && this._opcode < 0x08) {
	      this._totalPayloadLength += this._payloadLength;
	      if (this._totalPayloadLength > this._maxPayload && this._maxPayload > 0) {
	        const error = this.createError(
	          RangeError,
	          'Max payload size exceeded',
	          false,
	          1009,
	          'WS_ERR_UNSUPPORTED_MESSAGE_LENGTH'
	        );

	        cb(error);
	        return;
	      }
	    }

	    if (this._masked) this._state = GET_MASK;
	    else this._state = GET_DATA;
	  }

	  /**
	   * Reads mask bytes.
	   *
	   * @private
	   */
	  getMask() {
	    if (this._bufferedBytes < 4) {
	      this._loop = false;
	      return;
	    }

	    this._mask = this.consume(4);
	    this._state = GET_DATA;
	  }

	  /**
	   * Reads data bytes.
	   *
	   * @param {Function} cb Callback
	   * @private
	   */
	  getData(cb) {
	    let data = EMPTY_BUFFER;

	    if (this._payloadLength) {
	      if (this._bufferedBytes < this._payloadLength) {
	        this._loop = false;
	        return;
	      }

	      data = this.consume(this._payloadLength);

	      if (
	        this._masked &&
	        (this._mask[0] | this._mask[1] | this._mask[2] | this._mask[3]) !== 0
	      ) {
	        unmask(data, this._mask);
	      }
	    }

	    if (this._opcode > 0x07) {
	      this.controlMessage(data, cb);
	      return;
	    }

	    if (this._compressed) {
	      this._state = INFLATING;
	      this.decompress(data, cb);
	      return;
	    }

	    if (data.length) {
	      //
	      // This message is not compressed so its length is the sum of the payload
	      // length of all fragments.
	      //
	      this._messageLength = this._totalPayloadLength;
	      this._fragments.push(data);
	    }

	    this.dataMessage(cb);
	  }

	  /**
	   * Decompresses data.
	   *
	   * @param {Buffer} data Compressed data
	   * @param {Function} cb Callback
	   * @private
	   */
	  decompress(data, cb) {
	    const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];

	    perMessageDeflate.decompress(data, this._fin, (err, buf) => {
	      if (err) return cb(err);

	      if (buf.length) {
	        this._messageLength += buf.length;
	        if (this._messageLength > this._maxPayload && this._maxPayload > 0) {
	          const error = this.createError(
	            RangeError,
	            'Max payload size exceeded',
	            false,
	            1009,
	            'WS_ERR_UNSUPPORTED_MESSAGE_LENGTH'
	          );

	          cb(error);
	          return;
	        }

	        this._fragments.push(buf);
	      }

	      this.dataMessage(cb);
	      if (this._state === GET_INFO) this.startLoop(cb);
	    });
	  }

	  /**
	   * Handles a data message.
	   *
	   * @param {Function} cb Callback
	   * @private
	   */
	  dataMessage(cb) {
	    if (!this._fin) {
	      this._state = GET_INFO;
	      return;
	    }

	    const messageLength = this._messageLength;
	    const fragments = this._fragments;

	    this._totalPayloadLength = 0;
	    this._messageLength = 0;
	    this._fragmented = 0;
	    this._fragments = [];

	    if (this._opcode === 2) {
	      let data;

	      if (this._binaryType === 'nodebuffer') {
	        data = concat(fragments, messageLength);
	      } else if (this._binaryType === 'arraybuffer') {
	        data = toArrayBuffer(concat(fragments, messageLength));
	      } else if (this._binaryType === 'blob') {
	        data = new Blob(fragments);
	      } else {
	        data = fragments;
	      }

	      if (this._allowSynchronousEvents) {
	        this.emit('message', data, true);
	        this._state = GET_INFO;
	      } else {
	        this._state = DEFER_EVENT;
	        setImmediate(() => {
	          this.emit('message', data, true);
	          this._state = GET_INFO;
	          this.startLoop(cb);
	        });
	      }
	    } else {
	      const buf = concat(fragments, messageLength);

	      if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
	        const error = this.createError(
	          Error,
	          'invalid UTF-8 sequence',
	          true,
	          1007,
	          'WS_ERR_INVALID_UTF8'
	        );

	        cb(error);
	        return;
	      }

	      if (this._state === INFLATING || this._allowSynchronousEvents) {
	        this.emit('message', buf, false);
	        this._state = GET_INFO;
	      } else {
	        this._state = DEFER_EVENT;
	        setImmediate(() => {
	          this.emit('message', buf, false);
	          this._state = GET_INFO;
	          this.startLoop(cb);
	        });
	      }
	    }
	  }

	  /**
	   * Handles a control message.
	   *
	   * @param {Buffer} data Data to handle
	   * @return {(Error|RangeError|undefined)} A possible error
	   * @private
	   */
	  controlMessage(data, cb) {
	    if (this._opcode === 0x08) {
	      if (data.length === 0) {
	        this._loop = false;
	        this.emit('conclude', 1005, EMPTY_BUFFER);
	        this.end();
	      } else {
	        const code = data.readUInt16BE(0);

	        if (!isValidStatusCode(code)) {
	          const error = this.createError(
	            RangeError,
	            `invalid status code ${code}`,
	            true,
	            1002,
	            'WS_ERR_INVALID_CLOSE_CODE'
	          );

	          cb(error);
	          return;
	        }

	        const buf = new FastBuffer(
	          data.buffer,
	          data.byteOffset + 2,
	          data.length - 2
	        );

	        if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
	          const error = this.createError(
	            Error,
	            'invalid UTF-8 sequence',
	            true,
	            1007,
	            'WS_ERR_INVALID_UTF8'
	          );

	          cb(error);
	          return;
	        }

	        this._loop = false;
	        this.emit('conclude', code, buf);
	        this.end();
	      }

	      this._state = GET_INFO;
	      return;
	    }

	    if (this._allowSynchronousEvents) {
	      this.emit(this._opcode === 0x09 ? 'ping' : 'pong', data);
	      this._state = GET_INFO;
	    } else {
	      this._state = DEFER_EVENT;
	      setImmediate(() => {
	        this.emit(this._opcode === 0x09 ? 'ping' : 'pong', data);
	        this._state = GET_INFO;
	        this.startLoop(cb);
	      });
	    }
	  }

	  /**
	   * Builds an error object.
	   *
	   * @param {function(new:Error|RangeError)} ErrorCtor The error constructor
	   * @param {String} message The error message
	   * @param {Boolean} prefix Specifies whether or not to add a default prefix to
	   *     `message`
	   * @param {Number} statusCode The status code
	   * @param {String} errorCode The exposed error code
	   * @return {(Error|RangeError)} The error
	   * @private
	   */
	  createError(ErrorCtor, message, prefix, statusCode, errorCode) {
	    this._loop = false;
	    this._errored = true;

	    const err = new ErrorCtor(
	      prefix ? `Invalid WebSocket frame: ${message}` : message
	    );

	    Error.captureStackTrace(err, this.createError);
	    err.code = errorCode;
	    err[kStatusCode] = statusCode;
	    return err;
	  }
	}

	receiver = Receiver;
	return receiver;
}

/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "^Duplex" }] */

var sender;
var hasRequiredSender;

function requireSender () {
	if (hasRequiredSender) return sender;
	hasRequiredSender = 1;

	const { Duplex } = require$$0$2;
	const { randomFillSync } = require$$1;

	const PerMessageDeflate = requirePermessageDeflate();
	const { EMPTY_BUFFER, kWebSocket, NOOP } = requireConstants();
	const { isBlob, isValidStatusCode } = requireValidation();
	const { mask: applyMask, toBuffer } = requireBufferUtil();

	const kByteLength = Symbol('kByteLength');
	const maskBuffer = Buffer.alloc(4);
	const RANDOM_POOL_SIZE = 8 * 1024;
	let randomPool;
	let randomPoolPointer = RANDOM_POOL_SIZE;

	const DEFAULT = 0;
	const DEFLATING = 1;
	const GET_BLOB_DATA = 2;

	/**
	 * HyBi Sender implementation.
	 */
	class Sender {
	  /**
	   * Creates a Sender instance.
	   *
	   * @param {Duplex} socket The connection socket
	   * @param {Object} [extensions] An object containing the negotiated extensions
	   * @param {Function} [generateMask] The function used to generate the masking
	   *     key
	   */
	  constructor(socket, extensions, generateMask) {
	    this._extensions = extensions || {};

	    if (generateMask) {
	      this._generateMask = generateMask;
	      this._maskBuffer = Buffer.alloc(4);
	    }

	    this._socket = socket;

	    this._firstFragment = true;
	    this._compress = false;

	    this._bufferedBytes = 0;
	    this._queue = [];
	    this._state = DEFAULT;
	    this.onerror = NOOP;
	    this[kWebSocket] = undefined;
	  }

	  /**
	   * Frames a piece of data according to the HyBi WebSocket protocol.
	   *
	   * @param {(Buffer|String)} data The data to frame
	   * @param {Object} options Options object
	   * @param {Boolean} [options.fin=false] Specifies whether or not to set the
	   *     FIN bit
	   * @param {Function} [options.generateMask] The function used to generate the
	   *     masking key
	   * @param {Boolean} [options.mask=false] Specifies whether or not to mask
	   *     `data`
	   * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
	   *     key
	   * @param {Number} options.opcode The opcode
	   * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
	   *     modified
	   * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
	   *     RSV1 bit
	   * @return {(Buffer|String)[]} The framed data
	   * @public
	   */
	  static frame(data, options) {
	    let mask;
	    let merge = false;
	    let offset = 2;
	    let skipMasking = false;

	    if (options.mask) {
	      mask = options.maskBuffer || maskBuffer;

	      if (options.generateMask) {
	        options.generateMask(mask);
	      } else {
	        if (randomPoolPointer === RANDOM_POOL_SIZE) {
	          /* istanbul ignore else  */
	          if (randomPool === undefined) {
	            //
	            // This is lazily initialized because server-sent frames must not
	            // be masked so it may never be used.
	            //
	            randomPool = Buffer.alloc(RANDOM_POOL_SIZE);
	          }

	          randomFillSync(randomPool, 0, RANDOM_POOL_SIZE);
	          randomPoolPointer = 0;
	        }

	        mask[0] = randomPool[randomPoolPointer++];
	        mask[1] = randomPool[randomPoolPointer++];
	        mask[2] = randomPool[randomPoolPointer++];
	        mask[3] = randomPool[randomPoolPointer++];
	      }

	      skipMasking = (mask[0] | mask[1] | mask[2] | mask[3]) === 0;
	      offset = 6;
	    }

	    let dataLength;

	    if (typeof data === 'string') {
	      if (
	        (!options.mask || skipMasking) &&
	        options[kByteLength] !== undefined
	      ) {
	        dataLength = options[kByteLength];
	      } else {
	        data = Buffer.from(data);
	        dataLength = data.length;
	      }
	    } else {
	      dataLength = data.length;
	      merge = options.mask && options.readOnly && !skipMasking;
	    }

	    let payloadLength = dataLength;

	    if (dataLength >= 65536) {
	      offset += 8;
	      payloadLength = 127;
	    } else if (dataLength > 125) {
	      offset += 2;
	      payloadLength = 126;
	    }

	    const target = Buffer.allocUnsafe(merge ? dataLength + offset : offset);

	    target[0] = options.fin ? options.opcode | 0x80 : options.opcode;
	    if (options.rsv1) target[0] |= 0x40;

	    target[1] = payloadLength;

	    if (payloadLength === 126) {
	      target.writeUInt16BE(dataLength, 2);
	    } else if (payloadLength === 127) {
	      target[2] = target[3] = 0;
	      target.writeUIntBE(dataLength, 4, 6);
	    }

	    if (!options.mask) return [target, data];

	    target[1] |= 0x80;
	    target[offset - 4] = mask[0];
	    target[offset - 3] = mask[1];
	    target[offset - 2] = mask[2];
	    target[offset - 1] = mask[3];

	    if (skipMasking) return [target, data];

	    if (merge) {
	      applyMask(data, mask, target, offset, dataLength);
	      return [target];
	    }

	    applyMask(data, mask, data, 0, dataLength);
	    return [target, data];
	  }

	  /**
	   * Sends a close message to the other peer.
	   *
	   * @param {Number} [code] The status code component of the body
	   * @param {(String|Buffer)} [data] The message component of the body
	   * @param {Boolean} [mask=false] Specifies whether or not to mask the message
	   * @param {Function} [cb] Callback
	   * @public
	   */
	  close(code, data, mask, cb) {
	    let buf;

	    if (code === undefined) {
	      buf = EMPTY_BUFFER;
	    } else if (typeof code !== 'number' || !isValidStatusCode(code)) {
	      throw new TypeError('First argument must be a valid error code number');
	    } else if (data === undefined || !data.length) {
	      buf = Buffer.allocUnsafe(2);
	      buf.writeUInt16BE(code, 0);
	    } else {
	      const length = Buffer.byteLength(data);

	      if (length > 123) {
	        throw new RangeError('The message must not be greater than 123 bytes');
	      }

	      buf = Buffer.allocUnsafe(2 + length);
	      buf.writeUInt16BE(code, 0);

	      if (typeof data === 'string') {
	        buf.write(data, 2);
	      } else {
	        buf.set(data, 2);
	      }
	    }

	    const options = {
	      [kByteLength]: buf.length,
	      fin: true,
	      generateMask: this._generateMask,
	      mask,
	      maskBuffer: this._maskBuffer,
	      opcode: 0x08,
	      readOnly: false,
	      rsv1: false
	    };

	    if (this._state !== DEFAULT) {
	      this.enqueue([this.dispatch, buf, false, options, cb]);
	    } else {
	      this.sendFrame(Sender.frame(buf, options), cb);
	    }
	  }

	  /**
	   * Sends a ping message to the other peer.
	   *
	   * @param {*} data The message to send
	   * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
	   * @param {Function} [cb] Callback
	   * @public
	   */
	  ping(data, mask, cb) {
	    let byteLength;
	    let readOnly;

	    if (typeof data === 'string') {
	      byteLength = Buffer.byteLength(data);
	      readOnly = false;
	    } else if (isBlob(data)) {
	      byteLength = data.size;
	      readOnly = false;
	    } else {
	      data = toBuffer(data);
	      byteLength = data.length;
	      readOnly = toBuffer.readOnly;
	    }

	    if (byteLength > 125) {
	      throw new RangeError('The data size must not be greater than 125 bytes');
	    }

	    const options = {
	      [kByteLength]: byteLength,
	      fin: true,
	      generateMask: this._generateMask,
	      mask,
	      maskBuffer: this._maskBuffer,
	      opcode: 0x09,
	      readOnly,
	      rsv1: false
	    };

	    if (isBlob(data)) {
	      if (this._state !== DEFAULT) {
	        this.enqueue([this.getBlobData, data, false, options, cb]);
	      } else {
	        this.getBlobData(data, false, options, cb);
	      }
	    } else if (this._state !== DEFAULT) {
	      this.enqueue([this.dispatch, data, false, options, cb]);
	    } else {
	      this.sendFrame(Sender.frame(data, options), cb);
	    }
	  }

	  /**
	   * Sends a pong message to the other peer.
	   *
	   * @param {*} data The message to send
	   * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
	   * @param {Function} [cb] Callback
	   * @public
	   */
	  pong(data, mask, cb) {
	    let byteLength;
	    let readOnly;

	    if (typeof data === 'string') {
	      byteLength = Buffer.byteLength(data);
	      readOnly = false;
	    } else if (isBlob(data)) {
	      byteLength = data.size;
	      readOnly = false;
	    } else {
	      data = toBuffer(data);
	      byteLength = data.length;
	      readOnly = toBuffer.readOnly;
	    }

	    if (byteLength > 125) {
	      throw new RangeError('The data size must not be greater than 125 bytes');
	    }

	    const options = {
	      [kByteLength]: byteLength,
	      fin: true,
	      generateMask: this._generateMask,
	      mask,
	      maskBuffer: this._maskBuffer,
	      opcode: 0x0a,
	      readOnly,
	      rsv1: false
	    };

	    if (isBlob(data)) {
	      if (this._state !== DEFAULT) {
	        this.enqueue([this.getBlobData, data, false, options, cb]);
	      } else {
	        this.getBlobData(data, false, options, cb);
	      }
	    } else if (this._state !== DEFAULT) {
	      this.enqueue([this.dispatch, data, false, options, cb]);
	    } else {
	      this.sendFrame(Sender.frame(data, options), cb);
	    }
	  }

	  /**
	   * Sends a data message to the other peer.
	   *
	   * @param {*} data The message to send
	   * @param {Object} options Options object
	   * @param {Boolean} [options.binary=false] Specifies whether `data` is binary
	   *     or text
	   * @param {Boolean} [options.compress=false] Specifies whether or not to
	   *     compress `data`
	   * @param {Boolean} [options.fin=false] Specifies whether the fragment is the
	   *     last one
	   * @param {Boolean} [options.mask=false] Specifies whether or not to mask
	   *     `data`
	   * @param {Function} [cb] Callback
	   * @public
	   */
	  send(data, options, cb) {
	    const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];
	    let opcode = options.binary ? 2 : 1;
	    let rsv1 = options.compress;

	    let byteLength;
	    let readOnly;

	    if (typeof data === 'string') {
	      byteLength = Buffer.byteLength(data);
	      readOnly = false;
	    } else if (isBlob(data)) {
	      byteLength = data.size;
	      readOnly = false;
	    } else {
	      data = toBuffer(data);
	      byteLength = data.length;
	      readOnly = toBuffer.readOnly;
	    }

	    if (this._firstFragment) {
	      this._firstFragment = false;
	      if (
	        rsv1 &&
	        perMessageDeflate &&
	        perMessageDeflate.params[
	          perMessageDeflate._isServer
	            ? 'server_no_context_takeover'
	            : 'client_no_context_takeover'
	        ]
	      ) {
	        rsv1 = byteLength >= perMessageDeflate._threshold;
	      }
	      this._compress = rsv1;
	    } else {
	      rsv1 = false;
	      opcode = 0;
	    }

	    if (options.fin) this._firstFragment = true;

	    const opts = {
	      [kByteLength]: byteLength,
	      fin: options.fin,
	      generateMask: this._generateMask,
	      mask: options.mask,
	      maskBuffer: this._maskBuffer,
	      opcode,
	      readOnly,
	      rsv1
	    };

	    if (isBlob(data)) {
	      if (this._state !== DEFAULT) {
	        this.enqueue([this.getBlobData, data, this._compress, opts, cb]);
	      } else {
	        this.getBlobData(data, this._compress, opts, cb);
	      }
	    } else if (this._state !== DEFAULT) {
	      this.enqueue([this.dispatch, data, this._compress, opts, cb]);
	    } else {
	      this.dispatch(data, this._compress, opts, cb);
	    }
	  }

	  /**
	   * Gets the contents of a blob as binary data.
	   *
	   * @param {Blob} blob The blob
	   * @param {Boolean} [compress=false] Specifies whether or not to compress
	   *     the data
	   * @param {Object} options Options object
	   * @param {Boolean} [options.fin=false] Specifies whether or not to set the
	   *     FIN bit
	   * @param {Function} [options.generateMask] The function used to generate the
	   *     masking key
	   * @param {Boolean} [options.mask=false] Specifies whether or not to mask
	   *     `data`
	   * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
	   *     key
	   * @param {Number} options.opcode The opcode
	   * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
	   *     modified
	   * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
	   *     RSV1 bit
	   * @param {Function} [cb] Callback
	   * @private
	   */
	  getBlobData(blob, compress, options, cb) {
	    this._bufferedBytes += options[kByteLength];
	    this._state = GET_BLOB_DATA;

	    blob
	      .arrayBuffer()
	      .then((arrayBuffer) => {
	        if (this._socket.destroyed) {
	          const err = new Error(
	            'The socket was closed while the blob was being read'
	          );

	          //
	          // `callCallbacks` is called in the next tick to ensure that errors
	          // that might be thrown in the callbacks behave like errors thrown
	          // outside the promise chain.
	          //
	          process.nextTick(callCallbacks, this, err, cb);
	          return;
	        }

	        this._bufferedBytes -= options[kByteLength];
	        const data = toBuffer(arrayBuffer);

	        if (!compress) {
	          this._state = DEFAULT;
	          this.sendFrame(Sender.frame(data, options), cb);
	          this.dequeue();
	        } else {
	          this.dispatch(data, compress, options, cb);
	        }
	      })
	      .catch((err) => {
	        //
	        // `onError` is called in the next tick for the same reason that
	        // `callCallbacks` above is.
	        //
	        process.nextTick(onError, this, err, cb);
	      });
	  }

	  /**
	   * Dispatches a message.
	   *
	   * @param {(Buffer|String)} data The message to send
	   * @param {Boolean} [compress=false] Specifies whether or not to compress
	   *     `data`
	   * @param {Object} options Options object
	   * @param {Boolean} [options.fin=false] Specifies whether or not to set the
	   *     FIN bit
	   * @param {Function} [options.generateMask] The function used to generate the
	   *     masking key
	   * @param {Boolean} [options.mask=false] Specifies whether or not to mask
	   *     `data`
	   * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
	   *     key
	   * @param {Number} options.opcode The opcode
	   * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
	   *     modified
	   * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
	   *     RSV1 bit
	   * @param {Function} [cb] Callback
	   * @private
	   */
	  dispatch(data, compress, options, cb) {
	    if (!compress) {
	      this.sendFrame(Sender.frame(data, options), cb);
	      return;
	    }

	    const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];

	    this._bufferedBytes += options[kByteLength];
	    this._state = DEFLATING;
	    perMessageDeflate.compress(data, options.fin, (_, buf) => {
	      if (this._socket.destroyed) {
	        const err = new Error(
	          'The socket was closed while data was being compressed'
	        );

	        callCallbacks(this, err, cb);
	        return;
	      }

	      this._bufferedBytes -= options[kByteLength];
	      this._state = DEFAULT;
	      options.readOnly = false;
	      this.sendFrame(Sender.frame(buf, options), cb);
	      this.dequeue();
	    });
	  }

	  /**
	   * Executes queued send operations.
	   *
	   * @private
	   */
	  dequeue() {
	    while (this._state === DEFAULT && this._queue.length) {
	      const params = this._queue.shift();

	      this._bufferedBytes -= params[3][kByteLength];
	      Reflect.apply(params[0], this, params.slice(1));
	    }
	  }

	  /**
	   * Enqueues a send operation.
	   *
	   * @param {Array} params Send operation parameters.
	   * @private
	   */
	  enqueue(params) {
	    this._bufferedBytes += params[3][kByteLength];
	    this._queue.push(params);
	  }

	  /**
	   * Sends a frame.
	   *
	   * @param {(Buffer | String)[]} list The frame to send
	   * @param {Function} [cb] Callback
	   * @private
	   */
	  sendFrame(list, cb) {
	    if (list.length === 2) {
	      this._socket.cork();
	      this._socket.write(list[0]);
	      this._socket.write(list[1], cb);
	      this._socket.uncork();
	    } else {
	      this._socket.write(list[0], cb);
	    }
	  }
	}

	sender = Sender;

	/**
	 * Calls queued callbacks with an error.
	 *
	 * @param {Sender} sender The `Sender` instance
	 * @param {Error} err The error to call the callbacks with
	 * @param {Function} [cb] The first callback
	 * @private
	 */
	function callCallbacks(sender, err, cb) {
	  if (typeof cb === 'function') cb(err);

	  for (let i = 0; i < sender._queue.length; i++) {
	    const params = sender._queue[i];
	    const callback = params[params.length - 1];

	    if (typeof callback === 'function') callback(err);
	  }
	}

	/**
	 * Handles a `Sender` error.
	 *
	 * @param {Sender} sender The `Sender` instance
	 * @param {Error} err The error
	 * @param {Function} [cb] The first pending callback
	 * @private
	 */
	function onError(sender, err, cb) {
	  callCallbacks(sender, err, cb);
	  sender.onerror(err);
	}
	return sender;
}

var eventTarget;
var hasRequiredEventTarget;

function requireEventTarget () {
	if (hasRequiredEventTarget) return eventTarget;
	hasRequiredEventTarget = 1;

	const { kForOnEventAttribute, kListener } = requireConstants();

	const kCode = Symbol('kCode');
	const kData = Symbol('kData');
	const kError = Symbol('kError');
	const kMessage = Symbol('kMessage');
	const kReason = Symbol('kReason');
	const kTarget = Symbol('kTarget');
	const kType = Symbol('kType');
	const kWasClean = Symbol('kWasClean');

	/**
	 * Class representing an event.
	 */
	class Event {
	  /**
	   * Create a new `Event`.
	   *
	   * @param {String} type The name of the event
	   * @throws {TypeError} If the `type` argument is not specified
	   */
	  constructor(type) {
	    this[kTarget] = null;
	    this[kType] = type;
	  }

	  /**
	   * @type {*}
	   */
	  get target() {
	    return this[kTarget];
	  }

	  /**
	   * @type {String}
	   */
	  get type() {
	    return this[kType];
	  }
	}

	Object.defineProperty(Event.prototype, 'target', { enumerable: true });
	Object.defineProperty(Event.prototype, 'type', { enumerable: true });

	/**
	 * Class representing a close event.
	 *
	 * @extends Event
	 */
	class CloseEvent extends Event {
	  /**
	   * Create a new `CloseEvent`.
	   *
	   * @param {String} type The name of the event
	   * @param {Object} [options] A dictionary object that allows for setting
	   *     attributes via object members of the same name
	   * @param {Number} [options.code=0] The status code explaining why the
	   *     connection was closed
	   * @param {String} [options.reason=''] A human-readable string explaining why
	   *     the connection was closed
	   * @param {Boolean} [options.wasClean=false] Indicates whether or not the
	   *     connection was cleanly closed
	   */
	  constructor(type, options = {}) {
	    super(type);

	    this[kCode] = options.code === undefined ? 0 : options.code;
	    this[kReason] = options.reason === undefined ? '' : options.reason;
	    this[kWasClean] = options.wasClean === undefined ? false : options.wasClean;
	  }

	  /**
	   * @type {Number}
	   */
	  get code() {
	    return this[kCode];
	  }

	  /**
	   * @type {String}
	   */
	  get reason() {
	    return this[kReason];
	  }

	  /**
	   * @type {Boolean}
	   */
	  get wasClean() {
	    return this[kWasClean];
	  }
	}

	Object.defineProperty(CloseEvent.prototype, 'code', { enumerable: true });
	Object.defineProperty(CloseEvent.prototype, 'reason', { enumerable: true });
	Object.defineProperty(CloseEvent.prototype, 'wasClean', { enumerable: true });

	/**
	 * Class representing an error event.
	 *
	 * @extends Event
	 */
	class ErrorEvent extends Event {
	  /**
	   * Create a new `ErrorEvent`.
	   *
	   * @param {String} type The name of the event
	   * @param {Object} [options] A dictionary object that allows for setting
	   *     attributes via object members of the same name
	   * @param {*} [options.error=null] The error that generated this event
	   * @param {String} [options.message=''] The error message
	   */
	  constructor(type, options = {}) {
	    super(type);

	    this[kError] = options.error === undefined ? null : options.error;
	    this[kMessage] = options.message === undefined ? '' : options.message;
	  }

	  /**
	   * @type {*}
	   */
	  get error() {
	    return this[kError];
	  }

	  /**
	   * @type {String}
	   */
	  get message() {
	    return this[kMessage];
	  }
	}

	Object.defineProperty(ErrorEvent.prototype, 'error', { enumerable: true });
	Object.defineProperty(ErrorEvent.prototype, 'message', { enumerable: true });

	/**
	 * Class representing a message event.
	 *
	 * @extends Event
	 */
	class MessageEvent extends Event {
	  /**
	   * Create a new `MessageEvent`.
	   *
	   * @param {String} type The name of the event
	   * @param {Object} [options] A dictionary object that allows for setting
	   *     attributes via object members of the same name
	   * @param {*} [options.data=null] The message content
	   */
	  constructor(type, options = {}) {
	    super(type);

	    this[kData] = options.data === undefined ? null : options.data;
	  }

	  /**
	   * @type {*}
	   */
	  get data() {
	    return this[kData];
	  }
	}

	Object.defineProperty(MessageEvent.prototype, 'data', { enumerable: true });

	/**
	 * This provides methods for emulating the `EventTarget` interface. It's not
	 * meant to be used directly.
	 *
	 * @mixin
	 */
	const EventTarget = {
	  /**
	   * Register an event listener.
	   *
	   * @param {String} type A string representing the event type to listen for
	   * @param {(Function|Object)} handler The listener to add
	   * @param {Object} [options] An options object specifies characteristics about
	   *     the event listener
	   * @param {Boolean} [options.once=false] A `Boolean` indicating that the
	   *     listener should be invoked at most once after being added. If `true`,
	   *     the listener would be automatically removed when invoked.
	   * @public
	   */
	  addEventListener(type, handler, options = {}) {
	    for (const listener of this.listeners(type)) {
	      if (
	        !options[kForOnEventAttribute] &&
	        listener[kListener] === handler &&
	        !listener[kForOnEventAttribute]
	      ) {
	        return;
	      }
	    }

	    let wrapper;

	    if (type === 'message') {
	      wrapper = function onMessage(data, isBinary) {
	        const event = new MessageEvent('message', {
	          data: isBinary ? data : data.toString()
	        });

	        event[kTarget] = this;
	        callListener(handler, this, event);
	      };
	    } else if (type === 'close') {
	      wrapper = function onClose(code, message) {
	        const event = new CloseEvent('close', {
	          code,
	          reason: message.toString(),
	          wasClean: this._closeFrameReceived && this._closeFrameSent
	        });

	        event[kTarget] = this;
	        callListener(handler, this, event);
	      };
	    } else if (type === 'error') {
	      wrapper = function onError(error) {
	        const event = new ErrorEvent('error', {
	          error,
	          message: error.message
	        });

	        event[kTarget] = this;
	        callListener(handler, this, event);
	      };
	    } else if (type === 'open') {
	      wrapper = function onOpen() {
	        const event = new Event('open');

	        event[kTarget] = this;
	        callListener(handler, this, event);
	      };
	    } else {
	      return;
	    }

	    wrapper[kForOnEventAttribute] = !!options[kForOnEventAttribute];
	    wrapper[kListener] = handler;

	    if (options.once) {
	      this.once(type, wrapper);
	    } else {
	      this.on(type, wrapper);
	    }
	  },

	  /**
	   * Remove an event listener.
	   *
	   * @param {String} type A string representing the event type to remove
	   * @param {(Function|Object)} handler The listener to remove
	   * @public
	   */
	  removeEventListener(type, handler) {
	    for (const listener of this.listeners(type)) {
	      if (listener[kListener] === handler && !listener[kForOnEventAttribute]) {
	        this.removeListener(type, listener);
	        break;
	      }
	    }
	  }
	};

	eventTarget = {
	  CloseEvent,
	  ErrorEvent,
	  Event,
	  EventTarget,
	  MessageEvent
	};

	/**
	 * Call an event listener
	 *
	 * @param {(Function|Object)} listener The listener to call
	 * @param {*} thisArg The value to use as `this`` when calling the listener
	 * @param {Event} event The event to pass to the listener
	 * @private
	 */
	function callListener(listener, thisArg, event) {
	  if (typeof listener === 'object' && listener.handleEvent) {
	    listener.handleEvent.call(listener, event);
	  } else {
	    listener.call(thisArg, event);
	  }
	}
	return eventTarget;
}

var extension;
var hasRequiredExtension;

function requireExtension () {
	if (hasRequiredExtension) return extension;
	hasRequiredExtension = 1;

	const { tokenChars } = requireValidation();

	/**
	 * Adds an offer to the map of extension offers or a parameter to the map of
	 * parameters.
	 *
	 * @param {Object} dest The map of extension offers or parameters
	 * @param {String} name The extension or parameter name
	 * @param {(Object|Boolean|String)} elem The extension parameters or the
	 *     parameter value
	 * @private
	 */
	function push(dest, name, elem) {
	  if (dest[name] === undefined) dest[name] = [elem];
	  else dest[name].push(elem);
	}

	/**
	 * Parses the `Sec-WebSocket-Extensions` header into an object.
	 *
	 * @param {String} header The field value of the header
	 * @return {Object} The parsed object
	 * @public
	 */
	function parse(header) {
	  const offers = Object.create(null);
	  let params = Object.create(null);
	  let mustUnescape = false;
	  let isEscaping = false;
	  let inQuotes = false;
	  let extensionName;
	  let paramName;
	  let start = -1;
	  let code = -1;
	  let end = -1;
	  let i = 0;

	  for (; i < header.length; i++) {
	    code = header.charCodeAt(i);

	    if (extensionName === undefined) {
	      if (end === -1 && tokenChars[code] === 1) {
	        if (start === -1) start = i;
	      } else if (
	        i !== 0 &&
	        (code === 0x20 /* ' ' */ || code === 0x09) /* '\t' */
	      ) {
	        if (end === -1 && start !== -1) end = i;
	      } else if (code === 0x3b /* ';' */ || code === 0x2c /* ',' */) {
	        if (start === -1) {
	          throw new SyntaxError(`Unexpected character at index ${i}`);
	        }

	        if (end === -1) end = i;
	        const name = header.slice(start, end);
	        if (code === 0x2c) {
	          push(offers, name, params);
	          params = Object.create(null);
	        } else {
	          extensionName = name;
	        }

	        start = end = -1;
	      } else {
	        throw new SyntaxError(`Unexpected character at index ${i}`);
	      }
	    } else if (paramName === undefined) {
	      if (end === -1 && tokenChars[code] === 1) {
	        if (start === -1) start = i;
	      } else if (code === 0x20 || code === 0x09) {
	        if (end === -1 && start !== -1) end = i;
	      } else if (code === 0x3b || code === 0x2c) {
	        if (start === -1) {
	          throw new SyntaxError(`Unexpected character at index ${i}`);
	        }

	        if (end === -1) end = i;
	        push(params, header.slice(start, end), true);
	        if (code === 0x2c) {
	          push(offers, extensionName, params);
	          params = Object.create(null);
	          extensionName = undefined;
	        }

	        start = end = -1;
	      } else if (code === 0x3d /* '=' */ && start !== -1 && end === -1) {
	        paramName = header.slice(start, i);
	        start = end = -1;
	      } else {
	        throw new SyntaxError(`Unexpected character at index ${i}`);
	      }
	    } else {
	      //
	      // The value of a quoted-string after unescaping must conform to the
	      // token ABNF, so only token characters are valid.
	      // Ref: https://tools.ietf.org/html/rfc6455#section-9.1
	      //
	      if (isEscaping) {
	        if (tokenChars[code] !== 1) {
	          throw new SyntaxError(`Unexpected character at index ${i}`);
	        }
	        if (start === -1) start = i;
	        else if (!mustUnescape) mustUnescape = true;
	        isEscaping = false;
	      } else if (inQuotes) {
	        if (tokenChars[code] === 1) {
	          if (start === -1) start = i;
	        } else if (code === 0x22 /* '"' */ && start !== -1) {
	          inQuotes = false;
	          end = i;
	        } else if (code === 0x5c /* '\' */) {
	          isEscaping = true;
	        } else {
	          throw new SyntaxError(`Unexpected character at index ${i}`);
	        }
	      } else if (code === 0x22 && header.charCodeAt(i - 1) === 0x3d) {
	        inQuotes = true;
	      } else if (end === -1 && tokenChars[code] === 1) {
	        if (start === -1) start = i;
	      } else if (start !== -1 && (code === 0x20 || code === 0x09)) {
	        if (end === -1) end = i;
	      } else if (code === 0x3b || code === 0x2c) {
	        if (start === -1) {
	          throw new SyntaxError(`Unexpected character at index ${i}`);
	        }

	        if (end === -1) end = i;
	        let value = header.slice(start, end);
	        if (mustUnescape) {
	          value = value.replace(/\\/g, '');
	          mustUnescape = false;
	        }
	        push(params, paramName, value);
	        if (code === 0x2c) {
	          push(offers, extensionName, params);
	          params = Object.create(null);
	          extensionName = undefined;
	        }

	        paramName = undefined;
	        start = end = -1;
	      } else {
	        throw new SyntaxError(`Unexpected character at index ${i}`);
	      }
	    }
	  }

	  if (start === -1 || inQuotes || code === 0x20 || code === 0x09) {
	    throw new SyntaxError('Unexpected end of input');
	  }

	  if (end === -1) end = i;
	  const token = header.slice(start, end);
	  if (extensionName === undefined) {
	    push(offers, token, params);
	  } else {
	    if (paramName === undefined) {
	      push(params, token, true);
	    } else if (mustUnescape) {
	      push(params, paramName, token.replace(/\\/g, ''));
	    } else {
	      push(params, paramName, token);
	    }
	    push(offers, extensionName, params);
	  }

	  return offers;
	}

	/**
	 * Builds the `Sec-WebSocket-Extensions` header field value.
	 *
	 * @param {Object} extensions The map of extensions and parameters to format
	 * @return {String} A string representing the given object
	 * @public
	 */
	function format(extensions) {
	  return Object.keys(extensions)
	    .map((extension) => {
	      let configurations = extensions[extension];
	      if (!Array.isArray(configurations)) configurations = [configurations];
	      return configurations
	        .map((params) => {
	          return [extension]
	            .concat(
	              Object.keys(params).map((k) => {
	                let values = params[k];
	                if (!Array.isArray(values)) values = [values];
	                return values
	                  .map((v) => (v === true ? k : `${k}=${v}`))
	                  .join('; ');
	              })
	            )
	            .join('; ');
	        })
	        .join(', ');
	    })
	    .join(', ');
	}

	extension = { format, parse };
	return extension;
}

/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "^Duplex|Readable$", "caughtErrors": "none" }] */

var websocket;
var hasRequiredWebsocket;

function requireWebsocket () {
	if (hasRequiredWebsocket) return websocket;
	hasRequiredWebsocket = 1;

	const EventEmitter = require$$0$3;
	const https = require$$1$1;
	const http = require$$2;
	const net = require$$3;
	const tls = require$$4;
	const { randomBytes, createHash } = require$$1;
	const { Duplex, Readable } = require$$0$2;
	const { URL } = require$$7;

	const PerMessageDeflate = requirePermessageDeflate();
	const Receiver = requireReceiver();
	const Sender = requireSender();
	const { isBlob } = requireValidation();

	const {
	  BINARY_TYPES,
	  CLOSE_TIMEOUT,
	  EMPTY_BUFFER,
	  GUID,
	  kForOnEventAttribute,
	  kListener,
	  kStatusCode,
	  kWebSocket,
	  NOOP
	} = requireConstants();
	const {
	  EventTarget: { addEventListener, removeEventListener }
	} = requireEventTarget();
	const { format, parse } = requireExtension();
	const { toBuffer } = requireBufferUtil();

	const kAborted = Symbol('kAborted');
	const protocolVersions = [8, 13];
	const readyStates = ['CONNECTING', 'OPEN', 'CLOSING', 'CLOSED'];
	const subprotocolRegex = /^[!#$%&'*+\-.0-9A-Z^_`|a-z~]+$/;

	/**
	 * Class representing a WebSocket.
	 *
	 * @extends EventEmitter
	 */
	class WebSocket extends EventEmitter {
	  /**
	   * Create a new `WebSocket`.
	   *
	   * @param {(String|URL)} address The URL to which to connect
	   * @param {(String|String[])} [protocols] The subprotocols
	   * @param {Object} [options] Connection options
	   */
	  constructor(address, protocols, options) {
	    super();

	    this._binaryType = BINARY_TYPES[0];
	    this._closeCode = 1006;
	    this._closeFrameReceived = false;
	    this._closeFrameSent = false;
	    this._closeMessage = EMPTY_BUFFER;
	    this._closeTimer = null;
	    this._errorEmitted = false;
	    this._extensions = {};
	    this._paused = false;
	    this._protocol = '';
	    this._readyState = WebSocket.CONNECTING;
	    this._receiver = null;
	    this._sender = null;
	    this._socket = null;

	    if (address !== null) {
	      this._bufferedAmount = 0;
	      this._isServer = false;
	      this._redirects = 0;

	      if (protocols === undefined) {
	        protocols = [];
	      } else if (!Array.isArray(protocols)) {
	        if (typeof protocols === 'object' && protocols !== null) {
	          options = protocols;
	          protocols = [];
	        } else {
	          protocols = [protocols];
	        }
	      }

	      initAsClient(this, address, protocols, options);
	    } else {
	      this._autoPong = options.autoPong;
	      this._closeTimeout = options.closeTimeout;
	      this._isServer = true;
	    }
	  }

	  /**
	   * For historical reasons, the custom "nodebuffer" type is used by the default
	   * instead of "blob".
	   *
	   * @type {String}
	   */
	  get binaryType() {
	    return this._binaryType;
	  }

	  set binaryType(type) {
	    if (!BINARY_TYPES.includes(type)) return;

	    this._binaryType = type;

	    //
	    // Allow to change `binaryType` on the fly.
	    //
	    if (this._receiver) this._receiver._binaryType = type;
	  }

	  /**
	   * @type {Number}
	   */
	  get bufferedAmount() {
	    if (!this._socket) return this._bufferedAmount;

	    return this._socket._writableState.length + this._sender._bufferedBytes;
	  }

	  /**
	   * @type {String}
	   */
	  get extensions() {
	    return Object.keys(this._extensions).join();
	  }

	  /**
	   * @type {Boolean}
	   */
	  get isPaused() {
	    return this._paused;
	  }

	  /**
	   * @type {Function}
	   */
	  /* istanbul ignore next */
	  get onclose() {
	    return null;
	  }

	  /**
	   * @type {Function}
	   */
	  /* istanbul ignore next */
	  get onerror() {
	    return null;
	  }

	  /**
	   * @type {Function}
	   */
	  /* istanbul ignore next */
	  get onopen() {
	    return null;
	  }

	  /**
	   * @type {Function}
	   */
	  /* istanbul ignore next */
	  get onmessage() {
	    return null;
	  }

	  /**
	   * @type {String}
	   */
	  get protocol() {
	    return this._protocol;
	  }

	  /**
	   * @type {Number}
	   */
	  get readyState() {
	    return this._readyState;
	  }

	  /**
	   * @type {String}
	   */
	  get url() {
	    return this._url;
	  }

	  /**
	   * Set up the socket and the internal resources.
	   *
	   * @param {Duplex} socket The network socket between the server and client
	   * @param {Buffer} head The first packet of the upgraded stream
	   * @param {Object} options Options object
	   * @param {Boolean} [options.allowSynchronousEvents=false] Specifies whether
	   *     any of the `'message'`, `'ping'`, and `'pong'` events can be emitted
	   *     multiple times in the same tick
	   * @param {Function} [options.generateMask] The function used to generate the
	   *     masking key
	   * @param {Number} [options.maxPayload=0] The maximum allowed message size
	   * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
	   *     not to skip UTF-8 validation for text and close messages
	   * @private
	   */
	  setSocket(socket, head, options) {
	    const receiver = new Receiver({
	      allowSynchronousEvents: options.allowSynchronousEvents,
	      binaryType: this.binaryType,
	      extensions: this._extensions,
	      isServer: this._isServer,
	      maxPayload: options.maxPayload,
	      skipUTF8Validation: options.skipUTF8Validation
	    });

	    const sender = new Sender(socket, this._extensions, options.generateMask);

	    this._receiver = receiver;
	    this._sender = sender;
	    this._socket = socket;

	    receiver[kWebSocket] = this;
	    sender[kWebSocket] = this;
	    socket[kWebSocket] = this;

	    receiver.on('conclude', receiverOnConclude);
	    receiver.on('drain', receiverOnDrain);
	    receiver.on('error', receiverOnError);
	    receiver.on('message', receiverOnMessage);
	    receiver.on('ping', receiverOnPing);
	    receiver.on('pong', receiverOnPong);

	    sender.onerror = senderOnError;

	    //
	    // These methods may not be available if `socket` is just a `Duplex`.
	    //
	    if (socket.setTimeout) socket.setTimeout(0);
	    if (socket.setNoDelay) socket.setNoDelay();

	    if (head.length > 0) socket.unshift(head);

	    socket.on('close', socketOnClose);
	    socket.on('data', socketOnData);
	    socket.on('end', socketOnEnd);
	    socket.on('error', socketOnError);

	    this._readyState = WebSocket.OPEN;
	    this.emit('open');
	  }

	  /**
	   * Emit the `'close'` event.
	   *
	   * @private
	   */
	  emitClose() {
	    if (!this._socket) {
	      this._readyState = WebSocket.CLOSED;
	      this.emit('close', this._closeCode, this._closeMessage);
	      return;
	    }

	    if (this._extensions[PerMessageDeflate.extensionName]) {
	      this._extensions[PerMessageDeflate.extensionName].cleanup();
	    }

	    this._receiver.removeAllListeners();
	    this._readyState = WebSocket.CLOSED;
	    this.emit('close', this._closeCode, this._closeMessage);
	  }

	  /**
	   * Start a closing handshake.
	   *
	   *          +----------+   +-----------+   +----------+
	   *     - - -|ws.close()|-->|close frame|-->|ws.close()|- - -
	   *    |     +----------+   +-----------+   +----------+     |
	   *          +----------+   +-----------+         |
	   * CLOSING  |ws.close()|<--|close frame|<--+-----+       CLOSING
	   *          +----------+   +-----------+   |
	   *    |           |                        |   +---+        |
	   *                +------------------------+-->|fin| - - - -
	   *    |         +---+                      |   +---+
	   *     - - - - -|fin|<---------------------+
	   *              +---+
	   *
	   * @param {Number} [code] Status code explaining why the connection is closing
	   * @param {(String|Buffer)} [data] The reason why the connection is
	   *     closing
	   * @public
	   */
	  close(code, data) {
	    if (this.readyState === WebSocket.CLOSED) return;
	    if (this.readyState === WebSocket.CONNECTING) {
	      const msg = 'WebSocket was closed before the connection was established';
	      abortHandshake(this, this._req, msg);
	      return;
	    }

	    if (this.readyState === WebSocket.CLOSING) {
	      if (
	        this._closeFrameSent &&
	        (this._closeFrameReceived || this._receiver._writableState.errorEmitted)
	      ) {
	        this._socket.end();
	      }

	      return;
	    }

	    this._readyState = WebSocket.CLOSING;
	    this._sender.close(code, data, !this._isServer, (err) => {
	      //
	      // This error is handled by the `'error'` listener on the socket. We only
	      // want to know if the close frame has been sent here.
	      //
	      if (err) return;

	      this._closeFrameSent = true;

	      if (
	        this._closeFrameReceived ||
	        this._receiver._writableState.errorEmitted
	      ) {
	        this._socket.end();
	      }
	    });

	    setCloseTimer(this);
	  }

	  /**
	   * Pause the socket.
	   *
	   * @public
	   */
	  pause() {
	    if (
	      this.readyState === WebSocket.CONNECTING ||
	      this.readyState === WebSocket.CLOSED
	    ) {
	      return;
	    }

	    this._paused = true;
	    this._socket.pause();
	  }

	  /**
	   * Send a ping.
	   *
	   * @param {*} [data] The data to send
	   * @param {Boolean} [mask] Indicates whether or not to mask `data`
	   * @param {Function} [cb] Callback which is executed when the ping is sent
	   * @public
	   */
	  ping(data, mask, cb) {
	    if (this.readyState === WebSocket.CONNECTING) {
	      throw new Error('WebSocket is not open: readyState 0 (CONNECTING)');
	    }

	    if (typeof data === 'function') {
	      cb = data;
	      data = mask = undefined;
	    } else if (typeof mask === 'function') {
	      cb = mask;
	      mask = undefined;
	    }

	    if (typeof data === 'number') data = data.toString();

	    if (this.readyState !== WebSocket.OPEN) {
	      sendAfterClose(this, data, cb);
	      return;
	    }

	    if (mask === undefined) mask = !this._isServer;
	    this._sender.ping(data || EMPTY_BUFFER, mask, cb);
	  }

	  /**
	   * Send a pong.
	   *
	   * @param {*} [data] The data to send
	   * @param {Boolean} [mask] Indicates whether or not to mask `data`
	   * @param {Function} [cb] Callback which is executed when the pong is sent
	   * @public
	   */
	  pong(data, mask, cb) {
	    if (this.readyState === WebSocket.CONNECTING) {
	      throw new Error('WebSocket is not open: readyState 0 (CONNECTING)');
	    }

	    if (typeof data === 'function') {
	      cb = data;
	      data = mask = undefined;
	    } else if (typeof mask === 'function') {
	      cb = mask;
	      mask = undefined;
	    }

	    if (typeof data === 'number') data = data.toString();

	    if (this.readyState !== WebSocket.OPEN) {
	      sendAfterClose(this, data, cb);
	      return;
	    }

	    if (mask === undefined) mask = !this._isServer;
	    this._sender.pong(data || EMPTY_BUFFER, mask, cb);
	  }

	  /**
	   * Resume the socket.
	   *
	   * @public
	   */
	  resume() {
	    if (
	      this.readyState === WebSocket.CONNECTING ||
	      this.readyState === WebSocket.CLOSED
	    ) {
	      return;
	    }

	    this._paused = false;
	    if (!this._receiver._writableState.needDrain) this._socket.resume();
	  }

	  /**
	   * Send a data message.
	   *
	   * @param {*} data The message to send
	   * @param {Object} [options] Options object
	   * @param {Boolean} [options.binary] Specifies whether `data` is binary or
	   *     text
	   * @param {Boolean} [options.compress] Specifies whether or not to compress
	   *     `data`
	   * @param {Boolean} [options.fin=true] Specifies whether the fragment is the
	   *     last one
	   * @param {Boolean} [options.mask] Specifies whether or not to mask `data`
	   * @param {Function} [cb] Callback which is executed when data is written out
	   * @public
	   */
	  send(data, options, cb) {
	    if (this.readyState === WebSocket.CONNECTING) {
	      throw new Error('WebSocket is not open: readyState 0 (CONNECTING)');
	    }

	    if (typeof options === 'function') {
	      cb = options;
	      options = {};
	    }

	    if (typeof data === 'number') data = data.toString();

	    if (this.readyState !== WebSocket.OPEN) {
	      sendAfterClose(this, data, cb);
	      return;
	    }

	    const opts = {
	      binary: typeof data !== 'string',
	      mask: !this._isServer,
	      compress: true,
	      fin: true,
	      ...options
	    };

	    if (!this._extensions[PerMessageDeflate.extensionName]) {
	      opts.compress = false;
	    }

	    this._sender.send(data || EMPTY_BUFFER, opts, cb);
	  }

	  /**
	   * Forcibly close the connection.
	   *
	   * @public
	   */
	  terminate() {
	    if (this.readyState === WebSocket.CLOSED) return;
	    if (this.readyState === WebSocket.CONNECTING) {
	      const msg = 'WebSocket was closed before the connection was established';
	      abortHandshake(this, this._req, msg);
	      return;
	    }

	    if (this._socket) {
	      this._readyState = WebSocket.CLOSING;
	      this._socket.destroy();
	    }
	  }
	}

	/**
	 * @constant {Number} CONNECTING
	 * @memberof WebSocket
	 */
	Object.defineProperty(WebSocket, 'CONNECTING', {
	  enumerable: true,
	  value: readyStates.indexOf('CONNECTING')
	});

	/**
	 * @constant {Number} CONNECTING
	 * @memberof WebSocket.prototype
	 */
	Object.defineProperty(WebSocket.prototype, 'CONNECTING', {
	  enumerable: true,
	  value: readyStates.indexOf('CONNECTING')
	});

	/**
	 * @constant {Number} OPEN
	 * @memberof WebSocket
	 */
	Object.defineProperty(WebSocket, 'OPEN', {
	  enumerable: true,
	  value: readyStates.indexOf('OPEN')
	});

	/**
	 * @constant {Number} OPEN
	 * @memberof WebSocket.prototype
	 */
	Object.defineProperty(WebSocket.prototype, 'OPEN', {
	  enumerable: true,
	  value: readyStates.indexOf('OPEN')
	});

	/**
	 * @constant {Number} CLOSING
	 * @memberof WebSocket
	 */
	Object.defineProperty(WebSocket, 'CLOSING', {
	  enumerable: true,
	  value: readyStates.indexOf('CLOSING')
	});

	/**
	 * @constant {Number} CLOSING
	 * @memberof WebSocket.prototype
	 */
	Object.defineProperty(WebSocket.prototype, 'CLOSING', {
	  enumerable: true,
	  value: readyStates.indexOf('CLOSING')
	});

	/**
	 * @constant {Number} CLOSED
	 * @memberof WebSocket
	 */
	Object.defineProperty(WebSocket, 'CLOSED', {
	  enumerable: true,
	  value: readyStates.indexOf('CLOSED')
	});

	/**
	 * @constant {Number} CLOSED
	 * @memberof WebSocket.prototype
	 */
	Object.defineProperty(WebSocket.prototype, 'CLOSED', {
	  enumerable: true,
	  value: readyStates.indexOf('CLOSED')
	});

	[
	  'binaryType',
	  'bufferedAmount',
	  'extensions',
	  'isPaused',
	  'protocol',
	  'readyState',
	  'url'
	].forEach((property) => {
	  Object.defineProperty(WebSocket.prototype, property, { enumerable: true });
	});

	//
	// Add the `onopen`, `onerror`, `onclose`, and `onmessage` attributes.
	// See https://html.spec.whatwg.org/multipage/comms.html#the-websocket-interface
	//
	['open', 'error', 'close', 'message'].forEach((method) => {
	  Object.defineProperty(WebSocket.prototype, `on${method}`, {
	    enumerable: true,
	    get() {
	      for (const listener of this.listeners(method)) {
	        if (listener[kForOnEventAttribute]) return listener[kListener];
	      }

	      return null;
	    },
	    set(handler) {
	      for (const listener of this.listeners(method)) {
	        if (listener[kForOnEventAttribute]) {
	          this.removeListener(method, listener);
	          break;
	        }
	      }

	      if (typeof handler !== 'function') return;

	      this.addEventListener(method, handler, {
	        [kForOnEventAttribute]: true
	      });
	    }
	  });
	});

	WebSocket.prototype.addEventListener = addEventListener;
	WebSocket.prototype.removeEventListener = removeEventListener;

	websocket = WebSocket;

	/**
	 * Initialize a WebSocket client.
	 *
	 * @param {WebSocket} websocket The client to initialize
	 * @param {(String|URL)} address The URL to which to connect
	 * @param {Array} protocols The subprotocols
	 * @param {Object} [options] Connection options
	 * @param {Boolean} [options.allowSynchronousEvents=true] Specifies whether any
	 *     of the `'message'`, `'ping'`, and `'pong'` events can be emitted multiple
	 *     times in the same tick
	 * @param {Boolean} [options.autoPong=true] Specifies whether or not to
	 *     automatically send a pong in response to a ping
	 * @param {Number} [options.closeTimeout=30000] Duration in milliseconds to wait
	 *     for the closing handshake to finish after `websocket.close()` is called
	 * @param {Function} [options.finishRequest] A function which can be used to
	 *     customize the headers of each http request before it is sent
	 * @param {Boolean} [options.followRedirects=false] Whether or not to follow
	 *     redirects
	 * @param {Function} [options.generateMask] The function used to generate the
	 *     masking key
	 * @param {Number} [options.handshakeTimeout] Timeout in milliseconds for the
	 *     handshake request
	 * @param {Number} [options.maxPayload=104857600] The maximum allowed message
	 *     size
	 * @param {Number} [options.maxRedirects=10] The maximum number of redirects
	 *     allowed
	 * @param {String} [options.origin] Value of the `Origin` or
	 *     `Sec-WebSocket-Origin` header
	 * @param {(Boolean|Object)} [options.perMessageDeflate=true] Enable/disable
	 *     permessage-deflate
	 * @param {Number} [options.protocolVersion=13] Value of the
	 *     `Sec-WebSocket-Version` header
	 * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
	 *     not to skip UTF-8 validation for text and close messages
	 * @private
	 */
	function initAsClient(websocket, address, protocols, options) {
	  const opts = {
	    allowSynchronousEvents: true,
	    autoPong: true,
	    closeTimeout: CLOSE_TIMEOUT,
	    protocolVersion: protocolVersions[1],
	    maxPayload: 100 * 1024 * 1024,
	    skipUTF8Validation: false,
	    perMessageDeflate: true,
	    followRedirects: false,
	    maxRedirects: 10,
	    ...options,
	    socketPath: undefined,
	    hostname: undefined,
	    protocol: undefined,
	    timeout: undefined,
	    method: 'GET',
	    host: undefined,
	    path: undefined,
	    port: undefined
	  };

	  websocket._autoPong = opts.autoPong;
	  websocket._closeTimeout = opts.closeTimeout;

	  if (!protocolVersions.includes(opts.protocolVersion)) {
	    throw new RangeError(
	      `Unsupported protocol version: ${opts.protocolVersion} ` +
	        `(supported versions: ${protocolVersions.join(', ')})`
	    );
	  }

	  let parsedUrl;

	  if (address instanceof URL) {
	    parsedUrl = address;
	  } else {
	    try {
	      parsedUrl = new URL(address);
	    } catch (e) {
	      throw new SyntaxError(`Invalid URL: ${address}`);
	    }
	  }

	  if (parsedUrl.protocol === 'http:') {
	    parsedUrl.protocol = 'ws:';
	  } else if (parsedUrl.protocol === 'https:') {
	    parsedUrl.protocol = 'wss:';
	  }

	  websocket._url = parsedUrl.href;

	  const isSecure = parsedUrl.protocol === 'wss:';
	  const isIpcUrl = parsedUrl.protocol === 'ws+unix:';
	  let invalidUrlMessage;

	  if (parsedUrl.protocol !== 'ws:' && !isSecure && !isIpcUrl) {
	    invalidUrlMessage =
	      'The URL\'s protocol must be one of "ws:", "wss:", ' +
	      '"http:", "https:", or "ws+unix:"';
	  } else if (isIpcUrl && !parsedUrl.pathname) {
	    invalidUrlMessage = "The URL's pathname is empty";
	  } else if (parsedUrl.hash) {
	    invalidUrlMessage = 'The URL contains a fragment identifier';
	  }

	  if (invalidUrlMessage) {
	    const err = new SyntaxError(invalidUrlMessage);

	    if (websocket._redirects === 0) {
	      throw err;
	    } else {
	      emitErrorAndClose(websocket, err);
	      return;
	    }
	  }

	  const defaultPort = isSecure ? 443 : 80;
	  const key = randomBytes(16).toString('base64');
	  const request = isSecure ? https.request : http.request;
	  const protocolSet = new Set();
	  let perMessageDeflate;

	  opts.createConnection =
	    opts.createConnection || (isSecure ? tlsConnect : netConnect);
	  opts.defaultPort = opts.defaultPort || defaultPort;
	  opts.port = parsedUrl.port || defaultPort;
	  opts.host = parsedUrl.hostname.startsWith('[')
	    ? parsedUrl.hostname.slice(1, -1)
	    : parsedUrl.hostname;
	  opts.headers = {
	    ...opts.headers,
	    'Sec-WebSocket-Version': opts.protocolVersion,
	    'Sec-WebSocket-Key': key,
	    Connection: 'Upgrade',
	    Upgrade: 'websocket'
	  };
	  opts.path = parsedUrl.pathname + parsedUrl.search;
	  opts.timeout = opts.handshakeTimeout;

	  if (opts.perMessageDeflate) {
	    perMessageDeflate = new PerMessageDeflate(
	      opts.perMessageDeflate !== true ? opts.perMessageDeflate : {},
	      false,
	      opts.maxPayload
	    );
	    opts.headers['Sec-WebSocket-Extensions'] = format({
	      [PerMessageDeflate.extensionName]: perMessageDeflate.offer()
	    });
	  }
	  if (protocols.length) {
	    for (const protocol of protocols) {
	      if (
	        typeof protocol !== 'string' ||
	        !subprotocolRegex.test(protocol) ||
	        protocolSet.has(protocol)
	      ) {
	        throw new SyntaxError(
	          'An invalid or duplicated subprotocol was specified'
	        );
	      }

	      protocolSet.add(protocol);
	    }

	    opts.headers['Sec-WebSocket-Protocol'] = protocols.join(',');
	  }
	  if (opts.origin) {
	    if (opts.protocolVersion < 13) {
	      opts.headers['Sec-WebSocket-Origin'] = opts.origin;
	    } else {
	      opts.headers.Origin = opts.origin;
	    }
	  }
	  if (parsedUrl.username || parsedUrl.password) {
	    opts.auth = `${parsedUrl.username}:${parsedUrl.password}`;
	  }

	  if (isIpcUrl) {
	    const parts = opts.path.split(':');

	    opts.socketPath = parts[0];
	    opts.path = parts[1];
	  }

	  let req;

	  if (opts.followRedirects) {
	    if (websocket._redirects === 0) {
	      websocket._originalIpc = isIpcUrl;
	      websocket._originalSecure = isSecure;
	      websocket._originalHostOrSocketPath = isIpcUrl
	        ? opts.socketPath
	        : parsedUrl.host;

	      const headers = options && options.headers;

	      //
	      // Shallow copy the user provided options so that headers can be changed
	      // without mutating the original object.
	      //
	      options = { ...options, headers: {} };

	      if (headers) {
	        for (const [key, value] of Object.entries(headers)) {
	          options.headers[key.toLowerCase()] = value;
	        }
	      }
	    } else if (websocket.listenerCount('redirect') === 0) {
	      const isSameHost = isIpcUrl
	        ? websocket._originalIpc
	          ? opts.socketPath === websocket._originalHostOrSocketPath
	          : false
	        : websocket._originalIpc
	          ? false
	          : parsedUrl.host === websocket._originalHostOrSocketPath;

	      if (!isSameHost || (websocket._originalSecure && !isSecure)) {
	        //
	        // Match curl 7.77.0 behavior and drop the following headers. These
	        // headers are also dropped when following a redirect to a subdomain.
	        //
	        delete opts.headers.authorization;
	        delete opts.headers.cookie;

	        if (!isSameHost) delete opts.headers.host;

	        opts.auth = undefined;
	      }
	    }

	    //
	    // Match curl 7.77.0 behavior and make the first `Authorization` header win.
	    // If the `Authorization` header is set, then there is nothing to do as it
	    // will take precedence.
	    //
	    if (opts.auth && !options.headers.authorization) {
	      options.headers.authorization =
	        'Basic ' + Buffer.from(opts.auth).toString('base64');
	    }

	    req = websocket._req = request(opts);

	    if (websocket._redirects) {
	      //
	      // Unlike what is done for the `'upgrade'` event, no early exit is
	      // triggered here if the user calls `websocket.close()` or
	      // `websocket.terminate()` from a listener of the `'redirect'` event. This
	      // is because the user can also call `request.destroy()` with an error
	      // before calling `websocket.close()` or `websocket.terminate()` and this
	      // would result in an error being emitted on the `request` object with no
	      // `'error'` event listeners attached.
	      //
	      websocket.emit('redirect', websocket.url, req);
	    }
	  } else {
	    req = websocket._req = request(opts);
	  }

	  if (opts.timeout) {
	    req.on('timeout', () => {
	      abortHandshake(websocket, req, 'Opening handshake has timed out');
	    });
	  }

	  req.on('error', (err) => {
	    if (req === null || req[kAborted]) return;

	    req = websocket._req = null;
	    emitErrorAndClose(websocket, err);
	  });

	  req.on('response', (res) => {
	    const location = res.headers.location;
	    const statusCode = res.statusCode;

	    if (
	      location &&
	      opts.followRedirects &&
	      statusCode >= 300 &&
	      statusCode < 400
	    ) {
	      if (++websocket._redirects > opts.maxRedirects) {
	        abortHandshake(websocket, req, 'Maximum redirects exceeded');
	        return;
	      }

	      req.abort();

	      let addr;

	      try {
	        addr = new URL(location, address);
	      } catch (e) {
	        const err = new SyntaxError(`Invalid URL: ${location}`);
	        emitErrorAndClose(websocket, err);
	        return;
	      }

	      initAsClient(websocket, addr, protocols, options);
	    } else if (!websocket.emit('unexpected-response', req, res)) {
	      abortHandshake(
	        websocket,
	        req,
	        `Unexpected server response: ${res.statusCode}`
	      );
	    }
	  });

	  req.on('upgrade', (res, socket, head) => {
	    websocket.emit('upgrade', res);

	    //
	    // The user may have closed the connection from a listener of the
	    // `'upgrade'` event.
	    //
	    if (websocket.readyState !== WebSocket.CONNECTING) return;

	    req = websocket._req = null;

	    const upgrade = res.headers.upgrade;

	    if (upgrade === undefined || upgrade.toLowerCase() !== 'websocket') {
	      abortHandshake(websocket, socket, 'Invalid Upgrade header');
	      return;
	    }

	    const digest = createHash('sha1')
	      .update(key + GUID)
	      .digest('base64');

	    if (res.headers['sec-websocket-accept'] !== digest) {
	      abortHandshake(websocket, socket, 'Invalid Sec-WebSocket-Accept header');
	      return;
	    }

	    const serverProt = res.headers['sec-websocket-protocol'];
	    let protError;

	    if (serverProt !== undefined) {
	      if (!protocolSet.size) {
	        protError = 'Server sent a subprotocol but none was requested';
	      } else if (!protocolSet.has(serverProt)) {
	        protError = 'Server sent an invalid subprotocol';
	      }
	    } else if (protocolSet.size) {
	      protError = 'Server sent no subprotocol';
	    }

	    if (protError) {
	      abortHandshake(websocket, socket, protError);
	      return;
	    }

	    if (serverProt) websocket._protocol = serverProt;

	    const secWebSocketExtensions = res.headers['sec-websocket-extensions'];

	    if (secWebSocketExtensions !== undefined) {
	      if (!perMessageDeflate) {
	        const message =
	          'Server sent a Sec-WebSocket-Extensions header but no extension ' +
	          'was requested';
	        abortHandshake(websocket, socket, message);
	        return;
	      }

	      let extensions;

	      try {
	        extensions = parse(secWebSocketExtensions);
	      } catch (err) {
	        const message = 'Invalid Sec-WebSocket-Extensions header';
	        abortHandshake(websocket, socket, message);
	        return;
	      }

	      const extensionNames = Object.keys(extensions);

	      if (
	        extensionNames.length !== 1 ||
	        extensionNames[0] !== PerMessageDeflate.extensionName
	      ) {
	        const message = 'Server indicated an extension that was not requested';
	        abortHandshake(websocket, socket, message);
	        return;
	      }

	      try {
	        perMessageDeflate.accept(extensions[PerMessageDeflate.extensionName]);
	      } catch (err) {
	        const message = 'Invalid Sec-WebSocket-Extensions header';
	        abortHandshake(websocket, socket, message);
	        return;
	      }

	      websocket._extensions[PerMessageDeflate.extensionName] =
	        perMessageDeflate;
	    }

	    websocket.setSocket(socket, head, {
	      allowSynchronousEvents: opts.allowSynchronousEvents,
	      generateMask: opts.generateMask,
	      maxPayload: opts.maxPayload,
	      skipUTF8Validation: opts.skipUTF8Validation
	    });
	  });

	  if (opts.finishRequest) {
	    opts.finishRequest(req, websocket);
	  } else {
	    req.end();
	  }
	}

	/**
	 * Emit the `'error'` and `'close'` events.
	 *
	 * @param {WebSocket} websocket The WebSocket instance
	 * @param {Error} The error to emit
	 * @private
	 */
	function emitErrorAndClose(websocket, err) {
	  websocket._readyState = WebSocket.CLOSING;
	  //
	  // The following assignment is practically useless and is done only for
	  // consistency.
	  //
	  websocket._errorEmitted = true;
	  websocket.emit('error', err);
	  websocket.emitClose();
	}

	/**
	 * Create a `net.Socket` and initiate a connection.
	 *
	 * @param {Object} options Connection options
	 * @return {net.Socket} The newly created socket used to start the connection
	 * @private
	 */
	function netConnect(options) {
	  options.path = options.socketPath;
	  return net.connect(options);
	}

	/**
	 * Create a `tls.TLSSocket` and initiate a connection.
	 *
	 * @param {Object} options Connection options
	 * @return {tls.TLSSocket} The newly created socket used to start the connection
	 * @private
	 */
	function tlsConnect(options) {
	  options.path = undefined;

	  if (!options.servername && options.servername !== '') {
	    options.servername = net.isIP(options.host) ? '' : options.host;
	  }

	  return tls.connect(options);
	}

	/**
	 * Abort the handshake and emit an error.
	 *
	 * @param {WebSocket} websocket The WebSocket instance
	 * @param {(http.ClientRequest|net.Socket|tls.Socket)} stream The request to
	 *     abort or the socket to destroy
	 * @param {String} message The error message
	 * @private
	 */
	function abortHandshake(websocket, stream, message) {
	  websocket._readyState = WebSocket.CLOSING;

	  const err = new Error(message);
	  Error.captureStackTrace(err, abortHandshake);

	  if (stream.setHeader) {
	    stream[kAborted] = true;
	    stream.abort();

	    if (stream.socket && !stream.socket.destroyed) {
	      //
	      // On Node.js >= 14.3.0 `request.abort()` does not destroy the socket if
	      // called after the request completed. See
	      // https://github.com/websockets/ws/issues/1869.
	      //
	      stream.socket.destroy();
	    }

	    process.nextTick(emitErrorAndClose, websocket, err);
	  } else {
	    stream.destroy(err);
	    stream.once('error', websocket.emit.bind(websocket, 'error'));
	    stream.once('close', websocket.emitClose.bind(websocket));
	  }
	}

	/**
	 * Handle cases where the `ping()`, `pong()`, or `send()` methods are called
	 * when the `readyState` attribute is `CLOSING` or `CLOSED`.
	 *
	 * @param {WebSocket} websocket The WebSocket instance
	 * @param {*} [data] The data to send
	 * @param {Function} [cb] Callback
	 * @private
	 */
	function sendAfterClose(websocket, data, cb) {
	  if (data) {
	    const length = isBlob(data) ? data.size : toBuffer(data).length;

	    //
	    // The `_bufferedAmount` property is used only when the peer is a client and
	    // the opening handshake fails. Under these circumstances, in fact, the
	    // `setSocket()` method is not called, so the `_socket` and `_sender`
	    // properties are set to `null`.
	    //
	    if (websocket._socket) websocket._sender._bufferedBytes += length;
	    else websocket._bufferedAmount += length;
	  }

	  if (cb) {
	    const err = new Error(
	      `WebSocket is not open: readyState ${websocket.readyState} ` +
	        `(${readyStates[websocket.readyState]})`
	    );
	    process.nextTick(cb, err);
	  }
	}

	/**
	 * The listener of the `Receiver` `'conclude'` event.
	 *
	 * @param {Number} code The status code
	 * @param {Buffer} reason The reason for closing
	 * @private
	 */
	function receiverOnConclude(code, reason) {
	  const websocket = this[kWebSocket];

	  websocket._closeFrameReceived = true;
	  websocket._closeMessage = reason;
	  websocket._closeCode = code;

	  if (websocket._socket[kWebSocket] === undefined) return;

	  websocket._socket.removeListener('data', socketOnData);
	  process.nextTick(resume, websocket._socket);

	  if (code === 1005) websocket.close();
	  else websocket.close(code, reason);
	}

	/**
	 * The listener of the `Receiver` `'drain'` event.
	 *
	 * @private
	 */
	function receiverOnDrain() {
	  const websocket = this[kWebSocket];

	  if (!websocket.isPaused) websocket._socket.resume();
	}

	/**
	 * The listener of the `Receiver` `'error'` event.
	 *
	 * @param {(RangeError|Error)} err The emitted error
	 * @private
	 */
	function receiverOnError(err) {
	  const websocket = this[kWebSocket];

	  if (websocket._socket[kWebSocket] !== undefined) {
	    websocket._socket.removeListener('data', socketOnData);

	    //
	    // On Node.js < 14.0.0 the `'error'` event is emitted synchronously. See
	    // https://github.com/websockets/ws/issues/1940.
	    //
	    process.nextTick(resume, websocket._socket);

	    websocket.close(err[kStatusCode]);
	  }

	  if (!websocket._errorEmitted) {
	    websocket._errorEmitted = true;
	    websocket.emit('error', err);
	  }
	}

	/**
	 * The listener of the `Receiver` `'finish'` event.
	 *
	 * @private
	 */
	function receiverOnFinish() {
	  this[kWebSocket].emitClose();
	}

	/**
	 * The listener of the `Receiver` `'message'` event.
	 *
	 * @param {Buffer|ArrayBuffer|Buffer[])} data The message
	 * @param {Boolean} isBinary Specifies whether the message is binary or not
	 * @private
	 */
	function receiverOnMessage(data, isBinary) {
	  this[kWebSocket].emit('message', data, isBinary);
	}

	/**
	 * The listener of the `Receiver` `'ping'` event.
	 *
	 * @param {Buffer} data The data included in the ping frame
	 * @private
	 */
	function receiverOnPing(data) {
	  const websocket = this[kWebSocket];

	  if (websocket._autoPong) websocket.pong(data, !this._isServer, NOOP);
	  websocket.emit('ping', data);
	}

	/**
	 * The listener of the `Receiver` `'pong'` event.
	 *
	 * @param {Buffer} data The data included in the pong frame
	 * @private
	 */
	function receiverOnPong(data) {
	  this[kWebSocket].emit('pong', data);
	}

	/**
	 * Resume a readable stream
	 *
	 * @param {Readable} stream The readable stream
	 * @private
	 */
	function resume(stream) {
	  stream.resume();
	}

	/**
	 * The `Sender` error event handler.
	 *
	 * @param {Error} The error
	 * @private
	 */
	function senderOnError(err) {
	  const websocket = this[kWebSocket];

	  if (websocket.readyState === WebSocket.CLOSED) return;
	  if (websocket.readyState === WebSocket.OPEN) {
	    websocket._readyState = WebSocket.CLOSING;
	    setCloseTimer(websocket);
	  }

	  //
	  // `socket.end()` is used instead of `socket.destroy()` to allow the other
	  // peer to finish sending queued data. There is no need to set a timer here
	  // because `CLOSING` means that it is already set or not needed.
	  //
	  this._socket.end();

	  if (!websocket._errorEmitted) {
	    websocket._errorEmitted = true;
	    websocket.emit('error', err);
	  }
	}

	/**
	 * Set a timer to destroy the underlying raw socket of a WebSocket.
	 *
	 * @param {WebSocket} websocket The WebSocket instance
	 * @private
	 */
	function setCloseTimer(websocket) {
	  websocket._closeTimer = setTimeout(
	    websocket._socket.destroy.bind(websocket._socket),
	    websocket._closeTimeout
	  );
	}

	/**
	 * The listener of the socket `'close'` event.
	 *
	 * @private
	 */
	function socketOnClose() {
	  const websocket = this[kWebSocket];

	  this.removeListener('close', socketOnClose);
	  this.removeListener('data', socketOnData);
	  this.removeListener('end', socketOnEnd);

	  websocket._readyState = WebSocket.CLOSING;

	  //
	  // The close frame might not have been received or the `'end'` event emitted,
	  // for example, if the socket was destroyed due to an error. Ensure that the
	  // `receiver` stream is closed after writing any remaining buffered data to
	  // it. If the readable side of the socket is in flowing mode then there is no
	  // buffered data as everything has been already written. If instead, the
	  // socket is paused, any possible buffered data will be read as a single
	  // chunk.
	  //
	  if (
	    !this._readableState.endEmitted &&
	    !websocket._closeFrameReceived &&
	    !websocket._receiver._writableState.errorEmitted &&
	    this._readableState.length !== 0
	  ) {
	    const chunk = this.read(this._readableState.length);

	    websocket._receiver.write(chunk);
	  }

	  websocket._receiver.end();

	  this[kWebSocket] = undefined;

	  clearTimeout(websocket._closeTimer);

	  if (
	    websocket._receiver._writableState.finished ||
	    websocket._receiver._writableState.errorEmitted
	  ) {
	    websocket.emitClose();
	  } else {
	    websocket._receiver.on('error', receiverOnFinish);
	    websocket._receiver.on('finish', receiverOnFinish);
	  }
	}

	/**
	 * The listener of the socket `'data'` event.
	 *
	 * @param {Buffer} chunk A chunk of data
	 * @private
	 */
	function socketOnData(chunk) {
	  if (!this[kWebSocket]._receiver.write(chunk)) {
	    this.pause();
	  }
	}

	/**
	 * The listener of the socket `'end'` event.
	 *
	 * @private
	 */
	function socketOnEnd() {
	  const websocket = this[kWebSocket];

	  websocket._readyState = WebSocket.CLOSING;
	  websocket._receiver.end();
	  this.end();
	}

	/**
	 * The listener of the socket `'error'` event.
	 *
	 * @private
	 */
	function socketOnError() {
	  const websocket = this[kWebSocket];

	  this.removeListener('error', socketOnError);
	  this.on('error', NOOP);

	  if (websocket) {
	    websocket._readyState = WebSocket.CLOSING;
	    this.destroy();
	  }
	}
	return websocket;
}

/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "^WebSocket$" }] */

var stream;
var hasRequiredStream;

function requireStream () {
	if (hasRequiredStream) return stream;
	hasRequiredStream = 1;

	requireWebsocket();
	const { Duplex } = require$$0$2;

	/**
	 * Emits the `'close'` event on a stream.
	 *
	 * @param {Duplex} stream The stream.
	 * @private
	 */
	function emitClose(stream) {
	  stream.emit('close');
	}

	/**
	 * The listener of the `'end'` event.
	 *
	 * @private
	 */
	function duplexOnEnd() {
	  if (!this.destroyed && this._writableState.finished) {
	    this.destroy();
	  }
	}

	/**
	 * The listener of the `'error'` event.
	 *
	 * @param {Error} err The error
	 * @private
	 */
	function duplexOnError(err) {
	  this.removeListener('error', duplexOnError);
	  this.destroy();
	  if (this.listenerCount('error') === 0) {
	    // Do not suppress the throwing behavior.
	    this.emit('error', err);
	  }
	}

	/**
	 * Wraps a `WebSocket` in a duplex stream.
	 *
	 * @param {WebSocket} ws The `WebSocket` to wrap
	 * @param {Object} [options] The options for the `Duplex` constructor
	 * @return {Duplex} The duplex stream
	 * @public
	 */
	function createWebSocketStream(ws, options) {
	  let terminateOnDestroy = true;

	  const duplex = new Duplex({
	    ...options,
	    autoDestroy: false,
	    emitClose: false,
	    objectMode: false,
	    writableObjectMode: false
	  });

	  ws.on('message', function message(msg, isBinary) {
	    const data =
	      !isBinary && duplex._readableState.objectMode ? msg.toString() : msg;

	    if (!duplex.push(data)) ws.pause();
	  });

	  ws.once('error', function error(err) {
	    if (duplex.destroyed) return;

	    // Prevent `ws.terminate()` from being called by `duplex._destroy()`.
	    //
	    // - If the `'error'` event is emitted before the `'open'` event, then
	    //   `ws.terminate()` is a noop as no socket is assigned.
	    // - Otherwise, the error is re-emitted by the listener of the `'error'`
	    //   event of the `Receiver` object. The listener already closes the
	    //   connection by calling `ws.close()`. This allows a close frame to be
	    //   sent to the other peer. If `ws.terminate()` is called right after this,
	    //   then the close frame might not be sent.
	    terminateOnDestroy = false;
	    duplex.destroy(err);
	  });

	  ws.once('close', function close() {
	    if (duplex.destroyed) return;

	    duplex.push(null);
	  });

	  duplex._destroy = function (err, callback) {
	    if (ws.readyState === ws.CLOSED) {
	      callback(err);
	      process.nextTick(emitClose, duplex);
	      return;
	    }

	    let called = false;

	    ws.once('error', function error(err) {
	      called = true;
	      callback(err);
	    });

	    ws.once('close', function close() {
	      if (!called) callback(err);
	      process.nextTick(emitClose, duplex);
	    });

	    if (terminateOnDestroy) ws.terminate();
	  };

	  duplex._final = function (callback) {
	    if (ws.readyState === ws.CONNECTING) {
	      ws.once('open', function open() {
	        duplex._final(callback);
	      });
	      return;
	    }

	    // If the value of the `_socket` property is `null` it means that `ws` is a
	    // client websocket and the handshake failed. In fact, when this happens, a
	    // socket is never assigned to the websocket. Wait for the `'error'` event
	    // that will be emitted by the websocket.
	    if (ws._socket === null) return;

	    if (ws._socket._writableState.finished) {
	      callback();
	      if (duplex._readableState.endEmitted) duplex.destroy();
	    } else {
	      ws._socket.once('finish', function finish() {
	        // `duplex` is not destroyed here because the `'end'` event will be
	        // emitted on `duplex` after this `'finish'` event. The EOF signaling
	        // `null` chunk is, in fact, pushed when the websocket emits `'close'`.
	        callback();
	      });
	      ws.close();
	    }
	  };

	  duplex._read = function () {
	    if (ws.isPaused) ws.resume();
	  };

	  duplex._write = function (chunk, encoding, callback) {
	    if (ws.readyState === ws.CONNECTING) {
	      ws.once('open', function open() {
	        duplex._write(chunk, encoding, callback);
	      });
	      return;
	    }

	    ws.send(chunk, callback);
	  };

	  duplex.on('end', duplexOnEnd);
	  duplex.on('error', duplexOnError);
	  return duplex;
	}

	stream = createWebSocketStream;
	return stream;
}

requireStream();

requireReceiver();

requireSender();

requireWebsocket();

var subprotocol;
var hasRequiredSubprotocol;

function requireSubprotocol () {
	if (hasRequiredSubprotocol) return subprotocol;
	hasRequiredSubprotocol = 1;

	const { tokenChars } = requireValidation();

	/**
	 * Parses the `Sec-WebSocket-Protocol` header into a set of subprotocol names.
	 *
	 * @param {String} header The field value of the header
	 * @return {Set} The subprotocol names
	 * @public
	 */
	function parse(header) {
	  const protocols = new Set();
	  let start = -1;
	  let end = -1;
	  let i = 0;

	  for (i; i < header.length; i++) {
	    const code = header.charCodeAt(i);

	    if (end === -1 && tokenChars[code] === 1) {
	      if (start === -1) start = i;
	    } else if (
	      i !== 0 &&
	      (code === 0x20 /* ' ' */ || code === 0x09) /* '\t' */
	    ) {
	      if (end === -1 && start !== -1) end = i;
	    } else if (code === 0x2c /* ',' */) {
	      if (start === -1) {
	        throw new SyntaxError(`Unexpected character at index ${i}`);
	      }

	      if (end === -1) end = i;

	      const protocol = header.slice(start, end);

	      if (protocols.has(protocol)) {
	        throw new SyntaxError(`The "${protocol}" subprotocol is duplicated`);
	      }

	      protocols.add(protocol);
	      start = end = -1;
	    } else {
	      throw new SyntaxError(`Unexpected character at index ${i}`);
	    }
	  }

	  if (start === -1 || end !== -1) {
	    throw new SyntaxError('Unexpected end of input');
	  }

	  const protocol = header.slice(start, i);

	  if (protocols.has(protocol)) {
	    throw new SyntaxError(`The "${protocol}" subprotocol is duplicated`);
	  }

	  protocols.add(protocol);
	  return protocols;
	}

	subprotocol = { parse };
	return subprotocol;
}

/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "^Duplex$", "caughtErrors": "none" }] */

var websocketServer;
var hasRequiredWebsocketServer;

function requireWebsocketServer () {
	if (hasRequiredWebsocketServer) return websocketServer;
	hasRequiredWebsocketServer = 1;

	const EventEmitter = require$$0$3;
	const http = require$$2;
	const { Duplex } = require$$0$2;
	const { createHash } = require$$1;

	const extension = requireExtension();
	const PerMessageDeflate = requirePermessageDeflate();
	const subprotocol = requireSubprotocol();
	const WebSocket = requireWebsocket();
	const { CLOSE_TIMEOUT, GUID, kWebSocket } = requireConstants();

	const keyRegex = /^[+/0-9A-Za-z]{22}==$/;

	const RUNNING = 0;
	const CLOSING = 1;
	const CLOSED = 2;

	/**
	 * Class representing a WebSocket server.
	 *
	 * @extends EventEmitter
	 */
	class WebSocketServer extends EventEmitter {
	  /**
	   * Create a `WebSocketServer` instance.
	   *
	   * @param {Object} options Configuration options
	   * @param {Boolean} [options.allowSynchronousEvents=true] Specifies whether
	   *     any of the `'message'`, `'ping'`, and `'pong'` events can be emitted
	   *     multiple times in the same tick
	   * @param {Boolean} [options.autoPong=true] Specifies whether or not to
	   *     automatically send a pong in response to a ping
	   * @param {Number} [options.backlog=511] The maximum length of the queue of
	   *     pending connections
	   * @param {Boolean} [options.clientTracking=true] Specifies whether or not to
	   *     track clients
	   * @param {Number} [options.closeTimeout=30000] Duration in milliseconds to
	   *     wait for the closing handshake to finish after `websocket.close()` is
	   *     called
	   * @param {Function} [options.handleProtocols] A hook to handle protocols
	   * @param {String} [options.host] The hostname where to bind the server
	   * @param {Number} [options.maxPayload=104857600] The maximum allowed message
	   *     size
	   * @param {Boolean} [options.noServer=false] Enable no server mode
	   * @param {String} [options.path] Accept only connections matching this path
	   * @param {(Boolean|Object)} [options.perMessageDeflate=false] Enable/disable
	   *     permessage-deflate
	   * @param {Number} [options.port] The port where to bind the server
	   * @param {(http.Server|https.Server)} [options.server] A pre-created HTTP/S
	   *     server to use
	   * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
	   *     not to skip UTF-8 validation for text and close messages
	   * @param {Function} [options.verifyClient] A hook to reject connections
	   * @param {Function} [options.WebSocket=WebSocket] Specifies the `WebSocket`
	   *     class to use. It must be the `WebSocket` class or class that extends it
	   * @param {Function} [callback] A listener for the `listening` event
	   */
	  constructor(options, callback) {
	    super();

	    options = {
	      allowSynchronousEvents: true,
	      autoPong: true,
	      maxPayload: 100 * 1024 * 1024,
	      skipUTF8Validation: false,
	      perMessageDeflate: false,
	      handleProtocols: null,
	      clientTracking: true,
	      closeTimeout: CLOSE_TIMEOUT,
	      verifyClient: null,
	      noServer: false,
	      backlog: null, // use default (511 as implemented in net.js)
	      server: null,
	      host: null,
	      path: null,
	      port: null,
	      WebSocket,
	      ...options
	    };

	    if (
	      (options.port == null && !options.server && !options.noServer) ||
	      (options.port != null && (options.server || options.noServer)) ||
	      (options.server && options.noServer)
	    ) {
	      throw new TypeError(
	        'One and only one of the "port", "server", or "noServer" options ' +
	          'must be specified'
	      );
	    }

	    if (options.port != null) {
	      this._server = http.createServer((req, res) => {
	        const body = http.STATUS_CODES[426];

	        res.writeHead(426, {
	          'Content-Length': body.length,
	          'Content-Type': 'text/plain'
	        });
	        res.end(body);
	      });
	      this._server.listen(
	        options.port,
	        options.host,
	        options.backlog,
	        callback
	      );
	    } else if (options.server) {
	      this._server = options.server;
	    }

	    if (this._server) {
	      const emitConnection = this.emit.bind(this, 'connection');

	      this._removeListeners = addListeners(this._server, {
	        listening: this.emit.bind(this, 'listening'),
	        error: this.emit.bind(this, 'error'),
	        upgrade: (req, socket, head) => {
	          this.handleUpgrade(req, socket, head, emitConnection);
	        }
	      });
	    }

	    if (options.perMessageDeflate === true) options.perMessageDeflate = {};
	    if (options.clientTracking) {
	      this.clients = new Set();
	      this._shouldEmitClose = false;
	    }

	    this.options = options;
	    this._state = RUNNING;
	  }

	  /**
	   * Returns the bound address, the address family name, and port of the server
	   * as reported by the operating system if listening on an IP socket.
	   * If the server is listening on a pipe or UNIX domain socket, the name is
	   * returned as a string.
	   *
	   * @return {(Object|String|null)} The address of the server
	   * @public
	   */
	  address() {
	    if (this.options.noServer) {
	      throw new Error('The server is operating in "noServer" mode');
	    }

	    if (!this._server) return null;
	    return this._server.address();
	  }

	  /**
	   * Stop the server from accepting new connections and emit the `'close'` event
	   * when all existing connections are closed.
	   *
	   * @param {Function} [cb] A one-time listener for the `'close'` event
	   * @public
	   */
	  close(cb) {
	    if (this._state === CLOSED) {
	      if (cb) {
	        this.once('close', () => {
	          cb(new Error('The server is not running'));
	        });
	      }

	      process.nextTick(emitClose, this);
	      return;
	    }

	    if (cb) this.once('close', cb);

	    if (this._state === CLOSING) return;
	    this._state = CLOSING;

	    if (this.options.noServer || this.options.server) {
	      if (this._server) {
	        this._removeListeners();
	        this._removeListeners = this._server = null;
	      }

	      if (this.clients) {
	        if (!this.clients.size) {
	          process.nextTick(emitClose, this);
	        } else {
	          this._shouldEmitClose = true;
	        }
	      } else {
	        process.nextTick(emitClose, this);
	      }
	    } else {
	      const server = this._server;

	      this._removeListeners();
	      this._removeListeners = this._server = null;

	      //
	      // The HTTP/S server was created internally. Close it, and rely on its
	      // `'close'` event.
	      //
	      server.close(() => {
	        emitClose(this);
	      });
	    }
	  }

	  /**
	   * See if a given request should be handled by this server instance.
	   *
	   * @param {http.IncomingMessage} req Request object to inspect
	   * @return {Boolean} `true` if the request is valid, else `false`
	   * @public
	   */
	  shouldHandle(req) {
	    if (this.options.path) {
	      const index = req.url.indexOf('?');
	      const pathname = index !== -1 ? req.url.slice(0, index) : req.url;

	      if (pathname !== this.options.path) return false;
	    }

	    return true;
	  }

	  /**
	   * Handle a HTTP Upgrade request.
	   *
	   * @param {http.IncomingMessage} req The request object
	   * @param {Duplex} socket The network socket between the server and client
	   * @param {Buffer} head The first packet of the upgraded stream
	   * @param {Function} cb Callback
	   * @public
	   */
	  handleUpgrade(req, socket, head, cb) {
	    socket.on('error', socketOnError);

	    const key = req.headers['sec-websocket-key'];
	    const upgrade = req.headers.upgrade;
	    const version = +req.headers['sec-websocket-version'];

	    if (req.method !== 'GET') {
	      const message = 'Invalid HTTP method';
	      abortHandshakeOrEmitwsClientError(this, req, socket, 405, message);
	      return;
	    }

	    if (upgrade === undefined || upgrade.toLowerCase() !== 'websocket') {
	      const message = 'Invalid Upgrade header';
	      abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
	      return;
	    }

	    if (key === undefined || !keyRegex.test(key)) {
	      const message = 'Missing or invalid Sec-WebSocket-Key header';
	      abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
	      return;
	    }

	    if (version !== 13 && version !== 8) {
	      const message = 'Missing or invalid Sec-WebSocket-Version header';
	      abortHandshakeOrEmitwsClientError(this, req, socket, 400, message, {
	        'Sec-WebSocket-Version': '13, 8'
	      });
	      return;
	    }

	    if (!this.shouldHandle(req)) {
	      abortHandshake(socket, 400);
	      return;
	    }

	    const secWebSocketProtocol = req.headers['sec-websocket-protocol'];
	    let protocols = new Set();

	    if (secWebSocketProtocol !== undefined) {
	      try {
	        protocols = subprotocol.parse(secWebSocketProtocol);
	      } catch (err) {
	        const message = 'Invalid Sec-WebSocket-Protocol header';
	        abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
	        return;
	      }
	    }

	    const secWebSocketExtensions = req.headers['sec-websocket-extensions'];
	    const extensions = {};

	    if (
	      this.options.perMessageDeflate &&
	      secWebSocketExtensions !== undefined
	    ) {
	      const perMessageDeflate = new PerMessageDeflate(
	        this.options.perMessageDeflate,
	        true,
	        this.options.maxPayload
	      );

	      try {
	        const offers = extension.parse(secWebSocketExtensions);

	        if (offers[PerMessageDeflate.extensionName]) {
	          perMessageDeflate.accept(offers[PerMessageDeflate.extensionName]);
	          extensions[PerMessageDeflate.extensionName] = perMessageDeflate;
	        }
	      } catch (err) {
	        const message =
	          'Invalid or unacceptable Sec-WebSocket-Extensions header';
	        abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
	        return;
	      }
	    }

	    //
	    // Optionally call external client verification handler.
	    //
	    if (this.options.verifyClient) {
	      const info = {
	        origin:
	          req.headers[`${version === 8 ? 'sec-websocket-origin' : 'origin'}`],
	        secure: !!(req.socket.authorized || req.socket.encrypted),
	        req
	      };

	      if (this.options.verifyClient.length === 2) {
	        this.options.verifyClient(info, (verified, code, message, headers) => {
	          if (!verified) {
	            return abortHandshake(socket, code || 401, message, headers);
	          }

	          this.completeUpgrade(
	            extensions,
	            key,
	            protocols,
	            req,
	            socket,
	            head,
	            cb
	          );
	        });
	        return;
	      }

	      if (!this.options.verifyClient(info)) return abortHandshake(socket, 401);
	    }

	    this.completeUpgrade(extensions, key, protocols, req, socket, head, cb);
	  }

	  /**
	   * Upgrade the connection to WebSocket.
	   *
	   * @param {Object} extensions The accepted extensions
	   * @param {String} key The value of the `Sec-WebSocket-Key` header
	   * @param {Set} protocols The subprotocols
	   * @param {http.IncomingMessage} req The request object
	   * @param {Duplex} socket The network socket between the server and client
	   * @param {Buffer} head The first packet of the upgraded stream
	   * @param {Function} cb Callback
	   * @throws {Error} If called more than once with the same socket
	   * @private
	   */
	  completeUpgrade(extensions, key, protocols, req, socket, head, cb) {
	    //
	    // Destroy the socket if the client has already sent a FIN packet.
	    //
	    if (!socket.readable || !socket.writable) return socket.destroy();

	    if (socket[kWebSocket]) {
	      throw new Error(
	        'server.handleUpgrade() was called more than once with the same ' +
	          'socket, possibly due to a misconfiguration'
	      );
	    }

	    if (this._state > RUNNING) return abortHandshake(socket, 503);

	    const digest = createHash('sha1')
	      .update(key + GUID)
	      .digest('base64');

	    const headers = [
	      'HTTP/1.1 101 Switching Protocols',
	      'Upgrade: websocket',
	      'Connection: Upgrade',
	      `Sec-WebSocket-Accept: ${digest}`
	    ];

	    const ws = new this.options.WebSocket(null, undefined, this.options);

	    if (protocols.size) {
	      //
	      // Optionally call external protocol selection handler.
	      //
	      const protocol = this.options.handleProtocols
	        ? this.options.handleProtocols(protocols, req)
	        : protocols.values().next().value;

	      if (protocol) {
	        headers.push(`Sec-WebSocket-Protocol: ${protocol}`);
	        ws._protocol = protocol;
	      }
	    }

	    if (extensions[PerMessageDeflate.extensionName]) {
	      const params = extensions[PerMessageDeflate.extensionName].params;
	      const value = extension.format({
	        [PerMessageDeflate.extensionName]: [params]
	      });
	      headers.push(`Sec-WebSocket-Extensions: ${value}`);
	      ws._extensions = extensions;
	    }

	    //
	    // Allow external modification/inspection of handshake headers.
	    //
	    this.emit('headers', headers, req);

	    socket.write(headers.concat('\r\n').join('\r\n'));
	    socket.removeListener('error', socketOnError);

	    ws.setSocket(socket, head, {
	      allowSynchronousEvents: this.options.allowSynchronousEvents,
	      maxPayload: this.options.maxPayload,
	      skipUTF8Validation: this.options.skipUTF8Validation
	    });

	    if (this.clients) {
	      this.clients.add(ws);
	      ws.on('close', () => {
	        this.clients.delete(ws);

	        if (this._shouldEmitClose && !this.clients.size) {
	          process.nextTick(emitClose, this);
	        }
	      });
	    }

	    cb(ws, req);
	  }
	}

	websocketServer = WebSocketServer;

	/**
	 * Add event listeners on an `EventEmitter` using a map of <event, listener>
	 * pairs.
	 *
	 * @param {EventEmitter} server The event emitter
	 * @param {Object.<String, Function>} map The listeners to add
	 * @return {Function} A function that will remove the added listeners when
	 *     called
	 * @private
	 */
	function addListeners(server, map) {
	  for (const event of Object.keys(map)) server.on(event, map[event]);

	  return function removeListeners() {
	    for (const event of Object.keys(map)) {
	      server.removeListener(event, map[event]);
	    }
	  };
	}

	/**
	 * Emit a `'close'` event on an `EventEmitter`.
	 *
	 * @param {EventEmitter} server The event emitter
	 * @private
	 */
	function emitClose(server) {
	  server._state = CLOSED;
	  server.emit('close');
	}

	/**
	 * Handle socket errors.
	 *
	 * @private
	 */
	function socketOnError() {
	  this.destroy();
	}

	/**
	 * Close the connection when preconditions are not fulfilled.
	 *
	 * @param {Duplex} socket The socket of the upgrade request
	 * @param {Number} code The HTTP response status code
	 * @param {String} [message] The HTTP response body
	 * @param {Object} [headers] Additional HTTP response headers
	 * @private
	 */
	function abortHandshake(socket, code, message, headers) {
	  //
	  // The socket is writable unless the user destroyed or ended it before calling
	  // `server.handleUpgrade()` or in the `verifyClient` function, which is a user
	  // error. Handling this does not make much sense as the worst that can happen
	  // is that some of the data written by the user might be discarded due to the
	  // call to `socket.end()` below, which triggers an `'error'` event that in
	  // turn causes the socket to be destroyed.
	  //
	  message = message || http.STATUS_CODES[code];
	  headers = {
	    Connection: 'close',
	    'Content-Type': 'text/html',
	    'Content-Length': Buffer.byteLength(message),
	    ...headers
	  };

	  socket.once('finish', socket.destroy);

	  socket.end(
	    `HTTP/1.1 ${code} ${http.STATUS_CODES[code]}\r\n` +
	      Object.keys(headers)
	        .map((h) => `${h}: ${headers[h]}`)
	        .join('\r\n') +
	      '\r\n\r\n' +
	      message
	  );
	}

	/**
	 * Emit a `'wsClientError'` event on a `WebSocketServer` if there is at least
	 * one listener for it, otherwise call `abortHandshake()`.
	 *
	 * @param {WebSocketServer} server The WebSocket server
	 * @param {http.IncomingMessage} req The request object
	 * @param {Duplex} socket The socket of the upgrade request
	 * @param {Number} code The HTTP response status code
	 * @param {String} message The HTTP response body
	 * @param {Object} [headers] The HTTP response headers
	 * @private
	 */
	function abortHandshakeOrEmitwsClientError(
	  server,
	  req,
	  socket,
	  code,
	  message,
	  headers
	) {
	  if (server.listenerCount('wsClientError')) {
	    const err = new Error(message);
	    Error.captureStackTrace(err, abortHandshakeOrEmitwsClientError);

	    server.emit('wsClientError', err, socket, req);
	  } else {
	    abortHandshake(socket, code, message, headers);
	  }
	}
	return websocketServer;
}

var websocketServerExports = requireWebsocketServer();
var WebSocketServer = /*@__PURE__*/getDefaultExportFromCjs(websocketServerExports);

async function createViteServer(inlineConfig) {
	// Vite prints an error (https://github.com/vitejs/vite/issues/14328)
	// But Vitest works correctly either way
	const error = console.error;
	console.error = (...args) => {
		if (typeof args[0] === "string" && args[0].includes("WebSocket server error:")) return;
		error(...args);
	};
	const server = await createServer(inlineConfig);
	console.error = error;
	return server;
}
function isFileServingAllowed(configOrUrl, urlOrServer) {
	const config = typeof urlOrServer === "string" ? configOrUrl : urlOrServer.config;
	const url = typeof urlOrServer === "string" ? urlOrServer : configOrUrl;
	if (!config.server.fs.strict) return true;
	return isFileLoadingAllowed(config, fsPathFromUrl(url));
}
const FS_PREFIX = "/@fs/";
const VOLUME_RE = /^[A-Z]:/i;
function fsPathFromId(id) {
	const fsPath = normalizePath(id.startsWith(FS_PREFIX) ? id.slice(5) : id);
	return fsPath[0] === "/" || VOLUME_RE.test(fsPath) ? fsPath : `/${fsPath}`;
}
function fsPathFromUrl(url) {
	return fsPathFromId(cleanUrl(url));
}

function getTestFileEnvironment(project, testFile, browser = false) {
	if (browser) return project.browser?.vite.environments.client;
	else for (const name in project.vite.environments) {
		const env = project.vite.environments[name];
		if (env.moduleGraph.getModuleById(testFile)) return env;
	}
}

async function getModuleGraph(ctx, projectName, testFilePath, browser = false) {
	const graph = {};
	const externalized = /* @__PURE__ */ new Set();
	const inlined = /* @__PURE__ */ new Set();
	const project = ctx.getProjectByName(projectName);
	const environment = project.config.experimental.viteModuleRunner === false ? project.vite.environments.__vitest__ : getTestFileEnvironment(project, testFilePath, browser);
	if (!environment) throw new Error(`Cannot find environment for ${testFilePath}`);
	const seen = /* @__PURE__ */ new Map();
	function get(mod) {
		if (!mod || !mod.id) return;
		if (mod.id === "\0vitest/browser" || mod.id.includes("plugin-vue:export-helper")) return;
		if (seen.has(mod)) return seen.get(mod);
		const id = clearId(mod.id);
		seen.set(mod, id);
		if (id.startsWith("__vite-browser-external:")) {
			const external = id.slice(24);
			externalized.add(external);
			return external;
		}
		const external = project._resolver.wasExternalized(id);
		if (typeof external === "string") {
			externalized.add(external);
			return external;
		}
		if (browser && mod.file?.includes(project.browser.vite.config.cacheDir)) {
			externalized.add(mod.id);
			return id;
		}
		inlined.add(id);
		graph[id] = Array.from(mod.importedModules).filter((i) => i.id && !i.id.includes("/vitest/dist/")).map((m) => get(m)).filter(Boolean);
		return id;
	}
	get(environment.moduleGraph.getModuleById(testFilePath));
	project.config.setupFiles.forEach((setupFile) => {
		get(environment.moduleGraph.getModuleById(setupFile));
	});
	return {
		graph,
		externalized: Array.from(externalized),
		inlined: Array.from(inlined)
	};
}
function clearId(id) {
	return id?.replace(/\?v=\w+$/, "") || "";
}

// Serialization support utils.
function cloneByOwnProperties(value) {
	// Clones the value's properties into a new Object. The simpler approach of
	// Object.assign() won't work in the case that properties are not enumerable.
	return Object.getOwnPropertyNames(value).reduce((clone, prop) => {
		clone[prop] = value[prop];
		return clone;
	}, {});
}
/**
* Replacer function for serialization methods such as JS.stringify() or
* flatted.stringify().
*/
function stringifyReplace(key, value) {
	if (value instanceof Error) {
		const cloned = cloneByOwnProperties(value);
		return {
			name: value.name,
			message: value.message,
			stack: value.stack,
			...cloned
		};
	} else return value;
}

function isValidApiRequest(config, req) {
	const url = new URL(req.url ?? "", "http://localhost");
	// validate token. token is injected in ui/tester/orchestrator html, which is cross origin protected.
	try {
		const token = url.searchParams.get("token");
		if (token && crypto.timingSafeEqual(Buffer.from(token), Buffer.from(config.api.token))) return true;
	} 
	// an error is thrown when the length is incorrect
catch {}
	return false;
}

function setup(ctx, _server) {
	const wss = new WebSocketServer({ noServer: true });
	const clients = /* @__PURE__ */ new Map();
	(_server || ctx.vite).httpServer?.on("upgrade", (request, socket, head) => {
		if (!request.url) return;
		const { pathname } = new URL(request.url, "http://localhost");
		if (pathname !== API_PATH) return;
		if (!isValidApiRequest(ctx.config, request)) {
			socket.destroy();
			return;
		}
		wss.handleUpgrade(request, socket, head, (ws) => {
			wss.emit("connection", ws, request);
			setupClient(ws);
		});
	});
	function setupClient(ws) {
		const rpc = createBirpc({
			getFiles() {
				return ctx.state.getFiles();
			},
			getPaths() {
				return ctx.state.getPaths();
			},
			async readTestFile(id) {
				if (!ctx.state.filesMap.has(id) || !existsSync(id)) return null;
				return promises.readFile(id, "utf-8");
			},
			async saveTestFile(id, content) {
				if (!ctx.state.filesMap.has(id) || !existsSync(id)) throw new Error(`Test file "${id}" was not registered, so it cannot be updated using the API.`);
				// silently ignore write attempts if not allowed
				if (!ctx.config.api.allowWrite) return;
				return promises.writeFile(id, content, "utf-8");
			},
			async rerun(files, resetTestNamePattern) {
				// silently ignore exec attempts if not allowed
				if (!ctx.config.api.allowExec) return;
				await ctx.rerunFiles(files, void 0, true, resetTestNamePattern);
			},
			async rerunTask(id) {
				// silently ignore exec attempts if not allowed
				if (!ctx.config.api.allowExec) return;
				await ctx.rerunTask(id);
			},
			getConfig() {
				return ctx.serializedRootConfig;
			},
			getResolvedProjectLabels() {
				return ctx.projects.map((p) => ({
					name: p.name,
					color: p.color
				}));
			},
			async getExternalResult(moduleId, testFileTaskId) {
				const testModule = ctx.state.getReportedEntityById(testFileTaskId);
				if (!testModule) return;
				if (!isFileServingAllowed(testModule.project.vite.config, moduleId)) return;
				const result = {};
				try {
					result.source = await promises.readFile(moduleId, "utf-8");
				} catch {}
				return result;
			},
			async getTransformResult(projectName, moduleId, testFileTaskId, browser = false) {
				const project = ctx.getProjectByName(projectName);
				const testModule = ctx.state.getReportedEntityById(testFileTaskId);
				if (!testModule || !isFileServingAllowed(project.vite.config, moduleId)) return;
				const environment = getTestFileEnvironment(project, testModule.moduleId, browser);
				const moduleNode = environment?.moduleGraph.getModuleById(moduleId);
				if (!environment || !moduleNode?.transformResult) return;
				const result = moduleNode.transformResult;
				try {
					result.source = result.source || (moduleNode.file ? await promises.readFile(moduleNode.file, "utf-8") : void 0);
				} catch {}
				// TODO: store this in HTML reporter separately
				const transformDuration = ctx.state.metadata[projectName]?.duration[moduleNode.url]?.[0];
				if (transformDuration != null) result.transformTime = transformDuration;
				try {
					const diagnostic = await ctx.experimental_getSourceModuleDiagnostic(moduleId, testModule);
					result.modules = diagnostic.modules;
					result.untrackedModules = diagnostic.untrackedModules;
				} catch {}
				return result;
			},
			async getModuleGraph(project, id, browser) {
				return getModuleGraph(ctx, project, id, browser);
			},
			async updateSnapshot(file) {
				// silently ignore exec/write attempts if not allowed
				// this function both executes the code and write snapshots
				if (!ctx.config.api.allowExec || !ctx.config.api.allowWrite) return;
				if (!file) await ctx.updateSnapshot();
				else await ctx.updateSnapshot([file.filepath]);
			},
			getUnhandledErrors() {
				return ctx.state.getUnhandledErrors();
			},
			async getTestFiles() {
				return (await ctx.globTestSpecifications()).map((spec) => [
					{
						name: spec.project.config.name,
						root: spec.project.config.root
					},
					spec.moduleId,
					{ pool: spec.pool }
				]);
			}
		}, {
			post: (msg) => ws.send(msg),
			on: (fn) => ws.on("message", fn),
			eventNames: [
				"onUserConsoleLog",
				"onFinished",
				"onFinishedReportCoverage",
				"onCollected",
				"onTaskUpdate"
			],
			serialize: (data) => stringify(data, stringifyReplace),
			deserialize: parse,
			timeout: -1
		});
		clients.set(ws, rpc);
		ws.on("close", () => {
			clients.delete(ws);
			rpc.$close(/* @__PURE__ */ new Error("[vitest-api]: Pending methods while closing rpc"));
		});
	}
	ctx.reporters.push(new WebSocketReporter(ctx, wss, clients));
}
class WebSocketReporter {
	start = 0;
	end = 0;
	constructor(ctx, wss, clients) {
		this.ctx = ctx;
		this.wss = wss;
		this.clients = clients;
	}
	onTestModuleCollected(testModule) {
		if (this.clients.size === 0) return;
		this.clients.forEach((client) => {
			client.onCollected?.([testModule.task])?.catch?.(noop);
		});
	}
	onTestRunStart(specifications) {
		if (this.clients.size === 0) return;
		this.start = performance$1.now();
		const serializedSpecs = specifications.map((spec) => spec.toJSON());
		this.clients.forEach((client) => {
			client.onSpecsCollected?.(serializedSpecs)?.catch?.(noop);
		});
	}
	async onTestCaseAnnotate(testCase, annotation) {
		if (this.clients.size === 0) return;
		this.clients.forEach((client) => {
			client.onTestAnnotate?.(testCase.id, annotation)?.catch?.(noop);
		});
	}
	async onTestCaseArtifactRecord(testCase, artifact) {
		if (this.clients.size === 0) return;
		this.clients.forEach((client) => {
			client.onTestArtifactRecord?.(testCase.id, artifact)?.catch?.(noop);
		});
	}
	async onTaskUpdate(packs, events) {
		if (this.clients.size === 0) return;
		this.clients.forEach((client) => {
			client.onTaskUpdate?.(packs, events)?.catch?.(noop);
		});
	}
	sum(items, cb) {
		return items.reduce((total, next) => {
			return total + Math.max(cb(next) || 0, 0);
		}, 0);
	}
	onTestRunEnd(testModules, unhandledErrors) {
		if (!this.clients.size) return;
		const files = testModules.map((testModule) => testModule.task);
		const errors = [...unhandledErrors];
		this.end = performance$1.now();
		const blobs = this.ctx.state.blobs;
		// Execution time is either sum of all runs of `--merge-reports` or the current run's time
		const executionTime = blobs?.executionTimes ? this.sum(blobs.executionTimes, (time) => time) : this.end - this.start;
		this.clients.forEach((client) => {
			client.onFinished?.(files, errors, void 0, executionTime)?.catch?.(noop);
		});
	}
	onFinishedReportCoverage() {
		this.clients.forEach((client) => {
			client.onFinishedReportCoverage?.()?.catch?.(noop);
		});
	}
	onUserConsoleLog(log) {
		this.clients.forEach((client) => {
			client.onUserConsoleLog?.(log)?.catch?.(noop);
		});
	}
}

var setup$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  WebSocketReporter: WebSocketReporter,
  setup: setup
});

function serializeConfig(project) {
	const { config, globalConfig } = project;
	const viteConfig = project._vite?.config;
	const optimizer = config.deps?.optimizer || {};
	return {
		environmentOptions: config.environmentOptions,
		mode: config.mode,
		isolate: config.isolate,
		maxWorkers: config.maxWorkers,
		base: config.base,
		logHeapUsage: config.logHeapUsage,
		runner: config.runner,
		bail: config.bail,
		defines: config.defines,
		chaiConfig: config.chaiConfig,
		setupFiles: config.setupFiles,
		allowOnly: config.allowOnly,
		testTimeout: config.testTimeout,
		testNamePattern: config.testNamePattern,
		hookTimeout: config.hookTimeout,
		clearMocks: config.clearMocks,
		mockReset: config.mockReset,
		restoreMocks: config.restoreMocks,
		unstubEnvs: config.unstubEnvs,
		unstubGlobals: config.unstubGlobals,
		maxConcurrency: config.maxConcurrency,
		pool: config.pool,
		expect: config.expect,
		snapshotSerializers: config.snapshotSerializers,
		api: ((api) => {
			return {
				allowExec: api?.allowExec,
				allowWrite: api?.allowWrite
			};
		})(project.isBrowserEnabled() ? config.browser.api : config.api),
		diff: config.diff,
		retry: config.retry,
		disableConsoleIntercept: config.disableConsoleIntercept,
		root: config.root,
		name: config.name,
		color: config.color,
		globals: config.globals,
		snapshotEnvironment: config.snapshotEnvironment,
		passWithNoTests: config.passWithNoTests,
		coverage: ((coverage) => {
			return {
				reportsDirectory: coverage.reportsDirectory,
				provider: coverage.provider,
				enabled: coverage.enabled,
				customProviderModule: "customProviderModule" in coverage ? coverage.customProviderModule : void 0,
				htmlDir: coverage.htmlDir
			};
		})(config.coverage),
		fakeTimers: config.fakeTimers,
		deps: {
			web: config.deps.web || {},
			optimizer: Object.entries(optimizer).reduce((acc, [name, option]) => {
				acc[name] = { enabled: option?.enabled ?? false };
				return acc;
			}, {}),
			interopDefault: config.deps.interopDefault,
			moduleDirectories: config.deps.moduleDirectories
		},
		snapshotOptions: {
			snapshotEnvironment: void 0,
			updateSnapshot: globalConfig.snapshotOptions.updateSnapshot,
			snapshotFormat: { ...globalConfig.snapshotOptions.snapshotFormat },
			expand: config.snapshotOptions.expand ?? globalConfig.snapshotOptions.expand
		},
		sequence: {
			shuffle: globalConfig.sequence.shuffle,
			concurrent: globalConfig.sequence.concurrent,
			seed: globalConfig.sequence.seed,
			hooks: globalConfig.sequence.hooks,
			setupFiles: globalConfig.sequence.setupFiles
		},
		inspect: globalConfig.inspect,
		inspectBrk: globalConfig.inspectBrk,
		inspector: globalConfig.inspector,
		detectAsyncLeaks: globalConfig.detectAsyncLeaks,
		watch: config.watch,
		includeTaskLocation: config.includeTaskLocation ?? globalConfig.includeTaskLocation,
		env: {
			...viteConfig?.env,
			...config.env
		},
		browser: ((browser) => {
			const provider = project.browser?.provider;
			return {
				name: browser.name,
				headless: browser.headless,
				isolate: browser.isolate,
				fileParallelism: browser.fileParallelism,
				ui: browser.ui,
				detailsPanelPosition: browser.detailsPanelPosition ?? "right",
				viewport: browser.viewport,
				screenshotFailures: browser.screenshotFailures,
				locators: {
					testIdAttribute: browser.locators.testIdAttribute,
					exact: browser.locators.exact
				},
				providerOptions: provider?.name === "playwright" ? { actionTimeout: provider?.options?.actionTimeout } : {},
				trackUnhandledErrors: browser.trackUnhandledErrors ?? true,
				trace: browser.trace.mode
			};
		})(config.browser),
		standalone: config.standalone,
		printConsoleTrace: config.printConsoleTrace ?? globalConfig.printConsoleTrace,
		benchmark: config.benchmark && { includeSamples: config.benchmark.includeSamples },
		serializedDefines: config.browser.enabled ? "" : project._serializedDefines || "",
		experimental: {
			fsModuleCache: config.experimental.fsModuleCache ?? false,
			importDurations: config.experimental.importDurations,
			viteModuleRunner: config.experimental.viteModuleRunner ?? true,
			nodeLoader: config.experimental.nodeLoader ?? true,
			openTelemetry: config.experimental.openTelemetry
		},
		tags: config.tags || [],
		tagsFilter: config.tagsFilter,
		strictTags: config.strictTags ?? true,
		slowTestThreshold: config.slowTestThreshold ?? globalConfig.slowTestThreshold ?? configDefaults.slowTestThreshold,
		isAgent
	};
}

async function loadGlobalSetupFiles(runner, globalSetup) {
	const globalSetupFiles = toArray(globalSetup);
	return Promise.all(globalSetupFiles.map((file) => loadGlobalSetupFile(file, runner)));
}
async function loadGlobalSetupFile(file, runner) {
	const m = await runner.import(file);
	for (const exp of [
		"default",
		"setup",
		"teardown"
	]) if (m[exp] != null && typeof m[exp] !== "function") throw new Error(`invalid export in globalSetup file ${file}: ${exp} must be a function`);
	if (m.default) return {
		file,
		setup: m.default
	};
	else if (m.setup || m.teardown) return {
		file,
		setup: m.setup,
		teardown: m.teardown
	};
	else throw new Error(`invalid globalSetup file ${file}. Must export setup, teardown or have a default export`);
}

function CoverageTransform(ctx) {
	return {
		name: "vitest:coverage-transform",
		enforce: "post",
		transform(srcCode, id) {
			return ctx.coverageProvider?.onFileTransform?.(srcCode, id, this);
		}
	};
}

var jsTokens_1;
var hasRequiredJsTokens;

function requireJsTokens () {
	if (hasRequiredJsTokens) return jsTokens_1;
	hasRequiredJsTokens = 1;
	// Copyright 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023 Simon Lydell
	// License: MIT.
	var HashbangComment, Identifier, JSXIdentifier, JSXPunctuator, JSXString, JSXText, KeywordsWithExpressionAfter, KeywordsWithNoLineTerminatorAfter, LineTerminatorSequence, MultiLineComment, Newline, NumericLiteral, Punctuator, RegularExpressionLiteral, SingleLineComment, StringLiteral, Template, TokensNotPrecedingObjectLiteral, TokensPrecedingExpression, WhiteSpace;
	RegularExpressionLiteral = /\/(?![*\/])(?:\[(?:[^\]\\\n\r\u2028\u2029]+|\\.)*\]?|[^\/[\\\n\r\u2028\u2029]+|\\.)*(\/[$_\u200C\u200D\p{ID_Continue}]*|\\)?/yu;
	Punctuator = /--|\+\+|=>|\.{3}|\??\.(?!\d)|(?:&&|\|\||\?\?|[+\-%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2}|\/(?![\/*]))=?|[?~,:;[\](){}]/y;
	Identifier = /(\x23?)(?=[$_\p{ID_Start}\\])(?:[$_\u200C\u200D\p{ID_Continue}]+|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+/yu;
	StringLiteral = /(['"])(?:[^'"\\\n\r]+|(?!\1)['"]|\\(?:\r\n|[^]))*(\1)?/y;
	NumericLiteral = /(?:0[xX][\da-fA-F](?:_?[\da-fA-F])*|0[oO][0-7](?:_?[0-7])*|0[bB][01](?:_?[01])*)n?|0n|[1-9](?:_?\d)*n|(?:(?:0(?!\d)|0\d*[89]\d*|[1-9](?:_?\d)*)(?:\.(?:\d(?:_?\d)*)?)?|\.\d(?:_?\d)*)(?:[eE][+-]?\d(?:_?\d)*)?|0[0-7]+/y;
	Template = /[`}](?:[^`\\$]+|\\[^]|\$(?!\{))*(`|\$\{)?/y;
	WhiteSpace = /[\t\v\f\ufeff\p{Zs}]+/yu;
	LineTerminatorSequence = /\r?\n|[\r\u2028\u2029]/y;
	MultiLineComment = /\/\*(?:[^*]+|\*(?!\/))*(\*\/)?/y;
	SingleLineComment = /\/\/.*/y;
	HashbangComment = /^#!.*/;
	JSXPunctuator = /[<>.:={}]|\/(?![\/*])/y;
	JSXIdentifier = /[$_\p{ID_Start}][$_\u200C\u200D\p{ID_Continue}-]*/yu;
	JSXString = /(['"])(?:[^'"]+|(?!\1)['"])*(\1)?/y;
	JSXText = /[^<>{}]+/y;
	TokensPrecedingExpression = /^(?:[\/+-]|\.{3}|\?(?:InterpolationIn(?:JSX|Template)|NoLineTerminatorHere|NonExpressionParenEnd|UnaryIncDec))?$|[{}([,;<>=*%&|^!~?:]$/;
	TokensNotPrecedingObjectLiteral = /^(?:=>|[;\]){}]|else|\?(?:NoLineTerminatorHere|NonExpressionParenEnd))?$/;
	KeywordsWithExpressionAfter = /^(?:await|case|default|delete|do|else|instanceof|new|return|throw|typeof|void|yield)$/;
	KeywordsWithNoLineTerminatorAfter = /^(?:return|throw|yield)$/;
	Newline = RegExp(LineTerminatorSequence.source);
	jsTokens_1 = function*(input, {jsx = false} = {}) {
		var braces, firstCodePoint, isExpression, lastIndex, lastSignificantToken, length, match, mode, nextLastIndex, nextLastSignificantToken, parenNesting, postfixIncDec, punctuator, stack;
		({length} = input);
		lastIndex = 0;
		lastSignificantToken = "";
		stack = [
			{tag: "JS"}
		];
		braces = [];
		parenNesting = 0;
		postfixIncDec = false;
		if (match = HashbangComment.exec(input)) {
			yield ({
				type: "HashbangComment",
				value: match[0]
			});
			lastIndex = match[0].length;
		}
		while (lastIndex < length) {
			mode = stack[stack.length - 1];
			switch (mode.tag) {
				case "JS":
				case "JSNonExpressionParen":
				case "InterpolationInTemplate":
				case "InterpolationInJSX":
					if (input[lastIndex] === "/" && (TokensPrecedingExpression.test(lastSignificantToken) || KeywordsWithExpressionAfter.test(lastSignificantToken))) {
						RegularExpressionLiteral.lastIndex = lastIndex;
						if (match = RegularExpressionLiteral.exec(input)) {
							lastIndex = RegularExpressionLiteral.lastIndex;
							lastSignificantToken = match[0];
							postfixIncDec = true;
							yield ({
								type: "RegularExpressionLiteral",
								value: match[0],
								closed: match[1] !== void 0 && match[1] !== "\\"
							});
							continue;
						}
					}
					Punctuator.lastIndex = lastIndex;
					if (match = Punctuator.exec(input)) {
						punctuator = match[0];
						nextLastIndex = Punctuator.lastIndex;
						nextLastSignificantToken = punctuator;
						switch (punctuator) {
							case "(":
								if (lastSignificantToken === "?NonExpressionParenKeyword") {
									stack.push({
										tag: "JSNonExpressionParen",
										nesting: parenNesting
									});
								}
								parenNesting++;
								postfixIncDec = false;
								break;
							case ")":
								parenNesting--;
								postfixIncDec = true;
								if (mode.tag === "JSNonExpressionParen" && parenNesting === mode.nesting) {
									stack.pop();
									nextLastSignificantToken = "?NonExpressionParenEnd";
									postfixIncDec = false;
								}
								break;
							case "{":
								Punctuator.lastIndex = 0;
								isExpression = !TokensNotPrecedingObjectLiteral.test(lastSignificantToken) && (TokensPrecedingExpression.test(lastSignificantToken) || KeywordsWithExpressionAfter.test(lastSignificantToken));
								braces.push(isExpression);
								postfixIncDec = false;
								break;
							case "}":
								switch (mode.tag) {
									case "InterpolationInTemplate":
										if (braces.length === mode.nesting) {
											Template.lastIndex = lastIndex;
											match = Template.exec(input);
											lastIndex = Template.lastIndex;
											lastSignificantToken = match[0];
											if (match[1] === "${") {
												lastSignificantToken = "?InterpolationInTemplate";
												postfixIncDec = false;
												yield ({
													type: "TemplateMiddle",
													value: match[0]
												});
											} else {
												stack.pop();
												postfixIncDec = true;
												yield ({
													type: "TemplateTail",
													value: match[0],
													closed: match[1] === "`"
												});
											}
											continue;
										}
										break;
									case "InterpolationInJSX":
										if (braces.length === mode.nesting) {
											stack.pop();
											lastIndex += 1;
											lastSignificantToken = "}";
											yield ({
												type: "JSXPunctuator",
												value: "}"
											});
											continue;
										}
								}
								postfixIncDec = braces.pop();
								nextLastSignificantToken = postfixIncDec ? "?ExpressionBraceEnd" : "}";
								break;
							case "]":
								postfixIncDec = true;
								break;
							case "++":
							case "--":
								nextLastSignificantToken = postfixIncDec ? "?PostfixIncDec" : "?UnaryIncDec";
								break;
							case "<":
								if (jsx && (TokensPrecedingExpression.test(lastSignificantToken) || KeywordsWithExpressionAfter.test(lastSignificantToken))) {
									stack.push({tag: "JSXTag"});
									lastIndex += 1;
									lastSignificantToken = "<";
									yield ({
										type: "JSXPunctuator",
										value: punctuator
									});
									continue;
								}
								postfixIncDec = false;
								break;
							default:
								postfixIncDec = false;
						}
						lastIndex = nextLastIndex;
						lastSignificantToken = nextLastSignificantToken;
						yield ({
							type: "Punctuator",
							value: punctuator
						});
						continue;
					}
					Identifier.lastIndex = lastIndex;
					if (match = Identifier.exec(input)) {
						lastIndex = Identifier.lastIndex;
						nextLastSignificantToken = match[0];
						switch (match[0]) {
							case "for":
							case "if":
							case "while":
							case "with":
								if (lastSignificantToken !== "." && lastSignificantToken !== "?.") {
									nextLastSignificantToken = "?NonExpressionParenKeyword";
								}
						}
						lastSignificantToken = nextLastSignificantToken;
						postfixIncDec = !KeywordsWithExpressionAfter.test(match[0]);
						yield ({
							type: match[1] === "#" ? "PrivateIdentifier" : "IdentifierName",
							value: match[0]
						});
						continue;
					}
					StringLiteral.lastIndex = lastIndex;
					if (match = StringLiteral.exec(input)) {
						lastIndex = StringLiteral.lastIndex;
						lastSignificantToken = match[0];
						postfixIncDec = true;
						yield ({
							type: "StringLiteral",
							value: match[0],
							closed: match[2] !== void 0
						});
						continue;
					}
					NumericLiteral.lastIndex = lastIndex;
					if (match = NumericLiteral.exec(input)) {
						lastIndex = NumericLiteral.lastIndex;
						lastSignificantToken = match[0];
						postfixIncDec = true;
						yield ({
							type: "NumericLiteral",
							value: match[0]
						});
						continue;
					}
					Template.lastIndex = lastIndex;
					if (match = Template.exec(input)) {
						lastIndex = Template.lastIndex;
						lastSignificantToken = match[0];
						if (match[1] === "${") {
							lastSignificantToken = "?InterpolationInTemplate";
							stack.push({
								tag: "InterpolationInTemplate",
								nesting: braces.length
							});
							postfixIncDec = false;
							yield ({
								type: "TemplateHead",
								value: match[0]
							});
						} else {
							postfixIncDec = true;
							yield ({
								type: "NoSubstitutionTemplate",
								value: match[0],
								closed: match[1] === "`"
							});
						}
						continue;
					}
					break;
				case "JSXTag":
				case "JSXTagEnd":
					JSXPunctuator.lastIndex = lastIndex;
					if (match = JSXPunctuator.exec(input)) {
						lastIndex = JSXPunctuator.lastIndex;
						nextLastSignificantToken = match[0];
						switch (match[0]) {
							case "<":
								stack.push({tag: "JSXTag"});
								break;
							case ">":
								stack.pop();
								if (lastSignificantToken === "/" || mode.tag === "JSXTagEnd") {
									nextLastSignificantToken = "?JSX";
									postfixIncDec = true;
								} else {
									stack.push({tag: "JSXChildren"});
								}
								break;
							case "{":
								stack.push({
									tag: "InterpolationInJSX",
									nesting: braces.length
								});
								nextLastSignificantToken = "?InterpolationInJSX";
								postfixIncDec = false;
								break;
							case "/":
								if (lastSignificantToken === "<") {
									stack.pop();
									if (stack[stack.length - 1].tag === "JSXChildren") {
										stack.pop();
									}
									stack.push({tag: "JSXTagEnd"});
								}
						}
						lastSignificantToken = nextLastSignificantToken;
						yield ({
							type: "JSXPunctuator",
							value: match[0]
						});
						continue;
					}
					JSXIdentifier.lastIndex = lastIndex;
					if (match = JSXIdentifier.exec(input)) {
						lastIndex = JSXIdentifier.lastIndex;
						lastSignificantToken = match[0];
						yield ({
							type: "JSXIdentifier",
							value: match[0]
						});
						continue;
					}
					JSXString.lastIndex = lastIndex;
					if (match = JSXString.exec(input)) {
						lastIndex = JSXString.lastIndex;
						lastSignificantToken = match[0];
						yield ({
							type: "JSXString",
							value: match[0],
							closed: match[2] !== void 0
						});
						continue;
					}
					break;
				case "JSXChildren":
					JSXText.lastIndex = lastIndex;
					if (match = JSXText.exec(input)) {
						lastIndex = JSXText.lastIndex;
						lastSignificantToken = match[0];
						yield ({
							type: "JSXText",
							value: match[0]
						});
						continue;
					}
					switch (input[lastIndex]) {
						case "<":
							stack.push({tag: "JSXTag"});
							lastIndex++;
							lastSignificantToken = "<";
							yield ({
								type: "JSXPunctuator",
								value: "<"
							});
							continue;
						case "{":
							stack.push({
								tag: "InterpolationInJSX",
								nesting: braces.length
							});
							lastIndex++;
							lastSignificantToken = "?InterpolationInJSX";
							postfixIncDec = false;
							yield ({
								type: "JSXPunctuator",
								value: "{"
							});
							continue;
					}
			}
			WhiteSpace.lastIndex = lastIndex;
			if (match = WhiteSpace.exec(input)) {
				lastIndex = WhiteSpace.lastIndex;
				yield ({
					type: "WhiteSpace",
					value: match[0]
				});
				continue;
			}
			LineTerminatorSequence.lastIndex = lastIndex;
			if (match = LineTerminatorSequence.exec(input)) {
				lastIndex = LineTerminatorSequence.lastIndex;
				postfixIncDec = false;
				if (KeywordsWithNoLineTerminatorAfter.test(lastSignificantToken)) {
					lastSignificantToken = "?NoLineTerminatorHere";
				}
				yield ({
					type: "LineTerminatorSequence",
					value: match[0]
				});
				continue;
			}
			MultiLineComment.lastIndex = lastIndex;
			if (match = MultiLineComment.exec(input)) {
				lastIndex = MultiLineComment.lastIndex;
				if (Newline.test(match[0])) {
					postfixIncDec = false;
					if (KeywordsWithNoLineTerminatorAfter.test(lastSignificantToken)) {
						lastSignificantToken = "?NoLineTerminatorHere";
					}
				}
				yield ({
					type: "MultiLineComment",
					value: match[0],
					closed: match[1] !== void 0
				});
				continue;
			}
			SingleLineComment.lastIndex = lastIndex;
			if (match = SingleLineComment.exec(input)) {
				lastIndex = SingleLineComment.lastIndex;
				postfixIncDec = false;
				yield ({
					type: "SingleLineComment",
					value: match[0]
				});
				continue;
			}
			firstCodePoint = String.fromCodePoint(input.codePointAt(lastIndex));
			lastIndex += firstCodePoint.length;
			lastSignificantToken = firstCodePoint;
			postfixIncDec = false;
			yield ({
				type: mode.tag.startsWith("JSX") ? "JSXInvalid" : "Invalid",
				value: firstCodePoint
			});
		}
		return void 0;
	};
	return jsTokens_1;
}

var jsTokensExports = requireJsTokens();
var jsTokens = /*@__PURE__*/getDefaultExportFromCjs(jsTokensExports);

const FILL_COMMENT = " ";
function stripLiteralFromToken(token, fillChar, filter) {
  if (token.type === "SingleLineComment") {
    return FILL_COMMENT.repeat(token.value.length);
  }
  if (token.type === "MultiLineComment") {
    return token.value.replace(/[^\n]/g, FILL_COMMENT);
  }
  if (token.type === "StringLiteral") {
    if (!token.closed) {
      return token.value;
    }
    const body = token.value.slice(1, -1);
    if (filter(body)) {
      return token.value[0] + fillChar.repeat(body.length) + token.value[token.value.length - 1];
    }
  }
  if (token.type === "NoSubstitutionTemplate") {
    const body = token.value.slice(1, -1);
    if (filter(body)) {
      return `\`${body.replace(/[^\n]/g, fillChar)}\``;
    }
  }
  if (token.type === "RegularExpressionLiteral") {
    const body = token.value;
    if (filter(body)) {
      return body.replace(/\/(.*)\/(\w?)$/g, (_, $1, $2) => `/${fillChar.repeat($1.length)}/${$2}`);
    }
  }
  if (token.type === "TemplateHead") {
    const body = token.value.slice(1, -2);
    if (filter(body)) {
      return `\`${body.replace(/[^\n]/g, fillChar)}\${`;
    }
  }
  if (token.type === "TemplateTail") {
    const body = token.value.slice(0, -2);
    if (filter(body)) {
      return `}${body.replace(/[^\n]/g, fillChar)}\``;
    }
  }
  if (token.type === "TemplateMiddle") {
    const body = token.value.slice(1, -2);
    if (filter(body)) {
      return `}${body.replace(/[^\n]/g, fillChar)}\${`;
    }
  }
  return token.value;
}
function optionsWithDefaults(options) {
  return {
    fillChar: " ",
    filter: (() => true)
  };
}
function stripLiteral(code, options) {
  let result = "";
  const _options = optionsWithDefaults();
  for (const token of jsTokens(code, { jsx: false })) {
    result += stripLiteralFromToken(token, _options.fillChar, _options.filter);
  }
  return result;
}

// so people can reassign envs at runtime
// import.meta.env.VITE_NAME = 'app' -> process.env.VITE_NAME = 'app'
function MetaEnvReplacerPlugin() {
	return {
		name: "vitest:meta-env-replacer",
		enforce: "pre",
		transform(code, id) {
			if (!/\bimport\.meta\.env\b/.test(code)) return null;
			let s = null;
			const envs = stripLiteral(code).matchAll(/\bimport\.meta\.env\b/g);
			for (const env of envs) {
				s ||= new MagicString(code);
				const startIndex = env.index;
				const endIndex = startIndex + env[0].length;
				s.overwrite(startIndex, endIndex, `Object.assign(/* istanbul ignore next */ globalThis.__vitest_worker__?.metaEnv ?? import.meta.env)`);
			}
			if (s) return {
				code: s.toString(),
				map: s.generateMap({
					hires: "boundary",
					source: cleanUrl(id)
				})
			};
		}
	};
}

function MocksPlugins(options = {}) {
	const normalizedDistDir = normalize(distDir);
	return [hoistMocksPlugin({
		filter(id) {
			if (id.includes(normalizedDistDir)) return false;
			if (options.filter) return options.filter(id);
			return true;
		},
		codeFrameGenerator(node, id, code) {
			return generateCodeFrame(code, 4, node.start + 1);
		}
	}), automockPlugin()];
}

function generateCssFilenameHash(filepath) {
	return hash("sha1", filepath, "hex").slice(0, 6);
}
function generateScopedClassName(strategy, name, filename) {
	// should be configured by Vite defaults
	if (strategy === "scoped") return null;
	if (strategy === "non-scoped") return name;
	return `_${name}_${generateCssFilenameHash(filename)}`;
}

const LogLevels = {
	silent: 0,
	error: 1,
	warn: 2,
	info: 3
};
function clearScreen(logger) {
	const repeatCount = process.stdout.rows - 2;
	const blank = repeatCount > 0 ? "\n".repeat(repeatCount) : "";
	logger.clearScreen(blank);
}
let lastType;
let lastMsg;
let sameCount = 0;
// Only initialize the timeFormatter when the timestamp option is used, and
// reuse it across all loggers
let timeFormatter;
function getTimeFormatter() {
	timeFormatter ??= new Intl.DateTimeFormat(void 0, {
		hour: "numeric",
		minute: "numeric",
		second: "numeric"
	});
	return timeFormatter;
}
// This is copy-pasted and needs to be synced from time to time. Ideally, Vite's `createLogger` should accept a custom `console`
// https://github.com/vitejs/vite/blob/main/packages/vite/src/node/logger.ts?rgh-link-date=2024-10-16T23%3A29%3A19Z
// When Vitest supports only Vite 6 and above, we can use Vite's `createLogger({ console })`
// https://github.com/vitejs/vite/pull/18379
function createViteLogger(console, level = "info", options = {}) {
	const loggedErrors = /* @__PURE__ */ new WeakSet();
	const { prefix = "[vite]", allowClearScreen = true } = options;
	const thresh = LogLevels[level];
	const canClearScreen = allowClearScreen && process.stdout.isTTY && !process.env.CI;
	const clear = canClearScreen ? clearScreen : () => {};
	function format(type, msg, options = {}) {
		if (options.timestamp) {
			let tag = "";
			if (type === "info") tag = c.cyan(c.bold(prefix));
			else if (type === "warn") tag = c.yellow(c.bold(prefix));
			else tag = c.red(c.bold(prefix));
			const environment = options.environment ? `${options.environment} ` : "";
			return `${c.dim(getTimeFormatter().format(/* @__PURE__ */ new Date()))} ${tag} ${environment}${msg}`;
		} else return msg;
	}
	function output(type, msg, options = {}) {
		if (thresh >= LogLevels[type]) {
			const method = type === "info" ? "log" : type;
			if (options.error) loggedErrors.add(options.error);
			if (canClearScreen) if (type === lastType && msg === lastMsg) {
				sameCount++;
				clear(console);
				console[method](format(type, msg, options), c.yellow(`(x${sameCount + 1})`));
			} else {
				sameCount = 0;
				lastMsg = msg;
				lastType = type;
				if (options.clear) clear(console);
				console[method](format(type, msg, options));
			}
			else console[method](format(type, msg, options));
		}
	}
	const warnedMessages = /* @__PURE__ */ new Set();
	const logger = {
		hasWarned: false,
		info(msg, opts) {
			output("info", msg, opts);
		},
		warn(msg, opts) {
			logger.hasWarned = true;
			output("warn", msg, opts);
		},
		warnOnce(msg, opts) {
			if (warnedMessages.has(msg)) return;
			logger.hasWarned = true;
			output("warn", msg, opts);
			warnedMessages.add(msg);
		},
		error(msg, opts) {
			logger.hasWarned = true;
			output("error", msg, opts);
		},
		clearScreen(type) {
			if (thresh >= LogLevels[type]) clear(console);
		},
		hasErrorLogged(error) {
			return loggedErrors.has(error);
		}
	};
	return logger;
}
// silence warning by Vite for statically not analyzable dynamic import
function silenceImportViteIgnoreWarning(logger) {
	return {
		...logger,
		warn(msg, options) {
			if (msg.includes("The above dynamic import cannot be analyzed by Vite")) return;
			logger.warn(msg, options);
		}
	};
}

const cssLangs = "\\.(?:css|less|sass|scss|styl|stylus|pcss|postcss)(?:$|\\?)";
const cssLangRE = new RegExp(cssLangs);
const cssModuleRE = new RegExp(`\\.module${cssLangs}`);
const cssInlineRE = /[?&]inline(?:&|$)/;
function isCSS(id) {
	return cssLangRE.test(id);
}
function isCSSModule(id) {
	return cssModuleRE.test(id);
}
// inline css requests are expected to just return the
// string content directly and not the proxy module
function isInline(id) {
	return cssInlineRE.test(id);
}
function getCSSModuleProxyReturn(strategy, filename) {
	if (strategy === "non-scoped") return "style";
	return `\`_\${style}_${generateCssFilenameHash(filename)}\``;
}
function CSSEnablerPlugin(ctx) {
	const shouldProcessCSS = (id) => {
		const { css } = ctx.config;
		if (typeof css === "boolean") return css;
		if (toArray(css.exclude).some((re) => re.test(id))) return false;
		if (toArray(css.include).some((re) => re.test(id))) return true;
		return false;
	};
	return [{
		name: "vitest:css-disable",
		enforce: "pre",
		transform(code, id) {
			if (!isCSS(id)) return;
			// css plugin inside Vite won't do anything if the code is empty
			// but it will put __vite__updateStyle anyway
			if (!shouldProcessCSS(id)) return { code: "" };
		}
	}, {
		name: "vitest:css-empty-post",
		enforce: "post",
		transform(_, id) {
			if (!isCSS(id) || shouldProcessCSS(id)) return;
			if (isCSSModule(id) && !isInline(id)) return { code: `export default new Proxy(Object.create(null), {
            get(_, style) {
              return ${getCSSModuleProxyReturn(typeof ctx.config.css !== "boolean" && ctx.config.css.modules?.classNameStrategy || "stable", relative(ctx.config.root, id))};
            },
          })` };
			return { code: "export default \"\"" };
		}
	}];
}

const metaUrlLength = 15;
const locationString = "self.location".padEnd(metaUrlLength, " ");
// Vite transforms new URL('./path', import.meta.url) to new URL('/path.js', import.meta.url)
// This makes "href" equal to "http://localhost:3000/path.js" in the browser, but if we keep it like this,
// then in tests the URL will become "file:///path.js".
// To battle this, we replace "import.meta.url" with "self.location" in the code to keep the browser behavior.
function NormalizeURLPlugin() {
	return {
		name: "vitest:normalize-url",
		enforce: "post",
		transform(code) {
			if (this.environment.name !== "client" || !code.includes("new URL") || !code.includes("import.meta.url")) return;
			const cleanString = stripLiteral(code);
			const assetImportMetaUrlRE = /\bnew\s+URL\s*\(\s*(?:'[^']+'|"[^"]+"|`[^`]+`)\s*,\s*(?:'' \+ )?import\.meta\.url\s*(?:,\s*)?\)/g;
			let updatedCode = code;
			let match;
			// eslint-disable-next-line no-cond-assign
			while (match = assetImportMetaUrlRE.exec(cleanString)) {
				const { 0: exp, index } = match;
				const metaUrlIndex = index + exp.indexOf("import.meta.url");
				updatedCode = updatedCode.slice(0, metaUrlIndex) + locationString + updatedCode.slice(metaUrlIndex + metaUrlLength);
			}
			return {
				code: updatedCode,
				map: null
			};
		}
	};
}

function VitestOptimizer() {
	return {
		name: "vitest:normalize-optimizer",
		config: {
			order: "post",
			handler(viteConfig) {
				const testConfig = viteConfig.test || {};
				const root = resolve(viteConfig.root || process.cwd());
				const name = viteConfig.test?.name;
				const label = typeof name === "string" ? name : name?.label || "";
				viteConfig.cacheDir = VitestCache.resolveCacheDir(resolve(root || process.cwd()), testConfig.cache != null && testConfig.cache !== false ? testConfig.cache.dir : viteConfig.cacheDir, label);
			}
		}
	};
}

function resolveOptimizerConfig(_testOptions, viteOptions) {
	const testOptions = _testOptions || {};
	let optimizeDeps;
	if (testOptions.enabled !== true) {
		testOptions.enabled ??= false;
		optimizeDeps = {
			disabled: true,
			entries: []
		};
	} else {
		const currentInclude = testOptions.include || viteOptions?.include || [];
		const exclude = [
			"vitest",
			"react",
			"vue",
			...testOptions.exclude || viteOptions?.exclude || []
		];
		const runtime = currentInclude.filter((n) => n.endsWith("jsx-dev-runtime") || n.endsWith("jsx-runtime"));
		exclude.push(...runtime);
		const include = (testOptions.include || viteOptions?.include || []).filter((n) => !exclude.includes(n));
		optimizeDeps = {
			...viteOptions,
			...testOptions,
			noDiscovery: true,
			disabled: false,
			entries: [],
			exclude,
			include
		};
	}
	// `optimizeDeps.disabled` is deprecated since v5.1.0-beta.1
	// https://github.com/vitejs/vite/pull/15184
	if (optimizeDeps.disabled) {
		optimizeDeps.noDiscovery = true;
		optimizeDeps.include = [];
	}
	delete optimizeDeps.disabled;
	return optimizeDeps;
}
function deleteDefineConfig(viteConfig) {
	const defines = {};
	if (viteConfig.define) {
		delete viteConfig.define["import.meta.vitest"];
		delete viteConfig.define["process.env"];
		delete viteConfig.define.process;
		delete viteConfig.define.global;
	}
	for (const key in viteConfig.define) {
		const val = viteConfig.define[key];
		let replacement;
		try {
			replacement = typeof val === "string" ? JSON.parse(val) : val;
		} catch {
			// probably means it contains reference to some variable,
			// like this: "__VAR__": "process.env.VAR"
			continue;
		}
		if (key.startsWith("import.meta.env.")) {
			const envKey = key.slice(16);
			process.env[envKey] = replacement;
			delete viteConfig.define[key];
		} else if (key.startsWith("process.env.")) {
			const envKey = key.slice(12);
			process.env[envKey] = replacement;
			delete viteConfig.define[key];
		} else if (!key.includes(".")) {
			defines[key] = replacement;
			delete viteConfig.define[key];
		}
	}
	return defines;
}
function resolveFsAllow(projectRoot, rootConfigFile) {
	if (!rootConfigFile) return [searchForWorkspaceRoot(projectRoot), rootDir];
	return [
		dirname(rootConfigFile),
		searchForWorkspaceRoot(projectRoot),
		rootDir
	];
}
function getDefaultResolveOptions() {
	return {
		mainFields: [],
		conditions: getDefaultServerConditions()
	};
}
function getDefaultServerConditions() {
	if (Number(version.split(".")[0]) >= 6) return vite.defaultServerConditions.filter((c) => c !== "module");
	return ["node"];
}

function ModuleRunnerTransform() {
	let testConfig;
	const noExternal = [];
	const external = [];
	let noExternalAll = false;
	// make sure Vite always applies the module runner transform
	return {
		name: "vitest:environments-module-runner",
		config: {
			order: "post",
			handler(config) {
				testConfig = config.test || {};
				config.environments ??= {};
				const names = new Set(Object.keys(config.environments));
				names.add("client");
				names.add("ssr");
				const pool = config.test?.pool;
				if (pool === "vmForks" || pool === "vmThreads") names.add("__vitest_vm__");
				let moduleDirectories = testConfig.deps?.moduleDirectories || [];
				const envModuleDirectories = process.env.VITEST_MODULE_DIRECTORIES || process.env.npm_config_VITEST_MODULE_DIRECTORIES;
				if (envModuleDirectories) moduleDirectories.push(...envModuleDirectories.split(","));
				moduleDirectories = moduleDirectories.map((dir) => {
					if (dir[0] !== "/") dir = `/${dir}`;
					if (!dir.endsWith("/")) dir += "/";
					return normalize(dir);
				});
				if (!moduleDirectories.includes("/node_modules/")) moduleDirectories.push("/node_modules/");
				testConfig.deps ??= {};
				testConfig.deps.moduleDirectories = moduleDirectories;
				for (const name of names) {
					config.environments[name] ??= {};
					const environment = config.environments[name];
					environment.dev ??= {};
					// vm tests run using the native import mechanism
					if (name === "__vitest_vm__") {
						environment.dev.moduleRunnerTransform = false;
						environment.consumer = "client";
					} else environment.dev.moduleRunnerTransform = true;
					environment.dev.preTransformRequests = false;
					environment.keepProcessEnv = true;
				}
			}
		},
		configEnvironment: {
			order: "post",
			handler(name, config) {
				if (name === "__vitest_vm__" || name === "__vitest__") return;
				config.resolve ??= {};
				const envNoExternal = resolveViteResolveOptions("noExternal", config.resolve, testConfig.deps?.moduleDirectories);
				if (envNoExternal === true) noExternalAll = true;
				else if (envNoExternal.length) noExternal.push(...envNoExternal);
				const envExternal = resolveViteResolveOptions("external", config.resolve, testConfig.deps?.moduleDirectories);
				if (envExternal !== true && envExternal.length) external.push(...envExternal);
				// remove Vite's externalization logic because we have our own (unfortunately)
				config.resolve.external = [...builtinModules, ...builtinModules.map((m) => `node:${m}`)];
				// by setting `noExternal` to `true`, we make sure that
				// Vite will never use its own externalization mechanism
				// to externalize modules and always resolve static imports
				// in both SSR and Client environments
				config.resolve.noExternal = true;
				config.optimizeDeps = resolveOptimizerConfig(testConfig?.deps?.optimizer?.[name], config.optimizeDeps);
			}
		},
		configResolved: {
			order: "pre",
			handler(config) {
				const testConfig = config.test;
				testConfig.server ??= {};
				testConfig.server.deps ??= {};
				if (testConfig.server.deps.inline !== true) {
					if (noExternalAll) testConfig.server.deps.inline = true;
					else if (noExternal.length) {
						testConfig.server.deps.inline ??= [];
						testConfig.server.deps.inline.push(...noExternal);
					}
				}
				if (external.length) {
					testConfig.server.deps.external ??= [];
					testConfig.server.deps.external.push(...external);
				}
			}
		}
	};
}
function resolveViteResolveOptions(key, options, moduleDirectories) {
	if (Array.isArray(options[key])) {
		// mergeConfig will merge a custom `true` into an array
		if (options[key].some((p) => p === true)) return true;
		return options[key].map((dep) => processWildcard(dep, moduleDirectories));
	} else if (typeof options[key] === "string" || options[key] instanceof RegExp) return [options[key]].map((dep) => processWildcard(dep, moduleDirectories));
	else if (typeof options[key] === "boolean") return true;
	return [];
}
function processWildcard(dep, moduleDirectories) {
	if (typeof dep !== "string") return dep;
	if (typeof dep === "string" && dep.includes("*")) {
		const directories = (moduleDirectories || ["/node_modules/"]).map((r) => escapeRegExp(r));
		return new RegExp(`(${directories.join("|")})${dep.replace(/\*/g, "[\\w/]+")}`);
	}
	return dep;
}

function VitestProjectResolver(ctx) {
	const plugin = {
		name: "vitest:resolve-root",
		enforce: "pre",
		config: {
			order: "post",
			handler() {
				return { base: "/" };
			}
		},
		async resolveId(id, _, { ssr }) {
			if (id === "vitest" || id.startsWith("@vitest/") || id.startsWith("vitest/")) return await ctx.vite.pluginContainer.resolveId(id, void 0, {
				skip: new Set([plugin]),
				ssr
			});
		}
	};
	return plugin;
}
function VitestCoreResolver(ctx) {
	return {
		name: "vitest:resolve-core",
		enforce: "pre",
		config: {
			order: "post",
			handler() {
				return { base: "/" };
			}
		},
		async resolveId(id) {
			if (id === "vitest") return resolve(distDir, "index.js");
			if (id.startsWith("@vitest/") || id.startsWith("vitest/"))
 // ignore actual importer, we want it to be resolved relative to the root
			return this.resolve(id, join(ctx.config.root, "index.html"), { skipSelf: true });
		}
	};
}

function WorkspaceVitestPlugin(project, options) {
	return [
		{
			name: "vitest:project:name",
			enforce: "post",
			config(viteConfig) {
				const testConfig = viteConfig.test || {};
				let { label: name, color } = typeof testConfig.name === "string" ? { label: testConfig.name } : {
					label: "",
					...testConfig.name
				};
				if (!name) if (typeof options.workspacePath === "string") {
					// if there is a package.json, read the name from it
					const dir = options.workspacePath.endsWith("/") ? options.workspacePath.slice(0, -1) : dirname(options.workspacePath);
					const pkgJsonPath = resolve(dir, "package.json");
					if (existsSync(pkgJsonPath)) name = JSON.parse(readFileSync(pkgJsonPath, "utf-8")).name;
					if (typeof name !== "string" || !name) name = basename(dir);
				} else name = options.workspacePath.toString();
				const isBrowserEnabled = viteConfig.test?.browser?.enabled ?? (viteConfig.test?.browser && project.vitest._cliOptions.browser?.enabled);
				// keep project names to potentially filter it out
				const workspaceNames = [name];
				const browser = viteConfig.test.browser || {};
				if (isBrowserEnabled && browser.name && !browser.instances?.length)
 // vitest injects `instances` in this case later on
				workspaceNames.push(name ? `${name} (${browser.name})` : browser.name);
				viteConfig.test?.browser?.instances?.forEach((instance) => {
					// every instance is a potential project
					instance.name ??= name ? `${name} (${instance.browser})` : instance.browser;
					if (isBrowserEnabled) workspaceNames.push(instance.name);
				});
				// if there is `--project=...` filter, check if any of the potential projects match
				// if projects don't match, we ignore the test project altogether
				// if some of them match, they will later be filtered again by `resolveWorkspace`
				if (project.vitest.config.project.length) {
					if (!workspaceNames.some((name) => {
						return project.vitest.matchesProjectFilter(name);
					})) throw new VitestFilteredOutProjectError();
				}
				const vitestConfig = { name: {
					label: name,
					color
				} };
				vitestConfig.experimental ??= {};
				// always inherit the global `fsModuleCache` value even without `extends: true`
				if (testConfig.experimental?.fsModuleCache == null && project.vitest.config.experimental?.fsModuleCache != null) vitestConfig.experimental.fsModuleCache = project.vitest.config.experimental.fsModuleCache;
				if (testConfig.experimental?.fsModuleCachePath == null && project.vitest.config.experimental?.fsModuleCachePath != null) vitestConfig.experimental.fsModuleCachePath = project.vitest.config.experimental.fsModuleCachePath;
				if (testConfig.experimental?.viteModuleRunner == null && project.vitest.config.experimental?.viteModuleRunner != null) vitestConfig.experimental.viteModuleRunner = project.vitest.config.experimental.viteModuleRunner;
				if (testConfig.experimental?.nodeLoader == null && project.vitest.config.experimental?.nodeLoader != null) vitestConfig.experimental.nodeLoader = project.vitest.config.experimental.nodeLoader;
				if (testConfig.experimental?.importDurations == null && project.vitest.config.experimental?.importDurations != null) vitestConfig.experimental.importDurations = project.vitest.config.experimental.importDurations;
				return {
					base: "/",
					environments: { __vitest__: { dev: {} } },
					test: vitestConfig
				};
			}
		},
		{
			name: "vitest:project",
			enforce: "pre",
			options() {
				this.meta.watchMode = false;
			},
			config(viteConfig) {
				const originalDefine = { ...viteConfig.define };
				const defines = deleteDefineConfig(viteConfig);
				const testConfig = viteConfig.test || {};
				const root = testConfig.root || viteConfig.root || options.root;
				const resolveOptions = getDefaultResolveOptions();
				let config = {
					root,
					define: { "process.env.NODE_ENV": "process.env.NODE_ENV" },
					resolve: {
						...resolveOptions,
						alias: testConfig.alias
					},
					server: {
						watch: null,
						open: false,
						hmr: false,
						ws: false,
						preTransformRequests: false,
						middlewareMode: true,
						fs: { allow: resolveFsAllow(project.vitest.config.root, project.vitest.vite.config.configFile) }
					},
					environments: { ssr: { resolve: resolveOptions } },
					test: {}
				};
				if ("rolldownVersion" in vite) config = {
					...config,
					oxc: viteConfig.oxc === false ? false : { target: viteConfig.oxc?.target || "node18" }
				};
				else config = {
					...config,
					esbuild: viteConfig.esbuild === false ? false : {
						target: viteConfig.esbuild?.target || "node18",
						sourcemap: "external",
						legalComments: "inline"
					}
				};
				config.test.defines = defines;
				config.test.viteDefine = originalDefine;
				const classNameStrategy = typeof testConfig.css !== "boolean" && testConfig.css?.modules?.classNameStrategy || "stable";
				if (classNameStrategy !== "scoped") {
					config.css ??= {};
					config.css.modules ??= {};
					if (config.css.modules) config.css.modules.generateScopedName = (name, filename) => {
						const root = project.config.root;
						return generateScopedClassName(classNameStrategy, name, relative(root, filename));
					};
				}
				config.customLogger = createViteLogger(project.vitest.logger, viteConfig.logLevel || "warn", { allowClearScreen: false });
				config.customLogger = silenceImportViteIgnoreWarning(config.customLogger);
				return config;
			}
		},
		{
			name: "vitest:project:server",
			enforce: "pre",
			async configureServer(server) {
				const options = deepMerge({}, configDefaults, server.config.test || {});
				await project._configureServer(options, server);
				await server.watcher.close();
			}
		},
		MetaEnvReplacerPlugin(),
		...CSSEnablerPlugin(project),
		CoverageTransform(project.vitest),
		...MocksPlugins(),
		VitestProjectResolver(project.vitest),
		VitestOptimizer(),
		NormalizeURLPlugin(),
		ModuleRunnerTransform()
	];
}

class VitestResolver {
	options;
	externalizeConcurrentCache = /* @__PURE__ */ new Map();
	externalizeCache = /* @__PURE__ */ new Map();
	constructor(cacheDir, config) {
		// sorting to make cache consistent
		const inline = config.server.deps?.inline;
		if (Array.isArray(inline)) inline.sort();
		const external = config.server.deps?.external;
		if (Array.isArray(external)) external.sort();
		this.options = {
			moduleDirectories: config.deps.moduleDirectories?.sort(),
			inlineFiles: config.setupFiles.flatMap((file) => {
				if (file.startsWith("file://")) return file;
				const resolvedId = resolve(file);
				return [resolvedId, pathToFileURL(resolvedId).href];
			}),
			cacheDir,
			inline,
			external
		};
	}
	wasExternalized(file) {
		const normalizedFile = normalizeId(file);
		if (!this.externalizeCache.has(normalizedFile)) return false;
		return this.externalizeCache.get(normalizedFile) ?? false;
	}
	async shouldExternalize(file) {
		const normalizedFile = normalizeId(file);
		if (this.externalizeCache.has(normalizedFile)) return this.externalizeCache.get(normalizedFile);
		return shouldExternalize(normalizeId(file), this.options, this.externalizeConcurrentCache).then((result) => {
			this.externalizeCache.set(normalizedFile, result);
			return result;
		}).finally(() => {
			this.externalizeConcurrentCache.delete(normalizedFile);
		});
	}
}
function normalizeId(id) {
	if (id.startsWith("/@fs/")) id = id.slice(isWindows ? 5 : 4);
	return id;
}
const BUILTIN_EXTENSIONS = new Set([
	".mjs",
	".cjs",
	".node",
	".wasm"
]);
const ESM_EXT_RE = /\.(es|esm|esm-browser|esm-bundler|es6|module)\.js$/;
const ESM_FOLDER_RE = /\/(es|esm)\/(.*\.js)$/;
const defaultInline = [
	/virtual:/,
	/\.[mc]?ts$/,
	/[?&](init|raw|url|inline)\b/,
	KNOWN_ASSET_RE,
	/^(?!.*node_modules).*\.mjs$/,
	/^(?!.*node_modules).*\.cjs\.js$/,
	/vite\w*\/dist\/client\/env.mjs/
];
const depsExternal = [/\/node_modules\/.*\.cjs\.js$/, /\/node_modules\/.*\.mjs$/];
function guessCJSversion(id) {
	if (id.match(ESM_EXT_RE)) {
		for (const i of [
			id.replace(ESM_EXT_RE, ".mjs"),
			id.replace(ESM_EXT_RE, ".umd.js"),
			id.replace(ESM_EXT_RE, ".cjs.js"),
			id.replace(ESM_EXT_RE, ".js")
		]) if (existsSync(i)) return i;
	}
	if (id.match(ESM_FOLDER_RE)) {
		for (const i of [
			id.replace(ESM_FOLDER_RE, "/umd/$1"),
			id.replace(ESM_FOLDER_RE, "/cjs/$1"),
			id.replace(ESM_FOLDER_RE, "/lib/$1"),
			id.replace(ESM_FOLDER_RE, "/$1")
		]) if (existsSync(i)) return i;
	}
}
// The code from https://github.com/unjs/mlly/blob/c5bcca0cda175921344fd6de1bc0c499e73e5dac/src/syntax.ts#L51-L98
async function isValidNodeImport(id) {
	// clean url to strip off `?v=...` query etc.
	// node can natively import files with query params, so externalizing them is safe.
	id = cleanUrl(id);
	const extension = extname(id);
	if (BUILTIN_EXTENSIONS.has(extension)) return true;
	if (extension !== ".js") return false;
	id = id.replace("file:///", "");
	if (findNearestPackageData(dirname(id)).type === "module") return true;
	if (/\.(?:\w+-)?esm?(?:-\w+)?\.js$|\/esm?\//.test(id)) return false;
	try {
		await esModuleLexer.init;
		const code = await promises.readFile(id, "utf8");
		const [, , , hasModuleSyntax] = esModuleLexer.parse(code);
		return !hasModuleSyntax;
	} catch {
		return false;
	}
}
async function shouldExternalize(id, options, cache) {
	if (!cache.has(id)) cache.set(id, _shouldExternalize(id, options));
	return cache.get(id);
}
async function _shouldExternalize(id, options) {
	if (isBuiltin$1(id)) return id;
	// data: should be processed by native import,
	// since it is a feature of ESM.
	// also externalize network imports since nodejs allows it when --experimental-network-imports
	if (id.startsWith("data:") || /^(?:https?:)?\/\//.test(id)) return id;
	const moduleDirectories = options?.moduleDirectories || ["/node_modules/"];
	if (matchPattern(id, moduleDirectories, options?.inline)) return false;
	if (options?.inlineFiles && options?.inlineFiles.includes(id)) return false;
	if (matchPattern(id, moduleDirectories, options?.external)) return id;
	// Unless the user explicitly opted to inline them, externalize Vite deps.
	// They are too big to inline by default.
	if (options?.cacheDir && id.includes(options.cacheDir)) return id;
	const isLibraryModule = moduleDirectories.some((dir) => id.includes(dir));
	id = isLibraryModule && options?.fallbackCJS ? guessCJSversion(id) || id : id;
	if (matchPattern(id, moduleDirectories, defaultInline)) return false;
	if (matchPattern(id, moduleDirectories, depsExternal)) return id;
	if (isLibraryModule && await isValidNodeImport(id)) return id;
}
function matchPattern(id, moduleDirectories, patterns) {
	if (patterns == null) return false;
	if (patterns === true) return true;
	for (const ex of patterns) if (typeof ex === "string") {
		if (moduleDirectories.some((dir) => id.includes(join(dir, ex)))) return true;
	} else if (ex.test(id)) return true;
	return false;
}

class TestSpecification {
	/**
	* The task id associated with the test module.
	*/
	taskId;
	/**
	* The test project that the module belongs to.
	*/
	project;
	/**
	* The id of the module in the Vite module graph. It is usually an absolute file path.
	*/
	moduleId;
	/**
	* The current test pool. It's possible to have multiple pools in a single test project with `typecheck.enabled`.
	*/
	pool;
	/**
	* Line numbers of the test locations to run.
	*/
	testLines;
	/**
	* Regular expression pattern to filter test names.
	*/
	testNamePattern;
	/**
	* The ids of tasks inside of this specification to run.
	*/
	testIds;
	/**
	* The tags of tests to run.
	*/
	testTagsFilter;
	/**
	* This class represents a test suite for a test module within a single project.
	* @internal
	*/
	constructor(project, moduleId, pool, testLinesOrOptions) {
		const projectName = project.config.name;
		const hashName = pool !== "typescript" ? projectName : projectName ? `${projectName}:__typecheck__` : "__typecheck__";
		this.taskId = generateFileHash(relative(project.config.root, moduleId), hashName);
		this.project = project;
		this.moduleId = moduleId;
		this.pool = pool;
		if (Array.isArray(testLinesOrOptions)) this.testLines = testLinesOrOptions;
		else if (testLinesOrOptions && typeof testLinesOrOptions === "object") {
			this.testLines = testLinesOrOptions.testLines;
			this.testNamePattern = testLinesOrOptions.testNamePattern;
			this.testIds = testLinesOrOptions.testIds;
			this.testTagsFilter = testLinesOrOptions.testTagsFilter;
		}
	}
	/**
	* Test module associated with the specification. This will be `undefined` if tests have not been run yet.
	*/
	get testModule() {
		const task = this.project.vitest.state.idMap.get(this.taskId);
		if (!task) return;
		return this.project.vitest.state.getReportedEntity(task);
	}
	toJSON() {
		return [
			{
				name: this.project.config.name,
				root: this.project.config.root
			},
			this.moduleId,
			{
				pool: this.pool,
				testLines: this.testLines,
				testIds: this.testIds,
				testNamePattern: this.testNamePattern,
				testTagsFilter: this.testTagsFilter
			}
		];
	}
}

class TestProject {
	/**
	* The global Vitest instance.
	*/
	vitest;
	/**
	* Resolved global configuration. If there are no workspace projects, this will be the same as `config`.
	*/
	globalConfig;
	/**
	* Browser instance if the browser is enabled. This is initialized when the tests run for the first time.
	*/
	browser;
	/**
	* Temporary directory for the project. This is unique for each project. Vitest stores transformed content here.
	*/
	tmpDir;
	/** @internal */ typechecker;
	/** @internal */ _config;
	/** @internal */ _vite;
	/** @internal */ _hash;
	/** @internal */ _resolver;
	/** @internal */ _fetcher;
	/** @internal */ _serializedDefines;
	/** @internal */ testFilesList = null;
	/** @internal */ _browserReadySessions = /* @__PURE__ */ new Set();
	runner;
	closingPromise;
	typecheckFilesList = null;
	_globalSetups;
	_provided = {};
	constructor(vitest, options, tmpDir) {
		this.options = options;
		this.vitest = vitest;
		this.globalConfig = vitest.config;
		this.tmpDir = tmpDir || join(tmpdir(), nanoid());
	}
	/**
	* The unique hash of this project. This value is consistent between the reruns.
	*
	* It is based on the root of the project (not consistent between OS) and its name.
	*/
	get hash() {
		if (!this._hash) throw new Error("The server was not set. It means that `project.hash` was called before the Vite server was established.");
		return this._hash;
	}
	// "provide" is a property, not a method to keep the context when destructed in the global setup,
	// making it a method would be a breaking change, and can be done in Vitest 3 at minimum
	/**
	* Provide a value to the test context. This value will be available to all tests with `inject`.
	*/
	provide = (key, value) => {
		try {
			structuredClone(value);
		} catch (err) {
			throw new Error(`Cannot provide "${key}" because it's not serializable.`, { cause: err });
		}
		// casting `any` because the default type is `never` since `ProvidedContext` is empty
		this._provided[key] = value;
	};
	/**
	* Get the provided context. The project context is merged with the global context.
	*/
	getProvidedContext() {
		if (this.isRootProject()) return this._provided;
		// globalSetup can run even if core workspace is not part of the test run
		// so we need to inherit its provided context
		return {
			...this.vitest.getRootProject().getProvidedContext(),
			...this._provided
		};
	}
	/**
	* Creates a new test specification. Specifications describe how to run tests.
	* @param moduleId The file path
	*/
	createSpecification(moduleId, locationsOrOptions, pool) {
		return new TestSpecification(this, moduleId, pool || getFilePoolName(this), locationsOrOptions);
	}
	toJSON() {
		return {
			name: this.name,
			serializedConfig: this.serializedConfig,
			context: this.getProvidedContext()
		};
	}
	/**
	* Vite's dev server instance. Every workspace project has its own server.
	*/
	get vite() {
		if (!this._vite) throw new Error("The server was not set. It means that `project.vite` was called before the Vite server was established.");
		// checking it once should be enough
		Object.defineProperty(this, "vite", {
			configurable: true,
			writable: true,
			value: this._vite
		});
		return this._vite;
	}
	/**
	* Resolved project configuration.
	*/
	get config() {
		if (!this._config) throw new Error("The config was not set. It means that `project.config` was called before the Vite server was established.");
		// checking it once should be enough
		// Object.defineProperty(this, 'config', {
		//   configurable: true,
		//   writable: true,
		//   value: this._config,
		// })
		return this._config;
	}
	/**
	* The name of the project or an empty string if not set.
	*/
	get name() {
		return this.config.name || "";
	}
	/**
	* The color used when reporting tasks of this project.
	*/
	get color() {
		return this.config.color;
	}
	/**
	* Serialized project configuration. This is the config that tests receive.
	*/
	get serializedConfig() {
		return this._serializeOverriddenConfig();
	}
	/**
	* Check if this is the root project. The root project is the one that has the root config.
	*/
	isRootProject() {
		return this.vitest.getRootProject() === this;
	}
	/** @internal */
	async _initializeGlobalSetup() {
		if (this._globalSetups) return;
		this._globalSetups = await loadGlobalSetupFiles(this.runner, this.config.globalSetup);
		for (const globalSetupFile of this._globalSetups) {
			const teardown = await globalSetupFile.setup?.(this);
			if (teardown == null || !!globalSetupFile.teardown) continue;
			if (typeof teardown !== "function") throw new TypeError(`invalid return value in globalSetup file ${globalSetupFile.file}. Must return a function`);
			globalSetupFile.teardown = teardown;
		}
	}
	onTestsRerun(cb) {
		this.vitest.onTestsRerun(cb);
	}
	/** @internal */
	async _teardownGlobalSetup() {
		if (!this._globalSetups) return;
		for (const globalSetupFile of [...this._globalSetups].reverse()) await globalSetupFile.teardown?.();
	}
	/**
	* Get all files in the project that match the globs in the config and the filters.
	* @param filters String filters to match the test files.
	*/
	async globTestFiles(filters = []) {
		return this.vitest._traces.$("vitest.config.resolve_include_project", async (span) => {
			const dir = this.config.dir || this.config.root;
			const { include, exclude, includeSource } = this.config;
			const typecheck = this.config.typecheck;
			span.setAttributes({
				cwd: dir,
				include,
				exclude,
				includeSource,
				typecheck: typecheck.enabled ? typecheck.include : []
			});
			const [testFiles, typecheckTestFiles] = await Promise.all([typecheck.enabled && typecheck.only ? [] : this.globAllTestFiles(include, exclude, includeSource, dir), typecheck.enabled ? this.typecheckFilesList || this.globFiles(typecheck.include, typecheck.exclude, dir) : []]);
			this.typecheckFilesList = typecheckTestFiles;
			return {
				testFiles: this.filterFiles(testFiles, filters, dir),
				typecheckTestFiles: this.filterFiles(typecheckTestFiles, filters, dir)
			};
		});
	}
	async globAllTestFiles(include, exclude, includeSource, cwd) {
		if (this.testFilesList) return this.testFilesList;
		const testFiles = await this.globFiles(include, exclude, cwd);
		if (includeSource?.length) {
			const files = await this.globFiles(includeSource, exclude, cwd);
			await Promise.all(files.map(async (file) => {
				try {
					const code = await promises.readFile(file, "utf-8");
					if (this.isInSourceTestCode(code)) testFiles.push(file);
				} catch {
					return null;
				}
			}));
		}
		this.testFilesList = testFiles;
		return testFiles;
	}
	isBrowserEnabled() {
		return isBrowserEnabled(this.config);
	}
	markTestFile(testPath) {
		this.testFilesList?.push(testPath);
	}
	/** @internal */
	_removeCachedTestFile(testPath) {
		if (this.testFilesList) this.testFilesList = this.testFilesList.filter((file) => file !== testPath);
	}
	/**
	* Returns if the file is a test file. Requires `.globTestFiles()` to be called first.
	* @internal
	*/
	_isCachedTestFile(testPath) {
		return !!this.testFilesList && this.testFilesList.includes(testPath);
	}
	/**
	* Returns if the file is a typecheck test file. Requires `.globTestFiles()` to be called first.
	* @internal
	*/
	_isCachedTypecheckFile(testPath) {
		return !!this.typecheckFilesList && this.typecheckFilesList.includes(testPath);
	}
	/** @internal */
	async globFiles(include, exclude, cwd) {
		// keep the slashes consistent with Vite
		// we are not using the pathe here because it normalizes the drive letter on Windows
		// and we want to keep it the same as working dir
		return (await glob(include, {
			dot: true,
			cwd,
			ignore: exclude,
			expandDirectories: false
		})).map((file) => slash(path.resolve(cwd, file)));
	}
	/**
	* Test if a file matches the test globs. This does the actual glob matching if the test is not cached, unlike `isCachedTestFile`.
	*/
	matchesTestGlob(moduleId, source) {
		if (this._isCachedTestFile(moduleId)) return true;
		const relativeId = relative(this.config.dir || this.config.root, moduleId);
		if (pm.isMatch(relativeId, this.config.exclude)) return false;
		if (pm.isMatch(relativeId, this.config.include)) {
			this.markTestFile(moduleId);
			return true;
		}
		if (this.config.includeSource?.length && pm.isMatch(relativeId, this.config.includeSource)) {
			const code = source?.() || readFileSync(moduleId, "utf-8");
			if (this.isInSourceTestCode(code)) {
				this.markTestFile(moduleId);
				return true;
			}
		}
		return false;
	}
	isInSourceTestCode(code) {
		return code.includes("import.meta.vitest");
	}
	filterFiles(testFiles, filters, dir) {
		if (filters.length && process.platform === "win32") filters = filters.map((f) => slash(f));
		if (filters.length) return testFiles.filter((t) => {
			const testFile = relative(dir, t).toLocaleLowerCase();
			return filters.some((f) => {
				// if filter is a full file path, we should include it if it's in the same folder
				if (isAbsolute(f) && t.startsWith(f)) return true;
				const relativePath = f.endsWith("/") ? join(relative(dir, f), "/") : relative(dir, f);
				return testFile.includes(f.toLocaleLowerCase()) || testFile.includes(relativePath.toLocaleLowerCase());
			});
		});
		return testFiles;
	}
	_parentBrowser;
	/** @internal */
	_parent;
	/** @internal */
	_initParentBrowser = deduped(async (childProject) => {
		if (!this.isBrowserEnabled() || this._parentBrowser) return;
		const provider = this.config.browser.provider || childProject.config.browser.provider;
		if (provider == null) throw new Error(`Provider was not specified in the "browser.provider" setting. Please, pass down playwright(), webdriverio() or preview() from "@vitest/browser-playwright", "@vitest/browser-webdriverio" or "@vitest/browser-preview" package respectively.`);
		if (typeof provider.serverFactory !== "function") throw new TypeError(`The browser provider options do not return a "serverFactory" function. Are you using the latest "@vitest/browser-${provider.name}" package?`);
		const browser = await provider.serverFactory({
			project: this,
			mocksPlugins: (options) => MocksPlugins(options),
			metaEnvReplacer: () => MetaEnvReplacerPlugin(),
			coveragePlugin: () => CoverageTransform(this.vitest)
		});
		this._parentBrowser = browser;
		if (this.config.browser.ui) setup(this.vitest, browser.vite);
	});
	/** @internal */
	_initBrowserServer = deduped(async () => {
		await this._parent?._initParentBrowser(this);
		if (!this.browser && this._parent?._parentBrowser) {
			this.browser = this._parent._parentBrowser.spawn(this);
			await this.vitest.report("onBrowserInit", this);
		}
	});
	/**
	* Closes the project and all associated resources. This can only be called once; the closing promise is cached until the server restarts.
	* If the resources are needed again, create a new project.
	*/
	close() {
		if (!this.closingPromise) this.closingPromise = Promise.all([
			this.vite?.close(),
			this.typechecker?.stop(),
			(this.browser || this._parent?._parentBrowser?.vite)?.close(),
			this.clearTmpDir()
		].filter(Boolean)).then(() => {
			if (!this.runner.isClosed()) return this.runner.close();
		}).then(() => {
			this._provided = {};
			this._vite = void 0;
		});
		return this.closingPromise;
	}
	/**
	* Import a file using Vite module runner.
	* @param moduleId The ID of the module in Vite module graph
	*/
	import(moduleId) {
		return this.runner.import(moduleId);
	}
	_setHash() {
		this._hash = generateHash(this._config.root + this._config.name);
	}
	/** @internal */
	async _configureServer(options, server) {
		this._config = resolveConfig(this.vitest, {
			...options,
			coverage: this.vitest.config.coverage
		}, server.config);
		this._config.api.token = this.vitest.config.api.token;
		this._setHash();
		for (const _providedKey in this.config.provide) {
			const providedKey = _providedKey;
			// type is very strict here, so we cast it to any
			this.provide(providedKey, this.config.provide[providedKey]);
		}
		this.closingPromise = void 0;
		this._resolver = new VitestResolver(server.config.cacheDir, this._config);
		this._vite = server;
		this._serializedDefines = createDefinesScript(server.config.define);
		this._fetcher = createFetchModuleFunction(this._resolver, this._config, this.vitest._fsCache, this.vitest._traces, this.tmpDir);
		const environment = server.environments.__vitest__;
		this.runner = this._config.experimental.viteModuleRunner === false ? new NativeModuleRunner(this._config.root) : new ServerModuleRunner(environment, this._fetcher, this._config);
		const ssrEnvironment = server.environments.ssr;
		if (isRunnableDevEnvironment(ssrEnvironment)) {
			const ssrRunner = new ServerModuleRunner(ssrEnvironment, this._fetcher, this._config);
			Object.defineProperty(ssrEnvironment, "runner", {
				value: ssrRunner,
				writable: true,
				configurable: true
			});
		}
	}
	/** @internal */
	_getViteEnvironments() {
		return [...Object.values(this.browser?.vite.environments || {}), ...Object.values(this.vite.environments || {})];
	}
	/** @internal */
	async _openBrowserPage(sessionId, pool) {
		if (!this.browser) throw new Error(`browser is not initialized`);
		const resolvedUrls = this.browser.vite.resolvedUrls;
		const origin = resolvedUrls?.local[0] ?? resolvedUrls?.network[0];
		if (!origin) throw new Error(`Can't find browser origin URL for project "${this.name}"`);
		const url = new URL("/__vitest_test__/", origin);
		url.searchParams.set("sessionId", sessionId);
		const otelCarrier = this.vitest._traces.getContextCarrier();
		if (otelCarrier) url.searchParams.set("otelCarrier", JSON.stringify(otelCarrier));
		this.vitest._browserSessions.sessionIds.add(sessionId);
		const sessionPromise = this.vitest._browserSessions.createSession(sessionId, this, pool);
		const pagePromise = this.browser.provider.openPage(sessionId, url.toString(), { parallel: pool.parallel ?? false });
		await Promise.all([sessionPromise, pagePromise]);
	}
	/** @internal */
	async _standalone() {
		if (!this.isBrowserEnabled()) return;
		await this._initBrowserProvider();
		if (!this.browser) return;
		const sessionId = crypto.randomUUID();
		await this._openBrowserPage(sessionId, { reject: (error) => {
			this.vitest.state.catchError(error, "Browser Error");
		} });
		this._browserReadySessions.add(sessionId);
	}
	_serializeOverriddenConfig() {
		// TODO: serialize the config _once_ or when needed
		const config = serializeConfig(this);
		if (!this.vitest.configOverride) return config;
		return deepMerge(config, this.vitest.configOverride);
	}
	async clearTmpDir() {
		try {
			await rm(this.tmpDir, { recursive: true });
		} catch {}
	}
	/** @internal */
	_initBrowserProvider = deduped(async () => {
		if (!this.isBrowserEnabled() || this.browser?.provider) return;
		if (!this.browser) await this._initBrowserServer();
		await this.browser?.initBrowserProvider(this);
	});
	/** @internal */
	_provideObject(context) {
		for (const _providedKey in context) {
			const providedKey = _providedKey;
			// type is very strict here, so we cast it to any
			this.provide(providedKey, context[providedKey]);
		}
	}
	/** @internal */
	static _createBasicProject(vitest) {
		const project = new TestProject(vitest, void 0, vitest._tmpDir);
		project.runner = vitest.runner;
		project._vite = vitest.vite;
		project._config = vitest.config;
		project._resolver = vitest._resolver;
		project._fetcher = vitest._fetcher;
		project._serializedDefines = createDefinesScript(vitest.vite.config.define);
		project._setHash();
		project._provideObject(vitest.config.provide);
		return project;
	}
	/** @internal */
	static _cloneBrowserProject(parent, config) {
		const clone = new TestProject(parent.vitest, void 0, parent.tmpDir);
		clone.runner = parent.runner;
		clone._vite = parent._vite;
		clone._resolver = parent._resolver;
		clone._fetcher = parent._fetcher;
		clone._config = config;
		clone._setHash();
		clone._parent = parent;
		clone._serializedDefines = parent._serializedDefines;
		clone._provideObject(config.provide);
		return clone;
	}
}
function deduped(cb) {
	let _promise;
	return ((...args) => {
		if (!_promise) _promise = cb(...args).finally(() => {
			_promise = void 0;
		});
		return _promise;
	});
}
async function initializeProject(workspacePath, ctx, options) {
	const project = new TestProject(ctx, options);
	const { configFile, ...restOptions } = options;
	await createViteServer({
		...restOptions,
		configFile,
		configLoader: ctx.vite.config.inlineConfig.configLoader,
		mode: options.test?.mode || options.mode || ctx.config.mode,
		plugins: [...options.plugins || [], WorkspaceVitestPlugin(project, {
			...options,
			workspacePath
		})]
	});
	return project;
}
function generateHash(str) {
	let hash = 0;
	if (str.length === 0) return `${hash}`;
	for (let i = 0; i < str.length; i++) {
		const char = str.charCodeAt(i);
		hash = (hash << 5) - hash + char;
		hash = hash & hash;
	}
	return `${hash}`;
}

// vitest.config.*
// vite.config.*
// vitest.unit.config.*
// vite.unit.config.*
// vitest.unit-test.config.*
const CONFIG_REGEXP = /^vite(?:st)?(?:\.[\w-]+)?\.config\./;
async function resolveProjects(vitest, cliOptions, workspaceConfigPath, projectsDefinition, names) {
	const { configFiles, projectConfigs, nonConfigDirectories } = await resolveTestProjectConfigs(vitest, workspaceConfigPath, projectsDefinition);
	const cliOverrides = [
		"logHeapUsage",
		"detectAsyncLeaks",
		"allowOnly",
		"sequence",
		"testTimeout",
		"pool",
		"update",
		"globals",
		"expandSnapshotDiff",
		"disableConsoleIntercept",
		"retry",
		"testNamePattern",
		"passWithNoTests",
		"bail",
		"isolate",
		"printConsoleTrace",
		"inspect",
		"inspectBrk",
		"fileParallelism",
		"tagsFilter"
	].reduce((acc, name) => {
		if (name in cliOptions) acc[name] = cliOptions[name];
		return acc;
	}, {});
	const projectPromises = [];
	const fileProjects = [...configFiles, ...nonConfigDirectories];
	const concurrent = limitConcurrency(nodeos__default.availableParallelism?.() || nodeos__default.cpus().length || 5);
	projectConfigs.forEach((options, index) => {
		const configRoot = vitest.config.root;
		// if extends a config file, resolve the file path
		const configFile = typeof options.extends === "string" ? resolve(configRoot, options.extends) : options.extends === true ? vitest.vite.config.configFile || false : false;
		// if `root` is configured, resolve it relative to the workspace file or vite root (like other options)
		// if `root` is not specified, inline configs use the same root as the root project
		const root = options.root ? resolve(configRoot, options.root) : vitest.config.root;
		projectPromises.push(concurrent(() => initializeProject(index, vitest, {
			...options,
			root,
			configFile,
			plugins: [{
				name: "vitest:tags",
				configResolved(config) {
					config.test ??= {};
					config.test.tags = options.test?.tags;
				},
				api: { vitest: { experimental: { ignoreFsModuleCache: true } } }
			}, ...options.plugins || []],
			test: {
				...options.test,
				...cliOverrides
			}
		})));
	});
	for (const path of fileProjects) {
		// if file leads to the root config, then we can just reuse it because we already initialized it
		if (vitest.vite.config.configFile === path) {
			const project = getDefaultTestProject(vitest);
			if (project) projectPromises.push(Promise.resolve(project));
			continue;
		}
		const configFile = path.endsWith("/") ? false : path;
		const root = path.endsWith("/") ? path : dirname(path);
		projectPromises.push(concurrent(() => initializeProject(path, vitest, {
			root,
			configFile,
			test: cliOverrides
		})));
	}
	// pretty rare case - the glob didn't match anything and there are no inline configs
	if (!projectPromises.length) throw new Error([
		"No projects were found. Make sure your configuration is correct. ",
		vitest.config.project.length ? `The filter matched no projects: ${vitest.config.project.join(", ")}. ` : "",
		`The projects definition: ${JSON.stringify(projectsDefinition, null, 4)}.`
	].join(""));
	const resolvedProjectsPromises = await Promise.allSettled(projectPromises);
	const errors = [];
	const resolvedProjects = [];
	for (const result of resolvedProjectsPromises) if (result.status === "rejected") {
		if (result.reason instanceof VitestFilteredOutProjectError)
 // filter out filtered out projects
		continue;
		errors.push(result.reason);
	} else resolvedProjects.push(result.value);
	if (errors.length) throw new AggregateError(errors, "Failed to initialize projects. There were errors during projects setup. See below for more details.");
	// project names are guaranteed to be unique
	for (const project of resolvedProjects) {
		const name = project.name;
		if (names.has(name)) {
			const duplicate = resolvedProjects.find((p) => p.name === name && p !== project);
			const filesError = fileProjects.length ? [
				"\n\nYour config matched these files:\n",
				fileProjects.map((p) => ` - ${relative(vitest.config.root, p)}`).join("\n"),
				"\n\n"
			].join("") : " ";
			throw new Error([
				`Project name "${name}"`,
				project.vite.config.configFile ? ` from "${relative(vitest.config.root, project.vite.config.configFile)}"` : "",
				" is not unique.",
				duplicate?.vite.config.configFile ? ` The project is already defined by "${relative(vitest.config.root, duplicate.vite.config.configFile)}".` : "",
				filesError,
				"All projects should have unique names. Make sure your configuration is correct."
			].join(""));
		}
		names.add(name);
	}
	return resolveBrowserProjects(vitest, names, resolvedProjects);
}
async function resolveBrowserProjects(vitest, names, resolvedProjects) {
	const removeProjects = /* @__PURE__ */ new Set();
	resolvedProjects.forEach((project) => {
		if (!project.config.browser.enabled) return;
		const originalName = project.config.name;
		const instances = project.config.browser.instances || [];
		if (instances.length === 0 || vitest.isExcludedByProjectFilter(originalName)) {
			removeProjects.add(project);
			return;
		}
		// if original name matches a positive filter, keep all instances
		// otherwise, filter instances individually (user may target a specific instance name)
		const filteredInstances = vitest.matchesProjectFilter(originalName) ? instances : instances.filter((instance) => {
			const newName = instance.name;
			return vitest.matchesProjectFilter(newName);
		});
		// every project was filtered out
		if (!filteredInstances.length) {
			removeProjects.add(project);
			return;
		}
		filteredInstances.forEach((config, index) => {
			const browser = config.browser;
			if (!browser) {
				const nth = index + 1;
				const ending = nth === 2 ? "nd" : nth === 3 ? "rd" : "th";
				throw new Error(`The browser configuration must have a "browser" property. The ${nth}${ending} item in "browser.instances" doesn't have it. Make sure your${originalName ? ` "${originalName}"` : ""} configuration is correct.`);
			}
			const name = config.name;
			if (name == null) throw new Error(`The browser configuration must have a "name" property. This is a bug in Vitest. Please, open a new issue with reproduction`);
			if (config.provider?.name != null && project.config.browser.provider?.name != null && config.provider?.name !== project.config.browser.provider?.name) throw new Error(`The instance cannot have a different provider from its parent. The "${name}" instance specifies "${config.provider?.name}" provider, but its parent has a "${project.config.browser.provider?.name}" provider.`);
			if (names.has(name)) throw new Error([
				`Cannot define a nested project for a ${browser} browser. The project name "${name}" was already defined. `,
				"If you have multiple instances for the same browser, make sure to define a custom \"name\". ",
				"All projects should have unique names. Make sure your configuration is correct."
			].join(""));
			names.add(name);
			const clonedConfig = cloneConfig(project, config);
			clonedConfig.name = name;
			const clone = TestProject._cloneBrowserProject(project, clonedConfig);
			resolvedProjects.push(clone);
		});
		removeProjects.add(project);
	});
	return resolvedProjects.filter((project) => !removeProjects.has(project));
}
function cloneConfig(project, { browser, ...config }) {
	const { locators, viewport, testerHtmlPath, headless, screenshotDirectory, screenshotFailures, fileParallelism, browser: _browser, name, provider, ...overrideConfig } = config;
	const currentConfig = project.config.browser;
	const clonedConfig = deepClone(project.config);
	return mergeConfig({
		...clonedConfig,
		browser: {
			...project.config.browser,
			locators: locators ? {
				testIdAttribute: locators.testIdAttribute ?? currentConfig.locators.testIdAttribute,
				exact: locators.exact ?? currentConfig.locators.exact
			} : project.config.browser.locators,
			viewport: viewport ?? currentConfig.viewport,
			testerHtmlPath: testerHtmlPath ?? currentConfig.testerHtmlPath,
			screenshotDirectory: screenshotDirectory ?? currentConfig.screenshotDirectory,
			screenshotFailures: screenshotFailures ?? currentConfig.screenshotFailures,
			headless: headless ?? currentConfig.headless,
			provider: provider ?? currentConfig.provider,
			fileParallelism: fileParallelism ?? currentConfig.fileParallelism,
			name: browser,
			instances: []
		},
		include: overrideConfig.include && overrideConfig.include.length > 0 ? [] : clonedConfig.include,
		exclude: overrideConfig.exclude && overrideConfig.exclude.length > 0 ? [] : clonedConfig.exclude,
		includeSource: overrideConfig.includeSource && overrideConfig.includeSource.length > 0 ? [] : clonedConfig.includeSource
	}, overrideConfig);
}
async function resolveTestProjectConfigs(vitest, workspaceConfigPath, projectsDefinition) {
	// project configurations that were specified directly
	const projectsOptions = [];
	// custom config files that were specified directly or resolved from a directory
	const projectsConfigFiles = [];
	// custom glob matches that should be resolved as directories or config files
	const projectsGlobMatches = [];
	// directories that don't have a config file inside, but should be treated as projects
	const nonConfigProjectDirectories = [];
	for (const definition of projectsDefinition) if (typeof definition === "string") {
		const stringOption = definition.replace("<rootDir>", vitest.config.root);
		// if the string doesn't contain a glob, we can resolve it directly
		// ['./vitest.config.js']
		if (!isDynamicPattern(stringOption)) {
			const file = resolve(vitest.config.root, stringOption);
			if (!existsSync(file)) {
				const note = "Projects definition";
				throw new Error(`${note} references a non-existing file or a directory: ${file}`);
			}
			const stats = statSync(file);
			// user can specify a config file directly
			if (stats.isFile()) {
				const name = basename(file);
				if (!CONFIG_REGEXP.test(name)) throw new Error(`The file "${relative(vitest.config.root, file)}" must start with "vitest.config"/"vite.config" or match the pattern "(vitest|vite).*.config.*" to be a valid project config.`);
				projectsConfigFiles.push(file);
			} else if (stats.isDirectory()) {
				const configFile = resolveDirectoryConfig(file);
				if (configFile) projectsConfigFiles.push(configFile);
				else {
					const directory = file.at(-1) === "/" ? file : `${file}/`;
					nonConfigProjectDirectories.push(directory);
				}
			} else
 // should never happen
			throw new TypeError(`Unexpected file type: ${file}`);
		} else projectsGlobMatches.push(stringOption);
	} else if (typeof definition === "function") projectsOptions.push(await definition({
		command: vitest.vite.config.command,
		mode: vitest.vite.config.mode,
		isPreview: false,
		isSsrBuild: false
	}));
	else projectsOptions.push(await definition);
	if (projectsGlobMatches.length) (await glob(projectsGlobMatches, {
		absolute: true,
		dot: true,
		onlyFiles: false,
		cwd: vitest.config.root,
		expandDirectories: false,
		ignore: [
			"**/node_modules/**",
			"**/*.timestamp-*",
			"**/.DS_Store"
		]
	})).forEach((path) => {
		// directories are allowed with a glob like `packages/*`
		// in this case every directory is treated as a project
		if (path.endsWith("/")) {
			const configFile = resolveDirectoryConfig(path);
			if (configFile) projectsConfigFiles.push(configFile);
			else nonConfigProjectDirectories.push(path);
		} else {
			const name = basename(path);
			if (!CONFIG_REGEXP.test(name)) throw new Error(`The projects glob matched a file "${relative(vitest.config.root, path)}", but it should also either start with "vitest.config"/"vite.config" or match the pattern "(vitest|vite).*.config.*".`);
			projectsConfigFiles.push(path);
		}
	});
	return {
		projectConfigs: projectsOptions,
		nonConfigDirectories: nonConfigProjectDirectories,
		configFiles: Array.from(new Set(projectsConfigFiles))
	};
}
function resolveDirectoryConfig(directory) {
	const files = new Set(readdirSync(directory));
	// default resolution looks for vitest.config.* or vite.config.* files
	// this simulates how `findUp` works in packages/vitest/src/node/create.ts:29
	const configFile = configFiles.find((file) => files.has(file));
	if (configFile) return resolve(directory, configFile);
	return null;
}
function getDefaultTestProject(vitest) {
	const filter = vitest.config.project;
	const project = vitest._ensureRootProject();
	if (!filter.length) return project;
	if (getPotentialProjectNames(project).some((p) => vitest.matchesProjectFilter(p))) return project;
	return null;
}
function getPotentialProjectNames(project) {
	const names = [project.name];
	if (project.config.browser.instances) names.push(...project.config.browser.instances.map((i) => i.name));
	else if (project.config.browser.name) names.push(project.config.browser.name);
	return names;
}

async function loadCustomReporterModule(path, runner) {
	let customReporterModule;
	try {
		customReporterModule = await runner.import(path);
	} catch (customReporterModuleError) {
		throw new Error(`Failed to load custom Reporter from ${path}`, { cause: customReporterModuleError });
	}
	if (customReporterModule.default === null || customReporterModule.default === void 0) throw new Error(`Custom reporter loaded from ${path} was not the default export`);
	return customReporterModule.default;
}
function createReporters(reporterReferences, ctx) {
	const runner = ctx.runner;
	const promisedReporters = reporterReferences.map(async (referenceOrInstance) => {
		if (Array.isArray(referenceOrInstance)) {
			const [reporterName, reporterOptions] = referenceOrInstance;
			if (reporterName === "html") {
				await ctx.packageInstaller.ensureInstalled("@vitest/ui", ctx.config.root, ctx.version);
				return new (await (loadCustomReporterModule("@vitest/ui/reporter", runner)))(reporterOptions);
			} else if (reporterName in ReportersMap) {
				const BuiltinReporter = ReportersMap[reporterName];
				return new BuiltinReporter(reporterOptions);
			} else return new (await (loadCustomReporterModule(reporterName, runner)))(reporterOptions);
		}
		return referenceOrInstance;
	});
	return Promise.all(promisedReporters);
}
function createBenchmarkReporters(reporterReferences, runner) {
	const promisedReporters = reporterReferences.map(async (referenceOrInstance) => {
		if (typeof referenceOrInstance === "string") if (referenceOrInstance in BenchmarkReportsMap) {
			const BuiltinReporter = BenchmarkReportsMap[referenceOrInstance];
			return new BuiltinReporter();
		} else return new (await (loadCustomReporterModule(referenceOrInstance, runner)))();
		return referenceOrInstance;
	});
	return Promise.all(promisedReporters);
}

function parseFilter(filter) {
	const colonIndex = filter.lastIndexOf(":");
	if (colonIndex === -1) return { filename: filter };
	const [parsedFilename, lineNumber] = [filter.substring(0, colonIndex), filter.substring(colonIndex + 1)];
	if (lineNumber.match(/^\d+$/)) return {
		filename: parsedFilename,
		lineNumber: Number.parseInt(lineNumber)
	};
	else if (lineNumber.match(/^\d+-\d+$/)) throw new RangeLocationFilterProvidedError(filter);
	else return { filename: filter };
}
function groupFilters(filters) {
	const groupedFilters_ = groupBy(filters, (f) => f.filename);
	return Object.fromEntries(Object.entries(groupedFilters_).map((entry) => {
		const [filename, filters] = entry;
		return [filename, filters.map((f) => f.lineNumber).filter((l) => l !== void 0)];
	}));
}

class VitestSpecifications {
	_cachedSpecs = /* @__PURE__ */ new Map();
	constructor(vitest) {
		this.vitest = vitest;
	}
	getModuleSpecifications(moduleId) {
		const _cached = this.getCachedSpecifications(moduleId);
		if (_cached) return _cached;
		const specs = [];
		for (const project of this.vitest.projects) {
			if (project._isCachedTestFile(moduleId)) specs.push(project.createSpecification(moduleId));
			if (project._isCachedTypecheckFile(moduleId)) specs.push(project.createSpecification(moduleId, [], "typescript"));
		}
		specs.forEach((spec) => this.ensureSpecificationCached(spec));
		return specs;
	}
	async getRelevantTestSpecifications(filters = []) {
		return this.filterTestsBySource(await this.globTestSpecifications(filters));
	}
	async globTestSpecifications(filters = []) {
		const files = [];
		const dir = process.cwd();
		const parsedFilters = filters.map((f) => parseFilter(f));
		// Require includeTaskLocation when a location filter is passed
		if (!this.vitest.config.includeTaskLocation && parsedFilters.some((f) => f.lineNumber !== void 0)) throw new IncludeTaskLocationDisabledError();
		const testLines = groupFilters(parsedFilters.map((f) => ({
			...f,
			filename: resolve(dir, f.filename)
		})));
		// Key is file and val specifies whether we have matched this file with testLocation
		const testLocHasMatch = {};
		await Promise.all(this.vitest.projects.map(async (project) => {
			const { testFiles, typecheckTestFiles } = await project.globTestFiles(parsedFilters.map((f) => f.filename));
			testFiles.forEach((file) => {
				const lines = testLines[file];
				testLocHasMatch[file] = true;
				const spec = project.createSpecification(file, lines);
				this.ensureSpecificationCached(spec);
				files.push(spec);
			});
			typecheckTestFiles.forEach((file) => {
				const lines = testLines[file];
				testLocHasMatch[file] = true;
				const spec = project.createSpecification(file, lines, "typescript");
				this.ensureSpecificationCached(spec);
				files.push(spec);
			});
		}));
		Object.entries(testLines).forEach(([filepath, loc]) => {
			if (loc.length !== 0 && !testLocHasMatch[filepath]) throw new LocationFilterFileNotFoundError(relative(dir, filepath));
		});
		return files;
	}
	clearCache(moduleId) {
		if (moduleId) this._cachedSpecs.delete(moduleId);
		else this._cachedSpecs.clear();
	}
	getCachedSpecifications(moduleId) {
		return this._cachedSpecs.get(moduleId);
	}
	ensureSpecificationCached(spec) {
		const file = spec.moduleId;
		const specs = this._cachedSpecs.get(file) || [];
		const index = specs.findIndex((_s) => _s.project === spec.project && _s.pool === spec.pool);
		if (index === -1) {
			specs.push(spec);
			this._cachedSpecs.set(file, specs);
		} else specs.splice(index, 1, spec);
		return specs;
	}
	async filterTestsBySource(specs) {
		if (this.vitest.config.changed && !this.vitest.config.related) {
			const related = await this.vitest.vcs.findChangedFiles({
				root: this.vitest.config.root,
				changedSince: this.vitest.config.changed
			});
			this.vitest.config.related = Array.from(new Set(related));
		}
		const related = this.vitest.config.related;
		if (!related) return specs;
		const forceRerunTriggers = this.vitest.config.forceRerunTriggers;
		const matcher = forceRerunTriggers.length ? pm(forceRerunTriggers) : void 0;
		if (matcher && related.some((file) => matcher(file))) return specs;
		// don't run anything if no related sources are found
		// if we are in watch mode, we want to process all tests
		if (!this.vitest.config.watch && !related.length) return [];
		const testGraphs = await Promise.all(specs.map(async (spec) => {
			return [spec, await this.getTestDependencies(spec)];
		}));
		const runningTests = [];
		for (const [specification, deps] of testGraphs)
 // if deps or the test itself were changed
		if (related.some((path) => path === specification.moduleId || deps.has(path))) runningTests.push(specification);
		return runningTests;
	}
	async getTestDependencies(spec, deps = /* @__PURE__ */ new Set()) {
		const addImports = async (project, filepath) => {
			if (deps.has(filepath)) return;
			deps.add(filepath);
			const transformed = project.vite.environments.ssr.moduleGraph.getModuleById(filepath)?.transformResult || await project.vite.environments.ssr.transformRequest(filepath);
			if (!transformed) return;
			const dependencies = [...transformed.deps || [], ...transformed.dynamicDeps || []];
			await Promise.all(dependencies.map(async (dep) => {
				const fsPath = dep.startsWith("/@fs/") ? dep.slice(isWindows ? 5 : 4) : join(project.config.root, dep);
				if (!fsPath.includes("node_modules") && !deps.has(fsPath) && existsSync(fsPath)) await addImports(project, fsPath);
			}));
		};
		await addImports(spec.project, spec.moduleId);
		deps.delete(spec.moduleId);
		return deps;
	}
}

class ReportedTaskImplementation {
	/**
	* Task instance.
	* @internal
	*/
	task;
	/**
	* The project associated with the test or suite.
	*/
	project;
	/**
	* Unique identifier.
	* This ID is deterministic and will be the same for the same test across multiple runs.
	* The ID is based on the project name, module url and test order.
	*/
	id;
	/**
	* Location in the module where the test or suite is defined.
	*/
	location;
	/** @internal */
	constructor(task, project) {
		this.task = task;
		this.project = project;
		this.id = task.id;
		this.location = task.location;
	}
	/**
	* Checks if the test did not fail the suite.
	* If the test is not finished yet or was skipped, it will return `true`.
	*/
	ok() {
		const result = this.task.result;
		return !result || result.state !== "fail";
	}
	/**
	* Custom metadata that was attached to the test during its execution.
	*/
	meta() {
		return this.task.meta;
	}
	/**
	* Creates a new reported task instance and stores it in the project's state for future use.
	* @internal
	*/
	static register(task, project) {
		const state = new this(task, project);
		storeTask(project, task, state);
		return state;
	}
}
class TestCase extends ReportedTaskImplementation {
	#fullName;
	type = "test";
	/**
	* Direct reference to the test module where the test or suite is defined.
	*/
	module;
	/**
	* Name of the test.
	*/
	name;
	/**
	* Options that the test was initiated with.
	*/
	options;
	/**
	* Parent suite. If the test was called directly inside the module, the parent will be the module itself.
	*/
	parent;
	/**
	* Tags associated with the test.
	*/
	tags;
	/** @internal */
	constructor(task, project) {
		super(task, project);
		this.name = task.name;
		this.module = getReportedTask(project, task.file);
		const suite = this.task.suite;
		if (suite) this.parent = getReportedTask(project, suite);
		else this.parent = this.module;
		this.options = buildOptions(task);
		this.tags = this.options.tags || [];
	}
	/**
	* Full name of the test including all parent suites separated with `>`.
	*/
	get fullName() {
		if (this.#fullName === void 0) if (this.parent.type !== "module") this.#fullName = `${this.parent.fullName} > ${this.name}`;
		else this.#fullName = this.name;
		return this.#fullName;
	}
	/**
	* Test results.
	* - **pending**: Test was collected, but didn't finish running yet.
	* - **passed**: Test passed successfully
	* - **failed**: Test failed to execute
	* - **skipped**: Test was skipped during collection or dynamically with `ctx.skip()`.
	*/
	result() {
		const result = this.task.result;
		const mode = result?.state || this.task.mode;
		if (!result && (mode === "skip" || mode === "todo")) return {
			state: "skipped",
			note: void 0,
			errors: void 0
		};
		if (!result || result.state === "run" || result.state === "queued") return {
			state: "pending",
			errors: void 0
		};
		const state = result.state === "fail" ? "failed" : result.state === "pass" ? "passed" : "skipped";
		if (state === "skipped") return {
			state,
			note: result.note,
			errors: void 0
		};
		if (state === "passed") return {
			state,
			errors: result.errors
		};
		return {
			state,
			errors: result.errors || []
		};
	}
	/**
	* Test annotations added via the `task.annotate` API during the test execution.
	*/
	annotations() {
		return [...this.task.annotations];
	}
	/**
	* @experimental
	*
	* Test artifacts recorded via the `recordArtifact` API during the test execution.
	*/
	artifacts() {
		return [...this.task.artifacts];
	}
	/**
	* Useful information about the test like duration, memory usage, etc.
	* Diagnostic is only available after the test has finished.
	*/
	diagnostic() {
		const result = this.task.result;
		// startTime should always be available if the test has properly finished
		if (!result || !result.startTime) return;
		const duration = result.duration || 0;
		return {
			slow: duration > this.project.globalConfig.slowTestThreshold,
			heap: result.heap,
			duration,
			startTime: result.startTime,
			retryCount: result.retryCount ?? 0,
			repeatCount: result.repeatCount ?? 0,
			flaky: !!result.retryCount && result.state === "pass" && result.retryCount > 0
		};
	}
	/**
	* Returns a new test specification that can be used to filter or run this specific test case.
	*/
	toTestSpecification() {
		const isTypecheck = this.task.meta.typecheck === true;
		return this.project.createSpecification(this.module.moduleId, { testIds: [this.id] }, isTypecheck ? "typecheck" : void 0);
	}
}
class TestCollection {
	#task;
	#project;
	constructor(task, project) {
		this.#task = task;
		this.#project = project;
	}
	/**
	* Returns the test or suite at a specific index.
	*/
	at(index) {
		if (index < 0) index = this.size + index;
		return getReportedTask(this.#project, this.#task.tasks[index]);
	}
	/**
	* The number of tests and suites in the collection.
	*/
	get size() {
		return this.#task.tasks.length;
	}
	/**
	* Returns the collection in array form for easier manipulation.
	*/
	array() {
		return Array.from(this);
	}
	/**
	* Filters all tests that are part of this collection and its children.
	*/
	*allTests(state) {
		for (const child of this) if (child.type === "suite") yield* child.children.allTests(state);
		else if (state) {
			if (state === child.result().state) yield child;
		} else yield child;
	}
	/**
	* Filters only the tests that are part of this collection.
	*/
	*tests(state) {
		for (const child of this) {
			if (child.type !== "test") continue;
			if (state) {
				if (state === child.result().state) yield child;
			} else yield child;
		}
	}
	/**
	* Filters only the suites that are part of this collection.
	*/
	*suites() {
		for (const child of this) if (child.type === "suite") yield child;
	}
	/**
	* Filters all suites that are part of this collection and its children.
	*/
	*allSuites() {
		for (const child of this) if (child.type === "suite") {
			yield child;
			yield* child.children.allSuites();
		}
	}
	*[Symbol.iterator]() {
		for (const task of this.#task.tasks) yield getReportedTask(this.#project, task);
	}
}
class SuiteImplementation extends ReportedTaskImplementation {
	/**
	* Collection of suites and tests that are part of this suite.
	*/
	children;
	/** @internal */
	constructor(task, project) {
		super(task, project);
		this.children = new TestCollection(task, project);
	}
	/**
	* Errors that happened outside of the test run during collection, like syntax errors.
	*/
	errors() {
		return this.task.result?.errors || [];
	}
}
class TestSuite extends SuiteImplementation {
	#fullName;
	type = "suite";
	/**
	* Name of the test or the suite.
	*/
	name;
	/**
	* Direct reference to the test module where the test or suite is defined.
	*/
	module;
	/**
	* Parent suite. If suite was called directly inside the module, the parent will be the module itself.
	*/
	parent;
	/**
	* Options that suite was initiated with.
	*/
	options;
	/** @internal */
	constructor(task, project) {
		super(task, project);
		this.name = task.name;
		this.module = getReportedTask(project, task.file);
		const suite = this.task.suite;
		if (suite) this.parent = getReportedTask(project, suite);
		else this.parent = this.module;
		this.options = buildOptions(task);
	}
	/**
	* Checks the running state of the suite.
	*/
	state() {
		return getSuiteState(this.task);
	}
	/**
	* Returns a new test specification that can be used to filter or run this specific test suite.
	*/
	toTestSpecification() {
		const isTypecheck = this.task.meta.typecheck === true;
		const testIds = [...this.children.allTests()].map((test) => test.id);
		return this.project.createSpecification(this.module.moduleId, { testIds }, isTypecheck ? "typecheck" : void 0);
	}
	/**
	* Full name of the suite including all parent suites separated with `>`.
	*/
	get fullName() {
		if (this.#fullName === void 0) if (this.parent.type !== "module") this.#fullName = `${this.parent.fullName} > ${this.name}`;
		else this.#fullName = this.name;
		return this.#fullName;
	}
}
class TestModule extends SuiteImplementation {
	type = "module";
	/**
	* The Vite environment that processes files on the server.
	*
	* Can be empty if test module did not run yet.
	*/
	viteEnvironment;
	/**
	* This is usually an absolute UNIX file path.
	* It can be a virtual ID if the file is not on the disk.
	* This value corresponds to the ID in the Vite's module graph.
	*/
	moduleId;
	/**
	* Module id relative to the project. This is the same as `task.name`.
	*/
	relativeModuleId;
	/** @internal */
	constructor(task, project) {
		super(task, project);
		this.moduleId = task.filepath;
		this.relativeModuleId = task.name;
		if (task.viteEnvironment === "__browser__") this.viteEnvironment = project.browser?.vite.environments.client;
		else if (typeof task.viteEnvironment === "string") this.viteEnvironment = project.vite.environments[task.viteEnvironment];
	}
	/**
	* Returns a new test specification that can be used to filter or run this specific test module.
	*/
	toTestSpecification(testCases) {
		const isTypecheck = this.task.meta.typecheck === true;
		return this.project.createSpecification(this.moduleId, testCases?.length ? { testIds: testCases.map((t) => t.id) } : void 0, isTypecheck ? "typecheck" : void 0);
	}
	/**
	* Checks the running state of the test file.
	*/
	state() {
		if (this.task.result?.state === "queued") return "queued";
		return getSuiteState(this.task);
	}
	/**
	* Useful information about the module like duration, memory usage, etc.
	* If the module was not executed yet, all diagnostic values will return `0`.
	*/
	diagnostic() {
		const setupDuration = this.task.setupDuration || 0;
		const collectDuration = this.task.collectDuration || 0;
		const prepareDuration = this.task.prepareDuration || 0;
		return {
			environmentSetupDuration: this.task.environmentLoad || 0,
			prepareDuration,
			collectDuration,
			setupDuration,
			duration: this.task.result?.duration || 0,
			heap: this.task.result?.heap,
			importDurations: this.task.importDurations ?? {}
		};
	}
}
function buildOptions(task) {
	return {
		each: task.each,
		fails: task.type === "test" && task.fails,
		concurrent: task.concurrent,
		shuffle: task.shuffle,
		retry: task.retry,
		repeats: task.repeats,
		tags: task.tags,
		timeout: task.type === "test" ? task.timeout : void 0,
		mode: task.mode
	};
}
function storeTask(project, runnerTask, reportedTask) {
	project.vitest.state.reportedTasksMap.set(runnerTask, reportedTask);
}
function getReportedTask(project, runnerTask) {
	const reportedTask = project.vitest.state.getReportedEntity(runnerTask);
	if (!reportedTask) throw new Error(`Task instance was not found for ${runnerTask.type} "${runnerTask.name}"`);
	return reportedTask;
}
function getSuiteState(task) {
	const mode = task.mode;
	const state = task.result?.state;
	if (mode === "skip" || mode === "todo" || state === "skip" || state === "todo") return "skipped";
	if (state == null || state === "run" || state === "only") return "pending";
	if (state === "fail") return "failed";
	if (state === "pass") return "passed";
	throw new Error(`Unknown suite state: ${state}`);
}
function experimental_getRunnerTask(entity) {
	return entity.task;
}

function isAggregateError(err) {
	if (typeof AggregateError !== "undefined" && err instanceof AggregateError) return true;
	return err instanceof Error && "errors" in err;
}
class StateManager {
	filesMap = /* @__PURE__ */ new Map();
	pathsSet = /* @__PURE__ */ new Set();
	idMap = /* @__PURE__ */ new Map();
	taskFileMap = /* @__PURE__ */ new WeakMap();
	errorsSet = /* @__PURE__ */ new Set();
	leakSet = /* @__PURE__ */ new Set();
	reportedTasksMap = /* @__PURE__ */ new WeakMap();
	blobs;
	transformTime = 0;
	metadata = {};
	onUnhandledError;
	/** @internal */
	_data = {
		browserLastPort: defaultBrowserPort,
		timeoutIncreased: false
	};
	constructor(options) {
		this.onUnhandledError = options.onUnhandledError;
	}
	catchError(error, type) {
		if (isAggregateError(error)) return error.errors.forEach((error) => this.catchError(error, type));
		if (typeof error === "object" && error !== null) error.type = type;
		else error = {
			type,
			message: error
		};
		const _error = error;
		if (_error && typeof _error === "object" && _error.code === "VITEST_PENDING") {
			const task = this.idMap.get(_error.taskId);
			if (task) {
				task.mode = "skip";
				task.result ??= { state: "skip" };
				task.result.state = "skip";
				task.result.note = _error.note;
			}
			return;
		}
		if (!this.onUnhandledError || this.onUnhandledError(error) !== false) this.errorsSet.add(error);
	}
	catchLeaks(leaks) {
		leaks.forEach((leak) => this.leakSet.add(leak));
	}
	clearErrors() {
		this.errorsSet.clear();
		this.leakSet.clear();
	}
	getUnhandledErrors() {
		return Array.from(this.errorsSet);
	}
	getPaths() {
		return Array.from(this.pathsSet);
	}
	/**
	* Return files that were running or collected.
	*/
	getFiles(keys) {
		if (keys) return keys.map((key) => this.filesMap.get(key)).flat().filter((file) => file && !file.local);
		return Array.from(this.filesMap.values()).flat().filter((file) => !file.local).sort((f1, f2) => {
			// print typecheck files first
			if (f1.meta?.typecheck && f2.meta?.typecheck) return 0;
			if (f1.meta?.typecheck) return -1;
			return 1;
		});
	}
	getTestModules(keys) {
		return this.getFiles(keys).map((file) => this.getReportedEntity(file));
	}
	getFilepaths() {
		return Array.from(this.filesMap.keys());
	}
	getFailedFilepaths() {
		return this.getFiles().filter((i) => i.result?.state === "fail").map((i) => i.filepath);
	}
	collectPaths(paths = []) {
		paths.forEach((path) => {
			this.pathsSet.add(path);
		});
	}
	collectFiles(project, files = []) {
		files.forEach((file) => {
			const existing = this.filesMap.get(file.filepath) || [];
			const otherFiles = existing.filter((i) => i.projectName !== file.projectName || i.meta.typecheck !== file.meta.typecheck);
			const currentFile = existing.find((i) => i.projectName === file.projectName);
			// keep logs for the previous file because it should always be initiated before the collections phase
			// which means that all logs are collected during the collection and not inside tests
			if (currentFile) file.logs = currentFile.logs;
			otherFiles.push(file);
			this.filesMap.set(file.filepath, otherFiles);
			this.updateId(file, project);
		});
	}
	clearFiles(project, paths = []) {
		paths.forEach((path) => {
			const files = this.filesMap.get(path);
			const fileTask = createFileTask$1(path, project.config.root, project.config.name);
			fileTask.local = true;
			TestModule.register(fileTask, project);
			this.idMap.set(fileTask.id, fileTask);
			if (!files) {
				this.filesMap.set(path, [fileTask]);
				return;
			}
			const filtered = files.filter((file) => file.projectName !== project.config.name);
			// always keep a File task, so we can associate logs with it
			if (!filtered.length) this.filesMap.set(path, [fileTask]);
			else this.filesMap.set(path, [...filtered, fileTask]);
		});
	}
	updateId(task, project) {
		if (this.idMap.get(task.id) === task) return;
		if (task.type === "suite" && "filepath" in task) TestModule.register(task, project);
		else if (task.type === "suite") TestSuite.register(task, project);
		else TestCase.register(task, project);
		this.idMap.set(task.id, task);
		if (task.type === "suite") task.tasks.forEach((task) => {
			this.updateId(task, project);
		});
	}
	getReportedEntity(task) {
		return this.reportedTasksMap.get(task);
	}
	getReportedEntityById(taskId) {
		const task = this.idMap.get(taskId);
		return task ? this.reportedTasksMap.get(task) : void 0;
	}
	updateTasks(packs) {
		for (const [id, result, meta] of packs) {
			const task = this.idMap.get(id);
			if (task) {
				task.result = result;
				task.meta = meta;
				// skipped with new PendingError
				if (result?.state === "skip") task.mode = "skip";
			}
		}
	}
	updateUserLog(log) {
		const task = log.taskId && this.idMap.get(log.taskId);
		if (task) {
			if (!task.logs) task.logs = [];
			task.logs.push(log);
		}
	}
	getCountOfFailedTests() {
		return Array.from(this.idMap.values()).filter((t) => t.result?.state === "fail").length;
	}
	cancelFiles(files, project) {
		// if we don't filter existing modules, they will be overridden by `collectFiles`
		const nonRegisteredFiles = files.filter(({ filepath }) => {
			const id = generateFileHash(relative(project.config.root, filepath), project.name);
			return !this.idMap.has(id);
		});
		this.collectFiles(project, nonRegisteredFiles.map((file) => createFileTask$1(file.filepath, project.config.root, project.config.name)));
	}
}

function populateProjectsTags(rootProject, projects) {
	// Include root project if not already in the list
	const allProjects = projects.includes(rootProject) ? projects : [rootProject, ...projects];
	// Collect all tags from all projects (first definition wins)
	const globalTags = /* @__PURE__ */ new Map();
	for (const project of allProjects) for (const tag of project.config.tags || []) if (!globalTags.has(tag.name)) globalTags.set(tag.name, tag);
	// Add missing tags to each project (without overriding local definitions)
	for (const project of allProjects) {
		const projectTagNames = new Set(project.config.tags.map((t) => t.name));
		for (const [tagName, tagDef] of globalTags) if (!projectTagNames.has(tagName)) project.config.tags.push(tagDef);
	}
}

const types = {
    'application/andrew-inset': ['ez'],
    'application/appinstaller': ['appinstaller'],
    'application/applixware': ['aw'],
    'application/appx': ['appx'],
    'application/appxbundle': ['appxbundle'],
    'application/atom+xml': ['atom'],
    'application/atomcat+xml': ['atomcat'],
    'application/atomdeleted+xml': ['atomdeleted'],
    'application/atomsvc+xml': ['atomsvc'],
    'application/atsc-dwd+xml': ['dwd'],
    'application/atsc-held+xml': ['held'],
    'application/atsc-rsat+xml': ['rsat'],
    'application/automationml-aml+xml': ['aml'],
    'application/automationml-amlx+zip': ['amlx'],
    'application/bdoc': ['bdoc'],
    'application/calendar+xml': ['xcs'],
    'application/ccxml+xml': ['ccxml'],
    'application/cdfx+xml': ['cdfx'],
    'application/cdmi-capability': ['cdmia'],
    'application/cdmi-container': ['cdmic'],
    'application/cdmi-domain': ['cdmid'],
    'application/cdmi-object': ['cdmio'],
    'application/cdmi-queue': ['cdmiq'],
    'application/cpl+xml': ['cpl'],
    'application/cu-seeme': ['cu'],
    'application/cwl': ['cwl'],
    'application/dash+xml': ['mpd'],
    'application/dash-patch+xml': ['mpp'],
    'application/davmount+xml': ['davmount'],
    'application/dicom': ['dcm'],
    'application/docbook+xml': ['dbk'],
    'application/dssc+der': ['dssc'],
    'application/dssc+xml': ['xdssc'],
    'application/ecmascript': ['ecma'],
    'application/emma+xml': ['emma'],
    'application/emotionml+xml': ['emotionml'],
    'application/epub+zip': ['epub'],
    'application/exi': ['exi'],
    'application/express': ['exp'],
    'application/fdf': ['fdf'],
    'application/fdt+xml': ['fdt'],
    'application/font-tdpfr': ['pfr'],
    'application/geo+json': ['geojson'],
    'application/gml+xml': ['gml'],
    'application/gpx+xml': ['gpx'],
    'application/gxf': ['gxf'],
    'application/gzip': ['gz'],
    'application/hjson': ['hjson'],
    'application/hyperstudio': ['stk'],
    'application/inkml+xml': ['ink', 'inkml'],
    'application/ipfix': ['ipfix'],
    'application/its+xml': ['its'],
    'application/java-archive': ['jar', 'war', 'ear'],
    'application/java-serialized-object': ['ser'],
    'application/java-vm': ['class'],
    'application/javascript': ['*js'],
    'application/json': ['json', 'map'],
    'application/json5': ['json5'],
    'application/jsonml+json': ['jsonml'],
    'application/ld+json': ['jsonld'],
    'application/lgr+xml': ['lgr'],
    'application/lost+xml': ['lostxml'],
    'application/mac-binhex40': ['hqx'],
    'application/mac-compactpro': ['cpt'],
    'application/mads+xml': ['mads'],
    'application/manifest+json': ['webmanifest'],
    'application/marc': ['mrc'],
    'application/marcxml+xml': ['mrcx'],
    'application/mathematica': ['ma', 'nb', 'mb'],
    'application/mathml+xml': ['mathml'],
    'application/mbox': ['mbox'],
    'application/media-policy-dataset+xml': ['mpf'],
    'application/mediaservercontrol+xml': ['mscml'],
    'application/metalink+xml': ['metalink'],
    'application/metalink4+xml': ['meta4'],
    'application/mets+xml': ['mets'],
    'application/mmt-aei+xml': ['maei'],
    'application/mmt-usd+xml': ['musd'],
    'application/mods+xml': ['mods'],
    'application/mp21': ['m21', 'mp21'],
    'application/mp4': ['*mp4', '*mpg4', 'mp4s', 'm4p'],
    'application/msix': ['msix'],
    'application/msixbundle': ['msixbundle'],
    'application/msword': ['doc', 'dot'],
    'application/mxf': ['mxf'],
    'application/n-quads': ['nq'],
    'application/n-triples': ['nt'],
    'application/node': ['cjs'],
    'application/octet-stream': [
        'bin',
        'dms',
        'lrf',
        'mar',
        'so',
        'dist',
        'distz',
        'pkg',
        'bpk',
        'dump',
        'elc',
        'deploy',
        'exe',
        'dll',
        'deb',
        'dmg',
        'iso',
        'img',
        'msi',
        'msp',
        'msm',
        'buffer',
    ],
    'application/oda': ['oda'],
    'application/oebps-package+xml': ['opf'],
    'application/ogg': ['ogx'],
    'application/omdoc+xml': ['omdoc'],
    'application/onenote': [
        'onetoc',
        'onetoc2',
        'onetmp',
        'onepkg',
        'one',
        'onea',
    ],
    'application/oxps': ['oxps'],
    'application/p2p-overlay+xml': ['relo'],
    'application/patch-ops-error+xml': ['xer'],
    'application/pdf': ['pdf'],
    'application/pgp-encrypted': ['pgp'],
    'application/pgp-keys': ['asc'],
    'application/pgp-signature': ['sig', '*asc'],
    'application/pics-rules': ['prf'],
    'application/pkcs10': ['p10'],
    'application/pkcs7-mime': ['p7m', 'p7c'],
    'application/pkcs7-signature': ['p7s'],
    'application/pkcs8': ['p8'],
    'application/pkix-attr-cert': ['ac'],
    'application/pkix-cert': ['cer'],
    'application/pkix-crl': ['crl'],
    'application/pkix-pkipath': ['pkipath'],
    'application/pkixcmp': ['pki'],
    'application/pls+xml': ['pls'],
    'application/postscript': ['ai', 'eps', 'ps'],
    'application/provenance+xml': ['provx'],
    'application/pskc+xml': ['pskcxml'],
    'application/raml+yaml': ['raml'],
    'application/rdf+xml': ['rdf', 'owl'],
    'application/reginfo+xml': ['rif'],
    'application/relax-ng-compact-syntax': ['rnc'],
    'application/resource-lists+xml': ['rl'],
    'application/resource-lists-diff+xml': ['rld'],
    'application/rls-services+xml': ['rs'],
    'application/route-apd+xml': ['rapd'],
    'application/route-s-tsid+xml': ['sls'],
    'application/route-usd+xml': ['rusd'],
    'application/rpki-ghostbusters': ['gbr'],
    'application/rpki-manifest': ['mft'],
    'application/rpki-roa': ['roa'],
    'application/rsd+xml': ['rsd'],
    'application/rss+xml': ['rss'],
    'application/rtf': ['rtf'],
    'application/sbml+xml': ['sbml'],
    'application/scvp-cv-request': ['scq'],
    'application/scvp-cv-response': ['scs'],
    'application/scvp-vp-request': ['spq'],
    'application/scvp-vp-response': ['spp'],
    'application/sdp': ['sdp'],
    'application/senml+xml': ['senmlx'],
    'application/sensml+xml': ['sensmlx'],
    'application/set-payment-initiation': ['setpay'],
    'application/set-registration-initiation': ['setreg'],
    'application/shf+xml': ['shf'],
    'application/sieve': ['siv', 'sieve'],
    'application/smil+xml': ['smi', 'smil'],
    'application/sparql-query': ['rq'],
    'application/sparql-results+xml': ['srx'],
    'application/sql': ['sql'],
    'application/srgs': ['gram'],
    'application/srgs+xml': ['grxml'],
    'application/sru+xml': ['sru'],
    'application/ssdl+xml': ['ssdl'],
    'application/ssml+xml': ['ssml'],
    'application/swid+xml': ['swidtag'],
    'application/tei+xml': ['tei', 'teicorpus'],
    'application/thraud+xml': ['tfi'],
    'application/timestamped-data': ['tsd'],
    'application/toml': ['toml'],
    'application/trig': ['trig'],
    'application/ttml+xml': ['ttml'],
    'application/ubjson': ['ubj'],
    'application/urc-ressheet+xml': ['rsheet'],
    'application/urc-targetdesc+xml': ['td'],
    'application/voicexml+xml': ['vxml'],
    'application/wasm': ['wasm'],
    'application/watcherinfo+xml': ['wif'],
    'application/widget': ['wgt'],
    'application/winhlp': ['hlp'],
    'application/wsdl+xml': ['wsdl'],
    'application/wspolicy+xml': ['wspolicy'],
    'application/xaml+xml': ['xaml'],
    'application/xcap-att+xml': ['xav'],
    'application/xcap-caps+xml': ['xca'],
    'application/xcap-diff+xml': ['xdf'],
    'application/xcap-el+xml': ['xel'],
    'application/xcap-ns+xml': ['xns'],
    'application/xenc+xml': ['xenc'],
    'application/xfdf': ['xfdf'],
    'application/xhtml+xml': ['xhtml', 'xht'],
    'application/xliff+xml': ['xlf'],
    'application/xml': ['xml', 'xsl', 'xsd', 'rng'],
    'application/xml-dtd': ['dtd'],
    'application/xop+xml': ['xop'],
    'application/xproc+xml': ['xpl'],
    'application/xslt+xml': ['*xsl', 'xslt'],
    'application/xspf+xml': ['xspf'],
    'application/xv+xml': ['mxml', 'xhvml', 'xvml', 'xvm'],
    'application/yang': ['yang'],
    'application/yin+xml': ['yin'],
    'application/zip': ['zip'],
    'application/zip+dotlottie': ['lottie'],
    'audio/3gpp': ['*3gpp'],
    'audio/aac': ['adts', 'aac'],
    'audio/adpcm': ['adp'],
    'audio/amr': ['amr'],
    'audio/basic': ['au', 'snd'],
    'audio/midi': ['mid', 'midi', 'kar', 'rmi'],
    'audio/mobile-xmf': ['mxmf'],
    'audio/mp3': ['*mp3'],
    'audio/mp4': ['m4a', 'mp4a', 'm4b'],
    'audio/mpeg': ['mpga', 'mp2', 'mp2a', 'mp3', 'm2a', 'm3a'],
    'audio/ogg': ['oga', 'ogg', 'spx', 'opus'],
    'audio/s3m': ['s3m'],
    'audio/silk': ['sil'],
    'audio/wav': ['wav'],
    'audio/wave': ['*wav'],
    'audio/webm': ['weba'],
    'audio/xm': ['xm'],
    'font/collection': ['ttc'],
    'font/otf': ['otf'],
    'font/ttf': ['ttf'],
    'font/woff': ['woff'],
    'font/woff2': ['woff2'],
    'image/aces': ['exr'],
    'image/apng': ['apng'],
    'image/avci': ['avci'],
    'image/avcs': ['avcs'],
    'image/avif': ['avif'],
    'image/bmp': ['bmp', 'dib'],
    'image/cgm': ['cgm'],
    'image/dicom-rle': ['drle'],
    'image/dpx': ['dpx'],
    'image/emf': ['emf'],
    'image/fits': ['fits'],
    'image/g3fax': ['g3'],
    'image/gif': ['gif'],
    'image/heic': ['heic'],
    'image/heic-sequence': ['heics'],
    'image/heif': ['heif'],
    'image/heif-sequence': ['heifs'],
    'image/hej2k': ['hej2'],
    'image/ief': ['ief'],
    'image/jaii': ['jaii'],
    'image/jais': ['jais'],
    'image/jls': ['jls'],
    'image/jp2': ['jp2', 'jpg2'],
    'image/jpeg': ['jpg', 'jpeg', 'jpe'],
    'image/jph': ['jph'],
    'image/jphc': ['jhc'],
    'image/jpm': ['jpm', 'jpgm'],
    'image/jpx': ['jpx', 'jpf'],
    'image/jxl': ['jxl'],
    'image/jxr': ['jxr'],
    'image/jxra': ['jxra'],
    'image/jxrs': ['jxrs'],
    'image/jxs': ['jxs'],
    'image/jxsc': ['jxsc'],
    'image/jxsi': ['jxsi'],
    'image/jxss': ['jxss'],
    'image/ktx': ['ktx'],
    'image/ktx2': ['ktx2'],
    'image/pjpeg': ['jfif'],
    'image/png': ['png'],
    'image/sgi': ['sgi'],
    'image/svg+xml': ['svg', 'svgz'],
    'image/t38': ['t38'],
    'image/tiff': ['tif', 'tiff'],
    'image/tiff-fx': ['tfx'],
    'image/webp': ['webp'],
    'image/wmf': ['wmf'],
    'message/disposition-notification': ['disposition-notification'],
    'message/global': ['u8msg'],
    'message/global-delivery-status': ['u8dsn'],
    'message/global-disposition-notification': ['u8mdn'],
    'message/global-headers': ['u8hdr'],
    'message/rfc822': ['eml', 'mime', 'mht', 'mhtml'],
    'model/3mf': ['3mf'],
    'model/gltf+json': ['gltf'],
    'model/gltf-binary': ['glb'],
    'model/iges': ['igs', 'iges'],
    'model/jt': ['jt'],
    'model/mesh': ['msh', 'mesh', 'silo'],
    'model/mtl': ['mtl'],
    'model/obj': ['obj'],
    'model/prc': ['prc'],
    'model/step': ['step', 'stp', 'stpnc', 'p21', '210'],
    'model/step+xml': ['stpx'],
    'model/step+zip': ['stpz'],
    'model/step-xml+zip': ['stpxz'],
    'model/stl': ['stl'],
    'model/u3d': ['u3d'],
    'model/vrml': ['wrl', 'vrml'],
    'model/x3d+binary': ['*x3db', 'x3dbz'],
    'model/x3d+fastinfoset': ['x3db'],
    'model/x3d+vrml': ['*x3dv', 'x3dvz'],
    'model/x3d+xml': ['x3d', 'x3dz'],
    'model/x3d-vrml': ['x3dv'],
    'text/cache-manifest': ['appcache', 'manifest'],
    'text/calendar': ['ics', 'ifb'],
    'text/coffeescript': ['coffee', 'litcoffee'],
    'text/css': ['css'],
    'text/csv': ['csv'],
    'text/html': ['html', 'htm', 'shtml'],
    'text/jade': ['jade'],
    'text/javascript': ['js', 'mjs'],
    'text/jsx': ['jsx'],
    'text/less': ['less'],
    'text/markdown': ['md', 'markdown'],
    'text/mathml': ['mml'],
    'text/mdx': ['mdx'],
    'text/n3': ['n3'],
    'text/plain': ['txt', 'text', 'conf', 'def', 'list', 'log', 'in', 'ini'],
    'text/richtext': ['rtx'],
    'text/rtf': ['*rtf'],
    'text/sgml': ['sgml', 'sgm'],
    'text/shex': ['shex'],
    'text/slim': ['slim', 'slm'],
    'text/spdx': ['spdx'],
    'text/stylus': ['stylus', 'styl'],
    'text/tab-separated-values': ['tsv'],
    'text/troff': ['t', 'tr', 'roff', 'man', 'me', 'ms'],
    'text/turtle': ['ttl'],
    'text/uri-list': ['uri', 'uris', 'urls'],
    'text/vcard': ['vcard'],
    'text/vtt': ['vtt'],
    'text/wgsl': ['wgsl'],
    'text/xml': ['*xml'],
    'text/yaml': ['yaml', 'yml'],
    'video/3gpp': ['3gp', '3gpp'],
    'video/3gpp2': ['3g2'],
    'video/h261': ['h261'],
    'video/h263': ['h263'],
    'video/h264': ['h264'],
    'video/iso.segment': ['m4s'],
    'video/jpeg': ['jpgv'],
    'video/jpm': ['*jpm', '*jpgm'],
    'video/mj2': ['mj2', 'mjp2'],
    'video/mp2t': ['ts', 'm2t', 'm2ts', 'mts'],
    'video/mp4': ['mp4', 'mp4v', 'mpg4'],
    'video/mpeg': ['mpeg', 'mpg', 'mpe', 'm1v', 'm2v'],
    'video/ogg': ['ogv'],
    'video/quicktime': ['qt', 'mov'],
    'video/webm': ['webm'],
};
Object.freeze(types);

var __classPrivateFieldGet = ({} && {}.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Mime_extensionToType, _Mime_typeToExtension, _Mime_typeToExtensions;
class Mime {
    constructor(...args) {
        _Mime_extensionToType.set(this, new Map());
        _Mime_typeToExtension.set(this, new Map());
        _Mime_typeToExtensions.set(this, new Map());
        for (const arg of args) {
            this.define(arg);
        }
    }
    define(typeMap, force = false) {
        for (let [type, extensions] of Object.entries(typeMap)) {
            type = type.toLowerCase();
            extensions = extensions.map((ext) => ext.toLowerCase());
            if (!__classPrivateFieldGet(this, _Mime_typeToExtensions, "f").has(type)) {
                __classPrivateFieldGet(this, _Mime_typeToExtensions, "f").set(type, new Set());
            }
            const allExtensions = __classPrivateFieldGet(this, _Mime_typeToExtensions, "f").get(type);
            let first = true;
            for (let extension of extensions) {
                const starred = extension.startsWith('*');
                extension = starred ? extension.slice(1) : extension;
                allExtensions?.add(extension);
                if (first) {
                    __classPrivateFieldGet(this, _Mime_typeToExtension, "f").set(type, extension);
                }
                first = false;
                if (starred)
                    continue;
                const currentType = __classPrivateFieldGet(this, _Mime_extensionToType, "f").get(extension);
                if (currentType && currentType != type && !force) {
                    throw new Error(`"${type} -> ${extension}" conflicts with "${currentType} -> ${extension}". Pass \`force=true\` to override this definition.`);
                }
                __classPrivateFieldGet(this, _Mime_extensionToType, "f").set(extension, type);
            }
        }
        return this;
    }
    getType(path) {
        if (typeof path !== 'string')
            return null;
        const last = path.replace(/^.*[/\\]/s, '').toLowerCase();
        const ext = last.replace(/^.*\./s, '').toLowerCase();
        const hasPath = last.length < path.length;
        const hasDot = ext.length < last.length - 1;
        if (!hasDot && hasPath)
            return null;
        return __classPrivateFieldGet(this, _Mime_extensionToType, "f").get(ext) ?? null;
    }
    getExtension(type) {
        if (typeof type !== 'string')
            return null;
        type = type?.split?.(';')[0];
        return ((type && __classPrivateFieldGet(this, _Mime_typeToExtension, "f").get(type.trim().toLowerCase())) ?? null);
    }
    getAllExtensions(type) {
        if (typeof type !== 'string')
            return null;
        return __classPrivateFieldGet(this, _Mime_typeToExtensions, "f").get(type.toLowerCase()) ?? null;
    }
    _freeze() {
        this.define = () => {
            throw new Error('define() not allowed for built-in Mime objects. See https://github.com/broofa/mime/blob/main/README.md#custom-mime-instances');
        };
        Object.freeze(this);
        for (const extensions of __classPrivateFieldGet(this, _Mime_typeToExtensions, "f").values()) {
            Object.freeze(extensions);
        }
        return this;
    }
    _getTestState() {
        return {
            types: __classPrivateFieldGet(this, _Mime_extensionToType, "f"),
            extensions: __classPrivateFieldGet(this, _Mime_typeToExtension, "f"),
        };
    }
}
_Mime_extensionToType = new WeakMap(), _Mime_typeToExtension = new WeakMap(), _Mime_typeToExtensions = new WeakMap();

var mime = new Mime(types)._freeze();

class TestRun {
	constructor(vitest) {
		this.vitest = vitest;
	}
	async start(specifications) {
		const filepaths = specifications.map((spec) => spec.moduleId);
		this.vitest.state.collectPaths(filepaths);
		await this.vitest.report("onTestRunStart", [...specifications]);
	}
	async enqueued(project, file) {
		this.vitest.state.collectFiles(project, [file]);
		const testModule = this.vitest.state.getReportedEntity(file);
		await this.vitest.report("onTestModuleQueued", testModule);
	}
	async collected(project, files) {
		this.vitest.state.collectFiles(project, files);
		await Promise.all(files.map((file) => {
			const testModule = this.vitest.state.getReportedEntity(file);
			return this.vitest.report("onTestModuleCollected", testModule);
		}));
	}
	async log(log) {
		this.vitest.state.updateUserLog(log);
		await this.vitest.report("onUserConsoleLog", log);
	}
	async recordArtifact(testId, artifact) {
		const task = this.vitest.state.idMap.get(testId);
		const entity = task && this.vitest.state.getReportedEntity(task);
		assert$1(task && entity, `Entity must be found for task ${task?.name || testId}`);
		assert$1(entity.type === "test", `Artifacts can only be recorded on a test, instead got ${entity.type}`);
		// annotations won't resolve as artifacts for backwards compatibility until next major
		if (artifact.type === "internal:annotation") {
			await this.resolveTestAttachment(entity, artifact.annotation.attachment, artifact.annotation.message);
			entity.task.annotations.push(artifact.annotation);
			await this.vitest.report("onTestCaseAnnotate", entity, artifact.annotation);
			return artifact;
		}
		if (Array.isArray(artifact.attachments)) await Promise.all(artifact.attachments.map((attachment) => this.resolveTestAttachment(entity, attachment)));
		entity.task.artifacts.push(artifact);
		await this.vitest.report("onTestCaseArtifactRecord", entity, artifact);
		return artifact;
	}
	async updated(update, events) {
		this.syncUpdateStacks(update);
		this.vitest.state.updateTasks(update);
		for (const [id, event, data] of events) await this.reportEvent(id, event, data).catch((error) => {
			this.vitest.state.catchError(serializeValue(error), "Unhandled Reporter Error");
		});
		// TODO: what is the order or reports here?
		// "onTaskUpdate" in parallel with others or before all or after all?
		// TODO: error handling - what happens if custom reporter throws an error?
		await this.vitest.report("onTaskUpdate", update, events);
	}
	async end(specifications, errors, coverage) {
		if (coverage) await this.vitest.report("onCoverage", coverage);
		// specification won't have the File task if they were filtered by the --shard command
		const modules = specifications.map((spec) => spec.testModule).filter((s) => s != null);
		const state = this.vitest.isCancelling ? "interrupted" : this.hasFailed(modules) ? "failed" : "passed";
		if (state !== "passed") process.exitCode = 1;
		await this.vitest.report("onTestRunEnd", modules, [...errors], state);
		for (const project in this.vitest.state.metadata) {
			const meta = this.vitest.state.metadata[project];
			if (!meta?.dumpDir) continue;
			const path = resolve(meta.dumpDir, "vitest-metadata.json");
			meta.outline = {
				externalized: Object.keys(meta.externalized).length,
				inlined: Object.keys(meta.tmps).length
			};
			await writeFile(path, JSON.stringify(meta, null, 2), "utf-8");
			this.vitest.logger.log(`Metadata written to ${path}`);
		}
	}
	hasFailed(modules) {
		if (!modules.length) return !this.vitest.config.passWithNoTests;
		return modules.some((m) => !m.ok());
	}
	// make sure the error always has a "stacks" property
	syncUpdateStacks(update) {
		update.forEach(([taskId, result]) => {
			const task = this.vitest.state.idMap.get(taskId);
			const isBrowser = task && task.file.pool === "browser";
			result?.errors?.forEach((error) => {
				if (isPrimitive(error)) return;
				const project = this.vitest.getProjectByName(task.file.projectName || "");
				if (isBrowser) error.stacks = project.browser?.parseErrorStacktrace(error, { frameFilter: project.config.onStackTrace }) || [];
				else error.stacks = parseErrorStacktrace(error, {
					frameFilter: project.config.onStackTrace,
					getSourceMap(file) {
						if (!project.vite.moduleGraph.getModuleById(file)?.transformResult && existsSync(file)) return extractSourcemapFromFile(readFileSync(file, "utf-8"), file)?.map;
					}
				});
			});
		});
	}
	async reportEvent(id, event, data) {
		const task = this.vitest.state.idMap.get(id);
		const entity = task && this.vitest.state.getReportedEntity(task);
		assert$1(task && entity, `Entity must be found for task ${task?.name || id}`);
		if (event === "suite-failed-early" && entity.type === "module") {
			// the file failed during import
			await this.vitest.report("onTestModuleStart", entity);
			await this.vitest.report("onTestModuleEnd", entity);
			return;
		}
		if (event === "suite-prepare" && entity.type === "suite") return await this.vitest.report("onTestSuiteReady", entity);
		if (event === "suite-prepare" && entity.type === "module") return await this.vitest.report("onTestModuleStart", entity);
		if (event === "suite-finished") {
			assert$1(entity.type === "suite" || entity.type === "module", "Entity type must be suite or module");
			if (entity.state() === "skipped")
 // everything inside suite or a module is skipped,
			// so we won't get any children events
			// we need to report everything manually
			await this.reportChildren(entity.children);
			if (entity.type === "module") await this.vitest.report("onTestModuleEnd", entity);
			else await this.vitest.report("onTestSuiteResult", entity);
			return;
		}
		if (event === "test-cancel" && entity.type === "test")
 // This is used to just update state of the task
		return;
		if (event === "test-prepare" && entity.type === "test") return await this.vitest.report("onTestCaseReady", entity);
		if (event === "test-finished" && entity.type === "test") return await this.vitest.report("onTestCaseResult", entity);
		if (event.startsWith("before-hook") || event.startsWith("after-hook")) {
			const isBefore = event.startsWith("before-hook");
			const hook = entity.type === "test" ? {
				name: isBefore ? "beforeEach" : "afterEach",
				entity
			} : {
				name: isBefore ? "beforeAll" : "afterAll",
				entity
			};
			if (event.endsWith("-start")) await this.vitest.report("onHookStart", hook);
			else await this.vitest.report("onHookEnd", hook);
			// this can only happen in --merge-reports, and annotation is already resolved
			if (event === "test-annotation") {
				const annotation = data?.annotation;
				assert$1(annotation && entity.type === "test");
				await this.vitest.report("onTestCaseAnnotate", entity, annotation);
			}
		}
	}
	async resolveTestAttachment(test, attachment, filename) {
		const project = test.project;
		if (!attachment) return attachment;
		const path = attachment.path;
		if (path && !path.startsWith("http://") && !path.startsWith("https://")) {
			const currentPath = resolve(project.config.root, path);
			const hash = createHash("sha1").update(currentPath).digest("hex");
			const newPath = resolve(project.config.attachmentsDir, `${filename ? `${sanitizeFilePath(filename)}-` : ""}${hash}${extname(currentPath)}`);
			if (!existsSync(project.config.attachmentsDir)) await mkdir(project.config.attachmentsDir, { recursive: true });
			await copyFile(currentPath, newPath);
			attachment.path = newPath;
			attachment.contentType = (attachment.contentType ?? mime.getType(basename(currentPath))) || void 0;
		}
		return attachment;
	}
	async reportChildren(children) {
		for (const child of children) if (child.type === "test") {
			await this.vitest.report("onTestCaseReady", child);
			await this.vitest.report("onTestCaseResult", child);
		} else {
			await this.vitest.report("onTestSuiteReady", child);
			await this.reportChildren(child.children);
			await this.vitest.report("onTestSuiteResult", child);
		}
	}
}
function sanitizeFilePath(s) {
	// eslint-disable-next-line no-control-regex
	return s.replace(/[\x00-\x2C\x2E\x2F\x3A-\x40\x5B-\x60\x7B-\x7F]+/g, "-");
}

class GitVCSProvider {
	root;
	async resolveFilesWithGitCommand(args) {
		let result;
		try {
			result = await x("git", args, { nodeOptions: { cwd: this.root } });
		} catch (e) {
			e.message = e.stderr;
			throw e;
		}
		return result.stdout.split("\n").filter((s) => s !== "").map((changedPath) => resolve(this.root, changedPath));
	}
	async findChangedFiles(options) {
		const root = this.root || await this.getRoot(options.root);
		if (!root) throw new GitNotFoundError();
		this.root = root;
		const changedSince = options.changedSince;
		if (typeof changedSince === "string") {
			const [committed, staged, unstaged] = await Promise.all([
				this.getFilesSince(changedSince),
				this.getStagedFiles(),
				this.getUnstagedFiles()
			]);
			return [
				...committed,
				...staged,
				...unstaged
			];
		}
		const [staged, unstaged] = await Promise.all([this.getStagedFiles(), this.getUnstagedFiles()]);
		return [...staged, ...unstaged];
	}
	getFilesSince(hash) {
		return this.resolveFilesWithGitCommand([
			"diff",
			"--name-only",
			`${hash}...HEAD`
		]);
	}
	getStagedFiles() {
		return this.resolveFilesWithGitCommand([
			"diff",
			"--cached",
			"--name-only"
		]);
	}
	getUnstagedFiles() {
		return this.resolveFilesWithGitCommand([
			"ls-files",
			"--other",
			"--modified",
			"--exclude-standard"
		]);
	}
	async getRoot(cwd) {
		const args = ["rev-parse", "--show-cdup"];
		try {
			return resolve(cwd, (await x("git", args, { nodeOptions: { cwd } })).stdout.trim());
		} catch {
			return null;
		}
	}
}

async function loadVCSProvider(runner, vcsProvider) {
	if (typeof vcsProvider === "object" && vcsProvider != null) return wrapVCSProvider(vcsProvider);
	if (!vcsProvider || vcsProvider === "git") return new GitVCSProvider();
	const module = await runner.import(vcsProvider);
	if (!module.default || typeof module.default !== "object" || typeof module.default.findChangedFiles !== "function") throw new Error(`The vcsProvider module '${vcsProvider}' doesn't have a default export with \`findChangedFiles\` method.`);
	return wrapVCSProvider(module.default);
}
function wrapVCSProvider(provider) {
	return { async findChangedFiles(options) {
		return (await provider.findChangedFiles(options)).map((file) => resolve(options.root, file));
	} };
}

class VitestWatcher {
	/**
	* Modules that will be invalidated on the next run.
	*/
	invalidates = /* @__PURE__ */ new Set();
	/**
	* Test files that have changed and need to be rerun.
	*/
	changedTests = /* @__PURE__ */ new Set();
	_onRerun = [];
	constructor(vitest) {
		this.vitest = vitest;
	}
	/**
	* Register a handler that will be called when test files need to be rerun.
	* The callback can receive several files in case the changed file is imported by several test files.
	* Several invocations of this method will add multiple handlers.
	* @internal
	*/
	onWatcherRerun(cb) {
		this._onRerun.push(cb);
		return this;
	}
	close() {
		this.vitest.vite.watcher.close();
	}
	unregisterWatcher = noop;
	registerWatcher() {
		const watcher = this.vitest.vite.watcher;
		if (this.vitest.config.forceRerunTriggers.length) watcher.add(this.vitest.config.forceRerunTriggers);
		watcher.on("change", this.onFileChange);
		watcher.on("unlink", this.onFileDelete);
		watcher.on("add", this.onFileCreate);
		this.unregisterWatcher = () => {
			watcher.off("change", this.onFileChange);
			watcher.off("unlink", this.onFileDelete);
			watcher.off("add", this.onFileCreate);
			this.unregisterWatcher = noop;
		};
		return this;
	}
	scheduleRerun(file) {
		this._onRerun.forEach((cb) => cb(file));
	}
	getTestFilesFromWatcherTrigger(id) {
		if (!this.vitest.config.watchTriggerPatterns) return false;
		let triggered = false;
		this.vitest.config.watchTriggerPatterns.forEach((definition) => {
			const exec = definition.pattern.exec(id);
			if (exec) {
				const files = definition.testsToRun(id, exec);
				if (Array.isArray(files)) {
					triggered = true;
					files.forEach((file) => this.changedTests.add(resolve(this.vitest.config.root, file)));
				} else if (typeof files === "string") {
					triggered = true;
					this.changedTests.add(resolve(this.vitest.config.root, files));
				}
			}
		});
		return triggered;
	}
	onFileChange = (id) => {
		id = slash(id);
		this.vitest.logger.clearHighlightCache(id);
		this.vitest.invalidateFile(id);
		if (this.getTestFilesFromWatcherTrigger(id)) this.scheduleRerun(id);
		else if (this.handleFileChanged(id)) this.scheduleRerun(id);
	};
	onFileDelete = (id) => {
		id = slash(id);
		this.vitest.logger.clearHighlightCache(id);
		this.invalidates.add(id);
		if (this.vitest.state.filesMap.has(id)) {
			this.vitest.projects.forEach((project) => project._removeCachedTestFile(id));
			this.vitest.state.filesMap.delete(id);
			this.vitest.cache.results.removeFromCache(id);
			this.vitest.cache.stats.removeStats(id);
			this.changedTests.delete(id);
			this.vitest.report("onTestRemoved", id);
		}
	};
	onFileCreate = (id) => {
		id = slash(id);
		this.vitest.invalidateFile(id);
		if (this.getTestFilesFromWatcherTrigger(id)) {
			this.scheduleRerun(id);
			return;
		}
		let fileContent;
		const matchingProjects = [];
		this.vitest.projects.forEach((project) => {
			if (project.matchesTestGlob(id, () => fileContent ??= readFileSync(id, "utf-8"))) matchingProjects.push(project);
		});
		if (matchingProjects.length > 0) {
			this.changedTests.add(id);
			this.scheduleRerun(id);
		} else if (this.handleFileChanged(id)) this.scheduleRerun(id);
	};
	handleSetupFile(filepath) {
		let isSetupFile = false;
		this.vitest.projects.forEach((project) => {
			if (!project.config.setupFiles.includes(filepath)) return;
			this.vitest.state.filesMap.forEach((files) => {
				files.forEach((file) => {
					if (file.projectName === project.name) {
						isSetupFile = true;
						this.changedTests.add(file.filepath);
					}
				});
			});
		});
		return isSetupFile;
	}
	/**
	* @returns A value indicating whether rerun is needed (changedTests was mutated)
	*/
	handleFileChanged(filepath) {
		if (this.changedTests.has(filepath) || this.invalidates.has(filepath)) return false;
		if (pm.isMatch(filepath, this.vitest.config.forceRerunTriggers)) {
			this.vitest.state.getFilepaths().forEach((file) => this.changedTests.add(file));
			return true;
		}
		if (this.handleSetupFile(filepath)) return true;
		const projects = this.vitest.projects.filter((project) => {
			return project._getViteEnvironments().some(({ moduleGraph }) => {
				return moduleGraph.getModulesByFile(filepath)?.size;
			});
		});
		if (!projects.length) {
			// if there are no modules it's possible that server was restarted
			// we don't have information about importers anymore, so let's check if the file is a test file at least
			if (this.vitest.state.filesMap.has(filepath) || this.vitest.projects.some((project) => project._isCachedTestFile(filepath))) {
				this.changedTests.add(filepath);
				return true;
			}
			return false;
		}
		const files = [];
		for (const project of projects) {
			const environmentMods = project._getViteEnvironments().map(({ moduleGraph }) => moduleGraph.getModulesByFile(filepath));
			if (!environmentMods.length) continue;
			this.invalidates.add(filepath);
			// one of test files that we already run, or one of test files that we can run
			if (this.vitest.state.filesMap.has(filepath) || project._isCachedTestFile(filepath)) {
				this.changedTests.add(filepath);
				files.push(filepath);
				continue;
			}
			let rerun = false;
			for (const mods of environmentMods) for (const mod of mods || []) mod.importers.forEach((i) => {
				if (!i.file) return;
				if (this.handleFileChanged(i.file)) rerun = true;
			});
			if (rerun) files.push(filepath);
		}
		return !!files.length;
	}
}

const WATCHER_DEBOUNCE = 100;
class Vitest {
	/**
	* Current Vitest version.
	* @example '2.0.0'
	*/
	version = version$1;
	static version = version$1;
	/**
	* The logger instance used to log messages. It's recommended to use this logger instead of `console`.
	* It's possible to override stdout and stderr streams when initiating Vitest.
	* @example
	* new Vitest('test', {
	*   stdout: new Writable(),
	* })
	*/
	logger;
	/**
	* The package installer instance used to install Vitest packages.
	* @example
	* await vitest.packageInstaller.ensureInstalled('@vitest/browser', process.cwd())
	*/
	packageInstaller;
	/**
	* A path to the built Vitest directory. This is usually a folder in `node_modules`.
	*/
	distPath = distDir;
	/**
	* A list of projects that are currently running.
	* If projects were filtered with `--project` flag, they won't appear here.
	*/
	projects = [];
	/**
	* A watcher handler. This is not the file system watcher. The handler only
	* exposes methods to handle changed files.
	*
	* If you have your own watcher, you can use these methods to replicate
	* Vitest behaviour.
	*/
	watcher;
	/**
	* The version control system provider used to detect changed files.
	* This is used with the `--changed` flag to determine which test files to run.
	* By default, Vitest uses Git. You can provide a custom implementation via
	* `experimental.vcsProvider` in your config.
	*/
	vcs;
	/** @internal */ configOverride = {};
	/** @internal */ filenamePattern;
	/** @internal */ runningPromise;
	/** @internal */ closingPromise;
	/** @internal */ cancelPromise;
	/** @internal */ isCancelling = false;
	/** @internal */ coreWorkspaceProject;
	/** @internal */ _browserSessions = new BrowserSessions();
	/** @internal */ _cliOptions = {};
	/** @internal */ reporters = [];
	/** @internal */ runner;
	/** @internal */ _testRun = void 0;
	/** @internal */ _config;
	/** @internal */ _resolver;
	/** @internal */ _fetcher;
	/** @internal */ _fsCache;
	/** @internal */ _tmpDir = join(tmpdir(), nanoid());
	/** @internal */ _traces;
	isFirstRun = true;
	restartsCount = 0;
	specifications;
	pool;
	_vite;
	_state;
	_cache;
	_snapshot;
	_coverageProvider;
	constructor(mode, cliOptions, options = {}) {
		this.mode = mode;
		this._cliOptions = cliOptions;
		this.logger = new Logger(this, options.stdout, options.stderr);
		this.packageInstaller = options.packageInstaller || new VitestPackageInstaller();
		this.specifications = new VitestSpecifications(this);
		this.watcher = new VitestWatcher(this).onWatcherRerun((file) => this.scheduleRerun(file));
	}
	_onRestartListeners = [];
	_onClose = [];
	_onSetServer = [];
	_onCancelListeners = /* @__PURE__ */ new Set();
	_onUserTestsRerun = [];
	_onFilterWatchedSpecification = [];
	/**
	* The global config.
	*/
	get config() {
		assert(this._config, "config");
		return this._config;
	}
	/**
	* Global Vite's dev server instance.
	*/
	get vite() {
		assert(this._vite, "vite", "server");
		return this._vite;
	}
	/**
	* The global test state manager.
	* @experimental The State API is experimental and not subject to semver.
	*/
	get state() {
		assert(this._state, "state");
		return this._state;
	}
	/**
	* The global snapshot manager. You can access the current state on `snapshot.summary`.
	*/
	get snapshot() {
		assert(this._snapshot, "snapshot", "snapshot manager");
		return this._snapshot;
	}
	/**
	* Test results and test file stats cache. Primarily used by the sequencer to sort tests.
	*/
	get cache() {
		assert(this._cache, "cache");
		return this._cache;
	}
	/** @internal */
	async _setServer(options, server) {
		this.watcher.unregisterWatcher();
		clearTimeout(this._rerunTimer);
		this.restartsCount += 1;
		this.pool?.close?.();
		this.pool = void 0;
		this.closingPromise = void 0;
		this.projects = [];
		this.runningPromise = void 0;
		this.coreWorkspaceProject = void 0;
		this.specifications.clearCache();
		this._coverageProvider = void 0;
		this._onUserTestsRerun = [];
		this._vite = server;
		const resolved = resolveConfig(this, options, server.config);
		this._config = resolved;
		this._state = new StateManager({ onUnhandledError: resolved.onUnhandledError });
		this._cache = new VitestCache(this.logger);
		this._snapshot = new SnapshotManager({ ...resolved.snapshotOptions });
		this._testRun = new TestRun(this);
		const otelSdkPath = resolved.experimental.openTelemetry?.sdkPath;
		this._traces = new Traces({
			enabled: !!resolved.experimental.openTelemetry?.enabled,
			sdkPath: otelSdkPath,
			watchMode: resolved.watch
		});
		if (this.config.watch) this.watcher.registerWatcher();
		this._resolver = new VitestResolver(server.config.cacheDir, resolved);
		this._fsCache = new FileSystemModuleCache(this);
		this._fetcher = createFetchModuleFunction(this._resolver, this._config, this._fsCache, this._traces, this._tmpDir);
		const environment = server.environments.__vitest__;
		this.runner = resolved.experimental.viteModuleRunner === false ? new NativeModuleRunner(resolved.root) : new ServerModuleRunner(environment, this._fetcher, resolved);
		// patch default ssr runnable environment so third-party usage of `runner.import`
		// still works with Vite's external/noExternal configuration.
		const ssrEnvironment = server.environments.ssr;
		if (isRunnableDevEnvironment(ssrEnvironment)) {
			const ssrRunner = new ServerModuleRunner(ssrEnvironment, this._fetcher, resolved);
			Object.defineProperty(ssrEnvironment, "runner", {
				value: ssrRunner,
				writable: true,
				configurable: true
			});
		}
		this.vcs = await loadVCSProvider(this.runner, resolved.experimental.vcsProvider);
		if (this.config.watch) {
			// hijack server restart
			const serverRestart = server.restart;
			server.restart = async (...args) => {
				await Promise.all(this._onRestartListeners.map((fn) => fn()));
				this.report("onServerRestart");
				await this.close();
				await serverRestart(...args);
			};
			// since we set `server.hmr: false`, Vite does not auto restart itself
			server.watcher.on("change", async (file) => {
				file = normalize(file);
				if (file === server.config.configFile || this.projects.some((p) => p.vite.config.configFile === file)) {
					await Promise.all(this._onRestartListeners.map((fn) => fn("config")));
					this.report("onServerRestart", "config");
					await this.close();
					await serverRestart();
				}
			});
		}
		this.cache.results.setConfig(resolved.root, resolved.cache);
		try {
			await this.cache.results.readFromCache();
		} catch {}
		const projects = await this.resolveProjects(this._cliOptions);
		this.projects = projects;
		await Promise.all(projects.flatMap((project) => {
			return project.vite.config.getSortedPluginHooks("configureVitest").map((hook) => hook({
				project,
				vitest: this,
				injectTestProjects: this.injectTestProject,
				experimental_defineCacheKeyGenerator: (callback) => this._fsCache.defineCacheKeyGenerator(callback)
			}));
		}));
		if (this._cliOptions.browser?.enabled) {
			if (!this.projects.filter((p) => p.config.browser.enabled).length) throw new Error(`Vitest received --browser flag, but no project had a browser configuration.`);
		}
		if (!this.projects.length) {
			const filter = toArray(resolved.project).join("\", \"");
			if (filter) throw new Error(`No projects matched the filter "${filter}".`);
			else {
				let error = `Vitest wasn't able to resolve any project.`;
				if (this.config.browser.enabled && !this.config.browser.instances?.length) error += ` Please, check that you specified the "browser.instances" option.`;
				throw new Error(error);
			}
		}
		if (!this.coreWorkspaceProject) this.coreWorkspaceProject = TestProject._createBasicProject(this);
		if (this.config.testNamePattern) this.configOverride.testNamePattern = this.config.testNamePattern;
		// populate will merge all configs into every project,
		// we don't want that when just listing tags
		if (!this.config.listTags) populateProjectsTags(this.coreWorkspaceProject, this.projects);
		this.reporters = resolved.mode === "benchmark" ? await createBenchmarkReporters(toArray(resolved.benchmark?.reporters), this.runner) : await createReporters(resolved.reporters, this);
		await this._fsCache.ensureCacheIntegrity();
		await Promise.all([...this._onSetServer.map((fn) => fn()), this._traces.waitInit()]);
	}
	/** @internal */
	get coverageProvider() {
		if (this.configOverride.coverage?.enabled === false) return null;
		return this._coverageProvider;
	}
	async listTags() {
		const listTags = this.config.listTags;
		if (typeof listTags === "boolean") this.logger.printTags();
		else if (listTags === "json") if (![this.getRootProject(), ...this.projects].some((p) => p.config.tags && p.config.tags.length > 0)) {
			process.exitCode = 1;
			this.logger.printNoTestTagsFound();
		} else {
			const manifest = {
				tags: this.config.tags,
				projects: this.projects.filter((p) => p !== this.coreWorkspaceProject).map((p) => ({
					name: p.name,
					tags: p.config.tags
				}))
			};
			this.logger.log(JSON.stringify(manifest, null, 2));
		}
		else throw new Error(`Unknown value for "test.listTags": ${listTags}`);
	}
	async enableCoverage() {
		this.configOverride.coverage = {};
		this.configOverride.coverage.enabled = true;
		await this.createCoverageProvider();
		await this.coverageProvider?.onEnabled?.();
		// onFileTransform is the only thing that affects hash
		if (this.coverageProvider?.onFileTransform) this.clearAllCachePaths();
	}
	disableCoverage() {
		this.configOverride.coverage ??= {};
		this.configOverride.coverage.enabled = false;
		// onFileTransform is the only thing that affects hash
		if (this.coverageProvider?.onFileTransform) this.clearAllCachePaths();
	}
	clearAllCachePaths() {
		this.projects.forEach(({ vite, browser }) => {
			[...Object.values(vite.environments), ...Object.values(browser?.vite.environments || {})].forEach((environment) => this._fsCache.invalidateAllCachePaths(environment));
		});
	}
	_coverageOverrideCache = /* @__PURE__ */ new WeakMap();
	/** @internal */
	get _coverageOptions() {
		if (!this.configOverride.coverage) return this.config.coverage;
		if (!this._coverageOverrideCache.has(this.configOverride.coverage)) {
			const options = deepMerge(deepClone(this.config.coverage), this.configOverride.coverage);
			this._coverageOverrideCache.set(this.configOverride.coverage, options);
		}
		return this._coverageOverrideCache.get(this.configOverride.coverage);
	}
	/**
	* Inject new test projects into the workspace.
	* @param config Glob, config path or a custom config options.
	* @returns An array of new test projects. Can be empty if the name was filtered out.
	*/
	injectTestProject = async (config) => {
		const currentNames = new Set(this.projects.map((p) => p.name));
		const projects = await resolveProjects(this, this._cliOptions, void 0, Array.isArray(config) ? config : [config], currentNames);
		this.projects.push(...projects);
		return projects;
	};
	/**
	* Provide a value to the test context. This value will be available to all tests with `inject`.
	*/
	provide = (key, value) => {
		this.getRootProject().provide(key, value);
	};
	/**
	* Get global provided context.
	*/
	getProvidedContext() {
		return this.getRootProject().getProvidedContext();
	}
	/** @internal */
	_ensureRootProject() {
		if (this.coreWorkspaceProject) return this.coreWorkspaceProject;
		this.coreWorkspaceProject = TestProject._createBasicProject(this);
		return this.coreWorkspaceProject;
	}
	/**
	* Return project that has the root (or "global") config.
	*/
	getRootProject() {
		if (!this.coreWorkspaceProject) throw new Error(`Root project is not initialized. This means that the Vite server was not established yet and the the workspace config is not resolved.`);
		return this.coreWorkspaceProject;
	}
	get serializedRootConfig() {
		return {
			...this.getRootProject().serializedConfig,
			projects: this.projects.map((project) => project.serializedConfig)
		};
	}
	getProjectByName(name) {
		const project = this.projects.find((p) => p.name === name) || this.coreWorkspaceProject || this.projects[0];
		if (!project) throw new Error(`Project "${name}" was not found.`);
		return project;
	}
	/**
	* Import a file using Vite module runner. The file will be transformed by Vite and executed in a separate context.
	* @param moduleId The ID of the module in Vite module graph
	*/
	import(moduleId) {
		return this.runner.import(moduleId);
	}
	/**
	* Creates a coverage provider if `coverage` is enabled in the config.
	*/
	async createCoverageProvider() {
		if (this._coverageProvider) return this._coverageProvider;
		const coverageProvider = await this.initCoverageProvider();
		if (coverageProvider) await coverageProvider.clean(this._coverageOptions.clean);
		return coverageProvider || null;
	}
	async resolveProjects(cliOptions) {
		const names = /* @__PURE__ */ new Set();
		if (this.config.projects) return resolveProjects(this, cliOptions, void 0, this.config.projects, names);
		if ("workspace" in this.config) throw new Error("The `test.workspace` option was removed in Vitest 4. Please, migrate to `test.projects` instead. See https://vitest.dev/guide/projects for examples.");
		// user can filter projects with --project flag, `getDefaultTestProject`
		// returns the project only if it matches the filter
		const project = getDefaultTestProject(this);
		if (!project) return [];
		return resolveBrowserProjects(this, new Set([project.name]), [project]);
	}
	/**
	* Glob test files in every project and create a TestSpecification for each file and pool.
	* @param filters String filters to match the test files.
	*/
	async globTestSpecifications(filters = []) {
		return this.specifications.globTestSpecifications(filters);
	}
	async initCoverageProvider() {
		if (this._coverageProvider != null) return;
		this._coverageProvider = await getCoverageProvider(this.configOverride.coverage ? this.getRootProject().serializedConfig.coverage : this.config.coverage, this.runner);
		if (this._coverageProvider) {
			await this._coverageProvider.initialize(this);
			this.config.coverage = this._coverageProvider.resolveOptions();
		}
		return this._coverageProvider;
	}
	/**
	* Deletes all Vitest caches, including `experimental.fsModuleCache`.
	* @experimental
	*/
	async experimental_clearCache() {
		await this.cache.results.clearCache();
		await this._fsCache.clearCache();
	}
	/**
	* Merge reports from multiple runs located in the specified directory (value from `--merge-reports` if not specified).
	*/
	async mergeReports(directory) {
		return this._traces.$("vitest.merge_reports", async () => {
			if (this.reporters.some((r) => r instanceof BlobReporter)) throw new Error("Cannot merge reports when `--reporter=blob` is used. Remove blob reporter from the config first.");
			const { files, errors, coverages, executionTimes } = await readBlobs(this.version, directory || this.config.mergeReports, this.projects);
			this.state.blobs = {
				files,
				errors,
				coverages,
				executionTimes
			};
			await this.report("onInit", this);
			const specifications = [];
			for (const file of files) {
				const specification = this.getProjectByName(file.projectName || "").createSpecification(file.filepath, void 0, file.pool);
				specifications.push(specification);
			}
			await this._testRun.start(specifications);
			await this.coverageProvider?.onTestRunStart?.();
			for (const file of files) await this._reportFileTask(file);
			// append errors thrown during reporter event replay during merge reports
			const unhandledErrors = [...errors, ...this.state.getUnhandledErrors()];
			this._checkUnhandledErrors(unhandledErrors);
			await this._testRun.end(specifications, unhandledErrors);
			await this.initCoverageProvider();
			await this.coverageProvider?.mergeReports?.(coverages);
			return {
				testModules: this.state.getTestModules(),
				unhandledErrors: this.state.getUnhandledErrors()
			};
		});
	}
	/**
	* Returns the seed, if tests are running in a random order.
	*/
	getSeed() {
		return this.config.sequence.seed ?? null;
	}
	/** @internal */
	async _reportFileTask(file) {
		const project = this.getProjectByName(file.projectName || "");
		await this._testRun.enqueued(project, file).catch((error) => {
			this.state.catchError(serializeValue(error), "Unhandled Reporter Error");
		});
		await this._testRun.collected(project, [file]).catch((error) => {
			this.state.catchError(serializeValue(error), "Unhandled Reporter Error");
		});
		const logs = [];
		const { packs, events } = convertTasksToEvents(file, (task) => {
			if (task.logs) logs.push(...task.logs);
		});
		logs.sort((log1, log2) => log1.time - log2.time);
		for (const log of logs) await this._testRun.log(log).catch((error) => {
			this.state.catchError(serializeValue(error), "Unhandled Reporter Error");
		});
		await this._testRun.updated(packs, events).catch((error) => {
			this.state.catchError(serializeValue(error), "Unhandled Reporter Error");
		});
	}
	async collect(filters, options) {
		return this._traces.$("vitest.collect", async (collectSpan) => {
			const filenamePattern = filters && filters?.length > 0 ? filters : [];
			collectSpan.setAttribute("vitest.collect.filters", filenamePattern);
			const files = await this._traces.$("vitest.config.resolve_include_glob", async () => {
				const specifications = await this.specifications.getRelevantTestSpecifications(filters);
				collectSpan.setAttribute("vitest.collect.specifications", specifications.map((s) => {
					const relativeModuleId = relative(s.project.config.root, s.moduleId);
					if (s.project.name) return `|${s.project.name}| ${relativeModuleId}`;
					return relativeModuleId;
				}));
				return specifications;
			});
			// if run with --changed, don't exit if no tests are found
			if (!files.length) return {
				testModules: [],
				unhandledErrors: []
			};
			if (options?.staticParse) return {
				testModules: await this.experimental_parseSpecifications(files, { concurrency: options.staticParseConcurrency }),
				unhandledErrors: []
			};
			return this.collectTests(files);
		});
	}
	/**
	* Returns the list of test files that match the config and filters.
	* @param filters String filters to match the test files
	*/
	getRelevantTestSpecifications(filters) {
		return this.specifications.getRelevantTestSpecifications(filters);
	}
	/**
	* Initialize reporters, the coverage provider, and run tests.
	* This method can throw an error:
	*   - `FilesNotFoundError` if no tests are found
	*   - `GitNotFoundError` if `--related` flag is used, but git repository is not initialized
	*   - `Error` from the user reporters
	* @param filters String filters to match the test files
	*/
	async start(filters) {
		return this._traces.$("vitest.start", { context: this._traces.getContextFromEnv(process.env) }, async (startSpan) => {
			startSpan.setAttributes({ config: this.vite.config.configFile });
			try {
				await this._traces.$("vitest.coverage.init", async () => {
					await this.initCoverageProvider();
					await this.coverageProvider?.clean(this._coverageOptions.clean);
				});
			} finally {
				await this.report("onInit", this);
			}
			this.filenamePattern = filters && filters?.length > 0 ? filters : void 0;
			startSpan.setAttribute("vitest.start.filters", this.filenamePattern || []);
			let specifications = await this._traces.$("vitest.config.resolve_include_glob", async () => {
				const specifications = await this.specifications.getRelevantTestSpecifications(filters);
				startSpan.setAttribute("vitest.start.specifications", specifications.map((s) => {
					const relativeModuleId = relative(s.project.config.root, s.moduleId);
					if (s.project.name) return `|${s.project.name}| ${relativeModuleId}`;
					return relativeModuleId;
				}));
				return specifications;
			});
			if (this.config.experimental.preParse) {
				// This populates specification.testModule with parsed information
				await this.experimental_parseSpecifications(specifications);
				specifications = specifications.filter(({ testModule }) => {
					return !testModule || testModule.task.mode !== "skip";
				});
			}
			// if run with --changed, don't exit if no tests are found
			if (!specifications.length) {
				await this._traces.$("vitest.test_run", async () => {
					await this._testRun.start([]);
					await this.coverageProvider?.onTestRunStart?.();
					const coverage = await this.coverageProvider?.generateCoverage?.({ allTestsRun: true });
					await this._testRun.end([], [], coverage);
					// Report coverage for uncovered files
					await this.reportCoverage(coverage, true);
				});
				if (!this.config.watch || !(this.config.changed || this.config.related?.length)) throw new FilesNotFoundError(this.mode);
			}
			let testModules = {
				testModules: [],
				unhandledErrors: []
			};
			if (specifications.length) {
				// populate once, update cache on watch
				await this.cache.stats.populateStats(this.config.root, specifications);
				testModules = await this.runFiles(specifications, true);
			}
			if (this.config.watch) await this.report("onWatcherStart");
			return testModules;
		});
	}
	/**
	* @deprecated use `standalone()` instead
	*/
	init() {
		this.logger.deprecate("`vitest.init()` is deprecated. Use `vitest.standalone()` instead.");
		return this.standalone();
	}
	/**
	* Initialize reporters and the coverage provider. This method doesn't run any tests.
	* If the `--watch` flag is provided, Vitest will still run changed tests even if this method was not called.
	*/
	async standalone() {
		await this._traces.$("vitest.init", async () => {
			try {
				await this.initCoverageProvider();
				await this.coverageProvider?.clean(this._coverageOptions.clean);
			} finally {
				await this.report("onInit", this);
			}
			// populate test files cache so watch mode can trigger a file rerun
			await this.globTestSpecifications();
			await Promise.all(this.projects.map((project) => project._standalone()));
			if (this.config.watch) await this.report("onWatcherStart");
		});
	}
	/**
	* If there is a test run happening, returns a promise that will
	* resolve when the test run is finished.
	*/
	async waitForTestRunEnd() {
		if (!this.runningPromise) return;
		await this.runningPromise;
	}
	/**
	* Get test specifications associated with the given module. If module is not a test file, an empty array is returned.
	*
	* **Note:** this method relies on a cache generated by `globTestSpecifications`. If the file was not processed yet, use `project.matchesGlobPattern` instead.
	* @param moduleId The module ID to get test specifications for.
	*/
	getModuleSpecifications(moduleId) {
		return this.specifications.getModuleSpecifications(moduleId);
	}
	/**
	* Vitest automatically caches test specifications for each file. This method clears the cache for the given file or the whole cache altogether.
	*/
	clearSpecificationsCache(moduleId) {
		this.specifications.clearCache(moduleId);
		if (!moduleId) this.projects.forEach((project) => {
			project.testFilesList = null;
		});
	}
	/**
	* Run tests for the given test specifications. This does not trigger `onWatcher*` events.
	* @param specifications A list of specifications to run.
	* @param allTestsRun Indicates whether all tests were run. This only matters for coverage.
	*/
	runTestSpecifications(specifications, allTestsRun = false) {
		specifications.forEach((spec) => this.specifications.ensureSpecificationCached(spec));
		return this.runFiles(specifications, allTestsRun);
	}
	/**
	* Runs tests for the given file paths. This does not trigger `onWatcher*` events.
	* @param filepaths A list of file paths to run tests for.
	* @param allTestsRun Indicates whether all tests were run. This only matters for coverage.
	*/
	async runTestFiles(filepaths, allTestsRun = false) {
		const specifications = await this.specifications.getRelevantTestSpecifications(filepaths);
		if (!specifications.length) return {
			testModules: [],
			unhandledErrors: []
		};
		return this.runFiles(specifications, allTestsRun);
	}
	/**
	* Rerun files and trigger `onWatcherRerun`, `onWatcherStart` and `onTestsRerun` events.
	* @param specifications A list of specifications to run.
	* @param allTestsRun Indicates whether all tests were run. This only matters for coverage.
	*/
	async rerunTestSpecifications(specifications, allTestsRun = false) {
		const files = specifications.map((spec) => spec.moduleId);
		await Promise.all([this.report("onWatcherRerun", files, "rerun test"), ...this._onUserTestsRerun.map((fn) => fn(specifications))]);
		const result = await this.runTestSpecifications(specifications, allTestsRun);
		await this.report("onWatcherStart", this.state.getFiles(files));
		return result;
	}
	async runFiles(specs, allTestsRun) {
		return this._traces.$("vitest.test_run", async () => {
			await this._testRun.start(specs);
			await this.coverageProvider?.onTestRunStart?.();
			// previous run
			await this.cancelPromise;
			await this.runningPromise;
			this._onCancelListeners.clear();
			this.isCancelling = false;
			// schedule the new run
			this.runningPromise = (async () => {
				try {
					if (!this.pool) this.pool = createPool(this);
					const invalidates = Array.from(this.watcher.invalidates);
					this.watcher.invalidates.clear();
					this.snapshot.clear();
					this.state.clearErrors();
					if (!this.isFirstRun && this._coverageOptions.cleanOnRerun) await this.coverageProvider?.clean();
					await this.initializeGlobalSetup(specs);
					try {
						await this.pool.runTests(specs, invalidates);
					} catch (err) {
						this.state.catchError(err, "Unhandled Error");
					}
					const files = this.state.getFiles();
					this.cache.results.updateResults(files);
					try {
						await this.cache.results.writeToCache();
					} catch {}
					return {
						testModules: this.state.getTestModules(),
						unhandledErrors: this.state.getUnhandledErrors()
					};
				} finally {
					const coverage = await this.coverageProvider?.generateCoverage({ allTestsRun });
					const errors = this.state.getUnhandledErrors();
					this._checkUnhandledErrors(errors);
					await this._testRun.end(specs, errors, coverage);
					await this.reportCoverage(coverage, allTestsRun);
				}
			})().finally(() => {
				this.runningPromise = void 0;
				this.isFirstRun = false;
				// all subsequent runs will treat this as a fresh run
				this.config.changed = false;
				this.config.related = void 0;
			});
			return await this.runningPromise;
		});
	}
	/**
	* Returns module's diagnostic. If `testModule` is not provided, `selfTime` and `totalTime` will be aggregated across all tests.
	*
	* If the module was not transformed or executed, the diagnostic will be empty.
	* @experimental
	* @see {@link https://vitest.dev/api/advanced/vitest#getsourcemodulediagnostic}
	*/
	async experimental_getSourceModuleDiagnostic(moduleId, testModule) {
		if (testModule) {
			const viteEnvironment = testModule.viteEnvironment;
			// if there is no viteEnvironment, it means the file did not run yet
			if (!viteEnvironment) return {
				modules: [],
				untrackedModules: []
			};
			const moduleLocations = await collectSourceModulesLocations(moduleId, viteEnvironment.moduleGraph);
			return collectModuleDurationsDiagnostic(moduleId, this.state, moduleLocations, testModule);
		}
		const environments = this.projects.flatMap((p) => {
			return Object.values(p.vite.environments);
		});
		const aggregatedLocationsResult = await Promise.all(environments.map((environment) => collectSourceModulesLocations(moduleId, environment.moduleGraph)));
		return collectModuleDurationsDiagnostic(moduleId, this.state, aggregatedLocationsResult.reduce((acc, locations) => {
			if (locations) {
				acc.modules.push(...locations.modules);
				acc.untracked.push(...locations.untracked);
			}
			return acc;
		}, {
			modules: [],
			untracked: []
		}));
	}
	async experimental_parseSpecifications(specifications, options) {
		if (this.mode !== "test") throw new Error(`The \`experimental_parseSpecifications\` does not support "${this.mode}" mode.`);
		const limit = limitConcurrency(options?.concurrency ?? (typeof nodeos__default.availableParallelism === "function" ? nodeos__default.availableParallelism() : nodeos__default.cpus().length));
		// Phase 1: parse all files in parallel (without mode interpretation)
		const results = await Promise.all(specifications.map((specification) => limit(async () => {
			return {
				file: await astCollectTests(specification.project, specification.moduleId).catch((error) => {
					return createFailedFileTask(specification.project, specification.moduleId, error);
				}),
				specification
			};
		})));
		const tagsFilter = this.config.tagsFilter ? createTagsFilter(this.config.tagsFilter, this.config.tags) : void 0;
		// Phase 2: cross-file .only resolution
		const globalHasOnly = results.some(({ file }) => someTasksAreOnly(file));
		for (const { file, specification } of results) {
			const config = specification.project.config;
			interpretTaskModes(file, config.testNamePattern, specification.testLines, specification.testIds, tagsFilter, globalHasOnly, false, config.allowOnly);
			this.state.collectFiles(specification.project, [file]);
		}
		return results.map(({ file }) => this.state.getReportedEntity(file));
	}
	async experimental_parseSpecification(specification) {
		if (this.mode !== "test") throw new Error(`The \`experimental_parseSpecification\` does not support "${this.mode}" mode.`);
		const file = await astCollectTests(specification.project, specification.moduleId).catch((error) => {
			return createFailedFileTask(specification.project, specification.moduleId, error);
		});
		const config = specification.project.config;
		const hasOnly = someTasksAreOnly(file);
		const tagsFilter = this.config.tagsFilter ? createTagsFilter(this.config.tagsFilter, this.config.tags) : void 0;
		interpretTaskModes(file, config.testNamePattern, specification.testLines, specification.testIds, tagsFilter, hasOnly, false, config.allowOnly);
		// register in state, so it can be retrieved by "getReportedEntity"
		this.state.collectFiles(specification.project, [file]);
		return this.state.getReportedEntity(file);
	}
	/**
	* Collect tests in specified modules. Vitest will run the files to collect tests.
	* @param specifications A list of specifications to run.
	*/
	async collectTests(specifications) {
		const filepaths = specifications.map((spec) => spec.moduleId);
		this.state.collectPaths(filepaths);
		// previous run
		await this.cancelPromise;
		await this.runningPromise;
		this._onCancelListeners.clear();
		this.isCancelling = false;
		// schedule the new run
		this.runningPromise = (async () => {
			if (!this.pool) this.pool = createPool(this);
			const invalidates = Array.from(this.watcher.invalidates);
			this.watcher.invalidates.clear();
			this.snapshot.clear();
			this.state.clearErrors();
			await this.initializeGlobalSetup(specifications);
			try {
				await this.pool.collectTests(specifications, invalidates);
			} catch (err) {
				this.state.catchError(err, "Unhandled Error");
			}
			// can only happen if there was a syntax error in describe block
			// or there was an error importing a file
			if (hasFailed(this.state.getFiles())) process.exitCode = 1;
			return {
				testModules: this.state.getTestModules(),
				unhandledErrors: this.state.getUnhandledErrors()
			};
		})().finally(() => {
			this.runningPromise = void 0;
			// all subsequent runs will treat this as a fresh run
			this.config.changed = false;
			this.config.related = void 0;
		});
		return await this.runningPromise;
	}
	/**
	* Gracefully cancel the current test run. Vitest will wait until all running tests are finished before cancelling.
	*/
	async cancelCurrentRun(reason) {
		this.isCancelling = true;
		this.cancelPromise = Promise.all([...this._onCancelListeners].map((listener) => listener(reason)));
		await this.cancelPromise.finally(() => this.cancelPromise = void 0);
		await this.runningPromise;
	}
	/** @internal */
	async _initBrowserServers() {
		await Promise.all(this.projects.map((p) => p._initBrowserServer()));
	}
	async initializeGlobalSetup(paths) {
		const projects = new Set(paths.map((spec) => spec.project));
		const coreProject = this.getRootProject();
		if (!projects.has(coreProject)) projects.add(coreProject);
		for (const project of projects) await project._initializeGlobalSetup();
	}
	/** @internal */
	async rerunFiles(files = this.state.getFilepaths(), trigger, allTestsRun = true, resetTestNamePattern = false) {
		if (resetTestNamePattern) this.configOverride.testNamePattern = void 0;
		if (this.filenamePattern) {
			const filteredFiles = await this.globTestSpecifications(this.filenamePattern);
			files = files.filter((file) => filteredFiles.some((f) => f.moduleId === file));
		}
		const specifications = files.flatMap((file) => this.getModuleSpecifications(file));
		await Promise.all([this.report("onWatcherRerun", files, trigger), ...this._onUserTestsRerun.map((fn) => fn(specifications))]);
		const testResult = await this.runFiles(specifications, allTestsRun);
		await this.report("onWatcherStart", this.state.getFiles(files));
		return testResult;
	}
	/** @internal */
	async rerunTask(id) {
		const task = this.state.idMap.get(id);
		if (!task) throw new Error(`Task ${id} was not found`);
		const reportedTask = this.state.getReportedEntityById(id);
		if (!reportedTask) throw new Error(`Test specification for task ${id} was not found`);
		const specifications = [reportedTask.toTestSpecification()];
		await Promise.all([this.report("onWatcherRerun", [task.file.filepath], "tasks" in task ? "rerun suite" : "rerun test"), ...this._onUserTestsRerun.map((fn) => fn(specifications))]);
		await this.runFiles(specifications, false);
		await this.report("onWatcherStart", ["module" in reportedTask ? reportedTask.module.task : reportedTask.task]);
	}
	/** @internal */
	async changeProjectName(pattern) {
		if (pattern === "") this.configOverride.project = void 0;
		else this.configOverride.project = [pattern];
		await this.vite.restart();
	}
	/** @internal */
	async changeNamePattern(pattern, files = this.state.getFilepaths(), trigger) {
		// Empty test name pattern should reset filename pattern as well
		if (pattern === "") this.filenamePattern = void 0;
		const testNamePattern = pattern ? new RegExp(pattern) : void 0;
		this.configOverride.testNamePattern = testNamePattern;
		// filter only test files that have tests matching the pattern
		if (testNamePattern) files = files.filter((filepath) => {
			const files = this.state.getFiles([filepath]);
			return !files.length || files.some((file) => {
				const tasks = getTasks(file);
				return !tasks.length || tasks.some((task) => testNamePattern.test(task.name));
			});
		});
		await this.rerunFiles(files, trigger, pattern === "");
	}
	/** @internal */
	async changeFilenamePattern(pattern, files = this.state.getFilepaths()) {
		this.filenamePattern = pattern ? [pattern] : [];
		const trigger = this.filenamePattern.length ? "change filename pattern" : "reset filename pattern";
		await this.rerunFiles(files, trigger, pattern === "");
	}
	/** @internal */
	async rerunFailed() {
		await this.rerunFiles(this.state.getFailedFilepaths(), "rerun failed", false);
	}
	/**
	* Update snapshots in specified files. If no files are provided, it will update files with failed tests and obsolete snapshots.
	* @param files The list of files on the file system
	*/
	async updateSnapshot(files) {
		// default to failed files
		files = files || [...this.state.getFailedFilepaths(), ...this.snapshot.summary.uncheckedKeysByFile.map((s) => s.filePath)];
		this.enableSnapshotUpdate();
		try {
			return await this.rerunFiles(files, "update snapshot", false);
		} finally {
			this.resetSnapshotUpdate();
		}
	}
	/**
	* Enable the mode that allows updating snapshots when running tests.
	* This method doesn't run any tests.
	*
	* Every test that runs after this method is called will update snapshots.
	* To disable the mode, call `resetSnapshotUpdate`.
	*/
	enableSnapshotUpdate() {
		this.configOverride.snapshotOptions = {
			updateSnapshot: "all",
			snapshotEnvironment: null
		};
		this.snapshot.options.updateSnapshot = "all";
	}
	/**
	* Disable the mode that allows updating snapshots when running tests.
	*/
	resetSnapshotUpdate() {
		delete this.configOverride.snapshotOptions;
		this.snapshot.options.updateSnapshot = this.config.snapshotOptions.updateSnapshot;
	}
	/**
	* Set the global test name pattern to a regexp.
	* This method doesn't run any tests.
	*/
	setGlobalTestNamePattern(pattern) {
		if (pattern instanceof RegExp) this.configOverride.testNamePattern = pattern;
		else this.configOverride.testNamePattern = pattern ? new RegExp(pattern) : void 0;
	}
	/**
	* Returns the regexp used for the global test name pattern.
	*/
	getGlobalTestNamePattern() {
		if (this.configOverride.testNamePattern != null) return this.configOverride.testNamePattern;
		return this.config.testNamePattern;
	}
	/**
	* Resets the global test name pattern. This method doesn't run any tests.
	*/
	resetGlobalTestNamePattern() {
		this.configOverride.testNamePattern = void 0;
	}
	_rerunTimer;
	async scheduleRerun(triggerId) {
		const currentCount = this.restartsCount;
		clearTimeout(this._rerunTimer);
		await this.cancelPromise;
		await this.runningPromise;
		clearTimeout(this._rerunTimer);
		// server restarted
		if (this.restartsCount !== currentCount) return;
		this._rerunTimer = setTimeout(async () => {
			if (this.watcher.changedTests.size === 0) {
				this.watcher.invalidates.clear();
				return;
			}
			// server restarted
			if (this.restartsCount !== currentCount) return;
			this.isFirstRun = false;
			this.snapshot.clear();
			let files = Array.from(this.watcher.changedTests);
			if (this.filenamePattern) {
				const filteredFiles = await this.globTestSpecifications(this.filenamePattern);
				files = files.filter((file) => filteredFiles.some((f) => f.moduleId === file));
				// A file that does not match the current filename pattern was changed
				if (files.length === 0) return;
			}
			this.watcher.changedTests.clear();
			const triggerLabel = relative(this.config.root, triggerId);
			// get file specifications and filter them if needed
			const specifications = files.flatMap((file) => this.getModuleSpecifications(file)).filter((specification) => {
				if (this._onFilterWatchedSpecification.length === 0) return true;
				return this._onFilterWatchedSpecification.every((fn) => fn(specification));
			});
			await Promise.all([this.report("onWatcherRerun", files, triggerLabel), ...this._onUserTestsRerun.map((fn) => fn(specifications))]);
			await this.runFiles(specifications, false);
			await this.report("onWatcherStart", this.state.getFiles(files));
		}, WATCHER_DEBOUNCE);
	}
	/**
	* Invalidate a file in all projects.
	*/
	invalidateFile(filepath) {
		this.projects.forEach(({ vite, browser }) => {
			[...Object.values(vite.environments), ...Object.values(browser?.vite.environments || {})].forEach((environment) => {
				const { moduleGraph } = environment;
				const modules = moduleGraph.getModulesByFile(filepath);
				if (!modules) return;
				modules.forEach((module) => {
					moduleGraph.invalidateModule(module);
					this._fsCache.invalidateCachePath(environment, module.id);
				});
			});
		});
	}
	/** @internal */
	_checkUnhandledErrors(errors) {
		if (errors.length && !this.config.dangerouslyIgnoreUnhandledErrors) process.exitCode = 1;
	}
	async reportCoverage(coverage, allTestsRun) {
		if (this.state.getCountOfFailedTests() > 0) {
			await this.coverageProvider?.onTestFailure?.();
			if (!this._coverageOptions.reportOnFailure) return;
		}
		if (this.coverageProvider) {
			await this.coverageProvider.reportCoverage(coverage, { allTestsRun });
			// notify builtin ui and html reporter after coverage html is generated
			for (const reporter of this.reporters) if ("onFinishedReportCoverage" in reporter && typeof reporter.onFinishedReportCoverage === "function") await reporter.onFinishedReportCoverage();
		}
	}
	/**
	* Closes all projects and their associated resources.
	* This can only be called once; the closing promise is cached until the server restarts.
	*/
	async close() {
		if (!this.closingPromise) this.closingPromise = (async () => {
			const teardownProjects = [...this.projects];
			if (this.coreWorkspaceProject && !teardownProjects.includes(this.coreWorkspaceProject)) teardownProjects.push(this.coreWorkspaceProject);
			const teardownErrors = [];
			// do teardown before closing the server
			for (const project of teardownProjects.reverse()) await project._teardownGlobalSetup().catch((error) => {
				teardownErrors.push(error);
			});
			const closePromises = this.projects.map((w) => w.close());
			// close the core workspace server only once
			// it's possible that it's not initialized at all because it's not running any tests
			if (this.coreWorkspaceProject && !this.projects.includes(this.coreWorkspaceProject)) closePromises.push(this.coreWorkspaceProject.close().then(() => this._vite = void 0));
			if (this.pool) closePromises.push((async () => {
				await this.pool?.close?.();
				this.pool = void 0;
			})());
			closePromises.push(...this._onClose.map((fn) => fn()));
			await Promise.allSettled(closePromises).then((results) => {
				[...results, ...teardownErrors.map((r) => ({
					status: "rejected",
					reason: r
				}))].forEach((r) => {
					if (r.status === "rejected") this.logger.error("error during close", r.reason);
				});
			});
			await this._traces?.finish();
		})();
		return this.closingPromise;
	}
	/**
	* Closes all projects and exit the process
	* @param force If true, the process will exit immediately after closing the projects.
	*/
	async exit(force = false) {
		setTimeout(() => {
			this.report("onProcessTimeout").then(() => {
				console.warn(`close timed out after ${this.config.teardownTimeout}ms`);
				if (!this.pool) {
					const runningServers = [this._vite, ...this.projects.map((p) => p._vite)].filter(Boolean).length;
					if (runningServers === 1) console.warn("Tests closed successfully but something prevents Vite server from exiting");
					else if (runningServers > 1) console.warn(`Tests closed successfully but something prevents ${runningServers} Vite servers from exiting`);
					else console.warn("Tests closed successfully but something prevents the main process from exiting");
					if (!this.reporters.some((r) => r instanceof HangingProcessReporter)) console.warn("You can try to identify the cause by enabling \"hanging-process\" reporter. See https://vitest.dev/guide/reporters.html#hanging-process-reporter");
				}
				process.exit();
			});
		}, this.config.teardownTimeout).unref();
		await this.close();
		if (force) process.exit();
	}
	/** @internal */
	async report(name, ...args) {
		await Promise.all(this.reporters.map((r) => r[name]?.(
			// @ts-expect-error let me go
			...args
		)));
	}
	/** @internal */
	async _globTestFilepaths() {
		const specifications = await this.globTestSpecifications();
		return Array.from(new Set(specifications.map((spec) => spec.moduleId)));
	}
	/**
	* Should the server be kept running after the tests are done.
	*/
	shouldKeepServer() {
		return !!this.config?.watch;
	}
	/**
	* Register a handler that will be called when the server is restarted due to a config change.
	*/
	onServerRestart(fn) {
		this._onRestartListeners.push(fn);
	}
	/**
	* Register a handler that will be called when the test run is cancelled with `vitest.cancelCurrentRun`.
	*/
	onCancel(fn) {
		this._onCancelListeners.add(fn);
		return () => {
			this._onCancelListeners.delete(fn);
		};
	}
	/**
	* Register a handler that will be called when the server is closed.
	*/
	onClose(fn) {
		this._onClose.push(fn);
	}
	/**
	* Register a handler that will be called when the tests are rerunning.
	*/
	onTestsRerun(fn) {
		this._onUserTestsRerun.push(fn);
	}
	/**
	* Register a handler that will be called when a file is changed.
	* This callback should return `true` of `false` indicating whether the test file needs to be rerun.
	* @example
	* const testsToRun = [resolve('./test.spec.ts')]
	* vitest.onFilterWatchedSpecification(specification => testsToRun.includes(specification.moduleId))
	*/
	onFilterWatchedSpecification(fn) {
		this._onFilterWatchedSpecification.push(fn);
	}
	/** @internal */
	onAfterSetServer(fn) {
		this._onSetServer.push(fn);
	}
	/**
	* Check if the project with a given name should be included.
	*/
	matchesProjectFilter(name) {
		const projects = this._config?.project || this._cliOptions?.project;
		// no filters applied, any project can be included
		if (!projects || !projects.length) return true;
		return toArray(projects).some((project) => {
			return wildcardPatternToRegExp(project).test(name);
		});
	}
	/** @internal */
	isExcludedByProjectFilter(name) {
		const projects = this._config?.project || this._cliOptions?.project;
		if (!projects || !projects.length) return false;
		return toArray(projects).some((project) => {
			if (!project.startsWith("!")) return false;
			return wildcardPatternToRegExp(project.slice(1)).test(name);
		});
	}
}
function assert(condition, property, name = property) {
	if (!condition) throw new Error(`The ${name} was not set. It means that \`vitest.${property}\` was called before the Vite server was established. Await the Vitest promise before accessing \`vitest.${property}\`.`);
}

async function VitestPlugin(options = {}, vitest = new Vitest("test", deepClone(options))) {
	const userConfig = deepMerge({}, options);
	async function UIPlugin() {
		await vitest.packageInstaller.ensureInstalled("@vitest/ui", resolve(options.root || process.cwd()), vitest.version);
		return (await import('@vitest/ui')).default(vitest);
	}
	return [
		{
			name: "vitest",
			enforce: "pre",
			options() {
				this.meta.watchMode = false;
			},
			async config(viteConfig) {
				if (options.watch)
 // Earlier runs have overwritten values of the `options`.
				// Reset it back to initial user config before setting up the server again.
				options = deepMerge({}, userConfig);
				// preliminary merge of options to be able to create server options for vite
				// however to allow vitest plugins to modify vitest config values
				// this is repeated in configResolved where the config is final
				const testConfig = deepMerge({}, configDefaults, viteConfig.test ?? {}, options);
				testConfig.api = resolveApiServerConfig(testConfig, defaultPort);
				// store defines for globalThis to make them
				// reassignable when running in worker in src/runtime/setup.ts
				const originalDefine = { ...viteConfig.define };
				const defines = deleteDefineConfig(viteConfig);
				options.defines = defines;
				options.viteDefine = originalDefine;
				let open = false;
				if (testConfig.ui && testConfig.open) open = testConfig.uiBase ?? "/__vitest__/";
				const resolveOptions = getDefaultResolveOptions();
				let config = {
					base: "/",
					root: viteConfig.test?.root || options.root,
					define: { "process.env.NODE_ENV": "process.env.NODE_ENV" },
					resolve: {
						...resolveOptions,
						alias: testConfig.alias
					},
					server: {
						...testConfig.api,
						open,
						hmr: false,
						ws: testConfig.api?.middlewareMode ? false : void 0,
						preTransformRequests: false,
						fs: { allow: resolveFsAllow(options.root || process.cwd(), testConfig.config) }
					},
					build: {
						outDir: "dummy-non-existing-folder",
						emptyOutDir: false
					},
					environments: {
						ssr: { resolve: resolveOptions },
						__vitest__: { dev: {} }
					},
					test: {
						root: testConfig.root ?? viteConfig.test?.root,
						deps: testConfig.deps ?? viteConfig.test?.deps
					}
				};
				if ("rolldownVersion" in vite) config = {
					...config,
					oxc: viteConfig.oxc === false ? false : { target: viteConfig.oxc?.target || "node18" }
				};
				else config = {
					...config,
					esbuild: viteConfig.esbuild === false ? false : {
						target: viteConfig.esbuild?.target || "node18",
						sourcemap: "external",
						legalComments: "inline"
					}
				};
				// inherit so it's available in VitestOptimizer
				// I cannot wait to rewrite all of this in Vitest 4
				if (options.cache != null) config.test.cache = options.cache;
				if (vitest.configOverride.project)
 // project filter was set by the user, so we need to filter the project
				options.project = vitest.configOverride.project;
				config.customLogger = createViteLogger(vitest.logger, viteConfig.logLevel || "warn", { allowClearScreen: false });
				config.customLogger = silenceImportViteIgnoreWarning(config.customLogger);
				// chokidar fsevents is unstable on macos when emitting "ready" event
				if (process.platform === "darwin" && false);
				const classNameStrategy = typeof testConfig.css !== "boolean" && testConfig.css?.modules?.classNameStrategy || "stable";
				if (classNameStrategy !== "scoped") {
					config.css ??= {};
					config.css.modules ??= {};
					if (config.css.modules) config.css.modules.generateScopedName = (name, filename) => {
						return generateScopedClassName(classNameStrategy, name, relative(vitest.config.root || options.root || process.cwd(), filename));
					};
				}
				return config;
			},
			async configResolved(viteConfig) {
				const viteConfigTest = viteConfig.test || {};
				if (viteConfigTest.watch === false) viteConfigTest.run = true;
				if ("alias" in viteConfigTest) delete viteConfigTest.alias;
				// viteConfig.test is final now, merge it for real
				options = deepMerge({}, configDefaults, viteConfigTest, options);
				options.api = resolveApiServerConfig(options, defaultPort);
				// we replace every "import.meta.env" with "process.env"
				// to allow reassigning, so we need to put all envs on process.env
				const { PROD, DEV, ...envs } = viteConfig.env;
				// process.env can have only string values and will cast string on it if we pass other type,
				// so we are making them truthy
				process.env.PROD ??= PROD ? "1" : "";
				process.env.DEV ??= DEV ? "1" : "";
				for (const name in envs) process.env[name] ??= envs[name];
				// don't watch files in run mode
				if (!options.watch) viteConfig.server.watch = null;
				if (options.ui)
 // @ts-expect-error mutate readonly
				viteConfig.plugins.push(await UIPlugin());
				Object.defineProperty(viteConfig, "_vitest", {
					value: options,
					enumerable: false,
					configurable: true
				});
				const originalName = options.name;
				if (options.browser?.instances) options.browser.instances.forEach((instance) => {
					instance.name ??= originalName ? `${originalName} (${instance.browser})` : instance.browser;
				});
			},
			configureServer: { async handler(server) {
				if (options.watch && false);
				await vitest._setServer(options, server);
				if (options.api && options.watch) (await Promise.resolve().then(function () { return setup$1; })).setup(vitest);
				// #415, in run mode we don't need the watcher, close it would improve the performance
				if (!options.watch) await server.watcher.close();
			} }
		},
		MetaEnvReplacerPlugin(),
		...CSSEnablerPlugin(vitest),
		CoverageTransform(vitest),
		VitestCoreResolver(vitest),
		...MocksPlugins(),
		VitestOptimizer(),
		NormalizeURLPlugin(),
		ModuleRunnerTransform()
	].filter(notNullish);
}

async function createVitest(mode, options, viteOverrides = {}, vitestOptions = {}) {
	const ctx = new Vitest(mode, deepClone(options), vitestOptions);
	const root = slash(resolve$1(options.root || process.cwd()));
	const configPath = options.config === false ? false : options.config ? resolveModule(options.config, { paths: [root] }) ?? resolve$1(root, options.config) : any(configFiles, { cwd: root });
	options.config = configPath;
	const { browser: _removeBrowser, ...restOptions } = options;
	const config = {
		configFile: configPath,
		configLoader: options.configLoader,
		mode: options.mode || mode,
		plugins: await VitestPlugin(restOptions, ctx)
	};
	try {
		const server = await createViteServer(mergeConfig(config, mergeConfig(viteOverrides, { root: options.root })));
		if (ctx.config.api?.port) await server.listen();
		return ctx;
	} 
	// Vitest can fail at any point inside "setServer" or inside a custom plugin
	// Then we need to make sure everything was properly closed (like the logger)
catch (error) {
		await ctx.close();
		throw error;
	}
}

const MAX_RESULT_COUNT = 10;
const SELECTION_MAX_INDEX = 7;
const ESC = "\x1B[";
class WatchFilter {
	filterRL;
	currentKeyword = void 0;
	message;
	results = [];
	selectionIndex = -1;
	onKeyPress;
	stdin;
	stdout;
	constructor(message, stdin = process.stdin, stdout$1 = stdout()) {
		this.message = message;
		this.stdin = stdin;
		this.stdout = stdout$1;
		this.filterRL = readline.createInterface({
			input: this.stdin,
			escapeCodeTimeout: 50
		});
		readline.emitKeypressEvents(this.stdin, this.filterRL);
		if (this.stdin.isTTY) this.stdin.setRawMode(true);
	}
	async filter(filterFunc) {
		this.write(this.promptLine());
		const resultPromise = createDefer();
		this.onKeyPress = this.filterHandler(filterFunc, (result) => {
			resultPromise.resolve(result);
		});
		this.stdin.on("keypress", this.onKeyPress);
		try {
			return await resultPromise;
		} finally {
			this.close();
		}
	}
	filterHandler(filterFunc, onSubmit) {
		return async (str, key) => {
			switch (true) {
				case key.sequence === "":
					if (this.currentKeyword && this.currentKeyword?.length > 1) this.currentKeyword = this.currentKeyword?.slice(0, -1);
					else this.currentKeyword = void 0;
					break;
				case key?.ctrl && key?.name === "c":
				case key?.name === "escape":
					this.write(`${ESC}1G${ESC}0J`);
					onSubmit(void 0);
					return;
				case key?.name === "enter":
				case key?.name === "return": {
					const selection = this.results[this.selectionIndex];
					onSubmit((typeof selection === "string" ? selection : selection?.key) || this.currentKeyword || "");
					this.currentKeyword = void 0;
					break;
				}
				case key?.name === "up":
					if (this.selectionIndex && this.selectionIndex > 0) this.selectionIndex--;
					else this.selectionIndex = -1;
					break;
				case key?.name === "down":
					if (this.selectionIndex < this.results.length - 1) this.selectionIndex++;
					else if (this.selectionIndex >= this.results.length - 1) this.selectionIndex = this.results.length - 1;
					break;
				case !key?.ctrl && !key?.meta:
					if (this.currentKeyword === void 0) this.currentKeyword = str;
					else this.currentKeyword += str || "";
					break;
			}
			if (this.currentKeyword) this.results = await filterFunc(this.currentKeyword);
			this.render();
		};
	}
	render() {
		let printStr = this.promptLine();
		if (!this.currentKeyword) printStr += "\nPlease input filter pattern";
		else if (this.currentKeyword && this.results.length === 0) printStr += "\nPattern matches no results";
		else {
			const resultCountLine = this.results.length === 1 ? `Pattern matches ${this.results.length} result` : `Pattern matches ${this.results.length} results`;
			let resultBody = "";
			if (this.results.length > MAX_RESULT_COUNT) {
				const offset = this.selectionIndex > SELECTION_MAX_INDEX ? this.selectionIndex - SELECTION_MAX_INDEX : 0;
				const displayResults = this.results.slice(offset, MAX_RESULT_COUNT + offset);
				const remainingResultCount = this.results.length - offset - displayResults.length;
				resultBody = `${displayResults.map((result, index) => index + offset === this.selectionIndex ? c.green(` › ${result}`) : c.dim(` › ${result}`)).join("\n")}`;
				if (remainingResultCount > 0) resultBody += `
${c.dim(`   ...and ${remainingResultCount} more ${remainingResultCount === 1 ? "result" : "results"}`)}`;
			} else resultBody = this.results.map((result, index) => index === this.selectionIndex ? c.green(` › ${result}`) : c.dim(` › ${result}`)).join("\n");
			printStr += `\n${resultCountLine}\n${resultBody}`;
		}
		this.eraseAndPrint(printStr);
		this.restoreCursor();
	}
	keywordOffset() {
		return `? ${this.message} › `.length + 1;
	}
	promptLine() {
		return `${c.cyan("?")} ${c.bold(this.message)} › ${this.currentKeyword || ""}`;
	}
	eraseAndPrint(str) {
		let rows = 0;
		const lines = str.split(/\r?\n/);
		for (const line of lines) {
			const columns = "columns" in this.stdout ? this.stdout.columns : 80;
			// We have to take care of screen width in case of long lines
			rows += 1 + Math.floor(Math.max(stripVTControlCharacters(line).length - 1, 0) / columns);
		}
		this.write(`${ESC}1G`);
		this.write(`${ESC}J`);
		this.write(str);
		this.write(`${ESC}${rows - 1}A`);
	}
	close() {
		this.filterRL.close();
		if (this.onKeyPress) this.stdin.removeListener("keypress", this.onKeyPress);
		if (this.stdin.isTTY) this.stdin.setRawMode(false);
	}
	restoreCursor() {
		const cursorPos = this.keywordOffset() + (this.currentKeyword?.length || 0);
		this.write(`${ESC}${cursorPos}G`);
	}
	write(data) {
		this.stdout.write(data);
	}
	getLastResults() {
		return this.results.map((r) => typeof r === "string" ? r : r.toString());
	}
}

const keys = [
	[["a", "return"], "rerun all tests"],
	["r", "rerun current pattern tests"],
	["f", "rerun only failed tests"],
	["u", "update snapshot"],
	["p", "filter by a filename"],
	["t", "filter by a test name regex pattern"],
	["w", "filter by a project name"],
	["b", "start the browser server if not started yet"],
	["q", "quit"]
];
const cancelKeys = [
	"space",
	"c",
	"h",
	...keys.map((key) => key[0]).flat()
];
function printShortcutsHelp() {
	stdout().write(`
${c.bold("  Watch Usage")}
${keys.map((i) => c.dim("  press ") + c.reset([i[0]].flat().map(c.bold).join(", ")) + c.dim(` to ${i[1]}`)).join("\n")}
`);
}
function* traverseFilteredTestNames(parentName, filter, t) {
	if (isTestCase(t)) {
		if (t.name.match(filter)) {
			const displayName = `${parentName} > ${t.name}`;
			yield {
				key: t.name,
				toString: () => displayName
			};
		}
	} else {
		parentName = parentName.length ? `${parentName} > ${t.name}` : t.name;
		for (const task of t.tasks) yield* traverseFilteredTestNames(parentName, filter, task);
	}
}
function* getFilteredTestNames(pattern, suite) {
	try {
		const reg = new RegExp(pattern);
		// TODO: we cannot run tests per workspace yet: filtering files
		const files = /* @__PURE__ */ new Set();
		for (const file of suite) if (!files.has(file.name)) {
			files.add(file.name);
			yield* traverseFilteredTestNames("", reg, file);
		}
	} catch {}
}
function registerConsoleShortcuts(ctx, stdin = process.stdin, stdout) {
	let latestFilename = "";
	async function _keypressHandler(str, key) {
		// Cancel run and exit when ctrl-c or esc is pressed.
		// If cancelling takes long and key is pressed multiple times, exit forcefully.
		if (str === "" || str === "\x1B" || key && key.ctrl && key.name === "c") {
			if (!ctx.isCancelling) {
				ctx.logger.log(c.red("Cancelling test run. Press CTRL+c again to exit forcefully.\n"));
				process.exitCode = 130;
				await ctx.cancelCurrentRun("keyboard-input");
			}
			return ctx.exit(true);
		}
		// window not support suspend
		if (!isWindows && key && key.ctrl && key.name === "z") {
			process.kill(process.ppid, "SIGTSTP");
			process.kill(process.pid, "SIGTSTP");
			return;
		}
		const name = key?.name;
		if (ctx.runningPromise) {
			if (cancelKeys.includes(name)) await ctx.cancelCurrentRun("keyboard-input");
			return;
		}
		// quit
		if (name === "q") return ctx.exit(true);
		// help
		if (name === "h") return printShortcutsHelp();
		// update snapshot
		if (name === "u") return ctx.updateSnapshot();
		// rerun all tests
		if (name === "a" || name === "return") {
			const files = await ctx._globTestFilepaths();
			return ctx.changeNamePattern("", files, "rerun all tests");
		}
		// rerun current pattern tests
		if (name === "r") return ctx.rerunFiles();
		// rerun only failed tests
		if (name === "f") return ctx.rerunFailed();
		// change project filter
		if (name === "w") return inputProjectName();
		// change testNamePattern
		if (name === "t") return inputNamePattern();
		// change fileNamePattern
		if (name === "p") return inputFilePattern();
		if (name === "b") {
			await ctx._initBrowserServers();
			ctx.projects.forEach((project) => {
				ctx.logger.log();
				ctx.logger.printBrowserBanner(project);
			});
			return null;
		}
	}
	async function keypressHandler(str, key) {
		await _keypressHandler(str, key);
	}
	async function inputNamePattern() {
		off();
		const filter = await new WatchFilter("Input test name pattern (RegExp)", stdin, stdout).filter((str) => {
			return [...getFilteredTestNames(str, ctx.state.getFiles())];
		});
		on();
		if (typeof filter === "undefined") return;
		const files = ctx.state.getFilepaths();
		// if running in standalone mode, Vitest instance doesn't know about any test file
		const cliFiles = ctx.config.standalone && !files.length ? await ctx._globTestFilepaths() : void 0;
		await ctx.changeNamePattern(filter?.trim() || "", cliFiles, "change pattern");
	}
	async function inputProjectName() {
		off();
		const { filter = "" } = await prompt([{
			name: "filter",
			type: "text",
			message: "Input a single project name",
			initial: ctx.config.project[0] || ""
		}]);
		on();
		await ctx.changeProjectName(filter.trim());
	}
	async function inputFilePattern() {
		off();
		const watchFilter = new WatchFilter("Input filename pattern", stdin, stdout);
		const filter = await watchFilter.filter(async (str) => {
			return (await ctx.globTestSpecifications([str])).map((specification) => relative(ctx.config.root, specification.moduleId)).filter((file, index, all) => all.indexOf(file) === index);
		});
		on();
		if (typeof filter === "undefined") return;
		latestFilename = filter?.trim() || "";
		const lastResults = watchFilter.getLastResults();
		await ctx.changeFilenamePattern(latestFilename, filter && lastResults.length ? lastResults.map((i) => resolve(ctx.config.root, i)) : void 0);
	}
	let rl;
	function on() {
		off();
		rl = readline.createInterface({
			input: stdin,
			escapeCodeTimeout: 50
		});
		readline.emitKeypressEvents(stdin, rl);
		if (stdin.isTTY) stdin.setRawMode(true);
		stdin.on("keypress", keypressHandler);
	}
	function off() {
		rl?.close();
		rl = void 0;
		stdin.removeListener("keypress", keypressHandler);
		if (stdin.isTTY) stdin.setRawMode(false);
	}
	on();
	return function cleanup() {
		off();
	};
}

/**
* Start Vitest programmatically
*
* Returns a Vitest instance if initialized successfully.
*/
async function startVitest(mode, cliFilters = [], options = {}, viteOverrides, vitestOptions) {
	const root = resolve(options.root || process.cwd());
	const ctx = await prepareVitest(mode, options, viteOverrides, vitestOptions, cliFilters);
	if (mode === "test" && ctx._coverageOptions.enabled) {
		const requiredPackages = CoverageProviderMap[ctx._coverageOptions.provider || "v8"];
		if (requiredPackages) {
			if (!await ctx.packageInstaller.ensureInstalled(requiredPackages, root, ctx.version)) {
				process.exitCode = 1;
				return ctx;
			}
		}
	}
	const stdin = vitestOptions?.stdin || process.stdin;
	const stdout = vitestOptions?.stdout || process.stdout;
	let stdinCleanup;
	if (stdin.isTTY && ctx.config.watch) stdinCleanup = registerConsoleShortcuts(ctx, stdin, stdout);
	ctx.onAfterSetServer(() => {
		if (ctx.config.standalone) ctx.standalone();
		else ctx.start(cliFilters);
	});
	try {
		if (ctx.config.listTags) await ctx.listTags();
		else if (ctx.config.clearCache) await ctx.experimental_clearCache();
		else if (ctx.config.mergeReports) await ctx.mergeReports();
		else if (ctx.config.standalone) await ctx.standalone();
		else await ctx.start(cliFilters);
		return ctx;
	} catch (e) {
		if (e instanceof FilesNotFoundError) return ctx;
		if (e instanceof GitNotFoundError) {
			ctx.logger.error(e.message);
			return ctx;
		}
		if (e instanceof IncludeTaskLocationDisabledError || e instanceof RangeLocationFilterProvidedError || e instanceof LocationFilterFileNotFoundError) {
			ctx.logger.printError(e, { verbose: false });
			return ctx;
		}
		process.exitCode = 1;
		ctx.logger.printError(e, {
			fullStack: true,
			type: "Unhandled Error"
		});
		ctx.logger.error("\n\n");
		return ctx;
	} finally {
		if (!ctx?.shouldKeepServer()) {
			stdinCleanup?.();
			await ctx.close();
		}
	}
}
async function prepareVitest(mode, options = {}, viteOverrides, vitestOptions, cliFilters) {
	process.env.TEST = "true";
	process.env.VITEST = "true";
	process.env.NODE_ENV ??= "test";
	if (options.run) options.watch = false;
	if (options.standalone && (cliFilters?.length || 0) > 0) options.standalone = false;
	// this shouldn't affect _application root_ that can be changed inside config
	const root = resolve(options.root || process.cwd());
	const ctx = await createVitest(mode, options, viteOverrides, vitestOptions);
	const environmentPackage = getEnvPackageName(ctx.config.environment);
	if (environmentPackage && !await ctx.packageInstaller.ensureInstalled(environmentPackage, root)) {
		process.exitCode = 1;
		return ctx;
	}
	return ctx;
}
function processCollected(ctx, files, options) {
	let errorsPrinted = false;
	forEachSuite(files, (suite) => {
		suite.errors().forEach((error) => {
			errorsPrinted = true;
			ctx.logger.printError(error, { project: suite.project });
		});
	});
	if (errorsPrinted) return;
	if (typeof options.json !== "undefined") return processJsonOutput(files, options);
	return formatCollectedAsString(files).forEach((test) => console.log(test));
}
function outputFileList(files, options) {
	if (typeof options.json !== "undefined") return outputJsonFileList(files, options);
	formatFilesAsString(files, options).map((file) => console.log(file));
}
function outputJsonFileList(files, options) {
	if (typeof options.json === "boolean") return console.log(JSON.stringify(formatFilesAsJSON(files), null, 2));
	if (typeof options.json === "string") {
		const jsonPath = resolve(options.root || process.cwd(), options.json);
		mkdirSync(dirname(jsonPath), { recursive: true });
		writeFileSync(jsonPath, JSON.stringify(formatFilesAsJSON(files), null, 2));
	}
}
function formatFilesAsJSON(files) {
	return files.map((file) => {
		const result = { file: file.moduleId };
		if (file.project.name) result.projectName = file.project.name;
		return result;
	});
}
function formatFilesAsString(files, options) {
	return files.map((file) => {
		let name = relative(options.root || process.cwd(), file.moduleId);
		if (file.project.name) name = `[${file.project.name}] ${name}`;
		return name;
	});
}
function processJsonOutput(files, options) {
	if (typeof options.json === "boolean") return console.log(JSON.stringify(formatCollectedAsJSON(files), null, 2));
	if (typeof options.json === "string") {
		const jsonPath = resolve(options.root || process.cwd(), options.json);
		mkdirSync(dirname(jsonPath), { recursive: true });
		writeFileSync(jsonPath, JSON.stringify(formatCollectedAsJSON(files), null, 2));
	}
}
function forEachSuite(modules, callback) {
	modules.forEach((testModule) => {
		callback(testModule);
		for (const suite of testModule.children.allSuites()) callback(suite);
	});
}
function formatCollectedAsJSON(files) {
	const results = [];
	files.forEach((file) => {
		for (const test of file.children.allTests()) {
			if (test.result().state === "skipped") continue;
			const result = {
				name: test.fullName,
				file: test.module.moduleId
			};
			if (test.project.name) result.projectName = test.project.name;
			if (test.location) result.location = test.location;
			results.push(result);
		}
	});
	return results;
}
function formatCollectedAsString(testModules) {
	const results = [];
	testModules.forEach((testModule) => {
		for (const test of testModule.children.allTests()) {
			if (test.result().state === "skipped") continue;
			const fullName = `${test.module.task.name} > ${test.fullName}`;
			results.push((test.project.name ? `[${test.project.name}] ` : "") + fullName);
		}
	});
	return results;
}
const envPackageNames = {
	"jsdom": "jsdom",
	"happy-dom": "happy-dom",
	"edge-runtime": "@edge-runtime/vm"
};
function getEnvPackageName(env) {
	if (env === "node") return null;
	if (env in envPackageNames) return envPackageNames[env];
	if (env[0] === "." || isAbsolute(env)) return null;
	return `vitest-environment-${env}`;
}

var cliApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  formatCollectedAsJSON: formatCollectedAsJSON,
  formatCollectedAsString: formatCollectedAsString,
  outputFileList: outputFileList,
  prepareVitest: prepareVitest,
  processCollected: processCollected,
  startVitest: startVitest
});

export { ForksPoolWorker as F, GitNotFoundError as G, ThreadsPoolWorker as T, Vitest as V, VitestPlugin as a, FilesNotFoundError as b, TypecheckPoolWorker as c, VitestPackageInstaller as d, VmForksPoolWorker as e, VmThreadsPoolWorker as f, createDebugger as g, createMethodsRPC as h, createViteLogger as i, createVitest as j, escapeTestName as k, experimental_getRunnerTask as l, getFilePoolName as m, isFileServingAllowed as n, isValidApiRequest as o, resolveFsAllow as p, cliApi as q, registerConsoleShortcuts as r, startVitest as s };
