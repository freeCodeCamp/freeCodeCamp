import { _ as _$2 } from '@swc/helpers/esm/_object_spread.js';
import { _ as _$1 } from '@swc/helpers/esm/_object_spread_props.js';
import { _ } from '@swc/helpers/esm/_to_consumable_array.js';
import { createDocumentationMessageGenerator } from '../../lib/utils/documentation.js';
import { checkRendering } from '../../lib/utils/checkRendering.js';
import { noop } from '../../lib/utils/noop.js';

var withUsage = createDocumentationMessageGenerator({
    name: 'hits-per-page',
    connector: true
});
var connectHitsPerPage = function connectHitsPerPage(renderFn) {
    var unmountFn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop;
    checkRendering(renderFn, withUsage());
    return function(widgetParams) {
        var _ref = widgetParams || {}, userItems = _ref.items, _ref_transformItems = _ref.transformItems, transformItems = _ref_transformItems === void 0 ? function(items) {
            return items;
        } : _ref_transformItems;
        if (!Array.isArray(userItems)) {
            throw new Error(withUsage('The `items` option expects an array of objects.'));
        }
        var items = userItems;
        var defaultItems = items.filter(function(item) {
            return item.default === true;
        });
        if (defaultItems.length === 0) {
            throw new Error(withUsage("A default value must be specified in `items`."));
        }
        if (defaultItems.length > 1) {
            throw new Error(withUsage('More than one default value is specified in `items`.'));
        }
        var defaultItem = defaultItems[0];
        var normalizeItems = function normalizeItems(param) {
            var hitsPerPage = param.hitsPerPage;
            return items.map(function(item) {
                return _$1(_$2({}, item), {
                    isRefined: Number(item.value) === Number(hitsPerPage)
                });
            });
        };
        var connectorState = {
            getRefine: function getRefine(helper) {
                return function(value) {
                    return !value && value !== 0 ? helper.setQueryParameter('hitsPerPage', undefined).search() : helper.setQueryParameter('hitsPerPage', value).search();
                };
            },
            createURLFactory: function createURLFactory(param) {
                var state = param.state, createURL = param.createURL, getWidgetUiState = param.getWidgetUiState, helper = param.helper;
                return function(value) {
                    return createURL(function(uiState) {
                        return getWidgetUiState(uiState, {
                            searchParameters: state.resetPage().setQueryParameter('hitsPerPage', !value && value !== 0 ? undefined : value),
                            helper: helper
                        });
                    });
                };
            }
        };
        return {
            $$type: 'ais.hitsPerPage',
            init: function init(initOptions) {
                var state = initOptions.state, instantSearchInstance = initOptions.instantSearchInstance;
                var isCurrentInOptions = items.some(function(item) {
                    return Number(state.hitsPerPage) === Number(item.value);
                });
                if (!isCurrentInOptions) {
                    items = [
                        // The helper will convert the empty string to `undefined`.
                        {
                            value: '',
                            label: ''
                        }
                    ].concat(_(items));
                }
                renderFn(_$1(_$2({}, this.getWidgetRenderState(initOptions)), {
                    instantSearchInstance: instantSearchInstance
                }), true);
            },
            render: function render(initOptions) {
                var instantSearchInstance = initOptions.instantSearchInstance;
                renderFn(_$1(_$2({}, this.getWidgetRenderState(initOptions)), {
                    instantSearchInstance: instantSearchInstance
                }), false);
            },
            dispose: function dispose(param) {
                var state = param.state;
                unmountFn();
                return state.setQueryParameter('hitsPerPage', undefined);
            },
            getRenderState: function getRenderState(renderState, renderOptions) {
                return _$1(_$2({}, renderState), {
                    hitsPerPage: this.getWidgetRenderState(renderOptions)
                });
            },
            getWidgetRenderState: function getWidgetRenderState(param) {
                var state = param.state, results = param.results, createURL = param.createURL, helper = param.helper;
                var canRefine = results ? results.nbHits > 0 : false;
                return {
                    items: transformItems(normalizeItems(state), {
                        results: results
                    }),
                    refine: connectorState.getRefine(helper),
                    createURL: connectorState.createURLFactory({
                        state: state,
                        createURL: createURL,
                        getWidgetUiState: this.getWidgetUiState,
                        helper: helper
                    }),
                    hasNoResults: !canRefine,
                    canRefine: canRefine,
                    widgetParams: widgetParams
                };
            },
            getWidgetUiState: function getWidgetUiState(uiState, param) {
                var searchParameters = param.searchParameters;
                var hitsPerPage = searchParameters.hitsPerPage;
                if (hitsPerPage === undefined || hitsPerPage === defaultItem.value) {
                    return uiState;
                }
                return _$1(_$2({}, uiState), {
                    hitsPerPage: hitsPerPage
                });
            },
            getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, param) {
                var uiState = param.uiState;
                return searchParameters.setQueryParameters({
                    hitsPerPage: uiState.hitsPerPage || defaultItem.value
                });
            }
        };
    };
};

export { connectHitsPerPage as default };
