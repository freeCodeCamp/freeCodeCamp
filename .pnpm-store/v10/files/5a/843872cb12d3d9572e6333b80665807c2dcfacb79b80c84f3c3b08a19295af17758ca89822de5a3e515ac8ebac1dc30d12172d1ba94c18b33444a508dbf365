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

// packages/playwright/src/runner/index.ts
var index_exports = {};
__export(index_exports, {
  ListModeReporter: () => listModeReporter_default,
  ListReporter: () => list_default,
  TestServerConnection: () => TestServerConnection,
  base: () => base_exports,
  html: () => html_exports,
  merge: () => merge_exports,
  projectUtils: () => projectUtils_exports,
  runnerReporters: () => reporters_exports,
  testRunner: () => testRunner_exports,
  testServer: () => testServer_exports,
  watchMode: () => watchMode_exports,
  webServer: () => webServer
});
module.exports = __toCommonJS(index_exports);

// packages/playwright/src/runner/testRunner.ts
var testRunner_exports = {};
__export(testRunner_exports, {
  TestRunner: () => TestRunner,
  TestRunnerEvent: () => TestRunnerEvent,
  runAllTestsWithConfig: () => runAllTestsWithConfig
});
var import_events2 = __toESM(require("events"));
var import_fs13 = __toESM(require("fs"));
var import_path17 = __toESM(require("path"));
var import_coreBundle2 = require("playwright-core/lib/coreBundle");
var import_common9 = require("../common");

// packages/playwright/src/runner/fsWatcher.ts
var chokidar = require("playwright-core/lib/utilsBundle").chokidar;
var FSWatcher = class {
  constructor(onChange) {
    this._watchedPaths = [];
    this._ignoredFolders = [];
    this._collector = [];
    this._onChange = onChange;
  }
  async update(watchedPaths, ignoredFolders, reportPending) {
    if (JSON.stringify([this._watchedPaths, this._ignoredFolders]) === JSON.stringify([watchedPaths, ignoredFolders]))
      return;
    if (reportPending)
      this._reportEventsIfAny();
    this._watchedPaths = watchedPaths;
    this._ignoredFolders = ignoredFolders;
    void this._fsWatcher?.close();
    this._fsWatcher = void 0;
    this._collector.length = 0;
    clearTimeout(this._throttleTimer);
    this._throttleTimer = void 0;
    if (!this._watchedPaths.length)
      return;
    const ignored = [...this._ignoredFolders, "**/node_modules/**"];
    this._fsWatcher = chokidar.watch(watchedPaths, { ignoreInitial: true, ignored }).on("all", async (event, file) => {
      if (this._throttleTimer)
        clearTimeout(this._throttleTimer);
      this._collector.push({ event, file });
      this._throttleTimer = setTimeout(() => this._reportEventsIfAny(), 250);
    });
    await new Promise((resolve, reject) => this._fsWatcher.once("ready", resolve).once("error", reject));
  }
  async close() {
    await this._fsWatcher?.close();
  }
  _reportEventsIfAny() {
    if (this._collector.length)
      this._onChange(this._collector.slice());
    this._collector.length = 0;
  }
};

// packages/playwright/src/isomorphic/teleReceiver.ts
var TeleReporterReceiver = class {
  constructor(reporter, options = {}) {
    this.isListing = false;
    this._tests = /* @__PURE__ */ new Map();
    this._rootSuite = new TeleSuite("", "root");
    this._options = options;
    this._reporter = reporter;
  }
  reset() {
    this._rootSuite._entries = [];
    this._tests.clear();
  }
  dispatch(message) {
    const { method, params } = message;
    if (method === "onConfigure") {
      this._onConfigure(params.config);
      return;
    }
    if (method === "onProject") {
      this._onProject(params.project);
      return;
    }
    if (method === "onBegin") {
      this._onBegin();
      return;
    }
    if (method === "onTestBegin") {
      this._onTestBegin(params.testId, params.result);
      return;
    }
    if (method === "onTestPaused") {
      this._onTestPaused(params.testId, params.resultId, params.errors);
      return;
    }
    if (method === "onTestEnd") {
      this._onTestEnd(params.test, params.result);
      return;
    }
    if (method === "onStepBegin") {
      this._onStepBegin(params.testId, params.resultId, params.step);
      return;
    }
    if (method === "onAttach") {
      this._onAttach(params.testId, params.resultId, params.attachments);
      return;
    }
    if (method === "onStepEnd") {
      this._onStepEnd(params.testId, params.resultId, params.step);
      return;
    }
    if (method === "onError") {
      this._onError(params.error, params.workerInfo);
      return;
    }
    if (method === "onStdIO") {
      this._onStdIO(params.type, params.testId, params.resultId, params.data, params.isBase64);
      return;
    }
    if (method === "onEnd")
      return this._onEnd(params.result);
    if (method === "onExit")
      return this._onExit();
  }
  _onConfigure(config2) {
    this._rootDir = config2.rootDir;
    this._config = this._parseConfig(config2);
    this._reporter.onConfigure?.(this._config);
  }
  _onProject(project) {
    let projectSuite = this._options.mergeProjects ? this._rootSuite.suites.find((suite) => suite.project().name === project.name) : void 0;
    if (!projectSuite) {
      projectSuite = new TeleSuite(project.name, "project");
      this._rootSuite._addSuite(projectSuite);
    }
    const parsed = this._parseProject(project);
    projectSuite._project = parsed;
    let index = -1;
    if (this._options.mergeProjects)
      index = this._config.projects.findIndex((p) => p.name === project.name);
    if (index === -1)
      this._config.projects.push(parsed);
    else
      this._config.projects[index] = parsed;
    for (const suite of project.suites)
      this._mergeSuiteInto(suite, projectSuite);
  }
  _onBegin() {
    this._reporter.onBegin?.(this._rootSuite);
  }
  _onTestBegin(testId, payload) {
    const test = this._tests.get(testId);
    if (this._options.clearPreviousResultsWhenTestBegins)
      test.results = [];
    const testResult = test._createTestResult(payload.id);
    testResult.retry = payload.retry;
    testResult.workerIndex = payload.workerIndex;
    testResult.parallelIndex = payload.parallelIndex;
    testResult.setStartTimeNumber(payload.startTime);
    this._reporter.onTestBegin?.(test, testResult);
  }
  _onTestPaused(testId, resultId, errors) {
    const test = this._tests.get(testId);
    const result = test.results.find((r) => r._id === resultId);
    result.errors.push(...errors);
    result.error = result.errors[0];
    void this._reporter.onTestPaused?.(test, result);
  }
  _onTestEnd(testEndPayload, payload) {
    const test = this._tests.get(testEndPayload.testId);
    test.timeout = testEndPayload.timeout;
    test.expectedStatus = testEndPayload.expectedStatus;
    const result = test.results.find((r) => r._id === payload.id);
    result.duration = payload.duration;
    result.status = payload.status;
    result.errors.push(...payload.errors ?? []);
    result.error = result.errors[0];
    if (!!payload.attachments)
      result.attachments = this._parseAttachments(payload.attachments);
    if (payload.annotations) {
      this._absoluteAnnotationLocationsInplace(payload.annotations);
      result.annotations = payload.annotations;
      test.annotations = payload.annotations;
    }
    this._reporter.onTestEnd?.(test, result);
    result._stepMap = /* @__PURE__ */ new Map();
  }
  _onStepBegin(testId, resultId, payload) {
    const test = this._tests.get(testId);
    const result = test.results.find((r) => r._id === resultId);
    const parentStep = payload.parentStepId ? result._stepMap.get(payload.parentStepId) : void 0;
    const location = this._absoluteLocation(payload.location);
    const step = new TeleTestStep(payload, parentStep, location, result);
    if (parentStep)
      parentStep.steps.push(step);
    else
      result.steps.push(step);
    result._stepMap.set(payload.id, step);
    this._reporter.onStepBegin?.(test, result, step);
  }
  _onStepEnd(testId, resultId, payload) {
    const test = this._tests.get(testId);
    const result = test.results.find((r) => r._id === resultId);
    const step = result._stepMap.get(payload.id);
    step._endPayload = payload;
    step.duration = payload.duration;
    step.error = payload.error;
    this._reporter.onStepEnd?.(test, result, step);
  }
  _onAttach(testId, resultId, attachments) {
    const test = this._tests.get(testId);
    const result = test.results.find((r) => r._id === resultId);
    result.attachments.push(...attachments.map((a) => ({
      name: a.name,
      contentType: a.contentType,
      path: a.path,
      body: a.base64 && globalThis.Buffer ? Buffer.from(a.base64, "base64") : void 0
    })));
  }
  _onError(error, workerInfo) {
    let fullWorkerInfo;
    if (workerInfo) {
      const project = this._config.projects.find((p) => p.name === workerInfo.projectName);
      if (project) {
        fullWorkerInfo = {
          workerIndex: workerInfo.workerIndex,
          parallelIndex: workerInfo.parallelIndex,
          config: this._config,
          project
        };
      }
    }
    this._reporter.onError?.(error, fullWorkerInfo);
  }
  _onStdIO(type, testId, resultId, data, isBase64) {
    const chunk = isBase64 ? globalThis.Buffer ? Buffer.from(data, "base64") : atob(data) : data;
    const test = testId ? this._tests.get(testId) : void 0;
    const result = test && resultId ? test.results.find((r) => r._id === resultId) : void 0;
    if (type === "stdout") {
      result?.stdout.push(chunk);
      this._reporter.onStdOut?.(chunk, test, result);
    } else {
      result?.stderr.push(chunk);
      this._reporter.onStdErr?.(chunk, test, result);
    }
  }
  async _onEnd(result) {
    await this._reporter.onEnd?.(asFullResult(result));
  }
  _onExit() {
    return this._reporter.onExit?.();
  }
  _parseConfig(config2) {
    const result = asFullConfig(config2);
    if (this._options.configOverrides) {
      result.configFile = this._options.configOverrides.configFile;
      result.reportSlowTests = this._options.configOverrides.reportSlowTests;
      result.quiet = this._options.configOverrides.quiet;
      result.reporter = [...this._options.configOverrides.reporter];
    }
    return result;
  }
  _parseProject(project) {
    return {
      metadata: project.metadata,
      name: project.name,
      outputDir: this._absolutePath(project.outputDir),
      repeatEach: project.repeatEach,
      retries: project.retries,
      testDir: this._absolutePath(project.testDir),
      testIgnore: parseRegexPatterns(project.testIgnore),
      testMatch: parseRegexPatterns(project.testMatch),
      timeout: project.timeout,
      grep: parseRegexPatterns(project.grep),
      grepInvert: parseRegexPatterns(project.grepInvert),
      dependencies: project.dependencies,
      teardown: project.teardown,
      snapshotDir: this._absolutePath(project.snapshotDir),
      ignoreSnapshots: project.ignoreSnapshots ?? false,
      use: project.use
    };
  }
  _parseAttachments(attachments) {
    return attachments.map((a) => {
      return {
        ...a,
        body: a.base64 && globalThis.Buffer ? Buffer.from(a.base64, "base64") : void 0
      };
    });
  }
  _mergeSuiteInto(jsonSuite, parent) {
    let targetSuite = parent.suites.find((s) => s.title === jsonSuite.title);
    if (!targetSuite) {
      targetSuite = new TeleSuite(jsonSuite.title, parent.type === "project" ? "file" : "describe");
      parent._addSuite(targetSuite);
    }
    targetSuite.location = this._absoluteLocation(jsonSuite.location);
    jsonSuite.entries.forEach((e) => {
      if ("testId" in e)
        this._mergeTestInto(e, targetSuite);
      else
        this._mergeSuiteInto(e, targetSuite);
    });
  }
  _mergeTestInto(jsonTest, parent) {
    let targetTest = this._options.mergeTestCases ? parent.tests.find((s) => s.title === jsonTest.title && s.repeatEachIndex === jsonTest.repeatEachIndex) : void 0;
    if (!targetTest) {
      targetTest = new TeleTestCase(jsonTest.testId, jsonTest.title, this._absoluteLocation(jsonTest.location), jsonTest.repeatEachIndex);
      parent._addTest(targetTest);
      this._tests.set(targetTest.id, targetTest);
    }
    this._updateTest(jsonTest, targetTest);
  }
  _updateTest(payload, test) {
    test.id = payload.testId;
    test.location = this._absoluteLocation(payload.location);
    test.retries = payload.retries;
    test.tags = payload.tags ?? [];
    test.annotations = payload.annotations ?? [];
    this._absoluteAnnotationLocationsInplace(test.annotations);
    return test;
  }
  _absoluteAnnotationLocationsInplace(annotations) {
    for (const annotation of annotations) {
      if (annotation.location)
        annotation.location = this._absoluteLocation(annotation.location);
    }
  }
  _absoluteLocation(location) {
    if (!location)
      return location;
    return {
      ...location,
      file: this._absolutePath(location.file)
    };
  }
  _absolutePath(relativePath) {
    if (relativePath === void 0)
      return;
    return this._options.resolvePath ? this._options.resolvePath(this._rootDir, relativePath) : this._rootDir + "/" + relativePath;
  }
};
var TeleSuite = class {
  constructor(title, type) {
    this._entries = [];
    this._requireFile = "";
    this._parallelMode = "none";
    this.title = title;
    this._type = type;
  }
  get type() {
    return this._type;
  }
  get suites() {
    return this._entries.filter((e) => e.type !== "test");
  }
  get tests() {
    return this._entries.filter((e) => e.type === "test");
  }
  entries() {
    return this._entries;
  }
  allTests() {
    const result = [];
    const visit = (suite) => {
      for (const entry of suite.entries()) {
        if (entry.type === "test")
          result.push(entry);
        else
          visit(entry);
      }
    };
    visit(this);
    return result;
  }
  titlePath() {
    const titlePath = this.parent ? this.parent.titlePath() : [];
    if (this.title || this._type !== "describe")
      titlePath.push(this.title);
    return titlePath;
  }
  project() {
    return this._project ?? this.parent?.project();
  }
  _addTest(test) {
    test.parent = this;
    this._entries.push(test);
  }
  _addSuite(suite) {
    suite.parent = this;
    this._entries.push(suite);
  }
};
var TeleTestCase = class {
  constructor(id, title, location, repeatEachIndex) {
    this.fn = () => {
    };
    this.results = [];
    this.type = "test";
    this.expectedStatus = "passed";
    this.timeout = 0;
    this.annotations = [];
    this.retries = 0;
    this.tags = [];
    this.repeatEachIndex = 0;
    this.id = id;
    this.title = title;
    this.location = location;
    this.repeatEachIndex = repeatEachIndex;
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
  _createTestResult(id) {
    const result = new TeleTestResult(this.results.length, id);
    this.results.push(result);
    return result;
  }
};
var TeleTestStep = class {
  constructor(payload, parentStep, location, result) {
    this.duration = -1;
    this.steps = [];
    this._startTime = 0;
    this.title = payload.title;
    this.category = payload.category;
    this.location = location;
    this.parent = parentStep;
    this._startTime = payload.startTime;
    this._result = result;
  }
  titlePath() {
    const parentPath = this.parent?.titlePath() || [];
    return [...parentPath, this.title];
  }
  get startTime() {
    return new Date(this._startTime);
  }
  set startTime(value) {
    this._startTime = +value;
  }
  get attachments() {
    return this._endPayload?.attachments?.map((index) => this._result.attachments[index]) ?? [];
  }
  get annotations() {
    return this._endPayload?.annotations ?? [];
  }
};
var TeleTestResult = class {
  constructor(retry, id) {
    this.parallelIndex = -1;
    this.workerIndex = -1;
    this.duration = -1;
    this.stdout = [];
    this.stderr = [];
    this.attachments = [];
    this.annotations = [];
    this.status = "skipped";
    this.steps = [];
    this.errors = [];
    this._stepMap = /* @__PURE__ */ new Map();
    this._startTime = 0;
    this.retry = retry;
    this._id = id;
  }
  setStartTimeNumber(startTime) {
    this._startTime = startTime;
  }
  get startTime() {
    return new Date(this._startTime);
  }
  set startTime(value) {
    this._startTime = +value;
  }
};
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
function serializeRegexPatterns(patterns) {
  if (!Array.isArray(patterns))
    patterns = [patterns];
  return patterns.map((s) => {
    if (typeof s === "string")
      return { s };
    return { r: { source: s.source, flags: s.flags } };
  });
}
function parseRegexPatterns(patterns) {
  return patterns.map((p) => {
    if (p.s !== void 0)
      return p.s;
    return new RegExp(p.r.source, p.r.flags);
  });
}
function computeTestCaseOutcome(test) {
  let skipped = 0;
  let didNotRun = 0;
  let expected = 0;
  let interrupted = 0;
  let unexpected = 0;
  for (const result of test.results) {
    if (result.status === "interrupted") {
      ++interrupted;
    } else if (result.status === "skipped" && test.expectedStatus === "skipped") {
      ++skipped;
    } else if (result.status === "skipped") {
      ++didNotRun;
    } else if (result.status === test.expectedStatus) {
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
function asFullResult(result) {
  return {
    status: result.status,
    startTime: new Date(result.startTime),
    duration: result.duration
  };
}
function asFullConfig(config2) {
  return { ...baseFullConfig, ...config2 };
}

// packages/playwright/src/plugins/gitCommitInfoPlugin.ts
var fs = __toESM(require("fs"));
var { monotonicTime } = require("playwright-core/lib/coreBundle").iso;
var { spawnAsync } = require("playwright-core/lib/coreBundle").utils;
var GIT_OPERATIONS_TIMEOUT_MS = 3e3;
var addGitCommitInfoPlugin = (fullConfig) => {
  fullConfig.plugins.push({ factory: gitCommitInfoPlugin.bind(null, fullConfig) });
};
function print(s, ...args) {
  console.log("GitCommitInfo: " + s, ...args);
}
function debug(s, ...args) {
  if (!process.env.DEBUG_GIT_COMMIT_INFO)
    return;
  print(s, ...args);
}
var gitCommitInfoPlugin = (fullConfig) => {
  return {
    name: "playwright:git-commit-info",
    setup: async (config2, configDir) => {
      const metadata = config2.metadata;
      const ci = await ciInfo();
      if (!metadata.ci && ci) {
        debug("ci info", ci);
        metadata.ci = ci;
      }
      if (fullConfig.captureGitInfo?.commit || fullConfig.captureGitInfo?.commit === void 0 && ci) {
        const git = await gitCommitInfo(configDir).catch((e) => print("failed to get git commit info", e));
        if (git) {
          debug("commit info", git);
          metadata.gitCommit = git;
        }
      }
      if (fullConfig.captureGitInfo?.diff || fullConfig.captureGitInfo?.diff === void 0 && ci) {
        const diffResult = await gitDiff(configDir, ci).catch((e) => print("failed to get git diff", e));
        if (diffResult) {
          debug(`diff length ${diffResult.length}`);
          metadata.gitDiff = diffResult;
        }
      }
    }
  };
};
async function ciInfo() {
  if (process.env.GITHUB_ACTIONS) {
    let pr;
    try {
      const json = JSON.parse(await fs.promises.readFile(process.env.GITHUB_EVENT_PATH, "utf8"));
      pr = { title: json.pull_request.title, number: json.pull_request.number, baseHash: json.pull_request.base.sha };
    } catch {
    }
    return {
      commitHref: `${process.env.GITHUB_SERVER_URL}/${process.env.GITHUB_REPOSITORY}/commit/${process.env.GITHUB_SHA}`,
      commitHash: process.env.GITHUB_SHA,
      prHref: pr ? `${process.env.GITHUB_SERVER_URL}/${process.env.GITHUB_REPOSITORY}/pull/${pr.number}` : void 0,
      prTitle: pr?.title,
      prBaseHash: pr?.baseHash,
      buildHref: `${process.env.GITHUB_SERVER_URL}/${process.env.GITHUB_REPOSITORY}/actions/runs/${process.env.GITHUB_RUN_ID}`
    };
  }
  if (process.env.GITLAB_CI) {
    return {
      commitHref: `${process.env.CI_PROJECT_URL}/-/commit/${process.env.CI_COMMIT_SHA}`,
      commitHash: process.env.CI_COMMIT_SHA,
      buildHref: process.env.CI_JOB_URL,
      branch: process.env.CI_COMMIT_REF_NAME
    };
  }
  if (process.env.JENKINS_URL && process.env.BUILD_URL) {
    return {
      commitHref: process.env.BUILD_URL,
      commitHash: process.env.GIT_COMMIT,
      branch: process.env.GIT_BRANCH
    };
  }
}
async function gitCommitInfo(gitDir) {
  const separator2 = `---786eec917292---`;
  const tokens = [
    "%H",
    // commit hash
    "%h",
    // abbreviated commit hash
    "%s",
    // subject
    "%B",
    // raw body (unwrapped subject and body)
    "%an",
    // author name
    "%ae",
    // author email
    "%at",
    // author date, UNIX timestamp
    "%cn",
    // committer name
    "%ce",
    // committer email
    "%ct",
    // committer date, UNIX timestamp
    ""
    // branch
  ];
  const output = await runGit(`git log -1 --pretty=format:"${tokens.join(separator2)}" && git rev-parse --abbrev-ref HEAD`, gitDir);
  if (!output)
    return void 0;
  const [hash, shortHash, subject, body, authorName, authorEmail, authorTime, committerName, committerEmail, committerTime, branch] = output.split(separator2);
  return {
    shortHash,
    hash,
    subject,
    body,
    author: {
      name: authorName,
      email: authorEmail,
      time: +authorTime * 1e3
    },
    committer: {
      name: committerName,
      email: committerEmail,
      time: +committerTime * 1e3
    },
    branch: branch.trim()
  };
}
async function gitDiff(gitDir, ci) {
  const diffLimit = 1e5;
  if (ci?.prBaseHash) {
    await runGit(`git fetch origin ${ci.prBaseHash} --depth=1 --no-auto-maintenance --no-auto-gc --no-tags --no-recurse-submodules`, gitDir);
    const diff3 = await runGit(`git diff ${ci.prBaseHash} HEAD`, gitDir);
    if (diff3)
      return diff3.substring(0, diffLimit);
  }
  if (ci)
    return;
  const uncommitted = await runGit("git diff", gitDir);
  if (uncommitted === void 0) {
    return;
  }
  if (uncommitted)
    return uncommitted.substring(0, diffLimit);
  const diff2 = await runGit("git diff HEAD~1", gitDir);
  return diff2?.substring(0, diffLimit);
}
async function runGit(command, cwd) {
  debug(`running "${command}"`);
  const start = monotonicTime();
  const result = await spawnAsync(
    command,
    [],
    { stdio: "pipe", cwd, timeout: GIT_OPERATIONS_TIMEOUT_MS, shell: true }
  );
  if (monotonicTime() - start > GIT_OPERATIONS_TIMEOUT_MS) {
    print(`timeout of ${GIT_OPERATIONS_TIMEOUT_MS}ms exceeded while running "${command}"`);
    return;
  }
  if (result.code)
    debug(`failure, code=${result.code}

${result.stderr}`);
  else
    debug(`success`);
  return result.code ? void 0 : result.stdout.trim();
}

// packages/playwright/src/plugins/webServerPlugin.ts
var import_net = __toESM(require("net"));
var import_path = __toESM(require("path"));
var colors = require("playwright-core/lib/utilsBundle").colors;
var debug2 = require("playwright-core/lib/utilsBundle").debug;
var { ManualPromise } = require("playwright-core/lib/coreBundle").iso;
var { monotonicTime: monotonicTime2 } = require("playwright-core/lib/coreBundle").iso;
var { raceAgainstDeadline } = require("playwright-core/lib/coreBundle").iso;
var { isURLAvailable } = require("playwright-core/lib/coreBundle").utils;
var { launchProcess } = require("playwright-core/lib/coreBundle").utils;
var DEFAULT_ENVIRONMENT_VARIABLES = {
  "BROWSER": "none",
  // Disable that create-react-app will open the page in the browser
  "FORCE_COLOR": "1",
  "DEBUG_COLORS": "1"
};
var debugWebServer = debug2("pw:webserver");
var WebServerPlugin = class {
  constructor(options, checkPortOnly) {
    this.name = "playwright:webserver";
    this._options = options;
    this._checkPortOnly = checkPortOnly;
  }
  async setup(config2, configDir, reporter) {
    this._reporter = reporter;
    if (this._options.url)
      this._isAvailableCallback = getIsAvailableFunction(this._options.url, this._checkPortOnly, !!this._options.ignoreHTTPSErrors, this._reporter.onStdErr?.bind(this._reporter));
    this._options.cwd = this._options.cwd ? import_path.default.resolve(configDir, this._options.cwd) : configDir;
    try {
      await this._startProcess();
      await this._waitForProcess();
    } catch (error) {
      await this.teardown();
      throw error;
    }
  }
  async teardown() {
    debugWebServer(`Terminating the WebServer`);
    await this._killProcess?.();
    debugWebServer(`Terminated the WebServer`);
  }
  async _startProcess() {
    let processExitedReject = (error) => {
    };
    this._processExitedPromise = new Promise((_, reject) => processExitedReject = reject);
    const isAlreadyAvailable = await this._isAvailableCallback?.();
    if (isAlreadyAvailable) {
      debugWebServer(`WebServer is already available`);
      if (this._options.reuseExistingServer)
        return;
      const port = new URL(this._options.url).port;
      throw new Error(`${this._options.url ?? `http://localhost${port ? ":" + port : ""}`} is already used, make sure that nothing is running on the port/url or set reuseExistingServer:true in config.webServer.`);
    }
    if (!this._options.command)
      throw new Error("config.webServer.command cannot be empty");
    debugWebServer(`Starting WebServer process ${this._options.command}...`);
    const { launchedProcess, gracefullyClose } = await launchProcess({
      command: this._options.command,
      env: {
        ...DEFAULT_ENVIRONMENT_VARIABLES,
        ...process.env,
        ...this._options.env
      },
      cwd: this._options.cwd,
      stdio: "stdin",
      shell: true,
      attemptToGracefullyClose: async () => {
        if (process.platform === "win32")
          throw new Error("Graceful shutdown is not supported on Windows");
        if (!this._options.gracefulShutdown)
          throw new Error("skip graceful shutdown");
        const { signal, timeout = 0 } = this._options.gracefulShutdown;
        process.kill(-launchedProcess.pid, signal);
        return new Promise((resolve, reject) => {
          const timer = timeout !== 0 ? setTimeout(() => reject(new Error(`process didn't close gracefully within timeout`)), timeout) : void 0;
          launchedProcess.once("close", (...args) => {
            clearTimeout(timer);
            resolve();
          });
        });
      },
      log: () => {
      },
      onExit: (code) => processExitedReject(new Error(code ? `Process from config.webServer was not able to start. Exit code: ${code}` : "Process from config.webServer exited early.")),
      tempDirectories: []
    });
    this._killProcess = gracefullyClose;
    debugWebServer(`Process started`);
    if (this._options.wait?.stdout || this._options.wait?.stderr)
      this._waitForStdioPromise = new ManualPromise();
    const stdioWaitCollectors = {
      stdout: this._options.wait?.stdout ? "" : void 0,
      stderr: this._options.wait?.stderr ? "" : void 0
    };
    launchedProcess.stdout.on("data", (data) => {
      if (debugWebServer.enabled || this._options.stdout === "pipe")
        this._reporter.onStdOut?.(prefixOutputLines(data.toString(), this._options.name));
    });
    launchedProcess.stderr.on("data", (data) => {
      if (debugWebServer.enabled || (this._options.stderr === "pipe" || !this._options.stderr))
        this._reporter.onStdErr?.(prefixOutputLines(data.toString(), this._options.name));
    });
    const resolveStdioPromise = () => {
      stdioWaitCollectors.stdout = void 0;
      stdioWaitCollectors.stderr = void 0;
      this._waitForStdioPromise?.resolve();
    };
    for (const stdio of ["stdout", "stderr"]) {
      launchedProcess[stdio].on("data", (data) => {
        if (!this._options.wait?.[stdio] || stdioWaitCollectors[stdio] === void 0)
          return;
        stdioWaitCollectors[stdio] += data.toString();
        this._options.wait[stdio].lastIndex = 0;
        const result = this._options.wait[stdio].exec(stdioWaitCollectors[stdio]);
        if (result) {
          for (const [key, value] of Object.entries(result.groups || {}))
            process.env[key.toUpperCase()] = value;
          resolveStdioPromise();
        }
      });
    }
  }
  async _waitForProcess() {
    if (!this._isAvailableCallback && !this._waitForStdioPromise) {
      this._processExitedPromise.catch(() => {
      });
      return;
    }
    debugWebServer(`Waiting for availability...`);
    const launchTimeout = this._options.timeout || 60 * 1e3;
    const cancellationToken = { canceled: false };
    const deadline = monotonicTime2() + launchTimeout;
    const racingPromises = [this._processExitedPromise];
    if (this._isAvailableCallback)
      racingPromises.push(raceAgainstDeadline(() => waitFor(this._isAvailableCallback, cancellationToken), deadline));
    if (this._waitForStdioPromise)
      racingPromises.push(raceAgainstDeadline(() => this._waitForStdioPromise, deadline));
    const { timedOut } = await Promise.race(racingPromises);
    cancellationToken.canceled = true;
    if (timedOut)
      throw new Error(`Timed out waiting ${launchTimeout}ms from config.webServer.`);
    debugWebServer(`WebServer available`);
  }
};
async function isPortUsed(port) {
  const innerIsPortUsed = (host) => new Promise((resolve) => {
    const conn = import_net.default.connect(port, host).on("error", () => {
      resolve(false);
    }).on("connect", () => {
      conn.end();
      resolve(true);
    });
  });
  return new Promise((resolve) => {
    let pending = 2;
    const onResult = (result) => {
      if (result)
        resolve(true);
      else if (--pending === 0)
        resolve(false);
    };
    void innerIsPortUsed("127.0.0.1").then(onResult);
    void innerIsPortUsed("::1").then(onResult);
  });
}
async function waitFor(waitFn, cancellationToken) {
  const logScale = [100, 250, 500];
  while (!cancellationToken.canceled) {
    const connected = await waitFn();
    if (connected)
      return;
    const delay = logScale.shift() || 1e3;
    debugWebServer(`Waiting ${delay}ms`);
    await new Promise((x) => setTimeout(x, delay));
  }
}
function getIsAvailableFunction(url, checkPortOnly, ignoreHTTPSErrors, onStdErr) {
  const urlObject = new URL(url);
  if (!checkPortOnly)
    return () => isURLAvailable(urlObject, ignoreHTTPSErrors, debugWebServer, onStdErr);
  const port = urlObject.port;
  return () => isPortUsed(+port);
}
var webServer = (options) => {
  return new WebServerPlugin(options, false);
};
var webServerPluginsForConfig = (config2) => {
  const shouldSetBaseUrl = !!config2.config.webServer;
  const webServerPlugins = [];
  for (const webServerConfig of config2.webServers) {
    if (webServerConfig.port && webServerConfig.url)
      throw new Error(`Either 'port' or 'url' should be specified in config.webServer.`);
    let url;
    if (webServerConfig.port || webServerConfig.url) {
      url = webServerConfig.url || `http://localhost:${webServerConfig.port}`;
      if (shouldSetBaseUrl && !webServerConfig.url)
        process.env.PLAYWRIGHT_TEST_BASE_URL = url;
    }
    webServerPlugins.push(new WebServerPlugin({ ...webServerConfig, url }, webServerConfig.port !== void 0));
  }
  return webServerPlugins;
};
function prefixOutputLines(output, prefixName = "WebServer") {
  const lastIsNewLine = output[output.length - 1] === "\n";
  let lines = output.split("\n");
  if (lastIsNewLine)
    lines.pop();
  lines = lines.map((line) => colors.dim(`[${prefixName}] `) + line);
  if (lastIsNewLine)
    lines.push("");
  return lines.join("\n");
}

// packages/playwright/src/reporters/base.ts
var base_exports = {};
__export(base_exports, {
  TerminalReporter: () => TerminalReporter,
  formatError: () => formatError,
  formatFailure: () => formatFailure,
  formatResultFailure: () => formatResultFailure,
  formatRetry: () => formatRetry,
  internalScreen: () => internalScreen,
  kOutputSymbol: () => kOutputSymbol,
  markErrorsAsReported: () => markErrorsAsReported,
  nonTerminalScreen: () => nonTerminalScreen,
  prepareErrorStack: () => prepareErrorStack,
  relativeFilePath: () => relativeFilePath,
  resolveOutputFile: () => resolveOutputFile,
  separator: () => separator,
  stepSuffix: () => stepSuffix,
  terminalScreen: () => terminalScreen
});
var import_path2 = __toESM(require("path"));
var import_util = require("../util");
var realColors = require("playwright-core/lib/utilsBundle").colors;
var { noColors } = require("playwright-core/lib/coreBundle").iso;
var { msToString } = require("playwright-core/lib/coreBundle").iso;
var { parseErrorStack } = require("playwright-core/lib/coreBundle").iso;
var { getPackageManagerExecCommand } = require("playwright-core/lib/coreBundle").utils;
var { fitToWidth } = require("playwright-core/lib/coreBundle").utils;
var kOutputSymbol = Symbol("output");
var DEFAULT_TTY_WIDTH = 100;
var DEFAULT_TTY_HEIGHT = 40;
var originalProcessStdout = process.stdout;
var originalProcessStderr = process.stderr;
var terminalScreen = (() => {
  let isTTY = !!originalProcessStdout.isTTY;
  let ttyWidth = originalProcessStdout.columns || 0;
  let ttyHeight = originalProcessStdout.rows || 0;
  if (process.env.PLAYWRIGHT_FORCE_TTY === "false" || process.env.PLAYWRIGHT_FORCE_TTY === "0") {
    isTTY = false;
    ttyWidth = 0;
    ttyHeight = 0;
  } else if (process.env.PLAYWRIGHT_FORCE_TTY === "true" || process.env.PLAYWRIGHT_FORCE_TTY === "1") {
    isTTY = true;
    ttyWidth = originalProcessStdout.columns || DEFAULT_TTY_WIDTH;
    ttyHeight = originalProcessStdout.rows || DEFAULT_TTY_HEIGHT;
  } else if (process.env.PLAYWRIGHT_FORCE_TTY) {
    isTTY = true;
    const sizeMatch = process.env.PLAYWRIGHT_FORCE_TTY.match(/^(\d+)x(\d+)$/);
    if (sizeMatch) {
      ttyWidth = +sizeMatch[1];
      ttyHeight = +sizeMatch[2];
    } else {
      ttyWidth = +process.env.PLAYWRIGHT_FORCE_TTY;
      ttyHeight = DEFAULT_TTY_HEIGHT;
    }
    if (isNaN(ttyWidth))
      ttyWidth = DEFAULT_TTY_WIDTH;
    if (isNaN(ttyHeight))
      ttyHeight = DEFAULT_TTY_HEIGHT;
  }
  let useColors = isTTY;
  if (process.env.DEBUG_COLORS === "0" || process.env.DEBUG_COLORS === "false" || process.env.FORCE_COLOR === "0" || process.env.FORCE_COLOR === "false")
    useColors = false;
  else if (process.env.DEBUG_COLORS || process.env.FORCE_COLOR)
    useColors = true;
  const colors7 = useColors ? realColors : noColors;
  return {
    resolveFiles: "cwd",
    isTTY,
    ttyWidth,
    ttyHeight,
    colors: colors7,
    stdout: originalProcessStdout,
    stderr: originalProcessStderr
  };
})();
var nonTerminalScreen = {
  colors: terminalScreen.colors,
  isTTY: false,
  ttyWidth: 0,
  ttyHeight: 0,
  resolveFiles: "rootDir"
};
var internalScreen = {
  colors: realColors,
  isTTY: false,
  ttyWidth: 0,
  ttyHeight: 0,
  resolveFiles: "rootDir"
};
var TerminalReporter = class {
  constructor(options = {}) {
    this.totalTestCount = 0;
    this.fileDurations = /* @__PURE__ */ new Map();
    this._fatalErrors = [];
    this._failureCount = 0;
    this.screen = options.screen ?? terminalScreen;
    this._options = options;
  }
  version() {
    return "v2";
  }
  onConfigure(config2) {
    this.config = config2;
  }
  onBegin(suite) {
    this.suite = suite;
    this.totalTestCount = suite.allTests().length;
  }
  onStdOut(chunk, test, result) {
    this._appendOutput({ chunk, type: "stdout" }, result);
  }
  onStdErr(chunk, test, result) {
    this._appendOutput({ chunk, type: "stderr" }, result);
  }
  _appendOutput(output, result) {
    if (!result)
      return;
    result[kOutputSymbol] = result[kOutputSymbol] || [];
    result[kOutputSymbol].push(output);
  }
  onTestEnd(test, result) {
    if (result.status !== "skipped" && result.status !== test.expectedStatus)
      ++this._failureCount;
    const projectName = test.titlePath()[1];
    const relativePath = relativeTestPath(this.screen, this.config, test);
    const fileAndProject = (projectName ? `[${projectName}] \u203A ` : "") + relativePath;
    const entry = this.fileDurations.get(fileAndProject) || { duration: 0, workers: /* @__PURE__ */ new Set() };
    entry.duration += result.duration;
    entry.workers.add(result.workerIndex);
    this.fileDurations.set(fileAndProject, entry);
  }
  onError(error) {
    this._fatalErrors.push(error);
  }
  async onEnd(result) {
    this.result = result;
  }
  fitToScreen(line, prefix) {
    if (!this.screen.ttyWidth) {
      return line;
    }
    return fitToWidth(line, this.screen.ttyWidth, prefix);
  }
  generateStartingMessage() {
    const jobs = this.config.metadata.actualWorkers ?? this.config.workers;
    const shardDetails = this.config.shard ? `, shard ${this.config.shard.current} of ${this.config.shard.total}` : "";
    if (!this.totalTestCount)
      return "";
    return "\n" + this.screen.colors.dim("Running ") + this.totalTestCount + this.screen.colors.dim(` test${this.totalTestCount !== 1 ? "s" : ""} using `) + jobs + this.screen.colors.dim(` worker${jobs !== 1 ? "s" : ""}${shardDetails}`);
  }
  getSlowTests() {
    if (!this.config.reportSlowTests)
      return [];
    const fileDurations = [...this.fileDurations.entries()].filter(([key, value]) => value.workers.size === 1).map(([key, value]) => [key, value.duration]);
    fileDurations.sort((a, b) => b[1] - a[1]);
    const count = Math.min(fileDurations.length, this.config.reportSlowTests.max || Number.POSITIVE_INFINITY);
    const threshold = this.config.reportSlowTests.threshold;
    return fileDurations.filter(([, duration]) => duration > threshold).slice(0, count);
  }
  generateSummaryMessage({ didNotRun, skipped, expected, interrupted, unexpected, flaky, fatalErrors }) {
    const tokens = [];
    if (unexpected.length) {
      tokens.push(this.screen.colors.red(`  ${unexpected.length} failed`));
      for (const test of unexpected)
        tokens.push(this.screen.colors.red(this.formatTestHeader(test, { indent: "    " })));
    }
    if (interrupted.length) {
      tokens.push(this.screen.colors.yellow(`  ${interrupted.length} interrupted`));
      for (const test of interrupted)
        tokens.push(this.screen.colors.yellow(this.formatTestHeader(test, { indent: "    " })));
    }
    if (flaky.length) {
      tokens.push(this.screen.colors.yellow(`  ${flaky.length} flaky`));
      for (const test of flaky)
        tokens.push(this.screen.colors.yellow(this.formatTestHeader(test, { indent: "    " })));
    }
    if (skipped)
      tokens.push(this.screen.colors.yellow(`  ${skipped} skipped`));
    if (didNotRun)
      tokens.push(this.screen.colors.yellow(`  ${didNotRun} did not run`));
    if (expected)
      tokens.push(this.screen.colors.green(`  ${expected} passed`) + this.screen.colors.dim(` (${msToString(this.result.duration)})`));
    if (fatalErrors.length && expected + unexpected.length + interrupted.length + flaky.length > 0)
      tokens.push(this.screen.colors.red(`  ${fatalErrors.length === 1 ? "1 error was not a part of any test" : fatalErrors.length + " errors were not a part of any test"}, see above for details`));
    return tokens.join("\n");
  }
  generateSummary() {
    let didNotRun = 0;
    let skipped = 0;
    let expected = 0;
    const interrupted = [];
    const interruptedToPrint = [];
    const unexpected = [];
    const flaky = [];
    this.suite.allTests().forEach((test) => {
      switch (test.outcome()) {
        case "skipped": {
          if (test.results.some((result) => result.status === "interrupted")) {
            if (test.results.some((result) => !!result.error))
              interruptedToPrint.push(test);
            interrupted.push(test);
          } else if (!test.results.length || test.expectedStatus !== "skipped") {
            ++didNotRun;
          } else {
            ++skipped;
          }
          break;
        }
        case "expected":
          ++expected;
          break;
        case "unexpected":
          unexpected.push(test);
          break;
        case "flaky":
          flaky.push(test);
          break;
      }
    });
    const failuresToPrint = [...unexpected, ...flaky, ...interruptedToPrint];
    return {
      didNotRun,
      skipped,
      expected,
      interrupted,
      unexpected,
      flaky,
      failuresToPrint,
      fatalErrors: this._fatalErrors
    };
  }
  epilogue(full) {
    const summary = this.generateSummary();
    const summaryMessage = this.generateSummaryMessage(summary);
    if (full && summary.failuresToPrint.length && !this._options.omitFailures)
      this._printFailures(summary.failuresToPrint);
    this._printSlowTests();
    this._printSummary(summaryMessage);
  }
  _printFailures(failures) {
    this.writeLine("");
    failures.forEach((test, index) => {
      this.writeLine(this.formatFailure(test, index + 1));
    });
  }
  _printSlowTests() {
    const slowTests = this.getSlowTests();
    slowTests.forEach(([file, duration]) => {
      this.writeLine(this.screen.colors.yellow("  Slow test file: ") + file + this.screen.colors.yellow(` (${msToString(duration)})`));
    });
    if (slowTests.length)
      this.writeLine(this.screen.colors.yellow("  Consider running tests from slow files in parallel. See: https://playwright.dev/docs/test-parallel"));
  }
  _printSummary(summary) {
    if (summary.trim())
      this.writeLine(summary);
  }
  willRetry(test) {
    return test.outcome() === "unexpected" && test.results.length <= test.retries;
  }
  formatTestTitle(test, step) {
    return formatTestTitle(this.screen, this.config, test, step, this._options);
  }
  formatTestHeader(test, options = {}) {
    return formatTestHeader(this.screen, this.config, test, { ...options, includeTestId: this._options.includeTestId });
  }
  formatFailure(test, index) {
    return formatFailure(this.screen, this.config, test, index, this._options);
  }
  formatError(error) {
    return formatError(this.screen, error);
  }
  formatResultErrors(test, result) {
    return formatResultErrors(this.screen, test, result);
  }
  writeLine(line) {
    this.screen.stdout?.write(line ? line + "\n" : "\n");
  }
};
function formatResultErrors(screen, test, result) {
  const lines = [];
  if (test.outcome() === "unexpected") {
    const errorDetails = formatResultFailure(screen, test, result, "    ");
    if (errorDetails.length > 0)
      lines.push("");
    for (const error of errorDetails)
      lines.push(error.message, "");
  }
  return lines.join("\n");
}
function formatFailure(screen, config2, test, index, options) {
  const lines = [];
  let printedHeader = false;
  for (const result of test.results) {
    const resultLines = [];
    const errors = formatResultFailure(screen, test, result, "    ");
    if (!errors.length)
      continue;
    if (!printedHeader) {
      const header = formatTestHeader(screen, config2, test, { indent: "  ", index, mode: "error", includeTestId: options?.includeTestId });
      lines.push(screen.colors.red(header));
      printedHeader = true;
    }
    if (result.retry) {
      resultLines.push("");
      resultLines.push(screen.colors.gray(separator(screen, `    Retry #${result.retry}`)));
    }
    resultLines.push(...errors.map((error) => "\n" + error.message));
    const attachmentGroups = groupAttachments(result.attachments);
    for (let i = 0; i < attachmentGroups.length; ++i) {
      const attachment = attachmentGroups[i];
      if (attachment.name === "error-context" && attachment.path) {
        resultLines.push("");
        resultLines.push(screen.colors.dim(`    Error Context: ${relativeFilePath(screen, config2, attachment.path)}`));
        continue;
      }
      if (attachment.name.startsWith("_"))
        continue;
      const hasPrintableContent = attachment.contentType.startsWith("text/");
      if (!attachment.path && !hasPrintableContent)
        continue;
      resultLines.push("");
      resultLines.push(screen.colors.dim(separator(screen, `    attachment #${i + 1}: ${screen.colors.bold(attachment.name)} (${attachment.contentType})`)));
      if (attachment.actual?.path) {
        if (attachment.expected?.path) {
          const expectedPath = relativeFilePath(screen, config2, attachment.expected.path);
          resultLines.push(screen.colors.dim(`    Expected: ${expectedPath}`));
        }
        const actualPath = relativeFilePath(screen, config2, attachment.actual.path);
        resultLines.push(screen.colors.dim(`    Received: ${actualPath}`));
        if (attachment.previous?.path) {
          const previousPath = relativeFilePath(screen, config2, attachment.previous.path);
          resultLines.push(screen.colors.dim(`    Previous: ${previousPath}`));
        }
        if (attachment.diff?.path) {
          const diffPath = relativeFilePath(screen, config2, attachment.diff.path);
          resultLines.push(screen.colors.dim(`    Diff:     ${diffPath}`));
        }
      } else if (attachment.path) {
        const relativePath = relativeFilePath(screen, config2, attachment.path);
        resultLines.push(screen.colors.dim(`    ${relativePath}`));
        if (attachment.name === "trace") {
          const packageManagerCommand = getPackageManagerExecCommand();
          resultLines.push(screen.colors.dim(`    Usage:`));
          resultLines.push("");
          resultLines.push(screen.colors.dim(`        ${packageManagerCommand} playwright show-trace ${quotePathIfNeeded(relativePath)}`));
          resultLines.push("");
        }
      } else {
        if (attachment.contentType.startsWith("text/") && attachment.body) {
          let text = attachment.body.toString();
          if (text.length > 300)
            text = text.slice(0, 300) + "...";
          for (const line of text.split("\n"))
            resultLines.push(screen.colors.dim(`    ${line}`));
        }
      }
      resultLines.push(screen.colors.dim(separator(screen, "   ")));
    }
    lines.push(...resultLines);
  }
  lines.push("");
  return lines.join("\n");
}
function formatRetry(screen, result) {
  const retryLines = [];
  if (result.retry) {
    retryLines.push("");
    retryLines.push(screen.colors.gray(separator(screen, `    Retry #${result.retry}`)));
  }
  return retryLines;
}
function quotePathIfNeeded(path20) {
  if (/\s/.test(path20))
    return `"${path20}"`;
  return path20;
}
var kReportedSymbol = Symbol("reported");
function markErrorsAsReported(result) {
  result[kReportedSymbol] = result.errors.length;
}
function formatResultFailure(screen, test, result, initialIndent) {
  const errorDetails = [];
  if (result.status === "passed" && test.expectedStatus === "failed") {
    errorDetails.push({
      message: indent(screen.colors.red(`Expected to fail, but passed.`), initialIndent)
    });
  }
  if (result.status === "interrupted") {
    errorDetails.push({
      message: indent(screen.colors.red(`Test was interrupted.`), initialIndent)
    });
  }
  const reportedIndex = result[kReportedSymbol] || 0;
  for (const error of result.errors.slice(reportedIndex)) {
    const formattedError = formatError(screen, error);
    errorDetails.push({
      message: indent(formattedError.message, initialIndent),
      location: formattedError.location
    });
  }
  return errorDetails;
}
function relativeFilePath(screen, config2, file) {
  if (screen.resolveFiles === "cwd")
    return import_path2.default.relative(process.cwd(), file);
  return import_path2.default.relative(config2.rootDir, file);
}
function relativeTestPath(screen, config2, test) {
  return relativeFilePath(screen, config2, test.location.file);
}
function stepSuffix(step) {
  const stepTitles = step ? step.titlePath() : [];
  return stepTitles.map((t2) => t2.split("\n")[0]).map((t2) => " \u203A " + t2).join("");
}
function formatTestTitle(screen, config2, test, step, options = {}) {
  const [, projectName, , ...titles] = test.titlePath();
  const location = `${relativeTestPath(screen, config2, test)}:${test.location.line}:${test.location.column}`;
  const testId = options.includeTestId ? `[id=${test.id}] ` : "";
  const projectLabel = options.includeTestId ? `project=` : "";
  const projectTitle = projectName ? `[${projectLabel}${projectName}] \u203A ` : "";
  const testTitle = `${testId}${projectTitle}${location} \u203A ${titles.join(" \u203A ")}`;
  const extraTags = test.tags.filter((t2) => !testTitle.includes(t2) && !config2.tags.includes(t2));
  return `${testTitle}${stepSuffix(step)}${extraTags.length ? " " + extraTags.join(" ") : ""}`;
}
function formatTestHeader(screen, config2, test, options = {}) {
  const title = formatTestTitle(screen, config2, test, void 0, options);
  const header = `${options.indent || ""}${options.index ? options.index + ") " : ""}${title}`;
  let fullHeader = header;
  if (options.mode === "error") {
    const stepPaths = /* @__PURE__ */ new Set();
    for (const result of test.results.filter((r) => !!r.errors.length)) {
      const stepPath = [];
      const visit = (steps) => {
        const errors = steps.filter((s) => s.error);
        if (errors.length > 1)
          return;
        if (errors.length === 1 && errors[0].category === "test.step") {
          stepPath.push(errors[0].title);
          visit(errors[0].steps);
        }
      };
      visit(result.steps);
      stepPaths.add(["", ...stepPath].join(" \u203A "));
    }
    fullHeader = header + (stepPaths.size === 1 ? stepPaths.values().next().value : "");
  }
  return separator(screen, fullHeader);
}
function formatError(screen, error) {
  const message = error.message || error.value || "";
  const stack = error.stack;
  if (!stack && !error.location)
    return { message };
  const tokens = [];
  const parsedStack = stack ? prepareErrorStack(stack) : void 0;
  tokens.push(parsedStack?.message || message);
  if (error.snippet) {
    let snippet = error.snippet;
    if (!screen.colors.enabled)
      snippet = (0, import_util.stripAnsiEscapes)(snippet);
    tokens.push("");
    tokens.push(snippet);
  }
  if (parsedStack && parsedStack.stackLines.length)
    tokens.push(screen.colors.dim(parsedStack.stackLines.join("\n")));
  let location = error.location;
  if (parsedStack && !location)
    location = parsedStack.location;
  if (error.cause)
    tokens.push(screen.colors.dim("[cause]: ") + formatError(screen, error.cause).message);
  return {
    location,
    message: tokens.join("\n")
  };
}
function separator(screen, text = "") {
  if (text)
    text += " ";
  const columns = Math.min(100, screen.ttyWidth || 100);
  return text + screen.colors.dim("\u2500".repeat(Math.max(0, columns - (0, import_util.stripAnsiEscapes)(text).length)));
}
function indent(lines, tab) {
  return lines.replace(/^(?=.+$)/gm, tab);
}
function prepareErrorStack(stack) {
  return parseErrorStack(stack, import_path2.default.sep, !!process.env.PWDEBUGIMPL);
}
function resolveFromEnv(name) {
  const value = process.env[name];
  if (value)
    return import_path2.default.resolve(process.cwd(), value);
  return void 0;
}
function resolveOutputFile(reporterName, options) {
  const name = reporterName.toUpperCase();
  let outputFile = resolveFromEnv(`PLAYWRIGHT_${name}_OUTPUT_FILE`);
  if (!outputFile && options.outputFile)
    outputFile = import_path2.default.resolve(options.configDir, options.outputFile);
  if (outputFile)
    return { outputFile };
  let outputDir = resolveFromEnv(`PLAYWRIGHT_${name}_OUTPUT_DIR`);
  if (!outputDir && options.outputDir)
    outputDir = import_path2.default.resolve(options.configDir, options.outputDir);
  if (!outputDir && options.default)
    outputDir = (0, import_util.resolveReporterOutputPath)(options.default.outputDir, options.configDir, void 0);
  if (!outputDir)
    outputDir = options.configDir;
  const reportName = process.env[`PLAYWRIGHT_${name}_OUTPUT_NAME`] ?? options.fileName ?? options.default?.fileName;
  if (!reportName)
    return void 0;
  outputFile = import_path2.default.resolve(outputDir, reportName);
  return { outputFile, outputDir };
}
function groupAttachments(attachments) {
  const result = [];
  const attachmentsByPrefix = /* @__PURE__ */ new Map();
  for (const attachment of attachments) {
    if (!attachment.path) {
      result.push(attachment);
      continue;
    }
    const match = attachment.name.match(/^(.*)-(expected|actual|diff|previous)(\.[^.]+)?$/);
    if (!match) {
      result.push(attachment);
      continue;
    }
    const [, name, category] = match;
    let group = attachmentsByPrefix.get(name);
    if (!group) {
      group = { ...attachment, name };
      attachmentsByPrefix.set(name, group);
      result.push(group);
    }
    if (category === "expected")
      group.expected = attachment;
    else if (category === "actual")
      group.actual = attachment;
    else if (category === "diff")
      group.diff = attachment;
    else if (category === "previous")
      group.previous = attachment;
  }
  return result;
}

// packages/playwright/src/reporters/internalReporter.ts
var import_fs = __toESM(require("fs"));

// packages/playwright/src/reporters/multiplexer.ts
var Multiplexer = class {
  constructor(reporters) {
    this._reporters = reporters;
  }
  version() {
    return "v2";
  }
  onConfigure(config2) {
    for (const reporter of this._reporters)
      wrap(() => reporter.onConfigure?.(config2));
  }
  onBegin(suite) {
    for (const reporter of this._reporters)
      wrap(() => reporter.onBegin?.(suite));
  }
  onTestBegin(test, result) {
    for (const reporter of this._reporters)
      wrap(() => reporter.onTestBegin?.(test, result));
  }
  onStdOut(chunk, test, result) {
    for (const reporter of this._reporters)
      wrap(() => reporter.onStdOut?.(chunk, test, result));
  }
  onStdErr(chunk, test, result) {
    for (const reporter of this._reporters)
      wrap(() => reporter.onStdErr?.(chunk, test, result));
  }
  async onTestPaused(test, result) {
    for (const reporter of this._reporters)
      await wrapAsync(() => reporter.onTestPaused?.(test, result));
  }
  onTestEnd(test, result) {
    for (const reporter of this._reporters)
      wrap(() => reporter.onTestEnd?.(test, result));
  }
  onReportConfigure(params) {
    for (const reporter of this._reporters)
      wrap(() => reporter.onReportConfigure?.(params));
  }
  onReportEnd(params) {
    for (const reporter of this._reporters)
      wrap(() => reporter.onReportEnd?.(params));
  }
  async onEnd(result) {
    for (const reporter of this._reporters) {
      const outResult = await wrapAsync(() => reporter.onEnd?.(result));
      if (outResult?.status)
        result.status = outResult.status;
    }
    return result;
  }
  async onExit() {
    for (const reporter of this._reporters)
      await wrapAsync(() => reporter.onExit?.());
  }
  onError(error, workerInfo) {
    for (const reporter of this._reporters)
      wrap(() => reporter.onError?.(error, workerInfo));
  }
  onStepBegin(test, result, step) {
    for (const reporter of this._reporters)
      wrap(() => reporter.onStepBegin?.(test, result, step));
  }
  onStepEnd(test, result, step) {
    for (const reporter of this._reporters)
      wrap(() => reporter.onStepEnd?.(test, result, step));
  }
  printsToStdio() {
    return this._reporters.some((r) => {
      let prints = false;
      wrap(() => prints = r.printsToStdio ? r.printsToStdio() : true);
      return prints;
    });
  }
};
async function wrapAsync(callback) {
  try {
    return await callback();
  } catch (e) {
    console.error("Error in reporter", e);
  }
}
function wrap(callback) {
  try {
    callback();
  } catch (e) {
    console.error("Error in reporter", e);
  }
}

// packages/playwright/src/reporters/internalReporter.ts
var import_common = require("../common");
var babel = __toESM(require("../transform/babelBundle"));

// packages/playwright/src/reporters/reporterV2.ts
function wrapReporterAsV2(reporter) {
  try {
    if ("version" in reporter && reporter.version() === "v2")
      return reporter;
  } catch (e) {
  }
  return new ReporterV2Wrapper(reporter);
}
var ReporterV2Wrapper = class {
  constructor(reporter) {
    this._deferred = [];
    this._reporter = reporter;
  }
  version() {
    return "v2";
  }
  onConfigure(config2) {
    this._config = config2;
  }
  onBegin(suite) {
    this._reporter.onBegin?.(this._config, suite);
    const deferred = this._deferred;
    this._deferred = null;
    for (const item of deferred) {
      if (item.error)
        this.onError(item.error.error, item.error.workerInfo);
      if (item.stdout)
        this.onStdOut(item.stdout.chunk, item.stdout.test, item.stdout.result);
      if (item.stderr)
        this.onStdErr(item.stderr.chunk, item.stderr.test, item.stderr.result);
    }
  }
  onTestBegin(test, result) {
    this._reporter.onTestBegin?.(test, result);
  }
  onStdOut(chunk, test, result) {
    if (this._deferred) {
      this._deferred.push({ stdout: { chunk, test, result } });
      return;
    }
    this._reporter.onStdOut?.(chunk, test, result);
  }
  onStdErr(chunk, test, result) {
    if (this._deferred) {
      this._deferred.push({ stderr: { chunk, test, result } });
      return;
    }
    this._reporter.onStdErr?.(chunk, test, result);
  }
  onTestEnd(test, result) {
    this._reporter.onTestEnd?.(test, result);
  }
  async onEnd(result) {
    return await this._reporter.onEnd?.(result);
  }
  async onExit() {
    await this._reporter.onExit?.();
  }
  onError(error, workerInfo) {
    if (this._deferred) {
      this._deferred.push({ error: { error, workerInfo } });
      return;
    }
    this._reporter.onError?.(error, workerInfo);
  }
  onStepBegin(test, result, step) {
    this._reporter.onStepBegin?.(test, result, step);
  }
  onStepEnd(test, result, step) {
    this._reporter.onStepEnd?.(test, result, step);
  }
  printsToStdio() {
    return this._reporter.printsToStdio ? this._reporter.printsToStdio() : true;
  }
};

// packages/playwright/src/reporters/internalReporter.ts
var { monotonicTime: monotonicTime3 } = require("playwright-core/lib/coreBundle").iso;
var InternalReporter = class {
  constructor(reporters) {
    this._didBegin = false;
    this._reporter = new Multiplexer(reporters.map(wrapReporterAsV2));
  }
  version() {
    return "v2";
  }
  onConfigure(config2) {
    this._config = config2;
    this._startTime = /* @__PURE__ */ new Date();
    this._monotonicStartTime = monotonicTime3();
    this._reporter.onConfigure?.(config2);
  }
  onBegin(suite) {
    this._didBegin = true;
    this._reporter.onBegin?.(suite);
  }
  onTestBegin(test, result) {
    this._reporter.onTestBegin?.(test, result);
  }
  onStdOut(chunk, test, result) {
    this._reporter.onStdOut?.(chunk, test, result);
  }
  onStdErr(chunk, test, result) {
    this._reporter.onStdErr?.(chunk, test, result);
  }
  async onTestPaused(test, result) {
    this._addSnippetToTestErrors(test, result);
    return await this._reporter.onTestPaused?.(test, result);
  }
  onTestEnd(test, result) {
    this._addSnippetToTestErrors(test, result);
    this._reporter.onTestEnd?.(test, result);
  }
  async onEnd(result) {
    if (!this._didBegin) {
      this.onBegin(new import_common.test.Suite("", "root"));
    }
    return await this._reporter.onEnd?.({
      ...result,
      startTime: this._startTime,
      duration: monotonicTime3() - this._monotonicStartTime
    });
  }
  async onExit() {
    await this._reporter.onExit?.();
  }
  onError(error, workerInfo) {
    addLocationAndSnippetToError(this._config, error);
    this._reporter.onError?.(error, workerInfo);
  }
  onStepBegin(test, result, step) {
    this._reporter.onStepBegin?.(test, result, step);
  }
  onStepEnd(test, result, step) {
    this._addSnippetToStepError(test, step);
    this._reporter.onStepEnd?.(test, result, step);
  }
  printsToStdio() {
    return this._reporter.printsToStdio ? this._reporter.printsToStdio() : true;
  }
  _addSnippetToTestErrors(test, result) {
    for (const error of result.errors)
      addLocationAndSnippetToError(this._config, error, test.location.file);
  }
  _addSnippetToStepError(test, step) {
    if (step.error)
      addLocationAndSnippetToError(this._config, step.error, test.location.file);
  }
};
function addLocationAndSnippetToError(config2, error, file) {
  if (error.stack && !error.location)
    error.location = prepareErrorStack(error.stack).location;
  const location = error.location;
  if (!location)
    return;
  if (!!error.snippet)
    return;
  try {
    const tokens = [];
    const source = import_fs.default.readFileSync(location.file, "utf8");
    const codeFrame = babel.codeFrameColumns(source, { start: location }, { highlightCode: true });
    if (!file || import_fs.default.realpathSync(file) !== location.file) {
      tokens.push(internalScreen.colors.gray(`   at `) + `${relativeFilePath(internalScreen, config2, location.file)}:${location.line}`);
      tokens.push("");
    }
    tokens.push(codeFrame);
    error.snippet = tokens.join("\n");
  } catch (e) {
  }
}

// packages/playwright/src/runner/testRunner.ts
var import_util13 = require("../util");

// packages/playwright/src/runner/reporters.ts
var reporters_exports = {};
__export(reporters_exports, {
  createErrorCollectingReporter: () => createErrorCollectingReporter,
  createReporters: () => createReporters
});
var import_fs8 = __toESM(require("fs"));

// packages/playwright/src/runner/loadUtils.ts
var import_path4 = __toESM(require("path"));
var import_fs3 = __toESM(require("fs"));

// packages/playwright/src/runner/processHost.ts
var import_child_process = __toESM(require("child_process"));
var import_events = require("events");
var debug3 = require("playwright-core/lib/utilsBundle").debug;
var { assert } = require("playwright-core/lib/coreBundle").iso;
var { monotonicTime: monotonicTime4, timeOrigin } = require("playwright-core/lib/coreBundle").iso;
var { raceAgainstDeadline: raceAgainstDeadline2 } = require("playwright-core/lib/coreBundle").iso;
var ProcessHost = class extends import_events.EventEmitter {
  constructor(entryScript, processName, env) {
    super();
    this._didSendStop = false;
    this._processDidExit = false;
    this._didExitAndRanOnExit = false;
    this._lastMessageId = 0;
    this._callbacks = /* @__PURE__ */ new Map();
    this._producedEnv = {};
    this._requestHandlers = /* @__PURE__ */ new Map();
    this._entryScript = entryScript;
    this._processName = processName;
    this._extraEnv = env;
  }
  async startRunner(runnerParams, options = {}) {
    assert(!this.process, "Internal error: starting the same process twice");
    this.process = import_child_process.default.fork(this._entryScript, {
      // Note: we pass detached:false, so that workers are in the same process group.
      // This way Ctrl+C or a kill command can shutdown all workers in case they misbehave.
      // Otherwise user can end up with a bunch of workers stuck in a busy loop without self-destructing.
      detached: false,
      env: {
        ...process.env,
        ...this._extraEnv
      },
      stdio: [
        "ignore",
        options.onStdOut ? "pipe" : "inherit",
        options.onStdErr && !process.env.PW_RUNNER_DEBUG ? "pipe" : "inherit",
        "ipc"
      ]
    });
    this.process.on("exit", async (code, signal) => {
      this._processDidExit = true;
      await this.onExit();
      this._didExitAndRanOnExit = true;
      this.emit("exit", { unexpectedly: !this._didSendStop, code, signal });
    });
    this.process.on("error", (e) => {
    });
    this.process.on("message", (message) => {
      if (debug3.enabled("pw:test:protocol"))
        debug3("pw:test:protocol")("\u25C0 RECV " + JSON.stringify(message));
      if (message.method === "__env_produced__") {
        const producedEnv = message.params;
        this._producedEnv = Object.fromEntries(producedEnv.map((e) => [e[0], e[1] ?? void 0]));
      } else if (message.method === "__dispatch__") {
        const { id, error: error2, method, params, result } = message.params;
        if (id && this._callbacks.has(id)) {
          const { resolve, reject } = this._callbacks.get(id);
          this._callbacks.delete(id);
          if (error2) {
            const errorObject = new Error(error2.message);
            errorObject.stack = error2.stack;
            reject(errorObject);
          } else {
            resolve(result);
          }
        } else {
          this.emit(method, params);
        }
      } else if (message.method === "__request__") {
        const { id, method, params } = message.params;
        const handler = this._requestHandlers.get(method);
        if (!handler) {
          this.send({ method: "__response__", params: { id, error: { message: "Unknown method" } } });
        } else {
          handler(params).then((result) => {
            this.send({ method: "__response__", params: { id, result } });
          }).catch((error2) => {
            this.send({ method: "__response__", params: { id, error: { message: error2.message } } });
          });
        }
      } else {
        this.emit(message.method, message.params);
      }
    });
    if (options.onStdOut)
      this.process.stdout?.on("data", options.onStdOut);
    if (options.onStdErr)
      this.process.stderr?.on("data", options.onStdErr);
    const error = await new Promise((resolve) => {
      this.process.once("exit", (code, signal) => resolve({ unexpectedly: true, code, signal }));
      this.once("ready", () => resolve(void 0));
    });
    if (error)
      return error;
    const processParams = {
      processName: this._processName,
      timeOrigin: timeOrigin()
    };
    this.send({
      method: "__init__",
      params: {
        processParams,
        runnerParams
      }
    });
  }
  sendMessage(message) {
    const id = ++this._lastMessageId;
    this.send({
      method: "__dispatch__",
      params: { id, ...message }
    });
    return new Promise((resolve, reject) => {
      this._callbacks.set(id, { resolve, reject });
    });
  }
  sendMessageNoReply(message) {
    this.sendMessage(message).catch(() => {
    });
  }
  async onExit() {
  }
  onRequest(method, handler) {
    this._requestHandlers.set(method, handler);
  }
  async stop() {
    if (!this._processDidExit && !this._didSendStop) {
      this.send({ method: "__stop__" });
      this._didSendStop = true;
    }
    if (this._didExitAndRanOnExit)
      return;
    const exitPromise = new Promise((f) => this.once("exit", () => f()));
    const timeout = +(process.env.PWTEST_CHILD_PROCESS_TIMEOUT || 5 * 60 * 1e3);
    const result = await raceAgainstDeadline2(() => exitPromise, monotonicTime4() + timeout);
    if (result.timedOut) {
      this.emit("processError", { message: `Error: ${this._processName} process did not exit within ${timeout}ms after stop, force-killed it` });
      this._forceKill();
      await exitPromise;
    }
  }
  _forceKill() {
    const pid = this.process?.pid;
    if (!pid)
      return;
    try {
      if (process.platform === "win32")
        import_child_process.default.spawnSync(`taskkill /pid ${pid} /T /F`, { shell: true });
      else
        process.kill(pid, "SIGKILL");
    } catch {
    }
  }
  didSendStop() {
    return this._didSendStop;
  }
  producedEnv() {
    return this._producedEnv;
  }
  send(message) {
    if (debug3.enabled("pw:test:protocol"))
      debug3("pw:test:protocol")("SEND \u25BA " + JSON.stringify(message));
    this.process?.send(message);
  }
};

// packages/playwright/src/runner/loaderHost.ts
var import_common2 = require("../common");
var InProcessLoaderHost = class {
  constructor(config2) {
    this._config = config2;
    this._poolBuilder = import_common2.poolBuilder.PoolBuilder.createForLoader();
  }
  async start(errors) {
    return true;
  }
  async loadTestFile(file, testErrors) {
    const result = await import_common2.testLoader.loadTestFile(file, this._config, testErrors);
    this._poolBuilder.buildPools(result, testErrors);
    return result;
  }
  async stop() {
    await import_common2.esm.incorporateCompilationCache();
  }
};
var OutOfProcessLoaderHost = class {
  constructor(config2) {
    this._config = config2;
    this._processHost = new ProcessHost(require.resolve("../loader/loaderProcessEntry.js"), "loader", {});
  }
  async start(errors) {
    const startError = await this._processHost.startRunner(import_common2.ipc.serializeConfig(this._config, false));
    if (startError) {
      errors.push({
        message: `Test loader process failed to start with code "${startError.code}" and signal "${startError.signal}"`
      });
      return false;
    }
    return true;
  }
  async loadTestFile(file, testErrors) {
    const result = await this._processHost.sendMessage({ method: "loadTestFile", params: { file } });
    testErrors.push(...result.testErrors);
    return import_common2.test.Suite._deepParse(result.fileSuite);
  }
  async stop() {
    const result = await this._processHost.sendMessage({ method: "getCompilationCacheFromLoader" });
    import_common2.cc.addToCompilationCache(result);
    await this._processHost.stop();
  }
};

// packages/playwright/src/runner/loadUtils.ts
var import_util4 = require("../util");

// packages/playwright/src/runner/projectUtils.ts
var projectUtils_exports = {};
__export(projectUtils_exports, {
  buildDependentProjects: () => buildDependentProjects,
  buildProjectsClosure: () => buildProjectsClosure,
  buildTeardownToSetupsMap: () => buildTeardownToSetupsMap,
  collectFilesForProject: () => collectFilesForProject,
  filterProjects: () => filterProjects,
  findTopLevelProjects: () => findTopLevelProjects
});
var import_fs2 = __toESM(require("fs"));
var import_path3 = __toESM(require("path"));
var import_util2 = require("util");
var import_util3 = require("../util");
var minimatch = require("playwright-core/lib/utilsBundle").minimatch;
var { escapeRegExp } = require("playwright-core/lib/coreBundle").iso;
var readFileAsync = (0, import_util2.promisify)(import_fs2.default.readFile);
var readDirAsync = (0, import_util2.promisify)(import_fs2.default.readdir);
function wildcardPatternToRegExp(pattern) {
  return new RegExp("^" + pattern.split("*").map(escapeRegExp).join(".*") + "$", "ig");
}
function filterProjects(projects, projectNames) {
  if (!projectNames)
    return [...projects];
  const projectNamesToFind = /* @__PURE__ */ new Set();
  const unmatchedProjectNames = /* @__PURE__ */ new Map();
  const patterns = /* @__PURE__ */ new Set();
  for (const name of projectNames) {
    const lowerCaseName = name.toLocaleLowerCase();
    if (lowerCaseName.includes("*")) {
      patterns.add(wildcardPatternToRegExp(lowerCaseName));
    } else {
      projectNamesToFind.add(lowerCaseName);
      unmatchedProjectNames.set(lowerCaseName, name);
    }
  }
  const result = projects.filter((project) => {
    const lowerCaseName = project.project.name.toLocaleLowerCase();
    if (projectNamesToFind.has(lowerCaseName)) {
      unmatchedProjectNames.delete(lowerCaseName);
      return true;
    }
    for (const regex of patterns) {
      regex.lastIndex = 0;
      if (regex.test(lowerCaseName))
        return true;
    }
    return false;
  });
  if (unmatchedProjectNames.size) {
    const unknownProjectNames = Array.from(unmatchedProjectNames.values()).map((n) => `"${n}"`).join(", ");
    throw new Error(`Project(s) ${unknownProjectNames} not found. Available projects: ${projects.map((p) => `"${p.project.name}"`).join(", ")}`);
  }
  if (!result.length) {
    const allProjects = projects.map((p) => `"${p.project.name}"`).join(", ");
    throw new Error(`No projects matched. Available projects: ${allProjects}`);
  }
  return result;
}
function buildTeardownToSetupsMap(projects) {
  const result = /* @__PURE__ */ new Map();
  for (const project of projects) {
    if (project.teardown) {
      const setups = result.get(project.teardown) || [];
      setups.push(project);
      result.set(project.teardown, setups);
    }
  }
  return result;
}
function buildProjectsClosure(projects, hasTests) {
  const result = /* @__PURE__ */ new Map();
  const visit = (depth, project) => {
    if (depth > 100) {
      const error = new Error("Circular dependency detected between projects.");
      error.stack = "";
      throw error;
    }
    if (depth === 0 && hasTests && !hasTests(project))
      return;
    if (result.get(project) !== "dependency")
      result.set(project, depth ? "dependency" : "top-level");
    for (const dep of project.deps)
      visit(depth + 1, dep);
    if (project.teardown)
      visit(depth + 1, project.teardown);
  };
  for (const p of projects)
    visit(0, p);
  return result;
}
function findTopLevelProjects(config2) {
  const closure = buildProjectsClosure(config2.projects);
  return [...closure].filter((entry) => entry[1] === "top-level").map((entry) => entry[0]);
}
function buildDependentProjects(forProjects, projects) {
  const reverseDeps = new Map(projects.map((p) => [p, []]));
  for (const project of projects) {
    for (const dep of project.deps)
      reverseDeps.get(dep).push(project);
  }
  const result = /* @__PURE__ */ new Set();
  const visit = (depth, project) => {
    if (depth > 100) {
      const error = new Error("Circular dependency detected between projects.");
      error.stack = "";
      throw error;
    }
    result.add(project);
    for (const reverseDep of reverseDeps.get(project))
      visit(depth + 1, reverseDep);
    if (project.teardown)
      visit(depth + 1, project.teardown);
  };
  for (const forProject of forProjects)
    visit(0, forProject);
  return result;
}
async function collectFilesForProject(project, fsCache = /* @__PURE__ */ new Map()) {
  const extensions = /* @__PURE__ */ new Set([".js", ".ts", ".mjs", ".mts", ".cjs", ".cts", ".jsx", ".tsx", ".mjsx", ".mtsx", ".cjsx", ".ctsx"]);
  const testFileExtension = (file) => extensions.has(import_path3.default.extname(file));
  const allFiles = await cachedCollectFiles(project.project.testDir, project.respectGitIgnore, fsCache);
  const testMatch = (0, import_util3.createFileMatcher)(project.project.testMatch);
  const testIgnore = (0, import_util3.createFileMatcher)(project.project.testIgnore);
  const testFiles = allFiles.filter((file) => {
    if (!testFileExtension(file))
      return false;
    const isTest = !testIgnore(file) && testMatch(file);
    if (!isTest)
      return false;
    return true;
  });
  return testFiles;
}
async function cachedCollectFiles(testDir, respectGitIgnore, fsCache) {
  const key = testDir + ":" + respectGitIgnore;
  let result = fsCache.get(key);
  if (!result) {
    result = await collectFiles(testDir, respectGitIgnore);
    fsCache.set(key, result);
  }
  return result;
}
async function collectFiles(testDir, respectGitIgnore) {
  if (!import_fs2.default.existsSync(testDir))
    return [];
  if (!import_fs2.default.statSync(testDir).isDirectory())
    return [];
  const checkIgnores = (entryPath, rules, isDirectory, parentStatus) => {
    let status = parentStatus;
    for (const rule of rules) {
      const ruleIncludes = rule.negate;
      if (status === "included" === ruleIncludes)
        continue;
      const relative = import_path3.default.relative(rule.dir, entryPath);
      if (rule.match("/" + relative) || rule.match(relative)) {
        status = ruleIncludes ? "included" : "ignored";
      } else if (isDirectory && (rule.match("/" + relative + "/") || rule.match(relative + "/"))) {
        status = ruleIncludes ? "included" : "ignored";
      } else if (isDirectory && ruleIncludes && (rule.match("/" + relative, true) || rule.match(relative, true))) {
        status = "ignored-but-recurse";
      }
    }
    return status;
  };
  const files = [];
  const visit = async (dir, rules, status) => {
    const entries = await readDirAsync(dir, { withFileTypes: true });
    entries.sort((a, b) => a.name.localeCompare(b.name));
    if (respectGitIgnore) {
      const gitignore = entries.find((e) => e.isFile() && e.name === ".gitignore");
      if (gitignore) {
        const content = await readFileAsync(import_path3.default.join(dir, gitignore.name), "utf8");
        const newRules = content.split(/\r?\n/).map((s) => {
          s = s.trim();
          if (!s)
            return;
          const rule = new minimatch.Minimatch(s, { matchBase: true, dot: true, flipNegate: true });
          if (rule.comment)
            return;
          rule.dir = dir;
          return rule;
        }).filter((rule) => !!rule);
        rules = [...rules, ...newRules];
      }
    }
    for (const entry of entries) {
      if (entry.name === "." || entry.name === "..")
        continue;
      if (entry.isFile() && entry.name === ".gitignore")
        continue;
      if (entry.isDirectory() && entry.name === "node_modules")
        continue;
      const entryPath = import_path3.default.join(dir, entry.name);
      const entryStatus = checkIgnores(entryPath, rules, entry.isDirectory(), status);
      if (entry.isDirectory() && entryStatus !== "ignored")
        await visit(entryPath, rules, entryStatus);
      else if (entry.isFile() && entryStatus === "included")
        files.push(entryPath);
    }
  };
  await visit(testDir, [], "included");
  return files;
}

// packages/playwright/src/runner/testGroups.ts
function createTestGroups(projectSuite, expectedParallelism) {
  const groups = /* @__PURE__ */ new Map();
  const createGroup = (test) => {
    return {
      workerHash: test._workerHash,
      requireFile: test._requireFile,
      repeatEachIndex: test.repeatEachIndex,
      projectId: test._projectId,
      tests: []
    };
  };
  for (const test of projectSuite.allTests()) {
    let withWorkerHash = groups.get(test._workerHash);
    if (!withWorkerHash) {
      withWorkerHash = /* @__PURE__ */ new Map();
      groups.set(test._workerHash, withWorkerHash);
    }
    let withRequireFile = withWorkerHash.get(test._requireFile);
    if (!withRequireFile) {
      withRequireFile = {
        general: createGroup(test),
        parallel: /* @__PURE__ */ new Map(),
        parallelWithHooks: createGroup(test)
      };
      withWorkerHash.set(test._requireFile, withRequireFile);
    }
    let insideParallel = false;
    let outerMostSequentialSuite;
    let hasAllHooks = false;
    for (let parent = test.parent; parent; parent = parent.parent) {
      if (parent._parallelMode === "serial" || parent._parallelMode === "default")
        outerMostSequentialSuite = parent;
      insideParallel = insideParallel || parent._parallelMode === "parallel";
      hasAllHooks = hasAllHooks || parent._hooks.some((hook) => hook.type === "beforeAll" || hook.type === "afterAll");
    }
    if (insideParallel) {
      if (hasAllHooks && !outerMostSequentialSuite) {
        withRequireFile.parallelWithHooks.tests.push(test);
      } else {
        const key = outerMostSequentialSuite || test;
        let group = withRequireFile.parallel.get(key);
        if (!group) {
          group = createGroup(test);
          withRequireFile.parallel.set(key, group);
        }
        group.tests.push(test);
      }
    } else {
      withRequireFile.general.tests.push(test);
    }
  }
  const result = [];
  for (const withWorkerHash of groups.values()) {
    for (const withRequireFile of withWorkerHash.values()) {
      if (withRequireFile.general.tests.length)
        result.push(withRequireFile.general);
      result.push(...withRequireFile.parallel.values());
      const parallelWithHooksGroupSize = Math.ceil(withRequireFile.parallelWithHooks.tests.length / expectedParallelism);
      let lastGroup;
      for (const test of withRequireFile.parallelWithHooks.tests) {
        if (!lastGroup || lastGroup.tests.length >= parallelWithHooksGroupSize) {
          lastGroup = createGroup(test);
          result.push(lastGroup);
        }
        lastGroup.tests.push(test);
      }
    }
  }
  return result;
}
function filterForShard(shard, weights, testGroups) {
  weights ??= Array.from({ length: shard.total }, () => 1);
  if (weights.length !== shard.total)
    throw new Error(`PWTEST_SHARD_WEIGHTS number of weights must match the shard total of ${shard.total}`);
  const totalWeight = weights.reduce((a, b) => a + b, 0);
  let shardableTotal = 0;
  for (const group of testGroups)
    shardableTotal += group.tests.length;
  const shardSizes = weights.map((w) => Math.floor(w * shardableTotal / totalWeight));
  const remainder = shardableTotal - shardSizes.reduce((a, b) => a + b, 0);
  for (let i = 0; i < remainder; i++) {
    shardSizes[i % shardSizes.length]++;
  }
  let from = 0;
  for (let i = 0; i < shard.current - 1; i++)
    from += shardSizes[i];
  const to = from + shardSizes[shard.current - 1];
  let current = 0;
  const result = /* @__PURE__ */ new Set();
  for (const group of testGroups) {
    if (current >= from && current < to)
      result.add(group);
    current += group.tests.length;
  }
  return result;
}

// packages/playwright/src/runner/loadUtils.ts
var import_common3 = require("../common");
var sourceMapSupport = require("playwright-core/lib/utilsBundle").sourceMapSupport;
var { toPosixPath } = require("playwright-core/lib/coreBundle").utils;
async function collectProjectsAndTestFiles(testRun, doNotRunTestsOutsideProjectFilter) {
  const fsCache = /* @__PURE__ */ new Map();
  const sourceMapCache = /* @__PURE__ */ new Map();
  const allFilesForProject = /* @__PURE__ */ new Map();
  for (const project of testRun.filteredProjects) {
    const files = await collectFilesForProject(project, fsCache);
    allFilesForProject.set(project, files);
  }
  const filesToRunByProject = /* @__PURE__ */ new Map();
  for (const [project, files] of allFilesForProject) {
    const matchedFiles = files.filter((file) => {
      if (!testRun.loadFileFilters.length) {
        return true;
      }
      const hasMatchingSources = sourceMapSources(file, sourceMapCache).some((source) => {
        const matchesAllFileFilters = testRun.loadFileFilters.every((filter) => filter(source));
        return matchesAllFileFilters;
      });
      return hasMatchingSources;
    });
    const filteredFiles = matchedFiles.filter(Boolean);
    filesToRunByProject.set(project, filteredFiles);
  }
  const projectClosure = buildProjectsClosure([...filesToRunByProject.keys()]);
  for (const [project, type] of projectClosure) {
    if (type === "dependency") {
      const treatProjectAsEmpty = doNotRunTestsOutsideProjectFilter && !testRun.filteredProjects.includes(project);
      const files = treatProjectAsEmpty ? [] : allFilesForProject.get(project) || await collectFilesForProject(project, fsCache);
      filesToRunByProject.set(project, files);
    }
  }
  testRun.projectFiles = filesToRunByProject;
  testRun.projectSuites = /* @__PURE__ */ new Map();
}
async function loadFileSuites(testRun, mode, errors) {
  const config2 = testRun.config;
  const allTestFiles = /* @__PURE__ */ new Set();
  for (const files of testRun.projectFiles.values())
    files.forEach((file) => allTestFiles.add(file));
  const fileSuiteByFile = /* @__PURE__ */ new Map();
  const loaderHost = mode === "out-of-process" ? new OutOfProcessLoaderHost(config2) : new InProcessLoaderHost(config2);
  if (await loaderHost.start(errors)) {
    for (const file of allTestFiles) {
      const fileSuite = await loaderHost.loadTestFile(file, errors);
      fileSuiteByFile.set(file, fileSuite);
      errors.push(...createDuplicateTitlesErrors(config2, fileSuite));
    }
    await loaderHost.stop();
  }
  for (const file of allTestFiles) {
    for (const dependency of import_common3.cc.dependenciesForTestFile(file)) {
      if (allTestFiles.has(dependency)) {
        const importer = import_path4.default.relative(config2.config.rootDir, file);
        const importee = import_path4.default.relative(config2.config.rootDir, dependency);
        errors.push({
          message: `Error: test file "${importer}" should not import test file "${importee}"`,
          location: { file, line: 1, column: 1 }
        });
      }
    }
  }
  for (const [project, files] of testRun.projectFiles) {
    const suites = files.map((file) => fileSuiteByFile.get(file)).filter(Boolean);
    testRun.projectSuites.set(project, suites);
  }
}
async function createRootSuite(testRun, errors, shouldFilterOnly) {
  const config2 = testRun.config;
  const rootSuite = new import_common3.test.Suite("", "root");
  const projectSuites = /* @__PURE__ */ new Map();
  const filteredProjectSuites = /* @__PURE__ */ new Map();
  {
    for (const [project, fileSuites] of testRun.projectSuites) {
      const projectSuite = createProjectSuite(project, fileSuites);
      projectSuites.set(project, projectSuite);
      const filteredProjectSuite = filterProjectSuite(projectSuite, testRun.preOnlyTestFilters);
      filteredProjectSuites.set(project, filteredProjectSuite);
    }
  }
  if (shouldFilterOnly) {
    const filteredRoot = new import_common3.test.Suite("", "root");
    for (const filteredProjectSuite of filteredProjectSuites.values())
      filteredRoot._addSuite(filteredProjectSuite);
    import_common3.suiteUtils.filterOnly(filteredRoot);
    for (const [project, filteredProjectSuite] of filteredProjectSuites) {
      if (!filteredRoot.suites.includes(filteredProjectSuite))
        filteredProjectSuites.delete(project);
    }
  }
  const projectClosure = buildProjectsClosure([...filteredProjectSuites.keys()], (project) => filteredProjectSuites.get(project)._hasTests());
  for (const [project, type] of projectClosure) {
    if (type === "top-level") {
      project.project.repeatEach = project.fullConfig.configCLIOverrides.repeatEach ?? project.project.repeatEach;
      rootSuite._addSuite(buildProjectSuite(project, filteredProjectSuites.get(project)));
    }
  }
  if (config2.config.forbidOnly) {
    const onlyTestsAndSuites = rootSuite._getOnlyItems();
    if (onlyTestsAndSuites.length > 0) {
      const configFilePath = config2.config.configFile ? import_path4.default.relative(config2.config.rootDir, config2.config.configFile) : void 0;
      errors.push(...createForbidOnlyErrors(onlyTestsAndSuites, config2.configCLIOverrides.forbidOnly, configFilePath));
    }
  }
  if (config2.config.shard) {
    const testGroups = [];
    for (const projectSuite of rootSuite.suites) {
      for (const group of createTestGroups(projectSuite, config2.config.shard.total))
        testGroups.push(group);
    }
    const testGroupsInThisShard = filterForShard(config2.config.shard, testRun.options.shardWeights, testGroups);
    const testsInThisShard = /* @__PURE__ */ new Set();
    for (const group of testGroupsInThisShard) {
      for (const test of group.tests)
        testsInThisShard.add(test);
    }
    import_common3.suiteUtils.filterTestsRemoveEmptySuites(rootSuite, (test) => testsInThisShard.has(test));
  }
  if (testRun.postShardTestFilters.length)
    import_common3.suiteUtils.filterTestsRemoveEmptySuites(rootSuite, (test) => testRun.postShardTestFilters.every((filter) => filter(test)));
  const topLevelProjects = [];
  {
    const projectClosure2 = new Map(buildProjectsClosure(rootSuite.suites.map((suite) => suite._fullProject)));
    for (const [project, level] of projectClosure2.entries()) {
      if (level === "dependency")
        rootSuite._prependSuite(buildProjectSuite(project, projectSuites.get(project)));
      else
        topLevelProjects.push(project);
    }
  }
  testRun.rootSuite = rootSuite;
  testRun.topLevelProjects = topLevelProjects;
}
function createProjectSuite(project, fileSuites) {
  const projectSuite = new import_common3.test.Suite(project.project.name, "project");
  for (const fileSuite of fileSuites)
    projectSuite._addSuite(import_common3.suiteUtils.bindFileSuiteToProject(project, fileSuite));
  const grepMatcher = (0, import_util4.createTitleMatcher)(project.project.grep);
  const grepInvertMatcher = project.project.grepInvert ? (0, import_util4.createTitleMatcher)(project.project.grepInvert) : null;
  import_common3.suiteUtils.filterTestsRemoveEmptySuites(projectSuite, (test) => {
    const grepTitle = test._grepTitleWithTags();
    if (grepInvertMatcher?.(grepTitle))
      return false;
    return grepMatcher(grepTitle);
  });
  return projectSuite;
}
function filterProjectSuite(projectSuite, testFilters) {
  if (!testFilters.length)
    return projectSuite;
  const result = projectSuite._deepClone();
  import_common3.suiteUtils.filterTestsRemoveEmptySuites(result, (test) => testFilters.every((filter) => filter(test)));
  return result;
}
function buildProjectSuite(project, projectSuite) {
  const result = new import_common3.test.Suite(project.project.name, "project");
  result._fullProject = project;
  if (project.fullyParallel)
    result._parallelMode = "parallel";
  for (const fileSuite of projectSuite.suites) {
    result._addSuite(fileSuite);
    for (let repeatEachIndex = 1; repeatEachIndex < project.project.repeatEach; repeatEachIndex++) {
      const clone = fileSuite._deepClone();
      import_common3.suiteUtils.applyRepeatEachIndex(project, clone, repeatEachIndex);
      result._addSuite(clone);
    }
  }
  return result;
}
function createForbidOnlyErrors(onlyTestsAndSuites, forbidOnlyCLIFlag, configFilePath) {
  const errors = [];
  for (const testOrSuite of onlyTestsAndSuites) {
    const title = testOrSuite.titlePath().slice(2).join(" ");
    const configFilePathName = configFilePath ? `'${configFilePath}'` : "the Playwright configuration file";
    const forbidOnlySource = forbidOnlyCLIFlag ? `'--forbid-only' CLI flag` : `'forbidOnly' option in ${configFilePathName}`;
    const error = {
      message: `Error: item focused with '.only' is not allowed due to the ${forbidOnlySource}: "${title}"`,
      location: testOrSuite.location
    };
    errors.push(error);
  }
  return errors;
}
function createDuplicateTitlesErrors(config2, fileSuite) {
  const errors = [];
  const testsByFullTitle = /* @__PURE__ */ new Map();
  for (const test of fileSuite.allTests()) {
    const fullTitle = test.titlePath().slice(1).join(" \u203A ");
    const existingTest = testsByFullTitle.get(fullTitle);
    if (existingTest) {
      const error = {
        message: `Error: duplicate test title "${fullTitle}", first declared in ${buildItemLocation(config2.config.rootDir, existingTest)}`,
        location: test.location
      };
      errors.push(error);
    }
    testsByFullTitle.set(fullTitle, test);
  }
  return errors;
}
function buildItemLocation(rootDir, testOrSuite) {
  if (!testOrSuite.location)
    return "";
  return `${import_path4.default.relative(rootDir, testOrSuite.location.file)}:${testOrSuite.location.line}`;
}
async function requireOrImportDefaultFunction(file, expectConstructor) {
  let func = await import_common3.transform.requireOrImport(file);
  if (func && typeof func === "object" && "default" in func)
    func = func["default"];
  if (typeof func !== "function")
    throw (0, import_util4.errorWithFile)(file, `file must export a single ${expectConstructor ? "class" : "function"}.`);
  return func;
}
function loadGlobalHook(config2, file) {
  return requireOrImportDefaultFunction(import_path4.default.resolve(config2.config.rootDir, file), false);
}
function loadReporter(config2, file) {
  return requireOrImportDefaultFunction(config2 ? import_path4.default.resolve(config2.config.rootDir, file) : file, true);
}
function sourceMapSources(file, cache) {
  let sources = [file];
  if (!file.endsWith(".js"))
    return sources;
  if (cache.has(file))
    return cache.get(file);
  try {
    const sourceMap = sourceMapSupport.retrieveSourceMap(file);
    const sourceMapData = typeof sourceMap?.map === "string" ? JSON.parse(sourceMap.map) : sourceMap?.map;
    if (sourceMapData?.sources)
      sources = sourceMapData.sources.map((source) => import_path4.default.resolve(import_path4.default.dirname(file), source));
  } finally {
    cache.set(file, sources);
    return sources;
  }
}
async function loadTestList(config2, filePath) {
  try {
    const content = await import_fs3.default.promises.readFile(filePath, "utf-8");
    const lines = content.split("\n").map((line) => line.trim()).filter((line) => line && !line.startsWith("#"));
    const descriptions = lines.map((line) => {
      const delimiter = line.includes("\u203A") ? "\u203A" : ">";
      const tokens = line.split(delimiter).map((token) => token.trim());
      let project;
      if (tokens[0].startsWith("[")) {
        if (!tokens[0].endsWith("]"))
          throw new Error(`Malformed test description: ${line}`);
        project = tokens[0].substring(1, tokens[0].length - 1);
        tokens.shift();
      }
      return { project, file: toPosixPath((0, import_util4.parseLocationArg)(tokens[0]).file), titlePath: tokens.slice(1) };
    });
    const testFilter = (test) => descriptions.some((d) => {
      const [projectName, , ...titles] = test.titlePath();
      if (d.project !== void 0 && d.project !== projectName)
        return false;
      const relativeFile = toPosixPath(import_path4.default.relative(config2.config.rootDir, test.location.file));
      if (relativeFile !== d.file)
        return false;
      return d.titlePath.length <= titles.length && d.titlePath.every((_, index) => titles[index] === d.titlePath[index]);
    });
    const fileFilter = (file) => {
      const relativeFile = toPosixPath(import_path4.default.relative(config2.config.rootDir, file));
      return descriptions.some((d) => d.file === relativeFile);
    };
    return { testFilter, fileFilter };
  } catch (e) {
    throw (0, import_util4.errorWithFile)(filePath, "Cannot read test list file: " + e.message);
  }
}

// packages/playwright/src/reporters/blob.ts
var import_fs4 = __toESM(require("fs"));
var import_path6 = __toESM(require("path"));
var import_stream = require("stream");
var import_coreBundle = require("playwright-core/lib/coreBundle");

// packages/playwright/src/reporters/teleEmitter.ts
var import_path5 = __toESM(require("path"));
var { createGuid } = require("playwright-core/lib/coreBundle").utils;
var TeleReporterEmitter = class {
  constructor(messageSink, options = {}) {
    this._resultKnownAttachmentCounts = /* @__PURE__ */ new Map();
    this._resultKnownErrorCounts = /* @__PURE__ */ new Map();
    // In case there is blob reporter and UI mode, make sure one doesn't override
    // the id assigned by the other.
    this._idSymbol = Symbol("id");
    this._messageSink = messageSink;
    this._emitterOptions = options;
  }
  version() {
    return "v2";
  }
  onConfigure(config2) {
    this._rootDir = config2.rootDir;
    this._messageSink({ method: "onConfigure", params: { config: this._serializeConfig(config2) } });
  }
  onBegin(suite) {
    const projects = suite.suites.map((projectSuite) => this._serializeProject(projectSuite));
    for (const project of projects)
      this._messageSink({ method: "onProject", params: { project } });
    this._messageSink({ method: "onBegin", params: void 0 });
  }
  onTestBegin(test, result) {
    result[this._idSymbol] = createGuid();
    this._messageSink({
      method: "onTestBegin",
      params: {
        testId: test.id,
        result: this._serializeResultStart(result)
      }
    });
  }
  async onTestPaused(test, result) {
    const resultId = result[this._idSymbol];
    this._resultKnownErrorCounts.set(resultId, result.errors.length);
    this._messageSink({
      method: "onTestPaused",
      params: {
        testId: test.id,
        resultId,
        errors: result.errors
      }
    });
    await new Promise(() => {
    });
  }
  onTestEnd(test, result) {
    const testEnd = {
      testId: test.id,
      expectedStatus: test.expectedStatus,
      timeout: test.timeout,
      annotations: []
    };
    this._sendNewAttachments(result, test.id);
    this._messageSink({
      method: "onTestEnd",
      params: {
        test: testEnd,
        result: this._serializeResultEnd(result)
      }
    });
    const resultId = result[this._idSymbol];
    this._resultKnownAttachmentCounts.delete(resultId);
    this._resultKnownErrorCounts.delete(resultId);
  }
  onStepBegin(test, result, step) {
    step[this._idSymbol] = createGuid();
    this._messageSink({
      method: "onStepBegin",
      params: {
        testId: test.id,
        resultId: result[this._idSymbol],
        step: this._serializeStepStart(step)
      }
    });
  }
  onStepEnd(test, result, step) {
    const resultId = result[this._idSymbol];
    this._sendNewAttachments(result, test.id);
    this._messageSink({
      method: "onStepEnd",
      params: {
        testId: test.id,
        resultId,
        step: this._serializeStepEnd(step, result)
      }
    });
  }
  onError(error, workerInfo) {
    this._messageSink({
      method: "onError",
      params: {
        error,
        workerInfo: workerInfo ? {
          workerIndex: workerInfo.workerIndex,
          parallelIndex: workerInfo.parallelIndex,
          projectName: workerInfo.project.name
        } : void 0
      }
    });
  }
  onStdOut(chunk, test, result) {
    this._onStdIO("stdout", chunk, test, result);
  }
  onStdErr(chunk, test, result) {
    this._onStdIO("stderr", chunk, test, result);
  }
  _onStdIO(type, chunk, test, result) {
    if (this._emitterOptions.omitOutput)
      return;
    const isBase64 = typeof chunk !== "string";
    const data = isBase64 ? chunk.toString("base64") : chunk;
    this._messageSink({
      method: "onStdIO",
      params: { testId: test?.id, resultId: result ? result[this._idSymbol] : void 0, type, data, isBase64 }
    });
  }
  async onEnd(result) {
    const resultPayload = {
      status: result.status,
      startTime: result.startTime.getTime(),
      duration: result.duration
    };
    this._messageSink({
      method: "onEnd",
      params: {
        result: resultPayload
      }
    });
  }
  printsToStdio() {
    return false;
  }
  _serializeConfig(config2) {
    return {
      configFile: this._relativePath(config2.configFile),
      globalTimeout: config2.globalTimeout,
      maxFailures: config2.maxFailures,
      metadata: config2.metadata,
      rootDir: config2.rootDir,
      shard: config2.shard,
      version: config2.version,
      workers: config2.workers,
      globalSetup: config2.globalSetup,
      globalTeardown: config2.globalTeardown,
      tags: config2.tags,
      webServer: config2.webServer
    };
  }
  _serializeProject(suite) {
    const project = suite.project();
    const report = {
      metadata: project.metadata,
      name: project.name,
      outputDir: this._relativePath(project.outputDir),
      repeatEach: project.repeatEach,
      retries: project.retries,
      testDir: this._relativePath(project.testDir),
      testIgnore: serializeRegexPatterns(project.testIgnore),
      testMatch: serializeRegexPatterns(project.testMatch),
      timeout: project.timeout,
      suites: suite.suites.map((fileSuite) => {
        return this._serializeSuite(fileSuite);
      }),
      grep: serializeRegexPatterns(project.grep),
      grepInvert: serializeRegexPatterns(project.grepInvert || []),
      dependencies: project.dependencies,
      snapshotDir: this._relativePath(project.snapshotDir),
      teardown: project.teardown,
      ignoreSnapshots: project.ignoreSnapshots ? true : void 0,
      use: this._serializeProjectUseOptions(project.use)
    };
    return report;
  }
  _serializeProjectUseOptions(use) {
    return {
      testIdAttribute: use.testIdAttribute
    };
  }
  _serializeSuite(suite) {
    const result = {
      title: suite.title,
      location: this._relativeLocation(suite.location),
      entries: suite.entries().map((e) => {
        if (e.type === "test")
          return this._serializeTest(e);
        return this._serializeSuite(e);
      })
    };
    return result;
  }
  _serializeTest(test) {
    return {
      testId: test.id,
      title: test.title,
      location: this._relativeLocation(test.location),
      retries: test.retries,
      tags: test.tags,
      repeatEachIndex: test.repeatEachIndex,
      annotations: this._relativeAnnotationLocations(test.annotations)
    };
  }
  _serializeResultStart(result) {
    return {
      id: result[this._idSymbol],
      retry: result.retry,
      workerIndex: result.workerIndex,
      parallelIndex: result.parallelIndex,
      startTime: +result.startTime
    };
  }
  _serializeResultEnd(result) {
    const id = result[this._idSymbol];
    return {
      id,
      duration: result.duration,
      status: result.status,
      errors: this._resultKnownErrorCounts.has(id) ? result.errors.slice(this._resultKnownAttachmentCounts.get(id)) : result.errors,
      annotations: result.annotations?.length ? this._relativeAnnotationLocations(result.annotations) : void 0
    };
  }
  _sendNewAttachments(result, testId) {
    const resultId = result[this._idSymbol];
    const knownAttachmentCount = this._resultKnownAttachmentCounts.get(resultId) ?? 0;
    if (result.attachments.length > knownAttachmentCount) {
      this._messageSink({
        method: "onAttach",
        params: {
          testId,
          resultId,
          attachments: this._serializeAttachments(result.attachments.slice(knownAttachmentCount))
        }
      });
    }
    this._resultKnownAttachmentCounts.set(resultId, result.attachments.length);
  }
  _serializeAttachments(attachments) {
    return attachments.map((a) => {
      const { body, ...rest } = a;
      return {
        ...rest,
        // There is no Buffer in the browser, so there is no point in sending the data there.
        base64: body && !this._emitterOptions.omitBuffers ? body.toString("base64") : void 0
      };
    });
  }
  _serializeStepStart(step) {
    return {
      id: step[this._idSymbol],
      parentStepId: step.parent?.[this._idSymbol],
      title: step.title,
      category: step.category,
      startTime: +step.startTime,
      location: this._relativeLocation(step.location)
    };
  }
  _serializeStepEnd(step, result) {
    return {
      id: step[this._idSymbol],
      duration: step.duration,
      error: step.error,
      attachments: step.attachments.length ? step.attachments.map((a) => result.attachments.indexOf(a)) : void 0,
      annotations: step.annotations.length ? this._relativeAnnotationLocations(step.annotations) : void 0
    };
  }
  _relativeAnnotationLocations(annotations) {
    return annotations.map((annotation) => ({
      ...annotation,
      location: annotation.location ? this._relativeLocation(annotation.location) : void 0
    }));
  }
  _relativeLocation(location) {
    if (!location)
      return location;
    return {
      ...location,
      file: this._relativePath(location.file)
    };
  }
  _relativePath(absolutePath) {
    if (!absolutePath)
      return absolutePath;
    return import_path5.default.relative(this._rootDir, absolutePath);
  }
};

// packages/playwright/src/reporters/blob.ts
var mime = require("playwright-core/lib/utilsBundle").mime;
var yazl = require("playwright-core/lib/utilsBundle").yazl;
var { ManualPromise: ManualPromise2 } = require("playwright-core/lib/coreBundle").iso;
var { calculateSha1, createGuid: createGuid2 } = require("playwright-core/lib/coreBundle").utils;
var { removeFolders, sanitizeForFilePath } = require("playwright-core/lib/coreBundle").utils;
var currentBlobReportVersion = 2;
var BlobReporter = class extends TeleReporterEmitter {
  constructor(options) {
    super((message) => this._messages.push(message));
    this._messages = [];
    this._attachments = [];
    this._options = options;
    if (this._options.fileName && !this._options.fileName.endsWith(".zip"))
      throw new Error(`Blob report file name must end with .zip extension: ${this._options.fileName}`);
    this._salt = createGuid2();
  }
  onConfigure(config2) {
    const metadata = {
      version: currentBlobReportVersion,
      userAgent: (0, import_coreBundle.getUserAgent)(),
      // TODO: remove after some time, recommend config.tag instead.
      name: process.env.PWTEST_BOT_NAME,
      shard: config2.shard ?? void 0,
      pathSeparator: import_path6.default.sep
    };
    this._messages.push({
      method: "onBlobReportMetadata",
      params: metadata
    });
    this._config = config2;
    super.onConfigure(config2);
  }
  async onTestPaused(test, result) {
  }
  async onEnd(result) {
    await super.onEnd(result);
    const zipFileName = await this._prepareOutputFile();
    const zipFile = new yazl.ZipFile();
    const zipFinishPromise = new ManualPromise2();
    const finishPromise = zipFinishPromise.catch((e) => {
      throw new Error(`Failed to write report ${zipFileName}: ` + e.message);
    });
    zipFile.on("error", (error) => zipFinishPromise.reject(error));
    zipFile.outputStream.pipe(import_fs4.default.createWriteStream(zipFileName)).on("close", () => {
      zipFinishPromise.resolve(void 0);
    }).on("error", (error) => zipFinishPromise.reject(error));
    for (const { originalPath, zipEntryPath } of this._attachments) {
      if (!import_fs4.default.statSync(originalPath, { throwIfNoEntry: false })?.isFile())
        continue;
      zipFile.addFile(originalPath, zipEntryPath);
    }
    const lines = this._messages.map((m) => JSON.stringify(m) + "\n");
    const content = import_stream.Readable.from(lines);
    zipFile.addReadStream(content, "report.jsonl");
    zipFile.end();
    await finishPromise;
  }
  async _prepareOutputFile() {
    const { outputFile, outputDir } = resolveOutputFile("BLOB", {
      ...this._options,
      default: {
        fileName: this._defaultReportName(this._config),
        outputDir: "blob-report"
      }
    });
    if (!process.env.PWTEST_BLOB_DO_NOT_REMOVE)
      await removeFolders([outputDir]);
    await import_fs4.default.promises.mkdir(import_path6.default.dirname(outputFile), { recursive: true });
    return outputFile;
  }
  _defaultReportName(config2) {
    let reportName = "report";
    if (this._options._commandHash)
      reportName += "-" + sanitizeForFilePath(this._options._commandHash);
    if (config2.shard) {
      const paddedNumber = `${config2.shard.current}`.padStart(`${config2.shard.total}`.length, "0");
      reportName = `${reportName}-${paddedNumber}`;
    }
    return `${reportName}.zip`;
  }
  _serializeAttachments(attachments) {
    return super._serializeAttachments(attachments).map((attachment) => {
      if (!attachment.path)
        return attachment;
      const sha1 = calculateSha1(attachment.path + this._salt);
      const extension = mime.getExtension(attachment.contentType) || "dat";
      const newPath = `resources/${sha1}.${extension}`;
      this._attachments.push({ originalPath: attachment.path, zipEntryPath: newPath });
      return {
        ...attachment,
        path: newPath
      };
    });
  }
};

// packages/playwright/src/reporters/dot.ts
var DotReporter = class extends TerminalReporter {
  constructor() {
    super(...arguments);
    this._counter = 0;
  }
  onBegin(suite) {
    super.onBegin(suite);
    this.writeLine(this.generateStartingMessage());
  }
  onStdOut(chunk, test, result) {
    super.onStdOut(chunk, test, result);
    if (!this.config.quiet)
      this.screen.stdout.write(chunk);
  }
  onStdErr(chunk, test, result) {
    super.onStdErr(chunk, test, result);
    if (!this.config.quiet)
      this.screen.stderr.write(chunk);
  }
  onTestEnd(test, result) {
    super.onTestEnd(test, result);
    if (this._counter === 80) {
      this.screen.stdout.write("\n");
      this._counter = 0;
    }
    ++this._counter;
    if (result.status === "skipped") {
      this.screen.stdout.write(this.screen.colors.yellow("\xB0"));
      return;
    }
    if (this.willRetry(test)) {
      this.screen.stdout.write(this.screen.colors.gray("\xD7"));
      return;
    }
    switch (test.outcome()) {
      case "expected":
        this.screen.stdout.write(this.screen.colors.green("\xB7"));
        break;
      case "unexpected":
        this.screen.stdout.write(this.screen.colors.red(result.status === "timedOut" ? "T" : "F"));
        break;
      case "flaky":
        this.screen.stdout.write(this.screen.colors.yellow("\xB1"));
        break;
    }
  }
  onError(error) {
    super.onError(error);
    this.writeLine("\n" + this.formatError(error).message);
    this._counter = 0;
  }
  async onTestPaused(test, result) {
    if (!process.stdin.isTTY && !process.env.PW_TEST_DEBUG_REPORTERS)
      return;
    this.screen.stdout.write("\n");
    if (test.outcome() === "unexpected") {
      this.writeLine(this.screen.colors.red(this.formatTestHeader(test, { indent: "  " })));
      this.writeLine(this.formatResultErrors(test, result));
      markErrorsAsReported(result);
      this.writeLine(this.screen.colors.yellow("    Paused on error. Press Ctrl+C to end.") + "\n");
    } else {
      this.writeLine(this.screen.colors.yellow(this.formatTestHeader(test, { indent: "  " })));
      this.writeLine(this.screen.colors.yellow("    Paused at test end. Press Ctrl+C to end.") + "\n");
    }
    this._counter = 0;
    await new Promise(() => {
    });
  }
  async onEnd(result) {
    await super.onEnd(result);
    this.screen.stdout.write("\n");
    this.epilogue(true);
  }
};
var dot_default = DotReporter;

// packages/playwright/src/reporters/empty.ts
var EmptyReporter = class {
  version() {
    return "v2";
  }
  printsToStdio() {
    return false;
  }
};
var empty_default = EmptyReporter;

// packages/playwright/src/reporters/github.ts
var import_path7 = __toESM(require("path"));
var import_util5 = require("../util");
var { noColors: noColors2 } = require("playwright-core/lib/coreBundle").iso;
var { msToString: msToString2 } = require("playwright-core/lib/coreBundle").iso;
var GitHubLogger = class {
  _log(message, type = "notice", options = {}) {
    message = message.replace(/\n/g, "%0A");
    const configs = Object.entries(options).map(([key, option]) => `${key}=${option}`).join(",");
    process.stdout.write((0, import_util5.stripAnsiEscapes)(`::${type} ${configs}::${message}
`));
  }
  debug(message, options) {
    this._log(message, "debug", options);
  }
  error(message, options) {
    this._log(message, "error", options);
  }
  notice(message, options) {
    this._log(message, "notice", options);
  }
  warning(message, options) {
    this._log(message, "warning", options);
  }
};
var GitHubReporter = class extends TerminalReporter {
  constructor(options = {}) {
    super(options);
    this.githubLogger = new GitHubLogger();
    this._failedTestCount = 0;
    this.screen = { ...this.screen, colors: noColors2 };
  }
  printsToStdio() {
    return false;
  }
  onTestEnd(test, result) {
    super.onTestEnd(test, result);
    if (this.willRetry(test))
      return;
    if (!this._shouldPrintFailureAnnotations(test))
      return;
    this._failedTestCount++;
    for (const r of test.results)
      this._printFailureAnnotation(test, r, this._failedTestCount);
  }
  _shouldPrintFailureAnnotations(test) {
    switch (test.outcome()) {
      case "unexpected":
      case "flaky":
        return true;
      case "skipped":
        return test.results.some((r) => r.status === "interrupted") && test.results.some((r) => !!r.error);
      default:
        return false;
    }
  }
  async onEnd(result) {
    await super.onEnd(result);
    this._printAnnotations();
  }
  onError(error) {
    const errorMessage = this.formatError(error).message;
    this.githubLogger.error(errorMessage);
  }
  _printAnnotations() {
    const summary = this.generateSummary();
    const summaryMessage = this.generateSummaryMessage(summary);
    this._printSlowTestAnnotations();
    this._printSummaryAnnotation(summaryMessage);
  }
  _printSlowTestAnnotations() {
    this.getSlowTests().forEach(([file, duration]) => {
      const filePath = workspaceRelativePath(import_path7.default.join(process.cwd(), file));
      this.githubLogger.warning(`${filePath} took ${msToString2(duration)}`, {
        title: "Slow Test",
        file: filePath
      });
    });
  }
  _printSummaryAnnotation(summary) {
    this.githubLogger.notice(summary, {
      title: "\u{1F3AD} Playwright Run Summary"
    });
  }
  _printFailureAnnotation(test, result, index) {
    const title = this.formatTestTitle(test);
    const header = this.formatTestHeader(test, { indent: "  ", index, mode: "error" });
    const errors = formatResultFailure(this.screen, test, result, "    ");
    for (const error of errors) {
      const options = {
        file: workspaceRelativePath(error.location?.file || test.location.file),
        title
      };
      if (error.location) {
        options.line = error.location.line;
        options.col = error.location.column;
      }
      const message = [header, ...formatRetry(this.screen, result), error.message].join("\n");
      this.githubLogger.error(message, options);
    }
  }
};
function workspaceRelativePath(filePath) {
  return import_path7.default.relative(process.env["GITHUB_WORKSPACE"] ?? "", filePath);
}
var github_default = GitHubReporter;

// packages/playwright/src/reporters/html.ts
var html_exports = {};
__export(html_exports, {
  default: () => html_default,
  showHTMLReport: () => showHTMLReport
});
var import_fs5 = __toESM(require("fs"));
var import_os = __toESM(require("os"));
var import_path8 = __toESM(require("path"));
var import_stream2 = require("stream");
var babel2 = __toESM(require("../transform/babelBundle"));
var import_util6 = require("../util");
var colors2 = require("playwright-core/lib/utilsBundle").colors;
var mime2 = require("playwright-core/lib/utilsBundle").mime;
var open = require("playwright-core/lib/utilsBundle").open;
var yazl2 = require("playwright-core/lib/utilsBundle").yazl;
var { MultiMap } = require("playwright-core/lib/coreBundle").iso;
var { calculateSha1: calculateSha12 } = require("playwright-core/lib/coreBundle").utils;
var { copyFileAndMakeWritable, removeFolders: removeFolders2, sanitizeForFilePath: sanitizeForFilePath2, toPosixPath: toPosixPath2 } = require("playwright-core/lib/coreBundle").utils;
var { getPackageManagerExecCommand: getPackageManagerExecCommand2, isCodingAgent } = require("playwright-core/lib/coreBundle").utils;
var { HttpServer, serveFolder } = require("playwright-core/lib/coreBundle").utils;
var { gracefullyProcessExitDoNotHang } = require("playwright-core/lib/coreBundle").utils;
var { extractZip } = require("playwright-core/lib/coreBundle").utils;
var htmlReportOptions = ["always", "never", "on-failure"];
var isHtmlReportOption = (type) => {
  return htmlReportOptions.includes(type);
};
var HtmlReporter = class {
  constructor(options) {
    this._topLevelErrors = [];
    this._reportConfigs = /* @__PURE__ */ new Map();
    this._machines = [];
    this._options = options;
  }
  version() {
    return "v2";
  }
  printsToStdio() {
    return false;
  }
  onConfigure(config2) {
    this.config = config2;
  }
  onBegin(suite) {
    const { outputFolder, open: open3, attachmentsBaseURL, host, port } = this._resolveOptions();
    this._outputFolder = outputFolder;
    this._open = open3;
    this._host = host;
    this._port = port;
    this._attachmentsBaseURL = attachmentsBaseURL;
    const reportedWarnings = /* @__PURE__ */ new Set();
    for (const project of this.config.projects) {
      if (this._isSubdirectory(outputFolder, project.outputDir) || this._isSubdirectory(project.outputDir, outputFolder)) {
        const key = outputFolder + "|" + project.outputDir;
        if (reportedWarnings.has(key))
          continue;
        reportedWarnings.add(key);
        writeLine(colors2.red(`Configuration Error: HTML reporter output folder clashes with the tests output folder:`));
        writeLine(`
    html reporter folder: ${colors2.bold(outputFolder)}
    test results folder: ${colors2.bold(project.outputDir)}`);
        writeLine("");
        writeLine(`HTML reporter will clear its output directory prior to being generated, which will lead to the artifact loss.
`);
      }
    }
    this.suite = suite;
  }
  _resolveOptions() {
    const outputFolder = reportFolderFromEnv() ?? (0, import_util6.resolveReporterOutputPath)("playwright-report", this._options.configDir, this._options.outputFolder);
    return {
      outputFolder,
      open: getHtmlReportOptionProcessEnv() || this._options.open || "on-failure",
      attachmentsBaseURL: process.env.PLAYWRIGHT_HTML_ATTACHMENTS_BASE_URL || this._options.attachmentsBaseURL || "data/",
      host: process.env.PLAYWRIGHT_HTML_HOST || this._options.host,
      port: process.env.PLAYWRIGHT_HTML_PORT ? +process.env.PLAYWRIGHT_HTML_PORT : this._options.port
    };
  }
  _isSubdirectory(parentDir, dir) {
    const relativePath = import_path8.default.relative(parentDir, dir);
    return !!relativePath && !relativePath.startsWith("..") && !import_path8.default.isAbsolute(relativePath);
  }
  onError(error) {
    this._topLevelErrors.push(error);
  }
  onReportConfigure(params) {
    this._reportConfigs.set(params.reportPath, params.config);
  }
  onReportEnd(params) {
    const config2 = this._reportConfigs.get(params.reportPath);
    if (config2)
      this._machines.push({ config: config2, result: params.result, reportPath: params.reportPath });
  }
  async onEnd(result) {
    const projectSuites = this.suite.suites;
    await removeFolders2([this._outputFolder]);
    const noSnippets = parseBooleanEnvVar("PLAYWRIGHT_HTML_NO_SNIPPETS") ?? this._options.noSnippets;
    const noCopyPrompt = parseBooleanEnvVar("PLAYWRIGHT_HTML_NO_COPY_PROMPT") ?? this._options.noCopyPrompt;
    const doNotInlineAssets = parseBooleanEnvVar("PLAYWRIGHT_HTML_DO_NOT_INLINE_ASSETS") ?? this._options.doNotInlineAssets ?? false;
    const builder = new HtmlBuilder(yazl2, this.config, this._outputFolder, this._attachmentsBaseURL, doNotInlineAssets, {
      title: process.env.PLAYWRIGHT_HTML_TITLE || this._options.title,
      noSnippets,
      noCopyPrompt
    });
    this._buildResult = await builder.build(this.config.metadata, projectSuites, result, this._topLevelErrors, this._machines);
  }
  async onExit() {
    if (process.env.CI || !this._buildResult)
      return;
    const { ok, singleTestId } = this._buildResult;
    const shouldOpen = !isCodingAgent() && !!process.stdin.isTTY && (this._open === "always" || !ok && this._open === "on-failure");
    if (shouldOpen) {
      await showHTMLReport(this._outputFolder, this._host, this._port, singleTestId);
    } else if (this._options._mode === "test" && !!process.stdin.isTTY) {
      const packageManagerCommand = getPackageManagerExecCommand2();
      const relativeReportPath = this._outputFolder === standaloneDefaultFolder() ? "" : " " + import_path8.default.relative(process.cwd(), this._outputFolder);
      const hostArg = this._host ? ` --host ${this._host}` : "";
      const portArg = this._port ? ` --port ${this._port}` : "";
      writeLine("");
      writeLine("To open last HTML report run:");
      writeLine(colors2.cyan(`
  ${packageManagerCommand} playwright show-report${relativeReportPath}${hostArg}${portArg}
`));
    }
  }
};
function reportFolderFromEnv() {
  const envValue = process.env.PLAYWRIGHT_HTML_OUTPUT_DIR || process.env.PLAYWRIGHT_HTML_REPORT;
  return envValue ? import_path8.default.resolve(envValue) : void 0;
}
function getHtmlReportOptionProcessEnv() {
  const htmlOpenEnv = process.env.PLAYWRIGHT_HTML_OPEN || process.env.PW_TEST_HTML_REPORT_OPEN;
  if (!htmlOpenEnv)
    return void 0;
  if (!isHtmlReportOption(htmlOpenEnv)) {
    writeLine(colors2.red(`Configuration Error: HTML reporter Invalid value for PLAYWRIGHT_HTML_OPEN: ${htmlOpenEnv}. Valid values are: ${htmlReportOptions.join(", ")}`));
    return void 0;
  }
  return htmlOpenEnv;
}
function parseBooleanEnvVar(name) {
  const value = process.env[name];
  if (value === "false" || value === "0")
    return false;
  if (value)
    return true;
  return void 0;
}
function standaloneDefaultFolder() {
  return reportFolderFromEnv() ?? (0, import_util6.resolveReporterOutputPath)("playwright-report", process.cwd(), void 0);
}
async function resolveReportFolder(reportPath) {
  const stat = await import_fs5.default.promises.stat(reportPath).catch(() => null);
  if (!stat)
    throw new Error(`No report found at "${reportPath}"`);
  if (stat.isDirectory())
    return reportPath;
  if (stat.isFile() && reportPath.toLowerCase().endsWith(".zip"))
    return await extractReportZip(reportPath);
  throw new Error(`No report found at "${reportPath}"`);
}
async function extractReportZip(zipPath) {
  const tempDir = await import_fs5.default.promises.mkdtemp(import_path8.default.join(import_os.default.tmpdir(), "playwright-show-report-"));
  const cleanup = () => {
    try {
      import_fs5.default.rmSync(tempDir, { recursive: true, force: true });
    } catch {
    }
  };
  process.on("exit", cleanup);
  try {
    await extractZip(zipPath, { dir: tempDir });
  } catch (e) {
    cleanup();
    throw new Error(`Failed to extract report from "${zipPath}": ${e.message}`);
  }
  const hasIndex = await import_fs5.default.promises.access(import_path8.default.join(tempDir, "index.html")).then(() => true, () => false);
  if (!hasIndex) {
    cleanup();
    throw new Error(`No "index.html" found at the top level of "${zipPath}"`);
  }
  return tempDir;
}
async function showHTMLReport(reportFolder, host = "localhost", port, testId) {
  const requestedPath = reportFolder ?? standaloneDefaultFolder();
  let folder;
  try {
    folder = await resolveReportFolder(requestedPath);
  } catch (e) {
    writeLine(colors2.red(e.message));
    gracefullyProcessExitDoNotHang(1);
    return;
  }
  const server = false ? await serveHtmlReportWithHMR(folder) : serveFolder(folder);
  await server.start({ port, host, preferredPort: port ? void 0 : 9323 });
  let url = server.urlPrefix("human-readable");
  writeLine("");
  writeLine(colors2.cyan(`  Serving HTML report at ${url}. Press Ctrl+C to quit.`));
  if (testId)
    url += `#?testId=${testId}`;
  url = url.replace("0.0.0.0", "localhost");
  if (!isCodingAgent())
    await open(url, { wait: true }).catch(() => {
    });
  await new Promise(() => {
  });
}
var HtmlBuilder = class {
  constructor(yazl3, config2, outputDir, attachmentsBaseURL, doNotInlineAssets, options) {
    this._stepsInFile = new MultiMap();
    this._hasTraces = false;
    this._dataZipFile = new yazl3.ZipFile();
    this._config = config2;
    this._reportFolder = outputDir;
    this._options = options;
    this._doNotInlineAssets = doNotInlineAssets;
    import_fs5.default.mkdirSync(this._reportFolder, { recursive: true });
    this._attachmentsBaseURL = attachmentsBaseURL;
  }
  async build(metadata, projectSuites, result, topLevelErrors, machines) {
    const data = /* @__PURE__ */ new Map();
    for (const projectSuite of projectSuites) {
      const projectName = projectSuite.project().name;
      for (const fileSuite of projectSuite.suites) {
        const fileName = this._relativeLocation(fileSuite.location).file;
        this._createEntryForSuite(data, projectName, fileSuite, fileName, true);
      }
    }
    if (!this._options.noSnippets)
      createSnippets(this._stepsInFile);
    let ok = true;
    for (const [fileId, { testFile, testFileSummary }] of data) {
      const stats = testFileSummary.stats;
      for (const test of testFileSummary.tests) {
        if (test.outcome === "expected")
          ++stats.expected;
        if (test.outcome === "skipped")
          ++stats.skipped;
        if (test.outcome === "unexpected")
          ++stats.unexpected;
        if (test.outcome === "flaky")
          ++stats.flaky;
        ++stats.total;
      }
      stats.ok = stats.unexpected + stats.flaky === 0;
      if (!stats.ok)
        ok = false;
      const testCaseSummaryComparator = (t1, t2) => {
        const w1 = (t1.outcome === "unexpected" ? 1e3 : 0) + (t1.outcome === "flaky" ? 1 : 0);
        const w2 = (t2.outcome === "unexpected" ? 1e3 : 0) + (t2.outcome === "flaky" ? 1 : 0);
        return w2 - w1;
      };
      testFileSummary.tests.sort(testCaseSummaryComparator);
      this._addDataFile(fileId + ".json", testFile);
    }
    const htmlReport = {
      metadata,
      startTime: result.startTime.getTime(),
      duration: result.duration,
      files: [...data.values()].map((e) => e.testFileSummary),
      projectNames: projectSuites.map((r) => r.project().name),
      stats: { ...[...data.values()].reduce((a, e) => addStats(a, e.testFileSummary.stats), emptyStats()) },
      errors: topLevelErrors.map((error) => formatError(internalScreen, error).message),
      options: this._options,
      machines: machines.map((machine) => ({
        duration: machine.result.duration,
        startTime: machine.result.startTime.getTime(),
        tag: machine.config.tags,
        shardIndex: machine.config.shard?.current
      }))
    };
    htmlReport.files.sort((f1, f2) => {
      const w1 = f1.stats.unexpected * 1e3 + f1.stats.flaky;
      const w2 = f2.stats.unexpected * 1e3 + f2.stats.flaky;
      return w2 - w1;
    });
    this._addDataFile("report.json", htmlReport);
    let singleTestId;
    if (htmlReport.stats.total === 1) {
      const testFile = data.values().next().value.testFile;
      singleTestId = testFile.tests[0].testId;
    }
    const reportIndexFile = await this._writeStaticAssets();
    if (this._hasTraces) {
      const traceViewerFolder = import_path8.default.join(require.resolve("playwright-core"), "..", "lib", "vite", "traceViewer");
      const traceViewerTargetFolder = import_path8.default.join(this._reportFolder, "trace");
      const traceViewerAssetsTargetFolder = import_path8.default.join(traceViewerTargetFolder, "assets");
      import_fs5.default.mkdirSync(traceViewerAssetsTargetFolder, { recursive: true });
      for (const file of import_fs5.default.readdirSync(traceViewerFolder)) {
        if (file.endsWith(".map") || file.includes("watch") || file.includes("assets"))
          continue;
        await copyFileAndMakeWritable(import_path8.default.join(traceViewerFolder, file), import_path8.default.join(traceViewerTargetFolder, file));
      }
      for (const file of import_fs5.default.readdirSync(import_path8.default.join(traceViewerFolder, "assets"))) {
        if (file.endsWith(".map") || file.includes("xtermModule"))
          continue;
        await copyFileAndMakeWritable(import_path8.default.join(traceViewerFolder, "assets", file), import_path8.default.join(traceViewerAssetsTargetFolder, file));
      }
    }
    await this._writeReportData(reportIndexFile);
    return { ok, singleTestId };
  }
  async _writeStaticAssets() {
    const appFolder = import_path8.default.join(require.resolve("playwright-core"), "..", "lib", "vite", "htmlReport");
    const reportIndexFile = import_path8.default.join(this._reportFolder, "index.html");
    if (this._doNotInlineAssets) {
      const html = await import_fs5.default.promises.readFile(import_path8.default.join(appFolder, "index.html"), "utf-8");
      await Promise.all([
        import_fs5.default.promises.writeFile(reportIndexFile, html),
        import_fs5.default.promises.copyFile(import_path8.default.join(appFolder, "report.js"), import_path8.default.join(this._reportFolder, "report.js")),
        import_fs5.default.promises.copyFile(import_path8.default.join(appFolder, "report.css"), import_path8.default.join(this._reportFolder, "report.css"))
      ]);
    } else {
      let html = await import_fs5.default.promises.readFile(import_path8.default.join(appFolder, "index.html"), "utf-8");
      const [js, css] = await Promise.all([
        import_fs5.default.promises.readFile(import_path8.default.join(appFolder, "report.js"), "utf-8"),
        import_fs5.default.promises.readFile(import_path8.default.join(appFolder, "report.css"), "utf-8")
      ]);
      html = html.replace(/<script type="module"[^>]*><\/script>/, () => `<script type="module">${js}</script>`);
      html = html.replace(/<link rel="stylesheet"[^>]*>/, () => `<style type='text/css'>${css}</style>`);
      await import_fs5.default.promises.writeFile(reportIndexFile, html);
    }
    return reportIndexFile;
  }
  async _writeReportData(filePath) {
    import_fs5.default.appendFileSync(filePath, '<template id="playwrightReportBase64">data:application/zip;base64,');
    await new Promise((f) => {
      this._dataZipFile.end(void 0, () => {
        this._dataZipFile.outputStream.pipe(new Base64Encoder()).pipe(import_fs5.default.createWriteStream(filePath, { flags: "a" })).on("close", f);
      });
    });
    import_fs5.default.appendFileSync(filePath, "</template>");
  }
  _addDataFile(fileName, data) {
    this._dataZipFile.addBuffer(Buffer.from(JSON.stringify(data)), fileName);
  }
  _createEntryForSuite(data, projectName, suite, fileName, deep) {
    const fileId = calculateSha12(fileName).slice(0, 20);
    let fileEntry = data.get(fileId);
    if (!fileEntry) {
      fileEntry = {
        testFile: { fileId, fileName, tests: [] },
        testFileSummary: { fileId, fileName, tests: [], stats: emptyStats() }
      };
      data.set(fileId, fileEntry);
    }
    const { testFile, testFileSummary } = fileEntry;
    const testEntries = [];
    this._processSuite(suite, projectName, [], deep, testEntries);
    for (const test of testEntries) {
      testFile.tests.push(test.testCase);
      testFileSummary.tests.push(test.testCaseSummary);
    }
  }
  _processSuite(suite, projectName, path20, deep, outTests) {
    const newPath = [...path20, suite.title];
    suite.entries().forEach((e) => {
      if (e.type === "test")
        outTests.push(this._createTestEntry(e, projectName, newPath));
      else if (deep)
        this._processSuite(e, projectName, newPath, deep, outTests);
    });
  }
  _createTestEntry(test, projectName, path20) {
    const duration = test.results.reduce((a, r) => a + r.duration, 0);
    const location = this._relativeLocation(test.location);
    path20 = path20.slice(1).filter((path21) => path21.length > 0);
    const results = test.results.map((r) => this._createTestResult(test, r));
    return {
      testCase: {
        testId: test.id,
        title: test.title,
        projectName,
        location,
        duration,
        annotations: this._serializeAnnotations(test.annotations),
        tags: [...new Set(test.tags)],
        outcome: test.outcome(),
        path: path20,
        results,
        repeatEachIndex: test.repeatEachIndex || void 0,
        // Do not include zero.
        ok: test.outcome() === "expected" || test.outcome() === "flaky"
      },
      testCaseSummary: {
        testId: test.id,
        title: test.title,
        projectName,
        location,
        duration,
        annotations: this._serializeAnnotations(test.annotations),
        tags: [...new Set(test.tags)],
        outcome: test.outcome(),
        path: path20,
        ok: test.outcome() === "expected" || test.outcome() === "flaky",
        repeatEachIndex: test.repeatEachIndex || void 0,
        // Do not include zero.
        results: results.map((result) => {
          return {
            attachments: result.attachments.map((a) => ({ name: a.name, contentType: a.contentType, path: a.path })),
            startTime: result.startTime,
            workerIndex: result.workerIndex
          };
        })
      }
    };
  }
  _serializeAttachments(attachments) {
    let lastAttachment;
    return attachments.map((a) => {
      if (a.name === "trace")
        this._hasTraces = true;
      if ((a.name === "stdout" || a.name === "stderr") && a.contentType === "text/plain") {
        if (lastAttachment && lastAttachment.name === a.name && lastAttachment.contentType === a.contentType) {
          lastAttachment.body += (0, import_util6.stripAnsiEscapes)(a.body);
          return null;
        }
        a.body = (0, import_util6.stripAnsiEscapes)(a.body);
        lastAttachment = a;
        return a;
      }
      if (a.path) {
        let fileName = a.path;
        try {
          const buffer = import_fs5.default.readFileSync(a.path);
          const sha1 = calculateSha12(buffer) + import_path8.default.extname(a.path);
          fileName = this._attachmentsBaseURL + sha1;
          import_fs5.default.mkdirSync(import_path8.default.join(this._reportFolder, "data"), { recursive: true });
          import_fs5.default.writeFileSync(import_path8.default.join(this._reportFolder, "data", sha1), buffer);
        } catch (e) {
        }
        return {
          name: a.name,
          contentType: a.contentType,
          path: fileName,
          body: a.body
        };
      }
      if (a.body instanceof Buffer) {
        if (isTextContentType(a.contentType)) {
          const charset = a.contentType.match(/charset=(.*)/)?.[1];
          try {
            const body = a.body.toString(charset || "utf-8");
            return {
              name: a.name,
              contentType: a.contentType,
              body
            };
          } catch (e) {
          }
        }
        import_fs5.default.mkdirSync(import_path8.default.join(this._reportFolder, "data"), { recursive: true });
        const extension = sanitizeForFilePath2(import_path8.default.extname(a.name).replace(/^\./, "")) || mime2.getExtension(a.contentType) || "dat";
        const sha1 = calculateSha12(a.body) + "." + extension;
        import_fs5.default.writeFileSync(import_path8.default.join(this._reportFolder, "data", sha1), a.body);
        return {
          name: a.name,
          contentType: a.contentType,
          path: this._attachmentsBaseURL + sha1
        };
      }
      return {
        name: a.name,
        contentType: a.contentType,
        body: a.body
      };
    }).filter(Boolean);
  }
  _serializeAnnotations(annotations) {
    return annotations.map((a) => ({
      type: a.type,
      description: a.description === void 0 ? void 0 : String(a.description),
      location: a.location ? {
        file: a.location.file,
        line: a.location.line,
        column: a.location.column
      } : void 0
    }));
  }
  _createTestResult(test, result) {
    return {
      duration: result.duration,
      startTime: result.startTime.toISOString(),
      retry: result.retry,
      steps: dedupeSteps(result.steps).map((s) => this._createTestStep(s, result)),
      errors: formatResultFailure(internalScreen, test, result, "").map((error) => {
        return {
          message: error.message,
          codeframe: error.location ? createErrorCodeframe(error.message, error.location) : void 0
        };
      }),
      status: result.status,
      annotations: this._serializeAnnotations(result.annotations),
      attachments: this._serializeAttachments([
        ...result.attachments,
        ...result.stdout.map((m) => stdioAttachment(m, "stdout")),
        ...result.stderr.map((m) => stdioAttachment(m, "stderr"))
      ]),
      workerIndex: result.workerIndex
    };
  }
  _createTestStep(dedupedStep, result) {
    const { step, duration, count } = dedupedStep;
    const skipped = dedupedStep.step.annotations?.find((a) => a.type === "skip");
    let title = step.title;
    if (skipped)
      title = `${title} (skipped${skipped.description ? ": " + skipped.description : ""})`;
    const testStep = {
      title,
      startTime: step.startTime.toISOString(),
      duration,
      steps: dedupeSteps(step.steps).map((s) => this._createTestStep(s, result)),
      attachments: step.attachments.map((s) => {
        const index = result.attachments.indexOf(s);
        if (index === -1)
          throw new Error("Unexpected, attachment not found");
        return index;
      }),
      location: this._relativeLocation(step.location),
      error: step.error?.message,
      count,
      skipped: !!skipped
    };
    if (step.location)
      this._stepsInFile.set(step.location.file, testStep);
    return testStep;
  }
  _relativeLocation(location) {
    if (!location)
      return void 0;
    const file = toPosixPath2(import_path8.default.relative(this._config.rootDir, location.file));
    return {
      file,
      line: location.line,
      column: location.column
    };
  }
};
var emptyStats = () => {
  return {
    total: 0,
    expected: 0,
    unexpected: 0,
    flaky: 0,
    skipped: 0,
    ok: true
  };
};
var addStats = (stats, delta) => {
  stats.total += delta.total;
  stats.skipped += delta.skipped;
  stats.expected += delta.expected;
  stats.unexpected += delta.unexpected;
  stats.flaky += delta.flaky;
  stats.ok = stats.ok && delta.ok;
  return stats;
};
var Base64Encoder = class extends import_stream2.Transform {
  _transform(chunk, encoding, callback) {
    if (this._remainder) {
      chunk = Buffer.concat([this._remainder, chunk]);
      this._remainder = void 0;
    }
    const remaining = chunk.length % 3;
    if (remaining) {
      this._remainder = chunk.slice(chunk.length - remaining);
      chunk = chunk.slice(0, chunk.length - remaining);
    }
    chunk = chunk.toString("base64");
    this.push(Buffer.from(chunk));
    callback();
  }
  _flush(callback) {
    if (this._remainder)
      this.push(Buffer.from(this._remainder.toString("base64")));
    callback();
  }
};
function isTextContentType(contentType) {
  return contentType.startsWith("text/") || contentType.startsWith("application/json");
}
function stdioAttachment(chunk, type) {
  return {
    name: type,
    contentType: "text/plain",
    body: typeof chunk === "string" ? chunk : chunk.toString("utf-8")
  };
}
function dedupeSteps(steps) {
  const result = [];
  let lastResult = void 0;
  for (const step of steps) {
    const canDedupe = !step.error && step.duration >= 0 && step.location?.file && !step.steps.length;
    const lastStep = lastResult?.step;
    if (canDedupe && lastResult && lastStep && step.category === lastStep.category && step.title === lastStep.title && step.location?.file === lastStep.location?.file && step.location?.line === lastStep.location?.line && step.location?.column === lastStep.location?.column) {
      ++lastResult.count;
      lastResult.duration += step.duration;
      continue;
    }
    lastResult = { step, count: 1, duration: step.duration };
    result.push(lastResult);
    if (!canDedupe)
      lastResult = void 0;
  }
  return result;
}
function createSnippets(stepsInFile) {
  for (const file of stepsInFile.keys()) {
    let source;
    try {
      source = import_fs5.default.readFileSync(file, "utf-8") + "\n//";
    } catch (e) {
      continue;
    }
    const lines = source.split("\n").length;
    const highlighted = babel2.codeFrameColumns(source, { start: { line: lines, column: 1 } }, { highlightCode: true, linesAbove: lines, linesBelow: 0 });
    const highlightedLines = highlighted.split("\n");
    const lineWithArrow = highlightedLines[highlightedLines.length - 1];
    for (const step of stepsInFile.get(file)) {
      if (step.location.line < 2 || step.location.line >= lines)
        continue;
      const snippetLines = highlightedLines.slice(step.location.line - 2, step.location.line + 1);
      const index = lineWithArrow.indexOf("^");
      const shiftedArrow = lineWithArrow.slice(0, index) + " ".repeat(step.location.column - 1) + lineWithArrow.slice(index);
      snippetLines.splice(2, 0, shiftedArrow);
      step.snippet = snippetLines.join("\n");
    }
  }
}
function createErrorCodeframe(message, location) {
  let source;
  try {
    source = import_fs5.default.readFileSync(location.file, "utf-8") + "\n//";
  } catch (e) {
    return;
  }
  return babel2.codeFrameColumns(
    source,
    {
      start: {
        line: location.line,
        column: location.column
      }
    },
    {
      highlightCode: false,
      linesAbove: 100,
      linesBelow: 100,
      message: (0, import_util6.stripAnsiEscapes)(message).split("\n")[0] || void 0
    }
  );
}
function writeLine(line) {
  process.stdout.write(line + "\n");
}
var html_default = HtmlReporter;

// packages/playwright/src/reporters/json.ts
var import_fs6 = __toESM(require("fs"));
var import_path9 = __toESM(require("path"));
var import_common4 = require("../common");
var { MultiMap: MultiMap2 } = require("playwright-core/lib/coreBundle").iso;
var { toPosixPath: toPosixPath3 } = require("playwright-core/lib/coreBundle").utils;
var JSONReporter = class {
  constructor(options) {
    this._errors = [];
    this._resolvedOutputFile = resolveOutputFile("JSON", options)?.outputFile;
  }
  version() {
    return "v2";
  }
  printsToStdio() {
    return !this._resolvedOutputFile;
  }
  onConfigure(config2) {
    this.config = config2;
  }
  onBegin(suite) {
    this.suite = suite;
  }
  onError(error) {
    this._errors.push(error);
  }
  async onEnd(result) {
    await outputReport(this._serializeReport(result), this._resolvedOutputFile);
  }
  _serializeReport(result) {
    const report = {
      config: {
        ...removePrivateFields(this.config),
        rootDir: toPosixPath3(this.config.rootDir),
        projects: this.config.projects.map((project) => {
          return {
            outputDir: toPosixPath3(project.outputDir),
            repeatEach: project.repeatEach,
            retries: project.retries,
            metadata: project.metadata,
            id: import_common4.config.getProjectId(project),
            name: project.name,
            testDir: toPosixPath3(project.testDir),
            testIgnore: serializePatterns(project.testIgnore),
            testMatch: serializePatterns(project.testMatch),
            timeout: project.timeout
          };
        })
      },
      suites: this._mergeSuites(this.suite.suites),
      errors: this._errors,
      stats: {
        startTime: result.startTime.toISOString(),
        duration: result.duration,
        expected: 0,
        skipped: 0,
        unexpected: 0,
        flaky: 0
      }
    };
    for (const test of this.suite.allTests())
      ++report.stats[test.outcome()];
    return report;
  }
  _mergeSuites(suites) {
    const fileSuites = new MultiMap2();
    for (const projectSuite of suites) {
      const projectId = import_common4.config.getProjectId(projectSuite.project());
      const projectName = projectSuite.project().name;
      for (const fileSuite of projectSuite.suites) {
        const file = fileSuite.location.file;
        const serialized = this._serializeSuite(projectId, projectName, fileSuite);
        if (serialized)
          fileSuites.set(file, serialized);
      }
    }
    const results = [];
    for (const [, suites2] of fileSuites) {
      const result = {
        title: suites2[0].title,
        file: suites2[0].file,
        column: 0,
        line: 0,
        specs: []
      };
      for (const suite of suites2)
        this._mergeTestsFromSuite(result, suite);
      results.push(result);
    }
    return results;
  }
  _relativeLocation(location) {
    if (!location)
      return { file: "", line: 0, column: 0 };
    return {
      file: toPosixPath3(import_path9.default.relative(this.config.rootDir, location.file)),
      line: location.line,
      column: location.column
    };
  }
  _locationMatches(s1, s2) {
    return s1.file === s2.file && s1.line === s2.line && s1.column === s2.column;
  }
  _mergeTestsFromSuite(to, from) {
    for (const fromSuite of from.suites || []) {
      const toSuite = (to.suites || []).find((s) => s.title === fromSuite.title && this._locationMatches(s, fromSuite));
      if (toSuite) {
        this._mergeTestsFromSuite(toSuite, fromSuite);
      } else {
        if (!to.suites)
          to.suites = [];
        to.suites.push(fromSuite);
      }
    }
    for (const spec of from.specs || []) {
      const toSpec = to.specs.find((s) => s.title === spec.title && s.file === toPosixPath3(import_path9.default.relative(this.config.rootDir, spec.file)) && s.line === spec.line && s.column === spec.column);
      if (toSpec)
        toSpec.tests.push(...spec.tests);
      else
        to.specs.push(spec);
    }
  }
  _serializeSuite(projectId, projectName, suite) {
    if (!suite.allTests().length)
      return null;
    const suites = suite.suites.map((suite2) => this._serializeSuite(projectId, projectName, suite2)).filter((s) => s);
    return {
      title: suite.title,
      ...this._relativeLocation(suite.location),
      specs: suite.tests.map((test) => this._serializeTestSpec(projectId, projectName, test)),
      suites: suites.length ? suites : void 0
    };
  }
  _serializeTestSpec(projectId, projectName, test) {
    return {
      title: test.title,
      ok: test.ok(),
      tags: test.tags.map((tag) => tag.substring(1)),
      // Strip '@'.
      tests: [this._serializeTest(projectId, projectName, test)],
      id: test.id,
      ...this._relativeLocation(test.location)
    };
  }
  _serializeTest(projectId, projectName, test) {
    return {
      timeout: test.timeout,
      annotations: test.annotations,
      expectedStatus: test.expectedStatus,
      projectId,
      projectName,
      results: test.results.map((r) => this._serializeTestResult(r, test)),
      status: test.outcome()
    };
  }
  _serializeTestResult(result, test) {
    const steps = result.steps.filter((s) => s.category === "test.step");
    const jsonResult = {
      workerIndex: result.workerIndex,
      parallelIndex: result.parallelIndex,
      status: result.status,
      duration: result.duration,
      error: result.error,
      errors: result.errors.map((e) => this._serializeError(e)),
      stdout: result.stdout.map((s) => stdioEntry(s)),
      stderr: result.stderr.map((s) => stdioEntry(s)),
      retry: result.retry,
      steps: steps.length ? steps.map((s) => this._serializeTestStep(s)) : void 0,
      startTime: result.startTime.toISOString(),
      annotations: result.annotations,
      attachments: result.attachments.map((a) => ({
        name: a.name,
        contentType: a.contentType,
        path: a.path,
        body: a.body?.toString("base64")
      }))
    };
    if (result.error?.stack)
      jsonResult.errorLocation = prepareErrorStack(result.error.stack).location;
    return jsonResult;
  }
  _serializeError(error) {
    return formatError(nonTerminalScreen, error);
  }
  _serializeTestStep(step) {
    const steps = step.steps.filter((s) => s.category === "test.step");
    return {
      title: step.title,
      duration: step.duration,
      error: step.error,
      steps: steps.length ? steps.map((s) => this._serializeTestStep(s)) : void 0
    };
  }
};
async function outputReport(report, resolvedOutputFile) {
  const reportString = JSON.stringify(report, void 0, 2);
  if (resolvedOutputFile) {
    await import_fs6.default.promises.mkdir(import_path9.default.dirname(resolvedOutputFile), { recursive: true });
    await import_fs6.default.promises.writeFile(resolvedOutputFile, reportString);
  } else {
    console.log(reportString);
  }
}
function stdioEntry(s) {
  if (typeof s === "string")
    return { text: s };
  return { buffer: s.toString("base64") };
}
function removePrivateFields(config2) {
  return Object.fromEntries(Object.entries(config2).filter(([name, value]) => !name.startsWith("_")));
}
function serializePatterns(patterns) {
  if (!Array.isArray(patterns))
    patterns = [patterns];
  return patterns.map((s) => s.toString());
}
var json_default = JSONReporter;

// packages/playwright/src/reporters/junit.ts
var import_fs7 = __toESM(require("fs"));
var import_path10 = __toESM(require("path"));
var import_util7 = require("../util");
var { getAsBooleanFromENV } = require("playwright-core/lib/coreBundle").utils;
var JUnitReporter = class {
  constructor(options) {
    this.totalTests = 0;
    this.totalFailures = 0;
    this.totalErrors = 0;
    this.totalSkipped = 0;
    this.stripANSIControlSequences = false;
    this.includeProjectInTestName = false;
    this.includeRetries = false;
    this.stripANSIControlSequences = getAsBooleanFromENV("PLAYWRIGHT_JUNIT_STRIP_ANSI", !!options.stripANSIControlSequences);
    this.includeProjectInTestName = getAsBooleanFromENV("PLAYWRIGHT_JUNIT_INCLUDE_PROJECT_IN_TEST_NAME", !!options.includeProjectInTestName);
    this.includeRetries = getAsBooleanFromENV("PLAYWRIGHT_JUNIT_INCLUDE_RETRIES", !!options.includeRetries);
    this.configDir = options.configDir;
    this.resolvedOutputFile = resolveOutputFile("JUNIT", options)?.outputFile;
  }
  version() {
    return "v2";
  }
  printsToStdio() {
    return !this.resolvedOutputFile;
  }
  onConfigure(config2) {
    this.config = config2;
  }
  onBegin(suite) {
    this.suite = suite;
    this.timestamp = /* @__PURE__ */ new Date();
  }
  async onEnd(result) {
    const children = [];
    for (const projectSuite of this.suite.suites) {
      for (const fileSuite of projectSuite.suites)
        children.push(await this._buildTestSuite(projectSuite.title, fileSuite));
    }
    const tokens = [];
    const self = this;
    const root = {
      name: "testsuites",
      attributes: {
        id: process.env[`PLAYWRIGHT_JUNIT_SUITE_ID`] || "",
        name: process.env[`PLAYWRIGHT_JUNIT_SUITE_NAME`] || "",
        tests: self.totalTests,
        failures: self.totalFailures,
        skipped: self.totalSkipped,
        errors: self.totalErrors,
        time: result.duration / 1e3
      },
      children
    };
    serializeXML(root, tokens, this.stripANSIControlSequences);
    const reportString = tokens.join("\n");
    if (this.resolvedOutputFile) {
      await import_fs7.default.promises.mkdir(import_path10.default.dirname(this.resolvedOutputFile), { recursive: true });
      await import_fs7.default.promises.writeFile(this.resolvedOutputFile, reportString);
    } else {
      console.log(reportString);
    }
  }
  async _buildTestSuite(projectName, suite) {
    let tests = 0;
    let skipped = 0;
    let failures = 0;
    let errors = 0;
    let duration = 0;
    const children = [];
    const testCaseNamePrefix = projectName && this.includeProjectInTestName ? `[${projectName}] ` : "";
    for (const test of suite.allTests()) {
      ++tests;
      if (test.outcome() === "skipped")
        ++skipped;
      for (const result of test.results)
        duration += result.duration;
      const classification = await this._addTestCase(suite.title, testCaseNamePrefix, test, children);
      if (classification === "error")
        ++errors;
      else if (classification === "failure")
        ++failures;
    }
    this.totalTests += tests;
    this.totalSkipped += skipped;
    this.totalFailures += failures;
    this.totalErrors += errors;
    const entry = {
      name: "testsuite",
      attributes: {
        name: suite.title,
        timestamp: this.timestamp.toISOString(),
        hostname: projectName,
        tests,
        failures,
        skipped,
        time: duration / 1e3,
        errors
      },
      children
    };
    return entry;
  }
  async _addTestCase(suiteName, namePrefix, test, entries) {
    const entry = {
      name: "testcase",
      attributes: {
        // Skip root, project, file
        name: namePrefix + test.titlePath().slice(3).join(" \u203A "),
        // filename
        classname: suiteName
      },
      children: []
    };
    entries.push(entry);
    const properties = {
      name: "properties",
      children: []
    };
    for (const annotation of test.annotations) {
      const property = {
        name: "property",
        attributes: {
          name: annotation.type,
          value: annotation?.description ? annotation.description : ""
        }
      };
      properties.children?.push(property);
    }
    if (properties.children?.length)
      entry.children.push(properties);
    if (test.outcome() === "skipped") {
      entry.children.push({ name: "skipped" });
      return null;
    }
    if (this.includeRetries && test.ok()) {
      const passResult = test.results[test.results.length - 1];
      entry.attributes.time = passResult.duration / 1e3;
      await this._appendStdIO(entry, [passResult]);
      for (let i = 0; i < test.results.length - 1; i++) {
        const result = test.results[i];
        if (result.status === "passed" || result.status === "skipped")
          continue;
        entry.children.push(await this._buildRetryEntry(result, "flaky"));
      }
      return null;
    }
    if (this.includeRetries) {
      entry.attributes.time = test.results[0].duration / 1e3;
      await this._appendStdIO(entry, [test.results[0]]);
      for (let i = 1; i < test.results.length; i++) {
        const result = test.results[i];
        if (result.status === "passed" || result.status === "skipped")
          continue;
        entry.children.push(await this._buildRetryEntry(result, "rerun"));
      }
      return this._addFailureEntry(test, classifyResultError(test.results[0]), entry);
    }
    entry.attributes.time = test.results.reduce((acc, value) => acc + value.duration, 0) / 1e3;
    await this._appendStdIO(entry, test.results);
    if (test.ok())
      return null;
    return this._addFailureEntry(test, classifyTestError(test), entry);
  }
  _addFailureEntry(test, errorInfo, entry) {
    if (errorInfo) {
      entry.children.push({
        name: errorInfo.elementName,
        attributes: { message: errorInfo.message, type: errorInfo.type },
        text: (0, import_util7.stripAnsiEscapes)(formatFailure(nonTerminalScreen, this.config, test))
      });
      return errorInfo.elementName;
    }
    entry.children.push({
      name: "failure",
      attributes: {
        message: `${import_path10.default.basename(test.location.file)}:${test.location.line}:${test.location.column} ${test.title}`,
        type: "FAILURE"
      },
      text: (0, import_util7.stripAnsiEscapes)(formatFailure(nonTerminalScreen, this.config, test))
    });
    return "failure";
  }
  async _appendStdIO(entry, results) {
    const systemOut = [];
    const systemErr = [];
    for (const result of results) {
      for (const item of result.stdout)
        systemOut.push(item.toString());
      for (const item of result.stderr)
        systemErr.push(item.toString());
      for (const attachment of result.attachments) {
        if (!attachment.path)
          continue;
        let attachmentPath = import_path10.default.relative(this.configDir, attachment.path);
        try {
          if (this.resolvedOutputFile)
            attachmentPath = import_path10.default.relative(import_path10.default.dirname(this.resolvedOutputFile), attachment.path);
        } catch {
          systemOut.push(`
Warning: Unable to make attachment path ${attachment.path} relative to report output file ${this.resolvedOutputFile}`);
        }
        try {
          await import_fs7.default.promises.access(attachment.path);
          systemOut.push(`
[[ATTACHMENT|${attachmentPath}]]
`);
        } catch {
          systemErr.push(`
Warning: attachment ${attachmentPath} is missing`);
        }
      }
    }
    if (systemOut.length)
      entry.children.push({ name: "system-out", text: systemOut.join("") });
    if (systemErr.length)
      entry.children.push({ name: "system-err", text: systemErr.join("") });
  }
  async _buildRetryEntry(result, prefix) {
    const errorInfo = classifyResultError(result);
    const entry = {
      name: `${prefix}${errorInfo?.elementName === "error" ? "Error" : "Failure"}`,
      attributes: { message: errorInfo?.message || "", type: errorInfo?.type || "FAILURE", time: result.duration / 1e3 },
      children: []
    };
    const stackTrace = result.error?.stack || result.error?.message || result.error?.value || "";
    entry.children.push({ name: "stackTrace", text: (0, import_util7.stripAnsiEscapes)(stackTrace) });
    await this._appendStdIO(entry, [result]);
    return entry;
  }
};
function classifyResultError(result) {
  const error = result.error;
  if (!error)
    return null;
  const rawMessage = (0, import_util7.stripAnsiEscapes)(error.message || error.value || "");
  const nameMatch = rawMessage.match(/^(\w+): /);
  const errorName = nameMatch ? nameMatch[1] : "";
  const messageBody = nameMatch ? rawMessage.slice(nameMatch[0].length) : rawMessage;
  const firstLine = messageBody.split("\n")[0].trim();
  const matcherMatch = rawMessage.match(/expect\(.*?\)\.(not\.)?(\w+)/);
  if (matcherMatch) {
    const matcherName = `expect.${matcherMatch[1] || ""}${matcherMatch[2]}`;
    return {
      elementName: "failure",
      type: matcherName,
      message: firstLine
    };
  }
  return {
    elementName: "error",
    type: errorName || "Error",
    message: firstLine
  };
}
function classifyTestError(test) {
  for (const result of test.results) {
    const info = classifyResultError(result);
    if (info)
      return info;
  }
  return null;
}
function serializeXML(entry, tokens, stripANSIControlSequences) {
  const attrs = [];
  for (const [name, value] of Object.entries(entry.attributes || {}))
    attrs.push(`${name}="${escape(String(value), stripANSIControlSequences, false)}"`);
  tokens.push(`<${entry.name}${attrs.length ? " " : ""}${attrs.join(" ")}>`);
  for (const child of entry.children || [])
    serializeXML(child, tokens, stripANSIControlSequences);
  if (entry.text)
    tokens.push(escape(entry.text, stripANSIControlSequences, true));
  tokens.push(`</${entry.name}>`);
}
var discouragedXMLCharacters = /[\u0000-\u0008\u000b-\u000c\u000e-\u001f\u007f-\u0084\u0086-\u009f]/g;
function escape(text, stripANSIControlSequences, isCharacterData) {
  if (stripANSIControlSequences)
    text = (0, import_util7.stripAnsiEscapes)(text);
  if (isCharacterData) {
    text = "<![CDATA[" + text.replace(/]]>/g, "]]&gt;") + "]]>";
  } else {
    const escapeRe = /[&"'<>]/g;
    text = text.replace(escapeRe, (c) => ({ "&": "&amp;", '"': "&quot;", "'": "&apos;", "<": "&lt;", ">": "&gt;" })[c]);
  }
  text = text.replace(discouragedXMLCharacters, "");
  return text;
}
var junit_default = JUnitReporter;

// packages/playwright/src/reporters/line.ts
var LineReporter = class extends TerminalReporter {
  constructor() {
    super(...arguments);
    this._current = 0;
    this._failures = 0;
    this._didBegin = false;
  }
  onBegin(suite) {
    super.onBegin(suite);
    const startingMessage = this.generateStartingMessage();
    if (startingMessage) {
      this.writeLine(startingMessage);
      this.writeLine();
    }
    this._didBegin = true;
  }
  onStdOut(chunk, test, result) {
    super.onStdOut(chunk, test, result);
    this._dumpToStdio(test, chunk, this.screen.stdout);
  }
  onStdErr(chunk, test, result) {
    super.onStdErr(chunk, test, result);
    this._dumpToStdio(test, chunk, this.screen.stderr);
  }
  _dumpToStdio(test, chunk, stream) {
    if (this.config.quiet)
      return;
    if (!process.env.PW_TEST_DEBUG_REPORTERS)
      stream.write(`\x1B[1A\x1B[2K`);
    if (test && this._lastTest !== test) {
      const title = this.screen.colors.dim(this.formatTestTitle(test));
      stream.write(this.fitToScreen(title) + `
`);
      this._lastTest = test;
    }
    stream.write(chunk);
    if (chunk[chunk.length - 1] !== "\n")
      this.writeLine();
    this.writeLine();
  }
  onTestBegin(test, result) {
    ++this._current;
    this._updateLine(test, result, void 0);
  }
  onStepBegin(test, result, step) {
    if (this.screen.isTTY && step.category === "test.step")
      this._updateLine(test, result, step);
  }
  onStepEnd(test, result, step) {
    if (this.screen.isTTY && step.category === "test.step")
      this._updateLine(test, result, step.parent);
  }
  async onTestPaused(test, result) {
    if (!process.stdin.isTTY && !process.env.PW_TEST_DEBUG_REPORTERS)
      return;
    if (!process.env.PW_TEST_DEBUG_REPORTERS)
      this.screen.stdout.write(`\x1B[1A\x1B[2K`);
    if (test.outcome() === "unexpected") {
      this.writeLine(this.screen.colors.red(this.formatTestHeader(test, { indent: "  ", index: ++this._failures })));
      this.writeLine(this.formatResultErrors(test, result));
      markErrorsAsReported(result);
      this.writeLine(this.screen.colors.yellow(`    Paused on error. Press Ctrl+C to end.`) + "\n\n");
    } else {
      this.writeLine(this.screen.colors.yellow(this.formatTestHeader(test, { indent: "  " })));
      this.writeLine(this.screen.colors.yellow(`    Paused at test end. Press Ctrl+C to end.`) + "\n\n");
    }
    this._updateLine(test, result, void 0);
    await new Promise(() => {
    });
  }
  onTestEnd(test, result) {
    super.onTestEnd(test, result);
    if (!this.willRetry(test) && (test.outcome() === "flaky" || test.outcome() === "unexpected" || result.status === "interrupted")) {
      if (!process.env.PW_TEST_DEBUG_REPORTERS)
        this.screen.stdout.write(`\x1B[1A\x1B[2K`);
      this.writeLine(this.formatFailure(test, ++this._failures));
      this.writeLine();
    }
  }
  _updateLine(test, result, step) {
    const retriesPrefix = result.retry ? ` (retries)` : ``;
    const prefix = `[${this._current}/${this.totalTestCount}]${retriesPrefix} `;
    const currentRetrySuffix = result.retry ? this.screen.colors.yellow(` (retry #${result.retry})`) : "";
    const title = this.formatTestTitle(test, step) + currentRetrySuffix;
    if (process.env.PW_TEST_DEBUG_REPORTERS)
      this.screen.stdout.write(`${prefix + title}
`);
    else
      this.screen.stdout.write(`\x1B[1A\x1B[2K${prefix + this.fitToScreen(title, prefix)}
`);
  }
  onError(error) {
    super.onError(error);
    const message = this.formatError(error).message + "\n";
    if (!process.env.PW_TEST_DEBUG_REPORTERS && this._didBegin)
      this.screen.stdout.write(`\x1B[1A\x1B[2K`);
    this.screen.stdout.write(message);
    this.writeLine();
  }
  async onEnd(result) {
    if (!process.env.PW_TEST_DEBUG_REPORTERS && this._didBegin)
      this.screen.stdout.write(`\x1B[1A\x1B[2K`);
    await super.onEnd(result);
    this.epilogue(false);
  }
};
var line_default = LineReporter;

// packages/playwright/src/reporters/list.ts
var import_util8 = require("../util");
var { msToString: msToString3 } = require("playwright-core/lib/coreBundle").iso;
var { getAsBooleanFromENV: getAsBooleanFromENV2 } = require("playwright-core/lib/coreBundle").utils;
var DOES_NOT_SUPPORT_UTF8_IN_TERMINAL = process.platform === "win32" && process.env.TERM_PROGRAM !== "vscode" && !process.env.WT_SESSION;
var POSITIVE_STATUS_MARK = DOES_NOT_SUPPORT_UTF8_IN_TERMINAL ? "ok" : "\u2713";
var NEGATIVE_STATUS_MARK = DOES_NOT_SUPPORT_UTF8_IN_TERMINAL ? "x" : "\u2718";
var ListReporter = class extends TerminalReporter {
  constructor(options) {
    super(options);
    this._lastRow = 0;
    this._lastColumn = 0;
    this._testRows = /* @__PURE__ */ new Map();
    this._stepRows = /* @__PURE__ */ new Map();
    this._resultIndex = /* @__PURE__ */ new Map();
    this._stepIndex = /* @__PURE__ */ new Map();
    this._needNewLine = false;
    this._paused = /* @__PURE__ */ new Set();
    this._printSteps = getAsBooleanFromENV2("PLAYWRIGHT_LIST_PRINT_STEPS", options?.printSteps);
  }
  onBegin(suite) {
    super.onBegin(suite);
    const startingMessage = this.generateStartingMessage();
    if (startingMessage) {
      this.writeLine(startingMessage);
      this.writeLine("");
    }
  }
  onTestBegin(test, result) {
    const index = String(this._resultIndex.size + 1);
    this._resultIndex.set(result, index);
    if (!this.screen.isTTY)
      return;
    this._maybeWriteNewLine();
    this._testRows.set(test, this._lastRow);
    const prefix = this._testPrefix(index, "");
    const line = this.screen.colors.dim(this.formatTestTitle(test)) + this._retrySuffix(result);
    this._appendLine(line, prefix);
  }
  onStdOut(chunk, test, result) {
    super.onStdOut(chunk, test, result);
    this._dumpToStdio(test, chunk, this.screen.stdout, "out");
  }
  onStdErr(chunk, test, result) {
    super.onStdErr(chunk, test, result);
    this._dumpToStdio(test, chunk, this.screen.stderr, "err");
  }
  getStepIndex(testIndex, result, step) {
    if (this._stepIndex.has(step))
      return this._stepIndex.get(step);
    const ordinal = (result[lastStepOrdinalSymbol] || 0) + 1;
    result[lastStepOrdinalSymbol] = ordinal;
    const stepIndex = `${testIndex}.${ordinal}`;
    this._stepIndex.set(step, stepIndex);
    return stepIndex;
  }
  onStepBegin(test, result, step) {
    if (step.category !== "test.step")
      return;
    const testIndex = this._resultIndex.get(result) || "";
    if (!this.screen.isTTY)
      return;
    if (this._printSteps) {
      this._maybeWriteNewLine();
      this._stepRows.set(step, this._lastRow);
      const prefix = this._testPrefix(this.getStepIndex(testIndex, result, step), "");
      const line = test.title + this.screen.colors.dim(stepSuffix(step));
      this._appendLine(line, prefix);
    } else {
      this._updateOrAppendLine(this._testRows, test, this.screen.colors.dim(this.formatTestTitle(test, step)) + this._retrySuffix(result), this._testPrefix(testIndex, ""));
    }
  }
  onStepEnd(test, result, step) {
    if (step.category !== "test.step")
      return;
    const testIndex = this._resultIndex.get(result) || "";
    if (!this._printSteps) {
      if (this.screen.isTTY)
        this._updateOrAppendLine(this._testRows, test, this.screen.colors.dim(this.formatTestTitle(test, step.parent)) + this._retrySuffix(result), this._testPrefix(testIndex, ""));
      return;
    }
    const index = this.getStepIndex(testIndex, result, step);
    const title = this.screen.isTTY ? test.title + this.screen.colors.dim(stepSuffix(step)) : this.formatTestTitle(test, step);
    const prefix = this._testPrefix(index, "");
    let text = "";
    if (step.error)
      text = this.screen.colors.red(title);
    else
      text = title;
    text += this.screen.colors.dim(` (${msToString3(step.duration)})`);
    this._updateOrAppendLine(this._stepRows, step, text, prefix);
  }
  _maybeWriteNewLine() {
    if (this._needNewLine) {
      this._needNewLine = false;
      this.screen.stdout.write("\n");
      ++this._lastRow;
      this._lastColumn = 0;
    }
  }
  _updateLineCountAndNewLineFlagForOutput(text) {
    this._needNewLine = text[text.length - 1] !== "\n";
    if (!this.screen.ttyWidth)
      return;
    for (const ch of text) {
      if (ch === "\n") {
        this._lastColumn = 0;
        ++this._lastRow;
        continue;
      }
      ++this._lastColumn;
      if (this._lastColumn > this.screen.ttyWidth) {
        this._lastColumn = 0;
        ++this._lastRow;
      }
    }
  }
  _dumpToStdio(test, chunk, stream, stdio) {
    if (this.config.quiet)
      return;
    const text = chunk.toString("utf-8");
    this._updateLineCountAndNewLineFlagForOutput(text);
    stream.write(chunk);
  }
  async onTestPaused(test, result) {
    if (!process.stdin.isTTY && !process.env.PW_TEST_DEBUG_REPORTERS)
      return;
    this._paused.add(result);
    this._updateTestLine(test, result);
    this._maybeWriteNewLine();
    if (test.outcome() === "unexpected") {
      const errors = this.formatResultErrors(test, result);
      this.writeLine(errors);
      this._updateLineCountAndNewLineFlagForOutput(errors);
      markErrorsAsReported(result);
    }
    this._appendLine(this.screen.colors.yellow(`Paused ${test.outcome() === "unexpected" ? "on error" : "at test end"}. Press Ctrl+C to end.`), this._testPrefix("", ""));
    await new Promise(() => {
    });
  }
  onTestEnd(test, result) {
    super.onTestEnd(test, result);
    const wasPaused = this._paused.delete(result);
    if (!wasPaused)
      this._updateTestLine(test, result);
  }
  _updateTestLine(test, result) {
    const title = this.formatTestTitle(test);
    let prefix = "";
    let text = "";
    let index = this._resultIndex.get(result);
    if (!index) {
      index = String(this._resultIndex.size + 1);
      this._resultIndex.set(result, index);
    }
    if (result.status === "skipped") {
      prefix = this._testPrefix(index, this.screen.colors.green("-"));
      text = this.screen.colors.cyan(title) + this._retrySuffix(result);
    } else {
      const statusMark = result.status === "passed" ? POSITIVE_STATUS_MARK : NEGATIVE_STATUS_MARK;
      if (result.status === test.expectedStatus) {
        prefix = this._testPrefix(index, this.screen.colors.green(statusMark));
        text = title;
      } else {
        prefix = this._testPrefix(index, this.screen.colors.red(statusMark));
        text = this.screen.colors.red(title);
      }
      text += this._retrySuffix(result) + this.screen.colors.dim(` (${msToString3(result.duration)})`);
    }
    this._updateOrAppendLine(this._testRows, test, text, prefix);
  }
  _updateOrAppendLine(entityRowNumbers, entity, text, prefix) {
    const row = entityRowNumbers.get(entity);
    if (row !== void 0 && this.screen.isTTY && this._lastRow - row < this.screen.ttyHeight) {
      this._updateLine(row, text, prefix);
    } else {
      this._maybeWriteNewLine();
      entityRowNumbers.set(entity, this._lastRow);
      this._appendLine(text, prefix);
    }
  }
  _appendLine(text, prefix) {
    const line = prefix + this.fitToScreen(text, prefix);
    if (process.env.PW_TEST_DEBUG_REPORTERS) {
      this.screen.stdout.write("#" + this._lastRow + " : " + line + "\n");
    } else {
      this.screen.stdout.write(line);
      this.screen.stdout.write("\n");
    }
    ++this._lastRow;
    this._lastColumn = 0;
  }
  _updateLine(row, text, prefix) {
    const line = prefix + this.fitToScreen(text, prefix);
    if (process.env.PW_TEST_DEBUG_REPORTERS)
      this.screen.stdout.write("#" + row + " : " + line + "\n");
    else
      this._updateLineForTTY(row, line);
  }
  _updateLineForTTY(row, line) {
    if (row !== this._lastRow)
      this.screen.stdout.write(`\x1B[${this._lastRow - row}A`);
    this.screen.stdout.write("\x1B[2K\x1B[0G");
    this.screen.stdout.write(line);
    if (row !== this._lastRow)
      this.screen.stdout.write(`\x1B[${this._lastRow - row}E`);
  }
  _testPrefix(index, statusMark) {
    const statusMarkLength = (0, import_util8.stripAnsiEscapes)(statusMark).length;
    const indexLength = Math.ceil(Math.log10(this.totalTestCount + 1));
    return "  " + statusMark + " ".repeat(3 - statusMarkLength) + this.screen.colors.dim(index.padStart(indexLength) + " ");
  }
  _retrySuffix(result) {
    return result.retry ? this.screen.colors.yellow(` (retry #${result.retry})`) : "";
  }
  onError(error) {
    super.onError(error);
    this._maybeWriteNewLine();
    const message = this.formatError(error).message + "\n";
    this._updateLineCountAndNewLineFlagForOutput(message);
    this.screen.stdout.write(message);
  }
  async onEnd(result) {
    await super.onEnd(result);
    this.screen.stdout.write("\n");
    this.epilogue(true);
  }
};
var lastStepOrdinalSymbol = Symbol("lastStepOrdinal");
var list_default = ListReporter;

// packages/playwright/src/reporters/listModeReporter.ts
var import_path11 = __toESM(require("path"));
var ListModeReporter = class {
  constructor(options = {}) {
    this._options = options;
    this.screen = options?.screen ?? terminalScreen;
  }
  version() {
    return "v2";
  }
  onConfigure(config2) {
    this.config = config2;
  }
  onBegin(suite) {
    this._writeLine(`Listing tests:`);
    const tests = suite.allTests();
    const files = /* @__PURE__ */ new Set();
    for (const test of tests) {
      const [, projectName, , ...titles] = test.titlePath();
      const location = `${import_path11.default.relative(this.config.rootDir, test.location.file)}:${test.location.line}:${test.location.column}`;
      const testId = this._options.includeTestId ? `[id=${test.id}] ` : "";
      const projectLabel = this._options.includeTestId ? `project=` : "";
      const projectTitle = projectName ? `[${projectLabel}${projectName}] \u203A ` : "";
      this._writeLine(`  ${testId}${projectTitle}${location} \u203A ${titles.join(" \u203A ")}`);
      files.add(test.location.file);
    }
    this._writeLine(`Total: ${tests.length} ${tests.length === 1 ? "test" : "tests"} in ${files.size} ${files.size === 1 ? "file" : "files"}`);
  }
  onError(error) {
    this.screen.stderr.write("\n" + formatError(terminalScreen, error).message + "\n");
  }
  _writeLine(line) {
    this.screen.stdout.write(line + "\n");
  }
};
var listModeReporter_default = ListModeReporter;

// packages/playwright/src/runner/reporters.ts
var { calculateSha1: calculateSha13 } = require("playwright-core/lib/coreBundle").utils;
async function createReporters(config2, mode, descriptions, runOptions) {
  const defaultReporters = {
    blob: BlobReporter,
    dot: mode === "list" ? listModeReporter_default : dot_default,
    line: mode === "list" ? listModeReporter_default : line_default,
    list: mode === "list" ? listModeReporter_default : list_default,
    github: github_default,
    json: json_default,
    junit: junit_default,
    null: empty_default,
    html: html_default
  };
  const reporters = [];
  descriptions ??= config2.config.reporter;
  if (runOptions?.additionalReporters)
    descriptions = [...descriptions, ...runOptions.additionalReporters];
  const reportOptions = reporterCommandOptions(config2, mode, runOptions);
  for (const r of descriptions) {
    const [name, arg] = r;
    const options = { ...reportOptions, ...arg };
    if (name in defaultReporters) {
      reporters.push(new defaultReporters[name](options));
    } else {
      const reporterConstructor = await loadReporter(config2, name);
      reporters.push(wrapReporterAsV2(new reporterConstructor(options)));
    }
  }
  if (process.env.PW_TEST_REPORTER) {
    const name = process.env.PW_TEST_REPORTER;
    if (name in defaultReporters) {
      reporters.push(new defaultReporters[name](reportOptions));
    } else {
      const reporterConstructor = await loadReporter(config2, name);
      reporters.push(wrapReporterAsV2(new reporterConstructor(reportOptions)));
    }
  }
  const someReporterPrintsToStdio = reporters.some((r) => r.printsToStdio ? r.printsToStdio() : true);
  if (reporters.length && !someReporterPrintsToStdio) {
    if (mode === "list")
      reporters.unshift(new listModeReporter_default());
    else if (mode !== "merge")
      reporters.unshift(!process.env.CI ? new line_default() : new dot_default());
  }
  return reporters;
}
function createErrorCollectingReporter(screen) {
  const errors = [];
  return {
    version: () => "v2",
    onError(error) {
      errors.push(error);
      screen.stderr?.write(formatError(screen, error).message + "\n");
    },
    errors: () => errors
  };
}
function reporterCommandOptions(config2, mode, runOptions) {
  return {
    configDir: config2.configDir,
    _mode: mode,
    _commandHash: computeCommandHash(config2, runOptions)
  };
}
function computeCommandHash(config2, runOptions) {
  const parts = [];
  if (runOptions?.projectFilter)
    parts.push(...runOptions.projectFilter);
  const command = {};
  if (runOptions?.locations?.length)
    command.locations = runOptions.locations;
  if (runOptions?.grep)
    command.grep = runOptions.grep;
  if (runOptions?.grepInvert)
    command.grepInvert = runOptions.grepInvert;
  if (runOptions?.onlyChanged)
    command.onlyChanged = runOptions.onlyChanged;
  if (config2.config.tags.length)
    command.tags = config2.config.tags.join(" ");
  if (runOptions?.testList)
    command.testList = calculateSha13(import_fs8.default.readFileSync(runOptions.testList));
  if (runOptions?.testListInvert)
    command.testListInvert = calculateSha13(import_fs8.default.readFileSync(runOptions.testListInvert));
  if (Object.keys(command).length)
    parts.push(calculateSha13(JSON.stringify(command)).substring(0, 7));
  return parts.join("-");
}

// packages/playwright/src/runner/tasks.ts
var import_fs11 = __toESM(require("fs"));
var import_path15 = __toESM(require("path"));
var import_util11 = require("util");

// packages/playwright/src/runner/rebase.ts
var import_fs9 = __toESM(require("fs"));
var import_path12 = __toESM(require("path"));
var babel3 = __toESM(require("../transform/babelBundle"));
var colors3 = require("playwright-core/lib/utilsBundle").colors;
var diff = require("playwright-core/lib/utilsBundle").diff;
var { MultiMap: MultiMap3 } = require("playwright-core/lib/coreBundle").iso;
var t = babel3.types;
var suggestedRebaselines = new MultiMap3();
function addSuggestedRebaseline(location, suggestedRebaseline) {
  suggestedRebaselines.set(location.file, { location, code: suggestedRebaseline });
}
function clearSuggestedRebaselines() {
  suggestedRebaselines.clear();
}
async function applySuggestedRebaselines(config2, reporter, filteredProjects) {
  if (config2.config.updateSnapshots === "none")
    return;
  if (!suggestedRebaselines.size)
    return;
  const [project] = filteredProjects;
  if (!project)
    return;
  const patches = [];
  const files = [];
  const gitCache = /* @__PURE__ */ new Map();
  const patchFile = import_path12.default.join(project.project.outputDir, "rebaselines.patch");
  for (const fileName of [...suggestedRebaselines.keys()].sort()) {
    const source = await import_fs9.default.promises.readFile(fileName, "utf8");
    const lines = source.split("\n");
    const replacements = suggestedRebaselines.get(fileName);
    const fileNode = babel3.babelParse(source, fileName, true);
    const ranges = [];
    babel3.traverse(fileNode, {
      CallExpression: (path20) => {
        const node = path20.node;
        if (node.arguments.length < 1)
          return;
        if (!t.isMemberExpression(node.callee))
          return;
        const argument = node.arguments[0];
        if (!t.isStringLiteral(argument) && !t.isTemplateLiteral(argument))
          return;
        const prop = node.callee.property;
        if (!prop.loc || !argument.start || !argument.end)
          return;
        for (const replacement of replacements) {
          if (prop.loc.start.line !== replacement.location.line)
            continue;
          if (prop.loc.start.column + 1 !== replacement.location.column)
            continue;
          const indent2 = lines[prop.loc.start.line - 1].match(/^\s*/)[0];
          const newText = replacement.code.replace(/\{indent\}/g, indent2);
          ranges.push({ start: argument.start, end: argument.end, oldText: source.substring(argument.start, argument.end), newText });
          break;
        }
      }
    });
    ranges.sort((a, b) => b.start - a.start);
    let result = source;
    for (const range of ranges)
      result = result.substring(0, range.start) + range.newText + result.substring(range.end);
    const relativeName = import_path12.default.relative(process.cwd(), fileName);
    files.push(relativeName);
    if (config2.config.updateSourceMethod === "overwrite") {
      await import_fs9.default.promises.writeFile(fileName, result);
    } else if (config2.config.updateSourceMethod === "3way") {
      await import_fs9.default.promises.writeFile(fileName, applyPatchWithConflictMarkers(source, result));
    } else {
      const gitFolder = findGitRoot(import_path12.default.dirname(fileName), gitCache);
      const relativeToGit = import_path12.default.relative(gitFolder || process.cwd(), fileName);
      patches.push(createPatch(relativeToGit, source, result));
    }
  }
  const fileList = files.map((file) => "  " + colors3.dim(file)).join("\n");
  reporter.onStdErr(`
New baselines created for:

${fileList}
`);
  if (config2.config.updateSourceMethod === "patch") {
    await import_fs9.default.promises.mkdir(import_path12.default.dirname(patchFile), { recursive: true });
    await import_fs9.default.promises.writeFile(patchFile, patches.join("\n"));
    reporter.onStdErr(`
  ` + colors3.cyan("git apply " + import_path12.default.relative(process.cwd(), patchFile)) + "\n");
  }
}
function createPatch(fileName, before, after) {
  const file = fileName.replace(/\\/g, "/");
  const text = diff.createPatch(file, before, after, void 0, void 0, { context: 3 });
  return [
    "diff --git a/" + file + " b/" + file,
    "--- a/" + file,
    "+++ b/" + file,
    ...text.split("\n").slice(4)
  ].join("\n");
}
function findGitRoot(dir, cache) {
  const result = cache.get(dir);
  if (result !== void 0)
    return result;
  const gitPath = import_path12.default.join(dir, ".git");
  if (import_fs9.default.existsSync(gitPath) && import_fs9.default.lstatSync(gitPath).isDirectory()) {
    cache.set(dir, dir);
    return dir;
  }
  const parentDir = import_path12.default.dirname(dir);
  if (dir === parentDir) {
    cache.set(dir, null);
    return null;
  }
  const parentResult = findGitRoot(parentDir, cache);
  cache.set(dir, parentResult);
  return parentResult;
}
function applyPatchWithConflictMarkers(oldText, newText) {
  const diffResult = diff.diffLines(oldText, newText);
  let result = "";
  let conflict = false;
  diffResult.forEach((part) => {
    if (part.added) {
      if (conflict) {
        result += part.value;
        result += ">>>>>>> SNAPSHOT\n";
        conflict = false;
      } else {
        result += "<<<<<<< HEAD\n";
        result += part.value;
        result += "=======\n";
        conflict = true;
      }
    } else if (part.removed) {
      result += "<<<<<<< HEAD\n";
      result += part.value;
      result += "=======\n";
      conflict = true;
    } else {
      if (conflict) {
        result += ">>>>>>> SNAPSHOT\n";
        conflict = false;
      }
      result += part.value;
    }
  });
  if (conflict)
    result += ">>>>>>> SNAPSHOT\n";
  return result;
}

// packages/playwright/src/runner/workerHost.ts
var import_fs10 = __toESM(require("fs"));
var import_path13 = __toESM(require("path"));
var import_common5 = require("../common");

// packages/playwright/src/isomorphic/folders.ts
function artifactsFolderName(workerIndex) {
  return `.playwright-artifacts-${workerIndex}`;
}

// packages/playwright/src/runner/workerHost.ts
var { removeFolders: removeFolders3 } = require("playwright-core/lib/coreBundle").utils;
var lastWorkerIndex = 0;
var WorkerHost = class extends ProcessHost {
  constructor(testGroup, options) {
    const workerIndex = lastWorkerIndex++;
    super(require.resolve("../worker/workerProcessEntry.js"), `worker-${workerIndex}`, {
      ...options.extraEnv,
      FORCE_COLOR: "1",
      DEBUG_COLORS: process.env.DEBUG_COLORS === void 0 ? "1" : process.env.DEBUG_COLORS
    });
    this._didFail = false;
    this.workerIndex = workerIndex;
    this.parallelIndex = options.parallelIndex;
    this._hash = testGroup.workerHash;
    this._params = {
      workerIndex: this.workerIndex,
      parallelIndex: options.parallelIndex,
      repeatEachIndex: testGroup.repeatEachIndex,
      projectId: testGroup.projectId,
      config: options.config,
      artifactsDir: import_path13.default.join(options.outputDir, artifactsFolderName(workerIndex)),
      pauseOnError: options.pauseOnError,
      pauseAtEnd: options.pauseAtEnd
    };
  }
  async start() {
    await import_fs10.default.promises.mkdir(this._params.artifactsDir, { recursive: true });
    return await this.startRunner(this._params, {
      onStdOut: (chunk) => this.emit("stdOut", import_common5.ipc.stdioChunkToParams(chunk)),
      onStdErr: (chunk) => this.emit("stdErr", import_common5.ipc.stdioChunkToParams(chunk))
    });
  }
  async onExit() {
    await removeFolders3([this._params.artifactsDir]);
  }
  async stop(didFail) {
    if (didFail)
      this._didFail = true;
    await super.stop();
  }
  runTestGroup(runPayload) {
    this.sendMessageNoReply({ method: "runTestGroup", params: runPayload });
  }
  async sendCustomMessage(payload) {
    return await this.sendMessage({ method: "customMessage", params: payload });
  }
  sendResume(payload) {
    this.sendMessageNoReply({ method: "resume", params: payload });
  }
  hash() {
    return this._hash;
  }
  projectId() {
    return this._params.projectId;
  }
  didFail() {
    return this._didFail;
  }
};

// packages/playwright/src/runner/dispatcher.ts
var import_common6 = require("../common");
var import_util9 = require("../util");
var colors4 = require("playwright-core/lib/utilsBundle").colors;
var { ManualPromise: ManualPromise3 } = require("playwright-core/lib/coreBundle").iso;
var { eventsHelper } = require("playwright-core/lib/coreBundle").utils;
var Dispatcher = class {
  constructor(testRun) {
    // Worker slot is claimed when it has jobDispatcher assigned.
    this._workerSlots = [];
    this._queue = [];
    this._workerLimitPerProjectId = /* @__PURE__ */ new Map();
    this._queuedOrRunningHashCount = /* @__PURE__ */ new Map();
    this._finished = new ManualPromise3();
    this._isStopped = true;
    this._extraEnvByProjectId = /* @__PURE__ */ new Map();
    this._producedEnvByProjectId = /* @__PURE__ */ new Map();
    this._testRun = testRun;
    for (const project of testRun.config.projects) {
      if (project.workers)
        this._workerLimitPerProjectId.set(project.id, project.workers);
    }
  }
  _findFirstJobToRun() {
    for (let index = 0; index < this._queue.length; index++) {
      const job = this._queue[index];
      const projectIdWorkerLimit = this._workerLimitPerProjectId.get(job.projectId);
      if (!projectIdWorkerLimit)
        return index;
      const runningWorkersWithSameProjectId = this._workerSlots.filter((w) => w.jobDispatcher?.job.projectId === job.projectId).length;
      if (runningWorkersWithSameProjectId < projectIdWorkerLimit)
        return index;
    }
    return -1;
  }
  _scheduleJob() {
    if (this._isStopped)
      return;
    const jobIndex = this._findFirstJobToRun();
    if (jobIndex === -1)
      return;
    const job = this._queue[jobIndex];
    let workerIndex = this._workerSlots.findIndex((w) => !w.jobDispatcher && w.worker && w.worker.hash() === job.workerHash && !w.worker.didSendStop());
    if (workerIndex === -1)
      workerIndex = this._workerSlots.findIndex((w) => !w.jobDispatcher);
    if (workerIndex === -1) {
      return;
    }
    this._queue.splice(jobIndex, 1);
    const jobDispatcher = new JobDispatcher(job, this._testRun, () => this.stop().catch(() => {
    }));
    this._workerSlots[workerIndex].jobDispatcher = jobDispatcher;
    void this._runJobInWorker(workerIndex, jobDispatcher).then(() => {
      this._workerSlots[workerIndex].jobDispatcher = void 0;
      this._checkFinished();
      this._scheduleJob();
    });
  }
  async _runJobInWorker(index, jobDispatcher) {
    const job = jobDispatcher.job;
    if (jobDispatcher.skipWholeJob())
      return;
    let worker = this._workerSlots[index].worker;
    if (worker && (worker.hash() !== job.workerHash || worker.didSendStop())) {
      await worker.stop();
      worker = void 0;
      if (this._isStopped)
        return;
    }
    let startError;
    if (!worker) {
      worker = this._createWorker(job, index, import_common6.ipc.serializeConfig(this._testRun.config, true));
      this._workerSlots[index].worker = worker;
      worker.on("exit", () => this._workerSlots[index].worker = void 0);
      startError = await worker.start();
      if (this._isStopped)
        return;
    }
    if (startError)
      jobDispatcher.onExit(startError);
    else
      jobDispatcher.runInWorker(worker);
    const result = await jobDispatcher.jobResult;
    this._updateCounterForWorkerHash(job.workerHash, -1);
    if (result.didFail)
      void worker.stop(
        true
        /* didFail */
      );
    else if (this._isWorkerRedundant(worker))
      void worker.stop();
    if (!this._isStopped && result.newJob) {
      this._queue.unshift(result.newJob);
      this._updateCounterForWorkerHash(result.newJob.workerHash, 1);
    }
  }
  _checkFinished() {
    if (this._finished.isDone())
      return;
    if (this._queue.length && !this._isStopped)
      return;
    if (this._workerSlots.some((w) => !!w.jobDispatcher))
      return;
    this._finished.resolve();
  }
  _isWorkerRedundant(worker) {
    let workersWithSameHash = 0;
    for (const slot of this._workerSlots) {
      if (slot.worker && !slot.worker.didSendStop() && slot.worker.hash() === worker.hash())
        workersWithSameHash++;
    }
    return workersWithSameHash > this._queuedOrRunningHashCount.get(worker.hash());
  }
  _updateCounterForWorkerHash(hash, delta) {
    this._queuedOrRunningHashCount.set(hash, delta + (this._queuedOrRunningHashCount.get(hash) || 0));
  }
  async run(testGroups, extraEnvByProjectId) {
    this._extraEnvByProjectId = extraEnvByProjectId;
    this._queue = testGroups;
    for (const group of testGroups)
      this._updateCounterForWorkerHash(group.workerHash, 1);
    this._isStopped = false;
    this._workerSlots = [];
    if (this._testRun.hasReachedMaxFailures())
      void this.stop();
    for (let i = 0; i < this._testRun.config.config.workers; i++)
      this._workerSlots.push({});
    for (let i = 0; i < this._workerSlots.length; i++)
      this._scheduleJob();
    this._checkFinished();
    await this._finished;
  }
  _createWorker(testGroup, parallelIndex, loaderData) {
    const project = this._testRun.config.projects.find((p) => p.id === testGroup.projectId);
    const pauseAtEnd = this._testRun.topLevelProjects.includes(project) && !!this._testRun.options.pauseAtEnd;
    const worker = new WorkerHost(testGroup, {
      parallelIndex,
      config: loaderData,
      extraEnv: this._extraEnvByProjectId.get(testGroup.projectId) || {},
      outputDir: project.project.outputDir,
      pauseOnError: !!this._testRun.options.pauseOnError,
      pauseAtEnd
    });
    const handleOutput = (params) => {
      const chunk = chunkFromParams(params);
      if (worker.didFail()) {
        return { chunk };
      }
      const currentlyRunning = this._workerSlots[parallelIndex].jobDispatcher?.currentlyRunning();
      if (!currentlyRunning)
        return { chunk };
      return { chunk, test: currentlyRunning.test, result: currentlyRunning.result };
    };
    worker.on("stdOut", (params) => {
      const { chunk, test, result } = handleOutput(params);
      result?.stdout.push(chunk);
      this._testRun.reporter.onStdOut?.(chunk, test, result);
    });
    worker.on("stdErr", (params) => {
      const { chunk, test, result } = handleOutput(params);
      result?.stderr.push(chunk);
      this._testRun.reporter.onStdErr?.(chunk, test, result);
    });
    worker.on("teardownErrors", (params) => {
      this._testRun.hasWorkerErrors = true;
      const workerInfo = {
        config: this._testRun.config.config,
        project: project.project,
        workerIndex: worker.workerIndex,
        parallelIndex: worker.parallelIndex
      };
      for (const error of params.fatalErrors)
        this._testRun.reporter.onError?.(error, workerInfo);
    });
    worker.on("processError", (error) => {
      this._testRun.hasWorkerErrors = true;
      this._testRun.reporter.onError?.(error);
    });
    worker.on("exit", () => {
      const producedEnv = this._producedEnvByProjectId.get(testGroup.projectId) || {};
      this._producedEnvByProjectId.set(testGroup.projectId, { ...producedEnv, ...worker.producedEnv() });
    });
    return worker;
  }
  producedEnvByProjectId() {
    return this._producedEnvByProjectId;
  }
  async stop() {
    if (this._isStopped)
      return;
    this._isStopped = true;
    await Promise.all(this._workerSlots.map(({ worker }) => worker?.stop()));
    this._checkFinished();
  }
};
var JobDispatcher = class {
  constructor(job, testRun, stopCallback) {
    this.jobResult = new ManualPromise3();
    this._listeners = [];
    this._failedTests = /* @__PURE__ */ new Set();
    this._failedWithNonRetriableError = /* @__PURE__ */ new Set();
    this._remainingByTestId = /* @__PURE__ */ new Map();
    this._dataByTestId = /* @__PURE__ */ new Map();
    this._parallelIndex = 0;
    this._workerIndex = 0;
    this.job = job;
    this._testRun = testRun;
    this._stopCallback = stopCallback;
    this._remainingByTestId = new Map(this.job.tests.map((e) => [e.id, e]));
  }
  _onTestBegin(params) {
    const test = this._remainingByTestId.get(params.testId);
    if (!test) {
      return;
    }
    const result = test._appendTestResult();
    this._dataByTestId.set(test.id, { test, result, steps: /* @__PURE__ */ new Map() });
    result.parallelIndex = this._parallelIndex;
    result.workerIndex = this._workerIndex;
    result.startTime = new Date(params.startWallTime);
    this._testRun.reporter.onTestBegin?.(test, result);
    this._currentlyRunning = { test, result };
  }
  _onTestEnd(params) {
    if (this._testRun.hasReachedMaxFailures()) {
      params.status = "interrupted";
      params.errors = [];
    }
    const data = this._dataByTestId.get(params.testId);
    if (!data) {
      return;
    }
    this._dataByTestId.delete(params.testId);
    this._remainingByTestId.delete(params.testId);
    const { result, test } = data;
    result.duration = params.duration;
    result.errors = params.errors;
    result.error = result.errors[0];
    result.status = params.status;
    result.annotations = params.annotations;
    test.annotations = [...params.annotations];
    test.expectedStatus = params.expectedStatus;
    test.timeout = params.timeout;
    const isFailure = result.status !== "skipped" && result.status !== test.expectedStatus;
    if (isFailure)
      this._failedTests.add(test);
    if (params.hasNonRetriableError)
      this._addNonretriableTestAndSerialModeParents(test);
    this._reportTestEnd(test, result);
    this._currentlyRunning = void 0;
  }
  _addNonretriableTestAndSerialModeParents(test) {
    this._failedWithNonRetriableError.add(test);
    for (let parent = test.parent; parent; parent = parent.parent) {
      if (parent._parallelMode === "serial")
        this._failedWithNonRetriableError.add(parent);
    }
  }
  _onStepBegin(params) {
    const data = this._dataByTestId.get(params.testId);
    if (!data) {
      return;
    }
    const { result, steps, test } = data;
    const parentStep = params.parentStepId ? steps.get(params.parentStepId) : void 0;
    const step = {
      title: params.title,
      titlePath: () => {
        const parentPath = parentStep?.titlePath() || [];
        return [...parentPath, params.title];
      },
      parent: parentStep,
      category: params.category,
      startTime: new Date(params.wallTime),
      duration: -1,
      steps: [],
      attachments: [],
      annotations: [],
      location: params.location
    };
    steps.set(params.stepId, step);
    (parentStep || result).steps.push(step);
    this._testRun.reporter.onStepBegin?.(test, result, step);
  }
  _onStepEnd(params) {
    const data = this._dataByTestId.get(params.testId);
    if (!data) {
      return;
    }
    const { result, steps, test } = data;
    const step = steps.get(params.stepId);
    if (!step) {
      this._testRun.reporter.onStdErr?.("Internal error: step end without step begin: " + params.stepId, test, result);
      return;
    }
    step.duration = params.wallTime - step.startTime.getTime();
    if (params.error)
      step.error = params.error;
    if (params.suggestedRebaseline)
      addSuggestedRebaseline(step.location, params.suggestedRebaseline);
    step.annotations = params.annotations;
    steps.delete(params.stepId);
    this._testRun.reporter.onStepEnd?.(test, result, step);
  }
  _onAttach(params) {
    const data = this._dataByTestId.get(params.testId);
    if (!data) {
      return;
    }
    const attachment = {
      name: params.name,
      path: params.path,
      contentType: params.contentType,
      body: params.body !== void 0 ? Buffer.from(params.body, "base64") : void 0
    };
    data.result.attachments.push(attachment);
    if (params.stepId) {
      const step = data.steps.get(params.stepId);
      if (step)
        step.attachments.push(attachment);
      else
        this._testRun.reporter.onStdErr?.("Internal error: step id not found: " + params.stepId);
    }
  }
  _failTestWithErrors(test, errors) {
    const runData = this._dataByTestId.get(test.id);
    let result;
    if (runData) {
      result = runData.result;
    } else {
      result = test._appendTestResult();
      this._testRun.reporter.onTestBegin?.(test, result);
    }
    result.errors = [...errors];
    result.error = result.errors[0];
    result.status = errors.length ? "failed" : "skipped";
    this._reportTestEnd(test, result);
    this._failedTests.add(test);
  }
  _massSkipTestsFromRemaining(testIds, errors) {
    for (const test of this._remainingByTestId.values()) {
      if (!testIds.has(test.id))
        continue;
      if (!this._testRun.hasReachedMaxFailures()) {
        this._failTestWithErrors(test, errors);
        errors = [];
      }
      this._remainingByTestId.delete(test.id);
    }
    if (errors.length) {
      this._testRun.hasWorkerErrors = true;
      for (const error of errors)
        this._testRun.reporter.onError?.(error);
    }
  }
  _onDone(params) {
    if (!this._remainingByTestId.size && !this._failedTests.size && !params.fatalErrors.length && !params.skipTestsDueToSetupFailure.length && !params.fatalUnknownTestIds && !params.unexpectedExitError && !params.stoppedDueToUnhandledErrorInTestFail) {
      this._finished({ didFail: false });
      return;
    }
    for (const testId of params.fatalUnknownTestIds || []) {
      const test = this._remainingByTestId.get(testId);
      if (test) {
        this._remainingByTestId.delete(testId);
        this._failTestWithErrors(test, [{ message: `Test not found in the worker process. Make sure test title does not change.` }]);
      }
    }
    if (params.fatalErrors.length) {
      this._massSkipTestsFromRemaining(new Set(this._remainingByTestId.keys()), params.fatalErrors);
    }
    this._massSkipTestsFromRemaining(new Set(params.skipTestsDueToSetupFailure), []);
    if (params.unexpectedExitError) {
      if (this._currentlyRunning)
        this._massSkipTestsFromRemaining(/* @__PURE__ */ new Set([this._currentlyRunning.test.id]), [params.unexpectedExitError]);
      else
        this._massSkipTestsFromRemaining(new Set(this._remainingByTestId.keys()), [params.unexpectedExitError]);
    }
    const retryCandidates = /* @__PURE__ */ new Set();
    const serialSuitesWithFailures = /* @__PURE__ */ new Set();
    for (const failedTest of this._failedTests) {
      if (this._failedWithNonRetriableError.has(failedTest))
        continue;
      retryCandidates.add(failedTest);
      let outermostSerialSuite;
      for (let parent = failedTest.parent; parent; parent = parent.parent) {
        if (parent._parallelMode === "serial")
          outermostSerialSuite = parent;
      }
      if (outermostSerialSuite && !this._failedWithNonRetriableError.has(outermostSerialSuite))
        serialSuitesWithFailures.add(outermostSerialSuite);
    }
    const testsBelongingToSomeSerialSuiteWithFailures = [...this._remainingByTestId.values()].filter((test) => {
      let parent = test.parent;
      while (parent && !serialSuitesWithFailures.has(parent))
        parent = parent.parent;
      return !!parent;
    });
    this._massSkipTestsFromRemaining(new Set(testsBelongingToSomeSerialSuiteWithFailures.map((test) => test.id)), []);
    for (const serialSuite of serialSuitesWithFailures) {
      serialSuite.allTests().forEach((test) => retryCandidates.add(test));
    }
    const remaining = [...this._remainingByTestId.values()];
    for (const test of retryCandidates) {
      if (test.results.length < test.retries + 1)
        remaining.push(test);
    }
    const newJob = remaining.length ? { ...this.job, tests: remaining } : void 0;
    this._finished({ didFail: true, newJob });
  }
  onExit(data) {
    const unexpectedExitError = data.unexpectedly ? {
      message: `Error: worker process exited unexpectedly (code=${data.code}, signal=${data.signal})`
    } : void 0;
    this._onDone({ skipTestsDueToSetupFailure: [], fatalErrors: [], unexpectedExitError });
  }
  _finished(result) {
    eventsHelper.removeEventListeners(this._listeners);
    this.jobResult.resolve(result);
  }
  runInWorker(worker) {
    this._parallelIndex = worker.parallelIndex;
    this._workerIndex = worker.workerIndex;
    const runPayload = {
      file: this.job.requireFile,
      entries: this.job.tests.map((test) => {
        return { testId: test.id, retry: test.results.length };
      })
    };
    worker.runTestGroup(runPayload);
    this._listeners = [
      eventsHelper.addEventListener(worker, "testBegin", this._onTestBegin.bind(this)),
      eventsHelper.addEventListener(worker, "testEnd", this._onTestEnd.bind(this)),
      eventsHelper.addEventListener(worker, "stepBegin", this._onStepBegin.bind(this)),
      eventsHelper.addEventListener(worker, "stepEnd", this._onStepEnd.bind(this)),
      eventsHelper.addEventListener(worker, "attach", this._onAttach.bind(this)),
      eventsHelper.addEventListener(worker, "testPaused", this._onTestPaused.bind(this, worker)),
      eventsHelper.addEventListener(worker, "done", this._onDone.bind(this)),
      eventsHelper.addEventListener(worker, "exit", this.onExit.bind(this))
    ];
  }
  _onTestPaused(worker, params) {
    const data = this._dataByTestId.get(params.testId);
    if (!data)
      return;
    const { result, test } = data;
    const sendMessage = async (message) => {
      try {
        if (this.jobResult.isDone())
          throw new Error("Test has already stopped");
        const response = await worker.sendCustomMessage({ testId: test.id, request: message.request });
        if (response.error)
          addLocationAndSnippetToError(this._testRun.config.config, response.error);
        return response;
      } catch (e) {
        const error = (0, import_util9.serializeError)(e);
        addLocationAndSnippetToError(this._testRun.config.config, error);
        return { response: void 0, error };
      }
    };
    result.status = params.status;
    result.errors = params.errors;
    result.error = result.errors[0];
    void this._testRun.reporter.onTestPaused?.(test, result).then(() => {
      worker.sendResume({});
    });
    this._testRun.onTestPaused({ ...params, sendMessage });
  }
  skipWholeJob() {
    const allTestsSkipped = this.job.tests.every((test) => test.expectedStatus === "skipped");
    if (allTestsSkipped && !this._testRun.hasReachedMaxFailures()) {
      for (const test of this.job.tests) {
        const result = test._appendTestResult();
        this._testRun.reporter.onTestBegin?.(test, result);
        result.status = "skipped";
        result.annotations = [...test.annotations];
        this._reportTestEnd(test, result);
      }
      return true;
    }
    return false;
  }
  currentlyRunning() {
    return this._currentlyRunning;
  }
  _reportTestEnd(test, result) {
    this._testRun.reporter.onTestEnd?.(test, result);
    const hadMaxFailures = this._testRun.hasReachedMaxFailures();
    if (test.outcome() === "unexpected" && test.results.length > test.retries)
      ++this._testRun.failedTestCount;
    if (!hadMaxFailures && this._testRun.hasReachedMaxFailures()) {
      this._stopCallback();
      this._testRun.reporter.onError?.({ message: colors4.red(`Testing stopped early after ${this._testRun.config.config.maxFailures} maximum allowed failures.`) });
    }
  }
};
function chunkFromParams(params) {
  if (typeof params.text === "string")
    return params.text;
  return Buffer.from(params.buffer, "base64");
}

// packages/playwright/src/runner/sigIntWatcher.ts
var SigIntWatcher = class {
  constructor() {
    this._hadSignal = false;
    let sigintCallback;
    this._sigintPromise = new Promise((f) => sigintCallback = f);
    this._sigintHandler = () => {
      FixedNodeSIGINTHandler.off(this._sigintHandler);
      this._hadSignal = true;
      sigintCallback();
    };
    FixedNodeSIGINTHandler.on(this._sigintHandler);
  }
  promise() {
    return this._sigintPromise;
  }
  hadSignal() {
    return this._hadSignal;
  }
  disarm() {
    FixedNodeSIGINTHandler.off(this._sigintHandler);
  }
};
var FixedNodeSIGINTHandler = class {
  static {
    this._handlers = [];
  }
  static {
    this._ignoreNextSIGINTs = false;
  }
  static {
    this._handlerInstalled = false;
  }
  static {
    this._dispatch = () => {
      if (this._ignoreNextSIGINTs)
        return;
      this._ignoreNextSIGINTs = true;
      setTimeout(() => {
        this._ignoreNextSIGINTs = false;
        if (!this._handlers.length)
          this._uninstall();
      }, 1e3);
      for (const handler of this._handlers)
        handler();
    };
  }
  static _install() {
    if (!this._handlerInstalled) {
      this._handlerInstalled = true;
      process.on("SIGINT", this._dispatch);
    }
  }
  static _uninstall() {
    if (this._handlerInstalled) {
      this._handlerInstalled = false;
      process.off("SIGINT", this._dispatch);
    }
  }
  static on(handler) {
    this._handlers.push(handler);
    if (this._handlers.length === 1)
      this._install();
  }
  static off(handler) {
    this._handlers = this._handlers.filter((h) => h !== handler);
    if (!this._ignoreNextSIGINTs && !this._handlers.length)
      this._uninstall();
  }
};

// packages/playwright/src/runner/taskRunner.ts
var import_util10 = require("../util");
var colors5 = require("playwright-core/lib/utilsBundle").colors;
var debug4 = require("playwright-core/lib/utilsBundle").debug;
var { ManualPromise: ManualPromise4 } = require("playwright-core/lib/coreBundle").iso;
var { monotonicTime: monotonicTime5 } = require("playwright-core/lib/coreBundle").iso;
var TaskRunner = class _TaskRunner {
  constructor(reporter, globalTimeoutForError) {
    this._tasks = [];
    this._hasErrors = false;
    this._interrupted = false;
    this._isTearDown = false;
    this._reporter = reporter;
    this._globalTimeoutForError = globalTimeoutForError;
  }
  addTask(task) {
    this._tasks.push(task);
  }
  async run(context, deadline, cancelPromise) {
    const { status, cleanup } = await this.runDeferCleanup(context, deadline, cancelPromise);
    const teardownStatus = await cleanup();
    return status === "passed" ? teardownStatus : status;
  }
  async runDeferCleanup(context, deadline, cancelPromise = new ManualPromise4()) {
    const sigintWatcher = new SigIntWatcher();
    const timeoutWatcher = new TimeoutWatcher(deadline);
    const teardownRunner = new _TaskRunner(this._reporter, this._globalTimeoutForError);
    teardownRunner._isTearDown = true;
    let currentTaskName;
    const taskLoop = async () => {
      for (const task of this._tasks) {
        currentTaskName = task.title;
        if (this._interrupted)
          break;
        debug4("pw:test:task")(`"${task.title}" started`);
        const errors = [];
        const softErrors = [];
        try {
          teardownRunner._tasks.unshift({ title: `teardown for ${task.title}`, setup: task.teardown });
          await task.setup?.(context, errors, softErrors);
        } catch (e) {
          debug4("pw:test:task")(`error in "${task.title}": `, e);
          errors.push((0, import_util10.serializeError)(e));
        } finally {
          for (const error of [...softErrors, ...errors])
            this._reporter.onError?.(error);
          if (errors.length) {
            if (!this._isTearDown)
              this._interrupted = true;
            this._hasErrors = true;
          }
        }
        debug4("pw:test:task")(`"${task.title}" finished`);
      }
    };
    await Promise.race([
      taskLoop(),
      cancelPromise,
      sigintWatcher.promise(),
      timeoutWatcher.promise
    ]);
    sigintWatcher.disarm();
    timeoutWatcher.disarm();
    this._interrupted = true;
    let status = "passed";
    if (sigintWatcher.hadSignal() || cancelPromise?.isDone()) {
      status = "interrupted";
    } else if (timeoutWatcher.timedOut()) {
      this._reporter.onError?.({ message: colors5.red(`Timed out waiting ${this._globalTimeoutForError / 1e3}s for the ${currentTaskName} to run`) });
      status = "timedout";
    } else if (this._hasErrors) {
      status = "failed";
    }
    cancelPromise?.resolve();
    const cleanup = () => teardownRunner.runDeferCleanup(context, deadline).then((r) => r.status);
    return { status, cleanup };
  }
};
var TimeoutWatcher = class {
  constructor(deadline) {
    this._timedOut = false;
    this.promise = new ManualPromise4();
    if (!deadline)
      return;
    if (deadline - monotonicTime5() <= 0) {
      this._timedOut = true;
      this.promise.resolve();
      return;
    }
    this._timer = setTimeout(() => {
      this._timedOut = true;
      this.promise.resolve();
    }, deadline - monotonicTime5());
  }
  timedOut() {
    return this._timedOut;
  }
  disarm() {
    clearTimeout(this._timer);
  }
};

// packages/playwright/src/runner/vcs.ts
var import_child_process2 = __toESM(require("child_process"));
var import_path14 = __toESM(require("path"));
var import_common7 = require("../common");
async function detectChangedTestFiles(baseCommit, configDir) {
  function gitFileList(args) {
    try {
      return import_child_process2.default.execFileSync(
        "git",
        args,
        { encoding: "utf-8", stdio: "pipe", cwd: configDir }
      ).split("\n").filter(Boolean);
    } catch (_error) {
      const error = _error;
      const unknownRevision = error.output.some((line) => line?.includes("unknown revision"));
      if (unknownRevision) {
        const isShallowClone = import_child_process2.default.execFileSync("git", ["rev-parse", "--is-shallow-repository"], { encoding: "utf-8", stdio: "pipe", cwd: configDir }).trim() === "true";
        if (isShallowClone) {
          throw new Error([
            `The repository is a shallow clone and does not have '${baseCommit}' available locally.`,
            `Note that GitHub Actions checkout is shallow by default: https://github.com/actions/checkout`
          ].join("\n"));
        }
      }
      throw new Error([
        `Cannot detect changed files for --only-changed mode:`,
        `git ${args.join(" ")}`,
        "",
        ...error.output
      ].join("\n"));
    }
  }
  const untrackedFiles = gitFileList(["ls-files", "--others", "--exclude-standard"]).map((file) => import_path14.default.join(configDir, file));
  const [gitRoot] = gitFileList(["rev-parse", "--show-toplevel"]);
  const trackedFilesWithChanges = gitFileList(["diff", baseCommit, "--name-only"]).map((file) => import_path14.default.join(gitRoot, file));
  return new Set(import_common7.cc.affectedTestFiles([...untrackedFiles, ...trackedFilesWithChanges]));
}

// packages/playwright/src/runner/tasks.ts
var import_common8 = require("../common");
var import_util12 = require("../util");
var debug5 = require("playwright-core/lib/utilsBundle").debug;
var { ManualPromise: ManualPromise5 } = require("playwright-core/lib/coreBundle").iso;
var { monotonicTime: monotonicTime6 } = require("playwright-core/lib/coreBundle").iso;
var { removeFolders: removeFolders4 } = require("playwright-core/lib/coreBundle").utils;
var readDirAsync2 = (0, import_util11.promisify)(import_fs11.default.readdir);
var TestRun = class {
  constructor(config2, reporter, options) {
    this.rootSuite = void 0;
    this.phases = [];
    this.projectFiles = /* @__PURE__ */ new Map();
    this.projectSuites = /* @__PURE__ */ new Map();
    this.topLevelProjects = [];
    this.hasWorkerErrors = false;
    this.failedTestCount = 0;
    this.loadFileFilters = [];
    this.preOnlyTestFilters = [];
    this.postShardTestFilters = [];
    this.config = config2;
    this.options = options ?? {};
    this.reporter = reporter;
    this.filteredProjects = filterProjects(config2.projects, this.options.projectFilter);
  }
  onTestPaused(params) {
    this.options.onTestPaused?.(params);
  }
  hasReachedMaxFailures() {
    const max = this.config.config.maxFailures;
    return max > 0 && this.failedTestCount >= max;
  }
  result() {
    const hasFailedTests = this.rootSuite?.allTests().some((test) => !test.ok());
    const hasFlakyTests = this.rootSuite?.allTests().some((test) => test.outcome() === "flaky");
    return this.hasWorkerErrors || this.hasReachedMaxFailures() || hasFailedTests || this.config.failOnFlakyTests && hasFlakyTests ? "failed" : "passed";
  }
};
async function runTasks(testRun, tasks, globalTimeout, cancelPromise) {
  const deadline = globalTimeout ? monotonicTime6() + globalTimeout : 0;
  const taskRunner = new TaskRunner(testRun.reporter, globalTimeout || 0);
  for (const task of tasks)
    taskRunner.addTask(task);
  testRun.reporter.onConfigure(testRun.config.config);
  const status = await taskRunner.run(testRun, deadline, cancelPromise);
  return await finishTaskRun(testRun, status);
}
async function runTasksDeferCleanup(testRun, tasks) {
  const taskRunner = new TaskRunner(testRun.reporter, 0);
  for (const task of tasks)
    taskRunner.addTask(task);
  testRun.reporter.onConfigure(testRun.config.config);
  const { status, cleanup } = await taskRunner.runDeferCleanup(testRun, 0);
  return { status: await finishTaskRun(testRun, status), cleanup };
}
async function finishTaskRun(testRun, status) {
  if (status === "passed")
    status = testRun.result();
  const modifiedResult = await testRun.reporter.onEnd({ status });
  if (modifiedResult && modifiedResult.status)
    status = modifiedResult.status;
  await testRun.reporter.onExit();
  return status;
}
function createGlobalSetupTasks(config2) {
  return [
    createRemoveOutputDirsTask(),
    ...createPluginSetupTasks(config2),
    ...config2.globalTeardowns.map((file) => createGlobalTeardownTask(file, config2)).reverse(),
    ...config2.globalSetups.map((file) => createGlobalSetupTask(file, config2))
  ];
}
function createRunTestsTasks(config2) {
  return [
    createPhasesTask(),
    createReportBeginTask(),
    ...config2.plugins.map((plugin) => createPluginBeginTask(plugin)),
    createRunTestsTask()
  ];
}
function createClearCacheTask(config2) {
  return {
    title: "clear cache",
    setup: async () => {
      await (0, import_util12.removeDirAndLogToConsole)(import_common8.cc.cacheDir);
      for (const plugin of config2.plugins)
        await plugin.instance?.clearCache?.();
    }
  };
}
function createReportBeginTask() {
  return {
    title: "report begin",
    setup: async (testRun) => {
      testRun.reporter.onBegin?.(testRun.rootSuite);
    },
    teardown: async ({}) => {
    }
  };
}
function createPluginSetupTasks(config2) {
  return config2.plugins.map((plugin) => ({
    title: "plugin setup",
    setup: async ({ reporter }) => {
      if (typeof plugin.factory === "function")
        plugin.instance = await plugin.factory();
      else
        plugin.instance = plugin.factory;
      await plugin.instance?.setup?.(config2.config, config2.configDir, reporter);
    },
    teardown: async () => {
      await plugin.instance?.teardown?.();
    }
  }));
}
function createPluginBeginTask(plugin) {
  return {
    title: "plugin begin",
    setup: async (testRun) => {
      await plugin.instance?.begin?.(testRun.rootSuite);
    },
    teardown: async () => {
      await plugin.instance?.end?.();
    }
  };
}
function createGlobalSetupTask(file, config2) {
  let title = "global setup";
  if (config2.globalSetups.length > 1)
    title += ` (${file})`;
  let globalSetupResult;
  return {
    title,
    setup: async ({ config: config3 }) => {
      const setupHook = await loadGlobalHook(config3, file);
      globalSetupResult = await setupHook(config3.config);
    },
    teardown: async () => {
      if (typeof globalSetupResult === "function")
        await globalSetupResult();
    }
  };
}
function createGlobalTeardownTask(file, config2) {
  let title = "global teardown";
  if (config2.globalTeardowns.length > 1)
    title += ` (${file})`;
  return {
    title,
    teardown: async ({ config: config3 }) => {
      const teardownHook = await loadGlobalHook(config3, file);
      await teardownHook(config3.config);
    }
  };
}
function createRemoveOutputDirsTask() {
  return {
    title: "clear output",
    setup: async (testRun) => {
      if (testRun.options.preserveOutputDir)
        return;
      const outputDirs = /* @__PURE__ */ new Set();
      testRun.filteredProjects.forEach((p) => outputDirs.add(p.project.outputDir));
      await Promise.all(Array.from(outputDirs).map((outputDir) => removeFolders4([outputDir]).then(async ([error]) => {
        if (!error)
          return;
        if (error.code === "EBUSY") {
          const entries = await readDirAsync2(outputDir).catch((e) => []);
          await Promise.all(entries.map((entry) => removeFolders4([import_path15.default.join(outputDir, entry)])));
        } else {
          throw error;
        }
      })));
    }
  };
}
function createListFilesTask() {
  return {
    title: "load tests",
    setup: async (testRun, errors) => {
      await createRootSuite(testRun, errors, false);
      await collectProjectsAndTestFiles(testRun, false);
      for (const [project, files] of testRun.projectFiles) {
        const projectSuite = new import_common8.test.Suite(project.project.name, "project");
        projectSuite._fullProject = project;
        testRun.rootSuite._addSuite(projectSuite);
        const suites = files.map((file) => {
          const title = import_path15.default.relative(testRun.config.config.rootDir, file);
          const suite = new import_common8.test.Suite(title, "file");
          suite.location = { file, line: 0, column: 0 };
          projectSuite._addSuite(suite);
          return suite;
        });
        testRun.projectSuites.set(project, suites);
      }
    }
  };
}
function createLoadTask(mode, options) {
  return {
    title: "load tests",
    setup: async (testRun, errors, softErrors) => {
      if (testRun.options.locations?.length) {
        const { testFilter, fileFilter } = import_common8.suiteUtils.createFiltersFromArguments(testRun.options.locations);
        testRun.loadFileFilters.push(fileFilter);
        testRun.preOnlyTestFilters.push(testFilter);
      }
      if (testRun.options.testList) {
        const { testFilter, fileFilter } = await loadTestList(testRun.config, testRun.options.testList);
        testRun.preOnlyTestFilters.push(testFilter);
        testRun.loadFileFilters.push(fileFilter);
      }
      if (testRun.options.testListInvert) {
        const { testFilter } = await loadTestList(testRun.config, testRun.options.testListInvert);
        testRun.preOnlyTestFilters.push((test) => !testFilter(test));
      }
      if (testRun.options.grep || testRun.options.grepInvert) {
        const grepMatcher = testRun.options.grep ? (0, import_util12.createTitleMatcher)((0, import_util12.forceRegExp)(testRun.options.grep)) : () => true;
        const grepInvertMatcher = testRun.options.grepInvert ? (0, import_util12.createTitleMatcher)((0, import_util12.forceRegExp)(testRun.options.grepInvert)) : () => false;
        testRun.preOnlyTestFilters.push((test) => {
          const grepTitle = test._grepTitleWithTags();
          return !grepInvertMatcher(grepTitle) && grepMatcher(grepTitle);
        });
      }
      if (testRun.options.lastFailedTestIds?.length) {
        const failedTestIds = new Set(testRun.options.lastFailedTestIds);
        testRun.postShardTestFilters.push((test) => failedTestIds.has(test.id));
      }
      await collectProjectsAndTestFiles(testRun, !!options.doNotRunDepsOutsideProjectFilter);
      await loadFileSuites(testRun, mode, options.failOnLoadErrors ? errors : softErrors);
      if (testRun.options.onlyChanged || options.populateDependencies) {
        for (const plugin of testRun.config.plugins)
          await plugin.instance?.populateDependencies?.();
      }
      if (testRun.options.onlyChanged) {
        const changedFiles = await detectChangedTestFiles(testRun.options.onlyChanged, testRun.config.configDir);
        testRun.preOnlyTestFilters.push((test) => changedFiles.has(test.location.file));
      }
      await createRootSuite(testRun, options.failOnLoadErrors ? errors : softErrors, !!options.filterOnly);
      if (options.failOnLoadErrors && !testRun.rootSuite?.allTests().length && !testRun.options.passWithNoTests && !testRun.config.config.shard && !testRun.options.onlyChanged && !testRun.options.testList && !testRun.options.testListInvert) {
        if (testRun.options.locations?.length) {
          throw new Error([
            `No tests found.`,
            `Make sure that arguments are regular expressions matching test files.`,
            `You may need to escape symbols like "$" or "*" and quote the arguments.`
          ].join("\n"));
        }
        throw new Error(`No tests found`);
      }
    }
  };
}
function createApplyRebaselinesTask() {
  return {
    title: "apply rebaselines",
    setup: async () => {
      clearSuggestedRebaselines();
    },
    teardown: async (testRun) => {
      await applySuggestedRebaselines(testRun.config, testRun.reporter, testRun.filteredProjects);
    }
  };
}
function createPhasesTask() {
  return {
    title: "create phases",
    setup: async (testRun) => {
      let maxConcurrentTestGroups = 0;
      const processed = /* @__PURE__ */ new Set();
      const projectToSuite = new Map(testRun.rootSuite.suites.map((suite) => [suite._fullProject, suite]));
      const allProjects = [...projectToSuite.keys()];
      const teardownToSetups = buildTeardownToSetupsMap(allProjects);
      const teardownToSetupsDependents = /* @__PURE__ */ new Map();
      for (const [teardown, setups] of teardownToSetups) {
        const closure = buildDependentProjects(setups, allProjects);
        closure.delete(teardown);
        teardownToSetupsDependents.set(teardown, [...closure]);
      }
      for (let i = 0; i < projectToSuite.size; i++) {
        const phaseProjects = [];
        for (const project of projectToSuite.keys()) {
          if (processed.has(project))
            continue;
          const projectsThatShouldFinishFirst = [...project.deps, ...teardownToSetupsDependents.get(project) || []];
          if (projectsThatShouldFinishFirst.find((p) => !processed.has(p)))
            continue;
          phaseProjects.push(project);
        }
        for (const project of phaseProjects)
          processed.add(project);
        if (phaseProjects.length) {
          let testGroupsInPhase = 0;
          const phase = { dispatcher: new Dispatcher(testRun), projects: [] };
          testRun.phases.push(phase);
          for (const project of phaseProjects) {
            const projectSuite = projectToSuite.get(project);
            const testGroups = createTestGroups(projectSuite, testRun.config.config.workers);
            phase.projects.push({ project, projectSuite, testGroups });
            testGroupsInPhase += Math.min(project.workers ?? Number.MAX_SAFE_INTEGER, testGroups.length);
          }
          debug5("pw:test:task")(`created phase #${testRun.phases.length} with ${phase.projects.map((p) => p.project.project.name).sort()} projects, ${testGroupsInPhase} testGroups`);
          maxConcurrentTestGroups = Math.max(maxConcurrentTestGroups, testGroupsInPhase);
        }
      }
      testRun.config.config.metadata.actualWorkers = Math.min(testRun.config.config.workers, maxConcurrentTestGroups);
    }
  };
}
function createRunTestsTask() {
  return {
    title: "test suite",
    setup: async (testRun) => {
      const successfulProjects = /* @__PURE__ */ new Set();
      const extraEnvByProjectId = /* @__PURE__ */ new Map();
      const teardownToSetups = buildTeardownToSetupsMap(testRun.phases.map((phase) => phase.projects.map((p) => p.project)).flat());
      for (const { dispatcher, projects } of testRun.phases) {
        const phaseTestGroups = [];
        for (const { project, testGroups } of projects) {
          let extraEnv = {};
          for (const dep of project.deps)
            extraEnv = { ...extraEnv, ...extraEnvByProjectId.get(dep.id) };
          for (const setup of teardownToSetups.get(project) || [])
            extraEnv = { ...extraEnv, ...extraEnvByProjectId.get(setup.id) };
          extraEnvByProjectId.set(project.id, extraEnv);
          const hasFailedDeps = project.deps.some((p) => !successfulProjects.has(p));
          if (!hasFailedDeps)
            phaseTestGroups.push(...testGroups);
        }
        if (phaseTestGroups.length) {
          await dispatcher.run(phaseTestGroups, extraEnvByProjectId);
          await dispatcher.stop();
          for (const [projectId, envProduced] of dispatcher.producedEnvByProjectId()) {
            const extraEnv = extraEnvByProjectId.get(projectId) || {};
            extraEnvByProjectId.set(projectId, { ...extraEnv, ...envProduced });
          }
        }
        if (!testRun.hasWorkerErrors) {
          for (const { project, projectSuite } of projects) {
            const hasFailedDeps = project.deps.some((p) => !successfulProjects.has(p));
            if (!hasFailedDeps && !projectSuite.allTests().some((test) => !test.ok()))
              successfulProjects.add(project);
          }
        }
      }
    },
    teardown: async ({ phases }) => {
      for (const { dispatcher } of phases.reverse())
        await dispatcher.stop();
    }
  };
}

// packages/playwright/src/runner/lastRun.ts
var import_fs12 = __toESM(require("fs"));
var import_path16 = __toESM(require("path"));
var LastRunReporter = class {
  constructor(filteredProjects, listMode) {
    this._listMode = !!listMode;
    const [project] = filteredProjects;
    if (project)
      this._lastRunFile = import_path16.default.join(project.project.outputDir, ".last-run.json");
  }
  async filterLastFailed() {
    if (!this._lastRunFile)
      return [];
    try {
      const lastRunInfo = JSON.parse(await import_fs12.default.promises.readFile(this._lastRunFile, "utf8"));
      return lastRunInfo.failedTests;
    } catch {
      return [];
    }
  }
  version() {
    return "v2";
  }
  printsToStdio() {
    return false;
  }
  onBegin(suite) {
    this._suite = suite;
  }
  async onEnd(result) {
    if (!this._lastRunFile || this._listMode)
      return;
    const lastRunInfo = {
      status: result.status,
      failedTests: this._suite?.allTests().filter((t2) => !t2.ok()).map((t2) => t2.id) || []
    };
    await import_fs12.default.promises.mkdir(import_path16.default.dirname(this._lastRunFile), { recursive: true });
    await import_fs12.default.promises.writeFile(this._lastRunFile, JSON.stringify(lastRunInfo, void 0, 2));
  }
};

// packages/playwright/src/runner/testRunner.ts
var { ManualPromise: ManualPromise6 } = require("playwright-core/lib/coreBundle").iso;
var { setPlaywrightTestProcessEnv } = require("playwright-core/lib/coreBundle").utils;
var { gracefullyProcessExitDoNotHang: gracefullyProcessExitDoNotHang2 } = require("playwright-core/lib/coreBundle").utils;
var TestRunnerEvent = {
  TestFilesChanged: "testFilesChanged",
  TestPaused: "testPaused"
};
var TestRunner = class extends import_events2.default {
  constructor(configLocation, configCLIOverrides) {
    super();
    this._watchedProjectDirs = /* @__PURE__ */ new Set();
    this._ignoredProjectOutputs = /* @__PURE__ */ new Set();
    this._watchedTestDependencies = /* @__PURE__ */ new Set();
    this._queue = Promise.resolve();
    this._watchTestDirs = false;
    this._populateDependenciesOnList = false;
    this._startingEnv = {};
    this.configLocation = configLocation;
    this._configCLIOverrides = configCLIOverrides;
    this._watcher = new FSWatcher((events) => {
      const collector = /* @__PURE__ */ new Set();
      events.forEach((f) => import_common9.cc.collectAffectedTestFiles(f.file, collector));
      this.emit(TestRunnerEvent.TestFilesChanged, [...collector]);
    });
  }
  async initialize(params) {
    setPlaywrightTestProcessEnv();
    this._watchTestDirs = !!params.watchTestDirs;
    this._populateDependenciesOnList = !!params.populateDependenciesOnList;
    this._startingEnv = { ...process.env };
  }
  resizeTerminal(params) {
    process.stdout.columns = params.cols;
    process.stdout.rows = params.rows;
    process.stderr.columns = params.cols;
    process.stderr.rows = params.rows;
  }
  hasSomeBrowsers() {
    for (const browserName of ["chromium", "webkit", "firefox"]) {
      try {
        import_coreBundle2.registry.registry.findExecutable(browserName).executablePathOrDie("javascript");
        return true;
      } catch {
      }
    }
    return false;
  }
  async installBrowsers() {
    const executables = import_coreBundle2.registry.registry.defaultExecutables();
    await import_coreBundle2.registry.registry.install(executables);
  }
  async loadConfig() {
    const { config: config2, error } = await this._loadConfig(this._configCLIOverrides);
    if (config2)
      return config2;
    throw new Error("Failed to load config: " + (error ? error.message : "Unknown error"));
  }
  async runGlobalSetup(userReporters) {
    await this.runGlobalTeardown();
    const reporter = new InternalReporter(userReporters);
    const config2 = await this._loadConfigOrReportError(reporter, this._configCLIOverrides);
    if (!config2)
      return { status: "failed", env: [] };
    const { status, cleanup } = await runTasksDeferCleanup(new TestRun(config2, reporter), [
      ...createGlobalSetupTasks(config2)
    ]);
    const env = [];
    for (const key of /* @__PURE__ */ new Set([...Object.keys(process.env), ...Object.keys(this._startingEnv)])) {
      if (this._startingEnv[key] !== process.env[key])
        env.push([key, process.env[key] ?? null]);
    }
    if (status !== "passed")
      await cleanup();
    else
      this._globalSetup = { cleanup };
    return { status, env };
  }
  async runGlobalTeardown() {
    const globalSetup = this._globalSetup;
    const status = await globalSetup?.cleanup();
    this._globalSetup = void 0;
    return { status };
  }
  async clearCache(userReporter) {
    const reporter = new InternalReporter(userReporter ? [userReporter] : []);
    const config2 = await this._loadConfigOrReportError(reporter);
    if (!config2)
      return { status: "failed" };
    const status = await runTasks(new TestRun(config2, reporter), [
      ...createPluginSetupTasks(config2),
      createClearCacheTask(config2)
    ]);
    return { status };
  }
  async listFiles(userReporter, projects) {
    const reporter = new InternalReporter([userReporter]);
    const config2 = await this._loadConfigOrReportError(reporter);
    if (!config2)
      return { status: "failed" };
    const options = { projectFilter: projects?.length ? projects : void 0 };
    const status = await runTasks(new TestRun(config2, reporter, options), [
      createListFilesTask(),
      createReportBeginTask()
    ]);
    return { status };
  }
  async listTests(userReporter, params) {
    let result;
    this._queue = this._queue.then(async () => {
      const { config: config2, status } = await this._innerListTests(userReporter, params);
      if (config2)
        await this._updateWatchedDirs(config2);
      result = { status };
    }).catch(printInternalError);
    await this._queue;
    return result;
  }
  async _innerListTests(userReporter, params) {
    const overrides = {
      ...this._configCLIOverrides,
      repeatEach: 1,
      retries: 0
    };
    const reporter = new InternalReporter([userReporter]);
    const config2 = await this._loadConfigOrReportError(reporter, overrides);
    if (!config2)
      return { status: "failed" };
    const options = {
      locations: params.locations?.length ? params.locations : void 0,
      grep: params.grep,
      grepInvert: params.grepInvert,
      projectFilter: params.projects?.length ? params.projects : void 0,
      onlyChanged: params.onlyChanged ? "HEAD" : void 0,
      listMode: true
    };
    const status = await runTasks(new TestRun(config2, reporter, options), [
      createLoadTask("out-of-process", { failOnLoadErrors: false, filterOnly: false, populateDependencies: this._populateDependenciesOnList }),
      createReportBeginTask()
    ]);
    return { config: config2, status };
  }
  async _updateWatchedDirs(config2) {
    this._watchedProjectDirs = /* @__PURE__ */ new Set();
    this._ignoredProjectOutputs = /* @__PURE__ */ new Set();
    for (const p of config2.projects) {
      this._watchedProjectDirs.add(p.project.testDir);
      this._ignoredProjectOutputs.add(p.project.outputDir);
    }
    const result = await resolveCtDirs(config2);
    if (result) {
      this._watchedProjectDirs.add(result.templateDir);
      this._ignoredProjectOutputs.add(result.outDir);
    }
    if (this._watchTestDirs)
      await this._updateWatcher(false);
  }
  async _updateWatcher(reportPending) {
    await this._watcher.update([...this._watchedProjectDirs, ...this._watchedTestDependencies], [...this._ignoredProjectOutputs], reportPending);
  }
  async runTests(userReporter, params) {
    let result = { status: "passed" };
    this._queue = this._queue.then(async () => {
      result = await this._innerRunTests(userReporter, params).catch((e) => {
        printInternalError(e);
        return { status: "failed" };
      });
    });
    await this._queue;
    return result;
  }
  async _innerRunTests(userReporter, params) {
    await this.stopTests();
    const overrides = {
      ...this._configCLIOverrides,
      repeatEach: 1,
      retries: 0,
      timeout: params.timeout,
      reporter: params.reporters ? params.reporters.map((r) => [r]) : void 0,
      use: {
        ...this._configCLIOverrides.use,
        ...params.trace === "on" ? { trace: { mode: "on", sources: false, live: true } } : {},
        ...params.trace === "off" ? { trace: "off" } : {},
        ...params.video === "on" || params.video === "off" ? { video: params.video } : {},
        ...params.headed !== void 0 ? { headless: !params.headed } : {},
        _optionContextReuseMode: params.reuseContext ? "when-possible" : void 0,
        _optionConnectOptions: params.connectWsEndpoint ? { wsEndpoint: params.connectWsEndpoint } : void 0,
        actionTimeout: params.actionTimeout
      },
      ...params.updateSnapshots ? { updateSnapshots: params.updateSnapshots } : {},
      ...params.updateSourceMethod ? { updateSourceMethod: params.updateSourceMethod } : {},
      ...params.workers ? { workers: params.workers } : {}
    };
    const config2 = await this._loadConfigOrReportError(new InternalReporter([userReporter]), overrides);
    if (!config2)
      return { status: "failed" };
    const options = {
      passWithNoTests: true,
      locations: params.locations?.length ? params.locations : void 0,
      grep: params.grep,
      grepInvert: params.grepInvert,
      projectFilter: params.projects?.length ? params.projects : void 0,
      pauseOnError: params.pauseOnError,
      pauseAtEnd: params.pauseAtEnd,
      preserveOutputDir: true,
      onTestPaused: (params2) => this.emit(TestRunnerEvent.TestPaused, params2)
    };
    const configReporters = params.disableConfigReporters ? [] : await createReporters(config2, "test", void 0, options);
    const reporter = new InternalReporter([...configReporters, userReporter]);
    const stop = new ManualPromise6();
    const testRun = new TestRun(config2, reporter, options);
    if (params.testIds) {
      const testIdSet = new Set(params.testIds);
      testRun.preOnlyTestFilters.push((test) => testIdSet.has(test.id));
    }
    const tasks = [
      createApplyRebaselinesTask(),
      createLoadTask("out-of-process", { filterOnly: true, failOnLoadErrors: !!params.failOnLoadErrors, doNotRunDepsOutsideProjectFilter: params.doNotRunDepsOutsideProjectFilter }),
      ...createRunTestsTasks(config2)
    ];
    const run = runTasks(testRun, tasks, 0, stop).then(async (status) => {
      this._testRun = void 0;
      return status;
    });
    this._testRun = { run, stop };
    return { status: await run };
  }
  async watch(fileNames) {
    this._watchedTestDependencies = /* @__PURE__ */ new Set();
    for (const fileName of fileNames) {
      this._watchedTestDependencies.add(fileName);
      import_common9.cc.dependenciesForTestFile(fileName).forEach((file) => this._watchedTestDependencies.add(file));
    }
    await this._updateWatcher(true);
  }
  async findRelatedTestFiles(files, userReporter) {
    const errorReporter = createErrorCollectingReporter(internalScreen);
    const reporter = new InternalReporter(userReporter ? [userReporter, errorReporter] : [errorReporter]);
    const config2 = await this._loadConfigOrReportError(reporter);
    if (!config2)
      return { errors: errorReporter.errors(), testFiles: [] };
    const status = await runTasks(new TestRun(config2, reporter), [
      ...createPluginSetupTasks(config2),
      createLoadTask("out-of-process", { failOnLoadErrors: true, filterOnly: false, populateDependencies: true })
    ]);
    if (status !== "passed")
      return { errors: errorReporter.errors(), testFiles: [] };
    return { testFiles: import_common9.cc.affectedTestFiles(files) };
  }
  async stopTests() {
    this._testRun?.stop?.resolve();
    await this._testRun?.run;
  }
  async closeGracefully() {
    gracefullyProcessExitDoNotHang2(0);
  }
  async stop() {
    await this.runGlobalTeardown();
  }
  async _loadConfig(overrides) {
    try {
      const config2 = await import_common9.configLoader.loadConfig(this.configLocation, overrides);
      if (!this._plugins) {
        webServerPluginsForConfig(config2).forEach((p) => config2.plugins.push({ factory: p }));
        addGitCommitInfoPlugin(config2);
        this._plugins = config2.plugins || [];
      } else {
        config2.plugins.splice(0, config2.plugins.length, ...this._plugins);
      }
      return { config: config2 };
    } catch (e) {
      return { config: null, error: (0, import_util13.serializeError)(e) };
    }
  }
  async _loadConfigOrReportError(reporter, overrides) {
    const { config: config2, error } = await this._loadConfig(overrides);
    if (config2)
      return config2;
    reporter.onConfigure(baseFullConfig);
    reporter.onError(error);
    await reporter.onEnd({ status: "failed" });
    await reporter.onExit();
    return null;
  }
};
function printInternalError(e) {
  console.error("Internal error:", e);
}
async function resolveCtDirs(config2) {
  const use = config2.config.projects[0].use;
  const relativeTemplateDir = use.ctTemplateDir || "playwright";
  const templateDir = await import_fs13.default.promises.realpath(import_path17.default.normalize(import_path17.default.join(config2.configDir, relativeTemplateDir))).catch(() => void 0);
  if (!templateDir)
    return null;
  const outDir = use.ctCacheDir ? import_path17.default.resolve(config2.configDir, use.ctCacheDir) : import_path17.default.resolve(templateDir, ".cache");
  return {
    outDir,
    templateDir
  };
}
async function runAllTestsWithConfig(config2, options) {
  setPlaywrightTestProcessEnv();
  addGitCommitInfoPlugin(config2);
  webServerPluginsForConfig(config2).forEach((p) => config2.plugins.push({ factory: p }));
  const filteredProjects = filterProjects(config2.projects, options.projectFilter);
  const reporters = await createReporters(config2, options.listMode ? "list" : "test", void 0, options);
  const lastRun = new LastRunReporter(filteredProjects, options.listMode);
  if (options.lastFailed) {
    const lastFailedTestIds = await lastRun.filterLastFailed();
    if (lastFailedTestIds.length)
      options = { ...options, lastFailedTestIds };
  }
  const reporter = new InternalReporter([...reporters, lastRun]);
  const tasks = options.listMode ? [
    createLoadTask("in-process", { failOnLoadErrors: true, filterOnly: false }),
    createReportBeginTask()
  ] : [
    createApplyRebaselinesTask(),
    ...createGlobalSetupTasks(config2),
    createLoadTask("in-process", { filterOnly: true, failOnLoadErrors: true }),
    ...createRunTestsTasks(config2)
  ];
  const testRun = new TestRun(config2, reporter, { ...options, pauseAtEnd: config2.configCLIOverrides.pause, pauseOnError: config2.configCLIOverrides.pause });
  const status = await runTasks(testRun, tasks, config2.config.globalTimeout);
  await new Promise((resolve) => process.stdout.write("", () => resolve()));
  await new Promise((resolve) => process.stderr.write("", () => resolve()));
  return status;
}

// packages/playwright/src/runner/testServer.ts
var testServer_exports = {};
__export(testServer_exports, {
  TestServerDispatcher: () => TestServerDispatcher,
  runTestServer: () => runTestServer,
  runUIMode: () => runUIMode
});
var import_util14 = __toESM(require("util"));
var import_coreBundle3 = require("playwright-core/lib/coreBundle");
var import_common10 = require("../common");

// packages/playwright/src/runner/uiModeReporter.ts
var UIModeReporter = class extends TeleReporterEmitter {
  constructor(options) {
    super(options._send, { omitBuffers: true });
  }
};
var uiModeReporter_default = UIModeReporter;

// packages/playwright/src/runner/testServer.ts
var debug6 = require("playwright-core/lib/utilsBundle").debug;
var open2 = require("playwright-core/lib/utilsBundle").open;
var { ManualPromise: ManualPromise7 } = require("playwright-core/lib/coreBundle").iso;
var { isUnderTest } = require("playwright-core/lib/coreBundle").utils;
var { HttpServer: HttpServer2 } = require("playwright-core/lib/coreBundle").utils;
var { gracefullyProcessExitDoNotHang: gracefullyProcessExitDoNotHang3 } = require("playwright-core/lib/coreBundle").utils;
var originalDebugLog = debug6.log;
var originalStdoutWrite = process.stdout.write;
var originalStderrWrite = process.stderr.write;
var originalStdinIsTTY = process.stdin.isTTY;
var TestServer = class {
  constructor(configLocation, configCLIOverrides) {
    this._configLocation = configLocation;
    this._configCLIOverrides = configCLIOverrides;
  }
  async start(options) {
    this._dispatcher = new TestServerDispatcher(this._configLocation, this._configCLIOverrides);
    return await import_coreBundle3.server.startTraceViewerServer({ ...options, transport: this._dispatcher.transport });
  }
  async stop() {
    await this._dispatcher?.stop();
  }
};
var TestServerDispatcher = class {
  constructor(configLocation, configCLIOverrides) {
    this._closeOnDisconnect = false;
    this._testRunner = new TestRunner(configLocation, configCLIOverrides);
    this.transport = {
      onconnect: () => {
      },
      dispatch: (method, params) => this[method](params),
      onclose: () => {
        if (this._closeOnDisconnect)
          gracefullyProcessExitDoNotHang3(0);
      }
    };
    this._dispatchEvent = (method, params) => this.transport.sendEvent?.(method, params);
    this._testRunner.on(TestRunnerEvent.TestFilesChanged, (testFiles) => this._dispatchEvent("testFilesChanged", { testFiles }));
    this._testRunner.on(TestRunnerEvent.TestPaused, (params) => this._dispatchEvent("testPaused", { errors: params.errors }));
  }
  async _wireReporter(messageSink) {
    return await createReporterForTestServer(this._serializer, messageSink);
  }
  async _collectingReporter() {
    const report = [];
    return {
      reporter: await createReporterForTestServer(this._serializer, (e) => report.push(e)),
      report
    };
  }
  async initialize(params) {
    this._serializer = params.serializer;
    this._closeOnDisconnect = !!params.closeOnDisconnect;
    await this._testRunner.initialize({
      ...params
    });
    this._setInterceptStdio(!!params.interceptStdio);
  }
  async ping() {
  }
  async open(params) {
    if (isUnderTest())
      return;
    open2("vscode://file/" + params.location.file + ":" + params.location.line).catch((e) => console.error(e));
  }
  async resizeTerminal(params) {
    this._testRunner.resizeTerminal(params);
  }
  async checkBrowsers() {
    return { hasBrowsers: this._testRunner.hasSomeBrowsers() };
  }
  async installBrowsers() {
    await this._testRunner.installBrowsers();
  }
  async runGlobalSetup(params) {
    const { reporter, report } = await this._collectingReporter();
    this._globalSetupReport = report;
    const { status, env } = await this._testRunner.runGlobalSetup([reporter, new list_default()]);
    return { report, status, env };
  }
  async runGlobalTeardown() {
    const { status } = await this._testRunner.runGlobalTeardown();
    const report = this._globalSetupReport || [];
    this._globalSetupReport = void 0;
    return { status, report };
  }
  async clearCache(params) {
    await this._testRunner.clearCache();
  }
  async listFiles(params) {
    const { reporter, report } = await this._collectingReporter();
    const { status } = await this._testRunner.listFiles(reporter, params.projects);
    return { report, status };
  }
  async listTests(params) {
    const { reporter, report } = await this._collectingReporter();
    const { status } = await this._testRunner.listTests(reporter, params);
    return { report, status };
  }
  async runTests(params) {
    const wireReporter = await this._wireReporter((e) => this._dispatchEvent("report", e));
    const { status } = await this._testRunner.runTests(wireReporter, {
      ...params,
      doNotRunDepsOutsideProjectFilter: true,
      pauseAtEnd: params.pauseAtEnd,
      pauseOnError: params.pauseOnError
    });
    return { status };
  }
  async watch(params) {
    await this._testRunner.watch(params.fileNames);
  }
  async findRelatedTestFiles(params) {
    return this._testRunner.findRelatedTestFiles(params.files);
  }
  async stopTests() {
    await this._testRunner.stopTests();
  }
  async stop() {
    this._setInterceptStdio(false);
    await this._testRunner.stop();
  }
  async closeGracefully() {
    await this._testRunner.closeGracefully();
  }
  _setInterceptStdio(interceptStdio) {
    if (process.env.PWTEST_DEBUG)
      return;
    if (interceptStdio) {
      if (debug6.log === originalDebugLog) {
        debug6.log = (...args) => {
          const string = import_util14.default.format(...args) + "\n";
          return originalStderrWrite.apply(process.stderr, [string]);
        };
      }
      const stdoutWrite = (chunk) => {
        this._dispatchEvent("stdio", chunkToPayload("stdout", chunk));
        return true;
      };
      const stderrWrite = (chunk) => {
        this._dispatchEvent("stdio", chunkToPayload("stderr", chunk));
        return true;
      };
      process.stdout.write = stdoutWrite;
      process.stderr.write = stderrWrite;
      process.stdin.isTTY = void 0;
    } else {
      debug6.log = originalDebugLog;
      process.stdout.write = originalStdoutWrite;
      process.stderr.write = originalStderrWrite;
      process.stdin.isTTY = originalStdinIsTTY;
    }
  }
};
async function runUIMode(configFile, configCLIOverrides, options) {
  const configLocation = import_common10.configLoader.resolveConfigLocation(configFile);
  return await innerRunTestServer(configLocation, configCLIOverrides, options, async (server, cancelPromise) => {
    await import_coreBundle3.server.installRootRedirect(server, void 0, { ...options, webApp: "uiMode.html" });
    if (options.host !== void 0 || options.port !== void 0) {
      await import_coreBundle3.server.openTraceInBrowser(server.urlPrefix("human-readable"));
    } else {
      const channel = await installedChromiumChannelForUI(configLocation, configCLIOverrides);
      const page = await import_coreBundle3.server.openTraceViewerApp(server.urlPrefix("precise"), "chromium", {
        headless: isUnderTest() && process.env.PWTEST_HEADED_FOR_TEST !== "1",
        persistentContextOptions: {
          handleSIGINT: false,
          channel
        }
      });
      page.on("close", () => cancelPromise.resolve());
    }
  });
}
async function installedChromiumChannelForUI(configLocation, configCLIOverrides) {
  const config2 = await import_common10.configLoader.loadConfig(configLocation, configCLIOverrides).catch((e) => null);
  if (!config2)
    return void 0;
  if (config2.projects.some((p) => (!p.project.use.browserName || p.project.use.browserName === "chromium") && !p.project.use.channel))
    return void 0;
  for (const channel of ["chromium", "chrome", "msedge"]) {
    if (config2.projects.some((p) => p.project.use.channel === channel))
      return channel;
  }
  return void 0;
}
async function runTestServer(configFile, configCLIOverrides, options) {
  const configLocation = import_common10.configLoader.resolveConfigLocation(configFile);
  return await innerRunTestServer(configLocation, configCLIOverrides, options, async (server) => {
    console.log("Listening on " + server.urlPrefix("precise").replace("http:", "ws:") + "/" + server.wsGuid());
  });
}
async function innerRunTestServer(configLocation, configCLIOverrides, options, openUI) {
  const testServer = new TestServer(configLocation, configCLIOverrides);
  const cancelPromise = new ManualPromise7();
  const sigintWatcher = new SigIntWatcher();
  process.stdin.on("close", () => gracefullyProcessExitDoNotHang3(0));
  void sigintWatcher.promise().then(() => cancelPromise.resolve());
  try {
    const server = await testServer.start(options);
    await openUI(server, cancelPromise);
    await cancelPromise;
  } finally {
    await testServer.stop();
    sigintWatcher.disarm();
  }
  return sigintWatcher.hadSignal() ? "interrupted" : "passed";
}
function chunkToPayload(type, chunk) {
  if (chunk instanceof Uint8Array)
    return { type, buffer: chunk.toString("base64") };
  return { type, text: chunk };
}
async function createReporterForTestServer(file, messageSink) {
  const reporterConstructor = file ? await loadReporter(null, file) : uiModeReporter_default;
  return wrapReporterAsV2(new reporterConstructor({
    _send: messageSink
  }));
}

// packages/playwright/src/runner/watchMode.ts
var watchMode_exports = {};
__export(watchMode_exports, {
  runWatchModeLoop: () => runWatchModeLoop
});
var import_path18 = __toESM(require("path"));
var import_readline = __toESM(require("readline"));
var import_stream3 = require("stream");
var import_coreBundle4 = require("playwright-core/lib/coreBundle");

// packages/playwright/src/isomorphic/testTree.ts
var statusEx = Symbol("statusEx");

// packages/playwright/src/isomorphic/teleSuiteUpdater.ts
var TeleSuiteUpdater = class {
  constructor(options) {
    this.loadErrors = [];
    this.progress = {
      total: 0,
      passed: 0,
      failed: 0,
      skipped: 0
    };
    this._lastRunTestCount = 0;
    this._receiver = new TeleReporterReceiver(this._createReporter(), {
      mergeProjects: true,
      mergeTestCases: true,
      resolvePath: createPathResolve(options.pathSeparator),
      clearPreviousResultsWhenTestBegins: true
    });
    this._options = options;
  }
  _createReporter() {
    return {
      version: () => "v2",
      onConfigure: (config2) => {
        this.config = config2;
        this._lastRunReceiver = new TeleReporterReceiver({
          version: () => "v2",
          onBegin: (suite) => {
            this._lastRunTestCount = suite.allTests().length;
            this._lastRunReceiver = void 0;
          }
        }, {
          mergeProjects: true,
          mergeTestCases: false,
          resolvePath: createPathResolve(this._options.pathSeparator)
        });
        void this._lastRunReceiver.dispatch({ method: "onConfigure", params: { config: config2 } });
      },
      onBegin: (suite) => {
        if (!this.rootSuite)
          this.rootSuite = suite;
        if (this._testResultsSnapshot) {
          for (const test of this.rootSuite.allTests())
            test.results = this._testResultsSnapshot?.get(test.id) || test.results;
          this._testResultsSnapshot = void 0;
        }
        this.progress.total = this._lastRunTestCount;
        this.progress.passed = 0;
        this.progress.failed = 0;
        this.progress.skipped = 0;
        this._options.onUpdate(true);
      },
      onEnd: () => {
        this._options.onUpdate(true);
      },
      onTestBegin: (test, testResult) => {
        testResult[statusEx] = "running";
        this._options.onUpdate();
      },
      onTestEnd: (test, testResult) => {
        if (test.outcome() === "skipped")
          ++this.progress.skipped;
        else if (test.outcome() === "unexpected")
          ++this.progress.failed;
        else
          ++this.progress.passed;
        testResult[statusEx] = testResult.status;
        this._options.onUpdate();
      },
      onError: (error) => this._handleOnError(error),
      printsToStdio: () => false
    };
  }
  processGlobalReport(report) {
    const receiver = new TeleReporterReceiver({
      version: () => "v2",
      onConfigure: (c) => {
        this.config = c;
      },
      onError: (error) => this._handleOnError(error)
    });
    for (const message of report)
      void receiver.dispatch(message);
  }
  processListReport(report) {
    const tests = this.rootSuite?.allTests() || [];
    this._testResultsSnapshot = new Map(tests.map((test) => [test.id, test.results]));
    this._receiver.reset();
    for (const message of report)
      void this._receiver.dispatch(message);
  }
  processTestReportEvent(message) {
    this._lastRunReceiver?.dispatch(message)?.catch(() => {
    });
    this._receiver.dispatch(message)?.catch(() => {
    });
  }
  _handleOnError(error) {
    this.loadErrors.push(error);
    this._options.onError?.(error);
    this._options.onUpdate();
  }
  asModel() {
    return {
      rootSuite: this.rootSuite || new TeleSuite("", "root"),
      config: this.config,
      loadErrors: this.loadErrors,
      progress: this.progress
    };
  }
};
function createPathResolve(pathSeparator) {
  return (rootDir, relativePath) => {
    const segments = [];
    for (const segment of [...rootDir.split(pathSeparator), ...relativePath.split(pathSeparator)]) {
      const isAfterDrive = pathSeparator === "\\" && segments.length === 1 && segments[0].endsWith(":");
      const isFirst = !segments.length;
      if (!segment && !isFirst && !isAfterDrive)
        continue;
      if (segment === ".")
        continue;
      if (segment === "..") {
        segments.pop();
        continue;
      }
      segments.push(segment);
    }
    return segments.join(pathSeparator);
  };
}

// packages/playwright/src/isomorphic/events.ts
var Disposable;
((Disposable2) => {
  function disposeAll(disposables) {
    for (const disposable of disposables.splice(0))
      disposable.dispose();
  }
  Disposable2.disposeAll = disposeAll;
})(Disposable || (Disposable = {}));
var EventEmitter3 = class {
  constructor() {
    this._listeners = /* @__PURE__ */ new Set();
    this.event = (listener, disposables) => {
      this._listeners.add(listener);
      let disposed = false;
      const self = this;
      const result = {
        dispose() {
          if (!disposed) {
            disposed = true;
            self._listeners.delete(listener);
          }
        }
      };
      if (disposables)
        disposables.push(result);
      return result;
    };
  }
  fire(event) {
    const dispatch = !this._deliveryQueue;
    if (!this._deliveryQueue)
      this._deliveryQueue = [];
    for (const listener of this._listeners)
      this._deliveryQueue.push({ listener, event });
    if (!dispatch)
      return;
    for (let index = 0; index < this._deliveryQueue.length; index++) {
      const { listener, event: event2 } = this._deliveryQueue[index];
      listener.call(null, event2);
    }
    this._deliveryQueue = void 0;
  }
  dispose() {
    this._listeners.clear();
    if (this._deliveryQueue)
      this._deliveryQueue = [];
  }
};

// packages/playwright/src/isomorphic/testServerConnection.ts
var TestServerConnectionClosedError = class extends Error {
};
var TestServerConnection = class {
  constructor(transport) {
    this._onCloseEmitter = new EventEmitter3();
    this._onReportEmitter = new EventEmitter3();
    this._onStdioEmitter = new EventEmitter3();
    this._onTestFilesChangedEmitter = new EventEmitter3();
    this._onLoadTraceRequestedEmitter = new EventEmitter3();
    this._onTestPausedEmitter = new EventEmitter3();
    this._lastId = 0;
    this._callbacks = /* @__PURE__ */ new Map();
    this._isClosed = false;
    this.onClose = this._onCloseEmitter.event;
    this.onReport = this._onReportEmitter.event;
    this.onStdio = this._onStdioEmitter.event;
    this.onTestFilesChanged = this._onTestFilesChangedEmitter.event;
    this.onLoadTraceRequested = this._onLoadTraceRequestedEmitter.event;
    this.onTestPaused = this._onTestPausedEmitter.event;
    this._transport = transport;
    this._transport.onmessage((data) => {
      const message = JSON.parse(data);
      const { id, result, error, method, params } = message;
      if (id) {
        const callback = this._callbacks.get(id);
        if (!callback)
          return;
        this._callbacks.delete(id);
        if (error)
          callback.reject(new Error(error));
        else
          callback.resolve(result);
      } else {
        this._dispatchEvent(method, params);
      }
    });
    const pingInterval = setInterval(() => this._sendMessage("ping").catch(() => {
    }), 3e4);
    this._connectedPromise = new Promise((f, r) => {
      this._transport.onopen(f);
      this._transport.onerror(r);
    });
    this._transport.onclose(() => {
      this._isClosed = true;
      this._onCloseEmitter.fire();
      clearInterval(pingInterval);
      for (const callback of this._callbacks.values())
        callback.reject(callback.error);
      this._callbacks.clear();
    });
  }
  isClosed() {
    return this._isClosed;
  }
  async _sendMessage(method, params) {
    const logForTest = globalThis.__logForTest;
    logForTest?.({ method, params });
    await this._connectedPromise;
    const id = ++this._lastId;
    const message = { id, method, params };
    const error = new TestServerConnectionClosedError(`${method}: test server connection closed`);
    this._transport.send(JSON.stringify(message));
    return new Promise((resolve, reject) => {
      this._callbacks.set(id, { resolve, reject, error });
    });
  }
  _sendMessageNoReply(method, params) {
    this._sendMessage(method, params).catch(() => {
    });
  }
  _dispatchEvent(method, params) {
    if (method === "report")
      this._onReportEmitter.fire(params);
    else if (method === "stdio")
      this._onStdioEmitter.fire(params);
    else if (method === "testFilesChanged")
      this._onTestFilesChangedEmitter.fire(params);
    else if (method === "loadTraceRequested")
      this._onLoadTraceRequestedEmitter.fire(params);
    else if (method === "testPaused")
      this._onTestPausedEmitter.fire(params);
  }
  async initialize(params) {
    await this._sendMessage("initialize", params);
  }
  async ping(params) {
    await this._sendMessage("ping", params);
  }
  async pingNoReply(params) {
    this._sendMessageNoReply("ping", params);
  }
  async watch(params) {
    await this._sendMessage("watch", params);
  }
  watchNoReply(params) {
    this._sendMessageNoReply("watch", params);
  }
  async open(params) {
    await this._sendMessage("open", params);
  }
  openNoReply(params) {
    this._sendMessageNoReply("open", params);
  }
  async resizeTerminal(params) {
    await this._sendMessage("resizeTerminal", params);
  }
  resizeTerminalNoReply(params) {
    this._sendMessageNoReply("resizeTerminal", params);
  }
  async checkBrowsers(params) {
    return await this._sendMessage("checkBrowsers", params);
  }
  async installBrowsers(params) {
    await this._sendMessage("installBrowsers", params);
  }
  async runGlobalSetup(params) {
    return await this._sendMessage("runGlobalSetup", params);
  }
  async runGlobalTeardown(params) {
    return await this._sendMessage("runGlobalTeardown", params);
  }
  async clearCache(params) {
    return await this._sendMessage("clearCache", params);
  }
  async listFiles(params) {
    return await this._sendMessage("listFiles", params);
  }
  async listTests(params) {
    return await this._sendMessage("listTests", params);
  }
  async runTests(params) {
    return await this._sendMessage("runTests", params);
  }
  async findRelatedTestFiles(params) {
    return await this._sendMessage("findRelatedTestFiles", params);
  }
  async stopTests(params) {
    await this._sendMessage("stopTests", params);
  }
  stopTestsNoReply(params) {
    this._sendMessageNoReply("stopTests", params);
  }
  async closeGracefully(params) {
    await this._sendMessage("closeGracefully", params);
  }
  close() {
    try {
      this._transport.close();
    } catch {
    }
  }
};

// packages/playwright/src/runner/watchMode.ts
var colors6 = require("playwright-core/lib/utilsBundle").colors;
var enquirer = require("playwright-core/lib/utilsBundle").enquirer;
var { ManualPromise: ManualPromise8 } = require("playwright-core/lib/coreBundle").iso;
var { createGuid: createGuid3 } = require("playwright-core/lib/coreBundle").utils;
var { getPackageManagerExecCommand: getPackageManagerExecCommand3 } = require("playwright-core/lib/coreBundle").utils;
var { eventsHelper: eventsHelper2 } = require("playwright-core/lib/coreBundle").utils;
var InMemoryTransport = class extends import_stream3.EventEmitter {
  constructor(send) {
    super();
    this._send = send;
  }
  close() {
    this.emit("close");
  }
  onclose(listener) {
    this.on("close", listener);
  }
  onerror(listener) {
  }
  onmessage(listener) {
    this.on("message", listener);
  }
  onopen(listener) {
    this.on("open", listener);
  }
  send(data) {
    this._send(data);
  }
};
async function runWatchModeLoop(configLocation, initialOptions) {
  const options = { ...initialOptions };
  let bufferMode = false;
  const testServerDispatcher = new TestServerDispatcher(configLocation, {});
  const transport = new InMemoryTransport(
    async (data) => {
      const { id, method, params } = JSON.parse(data);
      try {
        const result2 = await testServerDispatcher.transport.dispatch(method, params);
        transport.emit("message", JSON.stringify({ id, result: result2 }));
      } catch (e) {
        transport.emit("message", JSON.stringify({ id, error: String(e) }));
      }
    }
  );
  testServerDispatcher.transport.sendEvent = (method, params) => {
    transport.emit("message", JSON.stringify({ method, params }));
  };
  const testServerConnection = new TestServerConnection(transport);
  transport.emit("open");
  const teleSuiteUpdater = new TeleSuiteUpdater({ pathSeparator: import_path18.default.sep, onUpdate() {
  } });
  const dirtyTestFiles = /* @__PURE__ */ new Set();
  const dirtyTestIds = /* @__PURE__ */ new Set();
  let onDirtyTests = new ManualPromise8();
  let queue = Promise.resolve();
  const changedFiles = /* @__PURE__ */ new Set();
  testServerConnection.onTestFilesChanged(({ testFiles }) => {
    testFiles.forEach((file) => changedFiles.add(file));
    queue = queue.then(async () => {
      if (changedFiles.size === 0)
        return;
      const { report: report2 } = await testServerConnection.listTests({ locations: options.files, projects: options.projects, grep: options.grep });
      teleSuiteUpdater.processListReport(report2);
      for (const test of teleSuiteUpdater.rootSuite.allTests()) {
        if (changedFiles.has(test.location.file)) {
          dirtyTestFiles.add(test.location.file);
          dirtyTestIds.add(test.id);
        }
      }
      changedFiles.clear();
      if (dirtyTestIds.size > 0) {
        onDirtyTests.resolve("changed");
        onDirtyTests = new ManualPromise8();
      }
    });
  });
  testServerConnection.onReport((report2) => teleSuiteUpdater.processTestReportEvent(report2));
  await testServerConnection.initialize({
    interceptStdio: false,
    watchTestDirs: true,
    populateDependenciesOnList: true
  });
  await testServerConnection.runGlobalSetup({});
  const { report } = await testServerConnection.listTests({});
  teleSuiteUpdater.processListReport(report);
  const projectNames = teleSuiteUpdater.rootSuite.suites.map((s) => s.title);
  let lastRun = { type: "regular" };
  let result = "passed";
  while (true) {
    if (bufferMode)
      printBufferPrompt(dirtyTestFiles, teleSuiteUpdater.config.rootDir);
    else
      printPrompt();
    const waitForCommand = readCommand();
    const command = await Promise.race([
      onDirtyTests,
      waitForCommand.result
    ]);
    if (command === "changed")
      waitForCommand.dispose();
    if (bufferMode && command === "changed")
      continue;
    const shouldRunChangedFiles = bufferMode ? command === "run" : command === "changed";
    if (shouldRunChangedFiles) {
      if (dirtyTestIds.size === 0)
        continue;
      const testIds = [...dirtyTestIds];
      dirtyTestIds.clear();
      dirtyTestFiles.clear();
      await runTests(options, testServerConnection, { testIds, title: "files changed" });
      lastRun = { type: "changed", dirtyTestIds: testIds };
      continue;
    }
    if (command === "run") {
      await runTests(options, testServerConnection);
      lastRun = { type: "regular" };
      continue;
    }
    if (command === "project") {
      const { selectedProjects } = await enquirer.prompt({
        type: "multiselect",
        name: "selectedProjects",
        message: "Select projects",
        choices: projectNames
      }).catch(() => ({ selectedProjects: null }));
      if (!selectedProjects)
        continue;
      options.projects = selectedProjects.length ? selectedProjects : void 0;
      await runTests(options, testServerConnection);
      lastRun = { type: "regular" };
      continue;
    }
    if (command === "file") {
      const { filePattern } = await enquirer.prompt({
        type: "text",
        name: "filePattern",
        message: "Input filename pattern (regex)"
      }).catch(() => ({ filePattern: null }));
      if (filePattern === null)
        continue;
      if (filePattern.trim())
        options.files = filePattern.split(" ");
      else
        options.files = void 0;
      await runTests(options, testServerConnection);
      lastRun = { type: "regular" };
      continue;
    }
    if (command === "grep") {
      const { testPattern } = await enquirer.prompt({
        type: "text",
        name: "testPattern",
        message: "Input test name pattern (regex)"
      }).catch(() => ({ testPattern: null }));
      if (testPattern === null)
        continue;
      if (testPattern.trim())
        options.grep = testPattern;
      else
        options.grep = void 0;
      await runTests(options, testServerConnection);
      lastRun = { type: "regular" };
      continue;
    }
    if (command === "failed") {
      const failedTestIds = teleSuiteUpdater.rootSuite.allTests().filter((t2) => !t2.ok()).map((t2) => t2.id);
      await runTests({}, testServerConnection, { title: "running failed tests", testIds: failedTestIds });
      lastRun = { type: "failed", failedTestIds };
      continue;
    }
    if (command === "repeat") {
      if (lastRun.type === "regular") {
        await runTests(options, testServerConnection, { title: "re-running tests" });
        continue;
      } else if (lastRun.type === "changed") {
        await runTests(options, testServerConnection, { title: "re-running tests", testIds: lastRun.dirtyTestIds });
      } else if (lastRun.type === "failed") {
        await runTests({}, testServerConnection, { title: "re-running tests", testIds: lastRun.failedTestIds });
      }
      continue;
    }
    if (command === "toggle-show-browser") {
      await toggleShowBrowser();
      continue;
    }
    if (command === "toggle-buffer-mode") {
      bufferMode = !bufferMode;
      continue;
    }
    if (command === "exit")
      break;
    if (command === "interrupted") {
      result = "interrupted";
      break;
    }
  }
  const teardown = await testServerConnection.runGlobalTeardown({});
  return result === "passed" ? teardown.status : result;
}
function readKeyPress(handler) {
  const promise = new ManualPromise8();
  const rl = import_readline.default.createInterface({ input: process.stdin, escapeCodeTimeout: 50 });
  import_readline.default.emitKeypressEvents(process.stdin, rl);
  if (process.stdin.isTTY)
    process.stdin.setRawMode(true);
  const listener = eventsHelper2.addEventListener(process.stdin, "keypress", (text, key) => {
    const result = handler(text, key);
    if (result)
      promise.resolve(result);
  });
  const dispose = () => {
    eventsHelper2.removeEventListeners([listener]);
    rl.close();
    if (process.stdin.isTTY)
      process.stdin.setRawMode(false);
  };
  void promise.finally(dispose);
  return { result: promise, dispose };
}
var isInterrupt = (text, key) => text === "" || text === "\x1B" || key && key.name === "escape" || key && key.ctrl && key.name === "c";
async function runTests(watchOptions, testServerConnection, options) {
  printConfiguration(watchOptions, options?.title);
  const waitForDone = readKeyPress((text, key) => {
    if (isInterrupt(text, key)) {
      testServerConnection.stopTestsNoReply({});
      return "done";
    }
  });
  await testServerConnection.runTests({
    grep: watchOptions.grep,
    testIds: options?.testIds,
    locations: watchOptions?.files ?? [],
    // TODO: always collect locations based on knowledge about tree, so that we don't have to load all tests
    projects: watchOptions.projects,
    connectWsEndpoint,
    reuseContext: connectWsEndpoint ? true : void 0,
    workers: connectWsEndpoint ? 1 : void 0,
    headed: connectWsEndpoint ? true : void 0
  }).finally(() => waitForDone.dispose());
}
function readCommand() {
  return readKeyPress((text, key) => {
    if (isInterrupt(text, key))
      return "interrupted";
    if (process.platform !== "win32" && key && key.ctrl && key.name === "z") {
      process.kill(process.ppid, "SIGTSTP");
      process.kill(process.pid, "SIGTSTP");
    }
    const name = key?.name;
    if (name === "q")
      return "exit";
    if (name === "h") {
      process.stdout.write(`${separator(terminalScreen)}
Run tests
  ${colors6.bold("enter")}    ${colors6.dim("run tests")}
  ${colors6.bold("f")}        ${colors6.dim("run failed tests")}
  ${colors6.bold("r")}        ${colors6.dim("repeat last run")}
  ${colors6.bold("q")}        ${colors6.dim("quit")}

Change settings
  ${colors6.bold("c")}        ${colors6.dim("set project")}
  ${colors6.bold("p")}        ${colors6.dim("set file filter")}
  ${colors6.bold("t")}        ${colors6.dim("set title filter")}
  ${colors6.bold("s")}        ${colors6.dim("toggle show & reuse the browser")}
  ${colors6.bold("b")}        ${colors6.dim("toggle buffer mode")}
`);
      return;
    }
    switch (name) {
      case "return":
        return "run";
      case "r":
        return "repeat";
      case "c":
        return "project";
      case "p":
        return "file";
      case "t":
        return "grep";
      case "f":
        return "failed";
      case "s":
        return "toggle-show-browser";
      case "b":
        return "toggle-buffer-mode";
    }
  });
}
var showBrowserServer;
var connectWsEndpoint = void 0;
var seq = 1;
function printConfiguration(options, title) {
  const packageManagerCommand = getPackageManagerExecCommand3();
  const tokens = [];
  tokens.push(`${packageManagerCommand} playwright test`);
  if (options.projects)
    tokens.push(...options.projects.map((p) => colors6.blue(`--project ${p}`)));
  if (options.grep)
    tokens.push(colors6.red(`--grep ${options.grep}`));
  if (options.files)
    tokens.push(...options.files.map((a) => colors6.bold(a)));
  if (title)
    tokens.push(colors6.dim(`(${title})`));
  tokens.push(colors6.dim(`#${seq++}`));
  const lines = [];
  const sep = separator(terminalScreen);
  lines.push("\x1Bc" + sep);
  lines.push(`${tokens.join(" ")}`);
  lines.push(`${colors6.dim("Show & reuse browser:")} ${colors6.bold(showBrowserServer ? "on" : "off")}`);
  process.stdout.write(lines.join("\n"));
}
function printBufferPrompt(dirtyTestFiles, rootDir) {
  const sep = separator(terminalScreen);
  process.stdout.write("\x1Bc");
  process.stdout.write(`${sep}
`);
  if (dirtyTestFiles.size === 0) {
    process.stdout.write(`${colors6.dim("Waiting for file changes. Press")} ${colors6.bold("q")} ${colors6.dim("to quit or")} ${colors6.bold("h")} ${colors6.dim("for more options.")}

`);
    return;
  }
  process.stdout.write(`${colors6.dim(`${dirtyTestFiles.size} test ${dirtyTestFiles.size === 1 ? "file" : "files"} changed:`)}

`);
  for (const file of dirtyTestFiles)
    process.stdout.write(` \xB7 ${import_path18.default.relative(rootDir, file)}
`);
  process.stdout.write(`
${colors6.dim(`Press`)} ${colors6.bold("enter")} ${colors6.dim("to run")}, ${colors6.bold("q")} ${colors6.dim("to quit or")} ${colors6.bold("h")} ${colors6.dim("for more options.")}

`);
}
function printPrompt() {
  const sep = separator(terminalScreen);
  process.stdout.write(`
${sep}
${colors6.dim("Waiting for file changes. Press")} ${colors6.bold("enter")} ${colors6.dim("to run tests")}, ${colors6.bold("q")} ${colors6.dim("to quit or")} ${colors6.bold("h")} ${colors6.dim("for more options.")}
`);
}
async function toggleShowBrowser() {
  if (!showBrowserServer) {
    showBrowserServer = new import_coreBundle4.remote.PlaywrightServer({ mode: "extension", path: "/" + createGuid3(), maxConnections: 1 });
    connectWsEndpoint = await showBrowserServer.listen();
    process.stdout.write(`${colors6.dim("Show & reuse browser:")} ${colors6.bold("on")}
`);
  } else {
    await showBrowserServer?.close();
    showBrowserServer = void 0;
    connectWsEndpoint = void 0;
    process.stdout.write(`${colors6.dim("Show & reuse browser:")} ${colors6.bold("off")}
`);
  }
}

// packages/playwright/src/reporters/merge.ts
var merge_exports = {};
__export(merge_exports, {
  createMergedReport: () => createMergedReport
});
var import_fs14 = __toESM(require("fs"));
var import_path19 = __toESM(require("path"));

// packages/playwright/src/isomorphic/stringInternPool.ts
var StringInternPool = class {
  constructor() {
    this._stringCache = /* @__PURE__ */ new Map();
  }
  internString(s) {
    let result = this._stringCache.get(s);
    if (!result) {
      this._stringCache.set(s, s);
      result = s;
    }
    return result;
  }
};
var JsonStringInternalizer = class {
  constructor(pool) {
    this._pool = pool;
  }
  traverse(value) {
    if (typeof value !== "object")
      return;
    if (Array.isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        if (typeof value[i] === "string")
          value[i] = this.intern(value[i]);
        else
          this.traverse(value[i]);
      }
    } else {
      for (const name in value) {
        if (typeof value[name] === "string")
          value[name] = this.intern(value[name]);
        else
          this.traverse(value[name]);
      }
    }
  }
  intern(value) {
    return this._pool.internString(value);
  }
};

// packages/playwright/src/reporters/merge.ts
var import_util15 = require("../util");
var { isPathInside } = require("playwright-core/lib/coreBundle").utils;
var { ZipFile } = require("playwright-core/lib/coreBundle").utils;
async function createMergedReport(config2, dir, reporterDescriptions, rootDirOverride) {
  const reporters = await createReporters(config2, "merge", reporterDescriptions);
  const multiplexer = new Multiplexer(reporters);
  const stringPool = new StringInternPool();
  let printStatus = () => {
  };
  if (!multiplexer.printsToStdio()) {
    printStatus = printStatusToStdout;
    printStatus(`merging reports from ${dir}`);
  }
  const shardFiles = await sortedShardFiles(dir);
  if (shardFiles.length === 0)
    throw new Error(`No report files found in ${dir}`);
  const eventData = await mergeEvents(dir, shardFiles, stringPool, printStatus, rootDirOverride);
  const pathSeparator = rootDirOverride ? import_path19.default.sep : eventData.pathSeparatorFromMetadata ?? import_path19.default.sep;
  const pathPackage = pathSeparator === "/" ? import_path19.default.posix : import_path19.default.win32;
  const receiver = new TeleReporterReceiver(multiplexer, {
    mergeProjects: false,
    mergeTestCases: false,
    // When merging on a different OS, an absolute path like `C:\foo\bar` from win may look like
    // a relative path on posix, and vice versa.
    // Therefore, we cannot use `path.resolve()` here - it will resolve relative-looking paths
    // against `process.cwd()`, while we just want to normalize ".." and "." segments.
    resolvePath: (rootDir, relativePath) => stringPool.internString(pathPackage.normalize(pathPackage.join(rootDir, relativePath))),
    configOverrides: config2.config
  });
  printStatus(`processing test events`);
  const dispatchEvents = async (events) => {
    for (const event of events) {
      if (event.method === "onEnd")
        printStatus(`building final report`);
      await receiver.dispatch(event);
      if (event.method === "onEnd")
        printStatus(`finished building report`);
    }
  };
  await dispatchEvents(eventData.prologue);
  let usedWorkers = 0;
  for (const { reportFile, zipFile, eventPatchers, metadata, config: config3, fullResult } of eventData.reports) {
    multiplexer.onReportConfigure({
      reportPath: zipFile,
      config: asFullConfig(config3)
    });
    const reportJsonl = await import_fs14.default.promises.readFile(reportFile);
    const events = parseTestEvents(reportJsonl);
    new JsonStringInternalizer(stringPool).traverse(events);
    eventPatchers.patchers.push(new AttachmentPathPatcher(dir));
    if (metadata.name)
      eventPatchers.patchers.push(new GlobalErrorPatcher(metadata.name));
    if (config3?.tags?.length)
      eventPatchers.patchers.push(new GlobalErrorPatcher(config3.tags.join(" ")));
    const workerIndexPatcher = new WorkerIndexPatcher(usedWorkers);
    eventPatchers.patchers.push(workerIndexPatcher);
    eventPatchers.patchEvents(events);
    usedWorkers += workerIndexPatcher.usedWorkers();
    await dispatchEvents(events);
    multiplexer.onReportEnd({
      reportPath: zipFile,
      result: asFullResult(fullResult)
    });
  }
  await dispatchEvents(eventData.epilogue);
}
var commonEventNames = ["onBlobReportMetadata", "onConfigure", "onProject", "onBegin", "onEnd"];
var commonEvents = new Set(commonEventNames);
var commonEventRegex = new RegExp(`${commonEventNames.join("|")}`);
function parseCommonEvents(reportJsonl) {
  return splitBufferLines(reportJsonl).map((line) => line.toString("utf8")).filter((line) => commonEventRegex.test(line)).map((line) => JSON.parse(line)).filter((event) => commonEvents.has(event.method));
}
function parseTestEvents(reportJsonl) {
  return splitBufferLines(reportJsonl).map((line) => line.toString("utf8")).filter((line) => line.length).map((line) => JSON.parse(line)).filter((event) => !commonEvents.has(event.method));
}
function splitBufferLines(buffer) {
  const lines = [];
  let start = 0;
  while (start < buffer.length) {
    const end = buffer.indexOf(10, start);
    if (end === -1) {
      lines.push(buffer.slice(start));
      break;
    }
    lines.push(buffer.slice(start, end));
    start = end + 1;
  }
  return lines;
}
async function extractAndParseReports(dir, shardFiles, internalizer, printStatus) {
  const shardEvents = [];
  await import_fs14.default.promises.mkdir(import_path19.default.join(dir, "resources"), { recursive: true });
  const reportNames = new UniqueFileNameGenerator();
  for (const file of shardFiles) {
    const absolutePath = import_path19.default.join(dir, file);
    printStatus(`extracting: ${(0, import_util15.relativeFilePath)(absolutePath)}`);
    const zipFile = new ZipFile(absolutePath);
    const entryNames = await zipFile.entries();
    for (const entryName of entryNames.sort()) {
      let reportFile = import_path19.default.join(dir, entryName);
      const content = await zipFile.read(entryName);
      if (entryName.endsWith(".jsonl")) {
        reportFile = reportNames.makeUnique(reportFile);
        let parsedEvents = parseCommonEvents(content);
        internalizer.traverse(parsedEvents);
        const metadata = findMetadata(parsedEvents, file);
        parsedEvents = modernizer.modernize(metadata.version, parsedEvents);
        shardEvents.push({
          zipFile: absolutePath,
          reportFile,
          metadata,
          parsedEvents
        });
      }
      await import_fs14.default.promises.writeFile(reportFile, content);
    }
    zipFile.close();
  }
  return shardEvents;
}
function findMetadata(events, file) {
  if (events[0]?.method !== "onBlobReportMetadata")
    throw new Error(`No metadata event found in ${file}`);
  const metadata = events[0].params;
  if (metadata.version > currentBlobReportVersion)
    throw new Error(`Blob report ${file} was created with a newer version of Playwright.`);
  return metadata;
}
async function mergeEvents(dir, shardReportFiles, stringPool, printStatus, rootDirOverride) {
  const internalizer = new JsonStringInternalizer(stringPool);
  const configureEvents = [];
  const projectEvents = [];
  const endEvents = [];
  const blobs = await extractAndParseReports(dir, shardReportFiles, internalizer, printStatus);
  blobs.sort((a, b) => {
    const nameA = a.metadata.name ?? "";
    const nameB = b.metadata.name ?? "";
    if (nameA !== nameB)
      return nameA.localeCompare(nameB);
    const shardA = a.metadata.shard?.current ?? 0;
    const shardB = b.metadata.shard?.current ?? 0;
    if (shardA !== shardB)
      return shardA - shardB;
    return a.zipFile.localeCompare(b.zipFile);
  });
  printStatus(`merging events`);
  const reports = [];
  const globalTestIdSet = /* @__PURE__ */ new Set();
  for (let i = 0; i < blobs.length; ++i) {
    const { parsedEvents, metadata, reportFile, zipFile } = blobs[i];
    const eventPatchers = new JsonEventPatchers();
    eventPatchers.patchers.push(new IdsPatcher(
      stringPool,
      metadata.name,
      String(i),
      globalTestIdSet
    ));
    if (rootDirOverride)
      eventPatchers.patchers.push(new PathSeparatorPatcher(metadata.pathSeparator));
    eventPatchers.patchEvents(parsedEvents);
    let config2;
    let fullResult;
    for (const event of parsedEvents) {
      if (event.method === "onConfigure") {
        configureEvents.push(event);
        config2 = event.params.config;
      } else if (event.method === "onProject") {
        projectEvents.push(event);
      } else if (event.method === "onEnd") {
        fullResult = event.params.result;
        endEvents.push({ event, metadata });
      }
    }
    reports.push({
      eventPatchers,
      reportFile,
      zipFile,
      metadata,
      config: config2,
      fullResult
    });
  }
  return {
    prologue: [
      mergeConfigureEvents(configureEvents, rootDirOverride),
      ...projectEvents,
      { method: "onBegin", params: void 0 }
    ],
    reports,
    epilogue: [
      mergeEndEvents(endEvents),
      { method: "onExit", params: void 0 }
    ],
    pathSeparatorFromMetadata: blobs[0]?.metadata.pathSeparator
  };
}
function mergeConfigureEvents(configureEvents, rootDirOverride) {
  if (!configureEvents.length)
    throw new Error("No configure events found");
  let config2 = {
    configFile: void 0,
    globalTimeout: 0,
    maxFailures: 0,
    metadata: {},
    shard: null,
    rootDir: "",
    version: "",
    workers: 0,
    globalSetup: null,
    globalTeardown: null
  };
  for (const event of configureEvents)
    config2 = mergeConfigs(config2, event.params.config);
  if (rootDirOverride) {
    config2.rootDir = rootDirOverride;
  } else {
    const rootDirs = new Set(configureEvents.map((e) => e.params.config.rootDir));
    if (rootDirs.size > 1) {
      throw new Error([
        `Blob reports being merged were recorded with different test directories, and`,
        `merging cannot proceed. This may happen if you are merging reports from`,
        `machines with different environments, like different operating systems or`,
        `if the tests ran with different playwright configs.`,
        ``,
        `You can force merge by specifying a merge config file with "-c" option. If`,
        `you'd like all test paths to be correct, make sure 'testDir' in the merge config`,
        `file points to the actual tests location.`,
        ``,
        `Found directories:`,
        ...rootDirs
      ].join("\n"));
    }
  }
  return {
    method: "onConfigure",
    params: {
      config: config2
    }
  };
}
function mergeConfigs(to, from) {
  return {
    ...to,
    ...from,
    metadata: {
      ...to.metadata,
      ...from.metadata,
      actualWorkers: (to.metadata.actualWorkers || 0) + (from.metadata.actualWorkers || 0)
    },
    shard: null,
    workers: to.workers + from.workers
  };
}
function mergeEndEvents(endEvents) {
  let startTime = endEvents.length ? 1e13 : Date.now();
  let status = "passed";
  let endTime = 0;
  for (const { event } of endEvents) {
    const shardResult = event.params.result;
    if (shardResult.status === "failed")
      status = "failed";
    else if (shardResult.status === "timedout" && status !== "failed")
      status = "timedout";
    else if (shardResult.status === "interrupted" && status !== "failed" && status !== "timedout")
      status = "interrupted";
    startTime = Math.min(startTime, shardResult.startTime);
    endTime = Math.max(endTime, shardResult.startTime + shardResult.duration);
  }
  const result = {
    status,
    startTime,
    duration: endTime - startTime
  };
  return {
    method: "onEnd",
    params: {
      result
    }
  };
}
async function sortedShardFiles(dir) {
  const files = await import_fs14.default.promises.readdir(dir);
  return files.filter((file) => file.endsWith(".zip")).sort();
}
function printStatusToStdout(message) {
  process.stdout.write(`${message}
`);
}
var UniqueFileNameGenerator = class {
  constructor() {
    this._usedNames = /* @__PURE__ */ new Set();
  }
  makeUnique(name) {
    if (!this._usedNames.has(name)) {
      this._usedNames.add(name);
      return name;
    }
    const extension = import_path19.default.extname(name);
    name = name.substring(0, name.length - extension.length);
    let index = 0;
    while (true) {
      const candidate = `${name}-${++index}${extension}`;
      if (!this._usedNames.has(candidate)) {
        this._usedNames.add(candidate);
        return candidate;
      }
    }
  }
};
var IdsPatcher = class {
  constructor(stringPool, botName, salt, globalTestIdSet) {
    this._stringPool = stringPool;
    this._botName = botName;
    this._salt = salt;
    this._testIdsMap = /* @__PURE__ */ new Map();
    this._globalTestIdSet = globalTestIdSet;
  }
  patchEvent(event) {
    const { method, params } = event;
    switch (method) {
      case "onProject":
        this._onProject(params.project);
        return;
      case "onAttach":
      case "onTestBegin":
      case "onStepBegin":
      case "onStepEnd":
      case "onStdIO":
        params.testId = params.testId ? this._mapTestId(params.testId) : void 0;
        return;
      case "onTestEnd":
        params.test.testId = this._mapTestId(params.test.testId);
        return;
    }
  }
  _onProject(project) {
    project.metadata ??= {};
    project.suites.forEach((suite) => this._updateTestIds(suite));
  }
  _updateTestIds(suite) {
    suite.entries.forEach((entry) => {
      if ("testId" in entry)
        this._updateTestId(entry);
      else
        this._updateTestIds(entry);
    });
  }
  _updateTestId(test) {
    test.testId = this._mapTestId(test.testId);
    if (this._botName) {
      test.tags = test.tags || [];
      test.tags.unshift("@" + this._botName);
    }
  }
  _mapTestId(testId) {
    const t1 = this._stringPool.internString(testId);
    if (this._testIdsMap.has(t1))
      return this._testIdsMap.get(t1);
    if (this._globalTestIdSet.has(t1)) {
      const t2 = this._stringPool.internString(testId + this._salt);
      this._globalTestIdSet.add(t2);
      this._testIdsMap.set(t1, t2);
      return t2;
    }
    this._globalTestIdSet.add(t1);
    this._testIdsMap.set(t1, t1);
    return t1;
  }
};
var AttachmentPathPatcher = class {
  constructor(_resourceDir) {
    this._resourceDir = _resourceDir;
  }
  patchEvent(event) {
    if (event.method === "onAttach")
      this._patchAttachments(event.params.attachments);
    else if (event.method === "onTestEnd")
      this._patchAttachments(event.params.result.attachments ?? []);
  }
  _patchAttachments(attachments) {
    const resourceRoot = import_path19.default.resolve(this._resourceDir);
    for (const attachment of attachments) {
      if (!attachment.path)
        continue;
      const joined = import_path19.default.resolve(resourceRoot, attachment.path);
      if (!isPathInside(resourceRoot, joined)) {
        attachment.path = void 0;
        continue;
      }
      attachment.path = joined;
    }
  }
};
var PathSeparatorPatcher = class {
  constructor(from) {
    this._from = from ?? (import_path19.default.sep === "/" ? "\\" : "/");
    this._to = import_path19.default.sep;
  }
  patchEvent(jsonEvent) {
    if (this._from === this._to)
      return;
    if (jsonEvent.method === "onProject") {
      this._updateProject(jsonEvent.params.project);
      return;
    }
    if (jsonEvent.method === "onTestEnd") {
      const test = jsonEvent.params.test;
      test.annotations?.forEach((annotation) => this._updateAnnotationLocation(annotation));
      const testResult = jsonEvent.params.result;
      testResult.annotations?.forEach((annotation) => this._updateAnnotationLocation(annotation));
      testResult.errors.forEach((error) => this._updateErrorLocations(error));
      (testResult.attachments ?? []).forEach((attachment) => {
        if (attachment.path)
          attachment.path = this._updatePath(attachment.path);
      });
      return;
    }
    if (jsonEvent.method === "onStepBegin") {
      const step = jsonEvent.params.step;
      this._updateLocation(step.location);
      return;
    }
    if (jsonEvent.method === "onStepEnd") {
      const step = jsonEvent.params.step;
      this._updateErrorLocations(step.error);
      step.annotations?.forEach((annotation) => this._updateAnnotationLocation(annotation));
      return;
    }
    if (jsonEvent.method === "onAttach") {
      const attach = jsonEvent.params;
      attach.attachments.forEach((attachment) => {
        if (attachment.path)
          attachment.path = this._updatePath(attachment.path);
      });
      return;
    }
  }
  _updateProject(project) {
    project.outputDir = this._updatePath(project.outputDir);
    project.testDir = this._updatePath(project.testDir);
    project.snapshotDir = this._updatePath(project.snapshotDir);
    project.suites.forEach((suite) => this._updateSuite(suite, true));
  }
  _updateSuite(suite, isFileSuite = false) {
    this._updateLocation(suite.location);
    if (isFileSuite)
      suite.title = this._updatePath(suite.title);
    for (const entry of suite.entries) {
      if ("testId" in entry) {
        this._updateLocation(entry.location);
        entry.annotations?.forEach((annotation) => this._updateAnnotationLocation(annotation));
      } else {
        this._updateSuite(entry);
      }
    }
  }
  _updateErrorLocations(error) {
    while (error) {
      this._updateLocation(error.location);
      error = error.cause;
    }
  }
  _updateAnnotationLocation(annotation) {
    this._updateLocation(annotation.location);
  }
  _updateLocation(location) {
    if (location)
      location.file = this._updatePath(location.file);
  }
  _updatePath(text) {
    return text.split(this._from).join(this._to);
  }
};
var GlobalErrorPatcher = class {
  constructor(botName) {
    this._prefix = `(${botName}) `;
  }
  patchEvent(event) {
    if (event.method !== "onError")
      return;
    const error = event.params.error;
    if (error.message !== void 0)
      error.message = this._prefix + error.message;
    if (error.stack !== void 0)
      error.stack = this._prefix + error.stack;
  }
};
var WorkerIndexPatcher = class {
  constructor(baseWorkerIndex) {
    this._maxWorkerIndex = 0;
    this._baseWorkerIndex = baseWorkerIndex;
  }
  patchEvent(event) {
    if (event.method === "onTestBegin") {
      this._maxWorkerIndex = Math.max(this._maxWorkerIndex, event.params.result.workerIndex);
      event.params.result.workerIndex += this._baseWorkerIndex;
    }
  }
  usedWorkers() {
    return this._maxWorkerIndex + 1;
  }
};
var JsonEventPatchers = class {
  constructor() {
    this.patchers = [];
  }
  patchEvents(events) {
    for (const event of events) {
      for (const patcher of this.patchers)
        patcher.patchEvent(event);
    }
  }
};
var BlobModernizer = class {
  modernize(fromVersion, events) {
    const result = [];
    for (const event of events)
      result.push(...this._modernize(fromVersion, event));
    return result;
  }
  _modernize(fromVersion, event) {
    let events = [event];
    for (let version = fromVersion; version < currentBlobReportVersion; ++version)
      events = this[`_modernize_${version}_to_${version + 1}`].call(this, events);
    return events;
  }
  _modernize_1_to_2(events) {
    return events.map((event) => {
      if (event.method === "onProject") {
        const modernizeSuite = (suite) => {
          const newSuites = suite.suites.map(modernizeSuite);
          const { suites, tests, ...remainder } = suite;
          return { entries: [...newSuites, ...tests], ...remainder };
        };
        const project = event.params.project;
        project.suites = project.suites.map(modernizeSuite);
      }
      return event;
    });
  }
};
var modernizer = new BlobModernizer();
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ListModeReporter,
  ListReporter,
  TestServerConnection,
  base,
  html,
  merge,
  projectUtils,
  runnerReporters,
  testRunner,
  testServer,
  watchMode,
  webServer
});
