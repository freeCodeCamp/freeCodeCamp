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
var testContext_exports = {};
__export(testContext_exports, {
  GeneratorJournal: () => GeneratorJournal,
  TestContext: () => TestContext,
  createScreen: () => createScreen
});
module.exports = __toCommonJS(testContext_exports);
var import_fs = __toESM(require("fs"));
var import_os = __toESM(require("os"));
var import_path = __toESM(require("path"));
var import_coreBundle = require("playwright-core/lib/coreBundle");
var import_runner = require("../../runner");
var import_streams = require("./streams");
var import_util = require("../../util");
var import_seed = require("./seed");
var import_common = require("../../common");
const debug = require("playwright-core/lib/utilsBundle").debug;
const { noColors } = require("playwright-core/lib/coreBundle").iso;
const { ManualPromise, signalToPromise } = require("playwright-core/lib/coreBundle").iso;
const { escapeRegExp } = require("playwright-core/lib/coreBundle").iso;
const { toPosixPath } = require("playwright-core/lib/coreBundle").utils;
class GeneratorJournal {
  constructor(rootPath, plan, seed) {
    this._rootPath = rootPath;
    this._plan = plan;
    this._seed = seed;
    this._steps = [];
  }
  logStep(title, code) {
    if (title)
      this._steps.push({ title, code });
  }
  journal() {
    const result = [];
    result.push(`# Plan`);
    result.push(this._plan);
    result.push(`# Seed file: ${toPosixPath(import_path.default.relative(this._rootPath, this._seed.file))}`);
    result.push("```ts");
    result.push(this._seed.content);
    result.push("```");
    result.push(`# Steps`);
    result.push(this._steps.map((step) => `### ${step.title}
\`\`\`ts
${step.code}
\`\`\``).join("\n\n"));
    result.push(bestPracticesMarkdown);
    return result.join("\n\n");
  }
}
class TestContext {
  constructor(clientInfo, configPath, options) {
    this._testOpQueue = Promise.resolve();
    this._clientInfo = clientInfo;
    this._configLocation = import_common.configLoader.resolveConfigLocation(configPath || clientInfo.cwd);
    this.rootPath = clientInfo.cwd || this._configLocation.configDir;
    if (options?.headless !== void 0)
      this.computedHeaded = !options.headless;
    else
      this.computedHeaded = !process.env.CI && !(import_os.default.platform() === "linux" && !process.env.DISPLAY);
  }
  async _enqueue(fn) {
    const next = this._testOpQueue.then(fn);
    this._testOpQueue = next.then(() => {
    });
    return await next;
  }
  existingTestRunner() {
    return this._testRunnerAndScreen?.testRunner;
  }
  async _cleanupTestRunner() {
    if (!this._testRunnerAndScreen)
      return;
    await this._testRunnerAndScreen.testRunner.stopTests();
    this._testRunnerAndScreen.claimStdio();
    try {
      await this._testRunnerAndScreen.testRunner.runGlobalTeardown();
    } finally {
      this._testRunnerAndScreen.releaseStdio();
      this._testRunnerAndScreen = void 0;
    }
  }
  async createTestRunner() {
    await this._cleanupTestRunner();
    const runner = new import_runner.testRunner.TestRunner(this._configLocation, {});
    await runner.initialize({});
    const testPaused = new ManualPromise();
    const testRunnerAndScreen = {
      ...createScreen(),
      testRunner: runner,
      waitForTestPaused: () => testPaused
    };
    this._testRunnerAndScreen = testRunnerAndScreen;
    runner.on(import_runner.testRunner.TestRunnerEvent.TestPaused, (params) => {
      testRunnerAndScreen.sendMessageToPausedTest = params.sendMessage;
      testPaused.resolve();
    });
    return testRunnerAndScreen;
  }
  async getOrCreateSeedFile(seedFile, projectName) {
    const configDir = this._configLocation.configDir;
    const { testRunner: runner } = await this.createTestRunner();
    const config = await runner.loadConfig();
    const project = (0, import_seed.seedProject)(config, projectName);
    if (!seedFile) {
      seedFile = await (0, import_seed.ensureSeedFile)(project);
    } else {
      const candidateFiles = [];
      const testDir = project.project.testDir;
      candidateFiles.push(import_path.default.resolve(testDir, seedFile));
      candidateFiles.push(import_path.default.resolve(configDir, seedFile));
      candidateFiles.push(import_path.default.resolve(this.rootPath, seedFile));
      let resolvedSeedFile;
      for (const candidateFile of candidateFiles) {
        if (await (0, import_util.fileExistsAsync)(candidateFile)) {
          resolvedSeedFile = candidateFile;
          break;
        }
      }
      if (!resolvedSeedFile)
        throw new Error("seed test not found.");
      seedFile = resolvedSeedFile;
    }
    const seedFileContent = await import_fs.default.promises.readFile(seedFile, "utf8");
    return {
      file: seedFile,
      content: seedFileContent,
      projectName: project.project.name
    };
  }
  async runSeedTest(seedFile, projectName, signal) {
    const result = await this.runTestsWithGlobalSetupAndPossiblePause({
      headed: this.computedHeaded,
      locations: ["/" + escapeRegExp(seedFile) + "/"],
      projects: [projectName],
      timeout: 0,
      workers: 1,
      pauseAtEnd: true,
      disableConfigReporters: true,
      failOnLoadErrors: true
    }, signal);
    if (result.status === "passed")
      result.output += "\nError: seed test not found.";
    else if (result.status !== "paused")
      result.output += "\nError while running the seed test.";
    return result;
  }
  async runTestsWithGlobalSetupAndPossiblePause(params, signal) {
    return this._enqueue(() => this._runTestsImpl(params, signal));
  }
  async _runTestsImpl(params, signal) {
    const configDir = this._configLocation.configDir;
    const testRunnerAndScreen = await this.createTestRunner();
    const { testRunner: runner, screen, claimStdio, releaseStdio } = testRunnerAndScreen;
    claimStdio();
    try {
      const setupReporter = new MCPListReporter({ configDir, screen, includeTestId: true });
      const { status: status2 } = await runner.runGlobalSetup([setupReporter]);
      if (status2 !== "passed")
        return { output: testRunnerAndScreen.output.join("\n"), status: status2 };
    } finally {
      releaseStdio();
    }
    let status = "passed";
    const cleanup = async () => {
      claimStdio();
      try {
        const result = await runner.runGlobalTeardown();
        if (status === "passed")
          status = result.status;
      } finally {
        releaseStdio();
      }
    };
    const abortPromise = signal ? signalToPromise(signal).promise.then(() => "interrupted") : new Promise(() => {
    });
    try {
      const reporter = new MCPListReporter({ configDir, screen, includeTestId: true });
      status = await Promise.race([
        runner.runTests(reporter, params).then((result) => result.status),
        testRunnerAndScreen.waitForTestPaused().then(() => "paused"),
        abortPromise
      ]);
      if (status === "interrupted") {
        await runner.stopTests();
        await cleanup();
        return { output: testRunnerAndScreen.output.join("\n"), status };
      }
      if (status === "paused") {
        const response = await testRunnerAndScreen.sendMessageToPausedTest({ request: { initialize: { clientInfo: this._clientInfo } } });
        if (response.error)
          throw new Error(response.error.message);
        testRunnerAndScreen.output.push(response.response.initialize.pausedMessage);
        return { output: testRunnerAndScreen.output.join("\n"), status };
      }
    } catch (e) {
      status = "failed";
      testRunnerAndScreen.output.push(String(e));
      await cleanup();
      return { output: testRunnerAndScreen.output.join("\n"), status };
    }
    await cleanup();
    return { output: testRunnerAndScreen.output.join("\n"), status };
  }
  async close() {
    await this._enqueue(() => this._cleanupTestRunner()).catch((e) => debug("pw:mcp:error")(e));
  }
  async sendMessageToPausedTest(request) {
    const sendMessage = this._testRunnerAndScreen?.sendMessageToPausedTest;
    if (!sendMessage)
      throw new Error("Must setup test before interacting with the page");
    const result = await sendMessage({ request });
    if (result.error)
      throw new Error(result.error.message);
    if (typeof request?.callTool?.arguments?.["intent"] === "string") {
      const response = import_coreBundle.tools.parseResponse(result.response.callTool);
      if (response && !response.isError && response.code)
        this.generatorJournal?.logStep(request.callTool.arguments["intent"], response.code);
    }
    return result.response;
  }
}
function createScreen() {
  const output = [];
  const stdout = new import_streams.StringWriteStream(output, "stdout");
  const stderr = new import_streams.StringWriteStream(output, "stderr");
  const screen = {
    ...import_runner.base.terminalScreen,
    isTTY: false,
    colors: noColors,
    stdout,
    stderr
  };
  const originalStdoutWrite = process.stdout.write;
  const originalStderrWrite = process.stderr.write;
  const claimStdio = () => {
    process.stdout.write = (chunk) => {
      stdout.write(chunk);
      return true;
    };
    process.stderr.write = (chunk) => {
      stderr.write(chunk);
      return true;
    };
  };
  const releaseStdio = () => {
    process.stdout.write = originalStdoutWrite;
    process.stderr.write = originalStderrWrite;
  };
  return { screen, claimStdio, releaseStdio, output };
}
const bestPracticesMarkdown = `
# Best practices
- Do not improvise, do not add directives that were not asked for
- Use clear, descriptive assertions to validate the expected behavior
- Use reliable locators from this log
- Use local variables for locators that are used multiple times
- Use Playwright waiting assertions and best practices from this log
- NEVER! use page.waitForLoadState()
- NEVER! use page.waitForNavigation()
- NEVER! use page.waitForTimeout()
- NEVER! use page.evaluate()
`;
class MCPListReporter extends import_runner.ListReporter {
  async onTestPaused() {
    await new Promise(() => {
    });
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  GeneratorJournal,
  TestContext,
  createScreen
});
