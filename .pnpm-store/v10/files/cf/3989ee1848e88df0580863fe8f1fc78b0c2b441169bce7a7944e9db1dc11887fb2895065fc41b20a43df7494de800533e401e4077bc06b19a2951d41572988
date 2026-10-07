Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const core = require('@sentry/core');
const tracingChannel = require('@sentry/opentelemetry/tracing-channel');
const redisCommon = require('./vendored/redis-common.js');
const semconv = require('./vendored/semconv.js');

const CHANNEL_COMMAND = "node-redis:command";
const CHANNEL_BATCH = "node-redis:batch";
const CHANNEL_CONNECT = "node-redis:connect";
const ORIGIN = "auto.db.redis.diagnostic_channel";
const NOOP = () => {
};
let subscribed = false;
let currentResponseHook;
function subscribeRedisDiagnosticChannels(responseHook) {
  currentResponseHook = responseHook;
  if (subscribed) return;
  try {
    setupCommandChannel();
    setupBatchChannel();
    setupConnectChannel();
    subscribed = true;
  } catch {
  }
}
function setupCommandChannel() {
  const channel = tracingChannel.tracingChannel(CHANNEL_COMMAND, (data) => {
    const actualArgs = data.args.slice(1);
    const statement = safeSerialize(data.command, actualArgs);
    return core.startSpanManual(
      {
        name: `redis-${data.command}`,
        attributes: {
          [core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: ORIGIN,
          [core.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "db.redis",
          [semconv.ATTR_DB_SYSTEM]: semconv.DB_SYSTEM_VALUE_REDIS,
          ...statement != null ? { [semconv.ATTR_DB_STATEMENT]: statement } : {},
          ...data.serverAddress != null ? { [semconv.ATTR_NET_PEER_NAME]: data.serverAddress } : {},
          ...data.serverPort != null ? { [semconv.ATTR_NET_PEER_PORT]: data.serverPort } : {}
        }
      },
      (span) => span
    );
  });
  channel.subscribe({
    start: NOOP,
    asyncStart: NOOP,
    end: NOOP,
    asyncEnd: (data) => {
      const span = data._sentrySpan;
      if (!span || data.error) return;
      runResponseHook(span, data.command, data.args.slice(1), data.result);
      span.end();
    },
    error: (data) => {
      const span = data._sentrySpan;
      if (!span) return;
      if (data.error) {
        span.setStatus({ code: core.SPAN_STATUS_ERROR, message: data.error.message });
      }
      span.end();
    }
  });
}
function setupBatchChannel() {
  const channel = tracingChannel.tracingChannel(CHANNEL_BATCH, (data) => {
    const operationName = data.batchMode === "PIPELINE" ? "PIPELINE" : "MULTI";
    return core.startSpanManual(
      {
        name: operationName,
        attributes: {
          [core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: ORIGIN,
          [core.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "db.redis",
          [semconv.ATTR_DB_SYSTEM]: semconv.DB_SYSTEM_VALUE_REDIS,
          ...data.batchSize != null ? { "db.redis.batch_size": data.batchSize } : {},
          ...data.serverAddress != null ? { [semconv.ATTR_NET_PEER_NAME]: data.serverAddress } : {},
          ...data.serverPort != null ? { [semconv.ATTR_NET_PEER_PORT]: data.serverPort } : {}
        }
      },
      (span) => span
    );
  });
  channel.subscribe({
    start: NOOP,
    asyncStart: NOOP,
    end: NOOP,
    asyncEnd: (data) => {
      if (!data.error) data._sentrySpan?.end();
    },
    error: (data) => {
      const span = data._sentrySpan;
      if (!span) return;
      if (data.error) {
        span.setStatus({ code: core.SPAN_STATUS_ERROR, message: data.error.message });
      }
      span.end();
    }
  });
}
function setupConnectChannel() {
  const channel = tracingChannel.tracingChannel(CHANNEL_CONNECT, (data) => {
    return core.startSpanManual(
      {
        name: "redis-connect",
        attributes: {
          [core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: ORIGIN,
          [core.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "db.redis.connect",
          [semconv.ATTR_DB_SYSTEM]: semconv.DB_SYSTEM_VALUE_REDIS,
          ...data.serverAddress != null ? { [semconv.ATTR_NET_PEER_NAME]: data.serverAddress } : {},
          ...data.serverPort != null ? { [semconv.ATTR_NET_PEER_PORT]: data.serverPort } : {}
        }
      },
      (span) => span
    );
  });
  channel.subscribe({
    start: NOOP,
    asyncStart: NOOP,
    end: NOOP,
    asyncEnd: (data) => {
      if (!data.error) data._sentrySpan?.end();
    },
    error: (data) => {
      const span = data._sentrySpan;
      if (!span) return;
      if (data.error) {
        span.setStatus({ code: core.SPAN_STATUS_ERROR, message: data.error.message });
      }
      span.end();
    }
  });
}
function runResponseHook(span, command, args, result) {
  const hook = currentResponseHook;
  if (!hook) return;
  try {
    hook(span, command, args, result);
  } catch {
  }
}
function safeSerialize(command, args) {
  try {
    return redisCommon.defaultDbStatementSerializer(command, args);
  } catch {
    return void 0;
  }
}

exports.subscribeRedisDiagnosticChannels = subscribeRedisDiagnosticChannels;
//# sourceMappingURL=redis-dc-subscriber.js.map
