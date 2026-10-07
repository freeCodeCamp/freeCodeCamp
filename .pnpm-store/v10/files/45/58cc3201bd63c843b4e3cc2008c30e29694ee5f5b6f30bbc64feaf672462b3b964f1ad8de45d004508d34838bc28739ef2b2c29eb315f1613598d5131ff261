import { KeyboardHost } from './keyboard.js';
import { PointerHost } from './pointer/index.js';

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
/**
 * @internal Do not create/alter this by yourself as this type might be subject to changes.
 */ class System {
    getUIEventModifiers() {
        return {
            altKey: this.keyboard.modifiers.Alt,
            ctrlKey: this.keyboard.modifiers.Control,
            metaKey: this.keyboard.modifiers.Meta,
            shiftKey: this.keyboard.modifiers.Shift,
            modifierAltGraph: this.keyboard.modifiers.AltGraph,
            modifierCapsLock: this.keyboard.modifiers.CapsLock,
            modifierFn: this.keyboard.modifiers.Fn,
            modifierFnLock: this.keyboard.modifiers.FnLock,
            modifierNumLock: this.keyboard.modifiers.NumLock,
            modifierScrollLock: this.keyboard.modifiers.ScrollLock,
            modifierSymbol: this.keyboard.modifiers.Symbol,
            modifierSymbolLock: this.keyboard.modifiers.SymbolLock
        };
    }
    constructor(){
        _define_property(this, "keyboard", new KeyboardHost(this));
        _define_property(this, "pointer", new PointerHost(this));
    }
}

export { System };
