Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const instrumentation = require('@opentelemetry/instrumentation');
const core = require('@sentry/core');

const supportedVersions = [">=4.0.0 <7"];
class SentryOpenAiInstrumentation extends instrumentation.InstrumentationBase {
  constructor(config = {}) {
    super("@sentry/instrumentation-openai", core.SDK_VERSION, config);
  }
  /**
   * Initializes the instrumentation by defining the modules to be patched.
   */
  init() {
    const module = new instrumentation.InstrumentationNodeModuleDefinition("openai", supportedVersions, this._patch.bind(this));
    return module;
  }
  /**
   * Core patch logic applying instrumentation to the OpenAI and AzureOpenAI client constructors.
   */
  _patch(exports) {
    let result = exports;
    result = this._patchClient(result, "OpenAI");
    result = this._patchClient(result, "AzureOpenAI");
    return result;
  }
  /**
   * Patch logic applying instrumentation to the specified client constructor.
   */
  _patchClient(exports, exportKey) {
    const Original = exports[exportKey];
    if (!Original) {
      return exports;
    }
    const config = this.getConfig();
    const WrappedOpenAI = function(...args) {
      if (core._INTERNAL_shouldSkipAiProviderWrapping(core.OPENAI_INTEGRATION_NAME)) {
        return Reflect.construct(Original, args);
      }
      const instance = Reflect.construct(Original, args);
      return core.instrumentOpenAiClient(instance, config);
    };
    Object.setPrototypeOf(WrappedOpenAI, Original);
    Object.setPrototypeOf(WrappedOpenAI.prototype, Original.prototype);
    for (const key of Object.getOwnPropertyNames(Original)) {
      if (!["length", "name", "prototype"].includes(key)) {
        const descriptor = Object.getOwnPropertyDescriptor(Original, key);
        if (descriptor) {
          Object.defineProperty(WrappedOpenAI, key, descriptor);
        }
      }
    }
    try {
      exports[exportKey] = WrappedOpenAI;
    } catch {
      Object.defineProperty(exports, exportKey, {
        value: WrappedOpenAI,
        writable: true,
        configurable: true,
        enumerable: true
      });
    }
    if (exports.default === Original) {
      try {
        exports.default = WrappedOpenAI;
      } catch {
        Object.defineProperty(exports, "default", {
          value: WrappedOpenAI,
          writable: true,
          configurable: true,
          enumerable: true
        });
      }
    }
    return exports;
  }
}

exports.SentryOpenAiInstrumentation = SentryOpenAiInstrumentation;
//# sourceMappingURL=instrumentation.js.map
