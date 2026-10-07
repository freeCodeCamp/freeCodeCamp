"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loadPrivatePartialConfig;
exports.loadPartialConfig = loadPartialConfig;
function _path() {
  const data = require("path");
  _path = function () {
    return data;
  };
  return data;
}
var _plugin = require("./plugin.js");
var _util = require("./util.js");
var _item = require("./item.js");
var _configChain = require("./config-chain.js");
var _environment = require("./helpers/environment.js");
var _options = require("./validation/options.js");
var _index = require("./files/index.js");
var _resolveTargets = require("./resolve-targets.js");
const _excluded = ["showIgnoredFiles"];
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function resolveRootMode(rootDir, rootMode) {
  switch (rootMode) {
    case "root":
      return rootDir;
    case "upward-optional":
      {
        const upwardRootDir = (0, _index.findConfigUpwards)(rootDir);
        return upwardRootDir === null ? rootDir : upwardRootDir;
      }
    case "upward":
      {
        const upwardRootDir = (0, _index.findConfigUpwards)(rootDir);
        if (upwardRootDir !== null) return upwardRootDir;
        throw Object.assign(new Error(`Babel was run with rootMode:"upward" but a root could not ` + `be found when searching upward from "${rootDir}".\n` + `One of the following config files must be in the directory tree: ` + `"${_index.ROOT_CONFIG_FILENAMES.join(", ")}".`), {
          code: "BABEL_ROOT_NOT_FOUND",
          dirname: rootDir
        });
      }
    default:
      throw new Error(`Assertion failure - unknown rootMode value.`);
  }
}
function* loadPrivatePartialConfig(inputOpts) {
  if (inputOpts != null && (typeof inputOpts !== "object" || Array.isArray(inputOpts))) {
    throw new Error("Babel options must be an object, null, or undefined");
  }
  const args = inputOpts ? (0, _options.validate)("arguments", inputOpts) : {};
  const {
    envName = (0, _environment.getEnv)(),
    cwd = ".",
    root: rootDir = ".",
    rootMode = "root",
    caller,
    cloneInputAst = true
  } = args;
  const absoluteCwd = _path().resolve(cwd);
  const absoluteRootDir = resolveRootMode(_path().resolve(absoluteCwd, rootDir), rootMode);
  const filename = typeof args.filename === "string" ? _path().resolve(cwd, args.filename) : undefined;
  const showConfigPath = yield* (0, _index.resolveShowConfigPath)(absoluteCwd);
  const context = {
    filename,
    cwd: absoluteCwd,
    root: absoluteRootDir,
    envName,
    caller,
    showConfig: showConfigPath === filename
  };
  const configChain = yield* (0, _configChain.buildRootChain)(args, context);
  if (!configChain) return null;
  const merged = {
    assumptions: {}
  };
  configChain.options.forEach(opts => {
    (0, _util.mergeOptions)(merged, opts);
  });
  const options = Object.assign({}, merged, {
    targets: (0, _resolveTargets.resolveTargets)(merged, absoluteRootDir),
    cloneInputAst,
    babelrc: false,
    configFile: false,
    browserslistConfigFile: false,
    passPerPreset: false,
    envName: context.envName,
    cwd: context.cwd,
    root: context.root,
    rootMode: "root",
    filename: typeof context.filename === "string" ? context.filename : undefined,
    plugins: configChain.plugins.map(descriptor => (0, _item.createItemFromDescriptor)(descriptor)),
    presets: configChain.presets.map(descriptor => (0, _item.createItemFromDescriptor)(descriptor))
  });
  return {
    options,
    context,
    fileHandling: configChain.fileHandling,
    ignore: configChain.ignore,
    babelrc: configChain.babelrc,
    config: configChain.config,
    files: configChain.files
  };
}
function* loadPartialConfig(opts) {
  let showIgnoredFiles = false;
  if (typeof opts === "object" && opts !== null && !Array.isArray(opts)) {
    var _opts = opts;
    ({
      showIgnoredFiles
    } = _opts);
    opts = _objectWithoutPropertiesLoose(_opts, _excluded);
    _opts;
  }
  const result = yield* loadPrivatePartialConfig(opts);
  if (!result) return null;
  const {
    options,
    babelrc,
    ignore,
    config,
    fileHandling,
    files
  } = result;
  if (fileHandling === "ignored" && !showIgnoredFiles) {
    return null;
  }
  (options.plugins || []).forEach(item => {
    if (item.value instanceof _plugin.default) {
      throw new Error("Passing cached plugin instances is not supported in " + "babel.loadPartialConfig()");
    }
  });
  return new PartialConfig(options, babelrc ? babelrc.filepath : undefined, ignore ? ignore.filepath : undefined, config ? config.filepath : undefined, fileHandling, files);
}
class PartialConfig {
  constructor(options, babelrc, ignore, config, fileHandling, files) {
    this.options = void 0;
    this.babelrc = void 0;
    this.babelignore = void 0;
    this.config = void 0;
    this.fileHandling = void 0;
    this.files = void 0;
    this.options = options;
    this.babelignore = ignore;
    this.babelrc = babelrc;
    this.config = config;
    this.fileHandling = fileHandling;
    this.files = files;
    Object.freeze(this);
  }
  hasFilesystemConfig() {
    return this.babelrc !== undefined || this.config !== undefined;
  }
}
Object.freeze(PartialConfig.prototype);
0 && 0;

//# sourceMappingURL=partial.js.map
