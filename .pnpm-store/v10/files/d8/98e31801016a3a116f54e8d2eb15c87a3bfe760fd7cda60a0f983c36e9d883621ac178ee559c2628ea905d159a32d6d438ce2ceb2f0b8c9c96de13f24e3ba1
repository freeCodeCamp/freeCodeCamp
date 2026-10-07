'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createFilterSuggestionsComponent", {
    enumerable: true,
    get: function() {
        return createFilterSuggestionsComponent;
    }
});
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
var _to_consumable_array = require("@swc/helpers/_/_to_consumable_array");
var _lib = require("../lib");
var _Button = require("./Button");
var _icons = require("./chat/icons");
function createFilterSuggestionsComponent(param) {
    var createElement = param.createElement;
    var Button = (0, _Button.createButtonComponent)({
        createElement: createElement
    });
    function DefaultHeader(param) {
        var classNames = param.classNames;
        return /*#__PURE__*/ createElement("div", {
            className: (0, _lib.cx)('ais-FilterSuggestions-header', classNames.header)
        }, /*#__PURE__*/ createElement("span", {
            className: (0, _lib.cx)('ais-FilterSuggestions-headerIcon', classNames.headerIcon)
        }, /*#__PURE__*/ createElement(_icons.SparklesIcon, {
            createElement: createElement
        })), /*#__PURE__*/ createElement("span", {
            className: (0, _lib.cx)('ais-FilterSuggestions-headerTitle', classNames.headerTitle)
        }, "Filter suggestions"));
    }
    function DefaultItem(param) {
        var suggestion = param.suggestion, classNames = param.classNames, refine = param.refine;
        return /*#__PURE__*/ createElement(Button, {
            variant: "outline",
            size: "sm",
            className: (0, _lib.cx)(classNames.button),
            onClick: refine
        }, /*#__PURE__*/ createElement("span", {
            className: (0, _lib.cx)('ais-FilterSuggestions-label', classNames.label)
        }, suggestion.label, ": ", suggestion.value), /*#__PURE__*/ createElement("span", {
            className: (0, _lib.cx)('ais-FilterSuggestions-count', classNames.count)
        }, suggestion.count));
    }
    return function FilterSuggestions(userProps) {
        var _userProps_classNames = userProps.classNames, classNames = _userProps_classNames === void 0 ? {} : _userProps_classNames, suggestions = userProps.suggestions, isLoading = userProps.isLoading, refine = userProps.refine, _userProps_skeletonCount = userProps.skeletonCount, skeletonCount = _userProps_skeletonCount === void 0 ? 3 : _userProps_skeletonCount, tmp = userProps.itemComponent, ItemComponent = tmp === void 0 ? DefaultItem : tmp, headerComponent = userProps.headerComponent, EmptyComponent = userProps.emptyComponent, props = _object_without_properties._(userProps, [
            "classNames",
            "suggestions",
            "isLoading",
            "refine",
            "skeletonCount",
            "itemComponent",
            "headerComponent",
            "emptyComponent"
        ]);
        var HeaderComponent = headerComponent === false ? null : headerComponent !== null && headerComponent !== void 0 ? headerComponent : DefaultHeader;
        var isEmpty = suggestions.length === 0;
        if (isEmpty && !isLoading) {
            return /*#__PURE__*/ createElement("div", _object_spread_props._(_object_spread._({}, props), {
                className: (0, _lib.cx)('ais-FilterSuggestions', classNames.root, 'ais-FilterSuggestions--empty', classNames.emptyRoot, props.className)
            }), EmptyComponent && /*#__PURE__*/ createElement(EmptyComponent, {
                classNames: {
                    emptyRoot: classNames.emptyRoot
                }
            }));
        }
        var headerClassNames = {
            header: classNames.header,
            headerIcon: classNames.headerIcon,
            headerTitle: classNames.headerTitle
        };
        var itemClassNames = {
            item: classNames.item,
            button: classNames.button,
            label: classNames.label,
            count: classNames.count
        };
        return /*#__PURE__*/ createElement("div", _object_spread_props._(_object_spread._({}, props), {
            className: (0, _lib.cx)('ais-FilterSuggestions', classNames.root, isLoading && (0, _lib.cx)('ais-FilterSuggestions--loading', classNames.loadingRoot), props.className)
        }), HeaderComponent && /*#__PURE__*/ createElement(HeaderComponent, {
            classNames: headerClassNames
        }), isLoading ? /*#__PURE__*/ createElement("div", {
            className: (0, _lib.cx)('ais-FilterSuggestions-skeleton', classNames.skeleton)
        }, _to_consumable_array._(new Array(skeletonCount)).map(function(_, i) {
            return /*#__PURE__*/ createElement("div", {
                key: i,
                className: (0, _lib.cx)('ais-FilterSuggestions-skeletonItem', classNames.skeletonItem)
            });
        })) : /*#__PURE__*/ createElement("ul", {
            className: (0, _lib.cx)('ais-FilterSuggestions-list', classNames.list)
        }, suggestions.map(function(suggestion) {
            return /*#__PURE__*/ createElement("li", {
                key: "".concat(suggestion.attribute, "-").concat(suggestion.value),
                className: (0, _lib.cx)('ais-FilterSuggestions-item', classNames.item)
            }, /*#__PURE__*/ createElement(ItemComponent, {
                suggestion: suggestion,
                classNames: itemClassNames,
                refine: function refine1() {
                    return refine(suggestion.attribute, suggestion.value);
                }
            }));
        })));
    };
}
