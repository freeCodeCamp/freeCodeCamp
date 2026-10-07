import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_spread_props.js';
import { cx } from 'instantsearch-ui-components';
import { h } from 'preact';
import Template from '../Template/Template.js';

var ClearRefinements = function ClearRefinements(param) {
    var hasRefinements = param.hasRefinements, refine = param.refine, cssClasses = param.cssClasses, templateProps = param.templateProps;
    return /*#__PURE__*/ h("div", {
        className: cssClasses.root
    }, /*#__PURE__*/ h(Template, _(_$1({}, templateProps), {
        templateKey: "resetLabel",
        rootTagName: "button",
        rootProps: {
            className: cx(cssClasses.button, !hasRefinements && cssClasses.disabledButton),
            onClick: refine,
            disabled: !hasRefinements
        },
        data: {
            hasRefinements: hasRefinements
        }
    })));
};

export { ClearRefinements as default };
