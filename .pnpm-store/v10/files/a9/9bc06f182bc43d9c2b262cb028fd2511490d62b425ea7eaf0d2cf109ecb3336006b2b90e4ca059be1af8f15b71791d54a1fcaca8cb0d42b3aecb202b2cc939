/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import * as Bidi from 'webdriver-bidi-protocol';
import { Keyboard, Mouse, Touchscreen, type TouchHandle, type KeyboardTypeOptions, type KeyDownOptions, type KeyPressOptions, type MouseClickOptions, type MouseMoveOptions, type MouseOptions, type MouseWheelOptions } from '../api/Input.js';
import type { KeyInput } from '../common/USKeyboardLayout.js';
import type { BidiPage } from './Page.js';
/**
 * @internal
 */
export declare class BidiKeyboard extends Keyboard {
    #private;
    constructor(page: BidiPage);
    down(key: KeyInput, _options?: Readonly<KeyDownOptions>): Promise<void>;
    up(key: KeyInput): Promise<void>;
    press(key: KeyInput, options?: Readonly<KeyPressOptions>): Promise<void>;
    type(text: string, options?: Readonly<KeyboardTypeOptions>): Promise<void>;
    sendCharacter(char: string): Promise<void>;
}
/**
 * @internal
 */
export interface BidiMouseClickOptions extends MouseClickOptions {
    origin?: Bidi.Input.Origin;
}
/**
 * @internal
 */
export interface BidiMouseMoveOptions extends MouseMoveOptions {
    origin?: Bidi.Input.Origin;
}
/**
 * @internal
 */
export interface BidiTouchMoveOptions {
    origin?: Bidi.Input.Origin;
}
/**
 * @internal
 */
export declare class BidiMouse extends Mouse {
    #private;
    constructor(page: BidiPage);
    reset(): Promise<void>;
    move(x: number, y: number, options?: Readonly<BidiMouseMoveOptions>): Promise<void>;
    down(options?: Readonly<MouseOptions>): Promise<void>;
    up(options?: Readonly<MouseOptions>): Promise<void>;
    click(x: number, y: number, options?: Readonly<BidiMouseClickOptions>): Promise<void>;
    wheel(options?: Readonly<MouseWheelOptions>): Promise<void>;
    drag(): never;
    dragOver(): never;
    dragEnter(): never;
    drop(): never;
    dragAndDrop(): never;
}
/**
 * @internal
 */
declare class BidiTouchHandle implements TouchHandle {
    #private;
    constructor(page: BidiPage, touchScreen: BidiTouchscreen, id: number, x: number, y: number, properties: Bidi.Input.PointerCommonProperties);
    start(options?: BidiTouchMoveOptions): Promise<void>;
    move(x: number, y: number): Promise<void>;
    end(): Promise<void>;
}
/**
 * @internal
 */
export declare class BidiTouchscreen extends Touchscreen {
    #private;
    touches: BidiTouchHandle[];
    constructor(page: BidiPage);
    touchStart(x: number, y: number, options?: BidiTouchMoveOptions): Promise<TouchHandle>;
}
export {};
//# sourceMappingURL=Input.d.ts.map