"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var testTools_exports = {};
__export(testTools_exports, {
  debugTest: () => debugTest,
  listTests: () => listTests,
  runTests: () => runTests
});
module.exports = __toCommonJS(testTools_exports);
var import_runner = require("../../runner");
var import_testTool = require("./testTool");
const z = require("playwright-core/lib/utilsBundle").z;
const listTests = (0, import_testTool.defineTestTool)({
  schema: {
    name: "test_list",
    title: "List tests",
    description: "List tests",
    inputSchema: z.object({}),
    type: "readOnly"
  },
  handle: async (context) => {
    const { testRunner, screen, output } = await context.createTestRunner();
    const reporter = new import_runner.ListModeReporter({ screen, includeTestId: true });
    await testRunner.listTests(reporter, {});
    return { content: output.map((text) => ({ type: "text", text })) };
  }
});
const runTests = (0, import_testTool.defineTestTool)({
  schema: {
    name: "test_run",
    title: "Run tests",
    description: "Run tests",
    inputSchema: z.object({
      locations: z.array(z.string()).optional().describe('Folder, file or location to run: "test/e2e" or "test/e2e/file.spec.ts" or "test/e2e/file.spec.ts:20"'),
      projects: z.array(z.string()).optional().describe('Projects to run, projects from playwright.config.ts, by default runs all projects. Running with "chromium" is a good start')
    }),
    type: "readOnly"
  },
  handle: async (context, params, signal) => {
    const { output } = await context.runTestsWithGlobalSetupAndPossiblePause({
      locations: params.locations ?? [],
      projects: params.projects,
      disableConfigReporters: true
    }, signal);
    return { content: [{ type: "text", text: output }] };
  }
});
const debugTest = (0, import_testTool.defineTestTool)({
  schema: {
    name: "test_debug",
    title: "Debug single test",
    description: "Debug single test",
    inputSchema: z.object({
      test: z.object({
        id: z.string().describe("Test ID to debug."),
        title: z.string().describe("Human readable test title for granting permission to debug the test.")
      })
    }),
    type: "readOnly"
  },
  handle: async (context, params, signal) => {
    const { output, status } = await context.runTestsWithGlobalSetupAndPossiblePause({
      headed: context.computedHeaded,
      locations: [],
      // we can make this faster by passing the test's location, so we don't need to scan all tests to find the ID
      testIds: [params.test.id],
      // For automatic recovery
      timeout: 0,
      workers: 1,
      pauseOnError: true,
      disableConfigReporters: true,
      actionTimeout: 5e3
    }, signal);
    return { content: [{ type: "text", text: output }], isError: status !== "paused" && status !== "passed" };
  }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  debugTest,
  listTests,
  runTests
});
