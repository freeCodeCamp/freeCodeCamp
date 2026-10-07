"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createConfig = createConfig;

var _projectPath = require("./projectPath");

var _Environment = require("./Environment");

function _hash() {
  const data = require("@parcel/hash");

  _hash = function () {
    return data;
  };

  return data;
}

function createConfig({
  plugin,
  isSource,
  searchPath,
  env,
  result,
  invalidateOnFileChange,
  invalidateOnFileCreate,
  invalidateOnEnvChange,
  invalidateOnOptionChange,
  devDeps,
  invalidateOnStartup,
  invalidateOnBuild
}) {
  let environment = env !== null && env !== void 0 ? env : (0, _Environment.createEnvironment)();
  return {
    id: (0, _hash().hashString)(plugin + (0, _projectPath.fromProjectPathRelative)(searchPath) + environment.id + String(isSource)),
    isSource: isSource !== null && isSource !== void 0 ? isSource : false,
    searchPath,
    env: environment,
    result: result !== null && result !== void 0 ? result : null,
    cacheKey: null,
    invalidateOnFileChange: invalidateOnFileChange !== null && invalidateOnFileChange !== void 0 ? invalidateOnFileChange : new Set(),
    invalidateOnFileCreate: invalidateOnFileCreate !== null && invalidateOnFileCreate !== void 0 ? invalidateOnFileCreate : [],
    invalidateOnEnvChange: invalidateOnEnvChange !== null && invalidateOnEnvChange !== void 0 ? invalidateOnEnvChange : new Set(),
    invalidateOnOptionChange: invalidateOnOptionChange !== null && invalidateOnOptionChange !== void 0 ? invalidateOnOptionChange : new Set(),
    devDeps: devDeps !== null && devDeps !== void 0 ? devDeps : [],
    invalidateOnStartup: invalidateOnStartup !== null && invalidateOnStartup !== void 0 ? invalidateOnStartup : false,
    invalidateOnBuild: invalidateOnBuild !== null && invalidateOnBuild !== void 0 ? invalidateOnBuild : false
  };
}