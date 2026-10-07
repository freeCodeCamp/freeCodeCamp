import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_spread_props.js';
import { cx } from 'instantsearch-ui-components';
import { render, h } from 'preact';
import MenuSelect from '../../components/MenuSelect/MenuSelect.js';
import connectMenu from '../../connectors/menu/connectMenu.js';
import { component } from '../../lib/suit.js';
import defaultTemplates from './defaultTemplates.js';
import { createDocumentationMessageGenerator } from '../../lib/utils/documentation.js';
import { getContainerNode } from '../../lib/utils/getContainerNode.js';
import { prepareTemplateProps } from '../../lib/templating/prepareTemplateProps.js';

var withUsage = createDocumentationMessageGenerator({
    name: 'menu-select'
});
var suit = component('MenuSelect');
var renderer = function renderer(param) {
    var containerNode = param.containerNode, cssClasses = param.cssClasses, renderState = param.renderState, templates = param.templates;
    return function(param, isFirstRendering) {
        var refine = param.refine, items = param.items, instantSearchInstance = param.instantSearchInstance;
        if (isFirstRendering) {
            renderState.templateProps = prepareTemplateProps({
                defaultTemplates: defaultTemplates,
                templatesConfig: instantSearchInstance.templatesConfig,
                templates: templates
            });
            return;
        }
        render(/*#__PURE__*/ h(MenuSelect, {
            cssClasses: cssClasses,
            items: items,
            refine: refine,
            templateProps: renderState.templateProps
        }), containerNode);
    };
};
var menuSelect = function menuSelect(widgetParams) {
    var _ref = widgetParams || {}, container = _ref.container, attribute = _ref.attribute, _ref_sortBy = _ref.sortBy, sortBy = _ref_sortBy === void 0 ? [
        'name:asc'
    ] : _ref_sortBy, _ref_limit = _ref.limit, limit = _ref_limit === void 0 ? 10 : _ref_limit, tmp = _ref.cssClasses, userCssClasses = tmp === void 0 ? {} : tmp, _ref_templates = _ref.templates, templates = _ref_templates === void 0 ? {} : _ref_templates, transformItems = _ref.transformItems;
    if (!container) {
        throw new Error(withUsage('The `container` option is required.'));
    }
    var containerNode = getContainerNode(container);
    var cssClasses = {
        root: cx(suit(), userCssClasses.root),
        noRefinementRoot: cx(suit({
            modifierName: 'noRefinement'
        }), userCssClasses.noRefinementRoot),
        select: cx(suit({
            descendantName: 'select'
        }), userCssClasses.select),
        option: cx(suit({
            descendantName: 'option'
        }), userCssClasses.option)
    };
    var specializedRenderer = renderer({
        containerNode: containerNode,
        cssClasses: cssClasses,
        renderState: {},
        templates: templates
    });
    var makeWidget = connectMenu(specializedRenderer, function() {
        return render(null, containerNode);
    });
    return _(_$1({}, makeWidget({
        attribute: attribute,
        limit: limit,
        sortBy: sortBy,
        transformItems: transformItems
    })), {
        $$widgetType: 'ais.menuSelect'
    });
};

export { menuSelect as default };
