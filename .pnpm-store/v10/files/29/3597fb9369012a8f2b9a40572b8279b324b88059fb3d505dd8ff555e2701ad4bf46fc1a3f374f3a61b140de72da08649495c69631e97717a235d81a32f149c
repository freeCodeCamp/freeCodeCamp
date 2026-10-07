"use strict";

exports.__esModule = true;
exports.isGatsbyNodeLifecycleSupported = isGatsbyNodeLifecycleSupported;
function isGatsbyNodeLifecycleSupported(apiName) {
  var _availableAPIs, _availableAPIs$node;
  let availableAPIs;
  try {
    availableAPIs = require(`gatsby/apis.json`);
  } catch (e) {
    throw new Error(`Couldn't check available APIs. Make sure you are on gatsby version >=2.13.41`);
  }
  return !!((_availableAPIs = availableAPIs) !== null && _availableAPIs !== void 0 && (_availableAPIs$node = _availableAPIs.node) !== null && _availableAPIs$node !== void 0 && _availableAPIs$node[apiName]);
}