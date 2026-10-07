"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generateCode;
function _convertSourceMap() {
  const data = require("convert-source-map");
  _convertSourceMap = function () {
    return data;
  };
  return data;
}
function _generator() {
  const data = require("@babel/generator");
  _generator = function () {
    return data;
  };
  return data;
}
var _mergeMap = require("./merge-map.js");
function generateCode(pluginPasses, file) {
  const {
    opts,
    ast,
    code,
    inputMap
  } = file;
  const {
    generatorOpts
  } = opts;
  generatorOpts.inputSourceMap = inputMap == null ? void 0 : inputMap.toObject();
  const results = [];
  for (const plugins of pluginPasses) {
    for (const plugin of plugins) {
      const {
        generatorOverride
      } = plugin;
      if (generatorOverride) {
        const result = generatorOverride(ast, generatorOpts, code, _generator().default);
        if (result !== undefined) results.push(result);
      }
    }
  }
  let result;
  if (results.length === 0) {
    result = (0, _generator().default)(ast, generatorOpts, code);
  } else if (results.length === 1) {
    result = results[0];
    if (typeof result.then === "function") {
      throw new Error(`You appear to be using an async codegen plugin, ` + `which your current version of Babel does not support. ` + `If you're using a published plugin, ` + `you may need to upgrade your @babel/core version.`);
    }
  } else {
    throw new Error("More than one plugin attempted to override codegen.");
  }
  let {
    code: outputCode,
    decodedMap: outputMap = result.map
  } = result;
  if (result.__mergedMap) {
    outputMap = Object.assign({}, result.map);
  } else {
    if (outputMap) {
      if (inputMap) {
        outputMap = (0, _mergeMap.default)(inputMap.toObject(), outputMap, generatorOpts.sourceFileName);
      } else {
        outputMap = result.map;
      }
    }
  }
  if (opts.sourceMaps === "inline" || opts.sourceMaps === "both") {
    outputCode += "\n" + _convertSourceMap().fromObject(outputMap).toComment();
  }
  if (opts.sourceMaps === "inline") {
    outputMap = null;
  }
  return {
    outputCode,
    outputMap
  };
}
0 && 0;

//# sourceMappingURL=generate.js.map
