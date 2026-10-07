Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const carrier = require('../carrier.js');
const stackStrategy = require('./stackStrategy.js');

function setAsyncContextStrategy(strategy) {
  const registry = carrier.getMainCarrier();
  const sentry = carrier.getSentryCarrier(registry);
  sentry.acs = strategy;
}
function getAsyncContextStrategy(carrier$1) {
  const sentry = carrier.getSentryCarrier(carrier$1);
  if (sentry.acs) {
    return sentry.acs;
  }
  return stackStrategy.getStackAsyncContextStrategy();
}

exports.getAsyncContextStrategy = getAsyncContextStrategy;
exports.setAsyncContextStrategy = setAsyncContextStrategy;
//# sourceMappingURL=index.js.map
