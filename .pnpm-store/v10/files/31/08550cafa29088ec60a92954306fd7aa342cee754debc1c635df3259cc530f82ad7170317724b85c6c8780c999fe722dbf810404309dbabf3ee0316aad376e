"use strict";
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ATTR_ERROR_TYPE = exports.DOTNET_GC_HEAP_GENERATION_VALUE_POH = exports.DOTNET_GC_HEAP_GENERATION_VALUE_LOH = exports.DOTNET_GC_HEAP_GENERATION_VALUE_GEN2 = exports.DOTNET_GC_HEAP_GENERATION_VALUE_GEN1 = exports.DOTNET_GC_HEAP_GENERATION_VALUE_GEN0 = exports.ATTR_DOTNET_GC_HEAP_GENERATION = exports.DEPLOYMENT_ENVIRONMENT_NAME_VALUE_TEST = exports.DEPLOYMENT_ENVIRONMENT_NAME_VALUE_STAGING = exports.DEPLOYMENT_ENVIRONMENT_NAME_VALUE_PRODUCTION = exports.DEPLOYMENT_ENVIRONMENT_NAME_VALUE_DEVELOPMENT = exports.ATTR_DEPLOYMENT_ENVIRONMENT_NAME = exports.DB_SYSTEM_NAME_VALUE_POSTGRESQL = exports.DB_SYSTEM_NAME_VALUE_MYSQL = exports.DB_SYSTEM_NAME_VALUE_MICROSOFT_SQL_SERVER = exports.DB_SYSTEM_NAME_VALUE_MARIADB = exports.ATTR_DB_SYSTEM_NAME = exports.ATTR_DB_STORED_PROCEDURE_NAME = exports.ATTR_DB_RESPONSE_STATUS_CODE = exports.ATTR_DB_QUERY_TEXT = exports.ATTR_DB_QUERY_SUMMARY = exports.ATTR_DB_OPERATION_NAME = exports.ATTR_DB_OPERATION_BATCH_SIZE = exports.ATTR_DB_NAMESPACE = exports.ATTR_DB_COLLECTION_NAME = exports.ATTR_CODE_STACKTRACE = exports.ATTR_CODE_LINE_NUMBER = exports.ATTR_CODE_FUNCTION_NAME = exports.ATTR_CODE_FILE_PATH = exports.ATTR_CODE_COLUMN_NUMBER = exports.ATTR_CLIENT_PORT = exports.ATTR_CLIENT_ADDRESS = exports.ATTR_ASPNETCORE_USER_IS_AUTHENTICATED = exports.ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_SUCCESS = exports.ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_FAILURE = exports.ATTR_ASPNETCORE_ROUTING_MATCH_STATUS = exports.ATTR_ASPNETCORE_ROUTING_IS_FALLBACK = exports.ATTR_ASPNETCORE_REQUEST_IS_UNHANDLED = exports.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_REQUEST_CANCELED = exports.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_GLOBAL_LIMITER = exports.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ENDPOINT_LIMITER = exports.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ACQUIRED = exports.ATTR_ASPNETCORE_RATE_LIMITING_RESULT = exports.ATTR_ASPNETCORE_RATE_LIMITING_POLICY = exports.ATTR_ASPNETCORE_DIAGNOSTICS_HANDLER_TYPE = exports.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_UNHANDLED = exports.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_SKIPPED = exports.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_HANDLED = exports.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_ABORTED = exports.ATTR_ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT = void 0;
exports.NETWORK_TYPE_VALUE_IPV4 = exports.ATTR_NETWORK_TYPE = exports.NETWORK_TRANSPORT_VALUE_UNIX = exports.NETWORK_TRANSPORT_VALUE_UDP = exports.NETWORK_TRANSPORT_VALUE_TCP = exports.NETWORK_TRANSPORT_VALUE_QUIC = exports.NETWORK_TRANSPORT_VALUE_PIPE = exports.ATTR_NETWORK_TRANSPORT = exports.ATTR_NETWORK_PROTOCOL_VERSION = exports.ATTR_NETWORK_PROTOCOL_NAME = exports.ATTR_NETWORK_PEER_PORT = exports.ATTR_NETWORK_PEER_ADDRESS = exports.ATTR_NETWORK_LOCAL_PORT = exports.ATTR_NETWORK_LOCAL_ADDRESS = exports.JVM_THREAD_STATE_VALUE_WAITING = exports.JVM_THREAD_STATE_VALUE_TIMED_WAITING = exports.JVM_THREAD_STATE_VALUE_TERMINATED = exports.JVM_THREAD_STATE_VALUE_RUNNABLE = exports.JVM_THREAD_STATE_VALUE_NEW = exports.JVM_THREAD_STATE_VALUE_BLOCKED = exports.ATTR_JVM_THREAD_STATE = exports.ATTR_JVM_THREAD_DAEMON = exports.JVM_MEMORY_TYPE_VALUE_NON_HEAP = exports.JVM_MEMORY_TYPE_VALUE_HEAP = exports.ATTR_JVM_MEMORY_TYPE = exports.ATTR_JVM_MEMORY_POOL_NAME = exports.ATTR_JVM_GC_NAME = exports.ATTR_JVM_GC_ACTION = exports.ATTR_HTTP_ROUTE = exports.ATTR_HTTP_RESPONSE_STATUS_CODE = exports.ATTR_HTTP_RESPONSE_HEADER = exports.ATTR_HTTP_REQUEST_RESEND_COUNT = exports.ATTR_HTTP_REQUEST_METHOD_ORIGINAL = exports.HTTP_REQUEST_METHOD_VALUE_TRACE = exports.HTTP_REQUEST_METHOD_VALUE_PUT = exports.HTTP_REQUEST_METHOD_VALUE_POST = exports.HTTP_REQUEST_METHOD_VALUE_PATCH = exports.HTTP_REQUEST_METHOD_VALUE_OPTIONS = exports.HTTP_REQUEST_METHOD_VALUE_HEAD = exports.HTTP_REQUEST_METHOD_VALUE_GET = exports.HTTP_REQUEST_METHOD_VALUE_DELETE = exports.HTTP_REQUEST_METHOD_VALUE_CONNECT = exports.HTTP_REQUEST_METHOD_VALUE_OTHER = exports.ATTR_HTTP_REQUEST_METHOD = exports.ATTR_HTTP_REQUEST_HEADER = exports.ATTR_EXCEPTION_TYPE = exports.ATTR_EXCEPTION_STACKTRACE = exports.ATTR_EXCEPTION_MESSAGE = exports.ATTR_EXCEPTION_ESCAPED = exports.ERROR_TYPE_VALUE_OTHER = void 0;
exports.ATTR_USER_AGENT_ORIGINAL = exports.ATTR_URL_SCHEME = exports.ATTR_URL_QUERY = exports.ATTR_URL_PATH = exports.ATTR_URL_FULL = exports.ATTR_URL_FRAGMENT = exports.ATTR_TELEMETRY_SDK_VERSION = exports.ATTR_TELEMETRY_SDK_NAME = exports.TELEMETRY_SDK_LANGUAGE_VALUE_WEBJS = exports.TELEMETRY_SDK_LANGUAGE_VALUE_SWIFT = exports.TELEMETRY_SDK_LANGUAGE_VALUE_RUST = exports.TELEMETRY_SDK_LANGUAGE_VALUE_RUBY = exports.TELEMETRY_SDK_LANGUAGE_VALUE_PYTHON = exports.TELEMETRY_SDK_LANGUAGE_VALUE_PHP = exports.TELEMETRY_SDK_LANGUAGE_VALUE_NODEJS = exports.TELEMETRY_SDK_LANGUAGE_VALUE_JAVA = exports.TELEMETRY_SDK_LANGUAGE_VALUE_GO = exports.TELEMETRY_SDK_LANGUAGE_VALUE_ERLANG = exports.TELEMETRY_SDK_LANGUAGE_VALUE_DOTNET = exports.TELEMETRY_SDK_LANGUAGE_VALUE_CPP = exports.ATTR_TELEMETRY_SDK_LANGUAGE = exports.ATTR_TELEMETRY_DISTRO_VERSION = exports.ATTR_TELEMETRY_DISTRO_NAME = exports.SIGNALR_TRANSPORT_VALUE_WEB_SOCKETS = exports.SIGNALR_TRANSPORT_VALUE_SERVER_SENT_EVENTS = exports.SIGNALR_TRANSPORT_VALUE_LONG_POLLING = exports.ATTR_SIGNALR_TRANSPORT = exports.SIGNALR_CONNECTION_STATUS_VALUE_TIMEOUT = exports.SIGNALR_CONNECTION_STATUS_VALUE_NORMAL_CLOSURE = exports.SIGNALR_CONNECTION_STATUS_VALUE_APP_SHUTDOWN = exports.ATTR_SIGNALR_CONNECTION_STATUS = exports.ATTR_SERVICE_VERSION = exports.ATTR_SERVICE_NAMESPACE = exports.ATTR_SERVICE_NAME = exports.ATTR_SERVICE_INSTANCE_ID = exports.ATTR_SERVER_PORT = exports.ATTR_SERVER_ADDRESS = exports.ATTR_OTEL_STATUS_DESCRIPTION = exports.OTEL_STATUS_CODE_VALUE_OK = exports.OTEL_STATUS_CODE_VALUE_ERROR = exports.ATTR_OTEL_STATUS_CODE = exports.ATTR_OTEL_SCOPE_VERSION = exports.ATTR_OTEL_SCOPE_NAME = exports.ATTR_OTEL_EVENT_NAME = exports.NETWORK_TYPE_VALUE_IPV6 = void 0;
//----------------------------------------------------------------------------------------------------------
// DO NOT EDIT, this is an Auto-generated file from scripts/semconv/templates/registry/stable/attributes.ts.j2
//----------------------------------------------------------------------------------------------------------
/**
 * ASP.NET Core exception middleware handling result.
 *
 * @example handled
 * @example unhandled
 */
exports.ATTR_ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT = 'aspnetcore.diagnostics.exception.result';
/**
 * Enum value "aborted" for attribute {@link ATTR_ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT}.
 *
 * Exception handling didn't run because the request was aborted.
 */
exports.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_ABORTED = "aborted";
/**
 * Enum value "handled" for attribute {@link ATTR_ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT}.
 *
 * Exception was handled by the exception handling middleware.
 */
exports.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_HANDLED = "handled";
/**
 * Enum value "skipped" for attribute {@link ATTR_ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT}.
 *
 * Exception handling was skipped because the response had started.
 */
exports.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_SKIPPED = "skipped";
/**
 * Enum value "unhandled" for attribute {@link ATTR_ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT}.
 *
 * Exception was not handled by the exception handling middleware.
 */
exports.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_UNHANDLED = "unhandled";
/**
 * Full type name of the [`IExceptionHandler`](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.diagnostics.iexceptionhandler) implementation that handled the exception.
 *
 * @example Contoso.MyHandler
 */
exports.ATTR_ASPNETCORE_DIAGNOSTICS_HANDLER_TYPE = 'aspnetcore.diagnostics.handler.type';
/**
 * Rate limiting policy name.
 *
 * @example fixed
 * @example sliding
 * @example token
 */
exports.ATTR_ASPNETCORE_RATE_LIMITING_POLICY = 'aspnetcore.rate_limiting.policy';
/**
 * Rate-limiting result, shows whether the lease was acquired or contains a rejection reason
 *
 * @example acquired
 * @example request_canceled
 */
exports.ATTR_ASPNETCORE_RATE_LIMITING_RESULT = 'aspnetcore.rate_limiting.result';
/**
 * Enum value "acquired" for attribute {@link ATTR_ASPNETCORE_RATE_LIMITING_RESULT}.
 *
 * Lease was acquired
 */
exports.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ACQUIRED = "acquired";
/**
 * Enum value "endpoint_limiter" for attribute {@link ATTR_ASPNETCORE_RATE_LIMITING_RESULT}.
 *
 * Lease request was rejected by the endpoint limiter
 */
exports.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ENDPOINT_LIMITER = "endpoint_limiter";
/**
 * Enum value "global_limiter" for attribute {@link ATTR_ASPNETCORE_RATE_LIMITING_RESULT}.
 *
 * Lease request was rejected by the global limiter
 */
exports.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_GLOBAL_LIMITER = "global_limiter";
/**
 * Enum value "request_canceled" for attribute {@link ATTR_ASPNETCORE_RATE_LIMITING_RESULT}.
 *
 * Lease request was canceled
 */
exports.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_REQUEST_CANCELED = "request_canceled";
/**
 * Flag indicating if request was handled by the application pipeline.
 *
 * @example true
 */
exports.ATTR_ASPNETCORE_REQUEST_IS_UNHANDLED = 'aspnetcore.request.is_unhandled';
/**
 * A value that indicates whether the matched route is a fallback route.
 *
 * @example true
 */
exports.ATTR_ASPNETCORE_ROUTING_IS_FALLBACK = 'aspnetcore.routing.is_fallback';
/**
 * Match result - success or failure
 *
 * @example success
 * @example failure
 */
exports.ATTR_ASPNETCORE_ROUTING_MATCH_STATUS = 'aspnetcore.routing.match_status';
/**
 * Enum value "failure" for attribute {@link ATTR_ASPNETCORE_ROUTING_MATCH_STATUS}.
 *
 * Match failed
 */
exports.ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_FAILURE = "failure";
/**
 * Enum value "success" for attribute {@link ATTR_ASPNETCORE_ROUTING_MATCH_STATUS}.
 *
 * Match succeeded
 */
exports.ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_SUCCESS = "success";
/**
 * A value that indicates whether the user is authenticated.
 *
 * @example true
 */
exports.ATTR_ASPNETCORE_USER_IS_AUTHENTICATED = 'aspnetcore.user.is_authenticated';
/**
 * Client address - domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.
 *
 * @example client.example.com
 * @example 10.1.2.80
 * @example /tmp/my.sock
 *
 * @note When observed from the server side, and when communicating through an intermediary, `client.address` **SHOULD** represent the client address behind any intermediaries,  for example proxies, if it's available.
 */
exports.ATTR_CLIENT_ADDRESS = 'client.address';
/**
 * Client port number.
 *
 * @example 65123
 *
 * @note When observed from the server side, and when communicating through an intermediary, `client.port` **SHOULD** represent the client port behind any intermediaries,  for example proxies, if it's available.
 */
exports.ATTR_CLIENT_PORT = 'client.port';
/**
 * The column number in `code.file.path` best representing the operation. It **SHOULD** point within the code unit named in `code.function.name`. This attribute **MUST NOT** be used on the Profile signal since the data is already captured in 'message Line'. This constraint is imposed to prevent redundancy and maintain data integrity.
 *
 * @example 16
 */
exports.ATTR_CODE_COLUMN_NUMBER = 'code.column.number';
/**
 * The source code file name that identifies the code unit as uniquely as possible (preferably an absolute file path). This attribute **MUST NOT** be used on the Profile signal since the data is already captured in 'message Function'. This constraint is imposed to prevent redundancy and maintain data integrity.
 *
 * @example "/usr/local/MyApplication/content_root/app/index.php"
 */
exports.ATTR_CODE_FILE_PATH = 'code.file.path';
/**
 * The method or function fully-qualified name without arguments. The value should fit the natural representation of the language runtime, which is also likely the same used within `code.stacktrace` attribute value. This attribute **MUST NOT** be used on the Profile signal since the data is already captured in 'message Function'. This constraint is imposed to prevent redundancy and maintain data integrity.
 *
 * @example com.example.MyHttpService.serveRequest
 * @example GuzzleHttp\\Client::transfer
 * @example fopen
 *
 * @note Values and format depends on each language runtime, thus it is impossible to provide an exhaustive list of examples.
 * The values are usually the same (or prefixes of) the ones found in native stack trace representation stored in
 * `code.stacktrace` without information on arguments.
 *
 * Examples:
 *
 *   - Java method: `com.example.MyHttpService.serveRequest`
 *   - Java anonymous class method: `com.mycompany.Main$1.myMethod`
 *   - Java lambda method: `com.mycompany.Main$$Lambda/0x0000748ae4149c00.myMethod`
 *   - PHP function: `GuzzleHttp\Client::transfer`
 *   - Go function: `github.com/my/repo/pkg.foo.func5`
 *   - Elixir: `OpenTelemetry.Ctx.new`
 *   - Erlang: `opentelemetry_ctx:new`
 *   - Rust: `playground::my_module::my_cool_func`
 *   - C function: `fopen`
 */
exports.ATTR_CODE_FUNCTION_NAME = 'code.function.name';
/**
 * The line number in `code.file.path` best representing the operation. It **SHOULD** point within the code unit named in `code.function.name`. This attribute **MUST NOT** be used on the Profile signal since the data is already captured in 'message Line'. This constraint is imposed to prevent redundancy and maintain data integrity.
 *
 * @example 42
 */
exports.ATTR_CODE_LINE_NUMBER = 'code.line.number';
/**
 * A stacktrace as a string in the natural representation for the language runtime. The representation is identical to [`exception.stacktrace`](/docs/exceptions/exceptions-spans.md#stacktrace-representation). This attribute **MUST NOT** be used on the Profile signal since the data is already captured in 'message Location'. This constraint is imposed to prevent redundancy and maintain data integrity.
 *
 * @example "at com.example.GenerateTrace.methodB(GenerateTrace.java:13)\\n at com.example.GenerateTrace.methodA(GenerateTrace.java:9)\\n at com.example.GenerateTrace.main(GenerateTrace.java:5)\\n"
 */
exports.ATTR_CODE_STACKTRACE = 'code.stacktrace';
/**
 * The name of a collection (table, container) within the database.
 *
 * @example public.users
 * @example customers
 *
 * @note It is **RECOMMENDED** to capture the value as provided by the application
 * without attempting to do any case normalization.
 *
 * The collection name **SHOULD NOT** be extracted from `db.query.text`,
 * when the database system supports query text with multiple collections
 * in non-batch operations.
 *
 * For batch operations, if the individual operations are known to have the same
 * collection name then that collection name **SHOULD** be used.
 */
exports.ATTR_DB_COLLECTION_NAME = 'db.collection.name';
/**
 * The name of the database, fully qualified within the server address and port.
 *
 * @example customers
 * @example test.users
 *
 * @note If a database system has multiple namespace components, they **SHOULD** be concatenated from the most general to the most specific namespace component, using `|` as a separator between the components. Any missing components (and their associated separators) **SHOULD** be omitted.
 * Semantic conventions for individual database systems **SHOULD** document what `db.namespace` means in the context of that system.
 * It is **RECOMMENDED** to capture the value as provided by the application without attempting to do any case normalization.
 */
exports.ATTR_DB_NAMESPACE = 'db.namespace';
/**
 * The number of queries included in a batch operation.
 *
 * @example 2
 * @example 3
 * @example 4
 *
 * @note Operations are only considered batches when they contain two or more operations, and so `db.operation.batch.size` **SHOULD** never be `1`.
 */
exports.ATTR_DB_OPERATION_BATCH_SIZE = 'db.operation.batch.size';
/**
 * The name of the operation or command being executed.
 *
 * @example findAndModify
 * @example HMSET
 * @example SELECT
 *
 * @note It is **RECOMMENDED** to capture the value as provided by the application
 * without attempting to do any case normalization.
 *
 * The operation name **SHOULD NOT** be extracted from `db.query.text`,
 * when the database system supports query text with multiple operations
 * in non-batch operations.
 *
 * If spaces can occur in the operation name, multiple consecutive spaces
 * **SHOULD** be normalized to a single space.
 *
 * For batch operations, if the individual operations are known to have the same operation name
 * then that operation name **SHOULD** be used prepended by `BATCH `,
 * otherwise `db.operation.name` **SHOULD** be `BATCH` or some other database
 * system specific term if more applicable.
 */
exports.ATTR_DB_OPERATION_NAME = 'db.operation.name';
/**
 * Low cardinality summary of a database query.
 *
 * @example SELECT wuser_table
 * @example INSERT shipping_details SELECT orders
 * @example get user by id
 *
 * @note The query summary describes a class of database queries and is useful
 * as a grouping key, especially when analyzing telemetry for database
 * calls involving complex queries.
 *
 * Summary may be available to the instrumentation through
 * instrumentation hooks or other means. If it is not available, instrumentations
 * that support query parsing **SHOULD** generate a summary following
 * [Generating query summary](/docs/db/database-spans.md#generating-a-summary-of-the-query)
 * section.
 *
 * For batch operations, if the individual operations are known to have the same query summary
 * then that query summary **SHOULD** be used prepended by `BATCH `,
 * otherwise `db.query.summary` **SHOULD** be `BATCH` or some other database
 * system specific term if more applicable.
 */
exports.ATTR_DB_QUERY_SUMMARY = 'db.query.summary';
/**
 * The database query being executed.
 *
 * @example SELECT * FROM wuser_table where username = ?
 * @example SET mykey ?
 *
 * @note For sanitization see [Sanitization of `db.query.text`](/docs/db/database-spans.md#sanitization-of-dbquerytext).
 * For batch operations, if the individual operations are known to have the same query text then that query text **SHOULD** be used, otherwise all of the individual query texts **SHOULD** be concatenated with separator `; ` or some other database system specific separator if more applicable.
 * Parameterized query text **SHOULD NOT** be sanitized. Even though parameterized query text can potentially have sensitive data, by using a parameterized query the user is giving a strong signal that any sensitive data will be passed as parameter values, and the benefit to observability of capturing the static part of the query text by default outweighs the risk.
 */
exports.ATTR_DB_QUERY_TEXT = 'db.query.text';
/**
 * Database response status code.
 *
 * @example 102
 * @example ORA-17002
 * @example 08P01
 * @example 404
 *
 * @note The status code returned by the database. Usually it represents an error code, but may also represent partial success, warning, or differentiate between various types of successful outcomes.
 * Semantic conventions for individual database systems **SHOULD** document what `db.response.status_code` means in the context of that system.
 */
exports.ATTR_DB_RESPONSE_STATUS_CODE = 'db.response.status_code';
/**
 * The name of a stored procedure within the database.
 *
 * @example GetCustomer
 *
 * @note It is **RECOMMENDED** to capture the value as provided by the application
 * without attempting to do any case normalization.
 *
 * For batch operations, if the individual operations are known to have the same
 * stored procedure name then that stored procedure name **SHOULD** be used.
 */
exports.ATTR_DB_STORED_PROCEDURE_NAME = 'db.stored_procedure.name';
/**
 * The database management system (DBMS) product as identified by the client instrumentation.
 *
 * @note The actual DBMS may differ from the one identified by the client. For example, when using PostgreSQL client libraries to connect to a CockroachDB, the `db.system.name` is set to `postgresql` based on the instrumentation's best knowledge.
 */
exports.ATTR_DB_SYSTEM_NAME = 'db.system.name';
/**
 * Enum value "mariadb" for attribute {@link ATTR_DB_SYSTEM_NAME}.
 *
 * [MariaDB](https://mariadb.org/)
 */
exports.DB_SYSTEM_NAME_VALUE_MARIADB = "mariadb";
/**
 * Enum value "microsoft.sql_server" for attribute {@link ATTR_DB_SYSTEM_NAME}.
 *
 * [Microsoft SQL Server](https://www.microsoft.com/sql-server)
 */
exports.DB_SYSTEM_NAME_VALUE_MICROSOFT_SQL_SERVER = "microsoft.sql_server";
/**
 * Enum value "mysql" for attribute {@link ATTR_DB_SYSTEM_NAME}.
 *
 * [MySQL](https://www.mysql.com/)
 */
exports.DB_SYSTEM_NAME_VALUE_MYSQL = "mysql";
/**
 * Enum value "postgresql" for attribute {@link ATTR_DB_SYSTEM_NAME}.
 *
 * [PostgreSQL](https://www.postgresql.org/)
 */
exports.DB_SYSTEM_NAME_VALUE_POSTGRESQL = "postgresql";
/**
 * Name of the [deployment environment](https://wikipedia.org/wiki/Deployment_environment) (aka deployment tier).
 *
 * @example staging
 * @example production
 *
 * @note `deployment.environment.name` does not affect the uniqueness constraints defined through
 * the `service.namespace`, `service.name` and `service.instance.id` resource attributes.
 * This implies that resources carrying the following attribute combinations **MUST** be
 * considered to be identifying the same service:
 *
 *   - `service.name=frontend`, `deployment.environment.name=production`
 *   - `service.name=frontend`, `deployment.environment.name=staging`.
 */
exports.ATTR_DEPLOYMENT_ENVIRONMENT_NAME = 'deployment.environment.name';
/**
 * Enum value "development" for attribute {@link ATTR_DEPLOYMENT_ENVIRONMENT_NAME}.
 *
 * Development environment
 */
exports.DEPLOYMENT_ENVIRONMENT_NAME_VALUE_DEVELOPMENT = "development";
/**
 * Enum value "production" for attribute {@link ATTR_DEPLOYMENT_ENVIRONMENT_NAME}.
 *
 * Production environment
 */
exports.DEPLOYMENT_ENVIRONMENT_NAME_VALUE_PRODUCTION = "production";
/**
 * Enum value "staging" for attribute {@link ATTR_DEPLOYMENT_ENVIRONMENT_NAME}.
 *
 * Staging environment
 */
exports.DEPLOYMENT_ENVIRONMENT_NAME_VALUE_STAGING = "staging";
/**
 * Enum value "test" for attribute {@link ATTR_DEPLOYMENT_ENVIRONMENT_NAME}.
 *
 * Testing environment
 */
exports.DEPLOYMENT_ENVIRONMENT_NAME_VALUE_TEST = "test";
/**
 * Name of the garbage collector managed heap generation.
 *
 * @example gen0
 * @example gen1
 * @example gen2
 */
exports.ATTR_DOTNET_GC_HEAP_GENERATION = 'dotnet.gc.heap.generation';
/**
 * Enum value "gen0" for attribute {@link ATTR_DOTNET_GC_HEAP_GENERATION}.
 *
 * Generation 0
 */
exports.DOTNET_GC_HEAP_GENERATION_VALUE_GEN0 = "gen0";
/**
 * Enum value "gen1" for attribute {@link ATTR_DOTNET_GC_HEAP_GENERATION}.
 *
 * Generation 1
 */
exports.DOTNET_GC_HEAP_GENERATION_VALUE_GEN1 = "gen1";
/**
 * Enum value "gen2" for attribute {@link ATTR_DOTNET_GC_HEAP_GENERATION}.
 *
 * Generation 2
 */
exports.DOTNET_GC_HEAP_GENERATION_VALUE_GEN2 = "gen2";
/**
 * Enum value "loh" for attribute {@link ATTR_DOTNET_GC_HEAP_GENERATION}.
 *
 * Large Object Heap
 */
exports.DOTNET_GC_HEAP_GENERATION_VALUE_LOH = "loh";
/**
 * Enum value "poh" for attribute {@link ATTR_DOTNET_GC_HEAP_GENERATION}.
 *
 * Pinned Object Heap
 */
exports.DOTNET_GC_HEAP_GENERATION_VALUE_POH = "poh";
/**
 * Describes a class of error the operation ended with.
 *
 * @example timeout
 * @example java.net.UnknownHostException
 * @example server_certificate_invalid
 * @example 500
 *
 * @note The `error.type` **SHOULD** be predictable, and **SHOULD** have low cardinality.
 *
 * When `error.type` is set to a type (e.g., an exception type), its
 * canonical class name identifying the type within the artifact **SHOULD** be used.
 *
 * If the recorded error type is a wrapper that is not meaningful for
 * failure classification, instrumentation **MAY** use the type of the inner
 * error instead. For example, in Go, errors created with `fmt.Errorf`
 * using `%w` **MAY** be unwrapped when the wrapper type does not help
 * classify the failure.
 *
 * Instrumentations **SHOULD** document the list of errors they report.
 *
 * The cardinality of `error.type` within one instrumentation library **SHOULD** be low.
 * Telemetry consumers that aggregate data from multiple instrumentation libraries and applications
 * should be prepared for `error.type` to have high cardinality at query time when no
 * additional filters are applied.
 *
 * If the operation has completed successfully, instrumentations **SHOULD NOT** set `error.type`.
 *
 * If a specific domain defines its own set of error identifiers (such as HTTP or RPC status codes),
 * it's **RECOMMENDED** to:
 *
 *   - Use a domain-specific attribute
 *   - Set `error.type` to capture all errors, regardless of whether they are defined within the domain-specific set or not.
 */
exports.ATTR_ERROR_TYPE = 'error.type';
/**
 * Enum value "_OTHER" for attribute {@link ATTR_ERROR_TYPE}.
 *
 * A fallback error value to be used when the instrumentation doesn't define a custom value.
 */
exports.ERROR_TYPE_VALUE_OTHER = "_OTHER";
/**
 * Indicates that the exception is escaping the scope of the span.
 *
 * @deprecated It's no longer recommended to record exceptions that are handled and do not escape the scope of a span.
 */
exports.ATTR_EXCEPTION_ESCAPED = 'exception.escaped';
/**
 * The exception message.
 *
 * @example Division by zero
 * @example Can't convert 'int' object to str implicitly
 *
 * @note > [!WARNING]
 *
 * > This attribute may contain sensitive information.
 */
exports.ATTR_EXCEPTION_MESSAGE = 'exception.message';
/**
 * A stacktrace as a string in the natural representation for the language runtime. The representation is to be determined and documented by each language SIG.
 *
 * @example "Exception in thread "main" java.lang.RuntimeException: Test exception\\n at com.example.GenerateTrace.methodB(GenerateTrace.java:13)\\n at com.example.GenerateTrace.methodA(GenerateTrace.java:9)\\n at com.example.GenerateTrace.main(GenerateTrace.java:5)\\n"
 */
exports.ATTR_EXCEPTION_STACKTRACE = 'exception.stacktrace';
/**
 * The type of the exception (its fully-qualified class name, if applicable). The dynamic type of the exception should be preferred over the static type in languages that support it.
 *
 * @example java.net.ConnectException
 * @example OSError
 *
 * @note If the recorded exception type is a wrapper that is not meaningful for
 * failure classification, instrumentation **MAY** use the type of the inner
 * exception instead. For example, in Go, errors created with `fmt.Errorf`
 * using `%w` **MAY** be unwrapped when the wrapper type does not help
 * classify the failure.
 */
exports.ATTR_EXCEPTION_TYPE = 'exception.type';
/**
 * HTTP request headers, `<key>` being the normalized HTTP Header name (lowercase), the value being the header values.
 *
 * @example ["application/json"]
 * @example ["1.2.3.4", "1.2.3.5"]
 *
 * @note Instrumentations **SHOULD** require an explicit configuration of which headers are to be captured.
 * Including all request headers can be a security risk - explicit configuration helps avoid leaking sensitive information.
 *
 * The `User-Agent` header is already captured in the `user_agent.original` attribute.
 * Users **MAY** explicitly configure instrumentations to capture them even though it is not recommended.
 *
 * The attribute value **MUST** consist of either multiple header values as an array of strings
 * or a single-item array containing a possibly comma-concatenated string, depending on the way
 * the HTTP library provides access to headers.
 *
 * Examples:
 *
 *   - A header `Content-Type: application/json` **SHOULD** be recorded as the `http.request.header.content-type`
 *     attribute with value `["application/json"]`.
 *   - A header `X-Forwarded-For: 1.2.3.4, 1.2.3.5` **SHOULD** be recorded as the `http.request.header.x-forwarded-for`
 *     attribute with value `["1.2.3.4", "1.2.3.5"]` or `["1.2.3.4, 1.2.3.5"]` depending on the HTTP library.
 */
const ATTR_HTTP_REQUEST_HEADER = (key) => `http.request.header.${key}`;
exports.ATTR_HTTP_REQUEST_HEADER = ATTR_HTTP_REQUEST_HEADER;
/**
 * HTTP request method.
 *
 * @example GET
 * @example POST
 * @example HEAD
 *
 * @note HTTP request method value **SHOULD** be "known" to the instrumentation.
 * By default, this convention defines "known" methods as the ones listed in [RFC9110](https://www.rfc-editor.org/rfc/rfc9110.html#name-methods),
 * the PATCH method defined in [RFC5789](https://www.rfc-editor.org/rfc/rfc5789.html)
 * and the QUERY method defined in [httpbis-safe-method-w-body](https://datatracker.ietf.org/doc/draft-ietf-httpbis-safe-method-w-body/?include_text=1).
 *
 * If the HTTP request method is not known to instrumentation, it **MUST** set the `http.request.method` attribute to `_OTHER`.
 *
 * If the HTTP instrumentation could end up converting valid HTTP request methods to `_OTHER`, then it **MUST** provide a way to override
 * the list of known HTTP methods. If this override is done via environment variable, then the environment variable **MUST** be named
 * OTEL_INSTRUMENTATION_HTTP_KNOWN_METHODS and support a comma-separated list of case-sensitive known HTTP methods.
 *
 *
 * If this override is done via declarative configuration, then the list **MUST** be configurable via the `known_methods` property
 * (an array of case-sensitive strings with minimum items 0) under `.instrumentation/development.general.http.client` and/or
 * `.instrumentation/development.general.http.server`.
 *
 * In either case, this list **MUST** be a full override of the default known methods,
 * it is not a list of known methods in addition to the defaults.
 *
 * HTTP method names are case-sensitive and `http.request.method` attribute value **MUST** match a known HTTP method name exactly.
 * Instrumentations for specific web frameworks that consider HTTP methods to be case insensitive, **SHOULD** populate a canonical equivalent.
 * Tracing instrumentations that do so, **MUST** also set `http.request.method_original` to the original value.
 */
exports.ATTR_HTTP_REQUEST_METHOD = 'http.request.method';
/**
 * Enum value "_OTHER" for attribute {@link ATTR_HTTP_REQUEST_METHOD}.
 *
 * Any HTTP method that the instrumentation has no prior knowledge of.
 */
exports.HTTP_REQUEST_METHOD_VALUE_OTHER = "_OTHER";
/**
 * Enum value "CONNECT" for attribute {@link ATTR_HTTP_REQUEST_METHOD}.
 *
 * CONNECT method.
 */
exports.HTTP_REQUEST_METHOD_VALUE_CONNECT = "CONNECT";
/**
 * Enum value "DELETE" for attribute {@link ATTR_HTTP_REQUEST_METHOD}.
 *
 * DELETE method.
 */
exports.HTTP_REQUEST_METHOD_VALUE_DELETE = "DELETE";
/**
 * Enum value "GET" for attribute {@link ATTR_HTTP_REQUEST_METHOD}.
 *
 * GET method.
 */
exports.HTTP_REQUEST_METHOD_VALUE_GET = "GET";
/**
 * Enum value "HEAD" for attribute {@link ATTR_HTTP_REQUEST_METHOD}.
 *
 * HEAD method.
 */
exports.HTTP_REQUEST_METHOD_VALUE_HEAD = "HEAD";
/**
 * Enum value "OPTIONS" for attribute {@link ATTR_HTTP_REQUEST_METHOD}.
 *
 * OPTIONS method.
 */
exports.HTTP_REQUEST_METHOD_VALUE_OPTIONS = "OPTIONS";
/**
 * Enum value "PATCH" for attribute {@link ATTR_HTTP_REQUEST_METHOD}.
 *
 * PATCH method.
 */
exports.HTTP_REQUEST_METHOD_VALUE_PATCH = "PATCH";
/**
 * Enum value "POST" for attribute {@link ATTR_HTTP_REQUEST_METHOD}.
 *
 * POST method.
 */
exports.HTTP_REQUEST_METHOD_VALUE_POST = "POST";
/**
 * Enum value "PUT" for attribute {@link ATTR_HTTP_REQUEST_METHOD}.
 *
 * PUT method.
 */
exports.HTTP_REQUEST_METHOD_VALUE_PUT = "PUT";
/**
 * Enum value "TRACE" for attribute {@link ATTR_HTTP_REQUEST_METHOD}.
 *
 * TRACE method.
 */
exports.HTTP_REQUEST_METHOD_VALUE_TRACE = "TRACE";
/**
 * Original HTTP method sent by the client in the request line.
 *
 * @example GeT
 * @example ACL
 * @example foo
 */
exports.ATTR_HTTP_REQUEST_METHOD_ORIGINAL = 'http.request.method_original';
/**
 * The ordinal number of request resending attempt (for any reason, including redirects).
 *
 * @example 3
 *
 * @note The resend count **SHOULD** be updated each time an HTTP request gets resent by the client, regardless of what was the cause of the resending (e.g. redirection, authorization failure, 503 Server Unavailable, network issues, or any other).
 */
exports.ATTR_HTTP_REQUEST_RESEND_COUNT = 'http.request.resend_count';
/**
 * HTTP response headers, `<key>` being the normalized HTTP Header name (lowercase), the value being the header values.
 *
 * @example ["application/json"]
 * @example ["abc", "def"]
 *
 * @note Instrumentations **SHOULD** require an explicit configuration of which headers are to be captured.
 * Including all response headers can be a security risk - explicit configuration helps avoid leaking sensitive information.
 *
 * Users **MAY** explicitly configure instrumentations to capture them even though it is not recommended.
 *
 * The attribute value **MUST** consist of either multiple header values as an array of strings
 * or a single-item array containing a possibly comma-concatenated string, depending on the way
 * the HTTP library provides access to headers.
 *
 * Examples:
 *
 *   - A header `Content-Type: application/json` header **SHOULD** be recorded as the `http.request.response.content-type`
 *     attribute with value `["application/json"]`.
 *   - A header `My-custom-header: abc, def` header **SHOULD** be recorded as the `http.response.header.my-custom-header`
 *     attribute with value `["abc", "def"]` or `["abc, def"]` depending on the HTTP library.
 */
const ATTR_HTTP_RESPONSE_HEADER = (key) => `http.response.header.${key}`;
exports.ATTR_HTTP_RESPONSE_HEADER = ATTR_HTTP_RESPONSE_HEADER;
/**
 * [HTTP response status code](https://tools.ietf.org/html/rfc7231#section-6).
 *
 * @example 200
 */
exports.ATTR_HTTP_RESPONSE_STATUS_CODE = 'http.response.status_code';
/**
 * The matched route template for the request. This **MUST** be low-cardinality and include all static path segments, with dynamic path segments represented with placeholders.
 *
 * @example /users/:userID?
 * @example my-controller/my-action/{id?}
 *
 * @note **MUST NOT** be populated when this is not supported by the HTTP server framework as the route attribute should have low-cardinality and the URI path can NOT substitute it.
 * **SHOULD** include the [application root](/docs/http/http-spans.md#http-server-definitions) if there is one.
 *
 * A static path segment is a part of the route template with a fixed, low-cardinality value. This includes literal strings like `/users/` and placeholders that
 * are constrained to a finite, predefined set of values, e.g. `{controller}` or `{action}`.
 *
 * A dynamic path segment is a placeholder for a value that can have high cardinality and is not constrained to a predefined list like static path segments.
 *
 * Instrumentations **SHOULD** use routing information provided by the corresponding web framework. They **SHOULD** pick the most precise source of routing information and **MAY**
 * support custom route formatting. Instrumentations **SHOULD** document the format and the API used to obtain the route string.
 */
exports.ATTR_HTTP_ROUTE = 'http.route';
/**
 * Name of the garbage collector action.
 *
 * @example end of minor GC
 * @example end of major GC
 *
 * @note Garbage collector action is generally obtained via [GarbageCollectionNotificationInfo#getGcAction()](https://docs.oracle.com/en/java/javase/11/docs/api/jdk.management/com/sun/management/GarbageCollectionNotificationInfo.html#getGcAction()).
 */
exports.ATTR_JVM_GC_ACTION = 'jvm.gc.action';
/**
 * Name of the garbage collector.
 *
 * @example G1 Young Generation
 * @example G1 Old Generation
 *
 * @note Garbage collector name is generally obtained via [GarbageCollectionNotificationInfo#getGcName()](https://docs.oracle.com/en/java/javase/11/docs/api/jdk.management/com/sun/management/GarbageCollectionNotificationInfo.html#getGcName()).
 */
exports.ATTR_JVM_GC_NAME = 'jvm.gc.name';
/**
 * Name of the memory pool.
 *
 * @example G1 Old Gen
 * @example G1 Eden space
 * @example G1 Survivor Space
 *
 * @note Pool names are generally obtained via [MemoryPoolMXBean#getName()](https://docs.oracle.com/en/java/javase/11/docs/api/java.management/java/lang/management/MemoryPoolMXBean.html#getName()).
 */
exports.ATTR_JVM_MEMORY_POOL_NAME = 'jvm.memory.pool.name';
/**
 * The type of memory.
 *
 * @example heap
 * @example non_heap
 */
exports.ATTR_JVM_MEMORY_TYPE = 'jvm.memory.type';
/**
 * Enum value "heap" for attribute {@link ATTR_JVM_MEMORY_TYPE}.
 *
 * Heap memory.
 */
exports.JVM_MEMORY_TYPE_VALUE_HEAP = "heap";
/**
 * Enum value "non_heap" for attribute {@link ATTR_JVM_MEMORY_TYPE}.
 *
 * Non-heap memory
 */
exports.JVM_MEMORY_TYPE_VALUE_NON_HEAP = "non_heap";
/**
 * Whether the thread is daemon or not.
 */
exports.ATTR_JVM_THREAD_DAEMON = 'jvm.thread.daemon';
/**
 * State of the thread.
 *
 * @example runnable
 * @example blocked
 */
exports.ATTR_JVM_THREAD_STATE = 'jvm.thread.state';
/**
 * Enum value "blocked" for attribute {@link ATTR_JVM_THREAD_STATE}.
 *
 * A thread that is blocked waiting for a monitor lock is in this state.
 */
exports.JVM_THREAD_STATE_VALUE_BLOCKED = "blocked";
/**
 * Enum value "new" for attribute {@link ATTR_JVM_THREAD_STATE}.
 *
 * A thread that has not yet started is in this state.
 */
exports.JVM_THREAD_STATE_VALUE_NEW = "new";
/**
 * Enum value "runnable" for attribute {@link ATTR_JVM_THREAD_STATE}.
 *
 * A thread executing in the Java virtual machine is in this state.
 */
exports.JVM_THREAD_STATE_VALUE_RUNNABLE = "runnable";
/**
 * Enum value "terminated" for attribute {@link ATTR_JVM_THREAD_STATE}.
 *
 * A thread that has exited is in this state.
 */
exports.JVM_THREAD_STATE_VALUE_TERMINATED = "terminated";
/**
 * Enum value "timed_waiting" for attribute {@link ATTR_JVM_THREAD_STATE}.
 *
 * A thread that is waiting for another thread to perform an action for up to a specified waiting time is in this state.
 */
exports.JVM_THREAD_STATE_VALUE_TIMED_WAITING = "timed_waiting";
/**
 * Enum value "waiting" for attribute {@link ATTR_JVM_THREAD_STATE}.
 *
 * A thread that is waiting indefinitely for another thread to perform a particular action is in this state.
 */
exports.JVM_THREAD_STATE_VALUE_WAITING = "waiting";
/**
 * Local address of the network connection - IP address or Unix domain socket name.
 *
 * @example 10.1.2.80
 * @example /tmp/my.sock
 */
exports.ATTR_NETWORK_LOCAL_ADDRESS = 'network.local.address';
/**
 * Local port number of the network connection.
 *
 * @example 65123
 */
exports.ATTR_NETWORK_LOCAL_PORT = 'network.local.port';
/**
 * Peer address of the network connection - IP address or Unix domain socket name.
 *
 * @example 10.1.2.80
 * @example /tmp/my.sock
 */
exports.ATTR_NETWORK_PEER_ADDRESS = 'network.peer.address';
/**
 * Peer port number of the network connection.
 *
 * @example 65123
 */
exports.ATTR_NETWORK_PEER_PORT = 'network.peer.port';
/**
 * [OSI application layer](https://wikipedia.org/wiki/Application_layer) or non-OSI equivalent.
 *
 * @example amqp
 * @example http
 * @example mqtt
 *
 * @note The value **SHOULD** be normalized to lowercase.
 */
exports.ATTR_NETWORK_PROTOCOL_NAME = 'network.protocol.name';
/**
 * The actual version of the protocol used for network communication.
 *
 * @example 1.1
 * @example 2
 *
 * @note If protocol version is subject to negotiation (for example using [ALPN](https://www.rfc-editor.org/rfc/rfc7301.html)), this attribute **SHOULD** be set to the negotiated version. If the actual protocol version is not known, this attribute **SHOULD NOT** be set.
 */
exports.ATTR_NETWORK_PROTOCOL_VERSION = 'network.protocol.version';
/**
 * [OSI transport layer](https://wikipedia.org/wiki/Transport_layer) or [inter-process communication method](https://wikipedia.org/wiki/Inter-process_communication).
 *
 * @example tcp
 * @example udp
 *
 * @note The value **SHOULD** be normalized to lowercase.
 *
 * Consider always setting the transport when setting a port number, since
 * a port number is ambiguous without knowing the transport. For example
 * different processes could be listening on TCP port 12345 and UDP port 12345.
 */
exports.ATTR_NETWORK_TRANSPORT = 'network.transport';
/**
 * Enum value "pipe" for attribute {@link ATTR_NETWORK_TRANSPORT}.
 *
 * Named or anonymous pipe.
 */
exports.NETWORK_TRANSPORT_VALUE_PIPE = "pipe";
/**
 * Enum value "quic" for attribute {@link ATTR_NETWORK_TRANSPORT}.
 *
 * QUIC
 */
exports.NETWORK_TRANSPORT_VALUE_QUIC = "quic";
/**
 * Enum value "tcp" for attribute {@link ATTR_NETWORK_TRANSPORT}.
 *
 * TCP
 */
exports.NETWORK_TRANSPORT_VALUE_TCP = "tcp";
/**
 * Enum value "udp" for attribute {@link ATTR_NETWORK_TRANSPORT}.
 *
 * UDP
 */
exports.NETWORK_TRANSPORT_VALUE_UDP = "udp";
/**
 * Enum value "unix" for attribute {@link ATTR_NETWORK_TRANSPORT}.
 *
 * Unix domain socket
 */
exports.NETWORK_TRANSPORT_VALUE_UNIX = "unix";
/**
 * [OSI network layer](https://wikipedia.org/wiki/Network_layer) or non-OSI equivalent.
 *
 * @example ipv4
 * @example ipv6
 *
 * @note The value **SHOULD** be normalized to lowercase.
 */
exports.ATTR_NETWORK_TYPE = 'network.type';
/**
 * Enum value "ipv4" for attribute {@link ATTR_NETWORK_TYPE}.
 *
 * IPv4
 */
exports.NETWORK_TYPE_VALUE_IPV4 = "ipv4";
/**
 * Enum value "ipv6" for attribute {@link ATTR_NETWORK_TYPE}.
 *
 * IPv6
 */
exports.NETWORK_TYPE_VALUE_IPV6 = "ipv6";
/**
 * Identifies the class / type of event.
 *
 * @example browser.mouse.click
 * @example device.app.lifecycle
 *
 * @note This attribute **SHOULD** be used by non-OTLP exporters when destination does not support `EventName` or equivalent field. This attribute **MAY** be used by applications using existing logging libraries so that it can be used to set the `EventName` field by Collector or SDK components.
 */
exports.ATTR_OTEL_EVENT_NAME = 'otel.event.name';
/**
 * The name of the instrumentation scope - (`InstrumentationScope.Name` in OTLP).
 *
 * @example io.opentelemetry.contrib.mongodb
 */
exports.ATTR_OTEL_SCOPE_NAME = 'otel.scope.name';
/**
 * The version of the instrumentation scope - (`InstrumentationScope.Version` in OTLP).
 *
 * @example 1.0.0
 */
exports.ATTR_OTEL_SCOPE_VERSION = 'otel.scope.version';
/**
 * Name of the code, either "OK" or "ERROR". **MUST NOT** be set if the status code is UNSET.
 */
exports.ATTR_OTEL_STATUS_CODE = 'otel.status_code';
/**
 * Enum value "ERROR" for attribute {@link ATTR_OTEL_STATUS_CODE}.
 *
 * The operation contains an error.
 */
exports.OTEL_STATUS_CODE_VALUE_ERROR = "ERROR";
/**
 * Enum value "OK" for attribute {@link ATTR_OTEL_STATUS_CODE}.
 *
 * The operation has been validated by an Application developer or Operator to have completed successfully.
 */
exports.OTEL_STATUS_CODE_VALUE_OK = "OK";
/**
 * Description of the Status if it has a value, otherwise not set.
 *
 * @example resource not found
 */
exports.ATTR_OTEL_STATUS_DESCRIPTION = 'otel.status_description';
/**
 * Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.
 *
 * @example example.com
 * @example 10.1.2.80
 * @example /tmp/my.sock
 *
 * @note When observed from the client side, and when communicating through an intermediary, `server.address` **SHOULD** represent the server address behind any intermediaries, for example proxies, if it's available.
 */
exports.ATTR_SERVER_ADDRESS = 'server.address';
/**
 * Server port number.
 *
 * @example 80
 * @example 8080
 * @example 443
 *
 * @note When observed from the client side, and when communicating through an intermediary, `server.port` **SHOULD** represent the server port behind any intermediaries, for example proxies, if it's available.
 */
exports.ATTR_SERVER_PORT = 'server.port';
/**
 * The string ID of the service instance.
 *
 * @example 627cc493-f310-47de-96bd-71410b7dec09
 *
 * @note **MUST** be unique for each instance of the same `service.namespace,service.name` pair (in other words
 * `service.namespace,service.name,service.instance.id` triplet **MUST** be globally unique). The ID helps to
 * distinguish instances of the same service that exist at the same time (e.g. instances of a horizontally scaled
 * service).
 *
 * Implementations, such as SDKs, are recommended to generate a random Version 1 or Version 4 [RFC
 * 4122](https://www.ietf.org/rfc/rfc4122.txt) UUID, but are free to use an inherent unique ID as the source of
 * this value if stability is desirable. In that case, the ID **SHOULD** be used as source of a UUID Version 5 and
 * **SHOULD** use the following UUID as the namespace: `4d63009a-8d0f-11ee-aad7-4c796ed8e320`.
 *
 * UUIDs are typically recommended, as only an opaque value for the purposes of identifying a service instance is
 * needed. Similar to what can be seen in the man page for the
 * [`/etc/machine-id`](https://www.freedesktop.org/software/systemd/man/latest/machine-id.html) file, the underlying
 * data, such as pod name and namespace should be treated as confidential, being the user's choice to expose it
 * or not via another resource attribute.
 *
 * For applications running behind an application server (like unicorn), we do not recommend using one identifier
 * for all processes participating in the application. Instead, it's recommended each division (e.g. a worker
 * thread in unicorn) to have its own instance.id.
 *
 * It's not recommended for a Collector to set `service.instance.id` if it can't unambiguously determine the
 * service instance that is generating that telemetry. For instance, creating an UUID based on `pod.name` will
 * likely be wrong, as the Collector might not know from which container within that pod the telemetry originated.
 * However, Collectors can set the `service.instance.id` if they can unambiguously determine the service instance
 * for that telemetry. This is typically the case for scraping receivers, as they know the target address and
 * port.
 */
exports.ATTR_SERVICE_INSTANCE_ID = 'service.instance.id';
/**
 * Logical name of the service.
 *
 * @example shoppingcart
 *
 * @note **MUST** be the same for all instances of horizontally scaled services. If the value was not specified, SDKs **MUST** fallback to `unknown_service:` concatenated with the process executable name, e.g. `unknown_service:bash`. If the process executable name is not available, the value **MUST** be set to `unknown_service`.
 * The process executable name is the name of the process executable, the same value as described by the [`process.executable.name`](process.md) resource attribute.
 */
exports.ATTR_SERVICE_NAME = 'service.name';
/**
 * A namespace for `service.name`.
 *
 * @example Shop
 *
 * @note A string value having a meaning that helps to distinguish a group of services, for example the team name that owns a group of services. `service.name` is expected to be unique within the same namespace. If `service.namespace` is not specified in the Resource then `service.name` is expected to be unique for all services that have no explicit namespace defined (so the empty/unspecified namespace is simply one more valid namespace). Zero-length namespace string is assumed equal to unspecified namespace.
 */
exports.ATTR_SERVICE_NAMESPACE = 'service.namespace';
/**
 * The version string of the service component. The format is not defined by these conventions.
 *
 * @example 2.0.0
 * @example a01dbef8a
 */
exports.ATTR_SERVICE_VERSION = 'service.version';
/**
 * SignalR HTTP connection closure status.
 *
 * @example app_shutdown
 * @example timeout
 */
exports.ATTR_SIGNALR_CONNECTION_STATUS = 'signalr.connection.status';
/**
 * Enum value "app_shutdown" for attribute {@link ATTR_SIGNALR_CONNECTION_STATUS}.
 *
 * The connection was closed because the app is shutting down.
 */
exports.SIGNALR_CONNECTION_STATUS_VALUE_APP_SHUTDOWN = "app_shutdown";
/**
 * Enum value "normal_closure" for attribute {@link ATTR_SIGNALR_CONNECTION_STATUS}.
 *
 * The connection was closed normally.
 */
exports.SIGNALR_CONNECTION_STATUS_VALUE_NORMAL_CLOSURE = "normal_closure";
/**
 * Enum value "timeout" for attribute {@link ATTR_SIGNALR_CONNECTION_STATUS}.
 *
 * The connection was closed due to a timeout.
 */
exports.SIGNALR_CONNECTION_STATUS_VALUE_TIMEOUT = "timeout";
/**
 * [SignalR transport type](https://github.com/dotnet/aspnetcore/blob/main/src/SignalR/docs/specs/TransportProtocols.md)
 *
 * @example web_sockets
 * @example long_polling
 */
exports.ATTR_SIGNALR_TRANSPORT = 'signalr.transport';
/**
 * Enum value "long_polling" for attribute {@link ATTR_SIGNALR_TRANSPORT}.
 *
 * LongPolling protocol
 */
exports.SIGNALR_TRANSPORT_VALUE_LONG_POLLING = "long_polling";
/**
 * Enum value "server_sent_events" for attribute {@link ATTR_SIGNALR_TRANSPORT}.
 *
 * ServerSentEvents protocol
 */
exports.SIGNALR_TRANSPORT_VALUE_SERVER_SENT_EVENTS = "server_sent_events";
/**
 * Enum value "web_sockets" for attribute {@link ATTR_SIGNALR_TRANSPORT}.
 *
 * WebSockets protocol
 */
exports.SIGNALR_TRANSPORT_VALUE_WEB_SOCKETS = "web_sockets";
/**
 * The name of the auto instrumentation agent or distribution, if used.
 *
 * @example parts-unlimited-java
 *
 * @note Official auto instrumentation agents and distributions **SHOULD** set the `telemetry.distro.name` attribute to
 * a string starting with `opentelemetry-`, e.g. `opentelemetry-java-instrumentation`.
 */
exports.ATTR_TELEMETRY_DISTRO_NAME = 'telemetry.distro.name';
/**
 * The version string of the auto instrumentation agent or distribution, if used.
 *
 * @example 1.2.3
 */
exports.ATTR_TELEMETRY_DISTRO_VERSION = 'telemetry.distro.version';
/**
 * The language of the telemetry SDK.
 */
exports.ATTR_TELEMETRY_SDK_LANGUAGE = 'telemetry.sdk.language';
/**
 * Enum value "cpp" for attribute {@link ATTR_TELEMETRY_SDK_LANGUAGE}.
 */
exports.TELEMETRY_SDK_LANGUAGE_VALUE_CPP = "cpp";
/**
 * Enum value "dotnet" for attribute {@link ATTR_TELEMETRY_SDK_LANGUAGE}.
 */
exports.TELEMETRY_SDK_LANGUAGE_VALUE_DOTNET = "dotnet";
/**
 * Enum value "erlang" for attribute {@link ATTR_TELEMETRY_SDK_LANGUAGE}.
 */
exports.TELEMETRY_SDK_LANGUAGE_VALUE_ERLANG = "erlang";
/**
 * Enum value "go" for attribute {@link ATTR_TELEMETRY_SDK_LANGUAGE}.
 */
exports.TELEMETRY_SDK_LANGUAGE_VALUE_GO = "go";
/**
 * Enum value "java" for attribute {@link ATTR_TELEMETRY_SDK_LANGUAGE}.
 */
exports.TELEMETRY_SDK_LANGUAGE_VALUE_JAVA = "java";
/**
 * Enum value "nodejs" for attribute {@link ATTR_TELEMETRY_SDK_LANGUAGE}.
 */
exports.TELEMETRY_SDK_LANGUAGE_VALUE_NODEJS = "nodejs";
/**
 * Enum value "php" for attribute {@link ATTR_TELEMETRY_SDK_LANGUAGE}.
 */
exports.TELEMETRY_SDK_LANGUAGE_VALUE_PHP = "php";
/**
 * Enum value "python" for attribute {@link ATTR_TELEMETRY_SDK_LANGUAGE}.
 */
exports.TELEMETRY_SDK_LANGUAGE_VALUE_PYTHON = "python";
/**
 * Enum value "ruby" for attribute {@link ATTR_TELEMETRY_SDK_LANGUAGE}.
 */
exports.TELEMETRY_SDK_LANGUAGE_VALUE_RUBY = "ruby";
/**
 * Enum value "rust" for attribute {@link ATTR_TELEMETRY_SDK_LANGUAGE}.
 */
exports.TELEMETRY_SDK_LANGUAGE_VALUE_RUST = "rust";
/**
 * Enum value "swift" for attribute {@link ATTR_TELEMETRY_SDK_LANGUAGE}.
 */
exports.TELEMETRY_SDK_LANGUAGE_VALUE_SWIFT = "swift";
/**
 * Enum value "webjs" for attribute {@link ATTR_TELEMETRY_SDK_LANGUAGE}.
 */
exports.TELEMETRY_SDK_LANGUAGE_VALUE_WEBJS = "webjs";
/**
 * The name of the telemetry SDK as defined above.
 *
 * @example opentelemetry
 *
 * @note The OpenTelemetry SDK **MUST** set the `telemetry.sdk.name` attribute to `opentelemetry`.
 * If another SDK, like a fork or a vendor-provided implementation, is used, this SDK **MUST** set the
 * `telemetry.sdk.name` attribute to the fully-qualified class or module name of this SDK's main entry point
 * or another suitable identifier depending on the language.
 * The identifier `opentelemetry` is reserved and **MUST NOT** be used in this case.
 * All custom identifiers **SHOULD** be stable across different versions of an implementation.
 */
exports.ATTR_TELEMETRY_SDK_NAME = 'telemetry.sdk.name';
/**
 * The version string of the telemetry SDK.
 *
 * @example 1.2.3
 */
exports.ATTR_TELEMETRY_SDK_VERSION = 'telemetry.sdk.version';
/**
 * The [URI fragment](https://www.rfc-editor.org/rfc/rfc3986#section-3.5) component
 *
 * @example SemConv
 */
exports.ATTR_URL_FRAGMENT = 'url.fragment';
/**
 * Absolute URL describing a network resource according to [RFC3986](https://www.rfc-editor.org/rfc/rfc3986)
 *
 * @example https://www.foo.bar/search?q=OpenTelemetry#SemConv
 * @example //localhost
 *
 * @note For network calls, URL usually has `scheme://host[:port][path][?query][#fragment]` format, where the fragment
 * is not transmitted over HTTP, but if it is known, it **SHOULD** be included nevertheless.
 *
 * `url.full` **MUST NOT** contain credentials passed via URL in form of `https://username:password@www.example.com/`.
 * In such case username and password **SHOULD** be redacted and attribute's value **SHOULD** be `https://REDACTED:REDACTED@www.example.com/`.
 *
 * `url.full` **SHOULD** capture the absolute URL when it is available (or can be reconstructed).
 *
 * Sensitive content provided in `url.full` **SHOULD** be scrubbed when instrumentations can identify it.
 *
 *
 * Query string values for the following keys **SHOULD** be redacted by default and replaced by the
 * value `REDACTED`:
 *
 *   - [`AWSAccessKeyId`](https://docs.aws.amazon.com/AmazonS3/latest/userguide/RESTAuthentication.html#RESTAuthenticationQueryStringAuth)
 *   - [`Signature`](https://docs.aws.amazon.com/AmazonS3/latest/userguide/RESTAuthentication.html#RESTAuthenticationQueryStringAuth)
 *   - [`sig`](https://learn.microsoft.com/azure/storage/common/storage-sas-overview#sas-token)
 *   - [`X-Goog-Signature`](https://cloud.google.com/storage/docs/access-control/signed-urls)
 *
 * This list is subject to change over time.
 *
 * Matching of query parameter keys against the sensitive list **SHOULD** be case-sensitive.
 *
 *
 * Instrumentation **MAY** provide a way to override this list via declarative configuration.
 * If so, it **SHOULD** use the `sensitive_query_parameters` property
 * (an array of case-sensitive strings with minimum items 0) under
 * `.instrumentation/development.general.sanitization.url`.
 * This list is a full override of the default sensitive query parameter keys,
 * it is not a list of keys in addition to the defaults.
 *
 * When a query string value is redacted, the query string key **SHOULD** still be preserved, e.g.
 * `https://www.example.com/path?color=blue&sig=REDACTED`.
 */
exports.ATTR_URL_FULL = 'url.full';
/**
 * The [URI path](https://www.rfc-editor.org/rfc/rfc3986#section-3.3) component
 *
 * @example /search
 *
 * @note Sensitive content provided in `url.path` **SHOULD** be scrubbed when instrumentations can identify it.
 */
exports.ATTR_URL_PATH = 'url.path';
/**
 * The [URI query](https://www.rfc-editor.org/rfc/rfc3986#section-3.4) component
 *
 * @example q=OpenTelemetry
 *
 * @note Sensitive content provided in `url.query` **SHOULD** be scrubbed when instrumentations can identify it.
 *
 *
 * Query string values for the following keys **SHOULD** be redacted by default and replaced by the value `REDACTED`:
 *
 *   - [`AWSAccessKeyId`](https://docs.aws.amazon.com/AmazonS3/latest/userguide/RESTAuthentication.html#RESTAuthenticationQueryStringAuth)
 *   - [`Signature`](https://docs.aws.amazon.com/AmazonS3/latest/userguide/RESTAuthentication.html#RESTAuthenticationQueryStringAuth)
 *   - [`sig`](https://learn.microsoft.com/azure/storage/common/storage-sas-overview#sas-token)
 *   - [`X-Goog-Signature`](https://cloud.google.com/storage/docs/access-control/signed-urls)
 *
 * This list is subject to change over time.
 *
 * Matching of query parameter keys against the sensitive list **SHOULD** be case-sensitive.
 *
 * Instrumentation **MAY** provide a way to override this list via declarative configuration.
 * If so, it **SHOULD** use the `sensitive_query_parameters` property
 * (an array of case-sensitive strings with minimum items 0) under
 * `.instrumentation/development.general.sanitization.url`.
 * This list is a full override of the default sensitive query parameter keys,
 * it is not a list of keys in addition to the defaults.
 *
 * When a query string value is redacted, the query string key **SHOULD** still be preserved, e.g.
 * `q=OpenTelemetry&sig=REDACTED`.
 */
exports.ATTR_URL_QUERY = 'url.query';
/**
 * The [URI scheme](https://www.rfc-editor.org/rfc/rfc3986#section-3.1) component identifying the used protocol.
 *
 * @example https
 * @example ftp
 * @example telnet
 */
exports.ATTR_URL_SCHEME = 'url.scheme';
/**
 * Value of the [HTTP User-Agent](https://www.rfc-editor.org/rfc/rfc9110.html#field.user-agent) header sent by the client.
 *
 * @example CERN-LineMode/2.15 libwww/2.17b3
 * @example Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1
 * @example YourApp/1.0.0 grpc-java-okhttp/1.27.2
 */
exports.ATTR_USER_AGENT_ORIGINAL = 'user_agent.original';
//# sourceMappingURL=stable_attributes.js.map