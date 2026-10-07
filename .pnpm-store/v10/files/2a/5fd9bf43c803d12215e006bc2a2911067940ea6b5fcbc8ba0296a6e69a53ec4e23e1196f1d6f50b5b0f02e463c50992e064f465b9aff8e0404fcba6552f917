import * as net from 'node:net';
import { SpanKind, context, trace, diag } from '@opentelemetry/api';
import { InstrumentationNodeModuleDefinition, InstrumentationNodeModuleFile, isWrapped, safeExecuteInTheMiddle } from '@opentelemetry/instrumentation';
import { ATTR_DB_OPERATION_NAME, ATTR_DB_NAMESPACE, ATTR_DB_COLLECTION_NAME, ATTR_DB_SYSTEM_NAME, ATTR_SERVER_ADDRESS, ATTR_SERVER_PORT } from '@opentelemetry/semantic-conventions';

function patchFirestore(tracer, firestoreSupportedVersions, wrap, unwrap, config) {
  const defaultFirestoreSpanCreationHook = () => {
  };
  let firestoreSpanCreationHook = defaultFirestoreSpanCreationHook;
  const configFirestoreSpanCreationHook = config.firestoreSpanCreationHook;
  if (typeof configFirestoreSpanCreationHook === "function") {
    firestoreSpanCreationHook = (span) => {
      safeExecuteInTheMiddle(
        () => configFirestoreSpanCreationHook(span),
        (error) => {
          if (!error) {
            return;
          }
          diag.error(error?.message);
        },
        true
      );
    };
  }
  const moduleFirestoreCJS = new InstrumentationNodeModuleDefinition(
    "@firebase/firestore",
    firestoreSupportedVersions,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (moduleExports) => wrapMethods(moduleExports, wrap, unwrap, tracer, firestoreSpanCreationHook)
  );
  const files = [
    "@firebase/firestore/dist/lite/index.node.cjs.js",
    "@firebase/firestore/dist/lite/index.node.mjs.js",
    "@firebase/firestore/dist/lite/index.rn.esm2017.js",
    "@firebase/firestore/dist/lite/index.cjs.js"
  ];
  for (const file of files) {
    moduleFirestoreCJS.files.push(
      new InstrumentationNodeModuleFile(
        file,
        firestoreSupportedVersions,
        (moduleExports) => wrapMethods(moduleExports, wrap, unwrap, tracer, firestoreSpanCreationHook),
        (moduleExports) => unwrapMethods(moduleExports, unwrap)
      )
    );
  }
  return moduleFirestoreCJS;
}
function wrapMethods(moduleExports, wrap, unwrap, tracer, firestoreSpanCreationHook) {
  unwrapMethods(moduleExports, unwrap);
  wrap(moduleExports, "addDoc", patchAddDoc(tracer, firestoreSpanCreationHook));
  wrap(moduleExports, "getDocs", patchGetDocs(tracer, firestoreSpanCreationHook));
  wrap(moduleExports, "setDoc", patchSetDoc(tracer, firestoreSpanCreationHook));
  wrap(moduleExports, "deleteDoc", patchDeleteDoc(tracer, firestoreSpanCreationHook));
  return moduleExports;
}
function unwrapMethods(moduleExports, unwrap) {
  for (const method of ["addDoc", "getDocs", "setDoc", "deleteDoc"]) {
    if (isWrapped(moduleExports[method])) {
      unwrap(moduleExports, method);
    }
  }
  return moduleExports;
}
function patchAddDoc(tracer, firestoreSpanCreationHook) {
  return function addDoc(original) {
    return function(reference, data) {
      const span = startDBSpan(tracer, "addDoc", reference);
      firestoreSpanCreationHook(span);
      return executeContextWithSpan(span, () => {
        return original(reference, data);
      });
    };
  };
}
function patchDeleteDoc(tracer, firestoreSpanCreationHook) {
  return function deleteDoc(original) {
    return function(reference) {
      const span = startDBSpan(tracer, "deleteDoc", reference.parent || reference);
      firestoreSpanCreationHook(span);
      return executeContextWithSpan(span, () => {
        return original(reference);
      });
    };
  };
}
function patchGetDocs(tracer, firestoreSpanCreationHook) {
  return function getDocs(original) {
    return function(reference) {
      const span = startDBSpan(tracer, "getDocs", reference);
      firestoreSpanCreationHook(span);
      return executeContextWithSpan(span, () => {
        return original(reference);
      });
    };
  };
}
function patchSetDoc(tracer, firestoreSpanCreationHook) {
  return function setDoc(original) {
    return function(reference, data, options) {
      const span = startDBSpan(tracer, "setDoc", reference.parent || reference);
      firestoreSpanCreationHook(span);
      return executeContextWithSpan(span, () => {
        return typeof options !== "undefined" ? original(reference, data, options) : original(reference, data);
      });
    };
  };
}
function executeContextWithSpan(span, callback) {
  return context.with(trace.setSpan(context.active(), span), () => {
    return safeExecuteInTheMiddle(
      () => {
        return callback();
      },
      (err) => {
        if (err) {
          span.recordException(err);
        }
        span.end();
      },
      true
    );
  });
}
function startDBSpan(tracer, spanName, reference) {
  const span = tracer.startSpan(`${spanName} ${reference.path}`, { kind: SpanKind.CLIENT });
  addAttributes(span, reference);
  span.setAttribute(ATTR_DB_OPERATION_NAME, spanName);
  return span;
}
function getPortAndAddress(settings) {
  let address;
  let port;
  if (typeof settings.host === "string") {
    if (settings.host.startsWith("[")) {
      if (settings.host.endsWith("]")) {
        address = settings.host.replace(/^\[|\]$/g, "");
      } else if (settings.host.includes("]:")) {
        const lastColonIndex = settings.host.lastIndexOf(":");
        if (lastColonIndex !== -1) {
          address = settings.host.slice(1, lastColonIndex).replace(/^\[|\]$/g, "");
          port = settings.host.slice(lastColonIndex + 1);
        }
      }
    } else {
      if (net.isIPv6(settings.host)) {
        address = settings.host;
      } else {
        const lastColonIndex = settings.host.lastIndexOf(":");
        if (lastColonIndex !== -1) {
          address = settings.host.slice(0, lastColonIndex);
          port = settings.host.slice(lastColonIndex + 1);
        } else {
          address = settings.host;
        }
      }
    }
  }
  return {
    address,
    port: port ? parseInt(port, 10) : void 0
  };
}
function addAttributes(span, reference) {
  const firestoreApp = reference.firestore.app;
  const firestoreOptions = firestoreApp.options;
  const json = reference.firestore.toJSON() || {};
  const settings = json.settings || {};
  const attributes = {
    [ATTR_DB_COLLECTION_NAME]: reference.path,
    [ATTR_DB_NAMESPACE]: firestoreApp.name,
    [ATTR_DB_SYSTEM_NAME]: "firebase.firestore",
    "firebase.firestore.type": reference.type,
    "firebase.firestore.options.projectId": firestoreOptions.projectId,
    "firebase.firestore.options.appId": firestoreOptions.appId,
    "firebase.firestore.options.messagingSenderId": firestoreOptions.messagingSenderId,
    "firebase.firestore.options.storageBucket": firestoreOptions.storageBucket
  };
  const { address, port } = getPortAndAddress(settings);
  if (address) {
    attributes[ATTR_SERVER_ADDRESS] = address;
  }
  if (port) {
    attributes[ATTR_SERVER_PORT] = port;
  }
  span.setAttributes(attributes);
}

export { getPortAndAddress, patchFirestore };
//# sourceMappingURL=firestore.js.map
