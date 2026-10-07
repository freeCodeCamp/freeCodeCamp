import { _ as _$2 } from '@swc/helpers/esm/_object_spread.js';
import { _ as _$1 } from '@swc/helpers/esm/_object_spread_props.js';
import { _ } from '@swc/helpers/esm/_object_without_properties.js';
import { h } from 'preact';
import { Highlight as Highlight$1 } from '../../components/Highlight/Highlight.js';
import { getPropertyByPath } from '../../lib/utils/getPropertyByPath.js';
import { getHighlightedParts } from '../../lib/utils/getHighlightedParts.js';
import { unescape } from '../../lib/utils/escape-html.js';
import { toArray } from '../../lib/utils/toArray.js';

function Highlight(_0) {
    var hit = _0.hit, attribute = _0.attribute, cssClasses = _0.cssClasses, props = _(_0, [
        "hit",
        "attribute",
        "cssClasses"
    ]);
    var property = getPropertyByPath(hit._highlightResult, attribute) || [];
    var properties = toArray(property);
    var parts = properties.map(function(param) {
        var value = param.value;
        return getHighlightedParts(unescape(value || ''));
    });
    return /*#__PURE__*/ h(Highlight$1, _$1(_$2({}, props), {
        parts: parts,
        classNames: cssClasses
    }));
}

export { Highlight };
