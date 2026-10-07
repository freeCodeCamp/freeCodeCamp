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
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
var _instantsearchuicomponents = require("instantsearch-ui-components");
var _react = /*#__PURE__*/ _interop_require_default._(require("react"));
var _lib = require("./lib");
function CurrentRefinements(_0) {
    var _0_classNames = _0.classNames, classNames = _0_classNames === void 0 ? {} : _0_classNames, _0_items = _0.items, items = _0_items === void 0 ? [] : _0_items, _0_hasRefinements = _0.hasRefinements, hasRefinements = _0_hasRefinements === void 0 ? false : _0_hasRefinements, props = _object_without_properties._(_0, [
        "classNames",
        "items",
        "hasRefinements"
    ]);
    return /*#__PURE__*/ _react.default.createElement("div", _object_spread_props._(_object_spread._({}, props), {
        className: (0, _instantsearchuicomponents.cx)('ais-CurrentRefinements', classNames.root, !hasRefinements && (0, _instantsearchuicomponents.cx)('ais-CurrentRefinements--noRefinement', classNames.noRefinementRoot), props.className)
    }), /*#__PURE__*/ _react.default.createElement("ul", {
        className: (0, _instantsearchuicomponents.cx)('ais-CurrentRefinements-list', classNames.list, /* @MAJOR remove to ensure conformity with InstantSearch.css specs */ !hasRefinements && (0, _instantsearchuicomponents.cx)('ais-CurrentRefinements-list--noRefinement', classNames.noRefinementList))
    }, items.map(function(item) {
        return /*#__PURE__*/ _react.default.createElement("li", {
            key: [
                item.indexName,
                item.label
            ].join('/'),
            className: (0, _instantsearchuicomponents.cx)('ais-CurrentRefinements-item', classNames.item)
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: (0, _instantsearchuicomponents.cx)('ais-CurrentRefinements-label', classNames.label)
        }, (0, _lib.capitalize)(item.label), ":", ' '), item.refinements.map(function(refinement) {
            return /*#__PURE__*/ _react.default.createElement("span", {
                key: refinement.label,
                className: (0, _instantsearchuicomponents.cx)('ais-CurrentRefinements-category', classNames.category)
            }, /*#__PURE__*/ _react.default.createElement("span", {
                className: (0, _instantsearchuicomponents.cx)('ais-CurrentRefinements-categoryLabel', classNames.categoryLabel)
            }, refinement.label), /*#__PURE__*/ _react.default.createElement("button", {
                type: "button",
                onClick: function onClick(event) {
                    if ((0, _lib.isModifierClick)(event)) {
                        return;
                    }
                    item.refine(refinement);
                },
                className: (0, _instantsearchuicomponents.cx)('ais-CurrentRefinements-delete', classNames.delete)
            }, "✕"));
        }));
    })));
}
