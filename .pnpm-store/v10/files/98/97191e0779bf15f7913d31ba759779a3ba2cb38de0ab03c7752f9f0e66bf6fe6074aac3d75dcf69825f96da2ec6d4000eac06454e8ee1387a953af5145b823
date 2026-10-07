Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const debugBuild = require('../../debug-build.js');
const debugLogger = require('../../utils/debug-logger.js');

function isJsonRpcRequest(message) {
  return typeof message === "object" && message !== null && "jsonrpc" in message && message.jsonrpc === "2.0" && "method" in message && "id" in message;
}
function isJsonRpcNotification(message) {
  return typeof message === "object" && message !== null && "jsonrpc" in message && message.jsonrpc === "2.0" && "method" in message && !("id" in message);
}
function isJsonRpcResponse(message) {
  return typeof message === "object" && message !== null && "jsonrpc" in message && message.jsonrpc === "2.0" && "id" in message && ("result" in message || "error" in message);
}
function validateMcpServerInstance(instance) {
  if (typeof instance === "object" && instance !== null && "connect" in instance && ("tool" in instance && "resource" in instance && "prompt" in instance || "registerTool" in instance && "registerResource" in instance && "registerPrompt" in instance)) {
    return true;
  }
  debugBuild.DEBUG_BUILD && debugLogger.debug.warn("Did not patch MCP server. Interface is incompatible.");
  return false;
}
function isValidContentItem(item) {
  return item != null && typeof item === "object";
}

exports.isJsonRpcNotification = isJsonRpcNotification;
exports.isJsonRpcRequest = isJsonRpcRequest;
exports.isJsonRpcResponse = isJsonRpcResponse;
exports.isValidContentItem = isValidContentItem;
exports.validateMcpServerInstance = validateMcpServerInstance;
//# sourceMappingURL=validation.js.map
