import { SPAN_STATUS_ERROR } from '../../tracing/spanstatus.js';
import { MCP_PROTOCOL_VERSION_ATTRIBUTE } from './attributes.js';
import { extractToolResultAttributes, extractPromptResultAttributes } from './resultExtraction.js';
import { extractSessionDataFromInitializeResponse, buildServerAttributesFromInfo } from './sessionExtraction.js';

const sessionToSpanMap = /* @__PURE__ */ new Map();
const statelessSpanMap = /* @__PURE__ */ new WeakMap();
function getOrCreateSpanMap(transport) {
  const sessionId = transport.sessionId;
  if (sessionId) {
    let spanMap2 = sessionToSpanMap.get(sessionId);
    if (!spanMap2) {
      spanMap2 = /* @__PURE__ */ new Map();
      sessionToSpanMap.set(sessionId, spanMap2);
    }
    return spanMap2;
  }
  let spanMap = statelessSpanMap.get(transport);
  if (!spanMap) {
    spanMap = /* @__PURE__ */ new Map();
    statelessSpanMap.set(transport, spanMap);
  }
  return spanMap;
}
function storeSpanForRequest(transport, requestId, span, method) {
  const spanMap = getOrCreateSpanMap(transport);
  spanMap.set(requestId, {
    span,
    method,
    // oxlint-disable-next-line sdk/no-unsafe-random-apis
    startTime: Date.now()
  });
}
function completeSpanWithResults(transport, requestId, result, options, hasError = false) {
  const spanMap = getOrCreateSpanMap(transport);
  const spanData = spanMap.get(requestId);
  if (spanData) {
    const { span, method } = spanData;
    if (hasError) {
      span.setStatus({ code: SPAN_STATUS_ERROR, message: "internal_error" });
    } else if (method === "initialize") {
      const sessionData = extractSessionDataFromInitializeResponse(result);
      const serverAttributes = buildServerAttributesFromInfo(sessionData.serverInfo);
      const initAttributes = {
        ...serverAttributes
      };
      if (sessionData.protocolVersion) {
        initAttributes[MCP_PROTOCOL_VERSION_ATTRIBUTE] = sessionData.protocolVersion;
      }
      span.setAttributes(initAttributes);
    } else if (method === "tools/call") {
      const toolAttributes = extractToolResultAttributes(result, options.recordOutputs);
      span.setAttributes(toolAttributes);
    } else if (method === "prompts/get") {
      const promptAttributes = extractPromptResultAttributes(result, options.recordOutputs);
      span.setAttributes(promptAttributes);
    }
    span.end();
    spanMap.delete(requestId);
  }
}
function cleanupPendingSpansForTransport(transport) {
  const sessionId = transport.sessionId;
  if (sessionId) {
    const spanMap2 = sessionToSpanMap.get(sessionId);
    if (spanMap2) {
      for (const [, spanData] of spanMap2) {
        spanData.span.setStatus({
          code: SPAN_STATUS_ERROR,
          message: "cancelled"
        });
        spanData.span.end();
      }
      sessionToSpanMap.delete(sessionId);
    }
    return;
  }
  const spanMap = statelessSpanMap.get(transport);
  if (spanMap) {
    for (const [, spanData] of spanMap) {
      spanData.span.setStatus({
        code: SPAN_STATUS_ERROR,
        message: "cancelled"
      });
      spanData.span.end();
    }
    spanMap.clear();
  }
}

export { cleanupPendingSpansForTransport, completeSpanWithResults, storeSpanForRequest };
//# sourceMappingURL=correlation.js.map
