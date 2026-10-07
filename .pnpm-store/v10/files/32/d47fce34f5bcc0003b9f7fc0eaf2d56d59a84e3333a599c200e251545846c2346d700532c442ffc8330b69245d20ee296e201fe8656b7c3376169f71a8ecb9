import { setUISelection } from '../../document/UI.js';
import '../../utils/dataTransfer/Clipboard.js';
import { getTargetTypeAndSelection } from './getTargetTypeAndSelection.js';

/**
 * Set the selection
 */ function setSelection({ focusNode, focusOffset, anchorNode = focusNode, anchorOffset = focusOffset }) {
    var _anchorNode_ownerDocument_getSelection, _anchorNode_ownerDocument;
    const typeAndSelection = getTargetTypeAndSelection(focusNode);
    if (typeAndSelection.type === 'input') {
        return setUISelection(focusNode, {
            anchorOffset,
            focusOffset
        });
    }
    (_anchorNode_ownerDocument = anchorNode.ownerDocument) === null || _anchorNode_ownerDocument === void 0 ? void 0 : (_anchorNode_ownerDocument_getSelection = _anchorNode_ownerDocument.getSelection()) === null || _anchorNode_ownerDocument_getSelection === void 0 ? void 0 : _anchorNode_ownerDocument_getSelection.setBaseAndExtent(anchorNode, anchorOffset, focusNode, focusOffset);
}

export { setSelection };
