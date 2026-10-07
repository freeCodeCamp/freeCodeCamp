/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import { TouchError } from '../common/Errors.js';
import { createIncrementalIdGenerator } from '../util/incremental-id-generator.js';
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
export class Keyboard {
    /**
     * @internal
     */
    constructor() { }
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
});
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
export class Mouse {
    /**
     * @internal
     */
    constructor() { }
}
/**
 * The Touchscreen class exposes touchscreen events.
 * @public
 */
export class Touchscreen {
    /**
     * @internal
     */
    idGenerator = createIncrementalIdGenerator();
    /**
     * @internal
     */
    touches = [];
    /**
     * @internal
     */
    constructor() { }
    /**
     * @internal
     */
    removeHandle(handle) {
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
    async tap(x, y) {
        const touch = await this.touchStart(x, y);
        await touch.end();
    }
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
    async touchMove(x, y) {
        const touch = this.touches[0];
        if (!touch) {
            throw new TouchError('Must start a new Touch first');
        }
        return await touch.move(x, y);
    }
    /**
     * Dispatches a `touchend` event on the first touch that is active.
     */
    async touchEnd() {
        const touch = this.touches.shift();
        if (!touch) {
            throw new TouchError('Must start a new Touch first');
        }
        await touch.end();
    }
}
//# sourceMappingURL=Input.js.map