'use strict';

function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
class Buttons {
    getButtons() {
        let v = 0;
        for (const button of Object.keys(this.pressed)){
            v |= 2 ** Number(button);
        }
        return v;
    }
    down(keyDef) {
        const button = getMouseButtonId(keyDef.button);
        if (button in this.pressed) {
            this.pressed[button].push(keyDef);
            return undefined;
        }
        this.pressed[button] = [
            keyDef
        ];
        return button;
    }
    up(keyDef) {
        const button = getMouseButtonId(keyDef.button);
        if (button in this.pressed) {
            this.pressed[button] = this.pressed[button].filter((k)=>k.name !== keyDef.name);
            if (this.pressed[button].length === 0) {
                delete this.pressed[button];
                return button;
            }
        }
        return undefined;
    }
    constructor(){
        _define_property(this, "pressed", {});
    }
}
const MouseButton = {
    primary: 0,
    secondary: 1,
    auxiliary: 2,
    back: 3,
    X1: 3,
    forward: 4,
    X2: 4
};
function getMouseButtonId(button = 0) {
    if (button in MouseButton) {
        return MouseButton[button];
    }
    return Number(button);
}
// On the `MouseEvent.button` property auxiliary and secondary button are flipped compared to `MouseEvent.buttons`.
const MouseButtonFlip = {
    1: 2,
    2: 1
};
function getMouseEventButton(button) {
    button = getMouseButtonId(button);
    if (button in MouseButtonFlip) {
        return MouseButtonFlip[button];
    }
    return button;
}

exports.Buttons = Buttons;
exports.MouseButton = MouseButton;
exports.MouseButtonFlip = MouseButtonFlip;
exports.getMouseButtonId = getMouseButtonId;
exports.getMouseEventButton = getMouseEventButton;
