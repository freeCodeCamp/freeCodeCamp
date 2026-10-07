import { trace } from '@opentelemetry/api';
import { InstrumentationBase, InstrumentationNodeModuleDefinition } from '@opentelemetry/instrumentation';
import { setGlobalTracingHelper, clearGlobalTracingHelper, getGlobalTracingHelper } from './global.js';
import { ActiveTracingHelper } from './active-tracing-helper.js';
import { NAME, VERSION, MODULE_NAME, SUPPORTED_MODULE_VERSIONS } from './constants.js';

class PrismaInstrumentation extends InstrumentationBase {
  constructor(config = {}) {
    super(NAME, VERSION, config);
  }
  setTracerProvider(tracerProvider) {
    this.tracerProvider = tracerProvider;
  }
  init() {
    const module = new InstrumentationNodeModuleDefinition(MODULE_NAME, SUPPORTED_MODULE_VERSIONS);
    return [module];
  }
  enable() {
    const config = this._config;
    setGlobalTracingHelper(
      new ActiveTracingHelper({
        tracerProvider: this.tracerProvider ?? trace.getTracerProvider(),
        ignoreSpanTypes: config.ignoreSpanTypes ?? []
      })
    );
  }
  disable() {
    clearGlobalTracingHelper();
  }
  isEnabled() {
    return getGlobalTracingHelper() !== void 0;
  }
}

export { PrismaInstrumentation };
//# sourceMappingURL=instrumentation.js.map
