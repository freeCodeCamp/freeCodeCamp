Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const api = require('@opentelemetry/api');
const core$1 = require('@opentelemetry/core');
const instrumentation = require('@opentelemetry/instrumentation');
const semconv = require('./semconv.js');
const semconvObsolete = require('./semconv-obsolete.js');
const types = require('./types.js');
const utils = require('./utils.js');
const core = require('@sentry/core');

const PACKAGE_NAME = "@sentry/instrumentation-amqplib";
const supportedVersions = [">=0.5.5 <2"];
class AmqplibInstrumentation extends instrumentation.InstrumentationBase {
  constructor(config = {}) {
    super(PACKAGE_NAME, core.SDK_VERSION, { ...types.DEFAULT_CONFIG, ...config });
    this._setSemconvStabilityFromEnv();
  }
  // Used for testing.
  _setSemconvStabilityFromEnv() {
    this._netSemconvStability = instrumentation.semconvStabilityFromStr("http", process.env.OTEL_SEMCONV_STABILITY_OPT_IN);
  }
  setConfig(config = {}) {
    super.setConfig({ ...types.DEFAULT_CONFIG, ...config });
  }
  init() {
    const channelModelModuleFile = new instrumentation.InstrumentationNodeModuleFile(
      "amqplib/lib/channel_model.js",
      supportedVersions,
      this.patchChannelModel.bind(this),
      this.unpatchChannelModel.bind(this)
    );
    const callbackModelModuleFile = new instrumentation.InstrumentationNodeModuleFile(
      "amqplib/lib/callback_model.js",
      supportedVersions,
      this.patchChannelModel.bind(this),
      this.unpatchChannelModel.bind(this)
    );
    const connectModuleFile = new instrumentation.InstrumentationNodeModuleFile(
      "amqplib/lib/connect.js",
      supportedVersions,
      this.patchConnect.bind(this),
      this.unpatchConnect.bind(this)
    );
    const module = new instrumentation.InstrumentationNodeModuleDefinition("amqplib", supportedVersions, void 0, void 0, [
      channelModelModuleFile,
      connectModuleFile,
      callbackModelModuleFile
    ]);
    return module;
  }
  patchConnect(moduleExports) {
    moduleExports = this.unpatchConnect(moduleExports);
    if (!instrumentation.isWrapped(moduleExports.connect)) {
      this._wrap(moduleExports, "connect", this.getConnectPatch.bind(this));
    }
    return moduleExports;
  }
  unpatchConnect(moduleExports) {
    if (instrumentation.isWrapped(moduleExports.connect)) {
      this._unwrap(moduleExports, "connect");
    }
    return moduleExports;
  }
  patchChannelModel(moduleExports, moduleVersion) {
    if (!instrumentation.isWrapped(moduleExports.Channel.prototype.publish)) {
      this._wrap(moduleExports.Channel.prototype, "publish", this.getPublishPatch.bind(this, moduleVersion));
    }
    if (!instrumentation.isWrapped(moduleExports.Channel.prototype.consume)) {
      this._wrap(moduleExports.Channel.prototype, "consume", this.getConsumePatch.bind(this, moduleVersion));
    }
    if (!instrumentation.isWrapped(moduleExports.Channel.prototype.ack)) {
      this._wrap(moduleExports.Channel.prototype, "ack", this.getAckPatch.bind(this, false, types.EndOperation.Ack));
    }
    if (!instrumentation.isWrapped(moduleExports.Channel.prototype.nack)) {
      this._wrap(moduleExports.Channel.prototype, "nack", this.getAckPatch.bind(this, true, types.EndOperation.Nack));
    }
    if (!instrumentation.isWrapped(moduleExports.Channel.prototype.reject)) {
      this._wrap(moduleExports.Channel.prototype, "reject", this.getAckPatch.bind(this, true, types.EndOperation.Reject));
    }
    if (!instrumentation.isWrapped(moduleExports.Channel.prototype.ackAll)) {
      this._wrap(moduleExports.Channel.prototype, "ackAll", this.getAckAllPatch.bind(this, false, types.EndOperation.AckAll));
    }
    if (!instrumentation.isWrapped(moduleExports.Channel.prototype.nackAll)) {
      this._wrap(
        moduleExports.Channel.prototype,
        "nackAll",
        this.getAckAllPatch.bind(this, true, types.EndOperation.NackAll)
      );
    }
    if (!instrumentation.isWrapped(moduleExports.Channel.prototype.emit)) {
      this._wrap(moduleExports.Channel.prototype, "emit", this.getChannelEmitPatch.bind(this));
    }
    if (!instrumentation.isWrapped(moduleExports.ConfirmChannel.prototype.publish)) {
      this._wrap(
        moduleExports.ConfirmChannel.prototype,
        "publish",
        this.getConfirmedPublishPatch.bind(this, moduleVersion)
      );
    }
    return moduleExports;
  }
  unpatchChannelModel(moduleExports) {
    if (instrumentation.isWrapped(moduleExports.Channel.prototype.publish)) {
      this._unwrap(moduleExports.Channel.prototype, "publish");
    }
    if (instrumentation.isWrapped(moduleExports.Channel.prototype.consume)) {
      this._unwrap(moduleExports.Channel.prototype, "consume");
    }
    if (instrumentation.isWrapped(moduleExports.Channel.prototype.ack)) {
      this._unwrap(moduleExports.Channel.prototype, "ack");
    }
    if (instrumentation.isWrapped(moduleExports.Channel.prototype.nack)) {
      this._unwrap(moduleExports.Channel.prototype, "nack");
    }
    if (instrumentation.isWrapped(moduleExports.Channel.prototype.reject)) {
      this._unwrap(moduleExports.Channel.prototype, "reject");
    }
    if (instrumentation.isWrapped(moduleExports.Channel.prototype.ackAll)) {
      this._unwrap(moduleExports.Channel.prototype, "ackAll");
    }
    if (instrumentation.isWrapped(moduleExports.Channel.prototype.nackAll)) {
      this._unwrap(moduleExports.Channel.prototype, "nackAll");
    }
    if (instrumentation.isWrapped(moduleExports.Channel.prototype.emit)) {
      this._unwrap(moduleExports.Channel.prototype, "emit");
    }
    if (instrumentation.isWrapped(moduleExports.ConfirmChannel.prototype.publish)) {
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
            const urlAttributes = utils.getConnectionAttributesFromUrl(url, self._netSemconvStability);
            const serverAttributes = utils.getConnectionAttributesFromServer(conn);
            conn[utils.CONNECTION_ATTRIBUTES] = {
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
        self.endAllSpansOnChannel(this, true, types.EndOperation.ChannelClosed, void 0);
        const activeTimer = this[utils.CHANNEL_CONSUME_TIMEOUT_TIMER];
        if (activeTimer) {
          clearInterval(activeTimer);
        }
        this[utils.CHANNEL_CONSUME_TIMEOUT_TIMER] = void 0;
      } else if (eventName === "error") {
        self.endAllSpansOnChannel(this, true, types.EndOperation.ChannelError, void 0);
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
      const requeueResolved = endOperation === types.EndOperation.Reject ? allUpToOrRequeue : requeue;
      const spansNotEnded = channel[utils.CHANNEL_SPANS_NOT_ENDED] ?? [];
      const msgIndex = spansNotEnded.findIndex((msgDetails) => msgDetails.msg === message);
      if (msgIndex < 0) {
        self.endConsumerSpan(message, isRejected, endOperation, requeueResolved);
      } else if (endOperation !== types.EndOperation.Reject && allUpToOrRequeue) {
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
      if (!Object.prototype.hasOwnProperty.call(channel, utils.CHANNEL_SPANS_NOT_ENDED)) {
        const { consumeTimeoutMs } = self.getConfig();
        if (consumeTimeoutMs) {
          const timer = setInterval(() => {
            self.checkConsumeTimeoutOnChannel(channel);
          }, consumeTimeoutMs);
          timer.unref();
          channel[utils.CHANNEL_CONSUME_TIMEOUT_TIMER] = timer;
        }
        channel[utils.CHANNEL_SPANS_NOT_ENDED] = [];
      }
      const patchedOnMessage = function(msg) {
        if (!msg) {
          return onMessage.call(this, msg);
        }
        const headers = msg.properties.headers ?? {};
        let parentContext = api.propagation.extract(api.ROOT_CONTEXT, headers);
        const exchange = msg.fields?.exchange;
        let links;
        if (self._config.useLinksForConsume) {
          const parentSpanContext = parentContext ? api.trace.getSpan(parentContext)?.spanContext() : void 0;
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
            kind: api.SpanKind.CONSUMER,
            attributes: {
              ...channel?.connection?.[utils.CONNECTION_ATTRIBUTES],
              [semconvObsolete.ATTR_MESSAGING_DESTINATION]: exchange,
              [semconvObsolete.ATTR_MESSAGING_DESTINATION_KIND]: semconvObsolete.MESSAGING_DESTINATION_KIND_VALUE_TOPIC,
              [semconvObsolete.ATTR_MESSAGING_RABBITMQ_ROUTING_KEY]: msg.fields?.routingKey,
              [semconv.ATTR_MESSAGING_OPERATION]: semconvObsolete.MESSAGING_OPERATION_VALUE_PROCESS,
              [semconvObsolete.OLD_ATTR_MESSAGING_MESSAGE_ID]: msg?.properties.messageId,
              [semconvObsolete.ATTR_MESSAGING_CONVERSATION_ID]: msg?.properties.correlationId
            },
            links
          },
          parentContext
        );
        const { consumeHook } = self.getConfig();
        if (consumeHook) {
          instrumentation.safeExecuteInTheMiddle(
            () => consumeHook(span, { moduleVersion, msg }),
            (e) => {
              if (e) {
                api.diag.error("amqplib instrumentation: consumerHook error", e);
              }
            },
            true
          );
        }
        if (!options?.noAck) {
          channel[utils.CHANNEL_SPANS_NOT_ENDED].push({
            msg,
            timeOfConsume: core$1.hrTime()
          });
          msg[utils.MESSAGE_STORED_SPAN] = span;
        }
        const setContext = parentContext ? parentContext : api.ROOT_CONTEXT;
        api.context.with(api.trace.setSpan(setContext, span), () => {
          onMessage.call(this, msg);
        });
        if (options?.noAck) {
          self.callConsumeEndHook(span, msg, false, types.EndOperation.AutoAck);
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
        instrumentation.safeExecuteInTheMiddle(
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
              api.diag.error("amqplib instrumentation: publishHook error", e);
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
            instrumentation.safeExecuteInTheMiddle(
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
                  api.diag.error("amqplib instrumentation: publishConfirmHook error", e);
                }
              },
              true
            );
          }
          if (err) {
            span.setStatus({
              code: api.SpanStatusCode.ERROR,
              message: "message confirmation has been nack'ed"
            });
          }
          span.end();
        }
      };
      const markedContext = utils.markConfirmChannelTracing(api.context.active());
      const argumentsCopy = [...arguments];
      argumentsCopy[3] = modifiedOptions;
      argumentsCopy[4] = api.context.bind(
        utils.unmarkConfirmChannelTracing(api.trace.setSpan(markedContext, span)),
        patchedOnConfirm
      );
      return api.context.with(markedContext, original.bind(this, ...argumentsCopy));
    };
  }
  getPublishPatch(moduleVersion, original) {
    const self = this;
    return function publish(exchange, routingKey, content, options) {
      if (utils.isConfirmChannelTracing(api.context.active())) {
        return original.apply(this, arguments);
      } else {
        const channel = this;
        const { span, modifiedOptions } = self.createPublishSpan(self, exchange, routingKey, channel, options);
        const { publishHook } = self.getConfig();
        if (publishHook) {
          instrumentation.safeExecuteInTheMiddle(
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
                api.diag.error("amqplib instrumentation: publishHook error", e);
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
    const normalizedExchange = utils.normalizeExchange(exchange);
    const span = self.tracer.startSpan(`publish ${normalizedExchange}`, {
      kind: api.SpanKind.PRODUCER,
      attributes: {
        ...channel.connection[utils.CONNECTION_ATTRIBUTES],
        [semconvObsolete.ATTR_MESSAGING_DESTINATION]: exchange,
        [semconvObsolete.ATTR_MESSAGING_DESTINATION_KIND]: semconvObsolete.MESSAGING_DESTINATION_KIND_VALUE_TOPIC,
        [semconvObsolete.ATTR_MESSAGING_RABBITMQ_ROUTING_KEY]: routingKey,
        [semconvObsolete.OLD_ATTR_MESSAGING_MESSAGE_ID]: options?.messageId,
        [semconvObsolete.ATTR_MESSAGING_CONVERSATION_ID]: options?.correlationId
      }
    });
    const modifiedOptions = options ?? {};
    modifiedOptions.headers = modifiedOptions.headers ?? {};
    api.propagation.inject(api.trace.setSpan(api.context.active(), span), modifiedOptions.headers);
    return { span, modifiedOptions };
  }
  endConsumerSpan(message, isRejected, operation, requeue) {
    const storedSpan = message[utils.MESSAGE_STORED_SPAN];
    if (!storedSpan) return;
    if (isRejected !== false) {
      storedSpan.setStatus({
        code: api.SpanStatusCode.ERROR,
        message: operation !== types.EndOperation.ChannelClosed && operation !== types.EndOperation.ChannelError ? `${operation} called on message${requeue === true ? " with requeue" : requeue === false ? " without requeue" : ""}` : operation
      });
    }
    this.callConsumeEndHook(storedSpan, message, isRejected, operation);
    storedSpan.end();
    message[utils.MESSAGE_STORED_SPAN] = void 0;
  }
  endAllSpansOnChannel(channel, isRejected, operation, requeue) {
    const spansNotEnded = channel[utils.CHANNEL_SPANS_NOT_ENDED] ?? [];
    spansNotEnded.forEach((msgDetails) => {
      this.endConsumerSpan(msgDetails.msg, isRejected, operation, requeue);
    });
    channel[utils.CHANNEL_SPANS_NOT_ENDED] = [];
  }
  callConsumeEndHook(span, msg, rejected, endOperation) {
    const { consumeEndHook } = this.getConfig();
    if (!consumeEndHook) return;
    instrumentation.safeExecuteInTheMiddle(
      () => consumeEndHook(span, { msg, rejected, endOperation }),
      (e) => {
        if (e) {
          api.diag.error("amqplib instrumentation: consumerEndHook error", e);
        }
      },
      true
    );
  }
  checkConsumeTimeoutOnChannel(channel) {
    const currentTime = core$1.hrTime();
    const spansNotEnded = channel[utils.CHANNEL_SPANS_NOT_ENDED] ?? [];
    let i;
    const { consumeTimeoutMs } = this.getConfig();
    for (i = 0; i < spansNotEnded.length; i++) {
      const currMessage = spansNotEnded[i];
      const timeFromConsume = core$1.hrTimeDuration(currMessage.timeOfConsume, currentTime);
      if (core$1.hrTimeToMilliseconds(timeFromConsume) < consumeTimeoutMs) {
        break;
      }
      this.endConsumerSpan(currMessage.msg, null, types.EndOperation.InstrumentationTimeout, true);
    }
    spansNotEnded.splice(0, i);
  }
}

exports.AmqplibInstrumentation = AmqplibInstrumentation;
//# sourceMappingURL=amqplib.js.map
