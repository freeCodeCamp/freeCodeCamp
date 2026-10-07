import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_spread_props.js';
import { h } from 'preact';
import Template from '../Template/Template.js';

function RefinementListItem(param) {
    var className = param.className, handleClick = param.handleClick, facetValueToRefine = param.facetValueToRefine, isRefined = param.isRefined, templateProps = param.templateProps, templateKey = param.templateKey, templateData = param.templateData, subItems = param.subItems;
    return /*#__PURE__*/ h("li", {
        className: className,
        onClick: function onClick(originalEvent) {
            handleClick({
                facetValueToRefine: facetValueToRefine,
                isRefined: isRefined,
                originalEvent: originalEvent
            });
        }
    }, /*#__PURE__*/ h(Template, _(_$1({}, templateProps), {
        templateKey: templateKey,
        data: templateData
    })), subItems);
}

export { RefinementListItem as default };
