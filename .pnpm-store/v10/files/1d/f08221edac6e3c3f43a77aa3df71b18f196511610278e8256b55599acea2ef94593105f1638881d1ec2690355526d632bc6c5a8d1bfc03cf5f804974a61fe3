import * as api from '@opentelemetry/api';
import { EventEmitter } from 'events';
import { InstrumentationBase, semconvStabilityFromStr, InstrumentationNodeModuleDefinition, isWrapped, SemconvStability } from '@opentelemetry/instrumentation';
import { ATTR_DB_NAMESPACE, DB_SYSTEM_NAME_VALUE_MICROSOFT_SQL_SERVER, ATTR_DB_SYSTEM_NAME, ATTR_DB_QUERY_TEXT, ATTR_DB_COLLECTION_NAME, ATTR_SERVER_ADDRESS, ATTR_SERVER_PORT } from '@opentelemetry/semantic-conventions';
import { DB_SYSTEM_VALUE_MSSQL, ATTR_DB_SYSTEM, ATTR_DB_NAME, ATTR_DB_USER, ATTR_DB_STATEMENT, ATTR_DB_SQL_TABLE, ATTR_NET_PEER_NAME, ATTR_NET_PEER_PORT } from './semconv.js';
import { getSpanName, once } from './utils.js';
import { SDK_VERSION } from '@sentry/core';

const PACKAGE_NAME = "@sentry/instrumentation-tedious";
const CURRENT_DATABASE = /* @__PURE__ */ Symbol("opentelemetry.instrumentation-tedious.current-database");
const INJECTED_CTX = /* @__PURE__ */ Symbol("opentelemetry.instrumentation-tedious.context-info-injected");
const PATCHED_METHODS = ["callProcedure", "execSql", "execSqlBatch", "execBulkLoad", "prepare", "execute"];
function setDatabase(databaseName) {
  Object.defineProperty(this, CURRENT_DATABASE, {
    value: databaseName,
    writable: true
  });
}
const _TediousInstrumentation = class _TediousInstrumentation extends InstrumentationBase {
  constructor(config = {}) {
    super(PACKAGE_NAME, SDK_VERSION, config);
    this._setSemconvStabilityFromEnv();
  }
  // Used for testing.
  _setSemconvStabilityFromEnv() {
    this._netSemconvStability = semconvStabilityFromStr("http", process.env.OTEL_SEMCONV_STABILITY_OPT_IN);
    this._dbSemconvStability = semconvStabilityFromStr("database", process.env.OTEL_SEMCONV_STABILITY_OPT_IN);
  }
  init() {
    return [
      new InstrumentationNodeModuleDefinition(
        _TediousInstrumentation.COMPONENT,
        [">=1.11.0 <20"],
        (moduleExports) => {
          const ConnectionPrototype = moduleExports.Connection.prototype;
          for (const method of PATCHED_METHODS) {
            if (isWrapped(ConnectionPrototype[method])) {
              this._unwrap(ConnectionPrototype, method);
            }
            this._wrap(ConnectionPrototype, method, this._patchQuery(method, moduleExports));
          }
          if (isWrapped(ConnectionPrototype.connect)) {
            this._unwrap(ConnectionPrototype, "connect");
          }
          this._wrap(ConnectionPrototype, "connect", this._patchConnect);
          return moduleExports;
        },
        (moduleExports) => {
          if (moduleExports === void 0) return;
          const ConnectionPrototype = moduleExports.Connection.prototype;
          for (const method of PATCHED_METHODS) {
            this._unwrap(ConnectionPrototype, method);
          }
          this._unwrap(ConnectionPrototype, "connect");
        }
      )
    ];
  }
  _patchConnect(original) {
    return function patchedConnect() {
      setDatabase.call(this, this.config?.options?.database);
      this.removeListener("databaseChange", setDatabase);
      this.on("databaseChange", setDatabase);
      this.once("end", () => {
        this.removeListener("databaseChange", setDatabase);
      });
      return original.apply(this, arguments);
    };
  }
  _buildTraceparent(span) {
    const sc = span.spanContext();
    return `00-${sc.traceId}-${sc.spanId}-0${Number(sc.traceFlags || api.TraceFlags.NONE).toString(16)}`;
  }
  /**
   * Fire a one-off `SET CONTEXT_INFO @opentelemetry_traceparent` on the same
   * connection. Marks the request with INJECTED_CTX so our patch skips it.
   */
  _injectContextInfo(connection, tediousModule, traceparent) {
    return new Promise((resolve) => {
      try {
        const sql = "set context_info @opentelemetry_traceparent";
        const req = new tediousModule.Request(sql, (_err) => {
          resolve();
        });
        Object.defineProperty(req, INJECTED_CTX, { value: true });
        const buf = Buffer.from(traceparent, "utf8");
        req.addParameter("opentelemetry_traceparent", tediousModule.TYPES.VarBinary, buf, {
          length: buf.length
        });
        connection.execSql(req);
      } catch {
        resolve();
      }
    });
  }
  _shouldInjectFor(operation) {
    return operation === "execSql" || operation === "execSqlBatch" || operation === "callProcedure" || operation === "execute";
  }
  _patchQuery(operation, tediousModule) {
    return (originalMethod) => {
      const thisPlugin = this;
      function patchedMethod(request) {
        if (request?.[INJECTED_CTX]) {
          return originalMethod.apply(this, arguments);
        }
        if (!(request instanceof EventEmitter)) {
          thisPlugin._diag.warn(`Unexpected invocation of patched ${operation} method. Span not recorded`);
          return originalMethod.apply(this, arguments);
        }
        let procCount = 0;
        let statementCount = 0;
        const incrementStatementCount = () => statementCount++;
        const incrementProcCount = () => procCount++;
        const databaseName = this[CURRENT_DATABASE];
        const sql = ((request2) => {
          if (request2.sqlTextOrProcedure === "sp_prepare" && request2.parametersByName?.stmt?.value) {
            return request2.parametersByName.stmt.value;
          }
          return request2.sqlTextOrProcedure;
        })(request);
        const attributes = {};
        if (thisPlugin._dbSemconvStability & SemconvStability.OLD) {
          attributes[ATTR_DB_SYSTEM] = DB_SYSTEM_VALUE_MSSQL;
          attributes[ATTR_DB_NAME] = databaseName;
          attributes[ATTR_DB_USER] = this.config?.userName ?? this.config?.authentication?.options?.userName;
          attributes[ATTR_DB_STATEMENT] = sql;
          attributes[ATTR_DB_SQL_TABLE] = request.table;
        }
        if (thisPlugin._dbSemconvStability & SemconvStability.STABLE) {
          attributes[ATTR_DB_NAMESPACE] = databaseName;
          attributes[ATTR_DB_SYSTEM_NAME] = DB_SYSTEM_NAME_VALUE_MICROSOFT_SQL_SERVER;
          attributes[ATTR_DB_QUERY_TEXT] = sql;
          attributes[ATTR_DB_COLLECTION_NAME] = request.table;
        }
        if (thisPlugin._netSemconvStability & SemconvStability.OLD) {
          attributes[ATTR_NET_PEER_NAME] = this.config?.server;
          attributes[ATTR_NET_PEER_PORT] = this.config?.options?.port;
        }
        if (thisPlugin._netSemconvStability & SemconvStability.STABLE) {
          attributes[ATTR_SERVER_ADDRESS] = this.config?.server;
          attributes[ATTR_SERVER_PORT] = this.config?.options?.port;
        }
        const span = thisPlugin.tracer.startSpan(getSpanName(operation, databaseName, sql, request.table), {
          kind: api.SpanKind.CLIENT,
          attributes
        });
        const endSpan = once((err) => {
          request.removeListener("done", incrementStatementCount);
          request.removeListener("doneInProc", incrementStatementCount);
          request.removeListener("doneProc", incrementProcCount);
          request.removeListener("error", endSpan);
          this.removeListener("end", endSpan);
          span.setAttribute("tedious.procedure_count", procCount);
          span.setAttribute("tedious.statement_count", statementCount);
          if (err) {
            span.setStatus({
              code: api.SpanStatusCode.ERROR,
              message: err.message
            });
          }
          span.end();
        });
        request.on("done", incrementStatementCount);
        request.on("doneInProc", incrementStatementCount);
        request.on("doneProc", incrementProcCount);
        request.once("error", endSpan);
        this.on("end", endSpan);
        if (typeof request.callback === "function") {
          thisPlugin._wrap(request, "callback", thisPlugin._patchCallbackQuery(endSpan));
        } else {
          thisPlugin._diag.error("Expected request.callback to be a function");
        }
        const runUserRequest = () => {
          return api.context.with(api.trace.setSpan(api.context.active(), span), originalMethod, this, ...arguments);
        };
        const cfg = thisPlugin.getConfig();
        const shouldInject = cfg.enableTraceContextPropagation && thisPlugin._shouldInjectFor(operation);
        if (!shouldInject) return runUserRequest();
        const traceparent = thisPlugin._buildTraceparent(span);
        void thisPlugin._injectContextInfo(this, tediousModule, traceparent).finally(runUserRequest);
      }
      Object.defineProperty(patchedMethod, "length", {
        value: originalMethod.length,
        writable: false
      });
      return patchedMethod;
    };
  }
  _patchCallbackQuery(endSpan) {
    return (originalCallback) => {
      return function(err, rowCount, rows) {
        endSpan(err);
        return originalCallback.apply(this, arguments);
      };
    };
  }
};
_TediousInstrumentation.COMPONENT = "tedious";
let TediousInstrumentation = _TediousInstrumentation;

export { INJECTED_CTX, TediousInstrumentation };
//# sourceMappingURL=instrumentation.js.map
