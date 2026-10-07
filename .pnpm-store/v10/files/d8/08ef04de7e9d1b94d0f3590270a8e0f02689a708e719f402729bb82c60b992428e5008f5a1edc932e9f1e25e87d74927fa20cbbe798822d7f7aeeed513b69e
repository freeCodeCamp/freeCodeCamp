import { createRequire as __prettierCreateRequire } from "module";
import { fileURLToPath as __prettierFileUrlToPath } from "url";
import { dirname as __prettierDirname } from "path";
const require = __prettierCreateRequire(import.meta.url);
const __filename = __prettierFileUrlToPath(import.meta.url);
const __dirname = __prettierDirname(__filename);

// node_modules/atomically/dist/index.js
import { once } from "events";
import { createWriteStream } from "fs";
import path2 from "path";
import { Readable } from "stream";

// node_modules/stubborn-fs/dist/index.js
import fs from "fs";
import { promisify } from "util";

// node_modules/stubborn-utils/dist/attemptify_async.js
var attemptifyAsync = (fn, options) => {
  const { onError } = options;
  return function attemptified(...args) {
    return fn.apply(void 0, args).catch(onError);
  };
};
var attemptify_async_default = attemptifyAsync;

// node_modules/stubborn-utils/dist/attemptify_sync.js
var attemptifySync = (fn, options) => {
  const { onError } = options;
  return function attemptified(...args) {
    try {
      return fn.apply(void 0, args);
    } catch (error) {
      return onError(error);
    }
  };
};
var attemptify_sync_default = attemptifySync;

// node_modules/stubborn-utils/dist/constants.js
var RETRY_INTERVAL = 250;

// node_modules/stubborn-utils/dist/retryify_async.js
var retryifyAsync = (fn, options) => {
  const { isRetriable } = options;
  return function retryified(options2) {
    const { timeout } = options2;
    const interval = options2.interval ?? RETRY_INTERVAL;
    const timestamp = Date.now() + timeout;
    return function attempt3(...args) {
      return fn.apply(void 0, args).catch((error) => {
        if (!isRetriable(error))
          throw error;
        if (Date.now() >= timestamp)
          throw error;
        const delay = Math.round(interval * Math.random());
        if (delay > 0) {
          const delayPromise = new Promise((resolve3) => setTimeout(resolve3, delay));
          return delayPromise.then(() => attempt3.apply(void 0, args));
        } else {
          return attempt3.apply(void 0, args);
        }
      });
    };
  };
};
var retryify_async_default = retryifyAsync;

// node_modules/stubborn-utils/dist/retryify_sync.js
var retryifySync = (fn, options) => {
  const { isRetriable } = options;
  return function retryified(options2) {
    const { timeout } = options2;
    const timestamp = Date.now() + timeout;
    return function attempt3(...args) {
      while (true) {
        try {
          return fn.apply(void 0, args);
        } catch (error) {
          if (!isRetriable(error))
            throw error;
          if (Date.now() >= timestamp)
            throw error;
          continue;
        }
      }
    };
  };
};
var retryify_sync_default = retryifySync;

// node_modules/stubborn-fs/dist/constants.js
import process from "process";

// node_modules/stubborn-fs/dist/handlers.js
var Handlers = {
  /* API */
  isChangeErrorOk: (error) => {
    if (!Handlers.isNodeError(error))
      return false;
    const { code } = error;
    if (code === "ENOSYS")
      return true;
    if (!IS_USER_ROOT && (code === "EINVAL" || code === "EPERM"))
      return true;
    return false;
  },
  isNodeError: (error) => {
    return error instanceof Error;
  },
  isRetriableError: (error) => {
    if (!Handlers.isNodeError(error))
      return false;
    const { code } = error;
    if (code === "EMFILE" || code === "ENFILE" || code === "EAGAIN" || code === "EBUSY" || code === "EACCESS" || code === "EACCES" || code === "EACCS" || code === "EPERM")
      return true;
    return false;
  },
  onChangeError: (error) => {
    if (!Handlers.isNodeError(error))
      throw error;
    if (Handlers.isChangeErrorOk(error))
      return;
    throw error;
  }
};
var handlers_default = Handlers;

// node_modules/stubborn-fs/dist/constants.js
var ATTEMPTIFY_CHANGE_ERROR_OPTIONS = {
  onError: handlers_default.onChangeError
};
var ATTEMPTIFY_NOOP_OPTIONS = {
  onError: () => void 0
};
var IS_USER_ROOT = process.getuid ? !process.getuid() : false;
var RETRYIFY_OPTIONS = {
  isRetriable: handlers_default.isRetriableError
};

// node_modules/stubborn-fs/dist/index.js
var FS = {
  attempt: {
    /* ASYNC */
    chmod: attemptify_async_default(promisify(fs.chmod), ATTEMPTIFY_CHANGE_ERROR_OPTIONS),
    chown: attemptify_async_default(promisify(fs.chown), ATTEMPTIFY_CHANGE_ERROR_OPTIONS),
    close: attemptify_async_default(promisify(fs.close), ATTEMPTIFY_NOOP_OPTIONS),
    fsync: attemptify_async_default(promisify(fs.fsync), ATTEMPTIFY_NOOP_OPTIONS),
    mkdir: attemptify_async_default(promisify(fs.mkdir), ATTEMPTIFY_NOOP_OPTIONS),
    realpath: attemptify_async_default(promisify(fs.realpath), ATTEMPTIFY_NOOP_OPTIONS),
    stat: attemptify_async_default(promisify(fs.stat), ATTEMPTIFY_NOOP_OPTIONS),
    unlink: attemptify_async_default(promisify(fs.unlink), ATTEMPTIFY_NOOP_OPTIONS),
    /* SYNC */
    chmodSync: attemptify_sync_default(fs.chmodSync, ATTEMPTIFY_CHANGE_ERROR_OPTIONS),
    chownSync: attemptify_sync_default(fs.chownSync, ATTEMPTIFY_CHANGE_ERROR_OPTIONS),
    closeSync: attemptify_sync_default(fs.closeSync, ATTEMPTIFY_NOOP_OPTIONS),
    existsSync: attemptify_sync_default(fs.existsSync, ATTEMPTIFY_NOOP_OPTIONS),
    fsyncSync: attemptify_sync_default(fs.fsync, ATTEMPTIFY_NOOP_OPTIONS),
    mkdirSync: attemptify_sync_default(fs.mkdirSync, ATTEMPTIFY_NOOP_OPTIONS),
    realpathSync: attemptify_sync_default(fs.realpathSync, ATTEMPTIFY_NOOP_OPTIONS),
    statSync: attemptify_sync_default(fs.statSync, ATTEMPTIFY_NOOP_OPTIONS),
    unlinkSync: attemptify_sync_default(fs.unlinkSync, ATTEMPTIFY_NOOP_OPTIONS)
  },
  retry: {
    /* ASYNC */
    close: retryify_async_default(promisify(fs.close), RETRYIFY_OPTIONS),
    fsync: retryify_async_default(promisify(fs.fsync), RETRYIFY_OPTIONS),
    open: retryify_async_default(promisify(fs.open), RETRYIFY_OPTIONS),
    readFile: retryify_async_default(promisify(fs.readFile), RETRYIFY_OPTIONS),
    rename: retryify_async_default(promisify(fs.rename), RETRYIFY_OPTIONS),
    stat: retryify_async_default(promisify(fs.stat), RETRYIFY_OPTIONS),
    write: retryify_async_default(promisify(fs.write), RETRYIFY_OPTIONS),
    writeFile: retryify_async_default(promisify(fs.writeFile), RETRYIFY_OPTIONS),
    /* SYNC */
    closeSync: retryify_sync_default(fs.closeSync, RETRYIFY_OPTIONS),
    fsyncSync: retryify_sync_default(fs.fsyncSync, RETRYIFY_OPTIONS),
    openSync: retryify_sync_default(fs.openSync, RETRYIFY_OPTIONS),
    readFileSync: retryify_sync_default(fs.readFileSync, RETRYIFY_OPTIONS),
    renameSync: retryify_sync_default(fs.renameSync, RETRYIFY_OPTIONS),
    statSync: retryify_sync_default(fs.statSync, RETRYIFY_OPTIONS),
    writeSync: retryify_sync_default(fs.writeSync, RETRYIFY_OPTIONS),
    writeFileSync: retryify_sync_default(fs.writeFileSync, RETRYIFY_OPTIONS)
  }
};
var dist_default = FS;

// node_modules/atomically/dist/constants.js
import process2 from "process";
var DEFAULT_ENCODING = "utf8";
var DEFAULT_FILE_MODE = 438;
var DEFAULT_FOLDER_MODE = 511;
var DEFAULT_READ_OPTIONS = {};
var DEFAULT_WRITE_OPTIONS = {};
var DEFAULT_USER_UID = process2.geteuid ? process2.geteuid() : -1;
var DEFAULT_USER_GID = process2.getegid ? process2.getegid() : -1;
var DEFAULT_INTERVAL_ASYNC = 200;
var DEFAULT_TIMEOUT_ASYNC = 7500;
var IS_POSIX = !!process2.getuid;
var IS_USER_ROOT2 = process2.getuid ? !process2.getuid() : false;
var LIMIT_BASENAME_LENGTH = 128;

// node_modules/atomically/dist/utils/lang.js
var isException = (value) => {
  return value instanceof Error && "code" in value;
};
var isFunction = (value) => {
  return typeof value === "function";
};
var isString = (value) => {
  return typeof value === "string";
};
var isUndefined = (value) => {
  return value === void 0;
};

// node_modules/atomically/dist/utils/scheduler.js
var Queues = {};
var Scheduler = {
  /* API */
  next: (id) => {
    const queue = Queues[id];
    if (!queue)
      return;
    queue.shift();
    const job = queue[0];
    if (job) {
      job(() => Scheduler.next(id));
    } else {
      delete Queues[id];
    }
  },
  schedule: (id) => {
    return new Promise((resolve3) => {
      let queue = Queues[id];
      if (!queue)
        queue = Queues[id] = [];
      queue.push(resolve3);
      if (queue.length > 1)
        return;
      resolve3(() => Scheduler.next(id));
    });
  }
};
var scheduler_default = Scheduler;

// node_modules/atomically/dist/utils/temp.js
import path from "path";

// node_modules/when-exit/dist/node/interceptor.js
import process4 from "process";

// node_modules/when-exit/dist/node/constants.js
import process3 from "process";
var IS_LINUX = process3.platform === "linux";
var IS_WINDOWS = process3.platform === "win32";

// node_modules/when-exit/dist/node/signals.js
var Signals = ["SIGHUP", "SIGINT", "SIGTERM"];
if (!IS_WINDOWS) {
  Signals.push("SIGALRM", "SIGABRT", "SIGVTALRM", "SIGXCPU", "SIGXFSZ", "SIGUSR2", "SIGTRAP", "SIGSYS", "SIGQUIT", "SIGIOT");
}
if (IS_LINUX) {
  Signals.push("SIGIO", "SIGPOLL", "SIGPWR", "SIGSTKFLT");
}
var signals_default = Signals;

// node_modules/when-exit/dist/node/interceptor.js
var Interceptor = class {
  /* CONSTRUCTOR */
  constructor() {
    this.callbacks = /* @__PURE__ */ new Set();
    this.exited = false;
    this.exit = (signal) => {
      if (this.exited)
        return;
      this.exited = true;
      for (const callback of this.callbacks) {
        callback();
      }
      if (signal) {
        if (IS_WINDOWS && (signal !== "SIGINT" && signal !== "SIGTERM" && signal !== "SIGKILL")) {
          process4.kill(process4.pid, "SIGTERM");
        } else {
          process4.kill(process4.pid, signal);
        }
      }
    };
    this.hook = () => {
      process4.once("exit", () => this.exit());
      for (const signal of signals_default) {
        try {
          process4.once(signal, () => this.exit(signal));
        } catch {
        }
      }
    };
    this.register = (callback) => {
      this.callbacks.add(callback);
      return () => {
        this.callbacks.delete(callback);
      };
    };
    this.hook();
  }
};
var interceptor_default = new Interceptor();

// node_modules/when-exit/dist/node/index.js
var whenExit = interceptor_default.register;
var node_default = whenExit;

// node_modules/atomically/dist/utils/temp.js
var Temp = {
  /* VARIABLES */
  store: {},
  // filePath => purge
  /* API */
  create: (filePath) => {
    const randomness = `000000${Math.floor(Math.random() * 16777215).toString(16)}`.slice(-6);
    const timestamp = Date.now().toString().slice(-10);
    const prefix = "tmp-";
    const suffix = `.${prefix}${timestamp}${randomness}`;
    const tempPath = `${filePath}${suffix}`;
    return tempPath;
  },
  get: (filePath, creator, purge = true) => {
    const tempPath = Temp.truncate(creator(filePath));
    if (tempPath in Temp.store)
      return Temp.get(filePath, creator, purge);
    Temp.store[tempPath] = purge;
    const disposer = () => delete Temp.store[tempPath];
    return [tempPath, disposer];
  },
  purge: (filePath) => {
    if (!Temp.store[filePath])
      return;
    delete Temp.store[filePath];
    dist_default.attempt.unlink(filePath);
  },
  purgeSync: (filePath) => {
    if (!Temp.store[filePath])
      return;
    delete Temp.store[filePath];
    dist_default.attempt.unlinkSync(filePath);
  },
  purgeSyncAll: () => {
    for (const filePath in Temp.store) {
      Temp.purgeSync(filePath);
    }
  },
  truncate: (filePath) => {
    const basename = path.basename(filePath);
    if (basename.length <= LIMIT_BASENAME_LENGTH)
      return filePath;
    const truncable = /^(\.?)(.*?)((?:\.[^.]+)?(?:\.tmp-\d{10}[a-f0-9]{6})?)$/.exec(basename);
    if (!truncable)
      return filePath;
    const truncationLength = basename.length - LIMIT_BASENAME_LENGTH;
    return `${filePath.slice(0, -basename.length)}${truncable[1]}${truncable[2].slice(0, -truncationLength)}${truncable[3]}`;
  }
};
node_default(Temp.purgeSyncAll);
var temp_default = Temp;

// node_modules/atomically/dist/index.js
function readFile(filePath, options = DEFAULT_READ_OPTIONS) {
  if (isString(options))
    return readFile(filePath, { encoding: options });
  const timeout = options.timeout ?? DEFAULT_TIMEOUT_ASYNC;
  const retryOptions = { timeout, interval: DEFAULT_INTERVAL_ASYNC };
  return dist_default.retry.readFile(retryOptions)(filePath, options);
}
function writeFile(filePath, data, options, callback) {
  if (isFunction(options))
    return writeFile(filePath, data, DEFAULT_WRITE_OPTIONS, options);
  const promise = writeFileAsync(filePath, data, options);
  if (callback)
    promise.then(callback, callback);
  return promise;
}
async function writeFileAsync(filePath, data, options = DEFAULT_WRITE_OPTIONS) {
  if (isString(options))
    return writeFileAsync(filePath, data, { encoding: options });
  const timeout = options.timeout ?? DEFAULT_TIMEOUT_ASYNC;
  const retryOptions = { timeout, interval: DEFAULT_INTERVAL_ASYNC };
  let schedulerCustomDisposer = null;
  let schedulerDisposer = null;
  let tempDisposer = null;
  let tempPath = null;
  let fd = null;
  try {
    if (options.schedule)
      schedulerCustomDisposer = await options.schedule(filePath);
    schedulerDisposer = await scheduler_default.schedule(filePath);
    const filePathReal = await dist_default.attempt.realpath(filePath);
    const filePathExists = !!filePathReal;
    filePath = filePathReal || filePath;
    [tempPath, tempDisposer] = temp_default.get(filePath, options.tmpCreate || temp_default.create, !(options.tmpPurge === false));
    const useStatChown = IS_POSIX && isUndefined(options.chown);
    const useStatMode = isUndefined(options.mode);
    if (filePathExists && (useStatChown || useStatMode)) {
      const stats = await dist_default.attempt.stat(filePath);
      if (stats) {
        options = { ...options };
        if (useStatChown) {
          options.chown = { uid: stats.uid, gid: stats.gid };
        }
        if (useStatMode) {
          options.mode = stats.mode;
        }
      }
    }
    if (!filePathExists) {
      const parentPath = path2.dirname(filePath);
      await dist_default.attempt.mkdir(parentPath, {
        mode: DEFAULT_FOLDER_MODE,
        recursive: true
      });
    }
    fd = await dist_default.retry.open(retryOptions)(tempPath, "w", options.mode || DEFAULT_FILE_MODE);
    if (options.tmpCreated) {
      options.tmpCreated(tempPath);
    }
    if (isString(data)) {
      await dist_default.retry.write(retryOptions)(fd, data, 0, options.encoding || DEFAULT_ENCODING);
    } else if (data instanceof Readable) {
      const writeStream = createWriteStream(tempPath, { fd, autoClose: false });
      const finishPromise = once(writeStream, "finish");
      data.pipe(writeStream);
      await finishPromise;
    } else if (!isUndefined(data)) {
      await dist_default.retry.write(retryOptions)(fd, data, 0, data.length, 0);
    }
    if (options.fsync !== false) {
      if (options.fsyncWait !== false) {
        await dist_default.retry.fsync(retryOptions)(fd);
      } else {
        dist_default.attempt.fsync(fd);
      }
    }
    await dist_default.retry.close(retryOptions)(fd);
    fd = null;
    if (options.chown && (options.chown.uid !== DEFAULT_USER_UID || options.chown.gid !== DEFAULT_USER_GID)) {
      await dist_default.attempt.chown(tempPath, options.chown.uid, options.chown.gid);
    }
    if (options.mode && options.mode !== DEFAULT_FILE_MODE) {
      await dist_default.attempt.chmod(tempPath, options.mode);
    }
    try {
      await dist_default.retry.rename(retryOptions)(tempPath, filePath);
    } catch (error) {
      if (!isException(error))
        throw error;
      if (error.code !== "ENAMETOOLONG")
        throw error;
      await dist_default.retry.rename(retryOptions)(tempPath, temp_default.truncate(filePath));
    }
    tempDisposer();
    tempPath = null;
  } finally {
    if (fd)
      await dist_default.attempt.close(fd);
    if (tempPath)
      temp_default.purge(tempPath);
    if (schedulerCustomDisposer)
      schedulerCustomDisposer();
    if (schedulerDisposer)
      schedulerDisposer();
  }
}

// node_modules/@prettier/cli/dist/prettier_serial.js
import process8 from "process";
import * as prettier from "../index.mjs";

// scripts/build/shims/shared.js
var OPTIONAL_OBJECT = 1;
var createMethodShim = (methodName, getImplementation) => (flags, object, ...arguments_) => {
  if (flags | OPTIONAL_OBJECT && (object === void 0 || object === null)) {
    return;
  }
  const implementation = getImplementation.call(object) ?? object[methodName];
  return implementation.apply(object, arguments_);
};

// scripts/build/shims/method-replace-all.js
var stringReplaceAll = String.prototype.replaceAll ?? function(pattern, replacement) {
  if (pattern.global) {
    return this.replace(pattern, replacement);
  }
  return this.split(pattern).join(replacement);
};
var replaceAll = createMethodShim("replaceAll", function() {
  if (typeof this === "string") {
    return stringReplaceAll;
  }
});
var method_replace_all_default = replaceAll;

// node_modules/function-once/dist/index.js
var once2 = (fn) => {
  let called = false;
  let result;
  return () => {
    if (!called) {
      called = true;
      result = fn();
    }
    return result;
  };
};
var dist_default3 = once2;

// node_modules/import-meta-resolve/lib/resolve.js
import assert2 from "assert";
import { statSync, realpathSync } from "fs";
import process5 from "process";
import { fileURLToPath as fileURLToPath3, pathToFileURL } from "url";
import path4 from "path";
import { builtinModules } from "module";

// node_modules/import-meta-resolve/lib/get-format.js
import { fileURLToPath as fileURLToPath2 } from "url";

// node_modules/import-meta-resolve/lib/package-json-reader.js
import fs2 from "fs";
import path3 from "path";
import { fileURLToPath } from "url";

// node_modules/import-meta-resolve/lib/errors.js
import v8 from "v8";
import assert from "assert";
import { format, inspect } from "util";
var own = {}.hasOwnProperty;
var classRegExp = /^([A-Z][a-z\d]*)+$/;
var kTypes = /* @__PURE__ */ new Set([
  "string",
  "function",
  "number",
  "object",
  // Accept 'Function' and 'Object' as alternative to the lower cased version.
  "Function",
  "Object",
  "boolean",
  "bigint",
  "symbol"
]);
var codes = {};
function formatList(array, type = "and") {
  return array.length < 3 ? array.join(` ${type} `) : `${array.slice(0, -1).join(", ")}, ${type} ${array[array.length - 1]}`;
}
var messages = /* @__PURE__ */ new Map();
var nodeInternalPrefix = "__node_internal_";
var userStackTraceLimit;
codes.ERR_INVALID_ARG_TYPE = createError(
  "ERR_INVALID_ARG_TYPE",
  /**
   * @param {string} name
   * @param {Array<string> | string} expected
   * @param {unknown} actual
   */
  (name, expected, actual) => {
    assert.ok(typeof name === "string", "'name' must be a string");
    if (!Array.isArray(expected)) {
      expected = [expected];
    }
    let message = "The ";
    if (name.endsWith(" argument")) {
      message += `${name} `;
    } else {
      const type = name.includes(".") ? "property" : "argument";
      message += `"${name}" ${type} `;
    }
    message += "must be ";
    const types = [];
    const instances = [];
    const other = [];
    for (const value of expected) {
      assert.ok(
        typeof value === "string",
        "All expected entries have to be of type string"
      );
      if (kTypes.has(value)) {
        types.push(value.toLowerCase());
      } else if (classRegExp.exec(value) === null) {
        assert.ok(
          value !== "object",
          'The value "object" should be written as "Object"'
        );
        other.push(value);
      } else {
        instances.push(value);
      }
    }
    if (instances.length > 0) {
      const pos = types.indexOf("object");
      if (pos !== -1) {
        types.slice(pos, 1);
        instances.push("Object");
      }
    }
    if (types.length > 0) {
      message += `${types.length > 1 ? "one of type" : "of type"} ${formatList(
        types,
        "or"
      )}`;
      if (instances.length > 0 || other.length > 0) message += " or ";
    }
    if (instances.length > 0) {
      message += `an instance of ${formatList(instances, "or")}`;
      if (other.length > 0) message += " or ";
    }
    if (other.length > 0) {
      if (other.length > 1) {
        message += `one of ${formatList(other, "or")}`;
      } else {
        if (other[0].toLowerCase() !== other[0]) message += "an ";
        message += `${other[0]}`;
      }
    }
    message += `. Received ${determineSpecificType(actual)}`;
    return message;
  },
  TypeError
);
codes.ERR_INVALID_MODULE_SPECIFIER = createError(
  "ERR_INVALID_MODULE_SPECIFIER",
  /**
   * @param {string} request
   * @param {string} reason
   * @param {string} [base]
   */
  (request, reason, base = void 0) => {
    return `Invalid module "${request}" ${reason}${base ? ` imported from ${base}` : ""}`;
  },
  TypeError
);
codes.ERR_INVALID_PACKAGE_CONFIG = createError(
  "ERR_INVALID_PACKAGE_CONFIG",
  /**
   * @param {string} path
   * @param {string} [base]
   * @param {string} [message]
   */
  (path7, base, message) => {
    return `Invalid package config ${path7}${base ? ` while importing ${base}` : ""}${message ? `. ${message}` : ""}`;
  },
  Error
);
codes.ERR_INVALID_PACKAGE_TARGET = createError(
  "ERR_INVALID_PACKAGE_TARGET",
  /**
   * @param {string} packagePath
   * @param {string} key
   * @param {unknown} target
   * @param {boolean} [isImport=false]
   * @param {string} [base]
   */
  (packagePath, key, target, isImport = false, base = void 0) => {
    const relatedError = typeof target === "string" && !isImport && target.length > 0 && !target.startsWith("./");
    if (key === ".") {
      assert.ok(isImport === false);
      return `Invalid "exports" main target ${JSON.stringify(target)} defined in the package config ${packagePath}package.json${base ? ` imported from ${base}` : ""}${relatedError ? '; targets must start with "./"' : ""}`;
    }
    return `Invalid "${isImport ? "imports" : "exports"}" target ${JSON.stringify(
      target
    )} defined for '${key}' in the package config ${packagePath}package.json${base ? ` imported from ${base}` : ""}${relatedError ? '; targets must start with "./"' : ""}`;
  },
  Error
);
codes.ERR_MODULE_NOT_FOUND = createError(
  "ERR_MODULE_NOT_FOUND",
  /**
   * @param {string} path
   * @param {string} base
   * @param {boolean} [exactUrl]
   */
  (path7, base, exactUrl = false) => {
    return `Cannot find ${exactUrl ? "module" : "package"} '${path7}' imported from ${base}`;
  },
  Error
);
codes.ERR_NETWORK_IMPORT_DISALLOWED = createError(
  "ERR_NETWORK_IMPORT_DISALLOWED",
  "import of '%s' by %s is not supported: %s",
  Error
);
codes.ERR_PACKAGE_IMPORT_NOT_DEFINED = createError(
  "ERR_PACKAGE_IMPORT_NOT_DEFINED",
  /**
   * @param {string} specifier
   * @param {string} packagePath
   * @param {string} base
   */
  (specifier, packagePath, base) => {
    return `Package import specifier "${specifier}" is not defined${packagePath ? ` in package ${packagePath}package.json` : ""} imported from ${base}`;
  },
  TypeError
);
codes.ERR_PACKAGE_PATH_NOT_EXPORTED = createError(
  "ERR_PACKAGE_PATH_NOT_EXPORTED",
  /**
   * @param {string} packagePath
   * @param {string} subpath
   * @param {string} [base]
   */
  (packagePath, subpath, base = void 0) => {
    if (subpath === ".")
      return `No "exports" main defined in ${packagePath}package.json${base ? ` imported from ${base}` : ""}`;
    return `Package subpath '${subpath}' is not defined by "exports" in ${packagePath}package.json${base ? ` imported from ${base}` : ""}`;
  },
  Error
);
codes.ERR_UNSUPPORTED_DIR_IMPORT = createError(
  "ERR_UNSUPPORTED_DIR_IMPORT",
  "Directory import '%s' is not supported resolving ES modules imported from %s",
  Error
);
codes.ERR_UNSUPPORTED_RESOLVE_REQUEST = createError(
  "ERR_UNSUPPORTED_RESOLVE_REQUEST",
  'Failed to resolve module specifier "%s" from "%s": Invalid relative URL or base scheme is not hierarchical.',
  TypeError
);
codes.ERR_UNKNOWN_FILE_EXTENSION = createError(
  "ERR_UNKNOWN_FILE_EXTENSION",
  /**
   * @param {string} extension
   * @param {string} path
   */
  (extension, path7) => {
    return `Unknown file extension "${extension}" for ${path7}`;
  },
  TypeError
);
codes.ERR_INVALID_ARG_VALUE = createError(
  "ERR_INVALID_ARG_VALUE",
  /**
   * @param {string} name
   * @param {unknown} value
   * @param {string} [reason='is invalid']
   */
  (name, value, reason = "is invalid") => {
    let inspected = inspect(value);
    if (inspected.length > 128) {
      inspected = `${inspected.slice(0, 128)}...`;
    }
    const type = name.includes(".") ? "property" : "argument";
    return `The ${type} '${name}' ${reason}. Received ${inspected}`;
  },
  TypeError
  // Note: extra classes have been shaken out.
  // , RangeError
);
function createError(sym, value, constructor) {
  messages.set(sym, value);
  return makeNodeErrorWithCode(constructor, sym);
}
function makeNodeErrorWithCode(Base, key) {
  return NodeError;
  function NodeError(...parameters) {
    const limit = Error.stackTraceLimit;
    if (isErrorStackTraceLimitWritable()) Error.stackTraceLimit = 0;
    const error = new Base();
    if (isErrorStackTraceLimitWritable()) Error.stackTraceLimit = limit;
    const message = getMessage(key, parameters, error);
    Object.defineProperties(error, {
      // Note: no need to implement `kIsNodeError` symbol, would be hard,
      // probably.
      message: {
        value: message,
        enumerable: false,
        writable: true,
        configurable: true
      },
      toString: {
        /** @this {Error} */
        value() {
          return `${this.name} [${key}]: ${this.message}`;
        },
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    captureLargerStackTrace(error);
    error.code = key;
    return error;
  }
}
function isErrorStackTraceLimitWritable() {
  try {
    if (v8.startupSnapshot.isBuildingSnapshot()) {
      return false;
    }
  } catch {
  }
  const desc = Object.getOwnPropertyDescriptor(Error, "stackTraceLimit");
  if (desc === void 0) {
    return Object.isExtensible(Error);
  }
  return own.call(desc, "writable") && desc.writable !== void 0 ? desc.writable : desc.set !== void 0;
}
function hideStackFrames(wrappedFunction) {
  const hidden = nodeInternalPrefix + wrappedFunction.name;
  Object.defineProperty(wrappedFunction, "name", { value: hidden });
  return wrappedFunction;
}
var captureLargerStackTrace = hideStackFrames(
  /**
   * @param {Error} error
   * @returns {Error}
   */
  // @ts-expect-error: fine
  function(error) {
    const stackTraceLimitIsWritable = isErrorStackTraceLimitWritable();
    if (stackTraceLimitIsWritable) {
      userStackTraceLimit = Error.stackTraceLimit;
      Error.stackTraceLimit = Number.POSITIVE_INFINITY;
    }
    Error.captureStackTrace(error);
    if (stackTraceLimitIsWritable) Error.stackTraceLimit = userStackTraceLimit;
    return error;
  }
);
function getMessage(key, parameters, self) {
  const message = messages.get(key);
  assert.ok(message !== void 0, "expected `message` to be found");
  if (typeof message === "function") {
    assert.ok(
      message.length <= parameters.length,
      // Default options do not count.
      `Code: ${key}; The provided arguments length (${parameters.length}) does not match the required ones (${message.length}).`
    );
    return Reflect.apply(message, self, parameters);
  }
  const regex3 = /%[dfijoOs]/g;
  let expectedLength = 0;
  while (regex3.exec(message) !== null) expectedLength++;
  assert.ok(
    expectedLength === parameters.length,
    `Code: ${key}; The provided arguments length (${parameters.length}) does not match the required ones (${expectedLength}).`
  );
  if (parameters.length === 0) return message;
  parameters.unshift(message);
  return Reflect.apply(format, null, parameters);
}
function determineSpecificType(value) {
  if (value === null || value === void 0) {
    return String(value);
  }
  if (typeof value === "function" && value.name) {
    return `function ${value.name}`;
  }
  if (typeof value === "object") {
    if (value.constructor && value.constructor.name) {
      return `an instance of ${value.constructor.name}`;
    }
    return `${inspect(value, { depth: -1 })}`;
  }
  let inspected = inspect(value, { colors: false });
  if (inspected.length > 28) {
    inspected = `${inspected.slice(0, 25)}...`;
  }
  return `type ${typeof value} (${inspected})`;
}

// node_modules/import-meta-resolve/lib/package-json-reader.js
var hasOwnProperty = {}.hasOwnProperty;
var { ERR_INVALID_PACKAGE_CONFIG } = codes;
var cache = /* @__PURE__ */ new Map();
function read(jsonPath, { base, specifier }) {
  const existing = cache.get(jsonPath);
  if (existing) {
    return existing;
  }
  let string2;
  try {
    string2 = fs2.readFileSync(path3.toNamespacedPath(jsonPath), "utf8");
  } catch (error) {
    const exception = (
      /** @type {ErrnoException} */
      error
    );
    if (exception.code !== "ENOENT") {
      throw exception;
    }
  }
  const result = {
    exists: false,
    pjsonPath: jsonPath,
    main: void 0,
    name: void 0,
    type: "none",
    // Ignore unknown types for forwards compatibility
    exports: void 0,
    imports: void 0
  };
  if (string2 !== void 0) {
    let parsed;
    try {
      parsed = JSON.parse(string2);
    } catch (error_) {
      const cause = (
        /** @type {ErrnoException} */
        error_
      );
      const error = new ERR_INVALID_PACKAGE_CONFIG(
        jsonPath,
        (base ? `"${specifier}" from ` : "") + fileURLToPath(base || specifier),
        cause.message
      );
      error.cause = cause;
      throw error;
    }
    result.exists = true;
    if (hasOwnProperty.call(parsed, "name") && typeof parsed.name === "string") {
      result.name = parsed.name;
    }
    if (hasOwnProperty.call(parsed, "main") && typeof parsed.main === "string") {
      result.main = parsed.main;
    }
    if (hasOwnProperty.call(parsed, "exports")) {
      result.exports = parsed.exports;
    }
    if (hasOwnProperty.call(parsed, "imports")) {
      result.imports = parsed.imports;
    }
    if (hasOwnProperty.call(parsed, "type") && (parsed.type === "commonjs" || parsed.type === "module")) {
      result.type = parsed.type;
    }
  }
  cache.set(jsonPath, result);
  return result;
}
function getPackageScopeConfig(resolved) {
  let packageJSONUrl = new URL("package.json", resolved);
  while (true) {
    const packageJSONPath2 = packageJSONUrl.pathname;
    if (packageJSONPath2.endsWith("node_modules/package.json")) {
      break;
    }
    const packageConfig = read(fileURLToPath(packageJSONUrl), {
      specifier: resolved
    });
    if (packageConfig.exists) {
      return packageConfig;
    }
    const lastPackageJSONUrl = packageJSONUrl;
    packageJSONUrl = new URL("../package.json", packageJSONUrl);
    if (packageJSONUrl.pathname === lastPackageJSONUrl.pathname) {
      break;
    }
  }
  const packageJSONPath = fileURLToPath(packageJSONUrl);
  return {
    pjsonPath: packageJSONPath,
    exists: false,
    type: "none"
  };
}
function getPackageType(url2) {
  return getPackageScopeConfig(url2).type;
}

// node_modules/import-meta-resolve/lib/get-format.js
var { ERR_UNKNOWN_FILE_EXTENSION } = codes;
var hasOwnProperty2 = {}.hasOwnProperty;
var extensionFormatMap = {
  // @ts-expect-error: hush.
  __proto__: null,
  ".cjs": "commonjs",
  ".js": "module",
  ".json": "json",
  ".mjs": "module"
};
function mimeToFormat(mime) {
  if (mime && /\s*(text|application)\/javascript\s*(;\s*charset=utf-?8\s*)?/i.test(mime))
    return "module";
  if (mime === "application/json") return "json";
  return null;
}
var protocolHandlers = {
  // @ts-expect-error: hush.
  __proto__: null,
  "data:": getDataProtocolModuleFormat,
  "file:": getFileProtocolModuleFormat,
  "http:": getHttpProtocolModuleFormat,
  "https:": getHttpProtocolModuleFormat,
  "node:"() {
    return "builtin";
  }
};
function getDataProtocolModuleFormat(parsed) {
  const { 1: mime } = /^([^/]+\/[^;,]+)[^,]*?(;base64)?,/.exec(
    parsed.pathname
  ) || [null, null, null];
  return mimeToFormat(mime);
}
function extname(url2) {
  const pathname = url2.pathname;
  let index = pathname.length;
  while (index--) {
    const code = pathname.codePointAt(index);
    if (code === 47) {
      return "";
    }
    if (code === 46) {
      return pathname.codePointAt(index - 1) === 47 ? "" : pathname.slice(index);
    }
  }
  return "";
}
function getFileProtocolModuleFormat(url2, _context, ignoreErrors) {
  const value = extname(url2);
  if (value === ".js") {
    const packageType = getPackageType(url2);
    if (packageType !== "none") {
      return packageType;
    }
    return "commonjs";
  }
  if (value === "") {
    const packageType = getPackageType(url2);
    if (packageType === "none" || packageType === "commonjs") {
      return "commonjs";
    }
    return "module";
  }
  const format3 = extensionFormatMap[value];
  if (format3) return format3;
  if (ignoreErrors) {
    return void 0;
  }
  const filepath = fileURLToPath2(url2);
  throw new ERR_UNKNOWN_FILE_EXTENSION(value, filepath);
}
function getHttpProtocolModuleFormat() {
}
function defaultGetFormatWithoutErrors(url2, context) {
  const protocol = url2.protocol;
  if (!hasOwnProperty2.call(protocolHandlers, protocol)) {
    return null;
  }
  return protocolHandlers[protocol](url2, context, true) || null;
}

// node_modules/import-meta-resolve/lib/utils.js
var { ERR_INVALID_ARG_VALUE } = codes;
var DEFAULT_CONDITIONS = Object.freeze(["node", "import"]);
var DEFAULT_CONDITIONS_SET = new Set(DEFAULT_CONDITIONS);
function getDefaultConditions() {
  return DEFAULT_CONDITIONS;
}
function getDefaultConditionsSet() {
  return DEFAULT_CONDITIONS_SET;
}
function getConditionsSet(conditions) {
  if (conditions !== void 0 && conditions !== getDefaultConditions()) {
    if (!Array.isArray(conditions)) {
      throw new ERR_INVALID_ARG_VALUE(
        "conditions",
        conditions,
        "expected an array"
      );
    }
    return new Set(conditions);
  }
  return getDefaultConditionsSet();
}

// node_modules/import-meta-resolve/lib/resolve.js
var RegExpPrototypeSymbolReplace = RegExp.prototype[Symbol.replace];
var {
  ERR_NETWORK_IMPORT_DISALLOWED,
  ERR_INVALID_MODULE_SPECIFIER,
  ERR_INVALID_PACKAGE_CONFIG: ERR_INVALID_PACKAGE_CONFIG2,
  ERR_INVALID_PACKAGE_TARGET,
  ERR_MODULE_NOT_FOUND,
  ERR_PACKAGE_IMPORT_NOT_DEFINED,
  ERR_PACKAGE_PATH_NOT_EXPORTED,
  ERR_UNSUPPORTED_DIR_IMPORT,
  ERR_UNSUPPORTED_RESOLVE_REQUEST
} = codes;
var own2 = {}.hasOwnProperty;
var invalidSegmentRegEx = /(^|\\|\/)((\.|%2e)(\.|%2e)?|(n|%6e|%4e)(o|%6f|%4f)(d|%64|%44)(e|%65|%45)(_|%5f)(m|%6d|%4d)(o|%6f|%4f)(d|%64|%44)(u|%75|%55)(l|%6c|%4c)(e|%65|%45)(s|%73|%53))?(\\|\/|$)/i;
var deprecatedInvalidSegmentRegEx = /(^|\\|\/)((\.|%2e)(\.|%2e)?|(n|%6e|%4e)(o|%6f|%4f)(d|%64|%44)(e|%65|%45)(_|%5f)(m|%6d|%4d)(o|%6f|%4f)(d|%64|%44)(u|%75|%55)(l|%6c|%4c)(e|%65|%45)(s|%73|%53))(\\|\/|$)/i;
var invalidPackageNameRegEx = /^\.|%|\\/;
var patternRegEx = /\*/g;
var encodedSeparatorRegEx = /%2f|%5c/i;
var emittedPackageWarnings = /* @__PURE__ */ new Set();
var doubleSlashRegEx = /[/\\]{2}/;
function emitInvalidSegmentDeprecation(target, request, match2, packageJsonUrl, internal, base, isTarget) {
  if (process5.noDeprecation) {
    return;
  }
  const pjsonPath = fileURLToPath3(packageJsonUrl);
  const double = doubleSlashRegEx.exec(isTarget ? target : request) !== null;
  process5.emitWarning(
    `Use of deprecated ${double ? "double slash" : "leading or trailing slash matching"} resolving "${target}" for module request "${request}" ${request === match2 ? "" : `matched to "${match2}" `}in the "${internal ? "imports" : "exports"}" field module resolution of the package at ${pjsonPath}${base ? ` imported from ${fileURLToPath3(base)}` : ""}.`,
    "DeprecationWarning",
    "DEP0166"
  );
}
function emitLegacyIndexDeprecation(url2, packageJsonUrl, base, main) {
  if (process5.noDeprecation) {
    return;
  }
  const format3 = defaultGetFormatWithoutErrors(url2, { parentURL: base.href });
  if (format3 !== "module") return;
  const urlPath = fileURLToPath3(url2.href);
  const packagePath = fileURLToPath3(new URL(".", packageJsonUrl));
  const basePath = fileURLToPath3(base);
  if (!main) {
    process5.emitWarning(
      `No "main" or "exports" field defined in the package.json for ${packagePath} resolving the main entry point "${urlPath.slice(
        packagePath.length
      )}", imported from ${basePath}.
Default "index" lookups for the main are deprecated for ES modules.`,
      "DeprecationWarning",
      "DEP0151"
    );
  } else if (path4.resolve(packagePath, main) !== urlPath) {
    process5.emitWarning(
      `Package ${packagePath} has a "main" field set to "${main}", excluding the full filename and extension to the resolved file at "${urlPath.slice(
        packagePath.length
      )}", imported from ${basePath}.
 Automatic extension resolution of the "main" field is deprecated for ES modules.`,
      "DeprecationWarning",
      "DEP0151"
    );
  }
}
function tryStatSync(path7) {
  try {
    return statSync(path7);
  } catch {
  }
}
function fileExists(url2) {
  const stats = statSync(url2, { throwIfNoEntry: false });
  const isFile = stats ? stats.isFile() : void 0;
  return isFile === null || isFile === void 0 ? false : isFile;
}
function legacyMainResolve(packageJsonUrl, packageConfig, base) {
  let guess;
  if (packageConfig.main !== void 0) {
    guess = new URL(packageConfig.main, packageJsonUrl);
    if (fileExists(guess)) return guess;
    const tries2 = [
      `./${packageConfig.main}.js`,
      `./${packageConfig.main}.json`,
      `./${packageConfig.main}.node`,
      `./${packageConfig.main}/index.js`,
      `./${packageConfig.main}/index.json`,
      `./${packageConfig.main}/index.node`
    ];
    let i2 = -1;
    while (++i2 < tries2.length) {
      guess = new URL(tries2[i2], packageJsonUrl);
      if (fileExists(guess)) break;
      guess = void 0;
    }
    if (guess) {
      emitLegacyIndexDeprecation(
        guess,
        packageJsonUrl,
        base,
        packageConfig.main
      );
      return guess;
    }
  }
  const tries = ["./index.js", "./index.json", "./index.node"];
  let i = -1;
  while (++i < tries.length) {
    guess = new URL(tries[i], packageJsonUrl);
    if (fileExists(guess)) break;
    guess = void 0;
  }
  if (guess) {
    emitLegacyIndexDeprecation(guess, packageJsonUrl, base, packageConfig.main);
    return guess;
  }
  throw new ERR_MODULE_NOT_FOUND(
    fileURLToPath3(new URL(".", packageJsonUrl)),
    fileURLToPath3(base)
  );
}
function finalizeResolution(resolved, base, preserveSymlinks) {
  if (encodedSeparatorRegEx.exec(resolved.pathname) !== null) {
    throw new ERR_INVALID_MODULE_SPECIFIER(
      resolved.pathname,
      'must not include encoded "/" or "\\" characters',
      fileURLToPath3(base)
    );
  }
  let filePath;
  try {
    filePath = fileURLToPath3(resolved);
  } catch (error) {
    const cause = (
      /** @type {ErrnoException} */
      error
    );
    Object.defineProperty(cause, "input", { value: String(resolved) });
    Object.defineProperty(cause, "module", { value: String(base) });
    throw cause;
  }
  const stats = tryStatSync(
    filePath.endsWith("/") ? filePath.slice(-1) : filePath
  );
  if (stats && stats.isDirectory()) {
    const error = new ERR_UNSUPPORTED_DIR_IMPORT(filePath, fileURLToPath3(base));
    error.url = String(resolved);
    throw error;
  }
  if (!stats || !stats.isFile()) {
    const error = new ERR_MODULE_NOT_FOUND(
      filePath || resolved.pathname,
      base && fileURLToPath3(base),
      true
    );
    error.url = String(resolved);
    throw error;
  }
  if (!preserveSymlinks) {
    const real = realpathSync(filePath);
    const { search, hash } = resolved;
    resolved = pathToFileURL(real + (filePath.endsWith(path4.sep) ? "/" : ""));
    resolved.search = search;
    resolved.hash = hash;
  }
  return resolved;
}
function importNotDefined(specifier, packageJsonUrl, base) {
  return new ERR_PACKAGE_IMPORT_NOT_DEFINED(
    specifier,
    packageJsonUrl && fileURLToPath3(new URL(".", packageJsonUrl)),
    fileURLToPath3(base)
  );
}
function exportsNotFound(subpath, packageJsonUrl, base) {
  return new ERR_PACKAGE_PATH_NOT_EXPORTED(
    fileURLToPath3(new URL(".", packageJsonUrl)),
    subpath,
    base && fileURLToPath3(base)
  );
}
function throwInvalidSubpath(request, match2, packageJsonUrl, internal, base) {
  const reason = `request is not a valid match in pattern "${match2}" for the "${internal ? "imports" : "exports"}" resolution of ${fileURLToPath3(packageJsonUrl)}`;
  throw new ERR_INVALID_MODULE_SPECIFIER(
    request,
    reason,
    base && fileURLToPath3(base)
  );
}
function invalidPackageTarget(subpath, target, packageJsonUrl, internal, base) {
  target = typeof target === "object" && target !== null ? JSON.stringify(target, null, "") : `${target}`;
  return new ERR_INVALID_PACKAGE_TARGET(
    fileURLToPath3(new URL(".", packageJsonUrl)),
    subpath,
    target,
    internal,
    base && fileURLToPath3(base)
  );
}
function resolvePackageTargetString(target, subpath, match2, packageJsonUrl, base, pattern, internal, isPathMap, conditions) {
  if (subpath !== "" && !pattern && target[target.length - 1] !== "/")
    throw invalidPackageTarget(match2, target, packageJsonUrl, internal, base);
  if (!target.startsWith("./")) {
    if (internal && !target.startsWith("../") && !target.startsWith("/")) {
      let isURL = false;
      try {
        new URL(target);
        isURL = true;
      } catch {
      }
      if (!isURL) {
        const exportTarget = pattern ? RegExpPrototypeSymbolReplace.call(
          patternRegEx,
          target,
          () => subpath
        ) : target + subpath;
        return packageResolve(exportTarget, packageJsonUrl, conditions);
      }
    }
    throw invalidPackageTarget(match2, target, packageJsonUrl, internal, base);
  }
  if (invalidSegmentRegEx.exec(target.slice(2)) !== null) {
    if (deprecatedInvalidSegmentRegEx.exec(target.slice(2)) === null) {
      if (!isPathMap) {
        const request = pattern ? match2.replace("*", () => subpath) : match2 + subpath;
        const resolvedTarget = pattern ? RegExpPrototypeSymbolReplace.call(
          patternRegEx,
          target,
          () => subpath
        ) : target;
        emitInvalidSegmentDeprecation(
          resolvedTarget,
          request,
          match2,
          packageJsonUrl,
          internal,
          base,
          true
        );
      }
    } else {
      throw invalidPackageTarget(match2, target, packageJsonUrl, internal, base);
    }
  }
  const resolved = new URL(target, packageJsonUrl);
  const resolvedPath = resolved.pathname;
  const packagePath = new URL(".", packageJsonUrl).pathname;
  if (!resolvedPath.startsWith(packagePath))
    throw invalidPackageTarget(match2, target, packageJsonUrl, internal, base);
  if (subpath === "") return resolved;
  if (invalidSegmentRegEx.exec(subpath) !== null) {
    const request = pattern ? match2.replace("*", () => subpath) : match2 + subpath;
    if (deprecatedInvalidSegmentRegEx.exec(subpath) === null) {
      if (!isPathMap) {
        const resolvedTarget = pattern ? RegExpPrototypeSymbolReplace.call(
          patternRegEx,
          target,
          () => subpath
        ) : target;
        emitInvalidSegmentDeprecation(
          resolvedTarget,
          request,
          match2,
          packageJsonUrl,
          internal,
          base,
          false
        );
      }
    } else {
      throwInvalidSubpath(request, match2, packageJsonUrl, internal, base);
    }
  }
  if (pattern) {
    return new URL(
      RegExpPrototypeSymbolReplace.call(
        patternRegEx,
        resolved.href,
        () => subpath
      )
    );
  }
  return new URL(subpath, resolved);
}
function isArrayIndex(key) {
  const keyNumber = Number(key);
  if (`${keyNumber}` !== key) return false;
  return keyNumber >= 0 && keyNumber < 4294967295;
}
function resolvePackageTarget(packageJsonUrl, target, subpath, packageSubpath, base, pattern, internal, isPathMap, conditions) {
  if (typeof target === "string") {
    return resolvePackageTargetString(
      target,
      subpath,
      packageSubpath,
      packageJsonUrl,
      base,
      pattern,
      internal,
      isPathMap,
      conditions
    );
  }
  if (Array.isArray(target)) {
    const targetList = target;
    if (targetList.length === 0) return null;
    let lastException;
    let i = -1;
    while (++i < targetList.length) {
      const targetItem = targetList[i];
      let resolveResult;
      try {
        resolveResult = resolvePackageTarget(
          packageJsonUrl,
          targetItem,
          subpath,
          packageSubpath,
          base,
          pattern,
          internal,
          isPathMap,
          conditions
        );
      } catch (error) {
        const exception = (
          /** @type {ErrnoException} */
          error
        );
        lastException = exception;
        if (exception.code === "ERR_INVALID_PACKAGE_TARGET") continue;
        throw error;
      }
      if (resolveResult === void 0) continue;
      if (resolveResult === null) {
        lastException = null;
        continue;
      }
      return resolveResult;
    }
    if (lastException === void 0 || lastException === null) {
      return null;
    }
    throw lastException;
  }
  if (typeof target === "object" && target !== null) {
    const keys = Object.getOwnPropertyNames(target);
    let i = -1;
    while (++i < keys.length) {
      const key = keys[i];
      if (isArrayIndex(key)) {
        throw new ERR_INVALID_PACKAGE_CONFIG2(
          fileURLToPath3(packageJsonUrl),
          base,
          '"exports" cannot contain numeric property keys.'
        );
      }
    }
    i = -1;
    while (++i < keys.length) {
      const key = keys[i];
      if (key === "default" || conditions && conditions.has(key)) {
        const conditionalTarget = (
          /** @type {unknown} */
          target[key]
        );
        const resolveResult = resolvePackageTarget(
          packageJsonUrl,
          conditionalTarget,
          subpath,
          packageSubpath,
          base,
          pattern,
          internal,
          isPathMap,
          conditions
        );
        if (resolveResult === void 0) continue;
        return resolveResult;
      }
    }
    return null;
  }
  if (target === null) {
    return null;
  }
  throw invalidPackageTarget(
    packageSubpath,
    target,
    packageJsonUrl,
    internal,
    base
  );
}
function isConditionalExportsMainSugar(exports, packageJsonUrl, base) {
  if (typeof exports === "string" || Array.isArray(exports)) return true;
  if (typeof exports !== "object" || exports === null) return false;
  const keys = Object.getOwnPropertyNames(exports);
  let isConditionalSugar = false;
  let i = 0;
  let keyIndex = -1;
  while (++keyIndex < keys.length) {
    const key = keys[keyIndex];
    const currentIsConditionalSugar = key === "" || key[0] !== ".";
    if (i++ === 0) {
      isConditionalSugar = currentIsConditionalSugar;
    } else if (isConditionalSugar !== currentIsConditionalSugar) {
      throw new ERR_INVALID_PACKAGE_CONFIG2(
        fileURLToPath3(packageJsonUrl),
        base,
        `"exports" cannot contain some keys starting with '.' and some not. The exports object must either be an object of package subpath keys or an object of main entry condition name keys only.`
      );
    }
  }
  return isConditionalSugar;
}
function emitTrailingSlashPatternDeprecation(match2, pjsonUrl, base) {
  if (process5.noDeprecation) {
    return;
  }
  const pjsonPath = fileURLToPath3(pjsonUrl);
  if (emittedPackageWarnings.has(pjsonPath + "|" + match2)) return;
  emittedPackageWarnings.add(pjsonPath + "|" + match2);
  process5.emitWarning(
    `Use of deprecated trailing slash pattern mapping "${match2}" in the "exports" field module resolution of the package at ${pjsonPath}${base ? ` imported from ${fileURLToPath3(base)}` : ""}. Mapping specifiers ending in "/" is no longer supported.`,
    "DeprecationWarning",
    "DEP0155"
  );
}
function packageExportsResolve(packageJsonUrl, packageSubpath, packageConfig, base, conditions) {
  let exports = packageConfig.exports;
  if (isConditionalExportsMainSugar(exports, packageJsonUrl, base)) {
    exports = { ".": exports };
  }
  if (own2.call(exports, packageSubpath) && !packageSubpath.includes("*") && !packageSubpath.endsWith("/")) {
    const target = exports[packageSubpath];
    const resolveResult = resolvePackageTarget(
      packageJsonUrl,
      target,
      "",
      packageSubpath,
      base,
      false,
      false,
      false,
      conditions
    );
    if (resolveResult === null || resolveResult === void 0) {
      throw exportsNotFound(packageSubpath, packageJsonUrl, base);
    }
    return resolveResult;
  }
  let bestMatch = "";
  let bestMatchSubpath = "";
  const keys = Object.getOwnPropertyNames(exports);
  let i = -1;
  while (++i < keys.length) {
    const key = keys[i];
    const patternIndex = key.indexOf("*");
    if (patternIndex !== -1 && packageSubpath.startsWith(key.slice(0, patternIndex))) {
      if (packageSubpath.endsWith("/")) {
        emitTrailingSlashPatternDeprecation(
          packageSubpath,
          packageJsonUrl,
          base
        );
      }
      const patternTrailer = key.slice(patternIndex + 1);
      if (packageSubpath.length >= key.length && packageSubpath.endsWith(patternTrailer) && patternKeyCompare(bestMatch, key) === 1 && key.lastIndexOf("*") === patternIndex) {
        bestMatch = key;
        bestMatchSubpath = packageSubpath.slice(
          patternIndex,
          packageSubpath.length - patternTrailer.length
        );
      }
    }
  }
  if (bestMatch) {
    const target = (
      /** @type {unknown} */
      exports[bestMatch]
    );
    const resolveResult = resolvePackageTarget(
      packageJsonUrl,
      target,
      bestMatchSubpath,
      bestMatch,
      base,
      true,
      false,
      packageSubpath.endsWith("/"),
      conditions
    );
    if (resolveResult === null || resolveResult === void 0) {
      throw exportsNotFound(packageSubpath, packageJsonUrl, base);
    }
    return resolveResult;
  }
  throw exportsNotFound(packageSubpath, packageJsonUrl, base);
}
function patternKeyCompare(a, b) {
  const aPatternIndex = a.indexOf("*");
  const bPatternIndex = b.indexOf("*");
  const baseLengthA = aPatternIndex === -1 ? a.length : aPatternIndex + 1;
  const baseLengthB = bPatternIndex === -1 ? b.length : bPatternIndex + 1;
  if (baseLengthA > baseLengthB) return -1;
  if (baseLengthB > baseLengthA) return 1;
  if (aPatternIndex === -1) return 1;
  if (bPatternIndex === -1) return -1;
  if (a.length > b.length) return -1;
  if (b.length > a.length) return 1;
  return 0;
}
function packageImportsResolve(name, base, conditions) {
  if (name === "#" || name.startsWith("#/") || name.endsWith("/")) {
    const reason = "is not a valid internal imports specifier name";
    throw new ERR_INVALID_MODULE_SPECIFIER(name, reason, fileURLToPath3(base));
  }
  let packageJsonUrl;
  const packageConfig = getPackageScopeConfig(base);
  if (packageConfig.exists) {
    packageJsonUrl = pathToFileURL(packageConfig.pjsonPath);
    const imports = packageConfig.imports;
    if (imports) {
      if (own2.call(imports, name) && !name.includes("*")) {
        const resolveResult = resolvePackageTarget(
          packageJsonUrl,
          imports[name],
          "",
          name,
          base,
          false,
          true,
          false,
          conditions
        );
        if (resolveResult !== null && resolveResult !== void 0) {
          return resolveResult;
        }
      } else {
        let bestMatch = "";
        let bestMatchSubpath = "";
        const keys = Object.getOwnPropertyNames(imports);
        let i = -1;
        while (++i < keys.length) {
          const key = keys[i];
          const patternIndex = key.indexOf("*");
          if (patternIndex !== -1 && name.startsWith(key.slice(0, -1))) {
            const patternTrailer = key.slice(patternIndex + 1);
            if (name.length >= key.length && name.endsWith(patternTrailer) && patternKeyCompare(bestMatch, key) === 1 && key.lastIndexOf("*") === patternIndex) {
              bestMatch = key;
              bestMatchSubpath = name.slice(
                patternIndex,
                name.length - patternTrailer.length
              );
            }
          }
        }
        if (bestMatch) {
          const target = imports[bestMatch];
          const resolveResult = resolvePackageTarget(
            packageJsonUrl,
            target,
            bestMatchSubpath,
            bestMatch,
            base,
            true,
            true,
            false,
            conditions
          );
          if (resolveResult !== null && resolveResult !== void 0) {
            return resolveResult;
          }
        }
      }
    }
  }
  throw importNotDefined(name, packageJsonUrl, base);
}
function parsePackageName(specifier, base) {
  let separatorIndex = specifier.indexOf("/");
  let validPackageName = true;
  let isScoped = false;
  if (specifier[0] === "@") {
    isScoped = true;
    if (separatorIndex === -1 || specifier.length === 0) {
      validPackageName = false;
    } else {
      separatorIndex = specifier.indexOf("/", separatorIndex + 1);
    }
  }
  const packageName = separatorIndex === -1 ? specifier : specifier.slice(0, separatorIndex);
  if (invalidPackageNameRegEx.exec(packageName) !== null) {
    validPackageName = false;
  }
  if (!validPackageName) {
    throw new ERR_INVALID_MODULE_SPECIFIER(
      specifier,
      "is not a valid package name",
      fileURLToPath3(base)
    );
  }
  const packageSubpath = "." + (separatorIndex === -1 ? "" : specifier.slice(separatorIndex));
  return { packageName, packageSubpath, isScoped };
}
function packageResolve(specifier, base, conditions) {
  if (builtinModules.includes(specifier)) {
    return new URL("node:" + specifier);
  }
  const { packageName, packageSubpath, isScoped } = parsePackageName(
    specifier,
    base
  );
  const packageConfig = getPackageScopeConfig(base);
  if (packageConfig.exists) {
    const packageJsonUrl2 = pathToFileURL(packageConfig.pjsonPath);
    if (packageConfig.name === packageName && packageConfig.exports !== void 0 && packageConfig.exports !== null) {
      return packageExportsResolve(
        packageJsonUrl2,
        packageSubpath,
        packageConfig,
        base,
        conditions
      );
    }
  }
  let packageJsonUrl = new URL(
    "./node_modules/" + packageName + "/package.json",
    base
  );
  let packageJsonPath = fileURLToPath3(packageJsonUrl);
  let lastPath;
  do {
    const stat = tryStatSync(packageJsonPath.slice(0, -13));
    if (!stat || !stat.isDirectory()) {
      lastPath = packageJsonPath;
      packageJsonUrl = new URL(
        (isScoped ? "../../../../node_modules/" : "../../../node_modules/") + packageName + "/package.json",
        packageJsonUrl
      );
      packageJsonPath = fileURLToPath3(packageJsonUrl);
      continue;
    }
    const packageConfig2 = read(packageJsonPath, { base, specifier });
    if (packageConfig2.exports !== void 0 && packageConfig2.exports !== null) {
      return packageExportsResolve(
        packageJsonUrl,
        packageSubpath,
        packageConfig2,
        base,
        conditions
      );
    }
    if (packageSubpath === ".") {
      return legacyMainResolve(packageJsonUrl, packageConfig2, base);
    }
    return new URL(packageSubpath, packageJsonUrl);
  } while (packageJsonPath.length !== lastPath.length);
  throw new ERR_MODULE_NOT_FOUND(packageName, fileURLToPath3(base), false);
}
function isRelativeSpecifier(specifier) {
  if (specifier[0] === ".") {
    if (specifier.length === 1 || specifier[1] === "/") return true;
    if (specifier[1] === "." && (specifier.length === 2 || specifier[2] === "/")) {
      return true;
    }
  }
  return false;
}
function shouldBeTreatedAsRelativeOrAbsolutePath(specifier) {
  if (specifier === "") return false;
  if (specifier[0] === "/") return true;
  return isRelativeSpecifier(specifier);
}
function moduleResolve(specifier, base, conditions, preserveSymlinks) {
  if (conditions === void 0) {
    conditions = getConditionsSet();
  }
  const protocol = base.protocol;
  const isData = protocol === "data:";
  const isRemote = isData || protocol === "http:" || protocol === "https:";
  let resolved;
  if (shouldBeTreatedAsRelativeOrAbsolutePath(specifier)) {
    try {
      resolved = new URL(specifier, base);
    } catch (error_) {
      const error = new ERR_UNSUPPORTED_RESOLVE_REQUEST(specifier, base);
      error.cause = error_;
      throw error;
    }
  } else if (protocol === "file:" && specifier[0] === "#") {
    resolved = packageImportsResolve(specifier, base, conditions);
  } else {
    try {
      resolved = new URL(specifier);
    } catch (error_) {
      if (isRemote && !builtinModules.includes(specifier)) {
        const error = new ERR_UNSUPPORTED_RESOLVE_REQUEST(specifier, base);
        error.cause = error_;
        throw error;
      }
      resolved = packageResolve(specifier, base, conditions);
    }
  }
  assert2.ok(resolved !== void 0, "expected to be defined");
  if (resolved.protocol !== "file:") {
    return resolved;
  }
  return finalizeResolution(resolved, base, preserveSymlinks);
}

// node_modules/lomemo/dist/index.js
var memoize = (fn, resolver) => {
  const memoized = function(...args) {
    const key = resolver ? resolver.apply(this, args) : args[0];
    const cache2 = memoized.cache;
    const cached = cache2.get(key);
    if (cached !== void 0 || cache2.has(key))
      return cached;
    const result = fn.apply(this, args);
    memoized.cache = cache2.set(key, result) || cache2;
    return result;
  };
  memoized.cache = new (memoize.Cache || Map)();
  return memoized;
};
memoize.Cache = Map;
var dist_default4 = memoize;

// node_modules/@prettier/cli/dist/utils.js
import path6 from "path";
import process7 from "process";
import { text as stream2text } from "stream/consumers";
import url from "url";

// node_modules/promise-resolve-timeout/dist/index.js
function resolveTimeout(timeout, value) {
  return new Promise((resolve3) => {
    if (timeout === Infinity)
      return;
    setTimeout(() => {
      if (typeof value === "function") {
        resolve3(value());
      } else {
        resolve3(value);
      }
    }, timeout);
  });
}
var dist_default5 = resolveTimeout;

// node_modules/tiny-colors/dist/constants.js
var ENV = globalThis.process?.env || {};
var ARGV = globalThis.process?.argv || [];
var ENABLED = !("NO_COLOR" in ENV) && ENV.COLOR !== "0" && ENV.TERM !== "dumb" && !ARGV.includes("--no-color") && !ARGV.includes("--no-colors") && (ENV.COLOR === "1" || !globalThis.process?.stdout || globalThis.process?.stdout?.isTTY === true);

// node_modules/tiny-colors/dist/index.js
var chain = (modifier) => {
  return new Proxy(modifier, {
    get(target, prop) {
      if (prop in colors) {
        return chain((string2) => modifier(colors[prop](string2)));
      } else {
        return target[prop];
      }
    }
  });
};
var wrap = (start, end) => {
  return chain((string2) => {
    if (!ENABLED)
      return string2;
    return `\x1B[${start}m${string2}\x1B[${end}m`;
  });
};
var colors = {
  /* MODIFIERS */
  reset: wrap(0, 0),
  bold: wrap(1, 22),
  dim: wrap(2, 22),
  italic: wrap(3, 23),
  underline: wrap(4, 24),
  overline: wrap(53, 55),
  inverse: wrap(7, 27),
  hidden: wrap(8, 28),
  strikethrough: wrap(9, 29),
  /* FOREGOUND */
  black: wrap(30, 39),
  red: wrap(31, 39),
  green: wrap(32, 39),
  yellow: wrap(33, 39),
  blue: wrap(34, 39),
  magenta: wrap(35, 39),
  cyan: wrap(36, 39),
  white: wrap(37, 39),
  gray: wrap(90, 39),
  /* BACKGROUND */
  bgBlack: wrap(40, 49),
  bgRed: wrap(41, 49),
  bgGreen: wrap(42, 49),
  bgYellow: wrap(43, 49),
  bgBlue: wrap(44, 49),
  bgMagenta: wrap(45, 49),
  bgCyan: wrap(46, 49),
  bgWhite: wrap(47, 49),
  bgGray: wrap(100, 49)
};
var dist_default7 = colors;

// node_modules/ionstore/dist/node.js
import fs3 from "fs";
import os from "os";
import path5 from "path";

// node_modules/ionstore/dist/utils.js
var attempt2 = (fn, fallback) => {
  try {
    return fn();
  } catch {
    return fallback;
  }
};

// node_modules/ionstore/dist/abstract.js
var __classPrivateFieldSet = function(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = function(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AbstractStore_save;
var AbstractStore = class extends Map {
  /* CONSTRUCTOR */
  constructor(options) {
    super();
    _AbstractStore_save.set(this, void 0);
    const { id, backend } = options;
    if (!/^[a-zA-Z0-9_-]+$/.test(id))
      throw new Error(`Invalid store id: "${id}"`);
    const read2 = () => attempt2(() => backend.read(id), []);
    const write2 = () => attempt2(() => backend.write(id, this.entries()), null);
    for (const [key, value] of read2()) {
      super.set(key, value);
    }
    __classPrivateFieldSet(this, _AbstractStore_save, write2, "f");
    return this;
  }
  /* API */
  clear() {
    if (!this.size)
      return;
    super.clear();
    __classPrivateFieldGet(this, _AbstractStore_save, "f").call(this);
  }
  delete(key) {
    const deleted = super.delete(key);
    if (!deleted)
      return false;
    __classPrivateFieldGet(this, _AbstractStore_save, "f").call(this);
    return true;
  }
  set(key, value) {
    const valuePrev = this.get(key);
    if (value === valuePrev)
      return this;
    super.set(key, value);
    __classPrivateFieldGet(this, _AbstractStore_save, "f").call(this);
    return this;
  }
};
_AbstractStore_save = /* @__PURE__ */ new WeakMap();
var abstract_default = AbstractStore;

// node_modules/ionstore/dist/node.js
var NodeStore = class extends abstract_default {
  /* CONSTRUCTOR */
  constructor(id) {
    super({
      id,
      backend: {
        read: (id2) => {
          const filePath = path5.join(os.tmpdir(), `ionstore_${id2}.json`);
          const content = fs3.readFileSync(filePath, "utf8");
          return JSON.parse(content);
        },
        write: (id2, data) => {
          const filePath = path5.join(os.tmpdir(), `ionstore_${id2}.json`);
          const content = JSON.stringify(Array.from(data));
          return fs3.writeFileSync(filePath, content);
        }
      }
    });
  }
};
var node_default2 = NodeStore;

// node_modules/tiny-updater/dist/compare.js
var compare = (a, b) => {
  const pa = a.split(".");
  const pb = b.split(".");
  for (let i = 0; i < 3; i++) {
    let na = Number(pa[i]);
    let nb = Number(pb[i]);
    if (na > nb)
      return 1;
    if (nb > na)
      return -1;
    if (!isNaN(na) && isNaN(nb))
      return 1;
    if (isNaN(na) && !isNaN(nb))
      return -1;
  }
  return 0;
};
var compare_default = compare;

// node_modules/tiny-updater/dist/utils.js
var Utils = {
  /* API */
  fetch: async (url2) => {
    const signal = Utils.getExitSignal();
    const request = await fetch(url2, { signal });
    const json = await request.json();
    return json;
  },
  getExitSignal: () => {
    const aborter = new AbortController();
    node_default(() => aborter.abort());
    return aborter.signal;
  },
  getLatestVersion: async (name) => {
    const latestUrl = `https://registry.npmjs.org/${name}/latest`;
    const latest = await Utils.fetch(latestUrl);
    return latest.version;
  },
  isNumber: (value) => {
    return typeof value === "number";
  },
  isString: (value) => {
    return typeof value === "string";
  },
  isUpdateAvailable: (current, latest) => {
    return compare_default(current, latest) === -1;
  },
  noop: () => {
    return;
  },
  notify: (name, version, latest) => {
    if (!globalThis.process?.stdout?.isTTY)
      return;
    const log = () => console.log(`

\u{1F4E6} Update available for ${dist_default7.cyan(name)}: ${dist_default7.gray(version)} \u2192 ${dist_default7.green(latest)}`);
    node_default(log);
  }
};
var utils_default = Utils;

// node_modules/tiny-updater/dist/store.js
var Store = class {
  constructor() {
    this.store = new node_default2("tiny-updater");
    this.get = (name) => {
      try {
        const recordRaw = this.store.get(name);
        if (!recordRaw)
          return;
        const record = JSON.parse(recordRaw);
        if (!utils_default.isNumber(record.timestampFetch))
          return;
        if (!utils_default.isNumber(record.timestampNotification))
          return;
        if (!utils_default.isString(record.version))
          return;
        return record;
      } catch {
        return;
      }
    };
    this.set = (name, record) => {
      this.store.set(name, JSON.stringify(record));
    };
  }
};
var store_default = new Store();

// node_modules/specialist/dist/exit.js
import process6 from "process";
var exit = (message, code = 1) => {
  const log = code === 0 ? console.log : console.error;
  if (code === 0) {
    log(message);
  } else {
    log(`
  ${dist_default7.red(message)}
`);
  }
  process6.exit(code);
};
var exit_default = exit;

// node_modules/graphmatch/dist/utils.js
var getNodes = (node) => {
  const nodes = /* @__PURE__ */ new Set();
  const queue = [node];
  for (let i = 0; i < queue.length; i++) {
    const node2 = queue[i];
    if (nodes.has(node2))
      continue;
    nodes.add(node2);
    const { children } = node2;
    if (!children?.length)
      continue;
    for (let ci = 0, cl = children.length; ci < cl; ci++) {
      queue.push(children[ci]);
    }
  }
  return Array.from(nodes);
};
var getNodeFlags = (node) => {
  let flags = "";
  const nodes = getNodes(node);
  for (let i = 0, l = nodes.length; i < l; i++) {
    const node2 = nodes[i];
    if (!node2.regex)
      continue;
    const nodeFlags = node2.regex.flags;
    flags || (flags = nodeFlags);
    if (flags === nodeFlags)
      continue;
    throw new Error(`Inconsistent RegExp flags used: "${flags}" and "${nodeFlags}"`);
  }
  return flags;
};
var getNodeSourceWithCache = (node, partial, cache2) => {
  const cached = cache2.get(node);
  if (cached !== void 0)
    return cached;
  const isNodePartial = node.partial ?? partial;
  let source = "";
  if (node.regex) {
    source += isNodePartial ? "(?:$|" : "";
    source += node.regex.source;
  }
  if (node.children?.length) {
    const children = uniq2(node.children.map((node2) => getNodeSourceWithCache(node2, partial, cache2)).filter(Boolean));
    if (children?.length) {
      const isSomeChildNonPartial = node.children.some((child) => !child.regex || !(child.partial ?? partial));
      const needsWrapperGroup = children.length > 1 || isNodePartial && (!source.length || isSomeChildNonPartial);
      source += needsWrapperGroup ? isNodePartial ? "(?:$|" : "(?:" : "";
      source += children.join("|");
      source += needsWrapperGroup ? ")" : "";
    }
  }
  if (node.regex) {
    source += isNodePartial ? ")" : "";
  }
  cache2.set(node, source);
  return source;
};
var getNodeSource = (node, partial) => {
  const cache2 = /* @__PURE__ */ new Map();
  const nodes = getNodes(node);
  for (let i = nodes.length - 1; i >= 0; i--) {
    const source = getNodeSourceWithCache(nodes[i], partial, cache2);
    if (i > 0)
      continue;
    return source;
  }
  return "";
};
var uniq2 = (values) => {
  return Array.from(new Set(values));
};

// node_modules/graphmatch/dist/index.js
var graphmatch = (node, input, options) => {
  return graphmatch.compile(node, options).test(input);
};
graphmatch.compile = (node, options) => {
  const partial = options?.partial ?? false;
  const source = getNodeSource(node, partial);
  const flags = getNodeFlags(node);
  return new RegExp(`^(?:${source})$`, flags);
};
var dist_default18 = graphmatch;

// node_modules/zeptomatch/dist/compile/index.js
var compile = (node, options) => {
  const re = dist_default18.compile(node, options);
  const source = `${re.source.slice(0, -1)}[\\\\/]?$`;
  const flags = re.flags;
  return new RegExp(source, flags);
};
var compile_default = compile;

// node_modules/zeptomatch/dist/merge/index.js
var merge = (res) => {
  const source = res.map((re) => re.source).join("|") || "$^";
  const flags = res[0]?.flags;
  return new RegExp(source, flags);
};
var merge_default = merge;

// node_modules/grammex/dist/utils.js
var isArray2 = (value) => {
  return Array.isArray(value);
};
var isFunction3 = (value) => {
  return typeof value === "function";
};
var isFunctionNullary = (value) => {
  return value.length === 0;
};
var isFunctionStrictlyNullaryOrUnary = (() => {
  const { toString } = Function.prototype;
  const re = /(?:^\(\s*(?:[^,.()]|\.(?!\.\.))*\s*\)\s*=>|^\s*[a-zA-Z$_][a-zA-Z0-9$_]*\s*=>)/;
  return (value) => {
    return (value.length === 0 || value.length === 1) && re.test(toString.call(value));
  };
})();
var isNumber = (value) => {
  return typeof value === "number";
};
var isObject = (value) => {
  return typeof value === "object" && value !== null;
};
var isRegExp = (value) => {
  return value instanceof RegExp;
};
var isRegExpCapturing = /* @__PURE__ */ (() => {
  const sourceRe = /\\\(|\((?!\?(?::|=|!|<=|<!))/;
  return (re) => {
    return sourceRe.test(re.source);
  };
})();
var isRegExpStatic = /* @__PURE__ */ (() => {
  const sourceRe = /^[a-zA-Z0-9_-]+$/;
  return (re) => {
    return sourceRe.test(re.source) && !re.flags.includes("i");
  };
})();
var isString2 = (value) => {
  return typeof value === "string";
};
var isUndefined3 = (value) => {
  return value === void 0;
};
var memoize2 = (fn) => {
  const cache2 = /* @__PURE__ */ new Map();
  return (arg) => {
    const cached = cache2.get(arg);
    if (cached !== void 0)
      return cached;
    const value = fn(arg);
    cache2.set(arg, value);
    return value;
  };
};

// node_modules/grammex/dist/index.js
var parse = (input, rule, options = {}) => {
  const state = { cache: {}, input, index: 0, indexBacktrackMax: 0, options, output: [] };
  const matched = resolve(rule)(state);
  const indexMax = Math.max(state.index, state.indexBacktrackMax);
  if (matched && state.index === input.length) {
    return state.output;
  } else {
    throw new Error(`Failed to parse at index ${indexMax}`);
  }
};
var match = (target, handler) => {
  if (isArray2(target)) {
    return chars(target, handler);
  } else if (isString2(target)) {
    return string(target, handler);
  } else {
    return regex(target, handler);
  }
};
var chars = (target, handler) => {
  const charCodes = {};
  for (const char of target) {
    if (char.length !== 1)
      throw new Error(`Invalid character: "${char}"`);
    const charCode = char.charCodeAt(0);
    charCodes[charCode] = true;
  }
  return (state) => {
    const input = state.input;
    let indexStart = state.index;
    let indexEnd = indexStart;
    while (indexEnd < input.length) {
      const charCode = input.charCodeAt(indexEnd);
      if (!(charCode in charCodes))
        break;
      indexEnd += 1;
    }
    if (indexEnd > indexStart) {
      if (!isUndefined3(handler) && !state.options.silent) {
        const target2 = input.slice(indexStart, indexEnd);
        const output = isFunction3(handler) ? handler(target2, input, `${indexStart}`) : handler;
        if (!isUndefined3(output)) {
          state.output.push(output);
        }
      }
      state.index = indexEnd;
    }
    return true;
  };
};
var regex = (target, handler) => {
  if (isRegExpStatic(target)) {
    return string(target.source, handler);
  } else {
    const source = target.source;
    const flags = target.flags.replace(/y|$/, "y");
    const re = new RegExp(source, flags);
    if (isRegExpCapturing(target) && isFunction3(handler) && !isFunctionStrictlyNullaryOrUnary(handler)) {
      return regexCapturing(re, handler);
    } else {
      return regexNonCapturing(re, handler);
    }
  }
};
var regexCapturing = (re, handler) => {
  return (state) => {
    const indexStart = state.index;
    const input = state.input;
    re.lastIndex = indexStart;
    const match2 = re.exec(input);
    if (match2) {
      const indexEnd = re.lastIndex;
      if (!state.options.silent) {
        const output = handler(...match2, input, `${indexStart}`);
        if (!isUndefined3(output)) {
          state.output.push(output);
        }
      }
      state.index = indexEnd;
      return true;
    } else {
      return false;
    }
  };
};
var regexNonCapturing = (re, handler) => {
  return (state) => {
    const indexStart = state.index;
    const input = state.input;
    re.lastIndex = indexStart;
    const matched = re.test(input);
    if (matched) {
      const indexEnd = re.lastIndex;
      if (!isUndefined3(handler) && !state.options.silent) {
        const output = isFunction3(handler) ? handler(input.slice(indexStart, indexEnd), input, `${indexStart}`) : handler;
        if (!isUndefined3(output)) {
          state.output.push(output);
        }
      }
      state.index = indexEnd;
      return true;
    } else {
      return false;
    }
  };
};
var string = (target, handler) => {
  return (state) => {
    const indexStart = state.index;
    const input = state.input;
    const matched = input.startsWith(target, indexStart);
    if (matched) {
      if (!isUndefined3(handler) && !state.options.silent) {
        const output = isFunction3(handler) ? handler(target, input, `${indexStart}`) : handler;
        if (!isUndefined3(output)) {
          state.output.push(output);
        }
      }
      state.index += target.length;
      return true;
    } else {
      return false;
    }
  };
};
var repeat = (rule, min, max, handler) => {
  const erule = resolve(rule);
  const isBacktrackable = min > 1;
  return memoizable(handleable(backtrackable((state) => {
    let repetitions = 0;
    while (repetitions < max) {
      const index = state.index;
      const matched = erule(state);
      if (!matched)
        break;
      repetitions += 1;
      if (state.index === index)
        break;
    }
    return repetitions >= min;
  }, isBacktrackable), handler));
};
var optional = (rule, handler) => {
  return repeat(rule, 0, 1, handler);
};
var star = (rule, handler) => {
  return repeat(rule, 0, Infinity, handler);
};
var plus = (rule, handler) => {
  return repeat(rule, 1, Infinity, handler);
};
var and = (rules, handler) => {
  const erules = rules.map(resolve);
  return memoizable(handleable(backtrackable((state) => {
    for (let i = 0, l = erules.length; i < l; i++) {
      if (!erules[i](state))
        return false;
    }
    return true;
  }), handler));
};
var or = (rules, handler) => {
  const erules = rules.map(resolve);
  return memoizable(handleable((state) => {
    for (let i = 0, l = erules.length; i < l; i++) {
      if (erules[i](state))
        return true;
    }
    return false;
  }, handler));
};
var backtrackable = (rule, enabled = true, force = false) => {
  const erule = resolve(rule);
  if (!enabled)
    return erule;
  return (state) => {
    const index = state.index;
    const length = state.output.length;
    const matched = erule(state);
    if (!matched && !force) {
      state.indexBacktrackMax = Math.max(state.indexBacktrackMax, state.index);
    }
    if (!matched || force) {
      state.index = index;
      if (state.output.length !== length) {
        state.output.length = length;
      }
    }
    return matched;
  };
};
var handleable = (rule, handler) => {
  const erule = resolve(rule);
  if (!handler)
    return erule;
  return (state) => {
    if (state.options.silent)
      return erule(state);
    const length = state.output.length;
    const matched = erule(state);
    if (matched) {
      const outputs = state.output.splice(length, Infinity);
      const output = handler(outputs);
      if (!isUndefined3(output)) {
        state.output.push(output);
      }
      return true;
    } else {
      return false;
    }
  };
};
var memoizable = /* @__PURE__ */ (() => {
  let RULE_ID = 0;
  return (rule) => {
    const erule = resolve(rule);
    const ruleId = RULE_ID += 1;
    return (state) => {
      var _a;
      if (state.options.memoization === false)
        return erule(state);
      const indexStart = state.index;
      const cache2 = (_a = state.cache)[ruleId] || (_a[ruleId] = { indexMax: -1, queue: [] });
      const cacheQueue = cache2.queue;
      const isPotentiallyCached = indexStart <= cache2.indexMax;
      if (isPotentiallyCached) {
        const cacheStore = cache2.store || (cache2.store = /* @__PURE__ */ new Map());
        if (cacheQueue.length) {
          for (let i = 0, l = cacheQueue.length; i < l; i += 2) {
            const key = cacheQueue[i * 2];
            const value = cacheQueue[i * 2 + 1];
            cacheStore.set(key, value);
          }
          cacheQueue.length = 0;
        }
        const cached = cacheStore.get(indexStart);
        if (cached === false) {
          return false;
        } else if (isNumber(cached)) {
          state.index = cached;
          return true;
        } else if (cached) {
          state.index = cached.index;
          if (cached.output?.length) {
            state.output.push(...cached.output);
          }
          return true;
        }
      }
      const lengthStart = state.output.length;
      const matched = erule(state);
      cache2.indexMax = Math.max(cache2.indexMax, indexStart);
      if (matched) {
        const indexEnd = state.index;
        const lengthEnd = state.output.length;
        if (lengthEnd > lengthStart) {
          const output = state.output.slice(lengthStart, lengthEnd);
          cacheQueue.push(indexStart, { index: indexEnd, output });
        } else {
          cacheQueue.push(indexStart, indexEnd);
        }
        return true;
      } else {
        cacheQueue.push(indexStart, false);
        return false;
      }
    };
  };
})();
var lazy = (getter) => {
  let erule;
  return (state) => {
    erule || (erule = resolve(getter()));
    return erule(state);
  };
};
var resolve = memoize2((rule) => {
  if (isFunction3(rule)) {
    if (isFunctionNullary(rule)) {
      return lazy(rule);
    } else {
      return rule;
    }
  }
  if (isString2(rule) || isRegExp(rule)) {
    return match(rule);
  }
  if (isArray2(rule)) {
    return and(rule);
  }
  if (isObject(rule)) {
    return or(Object.values(rule));
  }
  throw new Error("Invalid rule");
});

// node_modules/zeptomatch/dist/utils.js
var identity2 = (value) => {
  return value;
};
var isString3 = (value) => {
  return typeof value === "string";
};
var memoizeByObject = (fn) => {
  const cacheFull = /* @__PURE__ */ new WeakMap();
  const cachePartial = /* @__PURE__ */ new WeakMap();
  return (globs, options) => {
    const cache2 = options?.partial ? cachePartial : cacheFull;
    const cached = cache2.get(globs);
    if (cached !== void 0)
      return cached;
    const result = fn(globs, options);
    cache2.set(globs, result);
    return result;
  };
};
var memoizeByPrimitive = (fn) => {
  const cacheFull = {};
  const cachePartial = {};
  return (glob, options) => {
    const cache2 = options?.partial ? cachePartial : cacheFull;
    return cache2[glob] ?? (cache2[glob] = fn(glob, options));
  };
};

// node_modules/zeptomatch/dist/normalize/grammar.js
var Escaped = match(/\\./, identity2);
var Passthrough = match(/./, identity2);
var StarStarStar = match(/\*\*\*+/, "*");
var StarStarNoLeft = match(/([^/{[(!])\*\*/, (_, $1) => `${$1}*`);
var StarStarNoRight = match(/(^|.)\*\*(?=[^*/)\]}])/, (_, $1) => `${$1}*`);
var Grammar = star(or([Escaped, StarStarStar, StarStarNoLeft, StarStarNoRight, Passthrough]));
var grammar_default = Grammar;

// node_modules/zeptomatch/dist/normalize/index.js
var normalize = (glob) => {
  return parse(glob, grammar_default, { memoization: false }).join("");
};
var normalize_default = normalize;

// node_modules/zeptomatch/dist/range.js
var ALPHABET = "abcdefghijklmnopqrstuvwxyz";
var int2alpha = (int) => {
  let alpha = "";
  while (int > 0) {
    const reminder = (int - 1) % 26;
    alpha = ALPHABET[reminder] + alpha;
    int = Math.floor((int - 1) / 26);
  }
  return alpha;
};
var alpha2int = (str) => {
  let int = 0;
  for (let i = 0, l = str.length; i < l; i++) {
    int = int * 26 + ALPHABET.indexOf(str[i]) + 1;
  }
  return int;
};
var makeRangeInt = (start, end) => {
  if (end < start)
    return makeRangeInt(end, start);
  const range = [];
  while (start <= end) {
    range.push(start++);
  }
  return range;
};
var makeRangePaddedInt = (start, end, paddingLength) => {
  return makeRangeInt(start, end).map((int) => String(int).padStart(paddingLength, "0"));
};
var makeRangeAlpha = (start, end) => {
  return makeRangeInt(alpha2int(start), alpha2int(end)).map(int2alpha);
};

// node_modules/zeptomatch/dist/parse/utils.js
var regex2 = (source) => {
  const regex3 = new RegExp(source, "s");
  return { partial: false, regex: regex3, children: [] };
};
var alternation = (children) => {
  return { children };
};
var sequence = /* @__PURE__ */ (() => {
  const pushToLeaves = (parent, child, handled) => {
    if (handled.has(parent))
      return;
    handled.add(parent);
    const { children } = parent;
    if (!children.length) {
      children.push(child);
    } else {
      for (let i = 0, l = children.length; i < l; i++) {
        pushToLeaves(children[i], child, handled);
      }
    }
  };
  return (nodes) => {
    if (!nodes.length) {
      return alternation([]);
    }
    for (let i = nodes.length - 1; i >= 1; i--) {
      const handled = /* @__PURE__ */ new Set();
      const parent = nodes[i - 1];
      const child = nodes[i];
      pushToLeaves(parent, child, handled);
    }
    return nodes[0];
  };
})();
var slash = () => {
  const regex3 = new RegExp("[\\\\/]", "s");
  return { regex: regex3, children: [] };
};

// node_modules/zeptomatch/dist/parse/grammar.js
var Escaped2 = match(/\\./, regex2);
var Escape = match(/[$.*+?^(){}[\]\|]/, (char) => regex2(`\\${char}`));
var Slash = match(/[\\\/]/, slash);
var Passthrough2 = match(/[^$.*+?^(){}[\]\|\\\/]+/, regex2);
var NegationOdd = match(/^(?:!!)*!(.*)$/, (_, glob) => regex2(`(?!^${dist_default19.compile(glob).source}$).*?`));
var NegationEven = match(/^(!!)+/);
var Negation = or([NegationOdd, NegationEven]);
var StarStarBetween = match(/\/(\*\*\/)+/, () => alternation([sequence([slash(), regex2(".+?"), slash()]), slash()]));
var StarStarStart = match(/^(\*\*\/)+/, () => alternation([regex2("^"), sequence([regex2(".*?"), slash()])]));
var StarStarEnd = match(/\/(\*\*)$/, () => alternation([sequence([slash(), regex2(".*?")]), regex2("$")]));
var StarStarNone = match(/\*\*/, () => regex2(".*?"));
var StarStar = or([StarStarBetween, StarStarStart, StarStarEnd, StarStarNone]);
var StarDouble = match(/\*\/(?!\*\*\/|\*$)/, () => sequence([regex2("[^\\\\/]*?"), slash()]));
var StarSingle = match(/\*/, () => regex2("[^\\\\/]*"));
var Star = or([StarDouble, StarSingle]);
var Question = match("?", () => regex2("[^\\\\/]"));
var ClassOpen = match("[", identity2);
var ClassClose = match("]", identity2);
var ClassNegation = match(/[!^]/, "^\\\\/");
var ClassRange = match(/[a-z]-[a-z]|[0-9]-[0-9]/i, identity2);
var ClassEscaped = match(/\\./, identity2);
var ClassEscape = match(/[$.*+?^(){}[\|]/, (char) => `\\${char}`);
var ClassSlash = match(/[\\\/]/, "\\\\/");
var ClassPassthrough = match(/[^$.*+?^(){}[\]\|\\\/]+/, identity2);
var ClassValue = or([ClassEscaped, ClassEscape, ClassSlash, ClassRange, ClassPassthrough]);
var Class = and([ClassOpen, optional(ClassNegation), star(ClassValue), ClassClose], (_) => regex2(_.join("")));
var RangeOpen = match("{", "(?:");
var RangeClose = match("}", ")");
var RangeNumeric = match(/(\d+)\.\.(\d+)/, (_, $1, $2) => makeRangePaddedInt(+$1, +$2, Math.min($1.length, $2.length)).join("|"));
var RangeAlphaLower = match(/([a-z]+)\.\.([a-z]+)/, (_, $1, $2) => makeRangeAlpha($1, $2).join("|"));
var RangeAlphaUpper = match(/([A-Z]+)\.\.([A-Z]+)/, (_, $1, $2) => makeRangeAlpha($1.toLowerCase(), $2.toLowerCase()).join("|").toUpperCase());
var RangeValue = or([RangeNumeric, RangeAlphaLower, RangeAlphaUpper]);
var Range = and([RangeOpen, RangeValue, RangeClose], (_) => regex2(_.join("")));
var BracesOpen = match("{");
var BracesClose = match("}");
var BracesComma = match(",");
var BracesEscaped = match(/\\./, regex2);
var BracesEscape = match(/[$.*+?^(){[\]\|]/, (char) => regex2(`\\${char}`));
var BracesSlash = match(/[\\\/]/, slash);
var BracesPassthrough = match(/[^$.*+?^(){}[\]\|\\\/,]+/, regex2);
var BracesNested = lazy(() => Braces);
var BracesEmptyValue = match("", () => regex2("(?:)"));
var BracesFullValue = plus(or([StarStar, Star, Question, Class, Range, BracesNested, BracesEscaped, BracesEscape, BracesSlash, BracesPassthrough]), sequence);
var BracesValue = or([BracesFullValue, BracesEmptyValue]);
var Braces = and([BracesOpen, optional(and([BracesValue, star(and([BracesComma, BracesValue]))])), BracesClose], alternation);
var Grammar2 = star(or([Negation, StarStar, Star, Question, Class, Range, Braces, Escaped2, Escape, Slash, Passthrough2]), sequence);
var grammar_default2 = Grammar2;

// node_modules/zeptomatch/dist/parse/index.js
var _parse = (glob) => {
  return parse(glob, grammar_default2, { memoization: false })[0];
};
var parse_default = _parse;

// node_modules/zeptomatch/dist/index.js
var zeptomatch = (glob, path7, options) => {
  return zeptomatch.compile(glob, options).test(path7);
};
zeptomatch.compile = (() => {
  const compileGlob = memoizeByPrimitive((glob, options) => {
    return compile_default(parse_default(normalize_default(glob)), options);
  });
  const compileGlobs = memoizeByObject((globs, options) => {
    return merge_default(globs.map((glob) => compileGlob(glob, options)));
  });
  return (glob, options) => {
    if (isString3(glob)) {
      return compileGlob(glob, options);
    } else {
      return compileGlobs(glob, options);
    }
  };
})();
var dist_default19 = zeptomatch;

// node_modules/@prettier/cli/dist/utils.js
async function getModule(modulePath) {
  const moduleExports = await import(url.pathToFileURL(modulePath).href);
  const module = moduleExports.default || moduleExports.exports || moduleExports;
  return module;
}
function getModulePath(name, rootPath) {
  const rootUrl = url.pathToFileURL(rootPath);
  const moduleUrl = moduleResolve(name, rootUrl);
  const modulePath = url.fileURLToPath(moduleUrl);
  return modulePath;
}
function identity3(value) {
  return value;
}
var getPlugin = dist_default4((name) => {
  const pluginPath = getPluginPath(name);
  const plugin = getModule(pluginPath);
  return plugin;
});
async function getPluginOrExit(name) {
  try {
    return await getPlugin(name);
  } catch {
    exit_default(`The plugin "${name}" could not be loaded`);
  }
}
function getPluginPath(name) {
  const rootPath = path6.join(process7.cwd(), "index.js");
  try {
    return getModulePath(`./${name}`, rootPath);
  } catch {
    return getModulePath(name, rootPath);
  }
}
async function getPluginsOrExit(names) {
  if (!names.length) return [];
  return await Promise.all(names.map((name) => getPluginOrExit(name)));
}
var getStdin = dist_default3(async () => {
  if (!process7.stdin.isTTY) {
    const stdin = stream2text(process7.stdin);
    const fallback = dist_default5(1e3, void 0);
    return Promise.race([stdin, fallback]);
  }
});
function isFunction4(value) {
  return typeof value === "function";
}
var normalizePathSeparatorsToPosix = (() => {
  if (path6.sep === "\\") {
    return (filePath) => {
      return method_replace_all_default(
        /* OPTIONAL_OBJECT: false */
        0,
        filePath,
        "\\",
        "/"
      );
    };
  } else {
    return identity3;
  }
})();
function resolve2(value) {
  return isFunction4(value) ? value() : value;
}

// node_modules/@prettier/cli/dist/prettier_serial.js
async function check(filePath, fileContent, formatOptions, contextOptions, pluginsDefaultOptions, pluginsCustomOptions) {
  const fileContentFormatted = await format2(filePath, fileContent, formatOptions, contextOptions, pluginsDefaultOptions, pluginsCustomOptions);
  return fileContent === fileContentFormatted;
}
async function checkWithPath(filePath, formatOptions, contextOptions, pluginsDefaultOptions, pluginsCustomOptions) {
  const fileContent = await readFile(filePath, "utf8");
  return check(filePath, fileContent, formatOptions, contextOptions, pluginsDefaultOptions, pluginsCustomOptions);
}
async function format2(filePath, fileContent, formatOptions, contextOptions, pluginsDefaultOptions, pluginsCustomOptions) {
  formatOptions = await resolve2(formatOptions);
  const plugins = await getPluginsOrExit(formatOptions.plugins || []);
  const options = {
    ...pluginsDefaultOptions,
    ...formatOptions,
    ...pluginsCustomOptions,
    ...contextOptions,
    filepath: filePath,
    plugins
  };
  const result = await prettier.formatWithCursor(fileContent, options);
  if (result.cursorOffset >= 0) {
    process8.stderr.write(`${result.cursorOffset}
`);
  }
  return result.formatted;
}
async function formatWithPath(filePath, formatOptions, contextOptions, pluginsDefaultOptions, pluginsCustomOptions) {
  const fileContent = await readFile(filePath, "utf8");
  return format2(filePath, fileContent, formatOptions, contextOptions, pluginsDefaultOptions, pluginsCustomOptions);
}
async function write(filePath, fileContent, formatOptions, contextOptions, pluginsDefaultOptions, pluginsCustomOptions) {
  const fileContentFormatted = await format2(filePath, fileContent, formatOptions, contextOptions, pluginsDefaultOptions, pluginsCustomOptions);
  if (fileContent === fileContentFormatted)
    return true;
  await writeFile(filePath, fileContentFormatted, "utf8");
  return false;
}
async function writeWithPath(filePath, formatOptions, contextOptions, pluginsDefaultOptions, pluginsCustomOptions) {
  const fileContent = await readFile(filePath, "utf8");
  return write(filePath, fileContent, formatOptions, contextOptions, pluginsDefaultOptions, pluginsCustomOptions);
}
export {
  check,
  checkWithPath,
  format2 as format,
  formatWithPath,
  write,
  writeWithPath
};
