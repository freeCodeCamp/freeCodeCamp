'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, /** @deprecated use connectRelatedItems instead */ "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = require("@swc/helpers/_/_interop_require_default");
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _to_consumable_array = require("@swc/helpers/_/_to_consumable_array");
var _algoliasearchhelper = /*#__PURE__*/ _interop_require_default._(require("algoliasearch-helper"));
var _utils = require("../../lib/utils");
var _connectConfigure = /*#__PURE__*/ _interop_require_default._(require("../configure/connectConfigure"));
var withUsage = (0, _utils.createDocumentationMessageGenerator)({
    name: 'configure-related-items',
    connector: true
});
function createOptionalFilter(param) {
    var attributeName = param.attributeName, attributeValue = param.attributeValue, attributeScore = param.attributeScore;
    return "".concat(attributeName, ":").concat(attributeValue, "<score=").concat(attributeScore || 1, ">");
}
var connectConfigureRelatedItems = function connectConfigureRelatedItems(renderFn, unmountFn) {
    return function(widgetParams) {
        var _ref = widgetParams || {}, hit = _ref.hit, matchingPatterns = _ref.matchingPatterns, _ref_transformSearchParameters = _ref.transformSearchParameters, transformSearchParameters = _ref_transformSearchParameters === void 0 ? function(x) {
            return x;
        } : _ref_transformSearchParameters;
        if (!hit) {
            throw new Error(withUsage('The `hit` option is required.'));
        }
        if (!matchingPatterns) {
            throw new Error(withUsage('The `matchingPatterns` option is required.'));
        }
        var optionalFilters = Object.keys(matchingPatterns).reduce(function(acc, attributeName) {
            var attribute = matchingPatterns[attributeName];
            var attributeValue = (0, _utils.getPropertyByPath)(hit, attributeName);
            var attributeScore = attribute.score;
            if (Array.isArray(attributeValue)) {
                return _to_consumable_array._(acc).concat([
                    attributeValue.map(function(attributeSubValue) {
                        return createOptionalFilter({
                            attributeName: attributeName,
                            attributeValue: attributeSubValue,
                            attributeScore: attributeScore
                        });
                    })
                ]);
            }
            if (typeof attributeValue === 'string') {
                return _to_consumable_array._(acc).concat([
                    createOptionalFilter({
                        attributeName: attributeName,
                        attributeValue: attributeValue,
                        attributeScore: attributeScore
                    })
                ]);
            }
            (0, _utils.warning)(false, "\nThe `matchingPatterns` option returned a value of type ".concat((0, _utils.getObjectType)(attributeValue), ' for the "').concat(attributeName, '" key. This value was not sent to Algolia because `optionalFilters` only supports strings and array of strings.\n\nYou can remove the "').concat(attributeName, '" key from the `matchingPatterns` option.\n\nSee https://www.algolia.com/doc/api-reference/api-parameters/optionalFilters/\n            '));
            return acc;
        }, []);
        var searchParameters = _object_spread._({}, transformSearchParameters(new _algoliasearchhelper.default.SearchParameters({
            sumOrFiltersScores: true,
            facetFilters: [
                "objectID:-".concat(hit.objectID)
            ],
            optionalFilters: optionalFilters
        })));
        var makeWidget = (0, _connectConfigure.default)(renderFn, unmountFn);
        return _object_spread_props._(_object_spread._({}, makeWidget({
            searchParameters: searchParameters
        })), {
            $$type: 'ais.configureRelatedItems'
        });
    };
};
var _default = connectConfigureRelatedItems;
