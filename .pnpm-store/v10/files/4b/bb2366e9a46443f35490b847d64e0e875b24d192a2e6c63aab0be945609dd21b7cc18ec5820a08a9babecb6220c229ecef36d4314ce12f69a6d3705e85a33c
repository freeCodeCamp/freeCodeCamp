import { getAppIdAndApiKey } from 'instantsearch.js/es/lib/utils/index.js';
import { useInstantSearchContext } from './useInstantSearchContext.js';

var useAppIdAndApiKey = function useAppIdAndApiKey() {
    var client = useInstantSearchContext().client;
    return getAppIdAndApiKey(client);
};

export { useAppIdAndApiKey };
