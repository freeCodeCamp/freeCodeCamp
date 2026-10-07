import { DEBUG_BUILD } from '../debug-build.js';
import { SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN } from '../semanticAttributes.js';
import { debug } from '../utils/debug-logger.js';
import { getActiveSpan } from '../utils/spanUtils.js';
import { SPAN_STATUS_ERROR } from '../tracing/spanstatus.js';
import { startSpanManual } from '../tracing/trace.js';

const SQL_OPERATION_REGEX = /^(SELECT|INSERT|UPDATE|DELETE|CREATE|DROP|ALTER)/i;
const CONNECTION_CONTEXT_SYMBOL = /* @__PURE__ */ Symbol("sentryPostgresConnectionContext");
const INSTRUMENTED_MARKER = /* @__PURE__ */ Symbol.for("sentry.instrumented.postgresjs");
const QUERY_FROM_INSTRUMENTED_SQL = /* @__PURE__ */ Symbol.for("sentry.query.from.instrumented.sql");
function instrumentPostgresJsSql(sql, options) {
  if (!sql || typeof sql !== "function") {
    DEBUG_BUILD && debug.warn("instrumentPostgresJsSql: provided value is not a valid postgres.js sql instance");
    return sql;
  }
  return _instrumentSqlInstance(sql, { requireParentSpan: true, ...options });
}
function _instrumentSqlInstance(sql, options, parentConnectionContext) {
  if (sql[INSTRUMENTED_MARKER]) {
    return sql;
  }
  const proxiedSql = new Proxy(sql, {
    apply(target, thisArg, argumentsList) {
      const query = Reflect.apply(target, thisArg, argumentsList);
      if (query && typeof query === "object" && "handle" in query) {
        _wrapSingleQueryHandle(query, proxiedSql, options);
      }
      return query;
    },
    get(target, prop) {
      const original = target[prop];
      if (typeof prop !== "string" || typeof original !== "function") {
        return original;
      }
      if (prop === "unsafe" || prop === "file") {
        return _wrapQueryMethod(original, target, proxiedSql, options);
      }
      if (prop === "begin" || prop === "reserve") {
        return _wrapCallbackMethod(original, target, proxiedSql, options);
      }
      return original;
    }
  });
  if (parentConnectionContext) {
    proxiedSql[CONNECTION_CONTEXT_SYMBOL] = parentConnectionContext;
  } else {
    _attachConnectionContext(sql, proxiedSql);
  }
  sql[INSTRUMENTED_MARKER] = true;
  proxiedSql[INSTRUMENTED_MARKER] = true;
  return proxiedSql;
}
function _wrapQueryMethod(original, target, proxiedSql, options) {
  return function(...args) {
    const query = Reflect.apply(original, target, args);
    if (query && typeof query === "object" && "handle" in query) {
      _wrapSingleQueryHandle(query, proxiedSql, options);
    }
    return query;
  };
}
function _wrapCallbackMethod(original, target, parentSqlInstance, options) {
  return function(...args) {
    const parentContext = parentSqlInstance[CONNECTION_CONTEXT_SYMBOL];
    const isCallbackBased = typeof args[args.length - 1] === "function";
    if (!isCallbackBased) {
      const result = Reflect.apply(original, target, args);
      if (result && typeof result.then === "function") {
        return result.then((sqlInstance) => {
          return _instrumentSqlInstance(sqlInstance, options, parentContext);
        });
      }
      return result;
    }
    const callback = args.length === 1 ? args[0] : args[1];
    const wrappedCallback = function(sqlInstance) {
      const instrumentedSql = _instrumentSqlInstance(sqlInstance, options, parentContext);
      return callback(instrumentedSql);
    };
    const newArgs = args.length === 1 ? [wrappedCallback] : [args[0], wrappedCallback];
    return Reflect.apply(original, target, newArgs);
  };
}
function _wrapSingleQueryHandle(query, sqlInstance, options) {
  if (query.handle?.__sentryWrapped) {
    return;
  }
  query[QUERY_FROM_INSTRUMENTED_SQL] = true;
  const originalHandle = query.handle;
  const wrappedHandle = async function(...args) {
    if (!_shouldCreateSpans(options)) {
      return originalHandle.apply(this, args);
    }
    const fullQuery = _reconstructQuery(query.strings);
    const sanitizedSqlQuery = _sanitizeSqlQuery(fullQuery);
    return startSpanManual(
      {
        name: sanitizedSqlQuery || "postgresjs.query",
        op: "db"
      },
      (span) => {
        span.setAttribute(SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.db.postgresjs");
        span.setAttributes({
          "db.system.name": "postgres",
          "db.query.text": sanitizedSqlQuery
        });
        const connectionContext = sqlInstance ? sqlInstance[CONNECTION_CONTEXT_SYMBOL] : void 0;
        _setConnectionAttributes(span, connectionContext);
        if (options.requestHook) {
          try {
            options.requestHook(span, sanitizedSqlQuery, connectionContext);
          } catch (e) {
            span.setAttribute("sentry.hook.error", "requestHook failed");
            DEBUG_BUILD && debug.error("Error in requestHook for PostgresJs instrumentation:", e);
          }
        }
        const queryWithCallbacks = this;
        queryWithCallbacks.resolve = new Proxy(queryWithCallbacks.resolve, {
          apply: (resolveTarget, resolveThisArg, resolveArgs) => {
            try {
              _setOperationName(span, sanitizedSqlQuery, resolveArgs?.[0]?.command);
              span.end();
            } catch (e) {
              DEBUG_BUILD && debug.error("Error ending span in resolve callback:", e);
            }
            return Reflect.apply(resolveTarget, resolveThisArg, resolveArgs);
          }
        });
        queryWithCallbacks.reject = new Proxy(queryWithCallbacks.reject, {
          apply: (rejectTarget, rejectThisArg, rejectArgs) => {
            try {
              span.setStatus({
                code: SPAN_STATUS_ERROR,
                message: rejectArgs?.[0]?.message || "unknown_error"
              });
              span.setAttribute("db.response.status_code", rejectArgs?.[0]?.code || "unknown");
              span.setAttribute("error.type", rejectArgs?.[0]?.name || "unknown");
              _setOperationName(span, sanitizedSqlQuery);
              span.end();
            } catch (e) {
              DEBUG_BUILD && debug.error("Error ending span in reject callback:", e);
            }
            return Reflect.apply(rejectTarget, rejectThisArg, rejectArgs);
          }
        });
        try {
          return originalHandle.apply(this, args);
        } catch (e) {
          span.setStatus({
            code: SPAN_STATUS_ERROR,
            message: e instanceof Error ? e.message : "unknown_error"
          });
          span.end();
          throw e;
        }
      }
    );
  };
  wrappedHandle.__sentryWrapped = true;
  query.handle = wrappedHandle;
}
function _shouldCreateSpans(options) {
  const hasParentSpan = getActiveSpan() !== void 0;
  return hasParentSpan || !options.requireParentSpan;
}
function _reconstructQuery(strings) {
  if (!strings?.length) {
    return void 0;
  }
  if (strings.length === 1) {
    return strings[0] || void 0;
  }
  return strings.reduce((acc, str, i) => i === 0 ? str : `${acc}$${i}${str}`, "");
}
let integerLiteralRE;
function _sanitizeSqlQuery(sqlQuery) {
  if (!sqlQuery) {
    return "Unknown SQL Query";
  }
  if (!integerLiteralRE) {
    integerLiteralRE = new RegExp("(?<!\\$)-?\\b\\d+\\b", "g");
  }
  return sqlQuery.replace(/--.*$/gm, "").replace(/\/\*[\s\S]*?\*\//g, "").replace(/;\s*$/, "").replace(/\s+/g, " ").trim().replace(/\bX'[0-9A-Fa-f]*'/gi, "?").replace(/\bB'[01]*'/gi, "?").replace(/'(?:[^']|'')*'/g, "?").replace(/\b0x[0-9A-Fa-f]+/gi, "?").replace(/\b(?:TRUE|FALSE)\b/gi, "?").replace(/-?\b\d+\.?\d*[eE][+-]?\d+\b/g, "?").replace(/-?\b\d+\.\d+\b/g, "?").replace(/-?\.\d+\b/g, "?").replace(integerLiteralRE, "?").replace(/\bIN\b\s*\(\s*\?(?:\s*,\s*\?)*\s*\)/gi, "IN (?)").replace(/\bIN\b\s*\(\s*\$\d+(?:\s*,\s*\$\d+)*\s*\)/gi, "IN ($?)");
}
function _setConnectionAttributes(span, connectionContext) {
  if (!connectionContext) {
    return;
  }
  if (connectionContext.ATTR_DB_NAMESPACE) {
    span.setAttribute("db.namespace", connectionContext.ATTR_DB_NAMESPACE);
  }
  if (connectionContext.ATTR_SERVER_ADDRESS) {
    span.setAttribute("server.address", connectionContext.ATTR_SERVER_ADDRESS);
  }
  if (connectionContext.ATTR_SERVER_PORT !== void 0) {
    const portNumber = parseInt(connectionContext.ATTR_SERVER_PORT, 10);
    if (!isNaN(portNumber)) {
      span.setAttribute("server.port", portNumber);
    }
  }
}
function _setOperationName(span, sanitizedQuery, command) {
  if (command) {
    span.setAttribute("db.operation.name", command);
    return;
  }
  const operationMatch = sanitizedQuery?.match(SQL_OPERATION_REGEX);
  if (operationMatch?.[1]) {
    span.setAttribute("db.operation.name", operationMatch[1].toUpperCase());
  }
}
function _attachConnectionContext(sql, proxiedSql) {
  const sqlInstance = sql;
  if (!sqlInstance.options || typeof sqlInstance.options !== "object") {
    return;
  }
  const opts = sqlInstance.options;
  const host = opts.host?.[0] || "localhost";
  const port = opts.port?.[0] || 5432;
  const connectionContext = {
    ATTR_DB_NAMESPACE: typeof opts.database === "string" && opts.database !== "" ? opts.database : void 0,
    ATTR_SERVER_ADDRESS: host,
    ATTR_SERVER_PORT: String(port)
  };
  proxiedSql[CONNECTION_CONTEXT_SYMBOL] = connectionContext;
}

export { _reconstructQuery, _sanitizeSqlQuery, instrumentPostgresJsSql };
//# sourceMappingURL=postgresjs.js.map
