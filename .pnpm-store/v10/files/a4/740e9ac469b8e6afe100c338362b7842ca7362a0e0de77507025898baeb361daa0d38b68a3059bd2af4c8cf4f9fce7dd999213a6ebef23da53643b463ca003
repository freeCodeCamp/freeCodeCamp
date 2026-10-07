'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CurrentRefinements", {
    enumerable: true,
    get: function() {
        return CurrentRefinements;
    }
});
var _interop_require_default = require("@swc/helpers/_/_interop_require_default");
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
var _react = /*#__PURE__*/ _interop_require_default._(require("react"));
var _reactinstantsearchcore = require("react-instantsearch-core");
var _CurrentRefinements = require("../ui/CurrentRefinements");
function CurrentRefinements(_0) {
    var includedAttributes = _0.includedAttributes, excludedAttributes = _0.excludedAttributes, transformItems = _0.transformItems, props = _object_without_properties._(_0, [
        "includedAttributes",
        "excludedAttributes",
        "transformItems"
    ]);
    var _useCurrentRefinements = (0, _reactinstantsearchcore.useCurrentRefinements)({
        includedAttributes: includedAttributes,
        excludedAttributes: excludedAttributes,
        transformItems: transformItems
    }, {
        $$widgetType: 'ais.currentRefinements'
    }), items = _useCurrentRefinements.items, canRefine = _useCurrentRefinements.canRefine;
    var uiProps = {
        items: items,
        hasRefinements: canRefine
    };
    return /*#__PURE__*/ _react.default.createElement(_CurrentRefinements.CurrentRefinements, _object_spread._({}, props, uiProps));
}
