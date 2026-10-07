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
var _utils = require("../../lib/utils");
var withUsage = (0, _utils.createDocumentationMessageGenerator)({
    name: 'stats',
    connector: true
});
var connectStats = function connectStats(renderFn) {
    var unmountFn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _utils.noop;
    (0, _utils.checkRendering)(renderFn, withUsage());
    return function(widgetParams) {
        return {
            $$type: 'ais.stats',
            init: function init(initOptions) {
                var instantSearchInstance = initOptions.instantSearchInstance;
                renderFn(_object_spread_props._(_object_spread._({}, this.getWidgetRenderState(initOptions)), {
                    instantSearchInstance: instantSearchInstance
                }), true);
            },
            render: function render(renderOptions) {
                var instantSearchInstance = renderOptions.instantSearchInstance;
                renderFn(_object_spread_props._(_object_spread._({}, this.getWidgetRenderState(renderOptions)), {
                    instantSearchInstance: instantSearchInstance
                }), false);
            },
            dispose: function dispose() {
                unmountFn();
            },
            getRenderState: function getRenderState(renderState, renderOptions) {
                return _object_spread_props._(_object_spread._({}, renderState), {
                    stats: this.getWidgetRenderState(renderOptions)
                });
            },
            getWidgetRenderState: function getWidgetRenderState(param) {
                var results = param.results, state = param.state;
                if (!results) {
                    return {
                        hitsPerPage: state.hitsPerPage,
                        nbHits: 0,
                        nbSortedHits: undefined,
                        areHitsSorted: false,
                        nbPages: 0,
                        page: state.page || 0,
                        processingTimeMS: -1,
                        query: state.query || '',
                        widgetParams: widgetParams
                    };
                }
                return {
                    hitsPerPage: results.hitsPerPage,
                    nbHits: results.nbHits,
                    nbSortedHits: results.nbSortedHits,
                    areHitsSorted: typeof results.appliedRelevancyStrictness !== 'undefined' && results.appliedRelevancyStrictness > 0 && results.nbSortedHits !== results.nbHits,
                    nbPages: results.nbPages,
                    page: results.page,
                    processingTimeMS: results.processingTimeMS,
                    query: results.query,
                    widgetParams: widgetParams
                };
            }
        };
    };
};
var _default = connectStats;
