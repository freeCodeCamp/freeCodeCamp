import { _INTERNAL_captureMetric } from './internal.js';

function captureMetric(type, name, value, options) {
  _INTERNAL_captureMetric(
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

export { count, distribution, gauge };
//# sourceMappingURL=public-api.js.map
