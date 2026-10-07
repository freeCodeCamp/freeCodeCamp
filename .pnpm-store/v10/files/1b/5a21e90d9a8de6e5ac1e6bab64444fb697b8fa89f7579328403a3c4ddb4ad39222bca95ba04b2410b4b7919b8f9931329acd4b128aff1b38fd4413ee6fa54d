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
var generateAgents_exports = {};
__export(generateAgents_exports, {
  ClaudeGenerator: () => ClaudeGenerator,
  CopilotGenerator: () => CopilotGenerator,
  OpencodeGenerator: () => OpencodeGenerator,
  VSCodeGenerator: () => VSCodeGenerator
});
module.exports = __toCommonJS(generateAgents_exports);
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));
var import_seed = require("../mcp/test/seed");
var import_agentParser = require("./agentParser");
const colors = require("playwright-core/lib/utilsBundle").colors;
const yaml = require("playwright-core/lib/utilsBundle").yaml;
const { mkdirIfNeeded } = require("playwright-core/lib/coreBundle").utils;
async function loadAgentSpecs() {
  const files = await import_fs.default.promises.readdir(__dirname);
  return Promise.all(files.filter((file) => file.endsWith(".agent.md")).map((file) => (0, import_agentParser.parseAgentSpec)(import_path.default.join(__dirname, file))));
}
class ClaudeGenerator {
  static async init(fullConfig, projectName, prompts) {
    await initRepo(fullConfig, projectName, {
      promptsFolder: prompts ? ".claude/prompts" : void 0
    });
    const agents = await loadAgentSpecs();
    await import_fs.default.promises.mkdir(".claude/agents", { recursive: true });
    for (const agent of agents)
      await writeFile(`.claude/agents/${agent.name}.md`, ClaudeGenerator.agentSpec(agent), "\u{1F916}", "agent definition");
    const mcpServer = process.platform === "win32" ? { command: "cmd", args: ["/c", "npx", "playwright", "run-test-mcp-server"] } : { command: "npx", args: ["playwright", "run-test-mcp-server"] };
    await writeFile(".mcp.json", JSON.stringify({
      mcpServers: {
        "playwright-test": mcpServer
      }
    }, null, 2), "\u{1F527}", "mcp configuration");
    initRepoDone();
  }
  static agentSpec(agent) {
    const claudeToolMap = /* @__PURE__ */ new Map([
      ["search", ["Glob", "Grep", "Read", "LS"]],
      ["edit", ["Edit", "MultiEdit", "Write"]]
    ]);
    function asClaudeTool(tool) {
      const [first, second] = tool.split("/");
      if (!second)
        return (claudeToolMap.get(first) || [first]).join(", ");
      return `mcp__${first}__${second}`;
    }
    const examples = agent.examples.length ? ` Examples: ${agent.examples.map((example) => `<example>${example}</example>`).join("")}` : "";
    const lines = [];
    const header = {
      name: agent.name,
      description: agent.description + examples,
      tools: agent.tools.map((tool) => asClaudeTool(tool)).join(", "),
      model: agent.model,
      color: agent.color
    };
    lines.push(`---`);
    lines.push(yaml.stringify(header, { lineWidth: 1e5 }) + `---`);
    lines.push("");
    lines.push(agent.instructions);
    return lines.join("\n");
  }
}
class OpencodeGenerator {
  static async init(fullConfig, projectName, prompts) {
    await initRepo(fullConfig, projectName, {
      defaultAgentName: "Build",
      promptsFolder: prompts ? ".opencode/prompts" : void 0
    });
    const agents = await loadAgentSpecs();
    for (const agent of agents) {
      const prompt = [agent.instructions];
      prompt.push("");
      prompt.push(...agent.examples.map((example) => `<example>${example}</example>`));
      await writeFile(`.opencode/prompts/${agent.name}.md`, prompt.join("\n"), "\u{1F916}", "agent definition");
    }
    await writeFile("opencode.json", OpencodeGenerator.configuration(agents), "\u{1F527}", "opencode configuration");
    initRepoDone();
  }
  static configuration(agents) {
    const opencodeToolMap = /* @__PURE__ */ new Map([
      ["search", ["ls", "glob", "grep", "read"]],
      ["edit", ["edit", "write"]]
    ]);
    const asOpencodeTool = (tools, tool) => {
      const [first, second] = tool.split("/");
      if (!second) {
        for (const tool2 of opencodeToolMap.get(first) || [first])
          tools[tool2] = true;
      } else {
        tools[`${first}*${second}`] = true;
      }
    };
    const result = {};
    result["$schema"] = "https://opencode.ai/config.json";
    result["mcp"] = {};
    result["tools"] = {
      "playwright*": false
    };
    result["agent"] = {};
    for (const agent of agents) {
      const tools = {};
      result["agent"][agent.name] = {
        description: agent.description,
        mode: "subagent",
        prompt: `{file:.opencode/prompts/${agent.name}.md}`,
        tools
      };
      for (const tool of agent.tools)
        asOpencodeTool(tools, tool);
    }
    result["mcp"]["playwright-test"] = {
      type: "local",
      command: ["npx", "playwright", "run-test-mcp-server"],
      enabled: true
    };
    return JSON.stringify(result, null, 2);
  }
}
class CopilotGenerator {
  static async init(fullConfig, projectName, prompts) {
    await initRepo(fullConfig, projectName, {
      defaultAgentName: "agent",
      promptsFolder: prompts ? ".github/prompts" : void 0,
      promptSuffix: "prompt"
    });
    const agents = await loadAgentSpecs();
    await import_fs.default.promises.mkdir(".github/agents", { recursive: true });
    for (const agent of agents)
      await writeFile(`.github/agents/${agent.name}.agent.md`, CopilotGenerator.agentSpec(agent), "\u{1F916}", "agent definition");
    await deleteFile(`.github/chatmodes/ \u{1F3AD} planner.chatmode.md`, "legacy planner chatmode");
    await deleteFile(`.github/chatmodes/\u{1F3AD} generator.chatmode.md`, "legacy generator chatmode");
    await deleteFile(`.github/chatmodes/\u{1F3AD} healer.chatmode.md`, "legacy healer chatmode");
    await deleteFile(`.github/agents/ \u{1F3AD} planner.agent.md`, "legacy planner agent");
    await deleteFile(`.github/agents/\u{1F3AD} generator.agent.md`, "legacy generator agent");
    await deleteFile(`.github/agents/\u{1F3AD} healer.agent.md`, "legacy healer agent");
    await VSCodeGenerator.appendToMCPJson();
    const mcpConfig = { mcpServers: CopilotGenerator.mcpServers };
    if (!import_fs.default.existsSync(".github/copilot-setup-steps.yml")) {
      const yaml2 = import_fs.default.readFileSync(import_path.default.join(__dirname, "copilot-setup-steps.yml"), "utf-8");
      await writeFile(".github/workflows/copilot-setup-steps.yml", yaml2, "\u{1F527}", "GitHub Copilot setup steps");
    }
    console.log("");
    console.log("");
    console.log(" \u{1F527} TODO: GitHub > Settings > Copilot > Coding agent > MCP configuration");
    console.log("------------------------------------------------------------------");
    console.log(JSON.stringify(mcpConfig, null, 2));
    console.log("------------------------------------------------------------------");
    initRepoDone();
  }
  static agentSpec(agent) {
    const examples = agent.examples.length ? ` Examples: ${agent.examples.map((example) => `<example>${example}</example>`).join("")}` : "";
    const lines = [];
    const header = {
      "name": agent.name,
      "description": agent.description + examples,
      "tools": agent.tools,
      "model": "Claude Sonnet 4.6",
      "mcp-servers": CopilotGenerator.mcpServers
    };
    lines.push(`---`);
    lines.push(yaml.stringify(header, { lineWidth: 1e5 }) + `---`);
    lines.push("");
    lines.push(agent.instructions);
    lines.push("");
    return lines.join("\n");
  }
  static {
    this.mcpServers = {
      "playwright-test": {
        "type": "stdio",
        "command": "npx",
        "args": [
          "playwright",
          "run-test-mcp-server"
        ],
        "tools": ["*"]
      }
    };
  }
}
class VSCodeGenerator {
  static async init(fullConfig, projectName) {
    await initRepo(fullConfig, projectName, {
      promptsFolder: void 0
    });
    const agents = await loadAgentSpecs();
    const nameMap = /* @__PURE__ */ new Map([
      ["playwright-test-planner", " \u{1F3AD} planner"],
      ["playwright-test-generator", "\u{1F3AD} generator"],
      ["playwright-test-healer", "\u{1F3AD} healer"]
    ]);
    await import_fs.default.promises.mkdir(".github/chatmodes", { recursive: true });
    for (const agent of agents)
      await writeFile(`.github/chatmodes/${nameMap.get(agent.name)}.chatmode.md`, VSCodeGenerator.agentSpec(agent), "\u{1F916}", "chatmode definition");
    await VSCodeGenerator.appendToMCPJson();
    initRepoDone();
  }
  static async appendToMCPJson() {
    await import_fs.default.promises.mkdir(".vscode", { recursive: true });
    const mcpJsonPath = ".vscode/mcp.json";
    let mcpJson = {
      servers: {},
      inputs: []
    };
    try {
      mcpJson = JSON.parse(import_fs.default.readFileSync(mcpJsonPath, "utf8"));
    } catch {
    }
    if (!mcpJson.servers)
      mcpJson.servers = {};
    mcpJson.servers["playwright-test"] = {
      type: "stdio",
      command: "npx",
      args: ["playwright", "run-test-mcp-server"]
    };
    await writeFile(mcpJsonPath, JSON.stringify(mcpJson, null, 2), "\u{1F527}", "mcp configuration");
  }
  static agentSpec(agent) {
    const vscodeToolMap = /* @__PURE__ */ new Map([
      ["search", ["search/listDirectory", "search/fileSearch", "search/textSearch"]],
      ["read", ["search/readFile"]],
      ["edit", ["edit/editFiles"]],
      ["write", ["edit/createFile", "edit/createDirectory"]]
    ]);
    const vscodeToolsOrder = ["edit/createFile", "edit/createDirectory", "edit/editFiles", "search/fileSearch", "search/textSearch", "search/listDirectory", "search/readFile"];
    const vscodeMcpName = "playwright-test";
    function asVscodeTool(tool) {
      const [first, second] = tool.split("/");
      if (second)
        return `${vscodeMcpName}/${second}`;
      return vscodeToolMap.get(first) || first;
    }
    const tools = agent.tools.map(asVscodeTool).flat().sort((a, b) => {
      const indexA = vscodeToolsOrder.indexOf(a);
      const indexB = vscodeToolsOrder.indexOf(b);
      if (indexA === -1 && indexB === -1)
        return a.localeCompare(b);
      if (indexA === -1)
        return 1;
      if (indexB === -1)
        return -1;
      return indexA - indexB;
    }).map((tool) => `'${tool}'`).join(", ");
    const lines = [];
    lines.push(`---`);
    lines.push(`description: ${agent.description}.`);
    lines.push(`tools: [${tools}]`);
    lines.push(`---`);
    lines.push("");
    lines.push(agent.instructions);
    for (const example of agent.examples)
      lines.push(`<example>${example}</example>`);
    lines.push("");
    return lines.join("\n");
  }
}
async function writeFile(filePath, content, icon, description) {
  console.log(` ${icon} ${import_path.default.relative(process.cwd(), filePath)} ${colors.dim("- " + description)}`);
  await mkdirIfNeeded(filePath);
  await import_fs.default.promises.writeFile(filePath, content, "utf-8");
}
async function deleteFile(filePath, description) {
  try {
    if (!import_fs.default.existsSync(filePath))
      return;
  } catch {
    return;
  }
  console.log(` \u2702\uFE0F  ${import_path.default.relative(process.cwd(), filePath)} ${colors.dim("- " + description)}`);
  await import_fs.default.promises.unlink(filePath);
}
async function initRepo(fullConfig, projectName, options) {
  const project = (0, import_seed.seedProject)(fullConfig, projectName);
  console.log(` \u{1F3AD} Using project "${project.project.name}" as a primary project`);
  if (!import_fs.default.existsSync("specs")) {
    await import_fs.default.promises.mkdir("specs");
    await writeFile(import_path.default.join("specs", "README.md"), `# Specs

This is a directory for test plans.
`, "\u{1F4DD}", "directory for test plans");
  }
  let seedFile = await (0, import_seed.findSeedFile)(project);
  if (!seedFile) {
    seedFile = (0, import_seed.defaultSeedFile)(project);
    await writeFile(seedFile, import_seed.seedFileContent, "\u{1F331}", "default environment seed file");
  }
  if (options.promptsFolder) {
    await import_fs.default.promises.mkdir(options.promptsFolder, { recursive: true });
    for (const promptFile of await import_fs.default.promises.readdir(__dirname)) {
      if (!promptFile.endsWith(".prompt.md"))
        continue;
      const shortName = promptFile.replace(".prompt.md", "");
      const fileName = options.promptSuffix ? `${shortName}.${options.promptSuffix}.md` : `${shortName}.md`;
      const content = await loadPrompt(promptFile, {
        defaultAgentName: "default",
        ...options,
        seedFile: import_path.default.relative(process.cwd(), seedFile)
      });
      await writeFile(import_path.default.join(options.promptsFolder, fileName), content, "\u{1F4DD}", "prompt template");
    }
  }
}
function initRepoDone() {
  console.log(" \u2705 Done.");
}
async function loadPrompt(file, params) {
  const content = await import_fs.default.promises.readFile(import_path.default.join(__dirname, file), "utf-8");
  return Object.entries(params).reduce((acc, [key, value]) => {
    return acc.replace(new RegExp(`\\\${${key}}`, "g"), value);
  }, content);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ClaudeGenerator,
  CopilotGenerator,
  OpencodeGenerator,
  VSCodeGenerator
});
