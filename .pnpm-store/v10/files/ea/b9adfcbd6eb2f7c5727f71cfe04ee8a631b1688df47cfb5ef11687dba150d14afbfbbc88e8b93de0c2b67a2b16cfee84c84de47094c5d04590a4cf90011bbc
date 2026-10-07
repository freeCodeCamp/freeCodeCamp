'use strict';

const eventMap = {
    auxclick: {
        EventType: 'PointerEvent',
        defaultInit: {
            bubbles: true,
            cancelable: true,
            composed: true
        }
    },
    beforeinput: {
        EventType: 'InputEvent',
        defaultInit: {
            bubbles: true,
            cancelable: true,
            composed: true
        }
    },
    blur: {
        EventType: 'FocusEvent',
        defaultInit: {
            bubbles: false,
            cancelable: false,
            composed: true
        }
    },
    click: {
        EventType: 'PointerEvent',
        defaultInit: {
            bubbles: true,
            cancelable: true,
            composed: true
        }
    },
    contextmenu: {
        EventType: 'PointerEvent',
        defaultInit: {
            bubbles: true,
            cancelable: true,
            composed: true
        }
    },
    copy: {
        EventType: 'ClipboardEvent',
        defaultInit: {
            bubbles: true,
            cancelable: true,
            composed: true
        }
    },
    change: {
        EventType: 'Event',
        defaultInit: {
            bubbles: true,
            cancelable: false
        }
    },
    cut: {
        EventType: 'ClipboardEvent',
        defaultInit: {
            bubbles: true,
            cancelable: true,
            composed: true
        }
    },
    dblclick: {
        EventType: 'MouseEvent',
        defaultInit: {
            bubbles: true,
            cancelable: true,
            composed: true
        }
    },
    focus: {
        EventType: 'FocusEvent',
        defaultInit: {
            bubbles: false,
            cancelable: false,
            composed: true
        }
    },
    focusin: {
        EventType: 'FocusEvent',
        defaultInit: {
            bubbles: true,
            cancelable: false,
            composed: true
        }
    },
    focusout: {
        EventType: 'FocusEvent',
        defaultInit: {
            bubbles: true,
            cancelable: false,
            composed: true
        }
    },
    keydown: {
        EventType: 'KeyboardEvent',
        defaultInit: {
            bubbles: true,
            cancelable: true,
            composed: true
        }
    },
    keypress: {
        EventType: 'KeyboardEvent',
        defaultInit: {
            bubbles: true,
            cancelable: true,
            composed: true
        }
    },
    keyup: {
        EventType: 'KeyboardEvent',
        defaultInit: {
            bubbles: true,
            cancelable: true,
            composed: true
        }
    },
    paste: {
        EventType: 'ClipboardEvent',
        defaultInit: {
            bubbles: true,
            cancelable: true,
            composed: true
        }
    },
    input: {
        EventType: 'InputEvent',
        defaultInit: {
            bubbles: true,
            cancelable: false,
            composed: true
        }
    },
    mousedown: {
        EventType: 'MouseEvent',
        defaultInit: {
            bubbles: true,
            cancelable: true,
            composed: true
        }
    },
    mouseenter: {
        EventType: 'MouseEvent',
        defaultInit: {
            bubbles: false,
            cancelable: false,
            composed: true
        }
    },
    mouseleave: {
        EventType: 'MouseEvent',
        defaultInit: {
            bubbles: false,
            cancelable: false,
            composed: true
        }
    },
    mousemove: {
        EventType: 'MouseEvent',
        defaultInit: {
            bubbles: true,
            cancelable: true,
            composed: true
        }
    },
    mouseout: {
        EventType: 'MouseEvent',
        defaultInit: {
            bubbles: true,
            cancelable: true,
            composed: true
        }
    },
    mouseover: {
        EventType: 'MouseEvent',
        defaultInit: {
            bubbles: true,
            cancelable: true,
            composed: true
        }
    },
    mouseup: {
        EventType: 'MouseEvent',
        defaultInit: {
            bubbles: true,
            cancelable: true,
            composed: true
        }
    },
    pointerover: {
        EventType: 'PointerEvent',
        defaultInit: {
            bubbles: true,
            cancelable: true,
            composed: true
        }
    },
    pointerenter: {
        EventType: 'PointerEvent',
        defaultInit: {
            bubbles: false,
            cancelable: false
        }
    },
    pointerdown: {
        EventType: 'PointerEvent',
        defaultInit: {
            bubbles: true,
            cancelable: true,
            composed: true
        }
    },
    pointermove: {
        EventType: 'PointerEvent',
        defaultInit: {
            bubbles: true,
            cancelable: true,
            composed: true
        }
    },
    pointerup: {
        EventType: 'PointerEvent',
        defaultInit: {
            bubbles: true,
            cancelable: true,
            composed: true
        }
    },
    pointercancel: {
        EventType: 'PointerEvent',
        defaultInit: {
            bubbles: true,
            cancelable: false,
            composed: true
        }
    },
    pointerout: {
        EventType: 'PointerEvent',
        defaultInit: {
            bubbles: true,
            cancelable: true,
            composed: true
        }
    },
    pointerleave: {
        EventType: 'PointerEvent',
        defaultInit: {
            bubbles: false,
            cancelable: false
        }
    },
    submit: {
        EventType: 'Event',
        defaultInit: {
            bubbles: true,
            cancelable: true
        }
    }
};
function getEventClass(type) {
    return eventMap[type].EventType;
}
const mouseEvents = [
    'MouseEvent',
    'PointerEvent'
];
function isMouseEvent(type) {
    return mouseEvents.includes(getEventClass(type));
}
function isKeyboardEvent(type) {
    return getEventClass(type) === 'KeyboardEvent';
}

exports.eventMap = eventMap;
exports.isKeyboardEvent = isKeyboardEvent;
exports.isMouseEvent = isMouseEvent;
