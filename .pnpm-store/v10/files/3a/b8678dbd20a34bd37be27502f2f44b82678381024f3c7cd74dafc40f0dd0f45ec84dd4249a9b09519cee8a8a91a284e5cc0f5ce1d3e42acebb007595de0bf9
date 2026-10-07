Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const currentScopes = require('../../currentScopes.js');
const semanticAttributes = require('../../semanticAttributes.js');
const utils = require('../ai/utils.js');
const spanUtils = require('../../utils/spanUtils.js');
const genAiAttributes = require('../ai/gen-ai-attributes.js');
const constants = require('./constants.js');
const hasSpanStreamingEnabled = require('../spans/hasSpanStreamingEnabled.js');
const utils$1 = require('./utils.js');
const vercelAiAttributes = require('./vercel-ai-attributes.js');

function onVercelAiSpanStart(span) {
  const { data: attributes, description: name } = spanUtils.spanToJSON(span);
  if (!name) {
    return;
  }
  if (attributes[vercelAiAttributes.AI_TOOL_CALL_NAME_ATTRIBUTE] && attributes[vercelAiAttributes.AI_TOOL_CALL_ID_ATTRIBUTE] && name === "ai.toolCall") {
    processToolCallSpan(span, attributes);
    return;
  }
  if (!attributes[vercelAiAttributes.AI_OPERATION_ID_ATTRIBUTE] && !name.startsWith("ai.")) {
    return;
  }
  const client = currentScopes.getClient();
  const integration = client?.getIntegrationByName("VercelAI");
  const enableTruncation = utils.shouldEnableTruncation(integration?.options?.enableTruncation);
  processGenerateSpan(span, name, attributes, enableTruncation);
}
function vercelAiEventProcessor(event) {
  if (event.type === "transaction" && event.spans) {
    const tokenAccumulator = /* @__PURE__ */ new Map();
    for (const span of event.spans) {
      processEndedVercelAiSpan(span);
      utils$1.accumulateTokensForParent(span, tokenAccumulator);
    }
    utils$1.applyToolDescriptionsAndTokens(event.spans, tokenAccumulator);
    const trace = event.contexts?.trace;
    if (trace?.op === "gen_ai.invoke_agent") {
      utils$1.applyAccumulatedTokens(trace, tokenAccumulator);
    }
  }
  return event;
}
function normalizeFinishReason(finishReason) {
  if (typeof finishReason !== "string") {
    return "stop";
  }
  switch (finishReason) {
    case "tool-calls":
      return "tool_call";
    case "stop":
    case "length":
    case "content_filter":
    case "error":
      return finishReason;
    default:
      return finishReason;
  }
}
function buildOutputMessages(attributes) {
  const responseText = attributes[vercelAiAttributes.AI_RESPONSE_TEXT_ATTRIBUTE];
  const responseToolCalls = attributes[vercelAiAttributes.AI_RESPONSE_TOOL_CALLS_ATTRIBUTE];
  const finishReason = attributes[vercelAiAttributes.AI_RESPONSE_FINISH_REASON_ATTRIBUTE];
  if (responseText == null && responseToolCalls == null) {
    return;
  }
  const parts = [];
  if (typeof responseText === "string" && responseText.length > 0) {
    parts.push({
      type: "text",
      content: responseText
    });
  }
  if (responseToolCalls != null) {
    try {
      const toolCalls = typeof responseToolCalls === "string" ? JSON.parse(responseToolCalls) : responseToolCalls;
      if (Array.isArray(toolCalls)) {
        for (const toolCall of toolCalls) {
          const args = toolCall.input ?? toolCall.args;
          parts.push({
            type: "tool_call",
            id: toolCall.toolCallId,
            name: toolCall.toolName,
            // Handle undefined args: JSON.stringify(undefined) returns undefined, not a string,
            // which would cause the property to be omitted from the final JSON output
            arguments: typeof args === "string" ? args : JSON.stringify(args ?? {})
          });
        }
        delete attributes[vercelAiAttributes.AI_RESPONSE_TOOL_CALLS_ATTRIBUTE];
      }
    } catch {
    }
  }
  if (parts.length > 0) {
    const outputMessage = {
      role: "assistant",
      parts,
      finish_reason: normalizeFinishReason(finishReason)
    };
    attributes[genAiAttributes.GEN_AI_OUTPUT_MESSAGES_ATTRIBUTE] = JSON.stringify([outputMessage]);
    delete attributes[vercelAiAttributes.AI_RESPONSE_TEXT_ATTRIBUTE];
  }
}
function processVercelAiSpanAttributes(attributes) {
  renameAttributeKey(attributes, vercelAiAttributes.AI_USAGE_COMPLETION_TOKENS_ATTRIBUTE, genAiAttributes.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE);
  renameAttributeKey(attributes, vercelAiAttributes.AI_USAGE_PROMPT_TOKENS_ATTRIBUTE, genAiAttributes.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE);
  renameAttributeKey(attributes, vercelAiAttributes.AI_USAGE_CACHED_INPUT_TOKENS_ATTRIBUTE, genAiAttributes.GEN_AI_USAGE_INPUT_TOKENS_CACHED_ATTRIBUTE);
  renameAttributeKey(attributes, "ai.usage.inputTokens", genAiAttributes.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE);
  renameAttributeKey(attributes, "ai.usage.outputTokens", genAiAttributes.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE);
  renameAttributeKey(attributes, vercelAiAttributes.AI_USAGE_TOKENS_ATTRIBUTE, genAiAttributes.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE);
  renameAttributeKey(attributes, "ai.response.avgOutputTokensPerSecond", "ai.response.avgCompletionTokensPerSecond");
  if (typeof attributes[genAiAttributes.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] === "number" && typeof attributes[genAiAttributes.GEN_AI_USAGE_INPUT_TOKENS_CACHED_ATTRIBUTE] === "number") {
    attributes[genAiAttributes.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = attributes[genAiAttributes.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] + attributes[genAiAttributes.GEN_AI_USAGE_INPUT_TOKENS_CACHED_ATTRIBUTE];
  }
  if (typeof attributes[genAiAttributes.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] === "number") {
    const outputTokens = typeof attributes[genAiAttributes.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] === "number" ? attributes[genAiAttributes.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] : 0;
    attributes[genAiAttributes.GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] = outputTokens + attributes[genAiAttributes.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE];
  }
  if (attributes[vercelAiAttributes.AI_PROMPT_TOOLS_ATTRIBUTE] && Array.isArray(attributes[vercelAiAttributes.AI_PROMPT_TOOLS_ATTRIBUTE])) {
    attributes[vercelAiAttributes.AI_PROMPT_TOOLS_ATTRIBUTE] = utils$1.convertAvailableToolsToJsonString(
      attributes[vercelAiAttributes.AI_PROMPT_TOOLS_ATTRIBUTE]
    );
  }
  if (attributes[vercelAiAttributes.OPERATION_NAME_ATTRIBUTE]) {
    const rawOperationName = attributes[vercelAiAttributes.AI_OPERATION_ID_ATTRIBUTE] ? attributes[vercelAiAttributes.AI_OPERATION_ID_ATTRIBUTE] : attributes[vercelAiAttributes.OPERATION_NAME_ATTRIBUTE];
    const operationName = constants.SPAN_TO_OPERATION_NAME.get(rawOperationName) ?? rawOperationName;
    attributes[genAiAttributes.GEN_AI_OPERATION_NAME_ATTRIBUTE] = operationName;
    delete attributes[vercelAiAttributes.OPERATION_NAME_ATTRIBUTE];
  }
  renameAttributeKey(attributes, vercelAiAttributes.AI_PROMPT_MESSAGES_ATTRIBUTE, genAiAttributes.GEN_AI_INPUT_MESSAGES_ATTRIBUTE);
  buildOutputMessages(attributes);
  renameAttributeKey(attributes, vercelAiAttributes.AI_RESPONSE_OBJECT_ATTRIBUTE, "gen_ai.response.object");
  renameAttributeKey(attributes, vercelAiAttributes.AI_PROMPT_TOOLS_ATTRIBUTE, "gen_ai.request.available_tools");
  renameAttributeKey(attributes, vercelAiAttributes.AI_TOOL_CALL_ARGS_ATTRIBUTE, genAiAttributes.GEN_AI_TOOL_INPUT_ATTRIBUTE);
  renameAttributeKey(attributes, vercelAiAttributes.AI_TOOL_CALL_RESULT_ATTRIBUTE, genAiAttributes.GEN_AI_TOOL_OUTPUT_ATTRIBUTE);
  renameAttributeKey(attributes, vercelAiAttributes.AI_SCHEMA_ATTRIBUTE, "gen_ai.request.schema");
  renameAttributeKey(attributes, vercelAiAttributes.AI_MODEL_ID_ATTRIBUTE, genAiAttributes.GEN_AI_REQUEST_MODEL_ATTRIBUTE);
  if (Array.isArray(attributes[vercelAiAttributes.AI_VALUES_ATTRIBUTE])) {
    const parsed = attributes[vercelAiAttributes.AI_VALUES_ATTRIBUTE].map((v) => {
      try {
        return JSON.parse(v);
      } catch {
        return v;
      }
    });
    attributes[genAiAttributes.GEN_AI_EMBEDDINGS_INPUT_ATTRIBUTE] = parsed.length === 1 ? parsed[0] : JSON.stringify(parsed);
  }
  addProviderMetadataToAttributes(attributes);
  for (const key of Object.keys(attributes)) {
    if (Array.isArray(attributes[key])) {
      attributes[key] = JSON.stringify(attributes[key]);
    }
    if (key.startsWith("ai.")) {
      renameAttributeKey(attributes, key, `vercel.${key}`);
    }
  }
}
function processEndedVercelAiSpan(span) {
  const { data: attributes, origin } = span;
  if (origin !== "auto.vercelai.otel") {
    return;
  }
  if (span.status && span.status !== "ok") {
    span.status = "internal_error";
  }
  processVercelAiSpanAttributes(attributes);
}
function processVercelAiStreamedSpan(span) {
  const attributes = span.attributes;
  if (attributes?.[semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] !== "auto.vercelai.otel") {
    return;
  }
  processVercelAiSpanAttributes(attributes);
  if (attributes[semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_OP] === "gen_ai.execute_tool" && span.parent_span_id) {
    const descriptions = constants.toolDescriptionMap.get(span.parent_span_id);
    if (descriptions) {
      const toolName = attributes[genAiAttributes.GEN_AI_TOOL_NAME_ATTRIBUTE];
      if (typeof toolName === "string") {
        const desc = descriptions.get(toolName);
        if (desc) {
          attributes[genAiAttributes.GEN_AI_TOOL_DESCRIPTION_ATTRIBUTE] = desc;
        }
      }
    }
  }
  constants.toolDescriptionMap.delete(span.span_id);
}
function renameAttributeKey(attributes, oldKey, newKey) {
  if (attributes[oldKey] != null) {
    attributes[newKey] = attributes[oldKey];
    delete attributes[oldKey];
  }
}
function processToolCallSpan(span, attributes) {
  span.setAttribute(semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.vercelai.otel");
  span.setAttribute(semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_OP, "gen_ai.execute_tool");
  span.setAttribute(genAiAttributes.GEN_AI_OPERATION_NAME_ATTRIBUTE, "execute_tool");
  renameAttributeKey(attributes, vercelAiAttributes.AI_TOOL_CALL_NAME_ATTRIBUTE, genAiAttributes.GEN_AI_TOOL_NAME_ATTRIBUTE);
  renameAttributeKey(attributes, vercelAiAttributes.AI_TOOL_CALL_ID_ATTRIBUTE, genAiAttributes.GEN_AI_TOOL_CALL_ID_ATTRIBUTE);
  const toolCallId = attributes[genAiAttributes.GEN_AI_TOOL_CALL_ID_ATTRIBUTE];
  if (typeof toolCallId === "string") {
    constants.toolCallSpanContextMap.set(toolCallId, span.spanContext());
  }
  if (!attributes[genAiAttributes.GEN_AI_TOOL_TYPE_ATTRIBUTE]) {
    span.setAttribute(genAiAttributes.GEN_AI_TOOL_TYPE_ATTRIBUTE, "function");
  }
  const toolName = attributes[genAiAttributes.GEN_AI_TOOL_NAME_ATTRIBUTE];
  if (toolName) {
    span.updateName(`execute_tool ${toolName}`);
  }
}
function processGenerateSpan(span, name, attributes, enableTruncation) {
  span.setAttribute(semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.vercelai.otel");
  const nameWthoutAi = name.replace("ai.", "");
  span.setAttribute("ai.pipeline.name", nameWthoutAi);
  span.updateName(nameWthoutAi);
  const functionId = attributes[vercelAiAttributes.AI_TELEMETRY_FUNCTION_ID_ATTRIBUTE];
  if (functionId && typeof functionId === "string") {
    span.setAttribute("gen_ai.function_id", functionId);
  }
  utils$1.requestMessagesFromPrompt(span, attributes, enableTruncation);
  if (attributes[vercelAiAttributes.AI_MODEL_ID_ATTRIBUTE] && !attributes[genAiAttributes.GEN_AI_RESPONSE_MODEL_ATTRIBUTE]) {
    span.setAttribute(genAiAttributes.GEN_AI_RESPONSE_MODEL_ATTRIBUTE, attributes[vercelAiAttributes.AI_MODEL_ID_ATTRIBUTE]);
  }
  span.setAttribute("ai.streaming", name.includes("stream"));
  const operationName = constants.SPAN_TO_OPERATION_NAME.get(name);
  if (operationName) {
    span.setAttribute(semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_OP, `gen_ai.${operationName}`);
  } else if (name.startsWith("ai.stream")) {
    span.setAttribute(semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_OP, "ai.run");
  }
  if (operationName === "invoke_agent") {
    if (functionId && typeof functionId === "string") {
      span.updateName(`invoke_agent ${functionId}`);
    } else {
      span.updateName("invoke_agent");
    }
    return;
  }
  const modelId = attributes[vercelAiAttributes.AI_MODEL_ID_ATTRIBUTE];
  if (modelId && operationName) {
    span.updateName(`${operationName} ${modelId}`);
  }
  const client = currentScopes.getClient();
  if (client && hasSpanStreamingEnabled.hasSpanStreamingEnabled(client) && attributes[vercelAiAttributes.AI_PROMPT_TOOLS_ATTRIBUTE] && Array.isArray(attributes[vercelAiAttributes.AI_PROMPT_TOOLS_ATTRIBUTE])) {
    const descriptions = /* @__PURE__ */ new Map();
    for (const toolStr of attributes[vercelAiAttributes.AI_PROMPT_TOOLS_ATTRIBUTE]) {
      try {
        const parsed = typeof toolStr === "string" ? JSON.parse(toolStr) : toolStr;
        if (parsed?.name && parsed?.description) {
          descriptions.set(parsed.name, parsed.description);
        }
      } catch {
      }
    }
    if (descriptions.size > 0) {
      const parentSpanId = spanUtils.spanToJSON(span).parent_span_id;
      if (parentSpanId) {
        constants.toolDescriptionMap.set(parentSpanId, descriptions);
      }
    }
  }
}
function addVercelAiProcessors(client) {
  client.on("spanStart", onVercelAiSpanStart);
  client.addEventProcessor(Object.assign(vercelAiEventProcessor, { id: "VercelAiEventProcessor" }));
  client.on("processSpan", (span) => {
    processVercelAiStreamedSpan(span);
  });
}
function addProviderMetadataToAttributes(attributes) {
  const providerMetadata = attributes[vercelAiAttributes.AI_RESPONSE_PROVIDER_METADATA_ATTRIBUTE];
  if (providerMetadata) {
    try {
      const providerMetadataObject = JSON.parse(providerMetadata);
      const openaiMetadata = providerMetadataObject.openai ?? providerMetadataObject.azure;
      if (openaiMetadata) {
        setAttributeIfDefined(
          attributes,
          genAiAttributes.GEN_AI_USAGE_INPUT_TOKENS_CACHED_ATTRIBUTE,
          openaiMetadata.cachedPromptTokens
        );
        setAttributeIfDefined(attributes, "gen_ai.usage.output_tokens.reasoning", openaiMetadata.reasoningTokens);
        setAttributeIfDefined(
          attributes,
          "gen_ai.usage.output_tokens.prediction_accepted",
          openaiMetadata.acceptedPredictionTokens
        );
        setAttributeIfDefined(
          attributes,
          "gen_ai.usage.output_tokens.prediction_rejected",
          openaiMetadata.rejectedPredictionTokens
        );
        if (!attributes["gen_ai.conversation.id"]) {
          setAttributeIfDefined(attributes, "gen_ai.conversation.id", openaiMetadata.responseId);
        }
      }
      if (providerMetadataObject.anthropic) {
        const cachedInputTokens = providerMetadataObject.anthropic.usage?.cache_read_input_tokens ?? providerMetadataObject.anthropic.cacheReadInputTokens;
        setAttributeIfDefined(attributes, genAiAttributes.GEN_AI_USAGE_INPUT_TOKENS_CACHED_ATTRIBUTE, cachedInputTokens);
        const cacheWriteInputTokens = providerMetadataObject.anthropic.usage?.cache_creation_input_tokens ?? providerMetadataObject.anthropic.cacheCreationInputTokens;
        setAttributeIfDefined(attributes, genAiAttributes.GEN_AI_USAGE_INPUT_TOKENS_CACHE_WRITE_ATTRIBUTE, cacheWriteInputTokens);
      }
      if (providerMetadataObject.bedrock?.usage) {
        setAttributeIfDefined(
          attributes,
          genAiAttributes.GEN_AI_USAGE_INPUT_TOKENS_CACHED_ATTRIBUTE,
          providerMetadataObject.bedrock.usage.cacheReadInputTokens
        );
        setAttributeIfDefined(
          attributes,
          genAiAttributes.GEN_AI_USAGE_INPUT_TOKENS_CACHE_WRITE_ATTRIBUTE,
          providerMetadataObject.bedrock.usage.cacheWriteInputTokens
        );
      }
      if (providerMetadataObject.deepseek) {
        setAttributeIfDefined(
          attributes,
          genAiAttributes.GEN_AI_USAGE_INPUT_TOKENS_CACHED_ATTRIBUTE,
          providerMetadataObject.deepseek.promptCacheHitTokens
        );
        setAttributeIfDefined(
          attributes,
          "gen_ai.usage.input_tokens.cache_miss",
          providerMetadataObject.deepseek.promptCacheMissTokens
        );
      }
    } catch {
    }
  }
}
function setAttributeIfDefined(attributes, key, value) {
  if (value != null) {
    attributes[key] = value;
  }
}

exports.addVercelAiProcessors = addVercelAiProcessors;
exports.processVercelAiSpanAttributes = processVercelAiSpanAttributes;
//# sourceMappingURL=index.js.map
