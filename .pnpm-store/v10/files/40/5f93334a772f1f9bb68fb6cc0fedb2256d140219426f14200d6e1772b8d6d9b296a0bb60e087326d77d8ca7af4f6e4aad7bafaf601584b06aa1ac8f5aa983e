import { InstrumentationBase, InstrumentationNodeModuleDefinition, InstrumentationNodeModuleFile } from '@opentelemetry/instrumentation';
import { SDK_VERSION, replaceExports, _INTERNAL_shouldSkipAiProviderWrapping, GOOGLE_GENAI_INTEGRATION_NAME, instrumentGoogleGenAIClient } from '@sentry/core';

const supportedVersions = [">=0.10.0 <2"];
class SentryGoogleGenAiInstrumentation extends InstrumentationBase {
  constructor(config = {}) {
    super("@sentry/instrumentation-google-genai", SDK_VERSION, config);
  }
  /**
   * Initializes the instrumentation by defining the modules to be patched.
   */
  init() {
    const module = new InstrumentationNodeModuleDefinition(
      "@google/genai",
      supportedVersions,
      (exports) => this._patch(exports),
      (exports) => exports,
      // In CJS, @google/genai re-exports from (dist/node/index.cjs) file.
      // Patching only the root module sometimes misses the real implementation or
      // gets overwritten when that file is loaded. We add a file-level patch so that
      // _patch runs again on the concrete implementation
      [
        new InstrumentationNodeModuleFile(
          "@google/genai/dist/node/index.cjs",
          supportedVersions,
          (exports) => this._patch(exports),
          (exports) => exports
        )
      ]
    );
    return module;
  }
  /**
   * Core patch logic applying instrumentation to the Google GenAI client constructor.
   */
  _patch(exports) {
    const Original = exports.GoogleGenAI;
    const config = this.getConfig();
    if (typeof Original !== "function") {
      return exports;
    }
    const WrappedGoogleGenAI = function(...args) {
      if (_INTERNAL_shouldSkipAiProviderWrapping(GOOGLE_GENAI_INTEGRATION_NAME)) {
        return Reflect.construct(Original, args);
      }
      const instance = Reflect.construct(Original, args);
      return instrumentGoogleGenAIClient(instance, config);
    };
    Object.setPrototypeOf(WrappedGoogleGenAI, Original);
    Object.setPrototypeOf(WrappedGoogleGenAI.prototype, Original.prototype);
    for (const key of Object.getOwnPropertyNames(Original)) {
      if (!["length", "name", "prototype"].includes(key)) {
        const descriptor = Object.getOwnPropertyDescriptor(Original, key);
        if (descriptor) {
          Object.defineProperty(WrappedGoogleGenAI, key, descriptor);
        }
      }
    }
    replaceExports(exports, "GoogleGenAI", WrappedGoogleGenAI);
    return exports;
  }
}

export { SentryGoogleGenAiInstrumentation };
//# sourceMappingURL=instrumentation.js.map
