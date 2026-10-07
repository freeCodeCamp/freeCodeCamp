"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// packages/playwright/src/common/index.ts
var index_exports = {};
__export(index_exports, {
  FullConfigInternal: () => FullConfigInternal,
  ProcessRunner: () => ProcessRunner,
  builtInReporters: () => builtInReporters,
  cc: () => compilationCache_exports,
  config: () => config_exports,
  configLoader: () => configLoader_exports,
  defineConfig: () => defineConfig,
  esm: () => esmLoaderHost_exports,
  fixtures: () => fixtures_exports,
  ipc: () => ipc_exports,
  mergeTests: () => mergeTests,
  poolBuilder: () => poolBuilder_exports,
  processRunner: () => process_exports,
  startProcessRunner: () => startProcessRunner,
  suiteUtils: () => suiteUtils_exports,
  test: () => test_exports,
  testLoader: () => testLoader_exports,
  testType: () => testType_exports,
  transform: () => transform_exports
});
module.exports = __toCommonJS(index_exports);

// packages/playwright/src/transform/compilationCache.ts
var compilationCache_exports = {};
__export(compilationCache_exports, {
  addToCompilationCache: () => addToCompilationCache,
  affectedTestFiles: () => affectedTestFiles,
  belongsToNodeModules: () => belongsToNodeModules,
  cacheDir: () => cacheDir,
  collectAffectedTestFiles: () => collectAffectedTestFiles,
  currentFileDepsCollector: () => currentFileDepsCollector,
  dependenciesForTestFile: () => dependenciesForTestFile,
  fileDependenciesForTest: () => fileDependenciesForTest,
  getFromCompilationCache: () => getFromCompilationCache,
  getUserData: () => getUserData,
  installSourceMapSupport: () => installSourceMapSupport,
  internalDependenciesForTestFile: () => internalDependenciesForTestFile,
  serializeCompilationCache: () => serializeCompilationCache,
  setExternalDependencies: () => setExternalDependencies,
  startCollectingFileDeps: () => startCollectingFileDeps,
  stopCollectingFileDeps: () => stopCollectingFileDeps
});
var import_fs = __toESM(require("fs"));
var import_os = __toESM(require("os"));
var import_path = __toESM(require("path"));
var import_globals = require("../globals");
var import_package = require("../package");
var sourceMapSupport = require("playwright-core/lib/utilsBundle").sourceMapSupport;
var { calculateSha1 } = require("playwright-core/lib/coreBundle").utils;
var { isUnderTest } = require("playwright-core/lib/coreBundle").utils;
var cacheDir = process.env.PWTEST_CACHE_DIR || (() => {
  if (process.platform === "win32")
    return import_path.default.join(import_os.default.tmpdir(), `playwright-transform-cache`);
  return import_path.default.join(import_os.default.tmpdir(), `playwright-transform-cache-` + process.geteuid?.());
})();
var sourceMaps = /* @__PURE__ */ new Map();
var memoryCache = /* @__PURE__ */ new Map();
var fileDependencies = /* @__PURE__ */ new Map();
var externalDependencies = /* @__PURE__ */ new Map();
var devSourceInfix = import_path.default.sep + "playwright" + import_path.default.sep + "packages" + import_path.default.sep;
function installSourceMapSupport() {
  Error.stackTraceLimit = 200;
  sourceMapSupport.install({
    environment: "node",
    handleUncaughtExceptions: false,
    retrieveSourceMap(source) {
      if (!process.env.PWDEBUGIMPL && isUnderTest() && source.includes(devSourceInfix))
        return { map: identitySourceMap(source), url: source };
      if (!sourceMaps.has(source))
        return null;
      const sourceMapPath = sourceMaps.get(source);
      try {
        return {
          map: JSON.parse(import_fs.default.readFileSync(sourceMapPath, "utf-8")),
          url: source
        };
      } catch {
        return null;
      }
    }
  });
}
function identitySourceMap(source) {
  const lineCount = import_fs.default.readFileSync(source, "utf8").split("\n").length;
  return {
    version: 3,
    sources: [source],
    mappings: lineCount ? "AAAA" + ";AACA".repeat(lineCount - 1) : ""
  };
}
function _innerAddToCompilationCacheAndSerialize(filename, entry) {
  sourceMaps.set(entry.moduleUrl || filename, entry.sourceMapPath);
  memoryCache.set(filename, entry);
  return {
    sourceMaps: [[entry.moduleUrl || filename, entry.sourceMapPath]],
    memoryCache: [[filename, entry]],
    fileDependencies: [],
    externalDependencies: []
  };
}
function getFromCompilationCache(filename, contentHash, moduleUrl) {
  const cache = memoryCache.get(filename);
  if (cache?.codePath) {
    try {
      return { cachedCode: import_fs.default.readFileSync(cache.codePath, "utf-8") };
    } catch {
    }
  }
  const filePathHash = calculateFilePathHash(filename);
  const hashPrefix = filePathHash + "_" + contentHash.substring(0, 7);
  const cacheFolderName = filePathHash.substring(0, 2);
  const cachePath = calculateCachePath(filename, cacheFolderName, hashPrefix);
  const codePath = cachePath + ".js";
  const sourceMapPath = cachePath + ".map";
  const dataPath = cachePath + ".data";
  try {
    const cachedCode = import_fs.default.readFileSync(codePath, "utf8");
    const serializedCache = _innerAddToCompilationCacheAndSerialize(filename, { codePath, sourceMapPath, dataPath, moduleUrl });
    return { cachedCode, serializedCache };
  } catch {
  }
  return {
    addToCache: (code, map, data) => {
      if ((0, import_globals.isWorkerProcess)())
        return {};
      clearOldCacheEntries(cacheFolderName, filePathHash);
      import_fs.default.mkdirSync(import_path.default.dirname(cachePath), { recursive: true });
      if (map)
        import_fs.default.writeFileSync(sourceMapPath, JSON.stringify(map), "utf8");
      if (data.size)
        import_fs.default.writeFileSync(dataPath, JSON.stringify(Object.fromEntries(data.entries()), void 0, 2), "utf8");
      import_fs.default.writeFileSync(codePath, code, "utf8");
      const serializedCache = _innerAddToCompilationCacheAndSerialize(filename, { codePath, sourceMapPath, dataPath, moduleUrl });
      return { serializedCache };
    }
  };
}
function serializeCompilationCache() {
  return {
    sourceMaps: [...sourceMaps.entries()],
    memoryCache: [...memoryCache.entries()],
    fileDependencies: [...fileDependencies.entries()].map(([filename, deps]) => [filename, [...deps]]),
    externalDependencies: [...externalDependencies.entries()].map(([filename, deps]) => [filename, [...deps]])
  };
}
function addToCompilationCache(payload) {
  for (const entry of payload.sourceMaps)
    sourceMaps.set(entry[0], entry[1]);
  for (const entry of payload.memoryCache)
    memoryCache.set(entry[0], entry[1]);
  for (const entry of payload.fileDependencies) {
    const existing = fileDependencies.get(entry[0]) || [];
    fileDependencies.set(entry[0], /* @__PURE__ */ new Set([...entry[1], ...existing]));
  }
  for (const entry of payload.externalDependencies) {
    const existing = externalDependencies.get(entry[0]) || [];
    externalDependencies.set(entry[0], /* @__PURE__ */ new Set([...entry[1], ...existing]));
  }
}
function calculateFilePathHash(filePath) {
  return calculateSha1(filePath).substring(0, 10);
}
function calculateCachePath(filePath, cacheFolderName, hashPrefix) {
  const fileName2 = hashPrefix + "_" + import_path.default.basename(filePath, import_path.default.extname(filePath)).replace(/\W/g, "");
  return import_path.default.join(cacheDir, cacheFolderName, fileName2);
}
function clearOldCacheEntries(cacheFolderName, filePathHash) {
  const cachePath = import_path.default.join(cacheDir, cacheFolderName);
  try {
    const cachedRelevantFiles = import_fs.default.readdirSync(cachePath).filter((file2) => file2.startsWith(filePathHash));
    for (const file2 of cachedRelevantFiles)
      import_fs.default.rmSync(import_path.default.join(cachePath, file2), { force: true });
  } catch {
  }
}
var depsCollector2;
function startCollectingFileDeps() {
  depsCollector2 = /* @__PURE__ */ new Set();
}
function stopCollectingFileDeps(filename) {
  if (!depsCollector2)
    return;
  depsCollector2.delete(filename);
  for (const dep of depsCollector2) {
    if (belongsToNodeModules(dep))
      depsCollector2.delete(dep);
  }
  fileDependencies.set(filename, depsCollector2);
  depsCollector2 = void 0;
}
function currentFileDepsCollector() {
  return depsCollector2;
}
function setExternalDependencies(filename, deps) {
  const depsSet = new Set(deps.filter((dep) => !belongsToNodeModules(dep) && dep !== filename));
  externalDependencies.set(filename, depsSet);
}
function fileDependenciesForTest() {
  return Object.fromEntries([...fileDependencies.entries()].map((entry) => [import_path.default.basename(entry[0]), [...entry[1]].map((f) => import_path.default.basename(f)).sort()]));
}
function collectAffectedTestFiles(changedFile, testFileCollector) {
  const isTestFile = (file2) => fileDependencies.has(file2);
  if (isTestFile(changedFile))
    testFileCollector.add(changedFile);
  for (const [testFile, deps] of fileDependencies) {
    if (deps.has(changedFile))
      testFileCollector.add(testFile);
  }
  for (const [importingFile, depsOfImportingFile] of externalDependencies) {
    if (depsOfImportingFile.has(changedFile)) {
      if (isTestFile(importingFile))
        testFileCollector.add(importingFile);
      for (const [testFile, depsOfTestFile] of fileDependencies) {
        if (depsOfTestFile.has(importingFile))
          testFileCollector.add(testFile);
      }
    }
  }
}
function affectedTestFiles(changes) {
  const result2 = /* @__PURE__ */ new Set();
  for (const change of changes)
    collectAffectedTestFiles(change, result2);
  return [...result2];
}
function internalDependenciesForTestFile(filename) {
  return fileDependencies.get(filename);
}
function dependenciesForTestFile(filename) {
  const result2 = /* @__PURE__ */ new Set();
  for (const testDependency of fileDependencies.get(filename) || []) {
    result2.add(testDependency);
    for (const externalDependency of externalDependencies.get(testDependency) || [])
      result2.add(externalDependency);
  }
  for (const dep of externalDependencies.get(filename) || [])
    result2.add(dep);
  return result2;
}
var kPlaywrightInternalPrefix = import_package.packageRoot;
function belongsToNodeModules(file2) {
  if (file2.includes(`${import_path.default.sep}node_modules${import_path.default.sep}`))
    return true;
  if (file2.startsWith(kPlaywrightInternalPrefix) && (file2.endsWith(".js") || file2.endsWith(".mjs")))
    return true;
  return false;
}
async function getUserData(pluginName) {
  const result2 = /* @__PURE__ */ new Map();
  for (const [fileName2, cache] of memoryCache) {
    if (!cache.dataPath)
      continue;
    if (!import_fs.default.existsSync(cache.dataPath))
      continue;
    const data = JSON.parse(await import_fs.default.promises.readFile(cache.dataPath, "utf8"));
    if (data[pluginName])
      result2.set(fileName2, data[pluginName]);
  }
  return result2;
}

// packages/playwright/src/common/config.ts
var config_exports = {};
__export(config_exports, {
  FullConfigInternal: () => FullConfigInternal,
  FullProjectInternal: () => FullProjectInternal,
  builtInReporters: () => builtInReporters,
  defaultGrep: () => defaultGrep,
  defaultReporter: () => defaultReporter,
  defaultTimeout: () => defaultTimeout,
  getProjectId: () => getProjectId,
  toReporters: () => toReporters
});
var import_fs3 = __toESM(require("fs"));
var import_os2 = __toESM(require("os"));
var import_path3 = __toESM(require("path"));
var import_package2 = require("../package");

// packages/playwright/src/util.ts
var import_fs2 = __toESM(require("fs"));
var import_path2 = __toESM(require("path"));
var import_url = __toESM(require("url"));
var import_util = __toESM(require("util"));
var debug = require("playwright-core/lib/utilsBundle").debug;
var mime = require("playwright-core/lib/utilsBundle").mime;
var minimatch = require("playwright-core/lib/utilsBundle").minimatch;
var { calculateSha1: calculateSha12 } = require("playwright-core/lib/coreBundle").utils;
var { sanitizeForFilePath } = require("playwright-core/lib/coreBundle").utils;
var { isRegExp } = require("playwright-core/lib/coreBundle").iso;
var { parseStackFrame, stringifyStackFrames } = require("playwright-core/lib/coreBundle").iso;
var { ansiRegex, isString, stripAnsiEscapes } = require("playwright-core/lib/coreBundle").iso;
var PLAYWRIGHT_TEST_PATH = import_path2.default.join(__dirname, "..");
var PLAYWRIGHT_CORE_PATH = import_path2.default.dirname(require.resolve("playwright-core/package.json"));
function filterStackTrace(e) {
  const name = e.name ? e.name + ": " : "";
  const cause = e.cause instanceof Error ? filterStackTrace(e.cause) : void 0;
  if (process.env.PWDEBUGIMPL)
    return { message: name + e.message, stack: e.stack || "", cause };
  const stackLines = stringifyStackFrames(filteredStackTrace(e.stack?.split("\n") || []));
  return {
    message: name + e.message,
    stack: `${name}${e.message}${stackLines.map((line) => "\n" + line).join("")}`,
    cause
  };
}
function filterStackFile(file2) {
  if (process.env.PWDEBUGIMPL)
    return true;
  if (file2.startsWith(PLAYWRIGHT_TEST_PATH))
    return false;
  if (file2.startsWith(PLAYWRIGHT_CORE_PATH))
    return false;
  return true;
}
function filteredStackTrace(rawStack) {
  const frames = [];
  for (const line of rawStack) {
    const frame = parseStackFrame(line, import_path2.default.sep, !!process.env.PWDEBUGIMPL);
    if (!frame || !frame.file)
      continue;
    if (!filterStackFile(frame.file))
      continue;
    frames.push(frame);
  }
  return frames;
}
function serializeError(error) {
  if (error instanceof Error)
    return filterStackTrace(error);
  return {
    value: import_util.default.inspect(error)
  };
}
function parseLocationArg(arg) {
  const match = /^(.*?):(\d+):?(\d+)?$/.exec(arg);
  return {
    file: match ? match[1] : arg,
    line: match ? parseInt(match[2], 10) : null,
    column: match?.[3] ? parseInt(match[3], 10) : null
  };
}
function createFileMatcher(patterns) {
  const reList = [];
  const filePatterns = [];
  for (const pattern of Array.isArray(patterns) ? patterns : [patterns]) {
    if (isRegExp(pattern)) {
      reList.push(pattern);
    } else {
      if (!pattern.startsWith("**/"))
        filePatterns.push("**/" + pattern);
      else
        filePatterns.push(pattern);
    }
  }
  return (filePath) => {
    for (const re of reList) {
      re.lastIndex = 0;
      if (re.test(filePath))
        return true;
    }
    if (import_path2.default.sep === "\\") {
      const fileURL = import_url.default.pathToFileURL(filePath).href;
      for (const re of reList) {
        re.lastIndex = 0;
        if (re.test(fileURL))
          return true;
      }
    }
    for (const pattern of filePatterns) {
      if (minimatch(filePath, pattern, { nocase: true, dot: true }))
        return true;
    }
    return false;
  };
}
function mergeObjects(a, b, c) {
  const result2 = { ...a };
  for (const x of [b, c].filter(Boolean)) {
    for (const [name, value] of Object.entries(x)) {
      if (!Object.is(value, void 0))
        result2[name] = value;
    }
  }
  return result2;
}
function forceRegExp(pattern) {
  const match = pattern.match(/^\/(.*)\/([gi]*)$/);
  if (match)
    return new RegExp(match[1], match[2]);
  return new RegExp(pattern, "gi");
}
function relativeFilePath(file2) {
  if (!import_path2.default.isAbsolute(file2))
    return file2;
  return import_path2.default.relative(process.cwd(), file2);
}
function formatLocation(location) {
  return relativeFilePath(location.file) + ":" + location.line + ":" + location.column;
}
function errorWithFile(file2, message) {
  return new Error(`${relativeFilePath(file2)}: ${message}`);
}
var debugTest = debug("pw:test");
var folderToPackageJsonPath = /* @__PURE__ */ new Map();
function getPackageJsonPath(folderPath) {
  const cached = folderToPackageJsonPath.get(folderPath);
  if (cached !== void 0)
    return cached;
  const packageJsonPath = import_path2.default.join(folderPath, "package.json");
  if (import_fs2.default.existsSync(packageJsonPath)) {
    folderToPackageJsonPath.set(folderPath, packageJsonPath);
    return packageJsonPath;
  }
  const parentFolder = import_path2.default.dirname(folderPath);
  if (folderPath === parentFolder) {
    folderToPackageJsonPath.set(folderPath, "");
    return "";
  }
  const result2 = getPackageJsonPath(parentFolder);
  folderToPackageJsonPath.set(folderPath, result2);
  return result2;
}
function fileIsModule(file2) {
  if (file2.endsWith(".mjs") || file2.endsWith(".mts"))
    return true;
  if (file2.endsWith(".cjs") || file2.endsWith(".cts"))
    return false;
  const folder = import_path2.default.dirname(file2);
  return folderIsModule(folder);
}
function folderIsModule(folder) {
  const packageJsonPath = getPackageJsonPath(folder);
  if (!packageJsonPath)
    return false;
  return require(packageJsonPath).type === "module";
}
var packageJsonMainFieldCache = /* @__PURE__ */ new Map();
function getMainFieldFromPackageJson(packageJsonPath) {
  if (!packageJsonMainFieldCache.has(packageJsonPath)) {
    let mainField;
    try {
      mainField = JSON.parse(import_fs2.default.readFileSync(packageJsonPath, "utf8")).main;
    } catch {
    }
    packageJsonMainFieldCache.set(packageJsonPath, mainField);
  }
  return packageJsonMainFieldCache.get(packageJsonPath);
}
var kExtLookups = /* @__PURE__ */ new Map([
  [".js", [".jsx", ".ts", ".tsx"]],
  [".jsx", [".tsx"]],
  [".cjs", [".cts"]],
  [".mjs", [".mts"]],
  ["", [".js", ".ts", ".jsx", ".tsx", ".cjs", ".mjs", ".cts", ".mts"]]
]);
function resolveImportSpecifierExtension(resolved) {
  if (fileExists(resolved))
    return resolved;
  for (const [ext, others] of kExtLookups) {
    if (!resolved.endsWith(ext))
      continue;
    for (const other of others) {
      const modified = resolved.substring(0, resolved.length - ext.length) + other;
      if (fileExists(modified))
        return modified;
    }
    break;
  }
}
function resolveImportSpecifierAfterMapping(resolved, afterPathMapping) {
  const resolvedFile = resolveImportSpecifierExtension(resolved);
  if (resolvedFile)
    return resolvedFile;
  if (dirExists(resolved)) {
    const packageJsonPath = import_path2.default.join(resolved, "package.json");
    if (afterPathMapping) {
      const mainField = getMainFieldFromPackageJson(packageJsonPath);
      const mainFieldResolved = mainField ? resolveImportSpecifierExtension(import_path2.default.resolve(resolved, mainField)) : void 0;
      return mainFieldResolved || resolveImportSpecifierExtension(import_path2.default.join(resolved, "index"));
    }
    if (fileExists(packageJsonPath))
      return resolved;
    const dirImport = import_path2.default.join(resolved, "index");
    return resolveImportSpecifierExtension(dirImport);
  }
}
function fileExists(resolved) {
  return import_fs2.default.statSync(resolved, { throwIfNoEntry: false })?.isFile();
}
function dirExists(resolved) {
  return import_fs2.default.statSync(resolved, { throwIfNoEntry: false })?.isDirectory();
}
function takeFirst(...args) {
  for (const arg of args) {
    if (arg !== void 0)
      return arg;
  }
  return void 0;
}

// packages/playwright/src/common/config.ts
var defaultTimeout = 3e4;
var FullConfigInternal = class {
  constructor(location, userConfig, configCLIOverrides, metadata) {
    this.projects = [];
    this.defineConfigWasUsed = false;
    this.globalSetups = [];
    this.globalTeardowns = [];
    if (configCLIOverrides.projects && userConfig.projects)
      throw new Error(`Cannot use --browser option when configuration file defines projects. Specify browserName in the projects instead.`);
    const { resolvedConfigFile, configDir } = location;
    const packageJsonPath = getPackageJsonPath(configDir);
    const packageJsonDir = packageJsonPath ? import_path3.default.dirname(packageJsonPath) : process.cwd();
    this.configDir = configDir;
    this.configCLIOverrides = configCLIOverrides;
    const privateConfiguration = userConfig["@playwright/test"];
    this.plugins = (privateConfiguration?.plugins || []).map((p) => ({ factory: p }));
    this.singleTSConfigPath = pathResolve(configDir, userConfig.tsconfig);
    this.captureGitInfo = userConfig.captureGitInfo;
    this.failOnFlakyTests = takeFirst(configCLIOverrides.failOnFlakyTests, userConfig.failOnFlakyTests, false);
    this.globalSetups = (Array.isArray(userConfig.globalSetup) ? userConfig.globalSetup : [userConfig.globalSetup]).map((s) => resolveScript(s, configDir)).filter((script) => script !== void 0);
    this.globalTeardowns = (Array.isArray(userConfig.globalTeardown) ? userConfig.globalTeardown : [userConfig.globalTeardown]).map((s) => resolveScript(s, configDir)).filter((script) => script !== void 0);
    userConfig.metadata = userConfig.metadata || {};
    const globalTags = Array.isArray(userConfig.tag) ? userConfig.tag : userConfig.tag ? [userConfig.tag] : [];
    for (const tag of globalTags) {
      if (tag[0] !== "@")
        throw new Error(`Tag must start with "@" symbol, got "${tag}" instead.`);
    }
    this.config = {
      configFile: resolvedConfigFile,
      rootDir: pathResolve(configDir, userConfig.testDir) || configDir,
      forbidOnly: takeFirst(configCLIOverrides.forbidOnly, userConfig.forbidOnly, false),
      fullyParallel: takeFirst(configCLIOverrides.fullyParallel, userConfig.fullyParallel, false),
      globalSetup: this.globalSetups[0] ?? null,
      globalTeardown: this.globalTeardowns[0] ?? null,
      globalTimeout: takeFirst(configCLIOverrides.debug ? 0 : void 0, configCLIOverrides.globalTimeout, userConfig.globalTimeout, 0),
      grep: takeFirst(userConfig.grep, defaultGrep),
      grepInvert: takeFirst(userConfig.grepInvert, null),
      maxFailures: takeFirst(configCLIOverrides.debug ? 1 : void 0, configCLIOverrides.maxFailures, userConfig.maxFailures, 0),
      metadata: metadata ?? userConfig.metadata,
      preserveOutput: takeFirst(userConfig.preserveOutput, "always"),
      projects: [],
      quiet: takeFirst(configCLIOverrides.quiet, userConfig.quiet, false),
      reporter: takeFirst(configCLIOverrides.reporter, resolveReporters(userConfig.reporter, configDir), [[defaultReporter]]),
      reportSlowTests: takeFirst(userConfig.reportSlowTests, {
        max: 5,
        threshold: 3e5
        /* 5 minutes */
      }),
      shard: takeFirst(configCLIOverrides.shard, userConfig.shard, null),
      tags: globalTags,
      updateSnapshots: takeFirst(configCLIOverrides.updateSnapshots, userConfig.updateSnapshots, "missing"),
      updateSourceMethod: takeFirst(configCLIOverrides.updateSourceMethod, userConfig.updateSourceMethod, "patch"),
      version: import_package2.packageJSON.version,
      workers: resolveWorkers(takeFirst(configCLIOverrides.debug || configCLIOverrides.pause ? 1 : void 0, configCLIOverrides.workers, userConfig.workers, "50%")),
      webServer: null
    };
    for (const key in userConfig) {
      if (key.startsWith("@"))
        this.config[key] = userConfig[key];
    }
    this.config[configInternalSymbol] = this;
    const webServers = takeFirst(userConfig.webServer, null);
    if (Array.isArray(webServers)) {
      this.config.webServer = null;
      this.webServers = webServers;
    } else if (webServers) {
      this.config.webServer = webServers;
      this.webServers = [webServers];
    } else {
      this.webServers = [];
    }
    const projectConfigs = configCLIOverrides.projects || userConfig.projects || [{ ...userConfig, workers: void 0 }];
    this.projects = projectConfigs.map((p) => new FullProjectInternal(configDir, userConfig, this, p, this.configCLIOverrides, packageJsonDir));
    resolveProjectDependencies(this.projects);
    this._assignUniqueProjectIds(this.projects);
    this.config.projects = this.projects.map((p) => p.project);
  }
  _assignUniqueProjectIds(projects) {
    const usedNames = /* @__PURE__ */ new Set();
    for (const p of projects) {
      const name = p.project.name || "";
      for (let i = 0; i < projects.length; ++i) {
        const candidate = name + (i ? i : "");
        if (usedNames.has(candidate))
          continue;
        p.id = candidate;
        p.project.__projectId = p.id;
        usedNames.add(candidate);
        break;
      }
    }
  }
};
var FullProjectInternal = class {
  constructor(configDir, config, fullConfig, projectConfig, configCLIOverrides, packageJsonDir) {
    this.id = "";
    this.deps = [];
    this.fullConfig = fullConfig;
    const testDir = takeFirst(pathResolve(configDir, projectConfig.testDir), pathResolve(configDir, config.testDir), fullConfig.configDir);
    this.snapshotPathTemplate = takeFirst(projectConfig.snapshotPathTemplate, config.snapshotPathTemplate);
    this.project = {
      grep: takeFirst(projectConfig.grep, config.grep, defaultGrep),
      grepInvert: takeFirst(projectConfig.grepInvert, config.grepInvert, null),
      outputDir: takeFirst(configCLIOverrides.outputDir, pathResolve(configDir, projectConfig.outputDir), pathResolve(configDir, config.outputDir), import_path3.default.join(packageJsonDir, "test-results")),
      // Note: we either apply the cli override for repeatEach or not, depending on whether the
      // project is top-level vs dependency. See collectProjectsAndTestFiles in loadUtils.
      repeatEach: takeFirst(projectConfig.repeatEach, config.repeatEach, 1),
      retries: takeFirst(configCLIOverrides.retries, projectConfig.retries, config.retries, 0),
      metadata: takeFirst(projectConfig.metadata, config.metadata, {}),
      name: takeFirst(projectConfig.name, config.name, ""),
      testDir,
      snapshotDir: takeFirst(pathResolve(configDir, projectConfig.snapshotDir), pathResolve(configDir, config.snapshotDir), testDir),
      testIgnore: takeFirst(projectConfig.testIgnore, config.testIgnore, []),
      testMatch: takeFirst(projectConfig.testMatch, config.testMatch, "**/*.@(spec|test).?(c|m)[jt]s?(x)"),
      timeout: takeFirst(configCLIOverrides.debug === "inspector" ? 0 : void 0, configCLIOverrides.timeout, projectConfig.timeout, config.timeout, defaultTimeout),
      use: mergeObjects(config.use, projectConfig.use, configCLIOverrides.use),
      dependencies: projectConfig.dependencies || [],
      teardown: projectConfig.teardown,
      ignoreSnapshots: takeFirst(configCLIOverrides.ignoreSnapshots, projectConfig.ignoreSnapshots, config.ignoreSnapshots, false)
    };
    this.fullyParallel = takeFirst(configCLIOverrides.fullyParallel, projectConfig.fullyParallel, config.fullyParallel, void 0);
    this.expect = takeFirst(projectConfig.expect, config.expect, {});
    if (this.expect.toHaveScreenshot?.stylePath) {
      const stylePaths = Array.isArray(this.expect.toHaveScreenshot.stylePath) ? this.expect.toHaveScreenshot.stylePath : [this.expect.toHaveScreenshot.stylePath];
      this.expect.toHaveScreenshot.stylePath = stylePaths.map((stylePath) => import_path3.default.resolve(configDir, stylePath));
    }
    this.respectGitIgnore = takeFirst(projectConfig.respectGitIgnore, config.respectGitIgnore, !projectConfig.testDir && !config.testDir);
    this.workers = projectConfig.workers ? resolveWorkers(projectConfig.workers) : void 0;
    if (configCLIOverrides.debug && this.workers)
      this.workers = 1;
  }
};
function pathResolve(baseDir, relative) {
  if (!relative)
    return void 0;
  return import_path3.default.resolve(baseDir, relative);
}
function resolveReporters(reporters, rootDir) {
  return toReporters(reporters)?.map(([id, arg]) => {
    if (builtInReporters.includes(id))
      return [id, arg];
    return [require.resolve(id, { paths: [rootDir] }), arg];
  });
}
function resolveWorkers(workers) {
  if (typeof workers === "string") {
    if (workers.endsWith("%")) {
      const cpus = import_os2.default.cpus().length;
      return Math.max(1, Math.floor(cpus * (parseInt(workers, 10) / 100)));
    }
    const parsedWorkers = parseInt(workers, 10);
    if (isNaN(parsedWorkers))
      throw new Error(`Workers ${workers} must be a number or percentage.`);
    if (parsedWorkers < 1)
      throw new Error(`Workers must be a positive number, received ${parsedWorkers}.`);
    return parsedWorkers;
  }
  if (workers < 1)
    throw new Error(`Workers must be a positive number, received ${workers}.`);
  return workers;
}
function resolveProjectDependencies(projects) {
  const teardownSet = /* @__PURE__ */ new Set();
  for (const project of projects) {
    for (const dependencyName of project.project.dependencies) {
      const dependencies = projects.filter((p) => p.project.name === dependencyName);
      if (!dependencies.length)
        throw new Error(`Project '${project.project.name}' depends on unknown project '${dependencyName}'`);
      if (dependencies.length > 1)
        throw new Error(`Project dependencies should have unique names, reading ${dependencyName}`);
      project.deps.push(...dependencies);
    }
    if (project.project.teardown) {
      const teardowns = projects.filter((p) => p.project.name === project.project.teardown);
      if (!teardowns.length)
        throw new Error(`Project '${project.project.name}' has unknown teardown project '${project.project.teardown}'`);
      if (teardowns.length > 1)
        throw new Error(`Project teardowns should have unique names, reading ${project.project.teardown}`);
      const teardown = teardowns[0];
      project.teardown = teardown;
      teardownSet.add(teardown);
    }
  }
  for (const teardown of teardownSet) {
    if (teardown.deps.length)
      throw new Error(`Teardown project ${teardown.project.name} must not have dependencies`);
  }
  for (const project of projects) {
    for (const dep of project.deps) {
      if (teardownSet.has(dep))
        throw new Error(`Project ${project.project.name} must not depend on a teardown project ${dep.project.name}`);
    }
  }
}
function toReporters(reporters) {
  if (!reporters)
    return;
  if (typeof reporters === "string")
    return [[reporters]];
  return reporters;
}
var builtInReporters = ["list", "line", "dot", "json", "junit", "null", "github", "html", "blob"];
function resolveScript(id, rootDir) {
  if (!id)
    return void 0;
  const localPath = import_path3.default.resolve(rootDir, id);
  if (import_fs3.default.existsSync(localPath))
    return localPath;
  return require.resolve(id, { paths: [rootDir] });
}
var defaultGrep = /.*/;
var defaultReporter = process.env.CI ? "dot" : "list";
var configInternalSymbol = Symbol("configInternalSymbol");
function getProjectId(project) {
  return project.__projectId;
}

// packages/playwright/src/common/configLoader.ts
var configLoader_exports = {};
__export(configLoader_exports, {
  defineConfig: () => defineConfig,
  deserializeConfig: () => deserializeConfig,
  loadConfig: () => loadConfig,
  loadConfigFromFile: () => loadConfigFromFile,
  loadEmptyConfigForMergeReports: () => loadEmptyConfigForMergeReports,
  resolveConfigLocation: () => resolveConfigLocation
});
var import_fs6 = __toESM(require("fs"));
var import_path7 = __toESM(require("path"));

// packages/playwright/src/transform/transform.ts
var transform_exports = {};
__export(transform_exports, {
  requireOrImport: () => requireOrImport,
  resolveHook: () => resolveHook,
  setSingleTSConfig: () => setSingleTSConfig,
  setTransformConfig: () => setTransformConfig,
  setTransformData: () => setTransformData,
  shouldTransform: () => shouldTransform,
  singleTSConfig: () => singleTSConfig,
  transformConfig: () => transformConfig,
  transformHook: () => transformHook,
  wrapFunctionWithLocation: () => wrapFunctionWithLocation
});
var import_fs5 = __toESM(require("fs"));
var import_module2 = __toESM(require("module"));
var import_path6 = __toESM(require("path"));
var import_url2 = __toESM(require("url"));
var import_crypto = __toESM(require("crypto"));

// packages/playwright/src/transform/tsconfig-loader.ts
var import_path4 = __toESM(require("path"));
var import_fs4 = __toESM(require("fs"));
var json5 = require("playwright-core/lib/utilsBundle").json5;
function loadTsConfig(configPath) {
  try {
    const references = [];
    const config = innerLoadTsConfig(configPath, references);
    return [config, ...references];
  } catch (e) {
    throw new Error(`Failed to load tsconfig file at ${configPath}:
${e.message}`);
  }
}
function resolveConfigFile(baseConfigFile, referencedConfigFile) {
  if (!referencedConfigFile.endsWith(".json"))
    referencedConfigFile += ".json";
  const currentDir = import_path4.default.dirname(baseConfigFile);
  let resolvedConfigFile = import_path4.default.resolve(currentDir, referencedConfigFile);
  if (referencedConfigFile.includes("/") && referencedConfigFile.includes(".") && !import_fs4.default.existsSync(resolvedConfigFile))
    resolvedConfigFile = import_path4.default.join(currentDir, "node_modules", referencedConfigFile);
  return resolvedConfigFile;
}
function innerLoadTsConfig(configFilePath, references, visited = /* @__PURE__ */ new Map()) {
  if (visited.has(configFilePath))
    return visited.get(configFilePath);
  let result2 = {
    tsConfigPath: configFilePath
  };
  visited.set(configFilePath, result2);
  if (!import_fs4.default.existsSync(configFilePath))
    return result2;
  const configString = import_fs4.default.readFileSync(configFilePath, "utf-8");
  const cleanedJson = StripBom(configString);
  const parsedConfig = json5.parse(cleanedJson);
  const extendsArray = Array.isArray(parsedConfig.extends) ? parsedConfig.extends : parsedConfig.extends ? [parsedConfig.extends] : [];
  for (const extendedConfig of extendsArray) {
    const extendedConfigPath = resolveConfigFile(configFilePath, extendedConfig);
    const base = innerLoadTsConfig(extendedConfigPath, references, visited);
    Object.assign(result2, base, { tsConfigPath: configFilePath });
  }
  if (parsedConfig.compilerOptions?.allowJs !== void 0)
    result2.allowJs = parsedConfig.compilerOptions.allowJs;
  if (parsedConfig.compilerOptions?.paths !== void 0) {
    result2.paths = {
      mapping: parsedConfig.compilerOptions.paths,
      pathsBasePath: import_path4.default.dirname(configFilePath)
    };
  }
  if (parsedConfig.compilerOptions?.baseUrl !== void 0) {
    result2.absoluteBaseUrl = import_path4.default.resolve(import_path4.default.dirname(configFilePath), parsedConfig.compilerOptions.baseUrl);
  }
  for (const ref of parsedConfig.references || [])
    references.push(innerLoadTsConfig(resolveConfigFile(configFilePath, ref.path), references, visited));
  if (import_path4.default.basename(configFilePath) === "jsconfig.json" && result2.allowJs === void 0)
    result2.allowJs = true;
  return result2;
}
function StripBom(string) {
  if (typeof string !== "string") {
    throw new TypeError(`Expected a string, got ${typeof string}`);
  }
  if (string.charCodeAt(0) === 65279) {
    return string.slice(1);
  }
  return string;
}

// packages/playwright/src/transform/transform.ts
var import_package3 = require("../package");

// packages/playwright/src/transform/pirates.ts
var import_module = __toESM(require("module"));
var import_path5 = __toESM(require("path"));
function addHook(transformHook2, shouldTransform2, extensions) {
  const extensionsToOverwrite = extensions.filter((e) => e !== ".cjs");
  const allSupportedExtensions = new Set(extensions);
  const loaders = import_module.default._extensions;
  const jsLoader = loaders[".js"];
  for (const extension of extensionsToOverwrite) {
    let newLoader2 = function(mod, filename, ...loaderArgs) {
      if (allSupportedExtensions.has(import_path5.default.extname(filename)) && shouldTransform2(filename)) {
        let newCompile2 = function(code, file2, ...ignoredArgs) {
          mod._compile = oldCompile;
          return oldCompile.call(this, transformHook2(code, filename), file2);
        };
        var newCompile = newCompile2;
        const oldCompile = mod._compile;
        mod._compile = newCompile2;
      }
      originalLoader.call(this, mod, filename, ...loaderArgs);
    };
    var newLoader = newLoader2;
    const originalLoader = loaders[extension] || jsLoader;
    loaders[extension] = newLoader2;
  }
}

// packages/playwright/src/transform/transform.ts
var sourceMapSupport2 = require("playwright-core/lib/utilsBundle").sourceMapSupport;
var version = import_package3.packageJSON.version;
var cachedTSConfigs = /* @__PURE__ */ new Map();
var _transformConfig = {
  babelPlugins: [],
  external: []
};
var _externalMatcher = () => false;
function setTransformConfig(config) {
  _transformConfig = config;
  _externalMatcher = createFileMatcher(_transformConfig.external);
}
function transformConfig() {
  return _transformConfig;
}
var _singleTSConfigPath;
var _singleTSConfig;
function setSingleTSConfig(value) {
  _singleTSConfigPath = value;
}
function singleTSConfig() {
  return _singleTSConfigPath;
}
function validateTsConfig(tsconfig) {
  const pathsBase = tsconfig.absoluteBaseUrl ?? tsconfig.paths?.pathsBasePath;
  const pathsFallback = tsconfig.absoluteBaseUrl ? [{ key: "*", values: ["*"] }] : [];
  return {
    allowJs: !!tsconfig.allowJs,
    pathsBase,
    paths: Object.entries(tsconfig.paths?.mapping || {}).map(([key, values]) => ({ key, values })).concat(pathsFallback)
  };
}
function loadAndValidateTsconfigsForFile(file2) {
  if (_singleTSConfigPath && !_singleTSConfig)
    _singleTSConfig = loadTsConfig(_singleTSConfigPath).map(validateTsConfig);
  if (_singleTSConfig)
    return _singleTSConfig;
  return loadAndValidateTsconfigsForFolder(import_path6.default.dirname(file2));
}
function loadAndValidateTsconfigsForFolder(folder) {
  const foldersWithConfig = [];
  let currentFolder = import_path6.default.resolve(folder);
  let result2;
  while (true) {
    const cached = cachedTSConfigs.get(currentFolder);
    if (cached) {
      result2 = cached;
      break;
    }
    foldersWithConfig.push(currentFolder);
    for (const name of ["tsconfig.json", "jsconfig.json"]) {
      const configPath = import_path6.default.join(currentFolder, name);
      if (import_fs5.default.existsSync(configPath)) {
        const loaded = loadTsConfig(configPath);
        result2 = loaded.map(validateTsConfig);
        break;
      }
    }
    if (result2)
      break;
    const parentFolder = import_path6.default.resolve(currentFolder, "../");
    if (currentFolder === parentFolder)
      break;
    currentFolder = parentFolder;
  }
  result2 = result2 || [];
  for (const folder2 of foldersWithConfig)
    cachedTSConfigs.set(folder2, result2);
  return result2;
}
var pathSeparator = process.platform === "win32" ? ";" : ":";
var builtins = new Set(import_module2.default.builtinModules);
function resolveHook(filename, specifier) {
  if (specifier.startsWith("node:") || builtins.has(specifier))
    return;
  if (!shouldTransform(filename))
    return;
  if (isRelativeSpecifier(specifier))
    return resolveImportSpecifierAfterMapping(import_path6.default.resolve(import_path6.default.dirname(filename), specifier), false);
  const isTypeScript = filename.endsWith(".ts") || filename.endsWith(".tsx");
  const tsconfigs = loadAndValidateTsconfigsForFile(filename);
  for (const tsconfig of tsconfigs) {
    if (!isTypeScript && !tsconfig.allowJs)
      continue;
    let longestPrefixLength = -1;
    let pathMatchedByLongestPrefix;
    for (const { key, values } of tsconfig.paths) {
      let matchedPartOfSpecifier = specifier;
      const [keyPrefix, keySuffix] = key.split("*");
      if (key.includes("*")) {
        if (keyPrefix) {
          if (!specifier.startsWith(keyPrefix))
            continue;
          matchedPartOfSpecifier = matchedPartOfSpecifier.substring(keyPrefix.length, matchedPartOfSpecifier.length);
        }
        if (keySuffix) {
          if (!specifier.endsWith(keySuffix))
            continue;
          matchedPartOfSpecifier = matchedPartOfSpecifier.substring(0, matchedPartOfSpecifier.length - keySuffix.length);
        }
      } else {
        if (specifier !== key)
          continue;
        matchedPartOfSpecifier = specifier;
      }
      if (keyPrefix.length <= longestPrefixLength)
        continue;
      for (const value of values) {
        let candidate = value;
        if (value.includes("*"))
          candidate = candidate.replace("*", matchedPartOfSpecifier);
        candidate = import_path6.default.resolve(tsconfig.pathsBase, candidate);
        const existing = resolveImportSpecifierAfterMapping(candidate, true);
        if (existing) {
          longestPrefixLength = keyPrefix.length;
          pathMatchedByLongestPrefix = existing;
        }
      }
    }
    if (pathMatchedByLongestPrefix)
      return pathMatchedByLongestPrefix;
  }
  if (import_path6.default.isAbsolute(specifier)) {
    return resolveImportSpecifierAfterMapping(specifier, false);
  }
}
function shouldTransform(filename) {
  if (_externalMatcher(filename))
    return false;
  return !belongsToNodeModules(filename);
}
var transformData;
function setTransformData(pluginName, value) {
  transformData.set(pluginName, value);
}
function transformHook(originalCode, filename, moduleUrl) {
  const hasPreprocessor = process.env.PW_TEST_SOURCE_TRANSFORM && process.env.PW_TEST_SOURCE_TRANSFORM_SCOPE && process.env.PW_TEST_SOURCE_TRANSFORM_SCOPE.split(pathSeparator).some((f) => filename.startsWith(f));
  const pluginsPrologue = _transformConfig.babelPlugins;
  const pluginsEpilogue = hasPreprocessor ? [[process.env.PW_TEST_SOURCE_TRANSFORM]] : [];
  const hash = calculateHash(originalCode, filename, !!moduleUrl, pluginsPrologue, pluginsEpilogue);
  const { cachedCode, addToCache, serializedCache } = getFromCompilationCache(filename, hash, moduleUrl);
  if (cachedCode !== void 0)
    return { code: cachedCode, serializedCache };
  process.env.BROWSERSLIST_IGNORE_OLD_DATA = "true";
  const { babelTransform } = require((0, import_package3.libPath)("transform", "babelBundle"));
  transformData = /* @__PURE__ */ new Map();
  const setTransformDataForPlugin = (key, value) => transformData.set(key, value);
  const wrappedPrologue = pluginsPrologue.map(([name, opts]) => [
    name,
    { ...opts || {}, setTransformData: setTransformDataForPlugin }
  ]);
  const babelResult = babelTransform(originalCode, filename, !!moduleUrl, wrappedPrologue, pluginsEpilogue, _transformConfig.jsxImportSource);
  if (!babelResult?.code)
    return { code: originalCode, serializedCache };
  const { code, map } = babelResult;
  const added = addToCache(code, map, transformData);
  return { code, serializedCache: added.serializedCache };
}
function calculateHash(content, filePath, isModule2, pluginsPrologue, pluginsEpilogue) {
  const hash = import_crypto.default.createHash("sha1").update(isModule2 ? "esm" : "no_esm").update(content).update(filePath).update(version).update(pluginsPrologue.map((p) => p[0]).join(",")).update(pluginsEpilogue.map((p) => p[0]).join(",")).digest("hex");
  return hash;
}
async function requireOrImport(file) {
  installTransformIfNeeded();
  const isModule = fileIsModule(file);
  if (isModule) {
    const fileName = import_url2.default.pathToFileURL(file);
    const esmImport = () => eval(`import(${JSON.stringify(fileName)})`);
    await eval(`import(${JSON.stringify(fileName + ".esm.preflight")})`).catch((error) => debugTest("Failed to load preflight for " + file + ", source maps may be missing for errors thrown during loading.", error)).finally(nextTask);
    return await esmImport().finally(nextTask);
  }
  const result = require(file);
  const depsCollector = currentFileDepsCollector();
  if (depsCollector) {
    const module2 = require.cache[file];
    if (module2)
      collectCJSDependencies(module2, depsCollector);
  }
  return result;
}
var transformInstalled = false;
function installTransformIfNeeded() {
  if (transformInstalled)
    return;
  transformInstalled = true;
  installSourceMapSupport();
  const originalResolveFilename = import_module2.default._resolveFilename;
  function resolveFilename(specifier, parent, ...rest) {
    if (parent) {
      const resolved = resolveHook(parent.filename, specifier);
      if (resolved !== void 0)
        specifier = resolved;
    }
    return originalResolveFilename.call(this, specifier, parent, ...rest);
  }
  import_module2.default._resolveFilename = resolveFilename;
  addHook((code, filename) => {
    return transformHook(code, filename).code;
  }, shouldTransform, [".ts", ".tsx", ".js", ".jsx", ".mjs", ".mts", ".cjs", ".cts"]);
}
var collectCJSDependencies = (module2, dependencies) => {
  module2.children.forEach((child) => {
    if (!belongsToNodeModules(child.filename) && !dependencies.has(child.filename)) {
      dependencies.add(child.filename);
      collectCJSDependencies(child, dependencies);
    }
  });
};
function wrapFunctionWithLocation(func) {
  return (...args) => {
    const oldPrepareStackTrace = Error.prepareStackTrace;
    Error.prepareStackTrace = (error, stackFrames) => {
      const frame = sourceMapSupport2.wrapCallSite(stackFrames[1]);
      const fileName2 = frame.getFileName();
      const file2 = fileName2 && fileName2.startsWith("file://") ? import_url2.default.fileURLToPath(fileName2) : fileName2;
      return {
        file: file2,
        line: frame.getLineNumber(),
        column: frame.getColumnNumber()
      };
    };
    const oldStackTraceLimit = Error.stackTraceLimit;
    Error.stackTraceLimit = 2;
    const obj = {};
    Error.captureStackTrace(obj);
    const location = obj.stack;
    Error.stackTraceLimit = oldStackTraceLimit;
    Error.prepareStackTrace = oldPrepareStackTrace;
    return func(location, ...args);
  };
}
function isRelativeSpecifier(specifier) {
  return specifier === "." || specifier === ".." || specifier.startsWith("./") || specifier.startsWith("../");
}
async function nextTask() {
  return new Promise((resolve) => setTimeout(resolve, 0));
}

// packages/playwright/src/common/esmLoaderHost.ts
var esmLoaderHost_exports = {};
__export(esmLoaderHost_exports, {
  configureESMLoader: () => configureESMLoader,
  configureESMLoaderTransformConfig: () => configureESMLoaderTransformConfig,
  incorporateCompilationCache: () => incorporateCompilationCache,
  registerESMLoader: () => registerESMLoader,
  startCollectingFileDeps: () => startCollectingFileDeps2,
  stopCollectingFileDeps: () => stopCollectingFileDeps2
});
var import_url3 = __toESM(require("url"));

// packages/playwright/src/transform/portTransport.ts
var PortTransport = class {
  constructor(port, handler) {
    this._lastId = 0;
    this._callbacks = /* @__PURE__ */ new Map();
    this._port = port;
    port.addEventListener("message", async (event) => {
      const message = event.data;
      const { id, ackId, method, params, result: result2 } = message;
      if (ackId) {
        const callback = this._callbacks.get(ackId);
        this._callbacks.delete(ackId);
        this._resetRef();
        callback?.(result2);
        return;
      }
      const handlerResult = await handler(method, params);
      if (id)
        this._port.postMessage({ ackId: id, result: handlerResult });
    });
    this._resetRef();
  }
  post(method, params) {
    this._port.postMessage({ method, params });
  }
  async send(method, params) {
    return await new Promise((f) => {
      const id = ++this._lastId;
      this._callbacks.set(id, f);
      this._resetRef();
      this._port.postMessage({ id, method, params });
    });
  }
  _resetRef() {
    if (this._callbacks.size) {
      this._port.ref();
    } else {
      this._port.unref();
    }
  }
};

// packages/playwright/src/common/esmLoaderHost.ts
var loaderChannel;
function registerESMLoader() {
  if (process.env.PW_DISABLE_TS_ESM)
    return true;
  if ("Bun" in globalThis)
    return true;
  if (loaderChannel)
    return true;
  const register = require("node:module").register;
  if (!register)
    return false;
  const { port1, port2 } = new MessageChannel();
  register(import_url3.default.pathToFileURL(require.resolve("../transform/esmLoader.js")), {
    data: { port: port2 },
    transferList: [port2]
  });
  loaderChannel = createPortTransport(port1);
  return true;
}
function createPortTransport(port) {
  return new PortTransport(port, async (method, params) => {
    if (method === "pushToCompilationCache")
      addToCompilationCache(params.cache);
  });
}
async function startCollectingFileDeps2() {
  if (!loaderChannel)
    return;
  await loaderChannel.send("startCollectingFileDeps", {});
}
async function stopCollectingFileDeps2(file2) {
  if (!loaderChannel)
    return;
  await loaderChannel.send("stopCollectingFileDeps", { file: file2 });
}
async function incorporateCompilationCache() {
  if (!loaderChannel)
    return;
  const result2 = await loaderChannel.send("getCompilationCache", {});
  addToCompilationCache(result2.cache);
}
async function configureESMLoader() {
  if (!loaderChannel)
    return;
  await loaderChannel.send("setSingleTSConfig", { tsconfig: singleTSConfig() });
  await loaderChannel.send("addToCompilationCache", { cache: serializeCompilationCache() });
}
async function configureESMLoaderTransformConfig() {
  if (!loaderChannel)
    return;
  await loaderChannel.send("setSingleTSConfig", { tsconfig: singleTSConfig() });
  await loaderChannel.send("setTransformConfig", { config: transformConfig() });
}

// packages/playwright/src/common/configLoader.ts
var { isRegExp: isRegExp2 } = require("playwright-core/lib/coreBundle").iso;
var kDefineConfigWasUsed = Symbol("defineConfigWasUsed");
var defineConfig = (...configs) => {
  let result2 = configs[0];
  for (let i = 1; i < configs.length; ++i) {
    const config = configs[i];
    const prevProjects = result2.projects;
    result2 = {
      ...result2,
      ...config,
      expect: {
        ...result2.expect,
        ...config.expect
      },
      use: {
        ...result2.use,
        ...config.use
      },
      build: {
        ...result2.build,
        ...config.build
      },
      webServer: [
        ...Array.isArray(result2.webServer) ? result2.webServer : result2.webServer ? [result2.webServer] : [],
        ...Array.isArray(config.webServer) ? config.webServer : config.webServer ? [config.webServer] : []
      ]
    };
    if (!result2.projects && !config.projects)
      continue;
    const projectOverrides = /* @__PURE__ */ new Map();
    for (const project of config.projects || [])
      projectOverrides.set(project.name, project);
    const projects = [];
    for (const project of prevProjects || []) {
      const projectOverride = projectOverrides.get(project.name);
      if (projectOverride) {
        projects.push({
          ...project,
          ...projectOverride,
          use: {
            ...project.use,
            ...projectOverride.use
          }
        });
        projectOverrides.delete(project.name);
      } else {
        projects.push(project);
      }
    }
    projects.push(...projectOverrides.values());
    result2.projects = projects;
  }
  result2[kDefineConfigWasUsed] = true;
  return result2;
};
async function deserializeConfig(data) {
  if (data.compilationCache)
    addToCompilationCache(data.compilationCache);
  return await loadConfig(data.location, data.configCLIOverrides, void 0, data.metadata ? JSON.parse(data.metadata) : void 0);
}
async function loadUserConfig(location) {
  let object = location.resolvedConfigFile ? await requireOrImport(location.resolvedConfigFile) : {};
  if (object && typeof object === "object" && "default" in object)
    object = object["default"];
  return object;
}
async function loadConfig(location, overrides, ignoreProjectDependencies = false, metadata) {
  if (!registerESMLoader()) {
    if (location.resolvedConfigFile && fileIsModule(location.resolvedConfigFile))
      throw errorWithFile(location.resolvedConfigFile, `Playwright requires Node.js 18.19 or higher to load esm modules. Please update your version of Node.js.`);
  }
  setSingleTSConfig(overrides?.tsconfig);
  await configureESMLoader();
  const userConfig = await loadUserConfig(location);
  validateConfig(location.resolvedConfigFile || "<default config>", userConfig);
  const fullConfig = new FullConfigInternal(location, userConfig, overrides || {}, metadata);
  fullConfig.defineConfigWasUsed = !!userConfig[kDefineConfigWasUsed];
  if (ignoreProjectDependencies) {
    for (const project of fullConfig.projects) {
      project.deps = [];
      project.teardown = void 0;
    }
  }
  const babelPlugins = userConfig["@playwright/test"]?.babelPlugins || [];
  const external = userConfig.build?.external || [];
  const jsxImportSource = import_path7.default.dirname(require.resolve("playwright"));
  setTransformConfig({ babelPlugins, external, jsxImportSource });
  if (!overrides?.tsconfig)
    setSingleTSConfig(fullConfig?.singleTSConfigPath);
  await configureESMLoaderTransformConfig();
  return fullConfig;
}
function validateConfig(file2, config) {
  if (typeof config !== "object" || !config)
    throw errorWithFile(file2, `Configuration file must export a single object`);
  validateProject(file2, config, "config");
  if ("forbidOnly" in config && config.forbidOnly !== void 0) {
    if (typeof config.forbidOnly !== "boolean")
      throw errorWithFile(file2, `config.forbidOnly must be a boolean`);
  }
  if ("globalSetup" in config && config.globalSetup !== void 0) {
    if (Array.isArray(config.globalSetup)) {
      config.globalSetup.forEach((item, index) => {
        if (typeof item !== "string")
          throw errorWithFile(file2, `config.globalSetup[${index}] must be a string`);
      });
    } else if (typeof config.globalSetup !== "string") {
      throw errorWithFile(file2, `config.globalSetup must be a string`);
    }
  }
  if ("globalTeardown" in config && config.globalTeardown !== void 0) {
    if (Array.isArray(config.globalTeardown)) {
      config.globalTeardown.forEach((item, index) => {
        if (typeof item !== "string")
          throw errorWithFile(file2, `config.globalTeardown[${index}] must be a string`);
      });
    } else if (typeof config.globalTeardown !== "string") {
      throw errorWithFile(file2, `config.globalTeardown must be a string`);
    }
  }
  if ("globalTimeout" in config && config.globalTimeout !== void 0) {
    if (typeof config.globalTimeout !== "number" || config.globalTimeout < 0)
      throw errorWithFile(file2, `config.globalTimeout must be a non-negative number`);
  }
  if ("grep" in config && config.grep !== void 0) {
    if (Array.isArray(config.grep)) {
      config.grep.forEach((item, index) => {
        if (!isRegExp2(item))
          throw errorWithFile(file2, `config.grep[${index}] must be a RegExp`);
      });
    } else if (!isRegExp2(config.grep)) {
      throw errorWithFile(file2, `config.grep must be a RegExp`);
    }
  }
  if ("grepInvert" in config && config.grepInvert !== void 0) {
    if (Array.isArray(config.grepInvert)) {
      config.grepInvert.forEach((item, index) => {
        if (!isRegExp2(item))
          throw errorWithFile(file2, `config.grepInvert[${index}] must be a RegExp`);
      });
    } else if (!isRegExp2(config.grepInvert)) {
      throw errorWithFile(file2, `config.grepInvert must be a RegExp`);
    }
  }
  if ("maxFailures" in config && config.maxFailures !== void 0) {
    if (typeof config.maxFailures !== "number" || config.maxFailures < 0)
      throw errorWithFile(file2, `config.maxFailures must be a non-negative number`);
  }
  if ("preserveOutput" in config && config.preserveOutput !== void 0) {
    if (typeof config.preserveOutput !== "string" || !["always", "never", "failures-only"].includes(config.preserveOutput))
      throw errorWithFile(file2, `config.preserveOutput must be one of "always", "never" or "failures-only"`);
  }
  if ("projects" in config && config.projects !== void 0) {
    if (!Array.isArray(config.projects))
      throw errorWithFile(file2, `config.projects must be an array`);
    config.projects.forEach((project, index) => {
      validateProject(file2, project, `config.projects[${index}]`);
    });
  }
  if ("quiet" in config && config.quiet !== void 0) {
    if (typeof config.quiet !== "boolean")
      throw errorWithFile(file2, `config.quiet must be a boolean`);
  }
  if ("reporter" in config && config.reporter !== void 0) {
    if (Array.isArray(config.reporter)) {
      config.reporter.forEach((item, index) => {
        if (!Array.isArray(item) || item.length <= 0 || item.length > 2 || typeof item[0] !== "string")
          throw errorWithFile(file2, `config.reporter[${index}] must be a tuple [name, optionalArgument]`);
      });
    } else if (typeof config.reporter !== "string") {
      throw errorWithFile(file2, `config.reporter must be a string`);
    }
  }
  if ("reportSlowTests" in config && config.reportSlowTests !== void 0 && config.reportSlowTests !== null) {
    if (!config.reportSlowTests || typeof config.reportSlowTests !== "object")
      throw errorWithFile(file2, `config.reportSlowTests must be an object`);
    if (!("max" in config.reportSlowTests) || typeof config.reportSlowTests.max !== "number" || config.reportSlowTests.max < 0)
      throw errorWithFile(file2, `config.reportSlowTests.max must be a non-negative number`);
    if (!("threshold" in config.reportSlowTests) || typeof config.reportSlowTests.threshold !== "number" || config.reportSlowTests.threshold < 0)
      throw errorWithFile(file2, `config.reportSlowTests.threshold must be a non-negative number`);
  }
  if ("shard" in config && config.shard !== void 0 && config.shard !== null) {
    if (!config.shard || typeof config.shard !== "object")
      throw errorWithFile(file2, `config.shard must be an object`);
    if (!("total" in config.shard) || typeof config.shard.total !== "number" || config.shard.total < 1)
      throw errorWithFile(file2, `config.shard.total must be a positive number`);
    if (!("current" in config.shard) || typeof config.shard.current !== "number" || config.shard.current < 1 || config.shard.current > config.shard.total)
      throw errorWithFile(file2, `config.shard.current must be a positive number, not greater than config.shard.total`);
  }
  if ("updateSnapshots" in config && config.updateSnapshots !== void 0) {
    if (typeof config.updateSnapshots !== "string" || !["all", "changed", "missing", "none"].includes(config.updateSnapshots))
      throw errorWithFile(file2, `config.updateSnapshots must be one of "all", "changed", "missing" or "none"`);
  }
  if ("tsconfig" in config && config.tsconfig !== void 0) {
    if (typeof config.tsconfig !== "string")
      throw errorWithFile(file2, `config.tsconfig must be a string`);
    if (!import_fs6.default.existsSync(import_path7.default.resolve(file2, "..", config.tsconfig)))
      throw errorWithFile(file2, `config.tsconfig does not exist`);
  }
}
function validateProject(file2, project, title) {
  if (typeof project !== "object" || !project)
    throw errorWithFile(file2, `${title} must be an object`);
  if ("name" in project && project.name !== void 0) {
    if (typeof project.name !== "string")
      throw errorWithFile(file2, `${title}.name must be a string`);
  }
  if ("outputDir" in project && project.outputDir !== void 0) {
    if (typeof project.outputDir !== "string")
      throw errorWithFile(file2, `${title}.outputDir must be a string`);
  }
  if ("repeatEach" in project && project.repeatEach !== void 0) {
    if (typeof project.repeatEach !== "number" || project.repeatEach < 0)
      throw errorWithFile(file2, `${title}.repeatEach must be a non-negative number`);
  }
  if ("retries" in project && project.retries !== void 0) {
    if (typeof project.retries !== "number" || project.retries < 0)
      throw errorWithFile(file2, `${title}.retries must be a non-negative number`);
  }
  if ("testDir" in project && project.testDir !== void 0) {
    if (typeof project.testDir !== "string")
      throw errorWithFile(file2, `${title}.testDir must be a string`);
  }
  for (const prop of ["testIgnore", "testMatch"]) {
    if (prop in project && project[prop] !== void 0) {
      const value = project[prop];
      if (Array.isArray(value)) {
        value.forEach((item, index) => {
          if (typeof item !== "string" && !isRegExp2(item))
            throw errorWithFile(file2, `${title}.${prop}[${index}] must be a string or a RegExp`);
        });
      } else if (typeof value !== "string" && !isRegExp2(value)) {
        throw errorWithFile(file2, `${title}.${prop} must be a string or a RegExp`);
      }
    }
  }
  if ("timeout" in project && project.timeout !== void 0) {
    if (typeof project.timeout !== "number" || project.timeout < 0)
      throw errorWithFile(file2, `${title}.timeout must be a non-negative number`);
  }
  if ("use" in project && project.use !== void 0) {
    if (!project.use || typeof project.use !== "object")
      throw errorWithFile(file2, `${title}.use must be an object`);
  }
  if ("ignoreSnapshots" in project && project.ignoreSnapshots !== void 0) {
    if (typeof project.ignoreSnapshots !== "boolean")
      throw errorWithFile(file2, `${title}.ignoreSnapshots must be a boolean`);
  }
  if ("workers" in project && project.workers !== void 0) {
    if (typeof project.workers === "number" && project.workers <= 0)
      throw errorWithFile(file2, `${title}.workers must be a positive number`);
    else if (typeof project.workers === "string" && !project.workers.endsWith("%"))
      throw errorWithFile(file2, `${title}.workers must be a number or percentage`);
  }
}
function resolveConfigLocation(configFile) {
  const configFileOrDirectory = configFile ? import_path7.default.resolve(process.cwd(), configFile) : process.cwd();
  const resolvedConfigFile = resolveConfigFile2(configFileOrDirectory);
  return {
    resolvedConfigFile,
    configDir: resolvedConfigFile ? import_path7.default.dirname(resolvedConfigFile) : configFileOrDirectory
  };
}
function resolveConfigFile2(configFileOrDirectory) {
  const resolveConfig = (configFile) => {
    if (import_fs6.default.existsSync(configFile))
      return configFile;
  };
  const resolveConfigFileFromDirectory = (directory) => {
    for (const ext of [".ts", ".js", ".mts", ".mjs", ".cts", ".cjs"]) {
      const configFile = resolveConfig(import_path7.default.resolve(directory, "playwright.config" + ext));
      if (configFile)
        return configFile;
    }
  };
  if (!import_fs6.default.existsSync(configFileOrDirectory))
    throw new Error(`${configFileOrDirectory} does not exist`);
  if (import_fs6.default.statSync(configFileOrDirectory).isDirectory()) {
    const configFile = resolveConfigFileFromDirectory(configFileOrDirectory);
    if (configFile)
      return configFile;
    return void 0;
  }
  return configFileOrDirectory;
}
async function loadConfigFromFile(configFile, overrides, ignoreDeps) {
  return await loadConfig(resolveConfigLocation(configFile), overrides, ignoreDeps);
}
async function loadEmptyConfigForMergeReports() {
  return await loadConfig({ configDir: process.cwd() });
}

// packages/playwright/src/common/fixtures.ts
var fixtures_exports = {};
__export(fixtures_exports, {
  FixturePool: () => FixturePool,
  fixtureParameterNames: () => fixtureParameterNames,
  formatPotentiallyInternalLocation: () => formatPotentiallyInternalLocation,
  inheritFixtureNames: () => inheritFixtureNames
});
var import_crypto2 = __toESM(require("crypto"));
var kScopeOrder = ["test", "worker"];
function isFixtureTuple(value) {
  return Array.isArray(value) && typeof value[1] === "object";
}
function isFixtureOption(value) {
  return isFixtureTuple(value) && !!value[1].option;
}
var FixturePool = class {
  constructor(fixturesList, onLoadError, parentPool, disallowWorkerFixtures, optionOverrides) {
    this._registrations = new Map(parentPool ? parentPool._registrations : []);
    this._onLoadError = onLoadError;
    const allOverrides = optionOverrides?.overrides ?? {};
    const overrideKeys = new Set(Object.keys(allOverrides));
    for (const list of fixturesList) {
      this._appendFixtureList(list, !!disallowWorkerFixtures, false);
      const selectedOverrides = {};
      for (const [key, value] of Object.entries(list.fixtures)) {
        if (isFixtureOption(value) && overrideKeys.has(key))
          selectedOverrides[key] = [allOverrides[key], value[1]];
      }
      if (Object.entries(selectedOverrides).length)
        this._appendFixtureList({ fixtures: selectedOverrides, location: optionOverrides.location }, !!disallowWorkerFixtures, true);
    }
    if (optionOverrides) {
      for (const key of overrideKeys) {
        const registration = this._registrations.get(key);
        if (registration && !registration.option)
          this._addLoadError(`Fixture "${key}" cannot be overridden in the configuration "use" section. Only fixtures registered with { option: true } can be set in the config.`, optionOverrides.location);
      }
    }
    this.digest = this.validate();
  }
  _appendFixtureList(list, disallowWorkerFixtures, isOptionsOverride) {
    const { fixtures, location } = list;
    for (const entry of Object.entries(fixtures)) {
      const name = entry[0];
      let value = entry[1];
      let options;
      if (isFixtureTuple(value)) {
        options = {
          auto: value[1].auto ?? false,
          scope: value[1].scope || "test",
          option: !!value[1].option,
          timeout: value[1].timeout,
          customTitle: value[1].title,
          box: value[1].box
        };
        value = value[0];
      }
      let fn = value;
      const previous = this._registrations.get(name);
      if (previous && options) {
        if (previous.scope !== options.scope) {
          this._addLoadError(`Fixture "${name}" has already been registered as a { scope: '${previous.scope}' } fixture defined in ${formatLocation(previous.location)}.`, location);
          continue;
        }
        if (previous.auto !== options.auto) {
          this._addLoadError(`Fixture "${name}" has already been registered as a { auto: '${previous.scope}' } fixture defined in ${formatLocation(previous.location)}.`, location);
          continue;
        }
      } else if (previous) {
        options = { auto: previous.auto, scope: previous.scope, option: previous.option, timeout: previous.timeout, customTitle: previous.customTitle };
      } else if (!options) {
        options = { auto: false, scope: "test", option: false, timeout: void 0 };
      }
      if (!kScopeOrder.includes(options.scope)) {
        this._addLoadError(`Fixture "${name}" has unknown { scope: '${options.scope}' }.`, location);
        continue;
      }
      if (options.scope === "worker" && disallowWorkerFixtures) {
        this._addLoadError(`Cannot use({ ${name} }) in a describe group, because it forces a new worker.
Make it top-level in the test file or put in the configuration file.`, location);
        continue;
      }
      if (fn === void 0 && options.option && previous) {
        let original = previous;
        while (!original.optionOverride && original.super)
          original = original.super;
        fn = original.fn;
      }
      const deps = fixtureParameterNames(fn, location, (e) => this._onLoadError(e));
      const registration = { id: "", name, location, scope: options.scope, fn, auto: options.auto, option: options.option, timeout: options.timeout, customTitle: options.customTitle, box: options.box, deps, super: previous, optionOverride: isOptionsOverride };
      registrationId(registration);
      this._registrations.set(name, registration);
    }
  }
  validate() {
    const markers = /* @__PURE__ */ new Map();
    const stack = [];
    let hasDependencyErrors = false;
    const addDependencyError = (message, location) => {
      hasDependencyErrors = true;
      this._addLoadError(message, location);
    };
    const visit = (registration, boxedOnly) => {
      markers.set(registration, "visiting");
      stack.push(registration);
      for (const name of registration.deps) {
        const dep = this.resolve(name, registration);
        if (!dep) {
          if (name === registration.name)
            addDependencyError(`Fixture "${registration.name}" references itself, but does not have a base implementation.`, registration.location);
          else
            addDependencyError(`Fixture "${registration.name}" has unknown parameter "${name}".`, registration.location);
          continue;
        }
        if (kScopeOrder.indexOf(registration.scope) > kScopeOrder.indexOf(dep.scope)) {
          addDependencyError(`${registration.scope} fixture "${registration.name}" cannot depend on a ${dep.scope} fixture "${name}" defined in ${formatPotentiallyInternalLocation(dep.location)}.`, registration.location);
          continue;
        }
        if (!markers.has(dep)) {
          visit(dep, boxedOnly);
        } else if (markers.get(dep) === "visiting") {
          const index = stack.indexOf(dep);
          const allRegs = stack.slice(index, stack.length);
          const filteredRegs = allRegs.filter((r) => !r.box);
          const regs = boxedOnly ? filteredRegs : allRegs;
          const names2 = regs.map((r) => `"${r.name}"`);
          addDependencyError(`Fixtures ${names2.join(" -> ")} -> "${dep.name}" form a dependency cycle: ${regs.map((r) => formatPotentiallyInternalLocation(r.location)).join(" -> ")} -> ${formatPotentiallyInternalLocation(dep.location)}`, dep.location);
          continue;
        }
      }
      markers.set(registration, "visited");
      stack.pop();
    };
    const names = Array.from(this._registrations.keys()).sort();
    for (const name of names) {
      const registration = this._registrations.get(name);
      if (!registration.box)
        visit(registration, true);
    }
    if (!hasDependencyErrors) {
      for (const name of names) {
        const registration = this._registrations.get(name);
        if (registration.box)
          visit(registration, false);
      }
    }
    const hash = import_crypto2.default.createHash("sha1");
    for (const name of names) {
      const registration = this._registrations.get(name);
      if (registration.scope === "worker")
        hash.update(registration.id + ";");
    }
    return hash.digest("hex");
  }
  validateFunction(fn, prefix, location) {
    for (const name of fixtureParameterNames(fn, location, (e) => this._onLoadError(e))) {
      const registration = this._registrations.get(name);
      if (!registration)
        this._addLoadError(`${prefix} has unknown parameter "${name}".`, location);
    }
  }
  resolve(name, forFixture) {
    if (name === forFixture?.name)
      return forFixture.super;
    return this._registrations.get(name);
  }
  autoFixtures() {
    return [...this._registrations.values()].filter((r) => r.auto !== false);
  }
  _addLoadError(message, location) {
    this._onLoadError({ message, location });
  }
};
var signatureSymbol = Symbol("signature");
function formatPotentiallyInternalLocation(location) {
  const isUserFixture = location && filterStackFile(location.file);
  return isUserFixture ? formatLocation(location) : "<builtin>";
}
function fixtureParameterNames(fn, location, onError) {
  if (typeof fn !== "function")
    return [];
  if (!fn[signatureSymbol])
    fn[signatureSymbol] = innerFixtureParameterNames(fn, location, onError);
  return fn[signatureSymbol];
}
function inheritFixtureNames(from, to) {
  to[signatureSymbol] = from[signatureSymbol];
}
function innerFixtureParameterNames(fn, location, onError) {
  const text = filterOutComments(fn.toString());
  const match = text.match(/(?:async)?(?:\s+function)?[^(]*\(([^)]*)/);
  if (!match)
    return [];
  const trimmedParams = match[1].trim();
  if (!trimmedParams)
    return [];
  const [firstParam] = splitByComma(trimmedParams);
  if (firstParam[0] !== "{" || firstParam[firstParam.length - 1] !== "}") {
    onError({ message: "First argument must use the object destructuring pattern: " + firstParam, location });
    return [];
  }
  const props = splitByComma(firstParam.substring(1, firstParam.length - 1)).map((prop) => {
    const colon = prop.indexOf(":");
    return colon === -1 ? prop.trim() : prop.substring(0, colon).trim();
  });
  const restProperty = props.find((prop) => prop.startsWith("..."));
  if (restProperty) {
    onError({ message: `Rest property "${restProperty}" is not supported. List all used fixtures explicitly, separated by comma.`, location });
    return [];
  }
  return props;
}
function filterOutComments(s) {
  const result2 = [];
  let commentState = "none";
  for (let i = 0; i < s.length; ++i) {
    if (commentState === "singleline") {
      if (s[i] === "\n")
        commentState = "none";
    } else if (commentState === "multiline") {
      if (s[i - 1] === "*" && s[i] === "/")
        commentState = "none";
    } else if (commentState === "none") {
      if (s[i] === "/" && s[i + 1] === "/") {
        commentState = "singleline";
      } else if (s[i] === "/" && s[i + 1] === "*") {
        commentState = "multiline";
        i += 2;
      } else {
        result2.push(s[i]);
      }
    }
  }
  return result2.join("");
}
function splitByComma(s) {
  const result2 = [];
  const stack = [];
  let start = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "{" || s[i] === "[") {
      stack.push(s[i] === "{" ? "}" : "]");
    } else if (s[i] === stack[stack.length - 1]) {
      stack.pop();
    } else if (!stack.length && s[i] === ",") {
      const token = s.substring(start, i).trim();
      if (token)
        result2.push(token);
      start = i + 1;
    }
  }
  const lastToken = s.substring(start).trim();
  if (lastToken)
    result2.push(lastToken);
  return result2;
}
var registrationIdMap = /* @__PURE__ */ new Map();
var lastId = 0;
function registrationId(registration) {
  if (registration.id)
    return registration.id;
  const key = registration.name + "@@@" + (registration.super ? registrationId(registration.super) : "");
  let map = registrationIdMap.get(key);
  if (!map) {
    map = /* @__PURE__ */ new Map();
    registrationIdMap.set(key, map);
  }
  if (!map.has(registration.fn))
    map.set(registration.fn, String(lastId++));
  registration.id = map.get(registration.fn);
  return registration.id;
}

// packages/playwright/src/common/ipc.ts
var ipc_exports = {};
__export(ipc_exports, {
  serializeConfig: () => serializeConfig,
  stdioChunkToParams: () => stdioChunkToParams,
  toTestInfoErrorPayload: () => toTestInfoErrorPayload
});
var import_util6 = __toESM(require("util"));
function serializeConfig(config, passCompilationCache) {
  const result2 = {
    location: { configDir: config.configDir, resolvedConfigFile: config.config.configFile },
    configCLIOverrides: config.configCLIOverrides,
    compilationCache: passCompilationCache ? serializeCompilationCache() : void 0
  };
  try {
    result2.metadata = JSON.stringify(config.config.metadata);
  } catch (error) {
  }
  return result2;
}
function stdioChunkToParams(chunk) {
  if (chunk instanceof Uint8Array)
    return { buffer: Buffer.from(chunk).toString("base64") };
  if (typeof chunk !== "string")
    return { text: import_util6.default.inspect(chunk) };
  return { text: chunk };
}
function toTestInfoErrorPayload(error) {
  const result2 = {};
  if (error.message !== void 0)
    result2.message = error.message;
  if (error.stack !== void 0)
    result2.stack = error.stack;
  if (error.value !== void 0)
    result2.value = error.value;
  if (error.cause !== void 0)
    result2.cause = toTestInfoErrorPayload(error.cause);
  return result2;
}

// packages/playwright/src/common/poolBuilder.ts
var poolBuilder_exports = {};
__export(poolBuilder_exports, {
  PoolBuilder: () => PoolBuilder
});
var PoolBuilder = class _PoolBuilder {
  constructor(type, project) {
    this._testTypePools = /* @__PURE__ */ new Map();
    this._type = type;
    this._project = project;
  }
  static createForLoader() {
    return new _PoolBuilder("loader");
  }
  static createForWorker(project) {
    return new _PoolBuilder("worker", project);
  }
  buildPools(suite, testErrors) {
    suite.forEachTest((test) => {
      const pool = this._buildPoolForTest(test, testErrors);
      if (this._type === "loader")
        test._poolDigest = pool.digest;
      if (this._type === "worker")
        test._pool = pool;
    });
  }
  _buildPoolForTest(test, testErrors) {
    let pool = this._buildTestTypePool(test._testType, testErrors);
    const parents = [];
    for (let parent = test.parent; parent; parent = parent.parent)
      parents.push(parent);
    parents.reverse();
    for (const parent of parents) {
      if (parent._use.length)
        pool = new FixturePool(parent._use, (e) => this._handleLoadError(e, testErrors), pool, parent._type === "describe");
      for (const hook of parent._hooks)
        pool.validateFunction(hook.fn, hook.type + " hook", hook.location);
      for (const modifier of parent._modifiers)
        pool.validateFunction(modifier.fn, modifier.type + " modifier", modifier.location);
    }
    pool.validateFunction(test.fn, "Test", test.location);
    return pool;
  }
  _buildTestTypePool(testType, testErrors) {
    if (!this._testTypePools.has(testType)) {
      const optionOverrides = {
        overrides: this._project?.project?.use ?? {},
        location: { file: `project#${this._project?.id}`, line: 1, column: 1 }
      };
      const pool = new FixturePool(testType.fixtures, (e) => this._handleLoadError(e, testErrors), void 0, void 0, optionOverrides);
      this._testTypePools.set(testType, pool);
    }
    return this._testTypePools.get(testType);
  }
  _handleLoadError(e, testErrors) {
    if (testErrors)
      testErrors.push(e);
    else
      throw new Error(`${formatLocation(e.location)}: ${e.message}`);
  }
};

// packages/playwright/src/common/process.ts
var process_exports = {};
__export(process_exports, {
  ProcessRunner: () => ProcessRunner,
  startProcessRunner: () => startProcessRunner
});
var import_bootstrap = require("playwright-core/lib/bootstrap");
var { ManualPromise } = require("playwright-core/lib/coreBundle").iso;
var { setTimeOrigin } = require("playwright-core/lib/coreBundle").iso;
var { startProfiling, stopProfiling } = require("playwright-core/lib/coreBundle").utils;
var ProcessRunner = class {
  async gracefullyClose() {
  }
  dispatchEvent(method, params) {
    const response = { method, params };
    sendMessageToParent({ method: "__dispatch__", params: response });
  }
  async sendRequest(method, params) {
    return await sendRequestToParent(method, params);
  }
  async sendMessageNoReply(method, params) {
    void sendRequestToParent(method, params).catch(() => {
    });
  }
};
var gracefullyCloseCalled = false;
var forceExitInitiated = false;
var processRunner;
var processName;
var startingEnv = { ...process.env };
function startProcessRunner(create) {
  sendMessageToParent({ method: "ready" });
  process.on("disconnect", () => gracefullyCloseAndExit(true));
  process.on("SIGINT", () => {
  });
  process.on("SIGTERM", () => {
  });
  process.on("message", async (message) => {
    if (message.method === "__init__") {
      const { processParams, runnerParams } = message.params;
      void startProfiling();
      setTimeOrigin(processParams.timeOrigin);
      processRunner = create(runnerParams);
      processName = processParams.processName;
      return;
    }
    if (message.method === "__stop__") {
      const keys = /* @__PURE__ */ new Set([...Object.keys(process.env), ...Object.keys(startingEnv)]);
      const producedEnv = [...keys].filter((key) => startingEnv[key] !== process.env[key]).map((key) => [key, process.env[key] ?? null]);
      sendMessageToParent({ method: "__env_produced__", params: producedEnv });
      await gracefullyCloseAndExit(false);
      return;
    }
    if (message.method === "__dispatch__") {
      const { id, method, params } = message.params;
      try {
        const result2 = await processRunner[method](params);
        const response = { id, result: result2 };
        sendMessageToParent({ method: "__dispatch__", params: response });
      } catch (e) {
        const response = { id, error: serializeError(e) };
        sendMessageToParent({ method: "__dispatch__", params: response });
      }
    }
    if (message.method === "__response__")
      handleResponseFromParent(message.params);
  });
}
var kForceExitTimeout = +(process.env.PWTEST_FORCE_EXIT_TIMEOUT || 3e4);
async function gracefullyCloseAndExit(forceExit) {
  if (forceExit && !forceExitInitiated) {
    forceExitInitiated = true;
    setTimeout(() => process.exit(0), kForceExitTimeout);
  }
  if (!gracefullyCloseCalled) {
    gracefullyCloseCalled = true;
    await processRunner?.gracefullyClose().catch(() => {
    });
    if (processName)
      await stopProfiling(processName).catch(() => {
      });
    process.exit(0);
  }
}
function sendMessageToParent(message) {
  try {
    process.send(message);
  } catch (e) {
    try {
      JSON.stringify(message);
    } catch {
      throw e;
    }
  }
}
var lastId2 = 0;
var requestCallbacks = /* @__PURE__ */ new Map();
async function sendRequestToParent(method, params) {
  const id = ++lastId2;
  sendMessageToParent({ method: "__request__", params: { id, method, params } });
  const promise = new ManualPromise();
  requestCallbacks.set(id, promise);
  return promise;
}
function handleResponseFromParent(response) {
  const promise = requestCallbacks.get(response.id);
  if (!promise)
    return;
  requestCallbacks.delete(response.id);
  if (response.error)
    promise.reject(new Error(response.error.message));
  else
    promise.resolve(response.result);
}

// packages/playwright/src/common/suiteUtils.ts
var suiteUtils_exports = {};
__export(suiteUtils_exports, {
  applyRepeatEachIndex: () => applyRepeatEachIndex,
  bindFileSuiteToProject: () => bindFileSuiteToProject,
  createFiltersFromArguments: () => createFiltersFromArguments,
  filterOnly: () => filterOnly,
  filterTestsRemoveEmptySuites: () => filterTestsRemoveEmptySuites
});
var import_path8 = __toESM(require("path"));
var { calculateSha1: calculateSha13 } = require("playwright-core/lib/coreBundle").utils;
var { toPosixPath } = require("playwright-core/lib/coreBundle").utils;
function filterTestsRemoveEmptySuites(suite, filter) {
  const filteredSuites = suite.suites.filter((child) => filterTestsRemoveEmptySuites(child, filter));
  const filteredTests = suite.tests.filter(filter);
  const entries = /* @__PURE__ */ new Set([...filteredSuites, ...filteredTests]);
  suite._entries = suite._entries.filter((e) => entries.has(e));
  return !!suite._entries.length;
}
function bindFileSuiteToProject(project, suite) {
  const relativeFile = import_path8.default.relative(project.project.testDir, suite.location.file);
  const fileId = calculateSha13(toPosixPath(relativeFile)).slice(0, 20);
  const result2 = suite._deepClone();
  result2._fileId = fileId;
  result2.forEachTest((test, suite2) => {
    suite2._fileId = fileId;
    const [file2, ...titles] = test.titlePath();
    const testIdExpression = `[project=${project.id}]${toPosixPath(file2)}${titles.join("")}`;
    const testId = fileId + "-" + calculateSha13(testIdExpression).slice(0, 20);
    test.id = testId;
    test._projectId = project.id;
    let inheritedRetries;
    let inheritedTimeout;
    for (let parentSuite = suite2; parentSuite; parentSuite = parentSuite.parent) {
      if (parentSuite._staticAnnotations.length)
        test.annotations.unshift(...parentSuite._staticAnnotations);
      if (inheritedRetries === void 0 && parentSuite._retries !== void 0)
        inheritedRetries = parentSuite._retries;
      if (inheritedTimeout === void 0 && parentSuite._timeout !== void 0)
        inheritedTimeout = parentSuite._timeout;
    }
    test.retries = inheritedRetries ?? project.project.retries;
    test.timeout = inheritedTimeout ?? project.project.timeout;
    if (test.annotations.some((a) => a.type === "skip" || a.type === "fixme"))
      test.expectedStatus = "skipped";
    if (test._poolDigest)
      test._workerHash = `${project.id}-${test._poolDigest}-0`;
  });
  return result2;
}
function applyRepeatEachIndex(project, fileSuite, repeatEachIndex) {
  fileSuite.forEachTest((test, suite) => {
    if (repeatEachIndex) {
      const [file2, ...titles] = test.titlePath();
      const testIdExpression = `[project=${project.id}]${toPosixPath(file2)}${titles.join("")} (repeat:${repeatEachIndex})`;
      const testId = suite._fileId + "-" + calculateSha13(testIdExpression).slice(0, 20);
      test.id = testId;
      test.repeatEachIndex = repeatEachIndex;
      if (test._poolDigest)
        test._workerHash = `${project.id}-${test._poolDigest}-${repeatEachIndex}`;
    }
  });
}
function filterOnly(suite) {
  if (!suite._getOnlyItems().length)
    return;
  const suiteFilter = (suite2) => suite2._only;
  const testFilter = (test) => test._only;
  return filterSuiteWithOnlySemantics(suite, suiteFilter, testFilter);
}
function filterSuiteWithOnlySemantics(suite, suiteFilter, testFilter) {
  const onlySuites = suite.suites.filter((child) => filterSuiteWithOnlySemantics(child, suiteFilter, testFilter) || suiteFilter(child));
  const onlyTests = suite.tests.filter(testFilter);
  const onlyEntries = /* @__PURE__ */ new Set([...onlySuites, ...onlyTests]);
  if (onlyEntries.size) {
    suite._entries = suite._entries.filter((e) => onlyEntries.has(e));
    return true;
  }
  return false;
}
function createFiltersFromArguments(args) {
  const matchers = args.map((arg) => {
    const parsed = parseLocationArg(arg);
    const fileMatcher = createFileMatcher(forceRegExp(parsed.file));
    const locationMatcher2 = (file2, line, column) => fileMatcher(file2) && (parsed.line === line || parsed.line === null) && (parsed.column === column || parsed.column === null);
    return { fileMatcher, locationMatcher: locationMatcher2 };
  });
  const fileFilter = (file2) => matchers.some((m) => m.fileMatcher(file2));
  const locationMatcher = (file2, line, column) => matchers.some((m) => m.locationMatcher(file2, line, column));
  const testFilter = (test) => {
    for (let suite = test.parent; suite; suite = suite.parent) {
      if (suite.location && locationMatcher(suite.location.file, suite.location.line, suite.location.column))
        return true;
    }
    return locationMatcher(test.location.file, test.location.line, test.location.column);
  };
  return { fileFilter, testFilter };
}

// packages/playwright/src/common/test.ts
var test_exports = {};
__export(test_exports, {
  Suite: () => Suite,
  TestCase: () => TestCase
});

// packages/playwright/src/common/testType.ts
var testType_exports = {};
__export(testType_exports, {
  TestTypeImpl: () => TestTypeImpl,
  mergeTests: () => mergeTests,
  rootTestType: () => rootTestType
});
var import_globals2 = require("../globals");
var import_expect = require("../matchers/expect");

// packages/playwright/src/common/validators.ts
var { validate } = require("playwright-core/lib/coreBundle").iso;
var testAnnotationSchema = {
  type: "object",
  properties: {
    type: { type: "string" },
    description: { type: "string" }
  },
  required: ["type"]
};
var testDetailsSchema = {
  type: "object",
  properties: {
    tag: {
      oneOf: [
        { type: "string", pattern: "^@", patternError: "Tag must start with '@'" },
        { type: "array", items: { type: "string", pattern: "^@", patternError: "Tag must start with '@'" } }
      ]
    },
    annotation: {
      oneOf: [
        testAnnotationSchema,
        { type: "array", items: testAnnotationSchema }
      ]
    }
  }
};
function validateTestDetails(details, location) {
  const errors = validate(details, testDetailsSchema, "details");
  if (errors.length)
    throw new Error(errors.join("\n"));
  const obj = details;
  const tag = obj.tag;
  const tags = tag === void 0 ? [] : typeof tag === "string" ? [tag] : tag;
  const annotation = obj.annotation;
  const annotations = annotation === void 0 ? [] : Array.isArray(annotation) ? annotation : [annotation];
  return {
    annotations: annotations.map((a) => ({ ...a, location })),
    tags,
    location
  };
}

// packages/playwright/src/common/testType.ts
var { monotonicTime } = require("playwright-core/lib/coreBundle").iso;
var { raceAgainstDeadline } = require("playwright-core/lib/coreBundle").iso;
var { getPackageManagerExecCommand } = require("playwright-core/lib/coreBundle").utils;
var { currentZone } = require("playwright-core/lib/coreBundle").utils;
var testTypeSymbol = Symbol("testType");
var TestTypeImpl = class _TestTypeImpl {
  constructor(fixtures) {
    this.fixtures = fixtures;
    const test = wrapFunctionWithLocation(this._createTest.bind(this, "default"));
    test[testTypeSymbol] = this;
    test.expect = import_expect.expect;
    test.only = wrapFunctionWithLocation(this._createTest.bind(this, "only"));
    test.describe = wrapFunctionWithLocation(this._describe.bind(this, "default"));
    test.describe.only = wrapFunctionWithLocation(this._describe.bind(this, "only"));
    test.describe.configure = wrapFunctionWithLocation(this._configure.bind(this));
    test.describe.fixme = wrapFunctionWithLocation(this._describe.bind(this, "fixme"));
    test.describe.parallel = wrapFunctionWithLocation(this._describe.bind(this, "parallel"));
    test.describe.parallel.only = wrapFunctionWithLocation(this._describe.bind(this, "parallel.only"));
    test.describe.serial = wrapFunctionWithLocation(this._describe.bind(this, "serial"));
    test.describe.serial.only = wrapFunctionWithLocation(this._describe.bind(this, "serial.only"));
    test.describe.skip = wrapFunctionWithLocation(this._describe.bind(this, "skip"));
    test.beforeEach = wrapFunctionWithLocation(this._hook.bind(this, "beforeEach"));
    test.afterEach = wrapFunctionWithLocation(this._hook.bind(this, "afterEach"));
    test.beforeAll = wrapFunctionWithLocation(this._hook.bind(this, "beforeAll"));
    test.afterAll = wrapFunctionWithLocation(this._hook.bind(this, "afterAll"));
    test.skip = wrapFunctionWithLocation(this._modifier.bind(this, "skip"));
    test.fixme = wrapFunctionWithLocation(this._modifier.bind(this, "fixme"));
    test.fail = wrapFunctionWithLocation(this._modifier.bind(this, "fail"));
    test.abort = wrapFunctionWithLocation(this._abort.bind(this));
    test.fail.only = wrapFunctionWithLocation(this._createTest.bind(this, "fail.only"));
    test.slow = wrapFunctionWithLocation(this._modifier.bind(this, "slow"));
    test.setTimeout = wrapFunctionWithLocation(this._setTimeout.bind(this));
    test.step = this._step.bind(this, "pass");
    test.step.skip = this._step.bind(this, "skip");
    test.use = wrapFunctionWithLocation(this._use.bind(this));
    test.extend = wrapFunctionWithLocation(this._extend.bind(this));
    test.info = () => {
      const result2 = (0, import_globals2.currentTestInfo)();
      if (!result2)
        throw new Error("test.info() can only be called while test is running");
      return result2;
    };
    this.test = test;
  }
  _currentSuite(location, title) {
    const suite = (0, import_globals2.currentlyLoadingFileSuite)();
    if (!suite) {
      throw new Error([
        `Playwright Test did not expect ${title} to be called here.`,
        `Most common reasons include:`,
        `- You are calling ${title} in a configuration file.`,
        `- You are calling ${title} in a file that is imported by the configuration file.`,
        `- You have two different versions of @playwright/test. This usually happens`,
        `  when one of the dependencies in your package.json depends on @playwright/test.`
      ].join("\n"));
    }
    return suite;
  }
  _createTest(type, location, title, fnOrDetails, fn) {
    throwIfRunningInsideJest();
    const suite = this._currentSuite(location, "test()");
    if (!suite)
      return;
    let details;
    let body;
    if (typeof fnOrDetails === "function") {
      body = fnOrDetails;
      details = {};
    } else {
      body = fn;
      details = fnOrDetails;
    }
    const validatedDetails = validateTestDetails(details, location);
    const test = new TestCase(title, body, this, location);
    test._requireFile = suite._requireFile;
    test.annotations.push(...validatedDetails.annotations);
    test._tags.push(...validatedDetails.tags);
    suite._addTest(test);
    if (type === "only" || type === "fail.only")
      test._only = true;
    if (type === "skip" || type === "fixme" || type === "fail")
      test.annotations.push({ type, location });
    else if (type === "fail.only")
      test.annotations.push({ type: "fail", location });
  }
  _describe(type, location, titleOrFn, fnOrDetails, fn) {
    throwIfRunningInsideJest();
    const suite = this._currentSuite(location, "test.describe()");
    if (!suite)
      return;
    let title;
    let body;
    let details;
    if (typeof titleOrFn === "function") {
      title = "";
      details = {};
      body = titleOrFn;
    } else if (typeof fnOrDetails === "function") {
      title = titleOrFn;
      details = {};
      body = fnOrDetails;
    } else {
      title = titleOrFn;
      details = fnOrDetails;
      body = fn;
    }
    const validatedDetails = validateTestDetails(details, location);
    const child = new Suite(title, "describe");
    child._requireFile = suite._requireFile;
    child.location = location;
    child._staticAnnotations.push(...validatedDetails.annotations);
    child._tags.push(...validatedDetails.tags);
    suite._addSuite(child);
    if (type === "only" || type === "serial.only" || type === "parallel.only")
      child._only = true;
    if (type === "serial" || type === "serial.only")
      child._parallelMode = "serial";
    if (type === "parallel" || type === "parallel.only")
      child._parallelMode = "parallel";
    if (type === "skip" || type === "fixme")
      child._staticAnnotations.push({ type, location });
    for (let parent = suite; parent; parent = parent.parent) {
      if (parent._parallelMode === "serial" && child._parallelMode === "parallel")
        throw new Error("describe.parallel cannot be nested inside describe.serial");
      if (parent._parallelMode === "default" && child._parallelMode === "parallel")
        throw new Error("describe.parallel cannot be nested inside describe with default mode");
    }
    (0, import_globals2.setCurrentlyLoadingFileSuite)(child);
    body();
    (0, import_globals2.setCurrentlyLoadingFileSuite)(suite);
  }
  _hook(name, location, title, fn) {
    const suite = this._currentSuite(location, `test.${name}()`);
    if (!suite)
      return;
    if (typeof title === "function") {
      fn = title;
      title = `${name} hook`;
    }
    suite._hooks.push({ type: name, fn, title, location });
  }
  _configure(location, options) {
    throwIfRunningInsideJest();
    const suite = this._currentSuite(location, `test.describe.configure()`);
    if (!suite)
      return;
    if (options.timeout !== void 0)
      suite._timeout = options.timeout;
    if (options.retries !== void 0)
      suite._retries = options.retries;
    if (options.mode !== void 0) {
      if (suite._parallelMode !== "none")
        throw new Error(`"${suite._parallelMode}" mode is already assigned for the enclosing scope.`);
      suite._parallelMode = options.mode;
      for (let parent = suite.parent; parent; parent = parent.parent) {
        if (parent._parallelMode === "serial" && suite._parallelMode === "parallel")
          throw new Error("describe with parallel mode cannot be nested inside describe with serial mode");
        if (parent._parallelMode === "default" && suite._parallelMode === "parallel")
          throw new Error("describe with parallel mode cannot be nested inside describe with default mode");
      }
    }
  }
  _modifier(type, location, ...modifierArgs) {
    const suite = (0, import_globals2.currentlyLoadingFileSuite)();
    if (suite) {
      if (typeof modifierArgs[0] === "string" && typeof modifierArgs[1] === "function" && (type === "skip" || type === "fixme" || type === "fail")) {
        this._createTest(type, location, modifierArgs[0], modifierArgs[1]);
        return;
      }
      if (typeof modifierArgs[0] === "string" && typeof modifierArgs[1] === "object" && typeof modifierArgs[2] === "function" && (type === "skip" || type === "fixme" || type === "fail")) {
        this._createTest(type, location, modifierArgs[0], modifierArgs[1], modifierArgs[2]);
        return;
      }
      if (typeof modifierArgs[0] === "function") {
        suite._modifiers.push({ type, fn: modifierArgs[0], location, description: modifierArgs[1] });
      } else {
        if (modifierArgs.length >= 1 && !modifierArgs[0])
          return;
        const description = modifierArgs[1];
        suite._staticAnnotations.push({ type, description, location });
      }
      return;
    }
    const testInfo = (0, import_globals2.currentTestInfo)();
    if (!testInfo)
      throw new Error(`test.${type}() can only be called inside test, describe block or fixture`);
    if (typeof modifierArgs[0] === "function")
      throw new Error(`test.${type}() with a function can only be called inside describe block`);
    testInfo._modifier(type, location, modifierArgs);
  }
  _abort(location, message) {
    const testInfo = (0, import_globals2.currentTestInfo)();
    if (!testInfo)
      throw new Error(`test.abort() can only be called inside a test or fixture`);
    testInfo._abort(location, message);
  }
  _setTimeout(location, timeout) {
    const suite = (0, import_globals2.currentlyLoadingFileSuite)();
    if (suite) {
      suite._timeout = timeout;
      return;
    }
    const testInfo = (0, import_globals2.currentTestInfo)();
    if (!testInfo)
      throw new Error(`test.setTimeout() can only be called from a test`);
    testInfo.setTimeout(timeout);
  }
  _use(location, fixtures) {
    const suite = this._currentSuite(location, `test.use()`);
    if (!suite)
      return;
    suite._use.push({ fixtures, location });
  }
  async _step(expectation, title, body, options = {}) {
    const testInfo = (0, import_globals2.currentTestInfo)();
    if (!testInfo)
      throw new Error(`test.step() can only be called from a test`);
    await testInfo._onUserStepBegin?.(title);
    const step = testInfo._addStep({ category: "test.step", title, location: options.location, box: options.box });
    return await currentZone().with("stepZone", step).run(async () => {
      try {
        let result2 = void 0;
        result2 = await raceAgainstDeadline(async () => {
          try {
            return await step.info._runStepBody(expectation === "skip", body, step.location);
          } catch (e) {
            if (result2?.timedOut)
              testInfo._failWithError(e);
            throw e;
          }
        }, options.timeout ? monotonicTime() + options.timeout : 0);
        if (result2.timedOut)
          throw new TimeoutError(`Step timeout of ${options.timeout}ms exceeded.`);
        step.complete({});
        return result2.result;
      } catch (error) {
        step.complete({ error });
        throw error;
      } finally {
        await testInfo._onUserStepEnd?.();
      }
    });
  }
  _extend(location, fixtures) {
    if (fixtures[testTypeSymbol])
      throw new Error(`test.extend() accepts fixtures object, not a test object.
Did you mean to call mergeTests()?`);
    const fixturesWithLocation = { fixtures, location };
    return new _TestTypeImpl([...this.fixtures, fixturesWithLocation]).test;
  }
};
function throwIfRunningInsideJest() {
  if (process.env.JEST_WORKER_ID) {
    const packageManagerCommand = getPackageManagerExecCommand();
    throw new Error(
      `Playwright Test needs to be invoked via '${packageManagerCommand} playwright test' and excluded from Jest test runs.
Creating one directory for Playwright tests and one for Jest is the recommended way of doing it.
See https://playwright.dev/docs/intro for more information about Playwright Test.`
    );
  }
}
var rootTestType = new TestTypeImpl([]);
function mergeTests(...tests) {
  let result2 = rootTestType;
  for (const t of tests) {
    const testTypeImpl = t[testTypeSymbol];
    if (!testTypeImpl)
      throw new Error(`mergeTests() accepts "test" functions as parameters.
Did you mean to call test.extend() with fixtures instead?`);
    const newFixtures = testTypeImpl.fixtures.filter((theirs) => !result2.fixtures.find((ours) => ours.fixtures === theirs.fixtures));
    result2 = new TestTypeImpl([...result2.fixtures, ...newFixtures]);
  }
  return result2.test;
}
var TimeoutError = class extends Error {
  constructor(message) {
    super(message);
    this.name = "TimeoutError";
  }
};

// packages/playwright/src/isomorphic/teleReceiver.ts
var baseFullConfig = {
  forbidOnly: false,
  fullyParallel: false,
  globalSetup: null,
  globalTeardown: null,
  globalTimeout: 0,
  grep: /.*/,
  grepInvert: null,
  maxFailures: 0,
  metadata: {},
  preserveOutput: "always",
  projects: [],
  reporter: [[process.env.CI ? "dot" : "list"]],
  reportSlowTests: {
    max: 5,
    threshold: 3e5
    /* 5 minutes */
  },
  configFile: "",
  rootDir: "",
  quiet: false,
  shard: null,
  tags: [],
  updateSnapshots: "missing",
  updateSourceMethod: "patch",
  version: "",
  workers: 0,
  webServer: null
};
function computeTestCaseOutcome(test) {
  let skipped = 0;
  let didNotRun = 0;
  let expected = 0;
  let interrupted = 0;
  let unexpected = 0;
  for (const result2 of test.results) {
    if (result2.status === "interrupted") {
      ++interrupted;
    } else if (result2.status === "skipped" && test.expectedStatus === "skipped") {
      ++skipped;
    } else if (result2.status === "skipped") {
      ++didNotRun;
    } else if (result2.status === test.expectedStatus) {
      ++expected;
    } else {
      ++unexpected;
    }
  }
  if (expected === 0 && unexpected === 0)
    return "skipped";
  if (unexpected === 0)
    return "expected";
  if (expected === 0 && skipped === 0)
    return "unexpected";
  return "flaky";
}

// packages/playwright/src/common/test.ts
var Base = class {
  constructor(title) {
    this._only = false;
    this._requireFile = "";
    this.title = title;
  }
};
var Suite = class _Suite extends Base {
  constructor(title, type) {
    super(title);
    this._use = [];
    this._entries = [];
    this._hooks = [];
    // Annotations known statically before running the test, e.g. `test.describe.skip()` or `test.describe({ annotation }, body)`.
    this._staticAnnotations = [];
    // Explicitly declared tags that are not a part of the title.
    this._tags = [];
    this._modifiers = [];
    this._parallelMode = "none";
    this._type = type;
  }
  get type() {
    return this._type;
  }
  entries() {
    return this._entries;
  }
  get suites() {
    return this._entries.filter((entry) => entry instanceof _Suite);
  }
  get tests() {
    return this._entries.filter((entry) => entry instanceof TestCase);
  }
  _addTest(test) {
    test.parent = this;
    this._entries.push(test);
  }
  _addSuite(suite) {
    suite.parent = this;
    this._entries.push(suite);
  }
  _prependSuite(suite) {
    suite.parent = this;
    this._entries.unshift(suite);
  }
  allTests() {
    const result2 = [];
    const visit = (suite) => {
      for (const entry of suite._entries) {
        if (entry instanceof _Suite)
          visit(entry);
        else
          result2.push(entry);
      }
    };
    visit(this);
    return result2;
  }
  _hasTests() {
    let result2 = false;
    const visit = (suite) => {
      for (const entry of suite._entries) {
        if (result2)
          return;
        if (entry instanceof _Suite)
          visit(entry);
        else
          result2 = true;
      }
    };
    visit(this);
    return result2;
  }
  titlePath() {
    const titlePath = this.parent ? this.parent.titlePath() : [];
    if (this.title || this._type !== "describe")
      titlePath.push(this.title);
    return titlePath;
  }
  _collectGrepTitlePath(path10) {
    if (this.parent)
      this.parent._collectGrepTitlePath(path10);
    if (this.title || this._type !== "describe")
      path10.push(this.title);
    path10.push(...this._tags);
  }
  _collectTagTitlePath(path10) {
    this.parent?._collectTagTitlePath(path10);
    if (this._type === "describe")
      path10.push(this.title);
    path10.push(...this._tags);
  }
  _getOnlyItems() {
    const items = [];
    if (this._only)
      items.push(this);
    for (const suite of this.suites)
      items.push(...suite._getOnlyItems());
    items.push(...this.tests.filter((test) => test._only));
    return items;
  }
  _deepClone() {
    const suite = this._clone();
    for (const entry of this._entries) {
      if (entry instanceof _Suite)
        suite._addSuite(entry._deepClone());
      else
        suite._addTest(entry._clone());
    }
    return suite;
  }
  _deepSerialize() {
    const suite = this._serialize();
    suite.entries = [];
    for (const entry of this._entries) {
      if (entry instanceof _Suite)
        suite.entries.push(entry._deepSerialize());
      else
        suite.entries.push(entry._serialize());
    }
    return suite;
  }
  static _deepParse(data) {
    const suite = _Suite._parse(data);
    for (const entry of data.entries) {
      if (entry.kind === "suite")
        suite._addSuite(_Suite._deepParse(entry));
      else
        suite._addTest(TestCase._parse(entry));
    }
    return suite;
  }
  forEachTest(visitor) {
    for (const entry of this._entries) {
      if (entry instanceof _Suite)
        entry.forEachTest(visitor);
      else
        visitor(entry, this);
    }
  }
  _serialize() {
    return {
      kind: "suite",
      title: this.title,
      type: this._type,
      location: this.location,
      only: this._only,
      requireFile: this._requireFile,
      timeout: this._timeout,
      retries: this._retries,
      staticAnnotations: this._staticAnnotations.slice(),
      tags: this._tags.slice(),
      modifiers: this._modifiers.slice(),
      parallelMode: this._parallelMode,
      hooks: this._hooks.map((h) => ({ type: h.type, location: h.location, title: h.title })),
      fileId: this._fileId
    };
  }
  static _parse(data) {
    const suite = new _Suite(data.title, data.type);
    suite.location = data.location;
    suite._only = data.only;
    suite._requireFile = data.requireFile;
    suite._timeout = data.timeout;
    suite._retries = data.retries;
    suite._staticAnnotations = data.staticAnnotations;
    suite._tags = data.tags;
    suite._modifiers = data.modifiers;
    suite._parallelMode = data.parallelMode;
    suite._hooks = data.hooks.map((h) => ({ type: h.type, location: h.location, title: h.title, fn: () => {
    } }));
    suite._fileId = data.fileId;
    return suite;
  }
  _clone() {
    const data = this._serialize();
    const suite = _Suite._parse(data);
    suite._use = this._use.slice();
    suite._hooks = this._hooks.slice();
    suite._fullProject = this._fullProject;
    return suite;
  }
  project() {
    return this._fullProject?.project || this.parent?.project();
  }
};
var TestCase = class _TestCase extends Base {
  constructor(title, fn, testType, location) {
    super(title);
    this.results = [];
    this.type = "test";
    this.expectedStatus = "passed";
    this.timeout = 0;
    this.annotations = [];
    this.retries = 0;
    this.repeatEachIndex = 0;
    this.id = "";
    this._poolDigest = "";
    this._workerHash = "";
    this._projectId = "";
    // Explicitly declared tags that are not a part of the title.
    this._tags = [];
    this.fn = fn;
    this._testType = testType;
    this.location = location;
  }
  titlePath() {
    const titlePath = this.parent ? this.parent.titlePath() : [];
    titlePath.push(this.title);
    return titlePath;
  }
  outcome() {
    return computeTestCaseOutcome(this);
  }
  ok() {
    const status = this.outcome();
    return status === "expected" || status === "flaky" || status === "skipped";
  }
  get tags() {
    const path10 = [];
    this.parent._collectTagTitlePath(path10);
    path10.push(this.title);
    const titleTags = path10.join(" ").match(/@[\S]+/g) || [];
    return [
      ...titleTags,
      ...this._tags
    ];
  }
  _serialize() {
    return {
      kind: "test",
      id: this.id,
      title: this.title,
      retries: this.retries,
      timeout: this.timeout,
      expectedStatus: this.expectedStatus,
      location: this.location,
      only: this._only,
      requireFile: this._requireFile,
      poolDigest: this._poolDigest,
      workerHash: this._workerHash,
      annotations: this.annotations.slice(),
      tags: this._tags.slice(),
      projectId: this._projectId
    };
  }
  static _parse(data) {
    const test = new _TestCase(data.title, () => {
    }, rootTestType, data.location);
    test.id = data.id;
    test.retries = data.retries;
    test.timeout = data.timeout;
    test.expectedStatus = data.expectedStatus;
    test._only = data.only;
    test._requireFile = data.requireFile;
    test._poolDigest = data.poolDigest;
    test._workerHash = data.workerHash;
    test.annotations = data.annotations;
    test._tags = data.tags;
    test._projectId = data.projectId;
    return test;
  }
  _clone() {
    const data = this._serialize();
    const test = _TestCase._parse(data);
    test._testType = this._testType;
    test.fn = this.fn;
    return test;
  }
  _appendTestResult() {
    const result2 = {
      retry: this.results.length,
      parallelIndex: -1,
      workerIndex: -1,
      duration: 0,
      startTime: /* @__PURE__ */ new Date(),
      stdout: [],
      stderr: [],
      attachments: [],
      status: "skipped",
      steps: [],
      errors: [],
      annotations: []
    };
    this.results.push(result2);
    return result2;
  }
  _grepBaseTitlePath() {
    const path10 = [];
    this.parent._collectGrepTitlePath(path10);
    path10.push(this.title);
    return path10;
  }
  _grepTitleWithTags() {
    const path10 = this._grepBaseTitlePath();
    path10.push(...this._tags);
    return path10.join(" ");
  }
};

// packages/playwright/src/common/testLoader.ts
var testLoader_exports = {};
__export(testLoader_exports, {
  defaultTimeout: () => defaultTimeout2,
  loadTestFile: () => loadTestFile
});
var import_path9 = __toESM(require("path"));
var import_util10 = __toESM(require("util"));
var import_globals3 = require("../globals");
var defaultTimeout2 = 3e4;
var cachedFileSuites = /* @__PURE__ */ new Map();
async function loadTestFile(file2, config, testErrors) {
  if (cachedFileSuites.has(file2))
    return cachedFileSuites.get(file2);
  const suite = new Suite(import_path9.default.relative(config.config.rootDir, file2) || import_path9.default.basename(file2), "file");
  suite._requireFile = file2;
  suite.location = { file: file2, line: 0, column: 0 };
  suite._tags = [...config.config.tags];
  (0, import_globals3.setCurrentlyLoadingFileSuite)(suite);
  if (!(0, import_globals3.isWorkerProcess)()) {
    startCollectingFileDeps();
    await startCollectingFileDeps2();
  }
  try {
    await requireOrImport(file2);
    cachedFileSuites.set(file2, suite);
  } catch (e) {
    if (!testErrors)
      throw e;
    testErrors.push(serializeLoadError(file2, e));
  } finally {
    (0, import_globals3.setCurrentlyLoadingFileSuite)(void 0);
    if (!(0, import_globals3.isWorkerProcess)()) {
      stopCollectingFileDeps(file2);
      await stopCollectingFileDeps2(file2);
    }
  }
  {
    const files = /* @__PURE__ */ new Set();
    suite.allTests().map((t) => files.add(t.location.file));
    if (files.size === 1) {
      const mappedFile = files.values().next().value;
      if (suite.location.file !== mappedFile) {
        if (import_path9.default.extname(mappedFile) !== import_path9.default.extname(suite.location.file))
          suite.location.file = mappedFile;
      }
    }
  }
  return suite;
}
function serializeLoadError(file2, error) {
  if (error instanceof Error) {
    const result2 = filterStackTrace(error);
    const loc = error.loc;
    result2.location = loc ? {
      file: file2,
      line: loc.line || 0,
      column: loc.column || 0
    } : void 0;
    return result2;
  }
  return { value: import_util10.default.inspect(error) };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FullConfigInternal,
  ProcessRunner,
  builtInReporters,
  cc,
  config,
  configLoader,
  defineConfig,
  esm,
  fixtures,
  ipc,
  mergeTests,
  poolBuilder,
  processRunner,
  startProcessRunner,
  suiteUtils,
  test,
  testLoader,
  testType,
  transform
});
