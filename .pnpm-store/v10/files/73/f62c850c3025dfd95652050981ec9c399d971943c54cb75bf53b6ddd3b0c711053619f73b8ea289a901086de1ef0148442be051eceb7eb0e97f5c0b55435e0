/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type { Protocol } from 'devtools-protocol';
import type { Frame } from '../api/Frame.js';
import type { AwaitableIterable, ElementFor, EvaluateFuncWith, HandleFor, HandleOr, NodeFor } from '../common/types.js';
import type { KeyInput } from '../common/USKeyboardLayout.js';
import { _isElementHandle } from './ElementHandleSymbol.js';
import type { KeyboardTypeOptions, KeyPressOptions, MouseClickOptions, TouchHandle } from './Input.js';
import { JSHandle } from './JSHandle.js';
import type { Locator } from './locators/locators.js';
import type { QueryOptions, ScreenshotOptions, WaitForSelectorOptions } from './Page.js';
/**
 * @public
 */
export type Quad = [Point, Point, Point, Point];
/**
 * @public
 */
export interface BoxModel {
    content: Quad;
    padding: Quad;
    border: Quad;
    margin: Quad;
    width: number;
    height: number;
}
/**
 * @public
 */
export interface BoundingBox extends Point {
    /**
     * the width of the element in pixels.
     */
    width: number;
    /**
     * the height of the element in pixels.
     */
    height: number;
}
/**
 * @public
 */
export interface Offset {
    /**
     * x-offset for the clickable point relative to the top-left corner of the border box.
     */
    x: number;
    /**
     * y-offset for the clickable point relative to the top-left corner of the border box.
     */
    y: number;
}
/**
 * @public
 */
export interface ClickOptions extends MouseClickOptions {
    /**
     * Offset for the clickable point relative to the top-left corner of the border box.
     */
    offset?: Offset;
    /**
     * An experimental debugging feature. If true, inserts an element into the
     * page to highlight the click location for 10 seconds. Might not work on all
     * pages and does not persist across navigations.
     *
     * @experimental
     */
    debugHighlight?: boolean;
}
/**
 * @public
 */
export interface Point {
    x: number;
    y: number;
}
/**
 * @public
 */
export interface ElementScreenshotOptions extends ScreenshotOptions {
    /**
     * @defaultValue `true`
     */
    scrollIntoView?: boolean;
}
/**
 * A given method will have it's `this` replaced with an isolated version of
 * `this` when decorated with this decorator.
 *
 * All changes of isolated `this` are reflected on the actual `this`.
 *
 * @internal
 */
export declare function bindIsolatedHandle<This extends ElementHandle<Node>>(target: (this: This, ...args: any[]) => Promise<any>, _: unknown): typeof target;
/**
 * ElementHandle represents an in-page DOM element.
 *
 * @remarks
 * ElementHandles can be created with the {@link Page.$} method.
 *
 * ```ts
 * import puppeteer from 'puppeteer';
 *
 * const browser = await puppeteer.launch();
 * const page = await browser.newPage();
 * await page.goto('https://example.com');
 * const hrefElement = await page.$('a');
 * await hrefElement.click();
 * // ...
 * ```
 *
 * ElementHandle prevents the DOM element from being garbage-collected unless the
 * handle is {@link JSHandle.dispose | disposed}. ElementHandles are auto-disposed
 * when their associated frame is navigated away or the parent
 * context gets destroyed.
 *
 * ElementHandle instances can be used as arguments in {@link Page.$eval} and
 * {@link Page.evaluate} methods.
 *
 * If you're using TypeScript, ElementHandle takes a generic argument that
 * denotes the type of element the handle is holding within. For example, if you
 * have a handle to a `<select>` element, you can type it as
 * `ElementHandle<HTMLSelectElement>` and you get some nicer type checks.
 *
 * @public
 */
export declare abstract class ElementHandle<ElementType extends Node = Element> extends JSHandle<ElementType> {
    #private;
    /**
     * @internal
     */
    [_isElementHandle]: boolean;
    /**
     * @internal
     * Cached isolatedHandle to prevent
     * trying to adopt it multiple times
     */
    isolatedHandle?: typeof this;
    /**
     * @internal
     */
    protected readonly handle: JSHandle<ElementType>;
    /**
     * @internal
     */
    constructor(handle: JSHandle<ElementType>);
    /**
     * @internal
     */
    get id(): string | undefined;
    /**
     * @internal
     */
    get disposed(): boolean;
    /**
     * @internal
     */
    getProperty<K extends keyof ElementType>(propertyName: HandleOr<K>): Promise<HandleFor<ElementType[K]>>;
    /**
     * @internal
     */
    getProperties(): Promise<Map<string, JSHandle>>;
    /**
     * @internal
     */
    evaluate<Params extends unknown[], Func extends EvaluateFuncWith<ElementType, Params> = EvaluateFuncWith<ElementType, Params>>(pageFunction: Func | string, ...args: Params): Promise<Awaited<ReturnType<Func>>>;
    /**
     * @internal
     */
    evaluateHandle<Params extends unknown[], Func extends EvaluateFuncWith<ElementType, Params> = EvaluateFuncWith<ElementType, Params>>(pageFunction: Func | string, ...args: Params): Promise<HandleFor<Awaited<ReturnType<Func>>>>;
    /**
     * @internal
     */
    jsonValue(): Promise<ElementType>;
    /**
     * @internal
     */
    toString(): string;
    /**
     * @internal
     */
    remoteObject(): Protocol.Runtime.RemoteObject;
    /**
     * @internal
     */
    dispose(): Promise<void>;
    /**
     * @internal
     */
    asElement(): ElementHandle<ElementType>;
    /**
     * Frame corresponding to the current handle.
     */
    abstract get frame(): Frame;
    /**
     * Queries the current element for an element matching the given selector.
     *
     * @param selector -
     * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
     * to query the page for.
     * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
     * can be passed as-is and a
     * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
     * allows querying by
     * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
     * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
     * and
     * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
     * and
     * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
     * Alternatively, you can specify the selector type using a
     * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}.
     * @returns A {@link ElementHandle | element handle} to the first element
     * matching the given selector. Otherwise, `null`.
     */
    $<Selector extends string>(selector: Selector): Promise<ElementHandle<NodeFor<Selector>> | null>;
    /**
     * Queries the current element for all elements matching the given selector.
     *
     * @param selector -
     * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
     * to query the page for.
     * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
     * can be passed as-is and a
     * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
     * allows querying by
     * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
     * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
     * and
     * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
     * and
     * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
     * Alternatively, you can specify the selector type using a
     * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}.
     * @returns An array of {@link ElementHandle | element handles} that point to
     * elements matching the given selector.
     */
    $$<Selector extends string>(selector: Selector, options?: QueryOptions): Promise<Array<ElementHandle<NodeFor<Selector>>>>;
    /**
     * Runs the given function on the first element matching the given selector in
     * the current element.
     *
     * If the given function returns a promise, then this method will wait till
     * the promise resolves.
     *
     * @example
     *
     * ```ts
     * const tweetHandle = await page.$('.tweet');
     * expect(await tweetHandle.$eval('.like', node => node.innerText)).toBe(
     *   '100',
     * );
     * expect(await tweetHandle.$eval('.retweets', node => node.innerText)).toBe(
     *   '10',
     * );
     * ```
     *
     * @param selector -
     * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
     * to query the page for.
     * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
     * can be passed as-is and a
     * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
     * allows querying by
     * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
     * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
     * and
     * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
     * and
     * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
     * Alternatively, you can specify the selector type using a
     * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}.
     * @param pageFunction - The function to be evaluated in this element's page's
     * context. The first element matching the selector will be passed in as the
     * first argument.
     * @param args - Additional arguments to pass to `pageFunction`.
     * @returns A promise to the result of the function.
     */
    $eval<Selector extends string, Params extends unknown[], Func extends EvaluateFuncWith<NodeFor<Selector>, Params> = EvaluateFuncWith<NodeFor<Selector>, Params>>(selector: Selector, pageFunction: Func | string, ...args: Params): Promise<Awaited<ReturnType<Func>>>;
    /**
     * Runs the given function on an array of elements matching the given selector
     * in the current element.
     *
     * If the given function returns a promise, then this method will wait till
     * the promise resolves.
     *
     * @example
     * HTML:
     *
     * ```html
     * <div class="feed">
     *   <div class="tweet">Hello!</div>
     *   <div class="tweet">Hi!</div>
     * </div>
     * ```
     *
     * JavaScript:
     *
     * ```ts
     * const feedHandle = await page.$('.feed');
     *
     * const listOfTweets = await feedHandle.$$eval('.tweet', nodes =>
     *   nodes.map(n => n.innerText),
     * );
     * ```
     *
     * @param selector -
     * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
     * to query the page for.
     * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
     * can be passed as-is and a
     * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
     * allows querying by
     * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
     * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
     * and
     * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
     * and
     * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
     * Alternatively, you can specify the selector type using a
     * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}.
     * @param pageFunction - The function to be evaluated in the element's page's
     * context. An array of elements matching the given selector will be passed to
     * the function as its first argument.
     * @param args - Additional arguments to pass to `pageFunction`.
     * @returns A promise to the result of the function.
     */
    $$eval<Selector extends string, Params extends unknown[], Func extends EvaluateFuncWith<Array<NodeFor<Selector>>, Params> = EvaluateFuncWith<Array<NodeFor<Selector>>, Params>>(selector: Selector, pageFunction: Func | string, ...args: Params): Promise<Awaited<ReturnType<Func>>>;
    /**
     * Wait for an element matching the given selector to appear in the current
     * element.
     *
     * Unlike {@link Frame.waitForSelector}, this method does not work across
     * navigations or if the element is detached from DOM.
     *
     * @example
     *
     * ```ts
     * import puppeteer from 'puppeteer';
     *
     * const browser = await puppeteer.launch();
     * const page = await browser.newPage();
     * let currentURL;
     * page
     *   .mainFrame()
     *   .waitForSelector('img')
     *   .then(() => console.log('First URL with image: ' + currentURL));
     *
     * for (currentURL of [
     *   'https://example.com',
     *   'https://google.com',
     *   'https://bbc.com',
     * ]) {
     *   await page.goto(currentURL);
     * }
     * await browser.close();
     * ```
     *
     * @param selector - The selector to query and wait for.
     * @param options - Options for customizing waiting behavior.
     * @returns An element matching the given selector.
     * @throws Throws if an element matching the given selector doesn't appear.
     */
    waitForSelector<Selector extends string>(selector: Selector, options?: WaitForSelectorOptions): Promise<ElementHandle<NodeFor<Selector>> | null>;
    /**
     * An element is considered to be visible if all of the following is
     * true:
     *
     * - the element has
     *   {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle | computed styles}.
     *
     * - the element has a non-empty
     *   {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect | bounding client rect}.
     *
     * - the element's {@link https://developer.mozilla.org/en-US/docs/Web/CSS/visibility | visibility}
     *   is not `hidden` or `collapse`.
     */
    isVisible(): Promise<boolean>;
    /**
     * An element is considered to be hidden if at least one of the following is true:
     *
     * - the element has no
     *   {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle | computed styles}.
     *
     * - the element has an empty
     *   {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect | bounding client rect}.
     *
     * - the element's {@link https://developer.mozilla.org/en-US/docs/Web/CSS/visibility | visibility}
     *   is `hidden` or `collapse`.
     */
    isHidden(): Promise<boolean>;
    /**
     * Converts the current handle to the given element type.
     *
     * @example
     *
     * ```ts
     * const element: ElementHandle<Element> = await page.$(
     *   '.class-name-of-anchor',
     * );
     * // DO NOT DISPOSE `element`, this will be always be the same handle.
     * const anchor: ElementHandle<HTMLAnchorElement> =
     *   await element.toElement('a');
     * ```
     *
     * @param tagName - The tag name of the desired element type.
     * @throws An error if the handle does not match. **The handle will not be
     * automatically disposed.**
     */
    toElement<K extends keyof HTMLElementTagNameMap | keyof SVGElementTagNameMap>(tagName: K): Promise<HandleFor<ElementFor<K>>>;
    /**
     * Resolves the frame associated with the element, if any. Always exists for
     * HTMLIFrameElements.
     */
    abstract contentFrame(this: ElementHandle<HTMLIFrameElement>): Promise<Frame>;
    abstract contentFrame(): Promise<Frame | null>;
    /**
     * Returns the middle point within an element unless a specific offset is provided.
     */
    clickablePoint(offset?: Offset): Promise<Point>;
    /**
     * This method scrolls element into view if needed, and then
     * uses {@link Page.mouse} to hover over the center of the element.
     * If the element is detached from DOM, the method throws an error.
     */
    hover(this: ElementHandle<Element>): Promise<void>;
    /**
     * This method scrolls element into view if needed, and then
     * uses {@link Page.mouse} to click in the center of the element.
     * If the element is detached from DOM, the method throws an error.
     */
    click(this: ElementHandle<Element>, options?: Readonly<ClickOptions>): Promise<void>;
    /**
     * Drags an element over the given element or point.
     *
     * @returns DEPRECATED. When drag interception is enabled, the drag payload is
     * returned.
     */
    drag(this: ElementHandle<Element>, target: Point | ElementHandle<Element>): Promise<Protocol.Input.DragData | void>;
    /**
     * @deprecated Do not use. `dragenter` will automatically be performed during dragging.
     */
    dragEnter(this: ElementHandle<Element>, data?: Protocol.Input.DragData): Promise<void>;
    /**
     * @deprecated Do not use. `dragover` will automatically be performed during dragging.
     */
    dragOver(this: ElementHandle<Element>, data?: Protocol.Input.DragData): Promise<void>;
    /**
     * Drops the given element onto the current one.
     */
    drop(this: ElementHandle<Element>, element: ElementHandle<Element>): Promise<void>;
    /**
     * @deprecated No longer supported.
     */
    drop(this: ElementHandle<Element>, data?: Protocol.Input.DragData): Promise<void>;
    /**
     * @deprecated Use `ElementHandle.drop` instead.
     */
    dragAndDrop(this: ElementHandle<Element>, target: ElementHandle<Node>, options?: {
        delay: number;
    }): Promise<void>;
    /**
     * Triggers a `change` and `input` event once all the provided options have been
     * selected. If there's no `<select>` element matching `selector`, the method
     * throws an error.
     *
     * @example
     *
     * ```ts
     * handle.select('blue'); // single selection
     * handle.select('red', 'green', 'blue'); // multiple selections
     * ```
     *
     * @param values - Values of options to select. If the `<select>` has the
     * `multiple` attribute, all values are considered, otherwise only the first
     * one is taken into account.
     */
    select(...values: string[]): Promise<string[]>;
    /**
     * Sets the value of an
     * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input | input element}
     * to the given file paths.
     *
     * @remarks This will not validate whether the file paths exists. Also, if a
     * path is relative, then it is resolved against the
     * {@link https://nodejs.org/api/process.html#process_process_cwd | current working directory}.
     * For locals script connecting to remote chrome environments, paths must be
     * absolute.
     */
    abstract uploadFile(this: ElementHandle<HTMLInputElement>, ...paths: string[]): Promise<void>;
    /**
     * @internal
     */
    abstract queryAXTree(name?: string, role?: string): AwaitableIterable<ElementHandle<Node>>;
    /**
     * This method scrolls element into view if needed, and then uses
     * {@link Touchscreen.tap} to tap in the center of the element.
     * If the element is detached from DOM, the method throws an error.
     */
    tap(this: ElementHandle<Element>): Promise<void>;
    /**
     * This method scrolls the element into view if needed, and then
     * starts a touch in the center of the element.
     * @returns A {@link TouchHandle} representing the touch that was started
     */
    touchStart(this: ElementHandle<Element>): Promise<TouchHandle>;
    /**
     * This method scrolls the element into view if needed, and then
     * moves the touch to the center of the element.
     * @param touch - An optional {@link TouchHandle}. If provided, this touch
     * will be moved. If not provided, the first active touch will be moved.
     */
    touchMove(this: ElementHandle<Element>, touch?: TouchHandle): Promise<void>;
    touchEnd(this: ElementHandle<Element>): Promise<void>;
    /**
     * Calls {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus | focus} on the element.
     */
    focus(): Promise<void>;
    /**
     * Focuses the element, and then sends a `keydown`, `keypress`/`input`, and
     * `keyup` event for each character in the text.
     *
     * To press a special key, like `Control` or `ArrowDown`,
     * use {@link ElementHandle.press}.
     *
     * @example
     *
     * ```ts
     * await elementHandle.type('Hello'); // Types instantly
     * await elementHandle.type('World', {delay: 100}); // Types slower, like a user
     * ```
     *
     * @example
     * An example of typing into a text field and then submitting the form:
     *
     * ```ts
     * const elementHandle = await page.$('input');
     * await elementHandle.type('some text');
     * await elementHandle.press('Enter');
     * ```
     *
     * @param options - Delay in milliseconds. Defaults to 0.
     */
    type(text: string, options?: Readonly<KeyboardTypeOptions>): Promise<void>;
    /**
     * Focuses the element, and then uses {@link Keyboard.down} and {@link Keyboard.up}.
     *
     * @remarks
     * If `key` is a single character and no modifier keys besides `Shift`
     * are being held down, a `keypress`/`input` event will also be generated.
     * The `text` option can be specified to force an input event to be generated.
     *
     * **NOTE** Modifier keys DO affect `elementHandle.press`. Holding down `Shift`
     * will type the text in upper case.
     *
     * @param key - Name of key to press, such as `ArrowLeft`.
     * See {@link KeyInput} for a list of all key names.
     */
    press(key: KeyInput, options?: Readonly<KeyPressOptions>): Promise<void>;
    /**
     * This method returns the bounding box of the element (relative to the main frame),
     * or `null` if the element is {@link https://drafts.csswg.org/css-display-4/#box-generation | not part of the layout}
     * (example: `display: none`).
     */
    boundingBox(): Promise<BoundingBox | null>;
    /**
     * This method returns boxes of the element,
     * or `null` if the element is {@link https://drafts.csswg.org/css-display-4/#box-generation | not part of the layout}
     * (example: `display: none`).
     *
     * @remarks
     *
     * Boxes are represented as an array of points;
     * Each Point is an object `{x, y}`. Box points are sorted clock-wise.
     */
    boxModel(): Promise<BoxModel | null>;
    /**
     * This method scrolls element into view if needed, and then uses
     * {@link Page.(screenshot:2) } to take a screenshot of the element.
     * If the element is detached from DOM, the method throws an error.
     */
    screenshot(options: Readonly<ScreenshotOptions> & {
        encoding: 'base64';
    }): Promise<string>;
    screenshot(options?: Readonly<ScreenshotOptions>): Promise<Uint8Array>;
    /**
     * @internal
     */
    protected assertConnectedElement(): Promise<void>;
    /**
     * @internal
     */
    protected scrollIntoViewIfNeeded(this: ElementHandle<Element>): Promise<void>;
    /**
     * Resolves to true if the element is visible in the current viewport. If an
     * element is an SVG, we check if the svg owner element is in the viewport
     * instead. See https://crbug.com/963246.
     *
     * @param options - Threshold for the intersection between 0 (no intersection) and 1
     * (full intersection). Defaults to 1.
     */
    isIntersectingViewport(this: ElementHandle<Element>, options?: {
        threshold?: number;
    }): Promise<boolean>;
    /**
     * Scrolls the element into view using either the automation protocol client
     * or by calling element.scrollIntoView.
     */
    scrollIntoView(this: ElementHandle<Element>): Promise<void>;
    /**
     * Creates a locator based on an ElementHandle. This would not allow
     * refreshing the element handle if it is stale but it allows re-using other
     * locator pre-conditions.
     */
    asLocator(this: ElementHandle<Element>): Locator<Element>;
    /**
     * If the element is a form input, you can use {@link ElementHandle.autofill}
     * to test if the form is compatible with the browser's autofill
     * implementation. Throws an error if the form cannot be autofilled.
     *
     * @remarks
     *
     * Currently, Puppeteer supports auto-filling credit card information only and
     * in Chrome in the new headless and headful modes only.
     *
     * ```ts
     * // Select an input on the credit card form.
     * const name = await page.waitForSelector('form #name');
     * // Trigger autofill with the desired data.
     * await name.autofill({
     *   creditCard: {
     *     number: '4444444444444444',
     *     name: 'John Smith',
     *     expiryMonth: '01',
     *     expiryYear: '2030',
     *     cvc: '123',
     *   },
     * });
     * ```
     */
    abstract autofill(data: AutofillData): Promise<void>;
    /**
     * When connected using Chrome DevTools Protocol, it returns a
     * DOM.BackendNodeId for the element.
     */
    abstract backendNodeId(): Promise<number>;
}
/**
 * Supported autofill address field names.
 *
 * @public
 */
export declare const enum AutofillAddressField {
    NameFirst = "NAME_FIRST",
    NameMiddle = "NAME_MIDDLE",
    NameLast = "NAME_LAST",
    NameFull = "NAME_FULL",
    EmailAddress = "EMAIL_ADDRESS",
    PhoneHomeNumber = "PHONE_HOME_NUMBER",
    PhoneHomeCityAndNumber = "PHONE_HOME_CITY_AND_NUMBER",
    PhoneHomeWholeNumber = "PHONE_HOME_WHOLE_NUMBER",
    AddressHomeLine1 = "ADDRESS_HOME_LINE1",
    AddressHomeLine2 = "ADDRESS_HOME_LINE2",
    AddressHomeStreetAddress = "ADDRESS_HOME_STREET_ADDRESS",
    AddressHomeCity = "ADDRESS_HOME_CITY",
    AddressHomeState = "ADDRESS_HOME_STATE",
    AddressHomeZip = "ADDRESS_HOME_ZIP",
    AddressHomeCountry = "ADDRESS_HOME_COUNTRY"
}
/**
 * @public
 */
export type AutofillData = {
    /**
     * See {@link https://chromedevtools.github.io/devtools-protocol/tot/Autofill/#type-CreditCard | Autofill.CreditCard}.
     */
    creditCard: {
        number: string;
        name: string;
        expiryMonth: string;
        expiryYear: string;
        cvc: string;
    };
    address?: never;
} | {
    /**
     * See {@link https://chromedevtools.github.io/devtools-protocol/tot/Autofill/#type-Address | Autofill.Address}.
     */
    address: {
        fields: Array<{
            /**
             * The field type.
             * See {@link https://source.chromium.org/chromium/chromium/src/+/main:components/autofill/core/browser/field_types.cc}
             * for the full list of supported fields.
             */
            name: AutofillAddressField | (string & Record<never, never>);
            value: string;
        }>;
    };
    creditCard?: never;
};
//# sourceMappingURL=ElementHandle.d.ts.map