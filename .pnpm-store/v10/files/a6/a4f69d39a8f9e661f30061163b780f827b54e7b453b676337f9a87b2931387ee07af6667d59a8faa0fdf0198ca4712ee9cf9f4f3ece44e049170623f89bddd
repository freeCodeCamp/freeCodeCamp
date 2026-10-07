'use strict';

var dispatchEvent = require('../event/dispatchEvent.js');
require('../utils/dataTransfer/Clipboard.js');
var getActiveElement = require('../utils/focus/getActiveElement.js');
require('@testing-library/dom');

const patched = Symbol('patched focus/blur methods');
function patchFocus(HTMLElement) {
    if (HTMLElement.prototype[patched]) {
        return;
    }
    // eslint-disable-next-line @typescript-eslint/unbound-method
    const { focus, blur } = HTMLElement.prototype;
    Object.defineProperties(HTMLElement.prototype, {
        focus: {
            configurable: true,
            value: patchedFocus,
            writable: true
        },
        blur: {
            configurable: true,
            value: patchedBlur,
            writable: true
        },
        [patched]: {
            configurable: true,
            get: ()=>({
                    focus,
                    blur
                })
        }
    });
    let activeCall;
    function patchedFocus(options) {
        if (this.ownerDocument.visibilityState !== 'hidden') {
            return focus.call(this, options);
        }
        const blurred = getActiveTarget(this.ownerDocument);
        if (blurred === this) {
            return;
        }
        const thisCall = Symbol('focus call');
        activeCall = thisCall;
        if (blurred) {
            blur.call(blurred);
            dispatchEvent.dispatchDOMEvent(blurred, 'blur', {
                relatedTarget: this
            });
            dispatchEvent.dispatchDOMEvent(blurred, 'focusout', {
                relatedTarget: activeCall === thisCall ? this : null
            });
        }
        if (activeCall === thisCall) {
            focus.call(this, options);
            dispatchEvent.dispatchDOMEvent(this, 'focus', {
                relatedTarget: blurred
            });
        }
        if (activeCall === thisCall) {
            dispatchEvent.dispatchDOMEvent(this, 'focusin', {
                relatedTarget: blurred
            });
        }
    }
    function patchedBlur() {
        if (this.ownerDocument.visibilityState !== 'hidden') {
            return blur.call(this);
        }
        const blurred = getActiveTarget(this.ownerDocument);
        if (blurred !== this) {
            return;
        }
        const thisCall = Symbol('blur call');
        activeCall = thisCall;
        blur.call(this);
        dispatchEvent.dispatchDOMEvent(blurred, 'blur', {
            relatedTarget: null
        });
        dispatchEvent.dispatchDOMEvent(blurred, 'focusout', {
            relatedTarget: null
        });
    }
}
function getActiveTarget(document) {
    const active = getActiveElement.getActiveElement(document);
    return (active === null || active === void 0 ? void 0 : active.tagName) === 'BODY' ? null : active;
}
function restoreFocus(HTMLElement) {
    if (HTMLElement.prototype[patched]) {
        const { focus, blur } = HTMLElement.prototype[patched];
        Object.defineProperties(HTMLElement.prototype, {
            focus: {
                configurable: true,
                get: ()=>focus
            },
            blur: {
                configurable: true,
                get: ()=>blur
            }
        });
    }
}

exports.patchFocus = patchFocus;
exports.restoreFocus = restoreFocus;
