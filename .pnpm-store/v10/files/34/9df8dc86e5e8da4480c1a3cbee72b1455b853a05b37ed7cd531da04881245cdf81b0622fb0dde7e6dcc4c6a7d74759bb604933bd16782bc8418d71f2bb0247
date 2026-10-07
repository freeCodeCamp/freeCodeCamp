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
var testActions_exports = {};
__export(testActions_exports, {
  clearCache: () => clearCache,
  runTestServerAction: () => runTestServerAction,
  runTests: () => runTests
});
module.exports = __toCommonJS(testActions_exports);
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));
var import_common = require("../common");
var import_runner = require("../runner");
const { gracefullyProcessExitDoNotHang } = require("playwright-core/lib/coreBundle").utils;
const { startProfiling, stopProfiling } = require("playwright-core/lib/coreBundle").utils;
async function runTests(args, opts) {
  await startProfiling();
  const cliOverrides = overridesFromOptions(opts);
  const config = await import_common.configLoader.loadConfigFromFile(opts.config, cliOverrides, opts.deps === false);
  const options = {
    locations: args.length ? args : void 0,
    grep: opts.grep,
    grepInvert: opts.grepInvert,
    onlyChanged: opts.onlyChanged === true ? "HEAD" : opts.onlyChanged,
    listMode: !!opts.list,
    projectFilter: opts.project || void 0,
    passWithNoTests: !!opts.passWithNoTests,
    lastFailed: !!opts.lastFailed,
    testList: opts.testList ? import_path.default.resolve(process.cwd(), opts.testList) : void 0,
    testListInvert: opts.testListInvert ? import_path.default.resolve(process.cwd(), opts.testListInvert) : void 0,
    shardWeights: resolveShardWeightsOption()
  };
  import_runner.projectUtils.filterProjects(config.projects, options.projectFilter);
  if (opts.ui || opts.uiHost || opts.uiPort) {
    if (opts.onlyChanged)
      throw new Error(`--only-changed is not supported in UI mode. If you'd like that to change, see https://github.com/microsoft/playwright/issues/15075 for more details.`);
    const status2 = await import_runner.testServer.runUIMode(opts.config, cliOverrides, {
      host: opts.uiHost,
      port: opts.uiPort ? +opts.uiPort : void 0,
      args,
      grep: opts.grep,
      grepInvert: opts.grepInvert,
      project: opts.project || void 0,
      reporter: Array.isArray(opts.reporter) ? opts.reporter : opts.reporter ? [opts.reporter] : void 0
    });
    await stopProfiling("runner");
    const exitCode2 = status2 === "interrupted" ? 130 : status2 === "passed" ? 0 : 1;
    gracefullyProcessExitDoNotHang(exitCode2);
    return;
  }
  if (process.env.PWTEST_WATCH) {
    if (opts.onlyChanged)
      throw new Error(`--only-changed is not supported in watch mode. If you'd like that to change, file an issue and let us know about your usecase for it.`);
    const status2 = await import_runner.watchMode.runWatchModeLoop(
      import_common.configLoader.resolveConfigLocation(opts.config),
      {
        projects: opts.project,
        files: args,
        grep: opts.grep
      }
    );
    await stopProfiling("runner");
    const exitCode2 = status2 === "interrupted" ? 130 : status2 === "passed" ? 0 : 1;
    gracefullyProcessExitDoNotHang(exitCode2);
    return;
  }
  const status = await import_runner.testRunner.runAllTestsWithConfig(config, options);
  await stopProfiling("runner");
  const exitCode = status === "interrupted" ? 130 : status === "passed" ? 0 : 1;
  gracefullyProcessExitDoNotHang(exitCode);
}
async function runTestServerAction(opts) {
  const host = opts.host;
  const port = opts.port ? +opts.port : void 0;
  const status = await import_runner.testServer.runTestServer(opts.config, {}, { host, port });
  const exitCode = status === "interrupted" ? 130 : status === "passed" ? 0 : 1;
  gracefullyProcessExitDoNotHang(exitCode);
}
async function clearCache(opts) {
  const runner = new import_runner.testRunner.TestRunner(import_common.configLoader.resolveConfigLocation(opts.config), {});
  const { status } = await runner.clearCache(import_runner.runnerReporters.createErrorCollectingReporter(import_runner.base.terminalScreen));
  const exitCode = status === "interrupted" ? 130 : status === "passed" ? 0 : 1;
  gracefullyProcessExitDoNotHang(exitCode);
}
function overridesFromOptions(options) {
  if (options.ui) {
    options.debug = void 0;
    options.trace = void 0;
  }
  const overrides = {
    debug: options.debug,
    failOnFlakyTests: options.failOnFlakyTests ? true : void 0,
    forbidOnly: options.forbidOnly ? true : void 0,
    fullyParallel: options.fullyParallel ? true : void 0,
    globalTimeout: options.globalTimeout ? parseInt(options.globalTimeout, 10) : void 0,
    maxFailures: options.x ? 1 : options.maxFailures ? parseInt(options.maxFailures, 10) : void 0,
    outputDir: options.output ? import_path.default.resolve(process.cwd(), options.output) : void 0,
    pause: !!process.env.PWPAUSE,
    quiet: options.quiet ? options.quiet : void 0,
    repeatEach: options.repeatEach ? parseInt(options.repeatEach, 10) : void 0,
    retries: options.retries ? parseInt(options.retries, 10) : void 0,
    reporter: resolveReporterOption(options.reporter),
    shard: resolveShardOption(options.shard),
    timeout: options.timeout ? parseInt(options.timeout, 10) : void 0,
    tsconfig: options.tsconfig ? import_path.default.resolve(process.cwd(), options.tsconfig) : void 0,
    ignoreSnapshots: options.ignoreSnapshots ? !!options.ignoreSnapshots : void 0,
    updateSnapshots: options.updateSnapshots,
    updateSourceMethod: options.updateSourceMethod,
    use: {
      trace: options.trace
    },
    workers: options.workers
  };
  if (options.browser) {
    const browserOpt = options.browser.toLowerCase();
    if (!["all", "chromium", "firefox", "webkit"].includes(browserOpt))
      throw new Error(`Unsupported browser "${options.browser}", must be one of "all", "chromium", "firefox" or "webkit"`);
    const browserNames = browserOpt === "all" ? ["chromium", "firefox", "webkit"] : [browserOpt];
    overrides.projects = browserNames.map((browserName) => {
      return {
        name: browserName,
        use: { browserName }
      };
    });
  }
  if (options.headed)
    overrides.use.headless = false;
  if (options.debug === "inspector") {
    overrides.use.headless = false;
    process.env.PWDEBUG = "1";
  }
  if (overrides.tsconfig && !import_fs.default.existsSync(overrides.tsconfig))
    throw new Error(`--tsconfig "${options.tsconfig}" does not exist`);
  return overrides;
}
function resolveReporterOption(reporter) {
  if (!reporter || !reporter.length)
    return void 0;
  return reporter.split(",").map((r) => [resolveReporter(r)]);
}
function resolveShardOption(shard) {
  if (!shard)
    return void 0;
  const shardPair = shard.split("/");
  if (shardPair.length !== 2) {
    throw new Error(
      `--shard "${shard}", expected format is "current/all", 1-based, for example "3/5".`
    );
  }
  const current = parseInt(shardPair[0], 10);
  const total = parseInt(shardPair[1], 10);
  if (isNaN(total) || total < 1)
    throw new Error(`--shard "${shard}" total must be a positive number`);
  if (isNaN(current) || current < 1 || current > total) {
    throw new Error(
      `--shard "${shard}" current must be a positive number, not greater than shard total`
    );
  }
  return { current, total };
}
function resolveShardWeightsOption() {
  const shardWeights = process.env.PWTEST_SHARD_WEIGHTS;
  if (!shardWeights)
    return void 0;
  return shardWeights.split(":").map((w) => {
    const weight = parseInt(w, 10);
    if (isNaN(weight) || weight < 0)
      throw new Error(`PWTEST_SHARD_WEIGHTS="${shardWeights}" weights must be non-negative numbers`);
    return weight;
  });
}
function resolveReporter(id) {
  if (import_common.builtInReporters.includes(id))
    return id;
  const localPath = import_path.default.resolve(process.cwd(), id);
  if (import_fs.default.existsSync(localPath))
    return localPath;
  return require.resolve(id, { paths: [process.cwd()] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  clearCache,
  runTestServerAction,
  runTests
});
