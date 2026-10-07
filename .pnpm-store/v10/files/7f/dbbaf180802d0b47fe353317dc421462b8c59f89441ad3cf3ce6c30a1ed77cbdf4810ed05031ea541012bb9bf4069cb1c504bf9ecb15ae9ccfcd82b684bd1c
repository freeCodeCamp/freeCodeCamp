Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const api = require('@opentelemetry/api');
const instrumentation = require('@opentelemetry/instrumentation');
const semanticConventions = require('@opentelemetry/semantic-conventions');
const semconv = require('./semconv.js');
const internalTypes = require('./internal-types.js');
const core = require('@sentry/core');

const PACKAGE_NAME = "@sentry/instrumentation-mongodb";
const DEFAULT_CONFIG = {
  requireParentSpan: true
};
class MongoDBInstrumentation extends instrumentation.InstrumentationBase {
  constructor(config = {}) {
    super(PACKAGE_NAME, core.SDK_VERSION, { ...DEFAULT_CONFIG, ...config });
    this._setSemconvStabilityFromEnv();
  }
  // Used for testing.
  _setSemconvStabilityFromEnv() {
    this._netSemconvStability = instrumentation.semconvStabilityFromStr("http", process.env.OTEL_SEMCONV_STABILITY_OPT_IN);
    this._dbSemconvStability = instrumentation.semconvStabilityFromStr("database", process.env.OTEL_SEMCONV_STABILITY_OPT_IN);
  }
  setConfig(config = {}) {
    super.setConfig({ ...DEFAULT_CONFIG, ...config });
  }
  _updateMetricInstruments() {
    this._connectionsUsage = this.meter.createUpDownCounter(semconv.METRIC_DB_CLIENT_CONNECTIONS_USAGE, {
      description: "The number of connections that are currently in state described by the state attribute.",
      unit: "{connection}"
    });
  }
  /**
   * Convenience function for updating the `db.client.connections.usage` metric.
   * The name "count" comes from the eventual replacement for this metric per
   * https://opentelemetry.io/docs/specs/semconv/non-normative/db-migration/#database-client-connection-count
   */
  _connCountAdd(n, poolName, state) {
    this._connectionsUsage?.add(n, { "pool.name": poolName, state });
  }
  init() {
    const { v3PatchConnection, v3UnpatchConnection } = this._getV3ConnectionPatches();
    const { v4PatchConnect, v4UnpatchConnect } = this._getV4ConnectPatches();
    const { v4PatchConnectionCallback, v4PatchConnectionPromise, v4UnpatchConnection } = this._getV4ConnectionPatches();
    const { v4PatchConnectionPool, v4UnpatchConnectionPool } = this._getV4ConnectionPoolPatches();
    const { v4PatchSessions, v4UnpatchSessions } = this._getV4SessionsPatches();
    return [
      new instrumentation.InstrumentationNodeModuleDefinition("mongodb", [">=3.3.0 <4"], void 0, void 0, [
        new instrumentation.InstrumentationNodeModuleFile(
          "mongodb/lib/core/wireprotocol/index.js",
          [">=3.3.0 <4"],
          v3PatchConnection,
          v3UnpatchConnection
        )
      ]),
      new instrumentation.InstrumentationNodeModuleDefinition("mongodb", [">=4.0.0 <8"], void 0, void 0, [
        new instrumentation.InstrumentationNodeModuleFile(
          "mongodb/lib/cmap/connection.js",
          [">=4.0.0 <6.4"],
          v4PatchConnectionCallback,
          v4UnpatchConnection
        ),
        new instrumentation.InstrumentationNodeModuleFile(
          "mongodb/lib/cmap/connection.js",
          [">=6.4.0 <8"],
          v4PatchConnectionPromise,
          v4UnpatchConnection
        ),
        new instrumentation.InstrumentationNodeModuleFile(
          "mongodb/lib/cmap/connection_pool.js",
          [">=4.0.0 <6.4"],
          v4PatchConnectionPool,
          v4UnpatchConnectionPool
        ),
        new instrumentation.InstrumentationNodeModuleFile(
          "mongodb/lib/cmap/connect.js",
          [">=4.0.0 <8"],
          v4PatchConnect,
          v4UnpatchConnect
        ),
        new instrumentation.InstrumentationNodeModuleFile(
          "mongodb/lib/sessions.js",
          [">=4.0.0 <8"],
          v4PatchSessions,
          v4UnpatchSessions
        )
      ])
    ];
  }
  _getV3ConnectionPatches() {
    return {
      v3PatchConnection: (moduleExports) => {
        if (instrumentation.isWrapped(moduleExports.insert)) {
          this._unwrap(moduleExports, "insert");
        }
        this._wrap(moduleExports, "insert", this._getV3PatchOperation("insert"));
        if (instrumentation.isWrapped(moduleExports.remove)) {
          this._unwrap(moduleExports, "remove");
        }
        this._wrap(moduleExports, "remove", this._getV3PatchOperation("remove"));
        if (instrumentation.isWrapped(moduleExports.update)) {
          this._unwrap(moduleExports, "update");
        }
        this._wrap(moduleExports, "update", this._getV3PatchOperation("update"));
        if (instrumentation.isWrapped(moduleExports.command)) {
          this._unwrap(moduleExports, "command");
        }
        this._wrap(moduleExports, "command", this._getV3PatchCommand());
        if (instrumentation.isWrapped(moduleExports.query)) {
          this._unwrap(moduleExports, "query");
        }
        this._wrap(moduleExports, "query", this._getV3PatchFind());
        if (instrumentation.isWrapped(moduleExports.getMore)) {
          this._unwrap(moduleExports, "getMore");
        }
        this._wrap(moduleExports, "getMore", this._getV3PatchCursor());
        return moduleExports;
      },
      v3UnpatchConnection: (moduleExports) => {
        if (moduleExports === void 0) return;
        this._unwrap(moduleExports, "insert");
        this._unwrap(moduleExports, "remove");
        this._unwrap(moduleExports, "update");
        this._unwrap(moduleExports, "command");
        this._unwrap(moduleExports, "query");
        this._unwrap(moduleExports, "getMore");
      }
    };
  }
  _getV4SessionsPatches() {
    return {
      v4PatchSessions: (moduleExports) => {
        if (instrumentation.isWrapped(moduleExports.acquire)) {
          this._unwrap(moduleExports, "acquire");
        }
        this._wrap(moduleExports.ServerSessionPool.prototype, "acquire", this._getV4AcquireCommand());
        if (instrumentation.isWrapped(moduleExports.release)) {
          this._unwrap(moduleExports, "release");
        }
        this._wrap(moduleExports.ServerSessionPool.prototype, "release", this._getV4ReleaseCommand());
        return moduleExports;
      },
      v4UnpatchSessions: (moduleExports) => {
        if (moduleExports === void 0) return;
        if (instrumentation.isWrapped(moduleExports.acquire)) {
          this._unwrap(moduleExports, "acquire");
        }
        if (instrumentation.isWrapped(moduleExports.release)) {
          this._unwrap(moduleExports, "release");
        }
      }
    };
  }
  _getV4AcquireCommand() {
    const instrumentation = this;
    return (original) => {
      return function patchAcquire() {
        const nSessionsBeforeAcquire = this.sessions.length;
        const session = original.call(this);
        const nSessionsAfterAcquire = this.sessions.length;
        if (nSessionsBeforeAcquire === nSessionsAfterAcquire) {
          instrumentation._connCountAdd(1, instrumentation._poolName, "used");
        } else if (nSessionsBeforeAcquire - 1 === nSessionsAfterAcquire) {
          instrumentation._connCountAdd(-1, instrumentation._poolName, "idle");
          instrumentation._connCountAdd(1, instrumentation._poolName, "used");
        }
        return session;
      };
    };
  }
  _getV4ReleaseCommand() {
    const instrumentation = this;
    return (original) => {
      return function patchRelease(session) {
        const cmdPromise = original.call(this, session);
        instrumentation._connCountAdd(-1, instrumentation._poolName, "used");
        instrumentation._connCountAdd(1, instrumentation._poolName, "idle");
        return cmdPromise;
      };
    };
  }
  _getV4ConnectionPoolPatches() {
    return {
      v4PatchConnectionPool: (moduleExports) => {
        const poolPrototype = moduleExports.ConnectionPool.prototype;
        if (instrumentation.isWrapped(poolPrototype.checkOut)) {
          this._unwrap(poolPrototype, "checkOut");
        }
        this._wrap(poolPrototype, "checkOut", this._getV4ConnectionPoolCheckOut());
        return moduleExports;
      },
      v4UnpatchConnectionPool: (moduleExports) => {
        if (moduleExports === void 0) return;
        this._unwrap(moduleExports.ConnectionPool.prototype, "checkOut");
      }
    };
  }
  _getV4ConnectPatches() {
    return {
      v4PatchConnect: (moduleExports) => {
        if (instrumentation.isWrapped(moduleExports.connect)) {
          this._unwrap(moduleExports, "connect");
        }
        this._wrap(moduleExports, "connect", this._getV4ConnectCommand());
        return moduleExports;
      },
      v4UnpatchConnect: (moduleExports) => {
        if (moduleExports === void 0) return;
        this._unwrap(moduleExports, "connect");
      }
    };
  }
  // This patch will become unnecessary once
  // https://jira.mongodb.org/browse/NODE-5639 is done.
  _getV4ConnectionPoolCheckOut() {
    return (original) => {
      return function patchedCheckout(callback) {
        const patchedCallback = api.context.bind(api.context.active(), callback);
        return original.call(this, patchedCallback);
      };
    };
  }
  _getV4ConnectCommand() {
    const instrumentation = this;
    return (original) => {
      return function patchedConnect(options, callback) {
        if (original.length === 1) {
          const result = original.call(this, options);
          if (result && typeof result.then === "function") {
            result.then(
              () => instrumentation.setPoolName(options),
              // this handler is set to pass the lint rules
              () => void 0
            );
          }
          return result;
        }
        const patchedCallback = function(err, conn) {
          if (err || !conn) {
            callback(err, conn);
            return;
          }
          instrumentation.setPoolName(options);
          callback(err, conn);
        };
        return original.call(this, options, patchedCallback);
      };
    };
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _getV4ConnectionPatches() {
    return {
      v4PatchConnectionCallback: (moduleExports) => {
        if (instrumentation.isWrapped(moduleExports.Connection.prototype.command)) {
          this._unwrap(moduleExports.Connection.prototype, "command");
        }
        this._wrap(moduleExports.Connection.prototype, "command", this._getV4PatchCommandCallback());
        return moduleExports;
      },
      v4PatchConnectionPromise: (moduleExports) => {
        if (instrumentation.isWrapped(moduleExports.Connection.prototype.command)) {
          this._unwrap(moduleExports.Connection.prototype, "command");
        }
        this._wrap(moduleExports.Connection.prototype, "command", this._getV4PatchCommandPromise());
        return moduleExports;
      },
      v4UnpatchConnection: (moduleExports) => {
        if (moduleExports === void 0) return;
        this._unwrap(moduleExports.Connection.prototype, "command");
      }
    };
  }
  /** Creates spans for common operations */
  _getV3PatchOperation(operationName) {
    const instrumentation = this;
    return (original) => {
      return function patchedServerCommand(server, ns, ops, options, callback) {
        const currentSpan = api.trace.getSpan(api.context.active());
        const skipInstrumentation = instrumentation._checkSkipInstrumentation(currentSpan);
        const resultHandler = typeof options === "function" ? options : callback;
        if (skipInstrumentation || typeof resultHandler !== "function" || typeof ops !== "object") {
          if (typeof options === "function") {
            return original.call(this, server, ns, ops, options);
          } else {
            return original.call(this, server, ns, ops, options, callback);
          }
        }
        const attributes = instrumentation._getV3SpanAttributes(
          ns,
          server,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ops[0],
          operationName
        );
        const spanName = instrumentation._spanNameFromAttrs(attributes);
        const span = instrumentation.tracer.startSpan(spanName, {
          kind: api.SpanKind.CLIENT,
          attributes
        });
        const patchedCallback = instrumentation._patchEnd(span, resultHandler);
        if (typeof options === "function") {
          return original.call(this, server, ns, ops, patchedCallback);
        } else {
          return original.call(this, server, ns, ops, options, patchedCallback);
        }
      };
    };
  }
  /** Creates spans for command operation */
  _getV3PatchCommand() {
    const instrumentation = this;
    return (original) => {
      return function patchedServerCommand(server, ns, cmd, options, callback) {
        const currentSpan = api.trace.getSpan(api.context.active());
        const skipInstrumentation = instrumentation._checkSkipInstrumentation(currentSpan);
        const resultHandler = typeof options === "function" ? options : callback;
        if (skipInstrumentation || typeof resultHandler !== "function" || typeof cmd !== "object") {
          if (typeof options === "function") {
            return original.call(this, server, ns, cmd, options);
          } else {
            return original.call(this, server, ns, cmd, options, callback);
          }
        }
        const commandType = MongoDBInstrumentation._getCommandType(cmd);
        const operationName = commandType === internalTypes.MongodbCommandType.UNKNOWN ? void 0 : commandType;
        const attributes = instrumentation._getV3SpanAttributes(ns, server, cmd, operationName);
        const spanName = instrumentation._spanNameFromAttrs(attributes);
        const span = instrumentation.tracer.startSpan(spanName, {
          kind: api.SpanKind.CLIENT,
          attributes
        });
        const patchedCallback = instrumentation._patchEnd(span, resultHandler);
        if (typeof options === "function") {
          return original.call(this, server, ns, cmd, patchedCallback);
        } else {
          return original.call(this, server, ns, cmd, options, patchedCallback);
        }
      };
    };
  }
  /** Creates spans for command operation */
  _getV4PatchCommandCallback() {
    const instrumentation = this;
    return (original) => {
      return function patchedV4ServerCommand(ns, cmd, options, callback) {
        const currentSpan = api.trace.getSpan(api.context.active());
        const skipInstrumentation = instrumentation._checkSkipInstrumentation(currentSpan);
        const resultHandler = callback;
        const commandType = Object.keys(cmd)[0];
        if (typeof cmd !== "object" || cmd.ismaster || cmd.hello) {
          return original.call(this, ns, cmd, options, callback);
        }
        let span = void 0;
        if (!skipInstrumentation) {
          const attributes = instrumentation._getV4SpanAttributes(this, ns, cmd, commandType);
          const spanName = instrumentation._spanNameFromAttrs(attributes);
          span = instrumentation.tracer.startSpan(spanName, {
            kind: api.SpanKind.CLIENT,
            attributes
          });
        }
        const patchedCallback = instrumentation._patchEnd(span, resultHandler, this.id, commandType);
        return original.call(this, ns, cmd, options, patchedCallback);
      };
    };
  }
  _getV4PatchCommandPromise() {
    const instrumentation = this;
    return (original) => {
      return function patchedV4ServerCommand(...args) {
        const [ns, cmd] = args;
        const currentSpan = api.trace.getSpan(api.context.active());
        const skipInstrumentation = instrumentation._checkSkipInstrumentation(currentSpan);
        const commandType = Object.keys(cmd)[0];
        const resultHandler = () => void 0;
        if (typeof cmd !== "object" || cmd.ismaster || cmd.hello) {
          return original.apply(this, args);
        }
        let span = void 0;
        if (!skipInstrumentation) {
          const attributes = instrumentation._getV4SpanAttributes(this, ns, cmd, commandType);
          const spanName = instrumentation._spanNameFromAttrs(attributes);
          span = instrumentation.tracer.startSpan(spanName, {
            kind: api.SpanKind.CLIENT,
            attributes
          });
        }
        const patchedCallback = instrumentation._patchEnd(span, resultHandler, this.id, commandType);
        const result = original.apply(this, args);
        result.then(
          (res) => patchedCallback(null, res),
          (err) => patchedCallback(err)
        );
        return result;
      };
    };
  }
  /** Creates spans for find operation */
  _getV3PatchFind() {
    const instrumentation = this;
    return (original) => {
      return function patchedServerCommand(server, ns, cmd, cursorState, options, callback) {
        const currentSpan = api.trace.getSpan(api.context.active());
        const skipInstrumentation = instrumentation._checkSkipInstrumentation(currentSpan);
        const resultHandler = typeof options === "function" ? options : callback;
        if (skipInstrumentation || typeof resultHandler !== "function" || typeof cmd !== "object") {
          if (typeof options === "function") {
            return original.call(this, server, ns, cmd, cursorState, options);
          } else {
            return original.call(this, server, ns, cmd, cursorState, options, callback);
          }
        }
        const attributes = instrumentation._getV3SpanAttributes(ns, server, cmd, "find");
        const spanName = instrumentation._spanNameFromAttrs(attributes);
        const span = instrumentation.tracer.startSpan(spanName, {
          kind: api.SpanKind.CLIENT,
          attributes
        });
        const patchedCallback = instrumentation._patchEnd(span, resultHandler);
        if (typeof options === "function") {
          return original.call(this, server, ns, cmd, cursorState, patchedCallback);
        } else {
          return original.call(this, server, ns, cmd, cursorState, options, patchedCallback);
        }
      };
    };
  }
  /** Creates spans for find operation */
  _getV3PatchCursor() {
    const instrumentation = this;
    return (original) => {
      return function patchedServerCommand(server, ns, cursorState, batchSize, options, callback) {
        const currentSpan = api.trace.getSpan(api.context.active());
        const skipInstrumentation = instrumentation._checkSkipInstrumentation(currentSpan);
        const resultHandler = typeof options === "function" ? options : callback;
        if (skipInstrumentation || typeof resultHandler !== "function") {
          if (typeof options === "function") {
            return original.call(this, server, ns, cursorState, batchSize, options);
          } else {
            return original.call(this, server, ns, cursorState, batchSize, options, callback);
          }
        }
        const attributes = instrumentation._getV3SpanAttributes(ns, server, cursorState.cmd, "getMore");
        const spanName = instrumentation._spanNameFromAttrs(attributes);
        const span = instrumentation.tracer.startSpan(spanName, {
          kind: api.SpanKind.CLIENT,
          attributes
        });
        const patchedCallback = instrumentation._patchEnd(span, resultHandler);
        if (typeof options === "function") {
          return original.call(this, server, ns, cursorState, batchSize, patchedCallback);
        } else {
          return original.call(this, server, ns, cursorState, batchSize, options, patchedCallback);
        }
      };
    };
  }
  /**
   * Get the mongodb command type from the object.
   * @param command Internal mongodb command object
   */
  static _getCommandType(command) {
    if (command.createIndexes !== void 0) {
      return internalTypes.MongodbCommandType.CREATE_INDEXES;
    } else if (command.findandmodify !== void 0) {
      return internalTypes.MongodbCommandType.FIND_AND_MODIFY;
    } else if (command.ismaster !== void 0) {
      return internalTypes.MongodbCommandType.IS_MASTER;
    } else if (command.count !== void 0) {
      return internalTypes.MongodbCommandType.COUNT;
    } else if (command.aggregate !== void 0) {
      return internalTypes.MongodbCommandType.AGGREGATE;
    } else {
      return internalTypes.MongodbCommandType.UNKNOWN;
    }
  }
  /**
   * Determine a span's attributes by fetching related metadata from the context
   * @param connectionCtx mongodb internal connection context
   * @param ns mongodb namespace
   * @param command mongodb internal representation of a command
   */
  _getV4SpanAttributes(connectionCtx, ns, command, operation) {
    let host, port;
    if (connectionCtx) {
      const hostParts = typeof connectionCtx.address === "string" ? connectionCtx.address.split(":") : "";
      if (hostParts.length === 2) {
        host = hostParts[0];
        port = hostParts[1];
      }
    }
    let commandObj;
    if (command?.documents && command.documents[0]) {
      commandObj = command.documents[0];
    } else if (command?.cursors) {
      commandObj = command.cursors;
    } else {
      commandObj = command;
    }
    return this._getSpanAttributes(ns.db, ns.collection, host, port, commandObj, operation);
  }
  /**
   * Determine a span's attributes by fetching related metadata from the context
   * @param ns mongodb namespace
   * @param topology mongodb internal representation of the network topology
   * @param command mongodb internal representation of a command
   */
  _getV3SpanAttributes(ns, topology, command, operation) {
    let host;
    let port;
    if (topology && topology.s) {
      host = topology.s.options?.host ?? topology.s.host;
      port = (topology.s.options?.port ?? topology.s.port)?.toString();
      if (host == null || port == null) {
        const address = topology.description?.address;
        if (address) {
          const addressSegments = address.split(":");
          host = addressSegments[0];
          port = addressSegments[1];
        }
      }
    }
    const [dbName, dbCollection] = ns.toString().split(".");
    const commandObj = command?.query ?? command?.q ?? command;
    return this._getSpanAttributes(dbName, dbCollection, host, port, commandObj, operation);
  }
  _getSpanAttributes(dbName, dbCollection, host, port, commandObj, operation) {
    const attributes = {};
    if (this._dbSemconvStability & instrumentation.SemconvStability.OLD) {
      attributes[semconv.ATTR_DB_SYSTEM] = semconv.DB_SYSTEM_VALUE_MONGODB;
      attributes[semconv.ATTR_DB_NAME] = dbName;
      attributes[semconv.ATTR_DB_MONGODB_COLLECTION] = dbCollection;
      attributes[semconv.ATTR_DB_OPERATION] = operation;
      attributes[semconv.ATTR_DB_CONNECTION_STRING] = `mongodb://${host}:${port}/${dbName}`;
    }
    if (this._dbSemconvStability & instrumentation.SemconvStability.STABLE) {
      attributes[semanticConventions.ATTR_DB_SYSTEM_NAME] = semconv.DB_SYSTEM_NAME_VALUE_MONGODB;
      attributes[semanticConventions.ATTR_DB_NAMESPACE] = dbName;
      attributes[semanticConventions.ATTR_DB_OPERATION_NAME] = operation;
      attributes[semanticConventions.ATTR_DB_COLLECTION_NAME] = dbCollection;
    }
    if (host && port) {
      if (this._netSemconvStability & instrumentation.SemconvStability.OLD) {
        attributes[semconv.ATTR_NET_PEER_NAME] = host;
      }
      if (this._netSemconvStability & instrumentation.SemconvStability.STABLE) {
        attributes[semanticConventions.ATTR_SERVER_ADDRESS] = host;
      }
      const portNumber = parseInt(port, 10);
      if (!isNaN(portNumber)) {
        if (this._netSemconvStability & instrumentation.SemconvStability.OLD) {
          attributes[semconv.ATTR_NET_PEER_PORT] = portNumber;
        }
        if (this._netSemconvStability & instrumentation.SemconvStability.STABLE) {
          attributes[semanticConventions.ATTR_SERVER_PORT] = portNumber;
        }
      }
    }
    if (commandObj) {
      const { dbStatementSerializer: configDbStatementSerializer } = this.getConfig();
      const dbStatementSerializer = typeof configDbStatementSerializer === "function" ? configDbStatementSerializer : this._defaultDbStatementSerializer.bind(this);
      instrumentation.safeExecuteInTheMiddle(
        () => {
          const query = dbStatementSerializer(commandObj);
          if (this._dbSemconvStability & instrumentation.SemconvStability.OLD) {
            attributes[semconv.ATTR_DB_STATEMENT] = query;
          }
          if (this._dbSemconvStability & instrumentation.SemconvStability.STABLE) {
            attributes[semanticConventions.ATTR_DB_QUERY_TEXT] = query;
          }
        },
        (err) => {
          if (err) {
            this._diag.error("Error running dbStatementSerializer hook", err);
          }
        },
        true
      );
    }
    return attributes;
  }
  _spanNameFromAttrs(attributes) {
    let spanName;
    if (this._dbSemconvStability & instrumentation.SemconvStability.STABLE) {
      spanName = [attributes[semanticConventions.ATTR_DB_OPERATION_NAME], attributes[semanticConventions.ATTR_DB_COLLECTION_NAME]].filter((attr) => attr).join(" ") || semconv.DB_SYSTEM_NAME_VALUE_MONGODB;
    } else {
      spanName = `mongodb.${attributes[semconv.ATTR_DB_OPERATION] || "command"}`;
    }
    return spanName;
  }
  _getDefaultDbStatementReplacer() {
    const seen = /* @__PURE__ */ new WeakSet();
    return (_key, value) => {
      if (typeof value !== "object" || !value) return "?";
      if (seen.has(value)) return "[Circular]";
      seen.add(value);
      return value;
    };
  }
  _defaultDbStatementSerializer(commandObj) {
    const { enhancedDatabaseReporting } = this.getConfig();
    if (enhancedDatabaseReporting) {
      return JSON.stringify(commandObj);
    }
    return JSON.stringify(commandObj, this._getDefaultDbStatementReplacer());
  }
  /**
   * Triggers the response hook in case it is defined.
   * @param span The span to add the results to.
   * @param result The command result
   */
  _handleExecutionResult(span, result) {
    const { responseHook } = this.getConfig();
    if (typeof responseHook === "function") {
      instrumentation.safeExecuteInTheMiddle(
        () => {
          responseHook(span, { data: result });
        },
        (err) => {
          if (err) {
            this._diag.error("Error running response hook", err);
          }
        },
        true
      );
    }
  }
  /**
   * Ends a created span.
   * @param span The created span to end.
   * @param resultHandler A callback function.
   * @param connectionId: The connection ID of the Command response.
   */
  _patchEnd(span, resultHandler, connectionId, commandType) {
    const activeContext = api.context.active();
    const instrumentation = this;
    let spanEnded = false;
    return function patchedEnd(...args) {
      if (!spanEnded) {
        spanEnded = true;
        const error = args[0];
        if (span) {
          if (error instanceof Error) {
            span.setStatus({
              code: api.SpanStatusCode.ERROR,
              message: error.message
            });
          } else {
            const result = args[1];
            instrumentation._handleExecutionResult(span, result);
          }
          span.end();
        }
        if (commandType === "endSessions") {
          instrumentation._connCountAdd(-1, instrumentation._poolName, "idle");
        }
      }
      return api.context.with(activeContext, () => {
        return resultHandler.apply(this, args);
      });
    };
  }
  setPoolName(options) {
    const host = options.hostAddress?.host;
    const port = options.hostAddress?.port;
    const database = options.dbName;
    const poolName = `mongodb://${host}:${port}/${database}`;
    this._poolName = poolName;
  }
  _checkSkipInstrumentation(currentSpan) {
    const requireParentSpan = this.getConfig().requireParentSpan;
    const hasNoParentSpan = currentSpan === void 0;
    return requireParentSpan === true && hasNoParentSpan;
  }
}

exports.MongoDBInstrumentation = MongoDBInstrumentation;
//# sourceMappingURL=instrumentation.js.map
