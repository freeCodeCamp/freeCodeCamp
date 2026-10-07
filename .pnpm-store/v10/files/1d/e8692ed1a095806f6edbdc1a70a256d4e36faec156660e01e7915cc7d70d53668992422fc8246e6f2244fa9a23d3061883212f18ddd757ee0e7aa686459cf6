Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const api = require('@opentelemetry/api');
const core$1 = require('@opentelemetry/core');
const instrumentation = require('@opentelemetry/instrumentation');
const core = require('@sentry/core');
const diagch = require('diagnostics_channel');
const nodeVersion = require('../../nodeVersion.js');
const outgoingFetchRequest = require('../../utils/outgoingFetchRequest.js');

class SentryNodeFetchInstrumentation extends instrumentation.InstrumentationBase {
  constructor(config = {}) {
    super("@sentry/instrumentation-node-fetch", core.SDK_VERSION, config);
    this._channelSubs = [];
    this._propagationDecisionMap = new core.LRUMap(100);
    this._ignoreOutgoingRequestsMap = /* @__PURE__ */ new WeakMap();
  }
  /** No need to instrument files/modules. */
  init() {
    return void 0;
  }
  /** Disable the instrumentation. */
  disable() {
    super.disable();
    this._channelSubs.forEach((sub) => sub.unsubscribe());
    this._channelSubs = [];
  }
  /** Enable the instrumentation. */
  enable() {
    super.enable();
    this._channelSubs = this._channelSubs || [];
    if (this._channelSubs.length > 0) {
      return;
    }
    this._subscribeToChannel("undici:request:create", this._onRequestCreated.bind(this));
    this._subscribeToChannel("undici:request:headers", this._onResponseHeaders.bind(this));
  }
  /**
   * This method is called when a request is created.
   * You can still mutate the request here before it is sent.
   */
  _onRequestCreated({ request }) {
    const config = this.getConfig();
    const enabled = config.enabled !== false;
    if (!enabled) {
      return;
    }
    const shouldIgnore = this._shouldIgnoreOutgoingRequest(request);
    this._ignoreOutgoingRequestsMap.set(request, shouldIgnore);
    if (shouldIgnore) {
      return;
    }
    if (config.tracePropagation !== false) {
      outgoingFetchRequest.addTracePropagationHeadersToFetchRequest(request, this._propagationDecisionMap);
    }
  }
  /**
   * This method is called when a response is received.
   */
  _onResponseHeaders({ request, response }) {
    const config = this.getConfig();
    const enabled = config.enabled !== false;
    if (!enabled) {
      return;
    }
    const _breadcrumbs = config.breadcrumbs;
    const breadCrumbsEnabled = typeof _breadcrumbs === "undefined" ? true : _breadcrumbs;
    const shouldIgnore = this._ignoreOutgoingRequestsMap.get(request);
    if (breadCrumbsEnabled && !shouldIgnore) {
      outgoingFetchRequest.addFetchRequestBreadcrumb(request, response);
    }
  }
  /** Subscribe to a diagnostics channel. */
  _subscribeToChannel(diagnosticChannel, onMessage) {
    const useNewSubscribe = nodeVersion.NODE_MAJOR > 18 || nodeVersion.NODE_MAJOR === 18 && nodeVersion.NODE_MINOR >= 19;
    let unsubscribe;
    if (useNewSubscribe) {
      diagch.subscribe?.(diagnosticChannel, onMessage);
      unsubscribe = () => diagch.unsubscribe?.(diagnosticChannel, onMessage);
    } else {
      const channel = diagch.channel(diagnosticChannel);
      channel.subscribe(onMessage);
      unsubscribe = () => channel.unsubscribe(onMessage);
    }
    this._channelSubs.push({
      name: diagnosticChannel,
      unsubscribe
    });
  }
  /**
   * Check if the given outgoing request should be ignored.
   */
  _shouldIgnoreOutgoingRequest(request) {
    if (core$1.isTracingSuppressed(api.context.active())) {
      return true;
    }
    const url = outgoingFetchRequest.getAbsoluteUrl(request.origin, request.path);
    const ignoreOutgoingRequests = this.getConfig().ignoreOutgoingRequests;
    if (typeof ignoreOutgoingRequests !== "function" || !url) {
      return false;
    }
    return ignoreOutgoingRequests(url);
  }
}

exports.SentryNodeFetchInstrumentation = SentryNodeFetchInstrumentation;
//# sourceMappingURL=SentryNodeFetchInstrumentation.js.map
