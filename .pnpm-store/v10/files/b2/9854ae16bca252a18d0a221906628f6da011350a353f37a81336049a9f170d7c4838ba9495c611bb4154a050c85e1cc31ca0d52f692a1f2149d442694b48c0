import { isClickableInput } from '../click/isClickableInput.js';
import { isEditableInputOrTextArea } from '../edit/isEditable.js';

/**
 * Determine if the element has its own selection implementation
 * and does not interact with the Document Selection API.
 */ function hasOwnSelection(node) {
    return isElement(node) && isEditableInputOrTextArea(node);
}
function hasNoSelection(node) {
    return isElement(node) && isClickableInput(node);
}
function isElement(node) {
    return node.nodeType === 1;
}

export { hasNoSelection, hasOwnSelection };
