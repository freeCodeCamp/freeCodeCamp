Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const core = require('@sentry/core');
const nodeCore = require('@sentry/node-core');
const firebaseInstrumentation = require('./otel/firebaseInstrumentation.js');

const INTEGRATION_NAME = "Firebase";
const config = {
  firestoreSpanCreationHook: (span) => {
    nodeCore.addOriginToSpan(span, "auto.firebase.otel.firestore");
    span.setAttribute(core.SEMANTIC_ATTRIBUTE_SENTRY_OP, "db.query");
  },
  functions: {
    requestHook: (span) => {
      nodeCore.addOriginToSpan(span, "auto.firebase.otel.functions");
      span.setAttribute(core.SEMANTIC_ATTRIBUTE_SENTRY_OP, "http.request");
    },
    errorHook: async (_, error) => {
      if (error) {
        core.captureException(error, {
          mechanism: {
            type: "auto.firebase.otel.functions",
            handled: false
          }
        });
        await core.flush(2e3);
      }
    }
  }
};
const instrumentFirebase = nodeCore.generateInstrumentOnce(INTEGRATION_NAME, () => new firebaseInstrumentation.FirebaseInstrumentation(config));
const _firebaseIntegration = (() => {
  return {
    name: INTEGRATION_NAME,
    setupOnce() {
      instrumentFirebase();
    }
  };
});
const firebaseIntegration = core.defineIntegration(_firebaseIntegration);

exports.firebaseIntegration = firebaseIntegration;
exports.instrumentFirebase = instrumentFirebase;
//# sourceMappingURL=firebase.js.map
