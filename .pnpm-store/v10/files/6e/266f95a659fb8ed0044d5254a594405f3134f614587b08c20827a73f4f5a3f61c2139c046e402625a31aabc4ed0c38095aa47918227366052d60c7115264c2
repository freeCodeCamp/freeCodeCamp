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
var channelSessions_exports = {};
__export(channelSessions_exports, {
  isKnownChannel: () => isKnownChannel,
  listChannelSessions: () => listChannelSessions
});
module.exports = __toCommonJS(channelSessions_exports);
var import_fs = __toESM(require("fs"));
var import_net = __toESM(require("net"));
var import_os = __toESM(require("os"));
var import_path = __toESM(require("path"));
var import_extension = require("../utils/extension");
function isKnownChannel(name) {
  return channelToUserDataDir.has(name);
}
async function listChannelSessions() {
  if (process.env.PWTEST_CLI_CHANNEL_SCAN_DISABLED_FOR_TEST)
    return [];
  const result = [];
  for (const [channel, dirs] of channelToUserDataDir) {
    const userDataDir = dirs[process.platform];
    if (!userDataDir)
      continue;
    if (!await pathExists(userDataDir))
      continue;
    const [endpoint, extensionInstalled] = await Promise.all([
      readEndpoint(userDataDir),
      (0, import_extension.isPlaywrightExtensionInstalled)(userDataDir)
    ]);
    result.push({ channel, userDataDir, endpoint, extensionInstalled });
  }
  return result;
}
async function pathExists(p) {
  try {
    await import_fs.default.promises.access(p);
    return true;
  } catch {
    return false;
  }
}
async function readEndpoint(userDataDir) {
  let contents;
  try {
    contents = await import_fs.default.promises.readFile(import_path.default.join(userDataDir, "DevToolsActivePort"), "utf-8");
  } catch {
    return void 0;
  }
  const port = parseInt(contents.trim().split("\n")[0], 10);
  if (!Number.isFinite(port))
    return void 0;
  if (!await isPortOpen(port))
    return void 0;
  return `http://localhost:${port}`;
}
async function isPortOpen(port) {
  return new Promise((resolve) => {
    const socket = import_net.default.createConnection(port, "127.0.0.1");
    const done = (value) => {
      socket.destroy();
      resolve(value);
    };
    socket.once("connect", () => done(true));
    socket.once("error", () => done(false));
    socket.setTimeout(250, () => done(false));
  });
}
const channelToUserDataDir = /* @__PURE__ */ new Map([
  ["chrome", {
    "linux": import_path.default.join(import_os.default.homedir(), ".config", "google-chrome"),
    "darwin": import_path.default.join(import_os.default.homedir(), "Library", "Application Support", "Google", "Chrome"),
    "win32": import_path.default.join(process.env.LOCALAPPDATA || import_path.default.join(import_os.default.homedir(), "AppData", "Local"), "Google", "Chrome", "User Data")
  }],
  ["chrome-beta", {
    "linux": import_path.default.join(import_os.default.homedir(), ".config", "google-chrome-beta"),
    "darwin": import_path.default.join(import_os.default.homedir(), "Library", "Application Support", "Google", "Chrome Beta"),
    "win32": import_path.default.join(process.env.LOCALAPPDATA || import_path.default.join(import_os.default.homedir(), "AppData", "Local"), "Google", "Chrome Beta", "User Data")
  }],
  ["chrome-dev", {
    "linux": import_path.default.join(import_os.default.homedir(), ".config", "google-chrome-unstable"),
    "darwin": import_path.default.join(import_os.default.homedir(), "Library", "Application Support", "Google", "Chrome Dev"),
    "win32": import_path.default.join(process.env.LOCALAPPDATA || import_path.default.join(import_os.default.homedir(), "AppData", "Local"), "Google", "Chrome Dev", "User Data")
  }],
  ["chrome-canary", {
    "linux": import_path.default.join(import_os.default.homedir(), ".config", "google-chrome-canary"),
    "darwin": import_path.default.join(import_os.default.homedir(), "Library", "Application Support", "Google", "Chrome Canary"),
    "win32": import_path.default.join(process.env.LOCALAPPDATA || import_path.default.join(import_os.default.homedir(), "AppData", "Local"), "Google", "Chrome SxS", "User Data")
  }],
  ["msedge", {
    "linux": import_path.default.join(import_os.default.homedir(), ".config", "microsoft-edge"),
    "darwin": import_path.default.join(import_os.default.homedir(), "Library", "Application Support", "Microsoft Edge"),
    "win32": import_path.default.join(process.env.LOCALAPPDATA || import_path.default.join(import_os.default.homedir(), "AppData", "Local"), "Microsoft", "Edge", "User Data")
  }],
  ["msedge-beta", {
    "linux": import_path.default.join(import_os.default.homedir(), ".config", "microsoft-edge-beta"),
    "darwin": import_path.default.join(import_os.default.homedir(), "Library", "Application Support", "Microsoft Edge Beta"),
    "win32": import_path.default.join(process.env.LOCALAPPDATA || import_path.default.join(import_os.default.homedir(), "AppData", "Local"), "Microsoft", "Edge Beta", "User Data")
  }],
  ["msedge-dev", {
    "linux": import_path.default.join(import_os.default.homedir(), ".config", "microsoft-edge-dev"),
    "darwin": import_path.default.join(import_os.default.homedir(), "Library", "Application Support", "Microsoft Edge Dev"),
    "win32": import_path.default.join(process.env.LOCALAPPDATA || import_path.default.join(import_os.default.homedir(), "AppData", "Local"), "Microsoft", "Edge Dev", "User Data")
  }],
  ["msedge-canary", {
    "linux": import_path.default.join(import_os.default.homedir(), ".config", "microsoft-edge-canary"),
    "darwin": import_path.default.join(import_os.default.homedir(), "Library", "Application Support", "Microsoft Edge Canary"),
    "win32": import_path.default.join(process.env.LOCALAPPDATA || import_path.default.join(import_os.default.homedir(), "AppData", "Local"), "Microsoft", "Edge SxS", "User Data")
  }]
]);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  isKnownChannel,
  listChannelSessions
});
