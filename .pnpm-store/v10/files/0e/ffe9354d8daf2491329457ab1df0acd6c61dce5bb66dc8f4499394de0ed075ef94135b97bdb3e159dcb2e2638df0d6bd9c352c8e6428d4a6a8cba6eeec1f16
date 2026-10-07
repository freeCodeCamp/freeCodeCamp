import { setUIValue, clearInitialValue, getUIValue } from '../document/UI.js';
import { isElementType } from '../utils/misc/isElementType.js';
import '../utils/dataTransfer/Clipboard.js';
import { isValidDateOrTimeValue, buildTimeValue } from '../utils/edit/timeValue.js';
import { supportsMaxLength, getMaxLength } from '../utils/edit/maxLength.js';
import { getNextCursorPosition } from '../utils/focus/cursor.js';
import { commitValueAfterInput } from '../document/trackValue.js';
import { getInputRange } from './selection/getInputRange.js';
import { setSelection } from './selection/setSelection.js';

function isDateOrTime(element) {
    return isElementType(element, 'input') && [
        'date',
        'time'
    ].includes(element.type);
}
function input(instance, element, data, inputType = 'insertText') {
    const inputRange = getInputRange(element);
    /* istanbul ignore if */ if (!inputRange) {
        return;
    }
    // There is no `beforeinput` event on `date` and `time` input
    if (!isDateOrTime(element)) {
        const unprevented = instance.dispatchUIEvent(element, 'beforeinput', {
            inputType,
            data
        });
        if (!unprevented) {
            return;
        }
    }
    if ('startContainer' in inputRange) {
        editContenteditable(instance, element, inputRange, data, inputType);
    } else {
        editInputElement(instance, element, inputRange, data, inputType);
    }
}
function editContenteditable(instance, element, inputRange, data, inputType) {
    let del = false;
    if (!inputRange.collapsed) {
        del = true;
        inputRange.deleteContents();
    } else if ([
        'deleteContentBackward',
        'deleteContentForward'
    ].includes(inputType)) {
        const nextPosition = getNextCursorPosition(inputRange.startContainer, inputRange.startOffset, inputType === 'deleteContentBackward' ? -1 : 1, inputType);
        if (nextPosition) {
            del = true;
            const delRange = inputRange.cloneRange();
            if (delRange.comparePoint(nextPosition.node, nextPosition.offset) < 0) {
                delRange.setStart(nextPosition.node, nextPosition.offset);
            } else {
                delRange.setEnd(nextPosition.node, nextPosition.offset);
            }
            delRange.deleteContents();
        }
    }
    if (data) {
        if (inputRange.endContainer.nodeType === 3) {
            const offset = inputRange.endOffset;
            inputRange.endContainer.insertData(offset, data);
            inputRange.setStart(inputRange.endContainer, offset + data.length);
            inputRange.setEnd(inputRange.endContainer, offset + data.length);
        } else {
            const text = element.ownerDocument.createTextNode(data);
            inputRange.insertNode(text);
            inputRange.setStart(text, data.length);
            inputRange.setEnd(text, data.length);
        }
    }
    if (del || data) {
        instance.dispatchUIEvent(element, 'input', {
            inputType
        });
    }
}
function editInputElement(instance, element, inputRange, data, inputType) {
    let dataToInsert = data;
    if (supportsMaxLength(element)) {
        const maxLength = getMaxLength(element);
        if (maxLength !== undefined && data.length > 0) {
            const selectionLength = inputRange.endOffset - inputRange.startOffset;
            const spaceUntilMaxLength = maxLength - element.value.length + selectionLength;
            if (spaceUntilMaxLength > 0) {
                dataToInsert = data.substring(0, spaceUntilMaxLength);
            } else {
                return;
            }
        }
    }
    const { newValue, newOffset, oldValue } = calculateNewValue(dataToInsert, element, inputRange, inputType);
    if (newValue === oldValue && newOffset === inputRange.startOffset && newOffset === inputRange.endOffset) {
        return;
    }
    if (isElementType(element, 'input', {
        type: 'number'
    }) && !isValidNumberInput(newValue)) {
        return;
    }
    setUIValue(element, newValue);
    setSelection({
        focusNode: element,
        anchorOffset: newOffset,
        focusOffset: newOffset
    });
    if (isDateOrTime(element)) {
        if (isValidDateOrTimeValue(element, newValue)) {
            commitInput(instance, element, newOffset, {});
            instance.dispatchUIEvent(element, 'change');
            clearInitialValue(element);
        }
    } else {
        commitInput(instance, element, newOffset, {
            data,
            inputType
        });
    }
}
function calculateNewValue(inputData, node, { startOffset, endOffset }, inputType) {
    const value = getUIValue(node);
    const prologEnd = Math.max(0, startOffset === endOffset && inputType === 'deleteContentBackward' ? startOffset - 1 : startOffset);
    const prolog = value.substring(0, prologEnd);
    const epilogStart = Math.min(value.length, startOffset === endOffset && inputType === 'deleteContentForward' ? startOffset + 1 : endOffset);
    const epilog = value.substring(epilogStart, value.length);
    let newValue = `${prolog}${inputData}${epilog}`;
    let newOffset = prologEnd + inputData.length;
    if (isElementType(node, 'input', {
        type: 'time'
    })) {
        const builtValue = buildTimeValue(newValue);
        if (builtValue !== '' && isValidDateOrTimeValue(node, builtValue)) {
            newValue = builtValue;
            newOffset = builtValue.length;
        }
    }
    return {
        oldValue: value,
        newValue,
        newOffset
    };
}
function commitInput(instance, element, newOffset, inputInit) {
    instance.dispatchUIEvent(element, 'input', inputInit);
    commitValueAfterInput(element, newOffset);
}
function isValidNumberInput(value) {
    var _value_match, _value_match1;
    // the browser allows some invalid input but not others
    // it allows up to two '-' at any place before any 'e' or one directly following 'e'
    // it allows one '.' at any place before e
    const valueParts = value.split('e', 2);
    return !(/[^\d.\-e]/.test(value) || Number((_value_match = value.match(/-/g)) === null || _value_match === void 0 ? void 0 : _value_match.length) > 2 || Number((_value_match1 = value.match(/\./g)) === null || _value_match1 === void 0 ? void 0 : _value_match1.length) > 1 || valueParts[1] && !/^-?\d*$/.test(valueParts[1]));
}

export { input };
