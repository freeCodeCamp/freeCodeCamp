import { getUISelection } from '../../document/UI.js';
import '../../utils/dataTransfer/Clipboard.js';
import { getNextCursorPosition } from '../../utils/focus/cursor.js';
import { hasOwnSelection } from '../../utils/focus/selection.js';
import { setSelection } from './setSelection.js';

/**
 * Move the selection
 */ function moveSelection(node, direction) {
    // TODO: implement shift
    if (hasOwnSelection(node)) {
        const selection = getUISelection(node);
        setSelection({
            focusNode: node,
            focusOffset: selection.startOffset === selection.endOffset ? selection.focusOffset + direction : direction < 0 ? selection.startOffset : selection.endOffset
        });
    } else {
        const selection = node.ownerDocument.getSelection();
        if (!(selection === null || selection === void 0 ? void 0 : selection.focusNode)) {
            return;
        }
        if (selection.isCollapsed) {
            const nextPosition = getNextCursorPosition(selection.focusNode, selection.focusOffset, direction);
            if (nextPosition) {
                setSelection({
                    focusNode: nextPosition.node,
                    focusOffset: nextPosition.offset
                });
            }
        } else {
            selection[direction < 0 ? 'collapseToStart' : 'collapseToEnd']();
        }
    }
}

export { moveSelection };
