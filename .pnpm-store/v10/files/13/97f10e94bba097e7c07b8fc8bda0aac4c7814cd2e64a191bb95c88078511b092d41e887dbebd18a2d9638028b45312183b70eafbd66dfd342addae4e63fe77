import * as diagch from 'diagnostics_channel';
import { URL } from 'url';
import { InstrumentationBase, safeExecuteInTheMiddle } from '@opentelemetry/instrumentation';
import { ValueType, context, trace, INVALID_SPAN_CONTEXT, SpanKind, propagation, SpanStatusCode } from '@opentelemetry/api';
import { hrTime, hrTimeToMilliseconds, hrTimeDuration } from '@opentelemetry/core';
import { METRIC_HTTP_CLIENT_REQUEST_DURATION, ATTR_URL_QUERY, ATTR_URL_PATH, ATTR_URL_FULL, ATTR_HTTP_REQUEST_METHOD_ORIGINAL, ATTR_HTTP_RESPONSE_STATUS_CODE, ATTR_ERROR_TYPE, ATTR_HTTP_REQUEST_METHOD, ATTR_SERVER_ADDRESS, ATTR_SERVER_PORT, ATTR_URL_SCHEME, ATTR_USER_AGENT_ORIGINAL, ATTR_NETWORK_PEER_PORT, ATTR_NETWORK_PEER_ADDRESS } from '@opentelemetry/semantic-conventions';
import { SDK_VERSION } from '@sentry/core';

const PACKAGE_NAME = "@sentry/instrumentation-undici";
class UndiciInstrumentation extends InstrumentationBase {
  constructor(config = {}) {
    super(PACKAGE_NAME, SDK_VERSION, config);
    this._recordFromReq = /* @__PURE__ */ new WeakMap();
  }
  // No need to instrument files/modules
  init() {
    return void 0;
  }
  disable() {
    super.disable();
    this._channelSubs.forEach((sub) => sub.unsubscribe());
    this._channelSubs.length = 0;
  }
  enable() {
    super.enable();
    this._channelSubs = this._channelSubs || [];
    if (this._channelSubs.length > 0) {
      return;
    }
    this.subscribeToChannel("undici:request:create", this.onRequestCreated.bind(this));
    this.subscribeToChannel("undici:client:sendHeaders", this.onRequestHeaders.bind(this));
    this.subscribeToChannel("undici:request:headers", this.onResponseHeaders.bind(this));
    this.subscribeToChannel("undici:request:trailers", this.onDone.bind(this));
    this.subscribeToChannel("undici:request:error", this.onError.bind(this));
  }
  _updateMetricInstruments() {
    this._httpClientDurationHistogram = this.meter.createHistogram(METRIC_HTTP_CLIENT_REQUEST_DURATION, {
      description: "Measures the duration of outbound HTTP requests.",
      unit: "s",
      valueType: ValueType.DOUBLE,
      advice: {
        explicitBucketBoundaries: [5e-3, 0.01, 0.025, 0.05, 0.075, 0.1, 0.25, 0.5, 0.75, 1, 2.5, 5, 7.5, 10]
      }
    });
  }
  subscribeToChannel(diagnosticChannel, onMessage) {
    const [major = 0, minor = 0] = process.version.replace("v", "").split(".").map((n) => Number(n));
    const useNewSubscribe = major > 18 || major === 18 && minor >= 19;
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
  parseRequestHeaders(request) {
    const result = /* @__PURE__ */ new Map();
    if (Array.isArray(request.headers)) {
      for (let i = 0; i < request.headers.length; i += 2) {
        const key = request.headers[i];
        const value = request.headers[i + 1];
        if (typeof key === "string" && value !== void 0) {
          result.set(key.toLowerCase(), value);
        }
      }
    } else if (typeof request.headers === "string") {
      const headers = request.headers.split("\r\n");
      for (const line of headers) {
        if (!line) {
          continue;
        }
        const colonIndex = line.indexOf(":");
        if (colonIndex === -1) {
          continue;
        }
        const key = line.substring(0, colonIndex).toLowerCase();
        const value = line.substring(colonIndex + 1).trim();
        const allValues = result.get(key);
        if (allValues && Array.isArray(allValues)) {
          allValues.push(value);
        } else if (allValues) {
          result.set(key, [allValues, value]);
        } else {
          result.set(key, value);
        }
      }
    }
    return result;
  }
  // This is the 1st message we receive for each request (fired after request creation). Here we will
  // create the span and populate some atttributes, then link the span to the request for further
  // span processing
  onRequestCreated({ request }) {
    const config = this.getConfig();
    const enabled = config.enabled !== false;
    const shouldIgnoreReq = safeExecuteInTheMiddle(
      () => !enabled || request.method === "CONNECT" || config.ignoreRequestHook?.(request),
      (e) => e && this._diag.error("caught ignoreRequestHook error: ", e),
      true
    );
    if (shouldIgnoreReq) {
      return;
    }
    const startTime = hrTime();
    let requestUrl;
    try {
      requestUrl = new URL(request.path, request.origin);
    } catch (err) {
      this._diag.warn("could not determine url.full:", err);
      return;
    }
    const urlScheme = requestUrl.protocol.replace(":", "");
    const requestMethod = this.getRequestMethod(request.method);
    const attributes = {
      [ATTR_HTTP_REQUEST_METHOD]: requestMethod,
      [ATTR_HTTP_REQUEST_METHOD_ORIGINAL]: request.method,
      [ATTR_URL_FULL]: requestUrl.toString(),
      [ATTR_URL_PATH]: requestUrl.pathname,
      [ATTR_URL_QUERY]: requestUrl.search,
      [ATTR_URL_SCHEME]: urlScheme
    };
    const schemePorts = { https: "443", http: "80" };
    const serverAddress = requestUrl.hostname;
    const serverPort = requestUrl.port || schemePorts[urlScheme];
    attributes[ATTR_SERVER_ADDRESS] = serverAddress;
    if (serverPort && !isNaN(Number(serverPort))) {
      attributes[ATTR_SERVER_PORT] = Number(serverPort);
    }
    const headersMap = this.parseRequestHeaders(request);
    const userAgentValues = headersMap.get("user-agent");
    if (userAgentValues) {
      const userAgent = Array.isArray(userAgentValues) ? userAgentValues[userAgentValues.length - 1] : userAgentValues;
      attributes[ATTR_USER_AGENT_ORIGINAL] = userAgent;
    }
    const hookAttributes = safeExecuteInTheMiddle(
      () => config.startSpanHook?.(request),
      (e) => e && this._diag.error("caught startSpanHook error: ", e),
      true
    );
    if (hookAttributes) {
      Object.entries(hookAttributes).forEach(([key, val]) => {
        attributes[key] = val;
      });
    }
    const activeCtx = context.active();
    const currentSpan = trace.getSpan(activeCtx);
    let span;
    if (config.requireParentforSpans && (!currentSpan || !trace.isSpanContextValid(currentSpan.spanContext()))) {
      span = trace.wrapSpanContext(INVALID_SPAN_CONTEXT);
    } else {
      span = this.tracer.startSpan(
        requestMethod === "_OTHER" ? "HTTP" : requestMethod,
        {
          kind: SpanKind.CLIENT,
          attributes
        },
        activeCtx
      );
    }
    safeExecuteInTheMiddle(
      () => config.requestHook?.(span, request),
      (e) => e && this._diag.error("caught requestHook error: ", e),
      true
    );
    const requestContext = trace.setSpan(context.active(), span);
    const addedHeaders = {};
    propagation.inject(requestContext, addedHeaders);
    const headerEntries = Object.entries(addedHeaders);
    for (let i = 0; i < headerEntries.length; i++) {
      const pair = headerEntries[i];
      if (!pair) {
        continue;
      }
      const [k, v] = pair;
      if (typeof request.addHeader === "function") {
        request.addHeader(k, v);
      } else if (typeof request.headers === "string") {
        request.headers += `${k}: ${v}\r
`;
      } else if (Array.isArray(request.headers)) {
        request.headers.push(k, v);
      }
    }
    this._recordFromReq.set(request, { span, attributes, startTime });
  }
  // This is the 2nd message we receive for each request. It is fired when connection with
  // the remote is established and about to send the first byte. Here we do have info about the
  // remote address and port so we can populate some `network.*` attributes into the span
  onRequestHeaders({ request, socket }) {
    const record = this._recordFromReq.get(request);
    if (!record) {
      return;
    }
    const config = this.getConfig();
    const { span } = record;
    const { remoteAddress, remotePort } = socket;
    const spanAttributes = {
      [ATTR_NETWORK_PEER_ADDRESS]: remoteAddress,
      [ATTR_NETWORK_PEER_PORT]: remotePort
    };
    if (config.headersToSpanAttributes?.requestHeaders) {
      const headersToAttribs = new Set(config.headersToSpanAttributes.requestHeaders.map((n) => n.toLowerCase()));
      const headersMap = this.parseRequestHeaders(request);
      for (const [name, value] of headersMap.entries()) {
        if (headersToAttribs.has(name)) {
          const attrValue = Array.isArray(value) ? value : [value];
          spanAttributes[`http.request.header.${name}`] = attrValue;
        }
      }
    }
    span.setAttributes(spanAttributes);
  }
  // This is the 3rd message we get for each request and it's fired when the server
  // headers are received, body may not be accessible yet.
  // From the response headers we can set the status and content length
  onResponseHeaders({ request, response }) {
    const record = this._recordFromReq.get(request);
    if (!record) {
      return;
    }
    const { span, attributes } = record;
    const spanAttributes = {
      [ATTR_HTTP_RESPONSE_STATUS_CODE]: response.statusCode
    };
    const config = this.getConfig();
    safeExecuteInTheMiddle(
      () => config.responseHook?.(span, { request, response }),
      (e) => e && this._diag.error("caught responseHook error: ", e),
      true
    );
    if (config.headersToSpanAttributes?.responseHeaders) {
      const headersToAttribs = /* @__PURE__ */ new Set();
      config.headersToSpanAttributes?.responseHeaders.forEach((name) => headersToAttribs.add(name.toLowerCase()));
      for (let idx = 0; idx < response.headers.length; idx = idx + 2) {
        const nameBuf = response.headers[idx];
        const valueBuf = response.headers[idx + 1];
        if (nameBuf === void 0 || valueBuf === void 0) {
          continue;
        }
        const name = nameBuf.toString().toLowerCase();
        const value = valueBuf;
        if (headersToAttribs.has(name)) {
          const attrName = `http.response.header.${name}`;
          if (!Object.prototype.hasOwnProperty.call(spanAttributes, attrName)) {
            spanAttributes[attrName] = [value.toString()];
          } else {
            spanAttributes[attrName].push(value.toString());
          }
        }
      }
    }
    span.setAttributes(spanAttributes);
    span.setStatus({
      code: response.statusCode >= 400 ? SpanStatusCode.ERROR : SpanStatusCode.UNSET
    });
    record.attributes = Object.assign(attributes, spanAttributes);
  }
  // This is the last event we receive if the request went without any errors
  onDone({ request }) {
    const record = this._recordFromReq.get(request);
    if (!record) {
      return;
    }
    const { span, attributes, startTime } = record;
    span.end();
    this._recordFromReq.delete(request);
    this.recordRequestDuration(attributes, startTime);
  }
  // This is the event we get when something is wrong in the request like
  // - invalid options when calling `fetch` global API or any undici method for request
  // - connectivity errors such as unreachable host
  // - requests aborted through an `AbortController.signal`
  // NOTE: server errors are considered valid responses and it's the lib consumer
  // who should deal with that.
  onError({ request, error }) {
    const record = this._recordFromReq.get(request);
    if (!record) {
      return;
    }
    const { span, attributes, startTime } = record;
    span.recordException(error);
    span.setStatus({
      code: SpanStatusCode.ERROR,
      message: error.message
    });
    span.end();
    this._recordFromReq.delete(request);
    attributes[ATTR_ERROR_TYPE] = error.message;
    this.recordRequestDuration(attributes, startTime);
  }
  recordRequestDuration(attributes, startTime) {
    const metricsAttributes = {};
    const keysToCopy = [
      ATTR_HTTP_RESPONSE_STATUS_CODE,
      ATTR_HTTP_REQUEST_METHOD,
      ATTR_SERVER_ADDRESS,
      ATTR_SERVER_PORT,
      ATTR_URL_SCHEME,
      ATTR_ERROR_TYPE
    ];
    keysToCopy.forEach((key) => {
      if (key in attributes) {
        metricsAttributes[key] = attributes[key];
      }
    });
    const durationSeconds = hrTimeToMilliseconds(hrTimeDuration(startTime, hrTime())) / 1e3;
    this._httpClientDurationHistogram.record(durationSeconds, metricsAttributes);
  }
  getRequestMethod(original) {
    const knownMethods = {
      CONNECT: true,
      OPTIONS: true,
      HEAD: true,
      GET: true,
      POST: true,
      PUT: true,
      PATCH: true,
      DELETE: true,
      TRACE: true,
      // QUERY from https://datatracker.ietf.org/doc/draft-ietf-httpbis-safe-method-w-body/
      QUERY: true
    };
    if (original.toUpperCase() in knownMethods) {
      return original.toUpperCase();
    }
    return "_OTHER";
  }
}

export { UndiciInstrumentation };
//# sourceMappingURL=undici.js.map
