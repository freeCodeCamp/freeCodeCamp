'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _to_consumable_array = require("@swc/helpers/_/_to_consumable_array");
var _utils = require("../../lib/utils");
var withUsage = (0, _utils.createDocumentationMessageGenerator)({
    name: 'hits-per-page',
    connector: true
});
var connectHitsPerPage = function connectHitsPerPage(renderFn) {
    var unmountFn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _utils.noop;
    (0, _utils.checkRendering)(renderFn, withUsage());
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
                return _object_spread_props._(_object_spread._({}, item), {
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
                    (0, _utils.warning)(state.hitsPerPage !== undefined, "\n`hitsPerPage` is not defined.\nThe option `hitsPerPage` needs to be set using the `configure` widget.\n\nLearn more: https://www.algolia.com/doc/api-reference/widgets/hits-per-page/js/\n            ");
                    (0, _utils.warning)(false, '\nThe `items` option of `hitsPerPage` does not contain the "hits per page" value coming from the state: '.concat(state.hitsPerPage, ".\n\nYou may want to add another entry to the `items` option with this value."));
                    items = [
                        // The helper will convert the empty string to `undefined`.
                        {
                            value: '',
                            label: ''
                        }
                    ].concat(_to_consumable_array._(items));
                }
                renderFn(_object_spread_props._(_object_spread._({}, this.getWidgetRenderState(initOptions)), {
                    instantSearchInstance: instantSearchInstance
                }), true);
            },
            render: function render(initOptions) {
                var instantSearchInstance = initOptions.instantSearchInstance;
                renderFn(_object_spread_props._(_object_spread._({}, this.getWidgetRenderState(initOptions)), {
                    instantSearchInstance: instantSearchInstance
                }), false);
            },
            dispose: function dispose(param) {
                var state = param.state;
                unmountFn();
                return state.setQueryParameter('hitsPerPage', undefined);
            },
            getRenderState: function getRenderState(renderState, renderOptions) {
                return _object_spread_props._(_object_spread._({}, renderState), {
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
                return _object_spread_props._(_object_spread._({}, uiState), {
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
var _default = connectHitsPerPage;
