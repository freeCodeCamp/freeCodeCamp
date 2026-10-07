Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const attributes = require('./attributes.js');

const METHOD_CONFIGS = {
  "tools/call": {
    targetField: "name",
    targetAttribute: attributes.MCP_TOOL_NAME_ATTRIBUTE,
    captureArguments: true,
    argumentsField: "arguments"
  },
  "resources/read": {
    targetField: "uri",
    targetAttribute: attributes.MCP_RESOURCE_URI_ATTRIBUTE,
    captureUri: true
  },
  "resources/subscribe": {
    targetField: "uri",
    targetAttribute: attributes.MCP_RESOURCE_URI_ATTRIBUTE
  },
  "resources/unsubscribe": {
    targetField: "uri",
    targetAttribute: attributes.MCP_RESOURCE_URI_ATTRIBUTE
  },
  "prompts/get": {
    targetField: "name",
    targetAttribute: attributes.MCP_PROMPT_NAME_ATTRIBUTE,
    captureName: true,
    captureArguments: true,
    argumentsField: "arguments"
  }
};
function extractTargetInfo(method, params) {
  const config = METHOD_CONFIGS[method];
  if (!config) {
    return { attributes: {} };
  }
  const target = config.targetField && typeof params?.[config.targetField] === "string" ? params[config.targetField] : void 0;
  return {
    target,
    attributes: target && config.targetAttribute ? { [config.targetAttribute]: target } : {}
  };
}
function getRequestArguments(method, params) {
  const args = {};
  const config = METHOD_CONFIGS[method];
  if (!config) {
    return args;
  }
  if (config.captureArguments && config.argumentsField && params?.[config.argumentsField]) {
    const argumentsObj = params[config.argumentsField];
    if (typeof argumentsObj === "object" && argumentsObj !== null) {
      for (const [key, value] of Object.entries(argumentsObj)) {
        args[`${attributes.MCP_REQUEST_ARGUMENT}.${key.toLowerCase()}`] = JSON.stringify(value);
      }
    }
  }
  if (config.captureUri && params?.uri) {
    args[`${attributes.MCP_REQUEST_ARGUMENT}.uri`] = JSON.stringify(params.uri);
  }
  if (config.captureName && params?.name) {
    args[`${attributes.MCP_REQUEST_ARGUMENT}.name`] = JSON.stringify(params.name);
  }
  return args;
}

exports.extractTargetInfo = extractTargetInfo;
exports.getRequestArguments = getRequestArguments;
//# sourceMappingURL=methodConfig.js.map
