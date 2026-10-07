Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const worldwide = require('../utils/worldwide.js');
const handlers = require('./handlers.js');

let _oldOnUnhandledRejectionHandler = null;
function addGlobalUnhandledRejectionInstrumentationHandler(handler) {
  const type = "unhandledrejection";
  handlers.addHandler(type, handler);
  handlers.maybeInstrument(type, instrumentUnhandledRejection);
}
function instrumentUnhandledRejection() {
  _oldOnUnhandledRejectionHandler = worldwide.GLOBAL_OBJ.onunhandledrejection;
  worldwide.GLOBAL_OBJ.onunhandledrejection = function(e) {
    const handlerData = e;
    handlers.triggerHandlers("unhandledrejection", handlerData);
    if (_oldOnUnhandledRejectionHandler) {
      return _oldOnUnhandledRejectionHandler.apply(this, arguments);
    }
    return true;
  };
  worldwide.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}

exports.addGlobalUnhandledRejectionInstrumentationHandler = addGlobalUnhandledRejectionInstrumentationHandler;
//# sourceMappingURL=globalUnhandledRejection.js.map
