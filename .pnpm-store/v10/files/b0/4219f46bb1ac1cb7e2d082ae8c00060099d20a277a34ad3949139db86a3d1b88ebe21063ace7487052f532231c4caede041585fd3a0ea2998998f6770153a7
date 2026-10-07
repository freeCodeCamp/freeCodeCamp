import { SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN } from '../../semanticAttributes.js';
import { GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE, GEN_AI_RESPONSE_TEXT_ATTRIBUTE, GEN_AI_RESPONSE_STOP_REASON_ATTRIBUTE, GEN_AI_INPUT_MESSAGES_ATTRIBUTE, GEN_AI_INPUT_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE, GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE, GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE, GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE, GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE, GEN_AI_USAGE_CACHE_CREATION_INPUT_TOKENS_ATTRIBUTE, GEN_AI_USAGE_CACHE_READ_INPUT_TOKENS_ATTRIBUTE, GEN_AI_REQUEST_MODEL_ATTRIBUTE, GEN_AI_OPERATION_NAME_ATTRIBUTE, GEN_AI_SYSTEM_ATTRIBUTE, GEN_AI_REQUEST_TEMPERATURE_ATTRIBUTE, GEN_AI_REQUEST_MAX_TOKENS_ATTRIBUTE, GEN_AI_REQUEST_TOP_P_ATTRIBUTE, GEN_AI_REQUEST_FREQUENCY_PENALTY_ATTRIBUTE, GEN_AI_REQUEST_PRESENCE_PENALTY_ATTRIBUTE, GEN_AI_REQUEST_STREAM_ATTRIBUTE, GEN_AI_SYSTEM_INSTRUCTIONS_ATTRIBUTE, GEN_AI_RESPONSE_MODEL_ATTRIBUTE, GEN_AI_RESPONSE_ID_ATTRIBUTE, GEN_AI_AGENT_NAME_ATTRIBUTE } from '../ai/gen-ai-attributes.js';
import { isContentMedia, stripInlineMediaFromSingleMessage } from '../ai/mediaStripping.js';
import { extractSystemInstructions, getTruncatedJsonString, getJsonString } from '../ai/utils.js';
import { LANGCHAIN_ORIGIN, ROLE_MAP } from './constants.js';

const setIfDefined = (target, key, value) => {
  if (value != null) target[key] = value;
};
const setNumberIfDefined = (target, key, value) => {
  const n = Number(value);
  if (!Number.isNaN(n)) target[key] = n;
};
function asString(v) {
  if (typeof v === "string") return v;
  try {
    return JSON.stringify(v);
  } catch {
    return String(v);
  }
}
function normalizeContent(v) {
  if (Array.isArray(v)) {
    try {
      const stripped = v.map(
        (part) => part && typeof part === "object" && isContentMedia(part) ? stripInlineMediaFromSingleMessage(part) : part
      );
      return JSON.stringify(stripped);
    } catch {
      return String(v);
    }
  }
  return asString(v);
}
function normalizeMessageRole(role) {
  const normalized = role.toLowerCase();
  return ROLE_MAP[normalized] ?? normalized;
}
function normalizeRoleNameFromCtor(name) {
  if (name.includes("System")) return "system";
  if (name.includes("Human")) return "user";
  if (name.includes("AI") || name.includes("Assistant")) return "assistant";
  if (name.includes("Function")) return "function";
  if (name.includes("Tool")) return "tool";
  return "user";
}
function getInvocationParams(tags) {
  if (!tags || Array.isArray(tags)) return void 0;
  return tags.invocation_params;
}
function normalizeLangChainMessages(messages) {
  return messages.map((message) => {
    const maybeGetType = message._getType;
    if (typeof maybeGetType === "function") {
      const messageType = maybeGetType.call(message);
      return {
        role: normalizeMessageRole(messageType),
        content: normalizeContent(message.content)
      };
    }
    if (message.lc === 1 && message.kwargs) {
      const id = message.id;
      const messageType = Array.isArray(id) && id.length > 0 ? id[id.length - 1] : "";
      const role = typeof messageType === "string" ? normalizeRoleNameFromCtor(messageType) : "user";
      return {
        role: normalizeMessageRole(role),
        content: normalizeContent(message.kwargs?.content)
      };
    }
    if (message.type) {
      const role = String(message.type).toLowerCase();
      return {
        role: normalizeMessageRole(role),
        content: normalizeContent(message.content)
      };
    }
    if (message.role) {
      return {
        role: normalizeMessageRole(String(message.role)),
        content: normalizeContent(message.content)
      };
    }
    const ctor = message.constructor?.name;
    if (ctor && ctor !== "Object") {
      return {
        role: normalizeMessageRole(normalizeRoleNameFromCtor(ctor)),
        content: normalizeContent(message.content)
      };
    }
    return {
      role: "user",
      content: normalizeContent(message.content)
    };
  });
}
function extractCommonRequestAttributes(serialized, invocationParams, langSmithMetadata) {
  const attrs = {};
  const kwargs = "kwargs" in serialized ? serialized.kwargs : void 0;
  const temperature = invocationParams?.temperature ?? langSmithMetadata?.ls_temperature ?? kwargs?.temperature;
  setNumberIfDefined(attrs, GEN_AI_REQUEST_TEMPERATURE_ATTRIBUTE, temperature);
  const maxTokens = invocationParams?.max_tokens ?? langSmithMetadata?.ls_max_tokens ?? kwargs?.max_tokens;
  setNumberIfDefined(attrs, GEN_AI_REQUEST_MAX_TOKENS_ATTRIBUTE, maxTokens);
  const topP = invocationParams?.top_p ?? kwargs?.top_p;
  setNumberIfDefined(attrs, GEN_AI_REQUEST_TOP_P_ATTRIBUTE, topP);
  const frequencyPenalty = invocationParams?.frequency_penalty;
  setNumberIfDefined(attrs, GEN_AI_REQUEST_FREQUENCY_PENALTY_ATTRIBUTE, frequencyPenalty);
  const presencePenalty = invocationParams?.presence_penalty;
  setNumberIfDefined(attrs, GEN_AI_REQUEST_PRESENCE_PENALTY_ATTRIBUTE, presencePenalty);
  if (invocationParams && "stream" in invocationParams) {
    setIfDefined(attrs, GEN_AI_REQUEST_STREAM_ATTRIBUTE, Boolean(invocationParams.stream));
  }
  return attrs;
}
function baseRequestAttributes(system, modelName, serialized, invocationParams, langSmithMetadata) {
  return {
    [GEN_AI_SYSTEM_ATTRIBUTE]: asString(system ?? "langchain"),
    [GEN_AI_OPERATION_NAME_ATTRIBUTE]: "chat",
    [GEN_AI_REQUEST_MODEL_ATTRIBUTE]: asString(modelName),
    [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: LANGCHAIN_ORIGIN,
    ...extractCommonRequestAttributes(serialized, invocationParams, langSmithMetadata)
  };
}
function extractLLMRequestAttributes(llm, prompts, recordInputs, enableTruncation, invocationParams, langSmithMetadata) {
  const system = langSmithMetadata?.ls_provider;
  const modelName = invocationParams?.model ?? langSmithMetadata?.ls_model_name ?? "unknown";
  const attrs = baseRequestAttributes(system, modelName, llm, invocationParams, langSmithMetadata);
  if (recordInputs && Array.isArray(prompts) && prompts.length > 0) {
    setIfDefined(attrs, GEN_AI_INPUT_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE, prompts.length);
    const messages = prompts.map((p) => ({ role: "user", content: p }));
    setIfDefined(
      attrs,
      GEN_AI_INPUT_MESSAGES_ATTRIBUTE,
      enableTruncation ? getTruncatedJsonString(messages) : getJsonString(messages)
    );
  }
  return attrs;
}
function extractChatModelRequestAttributes(llm, langChainMessages, recordInputs, enableTruncation, invocationParams, langSmithMetadata) {
  const system = langSmithMetadata?.ls_provider ?? llm.id?.[2];
  const modelName = invocationParams?.model ?? langSmithMetadata?.ls_model_name ?? "unknown";
  const attrs = baseRequestAttributes(system, modelName, llm, invocationParams, langSmithMetadata);
  if (recordInputs && Array.isArray(langChainMessages) && langChainMessages.length > 0) {
    const normalized = normalizeLangChainMessages(langChainMessages.flat());
    const { systemInstructions, filteredMessages } = extractSystemInstructions(normalized);
    if (systemInstructions) {
      setIfDefined(attrs, GEN_AI_SYSTEM_INSTRUCTIONS_ATTRIBUTE, systemInstructions);
    }
    const filteredLength = Array.isArray(filteredMessages) ? filteredMessages.length : 0;
    setIfDefined(attrs, GEN_AI_INPUT_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE, filteredLength);
    setIfDefined(
      attrs,
      GEN_AI_INPUT_MESSAGES_ATTRIBUTE,
      enableTruncation ? getTruncatedJsonString(filteredMessages) : getJsonString(filteredMessages)
    );
  }
  return attrs;
}
function addToolCallsAttributes(generations, attrs) {
  const toolCalls = [];
  const flatGenerations = generations.flat();
  for (const gen of flatGenerations) {
    const msg = gen.message;
    const msgToolCalls = msg?.tool_calls;
    if (Array.isArray(msgToolCalls) && msgToolCalls.length > 0) {
      toolCalls.push(...msgToolCalls);
    } else {
      const content = gen.message?.content;
      if (Array.isArray(content)) {
        for (const item of content) {
          const t = item;
          if (t.type === "tool_use") toolCalls.push(t);
        }
      }
    }
  }
  if (toolCalls.length > 0) {
    setIfDefined(attrs, GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE, asString(toolCalls));
  }
}
function addTokenUsageAttributes(llmOutput, attrs) {
  if (!llmOutput) return;
  const tokenUsage = llmOutput.tokenUsage;
  const anthropicUsage = llmOutput.usage;
  if (tokenUsage) {
    setNumberIfDefined(attrs, GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE, tokenUsage.promptTokens);
    setNumberIfDefined(attrs, GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE, tokenUsage.completionTokens);
    setNumberIfDefined(attrs, GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE, tokenUsage.totalTokens);
  } else if (anthropicUsage) {
    setNumberIfDefined(attrs, GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE, anthropicUsage.input_tokens);
    setNumberIfDefined(attrs, GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE, anthropicUsage.output_tokens);
    const input = Number(anthropicUsage.input_tokens);
    const output = Number(anthropicUsage.output_tokens);
    const total = (Number.isNaN(input) ? 0 : input) + (Number.isNaN(output) ? 0 : output);
    if (total > 0) setNumberIfDefined(attrs, GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE, total);
    if (anthropicUsage.cache_creation_input_tokens !== void 0)
      setNumberIfDefined(
        attrs,
        GEN_AI_USAGE_CACHE_CREATION_INPUT_TOKENS_ATTRIBUTE,
        anthropicUsage.cache_creation_input_tokens
      );
    if (anthropicUsage.cache_read_input_tokens !== void 0)
      setNumberIfDefined(attrs, GEN_AI_USAGE_CACHE_READ_INPUT_TOKENS_ATTRIBUTE, anthropicUsage.cache_read_input_tokens);
  }
}
function extractLlmResponseAttributes(llmResult, recordOutputs) {
  if (!llmResult) return;
  const attrs = {};
  if (Array.isArray(llmResult.generations)) {
    const finishReasons = llmResult.generations.flat().map((g) => {
      if (g.generationInfo?.finish_reason) {
        return g.generationInfo.finish_reason;
      }
      if (g.generation_info?.finish_reason) {
        return g.generation_info.finish_reason;
      }
      return null;
    }).filter((r) => typeof r === "string");
    if (finishReasons.length > 0) {
      setIfDefined(attrs, GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE, asString(finishReasons));
    }
    addToolCallsAttributes(llmResult.generations, attrs);
    if (recordOutputs) {
      const texts = llmResult.generations.flat().map((gen) => gen.text ?? gen.message?.content).filter((t) => typeof t === "string");
      if (texts.length > 0) {
        setIfDefined(attrs, GEN_AI_RESPONSE_TEXT_ATTRIBUTE, asString(texts));
      }
    }
  }
  addTokenUsageAttributes(llmResult.llmOutput, attrs);
  const llmOutput = llmResult.llmOutput;
  const firstGeneration = llmResult.generations?.[0]?.[0];
  const v1Message = firstGeneration?.message;
  const modelName = llmOutput?.model_name ?? llmOutput?.model ?? v1Message?.response_metadata?.model_name;
  if (modelName) setIfDefined(attrs, GEN_AI_RESPONSE_MODEL_ATTRIBUTE, modelName);
  const responseId = llmOutput?.id ?? v1Message?.id;
  if (responseId) {
    setIfDefined(attrs, GEN_AI_RESPONSE_ID_ATTRIBUTE, responseId);
  }
  const stopReason = llmOutput?.stop_reason ?? v1Message?.response_metadata?.finish_reason;
  if (stopReason) {
    setIfDefined(attrs, GEN_AI_RESPONSE_STOP_REASON_ATTRIBUTE, asString(stopReason));
  }
  return attrs;
}
function getAgentNameFromMetadata(metadata) {
  const attrs = {};
  const agentName = metadata?.lc_agent_name;
  if (typeof agentName === "string") {
    attrs[GEN_AI_AGENT_NAME_ATTRIBUTE] = agentName;
  }
  return attrs;
}
function extractToolDefinitions(extraParams) {
  const tools = extraParams?.invocation_params?.tools ?? extraParams?.options?.tools;
  if (!Array.isArray(tools) || tools.length === 0) return void 0;
  const toolDefs = tools.map((tool) => {
    const fn = tool.function;
    return {
      type: "function",
      name: tool.name ?? fn?.name ?? "",
      description: tool.description ?? fn?.description
    };
  });
  return JSON.stringify(toolDefs);
}
function isCallbackManager(value) {
  if (!value || typeof value !== "object") {
    return false;
  }
  const candidate = value;
  return typeof candidate.addHandler === "function" && typeof candidate.copy === "function";
}
function isSentryHandler(handler) {
  return typeof handler === "object" && handler?.name === "SentryCallbackHandler";
}
function containsSentryHandler(handlers) {
  return handlers.some(isSentryHandler);
}
function _INTERNAL_mergeLangChainCallbackHandler(existing, sentryHandler) {
  if (!existing) {
    return [sentryHandler];
  }
  if (isCallbackManager(existing)) {
    if (containsSentryHandler(existing.handlers ?? [])) {
      return existing;
    }
    const copied = existing.copy();
    copied.addHandler(sentryHandler, true);
    return copied;
  }
  const handlers = Array.isArray(existing) ? existing : [existing];
  if (containsSentryHandler(handlers)) {
    return existing;
  }
  return [...handlers, sentryHandler];
}

export { _INTERNAL_mergeLangChainCallbackHandler, extractChatModelRequestAttributes, extractLLMRequestAttributes, extractLlmResponseAttributes, extractToolDefinitions, getAgentNameFromMetadata, getInvocationParams, normalizeLangChainMessages };
//# sourceMappingURL=utils.js.map
