Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const debugBuild = require('../debug-build.js');
const globalError = require('../instrument/globalError.js');
const globalUnhandledRejection = require('../instrument/globalUnhandledRejection.js');
const debugLogger = require('../utils/debug-logger.js');
const spanUtils = require('../utils/spanUtils.js');
const spanstatus = require('./spanstatus.js');

let errorsInstrumented = false;
function registerSpanErrorInstrumentation() {
  if (errorsInstrumented) {
    return;
  }
  function errorCallback() {
    const activeSpan = spanUtils.getActiveSpan();
    const rootSpan = activeSpan && spanUtils.getRootSpan(activeSpan);
    if (rootSpan) {
      const message = "internal_error";
      debugBuild.DEBUG_BUILD && debugLogger.debug.log(`[Tracing] Root span: ${message} -> Global error occurred`);
      rootSpan.setStatus({ code: spanstatus.SPAN_STATUS_ERROR, message });
    }
  }
  errorsInstrumented = true;
  globalError.addGlobalErrorInstrumentationHandler(errorCallback);
  globalUnhandledRejection.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
}

exports.registerSpanErrorInstrumentation = registerSpanErrorInstrumentation;
//# sourceMappingURL=errors.js.map
