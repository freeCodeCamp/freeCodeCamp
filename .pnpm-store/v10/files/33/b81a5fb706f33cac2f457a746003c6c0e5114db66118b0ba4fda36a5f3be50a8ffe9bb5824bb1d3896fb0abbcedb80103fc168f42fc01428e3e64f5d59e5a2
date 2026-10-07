import { GLOBAL_OBJ, debug } from '@sentry/core';
import { createAddHookMessageChannel } from 'import-in-the-middle';
import * as moduleModule from 'module';
import { supportsEsmLoaderHooks } from '../utils/detection.js';

function initializeEsmLoader() {
  if (!supportsEsmLoaderHooks()) {
    return;
  }
  if (!GLOBAL_OBJ._sentryEsmLoaderHookRegistered) {
    GLOBAL_OBJ._sentryEsmLoaderHookRegistered = true;
    try {
      const { addHookMessagePort } = createAddHookMessageChannel();
      moduleModule.register("import-in-the-middle/hook.mjs", import.meta.url, {
        data: { addHookMessagePort, include: [] },
        transferList: [addHookMessagePort]
      });
    } catch (error) {
      debug.warn("Failed to register 'import-in-the-middle' hook", error);
    }
  }
}

export { initializeEsmLoader };
//# sourceMappingURL=esmLoader.js.map
