import { getUISelection, getUIValue } from '../../document/UI.js';
import '../../utils/dataTransfer/Clipboard.js';
import { getContentEditable } from '../../utils/edit/isContentEditable.js';
import { hasOwnSelection } from '../../utils/focus/selection.js';
import { setSelection } from './setSelection.js';

/**
 * Expand a selection like the browser does when pressing Ctrl+A.
 */ function selectAll(target) {
    var _getContentEditable;
    if (hasOwnSelection(target)) {
        return setSelection({
            focusNode: target,
            anchorOffset: 0,
            focusOffset: getUIValue(target).length
        });
    }
    const focusNode = (_getContentEditable = getContentEditable(target)) !== null && _getContentEditable !== void 0 ? _getContentEditable : target.ownerDocument.body;
    setSelection({
        focusNode,
        anchorOffset: 0,
        focusOffset: focusNode.childNodes.length
    });
}
function isAllSelected(target) {
    var _getContentEditable;
    if (hasOwnSelection(target)) {
        return getUISelection(target).startOffset === 0 && getUISelection(target).endOffset === getUIValue(target).length;
    }
    const focusNode = (_getContentEditable = getContentEditable(target)) !== null && _getContentEditable !== void 0 ? _getContentEditable : target.ownerDocument.body;
    const selection = target.ownerDocument.getSelection();
    return (selection === null || selection === void 0 ? void 0 : selection.anchorNode) === focusNode && selection.focusNode === focusNode && selection.anchorOffset === 0 && selection.focusOffset === focusNode.childNodes.length;
}

export { isAllSelected, selectAll };
