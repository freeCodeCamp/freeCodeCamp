import { consoleSandbox } from '@sentry/core';
import { NODE_MAJOR, NODE_MINOR } from '../nodeVersion.js';

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
  if (NODE_MAJOR >= 21 || NODE_MAJOR === 20 && NODE_MINOR >= 6 || NODE_MAJOR === 18 && NODE_MINOR >= 19) {
    return true;
  }
  if (!hasWarnedAboutNodeVersion) {
    hasWarnedAboutNodeVersion = true;
    consoleSandbox(() => {
      console.warn(
        `[Sentry] You are using Node.js v${process.versions.node} in ESM mode ("import syntax"). The Sentry Node.js SDK is not compatible with ESM in Node.js versions before 18.19.0 or before 20.6.0. Please either build your application with CommonJS ("require() syntax"), or upgrade your Node.js version.`
      );
    });
  }
  return false;
}

export { isCjs, supportsEsmLoaderHooks };
//# sourceMappingURL=detection.js.map
