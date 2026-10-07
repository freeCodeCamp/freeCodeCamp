Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

function parameterize(strings, ...values) {
  const formatted = new String(String.raw(strings, ...values));
  formatted.__sentry_template_string__ = strings.join("\0").replace(/%/g, "%%").replace(/\0/g, "%s");
  formatted.__sentry_template_values__ = values;
  return formatted;
}
const fmt = parameterize;

exports.fmt = fmt;
exports.parameterize = parameterize;
//# sourceMappingURL=parameterize.js.map
