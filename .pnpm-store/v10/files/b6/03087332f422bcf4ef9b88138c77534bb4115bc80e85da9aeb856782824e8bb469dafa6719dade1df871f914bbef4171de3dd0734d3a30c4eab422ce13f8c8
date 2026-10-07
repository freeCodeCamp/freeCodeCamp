"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildPresetChain = buildPresetChain;
exports.buildPresetChainWalker = void 0;
exports.buildRootChain = buildRootChain;
function _path() {
  const data = require("path");
  _path = function () {
    return data;
  };
  return data;
}
function _debug() {
  const data = require("debug");
  _debug = function () {
    return data;
  };
  return data;
}
var _options = require("./validation/options.js");
var _patternToRegex = require("./pattern-to-regex.js");
var _printer = require("./printer.js");
var _rewriteStackTrace = require("../errors/rewrite-stack-trace.js");
var _configError = require("../errors/config-error.js");
var _index = require("./files/index.js");
var _caching = require("./caching.js");
var _configDescriptors = require("./config-descriptors.js");
const debug = _debug()("babel:config:config-chain");
function* buildPresetChain(arg, context) {
  const chain = yield* buildPresetChainWalker(arg, context);
  if (!chain) return null;
  return {
    plugins: dedupDescriptors(chain.plugins),
    presets: dedupDescriptors(chain.presets),
    options: chain.options.map(o => normalizeOptions(o)),
    files: new Set()
  };
}
const buildPresetChainWalker = exports.buildPresetChainWalker = makeChainWalker({
  root: preset => loadPresetDescriptors(preset),
  env: (preset, envName) => loadPresetEnvDescriptors(preset)(envName),
  overrides: (preset, index) => loadPresetOverridesDescriptors(preset)(index),
  overridesEnv: (preset, index, envName) => loadPresetOverridesEnvDescriptors(preset)(index)(envName),
  createLogger: () => () => {}
});
const loadPresetDescriptors = (0, _caching.makeWeakCacheSync)(preset => buildRootDescriptors(preset, preset.alias, _configDescriptors.createUncachedDescriptors));
const loadPresetEnvDescriptors = (0, _caching.makeWeakCacheSync)(preset => (0, _caching.makeStrongCacheSync)(envName => buildEnvDescriptors(preset, preset.alias, _configDescriptors.createUncachedDescriptors, envName)));
const loadPresetOverridesDescriptors = (0, _caching.makeWeakCacheSync)(preset => (0, _caching.makeStrongCacheSync)(index => buildOverrideDescriptors(preset, preset.alias, _configDescriptors.createUncachedDescriptors, index)));
const loadPresetOverridesEnvDescriptors = (0, _caching.makeWeakCacheSync)(preset => (0, _caching.makeStrongCacheSync)(index => (0, _caching.makeStrongCacheSync)(envName => buildOverrideEnvDescriptors(preset, preset.alias, _configDescriptors.createUncachedDescriptors, index, envName))));
function* buildRootChain(opts, context) {
  let configReport, babelRcReport;
  const programmaticLogger = new _printer.ConfigPrinter();
  const programmaticChain = yield* loadProgrammaticChain({
    options: opts,
    dirname: context.cwd
  }, context, undefined, programmaticLogger);
  if (!programmaticChain) return null;
  const programmaticReport = yield* programmaticLogger.output();
  let configFile;
  if (typeof opts.configFile === "string") {
    configFile = yield* (0, _index.loadConfig)(opts.configFile, context.cwd, context.envName, context.caller);
  } else if (opts.configFile !== false) {
    configFile = yield* (0, _index.findRootConfig)(context.root, context.envName, context.caller);
  }
  let {
    babelrc,
    babelrcRoots
  } = opts;
  let babelrcRootsDirectory = context.cwd;
  const configFileChain = emptyChain();
  const configFileLogger = new _printer.ConfigPrinter();
  if (configFile) {
    const validatedFile = validateConfigFile(configFile);
    const result = yield* loadFileChain(validatedFile, context, undefined, configFileLogger);
    if (!result) return null;
    configReport = yield* configFileLogger.output();
    if (babelrc === undefined) {
      babelrc = validatedFile.options.babelrc;
    }
    if (babelrcRoots === undefined) {
      babelrcRootsDirectory = validatedFile.dirname;
      babelrcRoots = validatedFile.options.babelrcRoots;
    }
    mergeChain(configFileChain, result);
  }
  let ignoreFile, babelrcFile;
  let isIgnored = false;
  const fileChain = emptyChain();
  if ((babelrc === true || babelrc === undefined) && typeof context.filename === "string") {
    const pkgData = yield* (0, _index.findPackageData)(context.filename);
    if (pkgData && babelrcLoadEnabled(context, pkgData, babelrcRoots, babelrcRootsDirectory)) {
      ({
        ignore: ignoreFile,
        config: babelrcFile
      } = yield* (0, _index.findRelativeConfig)(pkgData, context.envName, context.caller));
      if (ignoreFile) {
        fileChain.files.add(ignoreFile.filepath);
      }
      if (ignoreFile && shouldIgnore(context, ignoreFile.ignore, null, ignoreFile.dirname)) {
        isIgnored = true;
      }
      if (babelrcFile && !isIgnored) {
        const validatedFile = validateBabelrcFile(babelrcFile);
        const babelrcLogger = new _printer.ConfigPrinter();
        const result = yield* loadFileChain(validatedFile, context, undefined, babelrcLogger);
        if (!result) {
          isIgnored = true;
        } else {
          babelRcReport = yield* babelrcLogger.output();
          mergeChain(fileChain, result);
        }
      }
      if (babelrcFile && isIgnored) {
        fileChain.files.add(babelrcFile.filepath);
      }
    }
  }
  if (context.showConfig) {
    console.log(`Babel configs on "${context.filename}" (ascending priority):\n` + [configReport, babelRcReport, programmaticReport].filter(x => !!x).join("\n\n") + "\n-----End Babel configs-----");
  }
  const chain = mergeChain(mergeChain(mergeChain(emptyChain(), configFileChain), fileChain), programmaticChain);
  return {
    plugins: isIgnored ? [] : dedupDescriptors(chain.plugins),
    presets: isIgnored ? [] : dedupDescriptors(chain.presets),
    options: isIgnored ? [] : chain.options.map(o => normalizeOptions(o)),
    fileHandling: isIgnored ? "ignored" : "transpile",
    ignore: ignoreFile || undefined,
    babelrc: babelrcFile || undefined,
    config: configFile || undefined,
    files: chain.files
  };
}
function babelrcLoadEnabled(context, pkgData, babelrcRoots, babelrcRootsDirectory) {
  if (typeof babelrcRoots === "boolean") return babelrcRoots;
  const absoluteRoot = context.root;
  if (babelrcRoots === undefined) {
    return pkgData.directories.indexOf(absoluteRoot) !== -1;
  }
  let babelrcPatterns = babelrcRoots;
  if (!Array.isArray(babelrcPatterns)) {
    babelrcPatterns = [babelrcPatterns];
  }
  babelrcPatterns = babelrcPatterns.map(pat => {
    return typeof pat === "string" ? _path().resolve(babelrcRootsDirectory, pat) : pat;
  });
  if (babelrcPatterns.length === 1 && babelrcPatterns[0] === absoluteRoot) {
    return pkgData.directories.indexOf(absoluteRoot) !== -1;
  }
  return babelrcPatterns.some(pat => {
    if (typeof pat === "string") {
      pat = (0, _patternToRegex.default)(pat, babelrcRootsDirectory);
    }
    return pkgData.directories.some(directory => {
      return matchPattern(pat, babelrcRootsDirectory, directory, context);
    });
  });
}
const validateConfigFile = (0, _caching.makeWeakCacheSync)(file => ({
  filepath: file.filepath,
  dirname: file.dirname,
  options: (0, _options.validate)("configfile", file.options, file.filepath)
}));
const validateBabelrcFile = (0, _caching.makeWeakCacheSync)(file => ({
  filepath: file.filepath,
  dirname: file.dirname,
  options: (0, _options.validate)("babelrcfile", file.options, file.filepath)
}));
const validateExtendFile = (0, _caching.makeWeakCacheSync)(file => ({
  filepath: file.filepath,
  dirname: file.dirname,
  options: (0, _options.validate)("extendsfile", file.options, file.filepath)
}));
const loadProgrammaticChain = makeChainWalker({
  root: input => buildRootDescriptors(input, "base", _configDescriptors.createCachedDescriptors),
  env: (input, envName) => buildEnvDescriptors(input, "base", _configDescriptors.createCachedDescriptors, envName),
  overrides: (input, index) => buildOverrideDescriptors(input, "base", _configDescriptors.createCachedDescriptors, index),
  overridesEnv: (input, index, envName) => buildOverrideEnvDescriptors(input, "base", _configDescriptors.createCachedDescriptors, index, envName),
  createLogger: (input, context, baseLogger) => buildProgrammaticLogger(input, context, baseLogger)
});
const loadFileChainWalker = makeChainWalker({
  root: file => loadFileDescriptors(file),
  env: (file, envName) => loadFileEnvDescriptors(file)(envName),
  overrides: (file, index) => loadFileOverridesDescriptors(file)(index),
  overridesEnv: (file, index, envName) => loadFileOverridesEnvDescriptors(file)(index)(envName),
  createLogger: (file, context, baseLogger) => buildFileLogger(file.filepath, context, baseLogger)
});
function* loadFileChain(input, context, files, baseLogger) {
  const chain = yield* loadFileChainWalker(input, context, files, baseLogger);
  chain == null || chain.files.add(input.filepath);
  return chain;
}
const loadFileDescriptors = (0, _caching.makeWeakCacheSync)(file => buildRootDescriptors(file, file.filepath, _configDescriptors.createUncachedDescriptors));
const loadFileEnvDescriptors = (0, _caching.makeWeakCacheSync)(file => (0, _caching.makeStrongCacheSync)(envName => buildEnvDescriptors(file, file.filepath, _configDescriptors.createUncachedDescriptors, envName)));
const loadFileOverridesDescriptors = (0, _caching.makeWeakCacheSync)(file => (0, _caching.makeStrongCacheSync)(index => buildOverrideDescriptors(file, file.filepath, _configDescriptors.createUncachedDescriptors, index)));
const loadFileOverridesEnvDescriptors = (0, _caching.makeWeakCacheSync)(file => (0, _caching.makeStrongCacheSync)(index => (0, _caching.makeStrongCacheSync)(envName => buildOverrideEnvDescriptors(file, file.filepath, _configDescriptors.createUncachedDescriptors, index, envName))));
function buildFileLogger(filepath, context, baseLogger) {
  if (!baseLogger) {
    return () => {};
  }
  return baseLogger.configure(context.showConfig, _printer.ChainFormatter.Config, {
    filepath
  });
}
function buildRootDescriptors({
  dirname,
  options
}, alias, descriptors) {
  return descriptors(dirname, options, alias);
}
function buildProgrammaticLogger(_, context, baseLogger) {
  var _context$caller;
  if (!baseLogger) {
    return () => {};
  }
  return baseLogger.configure(context.showConfig, _printer.ChainFormatter.Programmatic, {
    callerName: (_context$caller = context.caller) == null ? void 0 : _context$caller.name
  });
}
function buildEnvDescriptors({
  dirname,
  options
}, alias, descriptors, envName) {
  var _options$env;
  const opts = (_options$env = options.env) == null ? void 0 : _options$env[envName];
  return opts ? descriptors(dirname, opts, `${alias}.env["${envName}"]`) : null;
}
function buildOverrideDescriptors({
  dirname,
  options
}, alias, descriptors, index) {
  var _options$overrides;
  const opts = (_options$overrides = options.overrides) == null ? void 0 : _options$overrides[index];
  if (!opts) throw new Error("Assertion failure - missing override");
  return descriptors(dirname, opts, `${alias}.overrides[${index}]`);
}
function buildOverrideEnvDescriptors({
  dirname,
  options
}, alias, descriptors, index, envName) {
  var _options$overrides2, _override$env;
  const override = (_options$overrides2 = options.overrides) == null ? void 0 : _options$overrides2[index];
  if (!override) throw new Error("Assertion failure - missing override");
  const opts = (_override$env = override.env) == null ? void 0 : _override$env[envName];
  return opts ? descriptors(dirname, opts, `${alias}.overrides[${index}].env["${envName}"]`) : null;
}
function makeChainWalker({
  root,
  env,
  overrides,
  overridesEnv,
  createLogger
}) {
  return function* chainWalker(input, context, files = new Set(), baseLogger) {
    const {
      dirname
    } = input;
    const flattenedConfigs = [];
    const rootOpts = root(input);
    if (configIsApplicable(rootOpts, dirname, context, input.filepath)) {
      flattenedConfigs.push({
        config: rootOpts,
        envName: undefined,
        index: undefined
      });
      const envOpts = env(input, context.envName);
      if (envOpts && configIsApplicable(envOpts, dirname, context, input.filepath)) {
        flattenedConfigs.push({
          config: envOpts,
          envName: context.envName,
          index: undefined
        });
      }
      (rootOpts.options.overrides || []).forEach((_, index) => {
        const overrideOps = overrides(input, index);
        if (configIsApplicable(overrideOps, dirname, context, input.filepath)) {
          flattenedConfigs.push({
            config: overrideOps,
            index,
            envName: undefined
          });
          const overrideEnvOpts = overridesEnv(input, index, context.envName);
          if (overrideEnvOpts && configIsApplicable(overrideEnvOpts, dirname, context, input.filepath)) {
            flattenedConfigs.push({
              config: overrideEnvOpts,
              index,
              envName: context.envName
            });
          }
        }
      });
    }
    if (flattenedConfigs.some(({
      config: {
        options: {
          ignore,
          only
        }
      }
    }) => shouldIgnore(context, ignore, only, dirname))) {
      return null;
    }
    const chain = emptyChain();
    const logger = createLogger(input, context, baseLogger);
    for (const {
      config,
      index,
      envName
    } of flattenedConfigs) {
      if (!(yield* mergeExtendsChain(chain, config.options, dirname, context, files, baseLogger))) {
        return null;
      }
      logger(config, index, envName);
      yield* mergeChainOpts(chain, config);
    }
    return chain;
  };
}
function* mergeExtendsChain(chain, opts, dirname, context, files, baseLogger) {
  if (opts.extends === undefined) return true;
  const file = yield* (0, _index.loadConfig)(opts.extends, dirname, context.envName, context.caller);
  if (files.has(file)) {
    throw new Error(`Configuration cycle detected loading ${file.filepath}.\n` + `File already loaded following the config chain:\n` + Array.from(files, file => ` - ${file.filepath}`).join("\n"));
  }
  files.add(file);
  const fileChain = yield* loadFileChain(validateExtendFile(file), context, files, baseLogger);
  files.delete(file);
  if (!fileChain) return false;
  mergeChain(chain, fileChain);
  return true;
}
function mergeChain(target, source) {
  target.options.push(...source.options);
  target.plugins.push(...source.plugins);
  target.presets.push(...source.presets);
  for (const file of source.files) {
    target.files.add(file);
  }
  return target;
}
function* mergeChainOpts(target, {
  options,
  plugins,
  presets
}) {
  target.options.push(options);
  target.plugins.push(...(yield* plugins()));
  target.presets.push(...(yield* presets()));
  return target;
}
function emptyChain() {
  return {
    options: [],
    presets: [],
    plugins: [],
    files: new Set()
  };
}
function normalizeOptions(opts) {
  const options = Object.assign({}, opts);
  delete options.extends;
  delete options.env;
  delete options.overrides;
  delete options.plugins;
  delete options.presets;
  delete options.passPerPreset;
  delete options.ignore;
  delete options.only;
  delete options.test;
  delete options.include;
  delete options.exclude;
  if (Object.prototype.hasOwnProperty.call(options, "sourceMap")) {
    options.sourceMaps = options.sourceMap;
    delete options.sourceMap;
  }
  return options;
}
function dedupDescriptors(items) {
  const map = new Map();
  const descriptors = [];
  for (const item of items) {
    if (typeof item.value === "function") {
      const fnKey = item.value;
      let nameMap = map.get(fnKey);
      if (!nameMap) {
        nameMap = new Map();
        map.set(fnKey, nameMap);
      }
      let desc = nameMap.get(item.name);
      if (!desc) {
        desc = {
          value: item
        };
        descriptors.push(desc);
        if (!item.ownPass) nameMap.set(item.name, desc);
      } else {
        desc.value = item;
      }
    } else {
      descriptors.push({
        value: item
      });
    }
  }
  return descriptors.reduce((acc, desc) => {
    acc.push(desc.value);
    return acc;
  }, []);
}
function configIsApplicable({
  options
}, dirname, context, configName) {
  return (options.test === undefined || configFieldIsApplicable(context, options.test, dirname, configName)) && (options.include === undefined || configFieldIsApplicable(context, options.include, dirname, configName)) && (options.exclude === undefined || !configFieldIsApplicable(context, options.exclude, dirname, configName));
}
function configFieldIsApplicable(context, test, dirname, configName) {
  const patterns = Array.isArray(test) ? test : [test];
  return matchesPatterns(context, patterns, dirname, configName);
}
function ignoreListReplacer(_key, value) {
  if (value instanceof RegExp) {
    return String(value);
  }
  return value;
}
function shouldIgnore(context, ignore, only, dirname) {
  if (ignore && matchesPatterns(context, ignore, dirname)) {
    var _context$filename;
    const message = `No config is applied to "${(_context$filename = context.filename) != null ? _context$filename : "(unknown)"}" because it matches one of \`ignore: ${JSON.stringify(ignore, ignoreListReplacer)}\` from "${dirname}"`;
    debug(message);
    if (context.showConfig) {
      console.log(message);
    }
    return true;
  }
  if (only && !matchesPatterns(context, only, dirname)) {
    var _context$filename2;
    const message = `No config is applied to "${(_context$filename2 = context.filename) != null ? _context$filename2 : "(unknown)"}" because it fails to match one of \`only: ${JSON.stringify(only, ignoreListReplacer)}\` from "${dirname}"`;
    debug(message);
    if (context.showConfig) {
      console.log(message);
    }
    return true;
  }
  return false;
}
function matchesPatterns(context, patterns, dirname, configName) {
  return patterns.some(pattern => matchPattern(pattern, dirname, context.filename, context, configName));
}
function matchPattern(pattern, dirname, pathToTest, context, configName) {
  if (typeof pattern === "function") {
    return !!(0, _rewriteStackTrace.endHiddenCallStack)(pattern)(pathToTest, {
      dirname,
      envName: context.envName,
      caller: context.caller
    });
  }
  if (typeof pathToTest !== "string") {
    throw new _configError.default(`Configuration contains string/RegExp pattern, but no filename was passed to Babel`, configName);
  }
  if (typeof pattern === "string") {
    pattern = (0, _patternToRegex.default)(pattern, dirname);
  }
  return pattern.test(pathToTest);
}
0 && 0;

//# sourceMappingURL=config-chain.js.map
