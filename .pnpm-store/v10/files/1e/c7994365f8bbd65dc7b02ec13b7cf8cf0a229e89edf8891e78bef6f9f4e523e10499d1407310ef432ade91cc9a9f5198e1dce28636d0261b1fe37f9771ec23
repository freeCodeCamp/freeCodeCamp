import { component } from './index26.js';
import '@swc/helpers/esm/_sliced_to_array.js';
import '@swc/helpers/esm/_to_consumable_array.js';
import { concatHighlightedParts } from './index29.js';
import '@swc/helpers/esm/_object_spread.js';
import '@swc/helpers/esm/_type_of.js';
import './index11.js';
import { TAG_REPLACEMENT } from './index27.js';
import '@swc/helpers/esm/_instanceof.js';
import { getHighlightedParts } from './index30.js';
import { getPropertyByPath } from './index28.js';
import '@swc/helpers/esm/_object_spread_props.js';
import '@swc/helpers/esm/_define_property.js';
import '@swc/helpers/esm/_object_without_properties.js';
import { reverseHighlightedParts } from './index31.js';

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
