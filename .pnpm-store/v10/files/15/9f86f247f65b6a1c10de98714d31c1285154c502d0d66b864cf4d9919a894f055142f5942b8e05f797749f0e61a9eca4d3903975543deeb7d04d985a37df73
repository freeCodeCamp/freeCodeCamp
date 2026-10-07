import { propagation, ROOT_CONTEXT, context, trace, SpanStatusCode, SpanKind } from '@opentelemetry/api';
import { InstrumentationBase, InstrumentationNodeModuleDefinition, isWrapped, safeExecuteInTheMiddle } from '@opentelemetry/instrumentation';
import { ATTR_SERVER_PORT, ATTR_SERVER_ADDRESS, ERROR_TYPE_VALUE_OTHER, ATTR_ERROR_TYPE } from '@opentelemetry/semantic-conventions';
import { EVENT_LISTENERS_SET } from './internal-types.js';
import { bufferTextMapGetter } from './propagator.js';
import { METRIC_MESSAGING_CLIENT_OPERATION_DURATION, METRIC_MESSAGING_CLIENT_SENT_MESSAGES, METRIC_MESSAGING_CLIENT_CONSUMED_MESSAGES, METRIC_MESSAGING_PROCESS_DURATION, MESSAGING_SYSTEM_VALUE_KAFKA, ATTR_MESSAGING_OPERATION_NAME, ATTR_MESSAGING_SYSTEM, MESSAGING_OPERATION_TYPE_VALUE_PROCESS, ATTR_MESSAGING_DESTINATION_PARTITION_ID, ATTR_MESSAGING_DESTINATION_NAME, MESSAGING_OPERATION_TYPE_VALUE_RECEIVE, ATTR_MESSAGING_BATCH_MESSAGE_COUNT, ATTR_MESSAGING_KAFKA_OFFSET, ATTR_MESSAGING_KAFKA_MESSAGE_TOMBSTONE, ATTR_MESSAGING_KAFKA_MESSAGE_KEY, ATTR_MESSAGING_OPERATION_TYPE, MESSAGING_OPERATION_TYPE_VALUE_SEND } from './semconv.js';
import { SDK_VERSION } from '@sentry/core';

const PACKAGE_NAME = "@sentry/instrumentation-kafkajs";
function prepareCounter(meter, value, attributes) {
  return (errorType) => {
    meter.add(value, {
      ...attributes,
      ...errorType ? { [ATTR_ERROR_TYPE]: errorType } : {}
    });
  };
}
function prepareDurationHistogram(meter, value, attributes) {
  return (errorType) => {
    meter.record((Date.now() - value) / 1e3, {
      ...attributes,
      ...errorType ? { [ATTR_ERROR_TYPE]: errorType } : {}
    });
  };
}
const HISTOGRAM_BUCKET_BOUNDARIES = [5e-3, 0.01, 0.025, 0.05, 0.075, 0.1, 0.25, 0.5, 0.75, 1, 2.5, 5, 7.5, 10];
class KafkaJsInstrumentation extends InstrumentationBase {
  constructor(config = {}) {
    super(PACKAGE_NAME, SDK_VERSION, config);
  }
  _updateMetricInstruments() {
    this._clientDuration = this.meter.createHistogram(METRIC_MESSAGING_CLIENT_OPERATION_DURATION, {
      advice: { explicitBucketBoundaries: HISTOGRAM_BUCKET_BOUNDARIES }
    });
    this._sentMessages = this.meter.createCounter(METRIC_MESSAGING_CLIENT_SENT_MESSAGES);
    this._consumedMessages = this.meter.createCounter(METRIC_MESSAGING_CLIENT_CONSUMED_MESSAGES);
    this._processDuration = this.meter.createHistogram(METRIC_MESSAGING_PROCESS_DURATION, {
      advice: { explicitBucketBoundaries: HISTOGRAM_BUCKET_BOUNDARIES }
    });
  }
  init() {
    const unpatch = (moduleExports) => {
      if (isWrapped(moduleExports?.Kafka?.prototype.producer)) {
        this._unwrap(moduleExports.Kafka.prototype, "producer");
      }
      if (isWrapped(moduleExports?.Kafka?.prototype.consumer)) {
        this._unwrap(moduleExports.Kafka.prototype, "consumer");
      }
    };
    const module = new InstrumentationNodeModuleDefinition(
      "kafkajs",
      [">=0.3.0 <3"],
      (moduleExports) => {
        unpatch(moduleExports);
        this._wrap(moduleExports?.Kafka?.prototype, "producer", this._getProducerPatch());
        this._wrap(moduleExports?.Kafka?.prototype, "consumer", this._getConsumerPatch());
        return moduleExports;
      },
      unpatch
    );
    return module;
  }
  _getConsumerPatch() {
    const instrumentation = this;
    return (original) => {
      return function consumer(...args) {
        const newConsumer = original.apply(this, args);
        if (isWrapped(newConsumer.run)) {
          instrumentation._unwrap(newConsumer, "run");
        }
        instrumentation._wrap(newConsumer, "run", instrumentation._getConsumerRunPatch());
        instrumentation._setKafkaEventListeners(newConsumer);
        return newConsumer;
      };
    };
  }
  _setKafkaEventListeners(kafkaObj) {
    if (kafkaObj[EVENT_LISTENERS_SET]) return;
    if (kafkaObj.events?.REQUEST) {
      kafkaObj.on(kafkaObj.events.REQUEST, this._recordClientDurationMetric.bind(this));
    }
    kafkaObj[EVENT_LISTENERS_SET] = true;
  }
  _recordClientDurationMetric(event) {
    const [address = "", port = "0"] = event.payload.broker.split(":");
    this._clientDuration.record(event.payload.duration / 1e3, {
      [ATTR_MESSAGING_SYSTEM]: MESSAGING_SYSTEM_VALUE_KAFKA,
      [ATTR_MESSAGING_OPERATION_NAME]: `${event.payload.apiName}`,
      [ATTR_SERVER_ADDRESS]: address,
      [ATTR_SERVER_PORT]: Number.parseInt(port, 10)
    });
  }
  _getProducerPatch() {
    const instrumentation = this;
    return (original) => {
      return function consumer(...args) {
        const newProducer = original.apply(this, args);
        if (isWrapped(newProducer.sendBatch)) {
          instrumentation._unwrap(newProducer, "sendBatch");
        }
        instrumentation._wrap(newProducer, "sendBatch", instrumentation._getSendBatchPatch());
        if (isWrapped(newProducer.send)) {
          instrumentation._unwrap(newProducer, "send");
        }
        instrumentation._wrap(newProducer, "send", instrumentation._getSendPatch());
        if (isWrapped(newProducer.transaction)) {
          instrumentation._unwrap(newProducer, "transaction");
        }
        instrumentation._wrap(newProducer, "transaction", instrumentation._getProducerTransactionPatch());
        instrumentation._setKafkaEventListeners(newProducer);
        return newProducer;
      };
    };
  }
  _getConsumerRunPatch() {
    const instrumentation = this;
    return (original) => {
      return function run(...args) {
        const config = args[0];
        if (config?.eachMessage) {
          if (isWrapped(config.eachMessage)) {
            instrumentation._unwrap(config, "eachMessage");
          }
          instrumentation._wrap(config, "eachMessage", instrumentation._getConsumerEachMessagePatch());
        }
        if (config?.eachBatch) {
          if (isWrapped(config.eachBatch)) {
            instrumentation._unwrap(config, "eachBatch");
          }
          instrumentation._wrap(config, "eachBatch", instrumentation._getConsumerEachBatchPatch());
        }
        return original.call(this, config);
      };
    };
  }
  _getConsumerEachMessagePatch() {
    const instrumentation = this;
    return (original) => {
      return function eachMessage(...args) {
        const payload = args[0];
        const propagatedContext = propagation.extract(
          ROOT_CONTEXT,
          payload.message.headers,
          bufferTextMapGetter
        );
        const span = instrumentation._startConsumerSpan({
          topic: payload.topic,
          message: payload.message,
          operationType: MESSAGING_OPERATION_TYPE_VALUE_PROCESS,
          ctx: propagatedContext,
          attributes: {
            [ATTR_MESSAGING_DESTINATION_PARTITION_ID]: String(payload.partition)
          }
        });
        const pendingMetrics = [
          prepareDurationHistogram(instrumentation._processDuration, Date.now(), {
            [ATTR_MESSAGING_SYSTEM]: MESSAGING_SYSTEM_VALUE_KAFKA,
            [ATTR_MESSAGING_OPERATION_NAME]: "process",
            [ATTR_MESSAGING_DESTINATION_NAME]: payload.topic,
            [ATTR_MESSAGING_DESTINATION_PARTITION_ID]: String(payload.partition)
          }),
          prepareCounter(instrumentation._consumedMessages, 1, {
            [ATTR_MESSAGING_SYSTEM]: MESSAGING_SYSTEM_VALUE_KAFKA,
            [ATTR_MESSAGING_OPERATION_NAME]: "process",
            [ATTR_MESSAGING_DESTINATION_NAME]: payload.topic,
            [ATTR_MESSAGING_DESTINATION_PARTITION_ID]: String(payload.partition)
          })
        ];
        const eachMessagePromise = context.with(trace.setSpan(propagatedContext, span), () => {
          return original.apply(this, args);
        });
        return instrumentation._endSpansOnPromise([span], pendingMetrics, eachMessagePromise);
      };
    };
  }
  _getConsumerEachBatchPatch() {
    return (original) => {
      const instrumentation = this;
      return function eachBatch(...args) {
        const payload = args[0];
        const receivingSpan = instrumentation._startConsumerSpan({
          topic: payload.batch.topic,
          message: void 0,
          operationType: MESSAGING_OPERATION_TYPE_VALUE_RECEIVE,
          ctx: ROOT_CONTEXT,
          attributes: {
            [ATTR_MESSAGING_BATCH_MESSAGE_COUNT]: payload.batch.messages.length,
            [ATTR_MESSAGING_DESTINATION_PARTITION_ID]: String(payload.batch.partition)
          }
        });
        return context.with(trace.setSpan(context.active(), receivingSpan), () => {
          const startTime = Date.now();
          const spans = [];
          const pendingMetrics = [
            prepareCounter(instrumentation._consumedMessages, payload.batch.messages.length, {
              [ATTR_MESSAGING_SYSTEM]: MESSAGING_SYSTEM_VALUE_KAFKA,
              [ATTR_MESSAGING_OPERATION_NAME]: "process",
              [ATTR_MESSAGING_DESTINATION_NAME]: payload.batch.topic,
              [ATTR_MESSAGING_DESTINATION_PARTITION_ID]: String(payload.batch.partition)
            })
          ];
          payload.batch.messages.forEach((message) => {
            const propagatedContext = propagation.extract(ROOT_CONTEXT, message.headers, bufferTextMapGetter);
            const spanContext = trace.getSpan(propagatedContext)?.spanContext();
            let origSpanLink;
            if (spanContext) {
              origSpanLink = {
                context: spanContext
              };
            }
            spans.push(
              instrumentation._startConsumerSpan({
                topic: payload.batch.topic,
                message,
                operationType: MESSAGING_OPERATION_TYPE_VALUE_PROCESS,
                link: origSpanLink,
                attributes: {
                  [ATTR_MESSAGING_DESTINATION_PARTITION_ID]: String(payload.batch.partition)
                }
              })
            );
            pendingMetrics.push(
              prepareDurationHistogram(instrumentation._processDuration, startTime, {
                [ATTR_MESSAGING_SYSTEM]: MESSAGING_SYSTEM_VALUE_KAFKA,
                [ATTR_MESSAGING_OPERATION_NAME]: "process",
                [ATTR_MESSAGING_DESTINATION_NAME]: payload.batch.topic,
                [ATTR_MESSAGING_DESTINATION_PARTITION_ID]: String(payload.batch.partition)
              })
            );
          });
          const batchMessagePromise = original.apply(this, args);
          spans.unshift(receivingSpan);
          return instrumentation._endSpansOnPromise(spans, pendingMetrics, batchMessagePromise);
        });
      };
    };
  }
  _getProducerTransactionPatch() {
    const instrumentation = this;
    return (original) => {
      return function transaction(...args) {
        const transactionSpan = instrumentation.tracer.startSpan("transaction");
        const transactionPromise = original.apply(this, args);
        transactionPromise.then((transaction2) => {
          const originalSend = transaction2.send;
          transaction2.send = function send(...args2) {
            return context.with(trace.setSpan(context.active(), transactionSpan), () => {
              const patched = instrumentation._getSendPatch()(originalSend);
              return patched.apply(this, args2).catch((err) => {
                transactionSpan.setStatus({
                  code: SpanStatusCode.ERROR,
                  message: err?.message
                });
                transactionSpan.recordException(err);
                throw err;
              });
            });
          };
          const originalSendBatch = transaction2.sendBatch;
          transaction2.sendBatch = function sendBatch(...args2) {
            return context.with(trace.setSpan(context.active(), transactionSpan), () => {
              const patched = instrumentation._getSendBatchPatch()(originalSendBatch);
              return patched.apply(this, args2).catch((err) => {
                transactionSpan.setStatus({
                  code: SpanStatusCode.ERROR,
                  message: err?.message
                });
                transactionSpan.recordException(err);
                throw err;
              });
            });
          };
          const originalCommit = transaction2.commit;
          transaction2.commit = function commit(...args2) {
            const originCommitPromise = originalCommit.apply(this, args2).then(() => {
              transactionSpan.setStatus({ code: SpanStatusCode.OK });
            });
            return instrumentation._endSpansOnPromise([transactionSpan], [], originCommitPromise);
          };
          const originalAbort = transaction2.abort;
          transaction2.abort = function abort(...args2) {
            const originAbortPromise = originalAbort.apply(this, args2);
            return instrumentation._endSpansOnPromise([transactionSpan], [], originAbortPromise);
          };
        }).catch((err) => {
          transactionSpan.setStatus({
            code: SpanStatusCode.ERROR,
            message: err?.message
          });
          transactionSpan.recordException(err);
          transactionSpan.end();
        });
        return transactionPromise;
      };
    };
  }
  _getSendBatchPatch() {
    const instrumentation = this;
    return (original) => {
      return function sendBatch(...args) {
        const batch = args[0];
        const messages = batch.topicMessages || [];
        const spans = [];
        const pendingMetrics = [];
        messages.forEach((topicMessage) => {
          topicMessage.messages.forEach((message) => {
            spans.push(instrumentation._startProducerSpan(topicMessage.topic, message));
            pendingMetrics.push(
              prepareCounter(instrumentation._sentMessages, 1, {
                [ATTR_MESSAGING_SYSTEM]: MESSAGING_SYSTEM_VALUE_KAFKA,
                [ATTR_MESSAGING_OPERATION_NAME]: "send",
                [ATTR_MESSAGING_DESTINATION_NAME]: topicMessage.topic,
                ...message.partition !== void 0 ? {
                  [ATTR_MESSAGING_DESTINATION_PARTITION_ID]: String(message.partition)
                } : {}
              })
            );
          });
        });
        const origSendResult = original.apply(this, args);
        return instrumentation._endSpansOnPromise(spans, pendingMetrics, origSendResult);
      };
    };
  }
  _getSendPatch() {
    const instrumentation = this;
    return (original) => {
      return function send(...args) {
        const record = args[0];
        const spans = record.messages.map((message) => {
          return instrumentation._startProducerSpan(record.topic, message);
        });
        const pendingMetrics = record.messages.map(
          (m) => prepareCounter(instrumentation._sentMessages, 1, {
            [ATTR_MESSAGING_SYSTEM]: MESSAGING_SYSTEM_VALUE_KAFKA,
            [ATTR_MESSAGING_OPERATION_NAME]: "send",
            [ATTR_MESSAGING_DESTINATION_NAME]: record.topic,
            ...m.partition !== void 0 ? {
              [ATTR_MESSAGING_DESTINATION_PARTITION_ID]: String(m.partition)
            } : {}
          })
        );
        const origSendResult = original.apply(this, args);
        return instrumentation._endSpansOnPromise(spans, pendingMetrics, origSendResult);
      };
    };
  }
  _endSpansOnPromise(spans, pendingMetrics, sendPromise) {
    return Promise.resolve(sendPromise).then((result) => {
      pendingMetrics.forEach((m) => m());
      return result;
    }).catch((reason) => {
      let errorMessage;
      let errorType = ERROR_TYPE_VALUE_OTHER;
      if (typeof reason === "string" || reason === void 0) {
        errorMessage = reason;
      } else if (typeof reason === "object" && Object.prototype.hasOwnProperty.call(reason, "message")) {
        errorMessage = reason.message;
        errorType = reason.constructor.name;
      }
      pendingMetrics.forEach((m) => m(errorType));
      spans.forEach((span) => {
        span.setAttribute(ATTR_ERROR_TYPE, errorType);
        span.setStatus({
          code: SpanStatusCode.ERROR,
          message: errorMessage
        });
      });
      throw reason;
    }).finally(() => {
      spans.forEach((span) => span.end());
    });
  }
  _startConsumerSpan({ topic, message, operationType, ctx, link, attributes }) {
    const operationName = operationType === MESSAGING_OPERATION_TYPE_VALUE_RECEIVE ? "poll" : operationType;
    const span = this.tracer.startSpan(
      `${operationName} ${topic}`,
      {
        kind: operationType === MESSAGING_OPERATION_TYPE_VALUE_RECEIVE ? SpanKind.CLIENT : SpanKind.CONSUMER,
        attributes: {
          ...attributes,
          [ATTR_MESSAGING_SYSTEM]: MESSAGING_SYSTEM_VALUE_KAFKA,
          [ATTR_MESSAGING_DESTINATION_NAME]: topic,
          [ATTR_MESSAGING_OPERATION_TYPE]: operationType,
          [ATTR_MESSAGING_OPERATION_NAME]: operationName,
          [ATTR_MESSAGING_KAFKA_MESSAGE_KEY]: message?.key ? String(message.key) : void 0,
          [ATTR_MESSAGING_KAFKA_MESSAGE_TOMBSTONE]: message?.key && message.value === null ? true : void 0,
          [ATTR_MESSAGING_KAFKA_OFFSET]: message?.offset
        },
        links: link ? [link] : []
      },
      ctx
    );
    const { consumerHook } = this.getConfig();
    if (consumerHook && message) {
      safeExecuteInTheMiddle(
        () => consumerHook(span, { topic, message }),
        (e) => {
          if (e) this._diag.error("consumerHook error", e);
        },
        true
      );
    }
    return span;
  }
  _startProducerSpan(topic, message) {
    const span = this.tracer.startSpan(`send ${topic}`, {
      kind: SpanKind.PRODUCER,
      attributes: {
        [ATTR_MESSAGING_SYSTEM]: MESSAGING_SYSTEM_VALUE_KAFKA,
        [ATTR_MESSAGING_DESTINATION_NAME]: topic,
        [ATTR_MESSAGING_KAFKA_MESSAGE_KEY]: message.key ? String(message.key) : void 0,
        [ATTR_MESSAGING_KAFKA_MESSAGE_TOMBSTONE]: message.key && message.value === null ? true : void 0,
        [ATTR_MESSAGING_DESTINATION_PARTITION_ID]: message.partition !== void 0 ? String(message.partition) : void 0,
        [ATTR_MESSAGING_OPERATION_NAME]: "send",
        [ATTR_MESSAGING_OPERATION_TYPE]: MESSAGING_OPERATION_TYPE_VALUE_SEND
      }
    });
    message.headers = message.headers ?? {};
    propagation.inject(trace.setSpan(context.active(), span), message.headers);
    const { producerHook } = this.getConfig();
    if (producerHook) {
      safeExecuteInTheMiddle(
        () => producerHook(span, { topic, message }),
        (e) => {
          if (e) this._diag.error("producerHook error", e);
        },
        true
      );
    }
    return span;
  }
}

export { KafkaJsInstrumentation };
//# sourceMappingURL=instrumentation.js.map
