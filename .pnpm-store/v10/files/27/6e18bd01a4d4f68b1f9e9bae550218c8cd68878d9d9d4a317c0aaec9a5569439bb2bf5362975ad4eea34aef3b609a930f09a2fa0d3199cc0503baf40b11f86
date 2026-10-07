'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createHitsComponent", {
    enumerable: true,
    get: function() {
        return createHitsComponent;
    }
});
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
var _lib = require("../lib");
function createDefaultBannerComponent(param) {
    var createElement = param.createElement;
    return function DefaultBanner(param) {
        var classNames = param.classNames, banner = param.banner;
        if (!banner.image.urls[0].url) {
            return null;
        }
        return /*#__PURE__*/ createElement("aside", {
            className: (0, _lib.cx)('ais-Hits-banner', classNames.bannerRoot)
        }, banner.link ? /*#__PURE__*/ createElement("a", {
            className: (0, _lib.cx)('ais-Hits-banner-link', classNames.bannerLink),
            href: banner.link.url,
            target: banner.link.target
        }, /*#__PURE__*/ createElement("img", {
            className: (0, _lib.cx)('ais-Hits-banner-image', classNames.bannerImage),
            src: banner.image.urls[0].url,
            alt: banner.image.title
        })) : /*#__PURE__*/ createElement("img", {
            className: (0, _lib.cx)('ais-Hits-banner-image', classNames.bannerImage),
            src: banner.image.urls[0].url,
            alt: banner.image.title
        }));
    };
}
function createHitsComponent(param) {
    var createElement = param.createElement, Fragment = param.Fragment;
    var DefaultBannerComponent = createDefaultBannerComponent({
        createElement: createElement,
        Fragment: Fragment
    });
    return function Hits(userProps) {
        var _userProps_classNames = userProps.classNames, classNames = _userProps_classNames === void 0 ? {} : _userProps_classNames, hits = userProps.hits, ItemComponent = userProps.itemComponent, sendEvent = userProps.sendEvent, EmptyComponent = userProps.emptyComponent, banner = userProps.banner, BannerComponent = userProps.bannerComponent, props = _object_without_properties._(userProps, [
            "classNames",
            "hits",
            "itemComponent",
            "sendEvent",
            "emptyComponent",
            "banner",
            "bannerComponent"
        ]);
        return /*#__PURE__*/ createElement("div", _object_spread_props._(_object_spread._({}, props), {
            className: (0, _lib.cx)('ais-Hits', classNames.root, hits.length === 0 && (0, _lib.cx)('ais-Hits--empty', classNames.emptyRoot), props.className)
        }), banner && (BannerComponent ? /*#__PURE__*/ createElement(BannerComponent, {
            className: (0, _lib.cx)('ais-Hits-banner', classNames.bannerRoot),
            banner: banner
        }) : /*#__PURE__*/ createElement(DefaultBannerComponent, {
            classNames: classNames,
            banner: banner
        })), hits.length === 0 && EmptyComponent ? /*#__PURE__*/ createElement(EmptyComponent, null) : /*#__PURE__*/ createElement("ol", {
            className: (0, _lib.cx)('ais-Hits-list', classNames.list)
        }, hits.map(function(hit, index) {
            return /*#__PURE__*/ createElement(ItemComponent, {
                key: hit.objectID,
                hit: hit,
                index: index,
                className: (0, _lib.cx)('ais-Hits-item', classNames.item),
                onClick: function onClick() {
                    sendEvent('click:internal', hit, 'Hit Clicked');
                },
                onAuxClick: function onAuxClick() {
                    sendEvent('click:internal', hit, 'Hit Clicked');
                }
            });
        })));
    };
}
