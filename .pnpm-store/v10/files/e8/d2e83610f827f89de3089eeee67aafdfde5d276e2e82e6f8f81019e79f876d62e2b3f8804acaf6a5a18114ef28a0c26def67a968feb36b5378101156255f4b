Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const internal = require('./internal.js');

function captureMetric(type, name, value, options) {
  internal._INTERNAL_captureMetric(
    { type, name, value, unit: options?.unit, attributes: options?.attributes },
    { scope: options?.scope }
  );
}
function count(name, value = 1, options) {
  captureMetric("counter", name, value, options);
}
function gauge(name, value, options) {
  captureMetric("gauge", name, value, options);
}
function distribution(name, value, options) {
  captureMetric("distribution", name, value, options);
}

exports.count = count;
exports.distribution = distribution;
exports.gauge = gauge;
//# sourceMappingURL=public-api.js.map
