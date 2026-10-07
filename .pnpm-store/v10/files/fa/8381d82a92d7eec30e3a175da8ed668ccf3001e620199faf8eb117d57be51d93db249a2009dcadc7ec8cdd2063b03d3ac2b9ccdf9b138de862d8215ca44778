'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ClearRefinements", {
    enumerable: true,
    get: function() {
        return ClearRefinements;
    }
});
var _interop_require_default = require("@swc/helpers/_/_interop_require_default");
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
var _react = /*#__PURE__*/ _interop_require_default._(require("react"));
var _reactinstantsearchcore = require("react-instantsearch-core");
var _ClearRefinements = require("../ui/ClearRefinements");
function ClearRefinements(_0) {
    var includedAttributes = _0.includedAttributes, excludedAttributes = _0.excludedAttributes, transformItems = _0.transformItems, translations = _0.translations, props = _object_without_properties._(_0, [
        "includedAttributes",
        "excludedAttributes",
        "transformItems",
        "translations"
    ]);
    var _useClearRefinements = (0, _reactinstantsearchcore.useClearRefinements)({
        includedAttributes: includedAttributes,
        excludedAttributes: excludedAttributes,
        transformItems: transformItems
    }, {
        $$widgetType: 'ais.clearRefinements'
    }), canRefine = _useClearRefinements.canRefine, refine = _useClearRefinements.refine;
    var uiProps = {
        onClick: refine,
        disabled: !canRefine,
        translations: _object_spread._({
            resetButtonText: 'Clear refinements'
        }, translations)
    };
    return /*#__PURE__*/ _react.default.createElement(_ClearRefinements.ClearRefinements, _object_spread._({}, props, uiProps));
}
