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
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
var _instantsearchuicomponents = require("instantsearch-ui-components");
var _react = /*#__PURE__*/ _interop_require_default._(require("react"));
function DefaultHitComponent(param) {
    var hit = param.hit;
    return /*#__PURE__*/ _react.default.createElement("div", {
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
    return /*#__PURE__*/ _react.default.createElement("aside", {
        className: (0, _instantsearchuicomponents.cx)('ais-InfiniteHits-banner', classNames.bannerRoot)
    }, banner.link ? /*#__PURE__*/ _react.default.createElement("a", {
        className: (0, _instantsearchuicomponents.cx)('ais-InfiniteHits-banner-link', classNames.bannerLink),
        href: banner.link.url,
        target: banner.link.target
    }, /*#__PURE__*/ _react.default.createElement("img", {
        className: (0, _instantsearchuicomponents.cx)('ais-InfiniteHits-banner-image', classNames.bannerImage),
        src: banner.image.urls[0].url,
        alt: banner.image.title
    })) : /*#__PURE__*/ _react.default.createElement("img", {
        className: (0, _instantsearchuicomponents.cx)('ais-InfiniteHits-banner-image', classNames.bannerImage),
        src: banner.image.urls[0].url,
        alt: banner.image.title
    }));
}
function InfiniteHits(_0) {
    var tmp = _0.hitComponent, HitComponent = tmp === void 0 ? DefaultHitComponent : tmp, hits = _0.hits, BannerComponent = _0.bannerComponent, banner = _0.banner, sendEvent = _0.sendEvent, isFirstPage = _0.isFirstPage, isLastPage = _0.isLastPage, onShowPrevious = _0.onShowPrevious, onShowMore = _0.onShowMore, _0_classNames = _0.classNames, classNames = _0_classNames === void 0 ? {} : _0_classNames, translations = _0.translations, props = _object_without_properties._(_0, [
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
    return /*#__PURE__*/ _react.default.createElement("div", _object_spread_props._(_object_spread._({}, props), {
        className: (0, _instantsearchuicomponents.cx)('ais-InfiniteHits', classNames.root, hits.length === 0 && (0, _instantsearchuicomponents.cx)('ais-InfiniteHits--empty', classNames.emptyRoot), props.className)
    }), onShowPrevious && /*#__PURE__*/ _react.default.createElement("button", {
        className: (0, _instantsearchuicomponents.cx)('ais-InfiniteHits-loadPrevious', classNames.loadPrevious, isFirstPage && (0, _instantsearchuicomponents.cx)('ais-InfiniteHits-loadPrevious--disabled', classNames.disabledLoadPrevious)),
        onClick: onShowPrevious,
        disabled: isFirstPage
    }, translations.showPreviousButtonText), banner && (BannerComponent ? /*#__PURE__*/ _react.default.createElement(BannerComponent, {
        className: (0, _instantsearchuicomponents.cx)('ais-InfiniteHits-banner', classNames.bannerRoot),
        banner: banner
    }) : /*#__PURE__*/ _react.default.createElement(DefaultBanner, {
        classNames: classNames,
        banner: banner
    })), /*#__PURE__*/ _react.default.createElement("ol", {
        className: (0, _instantsearchuicomponents.cx)('ais-InfiniteHits-list', classNames.list)
    }, hits.map(function(hit) {
        return /*#__PURE__*/ _react.default.createElement("li", {
            key: hit.objectID,
            className: (0, _instantsearchuicomponents.cx)('ais-InfiniteHits-item', classNames.item),
            onClick: function onClick() {
                sendEvent('click:internal', hit, 'Hit Clicked');
            },
            onAuxClick: function onAuxClick() {
                sendEvent('click:internal', hit, 'Hit Clicked');
            }
        }, /*#__PURE__*/ _react.default.createElement(HitComponent, {
            hit: hit,
            sendEvent: sendEvent
        }));
    })), /*#__PURE__*/ _react.default.createElement("button", {
        className: (0, _instantsearchuicomponents.cx)('ais-InfiniteHits-loadMore', classNames.loadMore, isLastPage && (0, _instantsearchuicomponents.cx)('ais-InfiniteHits-loadMore--disabled', classNames.disabledLoadMore)),
        onClick: onShowMore,
        disabled: isLastPage
    }, translations.showMoreButtonText));
}
