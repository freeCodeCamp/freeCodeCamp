'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "InfiniteHits", {
    enumerable: true,
    get: function() {
        return InfiniteHits;
    }
});
var _interop_require_default = require("@swc/helpers/_/_interop_require_default");
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
var _react = /*#__PURE__*/ _interop_require_default._(require("react"));
var _reactinstantsearchcore = require("react-instantsearch-core");
var _InfiniteHits = require("../ui/InfiniteHits");
function InfiniteHits(_0) {
    var tmp = _0.showPrevious, shouldShowPrevious = tmp === void 0 ? true : tmp, cache = _0.cache, escapeHTML = _0.escapeHTML, transformItems = _0.transformItems, translations = _0.translations, BannerComponent = _0.bannerComponent, props = _object_without_properties._(_0, [
        "showPrevious",
        "cache",
        "escapeHTML",
        "transformItems",
        "translations",
        "bannerComponent"
    ]);
    var _useInfiniteHits = (0, _reactinstantsearchcore.useInfiniteHits)({
        cache: cache,
        escapeHTML: escapeHTML,
        showPrevious: shouldShowPrevious,
        transformItems: transformItems
    }, {
        $$widgetType: 'ais.infiniteHits'
    }), items = _useInfiniteHits.items, banner = _useInfiniteHits.banner, sendEvent = _useInfiniteHits.sendEvent, showPrevious = _useInfiniteHits.showPrevious, showMore = _useInfiniteHits.showMore, isFirstPage = _useInfiniteHits.isFirstPage, isLastPage = _useInfiniteHits.isLastPage;
    var bannerComponent = BannerComponent === false ? function() {
        return null;
    } : BannerComponent;
    var uiProps = {
        hits: items,
        banner: banner,
        bannerComponent: bannerComponent,
        sendEvent: sendEvent,
        onShowPrevious: shouldShowPrevious ? showPrevious : undefined,
        onShowMore: showMore,
        isFirstPage: isFirstPage,
        isLastPage: isLastPage,
        translations: _object_spread._({
            showPreviousButtonText: 'Show previous results',
            showMoreButtonText: 'Show more results'
        }, translations)
    };
    return /*#__PURE__*/ _react.default.createElement(_InfiniteHits.InfiniteHits, _object_spread._({}, props, uiProps));
}
