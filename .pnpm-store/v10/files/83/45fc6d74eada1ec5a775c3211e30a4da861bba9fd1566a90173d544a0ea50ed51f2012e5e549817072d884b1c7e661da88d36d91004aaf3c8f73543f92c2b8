Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

function getSpanName(operation, db, sql, bulkLoadTable) {
  if (operation === "execBulkLoad" && bulkLoadTable && db) {
    return `${operation} ${bulkLoadTable} ${db}`;
  }
  if (operation === "callProcedure") {
    if (db) {
      return `${operation} ${sql} ${db}`;
    }
    return `${operation} ${sql}`;
  }
  if (db) {
    return `${operation} ${db}`;
  }
  return `${operation}`;
}
const once = (fn) => {
  let called = false;
  return (...args) => {
    if (called) return;
    called = true;
    return fn(...args);
  };
};

exports.getSpanName = getSpanName;
exports.once = once;
//# sourceMappingURL=utils.js.map
