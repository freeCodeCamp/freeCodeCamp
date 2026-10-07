import { Span } from '@opentelemetry/api';
import { InstrumentationConfig } from '@opentelemetry/instrumentation';
export interface PublishInfo {
    moduleVersion: string | undefined;
    exchange: string;
    routingKey: string;
    content: Buffer;
    options?: AmqplibPublishOptions;
    isConfirmChannel?: boolean;
}
export interface PublishConfirmedInfo extends PublishInfo {
    confirmError?: any;
}
export interface ConsumeInfo {
    moduleVersion: string | undefined;
    msg: ConsumeMessage;
}
export interface ConsumeEndInfo {
    msg: ConsumeMessage;
    rejected: boolean | null;
    endOperation: EndOperation;
}
export interface AmqplibPublishCustomAttributeFunction {
    (span: Span, publishInfo: PublishInfo): void;
}
export interface AmqplibPublishConfirmCustomAttributeFunction {
    (span: Span, publishConfirmedInto: PublishConfirmedInfo): void;
}
export interface AmqplibConsumeCustomAttributeFunction {
    (span: Span, consumeInfo: ConsumeInfo): void;
}
export interface AmqplibConsumeEndCustomAttributeFunction {
    (span: Span, consumeEndInfo: ConsumeEndInfo): void;
}
export declare enum EndOperation {
    AutoAck = "auto ack",
    Ack = "ack",
    AckAll = "ackAll",
    Reject = "reject",
    Nack = "nack",
    NackAll = "nackAll",
    ChannelClosed = "channel closed",
    ChannelError = "channel error",
    InstrumentationTimeout = "instrumentation timeout"
}
export interface AmqplibInstrumentationConfig extends InstrumentationConfig {
    /** hook for adding custom attributes before publish message is sent */
    publishHook?: AmqplibPublishCustomAttributeFunction;
    /** hook for adding custom attributes after publish message is confirmed by the broker */
    publishConfirmHook?: AmqplibPublishConfirmCustomAttributeFunction;
    /** hook for adding custom attributes before consumer message is processed */
    consumeHook?: AmqplibConsumeCustomAttributeFunction;
    /** hook for adding custom attributes after consumer message is acked to server */
    consumeEndHook?: AmqplibConsumeEndCustomAttributeFunction;
    /**
     * When user is setting up consume callback, it is user's responsibility to call
     * ack/nack etc on the msg to resolve it in the server.
     * If user is not calling the ack, the message will stay in the queue until
     * channel is closed, or until server timeout expires (if configured).
     * While we wait for the ack, a reference to the message is stored in plugin, which
     * will never be garbage collected.
     * To prevent memory leak, plugin has it's own configuration of timeout, which
     * will close the span if user did not call ack after this timeout.
     * If timeout is not big enough, span might be closed with 'InstrumentationTimeout',
     * and then received valid ack from the user later which will not be instrumented.
     *
     * Default is 1 minute
     */
    consumeTimeoutMs?: number;
    /** option to use a span link for the consume message instead of continuing a trace */
    useLinksForConsume?: boolean;
}
export declare const DEFAULT_CONFIG: AmqplibInstrumentationConfig;
export interface AmqplibPublishOptions {
    expiration?: string | number;
    userId?: string;
    CC?: string | string[];
    mandatory?: boolean;
    persistent?: boolean;
    deliveryMode?: boolean | number;
    BCC?: string | string[];
    contentType?: string;
    contentEncoding?: string;
    headers?: any;
    priority?: number;
    correlationId?: string;
    replyTo?: string;
    messageId?: string;
    timestamp?: number;
    type?: string;
    appId?: string;
}
export interface Message {
    content: Buffer;
    fields: MessageFields;
    properties: MessageProperties;
}
export interface ConsumeMessage extends Message {
    fields: ConsumeMessageFields;
}
export interface CommonMessageFields {
    deliveryTag: number;
    redelivered: boolean;
    exchange: string;
    routingKey: string;
}
export interface MessageFields extends CommonMessageFields {
    messageCount?: number;
    consumerTag?: string;
}
export interface ConsumeMessageFields extends CommonMessageFields {
    deliveryTag: number;
}
export interface MessageProperties {
    contentType: any | undefined;
    contentEncoding: any | undefined;
    headers: any;
    deliveryMode: any | undefined;
    priority: any | undefined;
    correlationId: any | undefined;
    replyTo: any | undefined;
    expiration: any | undefined;
    messageId: any | undefined;
    timestamp: any | undefined;
    type: any | undefined;
    userId: any | undefined;
    appId: any | undefined;
    clusterId: any | undefined;
}
//# sourceMappingURL=types.d.ts.map