import { DEBUG_BUILD } from '../../debug-build.js';
import { captureException } from '../../exports.js';
import { SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN } from '../../semanticAttributes.js';
import { debug } from '../../utils/debug-logger.js';
import { SPAN_STATUS_ERROR } from '../spanstatus.js';
import { startSpanManual, startSpan } from '../trace.js';
import { GEN_AI_REQUEST_AVAILABLE_TOOLS_ATTRIBUTE, GEN_AI_REQUEST_MODEL_ATTRIBUTE, GEN_AI_EMBEDDINGS_INPUT_ATTRIBUTE, GEN_AI_SYSTEM_INSTRUCTIONS_ATTRIBUTE, GEN_AI_INPUT_MESSAGES_ATTRIBUTE, GEN_AI_INPUT_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE, GEN_AI_OPERATION_NAME_ATTRIBUTE, GEN_AI_SYSTEM_ATTRIBUTE } from '../ai/gen-ai-attributes.js';
import { resolveAIRecordingOptions, shouldEnableTruncation, wrapPromiseWithMethods, buildMethodPath, extractSystemInstructions, getTruncatedJsonString, getJsonString } from '../ai/utils.js';
import { OPENAI_METHOD_REGISTRY } from './constants.js';
import { instrumentStream } from './streaming.js';
import { addResponseAttributes, extractRequestParameters } from './utils.js';

function extractAvailableTools(params) {
  const tools = Array.isArray(params.tools) ? params.tools : [];
  const hasWebSearchOptions = params.web_search_options && typeof params.web_search_options === "object";
  const webSearchOptions = hasWebSearchOptions ? [{ type: "web_search_options", ...params.web_search_options }] : [];
  const availableTools = [...tools, ...webSearchOptions];
  if (availableTools.length === 0) {
    return void 0;
  }
  try {
    return JSON.stringify(availableTools);
  } catch (error) {
    DEBUG_BUILD && debug.error("Failed to serialize OpenAI tools:", error);
    return void 0;
  }
}
function extractRequestAttributes(args, operationName) {
  const attributes = {
    [GEN_AI_SYSTEM_ATTRIBUTE]: "openai",
    [GEN_AI_OPERATION_NAME_ATTRIBUTE]: operationName,
    [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ai.openai"
  };
  if (args.length > 0 && typeof args[0] === "object" && args[0] !== null) {
    const params = args[0];
    const availableTools = extractAvailableTools(params);
    if (availableTools) {
      attributes[GEN_AI_REQUEST_AVAILABLE_TOOLS_ATTRIBUTE] = availableTools;
    }
    Object.assign(attributes, extractRequestParameters(params));
  } else {
    attributes[GEN_AI_REQUEST_MODEL_ATTRIBUTE] = "unknown";
  }
  return attributes;
}
function addRequestAttributes(span, params, operationName, enableTruncation) {
  if (operationName === "embeddings" && "input" in params) {
    const input = params.input;
    if (input == null) {
      return;
    }
    if (typeof input === "string" && input.length === 0) {
      return;
    }
    if (Array.isArray(input) && input.length === 0) {
      return;
    }
    span.setAttribute(GEN_AI_EMBEDDINGS_INPUT_ATTRIBUTE, typeof input === "string" ? input : JSON.stringify(input));
    return;
  }
  const src = "input" in params ? params.input : "messages" in params ? params.messages : void 0;
  if (!src) {
    return;
  }
  if (Array.isArray(src) && src.length === 0) {
    return;
  }
  const { systemInstructions, filteredMessages } = extractSystemInstructions(src);
  if (systemInstructions) {
    span.setAttribute(GEN_AI_SYSTEM_INSTRUCTIONS_ATTRIBUTE, systemInstructions);
  }
  span.setAttribute(
    GEN_AI_INPUT_MESSAGES_ATTRIBUTE,
    enableTruncation ? getTruncatedJsonString(filteredMessages) : getJsonString(filteredMessages)
  );
  if (Array.isArray(filteredMessages)) {
    span.setAttribute(GEN_AI_INPUT_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE, filteredMessages.length);
  } else {
    span.setAttribute(GEN_AI_INPUT_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE, 1);
  }
}
function instrumentMethod(originalMethod, methodPath, instrumentedMethod, context, options) {
  return function instrumentedCall(...args) {
    const operationName = instrumentedMethod.operation || "unknown";
    const requestAttributes = extractRequestAttributes(args, operationName);
    const model = requestAttributes[GEN_AI_REQUEST_MODEL_ATTRIBUTE] || "unknown";
    const params = args[0];
    const isStreamRequested = params && typeof params === "object" && params.stream === true;
    const spanConfig = {
      name: `${operationName} ${model}`,
      op: `gen_ai.${operationName}`,
      attributes: requestAttributes
    };
    if (isStreamRequested) {
      let originalResult2;
      const instrumentedPromise2 = startSpanManual(spanConfig, (span) => {
        originalResult2 = originalMethod.apply(context, args);
        if (options.recordInputs && params) {
          addRequestAttributes(span, params, operationName, shouldEnableTruncation(options.enableTruncation));
        }
        return (async () => {
          try {
            const result = await originalResult2;
            return instrumentStream(
              result,
              span,
              options.recordOutputs ?? false
            );
          } catch (error) {
            span.setStatus({ code: SPAN_STATUS_ERROR, message: "internal_error" });
            captureException(error, {
              mechanism: {
                handled: false,
                type: "auto.ai.openai.stream",
                data: { function: methodPath }
              }
            });
            span.end();
            throw error;
          }
        })();
      });
      return wrapPromiseWithMethods(originalResult2, instrumentedPromise2, "auto.ai.openai");
    }
    let originalResult;
    const instrumentedPromise = startSpan(spanConfig, (span) => {
      originalResult = originalMethod.apply(context, args);
      if (options.recordInputs && params) {
        addRequestAttributes(span, params, operationName, shouldEnableTruncation(options.enableTruncation));
      }
      return originalResult.then(
        (result) => {
          addResponseAttributes(span, result, options.recordOutputs);
          return result;
        },
        (error) => {
          captureException(error, {
            mechanism: {
              handled: false,
              type: "auto.ai.openai",
              data: { function: methodPath }
            }
          });
          throw error;
        }
      );
    });
    return wrapPromiseWithMethods(originalResult, instrumentedPromise, "auto.ai.openai");
  };
}
function createDeepProxy(target, currentPath = "", options) {
  return new Proxy(target, {
    get(obj, prop) {
      const value = obj[prop];
      const methodPath = buildMethodPath(currentPath, String(prop));
      const instrumentedMethod = OPENAI_METHOD_REGISTRY[methodPath];
      if (typeof value === "function" && instrumentedMethod) {
        return instrumentMethod(
          value,
          methodPath,
          instrumentedMethod,
          obj,
          options
        );
      }
      if (typeof value === "function") {
        return value.bind(obj);
      }
      if (value && typeof value === "object") {
        return createDeepProxy(value, methodPath, options);
      }
      return value;
    }
  });
}
function instrumentOpenAiClient(client, options) {
  return createDeepProxy(client, "", resolveAIRecordingOptions(options));
}

export { instrumentOpenAiClient };
//# sourceMappingURL=index.js.map
