'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, /**
 * @deprecated use html tagged templates and the ReverseHighlight component instead
 */ "default", {
    enumerable: true,
    get: function() {
        return reverseHighlight;
    }
});
var _suit = require("../lib/suit");
var _utils = require("../lib/utils");
var suit = (0, _suit.component)('ReverseHighlight');
function reverseHighlight(param) {
    var attribute = param.attribute, _param_highlightedTagName = param.highlightedTagName, highlightedTagName = _param_highlightedTagName === void 0 ? 'mark' : _param_highlightedTagName, hit = param.hit, _param_cssClasses = param.cssClasses, cssClasses = _param_cssClasses === void 0 ? {} : _param_cssClasses;
    (0, _utils.warning)(false, "`instantsearch.reverseHighlight` function has been deprecated. It is still supported in 4.x releases, but not further. It is replaced by the `ReverseHighlight` component.\n\nFor more information, visit https://www.algolia.com/doc/guides/building-search-ui/upgrade-guides/js/?client=html+tagged+templates#upgrade-templates");
    var highlightAttributeResult = (0, _utils.getPropertyByPath)(hit._highlightResult, attribute);
    // @MAJOR fallback to attribute value if highlight is not found
    (0, _utils.warning)(highlightAttributeResult, 'Could not enable reverse highlight for "'.concat(attribute, '", will display an empty string.\nPlease check whether this attribute exists and is either searchable or specified in `attributesToHighlight`.\n\nSee: https://alg.li/highlighting\n'));
    var _ref = highlightAttributeResult || {}, tmp = _ref.value, attributeValue = tmp === void 0 ? '' : tmp;
    // cx is not used, since it would be bundled as a dependency for Vue
    var className = suit({
        descendantName: 'highlighted'
    }) + (cssClasses.highlighted ? " ".concat(cssClasses.highlighted) : '');
    var reverseHighlightedValue = (0, _utils.concatHighlightedParts)((0, _utils.reverseHighlightedParts)((0, _utils.getHighlightedParts)(attributeValue)));
    return reverseHighlightedValue.replace(new RegExp(_utils.TAG_REPLACEMENT.highlightPreTag, 'g'), "<".concat(highlightedTagName, ' class="').concat(className, '">')).replace(new RegExp(_utils.TAG_REPLACEMENT.highlightPostTag, 'g'), "</".concat(highlightedTagName, ">"));
}
