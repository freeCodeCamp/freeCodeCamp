import { _ as _$2 } from '@swc/helpers/esm/_object_spread.js';
import { _ as _$1 } from '@swc/helpers/esm/_object_spread_props.js';
import { _ } from '@swc/helpers/esm/_object_without_properties.js';
import { cx } from 'instantsearch-ui-components';
import React from 'react';

function DefaultHitComponent(param) {
    var hit = param.hit;
    return /*#__PURE__*/ React.createElement("div", {
        style: {
            wordBreak: 'break-all'
        }
    }, JSON.stringify(hit).slice(0, 100), "…");
}
function DefaultBanner(param) {
    var classNames = param.classNames, banner = param.banner;
    if (!banner.image.urls[0].url) {
        return null;
    }
    return /*#__PURE__*/ React.createElement("aside", {
        className: cx('ais-InfiniteHits-banner', classNames.bannerRoot)
    }, banner.link ? /*#__PURE__*/ React.createElement("a", {
        className: cx('ais-InfiniteHits-banner-link', classNames.bannerLink),
        href: banner.link.url,
        target: banner.link.target
    }, /*#__PURE__*/ React.createElement("img", {
        className: cx('ais-InfiniteHits-banner-image', classNames.bannerImage),
        src: banner.image.urls[0].url,
        alt: banner.image.title
    })) : /*#__PURE__*/ React.createElement("img", {
        className: cx('ais-InfiniteHits-banner-image', classNames.bannerImage),
        src: banner.image.urls[0].url,
        alt: banner.image.title
    }));
}
function InfiniteHits(_0) {
    var tmp = _0.hitComponent, HitComponent = tmp === void 0 ? DefaultHitComponent : tmp, hits = _0.hits, BannerComponent = _0.bannerComponent, banner = _0.banner, sendEvent = _0.sendEvent, isFirstPage = _0.isFirstPage, isLastPage = _0.isLastPage, onShowPrevious = _0.onShowPrevious, onShowMore = _0.onShowMore, _0_classNames = _0.classNames, classNames = _0_classNames === void 0 ? {} : _0_classNames, translations = _0.translations, props = _(_0, [
        "hitComponent",
        "hits",
        "bannerComponent",
        "banner",
        "sendEvent",
        "isFirstPage",
        "isLastPage",
        "onShowPrevious",
        "onShowMore",
        "classNames",
        "translations"
    ]);
    return /*#__PURE__*/ React.createElement("div", _$1(_$2({}, props), {
        className: cx('ais-InfiniteHits', classNames.root, hits.length === 0 && cx('ais-InfiniteHits--empty', classNames.emptyRoot), props.className)
    }), onShowPrevious && /*#__PURE__*/ React.createElement("button", {
        className: cx('ais-InfiniteHits-loadPrevious', classNames.loadPrevious, isFirstPage && cx('ais-InfiniteHits-loadPrevious--disabled', classNames.disabledLoadPrevious)),
        onClick: onShowPrevious,
        disabled: isFirstPage
    }, translations.showPreviousButtonText), banner && (BannerComponent ? /*#__PURE__*/ React.createElement(BannerComponent, {
        className: cx('ais-InfiniteHits-banner', classNames.bannerRoot),
        banner: banner
    }) : /*#__PURE__*/ React.createElement(DefaultBanner, {
        classNames: classNames,
        banner: banner
    })), /*#__PURE__*/ React.createElement("ol", {
        className: cx('ais-InfiniteHits-list', classNames.list)
    }, hits.map(function(hit) {
        return /*#__PURE__*/ React.createElement("li", {
            key: hit.objectID,
            className: cx('ais-InfiniteHits-item', classNames.item),
            onClick: function onClick() {
                sendEvent('click:internal', hit, 'Hit Clicked');
            },
            onAuxClick: function onAuxClick() {
                sendEvent('click:internal', hit, 'Hit Clicked');
            }
        }, /*#__PURE__*/ React.createElement(HitComponent, {
            hit: hit,
            sendEvent: sendEvent
        }));
    })), /*#__PURE__*/ React.createElement("button", {
        className: cx('ais-InfiniteHits-loadMore', classNames.loadMore, isLastPage && cx('ais-InfiniteHits-loadMore--disabled', classNames.disabledLoadMore)),
        onClick: onShowMore,
        disabled: isLastPage
    }, translations.showMoreButtonText));
}

export { InfiniteHits };
