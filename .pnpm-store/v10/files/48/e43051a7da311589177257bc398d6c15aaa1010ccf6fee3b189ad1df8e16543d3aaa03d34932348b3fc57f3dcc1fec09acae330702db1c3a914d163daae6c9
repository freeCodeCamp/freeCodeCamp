Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const api = require('@opentelemetry/api');
const core = require('@sentry/core');
const instrumentation = require('@opentelemetry/instrumentation');
const semconv = require('./semconv.js');
const sqlCommon = require('../../utils/sql-common.js');
const utils = require('./utils.js');
const semanticConventions = require('@opentelemetry/semantic-conventions');

const PACKAGE_NAME = "@sentry/instrumentation-mysql2";
const supportedVersions = [">=1.4.2 <4"];
class MySQL2Instrumentation extends instrumentation.InstrumentationBase {
  constructor(config = {}) {
    super(PACKAGE_NAME, core.SDK_VERSION, config);
    this._setSemconvStabilityFromEnv();
  }
  _setSemconvStabilityFromEnv() {
    this._netSemconvStability = instrumentation.semconvStabilityFromStr("http", process.env.OTEL_SEMCONV_STABILITY_OPT_IN);
    this._dbSemconvStability = instrumentation.semconvStabilityFromStr("database", process.env.OTEL_SEMCONV_STABILITY_OPT_IN);
  }
  init() {
    let format;
    function setFormatFunction(moduleExports) {
      if (!format && moduleExports.format) {
        format = moduleExports.format;
      }
    }
    const patch = (ConnectionPrototype) => {
      if (instrumentation.isWrapped(ConnectionPrototype.query)) {
        this._unwrap(ConnectionPrototype, "query");
      }
      this._wrap(ConnectionPrototype, "query", this._patchQuery(format, false));
      if (instrumentation.isWrapped(ConnectionPrototype.execute)) {
        this._unwrap(ConnectionPrototype, "execute");
      }
      this._wrap(ConnectionPrototype, "execute", this._patchQuery(format, true));
    };
    const unpatch = (ConnectionPrototype) => {
      this._unwrap(ConnectionPrototype, "query");
      this._unwrap(ConnectionPrototype, "execute");
    };
    return [
      new instrumentation.InstrumentationNodeModuleDefinition(
        "mysql2",
        supportedVersions,
        (moduleExports) => {
          setFormatFunction(moduleExports);
          return moduleExports;
        },
        () => {
        },
        [
          new instrumentation.InstrumentationNodeModuleFile(
            "mysql2/promise.js",
            supportedVersions,
            (moduleExports) => {
              setFormatFunction(moduleExports);
              return moduleExports;
            },
            () => {
            }
          ),
          new instrumentation.InstrumentationNodeModuleFile(
            "mysql2/lib/connection.js",
            supportedVersions,
            (moduleExports) => {
              const ConnectionPrototype = utils.getConnectionPrototypeToInstrument(moduleExports);
              patch(ConnectionPrototype);
              return moduleExports;
            },
            (moduleExports) => {
              if (moduleExports === void 0) return;
              const ConnectionPrototype = utils.getConnectionPrototypeToInstrument(moduleExports);
              unpatch(ConnectionPrototype);
            }
          )
        ]
      )
    ];
  }
  _patchQuery(format, isPrepared) {
    return (originalQuery) => {
      const thisPlugin = this;
      return function query(query, _valuesOrCallback, _callback) {
        let values;
        if (Array.isArray(_valuesOrCallback)) {
          values = _valuesOrCallback;
        } else if (arguments[2]) {
          values = [_valuesOrCallback];
        }
        const { maskStatement, maskStatementHook, responseHook } = thisPlugin.getConfig();
        const attributes = utils.getConnectionAttributes(
          this.config,
          thisPlugin._dbSemconvStability,
          thisPlugin._netSemconvStability
        );
        const dbQueryText = utils.getQueryText(query, format, values, maskStatement, maskStatementHook);
        if (thisPlugin._dbSemconvStability & instrumentation.SemconvStability.OLD) {
          attributes[semconv.ATTR_DB_SYSTEM] = semconv.DB_SYSTEM_VALUE_MYSQL;
          attributes[semconv.ATTR_DB_STATEMENT] = dbQueryText;
        }
        if (thisPlugin._dbSemconvStability & instrumentation.SemconvStability.STABLE) {
          attributes[semanticConventions.ATTR_DB_SYSTEM_NAME] = semanticConventions.DB_SYSTEM_NAME_VALUE_MYSQL;
          attributes[semanticConventions.ATTR_DB_QUERY_TEXT] = dbQueryText;
        }
        const span = thisPlugin.tracer.startSpan(utils.getSpanName(query), {
          kind: api.SpanKind.CLIENT,
          attributes
        });
        if (!isPrepared && thisPlugin.getConfig().addSqlCommenterCommentToQueries) {
          arguments[0] = query = typeof query === "string" ? sqlCommon.addSqlCommenterComment(span, query) : Object.assign(query, {
            sql: sqlCommon.addSqlCommenterComment(span, query.sql)
          });
        }
        const endSpan = utils.once((err, results) => {
          if (err) {
            span.setStatus({
              code: api.SpanStatusCode.ERROR,
              message: err.message
            });
          } else {
            if (typeof responseHook === "function") {
              instrumentation.safeExecuteInTheMiddle(
                () => {
                  responseHook(span, {
                    queryResults: results
                  });
                },
                (err2) => {
                  if (err2) {
                    thisPlugin._diag.warn("Failed executing responseHook", err2);
                  }
                },
                true
              );
            }
          }
          span.end();
        });
        if (arguments.length === 1) {
          if (typeof query.onResult === "function") {
            thisPlugin._wrap(query, "onResult", thisPlugin._patchCallbackQuery(endSpan));
          }
          const streamableQuery = originalQuery.apply(this, arguments);
          streamableQuery.once("error", (err) => {
            endSpan(err);
          }).once("result", (results) => {
            endSpan(void 0, results);
          });
          return streamableQuery;
        }
        if (typeof arguments[1] === "function") {
          thisPlugin._wrap(arguments, 1, thisPlugin._patchCallbackQuery(endSpan));
        } else if (typeof arguments[2] === "function") {
          thisPlugin._wrap(arguments, 2, thisPlugin._patchCallbackQuery(endSpan));
        }
        return originalQuery.apply(this, arguments);
      };
    };
  }
  _patchCallbackQuery(endSpan) {
    return (originalCallback) => {
      return function(err, results, _fields) {
        endSpan(err, results);
        return originalCallback(...arguments);
      };
    };
  }
}

exports.MySQL2Instrumentation = MySQL2Instrumentation;
//# sourceMappingURL=instrumentation.js.map
