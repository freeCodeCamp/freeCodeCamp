import { InstrumentationBase, semconvStabilityFromStr, InstrumentationNodeModuleFile, InstrumentationNodeModuleDefinition, isWrapped, SemconvStability, safeExecuteInTheMiddle } from '@opentelemetry/instrumentation';
import { ValueType, SpanKind, trace, context, SpanStatusCode } from '@opentelemetry/api';
import { EVENT_LISTENERS_SET } from './internal-types.js';
import { shouldSkipInstrumentation, getSemanticAttributesFromConnection, patchClientConnectCallback, isObjectWithTextString, parseNormalizedOperationName, handleConfigQuery, patchCallback, sanitizedErrorMessage, getErrorMessage, handleExecutionResult, getPoolName, updateCounter, getSemanticAttributesFromPoolConnection, patchCallbackPGPool } from './utils.js';
import { addSqlCommenterComment } from '../../utils/sql-common.js';
import { SDK_VERSION } from '@sentry/core';
import { SpanNames } from './enums/SpanNames.js';
import { hrTimeToMilliseconds, hrTimeDuration, hrTime } from '@opentelemetry/core';
import { METRIC_DB_CLIENT_OPERATION_DURATION, ATTR_DB_NAMESPACE, ATTR_ERROR_TYPE, ATTR_SERVER_PORT, ATTR_SERVER_ADDRESS, ATTR_DB_OPERATION_NAME, ATTR_DB_SYSTEM_NAME } from '@opentelemetry/semantic-conventions';
import { METRIC_DB_CLIENT_CONNECTION_COUNT, METRIC_DB_CLIENT_CONNECTION_PENDING_REQUESTS, ATTR_DB_SYSTEM, DB_SYSTEM_VALUE_POSTGRESQL } from './semconv.js';

const PACKAGE_NAME = "@sentry/instrumentation-pg";
function extractModuleExports(module) {
  return module[Symbol.toStringTag] === "Module" ? module.default : module;
}
class PgInstrumentation extends InstrumentationBase {
  constructor(config = {}) {
    super(PACKAGE_NAME, SDK_VERSION, config);
    // Pool events connect, acquire, release and remove can be called
    // multiple times without changing the values of total, idle and waiting
    // connections. The _connectionsCounter is used to keep track of latest
    // values and only update the metrics _connectionsCount and _connectionPendingRequests
    // when the value change.
    this._connectionsCounter = {
      used: 0,
      idle: 0,
      pending: 0
    };
    this._semconvStability = semconvStabilityFromStr("database", process.env.OTEL_SEMCONV_STABILITY_OPT_IN);
  }
  _updateMetricInstruments() {
    this._operationDuration = this.meter.createHistogram(METRIC_DB_CLIENT_OPERATION_DURATION, {
      description: "Duration of database client operations.",
      unit: "s",
      valueType: ValueType.DOUBLE,
      advice: {
        explicitBucketBoundaries: [1e-3, 5e-3, 0.01, 0.05, 0.1, 0.5, 1, 5, 10]
      }
    });
    this._connectionsCounter = {
      idle: 0,
      pending: 0,
      used: 0
    };
    this._connectionsCount = this.meter.createUpDownCounter(METRIC_DB_CLIENT_CONNECTION_COUNT, {
      description: "The number of connections that are currently in state described by the state attribute.",
      unit: "{connection}"
    });
    this._connectionPendingRequests = this.meter.createUpDownCounter(METRIC_DB_CLIENT_CONNECTION_PENDING_REQUESTS, {
      description: "The number of current pending requests for an open connection.",
      unit: "{connection}"
    });
  }
  init() {
    const SUPPORTED_PG_VERSIONS = [">=8.0.3 <9"];
    const SUPPORTED_PG_POOL_VERSIONS = [">=2.0.0 <4"];
    const modulePgNativeClient = new InstrumentationNodeModuleFile(
      "pg/lib/native/client.js",
      SUPPORTED_PG_VERSIONS,
      this._patchPgClient.bind(this),
      this._unpatchPgClient.bind(this)
    );
    const modulePgClient = new InstrumentationNodeModuleFile(
      "pg/lib/client.js",
      SUPPORTED_PG_VERSIONS,
      this._patchPgClient.bind(this),
      this._unpatchPgClient.bind(this)
    );
    const modulePG = new InstrumentationNodeModuleDefinition(
      "pg",
      SUPPORTED_PG_VERSIONS,
      (module) => {
        const moduleExports = extractModuleExports(module);
        this._patchPgClient(moduleExports.Client);
        return module;
      },
      (module) => {
        const moduleExports = extractModuleExports(module);
        this._unpatchPgClient(moduleExports.Client);
        return module;
      },
      [modulePgClient, modulePgNativeClient]
    );
    const modulePGPool = new InstrumentationNodeModuleDefinition(
      "pg-pool",
      SUPPORTED_PG_POOL_VERSIONS,
      (module) => {
        const moduleExports = extractModuleExports(module);
        if (isWrapped(moduleExports.prototype.connect)) {
          this._unwrap(moduleExports.prototype, "connect");
        }
        this._wrap(moduleExports.prototype, "connect", this._getPoolConnectPatch());
        return moduleExports;
      },
      (module) => {
        const moduleExports = extractModuleExports(module);
        if (isWrapped(moduleExports.prototype.connect)) {
          this._unwrap(moduleExports.prototype, "connect");
        }
      }
    );
    return [modulePG, modulePGPool];
  }
  _patchPgClient(module) {
    if (!module) {
      return;
    }
    const moduleExports = extractModuleExports(module);
    if (isWrapped(moduleExports.prototype.query)) {
      this._unwrap(moduleExports.prototype, "query");
    }
    if (isWrapped(moduleExports.prototype.connect)) {
      this._unwrap(moduleExports.prototype, "connect");
    }
    this._wrap(moduleExports.prototype, "query", this._getClientQueryPatch());
    this._wrap(moduleExports.prototype, "connect", this._getClientConnectPatch());
    return module;
  }
  _unpatchPgClient(module) {
    const moduleExports = extractModuleExports(module);
    if (isWrapped(moduleExports.prototype.query)) {
      this._unwrap(moduleExports.prototype, "query");
    }
    if (isWrapped(moduleExports.prototype.connect)) {
      this._unwrap(moduleExports.prototype, "connect");
    }
    return module;
  }
  _getClientConnectPatch() {
    const plugin = this;
    return (original) => {
      return function connect(callback) {
        const config = plugin.getConfig();
        if (shouldSkipInstrumentation(config) || config.ignoreConnectSpans) {
          return original.call(this, callback);
        }
        const span = plugin.tracer.startSpan(SpanNames.CONNECT, {
          kind: SpanKind.CLIENT,
          attributes: getSemanticAttributesFromConnection(this, plugin._semconvStability)
        });
        if (callback) {
          const parentSpan = trace.getSpan(context.active());
          callback = patchClientConnectCallback(span, callback);
          if (parentSpan) {
            callback = context.bind(context.active(), callback);
          }
        }
        const connectResult = context.with(trace.setSpan(context.active(), span), () => {
          return original.call(this, callback);
        });
        return handleConnectResult(span, connectResult);
      };
    };
  }
  recordOperationDuration(attributes, startTime) {
    const metricsAttributes = {};
    const keysToCopy = [
      ATTR_DB_NAMESPACE,
      ATTR_ERROR_TYPE,
      ATTR_SERVER_PORT,
      ATTR_SERVER_ADDRESS,
      ATTR_DB_OPERATION_NAME
    ];
    if (this._semconvStability & SemconvStability.OLD) {
      keysToCopy.push(ATTR_DB_SYSTEM);
    }
    if (this._semconvStability & SemconvStability.STABLE) {
      keysToCopy.push(ATTR_DB_SYSTEM_NAME);
    }
    keysToCopy.forEach((key) => {
      if (key in attributes) {
        metricsAttributes[key] = attributes[key];
      }
    });
    const durationSeconds = hrTimeToMilliseconds(hrTimeDuration(startTime, hrTime())) / 1e3;
    this._operationDuration.record(durationSeconds, metricsAttributes);
  }
  _getClientQueryPatch() {
    const plugin = this;
    return (original) => {
      this._diag.debug("Patching pg.Client.prototype.query");
      return function query(...args) {
        if (shouldSkipInstrumentation(plugin.getConfig())) {
          return original.apply(this, args);
        }
        const startTime = hrTime();
        const arg0 = args[0];
        const firstArgIsString = typeof arg0 === "string";
        const firstArgIsQueryObjectWithText = isObjectWithTextString(arg0);
        const queryConfig = firstArgIsString ? {
          text: arg0,
          values: Array.isArray(args[1]) ? args[1] : void 0
        } : firstArgIsQueryObjectWithText ? {
          ...arg0,
          name: arg0.name,
          text: arg0.text,
          values: arg0.values ?? (Array.isArray(args[1]) ? args[1] : void 0)
        } : void 0;
        const attributes = {
          [ATTR_DB_SYSTEM]: DB_SYSTEM_VALUE_POSTGRESQL,
          [ATTR_DB_NAMESPACE]: this.database,
          [ATTR_SERVER_PORT]: this.connectionParameters.port,
          [ATTR_SERVER_ADDRESS]: this.connectionParameters.host
        };
        if (queryConfig?.text) {
          attributes[ATTR_DB_OPERATION_NAME] = parseNormalizedOperationName(queryConfig?.text);
        }
        const recordDuration = () => {
          plugin.recordOperationDuration(attributes, startTime);
        };
        const instrumentationConfig = plugin.getConfig();
        const span = handleConfigQuery.call(
          this,
          plugin.tracer,
          instrumentationConfig,
          plugin._semconvStability,
          queryConfig
        );
        if (instrumentationConfig.addSqlCommenterCommentToQueries) {
          if (firstArgIsString) {
            args[0] = addSqlCommenterComment(span, arg0);
          } else if (firstArgIsQueryObjectWithText && !("name" in arg0)) {
            args[0] = {
              ...arg0,
              text: addSqlCommenterComment(span, arg0.text)
            };
          }
        }
        if (args.length > 0) {
          const parentSpan = trace.getSpan(context.active());
          if (typeof args[args.length - 1] === "function") {
            args[args.length - 1] = patchCallback(
              instrumentationConfig,
              span,
              args[args.length - 1],
              // nb: not type safe.
              attributes,
              recordDuration
            );
            if (parentSpan) {
              args[args.length - 1] = context.bind(context.active(), args[args.length - 1]);
            }
          } else if (typeof queryConfig?.callback === "function") {
            let callback = patchCallback(
              plugin.getConfig(),
              span,
              queryConfig.callback,
              // nb: not type safe.
              attributes,
              recordDuration
            );
            if (parentSpan) {
              callback = context.bind(context.active(), callback);
            }
            args[0].callback = callback;
          }
        }
        const { requestHook } = instrumentationConfig;
        if (typeof requestHook === "function" && queryConfig) {
          safeExecuteInTheMiddle(
            () => {
              const { database, host, port, user } = this.connectionParameters;
              const connection = { database, host, port, user };
              requestHook(span, {
                connection,
                query: {
                  text: queryConfig.text,
                  // nb: if `client.query` is called with illegal arguments
                  // (e.g., if `queryConfig.values` is passed explicitly, but a
                  // non-array is given), then the type casts will be wrong. But
                  // we leave it up to the queryHook to handle that, and we
                  // catch and swallow any errors it throws. The other options
                  // are all worse. E.g., we could leave `queryConfig.values`
                  // and `queryConfig.name` as `unknown`, but then the hook body
                  // would be forced to validate (or cast) them before using
                  // them, which seems incredibly cumbersome given that these
                  // casts will be correct 99.9% of the time -- and pg.query
                  // will immediately throw during development in the other .1%
                  // of cases. Alternatively, we could simply skip calling the
                  // hook when `values` or `name` don't have the expected type,
                  // but that would add unnecessary validation overhead to every
                  // hook invocation and possibly be even more confusing/unexpected.
                  values: queryConfig.values,
                  name: queryConfig.name
                }
              });
            },
            (err) => {
              if (err) {
                plugin._diag.error("Error running query hook", err);
              }
            },
            true
          );
        }
        let result;
        try {
          result = original.apply(this, args);
        } catch (e) {
          if (e instanceof Error) {
            span.recordException(sanitizedErrorMessage(e));
          }
          span.setStatus({
            code: SpanStatusCode.ERROR,
            message: getErrorMessage(e)
          });
          span.end();
          throw e;
        }
        if (result instanceof Promise) {
          return result.then((result2) => {
            return new Promise((resolve) => {
              handleExecutionResult(plugin.getConfig(), span, result2);
              recordDuration();
              span.end();
              resolve(result2);
            });
          }).catch((error) => {
            return new Promise((_, reject) => {
              if (error instanceof Error) {
                span.recordException(sanitizedErrorMessage(error));
              }
              span.setStatus({
                code: SpanStatusCode.ERROR,
                message: error.message
              });
              recordDuration();
              span.end();
              reject(error);
            });
          });
        }
        return result;
      };
    };
  }
  _setPoolConnectEventListeners(pgPool) {
    if (pgPool[EVENT_LISTENERS_SET]) return;
    const poolName = getPoolName(pgPool.options);
    pgPool.on("connect", () => {
      this._connectionsCounter = updateCounter(
        poolName,
        pgPool,
        this._connectionsCount,
        this._connectionPendingRequests,
        this._connectionsCounter
      );
    });
    pgPool.on("acquire", () => {
      this._connectionsCounter = updateCounter(
        poolName,
        pgPool,
        this._connectionsCount,
        this._connectionPendingRequests,
        this._connectionsCounter
      );
    });
    pgPool.on("remove", () => {
      this._connectionsCounter = updateCounter(
        poolName,
        pgPool,
        this._connectionsCount,
        this._connectionPendingRequests,
        this._connectionsCounter
      );
    });
    pgPool.on("release", () => {
      this._connectionsCounter = updateCounter(
        poolName,
        pgPool,
        this._connectionsCount,
        this._connectionPendingRequests,
        this._connectionsCounter
      );
    });
    pgPool[EVENT_LISTENERS_SET] = true;
  }
  _getPoolConnectPatch() {
    const plugin = this;
    return (originalConnect) => {
      return function connect(callback) {
        const config = plugin.getConfig();
        if (shouldSkipInstrumentation(config)) {
          return originalConnect.call(this, callback);
        }
        plugin._setPoolConnectEventListeners(this);
        if (config.ignoreConnectSpans) {
          return originalConnect.call(this, callback);
        }
        const span = plugin.tracer.startSpan(SpanNames.POOL_CONNECT, {
          kind: SpanKind.CLIENT,
          attributes: getSemanticAttributesFromPoolConnection(this.options, plugin._semconvStability)
        });
        if (callback) {
          const parentSpan = trace.getSpan(context.active());
          callback = patchCallbackPGPool(span, callback);
          if (parentSpan) {
            callback = context.bind(context.active(), callback);
          }
        }
        const connectResult = context.with(trace.setSpan(context.active(), span), () => {
          return originalConnect.call(this, callback);
        });
        return handleConnectResult(span, connectResult);
      };
    };
  }
}
function handleConnectResult(span, connectResult) {
  if (!(connectResult instanceof Promise)) {
    return connectResult;
  }
  const connectResultPromise = connectResult;
  return context.bind(
    context.active(),
    connectResultPromise.then((result) => {
      span.end();
      return result;
    }).catch((error) => {
      if (error instanceof Error) {
        span.recordException(sanitizedErrorMessage(error));
      }
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: getErrorMessage(error)
      });
      span.end();
      return Promise.reject(error);
    })
  );
}

export { PgInstrumentation };
//# sourceMappingURL=instrumentation.js.map
