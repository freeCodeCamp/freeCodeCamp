'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Hits", {
    enumerable: true,
    get: function() {
        return Hits;
    }
});
var _interop_require_wildcard = require("@swc/helpers/_/_interop_require_wildcard");
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
var _instantsearchuicomponents = require("instantsearch-ui-components");
var _react = /*#__PURE__*/ _interop_require_wildcard._(require("react"));
var _reactinstantsearchcore = require("react-instantsearch-core");
// @MAJOR: Move default hit component back to the UI library
// once flavour specificities are erased
function DefaultHitComponent(param) {
    var hit = param.hit;
    return /*#__PURE__*/ _react.default.createElement("div", {
        style: {
            wordBreak: 'break-all'
        }
    }, JSON.stringify(hit).slice(0, 100), "…");
}
var HitsUiComponent = (0, _instantsearchuicomponents.createHitsComponent)({
    createElement: _react.createElement,
    Fragment: _react.Fragment
});
function Hits(_0) {
    var escapeHTML = _0.escapeHTML, transformItems = _0.transformItems, tmp = _0.hitComponent, HitComponent = tmp === void 0 ? DefaultHitComponent : tmp, BannerComponent = _0.bannerComponent, props = _object_without_properties._(_0, [
        "escapeHTML",
        "transformItems",
        "hitComponent",
        "bannerComponent"
    ]);
    var _useHits = (0, _reactinstantsearchcore.useHits)({
        escapeHTML: escapeHTML,
        transformItems: transformItems
    }, {
        $$widgetType: 'ais.hits'
    }), hits = _useHits.hits, banner = _useHits.banner, sendEvent = _useHits.sendEvent;
    var itemComponent = (0, _react.useMemo)(function() {
        return function(_0) {
            var hit = _0.hit; _0.index; var itemProps = _object_without_properties._(_0, [
                "hit",
                "index"
            ]);
            return /*#__PURE__*/ _react.default.createElement("li", _object_spread._({
                key: hit.objectID
            }, itemProps), /*#__PURE__*/ _react.default.createElement(HitComponent, {
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
    return /*#__PURE__*/ _react.default.createElement(HitsUiComponent, _object_spread._({}, props, uiProps));
}
