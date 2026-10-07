import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_spread_props.js';
import { cx } from 'instantsearch-ui-components';
import { h } from 'preact';
import Template from '../Template/Template.js';

var Answers = function Answers(param) {
    var hits = param.hits, isLoading = param.isLoading, cssClasses = param.cssClasses, templateProps = param.templateProps;
    return /*#__PURE__*/ h("div", {
        className: cx(cssClasses.root, hits.length === 0 && cssClasses.emptyRoot)
    }, /*#__PURE__*/ h(Template, _(_$1({}, templateProps), {
        templateKey: "header",
        rootProps: {
            className: cssClasses.header
        },
        data: {
            hits: hits,
            isLoading: isLoading
        }
    })), isLoading ? /*#__PURE__*/ h(Template, _(_$1({}, templateProps), {
        templateKey: "loader",
        rootProps: {
            className: cssClasses.loader
        }
    })) : /*#__PURE__*/ h("ul", {
        className: cssClasses.list
    }, hits.map(function(hit, index) {
        return /*#__PURE__*/ h(Template, _(_$1({}, templateProps), {
            templateKey: "item",
            rootTagName: "li",
            rootProps: {
                className: cssClasses.item
            },
            key: hit.objectID,
            data: _(_$1({}, hit), {
                get __hitIndex () {
                    return index;
                }
            })
        }));
    })));
};

export { Answers as default };
