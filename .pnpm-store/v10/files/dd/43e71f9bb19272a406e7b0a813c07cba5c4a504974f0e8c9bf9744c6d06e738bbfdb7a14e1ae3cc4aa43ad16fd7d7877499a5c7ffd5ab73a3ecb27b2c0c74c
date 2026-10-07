Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const version = require('./utils/version.js');
const worldwide = require('./utils/worldwide.js');

function getMainCarrier() {
  getSentryCarrier(worldwide.GLOBAL_OBJ);
  return worldwide.GLOBAL_OBJ;
}
function getSentryCarrier(carrier) {
  const __SENTRY__ = carrier.__SENTRY__ = carrier.__SENTRY__ || {};
  __SENTRY__.version = __SENTRY__.version || version.SDK_VERSION;
  return __SENTRY__[version.SDK_VERSION] = __SENTRY__[version.SDK_VERSION] || {};
}
function getGlobalSingleton(name, creator, obj = worldwide.GLOBAL_OBJ) {
  const __SENTRY__ = obj.__SENTRY__ = obj.__SENTRY__ || {};
  const carrier = __SENTRY__[version.SDK_VERSION] = __SENTRY__[version.SDK_VERSION] || {};
  return carrier[name] || (carrier[name] = creator());
}

exports.getGlobalSingleton = getGlobalSingleton;
exports.getMainCarrier = getMainCarrier;
exports.getSentryCarrier = getSentryCarrier;
//# sourceMappingURL=carrier.js.map
