import { component } from '../lib/suit.js';
import { getPropertyByPath } from '../lib/utils/getPropertyByPath.js';
import { concatHighlightedParts } from '../lib/utils/concatHighlightedParts.js';
import { reverseHighlightedParts } from '../lib/utils/reverseHighlightedParts.js';
import { getHighlightedParts } from '../lib/utils/getHighlightedParts.js';
import { TAG_REPLACEMENT } from '../lib/utils/escape-highlight.js';

var suit = component('ReverseSnippet');
/**
 * @deprecated use html tagged templates and the ReverseSnippet component instead
 */ function reverseSnippet(param) {
    var attribute = param.attribute, _param_highlightedTagName = param.highlightedTagName, highlightedTagName = _param_highlightedTagName === void 0 ? 'mark' : _param_highlightedTagName, hit = param.hit, _param_cssClasses = param.cssClasses, cssClasses = _param_cssClasses === void 0 ? {} : _param_cssClasses;
    var snippetAttributeResult = getPropertyByPath(hit._snippetResult, attribute);
    var _ref = snippetAttributeResult || {}, tmp = _ref.value, attributeValue = tmp === void 0 ? '' : tmp;
    // cx is not used, since it would be bundled as a dependency for Vue
    var className = suit({
        descendantName: 'highlighted'
    }) + (cssClasses.highlighted ? " ".concat(cssClasses.highlighted) : '');
    var reverseHighlightedValue = concatHighlightedParts(reverseHighlightedParts(getHighlightedParts(attributeValue)));
    return reverseHighlightedValue.replace(new RegExp(TAG_REPLACEMENT.highlightPreTag, 'g'), "<".concat(highlightedTagName, ' class="').concat(className, '">')).replace(new RegExp(TAG_REPLACEMENT.highlightPostTag, 'g'), "</".concat(highlightedTagName, ">"));
}

export { reverseSnippet as default };
