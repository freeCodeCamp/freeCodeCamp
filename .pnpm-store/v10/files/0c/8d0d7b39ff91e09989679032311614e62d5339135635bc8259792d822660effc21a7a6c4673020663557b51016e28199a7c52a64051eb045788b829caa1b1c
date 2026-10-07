import { InstrumentationBase } from '@opentelemetry/instrumentation';
import { SDK_VERSION } from '@sentry/core';
import { patchFirestore } from './patches/firestore.js';
import { patchFunctions } from './patches/functions.js';

const DefaultFirebaseInstrumentationConfig = {};
const firestoreSupportedVersions = [">=3.0.0 <5"];
const functionsSupportedVersions = [">=6.0.0 <7"];
class FirebaseInstrumentation extends InstrumentationBase {
  constructor(config = DefaultFirebaseInstrumentationConfig) {
    super("@sentry/instrumentation-firebase", SDK_VERSION, config);
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
    modules.push(patchFirestore(this.tracer, firestoreSupportedVersions, this._wrap, this._unwrap, this.getConfig()));
    modules.push(patchFunctions(this.tracer, functionsSupportedVersions, this._wrap, this._unwrap, this.getConfig()));
    return modules;
  }
}

export { FirebaseInstrumentation };
//# sourceMappingURL=firebaseInstrumentation.js.map
