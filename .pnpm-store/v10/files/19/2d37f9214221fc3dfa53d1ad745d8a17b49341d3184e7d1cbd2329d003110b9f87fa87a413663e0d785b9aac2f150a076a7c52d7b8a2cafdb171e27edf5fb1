import { SpanKind, context, trace, diag } from '@opentelemetry/api';
import { InstrumentationNodeModuleDefinition, InstrumentationNodeModuleFile, isWrapped, safeExecuteInTheMiddle } from '@opentelemetry/instrumentation';

function patchFunctions(tracer, functionsSupportedVersions, wrap, unwrap, config) {
  let requestHook = () => {
  };
  let responseHook = () => {
  };
  const errorHook = config.functions?.errorHook;
  const configRequestHook = config.functions?.requestHook;
  const configResponseHook = config.functions?.responseHook;
  if (typeof configResponseHook === "function") {
    responseHook = (span, err) => {
      safeExecuteInTheMiddle(
        () => configResponseHook(span, err),
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
  if (typeof configRequestHook === "function") {
    requestHook = (span) => {
      safeExecuteInTheMiddle(
        () => configRequestHook(span),
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
  const moduleFunctionsCJS = new InstrumentationNodeModuleDefinition("firebase-functions", functionsSupportedVersions);
  const modulesToInstrument = [
    { name: "firebase-functions/lib/v2/providers/https.js", triggerType: "function" },
    { name: "firebase-functions/lib/v2/providers/firestore.js", triggerType: "firestore" },
    { name: "firebase-functions/lib/v2/providers/scheduler.js", triggerType: "scheduler" },
    { name: "firebase-functions/lib/v2/storage.js", triggerType: "storage" }
  ];
  modulesToInstrument.forEach(({ name, triggerType }) => {
    moduleFunctionsCJS.files.push(
      new InstrumentationNodeModuleFile(
        name,
        functionsSupportedVersions,
        (moduleExports) => wrapCommonFunctions(
          moduleExports,
          wrap,
          unwrap,
          tracer,
          { requestHook, responseHook, errorHook },
          triggerType
        ),
        (moduleExports) => unwrapCommonFunctions(moduleExports, unwrap)
      )
    );
  });
  return moduleFunctionsCJS;
}
function patchV2Functions(tracer, functionsConfig, triggerType) {
  return function v2FunctionsWrapper(original) {
    return function(...args) {
      const handler = typeof args[0] === "function" ? args[0] : args[1];
      const documentOrOptions = typeof args[0] === "function" ? void 0 : args[0];
      if (!handler) {
        return original.call(this, ...args);
      }
      const wrappedHandler = async function(...handlerArgs) {
        const functionName = process.env.FUNCTION_TARGET || process.env.K_SERVICE || "unknown";
        const span = tracer.startSpan(`firebase.function.${triggerType}`, {
          kind: SpanKind.SERVER
        });
        const attributes = {
          "faas.name": functionName,
          "faas.trigger": triggerType,
          "faas.provider": "firebase"
        };
        if (process.env.GCLOUD_PROJECT) {
          attributes["cloud.project_id"] = process.env.GCLOUD_PROJECT;
        }
        if (process.env.EVENTARC_CLOUD_EVENT_SOURCE) {
          attributes["cloud.event_source"] = process.env.EVENTARC_CLOUD_EVENT_SOURCE;
        }
        span.setAttributes(attributes);
        functionsConfig?.requestHook?.(span);
        return context.with(trace.setSpan(context.active(), span), async () => {
          let error;
          let result;
          try {
            result = await handler.apply(this, handlerArgs);
          } catch (e) {
            error = e;
          }
          functionsConfig?.responseHook?.(span, error);
          if (error) {
            span.recordException(error);
          }
          span.end();
          if (error) {
            await functionsConfig?.errorHook?.(span, error);
            throw error;
          }
          return result;
        });
      };
      if (documentOrOptions) {
        return original.call(this, documentOrOptions, wrappedHandler);
      } else {
        return original.call(this, wrappedHandler);
      }
    };
  };
}
function wrapCommonFunctions(moduleExports, wrap, unwrap, tracer, functionsConfig, triggerType) {
  unwrapCommonFunctions(moduleExports, unwrap);
  switch (triggerType) {
    case "function":
      wrap(moduleExports, "onRequest", patchV2Functions(tracer, functionsConfig, "http.request"));
      wrap(moduleExports, "onCall", patchV2Functions(tracer, functionsConfig, "http.call"));
      break;
    case "firestore":
      wrap(moduleExports, "onDocumentCreated", patchV2Functions(tracer, functionsConfig, "firestore.document.created"));
      wrap(moduleExports, "onDocumentUpdated", patchV2Functions(tracer, functionsConfig, "firestore.document.updated"));
      wrap(moduleExports, "onDocumentDeleted", patchV2Functions(tracer, functionsConfig, "firestore.document.deleted"));
      wrap(moduleExports, "onDocumentWritten", patchV2Functions(tracer, functionsConfig, "firestore.document.written"));
      wrap(
        moduleExports,
        "onDocumentCreatedWithAuthContext",
        patchV2Functions(tracer, functionsConfig, "firestore.document.created")
      );
      wrap(
        moduleExports,
        "onDocumentUpdatedWithAuthContext",
        patchV2Functions(tracer, functionsConfig, "firestore.document.updated")
      );
      wrap(
        moduleExports,
        "onDocumentDeletedWithAuthContext",
        patchV2Functions(tracer, functionsConfig, "firestore.document.deleted")
      );
      wrap(
        moduleExports,
        "onDocumentWrittenWithAuthContext",
        patchV2Functions(tracer, functionsConfig, "firestore.document.written")
      );
      break;
    case "scheduler":
      wrap(moduleExports, "onSchedule", patchV2Functions(tracer, functionsConfig, "scheduler.scheduled"));
      break;
    case "storage":
      wrap(moduleExports, "onObjectFinalized", patchV2Functions(tracer, functionsConfig, "storage.object.finalized"));
      wrap(moduleExports, "onObjectArchived", patchV2Functions(tracer, functionsConfig, "storage.object.archived"));
      wrap(moduleExports, "onObjectDeleted", patchV2Functions(tracer, functionsConfig, "storage.object.deleted"));
      wrap(
        moduleExports,
        "onObjectMetadataUpdated",
        patchV2Functions(tracer, functionsConfig, "storage.object.metadataUpdated")
      );
      break;
  }
  return moduleExports;
}
function unwrapCommonFunctions(moduleExports, unwrap) {
  const methods = [
    "onSchedule",
    "onRequest",
    "onCall",
    "onObjectFinalized",
    "onObjectArchived",
    "onObjectDeleted",
    "onObjectMetadataUpdated",
    "onDocumentCreated",
    "onDocumentUpdated",
    "onDocumentDeleted",
    "onDocumentWritten",
    "onDocumentCreatedWithAuthContext",
    "onDocumentUpdatedWithAuthContext",
    "onDocumentDeletedWithAuthContext",
    "onDocumentWrittenWithAuthContext"
  ];
  for (const method of methods) {
    if (isWrapped(moduleExports[method])) {
      unwrap(moduleExports, method);
    }
  }
  return moduleExports;
}

export { patchFunctions, patchV2Functions };
//# sourceMappingURL=functions.js.map
