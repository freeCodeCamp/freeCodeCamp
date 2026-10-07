import { h } from 'preact';

var defaultTemplates = {
    item: function item(param) {
        var cssClasses = param.cssClasses, attribute = param.attribute, label = param.label, isRefined = param.isRefined;
        return /*#__PURE__*/ h("label", {
            className: cssClasses.label
        }, /*#__PURE__*/ h("input", {
            type: "radio",
            className: cssClasses.radio,
            name: attribute,
            defaultChecked: isRefined
        }), /*#__PURE__*/ h("span", {
            className: cssClasses.labelText
        }, label));
    }
};

export { defaultTemplates as default };
