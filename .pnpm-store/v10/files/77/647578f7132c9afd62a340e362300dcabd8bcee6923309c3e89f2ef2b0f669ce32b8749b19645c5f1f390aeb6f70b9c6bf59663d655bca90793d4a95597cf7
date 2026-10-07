'use strict';

var node_crypto = require('node:crypto');
var fs = require('node:fs');
var module$1 = require('node:module');
var path = require('node:path');
var node_url = require('node:url');
var node_worker_threads = require('node:worker_threads');
var core = require('@pkgr/core');

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
const import_meta = {};
const INT32_BYTES = 4;
const TsRunner = {
  // https://github.com/TypeStrong/ts-node
  TsNode: "ts-node",
  // https://github.com/egoist/esbuild-register
  EsbuildRegister: "esbuild-register",
  // https://github.com/folke/esbuild-runner
  EsbuildRunner: "esbuild-runner",
  // https://github.com/swc-project/swc-node/tree/master/packages/register
  SWC: "swc",
  // https://github.com/esbuild-kit/tsx
  TSX: "tsx"
};
const {
  NODE_OPTIONS,
  SYNCKIT_EXEC_ARGV,
  SYNCKIT_GLOBAL_SHIMS,
  SYNCKIT_TIMEOUT,
  SYNCKIT_TS_RUNNER
} = process.env;
const IS_NODE_20 = Number(process.versions.node.split(".")[0]) >= 20;
const DEFAULT_TIMEOUT = SYNCKIT_TIMEOUT ? +SYNCKIT_TIMEOUT : void 0;
const DEFAULT_EXEC_ARGV = (SYNCKIT_EXEC_ARGV == null ? void 0 : SYNCKIT_EXEC_ARGV.split(",")) || [];
const DEFAULT_TS_RUNNER = SYNCKIT_TS_RUNNER;
const DEFAULT_GLOBAL_SHIMS = ["1", "true"].includes(
  SYNCKIT_GLOBAL_SHIMS
);
const DEFAULT_GLOBAL_SHIMS_PRESET = [
  {
    moduleName: "node-fetch",
    globalName: "fetch"
  },
  {
    moduleName: "node:perf_hooks",
    globalName: "performance",
    named: "performance"
  }
];
const MTS_SUPPORTED_NODE_VERSION = 16;
let syncFnCache;
function extractProperties(object) {
  if (object && typeof object === "object") {
    const properties = {};
    for (const key in object) {
      properties[key] = object[key];
    }
    return properties;
  }
}
function createSyncFn(workerPath, timeoutOrOptions) {
  syncFnCache != null ? syncFnCache : syncFnCache = /* @__PURE__ */ new Map();
  const cachedSyncFn = syncFnCache.get(workerPath);
  if (cachedSyncFn) {
    return cachedSyncFn;
  }
  if (!path.isAbsolute(workerPath)) {
    throw new Error("`workerPath` must be absolute");
  }
  const syncFn = startWorkerThread(
    workerPath,
    /* istanbul ignore next */
    typeof timeoutOrOptions === "number" ? { timeout: timeoutOrOptions } : timeoutOrOptions
  );
  syncFnCache.set(workerPath, syncFn);
  return syncFn;
}
const cjsRequire = typeof require === "undefined" ? module$1.createRequire(import_meta.url) : (
  /* istanbul ignore next */
  require
);
const dataUrl = (code) => new URL(`data:text/javascript,${encodeURIComponent(code)}`);
const isFile = (path2) => {
  var _a;
  try {
    return !!((_a = fs.statSync(path2, { throwIfNoEntry: false })) == null ? void 0 : _a.isFile());
  } catch (e) {
    return false;
  }
};
const setupTsRunner = (workerPath, { execArgv, tsRunner }) => {
  let ext = path.extname(workerPath);
  if (!/[/\\]node_modules[/\\]/.test(workerPath) && (!ext || /^\.[cm]?js$/.test(ext))) {
    const workPathWithoutExt = ext ? workerPath.slice(0, -ext.length) : workerPath;
    let extensions;
    switch (ext) {
      case ".cjs": {
        extensions = [".cts", ".cjs"];
        break;
      }
      case ".mjs": {
        extensions = [".mts", ".mjs"];
        break;
      }
      default: {
        extensions = [".ts", ".js"];
        break;
      }
    }
    const found = core.tryExtensions(workPathWithoutExt, extensions);
    let differentExt;
    if (found && (!ext || (differentExt = found !== workPathWithoutExt))) {
      workerPath = found;
      if (differentExt) {
        ext = path.extname(workerPath);
      }
    }
  }
  const isTs = /\.[cm]?ts$/.test(workerPath);
  let jsUseEsm = workerPath.endsWith(".mjs");
  let tsUseEsm = workerPath.endsWith(".mts");
  if (isTs) {
    if (!tsUseEsm) {
      const pkg = core.findUp(workerPath);
      if (pkg) {
        tsUseEsm = cjsRequire(pkg).type === "module";
      }
    }
    if (tsRunner == null && core.isPkgAvailable(TsRunner.TsNode)) {
      tsRunner = TsRunner.TsNode;
    }
    switch (tsRunner) {
      case TsRunner.TsNode: {
        if (tsUseEsm) {
          if (!execArgv.includes("--loader")) {
            execArgv = ["--loader", `${TsRunner.TsNode}/esm`, ...execArgv];
          }
        } else if (!execArgv.includes("-r")) {
          execArgv = ["-r", `${TsRunner.TsNode}/register`, ...execArgv];
        }
        break;
      }
      case TsRunner.EsbuildRegister: {
        if (!execArgv.includes("-r")) {
          execArgv = ["-r", TsRunner.EsbuildRegister, ...execArgv];
        }
        break;
      }
      case TsRunner.EsbuildRunner: {
        if (!execArgv.includes("-r")) {
          execArgv = ["-r", `${TsRunner.EsbuildRunner}/register`, ...execArgv];
        }
        break;
      }
      case TsRunner.SWC: {
        if (!execArgv.includes("-r")) {
          execArgv = ["-r", `@${TsRunner.SWC}-node/register`, ...execArgv];
        }
        break;
      }
      case TsRunner.TSX: {
        if (!execArgv.includes("--loader")) {
          execArgv = ["--loader", TsRunner.TSX, ...execArgv];
        }
        break;
      }
      default: {
        throw new Error(`Unknown ts runner: ${String(tsRunner)}`);
      }
    }
  } else if (!jsUseEsm) {
    const pkg = core.findUp(workerPath);
    if (pkg) {
      jsUseEsm = cjsRequire(pkg).type === "module";
    }
  }
  let resolvedPnpLoaderPath;
  if (process.versions.pnp) {
    const nodeOptions = NODE_OPTIONS == null ? void 0 : NODE_OPTIONS.split(/\s+/);
    let pnpApiPath;
    try {
      pnpApiPath = cjsRequire.resolve("pnpapi");
    } catch (e) {
    }
    if (pnpApiPath && !(nodeOptions == null ? void 0 : nodeOptions.some(
      (option, index) => ["-r", "--require"].includes(option) && pnpApiPath === cjsRequire.resolve(nodeOptions[index + 1])
    )) && !execArgv.includes(pnpApiPath)) {
      execArgv = ["-r", pnpApiPath, ...execArgv];
      const pnpLoaderPath = path.resolve(pnpApiPath, "../.pnp.loader.mjs");
      if (isFile(pnpLoaderPath)) {
        resolvedPnpLoaderPath = node_url.pathToFileURL(pnpLoaderPath).toString();
        if (!IS_NODE_20) {
          execArgv = [
            "--experimental-loader",
            resolvedPnpLoaderPath,
            ...execArgv
          ];
        }
      }
    }
  }
  return {
    ext,
    isTs,
    jsUseEsm,
    tsRunner,
    tsUseEsm,
    workerPath,
    pnpLoaderPath: resolvedPnpLoaderPath,
    execArgv
  };
};
const md5Hash = (text) => node_crypto.createHash("md5").update(text).digest("hex");
const encodeImportModule = (moduleNameOrGlobalShim, type = "import") => {
  const { moduleName, globalName, named, conditional } = typeof moduleNameOrGlobalShim === "string" ? { moduleName: moduleNameOrGlobalShim } : moduleNameOrGlobalShim;
  const importStatement = type === "import" ? `import${globalName ? " " + (named === null ? "* as " + globalName : (named == null ? void 0 : named.trim()) ? `{${named}}` : globalName) + " from" : ""} '${path.isAbsolute(moduleName) ? String(node_url.pathToFileURL(moduleName)) : moduleName}'` : `${globalName ? "const " + ((named == null ? void 0 : named.trim()) ? `{${named}}` : globalName) + "=" : ""}require('${moduleName.replace(/\\/g, "\\\\")}')`;
  if (!globalName) {
    return importStatement;
  }
  const overrideStatement = `globalThis.${globalName}=${(named == null ? void 0 : named.trim()) ? named : globalName}`;
  return importStatement + (conditional === false ? `;${overrideStatement}` : `;if(!globalThis.${globalName})${overrideStatement}`);
};
const _generateGlobals = (globalShims, type) => globalShims.reduce(
  (acc, shim) => `${acc}${acc ? ";" : ""}${encodeImportModule(shim, type)}`,
  ""
);
let globalsCache;
let tmpdir;
const _dirname = typeof __dirname === "undefined" ? path.dirname(node_url.fileURLToPath(import_meta.url)) : (
  /* istanbul ignore next */
  __dirname
);
let sharedBuffer;
let sharedBufferView;
const generateGlobals = (workerPath, globalShims, type = "import") => {
  globalsCache != null ? globalsCache : globalsCache = /* @__PURE__ */ new Map();
  const cached = globalsCache.get(workerPath);
  if (cached) {
    const [content2, filepath2] = cached;
    if (type === "require" && !filepath2 || type === "import" && filepath2 && isFile(filepath2)) {
      return content2;
    }
  }
  const globals = _generateGlobals(globalShims, type);
  let content = globals;
  let filepath;
  if (type === "import") {
    if (!tmpdir) {
      tmpdir = path.resolve(core.findUp(_dirname), "../node_modules/.synckit");
    }
    fs.mkdirSync(tmpdir, { recursive: true });
    filepath = path.resolve(tmpdir, md5Hash(workerPath) + ".mjs");
    content = encodeImportModule(filepath);
    fs.writeFileSync(filepath, globals);
  }
  globalsCache.set(workerPath, [content, filepath]);
  return content;
};
function startWorkerThread(workerPath, {
  timeout = DEFAULT_TIMEOUT,
  execArgv = DEFAULT_EXEC_ARGV,
  tsRunner = DEFAULT_TS_RUNNER,
  transferList = [],
  globalShims = DEFAULT_GLOBAL_SHIMS
} = {}) {
  const { port1: mainPort, port2: workerPort } = new node_worker_threads.MessageChannel();
  const {
    isTs,
    ext,
    jsUseEsm,
    tsUseEsm,
    tsRunner: finalTsRunner,
    workerPath: finalWorkerPath,
    pnpLoaderPath,
    execArgv: finalExecArgv
  } = setupTsRunner(workerPath, { execArgv, tsRunner });
  const workerPathUrl = node_url.pathToFileURL(finalWorkerPath);
  if (/\.[cm]ts$/.test(finalWorkerPath)) {
    const isTsxSupported = !tsUseEsm || Number.parseFloat(process.versions.node) >= MTS_SUPPORTED_NODE_VERSION;
    if (!finalTsRunner) {
      throw new Error("No ts runner specified, ts worker path is not supported");
    } else if ([
      // https://github.com/egoist/esbuild-register/issues/79
      TsRunner.EsbuildRegister,
      // https://github.com/folke/esbuild-runner/issues/67
      TsRunner.EsbuildRunner,
      // https://github.com/swc-project/swc-node/issues/667
      TsRunner.SWC,
      .../* istanbul ignore next */
      isTsxSupported ? [] : [TsRunner.TSX]
    ].includes(finalTsRunner)) {
      throw new Error(
        `${finalTsRunner} is not supported for ${ext} files yet` + /* istanbul ignore next */
        (isTsxSupported ? ", you can try [tsx](https://github.com/esbuild-kit/tsx) instead" : "")
      );
    }
  }
  const finalGlobalShims = (globalShims === true ? DEFAULT_GLOBAL_SHIMS_PRESET : Array.isArray(globalShims) ? globalShims : []).filter(({ moduleName }) => core.isPkgAvailable(moduleName));
  sharedBufferView != null ? sharedBufferView : sharedBufferView = new Int32Array(
    /* istanbul ignore next */
    sharedBuffer != null ? sharedBuffer : sharedBuffer = new SharedArrayBuffer(
      INT32_BYTES
    ),
    0,
    1
  );
  const useGlobals = finalGlobalShims.length > 0;
  const useEval = isTs ? !tsUseEsm : !jsUseEsm && useGlobals;
  const worker = new node_worker_threads.Worker(
    jsUseEsm && useGlobals || tsUseEsm && finalTsRunner === TsRunner.TsNode ? dataUrl(
      `${generateGlobals(
        finalWorkerPath,
        finalGlobalShims
      )};import '${String(workerPathUrl)}'`
    ) : useEval ? `${generateGlobals(
      finalWorkerPath,
      finalGlobalShims,
      "require"
    )};${encodeImportModule(finalWorkerPath, "require")}` : workerPathUrl,
    {
      eval: useEval,
      workerData: { sharedBuffer, workerPort, pnpLoaderPath },
      transferList: [workerPort, ...transferList],
      execArgv: finalExecArgv
    }
  );
  let nextID = 0;
  const receiveMessageWithId = (port, expectedId, waitingTimeout) => {
    const start = Date.now();
    const status = Atomics.wait(sharedBufferView, 0, 0, waitingTimeout);
    Atomics.store(sharedBufferView, 0, 0);
    if (!["ok", "not-equal"].includes(status)) {
      const abortMsg = {
        id: expectedId,
        cmd: "abort"
      };
      port.postMessage(abortMsg);
      throw new Error("Internal error: Atomics.wait() failed: " + status);
    }
    const result = node_worker_threads.receiveMessageOnPort(mainPort);
    const msg = result == null ? void 0 : result.message;
    if ((msg == null ? void 0 : msg.id) == null || msg.id < expectedId) {
      const waitingTime = Date.now() - start;
      return receiveMessageWithId(
        port,
        expectedId,
        waitingTimeout ? waitingTimeout - waitingTime : void 0
      );
    }
    const _a = msg, { id } = _a, message = __objRest(_a, ["id"]);
    if (id < expectedId) {
      const waitingTime = Date.now() - start;
      return receiveMessageWithId(
        port,
        expectedId,
        waitingTimeout ? waitingTimeout - waitingTime : void 0
      );
    }
    if (expectedId !== id) {
      throw new Error(
        `Internal error: Expected id ${expectedId} but got id ${id}`
      );
    }
    return __spreadValues({ id }, message);
  };
  const syncFn = (...args) => {
    const id = nextID++;
    const msg = { id, args };
    worker.postMessage(msg);
    const { result, error, properties } = receiveMessageWithId(
      mainPort,
      id,
      timeout
    );
    if (error) {
      throw Object.assign(error, properties);
    }
    return result;
  };
  worker.unref();
  return syncFn;
}
function runAsWorker(fn) {
  if (!node_worker_threads.workerData) {
    return;
  }
  const { workerPort, sharedBuffer: sharedBuffer2, pnpLoaderPath } = node_worker_threads.workerData;
  if (pnpLoaderPath && IS_NODE_20) {
    module$1.register(pnpLoaderPath);
  }
  const sharedBufferView2 = new Int32Array(sharedBuffer2, 0, 1);
  node_worker_threads.parentPort.on(
    "message",
    ({ id, args }) => {
      (() => __async(this, null, function* () {
        let isAborted = false;
        const handleAbortMessage = (msg2) => {
          if (msg2.id === id && msg2.cmd === "abort") {
            isAborted = true;
          }
        };
        workerPort.on("message", handleAbortMessage);
        let msg;
        try {
          msg = { id, result: yield fn(...args) };
        } catch (error) {
          msg = { id, error, properties: extractProperties(error) };
        }
        workerPort.off("message", handleAbortMessage);
        if (isAborted) {
          return;
        }
        workerPort.postMessage(msg);
        Atomics.add(sharedBufferView2, 0, 1);
        Atomics.notify(sharedBufferView2, 0);
      }))();
    }
  );
}

exports.DEFAULT_EXEC_ARGV = DEFAULT_EXEC_ARGV;
exports.DEFAULT_GLOBAL_SHIMS = DEFAULT_GLOBAL_SHIMS;
exports.DEFAULT_GLOBAL_SHIMS_PRESET = DEFAULT_GLOBAL_SHIMS_PRESET;
exports.DEFAULT_TIMEOUT = DEFAULT_TIMEOUT;
exports.DEFAULT_TS_RUNNER = DEFAULT_TS_RUNNER;
exports.MTS_SUPPORTED_NODE_VERSION = MTS_SUPPORTED_NODE_VERSION;
exports.TsRunner = TsRunner;
exports._generateGlobals = _generateGlobals;
exports.createSyncFn = createSyncFn;
exports.encodeImportModule = encodeImportModule;
exports.extractProperties = extractProperties;
exports.generateGlobals = generateGlobals;
exports.isFile = isFile;
exports.runAsWorker = runAsWorker;
