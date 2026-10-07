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
var testBackend_exports = {};
__export(testBackend_exports, {
  TestServerBackend: () => TestServerBackend,
  testServerBackendTools: () => testServerBackendTools
});
module.exports = __toCommonJS(testBackend_exports);
var import_events = __toESM(require("events"));
var import_coreBundle = require("playwright-core/lib/coreBundle");
var import_testContext = require("./testContext");
var testTools = __toESM(require("./testTools.js"));
var generatorTools = __toESM(require("./generatorTools.js"));
var plannerTools = __toESM(require("./plannerTools.js"));
const zod = require("playwright-core/lib/utilsBundle").z;
const typesWithIntent = ["action", "assertion", "input"];
const testServerBackendTools = [
  plannerTools.saveTestPlan,
  plannerTools.setupPage,
  plannerTools.submitTestPlan,
  generatorTools.setupPage,
  generatorTools.generatorReadLog,
  generatorTools.generatorWriteTest,
  testTools.listTests,
  testTools.runTests,
  testTools.debugTest,
  ...import_coreBundle.tools.browserTools.map((tool) => wrapBrowserTool(tool))
];
class TestServerBackend extends import_events.default {
  constructor(configPath, options) {
    super();
    this.name = "Playwright";
    this.version = "0.0.1";
    this._options = options || {};
    this._configPath = configPath;
  }
  async initialize(clientInfo) {
    this._context = new import_testContext.TestContext(clientInfo, this._configPath, this._options);
  }
  async callTool(name, args, signal) {
    const tool = testServerBackendTools.find((tool2) => tool2.schema.name === name);
    if (!tool)
      throw new Error(`Tool not found: ${name}. Available tools: ${testServerBackendTools.map((tool2) => tool2.schema.name).join(", ")}`);
    try {
      return await tool.handle(this._context, tool.schema.inputSchema.parse(args || {}), signal);
    } catch (e) {
      return { content: [{ type: "text", text: String(e) }], isError: true };
    }
  }
  async dispose() {
    await this._context?.close();
  }
}
function wrapBrowserTool(tool) {
  const inputSchema = typesWithIntent.includes(tool.schema.type) ? tool.schema.inputSchema.extend({
    intent: zod.string().describe("The intent of the call, for example the test step description plan idea")
  }) : tool.schema.inputSchema;
  return {
    schema: {
      ...tool.schema,
      inputSchema
    },
    handle: async (context, params, _signal) => {
      const response = await context.sendMessageToPausedTest({ callTool: { name: tool.schema.name, arguments: params } });
      return response.callTool;
    }
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  TestServerBackend,
  testServerBackendTools
});
