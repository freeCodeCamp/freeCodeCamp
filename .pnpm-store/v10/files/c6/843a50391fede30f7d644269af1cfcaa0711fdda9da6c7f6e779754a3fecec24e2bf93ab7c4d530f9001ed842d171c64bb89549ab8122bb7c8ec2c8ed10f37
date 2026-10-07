import { defineIntegration, captureException, flush, SEMANTIC_ATTRIBUTE_SENTRY_OP } from '@sentry/core';
import { generateInstrumentOnce, addOriginToSpan } from '@sentry/node-core';
import { FirebaseInstrumentation } from './otel/firebaseInstrumentation.js';

const INTEGRATION_NAME = "Firebase";
const config = {
  firestoreSpanCreationHook: (span) => {
    addOriginToSpan(span, "auto.firebase.otel.firestore");
    span.setAttribute(SEMANTIC_ATTRIBUTE_SENTRY_OP, "db.query");
  },
  functions: {
    requestHook: (span) => {
      addOriginToSpan(span, "auto.firebase.otel.functions");
      span.setAttribute(SEMANTIC_ATTRIBUTE_SENTRY_OP, "http.request");
    },
    errorHook: async (_, error) => {
      if (error) {
        captureException(error, {
          mechanism: {
            type: "auto.firebase.otel.functions",
            handled: false
          }
        });
        await flush(2e3);
      }
    }
  }
};
const instrumentFirebase = generateInstrumentOnce(INTEGRATION_NAME, () => new FirebaseInstrumentation(config));
const _firebaseIntegration = (() => {
  return {
    name: INTEGRATION_NAME,
    setupOnce() {
      instrumentFirebase();
    }
  };
});
const firebaseIntegration = defineIntegration(_firebaseIntegration);

export { firebaseIntegration, instrumentFirebase };
//# sourceMappingURL=firebase.js.map
