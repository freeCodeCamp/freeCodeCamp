/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */


"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/tsserver/server.ts
var import_os2 = __toESM(require("os"));

// src/typescript/typescript.ts
var typescript_exports = {};
__reExport(typescript_exports, require("./typescript.js"));

// src/tsserver/nodeServer.ts
var import_child_process = __toESM(require("child_process"));
var import_fs = __toESM(require("fs"));
var import_net = __toESM(require("net"));
var import_os = __toESM(require("os"));
var import_readline = __toESM(require("readline"));

// src/tsserver/common.ts
function getLogLevel(level) {
  if (level) {
    const l = level.toLowerCase();
    for (const name in typescript_exports.server.LogLevel) {
      if (isNaN(+name) && l === name.toLowerCase()) {
        return typescript_exports.server.LogLevel[name];
      }
    }
  }
  return void 0;
}

// src/tsserver/nodeServer.ts
function parseLoggingEnvironmentString(logEnvStr) {
  if (!logEnvStr) {
    return {};
  }
  const logEnv = { logToFile: true };
  const args = logEnvStr.split(" ");
  const len = args.length - 1;
  for (let i = 0; i < len; i += 2) {
    const option = args[i];
    const { value, extraPartCounter } = getEntireValue(i + 1);
    i += extraPartCounter;
    if (option && value) {
      switch (option) {
        case "-file":
          logEnv.file = value;
          break;
        case "-level":
          const level = getLogLevel(value);
          logEnv.detailLevel = level !== void 0 ? level : typescript_exports.server.LogLevel.normal;
          break;
        case "-traceToConsole":
          logEnv.traceToConsole = value.toLowerCase() === "true";
          break;
        case "-logToFile":
          logEnv.logToFile = value.toLowerCase() === "true";
          break;
      }
    }
  }
  return logEnv;
  function getEntireValue(initialIndex) {
    let pathStart = args[initialIndex];
    let extraPartCounter = 0;
    if (pathStart.charCodeAt(0) === typescript_exports.CharacterCodes.doubleQuote && pathStart.charCodeAt(pathStart.length - 1) !== typescript_exports.CharacterCodes.doubleQuote) {
      for (let i = initialIndex + 1; i < args.length; i++) {
        pathStart += " ";
        pathStart += args[i];
        extraPartCounter++;
        if (pathStart.charCodeAt(pathStart.length - 1) === typescript_exports.CharacterCodes.doubleQuote) break;
      }
    }
    return { value: (0, typescript_exports.stripQuotes)(pathStart), extraPartCounter };
  }
}
function parseServerMode() {
  const mode = typescript_exports.server.findArgument("--serverMode");
  if (!mode) return void 0;
  switch (mode.toLowerCase()) {
    case "semantic":
      return typescript_exports.LanguageServiceMode.Semantic;
    case "partialsemantic":
      return typescript_exports.LanguageServiceMode.PartialSemantic;
    case "syntactic":
      return typescript_exports.LanguageServiceMode.Syntactic;
    default:
      return mode;
  }
}
function initializeNodeSystem() {
  const sys4 = typescript_exports.Debug.checkDefined(typescript_exports.sys);
  class Logger {
    constructor(logFilename, traceToConsole, level) {
      this.logFilename = logFilename;
      this.traceToConsole = traceToConsole;
      this.level = level;
      this.seq = 0;
      this.inGroup = false;
      this.firstInGroup = true;
      this.fd = -1;
      if (this.logFilename) {
        try {
          this.fd = import_fs.default.openSync(this.logFilename, "w");
        } catch {
        }
      }
    }
    static padStringRight(str, padding) {
      return (str + padding).slice(0, padding.length);
    }
    close() {
      if (this.fd >= 0) {
        import_fs.default.close(this.fd, typescript_exports.noop);
      }
    }
    getLogFileName() {
      return this.logFilename;
    }
    perftrc(s) {
      this.msg(s, typescript_exports.server.Msg.Perf);
    }
    info(s) {
      this.msg(s, typescript_exports.server.Msg.Info);
    }
    err(s) {
      this.msg(s, typescript_exports.server.Msg.Err);
    }
    startGroup() {
      this.inGroup = true;
      this.firstInGroup = true;
    }
    endGroup() {
      this.inGroup = false;
    }
    loggingEnabled() {
      return !!this.logFilename || this.traceToConsole;
    }
    hasLevel(level) {
      return this.loggingEnabled() && this.level >= level;
    }
    msg(s, type = typescript_exports.server.Msg.Err) {
      if (!this.canWrite()) return;
      s = `[${typescript_exports.server.nowString()}] ${s}
`;
      if (!this.inGroup || this.firstInGroup) {
        const prefix = Logger.padStringRight(type + " " + this.seq.toString(), "          ");
        s = prefix + s;
      }
      this.write(s, type);
      if (!this.inGroup) {
        this.seq++;
      }
    }
    canWrite() {
      return this.fd >= 0 || this.traceToConsole;
    }
    write(s, _type) {
      if (this.fd >= 0) {
        const buf = Buffer.from(s);
        import_fs.default.writeSync(
          this.fd,
          buf,
          0,
          buf.length,
          /*position*/
          null
        );
      }
      if (this.traceToConsole) {
        console.warn(s);
      }
    }
  }
  const libDirectory = (0, typescript_exports.getDirectoryPath)((0, typescript_exports.normalizePath)(sys4.getExecutingFilePath()));
  const useWatchGuard = process.platform === "win32";
  const originalWatchDirectory = sys4.watchDirectory.bind(sys4);
  const logger = createLogger();
  typescript_exports.Debug.loggingHost = {
    log(level, s) {
      switch (level) {
        case typescript_exports.LogLevel.Error:
        case typescript_exports.LogLevel.Warning:
          return logger.msg(s, typescript_exports.server.Msg.Err);
        case typescript_exports.LogLevel.Info:
        case typescript_exports.LogLevel.Verbose:
          return logger.msg(s, typescript_exports.server.Msg.Info);
      }
    }
  };
  const pending = (0, typescript_exports.createQueue)();
  let canWrite = true;
  if (useWatchGuard) {
    const currentDrive = extractWatchDirectoryCacheKey(
      sys4.resolvePath(sys4.getCurrentDirectory()),
      /*currentDriveKey*/
      void 0
    );
    const statusCache = /* @__PURE__ */ new Map();
    sys4.watchDirectory = (path, callback, recursive, options) => {
      const cacheKey = extractWatchDirectoryCacheKey(path, currentDrive);
      let status = cacheKey && statusCache.get(cacheKey);
      if (status === void 0) {
        if (logger.hasLevel(typescript_exports.server.LogLevel.verbose)) {
          logger.info(`${cacheKey} for path ${path} not found in cache...`);
        }
        try {
          const args = [(0, typescript_exports.combinePaths)(libDirectory, "watchGuard.js"), path];
          if (logger.hasLevel(typescript_exports.server.LogLevel.verbose)) {
            logger.info(`Starting ${process.execPath} with args:${typescript_exports.server.stringifyIndented(args)}`);
          }
          import_child_process.default.execFileSync(process.execPath, args, { stdio: "ignore", env: { ELECTRON_RUN_AS_NODE: "1" } });
          status = true;
          if (logger.hasLevel(typescript_exports.server.LogLevel.verbose)) {
            logger.info(`WatchGuard for path ${path} returned: OK`);
          }
        } catch (e) {
          status = false;
          if (logger.hasLevel(typescript_exports.server.LogLevel.verbose)) {
            logger.info(`WatchGuard for path ${path} returned: ${e.message}`);
          }
        }
        if (cacheKey) {
          statusCache.set(cacheKey, status);
        }
      } else if (logger.hasLevel(typescript_exports.server.LogLevel.verbose)) {
        logger.info(`watchDirectory for ${path} uses cached drive information.`);
      }
      if (status) {
        return watchDirectorySwallowingException(path, callback, recursive, options);
      } else {
        return typescript_exports.noopFileWatcher;
      }
    };
  } else {
    sys4.watchDirectory = watchDirectorySwallowingException;
  }
  sys4.write = (s) => writeMessage(Buffer.from(s, "utf8"));
  sys4.setTimeout = setTimeout;
  sys4.clearTimeout = clearTimeout;
  sys4.setImmediate = setImmediate;
  sys4.clearImmediate = clearImmediate;
  if (typeof global !== "undefined" && global.gc) {
    sys4.gc = () => {
      var _a;
      return (_a = global.gc) == null ? void 0 : _a.call(global);
    };
  }
  const cancellationToken = createCancellationToken(sys4.args);
  const localeStr = typescript_exports.server.findArgument("--locale");
  if (localeStr) {
    (0, typescript_exports.validateLocaleAndSetLanguage)(localeStr, sys4);
  }
  const modeOrUnknown = parseServerMode();
  let serverMode;
  let unknownServerMode;
  if (modeOrUnknown !== void 0) {
    if (typeof modeOrUnknown === "number") serverMode = modeOrUnknown;
    else unknownServerMode = modeOrUnknown;
  }
  return {
    args: process.argv,
    logger,
    cancellationToken,
    serverMode,
    unknownServerMode,
    startSession: startNodeSession
  };
  function createLogger() {
    const cmdLineLogFileName = typescript_exports.server.findArgument("--logFile");
    const cmdLineVerbosity = getLogLevel(typescript_exports.server.findArgument("--logVerbosity"));
    const envLogOptions = parseLoggingEnvironmentString(process.env.TSS_LOG);
    const unsubstitutedLogFileName = cmdLineLogFileName ? (0, typescript_exports.stripQuotes)(cmdLineLogFileName) : envLogOptions.logToFile ? envLogOptions.file || libDirectory + "/.log" + process.pid.toString() : void 0;
    const substitutedLogFileName = unsubstitutedLogFileName ? unsubstitutedLogFileName.replace("PID", process.pid.toString()) : void 0;
    const logVerbosity = cmdLineVerbosity || envLogOptions.detailLevel;
    return new Logger(substitutedLogFileName, envLogOptions.traceToConsole, logVerbosity);
  }
  function writeMessage(buf) {
    if (!canWrite) {
      pending.enqueue(buf);
    } else {
      canWrite = false;
      process.stdout.write(buf, setCanWriteFlagAndWriteMessageIfNecessary);
    }
  }
  function setCanWriteFlagAndWriteMessageIfNecessary() {
    canWrite = true;
    if (!pending.isEmpty()) {
      writeMessage(pending.dequeue());
    }
  }
  function extractWatchDirectoryCacheKey(path, currentDriveKey) {
    path = (0, typescript_exports.normalizeSlashes)(path);
    if (isUNCPath(path)) {
      const firstSlash = path.indexOf(typescript_exports.directorySeparator, 2);
      return firstSlash !== -1 ? (0, typescript_exports.toFileNameLowerCase)(path.substring(0, firstSlash)) : path;
    }
    const rootLength = (0, typescript_exports.getRootLength)(path);
    if (rootLength === 0) {
      return currentDriveKey;
    }
    if (path.charCodeAt(1) === typescript_exports.CharacterCodes.colon && path.charCodeAt(2) === typescript_exports.CharacterCodes.slash) {
      return (0, typescript_exports.toFileNameLowerCase)(path.charAt(0));
    }
    if (path.charCodeAt(0) === typescript_exports.CharacterCodes.slash && path.charCodeAt(1) !== typescript_exports.CharacterCodes.slash) {
      return currentDriveKey;
    }
    return void 0;
  }
  function isUNCPath(s) {
    return s.length > 2 && s.charCodeAt(0) === typescript_exports.CharacterCodes.slash && s.charCodeAt(1) === typescript_exports.CharacterCodes.slash;
  }
  function watchDirectorySwallowingException(path, callback, recursive, options) {
    try {
      return originalWatchDirectory(path, callback, recursive, options);
    } catch (e) {
      logger.info(`Exception when creating directory watcher: ${e.message}`);
      return typescript_exports.noopFileWatcher;
    }
  }
}
function parseEventPort(eventPortStr) {
  const eventPort = eventPortStr === void 0 ? void 0 : parseInt(eventPortStr);
  return eventPort !== void 0 && !isNaN(eventPort) ? eventPort : void 0;
}
function startNodeSession(options, logger, cancellationToken) {
  const rl = import_readline.default.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  });
  const _NodeTypingsInstallerAdapter = class _NodeTypingsInstallerAdapter extends typescript_exports.server.TypingsInstallerAdapter {
    constructor(telemetryEnabled2, logger2, host, globalTypingsCacheLocation, typingSafeListLocation2, typesMapLocation2, npmLocation2, validateDefaultNpmLocation2, event) {
      super(
        telemetryEnabled2,
        logger2,
        host,
        globalTypingsCacheLocation,
        event,
        _NodeTypingsInstallerAdapter.maxActiveRequestCount
      );
      this.typingSafeListLocation = typingSafeListLocation2;
      this.typesMapLocation = typesMapLocation2;
      this.npmLocation = npmLocation2;
      this.validateDefaultNpmLocation = validateDefaultNpmLocation2;
    }
    createInstallerProcess() {
      if (this.logger.hasLevel(typescript_exports.server.LogLevel.requestTime)) {
        this.logger.info("Binding...");
      }
      const args = [typescript_exports.server.Arguments.GlobalCacheLocation, this.globalTypingsCacheLocation];
      if (this.telemetryEnabled) {
        args.push(typescript_exports.server.Arguments.EnableTelemetry);
      }
      if (this.logger.loggingEnabled() && this.logger.getLogFileName()) {
        args.push(typescript_exports.server.Arguments.LogFile, (0, typescript_exports.combinePaths)((0, typescript_exports.getDirectoryPath)((0, typescript_exports.normalizeSlashes)(this.logger.getLogFileName())), `ti-${process.pid}.log`));
      }
      if (this.typingSafeListLocation) {
        args.push(typescript_exports.server.Arguments.TypingSafeListLocation, this.typingSafeListLocation);
      }
      if (this.typesMapLocation) {
        args.push(typescript_exports.server.Arguments.TypesMapLocation, this.typesMapLocation);
      }
      if (this.npmLocation) {
        args.push(typescript_exports.server.Arguments.NpmLocation, this.npmLocation);
      }
      if (this.validateDefaultNpmLocation) {
        args.push(typescript_exports.server.Arguments.ValidateDefaultNpmLocation);
      }
      const execArgv = [];
      for (const arg of process.execArgv) {
        const match = /^--((?:debug|inspect)(?:-brk)?)(?:=(\d+))?$/.exec(arg);
        if (match) {
          const currentPort = match[2] !== void 0 ? +match[2] : match[1].charAt(0) === "d" ? 5858 : 9229;
          execArgv.push(`--${match[1]}=${currentPort + 1}`);
          break;
        }
      }
      const typingsInstaller = (0, typescript_exports.combinePaths)((0, typescript_exports.getDirectoryPath)(typescript_exports.sys.getExecutingFilePath()), "typingsInstaller.js");
      this.installer = import_child_process.default.fork(typingsInstaller, args, { execArgv });
      this.installer.on("message", (m) => this.handleMessage(m));
      this.host.setImmediate(() => this.event({ pid: this.installer.pid }, "typingsInstallerPid"));
      process.on("exit", () => {
        this.installer.kill();
      });
      return this.installer;
    }
  };
  // This number is essentially arbitrary.  Processing more than one typings request
  // at a time makes sense, but having too many in the pipe results in a hang
  // (see https://github.com/nodejs/node/issues/7657).
  // It would be preferable to base our limit on the amount of space left in the
  // buffer, but we have yet to find a way to retrieve that value.
  _NodeTypingsInstallerAdapter.maxActiveRequestCount = 10;
  let NodeTypingsInstallerAdapter = _NodeTypingsInstallerAdapter;
  class IOSession extends typescript_exports.server.Session {
    constructor() {
      const event = (body, eventName) => {
        this.event(body, eventName);
      };
      const host = typescript_exports.sys;
      const typingsInstaller = disableAutomaticTypingAcquisition ? void 0 : new NodeTypingsInstallerAdapter(telemetryEnabled, logger, host, getGlobalTypingsCacheLocation(), typingSafeListLocation, typesMapLocation, npmLocation, validateDefaultNpmLocation, event);
      super({
        host,
        cancellationToken,
        ...options,
        typingsInstaller,
        byteLength: Buffer.byteLength,
        hrtime: process.hrtime,
        logger,
        canUseEvents: true,
        typesMapLocation
      });
      this.eventPort = eventPort;
      if (this.canUseEvents && this.eventPort) {
        const s = import_net.default.connect({ port: this.eventPort }, () => {
          this.eventSocket = s;
          if (this.socketEventQueue) {
            for (const event2 of this.socketEventQueue) {
              this.writeToEventSocket(event2.body, event2.eventName);
            }
            this.socketEventQueue = void 0;
          }
        });
      }
      this.constructed = true;
    }
    event(body, eventName) {
      typescript_exports.Debug.assert(!!this.constructed, "Should only call `IOSession.prototype.event` on an initialized IOSession");
      if (this.canUseEvents && this.eventPort) {
        if (!this.eventSocket) {
          if (this.logger.hasLevel(typescript_exports.server.LogLevel.verbose)) {
            this.logger.info(`eventPort: event "${eventName}" queued, but socket not yet initialized`);
          }
          (this.socketEventQueue || (this.socketEventQueue = [])).push({ body, eventName });
          return;
        } else {
          typescript_exports.Debug.assert(this.socketEventQueue === void 0);
          this.writeToEventSocket(body, eventName);
        }
      } else {
        super.event(body, eventName);
      }
    }
    writeToEventSocket(body, eventName) {
      this.eventSocket.write(typescript_exports.server.formatMessage(typescript_exports.server.toEvent(eventName, body), this.logger, this.byteLength, this.host.newLine), "utf8");
    }
    exit() {
      var _a;
      this.logger.info("Exiting...");
      this.projectService.closeLog();
      (_a = typescript_exports.tracing) == null ? void 0 : _a.stopTracing();
      process.exit(0);
    }
    listen() {
      rl.on("line", (input) => {
        const message = input.trim();
        this.onMessage(message);
      });
      rl.on("close", () => {
        this.exit();
      });
    }
  }
  class IpcIOSession extends IOSession {
    writeMessage(msg) {
      const verboseLogging = logger.hasLevel(typescript_exports.server.LogLevel.verbose);
      if (verboseLogging) {
        const json = JSON.stringify(msg);
        logger.info(`${msg.type}:${typescript_exports.server.indent(json)}`);
      }
      process.send(msg);
    }
    parseMessage(message) {
      return message;
    }
    toStringMessage(message) {
      return JSON.stringify(message, void 0, 2);
    }
    listen() {
      process.on("message", (e) => {
        this.onMessage(e);
      });
      process.on("disconnect", () => {
        this.exit();
      });
    }
  }
  const eventPort = parseEventPort(typescript_exports.server.findArgument("--eventPort"));
  const typingSafeListLocation = typescript_exports.server.findArgument(typescript_exports.server.Arguments.TypingSafeListLocation);
  const typesMapLocation = typescript_exports.server.findArgument(typescript_exports.server.Arguments.TypesMapLocation) || (0, typescript_exports.combinePaths)((0, typescript_exports.getDirectoryPath)(typescript_exports.sys.getExecutingFilePath()), "typesMap.json");
  const npmLocation = typescript_exports.server.findArgument(typescript_exports.server.Arguments.NpmLocation);
  const validateDefaultNpmLocation = typescript_exports.server.hasArgument(typescript_exports.server.Arguments.ValidateDefaultNpmLocation);
  const disableAutomaticTypingAcquisition = typescript_exports.server.hasArgument("--disableAutomaticTypingAcquisition");
  const useNodeIpc = typescript_exports.server.hasArgument("--useNodeIpc");
  const telemetryEnabled = typescript_exports.server.hasArgument(typescript_exports.server.Arguments.EnableTelemetry);
  const commandLineTraceDir = typescript_exports.server.findArgument("--traceDirectory");
  const traceDir = commandLineTraceDir ? (0, typescript_exports.stripQuotes)(commandLineTraceDir) : process.env.TSS_TRACE;
  if (traceDir) {
    (0, typescript_exports.startTracing)("server", traceDir);
  }
  const ioSession = useNodeIpc ? new IpcIOSession() : new IOSession();
  process.on("uncaughtException", (err) => {
    ioSession.logError(err, "unknown");
  });
  process.noAsar = true;
  ioSession.listen();
  function getGlobalTypingsCacheLocation() {
    switch (process.platform) {
      case "win32": {
        const basePath = process.env.LOCALAPPDATA || process.env.APPDATA || import_os.default.homedir && import_os.default.homedir() || process.env.USERPROFILE || process.env.HOMEDRIVE && process.env.HOMEPATH && (0, typescript_exports.normalizeSlashes)(process.env.HOMEDRIVE + process.env.HOMEPATH) || import_os.default.tmpdir();
        return (0, typescript_exports.combinePaths)((0, typescript_exports.combinePaths)((0, typescript_exports.normalizeSlashes)(basePath), "Microsoft/TypeScript"), typescript_exports.versionMajorMinor);
      }
      case "openbsd":
      case "freebsd":
      case "netbsd":
      case "darwin":
      case "linux":
      case "android": {
        const cacheLocation = getNonWindowsCacheLocation(process.platform === "darwin");
        return (0, typescript_exports.combinePaths)((0, typescript_exports.combinePaths)(cacheLocation, "typescript"), typescript_exports.versionMajorMinor);
      }
      default:
        return typescript_exports.Debug.fail(`unsupported platform '${process.platform}'`);
    }
  }
  function getNonWindowsCacheLocation(platformIsDarwin) {
    if (process.env.XDG_CACHE_HOME) {
      return process.env.XDG_CACHE_HOME;
    }
    const usersDir = platformIsDarwin ? "Users" : "home";
    const homePath = import_os.default.homedir && import_os.default.homedir() || process.env.HOME || (process.env.LOGNAME || process.env.USER) && `/${usersDir}/${process.env.LOGNAME || process.env.USER}` || import_os.default.tmpdir();
    const cacheFolder = platformIsDarwin ? "Library/Caches" : ".cache";
    return (0, typescript_exports.combinePaths)((0, typescript_exports.normalizeSlashes)(homePath), cacheFolder);
  }
}
function pipeExists(name) {
  return import_fs.default.existsSync(name);
}
function createCancellationToken(args) {
  let cancellationPipeName;
  for (let i = 0; i < args.length - 1; i++) {
    if (args[i] === "--cancellationPipeName") {
      cancellationPipeName = args[i + 1];
      break;
    }
  }
  if (!cancellationPipeName) {
    return typescript_exports.server.nullCancellationToken;
  }
  if (cancellationPipeName.charAt(cancellationPipeName.length - 1) === "*") {
    const namePrefix = cancellationPipeName.slice(0, -1);
    if (namePrefix.length === 0 || namePrefix.includes("*")) {
      throw new Error("Invalid name for template cancellation pipe: it should have length greater than 2 characters and contain only one '*'.");
    }
    let perRequestPipeName;
    let currentRequestId;
    return {
      isCancellationRequested: () => perRequestPipeName !== void 0 && pipeExists(perRequestPipeName),
      setRequest(requestId) {
        currentRequestId = requestId;
        perRequestPipeName = namePrefix + requestId;
      },
      resetRequest(requestId) {
        if (currentRequestId !== requestId) {
          throw new Error(`Mismatched request id, expected ${currentRequestId}, actual ${requestId}`);
        }
        perRequestPipeName = void 0;
      }
    };
  } else {
    return {
      isCancellationRequested: () => pipeExists(cancellationPipeName),
      setRequest: (_requestId) => void 0,
      resetRequest: (_requestId) => void 0
    };
  }
}

// src/tsserver/server.ts
function findArgumentStringArray(argName) {
  const arg = typescript_exports.server.findArgument(argName);
  if (arg === void 0) {
    return typescript_exports.emptyArray;
  }
  return arg.split(",").filter((name) => name !== "");
}
function start({ args, logger, cancellationToken, serverMode, unknownServerMode, startSession: startServer }, platform) {
  logger.info(`Starting TS Server`);
  logger.info(`Version: ${typescript_exports.version}`);
  logger.info(`Arguments: ${args.join(" ")}`);
  logger.info(`Platform: ${platform} NodeVersion: ${process.version} CaseSensitive: ${typescript_exports.sys.useCaseSensitiveFileNames}`);
  logger.info(`ServerMode: ${serverMode} hasUnknownServerMode: ${unknownServerMode}`);
  typescript_exports.setStackTraceLimit();
  if (typescript_exports.Debug.isDebugging) {
    typescript_exports.Debug.enableDebugInfo();
  }
  if (typescript_exports.sys.tryEnableSourceMapsForHost && /^development$/i.test(typescript_exports.sys.getEnvironmentVariable("NODE_ENV"))) {
    typescript_exports.sys.tryEnableSourceMapsForHost();
  }
  console.log = (...args2) => logger.msg(args2.length === 1 ? args2[0] : args2.join(", "), typescript_exports.server.Msg.Info);
  console.warn = (...args2) => logger.msg(args2.length === 1 ? args2[0] : args2.join(", "), typescript_exports.server.Msg.Err);
  console.error = (...args2) => logger.msg(args2.length === 1 ? args2[0] : args2.join(", "), typescript_exports.server.Msg.Err);
  startServer(
    {
      globalPlugins: findArgumentStringArray("--globalPlugins"),
      pluginProbeLocations: findArgumentStringArray("--pluginProbeLocations"),
      allowLocalPluginLoads: typescript_exports.server.hasArgument("--allowLocalPluginLoads"),
      useSingleInferredProject: typescript_exports.server.hasArgument("--useSingleInferredProject"),
      useInferredProjectPerProjectRoot: typescript_exports.server.hasArgument("--useInferredProjectPerProjectRoot"),
      suppressDiagnosticEvents: typescript_exports.server.hasArgument("--suppressDiagnosticEvents"),
      noGetErrOnBackgroundUpdate: typescript_exports.server.hasArgument("--noGetErrOnBackgroundUpdate"),
      canUseWatchEvents: typescript_exports.server.hasArgument("--canUseWatchEvents"),
      serverMode
    },
    logger,
    cancellationToken
  );
}
typescript_exports.setStackTraceLimit();
start(initializeNodeSystem(), import_os2.default.platform());
//# sourceMappingURL=_tsserver.js.map
