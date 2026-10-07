'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = require("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = require("@swc/helpers/_/_interop_require_wildcard");
var _index = /*#__PURE__*/ _interop_require_wildcard._(require("./connectors/index"));
var _index1 = /*#__PURE__*/ _interop_require_wildcard._(require("./helpers/index"));
var _index2 = require("./lib/infiniteHitsCache/index");
var _InstantSearch = /*#__PURE__*/ _interop_require_default._(require("./lib/InstantSearch"));
var _index3 = /*#__PURE__*/ _interop_require_wildcard._(require("./lib/routers/index"));
var _index4 = /*#__PURE__*/ _interop_require_wildcard._(require("./lib/stateMappings/index"));
var _version = /*#__PURE__*/ _interop_require_default._(require("./lib/version"));
var _index5 = /*#__PURE__*/ _interop_require_wildcard._(require("./middlewares/index"));
var _index6 = /*#__PURE__*/ _interop_require_wildcard._(require("./templates/index"));
var _index7 = /*#__PURE__*/ _interop_require_wildcard._(require("./widgets/index"));
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
    return new _InstantSearch.default(options);
};
instantsearch.version = _version.default;
instantsearch.connectors = _index;
instantsearch.widgets = _index7;
instantsearch.middlewares = _index5;
instantsearch.routers = _index3;
instantsearch.stateMappings = _index4;
instantsearch.templates = _index6;
instantsearch.createInfiniteHitsSessionStorageCache = _index2.createInfiniteHitsSessionStorageCache;
instantsearch.highlight = _index1.highlight;
instantsearch.reverseHighlight = _index1.reverseHighlight;
instantsearch.snippet = _index1.snippet;
instantsearch.reverseSnippet = _index1.reverseSnippet;
instantsearch.insights = _index1.insights;
var _default = instantsearch;
