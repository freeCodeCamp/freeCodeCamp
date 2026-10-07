import { trace, context, SpanStatusCode, SpanKind, diag } from '@opentelemetry/api';
import { AttributeNames } from './enums/AttributeNames.js';
import { DB_SYSTEM_NAME_VALUE_POSTGRESQL, ATTR_SERVER_PORT, ATTR_SERVER_ADDRESS, ATTR_DB_NAMESPACE, ATTR_DB_SYSTEM_NAME, ATTR_DB_QUERY_TEXT, ATTR_ERROR_TYPE } from '@opentelemetry/semantic-conventions';
import { DB_SYSTEM_VALUE_POSTGRESQL, ATTR_NET_PEER_PORT, ATTR_NET_PEER_NAME, ATTR_DB_USER, ATTR_DB_CONNECTION_STRING, ATTR_DB_NAME, ATTR_DB_SYSTEM, ATTR_DB_STATEMENT, DB_CLIENT_CONNECTION_STATE_VALUE_USED, ATTR_DB_CLIENT_CONNECTION_POOL_NAME, ATTR_DB_CLIENT_CONNECTION_STATE, DB_CLIENT_CONNECTION_STATE_VALUE_IDLE } from './semconv.js';
import { SemconvStability, safeExecuteInTheMiddle } from '@opentelemetry/instrumentation';
import { SpanNames } from './enums/SpanNames.js';

function getQuerySpanName(dbName, queryConfig) {
  if (!queryConfig) return SpanNames.QUERY_PREFIX;
  const command = typeof queryConfig.name === "string" && queryConfig.name ? queryConfig.name : parseNormalizedOperationName(queryConfig.text);
  return `${SpanNames.QUERY_PREFIX}:${command}${dbName ? ` ${dbName}` : ""}`;
}
function parseNormalizedOperationName(queryText) {
  const trimmedQuery = queryText.trim();
  const indexOfFirstSpace = trimmedQuery.indexOf(" ");
  let sqlCommand = indexOfFirstSpace === -1 ? trimmedQuery : trimmedQuery.slice(0, indexOfFirstSpace);
  sqlCommand = sqlCommand.toUpperCase();
  return sqlCommand.endsWith(";") ? sqlCommand.slice(0, -1) : sqlCommand;
}
function parseAndMaskConnectionString(connectionString) {
  try {
    const url = new URL(connectionString);
    url.username = "";
    url.password = "";
    return url.toString();
  } catch (e) {
    return "postgresql://localhost:5432/";
  }
}
function getConnectionString(params) {
  if ("connectionString" in params && params.connectionString) {
    return parseAndMaskConnectionString(params.connectionString);
  }
  const host = params.host || "localhost";
  const port = params.port || 5432;
  const database = params.database || "";
  return `postgresql://${host}:${port}/${database}`;
}
function getPort(port) {
  if (Number.isInteger(port)) {
    return port;
  }
  return void 0;
}
function getSemanticAttributesFromConnection(params, semconvStability) {
  let attributes = {};
  if (semconvStability & SemconvStability.OLD) {
    attributes = {
      ...attributes,
      [ATTR_DB_SYSTEM]: DB_SYSTEM_VALUE_POSTGRESQL,
      [ATTR_DB_NAME]: params.database,
      [ATTR_DB_CONNECTION_STRING]: getConnectionString(params),
      [ATTR_DB_USER]: params.user,
      [ATTR_NET_PEER_NAME]: params.host,
      // required
      [ATTR_NET_PEER_PORT]: getPort(params.port)
    };
  }
  if (semconvStability & SemconvStability.STABLE) {
    attributes = {
      ...attributes,
      [ATTR_DB_SYSTEM_NAME]: DB_SYSTEM_NAME_VALUE_POSTGRESQL,
      [ATTR_DB_NAMESPACE]: params.namespace,
      [ATTR_SERVER_ADDRESS]: params.host,
      [ATTR_SERVER_PORT]: getPort(params.port)
    };
  }
  return attributes;
}
function getSemanticAttributesFromPoolConnection(params, semconvStability) {
  let url;
  try {
    url = params.connectionString ? new URL(params.connectionString) : void 0;
  } catch (e) {
    url = void 0;
  }
  let attributes = {
    [AttributeNames.IDLE_TIMEOUT_MILLIS]: params.idleTimeoutMillis,
    [AttributeNames.MAX_CLIENT]: params.maxClient
  };
  if (semconvStability & SemconvStability.OLD) {
    attributes = {
      ...attributes,
      [ATTR_DB_SYSTEM]: DB_SYSTEM_VALUE_POSTGRESQL,
      [ATTR_DB_NAME]: url?.pathname.slice(1) ?? params.database,
      [ATTR_DB_CONNECTION_STRING]: getConnectionString(params),
      [ATTR_NET_PEER_NAME]: url?.hostname ?? params.host,
      [ATTR_NET_PEER_PORT]: Number(url?.port) || getPort(params.port),
      [ATTR_DB_USER]: url?.username ?? params.user
    };
  }
  if (semconvStability & SemconvStability.STABLE) {
    attributes = {
      ...attributes,
      [ATTR_DB_SYSTEM_NAME]: DB_SYSTEM_NAME_VALUE_POSTGRESQL,
      [ATTR_DB_NAMESPACE]: params.namespace,
      [ATTR_SERVER_ADDRESS]: url?.hostname ?? params.host,
      [ATTR_SERVER_PORT]: Number(url?.port) || getPort(params.port)
    };
  }
  return attributes;
}
function shouldSkipInstrumentation(instrumentationConfig) {
  return instrumentationConfig.requireParentSpan === true && trace.getSpan(context.active()) === void 0;
}
function handleConfigQuery(tracer, instrumentationConfig, semconvStability, queryConfig) {
  const { connectionParameters } = this;
  const dbName = connectionParameters.database;
  const spanName = getQuerySpanName(dbName, queryConfig);
  const span = tracer.startSpan(spanName, {
    kind: SpanKind.CLIENT,
    attributes: getSemanticAttributesFromConnection(connectionParameters, semconvStability)
  });
  if (!queryConfig) {
    return span;
  }
  if (queryConfig.text) {
    if (semconvStability & SemconvStability.OLD) {
      span.setAttribute(ATTR_DB_STATEMENT, queryConfig.text);
    }
    if (semconvStability & SemconvStability.STABLE) {
      span.setAttribute(ATTR_DB_QUERY_TEXT, queryConfig.text);
    }
  }
  if (instrumentationConfig.enhancedDatabaseReporting && Array.isArray(queryConfig.values)) {
    try {
      const convertedValues = queryConfig.values.map((value) => {
        if (value == null) {
          return "null";
        } else if (value instanceof Buffer) {
          return value.toString();
        } else if (typeof value === "object") {
          if (typeof value.toPostgres === "function") {
            return value.toPostgres();
          }
          return JSON.stringify(value);
        } else {
          return value.toString();
        }
      });
      span.setAttribute(AttributeNames.PG_VALUES, convertedValues);
    } catch (e) {
      diag.error("failed to stringify ", queryConfig.values, e);
    }
  }
  if (typeof queryConfig.name === "string") {
    span.setAttribute(AttributeNames.PG_PLAN, queryConfig.name);
  }
  return span;
}
function handleExecutionResult(config, span, pgResult) {
  if (typeof config.responseHook === "function") {
    safeExecuteInTheMiddle(
      () => {
        config.responseHook(span, {
          data: pgResult
        });
      },
      (err) => {
        if (err) {
          diag.error("Error running response hook", err);
        }
      },
      true
    );
  }
}
function patchCallback(instrumentationConfig, span, cb, attributes, recordDuration) {
  return function patchedCallback(err, res) {
    if (err) {
      if (Object.prototype.hasOwnProperty.call(err, "code")) {
        attributes[ATTR_ERROR_TYPE] = err["code"];
      }
      if (err instanceof Error) {
        span.recordException(sanitizedErrorMessage(err));
      }
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: err.message
      });
    } else {
      handleExecutionResult(instrumentationConfig, span, res);
    }
    recordDuration();
    span.end();
    cb.call(this, err, res);
  };
}
function getPoolName(pool) {
  let poolName = "";
  poolName += (pool?.host ? `${pool.host}` : "unknown_host") + ":";
  poolName += (pool?.port ? `${pool.port}` : "unknown_port") + "/";
  poolName += pool?.database ? `${pool.database}` : "unknown_database";
  return poolName.trim();
}
function updateCounter(poolName, pool, connectionCount, connectionPendingRequests, latestCounter) {
  const all = pool.totalCount;
  const pending = pool.waitingCount;
  const idle = pool.idleCount;
  const used = all - idle;
  connectionCount.add(used - latestCounter.used, {
    [ATTR_DB_CLIENT_CONNECTION_STATE]: DB_CLIENT_CONNECTION_STATE_VALUE_USED,
    [ATTR_DB_CLIENT_CONNECTION_POOL_NAME]: poolName
  });
  connectionCount.add(idle - latestCounter.idle, {
    [ATTR_DB_CLIENT_CONNECTION_STATE]: DB_CLIENT_CONNECTION_STATE_VALUE_IDLE,
    [ATTR_DB_CLIENT_CONNECTION_POOL_NAME]: poolName
  });
  connectionPendingRequests.add(pending - latestCounter.pending, {
    [ATTR_DB_CLIENT_CONNECTION_POOL_NAME]: poolName
  });
  return { used, idle, pending };
}
function patchCallbackPGPool(span, cb) {
  return function patchedCallback(err, res, done) {
    if (err) {
      if (err instanceof Error) {
        span.recordException(sanitizedErrorMessage(err));
      }
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: err.message
      });
    }
    span.end();
    cb.call(this, err, res, done);
  };
}
function patchClientConnectCallback(span, cb) {
  return function patchedClientConnectCallback(err) {
    if (err) {
      if (err instanceof Error) {
        span.recordException(sanitizedErrorMessage(err));
      }
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: err.message
      });
    }
    span.end();
    cb.apply(this, arguments);
  };
}
function getErrorMessage(e) {
  return typeof e === "object" && e !== null && "message" in e ? String(e.message) : void 0;
}
function isObjectWithTextString(it) {
  return typeof it === "object" && typeof it?.text === "string";
}
function sanitizedErrorMessage(error) {
  const name = error?.name ?? "PostgreSQLError";
  const code = error?.code ?? "UNKNOWN";
  return `PostgreSQL error of type '${name}' occurred (code: ${code})`;
}

export { getConnectionString, getErrorMessage, getPoolName, getQuerySpanName, getSemanticAttributesFromConnection, getSemanticAttributesFromPoolConnection, handleConfigQuery, handleExecutionResult, isObjectWithTextString, parseAndMaskConnectionString, parseNormalizedOperationName, patchCallback, patchCallbackPGPool, patchClientConnectCallback, sanitizedErrorMessage, shouldSkipInstrumentation, updateCounter };
//# sourceMappingURL=utils.js.map
