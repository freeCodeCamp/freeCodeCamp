Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const instrumentation = require('@opentelemetry/instrumentation');
const core = require('@sentry/core');

const supportedVersions = [">=0.1.0 <2.0.0"];
function wrapRunnableMethod(originalMethod, sentryHandler, _methodName) {
  return new Proxy(originalMethod, {
    apply(target, thisArg, args) {
      const optionsIndex = 1;
      let options = args[optionsIndex];
      if (!options || typeof options !== "object" || Array.isArray(options)) {
        options = {};
        args[optionsIndex] = options;
      }
      options.callbacks = core._INTERNAL_mergeLangChainCallbackHandler(options.callbacks, sentryHandler);
      return Reflect.apply(target, thisArg, args);
    }
  });
}
class SentryLangChainInstrumentation extends instrumentation.InstrumentationBase {
  constructor(config = {}) {
    super("@sentry/instrumentation-langchain", core.SDK_VERSION, config);
  }
  /**
   * Initializes the instrumentation by defining the modules to be patched.
   * We patch the BaseChatModel class methods to inject callbacks
   *
   * We hook into provider packages (@langchain/anthropic, @langchain/openai, etc.)
   * because @langchain/core is often bundled and not loaded as a separate module
   */
  init() {
    const modules = [];
    const providerPackages = [
      "@langchain/anthropic",
      "@langchain/openai",
      "@langchain/google-genai",
      "@langchain/mistralai",
      "@langchain/google-vertexai",
      "@langchain/groq"
    ];
    for (const packageName of providerPackages) {
      modules.push(
        new instrumentation.InstrumentationNodeModuleDefinition(
          packageName,
          supportedVersions,
          this._patch.bind(this),
          (exports) => exports,
          [
            new instrumentation.InstrumentationNodeModuleFile(
              `${packageName}/dist/index.cjs`,
              supportedVersions,
              this._patch.bind(this),
              (exports) => exports
            )
          ]
        )
      );
    }
    modules.push(
      new instrumentation.InstrumentationNodeModuleDefinition(
        "langchain",
        supportedVersions,
        this._patch.bind(this),
        (exports) => exports,
        [
          // To catch the CJS build that contains ConfigurableModel / initChatModel for v1
          new instrumentation.InstrumentationNodeModuleFile(
            "langchain/dist/chat_models/universal.cjs",
            supportedVersions,
            this._patch.bind(this),
            (exports) => exports
          )
        ]
      )
    );
    return modules;
  }
  /**
   * Core patch logic - patches chat model and embedding methods
   * This is called when a LangChain provider package is loaded
   */
  _patch(exports) {
    core._INTERNAL_skipAiProviderWrapping([
      core.OPENAI_INTEGRATION_NAME,
      core.ANTHROPIC_AI_INTEGRATION_NAME,
      core.GOOGLE_GENAI_INTEGRATION_NAME
    ]);
    const config = this.getConfig();
    const sentryHandler = core.createLangChainCallbackHandler(config);
    this._patchRunnableMethods(exports, sentryHandler);
    this._patchEmbeddingsMethods(exports, config);
    return exports;
  }
  /**
   * Patches chat model methods (invoke, stream, batch) to inject Sentry callbacks
   * Finds a chat model class from the provider package exports and patches its prototype methods
   */
  _patchRunnableMethods(exports, sentryHandler) {
    const knownChatModelNames = [
      "ChatAnthropic",
      "ChatOpenAI",
      "ChatGoogleGenerativeAI",
      "ChatMistralAI",
      "ChatVertexAI",
      "ChatGroq",
      "ConfigurableModel"
    ];
    const exportsToPatch = exports.universal_exports ?? exports;
    const chatModelClass = Object.values(exportsToPatch).find((exp) => {
      return typeof exp === "function" && knownChatModelNames.includes(exp.name);
    });
    if (!chatModelClass) {
      return;
    }
    const targetProto = chatModelClass.prototype;
    if (targetProto.__sentry_patched__) {
      return;
    }
    targetProto.__sentry_patched__ = true;
    const methodsToPatch = ["invoke", "stream", "batch"];
    for (const methodName of methodsToPatch) {
      const method = targetProto[methodName];
      if (typeof method === "function") {
        targetProto[methodName] = wrapRunnableMethod(
          method,
          sentryHandler);
      }
    }
  }
  /**
   * Patches embedding class methods (embedQuery, embedDocuments) to create Sentry spans.
   *
   * Unlike chat models which use LangChain's callback system, the Embeddings base class
   * has no callback support. We wrap the methods directly on the prototype.
   *
   * Instruments any exported class whose prototype has both embedQuery and embedDocuments as functions.
   */
  _patchEmbeddingsMethods(exports, options) {
    const exportsToPatch = exports.universal_exports ?? exports;
    for (const exp of Object.values(exportsToPatch)) {
      if (typeof exp !== "function" || !exp.prototype) {
        continue;
      }
      const proto = exp.prototype;
      if (typeof proto.embedQuery !== "function" || typeof proto.embedDocuments !== "function") {
        continue;
      }
      if (proto.__sentry_patched__) {
        continue;
      }
      proto.__sentry_patched__ = true;
      core.instrumentLangChainEmbeddings(proto, options);
    }
  }
}

exports.SentryLangChainInstrumentation = SentryLangChainInstrumentation;
//# sourceMappingURL=instrumentation.js.map
