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
var plannerTools_exports = {};
__export(plannerTools_exports, {
  saveTestPlan: () => saveTestPlan,
  setupPage: () => setupPage,
  submitTestPlan: () => submitTestPlan
});
module.exports = __toCommonJS(plannerTools_exports);
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));
var import_testTool = require("./testTool");
const z = require("playwright-core/lib/utilsBundle").z;
const { resolveWithinRoot } = require("playwright-core/lib/coreBundle").utils;
const setupPage = (0, import_testTool.defineTestTool)({
  schema: {
    name: "planner_setup_page",
    title: "Setup planner page",
    description: "Setup the page for test planning",
    inputSchema: z.object({
      project: z.string().optional().describe('Project to use for setup. For example: "chromium", if no project is provided uses the first project in the config.'),
      seedFile: z.string().optional().describe('A seed file contains a single test that is used to setup the page for testing, for example: "tests/seed.spec.ts". If no seed file is provided, a default seed file is created.')
    }),
    type: "readOnly"
  },
  handle: async (context, params, signal) => {
    const seed = await context.getOrCreateSeedFile(params.seedFile, params.project);
    const { output, status } = await context.runSeedTest(seed.file, seed.projectName, signal);
    return { content: [{ type: "text", text: output }], isError: status !== "paused" };
  }
});
const planSchema = z.object({
  overview: z.string().describe("A brief overview of the application to be tested"),
  suites: z.array(z.object({
    name: z.string().describe("The name of the suite"),
    seedFile: z.string().describe("A seed file that was used to setup the page for testing."),
    tests: z.array(z.object({
      name: z.string().describe("The name of the test"),
      file: z.string().describe('The file the test should be saved to, for example: "tests/<suite-name>/<test-name>.spec.ts".'),
      steps: z.array(z.object({
        perform: z.string().optional().describe(`Action to perform. For example: 'Click on the "Submit" button'.`),
        expect: z.string().array().describe(`Expected result of the action where appropriate. For example: 'The page should show the "Thank you for your submission" message'`)
      }))
    }))
  }))
});
const submitTestPlan = (0, import_testTool.defineTestTool)({
  schema: {
    name: "planner_submit_plan",
    title: "Submit test plan",
    description: "Submit the test plan to the test planner",
    inputSchema: planSchema,
    type: "readOnly"
  },
  handle: async (context, params) => {
    return {
      content: [{
        type: "text",
        text: JSON.stringify(params, null, 2)
      }]
    };
  }
});
const saveTestPlan = (0, import_testTool.defineTestTool)({
  schema: {
    name: "planner_save_plan",
    title: "Save test plan as markdown file",
    description: "Save the test plan as a markdown file",
    inputSchema: planSchema.extend({
      name: z.string().describe('The name of the test plan, for example: "Test Plan".'),
      fileName: z.string().describe('The file to save the test plan to, for example: "spec/test.plan.md". Relative to the workspace root.')
    }),
    type: "readOnly"
  },
  handle: async (context, params) => {
    const lines = [];
    lines.push(`# ${params.name}`);
    lines.push(``);
    lines.push(`## Application Overview`);
    lines.push(``);
    lines.push(params.overview);
    lines.push(``);
    lines.push(`## Test Scenarios`);
    for (let i = 0; i < params.suites.length; i++) {
      lines.push(``);
      const suite = params.suites[i];
      lines.push(`### ${i + 1}. ${suite.name}`);
      lines.push(``);
      lines.push(`**Seed:** \`${suite.seedFile}\``);
      for (let j = 0; j < suite.tests.length; j++) {
        lines.push(``);
        const test = suite.tests[j];
        lines.push(`#### ${i + 1}.${j + 1}. ${test.name}`);
        lines.push(``);
        lines.push(`**File:** \`${test.file}\``);
        lines.push(``);
        lines.push(`**Steps:**`);
        for (let k = 0; k < test.steps.length; k++) {
          lines.push(`  ${k + 1}. ${test.steps[k].perform ?? "-"}`);
          for (const expect of test.steps[k].expect)
            lines.push(`    - expect: ${expect}`);
        }
      }
    }
    lines.push(``);
    const resolvedFile = resolveWithinRoot(context.rootPath, params.fileName);
    if (!resolvedFile)
      throw new Error(`Plan file name must be a relative path inside the workspace: ${params.fileName}`);
    await import_fs.default.promises.mkdir(import_path.default.dirname(resolvedFile), { recursive: true });
    await import_fs.default.promises.writeFile(resolvedFile, lines.join("\n"));
    return {
      content: [{
        type: "text",
        text: `Test plan saved to ${params.fileName}`
      }]
    };
  }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  saveTestPlan,
  setupPage,
  submitTestPlan
});
