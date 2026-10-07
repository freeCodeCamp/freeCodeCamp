Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const currentScopes = require('../../currentScopes.js');
const semanticAttributes = require('../../semanticAttributes.js');
const trace = require('../../tracing/trace.js');
const attributeExtraction = require('./attributeExtraction.js');
const attributes = require('./attributes.js');
const methodConfig = require('./methodConfig.js');
const piiFiltering = require('./piiFiltering.js');
const sessionExtraction = require('./sessionExtraction.js');

function createSpanName(method, target) {
  return target ? `${method} ${target}` : method;
}
function buildSentryAttributes(type) {
  let op;
  let origin;
  switch (type) {
    case "request":
      op = attributes.MCP_SERVER_OP_VALUE;
      origin = attributes.MCP_FUNCTION_ORIGIN_VALUE;
      break;
    case "notification-incoming":
      op = attributes.MCP_NOTIFICATION_CLIENT_TO_SERVER_OP_VALUE;
      origin = attributes.MCP_NOTIFICATION_ORIGIN_VALUE;
      break;
    case "notification-outgoing":
      op = attributes.MCP_NOTIFICATION_SERVER_TO_CLIENT_OP_VALUE;
      origin = attributes.MCP_NOTIFICATION_ORIGIN_VALUE;
      break;
  }
  return {
    [semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_OP]: op,
    [semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: origin,
    [semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: attributes.MCP_ROUTE_SOURCE_VALUE
  };
}
function createMcpSpan(config) {
  const { type, message, transport, extra, callback, options } = config;
  const { method } = message;
  const params = message.params;
  let spanName;
  if (type === "request") {
    const targetInfo = methodConfig.extractTargetInfo(method, params || {});
    spanName = createSpanName(method, targetInfo.target);
  } else {
    spanName = method;
  }
  const rawAttributes = {
    ...sessionExtraction.buildTransportAttributes(transport, extra),
    [attributes.MCP_METHOD_NAME_ATTRIBUTE]: method,
    ...attributeExtraction.buildTypeSpecificAttributes(type, message, params, options?.recordInputs),
    ...buildSentryAttributes(type)
  };
  const client = currentScopes.getClient();
  const sendDefaultPii = Boolean(client?.getOptions().sendDefaultPii);
  const attributes$1 = piiFiltering.filterMcpPiiFromSpanData(rawAttributes, sendDefaultPii);
  return trace.startSpan(
    {
      name: spanName,
      forceTransaction: true,
      attributes: attributes$1
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
  const targetInfo = methodConfig.extractTargetInfo(method, params || {});
  const spanName = createSpanName(method, targetInfo.target);
  const rawAttributes = {
    ...sessionExtraction.buildTransportAttributes(transport, extra),
    [attributes.MCP_METHOD_NAME_ATTRIBUTE]: method,
    ...attributeExtraction.buildTypeSpecificAttributes("request", jsonRpcMessage, params, options?.recordInputs),
    ...buildSentryAttributes("request")
  };
  const client = currentScopes.getClient();
  const sendDefaultPii = Boolean(client?.getOptions().sendDefaultPii);
  const attributes$1 = piiFiltering.filterMcpPiiFromSpanData(rawAttributes, sendDefaultPii);
  return {
    name: spanName,
    op: attributes.MCP_SERVER_OP_VALUE,
    forceTransaction: true,
    attributes: attributes$1
  };
}

exports.buildMcpServerSpanConfig = buildMcpServerSpanConfig;
exports.createMcpNotificationSpan = createMcpNotificationSpan;
exports.createMcpOutgoingNotificationSpan = createMcpOutgoingNotificationSpan;
//# sourceMappingURL=spans.js.map
