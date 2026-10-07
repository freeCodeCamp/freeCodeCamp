import { component } from '../lib/suit.js';
import { getPropertyByPath } from '../lib/utils/getPropertyByPath.js';
import { TAG_REPLACEMENT } from '../lib/utils/escape-highlight.js';

var suit = component('Highlight');
/**
 * @deprecated use html tagged templates and the Highlight component instead
 */ function highlight(param) {
    var attribute = param.attribute, _param_highlightedTagName = param.highlightedTagName, highlightedTagName = _param_highlightedTagName === void 0 ? 'mark' : _param_highlightedTagName, hit = param.hit, _param_cssClasses = param.cssClasses, cssClasses = _param_cssClasses === void 0 ? {} : _param_cssClasses;
    var highlightAttributeResult = getPropertyByPath(hit._highlightResult, attribute);
    var _ref = highlightAttributeResult || {}, tmp = _ref.value, attributeValue = tmp === void 0 ? '' : tmp;
    // cx is not used, since it would be bundled as a dependency for Vue
    var className = suit({
        descendantName: 'highlighted'
    }) + (cssClasses.highlighted ? " ".concat(cssClasses.highlighted) : '');
    return attributeValue.replace(new RegExp(TAG_REPLACEMENT.highlightPreTag, 'g'), "<".concat(highlightedTagName, ' class="').concat(className, '">')).replace(new RegExp(TAG_REPLACEMENT.highlightPostTag, 'g'), "</".concat(highlightedTagName, ">"));
}

export { highlight as default };
