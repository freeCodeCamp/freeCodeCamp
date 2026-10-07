Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const exports$1 = require('../../exports.js');
const semanticAttributes = require('../../semanticAttributes.js');
const spanstatus = require('../spanstatus.js');
const trace = require('../trace.js');
const handleCallbackErrors = require('../../utils/handleCallbackErrors.js');
const genAiAttributes = require('../ai/gen-ai-attributes.js');
const utils = require('../ai/utils.js');
const constants = require('./constants.js');
const streaming = require('./streaming.js');
const utils$1 = require('./utils.js');

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
    attributes[genAiAttributes.GEN_AI_REQUEST_TEMPERATURE_ATTRIBUTE] = config.temperature;
  }
  if ("topP" in config && typeof config.topP === "number") {
    attributes[genAiAttributes.GEN_AI_REQUEST_TOP_P_ATTRIBUTE] = config.topP;
  }
  if ("topK" in config && typeof config.topK === "number") {
    attributes[genAiAttributes.GEN_AI_REQUEST_TOP_K_ATTRIBUTE] = config.topK;
  }
  if ("maxOutputTokens" in config && typeof config.maxOutputTokens === "number") {
    attributes[genAiAttributes.GEN_AI_REQUEST_MAX_TOKENS_ATTRIBUTE] = config.maxOutputTokens;
  }
  if ("frequencyPenalty" in config && typeof config.frequencyPenalty === "number") {
    attributes[genAiAttributes.GEN_AI_REQUEST_FREQUENCY_PENALTY_ATTRIBUTE] = config.frequencyPenalty;
  }
  if ("presencePenalty" in config && typeof config.presencePenalty === "number") {
    attributes[genAiAttributes.GEN_AI_REQUEST_PRESENCE_PENALTY_ATTRIBUTE] = config.presencePenalty;
  }
  return attributes;
}
function extractRequestAttributes(operationName, params, context) {
  const attributes = {
    [genAiAttributes.GEN_AI_SYSTEM_ATTRIBUTE]: constants.GOOGLE_GENAI_SYSTEM_NAME,
    [genAiAttributes.GEN_AI_OPERATION_NAME_ATTRIBUTE]: operationName,
    [semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ai.google_genai"
  };
  if (params) {
    attributes[genAiAttributes.GEN_AI_REQUEST_MODEL_ATTRIBUTE] = extractModel(params, context);
    if ("config" in params && typeof params.config === "object" && params.config) {
      const config = params.config;
      Object.assign(attributes, extractConfigAttributes(config));
      if ("tools" in config && Array.isArray(config.tools)) {
        const functionDeclarations = config.tools.flatMap(
          (tool) => tool.functionDeclarations
        );
        attributes[genAiAttributes.GEN_AI_REQUEST_AVAILABLE_TOOLS_ATTRIBUTE] = JSON.stringify(functionDeclarations);
      }
    }
  } else {
    attributes[genAiAttributes.GEN_AI_REQUEST_MODEL_ATTRIBUTE] = extractModel({}, context);
  }
  return attributes;
}
function addPrivateRequestAttributes(span, params, isEmbeddings, enableTruncation) {
  if (isEmbeddings) {
    const contents = params.contents;
    if (contents != null) {
      span.setAttribute(
        genAiAttributes.GEN_AI_EMBEDDINGS_INPUT_ATTRIBUTE,
        typeof contents === "string" ? contents : JSON.stringify(contents)
      );
    }
    return;
  }
  const messages = [];
  if ("config" in params && params.config && typeof params.config === "object" && "systemInstruction" in params.config && params.config.systemInstruction) {
    messages.push(...utils$1.contentUnionToMessages(params.config.systemInstruction, "system"));
  }
  if ("history" in params) {
    messages.push(...utils$1.contentUnionToMessages(params.history, "user"));
  }
  if ("contents" in params) {
    messages.push(...utils$1.contentUnionToMessages(params.contents, "user"));
  }
  if ("message" in params) {
    messages.push(...utils$1.contentUnionToMessages(params.message, "user"));
  }
  if (Array.isArray(messages) && messages.length) {
    const { systemInstructions, filteredMessages } = utils.extractSystemInstructions(messages);
    if (systemInstructions) {
      span.setAttribute(genAiAttributes.GEN_AI_SYSTEM_INSTRUCTIONS_ATTRIBUTE, systemInstructions);
    }
    const filteredLength = Array.isArray(filteredMessages) ? filteredMessages.length : 0;
    span.setAttributes({
      [genAiAttributes.GEN_AI_INPUT_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE]: filteredLength,
      [genAiAttributes.GEN_AI_INPUT_MESSAGES_ATTRIBUTE]: enableTruncation ? utils.getTruncatedJsonString(filteredMessages) : utils.getJsonString(filteredMessages)
    });
  }
}
function addResponseAttributes(span, response, recordOutputs) {
  if (!response || typeof response !== "object") return;
  if (response.modelVersion) {
    span.setAttribute(genAiAttributes.GEN_AI_RESPONSE_MODEL_ATTRIBUTE, response.modelVersion);
  }
  if (response.usageMetadata && typeof response.usageMetadata === "object") {
    const usage = response.usageMetadata;
    if (typeof usage.promptTokenCount === "number") {
      span.setAttributes({
        [genAiAttributes.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE]: usage.promptTokenCount
      });
    }
    if (typeof usage.candidatesTokenCount === "number") {
      span.setAttributes({
        [genAiAttributes.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE]: usage.candidatesTokenCount
      });
    }
    if (typeof usage.totalTokenCount === "number") {
      span.setAttributes({
        [genAiAttributes.GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE]: usage.totalTokenCount
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
        [genAiAttributes.GEN_AI_RESPONSE_TEXT_ATTRIBUTE]: responseTexts.join("")
      });
    }
  }
  if (recordOutputs && response.functionCalls) {
    const functionCalls = response.functionCalls;
    if (Array.isArray(functionCalls) && functionCalls.length > 0) {
      span.setAttributes({
        [genAiAttributes.GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE]: JSON.stringify(functionCalls)
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
      const model = requestAttributes[genAiAttributes.GEN_AI_REQUEST_MODEL_ATTRIBUTE] ?? "unknown";
      if (instrumentedMethod.streaming) {
        return trace.startSpanManual(
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
                  utils.shouldEnableTruncation(options.enableTruncation)
                );
              }
              const stream = await target.apply(context, args);
              return streaming.instrumentStream(stream, span, Boolean(options.recordOutputs));
            } catch (error) {
              span.setStatus({ code: spanstatus.SPAN_STATUS_ERROR, message: "internal_error" });
              exports$1.captureException(error, {
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
      return trace.startSpan(
        {
          name: `${operationName} ${model}`,
          op: `gen_ai.${operationName}`,
          attributes: requestAttributes
        },
        (span) => {
          if (options.recordInputs && params) {
            addPrivateRequestAttributes(span, params, isEmbeddings, utils.shouldEnableTruncation(options.enableTruncation));
          }
          return handleCallbackErrors.handleCallbackErrors(
            () => target.apply(context, args),
            (error) => {
              exports$1.captureException(error, {
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
      const methodPath = utils.buildMethodPath(currentPath, String(prop));
      const instrumentedMethod = constants.GOOGLE_GENAI_METHOD_REGISTRY[methodPath];
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
  return createDeepProxy(client, "", utils.resolveAIRecordingOptions(options));
}

exports.extractModel = extractModel;
exports.instrumentGoogleGenAIClient = instrumentGoogleGenAIClient;
//# sourceMappingURL=index.js.map
