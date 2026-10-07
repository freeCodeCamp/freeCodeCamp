import { captureException } from '../../exports.js';
import { SPAN_STATUS_ERROR } from '../spanstatus.js';
import { GEN_AI_SYSTEM_INSTRUCTIONS_ATTRIBUTE, GEN_AI_INPUT_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE, GEN_AI_INPUT_MESSAGES_ATTRIBUTE } from '../ai/gen-ai-attributes.js';
import { extractSystemInstructions, getTruncatedJsonString, getJsonString } from '../ai/utils.js';

function setMessagesAttribute(span, messages, enableTruncation) {
  if (Array.isArray(messages) && messages.length === 0) {
    return;
  }
  const { systemInstructions, filteredMessages } = extractSystemInstructions(messages);
  if (systemInstructions) {
    span.setAttributes({
      [GEN_AI_SYSTEM_INSTRUCTIONS_ATTRIBUTE]: systemInstructions
    });
  }
  const filteredLength = Array.isArray(filteredMessages) ? filteredMessages.length : 1;
  span.setAttributes({
    [GEN_AI_INPUT_MESSAGES_ATTRIBUTE]: enableTruncation ? getTruncatedJsonString(filteredMessages) : getJsonString(filteredMessages),
    [GEN_AI_INPUT_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE]: filteredLength
  });
}
const ANTHROPIC_ERROR_TYPE_TO_SPAN_STATUS = {
  invalid_request_error: "invalid_argument",
  authentication_error: "unauthenticated",
  permission_error: "permission_denied",
  not_found_error: "not_found",
  request_too_large: "failed_precondition",
  rate_limit_error: "resource_exhausted",
  api_error: "internal_error",
  overloaded_error: "unavailable"
};
function mapAnthropicErrorToStatusMessage(errorType) {
  if (!errorType) {
    return "internal_error";
  }
  return ANTHROPIC_ERROR_TYPE_TO_SPAN_STATUS[errorType] || "internal_error";
}
function handleResponseError(span, response) {
  if (response.error) {
    span.setStatus({ code: SPAN_STATUS_ERROR, message: mapAnthropicErrorToStatusMessage(response.error.type) });
    captureException(response.error, {
      mechanism: {
        handled: false,
        type: "auto.ai.anthropic.anthropic_error"
      }
    });
  }
}
function messagesFromParams(params) {
  const { system, messages, input } = params;
  const systemMessages = typeof system === "string" ? [{ role: "system", content: params.system }] : [];
  const inputParamMessages = Array.isArray(input) ? input : input != null ? [input] : void 0;
  const messagesParamMessages = Array.isArray(messages) ? messages : messages != null ? [messages] : [];
  const userMessages = inputParamMessages ?? messagesParamMessages;
  return [...systemMessages, ...userMessages];
}

export { handleResponseError, mapAnthropicErrorToStatusMessage, messagesFromParams, setMessagesAttribute };
//# sourceMappingURL=utils.js.map
