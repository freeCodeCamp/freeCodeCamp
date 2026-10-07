import { captureException } from '../../exports.js';
import { SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN } from '../../semanticAttributes.js';
import { SPAN_STATUS_ERROR } from '../spanstatus.js';
import { startSpanManual, startSpan } from '../trace.js';
import { handleCallbackErrors } from '../../utils/handleCallbackErrors.js';
import { GEN_AI_REQUEST_MODEL_ATTRIBUTE, GEN_AI_REQUEST_AVAILABLE_TOOLS_ATTRIBUTE, GEN_AI_EMBEDDINGS_INPUT_ATTRIBUTE, GEN_AI_SYSTEM_INSTRUCTIONS_ATTRIBUTE, GEN_AI_INPUT_MESSAGES_ATTRIBUTE, GEN_AI_INPUT_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE, GEN_AI_RESPONSE_MODEL_ATTRIBUTE, GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE, GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE, GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE, GEN_AI_RESPONSE_TEXT_ATTRIBUTE, GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE, GEN_AI_OPERATION_NAME_ATTRIBUTE, GEN_AI_SYSTEM_ATTRIBUTE, GEN_AI_REQUEST_TEMPERATURE_ATTRIBUTE, GEN_AI_REQUEST_TOP_P_ATTRIBUTE, GEN_AI_REQUEST_TOP_K_ATTRIBUTE, GEN_AI_REQUEST_MAX_TOKENS_ATTRIBUTE, GEN_AI_REQUEST_FREQUENCY_PENALTY_ATTRIBUTE, GEN_AI_REQUEST_PRESENCE_PENALTY_ATTRIBUTE } from '../ai/gen-ai-attributes.js';
import { resolveAIRecordingOptions, shouldEnableTruncation, buildMethodPath, extractSystemInstructions, getTruncatedJsonString, getJsonString } from '../ai/utils.js';
import { GOOGLE_GENAI_METHOD_REGISTRY, GOOGLE_GENAI_SYSTEM_NAME } from './constants.js';
import { instrumentStream } from './streaming.js';
import { contentUnionToMessages } from './utils.js';

function extractModel(params, context) {
  if ("model" in params && typeof params.model === "string") {
    return params.model;
  }
  if (context && typeof context === "object") {
    const contextObj = context;
    if ("model" in contextObj && typeof contextObj.model === "string") {
      return contextObj.model;
    }
    if ("modelVersion" in contextObj && typeof contextObj.modelVersion === "string") {
      return contextObj.modelVersion;
    }
  }
  return "unknown";
}
function extractConfigAttributes(config) {
  const attributes = {};
  if ("temperature" in config && typeof config.temperature === "number") {
    attributes[GEN_AI_REQUEST_TEMPERATURE_ATTRIBUTE] = config.temperature;
  }
  if ("topP" in config && typeof config.topP === "number") {
    attributes[GEN_AI_REQUEST_TOP_P_ATTRIBUTE] = config.topP;
  }
  if ("topK" in config && typeof config.topK === "number") {
    attributes[GEN_AI_REQUEST_TOP_K_ATTRIBUTE] = config.topK;
  }
  if ("maxOutputTokens" in config && typeof config.maxOutputTokens === "number") {
    attributes[GEN_AI_REQUEST_MAX_TOKENS_ATTRIBUTE] = config.maxOutputTokens;
  }
  if ("frequencyPenalty" in config && typeof config.frequencyPenalty === "number") {
    attributes[GEN_AI_REQUEST_FREQUENCY_PENALTY_ATTRIBUTE] = config.frequencyPenalty;
  }
  if ("presencePenalty" in config && typeof config.presencePenalty === "number") {
    attributes[GEN_AI_REQUEST_PRESENCE_PENALTY_ATTRIBUTE] = config.presencePenalty;
  }
  return attributes;
}
function extractRequestAttributes(operationName, params, context) {
  const attributes = {
    [GEN_AI_SYSTEM_ATTRIBUTE]: GOOGLE_GENAI_SYSTEM_NAME,
    [GEN_AI_OPERATION_NAME_ATTRIBUTE]: operationName,
    [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ai.google_genai"
  };
  if (params) {
    attributes[GEN_AI_REQUEST_MODEL_ATTRIBUTE] = extractModel(params, context);
    if ("config" in params && typeof params.config === "object" && params.config) {
      const config = params.config;
      Object.assign(attributes, extractConfigAttributes(config));
      if ("tools" in config && Array.isArray(config.tools)) {
        const functionDeclarations = config.tools.flatMap(
          (tool) => tool.functionDeclarations
        );
        attributes[GEN_AI_REQUEST_AVAILABLE_TOOLS_ATTRIBUTE] = JSON.stringify(functionDeclarations);
      }
    }
  } else {
    attributes[GEN_AI_REQUEST_MODEL_ATTRIBUTE] = extractModel({}, context);
  }
  return attributes;
}
function addPrivateRequestAttributes(span, params, isEmbeddings, enableTruncation) {
  if (isEmbeddings) {
    const contents = params.contents;
    if (contents != null) {
      span.setAttribute(
        GEN_AI_EMBEDDINGS_INPUT_ATTRIBUTE,
        typeof contents === "string" ? contents : JSON.stringify(contents)
      );
    }
    return;
  }
  const messages = [];
  if ("config" in params && params.config && typeof params.config === "object" && "systemInstruction" in params.config && params.config.systemInstruction) {
    messages.push(...contentUnionToMessages(params.config.systemInstruction, "system"));
  }
  if ("history" in params) {
    messages.push(...contentUnionToMessages(params.history, "user"));
  }
  if ("contents" in params) {
    messages.push(...contentUnionToMessages(params.contents, "user"));
  }
  if ("message" in params) {
    messages.push(...contentUnionToMessages(params.message, "user"));
  }
  if (Array.isArray(messages) && messages.length) {
    const { systemInstructions, filteredMessages } = extractSystemInstructions(messages);
    if (systemInstructions) {
      span.setAttribute(GEN_AI_SYSTEM_INSTRUCTIONS_ATTRIBUTE, systemInstructions);
    }
    const filteredLength = Array.isArray(filteredMessages) ? filteredMessages.length : 0;
    span.setAttributes({
      [GEN_AI_INPUT_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE]: filteredLength,
      [GEN_AI_INPUT_MESSAGES_ATTRIBUTE]: enableTruncation ? getTruncatedJsonString(filteredMessages) : getJsonString(filteredMessages)
    });
  }
}
function addResponseAttributes(span, response, recordOutputs) {
  if (!response || typeof response !== "object") return;
  if (response.modelVersion) {
    span.setAttribute(GEN_AI_RESPONSE_MODEL_ATTRIBUTE, response.modelVersion);
  }
  if (response.usageMetadata && typeof response.usageMetadata === "object") {
    const usage = response.usageMetadata;
    if (typeof usage.promptTokenCount === "number") {
      span.setAttributes({
        [GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE]: usage.promptTokenCount
      });
    }
    if (typeof usage.candidatesTokenCount === "number") {
      span.setAttributes({
        [GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE]: usage.candidatesTokenCount
      });
    }
    if (typeof usage.totalTokenCount === "number") {
      span.setAttributes({
        [GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE]: usage.totalTokenCount
      });
    }
  }
  if (recordOutputs && Array.isArray(response.candidates) && response.candidates.length > 0) {
    const responseTexts = response.candidates.map((candidate) => {
      if (candidate.content?.parts && Array.isArray(candidate.content.parts)) {
        return candidate.content.parts.map((part) => typeof part.text === "string" ? part.text : "").filter((text) => text.length > 0).join("");
      }
      return "";
    }).filter((text) => text.length > 0);
    if (responseTexts.length > 0) {
      span.setAttributes({
        [GEN_AI_RESPONSE_TEXT_ATTRIBUTE]: responseTexts.join("")
      });
    }
  }
  if (recordOutputs && response.functionCalls) {
    const functionCalls = response.functionCalls;
    if (Array.isArray(functionCalls) && functionCalls.length > 0) {
      span.setAttributes({
        [GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE]: JSON.stringify(functionCalls)
      });
    }
  }
}
function instrumentMethod(originalMethod, methodPath, instrumentedMethod, context, options) {
  const isEmbeddings = instrumentedMethod.operation === "embeddings";
  return new Proxy(originalMethod, {
    apply(target, _, args) {
      const operationName = instrumentedMethod.operation || "unknown";
      const params = args[0];
      const requestAttributes = extractRequestAttributes(operationName, params, context);
      const model = requestAttributes[GEN_AI_REQUEST_MODEL_ATTRIBUTE] ?? "unknown";
      if (instrumentedMethod.streaming) {
        return startSpanManual(
          {
            name: `${operationName} ${model}`,
            op: `gen_ai.${operationName}`,
            attributes: requestAttributes
          },
          async (span) => {
            try {
              if (options.recordInputs && params) {
                addPrivateRequestAttributes(
                  span,
                  params,
                  isEmbeddings,
                  shouldEnableTruncation(options.enableTruncation)
                );
              }
              const stream = await target.apply(context, args);
              return instrumentStream(stream, span, Boolean(options.recordOutputs));
            } catch (error) {
              span.setStatus({ code: SPAN_STATUS_ERROR, message: "internal_error" });
              captureException(error, {
                mechanism: {
                  handled: false,
                  type: "auto.ai.google_genai",
                  data: { function: methodPath }
                }
              });
              span.end();
              throw error;
            }
          }
        );
      }
      return startSpan(
        {
          name: `${operationName} ${model}`,
          op: `gen_ai.${operationName}`,
          attributes: requestAttributes
        },
        (span) => {
          if (options.recordInputs && params) {
            addPrivateRequestAttributes(span, params, isEmbeddings, shouldEnableTruncation(options.enableTruncation));
          }
          return handleCallbackErrors(
            () => target.apply(context, args),
            (error) => {
              captureException(error, {
                mechanism: { handled: false, type: "auto.ai.google_genai", data: { function: methodPath } }
              });
            },
            () => {
            },
            (result) => {
              if (!isEmbeddings) {
                addResponseAttributes(span, result, options.recordOutputs);
              }
            }
          );
        }
      );
    }
  });
}
function createDeepProxy(target, currentPath = "", options) {
  return new Proxy(target, {
    get: (t, prop, receiver) => {
      const value = Reflect.get(t, prop, receiver);
      const methodPath = buildMethodPath(currentPath, String(prop));
      const instrumentedMethod = GOOGLE_GENAI_METHOD_REGISTRY[methodPath];
      if (typeof value === "function" && instrumentedMethod) {
        const wrappedMethod = instrumentedMethod.operation ? instrumentMethod(value, methodPath, instrumentedMethod, t, options) : value.bind(t);
        if (!instrumentedMethod.proxyResultPath) {
          return wrappedMethod;
        }
        return function(...args) {
          const result = wrappedMethod(...args);
          if (result && typeof result === "object") {
            return createDeepProxy(result, instrumentedMethod.proxyResultPath, options);
          }
          return result;
        };
      }
      if (typeof value === "function") {
        return value.bind(t);
      }
      if (value && typeof value === "object") {
        return createDeepProxy(value, methodPath, options);
      }
      return value;
    }
  });
}
function instrumentGoogleGenAIClient(client, options) {
  return createDeepProxy(client, "", resolveAIRecordingOptions(options));
}

export { extractModel, instrumentGoogleGenAIClient };
//# sourceMappingURL=index.js.map
