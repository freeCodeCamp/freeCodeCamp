import { type keyboardKey } from './system/keyboard';
import { type pointerKey } from './system/pointer';
export declare enum PointerEventsCheckLevel {
    /**
     * Check pointer events on every user interaction that triggers a bunch of events.
     * E.g. once for releasing a mouse button even though this triggers `pointerup`, `mouseup`, `click`, etc...
     */
    EachTrigger = 4,
    /** Check each target once per call to pointer (related) API */
    EachApiCall = 2,
    /** Check each event target once */
    EachTarget = 1,
    /** No pointer events check */
    Never = 0
}
export interface Options {
    /**
     * When using `userEvent.upload`, automatically discard files
     * that don't match an `accept` property if it exists.
     *
     * @default true
     */
    applyAccept?: boolean;
    /**
     * We intend to automatically apply modifier keys for printable characters in the future.
     * I.e. `A` implying `{Shift>}a{/Shift}` if caps lock is not active.
     *
     * This options allows you to opt out of this change in foresight.
     * The feature therefore will not constitute a breaking change.
     *
     * @default true
     */
    autoModify?: boolean;
    /**
     * Between some subsequent inputs like typing a series of characters
     * the code execution is delayed per `setTimeout` for (at least) `delay` milliseconds.
     * This moves the next changes at least to next macro task
     * and allows other (asynchronous) code to run between events.
     *
     * `null` prevents `setTimeout` from being called.
     *
     * @default 0
     */
    delay?: number | null;
    /**
     * The document.
     *
     * This defaults to the owner document of an element if an API is called directly with an element and without setup.
     * Otherwise it falls back to the global document.
     *
     * @default element.ownerDocument??globalThis.document
     */
    document?: Document;
    /**
     * An array of keyboard keys the keyboard device consists of.
     *
     * This allows to plug in different layouts / localizations.
     *
     * Defaults to a "standard" US-104-QWERTY keyboard.
     */
    keyboardMap?: keyboardKey[];
    /**
     * An array of available pointer keys.
     *
     * This allows to plug in different pointer devices.
     */
    pointerMap?: pointerKey[];
    /**
     * The pointer API includes a check if an element has or inherits `pointer-events: none`.
     * This check is known to be expensive and very expensive when checking deeply nested nodes.
     * This option determines how often the pointer related APIs perform the check.
     *
     * This is a binary flag option. You can combine multiple Levels.
     *
     * @default PointerEventsCheckLevel.EachApiCall
     */
    pointerEventsCheck?: PointerEventsCheckLevel | number;
    /**
     * `userEvent.type` automatically releases any keys still pressed at the end of the call.
     * This option allows to opt out of this feature.
     *
     * @default false
     */
    skipAutoClose?: boolean;
    /**
     * `userEvent.type` implies a click at the end of the element content/value.
     * This option allows to opt out of this feature.
     *
     * @default false
     */
    skipClick?: boolean;
    /**
     * `userEvent.click` implies moving the cursor to the target element first.
     * This options allows to opt out of this feature.
     *
     * @default false
     */
    skipHover?: boolean;
    /**
     * Write selected data to Clipboard API when a `cut` or `copy` is triggered.
     *
     * The Clipboard API is usually not available to test code.
     * Our `setup` replaces the `navigator.clipboard` property with a stub.
     *
     * Defaults to `false` when calling the APIs directly.
     * Defaults to `true` when calling the APIs per `setup`.
     */
    writeToClipboard?: boolean;
    /**
     * A function to be called internally to advance your fake timers (if applicable)
     *
     * @example jest.advanceTimersByTime
     */
    advanceTimers?: ((delay: number) => Promise<void>) | ((delay: number) => void);
}
