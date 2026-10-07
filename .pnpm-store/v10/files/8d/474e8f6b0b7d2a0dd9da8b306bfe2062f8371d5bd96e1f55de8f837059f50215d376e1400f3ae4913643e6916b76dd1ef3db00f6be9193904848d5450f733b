/**
 * The full invoked ARN as provided on the `Context` passed to the function (`Lambda-Runtime-Invoked-Function-Arn` header on the `/runtime/invocation/next` applicable).
 *
 * Note: This may be different from `faas.id` if an alias is involved.
 *
 * @deprecated Use ATTR_AWS_LAMBDA_INVOKED_ARN in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_AWS_LAMBDA_INVOKED_ARN = "aws.lambda.invoked_arn";
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 *
 * @deprecated Use ATTR_DB_SYSTEM in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_DB_SYSTEM = "db.system";
/**
 * The connection string used to connect to the database. It is recommended to remove embedded credentials.
 *
 * @deprecated Use ATTR_DB_CONNECTION_STRING in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_DB_CONNECTION_STRING = "db.connection_string";
/**
 * Username for accessing the database.
 *
 * @deprecated Use ATTR_DB_USER in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_DB_USER = "db.user";
/**
 * The fully-qualified class name of the [Java Database Connectivity (JDBC)](https://docs.oracle.com/javase/8/docs/technotes/guides/jdbc/) driver used to connect.
 *
 * @deprecated Use ATTR_DB_JDBC_DRIVER_CLASSNAME in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_DB_JDBC_DRIVER_CLASSNAME = "db.jdbc.driver_classname";
/**
 * If no [tech-specific attribute](#call-level-attributes-for-specific-technologies) is defined, this attribute is used to report the name of the database being accessed. For commands that switch the database, this should be set to the target database (even if the command fails).
 *
 * Note: In some SQL databases, the database name to be used is called &#34;schema name&#34;.
 *
 * @deprecated Use ATTR_DB_NAME in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_DB_NAME = "db.name";
/**
 * The database statement being executed.
 *
 * Note: The value may be sanitized to exclude sensitive information.
 *
 * @deprecated Use ATTR_DB_STATEMENT in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_DB_STATEMENT = "db.statement";
/**
 * The name of the operation being executed, e.g. the [MongoDB command name](https://docs.mongodb.com/manual/reference/command/#database-operations) such as `findAndModify`, or the SQL keyword.
 *
 * Note: When setting this to an SQL keyword, it is not recommended to attempt any client-side parsing of `db.statement` just to get this property, but it should be set if the operation name is provided by the library being instrumented. If the SQL statement has an ambiguous operation, or performs more than one operation, this value may be omitted.
 *
 * @deprecated Use ATTR_DB_OPERATION in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_DB_OPERATION = "db.operation";
/**
 * The Microsoft SQL Server [instance name](https://docs.microsoft.com/en-us/sql/connect/jdbc/building-the-connection-url?view=sql-server-ver15) connecting to. This name is used to determine the port of a named instance.
 *
 * Note: If setting a `db.mssql.instance_name`, `net.peer.port` is no longer required (but still recommended if non-standard).
 *
 * @deprecated Use ATTR_DB_MSSQL_INSTANCE_NAME in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_DB_MSSQL_INSTANCE_NAME = "db.mssql.instance_name";
/**
 * The name of the keyspace being accessed. To be used instead of the generic `db.name` attribute.
 *
 * @deprecated Use ATTR_DB_NAME in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_DB_CASSANDRA_KEYSPACE = "db.cassandra.keyspace";
/**
 * The fetch size used for paging, i.e. how many rows will be returned at once.
 *
 * @deprecated Use ATTR_DB_CASSANDRA_PAGE_SIZE in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_DB_CASSANDRA_PAGE_SIZE = "db.cassandra.page_size";
/**
 * The consistency level of the query. Based on consistency values from [CQL](https://docs.datastax.com/en/cassandra-oss/3.0/cassandra/dml/dmlConfigConsistency.html).
 *
 * @deprecated Use ATTR_DB_CASSANDRA_CONSISTENCY_LEVEL in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_DB_CASSANDRA_CONSISTENCY_LEVEL = "db.cassandra.consistency_level";
/**
 * The name of the primary table that the operation is acting upon, including the schema name (if applicable).
 *
 * Note: This mirrors the db.sql.table attribute but references cassandra rather than sql. It is not recommended to attempt any client-side parsing of `db.statement` just to get this property, but it should be set if it is provided by the library being instrumented. If the operation is acting upon an anonymous table, or more than one table, this value MUST NOT be set.
 *
 * @deprecated Use ATTR_DB_CASSANDRA_TABLE in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_DB_CASSANDRA_TABLE = "db.cassandra.table";
/**
 * Whether or not the query is idempotent.
 *
 * @deprecated Use ATTR_DB_CASSANDRA_IDEMPOTENCE in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_DB_CASSANDRA_IDEMPOTENCE = "db.cassandra.idempotence";
/**
 * The number of times a query was speculatively executed. Not set or `0` if the query was not executed speculatively.
 *
 * @deprecated Use ATTR_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT = "db.cassandra.speculative_execution_count";
/**
 * The ID of the coordinating node for a query.
 *
 * @deprecated Use ATTR_DB_CASSANDRA_COORDINATOR_ID in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_DB_CASSANDRA_COORDINATOR_ID = "db.cassandra.coordinator.id";
/**
 * The data center of the coordinating node for a query.
 *
 * @deprecated Use ATTR_DB_CASSANDRA_COORDINATOR_DC in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_DB_CASSANDRA_COORDINATOR_DC = "db.cassandra.coordinator.dc";
/**
 * The [HBase namespace](https://hbase.apache.org/book.html#_namespace) being accessed. To be used instead of the generic `db.name` attribute.
 *
 * @deprecated Use ATTR_DB_NAME in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_DB_HBASE_NAMESPACE = "db.hbase.namespace";
/**
 * The index of the database being accessed as used in the [`SELECT` command](https://redis.io/commands/select), provided as an integer. To be used instead of the generic `db.name` attribute.
 *
 * @deprecated Use ATTR_DB_REDIS_DATABASE_INDEX in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_DB_REDIS_DATABASE_INDEX = "db.redis.database_index";
/**
 * The collection being accessed within the database stated in `db.name`.
 *
 * @deprecated Use ATTR_DB_MONGODB_COLLECTION in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_DB_MONGODB_COLLECTION = "db.mongodb.collection";
/**
 * The name of the primary table that the operation is acting upon, including the schema name (if applicable).
 *
 * Note: It is not recommended to attempt any client-side parsing of `db.statement` just to get this property, but it should be set if it is provided by the library being instrumented. If the operation is acting upon an anonymous table, or more than one table, this value MUST NOT be set.
 *
 * @deprecated Use ATTR_DB_SQL_TABLE in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_DB_SQL_TABLE = "db.sql.table";
/**
 * The type of the exception (its fully-qualified class name, if applicable). The dynamic type of the exception should be preferred over the static type in languages that support it.
 *
 * @deprecated Use ATTR_EXCEPTION_TYPE.
 */
export declare const SEMATTRS_EXCEPTION_TYPE = "exception.type";
/**
 * The exception message.
 *
 * @deprecated Use ATTR_EXCEPTION_MESSAGE.
 */
export declare const SEMATTRS_EXCEPTION_MESSAGE = "exception.message";
/**
 * A stacktrace as a string in the natural representation for the language runtime. The representation is to be determined and documented by each language SIG.
 *
 * @deprecated Use ATTR_EXCEPTION_STACKTRACE.
 */
export declare const SEMATTRS_EXCEPTION_STACKTRACE = "exception.stacktrace";
/**
* SHOULD be set to true if the exception event is recorded at a point where it is known that the exception is escaping the scope of the span.
*
* Note: An exception is considered to have escaped (or left) the scope of a span,
if that span is ended while the exception is still logically &#34;in flight&#34;.
This may be actually &#34;in flight&#34; in some languages (e.g. if the exception
is passed to a Context manager&#39;s `__exit__` method in Python) but will
usually be caught at the point of recording the exception in most languages.

It is usually not possible to determine at the point where an exception is thrown
whether it will escape the scope of a span.
However, it is trivial to know that an exception
will escape, if one checks for an active exception just before ending the span,
as done in the [example above](#exception-end-example).

It follows that an exception may still escape the scope of the span
even if the `exception.escaped` attribute was not set or set to false,
since the event might have been recorded at a time where it was not
clear whether the exception will escape.
*
* @deprecated Use ATTR_EXCEPTION_ESCAPED.
*/
export declare const SEMATTRS_EXCEPTION_ESCAPED = "exception.escaped";
/**
 * Type of the trigger on which the function is executed.
 *
 * @deprecated Use ATTR_FAAS_TRIGGER in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_FAAS_TRIGGER = "faas.trigger";
/**
 * The execution ID of the current function execution.
 *
 * @deprecated Use ATTR_FAAS_INVOCATION_ID in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_FAAS_EXECUTION = "faas.execution";
/**
 * The name of the source on which the triggering operation was performed. For example, in Cloud Storage or S3 corresponds to the bucket name, and in Cosmos DB to the database name.
 *
 * @deprecated Use ATTR_FAAS_DOCUMENT_COLLECTION in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_FAAS_DOCUMENT_COLLECTION = "faas.document.collection";
/**
 * Describes the type of the operation that was performed on the data.
 *
 * @deprecated Use ATTR_FAAS_DOCUMENT_OPERATION in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_FAAS_DOCUMENT_OPERATION = "faas.document.operation";
/**
 * A string containing the time when the data was accessed in the [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format expressed in [UTC](https://www.w3.org/TR/NOTE-datetime).
 *
 * @deprecated Use ATTR_FAAS_DOCUMENT_TIME in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_FAAS_DOCUMENT_TIME = "faas.document.time";
/**
 * The document name/table subjected to the operation. For example, in Cloud Storage or S3 is the name of the file, and in Cosmos DB the table name.
 *
 * @deprecated Use ATTR_FAAS_DOCUMENT_NAME in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_FAAS_DOCUMENT_NAME = "faas.document.name";
/**
 * A string containing the function invocation time in the [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format expressed in [UTC](https://www.w3.org/TR/NOTE-datetime).
 *
 * @deprecated Use ATTR_FAAS_TIME in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_FAAS_TIME = "faas.time";
/**
 * A string containing the schedule period as [Cron Expression](https://docs.oracle.com/cd/E12058_01/doc/doc.1014/e12030/cron_expressions.htm).
 *
 * @deprecated Use ATTR_FAAS_CRON in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_FAAS_CRON = "faas.cron";
/**
 * A boolean that is true if the serverless function is executed for the first time (aka cold-start).
 *
 * @deprecated Use ATTR_FAAS_COLDSTART in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_FAAS_COLDSTART = "faas.coldstart";
/**
 * The name of the invoked function.
 *
 * Note: SHOULD be equal to the `faas.name` resource attribute of the invoked function.
 *
 * @deprecated Use ATTR_FAAS_INVOKED_NAME in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_FAAS_INVOKED_NAME = "faas.invoked_name";
/**
 * The cloud provider of the invoked function.
 *
 * Note: SHOULD be equal to the `cloud.provider` resource attribute of the invoked function.
 *
 * @deprecated Use ATTR_FAAS_INVOKED_PROVIDER in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_FAAS_INVOKED_PROVIDER = "faas.invoked_provider";
/**
 * The cloud region of the invoked function.
 *
 * Note: SHOULD be equal to the `cloud.region` resource attribute of the invoked function.
 *
 * @deprecated Use ATTR_FAAS_INVOKED_REGION in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_FAAS_INVOKED_REGION = "faas.invoked_region";
/**
 * Transport protocol used. See note below.
 *
 * @deprecated Use ATTR_NET_TRANSPORT in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_NET_TRANSPORT = "net.transport";
/**
 * Remote address of the peer (dotted decimal for IPv4 or [RFC5952](https://tools.ietf.org/html/rfc5952) for IPv6).
 *
 * @deprecated Use ATTR_NET_PEER_IP in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_NET_PEER_IP = "net.peer.ip";
/**
 * Remote port number.
 *
 * @deprecated Use ATTR_NET_PEER_PORT in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_NET_PEER_PORT = "net.peer.port";
/**
 * Remote hostname or similar, see note below.
 *
 * @deprecated Use ATTR_NET_PEER_NAME in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_NET_PEER_NAME = "net.peer.name";
/**
 * Like `net.peer.ip` but for the host IP. Useful in case of a multi-IP host.
 *
 * @deprecated Use ATTR_NET_HOST_IP in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_NET_HOST_IP = "net.host.ip";
/**
 * Like `net.peer.port` but for the host port.
 *
 * @deprecated Use ATTR_NET_HOST_PORT in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_NET_HOST_PORT = "net.host.port";
/**
 * Local hostname or similar, see note below.
 *
 * @deprecated Use ATTR_NET_HOST_NAME in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_NET_HOST_NAME = "net.host.name";
/**
 * The internet connection type currently being used by the host.
 *
 * @deprecated Use ATTR_NETWORK_CONNECTION_TYPE in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_NET_HOST_CONNECTION_TYPE = "net.host.connection.type";
/**
 * This describes more details regarding the connection.type. It may be the type of cell technology connection, but it could be used for describing details about a wifi connection.
 *
 * @deprecated Use ATTR_NETWORK_CONNECTION_SUBTYPE in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_NET_HOST_CONNECTION_SUBTYPE = "net.host.connection.subtype";
/**
 * The name of the mobile carrier.
 *
 * @deprecated Use ATTR_NETWORK_CARRIER_NAME in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_NET_HOST_CARRIER_NAME = "net.host.carrier.name";
/**
 * The mobile carrier country code.
 *
 * @deprecated Use ATTR_NETWORK_CARRIER_MCC in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_NET_HOST_CARRIER_MCC = "net.host.carrier.mcc";
/**
 * The mobile carrier network code.
 *
 * @deprecated Use ATTR_NETWORK_CARRIER_MNC in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_NET_HOST_CARRIER_MNC = "net.host.carrier.mnc";
/**
 * The ISO 3166-1 alpha-2 2-character country code associated with the mobile carrier network.
 *
 * @deprecated Use ATTR_NETWORK_CARRIER_ICC in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_NET_HOST_CARRIER_ICC = "net.host.carrier.icc";
/**
 * The [`service.name`](../../resource/semantic_conventions/README.md#service) of the remote service. SHOULD be equal to the actual `service.name` resource attribute of the remote service if any.
 *
 * @deprecated Use ATTR_PEER_SERVICE in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_PEER_SERVICE = "peer.service";
/**
 * Username or client_id extracted from the access token or [Authorization](https://tools.ietf.org/html/rfc7235#section-4.2) header in the inbound request from outside the system.
 *
 * @deprecated Use ATTR_ENDUSER_ID in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_ENDUSER_ID = "enduser.id";
/**
 * Actual/assumed role the client is making the request under extracted from token or application security context.
 *
 * @deprecated Use ATTR_ENDUSER_ROLE in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_ENDUSER_ROLE = "enduser.role";
/**
 * Scopes or granted authorities the client currently possesses extracted from token or application security context. The value would come from the scope associated with an [OAuth 2.0 Access Token](https://tools.ietf.org/html/rfc6749#section-3.3) or an attribute value in a [SAML 2.0 Assertion](http://docs.oasis-open.org/security/saml/Post2.0/sstc-saml-tech-overview-2.0.html).
 *
 * @deprecated Use ATTR_ENDUSER_SCOPE in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_ENDUSER_SCOPE = "enduser.scope";
/**
 * Current &#34;managed&#34; thread ID (as opposed to OS thread ID).
 *
 * @deprecated Use ATTR_THREAD_ID in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_THREAD_ID = "thread.id";
/**
 * Current thread name.
 *
 * @deprecated Use ATTR_THREAD_NAME in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_THREAD_NAME = "thread.name";
/**
 * The method or function name, or equivalent (usually rightmost part of the code unit&#39;s name).
 *
 * @deprecated Use ATTR_CODE_FUNCTION in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_CODE_FUNCTION = "code.function";
/**
 * The &#34;namespace&#34; within which `code.function` is defined. Usually the qualified class or module name, such that `code.namespace` + some separator + `code.function` form a unique identifier for the code unit.
 *
 * @deprecated Use ATTR_CODE_NAMESPACE in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_CODE_NAMESPACE = "code.namespace";
/**
 * The source code file name that identifies the code unit as uniquely as possible (preferably an absolute file path).
 *
 * @deprecated Use ATTR_CODE_FILEPATH in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_CODE_FILEPATH = "code.filepath";
/**
 * The line number in `code.filepath` best representing the operation. It SHOULD point within the code unit named in `code.function`.
 *
 * @deprecated Use ATTR_CODE_LINENO in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_CODE_LINENO = "code.lineno";
/**
 * HTTP request method.
 *
 * @deprecated Use ATTR_HTTP_METHOD in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_HTTP_METHOD = "http.method";
/**
 * Full HTTP request URL in the form `scheme://host[:port]/path?query[#fragment]`. Usually the fragment is not transmitted over HTTP, but if it is known, it should be included nevertheless.
 *
 * Note: `http.url` MUST NOT contain credentials passed via URL in form of `https://username:password@www.example.com/`. In such case the attribute&#39;s value should be `https://www.example.com/`.
 *
 * @deprecated Use ATTR_HTTP_URL in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_HTTP_URL = "http.url";
/**
 * The full request target as passed in a HTTP request line or equivalent.
 *
 * @deprecated Use ATTR_HTTP_TARGET in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_HTTP_TARGET = "http.target";
/**
 * The value of the [HTTP host header](https://tools.ietf.org/html/rfc7230#section-5.4). An empty Host header should also be reported, see note.
 *
 * Note: When the header is present but empty the attribute SHOULD be set to the empty string. Note that this is a valid situation that is expected in certain cases, according the aforementioned [section of RFC 7230](https://tools.ietf.org/html/rfc7230#section-5.4). When the header is not set the attribute MUST NOT be set.
 *
 * @deprecated Use ATTR_HTTP_HOST in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_HTTP_HOST = "http.host";
/**
 * The URI scheme identifying the used protocol.
 *
 * @deprecated Use ATTR_HTTP_SCHEME in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_HTTP_SCHEME = "http.scheme";
/**
 * [HTTP response status code](https://tools.ietf.org/html/rfc7231#section-6).
 *
 * @deprecated Use ATTR_HTTP_STATUS_CODE in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_HTTP_STATUS_CODE = "http.status_code";
/**
 * Kind of HTTP protocol used.
 *
 * Note: If `net.transport` is not specified, it can be assumed to be `IP.TCP` except if `http.flavor` is `QUIC`, in which case `IP.UDP` is assumed.
 *
 * @deprecated Use ATTR_HTTP_FLAVOR in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_HTTP_FLAVOR = "http.flavor";
/**
 * Value of the [HTTP User-Agent](https://tools.ietf.org/html/rfc7231#section-5.5.3) header sent by the client.
 *
 * @deprecated Use ATTR_HTTP_USER_AGENT in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_HTTP_USER_AGENT = "http.user_agent";
/**
 * The size of the request payload body in bytes. This is the number of bytes transferred excluding headers and is often, but not always, present as the [Content-Length](https://tools.ietf.org/html/rfc7230#section-3.3.2) header. For requests using transport encoding, this should be the compressed size.
 *
 * @deprecated Use ATTR_HTTP_REQUEST_CONTENT_LENGTH in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH = "http.request_content_length";
/**
 * The size of the uncompressed request payload body after transport decoding. Not set if transport encoding not used.
 *
 * @deprecated Use ATTR_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED = "http.request_content_length_uncompressed";
/**
 * The size of the response payload body in bytes. This is the number of bytes transferred excluding headers and is often, but not always, present as the [Content-Length](https://tools.ietf.org/html/rfc7230#section-3.3.2) header. For requests using transport encoding, this should be the compressed size.
 *
 * @deprecated Use ATTR_HTTP_RESPONSE_CONTENT_LENGTH in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH = "http.response_content_length";
/**
 * The size of the uncompressed response payload body after transport decoding. Not set if transport encoding not used.
 *
 * @deprecated Use ATTR_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED = "http.response_content_length_uncompressed";
/**
 * The primary server name of the matched virtual host. This should be obtained via configuration. If no such configuration can be obtained, this attribute MUST NOT be set ( `net.host.name` should be used instead).
 *
 * Note: `http.url` is usually not readily available on the server side but would have to be assembled in a cumbersome and sometimes lossy process from other information (see e.g. open-telemetry/opentelemetry-python/pull/148). It is thus preferred to supply the raw data that is available.
 *
 * @deprecated Use ATTR_HTTP_SERVER_NAME in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_HTTP_SERVER_NAME = "http.server_name";
/**
 * The matched route (path template).
 *
 * @deprecated Use ATTR_HTTP_ROUTE.
 */
export declare const SEMATTRS_HTTP_ROUTE = "http.route";
/**
* The IP address of the original client behind all proxies, if known (e.g. from [X-Forwarded-For](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For)).
*
* Note: This is not necessarily the same as `net.peer.ip`, which would
identify the network-level peer, which may be a proxy.

This attribute should be set when a source of information different
from the one used for `net.peer.ip`, is available even if that other
source just confirms the same value as `net.peer.ip`.
Rationale: For `net.peer.ip`, one typically does not know if it
comes from a proxy, reverse proxy, or the actual client. Setting
`http.client_ip` when it&#39;s the same as `net.peer.ip` means that
one is at least somewhat confident that the address is not that of
the closest proxy.
*
* @deprecated Use ATTR_HTTP_CLIENT_IP in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
*/
export declare const SEMATTRS_HTTP_CLIENT_IP = "http.client_ip";
/**
 * The keys in the `RequestItems` object field.
 *
 * @deprecated Use ATTR_AWS_DYNAMODB_TABLE_NAMES in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_AWS_DYNAMODB_TABLE_NAMES = "aws.dynamodb.table_names";
/**
 * The JSON-serialized value of each item in the `ConsumedCapacity` response field.
 *
 * @deprecated Use ATTR_AWS_DYNAMODB_CONSUMED_CAPACITY in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_AWS_DYNAMODB_CONSUMED_CAPACITY = "aws.dynamodb.consumed_capacity";
/**
 * The JSON-serialized value of the `ItemCollectionMetrics` response field.
 *
 * @deprecated Use ATTR_AWS_DYNAMODB_ITEM_COLLECTION_METRICS in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_AWS_DYNAMODB_ITEM_COLLECTION_METRICS = "aws.dynamodb.item_collection_metrics";
/**
 * The value of the `ProvisionedThroughput.ReadCapacityUnits` request parameter.
 *
 * @deprecated Use ATTR_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY = "aws.dynamodb.provisioned_read_capacity";
/**
 * The value of the `ProvisionedThroughput.WriteCapacityUnits` request parameter.
 *
 * @deprecated Use ATTR_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY = "aws.dynamodb.provisioned_write_capacity";
/**
 * The value of the `ConsistentRead` request parameter.
 *
 * @deprecated Use ATTR_AWS_DYNAMODB_CONSISTENT_READ in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_AWS_DYNAMODB_CONSISTENT_READ = "aws.dynamodb.consistent_read";
/**
 * The value of the `ProjectionExpression` request parameter.
 *
 * @deprecated Use ATTR_AWS_DYNAMODB_PROJECTION in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_AWS_DYNAMODB_PROJECTION = "aws.dynamodb.projection";
/**
 * The value of the `Limit` request parameter.
 *
 * @deprecated Use ATTR_AWS_DYNAMODB_LIMIT in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_AWS_DYNAMODB_LIMIT = "aws.dynamodb.limit";
/**
 * The value of the `AttributesToGet` request parameter.
 *
 * @deprecated Use ATTR_AWS_DYNAMODB_ATTRIBUTES_TO_GET in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_AWS_DYNAMODB_ATTRIBUTES_TO_GET = "aws.dynamodb.attributes_to_get";
/**
 * The value of the `IndexName` request parameter.
 *
 * @deprecated Use ATTR_AWS_DYNAMODB_INDEX_NAME in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_AWS_DYNAMODB_INDEX_NAME = "aws.dynamodb.index_name";
/**
 * The value of the `Select` request parameter.
 *
 * @deprecated Use ATTR_AWS_DYNAMODB_SELECT in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_AWS_DYNAMODB_SELECT = "aws.dynamodb.select";
/**
 * The JSON-serialized value of each item of the `GlobalSecondaryIndexes` request field.
 *
 * @deprecated Use ATTR_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES = "aws.dynamodb.global_secondary_indexes";
/**
 * The JSON-serialized value of each item of the `LocalSecondaryIndexes` request field.
 *
 * @deprecated Use ATTR_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES = "aws.dynamodb.local_secondary_indexes";
/**
 * The value of the `ExclusiveStartTableName` request parameter.
 *
 * @deprecated Use ATTR_AWS_DYNAMODB_EXCLUSIVE_START_TABLE in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_AWS_DYNAMODB_EXCLUSIVE_START_TABLE = "aws.dynamodb.exclusive_start_table";
/**
 * The the number of items in the `TableNames` response parameter.
 *
 * @deprecated Use ATTR_AWS_DYNAMODB_TABLE_COUNT in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_AWS_DYNAMODB_TABLE_COUNT = "aws.dynamodb.table_count";
/**
 * The value of the `ScanIndexForward` request parameter.
 *
 * @deprecated Use ATTR_AWS_DYNAMODB_SCAN_FORWARD in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_AWS_DYNAMODB_SCAN_FORWARD = "aws.dynamodb.scan_forward";
/**
 * The value of the `Segment` request parameter.
 *
 * @deprecated Use ATTR_AWS_DYNAMODB_SEGMENT in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_AWS_DYNAMODB_SEGMENT = "aws.dynamodb.segment";
/**
 * The value of the `TotalSegments` request parameter.
 *
 * @deprecated Use ATTR_AWS_DYNAMODB_TOTAL_SEGMENTS in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_AWS_DYNAMODB_TOTAL_SEGMENTS = "aws.dynamodb.total_segments";
/**
 * The value of the `Count` response parameter.
 *
 * @deprecated Use ATTR_AWS_DYNAMODB_COUNT in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_AWS_DYNAMODB_COUNT = "aws.dynamodb.count";
/**
 * The value of the `ScannedCount` response parameter.
 *
 * @deprecated Use ATTR_AWS_DYNAMODB_SCANNED_COUNT in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_AWS_DYNAMODB_SCANNED_COUNT = "aws.dynamodb.scanned_count";
/**
 * The JSON-serialized value of each item in the `AttributeDefinitions` request field.
 *
 * @deprecated Use ATTR_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS = "aws.dynamodb.attribute_definitions";
/**
 * The JSON-serialized value of each item in the the `GlobalSecondaryIndexUpdates` request field.
 *
 * @deprecated Use ATTR_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES = "aws.dynamodb.global_secondary_index_updates";
/**
 * A string identifying the messaging system.
 *
 * @deprecated Use ATTR_MESSAGING_SYSTEM in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_MESSAGING_SYSTEM = "messaging.system";
/**
 * The message destination name. This might be equal to the span name but is required nevertheless.
 *
 * @deprecated Use ATTR_MESSAGING_DESTINATION_NAME in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_MESSAGING_DESTINATION = "messaging.destination";
/**
 * The kind of message destination.
 *
 * @deprecated Removed in semconv v1.20.0.
 */
export declare const SEMATTRS_MESSAGING_DESTINATION_KIND = "messaging.destination_kind";
/**
 * A boolean that is true if the message destination is temporary.
 *
 * @deprecated Use ATTR_MESSAGING_DESTINATION_TEMPORARY in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_MESSAGING_TEMP_DESTINATION = "messaging.temp_destination";
/**
 * The name of the transport protocol.
 *
 * @deprecated Use ATTR_NETWORK_PROTOCOL_NAME.
 */
export declare const SEMATTRS_MESSAGING_PROTOCOL = "messaging.protocol";
/**
 * The version of the transport protocol.
 *
 * @deprecated Use ATTR_NETWORK_PROTOCOL_VERSION.
 */
export declare const SEMATTRS_MESSAGING_PROTOCOL_VERSION = "messaging.protocol_version";
/**
 * Connection string.
 *
 * @deprecated Removed in semconv v1.17.0.
 */
export declare const SEMATTRS_MESSAGING_URL = "messaging.url";
/**
 * A value used by the messaging system as an identifier for the message, represented as a string.
 *
 * @deprecated Use ATTR_MESSAGING_MESSAGE_ID in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_MESSAGING_MESSAGE_ID = "messaging.message_id";
/**
 * The [conversation ID](#conversations) identifying the conversation to which the message belongs, represented as a string. Sometimes called &#34;Correlation ID&#34;.
 *
 * @deprecated Use ATTR_MESSAGING_MESSAGE_CONVERSATION_ID in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_MESSAGING_CONVERSATION_ID = "messaging.conversation_id";
/**
 * The (uncompressed) size of the message payload in bytes. Also use this attribute if it is unknown whether the compressed or uncompressed payload size is reported.
 *
 * @deprecated Use ATTR_MESSAGING_MESSAGE_BODY_SIZE in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES = "messaging.message_payload_size_bytes";
/**
 * The compressed size of the message payload in bytes.
 *
 * @deprecated Removed in semconv v1.22.0.
 */
export declare const SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES = "messaging.message_payload_compressed_size_bytes";
/**
 * A string identifying the kind of message consumption as defined in the [Operation names](#operation-names) section above. If the operation is &#34;send&#34;, this attribute MUST NOT be set, since the operation can be inferred from the span kind in that case.
 *
 * @deprecated Use ATTR_MESSAGING_OPERATION in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_MESSAGING_OPERATION = "messaging.operation";
/**
 * The identifier for the consumer receiving a message. For Kafka, set it to `{messaging.kafka.consumer_group} - {messaging.kafka.client_id}`, if both are present, or only `messaging.kafka.consumer_group`. For brokers, such as RabbitMQ and Artemis, set it to the `client_id` of the client consuming the message.
 *
 * @deprecated Removed in semconv v1.21.0.
 */
export declare const SEMATTRS_MESSAGING_CONSUMER_ID = "messaging.consumer_id";
/**
 * RabbitMQ message routing key.
 *
 * @deprecated Use ATTR_MESSAGING_RABBITMQ_DESTINATION_ROUTING_KEY in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_MESSAGING_RABBITMQ_ROUTING_KEY = "messaging.rabbitmq.routing_key";
/**
 * Message keys in Kafka are used for grouping alike messages to ensure they&#39;re processed on the same partition. They differ from `messaging.message_id` in that they&#39;re not unique. If the key is `null`, the attribute MUST NOT be set.
 *
 * Note: If the key type is not string, it&#39;s string representation has to be supplied for the attribute. If the key has no unambiguous, canonical string form, don&#39;t include its value.
 *
 * @deprecated Use ATTR_MESSAGING_KAFKA_MESSAGE_KEY in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_MESSAGING_KAFKA_MESSAGE_KEY = "messaging.kafka.message_key";
/**
 * Name of the Kafka Consumer Group that is handling the message. Only applies to consumers, not producers.
 *
 * @deprecated Use ATTR_MESSAGING_KAFKA_CONSUMER_GROUP in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_MESSAGING_KAFKA_CONSUMER_GROUP = "messaging.kafka.consumer_group";
/**
 * Client Id for the Consumer or Producer that is handling the message.
 *
 * @deprecated Use ATTR_MESSAGING_CLIENT_ID in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_MESSAGING_KAFKA_CLIENT_ID = "messaging.kafka.client_id";
/**
 * Partition the message is sent to.
 *
 * @deprecated Use ATTR_MESSAGING_KAFKA_DESTINATION_PARTITION in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_MESSAGING_KAFKA_PARTITION = "messaging.kafka.partition";
/**
 * A boolean that is true if the message is a tombstone.
 *
 * @deprecated Use ATTR_MESSAGING_KAFKA_MESSAGE_TOMBSTONE in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_MESSAGING_KAFKA_TOMBSTONE = "messaging.kafka.tombstone";
/**
 * A string identifying the remoting system.
 *
 * @deprecated Use ATTR_RPC_SYSTEM in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_RPC_SYSTEM = "rpc.system";
/**
 * The full (logical) name of the service being called, including its package name, if applicable.
 *
 * Note: This is the logical name of the service from the RPC interface perspective, which can be different from the name of any implementing class. The `code.namespace` attribute may be used to store the latter (despite the attribute name, it may include a class name; e.g., class with method actually executing the call on the server side, RPC client stub class on the client side).
 *
 * @deprecated Use ATTR_RPC_SERVICE in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_RPC_SERVICE = "rpc.service";
/**
 * The name of the (logical) method being called, must be equal to the $method part in the span name.
 *
 * Note: This is the logical name of the method from the RPC interface perspective, which can be different from the name of any implementing method/function. The `code.function` attribute may be used to store the latter (e.g., method actually executing the call on the server side, RPC client stub method on the client side).
 *
 * @deprecated Use ATTR_RPC_METHOD in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_RPC_METHOD = "rpc.method";
/**
 * The [numeric status code](https://github.com/grpc/grpc/blob/v1.33.2/doc/statuscodes.md) of the gRPC request.
 *
 * @deprecated Use ATTR_RPC_GRPC_STATUS_CODE in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_RPC_GRPC_STATUS_CODE = "rpc.grpc.status_code";
/**
 * Protocol version as in `jsonrpc` property of request/response. Since JSON-RPC 1.0 does not specify this, the value can be omitted.
 *
 * @deprecated Use ATTR_RPC_JSONRPC_VERSION in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_RPC_JSONRPC_VERSION = "rpc.jsonrpc.version";
/**
 * `id` property of request or response. Since protocol allows id to be int, string, `null` or missing (for notifications), value is expected to be cast to string for simplicity. Use empty string in case of `null` value. Omit entirely if this is a notification.
 *
 * @deprecated Use ATTR_RPC_JSONRPC_REQUEST_ID in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_RPC_JSONRPC_REQUEST_ID = "rpc.jsonrpc.request_id";
/**
 * `error.code` property of response if it is an error response.
 *
 * @deprecated Use ATTR_RPC_JSONRPC_ERROR_CODE in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_RPC_JSONRPC_ERROR_CODE = "rpc.jsonrpc.error_code";
/**
 * `error.message` property of response if it is an error response.
 *
 * @deprecated Use ATTR_RPC_JSONRPC_ERROR_MESSAGE in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_RPC_JSONRPC_ERROR_MESSAGE = "rpc.jsonrpc.error_message";
/**
 * Whether this is a received or sent message.
 *
 * @deprecated Use ATTR_MESSAGE_TYPE in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_MESSAGE_TYPE = "message.type";
/**
 * MUST be calculated as two different counters starting from `1` one for sent messages and one for received message.
 *
 * Note: This way we guarantee that the values will be consistent between different implementations.
 *
 * @deprecated Use ATTR_MESSAGE_ID in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_MESSAGE_ID = "message.id";
/**
 * Compressed size of the message in bytes.
 *
 * @deprecated Use ATTR_MESSAGE_COMPRESSED_SIZE in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_MESSAGE_COMPRESSED_SIZE = "message.compressed_size";
/**
 * Uncompressed size of the message in bytes.
 *
 * @deprecated Use ATTR_MESSAGE_UNCOMPRESSED_SIZE in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const SEMATTRS_MESSAGE_UNCOMPRESSED_SIZE = "message.uncompressed_size";
/**
 * Definition of available values for SemanticAttributes
 * This type is used for backward compatibility, you should use the individual exported
 * constants SemanticAttributes_XXXXX rather than the exported constant map. As any single reference
 * to a constant map value will result in all strings being included into your bundle.
 * @deprecated Use the SEMATTRS_XXXXX constants rather than the SemanticAttributes.XXXXX for bundle minification.
 */
export type SemanticAttributes = {
    /**
     * The full invoked ARN as provided on the `Context` passed to the function (`Lambda-Runtime-Invoked-Function-Arn` header on the `/runtime/invocation/next` applicable).
     *
     * Note: This may be different from `faas.id` if an alias is involved.
     */
    AWS_LAMBDA_INVOKED_ARN: 'aws.lambda.invoked_arn';
    /**
     * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
     */
    DB_SYSTEM: 'db.system';
    /**
     * The connection string used to connect to the database. It is recommended to remove embedded credentials.
     */
    DB_CONNECTION_STRING: 'db.connection_string';
    /**
     * Username for accessing the database.
     */
    DB_USER: 'db.user';
    /**
     * The fully-qualified class name of the [Java Database Connectivity (JDBC)](https://docs.oracle.com/javase/8/docs/technotes/guides/jdbc/) driver used to connect.
     */
    DB_JDBC_DRIVER_CLASSNAME: 'db.jdbc.driver_classname';
    /**
     * If no [tech-specific attribute](#call-level-attributes-for-specific-technologies) is defined, this attribute is used to report the name of the database being accessed. For commands that switch the database, this should be set to the target database (even if the command fails).
     *
     * Note: In some SQL databases, the database name to be used is called &#34;schema name&#34;.
     */
    DB_NAME: 'db.name';
    /**
     * The database statement being executed.
     *
     * Note: The value may be sanitized to exclude sensitive information.
     */
    DB_STATEMENT: 'db.statement';
    /**
     * The name of the operation being executed, e.g. the [MongoDB command name](https://docs.mongodb.com/manual/reference/command/#database-operations) such as `findAndModify`, or the SQL keyword.
     *
     * Note: When setting this to an SQL keyword, it is not recommended to attempt any client-side parsing of `db.statement` just to get this property, but it should be set if the operation name is provided by the library being instrumented. If the SQL statement has an ambiguous operation, or performs more than one operation, this value may be omitted.
     */
    DB_OPERATION: 'db.operation';
    /**
     * The Microsoft SQL Server [instance name](https://docs.microsoft.com/en-us/sql/connect/jdbc/building-the-connection-url?view=sql-server-ver15) connecting to. This name is used to determine the port of a named instance.
     *
     * Note: If setting a `db.mssql.instance_name`, `net.peer.port` is no longer required (but still recommended if non-standard).
     */
    DB_MSSQL_INSTANCE_NAME: 'db.mssql.instance_name';
    /**
     * The name of the keyspace being accessed. To be used instead of the generic `db.name` attribute.
     */
    DB_CASSANDRA_KEYSPACE: 'db.cassandra.keyspace';
    /**
     * The fetch size used for paging, i.e. how many rows will be returned at once.
     */
    DB_CASSANDRA_PAGE_SIZE: 'db.cassandra.page_size';
    /**
     * The consistency level of the query. Based on consistency values from [CQL](https://docs.datastax.com/en/cassandra-oss/3.0/cassandra/dml/dmlConfigConsistency.html).
     */
    DB_CASSANDRA_CONSISTENCY_LEVEL: 'db.cassandra.consistency_level';
    /**
     * The name of the primary table that the operation is acting upon, including the schema name (if applicable).
     *
     * Note: This mirrors the db.sql.table attribute but references cassandra rather than sql. It is not recommended to attempt any client-side parsing of `db.statement` just to get this property, but it should be set if it is provided by the library being instrumented. If the operation is acting upon an anonymous table, or more than one table, this value MUST NOT be set.
     */
    DB_CASSANDRA_TABLE: 'db.cassandra.table';
    /**
     * Whether or not the query is idempotent.
     */
    DB_CASSANDRA_IDEMPOTENCE: 'db.cassandra.idempotence';
    /**
     * The number of times a query was speculatively executed. Not set or `0` if the query was not executed speculatively.
     */
    DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT: 'db.cassandra.speculative_execution_count';
    /**
     * The ID of the coordinating node for a query.
     */
    DB_CASSANDRA_COORDINATOR_ID: 'db.cassandra.coordinator.id';
    /**
     * The data center of the coordinating node for a query.
     */
    DB_CASSANDRA_COORDINATOR_DC: 'db.cassandra.coordinator.dc';
    /**
     * The [HBase namespace](https://hbase.apache.org/book.html#_namespace) being accessed. To be used instead of the generic `db.name` attribute.
     */
    DB_HBASE_NAMESPACE: 'db.hbase.namespace';
    /**
     * The index of the database being accessed as used in the [`SELECT` command](https://redis.io/commands/select), provided as an integer. To be used instead of the generic `db.name` attribute.
     */
    DB_REDIS_DATABASE_INDEX: 'db.redis.database_index';
    /**
     * The collection being accessed within the database stated in `db.name`.
     */
    DB_MONGODB_COLLECTION: 'db.mongodb.collection';
    /**
     * The name of the primary table that the operation is acting upon, including the schema name (if applicable).
     *
     * Note: It is not recommended to attempt any client-side parsing of `db.statement` just to get this property, but it should be set if it is provided by the library being instrumented. If the operation is acting upon an anonymous table, or more than one table, this value MUST NOT be set.
     */
    DB_SQL_TABLE: 'db.sql.table';
    /**
     * The type of the exception (its fully-qualified class name, if applicable). The dynamic type of the exception should be preferred over the static type in languages that support it.
     */
    EXCEPTION_TYPE: 'exception.type';
    /**
     * The exception message.
     */
    EXCEPTION_MESSAGE: 'exception.message';
    /**
     * A stacktrace as a string in the natural representation for the language runtime. The representation is to be determined and documented by each language SIG.
     */
    EXCEPTION_STACKTRACE: 'exception.stacktrace';
    /**
    * SHOULD be set to true if the exception event is recorded at a point where it is known that the exception is escaping the scope of the span.
    *
    * Note: An exception is considered to have escaped (or left) the scope of a span,
  if that span is ended while the exception is still logically &#34;in flight&#34;.
  This may be actually &#34;in flight&#34; in some languages (e.g. if the exception
  is passed to a Context manager&#39;s `__exit__` method in Python) but will
  usually be caught at the point of recording the exception in most languages.
  
  It is usually not possible to determine at the point where an exception is thrown
  whether it will escape the scope of a span.
  However, it is trivial to know that an exception
  will escape, if one checks for an active exception just before ending the span,
  as done in the [example above](#exception-end-example).
  
  It follows that an exception may still escape the scope of the span
  even if the `exception.escaped` attribute was not set or set to false,
  since the event might have been recorded at a time where it was not
  clear whether the exception will escape.
    */
    EXCEPTION_ESCAPED: 'exception.escaped';
    /**
     * Type of the trigger on which the function is executed.
     */
    FAAS_TRIGGER: 'faas.trigger';
    /**
     * The execution ID of the current function execution.
     */
    FAAS_EXECUTION: 'faas.execution';
    /**
     * The name of the source on which the triggering operation was performed. For example, in Cloud Storage or S3 corresponds to the bucket name, and in Cosmos DB to the database name.
     */
    FAAS_DOCUMENT_COLLECTION: 'faas.document.collection';
    /**
     * Describes the type of the operation that was performed on the data.
     */
    FAAS_DOCUMENT_OPERATION: 'faas.document.operation';
    /**
     * A string containing the time when the data was accessed in the [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format expressed in [UTC](https://www.w3.org/TR/NOTE-datetime).
     */
    FAAS_DOCUMENT_TIME: 'faas.document.time';
    /**
     * The document name/table subjected to the operation. For example, in Cloud Storage or S3 is the name of the file, and in Cosmos DB the table name.
     */
    FAAS_DOCUMENT_NAME: 'faas.document.name';
    /**
     * A string containing the function invocation time in the [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format expressed in [UTC](https://www.w3.org/TR/NOTE-datetime).
     */
    FAAS_TIME: 'faas.time';
    /**
     * A string containing the schedule period as [Cron Expression](https://docs.oracle.com/cd/E12058_01/doc/doc.1014/e12030/cron_expressions.htm).
     */
    FAAS_CRON: 'faas.cron';
    /**
     * A boolean that is true if the serverless function is executed for the first time (aka cold-start).
     */
    FAAS_COLDSTART: 'faas.coldstart';
    /**
     * The name of the invoked function.
     *
     * Note: SHOULD be equal to the `faas.name` resource attribute of the invoked function.
     */
    FAAS_INVOKED_NAME: 'faas.invoked_name';
    /**
     * The cloud provider of the invoked function.
     *
     * Note: SHOULD be equal to the `cloud.provider` resource attribute of the invoked function.
     */
    FAAS_INVOKED_PROVIDER: 'faas.invoked_provider';
    /**
     * The cloud region of the invoked function.
     *
     * Note: SHOULD be equal to the `cloud.region` resource attribute of the invoked function.
     */
    FAAS_INVOKED_REGION: 'faas.invoked_region';
    /**
     * Transport protocol used. See note below.
     */
    NET_TRANSPORT: 'net.transport';
    /**
     * Remote address of the peer (dotted decimal for IPv4 or [RFC5952](https://tools.ietf.org/html/rfc5952) for IPv6).
     */
    NET_PEER_IP: 'net.peer.ip';
    /**
     * Remote port number.
     */
    NET_PEER_PORT: 'net.peer.port';
    /**
     * Remote hostname or similar, see note below.
     */
    NET_PEER_NAME: 'net.peer.name';
    /**
     * Like `net.peer.ip` but for the host IP. Useful in case of a multi-IP host.
     */
    NET_HOST_IP: 'net.host.ip';
    /**
     * Like `net.peer.port` but for the host port.
     */
    NET_HOST_PORT: 'net.host.port';
    /**
     * Local hostname or similar, see note below.
     */
    NET_HOST_NAME: 'net.host.name';
    /**
     * The internet connection type currently being used by the host.
     */
    NET_HOST_CONNECTION_TYPE: 'net.host.connection.type';
    /**
     * This describes more details regarding the connection.type. It may be the type of cell technology connection, but it could be used for describing details about a wifi connection.
     */
    NET_HOST_CONNECTION_SUBTYPE: 'net.host.connection.subtype';
    /**
     * The name of the mobile carrier.
     */
    NET_HOST_CARRIER_NAME: 'net.host.carrier.name';
    /**
     * The mobile carrier country code.
     */
    NET_HOST_CARRIER_MCC: 'net.host.carrier.mcc';
    /**
     * The mobile carrier network code.
     */
    NET_HOST_CARRIER_MNC: 'net.host.carrier.mnc';
    /**
     * The ISO 3166-1 alpha-2 2-character country code associated with the mobile carrier network.
     */
    NET_HOST_CARRIER_ICC: 'net.host.carrier.icc';
    /**
     * The [`service.name`](../../resource/semantic_conventions/README.md#service) of the remote service. SHOULD be equal to the actual `service.name` resource attribute of the remote service if any.
     */
    PEER_SERVICE: 'peer.service';
    /**
     * Username or client_id extracted from the access token or [Authorization](https://tools.ietf.org/html/rfc7235#section-4.2) header in the inbound request from outside the system.
     */
    ENDUSER_ID: 'enduser.id';
    /**
     * Actual/assumed role the client is making the request under extracted from token or application security context.
     */
    ENDUSER_ROLE: 'enduser.role';
    /**
     * Scopes or granted authorities the client currently possesses extracted from token or application security context. The value would come from the scope associated with an [OAuth 2.0 Access Token](https://tools.ietf.org/html/rfc6749#section-3.3) or an attribute value in a [SAML 2.0 Assertion](http://docs.oasis-open.org/security/saml/Post2.0/sstc-saml-tech-overview-2.0.html).
     */
    ENDUSER_SCOPE: 'enduser.scope';
    /**
     * Current &#34;managed&#34; thread ID (as opposed to OS thread ID).
     */
    THREAD_ID: 'thread.id';
    /**
     * Current thread name.
     */
    THREAD_NAME: 'thread.name';
    /**
     * The method or function name, or equivalent (usually rightmost part of the code unit&#39;s name).
     */
    CODE_FUNCTION: 'code.function';
    /**
     * The &#34;namespace&#34; within which `code.function` is defined. Usually the qualified class or module name, such that `code.namespace` + some separator + `code.function` form a unique identifier for the code unit.
     */
    CODE_NAMESPACE: 'code.namespace';
    /**
     * The source code file name that identifies the code unit as uniquely as possible (preferably an absolute file path).
     */
    CODE_FILEPATH: 'code.filepath';
    /**
     * The line number in `code.filepath` best representing the operation. It SHOULD point within the code unit named in `code.function`.
     */
    CODE_LINENO: 'code.lineno';
    /**
     * HTTP request method.
     */
    HTTP_METHOD: 'http.method';
    /**
     * Full HTTP request URL in the form `scheme://host[:port]/path?query[#fragment]`. Usually the fragment is not transmitted over HTTP, but if it is known, it should be included nevertheless.
     *
     * Note: `http.url` MUST NOT contain credentials passed via URL in form of `https://username:password@www.example.com/`. In such case the attribute&#39;s value should be `https://www.example.com/`.
     */
    HTTP_URL: 'http.url';
    /**
     * The full request target as passed in a HTTP request line or equivalent.
     */
    HTTP_TARGET: 'http.target';
    /**
     * The value of the [HTTP host header](https://tools.ietf.org/html/rfc7230#section-5.4). An empty Host header should also be reported, see note.
     *
     * Note: When the header is present but empty the attribute SHOULD be set to the empty string. Note that this is a valid situation that is expected in certain cases, according the aforementioned [section of RFC 7230](https://tools.ietf.org/html/rfc7230#section-5.4). When the header is not set the attribute MUST NOT be set.
     */
    HTTP_HOST: 'http.host';
    /**
     * The URI scheme identifying the used protocol.
     */
    HTTP_SCHEME: 'http.scheme';
    /**
     * [HTTP response status code](https://tools.ietf.org/html/rfc7231#section-6).
     */
    HTTP_STATUS_CODE: 'http.status_code';
    /**
     * Kind of HTTP protocol used.
     *
     * Note: If `net.transport` is not specified, it can be assumed to be `IP.TCP` except if `http.flavor` is `QUIC`, in which case `IP.UDP` is assumed.
     */
    HTTP_FLAVOR: 'http.flavor';
    /**
     * Value of the [HTTP User-Agent](https://tools.ietf.org/html/rfc7231#section-5.5.3) header sent by the client.
     */
    HTTP_USER_AGENT: 'http.user_agent';
    /**
     * The size of the request payload body in bytes. This is the number of bytes transferred excluding headers and is often, but not always, present as the [Content-Length](https://tools.ietf.org/html/rfc7230#section-3.3.2) header. For requests using transport encoding, this should be the compressed size.
     */
    HTTP_REQUEST_CONTENT_LENGTH: 'http.request_content_length';
    /**
     * The size of the uncompressed request payload body after transport decoding. Not set if transport encoding not used.
     */
    HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED: 'http.request_content_length_uncompressed';
    /**
     * The size of the response payload body in bytes. This is the number of bytes transferred excluding headers and is often, but not always, present as the [Content-Length](https://tools.ietf.org/html/rfc7230#section-3.3.2) header. For requests using transport encoding, this should be the compressed size.
     */
    HTTP_RESPONSE_CONTENT_LENGTH: 'http.response_content_length';
    /**
     * The size of the uncompressed response payload body after transport decoding. Not set if transport encoding not used.
     */
    HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED: 'http.response_content_length_uncompressed';
    /**
     * The primary server name of the matched virtual host. This should be obtained via configuration. If no such configuration can be obtained, this attribute MUST NOT be set ( `net.host.name` should be used instead).
     *
     * Note: `http.url` is usually not readily available on the server side but would have to be assembled in a cumbersome and sometimes lossy process from other information (see e.g. open-telemetry/opentelemetry-python/pull/148). It is thus preferred to supply the raw data that is available.
     */
    HTTP_SERVER_NAME: 'http.server_name';
    /**
     * The matched route (path template).
     */
    HTTP_ROUTE: 'http.route';
    /**
    * The IP address of the original client behind all proxies, if known (e.g. from [X-Forwarded-For](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For)).
    *
    * Note: This is not necessarily the same as `net.peer.ip`, which would
  identify the network-level peer, which may be a proxy.
  
  This attribute should be set when a source of information different
  from the one used for `net.peer.ip`, is available even if that other
  source just confirms the same value as `net.peer.ip`.
  Rationale: For `net.peer.ip`, one typically does not know if it
  comes from a proxy, reverse proxy, or the actual client. Setting
  `http.client_ip` when it&#39;s the same as `net.peer.ip` means that
  one is at least somewhat confident that the address is not that of
  the closest proxy.
    */
    HTTP_CLIENT_IP: 'http.client_ip';
    /**
     * The keys in the `RequestItems` object field.
     */
    AWS_DYNAMODB_TABLE_NAMES: 'aws.dynamodb.table_names';
    /**
     * The JSON-serialized value of each item in the `ConsumedCapacity` response field.
     */
    AWS_DYNAMODB_CONSUMED_CAPACITY: 'aws.dynamodb.consumed_capacity';
    /**
     * The JSON-serialized value of the `ItemCollectionMetrics` response field.
     */
    AWS_DYNAMODB_ITEM_COLLECTION_METRICS: 'aws.dynamodb.item_collection_metrics';
    /**
     * The value of the `ProvisionedThroughput.ReadCapacityUnits` request parameter.
     */
    AWS_DYNAMODB_PROVISIONED_READ_CAPACITY: 'aws.dynamodb.provisioned_read_capacity';
    /**
     * The value of the `ProvisionedThroughput.WriteCapacityUnits` request parameter.
     */
    AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY: 'aws.dynamodb.provisioned_write_capacity';
    /**
     * The value of the `ConsistentRead` request parameter.
     */
    AWS_DYNAMODB_CONSISTENT_READ: 'aws.dynamodb.consistent_read';
    /**
     * The value of the `ProjectionExpression` request parameter.
     */
    AWS_DYNAMODB_PROJECTION: 'aws.dynamodb.projection';
    /**
     * The value of the `Limit` request parameter.
     */
    AWS_DYNAMODB_LIMIT: 'aws.dynamodb.limit';
    /**
     * The value of the `AttributesToGet` request parameter.
     */
    AWS_DYNAMODB_ATTRIBUTES_TO_GET: 'aws.dynamodb.attributes_to_get';
    /**
     * The value of the `IndexName` request parameter.
     */
    AWS_DYNAMODB_INDEX_NAME: 'aws.dynamodb.index_name';
    /**
     * The value of the `Select` request parameter.
     */
    AWS_DYNAMODB_SELECT: 'aws.dynamodb.select';
    /**
     * The JSON-serialized value of each item of the `GlobalSecondaryIndexes` request field.
     */
    AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES: 'aws.dynamodb.global_secondary_indexes';
    /**
     * The JSON-serialized value of each item of the `LocalSecondaryIndexes` request field.
     */
    AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES: 'aws.dynamodb.local_secondary_indexes';
    /**
     * The value of the `ExclusiveStartTableName` request parameter.
     */
    AWS_DYNAMODB_EXCLUSIVE_START_TABLE: 'aws.dynamodb.exclusive_start_table';
    /**
     * The the number of items in the `TableNames` response parameter.
     */
    AWS_DYNAMODB_TABLE_COUNT: 'aws.dynamodb.table_count';
    /**
     * The value of the `ScanIndexForward` request parameter.
     */
    AWS_DYNAMODB_SCAN_FORWARD: 'aws.dynamodb.scan_forward';
    /**
     * The value of the `Segment` request parameter.
     */
    AWS_DYNAMODB_SEGMENT: 'aws.dynamodb.segment';
    /**
     * The value of the `TotalSegments` request parameter.
     */
    AWS_DYNAMODB_TOTAL_SEGMENTS: 'aws.dynamodb.total_segments';
    /**
     * The value of the `Count` response parameter.
     */
    AWS_DYNAMODB_COUNT: 'aws.dynamodb.count';
    /**
     * The value of the `ScannedCount` response parameter.
     */
    AWS_DYNAMODB_SCANNED_COUNT: 'aws.dynamodb.scanned_count';
    /**
     * The JSON-serialized value of each item in the `AttributeDefinitions` request field.
     */
    AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS: 'aws.dynamodb.attribute_definitions';
    /**
     * The JSON-serialized value of each item in the the `GlobalSecondaryIndexUpdates` request field.
     */
    AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES: 'aws.dynamodb.global_secondary_index_updates';
    /**
     * A string identifying the messaging system.
     */
    MESSAGING_SYSTEM: 'messaging.system';
    /**
     * The message destination name. This might be equal to the span name but is required nevertheless.
     */
    MESSAGING_DESTINATION: 'messaging.destination';
    /**
     * The kind of message destination.
     */
    MESSAGING_DESTINATION_KIND: 'messaging.destination_kind';
    /**
     * A boolean that is true if the message destination is temporary.
     */
    MESSAGING_TEMP_DESTINATION: 'messaging.temp_destination';
    /**
     * The name of the transport protocol.
     */
    MESSAGING_PROTOCOL: 'messaging.protocol';
    /**
     * The version of the transport protocol.
     */
    MESSAGING_PROTOCOL_VERSION: 'messaging.protocol_version';
    /**
     * Connection string.
     */
    MESSAGING_URL: 'messaging.url';
    /**
     * A value used by the messaging system as an identifier for the message, represented as a string.
     */
    MESSAGING_MESSAGE_ID: 'messaging.message_id';
    /**
     * The [conversation ID](#conversations) identifying the conversation to which the message belongs, represented as a string. Sometimes called &#34;Correlation ID&#34;.
     */
    MESSAGING_CONVERSATION_ID: 'messaging.conversation_id';
    /**
     * The (uncompressed) size of the message payload in bytes. Also use this attribute if it is unknown whether the compressed or uncompressed payload size is reported.
     */
    MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES: 'messaging.message_payload_size_bytes';
    /**
     * The compressed size of the message payload in bytes.
     */
    MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES: 'messaging.message_payload_compressed_size_bytes';
    /**
     * A string identifying the kind of message consumption as defined in the [Operation names](#operation-names) section above. If the operation is &#34;send&#34;, this attribute MUST NOT be set, since the operation can be inferred from the span kind in that case.
     */
    MESSAGING_OPERATION: 'messaging.operation';
    /**
     * The identifier for the consumer receiving a message. For Kafka, set it to `{messaging.kafka.consumer_group} - {messaging.kafka.client_id}`, if both are present, or only `messaging.kafka.consumer_group`. For brokers, such as RabbitMQ and Artemis, set it to the `client_id` of the client consuming the message.
     */
    MESSAGING_CONSUMER_ID: 'messaging.consumer_id';
    /**
     * RabbitMQ message routing key.
     */
    MESSAGING_RABBITMQ_ROUTING_KEY: 'messaging.rabbitmq.routing_key';
    /**
     * Message keys in Kafka are used for grouping alike messages to ensure they&#39;re processed on the same partition. They differ from `messaging.message_id` in that they&#39;re not unique. If the key is `null`, the attribute MUST NOT be set.
     *
     * Note: If the key type is not string, it&#39;s string representation has to be supplied for the attribute. If the key has no unambiguous, canonical string form, don&#39;t include its value.
     */
    MESSAGING_KAFKA_MESSAGE_KEY: 'messaging.kafka.message_key';
    /**
     * Name of the Kafka Consumer Group that is handling the message. Only applies to consumers, not producers.
     */
    MESSAGING_KAFKA_CONSUMER_GROUP: 'messaging.kafka.consumer_group';
    /**
     * Client Id for the Consumer or Producer that is handling the message.
     */
    MESSAGING_KAFKA_CLIENT_ID: 'messaging.kafka.client_id';
    /**
     * Partition the message is sent to.
     */
    MESSAGING_KAFKA_PARTITION: 'messaging.kafka.partition';
    /**
     * A boolean that is true if the message is a tombstone.
     */
    MESSAGING_KAFKA_TOMBSTONE: 'messaging.kafka.tombstone';
    /**
     * A string identifying the remoting system.
     */
    RPC_SYSTEM: 'rpc.system';
    /**
     * The full (logical) name of the service being called, including its package name, if applicable.
     *
     * Note: This is the logical name of the service from the RPC interface perspective, which can be different from the name of any implementing class. The `code.namespace` attribute may be used to store the latter (despite the attribute name, it may include a class name; e.g., class with method actually executing the call on the server side, RPC client stub class on the client side).
     */
    RPC_SERVICE: 'rpc.service';
    /**
     * The name of the (logical) method being called, must be equal to the $method part in the span name.
     *
     * Note: This is the logical name of the method from the RPC interface perspective, which can be different from the name of any implementing method/function. The `code.function` attribute may be used to store the latter (e.g., method actually executing the call on the server side, RPC client stub method on the client side).
     */
    RPC_METHOD: 'rpc.method';
    /**
     * The [numeric status code](https://github.com/grpc/grpc/blob/v1.33.2/doc/statuscodes.md) of the gRPC request.
     */
    RPC_GRPC_STATUS_CODE: 'rpc.grpc.status_code';
    /**
     * Protocol version as in `jsonrpc` property of request/response. Since JSON-RPC 1.0 does not specify this, the value can be omitted.
     */
    RPC_JSONRPC_VERSION: 'rpc.jsonrpc.version';
    /**
     * `id` property of request or response. Since protocol allows id to be int, string, `null` or missing (for notifications), value is expected to be cast to string for simplicity. Use empty string in case of `null` value. Omit entirely if this is a notification.
     */
    RPC_JSONRPC_REQUEST_ID: 'rpc.jsonrpc.request_id';
    /**
     * `error.code` property of response if it is an error response.
     */
    RPC_JSONRPC_ERROR_CODE: 'rpc.jsonrpc.error_code';
    /**
     * `error.message` property of response if it is an error response.
     */
    RPC_JSONRPC_ERROR_MESSAGE: 'rpc.jsonrpc.error_message';
    /**
     * Whether this is a received or sent message.
     */
    MESSAGE_TYPE: 'message.type';
    /**
     * MUST be calculated as two different counters starting from `1` one for sent messages and one for received message.
     *
     * Note: This way we guarantee that the values will be consistent between different implementations.
     */
    MESSAGE_ID: 'message.id';
    /**
     * Compressed size of the message in bytes.
     */
    MESSAGE_COMPRESSED_SIZE: 'message.compressed_size';
    /**
     * Uncompressed size of the message in bytes.
     */
    MESSAGE_UNCOMPRESSED_SIZE: 'message.uncompressed_size';
};
/**
 * Create exported Value Map for SemanticAttributes values
 * @deprecated Use the SEMATTRS_XXXXX constants rather than the SemanticAttributes.XXXXX for bundle minification
 */
export declare const SemanticAttributes: SemanticAttributes;
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 *
 * @deprecated Use DB_SYSTEM_VALUE_OTHER_SQL in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const DBSYSTEMVALUES_OTHER_SQL = "other_sql";
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 *
 * @deprecated Use DB_SYSTEM_VALUE_MSSQL in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const DBSYSTEMVALUES_MSSQL = "mssql";
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 *
 * @deprecated Use DB_SYSTEM_VALUE_MYSQL in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const DBSYSTEMVALUES_MYSQL = "mysql";
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 *
 * @deprecated Use DB_SYSTEM_VALUE_ORACLE in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const DBSYSTEMVALUES_ORACLE = "oracle";
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 *
 * @deprecated Use DB_SYSTEM_VALUE_DB2 in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const DBSYSTEMVALUES_DB2 = "db2";
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 *
 * @deprecated Use DB_SYSTEM_VALUE_POSTGRESQL in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const DBSYSTEMVALUES_POSTGRESQL = "postgresql";
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 *
 * @deprecated Use DB_SYSTEM_VALUE_REDSHIFT in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const DBSYSTEMVALUES_REDSHIFT = "redshift";
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 *
 * @deprecated Use DB_SYSTEM_VALUE_HIVE in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const DBSYSTEMVALUES_HIVE = "hive";
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 *
 * @deprecated Use DB_SYSTEM_VALUE_CLOUDSCAPE in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const DBSYSTEMVALUES_CLOUDSCAPE = "cloudscape";
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 *
 * @deprecated Use DB_SYSTEM_VALUE_HSQLDB in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const DBSYSTEMVALUES_HSQLDB = "hsqldb";
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 *
 * @deprecated Use DB_SYSTEM_VALUE_PROGRESS in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const DBSYSTEMVALUES_PROGRESS = "progress";
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 *
 * @deprecated Use DB_SYSTEM_VALUE_MAXDB in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const DBSYSTEMVALUES_MAXDB = "maxdb";
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 *
 * @deprecated Use DB_SYSTEM_VALUE_HANADB in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const DBSYSTEMVALUES_HANADB = "hanadb";
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 *
 * @deprecated Use DB_SYSTEM_VALUE_INGRES in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const DBSYSTEMVALUES_INGRES = "ingres";
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 *
 * @deprecated Use DB_SYSTEM_VALUE_FIRSTSQL in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const DBSYSTEMVALUES_FIRSTSQL = "firstsql";
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 *
 * @deprecated Use DB_SYSTEM_VALUE_EDB in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const DBSYSTEMVALUES_EDB = "edb";
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 *
 * @deprecated Use DB_SYSTEM_VALUE_CACHE in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const DBSYSTEMVALUES_CACHE = "cache";
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 *
 * @deprecated Use DB_SYSTEM_VALUE_ADABAS in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const DBSYSTEMVALUES_ADABAS = "adabas";
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 *
 * @deprecated Use DB_SYSTEM_VALUE_FIREBIRD in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const DBSYSTEMVALUES_FIREBIRD = "firebird";
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 *
 * @deprecated Use DB_SYSTEM_VALUE_DERBY in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const DBSYSTEMVALUES_DERBY = "derby";
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 *
 * @deprecated Use DB_SYSTEM_VALUE_FILEMAKER in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const DBSYSTEMVALUES_FILEMAKER = "filemaker";
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 *
 * @deprecated Use DB_SYSTEM_VALUE_INFORMIX in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const DBSYSTEMVALUES_INFORMIX = "informix";
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 *
 * @deprecated Use DB_SYSTEM_VALUE_INSTANTDB in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const DBSYSTEMVALUES_INSTANTDB = "instantdb";
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 *
 * @deprecated Use DB_SYSTEM_VALUE_INTERBASE in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const DBSYSTEMVALUES_INTERBASE = "interbase";
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 *
 * @deprecated Use DB_SYSTEM_VALUE_MARIADB in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const DBSYSTEMVALUES_MARIADB = "mariadb";
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 *
 * @deprecated Use DB_SYSTEM_VALUE_NETEZZA in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const DBSYSTEMVALUES_NETEZZA = "netezza";
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 *
 * @deprecated Use DB_SYSTEM_VALUE_PERVASIVE in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const DBSYSTEMVALUES_PERVASIVE = "pervasive";
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 *
 * @deprecated Use DB_SYSTEM_VALUE_POINTBASE in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const DBSYSTEMVALUES_POINTBASE = "pointbase";
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 *
 * @deprecated Use DB_SYSTEM_VALUE_SQLITE in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const DBSYSTEMVALUES_SQLITE = "sqlite";
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 *
 * @deprecated Use DB_SYSTEM_VALUE_SYBASE in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const DBSYSTEMVALUES_SYBASE = "sybase";
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 *
 * @deprecated Use DB_SYSTEM_VALUE_TERADATA in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const DBSYSTEMVALUES_TERADATA = "teradata";
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 *
 * @deprecated Use DB_SYSTEM_VALUE_VERTICA in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const DBSYSTEMVALUES_VERTICA = "vertica";
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 *
 * @deprecated Use DB_SYSTEM_VALUE_H2 in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const DBSYSTEMVALUES_H2 = "h2";
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 *
 * @deprecated Use DB_SYSTEM_VALUE_COLDFUSION in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const DBSYSTEMVALUES_COLDFUSION = "coldfusion";
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 *
 * @deprecated Use DB_SYSTEM_VALUE_CASSANDRA in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const DBSYSTEMVALUES_CASSANDRA = "cassandra";
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 *
 * @deprecated Use DB_SYSTEM_VALUE_HBASE in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const DBSYSTEMVALUES_HBASE = "hbase";
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 *
 * @deprecated Use DB_SYSTEM_VALUE_MONGODB in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const DBSYSTEMVALUES_MONGODB = "mongodb";
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 *
 * @deprecated Use DB_SYSTEM_VALUE_REDIS in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const DBSYSTEMVALUES_REDIS = "redis";
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 *
 * @deprecated Use DB_SYSTEM_VALUE_COUCHBASE in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const DBSYSTEMVALUES_COUCHBASE = "couchbase";
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 *
 * @deprecated Use DB_SYSTEM_VALUE_COUCHDB in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const DBSYSTEMVALUES_COUCHDB = "couchdb";
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 *
 * @deprecated Use DB_SYSTEM_VALUE_COSMOSDB in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const DBSYSTEMVALUES_COSMOSDB = "cosmosdb";
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 *
 * @deprecated Use DB_SYSTEM_VALUE_DYNAMODB in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const DBSYSTEMVALUES_DYNAMODB = "dynamodb";
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 *
 * @deprecated Use DB_SYSTEM_VALUE_NEO4J in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const DBSYSTEMVALUES_NEO4J = "neo4j";
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 *
 * @deprecated Use DB_SYSTEM_VALUE_GEODE in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const DBSYSTEMVALUES_GEODE = "geode";
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 *
 * @deprecated Use DB_SYSTEM_VALUE_ELASTICSEARCH in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const DBSYSTEMVALUES_ELASTICSEARCH = "elasticsearch";
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 *
 * @deprecated Use DB_SYSTEM_VALUE_MEMCACHED in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const DBSYSTEMVALUES_MEMCACHED = "memcached";
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 *
 * @deprecated Use DB_SYSTEM_VALUE_COCKROACHDB in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const DBSYSTEMVALUES_COCKROACHDB = "cockroachdb";
/**
 * Identifies the Values for DbSystemValues enum definition
 *
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 * @deprecated Use the DBSYSTEMVALUES_XXXXX constants rather than the DbSystemValues.XXXXX for bundle minification.
 */
export type DbSystemValues = {
    /** Some other SQL database. Fallback only. See notes. */
    OTHER_SQL: 'other_sql';
    /** Microsoft SQL Server. */
    MSSQL: 'mssql';
    /** MySQL. */
    MYSQL: 'mysql';
    /** Oracle Database. */
    ORACLE: 'oracle';
    /** IBM Db2. */
    DB2: 'db2';
    /** PostgreSQL. */
    POSTGRESQL: 'postgresql';
    /** Amazon Redshift. */
    REDSHIFT: 'redshift';
    /** Apache Hive. */
    HIVE: 'hive';
    /** Cloudscape. */
    CLOUDSCAPE: 'cloudscape';
    /** HyperSQL DataBase. */
    HSQLDB: 'hsqldb';
    /** Progress Database. */
    PROGRESS: 'progress';
    /** SAP MaxDB. */
    MAXDB: 'maxdb';
    /** SAP HANA. */
    HANADB: 'hanadb';
    /** Ingres. */
    INGRES: 'ingres';
    /** FirstSQL. */
    FIRSTSQL: 'firstsql';
    /** EnterpriseDB. */
    EDB: 'edb';
    /** InterSystems Caché. */
    CACHE: 'cache';
    /** Adabas (Adaptable Database System). */
    ADABAS: 'adabas';
    /** Firebird. */
    FIREBIRD: 'firebird';
    /** Apache Derby. */
    DERBY: 'derby';
    /** FileMaker. */
    FILEMAKER: 'filemaker';
    /** Informix. */
    INFORMIX: 'informix';
    /** InstantDB. */
    INSTANTDB: 'instantdb';
    /** InterBase. */
    INTERBASE: 'interbase';
    /** MariaDB. */
    MARIADB: 'mariadb';
    /** Netezza. */
    NETEZZA: 'netezza';
    /** Pervasive PSQL. */
    PERVASIVE: 'pervasive';
    /** PointBase. */
    POINTBASE: 'pointbase';
    /** SQLite. */
    SQLITE: 'sqlite';
    /** Sybase. */
    SYBASE: 'sybase';
    /** Teradata. */
    TERADATA: 'teradata';
    /** Vertica. */
    VERTICA: 'vertica';
    /** H2. */
    H2: 'h2';
    /** ColdFusion IMQ. */
    COLDFUSION: 'coldfusion';
    /** Apache Cassandra. */
    CASSANDRA: 'cassandra';
    /** Apache HBase. */
    HBASE: 'hbase';
    /** MongoDB. */
    MONGODB: 'mongodb';
    /** Redis. */
    REDIS: 'redis';
    /** Couchbase. */
    COUCHBASE: 'couchbase';
    /** CouchDB. */
    COUCHDB: 'couchdb';
    /** Microsoft Azure Cosmos DB. */
    COSMOSDB: 'cosmosdb';
    /** Amazon DynamoDB. */
    DYNAMODB: 'dynamodb';
    /** Neo4j. */
    NEO4J: 'neo4j';
    /** Apache Geode. */
    GEODE: 'geode';
    /** Elasticsearch. */
    ELASTICSEARCH: 'elasticsearch';
    /** Memcached. */
    MEMCACHED: 'memcached';
    /** CockroachDB. */
    COCKROACHDB: 'cockroachdb';
};
/**
 * The constant map of values for DbSystemValues.
 * @deprecated Use the DBSYSTEMVALUES_XXXXX constants rather than the DbSystemValues.XXXXX for bundle minification.
 */
export declare const DbSystemValues: DbSystemValues;
/**
 * The consistency level of the query. Based on consistency values from [CQL](https://docs.datastax.com/en/cassandra-oss/3.0/cassandra/dml/dmlConfigConsistency.html).
 *
 * @deprecated Use DB_CASSANDRA_CONSISTENCY_LEVEL_VALUE_ALL in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const DBCASSANDRACONSISTENCYLEVELVALUES_ALL = "all";
/**
 * The consistency level of the query. Based on consistency values from [CQL](https://docs.datastax.com/en/cassandra-oss/3.0/cassandra/dml/dmlConfigConsistency.html).
 *
 * @deprecated Use DB_CASSANDRA_CONSISTENCY_LEVEL_VALUE_EACH_QUORUM in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM = "each_quorum";
/**
 * The consistency level of the query. Based on consistency values from [CQL](https://docs.datastax.com/en/cassandra-oss/3.0/cassandra/dml/dmlConfigConsistency.html).
 *
 * @deprecated Use DB_CASSANDRA_CONSISTENCY_LEVEL_VALUE_QUORUM in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM = "quorum";
/**
 * The consistency level of the query. Based on consistency values from [CQL](https://docs.datastax.com/en/cassandra-oss/3.0/cassandra/dml/dmlConfigConsistency.html).
 *
 * @deprecated Use DB_CASSANDRA_CONSISTENCY_LEVEL_VALUE_LOCAL_QUORUM in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM = "local_quorum";
/**
 * The consistency level of the query. Based on consistency values from [CQL](https://docs.datastax.com/en/cassandra-oss/3.0/cassandra/dml/dmlConfigConsistency.html).
 *
 * @deprecated Use DB_CASSANDRA_CONSISTENCY_LEVEL_VALUE_ONE in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const DBCASSANDRACONSISTENCYLEVELVALUES_ONE = "one";
/**
 * The consistency level of the query. Based on consistency values from [CQL](https://docs.datastax.com/en/cassandra-oss/3.0/cassandra/dml/dmlConfigConsistency.html).
 *
 * @deprecated Use DB_CASSANDRA_CONSISTENCY_LEVEL_VALUE_TWO in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const DBCASSANDRACONSISTENCYLEVELVALUES_TWO = "two";
/**
 * The consistency level of the query. Based on consistency values from [CQL](https://docs.datastax.com/en/cassandra-oss/3.0/cassandra/dml/dmlConfigConsistency.html).
 *
 * @deprecated Use DB_CASSANDRA_CONSISTENCY_LEVEL_VALUE_THREE in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const DBCASSANDRACONSISTENCYLEVELVALUES_THREE = "three";
/**
 * The consistency level of the query. Based on consistency values from [CQL](https://docs.datastax.com/en/cassandra-oss/3.0/cassandra/dml/dmlConfigConsistency.html).
 *
 * @deprecated Use DB_CASSANDRA_CONSISTENCY_LEVEL_VALUE_LOCAL_ONE in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE = "local_one";
/**
 * The consistency level of the query. Based on consistency values from [CQL](https://docs.datastax.com/en/cassandra-oss/3.0/cassandra/dml/dmlConfigConsistency.html).
 *
 * @deprecated Use DB_CASSANDRA_CONSISTENCY_LEVEL_VALUE_ANY in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const DBCASSANDRACONSISTENCYLEVELVALUES_ANY = "any";
/**
 * The consistency level of the query. Based on consistency values from [CQL](https://docs.datastax.com/en/cassandra-oss/3.0/cassandra/dml/dmlConfigConsistency.html).
 *
 * @deprecated Use DB_CASSANDRA_CONSISTENCY_LEVEL_VALUE_SERIAL in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL = "serial";
/**
 * The consistency level of the query. Based on consistency values from [CQL](https://docs.datastax.com/en/cassandra-oss/3.0/cassandra/dml/dmlConfigConsistency.html).
 *
 * @deprecated Use DB_CASSANDRA_CONSISTENCY_LEVEL_VALUE_LOCAL_SERIAL in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL = "local_serial";
/**
 * Identifies the Values for DbCassandraConsistencyLevelValues enum definition
 *
 * The consistency level of the query. Based on consistency values from [CQL](https://docs.datastax.com/en/cassandra-oss/3.0/cassandra/dml/dmlConfigConsistency.html).
 * @deprecated Use the DBCASSANDRACONSISTENCYLEVELVALUES_XXXXX constants rather than the DbCassandraConsistencyLevelValues.XXXXX for bundle minification.
 */
export type DbCassandraConsistencyLevelValues = {
    /** all. */
    ALL: 'all';
    /** each_quorum. */
    EACH_QUORUM: 'each_quorum';
    /** quorum. */
    QUORUM: 'quorum';
    /** local_quorum. */
    LOCAL_QUORUM: 'local_quorum';
    /** one. */
    ONE: 'one';
    /** two. */
    TWO: 'two';
    /** three. */
    THREE: 'three';
    /** local_one. */
    LOCAL_ONE: 'local_one';
    /** any. */
    ANY: 'any';
    /** serial. */
    SERIAL: 'serial';
    /** local_serial. */
    LOCAL_SERIAL: 'local_serial';
};
/**
 * The constant map of values for DbCassandraConsistencyLevelValues.
 * @deprecated Use the DBCASSANDRACONSISTENCYLEVELVALUES_XXXXX constants rather than the DbCassandraConsistencyLevelValues.XXXXX for bundle minification.
 */
export declare const DbCassandraConsistencyLevelValues: DbCassandraConsistencyLevelValues;
/**
 * Type of the trigger on which the function is executed.
 *
 * @deprecated Use FAAS_TRIGGER_VALUE_DATASOURCE in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const FAASTRIGGERVALUES_DATASOURCE = "datasource";
/**
 * Type of the trigger on which the function is executed.
 *
 * @deprecated Use FAAS_TRIGGER_VALUE_HTTP in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const FAASTRIGGERVALUES_HTTP = "http";
/**
 * Type of the trigger on which the function is executed.
 *
 * @deprecated Use FAAS_TRIGGER_VALUE_PUBSUB in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const FAASTRIGGERVALUES_PUBSUB = "pubsub";
/**
 * Type of the trigger on which the function is executed.
 *
 * @deprecated Use FAAS_TRIGGER_VALUE_TIMER in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const FAASTRIGGERVALUES_TIMER = "timer";
/**
 * Type of the trigger on which the function is executed.
 *
 * @deprecated Use FAAS_TRIGGER_VALUE_OTHER in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const FAASTRIGGERVALUES_OTHER = "other";
/**
 * Identifies the Values for FaasTriggerValues enum definition
 *
 * Type of the trigger on which the function is executed.
 * @deprecated Use the FAASTRIGGERVALUES_XXXXX constants rather than the FaasTriggerValues.XXXXX for bundle minification.
 */
export type FaasTriggerValues = {
    /** A response to some data source operation such as a database or filesystem read/write. */
    DATASOURCE: 'datasource';
    /** To provide an answer to an inbound HTTP request. */
    HTTP: 'http';
    /** A function is set to be executed when messages are sent to a messaging system. */
    PUBSUB: 'pubsub';
    /** A function is scheduled to be executed regularly. */
    TIMER: 'timer';
    /** If none of the others apply. */
    OTHER: 'other';
};
/**
 * The constant map of values for FaasTriggerValues.
 * @deprecated Use the FAASTRIGGERVALUES_XXXXX constants rather than the FaasTriggerValues.XXXXX for bundle minification.
 */
export declare const FaasTriggerValues: FaasTriggerValues;
/**
 * Describes the type of the operation that was performed on the data.
 *
 * @deprecated Use FAAS_DOCUMENT_OPERATION_VALUE_INSERT in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const FAASDOCUMENTOPERATIONVALUES_INSERT = "insert";
/**
 * Describes the type of the operation that was performed on the data.
 *
 * @deprecated Use FAAS_DOCUMENT_OPERATION_VALUE_EDIT in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const FAASDOCUMENTOPERATIONVALUES_EDIT = "edit";
/**
 * Describes the type of the operation that was performed on the data.
 *
 * @deprecated Use FAAS_DOCUMENT_OPERATION_VALUE_DELETE in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const FAASDOCUMENTOPERATIONVALUES_DELETE = "delete";
/**
 * Identifies the Values for FaasDocumentOperationValues enum definition
 *
 * Describes the type of the operation that was performed on the data.
 * @deprecated Use the FAASDOCUMENTOPERATIONVALUES_XXXXX constants rather than the FaasDocumentOperationValues.XXXXX for bundle minification.
 */
export type FaasDocumentOperationValues = {
    /** When a new object is created. */
    INSERT: 'insert';
    /** When an object is modified. */
    EDIT: 'edit';
    /** When an object is deleted. */
    DELETE: 'delete';
};
/**
 * The constant map of values for FaasDocumentOperationValues.
 * @deprecated Use the FAASDOCUMENTOPERATIONVALUES_XXXXX constants rather than the FaasDocumentOperationValues.XXXXX for bundle minification.
 */
export declare const FaasDocumentOperationValues: FaasDocumentOperationValues;
/**
 * The cloud provider of the invoked function.
 *
 * Note: SHOULD be equal to the `cloud.provider` resource attribute of the invoked function.
 *
 * @deprecated Use FAAS_INVOKED_PROVIDER_VALUE_ALIBABA_CLOUD in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD = "alibaba_cloud";
/**
 * The cloud provider of the invoked function.
 *
 * Note: SHOULD be equal to the `cloud.provider` resource attribute of the invoked function.
 *
 * @deprecated Use FAAS_INVOKED_PROVIDER_VALUE_AWS in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const FAASINVOKEDPROVIDERVALUES_AWS = "aws";
/**
 * The cloud provider of the invoked function.
 *
 * Note: SHOULD be equal to the `cloud.provider` resource attribute of the invoked function.
 *
 * @deprecated Use FAAS_INVOKED_PROVIDER_VALUE_AZURE in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const FAASINVOKEDPROVIDERVALUES_AZURE = "azure";
/**
 * The cloud provider of the invoked function.
 *
 * Note: SHOULD be equal to the `cloud.provider` resource attribute of the invoked function.
 *
 * @deprecated Use FAAS_INVOKED_PROVIDER_VALUE_GCP in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const FAASINVOKEDPROVIDERVALUES_GCP = "gcp";
/**
 * Identifies the Values for FaasInvokedProviderValues enum definition
 *
 * The cloud provider of the invoked function.
 *
 * Note: SHOULD be equal to the `cloud.provider` resource attribute of the invoked function.
 * @deprecated Use the FAASINVOKEDPROVIDERVALUES_XXXXX constants rather than the FaasInvokedProviderValues.XXXXX for bundle minification.
 */
export type FaasInvokedProviderValues = {
    /** Alibaba Cloud. */
    ALIBABA_CLOUD: 'alibaba_cloud';
    /** Amazon Web Services. */
    AWS: 'aws';
    /** Microsoft Azure. */
    AZURE: 'azure';
    /** Google Cloud Platform. */
    GCP: 'gcp';
};
/**
 * The constant map of values for FaasInvokedProviderValues.
 * @deprecated Use the FAASINVOKEDPROVIDERVALUES_XXXXX constants rather than the FaasInvokedProviderValues.XXXXX for bundle minification.
 */
export declare const FaasInvokedProviderValues: FaasInvokedProviderValues;
/**
 * Transport protocol used. See note below.
 *
 * @deprecated Use NET_TRANSPORT_VALUE_IP_TCP in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const NETTRANSPORTVALUES_IP_TCP = "ip_tcp";
/**
 * Transport protocol used. See note below.
 *
 * @deprecated Use NET_TRANSPORT_VALUE_IP_UDP in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const NETTRANSPORTVALUES_IP_UDP = "ip_udp";
/**
 * Transport protocol used. See note below.
 *
 * @deprecated Removed in v1.21.0.
 */
export declare const NETTRANSPORTVALUES_IP = "ip";
/**
 * Transport protocol used. See note below.
 *
 * @deprecated Removed in v1.21.0.
 */
export declare const NETTRANSPORTVALUES_UNIX = "unix";
/**
 * Transport protocol used. See note below.
 *
 * @deprecated Use NET_TRANSPORT_VALUE_PIPE in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const NETTRANSPORTVALUES_PIPE = "pipe";
/**
 * Transport protocol used. See note below.
 *
 * @deprecated Use NET_TRANSPORT_VALUE_INPROC in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const NETTRANSPORTVALUES_INPROC = "inproc";
/**
 * Transport protocol used. See note below.
 *
 * @deprecated Use NET_TRANSPORT_VALUE_OTHER in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const NETTRANSPORTVALUES_OTHER = "other";
/**
 * Identifies the Values for NetTransportValues enum definition
 *
 * Transport protocol used. See note below.
 * @deprecated Use the NETTRANSPORTVALUES_XXXXX constants rather than the NetTransportValues.XXXXX for bundle minification.
 */
export type NetTransportValues = {
    /** ip_tcp. */
    IP_TCP: 'ip_tcp';
    /** ip_udp. */
    IP_UDP: 'ip_udp';
    /** Another IP-based protocol. */
    IP: 'ip';
    /** Unix Domain socket. See below. */
    UNIX: 'unix';
    /** Named or anonymous pipe. See note below. */
    PIPE: 'pipe';
    /** In-process communication. */
    INPROC: 'inproc';
    /** Something else (non IP-based). */
    OTHER: 'other';
};
/**
 * The constant map of values for NetTransportValues.
 * @deprecated Use the NETTRANSPORTVALUES_XXXXX constants rather than the NetTransportValues.XXXXX for bundle minification.
 */
export declare const NetTransportValues: NetTransportValues;
/**
 * The internet connection type currently being used by the host.
 *
 * @deprecated Use NETWORK_CONNECTION_TYPE_VALUE_WIFI in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const NETHOSTCONNECTIONTYPEVALUES_WIFI = "wifi";
/**
 * The internet connection type currently being used by the host.
 *
 * @deprecated Use NETWORK_CONNECTION_TYPE_VALUE_WIRED in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const NETHOSTCONNECTIONTYPEVALUES_WIRED = "wired";
/**
 * The internet connection type currently being used by the host.
 *
 * @deprecated Use NETWORK_CONNECTION_TYPE_VALUE_CELL in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const NETHOSTCONNECTIONTYPEVALUES_CELL = "cell";
/**
 * The internet connection type currently being used by the host.
 *
 * @deprecated Use NETWORK_CONNECTION_TYPE_VALUE_UNAVAILABLE in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE = "unavailable";
/**
 * The internet connection type currently being used by the host.
 *
 * @deprecated Use NETWORK_CONNECTION_TYPE_VALUE_UNKNOWN in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const NETHOSTCONNECTIONTYPEVALUES_UNKNOWN = "unknown";
/**
 * Identifies the Values for NetHostConnectionTypeValues enum definition
 *
 * The internet connection type currently being used by the host.
 * @deprecated Use the NETHOSTCONNECTIONTYPEVALUES_XXXXX constants rather than the NetHostConnectionTypeValues.XXXXX for bundle minification.
 */
export type NetHostConnectionTypeValues = {
    /** wifi. */
    WIFI: 'wifi';
    /** wired. */
    WIRED: 'wired';
    /** cell. */
    CELL: 'cell';
    /** unavailable. */
    UNAVAILABLE: 'unavailable';
    /** unknown. */
    UNKNOWN: 'unknown';
};
/**
 * The constant map of values for NetHostConnectionTypeValues.
 * @deprecated Use the NETHOSTCONNECTIONTYPEVALUES_XXXXX constants rather than the NetHostConnectionTypeValues.XXXXX for bundle minification.
 */
export declare const NetHostConnectionTypeValues: NetHostConnectionTypeValues;
/**
 * This describes more details regarding the connection.type. It may be the type of cell technology connection, but it could be used for describing details about a wifi connection.
 *
 * @deprecated Use NETWORK_CONNECTION_SUBTYPE_VALUE_GPRS in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const NETHOSTCONNECTIONSUBTYPEVALUES_GPRS = "gprs";
/**
 * This describes more details regarding the connection.type. It may be the type of cell technology connection, but it could be used for describing details about a wifi connection.
 *
 * @deprecated Use NETWORK_CONNECTION_SUBTYPE_VALUE_EDGE in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const NETHOSTCONNECTIONSUBTYPEVALUES_EDGE = "edge";
/**
 * This describes more details regarding the connection.type. It may be the type of cell technology connection, but it could be used for describing details about a wifi connection.
 *
 * @deprecated Use NETWORK_CONNECTION_SUBTYPE_VALUE_UMTS in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const NETHOSTCONNECTIONSUBTYPEVALUES_UMTS = "umts";
/**
 * This describes more details regarding the connection.type. It may be the type of cell technology connection, but it could be used for describing details about a wifi connection.
 *
 * @deprecated Use NETWORK_CONNECTION_SUBTYPE_VALUE_CDMA in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const NETHOSTCONNECTIONSUBTYPEVALUES_CDMA = "cdma";
/**
 * This describes more details regarding the connection.type. It may be the type of cell technology connection, but it could be used for describing details about a wifi connection.
 *
 * @deprecated Use NETWORK_CONNECTION_SUBTYPE_VALUE_EVDO_0 in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0 = "evdo_0";
/**
 * This describes more details regarding the connection.type. It may be the type of cell technology connection, but it could be used for describing details about a wifi connection.
 *
 * @deprecated Use NETWORK_CONNECTION_SUBTYPE_VALUE_EVDO_A in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A = "evdo_a";
/**
 * This describes more details regarding the connection.type. It may be the type of cell technology connection, but it could be used for describing details about a wifi connection.
 *
 * @deprecated Use NETWORK_CONNECTION_SUBTYPE_VALUE_CDMA2000_1XRTT in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT = "cdma2000_1xrtt";
/**
 * This describes more details regarding the connection.type. It may be the type of cell technology connection, but it could be used for describing details about a wifi connection.
 *
 * @deprecated Use NETWORK_CONNECTION_SUBTYPE_VALUE_HSDPA in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA = "hsdpa";
/**
 * This describes more details regarding the connection.type. It may be the type of cell technology connection, but it could be used for describing details about a wifi connection.
 *
 * @deprecated Use NETWORK_CONNECTION_SUBTYPE_VALUE_HSUPA in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA = "hsupa";
/**
 * This describes more details regarding the connection.type. It may be the type of cell technology connection, but it could be used for describing details about a wifi connection.
 *
 * @deprecated Use NETWORK_CONNECTION_SUBTYPE_VALUE_HSPA in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const NETHOSTCONNECTIONSUBTYPEVALUES_HSPA = "hspa";
/**
 * This describes more details regarding the connection.type. It may be the type of cell technology connection, but it could be used for describing details about a wifi connection.
 *
 * @deprecated Use NETWORK_CONNECTION_SUBTYPE_VALUE_IDEN in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const NETHOSTCONNECTIONSUBTYPEVALUES_IDEN = "iden";
/**
 * This describes more details regarding the connection.type. It may be the type of cell technology connection, but it could be used for describing details about a wifi connection.
 *
 * @deprecated Use NETWORK_CONNECTION_SUBTYPE_VALUE_EVDO_B in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B = "evdo_b";
/**
 * This describes more details regarding the connection.type. It may be the type of cell technology connection, but it could be used for describing details about a wifi connection.
 *
 * @deprecated Use NETWORK_CONNECTION_SUBTYPE_VALUE_LTE in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const NETHOSTCONNECTIONSUBTYPEVALUES_LTE = "lte";
/**
 * This describes more details regarding the connection.type. It may be the type of cell technology connection, but it could be used for describing details about a wifi connection.
 *
 * @deprecated Use NETWORK_CONNECTION_SUBTYPE_VALUE_EHRPD in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD = "ehrpd";
/**
 * This describes more details regarding the connection.type. It may be the type of cell technology connection, but it could be used for describing details about a wifi connection.
 *
 * @deprecated Use NETWORK_CONNECTION_SUBTYPE_VALUE_HSPAP in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP = "hspap";
/**
 * This describes more details regarding the connection.type. It may be the type of cell technology connection, but it could be used for describing details about a wifi connection.
 *
 * @deprecated Use NETWORK_CONNECTION_SUBTYPE_VALUE_GSM in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const NETHOSTCONNECTIONSUBTYPEVALUES_GSM = "gsm";
/**
 * This describes more details regarding the connection.type. It may be the type of cell technology connection, but it could be used for describing details about a wifi connection.
 *
 * @deprecated Use NETWORK_CONNECTION_SUBTYPE_VALUE_TD_SCDMA in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA = "td_scdma";
/**
 * This describes more details regarding the connection.type. It may be the type of cell technology connection, but it could be used for describing details about a wifi connection.
 *
 * @deprecated Use NETWORK_CONNECTION_SUBTYPE_VALUE_IWLAN in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN = "iwlan";
/**
 * This describes more details regarding the connection.type. It may be the type of cell technology connection, but it could be used for describing details about a wifi connection.
 *
 * @deprecated Use NETWORK_CONNECTION_SUBTYPE_VALUE_NR in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const NETHOSTCONNECTIONSUBTYPEVALUES_NR = "nr";
/**
 * This describes more details regarding the connection.type. It may be the type of cell technology connection, but it could be used for describing details about a wifi connection.
 *
 * @deprecated Use NETWORK_CONNECTION_SUBTYPE_VALUE_NRNSA in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA = "nrnsa";
/**
 * This describes more details regarding the connection.type. It may be the type of cell technology connection, but it could be used for describing details about a wifi connection.
 *
 * @deprecated Use NETWORK_CONNECTION_SUBTYPE_VALUE_LTE_CA in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA = "lte_ca";
/**
 * Identifies the Values for NetHostConnectionSubtypeValues enum definition
 *
 * This describes more details regarding the connection.type. It may be the type of cell technology connection, but it could be used for describing details about a wifi connection.
 * @deprecated Use the NETHOSTCONNECTIONSUBTYPEVALUES_XXXXX constants rather than the NetHostConnectionSubtypeValues.XXXXX for bundle minification.
 */
export type NetHostConnectionSubtypeValues = {
    /** GPRS. */
    GPRS: 'gprs';
    /** EDGE. */
    EDGE: 'edge';
    /** UMTS. */
    UMTS: 'umts';
    /** CDMA. */
    CDMA: 'cdma';
    /** EVDO Rel. 0. */
    EVDO_0: 'evdo_0';
    /** EVDO Rev. A. */
    EVDO_A: 'evdo_a';
    /** CDMA2000 1XRTT. */
    CDMA2000_1XRTT: 'cdma2000_1xrtt';
    /** HSDPA. */
    HSDPA: 'hsdpa';
    /** HSUPA. */
    HSUPA: 'hsupa';
    /** HSPA. */
    HSPA: 'hspa';
    /** IDEN. */
    IDEN: 'iden';
    /** EVDO Rev. B. */
    EVDO_B: 'evdo_b';
    /** LTE. */
    LTE: 'lte';
    /** EHRPD. */
    EHRPD: 'ehrpd';
    /** HSPAP. */
    HSPAP: 'hspap';
    /** GSM. */
    GSM: 'gsm';
    /** TD-SCDMA. */
    TD_SCDMA: 'td_scdma';
    /** IWLAN. */
    IWLAN: 'iwlan';
    /** 5G NR (New Radio). */
    NR: 'nr';
    /** 5G NRNSA (New Radio Non-Standalone). */
    NRNSA: 'nrnsa';
    /** LTE CA. */
    LTE_CA: 'lte_ca';
};
/**
 * The constant map of values for NetHostConnectionSubtypeValues.
 * @deprecated Use the NETHOSTCONNECTIONSUBTYPEVALUES_XXXXX constants rather than the NetHostConnectionSubtypeValues.XXXXX for bundle minification.
 */
export declare const NetHostConnectionSubtypeValues: NetHostConnectionSubtypeValues;
/**
 * Kind of HTTP protocol used.
 *
 * Note: If `net.transport` is not specified, it can be assumed to be `IP.TCP` except if `http.flavor` is `QUIC`, in which case `IP.UDP` is assumed.
 *
 * @deprecated Use HTTP_FLAVOR_VALUE_HTTP_1_0 in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const HTTPFLAVORVALUES_HTTP_1_0 = "1.0";
/**
 * Kind of HTTP protocol used.
 *
 * Note: If `net.transport` is not specified, it can be assumed to be `IP.TCP` except if `http.flavor` is `QUIC`, in which case `IP.UDP` is assumed.
 *
 * @deprecated Use HTTP_FLAVOR_VALUE_HTTP_1_1 in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const HTTPFLAVORVALUES_HTTP_1_1 = "1.1";
/**
 * Kind of HTTP protocol used.
 *
 * Note: If `net.transport` is not specified, it can be assumed to be `IP.TCP` except if `http.flavor` is `QUIC`, in which case `IP.UDP` is assumed.
 *
 * @deprecated Use HTTP_FLAVOR_VALUE_HTTP_2_0 in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const HTTPFLAVORVALUES_HTTP_2_0 = "2.0";
/**
 * Kind of HTTP protocol used.
 *
 * Note: If `net.transport` is not specified, it can be assumed to be `IP.TCP` except if `http.flavor` is `QUIC`, in which case `IP.UDP` is assumed.
 *
 * @deprecated Use HTTP_FLAVOR_VALUE_SPDY in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const HTTPFLAVORVALUES_SPDY = "SPDY";
/**
 * Kind of HTTP protocol used.
 *
 * Note: If `net.transport` is not specified, it can be assumed to be `IP.TCP` except if `http.flavor` is `QUIC`, in which case `IP.UDP` is assumed.
 *
 * @deprecated Use HTTP_FLAVOR_VALUE_QUIC in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const HTTPFLAVORVALUES_QUIC = "QUIC";
/**
 * Identifies the Values for HttpFlavorValues enum definition
 *
 * Kind of HTTP protocol used.
 *
 * Note: If `net.transport` is not specified, it can be assumed to be `IP.TCP` except if `http.flavor` is `QUIC`, in which case `IP.UDP` is assumed.
 * @deprecated Use the HTTPFLAVORVALUES_XXXXX constants rather than the HttpFlavorValues.XXXXX for bundle minification.
 */
export type HttpFlavorValues = {
    /** HTTP 1.0. */
    HTTP_1_0: '1.0';
    /** HTTP 1.1. */
    HTTP_1_1: '1.1';
    /** HTTP 2. */
    HTTP_2_0: '2.0';
    /** SPDY protocol. */
    SPDY: 'SPDY';
    /** QUIC protocol. */
    QUIC: 'QUIC';
};
/**
 * The constant map of values for HttpFlavorValues.
 * @deprecated Use the HTTPFLAVORVALUES_XXXXX constants rather than the HttpFlavorValues.XXXXX for bundle minification.
 */
export declare const HttpFlavorValues: HttpFlavorValues;
/**
 * The kind of message destination.
 *
 * @deprecated Removed in semconv v1.20.0.
 */
export declare const MESSAGINGDESTINATIONKINDVALUES_QUEUE = "queue";
/**
 * The kind of message destination.
 *
 * @deprecated Removed in semconv v1.20.0.
 */
export declare const MESSAGINGDESTINATIONKINDVALUES_TOPIC = "topic";
/**
 * Identifies the Values for MessagingDestinationKindValues enum definition
 *
 * The kind of message destination.
 * @deprecated Use the MESSAGINGDESTINATIONKINDVALUES_XXXXX constants rather than the MessagingDestinationKindValues.XXXXX for bundle minification.
 */
export type MessagingDestinationKindValues = {
    /** A message sent to a queue. */
    QUEUE: 'queue';
    /** A message sent to a topic. */
    TOPIC: 'topic';
};
/**
 * The constant map of values for MessagingDestinationKindValues.
 * @deprecated Use the MESSAGINGDESTINATIONKINDVALUES_XXXXX constants rather than the MessagingDestinationKindValues.XXXXX for bundle minification.
 */
export declare const MessagingDestinationKindValues: MessagingDestinationKindValues;
/**
 * A string identifying the kind of message consumption as defined in the [Operation names](#operation-names) section above. If the operation is &#34;send&#34;, this attribute MUST NOT be set, since the operation can be inferred from the span kind in that case.
 *
 * @deprecated Use MESSAGING_OPERATION_TYPE_VALUE_RECEIVE in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const MESSAGINGOPERATIONVALUES_RECEIVE = "receive";
/**
 * A string identifying the kind of message consumption as defined in the [Operation names](#operation-names) section above. If the operation is &#34;send&#34;, this attribute MUST NOT be set, since the operation can be inferred from the span kind in that case.
 *
 * @deprecated Use MESSAGING_OPERATION_TYPE_VALUE_PROCESS in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const MESSAGINGOPERATIONVALUES_PROCESS = "process";
/**
 * Identifies the Values for MessagingOperationValues enum definition
 *
 * A string identifying the kind of message consumption as defined in the [Operation names](#operation-names) section above. If the operation is &#34;send&#34;, this attribute MUST NOT be set, since the operation can be inferred from the span kind in that case.
 * @deprecated Use the MESSAGINGOPERATIONVALUES_XXXXX constants rather than the MessagingOperationValues.XXXXX for bundle minification.
 */
export type MessagingOperationValues = {
    /** receive. */
    RECEIVE: 'receive';
    /** process. */
    PROCESS: 'process';
};
/**
 * The constant map of values for MessagingOperationValues.
 * @deprecated Use the MESSAGINGOPERATIONVALUES_XXXXX constants rather than the MessagingOperationValues.XXXXX for bundle minification.
 */
export declare const MessagingOperationValues: MessagingOperationValues;
/**
 * The [numeric status code](https://github.com/grpc/grpc/blob/v1.33.2/doc/statuscodes.md) of the gRPC request.
 *
 * @deprecated Use RPC_GRPC_STATUS_CODE_VALUE_OK in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const RPCGRPCSTATUSCODEVALUES_OK = 0;
/**
 * The [numeric status code](https://github.com/grpc/grpc/blob/v1.33.2/doc/statuscodes.md) of the gRPC request.
 *
 * @deprecated Use RPC_GRPC_STATUS_CODE_VALUE_CANCELLED in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const RPCGRPCSTATUSCODEVALUES_CANCELLED = 1;
/**
 * The [numeric status code](https://github.com/grpc/grpc/blob/v1.33.2/doc/statuscodes.md) of the gRPC request.
 *
 * @deprecated Use RPC_GRPC_STATUS_CODE_VALUE_UNKNOWN in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const RPCGRPCSTATUSCODEVALUES_UNKNOWN = 2;
/**
 * The [numeric status code](https://github.com/grpc/grpc/blob/v1.33.2/doc/statuscodes.md) of the gRPC request.
 *
 * @deprecated Use RPC_GRPC_STATUS_CODE_VALUE_INVALID_ARGUMENT in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT = 3;
/**
 * The [numeric status code](https://github.com/grpc/grpc/blob/v1.33.2/doc/statuscodes.md) of the gRPC request.
 *
 * @deprecated Use RPC_GRPC_STATUS_CODE_VALUE_DEADLINE_EXCEEDED in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED = 4;
/**
 * The [numeric status code](https://github.com/grpc/grpc/blob/v1.33.2/doc/statuscodes.md) of the gRPC request.
 *
 * @deprecated Use RPC_GRPC_STATUS_CODE_VALUE_NOT_FOUND in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const RPCGRPCSTATUSCODEVALUES_NOT_FOUND = 5;
/**
 * The [numeric status code](https://github.com/grpc/grpc/blob/v1.33.2/doc/statuscodes.md) of the gRPC request.
 *
 * @deprecated Use RPC_GRPC_STATUS_CODE_VALUE_ALREADY_EXISTS in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS = 6;
/**
 * The [numeric status code](https://github.com/grpc/grpc/blob/v1.33.2/doc/statuscodes.md) of the gRPC request.
 *
 * @deprecated Use RPC_GRPC_STATUS_CODE_VALUE_PERMISSION_DENIED in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED = 7;
/**
 * The [numeric status code](https://github.com/grpc/grpc/blob/v1.33.2/doc/statuscodes.md) of the gRPC request.
 *
 * @deprecated Use RPC_GRPC_STATUS_CODE_VALUE_RESOURCE_EXHAUSTED in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED = 8;
/**
 * The [numeric status code](https://github.com/grpc/grpc/blob/v1.33.2/doc/statuscodes.md) of the gRPC request.
 *
 * @deprecated Use RPC_GRPC_STATUS_CODE_VALUE_FAILED_PRECONDITION in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION = 9;
/**
 * The [numeric status code](https://github.com/grpc/grpc/blob/v1.33.2/doc/statuscodes.md) of the gRPC request.
 *
 * @deprecated Use RPC_GRPC_STATUS_CODE_VALUE_ABORTED in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const RPCGRPCSTATUSCODEVALUES_ABORTED = 10;
/**
 * The [numeric status code](https://github.com/grpc/grpc/blob/v1.33.2/doc/statuscodes.md) of the gRPC request.
 *
 * @deprecated Use RPC_GRPC_STATUS_CODE_VALUE_OUT_OF_RANGE in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE = 11;
/**
 * The [numeric status code](https://github.com/grpc/grpc/blob/v1.33.2/doc/statuscodes.md) of the gRPC request.
 *
 * @deprecated Use RPC_GRPC_STATUS_CODE_VALUE_UNIMPLEMENTED in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED = 12;
/**
 * The [numeric status code](https://github.com/grpc/grpc/blob/v1.33.2/doc/statuscodes.md) of the gRPC request.
 *
 * @deprecated Use RPC_GRPC_STATUS_CODE_VALUE_INTERNAL in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const RPCGRPCSTATUSCODEVALUES_INTERNAL = 13;
/**
 * The [numeric status code](https://github.com/grpc/grpc/blob/v1.33.2/doc/statuscodes.md) of the gRPC request.
 *
 * @deprecated Use RPC_GRPC_STATUS_CODE_VALUE_UNAVAILABLE in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const RPCGRPCSTATUSCODEVALUES_UNAVAILABLE = 14;
/**
 * The [numeric status code](https://github.com/grpc/grpc/blob/v1.33.2/doc/statuscodes.md) of the gRPC request.
 *
 * @deprecated Use RPC_GRPC_STATUS_CODE_VALUE_DATA_LOSS in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const RPCGRPCSTATUSCODEVALUES_DATA_LOSS = 15;
/**
 * The [numeric status code](https://github.com/grpc/grpc/blob/v1.33.2/doc/statuscodes.md) of the gRPC request.
 *
 * @deprecated Use RPC_GRPC_STATUS_CODE_VALUE_UNAUTHENTICATED in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED = 16;
/**
 * Identifies the Values for RpcGrpcStatusCodeValues enum definition
 *
 * The [numeric status code](https://github.com/grpc/grpc/blob/v1.33.2/doc/statuscodes.md) of the gRPC request.
 * @deprecated Use the RPCGRPCSTATUSCODEVALUES_XXXXX constants rather than the RpcGrpcStatusCodeValues.XXXXX for bundle minification.
 */
export type RpcGrpcStatusCodeValues = {
    /** OK. */
    OK: 0;
    /** CANCELLED. */
    CANCELLED: 1;
    /** UNKNOWN. */
    UNKNOWN: 2;
    /** INVALID_ARGUMENT. */
    INVALID_ARGUMENT: 3;
    /** DEADLINE_EXCEEDED. */
    DEADLINE_EXCEEDED: 4;
    /** NOT_FOUND. */
    NOT_FOUND: 5;
    /** ALREADY_EXISTS. */
    ALREADY_EXISTS: 6;
    /** PERMISSION_DENIED. */
    PERMISSION_DENIED: 7;
    /** RESOURCE_EXHAUSTED. */
    RESOURCE_EXHAUSTED: 8;
    /** FAILED_PRECONDITION. */
    FAILED_PRECONDITION: 9;
    /** ABORTED. */
    ABORTED: 10;
    /** OUT_OF_RANGE. */
    OUT_OF_RANGE: 11;
    /** UNIMPLEMENTED. */
    UNIMPLEMENTED: 12;
    /** INTERNAL. */
    INTERNAL: 13;
    /** UNAVAILABLE. */
    UNAVAILABLE: 14;
    /** DATA_LOSS. */
    DATA_LOSS: 15;
    /** UNAUTHENTICATED. */
    UNAUTHENTICATED: 16;
};
/**
 * The constant map of values for RpcGrpcStatusCodeValues.
 * @deprecated Use the RPCGRPCSTATUSCODEVALUES_XXXXX constants rather than the RpcGrpcStatusCodeValues.XXXXX for bundle minification.
 */
export declare const RpcGrpcStatusCodeValues: RpcGrpcStatusCodeValues;
/**
 * Whether this is a received or sent message.
 *
 * @deprecated Use MESSAGE_TYPE_VALUE_SENT in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const MESSAGETYPEVALUES_SENT = "SENT";
/**
 * Whether this is a received or sent message.
 *
 * @deprecated Use MESSAGE_TYPE_VALUE_RECEIVED in [incubating entry-point]({@link https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv}).
 */
export declare const MESSAGETYPEVALUES_RECEIVED = "RECEIVED";
/**
 * Identifies the Values for MessageTypeValues enum definition
 *
 * Whether this is a received or sent message.
 * @deprecated Use the MESSAGETYPEVALUES_XXXXX constants rather than the MessageTypeValues.XXXXX for bundle minification.
 */
export type MessageTypeValues = {
    /** sent. */
    SENT: 'SENT';
    /** received. */
    RECEIVED: 'RECEIVED';
};
/**
 * The constant map of values for MessageTypeValues.
 * @deprecated Use the MESSAGETYPEVALUES_XXXXX constants rather than the MessageTypeValues.XXXXX for bundle minification.
 */
export declare const MessageTypeValues: MessageTypeValues;
//# sourceMappingURL=SemanticAttributes.d.ts.map