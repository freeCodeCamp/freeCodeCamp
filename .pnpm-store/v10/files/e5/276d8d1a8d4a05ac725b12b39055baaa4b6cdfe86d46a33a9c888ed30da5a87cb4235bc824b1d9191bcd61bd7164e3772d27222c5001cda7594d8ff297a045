/**
 * The name of the connection pool; unique within the instrumented application. In case the connection pool implementation doesn't provide a name, instrumentation **SHOULD** use a combination of parameters that would make the name unique, for example, combining attributes `server.address`, `server.port`, and `db.namespace`, formatted as `server.address:server.port/db.namespace`. Instrumentations that generate connection pool name following different patterns **SHOULD** document it.
 *
 * @example myDataSource
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const ATTR_DB_CLIENT_CONNECTION_POOL_NAME: "db.client.connection.pool.name";
/**
 * The state of a connection in the pool
 *
 * @example idle
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const ATTR_DB_CLIENT_CONNECTION_STATE: "db.client.connection.state";
/**
 * Deprecated, use `server.address`, `server.port` attributes instead.
 *
 * @example "Server=(localdb)\\v11.0;Integrated Security=true;"
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 *
 * @deprecated Replaced by `server.address` and `server.port`.
 */
export declare const ATTR_DB_CONNECTION_STRING: "db.connection_string";
/**
 * Deprecated, use `db.namespace` instead.
 *
 * @example customers
 * @example main
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 *
 * @deprecated Replaced by `db.namespace`.
 */
export declare const ATTR_DB_NAME: "db.name";
/**
 * The database statement being executed.
 *
 * @example SELECT * FROM wuser_table
 * @example SET mykey "WuValue"
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 *
 * @deprecated Replaced by `db.query.text`.
 */
export declare const ATTR_DB_STATEMENT: "db.statement";
/**
 * Deprecated, use `db.system.name` instead.
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 *
 * @deprecated Replaced by `db.system.name`.
 */
export declare const ATTR_DB_SYSTEM: "db.system";
/**
 * Deprecated, no replacement at this time.
 *
 * @example readonly_user
 * @example reporting_user
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 *
 * @deprecated Removed, no replacement at this time.
 */
export declare const ATTR_DB_USER: "db.user";
/**
 * Deprecated, use `server.address` on client spans and `client.address` on server spans.
 *
 * @example example.com
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 *
 * @deprecated Replaced by `server.address` on client spans and `client.address` on server spans.
 */
export declare const ATTR_NET_PEER_NAME: "net.peer.name";
/**
 * Deprecated, use `server.port` on client spans and `client.port` on server spans.
 *
 * @example 8080
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 *
 * @deprecated Replaced by `server.port` on client spans and `client.port` on server spans.
 */
export declare const ATTR_NET_PEER_PORT: "net.peer.port";
/**
 * Enum value "idle" for attribute {@link ATTR_DB_CLIENT_CONNECTION_STATE}.
 */
export declare const DB_CLIENT_CONNECTION_STATE_VALUE_IDLE: "idle";
/**
 * Enum value "used" for attribute {@link ATTR_DB_CLIENT_CONNECTION_STATE}.
 */
export declare const DB_CLIENT_CONNECTION_STATE_VALUE_USED: "used";
/**
 * Enum value "postgresql" for attribute {@link ATTR_DB_SYSTEM}.
 */
export declare const DB_SYSTEM_VALUE_POSTGRESQL: "postgresql";
/**
 * The number of connections that are currently in state described by the `state` attribute
 *
 * @experimental This metric is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const METRIC_DB_CLIENT_CONNECTION_COUNT: "db.client.connection.count";
/**
 * The number of current pending requests for an open connection
 *
 * @experimental This metric is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const METRIC_DB_CLIENT_CONNECTION_PENDING_REQUESTS: "db.client.connection.pending_requests";
//# sourceMappingURL=semconv.d.ts.map