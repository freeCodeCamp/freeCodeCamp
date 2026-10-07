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
var agentParser_exports = {};
__export(agentParser_exports, {
  parseAgentSpec: () => parseAgentSpec
});
module.exports = __toCommonJS(agentParser_exports);
var import_fs = __toESM(require("fs"));
const yaml = require("playwright-core/lib/utilsBundle").yaml;
async function parseAgentSpec(filePath) {
  const source = await import_fs.default.promises.readFile(filePath, "utf-8");
  const { header, content } = extractYamlAndContent(source);
  const { instructions, examples } = extractInstructionsAndExamples(content);
  return {
    ...header,
    instructions,
    examples
  };
}
function extractYamlAndContent(markdown) {
  const lines = markdown.split("\n");
  if (lines[0] !== "---")
    throw new Error("Markdown file must start with YAML front matter (---)");
  let yamlEndIndex = -1;
  for (let i = 1; i < lines.length; i++) {
    if (lines[i] === "---") {
      yamlEndIndex = i;
      break;
    }
  }
  if (yamlEndIndex === -1)
    throw new Error("YAML front matter must be closed with ---");
  const yamlLines = lines.slice(1, yamlEndIndex);
  const yamlRaw = yamlLines.join("\n");
  const contentLines = lines.slice(yamlEndIndex + 1);
  const content = contentLines.join("\n");
  let header;
  try {
    header = yaml.parse(yamlRaw);
  } catch (error) {
    throw new Error(`Failed to parse YAML header: ${error.message}`);
  }
  if (!header.name)
    throw new Error('YAML header must contain a "name" field');
  if (!header.description)
    throw new Error('YAML header must contain a "description" field');
  return { header, content };
}
function extractInstructionsAndExamples(content) {
  const examples = [];
  const instructions = content.split("<example>")[0].trim();
  const exampleRegex = /<example>([\s\S]*?)<\/example>/g;
  let match;
  while ((match = exampleRegex.exec(content)) !== null) {
    const example = match[1].trim();
    examples.push(example.replace(/[\n]/g, " ").replace(/ +/g, " "));
  }
  return { instructions, examples };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  parseAgentSpec
});
