import { GLOBAL_OBJ } from '../utils/worldwide.js';
import { addHandler, maybeInstrument, triggerHandlers } from './handlers.js';

let _oldOnErrorHandler = null;
function addGlobalErrorInstrumentationHandler(handler) {
  const type = "error";
  addHandler(type, handler);
  maybeInstrument(type, instrumentError);
}
function instrumentError() {
  _oldOnErrorHandler = GLOBAL_OBJ.onerror;
  GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    const handlerData = {
      column,
      error,
      line,
      msg,
      url
    };
    triggerHandlers("error", handlerData);
    if (_oldOnErrorHandler) {
      return _oldOnErrorHandler.apply(this, arguments);
    }
    return false;
  };
  GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}

export { addGlobalErrorInstrumentationHandler };
//# sourceMappingURL=globalError.js.map
