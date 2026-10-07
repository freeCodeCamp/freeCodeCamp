Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const exports$1 = require('../../exports.js');
const spanstatus = require('../spanstatus.js');
const utils = require('../ai/utils.js');
const utils$1 = require('./utils.js');

function isErrorEvent(event, span) {
  if ("type" in event && typeof event.type === "string") {
    if (event.type === "error") {
      span.setStatus({ code: spanstatus.SPAN_STATUS_ERROR, message: utils$1.mapAnthropicErrorToStatusMessage(event.error?.type) });
      exports$1.captureException(event.error, {
        mechanism: {
          handled: false,
          type: "auto.ai.anthropic.anthropic_error"
        }
      });
      return true;
    }
  }
  return false;
}
function handleMessageMetadata(event, state) {
  if (event.type === "message_delta" && event.usage) {
    if ("output_tokens" in event.usage && typeof event.usage.output_tokens === "number") {
      state.completionTokens = event.usage.output_tokens;
    }
  }
  if (event.message) {
    const message = event.message;
    if (message.id) state.responseId = message.id;
    if (message.model) state.responseModel = message.model;
    if (message.stop_reason) state.finishReasons.push(message.stop_reason);
    if (message.usage) {
      if (typeof message.usage.input_tokens === "number") state.promptTokens = message.usage.input_tokens;
      if (typeof message.usage.cache_creation_input_tokens === "number")
        state.cacheCreationInputTokens = message.usage.cache_creation_input_tokens;
      if (typeof message.usage.cache_read_input_tokens === "number")
        state.cacheReadInputTokens = message.usage.cache_read_input_tokens;
    }
  }
}
function handleContentBlockStart(event, state) {
  if (event.type !== "content_block_start" || typeof event.index !== "number" || !event.content_block) return;
  if (event.content_block.type === "tool_use" || event.content_block.type === "server_tool_use") {
    state.activeToolBlocks[event.index] = {
      id: event.content_block.id,
      name: event.content_block.name,
      inputJsonParts: []
    };
  }
}
function handleContentBlockDelta(event, state, recordOutputs) {
  if (event.type !== "content_block_delta" || !event.delta) return;
  if (typeof event.index === "number" && "partial_json" in event.delta && typeof event.delta.partial_json === "string") {
    const active = state.activeToolBlocks[event.index];
    if (active) {
      active.inputJsonParts.push(event.delta.partial_json);
    }
  }
  if (recordOutputs && typeof event.delta.text === "string") {
    state.responseTexts.push(event.delta.text);
  }
}
function handleContentBlockStop(event, state) {
  if (event.type !== "content_block_stop" || typeof event.index !== "number") return;
  const active = state.activeToolBlocks[event.index];
  if (!active) return;
  const raw = active.inputJsonParts.join("");
  let parsedInput;
  try {
    parsedInput = raw ? JSON.parse(raw) : {};
  } catch {
    parsedInput = { __unparsed: raw };
  }
  state.toolCalls.push({
    type: "tool_use",
    id: active.id,
    name: active.name,
    input: parsedInput
  });
  delete state.activeToolBlocks[event.index];
}
function processEvent(event, state, recordOutputs, span) {
  if (!(event && typeof event === "object")) {
    return;
  }
  const isError = isErrorEvent(event, span);
  if (isError) return;
  handleMessageMetadata(event, state);
  handleContentBlockStart(event, state);
  handleContentBlockDelta(event, state, recordOutputs);
  handleContentBlockStop(event, state);
}
async function* instrumentAsyncIterableStream(stream, span, recordOutputs) {
  const state = {
    responseTexts: [],
    finishReasons: [],
    responseId: "",
    responseModel: "",
    promptTokens: void 0,
    completionTokens: void 0,
    cacheCreationInputTokens: void 0,
    cacheReadInputTokens: void 0,
    toolCalls: [],
    activeToolBlocks: {}
  };
  try {
    for await (const event of stream) {
      processEvent(event, state, recordOutputs, span);
      yield event;
    }
  } finally {
    utils.endStreamSpan(span, state, recordOutputs);
  }
}
function instrumentMessageStream(stream, span, recordOutputs) {
  const state = {
    responseTexts: [],
    finishReasons: [],
    responseId: "",
    responseModel: "",
    promptTokens: void 0,
    completionTokens: void 0,
    cacheCreationInputTokens: void 0,
    cacheReadInputTokens: void 0,
    toolCalls: [],
    activeToolBlocks: {}
  };
  stream.on("streamEvent", (event) => {
    processEvent(event, state, recordOutputs, span);
  });
  stream.on("message", () => {
    utils.endStreamSpan(span, state, recordOutputs);
  });
  stream.on("error", (error) => {
    exports$1.captureException(error, {
      mechanism: {
        handled: false,
        type: "auto.ai.anthropic.stream_error"
      }
    });
    if (span.isRecording()) {
      span.setStatus({ code: spanstatus.SPAN_STATUS_ERROR, message: "internal_error" });
      span.end();
    }
  });
  return stream;
}

exports.instrumentAsyncIterableStream = instrumentAsyncIterableStream;
exports.instrumentMessageStream = instrumentMessageStream;
//# sourceMappingURL=streaming.js.map
