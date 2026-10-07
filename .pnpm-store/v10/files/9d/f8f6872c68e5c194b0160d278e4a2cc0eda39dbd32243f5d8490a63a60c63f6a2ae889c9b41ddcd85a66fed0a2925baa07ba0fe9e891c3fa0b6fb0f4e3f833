Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const genAiAttributes = require('../ai/gen-ai-attributes.js');
const utils = require('../ai/utils.js');
const constants = require('./constants.js');
const vercelAiAttributes = require('./vercel-ai-attributes.js');

function accumulateTokensForParent(span, tokenAccumulator) {
  const parentSpanId = span.parent_span_id;
  if (!parentSpanId) {
    return;
  }
  const inputTokens = span.data[genAiAttributes.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE];
  const outputTokens = span.data[genAiAttributes.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE];
  if (typeof inputTokens === "number" || typeof outputTokens === "number") {
    const existing = tokenAccumulator.get(parentSpanId) || { inputTokens: 0, outputTokens: 0 };
    if (typeof inputTokens === "number") {
      existing.inputTokens += inputTokens;
    }
    if (typeof outputTokens === "number") {
      existing.outputTokens += outputTokens;
    }
    tokenAccumulator.set(parentSpanId, existing);
  }
}
function applyAccumulatedTokens(spanOrTrace, tokenAccumulator) {
  const accumulated = tokenAccumulator.get(spanOrTrace.span_id);
  if (!accumulated || !spanOrTrace.data) {
    return;
  }
  if (accumulated.inputTokens > 0) {
    spanOrTrace.data[genAiAttributes.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = accumulated.inputTokens;
  }
  if (accumulated.outputTokens > 0) {
    spanOrTrace.data[genAiAttributes.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] = accumulated.outputTokens;
  }
  if (accumulated.inputTokens > 0 || accumulated.outputTokens > 0) {
    spanOrTrace.data["gen_ai.usage.total_tokens"] = accumulated.inputTokens + accumulated.outputTokens;
  }
}
function buildToolDescriptionMap(spans) {
  const toolDescriptions = /* @__PURE__ */ new Map();
  for (const span of spans) {
    const availableTools = span.data[genAiAttributes.GEN_AI_REQUEST_AVAILABLE_TOOLS_ATTRIBUTE];
    if (typeof availableTools !== "string") {
      continue;
    }
    try {
      const tools = JSON.parse(availableTools);
      for (const tool of tools) {
        if (tool.name && tool.description && !toolDescriptions.has(tool.name)) {
          toolDescriptions.set(tool.name, tool.description);
        }
      }
    } catch {
    }
  }
  return toolDescriptions;
}
function applyToolDescriptionsAndTokens(spans, tokenAccumulator) {
  const toolDescriptions = buildToolDescriptionMap(spans);
  for (const span of spans) {
    if (span.op === "gen_ai.execute_tool") {
      const toolName = span.data[genAiAttributes.GEN_AI_TOOL_NAME_ATTRIBUTE];
      if (typeof toolName === "string") {
        const description = toolDescriptions.get(toolName);
        if (description) {
          span.data[genAiAttributes.GEN_AI_TOOL_DESCRIPTION_ATTRIBUTE] = description;
        }
      }
    }
    if (span.op === "gen_ai.invoke_agent") {
      applyAccumulatedTokens(span, tokenAccumulator);
    }
  }
}
function _INTERNAL_getSpanContextForToolCallId(toolCallId) {
  return constants.toolCallSpanContextMap.get(toolCallId);
}
function _INTERNAL_cleanupToolCallSpanContext(toolCallId) {
  constants.toolCallSpanContextMap.delete(toolCallId);
}
function convertAvailableToolsToJsonString(tools) {
  const toolObjects = tools.map((tool) => {
    if (typeof tool === "string") {
      try {
        return JSON.parse(tool);
      } catch {
        return tool;
      }
    }
    return tool;
  });
  return JSON.stringify(toolObjects);
}
function filterMessagesArray(input) {
  return input.filter(
    (m) => !!m && typeof m === "object" && "role" in m && "content" in m
  );
}
function convertUserInputToMessagesFormat(userInput) {
  try {
    const p = JSON.parse(userInput);
    if (!!p && typeof p === "object") {
      let { messages } = p;
      const { prompt, system } = p;
      const result = [];
      if (typeof system === "string") {
        result.push({ role: "system", content: system });
      }
      if (typeof messages === "string") {
        try {
          messages = JSON.parse(messages);
        } catch {
        }
      }
      if (Array.isArray(messages)) {
        result.push(...filterMessagesArray(messages));
        return result;
      }
      if (Array.isArray(prompt)) {
        result.push(...filterMessagesArray(prompt));
        return result;
      }
      if (typeof prompt === "string") {
        result.push({ role: "user", content: prompt });
      }
      if (result.length > 0) {
        return result;
      }
    }
  } catch {
  }
  return [];
}
function requestMessagesFromPrompt(span, attributes, enableTruncation) {
  if (typeof attributes[vercelAiAttributes.AI_PROMPT_ATTRIBUTE] === "string" && !attributes[genAiAttributes.GEN_AI_INPUT_MESSAGES_ATTRIBUTE] && !attributes[vercelAiAttributes.AI_PROMPT_MESSAGES_ATTRIBUTE]) {
    const userInput = attributes[vercelAiAttributes.AI_PROMPT_ATTRIBUTE];
    const messages = convertUserInputToMessagesFormat(userInput);
    if (messages.length) {
      const { systemInstructions, filteredMessages } = utils.extractSystemInstructions(messages);
      if (systemInstructions) {
        span.setAttribute(genAiAttributes.GEN_AI_SYSTEM_INSTRUCTIONS_ATTRIBUTE, systemInstructions);
      }
      const filteredLength = Array.isArray(filteredMessages) ? filteredMessages.length : 0;
      const messagesJson = enableTruncation ? utils.getTruncatedJsonString(filteredMessages) : utils.getJsonString(filteredMessages);
      span.setAttributes({
        [vercelAiAttributes.AI_PROMPT_ATTRIBUTE]: messagesJson,
        [genAiAttributes.GEN_AI_INPUT_MESSAGES_ATTRIBUTE]: messagesJson,
        [genAiAttributes.GEN_AI_INPUT_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE]: filteredLength
      });
    }
  } else if (typeof attributes[vercelAiAttributes.AI_PROMPT_MESSAGES_ATTRIBUTE] === "string") {
    try {
      const messages = JSON.parse(attributes[vercelAiAttributes.AI_PROMPT_MESSAGES_ATTRIBUTE]);
      if (Array.isArray(messages)) {
        const { systemInstructions, filteredMessages } = utils.extractSystemInstructions(messages);
        if (systemInstructions) {
          span.setAttribute(genAiAttributes.GEN_AI_SYSTEM_INSTRUCTIONS_ATTRIBUTE, systemInstructions);
        }
        const filteredLength = Array.isArray(filteredMessages) ? filteredMessages.length : 0;
        const messagesJson = enableTruncation ? utils.getTruncatedJsonString(filteredMessages) : utils.getJsonString(filteredMessages);
        span.setAttributes({
          [vercelAiAttributes.AI_PROMPT_MESSAGES_ATTRIBUTE]: messagesJson,
          [genAiAttributes.GEN_AI_INPUT_MESSAGES_ATTRIBUTE]: messagesJson,
          [genAiAttributes.GEN_AI_INPUT_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE]: filteredLength
        });
      }
    } catch {
    }
  }
}

exports._INTERNAL_cleanupToolCallSpanContext = _INTERNAL_cleanupToolCallSpanContext;
exports._INTERNAL_getSpanContextForToolCallId = _INTERNAL_getSpanContextForToolCallId;
exports.accumulateTokensForParent = accumulateTokensForParent;
exports.applyAccumulatedTokens = applyAccumulatedTokens;
exports.applyToolDescriptionsAndTokens = applyToolDescriptionsAndTokens;
exports.convertAvailableToolsToJsonString = convertAvailableToolsToJsonString;
exports.convertUserInputToMessagesFormat = convertUserInputToMessagesFormat;
exports.requestMessagesFromPrompt = requestMessagesFromPrompt;
//# sourceMappingURL=utils.js.map
