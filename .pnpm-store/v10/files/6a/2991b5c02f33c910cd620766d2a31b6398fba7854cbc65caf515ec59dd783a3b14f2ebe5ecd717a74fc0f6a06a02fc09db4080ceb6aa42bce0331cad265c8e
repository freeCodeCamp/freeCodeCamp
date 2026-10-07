'use strict';

var getTargetTypeAndSelection = require('./getTargetTypeAndSelection.js');

/**
 * Get the range that would be overwritten by input.
 */ function getInputRange(focusNode) {
    const typeAndSelection = getTargetTypeAndSelection.getTargetTypeAndSelection(focusNode);
    if (typeAndSelection.type === 'input') {
        return typeAndSelection.selection;
    } else if (typeAndSelection.type === 'contenteditable') {
        var _typeAndSelection_selection;
        // Multi-range on contenteditable edits the first selection instead of the last
        return (_typeAndSelection_selection = typeAndSelection.selection) === null || _typeAndSelection_selection === void 0 ? void 0 : _typeAndSelection_selection.getRangeAt(0);
    }
}

exports.getInputRange = getInputRange;
