"use strict";

exports.__esModule = true;
exports.getCurrentPlatformAndTarget = getCurrentPlatformAndTarget;
exports.getFunctionsTargetPlatformAndTarget = getFunctionsTargetPlatformAndTarget;
exports.getLmdbOnCdnPath = void 0;
exports.shouldBundleDatastore = shouldBundleDatastore;
exports.shouldGenerateEngines = shouldGenerateEngines;
exports.shouldPrintEngineSnapshot = shouldPrintEngineSnapshot;
var _redux = require("../redux");
function shouldPrintEngineSnapshot() {
  return process.env.gatsby_executing_command === `build`;
}
let generate = false;
function shouldGenerateEngines() {
  return process.env.gatsby_executing_command === `build` && generate;
}
_redux.emitter.on(`CREATE_PAGE`, action => {
  if (action.payload.mode && action.payload.mode !== `SSG`) generate = true;
});
_redux.emitter.on(`SET_COMPONENT_FEATURES`, action => {
  if (action.payload.serverData) generate = true;
  if (action.payload.config) generate = true;
});
function shouldBundleDatastore() {
  return !_redux.store.getState().adapter.config.excludeDatastoreFromEngineFunction;
}
function getCDNObfuscatedPath(path) {
  return `${_redux.store.getState().status.cdnObfuscatedPrefix}-${path}`;
}
const getLmdbOnCdnPath = () => getCDNObfuscatedPath(`data.mdb`);
exports.getLmdbOnCdnPath = getLmdbOnCdnPath;
const currentTarget = {
  platform: process.platform,
  arch: process.arch
};
function getCurrentPlatformAndTarget() {
  return currentTarget;
}
function getFunctionsTargetPlatformAndTarget() {
  var _ref, _ref2, _process$env$GATSBY_F, _ref3, _ref4, _process$env$GATSBY_F2;
  const state = _redux.store.getState();
  return {
    platform: (_ref = (_ref2 = (_process$env$GATSBY_F = process.env.GATSBY_FUNCTIONS_PLATFORM) !== null && _process$env$GATSBY_F !== void 0 ? _process$env$GATSBY_F : state.program.functionsPlatform) !== null && _ref2 !== void 0 ? _ref2 : state.adapter.config.functionsPlatform) !== null && _ref !== void 0 ? _ref : currentTarget.platform,
    arch: (_ref3 = (_ref4 = (_process$env$GATSBY_F2 = process.env.GATSBY_FUNCTIONS_ARCH) !== null && _process$env$GATSBY_F2 !== void 0 ? _process$env$GATSBY_F2 : state.program.functionsArch) !== null && _ref4 !== void 0 ? _ref4 : state.adapter.config.functionsArch) !== null && _ref3 !== void 0 ? _ref3 : currentTarget.arch
  };
}
//# sourceMappingURL=engines-helpers.js.map