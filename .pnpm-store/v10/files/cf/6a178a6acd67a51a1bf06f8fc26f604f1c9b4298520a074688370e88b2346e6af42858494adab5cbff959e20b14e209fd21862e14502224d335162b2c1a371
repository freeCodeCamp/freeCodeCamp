'use strict';

var isElementType = require('../misc/isElementType.js');

var maxLengthSupportedTypes = /*#__PURE__*/ function(maxLengthSupportedTypes) {
    maxLengthSupportedTypes["email"] = "email";
    maxLengthSupportedTypes["password"] = "password";
    maxLengthSupportedTypes["search"] = "search";
    maxLengthSupportedTypes["telephone"] = "telephone";
    maxLengthSupportedTypes["text"] = "text";
    maxLengthSupportedTypes["url"] = "url";
    return maxLengthSupportedTypes;
}(maxLengthSupportedTypes || {});
// can't use .maxLength property because of a jsdom bug:
// https://github.com/jsdom/jsdom/issues/2927
function getMaxLength(element) {
    var _element_getAttribute;
    const attr = (_element_getAttribute = element.getAttribute('maxlength')) !== null && _element_getAttribute !== void 0 ? _element_getAttribute : '';
    return /^\d+$/.test(attr) && Number(attr) >= 0 ? Number(attr) : undefined;
}
function supportsMaxLength(element) {
    return isElementType.isElementType(element, 'textarea') || isElementType.isElementType(element, 'input') && element.type in maxLengthSupportedTypes;
}

exports.getMaxLength = getMaxLength;
exports.supportsMaxLength = supportsMaxLength;
