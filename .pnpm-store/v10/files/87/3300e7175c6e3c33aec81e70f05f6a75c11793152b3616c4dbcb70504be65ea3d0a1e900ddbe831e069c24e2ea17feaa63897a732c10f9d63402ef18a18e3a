import { getClient } from '../../currentScopes.js';
import { SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, SEMANTIC_ATTRIBUTE_SENTRY_OP } from '../../semanticAttributes.js';
import { shouldEnableTruncation } from '../ai/utils.js';
import { spanToJSON } from '../../utils/spanUtils.js';
import { GEN_AI_TOOL_NAME_ATTRIBUTE, GEN_AI_TOOL_DESCRIPTION_ATTRIBUTE, GEN_AI_OPERATION_NAME_ATTRIBUTE, GEN_AI_TOOL_CALL_ID_ATTRIBUTE, GEN_AI_TOOL_TYPE_ATTRIBUTE, GEN_AI_RESPONSE_MODEL_ATTRIBUTE, GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE, GEN_AI_USAGE_INPUT_TOKENS_CACHED_ATTRIBUTE, GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE, GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE, GEN_AI_EMBEDDINGS_INPUT_ATTRIBUTE, GEN_AI_OUTPUT_MESSAGES_ATTRIBUTE, GEN_AI_USAGE_INPUT_TOKENS_CACHE_WRITE_ATTRIBUTE, GEN_AI_INPUT_MESSAGES_ATTRIBUTE, GEN_AI_TOOL_INPUT_ATTRIBUTE, GEN_AI_TOOL_OUTPUT_ATTRIBUTE, GEN_AI_REQUEST_MODEL_ATTRIBUTE } from '../ai/gen-ai-attributes.js';
import { toolDescriptionMap, toolCallSpanContextMap, SPAN_TO_OPERATION_NAME } from './constants.js';
import { hasSpanStreamingEnabled } from '../spans/hasSpanStreamingEnabled.js';
import { accumulateTokensForParent, applyToolDescriptionsAndTokens, applyAccumulatedTokens, requestMessagesFromPrompt, convertAvailableToolsToJsonString } from './utils.js';
import { AI_TOOL_CALL_NAME_ATTRIBUTE, AI_TOOL_CALL_ID_ATTRIBUTE, AI_OPERATION_ID_ATTRIBUTE, AI_TELEMETRY_FUNCTION_ID_ATTRIBUTE, AI_MODEL_ID_ATTRIBUTE, AI_PROMPT_TOOLS_ATTRIBUTE, OPERATION_NAME_ATTRIBUTE, AI_VALUES_ATTRIBUTE, AI_RESPONSE_TEXT_ATTRIBUTE, AI_RESPONSE_TOOL_CALLS_ATTRIBUTE, AI_RESPONSE_FINISH_REASON_ATTRIBUTE, AI_RESPONSE_PROVIDER_METADATA_ATTRIBUTE, AI_USAGE_COMPLETION_TOKENS_ATTRIBUTE, AI_USAGE_PROMPT_TOKENS_ATTRIBUTE, AI_USAGE_CACHED_INPUT_TOKENS_ATTRIBUTE, AI_USAGE_TOKENS_ATTRIBUTE, AI_PROMPT_MESSAGES_ATTRIBUTE, AI_RESPONSE_OBJECT_ATTRIBUTE, AI_TOOL_CALL_ARGS_ATTRIBUTE, AI_TOOL_CALL_RESULT_ATTRIBUTE, AI_SCHEMA_ATTRIBUTE } from './vercel-ai-attributes.js';

function onVercelAiSpanStart(span) {
  const { data: attributes, description: name } = spanToJSON(span);
  if (!name) {
    return;
  }
  if (attributes[AI_TOOL_CALL_NAME_ATTRIBUTE] && attributes[AI_TOOL_CALL_ID_ATTRIBUTE] && name === "ai.toolCall") {
    processToolCallSpan(span, attributes);
    return;
  }
  if (!attributes[AI_OPERATION_ID_ATTRIBUTE] && !name.startsWith("ai.")) {
    return;
  }
  const client = getClient();
  const integration = client?.getIntegrationByName("VercelAI");
  const enableTruncation = shouldEnableTruncation(integration?.options?.enableTruncation);
  processGenerateSpan(span, name, attributes, enableTruncation);
}
function vercelAiEventProcessor(event) {
  if (event.type === "transaction" && event.spans) {
    const tokenAccumulator = /* @__PURE__ */ new Map();
    for (const span of event.spans) {
      processEndedVercelAiSpan(span);
      accumulateTokensForParent(span, tokenAccumulator);
    }
    applyToolDescriptionsAndTokens(event.spans, tokenAccumulator);
    const trace = event.contexts?.trace;
    if (trace?.op === "gen_ai.invoke_agent") {
      applyAccumulatedTokens(trace, tokenAccumulator);
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
  const responseText = attributes[AI_RESPONSE_TEXT_ATTRIBUTE];
  const responseToolCalls = attributes[AI_RESPONSE_TOOL_CALLS_ATTRIBUTE];
  const finishReason = attributes[AI_RESPONSE_FINISH_REASON_ATTRIBUTE];
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
        delete attributes[AI_RESPONSE_TOOL_CALLS_ATTRIBUTE];
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
    attributes[GEN_AI_OUTPUT_MESSAGES_ATTRIBUTE] = JSON.stringify([outputMessage]);
    delete attributes[AI_RESPONSE_TEXT_ATTRIBUTE];
  }
}
function processVercelAiSpanAttributes(attributes) {
  renameAttributeKey(attributes, AI_USAGE_COMPLETION_TOKENS_ATTRIBUTE, GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE);
  renameAttributeKey(attributes, AI_USAGE_PROMPT_TOKENS_ATTRIBUTE, GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE);
  renameAttributeKey(attributes, AI_USAGE_CACHED_INPUT_TOKENS_ATTRIBUTE, GEN_AI_USAGE_INPUT_TOKENS_CACHED_ATTRIBUTE);
  renameAttributeKey(attributes, "ai.usage.inputTokens", GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE);
  renameAttributeKey(attributes, "ai.usage.outputTokens", GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE);
  renameAttributeKey(attributes, AI_USAGE_TOKENS_ATTRIBUTE, GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE);
  renameAttributeKey(attributes, "ai.response.avgOutputTokensPerSecond", "ai.response.avgCompletionTokensPerSecond");
  if (typeof attributes[GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] === "number" && typeof attributes[GEN_AI_USAGE_INPUT_TOKENS_CACHED_ATTRIBUTE] === "number") {
    attributes[GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = attributes[GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] + attributes[GEN_AI_USAGE_INPUT_TOKENS_CACHED_ATTRIBUTE];
  }
  if (typeof attributes[GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] === "number") {
    const outputTokens = typeof attributes[GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] === "number" ? attributes[GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] : 0;
    attributes[GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] = outputTokens + attributes[GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE];
  }
  if (attributes[AI_PROMPT_TOOLS_ATTRIBUTE] && Array.isArray(attributes[AI_PROMPT_TOOLS_ATTRIBUTE])) {
    attributes[AI_PROMPT_TOOLS_ATTRIBUTE] = convertAvailableToolsToJsonString(
      attributes[AI_PROMPT_TOOLS_ATTRIBUTE]
    );
  }
  if (attributes[OPERATION_NAME_ATTRIBUTE]) {
    const rawOperationName = attributes[AI_OPERATION_ID_ATTRIBUTE] ? attributes[AI_OPERATION_ID_ATTRIBUTE] : attributes[OPERATION_NAME_ATTRIBUTE];
    const operationName = SPAN_TO_OPERATION_NAME.get(rawOperationName) ?? rawOperationName;
    attributes[GEN_AI_OPERATION_NAME_ATTRIBUTE] = operationName;
    delete attributes[OPERATION_NAME_ATTRIBUTE];
  }
  renameAttributeKey(attributes, AI_PROMPT_MESSAGES_ATTRIBUTE, GEN_AI_INPUT_MESSAGES_ATTRIBUTE);
  buildOutputMessages(attributes);
  renameAttributeKey(attributes, AI_RESPONSE_OBJECT_ATTRIBUTE, "gen_ai.response.object");
  renameAttributeKey(attributes, AI_PROMPT_TOOLS_ATTRIBUTE, "gen_ai.request.available_tools");
  renameAttributeKey(attributes, AI_TOOL_CALL_ARGS_ATTRIBUTE, GEN_AI_TOOL_INPUT_ATTRIBUTE);
  renameAttributeKey(attributes, AI_TOOL_CALL_RESULT_ATTRIBUTE, GEN_AI_TOOL_OUTPUT_ATTRIBUTE);
  renameAttributeKey(attributes, AI_SCHEMA_ATTRIBUTE, "gen_ai.request.schema");
  renameAttributeKey(attributes, AI_MODEL_ID_ATTRIBUTE, GEN_AI_REQUEST_MODEL_ATTRIBUTE);
  if (Array.isArray(attributes[AI_VALUES_ATTRIBUTE])) {
    const parsed = attributes[AI_VALUES_ATTRIBUTE].map((v) => {
      try {
        return JSON.parse(v);
      } catch {
        return v;
      }
    });
    attributes[GEN_AI_EMBEDDINGS_INPUT_ATTRIBUTE] = parsed.length === 1 ? parsed[0] : JSON.stringify(parsed);
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
  if (attributes?.[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] !== "auto.vercelai.otel") {
    return;
  }
  processVercelAiSpanAttributes(attributes);
  if (attributes[SEMANTIC_ATTRIBUTE_SENTRY_OP] === "gen_ai.execute_tool" && span.parent_span_id) {
    const descriptions = toolDescriptionMap.get(span.parent_span_id);
    if (descriptions) {
      const toolName = attributes[GEN_AI_TOOL_NAME_ATTRIBUTE];
      if (typeof toolName === "string") {
        const desc = descriptions.get(toolName);
        if (desc) {
          attributes[GEN_AI_TOOL_DESCRIPTION_ATTRIBUTE] = desc;
        }
      }
    }
  }
  toolDescriptionMap.delete(span.span_id);
}
function renameAttributeKey(attributes, oldKey, newKey) {
  if (attributes[oldKey] != null) {
    attributes[newKey] = attributes[oldKey];
    delete attributes[oldKey];
  }
}
function processToolCallSpan(span, attributes) {
  span.setAttribute(SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.vercelai.otel");
  span.setAttribute(SEMANTIC_ATTRIBUTE_SENTRY_OP, "gen_ai.execute_tool");
  span.setAttribute(GEN_AI_OPERATION_NAME_ATTRIBUTE, "execute_tool");
  renameAttributeKey(attributes, AI_TOOL_CALL_NAME_ATTRIBUTE, GEN_AI_TOOL_NAME_ATTRIBUTE);
  renameAttributeKey(attributes, AI_TOOL_CALL_ID_ATTRIBUTE, GEN_AI_TOOL_CALL_ID_ATTRIBUTE);
  const toolCallId = attributes[GEN_AI_TOOL_CALL_ID_ATTRIBUTE];
  if (typeof toolCallId === "string") {
    toolCallSpanContextMap.set(toolCallId, span.spanContext());
  }
  if (!attributes[GEN_AI_TOOL_TYPE_ATTRIBUTE]) {
    span.setAttribute(GEN_AI_TOOL_TYPE_ATTRIBUTE, "function");
  }
  const toolName = attributes[GEN_AI_TOOL_NAME_ATTRIBUTE];
  if (toolName) {
    span.updateName(`execute_tool ${toolName}`);
  }
}
function processGenerateSpan(span, name, attributes, enableTruncation) {
  span.setAttribute(SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.vercelai.otel");
  const nameWthoutAi = name.replace("ai.", "");
  span.setAttribute("ai.pipeline.name", nameWthoutAi);
  span.updateName(nameWthoutAi);
  const functionId = attributes[AI_TELEMETRY_FUNCTION_ID_ATTRIBUTE];
  if (functionId && typeof functionId === "string") {
    span.setAttribute("gen_ai.function_id", functionId);
  }
  requestMessagesFromPrompt(span, attributes, enableTruncation);
  if (attributes[AI_MODEL_ID_ATTRIBUTE] && !attributes[GEN_AI_RESPONSE_MODEL_ATTRIBUTE]) {
    span.setAttribute(GEN_AI_RESPONSE_MODEL_ATTRIBUTE, attributes[AI_MODEL_ID_ATTRIBUTE]);
  }
  span.setAttribute("ai.streaming", name.includes("stream"));
  const operationName = SPAN_TO_OPERATION_NAME.get(name);
  if (operationName) {
    span.setAttribute(SEMANTIC_ATTRIBUTE_SENTRY_OP, `gen_ai.${operationName}`);
  } else if (name.startsWith("ai.stream")) {
    span.setAttribute(SEMANTIC_ATTRIBUTE_SENTRY_OP, "ai.run");
  }
  if (operationName === "invoke_agent") {
    if (functionId && typeof functionId === "string") {
      span.updateName(`invoke_agent ${functionId}`);
    } else {
      span.updateName("invoke_agent");
    }
    return;
  }
  const modelId = attributes[AI_MODEL_ID_ATTRIBUTE];
  if (modelId && operationName) {
    span.updateName(`${operationName} ${modelId}`);
  }
  const client = getClient();
  if (client && hasSpanStreamingEnabled(client) && attributes[AI_PROMPT_TOOLS_ATTRIBUTE] && Array.isArray(attributes[AI_PROMPT_TOOLS_ATTRIBUTE])) {
    const descriptions = /* @__PURE__ */ new Map();
    for (const toolStr of attributes[AI_PROMPT_TOOLS_ATTRIBUTE]) {
      try {
        const parsed = typeof toolStr === "string" ? JSON.parse(toolStr) : toolStr;
        if (parsed?.name && parsed?.description) {
          descriptions.set(parsed.name, parsed.description);
        }
      } catch {
      }
    }
    if (descriptions.size > 0) {
      const parentSpanId = spanToJSON(span).parent_span_id;
      if (parentSpanId) {
        toolDescriptionMap.set(parentSpanId, descriptions);
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
  const providerMetadata = attributes[AI_RESPONSE_PROVIDER_METADATA_ATTRIBUTE];
  if (providerMetadata) {
    try {
      const providerMetadataObject = JSON.parse(providerMetadata);
      const openaiMetadata = providerMetadataObject.openai ?? providerMetadataObject.azure;
      if (openaiMetadata) {
        setAttributeIfDefined(
          attributes,
          GEN_AI_USAGE_INPUT_TOKENS_CACHED_ATTRIBUTE,
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
        setAttributeIfDefined(attributes, GEN_AI_USAGE_INPUT_TOKENS_CACHED_ATTRIBUTE, cachedInputTokens);
        const cacheWriteInputTokens = providerMetadataObject.anthropic.usage?.cache_creation_input_tokens ?? providerMetadataObject.anthropic.cacheCreationInputTokens;
        setAttributeIfDefined(attributes, GEN_AI_USAGE_INPUT_TOKENS_CACHE_WRITE_ATTRIBUTE, cacheWriteInputTokens);
      }
      if (providerMetadataObject.bedrock?.usage) {
        setAttributeIfDefined(
          attributes,
          GEN_AI_USAGE_INPUT_TOKENS_CACHED_ATTRIBUTE,
          providerMetadataObject.bedrock.usage.cacheReadInputTokens
        );
        setAttributeIfDefined(
          attributes,
          GEN_AI_USAGE_INPUT_TOKENS_CACHE_WRITE_ATTRIBUTE,
          providerMetadataObject.bedrock.usage.cacheWriteInputTokens
        );
      }
      if (providerMetadataObject.deepseek) {
        setAttributeIfDefined(
          attributes,
          GEN_AI_USAGE_INPUT_TOKENS_CACHED_ATTRIBUTE,
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

export { addVercelAiProcessors, processVercelAiSpanAttributes };
//# sourceMappingURL=index.js.map
