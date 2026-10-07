import { InstrumentationBase, InstrumentationNodeModuleDefinition } from '@opentelemetry/instrumentation';
import { SDK_VERSION, _INTERNAL_shouldSkipAiProviderWrapping, ANTHROPIC_AI_INTEGRATION_NAME, instrumentAnthropicAiClient } from '@sentry/core';

const supportedVersions = [">=0.19.2 <1.0.0"];
class SentryAnthropicAiInstrumentation extends InstrumentationBase {
  constructor(config = {}) {
    super("@sentry/instrumentation-anthropic-ai", SDK_VERSION, config);
  }
  /**
   * Initializes the instrumentation by defining the modules to be patched.
   */
  init() {
    const module = new InstrumentationNodeModuleDefinition(
      "@anthropic-ai/sdk",
      supportedVersions,
      this._patch.bind(this)
    );
    return module;
  }
  /**
   * Core patch logic applying instrumentation to the Anthropic AI client constructor.
   */
  _patch(exports) {
    const Original = exports.Anthropic;
    const config = this.getConfig();
    const WrappedAnthropic = function(...args) {
      if (_INTERNAL_shouldSkipAiProviderWrapping(ANTHROPIC_AI_INTEGRATION_NAME)) {
        return Reflect.construct(Original, args);
      }
      const instance = Reflect.construct(Original, args);
      return instrumentAnthropicAiClient(instance, config);
    };
    Object.setPrototypeOf(WrappedAnthropic, Original);
    Object.setPrototypeOf(WrappedAnthropic.prototype, Original.prototype);
    for (const key of Object.getOwnPropertyNames(Original)) {
      if (!["length", "name", "prototype"].includes(key)) {
        const descriptor = Object.getOwnPropertyDescriptor(Original, key);
        if (descriptor) {
          Object.defineProperty(WrappedAnthropic, key, descriptor);
        }
      }
    }
    try {
      exports.Anthropic = WrappedAnthropic;
    } catch {
      Object.defineProperty(exports, "Anthropic", {
        value: WrappedAnthropic,
        writable: true,
        configurable: true,
        enumerable: true
      });
    }
    if (exports.default === Original) {
      try {
        exports.default = WrappedAnthropic;
      } catch {
        Object.defineProperty(exports, "default", {
          value: WrappedAnthropic,
          writable: true,
          configurable: true,
          enumerable: true
        });
      }
    }
    return exports;
  }
}

export { SentryAnthropicAiInstrumentation };
//# sourceMappingURL=instrumentation.js.map
