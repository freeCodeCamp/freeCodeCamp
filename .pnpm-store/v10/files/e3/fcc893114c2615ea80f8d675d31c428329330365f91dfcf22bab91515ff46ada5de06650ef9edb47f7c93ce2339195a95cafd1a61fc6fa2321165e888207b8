Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const constants = require('./constants.js');
const debugBuild = require('../../debug-build.js');
const debugLogger = require('../../utils/debug-logger.js');
const currentScopes = require('../../currentScopes.js');
const hasSpansEnabled = require('../../utils/hasSpansEnabled.js');
const request = require('../../utils/request.js');
const patchRequestToCaptureBody = require('./patch-request-to-capture-body.js');
const url = require('../../utils/url.js');
const recordRequestSession = require('./record-request-session.js');
const propagationContext = require('../../utils/propagationContext.js');
const trace = require('../../tracing/trace.js');
const randomSafeContext = require('../../utils/randomSafeContext.js');
const semanticAttributes = require('../../semanticAttributes.js');
const spanstatus = require('../../tracing/spanstatus.js');

const INTEGRATION_NAME = "Http.Server";
const SPANS_INTEGRATION_NAME = "Http.SentryServerSpans";
const lastSentryEmitMap = /* @__PURE__ */ new WeakMap();
const kRequestMark = /* @__PURE__ */ Symbol.for("sentry_http_server_instrumented");
function markRequest(request) {
  return !request[kRequestMark] && (request[kRequestMark] = true);
}
function instrumentServer(options, server) {
  const currentEmit = server.emit;
  const instrumentedEmit = lastSentryEmitMap.get(server);
  if (currentEmit === instrumentedEmit) {
    return;
  }
  const newEmit = new Proxy(currentEmit, {
    apply(target, thisArg, args) {
      const [event, ...data] = args;
      if (event !== "request") {
        return target.apply(thisArg, args);
      }
      const client = currentScopes.getClient();
      const [request$1, response] = data;
      if (!client || !markRequest(request$1)) {
        return target.apply(thisArg, args);
      }
      debugBuild.DEBUG_BUILD && debugLogger.debug.log(INTEGRATION_NAME, "Handling incoming request");
      const isolationScope = currentScopes.getIsolationScope().clone();
      isolationScope.setClient(client);
      const ipAddress = request$1.socket?.remoteAddress;
      const url$1 = request$1.url || "/";
      const normalizedRequest = request.httpRequestToRequestData(request$1);
      const {
        maxRequestBodySize = "medium",
        ignoreRequestBody,
        sessions = true,
        sessionFlushingDelayMS = 6e4
      } = options;
      if (maxRequestBodySize !== "none" && !ignoreRequestBody?.(url$1, request$1)) {
        patchRequestToCaptureBody.patchRequestToCaptureBody(request$1, isolationScope, maxRequestBodySize, INTEGRATION_NAME);
      }
      isolationScope.setSDKProcessingMetadata({ normalizedRequest, ipAddress });
      const httpMethod = (request$1.method || "GET").toUpperCase();
      const httpTargetWithoutQueryFragment = url.stripUrlQueryAndFragment(url$1);
      const bestEffortTransactionName = `${httpMethod} ${httpTargetWithoutQueryFragment}`;
      isolationScope.setTransactionName(bestEffortTransactionName);
      if (sessions) {
        recordRequestSession.recordRequestSession(client, {
          requestIsolationScope: isolationScope,
          response,
          sessionFlushingDelayMS: sessionFlushingDelayMS ?? 6e4
        });
      }
      return currentScopes.withIsolationScope(isolationScope, () => {
        const sentryTrace = normalizedRequest.headers?.["sentry-trace"];
        const baggage = normalizedRequest.headers?.["baggage"];
        const sentryTraceValue = Array.isArray(sentryTrace) ? sentryTrace[0] : sentryTrace;
        return trace.continueTrace(
          {
            sentryTrace: sentryTraceValue,
            baggage: Array.isArray(baggage) ? baggage[0] : baggage
          },
          () => {
            const propagationContext$1 = currentScopes.getCurrentScope().getPropagationContext();
            propagationContext$1.propagationSpanId = propagationContext.generateSpanId();
            if (!sentryTraceValue) {
              propagationContext$1.traceId = propagationContext.generateTraceId();
              propagationContext$1.sampleRand = randomSafeContext.safeMathRandom();
            }
            response.once("close", () => {
              isolationScope.setContext("response", {
                status_code: response.statusCode
              });
            });
            const wrap = options.wrapServerEmitRequest;
            let emitResult = false;
            if (wrap) {
              wrap(request$1, response, normalizedRequest, () => {
                emitResult = target.apply(thisArg, args);
              });
            } else {
              emitResult = target.apply(thisArg, args);
            }
            return emitResult;
          }
        );
      });
    }
  });
  lastSentryEmitMap.set(server, newEmit);
  server.emit = newEmit;
}
function getHttpServerSubscriptions(options) {
  const userWrap = options.wrapServerEmitRequest;
  const spanWrap = buildServerSpanWrap(options);
  const effectiveOptions = {
    ...options,
    wrapServerEmitRequest(request, response, normalizedRequest, next) {
      const clientOptions = currentScopes.getClient()?.getOptions();
      const createSpans = options.spans ?? (clientOptions ? hasSpansEnabled.hasSpansEnabled(clientOptions) : false);
      if (createSpans) {
        spanWrap(request, response, normalizedRequest, next);
      } else if (userWrap) {
        userWrap(request, response, normalizedRequest, next);
      } else {
        next();
      }
    }
  };
  const onHttpServerRequest = (data) => {
    const { server } = data;
    instrumentServer(effectiveOptions, server);
  };
  return { [constants.HTTP_ON_SERVER_REQUEST]: onHttpServerRequest };
}
function buildServerSpanWrap(options) {
  const {
    wrapServerEmitRequest: userWrap,
    ignoreIncomingRequests,
    ignoreStaticAssets = true,
    onSpanCreated,
    errorMonitor = "error",
    onSpanEnd
  } = options;
  return (request$1, response, normalizedRequest, next) => {
    if (typeof __SENTRY_TRACING__ !== "undefined" && !__SENTRY_TRACING__) {
      return next();
    }
    return userWrap ? userWrap(request$1, response, normalizedRequest, createSpan) : createSpan();
    function createSpan() {
      const isolationScope = currentScopes.getIsolationScope();
      const client = isolationScope.getClient();
      if (!client) {
        return next();
      }
      if (shouldIgnoreSpansForIncomingRequest(request$1, {
        ignoreStaticAssets,
        ignoreIncomingRequests
      })) {
        debugBuild.DEBUG_BUILD && debugLogger.debug.log(SPANS_INTEGRATION_NAME, "Skipping span creation for incoming request", request$1.url);
        return next();
      }
      const fullUrl = normalizedRequest.url || request$1.url || "/";
      const urlObj = url.parseStringToURLObject(fullUrl);
      const httpTargetWithoutQueryFragment = urlObj ? urlObj.pathname : url.stripUrlQueryAndFragment(fullUrl);
      const method = (request$1.method || "GET").toUpperCase();
      const name = `${method} ${httpTargetWithoutQueryFragment}`;
      const headers = request$1.headers;
      const userAgent = headers["user-agent"];
      const ips = headers["x-forwarded-for"];
      const httpVersion = request$1.httpVersion;
      const host = headers.host;
      const hostname = host?.replace(/^(.*)(:[0-9]{1,5})/, "$1") || "localhost";
      const scheme = fullUrl.startsWith("https") ? "https" : "http";
      const { socket } = request$1;
      const { localAddress, localPort, remoteAddress, remotePort } = socket ?? {};
      return trace.startSpanManual(
        {
          name,
          // SpanKind.SERVER = 1; pass this so the OTel sampler infers
          // op='http.server' rather than 'http', which it does for
          // SpanKind.INTERNAL = 0, the default
          kind: 1,
          attributes: {
            // Sentry-specific attributes
            [semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "http.server",
            [semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.server",
            [semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "url",
            // Set http.route to the URL path as a best-effort route name.
            // Framework integrations (Express, etc.) update this via onSpanEnd.
            "http.route": httpTargetWithoutQueryFragment,
            // OTel kind (explicit attribute so it appears in span data)
            "otel.kind": "SERVER",
            // Network attributes
            "net.host.ip": localAddress,
            "net.host.port": localPort,
            "net.peer.ip": remoteAddress,
            "net.peer.port": remotePort,
            "sentry.http.prefetch": isKnownPrefetchRequest(request$1) || void 0,
            // Old Semantic Conventions attributes for compatibility
            "http.url": fullUrl,
            "http.method": method,
            "http.target": urlObj ? `${urlObj.pathname}${urlObj.search}` : httpTargetWithoutQueryFragment,
            "http.host": host,
            "net.host.name": hostname,
            "http.client_ip": typeof ips === "string" ? ips.split(",")[0] : void 0,
            "http.user_agent": userAgent,
            "http.scheme": scheme,
            "http.flavor": httpVersion,
            "net.transport": httpVersion?.toUpperCase() === "QUIC" ? "ip_udp" : "ip_tcp",
            ...getRequestContentLengthAttribute(request$1),
            ...request.httpHeadersToSpanAttributes(normalizedRequest.headers || {}, client.getDataCollectionOptions())
          }
        },
        (span) => {
          onSpanCreated?.(span, request$1, response);
          let isEnded = false;
          function endSpan(status) {
            if (isEnded) {
              return;
            }
            isEnded = true;
            span.setAttributes({
              "http.status_text": response.statusMessage?.toUpperCase(),
              "http.response.status_code": response.statusCode,
              "http.status_code": response.statusCode,
              ...request.httpHeadersToSpanAttributes(
                request.headersToDict(response.headers),
                client?.getDataCollectionOptions() ?? false,
                "response"
              )
            });
            span.setStatus(status);
            onSpanEnd?.(span, request$1, response);
            span.end();
          }
          response.once("close", () => {
            endSpan(spanstatus.getSpanStatusFromHttpCode(response.statusCode));
          });
          response.once(errorMonitor, () => {
            const httpStatus = spanstatus.getSpanStatusFromHttpCode(response.statusCode);
            endSpan(httpStatus.code === spanstatus.SPAN_STATUS_ERROR ? httpStatus : { code: spanstatus.SPAN_STATUS_ERROR });
          });
          next();
        }
      );
    }
  };
}
function shouldIgnoreSpansForIncomingRequest(request, {
  ignoreStaticAssets,
  ignoreIncomingRequests
}) {
  const urlPath = request.url;
  const method = request.method?.toUpperCase();
  if (method === "OPTIONS" || method === "HEAD" || !urlPath) {
    return true;
  }
  if (ignoreStaticAssets && method === "GET" && isStaticAssetRequest(urlPath)) {
    return true;
  }
  if (ignoreIncomingRequests?.(urlPath, request)) {
    return true;
  }
  return false;
}
function isStaticAssetRequest(urlPath) {
  const path = url.stripUrlQueryAndFragment(urlPath);
  if (path.match(/\.(ico|png|jpg|jpeg|gif|svg|css|js|woff|woff2|ttf|eot|webp|avif)$/)) {
    return true;
  }
  if (path.match(/^\/(robots\.txt|sitemap\.xml|manifest\.json|browserconfig\.xml)$/)) {
    return true;
  }
  return false;
}
function isKnownPrefetchRequest(req) {
  return req.headers["next-router-prefetch"] === "1";
}
function getRequestContentLengthAttribute(request) {
  const { headers } = request;
  const contentLengthHeader = headers["content-length"];
  const length = contentLengthHeader ? parseInt(String(contentLengthHeader), 10) : -1;
  const encoding = headers["content-encoding"];
  return length >= 0 ? encoding && encoding !== "identity" ? { "http.request_content_length": length } : { "http.request_content_length_uncompressed": length } : {};
}

exports.getHttpServerSubscriptions = getHttpServerSubscriptions;
exports.instrumentServer = instrumentServer;
exports.isStaticAssetRequest = isStaticAssetRequest;
//# sourceMappingURL=server-subscription.js.map
