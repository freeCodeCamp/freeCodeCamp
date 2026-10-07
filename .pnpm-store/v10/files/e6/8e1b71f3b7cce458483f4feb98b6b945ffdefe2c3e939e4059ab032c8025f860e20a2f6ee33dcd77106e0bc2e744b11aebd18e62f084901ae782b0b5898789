Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const worldwide = require('../utils/worldwide.js');
const handlers = require('./handlers.js');

let _oldOnErrorHandler = null;
function addGlobalErrorInstrumentationHandler(handler) {
  const type = "error";
  handlers.addHandler(type, handler);
  handlers.maybeInstrument(type, instrumentError);
}
function instrumentError() {
  _oldOnErrorHandler = worldwide.GLOBAL_OBJ.onerror;
  worldwide.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    const handlerData = {
      column,
      error,
      line,
      msg,
      url
    };
    handlers.triggerHandlers("error", handlerData);
    if (_oldOnErrorHandler) {
      return _oldOnErrorHandler.apply(this, arguments);
    }
    return false;
  };
  worldwide.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}

exports.addGlobalErrorInstrumentationHandler = addGlobalErrorInstrumentationHandler;
//# sourceMappingURL=globalError.js.map
