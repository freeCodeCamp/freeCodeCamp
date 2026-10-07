import '../utils/dataTransfer/Clipboard.js';
import { getActiveElement } from '../utils/focus/getActiveElement.js';
import { isFocusable } from '../utils/focus/isFocusable.js';
import { findClosest } from '../utils/misc/findClosest.js';
import { updateSelectionOnFocus } from './selection/updateSelectionOnFocus.js';
import { wrapEvent } from './wrapEvent.js';

// Browsers do not dispatch FocusEvent if the document does not have focus.
// TODO: simulate FocusEvent in browsers
/**
 * Focus closest focusable element.
 */ function focusElement(element) {
    const target = findClosest(element, isFocusable);
    const activeElement = getActiveElement(element.ownerDocument);
    if ((target !== null && target !== void 0 ? target : element.ownerDocument.body) === activeElement) {
        return;
    } else if (target) {
        wrapEvent(()=>target.focus());
    } else {
        wrapEvent(()=>activeElement === null || activeElement === void 0 ? void 0 : activeElement.blur());
    }
    updateSelectionOnFocus(target !== null && target !== void 0 ? target : element.ownerDocument.body);
}
function blurElement(element) {
    if (!isFocusable(element)) return;
    const wasActive = getActiveElement(element.ownerDocument) === element;
    if (!wasActive) return;
    wrapEvent(()=>element.blur());
}

export { blurElement, focusElement };
