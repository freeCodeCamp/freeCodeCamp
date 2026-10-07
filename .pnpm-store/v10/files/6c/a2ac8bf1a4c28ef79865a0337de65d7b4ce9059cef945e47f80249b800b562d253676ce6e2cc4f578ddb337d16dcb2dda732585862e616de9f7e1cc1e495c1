import { _ as _$2 } from '@swc/helpers/esm/_object_spread.js';
import { _ as _$1 } from '@swc/helpers/esm/_object_spread_props.js';
import { _ } from '@swc/helpers/esm/_object_without_properties.js';
import { cx } from 'instantsearch-ui-components';
import { h } from 'preact';
import Template from '../Template/Template.js';

var Stats = function Stats(_0) {
    var nbHits = _0.nbHits, nbSortedHits = _0.nbSortedHits, cssClasses = _0.cssClasses, templateProps = _0.templateProps, rest = _(_0, [
        "nbHits",
        "nbSortedHits",
        "cssClasses",
        "templateProps"
    ]);
    return /*#__PURE__*/ h("div", {
        className: cx(cssClasses.root)
    }, /*#__PURE__*/ h(Template, _$1(_$2({}, templateProps), {
        templateKey: "text",
        rootTagName: "span",
        rootProps: {
            className: cssClasses.text
        },
        data: _$2({
            hasManySortedResults: nbSortedHits && nbSortedHits > 1,
            hasNoSortedResults: nbSortedHits === 0,
            hasOneSortedResults: nbSortedHits === 1,
            hasManyResults: nbHits > 1,
            hasNoResults: nbHits === 0,
            hasOneResult: nbHits === 1,
            nbHits: nbHits,
            nbSortedHits: nbSortedHits,
            cssClasses: cssClasses
        }, rest)
    })));
};

export { Stats as default };
