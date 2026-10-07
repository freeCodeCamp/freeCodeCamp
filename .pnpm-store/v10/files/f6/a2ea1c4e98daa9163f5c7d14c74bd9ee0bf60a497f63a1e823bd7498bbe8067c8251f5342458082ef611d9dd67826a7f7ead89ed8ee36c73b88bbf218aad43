const UIValue = Symbol('Displayed value in UI');
const UISelection = Symbol('Displayed selection in UI');
const InitialValue = Symbol('Initial value to compare on blur');
function isUIValue(value) {
    return typeof value === 'object' && UIValue in value;
}
function isUISelectionStart(start) {
    return !!start && typeof start === 'object' && UISelection in start;
}
function setUIValue(element, value) {
    if (element[InitialValue] === undefined) {
        element[InitialValue] = element.value;
    }
    element[UIValue] = value;
    element.value = Object.assign(new String(value), {
        [UIValue]: true
    });
}
function getUIValue(element) {
    return element[UIValue] === undefined ? element.value : String(element[UIValue]);
}
/** Flag the IDL value as clean. This does not change the value. */ function setUIValueClean(element) {
    element[UIValue] = undefined;
}
function clearInitialValue(element) {
    element[InitialValue] = undefined;
}
function getInitialValue(element) {
    return element[InitialValue];
}
function setUISelectionRaw(element, selection) {
    element[UISelection] = selection;
}
function setUISelection(element, { focusOffset: focusOffsetParam, anchorOffset: anchorOffsetParam = focusOffsetParam }, mode = 'replace') {
    const valueLength = getUIValue(element).length;
    const sanitizeOffset = (o)=>Math.max(0, Math.min(valueLength, o));
    const anchorOffset = mode === 'replace' || element[UISelection] === undefined ? sanitizeOffset(anchorOffsetParam) : element[UISelection].anchorOffset;
    const focusOffset = sanitizeOffset(focusOffsetParam);
    const startOffset = Math.min(anchorOffset, focusOffset);
    const endOffset = Math.max(anchorOffset, focusOffset);
    element[UISelection] = {
        anchorOffset,
        focusOffset
    };
    if (element.selectionStart === startOffset && element.selectionEnd === endOffset) {
        return;
    }
    const startObj = Object.assign(new Number(startOffset), {
        [UISelection]: true
    });
    try {
        element.setSelectionRange(startObj, endOffset);
    } catch  {
    // DOMException for invalid state is expected when calling this
    // on an element without support for setSelectionRange
    }
}
function getUISelection(element) {
    var _element_UISelection, _element_selectionStart, _element_selectionEnd;
    const sel = (_element_UISelection = element[UISelection]) !== null && _element_UISelection !== void 0 ? _element_UISelection : {
        anchorOffset: (_element_selectionStart = element.selectionStart) !== null && _element_selectionStart !== void 0 ? _element_selectionStart : 0,
        focusOffset: (_element_selectionEnd = element.selectionEnd) !== null && _element_selectionEnd !== void 0 ? _element_selectionEnd : 0
    };
    return {
        ...sel,
        startOffset: Math.min(sel.anchorOffset, sel.focusOffset),
        endOffset: Math.max(sel.anchorOffset, sel.focusOffset)
    };
}
function hasUISelection(element) {
    return !!element[UISelection];
}
/** Flag the IDL selection as clean. This does not change the selection. */ function setUISelectionClean(element) {
    element[UISelection] = undefined;
}

export { clearInitialValue, getInitialValue, getUISelection, getUIValue, hasUISelection, isUISelectionStart, isUIValue, setUISelection, setUISelectionClean, setUISelectionRaw, setUIValue, setUIValueClean };
