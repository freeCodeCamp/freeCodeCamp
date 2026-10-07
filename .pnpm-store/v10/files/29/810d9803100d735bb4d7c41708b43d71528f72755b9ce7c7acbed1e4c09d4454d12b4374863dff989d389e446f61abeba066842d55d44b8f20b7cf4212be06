import { context, SpanKind, trace, SpanStatusCode } from '@opentelemetry/api';
import { InstrumentationBase, semconvStabilityFromStr, InstrumentationNodeModuleDefinition, isWrapped, SemconvStability } from '@opentelemetry/instrumentation';
import { DB_SYSTEM_NAME_VALUE_MYSQL, ATTR_DB_SYSTEM_NAME, ATTR_DB_NAMESPACE, ATTR_DB_QUERY_TEXT, ATTR_SERVER_ADDRESS, ATTR_SERVER_PORT } from '@opentelemetry/semantic-conventions';
import { METRIC_DB_CLIENT_CONNECTIONS_USAGE, DB_SYSTEM_VALUE_MYSQL, ATTR_DB_SYSTEM, ATTR_DB_CONNECTION_STRING, ATTR_DB_NAME, ATTR_DB_USER, ATTR_DB_STATEMENT, ATTR_NET_PEER_NAME, ATTR_NET_PEER_PORT } from './semconv.js';
import { AttributeNames } from './AttributeNames.js';
import { getPoolNameOld, getConfig, getDbQueryText, getSpanName, getDbValues, getJDBCString } from './utils.js';
import { SDK_VERSION } from '@sentry/core';

const PACKAGE_NAME = "@sentry/instrumentation-mysql";
class MySQLInstrumentation extends InstrumentationBase {
  constructor(config = {}) {
    super(PACKAGE_NAME, SDK_VERSION, config);
    this._setSemconvStabilityFromEnv();
  }
  // Used for testing.
  _setSemconvStabilityFromEnv() {
    this._netSemconvStability = semconvStabilityFromStr("http", process.env.OTEL_SEMCONV_STABILITY_OPT_IN);
    this._dbSemconvStability = semconvStabilityFromStr("database", process.env.OTEL_SEMCONV_STABILITY_OPT_IN);
  }
  _updateMetricInstruments() {
    this._connectionsUsageOld = this.meter.createUpDownCounter(METRIC_DB_CLIENT_CONNECTIONS_USAGE, {
      description: "The number of connections that are currently in state described by the state attribute.",
      unit: "{connection}"
    });
  }
  /**
   * Convenience function for updating the `db.client.connections.usage` metric.
   * The name "count" comes from the eventually replacement for this metric per
   * https://opentelemetry.io/docs/specs/semconv/non-normative/db-migration/#database-client-connection-count
   */
  _connCountAdd(n, poolNameOld, state) {
    this._connectionsUsageOld?.add(n, { state, name: poolNameOld });
  }
  init() {
    return [
      new InstrumentationNodeModuleDefinition(
        "mysql",
        [">=2.0.0 <3"],
        (moduleExports) => {
          if (isWrapped(moduleExports.createConnection)) {
            this._unwrap(moduleExports, "createConnection");
          }
          this._wrap(moduleExports, "createConnection", this._patchCreateConnection());
          if (isWrapped(moduleExports.createPool)) {
            this._unwrap(moduleExports, "createPool");
          }
          this._wrap(moduleExports, "createPool", this._patchCreatePool());
          if (isWrapped(moduleExports.createPoolCluster)) {
            this._unwrap(moduleExports, "createPoolCluster");
          }
          this._wrap(moduleExports, "createPoolCluster", this._patchCreatePoolCluster());
          return moduleExports;
        },
        (moduleExports) => {
          if (moduleExports === void 0) return;
          this._unwrap(moduleExports, "createConnection");
          this._unwrap(moduleExports, "createPool");
          this._unwrap(moduleExports, "createPoolCluster");
        }
      )
    ];
  }
  // global export function
  _patchCreateConnection() {
    return (originalCreateConnection) => {
      const thisPlugin = this;
      return function createConnection(_connectionUri) {
        const originalResult = originalCreateConnection(...arguments);
        thisPlugin._wrap(originalResult, "query", thisPlugin._patchQuery(originalResult));
        return originalResult;
      };
    };
  }
  // global export function
  _patchCreatePool() {
    return (originalCreatePool) => {
      const thisPlugin = this;
      return function createPool(_config) {
        const pool = originalCreatePool(...arguments);
        thisPlugin._wrap(pool, "query", thisPlugin._patchQuery(pool));
        thisPlugin._wrap(pool, "getConnection", thisPlugin._patchGetConnection(pool));
        thisPlugin._wrap(pool, "end", thisPlugin._patchPoolEnd(pool));
        thisPlugin._setPoolCallbacks(pool, "");
        return pool;
      };
    };
  }
  _patchPoolEnd(pool) {
    return (originalPoolEnd) => {
      const thisPlugin = this;
      return function end(callback) {
        const nAll = pool._allConnections.length;
        const nFree = pool._freeConnections.length;
        const nUsed = nAll - nFree;
        const poolNameOld = getPoolNameOld(pool);
        thisPlugin._connCountAdd(-nUsed, poolNameOld, "used");
        thisPlugin._connCountAdd(-nFree, poolNameOld, "idle");
        originalPoolEnd.apply(pool, arguments);
      };
    };
  }
  // global export function
  _patchCreatePoolCluster() {
    return (originalCreatePoolCluster) => {
      const thisPlugin = this;
      return function createPool(_config) {
        const cluster = originalCreatePoolCluster(...arguments);
        thisPlugin._wrap(cluster, "getConnection", thisPlugin._patchGetConnection(cluster));
        thisPlugin._wrap(cluster, "add", thisPlugin._patchAdd(cluster));
        return cluster;
      };
    };
  }
  _patchAdd(cluster) {
    return (originalAdd) => {
      const thisPlugin = this;
      return function add(id, config) {
        if (!thisPlugin["_enabled"]) {
          thisPlugin._unwrap(cluster, "add");
          return originalAdd.apply(cluster, arguments);
        }
        originalAdd.apply(cluster, arguments);
        const nodes = cluster["_nodes"];
        if (nodes) {
          const nodeId = typeof id === "object" ? "CLUSTER::" + cluster._lastId : String(id);
          const pool = nodes[nodeId].pool;
          thisPlugin._setPoolCallbacks(pool, id);
        }
      };
    };
  }
  // method on cluster or pool
  _patchGetConnection(pool) {
    return (originalGetConnection) => {
      const thisPlugin = this;
      return function getConnection(arg1, arg2, arg3) {
        if (!thisPlugin["_enabled"]) {
          thisPlugin._unwrap(pool, "getConnection");
          return originalGetConnection.apply(pool, arguments);
        }
        if (arguments.length === 1 && typeof arg1 === "function") {
          const patchFn = thisPlugin._getConnectionCallbackPatchFn(arg1);
          return originalGetConnection.call(pool, patchFn);
        }
        if (arguments.length === 2 && typeof arg2 === "function") {
          const patchFn = thisPlugin._getConnectionCallbackPatchFn(arg2);
          return originalGetConnection.call(pool, arg1, patchFn);
        }
        if (arguments.length === 3 && typeof arg3 === "function") {
          const patchFn = thisPlugin._getConnectionCallbackPatchFn(arg3);
          return originalGetConnection.call(pool, arg1, arg2, patchFn);
        }
        return originalGetConnection.apply(pool, arguments);
      };
    };
  }
  _getConnectionCallbackPatchFn(cb) {
    const thisPlugin = this;
    const activeContext = context.active();
    return function(err, connection) {
      if (connection) {
        if (!isWrapped(connection.query)) {
          thisPlugin._wrap(connection, "query", thisPlugin._patchQuery(connection));
        }
      }
      if (typeof cb === "function") {
        context.with(activeContext, cb, this, err, connection);
      }
    };
  }
  _patchQuery(connection) {
    return (originalQuery) => {
      const thisPlugin = this;
      return function query(query, _valuesOrCallback, _callback) {
        if (!thisPlugin["_enabled"]) {
          thisPlugin._unwrap(connection, "query");
          return originalQuery.apply(connection, arguments);
        }
        const attributes = {};
        const { host, port, database, user } = getConfig(connection.config);
        const portNumber = parseInt(port, 10);
        const dbQueryText = getDbQueryText(query);
        if (thisPlugin._dbSemconvStability & SemconvStability.OLD) {
          attributes[ATTR_DB_SYSTEM] = DB_SYSTEM_VALUE_MYSQL;
          attributes[ATTR_DB_CONNECTION_STRING] = getJDBCString(host, port, database);
          attributes[ATTR_DB_NAME] = database;
          attributes[ATTR_DB_USER] = user;
          attributes[ATTR_DB_STATEMENT] = dbQueryText;
        }
        if (thisPlugin._dbSemconvStability & SemconvStability.STABLE) {
          attributes[ATTR_DB_SYSTEM_NAME] = DB_SYSTEM_NAME_VALUE_MYSQL;
          attributes[ATTR_DB_NAMESPACE] = database;
          attributes[ATTR_DB_QUERY_TEXT] = dbQueryText;
        }
        if (thisPlugin._netSemconvStability & SemconvStability.OLD) {
          attributes[ATTR_NET_PEER_NAME] = host;
          if (!isNaN(portNumber)) {
            attributes[ATTR_NET_PEER_PORT] = portNumber;
          }
        }
        if (thisPlugin._netSemconvStability & SemconvStability.STABLE) {
          attributes[ATTR_SERVER_ADDRESS] = host;
          if (!isNaN(portNumber)) {
            attributes[ATTR_SERVER_PORT] = portNumber;
          }
        }
        const span = thisPlugin.tracer.startSpan(getSpanName(query), {
          kind: SpanKind.CLIENT,
          attributes
        });
        if (thisPlugin.getConfig().enhancedDatabaseReporting) {
          let values;
          if (Array.isArray(_valuesOrCallback)) {
            values = _valuesOrCallback;
          } else if (arguments[2]) {
            values = [_valuesOrCallback];
          }
          span.setAttribute(AttributeNames.MYSQL_VALUES, getDbValues(query, values));
        }
        const cbIndex = Array.from(arguments).findIndex((arg) => typeof arg === "function");
        const parentContext = context.active();
        if (cbIndex === -1) {
          const streamableQuery = context.with(trace.setSpan(context.active(), span), () => {
            return originalQuery.apply(connection, arguments);
          });
          context.bind(parentContext, streamableQuery);
          return streamableQuery.on(
            "error",
            (err) => span.setStatus({
              code: SpanStatusCode.ERROR,
              message: err.message
            })
          ).on("end", () => {
            span.end();
          });
        } else {
          thisPlugin._wrap(arguments, cbIndex, thisPlugin._patchCallbackQuery(span, parentContext));
          return context.with(trace.setSpan(context.active(), span), () => {
            return originalQuery.apply(connection, arguments);
          });
        }
      };
    };
  }
  _patchCallbackQuery(span, parentContext) {
    return (originalCallback) => {
      return function(err, results, fields) {
        if (err) {
          span.setStatus({
            code: SpanStatusCode.ERROR,
            message: err.message
          });
        }
        span.end();
        return context.with(parentContext, () => originalCallback(...arguments));
      };
    };
  }
  _setPoolCallbacks(pool, id) {
    const poolNameOld = id || getPoolNameOld(pool);
    pool.on("connection", (_connection) => {
      this._connCountAdd(1, poolNameOld, "idle");
    });
    pool.on("acquire", (_connection) => {
      this._connCountAdd(-1, poolNameOld, "idle");
      this._connCountAdd(1, poolNameOld, "used");
    });
    pool.on("release", (_connection) => {
      this._connCountAdd(1, poolNameOld, "idle");
      this._connCountAdd(-1, poolNameOld, "used");
    });
  }
}

export { MySQLInstrumentation };
//# sourceMappingURL=instrumentation.js.map
