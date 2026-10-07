import { type Instance } from '../setup';
import { type System } from '.';
export declare enum DOM_KEY_LOCATION {
    STANDARD = 0,
    LEFT = 1,
    RIGHT = 2,
    NUMPAD = 3
}
export interface keyboardKey {
    /** Physical location on a keyboard */
    code?: string;
    /** Character or functional key descriptor */
    key?: string;
    /** Location on the keyboard for keys with multiple representation */
    location?: DOM_KEY_LOCATION;
    /** Does the character in `key` require/imply AltRight to be pressed? */
    altGr?: boolean;
    /** Does the character in `key` require/imply a shiftKey to be pressed? */
    shift?: boolean;
}
export declare class KeyboardHost {
    readonly system: System;
    constructor(system: System);
    readonly modifiers: {
        Alt: boolean;
        AltGraph: boolean;
        CapsLock: boolean;
        Control: boolean;
        Fn: boolean;
        FnLock: boolean;
        Meta: boolean;
        NumLock: boolean;
        ScrollLock: boolean;
        Shift: boolean;
        Symbol: boolean;
        SymbolLock: boolean;
    };
    private readonly pressed;
    carryChar: string;
    private lastKeydownTarget;
    private readonly modifierLockStart;
    isKeyPressed(keyDef: keyboardKey): boolean;
    getPressedKeys(): keyboardKey[];
    /** Press a key */
    keydown(instance: Instance, keyDef: keyboardKey, repeat?: boolean): Promise<void>;
    /** Release a key */
    keyup(instance: Instance, keyDef: keyboardKey): Promise<void>;
    private setKeydownTarget;
    private hasKeyPress;
}
