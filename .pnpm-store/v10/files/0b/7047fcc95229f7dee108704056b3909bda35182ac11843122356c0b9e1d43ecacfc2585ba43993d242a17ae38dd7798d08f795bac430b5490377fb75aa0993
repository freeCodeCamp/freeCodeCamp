import highlight from './index2.js';
import reverseHighlight from './index3.js';
import snippet from './index4.js';
import reverseSnippet from './index5.js';
import insights from './index6.js';
import getInsightsAnonymousUserToken from './index7.js';
import createInfiniteHitsSessionStorageCache from './index8.js';
import InstantSearch from './index9.js';
import '@swc/helpers/esm/_sliced_to_array.js';
import '@swc/helpers/esm/_to_consumable_array.js';
import { deprecate } from './index10.js';
import '@swc/helpers/esm/_define_property.js';
import '@swc/helpers/esm/_extends.js';
import '@swc/helpers/esm/_object_destructuring_empty.js';
import '@swc/helpers/esm/_object_spread.js';
import '@swc/helpers/esm/_object_spread_props.js';
import '@swc/helpers/esm/_type_of.js';
import './index11.js';
import '@swc/helpers/esm/_instanceof.js';
import '@swc/helpers/esm/_object_without_properties.js';
import version from './index12.js';
export * from 'algoliasearch-helper/types/algoliasearch.js';

/**
 * InstantSearch is the main component of InstantSearch.js. This object
 * manages the widget and lets you add new ones.
 *
 * Two parameters are required to get you started with InstantSearch.js:
 *  - `indexName`: the main index that you will use for your new search UI
 *  - `searchClient`: the search client to plug to InstantSearch.js
 *
 * The [search client provided by Algolia](algolia.com/doc/api-client/getting-started/what-is-the-api-client/javascript/)
 * needs an `appId` and an `apiKey`. Those parameters can be found in your
 * [Algolia dashboard](https://www.algolia.com/api-keys).
 *
 * If you want to get up and running quickly with InstantSearch.js, have a
 * look at the [getting started](https://www.algolia.com/doc/guides/building-search-ui/getting-started/js/).
 */ var instantsearch = function instantsearch(options) {
    return new InstantSearch(options);
};
instantsearch.version = version;
instantsearch.createInfiniteHitsSessionStorageCache = deprecate(createInfiniteHitsSessionStorageCache);
instantsearch.highlight = deprecate(highlight);
instantsearch.reverseHighlight = deprecate(reverseHighlight);
instantsearch.snippet = deprecate(snippet);
instantsearch.reverseSnippet = deprecate(reverseSnippet);
instantsearch.insights = insights;
instantsearch.getInsightsAnonymousUserToken = getInsightsAnonymousUserToken;
Object.defineProperty(instantsearch, 'widgets', {
    get: function get() {
        throw new ReferenceError("\"instantsearch.widgets\" are not available from the ES build.\n\nTo import the widgets:\n\nimport { searchBox } from 'instantsearch.js/es/widgets/index.js'");
    }
});
Object.defineProperty(instantsearch, 'connectors', {
    get: function get() {
        throw new ReferenceError("\"instantsearch.connectors\" are not available from the ES build.\n\nTo import the connectors:\n\nimport { connectSearchBox } from 'instantsearch.js/es/connectors/index.js'");
    }
});
Object.defineProperty(instantsearch, 'templates', {
    get: function get() {
        throw new ReferenceError("\"instantsearch.templates\" are not available from the ES build.\n\nTo import the templates:\n\nimport { carousel } from 'instantsearch.js/es/templates/index.js'");
    }
});

export { instantsearch as default };
