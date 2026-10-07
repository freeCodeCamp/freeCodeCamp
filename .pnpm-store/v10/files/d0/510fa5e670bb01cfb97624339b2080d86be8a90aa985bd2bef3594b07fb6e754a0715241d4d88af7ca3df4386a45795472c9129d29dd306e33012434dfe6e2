Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const semconv = require('./semconv.js');
const instrumentation = require('@opentelemetry/instrumentation');
const semanticConventions = require('@opentelemetry/semantic-conventions');

function getConnectionAttributes(config, dbSemconvStability, netSemconvStability) {
  const { host, port, database, user } = getConfig(config);
  const attrs = {};
  if (dbSemconvStability & instrumentation.SemconvStability.OLD) {
    attrs[semconv.ATTR_DB_CONNECTION_STRING] = getJDBCString(host, port, database);
    attrs[semconv.ATTR_DB_NAME] = database;
    attrs[semconv.ATTR_DB_USER] = user;
  }
  if (dbSemconvStability & instrumentation.SemconvStability.STABLE) {
    attrs[semanticConventions.ATTR_DB_NAMESPACE] = database;
  }
  const portNumber = parseInt(port, 10);
  if (netSemconvStability & instrumentation.SemconvStability.OLD) {
    attrs[semconv.ATTR_NET_PEER_NAME] = host;
    if (!isNaN(portNumber)) {
      attrs[semconv.ATTR_NET_PEER_PORT] = portNumber;
    }
  }
  if (netSemconvStability & instrumentation.SemconvStability.STABLE) {
    attrs[semanticConventions.ATTR_SERVER_ADDRESS] = host;
    if (!isNaN(portNumber)) {
      attrs[semanticConventions.ATTR_SERVER_PORT] = portNumber;
    }
  }
  return attrs;
}
function getConfig(config) {
  const { host, port, database, user } = config && config.connectionConfig || config || {};
  return { host, port, database, user };
}
function getJDBCString(host, port, database) {
  let jdbcString = `jdbc:mysql://${host || "localhost"}`;
  if (typeof port === "number") {
    jdbcString += `:${port}`;
  }
  if (typeof database === "string") {
    jdbcString += `/${database}`;
  }
  return jdbcString;
}
function getQueryText(query, format, values, maskStatement = false, maskStatementHook = defaultMaskingHook) {
  const [querySql, queryValues] = typeof query === "string" ? [query, values] : [query.sql, hasValues(query) ? values || query.values : values];
  try {
    if (maskStatement) {
      return maskStatementHook(querySql);
    } else if (format && queryValues) {
      return format(querySql, queryValues);
    } else {
      return querySql;
    }
  } catch (e) {
    return "Could not determine the query due to an error in masking or formatting";
  }
}
function defaultMaskingHook(query) {
  return query.replace(/\b\d+\b/g, "?").replace(/(["'])(?:(?=(\\?))\2.)*?\1/g, "?");
}
function hasValues(obj) {
  return "values" in obj;
}
function getSpanName(query) {
  const rawQuery = typeof query === "object" ? query.sql : query;
  const firstSpace = rawQuery?.indexOf(" ");
  if (typeof firstSpace === "number" && firstSpace !== -1) {
    return rawQuery?.substring(0, firstSpace);
  }
  return rawQuery;
}
const once = (fn) => {
  let called = false;
  return (...args) => {
    if (called) return;
    called = true;
    return fn(...args);
  };
};
function getConnectionPrototypeToInstrument(connection) {
  const connectionPrototype = connection.prototype;
  const basePrototype = Object.getPrototypeOf(connectionPrototype);
  if (typeof basePrototype?.query === "function" && typeof basePrototype?.execute === "function") {
    return basePrototype;
  }
  return connectionPrototype;
}

exports.getConnectionAttributes = getConnectionAttributes;
exports.getConnectionPrototypeToInstrument = getConnectionPrototypeToInstrument;
exports.getQueryText = getQueryText;
exports.getSpanName = getSpanName;
exports.once = once;
//# sourceMappingURL=utils.js.map
