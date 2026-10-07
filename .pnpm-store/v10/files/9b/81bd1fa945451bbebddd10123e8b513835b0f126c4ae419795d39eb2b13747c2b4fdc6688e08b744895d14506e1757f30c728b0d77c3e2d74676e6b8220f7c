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
var browserBackend_exports = {};
__export(browserBackend_exports, {
  createCustomMessageHandler: () => createCustomMessageHandler,
  runDaemonForContext: () => runDaemonForContext
});
module.exports = __toCommonJS(browserBackend_exports);
var import_crypto = __toESM(require("crypto"));
const { stripAnsiEscapes } = require("playwright-core/lib/coreBundle").iso;
function createCustomMessageHandler(testInfo, context) {
  let backend;
  const config = { capabilities: ["testing"] };
  let tools;
  context.once("close", () => {
    void backend?.dispose();
    backend = void 0;
  });
  return async (data) => {
    if (!tools)
      ({ tools } = require("playwright-core/lib/coreBundle"));
    const toolList = tools.filteredTools(config);
    if (data.initialize) {
      if (backend)
        throw new Error("MCP backend is already initialized");
      backend = new tools.BrowserBackend(config, context, toolList);
      await backend.initialize(data.initialize.clientInfo);
      const pausedMessage = await generatePausedMessage(tools, testInfo, context);
      return { initialize: { pausedMessage } };
    }
    if (data.callTool) {
      if (!backend)
        throw new Error("MCP backend is not initialized");
      return { callTool: await backend.callTool(data.callTool.name, data.callTool.arguments) };
    }
    if (data.close) {
      await backend?.dispose();
      backend = void 0;
      return { close: {} };
    }
    throw new Error("Unknown MCP request");
  };
}
async function generatePausedMessage(tools, testInfo, context) {
  const lines = [];
  if (testInfo.errors.length) {
    lines.push(`### Paused on error:`);
    for (const error of testInfo.errors)
      lines.push(stripAnsiEscapes(error.message || ""));
  } else {
    lines.push(`### Paused at end of test. ready for interaction`);
  }
  for (let i = 0; i < context.pages().length; i++) {
    const page = context.pages()[i];
    const stateSuffix = context.pages().length > 1 ? i + 1 + " of " + context.pages().length : "state";
    lines.push(
      "",
      `### Page ${stateSuffix}`,
      `- Page URL: ${page.url()}`,
      `- Page Title: ${await page.title()}`.trim()
    );
    let console2 = testInfo.errors.length ? await tools.Tab.collectConsoleMessages(page) : [];
    console2 = console2.filter((msg) => msg.type === "error");
    if (console2.length) {
      lines.push("- Console Messages:");
      for (const message of console2)
        lines.push(`  - ${message.toString()}`);
    }
    lines.push(
      `- Page Snapshot:`,
      "```yaml",
      await page.ariaSnapshot({ mode: "ai" }),
      "```"
    );
  }
  lines.push("");
  if (testInfo.errors.length)
    lines.push(`### Task`, `Try recovering from the error prior to continuing`);
  return lines.join("\n");
}
async function runDaemonForContext(testInfo, context) {
  if (testInfo._configInternal.configCLIOverrides.debug !== "cli")
    return false;
  const sessionName = `tw-${import_crypto.default.randomBytes(3).toString("hex")}`;
  await context.browser().bind(sessionName, { workspaceDir: testInfo.project.testDir });
  console.log([
    `### The test is currently paused at the start`,
    ``,
    `### Debugging Instructions`,
    `- Run "playwright-cli attach ${sessionName}" to attach to this test`
  ].join("\n"));
  await context.debugger.requestPause();
  return true;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createCustomMessageHandler,
  runDaemonForContext
});
