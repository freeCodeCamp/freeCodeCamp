'use strict';

require('../utils/dataTransfer/Clipboard.js');
var getActiveElement = require('../utils/focus/getActiveElement.js');
var isFocusable = require('../utils/focus/isFocusable.js');
var findClosest = require('../utils/misc/findClosest.js');
var updateSelectionOnFocus = require('./selection/updateSelectionOnFocus.js');
var wrapEvent = require('./wrapEvent.js');

// Browsers do not dispatch FocusEvent if the document does not have focus.
// TODO: simulate FocusEvent in browsers
/**
 * Focus closest focusable element.
 */ function focusElement(element) {
    const target = findClosest.findClosest(element, isFocusable.isFocusable);
    const activeElement = getActiveElement.getActiveElement(element.ownerDocument);
    if ((target !== null && target !== void 0 ? target : element.ownerDocument.body) === activeElement) {
        return;
    } else if (target) {
        wrapEvent.wrapEvent(()=>target.focus());
    } else {
        wrapEvent.wrapEvent(()=>activeElement === null || activeElement === void 0 ? void 0 : activeElement.blur());
    }
    updateSelectionOnFocus.updateSelectionOnFocus(target !== null && target !== void 0 ? target : element.ownerDocument.body);
}
function blurElement(element) {
    if (!isFocusable.isFocusable(element)) return;
    const wasActive = getActiveElement.getActiveElement(element.ownerDocument) === element;
    if (!wasActive) return;
    wrapEvent.wrapEvent(()=>element.blur());
}

exports.blurElement = blurElement;
exports.focusElement = focusElement;
