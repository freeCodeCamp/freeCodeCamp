import { DEFAULT_ENVIRONMENT } from '../constants.js';
import { notifyEventProcessors } from '../eventProcessors.js';
import { Scope } from '../scope.js';
import { getFilenameToDebugIdMap } from './debug-ids.js';
import { uuid4, addExceptionMechanism } from './misc.js';
import { normalize } from './normalize.js';
import { getCombinedScopeData, applyScopeDataToEvent } from './scopeData.js';
import { truncate } from './string.js';
import { resolvedSyncPromise } from './syncpromise.js';
import { dateTimestampInSeconds } from './time.js';

function prepareEvent(options, event, hint, scope, client, isolationScope) {
  const { normalizeDepth = 3, normalizeMaxBreadth = 1e3 } = options;
  const prepared = {
    ...event,
    event_id: event.event_id || hint.event_id || uuid4(),
    timestamp: event.timestamp || dateTimestampInSeconds()
  };
  const integrations = hint.integrations || options.integrations.map((i) => i.name);
  applyClientOptions(prepared, options);
  applyIntegrationsMetadata(prepared, integrations);
  if (client) {
    client.emit("applyFrameMetadata", event);
  }
  if (event.type === void 0) {
    applyDebugIds(prepared, options.stackParser);
  }
  const finalScope = getFinalScope(scope, hint.captureContext);
  if (hint.mechanism) {
    addExceptionMechanism(prepared, hint.mechanism);
  }
  const clientEventProcessors = client ? client.getEventProcessors() : [];
  const data = getCombinedScopeData(isolationScope, finalScope);
  const attachments = [...hint.attachments || [], ...data.attachments];
  if (attachments.length) {
    hint.attachments = attachments;
  }
  applyScopeDataToEvent(prepared, data);
  const eventProcessors = [
    ...clientEventProcessors,
    // Run scope event processors _after_ all other processors
    ...data.eventProcessors
  ];
  const isInternalException = hint.data && hint.data.__sentry__ === true;
  const result = isInternalException ? resolvedSyncPromise(prepared) : notifyEventProcessors(eventProcessors, prepared, hint);
  return result.then((evt) => {
    if (evt) {
      applyDebugMeta(evt);
    }
    if (typeof normalizeDepth === "number" && normalizeDepth > 0) {
      return normalizeEvent(evt, normalizeDepth, normalizeMaxBreadth);
    }
    return evt;
  });
}
function applyClientOptions(event, options) {
  const { environment, release, dist, maxValueLength } = options;
  event.environment = event.environment || environment || DEFAULT_ENVIRONMENT;
  if (!event.release && release) {
    event.release = release;
  }
  if (!event.dist && dist) {
    event.dist = dist;
  }
  const request = event.request;
  if (request?.url && maxValueLength) {
    request.url = truncate(request.url, maxValueLength);
  }
  if (maxValueLength) {
    event.exception?.values?.forEach((exception) => {
      if (exception.value) {
        exception.value = truncate(exception.value, maxValueLength);
      }
    });
  }
}
function applyDebugIds(event, stackParser) {
  const filenameDebugIdMap = getFilenameToDebugIdMap(stackParser);
  event.exception?.values?.forEach((exception) => {
    exception.stacktrace?.frames?.forEach((frame) => {
      if (frame.filename) {
        frame.debug_id = filenameDebugIdMap[frame.filename];
      }
    });
  });
}
function applyDebugMeta(event) {
  const filenameDebugIdMap = {};
  event.exception?.values?.forEach((exception) => {
    exception.stacktrace?.frames?.forEach((frame) => {
      if (frame.debug_id) {
        if (frame.abs_path) {
          filenameDebugIdMap[frame.abs_path] = frame.debug_id;
        } else if (frame.filename) {
          filenameDebugIdMap[frame.filename] = frame.debug_id;
        }
        delete frame.debug_id;
      }
    });
  });
  if (Object.keys(filenameDebugIdMap).length === 0) {
    return;
  }
  event.debug_meta = event.debug_meta || {};
  event.debug_meta.images = event.debug_meta.images || [];
  const images = event.debug_meta.images;
  Object.entries(filenameDebugIdMap).forEach(([filename, debug_id]) => {
    images.push({
      type: "sourcemap",
      code_file: filename,
      debug_id
    });
  });
}
function applyIntegrationsMetadata(event, integrationNames) {
  if (integrationNames.length > 0) {
    event.sdk = event.sdk || {};
    event.sdk.integrations = [...event.sdk.integrations || [], ...integrationNames];
  }
}
function normalizeEvent(event, depth, maxBreadth) {
  if (!event) {
    return null;
  }
  const normalized = {
    ...event,
    ...event.breadcrumbs && {
      breadcrumbs: event.breadcrumbs.map((b) => ({
        ...b,
        ...b.data && {
          data: normalize(b.data, depth, maxBreadth)
        }
      }))
    },
    ...event.user && {
      user: normalize(event.user, depth, maxBreadth)
    },
    ...event.contexts && {
      contexts: normalize(event.contexts, depth, maxBreadth)
    },
    ...event.extra && {
      extra: normalize(event.extra, depth, maxBreadth)
    }
  };
  if (event.contexts?.trace && normalized.contexts) {
    normalized.contexts.trace = event.contexts.trace;
    if (event.contexts.trace.data) {
      normalized.contexts.trace.data = normalize(event.contexts.trace.data, depth, maxBreadth);
    }
  }
  if (event.spans) {
    normalized.spans = event.spans.map((span) => {
      return {
        ...span,
        ...span.data && {
          data: normalize(span.data, depth, maxBreadth)
        }
      };
    });
  }
  if (event.contexts?.flags && normalized.contexts) {
    normalized.contexts.flags = normalize(event.contexts.flags, 3, maxBreadth);
  }
  return normalized;
}
function getFinalScope(scope, captureContext) {
  if (!captureContext) {
    return scope;
  }
  const finalScope = scope ? scope.clone() : new Scope();
  finalScope.update(captureContext);
  return finalScope;
}
function parseEventHintOrCaptureContext(hint) {
  if (!hint) {
    return void 0;
  }
  if (hintIsScopeOrFunction(hint)) {
    return { captureContext: hint };
  }
  if (hintIsScopeContext(hint)) {
    return {
      captureContext: hint
    };
  }
  return hint;
}
function hintIsScopeOrFunction(hint) {
  return hint instanceof Scope || typeof hint === "function";
}
const captureContextKeys = [
  "user",
  "level",
  "extra",
  "contexts",
  "tags",
  "fingerprint",
  "propagationContext"
];
function hintIsScopeContext(hint) {
  return Object.keys(hint).some((key) => captureContextKeys.includes(key));
}

export { applyClientOptions, applyDebugIds, applyDebugMeta, parseEventHintOrCaptureContext, prepareEvent };
//# sourceMappingURL=prepareEvent.js.map
