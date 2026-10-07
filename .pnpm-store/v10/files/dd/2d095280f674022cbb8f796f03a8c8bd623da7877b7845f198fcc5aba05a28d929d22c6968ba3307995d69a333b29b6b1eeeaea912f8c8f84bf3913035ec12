import { getIsolationScope, getCurrentScope, getClient, withIsolationScope } from './currentScopes.js';
import { DEBUG_BUILD } from './debug-build.js';
import { closeSession, makeSession, updateSession } from './session.js';
import { startNewTrace } from './tracing/trace.js';
import { debug } from './utils/debug-logger.js';
import { isThenable } from './utils/is.js';
import { uuid4 } from './utils/misc.js';
import { parseEventHintOrCaptureContext } from './utils/prepareEvent.js';
import { getCombinedScopeData } from './utils/scopeData.js';
import { timestampInSeconds } from './utils/time.js';
import { GLOBAL_OBJ } from './utils/worldwide.js';

function captureException(exception, hint) {
  return getCurrentScope().captureException(exception, parseEventHintOrCaptureContext(hint));
}
function captureMessage(message, captureContext) {
  const level = typeof captureContext === "string" ? captureContext : void 0;
  const hint = typeof captureContext !== "string" ? { captureContext } : void 0;
  return getCurrentScope().captureMessage(message, level, hint);
}
function captureEvent(event, hint) {
  return getCurrentScope().captureEvent(event, hint);
}
function setContext(name, context) {
  getIsolationScope().setContext(name, context);
}
function setExtras(extras) {
  getIsolationScope().setExtras(extras);
}
function setExtra(key, extra) {
  getIsolationScope().setExtra(key, extra);
}
function setTags(tags) {
  getIsolationScope().setTags(tags);
}
function setTag(key, value) {
  getIsolationScope().setTag(key, value);
}
function setUser(user) {
  getIsolationScope().setUser(user);
}
function setConversationId(conversationId) {
  getIsolationScope().setConversationId(conversationId);
}
function lastEventId() {
  return getIsolationScope().lastEventId();
}
function captureCheckIn(checkIn, upsertMonitorConfig) {
  const scope = getCurrentScope();
  const client = getClient();
  if (!client) {
    DEBUG_BUILD && debug.warn("Cannot capture check-in. No client defined.");
  } else if (!client.captureCheckIn) {
    DEBUG_BUILD && debug.warn("Cannot capture check-in. Client does not support sending check-ins.");
  } else {
    return client.captureCheckIn(checkIn, upsertMonitorConfig, scope);
  }
  return uuid4();
}
function withMonitor(monitorSlug, callback, upsertMonitorConfig) {
  function runCallback() {
    const checkInId = captureCheckIn({ monitorSlug, status: "in_progress" }, upsertMonitorConfig);
    const now = timestampInSeconds();
    function finishCheckIn(status) {
      captureCheckIn({ monitorSlug, status, checkInId, duration: timestampInSeconds() - now });
    }
    let maybePromiseResult;
    try {
      maybePromiseResult = callback();
    } catch (e) {
      finishCheckIn("error");
      throw e;
    }
    if (isThenable(maybePromiseResult)) {
      return maybePromiseResult.then(
        (r) => {
          finishCheckIn("ok");
          return r;
        },
        (e) => {
          finishCheckIn("error");
          throw e;
        }
      );
    }
    finishCheckIn("ok");
    return maybePromiseResult;
  }
  return withIsolationScope(() => upsertMonitorConfig?.isolateTrace ? startNewTrace(runCallback) : runCallback());
}
async function flush(timeout) {
  const client = getClient();
  if (client) {
    return client.flush(timeout);
  }
  DEBUG_BUILD && debug.warn("Cannot flush events. No client defined.");
  return Promise.resolve(false);
}
async function close(timeout) {
  const client = getClient();
  if (client) {
    return client.close(timeout);
  }
  DEBUG_BUILD && debug.warn("Cannot flush events and disable SDK. No client defined.");
  return Promise.resolve(false);
}
function isInitialized() {
  return !!getClient();
}
function isEnabled() {
  const client = getClient();
  return client?.getOptions().enabled !== false && !!client?.getTransport();
}
function addEventProcessor(callback) {
  getIsolationScope().addEventProcessor(callback);
}
function startSession(context) {
  const isolationScope = getIsolationScope();
  const { user } = getCombinedScopeData(isolationScope, getCurrentScope());
  const { userAgent } = GLOBAL_OBJ.navigator || {};
  const session = makeSession({
    user,
    ...userAgent && { userAgent },
    ...context
  });
  const currentSession = isolationScope.getSession();
  if (currentSession?.status === "ok") {
    updateSession(currentSession, { status: "exited" });
  }
  endSession();
  isolationScope.setSession(session);
  return session;
}
function endSession() {
  const isolationScope = getIsolationScope();
  const currentScope = getCurrentScope();
  const session = currentScope.getSession() || isolationScope.getSession();
  if (session) {
    closeSession(session);
  }
  _sendSessionUpdate();
  isolationScope.setSession();
}
function _sendSessionUpdate() {
  const isolationScope = getIsolationScope();
  const client = getClient();
  const session = isolationScope.getSession();
  if (session && client) {
    client.captureSession(session);
  }
}
function captureSession(end = false) {
  if (end) {
    endSession();
    return;
  }
  _sendSessionUpdate();
}

export { addEventProcessor, captureCheckIn, captureEvent, captureException, captureMessage, captureSession, close, endSession, flush, isEnabled, isInitialized, lastEventId, setContext, setConversationId, setExtra, setExtras, setTag, setTags, setUser, startSession, withMonitor };
//# sourceMappingURL=exports.js.map
