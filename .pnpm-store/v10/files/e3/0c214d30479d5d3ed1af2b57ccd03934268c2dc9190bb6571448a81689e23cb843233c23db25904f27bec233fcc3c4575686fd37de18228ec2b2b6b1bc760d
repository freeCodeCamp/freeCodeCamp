Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const api = require('@opentelemetry/api');
const instrumentation = require('@opentelemetry/instrumentation');
const global = require('./global.js');
const activeTracingHelper = require('./active-tracing-helper.js');
const constants = require('./constants.js');

class PrismaInstrumentation extends instrumentation.InstrumentationBase {
  constructor(config = {}) {
    super(constants.NAME, constants.VERSION, config);
  }
  setTracerProvider(tracerProvider) {
    this.tracerProvider = tracerProvider;
  }
  init() {
    const module = new instrumentation.InstrumentationNodeModuleDefinition(constants.MODULE_NAME, constants.SUPPORTED_MODULE_VERSIONS);
    return [module];
  }
  enable() {
    const config = this._config;
    global.setGlobalTracingHelper(
      new activeTracingHelper.ActiveTracingHelper({
        tracerProvider: this.tracerProvider ?? api.trace.getTracerProvider(),
        ignoreSpanTypes: config.ignoreSpanTypes ?? []
      })
    );
  }
  disable() {
    global.clearGlobalTracingHelper();
  }
  isEnabled() {
    return global.getGlobalTracingHelper() !== void 0;
  }
}

exports.PrismaInstrumentation = PrismaInstrumentation;
//# sourceMappingURL=instrumentation.js.map
