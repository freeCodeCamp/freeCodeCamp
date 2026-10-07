import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ as _$2 } from '@swc/helpers/esm/_object_spread_props.js';
import { _ } from '@swc/helpers/esm/_to_consumable_array.js';
import algoliasearchHelper from 'algoliasearch-helper';
import connectConfigure from '../configure/connectConfigure.js';
import { createDocumentationMessageGenerator } from '../../lib/utils/documentation.js';
import { getPropertyByPath } from '../../lib/utils/getPropertyByPath.js';

var withUsage = createDocumentationMessageGenerator({
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
            var attributeValue = getPropertyByPath(hit, attributeName);
            var attributeScore = attribute.score;
            if (Array.isArray(attributeValue)) {
                return _(acc).concat([
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
                return _(acc).concat([
                    createOptionalFilter({
                        attributeName: attributeName,
                        attributeValue: attributeValue,
                        attributeScore: attributeScore
                    })
                ]);
            }
            return acc;
        }, []);
        var searchParameters = _$1({}, transformSearchParameters(new algoliasearchHelper.SearchParameters({
            sumOrFiltersScores: true,
            facetFilters: [
                "objectID:-".concat(hit.objectID)
            ],
            optionalFilters: optionalFilters
        })));
        var makeWidget = connectConfigure(renderFn, unmountFn);
        return _$2(_$1({}, makeWidget({
            searchParameters: searchParameters
        })), {
            $$type: 'ais.configureRelatedItems'
        });
    };
};

export { connectConfigureRelatedItems as default };
