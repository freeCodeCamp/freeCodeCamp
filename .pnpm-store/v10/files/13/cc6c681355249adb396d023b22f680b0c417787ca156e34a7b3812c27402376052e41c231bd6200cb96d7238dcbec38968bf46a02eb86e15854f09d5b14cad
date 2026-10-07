import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_spread_props.js';
import { h } from 'preact';
import Template from '../Template/Template.js';

var ToggleRefinement = function ToggleRefinement(param) {
    var currentRefinement = param.currentRefinement, refine = param.refine, cssClasses = param.cssClasses, templateProps = param.templateProps;
    return /*#__PURE__*/ h("div", {
        className: cssClasses.root
    }, /*#__PURE__*/ h("label", {
        className: cssClasses.label
    }, /*#__PURE__*/ h("input", {
        className: cssClasses.checkbox,
        type: "checkbox",
        checked: currentRefinement.isRefined,
        onChange: function onChange(event) {
            return refine({
                isRefined: !event.target.checked
            });
        }
    }), /*#__PURE__*/ h(Template, _(_$1({}, templateProps), {
        rootTagName: "span",
        rootProps: {
            className: cssClasses.labelText
        },
        templateKey: "labelText",
        data: currentRefinement
    }))));
};

export { ToggleRefinement as default };
