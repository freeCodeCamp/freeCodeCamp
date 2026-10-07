import * as api from '@opentelemetry/api';
import { SDK_VERSION } from '@sentry/core';
import { InstrumentationBase, semconvStabilityFromStr, InstrumentationNodeModuleDefinition, InstrumentationNodeModuleFile, SemconvStability, isWrapped, safeExecuteInTheMiddle } from '@opentelemetry/instrumentation';
import { DB_SYSTEM_VALUE_MYSQL, ATTR_DB_SYSTEM, ATTR_DB_STATEMENT } from './semconv.js';
import { addSqlCommenterComment } from '../../utils/sql-common.js';
import { getConnectionPrototypeToInstrument, getConnectionAttributes, getQueryText, getSpanName, once } from './utils.js';
import { DB_SYSTEM_NAME_VALUE_MYSQL, ATTR_DB_SYSTEM_NAME, ATTR_DB_QUERY_TEXT } from '@opentelemetry/semantic-conventions';

const PACKAGE_NAME = "@sentry/instrumentation-mysql2";
const supportedVersions = [">=1.4.2 <4"];
class MySQL2Instrumentation extends InstrumentationBase {
  constructor(config = {}) {
    super(PACKAGE_NAME, SDK_VERSION, config);
    this._setSemconvStabilityFromEnv();
  }
  _setSemconvStabilityFromEnv() {
    this._netSemconvStability = semconvStabilityFromStr("http", process.env.OTEL_SEMCONV_STABILITY_OPT_IN);
    this._dbSemconvStability = semconvStabilityFromStr("database", process.env.OTEL_SEMCONV_STABILITY_OPT_IN);
  }
  init() {
    let format;
    function setFormatFunction(moduleExports) {
      if (!format && moduleExports.format) {
        format = moduleExports.format;
      }
    }
    const patch = (ConnectionPrototype) => {
      if (isWrapped(ConnectionPrototype.query)) {
        this._unwrap(ConnectionPrototype, "query");
      }
      this._wrap(ConnectionPrototype, "query", this._patchQuery(format, false));
      if (isWrapped(ConnectionPrototype.execute)) {
        this._unwrap(ConnectionPrototype, "execute");
      }
      this._wrap(ConnectionPrototype, "execute", this._patchQuery(format, true));
    };
    const unpatch = (ConnectionPrototype) => {
      this._unwrap(ConnectionPrototype, "query");
      this._unwrap(ConnectionPrototype, "execute");
    };
    return [
      new InstrumentationNodeModuleDefinition(
        "mysql2",
        supportedVersions,
        (moduleExports) => {
          setFormatFunction(moduleExports);
          return moduleExports;
        },
        () => {
        },
        [
          new InstrumentationNodeModuleFile(
            "mysql2/promise.js",
            supportedVersions,
            (moduleExports) => {
              setFormatFunction(moduleExports);
              return moduleExports;
            },
            () => {
            }
          ),
          new InstrumentationNodeModuleFile(
            "mysql2/lib/connection.js",
            supportedVersions,
            (moduleExports) => {
              const ConnectionPrototype = getConnectionPrototypeToInstrument(moduleExports);
              patch(ConnectionPrototype);
              return moduleExports;
            },
            (moduleExports) => {
              if (moduleExports === void 0) return;
              const ConnectionPrototype = getConnectionPrototypeToInstrument(moduleExports);
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
        const attributes = getConnectionAttributes(
          this.config,
          thisPlugin._dbSemconvStability,
          thisPlugin._netSemconvStability
        );
        const dbQueryText = getQueryText(query, format, values, maskStatement, maskStatementHook);
        if (thisPlugin._dbSemconvStability & SemconvStability.OLD) {
          attributes[ATTR_DB_SYSTEM] = DB_SYSTEM_VALUE_MYSQL;
          attributes[ATTR_DB_STATEMENT] = dbQueryText;
        }
        if (thisPlugin._dbSemconvStability & SemconvStability.STABLE) {
          attributes[ATTR_DB_SYSTEM_NAME] = DB_SYSTEM_NAME_VALUE_MYSQL;
          attributes[ATTR_DB_QUERY_TEXT] = dbQueryText;
        }
        const span = thisPlugin.tracer.startSpan(getSpanName(query), {
          kind: api.SpanKind.CLIENT,
          attributes
        });
        if (!isPrepared && thisPlugin.getConfig().addSqlCommenterCommentToQueries) {
          arguments[0] = query = typeof query === "string" ? addSqlCommenterComment(span, query) : Object.assign(query, {
            sql: addSqlCommenterComment(span, query.sql)
          });
        }
        const endSpan = once((err, results) => {
          if (err) {
            span.setStatus({
              code: api.SpanStatusCode.ERROR,
              message: err.message
            });
          } else {
            if (typeof responseHook === "function") {
              safeExecuteInTheMiddle(
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

export { MySQL2Instrumentation };
//# sourceMappingURL=instrumentation.js.map
