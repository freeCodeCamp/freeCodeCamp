import { captureException } from '../../exports.js';
import { SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN } from '../../semanticAttributes.js';
import { SPAN_STATUS_ERROR } from '../spanstatus.js';
import { startSpan, startSpanManual } from '../trace.js';
import { GEN_AI_REQUEST_AVAILABLE_TOOLS_ATTRIBUTE, GEN_AI_REQUEST_MODEL_ATTRIBUTE, GEN_AI_REQUEST_TEMPERATURE_ATTRIBUTE, GEN_AI_REQUEST_TOP_P_ATTRIBUTE, GEN_AI_REQUEST_STREAM_ATTRIBUTE, GEN_AI_REQUEST_TOP_K_ATTRIBUTE, GEN_AI_REQUEST_FREQUENCY_PENALTY_ATTRIBUTE, GEN_AI_REQUEST_MAX_TOKENS_ATTRIBUTE, GEN_AI_PROMPT_ATTRIBUTE, GEN_AI_OPERATION_NAME_ATTRIBUTE, GEN_AI_SYSTEM_ATTRIBUTE, GEN_AI_RESPONSE_TEXT_ATTRIBUTE, GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE, GEN_AI_RESPONSE_MODEL_ATTRIBUTE, GEN_AI_RESPONSE_ID_ATTRIBUTE } from '../ai/gen-ai-attributes.js';
import { resolveAIRecordingOptions, shouldEnableTruncation, wrapPromiseWithMethods, buildMethodPath, setTokenUsageAttributes } from '../ai/utils.js';
import { ANTHROPIC_METHOD_REGISTRY } from './constants.js';
import { instrumentAsyncIterableStream, instrumentMessageStream } from './streaming.js';
import { messagesFromParams, setMessagesAttribute, handleResponseError } from './utils.js';

function extractRequestAttributes(args, methodPath, operationName) {
  const attributes = {
    [GEN_AI_SYSTEM_ATTRIBUTE]: "anthropic",
    [GEN_AI_OPERATION_NAME_ATTRIBUTE]: operationName,
    [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ai.anthropic"
  };
  if (args.length > 0 && typeof args[0] === "object" && args[0] !== null) {
    const params = args[0];
    if (params.tools && Array.isArray(params.tools)) {
      attributes[GEN_AI_REQUEST_AVAILABLE_TOOLS_ATTRIBUTE] = JSON.stringify(params.tools);
    }
    attributes[GEN_AI_REQUEST_MODEL_ATTRIBUTE] = params.model ?? "unknown";
    if ("temperature" in params) attributes[GEN_AI_REQUEST_TEMPERATURE_ATTRIBUTE] = params.temperature;
    if ("top_p" in params) attributes[GEN_AI_REQUEST_TOP_P_ATTRIBUTE] = params.top_p;
    if ("stream" in params) attributes[GEN_AI_REQUEST_STREAM_ATTRIBUTE] = params.stream;
    if ("top_k" in params) attributes[GEN_AI_REQUEST_TOP_K_ATTRIBUTE] = params.top_k;
    if ("frequency_penalty" in params)
      attributes[GEN_AI_REQUEST_FREQUENCY_PENALTY_ATTRIBUTE] = params.frequency_penalty;
    if ("max_tokens" in params) attributes[GEN_AI_REQUEST_MAX_TOKENS_ATTRIBUTE] = params.max_tokens;
  } else {
    if (methodPath === "models.retrieve" || methodPath === "models.get") {
      attributes[GEN_AI_REQUEST_MODEL_ATTRIBUTE] = args[0];
    } else {
      attributes[GEN_AI_REQUEST_MODEL_ATTRIBUTE] = "unknown";
    }
  }
  return attributes;
}
function addPrivateRequestAttributes(span, params, enableTruncation) {
  const messages = messagesFromParams(params);
  setMessagesAttribute(span, messages, enableTruncation);
  if ("prompt" in params) {
    span.setAttributes({ [GEN_AI_PROMPT_ATTRIBUTE]: JSON.stringify(params.prompt) });
  }
}
function addContentAttributes(span, response) {
  if ("content" in response) {
    if (Array.isArray(response.content)) {
      span.setAttributes({
        [GEN_AI_RESPONSE_TEXT_ATTRIBUTE]: response.content.map((item) => item.text).filter((text) => !!text).join("")
      });
      const toolCalls = [];
      for (const item of response.content) {
        if (item.type === "tool_use" || item.type === "server_tool_use") {
          toolCalls.push(item);
        }
      }
      if (toolCalls.length > 0) {
        span.setAttributes({ [GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE]: JSON.stringify(toolCalls) });
      }
    }
  }
  if ("completion" in response) {
    span.setAttributes({ [GEN_AI_RESPONSE_TEXT_ATTRIBUTE]: response.completion });
  }
  if ("input_tokens" in response) {
    span.setAttributes({ [GEN_AI_RESPONSE_TEXT_ATTRIBUTE]: JSON.stringify(response.input_tokens) });
  }
}
function addMetadataAttributes(span, response) {
  if ("id" in response && "model" in response) {
    span.setAttributes({
      [GEN_AI_RESPONSE_ID_ATTRIBUTE]: response.id,
      [GEN_AI_RESPONSE_MODEL_ATTRIBUTE]: response.model
    });
    if ("usage" in response && response.usage) {
      setTokenUsageAttributes(
        span,
        response.usage.input_tokens,
        response.usage.output_tokens,
        response.usage.cache_creation_input_tokens,
        response.usage.cache_read_input_tokens
      );
    }
  }
}
function addResponseAttributes(span, response, recordOutputs) {
  if (!response || typeof response !== "object") return;
  if ("type" in response && response.type === "error") {
    handleResponseError(span, response);
    return;
  }
  if (recordOutputs) {
    addContentAttributes(span, response);
  }
  addMetadataAttributes(span, response);
}
function handleStreamingError(error, span, methodPath) {
  captureException(error, {
    mechanism: { handled: false, type: "auto.ai.anthropic", data: { function: methodPath } }
  });
  if (span.isRecording()) {
    span.setStatus({ code: SPAN_STATUS_ERROR, message: "internal_error" });
    span.end();
  }
  throw error;
}
function handleStreamingRequest(originalMethod, target, context, args, requestAttributes, operationName, methodPath, params, options, isStreamRequested, isStreamingMethod) {
  const model = requestAttributes[GEN_AI_REQUEST_MODEL_ATTRIBUTE] ?? "unknown";
  const spanConfig = {
    name: `${operationName} ${model}`,
    op: `gen_ai.${operationName}`,
    attributes: requestAttributes
  };
  if (isStreamRequested && !isStreamingMethod) {
    let originalResult;
    const instrumentedPromise = startSpanManual(spanConfig, (span) => {
      originalResult = originalMethod.apply(context, args);
      if (options.recordInputs && params) {
        addPrivateRequestAttributes(span, params, shouldEnableTruncation(options.enableTruncation));
      }
      return (async () => {
        try {
          const result = await originalResult;
          return instrumentAsyncIterableStream(
            result,
            span,
            options.recordOutputs ?? false
          );
        } catch (error) {
          return handleStreamingError(error, span, methodPath);
        }
      })();
    });
    return wrapPromiseWithMethods(originalResult, instrumentedPromise, "auto.ai.anthropic");
  } else {
    return startSpanManual(spanConfig, (span) => {
      try {
        if (options.recordInputs && params) {
          addPrivateRequestAttributes(span, params, shouldEnableTruncation(options.enableTruncation));
        }
        const messageStream = target.apply(context, args);
        return instrumentMessageStream(messageStream, span, options.recordOutputs ?? false);
      } catch (error) {
        return handleStreamingError(error, span, methodPath);
      }
    });
  }
}
function instrumentMethod(originalMethod, methodPath, instrumentedMethod, context, options) {
  return new Proxy(originalMethod, {
    apply(target, thisArg, args) {
      const operationName = instrumentedMethod.operation || "unknown";
      const requestAttributes = extractRequestAttributes(args, methodPath, operationName);
      const model = requestAttributes[GEN_AI_REQUEST_MODEL_ATTRIBUTE] ?? "unknown";
      const params = typeof args[0] === "object" ? args[0] : void 0;
      const isStreamRequested = Boolean(params?.stream);
      const isStreamingMethod = instrumentedMethod.streaming === true;
      if (isStreamRequested || isStreamingMethod) {
        return handleStreamingRequest(
          originalMethod,
          target,
          context,
          args,
          requestAttributes,
          operationName,
          methodPath,
          params,
          options,
          isStreamRequested,
          isStreamingMethod
        );
      }
      let originalResult;
      const instrumentedPromise = startSpan(
        {
          name: `${operationName} ${model}`,
          op: `gen_ai.${operationName}`,
          attributes: requestAttributes
        },
        (span) => {
          originalResult = target.apply(context, args);
          if (options.recordInputs && params) {
            addPrivateRequestAttributes(span, params, shouldEnableTruncation(options.enableTruncation));
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
                  type: "auto.ai.anthropic",
                  data: {
                    function: methodPath
                  }
                }
              });
              throw error;
            }
          );
        }
      );
      return wrapPromiseWithMethods(originalResult, instrumentedPromise, "auto.ai.anthropic");
    }
  });
}
function createDeepProxy(target, currentPath = "", options) {
  return new Proxy(target, {
    get(obj, prop) {
      const value = obj[prop];
      const methodPath = buildMethodPath(currentPath, String(prop));
      const instrumentedMethod = ANTHROPIC_METHOD_REGISTRY[methodPath];
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
function instrumentAnthropicAiClient(anthropicAiClient, options) {
  return createDeepProxy(anthropicAiClient, "", resolveAIRecordingOptions(options));
}

export { instrumentAnthropicAiClient };
//# sourceMappingURL=index.js.map
