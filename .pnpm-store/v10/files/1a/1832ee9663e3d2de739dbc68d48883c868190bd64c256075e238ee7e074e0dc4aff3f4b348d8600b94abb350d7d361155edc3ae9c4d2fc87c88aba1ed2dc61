import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_spread_props.js';
import { _ as _$2 } from '@swc/helpers/esm/_to_consumable_array.js';
import { mergeSearchParameters } from '../../lib/utils/mergeSearchParameters.js';
import { createDocumentationMessageGenerator } from '../../lib/utils/documentation.js';
import { checkRendering } from '../../lib/utils/checkRendering.js';
import { uniq } from '../../lib/utils/uniq.js';
import { getRefinements } from '../../lib/utils/getRefinements.js';
import { noop } from '../../lib/utils/noop.js';
import { clearRefinements } from '../../lib/utils/clearRefinements.js';

var withUsage = createDocumentationMessageGenerator({
    name: 'clear-refinements',
    connector: true
});
var connectClearRefinements = function connectClearRefinements(renderFn) {
    var unmountFn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop;
    checkRendering(renderFn, withUsage());
    return function(widgetParams) {
        var _ref = widgetParams || {}, _ref_includedAttributes = _ref.includedAttributes, includedAttributes = _ref_includedAttributes === void 0 ? [] : _ref_includedAttributes, _ref_excludedAttributes = _ref.excludedAttributes, excludedAttributes = _ref_excludedAttributes === void 0 ? [
            'query'
        ] : _ref_excludedAttributes, _ref_transformItems = _ref.transformItems, transformItems = _ref_transformItems === void 0 ? function(items) {
            return items;
        } : _ref_transformItems;
        if (widgetParams && widgetParams.includedAttributes && widgetParams.excludedAttributes) {
            throw new Error(withUsage('The options `includedAttributes` and `excludedAttributes` cannot be used together.'));
        }
        var connectorState = {
            refine: noop,
            createURL: function createURL() {
                return '';
            },
            attributesToClear: []
        };
        var cachedRefine = function cachedRefine() {
            return connectorState.refine();
        };
        var cachedCreateURL = function cachedCreateURL() {
            return connectorState.createURL();
        };
        return {
            $$type: 'ais.clearRefinements',
            init: function init(initOptions) {
                var instantSearchInstance = initOptions.instantSearchInstance;
                renderFn(_(_$1({}, this.getWidgetRenderState(initOptions)), {
                    instantSearchInstance: instantSearchInstance
                }), true);
            },
            render: function render(renderOptions) {
                var instantSearchInstance = renderOptions.instantSearchInstance;
                renderFn(_(_$1({}, this.getWidgetRenderState(renderOptions)), {
                    instantSearchInstance: instantSearchInstance
                }), false);
            },
            dispose: function dispose() {
                unmountFn();
            },
            getRenderState: function getRenderState(renderState, renderOptions) {
                return _(_$1({}, renderState), {
                    clearRefinements: this.getWidgetRenderState(renderOptions)
                });
            },
            getWidgetRenderState: function getWidgetRenderState(param) {
                var createURL = param.createURL, scopedResults = param.scopedResults, results = param.results;
                connectorState.attributesToClear = scopedResults.reduce(function(attributesToClear, scopedResult) {
                    return attributesToClear.concat(getAttributesToClear({
                        scopedResult: scopedResult,
                        includedAttributes: includedAttributes,
                        excludedAttributes: excludedAttributes,
                        transformItems: transformItems,
                        results: results
                    }));
                }, []);
                connectorState.refine = function() {
                    connectorState.attributesToClear.forEach(function(param) {
                        var indexHelper = param.helper, items = param.items;
                        indexHelper.setState(clearRefinements({
                            helper: indexHelper,
                            attributesToClear: items
                        })).search();
                    });
                };
                connectorState.createURL = function() {
                    return createURL(mergeSearchParameters.apply(void 0, _$2(connectorState.attributesToClear.map(function(param) {
                        var indexHelper = param.helper, items = param.items;
                        return clearRefinements({
                            helper: indexHelper,
                            attributesToClear: items
                        });
                    }))));
                };
                var canRefine = connectorState.attributesToClear.some(function(attributeToClear) {
                    return attributeToClear.items.length > 0;
                });
                return {
                    canRefine: canRefine,
                    hasRefinements: canRefine,
                    refine: cachedRefine,
                    createURL: cachedCreateURL,
                    widgetParams: widgetParams
                };
            }
        };
    };
};
function getAttributesToClear(param) {
    var scopedResult = param.scopedResult, includedAttributes = param.includedAttributes, excludedAttributes = param.excludedAttributes, transformItems = param.transformItems, results = param.results;
    var includesQuery = includedAttributes.indexOf('query') !== -1 || excludedAttributes.indexOf('query') === -1;
    return {
        helper: scopedResult.helper,
        items: transformItems(uniq(getRefinements(scopedResult.results, scopedResult.helper.state, includesQuery).map(function(refinement) {
            return refinement.attribute;
        }).filter(function(attribute) {
            return(// If the array is empty (default case), we keep all the attributes
            includedAttributes.length === 0 || // Otherwise, only add the specified attributes
            includedAttributes.indexOf(attribute) !== -1);
        }).filter(function(attribute) {
            return(// If the query is included, we ignore the default `excludedAttributes = ['query']`
            attribute === 'query' && includesQuery || // Otherwise, ignore the excluded attributes
            excludedAttributes.indexOf(attribute) === -1);
        })), {
            results: results
        })
    };
}

export { connectClearRefinements as default };
