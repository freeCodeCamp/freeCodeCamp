import { InstrumentationBase, InstrumentationNodeModuleDefinition, InstrumentationNodeModuleFile } from '@opentelemetry/instrumentation';
import { SDK_VERSION, getClient, instrumentLangGraph, instrumentCreateReactAgent } from '@sentry/core';

const supportedVersions = [">=0.0.0 <2.0.0"];
class SentryLangGraphInstrumentation extends InstrumentationBase {
  constructor(config = {}) {
    super("@sentry/instrumentation-langgraph", SDK_VERSION, config);
  }
  /**
   * Initializes the instrumentation by defining the modules to be patched.
   */
  init() {
    return [
      new InstrumentationNodeModuleDefinition(
        "@langchain/langgraph",
        supportedVersions,
        this._patch.bind(this),
        (exports) => exports,
        [
          new InstrumentationNodeModuleFile(
            /**
             * In CJS, LangGraph packages re-export from dist/index.cjs files.
             * Patching only the root module sometimes misses the real implementation or
             * gets overwritten when that file is loaded. We add a file-level patch so that
             * _patch runs again on the concrete implementation
             */
            "@langchain/langgraph/dist/index.cjs",
            supportedVersions,
            this._patch.bind(this),
            (exports) => exports
          ),
          new InstrumentationNodeModuleFile(
            /**
             * In CJS, the prebuilt submodule re-exports from dist/prebuilt/index.cjs.
             * We add a file-level patch under the main module so that CJS require()
             * of @langchain/langgraph/prebuilt gets patched.
             */
            "@langchain/langgraph/dist/prebuilt/index.cjs",
            supportedVersions,
            this._patch.bind(this),
            (exports) => exports
          )
        ]
      ),
      new InstrumentationNodeModuleDefinition(
        "@langchain/langgraph/prebuilt",
        supportedVersions,
        this._patch.bind(this),
        (exports) => exports,
        [
          new InstrumentationNodeModuleFile(
            /**
             * In CJS, the prebuilt submodule re-exports from dist/prebuilt/index.cjs.
             * We add file-level patches so _patch runs on the concrete implementation.
             */
            "@langchain/langgraph/dist/prebuilt/index.cjs",
            supportedVersions,
            this._patch.bind(this),
            (exports) => exports
          )
        ]
      )
    ];
  }
  /**
   * Core patch logic applying instrumentation to the LangGraph module.
   */
  _patch(exports) {
    const client = getClient();
    const options = {
      ...this.getConfig(),
      recordInputs: this.getConfig().recordInputs ?? client?.getOptions().sendDefaultPii,
      recordOutputs: this.getConfig().recordOutputs ?? client?.getOptions().sendDefaultPii
    };
    if (exports.StateGraph && typeof exports.StateGraph === "function") {
      instrumentLangGraph(exports.StateGraph.prototype, options);
    }
    if (exports.createReactAgent && typeof exports.createReactAgent === "function") {
      const originalCreateReactAgent = exports.createReactAgent;
      Object.defineProperty(exports, "createReactAgent", {
        value: instrumentCreateReactAgent(originalCreateReactAgent, options),
        writable: true,
        enumerable: true,
        configurable: true
      });
    }
    return exports;
  }
}

export { SentryLangGraphInstrumentation };
//# sourceMappingURL=instrumentation.js.map
