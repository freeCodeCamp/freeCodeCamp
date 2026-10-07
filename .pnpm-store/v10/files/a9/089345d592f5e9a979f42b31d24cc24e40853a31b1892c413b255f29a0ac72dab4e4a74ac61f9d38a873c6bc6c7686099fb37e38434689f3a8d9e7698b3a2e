import { getClient } from '../../currentScopes.js';
import { SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, SEMANTIC_ATTRIBUTE_SENTRY_OP } from '../../semanticAttributes.js';
import { startSpan } from '../../tracing/trace.js';
import { buildTypeSpecificAttributes } from './attributeExtraction.js';
import { MCP_SERVER_OP_VALUE, MCP_METHOD_NAME_ATTRIBUTE, MCP_ROUTE_SOURCE_VALUE, MCP_NOTIFICATION_SERVER_TO_CLIENT_OP_VALUE, MCP_NOTIFICATION_ORIGIN_VALUE, MCP_NOTIFICATION_CLIENT_TO_SERVER_OP_VALUE, MCP_FUNCTION_ORIGIN_VALUE } from './attributes.js';
import { extractTargetInfo } from './methodConfig.js';
import { filterMcpPiiFromSpanData } from './piiFiltering.js';
import { buildTransportAttributes } from './sessionExtraction.js';

function createSpanName(method, target) {
  return target ? `${method} ${target}` : method;
}
function buildSentryAttributes(type) {
  let op;
  let origin;
  switch (type) {
    case "request":
      op = MCP_SERVER_OP_VALUE;
      origin = MCP_FUNCTION_ORIGIN_VALUE;
      break;
    case "notification-incoming":
      op = MCP_NOTIFICATION_CLIENT_TO_SERVER_OP_VALUE;
      origin = MCP_NOTIFICATION_ORIGIN_VALUE;
      break;
    case "notification-outgoing":
      op = MCP_NOTIFICATION_SERVER_TO_CLIENT_OP_VALUE;
      origin = MCP_NOTIFICATION_ORIGIN_VALUE;
      break;
  }
  return {
    [SEMANTIC_ATTRIBUTE_SENTRY_OP]: op,
    [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: origin,
    [SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: MCP_ROUTE_SOURCE_VALUE
  };
}
function createMcpSpan(config) {
  const { type, message, transport, extra, callback, options } = config;
  const { method } = message;
  const params = message.params;
  let spanName;
  if (type === "request") {
    const targetInfo = extractTargetInfo(method, params || {});
    spanName = createSpanName(method, targetInfo.target);
  } else {
    spanName = method;
  }
  const rawAttributes = {
    ...buildTransportAttributes(transport, extra),
    [MCP_METHOD_NAME_ATTRIBUTE]: method,
    ...buildTypeSpecificAttributes(type, message, params, options?.recordInputs),
    ...buildSentryAttributes(type)
  };
  const client = getClient();
  const sendDefaultPii = Boolean(client?.getOptions().sendDefaultPii);
  const attributes = filterMcpPiiFromSpanData(rawAttributes, sendDefaultPii);
  return startSpan(
    {
      name: spanName,
      forceTransaction: true,
      attributes
    },
    callback
  );
}
function createMcpNotificationSpan(jsonRpcMessage, transport, extra, options, callback) {
  return createMcpSpan({
    type: "notification-incoming",
    message: jsonRpcMessage,
    transport,
    extra,
    callback,
    options
  });
}
function createMcpOutgoingNotificationSpan(jsonRpcMessage, transport, options, callback) {
  return createMcpSpan({
    type: "notification-outgoing",
    message: jsonRpcMessage,
    transport,
    options,
    callback
  });
}
function buildMcpServerSpanConfig(jsonRpcMessage, transport, extra, options) {
  const { method } = jsonRpcMessage;
  const params = jsonRpcMessage.params;
  const targetInfo = extractTargetInfo(method, params || {});
  const spanName = createSpanName(method, targetInfo.target);
  const rawAttributes = {
    ...buildTransportAttributes(transport, extra),
    [MCP_METHOD_NAME_ATTRIBUTE]: method,
    ...buildTypeSpecificAttributes("request", jsonRpcMessage, params, options?.recordInputs),
    ...buildSentryAttributes("request")
  };
  const client = getClient();
  const sendDefaultPii = Boolean(client?.getOptions().sendDefaultPii);
  const attributes = filterMcpPiiFromSpanData(rawAttributes, sendDefaultPii);
  return {
    name: spanName,
    op: MCP_SERVER_OP_VALUE,
    forceTransaction: true,
    attributes
  };
}

export { buildMcpServerSpanConfig, createMcpNotificationSpan, createMcpOutgoingNotificationSpan };
//# sourceMappingURL=spans.js.map
