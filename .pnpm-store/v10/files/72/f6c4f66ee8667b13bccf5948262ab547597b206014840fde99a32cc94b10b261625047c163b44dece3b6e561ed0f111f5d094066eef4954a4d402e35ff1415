/**
 * The number of messages sent, received, or processed in the scope of the batching operation.
 *
 * @example 0
 * @example 1
 * @example 2
 *
 * @note Instrumentations **SHOULD NOT** set `messaging.batch.message_count` on spans that operate with a single message. When a messaging client library supports both batch and single-message API for the same operation, instrumentations **SHOULD** use `messaging.batch.message_count` for batching APIs and **SHOULD NOT** use it for single-message APIs.
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const ATTR_MESSAGING_BATCH_MESSAGE_COUNT: "messaging.batch.message_count";
/**
 * The message destination name
 *
 * @example MyQueue
 * @example MyTopic
 *
 * @note Destination name **SHOULD** uniquely identify a specific queue, topic or other entity within the broker. If
 * the broker doesn't have such notion, the destination name **SHOULD** uniquely identify the broker.
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const ATTR_MESSAGING_DESTINATION_NAME: "messaging.destination.name";
/**
 * The identifier of the partition messages are sent to or received from, unique within the `messaging.destination.name`.
 *
 * @example "1"
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const ATTR_MESSAGING_DESTINATION_PARTITION_ID: "messaging.destination.partition.id";
/**
 * Message keys in Kafka are used for grouping alike messages to ensure they're processed on the same partition. They differ from `messaging.message.id` in that they're not unique. If the key is `null`, the attribute **MUST NOT** be set.
 *
 * @example "myKey"
 *
 * @note If the key type is not string, it's string representation has to be supplied for the attribute. If the key has no unambiguous, canonical string form, don't include its value.
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const ATTR_MESSAGING_KAFKA_MESSAGE_KEY: "messaging.kafka.message.key";
/**
 * A boolean that is true if the message is a tombstone.
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const ATTR_MESSAGING_KAFKA_MESSAGE_TOMBSTONE: "messaging.kafka.message.tombstone";
/**
 * The offset of a record in the corresponding Kafka partition.
 *
 * @example 42
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const ATTR_MESSAGING_KAFKA_OFFSET: "messaging.kafka.offset";
/**
 * The system-specific name of the messaging operation.
 *
 * @example ack
 * @example nack
 * @example send
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const ATTR_MESSAGING_OPERATION_NAME: "messaging.operation.name";
/**
 * A string identifying the type of the messaging operation.
 *
 * @note If a custom value is used, it **MUST** be of low cardinality.
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const ATTR_MESSAGING_OPERATION_TYPE: "messaging.operation.type";
/**
 * The messaging system as identified by the client instrumentation.
 *
 * @note The actual messaging system may differ from the one known by the client. For example, when using Kafka client libraries to communicate with Azure Event Hubs, the `messaging.system` is set to `kafka` based on the instrumentation's best knowledge.
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const ATTR_MESSAGING_SYSTEM: "messaging.system";
/**
 * Enum value "process" for attribute {@link ATTR_MESSAGING_OPERATION_TYPE}.
 */
export declare const MESSAGING_OPERATION_TYPE_VALUE_PROCESS: "process";
/**
 * Enum value "receive" for attribute {@link ATTR_MESSAGING_OPERATION_TYPE}.
 */
export declare const MESSAGING_OPERATION_TYPE_VALUE_RECEIVE: "receive";
/**
 * Enum value "send" for attribute {@link ATTR_MESSAGING_OPERATION_TYPE}.
 */
export declare const MESSAGING_OPERATION_TYPE_VALUE_SEND: "send";
/**
 * Enum value "kafka" for attribute {@link ATTR_MESSAGING_SYSTEM}.
 */
export declare const MESSAGING_SYSTEM_VALUE_KAFKA: "kafka";
/**
 * Number of messages that were delivered to the application.
 *
 * @note Records the number of messages pulled from the broker or number of messages dispatched to the application in push-based scenarios.
 * The metric **SHOULD** be reported once per message delivery. For example, if receiving and processing operations are both instrumented for a single message delivery, this counter is incremented when the message is received and not reported when it is processed.
 *
 * @experimental This metric is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const METRIC_MESSAGING_CLIENT_CONSUMED_MESSAGES: "messaging.client.consumed.messages";
/**
 * Duration of messaging operation initiated by a producer or consumer client.
 *
 * @note This metric **SHOULD NOT** be used to report processing duration - processing duration is reported in `messaging.process.duration` metric.
 *
 * @experimental This metric is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const METRIC_MESSAGING_CLIENT_OPERATION_DURATION: "messaging.client.operation.duration";
/**
 * Number of messages producer attempted to send to the broker.
 *
 * @note This metric **MUST NOT** count messages that were created but haven't yet been sent.
 *
 * @experimental This metric is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const METRIC_MESSAGING_CLIENT_SENT_MESSAGES: "messaging.client.sent.messages";
/**
 * Duration of processing operation.
 *
 * @note This metric **MUST** be reported for operations with `messaging.operation.type` that matches `process`.
 *
 * @experimental This metric is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const METRIC_MESSAGING_PROCESS_DURATION: "messaging.process.duration";
//# sourceMappingURL=semconv.d.ts.map