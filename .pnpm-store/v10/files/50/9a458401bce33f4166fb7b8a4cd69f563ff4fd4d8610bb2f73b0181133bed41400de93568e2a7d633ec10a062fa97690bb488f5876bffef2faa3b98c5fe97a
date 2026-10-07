/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import type {Protocol} from 'devtools-protocol';

import type {Frame} from '../api/Frame.js';
import {getQueryHandlerAndSelector} from '../common/GetQueryHandler.js';
import {LazyArg} from '../common/LazyArg.js';
import type {
  AwaitableIterable,
  ElementFor,
  EvaluateFuncWith,
  HandleFor,
  HandleOr,
  NodeFor,
} from '../common/types.js';
import type {KeyInput} from '../common/USKeyboardLayout.js';
import {isString, withSourcePuppeteerURLIfNone} from '../common/util.js';
import {assert} from '../util/assert.js';
import {AsyncIterableUtil} from '../util/AsyncIterableUtil.js';
import {throwIfDisposed} from '../util/decorators.js';

import {_isElementHandle} from './ElementHandleSymbol.js';
import type {
  KeyboardTypeOptions,
  KeyPressOptions,
  MouseClickOptions,
  TouchHandle,
} from './Input.js';
import {JSHandle} from './JSHandle.js';
import type {Locator} from './locators/locators.js';
import {NodeLocator} from './locators/locators.js';
import type {
  QueryOptions,
  ScreenshotOptions,
  WaitForSelectorOptions,
} from './Page.js';

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
export function bindIsolatedHandle<This extends ElementHandle<Node>>(
  target: (this: This, ...args: any[]) => Promise<any>,
  _: unknown,
): typeof target {
  return async function (...args) {
    // If the handle is already isolated, then we don't need to adopt it
    // again.
    if (this.realm === this.frame.isolatedRealm()) {
      return await target.call(this, ...args);
    }
    let adoptedThis: This;
    if (this['isolatedHandle']) {
      adoptedThis = this['isolatedHandle'];
    } else {
      this['isolatedHandle'] = adoptedThis = await this.frame
        .isolatedRealm()
        .adoptHandle(this);
    }
    const result = await target.call(adoptedThis, ...args);
    // If the function returns `adoptedThis`, then we return `this`.
    if (result === adoptedThis) {
      return this;
    }
    // If the function returns a handle, transfer it into the current realm.
    if (result instanceof JSHandle) {
      return await this.realm.transferHandle(result);
    }
    // If the function returns an array of handlers, transfer them into the
    // current realm.
    if (Array.isArray(result)) {
      await Promise.all(
        result.map(async (item, index, result) => {
          if (item instanceof JSHandle) {
            result[index] = await this.realm.transferHandle(item);
          }
        }),
      );
    }
    if (result instanceof Map) {
      await Promise.all(
        [...result.entries()].map(async ([key, value]) => {
          if (value instanceof JSHandle) {
            result.set(key, await this.realm.transferHandle(value));
          }
        }),
      );
    }
    return result;
  };
}

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
export abstract class ElementHandle<
  ElementType extends Node = Element,
> extends JSHandle<ElementType> {
  /**
   * @internal
   */
  declare [_isElementHandle]: boolean;

  /**
   * @internal
   * Cached isolatedHandle to prevent
   * trying to adopt it multiple times
   */
  isolatedHandle?: typeof this;

  /**
   * @internal
   */
  protected readonly handle;

  /**
   * @internal
   */
  constructor(handle: JSHandle<ElementType>) {
    super();
    this.handle = handle;
    this[_isElementHandle] = true;
  }

  /**
   * @internal
   */
  override get id(): string | undefined {
    return this.handle.id;
  }

  /**
   * @internal
   */
  override get disposed(): boolean {
    return this.handle.disposed;
  }

  /**
   * @internal
   */
  @throwIfDisposed()
  @bindIsolatedHandle
  override async getProperty<K extends keyof ElementType>(
    propertyName: HandleOr<K>,
  ): Promise<HandleFor<ElementType[K]>> {
    return await this.handle.getProperty(propertyName);
  }

  /**
   * @internal
   */
  @throwIfDisposed()
  @bindIsolatedHandle
  override async getProperties(): Promise<Map<string, JSHandle>> {
    return await this.handle.getProperties();
  }

  /**
   * @internal
   */
  override async evaluate<
    Params extends unknown[],
    Func extends EvaluateFuncWith<ElementType, Params> = EvaluateFuncWith<
      ElementType,
      Params
    >,
  >(
    pageFunction: Func | string,
    ...args: Params
  ): Promise<Awaited<ReturnType<Func>>> {
    pageFunction = withSourcePuppeteerURLIfNone(
      this.evaluate.name,
      pageFunction,
    );
    return await this.handle.evaluate(pageFunction, ...args);
  }

  /**
   * @internal
   */
  override async evaluateHandle<
    Params extends unknown[],
    Func extends EvaluateFuncWith<ElementType, Params> = EvaluateFuncWith<
      ElementType,
      Params
    >,
  >(
    pageFunction: Func | string,
    ...args: Params
  ): Promise<HandleFor<Awaited<ReturnType<Func>>>> {
    pageFunction = withSourcePuppeteerURLIfNone(
      this.evaluateHandle.name,
      pageFunction,
    );
    return await this.handle.evaluateHandle(pageFunction, ...args);
  }

  /**
   * @internal
   */
  @throwIfDisposed()
  @bindIsolatedHandle
  override async jsonValue(): Promise<ElementType> {
    return await this.handle.jsonValue();
  }

  /**
   * @internal
   */
  override toString(): string {
    return this.handle.toString();
  }

  /**
   * @internal
   */
  override remoteObject(): Protocol.Runtime.RemoteObject {
    return this.handle.remoteObject();
  }

  /**
   * @internal
   */
  override async dispose(): Promise<void> {
    await Promise.all([this.handle.dispose(), this.isolatedHandle?.dispose()]);
  }

  /**
   * @internal
   */
  override asElement(): ElementHandle<ElementType> {
    return this;
  }

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
  @throwIfDisposed()
  @bindIsolatedHandle
  async $<Selector extends string>(
    selector: Selector,
  ): Promise<ElementHandle<NodeFor<Selector>> | null> {
    const {updatedSelector, QueryHandler} =
      getQueryHandlerAndSelector(selector);
    return (await QueryHandler.queryOne(
      this,
      updatedSelector,
    )) as ElementHandle<NodeFor<Selector>> | null;
  }

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
  @throwIfDisposed()
  async $$<Selector extends string>(
    selector: Selector,
    options?: QueryOptions,
  ): Promise<Array<ElementHandle<NodeFor<Selector>>>> {
    if (options?.isolate === false) {
      return await this.#$$impl(selector);
    }
    return await this.#$$(selector);
  }

  /**
   * Isolates {@link ElementHandle.$$} if needed.
   *
   * @internal
   */
  @bindIsolatedHandle
  async #$$<Selector extends string>(
    selector: Selector,
  ): Promise<Array<ElementHandle<NodeFor<Selector>>>> {
    return await this.#$$impl(selector);
  }

  /**
   * Implementation for {@link ElementHandle.$$}.
   *
   * @internal
   */
  async #$$impl<Selector extends string>(
    selector: Selector,
  ): Promise<Array<ElementHandle<NodeFor<Selector>>>> {
    const {updatedSelector, QueryHandler} =
      getQueryHandlerAndSelector(selector);
    return await (AsyncIterableUtil.collect(
      QueryHandler.queryAll(this, updatedSelector),
    ) as Promise<Array<ElementHandle<NodeFor<Selector>>>>);
  }

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
  async $eval<
    Selector extends string,
    Params extends unknown[],
    Func extends EvaluateFuncWith<NodeFor<Selector>, Params> = EvaluateFuncWith<
      NodeFor<Selector>,
      Params
    >,
  >(
    selector: Selector,
    pageFunction: Func | string,
    ...args: Params
  ): Promise<Awaited<ReturnType<Func>>> {
    pageFunction = withSourcePuppeteerURLIfNone(this.$eval.name, pageFunction);
    using elementHandle = await this.$(selector);
    if (!elementHandle) {
      throw new Error(
        `Error: failed to find element matching selector "${selector}"`,
      );
    }
    return await elementHandle.evaluate(pageFunction, ...args);
  }

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
  async $$eval<
    Selector extends string,
    Params extends unknown[],
    Func extends EvaluateFuncWith<Array<NodeFor<Selector>>, Params> =
      EvaluateFuncWith<Array<NodeFor<Selector>>, Params>,
  >(
    selector: Selector,
    pageFunction: Func | string,
    ...args: Params
  ): Promise<Awaited<ReturnType<Func>>> {
    pageFunction = withSourcePuppeteerURLIfNone(this.$$eval.name, pageFunction);
    const results = await this.$$(selector);
    using elements = await this.evaluateHandle(
      (_, ...elements) => {
        return elements;
      },
      ...results,
    );
    const [result] = await Promise.all([
      elements.evaluate(pageFunction, ...args),
      ...results.map(results => {
        return results.dispose();
      }),
    ]);
    return result;
  }

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
  @throwIfDisposed()
  @bindIsolatedHandle
  async waitForSelector<Selector extends string>(
    selector: Selector,
    options: WaitForSelectorOptions = {},
  ): Promise<ElementHandle<NodeFor<Selector>> | null> {
    const {updatedSelector, QueryHandler, polling} =
      getQueryHandlerAndSelector(selector);
    return (await QueryHandler.waitFor(this, updatedSelector, {
      polling,
      ...options,
    })) as ElementHandle<NodeFor<Selector>> | null;
  }

  async #checkVisibility(visibility: boolean): Promise<boolean> {
    return await this.evaluate(
      async (element, PuppeteerUtil, visibility) => {
        return Boolean(PuppeteerUtil.checkVisibility(element, visibility));
      },
      LazyArg.create(context => {
        return context.puppeteerUtil;
      }),
      visibility,
    );
  }

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
  @throwIfDisposed()
  @bindIsolatedHandle
  async isVisible(): Promise<boolean> {
    return await this.#checkVisibility(true);
  }

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
  @throwIfDisposed()
  @bindIsolatedHandle
  async isHidden(): Promise<boolean> {
    return await this.#checkVisibility(false);
  }

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
  @throwIfDisposed()
  @bindIsolatedHandle
  async toElement<
    K extends keyof HTMLElementTagNameMap | keyof SVGElementTagNameMap,
  >(tagName: K): Promise<HandleFor<ElementFor<K>>> {
    const isMatchingTagName = await this.evaluate((node, tagName) => {
      return node.nodeName === tagName.toUpperCase();
    }, tagName);
    if (!isMatchingTagName) {
      throw new Error(`Element is not a(n) \`${tagName}\` element`);
    }
    return this as unknown as HandleFor<ElementFor<K>>;
  }

  /**
   * Resolves the frame associated with the element, if any. Always exists for
   * HTMLIFrameElements.
   */
  abstract contentFrame(this: ElementHandle<HTMLIFrameElement>): Promise<Frame>;
  abstract contentFrame(): Promise<Frame | null>;

  /**
   * Returns the middle point within an element unless a specific offset is provided.
   */
  @throwIfDisposed()
  @bindIsolatedHandle
  async clickablePoint(offset?: Offset): Promise<Point> {
    const box = await this.#clickableBox();
    if (!box) {
      throw new Error('Node is either not clickable or not an Element');
    }
    if (offset !== undefined) {
      return {
        x: box.x + offset.x,
        y: box.y + offset.y,
      };
    }
    return {
      x: box.x + box.width / 2,
      y: box.y + box.height / 2,
    };
  }

  /**
   * This method scrolls element into view if needed, and then
   * uses {@link Page.mouse} to hover over the center of the element.
   * If the element is detached from DOM, the method throws an error.
   */
  @throwIfDisposed()
  @bindIsolatedHandle
  async hover(this: ElementHandle<Element>): Promise<void> {
    await this.scrollIntoViewIfNeeded();
    const {x, y} = await this.clickablePoint();
    await this.frame.page().mouse.move(x, y);
  }

  /**
   * This method scrolls element into view if needed, and then
   * uses {@link Page.mouse} to click in the center of the element.
   * If the element is detached from DOM, the method throws an error.
   */
  @throwIfDisposed()
  @bindIsolatedHandle
  async click(
    this: ElementHandle<Element>,
    options: Readonly<ClickOptions> = {},
  ): Promise<void> {
    await this.scrollIntoViewIfNeeded();
    const {x, y} = await this.clickablePoint(options.offset);
    try {
      await this.frame.page().mouse.click(x, y, options);
    } finally {
      if (options.debugHighlight) {
        await this.frame.page().evaluate(
          (x, y) => {
            const highlight = document.createElement('div');
            highlight.innerHTML = `<style>
        @scope {
          :scope {
              position: fixed;
              left: ${x}px;
              top: ${y}px;
              width: 10px;
              height: 10px;
              border-radius: 50%;
              animation: colorChange 10s 1 normal;
              animation-fill-mode: forwards;
          }

          @keyframes colorChange {
              from {
                  background-color: red;
              }
              to {
                  background-color: #FADADD00;
              }
          }
        }
      </style>`;
            highlight.addEventListener(
              'animationend',
              () => {
                highlight.remove();
              },
              {once: true},
            );
            document.body.append(highlight);
          },
          x,
          y,
        );
      }
    }
  }

  /**
   * Drags an element over the given element or point.
   *
   * @returns DEPRECATED. When drag interception is enabled, the drag payload is
   * returned.
   */
  @throwIfDisposed()
  @bindIsolatedHandle
  async drag(
    this: ElementHandle<Element>,
    target: Point | ElementHandle<Element>,
  ): Promise<Protocol.Input.DragData | void> {
    await this.scrollIntoViewIfNeeded();
    const page = this.frame.page();
    if (page.isDragInterceptionEnabled()) {
      const source = await this.clickablePoint();
      if (target instanceof ElementHandle) {
        target = await target.clickablePoint();
      }
      return await page.mouse.drag(source, target);
    }
    try {
      if (!page._isDragging) {
        page._isDragging = true;
        await this.hover();
        await page.mouse.down();
      }
      if (target instanceof ElementHandle) {
        await target.hover();
      } else {
        await page.mouse.move(target.x, target.y);
      }
    } catch (error) {
      page._isDragging = false;
      throw error;
    }
  }

  /**
   * @deprecated Do not use. `dragenter` will automatically be performed during dragging.
   */
  @throwIfDisposed()
  @bindIsolatedHandle
  async dragEnter(
    this: ElementHandle<Element>,
    data: Protocol.Input.DragData = {items: [], dragOperationsMask: 1},
  ): Promise<void> {
    const page = this.frame.page();
    await this.scrollIntoViewIfNeeded();
    const target = await this.clickablePoint();
    await page.mouse.dragEnter(target, data);
  }

  /**
   * @deprecated Do not use. `dragover` will automatically be performed during dragging.
   */
  @throwIfDisposed()
  @bindIsolatedHandle
  async dragOver(
    this: ElementHandle<Element>,
    data: Protocol.Input.DragData = {items: [], dragOperationsMask: 1},
  ): Promise<void> {
    const page = this.frame.page();
    await this.scrollIntoViewIfNeeded();
    const target = await this.clickablePoint();
    await page.mouse.dragOver(target, data);
  }

  /**
   * Drops the given element onto the current one.
   */
  async drop(
    this: ElementHandle<Element>,
    element: ElementHandle<Element>,
  ): Promise<void>;

  /**
   * @deprecated No longer supported.
   */
  async drop(
    this: ElementHandle<Element>,
    data?: Protocol.Input.DragData,
  ): Promise<void>;

  /**
   * @internal
   */
  @throwIfDisposed()
  @bindIsolatedHandle
  async drop(
    this: ElementHandle<Element>,
    dataOrElement: ElementHandle<Element> | Protocol.Input.DragData = {
      items: [],
      dragOperationsMask: 1,
    },
  ): Promise<void> {
    const page = this.frame.page();
    if ('items' in dataOrElement) {
      await this.scrollIntoViewIfNeeded();
      const destination = await this.clickablePoint();
      await page.mouse.drop(destination, dataOrElement);
    } else {
      // Note if the rest errors, we still want dragging off because the errors
      // is most likely something implying the mouse is no longer dragging.
      await dataOrElement.drag(this);
      page._isDragging = false;
      await page.mouse.up();
    }
  }

  /**
   * @deprecated Use `ElementHandle.drop` instead.
   */
  @throwIfDisposed()
  @bindIsolatedHandle
  async dragAndDrop(
    this: ElementHandle<Element>,
    target: ElementHandle<Node>,
    options?: {delay: number},
  ): Promise<void> {
    const page = this.frame.page();
    assert(
      page.isDragInterceptionEnabled(),
      'Drag Interception is not enabled!',
    );
    await this.scrollIntoViewIfNeeded();
    const startPoint = await this.clickablePoint();
    const targetPoint = await target.clickablePoint();
    await page.mouse.dragAndDrop(startPoint, targetPoint, options);
  }

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
  @throwIfDisposed()
  @bindIsolatedHandle
  async select(...values: string[]): Promise<string[]> {
    for (const value of values) {
      assert(
        isString(value),
        'Values must be strings. Found value "' +
          value +
          '" of type "' +
          typeof value +
          '"',
      );
    }

    return await this.evaluate((element, vals): string[] => {
      const values = new Set(vals);
      if (!(element instanceof HTMLSelectElement)) {
        throw new Error('Element is not a <select> element.');
      }

      const selectedValues = new Set<string>();
      if (!element.multiple) {
        for (const option of element.options) {
          option.selected = false;
        }
        for (const option of element.options) {
          if (values.has(option.value)) {
            option.selected = true;
            selectedValues.add(option.value);
            break;
          }
        }
      } else {
        for (const option of element.options) {
          option.selected = values.has(option.value);
          if (option.selected) {
            selectedValues.add(option.value);
          }
        }
      }
      element.dispatchEvent(new Event('input', {bubbles: true}));
      element.dispatchEvent(new Event('change', {bubbles: true}));
      return [...selectedValues.values()];
    }, values);
  }

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
  abstract uploadFile(
    this: ElementHandle<HTMLInputElement>,
    ...paths: string[]
  ): Promise<void>;

  /**
   * @internal
   */
  abstract queryAXTree(
    name?: string,
    role?: string,
  ): AwaitableIterable<ElementHandle<Node>>;

  /**
   * This method scrolls element into view if needed, and then uses
   * {@link Touchscreen.tap} to tap in the center of the element.
   * If the element is detached from DOM, the method throws an error.
   */
  @throwIfDisposed()
  @bindIsolatedHandle
  async tap(this: ElementHandle<Element>): Promise<void> {
    await this.scrollIntoViewIfNeeded();
    const {x, y} = await this.clickablePoint();
    await this.frame.page().touchscreen.tap(x, y);
  }

  /**
   * This method scrolls the element into view if needed, and then
   * starts a touch in the center of the element.
   * @returns A {@link TouchHandle} representing the touch that was started
   */
  @throwIfDisposed()
  @bindIsolatedHandle
  async touchStart(this: ElementHandle<Element>): Promise<TouchHandle> {
    await this.scrollIntoViewIfNeeded();
    const {x, y} = await this.clickablePoint();
    return await this.frame.page().touchscreen.touchStart(x, y);
  }

  /**
   * This method scrolls the element into view if needed, and then
   * moves the touch to the center of the element.
   * @param touch - An optional {@link TouchHandle}. If provided, this touch
   * will be moved. If not provided, the first active touch will be moved.
   */
  @throwIfDisposed()
  @bindIsolatedHandle
  async touchMove(
    this: ElementHandle<Element>,
    touch?: TouchHandle,
  ): Promise<void> {
    await this.scrollIntoViewIfNeeded();
    const {x, y} = await this.clickablePoint();
    if (touch) {
      return await touch.move(x, y);
    }
    await this.frame.page().touchscreen.touchMove(x, y);
  }

  @throwIfDisposed()
  @bindIsolatedHandle
  async touchEnd(this: ElementHandle<Element>): Promise<void> {
    await this.scrollIntoViewIfNeeded();
    await this.frame.page().touchscreen.touchEnd();
  }

  /**
   * Calls {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus | focus} on the element.
   */
  @throwIfDisposed()
  @bindIsolatedHandle
  async focus(): Promise<void> {
    await this.evaluate(element => {
      if (!(element instanceof HTMLElement)) {
        throw new Error('Cannot focus non-HTMLElement');
      }
      return element.focus();
    });
  }

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
  @throwIfDisposed()
  @bindIsolatedHandle
  async type(
    text: string,
    options?: Readonly<KeyboardTypeOptions>,
  ): Promise<void> {
    await this.focus();
    await this.frame.page().keyboard.type(text, options);
  }

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
  @throwIfDisposed()
  @bindIsolatedHandle
  async press(
    key: KeyInput,
    options?: Readonly<KeyPressOptions>,
  ): Promise<void> {
    await this.focus();
    await this.frame.page().keyboard.press(key, options);
  }

  async #clickableBox(): Promise<BoundingBox | null> {
    const boxes = await this.evaluate(element => {
      if (!(element instanceof Element)) {
        return null;
      }
      return [...element.getClientRects()].map(rect => {
        return {x: rect.x, y: rect.y, width: rect.width, height: rect.height};
      });
    });
    if (!boxes?.length) {
      return null;
    }
    await this.#intersectBoundingBoxesWithFrame(boxes);
    let frame = this.frame;
    let parentFrame: Frame | null | undefined;
    while ((parentFrame = frame?.parentFrame())) {
      using handle = await frame.frameElement();
      if (!handle) {
        throw new Error('Unsupported frame type');
      }
      const parentBox = await handle.evaluate(element => {
        // Element is not visible.
        if (element.getClientRects().length === 0) {
          return null;
        }
        const rect = element.getBoundingClientRect();
        const style = window.getComputedStyle(element);
        return {
          left:
            rect.left +
            parseInt(style.paddingLeft, 10) +
            parseInt(style.borderLeftWidth, 10),
          top:
            rect.top +
            parseInt(style.paddingTop, 10) +
            parseInt(style.borderTopWidth, 10),
        };
      });
      if (!parentBox) {
        return null;
      }
      for (const box of boxes) {
        box.x += parentBox.left;
        box.y += parentBox.top;
      }
      await handle.#intersectBoundingBoxesWithFrame(boxes);
      frame = parentFrame;
    }
    const box = boxes.find(box => {
      return box.width >= 1 && box.height >= 1;
    });
    if (!box) {
      return null;
    }
    return {
      x: box.x,
      y: box.y,
      height: box.height,
      width: box.width,
    };
  }

  async #intersectBoundingBoxesWithFrame(boxes: BoundingBox[]) {
    const {documentWidth, documentHeight} = await this.frame
      .isolatedRealm()
      .evaluate(() => {
        return {
          documentWidth: document.documentElement.clientWidth,
          documentHeight: document.documentElement.clientHeight,
        };
      });
    for (const box of boxes) {
      intersectBoundingBox(box, documentWidth, documentHeight);
    }
  }

  /**
   * This method returns the bounding box of the element (relative to the main frame),
   * or `null` if the element is {@link https://drafts.csswg.org/css-display-4/#box-generation | not part of the layout}
   * (example: `display: none`).
   */
  @throwIfDisposed()
  @bindIsolatedHandle
  async boundingBox(): Promise<BoundingBox | null> {
    const box = await this.evaluate(element => {
      if (!(element instanceof Element)) {
        return null;
      }
      // Element is not visible.
      if (element.getClientRects().length === 0) {
        return null;
      }
      const rect = element.getBoundingClientRect();
      return {x: rect.x, y: rect.y, width: rect.width, height: rect.height};
    });
    if (!box) {
      return null;
    }
    const offset = await this.#getTopLeftCornerOfFrame();
    if (!offset) {
      return null;
    }
    return {
      x: box.x + offset.x,
      y: box.y + offset.y,
      height: box.height,
      width: box.width,
    };
  }

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
  @throwIfDisposed()
  @bindIsolatedHandle
  async boxModel(): Promise<BoxModel | null> {
    const model = await this.evaluate(element => {
      if (!(element instanceof Element)) {
        return null;
      }
      // Element is not visible.
      if (element.getClientRects().length === 0) {
        return null;
      }
      const rect = element.getBoundingClientRect();
      const style = window.getComputedStyle(element);
      const offsets = {
        padding: {
          left: parseInt(style.paddingLeft, 10),
          top: parseInt(style.paddingTop, 10),
          right: parseInt(style.paddingRight, 10),
          bottom: parseInt(style.paddingBottom, 10),
        },
        margin: {
          left: -parseInt(style.marginLeft, 10),
          top: -parseInt(style.marginTop, 10),
          right: -parseInt(style.marginRight, 10),
          bottom: -parseInt(style.marginBottom, 10),
        },
        border: {
          left: parseInt(style.borderLeft, 10),
          top: parseInt(style.borderTop, 10),
          right: parseInt(style.borderRight, 10),
          bottom: parseInt(style.borderBottom, 10),
        },
      };
      const border: Quad = [
        {x: rect.left, y: rect.top},
        {x: rect.left + rect.width, y: rect.top},
        {x: rect.left + rect.width, y: rect.top + rect.height},
        {x: rect.left, y: rect.top + rect.height},
      ];
      const padding = transformQuadWithOffsets(border, offsets.border);
      const content = transformQuadWithOffsets(padding, offsets.padding);
      const margin = transformQuadWithOffsets(border, offsets.margin);
      return {
        content,
        padding,
        border,
        margin,
        width: rect.width,
        height: rect.height,
      };

      function transformQuadWithOffsets(
        quad: Quad,
        offsets: {top: number; left: number; right: number; bottom: number},
      ): Quad {
        return [
          {
            x: quad[0].x + offsets.left,
            y: quad[0].y + offsets.top,
          },
          {
            x: quad[1].x - offsets.right,
            y: quad[1].y + offsets.top,
          },
          {
            x: quad[2].x - offsets.right,
            y: quad[2].y - offsets.bottom,
          },
          {
            x: quad[3].x + offsets.left,
            y: quad[3].y - offsets.bottom,
          },
        ];
      }
    });
    if (!model) {
      return null;
    }
    const offset = await this.#getTopLeftCornerOfFrame();
    if (!offset) {
      return null;
    }
    for (const attribute of [
      'content',
      'padding',
      'border',
      'margin',
    ] as const) {
      for (const point of model[attribute]) {
        point.x += offset.x;
        point.y += offset.y;
      }
    }
    return model;
  }

  async #getTopLeftCornerOfFrame() {
    const point = {x: 0, y: 0};
    let frame = this.frame;
    let parentFrame: Frame | null | undefined;
    while ((parentFrame = frame?.parentFrame())) {
      using handle = await frame.frameElement();
      if (!handle) {
        throw new Error('Unsupported frame type');
      }
      const parentBox = await handle.evaluate(element => {
        // Element is not visible.
        if (element.getClientRects().length === 0) {
          return null;
        }
        const rect = element.getBoundingClientRect();
        const style = window.getComputedStyle(element);
        return {
          left:
            rect.left +
            parseInt(style.paddingLeft, 10) +
            parseInt(style.borderLeftWidth, 10),
          top:
            rect.top +
            parseInt(style.paddingTop, 10) +
            parseInt(style.borderTopWidth, 10),
        };
      });
      if (!parentBox) {
        return null;
      }
      point.x += parentBox.left;
      point.y += parentBox.top;
      frame = parentFrame;
    }
    return point;
  }

  /**
   * This method scrolls element into view if needed, and then uses
   * {@link Page.(screenshot:2) } to take a screenshot of the element.
   * If the element is detached from DOM, the method throws an error.
   */
  async screenshot(
    options: Readonly<ScreenshotOptions> & {encoding: 'base64'},
  ): Promise<string>;
  async screenshot(options?: Readonly<ScreenshotOptions>): Promise<Uint8Array>;
  @throwIfDisposed()
  @bindIsolatedHandle
  async screenshot(
    this: ElementHandle<Element>,
    options: Readonly<ElementScreenshotOptions> = {},
  ): Promise<string | Uint8Array> {
    const {scrollIntoView = true, clip} = options;

    const page = this.frame.page();

    // Only scroll the element into view if the user wants it.
    if (scrollIntoView) {
      await this.scrollIntoViewIfNeeded();
    }
    const elementClip = await this.#nonEmptyVisibleBoundingBox();

    const [pageLeft, pageTop] = await this.evaluate(() => {
      if (!window.visualViewport) {
        throw new Error('window.visualViewport is not supported.');
      }
      return [
        window.visualViewport.pageLeft,
        window.visualViewport.pageTop,
      ] as const;
    });
    elementClip.x += pageLeft;
    elementClip.y += pageTop;
    if (clip) {
      elementClip.x += clip.x;
      elementClip.y += clip.y;
      elementClip.height = clip.height;
      elementClip.width = clip.width;
    }

    return await page.screenshot({...options, clip: elementClip});
  }

  async #nonEmptyVisibleBoundingBox() {
    const box = await this.boundingBox();
    assert(box, 'Node is either not visible or not an HTMLElement');
    assert(box.width !== 0, 'Node has 0 width.');
    assert(box.height !== 0, 'Node has 0 height.');
    return box;
  }

  /**
   * @internal
   */
  protected async assertConnectedElement(): Promise<void> {
    const error = await this.evaluate(async element => {
      if (!element.isConnected) {
        return 'Node is detached from document';
      }
      if (element.nodeType !== Node.ELEMENT_NODE) {
        return 'Node is not of type HTMLElement';
      }
      return;
    });

    if (error) {
      throw new Error(error);
    }
  }

  /**
   * @internal
   */
  protected async scrollIntoViewIfNeeded(
    this: ElementHandle<Element>,
  ): Promise<void> {
    if (
      await this.isIntersectingViewport({
        threshold: 1,
      })
    ) {
      return;
    }
    await this.scrollIntoView();
  }

  /**
   * Resolves to true if the element is visible in the current viewport. If an
   * element is an SVG, we check if the svg owner element is in the viewport
   * instead. See https://crbug.com/963246.
   *
   * @param options - Threshold for the intersection between 0 (no intersection) and 1
   * (full intersection). Defaults to 1.
   */
  @throwIfDisposed()
  @bindIsolatedHandle
  async isIntersectingViewport(
    this: ElementHandle<Element>,
    options: {
      threshold?: number;
    } = {},
  ): Promise<boolean> {
    await this.assertConnectedElement();
    // eslint-disable-next-line @puppeteer/use-using -- Returns `this`.
    const handle = await this.#asSVGElementHandle();
    using target = handle && (await handle.#getOwnerSVGElement());
    return await ((target ?? this) as ElementHandle<Element>).evaluate(
      async (element, threshold) => {
        const visibleRatio = await new Promise<number>(resolve => {
          const observer = new IntersectionObserver(entries => {
            resolve(entries[0]!.intersectionRatio);
            observer.disconnect();
          });
          observer.observe(element);
        });
        return threshold === 1 ? visibleRatio === 1 : visibleRatio > threshold;
      },
      options.threshold ?? 0,
    );
  }

  /**
   * Scrolls the element into view using either the automation protocol client
   * or by calling element.scrollIntoView.
   */
  @throwIfDisposed()
  @bindIsolatedHandle
  async scrollIntoView(this: ElementHandle<Element>): Promise<void> {
    await this.assertConnectedElement();
    await this.evaluate(async (element): Promise<void> => {
      element.scrollIntoView({
        block: 'center',
        inline: 'center',
        behavior: 'instant',
      });
    });
  }

  /**
   * Creates a locator based on an ElementHandle. This would not allow
   * refreshing the element handle if it is stale but it allows re-using other
   * locator pre-conditions.
   */
  @throwIfDisposed()
  asLocator(this: ElementHandle<Element>): Locator<Element> {
    return NodeLocator.createFromHandle(this.frame, this);
  }

  /**
   * Returns true if an element is an SVGElement (included svg, path, rect
   * etc.).
   */
  async #asSVGElementHandle(
    this: ElementHandle<Element>,
  ): Promise<ElementHandle<SVGElement> | null> {
    if (
      await this.evaluate(element => {
        return element instanceof SVGElement;
      })
    ) {
      return this as ElementHandle<SVGElement>;
    } else {
      return null;
    }
  }

  async #getOwnerSVGElement(
    this: ElementHandle<SVGElement>,
  ): Promise<ElementHandle<SVGSVGElement>> {
    // SVGSVGElement.ownerSVGElement === null.
    return await this.evaluateHandle(element => {
      if (element instanceof SVGSVGElement) {
        return element;
      }
      return element.ownerSVGElement!;
    });
  }

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
export const enum AutofillAddressField {
  NameFirst = 'NAME_FIRST',
  NameMiddle = 'NAME_MIDDLE',
  NameLast = 'NAME_LAST',
  NameFull = 'NAME_FULL',
  EmailAddress = 'EMAIL_ADDRESS',
  PhoneHomeNumber = 'PHONE_HOME_NUMBER',
  PhoneHomeCityAndNumber = 'PHONE_HOME_CITY_AND_NUMBER',
  PhoneHomeWholeNumber = 'PHONE_HOME_WHOLE_NUMBER',
  AddressHomeLine1 = 'ADDRESS_HOME_LINE1',
  AddressHomeLine2 = 'ADDRESS_HOME_LINE2',
  AddressHomeStreetAddress = 'ADDRESS_HOME_STREET_ADDRESS',
  AddressHomeCity = 'ADDRESS_HOME_CITY',
  AddressHomeState = 'ADDRESS_HOME_STATE',
  AddressHomeZip = 'ADDRESS_HOME_ZIP',
  AddressHomeCountry = 'ADDRESS_HOME_COUNTRY',
}

/**
 * @public
 */
export type AutofillData =
  | {
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
    }
  | {
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

function intersectBoundingBox(
  box: BoundingBox,
  width: number,
  height: number,
): void {
  box.width = Math.max(
    box.x >= 0
      ? Math.min(width - box.x, box.width)
      : Math.min(width, box.width + box.x),
    0,
  );
  box.height = Math.max(
    box.y >= 0
      ? Math.min(height - box.y, box.height)
      : Math.min(height, box.height + box.y),
    0,
  );
  box.x = Math.max(box.x, 0);
  box.y = Math.max(box.y, 0);
}
