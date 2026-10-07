"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configure = configure;
exports.getConfig = getConfig;
var _dom = require("@testing-library/dom");
let configForRTL = {
  reactStrictMode: false
};
function getConfig() {
  return {
    ...(0, _dom.getConfig)(),
    ...configForRTL
  };
}
function configure(newConfig) {
  if (typeof newConfig === 'function') {
    // Pass the existing config out to the provided function
    // and accept a delta in return
    newConfig = newConfig(getConfig());
  }
  const {
    reactStrictMode,
    ...configForDTL
  } = newConfig;
  (0, _dom.configure)(configForDTL);
  configForRTL = {
    ...configForRTL,
    reactStrictMode
  };
}