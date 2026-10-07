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
var program_exports = {};
__export(program_exports, {
  calculateSha1: () => calculateSha1,
  program: () => program
});
module.exports = __toCommonJS(program_exports);
var import_child_process = require("child_process");
var import_crypto = __toESM(require("crypto"));
var import_os = __toESM(require("os"));
var import_path = __toESM(require("path"));
var import_channelSessions = require("./channelSessions");
var import_output = require("./output");
var import_registry = require("./registry");
var import_session = require("./session");
var import_package = require("../../package");
var import_serverRegistry = require("../../serverRegistry");
var import_minimist = require("./minimist");
const globalOptions = [
  "json",
  "raw",
  "session"
];
const booleanOptions = [
  "all",
  "help",
  "json",
  "raw",
  "version"
];
async function program(options) {
  const clientInfo = (0, import_registry.createClientInfo)();
  const help = require((0, import_package.libPath)("tools", "cli-client", "help.json"));
  const argv = process.argv.slice(2);
  const boolean = [...help.booleanOptions, ...booleanOptions];
  const args = (0, import_minimist.minimist)(argv, { boolean, string: ["_"] });
  if (args.s) {
    args.session = args.s;
    delete args.s;
  }
  const output = args.json ? new import_output.JsonOutput() : new import_output.TextOutput();
  const commandName = args._?.[0];
  if (args.version || args.v) {
    output.version(options?.embedderVersion ?? clientInfo.version);
    process.exit(0);
  }
  const command = commandName && help.commands[commandName];
  if (args.help || args.h || !commandName) {
    if (command) {
      output.help(command.help);
    } else {
      const lines = ["playwright-cli - run playwright mcp commands from terminal"];
      if (process.env.CLAUDECODE || process.env.COPILOT_CLI)
        lines.push(`Agent skill: ${import_path.default.relative(process.cwd(), (0, import_package.libPath)("tools", "cli-client", "skill", "SKILL.md"))}`);
      lines.push(help.global);
      output.help(lines.join("\n\n"));
    }
    process.exit(0);
  }
  if (!command)
    output.errorUnknownCommand(commandName, help.global);
  validateFlags(args, command, output);
  validateArgs(args, command, output);
  const registry = await import_registry.Registry.load();
  const sessionName = (0, import_registry.resolveSessionName)(args.session);
  switch (commandName) {
    case "list": {
      const data = await collectList(registry, clientInfo, !!args.all);
      output.list(data);
      return;
    }
    case "close-all": {
      const entries = registry.entries(clientInfo);
      const closed = [];
      for (const entry of entries) {
        await new import_session.Session(entry).stop();
        closed.push(entry.config.name);
      }
      output.closeAll(closed);
      return;
    }
    case "delete-data": {
      const entry = registry.entry(clientInfo, sessionName);
      if (!entry) {
        output.deleteData(sessionName, { existed: false, deletedUserDataDir: false });
        return;
      }
      const result = await new import_session.Session(entry).deleteData();
      output.deleteData(sessionName, result);
      return;
    }
    case "kill-all": {
      const pids = await killAllDaemons();
      output.killAll(pids);
      return;
    }
    case "open": {
      const { pid } = await startSession(sessionName, registry, clientInfo, args, "open");
      const newEntry = await registry.loadEntry(clientInfo, sessionName);
      const params = args._.slice(1);
      const toolText = await runInSessionOrStop(newEntry, clientInfo, { _: ["goto", ...params.length ? params : ["about:blank"]] }, output);
      output.open(sessionName, pid, toolText);
      return;
    }
    case "attach": {
      const attachTarget = args._[1];
      if (attachTarget && (args.cdp || args.endpoint || args.extension))
        output.errorAttachConflict();
      if (attachTarget)
        args.endpoint = attachTarget;
      const extensionChannel = typeof args.extension === "string" ? args.extension : void 0;
      if (extensionChannel) {
        args.browser = extensionChannel;
        args.extension = true;
      }
      const cdpChannel = typeof args.cdp === "string" && (0, import_channelSessions.isKnownChannel)(args.cdp) ? args.cdp : void 0;
      const targetName = attachTarget ?? cdpChannel ?? extensionChannel ?? args.cdp;
      if (!targetName)
        output.errorAttachNoTarget();
      const attachSessionName = (0, import_registry.explicitSessionName)(args.session) ?? attachTarget ?? cdpChannel ?? extensionChannel ?? sessionName;
      args.session = attachSessionName;
      const { pid } = await startSession(attachSessionName, registry, clientInfo, args, "attach");
      const newEntry = await registry.loadEntry(clientInfo, attachSessionName);
      const toolText = await runInSessionOrStop(newEntry, clientInfo, { _: ["snapshot"], filename: "<auto>" }, output);
      output.attach(attachSessionName, pid, targetName, toolText);
      return;
    }
    case "close": {
      const closeEntry = registry.entry(clientInfo, sessionName);
      const { wasOpen } = closeEntry ? await new import_session.Session(closeEntry).stop() : { wasOpen: false };
      output.close(sessionName, wasOpen);
      return;
    }
    case "detach": {
      const detachEntry = registry.entry(clientInfo, sessionName);
      if (detachEntry && !detachEntry.config.attached)
        output.errorDetachNotAttached(sessionName);
      const { wasOpen } = detachEntry ? await new import_session.Session(detachEntry).stop() : { wasOpen: false };
      output.detach(sessionName, wasOpen);
      return;
    }
    case "install":
      await runInitWorkspace(args, output);
      output.installed();
      return;
    case "install-browser":
      await installBrowser();
      output.installed();
      return;
    case "show": {
      const daemonScript = (0, import_package.libPath)("entry", "dashboardApp.js");
      const daemonArgs = [
        daemonScript,
        `--sessionName=${sessionName}`,
        `--workspaceDir=${clientInfo.workspaceDir ?? ""}`
      ];
      if (args.port !== void 0)
        daemonArgs.push(`--port=${args.port}`);
      if (args.host !== void 0)
        daemonArgs.push(`--host=${args.host}`);
      if (args.kill) {
        daemonArgs.push(`--kill`);
        const child2 = (0, import_child_process.spawn)(process.execPath, daemonArgs, { stdio: "ignore" });
        await new Promise((resolve) => child2.on("exit", () => resolve()));
        return;
      }
      if (args.annotate) {
        const entry = registry.entry(clientInfo, sessionName);
        if (!entry)
          output.errorBrowserNotOpenForTool(sessionName);
        args.raw = true;
        const text = await runInSession(entry, clientInfo, args, output);
        output.toolResult(text);
        return;
      }
      const foreground = args.port !== void 0;
      const child = (0, import_child_process.spawn)(process.execPath, daemonArgs, {
        detached: !foreground,
        stdio: foreground ? "inherit" : "ignore"
      });
      if (foreground) {
        await new Promise((resolve) => child.on("exit", () => resolve()));
        return;
      }
      child.unref();
      output.show(sessionName, child.pid);
      return;
    }
    default: {
      const entry = registry.entry(clientInfo, sessionName);
      if (!entry)
        output.errorBrowserNotOpenForTool(sessionName);
      if (command.raw)
        args.raw = true;
      const text = await runInSession(entry, clientInfo, args, output);
      output.toolResult(text);
    }
  }
}
async function startSession(sessionName, registry, clientInfo, args, mode) {
  const entry = registry.entry(clientInfo, sessionName);
  if (entry)
    await new import_session.Session(entry).stop();
  return await import_session.Session.startDaemon(clientInfo, args, mode);
}
async function runInSession(entry, clientInfo, args, output) {
  const raw = !!args.raw;
  for (const globalOption of globalOptions)
    delete args[globalOption];
  const session = new import_session.Session(entry);
  const result = await session.run(clientInfo, args, { raw, json: output.json });
  return result.text;
}
async function runInSessionOrStop(entry, clientInfo, args, output) {
  try {
    return await runInSession(entry, clientInfo, args, output);
  } catch (e) {
    await new import_session.Session(entry).stop().catch(() => {
    });
    throw e;
  }
}
async function runInitWorkspace(args, output) {
  const cliPath = (0, import_package.libPath)("entry", "cliDaemon.js");
  const daemonArgs = [cliPath, "--init-workspace", ...args.skills ? ["--init-skills", String(args.skills)] : []];
  await new Promise((resolve, reject) => {
    const child = (0, import_child_process.spawn)(process.execPath, daemonArgs, {
      stdio: output.installStdio(),
      cwd: process.cwd()
    });
    child.on("close", (code) => {
      if (code === 0)
        resolve();
      else
        reject(new Error(`Workspace initialization failed with exit code ${code}`));
    });
  });
}
async function installBrowser() {
  const argv = process.argv.map((arg) => arg === "install-browser" ? "install" : arg);
  const { libCli } = require("../../coreBundle.js");
  const { program: program2 } = require("../../utilsBundle.js");
  if (!program2.version())
    libCli.decorateProgram(program2);
  program2.parse(argv);
}
const daemonProcessPatterns = ["run-mcp-server", "run-cli-server", "cli-daemon", "cliDaemon.js", "dashboardApp.js"];
async function killAllDaemons() {
  const platform = import_os.default.platform();
  const pidFilterEnv = process.env.PWTEST_KILL_ALL_PID_FILTER_FOR_TEST;
  const pidFilter = pidFilterEnv ? new Set(pidFilterEnv.split(",").map((p) => parseInt(p, 10)).filter((n) => !isNaN(n))) : void 0;
  const killed = [];
  try {
    if (platform === "win32") {
      const clauses = [`(${daemonProcessPatterns.map((p) => `$_.CommandLine -like '*${p}*'`).join(" -or ")})`];
      if (pidFilter)
        clauses.push(`(${[...pidFilter].map((p) => `$_.ProcessId -eq ${p}`).join(" -or ")})`);
      const whereClause = clauses.join(" -and ");
      const result = (0, import_child_process.execSync)(
        `powershell -NoProfile -NonInteractive -Command "Get-CimInstance Win32_Process | Where-Object { ${whereClause} } | ForEach-Object { Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue; $_.ProcessId }"`,
        { encoding: "utf-8" }
      );
      const pids = result.split("\n").map((line) => line.trim()).filter((line) => /^\d+$/.test(line));
      for (const pid of pids)
        killed.push(parseInt(pid, 10));
    } else {
      const result = (0, import_child_process.execSync)("ps auxww", { encoding: "utf-8" });
      const lines = result.split("\n");
      for (const line of lines) {
        if (daemonProcessPatterns.some((p) => line.includes(p))) {
          const parts = line.trim().split(/\s+/);
          const pid = parts[1];
          if (pid && /^\d+$/.test(pid)) {
            const numericPid = parseInt(pid, 10);
            if (pidFilter && !pidFilter.has(numericPid))
              continue;
            try {
              process.kill(numericPid, "SIGKILL");
              killed.push(numericPid);
            } catch {
            }
          }
        }
      }
    }
  } catch (e) {
  }
  return killed;
}
async function collectList(registry, clientInfo, all) {
  const browsers = [];
  const entries = registry.entryMap();
  const serverEntries = await import_serverRegistry.serverRegistry.list();
  const key = (0, import_registry.clientKey)(clientInfo);
  for (const [workspaceKey, list] of entries) {
    if (!all && workspaceKey !== key)
      continue;
    for (const entry of list) {
      const session = new import_session.Session(entry);
      const canConnect = await session.canConnect();
      if (!canConnect) {
        await session.deleteSessionConfig();
        continue;
      }
      const config = session.config;
      const channel = config.browser?.launchOptions.channel ?? config.browser?.browserName;
      browsers.push({
        name: session.name,
        workspace: workspaceKey,
        status: canConnect ? "open" : "closed",
        browserType: channel,
        userDataDir: config.browser?.userDataDir ?? null,
        headed: config.browser ? !config.browser.launchOptions.headless : void 0,
        persistent: !!config.cli.persistent,
        attached: !!config.attached,
        compatible: session.isCompatible(clientInfo),
        version: config.version
      });
    }
  }
  if (!all)
    return { all, browsers };
  const servers = [...serverEntries.values()].flat();
  return { all, browsers, servers, channelSessions: await (0, import_channelSessions.listChannelSessions)() };
}
function validateFlags(args, command, output) {
  const unknownFlags = [];
  for (const key of Object.keys(args)) {
    if (key === "_")
      continue;
    if (globalOptions.includes(key))
      continue;
    if (!(key in command.flags))
      unknownFlags.push(key);
  }
  if (unknownFlags.length)
    output.errorUnknownOption(unknownFlags, command.help);
}
function validateArgs(args, command, output) {
  const positional = args._.slice(1);
  if (positional.length > command.args.length)
    output.errorTooManyArguments(command.args.length, positional.length, command.help);
}
function calculateSha1(buffer) {
  const hash = import_crypto.default.createHash("sha1");
  hash.update(buffer);
  return hash.digest("hex");
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  calculateSha1,
  program
});
