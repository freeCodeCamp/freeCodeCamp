'use strict';

var isClickableInput = require('../click/isClickableInput.js');
var isEditable = require('../edit/isEditable.js');

/**
 * Determine if the element has its own selection implementation
 * and does not interact with the Document Selection API.
 */ function hasOwnSelection(node) {
    return isElement(node) && isEditable.isEditableInputOrTextArea(node);
}
function hasNoSelection(node) {
    return isElement(node) && isClickableInput.isClickableInput(node);
}
function isElement(node) {
    return node.nodeType === 1;
}

exports.hasNoSelection = hasNoSelection;
exports.hasOwnSelection = hasOwnSelection;
