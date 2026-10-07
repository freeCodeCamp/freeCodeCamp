import { MCP_TOOL_RESULT_IS_ERROR_ATTRIBUTE, MCP_PROMPT_RESULT_DESCRIPTION_ATTRIBUTE, MCP_PROMPT_RESULT_MESSAGE_COUNT_ATTRIBUTE, MCP_TOOL_RESULT_CONTENT_COUNT_ATTRIBUTE } from './attributes.js';
import { isValidContentItem } from './validation.js';

function buildAllContentItemAttributes(content, includeContent) {
  const attributes = {
    [MCP_TOOL_RESULT_CONTENT_COUNT_ATTRIBUTE]: content.length
  };
  for (const [i, item] of content.entries()) {
    if (!isValidContentItem(item)) {
      continue;
    }
    const prefix = content.length === 1 ? "mcp.tool.result" : `mcp.tool.result.${i}`;
    if (typeof item.type === "string") {
      attributes[`${prefix}.content_type`] = item.type;
    }
    if (includeContent) {
      const safeSet = (key, value) => {
        if (typeof value === "string") {
          attributes[`${prefix}.${key}`] = value;
        }
      };
      safeSet("mime_type", item.mimeType);
      safeSet("uri", item.uri);
      safeSet("name", item.name);
      if (typeof item.text === "string") {
        attributes[`${prefix}.content`] = item.text;
      }
      if (typeof item.data === "string") {
        attributes[`${prefix}.data_size`] = item.data.length;
      }
      const resource = item.resource;
      if (isValidContentItem(resource)) {
        safeSet("resource_uri", resource.uri);
        safeSet("resource_mime_type", resource.mimeType);
      }
    }
  }
  return attributes;
}
function extractToolResultAttributes(result, recordOutputs) {
  if (!isValidContentItem(result)) {
    return {};
  }
  const attributes = Array.isArray(result.content) ? buildAllContentItemAttributes(result.content, recordOutputs) : {};
  if (typeof result.isError === "boolean") {
    attributes[MCP_TOOL_RESULT_IS_ERROR_ATTRIBUTE] = result.isError;
  }
  return attributes;
}
function extractPromptResultAttributes(result, recordOutputs) {
  const attributes = {};
  if (!isValidContentItem(result)) {
    return attributes;
  }
  if (recordOutputs && typeof result.description === "string") {
    attributes[MCP_PROMPT_RESULT_DESCRIPTION_ATTRIBUTE] = result.description;
  }
  if (Array.isArray(result.messages)) {
    attributes[MCP_PROMPT_RESULT_MESSAGE_COUNT_ATTRIBUTE] = result.messages.length;
    if (recordOutputs) {
      const messages = result.messages;
      for (const [i, message] of messages.entries()) {
        if (!isValidContentItem(message)) {
          continue;
        }
        const prefix = messages.length === 1 ? "mcp.prompt.result" : `mcp.prompt.result.${i}`;
        const safeSet = (key, value) => {
          if (typeof value === "string") {
            const attrName = messages.length === 1 ? `${prefix}.message_${key}` : `${prefix}.${key}`;
            attributes[attrName] = value;
          }
        };
        safeSet("role", message.role);
        if (isValidContentItem(message.content)) {
          const content = message.content;
          if (typeof content.text === "string") {
            const attrName = messages.length === 1 ? `${prefix}.message_content` : `${prefix}.content`;
            attributes[attrName] = content.text;
          }
        }
      }
    }
  }
  return attributes;
}

export { extractPromptResultAttributes, extractToolResultAttributes };
//# sourceMappingURL=resultExtraction.js.map
