import { DEBUG_BUILD } from '../debug-build.js';
import { addGlobalErrorInstrumentationHandler } from '../instrument/globalError.js';
import { addGlobalUnhandledRejectionInstrumentationHandler } from '../instrument/globalUnhandledRejection.js';
import { debug } from '../utils/debug-logger.js';
import { getActiveSpan, getRootSpan } from '../utils/spanUtils.js';
import { SPAN_STATUS_ERROR } from './spanstatus.js';

let errorsInstrumented = false;
function registerSpanErrorInstrumentation() {
  if (errorsInstrumented) {
    return;
  }
  function errorCallback() {
    const activeSpan = getActiveSpan();
    const rootSpan = activeSpan && getRootSpan(activeSpan);
    if (rootSpan) {
      const message = "internal_error";
      DEBUG_BUILD && debug.log(`[Tracing] Root span: ${message} -> Global error occurred`);
      rootSpan.setStatus({ code: SPAN_STATUS_ERROR, message });
    }
  }
  errorsInstrumented = true;
  addGlobalErrorInstrumentationHandler(errorCallback);
  addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
}

export { registerSpanErrorInstrumentation };
//# sourceMappingURL=errors.js.map
