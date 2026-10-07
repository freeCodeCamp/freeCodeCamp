import { diag, context, trace, SpanKind, propagation, SpanStatusCode, ROOT_CONTEXT } from '@opentelemetry/api';
import { hrTime, hrTimeDuration, hrTimeToMilliseconds } from '@opentelemetry/core';
import { InstrumentationBase, semconvStabilityFromStr, InstrumentationNodeModuleFile, InstrumentationNodeModuleDefinition, isWrapped, safeExecuteInTheMiddle } from '@opentelemetry/instrumentation';
import { ATTR_MESSAGING_OPERATION } from './semconv.js';
import { MESSAGING_DESTINATION_KIND_VALUE_TOPIC, ATTR_MESSAGING_CONVERSATION_ID, OLD_ATTR_MESSAGING_MESSAGE_ID, ATTR_MESSAGING_RABBITMQ_ROUTING_KEY, ATTR_MESSAGING_DESTINATION_KIND, ATTR_MESSAGING_DESTINATION, MESSAGING_OPERATION_VALUE_PROCESS } from './semconv-obsolete.js';
import { DEFAULT_CONFIG, EndOperation } from './types.js';
import { getConnectionAttributesFromUrl, getConnectionAttributesFromServer, CONNECTION_ATTRIBUTES, CHANNEL_CONSUME_TIMEOUT_TIMER, CHANNEL_SPANS_NOT_ENDED, markConfirmChannelTracing, unmarkConfirmChannelTracing, isConfirmChannelTracing, MESSAGE_STORED_SPAN, normalizeExchange } from './utils.js';
import { SDK_VERSION } from '@sentry/core';

const PACKAGE_NAME = "@sentry/instrumentation-amqplib";
const supportedVersions = [">=0.5.5 <2"];
class AmqplibInstrumentation extends InstrumentationBase {
  constructor(config = {}) {
    super(PACKAGE_NAME, SDK_VERSION, { ...DEFAULT_CONFIG, ...config });
    this._setSemconvStabilityFromEnv();
  }
  // Used for testing.
  _setSemconvStabilityFromEnv() {
    this._netSemconvStability = semconvStabilityFromStr("http", process.env.OTEL_SEMCONV_STABILITY_OPT_IN);
  }
  setConfig(config = {}) {
    super.setConfig({ ...DEFAULT_CONFIG, ...config });
  }
  init() {
    const channelModelModuleFile = new InstrumentationNodeModuleFile(
      "amqplib/lib/channel_model.js",
      supportedVersions,
      this.patchChannelModel.bind(this),
      this.unpatchChannelModel.bind(this)
    );
    const callbackModelModuleFile = new InstrumentationNodeModuleFile(
      "amqplib/lib/callback_model.js",
      supportedVersions,
      this.patchChannelModel.bind(this),
      this.unpatchChannelModel.bind(this)
    );
    const connectModuleFile = new InstrumentationNodeModuleFile(
      "amqplib/lib/connect.js",
      supportedVersions,
      this.patchConnect.bind(this),
      this.unpatchConnect.bind(this)
    );
    const module = new InstrumentationNodeModuleDefinition("amqplib", supportedVersions, void 0, void 0, [
      channelModelModuleFile,
      connectModuleFile,
      callbackModelModuleFile
    ]);
    return module;
  }
  patchConnect(moduleExports) {
    moduleExports = this.unpatchConnect(moduleExports);
    if (!isWrapped(moduleExports.connect)) {
      this._wrap(moduleExports, "connect", this.getConnectPatch.bind(this));
    }
    return moduleExports;
  }
  unpatchConnect(moduleExports) {
    if (isWrapped(moduleExports.connect)) {
      this._unwrap(moduleExports, "connect");
    }
    return moduleExports;
  }
  patchChannelModel(moduleExports, moduleVersion) {
    if (!isWrapped(moduleExports.Channel.prototype.publish)) {
      this._wrap(moduleExports.Channel.prototype, "publish", this.getPublishPatch.bind(this, moduleVersion));
    }
    if (!isWrapped(moduleExports.Channel.prototype.consume)) {
      this._wrap(moduleExports.Channel.prototype, "consume", this.getConsumePatch.bind(this, moduleVersion));
    }
    if (!isWrapped(moduleExports.Channel.prototype.ack)) {
      this._wrap(moduleExports.Channel.prototype, "ack", this.getAckPatch.bind(this, false, EndOperation.Ack));
    }
    if (!isWrapped(moduleExports.Channel.prototype.nack)) {
      this._wrap(moduleExports.Channel.prototype, "nack", this.getAckPatch.bind(this, true, EndOperation.Nack));
    }
    if (!isWrapped(moduleExports.Channel.prototype.reject)) {
      this._wrap(moduleExports.Channel.prototype, "reject", this.getAckPatch.bind(this, true, EndOperation.Reject));
    }
    if (!isWrapped(moduleExports.Channel.prototype.ackAll)) {
      this._wrap(moduleExports.Channel.prototype, "ackAll", this.getAckAllPatch.bind(this, false, EndOperation.AckAll));
    }
    if (!isWrapped(moduleExports.Channel.prototype.nackAll)) {
      this._wrap(
        moduleExports.Channel.prototype,
        "nackAll",
        this.getAckAllPatch.bind(this, true, EndOperation.NackAll)
      );
    }
    if (!isWrapped(moduleExports.Channel.prototype.emit)) {
      this._wrap(moduleExports.Channel.prototype, "emit", this.getChannelEmitPatch.bind(this));
    }
    if (!isWrapped(moduleExports.ConfirmChannel.prototype.publish)) {
      this._wrap(
        moduleExports.ConfirmChannel.prototype,
        "publish",
        this.getConfirmedPublishPatch.bind(this, moduleVersion)
      );
    }
    return moduleExports;
  }
  unpatchChannelModel(moduleExports) {
    if (isWrapped(moduleExports.Channel.prototype.publish)) {
      this._unwrap(moduleExports.Channel.prototype, "publish");
    }
    if (isWrapped(moduleExports.Channel.prototype.consume)) {
      this._unwrap(moduleExports.Channel.prototype, "consume");
    }
    if (isWrapped(moduleExports.Channel.prototype.ack)) {
      this._unwrap(moduleExports.Channel.prototype, "ack");
    }
    if (isWrapped(moduleExports.Channel.prototype.nack)) {
      this._unwrap(moduleExports.Channel.prototype, "nack");
    }
    if (isWrapped(moduleExports.Channel.prototype.reject)) {
      this._unwrap(moduleExports.Channel.prototype, "reject");
    }
    if (isWrapped(moduleExports.Channel.prototype.ackAll)) {
      this._unwrap(moduleExports.Channel.prototype, "ackAll");
    }
    if (isWrapped(moduleExports.Channel.prototype.nackAll)) {
      this._unwrap(moduleExports.Channel.prototype, "nackAll");
    }
    if (isWrapped(moduleExports.Channel.prototype.emit)) {
      this._unwrap(moduleExports.Channel.prototype, "emit");
    }
    if (isWrapped(moduleExports.ConfirmChannel.prototype.publish)) {
      this._unwrap(moduleExports.ConfirmChannel.prototype, "publish");
    }
    return moduleExports;
  }
  getConnectPatch(original) {
    const self = this;
    return function patchedConnect(url, socketOptions, openCallback) {
      return original.call(
        this,
        url,
        socketOptions,
        function(err, conn) {
          if (err == null) {
            const urlAttributes = getConnectionAttributesFromUrl(url, self._netSemconvStability);
            const serverAttributes = getConnectionAttributesFromServer(conn);
            conn[CONNECTION_ATTRIBUTES] = {
              ...urlAttributes,
              ...serverAttributes
            };
          }
          openCallback.apply(this, arguments);
        }
      );
    };
  }
  getChannelEmitPatch(original) {
    const self = this;
    return function emit(eventName) {
      if (eventName === "close") {
        self.endAllSpansOnChannel(this, true, EndOperation.ChannelClosed, void 0);
        const activeTimer = this[CHANNEL_CONSUME_TIMEOUT_TIMER];
        if (activeTimer) {
          clearInterval(activeTimer);
        }
        this[CHANNEL_CONSUME_TIMEOUT_TIMER] = void 0;
      } else if (eventName === "error") {
        self.endAllSpansOnChannel(this, true, EndOperation.ChannelError, void 0);
      }
      return original.apply(this, arguments);
    };
  }
  getAckAllPatch(isRejected, endOperation, original) {
    const self = this;
    return function ackAll(requeueOrEmpty) {
      self.endAllSpansOnChannel(this, isRejected, endOperation, requeueOrEmpty);
      return original.apply(this, arguments);
    };
  }
  getAckPatch(isRejected, endOperation, original) {
    const self = this;
    return function ack(message, allUpToOrRequeue, requeue) {
      const channel = this;
      const requeueResolved = endOperation === EndOperation.Reject ? allUpToOrRequeue : requeue;
      const spansNotEnded = channel[CHANNEL_SPANS_NOT_ENDED] ?? [];
      const msgIndex = spansNotEnded.findIndex((msgDetails) => msgDetails.msg === message);
      if (msgIndex < 0) {
        self.endConsumerSpan(message, isRejected, endOperation, requeueResolved);
      } else if (endOperation !== EndOperation.Reject && allUpToOrRequeue) {
        for (let i = 0; i <= msgIndex; i++) {
          self.endConsumerSpan(spansNotEnded[i].msg, isRejected, endOperation, requeueResolved);
        }
        spansNotEnded.splice(0, msgIndex + 1);
      } else {
        self.endConsumerSpan(message, isRejected, endOperation, requeueResolved);
        spansNotEnded.splice(msgIndex, 1);
      }
      return original.apply(this, arguments);
    };
  }
  getConsumePatch(moduleVersion, original) {
    const self = this;
    return function consume(queue, onMessage, options) {
      const channel = this;
      if (!Object.prototype.hasOwnProperty.call(channel, CHANNEL_SPANS_NOT_ENDED)) {
        const { consumeTimeoutMs } = self.getConfig();
        if (consumeTimeoutMs) {
          const timer = setInterval(() => {
            self.checkConsumeTimeoutOnChannel(channel);
          }, consumeTimeoutMs);
          timer.unref();
          channel[CHANNEL_CONSUME_TIMEOUT_TIMER] = timer;
        }
        channel[CHANNEL_SPANS_NOT_ENDED] = [];
      }
      const patchedOnMessage = function(msg) {
        if (!msg) {
          return onMessage.call(this, msg);
        }
        const headers = msg.properties.headers ?? {};
        let parentContext = propagation.extract(ROOT_CONTEXT, headers);
        const exchange = msg.fields?.exchange;
        let links;
        if (self._config.useLinksForConsume) {
          const parentSpanContext = parentContext ? trace.getSpan(parentContext)?.spanContext() : void 0;
          parentContext = void 0;
          if (parentSpanContext) {
            links = [
              {
                context: parentSpanContext
              }
            ];
          }
        }
        const span = self.tracer.startSpan(
          `${queue} process`,
          {
            kind: SpanKind.CONSUMER,
            attributes: {
              ...channel?.connection?.[CONNECTION_ATTRIBUTES],
              [ATTR_MESSAGING_DESTINATION]: exchange,
              [ATTR_MESSAGING_DESTINATION_KIND]: MESSAGING_DESTINATION_KIND_VALUE_TOPIC,
              [ATTR_MESSAGING_RABBITMQ_ROUTING_KEY]: msg.fields?.routingKey,
              [ATTR_MESSAGING_OPERATION]: MESSAGING_OPERATION_VALUE_PROCESS,
              [OLD_ATTR_MESSAGING_MESSAGE_ID]: msg?.properties.messageId,
              [ATTR_MESSAGING_CONVERSATION_ID]: msg?.properties.correlationId
            },
            links
          },
          parentContext
        );
        const { consumeHook } = self.getConfig();
        if (consumeHook) {
          safeExecuteInTheMiddle(
            () => consumeHook(span, { moduleVersion, msg }),
            (e) => {
              if (e) {
                diag.error("amqplib instrumentation: consumerHook error", e);
              }
            },
            true
          );
        }
        if (!options?.noAck) {
          channel[CHANNEL_SPANS_NOT_ENDED].push({
            msg,
            timeOfConsume: hrTime()
          });
          msg[MESSAGE_STORED_SPAN] = span;
        }
        const setContext = parentContext ? parentContext : ROOT_CONTEXT;
        context.with(trace.setSpan(setContext, span), () => {
          onMessage.call(this, msg);
        });
        if (options?.noAck) {
          self.callConsumeEndHook(span, msg, false, EndOperation.AutoAck);
          span.end();
        }
      };
      arguments[1] = patchedOnMessage;
      return original.apply(this, arguments);
    };
  }
  getConfirmedPublishPatch(moduleVersion, original) {
    const self = this;
    return function confirmedPublish(exchange, routingKey, content, options, callback) {
      const channel = this;
      const { span, modifiedOptions } = self.createPublishSpan(self, exchange, routingKey, channel, options);
      const { publishHook } = self.getConfig();
      if (publishHook) {
        safeExecuteInTheMiddle(
          () => publishHook(span, {
            moduleVersion,
            exchange,
            routingKey,
            content,
            options: modifiedOptions,
            isConfirmChannel: true
          }),
          (e) => {
            if (e) {
              diag.error("amqplib instrumentation: publishHook error", e);
            }
          },
          true
        );
      }
      const patchedOnConfirm = function(err, ok) {
        try {
          callback?.call(this, err, ok);
        } finally {
          const { publishConfirmHook } = self.getConfig();
          if (publishConfirmHook) {
            safeExecuteInTheMiddle(
              () => publishConfirmHook(span, {
                moduleVersion,
                exchange,
                routingKey,
                content,
                options,
                isConfirmChannel: true,
                confirmError: err
              }),
              (e) => {
                if (e) {
                  diag.error("amqplib instrumentation: publishConfirmHook error", e);
                }
              },
              true
            );
          }
          if (err) {
            span.setStatus({
              code: SpanStatusCode.ERROR,
              message: "message confirmation has been nack'ed"
            });
          }
          span.end();
        }
      };
      const markedContext = markConfirmChannelTracing(context.active());
      const argumentsCopy = [...arguments];
      argumentsCopy[3] = modifiedOptions;
      argumentsCopy[4] = context.bind(
        unmarkConfirmChannelTracing(trace.setSpan(markedContext, span)),
        patchedOnConfirm
      );
      return context.with(markedContext, original.bind(this, ...argumentsCopy));
    };
  }
  getPublishPatch(moduleVersion, original) {
    const self = this;
    return function publish(exchange, routingKey, content, options) {
      if (isConfirmChannelTracing(context.active())) {
        return original.apply(this, arguments);
      } else {
        const channel = this;
        const { span, modifiedOptions } = self.createPublishSpan(self, exchange, routingKey, channel, options);
        const { publishHook } = self.getConfig();
        if (publishHook) {
          safeExecuteInTheMiddle(
            () => publishHook(span, {
              moduleVersion,
              exchange,
              routingKey,
              content,
              options: modifiedOptions,
              isConfirmChannel: false
            }),
            (e) => {
              if (e) {
                diag.error("amqplib instrumentation: publishHook error", e);
              }
            },
            true
          );
        }
        const argumentsCopy = [...arguments];
        argumentsCopy[3] = modifiedOptions;
        const originalRes = original.apply(this, argumentsCopy);
        span.end();
        return originalRes;
      }
    };
  }
  createPublishSpan(self, exchange, routingKey, channel, options) {
    const normalizedExchange = normalizeExchange(exchange);
    const span = self.tracer.startSpan(`publish ${normalizedExchange}`, {
      kind: SpanKind.PRODUCER,
      attributes: {
        ...channel.connection[CONNECTION_ATTRIBUTES],
        [ATTR_MESSAGING_DESTINATION]: exchange,
        [ATTR_MESSAGING_DESTINATION_KIND]: MESSAGING_DESTINATION_KIND_VALUE_TOPIC,
        [ATTR_MESSAGING_RABBITMQ_ROUTING_KEY]: routingKey,
        [OLD_ATTR_MESSAGING_MESSAGE_ID]: options?.messageId,
        [ATTR_MESSAGING_CONVERSATION_ID]: options?.correlationId
      }
    });
    const modifiedOptions = options ?? {};
    modifiedOptions.headers = modifiedOptions.headers ?? {};
    propagation.inject(trace.setSpan(context.active(), span), modifiedOptions.headers);
    return { span, modifiedOptions };
  }
  endConsumerSpan(message, isRejected, operation, requeue) {
    const storedSpan = message[MESSAGE_STORED_SPAN];
    if (!storedSpan) return;
    if (isRejected !== false) {
      storedSpan.setStatus({
        code: SpanStatusCode.ERROR,
        message: operation !== EndOperation.ChannelClosed && operation !== EndOperation.ChannelError ? `${operation} called on message${requeue === true ? " with requeue" : requeue === false ? " without requeue" : ""}` : operation
      });
    }
    this.callConsumeEndHook(storedSpan, message, isRejected, operation);
    storedSpan.end();
    message[MESSAGE_STORED_SPAN] = void 0;
  }
  endAllSpansOnChannel(channel, isRejected, operation, requeue) {
    const spansNotEnded = channel[CHANNEL_SPANS_NOT_ENDED] ?? [];
    spansNotEnded.forEach((msgDetails) => {
      this.endConsumerSpan(msgDetails.msg, isRejected, operation, requeue);
    });
    channel[CHANNEL_SPANS_NOT_ENDED] = [];
  }
  callConsumeEndHook(span, msg, rejected, endOperation) {
    const { consumeEndHook } = this.getConfig();
    if (!consumeEndHook) return;
    safeExecuteInTheMiddle(
      () => consumeEndHook(span, { msg, rejected, endOperation }),
      (e) => {
        if (e) {
          diag.error("amqplib instrumentation: consumerEndHook error", e);
        }
      },
      true
    );
  }
  checkConsumeTimeoutOnChannel(channel) {
    const currentTime = hrTime();
    const spansNotEnded = channel[CHANNEL_SPANS_NOT_ENDED] ?? [];
    let i;
    const { consumeTimeoutMs } = this.getConfig();
    for (i = 0; i < spansNotEnded.length; i++) {
      const currMessage = spansNotEnded[i];
      const timeFromConsume = hrTimeDuration(currMessage.timeOfConsume, currentTime);
      if (hrTimeToMilliseconds(timeFromConsume) < consumeTimeoutMs) {
        break;
      }
      this.endConsumerSpan(currMessage.msg, null, EndOperation.InstrumentationTimeout, true);
    }
    spansNotEnded.splice(0, i);
  }
}

export { AmqplibInstrumentation };
//# sourceMappingURL=amqplib.js.map
