import { _ as _$2 } from '@swc/helpers/esm/_object_spread.js';
import { _ as _$1 } from '@swc/helpers/esm/_object_spread_props.js';
import { _ } from '@swc/helpers/esm/_object_without_properties.js';
import { cx } from '../lib/cx.js';

function createDefaultBannerComponent(param) {
    var createElement = param.createElement;
    return function DefaultBanner(param) {
        var classNames = param.classNames, banner = param.banner;
        if (!banner.image.urls[0].url) {
            return null;
        }
        return /*#__PURE__*/ createElement("aside", {
            className: cx('ais-Hits-banner', classNames.bannerRoot)
        }, banner.link ? /*#__PURE__*/ createElement("a", {
            className: cx('ais-Hits-banner-link', classNames.bannerLink),
            href: banner.link.url,
            target: banner.link.target
        }, /*#__PURE__*/ createElement("img", {
            className: cx('ais-Hits-banner-image', classNames.bannerImage),
            src: banner.image.urls[0].url,
            alt: banner.image.title
        })) : /*#__PURE__*/ createElement("img", {
            className: cx('ais-Hits-banner-image', classNames.bannerImage),
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
        var _userProps_classNames = userProps.classNames, classNames = _userProps_classNames === void 0 ? {} : _userProps_classNames, hits = userProps.hits, ItemComponent = userProps.itemComponent, sendEvent = userProps.sendEvent, EmptyComponent = userProps.emptyComponent, banner = userProps.banner, BannerComponent = userProps.bannerComponent, props = _(userProps, [
            "classNames",
            "hits",
            "itemComponent",
            "sendEvent",
            "emptyComponent",
            "banner",
            "bannerComponent"
        ]);
        return /*#__PURE__*/ createElement("div", _$1(_$2({}, props), {
            className: cx('ais-Hits', classNames.root, hits.length === 0 && cx('ais-Hits--empty', classNames.emptyRoot), props.className)
        }), banner && (BannerComponent ? /*#__PURE__*/ createElement(BannerComponent, {
            className: cx('ais-Hits-banner', classNames.bannerRoot),
            banner: banner
        }) : /*#__PURE__*/ createElement(DefaultBannerComponent, {
            classNames: classNames,
            banner: banner
        })), hits.length === 0 && EmptyComponent ? /*#__PURE__*/ createElement(EmptyComponent, null) : /*#__PURE__*/ createElement("ol", {
            className: cx('ais-Hits-list', classNames.list)
        }, hits.map(function(hit, index) {
            return /*#__PURE__*/ createElement(ItemComponent, {
                key: hit.objectID,
                hit: hit,
                index: index,
                className: cx('ais-Hits-item', classNames.item),
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

export { createHitsComponent };
