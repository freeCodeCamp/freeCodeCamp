import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_spread_props.js';
import { cx } from 'instantsearch-ui-components';
import { render, h } from 'preact';
import RefinementList from '../../components/RefinementList/RefinementList.js';
import connectRatingMenu from '../../connectors/rating-menu/connectRatingMenu.js';
import { component } from '../../lib/suit.js';
import defaultTemplates from './defaultTemplates.js';
import { createDocumentationMessageGenerator } from '../../lib/utils/documentation.js';
import { getContainerNode } from '../../lib/utils/getContainerNode.js';
import { prepareTemplateProps } from '../../lib/templating/prepareTemplateProps.js';

var withUsage = createDocumentationMessageGenerator({
    name: 'rating-menu'
});
var suit = component('RatingMenu');
var renderer = function renderer(param) {
    var containerNode = param.containerNode, cssClasses = param.cssClasses, templates = param.templates, renderState = param.renderState;
    return function(param, isFirstRendering) {
        var refine = param.refine, items = param.items, createURL = param.createURL, instantSearchInstance = param.instantSearchInstance;
        if (isFirstRendering) {
            renderState.templateProps = prepareTemplateProps({
                defaultTemplates: defaultTemplates,
                templatesConfig: instantSearchInstance.templatesConfig,
                templates: templates
            });
            return;
        }
        render(/*#__PURE__*/ h(RefinementList, {
            createURL: createURL,
            cssClasses: cssClasses,
            facetValues: items,
            templateProps: renderState.templateProps,
            toggleRefinement: refine
        }, /*#__PURE__*/ h("svg", {
            style: "display:none;"
        }, /*#__PURE__*/ h("symbol", {
            id: suit({
                descendantName: 'starSymbol'
            }),
            viewBox: "0 0 24 24"
        }, /*#__PURE__*/ h("path", {
            d: "M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"
        })), /*#__PURE__*/ h("symbol", {
            id: suit({
                descendantName: 'starEmptySymbol'
            }),
            viewBox: "0 0 24 24"
        }, /*#__PURE__*/ h("path", {
            d: "M12 6.76l1.379 4.246h4.465l-3.612 2.625 1.379 4.246-3.611-2.625-3.612 2.625 1.379-4.246-3.612-2.625h4.465l1.38-4.246zm0-6.472l-2.833 8.718h-9.167l7.416 5.389-2.833 8.718 7.417-5.388 7.416 5.388-2.833-8.718 7.417-5.389h-9.167l-2.833-8.718z"
        })))), containerNode);
    };
};
var ratingMenu = function ratingMenu(widgetParams) {
    var _ref = widgetParams || {}, container = _ref.container, attribute = _ref.attribute, _ref_max = _ref.max, max = _ref_max === void 0 ? 5 : _ref_max, tmp = _ref.cssClasses, userCssClasses = tmp === void 0 ? {} : tmp, _ref_templates = _ref.templates, templates = _ref_templates === void 0 ? {} : _ref_templates;
    if (!container) {
        throw new Error(withUsage('The `container` option is required.'));
    }
    var containerNode = getContainerNode(container);
    var cssClasses = {
        root: cx(suit(), userCssClasses.root),
        noRefinementRoot: cx(suit({
            modifierName: 'noRefinement'
        }), userCssClasses.noRefinementRoot),
        list: cx(suit({
            descendantName: 'list'
        }), userCssClasses.list),
        item: cx(suit({
            descendantName: 'item'
        }), userCssClasses.item),
        selectedItem: cx(suit({
            descendantName: 'item',
            modifierName: 'selected'
        }), userCssClasses.selectedItem),
        disabledItem: cx(suit({
            descendantName: 'item',
            modifierName: 'disabled'
        }), userCssClasses.disabledItem),
        link: cx(suit({
            descendantName: 'link'
        }), userCssClasses.link),
        starIcon: cx(suit({
            descendantName: 'starIcon'
        }), userCssClasses.starIcon),
        fullStarIcon: cx(suit({
            descendantName: 'starIcon',
            modifierName: 'full'
        }), userCssClasses.fullStarIcon),
        emptyStarIcon: cx(suit({
            descendantName: 'starIcon',
            modifierName: 'empty'
        }), userCssClasses.emptyStarIcon),
        label: cx(suit({
            descendantName: 'label'
        }), userCssClasses.label),
        count: cx(suit({
            descendantName: 'count'
        }), userCssClasses.count)
    };
    var specializedRenderer = renderer({
        containerNode: containerNode,
        cssClasses: cssClasses,
        renderState: {},
        templates: templates
    });
    var makeWidget = connectRatingMenu(specializedRenderer, function() {
        return render(null, containerNode);
    });
    return _(_$1({}, makeWidget({
        attribute: attribute,
        max: max
    })), {
        $$widgetType: 'ais.ratingMenu'
    });
};

export { ratingMenu as default };
