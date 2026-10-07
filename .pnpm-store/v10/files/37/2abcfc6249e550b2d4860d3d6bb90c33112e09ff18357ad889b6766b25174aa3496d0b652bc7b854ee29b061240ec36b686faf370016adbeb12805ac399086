Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const currentScopes = require('./currentScopes.js');
const debugBuild = require('./debug-build.js');
const session = require('./session.js');
const trace = require('./tracing/trace.js');
const debugLogger = require('./utils/debug-logger.js');
const is = require('./utils/is.js');
const misc = require('./utils/misc.js');
const prepareEvent = require('./utils/prepareEvent.js');
const scopeData = require('./utils/scopeData.js');
const time = require('./utils/time.js');
const worldwide = require('./utils/worldwide.js');

function captureException(exception, hint) {
  return currentScopes.getCurrentScope().captureException(exception, prepareEvent.parseEventHintOrCaptureContext(hint));
}
function captureMessage(message, captureContext) {
  const level = typeof captureContext === "string" ? captureContext : void 0;
  const hint = typeof captureContext !== "string" ? { captureContext } : void 0;
  return currentScopes.getCurrentScope().captureMessage(message, level, hint);
}
function captureEvent(event, hint) {
  return currentScopes.getCurrentScope().captureEvent(event, hint);
}
function setContext(name, context) {
  currentScopes.getIsolationScope().setContext(name, context);
}
function setExtras(extras) {
  currentScopes.getIsolationScope().setExtras(extras);
}
function setExtra(key, extra) {
  currentScopes.getIsolationScope().setExtra(key, extra);
}
function setTags(tags) {
  currentScopes.getIsolationScope().setTags(tags);
}
function setTag(key, value) {
  currentScopes.getIsolationScope().setTag(key, value);
}
function setUser(user) {
  currentScopes.getIsolationScope().setUser(user);
}
function setConversationId(conversationId) {
  currentScopes.getIsolationScope().setConversationId(conversationId);
}
function lastEventId() {
  return currentScopes.getIsolationScope().lastEventId();
}
function captureCheckIn(checkIn, upsertMonitorConfig) {
  const scope = currentScopes.getCurrentScope();
  const client = currentScopes.getClient();
  if (!client) {
    debugBuild.DEBUG_BUILD && debugLogger.debug.warn("Cannot capture check-in. No client defined.");
  } else if (!client.captureCheckIn) {
    debugBuild.DEBUG_BUILD && debugLogger.debug.warn("Cannot capture check-in. Client does not support sending check-ins.");
  } else {
    return client.captureCheckIn(checkIn, upsertMonitorConfig, scope);
  }
  return misc.uuid4();
}
function withMonitor(monitorSlug, callback, upsertMonitorConfig) {
  function runCallback() {
    const checkInId = captureCheckIn({ monitorSlug, status: "in_progress" }, upsertMonitorConfig);
    const now = time.timestampInSeconds();
    function finishCheckIn(status) {
      captureCheckIn({ monitorSlug, status, checkInId, duration: time.timestampInSeconds() - now });
    }
    let maybePromiseResult;
    try {
      maybePromiseResult = callback();
    } catch (e) {
      finishCheckIn("error");
      throw e;
    }
    if (is.isThenable(maybePromiseResult)) {
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
  return currentScopes.withIsolationScope(() => upsertMonitorConfig?.isolateTrace ? trace.startNewTrace(runCallback) : runCallback());
}
async function flush(timeout) {
  const client = currentScopes.getClient();
  if (client) {
    return client.flush(timeout);
  }
  debugBuild.DEBUG_BUILD && debugLogger.debug.warn("Cannot flush events. No client defined.");
  return Promise.resolve(false);
}
async function close(timeout) {
  const client = currentScopes.getClient();
  if (client) {
    return client.close(timeout);
  }
  debugBuild.DEBUG_BUILD && debugLogger.debug.warn("Cannot flush events and disable SDK. No client defined.");
  return Promise.resolve(false);
}
function isInitialized() {
  return !!currentScopes.getClient();
}
function isEnabled() {
  const client = currentScopes.getClient();
  return client?.getOptions().enabled !== false && !!client?.getTransport();
}
function addEventProcessor(callback) {
  currentScopes.getIsolationScope().addEventProcessor(callback);
}
function startSession(context) {
  const isolationScope = currentScopes.getIsolationScope();
  const { user } = scopeData.getCombinedScopeData(isolationScope, currentScopes.getCurrentScope());
  const { userAgent } = worldwide.GLOBAL_OBJ.navigator || {};
  const session$1 = session.makeSession({
    user,
    ...userAgent && { userAgent },
    ...context
  });
  const currentSession = isolationScope.getSession();
  if (currentSession?.status === "ok") {
    session.updateSession(currentSession, { status: "exited" });
  }
  endSession();
  isolationScope.setSession(session$1);
  return session$1;
}
function endSession() {
  const isolationScope = currentScopes.getIsolationScope();
  const currentScope = currentScopes.getCurrentScope();
  const session$1 = currentScope.getSession() || isolationScope.getSession();
  if (session$1) {
    session.closeSession(session$1);
  }
  _sendSessionUpdate();
  isolationScope.setSession();
}
function _sendSessionUpdate() {
  const isolationScope = currentScopes.getIsolationScope();
  const client = currentScopes.getClient();
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

exports.addEventProcessor = addEventProcessor;
exports.captureCheckIn = captureCheckIn;
exports.captureEvent = captureEvent;
exports.captureException = captureException;
exports.captureMessage = captureMessage;
exports.captureSession = captureSession;
exports.close = close;
exports.endSession = endSession;
exports.flush = flush;
exports.isEnabled = isEnabled;
exports.isInitialized = isInitialized;
exports.lastEventId = lastEventId;
exports.setContext = setContext;
exports.setConversationId = setConversationId;
exports.setExtra = setExtra;
exports.setExtras = setExtras;
exports.setTag = setTag;
exports.setTags = setTags;
exports.setUser = setUser;
exports.startSession = startSession;
exports.withMonitor = withMonitor;
//# sourceMappingURL=exports.js.map
