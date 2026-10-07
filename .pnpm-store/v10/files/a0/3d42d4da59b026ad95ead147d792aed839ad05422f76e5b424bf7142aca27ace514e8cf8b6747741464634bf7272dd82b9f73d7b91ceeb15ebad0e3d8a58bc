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
var session_exports = {};
__export(session_exports, {
  Session: () => Session
});
module.exports = __toCommonJS(session_exports);
var import_child_process = require("child_process");
var import_fs = __toESM(require("fs"));
var import_net = __toESM(require("net"));
var import_os = __toESM(require("os"));
var import_path = __toESM(require("path"));
var import_package = require("../../package");
var import_socketConnection = require("../utils/socketConnection");
var import_registry = require("./registry");
class Session {
  constructor(sessionFile) {
    this.config = sessionFile.config;
    this.name = this.config.name;
    this._sessionFile = sessionFile;
  }
  isCompatible(clientInfo) {
    return (0, import_socketConnection.compareSemver)(clientInfo.version, this.config.version) >= 0;
  }
  async run(clientInfo, args, options) {
    if (!this.isCompatible(clientInfo))
      throw new Error(`Client is v${clientInfo.version}, session '${this.name}' is v${this.config.version}. Run

  playwright-cli${this.name !== "default" ? ` -s=${this.name}` : ""} open

to restart the browser session.`);
    const { socket } = await this._connect();
    if (!socket)
      throw new Error(`Browser '${this.name}' is not open. Run

  playwright-cli${this.name !== "default" ? ` -s=${this.name}` : ""} open

to start the browser session.`);
    return await SocketConnectionClient.sendAndClose(socket, "run", { args, cwd: process.cwd(), raw: options?.raw, json: options?.json });
  }
  async stop() {
    if (!await this.canConnect())
      return { wasOpen: false };
    await this._stopDaemon();
    return { wasOpen: true };
  }
  async deleteData() {
    await this.stop();
    const dataDirs = await import_fs.default.promises.readdir(this._sessionFile.daemonDir).catch(() => []);
    const matchingEntries = dataDirs.filter((file) => file === `${this.name}.session` || file.startsWith(`ud-${this.name}-`));
    if (matchingEntries.length === 0)
      return { existed: false, deletedUserDataDir: false };
    let deletedUserDataDir = false;
    for (const entry of matchingEntries) {
      const userDataDir = import_path.default.resolve(this._sessionFile.daemonDir, entry);
      for (let i = 0; i < 5; i++) {
        try {
          await import_fs.default.promises.rm(userDataDir, { recursive: true });
          if (entry.startsWith("ud-"))
            deletedUserDataDir = true;
          break;
        } catch (e) {
          if (e.code === "ENOENT")
            break;
          await new Promise((resolve) => setTimeout(resolve, 1e3));
          if (i === 4)
            throw e;
        }
      }
    }
    return { existed: true, deletedUserDataDir };
  }
  async _connect() {
    return await new Promise((resolve) => {
      const socket = import_net.default.createConnection(this.config.socketPath, () => {
        resolve({ socket });
      });
      socket.on("error", (error) => {
        if (import_os.default.platform() !== "win32")
          void import_fs.default.promises.unlink(this.config.socketPath).catch(() => {
          }).then(() => resolve({ error }));
        else
          resolve({ error });
      });
    });
  }
  async canConnect() {
    const { socket } = await this._connect();
    if (socket) {
      socket.destroy();
      return true;
    }
    return false;
  }
  static async startDaemon(clientInfo, cliArgs, mode) {
    await import_fs.default.promises.mkdir(clientInfo.daemonProfilesDir, { recursive: true });
    const cliPath = (0, import_package.libPath)("entry", "cliDaemon.js");
    const sessionName = (0, import_registry.resolveSessionName)(cliArgs.session);
    const errLog = import_path.default.join(clientInfo.daemonProfilesDir, sessionName + ".err");
    const err = import_fs.default.openSync(errLog, "w");
    const args = [
      cliPath,
      sessionName
    ];
    if (cliArgs.headed)
      args.push("--headed");
    if (cliArgs.extension)
      args.push("--extension");
    if (cliArgs.browser)
      args.push(`--browser=${cliArgs.browser}`);
    if (cliArgs.persistent)
      args.push("--persistent");
    if (cliArgs.profile)
      args.push(`--profile=${cliArgs.profile}`);
    if (cliArgs.config)
      args.push(`--config=${cliArgs.config}`);
    if (cliArgs.cdp)
      args.push(`--cdp=${cliArgs.cdp}`);
    if (cliArgs.endpoint)
      args.push(`--endpoint=${cliArgs.endpoint}`);
    else if (mode === "attach" && process.env.PLAYWRIGHT_CLI_SESSION)
      args.push(`--endpoint=${process.env.PLAYWRIGHT_CLI_SESSION}`);
    const child = (0, import_child_process.spawn)(process.execPath, args, {
      detached: true,
      stdio: ["ignore", "pipe", err],
      cwd: process.cwd()
      // Will be used as root.
    });
    let signalled = false;
    const sigintHandler = () => {
      signalled = true;
      child.kill("SIGINT");
    };
    const sigtermHandler = () => {
      signalled = true;
      child.kill("SIGTERM");
    };
    process.on("SIGINT", sigintHandler);
    process.on("SIGTERM", sigtermHandler);
    let outLog = "";
    const rejectWithPid = (reject, message) => reject(Object.assign(new Error(`Daemon pid=${child.pid}: ${message}`), { daemonPid: child.pid }));
    await new Promise((resolve, reject) => {
      child.stdout.on("data", (data) => {
        outLog += data.toString();
        if (!outLog.includes("<EOF>"))
          return;
        const errorMatch = outLog.match(/### Error\n([\s\S]*)<EOF>/);
        const error = errorMatch ? errorMatch[1].trim() : void 0;
        if (error) {
          const errLogContent = import_fs.default.readFileSync(errLog, "utf-8");
          rejectWithPid(reject, error + (errLogContent ? "\n" + errLogContent : ""));
        }
        const successMatch = outLog.match(/### Success\nDaemon listening on (.*)\n<EOF>/);
        if (successMatch)
          resolve();
      });
      child.on("close", (code) => {
        if (!signalled) {
          const errLogContent = import_fs.default.readFileSync(errLog, "utf-8");
          rejectWithPid(reject, `Daemon process exited with code ${code}` + (errLogContent ? "\n" + errLogContent : ""));
        }
      });
    });
    process.off("SIGINT", sigintHandler);
    process.off("SIGTERM", sigtermHandler);
    child.stdout.destroy();
    child.unref();
    return { pid: child.pid, sessionName, endpoint: cliArgs.endpoint };
  }
  async _stopDaemon() {
    const { socket } = await this._connect();
    if (!socket)
      return;
    let error;
    await SocketConnectionClient.sendAndClose(socket, "stop", {}).catch((e) => error = e);
    if (error && !error?.message?.includes("Session closed"))
      throw error;
  }
  async deleteSessionConfig() {
    await import_fs.default.promises.rm(this._sessionFile.file).catch(() => {
    });
  }
}
class SocketConnectionClient {
  constructor(socket) {
    this._nextMessageId = 1;
    this._callbacks = /* @__PURE__ */ new Map();
    this._connection = new import_socketConnection.SocketConnection(socket);
    this._connection.onmessage = (message) => this._onMessage(message);
    this._connection.onclose = () => this._rejectCallbacks();
  }
  async send(method, params = {}) {
    const messageId = this._nextMessageId++;
    const message = {
      id: messageId,
      method,
      params
    };
    const responsePromise = new Promise((resolve, reject) => {
      this._callbacks.set(messageId, { resolve, reject, method, params });
    });
    const [result] = await Promise.all([responsePromise, this._connection.send(message)]);
    return result;
  }
  static async sendAndClose(socket, method, params = {}) {
    const connection = new SocketConnectionClient(socket);
    try {
      return await connection.send(method, params);
    } finally {
      connection.close();
    }
  }
  close() {
    this._connection.close();
  }
  _onMessage(object) {
    if (object.id && this._callbacks.has(object.id)) {
      const callback = this._callbacks.get(object.id);
      this._callbacks.delete(object.id);
      if (object.error)
        callback.reject(new Error(object.error));
      else
        callback.resolve(object.result);
    } else if (object.id) {
      throw new Error(`Unexpected message id: ${object.id}`);
    } else {
      throw new Error(`Unexpected message without id: ${JSON.stringify(object)}`);
    }
  }
  _rejectCallbacks() {
    for (const callback of this._callbacks.values())
      callback.reject(new Error("Session closed"));
    this._callbacks.clear();
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Session
});
