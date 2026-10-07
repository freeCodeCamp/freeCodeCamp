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
var output_exports = {};
__export(output_exports, {
  JsonOutput: () => JsonOutput,
  TextOutput: () => TextOutput
});
module.exports = __toCommonJS(output_exports);
var import_path = __toESM(require("path"));
var import_extension = require("../utils/extension");
class TextOutput {
  constructor() {
    this.json = false;
  }
  version(v) {
    console.log(v);
  }
  help(text) {
    console.log(text);
  }
  errorUnknownCommand(name, globalHelp) {
    console.error(`Unknown command: ${name}
`);
    console.log(globalHelp);
    return process.exit(1);
  }
  errorUnknownOption(opts, commandHelp) {
    console.error(`Unknown option${opts.length > 1 ? "s" : ""}: ${opts.map((f) => `--${f}`).join(", ")}`);
    console.log("");
    console.log(commandHelp);
    return process.exit(1);
  }
  errorTooManyArguments(expected, received, commandHelp) {
    console.error(`error: too many arguments: expected ${expected}, received ${received}`);
    console.log("");
    console.log(commandHelp);
    return process.exit(1);
  }
  errorAttachConflict() {
    console.error(`Error: cannot use target name with --cdp, --endpoint, or --extension`);
    return process.exit(1);
  }
  errorDetachNotAttached(session) {
    console.error(`Error: session '${session}' was not attached; use \`playwright-cli${session !== "default" ? ` -s=${session}` : ""} close\` to stop it.`);
    return process.exit(1);
  }
  errorBrowserNotOpenForTool(session) {
    console.log(`The browser '${session}' is not open, please run open first`);
    console.log("");
    console.log(`  playwright-cli${session !== "default" ? ` -s=${session}` : ""} open [params]`);
    return process.exit(1);
  }
  errorAttachNoTarget() {
    console.error(`Error: no target specified for attach command; use one of [name], --cdp, --endpoint, or --extension to specify the target to attach to.`);
    return process.exit(1);
  }
  list({ all, browsers, servers, channelSessions }) {
    const byWorkspace = /* @__PURE__ */ new Map();
    for (const browser of browsers) {
      let list = byWorkspace.get(browser.workspace);
      if (!list) {
        list = [];
        byWorkspace.set(browser.workspace, list);
      }
      list.push(browser);
    }
    let count = 0;
    for (const [workspaceKey, list] of byWorkspace) {
      if (count === 0)
        console.log("### Browsers");
      if (all)
        console.log(`${import_path.default.relative(process.cwd(), workspaceKey) || "/"}:`);
      for (const browser of list)
        console.log(renderBrowser(browser));
      count += list.length;
    }
    if (!all) {
      if (!count)
        console.log("  (no browsers)");
      return;
    }
    if (servers?.length) {
      if (count)
        console.log("");
      console.log("### Browser servers available for attach");
      const serversByWorkspace = /* @__PURE__ */ new Map();
      for (const server of servers) {
        let list = serversByWorkspace.get(server.workspaceDir ?? "");
        if (!list) {
          list = [];
          serversByWorkspace.set(server.workspaceDir ?? "", list);
        }
        list.push(server);
      }
      for (const [workspaceKey, list] of serversByWorkspace) {
        if (workspaceKey)
          console.log(`${import_path.default.relative(process.cwd(), workspaceKey) || "/"}:`);
        for (const server of list)
          console.log(renderServer(server));
      }
      count += servers.length;
    }
    if (!count)
      console.log("  (no browsers)");
    if (channelSessions?.length) {
      console.log("");
      console.log("### Browsers available to attach via CDP");
      for (const session of channelSessions)
        console.log(renderChannelSession(session));
    }
  }
  closeAll(_sessions) {
  }
  deleteData(session, result) {
    if (!result.existed) {
      console.log(`No user data found for browser '${session}'.`);
      return;
    }
    if (result.deletedUserDataDir)
      console.log(`Deleted user data for browser '${session}'.`);
  }
  killAll(pids) {
    for (const pid of pids)
      console.log(`Killed daemon process ${pid}`);
    if (pids.length === 0)
      console.log("No daemon processes found.");
    else
      console.log(`Killed ${pids.length} daemon process${pids.length === 1 ? "" : "es"}.`);
  }
  open(session, pid, toolResult) {
    console.log(`### Browser \`${session}\` opened with pid ${pid}.`);
    if (toolResult)
      console.log(toolResult);
  }
  attach(session, pid, endpoint, toolResult) {
    if (endpoint) {
      console.log(`### Session \`${session}\` created, attached to \`${endpoint}\`.`);
      console.log(`Run commands with: playwright-cli --s=${session} <command>`);
      console.log("");
    } else {
      console.log(`### Browser \`${session}\` opened with pid ${pid}.`);
    }
    if (toolResult)
      console.log(toolResult);
  }
  close(session, wasOpen) {
    if (!wasOpen) {
      console.log(`Browser '${session}' is not open.`);
      return;
    }
    console.log(`Browser '${session}' closed
`);
  }
  detach(session, wasAttached) {
    if (!wasAttached) {
      console.log(`Browser '${session}' is not attached.`);
      return;
    }
    console.log(`Browser '${session}' detached
`);
  }
  installed() {
  }
  show(_session, pid) {
    if (process.env.PWTEST_PRINT_DASHBOARD_PID_FOR_TEST)
      console.log(`### Dashboard opened with pid ${pid}.`);
  }
  toolResult(text) {
    console.log(text);
  }
  installStdio() {
    return "inherit";
  }
}
class JsonOutput {
  constructor() {
    this.json = true;
  }
  version(v) {
    this._emit({ version: v });
  }
  help(text) {
    this._emit({ help: text });
  }
  errorUnknownCommand(name, _globalHelp) {
    this._emit({ isError: true, error: `Unknown command: ${name}` });
    return process.exit(1);
  }
  errorUnknownOption(opts, _commandHelp) {
    this._emit({ isError: true, error: `Unknown option${opts.length > 1 ? "s" : ""}: ${opts.map((f) => `--${f}`).join(", ")}` });
    return process.exit(1);
  }
  errorTooManyArguments(expected, received, _commandHelp) {
    this._emit({ isError: true, error: `error: too many arguments: expected ${expected}, received ${received}` });
    return process.exit(1);
  }
  errorAttachConflict() {
    this._emit({ isError: true, error: `cannot use target name with --cdp, --endpoint, or --extension` });
    return process.exit(1);
  }
  errorDetachNotAttached(session) {
    this._emit({ isError: true, error: `session '${session}' was not attached; use close to stop it.` });
    return process.exit(1);
  }
  errorBrowserNotOpenForTool(session) {
    this._emit({ isError: true, error: `The browser '${session}' is not open, please run open first` });
    return process.exit(1);
  }
  errorAttachNoTarget() {
    this._emit({ isError: true, error: `no target specified for attach command; use one of [name], --cdp, --endpoint, or --extension to specify the target to attach to.` });
    return process.exit(1);
  }
  list({ all, browsers, servers, channelSessions }) {
    const payload = { browsers };
    if (all) {
      payload.servers = servers ?? [];
      payload.channelSessions = channelSessions ?? [];
    }
    this._emit(payload);
  }
  closeAll(sessions) {
    this._emit({ closed: sessions });
  }
  deleteData(session, result) {
    this._emit({ session, deleted: result.existed });
  }
  killAll(pids) {
    this._emit({ killed: pids.length, pids });
  }
  open(session, pid, toolResult) {
    this._emit({ session, pid, result: parseJsonText(toolResult) });
  }
  attach(session, pid, endpoint, toolResult) {
    this._emit({
      session,
      pid,
      ...endpoint ? { endpoint } : {},
      result: parseJsonText(toolResult)
    });
  }
  close(session, wasOpen) {
    this._emit({ session, status: wasOpen ? "closed" : "not-open" });
  }
  detach(session, wasAttached) {
    this._emit({ session, status: wasAttached ? "detached" : "not-attached" });
  }
  installed() {
    this._emit({ installed: true });
  }
  show(session, pid) {
    this._emit({ session, pid });
  }
  toolResult(text) {
    console.log(text);
  }
  installStdio() {
    return "ignore";
  }
  _emit(value) {
    console.log(JSON.stringify(value, null, 2));
  }
}
function parseJsonText(text) {
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}
function renderBrowser(browser) {
  const lines = [`- ${browser.name}:`];
  lines.push(`  - status: ${browser.status}`);
  if (browser.status === "open" && !browser.compatible)
    lines.push(`  - version: v${browser.version} [incompatible please re-open]`);
  if (browser.browserType)
    lines.push(`  - browser-type: ${browser.browserType}${browser.attached ? " (attached)" : ""}`);
  if (!browser.attached) {
    if (browser.userDataDir === null)
      lines.push(`  - user-data-dir: <in-memory>`);
    else
      lines.push(`  - user-data-dir: ${browser.userDataDir}`);
    if (browser.headed !== void 0)
      lines.push(`  - headed: ${browser.headed}`);
  }
  return lines.join("\n");
}
function renderServer(server) {
  const lines = [`- browser "${server.title}":`];
  lines.push(`  - browser: ${server.browser.browserName}`);
  lines.push(`  - version: v${server.playwrightVersion}`);
  if (server.browser.userDataDir)
    lines.push(`  - data-dir: ${server.browser.userDataDir}`);
  else
    lines.push(`  - data-dir: <in-memory>`);
  lines.push(`  - run \`playwright-cli attach "${server.title}"\` to attach`);
  return lines.join("\n");
}
function renderChannelSession(session) {
  const lines = [`- ${session.channel}:`];
  lines.push(`  - data-dir: ${session.userDataDir}`);
  if (session.extensionInstalled)
    lines.push(`  - attach (extension): \`playwright-cli attach --extension=${session.channel}\``);
  else
    lines.push(`  - attach (extension): install at ${import_extension.playwrightExtensionInstallUrl}`);
  if (session.endpoint) {
    lines.push(`  - attach (remote debugging): \`playwright-cli attach --cdp=${session.channel}\``);
  } else {
    const inspectScheme = session.channel.startsWith("msedge") ? "edge" : "chrome";
    lines.push(`  - attach (remote debugging): enable at ${inspectScheme}://inspect/#remote-debugging`);
  }
  return lines.join("\n");
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  JsonOutput,
  TextOutput
});
