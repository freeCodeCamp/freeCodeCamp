"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.run = run;
function _traverse() {
  const data = require("@babel/traverse");
  _traverse = function () {
    return data;
  };
  return data;
}
var _pluginPass = require("./plugin-pass.js");
var _blockHoistPlugin = require("./block-hoist-plugin.js");
var _normalizeOpts = require("./normalize-opts.js");
var _normalizeFile = require("./normalize-file.js");
var _generate = require("./file/generate.js");
var _deepArray = require("../config/helpers/deep-array.js");
var _async = require("../gensync-utils/async.js");
function* run(config, code, ast) {
  const file = yield* (0, _normalizeFile.default)(config.passes, (0, _normalizeOpts.default)(config), code, ast);
  const opts = file.opts;
  try {
    yield* transformFile(file, config.passes);
  } catch (e) {
    var _opts$filename;
    e.message = `${(_opts$filename = opts.filename) != null ? _opts$filename : "unknown file"}: ${e.message}`;
    if (!e.code) {
      e.code = "BABEL_TRANSFORM_ERROR";
    }
    throw e;
  }
  let outputCode, outputMap;
  try {
    if (opts.code !== false) {
      ({
        outputCode,
        outputMap
      } = (0, _generate.default)(config.passes, file));
    }
  } catch (e) {
    var _opts$filename2;
    e.message = `${(_opts$filename2 = opts.filename) != null ? _opts$filename2 : "unknown file"}: ${e.message}`;
    if (!e.code) {
      e.code = "BABEL_GENERATE_ERROR";
    }
    throw e;
  }
  return {
    metadata: file.metadata,
    options: opts,
    ast: opts.ast === true ? file.ast : null,
    code: outputCode === undefined ? null : outputCode,
    map: outputMap === undefined ? null : outputMap,
    sourceType: file.ast.program.sourceType,
    externalDependencies: (0, _deepArray.flattenToSet)(config.externalDependencies)
  };
}
function* transformFile(file, pluginPasses) {
  const async = yield* (0, _async.isAsync)();
  for (const pluginPairs of pluginPasses) {
    const passPairs = [];
    const passes = [];
    const visitors = [];
    for (const plugin of pluginPairs.concat([(0, _blockHoistPlugin.default)()])) {
      const pass = new _pluginPass.default(file, plugin.key, plugin.options, async);
      passPairs.push([plugin, pass]);
      passes.push(pass);
      visitors.push(plugin.visitor);
    }
    for (const [plugin, pass] of passPairs) {
      if (plugin.pre) {
        const fn = (0, _async.maybeAsync)(plugin.pre, `You appear to be using an async plugin/preset, but Babel has been called synchronously`);
        yield* fn.call(pass, file);
      }
    }
    const visitor = _traverse().default.visitors.merge(visitors, passes, file.opts.wrapPluginVisitorMethod);
    {
      (0, _traverse().default)(file.ast, visitor, file.scope);
    }
    for (const [plugin, pass] of passPairs) {
      if (plugin.post) {
        const fn = (0, _async.maybeAsync)(plugin.post, `You appear to be using an async plugin/preset, but Babel has been called synchronously`);
        yield* fn.call(pass, file);
      }
    }
  }
}
0 && 0;

//# sourceMappingURL=index.js.map
