"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
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

// ../../node_modules/.pnpm/isexe@2.0.0/node_modules/isexe/windows.js
var require_windows = __commonJS({
  "../../node_modules/.pnpm/isexe@2.0.0/node_modules/isexe/windows.js"(exports2, module2) {
    "use strict";
    module2.exports = isexe;
    isexe.sync = sync;
    var fs2 = require("fs");
    function checkPathExt(path2, options) {
      var pathext = options.pathExt !== void 0 ? options.pathExt : process.env.PATHEXT;
      if (!pathext) {
        return true;
      }
      pathext = pathext.split(";");
      if (pathext.indexOf("") !== -1) {
        return true;
      }
      for (var i = 0; i < pathext.length; i++) {
        var p = pathext[i].toLowerCase();
        if (p && path2.substr(-p.length).toLowerCase() === p) {
          return true;
        }
      }
      return false;
    }
    function checkStat(stat, path2, options) {
      if (!stat.isSymbolicLink() && !stat.isFile()) {
        return false;
      }
      return checkPathExt(path2, options);
    }
    function isexe(path2, options, cb) {
      fs2.stat(path2, function(er, stat) {
        cb(er, er ? false : checkStat(stat, path2, options));
      });
    }
    function sync(path2, options) {
      return checkStat(fs2.statSync(path2), path2, options);
    }
  }
});

// ../../node_modules/.pnpm/isexe@2.0.0/node_modules/isexe/mode.js
var require_mode = __commonJS({
  "../../node_modules/.pnpm/isexe@2.0.0/node_modules/isexe/mode.js"(exports2, module2) {
    "use strict";
    module2.exports = isexe;
    isexe.sync = sync;
    var fs2 = require("fs");
    function isexe(path2, options, cb) {
      fs2.stat(path2, function(er, stat) {
        cb(er, er ? false : checkStat(stat, options));
      });
    }
    function sync(path2, options) {
      return checkStat(fs2.statSync(path2), options);
    }
    function checkStat(stat, options) {
      return stat.isFile() && checkMode(stat, options);
    }
    function checkMode(stat, options) {
      var mod = stat.mode;
      var uid = stat.uid;
      var gid = stat.gid;
      var myUid = options.uid !== void 0 ? options.uid : process.getuid && process.getuid();
      var myGid = options.gid !== void 0 ? options.gid : process.getgid && process.getgid();
      var u = parseInt("100", 8);
      var g = parseInt("010", 8);
      var o = parseInt("001", 8);
      var ug = u | g;
      var ret = mod & o || mod & g && gid === myGid || mod & u && uid === myUid || mod & ug && myUid === 0;
      return ret;
    }
  }
});

// ../../node_modules/.pnpm/isexe@2.0.0/node_modules/isexe/index.js
var require_isexe = __commonJS({
  "../../node_modules/.pnpm/isexe@2.0.0/node_modules/isexe/index.js"(exports2, module2) {
    "use strict";
    var fs2 = require("fs");
    var core;
    if (process.platform === "win32" || global.TESTING_WINDOWS) {
      core = require_windows();
    } else {
      core = require_mode();
    }
    module2.exports = isexe;
    isexe.sync = sync;
    function isexe(path2, options, cb) {
      if (typeof options === "function") {
        cb = options;
        options = {};
      }
      if (!cb) {
        if (typeof Promise !== "function") {
          throw new TypeError("callback not provided");
        }
        return new Promise(function(resolve, reject) {
          isexe(path2, options || {}, function(er, is) {
            if (er) {
              reject(er);
            } else {
              resolve(is);
            }
          });
        });
      }
      core(path2, options || {}, function(er, is) {
        if (er) {
          if (er.code === "EACCES" || options && options.ignoreErrors) {
            er = null;
            is = false;
          }
        }
        cb(er, is);
      });
    }
    function sync(path2, options) {
      try {
        return core.sync(path2, options || {});
      } catch (er) {
        if (options && options.ignoreErrors || er.code === "EACCES") {
          return false;
        } else {
          throw er;
        }
      }
    }
  }
});

// ../../node_modules/.pnpm/which@2.0.2/node_modules/which/which.js
var require_which = __commonJS({
  "../../node_modules/.pnpm/which@2.0.2/node_modules/which/which.js"(exports2, module2) {
    "use strict";
    var isWindows = process.platform === "win32" || process.env.OSTYPE === "cygwin" || process.env.OSTYPE === "msys";
    var path2 = require("path");
    var COLON = isWindows ? ";" : ":";
    var isexe = require_isexe();
    var getNotFoundError = (cmd) => Object.assign(new Error(`not found: ${cmd}`), { code: "ENOENT" });
    var getPathInfo = (cmd, opt) => {
      const colon = opt.colon || COLON;
      const pathEnv = cmd.match(/\//) || isWindows && cmd.match(/\\/) ? [""] : [
        // windows always checks the cwd first
        ...isWindows ? [process.cwd()] : [],
        ...(opt.path || process.env.PATH || /* istanbul ignore next: very unusual */
        "").split(colon)
      ];
      const pathExtExe = isWindows ? opt.pathExt || process.env.PATHEXT || ".EXE;.CMD;.BAT;.COM" : "";
      const pathExt = isWindows ? pathExtExe.split(colon) : [""];
      if (isWindows) {
        if (cmd.indexOf(".") !== -1 && pathExt[0] !== "")
          pathExt.unshift("");
      }
      return {
        pathEnv,
        pathExt,
        pathExtExe
      };
    };
    var which = (cmd, opt, cb) => {
      if (typeof opt === "function") {
        cb = opt;
        opt = {};
      }
      if (!opt)
        opt = {};
      const { pathEnv, pathExt, pathExtExe } = getPathInfo(cmd, opt);
      const found = [];
      const step = (i) => new Promise((resolve, reject) => {
        if (i === pathEnv.length)
          return opt.all && found.length ? resolve(found) : reject(getNotFoundError(cmd));
        const ppRaw = pathEnv[i];
        const pathPart = /^".*"$/.test(ppRaw) ? ppRaw.slice(1, -1) : ppRaw;
        const pCmd = path2.join(pathPart, cmd);
        const p = !pathPart && /^\.[\\\/]/.test(cmd) ? cmd.slice(0, 2) + pCmd : pCmd;
        resolve(subStep(p, i, 0));
      });
      const subStep = (p, i, ii) => new Promise((resolve, reject) => {
        if (ii === pathExt.length)
          return resolve(step(i + 1));
        const ext = pathExt[ii];
        isexe(p + ext, { pathExt: pathExtExe }, (er, is) => {
          if (!er && is) {
            if (opt.all)
              found.push(p + ext);
            else
              return resolve(p + ext);
          }
          return resolve(subStep(p, i, ii + 1));
        });
      });
      return cb ? step(0).then((res) => cb(null, res), cb) : step(0);
    };
    var whichSync = (cmd, opt) => {
      opt = opt || {};
      const { pathEnv, pathExt, pathExtExe } = getPathInfo(cmd, opt);
      const found = [];
      for (let i = 0; i < pathEnv.length; i++) {
        const ppRaw = pathEnv[i];
        const pathPart = /^".*"$/.test(ppRaw) ? ppRaw.slice(1, -1) : ppRaw;
        const pCmd = path2.join(pathPart, cmd);
        const p = !pathPart && /^\.[\\\/]/.test(cmd) ? cmd.slice(0, 2) + pCmd : pCmd;
        for (let j = 0; j < pathExt.length; j++) {
          const cur = p + pathExt[j];
          try {
            const is = isexe.sync(cur, { pathExt: pathExtExe });
            if (is) {
              if (opt.all)
                found.push(cur);
              else
                return cur;
            }
          } catch (ex) {
          }
        }
      }
      if (opt.all && found.length)
        return found;
      if (opt.nothrow)
        return null;
      throw getNotFoundError(cmd);
    };
    module2.exports = which;
    which.sync = whichSync;
  }
});

// ../../node_modules/.pnpm/path-key@3.1.1/node_modules/path-key/index.js
var require_path_key = __commonJS({
  "../../node_modules/.pnpm/path-key@3.1.1/node_modules/path-key/index.js"(exports2, module2) {
    "use strict";
    var pathKey = (options = {}) => {
      const environment = options.env || process.env;
      const platform = options.platform || process.platform;
      if (platform !== "win32") {
        return "PATH";
      }
      return Object.keys(environment).reverse().find((key) => key.toUpperCase() === "PATH") || "Path";
    };
    module2.exports = pathKey;
    module2.exports.default = pathKey;
  }
});

// ../../node_modules/.pnpm/cross-spawn@7.0.6/node_modules/cross-spawn/lib/util/resolveCommand.js
var require_resolveCommand = __commonJS({
  "../../node_modules/.pnpm/cross-spawn@7.0.6/node_modules/cross-spawn/lib/util/resolveCommand.js"(exports2, module2) {
    "use strict";
    var path2 = require("path");
    var which = require_which();
    var getPathKey = require_path_key();
    function resolveCommandAttempt(parsed, withoutPathExt) {
      const env = parsed.options.env || process.env;
      const cwd = process.cwd();
      const hasCustomCwd = parsed.options.cwd != null;
      const shouldSwitchCwd = hasCustomCwd && process.chdir !== void 0 && !process.chdir.disabled;
      if (shouldSwitchCwd) {
        try {
          process.chdir(parsed.options.cwd);
        } catch (err) {
        }
      }
      let resolved;
      try {
        resolved = which.sync(parsed.command, {
          path: env[getPathKey({ env })],
          pathExt: withoutPathExt ? path2.delimiter : void 0
        });
      } catch (e) {
      } finally {
        if (shouldSwitchCwd) {
          process.chdir(cwd);
        }
      }
      if (resolved) {
        resolved = path2.resolve(hasCustomCwd ? parsed.options.cwd : "", resolved);
      }
      return resolved;
    }
    function resolveCommand(parsed) {
      return resolveCommandAttempt(parsed) || resolveCommandAttempt(parsed, true);
    }
    module2.exports = resolveCommand;
  }
});

// ../../node_modules/.pnpm/cross-spawn@7.0.6/node_modules/cross-spawn/lib/util/escape.js
var require_escape = __commonJS({
  "../../node_modules/.pnpm/cross-spawn@7.0.6/node_modules/cross-spawn/lib/util/escape.js"(exports2, module2) {
    "use strict";
    var metaCharsRegExp = /([()\][%!^"`<>&|;, *?])/g;
    function escapeCommand(arg) {
      arg = arg.replace(metaCharsRegExp, "^$1");
      return arg;
    }
    function escapeArgument(arg, doubleEscapeMetaChars) {
      arg = `${arg}`;
      arg = arg.replace(/(?=(\\+?)?)\1"/g, '$1$1\\"');
      arg = arg.replace(/(?=(\\+?)?)\1$/, "$1$1");
      arg = `"${arg}"`;
      arg = arg.replace(metaCharsRegExp, "^$1");
      if (doubleEscapeMetaChars) {
        arg = arg.replace(metaCharsRegExp, "^$1");
      }
      return arg;
    }
    module2.exports.command = escapeCommand;
    module2.exports.argument = escapeArgument;
  }
});

// ../../node_modules/.pnpm/shebang-regex@3.0.0/node_modules/shebang-regex/index.js
var require_shebang_regex = __commonJS({
  "../../node_modules/.pnpm/shebang-regex@3.0.0/node_modules/shebang-regex/index.js"(exports2, module2) {
    "use strict";
    module2.exports = /^#!(.*)/;
  }
});

// ../../node_modules/.pnpm/shebang-command@2.0.0/node_modules/shebang-command/index.js
var require_shebang_command = __commonJS({
  "../../node_modules/.pnpm/shebang-command@2.0.0/node_modules/shebang-command/index.js"(exports2, module2) {
    "use strict";
    var shebangRegex = require_shebang_regex();
    module2.exports = (string = "") => {
      const match = string.match(shebangRegex);
      if (!match) {
        return null;
      }
      const [path2, argument] = match[0].replace(/#! ?/, "").split(" ");
      const binary = path2.split("/").pop();
      if (binary === "env") {
        return argument;
      }
      return argument ? `${binary} ${argument}` : binary;
    };
  }
});

// ../../node_modules/.pnpm/cross-spawn@7.0.6/node_modules/cross-spawn/lib/util/readShebang.js
var require_readShebang = __commonJS({
  "../../node_modules/.pnpm/cross-spawn@7.0.6/node_modules/cross-spawn/lib/util/readShebang.js"(exports2, module2) {
    "use strict";
    var fs2 = require("fs");
    var shebangCommand = require_shebang_command();
    function readShebang(command) {
      const size = 150;
      const buffer = Buffer.alloc(size);
      let fd;
      try {
        fd = fs2.openSync(command, "r");
        fs2.readSync(fd, buffer, 0, size, 0);
        fs2.closeSync(fd);
      } catch (e) {
      }
      return shebangCommand(buffer.toString());
    }
    module2.exports = readShebang;
  }
});

// ../../node_modules/.pnpm/cross-spawn@7.0.6/node_modules/cross-spawn/lib/parse.js
var require_parse = __commonJS({
  "../../node_modules/.pnpm/cross-spawn@7.0.6/node_modules/cross-spawn/lib/parse.js"(exports2, module2) {
    "use strict";
    var path2 = require("path");
    var resolveCommand = require_resolveCommand();
    var escape = require_escape();
    var readShebang = require_readShebang();
    var isWin = process.platform === "win32";
    var isExecutableRegExp = /\.(?:com|exe)$/i;
    var isCmdShimRegExp = /node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;
    function detectShebang(parsed) {
      parsed.file = resolveCommand(parsed);
      const shebang = parsed.file && readShebang(parsed.file);
      if (shebang) {
        parsed.args.unshift(parsed.file);
        parsed.command = shebang;
        return resolveCommand(parsed);
      }
      return parsed.file;
    }
    function parseNonShell(parsed) {
      if (!isWin) {
        return parsed;
      }
      const commandFile = detectShebang(parsed);
      const needsShell = !isExecutableRegExp.test(commandFile);
      if (parsed.options.forceShell || needsShell) {
        const needsDoubleEscapeMetaChars = isCmdShimRegExp.test(commandFile);
        parsed.command = path2.normalize(parsed.command);
        parsed.command = escape.command(parsed.command);
        parsed.args = parsed.args.map((arg) => escape.argument(arg, needsDoubleEscapeMetaChars));
        const shellCommand = [parsed.command].concat(parsed.args).join(" ");
        parsed.args = ["/d", "/s", "/c", `"${shellCommand}"`];
        parsed.command = process.env.comspec || "cmd.exe";
        parsed.options.windowsVerbatimArguments = true;
      }
      return parsed;
    }
    function parse(command, args, options) {
      if (args && !Array.isArray(args)) {
        options = args;
        args = null;
      }
      args = args ? args.slice(0) : [];
      options = Object.assign({}, options);
      const parsed = {
        command,
        args,
        options,
        file: void 0,
        original: {
          command,
          args
        }
      };
      return options.shell ? parsed : parseNonShell(parsed);
    }
    module2.exports = parse;
  }
});

// ../../node_modules/.pnpm/cross-spawn@7.0.6/node_modules/cross-spawn/lib/enoent.js
var require_enoent = __commonJS({
  "../../node_modules/.pnpm/cross-spawn@7.0.6/node_modules/cross-spawn/lib/enoent.js"(exports2, module2) {
    "use strict";
    var isWin = process.platform === "win32";
    function notFoundError(original, syscall) {
      return Object.assign(new Error(`${syscall} ${original.command} ENOENT`), {
        code: "ENOENT",
        errno: "ENOENT",
        syscall: `${syscall} ${original.command}`,
        path: original.command,
        spawnargs: original.args
      });
    }
    function hookChildProcess(cp, parsed) {
      if (!isWin) {
        return;
      }
      const originalEmit = cp.emit;
      cp.emit = function(name, arg1) {
        if (name === "exit") {
          const err = verifyENOENT(arg1, parsed);
          if (err) {
            return originalEmit.call(cp, "error", err);
          }
        }
        return originalEmit.apply(cp, arguments);
      };
    }
    function verifyENOENT(status, parsed) {
      if (isWin && status === 1 && !parsed.file) {
        return notFoundError(parsed.original, "spawn");
      }
      return null;
    }
    function verifyENOENTSync(status, parsed) {
      if (isWin && status === 1 && !parsed.file) {
        return notFoundError(parsed.original, "spawnSync");
      }
      return null;
    }
    module2.exports = {
      hookChildProcess,
      verifyENOENT,
      verifyENOENTSync,
      notFoundError
    };
  }
});

// ../../node_modules/.pnpm/cross-spawn@7.0.6/node_modules/cross-spawn/index.js
var require_cross_spawn = __commonJS({
  "../../node_modules/.pnpm/cross-spawn@7.0.6/node_modules/cross-spawn/index.js"(exports2, module2) {
    "use strict";
    var cp = require("child_process");
    var parse = require_parse();
    var enoent = require_enoent();
    function spawn(command, args, options) {
      const parsed = parse(command, args, options);
      const spawned = cp.spawn(parsed.command, parsed.args, parsed.options);
      enoent.hookChildProcess(spawned, parsed);
      return spawned;
    }
    function spawnSync(command, args, options) {
      const parsed = parse(command, args, options);
      const result = cp.spawnSync(parsed.command, parsed.args, parsed.options);
      result.error = result.error || enoent.verifyENOENTSync(result.status, parsed);
      return result;
    }
    module2.exports = spawn;
    module2.exports.spawn = spawn;
    module2.exports.sync = spawnSync;
    module2.exports._parse = parse;
    module2.exports._enoent = enoent;
  }
});

// ../../node_modules/.pnpm/strip-final-newline@2.0.0/node_modules/strip-final-newline/index.js
var require_strip_final_newline = __commonJS({
  "../../node_modules/.pnpm/strip-final-newline@2.0.0/node_modules/strip-final-newline/index.js"(exports2, module2) {
    "use strict";
    module2.exports = (input) => {
      const LF = typeof input === "string" ? "\n" : "\n".charCodeAt();
      const CR = typeof input === "string" ? "\r" : "\r".charCodeAt();
      if (input[input.length - 1] === LF) {
        input = input.slice(0, input.length - 1);
      }
      if (input[input.length - 1] === CR) {
        input = input.slice(0, input.length - 1);
      }
      return input;
    };
  }
});

// ../../node_modules/.pnpm/npm-run-path@4.0.1/node_modules/npm-run-path/index.js
var require_npm_run_path = __commonJS({
  "../../node_modules/.pnpm/npm-run-path@4.0.1/node_modules/npm-run-path/index.js"(exports2, module2) {
    "use strict";
    var path2 = require("path");
    var pathKey = require_path_key();
    var npmRunPath = (options) => {
      options = {
        cwd: process.cwd(),
        path: process.env[pathKey()],
        execPath: process.execPath,
        ...options
      };
      let previous;
      let cwdPath = path2.resolve(options.cwd);
      const result = [];
      while (previous !== cwdPath) {
        result.push(path2.join(cwdPath, "node_modules/.bin"));
        previous = cwdPath;
        cwdPath = path2.resolve(cwdPath, "..");
      }
      const execPathDir = path2.resolve(options.cwd, options.execPath, "..");
      result.push(execPathDir);
      return result.concat(options.path).join(path2.delimiter);
    };
    module2.exports = npmRunPath;
    module2.exports.default = npmRunPath;
    module2.exports.env = (options) => {
      options = {
        env: process.env,
        ...options
      };
      const env = { ...options.env };
      const path3 = pathKey({ env });
      options.path = env[path3];
      env[path3] = module2.exports(options);
      return env;
    };
  }
});

// ../../node_modules/.pnpm/mimic-fn@2.1.0/node_modules/mimic-fn/index.js
var require_mimic_fn = __commonJS({
  "../../node_modules/.pnpm/mimic-fn@2.1.0/node_modules/mimic-fn/index.js"(exports2, module2) {
    "use strict";
    var mimicFn = (to, from) => {
      for (const prop of Reflect.ownKeys(from)) {
        Object.defineProperty(to, prop, Object.getOwnPropertyDescriptor(from, prop));
      }
      return to;
    };
    module2.exports = mimicFn;
    module2.exports.default = mimicFn;
  }
});

// ../../node_modules/.pnpm/onetime@5.1.2/node_modules/onetime/index.js
var require_onetime = __commonJS({
  "../../node_modules/.pnpm/onetime@5.1.2/node_modules/onetime/index.js"(exports2, module2) {
    "use strict";
    var mimicFn = require_mimic_fn();
    var calledFunctions = /* @__PURE__ */ new WeakMap();
    var onetime = (function_, options = {}) => {
      if (typeof function_ !== "function") {
        throw new TypeError("Expected a function");
      }
      let returnValue;
      let callCount = 0;
      const functionName = function_.displayName || function_.name || "<anonymous>";
      const onetime2 = function(...arguments_) {
        calledFunctions.set(onetime2, ++callCount);
        if (callCount === 1) {
          returnValue = function_.apply(this, arguments_);
          function_ = null;
        } else if (options.throw === true) {
          throw new Error(`Function \`${functionName}\` can only be called once`);
        }
        return returnValue;
      };
      mimicFn(onetime2, function_);
      calledFunctions.set(onetime2, callCount);
      return onetime2;
    };
    module2.exports = onetime;
    module2.exports.default = onetime;
    module2.exports.callCount = (function_) => {
      if (!calledFunctions.has(function_)) {
        throw new Error(`The given function \`${function_.name}\` is not wrapped by the \`onetime\` package`);
      }
      return calledFunctions.get(function_);
    };
  }
});

// ../../node_modules/.pnpm/human-signals@2.1.0/node_modules/human-signals/build/src/core.js
var require_core = __commonJS({
  "../../node_modules/.pnpm/human-signals@2.1.0/node_modules/human-signals/build/src/core.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SIGNALS = void 0;
    var SIGNALS = [
      {
        name: "SIGHUP",
        number: 1,
        action: "terminate",
        description: "Terminal closed",
        standard: "posix"
      },
      {
        name: "SIGINT",
        number: 2,
        action: "terminate",
        description: "User interruption with CTRL-C",
        standard: "ansi"
      },
      {
        name: "SIGQUIT",
        number: 3,
        action: "core",
        description: "User interruption with CTRL-\\",
        standard: "posix"
      },
      {
        name: "SIGILL",
        number: 4,
        action: "core",
        description: "Invalid machine instruction",
        standard: "ansi"
      },
      {
        name: "SIGTRAP",
        number: 5,
        action: "core",
        description: "Debugger breakpoint",
        standard: "posix"
      },
      {
        name: "SIGABRT",
        number: 6,
        action: "core",
        description: "Aborted",
        standard: "ansi"
      },
      {
        name: "SIGIOT",
        number: 6,
        action: "core",
        description: "Aborted",
        standard: "bsd"
      },
      {
        name: "SIGBUS",
        number: 7,
        action: "core",
        description: "Bus error due to misaligned, non-existing address or paging error",
        standard: "bsd"
      },
      {
        name: "SIGEMT",
        number: 7,
        action: "terminate",
        description: "Command should be emulated but is not implemented",
        standard: "other"
      },
      {
        name: "SIGFPE",
        number: 8,
        action: "core",
        description: "Floating point arithmetic error",
        standard: "ansi"
      },
      {
        name: "SIGKILL",
        number: 9,
        action: "terminate",
        description: "Forced termination",
        standard: "posix",
        forced: true
      },
      {
        name: "SIGUSR1",
        number: 10,
        action: "terminate",
        description: "Application-specific signal",
        standard: "posix"
      },
      {
        name: "SIGSEGV",
        number: 11,
        action: "core",
        description: "Segmentation fault",
        standard: "ansi"
      },
      {
        name: "SIGUSR2",
        number: 12,
        action: "terminate",
        description: "Application-specific signal",
        standard: "posix"
      },
      {
        name: "SIGPIPE",
        number: 13,
        action: "terminate",
        description: "Broken pipe or socket",
        standard: "posix"
      },
      {
        name: "SIGALRM",
        number: 14,
        action: "terminate",
        description: "Timeout or timer",
        standard: "posix"
      },
      {
        name: "SIGTERM",
        number: 15,
        action: "terminate",
        description: "Termination",
        standard: "ansi"
      },
      {
        name: "SIGSTKFLT",
        number: 16,
        action: "terminate",
        description: "Stack is empty or overflowed",
        standard: "other"
      },
      {
        name: "SIGCHLD",
        number: 17,
        action: "ignore",
        description: "Child process terminated, paused or unpaused",
        standard: "posix"
      },
      {
        name: "SIGCLD",
        number: 17,
        action: "ignore",
        description: "Child process terminated, paused or unpaused",
        standard: "other"
      },
      {
        name: "SIGCONT",
        number: 18,
        action: "unpause",
        description: "Unpaused",
        standard: "posix",
        forced: true
      },
      {
        name: "SIGSTOP",
        number: 19,
        action: "pause",
        description: "Paused",
        standard: "posix",
        forced: true
      },
      {
        name: "SIGTSTP",
        number: 20,
        action: "pause",
        description: 'Paused using CTRL-Z or "suspend"',
        standard: "posix"
      },
      {
        name: "SIGTTIN",
        number: 21,
        action: "pause",
        description: "Background process cannot read terminal input",
        standard: "posix"
      },
      {
        name: "SIGBREAK",
        number: 21,
        action: "terminate",
        description: "User interruption with CTRL-BREAK",
        standard: "other"
      },
      {
        name: "SIGTTOU",
        number: 22,
        action: "pause",
        description: "Background process cannot write to terminal output",
        standard: "posix"
      },
      {
        name: "SIGURG",
        number: 23,
        action: "ignore",
        description: "Socket received out-of-band data",
        standard: "bsd"
      },
      {
        name: "SIGXCPU",
        number: 24,
        action: "core",
        description: "Process timed out",
        standard: "bsd"
      },
      {
        name: "SIGXFSZ",
        number: 25,
        action: "core",
        description: "File too big",
        standard: "bsd"
      },
      {
        name: "SIGVTALRM",
        number: 26,
        action: "terminate",
        description: "Timeout or timer",
        standard: "bsd"
      },
      {
        name: "SIGPROF",
        number: 27,
        action: "terminate",
        description: "Timeout or timer",
        standard: "bsd"
      },
      {
        name: "SIGWINCH",
        number: 28,
        action: "ignore",
        description: "Terminal window size changed",
        standard: "bsd"
      },
      {
        name: "SIGIO",
        number: 29,
        action: "terminate",
        description: "I/O is available",
        standard: "other"
      },
      {
        name: "SIGPOLL",
        number: 29,
        action: "terminate",
        description: "Watched event",
        standard: "other"
      },
      {
        name: "SIGINFO",
        number: 29,
        action: "ignore",
        description: "Request for process information",
        standard: "other"
      },
      {
        name: "SIGPWR",
        number: 30,
        action: "terminate",
        description: "Device running out of power",
        standard: "systemv"
      },
      {
        name: "SIGSYS",
        number: 31,
        action: "core",
        description: "Invalid system call",
        standard: "other"
      },
      {
        name: "SIGUNUSED",
        number: 31,
        action: "terminate",
        description: "Invalid system call",
        standard: "other"
      }
    ];
    exports2.SIGNALS = SIGNALS;
  }
});

// ../../node_modules/.pnpm/human-signals@2.1.0/node_modules/human-signals/build/src/realtime.js
var require_realtime = __commonJS({
  "../../node_modules/.pnpm/human-signals@2.1.0/node_modules/human-signals/build/src/realtime.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SIGRTMAX = exports2.getRealtimeSignals = void 0;
    var getRealtimeSignals = function() {
      const length = SIGRTMAX - SIGRTMIN + 1;
      return Array.from({ length }, getRealtimeSignal);
    };
    exports2.getRealtimeSignals = getRealtimeSignals;
    var getRealtimeSignal = function(value, index) {
      return {
        name: `SIGRT${index + 1}`,
        number: SIGRTMIN + index,
        action: "terminate",
        description: "Application-specific signal (realtime)",
        standard: "posix"
      };
    };
    var SIGRTMIN = 34;
    var SIGRTMAX = 64;
    exports2.SIGRTMAX = SIGRTMAX;
  }
});

// ../../node_modules/.pnpm/human-signals@2.1.0/node_modules/human-signals/build/src/signals.js
var require_signals = __commonJS({
  "../../node_modules/.pnpm/human-signals@2.1.0/node_modules/human-signals/build/src/signals.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getSignals = void 0;
    var _os = require("os");
    var _core = require_core();
    var _realtime = require_realtime();
    var getSignals = function() {
      const realtimeSignals = (0, _realtime.getRealtimeSignals)();
      const signals = [..._core.SIGNALS, ...realtimeSignals].map(normalizeSignal);
      return signals;
    };
    exports2.getSignals = getSignals;
    var normalizeSignal = function({
      name,
      number: defaultNumber,
      description,
      action,
      forced = false,
      standard
    }) {
      const {
        signals: { [name]: constantSignal }
      } = _os.constants;
      const supported = constantSignal !== void 0;
      const number = supported ? constantSignal : defaultNumber;
      return { name, number, description, supported, action, forced, standard };
    };
  }
});

// ../../node_modules/.pnpm/human-signals@2.1.0/node_modules/human-signals/build/src/main.js
var require_main = __commonJS({
  "../../node_modules/.pnpm/human-signals@2.1.0/node_modules/human-signals/build/src/main.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.signalsByNumber = exports2.signalsByName = void 0;
    var _os = require("os");
    var _signals = require_signals();
    var _realtime = require_realtime();
    var getSignalsByName = function() {
      const signals = (0, _signals.getSignals)();
      return signals.reduce(getSignalByName, {});
    };
    var getSignalByName = function(signalByNameMemo, { name, number, description, supported, action, forced, standard }) {
      return {
        ...signalByNameMemo,
        [name]: { name, number, description, supported, action, forced, standard }
      };
    };
    var signalsByName = getSignalsByName();
    exports2.signalsByName = signalsByName;
    var getSignalsByNumber = function() {
      const signals = (0, _signals.getSignals)();
      const length = _realtime.SIGRTMAX + 1;
      const signalsA = Array.from({ length }, (value, number) => getSignalByNumber(number, signals));
      return Object.assign({}, ...signalsA);
    };
    var getSignalByNumber = function(number, signals) {
      const signal = findSignalByNumber(number, signals);
      if (signal === void 0) {
        return {};
      }
      const { name, description, supported, action, forced, standard } = signal;
      return {
        [number]: {
          name,
          number,
          description,
          supported,
          action,
          forced,
          standard
        }
      };
    };
    var findSignalByNumber = function(number, signals) {
      const signal = signals.find(({ name }) => _os.constants.signals[name] === number);
      if (signal !== void 0) {
        return signal;
      }
      return signals.find((signalA) => signalA.number === number);
    };
    var signalsByNumber = getSignalsByNumber();
    exports2.signalsByNumber = signalsByNumber;
  }
});

// ../../node_modules/.pnpm/execa@5.1.1/node_modules/execa/lib/error.js
var require_error = __commonJS({
  "../../node_modules/.pnpm/execa@5.1.1/node_modules/execa/lib/error.js"(exports2, module2) {
    "use strict";
    var { signalsByName } = require_main();
    var getErrorPrefix = ({ timedOut, timeout, errorCode, signal, signalDescription, exitCode, isCanceled }) => {
      if (timedOut) {
        return `timed out after ${timeout} milliseconds`;
      }
      if (isCanceled) {
        return "was canceled";
      }
      if (errorCode !== void 0) {
        return `failed with ${errorCode}`;
      }
      if (signal !== void 0) {
        return `was killed with ${signal} (${signalDescription})`;
      }
      if (exitCode !== void 0) {
        return `failed with exit code ${exitCode}`;
      }
      return "failed";
    };
    var makeError = ({
      stdout,
      stderr,
      all,
      error,
      signal,
      exitCode,
      command,
      escapedCommand,
      timedOut,
      isCanceled,
      killed,
      parsed: { options: { timeout } }
    }) => {
      exitCode = exitCode === null ? void 0 : exitCode;
      signal = signal === null ? void 0 : signal;
      const signalDescription = signal === void 0 ? void 0 : signalsByName[signal].description;
      const errorCode = error && error.code;
      const prefix = getErrorPrefix({ timedOut, timeout, errorCode, signal, signalDescription, exitCode, isCanceled });
      const execaMessage = `Command ${prefix}: ${command}`;
      const isError = Object.prototype.toString.call(error) === "[object Error]";
      const shortMessage = isError ? `${execaMessage}
${error.message}` : execaMessage;
      const message = [shortMessage, stderr, stdout].filter(Boolean).join("\n");
      if (isError) {
        error.originalMessage = error.message;
        error.message = message;
      } else {
        error = new Error(message);
      }
      error.shortMessage = shortMessage;
      error.command = command;
      error.escapedCommand = escapedCommand;
      error.exitCode = exitCode;
      error.signal = signal;
      error.signalDescription = signalDescription;
      error.stdout = stdout;
      error.stderr = stderr;
      if (all !== void 0) {
        error.all = all;
      }
      if ("bufferedData" in error) {
        delete error.bufferedData;
      }
      error.failed = true;
      error.timedOut = Boolean(timedOut);
      error.isCanceled = isCanceled;
      error.killed = killed && !timedOut;
      return error;
    };
    module2.exports = makeError;
  }
});

// ../../node_modules/.pnpm/execa@5.1.1/node_modules/execa/lib/stdio.js
var require_stdio = __commonJS({
  "../../node_modules/.pnpm/execa@5.1.1/node_modules/execa/lib/stdio.js"(exports2, module2) {
    "use strict";
    var aliases = ["stdin", "stdout", "stderr"];
    var hasAlias = (options) => aliases.some((alias) => options[alias] !== void 0);
    var normalizeStdio = (options) => {
      if (!options) {
        return;
      }
      const { stdio } = options;
      if (stdio === void 0) {
        return aliases.map((alias) => options[alias]);
      }
      if (hasAlias(options)) {
        throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${aliases.map((alias) => `\`${alias}\``).join(", ")}`);
      }
      if (typeof stdio === "string") {
        return stdio;
      }
      if (!Array.isArray(stdio)) {
        throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof stdio}\``);
      }
      const length = Math.max(stdio.length, aliases.length);
      return Array.from({ length }, (value, index) => stdio[index]);
    };
    module2.exports = normalizeStdio;
    module2.exports.node = (options) => {
      const stdio = normalizeStdio(options);
      if (stdio === "ipc") {
        return "ipc";
      }
      if (stdio === void 0 || typeof stdio === "string") {
        return [stdio, stdio, stdio, "ipc"];
      }
      if (stdio.includes("ipc")) {
        return stdio;
      }
      return [...stdio, "ipc"];
    };
  }
});

// ../../node_modules/.pnpm/signal-exit@3.0.7/node_modules/signal-exit/signals.js
var require_signals2 = __commonJS({
  "../../node_modules/.pnpm/signal-exit@3.0.7/node_modules/signal-exit/signals.js"(exports2, module2) {
    "use strict";
    module2.exports = [
      "SIGABRT",
      "SIGALRM",
      "SIGHUP",
      "SIGINT",
      "SIGTERM"
    ];
    if (process.platform !== "win32") {
      module2.exports.push(
        "SIGVTALRM",
        "SIGXCPU",
        "SIGXFSZ",
        "SIGUSR2",
        "SIGTRAP",
        "SIGSYS",
        "SIGQUIT",
        "SIGIOT"
        // should detect profiler and enable/disable accordingly.
        // see #21
        // 'SIGPROF'
      );
    }
    if (process.platform === "linux") {
      module2.exports.push(
        "SIGIO",
        "SIGPOLL",
        "SIGPWR",
        "SIGSTKFLT",
        "SIGUNUSED"
      );
    }
  }
});

// ../../node_modules/.pnpm/signal-exit@3.0.7/node_modules/signal-exit/index.js
var require_signal_exit = __commonJS({
  "../../node_modules/.pnpm/signal-exit@3.0.7/node_modules/signal-exit/index.js"(exports2, module2) {
    "use strict";
    var process2 = global.process;
    var processOk = function(process3) {
      return process3 && typeof process3 === "object" && typeof process3.removeListener === "function" && typeof process3.emit === "function" && typeof process3.reallyExit === "function" && typeof process3.listeners === "function" && typeof process3.kill === "function" && typeof process3.pid === "number" && typeof process3.on === "function";
    };
    if (!processOk(process2)) {
      module2.exports = function() {
        return function() {
        };
      };
    } else {
      assert = require("assert");
      signals = require_signals2();
      isWin = /^win/i.test(process2.platform);
      EE = require("events");
      if (typeof EE !== "function") {
        EE = EE.EventEmitter;
      }
      if (process2.__signal_exit_emitter__) {
        emitter = process2.__signal_exit_emitter__;
      } else {
        emitter = process2.__signal_exit_emitter__ = new EE();
        emitter.count = 0;
        emitter.emitted = {};
      }
      if (!emitter.infinite) {
        emitter.setMaxListeners(Infinity);
        emitter.infinite = true;
      }
      module2.exports = function(cb, opts) {
        if (!processOk(global.process)) {
          return function() {
          };
        }
        assert.equal(typeof cb, "function", "a callback must be provided for exit handler");
        if (loaded === false) {
          load();
        }
        var ev = "exit";
        if (opts && opts.alwaysLast) {
          ev = "afterexit";
        }
        var remove = function() {
          emitter.removeListener(ev, cb);
          if (emitter.listeners("exit").length === 0 && emitter.listeners("afterexit").length === 0) {
            unload();
          }
        };
        emitter.on(ev, cb);
        return remove;
      };
      unload = function unload2() {
        if (!loaded || !processOk(global.process)) {
          return;
        }
        loaded = false;
        signals.forEach(function(sig) {
          try {
            process2.removeListener(sig, sigListeners[sig]);
          } catch (er) {
          }
        });
        process2.emit = originalProcessEmit;
        process2.reallyExit = originalProcessReallyExit;
        emitter.count -= 1;
      };
      module2.exports.unload = unload;
      emit = function emit2(event, code, signal) {
        if (emitter.emitted[event]) {
          return;
        }
        emitter.emitted[event] = true;
        emitter.emit(event, code, signal);
      };
      sigListeners = {};
      signals.forEach(function(sig) {
        sigListeners[sig] = function listener() {
          if (!processOk(global.process)) {
            return;
          }
          var listeners = process2.listeners(sig);
          if (listeners.length === emitter.count) {
            unload();
            emit("exit", null, sig);
            emit("afterexit", null, sig);
            if (isWin && sig === "SIGHUP") {
              sig = "SIGINT";
            }
            process2.kill(process2.pid, sig);
          }
        };
      });
      module2.exports.signals = function() {
        return signals;
      };
      loaded = false;
      load = function load2() {
        if (loaded || !processOk(global.process)) {
          return;
        }
        loaded = true;
        emitter.count += 1;
        signals = signals.filter(function(sig) {
          try {
            process2.on(sig, sigListeners[sig]);
            return true;
          } catch (er) {
            return false;
          }
        });
        process2.emit = processEmit;
        process2.reallyExit = processReallyExit;
      };
      module2.exports.load = load;
      originalProcessReallyExit = process2.reallyExit;
      processReallyExit = function processReallyExit2(code) {
        if (!processOk(global.process)) {
          return;
        }
        process2.exitCode = code || /* istanbul ignore next */
        0;
        emit("exit", process2.exitCode, null);
        emit("afterexit", process2.exitCode, null);
        originalProcessReallyExit.call(process2, process2.exitCode);
      };
      originalProcessEmit = process2.emit;
      processEmit = function processEmit2(ev, arg) {
        if (ev === "exit" && processOk(global.process)) {
          if (arg !== void 0) {
            process2.exitCode = arg;
          }
          var ret = originalProcessEmit.apply(this, arguments);
          emit("exit", process2.exitCode, null);
          emit("afterexit", process2.exitCode, null);
          return ret;
        } else {
          return originalProcessEmit.apply(this, arguments);
        }
      };
    }
    var assert;
    var signals;
    var isWin;
    var EE;
    var emitter;
    var unload;
    var emit;
    var sigListeners;
    var loaded;
    var load;
    var originalProcessReallyExit;
    var processReallyExit;
    var originalProcessEmit;
    var processEmit;
  }
});

// ../../node_modules/.pnpm/execa@5.1.1/node_modules/execa/lib/kill.js
var require_kill = __commonJS({
  "../../node_modules/.pnpm/execa@5.1.1/node_modules/execa/lib/kill.js"(exports2, module2) {
    "use strict";
    var os = require("os");
    var onExit = require_signal_exit();
    var DEFAULT_FORCE_KILL_TIMEOUT = 1e3 * 5;
    var spawnedKill = (kill, signal = "SIGTERM", options = {}) => {
      const killResult = kill(signal);
      setKillTimeout(kill, signal, options, killResult);
      return killResult;
    };
    var setKillTimeout = (kill, signal, options, killResult) => {
      if (!shouldForceKill(signal, options, killResult)) {
        return;
      }
      const timeout = getForceKillAfterTimeout(options);
      const t = setTimeout(() => {
        kill("SIGKILL");
      }, timeout);
      if (t.unref) {
        t.unref();
      }
    };
    var shouldForceKill = (signal, { forceKillAfterTimeout }, killResult) => {
      return isSigterm(signal) && forceKillAfterTimeout !== false && killResult;
    };
    var isSigterm = (signal) => {
      return signal === os.constants.signals.SIGTERM || typeof signal === "string" && signal.toUpperCase() === "SIGTERM";
    };
    var getForceKillAfterTimeout = ({ forceKillAfterTimeout = true }) => {
      if (forceKillAfterTimeout === true) {
        return DEFAULT_FORCE_KILL_TIMEOUT;
      }
      if (!Number.isFinite(forceKillAfterTimeout) || forceKillAfterTimeout < 0) {
        throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${forceKillAfterTimeout}\` (${typeof forceKillAfterTimeout})`);
      }
      return forceKillAfterTimeout;
    };
    var spawnedCancel = (spawned, context) => {
      const killResult = spawned.kill();
      if (killResult) {
        context.isCanceled = true;
      }
    };
    var timeoutKill = (spawned, signal, reject) => {
      spawned.kill(signal);
      reject(Object.assign(new Error("Timed out"), { timedOut: true, signal }));
    };
    var setupTimeout = (spawned, { timeout, killSignal = "SIGTERM" }, spawnedPromise) => {
      if (timeout === 0 || timeout === void 0) {
        return spawnedPromise;
      }
      let timeoutId;
      const timeoutPromise = new Promise((resolve, reject) => {
        timeoutId = setTimeout(() => {
          timeoutKill(spawned, killSignal, reject);
        }, timeout);
      });
      const safeSpawnedPromise = spawnedPromise.finally(() => {
        clearTimeout(timeoutId);
      });
      return Promise.race([timeoutPromise, safeSpawnedPromise]);
    };
    var validateTimeout = ({ timeout }) => {
      if (timeout !== void 0 && (!Number.isFinite(timeout) || timeout < 0)) {
        throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${timeout}\` (${typeof timeout})`);
      }
    };
    var setExitHandler = async (spawned, { cleanup, detached }, timedPromise) => {
      if (!cleanup || detached) {
        return timedPromise;
      }
      const removeExitHandler = onExit(() => {
        spawned.kill();
      });
      return timedPromise.finally(() => {
        removeExitHandler();
      });
    };
    module2.exports = {
      spawnedKill,
      spawnedCancel,
      setupTimeout,
      validateTimeout,
      setExitHandler
    };
  }
});

// ../../node_modules/.pnpm/is-stream@2.0.1/node_modules/is-stream/index.js
var require_is_stream = __commonJS({
  "../../node_modules/.pnpm/is-stream@2.0.1/node_modules/is-stream/index.js"(exports2, module2) {
    "use strict";
    var isStream = (stream) => stream !== null && typeof stream === "object" && typeof stream.pipe === "function";
    isStream.writable = (stream) => isStream(stream) && stream.writable !== false && typeof stream._write === "function" && typeof stream._writableState === "object";
    isStream.readable = (stream) => isStream(stream) && stream.readable !== false && typeof stream._read === "function" && typeof stream._readableState === "object";
    isStream.duplex = (stream) => isStream.writable(stream) && isStream.readable(stream);
    isStream.transform = (stream) => isStream.duplex(stream) && typeof stream._transform === "function";
    module2.exports = isStream;
  }
});

// ../../node_modules/.pnpm/get-stream@6.0.1/node_modules/get-stream/buffer-stream.js
var require_buffer_stream = __commonJS({
  "../../node_modules/.pnpm/get-stream@6.0.1/node_modules/get-stream/buffer-stream.js"(exports2, module2) {
    "use strict";
    var { PassThrough: PassThroughStream } = require("stream");
    module2.exports = (options) => {
      options = { ...options };
      const { array } = options;
      let { encoding } = options;
      const isBuffer = encoding === "buffer";
      let objectMode = false;
      if (array) {
        objectMode = !(encoding || isBuffer);
      } else {
        encoding = encoding || "utf8";
      }
      if (isBuffer) {
        encoding = null;
      }
      const stream = new PassThroughStream({ objectMode });
      if (encoding) {
        stream.setEncoding(encoding);
      }
      let length = 0;
      const chunks = [];
      stream.on("data", (chunk) => {
        chunks.push(chunk);
        if (objectMode) {
          length = chunks.length;
        } else {
          length += chunk.length;
        }
      });
      stream.getBufferedValue = () => {
        if (array) {
          return chunks;
        }
        return isBuffer ? Buffer.concat(chunks, length) : chunks.join("");
      };
      stream.getBufferedLength = () => length;
      return stream;
    };
  }
});

// ../../node_modules/.pnpm/get-stream@6.0.1/node_modules/get-stream/index.js
var require_get_stream = __commonJS({
  "../../node_modules/.pnpm/get-stream@6.0.1/node_modules/get-stream/index.js"(exports2, module2) {
    "use strict";
    var { constants: BufferConstants } = require("buffer");
    var stream = require("stream");
    var { promisify } = require("util");
    var bufferStream = require_buffer_stream();
    var streamPipelinePromisified = promisify(stream.pipeline);
    var MaxBufferError = class extends Error {
      constructor() {
        super("maxBuffer exceeded");
        this.name = "MaxBufferError";
      }
    };
    async function getStream(inputStream, options) {
      if (!inputStream) {
        throw new Error("Expected a stream");
      }
      options = {
        maxBuffer: Infinity,
        ...options
      };
      const { maxBuffer } = options;
      const stream2 = bufferStream(options);
      await new Promise((resolve, reject) => {
        const rejectPromise = (error) => {
          if (error && stream2.getBufferedLength() <= BufferConstants.MAX_LENGTH) {
            error.bufferedData = stream2.getBufferedValue();
          }
          reject(error);
        };
        (async () => {
          try {
            await streamPipelinePromisified(inputStream, stream2);
            resolve();
          } catch (error) {
            rejectPromise(error);
          }
        })();
        stream2.on("data", () => {
          if (stream2.getBufferedLength() > maxBuffer) {
            rejectPromise(new MaxBufferError());
          }
        });
      });
      return stream2.getBufferedValue();
    }
    module2.exports = getStream;
    module2.exports.buffer = (stream2, options) => getStream(stream2, { ...options, encoding: "buffer" });
    module2.exports.array = (stream2, options) => getStream(stream2, { ...options, array: true });
    module2.exports.MaxBufferError = MaxBufferError;
  }
});

// ../../node_modules/.pnpm/merge-stream@2.0.0/node_modules/merge-stream/index.js
var require_merge_stream = __commonJS({
  "../../node_modules/.pnpm/merge-stream@2.0.0/node_modules/merge-stream/index.js"(exports2, module2) {
    "use strict";
    var { PassThrough } = require("stream");
    module2.exports = function() {
      var sources = [];
      var output = new PassThrough({ objectMode: true });
      output.setMaxListeners(0);
      output.add = add;
      output.isEmpty = isEmpty;
      output.on("unpipe", remove);
      Array.prototype.slice.call(arguments).forEach(add);
      return output;
      function add(source) {
        if (Array.isArray(source)) {
          source.forEach(add);
          return this;
        }
        sources.push(source);
        source.once("end", remove.bind(null, source));
        source.once("error", output.emit.bind(output, "error"));
        source.pipe(output, { end: false });
        return this;
      }
      function isEmpty() {
        return sources.length == 0;
      }
      function remove(source) {
        sources = sources.filter(function(it) {
          return it !== source;
        });
        if (!sources.length && output.readable) {
          output.end();
        }
      }
    };
  }
});

// ../../node_modules/.pnpm/execa@5.1.1/node_modules/execa/lib/stream.js
var require_stream = __commonJS({
  "../../node_modules/.pnpm/execa@5.1.1/node_modules/execa/lib/stream.js"(exports2, module2) {
    "use strict";
    var isStream = require_is_stream();
    var getStream = require_get_stream();
    var mergeStream = require_merge_stream();
    var handleInput = (spawned, input) => {
      if (input === void 0 || spawned.stdin === void 0) {
        return;
      }
      if (isStream(input)) {
        input.pipe(spawned.stdin);
      } else {
        spawned.stdin.end(input);
      }
    };
    var makeAllStream = (spawned, { all }) => {
      if (!all || !spawned.stdout && !spawned.stderr) {
        return;
      }
      const mixed = mergeStream();
      if (spawned.stdout) {
        mixed.add(spawned.stdout);
      }
      if (spawned.stderr) {
        mixed.add(spawned.stderr);
      }
      return mixed;
    };
    var getBufferedData = async (stream, streamPromise) => {
      if (!stream) {
        return;
      }
      stream.destroy();
      try {
        return await streamPromise;
      } catch (error) {
        return error.bufferedData;
      }
    };
    var getStreamPromise = (stream, { encoding, buffer, maxBuffer }) => {
      if (!stream || !buffer) {
        return;
      }
      if (encoding) {
        return getStream(stream, { encoding, maxBuffer });
      }
      return getStream.buffer(stream, { maxBuffer });
    };
    var getSpawnedResult = async ({ stdout, stderr, all }, { encoding, buffer, maxBuffer }, processDone) => {
      const stdoutPromise = getStreamPromise(stdout, { encoding, buffer, maxBuffer });
      const stderrPromise = getStreamPromise(stderr, { encoding, buffer, maxBuffer });
      const allPromise = getStreamPromise(all, { encoding, buffer, maxBuffer: maxBuffer * 2 });
      try {
        return await Promise.all([processDone, stdoutPromise, stderrPromise, allPromise]);
      } catch (error) {
        return Promise.all([
          { error, signal: error.signal, timedOut: error.timedOut },
          getBufferedData(stdout, stdoutPromise),
          getBufferedData(stderr, stderrPromise),
          getBufferedData(all, allPromise)
        ]);
      }
    };
    var validateInputSync = ({ input }) => {
      if (isStream(input)) {
        throw new TypeError("The `input` option cannot be a stream in sync mode");
      }
    };
    module2.exports = {
      handleInput,
      makeAllStream,
      getSpawnedResult,
      validateInputSync
    };
  }
});

// ../../node_modules/.pnpm/execa@5.1.1/node_modules/execa/lib/promise.js
var require_promise = __commonJS({
  "../../node_modules/.pnpm/execa@5.1.1/node_modules/execa/lib/promise.js"(exports2, module2) {
    "use strict";
    var nativePromisePrototype = (async () => {
    })().constructor.prototype;
    var descriptors = ["then", "catch", "finally"].map((property) => [
      property,
      Reflect.getOwnPropertyDescriptor(nativePromisePrototype, property)
    ]);
    var mergePromise = (spawned, promise) => {
      for (const [property, descriptor] of descriptors) {
        const value = typeof promise === "function" ? (...args) => Reflect.apply(descriptor.value, promise(), args) : descriptor.value.bind(promise);
        Reflect.defineProperty(spawned, property, { ...descriptor, value });
      }
      return spawned;
    };
    var getSpawnedPromise = (spawned) => {
      return new Promise((resolve, reject) => {
        spawned.on("exit", (exitCode, signal) => {
          resolve({ exitCode, signal });
        });
        spawned.on("error", (error) => {
          reject(error);
        });
        if (spawned.stdin) {
          spawned.stdin.on("error", (error) => {
            reject(error);
          });
        }
      });
    };
    module2.exports = {
      mergePromise,
      getSpawnedPromise
    };
  }
});

// ../../node_modules/.pnpm/execa@5.1.1/node_modules/execa/lib/command.js
var require_command = __commonJS({
  "../../node_modules/.pnpm/execa@5.1.1/node_modules/execa/lib/command.js"(exports2, module2) {
    "use strict";
    var normalizeArgs = (file, args = []) => {
      if (!Array.isArray(args)) {
        return [file];
      }
      return [file, ...args];
    };
    var NO_ESCAPE_REGEXP = /^[\w.-]+$/;
    var DOUBLE_QUOTES_REGEXP = /"/g;
    var escapeArg = (arg) => {
      if (typeof arg !== "string" || NO_ESCAPE_REGEXP.test(arg)) {
        return arg;
      }
      return `"${arg.replace(DOUBLE_QUOTES_REGEXP, '\\"')}"`;
    };
    var joinCommand = (file, args) => {
      return normalizeArgs(file, args).join(" ");
    };
    var getEscapedCommand = (file, args) => {
      return normalizeArgs(file, args).map((arg) => escapeArg(arg)).join(" ");
    };
    var SPACES_REGEXP = / +/g;
    var parseCommand = (command) => {
      const tokens = [];
      for (const token of command.trim().split(SPACES_REGEXP)) {
        const previousToken = tokens[tokens.length - 1];
        if (previousToken && previousToken.endsWith("\\")) {
          tokens[tokens.length - 1] = `${previousToken.slice(0, -1)} ${token}`;
        } else {
          tokens.push(token);
        }
      }
      return tokens;
    };
    module2.exports = {
      joinCommand,
      getEscapedCommand,
      parseCommand
    };
  }
});

// ../../node_modules/.pnpm/execa@5.1.1/node_modules/execa/index.js
var require_execa = __commonJS({
  "../../node_modules/.pnpm/execa@5.1.1/node_modules/execa/index.js"(exports2, module2) {
    "use strict";
    var path2 = require("path");
    var childProcess = require("child_process");
    var crossSpawn = require_cross_spawn();
    var stripFinalNewline = require_strip_final_newline();
    var npmRunPath = require_npm_run_path();
    var onetime = require_onetime();
    var makeError = require_error();
    var normalizeStdio = require_stdio();
    var { spawnedKill, spawnedCancel, setupTimeout, validateTimeout, setExitHandler } = require_kill();
    var { handleInput, getSpawnedResult, makeAllStream, validateInputSync } = require_stream();
    var { mergePromise, getSpawnedPromise } = require_promise();
    var { joinCommand, parseCommand, getEscapedCommand } = require_command();
    var DEFAULT_MAX_BUFFER = 1e3 * 1e3 * 100;
    var getEnv = ({ env: envOption, extendEnv, preferLocal, localDir, execPath }) => {
      const env = extendEnv ? { ...process.env, ...envOption } : envOption;
      if (preferLocal) {
        return npmRunPath.env({ env, cwd: localDir, execPath });
      }
      return env;
    };
    var handleArguments = (file, args, options = {}) => {
      const parsed = crossSpawn._parse(file, args, options);
      file = parsed.command;
      args = parsed.args;
      options = parsed.options;
      options = {
        maxBuffer: DEFAULT_MAX_BUFFER,
        buffer: true,
        stripFinalNewline: true,
        extendEnv: true,
        preferLocal: false,
        localDir: options.cwd || process.cwd(),
        execPath: process.execPath,
        encoding: "utf8",
        reject: true,
        cleanup: true,
        all: false,
        windowsHide: true,
        ...options
      };
      options.env = getEnv(options);
      options.stdio = normalizeStdio(options);
      if (process.platform === "win32" && path2.basename(file, ".exe") === "cmd") {
        args.unshift("/q");
      }
      return { file, args, options, parsed };
    };
    var handleOutput = (options, value, error) => {
      if (typeof value !== "string" && !Buffer.isBuffer(value)) {
        return error === void 0 ? void 0 : "";
      }
      if (options.stripFinalNewline) {
        return stripFinalNewline(value);
      }
      return value;
    };
    var execa2 = (file, args, options) => {
      const parsed = handleArguments(file, args, options);
      const command = joinCommand(file, args);
      const escapedCommand = getEscapedCommand(file, args);
      validateTimeout(parsed.options);
      let spawned;
      try {
        spawned = childProcess.spawn(parsed.file, parsed.args, parsed.options);
      } catch (error) {
        const dummySpawned = new childProcess.ChildProcess();
        const errorPromise = Promise.reject(makeError({
          error,
          stdout: "",
          stderr: "",
          all: "",
          command,
          escapedCommand,
          parsed,
          timedOut: false,
          isCanceled: false,
          killed: false
        }));
        return mergePromise(dummySpawned, errorPromise);
      }
      const spawnedPromise = getSpawnedPromise(spawned);
      const timedPromise = setupTimeout(spawned, parsed.options, spawnedPromise);
      const processDone = setExitHandler(spawned, parsed.options, timedPromise);
      const context = { isCanceled: false };
      spawned.kill = spawnedKill.bind(null, spawned.kill.bind(spawned));
      spawned.cancel = spawnedCancel.bind(null, spawned, context);
      const handlePromise = async () => {
        const [{ error, exitCode, signal, timedOut }, stdoutResult, stderrResult, allResult] = await getSpawnedResult(spawned, parsed.options, processDone);
        const stdout = handleOutput(parsed.options, stdoutResult);
        const stderr = handleOutput(parsed.options, stderrResult);
        const all = handleOutput(parsed.options, allResult);
        if (error || exitCode !== 0 || signal !== null) {
          const returnedError = makeError({
            error,
            exitCode,
            signal,
            stdout,
            stderr,
            all,
            command,
            escapedCommand,
            parsed,
            timedOut,
            isCanceled: context.isCanceled,
            killed: spawned.killed
          });
          if (!parsed.options.reject) {
            return returnedError;
          }
          throw returnedError;
        }
        return {
          command,
          escapedCommand,
          exitCode: 0,
          stdout,
          stderr,
          all,
          failed: false,
          timedOut: false,
          isCanceled: false,
          killed: false
        };
      };
      const handlePromiseOnce = onetime(handlePromise);
      handleInput(spawned, parsed.options.input);
      spawned.all = makeAllStream(spawned, parsed.options);
      return mergePromise(spawned, handlePromiseOnce);
    };
    module2.exports = execa2;
    module2.exports.sync = (file, args, options) => {
      const parsed = handleArguments(file, args, options);
      const command = joinCommand(file, args);
      const escapedCommand = getEscapedCommand(file, args);
      validateInputSync(parsed.options);
      let result;
      try {
        result = childProcess.spawnSync(parsed.file, parsed.args, parsed.options);
      } catch (error) {
        throw makeError({
          error,
          stdout: "",
          stderr: "",
          all: "",
          command,
          escapedCommand,
          parsed,
          timedOut: false,
          isCanceled: false,
          killed: false
        });
      }
      const stdout = handleOutput(parsed.options, result.stdout, result.error);
      const stderr = handleOutput(parsed.options, result.stderr, result.error);
      if (result.error || result.status !== 0 || result.signal !== null) {
        const error = makeError({
          stdout,
          stderr,
          error: result.error,
          signal: result.signal,
          exitCode: result.status,
          command,
          escapedCommand,
          parsed,
          timedOut: result.error && result.error.code === "ETIMEDOUT",
          isCanceled: false,
          killed: result.signal !== null
        });
        if (!parsed.options.reject) {
          return error;
        }
        throw error;
      }
      return {
        command,
        escapedCommand,
        exitCode: 0,
        stdout,
        stderr,
        failed: false,
        timedOut: false,
        isCanceled: false,
        killed: false
      };
    };
    module2.exports.command = (command, options) => {
      const [file, ...args] = parseCommand(command);
      return execa2(file, args, options);
    };
    module2.exports.commandSync = (command, options) => {
      const [file, ...args] = parseCommand(command);
      return execa2.sync(file, args, options);
    };
    module2.exports.node = (scriptPath, args, options = {}) => {
      if (args && !Array.isArray(args) && typeof args === "object") {
        options = args;
        args = [];
      }
      const stdio = normalizeStdio.node(options);
      const defaultExecArgv = process.execArgv.filter((arg) => !arg.startsWith("--inspect"));
      const {
        nodePath = process.execPath,
        nodeOptions = defaultExecArgv
      } = options;
      return execa2(
        nodePath,
        [
          ...nodeOptions,
          scriptPath,
          ...Array.isArray(args) ? args : []
        ],
        {
          ...options,
          stdin: void 0,
          stdout: void 0,
          stderr: void 0,
          stdio,
          shell: false
        }
      );
    };
  }
});

// src/scripts/localinstall.ts
var import_fetch_engine = require("@prisma/fetch-engine");
var import_package = require("@prisma/fetch-engine/package.json");
var import_get_platform = require("@prisma/get-platform");
var import_execa = __toESM(require_execa());
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));
var baseDir = import_path.default.join(__dirname, "..", "..");
async function main() {
  const binaryTarget = await (0, import_get_platform.getBinaryTargetForCurrentPlatform)();
  const cacheDir = await (0, import_fetch_engine.getCacheDir)("master", "_local_", binaryTarget);
  const branch = import_package.enginesOverride?.["branch"];
  let folder = import_package.enginesOverride?.["folder"];
  const engineCachePaths = {
    [import_fetch_engine.BinaryType.QueryEngineBinary]: import_path.default.join(cacheDir, import_fetch_engine.BinaryType.QueryEngineBinary),
    [import_fetch_engine.BinaryType.QueryEngineLibrary]: import_path.default.join(cacheDir, import_fetch_engine.BinaryType.QueryEngineLibrary),
    [import_fetch_engine.BinaryType.SchemaEngineBinary]: import_path.default.join(cacheDir, import_fetch_engine.BinaryType.SchemaEngineBinary)
  };
  if (branch !== void 0) {
    const enginesRepoUri = "git@github.com:prisma/prisma-engines.git";
    const enginesRepoDir = import_path.default.join(baseDir, "dist", "prisma-engines");
    const currentBranch = await (0, import_execa.default)("git", ["branch", "--show-current"], {
      cwd: enginesRepoDir
    }).catch(() => ({ failed: true, stdout: "" }));
    if (currentBranch.failed === true || currentBranch.stdout !== branch) {
      await import_fs.default.promises.rm(enginesRepoDir, { recursive: true, force: true });
      await (0, import_execa.default)("git", ["clone", enginesRepoUri, "--depth", "1", "--branch", branch], {
        cwd: import_path.default.join(baseDir, "dist"),
        stdio: "inherit"
      });
    }
    await (0, import_execa.default)("git", ["pull", "origin", branch], {
      cwd: enginesRepoDir,
      stdio: "inherit"
    });
    await (0, import_execa.default)("cargo", ["build", "--release"], {
      cwd: enginesRepoDir,
      stdio: "inherit"
    });
    folder = import_path.default.join(enginesRepoDir, "target", "release");
  }
  if (folder !== void 0) {
    folder = import_path.default.isAbsolute(folder) ? folder : import_path.default.join(baseDir, folder);
    const libExt = binaryTarget.includes("windows") ? ".dll" : binaryTarget.includes("darwin") ? ".dylib" : ".so";
    const binExt = binaryTarget.includes("windows") ? ".exe" : "";
    const engineOutputPaths = {
      [import_fetch_engine.BinaryType.QueryEngineLibrary]: import_path.default.join(folder, "libquery_engine".concat(libExt)),
      [import_fetch_engine.BinaryType.QueryEngineBinary]: import_path.default.join(folder, import_fetch_engine.BinaryType.QueryEngineBinary.concat(binExt)),
      [import_fetch_engine.BinaryType.SchemaEngineBinary]: import_path.default.join(folder, import_fetch_engine.BinaryType.SchemaEngineBinary.concat(binExt))
    };
    for (const [binaryType, outputPath] of Object.entries(engineOutputPaths)) {
      await import_fs.default.promises.copyFile(outputPath, engineCachePaths[binaryType]);
    }
  }
}
main().catch((e) => {
  console.log(e.message);
  process.exit(1);
});
