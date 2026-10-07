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
var chunk_3UEKS5W6_exports = {};
__export(chunk_3UEKS5W6_exports, {
  execaNode: () => execaNode,
  require_main: () => require_main,
  require_tempy: () => require_tempy
});
module.exports = __toCommonJS(chunk_3UEKS5W6_exports);
var import_chunk_2ESYSVXG = require("./chunk-2ESYSVXG.js");
var import_node_buffer = require("node:buffer");
var import_node_path = __toESM(require("node:path"));
var import_node_child_process = __toESM(require("node:child_process"));
var import_node_process = __toESM(require("node:process"));
var import_node_process2 = __toESM(require("node:process"));
var import_node_path2 = __toESM(require("node:path"));
var import_node_url = require("node:url");
var import_node_process3 = __toESM(require("node:process"));
var import_node_os = require("node:os");
var import_node_os2 = require("node:os");
var import_node_os3 = __toESM(require("node:os"));
var import_node_fs = require("node:fs");
var import_node_child_process2 = require("node:child_process");
var import_node_fs2 = require("node:fs");
var import_promises = require("node:timers/promises");
var import_node_buffer2 = require("node:buffer");
var import_node_child_process3 = require("node:child_process");
var import_node_util = require("node:util");
var import_node_process4 = __toESM(require("node:process"));
var require_windows = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/isexe@2.0.0/node_modules/isexe/windows.js"(exports, module2) {
    "use strict";
    module2.exports = isexe;
    isexe.sync = sync;
    var fs = (0, import_chunk_2ESYSVXG.__require)("fs");
    function checkPathExt(path3, options) {
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
        if (p && path3.substr(-p.length).toLowerCase() === p) {
          return true;
        }
      }
      return false;
    }
    function checkStat(stat, path3, options) {
      if (!stat.isSymbolicLink() && !stat.isFile()) {
        return false;
      }
      return checkPathExt(path3, options);
    }
    function isexe(path3, options, cb) {
      fs.stat(path3, function(er, stat) {
        cb(er, er ? false : checkStat(stat, path3, options));
      });
    }
    function sync(path3, options) {
      return checkStat(fs.statSync(path3), path3, options);
    }
  }
});
var require_mode = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/isexe@2.0.0/node_modules/isexe/mode.js"(exports, module2) {
    "use strict";
    module2.exports = isexe;
    isexe.sync = sync;
    var fs = (0, import_chunk_2ESYSVXG.__require)("fs");
    function isexe(path3, options, cb) {
      fs.stat(path3, function(er, stat) {
        cb(er, er ? false : checkStat(stat, options));
      });
    }
    function sync(path3, options) {
      return checkStat(fs.statSync(path3), options);
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
var require_isexe = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/isexe@2.0.0/node_modules/isexe/index.js"(exports, module2) {
    "use strict";
    var fs = (0, import_chunk_2ESYSVXG.__require)("fs");
    var core;
    if (process.platform === "win32" || global.TESTING_WINDOWS) {
      core = require_windows();
    } else {
      core = require_mode();
    }
    module2.exports = isexe;
    isexe.sync = sync;
    function isexe(path3, options, cb) {
      if (typeof options === "function") {
        cb = options;
        options = {};
      }
      if (!cb) {
        if (typeof Promise !== "function") {
          throw new TypeError("callback not provided");
        }
        return new Promise(function(resolve, reject) {
          isexe(path3, options || {}, function(er, is) {
            if (er) {
              reject(er);
            } else {
              resolve(is);
            }
          });
        });
      }
      core(path3, options || {}, function(er, is) {
        if (er) {
          if (er.code === "EACCES" || options && options.ignoreErrors) {
            er = null;
            is = false;
          }
        }
        cb(er, is);
      });
    }
    function sync(path3, options) {
      try {
        return core.sync(path3, options || {});
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
var require_which = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/which@2.0.2/node_modules/which/which.js"(exports, module2) {
    "use strict";
    var isWindows = process.platform === "win32" || process.env.OSTYPE === "cygwin" || process.env.OSTYPE === "msys";
    var path3 = (0, import_chunk_2ESYSVXG.__require)("path");
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
        const pCmd = path3.join(pathPart, cmd);
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
        const pCmd = path3.join(pathPart, cmd);
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
var require_path_key = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/path-key@3.1.1/node_modules/path-key/index.js"(exports, module2) {
    "use strict";
    var pathKey2 = (options = {}) => {
      const environment = options.env || process.env;
      const platform = options.platform || process.platform;
      if (platform !== "win32") {
        return "PATH";
      }
      return Object.keys(environment).reverse().find((key) => key.toUpperCase() === "PATH") || "Path";
    };
    module2.exports = pathKey2;
    module2.exports.default = pathKey2;
  }
});
var require_resolveCommand = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/cross-spawn@7.0.6/node_modules/cross-spawn/lib/util/resolveCommand.js"(exports, module2) {
    "use strict";
    var path3 = (0, import_chunk_2ESYSVXG.__require)("path");
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
          pathExt: withoutPathExt ? path3.delimiter : void 0
        });
      } catch (e) {
      } finally {
        if (shouldSwitchCwd) {
          process.chdir(cwd);
        }
      }
      if (resolved) {
        resolved = path3.resolve(hasCustomCwd ? parsed.options.cwd : "", resolved);
      }
      return resolved;
    }
    function resolveCommand(parsed) {
      return resolveCommandAttempt(parsed) || resolveCommandAttempt(parsed, true);
    }
    module2.exports = resolveCommand;
  }
});
var require_escape = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/cross-spawn@7.0.6/node_modules/cross-spawn/lib/util/escape.js"(exports, module2) {
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
var require_shebang_regex = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/shebang-regex@3.0.0/node_modules/shebang-regex/index.js"(exports, module2) {
    "use strict";
    module2.exports = /^#!(.*)/;
  }
});
var require_shebang_command = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/shebang-command@2.0.0/node_modules/shebang-command/index.js"(exports, module2) {
    "use strict";
    var shebangRegex = require_shebang_regex();
    module2.exports = (string = "") => {
      const match = string.match(shebangRegex);
      if (!match) {
        return null;
      }
      const [path3, argument] = match[0].replace(/#! ?/, "").split(" ");
      const binary = path3.split("/").pop();
      if (binary === "env") {
        return argument;
      }
      return argument ? `${binary} ${argument}` : binary;
    };
  }
});
var require_readShebang = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/cross-spawn@7.0.6/node_modules/cross-spawn/lib/util/readShebang.js"(exports, module2) {
    "use strict";
    var fs = (0, import_chunk_2ESYSVXG.__require)("fs");
    var shebangCommand = require_shebang_command();
    function readShebang(command) {
      const size = 150;
      const buffer = Buffer.alloc(size);
      let fd;
      try {
        fd = fs.openSync(command, "r");
        fs.readSync(fd, buffer, 0, size, 0);
        fs.closeSync(fd);
      } catch (e) {
      }
      return shebangCommand(buffer.toString());
    }
    module2.exports = readShebang;
  }
});
var require_parse = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/cross-spawn@7.0.6/node_modules/cross-spawn/lib/parse.js"(exports, module2) {
    "use strict";
    var path3 = (0, import_chunk_2ESYSVXG.__require)("path");
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
        parsed.command = path3.normalize(parsed.command);
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
var require_enoent = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/cross-spawn@7.0.6/node_modules/cross-spawn/lib/enoent.js"(exports, module2) {
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
var require_cross_spawn = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/cross-spawn@7.0.6/node_modules/cross-spawn/index.js"(exports, module2) {
    "use strict";
    var cp = (0, import_chunk_2ESYSVXG.__require)("child_process");
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
var require_merge_stream = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/merge-stream@2.0.0/node_modules/merge-stream/index.js"(exports, module2) {
    "use strict";
    var { PassThrough } = (0, import_chunk_2ESYSVXG.__require)("stream");
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
var require_promisify = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/fs-jetpack@5.1.0/node_modules/fs-jetpack/lib/utils/promisify.js"(exports, module2) {
    "use strict";
    module2.exports = (fn) => {
      return function() {
        const length = arguments.length;
        const args = new Array(length);
        for (let i = 0; i < length; i += 1) {
          args[i] = arguments[i];
        }
        return new Promise((resolve, reject) => {
          args.push((err, data) => {
            if (err) {
              reject(err);
            } else {
              resolve(data);
            }
          });
          fn.apply(null, args);
        });
      };
    };
  }
});
var require_fs = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/fs-jetpack@5.1.0/node_modules/fs-jetpack/lib/utils/fs.js"(exports, module2) {
    "use strict";
    var fs = (0, import_chunk_2ESYSVXG.__require)("fs");
    var promisify = require_promisify();
    var isCallbackMethod = (key) => {
      return [
        typeof fs[key] === "function",
        !key.match(/Sync$/),
        !key.match(/^[A-Z]/),
        !key.match(/^create/),
        !key.match(/^(un)?watch/)
      ].every(Boolean);
    };
    var adaptMethod = (name) => {
      const original = fs[name];
      return promisify(original);
    };
    var adaptAllMethods = () => {
      const adapted = {};
      Object.keys(fs).forEach((key) => {
        if (isCallbackMethod(key)) {
          if (key === "exists") {
            adapted.exists = () => {
              throw new Error("fs.exists() is deprecated");
            };
          } else {
            adapted[key] = adaptMethod(key);
          }
        } else {
          adapted[key] = fs[key];
        }
      });
      return adapted;
    };
    module2.exports = adaptAllMethods();
  }
});
var require_validate = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/fs-jetpack@5.1.0/node_modules/fs-jetpack/lib/utils/validate.js"(exports, module2) {
    "use strict";
    var prettyPrintTypes = (types) => {
      const addArticle = (str) => {
        const vowels = ["a", "e", "i", "o", "u"];
        if (vowels.indexOf(str[0]) !== -1) {
          return `an ${str}`;
        }
        return `a ${str}`;
      };
      return types.map(addArticle).join(" or ");
    };
    var isArrayOfNotation = (typeDefinition) => {
      return /array of /.test(typeDefinition);
    };
    var extractTypeFromArrayOfNotation = (typeDefinition) => {
      return typeDefinition.split(" of ")[1];
    };
    var isValidTypeDefinition = (typeStr) => {
      if (isArrayOfNotation(typeStr)) {
        return isValidTypeDefinition(extractTypeFromArrayOfNotation(typeStr));
      }
      return [
        "string",
        "number",
        "boolean",
        "array",
        "object",
        "buffer",
        "null",
        "undefined",
        "function"
      ].some((validType) => {
        return validType === typeStr;
      });
    };
    var detectType = (value) => {
      if (value === null) {
        return "null";
      }
      if (Array.isArray(value)) {
        return "array";
      }
      if (Buffer.isBuffer(value)) {
        return "buffer";
      }
      return typeof value;
    };
    var onlyUniqueValuesInArrayFilter = (value, index, self) => {
      return self.indexOf(value) === index;
    };
    var detectTypeDeep = (value) => {
      let type = detectType(value);
      let typesInArray;
      if (type === "array") {
        typesInArray = value.map((element) => {
          return detectType(element);
        }).filter(onlyUniqueValuesInArrayFilter);
        type += ` of ${typesInArray.join(", ")}`;
      }
      return type;
    };
    var validateArray = (argumentValue, typeToCheck) => {
      const allowedTypeInArray = extractTypeFromArrayOfNotation(typeToCheck);
      if (detectType(argumentValue) !== "array") {
        return false;
      }
      return argumentValue.every((element) => {
        return detectType(element) === allowedTypeInArray;
      });
    };
    var validateArgument = (methodName, argumentName, argumentValue, argumentMustBe) => {
      const isOneOfAllowedTypes = argumentMustBe.some((type) => {
        if (!isValidTypeDefinition(type)) {
          throw new Error(`Unknown type "${type}"`);
        }
        if (isArrayOfNotation(type)) {
          return validateArray(argumentValue, type);
        }
        return type === detectType(argumentValue);
      });
      if (!isOneOfAllowedTypes) {
        throw new Error(
          `Argument "${argumentName}" passed to ${methodName} must be ${prettyPrintTypes(
            argumentMustBe
          )}. Received ${detectTypeDeep(argumentValue)}`
        );
      }
    };
    var validateOptions = (methodName, optionsObjName, obj, allowedOptions) => {
      if (obj !== void 0) {
        validateArgument(methodName, optionsObjName, obj, ["object"]);
        Object.keys(obj).forEach((key) => {
          const argName = `${optionsObjName}.${key}`;
          if (allowedOptions[key] !== void 0) {
            validateArgument(methodName, argName, obj[key], allowedOptions[key]);
          } else {
            throw new Error(
              `Unknown argument "${argName}" passed to ${methodName}`
            );
          }
        });
      }
    };
    module2.exports = {
      argument: validateArgument,
      options: validateOptions
    };
  }
});
var require_mode2 = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/fs-jetpack@5.1.0/node_modules/fs-jetpack/lib/utils/mode.js"(exports) {
    "use strict";
    exports.normalizeFileMode = (mode) => {
      let modeAsString;
      if (typeof mode === "number") {
        modeAsString = mode.toString(8);
      } else {
        modeAsString = mode;
      }
      return modeAsString.substring(modeAsString.length - 3);
    };
  }
});
var require_remove = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/fs-jetpack@5.1.0/node_modules/fs-jetpack/lib/remove.js"(exports) {
    "use strict";
    var fs = require_fs();
    var validate = require_validate();
    var validateInput = (methodName, path3) => {
      const methodSignature = `${methodName}([path])`;
      validate.argument(methodSignature, "path", path3, ["string", "undefined"]);
    };
    var removeSync = (path3) => {
      fs.rmSync(path3, {
        recursive: true,
        force: true,
        maxRetries: 3
      });
    };
    var removeAsync = (path3) => {
      return fs.rm(path3, {
        recursive: true,
        force: true,
        maxRetries: 3
      });
    };
    exports.validateInput = validateInput;
    exports.sync = removeSync;
    exports.async = removeAsync;
  }
});
var require_dir = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/fs-jetpack@5.1.0/node_modules/fs-jetpack/lib/dir.js"(exports) {
    "use strict";
    var pathUtil = (0, import_chunk_2ESYSVXG.__require)("path");
    var fs = require_fs();
    var modeUtil = require_mode2();
    var validate = require_validate();
    var remove = require_remove();
    var validateInput = (methodName, path3, criteria) => {
      const methodSignature = `${methodName}(path, [criteria])`;
      validate.argument(methodSignature, "path", path3, ["string"]);
      validate.options(methodSignature, "criteria", criteria, {
        empty: ["boolean"],
        mode: ["string", "number"]
      });
    };
    var getCriteriaDefaults = (passedCriteria) => {
      const criteria = passedCriteria || {};
      if (typeof criteria.empty !== "boolean") {
        criteria.empty = false;
      }
      if (criteria.mode !== void 0) {
        criteria.mode = modeUtil.normalizeFileMode(criteria.mode);
      }
      return criteria;
    };
    var generatePathOccupiedByNotDirectoryError = (path3) => {
      return new Error(
        `Path ${path3} exists but is not a directory. Halting jetpack.dir() call for safety reasons.`
      );
    };
    var checkWhatAlreadyOccupiesPathSync = (path3) => {
      let stat;
      try {
        stat = fs.statSync(path3);
      } catch (err) {
        if (err.code !== "ENOENT") {
          throw err;
        }
      }
      if (stat && !stat.isDirectory()) {
        throw generatePathOccupiedByNotDirectoryError(path3);
      }
      return stat;
    };
    var createBrandNewDirectorySync = (path3, opts) => {
      const options = opts || {};
      try {
        fs.mkdirSync(path3, options.mode);
      } catch (err) {
        if (err.code === "ENOENT") {
          createBrandNewDirectorySync(pathUtil.dirname(path3), options);
          fs.mkdirSync(path3, options.mode);
        } else if (err.code === "EEXIST") {
        } else {
          throw err;
        }
      }
    };
    var checkExistingDirectoryFulfillsCriteriaSync = (path3, stat, criteria) => {
      const checkMode = () => {
        const mode = modeUtil.normalizeFileMode(stat.mode);
        if (criteria.mode !== void 0 && criteria.mode !== mode) {
          fs.chmodSync(path3, criteria.mode);
        }
      };
      const checkEmptiness = () => {
        if (criteria.empty) {
          const list = fs.readdirSync(path3);
          list.forEach((filename) => {
            remove.sync(pathUtil.resolve(path3, filename));
          });
        }
      };
      checkMode();
      checkEmptiness();
    };
    var dirSync = (path3, passedCriteria) => {
      const criteria = getCriteriaDefaults(passedCriteria);
      const stat = checkWhatAlreadyOccupiesPathSync(path3);
      if (stat) {
        checkExistingDirectoryFulfillsCriteriaSync(path3, stat, criteria);
      } else {
        createBrandNewDirectorySync(path3, criteria);
      }
    };
    var checkWhatAlreadyOccupiesPathAsync = (path3) => {
      return new Promise((resolve, reject) => {
        fs.stat(path3).then((stat) => {
          if (stat.isDirectory()) {
            resolve(stat);
          } else {
            reject(generatePathOccupiedByNotDirectoryError(path3));
          }
        }).catch((err) => {
          if (err.code === "ENOENT") {
            resolve(void 0);
          } else {
            reject(err);
          }
        });
      });
    };
    var emptyAsync = (path3) => {
      return new Promise((resolve, reject) => {
        fs.readdir(path3).then((list) => {
          const doOne = (index) => {
            if (index === list.length) {
              resolve();
            } else {
              const subPath = pathUtil.resolve(path3, list[index]);
              remove.async(subPath).then(() => {
                doOne(index + 1);
              });
            }
          };
          doOne(0);
        }).catch(reject);
      });
    };
    var checkExistingDirectoryFulfillsCriteriaAsync = (path3, stat, criteria) => {
      return new Promise((resolve, reject) => {
        const checkMode = () => {
          const mode = modeUtil.normalizeFileMode(stat.mode);
          if (criteria.mode !== void 0 && criteria.mode !== mode) {
            return fs.chmod(path3, criteria.mode);
          }
          return Promise.resolve();
        };
        const checkEmptiness = () => {
          if (criteria.empty) {
            return emptyAsync(path3);
          }
          return Promise.resolve();
        };
        checkMode().then(checkEmptiness).then(resolve, reject);
      });
    };
    var createBrandNewDirectoryAsync = (path3, opts) => {
      const options = opts || {};
      return new Promise((resolve, reject) => {
        fs.mkdir(path3, options.mode).then(resolve).catch((err) => {
          if (err.code === "ENOENT") {
            createBrandNewDirectoryAsync(pathUtil.dirname(path3), options).then(() => {
              return fs.mkdir(path3, options.mode);
            }).then(resolve).catch((err2) => {
              if (err2.code === "EEXIST") {
                resolve();
              } else {
                reject(err2);
              }
            });
          } else if (err.code === "EEXIST") {
            resolve();
          } else {
            reject(err);
          }
        });
      });
    };
    var dirAsync = (path3, passedCriteria) => {
      return new Promise((resolve, reject) => {
        const criteria = getCriteriaDefaults(passedCriteria);
        checkWhatAlreadyOccupiesPathAsync(path3).then((stat) => {
          if (stat !== void 0) {
            return checkExistingDirectoryFulfillsCriteriaAsync(
              path3,
              stat,
              criteria
            );
          }
          return createBrandNewDirectoryAsync(path3, criteria);
        }).then(resolve, reject);
      });
    };
    exports.validateInput = validateInput;
    exports.sync = dirSync;
    exports.createSync = createBrandNewDirectorySync;
    exports.async = dirAsync;
    exports.createAsync = createBrandNewDirectoryAsync;
  }
});
var require_write = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/fs-jetpack@5.1.0/node_modules/fs-jetpack/lib/write.js"(exports) {
    "use strict";
    var pathUtil = (0, import_chunk_2ESYSVXG.__require)("path");
    var fs = require_fs();
    var validate = require_validate();
    var dir = require_dir();
    var validateInput = (methodName, path3, data, options) => {
      const methodSignature = `${methodName}(path, data, [options])`;
      validate.argument(methodSignature, "path", path3, ["string"]);
      validate.argument(methodSignature, "data", data, [
        "string",
        "buffer",
        "object",
        "array"
      ]);
      validate.options(methodSignature, "options", options, {
        mode: ["string", "number"],
        atomic: ["boolean"],
        jsonIndent: ["number"]
      });
    };
    var newExt = ".__new__";
    var serializeToJsonMaybe = (data, jsonIndent) => {
      let indent = jsonIndent;
      if (typeof indent !== "number") {
        indent = 2;
      }
      if (typeof data === "object" && !Buffer.isBuffer(data) && data !== null) {
        return JSON.stringify(data, null, indent);
      }
      return data;
    };
    var writeFileSync = (path3, data, options) => {
      try {
        fs.writeFileSync(path3, data, options);
      } catch (err) {
        if (err.code === "ENOENT") {
          dir.createSync(pathUtil.dirname(path3));
          fs.writeFileSync(path3, data, options);
        } else {
          throw err;
        }
      }
    };
    var writeAtomicSync = (path3, data, options) => {
      writeFileSync(path3 + newExt, data, options);
      fs.renameSync(path3 + newExt, path3);
    };
    var writeSync = (path3, data, options) => {
      const opts = options || {};
      const processedData = serializeToJsonMaybe(data, opts.jsonIndent);
      let writeStrategy = writeFileSync;
      if (opts.atomic) {
        writeStrategy = writeAtomicSync;
      }
      writeStrategy(path3, processedData, { mode: opts.mode });
    };
    var writeFileAsync = (path3, data, options) => {
      return new Promise((resolve, reject) => {
        fs.writeFile(path3, data, options).then(resolve).catch((err) => {
          if (err.code === "ENOENT") {
            dir.createAsync(pathUtil.dirname(path3)).then(() => {
              return fs.writeFile(path3, data, options);
            }).then(resolve, reject);
          } else {
            reject(err);
          }
        });
      });
    };
    var writeAtomicAsync = (path3, data, options) => {
      return new Promise((resolve, reject) => {
        writeFileAsync(path3 + newExt, data, options).then(() => {
          return fs.rename(path3 + newExt, path3);
        }).then(resolve, reject);
      });
    };
    var writeAsync = (path3, data, options) => {
      const opts = options || {};
      const processedData = serializeToJsonMaybe(data, opts.jsonIndent);
      let writeStrategy = writeFileAsync;
      if (opts.atomic) {
        writeStrategy = writeAtomicAsync;
      }
      return writeStrategy(path3, processedData, { mode: opts.mode });
    };
    exports.validateInput = validateInput;
    exports.sync = writeSync;
    exports.async = writeAsync;
  }
});
var require_append = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/fs-jetpack@5.1.0/node_modules/fs-jetpack/lib/append.js"(exports) {
    "use strict";
    var fs = require_fs();
    var write = require_write();
    var validate = require_validate();
    var validateInput = (methodName, path3, data, options) => {
      const methodSignature = `${methodName}(path, data, [options])`;
      validate.argument(methodSignature, "path", path3, ["string"]);
      validate.argument(methodSignature, "data", data, ["string", "buffer"]);
      validate.options(methodSignature, "options", options, {
        mode: ["string", "number"]
      });
    };
    var appendSync = (path3, data, options) => {
      try {
        fs.appendFileSync(path3, data, options);
      } catch (err) {
        if (err.code === "ENOENT") {
          write.sync(path3, data, options);
        } else {
          throw err;
        }
      }
    };
    var appendAsync = (path3, data, options) => {
      return new Promise((resolve, reject) => {
        fs.appendFile(path3, data, options).then(resolve).catch((err) => {
          if (err.code === "ENOENT") {
            write.async(path3, data, options).then(resolve, reject);
          } else {
            reject(err);
          }
        });
      });
    };
    exports.validateInput = validateInput;
    exports.sync = appendSync;
    exports.async = appendAsync;
  }
});
var require_file = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/fs-jetpack@5.1.0/node_modules/fs-jetpack/lib/file.js"(exports) {
    "use strict";
    var fs = require_fs();
    var modeUtil = require_mode2();
    var validate = require_validate();
    var write = require_write();
    var validateInput = (methodName, path3, criteria) => {
      const methodSignature = `${methodName}(path, [criteria])`;
      validate.argument(methodSignature, "path", path3, ["string"]);
      validate.options(methodSignature, "criteria", criteria, {
        content: ["string", "buffer", "object", "array"],
        jsonIndent: ["number"],
        mode: ["string", "number"]
      });
    };
    var getCriteriaDefaults = (passedCriteria) => {
      const criteria = passedCriteria || {};
      if (criteria.mode !== void 0) {
        criteria.mode = modeUtil.normalizeFileMode(criteria.mode);
      }
      return criteria;
    };
    var generatePathOccupiedByNotFileError = (path3) => {
      return new Error(
        `Path ${path3} exists but is not a file. Halting jetpack.file() call for safety reasons.`
      );
    };
    var checkWhatAlreadyOccupiesPathSync = (path3) => {
      let stat;
      try {
        stat = fs.statSync(path3);
      } catch (err) {
        if (err.code !== "ENOENT") {
          throw err;
        }
      }
      if (stat && !stat.isFile()) {
        throw generatePathOccupiedByNotFileError(path3);
      }
      return stat;
    };
    var checkExistingFileFulfillsCriteriaSync = (path3, stat, criteria) => {
      const mode = modeUtil.normalizeFileMode(stat.mode);
      const checkContent = () => {
        if (criteria.content !== void 0) {
          write.sync(path3, criteria.content, {
            mode,
            jsonIndent: criteria.jsonIndent
          });
          return true;
        }
        return false;
      };
      const checkMode = () => {
        if (criteria.mode !== void 0 && criteria.mode !== mode) {
          fs.chmodSync(path3, criteria.mode);
        }
      };
      const contentReplaced = checkContent();
      if (!contentReplaced) {
        checkMode();
      }
    };
    var createBrandNewFileSync = (path3, criteria) => {
      let content = "";
      if (criteria.content !== void 0) {
        content = criteria.content;
      }
      write.sync(path3, content, {
        mode: criteria.mode,
        jsonIndent: criteria.jsonIndent
      });
    };
    var fileSync = (path3, passedCriteria) => {
      const criteria = getCriteriaDefaults(passedCriteria);
      const stat = checkWhatAlreadyOccupiesPathSync(path3);
      if (stat !== void 0) {
        checkExistingFileFulfillsCriteriaSync(path3, stat, criteria);
      } else {
        createBrandNewFileSync(path3, criteria);
      }
    };
    var checkWhatAlreadyOccupiesPathAsync = (path3) => {
      return new Promise((resolve, reject) => {
        fs.stat(path3).then((stat) => {
          if (stat.isFile()) {
            resolve(stat);
          } else {
            reject(generatePathOccupiedByNotFileError(path3));
          }
        }).catch((err) => {
          if (err.code === "ENOENT") {
            resolve(void 0);
          } else {
            reject(err);
          }
        });
      });
    };
    var checkExistingFileFulfillsCriteriaAsync = (path3, stat, criteria) => {
      const mode = modeUtil.normalizeFileMode(stat.mode);
      const checkContent = () => {
        return new Promise((resolve, reject) => {
          if (criteria.content !== void 0) {
            write.async(path3, criteria.content, {
              mode,
              jsonIndent: criteria.jsonIndent
            }).then(() => {
              resolve(true);
            }).catch(reject);
          } else {
            resolve(false);
          }
        });
      };
      const checkMode = () => {
        if (criteria.mode !== void 0 && criteria.mode !== mode) {
          return fs.chmod(path3, criteria.mode);
        }
        return void 0;
      };
      return checkContent().then((contentReplaced) => {
        if (!contentReplaced) {
          return checkMode();
        }
        return void 0;
      });
    };
    var createBrandNewFileAsync = (path3, criteria) => {
      let content = "";
      if (criteria.content !== void 0) {
        content = criteria.content;
      }
      return write.async(path3, content, {
        mode: criteria.mode,
        jsonIndent: criteria.jsonIndent
      });
    };
    var fileAsync = (path3, passedCriteria) => {
      return new Promise((resolve, reject) => {
        const criteria = getCriteriaDefaults(passedCriteria);
        checkWhatAlreadyOccupiesPathAsync(path3).then((stat) => {
          if (stat !== void 0) {
            return checkExistingFileFulfillsCriteriaAsync(path3, stat, criteria);
          }
          return createBrandNewFileAsync(path3, criteria);
        }).then(resolve, reject);
      });
    };
    exports.validateInput = validateInput;
    exports.sync = fileSync;
    exports.async = fileAsync;
  }
});
var require_inspect = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/fs-jetpack@5.1.0/node_modules/fs-jetpack/lib/inspect.js"(exports) {
    "use strict";
    var crypto = (0, import_chunk_2ESYSVXG.__require)("crypto");
    var pathUtil = (0, import_chunk_2ESYSVXG.__require)("path");
    var fs = require_fs();
    var validate = require_validate();
    var supportedChecksumAlgorithms = ["md5", "sha1", "sha256", "sha512"];
    var symlinkOptions = ["report", "follow"];
    var validateInput = (methodName, path3, options) => {
      const methodSignature = `${methodName}(path, [options])`;
      validate.argument(methodSignature, "path", path3, ["string"]);
      validate.options(methodSignature, "options", options, {
        checksum: ["string"],
        mode: ["boolean"],
        times: ["boolean"],
        absolutePath: ["boolean"],
        symlinks: ["string"]
      });
      if (options && options.checksum !== void 0 && supportedChecksumAlgorithms.indexOf(options.checksum) === -1) {
        throw new Error(
          `Argument "options.checksum" passed to ${methodSignature} must have one of values: ${supportedChecksumAlgorithms.join(
            ", "
          )}`
        );
      }
      if (options && options.symlinks !== void 0 && symlinkOptions.indexOf(options.symlinks) === -1) {
        throw new Error(
          `Argument "options.symlinks" passed to ${methodSignature} must have one of values: ${symlinkOptions.join(
            ", "
          )}`
        );
      }
    };
    var createInspectObj = (path3, options, stat) => {
      const obj = {};
      obj.name = pathUtil.basename(path3);
      if (stat.isFile()) {
        obj.type = "file";
        obj.size = stat.size;
      } else if (stat.isDirectory()) {
        obj.type = "dir";
      } else if (stat.isSymbolicLink()) {
        obj.type = "symlink";
      } else {
        obj.type = "other";
      }
      if (options.mode) {
        obj.mode = stat.mode;
      }
      if (options.times) {
        obj.accessTime = stat.atime;
        obj.modifyTime = stat.mtime;
        obj.changeTime = stat.ctime;
        obj.birthTime = stat.birthtime;
      }
      if (options.absolutePath) {
        obj.absolutePath = path3;
      }
      return obj;
    };
    var fileChecksum = (path3, algo) => {
      const hash = crypto.createHash(algo);
      const data = fs.readFileSync(path3);
      hash.update(data);
      return hash.digest("hex");
    };
    var addExtraFieldsSync = (path3, inspectObj, options) => {
      if (inspectObj.type === "file" && options.checksum) {
        inspectObj[options.checksum] = fileChecksum(path3, options.checksum);
      } else if (inspectObj.type === "symlink") {
        inspectObj.pointsAt = fs.readlinkSync(path3);
      }
    };
    var inspectSync = (path3, options) => {
      let statOperation = fs.lstatSync;
      let stat;
      const opts = options || {};
      if (opts.symlinks === "follow") {
        statOperation = fs.statSync;
      }
      try {
        stat = statOperation(path3);
      } catch (err) {
        if (err.code === "ENOENT") {
          return void 0;
        }
        throw err;
      }
      const inspectObj = createInspectObj(path3, opts, stat);
      addExtraFieldsSync(path3, inspectObj, opts);
      return inspectObj;
    };
    var fileChecksumAsync = (path3, algo) => {
      return new Promise((resolve, reject) => {
        const hash = crypto.createHash(algo);
        const s = fs.createReadStream(path3);
        s.on("data", (data) => {
          hash.update(data);
        });
        s.on("end", () => {
          resolve(hash.digest("hex"));
        });
        s.on("error", reject);
      });
    };
    var addExtraFieldsAsync = (path3, inspectObj, options) => {
      if (inspectObj.type === "file" && options.checksum) {
        return fileChecksumAsync(path3, options.checksum).then((checksum) => {
          inspectObj[options.checksum] = checksum;
          return inspectObj;
        });
      } else if (inspectObj.type === "symlink") {
        return fs.readlink(path3).then((linkPath) => {
          inspectObj.pointsAt = linkPath;
          return inspectObj;
        });
      }
      return Promise.resolve(inspectObj);
    };
    var inspectAsync = (path3, options) => {
      return new Promise((resolve, reject) => {
        let statOperation = fs.lstat;
        const opts = options || {};
        if (opts.symlinks === "follow") {
          statOperation = fs.stat;
        }
        statOperation(path3).then((stat) => {
          const inspectObj = createInspectObj(path3, opts, stat);
          addExtraFieldsAsync(path3, inspectObj, opts).then(resolve, reject);
        }).catch((err) => {
          if (err.code === "ENOENT") {
            resolve(void 0);
          } else {
            reject(err);
          }
        });
      });
    };
    exports.supportedChecksumAlgorithms = supportedChecksumAlgorithms;
    exports.symlinkOptions = symlinkOptions;
    exports.validateInput = validateInput;
    exports.sync = inspectSync;
    exports.async = inspectAsync;
  }
});
var require_list = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/fs-jetpack@5.1.0/node_modules/fs-jetpack/lib/list.js"(exports) {
    "use strict";
    var fs = require_fs();
    var validate = require_validate();
    var validateInput = (methodName, path3) => {
      const methodSignature = `${methodName}(path)`;
      validate.argument(methodSignature, "path", path3, ["string", "undefined"]);
    };
    var listSync = (path3) => {
      try {
        return fs.readdirSync(path3);
      } catch (err) {
        if (err.code === "ENOENT") {
          return void 0;
        }
        throw err;
      }
    };
    var listAsync = (path3) => {
      return new Promise((resolve, reject) => {
        fs.readdir(path3).then((list) => {
          resolve(list);
        }).catch((err) => {
          if (err.code === "ENOENT") {
            resolve(void 0);
          } else {
            reject(err);
          }
        });
      });
    };
    exports.validateInput = validateInput;
    exports.sync = listSync;
    exports.async = listAsync;
  }
});
var require_tree_walker = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/fs-jetpack@5.1.0/node_modules/fs-jetpack/lib/utils/tree_walker.js"(exports) {
    "use strict";
    var fs = (0, import_chunk_2ESYSVXG.__require)("fs");
    var pathUtil = (0, import_chunk_2ESYSVXG.__require)("path");
    var inspect = require_inspect();
    var list = require_list();
    var fileType = (dirent) => {
      if (dirent.isDirectory()) {
        return "dir";
      }
      if (dirent.isFile()) {
        return "file";
      }
      if (dirent.isSymbolicLink()) {
        return "symlink";
      }
      return "other";
    };
    var initialWalkSync = (path3, options, callback) => {
      if (options.maxLevelsDeep === void 0) {
        options.maxLevelsDeep = Infinity;
      }
      const performInspectOnEachNode = options.inspectOptions !== void 0;
      if (options.symlinks) {
        if (options.inspectOptions === void 0) {
          options.inspectOptions = { symlinks: options.symlinks };
        } else {
          options.inspectOptions.symlinks = options.symlinks;
        }
      }
      const walkSync = (path4, currentLevel) => {
        fs.readdirSync(path4, { withFileTypes: true }).forEach((direntItem) => {
          const withFileTypesNotSupported = typeof direntItem === "string";
          let fileItemPath;
          if (withFileTypesNotSupported) {
            fileItemPath = pathUtil.join(path4, direntItem);
          } else {
            fileItemPath = pathUtil.join(path4, direntItem.name);
          }
          let fileItem;
          if (performInspectOnEachNode) {
            fileItem = inspect.sync(fileItemPath, options.inspectOptions);
          } else if (withFileTypesNotSupported) {
            const inspectObject = inspect.sync(
              fileItemPath,
              options.inspectOptions
            );
            fileItem = { name: inspectObject.name, type: inspectObject.type };
          } else {
            const type = fileType(direntItem);
            if (type === "symlink" && options.symlinks === "follow") {
              const symlinkPointsTo = fs.statSync(fileItemPath);
              fileItem = { name: direntItem.name, type: fileType(symlinkPointsTo) };
            } else {
              fileItem = { name: direntItem.name, type };
            }
          }
          if (fileItem !== void 0) {
            callback(fileItemPath, fileItem);
            if (fileItem.type === "dir" && currentLevel < options.maxLevelsDeep) {
              walkSync(fileItemPath, currentLevel + 1);
            }
          }
        });
      };
      const item = inspect.sync(path3, options.inspectOptions);
      if (item) {
        if (performInspectOnEachNode) {
          callback(path3, item);
        } else {
          callback(path3, { name: item.name, type: item.type });
        }
        if (item.type === "dir") {
          walkSync(path3, 1);
        }
      } else {
        callback(path3, void 0);
      }
    };
    var maxConcurrentOperations = 5;
    var initialWalkAsync = (path3, options, callback, doneCallback) => {
      if (options.maxLevelsDeep === void 0) {
        options.maxLevelsDeep = Infinity;
      }
      const performInspectOnEachNode = options.inspectOptions !== void 0;
      if (options.symlinks) {
        if (options.inspectOptions === void 0) {
          options.inspectOptions = { symlinks: options.symlinks };
        } else {
          options.inspectOptions.symlinks = options.symlinks;
        }
      }
      const concurrentOperationsQueue = [];
      let nowDoingConcurrentOperations = 0;
      const checkConcurrentOperations = () => {
        if (concurrentOperationsQueue.length === 0 && nowDoingConcurrentOperations === 0) {
          doneCallback();
        } else if (concurrentOperationsQueue.length > 0 && nowDoingConcurrentOperations < maxConcurrentOperations) {
          const operation = concurrentOperationsQueue.pop();
          nowDoingConcurrentOperations += 1;
          operation();
        }
      };
      const whenConcurrencySlotAvailable = (operation) => {
        concurrentOperationsQueue.push(operation);
        checkConcurrentOperations();
      };
      const concurrentOperationDone = () => {
        nowDoingConcurrentOperations -= 1;
        checkConcurrentOperations();
      };
      const walkAsync = (path4, currentLevel) => {
        const goDeeperIfDir = (fileItemPath, fileItem) => {
          if (fileItem.type === "dir" && currentLevel < options.maxLevelsDeep) {
            walkAsync(fileItemPath, currentLevel + 1);
          }
        };
        whenConcurrencySlotAvailable(() => {
          fs.readdir(path4, { withFileTypes: true }, (err, files) => {
            if (err) {
              doneCallback(err);
            } else {
              files.forEach((direntItem) => {
                const withFileTypesNotSupported = typeof direntItem === "string";
                let fileItemPath;
                if (withFileTypesNotSupported) {
                  fileItemPath = pathUtil.join(path4, direntItem);
                } else {
                  fileItemPath = pathUtil.join(path4, direntItem.name);
                }
                if (performInspectOnEachNode || withFileTypesNotSupported) {
                  whenConcurrencySlotAvailable(() => {
                    inspect.async(fileItemPath, options.inspectOptions).then((fileItem) => {
                      if (fileItem !== void 0) {
                        if (performInspectOnEachNode) {
                          callback(fileItemPath, fileItem);
                        } else {
                          callback(fileItemPath, {
                            name: fileItem.name,
                            type: fileItem.type
                          });
                        }
                        goDeeperIfDir(fileItemPath, fileItem);
                      }
                      concurrentOperationDone();
                    }).catch((err2) => {
                      doneCallback(err2);
                    });
                  });
                } else {
                  const type = fileType(direntItem);
                  if (type === "symlink" && options.symlinks === "follow") {
                    whenConcurrencySlotAvailable(() => {
                      fs.stat(fileItemPath, (err2, symlinkPointsTo) => {
                        if (err2) {
                          doneCallback(err2);
                        } else {
                          const fileItem = {
                            name: direntItem.name,
                            type: fileType(symlinkPointsTo)
                          };
                          callback(fileItemPath, fileItem);
                          goDeeperIfDir(fileItemPath, fileItem);
                          concurrentOperationDone();
                        }
                      });
                    });
                  } else {
                    const fileItem = { name: direntItem.name, type };
                    callback(fileItemPath, fileItem);
                    goDeeperIfDir(fileItemPath, fileItem);
                  }
                }
              });
              concurrentOperationDone();
            }
          });
        });
      };
      inspect.async(path3, options.inspectOptions).then((item) => {
        if (item) {
          if (performInspectOnEachNode) {
            callback(path3, item);
          } else {
            callback(path3, { name: item.name, type: item.type });
          }
          if (item.type === "dir") {
            walkAsync(path3, 1);
          } else {
            doneCallback();
          }
        } else {
          callback(path3, void 0);
          doneCallback();
        }
      }).catch((err) => {
        doneCallback(err);
      });
    };
    exports.sync = initialWalkSync;
    exports.async = initialWalkAsync;
  }
});
var require_path = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/minimatch@5.1.0/node_modules/minimatch/lib/path.js"(exports, module2) {
    "use strict";
    var isWindows = typeof process === "object" && process && process.platform === "win32";
    module2.exports = isWindows ? { sep: "\\" } : { sep: "/" };
  }
});
var require_balanced_match = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/balanced-match@1.0.2/node_modules/balanced-match/index.js"(exports, module2) {
    "use strict";
    module2.exports = balanced;
    function balanced(a, b, str) {
      if (a instanceof RegExp) a = maybeMatch(a, str);
      if (b instanceof RegExp) b = maybeMatch(b, str);
      var r = range(a, b, str);
      return r && {
        start: r[0],
        end: r[1],
        pre: str.slice(0, r[0]),
        body: str.slice(r[0] + a.length, r[1]),
        post: str.slice(r[1] + b.length)
      };
    }
    function maybeMatch(reg, str) {
      var m = str.match(reg);
      return m ? m[0] : null;
    }
    balanced.range = range;
    function range(a, b, str) {
      var begs, beg, left, right, result;
      var ai = str.indexOf(a);
      var bi = str.indexOf(b, ai + 1);
      var i = ai;
      if (ai >= 0 && bi > 0) {
        if (a === b) {
          return [ai, bi];
        }
        begs = [];
        left = str.length;
        while (i >= 0 && !result) {
          if (i == ai) {
            begs.push(i);
            ai = str.indexOf(a, i + 1);
          } else if (begs.length == 1) {
            result = [begs.pop(), bi];
          } else {
            beg = begs.pop();
            if (beg < left) {
              left = beg;
              right = bi;
            }
            bi = str.indexOf(b, i + 1);
          }
          i = ai < bi && ai >= 0 ? ai : bi;
        }
        if (begs.length) {
          result = [left, right];
        }
      }
      return result;
    }
  }
});
var require_brace_expansion = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/brace-expansion@2.0.1/node_modules/brace-expansion/index.js"(exports, module2) {
    "use strict";
    var balanced = require_balanced_match();
    module2.exports = expandTop;
    var escSlash = "\0SLASH" + Math.random() + "\0";
    var escOpen = "\0OPEN" + Math.random() + "\0";
    var escClose = "\0CLOSE" + Math.random() + "\0";
    var escComma = "\0COMMA" + Math.random() + "\0";
    var escPeriod = "\0PERIOD" + Math.random() + "\0";
    function numeric(str) {
      return parseInt(str, 10) == str ? parseInt(str, 10) : str.charCodeAt(0);
    }
    function escapeBraces(str) {
      return str.split("\\\\").join(escSlash).split("\\{").join(escOpen).split("\\}").join(escClose).split("\\,").join(escComma).split("\\.").join(escPeriod);
    }
    function unescapeBraces(str) {
      return str.split(escSlash).join("\\").split(escOpen).join("{").split(escClose).join("}").split(escComma).join(",").split(escPeriod).join(".");
    }
    function parseCommaParts(str) {
      if (!str)
        return [""];
      var parts = [];
      var m = balanced("{", "}", str);
      if (!m)
        return str.split(",");
      var pre = m.pre;
      var body = m.body;
      var post = m.post;
      var p = pre.split(",");
      p[p.length - 1] += "{" + body + "}";
      var postParts = parseCommaParts(post);
      if (post.length) {
        p[p.length - 1] += postParts.shift();
        p.push.apply(p, postParts);
      }
      parts.push.apply(parts, p);
      return parts;
    }
    function expandTop(str) {
      if (!str)
        return [];
      if (str.substr(0, 2) === "{}") {
        str = "\\{\\}" + str.substr(2);
      }
      return expand(escapeBraces(str), true).map(unescapeBraces);
    }
    function embrace(str) {
      return "{" + str + "}";
    }
    function isPadded(el) {
      return /^-?0\d/.test(el);
    }
    function lte(i, y) {
      return i <= y;
    }
    function gte(i, y) {
      return i >= y;
    }
    function expand(str, isTop) {
      var expansions = [];
      var m = balanced("{", "}", str);
      if (!m) return [str];
      var pre = m.pre;
      var post = m.post.length ? expand(m.post, false) : [""];
      if (/\$$/.test(m.pre)) {
        for (var k = 0; k < post.length; k++) {
          var expansion = pre + "{" + m.body + "}" + post[k];
          expansions.push(expansion);
        }
      } else {
        var isNumericSequence = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(m.body);
        var isAlphaSequence = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(m.body);
        var isSequence = isNumericSequence || isAlphaSequence;
        var isOptions = m.body.indexOf(",") >= 0;
        if (!isSequence && !isOptions) {
          if (m.post.match(/,.*\}/)) {
            str = m.pre + "{" + m.body + escClose + m.post;
            return expand(str);
          }
          return [str];
        }
        var n;
        if (isSequence) {
          n = m.body.split(/\.\./);
        } else {
          n = parseCommaParts(m.body);
          if (n.length === 1) {
            n = expand(n[0], false).map(embrace);
            if (n.length === 1) {
              return post.map(function(p) {
                return m.pre + n[0] + p;
              });
            }
          }
        }
        var N;
        if (isSequence) {
          var x = numeric(n[0]);
          var y = numeric(n[1]);
          var width = Math.max(n[0].length, n[1].length);
          var incr = n.length == 3 ? Math.abs(numeric(n[2])) : 1;
          var test = lte;
          var reverse = y < x;
          if (reverse) {
            incr *= -1;
            test = gte;
          }
          var pad = n.some(isPadded);
          N = [];
          for (var i = x; test(i, y); i += incr) {
            var c;
            if (isAlphaSequence) {
              c = String.fromCharCode(i);
              if (c === "\\")
                c = "";
            } else {
              c = String(i);
              if (pad) {
                var need = width - c.length;
                if (need > 0) {
                  var z = new Array(need + 1).join("0");
                  if (i < 0)
                    c = "-" + z + c.slice(1);
                  else
                    c = z + c;
                }
              }
            }
            N.push(c);
          }
        } else {
          N = [];
          for (var j = 0; j < n.length; j++) {
            N.push.apply(N, expand(n[j], false));
          }
        }
        for (var j = 0; j < N.length; j++) {
          for (var k = 0; k < post.length; k++) {
            var expansion = pre + N[j] + post[k];
            if (!isTop || isSequence || expansion)
              expansions.push(expansion);
          }
        }
      }
      return expansions;
    }
  }
});
var require_minimatch = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/minimatch@5.1.0/node_modules/minimatch/minimatch.js"(exports, module2) {
    "use strict";
    var minimatch = module2.exports = (p, pattern, options = {}) => {
      assertValidPattern(pattern);
      if (!options.nocomment && pattern.charAt(0) === "#") {
        return false;
      }
      return new Minimatch(pattern, options).match(p);
    };
    module2.exports = minimatch;
    var path3 = require_path();
    minimatch.sep = path3.sep;
    var GLOBSTAR = Symbol("globstar **");
    minimatch.GLOBSTAR = GLOBSTAR;
    var expand = require_brace_expansion();
    var plTypes = {
      "!": { open: "(?:(?!(?:", close: "))[^/]*?)" },
      "?": { open: "(?:", close: ")?" },
      "+": { open: "(?:", close: ")+" },
      "*": { open: "(?:", close: ")*" },
      "@": { open: "(?:", close: ")" }
    };
    var qmark = "[^/]";
    var star = qmark + "*?";
    var twoStarDot = "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?";
    var twoStarNoDot = "(?:(?!(?:\\/|^)\\.).)*?";
    var charSet = (s) => s.split("").reduce((set, c) => {
      set[c] = true;
      return set;
    }, {});
    var reSpecials = charSet("().*{}+?[]^$\\!");
    var addPatternStartSet = charSet("[.(");
    var slashSplit = /\/+/;
    minimatch.filter = (pattern, options = {}) => (p, i, list) => minimatch(p, pattern, options);
    var ext = (a, b = {}) => {
      const t = {};
      Object.keys(a).forEach((k) => t[k] = a[k]);
      Object.keys(b).forEach((k) => t[k] = b[k]);
      return t;
    };
    minimatch.defaults = (def) => {
      if (!def || typeof def !== "object" || !Object.keys(def).length) {
        return minimatch;
      }
      const orig = minimatch;
      const m = (p, pattern, options) => orig(p, pattern, ext(def, options));
      m.Minimatch = class Minimatch extends orig.Minimatch {
        constructor(pattern, options) {
          super(pattern, ext(def, options));
        }
      };
      m.Minimatch.defaults = (options) => orig.defaults(ext(def, options)).Minimatch;
      m.filter = (pattern, options) => orig.filter(pattern, ext(def, options));
      m.defaults = (options) => orig.defaults(ext(def, options));
      m.makeRe = (pattern, options) => orig.makeRe(pattern, ext(def, options));
      m.braceExpand = (pattern, options) => orig.braceExpand(pattern, ext(def, options));
      m.match = (list, pattern, options) => orig.match(list, pattern, ext(def, options));
      return m;
    };
    minimatch.braceExpand = (pattern, options) => braceExpand(pattern, options);
    var braceExpand = (pattern, options = {}) => {
      assertValidPattern(pattern);
      if (options.nobrace || !/\{(?:(?!\{).)*\}/.test(pattern)) {
        return [pattern];
      }
      return expand(pattern);
    };
    var MAX_PATTERN_LENGTH = 1024 * 64;
    var assertValidPattern = (pattern) => {
      if (typeof pattern !== "string") {
        throw new TypeError("invalid pattern");
      }
      if (pattern.length > MAX_PATTERN_LENGTH) {
        throw new TypeError("pattern is too long");
      }
    };
    var SUBPARSE = Symbol("subparse");
    minimatch.makeRe = (pattern, options) => new Minimatch(pattern, options || {}).makeRe();
    minimatch.match = (list, pattern, options = {}) => {
      const mm = new Minimatch(pattern, options);
      list = list.filter((f) => mm.match(f));
      if (mm.options.nonull && !list.length) {
        list.push(pattern);
      }
      return list;
    };
    var globUnescape = (s) => s.replace(/\\(.)/g, "$1");
    var regExpEscape = (s) => s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    var Minimatch = class {
      constructor(pattern, options) {
        assertValidPattern(pattern);
        if (!options) options = {};
        this.options = options;
        this.set = [];
        this.pattern = pattern;
        this.windowsPathsNoEscape = !!options.windowsPathsNoEscape || options.allowWindowsEscape === false;
        if (this.windowsPathsNoEscape) {
          this.pattern = this.pattern.replace(/\\/g, "/");
        }
        this.regexp = null;
        this.negate = false;
        this.comment = false;
        this.empty = false;
        this.partial = !!options.partial;
        this.make();
      }
      debug() {
      }
      make() {
        const pattern = this.pattern;
        const options = this.options;
        if (!options.nocomment && pattern.charAt(0) === "#") {
          this.comment = true;
          return;
        }
        if (!pattern) {
          this.empty = true;
          return;
        }
        this.parseNegate();
        let set = this.globSet = this.braceExpand();
        if (options.debug) this.debug = (...args) => console.error(...args);
        this.debug(this.pattern, set);
        set = this.globParts = set.map((s) => s.split(slashSplit));
        this.debug(this.pattern, set);
        set = set.map((s, si, set2) => s.map(this.parse, this));
        this.debug(this.pattern, set);
        set = set.filter((s) => s.indexOf(false) === -1);
        this.debug(this.pattern, set);
        this.set = set;
      }
      parseNegate() {
        if (this.options.nonegate) return;
        const pattern = this.pattern;
        let negate = false;
        let negateOffset = 0;
        for (let i = 0; i < pattern.length && pattern.charAt(i) === "!"; i++) {
          negate = !negate;
          negateOffset++;
        }
        if (negateOffset) this.pattern = pattern.substr(negateOffset);
        this.negate = negate;
      }
      // set partial to true to test if, for example,
      // "/a/b" matches the start of "/*/b/*/d"
      // Partial means, if you run out of file before you run
      // out of pattern, then that's fine, as long as all
      // the parts match.
      matchOne(file, pattern, partial) {
        var options = this.options;
        this.debug(
          "matchOne",
          { "this": this, file, pattern }
        );
        this.debug("matchOne", file.length, pattern.length);
        for (var fi = 0, pi = 0, fl = file.length, pl = pattern.length; fi < fl && pi < pl; fi++, pi++) {
          this.debug("matchOne loop");
          var p = pattern[pi];
          var f = file[fi];
          this.debug(pattern, p, f);
          if (p === false) return false;
          if (p === GLOBSTAR) {
            this.debug("GLOBSTAR", [pattern, p, f]);
            var fr = fi;
            var pr = pi + 1;
            if (pr === pl) {
              this.debug("** at the end");
              for (; fi < fl; fi++) {
                if (file[fi] === "." || file[fi] === ".." || !options.dot && file[fi].charAt(0) === ".") return false;
              }
              return true;
            }
            while (fr < fl) {
              var swallowee = file[fr];
              this.debug("\nglobstar while", file, fr, pattern, pr, swallowee);
              if (this.matchOne(file.slice(fr), pattern.slice(pr), partial)) {
                this.debug("globstar found match!", fr, fl, swallowee);
                return true;
              } else {
                if (swallowee === "." || swallowee === ".." || !options.dot && swallowee.charAt(0) === ".") {
                  this.debug("dot detected!", file, fr, pattern, pr);
                  break;
                }
                this.debug("globstar swallow a segment, and continue");
                fr++;
              }
            }
            if (partial) {
              this.debug("\n>>> no match, partial?", file, fr, pattern, pr);
              if (fr === fl) return true;
            }
            return false;
          }
          var hit;
          if (typeof p === "string") {
            hit = f === p;
            this.debug("string match", p, f, hit);
          } else {
            hit = f.match(p);
            this.debug("pattern match", p, f, hit);
          }
          if (!hit) return false;
        }
        if (fi === fl && pi === pl) {
          return true;
        } else if (fi === fl) {
          return partial;
        } else if (pi === pl) {
          return fi === fl - 1 && file[fi] === "";
        }
        throw new Error("wtf?");
      }
      braceExpand() {
        return braceExpand(this.pattern, this.options);
      }
      parse(pattern, isSub) {
        assertValidPattern(pattern);
        const options = this.options;
        if (pattern === "**") {
          if (!options.noglobstar)
            return GLOBSTAR;
          else
            pattern = "*";
        }
        if (pattern === "") return "";
        let re = "";
        let hasMagic = !!options.nocase;
        let escaping = false;
        const patternListStack = [];
        const negativeLists = [];
        let stateChar;
        let inClass = false;
        let reClassStart = -1;
        let classStart = -1;
        let cs;
        let pl;
        let sp;
        const patternStart = pattern.charAt(0) === "." ? "" : options.dot ? "(?!(?:^|\\/)\\.{1,2}(?:$|\\/))" : "(?!\\.)";
        const clearStateChar = () => {
          if (stateChar) {
            switch (stateChar) {
              case "*":
                re += star;
                hasMagic = true;
                break;
              case "?":
                re += qmark;
                hasMagic = true;
                break;
              default:
                re += "\\" + stateChar;
                break;
            }
            this.debug("clearStateChar %j %j", stateChar, re);
            stateChar = false;
          }
        };
        for (let i = 0, c; i < pattern.length && (c = pattern.charAt(i)); i++) {
          this.debug("%s	%s %s %j", pattern, i, re, c);
          if (escaping) {
            if (c === "/") {
              return false;
            }
            if (reSpecials[c]) {
              re += "\\";
            }
            re += c;
            escaping = false;
            continue;
          }
          switch (c) {
            /* istanbul ignore next */
            case "/": {
              return false;
            }
            case "\\":
              clearStateChar();
              escaping = true;
              continue;
            // the various stateChar values
            // for the "extglob" stuff.
            case "?":
            case "*":
            case "+":
            case "@":
            case "!":
              this.debug("%s	%s %s %j <-- stateChar", pattern, i, re, c);
              if (inClass) {
                this.debug("  in class");
                if (c === "!" && i === classStart + 1) c = "^";
                re += c;
                continue;
              }
              this.debug("call clearStateChar %j", stateChar);
              clearStateChar();
              stateChar = c;
              if (options.noext) clearStateChar();
              continue;
            case "(":
              if (inClass) {
                re += "(";
                continue;
              }
              if (!stateChar) {
                re += "\\(";
                continue;
              }
              patternListStack.push({
                type: stateChar,
                start: i - 1,
                reStart: re.length,
                open: plTypes[stateChar].open,
                close: plTypes[stateChar].close
              });
              re += stateChar === "!" ? "(?:(?!(?:" : "(?:";
              this.debug("plType %j %j", stateChar, re);
              stateChar = false;
              continue;
            case ")":
              if (inClass || !patternListStack.length) {
                re += "\\)";
                continue;
              }
              clearStateChar();
              hasMagic = true;
              pl = patternListStack.pop();
              re += pl.close;
              if (pl.type === "!") {
                negativeLists.push(pl);
              }
              pl.reEnd = re.length;
              continue;
            case "|":
              if (inClass || !patternListStack.length) {
                re += "\\|";
                continue;
              }
              clearStateChar();
              re += "|";
              continue;
            // these are mostly the same in regexp and glob
            case "[":
              clearStateChar();
              if (inClass) {
                re += "\\" + c;
                continue;
              }
              inClass = true;
              classStart = i;
              reClassStart = re.length;
              re += c;
              continue;
            case "]":
              if (i === classStart + 1 || !inClass) {
                re += "\\" + c;
                continue;
              }
              cs = pattern.substring(classStart + 1, i);
              try {
                RegExp("[" + cs + "]");
              } catch (er) {
                sp = this.parse(cs, SUBPARSE);
                re = re.substr(0, reClassStart) + "\\[" + sp[0] + "\\]";
                hasMagic = hasMagic || sp[1];
                inClass = false;
                continue;
              }
              hasMagic = true;
              inClass = false;
              re += c;
              continue;
            default:
              clearStateChar();
              if (reSpecials[c] && !(c === "^" && inClass)) {
                re += "\\";
              }
              re += c;
              break;
          }
        }
        if (inClass) {
          cs = pattern.substr(classStart + 1);
          sp = this.parse(cs, SUBPARSE);
          re = re.substr(0, reClassStart) + "\\[" + sp[0];
          hasMagic = hasMagic || sp[1];
        }
        for (pl = patternListStack.pop(); pl; pl = patternListStack.pop()) {
          let tail;
          tail = re.slice(pl.reStart + pl.open.length);
          this.debug("setting tail", re, pl);
          tail = tail.replace(/((?:\\{2}){0,64})(\\?)\|/g, (_, $1, $2) => {
            if (!$2) {
              $2 = "\\";
            }
            return $1 + $1 + $2 + "|";
          });
          this.debug("tail=%j\n   %s", tail, tail, pl, re);
          const t = pl.type === "*" ? star : pl.type === "?" ? qmark : "\\" + pl.type;
          hasMagic = true;
          re = re.slice(0, pl.reStart) + t + "\\(" + tail;
        }
        clearStateChar();
        if (escaping) {
          re += "\\\\";
        }
        const addPatternStart = addPatternStartSet[re.charAt(0)];
        for (let n = negativeLists.length - 1; n > -1; n--) {
          const nl = negativeLists[n];
          const nlBefore = re.slice(0, nl.reStart);
          const nlFirst = re.slice(nl.reStart, nl.reEnd - 8);
          let nlAfter = re.slice(nl.reEnd);
          const nlLast = re.slice(nl.reEnd - 8, nl.reEnd) + nlAfter;
          const openParensBefore = nlBefore.split("(").length - 1;
          let cleanAfter = nlAfter;
          for (let i = 0; i < openParensBefore; i++) {
            cleanAfter = cleanAfter.replace(/\)[+*?]?/, "");
          }
          nlAfter = cleanAfter;
          const dollar = nlAfter === "" && isSub !== SUBPARSE ? "$" : "";
          re = nlBefore + nlFirst + nlAfter + dollar + nlLast;
        }
        if (re !== "" && hasMagic) {
          re = "(?=.)" + re;
        }
        if (addPatternStart) {
          re = patternStart + re;
        }
        if (isSub === SUBPARSE) {
          return [re, hasMagic];
        }
        if (!hasMagic) {
          return globUnescape(pattern);
        }
        const flags = options.nocase ? "i" : "";
        try {
          return Object.assign(new RegExp("^" + re + "$", flags), {
            _glob: pattern,
            _src: re
          });
        } catch (er) {
          return new RegExp("$.");
        }
      }
      makeRe() {
        if (this.regexp || this.regexp === false) return this.regexp;
        const set = this.set;
        if (!set.length) {
          this.regexp = false;
          return this.regexp;
        }
        const options = this.options;
        const twoStar = options.noglobstar ? star : options.dot ? twoStarDot : twoStarNoDot;
        const flags = options.nocase ? "i" : "";
        let re = set.map((pattern) => {
          pattern = pattern.map(
            (p) => typeof p === "string" ? regExpEscape(p) : p === GLOBSTAR ? GLOBSTAR : p._src
          ).reduce((set2, p) => {
            if (!(set2[set2.length - 1] === GLOBSTAR && p === GLOBSTAR)) {
              set2.push(p);
            }
            return set2;
          }, []);
          pattern.forEach((p, i) => {
            if (p !== GLOBSTAR || pattern[i - 1] === GLOBSTAR) {
              return;
            }
            if (i === 0) {
              if (pattern.length > 1) {
                pattern[i + 1] = "(?:\\/|" + twoStar + "\\/)?" + pattern[i + 1];
              } else {
                pattern[i] = twoStar;
              }
            } else if (i === pattern.length - 1) {
              pattern[i - 1] += "(?:\\/|" + twoStar + ")?";
            } else {
              pattern[i - 1] += "(?:\\/|\\/" + twoStar + "\\/)" + pattern[i + 1];
              pattern[i + 1] = GLOBSTAR;
            }
          });
          return pattern.filter((p) => p !== GLOBSTAR).join("/");
        }).join("|");
        re = "^(?:" + re + ")$";
        if (this.negate) re = "^(?!" + re + ").*$";
        try {
          this.regexp = new RegExp(re, flags);
        } catch (ex) {
          this.regexp = false;
        }
        return this.regexp;
      }
      match(f, partial = this.partial) {
        this.debug("match", f, this.pattern);
        if (this.comment) return false;
        if (this.empty) return f === "";
        if (f === "/" && partial) return true;
        const options = this.options;
        if (path3.sep !== "/") {
          f = f.split(path3.sep).join("/");
        }
        f = f.split(slashSplit);
        this.debug(this.pattern, "split", f);
        const set = this.set;
        this.debug(this.pattern, "set", set);
        let filename;
        for (let i = f.length - 1; i >= 0; i--) {
          filename = f[i];
          if (filename) break;
        }
        for (let i = 0; i < set.length; i++) {
          const pattern = set[i];
          let file = f;
          if (options.matchBase && pattern.length === 1) {
            file = [filename];
          }
          const hit = this.matchOne(file, pattern, partial);
          if (hit) {
            if (options.flipNegate) return true;
            return !this.negate;
          }
        }
        if (options.flipNegate) return false;
        return this.negate;
      }
      static defaults(def) {
        return minimatch.defaults(def).Minimatch;
      }
    };
    minimatch.Minimatch = Minimatch;
  }
});
var require_matcher = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/fs-jetpack@5.1.0/node_modules/fs-jetpack/lib/utils/matcher.js"(exports) {
    "use strict";
    var Minimatch = require_minimatch().Minimatch;
    var convertPatternToAbsolutePath = (basePath, pattern) => {
      const hasSlash = pattern.indexOf("/") !== -1;
      const isAbsolute = /^!?\//.test(pattern);
      const isNegated = /^!/.test(pattern);
      let separator;
      if (!isAbsolute && hasSlash) {
        const patternWithoutFirstCharacters = pattern.replace(/^!/, "").replace(/^\.\//, "");
        if (/\/$/.test(basePath)) {
          separator = "";
        } else {
          separator = "/";
        }
        if (isNegated) {
          return `!${basePath}${separator}${patternWithoutFirstCharacters}`;
        }
        return `${basePath}${separator}${patternWithoutFirstCharacters}`;
      }
      return pattern;
    };
    exports.create = (basePath, patterns, ignoreCase) => {
      let normalizedPatterns;
      if (typeof patterns === "string") {
        normalizedPatterns = [patterns];
      } else {
        normalizedPatterns = patterns;
      }
      const matchers = normalizedPatterns.map((pattern) => {
        return convertPatternToAbsolutePath(basePath, pattern);
      }).map((pattern) => {
        return new Minimatch(pattern, {
          matchBase: true,
          nocomment: true,
          nocase: ignoreCase || false,
          dot: true,
          windowsPathsNoEscape: true
        });
      });
      const performMatch = (absolutePath) => {
        let mode = "matching";
        let weHaveMatch = false;
        let currentMatcher;
        let i;
        for (i = 0; i < matchers.length; i += 1) {
          currentMatcher = matchers[i];
          if (currentMatcher.negate) {
            mode = "negation";
            if (i === 0) {
              weHaveMatch = true;
            }
          }
          if (mode === "negation" && weHaveMatch && !currentMatcher.match(absolutePath)) {
            return false;
          }
          if (mode === "matching" && !weHaveMatch) {
            weHaveMatch = currentMatcher.match(absolutePath);
          }
        }
        return weHaveMatch;
      };
      return performMatch;
    };
  }
});
var require_find = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/fs-jetpack@5.1.0/node_modules/fs-jetpack/lib/find.js"(exports) {
    "use strict";
    var pathUtil = (0, import_chunk_2ESYSVXG.__require)("path");
    var treeWalker = require_tree_walker();
    var inspect = require_inspect();
    var matcher = require_matcher();
    var validate = require_validate();
    var validateInput = (methodName, path3, options) => {
      const methodSignature = `${methodName}([path], options)`;
      validate.argument(methodSignature, "path", path3, ["string"]);
      validate.options(methodSignature, "options", options, {
        matching: ["string", "array of string"],
        filter: ["function"],
        files: ["boolean"],
        directories: ["boolean"],
        recursive: ["boolean"],
        ignoreCase: ["boolean"]
      });
    };
    var normalizeOptions = (options) => {
      const opts = options || {};
      if (opts.matching === void 0) {
        opts.matching = "*";
      }
      if (opts.files === void 0) {
        opts.files = true;
      }
      if (opts.ignoreCase === void 0) {
        opts.ignoreCase = false;
      }
      if (opts.directories === void 0) {
        opts.directories = false;
      }
      if (opts.recursive === void 0) {
        opts.recursive = true;
      }
      return opts;
    };
    var processFoundPaths = (foundPaths, cwd) => {
      return foundPaths.map((path3) => {
        return pathUtil.relative(cwd, path3);
      });
    };
    var generatePathDoesntExistError = (path3) => {
      const err = new Error(`Path you want to find stuff in doesn't exist ${path3}`);
      err.code = "ENOENT";
      return err;
    };
    var generatePathNotDirectoryError = (path3) => {
      const err = new Error(
        `Path you want to find stuff in must be a directory ${path3}`
      );
      err.code = "ENOTDIR";
      return err;
    };
    var findSync = (path3, options) => {
      const foundAbsolutePaths = [];
      const matchesAnyOfGlobs = matcher.create(
        path3,
        options.matching,
        options.ignoreCase
      );
      let maxLevelsDeep = Infinity;
      if (options.recursive === false) {
        maxLevelsDeep = 1;
      }
      treeWalker.sync(
        path3,
        {
          maxLevelsDeep,
          symlinks: "follow",
          inspectOptions: { times: true, absolutePath: true }
        },
        (itemPath, item) => {
          if (item && itemPath !== path3 && matchesAnyOfGlobs(itemPath)) {
            const weHaveMatch = item.type === "file" && options.files === true || item.type === "dir" && options.directories === true;
            if (weHaveMatch) {
              if (options.filter) {
                const passedThroughFilter = options.filter(item);
                if (passedThroughFilter) {
                  foundAbsolutePaths.push(itemPath);
                }
              } else {
                foundAbsolutePaths.push(itemPath);
              }
            }
          }
        }
      );
      foundAbsolutePaths.sort();
      return processFoundPaths(foundAbsolutePaths, options.cwd);
    };
    var findSyncInit = (path3, options) => {
      const entryPointInspect = inspect.sync(path3, { symlinks: "follow" });
      if (entryPointInspect === void 0) {
        throw generatePathDoesntExistError(path3);
      } else if (entryPointInspect.type !== "dir") {
        throw generatePathNotDirectoryError(path3);
      }
      return findSync(path3, normalizeOptions(options));
    };
    var findAsync = (path3, options) => {
      return new Promise((resolve, reject) => {
        const foundAbsolutePaths = [];
        const matchesAnyOfGlobs = matcher.create(
          path3,
          options.matching,
          options.ignoreCase
        );
        let maxLevelsDeep = Infinity;
        if (options.recursive === false) {
          maxLevelsDeep = 1;
        }
        let waitingForFiltersToFinish = 0;
        let treeWalkerDone = false;
        const maybeDone = () => {
          if (treeWalkerDone && waitingForFiltersToFinish === 0) {
            foundAbsolutePaths.sort();
            resolve(processFoundPaths(foundAbsolutePaths, options.cwd));
          }
        };
        treeWalker.async(
          path3,
          {
            maxLevelsDeep,
            symlinks: "follow",
            inspectOptions: { times: true, absolutePath: true }
          },
          (itemPath, item) => {
            if (item && itemPath !== path3 && matchesAnyOfGlobs(itemPath)) {
              const weHaveMatch = item.type === "file" && options.files === true || item.type === "dir" && options.directories === true;
              if (weHaveMatch) {
                if (options.filter) {
                  const passedThroughFilter = options.filter(item);
                  const isPromise = typeof passedThroughFilter.then === "function";
                  if (isPromise) {
                    waitingForFiltersToFinish += 1;
                    passedThroughFilter.then((passedThroughFilterResult) => {
                      if (passedThroughFilterResult) {
                        foundAbsolutePaths.push(itemPath);
                      }
                      waitingForFiltersToFinish -= 1;
                      maybeDone();
                    }).catch((err) => {
                      reject(err);
                    });
                  } else if (passedThroughFilter) {
                    foundAbsolutePaths.push(itemPath);
                  }
                } else {
                  foundAbsolutePaths.push(itemPath);
                }
              }
            }
          },
          (err) => {
            if (err) {
              reject(err);
            } else {
              treeWalkerDone = true;
              maybeDone();
            }
          }
        );
      });
    };
    var findAsyncInit = (path3, options) => {
      return inspect.async(path3, { symlinks: "follow" }).then((entryPointInspect) => {
        if (entryPointInspect === void 0) {
          throw generatePathDoesntExistError(path3);
        } else if (entryPointInspect.type !== "dir") {
          throw generatePathNotDirectoryError(path3);
        }
        return findAsync(path3, normalizeOptions(options));
      });
    };
    exports.validateInput = validateInput;
    exports.sync = findSyncInit;
    exports.async = findAsyncInit;
  }
});
var require_inspect_tree = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/fs-jetpack@5.1.0/node_modules/fs-jetpack/lib/inspect_tree.js"(exports) {
    "use strict";
    var crypto = (0, import_chunk_2ESYSVXG.__require)("crypto");
    var pathUtil = (0, import_chunk_2ESYSVXG.__require)("path");
    var inspect = require_inspect();
    var list = require_list();
    var validate = require_validate();
    var treeWalker = require_tree_walker();
    var validateInput = (methodName, path3, options) => {
      const methodSignature = `${methodName}(path, [options])`;
      validate.argument(methodSignature, "path", path3, ["string"]);
      validate.options(methodSignature, "options", options, {
        checksum: ["string"],
        relativePath: ["boolean"],
        times: ["boolean"],
        symlinks: ["string"]
      });
      if (options && options.checksum !== void 0 && inspect.supportedChecksumAlgorithms.indexOf(options.checksum) === -1) {
        throw new Error(
          `Argument "options.checksum" passed to ${methodSignature} must have one of values: ${inspect.supportedChecksumAlgorithms.join(
            ", "
          )}`
        );
      }
      if (options && options.symlinks !== void 0 && inspect.symlinkOptions.indexOf(options.symlinks) === -1) {
        throw new Error(
          `Argument "options.symlinks" passed to ${methodSignature} must have one of values: ${inspect.symlinkOptions.join(
            ", "
          )}`
        );
      }
    };
    var relativePathInTree = (parentInspectObj, inspectObj) => {
      if (parentInspectObj === void 0) {
        return ".";
      }
      return parentInspectObj.relativePath + "/" + inspectObj.name;
    };
    var checksumOfDir = (inspectList, algo) => {
      const hash = crypto.createHash(algo);
      inspectList.forEach((inspectObj) => {
        hash.update(inspectObj.name + inspectObj[algo]);
      });
      return hash.digest("hex");
    };
    var calculateTreeDependentProperties = (parentInspectObj, inspectObj, options) => {
      if (options.relativePath) {
        inspectObj.relativePath = relativePathInTree(parentInspectObj, inspectObj);
      }
      if (inspectObj.type === "dir") {
        inspectObj.children.forEach((childInspectObj) => {
          calculateTreeDependentProperties(inspectObj, childInspectObj, options);
        });
        inspectObj.size = 0;
        inspectObj.children.sort((a, b) => {
          if (a.type === "dir" && b.type === "file") {
            return -1;
          }
          if (a.type === "file" && b.type === "dir") {
            return 1;
          }
          return a.name.localeCompare(b.name);
        });
        inspectObj.children.forEach((child) => {
          inspectObj.size += child.size || 0;
        });
        if (options.checksum) {
          inspectObj[options.checksum] = checksumOfDir(
            inspectObj.children,
            options.checksum
          );
        }
      }
    };
    var findParentInTree = (treeNode, pathChain, item) => {
      const name = pathChain[0];
      if (pathChain.length > 1) {
        const itemInTreeForPathChain = treeNode.children.find((child) => {
          return child.name === name;
        });
        return findParentInTree(itemInTreeForPathChain, pathChain.slice(1), item);
      }
      return treeNode;
    };
    var inspectTreeSync = (path3, opts) => {
      const options = opts || {};
      let tree;
      treeWalker.sync(path3, { inspectOptions: options }, (itemPath, item) => {
        if (item) {
          if (item.type === "dir") {
            item.children = [];
          }
          const relativePath = pathUtil.relative(path3, itemPath);
          if (relativePath === "") {
            tree = item;
          } else {
            const parentItem = findParentInTree(
              tree,
              relativePath.split(pathUtil.sep),
              item
            );
            parentItem.children.push(item);
          }
        }
      });
      if (tree) {
        calculateTreeDependentProperties(void 0, tree, options);
      }
      return tree;
    };
    var inspectTreeAsync = (path3, opts) => {
      const options = opts || {};
      let tree;
      return new Promise((resolve, reject) => {
        treeWalker.async(
          path3,
          { inspectOptions: options },
          (itemPath, item) => {
            if (item) {
              if (item.type === "dir") {
                item.children = [];
              }
              const relativePath = pathUtil.relative(path3, itemPath);
              if (relativePath === "") {
                tree = item;
              } else {
                const parentItem = findParentInTree(
                  tree,
                  relativePath.split(pathUtil.sep),
                  item
                );
                parentItem.children.push(item);
              }
            }
          },
          (err) => {
            if (err) {
              reject(err);
            } else {
              if (tree) {
                calculateTreeDependentProperties(void 0, tree, options);
              }
              resolve(tree);
            }
          }
        );
      });
    };
    exports.validateInput = validateInput;
    exports.sync = inspectTreeSync;
    exports.async = inspectTreeAsync;
  }
});
var require_exists = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/fs-jetpack@5.1.0/node_modules/fs-jetpack/lib/exists.js"(exports) {
    "use strict";
    var fs = require_fs();
    var validate = require_validate();
    var validateInput = (methodName, path3) => {
      const methodSignature = `${methodName}(path)`;
      validate.argument(methodSignature, "path", path3, ["string"]);
    };
    var existsSync = (path3) => {
      try {
        const stat = fs.statSync(path3);
        if (stat.isDirectory()) {
          return "dir";
        } else if (stat.isFile()) {
          return "file";
        }
        return "other";
      } catch (err) {
        if (err.code !== "ENOENT") {
          throw err;
        }
      }
      return false;
    };
    var existsAsync = (path3) => {
      return new Promise((resolve, reject) => {
        fs.stat(path3).then((stat) => {
          if (stat.isDirectory()) {
            resolve("dir");
          } else if (stat.isFile()) {
            resolve("file");
          } else {
            resolve("other");
          }
        }).catch((err) => {
          if (err.code === "ENOENT") {
            resolve(false);
          } else {
            reject(err);
          }
        });
      });
    };
    exports.validateInput = validateInput;
    exports.sync = existsSync;
    exports.async = existsAsync;
  }
});
var require_copy = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/fs-jetpack@5.1.0/node_modules/fs-jetpack/lib/copy.js"(exports) {
    "use strict";
    var pathUtil = (0, import_chunk_2ESYSVXG.__require)("path");
    var fs = require_fs();
    var dir = require_dir();
    var exists = require_exists();
    var inspect = require_inspect();
    var write = require_write();
    var matcher = require_matcher();
    var fileMode = require_mode2();
    var treeWalker = require_tree_walker();
    var validate = require_validate();
    var validateInput = (methodName, from, to, options) => {
      const methodSignature = `${methodName}(from, to, [options])`;
      validate.argument(methodSignature, "from", from, ["string"]);
      validate.argument(methodSignature, "to", to, ["string"]);
      validate.options(methodSignature, "options", options, {
        overwrite: ["boolean", "function"],
        matching: ["string", "array of string"],
        ignoreCase: ["boolean"]
      });
    };
    var parseOptions = (options, from) => {
      const opts = options || {};
      const parsedOptions = {};
      if (opts.ignoreCase === void 0) {
        opts.ignoreCase = false;
      }
      parsedOptions.overwrite = opts.overwrite;
      if (opts.matching) {
        parsedOptions.allowedToCopy = matcher.create(
          from,
          opts.matching,
          opts.ignoreCase
        );
      } else {
        parsedOptions.allowedToCopy = () => {
          return true;
        };
      }
      return parsedOptions;
    };
    var generateNoSourceError = (path3) => {
      const err = new Error(`Path to copy doesn't exist ${path3}`);
      err.code = "ENOENT";
      return err;
    };
    var generateDestinationExistsError = (path3) => {
      const err = new Error(`Destination path already exists ${path3}`);
      err.code = "EEXIST";
      return err;
    };
    var inspectOptions = {
      mode: true,
      symlinks: "report",
      times: true,
      absolutePath: true
    };
    var shouldThrowDestinationExistsError = (context) => {
      return typeof context.opts.overwrite !== "function" && context.opts.overwrite !== true;
    };
    var checksBeforeCopyingSync = (from, to, opts) => {
      if (!exists.sync(from)) {
        throw generateNoSourceError(from);
      }
      if (exists.sync(to) && !opts.overwrite) {
        throw generateDestinationExistsError(to);
      }
    };
    var canOverwriteItSync = (context) => {
      if (typeof context.opts.overwrite === "function") {
        const destInspectData = inspect.sync(context.destPath, inspectOptions);
        return context.opts.overwrite(context.srcInspectData, destInspectData);
      }
      return context.opts.overwrite === true;
    };
    var copyFileSync = (srcPath, destPath, mode, context) => {
      const data = fs.readFileSync(srcPath);
      try {
        fs.writeFileSync(destPath, data, { mode, flag: "wx" });
      } catch (err) {
        if (err.code === "ENOENT") {
          write.sync(destPath, data, { mode });
        } else if (err.code === "EEXIST") {
          if (canOverwriteItSync(context)) {
            fs.writeFileSync(destPath, data, { mode });
          } else if (shouldThrowDestinationExistsError(context)) {
            throw generateDestinationExistsError(context.destPath);
          }
        } else {
          throw err;
        }
      }
    };
    var copySymlinkSync = (from, to) => {
      const symlinkPointsAt = fs.readlinkSync(from);
      try {
        fs.symlinkSync(symlinkPointsAt, to);
      } catch (err) {
        if (err.code === "EEXIST") {
          fs.unlinkSync(to);
          fs.symlinkSync(symlinkPointsAt, to);
        } else {
          throw err;
        }
      }
    };
    var copyItemSync = (srcPath, srcInspectData, destPath, opts) => {
      const context = { srcPath, destPath, srcInspectData, opts };
      const mode = fileMode.normalizeFileMode(srcInspectData.mode);
      if (srcInspectData.type === "dir") {
        dir.createSync(destPath, { mode });
      } else if (srcInspectData.type === "file") {
        copyFileSync(srcPath, destPath, mode, context);
      } else if (srcInspectData.type === "symlink") {
        copySymlinkSync(srcPath, destPath);
      }
    };
    var copySync = (from, to, options) => {
      const opts = parseOptions(options, from);
      checksBeforeCopyingSync(from, to, opts);
      treeWalker.sync(from, { inspectOptions }, (srcPath, srcInspectData) => {
        const rel = pathUtil.relative(from, srcPath);
        const destPath = pathUtil.resolve(to, rel);
        if (opts.allowedToCopy(srcPath, destPath, srcInspectData)) {
          copyItemSync(srcPath, srcInspectData, destPath, opts);
        }
      });
    };
    var checksBeforeCopyingAsync = (from, to, opts) => {
      return exists.async(from).then((srcPathExists) => {
        if (!srcPathExists) {
          throw generateNoSourceError(from);
        } else {
          return exists.async(to);
        }
      }).then((destPathExists) => {
        if (destPathExists && !opts.overwrite) {
          throw generateDestinationExistsError(to);
        }
      });
    };
    var canOverwriteItAsync = (context) => {
      return new Promise((resolve, reject) => {
        if (typeof context.opts.overwrite === "function") {
          inspect.async(context.destPath, inspectOptions).then((destInspectData) => {
            resolve(
              context.opts.overwrite(context.srcInspectData, destInspectData)
            );
          }).catch(reject);
        } else {
          resolve(context.opts.overwrite === true);
        }
      });
    };
    var copyFileAsync = (srcPath, destPath, mode, context, runOptions) => {
      return new Promise((resolve, reject) => {
        const runOpts = runOptions || {};
        let flags = "wx";
        if (runOpts.overwrite) {
          flags = "w";
        }
        const readStream = fs.createReadStream(srcPath);
        const writeStream = fs.createWriteStream(destPath, { mode, flags });
        readStream.on("error", reject);
        writeStream.on("error", (err) => {
          readStream.resume();
          if (err.code === "ENOENT") {
            dir.createAsync(pathUtil.dirname(destPath)).then(() => {
              copyFileAsync(srcPath, destPath, mode, context).then(
                resolve,
                reject
              );
            }).catch(reject);
          } else if (err.code === "EEXIST") {
            canOverwriteItAsync(context).then((canOverwite) => {
              if (canOverwite) {
                copyFileAsync(srcPath, destPath, mode, context, {
                  overwrite: true
                }).then(resolve, reject);
              } else if (shouldThrowDestinationExistsError(context)) {
                reject(generateDestinationExistsError(destPath));
              } else {
                resolve();
              }
            }).catch(reject);
          } else {
            reject(err);
          }
        });
        writeStream.on("finish", resolve);
        readStream.pipe(writeStream);
      });
    };
    var copySymlinkAsync = (from, to) => {
      return fs.readlink(from).then((symlinkPointsAt) => {
        return new Promise((resolve, reject) => {
          fs.symlink(symlinkPointsAt, to).then(resolve).catch((err) => {
            if (err.code === "EEXIST") {
              fs.unlink(to).then(() => {
                return fs.symlink(symlinkPointsAt, to);
              }).then(resolve, reject);
            } else {
              reject(err);
            }
          });
        });
      });
    };
    var copyItemAsync = (srcPath, srcInspectData, destPath, opts) => {
      const context = { srcPath, destPath, srcInspectData, opts };
      const mode = fileMode.normalizeFileMode(srcInspectData.mode);
      if (srcInspectData.type === "dir") {
        return dir.createAsync(destPath, { mode });
      } else if (srcInspectData.type === "file") {
        return copyFileAsync(srcPath, destPath, mode, context);
      } else if (srcInspectData.type === "symlink") {
        return copySymlinkAsync(srcPath, destPath);
      }
      return Promise.resolve();
    };
    var copyAsync = (from, to, options) => {
      return new Promise((resolve, reject) => {
        const opts = parseOptions(options, from);
        checksBeforeCopyingAsync(from, to, opts).then(() => {
          let allFilesDelivered = false;
          let filesInProgress = 0;
          treeWalker.async(
            from,
            { inspectOptions },
            (srcPath, item) => {
              if (item) {
                const rel = pathUtil.relative(from, srcPath);
                const destPath = pathUtil.resolve(to, rel);
                if (opts.allowedToCopy(srcPath, item, destPath)) {
                  filesInProgress += 1;
                  copyItemAsync(srcPath, item, destPath, opts).then(() => {
                    filesInProgress -= 1;
                    if (allFilesDelivered && filesInProgress === 0) {
                      resolve();
                    }
                  }).catch(reject);
                }
              }
            },
            (err) => {
              if (err) {
                reject(err);
              } else {
                allFilesDelivered = true;
                if (allFilesDelivered && filesInProgress === 0) {
                  resolve();
                }
              }
            }
          );
        }).catch(reject);
      });
    };
    exports.validateInput = validateInput;
    exports.sync = copySync;
    exports.async = copyAsync;
  }
});
var require_move = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/fs-jetpack@5.1.0/node_modules/fs-jetpack/lib/move.js"(exports) {
    "use strict";
    var pathUtil = (0, import_chunk_2ESYSVXG.__require)("path");
    var fs = require_fs();
    var validate = require_validate();
    var copy = require_copy();
    var dir = require_dir();
    var exists = require_exists();
    var remove = require_remove();
    var validateInput = (methodName, from, to, options) => {
      const methodSignature = `${methodName}(from, to, [options])`;
      validate.argument(methodSignature, "from", from, ["string"]);
      validate.argument(methodSignature, "to", to, ["string"]);
      validate.options(methodSignature, "options", options, {
        overwrite: ["boolean"]
      });
    };
    var parseOptions = (options) => {
      const opts = options || {};
      return opts;
    };
    var generateDestinationExistsError = (path3) => {
      const err = new Error(`Destination path already exists ${path3}`);
      err.code = "EEXIST";
      return err;
    };
    var generateSourceDoesntExistError = (path3) => {
      const err = new Error(`Path to move doesn't exist ${path3}`);
      err.code = "ENOENT";
      return err;
    };
    var moveSync = (from, to, options) => {
      const opts = parseOptions(options);
      if (exists.sync(to) !== false && opts.overwrite !== true) {
        throw generateDestinationExistsError(to);
      }
      try {
        fs.renameSync(from, to);
      } catch (err) {
        if (err.code === "EISDIR" || err.code === "EPERM") {
          remove.sync(to);
          fs.renameSync(from, to);
        } else if (err.code === "EXDEV") {
          copy.sync(from, to, { overwrite: true });
          remove.sync(from);
        } else if (err.code === "ENOENT") {
          if (!exists.sync(from)) {
            throw generateSourceDoesntExistError(from);
          }
          dir.createSync(pathUtil.dirname(to));
          fs.renameSync(from, to);
        } else {
          throw err;
        }
      }
    };
    var ensureDestinationPathExistsAsync = (to) => {
      return new Promise((resolve, reject) => {
        const destDir = pathUtil.dirname(to);
        exists.async(destDir).then((dstExists) => {
          if (!dstExists) {
            dir.createAsync(destDir).then(resolve, reject);
          } else {
            reject();
          }
        }).catch(reject);
      });
    };
    var moveAsync = (from, to, options) => {
      const opts = parseOptions(options);
      return new Promise((resolve, reject) => {
        exists.async(to).then((destinationExists) => {
          if (destinationExists !== false && opts.overwrite !== true) {
            reject(generateDestinationExistsError(to));
          } else {
            fs.rename(from, to).then(resolve).catch((err) => {
              if (err.code === "EISDIR" || err.code === "EPERM") {
                remove.async(to).then(() => fs.rename(from, to)).then(resolve, reject);
              } else if (err.code === "EXDEV") {
                copy.async(from, to, { overwrite: true }).then(() => remove.async(from)).then(resolve, reject);
              } else if (err.code === "ENOENT") {
                exists.async(from).then((srcExists) => {
                  if (!srcExists) {
                    reject(generateSourceDoesntExistError(from));
                  } else {
                    ensureDestinationPathExistsAsync(to).then(() => {
                      return fs.rename(from, to);
                    }).then(resolve, reject);
                  }
                }).catch(reject);
              } else {
                reject(err);
              }
            });
          }
        });
      });
    };
    exports.validateInput = validateInput;
    exports.sync = moveSync;
    exports.async = moveAsync;
  }
});
var require_read = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/fs-jetpack@5.1.0/node_modules/fs-jetpack/lib/read.js"(exports) {
    "use strict";
    var fs = require_fs();
    var validate = require_validate();
    var supportedReturnAs = ["utf8", "buffer", "json", "jsonWithDates"];
    var validateInput = (methodName, path3, returnAs) => {
      const methodSignature = `${methodName}(path, returnAs)`;
      validate.argument(methodSignature, "path", path3, ["string"]);
      validate.argument(methodSignature, "returnAs", returnAs, [
        "string",
        "undefined"
      ]);
      if (returnAs && supportedReturnAs.indexOf(returnAs) === -1) {
        throw new Error(
          `Argument "returnAs" passed to ${methodSignature} must have one of values: ${supportedReturnAs.join(
            ", "
          )}`
        );
      }
    };
    var jsonDateParser = (key, value) => {
      const reISO = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|(\+|-)([\d|:]*))?$/;
      if (typeof value === "string") {
        if (reISO.exec(value)) {
          return new Date(value);
        }
      }
      return value;
    };
    var makeNicerJsonParsingError = (path3, err) => {
      const nicerError = new Error(
        `JSON parsing failed while reading ${path3} [${err}]`
      );
      nicerError.originalError = err;
      return nicerError;
    };
    var readSync = (path3, returnAs) => {
      const retAs = returnAs || "utf8";
      let data;
      let encoding = "utf8";
      if (retAs === "buffer") {
        encoding = null;
      }
      try {
        data = fs.readFileSync(path3, { encoding });
      } catch (err) {
        if (err.code === "ENOENT") {
          return void 0;
        }
        throw err;
      }
      try {
        if (retAs === "json") {
          data = JSON.parse(data);
        } else if (retAs === "jsonWithDates") {
          data = JSON.parse(data, jsonDateParser);
        }
      } catch (err) {
        throw makeNicerJsonParsingError(path3, err);
      }
      return data;
    };
    var readAsync = (path3, returnAs) => {
      return new Promise((resolve, reject) => {
        const retAs = returnAs || "utf8";
        let encoding = "utf8";
        if (retAs === "buffer") {
          encoding = null;
        }
        fs.readFile(path3, { encoding }).then((data) => {
          try {
            if (retAs === "json") {
              resolve(JSON.parse(data));
            } else if (retAs === "jsonWithDates") {
              resolve(JSON.parse(data, jsonDateParser));
            } else {
              resolve(data);
            }
          } catch (err) {
            reject(makeNicerJsonParsingError(path3, err));
          }
        }).catch((err) => {
          if (err.code === "ENOENT") {
            resolve(void 0);
          } else {
            reject(err);
          }
        });
      });
    };
    exports.validateInput = validateInput;
    exports.sync = readSync;
    exports.async = readAsync;
  }
});
var require_rename = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/fs-jetpack@5.1.0/node_modules/fs-jetpack/lib/rename.js"(exports) {
    "use strict";
    var pathUtil = (0, import_chunk_2ESYSVXG.__require)("path");
    var move = require_move();
    var validate = require_validate();
    var validateInput = (methodName, path3, newName, options) => {
      const methodSignature = `${methodName}(path, newName, [options])`;
      validate.argument(methodSignature, "path", path3, ["string"]);
      validate.argument(methodSignature, "newName", newName, ["string"]);
      validate.options(methodSignature, "options", options, {
        overwrite: ["boolean"]
      });
      if (pathUtil.basename(newName) !== newName) {
        throw new Error(
          `Argument "newName" passed to ${methodSignature} should be a filename, not a path. Received "${newName}"`
        );
      }
    };
    var renameSync = (path3, newName, options) => {
      const newPath = pathUtil.join(pathUtil.dirname(path3), newName);
      move.sync(path3, newPath, options);
    };
    var renameAsync = (path3, newName, options) => {
      const newPath = pathUtil.join(pathUtil.dirname(path3), newName);
      return move.async(path3, newPath, options);
    };
    exports.validateInput = validateInput;
    exports.sync = renameSync;
    exports.async = renameAsync;
  }
});
var require_symlink = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/fs-jetpack@5.1.0/node_modules/fs-jetpack/lib/symlink.js"(exports) {
    "use strict";
    var pathUtil = (0, import_chunk_2ESYSVXG.__require)("path");
    var fs = require_fs();
    var validate = require_validate();
    var dir = require_dir();
    var validateInput = (methodName, symlinkValue, path3) => {
      const methodSignature = `${methodName}(symlinkValue, path)`;
      validate.argument(methodSignature, "symlinkValue", symlinkValue, ["string"]);
      validate.argument(methodSignature, "path", path3, ["string"]);
    };
    var symlinkSync = (symlinkValue, path3) => {
      try {
        fs.symlinkSync(symlinkValue, path3);
      } catch (err) {
        if (err.code === "ENOENT") {
          dir.createSync(pathUtil.dirname(path3));
          fs.symlinkSync(symlinkValue, path3);
        } else {
          throw err;
        }
      }
    };
    var symlinkAsync = (symlinkValue, path3) => {
      return new Promise((resolve, reject) => {
        fs.symlink(symlinkValue, path3).then(resolve).catch((err) => {
          if (err.code === "ENOENT") {
            dir.createAsync(pathUtil.dirname(path3)).then(() => {
              return fs.symlink(symlinkValue, path3);
            }).then(resolve, reject);
          } else {
            reject(err);
          }
        });
      });
    };
    exports.validateInput = validateInput;
    exports.sync = symlinkSync;
    exports.async = symlinkAsync;
  }
});
var require_streams = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/fs-jetpack@5.1.0/node_modules/fs-jetpack/lib/streams.js"(exports) {
    "use strict";
    var fs = (0, import_chunk_2ESYSVXG.__require)("fs");
    exports.createWriteStream = fs.createWriteStream;
    exports.createReadStream = fs.createReadStream;
  }
});
var require_tmp_dir = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/fs-jetpack@5.1.0/node_modules/fs-jetpack/lib/tmp_dir.js"(exports) {
    "use strict";
    var pathUtil = (0, import_chunk_2ESYSVXG.__require)("path");
    var os2 = (0, import_chunk_2ESYSVXG.__require)("os");
    var crypto = (0, import_chunk_2ESYSVXG.__require)("crypto");
    var dir = require_dir();
    var fs = require_fs();
    var validate = require_validate();
    var validateInput = (methodName, options) => {
      const methodSignature = `${methodName}([options])`;
      validate.options(methodSignature, "options", options, {
        prefix: ["string"],
        basePath: ["string"]
      });
    };
    var getOptionsDefaults = (passedOptions, cwdPath) => {
      passedOptions = passedOptions || {};
      const options = {};
      if (typeof passedOptions.prefix !== "string") {
        options.prefix = "";
      } else {
        options.prefix = passedOptions.prefix;
      }
      if (typeof passedOptions.basePath === "string") {
        options.basePath = pathUtil.resolve(cwdPath, passedOptions.basePath);
      } else {
        options.basePath = os2.tmpdir();
      }
      return options;
    };
    var randomStringLength = 32;
    var tmpDirSync = (cwdPath, passedOptions) => {
      const options = getOptionsDefaults(passedOptions, cwdPath);
      const randomString = crypto.randomBytes(randomStringLength / 2).toString("hex");
      const dirPath = pathUtil.join(
        options.basePath,
        options.prefix + randomString
      );
      try {
        fs.mkdirSync(dirPath);
      } catch (err) {
        if (err.code === "ENOENT") {
          dir.sync(dirPath);
        } else {
          throw err;
        }
      }
      return dirPath;
    };
    var tmpDirAsync = (cwdPath, passedOptions) => {
      return new Promise((resolve, reject) => {
        const options = getOptionsDefaults(passedOptions, cwdPath);
        crypto.randomBytes(randomStringLength / 2, (err, bytes) => {
          if (err) {
            reject(err);
          } else {
            const randomString = bytes.toString("hex");
            const dirPath = pathUtil.join(
              options.basePath,
              options.prefix + randomString
            );
            fs.mkdir(dirPath, (err2) => {
              if (err2) {
                if (err2.code === "ENOENT") {
                  dir.async(dirPath).then(() => {
                    resolve(dirPath);
                  }, reject);
                } else {
                  reject(err2);
                }
              } else {
                resolve(dirPath);
              }
            });
          }
        });
      });
    };
    exports.validateInput = validateInput;
    exports.sync = tmpDirSync;
    exports.async = tmpDirAsync;
  }
});
var require_jetpack = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/fs-jetpack@5.1.0/node_modules/fs-jetpack/lib/jetpack.js"(exports, module2) {
    "use strict";
    var util = (0, import_chunk_2ESYSVXG.__require)("util");
    var pathUtil = (0, import_chunk_2ESYSVXG.__require)("path");
    var append = require_append();
    var dir = require_dir();
    var file = require_file();
    var find = require_find();
    var inspect = require_inspect();
    var inspectTree = require_inspect_tree();
    var copy = require_copy();
    var exists = require_exists();
    var list = require_list();
    var move = require_move();
    var read = require_read();
    var remove = require_remove();
    var rename = require_rename();
    var symlink = require_symlink();
    var streams = require_streams();
    var tmpDir = require_tmp_dir();
    var write = require_write();
    var jetpackContext = (cwdPath) => {
      const getCwdPath = () => {
        return cwdPath || process.cwd();
      };
      const cwd = function() {
        if (arguments.length === 0) {
          return getCwdPath();
        }
        const args = Array.prototype.slice.call(arguments);
        const pathParts = [getCwdPath()].concat(args);
        return jetpackContext(pathUtil.resolve.apply(null, pathParts));
      };
      const resolvePath = (path3) => {
        return pathUtil.resolve(getCwdPath(), path3);
      };
      const getPath = function() {
        Array.prototype.unshift.call(arguments, getCwdPath());
        return pathUtil.resolve.apply(null, arguments);
      };
      const normalizeOptions = (options) => {
        const opts = options || {};
        opts.cwd = getCwdPath();
        return opts;
      };
      const api = {
        cwd,
        path: getPath,
        append: (path3, data, options) => {
          append.validateInput("append", path3, data, options);
          append.sync(resolvePath(path3), data, options);
        },
        appendAsync: (path3, data, options) => {
          append.validateInput("appendAsync", path3, data, options);
          return append.async(resolvePath(path3), data, options);
        },
        copy: (from, to, options) => {
          copy.validateInput("copy", from, to, options);
          copy.sync(resolvePath(from), resolvePath(to), options);
        },
        copyAsync: (from, to, options) => {
          copy.validateInput("copyAsync", from, to, options);
          return copy.async(resolvePath(from), resolvePath(to), options);
        },
        createWriteStream: (path3, options) => {
          return streams.createWriteStream(resolvePath(path3), options);
        },
        createReadStream: (path3, options) => {
          return streams.createReadStream(resolvePath(path3), options);
        },
        dir: (path3, criteria) => {
          dir.validateInput("dir", path3, criteria);
          const normalizedPath = resolvePath(path3);
          dir.sync(normalizedPath, criteria);
          return cwd(normalizedPath);
        },
        dirAsync: (path3, criteria) => {
          dir.validateInput("dirAsync", path3, criteria);
          return new Promise((resolve, reject) => {
            const normalizedPath = resolvePath(path3);
            dir.async(normalizedPath, criteria).then(() => {
              resolve(cwd(normalizedPath));
            }, reject);
          });
        },
        exists: (path3) => {
          exists.validateInput("exists", path3);
          return exists.sync(resolvePath(path3));
        },
        existsAsync: (path3) => {
          exists.validateInput("existsAsync", path3);
          return exists.async(resolvePath(path3));
        },
        file: (path3, criteria) => {
          file.validateInput("file", path3, criteria);
          file.sync(resolvePath(path3), criteria);
          return api;
        },
        fileAsync: (path3, criteria) => {
          file.validateInput("fileAsync", path3, criteria);
          return new Promise((resolve, reject) => {
            file.async(resolvePath(path3), criteria).then(() => {
              resolve(api);
            }, reject);
          });
        },
        find: (startPath, options) => {
          if (typeof options === "undefined" && typeof startPath === "object") {
            options = startPath;
            startPath = ".";
          }
          find.validateInput("find", startPath, options);
          return find.sync(resolvePath(startPath), normalizeOptions(options));
        },
        findAsync: (startPath, options) => {
          if (typeof options === "undefined" && typeof startPath === "object") {
            options = startPath;
            startPath = ".";
          }
          find.validateInput("findAsync", startPath, options);
          return find.async(resolvePath(startPath), normalizeOptions(options));
        },
        inspect: (path3, fieldsToInclude) => {
          inspect.validateInput("inspect", path3, fieldsToInclude);
          return inspect.sync(resolvePath(path3), fieldsToInclude);
        },
        inspectAsync: (path3, fieldsToInclude) => {
          inspect.validateInput("inspectAsync", path3, fieldsToInclude);
          return inspect.async(resolvePath(path3), fieldsToInclude);
        },
        inspectTree: (path3, options) => {
          inspectTree.validateInput("inspectTree", path3, options);
          return inspectTree.sync(resolvePath(path3), options);
        },
        inspectTreeAsync: (path3, options) => {
          inspectTree.validateInput("inspectTreeAsync", path3, options);
          return inspectTree.async(resolvePath(path3), options);
        },
        list: (path3) => {
          list.validateInput("list", path3);
          return list.sync(resolvePath(path3 || "."));
        },
        listAsync: (path3) => {
          list.validateInput("listAsync", path3);
          return list.async(resolvePath(path3 || "."));
        },
        move: (from, to, options) => {
          move.validateInput("move", from, to, options);
          move.sync(resolvePath(from), resolvePath(to), options);
        },
        moveAsync: (from, to, options) => {
          move.validateInput("moveAsync", from, to, options);
          return move.async(resolvePath(from), resolvePath(to), options);
        },
        read: (path3, returnAs) => {
          read.validateInput("read", path3, returnAs);
          return read.sync(resolvePath(path3), returnAs);
        },
        readAsync: (path3, returnAs) => {
          read.validateInput("readAsync", path3, returnAs);
          return read.async(resolvePath(path3), returnAs);
        },
        remove: (path3) => {
          remove.validateInput("remove", path3);
          remove.sync(resolvePath(path3 || "."));
        },
        removeAsync: (path3) => {
          remove.validateInput("removeAsync", path3);
          return remove.async(resolvePath(path3 || "."));
        },
        rename: (path3, newName, options) => {
          rename.validateInput("rename", path3, newName, options);
          rename.sync(resolvePath(path3), newName, options);
        },
        renameAsync: (path3, newName, options) => {
          rename.validateInput("renameAsync", path3, newName, options);
          return rename.async(resolvePath(path3), newName, options);
        },
        symlink: (symlinkValue, path3) => {
          symlink.validateInput("symlink", symlinkValue, path3);
          symlink.sync(symlinkValue, resolvePath(path3));
        },
        symlinkAsync: (symlinkValue, path3) => {
          symlink.validateInput("symlinkAsync", symlinkValue, path3);
          return symlink.async(symlinkValue, resolvePath(path3));
        },
        tmpDir: (options) => {
          tmpDir.validateInput("tmpDir", options);
          const pathOfCreatedDirectory = tmpDir.sync(getCwdPath(), options);
          return cwd(pathOfCreatedDirectory);
        },
        tmpDirAsync: (options) => {
          tmpDir.validateInput("tmpDirAsync", options);
          return new Promise((resolve, reject) => {
            tmpDir.async(getCwdPath(), options).then((pathOfCreatedDirectory) => {
              resolve(cwd(pathOfCreatedDirectory));
            }, reject);
          });
        },
        write: (path3, data, options) => {
          write.validateInput("write", path3, data, options);
          write.sync(resolvePath(path3), data, options);
        },
        writeAsync: (path3, data, options) => {
          write.validateInput("writeAsync", path3, data, options);
          return write.async(resolvePath(path3), data, options);
        }
      };
      if (util.inspect.custom !== void 0) {
        api[util.inspect.custom] = () => {
          return `[fs-jetpack CWD: ${getCwdPath()}]`;
        };
      }
      return api;
    };
    module2.exports = jetpackContext;
  }
});
var require_main = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/fs-jetpack@5.1.0/node_modules/fs-jetpack/main.js"(exports, module2) {
    "use strict";
    var jetpack = require_jetpack();
    module2.exports = jetpack();
  }
});
var require_crypto_random_string = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/crypto-random-string@2.0.0/node_modules/crypto-random-string/index.js"(exports, module2) {
    "use strict";
    var crypto = (0, import_chunk_2ESYSVXG.__require)("crypto");
    module2.exports = (length) => {
      if (!Number.isFinite(length)) {
        throw new TypeError("Expected a finite number");
      }
      return crypto.randomBytes(Math.ceil(length / 2)).toString("hex").slice(0, length);
    };
  }
});
var require_unique_string = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/unique-string@2.0.0/node_modules/unique-string/index.js"(exports, module2) {
    "use strict";
    var cryptoRandomString = require_crypto_random_string();
    module2.exports = () => cryptoRandomString(32);
  }
});
var require_temp_dir = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/temp-dir@2.0.0/node_modules/temp-dir/index.js"(exports, module2) {
    "use strict";
    var fs = (0, import_chunk_2ESYSVXG.__require)("fs");
    var os2 = (0, import_chunk_2ESYSVXG.__require)("os");
    var tempDirectorySymbol = Symbol.for("__RESOLVED_TEMP_DIRECTORY__");
    if (!global[tempDirectorySymbol]) {
      Object.defineProperty(global, tempDirectorySymbol, {
        value: fs.realpathSync(os2.tmpdir())
      });
    }
    module2.exports = global[tempDirectorySymbol];
  }
});
var require_is_stream = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/is-stream@2.0.1/node_modules/is-stream/index.js"(exports, module2) {
    "use strict";
    var isStream2 = (stream) => stream !== null && typeof stream === "object" && typeof stream.pipe === "function";
    isStream2.writable = (stream) => isStream2(stream) && stream.writable !== false && typeof stream._write === "function" && typeof stream._writableState === "object";
    isStream2.readable = (stream) => isStream2(stream) && stream.readable !== false && typeof stream._read === "function" && typeof stream._readableState === "object";
    isStream2.duplex = (stream) => isStream2.writable(stream) && isStream2.readable(stream);
    isStream2.transform = (stream) => isStream2.duplex(stream) && typeof stream._transform === "function";
    module2.exports = isStream2;
  }
});
var require_array_union = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/array-union@2.1.0/node_modules/array-union/index.js"(exports, module2) {
    "use strict";
    module2.exports = (...arguments_) => {
      return [...new Set([].concat(...arguments_))];
    };
  }
});
var require_merge2 = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/merge2@1.4.1/node_modules/merge2/index.js"(exports, module2) {
    "use strict";
    var Stream = (0, import_chunk_2ESYSVXG.__require)("stream");
    var PassThrough = Stream.PassThrough;
    var slice = Array.prototype.slice;
    module2.exports = merge2;
    function merge2() {
      const streamsQueue = [];
      const args = slice.call(arguments);
      let merging = false;
      let options = args[args.length - 1];
      if (options && !Array.isArray(options) && options.pipe == null) {
        args.pop();
      } else {
        options = {};
      }
      const doEnd = options.end !== false;
      const doPipeError = options.pipeError === true;
      if (options.objectMode == null) {
        options.objectMode = true;
      }
      if (options.highWaterMark == null) {
        options.highWaterMark = 64 * 1024;
      }
      const mergedStream = PassThrough(options);
      function addStream() {
        for (let i = 0, len = arguments.length; i < len; i++) {
          streamsQueue.push(pauseStreams(arguments[i], options));
        }
        mergeStream2();
        return this;
      }
      function mergeStream2() {
        if (merging) {
          return;
        }
        merging = true;
        let streams = streamsQueue.shift();
        if (!streams) {
          process.nextTick(endStream);
          return;
        }
        if (!Array.isArray(streams)) {
          streams = [streams];
        }
        let pipesCount = streams.length + 1;
        function next() {
          if (--pipesCount > 0) {
            return;
          }
          merging = false;
          mergeStream2();
        }
        function pipe(stream) {
          function onend() {
            stream.removeListener("merge2UnpipeEnd", onend);
            stream.removeListener("end", onend);
            if (doPipeError) {
              stream.removeListener("error", onerror);
            }
            next();
          }
          function onerror(err) {
            mergedStream.emit("error", err);
          }
          if (stream._readableState.endEmitted) {
            return next();
          }
          stream.on("merge2UnpipeEnd", onend);
          stream.on("end", onend);
          if (doPipeError) {
            stream.on("error", onerror);
          }
          stream.pipe(mergedStream, { end: false });
          stream.resume();
        }
        for (let i = 0; i < streams.length; i++) {
          pipe(streams[i]);
        }
        next();
      }
      function endStream() {
        merging = false;
        mergedStream.emit("queueDrain");
        if (doEnd) {
          mergedStream.end();
        }
      }
      mergedStream.setMaxListeners(0);
      mergedStream.add = addStream;
      mergedStream.on("unpipe", function(stream) {
        stream.emit("merge2UnpipeEnd");
      });
      if (args.length) {
        addStream.apply(null, args);
      }
      return mergedStream;
    }
    function pauseStreams(streams, options) {
      if (!Array.isArray(streams)) {
        if (!streams._readableState && streams.pipe) {
          streams = streams.pipe(PassThrough(options));
        }
        if (!streams._readableState || !streams.pause || !streams.pipe) {
          throw new Error("Only readable stream can be merged.");
        }
        streams.pause();
      } else {
        for (let i = 0, len = streams.length; i < len; i++) {
          streams[i] = pauseStreams(streams[i], options);
        }
      }
      return streams;
    }
  }
});
var require_array = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/utils/array.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.splitWhen = exports.flatten = void 0;
    function flatten(items) {
      return items.reduce((collection, item) => [].concat(collection, item), []);
    }
    exports.flatten = flatten;
    function splitWhen(items, predicate) {
      const result = [[]];
      let groupIndex = 0;
      for (const item of items) {
        if (predicate(item)) {
          groupIndex++;
          result[groupIndex] = [];
        } else {
          result[groupIndex].push(item);
        }
      }
      return result;
    }
    exports.splitWhen = splitWhen;
  }
});
var require_errno = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/utils/errno.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isEnoentCodeError = void 0;
    function isEnoentCodeError(error) {
      return error.code === "ENOENT";
    }
    exports.isEnoentCodeError = isEnoentCodeError;
  }
});
var require_fs2 = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/utils/fs.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createDirentFromStats = void 0;
    var DirentFromStats = class {
      constructor(name, stats) {
        this.name = name;
        this.isBlockDevice = stats.isBlockDevice.bind(stats);
        this.isCharacterDevice = stats.isCharacterDevice.bind(stats);
        this.isDirectory = stats.isDirectory.bind(stats);
        this.isFIFO = stats.isFIFO.bind(stats);
        this.isFile = stats.isFile.bind(stats);
        this.isSocket = stats.isSocket.bind(stats);
        this.isSymbolicLink = stats.isSymbolicLink.bind(stats);
      }
    };
    function createDirentFromStats(name, stats) {
      return new DirentFromStats(name, stats);
    }
    exports.createDirentFromStats = createDirentFromStats;
  }
});
var require_path2 = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/utils/path.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.convertPosixPathToPattern = exports.convertWindowsPathToPattern = exports.convertPathToPattern = exports.escapePosixPath = exports.escapeWindowsPath = exports.escape = exports.removeLeadingDotSegment = exports.makeAbsolute = exports.unixify = void 0;
    var os2 = (0, import_chunk_2ESYSVXG.__require)("os");
    var path3 = (0, import_chunk_2ESYSVXG.__require)("path");
    var IS_WINDOWS_PLATFORM = os2.platform() === "win32";
    var LEADING_DOT_SEGMENT_CHARACTERS_COUNT = 2;
    var POSIX_UNESCAPED_GLOB_SYMBOLS_RE = /(\\?)([()*?[\]{|}]|^!|[!+@](?=\()|\\(?![!()*+?@[\]{|}]))/g;
    var WINDOWS_UNESCAPED_GLOB_SYMBOLS_RE = /(\\?)([()[\]{}]|^!|[!+@](?=\())/g;
    var DOS_DEVICE_PATH_RE = /^\\\\([.?])/;
    var WINDOWS_BACKSLASHES_RE = /\\(?![!()+@[\]{}])/g;
    function unixify(filepath) {
      return filepath.replace(/\\/g, "/");
    }
    exports.unixify = unixify;
    function makeAbsolute(cwd, filepath) {
      return path3.resolve(cwd, filepath);
    }
    exports.makeAbsolute = makeAbsolute;
    function removeLeadingDotSegment(entry) {
      if (entry.charAt(0) === ".") {
        const secondCharactery = entry.charAt(1);
        if (secondCharactery === "/" || secondCharactery === "\\") {
          return entry.slice(LEADING_DOT_SEGMENT_CHARACTERS_COUNT);
        }
      }
      return entry;
    }
    exports.removeLeadingDotSegment = removeLeadingDotSegment;
    exports.escape = IS_WINDOWS_PLATFORM ? escapeWindowsPath : escapePosixPath;
    function escapeWindowsPath(pattern) {
      return pattern.replace(WINDOWS_UNESCAPED_GLOB_SYMBOLS_RE, "\\$2");
    }
    exports.escapeWindowsPath = escapeWindowsPath;
    function escapePosixPath(pattern) {
      return pattern.replace(POSIX_UNESCAPED_GLOB_SYMBOLS_RE, "\\$2");
    }
    exports.escapePosixPath = escapePosixPath;
    exports.convertPathToPattern = IS_WINDOWS_PLATFORM ? convertWindowsPathToPattern : convertPosixPathToPattern;
    function convertWindowsPathToPattern(filepath) {
      return escapeWindowsPath(filepath).replace(DOS_DEVICE_PATH_RE, "//$1").replace(WINDOWS_BACKSLASHES_RE, "/");
    }
    exports.convertWindowsPathToPattern = convertWindowsPathToPattern;
    function convertPosixPathToPattern(filepath) {
      return escapePosixPath(filepath);
    }
    exports.convertPosixPathToPattern = convertPosixPathToPattern;
  }
});
var require_is_extglob = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/is-extglob@2.1.1/node_modules/is-extglob/index.js"(exports, module2) {
    "use strict";
    module2.exports = function isExtglob(str) {
      if (typeof str !== "string" || str === "") {
        return false;
      }
      var match;
      while (match = /(\\).|([@?!+*]\(.*\))/g.exec(str)) {
        if (match[2]) return true;
        str = str.slice(match.index + match[0].length);
      }
      return false;
    };
  }
});
var require_is_glob = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/is-glob@4.0.3/node_modules/is-glob/index.js"(exports, module2) {
    "use strict";
    var isExtglob = require_is_extglob();
    var chars = { "{": "}", "(": ")", "[": "]" };
    var strictCheck = function(str) {
      if (str[0] === "!") {
        return true;
      }
      var index = 0;
      var pipeIndex = -2;
      var closeSquareIndex = -2;
      var closeCurlyIndex = -2;
      var closeParenIndex = -2;
      var backSlashIndex = -2;
      while (index < str.length) {
        if (str[index] === "*") {
          return true;
        }
        if (str[index + 1] === "?" && /[\].+)]/.test(str[index])) {
          return true;
        }
        if (closeSquareIndex !== -1 && str[index] === "[" && str[index + 1] !== "]") {
          if (closeSquareIndex < index) {
            closeSquareIndex = str.indexOf("]", index);
          }
          if (closeSquareIndex > index) {
            if (backSlashIndex === -1 || backSlashIndex > closeSquareIndex) {
              return true;
            }
            backSlashIndex = str.indexOf("\\", index);
            if (backSlashIndex === -1 || backSlashIndex > closeSquareIndex) {
              return true;
            }
          }
        }
        if (closeCurlyIndex !== -1 && str[index] === "{" && str[index + 1] !== "}") {
          closeCurlyIndex = str.indexOf("}", index);
          if (closeCurlyIndex > index) {
            backSlashIndex = str.indexOf("\\", index);
            if (backSlashIndex === -1 || backSlashIndex > closeCurlyIndex) {
              return true;
            }
          }
        }
        if (closeParenIndex !== -1 && str[index] === "(" && str[index + 1] === "?" && /[:!=]/.test(str[index + 2]) && str[index + 3] !== ")") {
          closeParenIndex = str.indexOf(")", index);
          if (closeParenIndex > index) {
            backSlashIndex = str.indexOf("\\", index);
            if (backSlashIndex === -1 || backSlashIndex > closeParenIndex) {
              return true;
            }
          }
        }
        if (pipeIndex !== -1 && str[index] === "(" && str[index + 1] !== "|") {
          if (pipeIndex < index) {
            pipeIndex = str.indexOf("|", index);
          }
          if (pipeIndex !== -1 && str[pipeIndex + 1] !== ")") {
            closeParenIndex = str.indexOf(")", pipeIndex);
            if (closeParenIndex > pipeIndex) {
              backSlashIndex = str.indexOf("\\", pipeIndex);
              if (backSlashIndex === -1 || backSlashIndex > closeParenIndex) {
                return true;
              }
            }
          }
        }
        if (str[index] === "\\") {
          var open = str[index + 1];
          index += 2;
          var close = chars[open];
          if (close) {
            var n = str.indexOf(close, index);
            if (n !== -1) {
              index = n + 1;
            }
          }
          if (str[index] === "!") {
            return true;
          }
        } else {
          index++;
        }
      }
      return false;
    };
    var relaxedCheck = function(str) {
      if (str[0] === "!") {
        return true;
      }
      var index = 0;
      while (index < str.length) {
        if (/[*?{}()[\]]/.test(str[index])) {
          return true;
        }
        if (str[index] === "\\") {
          var open = str[index + 1];
          index += 2;
          var close = chars[open];
          if (close) {
            var n = str.indexOf(close, index);
            if (n !== -1) {
              index = n + 1;
            }
          }
          if (str[index] === "!") {
            return true;
          }
        } else {
          index++;
        }
      }
      return false;
    };
    module2.exports = function isGlob(str, options) {
      if (typeof str !== "string" || str === "") {
        return false;
      }
      if (isExtglob(str)) {
        return true;
      }
      var check = strictCheck;
      if (options && options.strict === false) {
        check = relaxedCheck;
      }
      return check(str);
    };
  }
});
var require_glob_parent = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/glob-parent@5.1.2/node_modules/glob-parent/index.js"(exports, module2) {
    "use strict";
    var isGlob = require_is_glob();
    var pathPosixDirname = (0, import_chunk_2ESYSVXG.__require)("path").posix.dirname;
    var isWin32 = (0, import_chunk_2ESYSVXG.__require)("os").platform() === "win32";
    var slash = "/";
    var backslash = /\\/g;
    var enclosure = /[\{\[].*[\}\]]$/;
    var globby = /(^|[^\\])([\{\[]|\([^\)]+$)/;
    var escaped = /\\([\!\*\?\|\[\]\(\)\{\}])/g;
    module2.exports = function globParent(str, opts) {
      var options = Object.assign({ flipBackslashes: true }, opts);
      if (options.flipBackslashes && isWin32 && str.indexOf(slash) < 0) {
        str = str.replace(backslash, slash);
      }
      if (enclosure.test(str)) {
        str += slash;
      }
      str += "a";
      do {
        str = pathPosixDirname(str);
      } while (isGlob(str) || globby.test(str));
      return str.replace(escaped, "$1");
    };
  }
});
var require_utils = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/braces@3.0.3/node_modules/braces/lib/utils.js"(exports) {
    "use strict";
    exports.isInteger = (num) => {
      if (typeof num === "number") {
        return Number.isInteger(num);
      }
      if (typeof num === "string" && num.trim() !== "") {
        return Number.isInteger(Number(num));
      }
      return false;
    };
    exports.find = (node, type) => node.nodes.find((node2) => node2.type === type);
    exports.exceedsLimit = (min, max, step = 1, limit) => {
      if (limit === false) return false;
      if (!exports.isInteger(min) || !exports.isInteger(max)) return false;
      return (Number(max) - Number(min)) / Number(step) >= limit;
    };
    exports.escapeNode = (block, n = 0, type) => {
      const node = block.nodes[n];
      if (!node) return;
      if (type && node.type === type || node.type === "open" || node.type === "close") {
        if (node.escaped !== true) {
          node.value = "\\" + node.value;
          node.escaped = true;
        }
      }
    };
    exports.encloseBrace = (node) => {
      if (node.type !== "brace") return false;
      if (node.commas >> 0 + node.ranges >> 0 === 0) {
        node.invalid = true;
        return true;
      }
      return false;
    };
    exports.isInvalidBrace = (block) => {
      if (block.type !== "brace") return false;
      if (block.invalid === true || block.dollar) return true;
      if (block.commas >> 0 + block.ranges >> 0 === 0) {
        block.invalid = true;
        return true;
      }
      if (block.open !== true || block.close !== true) {
        block.invalid = true;
        return true;
      }
      return false;
    };
    exports.isOpenOrClose = (node) => {
      if (node.type === "open" || node.type === "close") {
        return true;
      }
      return node.open === true || node.close === true;
    };
    exports.reduce = (nodes) => nodes.reduce((acc, node) => {
      if (node.type === "text") acc.push(node.value);
      if (node.type === "range") node.type = "text";
      return acc;
    }, []);
    exports.flatten = (...args) => {
      const result = [];
      const flat = (arr) => {
        for (let i = 0; i < arr.length; i++) {
          const ele = arr[i];
          if (Array.isArray(ele)) {
            flat(ele);
            continue;
          }
          if (ele !== void 0) {
            result.push(ele);
          }
        }
        return result;
      };
      flat(args);
      return result;
    };
  }
});
var require_stringify = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/braces@3.0.3/node_modules/braces/lib/stringify.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    module2.exports = (ast, options = {}) => {
      const stringify = (node, parent = {}) => {
        const invalidBlock = options.escapeInvalid && utils.isInvalidBrace(parent);
        const invalidNode = node.invalid === true && options.escapeInvalid === true;
        let output = "";
        if (node.value) {
          if ((invalidBlock || invalidNode) && utils.isOpenOrClose(node)) {
            return "\\" + node.value;
          }
          return node.value;
        }
        if (node.value) {
          return node.value;
        }
        if (node.nodes) {
          for (const child of node.nodes) {
            output += stringify(child);
          }
        }
        return output;
      };
      return stringify(ast);
    };
  }
});
var require_is_number = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/is-number@7.0.0/node_modules/is-number/index.js"(exports, module2) {
    "use strict";
    module2.exports = function(num) {
      if (typeof num === "number") {
        return num - num === 0;
      }
      if (typeof num === "string" && num.trim() !== "") {
        return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
      }
      return false;
    };
  }
});
var require_to_regex_range = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/to-regex-range@5.0.1/node_modules/to-regex-range/index.js"(exports, module2) {
    "use strict";
    var isNumber = require_is_number();
    var toRegexRange = (min, max, options) => {
      if (isNumber(min) === false) {
        throw new TypeError("toRegexRange: expected the first argument to be a number");
      }
      if (max === void 0 || min === max) {
        return String(min);
      }
      if (isNumber(max) === false) {
        throw new TypeError("toRegexRange: expected the second argument to be a number.");
      }
      let opts = { relaxZeros: true, ...options };
      if (typeof opts.strictZeros === "boolean") {
        opts.relaxZeros = opts.strictZeros === false;
      }
      let relax = String(opts.relaxZeros);
      let shorthand = String(opts.shorthand);
      let capture = String(opts.capture);
      let wrap = String(opts.wrap);
      let cacheKey = min + ":" + max + "=" + relax + shorthand + capture + wrap;
      if (toRegexRange.cache.hasOwnProperty(cacheKey)) {
        return toRegexRange.cache[cacheKey].result;
      }
      let a = Math.min(min, max);
      let b = Math.max(min, max);
      if (Math.abs(a - b) === 1) {
        let result = min + "|" + max;
        if (opts.capture) {
          return `(${result})`;
        }
        if (opts.wrap === false) {
          return result;
        }
        return `(?:${result})`;
      }
      let isPadded = hasPadding(min) || hasPadding(max);
      let state = { min, max, a, b };
      let positives = [];
      let negatives = [];
      if (isPadded) {
        state.isPadded = isPadded;
        state.maxLen = String(state.max).length;
      }
      if (a < 0) {
        let newMin = b < 0 ? Math.abs(b) : 1;
        negatives = splitToPatterns(newMin, Math.abs(a), state, opts);
        a = state.a = 0;
      }
      if (b >= 0) {
        positives = splitToPatterns(a, b, state, opts);
      }
      state.negatives = negatives;
      state.positives = positives;
      state.result = collatePatterns(negatives, positives, opts);
      if (opts.capture === true) {
        state.result = `(${state.result})`;
      } else if (opts.wrap !== false && positives.length + negatives.length > 1) {
        state.result = `(?:${state.result})`;
      }
      toRegexRange.cache[cacheKey] = state;
      return state.result;
    };
    function collatePatterns(neg, pos, options) {
      let onlyNegative = filterPatterns(neg, pos, "-", false, options) || [];
      let onlyPositive = filterPatterns(pos, neg, "", false, options) || [];
      let intersected = filterPatterns(neg, pos, "-?", true, options) || [];
      let subpatterns = onlyNegative.concat(intersected).concat(onlyPositive);
      return subpatterns.join("|");
    }
    function splitToRanges(min, max) {
      let nines = 1;
      let zeros = 1;
      let stop = countNines(min, nines);
      let stops = /* @__PURE__ */ new Set([max]);
      while (min <= stop && stop <= max) {
        stops.add(stop);
        nines += 1;
        stop = countNines(min, nines);
      }
      stop = countZeros(max + 1, zeros) - 1;
      while (min < stop && stop <= max) {
        stops.add(stop);
        zeros += 1;
        stop = countZeros(max + 1, zeros) - 1;
      }
      stops = [...stops];
      stops.sort(compare);
      return stops;
    }
    function rangeToPattern(start, stop, options) {
      if (start === stop) {
        return { pattern: start, count: [], digits: 0 };
      }
      let zipped = zip(start, stop);
      let digits = zipped.length;
      let pattern = "";
      let count = 0;
      for (let i = 0; i < digits; i++) {
        let [startDigit, stopDigit] = zipped[i];
        if (startDigit === stopDigit) {
          pattern += startDigit;
        } else if (startDigit !== "0" || stopDigit !== "9") {
          pattern += toCharacterClass(startDigit, stopDigit, options);
        } else {
          count++;
        }
      }
      if (count) {
        pattern += options.shorthand === true ? "\\d" : "[0-9]";
      }
      return { pattern, count: [count], digits };
    }
    function splitToPatterns(min, max, tok, options) {
      let ranges = splitToRanges(min, max);
      let tokens = [];
      let start = min;
      let prev;
      for (let i = 0; i < ranges.length; i++) {
        let max2 = ranges[i];
        let obj = rangeToPattern(String(start), String(max2), options);
        let zeros = "";
        if (!tok.isPadded && prev && prev.pattern === obj.pattern) {
          if (prev.count.length > 1) {
            prev.count.pop();
          }
          prev.count.push(obj.count[0]);
          prev.string = prev.pattern + toQuantifier(prev.count);
          start = max2 + 1;
          continue;
        }
        if (tok.isPadded) {
          zeros = padZeros(max2, tok, options);
        }
        obj.string = zeros + obj.pattern + toQuantifier(obj.count);
        tokens.push(obj);
        start = max2 + 1;
        prev = obj;
      }
      return tokens;
    }
    function filterPatterns(arr, comparison, prefix, intersection, options) {
      let result = [];
      for (let ele of arr) {
        let { string } = ele;
        if (!intersection && !contains(comparison, "string", string)) {
          result.push(prefix + string);
        }
        if (intersection && contains(comparison, "string", string)) {
          result.push(prefix + string);
        }
      }
      return result;
    }
    function zip(a, b) {
      let arr = [];
      for (let i = 0; i < a.length; i++) arr.push([a[i], b[i]]);
      return arr;
    }
    function compare(a, b) {
      return a > b ? 1 : b > a ? -1 : 0;
    }
    function contains(arr, key, val) {
      return arr.some((ele) => ele[key] === val);
    }
    function countNines(min, len) {
      return Number(String(min).slice(0, -len) + "9".repeat(len));
    }
    function countZeros(integer, zeros) {
      return integer - integer % Math.pow(10, zeros);
    }
    function toQuantifier(digits) {
      let [start = 0, stop = ""] = digits;
      if (stop || start > 1) {
        return `{${start + (stop ? "," + stop : "")}}`;
      }
      return "";
    }
    function toCharacterClass(a, b, options) {
      return `[${a}${b - a === 1 ? "" : "-"}${b}]`;
    }
    function hasPadding(str) {
      return /^-?(0+)\d/.test(str);
    }
    function padZeros(value, tok, options) {
      if (!tok.isPadded) {
        return value;
      }
      let diff = Math.abs(tok.maxLen - String(value).length);
      let relax = options.relaxZeros !== false;
      switch (diff) {
        case 0:
          return "";
        case 1:
          return relax ? "0?" : "0";
        case 2:
          return relax ? "0{0,2}" : "00";
        default: {
          return relax ? `0{0,${diff}}` : `0{${diff}}`;
        }
      }
    }
    toRegexRange.cache = {};
    toRegexRange.clearCache = () => toRegexRange.cache = {};
    module2.exports = toRegexRange;
  }
});
var require_fill_range = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/fill-range@7.1.1/node_modules/fill-range/index.js"(exports, module2) {
    "use strict";
    var util = (0, import_chunk_2ESYSVXG.__require)("util");
    var toRegexRange = require_to_regex_range();
    var isObject = (val) => val !== null && typeof val === "object" && !Array.isArray(val);
    var transform = (toNumber) => {
      return (value) => toNumber === true ? Number(value) : String(value);
    };
    var isValidValue = (value) => {
      return typeof value === "number" || typeof value === "string" && value !== "";
    };
    var isNumber = (num) => Number.isInteger(+num);
    var zeros = (input) => {
      let value = `${input}`;
      let index = -1;
      if (value[0] === "-") value = value.slice(1);
      if (value === "0") return false;
      while (value[++index] === "0") ;
      return index > 0;
    };
    var stringify = (start, end, options) => {
      if (typeof start === "string" || typeof end === "string") {
        return true;
      }
      return options.stringify === true;
    };
    var pad = (input, maxLength, toNumber) => {
      if (maxLength > 0) {
        let dash = input[0] === "-" ? "-" : "";
        if (dash) input = input.slice(1);
        input = dash + input.padStart(dash ? maxLength - 1 : maxLength, "0");
      }
      if (toNumber === false) {
        return String(input);
      }
      return input;
    };
    var toMaxLen = (input, maxLength) => {
      let negative = input[0] === "-" ? "-" : "";
      if (negative) {
        input = input.slice(1);
        maxLength--;
      }
      while (input.length < maxLength) input = "0" + input;
      return negative ? "-" + input : input;
    };
    var toSequence = (parts, options, maxLen) => {
      parts.negatives.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
      parts.positives.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
      let prefix = options.capture ? "" : "?:";
      let positives = "";
      let negatives = "";
      let result;
      if (parts.positives.length) {
        positives = parts.positives.map((v) => toMaxLen(String(v), maxLen)).join("|");
      }
      if (parts.negatives.length) {
        negatives = `-(${prefix}${parts.negatives.map((v) => toMaxLen(String(v), maxLen)).join("|")})`;
      }
      if (positives && negatives) {
        result = `${positives}|${negatives}`;
      } else {
        result = positives || negatives;
      }
      if (options.wrap) {
        return `(${prefix}${result})`;
      }
      return result;
    };
    var toRange = (a, b, isNumbers, options) => {
      if (isNumbers) {
        return toRegexRange(a, b, { wrap: false, ...options });
      }
      let start = String.fromCharCode(a);
      if (a === b) return start;
      let stop = String.fromCharCode(b);
      return `[${start}-${stop}]`;
    };
    var toRegex = (start, end, options) => {
      if (Array.isArray(start)) {
        let wrap = options.wrap === true;
        let prefix = options.capture ? "" : "?:";
        return wrap ? `(${prefix}${start.join("|")})` : start.join("|");
      }
      return toRegexRange(start, end, options);
    };
    var rangeError = (...args) => {
      return new RangeError("Invalid range arguments: " + util.inspect(...args));
    };
    var invalidRange = (start, end, options) => {
      if (options.strictRanges === true) throw rangeError([start, end]);
      return [];
    };
    var invalidStep = (step, options) => {
      if (options.strictRanges === true) {
        throw new TypeError(`Expected step "${step}" to be a number`);
      }
      return [];
    };
    var fillNumbers = (start, end, step = 1, options = {}) => {
      let a = Number(start);
      let b = Number(end);
      if (!Number.isInteger(a) || !Number.isInteger(b)) {
        if (options.strictRanges === true) throw rangeError([start, end]);
        return [];
      }
      if (a === 0) a = 0;
      if (b === 0) b = 0;
      let descending = a > b;
      let startString = String(start);
      let endString = String(end);
      let stepString = String(step);
      step = Math.max(Math.abs(step), 1);
      let padded = zeros(startString) || zeros(endString) || zeros(stepString);
      let maxLen = padded ? Math.max(startString.length, endString.length, stepString.length) : 0;
      let toNumber = padded === false && stringify(start, end, options) === false;
      let format = options.transform || transform(toNumber);
      if (options.toRegex && step === 1) {
        return toRange(toMaxLen(start, maxLen), toMaxLen(end, maxLen), true, options);
      }
      let parts = { negatives: [], positives: [] };
      let push = (num) => parts[num < 0 ? "negatives" : "positives"].push(Math.abs(num));
      let range = [];
      let index = 0;
      while (descending ? a >= b : a <= b) {
        if (options.toRegex === true && step > 1) {
          push(a);
        } else {
          range.push(pad(format(a, index), maxLen, toNumber));
        }
        a = descending ? a - step : a + step;
        index++;
      }
      if (options.toRegex === true) {
        return step > 1 ? toSequence(parts, options, maxLen) : toRegex(range, null, { wrap: false, ...options });
      }
      return range;
    };
    var fillLetters = (start, end, step = 1, options = {}) => {
      if (!isNumber(start) && start.length > 1 || !isNumber(end) && end.length > 1) {
        return invalidRange(start, end, options);
      }
      let format = options.transform || ((val) => String.fromCharCode(val));
      let a = `${start}`.charCodeAt(0);
      let b = `${end}`.charCodeAt(0);
      let descending = a > b;
      let min = Math.min(a, b);
      let max = Math.max(a, b);
      if (options.toRegex && step === 1) {
        return toRange(min, max, false, options);
      }
      let range = [];
      let index = 0;
      while (descending ? a >= b : a <= b) {
        range.push(format(a, index));
        a = descending ? a - step : a + step;
        index++;
      }
      if (options.toRegex === true) {
        return toRegex(range, null, { wrap: false, options });
      }
      return range;
    };
    var fill = (start, end, step, options = {}) => {
      if (end == null && isValidValue(start)) {
        return [start];
      }
      if (!isValidValue(start) || !isValidValue(end)) {
        return invalidRange(start, end, options);
      }
      if (typeof step === "function") {
        return fill(start, end, 1, { transform: step });
      }
      if (isObject(step)) {
        return fill(start, end, 0, step);
      }
      let opts = { ...options };
      if (opts.capture === true) opts.wrap = true;
      step = step || opts.step || 1;
      if (!isNumber(step)) {
        if (step != null && !isObject(step)) return invalidStep(step, opts);
        return fill(start, end, 1, step);
      }
      if (isNumber(start) && isNumber(end)) {
        return fillNumbers(start, end, step, opts);
      }
      return fillLetters(start, end, Math.max(Math.abs(step), 1), opts);
    };
    module2.exports = fill;
  }
});
var require_compile = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/braces@3.0.3/node_modules/braces/lib/compile.js"(exports, module2) {
    "use strict";
    var fill = require_fill_range();
    var utils = require_utils();
    var compile = (ast, options = {}) => {
      const walk = (node, parent = {}) => {
        const invalidBlock = utils.isInvalidBrace(parent);
        const invalidNode = node.invalid === true && options.escapeInvalid === true;
        const invalid = invalidBlock === true || invalidNode === true;
        const prefix = options.escapeInvalid === true ? "\\" : "";
        let output = "";
        if (node.isOpen === true) {
          return prefix + node.value;
        }
        if (node.isClose === true) {
          console.log("node.isClose", prefix, node.value);
          return prefix + node.value;
        }
        if (node.type === "open") {
          return invalid ? prefix + node.value : "(";
        }
        if (node.type === "close") {
          return invalid ? prefix + node.value : ")";
        }
        if (node.type === "comma") {
          return node.prev.type === "comma" ? "" : invalid ? node.value : "|";
        }
        if (node.value) {
          return node.value;
        }
        if (node.nodes && node.ranges > 0) {
          const args = utils.reduce(node.nodes);
          const range = fill(...args, { ...options, wrap: false, toRegex: true, strictZeros: true });
          if (range.length !== 0) {
            return args.length > 1 && range.length > 1 ? `(${range})` : range;
          }
        }
        if (node.nodes) {
          for (const child of node.nodes) {
            output += walk(child, node);
          }
        }
        return output;
      };
      return walk(ast);
    };
    module2.exports = compile;
  }
});
var require_expand = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/braces@3.0.3/node_modules/braces/lib/expand.js"(exports, module2) {
    "use strict";
    var fill = require_fill_range();
    var stringify = require_stringify();
    var utils = require_utils();
    var append = (queue = "", stash = "", enclose = false) => {
      const result = [];
      queue = [].concat(queue);
      stash = [].concat(stash);
      if (!stash.length) return queue;
      if (!queue.length) {
        return enclose ? utils.flatten(stash).map((ele) => `{${ele}}`) : stash;
      }
      for (const item of queue) {
        if (Array.isArray(item)) {
          for (const value of item) {
            result.push(append(value, stash, enclose));
          }
        } else {
          for (let ele of stash) {
            if (enclose === true && typeof ele === "string") ele = `{${ele}}`;
            result.push(Array.isArray(ele) ? append(item, ele, enclose) : item + ele);
          }
        }
      }
      return utils.flatten(result);
    };
    var expand = (ast, options = {}) => {
      const rangeLimit = options.rangeLimit === void 0 ? 1e3 : options.rangeLimit;
      const walk = (node, parent = {}) => {
        node.queue = [];
        let p = parent;
        let q = parent.queue;
        while (p.type !== "brace" && p.type !== "root" && p.parent) {
          p = p.parent;
          q = p.queue;
        }
        if (node.invalid || node.dollar) {
          q.push(append(q.pop(), stringify(node, options)));
          return;
        }
        if (node.type === "brace" && node.invalid !== true && node.nodes.length === 2) {
          q.push(append(q.pop(), ["{}"]));
          return;
        }
        if (node.nodes && node.ranges > 0) {
          const args = utils.reduce(node.nodes);
          if (utils.exceedsLimit(...args, options.step, rangeLimit)) {
            throw new RangeError("expanded array length exceeds range limit. Use options.rangeLimit to increase or disable the limit.");
          }
          let range = fill(...args, options);
          if (range.length === 0) {
            range = stringify(node, options);
          }
          q.push(append(q.pop(), range));
          node.nodes = [];
          return;
        }
        const enclose = utils.encloseBrace(node);
        let queue = node.queue;
        let block = node;
        while (block.type !== "brace" && block.type !== "root" && block.parent) {
          block = block.parent;
          queue = block.queue;
        }
        for (let i = 0; i < node.nodes.length; i++) {
          const child = node.nodes[i];
          if (child.type === "comma" && node.type === "brace") {
            if (i === 1) queue.push("");
            queue.push("");
            continue;
          }
          if (child.type === "close") {
            q.push(append(q.pop(), queue, enclose));
            continue;
          }
          if (child.value && child.type !== "open") {
            queue.push(append(queue.pop(), child.value));
            continue;
          }
          if (child.nodes) {
            walk(child, node);
          }
        }
        return queue;
      };
      return utils.flatten(walk(ast));
    };
    module2.exports = expand;
  }
});
var require_constants = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/braces@3.0.3/node_modules/braces/lib/constants.js"(exports, module2) {
    "use strict";
    module2.exports = {
      MAX_LENGTH: 1e4,
      // Digits
      CHAR_0: "0",
      /* 0 */
      CHAR_9: "9",
      /* 9 */
      // Alphabet chars.
      CHAR_UPPERCASE_A: "A",
      /* A */
      CHAR_LOWERCASE_A: "a",
      /* a */
      CHAR_UPPERCASE_Z: "Z",
      /* Z */
      CHAR_LOWERCASE_Z: "z",
      /* z */
      CHAR_LEFT_PARENTHESES: "(",
      /* ( */
      CHAR_RIGHT_PARENTHESES: ")",
      /* ) */
      CHAR_ASTERISK: "*",
      /* * */
      // Non-alphabetic chars.
      CHAR_AMPERSAND: "&",
      /* & */
      CHAR_AT: "@",
      /* @ */
      CHAR_BACKSLASH: "\\",
      /* \ */
      CHAR_BACKTICK: "`",
      /* ` */
      CHAR_CARRIAGE_RETURN: "\r",
      /* \r */
      CHAR_CIRCUMFLEX_ACCENT: "^",
      /* ^ */
      CHAR_COLON: ":",
      /* : */
      CHAR_COMMA: ",",
      /* , */
      CHAR_DOLLAR: "$",
      /* . */
      CHAR_DOT: ".",
      /* . */
      CHAR_DOUBLE_QUOTE: '"',
      /* " */
      CHAR_EQUAL: "=",
      /* = */
      CHAR_EXCLAMATION_MARK: "!",
      /* ! */
      CHAR_FORM_FEED: "\f",
      /* \f */
      CHAR_FORWARD_SLASH: "/",
      /* / */
      CHAR_HASH: "#",
      /* # */
      CHAR_HYPHEN_MINUS: "-",
      /* - */
      CHAR_LEFT_ANGLE_BRACKET: "<",
      /* < */
      CHAR_LEFT_CURLY_BRACE: "{",
      /* { */
      CHAR_LEFT_SQUARE_BRACKET: "[",
      /* [ */
      CHAR_LINE_FEED: "\n",
      /* \n */
      CHAR_NO_BREAK_SPACE: "\xA0",
      /* \u00A0 */
      CHAR_PERCENT: "%",
      /* % */
      CHAR_PLUS: "+",
      /* + */
      CHAR_QUESTION_MARK: "?",
      /* ? */
      CHAR_RIGHT_ANGLE_BRACKET: ">",
      /* > */
      CHAR_RIGHT_CURLY_BRACE: "}",
      /* } */
      CHAR_RIGHT_SQUARE_BRACKET: "]",
      /* ] */
      CHAR_SEMICOLON: ";",
      /* ; */
      CHAR_SINGLE_QUOTE: "'",
      /* ' */
      CHAR_SPACE: " ",
      /*   */
      CHAR_TAB: "	",
      /* \t */
      CHAR_UNDERSCORE: "_",
      /* _ */
      CHAR_VERTICAL_LINE: "|",
      /* | */
      CHAR_ZERO_WIDTH_NOBREAK_SPACE: "\uFEFF"
      /* \uFEFF */
    };
  }
});
var require_parse2 = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/braces@3.0.3/node_modules/braces/lib/parse.js"(exports, module2) {
    "use strict";
    var stringify = require_stringify();
    var {
      MAX_LENGTH,
      CHAR_BACKSLASH,
      /* \ */
      CHAR_BACKTICK,
      /* ` */
      CHAR_COMMA,
      /* , */
      CHAR_DOT,
      /* . */
      CHAR_LEFT_PARENTHESES,
      /* ( */
      CHAR_RIGHT_PARENTHESES,
      /* ) */
      CHAR_LEFT_CURLY_BRACE,
      /* { */
      CHAR_RIGHT_CURLY_BRACE,
      /* } */
      CHAR_LEFT_SQUARE_BRACKET,
      /* [ */
      CHAR_RIGHT_SQUARE_BRACKET,
      /* ] */
      CHAR_DOUBLE_QUOTE,
      /* " */
      CHAR_SINGLE_QUOTE,
      /* ' */
      CHAR_NO_BREAK_SPACE,
      CHAR_ZERO_WIDTH_NOBREAK_SPACE
    } = require_constants();
    var parse = (input, options = {}) => {
      if (typeof input !== "string") {
        throw new TypeError("Expected a string");
      }
      const opts = options || {};
      const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
      if (input.length > max) {
        throw new SyntaxError(`Input length (${input.length}), exceeds max characters (${max})`);
      }
      const ast = { type: "root", input, nodes: [] };
      const stack = [ast];
      let block = ast;
      let prev = ast;
      let brackets = 0;
      const length = input.length;
      let index = 0;
      let depth = 0;
      let value;
      const advance = () => input[index++];
      const push = (node) => {
        if (node.type === "text" && prev.type === "dot") {
          prev.type = "text";
        }
        if (prev && prev.type === "text" && node.type === "text") {
          prev.value += node.value;
          return;
        }
        block.nodes.push(node);
        node.parent = block;
        node.prev = prev;
        prev = node;
        return node;
      };
      push({ type: "bos" });
      while (index < length) {
        block = stack[stack.length - 1];
        value = advance();
        if (value === CHAR_ZERO_WIDTH_NOBREAK_SPACE || value === CHAR_NO_BREAK_SPACE) {
          continue;
        }
        if (value === CHAR_BACKSLASH) {
          push({ type: "text", value: (options.keepEscaping ? value : "") + advance() });
          continue;
        }
        if (value === CHAR_RIGHT_SQUARE_BRACKET) {
          push({ type: "text", value: "\\" + value });
          continue;
        }
        if (value === CHAR_LEFT_SQUARE_BRACKET) {
          brackets++;
          let next;
          while (index < length && (next = advance())) {
            value += next;
            if (next === CHAR_LEFT_SQUARE_BRACKET) {
              brackets++;
              continue;
            }
            if (next === CHAR_BACKSLASH) {
              value += advance();
              continue;
            }
            if (next === CHAR_RIGHT_SQUARE_BRACKET) {
              brackets--;
              if (brackets === 0) {
                break;
              }
            }
          }
          push({ type: "text", value });
          continue;
        }
        if (value === CHAR_LEFT_PARENTHESES) {
          block = push({ type: "paren", nodes: [] });
          stack.push(block);
          push({ type: "text", value });
          continue;
        }
        if (value === CHAR_RIGHT_PARENTHESES) {
          if (block.type !== "paren") {
            push({ type: "text", value });
            continue;
          }
          block = stack.pop();
          push({ type: "text", value });
          block = stack[stack.length - 1];
          continue;
        }
        if (value === CHAR_DOUBLE_QUOTE || value === CHAR_SINGLE_QUOTE || value === CHAR_BACKTICK) {
          const open = value;
          let next;
          if (options.keepQuotes !== true) {
            value = "";
          }
          while (index < length && (next = advance())) {
            if (next === CHAR_BACKSLASH) {
              value += next + advance();
              continue;
            }
            if (next === open) {
              if (options.keepQuotes === true) value += next;
              break;
            }
            value += next;
          }
          push({ type: "text", value });
          continue;
        }
        if (value === CHAR_LEFT_CURLY_BRACE) {
          depth++;
          const dollar = prev.value && prev.value.slice(-1) === "$" || block.dollar === true;
          const brace = {
            type: "brace",
            open: true,
            close: false,
            dollar,
            depth,
            commas: 0,
            ranges: 0,
            nodes: []
          };
          block = push(brace);
          stack.push(block);
          push({ type: "open", value });
          continue;
        }
        if (value === CHAR_RIGHT_CURLY_BRACE) {
          if (block.type !== "brace") {
            push({ type: "text", value });
            continue;
          }
          const type = "close";
          block = stack.pop();
          block.close = true;
          push({ type, value });
          depth--;
          block = stack[stack.length - 1];
          continue;
        }
        if (value === CHAR_COMMA && depth > 0) {
          if (block.ranges > 0) {
            block.ranges = 0;
            const open = block.nodes.shift();
            block.nodes = [open, { type: "text", value: stringify(block) }];
          }
          push({ type: "comma", value });
          block.commas++;
          continue;
        }
        if (value === CHAR_DOT && depth > 0 && block.commas === 0) {
          const siblings = block.nodes;
          if (depth === 0 || siblings.length === 0) {
            push({ type: "text", value });
            continue;
          }
          if (prev.type === "dot") {
            block.range = [];
            prev.value += value;
            prev.type = "range";
            if (block.nodes.length !== 3 && block.nodes.length !== 5) {
              block.invalid = true;
              block.ranges = 0;
              prev.type = "text";
              continue;
            }
            block.ranges++;
            block.args = [];
            continue;
          }
          if (prev.type === "range") {
            siblings.pop();
            const before = siblings[siblings.length - 1];
            before.value += prev.value + value;
            prev = before;
            block.ranges--;
            continue;
          }
          push({ type: "dot", value });
          continue;
        }
        push({ type: "text", value });
      }
      do {
        block = stack.pop();
        if (block.type !== "root") {
          block.nodes.forEach((node) => {
            if (!node.nodes) {
              if (node.type === "open") node.isOpen = true;
              if (node.type === "close") node.isClose = true;
              if (!node.nodes) node.type = "text";
              node.invalid = true;
            }
          });
          const parent = stack[stack.length - 1];
          const index2 = parent.nodes.indexOf(block);
          parent.nodes.splice(index2, 1, ...block.nodes);
        }
      } while (stack.length > 0);
      push({ type: "eos" });
      return ast;
    };
    module2.exports = parse;
  }
});
var require_braces = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/braces@3.0.3/node_modules/braces/index.js"(exports, module2) {
    "use strict";
    var stringify = require_stringify();
    var compile = require_compile();
    var expand = require_expand();
    var parse = require_parse2();
    var braces = (input, options = {}) => {
      let output = [];
      if (Array.isArray(input)) {
        for (const pattern of input) {
          const result = braces.create(pattern, options);
          if (Array.isArray(result)) {
            output.push(...result);
          } else {
            output.push(result);
          }
        }
      } else {
        output = [].concat(braces.create(input, options));
      }
      if (options && options.expand === true && options.nodupes === true) {
        output = [...new Set(output)];
      }
      return output;
    };
    braces.parse = (input, options = {}) => parse(input, options);
    braces.stringify = (input, options = {}) => {
      if (typeof input === "string") {
        return stringify(braces.parse(input, options), options);
      }
      return stringify(input, options);
    };
    braces.compile = (input, options = {}) => {
      if (typeof input === "string") {
        input = braces.parse(input, options);
      }
      return compile(input, options);
    };
    braces.expand = (input, options = {}) => {
      if (typeof input === "string") {
        input = braces.parse(input, options);
      }
      let result = expand(input, options);
      if (options.noempty === true) {
        result = result.filter(Boolean);
      }
      if (options.nodupes === true) {
        result = [...new Set(result)];
      }
      return result;
    };
    braces.create = (input, options = {}) => {
      if (input === "" || input.length < 3) {
        return [input];
      }
      return options.expand !== true ? braces.compile(input, options) : braces.expand(input, options);
    };
    module2.exports = braces;
  }
});
var require_constants2 = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/constants.js"(exports, module2) {
    "use strict";
    var path3 = (0, import_chunk_2ESYSVXG.__require)("path");
    var WIN_SLASH = "\\\\/";
    var WIN_NO_SLASH = `[^${WIN_SLASH}]`;
    var DOT_LITERAL = "\\.";
    var PLUS_LITERAL = "\\+";
    var QMARK_LITERAL = "\\?";
    var SLASH_LITERAL = "\\/";
    var ONE_CHAR = "(?=.)";
    var QMARK = "[^/]";
    var END_ANCHOR = `(?:${SLASH_LITERAL}|$)`;
    var START_ANCHOR = `(?:^|${SLASH_LITERAL})`;
    var DOTS_SLASH = `${DOT_LITERAL}{1,2}${END_ANCHOR}`;
    var NO_DOT = `(?!${DOT_LITERAL})`;
    var NO_DOTS = `(?!${START_ANCHOR}${DOTS_SLASH})`;
    var NO_DOT_SLASH = `(?!${DOT_LITERAL}{0,1}${END_ANCHOR})`;
    var NO_DOTS_SLASH = `(?!${DOTS_SLASH})`;
    var QMARK_NO_DOT = `[^.${SLASH_LITERAL}]`;
    var STAR = `${QMARK}*?`;
    var POSIX_CHARS = {
      DOT_LITERAL,
      PLUS_LITERAL,
      QMARK_LITERAL,
      SLASH_LITERAL,
      ONE_CHAR,
      QMARK,
      END_ANCHOR,
      DOTS_SLASH,
      NO_DOT,
      NO_DOTS,
      NO_DOT_SLASH,
      NO_DOTS_SLASH,
      QMARK_NO_DOT,
      STAR,
      START_ANCHOR
    };
    var WINDOWS_CHARS = {
      ...POSIX_CHARS,
      SLASH_LITERAL: `[${WIN_SLASH}]`,
      QMARK: WIN_NO_SLASH,
      STAR: `${WIN_NO_SLASH}*?`,
      DOTS_SLASH: `${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$)`,
      NO_DOT: `(?!${DOT_LITERAL})`,
      NO_DOTS: `(?!(?:^|[${WIN_SLASH}])${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
      NO_DOT_SLASH: `(?!${DOT_LITERAL}{0,1}(?:[${WIN_SLASH}]|$))`,
      NO_DOTS_SLASH: `(?!${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
      QMARK_NO_DOT: `[^.${WIN_SLASH}]`,
      START_ANCHOR: `(?:^|[${WIN_SLASH}])`,
      END_ANCHOR: `(?:[${WIN_SLASH}]|$)`
    };
    var POSIX_REGEX_SOURCE = {
      alnum: "a-zA-Z0-9",
      alpha: "a-zA-Z",
      ascii: "\\x00-\\x7F",
      blank: " \\t",
      cntrl: "\\x00-\\x1F\\x7F",
      digit: "0-9",
      graph: "\\x21-\\x7E",
      lower: "a-z",
      print: "\\x20-\\x7E ",
      punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",
      space: " \\t\\r\\n\\v\\f",
      upper: "A-Z",
      word: "A-Za-z0-9_",
      xdigit: "A-Fa-f0-9"
    };
    module2.exports = {
      MAX_LENGTH: 1024 * 64,
      POSIX_REGEX_SOURCE,
      // regular expressions
      REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
      REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
      REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
      REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
      REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
      REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,
      // Replace globs with equivalent patterns to reduce parsing time.
      REPLACEMENTS: {
        "***": "*",
        "**/**": "**",
        "**/**/**": "**"
      },
      // Digits
      CHAR_0: 48,
      /* 0 */
      CHAR_9: 57,
      /* 9 */
      // Alphabet chars.
      CHAR_UPPERCASE_A: 65,
      /* A */
      CHAR_LOWERCASE_A: 97,
      /* a */
      CHAR_UPPERCASE_Z: 90,
      /* Z */
      CHAR_LOWERCASE_Z: 122,
      /* z */
      CHAR_LEFT_PARENTHESES: 40,
      /* ( */
      CHAR_RIGHT_PARENTHESES: 41,
      /* ) */
      CHAR_ASTERISK: 42,
      /* * */
      // Non-alphabetic chars.
      CHAR_AMPERSAND: 38,
      /* & */
      CHAR_AT: 64,
      /* @ */
      CHAR_BACKWARD_SLASH: 92,
      /* \ */
      CHAR_CARRIAGE_RETURN: 13,
      /* \r */
      CHAR_CIRCUMFLEX_ACCENT: 94,
      /* ^ */
      CHAR_COLON: 58,
      /* : */
      CHAR_COMMA: 44,
      /* , */
      CHAR_DOT: 46,
      /* . */
      CHAR_DOUBLE_QUOTE: 34,
      /* " */
      CHAR_EQUAL: 61,
      /* = */
      CHAR_EXCLAMATION_MARK: 33,
      /* ! */
      CHAR_FORM_FEED: 12,
      /* \f */
      CHAR_FORWARD_SLASH: 47,
      /* / */
      CHAR_GRAVE_ACCENT: 96,
      /* ` */
      CHAR_HASH: 35,
      /* # */
      CHAR_HYPHEN_MINUS: 45,
      /* - */
      CHAR_LEFT_ANGLE_BRACKET: 60,
      /* < */
      CHAR_LEFT_CURLY_BRACE: 123,
      /* { */
      CHAR_LEFT_SQUARE_BRACKET: 91,
      /* [ */
      CHAR_LINE_FEED: 10,
      /* \n */
      CHAR_NO_BREAK_SPACE: 160,
      /* \u00A0 */
      CHAR_PERCENT: 37,
      /* % */
      CHAR_PLUS: 43,
      /* + */
      CHAR_QUESTION_MARK: 63,
      /* ? */
      CHAR_RIGHT_ANGLE_BRACKET: 62,
      /* > */
      CHAR_RIGHT_CURLY_BRACE: 125,
      /* } */
      CHAR_RIGHT_SQUARE_BRACKET: 93,
      /* ] */
      CHAR_SEMICOLON: 59,
      /* ; */
      CHAR_SINGLE_QUOTE: 39,
      /* ' */
      CHAR_SPACE: 32,
      /*   */
      CHAR_TAB: 9,
      /* \t */
      CHAR_UNDERSCORE: 95,
      /* _ */
      CHAR_VERTICAL_LINE: 124,
      /* | */
      CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279,
      /* \uFEFF */
      SEP: path3.sep,
      /**
       * Create EXTGLOB_CHARS
       */
      extglobChars(chars) {
        return {
          "!": { type: "negate", open: "(?:(?!(?:", close: `))${chars.STAR})` },
          "?": { type: "qmark", open: "(?:", close: ")?" },
          "+": { type: "plus", open: "(?:", close: ")+" },
          "*": { type: "star", open: "(?:", close: ")*" },
          "@": { type: "at", open: "(?:", close: ")" }
        };
      },
      /**
       * Create GLOB_CHARS
       */
      globChars(win32) {
        return win32 === true ? WINDOWS_CHARS : POSIX_CHARS;
      }
    };
  }
});
var require_utils2 = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/utils.js"(exports) {
    "use strict";
    var path3 = (0, import_chunk_2ESYSVXG.__require)("path");
    var win32 = process.platform === "win32";
    var {
      REGEX_BACKSLASH,
      REGEX_REMOVE_BACKSLASH,
      REGEX_SPECIAL_CHARS,
      REGEX_SPECIAL_CHARS_GLOBAL
    } = require_constants2();
    exports.isObject = (val) => val !== null && typeof val === "object" && !Array.isArray(val);
    exports.hasRegexChars = (str) => REGEX_SPECIAL_CHARS.test(str);
    exports.isRegexChar = (str) => str.length === 1 && exports.hasRegexChars(str);
    exports.escapeRegex = (str) => str.replace(REGEX_SPECIAL_CHARS_GLOBAL, "\\$1");
    exports.toPosixSlashes = (str) => str.replace(REGEX_BACKSLASH, "/");
    exports.removeBackslashes = (str) => {
      return str.replace(REGEX_REMOVE_BACKSLASH, (match) => {
        return match === "\\" ? "" : match;
      });
    };
    exports.supportsLookbehinds = () => {
      const segs = process.version.slice(1).split(".").map(Number);
      if (segs.length === 3 && segs[0] >= 9 || segs[0] === 8 && segs[1] >= 10) {
        return true;
      }
      return false;
    };
    exports.isWindows = (options) => {
      if (options && typeof options.windows === "boolean") {
        return options.windows;
      }
      return win32 === true || path3.sep === "\\";
    };
    exports.escapeLast = (input, char, lastIdx) => {
      const idx = input.lastIndexOf(char, lastIdx);
      if (idx === -1) return input;
      if (input[idx - 1] === "\\") return exports.escapeLast(input, char, idx - 1);
      return `${input.slice(0, idx)}\\${input.slice(idx)}`;
    };
    exports.removePrefix = (input, state = {}) => {
      let output = input;
      if (output.startsWith("./")) {
        output = output.slice(2);
        state.prefix = "./";
      }
      return output;
    };
    exports.wrapOutput = (input, state = {}, options = {}) => {
      const prepend = options.contains ? "" : "^";
      const append = options.contains ? "" : "$";
      let output = `${prepend}(?:${input})${append}`;
      if (state.negated === true) {
        output = `(?:^(?!${output}).*$)`;
      }
      return output;
    };
  }
});
var require_scan = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/scan.js"(exports, module2) {
    "use strict";
    var utils = require_utils2();
    var {
      CHAR_ASTERISK,
      /* * */
      CHAR_AT,
      /* @ */
      CHAR_BACKWARD_SLASH,
      /* \ */
      CHAR_COMMA,
      /* , */
      CHAR_DOT,
      /* . */
      CHAR_EXCLAMATION_MARK,
      /* ! */
      CHAR_FORWARD_SLASH,
      /* / */
      CHAR_LEFT_CURLY_BRACE,
      /* { */
      CHAR_LEFT_PARENTHESES,
      /* ( */
      CHAR_LEFT_SQUARE_BRACKET,
      /* [ */
      CHAR_PLUS,
      /* + */
      CHAR_QUESTION_MARK,
      /* ? */
      CHAR_RIGHT_CURLY_BRACE,
      /* } */
      CHAR_RIGHT_PARENTHESES,
      /* ) */
      CHAR_RIGHT_SQUARE_BRACKET
      /* ] */
    } = require_constants2();
    var isPathSeparator = (code) => {
      return code === CHAR_FORWARD_SLASH || code === CHAR_BACKWARD_SLASH;
    };
    var depth = (token) => {
      if (token.isPrefix !== true) {
        token.depth = token.isGlobstar ? Infinity : 1;
      }
    };
    var scan = (input, options) => {
      const opts = options || {};
      const length = input.length - 1;
      const scanToEnd = opts.parts === true || opts.scanToEnd === true;
      const slashes = [];
      const tokens = [];
      const parts = [];
      let str = input;
      let index = -1;
      let start = 0;
      let lastIndex = 0;
      let isBrace = false;
      let isBracket = false;
      let isGlob = false;
      let isExtglob = false;
      let isGlobstar = false;
      let braceEscaped = false;
      let backslashes = false;
      let negated = false;
      let negatedExtglob = false;
      let finished = false;
      let braces = 0;
      let prev;
      let code;
      let token = { value: "", depth: 0, isGlob: false };
      const eos = () => index >= length;
      const peek = () => str.charCodeAt(index + 1);
      const advance = () => {
        prev = code;
        return str.charCodeAt(++index);
      };
      while (index < length) {
        code = advance();
        let next;
        if (code === CHAR_BACKWARD_SLASH) {
          backslashes = token.backslashes = true;
          code = advance();
          if (code === CHAR_LEFT_CURLY_BRACE) {
            braceEscaped = true;
          }
          continue;
        }
        if (braceEscaped === true || code === CHAR_LEFT_CURLY_BRACE) {
          braces++;
          while (eos() !== true && (code = advance())) {
            if (code === CHAR_BACKWARD_SLASH) {
              backslashes = token.backslashes = true;
              advance();
              continue;
            }
            if (code === CHAR_LEFT_CURLY_BRACE) {
              braces++;
              continue;
            }
            if (braceEscaped !== true && code === CHAR_DOT && (code = advance()) === CHAR_DOT) {
              isBrace = token.isBrace = true;
              isGlob = token.isGlob = true;
              finished = true;
              if (scanToEnd === true) {
                continue;
              }
              break;
            }
            if (braceEscaped !== true && code === CHAR_COMMA) {
              isBrace = token.isBrace = true;
              isGlob = token.isGlob = true;
              finished = true;
              if (scanToEnd === true) {
                continue;
              }
              break;
            }
            if (code === CHAR_RIGHT_CURLY_BRACE) {
              braces--;
              if (braces === 0) {
                braceEscaped = false;
                isBrace = token.isBrace = true;
                finished = true;
                break;
              }
            }
          }
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (code === CHAR_FORWARD_SLASH) {
          slashes.push(index);
          tokens.push(token);
          token = { value: "", depth: 0, isGlob: false };
          if (finished === true) continue;
          if (prev === CHAR_DOT && index === start + 1) {
            start += 2;
            continue;
          }
          lastIndex = index + 1;
          continue;
        }
        if (opts.noext !== true) {
          const isExtglobChar = code === CHAR_PLUS || code === CHAR_AT || code === CHAR_ASTERISK || code === CHAR_QUESTION_MARK || code === CHAR_EXCLAMATION_MARK;
          if (isExtglobChar === true && peek() === CHAR_LEFT_PARENTHESES) {
            isGlob = token.isGlob = true;
            isExtglob = token.isExtglob = true;
            finished = true;
            if (code === CHAR_EXCLAMATION_MARK && index === start) {
              negatedExtglob = true;
            }
            if (scanToEnd === true) {
              while (eos() !== true && (code = advance())) {
                if (code === CHAR_BACKWARD_SLASH) {
                  backslashes = token.backslashes = true;
                  code = advance();
                  continue;
                }
                if (code === CHAR_RIGHT_PARENTHESES) {
                  isGlob = token.isGlob = true;
                  finished = true;
                  break;
                }
              }
              continue;
            }
            break;
          }
        }
        if (code === CHAR_ASTERISK) {
          if (prev === CHAR_ASTERISK) isGlobstar = token.isGlobstar = true;
          isGlob = token.isGlob = true;
          finished = true;
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (code === CHAR_QUESTION_MARK) {
          isGlob = token.isGlob = true;
          finished = true;
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (code === CHAR_LEFT_SQUARE_BRACKET) {
          while (eos() !== true && (next = advance())) {
            if (next === CHAR_BACKWARD_SLASH) {
              backslashes = token.backslashes = true;
              advance();
              continue;
            }
            if (next === CHAR_RIGHT_SQUARE_BRACKET) {
              isBracket = token.isBracket = true;
              isGlob = token.isGlob = true;
              finished = true;
              break;
            }
          }
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (opts.nonegate !== true && code === CHAR_EXCLAMATION_MARK && index === start) {
          negated = token.negated = true;
          start++;
          continue;
        }
        if (opts.noparen !== true && code === CHAR_LEFT_PARENTHESES) {
          isGlob = token.isGlob = true;
          if (scanToEnd === true) {
            while (eos() !== true && (code = advance())) {
              if (code === CHAR_LEFT_PARENTHESES) {
                backslashes = token.backslashes = true;
                code = advance();
                continue;
              }
              if (code === CHAR_RIGHT_PARENTHESES) {
                finished = true;
                break;
              }
            }
            continue;
          }
          break;
        }
        if (isGlob === true) {
          finished = true;
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
      }
      if (opts.noext === true) {
        isExtglob = false;
        isGlob = false;
      }
      let base = str;
      let prefix = "";
      let glob = "";
      if (start > 0) {
        prefix = str.slice(0, start);
        str = str.slice(start);
        lastIndex -= start;
      }
      if (base && isGlob === true && lastIndex > 0) {
        base = str.slice(0, lastIndex);
        glob = str.slice(lastIndex);
      } else if (isGlob === true) {
        base = "";
        glob = str;
      } else {
        base = str;
      }
      if (base && base !== "" && base !== "/" && base !== str) {
        if (isPathSeparator(base.charCodeAt(base.length - 1))) {
          base = base.slice(0, -1);
        }
      }
      if (opts.unescape === true) {
        if (glob) glob = utils.removeBackslashes(glob);
        if (base && backslashes === true) {
          base = utils.removeBackslashes(base);
        }
      }
      const state = {
        prefix,
        input,
        start,
        base,
        glob,
        isBrace,
        isBracket,
        isGlob,
        isExtglob,
        isGlobstar,
        negated,
        negatedExtglob
      };
      if (opts.tokens === true) {
        state.maxDepth = 0;
        if (!isPathSeparator(code)) {
          tokens.push(token);
        }
        state.tokens = tokens;
      }
      if (opts.parts === true || opts.tokens === true) {
        let prevIndex;
        for (let idx = 0; idx < slashes.length; idx++) {
          const n = prevIndex ? prevIndex + 1 : start;
          const i = slashes[idx];
          const value = input.slice(n, i);
          if (opts.tokens) {
            if (idx === 0 && start !== 0) {
              tokens[idx].isPrefix = true;
              tokens[idx].value = prefix;
            } else {
              tokens[idx].value = value;
            }
            depth(tokens[idx]);
            state.maxDepth += tokens[idx].depth;
          }
          if (idx !== 0 || value !== "") {
            parts.push(value);
          }
          prevIndex = i;
        }
        if (prevIndex && prevIndex + 1 < input.length) {
          const value = input.slice(prevIndex + 1);
          parts.push(value);
          if (opts.tokens) {
            tokens[tokens.length - 1].value = value;
            depth(tokens[tokens.length - 1]);
            state.maxDepth += tokens[tokens.length - 1].depth;
          }
        }
        state.slashes = slashes;
        state.parts = parts;
      }
      return state;
    };
    module2.exports = scan;
  }
});
var require_parse3 = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/parse.js"(exports, module2) {
    "use strict";
    var constants3 = require_constants2();
    var utils = require_utils2();
    var {
      MAX_LENGTH,
      POSIX_REGEX_SOURCE,
      REGEX_NON_SPECIAL_CHARS,
      REGEX_SPECIAL_CHARS_BACKREF,
      REPLACEMENTS
    } = constants3;
    var expandRange = (args, options) => {
      if (typeof options.expandRange === "function") {
        return options.expandRange(...args, options);
      }
      args.sort();
      const value = `[${args.join("-")}]`;
      try {
        new RegExp(value);
      } catch (ex) {
        return args.map((v) => utils.escapeRegex(v)).join("..");
      }
      return value;
    };
    var syntaxError = (type, char) => {
      return `Missing ${type}: "${char}" - use "\\\\${char}" to match literal characters`;
    };
    var parse = (input, options) => {
      if (typeof input !== "string") {
        throw new TypeError("Expected a string");
      }
      input = REPLACEMENTS[input] || input;
      const opts = { ...options };
      const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
      let len = input.length;
      if (len > max) {
        throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
      }
      const bos = { type: "bos", value: "", output: opts.prepend || "" };
      const tokens = [bos];
      const capture = opts.capture ? "" : "?:";
      const win32 = utils.isWindows(options);
      const PLATFORM_CHARS = constants3.globChars(win32);
      const EXTGLOB_CHARS = constants3.extglobChars(PLATFORM_CHARS);
      const {
        DOT_LITERAL,
        PLUS_LITERAL,
        SLASH_LITERAL,
        ONE_CHAR,
        DOTS_SLASH,
        NO_DOT,
        NO_DOT_SLASH,
        NO_DOTS_SLASH,
        QMARK,
        QMARK_NO_DOT,
        STAR,
        START_ANCHOR
      } = PLATFORM_CHARS;
      const globstar = (opts2) => {
        return `(${capture}(?:(?!${START_ANCHOR}${opts2.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
      };
      const nodot = opts.dot ? "" : NO_DOT;
      const qmarkNoDot = opts.dot ? QMARK : QMARK_NO_DOT;
      let star = opts.bash === true ? globstar(opts) : STAR;
      if (opts.capture) {
        star = `(${star})`;
      }
      if (typeof opts.noext === "boolean") {
        opts.noextglob = opts.noext;
      }
      const state = {
        input,
        index: -1,
        start: 0,
        dot: opts.dot === true,
        consumed: "",
        output: "",
        prefix: "",
        backtrack: false,
        negated: false,
        brackets: 0,
        braces: 0,
        parens: 0,
        quotes: 0,
        globstar: false,
        tokens
      };
      input = utils.removePrefix(input, state);
      len = input.length;
      const extglobs = [];
      const braces = [];
      const stack = [];
      let prev = bos;
      let value;
      const eos = () => state.index === len - 1;
      const peek = state.peek = (n = 1) => input[state.index + n];
      const advance = state.advance = () => input[++state.index] || "";
      const remaining = () => input.slice(state.index + 1);
      const consume = (value2 = "", num = 0) => {
        state.consumed += value2;
        state.index += num;
      };
      const append = (token) => {
        state.output += token.output != null ? token.output : token.value;
        consume(token.value);
      };
      const negate = () => {
        let count = 1;
        while (peek() === "!" && (peek(2) !== "(" || peek(3) === "?")) {
          advance();
          state.start++;
          count++;
        }
        if (count % 2 === 0) {
          return false;
        }
        state.negated = true;
        state.start++;
        return true;
      };
      const increment = (type) => {
        state[type]++;
        stack.push(type);
      };
      const decrement = (type) => {
        state[type]--;
        stack.pop();
      };
      const push = (tok) => {
        if (prev.type === "globstar") {
          const isBrace = state.braces > 0 && (tok.type === "comma" || tok.type === "brace");
          const isExtglob = tok.extglob === true || extglobs.length && (tok.type === "pipe" || tok.type === "paren");
          if (tok.type !== "slash" && tok.type !== "paren" && !isBrace && !isExtglob) {
            state.output = state.output.slice(0, -prev.output.length);
            prev.type = "star";
            prev.value = "*";
            prev.output = star;
            state.output += prev.output;
          }
        }
        if (extglobs.length && tok.type !== "paren") {
          extglobs[extglobs.length - 1].inner += tok.value;
        }
        if (tok.value || tok.output) append(tok);
        if (prev && prev.type === "text" && tok.type === "text") {
          prev.value += tok.value;
          prev.output = (prev.output || "") + tok.value;
          return;
        }
        tok.prev = prev;
        tokens.push(tok);
        prev = tok;
      };
      const extglobOpen = (type, value2) => {
        const token = { ...EXTGLOB_CHARS[value2], conditions: 1, inner: "" };
        token.prev = prev;
        token.parens = state.parens;
        token.output = state.output;
        const output = (opts.capture ? "(" : "") + token.open;
        increment("parens");
        push({ type, value: value2, output: state.output ? "" : ONE_CHAR });
        push({ type: "paren", extglob: true, value: advance(), output });
        extglobs.push(token);
      };
      const extglobClose = (token) => {
        let output = token.close + (opts.capture ? ")" : "");
        let rest;
        if (token.type === "negate") {
          let extglobStar = star;
          if (token.inner && token.inner.length > 1 && token.inner.includes("/")) {
            extglobStar = globstar(opts);
          }
          if (extglobStar !== star || eos() || /^\)+$/.test(remaining())) {
            output = token.close = `)$))${extglobStar}`;
          }
          if (token.inner.includes("*") && (rest = remaining()) && /^\.[^\\/.]+$/.test(rest)) {
            const expression = parse(rest, { ...options, fastpaths: false }).output;
            output = token.close = `)${expression})${extglobStar})`;
          }
          if (token.prev.type === "bos") {
            state.negatedExtglob = true;
          }
        }
        push({ type: "paren", extglob: true, value, output });
        decrement("parens");
      };
      if (opts.fastpaths !== false && !/(^[*!]|[/()[\]{}"])/.test(input)) {
        let backslashes = false;
        let output = input.replace(REGEX_SPECIAL_CHARS_BACKREF, (m, esc, chars, first, rest, index) => {
          if (first === "\\") {
            backslashes = true;
            return m;
          }
          if (first === "?") {
            if (esc) {
              return esc + first + (rest ? QMARK.repeat(rest.length) : "");
            }
            if (index === 0) {
              return qmarkNoDot + (rest ? QMARK.repeat(rest.length) : "");
            }
            return QMARK.repeat(chars.length);
          }
          if (first === ".") {
            return DOT_LITERAL.repeat(chars.length);
          }
          if (first === "*") {
            if (esc) {
              return esc + first + (rest ? star : "");
            }
            return star;
          }
          return esc ? m : `\\${m}`;
        });
        if (backslashes === true) {
          if (opts.unescape === true) {
            output = output.replace(/\\/g, "");
          } else {
            output = output.replace(/\\+/g, (m) => {
              return m.length % 2 === 0 ? "\\\\" : m ? "\\" : "";
            });
          }
        }
        if (output === input && opts.contains === true) {
          state.output = input;
          return state;
        }
        state.output = utils.wrapOutput(output, state, options);
        return state;
      }
      while (!eos()) {
        value = advance();
        if (value === "\0") {
          continue;
        }
        if (value === "\\") {
          const next = peek();
          if (next === "/" && opts.bash !== true) {
            continue;
          }
          if (next === "." || next === ";") {
            continue;
          }
          if (!next) {
            value += "\\";
            push({ type: "text", value });
            continue;
          }
          const match = /^\\+/.exec(remaining());
          let slashes = 0;
          if (match && match[0].length > 2) {
            slashes = match[0].length;
            state.index += slashes;
            if (slashes % 2 !== 0) {
              value += "\\";
            }
          }
          if (opts.unescape === true) {
            value = advance();
          } else {
            value += advance();
          }
          if (state.brackets === 0) {
            push({ type: "text", value });
            continue;
          }
        }
        if (state.brackets > 0 && (value !== "]" || prev.value === "[" || prev.value === "[^")) {
          if (opts.posix !== false && value === ":") {
            const inner = prev.value.slice(1);
            if (inner.includes("[")) {
              prev.posix = true;
              if (inner.includes(":")) {
                const idx = prev.value.lastIndexOf("[");
                const pre = prev.value.slice(0, idx);
                const rest2 = prev.value.slice(idx + 2);
                const posix = POSIX_REGEX_SOURCE[rest2];
                if (posix) {
                  prev.value = pre + posix;
                  state.backtrack = true;
                  advance();
                  if (!bos.output && tokens.indexOf(prev) === 1) {
                    bos.output = ONE_CHAR;
                  }
                  continue;
                }
              }
            }
          }
          if (value === "[" && peek() !== ":" || value === "-" && peek() === "]") {
            value = `\\${value}`;
          }
          if (value === "]" && (prev.value === "[" || prev.value === "[^")) {
            value = `\\${value}`;
          }
          if (opts.posix === true && value === "!" && prev.value === "[") {
            value = "^";
          }
          prev.value += value;
          append({ value });
          continue;
        }
        if (state.quotes === 1 && value !== '"') {
          value = utils.escapeRegex(value);
          prev.value += value;
          append({ value });
          continue;
        }
        if (value === '"') {
          state.quotes = state.quotes === 1 ? 0 : 1;
          if (opts.keepQuotes === true) {
            push({ type: "text", value });
          }
          continue;
        }
        if (value === "(") {
          increment("parens");
          push({ type: "paren", value });
          continue;
        }
        if (value === ")") {
          if (state.parens === 0 && opts.strictBrackets === true) {
            throw new SyntaxError(syntaxError("opening", "("));
          }
          const extglob = extglobs[extglobs.length - 1];
          if (extglob && state.parens === extglob.parens + 1) {
            extglobClose(extglobs.pop());
            continue;
          }
          push({ type: "paren", value, output: state.parens ? ")" : "\\)" });
          decrement("parens");
          continue;
        }
        if (value === "[") {
          if (opts.nobracket === true || !remaining().includes("]")) {
            if (opts.nobracket !== true && opts.strictBrackets === true) {
              throw new SyntaxError(syntaxError("closing", "]"));
            }
            value = `\\${value}`;
          } else {
            increment("brackets");
          }
          push({ type: "bracket", value });
          continue;
        }
        if (value === "]") {
          if (opts.nobracket === true || prev && prev.type === "bracket" && prev.value.length === 1) {
            push({ type: "text", value, output: `\\${value}` });
            continue;
          }
          if (state.brackets === 0) {
            if (opts.strictBrackets === true) {
              throw new SyntaxError(syntaxError("opening", "["));
            }
            push({ type: "text", value, output: `\\${value}` });
            continue;
          }
          decrement("brackets");
          const prevValue = prev.value.slice(1);
          if (prev.posix !== true && prevValue[0] === "^" && !prevValue.includes("/")) {
            value = `/${value}`;
          }
          prev.value += value;
          append({ value });
          if (opts.literalBrackets === false || utils.hasRegexChars(prevValue)) {
            continue;
          }
          const escaped = utils.escapeRegex(prev.value);
          state.output = state.output.slice(0, -prev.value.length);
          if (opts.literalBrackets === true) {
            state.output += escaped;
            prev.value = escaped;
            continue;
          }
          prev.value = `(${capture}${escaped}|${prev.value})`;
          state.output += prev.value;
          continue;
        }
        if (value === "{" && opts.nobrace !== true) {
          increment("braces");
          const open = {
            type: "brace",
            value,
            output: "(",
            outputIndex: state.output.length,
            tokensIndex: state.tokens.length
          };
          braces.push(open);
          push(open);
          continue;
        }
        if (value === "}") {
          const brace = braces[braces.length - 1];
          if (opts.nobrace === true || !brace) {
            push({ type: "text", value, output: value });
            continue;
          }
          let output = ")";
          if (brace.dots === true) {
            const arr = tokens.slice();
            const range = [];
            for (let i = arr.length - 1; i >= 0; i--) {
              tokens.pop();
              if (arr[i].type === "brace") {
                break;
              }
              if (arr[i].type !== "dots") {
                range.unshift(arr[i].value);
              }
            }
            output = expandRange(range, opts);
            state.backtrack = true;
          }
          if (brace.comma !== true && brace.dots !== true) {
            const out = state.output.slice(0, brace.outputIndex);
            const toks = state.tokens.slice(brace.tokensIndex);
            brace.value = brace.output = "\\{";
            value = output = "\\}";
            state.output = out;
            for (const t of toks) {
              state.output += t.output || t.value;
            }
          }
          push({ type: "brace", value, output });
          decrement("braces");
          braces.pop();
          continue;
        }
        if (value === "|") {
          if (extglobs.length > 0) {
            extglobs[extglobs.length - 1].conditions++;
          }
          push({ type: "text", value });
          continue;
        }
        if (value === ",") {
          let output = value;
          const brace = braces[braces.length - 1];
          if (brace && stack[stack.length - 1] === "braces") {
            brace.comma = true;
            output = "|";
          }
          push({ type: "comma", value, output });
          continue;
        }
        if (value === "/") {
          if (prev.type === "dot" && state.index === state.start + 1) {
            state.start = state.index + 1;
            state.consumed = "";
            state.output = "";
            tokens.pop();
            prev = bos;
            continue;
          }
          push({ type: "slash", value, output: SLASH_LITERAL });
          continue;
        }
        if (value === ".") {
          if (state.braces > 0 && prev.type === "dot") {
            if (prev.value === ".") prev.output = DOT_LITERAL;
            const brace = braces[braces.length - 1];
            prev.type = "dots";
            prev.output += value;
            prev.value += value;
            brace.dots = true;
            continue;
          }
          if (state.braces + state.parens === 0 && prev.type !== "bos" && prev.type !== "slash") {
            push({ type: "text", value, output: DOT_LITERAL });
            continue;
          }
          push({ type: "dot", value, output: DOT_LITERAL });
          continue;
        }
        if (value === "?") {
          const isGroup = prev && prev.value === "(";
          if (!isGroup && opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
            extglobOpen("qmark", value);
            continue;
          }
          if (prev && prev.type === "paren") {
            const next = peek();
            let output = value;
            if (next === "<" && !utils.supportsLookbehinds()) {
              throw new Error("Node.js v10 or higher is required for regex lookbehinds");
            }
            if (prev.value === "(" && !/[!=<:]/.test(next) || next === "<" && !/<([!=]|\w+>)/.test(remaining())) {
              output = `\\${value}`;
            }
            push({ type: "text", value, output });
            continue;
          }
          if (opts.dot !== true && (prev.type === "slash" || prev.type === "bos")) {
            push({ type: "qmark", value, output: QMARK_NO_DOT });
            continue;
          }
          push({ type: "qmark", value, output: QMARK });
          continue;
        }
        if (value === "!") {
          if (opts.noextglob !== true && peek() === "(") {
            if (peek(2) !== "?" || !/[!=<:]/.test(peek(3))) {
              extglobOpen("negate", value);
              continue;
            }
          }
          if (opts.nonegate !== true && state.index === 0) {
            negate();
            continue;
          }
        }
        if (value === "+") {
          if (opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
            extglobOpen("plus", value);
            continue;
          }
          if (prev && prev.value === "(" || opts.regex === false) {
            push({ type: "plus", value, output: PLUS_LITERAL });
            continue;
          }
          if (prev && (prev.type === "bracket" || prev.type === "paren" || prev.type === "brace") || state.parens > 0) {
            push({ type: "plus", value });
            continue;
          }
          push({ type: "plus", value: PLUS_LITERAL });
          continue;
        }
        if (value === "@") {
          if (opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
            push({ type: "at", extglob: true, value, output: "" });
            continue;
          }
          push({ type: "text", value });
          continue;
        }
        if (value !== "*") {
          if (value === "$" || value === "^") {
            value = `\\${value}`;
          }
          const match = REGEX_NON_SPECIAL_CHARS.exec(remaining());
          if (match) {
            value += match[0];
            state.index += match[0].length;
          }
          push({ type: "text", value });
          continue;
        }
        if (prev && (prev.type === "globstar" || prev.star === true)) {
          prev.type = "star";
          prev.star = true;
          prev.value += value;
          prev.output = star;
          state.backtrack = true;
          state.globstar = true;
          consume(value);
          continue;
        }
        let rest = remaining();
        if (opts.noextglob !== true && /^\([^?]/.test(rest)) {
          extglobOpen("star", value);
          continue;
        }
        if (prev.type === "star") {
          if (opts.noglobstar === true) {
            consume(value);
            continue;
          }
          const prior = prev.prev;
          const before = prior.prev;
          const isStart = prior.type === "slash" || prior.type === "bos";
          const afterStar = before && (before.type === "star" || before.type === "globstar");
          if (opts.bash === true && (!isStart || rest[0] && rest[0] !== "/")) {
            push({ type: "star", value, output: "" });
            continue;
          }
          const isBrace = state.braces > 0 && (prior.type === "comma" || prior.type === "brace");
          const isExtglob = extglobs.length && (prior.type === "pipe" || prior.type === "paren");
          if (!isStart && prior.type !== "paren" && !isBrace && !isExtglob) {
            push({ type: "star", value, output: "" });
            continue;
          }
          while (rest.slice(0, 3) === "/**") {
            const after = input[state.index + 4];
            if (after && after !== "/") {
              break;
            }
            rest = rest.slice(3);
            consume("/**", 3);
          }
          if (prior.type === "bos" && eos()) {
            prev.type = "globstar";
            prev.value += value;
            prev.output = globstar(opts);
            state.output = prev.output;
            state.globstar = true;
            consume(value);
            continue;
          }
          if (prior.type === "slash" && prior.prev.type !== "bos" && !afterStar && eos()) {
            state.output = state.output.slice(0, -(prior.output + prev.output).length);
            prior.output = `(?:${prior.output}`;
            prev.type = "globstar";
            prev.output = globstar(opts) + (opts.strictSlashes ? ")" : "|$)");
            prev.value += value;
            state.globstar = true;
            state.output += prior.output + prev.output;
            consume(value);
            continue;
          }
          if (prior.type === "slash" && prior.prev.type !== "bos" && rest[0] === "/") {
            const end = rest[1] !== void 0 ? "|$" : "";
            state.output = state.output.slice(0, -(prior.output + prev.output).length);
            prior.output = `(?:${prior.output}`;
            prev.type = "globstar";
            prev.output = `${globstar(opts)}${SLASH_LITERAL}|${SLASH_LITERAL}${end})`;
            prev.value += value;
            state.output += prior.output + prev.output;
            state.globstar = true;
            consume(value + advance());
            push({ type: "slash", value: "/", output: "" });
            continue;
          }
          if (prior.type === "bos" && rest[0] === "/") {
            prev.type = "globstar";
            prev.value += value;
            prev.output = `(?:^|${SLASH_LITERAL}|${globstar(opts)}${SLASH_LITERAL})`;
            state.output = prev.output;
            state.globstar = true;
            consume(value + advance());
            push({ type: "slash", value: "/", output: "" });
            continue;
          }
          state.output = state.output.slice(0, -prev.output.length);
          prev.type = "globstar";
          prev.output = globstar(opts);
          prev.value += value;
          state.output += prev.output;
          state.globstar = true;
          consume(value);
          continue;
        }
        const token = { type: "star", value, output: star };
        if (opts.bash === true) {
          token.output = ".*?";
          if (prev.type === "bos" || prev.type === "slash") {
            token.output = nodot + token.output;
          }
          push(token);
          continue;
        }
        if (prev && (prev.type === "bracket" || prev.type === "paren") && opts.regex === true) {
          token.output = value;
          push(token);
          continue;
        }
        if (state.index === state.start || prev.type === "slash" || prev.type === "dot") {
          if (prev.type === "dot") {
            state.output += NO_DOT_SLASH;
            prev.output += NO_DOT_SLASH;
          } else if (opts.dot === true) {
            state.output += NO_DOTS_SLASH;
            prev.output += NO_DOTS_SLASH;
          } else {
            state.output += nodot;
            prev.output += nodot;
          }
          if (peek() !== "*") {
            state.output += ONE_CHAR;
            prev.output += ONE_CHAR;
          }
        }
        push(token);
      }
      while (state.brackets > 0) {
        if (opts.strictBrackets === true) throw new SyntaxError(syntaxError("closing", "]"));
        state.output = utils.escapeLast(state.output, "[");
        decrement("brackets");
      }
      while (state.parens > 0) {
        if (opts.strictBrackets === true) throw new SyntaxError(syntaxError("closing", ")"));
        state.output = utils.escapeLast(state.output, "(");
        decrement("parens");
      }
      while (state.braces > 0) {
        if (opts.strictBrackets === true) throw new SyntaxError(syntaxError("closing", "}"));
        state.output = utils.escapeLast(state.output, "{");
        decrement("braces");
      }
      if (opts.strictSlashes !== true && (prev.type === "star" || prev.type === "bracket")) {
        push({ type: "maybe_slash", value: "", output: `${SLASH_LITERAL}?` });
      }
      if (state.backtrack === true) {
        state.output = "";
        for (const token of state.tokens) {
          state.output += token.output != null ? token.output : token.value;
          if (token.suffix) {
            state.output += token.suffix;
          }
        }
      }
      return state;
    };
    parse.fastpaths = (input, options) => {
      const opts = { ...options };
      const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
      const len = input.length;
      if (len > max) {
        throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
      }
      input = REPLACEMENTS[input] || input;
      const win32 = utils.isWindows(options);
      const {
        DOT_LITERAL,
        SLASH_LITERAL,
        ONE_CHAR,
        DOTS_SLASH,
        NO_DOT,
        NO_DOTS,
        NO_DOTS_SLASH,
        STAR,
        START_ANCHOR
      } = constants3.globChars(win32);
      const nodot = opts.dot ? NO_DOTS : NO_DOT;
      const slashDot = opts.dot ? NO_DOTS_SLASH : NO_DOT;
      const capture = opts.capture ? "" : "?:";
      const state = { negated: false, prefix: "" };
      let star = opts.bash === true ? ".*?" : STAR;
      if (opts.capture) {
        star = `(${star})`;
      }
      const globstar = (opts2) => {
        if (opts2.noglobstar === true) return star;
        return `(${capture}(?:(?!${START_ANCHOR}${opts2.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
      };
      const create = (str) => {
        switch (str) {
          case "*":
            return `${nodot}${ONE_CHAR}${star}`;
          case ".*":
            return `${DOT_LITERAL}${ONE_CHAR}${star}`;
          case "*.*":
            return `${nodot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;
          case "*/*":
            return `${nodot}${star}${SLASH_LITERAL}${ONE_CHAR}${slashDot}${star}`;
          case "**":
            return nodot + globstar(opts);
          case "**/*":
            return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${ONE_CHAR}${star}`;
          case "**/*.*":
            return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;
          case "**/.*":
            return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${DOT_LITERAL}${ONE_CHAR}${star}`;
          default: {
            const match = /^(.*?)\.(\w+)$/.exec(str);
            if (!match) return;
            const source2 = create(match[1]);
            if (!source2) return;
            return source2 + DOT_LITERAL + match[2];
          }
        }
      };
      const output = utils.removePrefix(input, state);
      let source = create(output);
      if (source && opts.strictSlashes !== true) {
        source += `${SLASH_LITERAL}?`;
      }
      return source;
    };
    module2.exports = parse;
  }
});
var require_picomatch = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/picomatch.js"(exports, module2) {
    "use strict";
    var path3 = (0, import_chunk_2ESYSVXG.__require)("path");
    var scan = require_scan();
    var parse = require_parse3();
    var utils = require_utils2();
    var constants3 = require_constants2();
    var isObject = (val) => val && typeof val === "object" && !Array.isArray(val);
    var picomatch = (glob, options, returnState = false) => {
      if (Array.isArray(glob)) {
        const fns = glob.map((input) => picomatch(input, options, returnState));
        const arrayMatcher = (str) => {
          for (const isMatch of fns) {
            const state2 = isMatch(str);
            if (state2) return state2;
          }
          return false;
        };
        return arrayMatcher;
      }
      const isState = isObject(glob) && glob.tokens && glob.input;
      if (glob === "" || typeof glob !== "string" && !isState) {
        throw new TypeError("Expected pattern to be a non-empty string");
      }
      const opts = options || {};
      const posix = utils.isWindows(options);
      const regex = isState ? picomatch.compileRe(glob, options) : picomatch.makeRe(glob, options, false, true);
      const state = regex.state;
      delete regex.state;
      let isIgnored = () => false;
      if (opts.ignore) {
        const ignoreOpts = { ...options, ignore: null, onMatch: null, onResult: null };
        isIgnored = picomatch(opts.ignore, ignoreOpts, returnState);
      }
      const matcher = (input, returnObject = false) => {
        const { isMatch, match, output } = picomatch.test(input, regex, options, { glob, posix });
        const result = { glob, state, regex, posix, input, output, match, isMatch };
        if (typeof opts.onResult === "function") {
          opts.onResult(result);
        }
        if (isMatch === false) {
          result.isMatch = false;
          return returnObject ? result : false;
        }
        if (isIgnored(input)) {
          if (typeof opts.onIgnore === "function") {
            opts.onIgnore(result);
          }
          result.isMatch = false;
          return returnObject ? result : false;
        }
        if (typeof opts.onMatch === "function") {
          opts.onMatch(result);
        }
        return returnObject ? result : true;
      };
      if (returnState) {
        matcher.state = state;
      }
      return matcher;
    };
    picomatch.test = (input, regex, options, { glob, posix } = {}) => {
      if (typeof input !== "string") {
        throw new TypeError("Expected input to be a string");
      }
      if (input === "") {
        return { isMatch: false, output: "" };
      }
      const opts = options || {};
      const format = opts.format || (posix ? utils.toPosixSlashes : null);
      let match = input === glob;
      let output = match && format ? format(input) : input;
      if (match === false) {
        output = format ? format(input) : input;
        match = output === glob;
      }
      if (match === false || opts.capture === true) {
        if (opts.matchBase === true || opts.basename === true) {
          match = picomatch.matchBase(input, regex, options, posix);
        } else {
          match = regex.exec(output);
        }
      }
      return { isMatch: Boolean(match), match, output };
    };
    picomatch.matchBase = (input, glob, options, posix = utils.isWindows(options)) => {
      const regex = glob instanceof RegExp ? glob : picomatch.makeRe(glob, options);
      return regex.test(path3.basename(input));
    };
    picomatch.isMatch = (str, patterns, options) => picomatch(patterns, options)(str);
    picomatch.parse = (pattern, options) => {
      if (Array.isArray(pattern)) return pattern.map((p) => picomatch.parse(p, options));
      return parse(pattern, { ...options, fastpaths: false });
    };
    picomatch.scan = (input, options) => scan(input, options);
    picomatch.compileRe = (state, options, returnOutput = false, returnState = false) => {
      if (returnOutput === true) {
        return state.output;
      }
      const opts = options || {};
      const prepend = opts.contains ? "" : "^";
      const append = opts.contains ? "" : "$";
      let source = `${prepend}(?:${state.output})${append}`;
      if (state && state.negated === true) {
        source = `^(?!${source}).*$`;
      }
      const regex = picomatch.toRegex(source, options);
      if (returnState === true) {
        regex.state = state;
      }
      return regex;
    };
    picomatch.makeRe = (input, options = {}, returnOutput = false, returnState = false) => {
      if (!input || typeof input !== "string") {
        throw new TypeError("Expected a non-empty string");
      }
      let parsed = { negated: false, fastpaths: true };
      if (options.fastpaths !== false && (input[0] === "." || input[0] === "*")) {
        parsed.output = parse.fastpaths(input, options);
      }
      if (!parsed.output) {
        parsed = parse(input, options);
      }
      return picomatch.compileRe(parsed, options, returnOutput, returnState);
    };
    picomatch.toRegex = (source, options) => {
      try {
        const opts = options || {};
        return new RegExp(source, opts.flags || (opts.nocase ? "i" : ""));
      } catch (err) {
        if (options && options.debug === true) throw err;
        return /$^/;
      }
    };
    picomatch.constants = constants3;
    module2.exports = picomatch;
  }
});
var require_picomatch2 = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/index.js"(exports, module2) {
    "use strict";
    module2.exports = require_picomatch();
  }
});
var require_micromatch = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/micromatch@4.0.8/node_modules/micromatch/index.js"(exports, module2) {
    "use strict";
    var util = (0, import_chunk_2ESYSVXG.__require)("util");
    var braces = require_braces();
    var picomatch = require_picomatch2();
    var utils = require_utils2();
    var isEmptyString = (v) => v === "" || v === "./";
    var hasBraces = (v) => {
      const index = v.indexOf("{");
      return index > -1 && v.indexOf("}", index) > -1;
    };
    var micromatch = (list, patterns, options) => {
      patterns = [].concat(patterns);
      list = [].concat(list);
      let omit = /* @__PURE__ */ new Set();
      let keep = /* @__PURE__ */ new Set();
      let items = /* @__PURE__ */ new Set();
      let negatives = 0;
      let onResult = (state) => {
        items.add(state.output);
        if (options && options.onResult) {
          options.onResult(state);
        }
      };
      for (let i = 0; i < patterns.length; i++) {
        let isMatch = picomatch(String(patterns[i]), { ...options, onResult }, true);
        let negated = isMatch.state.negated || isMatch.state.negatedExtglob;
        if (negated) negatives++;
        for (let item of list) {
          let matched = isMatch(item, true);
          let match = negated ? !matched.isMatch : matched.isMatch;
          if (!match) continue;
          if (negated) {
            omit.add(matched.output);
          } else {
            omit.delete(matched.output);
            keep.add(matched.output);
          }
        }
      }
      let result = negatives === patterns.length ? [...items] : [...keep];
      let matches = result.filter((item) => !omit.has(item));
      if (options && matches.length === 0) {
        if (options.failglob === true) {
          throw new Error(`No matches found for "${patterns.join(", ")}"`);
        }
        if (options.nonull === true || options.nullglob === true) {
          return options.unescape ? patterns.map((p) => p.replace(/\\/g, "")) : patterns;
        }
      }
      return matches;
    };
    micromatch.match = micromatch;
    micromatch.matcher = (pattern, options) => picomatch(pattern, options);
    micromatch.isMatch = (str, patterns, options) => picomatch(patterns, options)(str);
    micromatch.any = micromatch.isMatch;
    micromatch.not = (list, patterns, options = {}) => {
      patterns = [].concat(patterns).map(String);
      let result = /* @__PURE__ */ new Set();
      let items = [];
      let onResult = (state) => {
        if (options.onResult) options.onResult(state);
        items.push(state.output);
      };
      let matches = new Set(micromatch(list, patterns, { ...options, onResult }));
      for (let item of items) {
        if (!matches.has(item)) {
          result.add(item);
        }
      }
      return [...result];
    };
    micromatch.contains = (str, pattern, options) => {
      if (typeof str !== "string") {
        throw new TypeError(`Expected a string: "${util.inspect(str)}"`);
      }
      if (Array.isArray(pattern)) {
        return pattern.some((p) => micromatch.contains(str, p, options));
      }
      if (typeof pattern === "string") {
        if (isEmptyString(str) || isEmptyString(pattern)) {
          return false;
        }
        if (str.includes(pattern) || str.startsWith("./") && str.slice(2).includes(pattern)) {
          return true;
        }
      }
      return micromatch.isMatch(str, pattern, { ...options, contains: true });
    };
    micromatch.matchKeys = (obj, patterns, options) => {
      if (!utils.isObject(obj)) {
        throw new TypeError("Expected the first argument to be an object");
      }
      let keys = micromatch(Object.keys(obj), patterns, options);
      let res = {};
      for (let key of keys) res[key] = obj[key];
      return res;
    };
    micromatch.some = (list, patterns, options) => {
      let items = [].concat(list);
      for (let pattern of [].concat(patterns)) {
        let isMatch = picomatch(String(pattern), options);
        if (items.some((item) => isMatch(item))) {
          return true;
        }
      }
      return false;
    };
    micromatch.every = (list, patterns, options) => {
      let items = [].concat(list);
      for (let pattern of [].concat(patterns)) {
        let isMatch = picomatch(String(pattern), options);
        if (!items.every((item) => isMatch(item))) {
          return false;
        }
      }
      return true;
    };
    micromatch.all = (str, patterns, options) => {
      if (typeof str !== "string") {
        throw new TypeError(`Expected a string: "${util.inspect(str)}"`);
      }
      return [].concat(patterns).every((p) => picomatch(p, options)(str));
    };
    micromatch.capture = (glob, input, options) => {
      let posix = utils.isWindows(options);
      let regex = picomatch.makeRe(String(glob), { ...options, capture: true });
      let match = regex.exec(posix ? utils.toPosixSlashes(input) : input);
      if (match) {
        return match.slice(1).map((v) => v === void 0 ? "" : v);
      }
    };
    micromatch.makeRe = (...args) => picomatch.makeRe(...args);
    micromatch.scan = (...args) => picomatch.scan(...args);
    micromatch.parse = (patterns, options) => {
      let res = [];
      for (let pattern of [].concat(patterns || [])) {
        for (let str of braces(String(pattern), options)) {
          res.push(picomatch.parse(str, options));
        }
      }
      return res;
    };
    micromatch.braces = (pattern, options) => {
      if (typeof pattern !== "string") throw new TypeError("Expected a string");
      if (options && options.nobrace === true || !hasBraces(pattern)) {
        return [pattern];
      }
      return braces(pattern, options);
    };
    micromatch.braceExpand = (pattern, options) => {
      if (typeof pattern !== "string") throw new TypeError("Expected a string");
      return micromatch.braces(pattern, { ...options, expand: true });
    };
    micromatch.hasBraces = hasBraces;
    module2.exports = micromatch;
  }
});
var require_pattern = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/utils/pattern.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isAbsolute = exports.partitionAbsoluteAndRelative = exports.removeDuplicateSlashes = exports.matchAny = exports.convertPatternsToRe = exports.makeRe = exports.getPatternParts = exports.expandBraceExpansion = exports.expandPatternsWithBraceExpansion = exports.isAffectDepthOfReadingPattern = exports.endsWithSlashGlobStar = exports.hasGlobStar = exports.getBaseDirectory = exports.isPatternRelatedToParentDirectory = exports.getPatternsOutsideCurrentDirectory = exports.getPatternsInsideCurrentDirectory = exports.getPositivePatterns = exports.getNegativePatterns = exports.isPositivePattern = exports.isNegativePattern = exports.convertToNegativePattern = exports.convertToPositivePattern = exports.isDynamicPattern = exports.isStaticPattern = void 0;
    var path3 = (0, import_chunk_2ESYSVXG.__require)("path");
    var globParent = require_glob_parent();
    var micromatch = require_micromatch();
    var GLOBSTAR = "**";
    var ESCAPE_SYMBOL = "\\";
    var COMMON_GLOB_SYMBOLS_RE = /[*?]|^!/;
    var REGEX_CHARACTER_CLASS_SYMBOLS_RE = /\[[^[]*]/;
    var REGEX_GROUP_SYMBOLS_RE = /(?:^|[^!*+?@])\([^(]*\|[^|]*\)/;
    var GLOB_EXTENSION_SYMBOLS_RE = /[!*+?@]\([^(]*\)/;
    var BRACE_EXPANSION_SEPARATORS_RE = /,|\.\./;
    var DOUBLE_SLASH_RE = /(?!^)\/{2,}/g;
    function isStaticPattern(pattern, options = {}) {
      return !isDynamicPattern(pattern, options);
    }
    exports.isStaticPattern = isStaticPattern;
    function isDynamicPattern(pattern, options = {}) {
      if (pattern === "") {
        return false;
      }
      if (options.caseSensitiveMatch === false || pattern.includes(ESCAPE_SYMBOL)) {
        return true;
      }
      if (COMMON_GLOB_SYMBOLS_RE.test(pattern) || REGEX_CHARACTER_CLASS_SYMBOLS_RE.test(pattern) || REGEX_GROUP_SYMBOLS_RE.test(pattern)) {
        return true;
      }
      if (options.extglob !== false && GLOB_EXTENSION_SYMBOLS_RE.test(pattern)) {
        return true;
      }
      if (options.braceExpansion !== false && hasBraceExpansion(pattern)) {
        return true;
      }
      return false;
    }
    exports.isDynamicPattern = isDynamicPattern;
    function hasBraceExpansion(pattern) {
      const openingBraceIndex = pattern.indexOf("{");
      if (openingBraceIndex === -1) {
        return false;
      }
      const closingBraceIndex = pattern.indexOf("}", openingBraceIndex + 1);
      if (closingBraceIndex === -1) {
        return false;
      }
      const braceContent = pattern.slice(openingBraceIndex, closingBraceIndex);
      return BRACE_EXPANSION_SEPARATORS_RE.test(braceContent);
    }
    function convertToPositivePattern(pattern) {
      return isNegativePattern(pattern) ? pattern.slice(1) : pattern;
    }
    exports.convertToPositivePattern = convertToPositivePattern;
    function convertToNegativePattern(pattern) {
      return "!" + pattern;
    }
    exports.convertToNegativePattern = convertToNegativePattern;
    function isNegativePattern(pattern) {
      return pattern.startsWith("!") && pattern[1] !== "(";
    }
    exports.isNegativePattern = isNegativePattern;
    function isPositivePattern(pattern) {
      return !isNegativePattern(pattern);
    }
    exports.isPositivePattern = isPositivePattern;
    function getNegativePatterns(patterns) {
      return patterns.filter(isNegativePattern);
    }
    exports.getNegativePatterns = getNegativePatterns;
    function getPositivePatterns(patterns) {
      return patterns.filter(isPositivePattern);
    }
    exports.getPositivePatterns = getPositivePatterns;
    function getPatternsInsideCurrentDirectory(patterns) {
      return patterns.filter((pattern) => !isPatternRelatedToParentDirectory(pattern));
    }
    exports.getPatternsInsideCurrentDirectory = getPatternsInsideCurrentDirectory;
    function getPatternsOutsideCurrentDirectory(patterns) {
      return patterns.filter(isPatternRelatedToParentDirectory);
    }
    exports.getPatternsOutsideCurrentDirectory = getPatternsOutsideCurrentDirectory;
    function isPatternRelatedToParentDirectory(pattern) {
      return pattern.startsWith("..") || pattern.startsWith("./..");
    }
    exports.isPatternRelatedToParentDirectory = isPatternRelatedToParentDirectory;
    function getBaseDirectory(pattern) {
      return globParent(pattern, { flipBackslashes: false });
    }
    exports.getBaseDirectory = getBaseDirectory;
    function hasGlobStar(pattern) {
      return pattern.includes(GLOBSTAR);
    }
    exports.hasGlobStar = hasGlobStar;
    function endsWithSlashGlobStar(pattern) {
      return pattern.endsWith("/" + GLOBSTAR);
    }
    exports.endsWithSlashGlobStar = endsWithSlashGlobStar;
    function isAffectDepthOfReadingPattern(pattern) {
      const basename = path3.basename(pattern);
      return endsWithSlashGlobStar(pattern) || isStaticPattern(basename);
    }
    exports.isAffectDepthOfReadingPattern = isAffectDepthOfReadingPattern;
    function expandPatternsWithBraceExpansion(patterns) {
      return patterns.reduce((collection, pattern) => {
        return collection.concat(expandBraceExpansion(pattern));
      }, []);
    }
    exports.expandPatternsWithBraceExpansion = expandPatternsWithBraceExpansion;
    function expandBraceExpansion(pattern) {
      const patterns = micromatch.braces(pattern, { expand: true, nodupes: true, keepEscaping: true });
      patterns.sort((a, b) => a.length - b.length);
      return patterns.filter((pattern2) => pattern2 !== "");
    }
    exports.expandBraceExpansion = expandBraceExpansion;
    function getPatternParts(pattern, options) {
      let { parts } = micromatch.scan(pattern, Object.assign(Object.assign({}, options), { parts: true }));
      if (parts.length === 0) {
        parts = [pattern];
      }
      if (parts[0].startsWith("/")) {
        parts[0] = parts[0].slice(1);
        parts.unshift("");
      }
      return parts;
    }
    exports.getPatternParts = getPatternParts;
    function makeRe(pattern, options) {
      return micromatch.makeRe(pattern, options);
    }
    exports.makeRe = makeRe;
    function convertPatternsToRe(patterns, options) {
      return patterns.map((pattern) => makeRe(pattern, options));
    }
    exports.convertPatternsToRe = convertPatternsToRe;
    function matchAny(entry, patternsRe) {
      return patternsRe.some((patternRe) => patternRe.test(entry));
    }
    exports.matchAny = matchAny;
    function removeDuplicateSlashes(pattern) {
      return pattern.replace(DOUBLE_SLASH_RE, "/");
    }
    exports.removeDuplicateSlashes = removeDuplicateSlashes;
    function partitionAbsoluteAndRelative(patterns) {
      const absolute = [];
      const relative = [];
      for (const pattern of patterns) {
        if (isAbsolute(pattern)) {
          absolute.push(pattern);
        } else {
          relative.push(pattern);
        }
      }
      return [absolute, relative];
    }
    exports.partitionAbsoluteAndRelative = partitionAbsoluteAndRelative;
    function isAbsolute(pattern) {
      return path3.isAbsolute(pattern);
    }
    exports.isAbsolute = isAbsolute;
  }
});
var require_stream = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/utils/stream.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.merge = void 0;
    var merge2 = require_merge2();
    function merge(streams) {
      const mergedStream = merge2(streams);
      streams.forEach((stream) => {
        stream.once("error", (error) => mergedStream.emit("error", error));
      });
      mergedStream.once("close", () => propagateCloseEventToSources(streams));
      mergedStream.once("end", () => propagateCloseEventToSources(streams));
      return mergedStream;
    }
    exports.merge = merge;
    function propagateCloseEventToSources(streams) {
      streams.forEach((stream) => stream.emit("close"));
    }
  }
});
var require_string = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/utils/string.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isEmpty = exports.isString = void 0;
    function isString(input) {
      return typeof input === "string";
    }
    exports.isString = isString;
    function isEmpty(input) {
      return input === "";
    }
    exports.isEmpty = isEmpty;
  }
});
var require_utils3 = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/utils/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.string = exports.stream = exports.pattern = exports.path = exports.fs = exports.errno = exports.array = void 0;
    var array = require_array();
    exports.array = array;
    var errno = require_errno();
    exports.errno = errno;
    var fs = require_fs2();
    exports.fs = fs;
    var path3 = require_path2();
    exports.path = path3;
    var pattern = require_pattern();
    exports.pattern = pattern;
    var stream = require_stream();
    exports.stream = stream;
    var string = require_string();
    exports.string = string;
  }
});
var require_tasks = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/managers/tasks.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.convertPatternGroupToTask = exports.convertPatternGroupsToTasks = exports.groupPatternsByBaseDirectory = exports.getNegativePatternsAsPositive = exports.getPositivePatterns = exports.convertPatternsToTasks = exports.generate = void 0;
    var utils = require_utils3();
    function generate(input, settings) {
      const patterns = processPatterns(input, settings);
      const ignore = processPatterns(settings.ignore, settings);
      const positivePatterns = getPositivePatterns(patterns);
      const negativePatterns = getNegativePatternsAsPositive(patterns, ignore);
      const staticPatterns = positivePatterns.filter((pattern) => utils.pattern.isStaticPattern(pattern, settings));
      const dynamicPatterns = positivePatterns.filter((pattern) => utils.pattern.isDynamicPattern(pattern, settings));
      const staticTasks = convertPatternsToTasks(
        staticPatterns,
        negativePatterns,
        /* dynamic */
        false
      );
      const dynamicTasks = convertPatternsToTasks(
        dynamicPatterns,
        negativePatterns,
        /* dynamic */
        true
      );
      return staticTasks.concat(dynamicTasks);
    }
    exports.generate = generate;
    function processPatterns(input, settings) {
      let patterns = input;
      if (settings.braceExpansion) {
        patterns = utils.pattern.expandPatternsWithBraceExpansion(patterns);
      }
      if (settings.baseNameMatch) {
        patterns = patterns.map((pattern) => pattern.includes("/") ? pattern : `**/${pattern}`);
      }
      return patterns.map((pattern) => utils.pattern.removeDuplicateSlashes(pattern));
    }
    function convertPatternsToTasks(positive, negative, dynamic) {
      const tasks = [];
      const patternsOutsideCurrentDirectory = utils.pattern.getPatternsOutsideCurrentDirectory(positive);
      const patternsInsideCurrentDirectory = utils.pattern.getPatternsInsideCurrentDirectory(positive);
      const outsideCurrentDirectoryGroup = groupPatternsByBaseDirectory(patternsOutsideCurrentDirectory);
      const insideCurrentDirectoryGroup = groupPatternsByBaseDirectory(patternsInsideCurrentDirectory);
      tasks.push(...convertPatternGroupsToTasks(outsideCurrentDirectoryGroup, negative, dynamic));
      if ("." in insideCurrentDirectoryGroup) {
        tasks.push(convertPatternGroupToTask(".", patternsInsideCurrentDirectory, negative, dynamic));
      } else {
        tasks.push(...convertPatternGroupsToTasks(insideCurrentDirectoryGroup, negative, dynamic));
      }
      return tasks;
    }
    exports.convertPatternsToTasks = convertPatternsToTasks;
    function getPositivePatterns(patterns) {
      return utils.pattern.getPositivePatterns(patterns);
    }
    exports.getPositivePatterns = getPositivePatterns;
    function getNegativePatternsAsPositive(patterns, ignore) {
      const negative = utils.pattern.getNegativePatterns(patterns).concat(ignore);
      const positive = negative.map(utils.pattern.convertToPositivePattern);
      return positive;
    }
    exports.getNegativePatternsAsPositive = getNegativePatternsAsPositive;
    function groupPatternsByBaseDirectory(patterns) {
      const group = {};
      return patterns.reduce((collection, pattern) => {
        const base = utils.pattern.getBaseDirectory(pattern);
        if (base in collection) {
          collection[base].push(pattern);
        } else {
          collection[base] = [pattern];
        }
        return collection;
      }, group);
    }
    exports.groupPatternsByBaseDirectory = groupPatternsByBaseDirectory;
    function convertPatternGroupsToTasks(positive, negative, dynamic) {
      return Object.keys(positive).map((base) => {
        return convertPatternGroupToTask(base, positive[base], negative, dynamic);
      });
    }
    exports.convertPatternGroupsToTasks = convertPatternGroupsToTasks;
    function convertPatternGroupToTask(base, positive, negative, dynamic) {
      return {
        dynamic,
        positive,
        negative,
        base,
        patterns: [].concat(positive, negative.map(utils.pattern.convertToNegativePattern))
      };
    }
    exports.convertPatternGroupToTask = convertPatternGroupToTask;
  }
});
var require_async = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/@nodelib+fs.stat@2.0.5/node_modules/@nodelib/fs.stat/out/providers/async.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.read = void 0;
    function read(path3, settings, callback) {
      settings.fs.lstat(path3, (lstatError, lstat) => {
        if (lstatError !== null) {
          callFailureCallback(callback, lstatError);
          return;
        }
        if (!lstat.isSymbolicLink() || !settings.followSymbolicLink) {
          callSuccessCallback(callback, lstat);
          return;
        }
        settings.fs.stat(path3, (statError, stat) => {
          if (statError !== null) {
            if (settings.throwErrorOnBrokenSymbolicLink) {
              callFailureCallback(callback, statError);
              return;
            }
            callSuccessCallback(callback, lstat);
            return;
          }
          if (settings.markSymbolicLink) {
            stat.isSymbolicLink = () => true;
          }
          callSuccessCallback(callback, stat);
        });
      });
    }
    exports.read = read;
    function callFailureCallback(callback, error) {
      callback(error);
    }
    function callSuccessCallback(callback, result) {
      callback(null, result);
    }
  }
});
var require_sync = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/@nodelib+fs.stat@2.0.5/node_modules/@nodelib/fs.stat/out/providers/sync.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.read = void 0;
    function read(path3, settings) {
      const lstat = settings.fs.lstatSync(path3);
      if (!lstat.isSymbolicLink() || !settings.followSymbolicLink) {
        return lstat;
      }
      try {
        const stat = settings.fs.statSync(path3);
        if (settings.markSymbolicLink) {
          stat.isSymbolicLink = () => true;
        }
        return stat;
      } catch (error) {
        if (!settings.throwErrorOnBrokenSymbolicLink) {
          return lstat;
        }
        throw error;
      }
    }
    exports.read = read;
  }
});
var require_fs3 = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/@nodelib+fs.stat@2.0.5/node_modules/@nodelib/fs.stat/out/adapters/fs.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createFileSystemAdapter = exports.FILE_SYSTEM_ADAPTER = void 0;
    var fs = (0, import_chunk_2ESYSVXG.__require)("fs");
    exports.FILE_SYSTEM_ADAPTER = {
      lstat: fs.lstat,
      stat: fs.stat,
      lstatSync: fs.lstatSync,
      statSync: fs.statSync
    };
    function createFileSystemAdapter(fsMethods) {
      if (fsMethods === void 0) {
        return exports.FILE_SYSTEM_ADAPTER;
      }
      return Object.assign(Object.assign({}, exports.FILE_SYSTEM_ADAPTER), fsMethods);
    }
    exports.createFileSystemAdapter = createFileSystemAdapter;
  }
});
var require_settings = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/@nodelib+fs.stat@2.0.5/node_modules/@nodelib/fs.stat/out/settings.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var fs = require_fs3();
    var Settings = class {
      constructor(_options = {}) {
        this._options = _options;
        this.followSymbolicLink = this._getValue(this._options.followSymbolicLink, true);
        this.fs = fs.createFileSystemAdapter(this._options.fs);
        this.markSymbolicLink = this._getValue(this._options.markSymbolicLink, false);
        this.throwErrorOnBrokenSymbolicLink = this._getValue(this._options.throwErrorOnBrokenSymbolicLink, true);
      }
      _getValue(option, value) {
        return option !== null && option !== void 0 ? option : value;
      }
    };
    exports.default = Settings;
  }
});
var require_out = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/@nodelib+fs.stat@2.0.5/node_modules/@nodelib/fs.stat/out/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.statSync = exports.stat = exports.Settings = void 0;
    var async = require_async();
    var sync = require_sync();
    var settings_1 = require_settings();
    exports.Settings = settings_1.default;
    function stat(path3, optionsOrSettingsOrCallback, callback) {
      if (typeof optionsOrSettingsOrCallback === "function") {
        async.read(path3, getSettings(), optionsOrSettingsOrCallback);
        return;
      }
      async.read(path3, getSettings(optionsOrSettingsOrCallback), callback);
    }
    exports.stat = stat;
    function statSync(path3, optionsOrSettings) {
      const settings = getSettings(optionsOrSettings);
      return sync.read(path3, settings);
    }
    exports.statSync = statSync;
    function getSettings(settingsOrOptions = {}) {
      if (settingsOrOptions instanceof settings_1.default) {
        return settingsOrOptions;
      }
      return new settings_1.default(settingsOrOptions);
    }
  }
});
var require_queue_microtask = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/queue-microtask@1.2.3/node_modules/queue-microtask/index.js"(exports, module2) {
    "use strict";
    var promise;
    module2.exports = typeof queueMicrotask === "function" ? queueMicrotask.bind(typeof window !== "undefined" ? window : global) : (cb) => (promise || (promise = Promise.resolve())).then(cb).catch((err) => setTimeout(() => {
      throw err;
    }, 0));
  }
});
var require_run_parallel = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/run-parallel@1.2.0/node_modules/run-parallel/index.js"(exports, module2) {
    "use strict";
    module2.exports = runParallel;
    var queueMicrotask2 = require_queue_microtask();
    function runParallel(tasks, cb) {
      let results, pending, keys;
      let isSync = true;
      if (Array.isArray(tasks)) {
        results = [];
        pending = tasks.length;
      } else {
        keys = Object.keys(tasks);
        results = {};
        pending = keys.length;
      }
      function done(err) {
        function end() {
          if (cb) cb(err, results);
          cb = null;
        }
        if (isSync) queueMicrotask2(end);
        else end();
      }
      function each(i, err, result) {
        results[i] = result;
        if (--pending === 0 || err) {
          done(err);
        }
      }
      if (!pending) {
        done(null);
      } else if (keys) {
        keys.forEach(function(key) {
          tasks[key](function(err, result) {
            each(key, err, result);
          });
        });
      } else {
        tasks.forEach(function(task, i) {
          task(function(err, result) {
            each(i, err, result);
          });
        });
      }
      isSync = false;
    }
  }
});
var require_constants3 = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IS_SUPPORT_READDIR_WITH_FILE_TYPES = void 0;
    var NODE_PROCESS_VERSION_PARTS = process.versions.node.split(".");
    if (NODE_PROCESS_VERSION_PARTS[0] === void 0 || NODE_PROCESS_VERSION_PARTS[1] === void 0) {
      throw new Error(`Unexpected behavior. The 'process.versions.node' variable has invalid value: ${process.versions.node}`);
    }
    var MAJOR_VERSION = Number.parseInt(NODE_PROCESS_VERSION_PARTS[0], 10);
    var MINOR_VERSION = Number.parseInt(NODE_PROCESS_VERSION_PARTS[1], 10);
    var SUPPORTED_MAJOR_VERSION = 10;
    var SUPPORTED_MINOR_VERSION = 10;
    var IS_MATCHED_BY_MAJOR = MAJOR_VERSION > SUPPORTED_MAJOR_VERSION;
    var IS_MATCHED_BY_MAJOR_AND_MINOR = MAJOR_VERSION === SUPPORTED_MAJOR_VERSION && MINOR_VERSION >= SUPPORTED_MINOR_VERSION;
    exports.IS_SUPPORT_READDIR_WITH_FILE_TYPES = IS_MATCHED_BY_MAJOR || IS_MATCHED_BY_MAJOR_AND_MINOR;
  }
});
var require_fs4 = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/utils/fs.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createDirentFromStats = void 0;
    var DirentFromStats = class {
      constructor(name, stats) {
        this.name = name;
        this.isBlockDevice = stats.isBlockDevice.bind(stats);
        this.isCharacterDevice = stats.isCharacterDevice.bind(stats);
        this.isDirectory = stats.isDirectory.bind(stats);
        this.isFIFO = stats.isFIFO.bind(stats);
        this.isFile = stats.isFile.bind(stats);
        this.isSocket = stats.isSocket.bind(stats);
        this.isSymbolicLink = stats.isSymbolicLink.bind(stats);
      }
    };
    function createDirentFromStats(name, stats) {
      return new DirentFromStats(name, stats);
    }
    exports.createDirentFromStats = createDirentFromStats;
  }
});
var require_utils4 = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/utils/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fs = void 0;
    var fs = require_fs4();
    exports.fs = fs;
  }
});
var require_common = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/providers/common.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.joinPathSegments = void 0;
    function joinPathSegments(a, b, separator) {
      if (a.endsWith(separator)) {
        return a + b;
      }
      return a + separator + b;
    }
    exports.joinPathSegments = joinPathSegments;
  }
});
var require_async2 = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/providers/async.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.readdir = exports.readdirWithFileTypes = exports.read = void 0;
    var fsStat = require_out();
    var rpl = require_run_parallel();
    var constants_1 = require_constants3();
    var utils = require_utils4();
    var common = require_common();
    function read(directory, settings, callback) {
      if (!settings.stats && constants_1.IS_SUPPORT_READDIR_WITH_FILE_TYPES) {
        readdirWithFileTypes(directory, settings, callback);
        return;
      }
      readdir(directory, settings, callback);
    }
    exports.read = read;
    function readdirWithFileTypes(directory, settings, callback) {
      settings.fs.readdir(directory, { withFileTypes: true }, (readdirError, dirents) => {
        if (readdirError !== null) {
          callFailureCallback(callback, readdirError);
          return;
        }
        const entries = dirents.map((dirent) => ({
          dirent,
          name: dirent.name,
          path: common.joinPathSegments(directory, dirent.name, settings.pathSegmentSeparator)
        }));
        if (!settings.followSymbolicLinks) {
          callSuccessCallback(callback, entries);
          return;
        }
        const tasks = entries.map((entry) => makeRplTaskEntry(entry, settings));
        rpl(tasks, (rplError, rplEntries) => {
          if (rplError !== null) {
            callFailureCallback(callback, rplError);
            return;
          }
          callSuccessCallback(callback, rplEntries);
        });
      });
    }
    exports.readdirWithFileTypes = readdirWithFileTypes;
    function makeRplTaskEntry(entry, settings) {
      return (done) => {
        if (!entry.dirent.isSymbolicLink()) {
          done(null, entry);
          return;
        }
        settings.fs.stat(entry.path, (statError, stats) => {
          if (statError !== null) {
            if (settings.throwErrorOnBrokenSymbolicLink) {
              done(statError);
              return;
            }
            done(null, entry);
            return;
          }
          entry.dirent = utils.fs.createDirentFromStats(entry.name, stats);
          done(null, entry);
        });
      };
    }
    function readdir(directory, settings, callback) {
      settings.fs.readdir(directory, (readdirError, names) => {
        if (readdirError !== null) {
          callFailureCallback(callback, readdirError);
          return;
        }
        const tasks = names.map((name) => {
          const path3 = common.joinPathSegments(directory, name, settings.pathSegmentSeparator);
          return (done) => {
            fsStat.stat(path3, settings.fsStatSettings, (error, stats) => {
              if (error !== null) {
                done(error);
                return;
              }
              const entry = {
                name,
                path: path3,
                dirent: utils.fs.createDirentFromStats(name, stats)
              };
              if (settings.stats) {
                entry.stats = stats;
              }
              done(null, entry);
            });
          };
        });
        rpl(tasks, (rplError, entries) => {
          if (rplError !== null) {
            callFailureCallback(callback, rplError);
            return;
          }
          callSuccessCallback(callback, entries);
        });
      });
    }
    exports.readdir = readdir;
    function callFailureCallback(callback, error) {
      callback(error);
    }
    function callSuccessCallback(callback, result) {
      callback(null, result);
    }
  }
});
var require_sync2 = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/providers/sync.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.readdir = exports.readdirWithFileTypes = exports.read = void 0;
    var fsStat = require_out();
    var constants_1 = require_constants3();
    var utils = require_utils4();
    var common = require_common();
    function read(directory, settings) {
      if (!settings.stats && constants_1.IS_SUPPORT_READDIR_WITH_FILE_TYPES) {
        return readdirWithFileTypes(directory, settings);
      }
      return readdir(directory, settings);
    }
    exports.read = read;
    function readdirWithFileTypes(directory, settings) {
      const dirents = settings.fs.readdirSync(directory, { withFileTypes: true });
      return dirents.map((dirent) => {
        const entry = {
          dirent,
          name: dirent.name,
          path: common.joinPathSegments(directory, dirent.name, settings.pathSegmentSeparator)
        };
        if (entry.dirent.isSymbolicLink() && settings.followSymbolicLinks) {
          try {
            const stats = settings.fs.statSync(entry.path);
            entry.dirent = utils.fs.createDirentFromStats(entry.name, stats);
          } catch (error) {
            if (settings.throwErrorOnBrokenSymbolicLink) {
              throw error;
            }
          }
        }
        return entry;
      });
    }
    exports.readdirWithFileTypes = readdirWithFileTypes;
    function readdir(directory, settings) {
      const names = settings.fs.readdirSync(directory);
      return names.map((name) => {
        const entryPath = common.joinPathSegments(directory, name, settings.pathSegmentSeparator);
        const stats = fsStat.statSync(entryPath, settings.fsStatSettings);
        const entry = {
          name,
          path: entryPath,
          dirent: utils.fs.createDirentFromStats(name, stats)
        };
        if (settings.stats) {
          entry.stats = stats;
        }
        return entry;
      });
    }
    exports.readdir = readdir;
  }
});
var require_fs5 = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/adapters/fs.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createFileSystemAdapter = exports.FILE_SYSTEM_ADAPTER = void 0;
    var fs = (0, import_chunk_2ESYSVXG.__require)("fs");
    exports.FILE_SYSTEM_ADAPTER = {
      lstat: fs.lstat,
      stat: fs.stat,
      lstatSync: fs.lstatSync,
      statSync: fs.statSync,
      readdir: fs.readdir,
      readdirSync: fs.readdirSync
    };
    function createFileSystemAdapter(fsMethods) {
      if (fsMethods === void 0) {
        return exports.FILE_SYSTEM_ADAPTER;
      }
      return Object.assign(Object.assign({}, exports.FILE_SYSTEM_ADAPTER), fsMethods);
    }
    exports.createFileSystemAdapter = createFileSystemAdapter;
  }
});
var require_settings2 = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/settings.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var path3 = (0, import_chunk_2ESYSVXG.__require)("path");
    var fsStat = require_out();
    var fs = require_fs5();
    var Settings = class {
      constructor(_options = {}) {
        this._options = _options;
        this.followSymbolicLinks = this._getValue(this._options.followSymbolicLinks, false);
        this.fs = fs.createFileSystemAdapter(this._options.fs);
        this.pathSegmentSeparator = this._getValue(this._options.pathSegmentSeparator, path3.sep);
        this.stats = this._getValue(this._options.stats, false);
        this.throwErrorOnBrokenSymbolicLink = this._getValue(this._options.throwErrorOnBrokenSymbolicLink, true);
        this.fsStatSettings = new fsStat.Settings({
          followSymbolicLink: this.followSymbolicLinks,
          fs: this.fs,
          throwErrorOnBrokenSymbolicLink: this.throwErrorOnBrokenSymbolicLink
        });
      }
      _getValue(option, value) {
        return option !== null && option !== void 0 ? option : value;
      }
    };
    exports.default = Settings;
  }
});
var require_out2 = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Settings = exports.scandirSync = exports.scandir = void 0;
    var async = require_async2();
    var sync = require_sync2();
    var settings_1 = require_settings2();
    exports.Settings = settings_1.default;
    function scandir(path3, optionsOrSettingsOrCallback, callback) {
      if (typeof optionsOrSettingsOrCallback === "function") {
        async.read(path3, getSettings(), optionsOrSettingsOrCallback);
        return;
      }
      async.read(path3, getSettings(optionsOrSettingsOrCallback), callback);
    }
    exports.scandir = scandir;
    function scandirSync(path3, optionsOrSettings) {
      const settings = getSettings(optionsOrSettings);
      return sync.read(path3, settings);
    }
    exports.scandirSync = scandirSync;
    function getSettings(settingsOrOptions = {}) {
      if (settingsOrOptions instanceof settings_1.default) {
        return settingsOrOptions;
      }
      return new settings_1.default(settingsOrOptions);
    }
  }
});
var require_reusify = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/reusify@1.0.4/node_modules/reusify/reusify.js"(exports, module2) {
    "use strict";
    function reusify(Constructor) {
      var head = new Constructor();
      var tail = head;
      function get() {
        var current = head;
        if (current.next) {
          head = current.next;
        } else {
          head = new Constructor();
          tail = head;
        }
        current.next = null;
        return current;
      }
      function release(obj) {
        tail.next = obj;
        tail = obj;
      }
      return {
        get,
        release
      };
    }
    module2.exports = reusify;
  }
});
var require_queue = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/fastq@1.15.0/node_modules/fastq/queue.js"(exports, module2) {
    "use strict";
    var reusify = require_reusify();
    function fastqueue(context, worker, concurrency) {
      if (typeof context === "function") {
        concurrency = worker;
        worker = context;
        context = null;
      }
      if (concurrency < 1) {
        throw new Error("fastqueue concurrency must be greater than 1");
      }
      var cache = reusify(Task);
      var queueHead = null;
      var queueTail = null;
      var _running = 0;
      var errorHandler = null;
      var self = {
        push,
        drain: noop2,
        saturated: noop2,
        pause,
        paused: false,
        concurrency,
        running,
        resume,
        idle,
        length,
        getQueue,
        unshift,
        empty: noop2,
        kill,
        killAndDrain,
        error
      };
      return self;
      function running() {
        return _running;
      }
      function pause() {
        self.paused = true;
      }
      function length() {
        var current = queueHead;
        var counter = 0;
        while (current) {
          current = current.next;
          counter++;
        }
        return counter;
      }
      function getQueue() {
        var current = queueHead;
        var tasks = [];
        while (current) {
          tasks.push(current.value);
          current = current.next;
        }
        return tasks;
      }
      function resume() {
        if (!self.paused) return;
        self.paused = false;
        for (var i = 0; i < self.concurrency; i++) {
          _running++;
          release();
        }
      }
      function idle() {
        return _running === 0 && self.length() === 0;
      }
      function push(value, done) {
        var current = cache.get();
        current.context = context;
        current.release = release;
        current.value = value;
        current.callback = done || noop2;
        current.errorHandler = errorHandler;
        if (_running === self.concurrency || self.paused) {
          if (queueTail) {
            queueTail.next = current;
            queueTail = current;
          } else {
            queueHead = current;
            queueTail = current;
            self.saturated();
          }
        } else {
          _running++;
          worker.call(context, current.value, current.worked);
        }
      }
      function unshift(value, done) {
        var current = cache.get();
        current.context = context;
        current.release = release;
        current.value = value;
        current.callback = done || noop2;
        if (_running === self.concurrency || self.paused) {
          if (queueHead) {
            current.next = queueHead;
            queueHead = current;
          } else {
            queueHead = current;
            queueTail = current;
            self.saturated();
          }
        } else {
          _running++;
          worker.call(context, current.value, current.worked);
        }
      }
      function release(holder) {
        if (holder) {
          cache.release(holder);
        }
        var next = queueHead;
        if (next) {
          if (!self.paused) {
            if (queueTail === queueHead) {
              queueTail = null;
            }
            queueHead = next.next;
            next.next = null;
            worker.call(context, next.value, next.worked);
            if (queueTail === null) {
              self.empty();
            }
          } else {
            _running--;
          }
        } else if (--_running === 0) {
          self.drain();
        }
      }
      function kill() {
        queueHead = null;
        queueTail = null;
        self.drain = noop2;
      }
      function killAndDrain() {
        queueHead = null;
        queueTail = null;
        self.drain();
        self.drain = noop2;
      }
      function error(handler) {
        errorHandler = handler;
      }
    }
    function noop2() {
    }
    function Task() {
      this.value = null;
      this.callback = noop2;
      this.next = null;
      this.release = noop2;
      this.context = null;
      this.errorHandler = null;
      var self = this;
      this.worked = function worked(err, result) {
        var callback = self.callback;
        var errorHandler = self.errorHandler;
        var val = self.value;
        self.value = null;
        self.callback = noop2;
        if (self.errorHandler) {
          errorHandler(err, val);
        }
        callback.call(self.context, err, result);
        self.release(self);
      };
    }
    function queueAsPromised(context, worker, concurrency) {
      if (typeof context === "function") {
        concurrency = worker;
        worker = context;
        context = null;
      }
      function asyncWrapper(arg, cb) {
        worker.call(this, arg).then(function(res) {
          cb(null, res);
        }, cb);
      }
      var queue = fastqueue(context, asyncWrapper, concurrency);
      var pushCb = queue.push;
      var unshiftCb = queue.unshift;
      queue.push = push;
      queue.unshift = unshift;
      queue.drained = drained;
      return queue;
      function push(value) {
        var p = new Promise(function(resolve, reject) {
          pushCb(value, function(err, result) {
            if (err) {
              reject(err);
              return;
            }
            resolve(result);
          });
        });
        p.catch(noop2);
        return p;
      }
      function unshift(value) {
        var p = new Promise(function(resolve, reject) {
          unshiftCb(value, function(err, result) {
            if (err) {
              reject(err);
              return;
            }
            resolve(result);
          });
        });
        p.catch(noop2);
        return p;
      }
      function drained() {
        if (queue.idle()) {
          return new Promise(function(resolve) {
            resolve();
          });
        }
        var previousDrain = queue.drain;
        var p = new Promise(function(resolve) {
          queue.drain = function() {
            previousDrain();
            resolve();
          };
        });
        return p;
      }
    }
    module2.exports = fastqueue;
    module2.exports.promise = queueAsPromised;
  }
});
var require_common2 = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/readers/common.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.joinPathSegments = exports.replacePathSegmentSeparator = exports.isAppliedFilter = exports.isFatalError = void 0;
    function isFatalError(settings, error) {
      if (settings.errorFilter === null) {
        return true;
      }
      return !settings.errorFilter(error);
    }
    exports.isFatalError = isFatalError;
    function isAppliedFilter(filter, value) {
      return filter === null || filter(value);
    }
    exports.isAppliedFilter = isAppliedFilter;
    function replacePathSegmentSeparator(filepath, separator) {
      return filepath.split(/[/\\]/).join(separator);
    }
    exports.replacePathSegmentSeparator = replacePathSegmentSeparator;
    function joinPathSegments(a, b, separator) {
      if (a === "") {
        return b;
      }
      if (a.endsWith(separator)) {
        return a + b;
      }
      return a + separator + b;
    }
    exports.joinPathSegments = joinPathSegments;
  }
});
var require_reader = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/readers/reader.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var common = require_common2();
    var Reader = class {
      constructor(_root, _settings) {
        this._root = _root;
        this._settings = _settings;
        this._root = common.replacePathSegmentSeparator(_root, _settings.pathSegmentSeparator);
      }
    };
    exports.default = Reader;
  }
});
var require_async3 = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/readers/async.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var events_1 = (0, import_chunk_2ESYSVXG.__require)("events");
    var fsScandir = require_out2();
    var fastq = require_queue();
    var common = require_common2();
    var reader_1 = require_reader();
    var AsyncReader = class extends reader_1.default {
      constructor(_root, _settings) {
        super(_root, _settings);
        this._settings = _settings;
        this._scandir = fsScandir.scandir;
        this._emitter = new events_1.EventEmitter();
        this._queue = fastq(this._worker.bind(this), this._settings.concurrency);
        this._isFatalError = false;
        this._isDestroyed = false;
        this._queue.drain = () => {
          if (!this._isFatalError) {
            this._emitter.emit("end");
          }
        };
      }
      read() {
        this._isFatalError = false;
        this._isDestroyed = false;
        setImmediate(() => {
          this._pushToQueue(this._root, this._settings.basePath);
        });
        return this._emitter;
      }
      get isDestroyed() {
        return this._isDestroyed;
      }
      destroy() {
        if (this._isDestroyed) {
          throw new Error("The reader is already destroyed");
        }
        this._isDestroyed = true;
        this._queue.killAndDrain();
      }
      onEntry(callback) {
        this._emitter.on("entry", callback);
      }
      onError(callback) {
        this._emitter.once("error", callback);
      }
      onEnd(callback) {
        this._emitter.once("end", callback);
      }
      _pushToQueue(directory, base) {
        const queueItem = { directory, base };
        this._queue.push(queueItem, (error) => {
          if (error !== null) {
            this._handleError(error);
          }
        });
      }
      _worker(item, done) {
        this._scandir(item.directory, this._settings.fsScandirSettings, (error, entries) => {
          if (error !== null) {
            done(error, void 0);
            return;
          }
          for (const entry of entries) {
            this._handleEntry(entry, item.base);
          }
          done(null, void 0);
        });
      }
      _handleError(error) {
        if (this._isDestroyed || !common.isFatalError(this._settings, error)) {
          return;
        }
        this._isFatalError = true;
        this._isDestroyed = true;
        this._emitter.emit("error", error);
      }
      _handleEntry(entry, base) {
        if (this._isDestroyed || this._isFatalError) {
          return;
        }
        const fullpath = entry.path;
        if (base !== void 0) {
          entry.path = common.joinPathSegments(base, entry.name, this._settings.pathSegmentSeparator);
        }
        if (common.isAppliedFilter(this._settings.entryFilter, entry)) {
          this._emitEntry(entry);
        }
        if (entry.dirent.isDirectory() && common.isAppliedFilter(this._settings.deepFilter, entry)) {
          this._pushToQueue(fullpath, base === void 0 ? void 0 : entry.path);
        }
      }
      _emitEntry(entry) {
        this._emitter.emit("entry", entry);
      }
    };
    exports.default = AsyncReader;
  }
});
var require_async4 = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/providers/async.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var async_1 = require_async3();
    var AsyncProvider = class {
      constructor(_root, _settings) {
        this._root = _root;
        this._settings = _settings;
        this._reader = new async_1.default(this._root, this._settings);
        this._storage = [];
      }
      read(callback) {
        this._reader.onError((error) => {
          callFailureCallback(callback, error);
        });
        this._reader.onEntry((entry) => {
          this._storage.push(entry);
        });
        this._reader.onEnd(() => {
          callSuccessCallback(callback, this._storage);
        });
        this._reader.read();
      }
    };
    exports.default = AsyncProvider;
    function callFailureCallback(callback, error) {
      callback(error);
    }
    function callSuccessCallback(callback, entries) {
      callback(null, entries);
    }
  }
});
var require_stream2 = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/providers/stream.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var stream_1 = (0, import_chunk_2ESYSVXG.__require)("stream");
    var async_1 = require_async3();
    var StreamProvider = class {
      constructor(_root, _settings) {
        this._root = _root;
        this._settings = _settings;
        this._reader = new async_1.default(this._root, this._settings);
        this._stream = new stream_1.Readable({
          objectMode: true,
          read: () => {
          },
          destroy: () => {
            if (!this._reader.isDestroyed) {
              this._reader.destroy();
            }
          }
        });
      }
      read() {
        this._reader.onError((error) => {
          this._stream.emit("error", error);
        });
        this._reader.onEntry((entry) => {
          this._stream.push(entry);
        });
        this._reader.onEnd(() => {
          this._stream.push(null);
        });
        this._reader.read();
        return this._stream;
      }
    };
    exports.default = StreamProvider;
  }
});
var require_sync3 = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/readers/sync.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var fsScandir = require_out2();
    var common = require_common2();
    var reader_1 = require_reader();
    var SyncReader = class extends reader_1.default {
      constructor() {
        super(...arguments);
        this._scandir = fsScandir.scandirSync;
        this._storage = [];
        this._queue = /* @__PURE__ */ new Set();
      }
      read() {
        this._pushToQueue(this._root, this._settings.basePath);
        this._handleQueue();
        return this._storage;
      }
      _pushToQueue(directory, base) {
        this._queue.add({ directory, base });
      }
      _handleQueue() {
        for (const item of this._queue.values()) {
          this._handleDirectory(item.directory, item.base);
        }
      }
      _handleDirectory(directory, base) {
        try {
          const entries = this._scandir(directory, this._settings.fsScandirSettings);
          for (const entry of entries) {
            this._handleEntry(entry, base);
          }
        } catch (error) {
          this._handleError(error);
        }
      }
      _handleError(error) {
        if (!common.isFatalError(this._settings, error)) {
          return;
        }
        throw error;
      }
      _handleEntry(entry, base) {
        const fullpath = entry.path;
        if (base !== void 0) {
          entry.path = common.joinPathSegments(base, entry.name, this._settings.pathSegmentSeparator);
        }
        if (common.isAppliedFilter(this._settings.entryFilter, entry)) {
          this._pushToStorage(entry);
        }
        if (entry.dirent.isDirectory() && common.isAppliedFilter(this._settings.deepFilter, entry)) {
          this._pushToQueue(fullpath, base === void 0 ? void 0 : entry.path);
        }
      }
      _pushToStorage(entry) {
        this._storage.push(entry);
      }
    };
    exports.default = SyncReader;
  }
});
var require_sync4 = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/providers/sync.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var sync_1 = require_sync3();
    var SyncProvider = class {
      constructor(_root, _settings) {
        this._root = _root;
        this._settings = _settings;
        this._reader = new sync_1.default(this._root, this._settings);
      }
      read() {
        return this._reader.read();
      }
    };
    exports.default = SyncProvider;
  }
});
var require_settings3 = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/settings.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var path3 = (0, import_chunk_2ESYSVXG.__require)("path");
    var fsScandir = require_out2();
    var Settings = class {
      constructor(_options = {}) {
        this._options = _options;
        this.basePath = this._getValue(this._options.basePath, void 0);
        this.concurrency = this._getValue(this._options.concurrency, Number.POSITIVE_INFINITY);
        this.deepFilter = this._getValue(this._options.deepFilter, null);
        this.entryFilter = this._getValue(this._options.entryFilter, null);
        this.errorFilter = this._getValue(this._options.errorFilter, null);
        this.pathSegmentSeparator = this._getValue(this._options.pathSegmentSeparator, path3.sep);
        this.fsScandirSettings = new fsScandir.Settings({
          followSymbolicLinks: this._options.followSymbolicLinks,
          fs: this._options.fs,
          pathSegmentSeparator: this._options.pathSegmentSeparator,
          stats: this._options.stats,
          throwErrorOnBrokenSymbolicLink: this._options.throwErrorOnBrokenSymbolicLink
        });
      }
      _getValue(option, value) {
        return option !== null && option !== void 0 ? option : value;
      }
    };
    exports.default = Settings;
  }
});
var require_out3 = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Settings = exports.walkStream = exports.walkSync = exports.walk = void 0;
    var async_1 = require_async4();
    var stream_1 = require_stream2();
    var sync_1 = require_sync4();
    var settings_1 = require_settings3();
    exports.Settings = settings_1.default;
    function walk(directory, optionsOrSettingsOrCallback, callback) {
      if (typeof optionsOrSettingsOrCallback === "function") {
        new async_1.default(directory, getSettings()).read(optionsOrSettingsOrCallback);
        return;
      }
      new async_1.default(directory, getSettings(optionsOrSettingsOrCallback)).read(callback);
    }
    exports.walk = walk;
    function walkSync(directory, optionsOrSettings) {
      const settings = getSettings(optionsOrSettings);
      const provider = new sync_1.default(directory, settings);
      return provider.read();
    }
    exports.walkSync = walkSync;
    function walkStream(directory, optionsOrSettings) {
      const settings = getSettings(optionsOrSettings);
      const provider = new stream_1.default(directory, settings);
      return provider.read();
    }
    exports.walkStream = walkStream;
    function getSettings(settingsOrOptions = {}) {
      if (settingsOrOptions instanceof settings_1.default) {
        return settingsOrOptions;
      }
      return new settings_1.default(settingsOrOptions);
    }
  }
});
var require_reader2 = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/readers/reader.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var path3 = (0, import_chunk_2ESYSVXG.__require)("path");
    var fsStat = require_out();
    var utils = require_utils3();
    var Reader = class {
      constructor(_settings) {
        this._settings = _settings;
        this._fsStatSettings = new fsStat.Settings({
          followSymbolicLink: this._settings.followSymbolicLinks,
          fs: this._settings.fs,
          throwErrorOnBrokenSymbolicLink: this._settings.followSymbolicLinks
        });
      }
      _getFullEntryPath(filepath) {
        return path3.resolve(this._settings.cwd, filepath);
      }
      _makeEntry(stats, pattern) {
        const entry = {
          name: pattern,
          path: pattern,
          dirent: utils.fs.createDirentFromStats(pattern, stats)
        };
        if (this._settings.stats) {
          entry.stats = stats;
        }
        return entry;
      }
      _isFatalError(error) {
        return !utils.errno.isEnoentCodeError(error) && !this._settings.suppressErrors;
      }
    };
    exports.default = Reader;
  }
});
var require_stream3 = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/readers/stream.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var stream_1 = (0, import_chunk_2ESYSVXG.__require)("stream");
    var fsStat = require_out();
    var fsWalk = require_out3();
    var reader_1 = require_reader2();
    var ReaderStream = class extends reader_1.default {
      constructor() {
        super(...arguments);
        this._walkStream = fsWalk.walkStream;
        this._stat = fsStat.stat;
      }
      dynamic(root, options) {
        return this._walkStream(root, options);
      }
      static(patterns, options) {
        const filepaths = patterns.map(this._getFullEntryPath, this);
        const stream = new stream_1.PassThrough({ objectMode: true });
        stream._write = (index, _enc, done) => {
          return this._getEntry(filepaths[index], patterns[index], options).then((entry) => {
            if (entry !== null && options.entryFilter(entry)) {
              stream.push(entry);
            }
            if (index === filepaths.length - 1) {
              stream.end();
            }
            done();
          }).catch(done);
        };
        for (let i = 0; i < filepaths.length; i++) {
          stream.write(i);
        }
        return stream;
      }
      _getEntry(filepath, pattern, options) {
        return this._getStat(filepath).then((stats) => this._makeEntry(stats, pattern)).catch((error) => {
          if (options.errorFilter(error)) {
            return null;
          }
          throw error;
        });
      }
      _getStat(filepath) {
        return new Promise((resolve, reject) => {
          this._stat(filepath, this._fsStatSettings, (error, stats) => {
            return error === null ? resolve(stats) : reject(error);
          });
        });
      }
    };
    exports.default = ReaderStream;
  }
});
var require_async5 = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/readers/async.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var fsWalk = require_out3();
    var reader_1 = require_reader2();
    var stream_1 = require_stream3();
    var ReaderAsync = class extends reader_1.default {
      constructor() {
        super(...arguments);
        this._walkAsync = fsWalk.walk;
        this._readerStream = new stream_1.default(this._settings);
      }
      dynamic(root, options) {
        return new Promise((resolve, reject) => {
          this._walkAsync(root, options, (error, entries) => {
            if (error === null) {
              resolve(entries);
            } else {
              reject(error);
            }
          });
        });
      }
      async static(patterns, options) {
        const entries = [];
        const stream = this._readerStream.static(patterns, options);
        return new Promise((resolve, reject) => {
          stream.once("error", reject);
          stream.on("data", (entry) => entries.push(entry));
          stream.once("end", () => resolve(entries));
        });
      }
    };
    exports.default = ReaderAsync;
  }
});
var require_matcher2 = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/providers/matchers/matcher.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils = require_utils3();
    var Matcher = class {
      constructor(_patterns, _settings, _micromatchOptions) {
        this._patterns = _patterns;
        this._settings = _settings;
        this._micromatchOptions = _micromatchOptions;
        this._storage = [];
        this._fillStorage();
      }
      _fillStorage() {
        for (const pattern of this._patterns) {
          const segments = this._getPatternSegments(pattern);
          const sections = this._splitSegmentsIntoSections(segments);
          this._storage.push({
            complete: sections.length <= 1,
            pattern,
            segments,
            sections
          });
        }
      }
      _getPatternSegments(pattern) {
        const parts = utils.pattern.getPatternParts(pattern, this._micromatchOptions);
        return parts.map((part) => {
          const dynamic = utils.pattern.isDynamicPattern(part, this._settings);
          if (!dynamic) {
            return {
              dynamic: false,
              pattern: part
            };
          }
          return {
            dynamic: true,
            pattern: part,
            patternRe: utils.pattern.makeRe(part, this._micromatchOptions)
          };
        });
      }
      _splitSegmentsIntoSections(segments) {
        return utils.array.splitWhen(segments, (segment) => segment.dynamic && utils.pattern.hasGlobStar(segment.pattern));
      }
    };
    exports.default = Matcher;
  }
});
var require_partial = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/providers/matchers/partial.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var matcher_1 = require_matcher2();
    var PartialMatcher = class extends matcher_1.default {
      match(filepath) {
        const parts = filepath.split("/");
        const levels = parts.length;
        const patterns = this._storage.filter((info) => !info.complete || info.segments.length > levels);
        for (const pattern of patterns) {
          const section = pattern.sections[0];
          if (!pattern.complete && levels > section.length) {
            return true;
          }
          const match = parts.every((part, index) => {
            const segment = pattern.segments[index];
            if (segment.dynamic && segment.patternRe.test(part)) {
              return true;
            }
            if (!segment.dynamic && segment.pattern === part) {
              return true;
            }
            return false;
          });
          if (match) {
            return true;
          }
        }
        return false;
      }
    };
    exports.default = PartialMatcher;
  }
});
var require_deep = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/providers/filters/deep.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils = require_utils3();
    var partial_1 = require_partial();
    var DeepFilter = class {
      constructor(_settings, _micromatchOptions) {
        this._settings = _settings;
        this._micromatchOptions = _micromatchOptions;
      }
      getFilter(basePath, positive, negative) {
        const matcher = this._getMatcher(positive);
        const negativeRe = this._getNegativePatternsRe(negative);
        return (entry) => this._filter(basePath, entry, matcher, negativeRe);
      }
      _getMatcher(patterns) {
        return new partial_1.default(patterns, this._settings, this._micromatchOptions);
      }
      _getNegativePatternsRe(patterns) {
        const affectDepthOfReadingPatterns = patterns.filter(utils.pattern.isAffectDepthOfReadingPattern);
        return utils.pattern.convertPatternsToRe(affectDepthOfReadingPatterns, this._micromatchOptions);
      }
      _filter(basePath, entry, matcher, negativeRe) {
        if (this._isSkippedByDeep(basePath, entry.path)) {
          return false;
        }
        if (this._isSkippedSymbolicLink(entry)) {
          return false;
        }
        const filepath = utils.path.removeLeadingDotSegment(entry.path);
        if (this._isSkippedByPositivePatterns(filepath, matcher)) {
          return false;
        }
        return this._isSkippedByNegativePatterns(filepath, negativeRe);
      }
      _isSkippedByDeep(basePath, entryPath) {
        if (this._settings.deep === Infinity) {
          return false;
        }
        return this._getEntryLevel(basePath, entryPath) >= this._settings.deep;
      }
      _getEntryLevel(basePath, entryPath) {
        const entryPathDepth = entryPath.split("/").length;
        if (basePath === "") {
          return entryPathDepth;
        }
        const basePathDepth = basePath.split("/").length;
        return entryPathDepth - basePathDepth;
      }
      _isSkippedSymbolicLink(entry) {
        return !this._settings.followSymbolicLinks && entry.dirent.isSymbolicLink();
      }
      _isSkippedByPositivePatterns(entryPath, matcher) {
        return !this._settings.baseNameMatch && !matcher.match(entryPath);
      }
      _isSkippedByNegativePatterns(entryPath, patternsRe) {
        return !utils.pattern.matchAny(entryPath, patternsRe);
      }
    };
    exports.default = DeepFilter;
  }
});
var require_entry = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/providers/filters/entry.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils = require_utils3();
    var EntryFilter = class {
      constructor(_settings, _micromatchOptions) {
        this._settings = _settings;
        this._micromatchOptions = _micromatchOptions;
        this.index = /* @__PURE__ */ new Map();
      }
      getFilter(positive, negative) {
        const [absoluteNegative, relativeNegative] = utils.pattern.partitionAbsoluteAndRelative(negative);
        const patterns = {
          positive: {
            all: utils.pattern.convertPatternsToRe(positive, this._micromatchOptions)
          },
          negative: {
            absolute: utils.pattern.convertPatternsToRe(absoluteNegative, Object.assign(Object.assign({}, this._micromatchOptions), { dot: true })),
            relative: utils.pattern.convertPatternsToRe(relativeNegative, Object.assign(Object.assign({}, this._micromatchOptions), { dot: true }))
          }
        };
        return (entry) => this._filter(entry, patterns);
      }
      _filter(entry, patterns) {
        const filepath = utils.path.removeLeadingDotSegment(entry.path);
        if (this._settings.unique && this._isDuplicateEntry(filepath)) {
          return false;
        }
        if (this._onlyFileFilter(entry) || this._onlyDirectoryFilter(entry)) {
          return false;
        }
        const isMatched = this._isMatchToPatternsSet(filepath, patterns, entry.dirent.isDirectory());
        if (this._settings.unique && isMatched) {
          this._createIndexRecord(filepath);
        }
        return isMatched;
      }
      _isDuplicateEntry(filepath) {
        return this.index.has(filepath);
      }
      _createIndexRecord(filepath) {
        this.index.set(filepath, void 0);
      }
      _onlyFileFilter(entry) {
        return this._settings.onlyFiles && !entry.dirent.isFile();
      }
      _onlyDirectoryFilter(entry) {
        return this._settings.onlyDirectories && !entry.dirent.isDirectory();
      }
      _isMatchToPatternsSet(filepath, patterns, isDirectory) {
        const isMatched = this._isMatchToPatterns(filepath, patterns.positive.all, isDirectory);
        if (!isMatched) {
          return false;
        }
        const isMatchedByRelativeNegative = this._isMatchToPatterns(filepath, patterns.negative.relative, isDirectory);
        if (isMatchedByRelativeNegative) {
          return false;
        }
        const isMatchedByAbsoluteNegative = this._isMatchToAbsoluteNegative(filepath, patterns.negative.absolute, isDirectory);
        if (isMatchedByAbsoluteNegative) {
          return false;
        }
        return true;
      }
      _isMatchToAbsoluteNegative(filepath, patternsRe, isDirectory) {
        if (patternsRe.length === 0) {
          return false;
        }
        const fullpath = utils.path.makeAbsolute(this._settings.cwd, filepath);
        return this._isMatchToPatterns(fullpath, patternsRe, isDirectory);
      }
      _isMatchToPatterns(filepath, patternsRe, isDirectory) {
        if (patternsRe.length === 0) {
          return false;
        }
        const isMatched = utils.pattern.matchAny(filepath, patternsRe);
        if (!isMatched && isDirectory) {
          return utils.pattern.matchAny(filepath + "/", patternsRe);
        }
        return isMatched;
      }
    };
    exports.default = EntryFilter;
  }
});
var require_error = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/providers/filters/error.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils = require_utils3();
    var ErrorFilter = class {
      constructor(_settings) {
        this._settings = _settings;
      }
      getFilter() {
        return (error) => this._isNonFatalError(error);
      }
      _isNonFatalError(error) {
        return utils.errno.isEnoentCodeError(error) || this._settings.suppressErrors;
      }
    };
    exports.default = ErrorFilter;
  }
});
var require_entry2 = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/providers/transformers/entry.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils = require_utils3();
    var EntryTransformer = class {
      constructor(_settings) {
        this._settings = _settings;
      }
      getTransformer() {
        return (entry) => this._transform(entry);
      }
      _transform(entry) {
        let filepath = entry.path;
        if (this._settings.absolute) {
          filepath = utils.path.makeAbsolute(this._settings.cwd, filepath);
          filepath = utils.path.unixify(filepath);
        }
        if (this._settings.markDirectories && entry.dirent.isDirectory()) {
          filepath += "/";
        }
        if (!this._settings.objectMode) {
          return filepath;
        }
        return Object.assign(Object.assign({}, entry), { path: filepath });
      }
    };
    exports.default = EntryTransformer;
  }
});
var require_provider = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/providers/provider.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var path3 = (0, import_chunk_2ESYSVXG.__require)("path");
    var deep_1 = require_deep();
    var entry_1 = require_entry();
    var error_1 = require_error();
    var entry_2 = require_entry2();
    var Provider = class {
      constructor(_settings) {
        this._settings = _settings;
        this.errorFilter = new error_1.default(this._settings);
        this.entryFilter = new entry_1.default(this._settings, this._getMicromatchOptions());
        this.deepFilter = new deep_1.default(this._settings, this._getMicromatchOptions());
        this.entryTransformer = new entry_2.default(this._settings);
      }
      _getRootDirectory(task) {
        return path3.resolve(this._settings.cwd, task.base);
      }
      _getReaderOptions(task) {
        const basePath = task.base === "." ? "" : task.base;
        return {
          basePath,
          pathSegmentSeparator: "/",
          concurrency: this._settings.concurrency,
          deepFilter: this.deepFilter.getFilter(basePath, task.positive, task.negative),
          entryFilter: this.entryFilter.getFilter(task.positive, task.negative),
          errorFilter: this.errorFilter.getFilter(),
          followSymbolicLinks: this._settings.followSymbolicLinks,
          fs: this._settings.fs,
          stats: this._settings.stats,
          throwErrorOnBrokenSymbolicLink: this._settings.throwErrorOnBrokenSymbolicLink,
          transform: this.entryTransformer.getTransformer()
        };
      }
      _getMicromatchOptions() {
        return {
          dot: this._settings.dot,
          matchBase: this._settings.baseNameMatch,
          nobrace: !this._settings.braceExpansion,
          nocase: !this._settings.caseSensitiveMatch,
          noext: !this._settings.extglob,
          noglobstar: !this._settings.globstar,
          posix: true,
          strictSlashes: false
        };
      }
    };
    exports.default = Provider;
  }
});
var require_async6 = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/providers/async.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var async_1 = require_async5();
    var provider_1 = require_provider();
    var ProviderAsync = class extends provider_1.default {
      constructor() {
        super(...arguments);
        this._reader = new async_1.default(this._settings);
      }
      async read(task) {
        const root = this._getRootDirectory(task);
        const options = this._getReaderOptions(task);
        const entries = await this.api(root, task, options);
        return entries.map((entry) => options.transform(entry));
      }
      api(root, task, options) {
        if (task.dynamic) {
          return this._reader.dynamic(root, options);
        }
        return this._reader.static(task.patterns, options);
      }
    };
    exports.default = ProviderAsync;
  }
});
var require_stream4 = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/providers/stream.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var stream_1 = (0, import_chunk_2ESYSVXG.__require)("stream");
    var stream_2 = require_stream3();
    var provider_1 = require_provider();
    var ProviderStream = class extends provider_1.default {
      constructor() {
        super(...arguments);
        this._reader = new stream_2.default(this._settings);
      }
      read(task) {
        const root = this._getRootDirectory(task);
        const options = this._getReaderOptions(task);
        const source = this.api(root, task, options);
        const destination = new stream_1.Readable({ objectMode: true, read: () => {
        } });
        source.once("error", (error) => destination.emit("error", error)).on("data", (entry) => destination.emit("data", options.transform(entry))).once("end", () => destination.emit("end"));
        destination.once("close", () => source.destroy());
        return destination;
      }
      api(root, task, options) {
        if (task.dynamic) {
          return this._reader.dynamic(root, options);
        }
        return this._reader.static(task.patterns, options);
      }
    };
    exports.default = ProviderStream;
  }
});
var require_sync5 = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/readers/sync.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var fsStat = require_out();
    var fsWalk = require_out3();
    var reader_1 = require_reader2();
    var ReaderSync = class extends reader_1.default {
      constructor() {
        super(...arguments);
        this._walkSync = fsWalk.walkSync;
        this._statSync = fsStat.statSync;
      }
      dynamic(root, options) {
        return this._walkSync(root, options);
      }
      static(patterns, options) {
        const entries = [];
        for (const pattern of patterns) {
          const filepath = this._getFullEntryPath(pattern);
          const entry = this._getEntry(filepath, pattern, options);
          if (entry === null || !options.entryFilter(entry)) {
            continue;
          }
          entries.push(entry);
        }
        return entries;
      }
      _getEntry(filepath, pattern, options) {
        try {
          const stats = this._getStat(filepath);
          return this._makeEntry(stats, pattern);
        } catch (error) {
          if (options.errorFilter(error)) {
            return null;
          }
          throw error;
        }
      }
      _getStat(filepath) {
        return this._statSync(filepath, this._fsStatSettings);
      }
    };
    exports.default = ReaderSync;
  }
});
var require_sync6 = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/providers/sync.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var sync_1 = require_sync5();
    var provider_1 = require_provider();
    var ProviderSync = class extends provider_1.default {
      constructor() {
        super(...arguments);
        this._reader = new sync_1.default(this._settings);
      }
      read(task) {
        const root = this._getRootDirectory(task);
        const options = this._getReaderOptions(task);
        const entries = this.api(root, task, options);
        return entries.map(options.transform);
      }
      api(root, task, options) {
        if (task.dynamic) {
          return this._reader.dynamic(root, options);
        }
        return this._reader.static(task.patterns, options);
      }
    };
    exports.default = ProviderSync;
  }
});
var require_settings4 = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/settings.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DEFAULT_FILE_SYSTEM_ADAPTER = void 0;
    var fs = (0, import_chunk_2ESYSVXG.__require)("fs");
    var os2 = (0, import_chunk_2ESYSVXG.__require)("os");
    var CPU_COUNT = Math.max(os2.cpus().length, 1);
    exports.DEFAULT_FILE_SYSTEM_ADAPTER = {
      lstat: fs.lstat,
      lstatSync: fs.lstatSync,
      stat: fs.stat,
      statSync: fs.statSync,
      readdir: fs.readdir,
      readdirSync: fs.readdirSync
    };
    var Settings = class {
      constructor(_options = {}) {
        this._options = _options;
        this.absolute = this._getValue(this._options.absolute, false);
        this.baseNameMatch = this._getValue(this._options.baseNameMatch, false);
        this.braceExpansion = this._getValue(this._options.braceExpansion, true);
        this.caseSensitiveMatch = this._getValue(this._options.caseSensitiveMatch, true);
        this.concurrency = this._getValue(this._options.concurrency, CPU_COUNT);
        this.cwd = this._getValue(this._options.cwd, process.cwd());
        this.deep = this._getValue(this._options.deep, Infinity);
        this.dot = this._getValue(this._options.dot, false);
        this.extglob = this._getValue(this._options.extglob, true);
        this.followSymbolicLinks = this._getValue(this._options.followSymbolicLinks, true);
        this.fs = this._getFileSystemMethods(this._options.fs);
        this.globstar = this._getValue(this._options.globstar, true);
        this.ignore = this._getValue(this._options.ignore, []);
        this.markDirectories = this._getValue(this._options.markDirectories, false);
        this.objectMode = this._getValue(this._options.objectMode, false);
        this.onlyDirectories = this._getValue(this._options.onlyDirectories, false);
        this.onlyFiles = this._getValue(this._options.onlyFiles, true);
        this.stats = this._getValue(this._options.stats, false);
        this.suppressErrors = this._getValue(this._options.suppressErrors, false);
        this.throwErrorOnBrokenSymbolicLink = this._getValue(this._options.throwErrorOnBrokenSymbolicLink, false);
        this.unique = this._getValue(this._options.unique, true);
        if (this.onlyDirectories) {
          this.onlyFiles = false;
        }
        if (this.stats) {
          this.objectMode = true;
        }
        this.ignore = [].concat(this.ignore);
      }
      _getValue(option, value) {
        return option === void 0 ? value : option;
      }
      _getFileSystemMethods(methods = {}) {
        return Object.assign(Object.assign({}, exports.DEFAULT_FILE_SYSTEM_ADAPTER), methods);
      }
    };
    exports.default = Settings;
  }
});
var require_out4 = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/index.js"(exports, module2) {
    "use strict";
    var taskManager = require_tasks();
    var async_1 = require_async6();
    var stream_1 = require_stream4();
    var sync_1 = require_sync6();
    var settings_1 = require_settings4();
    var utils = require_utils3();
    async function FastGlob(source, options) {
      assertPatternsInput(source);
      const works = getWorks(source, async_1.default, options);
      const result = await Promise.all(works);
      return utils.array.flatten(result);
    }
    (function(FastGlob2) {
      FastGlob2.glob = FastGlob2;
      FastGlob2.globSync = sync;
      FastGlob2.globStream = stream;
      FastGlob2.async = FastGlob2;
      function sync(source, options) {
        assertPatternsInput(source);
        const works = getWorks(source, sync_1.default, options);
        return utils.array.flatten(works);
      }
      FastGlob2.sync = sync;
      function stream(source, options) {
        assertPatternsInput(source);
        const works = getWorks(source, stream_1.default, options);
        return utils.stream.merge(works);
      }
      FastGlob2.stream = stream;
      function generateTasks(source, options) {
        assertPatternsInput(source);
        const patterns = [].concat(source);
        const settings = new settings_1.default(options);
        return taskManager.generate(patterns, settings);
      }
      FastGlob2.generateTasks = generateTasks;
      function isDynamicPattern(source, options) {
        assertPatternsInput(source);
        const settings = new settings_1.default(options);
        return utils.pattern.isDynamicPattern(source, settings);
      }
      FastGlob2.isDynamicPattern = isDynamicPattern;
      function escapePath(source) {
        assertPatternsInput(source);
        return utils.path.escape(source);
      }
      FastGlob2.escapePath = escapePath;
      function convertPathToPattern(source) {
        assertPatternsInput(source);
        return utils.path.convertPathToPattern(source);
      }
      FastGlob2.convertPathToPattern = convertPathToPattern;
      let posix;
      (function(posix2) {
        function escapePath2(source) {
          assertPatternsInput(source);
          return utils.path.escapePosixPath(source);
        }
        posix2.escapePath = escapePath2;
        function convertPathToPattern2(source) {
          assertPatternsInput(source);
          return utils.path.convertPosixPathToPattern(source);
        }
        posix2.convertPathToPattern = convertPathToPattern2;
      })(posix = FastGlob2.posix || (FastGlob2.posix = {}));
      let win32;
      (function(win322) {
        function escapePath2(source) {
          assertPatternsInput(source);
          return utils.path.escapeWindowsPath(source);
        }
        win322.escapePath = escapePath2;
        function convertPathToPattern2(source) {
          assertPatternsInput(source);
          return utils.path.convertWindowsPathToPattern(source);
        }
        win322.convertPathToPattern = convertPathToPattern2;
      })(win32 = FastGlob2.win32 || (FastGlob2.win32 = {}));
    })(FastGlob || (FastGlob = {}));
    function getWorks(source, _Provider, options) {
      const patterns = [].concat(source);
      const settings = new settings_1.default(options);
      const tasks = taskManager.generate(patterns, settings);
      const provider = new _Provider(settings);
      return tasks.map(provider.read, provider);
    }
    function assertPatternsInput(input) {
      const source = [].concat(input);
      const isValidSource = source.every((item) => utils.string.isString(item) && !utils.string.isEmpty(item));
      if (!isValidSource) {
        throw new TypeError("Patterns must be a string (non empty) or an array of strings");
      }
    }
    module2.exports = FastGlob;
  }
});
var require_path_type = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/path-type@4.0.0/node_modules/path-type/index.js"(exports) {
    "use strict";
    var { promisify } = (0, import_chunk_2ESYSVXG.__require)("util");
    var fs = (0, import_chunk_2ESYSVXG.__require)("fs");
    async function isType(fsStatType, statsMethodName, filePath) {
      if (typeof filePath !== "string") {
        throw new TypeError(`Expected a string, got ${typeof filePath}`);
      }
      try {
        const stats = await promisify(fs[fsStatType])(filePath);
        return stats[statsMethodName]();
      } catch (error) {
        if (error.code === "ENOENT") {
          return false;
        }
        throw error;
      }
    }
    function isTypeSync(fsStatType, statsMethodName, filePath) {
      if (typeof filePath !== "string") {
        throw new TypeError(`Expected a string, got ${typeof filePath}`);
      }
      try {
        return fs[fsStatType](filePath)[statsMethodName]();
      } catch (error) {
        if (error.code === "ENOENT") {
          return false;
        }
        throw error;
      }
    }
    exports.isFile = isType.bind(null, "stat", "isFile");
    exports.isDirectory = isType.bind(null, "stat", "isDirectory");
    exports.isSymlink = isType.bind(null, "lstat", "isSymbolicLink");
    exports.isFileSync = isTypeSync.bind(null, "statSync", "isFile");
    exports.isDirectorySync = isTypeSync.bind(null, "statSync", "isDirectory");
    exports.isSymlinkSync = isTypeSync.bind(null, "lstatSync", "isSymbolicLink");
  }
});
var require_dir_glob = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/dir-glob@3.0.1/node_modules/dir-glob/index.js"(exports, module2) {
    "use strict";
    var path3 = (0, import_chunk_2ESYSVXG.__require)("path");
    var pathType = require_path_type();
    var getExtensions = (extensions) => extensions.length > 1 ? `{${extensions.join(",")}}` : extensions[0];
    var getPath = (filepath, cwd) => {
      const pth = filepath[0] === "!" ? filepath.slice(1) : filepath;
      return path3.isAbsolute(pth) ? pth : path3.join(cwd, pth);
    };
    var addExtensions = (file, extensions) => {
      if (path3.extname(file)) {
        return `**/${file}`;
      }
      return `**/${file}.${getExtensions(extensions)}`;
    };
    var getGlob = (directory, options) => {
      if (options.files && !Array.isArray(options.files)) {
        throw new TypeError(`Expected \`files\` to be of type \`Array\` but received type \`${typeof options.files}\``);
      }
      if (options.extensions && !Array.isArray(options.extensions)) {
        throw new TypeError(`Expected \`extensions\` to be of type \`Array\` but received type \`${typeof options.extensions}\``);
      }
      if (options.files && options.extensions) {
        return options.files.map((x) => path3.posix.join(directory, addExtensions(x, options.extensions)));
      }
      if (options.files) {
        return options.files.map((x) => path3.posix.join(directory, `**/${x}`));
      }
      if (options.extensions) {
        return [path3.posix.join(directory, `**/*.${getExtensions(options.extensions)}`)];
      }
      return [path3.posix.join(directory, "**")];
    };
    module2.exports = async (input, options) => {
      options = {
        cwd: process.cwd(),
        ...options
      };
      if (typeof options.cwd !== "string") {
        throw new TypeError(`Expected \`cwd\` to be of type \`string\` but received type \`${typeof options.cwd}\``);
      }
      const globs = await Promise.all([].concat(input).map(async (x) => {
        const isDirectory = await pathType.isDirectory(getPath(x, options.cwd));
        return isDirectory ? getGlob(x, options) : x;
      }));
      return [].concat.apply([], globs);
    };
    module2.exports.sync = (input, options) => {
      options = {
        cwd: process.cwd(),
        ...options
      };
      if (typeof options.cwd !== "string") {
        throw new TypeError(`Expected \`cwd\` to be of type \`string\` but received type \`${typeof options.cwd}\``);
      }
      const globs = [].concat(input).map((x) => pathType.isDirectorySync(getPath(x, options.cwd)) ? getGlob(x, options) : x);
      return [].concat.apply([], globs);
    };
  }
});
var require_ignore = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/ignore@5.2.4/node_modules/ignore/index.js"(exports, module2) {
    "use strict";
    function makeArray(subject) {
      return Array.isArray(subject) ? subject : [subject];
    }
    var EMPTY = "";
    var SPACE = " ";
    var ESCAPE = "\\";
    var REGEX_TEST_BLANK_LINE = /^\s+$/;
    var REGEX_INVALID_TRAILING_BACKSLASH = /(?:[^\\]|^)\\$/;
    var REGEX_REPLACE_LEADING_EXCAPED_EXCLAMATION = /^\\!/;
    var REGEX_REPLACE_LEADING_EXCAPED_HASH = /^\\#/;
    var REGEX_SPLITALL_CRLF = /\r?\n/g;
    var REGEX_TEST_INVALID_PATH = /^\.*\/|^\.+$/;
    var SLASH = "/";
    var TMP_KEY_IGNORE = "node-ignore";
    if (typeof Symbol !== "undefined") {
      TMP_KEY_IGNORE = Symbol.for("node-ignore");
    }
    var KEY_IGNORE = TMP_KEY_IGNORE;
    var define = (object, key, value) => Object.defineProperty(object, key, { value });
    var REGEX_REGEXP_RANGE = /([0-z])-([0-z])/g;
    var RETURN_FALSE = () => false;
    var sanitizeRange = (range) => range.replace(
      REGEX_REGEXP_RANGE,
      (match, from, to) => from.charCodeAt(0) <= to.charCodeAt(0) ? match : EMPTY
    );
    var cleanRangeBackSlash = (slashes) => {
      const { length } = slashes;
      return slashes.slice(0, length - length % 2);
    };
    var REPLACERS = [
      // > Trailing spaces are ignored unless they are quoted with backslash ("\")
      [
        // (a\ ) -> (a )
        // (a  ) -> (a)
        // (a \ ) -> (a  )
        /\\?\s+$/,
        (match) => match.indexOf("\\") === 0 ? SPACE : EMPTY
      ],
      // replace (\ ) with ' '
      [
        /\\\s/g,
        () => SPACE
      ],
      // Escape metacharacters
      // which is written down by users but means special for regular expressions.
      // > There are 12 characters with special meanings:
      // > - the backslash \,
      // > - the caret ^,
      // > - the dollar sign $,
      // > - the period or dot .,
      // > - the vertical bar or pipe symbol |,
      // > - the question mark ?,
      // > - the asterisk or star *,
      // > - the plus sign +,
      // > - the opening parenthesis (,
      // > - the closing parenthesis ),
      // > - and the opening square bracket [,
      // > - the opening curly brace {,
      // > These special characters are often called "metacharacters".
      [
        /[\\$.|*+(){^]/g,
        (match) => `\\${match}`
      ],
      [
        // > a question mark (?) matches a single character
        /(?!\\)\?/g,
        () => "[^/]"
      ],
      // leading slash
      [
        // > A leading slash matches the beginning of the pathname.
        // > For example, "/*.c" matches "cat-file.c" but not "mozilla-sha1/sha1.c".
        // A leading slash matches the beginning of the pathname
        /^\//,
        () => "^"
      ],
      // replace special metacharacter slash after the leading slash
      [
        /\//g,
        () => "\\/"
      ],
      [
        // > A leading "**" followed by a slash means match in all directories.
        // > For example, "**/foo" matches file or directory "foo" anywhere,
        // > the same as pattern "foo".
        // > "**/foo/bar" matches file or directory "bar" anywhere that is directly
        // >   under directory "foo".
        // Notice that the '*'s have been replaced as '\\*'
        /^\^*\\\*\\\*\\\//,
        // '**/foo' <-> 'foo'
        () => "^(?:.*\\/)?"
      ],
      // starting
      [
        // there will be no leading '/'
        //   (which has been replaced by section "leading slash")
        // If starts with '**', adding a '^' to the regular expression also works
        /^(?=[^^])/,
        function startingReplacer() {
          return !/\/(?!$)/.test(this) ? "(?:^|\\/)" : "^";
        }
      ],
      // two globstars
      [
        // Use lookahead assertions so that we could match more than one `'/**'`
        /\\\/\\\*\\\*(?=\\\/|$)/g,
        // Zero, one or several directories
        // should not use '*', or it will be replaced by the next replacer
        // Check if it is not the last `'/**'`
        (_, index, str) => index + 6 < str.length ? "(?:\\/[^\\/]+)*" : "\\/.+"
      ],
      // normal intermediate wildcards
      [
        // Never replace escaped '*'
        // ignore rule '\*' will match the path '*'
        // 'abc.*/' -> go
        // 'abc.*'  -> skip this rule,
        //    coz trailing single wildcard will be handed by [trailing wildcard]
        /(^|[^\\]+)(\\\*)+(?=.+)/g,
        // '*.js' matches '.js'
        // '*.js' doesn't match 'abc'
        (_, p1, p2) => {
          const unescaped = p2.replace(/\\\*/g, "[^\\/]*");
          return p1 + unescaped;
        }
      ],
      [
        // unescape, revert step 3 except for back slash
        // For example, if a user escape a '\\*',
        // after step 3, the result will be '\\\\\\*'
        /\\\\\\(?=[$.|*+(){^])/g,
        () => ESCAPE
      ],
      [
        // '\\\\' -> '\\'
        /\\\\/g,
        () => ESCAPE
      ],
      [
        // > The range notation, e.g. [a-zA-Z],
        // > can be used to match one of the characters in a range.
        // `\` is escaped by step 3
        /(\\)?\[([^\]/]*?)(\\*)($|\])/g,
        (match, leadEscape, range, endEscape, close) => leadEscape === ESCAPE ? `\\[${range}${cleanRangeBackSlash(endEscape)}${close}` : close === "]" ? endEscape.length % 2 === 0 ? `[${sanitizeRange(range)}${endEscape}]` : "[]" : "[]"
      ],
      // ending
      [
        // 'js' will not match 'js.'
        // 'ab' will not match 'abc'
        /(?:[^*])$/,
        // WTF!
        // https://git-scm.com/docs/gitignore
        // changes in [2.22.1](https://git-scm.com/docs/gitignore/2.22.1)
        // which re-fixes #24, #38
        // > If there is a separator at the end of the pattern then the pattern
        // > will only match directories, otherwise the pattern can match both
        // > files and directories.
        // 'js*' will not match 'a.js'
        // 'js/' will not match 'a.js'
        // 'js' will match 'a.js' and 'a.js/'
        (match) => /\/$/.test(match) ? `${match}$` : `${match}(?=$|\\/$)`
      ],
      // trailing wildcard
      [
        /(\^|\\\/)?\\\*$/,
        (_, p1) => {
          const prefix = p1 ? `${p1}[^/]+` : "[^/]*";
          return `${prefix}(?=$|\\/$)`;
        }
      ]
    ];
    var regexCache = /* @__PURE__ */ Object.create(null);
    var makeRegex = (pattern, ignoreCase) => {
      let source = regexCache[pattern];
      if (!source) {
        source = REPLACERS.reduce(
          (prev, current) => prev.replace(current[0], current[1].bind(pattern)),
          pattern
        );
        regexCache[pattern] = source;
      }
      return ignoreCase ? new RegExp(source, "i") : new RegExp(source);
    };
    var isString = (subject) => typeof subject === "string";
    var checkPattern = (pattern) => pattern && isString(pattern) && !REGEX_TEST_BLANK_LINE.test(pattern) && !REGEX_INVALID_TRAILING_BACKSLASH.test(pattern) && pattern.indexOf("#") !== 0;
    var splitPattern = (pattern) => pattern.split(REGEX_SPLITALL_CRLF);
    var IgnoreRule = class {
      constructor(origin, pattern, negative, regex) {
        this.origin = origin;
        this.pattern = pattern;
        this.negative = negative;
        this.regex = regex;
      }
    };
    var createRule = (pattern, ignoreCase) => {
      const origin = pattern;
      let negative = false;
      if (pattern.indexOf("!") === 0) {
        negative = true;
        pattern = pattern.substr(1);
      }
      pattern = pattern.replace(REGEX_REPLACE_LEADING_EXCAPED_EXCLAMATION, "!").replace(REGEX_REPLACE_LEADING_EXCAPED_HASH, "#");
      const regex = makeRegex(pattern, ignoreCase);
      return new IgnoreRule(
        origin,
        pattern,
        negative,
        regex
      );
    };
    var throwError = (message, Ctor) => {
      throw new Ctor(message);
    };
    var checkPath = (path3, originalPath, doThrow) => {
      if (!isString(path3)) {
        return doThrow(
          `path must be a string, but got \`${originalPath}\``,
          TypeError
        );
      }
      if (!path3) {
        return doThrow(`path must not be empty`, TypeError);
      }
      if (checkPath.isNotRelative(path3)) {
        const r = "`path.relative()`d";
        return doThrow(
          `path should be a ${r} string, but got "${originalPath}"`,
          RangeError
        );
      }
      return true;
    };
    var isNotRelative = (path3) => REGEX_TEST_INVALID_PATH.test(path3);
    checkPath.isNotRelative = isNotRelative;
    checkPath.convert = (p) => p;
    var Ignore = class {
      constructor({
        ignorecase = true,
        ignoreCase = ignorecase,
        allowRelativePaths = false
      } = {}) {
        define(this, KEY_IGNORE, true);
        this._rules = [];
        this._ignoreCase = ignoreCase;
        this._allowRelativePaths = allowRelativePaths;
        this._initCache();
      }
      _initCache() {
        this._ignoreCache = /* @__PURE__ */ Object.create(null);
        this._testCache = /* @__PURE__ */ Object.create(null);
      }
      _addPattern(pattern) {
        if (pattern && pattern[KEY_IGNORE]) {
          this._rules = this._rules.concat(pattern._rules);
          this._added = true;
          return;
        }
        if (checkPattern(pattern)) {
          const rule = createRule(pattern, this._ignoreCase);
          this._added = true;
          this._rules.push(rule);
        }
      }
      // @param {Array<string> | string | Ignore} pattern
      add(pattern) {
        this._added = false;
        makeArray(
          isString(pattern) ? splitPattern(pattern) : pattern
        ).forEach(this._addPattern, this);
        if (this._added) {
          this._initCache();
        }
        return this;
      }
      // legacy
      addPattern(pattern) {
        return this.add(pattern);
      }
      //          |           ignored : unignored
      // negative |   0:0   |   0:1   |   1:0   |   1:1
      // -------- | ------- | ------- | ------- | --------
      //     0    |  TEST   |  TEST   |  SKIP   |    X
      //     1    |  TESTIF |  SKIP   |  TEST   |    X
      // - SKIP: always skip
      // - TEST: always test
      // - TESTIF: only test if checkUnignored
      // - X: that never happen
      // @param {boolean} whether should check if the path is unignored,
      //   setting `checkUnignored` to `false` could reduce additional
      //   path matching.
      // @returns {TestResult} true if a file is ignored
      _testOne(path3, checkUnignored) {
        let ignored = false;
        let unignored = false;
        this._rules.forEach((rule) => {
          const { negative } = rule;
          if (unignored === negative && ignored !== unignored || negative && !ignored && !unignored && !checkUnignored) {
            return;
          }
          const matched = rule.regex.test(path3);
          if (matched) {
            ignored = !negative;
            unignored = negative;
          }
        });
        return {
          ignored,
          unignored
        };
      }
      // @returns {TestResult}
      _test(originalPath, cache, checkUnignored, slices) {
        const path3 = originalPath && checkPath.convert(originalPath);
        checkPath(
          path3,
          originalPath,
          this._allowRelativePaths ? RETURN_FALSE : throwError
        );
        return this._t(path3, cache, checkUnignored, slices);
      }
      _t(path3, cache, checkUnignored, slices) {
        if (path3 in cache) {
          return cache[path3];
        }
        if (!slices) {
          slices = path3.split(SLASH);
        }
        slices.pop();
        if (!slices.length) {
          return cache[path3] = this._testOne(path3, checkUnignored);
        }
        const parent = this._t(
          slices.join(SLASH) + SLASH,
          cache,
          checkUnignored,
          slices
        );
        return cache[path3] = parent.ignored ? parent : this._testOne(path3, checkUnignored);
      }
      ignores(path3) {
        return this._test(path3, this._ignoreCache, false).ignored;
      }
      createFilter() {
        return (path3) => !this.ignores(path3);
      }
      filter(paths) {
        return makeArray(paths).filter(this.createFilter());
      }
      // @returns {TestResult}
      test(path3) {
        return this._test(path3, this._testCache, true);
      }
    };
    var factory = (options) => new Ignore(options);
    var isPathValid = (path3) => checkPath(path3 && checkPath.convert(path3), path3, RETURN_FALSE);
    factory.isPathValid = isPathValid;
    factory.default = factory;
    module2.exports = factory;
    if (
      // Detect `process` so that it can run in browsers.
      typeof process !== "undefined" && (process.env && process.env.IGNORE_TEST_WIN32 || process.platform === "win32")
    ) {
      const makePosix = (str) => /^\\\\\?\\/.test(str) || /["<>|\u0000-\u001F]+/u.test(str) ? str : str.replace(/\\/g, "/");
      checkPath.convert = makePosix;
      const REGIX_IS_WINDOWS_PATH_ABSOLUTE = /^[a-z]:\//i;
      checkPath.isNotRelative = (path3) => REGIX_IS_WINDOWS_PATH_ABSOLUTE.test(path3) || isNotRelative(path3);
    }
  }
});
var require_slash = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/slash@3.0.0/node_modules/slash/index.js"(exports, module2) {
    "use strict";
    module2.exports = (path3) => {
      const isExtendedLengthPath = /^\\\\\?\\/.test(path3);
      const hasNonAscii = /[^\u0000-\u0080]+/.test(path3);
      if (isExtendedLengthPath || hasNonAscii) {
        return path3;
      }
      return path3.replace(/\\/g, "/");
    };
  }
});
var require_gitignore = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/globby@11.1.0/node_modules/globby/gitignore.js"(exports, module2) {
    "use strict";
    var { promisify } = (0, import_chunk_2ESYSVXG.__require)("util");
    var fs = (0, import_chunk_2ESYSVXG.__require)("fs");
    var path3 = (0, import_chunk_2ESYSVXG.__require)("path");
    var fastGlob = require_out4();
    var gitIgnore = require_ignore();
    var slash = require_slash();
    var DEFAULT_IGNORE = [
      "**/node_modules/**",
      "**/flow-typed/**",
      "**/coverage/**",
      "**/.git"
    ];
    var readFileP = promisify(fs.readFile);
    var mapGitIgnorePatternTo = (base) => (ignore) => {
      if (ignore.startsWith("!")) {
        return "!" + path3.posix.join(base, ignore.slice(1));
      }
      return path3.posix.join(base, ignore);
    };
    var parseGitIgnore = (content, options) => {
      const base = slash(path3.relative(options.cwd, path3.dirname(options.fileName)));
      return content.split(/\r?\n/).filter(Boolean).filter((line) => !line.startsWith("#")).map(mapGitIgnorePatternTo(base));
    };
    var reduceIgnore = (files) => {
      const ignores = gitIgnore();
      for (const file of files) {
        ignores.add(parseGitIgnore(file.content, {
          cwd: file.cwd,
          fileName: file.filePath
        }));
      }
      return ignores;
    };
    var ensureAbsolutePathForCwd = (cwd, p) => {
      cwd = slash(cwd);
      if (path3.isAbsolute(p)) {
        if (slash(p).startsWith(cwd)) {
          return p;
        }
        throw new Error(`Path ${p} is not in cwd ${cwd}`);
      }
      return path3.join(cwd, p);
    };
    var getIsIgnoredPredecate = (ignores, cwd) => {
      return (p) => ignores.ignores(slash(path3.relative(cwd, ensureAbsolutePathForCwd(cwd, p.path || p))));
    };
    var getFile = async (file, cwd) => {
      const filePath = path3.join(cwd, file);
      const content = await readFileP(filePath, "utf8");
      return {
        cwd,
        filePath,
        content
      };
    };
    var getFileSync = (file, cwd) => {
      const filePath = path3.join(cwd, file);
      const content = fs.readFileSync(filePath, "utf8");
      return {
        cwd,
        filePath,
        content
      };
    };
    var normalizeOptions = ({
      ignore = [],
      cwd = slash(process.cwd())
    } = {}) => {
      return { ignore, cwd };
    };
    module2.exports = async (options) => {
      options = normalizeOptions(options);
      const paths = await fastGlob("**/.gitignore", {
        ignore: DEFAULT_IGNORE.concat(options.ignore),
        cwd: options.cwd
      });
      const files = await Promise.all(paths.map((file) => getFile(file, options.cwd)));
      const ignores = reduceIgnore(files);
      return getIsIgnoredPredecate(ignores, options.cwd);
    };
    module2.exports.sync = (options) => {
      options = normalizeOptions(options);
      const paths = fastGlob.sync("**/.gitignore", {
        ignore: DEFAULT_IGNORE.concat(options.ignore),
        cwd: options.cwd
      });
      const files = paths.map((file) => getFileSync(file, options.cwd));
      const ignores = reduceIgnore(files);
      return getIsIgnoredPredecate(ignores, options.cwd);
    };
  }
});
var require_stream_utils = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/globby@11.1.0/node_modules/globby/stream-utils.js"(exports, module2) {
    "use strict";
    var { Transform } = (0, import_chunk_2ESYSVXG.__require)("stream");
    var ObjectTransform = class extends Transform {
      constructor() {
        super({
          objectMode: true
        });
      }
    };
    var FilterStream = class extends ObjectTransform {
      constructor(filter) {
        super();
        this._filter = filter;
      }
      _transform(data, encoding, callback) {
        if (this._filter(data)) {
          this.push(data);
        }
        callback();
      }
    };
    var UniqueStream = class extends ObjectTransform {
      constructor() {
        super();
        this._pushed = /* @__PURE__ */ new Set();
      }
      _transform(data, encoding, callback) {
        if (!this._pushed.has(data)) {
          this.push(data);
          this._pushed.add(data);
        }
        callback();
      }
    };
    module2.exports = {
      FilterStream,
      UniqueStream
    };
  }
});
var require_globby = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/globby@11.1.0/node_modules/globby/index.js"(exports, module2) {
    "use strict";
    var fs = (0, import_chunk_2ESYSVXG.__require)("fs");
    var arrayUnion = require_array_union();
    var merge2 = require_merge2();
    var fastGlob = require_out4();
    var dirGlob = require_dir_glob();
    var gitignore = require_gitignore();
    var { FilterStream, UniqueStream } = require_stream_utils();
    var DEFAULT_FILTER = () => false;
    var isNegative = (pattern) => pattern[0] === "!";
    var assertPatternsInput = (patterns) => {
      if (!patterns.every((pattern) => typeof pattern === "string")) {
        throw new TypeError("Patterns must be a string or an array of strings");
      }
    };
    var checkCwdOption = (options = {}) => {
      if (!options.cwd) {
        return;
      }
      let stat;
      try {
        stat = fs.statSync(options.cwd);
      } catch {
        return;
      }
      if (!stat.isDirectory()) {
        throw new Error("The `cwd` option must be a path to a directory");
      }
    };
    var getPathString = (p) => p.stats instanceof fs.Stats ? p.path : p;
    var generateGlobTasks = (patterns, taskOptions) => {
      patterns = arrayUnion([].concat(patterns));
      assertPatternsInput(patterns);
      checkCwdOption(taskOptions);
      const globTasks = [];
      taskOptions = {
        ignore: [],
        expandDirectories: true,
        ...taskOptions
      };
      for (const [index, pattern] of patterns.entries()) {
        if (isNegative(pattern)) {
          continue;
        }
        const ignore = patterns.slice(index).filter((pattern2) => isNegative(pattern2)).map((pattern2) => pattern2.slice(1));
        const options = {
          ...taskOptions,
          ignore: taskOptions.ignore.concat(ignore)
        };
        globTasks.push({ pattern, options });
      }
      return globTasks;
    };
    var globDirs = (task, fn) => {
      let options = {};
      if (task.options.cwd) {
        options.cwd = task.options.cwd;
      }
      if (Array.isArray(task.options.expandDirectories)) {
        options = {
          ...options,
          files: task.options.expandDirectories
        };
      } else if (typeof task.options.expandDirectories === "object") {
        options = {
          ...options,
          ...task.options.expandDirectories
        };
      }
      return fn(task.pattern, options);
    };
    var getPattern = (task, fn) => task.options.expandDirectories ? globDirs(task, fn) : [task.pattern];
    var getFilterSync = (options) => {
      return options && options.gitignore ? gitignore.sync({ cwd: options.cwd, ignore: options.ignore }) : DEFAULT_FILTER;
    };
    var globToTask = (task) => (glob) => {
      const { options } = task;
      if (options.ignore && Array.isArray(options.ignore) && options.expandDirectories) {
        options.ignore = dirGlob.sync(options.ignore);
      }
      return {
        pattern: glob,
        options
      };
    };
    module2.exports = async (patterns, options) => {
      const globTasks = generateGlobTasks(patterns, options);
      const getFilter = async () => {
        return options && options.gitignore ? gitignore({ cwd: options.cwd, ignore: options.ignore }) : DEFAULT_FILTER;
      };
      const getTasks = async () => {
        const tasks2 = await Promise.all(globTasks.map(async (task) => {
          const globs = await getPattern(task, dirGlob);
          return Promise.all(globs.map(globToTask(task)));
        }));
        return arrayUnion(...tasks2);
      };
      const [filter, tasks] = await Promise.all([getFilter(), getTasks()]);
      const paths = await Promise.all(tasks.map((task) => fastGlob(task.pattern, task.options)));
      return arrayUnion(...paths).filter((path_) => !filter(getPathString(path_)));
    };
    module2.exports.sync = (patterns, options) => {
      const globTasks = generateGlobTasks(patterns, options);
      const tasks = [];
      for (const task of globTasks) {
        const newTask = getPattern(task, dirGlob.sync).map(globToTask(task));
        tasks.push(...newTask);
      }
      const filter = getFilterSync(options);
      let matches = [];
      for (const task of tasks) {
        matches = arrayUnion(matches, fastGlob.sync(task.pattern, task.options));
      }
      return matches.filter((path_) => !filter(path_));
    };
    module2.exports.stream = (patterns, options) => {
      const globTasks = generateGlobTasks(patterns, options);
      const tasks = [];
      for (const task of globTasks) {
        const newTask = getPattern(task, dirGlob.sync).map(globToTask(task));
        tasks.push(...newTask);
      }
      const filter = getFilterSync(options);
      const filterStream = new FilterStream((p) => !filter(p));
      const uniqueStream = new UniqueStream();
      return merge2(tasks.map((task) => fastGlob.stream(task.pattern, task.options))).pipe(filterStream).pipe(uniqueStream);
    };
    module2.exports.generateGlobTasks = generateGlobTasks;
    module2.exports.hasMagic = (patterns, options) => [].concat(patterns).some((pattern) => fastGlob.isDynamicPattern(pattern, options));
    module2.exports.gitignore = gitignore;
  }
});
var require_polyfills = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/graceful-fs@4.2.10/node_modules/graceful-fs/polyfills.js"(exports, module2) {
    "use strict";
    var constants3 = (0, import_chunk_2ESYSVXG.__require)("constants");
    var origCwd = process.cwd;
    var cwd = null;
    var platform = process.env.GRACEFUL_FS_PLATFORM || process.platform;
    process.cwd = function() {
      if (!cwd)
        cwd = origCwd.call(process);
      return cwd;
    };
    try {
      process.cwd();
    } catch (er) {
    }
    if (typeof process.chdir === "function") {
      chdir = process.chdir;
      process.chdir = function(d) {
        cwd = null;
        chdir.call(process, d);
      };
      if (Object.setPrototypeOf) Object.setPrototypeOf(process.chdir, chdir);
    }
    var chdir;
    module2.exports = patch;
    function patch(fs) {
      if (constants3.hasOwnProperty("O_SYMLINK") && process.version.match(/^v0\.6\.[0-2]|^v0\.5\./)) {
        patchLchmod(fs);
      }
      if (!fs.lutimes) {
        patchLutimes(fs);
      }
      fs.chown = chownFix(fs.chown);
      fs.fchown = chownFix(fs.fchown);
      fs.lchown = chownFix(fs.lchown);
      fs.chmod = chmodFix(fs.chmod);
      fs.fchmod = chmodFix(fs.fchmod);
      fs.lchmod = chmodFix(fs.lchmod);
      fs.chownSync = chownFixSync(fs.chownSync);
      fs.fchownSync = chownFixSync(fs.fchownSync);
      fs.lchownSync = chownFixSync(fs.lchownSync);
      fs.chmodSync = chmodFixSync(fs.chmodSync);
      fs.fchmodSync = chmodFixSync(fs.fchmodSync);
      fs.lchmodSync = chmodFixSync(fs.lchmodSync);
      fs.stat = statFix(fs.stat);
      fs.fstat = statFix(fs.fstat);
      fs.lstat = statFix(fs.lstat);
      fs.statSync = statFixSync(fs.statSync);
      fs.fstatSync = statFixSync(fs.fstatSync);
      fs.lstatSync = statFixSync(fs.lstatSync);
      if (fs.chmod && !fs.lchmod) {
        fs.lchmod = function(path3, mode, cb) {
          if (cb) process.nextTick(cb);
        };
        fs.lchmodSync = function() {
        };
      }
      if (fs.chown && !fs.lchown) {
        fs.lchown = function(path3, uid, gid, cb) {
          if (cb) process.nextTick(cb);
        };
        fs.lchownSync = function() {
        };
      }
      if (platform === "win32") {
        fs.rename = typeof fs.rename !== "function" ? fs.rename : function(fs$rename) {
          function rename(from, to, cb) {
            var start = Date.now();
            var backoff = 0;
            fs$rename(from, to, function CB(er) {
              if (er && (er.code === "EACCES" || er.code === "EPERM") && Date.now() - start < 6e4) {
                setTimeout(function() {
                  fs.stat(to, function(stater, st) {
                    if (stater && stater.code === "ENOENT")
                      fs$rename(from, to, CB);
                    else
                      cb(er);
                  });
                }, backoff);
                if (backoff < 100)
                  backoff += 10;
                return;
              }
              if (cb) cb(er);
            });
          }
          if (Object.setPrototypeOf) Object.setPrototypeOf(rename, fs$rename);
          return rename;
        }(fs.rename);
      }
      fs.read = typeof fs.read !== "function" ? fs.read : function(fs$read) {
        function read(fd, buffer, offset, length, position, callback_) {
          var callback;
          if (callback_ && typeof callback_ === "function") {
            var eagCounter = 0;
            callback = function(er, _, __) {
              if (er && er.code === "EAGAIN" && eagCounter < 10) {
                eagCounter++;
                return fs$read.call(fs, fd, buffer, offset, length, position, callback);
              }
              callback_.apply(this, arguments);
            };
          }
          return fs$read.call(fs, fd, buffer, offset, length, position, callback);
        }
        if (Object.setPrototypeOf) Object.setPrototypeOf(read, fs$read);
        return read;
      }(fs.read);
      fs.readSync = typeof fs.readSync !== "function" ? fs.readSync : /* @__PURE__ */ function(fs$readSync) {
        return function(fd, buffer, offset, length, position) {
          var eagCounter = 0;
          while (true) {
            try {
              return fs$readSync.call(fs, fd, buffer, offset, length, position);
            } catch (er) {
              if (er.code === "EAGAIN" && eagCounter < 10) {
                eagCounter++;
                continue;
              }
              throw er;
            }
          }
        };
      }(fs.readSync);
      function patchLchmod(fs2) {
        fs2.lchmod = function(path3, mode, callback) {
          fs2.open(
            path3,
            constants3.O_WRONLY | constants3.O_SYMLINK,
            mode,
            function(err, fd) {
              if (err) {
                if (callback) callback(err);
                return;
              }
              fs2.fchmod(fd, mode, function(err2) {
                fs2.close(fd, function(err22) {
                  if (callback) callback(err2 || err22);
                });
              });
            }
          );
        };
        fs2.lchmodSync = function(path3, mode) {
          var fd = fs2.openSync(path3, constants3.O_WRONLY | constants3.O_SYMLINK, mode);
          var threw = true;
          var ret;
          try {
            ret = fs2.fchmodSync(fd, mode);
            threw = false;
          } finally {
            if (threw) {
              try {
                fs2.closeSync(fd);
              } catch (er) {
              }
            } else {
              fs2.closeSync(fd);
            }
          }
          return ret;
        };
      }
      function patchLutimes(fs2) {
        if (constants3.hasOwnProperty("O_SYMLINK") && fs2.futimes) {
          fs2.lutimes = function(path3, at, mt, cb) {
            fs2.open(path3, constants3.O_SYMLINK, function(er, fd) {
              if (er) {
                if (cb) cb(er);
                return;
              }
              fs2.futimes(fd, at, mt, function(er2) {
                fs2.close(fd, function(er22) {
                  if (cb) cb(er2 || er22);
                });
              });
            });
          };
          fs2.lutimesSync = function(path3, at, mt) {
            var fd = fs2.openSync(path3, constants3.O_SYMLINK);
            var ret;
            var threw = true;
            try {
              ret = fs2.futimesSync(fd, at, mt);
              threw = false;
            } finally {
              if (threw) {
                try {
                  fs2.closeSync(fd);
                } catch (er) {
                }
              } else {
                fs2.closeSync(fd);
              }
            }
            return ret;
          };
        } else if (fs2.futimes) {
          fs2.lutimes = function(_a, _b, _c, cb) {
            if (cb) process.nextTick(cb);
          };
          fs2.lutimesSync = function() {
          };
        }
      }
      function chmodFix(orig) {
        if (!orig) return orig;
        return function(target, mode, cb) {
          return orig.call(fs, target, mode, function(er) {
            if (chownErOk(er)) er = null;
            if (cb) cb.apply(this, arguments);
          });
        };
      }
      function chmodFixSync(orig) {
        if (!orig) return orig;
        return function(target, mode) {
          try {
            return orig.call(fs, target, mode);
          } catch (er) {
            if (!chownErOk(er)) throw er;
          }
        };
      }
      function chownFix(orig) {
        if (!orig) return orig;
        return function(target, uid, gid, cb) {
          return orig.call(fs, target, uid, gid, function(er) {
            if (chownErOk(er)) er = null;
            if (cb) cb.apply(this, arguments);
          });
        };
      }
      function chownFixSync(orig) {
        if (!orig) return orig;
        return function(target, uid, gid) {
          try {
            return orig.call(fs, target, uid, gid);
          } catch (er) {
            if (!chownErOk(er)) throw er;
          }
        };
      }
      function statFix(orig) {
        if (!orig) return orig;
        return function(target, options, cb) {
          if (typeof options === "function") {
            cb = options;
            options = null;
          }
          function callback(er, stats) {
            if (stats) {
              if (stats.uid < 0) stats.uid += 4294967296;
              if (stats.gid < 0) stats.gid += 4294967296;
            }
            if (cb) cb.apply(this, arguments);
          }
          return options ? orig.call(fs, target, options, callback) : orig.call(fs, target, callback);
        };
      }
      function statFixSync(orig) {
        if (!orig) return orig;
        return function(target, options) {
          var stats = options ? orig.call(fs, target, options) : orig.call(fs, target);
          if (stats) {
            if (stats.uid < 0) stats.uid += 4294967296;
            if (stats.gid < 0) stats.gid += 4294967296;
          }
          return stats;
        };
      }
      function chownErOk(er) {
        if (!er)
          return true;
        if (er.code === "ENOSYS")
          return true;
        var nonroot = !process.getuid || process.getuid() !== 0;
        if (nonroot) {
          if (er.code === "EINVAL" || er.code === "EPERM")
            return true;
        }
        return false;
      }
    }
  }
});
var require_legacy_streams = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/graceful-fs@4.2.10/node_modules/graceful-fs/legacy-streams.js"(exports, module2) {
    "use strict";
    var Stream = (0, import_chunk_2ESYSVXG.__require)("stream").Stream;
    module2.exports = legacy;
    function legacy(fs) {
      return {
        ReadStream,
        WriteStream
      };
      function ReadStream(path3, options) {
        if (!(this instanceof ReadStream)) return new ReadStream(path3, options);
        Stream.call(this);
        var self = this;
        this.path = path3;
        this.fd = null;
        this.readable = true;
        this.paused = false;
        this.flags = "r";
        this.mode = 438;
        this.bufferSize = 64 * 1024;
        options = options || {};
        var keys = Object.keys(options);
        for (var index = 0, length = keys.length; index < length; index++) {
          var key = keys[index];
          this[key] = options[key];
        }
        if (this.encoding) this.setEncoding(this.encoding);
        if (this.start !== void 0) {
          if ("number" !== typeof this.start) {
            throw TypeError("start must be a Number");
          }
          if (this.end === void 0) {
            this.end = Infinity;
          } else if ("number" !== typeof this.end) {
            throw TypeError("end must be a Number");
          }
          if (this.start > this.end) {
            throw new Error("start must be <= end");
          }
          this.pos = this.start;
        }
        if (this.fd !== null) {
          process.nextTick(function() {
            self._read();
          });
          return;
        }
        fs.open(this.path, this.flags, this.mode, function(err, fd) {
          if (err) {
            self.emit("error", err);
            self.readable = false;
            return;
          }
          self.fd = fd;
          self.emit("open", fd);
          self._read();
        });
      }
      function WriteStream(path3, options) {
        if (!(this instanceof WriteStream)) return new WriteStream(path3, options);
        Stream.call(this);
        this.path = path3;
        this.fd = null;
        this.writable = true;
        this.flags = "w";
        this.encoding = "binary";
        this.mode = 438;
        this.bytesWritten = 0;
        options = options || {};
        var keys = Object.keys(options);
        for (var index = 0, length = keys.length; index < length; index++) {
          var key = keys[index];
          this[key] = options[key];
        }
        if (this.start !== void 0) {
          if ("number" !== typeof this.start) {
            throw TypeError("start must be a Number");
          }
          if (this.start < 0) {
            throw new Error("start must be >= zero");
          }
          this.pos = this.start;
        }
        this.busy = false;
        this._queue = [];
        if (this.fd === null) {
          this._open = fs.open;
          this._queue.push([this._open, this.path, this.flags, this.mode, void 0]);
          this.flush();
        }
      }
    }
  }
});
var require_clone = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/graceful-fs@4.2.10/node_modules/graceful-fs/clone.js"(exports, module2) {
    "use strict";
    module2.exports = clone;
    var getPrototypeOf = Object.getPrototypeOf || function(obj) {
      return obj.__proto__;
    };
    function clone(obj) {
      if (obj === null || typeof obj !== "object")
        return obj;
      if (obj instanceof Object)
        var copy = { __proto__: getPrototypeOf(obj) };
      else
        var copy = /* @__PURE__ */ Object.create(null);
      Object.getOwnPropertyNames(obj).forEach(function(key) {
        Object.defineProperty(copy, key, Object.getOwnPropertyDescriptor(obj, key));
      });
      return copy;
    }
  }
});
var require_graceful_fs = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/graceful-fs@4.2.10/node_modules/graceful-fs/graceful-fs.js"(exports, module2) {
    "use strict";
    var fs = (0, import_chunk_2ESYSVXG.__require)("fs");
    var polyfills = require_polyfills();
    var legacy = require_legacy_streams();
    var clone = require_clone();
    var util = (0, import_chunk_2ESYSVXG.__require)("util");
    var gracefulQueue;
    var previousSymbol;
    if (typeof Symbol === "function" && typeof Symbol.for === "function") {
      gracefulQueue = Symbol.for("graceful-fs.queue");
      previousSymbol = Symbol.for("graceful-fs.previous");
    } else {
      gracefulQueue = "___graceful-fs.queue";
      previousSymbol = "___graceful-fs.previous";
    }
    function noop2() {
    }
    function publishQueue(context, queue2) {
      Object.defineProperty(context, gracefulQueue, {
        get: function() {
          return queue2;
        }
      });
    }
    var debug = noop2;
    if (util.debuglog)
      debug = util.debuglog("gfs4");
    else if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || ""))
      debug = function() {
        var m = util.format.apply(util, arguments);
        m = "GFS4: " + m.split(/\n/).join("\nGFS4: ");
        console.error(m);
      };
    if (!fs[gracefulQueue]) {
      queue = global[gracefulQueue] || [];
      publishQueue(fs, queue);
      fs.close = function(fs$close) {
        function close(fd, cb) {
          return fs$close.call(fs, fd, function(err) {
            if (!err) {
              resetQueue();
            }
            if (typeof cb === "function")
              cb.apply(this, arguments);
          });
        }
        Object.defineProperty(close, previousSymbol, {
          value: fs$close
        });
        return close;
      }(fs.close);
      fs.closeSync = function(fs$closeSync) {
        function closeSync(fd) {
          fs$closeSync.apply(fs, arguments);
          resetQueue();
        }
        Object.defineProperty(closeSync, previousSymbol, {
          value: fs$closeSync
        });
        return closeSync;
      }(fs.closeSync);
      if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || "")) {
        process.on("exit", function() {
          debug(fs[gracefulQueue]);
          (0, import_chunk_2ESYSVXG.__require)("assert").equal(fs[gracefulQueue].length, 0);
        });
      }
    }
    var queue;
    if (!global[gracefulQueue]) {
      publishQueue(global, fs[gracefulQueue]);
    }
    module2.exports = patch(clone(fs));
    if (process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && !fs.__patched) {
      module2.exports = patch(fs);
      fs.__patched = true;
    }
    function patch(fs2) {
      polyfills(fs2);
      fs2.gracefulify = patch;
      fs2.createReadStream = createReadStream2;
      fs2.createWriteStream = createWriteStream2;
      var fs$readFile = fs2.readFile;
      fs2.readFile = readFile;
      function readFile(path3, options, cb) {
        if (typeof options === "function")
          cb = options, options = null;
        return go$readFile(path3, options, cb);
        function go$readFile(path4, options2, cb2, startTime) {
          return fs$readFile(path4, options2, function(err) {
            if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
              enqueue([go$readFile, [path4, options2, cb2], err, startTime || Date.now(), Date.now()]);
            else {
              if (typeof cb2 === "function")
                cb2.apply(this, arguments);
            }
          });
        }
      }
      var fs$writeFile = fs2.writeFile;
      fs2.writeFile = writeFile;
      function writeFile(path3, data, options, cb) {
        if (typeof options === "function")
          cb = options, options = null;
        return go$writeFile(path3, data, options, cb);
        function go$writeFile(path4, data2, options2, cb2, startTime) {
          return fs$writeFile(path4, data2, options2, function(err) {
            if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
              enqueue([go$writeFile, [path4, data2, options2, cb2], err, startTime || Date.now(), Date.now()]);
            else {
              if (typeof cb2 === "function")
                cb2.apply(this, arguments);
            }
          });
        }
      }
      var fs$appendFile = fs2.appendFile;
      if (fs$appendFile)
        fs2.appendFile = appendFile;
      function appendFile(path3, data, options, cb) {
        if (typeof options === "function")
          cb = options, options = null;
        return go$appendFile(path3, data, options, cb);
        function go$appendFile(path4, data2, options2, cb2, startTime) {
          return fs$appendFile(path4, data2, options2, function(err) {
            if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
              enqueue([go$appendFile, [path4, data2, options2, cb2], err, startTime || Date.now(), Date.now()]);
            else {
              if (typeof cb2 === "function")
                cb2.apply(this, arguments);
            }
          });
        }
      }
      var fs$copyFile = fs2.copyFile;
      if (fs$copyFile)
        fs2.copyFile = copyFile;
      function copyFile(src, dest, flags, cb) {
        if (typeof flags === "function") {
          cb = flags;
          flags = 0;
        }
        return go$copyFile(src, dest, flags, cb);
        function go$copyFile(src2, dest2, flags2, cb2, startTime) {
          return fs$copyFile(src2, dest2, flags2, function(err) {
            if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
              enqueue([go$copyFile, [src2, dest2, flags2, cb2], err, startTime || Date.now(), Date.now()]);
            else {
              if (typeof cb2 === "function")
                cb2.apply(this, arguments);
            }
          });
        }
      }
      var fs$readdir = fs2.readdir;
      fs2.readdir = readdir;
      var noReaddirOptionVersions = /^v[0-5]\./;
      function readdir(path3, options, cb) {
        if (typeof options === "function")
          cb = options, options = null;
        var go$readdir = noReaddirOptionVersions.test(process.version) ? function go$readdir2(path4, options2, cb2, startTime) {
          return fs$readdir(path4, fs$readdirCallback(
            path4,
            options2,
            cb2,
            startTime
          ));
        } : function go$readdir2(path4, options2, cb2, startTime) {
          return fs$readdir(path4, options2, fs$readdirCallback(
            path4,
            options2,
            cb2,
            startTime
          ));
        };
        return go$readdir(path3, options, cb);
        function fs$readdirCallback(path4, options2, cb2, startTime) {
          return function(err, files) {
            if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
              enqueue([
                go$readdir,
                [path4, options2, cb2],
                err,
                startTime || Date.now(),
                Date.now()
              ]);
            else {
              if (files && files.sort)
                files.sort();
              if (typeof cb2 === "function")
                cb2.call(this, err, files);
            }
          };
        }
      }
      if (process.version.substr(0, 4) === "v0.8") {
        var legStreams = legacy(fs2);
        ReadStream = legStreams.ReadStream;
        WriteStream = legStreams.WriteStream;
      }
      var fs$ReadStream = fs2.ReadStream;
      if (fs$ReadStream) {
        ReadStream.prototype = Object.create(fs$ReadStream.prototype);
        ReadStream.prototype.open = ReadStream$open;
      }
      var fs$WriteStream = fs2.WriteStream;
      if (fs$WriteStream) {
        WriteStream.prototype = Object.create(fs$WriteStream.prototype);
        WriteStream.prototype.open = WriteStream$open;
      }
      Object.defineProperty(fs2, "ReadStream", {
        get: function() {
          return ReadStream;
        },
        set: function(val) {
          ReadStream = val;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(fs2, "WriteStream", {
        get: function() {
          return WriteStream;
        },
        set: function(val) {
          WriteStream = val;
        },
        enumerable: true,
        configurable: true
      });
      var FileReadStream = ReadStream;
      Object.defineProperty(fs2, "FileReadStream", {
        get: function() {
          return FileReadStream;
        },
        set: function(val) {
          FileReadStream = val;
        },
        enumerable: true,
        configurable: true
      });
      var FileWriteStream = WriteStream;
      Object.defineProperty(fs2, "FileWriteStream", {
        get: function() {
          return FileWriteStream;
        },
        set: function(val) {
          FileWriteStream = val;
        },
        enumerable: true,
        configurable: true
      });
      function ReadStream(path3, options) {
        if (this instanceof ReadStream)
          return fs$ReadStream.apply(this, arguments), this;
        else
          return ReadStream.apply(Object.create(ReadStream.prototype), arguments);
      }
      function ReadStream$open() {
        var that = this;
        open(that.path, that.flags, that.mode, function(err, fd) {
          if (err) {
            if (that.autoClose)
              that.destroy();
            that.emit("error", err);
          } else {
            that.fd = fd;
            that.emit("open", fd);
            that.read();
          }
        });
      }
      function WriteStream(path3, options) {
        if (this instanceof WriteStream)
          return fs$WriteStream.apply(this, arguments), this;
        else
          return WriteStream.apply(Object.create(WriteStream.prototype), arguments);
      }
      function WriteStream$open() {
        var that = this;
        open(that.path, that.flags, that.mode, function(err, fd) {
          if (err) {
            that.destroy();
            that.emit("error", err);
          } else {
            that.fd = fd;
            that.emit("open", fd);
          }
        });
      }
      function createReadStream2(path3, options) {
        return new fs2.ReadStream(path3, options);
      }
      function createWriteStream2(path3, options) {
        return new fs2.WriteStream(path3, options);
      }
      var fs$open = fs2.open;
      fs2.open = open;
      function open(path3, flags, mode, cb) {
        if (typeof mode === "function")
          cb = mode, mode = null;
        return go$open(path3, flags, mode, cb);
        function go$open(path4, flags2, mode2, cb2, startTime) {
          return fs$open(path4, flags2, mode2, function(err, fd) {
            if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
              enqueue([go$open, [path4, flags2, mode2, cb2], err, startTime || Date.now(), Date.now()]);
            else {
              if (typeof cb2 === "function")
                cb2.apply(this, arguments);
            }
          });
        }
      }
      return fs2;
    }
    function enqueue(elem) {
      debug("ENQUEUE", elem[0].name, elem[1]);
      fs[gracefulQueue].push(elem);
      retry();
    }
    var retryTimer;
    function resetQueue() {
      var now = Date.now();
      for (var i = 0; i < fs[gracefulQueue].length; ++i) {
        if (fs[gracefulQueue][i].length > 2) {
          fs[gracefulQueue][i][3] = now;
          fs[gracefulQueue][i][4] = now;
        }
      }
      retry();
    }
    function retry() {
      clearTimeout(retryTimer);
      retryTimer = void 0;
      if (fs[gracefulQueue].length === 0)
        return;
      var elem = fs[gracefulQueue].shift();
      var fn = elem[0];
      var args = elem[1];
      var err = elem[2];
      var startTime = elem[3];
      var lastTime = elem[4];
      if (startTime === void 0) {
        debug("RETRY", fn.name, args);
        fn.apply(null, args);
      } else if (Date.now() - startTime >= 6e4) {
        debug("TIMEOUT", fn.name, args);
        var cb = args.pop();
        if (typeof cb === "function")
          cb.call(null, err);
      } else {
        var sinceAttempt = Date.now() - lastTime;
        var sinceStart = Math.max(lastTime - startTime, 1);
        var desiredDelay = Math.min(sinceStart * 1.2, 100);
        if (sinceAttempt >= desiredDelay) {
          debug("RETRY", fn.name, args);
          fn.apply(null, args.concat([startTime]));
        } else {
          fs[gracefulQueue].push(elem);
        }
      }
      if (retryTimer === void 0) {
        retryTimer = setTimeout(retry, 0);
      }
    }
  }
});
var require_is_path_cwd = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/is-path-cwd@2.2.0/node_modules/is-path-cwd/index.js"(exports, module2) {
    "use strict";
    var path3 = (0, import_chunk_2ESYSVXG.__require)("path");
    module2.exports = (path_) => {
      let cwd = process.cwd();
      path_ = path3.resolve(path_);
      if (process.platform === "win32") {
        cwd = cwd.toLowerCase();
        path_ = path_.toLowerCase();
      }
      return path_ === cwd;
    };
  }
});
var require_is_path_inside = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/is-path-inside@3.0.3/node_modules/is-path-inside/index.js"(exports, module2) {
    "use strict";
    var path3 = (0, import_chunk_2ESYSVXG.__require)("path");
    module2.exports = (childPath, parentPath) => {
      const relation = path3.relative(parentPath, childPath);
      return Boolean(
        relation && relation !== ".." && !relation.startsWith(`..${path3.sep}`) && relation !== path3.resolve(childPath)
      );
    };
  }
});
var require_old = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/fs.realpath@1.0.0/node_modules/fs.realpath/old.js"(exports) {
    "use strict";
    var pathModule = (0, import_chunk_2ESYSVXG.__require)("path");
    var isWindows = process.platform === "win32";
    var fs = (0, import_chunk_2ESYSVXG.__require)("fs");
    var DEBUG = process.env.NODE_DEBUG && /fs/.test(process.env.NODE_DEBUG);
    function rethrow() {
      var callback;
      if (DEBUG) {
        var backtrace = new Error();
        callback = debugCallback;
      } else
        callback = missingCallback;
      return callback;
      function debugCallback(err) {
        if (err) {
          backtrace.message = err.message;
          err = backtrace;
          missingCallback(err);
        }
      }
      function missingCallback(err) {
        if (err) {
          if (process.throwDeprecation)
            throw err;
          else if (!process.noDeprecation) {
            var msg = "fs: missing callback " + (err.stack || err.message);
            if (process.traceDeprecation)
              console.trace(msg);
            else
              console.error(msg);
          }
        }
      }
    }
    function maybeCallback(cb) {
      return typeof cb === "function" ? cb : rethrow();
    }
    var normalize = pathModule.normalize;
    if (isWindows) {
      nextPartRe = /(.*?)(?:[\/\\]+|$)/g;
    } else {
      nextPartRe = /(.*?)(?:[\/]+|$)/g;
    }
    var nextPartRe;
    if (isWindows) {
      splitRootRe = /^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/][^\\\/]+)?[\\\/]*/;
    } else {
      splitRootRe = /^[\/]*/;
    }
    var splitRootRe;
    exports.realpathSync = function realpathSync(p, cache) {
      p = pathModule.resolve(p);
      if (cache && Object.prototype.hasOwnProperty.call(cache, p)) {
        return cache[p];
      }
      var original = p, seenLinks = {}, knownHard = {};
      var pos;
      var current;
      var base;
      var previous;
      start();
      function start() {
        var m = splitRootRe.exec(p);
        pos = m[0].length;
        current = m[0];
        base = m[0];
        previous = "";
        if (isWindows && !knownHard[base]) {
          fs.lstatSync(base);
          knownHard[base] = true;
        }
      }
      while (pos < p.length) {
        nextPartRe.lastIndex = pos;
        var result = nextPartRe.exec(p);
        previous = current;
        current += result[0];
        base = previous + result[1];
        pos = nextPartRe.lastIndex;
        if (knownHard[base] || cache && cache[base] === base) {
          continue;
        }
        var resolvedLink;
        if (cache && Object.prototype.hasOwnProperty.call(cache, base)) {
          resolvedLink = cache[base];
        } else {
          var stat = fs.lstatSync(base);
          if (!stat.isSymbolicLink()) {
            knownHard[base] = true;
            if (cache) cache[base] = base;
            continue;
          }
          var linkTarget = null;
          if (!isWindows) {
            var id = stat.dev.toString(32) + ":" + stat.ino.toString(32);
            if (seenLinks.hasOwnProperty(id)) {
              linkTarget = seenLinks[id];
            }
          }
          if (linkTarget === null) {
            fs.statSync(base);
            linkTarget = fs.readlinkSync(base);
          }
          resolvedLink = pathModule.resolve(previous, linkTarget);
          if (cache) cache[base] = resolvedLink;
          if (!isWindows) seenLinks[id] = linkTarget;
        }
        p = pathModule.resolve(resolvedLink, p.slice(pos));
        start();
      }
      if (cache) cache[original] = p;
      return p;
    };
    exports.realpath = function realpath(p, cache, cb) {
      if (typeof cb !== "function") {
        cb = maybeCallback(cache);
        cache = null;
      }
      p = pathModule.resolve(p);
      if (cache && Object.prototype.hasOwnProperty.call(cache, p)) {
        return process.nextTick(cb.bind(null, null, cache[p]));
      }
      var original = p, seenLinks = {}, knownHard = {};
      var pos;
      var current;
      var base;
      var previous;
      start();
      function start() {
        var m = splitRootRe.exec(p);
        pos = m[0].length;
        current = m[0];
        base = m[0];
        previous = "";
        if (isWindows && !knownHard[base]) {
          fs.lstat(base, function(err) {
            if (err) return cb(err);
            knownHard[base] = true;
            LOOP();
          });
        } else {
          process.nextTick(LOOP);
        }
      }
      function LOOP() {
        if (pos >= p.length) {
          if (cache) cache[original] = p;
          return cb(null, p);
        }
        nextPartRe.lastIndex = pos;
        var result = nextPartRe.exec(p);
        previous = current;
        current += result[0];
        base = previous + result[1];
        pos = nextPartRe.lastIndex;
        if (knownHard[base] || cache && cache[base] === base) {
          return process.nextTick(LOOP);
        }
        if (cache && Object.prototype.hasOwnProperty.call(cache, base)) {
          return gotResolvedLink(cache[base]);
        }
        return fs.lstat(base, gotStat);
      }
      function gotStat(err, stat) {
        if (err) return cb(err);
        if (!stat.isSymbolicLink()) {
          knownHard[base] = true;
          if (cache) cache[base] = base;
          return process.nextTick(LOOP);
        }
        if (!isWindows) {
          var id = stat.dev.toString(32) + ":" + stat.ino.toString(32);
          if (seenLinks.hasOwnProperty(id)) {
            return gotTarget(null, seenLinks[id], base);
          }
        }
        fs.stat(base, function(err2) {
          if (err2) return cb(err2);
          fs.readlink(base, function(err3, target) {
            if (!isWindows) seenLinks[id] = target;
            gotTarget(err3, target);
          });
        });
      }
      function gotTarget(err, target, base2) {
        if (err) return cb(err);
        var resolvedLink = pathModule.resolve(previous, target);
        if (cache) cache[base2] = resolvedLink;
        gotResolvedLink(resolvedLink);
      }
      function gotResolvedLink(resolvedLink) {
        p = pathModule.resolve(resolvedLink, p.slice(pos));
        start();
      }
    };
  }
});
var require_fs6 = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/fs.realpath@1.0.0/node_modules/fs.realpath/index.js"(exports, module2) {
    "use strict";
    module2.exports = realpath;
    realpath.realpath = realpath;
    realpath.sync = realpathSync;
    realpath.realpathSync = realpathSync;
    realpath.monkeypatch = monkeypatch;
    realpath.unmonkeypatch = unmonkeypatch;
    var fs = (0, import_chunk_2ESYSVXG.__require)("fs");
    var origRealpath = fs.realpath;
    var origRealpathSync = fs.realpathSync;
    var version = process.version;
    var ok = /^v[0-5]\./.test(version);
    var old = require_old();
    function newError(er) {
      return er && er.syscall === "realpath" && (er.code === "ELOOP" || er.code === "ENOMEM" || er.code === "ENAMETOOLONG");
    }
    function realpath(p, cache, cb) {
      if (ok) {
        return origRealpath(p, cache, cb);
      }
      if (typeof cache === "function") {
        cb = cache;
        cache = null;
      }
      origRealpath(p, cache, function(er, result) {
        if (newError(er)) {
          old.realpath(p, cache, cb);
        } else {
          cb(er, result);
        }
      });
    }
    function realpathSync(p, cache) {
      if (ok) {
        return origRealpathSync(p, cache);
      }
      try {
        return origRealpathSync(p, cache);
      } catch (er) {
        if (newError(er)) {
          return old.realpathSync(p, cache);
        } else {
          throw er;
        }
      }
    }
    function monkeypatch() {
      fs.realpath = realpath;
      fs.realpathSync = realpathSync;
    }
    function unmonkeypatch() {
      fs.realpath = origRealpath;
      fs.realpathSync = origRealpathSync;
    }
  }
});
var require_concat_map = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/concat-map@0.0.1/node_modules/concat-map/index.js"(exports, module2) {
    "use strict";
    module2.exports = function(xs, fn) {
      var res = [];
      for (var i = 0; i < xs.length; i++) {
        var x = fn(xs[i], i);
        if (isArray(x)) res.push.apply(res, x);
        else res.push(x);
      }
      return res;
    };
    var isArray = Array.isArray || function(xs) {
      return Object.prototype.toString.call(xs) === "[object Array]";
    };
  }
});
var require_brace_expansion2 = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/brace-expansion@1.1.11/node_modules/brace-expansion/index.js"(exports, module2) {
    "use strict";
    var concatMap = require_concat_map();
    var balanced = require_balanced_match();
    module2.exports = expandTop;
    var escSlash = "\0SLASH" + Math.random() + "\0";
    var escOpen = "\0OPEN" + Math.random() + "\0";
    var escClose = "\0CLOSE" + Math.random() + "\0";
    var escComma = "\0COMMA" + Math.random() + "\0";
    var escPeriod = "\0PERIOD" + Math.random() + "\0";
    function numeric(str) {
      return parseInt(str, 10) == str ? parseInt(str, 10) : str.charCodeAt(0);
    }
    function escapeBraces(str) {
      return str.split("\\\\").join(escSlash).split("\\{").join(escOpen).split("\\}").join(escClose).split("\\,").join(escComma).split("\\.").join(escPeriod);
    }
    function unescapeBraces(str) {
      return str.split(escSlash).join("\\").split(escOpen).join("{").split(escClose).join("}").split(escComma).join(",").split(escPeriod).join(".");
    }
    function parseCommaParts(str) {
      if (!str)
        return [""];
      var parts = [];
      var m = balanced("{", "}", str);
      if (!m)
        return str.split(",");
      var pre = m.pre;
      var body = m.body;
      var post = m.post;
      var p = pre.split(",");
      p[p.length - 1] += "{" + body + "}";
      var postParts = parseCommaParts(post);
      if (post.length) {
        p[p.length - 1] += postParts.shift();
        p.push.apply(p, postParts);
      }
      parts.push.apply(parts, p);
      return parts;
    }
    function expandTop(str) {
      if (!str)
        return [];
      if (str.substr(0, 2) === "{}") {
        str = "\\{\\}" + str.substr(2);
      }
      return expand(escapeBraces(str), true).map(unescapeBraces);
    }
    function embrace(str) {
      return "{" + str + "}";
    }
    function isPadded(el) {
      return /^-?0\d/.test(el);
    }
    function lte(i, y) {
      return i <= y;
    }
    function gte(i, y) {
      return i >= y;
    }
    function expand(str, isTop) {
      var expansions = [];
      var m = balanced("{", "}", str);
      if (!m || /\$$/.test(m.pre)) return [str];
      var isNumericSequence = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(m.body);
      var isAlphaSequence = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(m.body);
      var isSequence = isNumericSequence || isAlphaSequence;
      var isOptions = m.body.indexOf(",") >= 0;
      if (!isSequence && !isOptions) {
        if (m.post.match(/,.*\}/)) {
          str = m.pre + "{" + m.body + escClose + m.post;
          return expand(str);
        }
        return [str];
      }
      var n;
      if (isSequence) {
        n = m.body.split(/\.\./);
      } else {
        n = parseCommaParts(m.body);
        if (n.length === 1) {
          n = expand(n[0], false).map(embrace);
          if (n.length === 1) {
            var post = m.post.length ? expand(m.post, false) : [""];
            return post.map(function(p) {
              return m.pre + n[0] + p;
            });
          }
        }
      }
      var pre = m.pre;
      var post = m.post.length ? expand(m.post, false) : [""];
      var N;
      if (isSequence) {
        var x = numeric(n[0]);
        var y = numeric(n[1]);
        var width = Math.max(n[0].length, n[1].length);
        var incr = n.length == 3 ? Math.abs(numeric(n[2])) : 1;
        var test = lte;
        var reverse = y < x;
        if (reverse) {
          incr *= -1;
          test = gte;
        }
        var pad = n.some(isPadded);
        N = [];
        for (var i = x; test(i, y); i += incr) {
          var c;
          if (isAlphaSequence) {
            c = String.fromCharCode(i);
            if (c === "\\")
              c = "";
          } else {
            c = String(i);
            if (pad) {
              var need = width - c.length;
              if (need > 0) {
                var z = new Array(need + 1).join("0");
                if (i < 0)
                  c = "-" + z + c.slice(1);
                else
                  c = z + c;
              }
            }
          }
          N.push(c);
        }
      } else {
        N = concatMap(n, function(el) {
          return expand(el, false);
        });
      }
      for (var j = 0; j < N.length; j++) {
        for (var k = 0; k < post.length; k++) {
          var expansion = pre + N[j] + post[k];
          if (!isTop || isSequence || expansion)
            expansions.push(expansion);
        }
      }
      return expansions;
    }
  }
});
var require_minimatch2 = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/minimatch@3.1.2/node_modules/minimatch/minimatch.js"(exports, module2) {
    "use strict";
    module2.exports = minimatch;
    minimatch.Minimatch = Minimatch;
    var path3 = function() {
      try {
        return (0, import_chunk_2ESYSVXG.__require)("path");
      } catch (e) {
      }
    }() || {
      sep: "/"
    };
    minimatch.sep = path3.sep;
    var GLOBSTAR = minimatch.GLOBSTAR = Minimatch.GLOBSTAR = {};
    var expand = require_brace_expansion2();
    var plTypes = {
      "!": { open: "(?:(?!(?:", close: "))[^/]*?)" },
      "?": { open: "(?:", close: ")?" },
      "+": { open: "(?:", close: ")+" },
      "*": { open: "(?:", close: ")*" },
      "@": { open: "(?:", close: ")" }
    };
    var qmark = "[^/]";
    var star = qmark + "*?";
    var twoStarDot = "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?";
    var twoStarNoDot = "(?:(?!(?:\\/|^)\\.).)*?";
    var reSpecials = charSet("().*{}+?[]^$\\!");
    function charSet(s) {
      return s.split("").reduce(function(set, c) {
        set[c] = true;
        return set;
      }, {});
    }
    var slashSplit = /\/+/;
    minimatch.filter = filter;
    function filter(pattern, options) {
      options = options || {};
      return function(p, i, list) {
        return minimatch(p, pattern, options);
      };
    }
    function ext(a, b) {
      b = b || {};
      var t = {};
      Object.keys(a).forEach(function(k) {
        t[k] = a[k];
      });
      Object.keys(b).forEach(function(k) {
        t[k] = b[k];
      });
      return t;
    }
    minimatch.defaults = function(def) {
      if (!def || typeof def !== "object" || !Object.keys(def).length) {
        return minimatch;
      }
      var orig = minimatch;
      var m = function minimatch2(p, pattern, options) {
        return orig(p, pattern, ext(def, options));
      };
      m.Minimatch = function Minimatch2(pattern, options) {
        return new orig.Minimatch(pattern, ext(def, options));
      };
      m.Minimatch.defaults = function defaults(options) {
        return orig.defaults(ext(def, options)).Minimatch;
      };
      m.filter = function filter2(pattern, options) {
        return orig.filter(pattern, ext(def, options));
      };
      m.defaults = function defaults(options) {
        return orig.defaults(ext(def, options));
      };
      m.makeRe = function makeRe2(pattern, options) {
        return orig.makeRe(pattern, ext(def, options));
      };
      m.braceExpand = function braceExpand2(pattern, options) {
        return orig.braceExpand(pattern, ext(def, options));
      };
      m.match = function(list, pattern, options) {
        return orig.match(list, pattern, ext(def, options));
      };
      return m;
    };
    Minimatch.defaults = function(def) {
      return minimatch.defaults(def).Minimatch;
    };
    function minimatch(p, pattern, options) {
      assertValidPattern(pattern);
      if (!options) options = {};
      if (!options.nocomment && pattern.charAt(0) === "#") {
        return false;
      }
      return new Minimatch(pattern, options).match(p);
    }
    function Minimatch(pattern, options) {
      if (!(this instanceof Minimatch)) {
        return new Minimatch(pattern, options);
      }
      assertValidPattern(pattern);
      if (!options) options = {};
      pattern = pattern.trim();
      if (!options.allowWindowsEscape && path3.sep !== "/") {
        pattern = pattern.split(path3.sep).join("/");
      }
      this.options = options;
      this.set = [];
      this.pattern = pattern;
      this.regexp = null;
      this.negate = false;
      this.comment = false;
      this.empty = false;
      this.partial = !!options.partial;
      this.make();
    }
    Minimatch.prototype.debug = function() {
    };
    Minimatch.prototype.make = make;
    function make() {
      var pattern = this.pattern;
      var options = this.options;
      if (!options.nocomment && pattern.charAt(0) === "#") {
        this.comment = true;
        return;
      }
      if (!pattern) {
        this.empty = true;
        return;
      }
      this.parseNegate();
      var set = this.globSet = this.braceExpand();
      if (options.debug) this.debug = function debug() {
        console.error.apply(console, arguments);
      };
      this.debug(this.pattern, set);
      set = this.globParts = set.map(function(s) {
        return s.split(slashSplit);
      });
      this.debug(this.pattern, set);
      set = set.map(function(s, si, set2) {
        return s.map(this.parse, this);
      }, this);
      this.debug(this.pattern, set);
      set = set.filter(function(s) {
        return s.indexOf(false) === -1;
      });
      this.debug(this.pattern, set);
      this.set = set;
    }
    Minimatch.prototype.parseNegate = parseNegate;
    function parseNegate() {
      var pattern = this.pattern;
      var negate = false;
      var options = this.options;
      var negateOffset = 0;
      if (options.nonegate) return;
      for (var i = 0, l = pattern.length; i < l && pattern.charAt(i) === "!"; i++) {
        negate = !negate;
        negateOffset++;
      }
      if (negateOffset) this.pattern = pattern.substr(negateOffset);
      this.negate = negate;
    }
    minimatch.braceExpand = function(pattern, options) {
      return braceExpand(pattern, options);
    };
    Minimatch.prototype.braceExpand = braceExpand;
    function braceExpand(pattern, options) {
      if (!options) {
        if (this instanceof Minimatch) {
          options = this.options;
        } else {
          options = {};
        }
      }
      pattern = typeof pattern === "undefined" ? this.pattern : pattern;
      assertValidPattern(pattern);
      if (options.nobrace || !/\{(?:(?!\{).)*\}/.test(pattern)) {
        return [pattern];
      }
      return expand(pattern);
    }
    var MAX_PATTERN_LENGTH = 1024 * 64;
    var assertValidPattern = function(pattern) {
      if (typeof pattern !== "string") {
        throw new TypeError("invalid pattern");
      }
      if (pattern.length > MAX_PATTERN_LENGTH) {
        throw new TypeError("pattern is too long");
      }
    };
    Minimatch.prototype.parse = parse;
    var SUBPARSE = {};
    function parse(pattern, isSub) {
      assertValidPattern(pattern);
      var options = this.options;
      if (pattern === "**") {
        if (!options.noglobstar)
          return GLOBSTAR;
        else
          pattern = "*";
      }
      if (pattern === "") return "";
      var re = "";
      var hasMagic = !!options.nocase;
      var escaping = false;
      var patternListStack = [];
      var negativeLists = [];
      var stateChar;
      var inClass = false;
      var reClassStart = -1;
      var classStart = -1;
      var patternStart = pattern.charAt(0) === "." ? "" : options.dot ? "(?!(?:^|\\/)\\.{1,2}(?:$|\\/))" : "(?!\\.)";
      var self = this;
      function clearStateChar() {
        if (stateChar) {
          switch (stateChar) {
            case "*":
              re += star;
              hasMagic = true;
              break;
            case "?":
              re += qmark;
              hasMagic = true;
              break;
            default:
              re += "\\" + stateChar;
              break;
          }
          self.debug("clearStateChar %j %j", stateChar, re);
          stateChar = false;
        }
      }
      for (var i = 0, len = pattern.length, c; i < len && (c = pattern.charAt(i)); i++) {
        this.debug("%s	%s %s %j", pattern, i, re, c);
        if (escaping && reSpecials[c]) {
          re += "\\" + c;
          escaping = false;
          continue;
        }
        switch (c) {
          /* istanbul ignore next */
          case "/": {
            return false;
          }
          case "\\":
            clearStateChar();
            escaping = true;
            continue;
          // the various stateChar values
          // for the "extglob" stuff.
          case "?":
          case "*":
          case "+":
          case "@":
          case "!":
            this.debug("%s	%s %s %j <-- stateChar", pattern, i, re, c);
            if (inClass) {
              this.debug("  in class");
              if (c === "!" && i === classStart + 1) c = "^";
              re += c;
              continue;
            }
            self.debug("call clearStateChar %j", stateChar);
            clearStateChar();
            stateChar = c;
            if (options.noext) clearStateChar();
            continue;
          case "(":
            if (inClass) {
              re += "(";
              continue;
            }
            if (!stateChar) {
              re += "\\(";
              continue;
            }
            patternListStack.push({
              type: stateChar,
              start: i - 1,
              reStart: re.length,
              open: plTypes[stateChar].open,
              close: plTypes[stateChar].close
            });
            re += stateChar === "!" ? "(?:(?!(?:" : "(?:";
            this.debug("plType %j %j", stateChar, re);
            stateChar = false;
            continue;
          case ")":
            if (inClass || !patternListStack.length) {
              re += "\\)";
              continue;
            }
            clearStateChar();
            hasMagic = true;
            var pl = patternListStack.pop();
            re += pl.close;
            if (pl.type === "!") {
              negativeLists.push(pl);
            }
            pl.reEnd = re.length;
            continue;
          case "|":
            if (inClass || !patternListStack.length || escaping) {
              re += "\\|";
              escaping = false;
              continue;
            }
            clearStateChar();
            re += "|";
            continue;
          // these are mostly the same in regexp and glob
          case "[":
            clearStateChar();
            if (inClass) {
              re += "\\" + c;
              continue;
            }
            inClass = true;
            classStart = i;
            reClassStart = re.length;
            re += c;
            continue;
          case "]":
            if (i === classStart + 1 || !inClass) {
              re += "\\" + c;
              escaping = false;
              continue;
            }
            var cs = pattern.substring(classStart + 1, i);
            try {
              RegExp("[" + cs + "]");
            } catch (er) {
              var sp = this.parse(cs, SUBPARSE);
              re = re.substr(0, reClassStart) + "\\[" + sp[0] + "\\]";
              hasMagic = hasMagic || sp[1];
              inClass = false;
              continue;
            }
            hasMagic = true;
            inClass = false;
            re += c;
            continue;
          default:
            clearStateChar();
            if (escaping) {
              escaping = false;
            } else if (reSpecials[c] && !(c === "^" && inClass)) {
              re += "\\";
            }
            re += c;
        }
      }
      if (inClass) {
        cs = pattern.substr(classStart + 1);
        sp = this.parse(cs, SUBPARSE);
        re = re.substr(0, reClassStart) + "\\[" + sp[0];
        hasMagic = hasMagic || sp[1];
      }
      for (pl = patternListStack.pop(); pl; pl = patternListStack.pop()) {
        var tail = re.slice(pl.reStart + pl.open.length);
        this.debug("setting tail", re, pl);
        tail = tail.replace(/((?:\\{2}){0,64})(\\?)\|/g, function(_, $1, $2) {
          if (!$2) {
            $2 = "\\";
          }
          return $1 + $1 + $2 + "|";
        });
        this.debug("tail=%j\n   %s", tail, tail, pl, re);
        var t = pl.type === "*" ? star : pl.type === "?" ? qmark : "\\" + pl.type;
        hasMagic = true;
        re = re.slice(0, pl.reStart) + t + "\\(" + tail;
      }
      clearStateChar();
      if (escaping) {
        re += "\\\\";
      }
      var addPatternStart = false;
      switch (re.charAt(0)) {
        case "[":
        case ".":
        case "(":
          addPatternStart = true;
      }
      for (var n = negativeLists.length - 1; n > -1; n--) {
        var nl = negativeLists[n];
        var nlBefore = re.slice(0, nl.reStart);
        var nlFirst = re.slice(nl.reStart, nl.reEnd - 8);
        var nlLast = re.slice(nl.reEnd - 8, nl.reEnd);
        var nlAfter = re.slice(nl.reEnd);
        nlLast += nlAfter;
        var openParensBefore = nlBefore.split("(").length - 1;
        var cleanAfter = nlAfter;
        for (i = 0; i < openParensBefore; i++) {
          cleanAfter = cleanAfter.replace(/\)[+*?]?/, "");
        }
        nlAfter = cleanAfter;
        var dollar = "";
        if (nlAfter === "" && isSub !== SUBPARSE) {
          dollar = "$";
        }
        var newRe = nlBefore + nlFirst + nlAfter + dollar + nlLast;
        re = newRe;
      }
      if (re !== "" && hasMagic) {
        re = "(?=.)" + re;
      }
      if (addPatternStart) {
        re = patternStart + re;
      }
      if (isSub === SUBPARSE) {
        return [re, hasMagic];
      }
      if (!hasMagic) {
        return globUnescape(pattern);
      }
      var flags = options.nocase ? "i" : "";
      try {
        var regExp = new RegExp("^" + re + "$", flags);
      } catch (er) {
        return new RegExp("$.");
      }
      regExp._glob = pattern;
      regExp._src = re;
      return regExp;
    }
    minimatch.makeRe = function(pattern, options) {
      return new Minimatch(pattern, options || {}).makeRe();
    };
    Minimatch.prototype.makeRe = makeRe;
    function makeRe() {
      if (this.regexp || this.regexp === false) return this.regexp;
      var set = this.set;
      if (!set.length) {
        this.regexp = false;
        return this.regexp;
      }
      var options = this.options;
      var twoStar = options.noglobstar ? star : options.dot ? twoStarDot : twoStarNoDot;
      var flags = options.nocase ? "i" : "";
      var re = set.map(function(pattern) {
        return pattern.map(function(p) {
          return p === GLOBSTAR ? twoStar : typeof p === "string" ? regExpEscape(p) : p._src;
        }).join("\\/");
      }).join("|");
      re = "^(?:" + re + ")$";
      if (this.negate) re = "^(?!" + re + ").*$";
      try {
        this.regexp = new RegExp(re, flags);
      } catch (ex) {
        this.regexp = false;
      }
      return this.regexp;
    }
    minimatch.match = function(list, pattern, options) {
      options = options || {};
      var mm = new Minimatch(pattern, options);
      list = list.filter(function(f) {
        return mm.match(f);
      });
      if (mm.options.nonull && !list.length) {
        list.push(pattern);
      }
      return list;
    };
    Minimatch.prototype.match = function match(f, partial) {
      if (typeof partial === "undefined") partial = this.partial;
      this.debug("match", f, this.pattern);
      if (this.comment) return false;
      if (this.empty) return f === "";
      if (f === "/" && partial) return true;
      var options = this.options;
      if (path3.sep !== "/") {
        f = f.split(path3.sep).join("/");
      }
      f = f.split(slashSplit);
      this.debug(this.pattern, "split", f);
      var set = this.set;
      this.debug(this.pattern, "set", set);
      var filename;
      var i;
      for (i = f.length - 1; i >= 0; i--) {
        filename = f[i];
        if (filename) break;
      }
      for (i = 0; i < set.length; i++) {
        var pattern = set[i];
        var file = f;
        if (options.matchBase && pattern.length === 1) {
          file = [filename];
        }
        var hit = this.matchOne(file, pattern, partial);
        if (hit) {
          if (options.flipNegate) return true;
          return !this.negate;
        }
      }
      if (options.flipNegate) return false;
      return this.negate;
    };
    Minimatch.prototype.matchOne = function(file, pattern, partial) {
      var options = this.options;
      this.debug(
        "matchOne",
        { "this": this, file, pattern }
      );
      this.debug("matchOne", file.length, pattern.length);
      for (var fi = 0, pi = 0, fl = file.length, pl = pattern.length; fi < fl && pi < pl; fi++, pi++) {
        this.debug("matchOne loop");
        var p = pattern[pi];
        var f = file[fi];
        this.debug(pattern, p, f);
        if (p === false) return false;
        if (p === GLOBSTAR) {
          this.debug("GLOBSTAR", [pattern, p, f]);
          var fr = fi;
          var pr = pi + 1;
          if (pr === pl) {
            this.debug("** at the end");
            for (; fi < fl; fi++) {
              if (file[fi] === "." || file[fi] === ".." || !options.dot && file[fi].charAt(0) === ".") return false;
            }
            return true;
          }
          while (fr < fl) {
            var swallowee = file[fr];
            this.debug("\nglobstar while", file, fr, pattern, pr, swallowee);
            if (this.matchOne(file.slice(fr), pattern.slice(pr), partial)) {
              this.debug("globstar found match!", fr, fl, swallowee);
              return true;
            } else {
              if (swallowee === "." || swallowee === ".." || !options.dot && swallowee.charAt(0) === ".") {
                this.debug("dot detected!", file, fr, pattern, pr);
                break;
              }
              this.debug("globstar swallow a segment, and continue");
              fr++;
            }
          }
          if (partial) {
            this.debug("\n>>> no match, partial?", file, fr, pattern, pr);
            if (fr === fl) return true;
          }
          return false;
        }
        var hit;
        if (typeof p === "string") {
          hit = f === p;
          this.debug("string match", p, f, hit);
        } else {
          hit = f.match(p);
          this.debug("pattern match", p, f, hit);
        }
        if (!hit) return false;
      }
      if (fi === fl && pi === pl) {
        return true;
      } else if (fi === fl) {
        return partial;
      } else if (pi === pl) {
        return fi === fl - 1 && file[fi] === "";
      }
      throw new Error("wtf?");
    };
    function globUnescape(s) {
      return s.replace(/\\(.)/g, "$1");
    }
    function regExpEscape(s) {
      return s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    }
  }
});
var require_inherits_browser = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/inherits@2.0.4/node_modules/inherits/inherits_browser.js"(exports, module2) {
    "use strict";
    if (typeof Object.create === "function") {
      module2.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
              value: ctor,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
        }
      };
    } else {
      module2.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          var TempCtor = function() {
          };
          TempCtor.prototype = superCtor.prototype;
          ctor.prototype = new TempCtor();
          ctor.prototype.constructor = ctor;
        }
      };
    }
  }
});
var require_inherits = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/inherits@2.0.4/node_modules/inherits/inherits.js"(exports, module2) {
    "use strict";
    try {
      util = (0, import_chunk_2ESYSVXG.__require)("util");
      if (typeof util.inherits !== "function") throw "";
      module2.exports = util.inherits;
    } catch (e) {
      module2.exports = require_inherits_browser();
    }
    var util;
  }
});
var require_path_is_absolute = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/path-is-absolute@1.0.1/node_modules/path-is-absolute/index.js"(exports, module2) {
    "use strict";
    function posix(path3) {
      return path3.charAt(0) === "/";
    }
    function win32(path3) {
      var splitDeviceRe = /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/;
      var result = splitDeviceRe.exec(path3);
      var device = result[1] || "";
      var isUnc = Boolean(device && device.charAt(1) !== ":");
      return Boolean(result[2] || isUnc);
    }
    module2.exports = process.platform === "win32" ? win32 : posix;
    module2.exports.posix = posix;
    module2.exports.win32 = win32;
  }
});
var require_common3 = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/glob@7.2.3/node_modules/glob/common.js"(exports) {
    "use strict";
    exports.setopts = setopts;
    exports.ownProp = ownProp;
    exports.makeAbs = makeAbs;
    exports.finish = finish;
    exports.mark = mark;
    exports.isIgnored = isIgnored;
    exports.childrenIgnored = childrenIgnored;
    function ownProp(obj, field) {
      return Object.prototype.hasOwnProperty.call(obj, field);
    }
    var fs = (0, import_chunk_2ESYSVXG.__require)("fs");
    var path3 = (0, import_chunk_2ESYSVXG.__require)("path");
    var minimatch = require_minimatch2();
    var isAbsolute = require_path_is_absolute();
    var Minimatch = minimatch.Minimatch;
    function alphasort(a, b) {
      return a.localeCompare(b, "en");
    }
    function setupIgnores(self, options) {
      self.ignore = options.ignore || [];
      if (!Array.isArray(self.ignore))
        self.ignore = [self.ignore];
      if (self.ignore.length) {
        self.ignore = self.ignore.map(ignoreMap);
      }
    }
    function ignoreMap(pattern) {
      var gmatcher = null;
      if (pattern.slice(-3) === "/**") {
        var gpattern = pattern.replace(/(\/\*\*)+$/, "");
        gmatcher = new Minimatch(gpattern, { dot: true });
      }
      return {
        matcher: new Minimatch(pattern, { dot: true }),
        gmatcher
      };
    }
    function setopts(self, pattern, options) {
      if (!options)
        options = {};
      if (options.matchBase && -1 === pattern.indexOf("/")) {
        if (options.noglobstar) {
          throw new Error("base matching requires globstar");
        }
        pattern = "**/" + pattern;
      }
      self.silent = !!options.silent;
      self.pattern = pattern;
      self.strict = options.strict !== false;
      self.realpath = !!options.realpath;
      self.realpathCache = options.realpathCache || /* @__PURE__ */ Object.create(null);
      self.follow = !!options.follow;
      self.dot = !!options.dot;
      self.mark = !!options.mark;
      self.nodir = !!options.nodir;
      if (self.nodir)
        self.mark = true;
      self.sync = !!options.sync;
      self.nounique = !!options.nounique;
      self.nonull = !!options.nonull;
      self.nosort = !!options.nosort;
      self.nocase = !!options.nocase;
      self.stat = !!options.stat;
      self.noprocess = !!options.noprocess;
      self.absolute = !!options.absolute;
      self.fs = options.fs || fs;
      self.maxLength = options.maxLength || Infinity;
      self.cache = options.cache || /* @__PURE__ */ Object.create(null);
      self.statCache = options.statCache || /* @__PURE__ */ Object.create(null);
      self.symlinks = options.symlinks || /* @__PURE__ */ Object.create(null);
      setupIgnores(self, options);
      self.changedCwd = false;
      var cwd = process.cwd();
      if (!ownProp(options, "cwd"))
        self.cwd = cwd;
      else {
        self.cwd = path3.resolve(options.cwd);
        self.changedCwd = self.cwd !== cwd;
      }
      self.root = options.root || path3.resolve(self.cwd, "/");
      self.root = path3.resolve(self.root);
      if (process.platform === "win32")
        self.root = self.root.replace(/\\/g, "/");
      self.cwdAbs = isAbsolute(self.cwd) ? self.cwd : makeAbs(self, self.cwd);
      if (process.platform === "win32")
        self.cwdAbs = self.cwdAbs.replace(/\\/g, "/");
      self.nomount = !!options.nomount;
      options.nonegate = true;
      options.nocomment = true;
      options.allowWindowsEscape = false;
      self.minimatch = new Minimatch(pattern, options);
      self.options = self.minimatch.options;
    }
    function finish(self) {
      var nou = self.nounique;
      var all = nou ? [] : /* @__PURE__ */ Object.create(null);
      for (var i = 0, l = self.matches.length; i < l; i++) {
        var matches = self.matches[i];
        if (!matches || Object.keys(matches).length === 0) {
          if (self.nonull) {
            var literal = self.minimatch.globSet[i];
            if (nou)
              all.push(literal);
            else
              all[literal] = true;
          }
        } else {
          var m = Object.keys(matches);
          if (nou)
            all.push.apply(all, m);
          else
            m.forEach(function(m2) {
              all[m2] = true;
            });
        }
      }
      if (!nou)
        all = Object.keys(all);
      if (!self.nosort)
        all = all.sort(alphasort);
      if (self.mark) {
        for (var i = 0; i < all.length; i++) {
          all[i] = self._mark(all[i]);
        }
        if (self.nodir) {
          all = all.filter(function(e) {
            var notDir = !/\/$/.test(e);
            var c = self.cache[e] || self.cache[makeAbs(self, e)];
            if (notDir && c)
              notDir = c !== "DIR" && !Array.isArray(c);
            return notDir;
          });
        }
      }
      if (self.ignore.length)
        all = all.filter(function(m2) {
          return !isIgnored(self, m2);
        });
      self.found = all;
    }
    function mark(self, p) {
      var abs = makeAbs(self, p);
      var c = self.cache[abs];
      var m = p;
      if (c) {
        var isDir = c === "DIR" || Array.isArray(c);
        var slash = p.slice(-1) === "/";
        if (isDir && !slash)
          m += "/";
        else if (!isDir && slash)
          m = m.slice(0, -1);
        if (m !== p) {
          var mabs = makeAbs(self, m);
          self.statCache[mabs] = self.statCache[abs];
          self.cache[mabs] = self.cache[abs];
        }
      }
      return m;
    }
    function makeAbs(self, f) {
      var abs = f;
      if (f.charAt(0) === "/") {
        abs = path3.join(self.root, f);
      } else if (isAbsolute(f) || f === "") {
        abs = f;
      } else if (self.changedCwd) {
        abs = path3.resolve(self.cwd, f);
      } else {
        abs = path3.resolve(f);
      }
      if (process.platform === "win32")
        abs = abs.replace(/\\/g, "/");
      return abs;
    }
    function isIgnored(self, path4) {
      if (!self.ignore.length)
        return false;
      return self.ignore.some(function(item) {
        return item.matcher.match(path4) || !!(item.gmatcher && item.gmatcher.match(path4));
      });
    }
    function childrenIgnored(self, path4) {
      if (!self.ignore.length)
        return false;
      return self.ignore.some(function(item) {
        return !!(item.gmatcher && item.gmatcher.match(path4));
      });
    }
  }
});
var require_sync7 = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/glob@7.2.3/node_modules/glob/sync.js"(exports, module2) {
    "use strict";
    module2.exports = globSync;
    globSync.GlobSync = GlobSync;
    var rp = require_fs6();
    var minimatch = require_minimatch2();
    var Minimatch = minimatch.Minimatch;
    var Glob = require_glob().Glob;
    var util = (0, import_chunk_2ESYSVXG.__require)("util");
    var path3 = (0, import_chunk_2ESYSVXG.__require)("path");
    var assert = (0, import_chunk_2ESYSVXG.__require)("assert");
    var isAbsolute = require_path_is_absolute();
    var common = require_common3();
    var setopts = common.setopts;
    var ownProp = common.ownProp;
    var childrenIgnored = common.childrenIgnored;
    var isIgnored = common.isIgnored;
    function globSync(pattern, options) {
      if (typeof options === "function" || arguments.length === 3)
        throw new TypeError("callback provided to sync glob\nSee: https://github.com/isaacs/node-glob/issues/167");
      return new GlobSync(pattern, options).found;
    }
    function GlobSync(pattern, options) {
      if (!pattern)
        throw new Error("must provide pattern");
      if (typeof options === "function" || arguments.length === 3)
        throw new TypeError("callback provided to sync glob\nSee: https://github.com/isaacs/node-glob/issues/167");
      if (!(this instanceof GlobSync))
        return new GlobSync(pattern, options);
      setopts(this, pattern, options);
      if (this.noprocess)
        return this;
      var n = this.minimatch.set.length;
      this.matches = new Array(n);
      for (var i = 0; i < n; i++) {
        this._process(this.minimatch.set[i], i, false);
      }
      this._finish();
    }
    GlobSync.prototype._finish = function() {
      assert.ok(this instanceof GlobSync);
      if (this.realpath) {
        var self = this;
        this.matches.forEach(function(matchset, index) {
          var set = self.matches[index] = /* @__PURE__ */ Object.create(null);
          for (var p in matchset) {
            try {
              p = self._makeAbs(p);
              var real = rp.realpathSync(p, self.realpathCache);
              set[real] = true;
            } catch (er) {
              if (er.syscall === "stat")
                set[self._makeAbs(p)] = true;
              else
                throw er;
            }
          }
        });
      }
      common.finish(this);
    };
    GlobSync.prototype._process = function(pattern, index, inGlobStar) {
      assert.ok(this instanceof GlobSync);
      var n = 0;
      while (typeof pattern[n] === "string") {
        n++;
      }
      var prefix;
      switch (n) {
        // if not, then this is rather simple
        case pattern.length:
          this._processSimple(pattern.join("/"), index);
          return;
        case 0:
          prefix = null;
          break;
        default:
          prefix = pattern.slice(0, n).join("/");
          break;
      }
      var remain = pattern.slice(n);
      var read;
      if (prefix === null)
        read = ".";
      else if (isAbsolute(prefix) || isAbsolute(pattern.map(function(p) {
        return typeof p === "string" ? p : "[*]";
      }).join("/"))) {
        if (!prefix || !isAbsolute(prefix))
          prefix = "/" + prefix;
        read = prefix;
      } else
        read = prefix;
      var abs = this._makeAbs(read);
      if (childrenIgnored(this, read))
        return;
      var isGlobStar = remain[0] === minimatch.GLOBSTAR;
      if (isGlobStar)
        this._processGlobStar(prefix, read, abs, remain, index, inGlobStar);
      else
        this._processReaddir(prefix, read, abs, remain, index, inGlobStar);
    };
    GlobSync.prototype._processReaddir = function(prefix, read, abs, remain, index, inGlobStar) {
      var entries = this._readdir(abs, inGlobStar);
      if (!entries)
        return;
      var pn = remain[0];
      var negate = !!this.minimatch.negate;
      var rawGlob = pn._glob;
      var dotOk = this.dot || rawGlob.charAt(0) === ".";
      var matchedEntries = [];
      for (var i = 0; i < entries.length; i++) {
        var e = entries[i];
        if (e.charAt(0) !== "." || dotOk) {
          var m;
          if (negate && !prefix) {
            m = !e.match(pn);
          } else {
            m = e.match(pn);
          }
          if (m)
            matchedEntries.push(e);
        }
      }
      var len = matchedEntries.length;
      if (len === 0)
        return;
      if (remain.length === 1 && !this.mark && !this.stat) {
        if (!this.matches[index])
          this.matches[index] = /* @__PURE__ */ Object.create(null);
        for (var i = 0; i < len; i++) {
          var e = matchedEntries[i];
          if (prefix) {
            if (prefix.slice(-1) !== "/")
              e = prefix + "/" + e;
            else
              e = prefix + e;
          }
          if (e.charAt(0) === "/" && !this.nomount) {
            e = path3.join(this.root, e);
          }
          this._emitMatch(index, e);
        }
        return;
      }
      remain.shift();
      for (var i = 0; i < len; i++) {
        var e = matchedEntries[i];
        var newPattern;
        if (prefix)
          newPattern = [prefix, e];
        else
          newPattern = [e];
        this._process(newPattern.concat(remain), index, inGlobStar);
      }
    };
    GlobSync.prototype._emitMatch = function(index, e) {
      if (isIgnored(this, e))
        return;
      var abs = this._makeAbs(e);
      if (this.mark)
        e = this._mark(e);
      if (this.absolute) {
        e = abs;
      }
      if (this.matches[index][e])
        return;
      if (this.nodir) {
        var c = this.cache[abs];
        if (c === "DIR" || Array.isArray(c))
          return;
      }
      this.matches[index][e] = true;
      if (this.stat)
        this._stat(e);
    };
    GlobSync.prototype._readdirInGlobStar = function(abs) {
      if (this.follow)
        return this._readdir(abs, false);
      var entries;
      var lstat;
      var stat;
      try {
        lstat = this.fs.lstatSync(abs);
      } catch (er) {
        if (er.code === "ENOENT") {
          return null;
        }
      }
      var isSym = lstat && lstat.isSymbolicLink();
      this.symlinks[abs] = isSym;
      if (!isSym && lstat && !lstat.isDirectory())
        this.cache[abs] = "FILE";
      else
        entries = this._readdir(abs, false);
      return entries;
    };
    GlobSync.prototype._readdir = function(abs, inGlobStar) {
      var entries;
      if (inGlobStar && !ownProp(this.symlinks, abs))
        return this._readdirInGlobStar(abs);
      if (ownProp(this.cache, abs)) {
        var c = this.cache[abs];
        if (!c || c === "FILE")
          return null;
        if (Array.isArray(c))
          return c;
      }
      try {
        return this._readdirEntries(abs, this.fs.readdirSync(abs));
      } catch (er) {
        this._readdirError(abs, er);
        return null;
      }
    };
    GlobSync.prototype._readdirEntries = function(abs, entries) {
      if (!this.mark && !this.stat) {
        for (var i = 0; i < entries.length; i++) {
          var e = entries[i];
          if (abs === "/")
            e = abs + e;
          else
            e = abs + "/" + e;
          this.cache[e] = true;
        }
      }
      this.cache[abs] = entries;
      return entries;
    };
    GlobSync.prototype._readdirError = function(f, er) {
      switch (er.code) {
        case "ENOTSUP":
        // https://github.com/isaacs/node-glob/issues/205
        case "ENOTDIR":
          var abs = this._makeAbs(f);
          this.cache[abs] = "FILE";
          if (abs === this.cwdAbs) {
            var error = new Error(er.code + " invalid cwd " + this.cwd);
            error.path = this.cwd;
            error.code = er.code;
            throw error;
          }
          break;
        case "ENOENT":
        // not terribly unusual
        case "ELOOP":
        case "ENAMETOOLONG":
        case "UNKNOWN":
          this.cache[this._makeAbs(f)] = false;
          break;
        default:
          this.cache[this._makeAbs(f)] = false;
          if (this.strict)
            throw er;
          if (!this.silent)
            console.error("glob error", er);
          break;
      }
    };
    GlobSync.prototype._processGlobStar = function(prefix, read, abs, remain, index, inGlobStar) {
      var entries = this._readdir(abs, inGlobStar);
      if (!entries)
        return;
      var remainWithoutGlobStar = remain.slice(1);
      var gspref = prefix ? [prefix] : [];
      var noGlobStar = gspref.concat(remainWithoutGlobStar);
      this._process(noGlobStar, index, false);
      var len = entries.length;
      var isSym = this.symlinks[abs];
      if (isSym && inGlobStar)
        return;
      for (var i = 0; i < len; i++) {
        var e = entries[i];
        if (e.charAt(0) === "." && !this.dot)
          continue;
        var instead = gspref.concat(entries[i], remainWithoutGlobStar);
        this._process(instead, index, true);
        var below = gspref.concat(entries[i], remain);
        this._process(below, index, true);
      }
    };
    GlobSync.prototype._processSimple = function(prefix, index) {
      var exists = this._stat(prefix);
      if (!this.matches[index])
        this.matches[index] = /* @__PURE__ */ Object.create(null);
      if (!exists)
        return;
      if (prefix && isAbsolute(prefix) && !this.nomount) {
        var trail = /[\/\\]$/.test(prefix);
        if (prefix.charAt(0) === "/") {
          prefix = path3.join(this.root, prefix);
        } else {
          prefix = path3.resolve(this.root, prefix);
          if (trail)
            prefix += "/";
        }
      }
      if (process.platform === "win32")
        prefix = prefix.replace(/\\/g, "/");
      this._emitMatch(index, prefix);
    };
    GlobSync.prototype._stat = function(f) {
      var abs = this._makeAbs(f);
      var needDir = f.slice(-1) === "/";
      if (f.length > this.maxLength)
        return false;
      if (!this.stat && ownProp(this.cache, abs)) {
        var c = this.cache[abs];
        if (Array.isArray(c))
          c = "DIR";
        if (!needDir || c === "DIR")
          return c;
        if (needDir && c === "FILE")
          return false;
      }
      var exists;
      var stat = this.statCache[abs];
      if (!stat) {
        var lstat;
        try {
          lstat = this.fs.lstatSync(abs);
        } catch (er) {
          if (er && (er.code === "ENOENT" || er.code === "ENOTDIR")) {
            this.statCache[abs] = false;
            return false;
          }
        }
        if (lstat && lstat.isSymbolicLink()) {
          try {
            stat = this.fs.statSync(abs);
          } catch (er) {
            stat = lstat;
          }
        } else {
          stat = lstat;
        }
      }
      this.statCache[abs] = stat;
      var c = true;
      if (stat)
        c = stat.isDirectory() ? "DIR" : "FILE";
      this.cache[abs] = this.cache[abs] || c;
      if (needDir && c === "FILE")
        return false;
      return c;
    };
    GlobSync.prototype._mark = function(p) {
      return common.mark(this, p);
    };
    GlobSync.prototype._makeAbs = function(f) {
      return common.makeAbs(this, f);
    };
  }
});
var require_wrappy = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/wrappy@1.0.2/node_modules/wrappy/wrappy.js"(exports, module2) {
    "use strict";
    module2.exports = wrappy;
    function wrappy(fn, cb) {
      if (fn && cb) return wrappy(fn)(cb);
      if (typeof fn !== "function")
        throw new TypeError("need wrapper function");
      Object.keys(fn).forEach(function(k) {
        wrapper[k] = fn[k];
      });
      return wrapper;
      function wrapper() {
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i];
        }
        var ret = fn.apply(this, args);
        var cb2 = args[args.length - 1];
        if (typeof ret === "function" && ret !== cb2) {
          Object.keys(cb2).forEach(function(k) {
            ret[k] = cb2[k];
          });
        }
        return ret;
      }
    }
  }
});
var require_once = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/once@1.4.0/node_modules/once/once.js"(exports, module2) {
    "use strict";
    var wrappy = require_wrappy();
    module2.exports = wrappy(once);
    module2.exports.strict = wrappy(onceStrict);
    once.proto = once(function() {
      Object.defineProperty(Function.prototype, "once", {
        value: function() {
          return once(this);
        },
        configurable: true
      });
      Object.defineProperty(Function.prototype, "onceStrict", {
        value: function() {
          return onceStrict(this);
        },
        configurable: true
      });
    });
    function once(fn) {
      var f = function() {
        if (f.called) return f.value;
        f.called = true;
        return f.value = fn.apply(this, arguments);
      };
      f.called = false;
      return f;
    }
    function onceStrict(fn) {
      var f = function() {
        if (f.called)
          throw new Error(f.onceError);
        f.called = true;
        return f.value = fn.apply(this, arguments);
      };
      var name = fn.name || "Function wrapped with `once`";
      f.onceError = name + " shouldn't be called more than once";
      f.called = false;
      return f;
    }
  }
});
var require_inflight = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/inflight@1.0.6/node_modules/inflight/inflight.js"(exports, module2) {
    "use strict";
    var wrappy = require_wrappy();
    var reqs = /* @__PURE__ */ Object.create(null);
    var once = require_once();
    module2.exports = wrappy(inflight);
    function inflight(key, cb) {
      if (reqs[key]) {
        reqs[key].push(cb);
        return null;
      } else {
        reqs[key] = [cb];
        return makeres(key);
      }
    }
    function makeres(key) {
      return once(function RES() {
        var cbs = reqs[key];
        var len = cbs.length;
        var args = slice(arguments);
        try {
          for (var i = 0; i < len; i++) {
            cbs[i].apply(null, args);
          }
        } finally {
          if (cbs.length > len) {
            cbs.splice(0, len);
            process.nextTick(function() {
              RES.apply(null, args);
            });
          } else {
            delete reqs[key];
          }
        }
      });
    }
    function slice(args) {
      var length = args.length;
      var array = [];
      for (var i = 0; i < length; i++) array[i] = args[i];
      return array;
    }
  }
});
var require_glob = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/glob@7.2.3/node_modules/glob/glob.js"(exports, module2) {
    "use strict";
    module2.exports = glob;
    var rp = require_fs6();
    var minimatch = require_minimatch2();
    var Minimatch = minimatch.Minimatch;
    var inherits = require_inherits();
    var EE = (0, import_chunk_2ESYSVXG.__require)("events").EventEmitter;
    var path3 = (0, import_chunk_2ESYSVXG.__require)("path");
    var assert = (0, import_chunk_2ESYSVXG.__require)("assert");
    var isAbsolute = require_path_is_absolute();
    var globSync = require_sync7();
    var common = require_common3();
    var setopts = common.setopts;
    var ownProp = common.ownProp;
    var inflight = require_inflight();
    var util = (0, import_chunk_2ESYSVXG.__require)("util");
    var childrenIgnored = common.childrenIgnored;
    var isIgnored = common.isIgnored;
    var once = require_once();
    function glob(pattern, options, cb) {
      if (typeof options === "function") cb = options, options = {};
      if (!options) options = {};
      if (options.sync) {
        if (cb)
          throw new TypeError("callback provided to sync glob");
        return globSync(pattern, options);
      }
      return new Glob(pattern, options, cb);
    }
    glob.sync = globSync;
    var GlobSync = glob.GlobSync = globSync.GlobSync;
    glob.glob = glob;
    function extend(origin, add) {
      if (add === null || typeof add !== "object") {
        return origin;
      }
      var keys = Object.keys(add);
      var i = keys.length;
      while (i--) {
        origin[keys[i]] = add[keys[i]];
      }
      return origin;
    }
    glob.hasMagic = function(pattern, options_) {
      var options = extend({}, options_);
      options.noprocess = true;
      var g = new Glob(pattern, options);
      var set = g.minimatch.set;
      if (!pattern)
        return false;
      if (set.length > 1)
        return true;
      for (var j = 0; j < set[0].length; j++) {
        if (typeof set[0][j] !== "string")
          return true;
      }
      return false;
    };
    glob.Glob = Glob;
    inherits(Glob, EE);
    function Glob(pattern, options, cb) {
      if (typeof options === "function") {
        cb = options;
        options = null;
      }
      if (options && options.sync) {
        if (cb)
          throw new TypeError("callback provided to sync glob");
        return new GlobSync(pattern, options);
      }
      if (!(this instanceof Glob))
        return new Glob(pattern, options, cb);
      setopts(this, pattern, options);
      this._didRealPath = false;
      var n = this.minimatch.set.length;
      this.matches = new Array(n);
      if (typeof cb === "function") {
        cb = once(cb);
        this.on("error", cb);
        this.on("end", function(matches) {
          cb(null, matches);
        });
      }
      var self = this;
      this._processing = 0;
      this._emitQueue = [];
      this._processQueue = [];
      this.paused = false;
      if (this.noprocess)
        return this;
      if (n === 0)
        return done();
      var sync = true;
      for (var i = 0; i < n; i++) {
        this._process(this.minimatch.set[i], i, false, done);
      }
      sync = false;
      function done() {
        --self._processing;
        if (self._processing <= 0) {
          if (sync) {
            process.nextTick(function() {
              self._finish();
            });
          } else {
            self._finish();
          }
        }
      }
    }
    Glob.prototype._finish = function() {
      assert(this instanceof Glob);
      if (this.aborted)
        return;
      if (this.realpath && !this._didRealpath)
        return this._realpath();
      common.finish(this);
      this.emit("end", this.found);
    };
    Glob.prototype._realpath = function() {
      if (this._didRealpath)
        return;
      this._didRealpath = true;
      var n = this.matches.length;
      if (n === 0)
        return this._finish();
      var self = this;
      for (var i = 0; i < this.matches.length; i++)
        this._realpathSet(i, next);
      function next() {
        if (--n === 0)
          self._finish();
      }
    };
    Glob.prototype._realpathSet = function(index, cb) {
      var matchset = this.matches[index];
      if (!matchset)
        return cb();
      var found = Object.keys(matchset);
      var self = this;
      var n = found.length;
      if (n === 0)
        return cb();
      var set = this.matches[index] = /* @__PURE__ */ Object.create(null);
      found.forEach(function(p, i) {
        p = self._makeAbs(p);
        rp.realpath(p, self.realpathCache, function(er, real) {
          if (!er)
            set[real] = true;
          else if (er.syscall === "stat")
            set[p] = true;
          else
            self.emit("error", er);
          if (--n === 0) {
            self.matches[index] = set;
            cb();
          }
        });
      });
    };
    Glob.prototype._mark = function(p) {
      return common.mark(this, p);
    };
    Glob.prototype._makeAbs = function(f) {
      return common.makeAbs(this, f);
    };
    Glob.prototype.abort = function() {
      this.aborted = true;
      this.emit("abort");
    };
    Glob.prototype.pause = function() {
      if (!this.paused) {
        this.paused = true;
        this.emit("pause");
      }
    };
    Glob.prototype.resume = function() {
      if (this.paused) {
        this.emit("resume");
        this.paused = false;
        if (this._emitQueue.length) {
          var eq = this._emitQueue.slice(0);
          this._emitQueue.length = 0;
          for (var i = 0; i < eq.length; i++) {
            var e = eq[i];
            this._emitMatch(e[0], e[1]);
          }
        }
        if (this._processQueue.length) {
          var pq = this._processQueue.slice(0);
          this._processQueue.length = 0;
          for (var i = 0; i < pq.length; i++) {
            var p = pq[i];
            this._processing--;
            this._process(p[0], p[1], p[2], p[3]);
          }
        }
      }
    };
    Glob.prototype._process = function(pattern, index, inGlobStar, cb) {
      assert(this instanceof Glob);
      assert(typeof cb === "function");
      if (this.aborted)
        return;
      this._processing++;
      if (this.paused) {
        this._processQueue.push([pattern, index, inGlobStar, cb]);
        return;
      }
      var n = 0;
      while (typeof pattern[n] === "string") {
        n++;
      }
      var prefix;
      switch (n) {
        // if not, then this is rather simple
        case pattern.length:
          this._processSimple(pattern.join("/"), index, cb);
          return;
        case 0:
          prefix = null;
          break;
        default:
          prefix = pattern.slice(0, n).join("/");
          break;
      }
      var remain = pattern.slice(n);
      var read;
      if (prefix === null)
        read = ".";
      else if (isAbsolute(prefix) || isAbsolute(pattern.map(function(p) {
        return typeof p === "string" ? p : "[*]";
      }).join("/"))) {
        if (!prefix || !isAbsolute(prefix))
          prefix = "/" + prefix;
        read = prefix;
      } else
        read = prefix;
      var abs = this._makeAbs(read);
      if (childrenIgnored(this, read))
        return cb();
      var isGlobStar = remain[0] === minimatch.GLOBSTAR;
      if (isGlobStar)
        this._processGlobStar(prefix, read, abs, remain, index, inGlobStar, cb);
      else
        this._processReaddir(prefix, read, abs, remain, index, inGlobStar, cb);
    };
    Glob.prototype._processReaddir = function(prefix, read, abs, remain, index, inGlobStar, cb) {
      var self = this;
      this._readdir(abs, inGlobStar, function(er, entries) {
        return self._processReaddir2(prefix, read, abs, remain, index, inGlobStar, entries, cb);
      });
    };
    Glob.prototype._processReaddir2 = function(prefix, read, abs, remain, index, inGlobStar, entries, cb) {
      if (!entries)
        return cb();
      var pn = remain[0];
      var negate = !!this.minimatch.negate;
      var rawGlob = pn._glob;
      var dotOk = this.dot || rawGlob.charAt(0) === ".";
      var matchedEntries = [];
      for (var i = 0; i < entries.length; i++) {
        var e = entries[i];
        if (e.charAt(0) !== "." || dotOk) {
          var m;
          if (negate && !prefix) {
            m = !e.match(pn);
          } else {
            m = e.match(pn);
          }
          if (m)
            matchedEntries.push(e);
        }
      }
      var len = matchedEntries.length;
      if (len === 0)
        return cb();
      if (remain.length === 1 && !this.mark && !this.stat) {
        if (!this.matches[index])
          this.matches[index] = /* @__PURE__ */ Object.create(null);
        for (var i = 0; i < len; i++) {
          var e = matchedEntries[i];
          if (prefix) {
            if (prefix !== "/")
              e = prefix + "/" + e;
            else
              e = prefix + e;
          }
          if (e.charAt(0) === "/" && !this.nomount) {
            e = path3.join(this.root, e);
          }
          this._emitMatch(index, e);
        }
        return cb();
      }
      remain.shift();
      for (var i = 0; i < len; i++) {
        var e = matchedEntries[i];
        var newPattern;
        if (prefix) {
          if (prefix !== "/")
            e = prefix + "/" + e;
          else
            e = prefix + e;
        }
        this._process([e].concat(remain), index, inGlobStar, cb);
      }
      cb();
    };
    Glob.prototype._emitMatch = function(index, e) {
      if (this.aborted)
        return;
      if (isIgnored(this, e))
        return;
      if (this.paused) {
        this._emitQueue.push([index, e]);
        return;
      }
      var abs = isAbsolute(e) ? e : this._makeAbs(e);
      if (this.mark)
        e = this._mark(e);
      if (this.absolute)
        e = abs;
      if (this.matches[index][e])
        return;
      if (this.nodir) {
        var c = this.cache[abs];
        if (c === "DIR" || Array.isArray(c))
          return;
      }
      this.matches[index][e] = true;
      var st = this.statCache[abs];
      if (st)
        this.emit("stat", e, st);
      this.emit("match", e);
    };
    Glob.prototype._readdirInGlobStar = function(abs, cb) {
      if (this.aborted)
        return;
      if (this.follow)
        return this._readdir(abs, false, cb);
      var lstatkey = "lstat\0" + abs;
      var self = this;
      var lstatcb = inflight(lstatkey, lstatcb_);
      if (lstatcb)
        self.fs.lstat(abs, lstatcb);
      function lstatcb_(er, lstat) {
        if (er && er.code === "ENOENT")
          return cb();
        var isSym = lstat && lstat.isSymbolicLink();
        self.symlinks[abs] = isSym;
        if (!isSym && lstat && !lstat.isDirectory()) {
          self.cache[abs] = "FILE";
          cb();
        } else
          self._readdir(abs, false, cb);
      }
    };
    Glob.prototype._readdir = function(abs, inGlobStar, cb) {
      if (this.aborted)
        return;
      cb = inflight("readdir\0" + abs + "\0" + inGlobStar, cb);
      if (!cb)
        return;
      if (inGlobStar && !ownProp(this.symlinks, abs))
        return this._readdirInGlobStar(abs, cb);
      if (ownProp(this.cache, abs)) {
        var c = this.cache[abs];
        if (!c || c === "FILE")
          return cb();
        if (Array.isArray(c))
          return cb(null, c);
      }
      var self = this;
      self.fs.readdir(abs, readdirCb(this, abs, cb));
    };
    function readdirCb(self, abs, cb) {
      return function(er, entries) {
        if (er)
          self._readdirError(abs, er, cb);
        else
          self._readdirEntries(abs, entries, cb);
      };
    }
    Glob.prototype._readdirEntries = function(abs, entries, cb) {
      if (this.aborted)
        return;
      if (!this.mark && !this.stat) {
        for (var i = 0; i < entries.length; i++) {
          var e = entries[i];
          if (abs === "/")
            e = abs + e;
          else
            e = abs + "/" + e;
          this.cache[e] = true;
        }
      }
      this.cache[abs] = entries;
      return cb(null, entries);
    };
    Glob.prototype._readdirError = function(f, er, cb) {
      if (this.aborted)
        return;
      switch (er.code) {
        case "ENOTSUP":
        // https://github.com/isaacs/node-glob/issues/205
        case "ENOTDIR":
          var abs = this._makeAbs(f);
          this.cache[abs] = "FILE";
          if (abs === this.cwdAbs) {
            var error = new Error(er.code + " invalid cwd " + this.cwd);
            error.path = this.cwd;
            error.code = er.code;
            this.emit("error", error);
            this.abort();
          }
          break;
        case "ENOENT":
        // not terribly unusual
        case "ELOOP":
        case "ENAMETOOLONG":
        case "UNKNOWN":
          this.cache[this._makeAbs(f)] = false;
          break;
        default:
          this.cache[this._makeAbs(f)] = false;
          if (this.strict) {
            this.emit("error", er);
            this.abort();
          }
          if (!this.silent)
            console.error("glob error", er);
          break;
      }
      return cb();
    };
    Glob.prototype._processGlobStar = function(prefix, read, abs, remain, index, inGlobStar, cb) {
      var self = this;
      this._readdir(abs, inGlobStar, function(er, entries) {
        self._processGlobStar2(prefix, read, abs, remain, index, inGlobStar, entries, cb);
      });
    };
    Glob.prototype._processGlobStar2 = function(prefix, read, abs, remain, index, inGlobStar, entries, cb) {
      if (!entries)
        return cb();
      var remainWithoutGlobStar = remain.slice(1);
      var gspref = prefix ? [prefix] : [];
      var noGlobStar = gspref.concat(remainWithoutGlobStar);
      this._process(noGlobStar, index, false, cb);
      var isSym = this.symlinks[abs];
      var len = entries.length;
      if (isSym && inGlobStar)
        return cb();
      for (var i = 0; i < len; i++) {
        var e = entries[i];
        if (e.charAt(0) === "." && !this.dot)
          continue;
        var instead = gspref.concat(entries[i], remainWithoutGlobStar);
        this._process(instead, index, true, cb);
        var below = gspref.concat(entries[i], remain);
        this._process(below, index, true, cb);
      }
      cb();
    };
    Glob.prototype._processSimple = function(prefix, index, cb) {
      var self = this;
      this._stat(prefix, function(er, exists) {
        self._processSimple2(prefix, index, er, exists, cb);
      });
    };
    Glob.prototype._processSimple2 = function(prefix, index, er, exists, cb) {
      if (!this.matches[index])
        this.matches[index] = /* @__PURE__ */ Object.create(null);
      if (!exists)
        return cb();
      if (prefix && isAbsolute(prefix) && !this.nomount) {
        var trail = /[\/\\]$/.test(prefix);
        if (prefix.charAt(0) === "/") {
          prefix = path3.join(this.root, prefix);
        } else {
          prefix = path3.resolve(this.root, prefix);
          if (trail)
            prefix += "/";
        }
      }
      if (process.platform === "win32")
        prefix = prefix.replace(/\\/g, "/");
      this._emitMatch(index, prefix);
      cb();
    };
    Glob.prototype._stat = function(f, cb) {
      var abs = this._makeAbs(f);
      var needDir = f.slice(-1) === "/";
      if (f.length > this.maxLength)
        return cb();
      if (!this.stat && ownProp(this.cache, abs)) {
        var c = this.cache[abs];
        if (Array.isArray(c))
          c = "DIR";
        if (!needDir || c === "DIR")
          return cb(null, c);
        if (needDir && c === "FILE")
          return cb();
      }
      var exists;
      var stat = this.statCache[abs];
      if (stat !== void 0) {
        if (stat === false)
          return cb(null, stat);
        else {
          var type = stat.isDirectory() ? "DIR" : "FILE";
          if (needDir && type === "FILE")
            return cb();
          else
            return cb(null, type, stat);
        }
      }
      var self = this;
      var statcb = inflight("stat\0" + abs, lstatcb_);
      if (statcb)
        self.fs.lstat(abs, statcb);
      function lstatcb_(er, lstat) {
        if (lstat && lstat.isSymbolicLink()) {
          return self.fs.stat(abs, function(er2, stat2) {
            if (er2)
              self._stat2(f, abs, null, lstat, cb);
            else
              self._stat2(f, abs, er2, stat2, cb);
          });
        } else {
          self._stat2(f, abs, er, lstat, cb);
        }
      }
    };
    Glob.prototype._stat2 = function(f, abs, er, stat, cb) {
      if (er && (er.code === "ENOENT" || er.code === "ENOTDIR")) {
        this.statCache[abs] = false;
        return cb();
      }
      var needDir = f.slice(-1) === "/";
      this.statCache[abs] = stat;
      if (abs.slice(-1) === "/" && stat && !stat.isDirectory())
        return cb(null, false, stat);
      var c = true;
      if (stat)
        c = stat.isDirectory() ? "DIR" : "FILE";
      this.cache[abs] = this.cache[abs] || c;
      if (needDir && c === "FILE")
        return cb();
      return cb(null, c, stat);
    };
  }
});
var require_rimraf = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/rimraf@3.0.2/node_modules/rimraf/rimraf.js"(exports, module2) {
    "use strict";
    var assert = (0, import_chunk_2ESYSVXG.__require)("assert");
    var path3 = (0, import_chunk_2ESYSVXG.__require)("path");
    var fs = (0, import_chunk_2ESYSVXG.__require)("fs");
    var glob = void 0;
    try {
      glob = require_glob();
    } catch (_err) {
    }
    var defaultGlobOpts = {
      nosort: true,
      silent: true
    };
    var timeout = 0;
    var isWindows = process.platform === "win32";
    var defaults = (options) => {
      const methods = [
        "unlink",
        "chmod",
        "stat",
        "lstat",
        "rmdir",
        "readdir"
      ];
      methods.forEach((m) => {
        options[m] = options[m] || fs[m];
        m = m + "Sync";
        options[m] = options[m] || fs[m];
      });
      options.maxBusyTries = options.maxBusyTries || 3;
      options.emfileWait = options.emfileWait || 1e3;
      if (options.glob === false) {
        options.disableGlob = true;
      }
      if (options.disableGlob !== true && glob === void 0) {
        throw Error("glob dependency not found, set `options.disableGlob = true` if intentional");
      }
      options.disableGlob = options.disableGlob || false;
      options.glob = options.glob || defaultGlobOpts;
    };
    var rimraf = (p, options, cb) => {
      if (typeof options === "function") {
        cb = options;
        options = {};
      }
      assert(p, "rimraf: missing path");
      assert.equal(typeof p, "string", "rimraf: path should be a string");
      assert.equal(typeof cb, "function", "rimraf: callback function required");
      assert(options, "rimraf: invalid options argument provided");
      assert.equal(typeof options, "object", "rimraf: options should be object");
      defaults(options);
      let busyTries = 0;
      let errState = null;
      let n = 0;
      const next = (er) => {
        errState = errState || er;
        if (--n === 0)
          cb(errState);
      };
      const afterGlob = (er, results) => {
        if (er)
          return cb(er);
        n = results.length;
        if (n === 0)
          return cb();
        results.forEach((p2) => {
          const CB = (er2) => {
            if (er2) {
              if ((er2.code === "EBUSY" || er2.code === "ENOTEMPTY" || er2.code === "EPERM") && busyTries < options.maxBusyTries) {
                busyTries++;
                return setTimeout(() => rimraf_(p2, options, CB), busyTries * 100);
              }
              if (er2.code === "EMFILE" && timeout < options.emfileWait) {
                return setTimeout(() => rimraf_(p2, options, CB), timeout++);
              }
              if (er2.code === "ENOENT") er2 = null;
            }
            timeout = 0;
            next(er2);
          };
          rimraf_(p2, options, CB);
        });
      };
      if (options.disableGlob || !glob.hasMagic(p))
        return afterGlob(null, [p]);
      options.lstat(p, (er, stat) => {
        if (!er)
          return afterGlob(null, [p]);
        glob(p, options.glob, afterGlob);
      });
    };
    var rimraf_ = (p, options, cb) => {
      assert(p);
      assert(options);
      assert(typeof cb === "function");
      options.lstat(p, (er, st) => {
        if (er && er.code === "ENOENT")
          return cb(null);
        if (er && er.code === "EPERM" && isWindows)
          fixWinEPERM(p, options, er, cb);
        if (st && st.isDirectory())
          return rmdir(p, options, er, cb);
        options.unlink(p, (er2) => {
          if (er2) {
            if (er2.code === "ENOENT")
              return cb(null);
            if (er2.code === "EPERM")
              return isWindows ? fixWinEPERM(p, options, er2, cb) : rmdir(p, options, er2, cb);
            if (er2.code === "EISDIR")
              return rmdir(p, options, er2, cb);
          }
          return cb(er2);
        });
      });
    };
    var fixWinEPERM = (p, options, er, cb) => {
      assert(p);
      assert(options);
      assert(typeof cb === "function");
      options.chmod(p, 438, (er2) => {
        if (er2)
          cb(er2.code === "ENOENT" ? null : er);
        else
          options.stat(p, (er3, stats) => {
            if (er3)
              cb(er3.code === "ENOENT" ? null : er);
            else if (stats.isDirectory())
              rmdir(p, options, er, cb);
            else
              options.unlink(p, cb);
          });
      });
    };
    var fixWinEPERMSync = (p, options, er) => {
      assert(p);
      assert(options);
      try {
        options.chmodSync(p, 438);
      } catch (er2) {
        if (er2.code === "ENOENT")
          return;
        else
          throw er;
      }
      let stats;
      try {
        stats = options.statSync(p);
      } catch (er3) {
        if (er3.code === "ENOENT")
          return;
        else
          throw er;
      }
      if (stats.isDirectory())
        rmdirSync(p, options, er);
      else
        options.unlinkSync(p);
    };
    var rmdir = (p, options, originalEr, cb) => {
      assert(p);
      assert(options);
      assert(typeof cb === "function");
      options.rmdir(p, (er) => {
        if (er && (er.code === "ENOTEMPTY" || er.code === "EEXIST" || er.code === "EPERM"))
          rmkids(p, options, cb);
        else if (er && er.code === "ENOTDIR")
          cb(originalEr);
        else
          cb(er);
      });
    };
    var rmkids = (p, options, cb) => {
      assert(p);
      assert(options);
      assert(typeof cb === "function");
      options.readdir(p, (er, files) => {
        if (er)
          return cb(er);
        let n = files.length;
        if (n === 0)
          return options.rmdir(p, cb);
        let errState;
        files.forEach((f) => {
          rimraf(path3.join(p, f), options, (er2) => {
            if (errState)
              return;
            if (er2)
              return cb(errState = er2);
            if (--n === 0)
              options.rmdir(p, cb);
          });
        });
      });
    };
    var rimrafSync = (p, options) => {
      options = options || {};
      defaults(options);
      assert(p, "rimraf: missing path");
      assert.equal(typeof p, "string", "rimraf: path should be a string");
      assert(options, "rimraf: missing options");
      assert.equal(typeof options, "object", "rimraf: options should be object");
      let results;
      if (options.disableGlob || !glob.hasMagic(p)) {
        results = [p];
      } else {
        try {
          options.lstatSync(p);
          results = [p];
        } catch (er) {
          results = glob.sync(p, options.glob);
        }
      }
      if (!results.length)
        return;
      for (let i = 0; i < results.length; i++) {
        const p2 = results[i];
        let st;
        try {
          st = options.lstatSync(p2);
        } catch (er) {
          if (er.code === "ENOENT")
            return;
          if (er.code === "EPERM" && isWindows)
            fixWinEPERMSync(p2, options, er);
        }
        try {
          if (st && st.isDirectory())
            rmdirSync(p2, options, null);
          else
            options.unlinkSync(p2);
        } catch (er) {
          if (er.code === "ENOENT")
            return;
          if (er.code === "EPERM")
            return isWindows ? fixWinEPERMSync(p2, options, er) : rmdirSync(p2, options, er);
          if (er.code !== "EISDIR")
            throw er;
          rmdirSync(p2, options, er);
        }
      }
    };
    var rmdirSync = (p, options, originalEr) => {
      assert(p);
      assert(options);
      try {
        options.rmdirSync(p);
      } catch (er) {
        if (er.code === "ENOENT")
          return;
        if (er.code === "ENOTDIR")
          throw originalEr;
        if (er.code === "ENOTEMPTY" || er.code === "EEXIST" || er.code === "EPERM")
          rmkidsSync(p, options);
      }
    };
    var rmkidsSync = (p, options) => {
      assert(p);
      assert(options);
      options.readdirSync(p).forEach((f) => rimrafSync(path3.join(p, f), options));
      const retries = isWindows ? 100 : 1;
      let i = 0;
      do {
        let threw = true;
        try {
          const ret = options.rmdirSync(p, options);
          threw = false;
          return ret;
        } finally {
          if (++i < retries && threw)
            continue;
        }
      } while (true);
    };
    module2.exports = rimraf;
    rimraf.sync = rimrafSync;
  }
});
var require_indent_string = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/indent-string@4.0.0/node_modules/indent-string/index.js"(exports, module2) {
    "use strict";
    module2.exports = (string, count = 1, options) => {
      options = {
        indent: " ",
        includeEmptyLines: false,
        ...options
      };
      if (typeof string !== "string") {
        throw new TypeError(
          `Expected \`input\` to be a \`string\`, got \`${typeof string}\``
        );
      }
      if (typeof count !== "number") {
        throw new TypeError(
          `Expected \`count\` to be a \`number\`, got \`${typeof count}\``
        );
      }
      if (typeof options.indent !== "string") {
        throw new TypeError(
          `Expected \`options.indent\` to be a \`string\`, got \`${typeof options.indent}\``
        );
      }
      if (count === 0) {
        return string;
      }
      const regex = options.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
      return string.replace(regex, options.indent.repeat(count));
    };
  }
});
var require_clean_stack = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/clean-stack@2.2.0/node_modules/clean-stack/index.js"(exports, module2) {
    "use strict";
    var os2 = (0, import_chunk_2ESYSVXG.__require)("os");
    var extractPathRegex = /\s+at.*(?:\(|\s)(.*)\)?/;
    var pathRegex = /^(?:(?:(?:node|(?:internal\/[\w/]*|.*node_modules\/(?:babel-polyfill|pirates)\/.*)?\w+)\.js:\d+:\d+)|native)/;
    var homeDir = typeof os2.homedir === "undefined" ? "" : os2.homedir();
    module2.exports = (stack, options) => {
      options = Object.assign({ pretty: false }, options);
      return stack.replace(/\\/g, "/").split("\n").filter((line) => {
        const pathMatches = line.match(extractPathRegex);
        if (pathMatches === null || !pathMatches[1]) {
          return true;
        }
        const match = pathMatches[1];
        if (match.includes(".app/Contents/Resources/electron.asar") || match.includes(".app/Contents/Resources/default_app.asar")) {
          return false;
        }
        return !pathRegex.test(match);
      }).filter((line) => line.trim() !== "").map((line) => {
        if (options.pretty) {
          return line.replace(extractPathRegex, (m, p1) => m.replace(p1, p1.replace(homeDir, "~")));
        }
        return line;
      }).join("\n");
    };
  }
});
var require_aggregate_error = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/aggregate-error@3.1.0/node_modules/aggregate-error/index.js"(exports, module2) {
    "use strict";
    var indentString = require_indent_string();
    var cleanStack = require_clean_stack();
    var cleanInternalStack = (stack) => stack.replace(/\s+at .*aggregate-error\/index.js:\d+:\d+\)?/g, "");
    var AggregateError = class extends Error {
      constructor(errors) {
        if (!Array.isArray(errors)) {
          throw new TypeError(`Expected input to be an Array, got ${typeof errors}`);
        }
        errors = [...errors].map((error) => {
          if (error instanceof Error) {
            return error;
          }
          if (error !== null && typeof error === "object") {
            return Object.assign(new Error(error.message), error);
          }
          return new Error(error);
        });
        let message = errors.map((error) => {
          return typeof error.stack === "string" ? cleanInternalStack(cleanStack(error.stack)) : String(error);
        }).join("\n");
        message = "\n" + indentString(message, 4);
        super(message);
        this.name = "AggregateError";
        Object.defineProperty(this, "_errors", { value: errors });
      }
      *[Symbol.iterator]() {
        for (const error of this._errors) {
          yield error;
        }
      }
    };
    module2.exports = AggregateError;
  }
});
var require_p_map = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/p-map@4.0.0/node_modules/p-map/index.js"(exports, module2) {
    "use strict";
    var AggregateError = require_aggregate_error();
    module2.exports = async (iterable, mapper, {
      concurrency = Infinity,
      stopOnError = true
    } = {}) => {
      return new Promise((resolve, reject) => {
        if (typeof mapper !== "function") {
          throw new TypeError("Mapper function is required");
        }
        if (!((Number.isSafeInteger(concurrency) || concurrency === Infinity) && concurrency >= 1)) {
          throw new TypeError(`Expected \`concurrency\` to be an integer from 1 and up or \`Infinity\`, got \`${concurrency}\` (${typeof concurrency})`);
        }
        const result = [];
        const errors = [];
        const iterator = iterable[Symbol.iterator]();
        let isRejected = false;
        let isIterableDone = false;
        let resolvingCount = 0;
        let currentIndex = 0;
        const next = () => {
          if (isRejected) {
            return;
          }
          const nextItem = iterator.next();
          const index = currentIndex;
          currentIndex++;
          if (nextItem.done) {
            isIterableDone = true;
            if (resolvingCount === 0) {
              if (!stopOnError && errors.length !== 0) {
                reject(new AggregateError(errors));
              } else {
                resolve(result);
              }
            }
            return;
          }
          resolvingCount++;
          (async () => {
            try {
              const element = await nextItem.value;
              result[index] = await mapper(element, index);
              resolvingCount--;
              next();
            } catch (error) {
              if (stopOnError) {
                isRejected = true;
                reject(error);
              } else {
                errors.push(error);
                resolvingCount--;
                next();
              }
            }
          })();
        };
        for (let i = 0; i < concurrency; i++) {
          next();
          if (isIterableDone) {
            break;
          }
        }
      });
    };
  }
});
var require_del = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/del@6.1.1/node_modules/del/index.js"(exports, module2) {
    "use strict";
    var { promisify } = (0, import_chunk_2ESYSVXG.__require)("util");
    var path3 = (0, import_chunk_2ESYSVXG.__require)("path");
    var globby = require_globby();
    var isGlob = require_is_glob();
    var slash = require_slash();
    var gracefulFs = require_graceful_fs();
    var isPathCwd = require_is_path_cwd();
    var isPathInside = require_is_path_inside();
    var rimraf = require_rimraf();
    var pMap = require_p_map();
    var rimrafP = promisify(rimraf);
    var rimrafOptions = {
      glob: false,
      unlink: gracefulFs.unlink,
      unlinkSync: gracefulFs.unlinkSync,
      chmod: gracefulFs.chmod,
      chmodSync: gracefulFs.chmodSync,
      stat: gracefulFs.stat,
      statSync: gracefulFs.statSync,
      lstat: gracefulFs.lstat,
      lstatSync: gracefulFs.lstatSync,
      rmdir: gracefulFs.rmdir,
      rmdirSync: gracefulFs.rmdirSync,
      readdir: gracefulFs.readdir,
      readdirSync: gracefulFs.readdirSync
    };
    function safeCheck(file, cwd) {
      if (isPathCwd(file)) {
        throw new Error("Cannot delete the current working directory. Can be overridden with the `force` option.");
      }
      if (!isPathInside(file, cwd)) {
        throw new Error("Cannot delete files/directories outside the current working directory. Can be overridden with the `force` option.");
      }
    }
    function normalizePatterns(patterns) {
      patterns = Array.isArray(patterns) ? patterns : [patterns];
      patterns = patterns.map((pattern) => {
        if (process.platform === "win32" && isGlob(pattern) === false) {
          return slash(pattern);
        }
        return pattern;
      });
      return patterns;
    }
    module2.exports = async (patterns, { force, dryRun, cwd = process.cwd(), onProgress = () => {
    }, ...options } = {}) => {
      options = {
        expandDirectories: false,
        onlyFiles: false,
        followSymbolicLinks: false,
        cwd,
        ...options
      };
      patterns = normalizePatterns(patterns);
      const files = (await globby(patterns, options)).sort((a, b) => b.localeCompare(a));
      if (files.length === 0) {
        onProgress({
          totalCount: 0,
          deletedCount: 0,
          percent: 1
        });
      }
      let deletedCount = 0;
      const mapper = async (file) => {
        file = path3.resolve(cwd, file);
        if (!force) {
          safeCheck(file, cwd);
        }
        if (!dryRun) {
          await rimrafP(file, rimrafOptions);
        }
        deletedCount += 1;
        onProgress({
          totalCount: files.length,
          deletedCount,
          percent: deletedCount / files.length
        });
        return file;
      };
      const removedFiles = await pMap(files, mapper, options);
      removedFiles.sort((a, b) => a.localeCompare(b));
      return removedFiles;
    };
    module2.exports.sync = (patterns, { force, dryRun, cwd = process.cwd(), ...options } = {}) => {
      options = {
        expandDirectories: false,
        onlyFiles: false,
        followSymbolicLinks: false,
        cwd,
        ...options
      };
      patterns = normalizePatterns(patterns);
      const files = globby.sync(patterns, options).sort((a, b) => b.localeCompare(a));
      const removedFiles = files.map((file) => {
        file = path3.resolve(cwd, file);
        if (!force) {
          safeCheck(file, cwd);
        }
        if (!dryRun) {
          rimraf.sync(file, rimrafOptions);
        }
        return file;
      });
      removedFiles.sort((a, b) => a.localeCompare(b));
      return removedFiles;
    };
  }
});
var require_tempy = (0, import_chunk_2ESYSVXG.__commonJS)({
  "../../node_modules/.pnpm/tempy@1.0.1/node_modules/tempy/index.js"(exports, module2) {
    "use strict";
    var fs = (0, import_chunk_2ESYSVXG.__require)("fs");
    var path3 = (0, import_chunk_2ESYSVXG.__require)("path");
    var uniqueString = require_unique_string();
    var tempDir = require_temp_dir();
    var isStream2 = require_is_stream();
    var del = require_del();
    var stream = (0, import_chunk_2ESYSVXG.__require)("stream");
    var { promisify } = (0, import_chunk_2ESYSVXG.__require)("util");
    var pipeline = promisify(stream.pipeline);
    var { writeFile } = fs.promises;
    var getPath = (prefix = "") => path3.join(tempDir, prefix + uniqueString());
    var writeStream = async (filePath, data) => pipeline(data, fs.createWriteStream(filePath));
    var createTask = (tempyFunction, { extraArguments = 0 } = {}) => async (...arguments_) => {
      const [callback, options] = arguments_.slice(extraArguments);
      const result = await tempyFunction(...arguments_.slice(0, extraArguments), options);
      try {
        return await callback(result);
      } finally {
        await del(result, { force: true });
      }
    };
    module2.exports.file = (options) => {
      options = {
        ...options
      };
      if (options.name) {
        if (options.extension !== void 0 && options.extension !== null) {
          throw new Error("The `name` and `extension` options are mutually exclusive");
        }
        return path3.join(module2.exports.directory(), options.name);
      }
      return getPath() + (options.extension === void 0 || options.extension === null ? "" : "." + options.extension.replace(/^\./, ""));
    };
    module2.exports.file.task = createTask(module2.exports.file);
    module2.exports.directory = ({ prefix = "" } = {}) => {
      const directory = getPath(prefix);
      fs.mkdirSync(directory);
      return directory;
    };
    module2.exports.directory.task = createTask(module2.exports.directory);
    module2.exports.write = async (data, options) => {
      const filename = module2.exports.file(options);
      const write = isStream2(data) ? writeStream : writeFile;
      await write(filename, data);
      return filename;
    };
    module2.exports.write.task = createTask(module2.exports.write, { extraArguments: 1 });
    module2.exports.writeSync = (data, options) => {
      const filename = module2.exports.file(options);
      fs.writeFileSync(filename, data);
      return filename;
    };
    Object.defineProperty(module2.exports, "root", {
      get() {
        return tempDir;
      }
    });
  }
});
var import_cross_spawn = (0, import_chunk_2ESYSVXG.__toESM)(require_cross_spawn(), 1);
function stripFinalNewline(input) {
  const LF = typeof input === "string" ? "\n" : "\n".charCodeAt();
  const CR = typeof input === "string" ? "\r" : "\r".charCodeAt();
  if (input[input.length - 1] === LF) {
    input = input.slice(0, -1);
  }
  if (input[input.length - 1] === CR) {
    input = input.slice(0, -1);
  }
  return input;
}
function pathKey(options = {}) {
  const {
    env = process.env,
    platform = process.platform
  } = options;
  if (platform !== "win32") {
    return "PATH";
  }
  return Object.keys(env).reverse().find((key) => key.toUpperCase() === "PATH") || "Path";
}
var npmRunPath = ({
  cwd = import_node_process2.default.cwd(),
  path: pathOption = import_node_process2.default.env[pathKey()],
  preferLocal = true,
  execPath = import_node_process2.default.execPath,
  addExecPath = true
} = {}) => {
  const cwdString = cwd instanceof URL ? (0, import_node_url.fileURLToPath)(cwd) : cwd;
  const cwdPath = import_node_path2.default.resolve(cwdString);
  const result = [];
  if (preferLocal) {
    applyPreferLocal(result, cwdPath);
  }
  if (addExecPath) {
    applyExecPath(result, execPath, cwdPath);
  }
  return [...result, pathOption].join(import_node_path2.default.delimiter);
};
var applyPreferLocal = (result, cwdPath) => {
  let previous;
  while (previous !== cwdPath) {
    result.push(import_node_path2.default.join(cwdPath, "node_modules/.bin"));
    previous = cwdPath;
    cwdPath = import_node_path2.default.resolve(cwdPath, "..");
  }
};
var applyExecPath = (result, execPath, cwdPath) => {
  const execPathString = execPath instanceof URL ? (0, import_node_url.fileURLToPath)(execPath) : execPath;
  result.push(import_node_path2.default.resolve(cwdPath, execPathString, ".."));
};
var npmRunPathEnv = ({ env = import_node_process2.default.env, ...options } = {}) => {
  env = { ...env };
  const pathName = pathKey({ env });
  options.path = env[pathName];
  env[pathName] = npmRunPath(options);
  return env;
};
var copyProperty = (to, from, property, ignoreNonConfigurable) => {
  if (property === "length" || property === "prototype") {
    return;
  }
  if (property === "arguments" || property === "caller") {
    return;
  }
  const toDescriptor = Object.getOwnPropertyDescriptor(to, property);
  const fromDescriptor = Object.getOwnPropertyDescriptor(from, property);
  if (!canCopyProperty(toDescriptor, fromDescriptor) && ignoreNonConfigurable) {
    return;
  }
  Object.defineProperty(to, property, fromDescriptor);
};
var canCopyProperty = function(toDescriptor, fromDescriptor) {
  return toDescriptor === void 0 || toDescriptor.configurable || toDescriptor.writable === fromDescriptor.writable && toDescriptor.enumerable === fromDescriptor.enumerable && toDescriptor.configurable === fromDescriptor.configurable && (toDescriptor.writable || toDescriptor.value === fromDescriptor.value);
};
var changePrototype = (to, from) => {
  const fromPrototype = Object.getPrototypeOf(from);
  if (fromPrototype === Object.getPrototypeOf(to)) {
    return;
  }
  Object.setPrototypeOf(to, fromPrototype);
};
var wrappedToString = (withName, fromBody) => `/* Wrapped ${withName}*/
${fromBody}`;
var toStringDescriptor = Object.getOwnPropertyDescriptor(Function.prototype, "toString");
var toStringName = Object.getOwnPropertyDescriptor(Function.prototype.toString, "name");
var changeToString = (to, from, name) => {
  const withName = name === "" ? "" : `with ${name.trim()}() `;
  const newToString = wrappedToString.bind(null, withName, from.toString());
  Object.defineProperty(newToString, "name", toStringName);
  Object.defineProperty(to, "toString", { ...toStringDescriptor, value: newToString });
};
function mimicFunction(to, from, { ignoreNonConfigurable = false } = {}) {
  const { name } = to;
  for (const property of Reflect.ownKeys(from)) {
    copyProperty(to, from, property, ignoreNonConfigurable);
  }
  changePrototype(to, from);
  changeToString(to, from, name);
  return to;
}
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
  mimicFunction(onetime2, function_);
  calledFunctions.set(onetime2, callCount);
  return onetime2;
};
onetime.callCount = (function_) => {
  if (!calledFunctions.has(function_)) {
    throw new Error(`The given function \`${function_.name}\` is not wrapped by the \`onetime\` package`);
  }
  return calledFunctions.get(function_);
};
var onetime_default = onetime;
var getRealtimeSignals = () => {
  const length = SIGRTMAX - SIGRTMIN + 1;
  return Array.from({ length }, getRealtimeSignal);
};
var getRealtimeSignal = (value, index) => ({
  name: `SIGRT${index + 1}`,
  number: SIGRTMIN + index,
  action: "terminate",
  description: "Application-specific signal (realtime)",
  standard: "posix"
});
var SIGRTMIN = 34;
var SIGRTMAX = 64;
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
var getSignals = () => {
  const realtimeSignals = getRealtimeSignals();
  const signals2 = [...SIGNALS, ...realtimeSignals].map(normalizeSignal);
  return signals2;
};
var normalizeSignal = ({
  name,
  number: defaultNumber,
  description,
  action,
  forced = false,
  standard
}) => {
  const {
    signals: { [name]: constantSignal }
  } = import_node_os2.constants;
  const supported = constantSignal !== void 0;
  const number = supported ? constantSignal : defaultNumber;
  return { name, number, description, supported, action, forced, standard };
};
var getSignalsByName = () => {
  const signals2 = getSignals();
  return Object.fromEntries(signals2.map(getSignalByName));
};
var getSignalByName = ({
  name,
  number,
  description,
  supported,
  action,
  forced,
  standard
}) => [name, { name, number, description, supported, action, forced, standard }];
var signalsByName = getSignalsByName();
var getSignalsByNumber = () => {
  const signals2 = getSignals();
  const length = SIGRTMAX + 1;
  const signalsA = Array.from(
    { length },
    (value, number) => getSignalByNumber(number, signals2)
  );
  return Object.assign({}, ...signalsA);
};
var getSignalByNumber = (number, signals2) => {
  const signal = findSignalByNumber(number, signals2);
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
var findSignalByNumber = (number, signals2) => {
  const signal = signals2.find(({ name }) => import_node_os.constants.signals[name] === number);
  if (signal !== void 0) {
    return signal;
  }
  return signals2.find((signalA) => signalA.number === number);
};
var signalsByNumber = getSignalsByNumber();
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
  parsed: { options: { timeout, cwd = import_node_process3.default.cwd() } }
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
  error.cwd = cwd;
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
var normalizeStdioNode = (options) => {
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
var signals = [];
signals.push("SIGHUP", "SIGINT", "SIGTERM");
if (process.platform !== "win32") {
  signals.push(
    "SIGALRM",
    "SIGABRT",
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
  signals.push("SIGIO", "SIGPOLL", "SIGPWR", "SIGSTKFLT");
}
var processOk = (process7) => !!process7 && typeof process7 === "object" && typeof process7.removeListener === "function" && typeof process7.emit === "function" && typeof process7.reallyExit === "function" && typeof process7.listeners === "function" && typeof process7.kill === "function" && typeof process7.pid === "number" && typeof process7.on === "function";
var kExitEmitter = Symbol.for("signal-exit emitter");
var global2 = globalThis;
var ObjectDefineProperty = Object.defineProperty.bind(Object);
var Emitter = class {
  emitted = {
    afterExit: false,
    exit: false
  };
  listeners = {
    afterExit: [],
    exit: []
  };
  count = 0;
  id = Math.random();
  constructor() {
    if (global2[kExitEmitter]) {
      return global2[kExitEmitter];
    }
    ObjectDefineProperty(global2, kExitEmitter, {
      value: this,
      writable: false,
      enumerable: false,
      configurable: false
    });
  }
  on(ev, fn) {
    this.listeners[ev].push(fn);
  }
  removeListener(ev, fn) {
    const list = this.listeners[ev];
    const i = list.indexOf(fn);
    if (i === -1) {
      return;
    }
    if (i === 0 && list.length === 1) {
      list.length = 0;
    } else {
      list.splice(i, 1);
    }
  }
  emit(ev, code, signal) {
    if (this.emitted[ev]) {
      return false;
    }
    this.emitted[ev] = true;
    let ret = false;
    for (const fn of this.listeners[ev]) {
      ret = fn(code, signal) === true || ret;
    }
    if (ev === "exit") {
      ret = this.emit("afterExit", code, signal) || ret;
    }
    return ret;
  }
};
var SignalExitBase = class {
};
var signalExitWrap = (handler) => {
  return {
    onExit(cb, opts) {
      return handler.onExit(cb, opts);
    },
    load() {
      return handler.load();
    },
    unload() {
      return handler.unload();
    }
  };
};
var SignalExitFallback = class extends SignalExitBase {
  onExit() {
    return () => {
    };
  }
  load() {
  }
  unload() {
  }
};
var SignalExit = class extends SignalExitBase {
  // "SIGHUP" throws an `ENOSYS` error on Windows,
  // so use a supported signal instead
  /* c8 ignore start */
  #hupSig = process4.platform === "win32" ? "SIGINT" : "SIGHUP";
  /* c8 ignore stop */
  #emitter = new Emitter();
  #process;
  #originalProcessEmit;
  #originalProcessReallyExit;
  #sigListeners = {};
  #loaded = false;
  constructor(process7) {
    super();
    this.#process = process7;
    this.#sigListeners = {};
    for (const sig of signals) {
      this.#sigListeners[sig] = () => {
        const listeners = this.#process.listeners(sig);
        let { count } = this.#emitter;
        const p = process7;
        if (typeof p.__signal_exit_emitter__ === "object" && typeof p.__signal_exit_emitter__.count === "number") {
          count += p.__signal_exit_emitter__.count;
        }
        if (listeners.length === count) {
          this.unload();
          const ret = this.#emitter.emit("exit", null, sig);
          const s = sig === "SIGHUP" ? this.#hupSig : sig;
          if (!ret)
            process7.kill(process7.pid, s);
        }
      };
    }
    this.#originalProcessReallyExit = process7.reallyExit;
    this.#originalProcessEmit = process7.emit;
  }
  onExit(cb, opts) {
    if (!processOk(this.#process)) {
      return () => {
      };
    }
    if (this.#loaded === false) {
      this.load();
    }
    const ev = opts?.alwaysLast ? "afterExit" : "exit";
    this.#emitter.on(ev, cb);
    return () => {
      this.#emitter.removeListener(ev, cb);
      if (this.#emitter.listeners["exit"].length === 0 && this.#emitter.listeners["afterExit"].length === 0) {
        this.unload();
      }
    };
  }
  load() {
    if (this.#loaded) {
      return;
    }
    this.#loaded = true;
    this.#emitter.count += 1;
    for (const sig of signals) {
      try {
        const fn = this.#sigListeners[sig];
        if (fn)
          this.#process.on(sig, fn);
      } catch (_) {
      }
    }
    this.#process.emit = (ev, ...a) => {
      return this.#processEmit(ev, ...a);
    };
    this.#process.reallyExit = (code) => {
      return this.#processReallyExit(code);
    };
  }
  unload() {
    if (!this.#loaded) {
      return;
    }
    this.#loaded = false;
    signals.forEach((sig) => {
      const listener = this.#sigListeners[sig];
      if (!listener) {
        throw new Error("Listener not defined for signal: " + sig);
      }
      try {
        this.#process.removeListener(sig, listener);
      } catch (_) {
      }
    });
    this.#process.emit = this.#originalProcessEmit;
    this.#process.reallyExit = this.#originalProcessReallyExit;
    this.#emitter.count -= 1;
  }
  #processReallyExit(code) {
    if (!processOk(this.#process)) {
      return 0;
    }
    this.#process.exitCode = code || 0;
    this.#emitter.emit("exit", this.#process.exitCode, null);
    return this.#originalProcessReallyExit.call(this.#process, this.#process.exitCode);
  }
  #processEmit(ev, ...args) {
    const og = this.#originalProcessEmit;
    if (ev === "exit" && processOk(this.#process)) {
      if (typeof args[0] === "number") {
        this.#process.exitCode = args[0];
      }
      const ret = og.call(this.#process, ev, ...args);
      this.#emitter.emit("exit", this.#process.exitCode, null);
      return ret;
    } else {
      return og.call(this.#process, ev, ...args);
    }
  }
};
var process4 = globalThis.process;
var {
  /**
   * Called when the process is exiting, whether via signal, explicit
   * exit, or running out of stuff to do.
   *
   * If the global process object is not suitable for instrumentation,
   * then this will be a no-op.
   *
   * Returns a function that may be used to unload signal-exit.
   */
  onExit,
  /**
   * Load the listeners.  Likely you never need to call this, unless
   * doing a rather deep integration with signal-exit functionality.
   * Mostly exposed for the benefit of testing.
   *
   * @internal
   */
  load,
  /**
   * Unload the listeners.  Likely you never need to call this, unless
   * doing a rather deep integration with signal-exit functionality.
   * Mostly exposed for the benefit of testing.
   *
   * @internal
   */
  unload
} = signalExitWrap(processOk(process4) ? new SignalExit(process4) : new SignalExitFallback());
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
var shouldForceKill = (signal, { forceKillAfterTimeout }, killResult) => isSigterm(signal) && forceKillAfterTimeout !== false && killResult;
var isSigterm = (signal) => signal === import_node_os3.default.constants.signals.SIGTERM || typeof signal === "string" && signal.toUpperCase() === "SIGTERM";
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
function isStream(stream) {
  return stream !== null && typeof stream === "object" && typeof stream.pipe === "function";
}
function isWritableStream(stream) {
  return isStream(stream) && stream.writable !== false && typeof stream._write === "function" && typeof stream._writableState === "object";
}
var isExecaChildProcess = (target) => target instanceof import_node_child_process2.ChildProcess && typeof target.then === "function";
var pipeToTarget = (spawned, streamName, target) => {
  if (typeof target === "string") {
    spawned[streamName].pipe((0, import_node_fs.createWriteStream)(target));
    return spawned;
  }
  if (isWritableStream(target)) {
    spawned[streamName].pipe(target);
    return spawned;
  }
  if (!isExecaChildProcess(target)) {
    throw new TypeError("The second argument must be a string, a stream or an Execa child process.");
  }
  if (!isWritableStream(target.stdin)) {
    throw new TypeError("The target child process's stdin must be available.");
  }
  spawned[streamName].pipe(target.stdin);
  return target;
};
var addPipeMethods = (spawned) => {
  if (spawned.stdout !== null) {
    spawned.pipeStdout = pipeToTarget.bind(void 0, spawned, "stdout");
  }
  if (spawned.stderr !== null) {
    spawned.pipeStderr = pipeToTarget.bind(void 0, spawned, "stderr");
  }
  if (spawned.all !== void 0) {
    spawned.pipeAll = pipeToTarget.bind(void 0, spawned, "all");
  }
};
var getStreamContents = async (stream, { init, convertChunk, getSize, truncateChunk, addChunk, getFinalChunk, finalize }, { maxBuffer = Number.POSITIVE_INFINITY } = {}) => {
  if (!isAsyncIterable(stream)) {
    throw new Error("The first argument must be a Readable, a ReadableStream, or an async iterable.");
  }
  const state = init();
  state.length = 0;
  try {
    for await (const chunk of stream) {
      const chunkType = getChunkType(chunk);
      const convertedChunk = convertChunk[chunkType](chunk, state);
      appendChunk({ convertedChunk, state, getSize, truncateChunk, addChunk, maxBuffer });
    }
    appendFinalChunk({ state, convertChunk, getSize, truncateChunk, addChunk, getFinalChunk, maxBuffer });
    return finalize(state);
  } catch (error) {
    error.bufferedData = finalize(state);
    throw error;
  }
};
var appendFinalChunk = ({ state, getSize, truncateChunk, addChunk, getFinalChunk, maxBuffer }) => {
  const convertedChunk = getFinalChunk(state);
  if (convertedChunk !== void 0) {
    appendChunk({ convertedChunk, state, getSize, truncateChunk, addChunk, maxBuffer });
  }
};
var appendChunk = ({ convertedChunk, state, getSize, truncateChunk, addChunk, maxBuffer }) => {
  const chunkSize = getSize(convertedChunk);
  const newLength = state.length + chunkSize;
  if (newLength <= maxBuffer) {
    addNewChunk(convertedChunk, state, addChunk, newLength);
    return;
  }
  const truncatedChunk = truncateChunk(convertedChunk, maxBuffer - state.length);
  if (truncatedChunk !== void 0) {
    addNewChunk(truncatedChunk, state, addChunk, maxBuffer);
  }
  throw new MaxBufferError();
};
var addNewChunk = (convertedChunk, state, addChunk, newLength) => {
  state.contents = addChunk(convertedChunk, state, newLength);
  state.length = newLength;
};
var isAsyncIterable = (stream) => typeof stream === "object" && stream !== null && typeof stream[Symbol.asyncIterator] === "function";
var getChunkType = (chunk) => {
  const typeOfChunk = typeof chunk;
  if (typeOfChunk === "string") {
    return "string";
  }
  if (typeOfChunk !== "object" || chunk === null) {
    return "others";
  }
  if (globalThis.Buffer?.isBuffer(chunk)) {
    return "buffer";
  }
  const prototypeName = objectToString.call(chunk);
  if (prototypeName === "[object ArrayBuffer]") {
    return "arrayBuffer";
  }
  if (prototypeName === "[object DataView]") {
    return "dataView";
  }
  if (Number.isInteger(chunk.byteLength) && Number.isInteger(chunk.byteOffset) && objectToString.call(chunk.buffer) === "[object ArrayBuffer]") {
    return "typedArray";
  }
  return "others";
};
var { toString: objectToString } = Object.prototype;
var MaxBufferError = class extends Error {
  name = "MaxBufferError";
  constructor() {
    super("maxBuffer exceeded");
  }
};
var identity = (value) => value;
var noop = () => void 0;
var getContentsProp = ({ contents }) => contents;
var throwObjectStream = (chunk) => {
  throw new Error(`Streams in object mode are not supported: ${String(chunk)}`);
};
var getLengthProp = (convertedChunk) => convertedChunk.length;
async function getStreamAsArrayBuffer(stream, options) {
  return getStreamContents(stream, arrayBufferMethods, options);
}
var initArrayBuffer = () => ({ contents: new ArrayBuffer(0) });
var useTextEncoder = (chunk) => textEncoder.encode(chunk);
var textEncoder = new TextEncoder();
var useUint8Array = (chunk) => new Uint8Array(chunk);
var useUint8ArrayWithOffset = (chunk) => new Uint8Array(chunk.buffer, chunk.byteOffset, chunk.byteLength);
var truncateArrayBufferChunk = (convertedChunk, chunkSize) => convertedChunk.slice(0, chunkSize);
var addArrayBufferChunk = (convertedChunk, { contents, length: previousLength }, length) => {
  const newContents = hasArrayBufferResize() ? resizeArrayBuffer(contents, length) : resizeArrayBufferSlow(contents, length);
  new Uint8Array(newContents).set(convertedChunk, previousLength);
  return newContents;
};
var resizeArrayBufferSlow = (contents, length) => {
  if (length <= contents.byteLength) {
    return contents;
  }
  const arrayBuffer = new ArrayBuffer(getNewContentsLength(length));
  new Uint8Array(arrayBuffer).set(new Uint8Array(contents), 0);
  return arrayBuffer;
};
var resizeArrayBuffer = (contents, length) => {
  if (length <= contents.maxByteLength) {
    contents.resize(length);
    return contents;
  }
  const arrayBuffer = new ArrayBuffer(length, { maxByteLength: getNewContentsLength(length) });
  new Uint8Array(arrayBuffer).set(new Uint8Array(contents), 0);
  return arrayBuffer;
};
var getNewContentsLength = (length) => SCALE_FACTOR ** Math.ceil(Math.log(length) / Math.log(SCALE_FACTOR));
var SCALE_FACTOR = 2;
var finalizeArrayBuffer = ({ contents, length }) => hasArrayBufferResize() ? contents : contents.slice(0, length);
var hasArrayBufferResize = () => "resize" in ArrayBuffer.prototype;
var arrayBufferMethods = {
  init: initArrayBuffer,
  convertChunk: {
    string: useTextEncoder,
    buffer: useUint8Array,
    arrayBuffer: useUint8Array,
    dataView: useUint8ArrayWithOffset,
    typedArray: useUint8ArrayWithOffset,
    others: throwObjectStream
  },
  getSize: getLengthProp,
  truncateChunk: truncateArrayBufferChunk,
  addChunk: addArrayBufferChunk,
  getFinalChunk: noop,
  finalize: finalizeArrayBuffer
};
async function getStreamAsBuffer(stream, options) {
  if (!("Buffer" in globalThis)) {
    throw new Error("getStreamAsBuffer() is only supported in Node.js");
  }
  try {
    return arrayBufferToNodeBuffer(await getStreamAsArrayBuffer(stream, options));
  } catch (error) {
    if (error.bufferedData !== void 0) {
      error.bufferedData = arrayBufferToNodeBuffer(error.bufferedData);
    }
    throw error;
  }
}
var arrayBufferToNodeBuffer = (arrayBuffer) => globalThis.Buffer.from(arrayBuffer);
async function getStreamAsString(stream, options) {
  return getStreamContents(stream, stringMethods, options);
}
var initString = () => ({ contents: "", textDecoder: new TextDecoder() });
var useTextDecoder = (chunk, { textDecoder }) => textDecoder.decode(chunk, { stream: true });
var addStringChunk = (convertedChunk, { contents }) => contents + convertedChunk;
var truncateStringChunk = (convertedChunk, chunkSize) => convertedChunk.slice(0, chunkSize);
var getFinalStringChunk = ({ textDecoder }) => {
  const finalChunk = textDecoder.decode();
  return finalChunk === "" ? void 0 : finalChunk;
};
var stringMethods = {
  init: initString,
  convertChunk: {
    string: identity,
    buffer: useTextDecoder,
    arrayBuffer: useTextDecoder,
    dataView: useTextDecoder,
    typedArray: useTextDecoder,
    others: throwObjectStream
  },
  getSize: getLengthProp,
  truncateChunk: truncateStringChunk,
  addChunk: addStringChunk,
  getFinalChunk: getFinalStringChunk,
  finalize: getContentsProp
};
var import_merge_stream = (0, import_chunk_2ESYSVXG.__toESM)(require_merge_stream(), 1);
var validateInputOptions = (input) => {
  if (input !== void 0) {
    throw new TypeError("The `input` and `inputFile` options cannot be both set.");
  }
};
var getInputSync = ({ input, inputFile }) => {
  if (typeof inputFile !== "string") {
    return input;
  }
  validateInputOptions(input);
  return (0, import_node_fs2.readFileSync)(inputFile);
};
var handleInputSync = (options) => {
  const input = getInputSync(options);
  if (isStream(input)) {
    throw new TypeError("The `input` option cannot be a stream in sync mode");
  }
  return input;
};
var getInput = ({ input, inputFile }) => {
  if (typeof inputFile !== "string") {
    return input;
  }
  validateInputOptions(input);
  return (0, import_node_fs2.createReadStream)(inputFile);
};
var handleInput = (spawned, options) => {
  const input = getInput(options);
  if (input === void 0) {
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
  const mixed = (0, import_merge_stream.default)();
  if (spawned.stdout) {
    mixed.add(spawned.stdout);
  }
  if (spawned.stderr) {
    mixed.add(spawned.stderr);
  }
  return mixed;
};
var getBufferedData = async (stream, streamPromise) => {
  if (!stream || streamPromise === void 0) {
    return;
  }
  await (0, import_promises.setTimeout)(0);
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
  if (encoding === "utf8" || encoding === "utf-8") {
    return getStreamAsString(stream, { maxBuffer });
  }
  if (encoding === null || encoding === "buffer") {
    return getStreamAsBuffer(stream, { maxBuffer });
  }
  return applyEncoding(stream, maxBuffer, encoding);
};
var applyEncoding = async (stream, maxBuffer, encoding) => {
  const buffer = await getStreamAsBuffer(stream, { maxBuffer });
  return buffer.toString(encoding);
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
};
var getSpawnedPromise = (spawned) => new Promise((resolve, reject) => {
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
var normalizeArgs = (file, args = []) => {
  if (!Array.isArray(args)) {
    return [file];
  }
  return [file, ...args];
};
var NO_ESCAPE_REGEXP = /^[\w.-]+$/;
var escapeArg = (arg) => {
  if (typeof arg !== "string" || NO_ESCAPE_REGEXP.test(arg)) {
    return arg;
  }
  return `"${arg.replaceAll('"', '\\"')}"`;
};
var joinCommand = (file, args) => normalizeArgs(file, args).join(" ");
var getEscapedCommand = (file, args) => normalizeArgs(file, args).map((arg) => escapeArg(arg)).join(" ");
var SPACES_REGEXP = / +/g;
var parseExpression = (expression) => {
  const typeOfExpression = typeof expression;
  if (typeOfExpression === "string") {
    return expression;
  }
  if (typeOfExpression === "number") {
    return String(expression);
  }
  if (typeOfExpression === "object" && expression !== null && !(expression instanceof import_node_child_process3.ChildProcess) && "stdout" in expression) {
    const typeOfStdout = typeof expression.stdout;
    if (typeOfStdout === "string") {
      return expression.stdout;
    }
    if (import_node_buffer2.Buffer.isBuffer(expression.stdout)) {
      return expression.stdout.toString();
    }
    throw new TypeError(`Unexpected "${typeOfStdout}" stdout in template expression`);
  }
  throw new TypeError(`Unexpected "${typeOfExpression}" in template expression`);
};
var concatTokens = (tokens, nextTokens, isNew) => isNew || tokens.length === 0 || nextTokens.length === 0 ? [...tokens, ...nextTokens] : [
  ...tokens.slice(0, -1),
  `${tokens.at(-1)}${nextTokens[0]}`,
  ...nextTokens.slice(1)
];
var parseTemplate = ({ templates, expressions, tokens, index, template }) => {
  const templateString = template ?? templates.raw[index];
  const templateTokens = templateString.split(SPACES_REGEXP).filter(Boolean);
  const newTokens = concatTokens(
    tokens,
    templateTokens,
    templateString.startsWith(" ")
  );
  if (index === expressions.length) {
    return newTokens;
  }
  const expression = expressions[index];
  const expressionTokens = Array.isArray(expression) ? expression.map((expression2) => parseExpression(expression2)) : [parseExpression(expression)];
  return concatTokens(
    newTokens,
    expressionTokens,
    templateString.endsWith(" ")
  );
};
var parseTemplates = (templates, expressions) => {
  let tokens = [];
  for (const [index, template] of templates.entries()) {
    tokens = parseTemplate({ templates, expressions, tokens, index, template });
  }
  return tokens;
};
var verboseDefault = (0, import_node_util.debuglog)("execa").enabled;
var padField = (field, padding) => String(field).padStart(padding, "0");
var getTimestamp = () => {
  const date = /* @__PURE__ */ new Date();
  return `${padField(date.getHours(), 2)}:${padField(date.getMinutes(), 2)}:${padField(date.getSeconds(), 2)}.${padField(date.getMilliseconds(), 3)}`;
};
var logCommand = (escapedCommand, { verbose }) => {
  if (!verbose) {
    return;
  }
  import_node_process4.default.stderr.write(`[${getTimestamp()}] ${escapedCommand}
`);
};
var DEFAULT_MAX_BUFFER = 1e3 * 1e3 * 100;
var getEnv = ({ env: envOption, extendEnv, preferLocal, localDir, execPath }) => {
  const env = extendEnv ? { ...import_node_process.default.env, ...envOption } : envOption;
  if (preferLocal) {
    return npmRunPathEnv({ env, cwd: localDir, execPath });
  }
  return env;
};
var handleArguments = (file, args, options = {}) => {
  const parsed = import_cross_spawn.default._parse(file, args, options);
  file = parsed.command;
  args = parsed.args;
  options = parsed.options;
  options = {
    maxBuffer: DEFAULT_MAX_BUFFER,
    buffer: true,
    stripFinalNewline: true,
    extendEnv: true,
    preferLocal: false,
    localDir: options.cwd || import_node_process.default.cwd(),
    execPath: import_node_process.default.execPath,
    encoding: "utf8",
    reject: true,
    cleanup: true,
    all: false,
    windowsHide: true,
    verbose: verboseDefault,
    ...options
  };
  options.env = getEnv(options);
  options.stdio = normalizeStdio(options);
  if (import_node_process.default.platform === "win32" && import_node_path.default.basename(file, ".exe") === "cmd") {
    args.unshift("/q");
  }
  return { file, args, options, parsed };
};
var handleOutput = (options, value, error) => {
  if (typeof value !== "string" && !import_node_buffer.Buffer.isBuffer(value)) {
    return error === void 0 ? void 0 : "";
  }
  if (options.stripFinalNewline) {
    return stripFinalNewline(value);
  }
  return value;
};
function execa(file, args, options) {
  const parsed = handleArguments(file, args, options);
  const command = joinCommand(file, args);
  const escapedCommand = getEscapedCommand(file, args);
  logCommand(escapedCommand, parsed.options);
  validateTimeout(parsed.options);
  let spawned;
  try {
    spawned = import_node_child_process.default.spawn(parsed.file, parsed.args, parsed.options);
  } catch (error) {
    const dummySpawned = new import_node_child_process.default.ChildProcess();
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
    mergePromise(dummySpawned, errorPromise);
    return dummySpawned;
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
        isCanceled: context.isCanceled || (parsed.options.signal ? parsed.options.signal.aborted : false),
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
  const handlePromiseOnce = onetime_default(handlePromise);
  handleInput(spawned, parsed.options);
  spawned.all = makeAllStream(spawned, parsed.options);
  addPipeMethods(spawned);
  mergePromise(spawned, handlePromiseOnce);
  return spawned;
}
function execaSync(file, args, options) {
  const parsed = handleArguments(file, args, options);
  const command = joinCommand(file, args);
  const escapedCommand = getEscapedCommand(file, args);
  logCommand(escapedCommand, parsed.options);
  const input = handleInputSync(parsed.options);
  let result;
  try {
    result = import_node_child_process.default.spawnSync(parsed.file, parsed.args, { ...parsed.options, input });
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
}
var normalizeScriptStdin = ({ input, inputFile, stdio }) => input === void 0 && inputFile === void 0 && stdio === void 0 ? { stdin: "inherit" } : {};
var normalizeScriptOptions = (options = {}) => ({
  preferLocal: true,
  ...normalizeScriptStdin(options),
  ...options
});
function create$(options) {
  function $2(templatesOrOptions, ...expressions) {
    if (!Array.isArray(templatesOrOptions)) {
      return create$({ ...options, ...templatesOrOptions });
    }
    const [file, ...args] = parseTemplates(templatesOrOptions, expressions);
    return execa(file, args, normalizeScriptOptions(options));
  }
  $2.sync = (templates, ...expressions) => {
    if (!Array.isArray(templates)) {
      throw new TypeError("Please use $(options).sync`command` instead of $.sync(options)`command`.");
    }
    const [file, ...args] = parseTemplates(templates, expressions);
    return execaSync(file, args, normalizeScriptOptions(options));
  };
  return $2;
}
var $ = create$();
function execaNode(scriptPath, args, options = {}) {
  if (args && !Array.isArray(args) && typeof args === "object") {
    options = args;
    args = [];
  }
  const stdio = normalizeStdioNode(options);
  const defaultExecArgv = import_node_process.default.execArgv.filter((arg) => !arg.startsWith("--inspect"));
  const {
    nodePath = import_node_process.default.execPath,
    nodeOptions = defaultExecArgv
  } = options;
  return execa(
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
}
/*! Bundled license information:

is-extglob/index.js:
  (*!
   * is-extglob <https://github.com/jonschlinkert/is-extglob>
   *
   * Copyright (c) 2014-2016, Jon Schlinkert.
   * Licensed under the MIT License.
   *)

is-glob/index.js:
  (*!
   * is-glob <https://github.com/jonschlinkert/is-glob>
   *
   * Copyright (c) 2014-2017, Jon Schlinkert.
   * Released under the MIT License.
   *)

is-number/index.js:
  (*!
   * is-number <https://github.com/jonschlinkert/is-number>
   *
   * Copyright (c) 2014-present, Jon Schlinkert.
   * Released under the MIT License.
   *)

to-regex-range/index.js:
  (*!
   * to-regex-range <https://github.com/micromatch/to-regex-range>
   *
   * Copyright (c) 2015-present, Jon Schlinkert.
   * Released under the MIT License.
   *)

fill-range/index.js:
  (*!
   * fill-range <https://github.com/jonschlinkert/fill-range>
   *
   * Copyright (c) 2014-present, Jon Schlinkert.
   * Licensed under the MIT License.
   *)

queue-microtask/index.js:
  (*! queue-microtask. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *)

run-parallel/index.js:
  (*! run-parallel. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *)
*/
