import '../event/behavior/click.js';
import '../event/behavior/cut.js';
import '../event/behavior/keydown.js';
import '../event/behavior/keypress.js';
import '../event/behavior/keyup.js';
import '../event/behavior/paste.js';
import '@testing-library/dom';
import '../utils/dataTransfer/Clipboard.js';
import { isEditable } from '../utils/edit/isEditable.js';
import { isDisabled } from '../utils/misc/isDisabled.js';
import { focusElement } from '../event/focus.js';
import { input } from '../event/input.js';
import { selectAll, isAllSelected } from '../event/selection/selectAll.js';

async function clear(element) {
    if (!isEditable(element) || isDisabled(element)) {
        throw new Error('clear()` is only supported on editable elements.');
    }
    focusElement(element);
    if (element.ownerDocument.activeElement !== element) {
        throw new Error('The element to be cleared could not be focused.');
    }
    selectAll(element);
    if (!isAllSelected(element)) {
        throw new Error('The element content to be cleared could not be selected.');
    }
    input(this, element, '', 'deleteContentBackward');
}

export { clear };
