import { registerInstrumentations } from '@opentelemetry/instrumentation';

const INSTRUMENTED = {};
function generateInstrumentOnce(name, creatorOrClass, optionsCallback) {
  if (optionsCallback) {
    return _generateInstrumentOnceWithOptions(
      name,
      creatorOrClass,
      optionsCallback
    );
  }
  return _generateInstrumentOnce(name, creatorOrClass);
}
function _generateInstrumentOnce(name, creator) {
  return Object.assign(
    (options) => {
      const instrumented = INSTRUMENTED[name];
      if (instrumented) {
        if (options) {
          instrumented.setConfig(options);
        }
        return instrumented;
      }
      const instrumentation = creator(options);
      INSTRUMENTED[name] = instrumentation;
      registerInstrumentations({
        instrumentations: [instrumentation]
      });
      return instrumentation;
    },
    { id: name }
  );
}
function _generateInstrumentOnceWithOptions(name, instrumentationClass, optionsCallback) {
  return Object.assign(
    (_options) => {
      const options = optionsCallback(_options);
      const instrumented = INSTRUMENTED[name];
      if (instrumented) {
        instrumented.setConfig(options);
        return instrumented;
      }
      const instrumentation = new instrumentationClass(options);
      INSTRUMENTED[name] = instrumentation;
      registerInstrumentations({
        instrumentations: [instrumentation]
      });
      return instrumentation;
    },
    { id: name }
  );
}
function instrumentWhenWrapped(instrumentation) {
  let isWrapped = false;
  let callbacks = [];
  if (!hasWrap(instrumentation)) {
    isWrapped = true;
  } else {
    const originalWrap = instrumentation["_wrap"];
    instrumentation["_wrap"] = (...args) => {
      isWrapped = true;
      callbacks.forEach((callback) => callback());
      callbacks = [];
      return originalWrap(...args);
    };
  }
  const registerCallback = (callback) => {
    if (isWrapped) {
      callback();
    } else {
      callbacks.push(callback);
    }
  };
  return registerCallback;
}
function hasWrap(instrumentation) {
  return typeof instrumentation["_wrap"] === "function";
}

export { INSTRUMENTED, generateInstrumentOnce, instrumentWhenWrapped };
//# sourceMappingURL=instrument.js.map
