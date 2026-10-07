Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const instrumentation = require('@opentelemetry/instrumentation');
const core = require('@sentry/core');
const firestore = require('./patches/firestore.js');
const functions = require('./patches/functions.js');

const DefaultFirebaseInstrumentationConfig = {};
const firestoreSupportedVersions = [">=3.0.0 <5"];
const functionsSupportedVersions = [">=6.0.0 <7"];
class FirebaseInstrumentation extends instrumentation.InstrumentationBase {
  constructor(config = DefaultFirebaseInstrumentationConfig) {
    super("@sentry/instrumentation-firebase", core.SDK_VERSION, config);
  }
  /**
   * sets config
   * @param config
   */
  setConfig(config = {}) {
    super.setConfig({ ...DefaultFirebaseInstrumentationConfig, ...config });
  }
  /**
   *
   * @protected
   */
  // eslint-disable-next-line @typescript-eslint/naming-convention
  init() {
    const modules = [];
    modules.push(firestore.patchFirestore(this.tracer, firestoreSupportedVersions, this._wrap, this._unwrap, this.getConfig()));
    modules.push(functions.patchFunctions(this.tracer, functionsSupportedVersions, this._wrap, this._unwrap, this.getConfig()));
    return modules;
  }
}

exports.FirebaseInstrumentation = FirebaseInstrumentation;
//# sourceMappingURL=firebaseInstrumentation.js.map
