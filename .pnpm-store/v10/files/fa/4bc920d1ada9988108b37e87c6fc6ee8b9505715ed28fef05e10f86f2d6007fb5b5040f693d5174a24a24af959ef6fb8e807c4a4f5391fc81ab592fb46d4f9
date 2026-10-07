export interface InstrumentationEvent<T> {
    id: string;
    type: string;
    timestamp: number;
    payload: T;
}
export type RequestEvent = InstrumentationEvent<{
    apiKey: number;
    apiName: string;
    apiVersion: number;
    broker: string;
    clientId: string;
    correlationId: number;
    createdAt: number;
    duration: number;
    pendingDuration: number;
    sentAt: number;
    size: number;
}>;
export type RemoveInstrumentationEventListener<_T> = () => void;
export type ConsumerEvents = {
    REQUEST: 'consumer.network.request';
    [key: string]: string;
};
export type ProducerEvents = {
    REQUEST: 'producer.network.request';
    [key: string]: string;
};
type Sender = {
    send(record: any): Promise<any>;
    sendBatch(batch: any): Promise<any>;
};
export type Producer = Sender & {
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    isIdempotent(): boolean;
    readonly events: ProducerEvents;
    on(eventName: string, listener: (...args: any[]) => void): RemoveInstrumentationEventListener<any>;
    transaction(): Promise<Transaction>;
    [key: string]: any;
};
export type Transaction = Sender & {
    sendOffsets(offsets: any): Promise<void>;
    commit(): Promise<void>;
    abort(): Promise<void>;
    isActive(): boolean;
};
export type Consumer = {
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    subscribe(subscription: any): Promise<void>;
    run(config?: any): Promise<void>;
    readonly events: ConsumerEvents;
    on(eventName: string, listener: (...args: any[]) => void): RemoveInstrumentationEventListener<any>;
    [key: string]: any;
};
export declare class Kafka {
    consumer(config: any): Consumer;
    producer(config?: any): Producer;
    [key: string]: any;
}
export interface Message {
    key?: Buffer | string | null;
    value: Buffer | string | null;
    partition?: number;
    headers?: Record<string, Buffer | string | (Buffer | string)[] | undefined>;
    timestamp?: string;
}
export type KafkaMessage = {
    [key: string]: any;
} & Message;
export type RecordMetadata = {
    topicName: string;
    partition: number;
    errorCode: number;
    offset?: string;
    timestamp?: string;
    baseOffset?: string;
    logAppendTime?: string;
    logStartOffset?: string;
};
export interface EachMessagePayload {
    topic: string;
    partition: number;
    message: KafkaMessage;
    heartbeat(): Promise<void>;
    pause(): () => void;
}
export interface EachBatchPayload {
    batch: any;
    resolveOffset(offset: string): void;
    heartbeat(): Promise<void>;
    pause(): () => void;
    commitOffsetsIfNecessary(offsets?: any): Promise<void>;
    uncommittedOffsets(): any;
    isRunning(): boolean;
    isStale(): boolean;
}
export type EachMessageHandler = (payload: EachMessagePayload) => Promise<void>;
export type EachBatchHandler = (payload: EachBatchPayload) => Promise<void>;
export type ConsumerRunConfig = {
    autoCommit?: boolean;
    autoCommitInterval?: number | null;
    autoCommitThreshold?: number | null;
    eachBatchAutoResolve?: boolean;
    partitionsConsumedConcurrently?: number;
    eachBatch?: EachBatchHandler;
    eachMessage?: EachMessageHandler;
};
export {};
//# sourceMappingURL=kafkajs-types.d.ts.map
