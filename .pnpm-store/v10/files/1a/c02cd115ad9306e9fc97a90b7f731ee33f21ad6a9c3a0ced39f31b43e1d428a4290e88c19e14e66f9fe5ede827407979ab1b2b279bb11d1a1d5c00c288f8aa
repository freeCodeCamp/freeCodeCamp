Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const checkin = require('./checkin.js');
const client = require('./client.js');
const currentScopes = require('./currentScopes.js');
const debugBuild = require('./debug-build.js');
const base = require('./transports/base.js');
const userAgent = require('./transports/userAgent.js');
const debugLogger = require('./utils/debug-logger.js');
const eventbuilder = require('./utils/eventbuilder.js');
const misc = require('./utils/misc.js');
const promisebuffer = require('./utils/promisebuffer.js');
const syncpromise = require('./utils/syncpromise.js');
const traceInfo = require('./utils/trace-info.js');

class ServerRuntimeClient extends client.Client {
  /**
   * Creates a new Edge SDK instance.
   * @param options Configuration options for this SDK.
   */
  constructor(options) {
    userAgent.addUserAgentToTransportHeaders(options);
    super(options);
    this._disposeCallbacks = [];
    this._setUpMetricsProcessing();
  }
  /**
   * @inheritDoc
   */
  eventFromException(exception, hint) {
    const event = eventbuilder.eventFromUnknownInput(this, this._options.stackParser, exception, hint);
    event.level = "error";
    return syncpromise.resolvedSyncPromise(event);
  }
  /**
   * @inheritDoc
   */
  eventFromMessage(message, level = "info", hint) {
    return syncpromise.resolvedSyncPromise(
      eventbuilder.eventFromMessage(this._options.stackParser, message, level, hint, this._options.attachStacktrace)
    );
  }
  /**
   * @inheritDoc
   */
  captureException(exception, hint, scope) {
    setCurrentRequestSessionErroredOrCrashed(hint);
    return super.captureException(exception, hint, scope);
  }
  /**
   * @inheritDoc
   */
  captureEvent(event, hint, scope) {
    const isException = !event.type && event.exception?.values && event.exception.values.length > 0;
    if (isException) {
      setCurrentRequestSessionErroredOrCrashed(hint);
    }
    return super.captureEvent(event, hint, scope);
  }
  /**
   * Create a cron monitor check in and send it to Sentry.
   *
   * @param checkIn An object that describes a check in.
   * @param upsertMonitorConfig An optional object that describes a monitor config. Use this if you want
   * to create a monitor automatically when sending a check in.
   */
  captureCheckIn(checkIn, monitorConfig, scope) {
    const id = "checkInId" in checkIn && checkIn.checkInId ? checkIn.checkInId : misc.uuid4();
    if (!this._isEnabled()) {
      debugBuild.DEBUG_BUILD && debugLogger.debug.warn("SDK not enabled, will not capture check-in.");
      return id;
    }
    const options = this.getOptions();
    const { release, environment, tunnel } = options;
    const serializedCheckIn = {
      check_in_id: id,
      monitor_slug: checkIn.monitorSlug,
      status: checkIn.status,
      release,
      environment
    };
    if ("duration" in checkIn) {
      serializedCheckIn.duration = checkIn.duration;
    }
    if (monitorConfig) {
      serializedCheckIn.monitor_config = {
        schedule: monitorConfig.schedule,
        checkin_margin: monitorConfig.checkinMargin,
        max_runtime: monitorConfig.maxRuntime,
        timezone: monitorConfig.timezone,
        failure_issue_threshold: monitorConfig.failureIssueThreshold,
        recovery_threshold: monitorConfig.recoveryThreshold
      };
    }
    const [dynamicSamplingContext, traceContext] = traceInfo._getTraceInfoFromScope(this, scope);
    if (traceContext) {
      serializedCheckIn.contexts = {
        trace: traceContext
      };
    }
    const envelope = checkin.createCheckInEnvelope(
      serializedCheckIn,
      dynamicSamplingContext,
      this.getSdkMetadata(),
      tunnel,
      this.getDsn()
    );
    debugBuild.DEBUG_BUILD && debugLogger.debug.log("Sending checkin:", checkIn.monitorSlug, checkIn.status);
    this.sendEnvelope(envelope);
    return id;
  }
  /**
   * @inheritDoc
   */
  registerCleanup(callback) {
    this._disposeCallbacks.push(callback);
  }
  /**
   * Disposes of the client and releases all resources.
   *
   * This method clears all internal state to allow the client to be garbage collected.
   * It clears hooks, event processors, integrations, transport, and other internal references.
   *
   * Call this method after flushing to allow the client to be garbage collected.
   * After calling dispose(), the client should not be used anymore.
   *
   * Subclasses should override this method to clean up their own resources and call `super.dispose()`.
   */
  dispose() {
    debugBuild.DEBUG_BUILD && debugLogger.debug.log("Disposing client...");
    for (const callback of this._disposeCallbacks) {
      try {
        callback();
      } catch {
      }
    }
    this._disposeCallbacks.length = 0;
    for (const hookName of Object.keys(this._hooks)) {
      this._hooks[hookName]?.clear();
    }
    this._hooks = {};
    this._eventProcessors.length = 0;
    this._integrations = {};
    this._outcomes = {};
    this._transport = void 0;
    this._promiseBuffer = promisebuffer.makePromiseBuffer(base.DEFAULT_TRANSPORT_BUFFER_SIZE);
  }
  /**
   * @inheritDoc
   */
  _prepareEvent(event, hint, currentScope, isolationScope) {
    if (this._options.platform) {
      event.platform = event.platform || this._options.platform;
    }
    if (this._options.runtime) {
      event.contexts = {
        ...event.contexts,
        runtime: event.contexts?.runtime || this._options.runtime
      };
    }
    if (this._options.serverName) {
      event.server_name = event.server_name || this._options.serverName;
    }
    return super._prepareEvent(event, hint, currentScope, isolationScope);
  }
  /**
   * Process a server-side metric before it is captured.
   */
  _setUpMetricsProcessing() {
    this.on("processMetric", (metric) => {
      if (this._options.serverName) {
        metric.attributes = {
          "server.address": this._options.serverName,
          ...metric.attributes
        };
      }
    });
  }
}
function setCurrentRequestSessionErroredOrCrashed(eventHint) {
  const requestSession = currentScopes.getIsolationScope().getScopeData().sdkProcessingMetadata.requestSession;
  if (requestSession) {
    const isHandledException = eventHint?.mechanism?.handled ?? true;
    if (isHandledException && requestSession.status !== "crashed") {
      requestSession.status = "errored";
    } else if (!isHandledException) {
      requestSession.status = "crashed";
    }
  }
}

exports.ServerRuntimeClient = ServerRuntimeClient;
//# sourceMappingURL=server-runtime-client.js.map
