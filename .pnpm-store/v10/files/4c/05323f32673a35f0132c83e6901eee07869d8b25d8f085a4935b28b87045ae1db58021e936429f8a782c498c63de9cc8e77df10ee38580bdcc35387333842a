import { getUISelection } from '../../document/UI.js';
import '../../utils/dataTransfer/Clipboard.js';
import { getContentEditable } from '../../utils/edit/isContentEditable.js';
import { hasOwnSelection } from '../../utils/focus/selection.js';

/**
 * Determine which selection logic and selection ranges to consider.
 */ function getTargetTypeAndSelection(node) {
    const element = getElement(node);
    if (element && hasOwnSelection(element)) {
        return {
            type: 'input',
            selection: getUISelection(element)
        };
    }
    const selection = element === null || element === void 0 ? void 0 : element.ownerDocument.getSelection();
    // It is possible to extend a single-range selection into a contenteditable.
    // This results in the range acting like a range outside of contenteditable.
    const isCE = getContentEditable(node) && (selection === null || selection === void 0 ? void 0 : selection.anchorNode) && getContentEditable(selection.anchorNode);
    return {
        type: isCE ? 'contenteditable' : 'default',
        selection
    };
}
function getElement(node) {
    return node.nodeType === 1 ? node : node.parentElement;
}

export { getTargetTypeAndSelection };
