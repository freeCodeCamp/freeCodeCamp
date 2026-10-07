import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_spread_props.js';
import { cx } from 'instantsearch-ui-components';
import { render, h } from 'preact';
import PoweredBy from '../../components/PoweredBy/PoweredBy.js';
import connectPoweredBy from '../../connectors/powered-by/connectPoweredBy.js';
import { component } from '../../lib/suit.js';
import { createDocumentationMessageGenerator } from '../../lib/utils/documentation.js';
import { getContainerNode } from '../../lib/utils/getContainerNode.js';

var suit = component('PoweredBy');
var withUsage = createDocumentationMessageGenerator({
    name: 'powered-by'
});
var renderer = function renderer(param) {
    var containerNode = param.containerNode, cssClasses = param.cssClasses;
    return function(param, isFirstRendering) {
        var url = param.url, widgetParams = param.widgetParams;
        if (isFirstRendering) {
            var _widgetParams_theme = widgetParams.theme, theme = _widgetParams_theme === void 0 ? 'light' : _widgetParams_theme;
            render(/*#__PURE__*/ h(PoweredBy, {
                cssClasses: cssClasses,
                url: url,
                theme: theme
            }), containerNode);
            return;
        }
    };
};
var poweredBy = function poweredBy(widgetParams) {
    var _ref = widgetParams || {}, container = _ref.container, tmp = _ref.cssClasses, userCssClasses = tmp === void 0 ? {} : tmp, _ref_theme = _ref.theme, theme = _ref_theme === void 0 ? 'light' : _ref_theme;
    if (!container) {
        throw new Error(withUsage('The `container` option is required.'));
    }
    var containerNode = getContainerNode(container);
    var cssClasses = {
        root: cx(suit(), suit({
            modifierName: theme === 'dark' ? 'dark' : 'light'
        }), userCssClasses.root),
        link: cx(suit({
            descendantName: 'link'
        }), userCssClasses.link),
        logo: cx(suit({
            descendantName: 'logo'
        }), userCssClasses.logo)
    };
    var specializedRenderer = renderer({
        containerNode: containerNode,
        cssClasses: cssClasses
    });
    var makeWidget = connectPoweredBy(specializedRenderer, function() {
        return render(null, containerNode);
    });
    return _(_$1({}, makeWidget({
        theme: theme
    })), {
        $$widgetType: 'ais.poweredBy'
    });
};

export { poweredBy as default };
