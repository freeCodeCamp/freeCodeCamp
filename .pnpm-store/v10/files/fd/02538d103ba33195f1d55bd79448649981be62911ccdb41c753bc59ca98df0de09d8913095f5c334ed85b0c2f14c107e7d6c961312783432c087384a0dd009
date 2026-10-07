'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Stats", {
    enumerable: true,
    get: function() {
        return Stats;
    }
});
var _interop_require_default = require("@swc/helpers/_/_interop_require_default");
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
var _instantsearchuicomponents = require("instantsearch-ui-components");
var _react = /*#__PURE__*/ _interop_require_default._(require("react"));
function Stats(_0) {
    var _0_classNames = _0.classNames, classNames = _0_classNames === void 0 ? {} : _0_classNames, nbHits = _0.nbHits, processingTimeMS = _0.processingTimeMS, nbSortedHits = _0.nbSortedHits, areHitsSorted = _0.areHitsSorted, translations = _0.translations, props = _object_without_properties._(_0, [
        "classNames",
        "nbHits",
        "processingTimeMS",
        "nbSortedHits",
        "areHitsSorted",
        "translations"
    ]);
    var translationOptions = {
        nbHits: nbHits,
        processingTimeMS: processingTimeMS,
        nbSortedHits: nbSortedHits,
        areHitsSorted: areHitsSorted
    };
    return /*#__PURE__*/ _react.default.createElement("div", _object_spread_props._(_object_spread._({}, props), {
        className: (0, _instantsearchuicomponents.cx)('ais-Stats', classNames.root, props.className)
    }), /*#__PURE__*/ _react.default.createElement("span", {
        className: "ais-Stats-text"
    }, translations.rootElementText(translationOptions)));
}
