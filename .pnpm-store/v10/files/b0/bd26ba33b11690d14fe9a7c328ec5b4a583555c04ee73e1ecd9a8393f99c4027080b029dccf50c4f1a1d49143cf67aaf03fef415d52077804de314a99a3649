import { h } from 'preact';
import Template from '../Template/Template.js';

var QueryRuleCustomData = function QueryRuleCustomData(param) {
    var cssClasses = param.cssClasses, templates = param.templates, items = param.items;
    return /*#__PURE__*/ h(Template, {
        templateKey: "default",
        templates: templates,
        rootProps: {
            className: cssClasses.root
        },
        data: {
            items: items
        }
    });
};

export { QueryRuleCustomData as default };
