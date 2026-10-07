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
var errorContext_exports = {};
__export(errorContext_exports, {
  buildErrorContext: () => buildErrorContext
});
module.exports = __toCommonJS(errorContext_exports);
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));
var import_util = require("./util");
const { parseErrorStack } = require("playwright-core/lib/coreBundle").iso;
const { stripAnsiEscapes } = require("playwright-core/lib/coreBundle").iso;
const fixTestInstructions = `# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.
`;
function buildErrorContext(options) {
  const { titlePath, location, errors, pageSnapshot } = options;
  const meaningfulErrors = errors.filter((e) => !!e.message);
  if (!meaningfulErrors.length && !pageSnapshot)
    return void 0;
  const lines = [
    fixTestInstructions,
    "# Test info",
    "",
    `- Name: ${titlePath.join(" >> ")}`,
    `- Location: ${(0, import_util.relativeFilePath)(location.file)}:${location.line}:${location.column}`
  ];
  if (meaningfulErrors.length) {
    lines.push("", "# Error details");
    for (const error of meaningfulErrors) {
      lines.push(
        "",
        "```",
        stripAnsiEscapes(error.message || ""),
        "```"
      );
      if (error.errorContext) {
        lines.push(
          "",
          "```yaml",
          error.errorContext,
          "```"
        );
      }
    }
  }
  if (pageSnapshot) {
    lines.push(
      "",
      "# Page snapshot",
      "",
      "```yaml",
      pageSnapshot,
      "```"
    );
  }
  const lastError = meaningfulErrors[meaningfulErrors.length - 1];
  const codeFrame = lastError ? buildCodeFrame(lastError, location) : void 0;
  if (codeFrame) {
    lines.push(
      "",
      "# Test source",
      "",
      "```ts",
      codeFrame,
      "```"
    );
  }
  return lines.join("\n");
}
function buildCodeFrame(error, testLocation) {
  const stack = error.stack;
  if (!stack)
    return void 0;
  const parsed = parseErrorStack(stack, import_path.default.sep);
  const errorLocation = parsed.location;
  if (!errorLocation)
    return void 0;
  let source;
  try {
    source = import_fs.default.readFileSync(errorLocation.file, "utf8");
  } catch {
    return void 0;
  }
  const sourceLines = source.split("\n");
  const linesAbove = 100;
  const linesBelow = 100;
  const start = Math.max(0, errorLocation.line - linesAbove - 1);
  const end = Math.min(sourceLines.length, errorLocation.line + linesBelow);
  const scope = sourceLines.slice(start, end);
  const lineNumberWidth = String(end).length;
  const message = stripAnsiEscapes(error.message || "").split("\n")[0] || void 0;
  const frame = scope.map((line, index) => `${start + index + 1 === errorLocation.line ? "> " : "  "}${(start + index + 1).toString().padEnd(lineNumberWidth, " ")} | ${line}`);
  if (message)
    frame.splice(errorLocation.line - start, 0, `${" ".repeat(lineNumberWidth + 2)} | ${" ".repeat(Math.max(0, errorLocation.column - 2))} ^ ${message}`);
  return frame.join("\n");
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  buildErrorContext
});
