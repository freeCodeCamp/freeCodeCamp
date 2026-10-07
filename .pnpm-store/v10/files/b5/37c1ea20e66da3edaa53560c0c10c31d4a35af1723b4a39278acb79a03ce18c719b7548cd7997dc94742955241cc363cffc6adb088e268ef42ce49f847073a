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
var registry_exports = {};
__export(registry_exports, {
  Registry: () => Registry,
  baseDaemonDir: () => baseDaemonDir,
  clientKey: () => clientKey,
  createClientInfo: () => createClientInfo,
  explicitSessionName: () => explicitSessionName,
  resolveSessionName: () => resolveSessionName
});
module.exports = __toCommonJS(registry_exports);
var import_crypto = __toESM(require("crypto"));
var import_fs = __toESM(require("fs"));
var import_os = __toESM(require("os"));
var import_path = __toESM(require("path"));
var import_package = require("../../package");
function clientKey(clientInfo) {
  return clientInfo.workspaceDir || clientInfo.workspaceDirHash;
}
class Registry {
  constructor(files) {
    this._files = files;
  }
  entry(clientInfo, sessionName) {
    const key = clientKey(clientInfo);
    const entries = this._files.get(key) || [];
    return entries.find((entry) => entry.config.name === sessionName);
  }
  entries(clientInfo) {
    return this._files.get(clientKey(clientInfo)) || [];
  }
  entryMap() {
    return this._files;
  }
  async loadEntry(clientInfo, sessionName) {
    const entry = await Registry._loadSessionEntry(clientInfo.daemonProfilesDir, sessionName + ".session");
    if (!entry)
      throw new Error(`Could not start the session "${sessionName}"`);
    const key = clientKey(clientInfo);
    let list = this._files.get(key);
    if (!list) {
      list = [];
      this._files.set(key, list);
    }
    const oldIndex = list.findIndex((e) => e.config.name === sessionName);
    if (oldIndex !== -1)
      list.splice(oldIndex, 1);
    list.push(entry);
    return entry;
  }
  static async _loadSessionEntry(daemonDir, file) {
    try {
      const fileName = import_path.default.join(daemonDir, file);
      const data = await import_fs.default.promises.readFile(fileName, "utf-8");
      const config = JSON.parse(data);
      if (!config.name)
        config.name = import_path.default.basename(file, ".session");
      if (!config.timestamp)
        config.timestamp = 0;
      return { file: fileName, config, daemonDir };
    } catch {
      return void 0;
    }
  }
  static async load() {
    const sessions = /* @__PURE__ */ new Map();
    const hashDirs = await import_fs.default.promises.readdir(baseDaemonDir).catch(() => []);
    for (const workspaceDirHash of hashDirs) {
      const daemonDir = import_path.default.join(baseDaemonDir, workspaceDirHash);
      const stat = await import_fs.default.promises.stat(daemonDir);
      if (!stat.isDirectory())
        continue;
      const files = await import_fs.default.promises.readdir(daemonDir).catch(() => []);
      for (const file of files) {
        if (!file.endsWith(".session"))
          continue;
        const entry = await Registry._loadSessionEntry(daemonDir, file);
        if (!entry)
          continue;
        const key = entry.config.workspaceDir || workspaceDirHash;
        let list = sessions.get(key);
        if (!list) {
          list = [];
          sessions.set(key, list);
        }
        list.push(entry);
      }
    }
    return new Registry(sessions);
  }
}
const baseDaemonDir = (() => {
  if (process.env.PLAYWRIGHT_DAEMON_SESSION_DIR)
    return process.env.PLAYWRIGHT_DAEMON_SESSION_DIR;
  let localCacheDir;
  if (process.platform === "linux")
    localCacheDir = process.env.XDG_CACHE_HOME || import_path.default.join(import_os.default.homedir(), ".cache");
  if (process.platform === "darwin")
    localCacheDir = import_path.default.join(import_os.default.homedir(), "Library", "Caches");
  if (process.platform === "win32")
    localCacheDir = process.env.LOCALAPPDATA || import_path.default.join(import_os.default.homedir(), "AppData", "Local");
  if (!localCacheDir)
    throw new Error("Unsupported platform: " + process.platform);
  return import_path.default.join(localCacheDir, "ms-playwright", "daemon");
})();
function createClientInfo() {
  const workspaceDir = findWorkspaceDir(process.cwd());
  const version = process.env.PLAYWRIGHT_CLI_VERSION_FOR_TEST || import_package.packageJSON.version;
  const hash = import_crypto.default.createHash("sha1");
  hash.update(workspaceDir || import_package.packageRoot);
  const workspaceDirHash = hash.digest("hex").substring(0, 16);
  return {
    version,
    workspaceDir,
    workspaceDirHash,
    daemonProfilesDir: daemonProfilesDir(workspaceDirHash),
    homeDir: import_os.default.homedir()
  };
}
function findWorkspaceDir(startDir) {
  let dir = startDir;
  for (let i = 0; i < 10; i++) {
    if (import_fs.default.existsSync(import_path.default.join(dir, ".playwright")))
      return dir;
    const parentDir = import_path.default.dirname(dir);
    if (parentDir === dir)
      break;
    dir = parentDir;
  }
  return void 0;
}
const daemonProfilesDir = (workspaceDirHash) => {
  return import_path.default.join(baseDaemonDir, workspaceDirHash);
};
function explicitSessionName(sessionName) {
  return sessionName || process.env.PLAYWRIGHT_CLI_SESSION;
}
function resolveSessionName(sessionName) {
  return explicitSessionName(sessionName) || "default";
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Registry,
  baseDaemonDir,
  clientKey,
  createClientInfo,
  explicitSessionName,
  resolveSessionName
});
