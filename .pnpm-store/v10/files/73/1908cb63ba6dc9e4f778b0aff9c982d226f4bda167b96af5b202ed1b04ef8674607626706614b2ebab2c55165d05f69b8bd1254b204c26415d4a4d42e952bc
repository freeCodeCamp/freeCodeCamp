/**
 * OpenAI Integration Telemetry Attributes
 * Based on OpenTelemetry Semantic Conventions for Generative AI
 * @see https://opentelemetry.io/docs/specs/semconv/gen-ai/
 */
/**
 * The input messages sent to the model
 */
export declare const GEN_AI_PROMPT_ATTRIBUTE = "gen_ai.prompt";
/**
 * The Generative AI system being used
 * For OpenAI, this should always be "openai"
 */
export declare const GEN_AI_SYSTEM_ATTRIBUTE = "gen_ai.system";
/**
 * The name of the model as requested
 * Examples: "gpt-4", "gpt-3.5-turbo"
 */
export declare const GEN_AI_REQUEST_MODEL_ATTRIBUTE = "gen_ai.request.model";
/**
 * Whether streaming was enabled for the request
 */
export declare const GEN_AI_REQUEST_STREAM_ATTRIBUTE = "gen_ai.request.stream";
/**
 * The temperature setting for the model request
 */
export declare const GEN_AI_REQUEST_TEMPERATURE_ATTRIBUTE = "gen_ai.request.temperature";
/**
 * The maximum number of tokens requested
 */
export declare const GEN_AI_REQUEST_MAX_TOKENS_ATTRIBUTE = "gen_ai.request.max_tokens";
/**
 * The frequency penalty setting for the model request
 */
export declare const GEN_AI_REQUEST_FREQUENCY_PENALTY_ATTRIBUTE = "gen_ai.request.frequency_penalty";
/**
 * The presence penalty setting for the model request
 */
export declare const GEN_AI_REQUEST_PRESENCE_PENALTY_ATTRIBUTE = "gen_ai.request.presence_penalty";
/**
 * The top_p (nucleus sampling) setting for the model request
 */
export declare const GEN_AI_REQUEST_TOP_P_ATTRIBUTE = "gen_ai.request.top_p";
/**
 * The top_k setting for the model request
 */
export declare const GEN_AI_REQUEST_TOP_K_ATTRIBUTE = "gen_ai.request.top_k";
/**
 * Stop sequences for the model request
 */
export declare const GEN_AI_REQUEST_STOP_SEQUENCES_ATTRIBUTE = "gen_ai.request.stop_sequences";
/**
 * The encoding format for the model request
 */
export declare const GEN_AI_REQUEST_ENCODING_FORMAT_ATTRIBUTE = "gen_ai.request.encoding_format";
/**
 * The dimensions for the model request
 */
export declare const GEN_AI_REQUEST_DIMENSIONS_ATTRIBUTE = "gen_ai.request.dimensions";
/**
 * Array of reasons why the model stopped generating tokens
 */
export declare const GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE = "gen_ai.response.finish_reasons";
/**
 * The name of the model that generated the response
 */
export declare const GEN_AI_RESPONSE_MODEL_ATTRIBUTE = "gen_ai.response.model";
/**
 * The unique identifier for the response
 */
export declare const GEN_AI_RESPONSE_ID_ATTRIBUTE = "gen_ai.response.id";
/**
 * The reason why the model stopped generating tokens
 */
export declare const GEN_AI_RESPONSE_STOP_REASON_ATTRIBUTE = "gen_ai.response.stop_reason";
/**
 * The number of tokens used in the prompt
 */
export declare const GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE = "gen_ai.usage.input_tokens";
/**
 * The number of tokens used in the response
 */
export declare const GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE = "gen_ai.usage.output_tokens";
/**
 * The total number of tokens used (input + output)
 */
export declare const GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE = "gen_ai.usage.total_tokens";
/**
 * The operation name
 */
export declare const GEN_AI_OPERATION_NAME_ATTRIBUTE = "gen_ai.operation.name";
/**
 * Original length of messages array, used to indicate truncations had occured
 */
export declare const GEN_AI_INPUT_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE = "sentry.sdk_meta.gen_ai.input.messages.original_length";
/**
 * The prompt messages
 * Only recorded when recordInputs is enabled
 */
export declare const GEN_AI_INPUT_MESSAGES_ATTRIBUTE = "gen_ai.input.messages";
/**
 * The model's response messages including text and tool calls
 * Only recorded when recordOutputs is enabled
 * Format: stringified array of message objects with role, parts, and finish_reason
 * @see https://opentelemetry.io/docs/specs/semconv/registry/attributes/gen-ai/#gen-ai-output-messages
 */
export declare const GEN_AI_OUTPUT_MESSAGES_ATTRIBUTE = "gen_ai.output.messages";
/**
 * The system instructions extracted from system messages
 * Only recorded when recordInputs is enabled
 * According to OpenTelemetry spec: https://opentelemetry.io/docs/specs/semconv/registry/attributes/gen-ai/#gen-ai-system-instructions
 */
export declare const GEN_AI_SYSTEM_INSTRUCTIONS_ATTRIBUTE = "gen_ai.system_instructions";
/**
 * The response text
 * Only recorded when recordOutputs is enabled
 */
export declare const GEN_AI_RESPONSE_TEXT_ATTRIBUTE = "gen_ai.response.text";
/**
 * The available tools from incoming request
 * Only recorded when recordInputs is enabled
 */
export declare const GEN_AI_REQUEST_AVAILABLE_TOOLS_ATTRIBUTE = "gen_ai.request.available_tools";
/**
 * Whether the response is a streaming response
 */
export declare const GEN_AI_RESPONSE_STREAMING_ATTRIBUTE = "gen_ai.response.streaming";
/**
 * The tool calls from the response
 * Only recorded when recordOutputs is enabled
 */
export declare const GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE = "gen_ai.response.tool_calls";
/**
 * The agent name
 */
export declare const GEN_AI_AGENT_NAME_ATTRIBUTE = "gen_ai.agent.name";
/**
 * The pipeline name
 */
export declare const GEN_AI_PIPELINE_NAME_ATTRIBUTE = "gen_ai.pipeline.name";
/**
 * The conversation ID for linking messages across API calls
 * For OpenAI Assistants API: thread_id
 * For LangGraph: configurable.thread_id
 */
export declare const GEN_AI_CONVERSATION_ID_ATTRIBUTE = "gen_ai.conversation.id";
/**
 * The number of cache creation input tokens used
 */
export declare const GEN_AI_USAGE_CACHE_CREATION_INPUT_TOKENS_ATTRIBUTE = "gen_ai.usage.cache_creation_input_tokens";
/**
 * The number of cache read input tokens used
 */
export declare const GEN_AI_USAGE_CACHE_READ_INPUT_TOKENS_ATTRIBUTE = "gen_ai.usage.cache_read_input_tokens";
/**
 * The number of cache write input tokens used
 */
export declare const GEN_AI_USAGE_INPUT_TOKENS_CACHE_WRITE_ATTRIBUTE = "gen_ai.usage.input_tokens.cache_write";
/**
 * The number of cached input tokens that were used
 */
export declare const GEN_AI_USAGE_INPUT_TOKENS_CACHED_ATTRIBUTE = "gen_ai.usage.input_tokens.cached";
/**
 * The span operation name for invoking an agent
 */
export declare const GEN_AI_INVOKE_AGENT_OPERATION_ATTRIBUTE = "gen_ai.invoke_agent";
/**
 * The span operation name for generating content
 */
export declare const GEN_AI_GENERATE_CONTENT_OPERATION_ATTRIBUTE = "gen_ai.generate_content";
/**
 * The embeddings input
 * Only recorded when recordInputs is enabled
 */
export declare const GEN_AI_EMBEDDINGS_INPUT_ATTRIBUTE = "gen_ai.embeddings.input";
/**
 * The span operation for embeddings
 */
export declare const GEN_AI_EMBEDDINGS_OPERATION_ATTRIBUTE = "gen_ai.embeddings";
/**
 * The span operation name for reranking
 */
export declare const GEN_AI_RERANK_DO_RERANK_OPERATION_ATTRIBUTE = "gen_ai.rerank";
/**
 * The span operation name for executing a tool
 */
export declare const GEN_AI_EXECUTE_TOOL_OPERATION_ATTRIBUTE = "gen_ai.execute_tool";
/**
 * The tool name for tool call spans
 */
export declare const GEN_AI_TOOL_NAME_ATTRIBUTE = "gen_ai.tool.name";
/**
 * The tool call ID
 */
export declare const GEN_AI_TOOL_CALL_ID_ATTRIBUTE = "gen_ai.tool.call.id";
/**
 * The tool type (e.g., 'function')
 */
export declare const GEN_AI_TOOL_TYPE_ATTRIBUTE = "gen_ai.tool.type";
/**
 * The tool input/arguments
 */
export declare const GEN_AI_TOOL_INPUT_ATTRIBUTE = "gen_ai.tool.input";
/**
 * The tool output/result
 */
export declare const GEN_AI_TOOL_OUTPUT_ATTRIBUTE = "gen_ai.tool.output";
/**
 * The description of the tool being used
 * @see https://opentelemetry.io/docs/specs/semconv/registry/attributes/gen-ai/#gen-ai-tool-description
 */
export declare const GEN_AI_TOOL_DESCRIPTION_ATTRIBUTE = "gen_ai.tool.description";
//# sourceMappingURL=gen-ai-attributes.d.ts.map