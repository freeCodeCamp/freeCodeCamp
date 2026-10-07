Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const core = require('@sentry/core');
const nodeVersion = require('../nodeVersion.js');

function isCjs() {
  try {
    return typeof module !== "undefined" && typeof module.exports !== "undefined";
  } catch {
    return false;
  }
}
let hasWarnedAboutNodeVersion;
function supportsEsmLoaderHooks() {
  if (isCjs()) {
    return false;
  }
  if (nodeVersion.NODE_MAJOR >= 21 || nodeVersion.NODE_MAJOR === 20 && nodeVersion.NODE_MINOR >= 6 || nodeVersion.NODE_MAJOR === 18 && nodeVersion.NODE_MINOR >= 19) {
    return true;
  }
  if (!hasWarnedAboutNodeVersion) {
    hasWarnedAboutNodeVersion = true;
    core.consoleSandbox(() => {
      console.warn(
        `[Sentry] You are using Node.js v${process.versions.node} in ESM mode ("import syntax"). The Sentry Node.js SDK is not compatible with ESM in Node.js versions before 18.19.0 or before 20.6.0. Please either build your application with CommonJS ("require() syntax"), or upgrade your Node.js version.`
      );
    });
  }
  return false;
}

exports.isCjs = isCjs;
exports.supportsEsmLoaderHooks = supportsEsmLoaderHooks;
//# sourceMappingURL=detection.js.map
