import { getMainCarrier, getSentryCarrier } from '../carrier.js';
import { getStackAsyncContextStrategy } from './stackStrategy.js';

function setAsyncContextStrategy(strategy) {
  const registry = getMainCarrier();
  const sentry = getSentryCarrier(registry);
  sentry.acs = strategy;
}
function getAsyncContextStrategy(carrier) {
  const sentry = getSentryCarrier(carrier);
  if (sentry.acs) {
    return sentry.acs;
  }
  return getStackAsyncContextStrategy();
}

export { getAsyncContextStrategy, setAsyncContextStrategy };
//# sourceMappingURL=index.js.map
