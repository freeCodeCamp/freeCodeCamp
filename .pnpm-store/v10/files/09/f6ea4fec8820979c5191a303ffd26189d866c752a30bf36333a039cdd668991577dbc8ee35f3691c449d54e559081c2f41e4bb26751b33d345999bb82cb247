Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const OPENAI_INTEGRATION_NAME = "OpenAI";
const OPENAI_METHOD_REGISTRY = {
  "responses.create": { operation: "chat" },
  "chat.completions.create": { operation: "chat" },
  "embeddings.create": { operation: "embeddings" },
  // Conversations API - for conversation state management
  // https://platform.openai.com/docs/guides/conversation-state
  "conversations.create": { operation: "chat" }
};
const RESPONSES_TOOL_CALL_EVENT_TYPES = [
  "response.output_item.added",
  "response.function_call_arguments.delta",
  "response.function_call_arguments.done",
  "response.output_item.done"
];
const RESPONSE_EVENT_TYPES = [
  "response.created",
  "response.in_progress",
  "response.failed",
  "response.completed",
  "response.incomplete",
  "response.queued",
  "response.output_text.delta",
  ...RESPONSES_TOOL_CALL_EVENT_TYPES
];

exports.OPENAI_INTEGRATION_NAME = OPENAI_INTEGRATION_NAME;
exports.OPENAI_METHOD_REGISTRY = OPENAI_METHOD_REGISTRY;
exports.RESPONSES_TOOL_CALL_EVENT_TYPES = RESPONSES_TOOL_CALL_EVENT_TYPES;
exports.RESPONSE_EVENT_TYPES = RESPONSE_EVENT_TYPES;
//# sourceMappingURL=constants.js.map
