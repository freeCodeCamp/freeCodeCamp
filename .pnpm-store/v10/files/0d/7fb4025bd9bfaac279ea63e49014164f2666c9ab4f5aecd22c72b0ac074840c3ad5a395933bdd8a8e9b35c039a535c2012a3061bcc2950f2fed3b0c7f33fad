'use strict';

var UI = require('../../document/UI.js');
require('../../utils/dataTransfer/Clipboard.js');
var getTargetTypeAndSelection = require('./getTargetTypeAndSelection.js');

/**
 * Set the selection
 */ function setSelection({ focusNode, focusOffset, anchorNode = focusNode, anchorOffset = focusOffset }) {
    var _anchorNode_ownerDocument_getSelection, _anchorNode_ownerDocument;
    const typeAndSelection = getTargetTypeAndSelection.getTargetTypeAndSelection(focusNode);
    if (typeAndSelection.type === 'input') {
        return UI.setUISelection(focusNode, {
            anchorOffset,
            focusOffset
        });
    }
    (_anchorNode_ownerDocument = anchorNode.ownerDocument) === null || _anchorNode_ownerDocument === void 0 ? void 0 : (_anchorNode_ownerDocument_getSelection = _anchorNode_ownerDocument.getSelection()) === null || _anchorNode_ownerDocument_getSelection === void 0 ? void 0 : _anchorNode_ownerDocument_getSelection.setBaseAndExtent(anchorNode, anchorOffset, focusNode, focusOffset);
}

exports.setSelection = setSelection;
