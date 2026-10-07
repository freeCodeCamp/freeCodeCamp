import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_without_properties.js';
import React from 'react';
import { useInfiniteHits } from 'react-instantsearch-core';
import { InfiniteHits as InfiniteHits$1 } from '../ui/InfiniteHits.js';

function InfiniteHits(_0) {
    var tmp = _0.showPrevious, shouldShowPrevious = tmp === void 0 ? true : tmp, cache = _0.cache, escapeHTML = _0.escapeHTML, transformItems = _0.transformItems, translations = _0.translations, BannerComponent = _0.bannerComponent, props = _(_0, [
        "showPrevious",
        "cache",
        "escapeHTML",
        "transformItems",
        "translations",
        "bannerComponent"
    ]);
    var _useInfiniteHits = useInfiniteHits({
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
        translations: _$1({
            showPreviousButtonText: 'Show previous results',
            showMoreButtonText: 'Show more results'
        }, translations)
    };
    return /*#__PURE__*/ React.createElement(InfiniteHits$1, _$1({}, props, uiProps));
}

export { InfiniteHits };
