Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const api = require('@opentelemetry/api');
const core = require('@sentry/core');
const instrumentation = require('@opentelemetry/instrumentation');
const semanticConventions = require('@opentelemetry/semantic-conventions');
const redisCommon = require('./redis-common.js');
const semconv = require('./semconv.js');

const PACKAGE_NAME = "@opentelemetry/instrumentation-ioredis";
const PACKAGE_VERSION = "0.62.0";
function endSpan(span, err) {
  if (err) {
    span.recordException(err);
    span.setStatus({
      code: api.SpanStatusCode.ERROR,
      message: err.message
    });
  }
  span.end();
}
const DEFAULT_CONFIG = {
  requireParentSpan: true
};
class IORedisInstrumentation extends instrumentation.InstrumentationBase {
  constructor(config = {}) {
    super(PACKAGE_NAME, PACKAGE_VERSION, { ...DEFAULT_CONFIG, ...config });
    this._setSemconvStabilityFromEnv();
  }
  _setSemconvStabilityFromEnv() {
    this._netSemconvStability = instrumentation.semconvStabilityFromStr("http", process.env["OTEL_SEMCONV_STABILITY_OPT_IN"]);
    this._dbSemconvStability = instrumentation.semconvStabilityFromStr("database", process.env["OTEL_SEMCONV_STABILITY_OPT_IN"]);
  }
  setConfig(config = {}) {
    super.setConfig({ ...DEFAULT_CONFIG, ...config });
  }
  init() {
    return [
      new instrumentation.InstrumentationNodeModuleDefinition(
        "ioredis",
        [">=2.0.0 <6"],
        (module, moduleVersion) => {
          const moduleExports = module[Symbol.toStringTag] === "Module" ? module.default : module;
          if (instrumentation.isWrapped(moduleExports.prototype.sendCommand)) {
            this._unwrap(moduleExports.prototype, "sendCommand");
          }
          this._wrap(moduleExports.prototype, "sendCommand", this._patchSendCommand(moduleVersion));
          if (instrumentation.isWrapped(moduleExports.prototype.connect)) {
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
    const instrumentation$1 = this;
    return function(cmd) {
      if (arguments.length < 1 || typeof cmd !== "object") {
        return original.apply(this, arguments);
      }
      const config = instrumentation$1.getConfig();
      const dbStatementSerializer = config.dbStatementSerializer || redisCommon.defaultDbStatementSerializer;
      const hasNoParentSpan = api.trace.getSpan(api.context.active()) === void 0;
      if (config.requireParentSpan === true && hasNoParentSpan) {
        return original.apply(this, arguments);
      }
      const attributes = {};
      const { host, port } = this.options;
      const dbQueryText = dbStatementSerializer(cmd.name, cmd.args);
      if (instrumentation$1._dbSemconvStability & instrumentation.SemconvStability.OLD) {
        attributes[semconv.ATTR_DB_SYSTEM] = semconv.DB_SYSTEM_VALUE_REDIS;
        attributes[semconv.ATTR_DB_STATEMENT] = dbQueryText;
        attributes[semconv.ATTR_DB_CONNECTION_STRING] = `redis://${host}:${port}`;
      }
      if (instrumentation$1._dbSemconvStability & instrumentation.SemconvStability.STABLE) {
        attributes[semanticConventions.ATTR_DB_SYSTEM_NAME] = semconv.DB_SYSTEM_NAME_VALUE_REDIS;
        attributes[semanticConventions.ATTR_DB_QUERY_TEXT] = dbQueryText;
      }
      if (instrumentation$1._netSemconvStability & instrumentation.SemconvStability.OLD) {
        attributes[semconv.ATTR_NET_PEER_NAME] = host;
        attributes[semconv.ATTR_NET_PEER_PORT] = port;
      }
      if (instrumentation$1._netSemconvStability & instrumentation.SemconvStability.STABLE) {
        attributes[semanticConventions.ATTR_SERVER_ADDRESS] = host;
        attributes[semanticConventions.ATTR_SERVER_PORT] = port;
      }
      attributes[core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.db.otel.redis";
      const span = instrumentation$1.tracer.startSpan(cmd.name, {
        kind: api.SpanKind.CLIENT,
        attributes
      });
      const { requestHook } = config;
      if (requestHook) {
        instrumentation.safeExecuteInTheMiddle(
          () => requestHook(span, {
            moduleVersion,
            cmdName: cmd.name,
            cmdArgs: cmd.args
          }),
          (e) => {
            if (e) {
              api.diag.error("ioredis instrumentation: request hook failed", e);
            }
          },
          true
        );
      }
      try {
        const result = original.apply(this, arguments);
        const origResolve = cmd.resolve;
        cmd.resolve = function(result2) {
          instrumentation.safeExecuteInTheMiddle(
            () => config.responseHook?.(span, cmd.name, cmd.args, result2),
            (e) => {
              if (e) {
                api.diag.error("ioredis instrumentation: response hook failed", e);
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
    const instrumentation$1 = this;
    return function() {
      const hasNoParentSpan = api.trace.getSpan(api.context.active()) === void 0;
      if (instrumentation$1.getConfig().requireParentSpan === true && hasNoParentSpan) {
        return original.apply(this, arguments);
      }
      const attributes = {};
      const { host, port } = this.options;
      if (instrumentation$1._dbSemconvStability & instrumentation.SemconvStability.OLD) {
        attributes[semconv.ATTR_DB_SYSTEM] = semconv.DB_SYSTEM_VALUE_REDIS;
        attributes[semconv.ATTR_DB_STATEMENT] = "connect";
        attributes[semconv.ATTR_DB_CONNECTION_STRING] = `redis://${host}:${port}`;
      }
      if (instrumentation$1._dbSemconvStability & instrumentation.SemconvStability.STABLE) {
        attributes[semanticConventions.ATTR_DB_SYSTEM_NAME] = semconv.DB_SYSTEM_NAME_VALUE_REDIS;
        attributes[semanticConventions.ATTR_DB_QUERY_TEXT] = "connect";
      }
      if (instrumentation$1._netSemconvStability & instrumentation.SemconvStability.OLD) {
        attributes[semconv.ATTR_NET_PEER_NAME] = host;
        attributes[semconv.ATTR_NET_PEER_PORT] = port;
      }
      if (instrumentation$1._netSemconvStability & instrumentation.SemconvStability.STABLE) {
        attributes[semanticConventions.ATTR_SERVER_ADDRESS] = host;
        attributes[semanticConventions.ATTR_SERVER_PORT] = port;
      }
      attributes[core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.db.otel.redis";
      const span = instrumentation$1.tracer.startSpan("connect", {
        kind: api.SpanKind.CLIENT,
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

exports.IORedisInstrumentation = IORedisInstrumentation;
//# sourceMappingURL=ioredis-instrumentation.js.map
