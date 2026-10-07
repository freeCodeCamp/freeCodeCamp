/** SPAN_KIND hints at relationship between spans, e.g. client/server */
export declare const SPAN_KIND = "span.kind";
/** Marks a span representing the client-side of an RPC or other remote call */
export declare const SPAN_KIND_RPC_CLIENT = "client";
/** Marks a span representing the server-side of an RPC or other remote call */
export declare const SPAN_KIND_RPC_SERVER = "server";
/** Marks a span representing the producing-side within a messaging system or other remote call */
export declare const SPAN_KIND_MESSAGING_PRODUCER = "producer";
/** Marks a span representing the consuming-side within a messaging system or other remote call */
export declare const SPAN_KIND_MESSAGING_CONSUMER = "consumer";
/**
 * ERROR (boolean) true if and only if the application considers the operation
 * represented by the Span to have failed
 */
export declare const ERROR = "error";
/**
 * COMPONENT (string) ia s low-cardinality identifier of the module, library,
 * or package that is generating a span.
 */
export declare const COMPONENT = "component";
/**
 * SAMPLING_PRIORITY (number) determines the priority of sampling this Span.
 * If greater than 0, a hint to the Tracer to do its best to capture the trace.
 * If 0, a hint to the trace to not-capture the trace. If absent, the Tracer
 * should use its default sampling mechanism.
 */
export declare const SAMPLING_PRIORITY = "sampling.priority";
/**
 * PEER_SERVICE (string) Remote service name (for some unspecified
 * definition of "service"). E.g., "elasticsearch", "a_custom_microservice", "memcache"
 */
export declare const PEER_SERVICE = "peer.service";
/** PEER_HOSTNAME (string) Remote hostname. E.g., "opentracing.io", "internal.dns.name" */
export declare const PEER_HOSTNAME = "peer.hostname";
/**
 * PEER_ADDRESS (string) Remote "address", suitable for use in a
 * networking client library. This may be a "ip:port", a bare
 * "hostname", a FQDN, or even a JDBC substring like "mysql://prod-db:3306"
 */
export declare const PEER_ADDRESS = "peer.address";
/**
 * PEER_HOST_IPV4 (number) Remote IPv4 address as a .-separated tuple.
 * E.g., "127.0.0.1"
 */
export declare const PEER_HOST_IPV4 = "peer.ipv4";
export declare const PEER_HOST_IPV6 = "peer.ipv6";
export declare const PEER_PORT = "peer.port";
/**
 * HTTP_URL (string) URL of the request being handled in this segment of the
 * trace, in standard URI format. E.g., "https://domain.net/path/to?resource=here"
 */
export declare const HTTP_URL = "http.url";
/**
 * HTTP_METHOD (string) HTTP method of the request for the associated Span. E.g.,
 * "GET", "POST"
 */
export declare const HTTP_METHOD = "http.method";
/**
 * HTTP_STATUS_CODE (number) HTTP response status code for the associated Span.
 * E.g., 200, 503, 404
 */
export declare const HTTP_STATUS_CODE = "http.status_code";
/**
 * MESSAGE_BUS_DESTINATION (string) An address at which messages can be exchanged.
 * E.g. A Kafka record has an associated "topic name" that can be extracted
 * by the instrumented producer or consumer and stored using this tag.
 */
export declare const MESSAGE_BUS_DESTINATION = "message_bus.destination";
/**
 * DB_INSTANCE (string) Database instance name. E.g., In java, if the
 * jdbc.url="jdbc:mysql://127.0.0.1:3306/customers", the instance name is "customers".
 */
export declare const DB_INSTANCE = "db.instance";
/**
 * DB_STATEMENT (string) A database statement for the given database type.
 * E.g., for db.type="SQL", "SELECT * FROM wuser_table";
 * for db.type="redis", "SET mykey 'WuValue'".
 */
export declare const DB_STATEMENT = "db.statement";
/**
 * DB_TYPE (string) Database type. For any SQL database, "sql". For others,
 * the lower-case database category, e.g. "cassandra", "hbase", or "redis".
 */
export declare const DB_TYPE = "db.type";
/**
 * DB_USER (string) Username for accessing database. E.g., "readonly_user"
 * or "reporting_user"
 */
export declare const DB_USER = "db.user";
//# sourceMappingURL=tags.d.ts.map