import { OPENAI_METHOD_REGISTRY } from './constants';
/**
 * Attribute values may be any non-nullish primitive value except an object.
 *
 * null or undefined attribute values are invalid and will result in undefined behavior.
 */
export type AttributeValue = string | number | boolean | Array<null | undefined | string> | Array<null | undefined | number> | Array<null | undefined | boolean>;
export interface OpenAiOptions {
    /**
     * Enable or disable input recording.
     */
    recordInputs?: boolean;
    /**
     * Enable or disable output recording.
     */
    recordOutputs?: boolean;
    /**
     * Enable or disable truncation of recorded input messages.
     * Defaults to `true`.
     */
    enableTruncation?: boolean;
}
export interface OpenAiClient {
    responses?: {
        create: (...args: unknown[]) => Promise<unknown>;
    };
    chat?: {
        completions?: {
            create: (...args: unknown[]) => Promise<unknown>;
        };
    };
}
/**
 * @see https://platform.openai.com/docs/api-reference/chat/object
 */
export interface OpenAiChatCompletionObject {
    id: string;
    object: 'chat.completion';
    created: number;
    model: string;
    choices: Array<{
        index: number;
        message: {
            role: 'assistant' | 'user' | 'system' | string;
            content: string | null;
            refusal?: string | null;
            annotations?: Array<unknown>;
            tool_calls?: Array<unknown>;
        };
        logprobs?: unknown | null;
        finish_reason: string | null;
    }>;
    usage: {
        prompt_tokens: number;
        completion_tokens: number;
        total_tokens: number;
        prompt_tokens_details?: {
            cached_tokens?: number;
            audio_tokens?: number;
        };
        completion_tokens_details?: {
            reasoning_tokens?: number;
            audio_tokens?: number;
            accepted_prediction_tokens?: number;
            rejected_prediction_tokens?: number;
        };
    };
    service_tier?: string;
    system_fingerprint?: string;
}
/**
 * @see https://platform.openai.com/docs/api-reference/responses/object
 */
export interface OpenAIResponseObject {
    id: string;
    object: 'response';
    created_at: number;
    status: 'in_progress' | 'completed' | 'failed' | 'cancelled';
    error: string | null;
    incomplete_details: unknown | null;
    instructions: unknown | null;
    max_output_tokens: number | null;
    model: string;
    output: Array<{
        type: 'message';
        id: string;
        status: 'completed' | string;
        role: 'assistant' | string;
        content: Array<{
            type: 'output_text';
            text: string;
            annotations: Array<unknown>;
        }>;
    }>;
    output_text: string;
    parallel_tool_calls: boolean;
    previous_response_id: string | null;
    reasoning: {
        effort: string | null;
        summary: string | null;
    };
    store: boolean;
    temperature: number;
    text: {
        format: {
            type: 'text' | string;
        };
    };
    tool_choice: 'auto' | string;
    tools: Array<unknown>;
    top_p: number;
    truncation: 'disabled' | string;
    usage: {
        input_tokens: number;
        input_tokens_details?: {
            cached_tokens?: number;
        };
        output_tokens: number;
        output_tokens_details?: {
            reasoning_tokens?: number;
        };
        total_tokens: number;
    };
    user: string | null;
    metadata: Record<string, unknown>;
}
/**
 * @see https://platform.openai.com/docs/api-reference/embeddings/object
 */
export interface OpenAIEmbeddingsObject {
    object: 'embedding';
    embedding: number[];
    index: number;
}
/**
 * @see https://platform.openai.com/docs/api-reference/embeddings/create
 */
export interface OpenAICreateEmbeddingsObject {
    object: 'list';
    data: OpenAIEmbeddingsObject[];
    model: string;
    usage: {
        prompt_tokens: number;
        total_tokens: number;
    };
}
/**
 * OpenAI Conversations API Conversation object
 * @see https://platform.openai.com/docs/api-reference/conversations
 */
export interface OpenAIConversationObject {
    id: string;
    object: 'conversation';
    created_at: number;
    metadata?: Record<string, unknown>;
}
export type OpenAiResponse = OpenAiChatCompletionObject | OpenAIResponseObject | OpenAICreateEmbeddingsObject | OpenAIConversationObject;
/**
 * Streaming event types for the Responses API
 * @see https://platform.openai.com/docs/api-reference/responses-streaming
 * @see https://platform.openai.com/docs/guides/streaming-responses#read-the-responses for common events
 */
export type ResponseStreamingEvent = ResponseCreatedEvent | ResponseInProgressEvent | ResponseFailedEvent | ResponseCompletedEvent | ResponseIncompleteEvent | ResponseQueuedEvent | ResponseOutputTextDeltaEvent | ResponseOutputItemAddedEvent | ResponseFunctionCallArgumentsDeltaEvent | ResponseFunctionCallArgumentsDoneEvent | ResponseOutputItemDoneEvent;
interface ResponseCreatedEvent {
    type: 'response.created';
    response: OpenAIResponseObject;
    sequence_number: number;
}
interface ResponseInProgressEvent {
    type: 'response.in_progress';
    response: OpenAIResponseObject;
    sequence_number: number;
}
interface ResponseOutputTextDeltaEvent {
    content_index: number;
    delta: string;
    item_id: string;
    logprobs: object;
    output_index: number;
    sequence_number: number;
    type: 'response.output_text.delta';
}
interface ResponseFailedEvent {
    type: 'response.failed';
    response: OpenAIResponseObject;
    sequence_number: number;
}
interface ResponseIncompleteEvent {
    type: 'response.incomplete';
    response: OpenAIResponseObject;
    sequence_number: number;
}
interface ResponseCompletedEvent {
    type: 'response.completed';
    response: OpenAIResponseObject;
    sequence_number: number;
}
interface ResponseQueuedEvent {
    type: 'response.queued';
    response: OpenAIResponseObject;
    sequence_number: number;
}
/**
 * @see https://platform.openai.com/docs/api-reference/realtime-server-events/response/output_item/added
 */
interface ResponseOutputItemAddedEvent {
    type: 'response.output_item.added';
    output_index: number;
    item: unknown;
    event_id: string;
    response_id: string;
}
/**
 * @see https://platform.openai.com/docs/api-reference/realtime-server-events/response/function_call_arguments/delta
 */
interface ResponseFunctionCallArgumentsDeltaEvent {
    type: 'response.function_call_arguments.delta';
    item_id: string;
    output_index: number;
    delta: string;
    call_id: string;
    event_id: string;
    response_id: string;
}
/**
 * @see https://platform.openai.com/docs/api-reference/realtime-server-events/response/function_call_arguments/done
 */
interface ResponseFunctionCallArgumentsDoneEvent {
    type: 'response.function_call_arguments.done';
    response_id: string;
    item_id: string;
    output_index: number;
    arguments: string;
    call_id: string;
    event_id: string;
}
/**
 * @see https://platform.openai.com/docs/api-reference/realtime-server-events/response/output_item/done
 */
interface ResponseOutputItemDoneEvent {
    type: 'response.output_item.done';
    response_id: string;
    output_index: number;
    item: unknown;
    event_id: string;
}
/**
 * Tool call object for Chat Completion streaming
 */
export interface ChatCompletionToolCall {
    index?: number;
    id: string;
    type?: string;
    function?: {
        name: string;
        arguments?: string;
    };
}
/**
 * Function call object for Responses API
 */
export interface ResponseFunctionCall {
    type: string;
    id: string;
    call_id: string;
    name: string;
    arguments: string;
}
/**
 * Chat Completion streaming chunk type
 * @see https://platform.openai.com/docs/api-reference/chat-streaming/streaming
 */
export interface ChatCompletionChunk {
    id: string;
    object: 'chat.completion.chunk';
    created: number;
    model: string;
    system_fingerprint: string;
    service_tier?: string;
    choices: Array<{
        index: number;
        delta: {
            content: string | null;
            role: string;
            function_call?: object;
            refusal?: string | null;
            tool_calls?: Array<ChatCompletionToolCall>;
        };
        logprobs?: unknown | null;
        finish_reason?: string | null;
    }>;
    usage?: {
        prompt_tokens: number;
        completion_tokens: number;
        total_tokens: number;
        completion_tokens_details: {
            accepted_prediction_tokens: number;
            audio_tokens: number;
            reasoning_tokens: number;
            rejected_prediction_tokens: number;
        };
        prompt_tokens_details: {
            audio_tokens: number;
            cached_tokens: number;
        };
    };
}
/**
 * Represents a stream of events from OpenAI APIs
 */
export interface OpenAIStream<T> extends AsyncIterable<T> {
    [Symbol.asyncIterator](): AsyncIterator<T>;
}
/**
 * OpenAI Integration interface for type safety
 */
export interface OpenAiIntegration {
    name: string;
    options: OpenAiOptions;
}
/**
 * @deprecated This type is no longer used and will be removed in the next major version.
 */
export type InstrumentedMethod = keyof typeof OPENAI_METHOD_REGISTRY;
export {};
//# sourceMappingURL=types.d.ts.map
