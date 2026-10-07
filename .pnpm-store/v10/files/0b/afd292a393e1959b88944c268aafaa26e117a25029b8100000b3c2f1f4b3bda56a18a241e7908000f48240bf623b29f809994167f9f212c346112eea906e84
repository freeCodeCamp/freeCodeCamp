import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_without_properties.js';
import { createHitsComponent } from 'instantsearch-ui-components';
import React, { createElement, Fragment, useMemo } from 'react';
import { useHits } from 'react-instantsearch-core';

// @MAJOR: Move default hit component back to the UI library
// once flavour specificities are erased
function DefaultHitComponent(param) {
    var hit = param.hit;
    return /*#__PURE__*/ React.createElement("div", {
        style: {
            wordBreak: 'break-all'
        }
    }, JSON.stringify(hit).slice(0, 100), "…");
}
var HitsUiComponent = createHitsComponent({
    createElement: createElement,
    Fragment: Fragment
});
function Hits(_0) {
    var escapeHTML = _0.escapeHTML, transformItems = _0.transformItems, tmp = _0.hitComponent, HitComponent = tmp === void 0 ? DefaultHitComponent : tmp, BannerComponent = _0.bannerComponent, props = _(_0, [
        "escapeHTML",
        "transformItems",
        "hitComponent",
        "bannerComponent"
    ]);
    var _useHits = useHits({
        escapeHTML: escapeHTML,
        transformItems: transformItems
    }, {
        $$widgetType: 'ais.hits'
    }), hits = _useHits.hits, banner = _useHits.banner, sendEvent = _useHits.sendEvent;
    var itemComponent = useMemo(function() {
        return function(_0) {
            var hit = _0.hit; _0.index; var itemProps = _(_0, [
                "hit",
                "index"
            ]);
            return /*#__PURE__*/ React.createElement("li", _$1({
                key: hit.objectID
            }, itemProps), /*#__PURE__*/ React.createElement(HitComponent, {
                hit: hit,
                sendEvent: sendEvent
            }));
        };
    }, [
        HitComponent,
        sendEvent
    ]);
    var bannerComponent = BannerComponent === false ? function() {
        return null;
    } : BannerComponent;
    var uiProps = {
        hits: hits,
        sendEvent: sendEvent,
        itemComponent: itemComponent,
        banner: banner,
        bannerComponent: bannerComponent
    };
    return /*#__PURE__*/ React.createElement(HitsUiComponent, _$1({}, props, uiProps));
}

export { Hits };
