
/** SPAN_KIND hints at relationship between spans, e.g. client/server */
export const SPAN_KIND = 'span.kind';

/** Marks a span representing the client-side of an RPC or other remote call */
export const SPAN_KIND_RPC_CLIENT = 'client';

/** Marks a span representing the server-side of an RPC or other remote call */
export const SPAN_KIND_RPC_SERVER = 'server';

/** Marks a span representing the producing-side within a messaging system or other remote call */
export const SPAN_KIND_MESSAGING_PRODUCER = 'producer';

/** Marks a span representing the consuming-side within a messaging system or other remote call */
export const SPAN_KIND_MESSAGING_CONSUMER = 'consumer';

/**
 * ERROR (boolean) true if and only if the application considers the operation
 * represented by the Span to have failed
 */
export const ERROR = 'error';

/**
 * COMPONENT (string) ia s low-cardinality identifier of the module, library,
 * or package that is generating a span.
 */
export const COMPONENT = 'component';

/**
 * SAMPLING_PRIORITY (number) determines the priority of sampling this Span.
 * If greater than 0, a hint to the Tracer to do its best to capture the trace.
 * If 0, a hint to the trace to not-capture the trace. If absent, the Tracer
 * should use its default sampling mechanism.
 */
export const SAMPLING_PRIORITY = 'sampling.priority';

// ---------------------------------------------------------------------------
// PEER_* tags can be emitted by either client-side of server-side to describe
// the other side/service in a peer-to-peer communications, like an RPC call.
// ---------------------------------------------------------------------------

/**
 * PEER_SERVICE (string) Remote service name (for some unspecified
 * definition of "service"). E.g., "elasticsearch", "a_custom_microservice", "memcache"
 */
export const PEER_SERVICE = 'peer.service';

/** PEER_HOSTNAME (string) Remote hostname. E.g., "opentracing.io", "internal.dns.name" */
export const PEER_HOSTNAME = 'peer.hostname';

/**
 * PEER_ADDRESS (string) Remote "address", suitable for use in a
 * networking client library. This may be a "ip:port", a bare
 * "hostname", a FQDN, or even a JDBC substring like "mysql://prod-db:3306"
 */
export const PEER_ADDRESS = 'peer.address';

/**
 * PEER_HOST_IPV4 (number) Remote IPv4 address as a .-separated tuple.
 * E.g., "127.0.0.1"
 */
export const PEER_HOST_IPV4 = 'peer.ipv4';

// PEER_HOST_IPV6 (string) Remote IPv6 address as a string of
// colon-separated 4-char hex tuples. E.g., "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
export const PEER_HOST_IPV6 = 'peer.ipv6';

// PEER_PORT (number) Remote port. E.g., 80
export const PEER_PORT = 'peer.port';

// ---------------------------------------------------------------------------
// HTTP tags
// ---------------------------------------------------------------------------

/**
 * HTTP_URL (string) URL of the request being handled in this segment of the
 * trace, in standard URI format. E.g., "https://domain.net/path/to?resource=here"
 */
export const HTTP_URL = 'http.url';

/**
 * HTTP_METHOD (string) HTTP method of the request for the associated Span. E.g.,
 * "GET", "POST"
 */
export const HTTP_METHOD = 'http.method';

/**
 * HTTP_STATUS_CODE (number) HTTP response status code for the associated Span.
 * E.g., 200, 503, 404
 */
export const HTTP_STATUS_CODE = 'http.status_code';

// -------------------------------------------------------------------------
// Messaging tags
// -------------------------------------------------------------------------

/**
 * MESSAGE_BUS_DESTINATION (string) An address at which messages can be exchanged.
 * E.g. A Kafka record has an associated "topic name" that can be extracted
 * by the instrumented producer or consumer and stored using this tag.
 */
export const MESSAGE_BUS_DESTINATION = 'message_bus.destination';

// --------------------------------------------------------------------------
// Database tags
// --------------------------------------------------------------------------

/**
 * DB_INSTANCE (string) Database instance name. E.g., In java, if the
 * jdbc.url="jdbc:mysql://127.0.0.1:3306/customers", the instance name is "customers".
 */
export const DB_INSTANCE = 'db.instance';

/**
 * DB_STATEMENT (string) A database statement for the given database type.
 * E.g., for db.type="SQL", "SELECT * FROM wuser_table";
 * for db.type="redis", "SET mykey 'WuValue'".
 */
export const DB_STATEMENT = 'db.statement';

/**
 * DB_TYPE (string) Database type. For any SQL database, "sql". For others,
 * the lower-case database category, e.g. "cassandra", "hbase", or "redis".
 */
export const DB_TYPE = 'db.type';

/**
 * DB_USER (string) Username for accessing database. E.g., "readonly_user"
 * or "reporting_user"
 */
export const DB_USER = 'db.user';
