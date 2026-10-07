import { defineIntegration } from '../integration.js';
import { applyAggregateErrorsToEvent } from '../utils/aggregate-errors.js';
import { exceptionFromError } from '../utils/eventbuilder.js';

const DEFAULT_KEY = "cause";
const DEFAULT_LIMIT = 5;
const INTEGRATION_NAME = "LinkedErrors";
const _linkedErrorsIntegration = ((options = {}) => {
  const limit = options.limit || DEFAULT_LIMIT;
  const key = options.key || DEFAULT_KEY;
  return {
    name: INTEGRATION_NAME,
    preprocessEvent(event, hint, client) {
      const options2 = client.getOptions();
      applyAggregateErrorsToEvent(exceptionFromError, options2.stackParser, key, limit, event, hint);
    }
  };
});
const linkedErrorsIntegration = defineIntegration(_linkedErrorsIntegration);

export { linkedErrorsIntegration };
//# sourceMappingURL=linkederrors.js.map
