import '../../utils/dataTransfer/Clipboard.js';
import { isContentEditable } from '../../utils/edit/isContentEditable.js';
import { hasOwnSelection } from '../../utils/focus/selection.js';
import { setSelection } from './setSelection.js';

/**
 * Backward-compatible selection.
 *
 * Handles input elements and contenteditable if it only contains a single text node.
 */ function setSelectionRange(element, anchorOffset, focusOffset) {
    var _element_firstChild;
    if (hasOwnSelection(element)) {
        return setSelection({
            focusNode: element,
            anchorOffset,
            focusOffset
        });
    }
    /* istanbul ignore else */ if (isContentEditable(element) && ((_element_firstChild = element.firstChild) === null || _element_firstChild === void 0 ? void 0 : _element_firstChild.nodeType) === 3) {
        return setSelection({
            focusNode: element.firstChild,
            anchorOffset,
            focusOffset
        });
    }
    /* istanbul ignore next */ throw new Error('Not implemented. The result of this interaction is unreliable.');
}

export { setSelectionRange };
