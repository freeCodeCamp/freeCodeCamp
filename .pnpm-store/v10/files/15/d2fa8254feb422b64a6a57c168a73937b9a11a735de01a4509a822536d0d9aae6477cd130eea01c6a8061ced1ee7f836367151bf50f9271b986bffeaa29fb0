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
var generatorTools_exports = {};
__export(generatorTools_exports, {
  generatorReadLog: () => generatorReadLog,
  generatorWriteTest: () => generatorWriteTest,
  setupPage: () => setupPage
});
module.exports = __toCommonJS(generatorTools_exports);
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));
var import_testTool = require("./testTool");
var import_testContext = require("./testContext");
const z = require("playwright-core/lib/utilsBundle").z;
const { isPathInside, resolveWithinRoot } = require("playwright-core/lib/coreBundle").utils;
const setupPage = (0, import_testTool.defineTestTool)({
  schema: {
    name: "generator_setup_page",
    title: "Setup generator page",
    description: "Setup the page for test.",
    inputSchema: z.object({
      plan: z.string().describe("The plan for the test. This should be the actual test plan with all the steps."),
      project: z.string().optional().describe('Project to use for setup. For example: "chromium", if no project is provided uses the first project in the config.'),
      seedFile: z.string().optional().describe('A seed file contains a single test that is used to setup the page for testing, for example: "tests/seed.spec.ts". If no seed file is provided, a default seed file is created.')
    }),
    type: "readOnly"
  },
  handle: async (context, params, signal) => {
    const seed = await context.getOrCreateSeedFile(params.seedFile, params.project);
    context.generatorJournal = new import_testContext.GeneratorJournal(context.rootPath, params.plan, seed);
    const { output, status } = await context.runSeedTest(seed.file, seed.projectName, signal);
    return { content: [{ type: "text", text: output }], isError: status !== "paused" };
  }
});
const generatorReadLog = (0, import_testTool.defineTestTool)({
  schema: {
    name: "generator_read_log",
    title: "Retrieve test log",
    description: "Retrieve the performed test log",
    inputSchema: z.object({}),
    type: "readOnly"
  },
  handle: async (context) => {
    if (!context.generatorJournal)
      throw new Error(`Please setup page using "${setupPage.schema.name}" first.`);
    const result = context.generatorJournal.journal();
    return { content: [{
      type: "text",
      text: result
    }] };
  }
});
const generatorWriteTest = (0, import_testTool.defineTestTool)({
  schema: {
    name: "generator_write_test",
    title: "Write test",
    description: "Write the generated test to the test file",
    inputSchema: z.object({
      fileName: z.string().describe("The file to write the test to"),
      code: z.string().describe("The generated test code")
    }),
    type: "readOnly"
  },
  handle: async (context, params) => {
    if (!context.generatorJournal)
      throw new Error(`Please setup page using "${setupPage.schema.name}" first.`);
    const testRunner = context.existingTestRunner();
    if (!testRunner)
      throw new Error("No test runner found, please setup page and perform actions first.");
    const config = await testRunner.loadConfig();
    const resolvedFile = resolveWithinRoot(context.rootPath, params.fileName);
    const dirs = [];
    for (const project of config.projects) {
      const projectTestDir = project.project.testDir;
      if (resolvedFile && isPathInside(projectTestDir, resolvedFile)) {
        await import_fs.default.promises.mkdir(import_path.default.dirname(resolvedFile), { recursive: true });
        await import_fs.default.promises.writeFile(resolvedFile, params.code);
        return {
          content: [{
            type: "text",
            text: `### Result
Test written to ${params.fileName}`
          }]
        };
      }
      dirs.push(import_path.default.relative(context.rootPath, projectTestDir).replace(/\\/g, "/"));
    }
    throw new Error(`Test file did not match any of the test dirs: ${dirs.join(", ")}`);
  }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  generatorReadLog,
  generatorWriteTest,
  setupPage
});
