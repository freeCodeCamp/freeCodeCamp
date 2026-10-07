Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const attributes = require('./attributes.js');
const validation = require('./validation.js');

function buildAllContentItemAttributes(content, includeContent) {
  const attributes$1 = {
    [attributes.MCP_TOOL_RESULT_CONTENT_COUNT_ATTRIBUTE]: content.length
  };
  for (const [i, item] of content.entries()) {
    if (!validation.isValidContentItem(item)) {
      continue;
    }
    const prefix = content.length === 1 ? "mcp.tool.result" : `mcp.tool.result.${i}`;
    if (typeof item.type === "string") {
      attributes$1[`${prefix}.content_type`] = item.type;
    }
    if (includeContent) {
      const safeSet = (key, value) => {
        if (typeof value === "string") {
          attributes$1[`${prefix}.${key}`] = value;
        }
      };
      safeSet("mime_type", item.mimeType);
      safeSet("uri", item.uri);
      safeSet("name", item.name);
      if (typeof item.text === "string") {
        attributes$1[`${prefix}.content`] = item.text;
      }
      if (typeof item.data === "string") {
        attributes$1[`${prefix}.data_size`] = item.data.length;
      }
      const resource = item.resource;
      if (validation.isValidContentItem(resource)) {
        safeSet("resource_uri", resource.uri);
        safeSet("resource_mime_type", resource.mimeType);
      }
    }
  }
  return attributes$1;
}
function extractToolResultAttributes(result, recordOutputs) {
  if (!validation.isValidContentItem(result)) {
    return {};
  }
  const attributes$1 = Array.isArray(result.content) ? buildAllContentItemAttributes(result.content, recordOutputs) : {};
  if (typeof result.isError === "boolean") {
    attributes$1[attributes.MCP_TOOL_RESULT_IS_ERROR_ATTRIBUTE] = result.isError;
  }
  return attributes$1;
}
function extractPromptResultAttributes(result, recordOutputs) {
  const attributes$1 = {};
  if (!validation.isValidContentItem(result)) {
    return attributes$1;
  }
  if (recordOutputs && typeof result.description === "string") {
    attributes$1[attributes.MCP_PROMPT_RESULT_DESCRIPTION_ATTRIBUTE] = result.description;
  }
  if (Array.isArray(result.messages)) {
    attributes$1[attributes.MCP_PROMPT_RESULT_MESSAGE_COUNT_ATTRIBUTE] = result.messages.length;
    if (recordOutputs) {
      const messages = result.messages;
      for (const [i, message] of messages.entries()) {
        if (!validation.isValidContentItem(message)) {
          continue;
        }
        const prefix = messages.length === 1 ? "mcp.prompt.result" : `mcp.prompt.result.${i}`;
        const safeSet = (key, value) => {
          if (typeof value === "string") {
            const attrName = messages.length === 1 ? `${prefix}.message_${key}` : `${prefix}.${key}`;
            attributes$1[attrName] = value;
          }
        };
        safeSet("role", message.role);
        if (validation.isValidContentItem(message.content)) {
          const content = message.content;
          if (typeof content.text === "string") {
            const attrName = messages.length === 1 ? `${prefix}.message_content` : `${prefix}.content`;
            attributes$1[attrName] = content.text;
          }
        }
      }
    }
  }
  return attributes$1;
}

exports.extractPromptResultAttributes = extractPromptResultAttributes;
exports.extractToolResultAttributes = extractToolResultAttributes;
//# sourceMappingURL=resultExtraction.js.map
