Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const core = require('@sentry/core');
const importInTheMiddle = require('import-in-the-middle');
const moduleModule = require('module');
const detection = require('../utils/detection.js');

var _documentCurrentScript = typeof document !== 'undefined' ? document.currentScript : null;
function initializeEsmLoader() {
  if (!detection.supportsEsmLoaderHooks()) {
    return;
  }
  if (!core.GLOBAL_OBJ._sentryEsmLoaderHookRegistered) {
    core.GLOBAL_OBJ._sentryEsmLoaderHookRegistered = true;
    try {
      const { addHookMessagePort } = importInTheMiddle.createAddHookMessageChannel();
      moduleModule.register("import-in-the-middle/hook.mjs", (typeof document === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : (_documentCurrentScript && _documentCurrentScript.tagName.toUpperCase() === 'SCRIPT' && _documentCurrentScript.src || new URL('sdk/esmLoader.js', document.baseURI).href)), {
        data: { addHookMessagePort, include: [] },
        transferList: [addHookMessagePort]
      });
    } catch (error) {
      core.debug.warn("Failed to register 'import-in-the-middle' hook", error);
    }
  }
}

exports.initializeEsmLoader = initializeEsmLoader;
//# sourceMappingURL=esmLoader.js.map
