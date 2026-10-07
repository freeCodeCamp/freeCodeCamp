Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const exports$1 = require('../../exports.js');
const currentScopes = require('../../currentScopes.js');
const hasSpanStreamingEnabled = require('../spans/hasSpanStreamingEnabled.js');
const is = require('../../utils/is.js');
const genAiAttributes = require('./gen-ai-attributes.js');
const messageTruncation = require('./messageTruncation.js');

function resolveAIRecordingOptions(options) {
  const sendDefaultPii = Boolean(currentScopes.getClient()?.getOptions().sendDefaultPii);
  return {
    ...options,
    recordInputs: options?.recordInputs ?? sendDefaultPii,
    recordOutputs: options?.recordOutputs ?? sendDefaultPii
  };
}
function shouldEnableTruncation(enableTruncation) {
  const client = currentScopes.getClient();
  return enableTruncation ?? !(client && hasSpanStreamingEnabled.hasSpanStreamingEnabled(client));
}
function buildMethodPath(currentPath, prop) {
  return currentPath ? `${currentPath}.${prop}` : prop;
}
function setTokenUsageAttributes(span, promptTokens, completionTokens, cachedInputTokens, cachedOutputTokens) {
  if (promptTokens !== void 0) {
    span.setAttributes({
      [genAiAttributes.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE]: promptTokens
    });
  }
  if (completionTokens !== void 0) {
    span.setAttributes({
      [genAiAttributes.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE]: completionTokens
    });
  }
  if (promptTokens !== void 0 || completionTokens !== void 0 || cachedInputTokens !== void 0 || cachedOutputTokens !== void 0) {
    const totalTokens = (promptTokens ?? 0) + (completionTokens ?? 0) + (cachedInputTokens ?? 0) + (cachedOutputTokens ?? 0);
    span.setAttributes({
      [genAiAttributes.GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE]: totalTokens
    });
  }
}
function endStreamSpan(span, state, recordOutputs) {
  if (!span.isRecording()) {
    return;
  }
  const attrs = {
    [genAiAttributes.GEN_AI_RESPONSE_STREAMING_ATTRIBUTE]: true
  };
  if (state.responseId) attrs[genAiAttributes.GEN_AI_RESPONSE_ID_ATTRIBUTE] = state.responseId;
  if (state.responseModel) attrs[genAiAttributes.GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = state.responseModel;
  if (state.promptTokens !== void 0) attrs[genAiAttributes.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = state.promptTokens;
  if (state.completionTokens !== void 0) attrs[genAiAttributes.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] = state.completionTokens;
  if (state.totalTokens !== void 0) {
    attrs[genAiAttributes.GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] = state.totalTokens;
  } else if (state.promptTokens !== void 0 || state.completionTokens !== void 0 || state.cacheCreationInputTokens !== void 0 || state.cacheReadInputTokens !== void 0) {
    attrs[genAiAttributes.GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] = (state.promptTokens ?? 0) + (state.completionTokens ?? 0) + (state.cacheCreationInputTokens ?? 0) + (state.cacheReadInputTokens ?? 0);
  }
  if (state.finishReasons.length) {
    attrs[genAiAttributes.GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(state.finishReasons);
  }
  if (recordOutputs && state.responseTexts.length) {
    attrs[genAiAttributes.GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = state.responseTexts.join("");
  }
  if (recordOutputs && state.toolCalls.length) {
    attrs[genAiAttributes.GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(state.toolCalls);
  }
  span.setAttributes(attrs);
  span.end();
}
function getJsonString(value) {
  if (typeof value === "string") {
    return value;
  }
  return JSON.stringify(value);
}
function getTruncatedJsonString(value) {
  if (typeof value === "string") {
    return messageTruncation.truncateGenAiStringInput(value);
  }
  if (Array.isArray(value)) {
    const truncatedMessages = messageTruncation.truncateGenAiMessages(value);
    return JSON.stringify(truncatedMessages);
  }
  return JSON.stringify(value);
}
function extractSystemInstructions(messages) {
  if (!Array.isArray(messages)) {
    return { systemInstructions: void 0, filteredMessages: messages };
  }
  const systemMessageIndex = messages.findIndex(
    (msg) => msg && typeof msg === "object" && "role" in msg && msg.role === "system"
  );
  if (systemMessageIndex === -1) {
    return { systemInstructions: void 0, filteredMessages: messages };
  }
  const systemMessage = messages[systemMessageIndex];
  const systemContent = typeof systemMessage.content === "string" ? systemMessage.content : systemMessage.content !== void 0 ? JSON.stringify(systemMessage.content) : void 0;
  if (!systemContent) {
    return { systemInstructions: void 0, filteredMessages: messages };
  }
  const systemInstructions = JSON.stringify([{ type: "text", content: systemContent }]);
  const filteredMessages = [...messages.slice(0, systemMessageIndex), ...messages.slice(systemMessageIndex + 1)];
  return { systemInstructions, filteredMessages };
}
async function createWithResponseWrapper(originalWithResponse, instrumentedPromise, mechanismType) {
  const safeOriginalWithResponse = originalWithResponse.catch((error) => {
    exports$1.captureException(error, {
      mechanism: {
        handled: false,
        type: mechanismType
      }
    });
    throw error;
  });
  const instrumentedResult = await instrumentedPromise;
  const originalWrapper = await safeOriginalWithResponse;
  if (originalWrapper && typeof originalWrapper === "object" && "data" in originalWrapper) {
    return {
      ...originalWrapper,
      data: instrumentedResult
    };
  }
  return instrumentedResult;
}
function wrapPromiseWithMethods(originalPromiseLike, instrumentedPromise, mechanismType) {
  if (!is.isThenable(originalPromiseLike)) {
    return instrumentedPromise;
  }
  return new Proxy(originalPromiseLike, {
    get(target, prop) {
      const useInstrumentedPromise = prop in Promise.prototype || prop === Symbol.toStringTag;
      const source = useInstrumentedPromise ? instrumentedPromise : target;
      const value = Reflect.get(source, prop);
      if (prop === "withResponse" && typeof value === "function") {
        return function wrappedWithResponse() {
          const originalWithResponse = value.call(target);
          return createWithResponseWrapper(originalWithResponse, instrumentedPromise, mechanismType);
        };
      }
      return typeof value === "function" ? value.bind(source) : value;
    }
  });
}

exports.buildMethodPath = buildMethodPath;
exports.endStreamSpan = endStreamSpan;
exports.extractSystemInstructions = extractSystemInstructions;
exports.getJsonString = getJsonString;
exports.getTruncatedJsonString = getTruncatedJsonString;
exports.resolveAIRecordingOptions = resolveAIRecordingOptions;
exports.setTokenUsageAttributes = setTokenUsageAttributes;
exports.shouldEnableTruncation = shouldEnableTruncation;
exports.wrapPromiseWithMethods = wrapPromiseWithMethods;
//# sourceMappingURL=utils.js.map
