import { parseStringToURLObject, isURLObjectRelative } from '../../utils/url.js';
import { MCP_REQUEST_ID_ATTRIBUTE, MCP_RESOURCE_URI_ATTRIBUTE, MCP_LOGGING_LEVEL_ATTRIBUTE, MCP_LOGGING_LOGGER_ATTRIBUTE, MCP_LOGGING_DATA_TYPE_ATTRIBUTE, MCP_LOGGING_MESSAGE_ATTRIBUTE } from './attributes.js';
import { extractTargetInfo, getRequestArguments } from './methodConfig.js';

function formatLoggingData(data) {
  return typeof data === "string" ? data : JSON.stringify(data);
}
function getNotificationAttributes(method, params, recordInputs) {
  const attributes = {};
  switch (method) {
    case "notifications/cancelled":
      if (params?.requestId) {
        attributes["mcp.cancelled.request_id"] = String(params.requestId);
      }
      if (params?.reason) {
        attributes["mcp.cancelled.reason"] = String(params.reason);
      }
      break;
    case "notifications/message":
      if (params?.level) {
        attributes[MCP_LOGGING_LEVEL_ATTRIBUTE] = String(params.level);
      }
      if (params?.logger) {
        attributes[MCP_LOGGING_LOGGER_ATTRIBUTE] = String(params.logger);
      }
      if (params?.data !== void 0) {
        attributes[MCP_LOGGING_DATA_TYPE_ATTRIBUTE] = typeof params.data;
        if (recordInputs) {
          attributes[MCP_LOGGING_MESSAGE_ATTRIBUTE] = formatLoggingData(params.data);
        }
      }
      break;
    case "notifications/progress":
      if (params?.progressToken) {
        attributes["mcp.progress.token"] = String(params.progressToken);
      }
      if (typeof params?.progress === "number") {
        attributes["mcp.progress.current"] = params.progress;
      }
      if (typeof params?.total === "number") {
        attributes["mcp.progress.total"] = params.total;
        if (typeof params?.progress === "number") {
          attributes["mcp.progress.percentage"] = params.progress / params.total * 100;
        }
      }
      if (params?.message) {
        attributes["mcp.progress.message"] = String(params.message);
      }
      break;
    case "notifications/resources/updated":
      if (params?.uri) {
        attributes[MCP_RESOURCE_URI_ATTRIBUTE] = String(params.uri);
        const urlObject = parseStringToURLObject(String(params.uri));
        if (urlObject && !isURLObjectRelative(urlObject)) {
          attributes["mcp.resource.protocol"] = urlObject.protocol.replace(":", "");
        }
      }
      break;
    case "notifications/initialized":
      attributes["mcp.lifecycle.phase"] = "initialization_complete";
      attributes["mcp.protocol.ready"] = 1;
      break;
  }
  return attributes;
}
function buildTypeSpecificAttributes(type, message, params, recordInputs) {
  if (type === "request") {
    const request = message;
    const targetInfo = extractTargetInfo(request.method, params || {});
    return {
      ...request.id !== void 0 && { [MCP_REQUEST_ID_ATTRIBUTE]: String(request.id) },
      ...targetInfo.attributes,
      ...recordInputs ? getRequestArguments(request.method, params || {}) : {}
    };
  }
  return getNotificationAttributes(message.method, params || {}, recordInputs);
}

export { buildTypeSpecificAttributes, getNotificationAttributes };
//# sourceMappingURL=attributeExtraction.js.map
