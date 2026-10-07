Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const exports$1 = require('../../exports.js');
const spanstatus = require('../spanstatus.js');
const utils$1 = require('../ai/utils.js');
const constants = require('./constants.js');
const utils = require('./utils.js');

function processChatCompletionToolCalls(toolCalls, state) {
  for (const toolCall of toolCalls) {
    const index = toolCall.index;
    if (index === void 0 || !toolCall.function) continue;
    if (!(index in state.chatCompletionToolCalls)) {
      state.chatCompletionToolCalls[index] = {
        ...toolCall,
        function: {
          name: toolCall.function.name,
          arguments: toolCall.function.arguments || ""
        }
      };
    } else {
      const existingToolCall = state.chatCompletionToolCalls[index];
      if (toolCall.function.arguments && existingToolCall?.function) {
        existingToolCall.function.arguments += toolCall.function.arguments;
      }
    }
  }
}
function processChatCompletionChunk(chunk, state, recordOutputs) {
  state.responseId = chunk.id ?? state.responseId;
  state.responseModel = chunk.model ?? state.responseModel;
  if (chunk.usage) {
    state.promptTokens = chunk.usage.prompt_tokens;
    state.completionTokens = chunk.usage.completion_tokens;
    state.totalTokens = chunk.usage.total_tokens;
  }
  for (const choice of chunk.choices ?? []) {
    if (recordOutputs) {
      if (choice.delta?.content) {
        state.responseTexts.push(choice.delta.content);
      }
      if (choice.delta?.tool_calls) {
        processChatCompletionToolCalls(choice.delta.tool_calls, state);
      }
    }
    if (choice.finish_reason) {
      state.finishReasons.push(choice.finish_reason);
    }
  }
}
function processResponsesApiEvent(streamEvent, state, recordOutputs, span) {
  if (!(streamEvent && typeof streamEvent === "object")) {
    state.eventTypes.push("unknown:non-object");
    return;
  }
  if (streamEvent instanceof Error) {
    span.setStatus({ code: spanstatus.SPAN_STATUS_ERROR, message: "internal_error" });
    exports$1.captureException(streamEvent, {
      mechanism: {
        handled: false,
        type: "auto.ai.openai.stream-response"
      }
    });
    return;
  }
  if (!("type" in streamEvent)) return;
  const event = streamEvent;
  if (!constants.RESPONSE_EVENT_TYPES.includes(event.type)) {
    state.eventTypes.push(event.type);
    return;
  }
  if (recordOutputs) {
    if (event.type === "response.output_item.done" && "item" in event) {
      state.responsesApiToolCalls.push(event.item);
    }
    if (event.type === "response.output_text.delta" && "delta" in event && event.delta) {
      state.responseTexts.push(event.delta);
      return;
    }
  }
  if ("response" in event) {
    const { response } = event;
    state.responseId = response.id ?? state.responseId;
    state.responseModel = response.model ?? state.responseModel;
    if (response.usage) {
      state.promptTokens = response.usage.input_tokens;
      state.completionTokens = response.usage.output_tokens;
      state.totalTokens = response.usage.total_tokens;
    }
    if (response.status) {
      state.finishReasons.push(response.status);
    }
    if (recordOutputs && response.output_text) {
      state.responseTexts.push(response.output_text);
    }
  }
}
async function* instrumentStream(stream, span, recordOutputs) {
  const state = {
    eventTypes: [],
    responseTexts: [],
    finishReasons: [],
    responseId: "",
    responseModel: "",
    promptTokens: void 0,
    completionTokens: void 0,
    totalTokens: void 0,
    chatCompletionToolCalls: {},
    responsesApiToolCalls: []
  };
  try {
    for await (const event of stream) {
      if (utils.isChatCompletionChunk(event)) {
        processChatCompletionChunk(event, state, recordOutputs);
      } else if (utils.isResponsesApiStreamEvent(event)) {
        processResponsesApiEvent(event, state, recordOutputs, span);
      }
      yield event;
    }
  } finally {
    const allToolCalls = [...Object.values(state.chatCompletionToolCalls), ...state.responsesApiToolCalls];
    utils$1.endStreamSpan(span, { ...state, toolCalls: allToolCalls }, recordOutputs);
  }
}

exports.instrumentStream = instrumentStream;
//# sourceMappingURL=streaming.js.map
