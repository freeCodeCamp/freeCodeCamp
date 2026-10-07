import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_spread_props.js';
import { cx } from 'instantsearch-ui-components';
import { render, h } from 'preact';
import Stats from '../../components/Stats/Stats.js';
import connectStats from '../../connectors/stats/connectStats.js';
import { formatNumber } from '../../lib/formatNumber.js';
import { component } from '../../lib/suit.js';
import { createDocumentationMessageGenerator } from '../../lib/utils/documentation.js';
import { getContainerNode } from '../../lib/utils/getContainerNode.js';
import { prepareTemplateProps } from '../../lib/templating/prepareTemplateProps.js';

var withUsage = createDocumentationMessageGenerator({
    name: 'stats'
});
var suit = component('Stats');
var defaultTemplates = {
    text: function text(props) {
        return "".concat(props.areHitsSorted ? getSortedResultsSentence(props) : getResultsSentence(props), " found in ").concat(props.processingTimeMS, "ms");
    }
};
function getSortedResultsSentence(param) {
    var nbHits = param.nbHits, hasNoSortedResults = param.hasNoSortedResults, hasOneSortedResults = param.hasOneSortedResults, hasManySortedResults = param.hasManySortedResults, nbSortedHits = param.nbSortedHits;
    var suffix = "sorted out of ".concat(formatNumber(nbHits));
    if (hasNoSortedResults) {
        return "No relevant results ".concat(suffix);
    }
    if (hasOneSortedResults) {
        return "1 relevant result ".concat(suffix);
    }
    if (hasManySortedResults) {
        return "".concat(formatNumber(nbSortedHits || 0), " relevant results ").concat(suffix);
    }
    return '';
}
function getResultsSentence(param) {
    var nbHits = param.nbHits, hasNoResults = param.hasNoResults, hasOneResult = param.hasOneResult, hasManyResults = param.hasManyResults;
    if (hasNoResults) {
        return 'No results';
    }
    if (hasOneResult) {
        return '1 result';
    }
    if (hasManyResults) {
        return "".concat(formatNumber(nbHits), " results");
    }
    return '';
}
var renderer = function renderer(param) {
    var renderState = param.renderState, cssClasses = param.cssClasses, containerNode = param.containerNode, templates = param.templates;
    return function(param, isFirstRendering) {
        var hitsPerPage = param.hitsPerPage, nbHits = param.nbHits, nbSortedHits = param.nbSortedHits, areHitsSorted = param.areHitsSorted, nbPages = param.nbPages, page = param.page, processingTimeMS = param.processingTimeMS, query = param.query, instantSearchInstance = param.instantSearchInstance;
        if (isFirstRendering) {
            renderState.templateProps = prepareTemplateProps({
                defaultTemplates: defaultTemplates,
                templatesConfig: instantSearchInstance.templatesConfig,
                templates: templates
            });
            return;
        }
        render(/*#__PURE__*/ h(Stats, {
            cssClasses: cssClasses,
            hitsPerPage: hitsPerPage,
            nbHits: nbHits,
            nbSortedHits: nbSortedHits,
            areHitsSorted: areHitsSorted,
            nbPages: nbPages,
            page: page,
            processingTimeMS: processingTimeMS,
            query: query,
            templateProps: renderState.templateProps
        }), containerNode);
    };
};
/**
 * The `stats` widget is used to display useful insights about the current results.
 *
 * By default, it will display the **number of hits** and the time taken to compute the
 * results inside the engine.
 */ var stats = function stats(widgetParams) {
    var _ref = widgetParams || {}, container = _ref.container, tmp = _ref.cssClasses, userCssClasses = tmp === void 0 ? {} : tmp, _ref_templates = _ref.templates, templates = _ref_templates === void 0 ? {} : _ref_templates;
    if (!container) {
        throw new Error(withUsage('The `container` option is required.'));
    }
    var containerNode = getContainerNode(container);
    var cssClasses = {
        root: cx(suit(), userCssClasses.root),
        text: cx(suit({
            descendantName: 'text'
        }), userCssClasses.text)
    };
    var specializedRenderer = renderer({
        containerNode: containerNode,
        cssClasses: cssClasses,
        templates: templates,
        renderState: {}
    });
    var makeWidget = connectStats(specializedRenderer, function() {
        return render(null, containerNode);
    });
    return _(_$1({}, makeWidget({})), {
        $$widgetType: 'ais.stats'
    });
};

export { stats as default, defaultTemplates };
