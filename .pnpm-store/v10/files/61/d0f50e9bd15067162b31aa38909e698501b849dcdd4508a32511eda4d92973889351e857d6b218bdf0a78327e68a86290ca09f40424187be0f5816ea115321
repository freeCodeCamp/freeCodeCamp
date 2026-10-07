Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const currentScopes = require('../../currentScopes.js');
const object = require('../../utils/object.js');
const trace = require('../../tracing/trace.js');
const attributes = require('./attributes.js');
const correlation = require('./correlation.js');
const errorCapture = require('./errorCapture.js');
const sessionExtraction = require('./sessionExtraction.js');
const sessionManagement = require('./sessionManagement.js');
const spans = require('./spans.js');
const validation = require('./validation.js');

function wrapTransportOnMessage(transport, options) {
  if (transport.onmessage) {
    object.fill(transport, "onmessage", (originalOnMessage) => {
      return function(message, extra) {
        if (validation.isJsonRpcRequest(message)) {
          const isInitialize = message.method === "initialize";
          let initSessionData;
          if (isInitialize) {
            try {
              initSessionData = sessionExtraction.extractSessionDataFromInitializeRequest(message);
              sessionManagement.storeSessionDataForTransport(transport, initSessionData);
            } catch {
            }
          }
          const isolationScope = currentScopes.getIsolationScope().clone();
          return currentScopes.withIsolationScope(isolationScope, () => {
            const spanConfig = spans.buildMcpServerSpanConfig(message, transport, extra, options);
            const span = trace.startInactiveSpan(spanConfig);
            if (isInitialize && initSessionData) {
              span.setAttributes({
                ...sessionExtraction.buildClientAttributesFromInfo(initSessionData.clientInfo),
                ...initSessionData.protocolVersion && {
                  [attributes.MCP_PROTOCOL_VERSION_ATTRIBUTE]: initSessionData.protocolVersion
                }
              });
            }
            correlation.storeSpanForRequest(transport, message.id, span, message.method);
            return trace.withActiveSpan(span, () => {
              return originalOnMessage.call(this, message, extra);
            });
          });
        }
        if (validation.isJsonRpcNotification(message)) {
          return spans.createMcpNotificationSpan(message, transport, extra, options, () => {
            return originalOnMessage.call(this, message, extra);
          });
        }
        return originalOnMessage.call(this, message, extra);
      };
    });
  }
}
function wrapTransportSend(transport, options) {
  if (transport.send) {
    object.fill(transport, "send", (originalSend) => {
      return async function(...args) {
        const [message] = args;
        if (validation.isJsonRpcNotification(message)) {
          return spans.createMcpOutgoingNotificationSpan(message, transport, options, () => {
            return originalSend.call(this, ...args);
          });
        }
        if (validation.isJsonRpcResponse(message)) {
          if (message.id !== null && message.id !== void 0) {
            if (message.error) {
              captureJsonRpcErrorResponse(message.error);
            }
            if (validation.isValidContentItem(message.result)) {
              if (message.result.protocolVersion || message.result.serverInfo) {
                try {
                  const serverData = sessionExtraction.extractSessionDataFromInitializeResponse(message.result);
                  sessionManagement.updateSessionDataForTransport(transport, serverData);
                } catch {
                }
              }
            }
            correlation.completeSpanWithResults(transport, message.id, message.result, options, !!message.error);
          }
        }
        return originalSend.call(this, ...args);
      };
    });
  }
}
function wrapTransportOnClose(transport) {
  if (transport.onclose) {
    object.fill(transport, "onclose", (originalOnClose) => {
      return function(...args) {
        correlation.cleanupPendingSpansForTransport(transport);
        sessionManagement.cleanupSessionDataForTransport(transport);
        return originalOnClose.call(this, ...args);
      };
    });
  }
}
function wrapTransportError(transport) {
  if (transport.onerror) {
    object.fill(transport, "onerror", (originalOnError) => {
      return function(error) {
        captureTransportError(error);
        return originalOnError.call(this, error);
      };
    });
  }
}
function captureJsonRpcErrorResponse(errorResponse) {
  try {
    if (errorResponse && typeof errorResponse === "object" && "code" in errorResponse && "message" in errorResponse) {
      const jsonRpcError = errorResponse;
      const isServerError = jsonRpcError.code === -32603 || jsonRpcError.code >= -32099 && jsonRpcError.code <= -32e3;
      if (isServerError) {
        const error = new Error(jsonRpcError.message);
        error.name = `JsonRpcError_${jsonRpcError.code}`;
        errorCapture.captureError(error, "protocol");
      }
    }
  } catch {
  }
}
function captureTransportError(error) {
  try {
    errorCapture.captureError(error, "transport");
  } catch {
  }
}

exports.wrapTransportError = wrapTransportError;
exports.wrapTransportOnClose = wrapTransportOnClose;
exports.wrapTransportOnMessage = wrapTransportOnMessage;
exports.wrapTransportSend = wrapTransportSend;
//# sourceMappingURL=transport.js.map
