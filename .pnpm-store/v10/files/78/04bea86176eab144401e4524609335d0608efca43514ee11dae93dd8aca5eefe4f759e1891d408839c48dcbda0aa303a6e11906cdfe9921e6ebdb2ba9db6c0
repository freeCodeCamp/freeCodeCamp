import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_spread_props.js';
import { createDocumentationMessageGenerator } from '../../lib/utils/documentation.js';
import { checkRendering } from '../../lib/utils/checkRendering.js';
import { noop } from '../../lib/utils/noop.js';

var withUsage = createDocumentationMessageGenerator({
    name: 'stats',
    connector: true
});
var connectStats = function connectStats(renderFn) {
    var unmountFn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop;
    checkRendering(renderFn, withUsage());
    return function(widgetParams) {
        return {
            $$type: 'ais.stats',
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

export { connectStats as default };
