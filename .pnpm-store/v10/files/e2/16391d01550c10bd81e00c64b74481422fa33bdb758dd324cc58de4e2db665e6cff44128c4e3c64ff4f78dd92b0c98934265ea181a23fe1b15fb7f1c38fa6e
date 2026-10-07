Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const api = require('@opentelemetry/api');
const instrumentation = require('@opentelemetry/instrumentation');
const semanticConventions = require('@opentelemetry/semantic-conventions');
const core = require('@sentry/core');
const nodeCore = require('@sentry/node-core');
const debugBuild = require('../../debug-build.js');

const INTEGRATION_NAME = "PostgresJs";
const SUPPORTED_VERSIONS = [">=3.0.0 <4"];
const SQL_OPERATION_REGEX = /^(SELECT|INSERT|UPDATE|DELETE|CREATE|DROP|ALTER)/i;
const QUERY_FROM_INSTRUMENTED_SQL = /* @__PURE__ */ Symbol.for("sentry.query.from.instrumented.sql");
const instrumentPostgresJs = nodeCore.generateInstrumentOnce(
  INTEGRATION_NAME,
  (options) => new PostgresJsInstrumentation({
    requireParentSpan: options?.requireParentSpan ?? true,
    requestHook: options?.requestHook
  })
);
class PostgresJsInstrumentation extends instrumentation.InstrumentationBase {
  constructor(config) {
    super("sentry-postgres-js", core.SDK_VERSION, config);
  }
  /**
   * Initializes the instrumentation by patching the postgres module.
   * Uses two complementary approaches:
   * 1. Main function wrapper: instruments sql instances created AFTER instrumentation is set up (CJS + ESM)
   * 2. Query.prototype patch: fallback for sql instances created BEFORE instrumentation (CJS only)
   */
  init() {
    const module = new instrumentation.InstrumentationNodeModuleDefinition(
      "postgres",
      SUPPORTED_VERSIONS,
      (exports) => {
        try {
          return this._patchPostgres(exports);
        } catch (e) {
          debugBuild.DEBUG_BUILD && core.debug.error("Failed to patch postgres module:", e);
          return exports;
        }
      },
      (exports) => exports
    );
    ["src", "cf/src", "cjs/src"].forEach((path) => {
      module.files.push(
        new instrumentation.InstrumentationNodeModuleFile(
          `postgres/${path}/query.js`,
          SUPPORTED_VERSIONS,
          this._patchQueryPrototype.bind(this),
          this._unpatchQueryPrototype.bind(this)
        )
      );
    });
    return module;
  }
  /**
   * Patches the postgres module by wrapping the main export function.
   * This intercepts the creation of sql instances and instruments them.
   */
  _patchPostgres(exports) {
    const isFunction = typeof exports === "function";
    const Original = isFunction ? exports : exports.default;
    if (typeof Original !== "function") {
      debugBuild.DEBUG_BUILD && core.debug.warn("postgres module does not export a function. Skipping instrumentation.");
      return exports;
    }
    const self = this;
    const WrappedPostgres = function(...args) {
      const sql = Reflect.construct(Original, args);
      if (!sql || typeof sql !== "function") {
        debugBuild.DEBUG_BUILD && core.debug.warn("postgres() did not return a valid instance");
        return sql;
      }
      const config = self.getConfig();
      return core.instrumentPostgresJsSql(sql, {
        requireParentSpan: config.requireParentSpan,
        requestHook: config.requestHook
      });
    };
    Object.setPrototypeOf(WrappedPostgres, Original);
    Object.setPrototypeOf(WrappedPostgres.prototype, Original.prototype);
    for (const key of Object.getOwnPropertyNames(Original)) {
      if (!["length", "name", "prototype"].includes(key)) {
        const descriptor = Object.getOwnPropertyDescriptor(Original, key);
        if (descriptor) {
          Object.defineProperty(WrappedPostgres, key, descriptor);
        }
      }
    }
    if (isFunction) {
      return WrappedPostgres;
    } else {
      core.replaceExports(exports, "default", WrappedPostgres);
      return exports;
    }
  }
  /**
   * Determines whether a span should be created based on the current context.
   * If `requireParentSpan` is set to true in the configuration, a span will
   * only be created if there is a parent span available.
   */
  _shouldCreateSpans() {
    const config = this.getConfig();
    const hasParentSpan = api.trace.getSpan(api.context.active()) !== void 0;
    return hasParentSpan || !config.requireParentSpan;
  }
  /**
   * Extracts DB operation name from SQL query and sets it on the span.
   */
  _setOperationName(span, sanitizedQuery, command) {
    if (command) {
      span.setAttribute(semanticConventions.ATTR_DB_OPERATION_NAME, command);
      return;
    }
    const operationMatch = sanitizedQuery?.match(SQL_OPERATION_REGEX);
    if (operationMatch?.[1]) {
      span.setAttribute(semanticConventions.ATTR_DB_OPERATION_NAME, operationMatch[1].toUpperCase());
    }
  }
  /**
   * Reconstructs the full SQL query from template strings with PostgreSQL placeholders.
   *
   * For sql`SELECT * FROM users WHERE id = ${123} AND name = ${'foo'}`:
   *   strings = ["SELECT * FROM users WHERE id = ", " AND name = ", ""]
   *   returns: "SELECT * FROM users WHERE id = $1 AND name = $2"
   */
  _reconstructQuery(strings) {
    if (!strings?.length) {
      return void 0;
    }
    if (strings.length === 1) {
      return strings[0] || void 0;
    }
    return strings.reduce((acc, str, i) => i === 0 ? str : `${acc}$${i}${str}`, "");
  }
  /**
   * Sanitize SQL query as per the OTEL semantic conventions
   * https://opentelemetry.io/docs/specs/semconv/database/database-spans/#sanitization-of-dbquerytext
   *
   * PostgreSQL $n placeholders are preserved per OTEL spec - they're parameterized queries,
   * not sensitive literals. Only actual values (strings, numbers, booleans) are sanitized.
   */
  _sanitizeSqlQuery(sqlQuery) {
    if (!sqlQuery) {
      return "Unknown SQL Query";
    }
    return sqlQuery.replace(/--.*$/gm, "").replace(/\/\*[\s\S]*?\*\//g, "").replace(/;\s*$/, "").replace(/\s+/g, " ").trim().replace(/\bX'[0-9A-Fa-f]*'/gi, "?").replace(/\bB'[01]*'/gi, "?").replace(/'(?:[^']|'')*'/g, "?").replace(/\b0x[0-9A-Fa-f]+/gi, "?").replace(/\b(?:TRUE|FALSE)\b/gi, "?").replace(/-?\b\d+\.?\d*[eE][+-]?\d+\b/g, "?").replace(/-?\b\d+\.\d+\b/g, "?").replace(/-?\.\d+\b/g, "?").replace(/(?<!\$)-?\b\d+\b/g, "?").replace(/\bIN\b\s*\(\s*\?(?:\s*,\s*\?)*\s*\)/gi, "IN (?)").replace(/\bIN\b\s*\(\s*\$\d+(?:\s*,\s*\$\d+)*\s*\)/gi, "IN ($?)");
  }
  /**
   * Fallback patch for Query.prototype.handle to instrument queries from pre-existing sql instances.
   * This catches queries from sql instances created BEFORE Sentry was initialized (CJS only).
   *
   * Note: Queries from pre-existing instances won't have connection context (database, host, port)
   * because the sql instance wasn't created through our instrumented wrapper.
   */
  _patchQueryPrototype(moduleExports) {
    const self = this;
    const originalHandle = moduleExports.Query.prototype.handle;
    moduleExports.Query.prototype.handle = async function(...args) {
      if (this[QUERY_FROM_INSTRUMENTED_SQL]) {
        return originalHandle.apply(this, args);
      }
      if (!self._shouldCreateSpans()) {
        return originalHandle.apply(this, args);
      }
      const fullQuery = self._reconstructQuery(this.strings);
      const sanitizedSqlQuery = self._sanitizeSqlQuery(fullQuery);
      return core.startSpanManual(
        {
          name: sanitizedSqlQuery || "postgresjs.query",
          op: "db"
        },
        (span) => {
          nodeCore.addOriginToSpan(span, "auto.db.postgresjs");
          span.setAttributes({
            [semanticConventions.ATTR_DB_SYSTEM_NAME]: "postgres",
            [semanticConventions.ATTR_DB_QUERY_TEXT]: sanitizedSqlQuery
          });
          const config = self.getConfig();
          const { requestHook } = config;
          if (requestHook) {
            instrumentation.safeExecuteInTheMiddle(
              () => requestHook(span, sanitizedSqlQuery, void 0),
              (e) => {
                if (e) {
                  span.setAttribute("sentry.hook.error", "requestHook failed");
                  debugBuild.DEBUG_BUILD && core.debug.error(`Error in requestHook for ${INTEGRATION_NAME} integration:`, e);
                }
              },
              true
            );
          }
          const originalResolve = this.resolve;
          this.resolve = new Proxy(originalResolve, {
            apply: (resolveTarget, resolveThisArg, resolveArgs) => {
              try {
                self._setOperationName(span, sanitizedSqlQuery, resolveArgs?.[0]?.command);
                span.end();
              } catch (e) {
                debugBuild.DEBUG_BUILD && core.debug.error("Error ending span in resolve callback:", e);
              }
              return Reflect.apply(resolveTarget, resolveThisArg, resolveArgs);
            }
          });
          const originalReject = this.reject;
          this.reject = new Proxy(originalReject, {
            apply: (rejectTarget, rejectThisArg, rejectArgs) => {
              try {
                span.setStatus({
                  code: core.SPAN_STATUS_ERROR,
                  message: rejectArgs?.[0]?.message || "unknown_error"
                });
                span.setAttribute(semanticConventions.ATTR_DB_RESPONSE_STATUS_CODE, rejectArgs?.[0]?.code || "unknown");
                span.setAttribute(semanticConventions.ATTR_ERROR_TYPE, rejectArgs?.[0]?.name || "unknown");
                self._setOperationName(span, sanitizedSqlQuery);
                span.end();
              } catch (e) {
                debugBuild.DEBUG_BUILD && core.debug.error("Error ending span in reject callback:", e);
              }
              return Reflect.apply(rejectTarget, rejectThisArg, rejectArgs);
            }
          });
          try {
            return originalHandle.apply(this, args);
          } catch (e) {
            span.setStatus({
              code: core.SPAN_STATUS_ERROR,
              message: e instanceof Error ? e.message : "unknown_error"
            });
            span.end();
            throw e;
          }
        }
      );
    };
    moduleExports.Query.prototype.handle.__sentry_original__ = originalHandle;
    return moduleExports;
  }
  /**
   * Restores the original Query.prototype.handle method.
   */
  _unpatchQueryPrototype(moduleExports) {
    if (moduleExports.Query.prototype.handle.__sentry_original__) {
      moduleExports.Query.prototype.handle = moduleExports.Query.prototype.handle.__sentry_original__;
    }
    return moduleExports;
  }
}
const _postgresJsIntegration = ((options) => {
  return {
    name: INTEGRATION_NAME,
    setupOnce() {
      instrumentPostgresJs(options);
    }
  };
});
const postgresJsIntegration = core.defineIntegration(_postgresJsIntegration);

exports.PostgresJsInstrumentation = PostgresJsInstrumentation;
exports.instrumentPostgresJs = instrumentPostgresJs;
exports.postgresJsIntegration = postgresJsIntegration;
//# sourceMappingURL=postgresjs.js.map
