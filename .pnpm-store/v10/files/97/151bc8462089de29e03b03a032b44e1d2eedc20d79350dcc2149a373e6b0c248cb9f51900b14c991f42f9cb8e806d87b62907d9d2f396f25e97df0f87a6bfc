/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type { Protocol } from 'devtools-protocol';
import type { CDPSession } from '../api/CDPSession.js';
import type { Point } from '../api/ElementHandle.js';
import { Keyboard, Mouse, Touchscreen, type TouchHandle, type KeyDownOptions, type KeyPressOptions, type KeyboardTypeOptions, type MouseClickOptions, type MouseMoveOptions, type MouseOptions, type MouseWheelOptions } from '../api/Input.js';
import { type KeyInput } from '../common/USKeyboardLayout.js';
/**
 * @internal
 */
export declare class CdpKeyboard extends Keyboard {
    #private;
    _modifiers: number;
    constructor(client: CDPSession);
    updateClient(client: CDPSession): void;
    down(key: KeyInput, options?: Readonly<KeyDownOptions>): Promise<void>;
    up(key: KeyInput): Promise<void>;
    sendCharacter(char: string): Promise<void>;
    private charIsKey;
    type(text: string, options?: Readonly<KeyboardTypeOptions>): Promise<void>;
    press(key: KeyInput, options?: Readonly<KeyPressOptions>): Promise<void>;
}
/**
 * @internal
 */
export declare class CdpMouse extends Mouse {
    #private;
    constructor(client: CDPSession, keyboard: CdpKeyboard);
    updateClient(client: CDPSession): void;
    reset(): Promise<void>;
    move(x: number, y: number, options?: Readonly<MouseMoveOptions>): Promise<void>;
    down(options?: Readonly<MouseOptions>): Promise<void>;
    up(options?: Readonly<MouseOptions>): Promise<void>;
    click(x: number, y: number, options?: Readonly<MouseClickOptions>): Promise<void>;
    wheel(options?: Readonly<MouseWheelOptions>): Promise<void>;
    drag(start: Point, target: Point): Promise<Protocol.Input.DragData>;
    dragEnter(target: Point, data: Protocol.Input.DragData): Promise<void>;
    dragOver(target: Point, data: Protocol.Input.DragData): Promise<void>;
    drop(target: Point, data: Protocol.Input.DragData): Promise<void>;
    dragAndDrop(start: Point, target: Point, options?: {
        delay?: number;
    }): Promise<void>;
}
/**
 * @internal
 */
export declare class CdpTouchHandle implements TouchHandle {
    #private;
    constructor(client: CDPSession, touchScreen: CdpTouchscreen, keyboard: CdpKeyboard, touchPoint: Protocol.Input.TouchPoint);
    updateClient(client: CDPSession): void;
    start(): Promise<void>;
    move(x: number, y: number): Promise<void>;
    end(): Promise<void>;
}
/**
 * @internal
 */
export declare class CdpTouchscreen extends Touchscreen {
    #private;
    touches: CdpTouchHandle[];
    constructor(client: CDPSession, keyboard: CdpKeyboard);
    updateClient(client: CDPSession): void;
    touchStart(x: number, y: number): Promise<TouchHandle>;
}
//# sourceMappingURL=Input.d.ts.map