import { Span } from '@opentelemetry/api';
import { InstrumentationConfig } from '@opentelemetry/instrumentation';
export interface KafkajsMessage {
    key?: Buffer | string | null;
    value: Buffer | string | null;
    partition?: number;
    headers?: Record<string, Buffer | string | (Buffer | string)[] | undefined>;
    timestamp?: string;
}
export interface MessageInfo<T = KafkajsMessage> {
    topic: string;
    message: T;
}
export interface KafkaProducerCustomAttributeFunction<T = KafkajsMessage> {
    (span: Span, info: MessageInfo<T>): void;
}
export interface KafkaConsumerCustomAttributeFunction<T = KafkajsMessage> {
    (span: Span, info: MessageInfo<T>): void;
}
export interface KafkaJsInstrumentationConfig extends InstrumentationConfig {
    /** hook for adding custom attributes before producer message is sent */
    producerHook?: KafkaProducerCustomAttributeFunction;
    /** hook for adding custom attributes before consumer message is processed */
    consumerHook?: KafkaConsumerCustomAttributeFunction;
}
//# sourceMappingURL=types.d.ts.map
