'use strict';

var UI = require('../../document/UI.js');
require('../../utils/dataTransfer/Clipboard.js');
var isContentEditable = require('../../utils/edit/isContentEditable.js');
var selection = require('../../utils/focus/selection.js');
var setSelection = require('./setSelection.js');

/**
 * Expand a selection like the browser does when pressing Ctrl+A.
 */ function selectAll(target) {
    var _getContentEditable;
    if (selection.hasOwnSelection(target)) {
        return setSelection.setSelection({
            focusNode: target,
            anchorOffset: 0,
            focusOffset: UI.getUIValue(target).length
        });
    }
    const focusNode = (_getContentEditable = isContentEditable.getContentEditable(target)) !== null && _getContentEditable !== void 0 ? _getContentEditable : target.ownerDocument.body;
    setSelection.setSelection({
        focusNode,
        anchorOffset: 0,
        focusOffset: focusNode.childNodes.length
    });
}
function isAllSelected(target) {
    var _getContentEditable;
    if (selection.hasOwnSelection(target)) {
        return UI.getUISelection(target).startOffset === 0 && UI.getUISelection(target).endOffset === UI.getUIValue(target).length;
    }
    const focusNode = (_getContentEditable = isContentEditable.getContentEditable(target)) !== null && _getContentEditable !== void 0 ? _getContentEditable : target.ownerDocument.body;
    const selection$1 = target.ownerDocument.getSelection();
    return (selection$1 === null || selection$1 === void 0 ? void 0 : selection$1.anchorNode) === focusNode && selection$1.focusNode === focusNode && selection$1.anchorOffset === 0 && selection$1.focusOffset === focusNode.childNodes.length;
}

exports.isAllSelected = isAllSelected;
exports.selectAll = selectAll;
