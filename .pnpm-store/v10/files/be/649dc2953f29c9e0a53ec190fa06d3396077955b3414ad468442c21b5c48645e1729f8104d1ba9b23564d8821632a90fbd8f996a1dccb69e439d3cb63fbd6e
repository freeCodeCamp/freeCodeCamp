import { startSpanManual, SEMANTIC_ATTRIBUTE_SENTRY_OP, SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, SPAN_STATUS_ERROR } from '@sentry/core';
import { tracingChannel } from '@sentry/opentelemetry/tracing-channel';
import { defaultDbStatementSerializer } from './vendored/redis-common.js';
import { DB_SYSTEM_VALUE_REDIS, ATTR_NET_PEER_PORT, ATTR_NET_PEER_NAME, ATTR_DB_STATEMENT, ATTR_DB_SYSTEM } from './vendored/semconv.js';

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
  const channel = tracingChannel(CHANNEL_COMMAND, (data) => {
    const actualArgs = data.args.slice(1);
    const statement = safeSerialize(data.command, actualArgs);
    return startSpanManual(
      {
        name: `redis-${data.command}`,
        attributes: {
          [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: ORIGIN,
          [SEMANTIC_ATTRIBUTE_SENTRY_OP]: "db.redis",
          [ATTR_DB_SYSTEM]: DB_SYSTEM_VALUE_REDIS,
          ...statement != null ? { [ATTR_DB_STATEMENT]: statement } : {},
          ...data.serverAddress != null ? { [ATTR_NET_PEER_NAME]: data.serverAddress } : {},
          ...data.serverPort != null ? { [ATTR_NET_PEER_PORT]: data.serverPort } : {}
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
        span.setStatus({ code: SPAN_STATUS_ERROR, message: data.error.message });
      }
      span.end();
    }
  });
}
function setupBatchChannel() {
  const channel = tracingChannel(CHANNEL_BATCH, (data) => {
    const operationName = data.batchMode === "PIPELINE" ? "PIPELINE" : "MULTI";
    return startSpanManual(
      {
        name: operationName,
        attributes: {
          [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: ORIGIN,
          [SEMANTIC_ATTRIBUTE_SENTRY_OP]: "db.redis",
          [ATTR_DB_SYSTEM]: DB_SYSTEM_VALUE_REDIS,
          ...data.batchSize != null ? { "db.redis.batch_size": data.batchSize } : {},
          ...data.serverAddress != null ? { [ATTR_NET_PEER_NAME]: data.serverAddress } : {},
          ...data.serverPort != null ? { [ATTR_NET_PEER_PORT]: data.serverPort } : {}
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
        span.setStatus({ code: SPAN_STATUS_ERROR, message: data.error.message });
      }
      span.end();
    }
  });
}
function setupConnectChannel() {
  const channel = tracingChannel(CHANNEL_CONNECT, (data) => {
    return startSpanManual(
      {
        name: "redis-connect",
        attributes: {
          [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: ORIGIN,
          [SEMANTIC_ATTRIBUTE_SENTRY_OP]: "db.redis.connect",
          [ATTR_DB_SYSTEM]: DB_SYSTEM_VALUE_REDIS,
          ...data.serverAddress != null ? { [ATTR_NET_PEER_NAME]: data.serverAddress } : {},
          ...data.serverPort != null ? { [ATTR_NET_PEER_PORT]: data.serverPort } : {}
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
        span.setStatus({ code: SPAN_STATUS_ERROR, message: data.error.message });
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
    return defaultDbStatementSerializer(command, args);
  } catch {
    return void 0;
  }
}

export { subscribeRedisDiagnosticChannels };
//# sourceMappingURL=redis-dc-subscriber.js.map
