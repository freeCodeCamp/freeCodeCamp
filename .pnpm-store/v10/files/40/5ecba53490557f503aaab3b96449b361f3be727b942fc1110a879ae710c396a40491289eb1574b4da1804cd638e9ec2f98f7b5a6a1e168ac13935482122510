import { getIsolationScope, withIsolationScope } from '../../currentScopes.js';
import { fill } from '../../utils/object.js';
import { startInactiveSpan, withActiveSpan } from '../../tracing/trace.js';
import { MCP_PROTOCOL_VERSION_ATTRIBUTE } from './attributes.js';
import { storeSpanForRequest, completeSpanWithResults, cleanupPendingSpansForTransport } from './correlation.js';
import { captureError } from './errorCapture.js';
import { extractSessionDataFromInitializeRequest, buildClientAttributesFromInfo, extractSessionDataFromInitializeResponse } from './sessionExtraction.js';
import { storeSessionDataForTransport, updateSessionDataForTransport, cleanupSessionDataForTransport } from './sessionManagement.js';
import { buildMcpServerSpanConfig, createMcpNotificationSpan, createMcpOutgoingNotificationSpan } from './spans.js';
import { isJsonRpcRequest, isJsonRpcNotification, isJsonRpcResponse, isValidContentItem } from './validation.js';

function wrapTransportOnMessage(transport, options) {
  if (transport.onmessage) {
    fill(transport, "onmessage", (originalOnMessage) => {
      return function(message, extra) {
        if (isJsonRpcRequest(message)) {
          const isInitialize = message.method === "initialize";
          let initSessionData;
          if (isInitialize) {
            try {
              initSessionData = extractSessionDataFromInitializeRequest(message);
              storeSessionDataForTransport(transport, initSessionData);
            } catch {
            }
          }
          const isolationScope = getIsolationScope().clone();
          return withIsolationScope(isolationScope, () => {
            const spanConfig = buildMcpServerSpanConfig(message, transport, extra, options);
            const span = startInactiveSpan(spanConfig);
            if (isInitialize && initSessionData) {
              span.setAttributes({
                ...buildClientAttributesFromInfo(initSessionData.clientInfo),
                ...initSessionData.protocolVersion && {
                  [MCP_PROTOCOL_VERSION_ATTRIBUTE]: initSessionData.protocolVersion
                }
              });
            }
            storeSpanForRequest(transport, message.id, span, message.method);
            return withActiveSpan(span, () => {
              return originalOnMessage.call(this, message, extra);
            });
          });
        }
        if (isJsonRpcNotification(message)) {
          return createMcpNotificationSpan(message, transport, extra, options, () => {
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
    fill(transport, "send", (originalSend) => {
      return async function(...args) {
        const [message] = args;
        if (isJsonRpcNotification(message)) {
          return createMcpOutgoingNotificationSpan(message, transport, options, () => {
            return originalSend.call(this, ...args);
          });
        }
        if (isJsonRpcResponse(message)) {
          if (message.id !== null && message.id !== void 0) {
            if (message.error) {
              captureJsonRpcErrorResponse(message.error);
            }
            if (isValidContentItem(message.result)) {
              if (message.result.protocolVersion || message.result.serverInfo) {
                try {
                  const serverData = extractSessionDataFromInitializeResponse(message.result);
                  updateSessionDataForTransport(transport, serverData);
                } catch {
                }
              }
            }
            completeSpanWithResults(transport, message.id, message.result, options, !!message.error);
          }
        }
        return originalSend.call(this, ...args);
      };
    });
  }
}
function wrapTransportOnClose(transport) {
  if (transport.onclose) {
    fill(transport, "onclose", (originalOnClose) => {
      return function(...args) {
        cleanupPendingSpansForTransport(transport);
        cleanupSessionDataForTransport(transport);
        return originalOnClose.call(this, ...args);
      };
    });
  }
}
function wrapTransportError(transport) {
  if (transport.onerror) {
    fill(transport, "onerror", (originalOnError) => {
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
        captureError(error, "protocol");
      }
    }
  } catch {
  }
}
function captureTransportError(error) {
  try {
    captureError(error, "transport");
  } catch {
  }
}

export { wrapTransportError, wrapTransportOnClose, wrapTransportOnMessage, wrapTransportSend };
//# sourceMappingURL=transport.js.map
