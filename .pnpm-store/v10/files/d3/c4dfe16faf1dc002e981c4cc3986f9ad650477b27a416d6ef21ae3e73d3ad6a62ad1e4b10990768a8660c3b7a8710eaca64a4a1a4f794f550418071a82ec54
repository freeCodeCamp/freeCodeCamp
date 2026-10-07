'use strict';

require('../event/behavior/click.js');
require('../event/behavior/cut.js');
require('../event/behavior/keydown.js');
require('../event/behavior/keypress.js');
require('../event/behavior/keyup.js');
require('../event/behavior/paste.js');
require('@testing-library/dom');
require('../utils/dataTransfer/Clipboard.js');
var isEditable = require('../utils/edit/isEditable.js');
var isDisabled = require('../utils/misc/isDisabled.js');
var focus = require('../event/focus.js');
var input = require('../event/input.js');
var selectAll = require('../event/selection/selectAll.js');

async function clear(element) {
    if (!isEditable.isEditable(element) || isDisabled.isDisabled(element)) {
        throw new Error('clear()` is only supported on editable elements.');
    }
    focus.focusElement(element);
    if (element.ownerDocument.activeElement !== element) {
        throw new Error('The element to be cleared could not be focused.');
    }
    selectAll.selectAll(element);
    if (!selectAll.isAllSelected(element)) {
        throw new Error('The element content to be cleared could not be selected.');
    }
    input.input(this, element, '', 'deleteContentBackward');
}

exports.clear = clear;
