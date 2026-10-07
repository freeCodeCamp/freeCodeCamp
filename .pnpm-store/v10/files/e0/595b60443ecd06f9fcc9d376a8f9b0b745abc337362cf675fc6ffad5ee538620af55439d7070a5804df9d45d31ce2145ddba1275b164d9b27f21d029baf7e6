'use strict';

var isDisabled = require('../misc/isDisabled.js');
var isElementType = require('../misc/isElementType.js');

function getActiveElement(document) {
    const activeElement = document.activeElement;
    if (activeElement === null || activeElement === void 0 ? void 0 : activeElement.shadowRoot) {
        const activeElementInShadowTree = getActiveElement(activeElement.shadowRoot);
        if (activeElementInShadowTree) {
            return activeElementInShadowTree;
        }
    } else if (activeElement && isElementType.isElementType(activeElement, 'iframe')) {
        const contentDocument = activeElement.contentDocument;
        if (contentDocument) {
            return getActiveElement(contentDocument);
        }
    }
    // Browser does not yield disabled elements as document.activeElement - jsdom does
    if (isDisabled.isDisabled(activeElement)) {
        return document.ownerDocument ? /* istanbul ignore next */ document.ownerDocument.body : document.body;
    }
    return activeElement;
}
function getActiveElementOrBody(document) {
    var _getActiveElement;
    return (_getActiveElement = getActiveElement(document)) !== null && _getActiveElement !== void 0 ? _getActiveElement : /* istanbul ignore next */ document.body;
}

exports.getActiveElement = getActiveElement;
exports.getActiveElementOrBody = getActiveElementOrBody;
