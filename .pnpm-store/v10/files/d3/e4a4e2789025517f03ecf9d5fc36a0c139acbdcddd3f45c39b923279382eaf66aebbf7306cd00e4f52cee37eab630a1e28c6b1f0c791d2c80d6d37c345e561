/**
 * AI SDK Telemetry Attributes
 * Based on https://ai-sdk.dev/docs/ai-sdk-core/telemetry#collected-data
 */
/**
 * Common attribute for operation name across all functions and spans
 * @see https://ai-sdk.dev/docs/ai-sdk-core/telemetry#collected-data
 */
export declare const OPERATION_NAME_ATTRIBUTE = "operation.name";
/**
 * Common attribute for AI operation ID across all functions and spans
 * @see https://ai-sdk.dev/docs/ai-sdk-core/telemetry#collected-data
 */
export declare const AI_OPERATION_ID_ATTRIBUTE = "ai.operationId";
/**
 * `generateText` function - `ai.generateText` span
 * `streamText` function - `ai.streamText` span
 *
 * The prompt that was used when calling the function
 * @see https://ai-sdk.dev/docs/ai-sdk-core/telemetry#generatetext-function
 * @see https://ai-sdk.dev/docs/ai-sdk-core/telemetry#streamtext-function
 */
export declare const AI_PROMPT_ATTRIBUTE = "ai.prompt";
/**
 * `generateObject` function - `ai.generateObject` span
 * `streamObject` function - `ai.streamObject` span
 *
 * The JSON schema version of the schema that was passed into the function
 * @see https://ai-sdk.dev/docs/ai-sdk-core/telemetry#generateobject-function
 * @see https://ai-sdk.dev/docs/ai-sdk-core/telemetry#streamobject-function
 */
export declare const AI_SCHEMA_ATTRIBUTE = "ai.schema";
/**
 * `generateObject` function - `ai.generateObject` span
 * `streamObject` function - `ai.streamObject` span
 *
 * The object that was generated (stringified JSON)
 * @see https://ai-sdk.dev/docs/ai-sdk-core/telemetry#generateobject-function
 * @see https://ai-sdk.dev/docs/ai-sdk-core/telemetry#streamobject-function
 */
export declare const AI_RESPONSE_OBJECT_ATTRIBUTE = "ai.response.object";
/**
 * `embed` function - `ai.embed.doEmbed` span
 * `embedMany` function - `ai.embedMany` span
 *
 * The values that were passed into the function (array)
 * @see https://ai-sdk.dev/docs/ai-sdk-core/telemetry#embed-function
 * @see https://ai-sdk.dev/docs/ai-sdk-core/telemetry#embedmany-function
 */
export declare const AI_VALUES_ATTRIBUTE = "ai.values";
/**
 * `generateText` function - `ai.generateText` span
 *
 * The text that was generated
 * @see https://ai-sdk.dev/docs/ai-sdk-core/telemetry#generatetext-function
 */
export declare const AI_RESPONSE_TEXT_ATTRIBUTE = "ai.response.text";
/**
 * `generateText` function - `ai.generateText` span
 *
 * The tool calls that were made as part of the generation (stringified JSON)
 * @see https://ai-sdk.dev/docs/ai-sdk-core/telemetry#generatetext-function
 */
export declare const AI_RESPONSE_TOOL_CALLS_ATTRIBUTE = "ai.response.toolCalls";
/**
 * `generateText` function - `ai.generateText` span
 *
 * The reason why the generation finished
 * @see https://ai-sdk.dev/docs/ai-sdk-core/telemetry#generatetext-function
 */
export declare const AI_RESPONSE_FINISH_REASON_ATTRIBUTE = "ai.response.finishReason";
/**
 * `generateText` function - `ai.generateText` span
 *
 * The maximum number of steps that were set
 * @see https://ai-sdk.dev/docs/ai-sdk-core/telemetry#generatetext-function
 */
export declare const AI_SETTINGS_MAX_STEPS_ATTRIBUTE = "ai.settings.maxSteps";
/**
 * `generateText` function - `ai.generateText.doGenerate` span
 *
 * The messages that were passed into the provider
 * @see https://ai-sdk.dev/docs/ai-sdk-core/telemetry#generatetext-function
 */
export declare const AI_PROMPT_MESSAGES_ATTRIBUTE = "ai.prompt.messages";
/**
 * `generateText` function - `ai.generateText.doGenerate` span
 *
 * Array of stringified tool definitions
 * @see https://ai-sdk.dev/docs/ai-sdk-core/telemetry#generatetext-function
 */
export declare const AI_PROMPT_TOOLS_ATTRIBUTE = "ai.prompt.tools";
/**
 * Basic LLM span information
 * Multiple spans
 *
 * The id of the model
 * @see https://ai-sdk.dev/docs/ai-sdk-core/telemetry#basic-llm-span-information
 */
export declare const AI_MODEL_ID_ATTRIBUTE = "ai.model.id";
/**
 * Basic LLM span information
 * Multiple spans
 *
 * Provider specific metadata returned with the generation response
 * @see https://ai-sdk.dev/docs/ai-sdk-core/telemetry#basic-llm-span-information
 */
export declare const AI_RESPONSE_PROVIDER_METADATA_ATTRIBUTE = "ai.response.providerMetadata";
/**
 * Basic LLM span information
 * Multiple spans
 *
 * The number of cached input tokens that were used
 * @see https://ai-sdk.dev/docs/ai-sdk-core/telemetry#basic-llm-span-information
 */
export declare const AI_USAGE_CACHED_INPUT_TOKENS_ATTRIBUTE = "ai.usage.cachedInputTokens";
/**
 * Basic LLM span information
 * Multiple spans
 *
 * The functionId that was set through `telemetry.functionId`
 * @see https://ai-sdk.dev/docs/ai-sdk-core/telemetry#basic-llm-span-information
 */
export declare const AI_TELEMETRY_FUNCTION_ID_ATTRIBUTE = "ai.telemetry.functionId";
/**
 * Basic LLM span information
 * Multiple spans
 *
 * The number of completion tokens that were used
 * @see https://ai-sdk.dev/docs/ai-sdk-core/telemetry#basic-llm-span-information
 */
export declare const AI_USAGE_COMPLETION_TOKENS_ATTRIBUTE = "ai.usage.completionTokens";
/**
 * Basic LLM span information
 * Multiple spans
 *
 * The number of prompt tokens that were used
 * @see https://ai-sdk.dev/docs/ai-sdk-core/telemetry#basic-llm-span-information
 */
export declare const AI_USAGE_PROMPT_TOKENS_ATTRIBUTE = "ai.usage.promptTokens";
/**
 * Call LLM span information
 * Individual LLM call spans
 *
 * The model that was used to generate the response
 * @see https://ai-sdk.dev/docs/ai-sdk-core/telemetry#call-llm-span-information
 */
export declare const AI_RESPONSE_MODEL_ATTRIBUTE = "ai.response.model";
/**
 * Call LLM span information
 * Individual LLM call spans
 *
 * The id of the response
 * @see https://ai-sdk.dev/docs/ai-sdk-core/telemetry#call-llm-span-information
 */
export declare const AI_RESPONSE_ID_ATTRIBUTE = "ai.response.id";
/**
 * Call LLM span information
 * Individual LLM call spans
 *
 * The timestamp of the response
 * @see https://ai-sdk.dev/docs/ai-sdk-core/telemetry#call-llm-span-information
 */
export declare const AI_RESPONSE_TIMESTAMP_ATTRIBUTE = "ai.response.timestamp";
/**
 * Basic embedding span information
 * Embedding spans
 *
 * The number of tokens that were used
 * @see https://ai-sdk.dev/docs/ai-sdk-core/telemetry#basic-embedding-span-information
 */
export declare const AI_USAGE_TOKENS_ATTRIBUTE = "ai.usage.tokens";
/**
 * Tool call spans
 * `ai.toolCall` span
 *
 * The name of the tool
 * @see https://ai-sdk.dev/docs/ai-sdk-core/telemetry#tool-call-spans
 */
export declare const AI_TOOL_CALL_NAME_ATTRIBUTE = "ai.toolCall.name";
/**
 * Tool call spans
 * `ai.toolCall` span
 *
 * The id of the tool call
 * @see https://ai-sdk.dev/docs/ai-sdk-core/telemetry#tool-call-spans
 */
export declare const AI_TOOL_CALL_ID_ATTRIBUTE = "ai.toolCall.id";
/**
 * Tool call spans
 * `ai.toolCall` span
 *
 * The parameters of the tool call
 * @see https://ai-sdk.dev/docs/ai-sdk-core/telemetry#tool-call-spans
 */
export declare const AI_TOOL_CALL_ARGS_ATTRIBUTE = "ai.toolCall.args";
/**
 * Tool call spans
 * `ai.toolCall` span
 *
 * The result of the tool call
 * @see https://ai-sdk.dev/docs/ai-sdk-core/telemetry#tool-call-spans
 */
export declare const AI_TOOL_CALL_RESULT_ATTRIBUTE = "ai.toolCall.result";
/**
 * OpenAI Provider Metadata
 * @see https://ai-sdk.dev/providers/ai-sdk-providers/openai
 * @see https://github.com/vercel/ai/blob/65e042afde6aad4da9d7a62526ece839eb34f9a5/packages/openai/src/openai-chat-language-model.ts#L397-L416
 * @see https://github.com/vercel/ai/blob/65e042afde6aad4da9d7a62526ece839eb34f9a5/packages/openai/src/responses/openai-responses-language-model.ts#L377C7-L384
 */
export interface OpenAiProviderMetadata {
    /**
     * The number of predicted output tokens that were accepted.
     * @see https://ai-sdk.dev/providers/ai-sdk-providers/openai#predicted-outputs
     */
    acceptedPredictionTokens?: number;
    /**
     * The number of predicted output tokens that were rejected.
     * @see https://ai-sdk.dev/providers/ai-sdk-providers/openai#predicted-outputs
     */
    rejectedPredictionTokens?: number;
    /**
     * The number of reasoning tokens that the model generated.
     * @see https://ai-sdk.dev/providers/ai-sdk-providers/openai#responses-models
     */
    reasoningTokens?: number;
    /**
     * The number of prompt tokens that were a cache hit.
     * @see https://ai-sdk.dev/providers/ai-sdk-providers/openai#responses-models
     */
    cachedPromptTokens?: number;
    /**
     * @see https://ai-sdk.dev/providers/ai-sdk-providers/openai#responses-models
     *
     * The ID of the response. Can be used to continue a conversation.
     */
    responseId?: string;
}
/**
 * Anthropic Provider Metadata
 * @see https://ai-sdk.dev/providers/ai-sdk-providers/anthropic
 * @see https://github.com/vercel/ai/blob/65e042afde6aad4da9d7a62526ece839eb34f9a5/packages/anthropic/src/anthropic-messages-language-model.ts#L346-L352
 */
interface AnthropicProviderMetadata {
    /**
     * The number of tokens that were used to create the cache.
     * @see https://ai-sdk.dev/providers/ai-sdk-providers/anthropic#cache-control
     */
    cacheCreationInputTokens?: number;
    /**
     * The number of tokens that were read from the cache.
     * @see https://ai-sdk.dev/providers/ai-sdk-providers/anthropic#cache-control
     */
    cacheReadInputTokens?: number;
    /**
     * Usage metrics for the Anthropic model.
     */
    usage?: {
        input_tokens: number;
        cache_creation_input_tokens?: number;
        cache_read_input_tokens?: number;
        cache_creation?: {
            ephemeral_5m_input_tokens?: number;
            ephemeral_1h_input_tokens?: number;
        };
        output_tokens?: number;
        service_tier?: string;
    };
}
/**
 * Amazon Bedrock Provider Metadata
 * @see https://ai-sdk.dev/providers/ai-sdk-providers/amazon-bedrock
 * @see https://github.com/vercel/ai/blob/65e042afde6aad4da9d7a62526ece839eb34f9a5/packages/amazon-bedrock/src/bedrock-chat-language-model.ts#L263-L280
 */
interface AmazonBedrockProviderMetadata {
    /**
     * @see https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_ConverseTrace.html
     */
    trace?: {
        /**
         * The guardrail trace object.
         * @see https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_GuardrailTraceAssessment.html
         *
         * This was purposely left as unknown as it's a complex object. This can be typed in the future
         * if the SDK decides to support bedrock in a more advanced way.
         */
        guardrail?: unknown;
        /**
         * The request's prompt router.
         * @see https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_PromptRouterTrace.html
         */
        promptRouter?: {
            /**
             * The ID of the invoked model.
             */
            invokedModelId?: string;
        };
    };
    usage?: {
        /**
         * The number of tokens that were read from the cache.
         * @see https://ai-sdk.dev/providers/ai-sdk-providers/amazon-bedrock#cache-points
         */
        cacheReadInputTokens?: number;
        /**
         * The number of tokens that were written to the cache.
         * @see https://ai-sdk.dev/providers/ai-sdk-providers/amazon-bedrock#cache-points
         */
        cacheWriteInputTokens?: number;
    };
}
/**
 * Google Generative AI Provider Metadata
 * @see https://ai-sdk.dev/providers/ai-sdk-providers/google-generative-ai
 */
export interface GoogleGenerativeAIProviderMetadata {
    /**
     * @see https://github.com/vercel/ai/blob/65e042afde6aad4da9d7a62526ece839eb34f9a5/packages/google/src/google-generative-ai-prompt.ts#L28-L30
     */
    groundingMetadata: null | {
        /**
         * Array of search queries used to retrieve information
         * @example ["What's the weather in Chicago this weekend?"]
         *
         * @see https://ai-sdk.dev/providers/ai-sdk-providers/google-generative-ai#search-grounding
         */
        webSearchQueries: string[] | null;
        /**
         * Contains the main search result content used as an entry point
         * The `renderedContent` field contains the formatted content
         * @see https://ai-sdk.dev/providers/ai-sdk-providers/google-generative-ai#search-grounding
         */
        searchEntryPoint?: {
            renderedContent: string;
        } | null;
        /**
         * Contains details about how specific response parts are supported by search results
         * @see https://ai-sdk.dev/providers/ai-sdk-providers/google-generative-ai#search-grounding
         */
        groundingSupports: Array<{
            /**
             * Information about the grounded text segment.
             */
            segment: {
                /**
                 * The start index of the text segment.
                 */
                startIndex?: number | null;
                /**
                 * The end index of the text segment.
                 */
                endIndex?: number | null;
                /**
                 * The actual text segment.
                 */
                text?: string | null;
            };
            /**
             * References to supporting search result chunks.
             */
            groundingChunkIndices?: number[] | null;
            /**
             * Confidence scores (0-1) for each supporting chunk.
             */
            confidenceScores?: number[] | null;
        }> | null;
    };
    /**
     * @see https://github.com/vercel/ai/blob/65e042afde6aad4da9d7a62526ece839eb34f9a5/packages/google/src/google-generative-ai-language-model.ts#L620-L627
     * @see https://cloud.google.com/vertex-ai/generative-ai/docs/multimodal/configure-safety-filters
     */
    safetyRatings?: null | unknown;
}
/**
 * DeepSeek Provider Metadata
 * @see https://ai-sdk.dev/providers/ai-sdk-providers/deepseek
 */
interface DeepSeekProviderMetadata {
    /**
     * The number of tokens that were cache hits.
     * @see https://ai-sdk.dev/providers/ai-sdk-providers/deepseek#cache-token-usage
     */
    promptCacheHitTokens?: number;
    /**
     * The number of tokens that were cache misses.
     * @see https://ai-sdk.dev/providers/ai-sdk-providers/deepseek#cache-token-usage
     */
    promptCacheMissTokens?: number;
}
/**
 * Perplexity Provider Metadata
 * @see https://ai-sdk.dev/providers/ai-sdk-providers/perplexity
 */
interface PerplexityProviderMetadata {
    /**
     * Object containing citationTokens and numSearchQueries metrics
     */
    usage?: {
        citationTokens?: number;
        numSearchQueries?: number;
    };
    /**
     * Array of image URLs when return_images is enabled.
     *
     * You can enable image responses by setting return_images: true in the provider options.
     * This feature is only available to Perplexity Tier-2 users and above.
     */
    images?: Array<{
        imageUrl?: string;
        originUrl?: string;
        height?: number;
        width?: number;
    }>;
}
export interface ProviderMetadata {
    openai?: OpenAiProviderMetadata;
    azure?: OpenAiProviderMetadata;
    anthropic?: AnthropicProviderMetadata;
    bedrock?: AmazonBedrockProviderMetadata;
    google?: GoogleGenerativeAIProviderMetadata;
    vertex?: GoogleGenerativeAIProviderMetadata;
    deepseek?: DeepSeekProviderMetadata;
    perplexity?: PerplexityProviderMetadata;
}
export {};
//# sourceMappingURL=vercel-ai-attributes.d.ts.map