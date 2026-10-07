'use strict';

var UI = require('../document/UI.js');
var isElementType = require('../utils/misc/isElementType.js');
require('../utils/dataTransfer/Clipboard.js');
var timeValue = require('../utils/edit/timeValue.js');
var maxLength = require('../utils/edit/maxLength.js');
var cursor = require('../utils/focus/cursor.js');
var trackValue = require('../document/trackValue.js');
var getInputRange = require('./selection/getInputRange.js');
var setSelection = require('./selection/setSelection.js');

function isDateOrTime(element) {
    return isElementType.isElementType(element, 'input') && [
        'date',
        'time'
    ].includes(element.type);
}
function input(instance, element, data, inputType = 'insertText') {
    const inputRange = getInputRange.getInputRange(element);
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
        const nextPosition = cursor.getNextCursorPosition(inputRange.startContainer, inputRange.startOffset, inputType === 'deleteContentBackward' ? -1 : 1, inputType);
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
    if (maxLength.supportsMaxLength(element)) {
        const maxLength$1 = maxLength.getMaxLength(element);
        if (maxLength$1 !== undefined && data.length > 0) {
            const selectionLength = inputRange.endOffset - inputRange.startOffset;
            const spaceUntilMaxLength = maxLength$1 - element.value.length + selectionLength;
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
    if (isElementType.isElementType(element, 'input', {
        type: 'number'
    }) && !isValidNumberInput(newValue)) {
        return;
    }
    UI.setUIValue(element, newValue);
    setSelection.setSelection({
        focusNode: element,
        anchorOffset: newOffset,
        focusOffset: newOffset
    });
    if (isDateOrTime(element)) {
        if (timeValue.isValidDateOrTimeValue(element, newValue)) {
            commitInput(instance, element, newOffset, {});
            instance.dispatchUIEvent(element, 'change');
            UI.clearInitialValue(element);
        }
    } else {
        commitInput(instance, element, newOffset, {
            data,
            inputType
        });
    }
}
function calculateNewValue(inputData, node, { startOffset, endOffset }, inputType) {
    const value = UI.getUIValue(node);
    const prologEnd = Math.max(0, startOffset === endOffset && inputType === 'deleteContentBackward' ? startOffset - 1 : startOffset);
    const prolog = value.substring(0, prologEnd);
    const epilogStart = Math.min(value.length, startOffset === endOffset && inputType === 'deleteContentForward' ? startOffset + 1 : endOffset);
    const epilog = value.substring(epilogStart, value.length);
    let newValue = `${prolog}${inputData}${epilog}`;
    let newOffset = prologEnd + inputData.length;
    if (isElementType.isElementType(node, 'input', {
        type: 'time'
    })) {
        const builtValue = timeValue.buildTimeValue(newValue);
        if (builtValue !== '' && timeValue.isValidDateOrTimeValue(node, builtValue)) {
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
    trackValue.commitValueAfterInput(element, newOffset);
}
function isValidNumberInput(value) {
    var _value_match, _value_match1;
    // the browser allows some invalid input but not others
    // it allows up to two '-' at any place before any 'e' or one directly following 'e'
    // it allows one '.' at any place before e
    const valueParts = value.split('e', 2);
    return !(/[^\d.\-e]/.test(value) || Number((_value_match = value.match(/-/g)) === null || _value_match === void 0 ? void 0 : _value_match.length) > 2 || Number((_value_match1 = value.match(/\./g)) === null || _value_match1 === void 0 ? void 0 : _value_match1.length) > 1 || valueParts[1] && !/^-?\d*$/.test(valueParts[1]));
}

exports.input = input;
