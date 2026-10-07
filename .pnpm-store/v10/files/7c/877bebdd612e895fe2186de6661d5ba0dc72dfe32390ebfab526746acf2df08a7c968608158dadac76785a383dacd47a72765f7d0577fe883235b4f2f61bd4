import { trace, context, SpanKind, diag, SpanStatusCode } from '@opentelemetry/api';
import { SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN } from '@sentry/core';
import { InstrumentationBase, semconvStabilityFromStr, InstrumentationNodeModuleDefinition, isWrapped, SemconvStability, safeExecuteInTheMiddle } from '@opentelemetry/instrumentation';
import { ATTR_DB_SYSTEM_NAME, ATTR_DB_QUERY_TEXT, ATTR_SERVER_ADDRESS, ATTR_SERVER_PORT } from '@opentelemetry/semantic-conventions';
import { defaultDbStatementSerializer } from './redis-common.js';
import { DB_SYSTEM_VALUE_REDIS, ATTR_DB_SYSTEM, ATTR_DB_STATEMENT, ATTR_DB_CONNECTION_STRING, DB_SYSTEM_NAME_VALUE_REDIS, ATTR_NET_PEER_NAME, ATTR_NET_PEER_PORT } from './semconv.js';

const PACKAGE_NAME = "@opentelemetry/instrumentation-ioredis";
const PACKAGE_VERSION = "0.62.0";
function endSpan(span, err) {
  if (err) {
    span.recordException(err);
    span.setStatus({
      code: SpanStatusCode.ERROR,
      message: err.message
    });
  }
  span.end();
}
const DEFAULT_CONFIG = {
  requireParentSpan: true
};
class IORedisInstrumentation extends InstrumentationBase {
  constructor(config = {}) {
    super(PACKAGE_NAME, PACKAGE_VERSION, { ...DEFAULT_CONFIG, ...config });
    this._setSemconvStabilityFromEnv();
  }
  _setSemconvStabilityFromEnv() {
    this._netSemconvStability = semconvStabilityFromStr("http", process.env["OTEL_SEMCONV_STABILITY_OPT_IN"]);
    this._dbSemconvStability = semconvStabilityFromStr("database", process.env["OTEL_SEMCONV_STABILITY_OPT_IN"]);
  }
  setConfig(config = {}) {
    super.setConfig({ ...DEFAULT_CONFIG, ...config });
  }
  init() {
    return [
      new InstrumentationNodeModuleDefinition(
        "ioredis",
        [">=2.0.0 <6"],
        (module, moduleVersion) => {
          const moduleExports = module[Symbol.toStringTag] === "Module" ? module.default : module;
          if (isWrapped(moduleExports.prototype.sendCommand)) {
            this._unwrap(moduleExports.prototype, "sendCommand");
          }
          this._wrap(moduleExports.prototype, "sendCommand", this._patchSendCommand(moduleVersion));
          if (isWrapped(moduleExports.prototype.connect)) {
            this._unwrap(moduleExports.prototype, "connect");
          }
          this._wrap(moduleExports.prototype, "connect", this._patchConnection());
          return module;
        },
        (module) => {
          if (module === void 0) return;
          const moduleExports = module[Symbol.toStringTag] === "Module" ? module.default : module;
          this._unwrap(moduleExports.prototype, "sendCommand");
          this._unwrap(moduleExports.prototype, "connect");
        }
      )
    ];
  }
  _patchSendCommand(moduleVersion) {
    return (original) => {
      return this._traceSendCommand(original, moduleVersion);
    };
  }
  _patchConnection() {
    return (original) => {
      return this._traceConnection(original);
    };
  }
  _traceSendCommand(original, moduleVersion) {
    const instrumentation = this;
    return function(cmd) {
      if (arguments.length < 1 || typeof cmd !== "object") {
        return original.apply(this, arguments);
      }
      const config = instrumentation.getConfig();
      const dbStatementSerializer = config.dbStatementSerializer || defaultDbStatementSerializer;
      const hasNoParentSpan = trace.getSpan(context.active()) === void 0;
      if (config.requireParentSpan === true && hasNoParentSpan) {
        return original.apply(this, arguments);
      }
      const attributes = {};
      const { host, port } = this.options;
      const dbQueryText = dbStatementSerializer(cmd.name, cmd.args);
      if (instrumentation._dbSemconvStability & SemconvStability.OLD) {
        attributes[ATTR_DB_SYSTEM] = DB_SYSTEM_VALUE_REDIS;
        attributes[ATTR_DB_STATEMENT] = dbQueryText;
        attributes[ATTR_DB_CONNECTION_STRING] = `redis://${host}:${port}`;
      }
      if (instrumentation._dbSemconvStability & SemconvStability.STABLE) {
        attributes[ATTR_DB_SYSTEM_NAME] = DB_SYSTEM_NAME_VALUE_REDIS;
        attributes[ATTR_DB_QUERY_TEXT] = dbQueryText;
      }
      if (instrumentation._netSemconvStability & SemconvStability.OLD) {
        attributes[ATTR_NET_PEER_NAME] = host;
        attributes[ATTR_NET_PEER_PORT] = port;
      }
      if (instrumentation._netSemconvStability & SemconvStability.STABLE) {
        attributes[ATTR_SERVER_ADDRESS] = host;
        attributes[ATTR_SERVER_PORT] = port;
      }
      attributes[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.db.otel.redis";
      const span = instrumentation.tracer.startSpan(cmd.name, {
        kind: SpanKind.CLIENT,
        attributes
      });
      const { requestHook } = config;
      if (requestHook) {
        safeExecuteInTheMiddle(
          () => requestHook(span, {
            moduleVersion,
            cmdName: cmd.name,
            cmdArgs: cmd.args
          }),
          (e) => {
            if (e) {
              diag.error("ioredis instrumentation: request hook failed", e);
            }
          },
          true
        );
      }
      try {
        const result = original.apply(this, arguments);
        const origResolve = cmd.resolve;
        cmd.resolve = function(result2) {
          safeExecuteInTheMiddle(
            () => config.responseHook?.(span, cmd.name, cmd.args, result2),
            (e) => {
              if (e) {
                diag.error("ioredis instrumentation: response hook failed", e);
              }
            },
            true
          );
          endSpan(span, null);
          origResolve(result2);
        };
        const origReject = cmd.reject;
        cmd.reject = function(err) {
          endSpan(span, err);
          origReject(err);
        };
        return result;
      } catch (error) {
        endSpan(span, error);
        throw error;
      }
    };
  }
  _traceConnection(original) {
    const instrumentation = this;
    return function() {
      const hasNoParentSpan = trace.getSpan(context.active()) === void 0;
      if (instrumentation.getConfig().requireParentSpan === true && hasNoParentSpan) {
        return original.apply(this, arguments);
      }
      const attributes = {};
      const { host, port } = this.options;
      if (instrumentation._dbSemconvStability & SemconvStability.OLD) {
        attributes[ATTR_DB_SYSTEM] = DB_SYSTEM_VALUE_REDIS;
        attributes[ATTR_DB_STATEMENT] = "connect";
        attributes[ATTR_DB_CONNECTION_STRING] = `redis://${host}:${port}`;
      }
      if (instrumentation._dbSemconvStability & SemconvStability.STABLE) {
        attributes[ATTR_DB_SYSTEM_NAME] = DB_SYSTEM_NAME_VALUE_REDIS;
        attributes[ATTR_DB_QUERY_TEXT] = "connect";
      }
      if (instrumentation._netSemconvStability & SemconvStability.OLD) {
        attributes[ATTR_NET_PEER_NAME] = host;
        attributes[ATTR_NET_PEER_PORT] = port;
      }
      if (instrumentation._netSemconvStability & SemconvStability.STABLE) {
        attributes[ATTR_SERVER_ADDRESS] = host;
        attributes[ATTR_SERVER_PORT] = port;
      }
      attributes[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.db.otel.redis";
      const span = instrumentation.tracer.startSpan("connect", {
        kind: SpanKind.CLIENT,
        attributes
      });
      try {
        const result = original.apply(this, arguments);
        if (typeof result?.then === "function") {
          return result.then(
            (value) => {
              endSpan(span, null);
              return value;
            },
            (error) => {
              endSpan(span, error);
              return Promise.reject(error);
            }
          );
        }
        endSpan(span, null);
        return result;
      } catch (error) {
        endSpan(span, error);
        throw error;
      }
    };
  }
}

export { IORedisInstrumentation };
//# sourceMappingURL=ioredis-instrumentation.js.map
