import { captureException } from '../../exports.js';
import { SPAN_STATUS_ERROR } from '../spanstatus.js';
import { endStreamSpan } from '../ai/utils.js';

function isErrorChunk(chunk, span) {
  const feedback = chunk?.promptFeedback;
  if (feedback?.blockReason) {
    const message = feedback.blockReasonMessage ?? feedback.blockReason;
    span.setStatus({ code: SPAN_STATUS_ERROR, message: "internal_error" });
    captureException(`Content blocked: ${message}`, {
      mechanism: { handled: false, type: "auto.ai.google_genai" }
    });
    return true;
  }
  return false;
}
function handleResponseMetadata(chunk, state) {
  if (typeof chunk.responseId === "string") state.responseId = chunk.responseId;
  if (typeof chunk.modelVersion === "string") state.responseModel = chunk.modelVersion;
  const usage = chunk.usageMetadata;
  if (usage) {
    if (typeof usage.promptTokenCount === "number") state.promptTokens = usage.promptTokenCount;
    if (typeof usage.candidatesTokenCount === "number") state.completionTokens = usage.candidatesTokenCount;
    if (typeof usage.totalTokenCount === "number") state.totalTokens = usage.totalTokenCount;
  }
}
function handleCandidateContent(chunk, state, recordOutputs) {
  if (Array.isArray(chunk.functionCalls)) {
    state.toolCalls.push(...chunk.functionCalls);
  }
  for (const candidate of chunk.candidates ?? []) {
    if (candidate?.finishReason && !state.finishReasons.includes(candidate.finishReason)) {
      state.finishReasons.push(candidate.finishReason);
    }
    for (const part of candidate?.content?.parts ?? []) {
      if (recordOutputs && part.text) state.responseTexts.push(part.text);
      if (part.functionCall) {
        state.toolCalls.push({
          type: "function",
          id: part.functionCall.id,
          name: part.functionCall.name,
          arguments: part.functionCall.args
        });
      }
    }
  }
}
function processChunk(chunk, state, recordOutputs, span) {
  if (!chunk || isErrorChunk(chunk, span)) return;
  handleResponseMetadata(chunk, state);
  handleCandidateContent(chunk, state, recordOutputs);
}
async function* instrumentStream(stream, span, recordOutputs) {
  const state = {
    responseTexts: [],
    finishReasons: [],
    toolCalls: []
  };
  try {
    for await (const chunk of stream) {
      processChunk(chunk, state, recordOutputs, span);
      yield chunk;
    }
  } finally {
    endStreamSpan(span, state, recordOutputs);
  }
}

export { instrumentStream };
//# sourceMappingURL=streaming.js.map
