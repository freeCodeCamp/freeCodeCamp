'use strict';

require('../utils/dataTransfer/Clipboard.js');
var getWindow = require('../utils/misc/getWindow.js');
var eventMap = require('./eventMap.js');

const eventInitializer = {
    ClipboardEvent: [
        initClipboardEvent
    ],
    Event: [],
    FocusEvent: [
        initUIEvent,
        initFocusEvent
    ],
    InputEvent: [
        initUIEvent,
        initInputEvent
    ],
    MouseEvent: [
        initUIEvent,
        initUIEventModifiers,
        initMouseEvent
    ],
    PointerEvent: [
        initUIEvent,
        initUIEventModifiers,
        initMouseEvent,
        initPointerEvent
    ],
    KeyboardEvent: [
        initUIEvent,
        initUIEventModifiers,
        initKeyboardEvent
    ]
};
function createEvent(type, target, init) {
    const window = getWindow.getWindow(target);
    const { EventType, defaultInit } = eventMap.eventMap[type];
    const event = new (getEventConstructors(window))[EventType](type, defaultInit);
    eventInitializer[EventType].forEach((f)=>f(event, init !== null && init !== void 0 ? init : {}));
    return event;
}
/* istanbul ignore next */ function getEventConstructors(window) {
    var _window_Event, _window_AnimationEvent, _window_ClipboardEvent, _window_PopStateEvent, _window_ProgressEvent, _window_TransitionEvent, _window_UIEvent, _window_CompositionEvent, _window_FocusEvent, _window_InputEvent, _window_KeyboardEvent, _window_MouseEvent, _window_DragEvent, _window_PointerEvent, _window_TouchEvent;
    const Event = (_window_Event = window.Event) !== null && _window_Event !== void 0 ? _window_Event : class Event {
    };
    const AnimationEvent = (_window_AnimationEvent = window.AnimationEvent) !== null && _window_AnimationEvent !== void 0 ? _window_AnimationEvent : class AnimationEvent extends Event {
    };
    const ClipboardEvent = (_window_ClipboardEvent = window.ClipboardEvent) !== null && _window_ClipboardEvent !== void 0 ? _window_ClipboardEvent : class ClipboardEvent extends Event {
    };
    const PopStateEvent = (_window_PopStateEvent = window.PopStateEvent) !== null && _window_PopStateEvent !== void 0 ? _window_PopStateEvent : class PopStateEvent extends Event {
    };
    const ProgressEvent = (_window_ProgressEvent = window.ProgressEvent) !== null && _window_ProgressEvent !== void 0 ? _window_ProgressEvent : class ProgressEvent extends Event {
    };
    const TransitionEvent = (_window_TransitionEvent = window.TransitionEvent) !== null && _window_TransitionEvent !== void 0 ? _window_TransitionEvent : class TransitionEvent extends Event {
    };
    const UIEvent = (_window_UIEvent = window.UIEvent) !== null && _window_UIEvent !== void 0 ? _window_UIEvent : class UIEvent extends Event {
    };
    const CompositionEvent = (_window_CompositionEvent = window.CompositionEvent) !== null && _window_CompositionEvent !== void 0 ? _window_CompositionEvent : class CompositionEvent extends UIEvent {
    };
    const FocusEvent = (_window_FocusEvent = window.FocusEvent) !== null && _window_FocusEvent !== void 0 ? _window_FocusEvent : class FocusEvent extends UIEvent {
    };
    const InputEvent = (_window_InputEvent = window.InputEvent) !== null && _window_InputEvent !== void 0 ? _window_InputEvent : class InputEvent extends UIEvent {
    };
    const KeyboardEvent = (_window_KeyboardEvent = window.KeyboardEvent) !== null && _window_KeyboardEvent !== void 0 ? _window_KeyboardEvent : class KeyboardEvent extends UIEvent {
    };
    const MouseEvent = (_window_MouseEvent = window.MouseEvent) !== null && _window_MouseEvent !== void 0 ? _window_MouseEvent : class MouseEvent extends UIEvent {
    };
    const DragEvent = (_window_DragEvent = window.DragEvent) !== null && _window_DragEvent !== void 0 ? _window_DragEvent : class DragEvent extends MouseEvent {
    };
    const PointerEvent = (_window_PointerEvent = window.PointerEvent) !== null && _window_PointerEvent !== void 0 ? _window_PointerEvent : class PointerEvent extends MouseEvent {
    };
    const TouchEvent = (_window_TouchEvent = window.TouchEvent) !== null && _window_TouchEvent !== void 0 ? _window_TouchEvent : class TouchEvent extends UIEvent {
    };
    return {
        Event,
        AnimationEvent,
        ClipboardEvent,
        PopStateEvent,
        ProgressEvent,
        TransitionEvent,
        UIEvent,
        CompositionEvent,
        FocusEvent,
        InputEvent,
        KeyboardEvent,
        MouseEvent,
        DragEvent,
        PointerEvent,
        TouchEvent
    };
}
function assignProps(obj, props) {
    for (const [key, value] of Object.entries(props)){
        Object.defineProperty(obj, key, {
            get: ()=>value !== null && value !== void 0 ? value : null
        });
    }
}
function sanitizeNumber(n) {
    return Number(n !== null && n !== void 0 ? n : 0);
}
function initClipboardEvent(event, { clipboardData }) {
    assignProps(event, {
        clipboardData
    });
}
function initFocusEvent(event, { relatedTarget }) {
    assignProps(event, {
        relatedTarget
    });
}
function initInputEvent(event, { data, inputType, isComposing }) {
    assignProps(event, {
        data,
        isComposing: Boolean(isComposing),
        inputType: String(inputType)
    });
}
function initUIEvent(event, { view, detail }) {
    assignProps(event, {
        view,
        detail: sanitizeNumber(detail !== null && detail !== void 0 ? detail : 0)
    });
}
function initUIEventModifiers(event, { altKey, ctrlKey, metaKey, shiftKey, modifierAltGraph, modifierCapsLock, modifierFn, modifierFnLock, modifierNumLock, modifierScrollLock, modifierSymbol, modifierSymbolLock }) {
    assignProps(event, {
        altKey: Boolean(altKey),
        ctrlKey: Boolean(ctrlKey),
        metaKey: Boolean(metaKey),
        shiftKey: Boolean(shiftKey),
        getModifierState (k) {
            return Boolean({
                Alt: altKey,
                AltGraph: modifierAltGraph,
                CapsLock: modifierCapsLock,
                Control: ctrlKey,
                Fn: modifierFn,
                FnLock: modifierFnLock,
                Meta: metaKey,
                NumLock: modifierNumLock,
                ScrollLock: modifierScrollLock,
                Shift: shiftKey,
                Symbol: modifierSymbol,
                SymbolLock: modifierSymbolLock
            }[k]);
        }
    });
}
function initKeyboardEvent(event, { key, code, location, repeat, isComposing, charCode }) {
    assignProps(event, {
        key: String(key),
        code: String(code),
        location: sanitizeNumber(location),
        repeat: Boolean(repeat),
        isComposing: Boolean(isComposing),
        charCode
    });
}
function initMouseEvent(event, { x, y, screenX, screenY, clientX = x, clientY = y, button, buttons, relatedTarget, offsetX, offsetY, pageX, pageY }) {
    assignProps(event, {
        screenX: sanitizeNumber(screenX),
        screenY: sanitizeNumber(screenY),
        clientX: sanitizeNumber(clientX),
        x: sanitizeNumber(clientX),
        clientY: sanitizeNumber(clientY),
        y: sanitizeNumber(clientY),
        button: sanitizeNumber(button),
        buttons: sanitizeNumber(buttons),
        relatedTarget,
        offsetX: sanitizeNumber(offsetX),
        offsetY: sanitizeNumber(offsetY),
        pageX: sanitizeNumber(pageX),
        pageY: sanitizeNumber(pageY)
    });
}
function initPointerEvent(event, { pointerId, width, height, pressure, tangentialPressure, tiltX, tiltY, twist, pointerType, isPrimary, buttons }) {
    assignProps(event, {
        pointerId: sanitizeNumber(pointerId),
        width: sanitizeNumber(width !== null && width !== void 0 ? width : 1),
        height: sanitizeNumber(height !== null && height !== void 0 ? height : 1),
        pressure: sanitizeNumber(pressure !== null && pressure !== void 0 ? pressure : buttons ? 0.5 : 0),
        tangentialPressure: sanitizeNumber(tangentialPressure),
        tiltX: sanitizeNumber(tiltX),
        tiltY: sanitizeNumber(tiltY),
        twist: sanitizeNumber(twist),
        pointerType: String(pointerType !== null && pointerType !== void 0 ? pointerType : ''),
        isPrimary: Boolean(isPrimary)
    });
}

exports.createEvent = createEvent;
