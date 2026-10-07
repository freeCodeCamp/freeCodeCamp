import type { ChatTransport, HttpChatTransportInitOptions, InferUIMessageChunk, UIMessage, FetchFunction, PrepareSendMessagesRequest, PrepareReconnectToStreamRequest, Resolvable } from './types';
/**
 * Abstract base class for HTTP-based chat transports.
 */
export declare abstract class HttpChatTransport<TUIMessage extends UIMessage> implements ChatTransport<TUIMessage> {
    protected api: string;
    protected credentials: Resolvable<RequestCredentials> | undefined;
    protected headers: Resolvable<Record<string, string> | Headers> | undefined;
    protected body: Resolvable<object> | undefined;
    protected fetch?: FetchFunction;
    protected prepareSendMessagesRequest?: PrepareSendMessagesRequest<TUIMessage>;
    protected prepareReconnectToStreamRequest?: PrepareReconnectToStreamRequest;
    constructor({ api, credentials, headers, body, fetch: customFetch, prepareSendMessagesRequest, prepareReconnectToStreamRequest, }: HttpChatTransportInitOptions<TUIMessage>);
    sendMessages({ abortSignal, chatId, messages, requestMetadata, trigger, messageId, headers: requestHeaders, body: requestBody, }: Parameters<ChatTransport<TUIMessage>['sendMessages']>[0]): Promise<ReadableStream<InferUIMessageChunk<TUIMessage>>>;
    reconnectToStream({ chatId, headers: requestHeaders, body: requestBody, }: Parameters<ChatTransport<TUIMessage>['reconnectToStream']>[0]): Promise<ReadableStream<InferUIMessageChunk<TUIMessage>> | null>;
    protected abstract processResponseStream(stream: ReadableStream<Uint8Array>): ReadableStream<InferUIMessageChunk<TUIMessage>>;
}
/**
 * Default chat transport implementation using NDJSON streaming.
 */
export declare class DefaultChatTransport<TUIMessage extends UIMessage> extends HttpChatTransport<TUIMessage> {
    constructor(options?: HttpChatTransportInitOptions<TUIMessage>);
    protected processResponseStream(stream: ReadableStream<Uint8Array>): ReadableStream<InferUIMessageChunk<TUIMessage>>;
}
