import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_spread_props.js';
import { cx } from 'instantsearch-ui-components';
import { render, h } from 'preact';
import Answers from '../../components/Answers/Answers.js';
import connectAnswers from '../../connectors/answers/connectAnswers.js';
import { component } from '../../lib/suit.js';
import defaultTemplates from './defaultTemplates.js';
import { getContainerNode } from '../../lib/utils/getContainerNode.js';
import { prepareTemplateProps } from '../../lib/templating/prepareTemplateProps.js';
import { createDocumentationMessageGenerator } from '../../lib/utils/documentation.js';
import { deprecate } from '../../lib/utils/logger.js';

var withUsage = createDocumentationMessageGenerator({
    name: 'answers'
});
var suit = component('Answers');
var renderer = function renderer(param) {
    var containerNode = param.containerNode, cssClasses = param.cssClasses, renderState = param.renderState, templates = param.templates;
    return function(param, isFirstRendering) {
        var hits = param.hits, isLoading = param.isLoading, instantSearchInstance = param.instantSearchInstance;
        if (isFirstRendering) {
            renderState.templateProps = prepareTemplateProps({
                defaultTemplates: defaultTemplates,
                templatesConfig: instantSearchInstance.templatesConfig,
                templates: templates
            });
            return;
        }
        render(/*#__PURE__*/ h(Answers, {
            cssClasses: cssClasses,
            hits: hits,
            isLoading: isLoading,
            templateProps: renderState.templateProps
        }), containerNode);
    };
};
/**
 * @deprecated the answers service is no longer offered, and this widget will be removed in InstantSearch.js v5
 */ var answersWidget = function answersWidget(widgetParams) {
    var _ref = widgetParams || {}, container = _ref.container, attributesForPrediction = _ref.attributesForPrediction, queryLanguages = _ref.queryLanguages, nbHits = _ref.nbHits, searchDebounceTime = _ref.searchDebounceTime, renderDebounceTime = _ref.renderDebounceTime, escapeHTML = _ref.escapeHTML, extraParameters = _ref.extraParameters, _ref_templates = _ref.templates, templates = _ref_templates === void 0 ? {} : _ref_templates, tmp = _ref.cssClasses, userCssClasses = tmp === void 0 ? {} : tmp;
    if (!container) {
        throw new Error(withUsage('The `container` option is required.'));
    }
    var containerNode = getContainerNode(container);
    var cssClasses = {
        root: cx(suit(), userCssClasses.root),
        emptyRoot: cx(suit({
            modifierName: 'empty'
        }), userCssClasses.emptyRoot),
        header: cx(suit({
            descendantName: 'header'
        }), userCssClasses.header),
        loader: cx(suit({
            descendantName: 'loader'
        }), userCssClasses.loader),
        list: cx(suit({
            descendantName: 'list'
        }), userCssClasses.list),
        item: cx(suit({
            descendantName: 'item'
        }), userCssClasses.item)
    };
    var specializedRenderer = renderer({
        containerNode: containerNode,
        cssClasses: cssClasses,
        templates: templates,
        renderState: {}
    });
    var makeWidget = connectAnswers(specializedRenderer, function() {
        return render(null, containerNode);
    });
    return _(_$1({}, makeWidget({
        attributesForPrediction: attributesForPrediction,
        queryLanguages: queryLanguages,
        nbHits: nbHits,
        searchDebounceTime: searchDebounceTime,
        renderDebounceTime: renderDebounceTime,
        escapeHTML: escapeHTML,
        extraParameters: extraParameters
    })), {
        $$widgetType: 'ais.answers'
    });
};
var answers = deprecate(answersWidget);

export { answers as default };
