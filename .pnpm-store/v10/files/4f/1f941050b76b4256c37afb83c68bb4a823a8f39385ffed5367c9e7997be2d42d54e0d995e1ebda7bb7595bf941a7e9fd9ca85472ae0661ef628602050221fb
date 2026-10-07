import { h } from 'preact';
import Template from '../Template/Template.js';

var RelevantSort = function RelevantSort(param) {
    var cssClasses = param.cssClasses, templates = param.templates, isRelevantSorted = param.isRelevantSorted, isVirtualReplica = param.isVirtualReplica, refine = param.refine;
    return isVirtualReplica ? /*#__PURE__*/ h("div", {
        className: cssClasses.root
    }, /*#__PURE__*/ h(Template, {
        templateKey: "text",
        templates: templates,
        rootProps: {
            className: cssClasses.text
        },
        data: {
            isRelevantSorted: isRelevantSorted
        }
    }), /*#__PURE__*/ h("button", {
        type: "button",
        className: cssClasses.button,
        onClick: function onClick() {
            if (isRelevantSorted) {
                refine(0);
            } else {
                refine(undefined);
            }
        }
    }, /*#__PURE__*/ h(Template, {
        rootTagName: "span",
        templateKey: "button",
        templates: templates,
        data: {
            isRelevantSorted: isRelevantSorted
        }
    }))) : null;
};

export { RelevantSort as default };
