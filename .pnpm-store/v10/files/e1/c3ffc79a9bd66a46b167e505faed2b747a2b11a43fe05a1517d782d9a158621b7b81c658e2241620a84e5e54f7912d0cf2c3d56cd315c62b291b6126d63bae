/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import type {Protocol} from 'devtools-protocol';

import {TouchError} from '../common/Errors.js';
import type {KeyInput} from '../common/USKeyboardLayout.js';
import {createIncrementalIdGenerator} from '../util/incremental-id-generator.js';

import type {Point} from './ElementHandle.js';

/**
 * @public
 */
export interface KeyDownOptions {
  /**
   * @deprecated Do not use. This is automatically handled.
   */
  text?: string;
  /**
   * @deprecated Do not use. This is automatically handled.
   */
  commands?: string[];
}

/**
 * @public
 */
export interface KeyboardTypeOptions {
  delay?: number;
}

/**
 * @public
 */
export type KeyPressOptions = KeyDownOptions & KeyboardTypeOptions;

/**
 * Keyboard provides an api for managing a virtual keyboard.
 * The high level api is {@link Keyboard."type"},
 * which takes raw characters and generates proper keydown, keypress/input,
 * and keyup events on your page.
 *
 * @remarks
 * For finer control, you can use {@link Keyboard.down},
 * {@link Keyboard.up}, and {@link Keyboard.sendCharacter}
 * to manually fire events as if they were generated from a real keyboard.
 *
 * On macOS, keyboard shortcuts like `⌘ A` -\> Select All do not work.
 * See {@link https://github.com/puppeteer/puppeteer/issues/1313 | #1313}.
 *
 * @example
 * An example of holding down `Shift` in order to select and delete some text:
 *
 * ```ts
 * await page.keyboard.type('Hello World!');
 * await page.keyboard.press('ArrowLeft');
 *
 * await page.keyboard.down('Shift');
 * for (let i = 0; i < ' World'.length; i++)
 *   await page.keyboard.press('ArrowLeft');
 * await page.keyboard.up('Shift');
 *
 * await page.keyboard.press('Backspace');
 * // Result text will end up saying 'Hello!'
 * ```
 *
 * @example
 * An example of pressing `A`
 *
 * ```ts
 * await page.keyboard.down('Shift');
 * await page.keyboard.press('KeyA');
 * await page.keyboard.up('Shift');
 * ```
 *
 * @public
 */
export abstract class Keyboard {
  /**
   * @internal
   */
  constructor() {}

  /**
   * Dispatches a `keydown` event.
   *
   * @remarks
   * If `key` is a single character and no modifier keys besides `Shift`
   * are being held down, a `keypress`/`input` event will also generated.
   * The `text` option can be specified to force an input event to be generated.
   * If `key` is a modifier key, `Shift`, `Meta`, `Control`, or `Alt`,
   * subsequent key presses will be sent with that modifier active.
   * To release the modifier key, use {@link Keyboard.up}.
   *
   * After the key is pressed once, subsequent calls to
   * {@link Keyboard.down} will have
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/repeat | repeat}
   * set to true. To release the key, use {@link Keyboard.up}.
   *
   * Modifier keys DO influence {@link Keyboard.down}.
   * Holding down `Shift` will type the text in upper case.
   *
   * @param key - Name of key to press, such as `ArrowLeft`.
   * See {@link KeyInput} for a list of all key names.
   *
   * @param options - An object of options. Accepts text which, if specified,
   * generates an input event with this text. Accepts commands which, if specified,
   * is the commands of keyboard shortcuts,
   * see {@link https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/editing/commands/editor_command_names.h | Chromium Source Code} for valid command names.
   */
  abstract down(
    key: KeyInput,
    options?: Readonly<KeyDownOptions>,
  ): Promise<void>;

  /**
   * Dispatches a `keyup` event.
   *
   * @param key - Name of key to release, such as `ArrowLeft`.
   * See {@link KeyInput | KeyInput}
   * for a list of all key names.
   */
  abstract up(key: KeyInput): Promise<void>;

  /**
   * Dispatches a `keypress` and `input` event.
   * This does not send a `keydown` or `keyup` event.
   *
   * @remarks
   * Modifier keys DO NOT effect {@link Keyboard.sendCharacter | Keyboard.sendCharacter}.
   * Holding down `Shift` will not type the text in upper case.
   *
   * @example
   *
   * ```ts
   * page.keyboard.sendCharacter('嗨');
   * ```
   *
   * @param char - Character to send into the page.
   */
  abstract sendCharacter(char: string): Promise<void>;

  /**
   * Sends a `keydown`, `keypress`/`input`,
   * and `keyup` event for each character in the text.
   *
   * @remarks
   * To press a special key, like `Control` or `ArrowDown`,
   * use {@link Keyboard.press}.
   *
   * Modifier keys DO NOT effect `keyboard.type`.
   * Holding down `Shift` will not type the text in upper case.
   *
   * @example
   *
   * ```ts
   * await page.keyboard.type('Hello'); // Types instantly
   * await page.keyboard.type('World', {delay: 100}); // Types slower, like a user
   * ```
   *
   * @param text - A text to type into a focused element.
   * @param options - An object of options. Accepts delay which,
   * if specified, is the time to wait between `keydown` and `keyup` in milliseconds.
   * Defaults to 0.
   */
  abstract type(
    text: string,
    options?: Readonly<KeyboardTypeOptions>,
  ): Promise<void>;

  /**
   * Shortcut for {@link Keyboard.down}
   * and {@link Keyboard.up}.
   *
   * @remarks
   * If `key` is a single character and no modifier keys besides `Shift`
   * are being held down, a `keypress`/`input` event will also generated.
   * The `text` option can be specified to force an input event to be generated.
   *
   * Modifier keys DO effect {@link Keyboard.press}.
   * Holding down `Shift` will type the text in upper case.
   *
   * @param key - Name of key to press, such as `ArrowLeft`.
   * See {@link KeyInput} for a list of all key names.
   *
   * @param options - An object of options. Accepts text which, if specified,
   * generates an input event with this text. Accepts delay which,
   * if specified, is the time to wait between `keydown` and `keyup` in milliseconds.
   * Defaults to 0. Accepts commands which, if specified,
   * is the commands of keyboard shortcuts,
   * see {@link https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/editing/commands/editor_command_names.h | Chromium Source Code} for valid command names.
   */
  abstract press(
    key: KeyInput,
    options?: Readonly<KeyPressOptions>,
  ): Promise<void>;
}

/**
 * @public
 */
export interface MouseOptions {
  /**
   * Determines which button will be pressed.
   *
   * @defaultValue `'left'`
   */
  button?: MouseButton;
  /**
   * @internal
   *
   * Determines the click count for the mouse event. This does not perform
   * multiple clicks.
   *
   * @defaultValue `1`
   */
  clickCount?: number;
}

/**
 * @public
 */
export interface MouseClickOptions extends MouseOptions {
  /**
   * Time (in ms) to delay the mouse release after the mouse press.
   */
  delay?: number;
  /**
   * Number of clicks to perform.
   *
   * @defaultValue `1`
   */
  count?: number;
}

/**
 * @public
 */
export interface MouseWheelOptions {
  deltaX?: number;
  deltaY?: number;
}

/**
 * @public
 */
export interface MouseMoveOptions {
  /**
   * Determines the number of movements to make from the current mouse position
   * to the new one.
   *
   * @defaultValue `1`
   */
  steps?: number;
}

/**
 * Enum of valid mouse buttons.
 *
 * @public
 */
export const MouseButton = Object.freeze({
  Left: 'left',
  Right: 'right',
  Middle: 'middle',
  Back: 'back',
  Forward: 'forward',
}) satisfies Record<string, Protocol.Input.MouseButton>;

/**
 * @public
 */
export type MouseButton = (typeof MouseButton)[keyof typeof MouseButton];

/**
 * The Mouse class operates in main-frame CSS pixels
 * relative to the top-left corner of the viewport.
 *
 * @remarks
 * Every `page` object has its own Mouse, accessible with {@link Page.mouse}.
 *
 * @example
 *
 * ```ts
 * // Using ‘page.mouse’ to trace a 100x100 square.
 * await page.mouse.move(0, 0);
 * await page.mouse.down();
 * await page.mouse.move(0, 100);
 * await page.mouse.move(100, 100);
 * await page.mouse.move(100, 0);
 * await page.mouse.move(0, 0);
 * await page.mouse.up();
 * ```
 *
 * **Note**: The mouse events trigger synthetic `MouseEvent`s.
 * This means that it does not fully replicate the functionality of what a normal user
 * would be able to do with their mouse.
 *
 * For example, dragging and selecting text is not possible using `page.mouse`.
 * Instead, you can use the {@link https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/getSelection | `DocumentOrShadowRoot.getSelection()`} functionality implemented in the platform.
 *
 * @example
 * For example, if you want to select all content between nodes:
 *
 * ```ts
 * await page.evaluate(
 *   (from, to) => {
 *     const selection = from.getRootNode().getSelection();
 *     const range = document.createRange();
 *     range.setStartBefore(from);
 *     range.setEndAfter(to);
 *     selection.removeAllRanges();
 *     selection.addRange(range);
 *   },
 *   fromJSHandle,
 *   toJSHandle,
 * );
 * ```
 *
 * If you then would want to copy-paste your selection, you can use the clipboard api:
 *
 * ```ts
 * // The clipboard api does not allow you to copy, unless the tab is focused.
 * await page.bringToFront();
 * await page.evaluate(() => {
 *   // Copy the selected content to the clipboard
 *   document.execCommand('copy');
 *   // Obtain the content of the clipboard as a string
 *   return navigator.clipboard.readText();
 * });
 * ```
 *
 * **Note**: If you want access to the clipboard API,
 * you have to give it permission to do so:
 *
 * ```ts
 * await browser
 *   .defaultBrowserContext()
 *   .overridePermissions('<your origin>', [
 *     'clipboard-read',
 *     'clipboard-write',
 *   ]);
 * ```
 *
 * @public
 */
export abstract class Mouse {
  /**
   * @internal
   */
  constructor() {}

  /**
   * Resets the mouse to the default state: No buttons pressed; position at
   * (0,0).
   */
  abstract reset(): Promise<void>;

  /**
   * Moves the mouse to the given coordinate.
   *
   * @param x - Horizontal position of the mouse.
   * @param y - Vertical position of the mouse.
   * @param options - Options to configure behavior.
   */
  abstract move(
    x: number,
    y: number,
    options?: Readonly<MouseMoveOptions>,
  ): Promise<void>;

  /**
   * Presses the mouse.
   *
   * @param options - Options to configure behavior.
   */
  abstract down(options?: Readonly<MouseOptions>): Promise<void>;

  /**
   * Releases the mouse.
   *
   * @param options - Options to configure behavior.
   */
  abstract up(options?: Readonly<MouseOptions>): Promise<void>;

  /**
   * Shortcut for `mouse.move`, `mouse.down` and `mouse.up`.
   *
   * @param x - Horizontal position of the mouse.
   * @param y - Vertical position of the mouse.
   * @param options - Options to configure behavior.
   */
  abstract click(
    x: number,
    y: number,
    options?: Readonly<MouseClickOptions>,
  ): Promise<void>;

  /**
   * Dispatches a `mousewheel` event.
   * @param options - Optional: `MouseWheelOptions`.
   *
   * @example
   * An example of zooming into an element:
   *
   * ```ts
   * await page.goto(
   *   'https://mdn.mozillademos.org/en-US/docs/Web/API/Element/wheel_event$samples/Scaling_an_element_via_the_wheel?revision=1587366',
   * );
   *
   * const elem = await page.$('div');
   * const boundingBox = await elem.boundingBox();
   * await page.mouse.move(
   *   boundingBox.x + boundingBox.width / 2,
   *   boundingBox.y + boundingBox.height / 2,
   * );
   *
   * await page.mouse.wheel({deltaY: -100});
   * ```
   */
  abstract wheel(options?: Readonly<MouseWheelOptions>): Promise<void>;

  /**
   * Dispatches a `drag` event.
   * @param start - starting point for drag
   * @param target - point to drag to
   */
  abstract drag(start: Point, target: Point): Promise<Protocol.Input.DragData>;

  /**
   * Dispatches a `dragenter` event.
   * @param target - point for emitting `dragenter` event
   * @param data - drag data containing items and operations mask
   */
  abstract dragEnter(
    target: Point,
    data: Protocol.Input.DragData,
  ): Promise<void>;

  /**
   * Dispatches a `dragover` event.
   * @param target - point for emitting `dragover` event
   * @param data - drag data containing items and operations mask
   */
  abstract dragOver(
    target: Point,
    data: Protocol.Input.DragData,
  ): Promise<void>;

  /**
   * Performs a dragenter, dragover, and drop in sequence.
   * @param target - point to drop on
   * @param data - drag data containing items and operations mask
   */
  abstract drop(target: Point, data: Protocol.Input.DragData): Promise<void>;

  /**
   * Performs a drag, dragenter, dragover, and drop in sequence.
   * @param start - point to drag from
   * @param target - point to drop on
   * @param options - An object of options. Accepts delay which,
   * if specified, is the time to wait between `dragover` and `drop` in milliseconds.
   * Defaults to 0.
   */
  abstract dragAndDrop(
    start: Point,
    target: Point,
    options?: {delay?: number},
  ): Promise<void>;
}
/**
 * The TouchHandle interface exposes methods to manipulate touches that have been started
 * @public
 */
export interface TouchHandle {
  /**
   * Dispatches a `touchMove` event for this touch.
   * @param x - Horizontal position of the move.
   * @param y - Vertical position of the move.
   */
  move(x: number, y: number): Promise<void>;
  /**
   * Dispatches a `touchend` event for this touch.
   */
  end(): Promise<void>;
}
/**
 * The Touchscreen class exposes touchscreen events.
 * @public
 */
export abstract class Touchscreen {
  /**
   * @internal
   */
  idGenerator = createIncrementalIdGenerator();
  /**
   * @internal
   */
  touches: TouchHandle[] = [];
  /**
   * @internal
   */
  constructor() {}

  /**
   * @internal
   */
  removeHandle(handle: TouchHandle): void {
    const index = this.touches.indexOf(handle);
    if (index === -1) {
      return;
    }
    this.touches.splice(index, 1);
  }

  /**
   * Dispatches a `touchstart` and `touchend` event.
   * @param x - Horizontal position of the tap.
   * @param y - Vertical position of the tap.
   */
  async tap(x: number, y: number): Promise<void> {
    const touch = await this.touchStart(x, y);
    await touch.end();
  }

  /**
   * Dispatches a `touchstart` event.
   * @param x - Horizontal position of the tap.
   * @param y - Vertical position of the tap.
   * @returns A handle for the touch that was started.
   */
  abstract touchStart(x: number, y: number): Promise<TouchHandle>;

  /**
   * Dispatches a `touchMove` event on the first touch that is active.
   * @param x - Horizontal position of the move.
   * @param y - Vertical position of the move.
   *
   * @remarks
   *
   * Not every `touchMove` call results in a `touchmove` event being emitted,
   * depending on the browser's optimizations. For example, Chrome
   * {@link https://developer.chrome.com/blog/a-more-compatible-smoother-touch/#chromes-new-model-the-throttled-async-touchmove-model | throttles}
   * touch move events.
   */
  async touchMove(x: number, y: number): Promise<void> {
    const touch = this.touches[0];
    if (!touch) {
      throw new TouchError('Must start a new Touch first');
    }
    return await touch.move(x, y);
  }

  /**
   * Dispatches a `touchend` event on the first touch that is active.
   */
  async touchEnd(): Promise<void> {
    const touch = this.touches.shift();
    if (!touch) {
      throw new TouchError('Must start a new Touch first');
    }
    await touch.end();
  }
}
