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
function getDbQueryText(query) {
  if (typeof query === "string") {
    return query;
  } else {
    return query.sql;
  }
}
function getDbValues(query, values) {
  if (typeof query === "string") {
    return arrayStringifyHelper(values);
  } else {
    return arrayStringifyHelper(values || query.values);
  }
}
function getSpanName(query) {
  const rawQuery = typeof query === "object" ? query.sql : query;
  const firstSpace = rawQuery?.indexOf(" ");
  if (typeof firstSpace === "number" && firstSpace !== -1) {
    return rawQuery?.substring(0, firstSpace);
  }
  return rawQuery;
}
function arrayStringifyHelper(arr) {
  if (arr) return `[${arr.toString()}]`;
  return "";
}
function getPoolNameOld(pool) {
  const c = pool.config.connectionConfig;
  let poolName = "";
  poolName += c?.host ? `host: '${c.host}', ` : "";
  poolName += c?.port ? `port: ${c.port}, ` : "";
  poolName += c?.database ? `database: '${c.database}', ` : "";
  poolName += c?.user ? `user: '${c.user}'` : "";
  if (!c?.user) {
    poolName = poolName.substring(0, poolName.length - 2);
  }
  return poolName.trim();
}

export { arrayStringifyHelper, getConfig, getDbQueryText, getDbValues, getJDBCString, getPoolNameOld, getSpanName };
//# sourceMappingURL=utils.js.map
